(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin_kotlin.js', './kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.js', './kotlin_co_touchlab_stately_common.js', './kotlin_co_touchlab_stately_isolate.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin_kotlin.js'), require('./kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.js'), require('./kotlin_co_touchlab_stately_common.js'), require('./kotlin_co_touchlab_stately_isolate.js'));
  else {
    if (typeof kotlin_kotlin === 'undefined') {
      throw new Error("Error loading module 'kotlin_bedalton_creatures_CommonCore'. Its dependency 'kotlin_kotlin' was not found. Please, check whether 'kotlin_kotlin' is loaded prior to 'kotlin_bedalton_creatures_CommonCore'.");
    }
    if (typeof kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core === 'undefined') {
      throw new Error("Error loading module 'kotlin_bedalton_creatures_CommonCore'. Its dependency 'kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core' was not found. Please, check whether 'kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core' is loaded prior to 'kotlin_bedalton_creatures_CommonCore'.");
    }
    if (typeof kotlin_co_touchlab_stately_common === 'undefined') {
      throw new Error("Error loading module 'kotlin_bedalton_creatures_CommonCore'. Its dependency 'kotlin_co_touchlab_stately_common' was not found. Please, check whether 'kotlin_co_touchlab_stately_common' is loaded prior to 'kotlin_bedalton_creatures_CommonCore'.");
    }
    if (typeof kotlin_co_touchlab_stately_isolate === 'undefined') {
      throw new Error("Error loading module 'kotlin_bedalton_creatures_CommonCore'. Its dependency 'kotlin_co_touchlab_stately_isolate' was not found. Please, check whether 'kotlin_co_touchlab_stately_isolate' is loaded prior to 'kotlin_bedalton_creatures_CommonCore'.");
    }
    root.kotlin_bedalton_creatures_CommonCore = factory(typeof kotlin_bedalton_creatures_CommonCore === 'undefined' ? {} : kotlin_bedalton_creatures_CommonCore, kotlin_kotlin, kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core, kotlin_co_touchlab_stately_common, kotlin_co_touchlab_stately_isolate);
  }
}(this, function (_, kotlin_kotlin, kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core, kotlin_co_touchlab_stately_common, kotlin_co_touchlab_stately_isolate) {
  //region block: imports
  var imul = Math.imul;
  var Unit_getInstance = kotlin_kotlin.$crossModule$.Unit_getInstance;
  var until = kotlin_kotlin.$crossModule$.until;
  var collectionSizeOrDefault = kotlin_kotlin.$crossModule$.collectionSizeOrDefault;
  var ArrayList_init_$Create$ = kotlin_kotlin.$crossModule$.ArrayList_init_$Create$;
  var toByteArray = kotlin_kotlin.$crossModule$.toByteArray;
  var Long = kotlin_kotlin.$crossModule$.Long;
  var toLong = kotlin_kotlin.$crossModule$.toLong;
  var reverse = kotlin_kotlin.$crossModule$.reverse;
  var lazy = kotlin_kotlin.$crossModule$.lazy;
  var Exception_init_$Create$ = kotlin_kotlin.$crossModule$.Exception_init_$Create$_1;
  var copyOfRange = kotlin_kotlin.$crossModule$.copyOfRange_1;
  var Exception = kotlin_kotlin.$crossModule$.Exception;
  var _Char___init__impl__380027157 = kotlin_kotlin.$crossModule$._Char___init__impl__380027157;
  var Char = kotlin_kotlin.$crossModule$.Char;
  var listOf = kotlin_kotlin.$crossModule$.listOf_1;
  var KProperty0 = kotlin_kotlin.$crossModule$.KProperty0;
  var getPropertyCallableRef = kotlin_kotlin.$crossModule$.getPropertyCallableRef;
  var KProperty1 = kotlin_kotlin.$crossModule$.KProperty1;
  var arrayCopy = kotlin_kotlin.$crossModule$.arrayCopy;
  var toByte = kotlin_kotlin.$crossModule$.toByte;
  var toCharArray = kotlin_kotlin.$crossModule$.toCharArray_1;
  var RegexOption_MULTILINE_getInstance = kotlin_kotlin.$crossModule$.RegexOption_MULTILINE_getInstance;
  var Regex_init_$Create$ = kotlin_kotlin.$crossModule$.Regex_init_$Create$_1;
  var hashCode = kotlin_kotlin.$crossModule$.hashCode;
  var THROW_CCE = kotlin_kotlin.$crossModule$.THROW_CCE;
  var equals = kotlin_kotlin.$crossModule$.equals;
  var getStringHashCode = kotlin_kotlin.$crossModule$.getStringHashCode;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$crossModule$.ArrayList_init_$Create$_1;
  var PluginGeneratedSerialDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$crossModule$.PluginGeneratedSerialDescriptor;
  var SerializerFactory = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$crossModule$.SerializerFactory;
  var UnknownFieldException_init_$Create$ = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$crossModule$.UnknownFieldException_init_$Create$;
  var GeneratedSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$crossModule$.GeneratedSerializer;
  var throwMissingFieldException = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$crossModule$.throwMissingFieldException;
  var ensureNeverFrozen = kotlin_co_touchlab_stately_common.$crossModule$.ensureNeverFrozen;
  var toString = kotlin_kotlin.$crossModule$.toString_3;
  var isBlank = kotlin_kotlin.$crossModule$.isBlank;
  var contains$default = kotlin_kotlin.$crossModule$.contains$default_1;
  var endsWith$default = kotlin_kotlin.$crossModule$.endsWith$default;
  var lastIndexOf$default = kotlin_kotlin.$crossModule$.lastIndexOf$default;
  var _get_lastIndex__339712501 = kotlin_kotlin.$crossModule$._get_lastIndex__339712501_2;
  var substring = kotlin_kotlin.$crossModule$.substring;
  var toString_0 = kotlin_kotlin.$crossModule$.toString;
  var replace$default = kotlin_kotlin.$crossModule$.replace$default;
  var contains$default_0 = kotlin_kotlin.$crossModule$.contains$default;
  var charArrayOf = kotlin_kotlin.$crossModule$.charArrayOf;
  var trimEnd = kotlin_kotlin.$crossModule$.trimEnd;
  var Regex_init_$Create$_0 = kotlin_kotlin.$crossModule$.Regex_init_$Create$;
  var split$default = kotlin_kotlin.$crossModule$.split$default;
  var dropLast = kotlin_kotlin.$crossModule$.dropLast;
  var joinToString$default = kotlin_kotlin.$crossModule$.joinToString$default_2;
  var last = kotlin_kotlin.$crossModule$.last;
  var Pair = kotlin_kotlin.$crossModule$.Pair;
  var first = kotlin_kotlin.$crossModule$.first;
  var Exception_init_$Init$ = kotlin_kotlin.$crossModule$.Exception_init_$Init$_3;
  var captureStack = kotlin_kotlin.$crossModule$.captureStack;
  var IsolateState_init_$Create$ = kotlin_co_touchlab_stately_isolate.$crossModule$.IsolateState_init_$Create$;
  var Exception_init_$Create$_0 = kotlin_kotlin.$crossModule$.Exception_init_$Create$;
  var stackTraceToString = kotlin_kotlin.$crossModule$.stackTraceToString;
  var THROW_ISE = kotlin_kotlin.$crossModule$.THROW_ISE;
  var Enum = kotlin_kotlin.$crossModule$.Enum;
  var endsWith$default_0 = kotlin_kotlin.$crossModule$.endsWith$default_1;
  var Comparator = kotlin_kotlin.$crossModule$.Comparator;
  var compareTo = kotlin_kotlin.$crossModule$.compareTo;
  var toInt = kotlin_kotlin.$crossModule$.toInt;
  var startsWith$default = kotlin_kotlin.$crossModule$.startsWith$default_1;
  var rangeTo = kotlin_kotlin.$crossModule$.rangeTo;
  var encodeToByteArray = kotlin_kotlin.$crossModule$.encodeToByteArray;
  var numberRangeToNumber = kotlin_kotlin.$crossModule$.numberRangeToNumber;
  var joinToString$default_0 = kotlin_kotlin.$crossModule$.joinToString$default_1;
  var to = kotlin_kotlin.$crossModule$.to;
  var mapOf = kotlin_kotlin.$crossModule$.mapOf;
  var charSequenceGet = kotlin_kotlin.$crossModule$.charSequenceGet;
  var Char__toInt_impl_2402388783 = kotlin_kotlin.$crossModule$.Char__toInt_impl_2402388783;
  var ensureNotNull = kotlin_kotlin.$crossModule$.ensureNotNull;
  var Error_0 = kotlin_kotlin.$crossModule$.Error;
  var noWhenBranchMatchedException = kotlin_kotlin.$crossModule$.noWhenBranchMatchedException;
  var isNumber = kotlin_kotlin.$crossModule$.isNumber;
  var numberToInt = kotlin_kotlin.$crossModule$.numberToInt;
  //endregion
  'use strict';
  //region block: pre-declaration
  C1.prototype = Object.create(GameVariant.prototype);
  C1.prototype.constructor = C1;
  C2.prototype = Object.create(GameVariant.prototype);
  C2.prototype.constructor = C2;
  CV.prototype = Object.create(GameVariant.prototype);
  CV.prototype.constructor = CV;
  C3.prototype = Object.create(GameVariant.prototype);
  C3.prototype.constructor = C3;
  DS.prototype = Object.create(GameVariant.prototype);
  DS.prototype.constructor = DS;
  SM.prototype = Object.create(GameVariant.prototype);
  SM.prototype.constructor = SM;
  OtherVariant.prototype = Object.create(GameVariant.prototype);
  OtherVariant.prototype.constructor = OtherVariant;
  CommonException.prototype = Object.create(Exception.prototype);
  CommonException.prototype.constructor = CommonException;
  IOException.prototype = Object.create(CommonException.prototype);
  IOException.prototype.constructor = IOException;
  CreaturesIOException.prototype = Object.create(IOException.prototype);
  CreaturesIOException.prototype.constructor = CreaturesIOException;
  IOFileNotFoundException.prototype = Object.create(CreaturesIOException.prototype);
  IOFileNotFoundException.prototype.constructor = IOFileNotFoundException;
  BLACK.prototype = Object.create(LoggerColor.prototype);
  BLACK.prototype.constructor = BLACK;
  RED.prototype = Object.create(LoggerColor.prototype);
  RED.prototype.constructor = RED;
  GREEN.prototype = Object.create(LoggerColor.prototype);
  GREEN.prototype.constructor = GREEN;
  YELLOW.prototype = Object.create(LoggerColor.prototype);
  YELLOW.prototype.constructor = YELLOW;
  BLUE.prototype = Object.create(LoggerColor.prototype);
  BLUE.prototype.constructor = BLUE;
  MAGENTA.prototype = Object.create(LoggerColor.prototype);
  MAGENTA.prototype.constructor = MAGENTA;
  CYAN.prototype = Object.create(LoggerColor.prototype);
  CYAN.prototype.constructor = CYAN;
  WHITE.prototype = Object.create(LoggerColor.prototype);
  WHITE.prototype.constructor = WHITE;
  LogLevel.prototype = Object.create(Enum.prototype);
  LogLevel.prototype.constructor = LogLevel;
  //endregion
  function _get_encoding__2990111960() {
    init_properties_ByteStreamReader_kt_1359214383();
    var tmp$ret$0;
    $l$block: {
      var tmp0_getValue_0 = encoding$factory();
      tmp$ret$0 = encoding$delegate._get_value__3683422336_a43j40_k$();
      break $l$block;
    }
    return tmp$ret$0;
  }
  var encoding$delegate;
  function uInt16(_this__1828080292) {
    init_properties_ByteStreamReader_kt_1359214383();
    return int(_this__1828080292, 2).toInt_1tsl84_k$() & 65535;
  }
  function uInt16BE(_this__1828080292) {
    init_properties_ByteStreamReader_kt_1359214383();
    return _get_uInt16BE__1048260777(_this__1828080292);
  }
  function int16(_this__1828080292) {
    init_properties_ByteStreamReader_kt_1359214383();
    return _get_int16__3323420669(_this__1828080292);
  }
  function int16BE(_this__1828080292) {
    init_properties_ByteStreamReader_kt_1359214383();
    return _get_int16BE__2646568026(_this__1828080292);
  }
  function int32(_this__1828080292) {
    init_properties_ByteStreamReader_kt_1359214383();
    return int(_this__1828080292, 4).toInt_1tsl84_k$();
  }
  function uInt32(_this__1828080292) {
    init_properties_ByteStreamReader_kt_1359214383();
    return uInt(_this__1828080292, 4).toInt_1tsl84_k$();
  }
  function int32BE(_this__1828080292) {
    init_properties_ByteStreamReader_kt_1359214383();
    return intBE(_this__1828080292, 4).toInt_1tsl84_k$();
  }
  function uInt32BE(_this__1828080292) {
    init_properties_ByteStreamReader_kt_1359214383();
    return _get_uInt32BE__1049988655(_this__1828080292).toInt_1tsl84_k$();
  }
  function bytes(_this__1828080292, length) {
    init_properties_ByteStreamReader_kt_1359214383();
    var tmp$ret$2;
    $l$block_1: {
      var tmp0_map_0 = until(0, length);
      var tmp$ret$1;
      $l$block_0: {
        var tmp0_mapTo_0_1 = ArrayList_init_$Create$(collectionSizeOrDefault(tmp0_map_0, 10));
        var inductionVariable = tmp0_map_0._get_first__3232921377_hkbbvj_k$();
        var last = tmp0_map_0._get_last__802328181_d9oodx_k$();
        if (inductionVariable <= last)
          do {
            var item_2_3 = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var tmp$ret$0;
            $l$block: {
              tmp$ret$0 = _this__1828080292.get();
              break $l$block;
            }
            tmp0_mapTo_0_1.add_1j60pz_k$(tmp$ret$0);
            Unit_getInstance();
          }
           while (!(item_2_3 === last));
        tmp$ret$1 = tmp0_mapTo_0_1;
        break $l$block_0;
      }
      tmp$ret$2 = tmp$ret$1;
      break $l$block_1;
    }
    return toByteArray(tmp$ret$2);
  }
  function skip(_this__1828080292, length) {
    init_properties_ByteStreamReader_kt_1359214383();
    offset(_this__1828080292, length);
    Unit_getInstance();
    return _this__1828080292;
  }
  function offset(_this__1828080292, offset) {
    init_properties_ByteStreamReader_kt_1359214383();
    _this__1828080292.setPosition(_this__1828080292.getPosition() + offset | 0);
    Unit_getInstance();
    return _this__1828080292;
  }
  function int(_this__1828080292, bytes) {
    init_properties_ByteStreamReader_kt_1359214383();
    var result = new Long(0, 0);
    {
      {
      }
      var inductionVariable = 0;
      if (inductionVariable < bytes)
        do {
          var index_2 = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          {
            result = result.or_s401rn_k$(toLong(_get_uInt8__3632685907(_this__1828080292) << imul(8, index_2)));
          }
        }
         while (inductionVariable < bytes);
    }
    return result;
  }
  function _get_uInt16BE__1048260777(_this__1828080292) {
    init_properties_ByteStreamReader_kt_1359214383();
    return intBE(_this__1828080292, 2).toInt_1tsl84_k$();
  }
  function _get_int16__3323420669(_this__1828080292) {
    init_properties_ByteStreamReader_kt_1359214383();
    var tmp$ret$1;
    $l$block_0: {
      var tmp0_let_0 = int(_this__1828080292, 2).toInt_1tsl84_k$();
      {
      }
      var tmp$ret$0;
      $l$block: {
        tmp$ret$0 = tmp0_let_0 < 32767 ? tmp0_let_0 : tmp0_let_0 > 32768 ? -tmp0_let_0 | 0 : -32768;
        break $l$block;
      }
      tmp$ret$1 = tmp$ret$0;
      break $l$block_0;
    }
    return tmp$ret$1;
  }
  function _get_int16BE__2646568026(_this__1828080292) {
    init_properties_ByteStreamReader_kt_1359214383();
    var tmp$ret$1;
    $l$block_0: {
      var tmp0_let_0 = intBE(_this__1828080292, 2).toInt_1tsl84_k$();
      {
      }
      var tmp$ret$0;
      $l$block: {
        tmp$ret$0 = tmp0_let_0 < 32767 ? tmp0_let_0 : tmp0_let_0 > 32768 ? -tmp0_let_0 | 0 : -32768;
        break $l$block;
      }
      tmp$ret$1 = tmp$ret$0;
      break $l$block_0;
    }
    return tmp$ret$1;
  }
  function uInt(_this__1828080292, bytes) {
    init_properties_ByteStreamReader_kt_1359214383();
    var tmp0_subject = bytes;
    var tmp;
    switch (tmp0_subject) {
      case 1:
        tmp = new Long(255, 0);
        break;
      case 2:
        tmp = new Long(65535, 0);
        break;
      case 4:
        tmp = new Long(-1, 0);
        break;
      default:
        var mask = new Long(0, 0);
        var inductionVariable = 0;
        if (inductionVariable < bytes)
          do {
            var i = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            mask = mask.or_s401rn_k$(toLong(255 << imul(8, i)));
          }
           while (inductionVariable < bytes);
        tmp = mask;
        break;
    }
    var mask_0 = tmp;
    return int(_this__1828080292, bytes).and_jhajnj_k$(mask_0);
  }
  function intBE(_this__1828080292, bytes_0) {
    init_properties_ByteStreamReader_kt_1359214383();
    var result = new Long(0, 0);
    var tmp$ret$0;
    $l$block: {
      var tmp0_apply_0 = bytes(_this__1828080292, bytes_0);
      {
      }
      {
        reverse(tmp0_apply_0);
        {
          var index_1_2 = 0;
          var indexedObject = tmp0_apply_0;
          var inductionVariable = 0;
          var last = indexedObject.length;
          while (inductionVariable < last) {
            var item_3_4 = indexedObject[inductionVariable];
            inductionVariable = inductionVariable + 1 | 0;
            {
              var tmp1_4_6 = index_1_2;
              index_1_2 = tmp1_4_6 + 1 | 0;
              var tmp0__anonymous__5_5_1682278355 = tmp1_4_6;
              result = result.or_s401rn_k$(toLong(item_3_4 << imul(8, tmp0__anonymous__5_5_1682278355)));
            }
          }
        }
      }
      tmp$ret$0 = tmp0_apply_0;
      break $l$block;
    }
    Unit_getInstance();
    return result;
  }
  function _get_uInt32BE__1049988655(_this__1828080292) {
    init_properties_ByteStreamReader_kt_1359214383();
    return intBE(_this__1828080292, 4).and_jhajnj_k$(new Long(-1, 0));
  }
  function _get_uInt8__3632685907(_this__1828080292) {
    init_properties_ByteStreamReader_kt_1359214383();
    return _get_byte__793808451(_this__1828080292) & 255;
  }
  function _get_byte__793808451(_this__1828080292) {
    init_properties_ByteStreamReader_kt_1359214383();
    return _this__1828080292.get();
  }
  function _set_mPosition__686439375($this, _set____804775014) {
    $this.mPosition_1 = _set____804775014;
  }
  function _get_mPosition__2458175579($this) {
    return $this.mPosition_1;
  }
  function _set_mBytes__2155238361($this, _set____804775014) {
    $this.mBytes_1 = _set____804775014;
  }
  function _get_mBytes__2243818189($this) {
    return $this.mBytes_1;
  }
  function _get_bytes__3133227206($this) {
    var tmp0_elvis_lhs = $this.mBytes_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IOException_init_$Create$('Byte stream already closed', null, 2, null);
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function _get_lastIndex__339712501_0($this) {
    var tmp$ret$0;
    $l$block: {
      var tmp0_getValue_0 = lastIndex$factory();
      tmp$ret$0 = $this.lastIndex$delegate_1._get_value__3683422336_a43j40_k$();
      break $l$block;
    }
    return tmp$ret$0;
  }
  function MemoryByteStreamReader$size$delegate$lambda($bytes) {
    return function () {
      return $bytes.length;
    };
  }
  function MemoryByteStreamReader$lastIndex$delegate$lambda(this$0) {
    return function () {
      return this$0._get_size__809037418_ddoh9m_k$() - 1 | 0;
    };
  }
  function MemoryByteStreamReader(bytes) {
    var tmp = this;
    tmp.size$delegate_1 = lazy(MemoryByteStreamReader$size$delegate$lambda(bytes));
    this.mPosition_1 = 0;
    this.mBytes_1 = bytes;
    var tmp_0 = this;
    tmp_0.lastIndex$delegate_1 = lazy(MemoryByteStreamReader$lastIndex$delegate$lambda(this));
  }
  MemoryByteStreamReader.prototype._get_size__809037418_ddoh9m_k$ = function () {
    var tmp$ret$0;
    $l$block: {
      var tmp0_getValue_0 = size$factory();
      tmp$ret$0 = this.size$delegate_1._get_value__3683422336_a43j40_k$();
      break $l$block;
    }
    return tmp$ret$0;
  };
  MemoryByteStreamReader.prototype._get_closed__3151874847_iwkfs1_k$ = function () {
    return this.mBytes_1 == null;
  };
  MemoryByteStreamReader.prototype.toByteArray = function () {
    var tmp$ret$1;
    $l$block_0: {
      var tmp0_copyOf_0 = _get_bytes__3133227206(this);
      var tmp$ret$0;
      $l$block: {
        tmp$ret$0 = tmp0_copyOf_0;
        break $l$block;
      }
      tmp$ret$1 = tmp$ret$0.slice();
      break $l$block_0;
    }
    return tmp$ret$1;
  };
  MemoryByteStreamReader.prototype.get = function () {
    var tmp = _get_bytes__3133227206(this);
    var tmp0_this = this;
    var tmp1 = tmp0_this.mPosition_1;
    tmp0_this.mPosition_1 = tmp1 + 1 | 0;
    return tmp[tmp1];
  };
  MemoryByteStreamReader.prototype.getPosition = function () {
    return this.mPosition_1;
  };
  MemoryByteStreamReader.prototype.setPosition = function (newPosition) {
    this.mPosition_1 = newPosition;
    return this;
  };
  MemoryByteStreamReader.prototype.duplicate = function () {
    var currentPosition = this.mPosition_1;
    var tmp$ret$2;
    $l$block_1: {
      var tmp$ret$1;
      $l$block_0: {
        var tmp0_copyOf_0 = _get_bytes__3133227206(this);
        var tmp$ret$0;
        $l$block: {
          tmp$ret$0 = tmp0_copyOf_0;
          break $l$block;
        }
        tmp$ret$1 = tmp$ret$0.slice();
        break $l$block_0;
      }
      var tmp1_apply_0 = new MemoryByteStreamReader(tmp$ret$1);
      {
      }
      {
        tmp1_apply_0.mPosition_1 = currentPosition;
      }
      tmp$ret$2 = tmp1_apply_0;
      break $l$block_1;
    }
    return tmp$ret$2;
  };
  MemoryByteStreamReader.prototype.copyOfBytes = function (start, end) {
    if (start < 0) {
      throw Exception_init_$Create$('ByteBuffer copy of range is invalid. Start index cannot be less than zero');
    }
    if (end > this._get_size__809037418_ddoh9m_k$()) {
      throw Exception_init_$Create$('ByteBuffer copy of range is invalid. EndOffset ' + end + ' > ' + this._get_size__809037418_ddoh9m_k$());
    }
    return copyOfRange(_get_bytes__3133227206(this), start, end);
  };
  MemoryByteStreamReader.prototype.copyOfRange = function (start, end) {
    if (start < 0) {
      throw Exception_init_$Create$('ByteBuffer copy of range is invalid. Start index cannot be less than zero');
    }
    if (end > this._get_size__809037418_ddoh9m_k$()) {
      throw Exception_init_$Create$('ByteBuffer copy of range is invalid. EndOffset ' + end + ' > ' + this._get_size__809037418_ddoh9m_k$());
    }
    return new MemoryByteStreamReader(copyOfRange(_get_bytes__3133227206(this), start, end));
  };
  MemoryByteStreamReader.prototype.canReopen = function () {
    return false;
  };
  MemoryByteStreamReader.prototype.copyAsOpened = function () {
    return null;
  };
  MemoryByteStreamReader.prototype.close = function () {
    this.mBytes_1 = null;
    return true;
  };
  MemoryByteStreamReader.$metadata$ = {
    simpleName: 'MemoryByteStreamReader',
    kind: 'class',
    interfaces: []
  };
  Object.defineProperty(MemoryByteStreamReader.prototype, 'size', {
    configurable: true,
    get: function () {
      return this._get_size__809037418_ddoh9m_k$();
    }
  });
  Object.defineProperty(MemoryByteStreamReader.prototype, 'closed', {
    configurable: true,
    get: function () {
      return this._get_closed__3151874847_iwkfs1_k$();
    }
  });
  function _get_uInt16__944106508(_this__1828080292) {
    init_properties_ByteStreamReader_kt_1359214383();
    return int(_this__1828080292, 2).toInt_1tsl84_k$() & 65535;
  }
  function _get_uInt32__944108306(_this__1828080292) {
    init_properties_ByteStreamReader_kt_1359214383();
    return int(_this__1828080292, 4).and_jhajnj_k$(new Long(-1, 0));
  }
  function peakUInt8(_this__1828080292) {
    init_properties_ByteStreamReader_kt_1359214383();
    var tmp;
    try {
      var tmp$ret$0;
      $l$block: {
        var tmp0_apply_0 = _get_uInt8__3632685907(_this__1828080292);
        {
        }
        {
          offset(_this__1828080292, -1);
          Unit_getInstance();
        }
        tmp$ret$0 = tmp0_apply_0;
        break $l$block;
      }
      tmp = tmp$ret$0;
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Exception) {
        return null;
      } else {
        {
          throw $p;
        }
      }
      tmp = tmp_0;
    }
    return tmp;
  }
  function setPosition(_this__1828080292, newPosition) {
    init_properties_ByteStreamReader_kt_1359214383();
    return _this__1828080292.setPosition(newPosition.toInt_1tsl84_k$());
  }
  function encoding$delegate$lambda() {
    return function () {
      var tmp$ret$0;
      $l$block: {
        var tmp0_apply_0 = listOf([new Char(_Char___init__impl__380027157(0)), new Char(_Char___init__impl__380027157(1)), new Char(_Char___init__impl__380027157(2)), new Char(_Char___init__impl__380027157(3)), new Char(_Char___init__impl__380027157(4)), new Char(_Char___init__impl__380027157(5)), new Char(_Char___init__impl__380027157(6)), new Char(_Char___init__impl__380027157(7)), new Char(_Char___init__impl__380027157(8)), new Char(_Char___init__impl__380027157(9)), new Char(_Char___init__impl__380027157(10)), new Char(_Char___init__impl__380027157(11)), new Char(_Char___init__impl__380027157(12)), new Char(_Char___init__impl__380027157(13)), new Char(_Char___init__impl__380027157(14)), new Char(_Char___init__impl__380027157(15)), new Char(_Char___init__impl__380027157(16)), new Char(_Char___init__impl__380027157(17)), new Char(_Char___init__impl__380027157(18)), new Char(_Char___init__impl__380027157(19)), new Char(_Char___init__impl__380027157(20)), new Char(_Char___init__impl__380027157(21)), new Char(_Char___init__impl__380027157(22)), new Char(_Char___init__impl__380027157(23)), new Char(_Char___init__impl__380027157(24)), new Char(_Char___init__impl__380027157(25)), new Char(_Char___init__impl__380027157(26)), new Char(_Char___init__impl__380027157(27)), new Char(_Char___init__impl__380027157(28)), new Char(_Char___init__impl__380027157(29)), new Char(_Char___init__impl__380027157(30)), new Char(_Char___init__impl__380027157(31)), new Char(_Char___init__impl__380027157(32)), new Char(_Char___init__impl__380027157(33)), new Char(_Char___init__impl__380027157(34)), new Char(_Char___init__impl__380027157(35)), new Char(_Char___init__impl__380027157(36)), new Char(_Char___init__impl__380027157(37)), new Char(_Char___init__impl__380027157(38)), new Char(_Char___init__impl__380027157(39)), new Char(_Char___init__impl__380027157(40)), new Char(_Char___init__impl__380027157(41)), new Char(_Char___init__impl__380027157(42)), new Char(_Char___init__impl__380027157(43)), new Char(_Char___init__impl__380027157(44)), new Char(_Char___init__impl__380027157(45)), new Char(_Char___init__impl__380027157(46)), new Char(_Char___init__impl__380027157(47)), new Char(_Char___init__impl__380027157(48)), new Char(_Char___init__impl__380027157(49)), new Char(_Char___init__impl__380027157(50)), new Char(_Char___init__impl__380027157(51)), new Char(_Char___init__impl__380027157(52)), new Char(_Char___init__impl__380027157(53)), new Char(_Char___init__impl__380027157(54)), new Char(_Char___init__impl__380027157(55)), new Char(_Char___init__impl__380027157(56)), new Char(_Char___init__impl__380027157(57)), new Char(_Char___init__impl__380027157(58)), new Char(_Char___init__impl__380027157(59)), new Char(_Char___init__impl__380027157(60)), new Char(_Char___init__impl__380027157(61)), new Char(_Char___init__impl__380027157(62)), new Char(_Char___init__impl__380027157(63)), new Char(_Char___init__impl__380027157(64)), new Char(_Char___init__impl__380027157(65)), new Char(_Char___init__impl__380027157(66)), new Char(_Char___init__impl__380027157(67)), new Char(_Char___init__impl__380027157(68)), new Char(_Char___init__impl__380027157(69)), new Char(_Char___init__impl__380027157(70)), new Char(_Char___init__impl__380027157(71)), new Char(_Char___init__impl__380027157(72)), new Char(_Char___init__impl__380027157(73)), new Char(_Char___init__impl__380027157(74)), new Char(_Char___init__impl__380027157(75)), new Char(_Char___init__impl__380027157(76)), new Char(_Char___init__impl__380027157(77)), new Char(_Char___init__impl__380027157(78)), new Char(_Char___init__impl__380027157(79)), new Char(_Char___init__impl__380027157(80)), new Char(_Char___init__impl__380027157(81)), new Char(_Char___init__impl__380027157(82)), new Char(_Char___init__impl__380027157(83)), new Char(_Char___init__impl__380027157(84)), new Char(_Char___init__impl__380027157(85)), new Char(_Char___init__impl__380027157(86)), new Char(_Char___init__impl__380027157(87)), new Char(_Char___init__impl__380027157(88)), new Char(_Char___init__impl__380027157(89)), new Char(_Char___init__impl__380027157(90)), new Char(_Char___init__impl__380027157(91)), new Char(_Char___init__impl__380027157(92)), new Char(_Char___init__impl__380027157(93)), new Char(_Char___init__impl__380027157(94)), new Char(_Char___init__impl__380027157(95)), new Char(_Char___init__impl__380027157(96)), new Char(_Char___init__impl__380027157(97)), new Char(_Char___init__impl__380027157(98)), new Char(_Char___init__impl__380027157(99)), new Char(_Char___init__impl__380027157(100)), new Char(_Char___init__impl__380027157(101)), new Char(_Char___init__impl__380027157(102)), new Char(_Char___init__impl__380027157(103)), new Char(_Char___init__impl__380027157(104)), new Char(_Char___init__impl__380027157(105)), new Char(_Char___init__impl__380027157(106)), new Char(_Char___init__impl__380027157(107)), new Char(_Char___init__impl__380027157(108)), new Char(_Char___init__impl__380027157(109)), new Char(_Char___init__impl__380027157(110)), new Char(_Char___init__impl__380027157(111)), new Char(_Char___init__impl__380027157(112)), new Char(_Char___init__impl__380027157(113)), new Char(_Char___init__impl__380027157(114)), new Char(_Char___init__impl__380027157(115)), new Char(_Char___init__impl__380027157(116)), new Char(_Char___init__impl__380027157(117)), new Char(_Char___init__impl__380027157(118)), new Char(_Char___init__impl__380027157(119)), new Char(_Char___init__impl__380027157(120)), new Char(_Char___init__impl__380027157(121)), new Char(_Char___init__impl__380027157(122)), new Char(_Char___init__impl__380027157(123)), new Char(_Char___init__impl__380027157(124)), new Char(_Char___init__impl__380027157(125)), new Char(_Char___init__impl__380027157(126)), new Char(_Char___init__impl__380027157(127)), new Char(_Char___init__impl__380027157(8364)), new Char(_Char___init__impl__380027157(65533)), new Char(_Char___init__impl__380027157(8218)), new Char(_Char___init__impl__380027157(402)), new Char(_Char___init__impl__380027157(8222)), new Char(_Char___init__impl__380027157(8230)), new Char(_Char___init__impl__380027157(8224)), new Char(_Char___init__impl__380027157(8225)), new Char(_Char___init__impl__380027157(710)), new Char(_Char___init__impl__380027157(8240)), new Char(_Char___init__impl__380027157(352)), new Char(_Char___init__impl__380027157(8249)), new Char(_Char___init__impl__380027157(338)), new Char(_Char___init__impl__380027157(65533)), new Char(_Char___init__impl__380027157(381)), new Char(_Char___init__impl__380027157(65533)), new Char(_Char___init__impl__380027157(65533)), new Char(_Char___init__impl__380027157(8216)), new Char(_Char___init__impl__380027157(8217)), new Char(_Char___init__impl__380027157(8220)), new Char(_Char___init__impl__380027157(8221)), new Char(_Char___init__impl__380027157(8226)), new Char(_Char___init__impl__380027157(8211)), new Char(_Char___init__impl__380027157(8212)), new Char(_Char___init__impl__380027157(732)), new Char(_Char___init__impl__380027157(8482)), new Char(_Char___init__impl__380027157(353)), new Char(_Char___init__impl__380027157(8250)), new Char(_Char___init__impl__380027157(339)), new Char(_Char___init__impl__380027157(65533)), new Char(_Char___init__impl__380027157(382)), new Char(_Char___init__impl__380027157(376)), new Char(_Char___init__impl__380027157(160)), new Char(_Char___init__impl__380027157(161)), new Char(_Char___init__impl__380027157(162)), new Char(_Char___init__impl__380027157(163)), new Char(_Char___init__impl__380027157(164)), new Char(_Char___init__impl__380027157(165)), new Char(_Char___init__impl__380027157(166)), new Char(_Char___init__impl__380027157(167)), new Char(_Char___init__impl__380027157(168)), new Char(_Char___init__impl__380027157(169)), new Char(_Char___init__impl__380027157(170)), new Char(_Char___init__impl__380027157(171)), new Char(_Char___init__impl__380027157(172)), new Char(_Char___init__impl__380027157(173)), new Char(_Char___init__impl__380027157(174)), new Char(_Char___init__impl__380027157(175)), new Char(_Char___init__impl__380027157(176)), new Char(_Char___init__impl__380027157(177)), new Char(_Char___init__impl__380027157(178)), new Char(_Char___init__impl__380027157(179)), new Char(_Char___init__impl__380027157(180)), new Char(_Char___init__impl__380027157(181)), new Char(_Char___init__impl__380027157(182)), new Char(_Char___init__impl__380027157(183)), new Char(_Char___init__impl__380027157(184)), new Char(_Char___init__impl__380027157(185)), new Char(_Char___init__impl__380027157(186)), new Char(_Char___init__impl__380027157(187)), new Char(_Char___init__impl__380027157(188)), new Char(_Char___init__impl__380027157(189)), new Char(_Char___init__impl__380027157(190)), new Char(_Char___init__impl__380027157(191)), new Char(_Char___init__impl__380027157(192)), new Char(_Char___init__impl__380027157(193)), new Char(_Char___init__impl__380027157(194)), new Char(_Char___init__impl__380027157(195)), new Char(_Char___init__impl__380027157(196)), new Char(_Char___init__impl__380027157(197)), new Char(_Char___init__impl__380027157(198)), new Char(_Char___init__impl__380027157(199)), new Char(_Char___init__impl__380027157(200)), new Char(_Char___init__impl__380027157(201)), new Char(_Char___init__impl__380027157(202)), new Char(_Char___init__impl__380027157(203)), new Char(_Char___init__impl__380027157(204)), new Char(_Char___init__impl__380027157(205)), new Char(_Char___init__impl__380027157(206)), new Char(_Char___init__impl__380027157(207)), new Char(_Char___init__impl__380027157(208)), new Char(_Char___init__impl__380027157(209)), new Char(_Char___init__impl__380027157(210)), new Char(_Char___init__impl__380027157(211)), new Char(_Char___init__impl__380027157(212)), new Char(_Char___init__impl__380027157(213)), new Char(_Char___init__impl__380027157(214)), new Char(_Char___init__impl__380027157(215)), new Char(_Char___init__impl__380027157(216)), new Char(_Char___init__impl__380027157(217)), new Char(_Char___init__impl__380027157(218)), new Char(_Char___init__impl__380027157(219)), new Char(_Char___init__impl__380027157(220)), new Char(_Char___init__impl__380027157(221)), new Char(_Char___init__impl__380027157(222)), new Char(_Char___init__impl__380027157(223)), new Char(_Char___init__impl__380027157(224)), new Char(_Char___init__impl__380027157(225)), new Char(_Char___init__impl__380027157(226)), new Char(_Char___init__impl__380027157(227)), new Char(_Char___init__impl__380027157(228)), new Char(_Char___init__impl__380027157(229)), new Char(_Char___init__impl__380027157(230)), new Char(_Char___init__impl__380027157(231)), new Char(_Char___init__impl__380027157(232)), new Char(_Char___init__impl__380027157(233)), new Char(_Char___init__impl__380027157(234)), new Char(_Char___init__impl__380027157(235)), new Char(_Char___init__impl__380027157(236)), new Char(_Char___init__impl__380027157(237)), new Char(_Char___init__impl__380027157(238)), new Char(_Char___init__impl__380027157(239)), new Char(_Char___init__impl__380027157(240)), new Char(_Char___init__impl__380027157(241)), new Char(_Char___init__impl__380027157(242)), new Char(_Char___init__impl__380027157(243)), new Char(_Char___init__impl__380027157(244)), new Char(_Char___init__impl__380027157(245)), new Char(_Char___init__impl__380027157(246)), new Char(_Char___init__impl__380027157(247)), new Char(_Char___init__impl__380027157(248)), new Char(_Char___init__impl__380027157(249)), new Char(_Char___init__impl__380027157(250)), new Char(_Char___init__impl__380027157(251)), new Char(_Char___init__impl__380027157(252)), new Char(_Char___init__impl__380027157(253)), new Char(_Char___init__impl__380027157(254)), new Char(_Char___init__impl__380027157(255))]);
        {
        }
        {
          if (!(tmp0_apply_0._get_size__809037418_ddoh9m_k$() === 256)) {
            var tmp = 'Character encoding is wrong. Expected 256 chars. Found: ' + tmp0_apply_0._get_size__809037418_ddoh9m_k$();
            throw CreaturesIOException_init_$Create$(tmp, null, 2, null);
          }
        }
        tmp$ret$0 = tmp0_apply_0;
        break $l$block;
      }
      return tmp$ret$0;
    };
  }
  function encoding$factory() {
    return getPropertyCallableRef('encoding', 0, KProperty0, function () {
      return _get_encoding__2990111960();
    }, null);
  }
  function size$factory() {
    return getPropertyCallableRef('size', 1, KProperty1, function (receiver) {
      return receiver._get_size__809037418_ddoh9m_k$();
    }, null);
  }
  function lastIndex$factory() {
    return getPropertyCallableRef('lastIndex', 1, KProperty1, function (receiver) {
      return _get_lastIndex__339712501_0(receiver);
    }, null);
  }
  var properties_initialized_ByteStreamReader_kt_2857169491;
  function init_properties_ByteStreamReader_kt_1359214383() {
    if (!properties_initialized_ByteStreamReader_kt_2857169491) {
      properties_initialized_ByteStreamReader_kt_2857169491 = true;
      encoding$delegate = lazy(encoding$delegate$lambda());
    }
  }
  function _get_DEFAULT_BUFFER__382220717($this) {
    return $this.DEFAULT_BUFFER_1;
  }
  function MemoryByteStreamWriter_init_$Init$(size, buffer, $mask0, $marker, $this) {
    if (!(($mask0 & 1) === 0))
      size = 1000;
    if (!(($mask0 & 2) === 0))
      buffer = null;
    MemoryByteStreamWriter.call($this, size, buffer);
    return $this;
  }
  function MemoryByteStreamWriter_init_$Create$(size, buffer, $mask0, $marker) {
    return MemoryByteStreamWriter_init_$Init$(size, buffer, $mask0, $marker, Object.create(MemoryByteStreamWriter.prototype));
  }
  function _get_buffer__2513334987($this) {
    return $this.buffer_1;
  }
  function _get_mSize__3412746115($this) {
    return $this.mSize_1;
  }
  function _set_byteArray__1194108340($this, _set____804775014) {
    $this.byteArray_1 = _set____804775014;
  }
  function _get_byteArray__2965844544($this) {
    return $this.byteArray_1;
  }
  function _set_mPosition__686439375_0($this, _set____804775014) {
    $this.mPosition_1 = _set____804775014;
  }
  function _get_mPosition__2458175579_0($this) {
    return $this.mPosition_1;
  }
  function _get_nextPosition__3482268559($this) {
    var tmp0_this = $this;
    var tmp1 = tmp0_this.mPosition_1;
    tmp0_this.mPosition_1 = tmp1 + 1 | 0;
    var position = tmp1;
    var tmp = $this;
    var tmp$ret$0;
    $l$block: {
      var tmp0_max_0 = $this.furthest_1;
      tmp$ret$0 = Math.max(position, tmp0_max_0);
      break $l$block;
    }
    tmp.furthest_1 = tmp$ret$0;
    return position;
  }
  function _set_furthest__1845938376($this, _set____804775014) {
    $this.furthest_1 = _set____804775014;
  }
  function _get_furthest__1071807164($this) {
    return $this.furthest_1;
  }
  function ensure($this, size) {
    if ($this.byteArray_1.length < (($this.mPosition_1 + 1 | 0) + size | 0)) {
      var needed = $this.buffer_1;
      while (needed < size) {
        needed = needed + $this.buffer_1 | 0;
      }
      var newByteArray = new Int8Array($this.mPosition_1 + needed | 0);
      var tmp$ret$4;
      $l$block_3: {
        var tmp0_copyInto_0 = $this.byteArray_1;
        var tmp1_copyInto_0 = $this.mPosition_1;
        var tmp$ret$1;
        $l$block_0: {
          var tmp$ret$0;
          $l$block: {
            tmp$ret$0 = tmp0_copyInto_0;
            break $l$block;
          }
          tmp$ret$1 = tmp$ret$0;
          break $l$block_0;
        }
        var tmp = tmp$ret$1;
        var tmp$ret$3;
        $l$block_2: {
          var tmp$ret$2;
          $l$block_1: {
            tmp$ret$2 = newByteArray;
            break $l$block_1;
          }
          tmp$ret$3 = tmp$ret$2;
          break $l$block_2;
        }
        arrayCopy(tmp, tmp$ret$3, 0, 0, tmp1_copyInto_0);
        tmp$ret$4 = newByteArray;
        break $l$block_3;
      }
      Unit_getInstance();
      $this.byteArray_1 = newByteArray;
    }
  }
  function Companion() {
    Companion_instance = this;
    this.DEFAULT_BUFFER_1 = 500;
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
  function MemoryByteStreamWriter(size, buffer) {
    Companion_getInstance();
    var size_0 = size === void 1 ? 1000 : size;
    var buffer_0 = buffer === void 1 ? null : buffer;
    var tmp = this;
    var tmp0_elvis_lhs = buffer_0;
    var tmp_0;
    if (tmp0_elvis_lhs == null) {
      Companion_getInstance();
      tmp_0 = 500;
    } else {
      tmp_0 = tmp0_elvis_lhs;
    }
    tmp.buffer_1 = tmp_0;
    this.mSize_1 = size_0;
    this.byteArray_1 = new Int8Array(size_0);
    this.mPosition_1 = 0;
    this.furthest_1 = -1;
  }
  MemoryByteStreamWriter.prototype._get_position__3188952002_iahqv2_k$ = function () {
    return this.mPosition_1;
  };
  MemoryByteStreamWriter.prototype._get_size__809037418_ddoh9m_k$ = function () {
    return this.furthest_1;
  };
  MemoryByteStreamWriter.prototype._get_bytes__3133227206_j7o4e2_k$ = function () {
    return copyOfRange(this.byteArray_1, 0, this.furthest_1);
  };
  MemoryByteStreamWriter.prototype.writeUInt8 = function (byte) {
    ensure(this, 1);
    this.byteArray_1[_get_nextPosition__3482268559(this)] = toByte(byte);
    return this;
  };
  MemoryByteStreamWriter.prototype.write = function (bytes) {
    var size = bytes.length;
    ensure(this, size);
    var position = this.mPosition_1;
    var tmp$ret$4;
    $l$block_3: {
      var tmp0_copyInto_0 = this.byteArray_1;
      var tmp1_copyInto_0 = bytes.length;
      var tmp$ret$1;
      $l$block_0: {
        var tmp$ret$0;
        $l$block: {
          tmp$ret$0 = bytes;
          break $l$block;
        }
        tmp$ret$1 = tmp$ret$0;
        break $l$block_0;
      }
      var tmp = tmp$ret$1;
      var tmp$ret$3;
      $l$block_2: {
        var tmp$ret$2;
        $l$block_1: {
          tmp$ret$2 = tmp0_copyInto_0;
          break $l$block_1;
        }
        tmp$ret$3 = tmp$ret$2;
        break $l$block_2;
      }
      arrayCopy(tmp, tmp$ret$3, position, 0, tmp1_copyInto_0);
      tmp$ret$4 = tmp0_copyInto_0;
      break $l$block_3;
    }
    Unit_getInstance();
    var tmp_0 = this;
    var tmp$ret$5;
    $l$block_4: {
      var tmp2_max_0 = this.furthest_1;
      var tmp3_max_0 = position + size | 0;
      tmp$ret$5 = Math.max(tmp2_max_0, tmp3_max_0);
      break $l$block_4;
    }
    tmp_0.furthest_1 = tmp$ret$5;
    var tmp0_this = this;
    tmp0_this.mPosition_1 = tmp0_this.mPosition_1 + size | 0;
    return this;
  };
  MemoryByteStreamWriter.prototype.writeUInt16s = function (ushortArray) {
    ensure(this, imul(ushortArray.length, 2));
    {
      var tmp0_repeat_0 = ushortArray.length;
      {
      }
      var inductionVariable = 0;
      if (inductionVariable < tmp0_repeat_0)
        do {
          var index_2 = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          {
            var value_4 = ushortArray[index_2];
            {
              {
              }
              var inductionVariable_0 = 0;
              if (inductionVariable_0 < 2)
                do {
                  var index_2_6 = inductionVariable_0;
                  inductionVariable_0 = inductionVariable_0 + 1 | 0;
                  {
                    this.byteArray_1[_get_nextPosition__3482268559(this)] = toByte(value_4);
                    value_4 = value_4 >> 8;
                  }
                }
                 while (inductionVariable_0 < 2);
            }
          }
        }
         while (inductionVariable < tmp0_repeat_0);
    }
    return this;
  };
  MemoryByteStreamWriter.prototype.writeUInt16 = function (valueIn) {
    ensure(this, 2);
    var value = valueIn;
    var bytes = new Int8Array(2);
    var inductionVariable = 0;
    if (inductionVariable <= 1)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        bytes[i] = toByte(value);
        value = value >> 8;
      }
       while (inductionVariable <= 1);
    this.write(bytes);
    Unit_getInstance();
    return this;
  };
  MemoryByteStreamWriter.prototype.writeUInt16BE = function (valueIn) {
    ensure(this, 2);
    var value = valueIn;
    var bytes = new Int8Array(2);
    var inductionVariable = 1;
    if (0 <= inductionVariable)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + -1 | 0;
        bytes[i] = toByte(value);
        value = value >> 8;
      }
       while (0 <= inductionVariable);
    this.write(bytes);
    Unit_getInstance();
    return this;
  };
  MemoryByteStreamWriter.prototype.writeUInt32 = function (valueIn) {
    ensure(this, 4);
    var value = valueIn;
    var bytes = new Int8Array(4);
    var inductionVariable = 0;
    if (inductionVariable <= 3)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        bytes[i] = toByte(value);
        value = value >> 8;
      }
       while (inductionVariable <= 3);
    this.write(bytes);
    Unit_getInstance();
    return this;
  };
  MemoryByteStreamWriter.prototype.writeUInt32BE = function (valueIn) {
    ensure(this, 4);
    var value = valueIn;
    var bytes = new Int8Array(4);
    var inductionVariable = 3;
    if (0 <= inductionVariable)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + -1 | 0;
        bytes[i] = toByte(value);
        value = value >> 8;
      }
       while (0 <= inductionVariable);
    this.write(bytes);
    Unit_getInstance();
    return this;
  };
  MemoryByteStreamWriter.prototype.writeUInt64 = function (valueIn) {
    ensure(this, 8);
    var value = valueIn;
    var bytes = new Int8Array(8);
    var inductionVariable = 0;
    if (inductionVariable <= 7)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        bytes[i] = value.toByte_edm0nx_k$();
        value = value.shr_wjue3g_k$(8);
      }
       while (inductionVariable <= 7);
    this.write(bytes);
    Unit_getInstance();
    return this;
  };
  MemoryByteStreamWriter.prototype.writeUInt64BE = function (valueIn) {
    ensure(this, 8);
    var value = valueIn;
    var bytes = new Int8Array(8);
    var inductionVariable = 7;
    if (0 <= inductionVariable)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + -1 | 0;
        bytes[i] = value.toByte_edm0nx_k$();
        value = value.shr_wjue3g_k$(8);
      }
       while (0 <= inductionVariable);
    this.write(bytes);
    Unit_getInstance();
    return this;
  };
  MemoryByteStreamWriter.prototype.writeFloat = function (valueIn) {
    return writeFloat(this, valueIn);
  };
  MemoryByteStreamWriter.prototype.writeDouble = function (valueIn) {
    return writeDouble(this, valueIn);
  };
  MemoryByteStreamWriter.prototype.writeStringWithCreaturesEncoding = function (valueIn) {
    return writeStringWithCreaturesEncoding(this, valueIn);
  };
  MemoryByteStreamWriter.$metadata$ = {
    simpleName: 'MemoryByteStreamWriter',
    kind: 'class',
    interfaces: []
  };
  Object.defineProperty(MemoryByteStreamWriter.prototype, 'position', {
    configurable: true,
    get: function () {
      return this._get_position__3188952002_iahqv2_k$();
    }
  });
  Object.defineProperty(MemoryByteStreamWriter.prototype, 'size', {
    configurable: true,
    get: function () {
      return this._get_size__809037418_ddoh9m_k$();
    }
  });
  Object.defineProperty(MemoryByteStreamWriter.prototype, 'bytes', {
    configurable: true,
    get: function () {
      return this._get_bytes__3133227206_j7o4e2_k$();
    }
  });
  function _get_BASE64_ALPHABET__244992270() {
    init_properties_base64_generic_kt_2456327041();
    return BASE64_ALPHABET;
  }
  var BASE64_ALPHABET;
  function _get_NON_BASE_64_REGEX__389257359() {
    init_properties_base64_generic_kt_2456327041();
    return NON_BASE_64_REGEX;
  }
  var NON_BASE_64_REGEX;
  var properties_initialized_base64_generic_kt_3409840037;
  function init_properties_base64_generic_kt_2456327041() {
    if (!properties_initialized_base64_generic_kt_3409840037) {
      properties_initialized_base64_generic_kt_3409840037 = true;
      BASE64_ALPHABET = toCharArray('ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/');
      var tmp$ret$0;
      $l$block: {
        var tmp0_toRegex_0 = RegexOption_MULTILINE_getInstance();
        tmp$ret$0 = Regex_init_$Create$('[^A-Za-z0-9+/=]', tmp0_toRegex_0);
        break $l$block;
      }
      NON_BASE_64_REGEX = tmp$ret$0;
    }
  }
  function Line(start, end) {
    this.start_1 = start;
    this.end_1 = end;
  }
  Line.prototype._get_start__3614751663_b8zdqp_k$ = function () {
    return this.start_1;
  };
  Line.prototype._get_end__856968982_e67thy_k$ = function () {
    return this.end_1;
  };
  Line.prototype.component1 = function () {
    return this.start_1;
  };
  Line.prototype.component2 = function () {
    return this.end_1;
  };
  Line.prototype.copy = function (start, end) {
    return this.copy_a222nf_k$(start === void 1 ? this.start_1 : start, end === void 1 ? this.end_1 : end);
  };
  Line.prototype.copy_a222nf_k$ = function (start, end) {
    return new Line(start, end);
  };
  Line.prototype.copy$default_msuufg_k$ = function (start, end, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      start = this.start_1;
    if (!(($mask0 & 2) === 0))
      end = this.end_1;
    return this.copy_a222nf_k$(start, end);
  };
  Line.prototype.toString = function () {
    return 'Line(start=' + this.start_1 + ', end=' + this.end_1 + ')';
  };
  Line.prototype.hashCode = function () {
    var result = hashCode(this.start_1);
    result = imul(result, 31) + hashCode(this.end_1) | 0;
    return result;
  };
  Line.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Line))
      return false;
    else {
    }
    var tmp0_other_with_cast = other instanceof Line ? other : THROW_CCE();
    if (!equals(this.start_1, tmp0_other_with_cast.start_1))
      return false;
    if (!equals(this.end_1, tmp0_other_with_cast.end_1))
      return false;
    return true;
  };
  Line.$metadata$ = {
    simpleName: 'Line',
    kind: 'class',
    interfaces: []
  };
  Object.defineProperty(Line.prototype, 'start', {
    configurable: true,
    get: function () {
      return this._get_start__3614751663_b8zdqp_k$();
    }
  });
  Object.defineProperty(Line.prototype, 'end', {
    configurable: true,
    get: function () {
      return this._get_end__856968982_e67thy_k$();
    }
  });
  function _get_others__1139181576($this) {
    return $this.others_1;
  }
  function GameVariant$Companion$values$delegate$lambda() {
    return function () {
      return listOf([C1_getInstance(), C2_getInstance(), CV_getInstance(), C3_getInstance(), DS_getInstance(), SM_getInstance()]);
    };
  }
  function GameVariant_init_$Init$(code, base, $mask0, $marker, $this) {
    if (!(($mask0 & 2) === 0))
      base = null;
    GameVariant.call($this, code, base);
    return $this;
  }
  function GameVariant_init_$Create$(code, base, $mask0, $marker) {
    return GameVariant_init_$Init$(code, base, $mask0, $marker, Object.create(GameVariant.prototype));
  }
  function C1() {
    C1_instance = this;
    GameVariant_init_$Init$('C1', null, 2, null, this);
  }
  C1.$metadata$ = {
    simpleName: 'C1',
    kind: 'object',
    interfaces: []
  };
  var C1_instance;
  function C1_getInstance() {
    if (C1_instance == null)
      new C1();
    return C1_instance;
  }
  function C2() {
    C2_instance = this;
    GameVariant_init_$Init$('C2', null, 2, null, this);
  }
  C2.$metadata$ = {
    simpleName: 'C2',
    kind: 'object',
    interfaces: []
  };
  var C2_instance;
  function C2_getInstance() {
    if (C2_instance == null)
      new C2();
    return C2_instance;
  }
  function CV() {
    CV_instance = this;
    GameVariant_init_$Init$('CV', null, 2, null, this);
  }
  CV.$metadata$ = {
    simpleName: 'CV',
    kind: 'object',
    interfaces: []
  };
  var CV_instance;
  function CV_getInstance() {
    if (CV_instance == null)
      new CV();
    return CV_instance;
  }
  function C3() {
    C3_instance = this;
    GameVariant_init_$Init$('C3', null, 2, null, this);
  }
  C3.$metadata$ = {
    simpleName: 'C3',
    kind: 'object',
    interfaces: []
  };
  var C3_instance;
  function C3_getInstance() {
    if (C3_instance == null)
      new C3();
    return C3_instance;
  }
  function DS() {
    DS_instance = this;
    GameVariant_init_$Init$('DS', null, 2, null, this);
  }
  DS.$metadata$ = {
    simpleName: 'DS',
    kind: 'object',
    interfaces: []
  };
  var DS_instance;
  function DS_getInstance() {
    if (DS_instance == null)
      new DS();
    return DS_instance;
  }
  function SM() {
    SM_instance = this;
    GameVariant_init_$Init$('SM', null, 2, null, this);
  }
  SM.$metadata$ = {
    simpleName: 'SM',
    kind: 'object',
    interfaces: []
  };
  var SM_instance;
  function SM_getInstance() {
    if (SM_instance == null)
      new SM();
    return SM_instance;
  }
  function OtherVariant(code, base) {
    GameVariant.call(this, code, base);
    if (!Companion_getInstance_0().others_1.contains_2ehdt1_k$(this)) {
      Companion_getInstance_0().others_1.add_1j60pz_k$(this);
      Unit_getInstance();
    }
  }
  OtherVariant.prototype.equals = function (other) {
    if (other === this) {
      return true;
    }
    if (!(other instanceof GameVariant)) {
      return false;
    } else {
    }
    return this._get_code__794418686_d4z5dq_k$() === other.code_1;
  };
  OtherVariant.prototype.hashCode = function () {
    var result = getStringHashCode(this._get_code__794418686_d4z5dq_k$());
    var tmp = imul(31, result);
    var tmp0_safe_receiver = this._get_base__793092506_d46q3e_k$();
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.hashCode();
    result = tmp + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
    return result;
  };
  OtherVariant.$metadata$ = {
    simpleName: 'OtherVariant',
    kind: 'class',
    interfaces: []
  };
  function Companion_0() {
    Companion_instance_0 = this;
    var tmp = this;
    tmp.values$delegate_1 = lazy(GameVariant$Companion$values$delegate$lambda());
    var tmp_0 = this;
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = ArrayList_init_$Create$_0();
      break $l$block;
    }
    tmp_0.others_1 = tmp$ret$0;
  }
  Companion_0.prototype.fromString_2a1yvu_k$ = function (value) {
    var tmp$ret$1;
    $l$block_0: {
      var tmp$ret$0;
      $l$block: {
        tmp$ret$0 = value;
        break $l$block;
      }
      tmp$ret$1 = tmp$ret$0.toUpperCase();
      break $l$block_0;
    }
    var tmp0_subject = tmp$ret$1;
    switch (tmp0_subject) {
      case 'C1':
        return C1_getInstance();
      case 'C2':
        return C2_getInstance();
      case 'CV':
        return CV_getInstance();
      case 'C3':
        return C3_getInstance();
      case 'DS':
        return DS_getInstance();
      case 'SM':
        return SM_getInstance();
      default:
        return null;
    }
  };
  Companion_0.prototype._get_values__2516944425_tel787_k$ = function () {
    var tmp$ret$0;
    $l$block: {
      var tmp0_getValue_0 = values$factory();
      tmp$ret$0 = this.values$delegate_1._get_value__3683422336_a43j40_k$();
      break $l$block;
    }
    return tmp$ret$0;
  };
  Companion_0.$metadata$ = {
    simpleName: 'Companion',
    kind: 'object',
    interfaces: []
  };
  var Companion_instance_0;
  function Companion_getInstance_0() {
    if (Companion_instance_0 == null)
      new Companion_0();
    return Companion_instance_0;
  }
  function GameVariant(code, base) {
    Companion_getInstance_0();
    this.code_1 = code;
    this.base_1 = base;
  }
  GameVariant.prototype._get_code__794418686_d4z5dq_k$ = function () {
    return this.code_1;
  };
  GameVariant.prototype._get_base__793092506_d46q3e_k$ = function () {
    return this.base_1;
  };
  GameVariant.prototype.toString = function () {
    return this.code_1;
  };
  GameVariant.prototype.equals = function (other) {
    if (other === this) {
      return true;
    }
    if (!(other instanceof GameVariant)) {
      return false;
    } else {
    }
    return this.code_1 === other.code_1;
  };
  GameVariant.prototype.hashCode = function () {
    var result = getStringHashCode(this.code_1);
    var tmp = imul(31, result);
    var tmp0_safe_receiver = this.base_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.hashCode();
    result = tmp + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
    return result;
  };
  GameVariant.$metadata$ = {
    simpleName: 'GameVariant',
    kind: 'class',
    interfaces: []
  };
  function values$factory() {
    return getPropertyCallableRef('values', 1, KProperty1, function (receiver) {
      return receiver._get_values__2516944425_tel787_k$();
    }, null);
  }
  function $serializer_init_$Init$(typeSerial0, $this) {
    $serializer.call($this);
    $this.typeSerial0__1 = typeSerial0;
    return $this;
  }
  function $serializer_init_$Create$(typeSerial0) {
    return $serializer_init_$Init$(typeSerial0, Object.create($serializer.prototype));
  }
  function Companion_1() {
    Companion_instance_1 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('bedalton.creatures.structs.Pointer', null, 1);
    tmp0_serialDesc.addElement_ifop3j_k$('value', false);
    Companion_getInstance_1().$cachedDescriptor_1 = tmp0_serialDesc;
  }
  Companion_1.prototype.serializer_lhafpp_k$ = function (typeSerial0) {
    return $serializer_init_$Create$(typeSerial0);
  };
  Companion_1.prototype.serializer_5xgt5t_k$ = function (typeParamsSerializers) {
    return this.serializer_lhafpp_k$(typeParamsSerializers[0]);
  };
  Companion_1.$metadata$ = {
    simpleName: 'Companion',
    kind: 'object',
    interfaces: [SerializerFactory]
  };
  var Companion_instance_1;
  function Companion_getInstance_1() {
    if (Companion_instance_1 == null)
      new Companion_1();
    return Companion_instance_1;
  }
  function $serializer() {
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('bedalton.creatures.structs.Pointer', this, 1);
    tmp0_serialDesc.addElement_ifop3j_k$('value', false);
    this.descriptor_1 = tmp0_serialDesc;
  }
  $serializer.prototype._get_descriptor__684124924_bbb664_k$ = function () {
    return this.descriptor_1;
  };
  $serializer.prototype.childSerializers_5ghqw5_k$ = function () {
    var tmp$ret$2;
    $l$block_1: {
      var tmp$ret$1;
      $l$block_0: {
        var tmp$ret$0;
        $l$block: {
          tmp$ret$0 = [this.typeSerial0__1];
          break $l$block;
        }
        tmp$ret$1 = tmp$ret$0;
        break $l$block_0;
      }
      tmp$ret$2 = tmp$ret$1;
      break $l$block_1;
    }
    return tmp$ret$2;
  };
  $serializer.prototype.deserialize_2t41fm_k$ = function (decoder) {
    var tmp0_desc = this.descriptor_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_input = decoder.beginStructure_dv3yt3_k$(tmp0_desc);
    if (tmp5_input.decodeSequentially_xlblqy_k$()) {
      tmp4_local0 = tmp5_input.decodeSerializableElement_5lsbxj_k$(tmp0_desc, 0, this.typeSerial0__1, tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp5_input.decodeElementIndex_nk5a2l_k$(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp5_input.decodeSerializableElement_5lsbxj_k$(tmp0_desc, 0, this.typeSerial0__1, tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp5_input.endStructure_e64gd4_k$(tmp0_desc);
    return Pointer_init_$Create$(tmp3_bitMask0, tmp4_local0, null);
  };
  $serializer.prototype.serialize_u9a275_k$ = function (encoder, value) {
    var tmp0_desc = this.descriptor_1;
    var tmp1_output = encoder.beginStructure_dv3yt3_k$(tmp0_desc);
    tmp1_output.encodeSerializableElement_pr92am_k$(tmp0_desc, 0, this.typeSerial0__1, value.value_1);
    tmp1_output.endStructure_e64gd4_k$(tmp0_desc);
  };
  $serializer.prototype.serialize_32qylj_k$ = function (encoder, value) {
    return this.serialize_u9a275_k$(encoder, value instanceof Pointer ? value : THROW_CCE());
  };
  $serializer.prototype.typeParametersSerializers_fr94fx_k$ = function () {
    var tmp$ret$2;
    $l$block_1: {
      var tmp$ret$1;
      $l$block_0: {
        var tmp$ret$0;
        $l$block: {
          tmp$ret$0 = [this.typeSerial0__1];
          break $l$block;
        }
        tmp$ret$1 = tmp$ret$0;
        break $l$block_0;
      }
      tmp$ret$2 = tmp$ret$1;
      break $l$block_1;
    }
    return tmp$ret$2;
  };
  $serializer.$metadata$ = {
    simpleName: '$serializer',
    kind: 'class',
    interfaces: [GeneratedSerializer]
  };
  function Pointer_init_$Init$(seen1, value, serializationConstructorMarker, $this) {
    if (!(1 === (1 & seen1)))
      throwMissingFieldException(seen1, 1, Companion_getInstance_1().$cachedDescriptor_1);
    $this.value_1 = value;
    ensureNeverFrozen($this);
    return $this;
  }
  function Pointer_init_$Create$(seen1, value, serializationConstructorMarker) {
    return Pointer_init_$Init$(seen1, value, serializationConstructorMarker, Object.create(Pointer.prototype));
  }
  function Pointer(value) {
    Companion_getInstance_1();
    this.value_1 = value;
    ensureNeverFrozen(this);
  }
  Pointer.prototype._set_value__1325260276_x73o94_k$ = function (_set____804775014) {
    this.value_1 = _set____804775014;
  };
  Pointer.prototype._get_value__3683422336_a43j40_k$ = function () {
    return this.value_1;
  };
  Pointer.prototype.toString = function () {
    return toString(this.value_1);
  };
  Pointer.prototype.component1_7eebsc_k$ = function () {
    return this.value_1;
  };
  Pointer.prototype.copy_mek8hi_k$ = function (value) {
    return new Pointer(value);
  };
  Pointer.prototype.copy$default_dovemi_k$ = function (value, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      value = this.value_1;
    return this.copy_mek8hi_k$(value);
  };
  Pointer.prototype.hashCode = function () {
    return this.value_1 == null ? 0 : hashCode(this.value_1);
  };
  Pointer.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Pointer))
      return false;
    else {
    }
    var tmp0_other_with_cast = other instanceof Pointer ? other : THROW_CCE();
    if (!equals(this.value_1, tmp0_other_with_cast.value_1))
      return false;
    return true;
  };
  Pointer.$metadata$ = {
    simpleName: 'Pointer',
    kind: 'class',
    interfaces: [],
    associatedObjects: {0: Companion_getInstance_1}
  };
  function pathSeparator($this, path) {
    if (path == null ? true : isBlank(path)) {
      return _get_pathSeparatorChar__3143419483();
    }
    var tmp = _get_pathSeparatorChar__3143419483();
    if (contains$default(path, tmp, false, 2, null)) {
      return _get_pathSeparatorChar__3143419483();
    } else {
    }
    var tmp_0;
    var tmp_1 = _Char___init__impl__380027157(47);
    if (contains$default(path, tmp_1, false, 2, null)) {
      return _Char___init__impl__380027157(47);
    } else {
      var tmp_2 = _Char___init__impl__380027157(92);
      if (contains$default(path, tmp_2, false, 2, null)) {
        return _Char___init__impl__380027157(92);
      } else {
        {
          tmp_0 = _get_pathSeparatorChar__3143419483();
        }
      }
    }
    return tmp_0;
  }
  function getSelfOrParentDirectory$close(_this__1828080292, $appendSeparator, separator) {
    var tmp;
    var tmp_0;
    if (!$appendSeparator) {
      tmp_0 = true;
    } else {
      tmp_0 = endsWith$default(_this__1828080292, separator, false, 2, null);
    }
    if (tmp_0) {
      tmp = _this__1828080292;
    } else {
      {
        tmp = ensureEndsWith(_this__1828080292, separator);
      }
    }
    return tmp;
  }
  function getLastPathComponent$close(_this__1828080292, $nullIfBlank) {
    var tmp;
    if ($nullIfBlank ? isBlank(_this__1828080292) : false) {
      tmp = null;
    } else {
      tmp = _this__1828080292;
    }
    return tmp;
  }
  function FileNameUtil() {
    FileNameUtil_instance = this;
  }
  FileNameUtil.prototype.getFileNameWithoutExtension_5esv6b_k$ = function (fileName) {
    var separator = pathSeparator(this, fileName);
    var startIndex = lastIndexOf$default(fileName, separator, 0, false, 6, null);
    if (startIndex < 0)
      startIndex = 0;
    else
      startIndex = startIndex + 1 | 0;
    if (startIndex === _get_lastIndex__339712501(fileName)) {
      return null;
    }
    var tmp = _Char___init__impl__380027157(46);
    var lastIndex = lastIndexOf$default(fileName, tmp, 0, false, 6, null);
    var tmp_0;
    if (lastIndex < startIndex) {
      var tmp$ret$1;
      $l$block_0: {
        var tmp0_substring_0 = startIndex;
        var tmp$ret$0;
        $l$block: {
          tmp$ret$0 = fileName;
          break $l$block;
        }
        tmp$ret$1 = tmp$ret$0.substring(tmp0_substring_0);
        break $l$block_0;
      }
      tmp_0 = tmp$ret$1;
    } else if (lastIndex === 0) {
      tmp_0 = null;
    } else if (lastIndex > startIndex) {
      var tmp$ret$3;
      $l$block_2: {
        var tmp1_substring_0 = startIndex;
        var tmp$ret$2;
        $l$block_1: {
          tmp$ret$2 = fileName;
          break $l$block_1;
        }
        tmp$ret$3 = tmp$ret$2.substring(tmp1_substring_0, lastIndex);
        break $l$block_2;
      }
      tmp_0 = tmp$ret$3;
    } else {
      tmp_0 = null;
    }
    var string = tmp_0;
    var tmp0_safe_receiver = string;
    return tmp0_safe_receiver == null ? null : nullIfEmpty(tmp0_safe_receiver);
  };
  FileNameUtil.prototype.getExtension_mby8aw_k$ = function (fileName) {
    var tmp = _Char___init__impl__380027157(46);
    var lastIndex = lastIndexOf$default(fileName, tmp, 0, false, 6, null);
    var tmp_0;
    if (lastIndex < 0) {
      tmp_0 = null;
    } else if (lastIndex < _get_lastIndex__339712501(fileName)) {
      var tmp$ret$3;
      $l$block_2: {
        var tmp$ret$1;
        $l$block_0: {
          var tmp0_substring_0 = lastIndex + 1 | 0;
          var tmp$ret$0;
          $l$block: {
            tmp$ret$0 = fileName;
            break $l$block;
          }
          tmp$ret$1 = tmp$ret$0.substring(tmp0_substring_0);
          break $l$block_0;
        }
        var tmp1_let_0 = tmp$ret$1;
        {
        }
        var tmp$ret$2;
        $l$block_1: {
          var tmp_1;
          var tmp_2;
          var tmp_3 = _Char___init__impl__380027157(47);
          if (contains$default(tmp1_let_0, tmp_3, false, 2, null)) {
            tmp_2 = true;
          } else {
            {
              var tmp_4 = _Char___init__impl__380027157(92);
              tmp_2 = contains$default(tmp1_let_0, tmp_4, false, 2, null);
            }
          }
          if (tmp_2) {
            tmp_1 = null;
          } else {
            {
              tmp_1 = tmp1_let_0;
            }
          }
          tmp$ret$2 = tmp_1;
          break $l$block_1;
        }
        tmp$ret$3 = tmp$ret$2;
        break $l$block_2;
      }
      tmp_0 = tmp$ret$3;
    } else {
      tmp_0 = null;
    }
    var extension = tmp_0;
    return nullIfEmpty(extension);
  };
  FileNameUtil.prototype.getSelfOrParentDirectory_ssfgxv_k$ = function (file, appendSeparator) {
    var separator = pathSeparator(this, file);
    if (endsWith$default(file, separator, false, 2, null)) {
      return file;
    } else {
    }
    var index = lastIndexOf$default(file, separator, 0, false, 6, null);
    if (index < 0) {
      var tmp;
      var tmp_0 = _Char___init__impl__380027157(46);
      if (contains$default(file, tmp_0, false, 2, null)) {
        tmp = null;
      } else {
        {
          tmp = getSelfOrParentDirectory$close(file, appendSeparator, separator);
        }
      }
      return tmp;
    }
    var tmp_1;
    var tmp$ret$1;
    $l$block_0: {
      var tmp$ret$0;
      $l$block: {
        tmp$ret$0 = file;
        break $l$block;
      }
      tmp$ret$1 = tmp$ret$0.substring(index);
      break $l$block_0;
    }
    var tmp_2 = tmp$ret$1;
    var tmp_3 = _Char___init__impl__380027157(46);
    if (contains$default(tmp_2, tmp_3, false, 2, null)) {
      tmp_1 = getSelfOrParentDirectory$close(substring(file, until(0, index)), appendSeparator, separator);
    } else {
      {
        tmp_1 = getSelfOrParentDirectory$close(file, appendSeparator, separator);
      }
    }
    return tmp_1;
  };
  FileNameUtil.prototype.getSelfOrParentDirectory$default_dtbn2a_k$ = function (file, appendSeparator, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      appendSeparator = false;
    return this.getSelfOrParentDirectory_ssfgxv_k$(file, appendSeparator);
  };
  FileNameUtil.prototype.getLastPathComponent_k5c975_k$ = function (path, nullIfBlank) {
    var separator = pathSeparator(this, path);
    var tmp;
    if (isBlank(path)) {
      tmp = null;
    } else if (path === toString_0(separator)) {
      tmp = getLastPathComponent$close('', nullIfBlank);
    } else {
      var index = lastIndexOf$default(path, separator, 0, false, 6, null);
      if (index < 0) {
        var tmp_0 = _Char___init__impl__380027157(47);
        index = lastIndexOf$default(path, tmp_0, 0, false, 6, null);
      }
      var tmp_1;
      if (index < 0) {
        tmp_1 = getLastPathComponent$close(path, nullIfBlank);
      } else if (index === _get_lastIndex__339712501(path)) {
        tmp_1 = getLastPathComponent$close('', nullIfBlank);
      } else {
        var tmp$ret$1;
        $l$block_0: {
          var tmp0_substring_0 = index + 1 | 0;
          var tmp$ret$0;
          $l$block: {
            tmp$ret$0 = path;
            break $l$block;
          }
          tmp$ret$1 = tmp$ret$0.substring(tmp0_substring_0);
          break $l$block_0;
        }
        tmp_1 = getLastPathComponent$close(tmp$ret$1, nullIfBlank);
      }
      tmp = tmp_1;
    }
    return tmp;
  };
  FileNameUtil.prototype.getLastPathComponent$default_9w224w_k$ = function (path, nullIfBlank, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      nullIfBlank = false;
    return this.getLastPathComponent_k5c975_k$(path, nullIfBlank);
  };
  FileNameUtil.prototype.getWithoutLastPathComponent_brrck1_k$ = function (aPath) {
    var path = aPath;
    var tmp;
    var tmp_0 = path;
    var tmp_1 = _Char___init__impl__380027157(47);
    if (contains$default(tmp_0, tmp_1, false, 2, null)) {
      var tmp_2 = path;
      var tmp_3 = _Char___init__impl__380027157(92);
      tmp = contains$default(tmp_2, tmp_3, false, 2, null);
    } else {
      {
        tmp = false;
      }
    }
    if (tmp) {
      var tmp_4 = path;
      if (contains$default_0(tmp_4, '\\ ', false, 2, null)) {
        var tmp_5 = path;
        path = replace$default(tmp_5, '\\ ', ' ', false, 4, null);
      } else {
      }
      var tmp_6 = path;
      if (contains$default_0(tmp_6, '\\\t', false, 2, null)) {
        var tmp_7 = path;
        path = replace$default(tmp_7, '\\\t', '\t', false, 4, null);
      } else {
      }
    } else {
    }
    var separator = pathSeparator(this, path);
    var refined = trimEnd(path, charArrayOf([separator]));
    var tmp_8;
    if (equals(new Char(separator), new Char(_Char___init__impl__380027157(92)))) {
      var tmp$ret$1;
      $l$block_0: {
        var tmp$ret$0;
        $l$block: {
          tmp$ret$0 = Regex_init_$Create$_0('[a-zA-Z][:]');
          break $l$block;
        }
        var tmp0_matches_0 = tmp$ret$0;
        tmp$ret$1 = tmp0_matches_0.matches_qvb2fs_k$(refined);
        break $l$block_0;
      }
      tmp_8 = tmp$ret$1;
    } else {
      tmp_8 = false;
    }
    if (tmp_8) {
      return refined + new Char(_Char___init__impl__380027157(92));
    } else {
    }
    var lastIndex = lastIndexOf$default(refined, separator, 0, false, 6, null);
    if (lastIndex < 0) {
      return null;
    }
    var tmp$ret$3;
    $l$block_2: {
      var tmp1_substring_0 = lastIndex + 1 | 0;
      var tmp$ret$2;
      $l$block_1: {
        tmp$ret$2 = refined;
        break $l$block_1;
      }
      tmp$ret$3 = tmp$ret$2.substring(0, tmp1_substring_0);
      break $l$block_2;
    }
    return tmp$ret$3;
  };
  FileNameUtil.prototype.getPathSeparatingLastPathComponent_lxbojq_k$ = function (aPath) {
    var path = aPath;
    var tmp;
    var tmp_0 = path;
    var tmp_1 = _Char___init__impl__380027157(47);
    if (contains$default(tmp_0, tmp_1, false, 2, null)) {
      var tmp_2 = path;
      var tmp_3 = _Char___init__impl__380027157(92);
      tmp = contains$default(tmp_2, tmp_3, false, 2, null);
    } else {
      {
        tmp = false;
      }
    }
    if (tmp) {
      var tmp_4 = path;
      if (contains$default_0(tmp_4, '\\ ', false, 2, null)) {
        var tmp_5 = path;
        path = replace$default(tmp_5, '\\ ', ' ', false, 4, null);
      } else {
      }
      var tmp_6 = path;
      if (contains$default_0(tmp_6, '\\\t', false, 2, null)) {
        var tmp_7 = path;
        path = replace$default(tmp_7, '\\\t', '\t', false, 4, null);
      } else {
      }
    } else {
    }
    var separator = pathSeparator(this, path);
    var tmp_8 = path;
    var components = split$default(tmp_8, charArrayOf([separator]), false, 0, 6, null);
    if (components.isEmpty_y1axqb_k$())
      return null;
    var tmp_9;
    if (components._get_size__809037418_ddoh9m_k$() === 1) {
      var component = first(components);
      var tmp_10;
      var tmp_11;
      if (equals(new Char(separator), new Char(_Char___init__impl__380027157(92)))) {
        var tmp$ret$1;
        $l$block_0: {
          var tmp$ret$0;
          $l$block: {
            tmp$ret$0 = Regex_init_$Create$_0('[a-zA-Z][:]');
            break $l$block;
          }
          var tmp0_matches_0 = tmp$ret$0;
          tmp$ret$1 = tmp0_matches_0.matches_qvb2fs_k$(component);
          break $l$block_0;
        }
        tmp_11 = tmp$ret$1;
      } else {
        tmp_11 = false;
      }
      if (tmp_11) {
        tmp_10 = new Pair(component + new Char(_Char___init__impl__380027157(92)), null);
      } else {
        {
          tmp_10 = new Pair(null, first(components));
        }
      }
      tmp_9 = tmp_10;
    } else {
      var tmp_12 = dropLast(components, 1);
      var tmp_13 = toString_0(separator);
      tmp_9 = new Pair(joinToString$default(tmp_12, tmp_13, null, null, 0, null, null, 62, null), last(components));
    }
    return tmp_9;
  };
  FileNameUtil.$metadata$ = {
    simpleName: 'FileNameUtil',
    kind: 'object',
    interfaces: []
  };
  var FileNameUtil_instance;
  function FileNameUtil_getInstance() {
    if (FileNameUtil_instance == null)
      new FileNameUtil();
    return FileNameUtil_instance;
  }
  function CommonException$message$delegate$lambda($message) {
    return function () {
      return $message;
    };
  }
  function CommonException(message, throwable) {
    Exception_init_$Init$(message, throwable, this);
    var tmp = this;
    tmp.message$delegate_1 = lazy(CommonException$message$delegate$lambda(message));
    captureStack(this, CommonException);
  }
  CommonException.prototype._get_message__1663917034_rinilm_k$ = function () {
    var tmp$ret$0;
    $l$block: {
      var tmp0_getValue_0 = message$factory();
      tmp$ret$0 = this.message$delegate_1._get_value__3683422336_a43j40_k$();
      break $l$block;
    }
    return tmp$ret$0;
  };
  CommonException.prototype.asThrowable = function () {
    return this;
  };
  CommonException.$metadata$ = {
    simpleName: 'CommonException',
    kind: 'class',
    interfaces: []
  };
  Object.defineProperty(CommonException.prototype, 'message', {
    configurable: true,
    get: function () {
      return this._get_message__1663917034_rinilm_k$();
    }
  });
  function IOException_init_$Init$(message, throwable, $mask0, $marker, $this) {
    if (!(($mask0 & 2) === 0))
      throwable = null;
    IOException.call($this, message, throwable);
    return $this;
  }
  function IOException_init_$Create$(message, throwable, $mask0, $marker) {
    var tmp = IOException_init_$Init$(message, throwable, $mask0, $marker, Object.create(IOException.prototype));
    captureStack(tmp, IOException_init_$Create$);
    return tmp;
  }
  function IOException(message, throwable) {
    var throwable_0 = throwable === void 1 ? null : throwable;
    CommonException.call(this, message, throwable_0);
    captureStack(this, IOException);
  }
  IOException.$metadata$ = {
    simpleName: 'IOException',
    kind: 'class',
    interfaces: []
  };
  function CreaturesIOException_init_$Init$(message, throwable, $mask0, $marker, $this) {
    if (!(($mask0 & 2) === 0))
      throwable = null;
    CreaturesIOException.call($this, message, throwable);
    return $this;
  }
  function CreaturesIOException_init_$Create$(message, throwable, $mask0, $marker) {
    var tmp = CreaturesIOException_init_$Init$(message, throwable, $mask0, $marker, Object.create(CreaturesIOException.prototype));
    captureStack(tmp, CreaturesIOException_init_$Create$);
    return tmp;
  }
  function CreaturesIOException(message, throwable) {
    var throwable_0 = throwable === void 1 ? null : throwable;
    IOException.call(this, message, throwable_0);
    captureStack(this, CreaturesIOException);
  }
  CreaturesIOException.$metadata$ = {
    simpleName: 'CreaturesIOException',
    kind: 'class',
    interfaces: []
  };
  function IOFileNotFoundException_init_$Init$(message, throwable, $mask0, $marker, $this) {
    if (!(($mask0 & 2) === 0))
      throwable = null;
    IOFileNotFoundException.call($this, message, throwable);
    return $this;
  }
  function IOFileNotFoundException_init_$Create$(message, throwable, $mask0, $marker) {
    var tmp = IOFileNotFoundException_init_$Init$(message, throwable, $mask0, $marker, Object.create(IOFileNotFoundException.prototype));
    captureStack(tmp, IOFileNotFoundException_init_$Create$);
    return tmp;
  }
  function IOFileNotFoundException(message, throwable) {
    var throwable_0 = throwable === void 1 ? null : throwable;
    CreaturesIOException.call(this, message, throwable_0);
    captureStack(this, IOFileNotFoundException);
  }
  IOFileNotFoundException.$metadata$ = {
    simpleName: 'IOFileNotFoundException',
    kind: 'class',
    interfaces: []
  };
  function message$factory() {
    return getPropertyCallableRef('message', 1, KProperty1, function (receiver) {
      return receiver.message;
    }, null);
  }
  function HasIntValue() {
  }
  HasIntValue.$metadata$ = {
    simpleName: 'HasIntValue',
    kind: 'interface',
    interfaces: []
  };
  function _set_mLog__588004768($this, _set____804775014) {
    $this.mLog_1 = _set____804775014;
  }
  function _get_mLog__802621844($this) {
    return $this.mLog_1;
  }
  function _set_mInfo__1045478890($this, _set____804775014) {
    $this.mInfo_1 = _set____804775014;
  }
  function _get_mInfo__3403640950($this) {
    return $this.mInfo_1;
  }
  function _set_mWarning__3374659912($this, _set____804775014) {
    $this.mWarning_1 = _set____804775014;
  }
  function _get_mWarning__2600528700($this) {
    return $this.mWarning_1;
  }
  function _set_mError__2234611164($this, _set____804775014) {
    $this.mError_1 = _set____804775014;
  }
  function _get_mError__2323190992($this) {
    return $this.mError_1;
  }
  function _set_mLogMemory__1645913887($this, _set____804775014) {
    $this.mLogMemory_1 = _set____804775014;
  }
  function _get_mLogMemory__735161363($this) {
    return $this.mLogMemory_1;
  }
  function _set_mGetColor__3615461323($this, _set____804775014) {
    $this.mGetColor_1 = _set____804775014;
  }
  function _get_mGetColor__1092230231($this) {
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
  LoggerBuilder.prototype.withLog = function (log) {
    this.mLog_1 = log;
  };
  LoggerBuilder.prototype.info = function (log) {
    this.mInfo_1 = log;
    return this;
  };
  LoggerBuilder.prototype.warning = function (log) {
    this.mWarning_1 = log;
    return this;
  };
  LoggerBuilder.prototype.error = function (log) {
    this.mError_1 = log;
    return this;
  };
  LoggerBuilder.prototype.logMemory = function (log) {
    this.mLogMemory_1 = log;
    return this;
  };
  LoggerBuilder.prototype.getColor = function (callback) {
    this.mGetColor_1 = callback;
    return this;
  };
  LoggerBuilder.prototype.build = function () {
    var tmp = this.mLog_1;
    var tmp_0 = this.mInfo_1;
    var tmp_1 = this.mWarning_1;
    var tmp_2 = this.mError_1;
    var tmp_3 = this.mLogMemory_1;
    var tmp_4 = this.mGetColor_1;
    return CallbackLogger_init_$Create$(tmp, tmp_0, tmp_1, tmp_2, tmp_3, tmp_4, null, 64, null);
  };
  LoggerBuilder.$metadata$ = {
    simpleName: 'LoggerBuilder',
    kind: 'class',
    interfaces: []
  };
  function CallbackLogger_init_$Init$(mLog, mInfo, mWarning, mError, mLogMemory, mGetColor, prependLogType, $mask0, $marker, $this) {
    if (!(($mask0 & 64) === 0))
      prependLogType = null;
    CallbackLogger.call($this, mLog, mInfo, mWarning, mError, mLogMemory, mGetColor, prependLogType);
    return $this;
  }
  function CallbackLogger_init_$Create$(mLog, mInfo, mWarning, mError, mLogMemory, mGetColor, prependLogType, $mask0, $marker) {
    return CallbackLogger_init_$Init$(mLog, mInfo, mWarning, mError, mLogMemory, mGetColor, prependLogType, $mask0, $marker, Object.create(CallbackLogger.prototype));
  }
  function DefaultLoggerObject$getColor$ref($boundThis) {
    var l = function (p0) {
      return $boundThis.getColor(p0);
    };
    l.callableName = 'getColor';
    return l;
  }
  function CallbackLogger(mLog, mInfo, mWarning, mError, mLogMemory, mGetColor, prependLogType) {
    this.mLog_1 = mLog;
    this.mInfo_1 = mInfo;
    this.mWarning_1 = mWarning;
    this.mError_1 = mError;
    this.mLogMemory_1 = mLogMemory;
    this.mGetColor_1 = mGetColor;
    this.prependLogType_1 = prependLogType;
  }
  CallbackLogger.prototype._get_mLog__802621844_d9uyz8_k$ = function () {
    return this.mLog_1;
  };
  CallbackLogger.prototype._get_mInfo__3403640950_eqo7t6_k$ = function () {
    return this.mInfo_1;
  };
  CallbackLogger.prototype._get_mWarning__2600528700_s0tp6s_k$ = function () {
    return this.mWarning_1;
  };
  CallbackLogger.prototype._get_mError__2323190992_wly0c0_k$ = function () {
    return this.mError_1;
  };
  CallbackLogger.prototype._get_mLogMemory__735161363_c5p24z_k$ = function () {
    return this.mLogMemory_1;
  };
  CallbackLogger.prototype._get_mGetColor__1092230231_i2aa8n_k$ = function () {
    return this.mGetColor_1;
  };
  CallbackLogger.prototype._set_prependLogType__3868997607_m46huj_k$ = function (_set____804775014) {
    this.prependLogType_1 = _set____804775014;
  };
  CallbackLogger.prototype._get_prependLogType__1117758171_ihhfq3_k$ = function () {
    return this.prependLogType_1;
  };
  CallbackLogger.prototype.log = function (replace, message, color) {
    var tmp0_safe_receiver = this.mLog_1;
    if (tmp0_safe_receiver == null)
      null;
    else
      tmp0_safe_receiver(replace, message, color);
    Unit_getInstance();
  };
  CallbackLogger.prototype.info = function (replace, message, color) {
    var tmp0_safe_receiver = this.mInfo_1;
    if (tmp0_safe_receiver == null)
      null;
    else
      tmp0_safe_receiver(replace, message, color);
    Unit_getInstance();
  };
  CallbackLogger.prototype.warning = function (message, color) {
    var tmp0_safe_receiver = this.mWarning_1;
    if (tmp0_safe_receiver == null)
      null;
    else
      tmp0_safe_receiver(message, color);
    Unit_getInstance();
  };
  CallbackLogger.prototype.error = function (message, color) {
    var tmp0_safe_receiver = this.mError_1;
    if (tmp0_safe_receiver == null)
      null;
    else
      tmp0_safe_receiver(message, color);
    Unit_getInstance();
  };
  CallbackLogger.prototype.logMemory = function () {
    var tmp0_safe_receiver = this.mLogMemory_1;
    if (tmp0_safe_receiver == null)
      null;
    else
      tmp0_safe_receiver();
    Unit_getInstance();
  };
  CallbackLogger.prototype.getColor = function (color) {
    var tmp0_elvis_lhs = this.mGetColor_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      tmp = DefaultLoggerObject$getColor$ref(DefaultLoggerObject_getInstance());
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp(color);
  };
  CallbackLogger.prototype.component1_7eebsc_k$ = function () {
    return this.mLog_1;
  };
  CallbackLogger.prototype.component2_7eebsb_k$ = function () {
    return this.mInfo_1;
  };
  CallbackLogger.prototype.component3_7eebsa_k$ = function () {
    return this.mWarning_1;
  };
  CallbackLogger.prototype.component4_7eebs9_k$ = function () {
    return this.mError_1;
  };
  CallbackLogger.prototype.component5_7eebs8_k$ = function () {
    return this.mLogMemory_1;
  };
  CallbackLogger.prototype.component6_7eebs7_k$ = function () {
    return this.mGetColor_1;
  };
  CallbackLogger.prototype.component7_7eebs6_k$ = function () {
    return this.prependLogType_1;
  };
  CallbackLogger.prototype.copy_u2ic50_k$ = function (mLog, mInfo, mWarning, mError, mLogMemory, mGetColor, prependLogType) {
    return new CallbackLogger(mLog, mInfo, mWarning, mError, mLogMemory, mGetColor, prependLogType);
  };
  CallbackLogger.prototype.copy$default_nfsr3t_k$ = function (mLog, mInfo, mWarning, mError, mLogMemory, mGetColor, prependLogType, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      mLog = this.mLog_1;
    if (!(($mask0 & 2) === 0))
      mInfo = this.mInfo_1;
    if (!(($mask0 & 4) === 0))
      mWarning = this.mWarning_1;
    if (!(($mask0 & 8) === 0))
      mError = this.mError_1;
    if (!(($mask0 & 16) === 0))
      mLogMemory = this.mLogMemory_1;
    if (!(($mask0 & 32) === 0))
      mGetColor = this.mGetColor_1;
    if (!(($mask0 & 64) === 0))
      prependLogType = this.prependLogType_1;
    return this.copy_u2ic50_k$(mLog, mInfo, mWarning, mError, mLogMemory, mGetColor, prependLogType);
  };
  CallbackLogger.prototype.toString = function () {
    return 'CallbackLogger(mLog=' + this.mLog_1 + ', mInfo=' + this.mInfo_1 + ', mWarning=' + this.mWarning_1 + ', mError=' + this.mError_1 + ', mLogMemory=' + this.mLogMemory_1 + ', mGetColor=' + this.mGetColor_1 + ', prependLogType=' + this.prependLogType_1 + ')';
  };
  CallbackLogger.prototype.hashCode = function () {
    var result = this.mLog_1 == null ? 0 : hashCode(this.mLog_1);
    result = imul(result, 31) + (this.mInfo_1 == null ? 0 : hashCode(this.mInfo_1)) | 0;
    result = imul(result, 31) + (this.mWarning_1 == null ? 0 : hashCode(this.mWarning_1)) | 0;
    result = imul(result, 31) + (this.mError_1 == null ? 0 : hashCode(this.mError_1)) | 0;
    result = imul(result, 31) + (this.mLogMemory_1 == null ? 0 : hashCode(this.mLogMemory_1)) | 0;
    result = imul(result, 31) + (this.mGetColor_1 == null ? 0 : hashCode(this.mGetColor_1)) | 0;
    result = imul(result, 31) + (this.prependLogType_1 == null ? 0 : this.prependLogType_1 | 0) | 0;
    return result;
  };
  CallbackLogger.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CallbackLogger))
      return false;
    else {
    }
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
  CallbackLogger.$metadata$ = {
    simpleName: 'CallbackLogger',
    kind: 'class',
    interfaces: []
  };
  Object.defineProperty(CallbackLogger.prototype, 'prependLogType', {
    configurable: true,
    get: function () {
      return this._get_prependLogType__1117758171_ihhfq3_k$();
    }
  });
  function BLACK() {
    BLACK_instance = this;
    LoggerColor.call(this);
  }
  BLACK.$metadata$ = {
    simpleName: 'BLACK',
    kind: 'object',
    interfaces: []
  };
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
  RED.$metadata$ = {
    simpleName: 'RED',
    kind: 'object',
    interfaces: []
  };
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
  GREEN.$metadata$ = {
    simpleName: 'GREEN',
    kind: 'object',
    interfaces: []
  };
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
  YELLOW.$metadata$ = {
    simpleName: 'YELLOW',
    kind: 'object',
    interfaces: []
  };
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
  BLUE.$metadata$ = {
    simpleName: 'BLUE',
    kind: 'object',
    interfaces: []
  };
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
  MAGENTA.$metadata$ = {
    simpleName: 'MAGENTA',
    kind: 'object',
    interfaces: []
  };
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
  CYAN.$metadata$ = {
    simpleName: 'CYAN',
    kind: 'object',
    interfaces: []
  };
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
  WHITE.$metadata$ = {
    simpleName: 'WHITE',
    kind: 'object',
    interfaces: []
  };
  var WHITE_instance;
  function WHITE_getInstance() {
    if (WHITE_instance == null)
      new WHITE();
    return WHITE_instance;
  }
  function LoggerColor() {
  }
  LoggerColor.$metadata$ = {
    simpleName: 'LoggerColor',
    kind: 'class',
    interfaces: []
  };
  function setLogger(logger) {
    Log_getInstance()._set_loggerObject__2699353672_a1bdid_k$(logger);
  }
  function _get_mLoggerObject__1657650773($this) {
    return $this.mLoggerObject_1;
  }
  function _get_modes__3438436001($this) {
    return $this.modes_1;
  }
  function Log$mLoggerObject$lambda() {
    return function () {
      return new Pointer(DefaultLoggerObject_getInstance());
    };
  }
  function Log$_get_loggerObject_$lambda_830762415() {
    return function (it) {
      return it._get_value__3683422336_a43j40_k$();
    };
  }
  function Log$_set_loggerObject_$lambda_26681379($logger) {
    return function (it) {
      it._set_value__1325260276_x73o94_k$($logger);
      return Unit_getInstance();
    };
  }
  function Log() {
    Log_instance = this;
    var tmp = this;
    tmp.mLoggerObject_1 = IsolateState_init_$Create$(null, Log$mLoggerObject$lambda(), 1, null);
    this.logLevel_1 = LogLevel_LOG_2_getInstance();
    var tmp_0 = this;
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = ArrayList_init_$Create$_0();
      break $l$block;
    }
    tmp_0.modes_1 = tmp$ret$0;
  }
  Log.prototype._set_loggerObject__2699353672_a1bdid_k$ = function (logger) {
    this.mLoggerObject_1.access_mfr1eb_k$(Log$_set_loggerObject_$lambda_26681379(logger));
  };
  Log.prototype._get_loggerObject__3639506492_au8ssk_k$ = function () {
    return this.mLoggerObject_1.access_mfr1eb_k$(Log$_get_loggerObject_$lambda_830762415());
  };
  Log.prototype._get_logLevel__3219972395_hs0vdh_k$ = function () {
    return this.logLevel_1;
  };
  Log.prototype.i_8cru1y_k$ = function (replace, color, message) {
    if (this.logLevel_1.value_1 >= LogLevel_LOG_1_getInstance().value_1) {
      var tmp = this._get_loggerObject__3639506492_au8ssk_k$();
      var tmp$ret$1;
      $l$block_0: {
        var tmp_0;
        var tmp0_elvis_lhs_1 = this._get_loggerObject__3639506492_au8ssk_k$().prependLogType;
        if (tmp0_elvis_lhs_1 == null ? DefaultLoggerObject_getInstance()._get_prependLogType__1117758171_ihhfq3_k$() : tmp0_elvis_lhs_1) {
          tmp_0 = '**LOG1** ';
        } else {
          {
            tmp_0 = '';
          }
        }
        var tmp_1 = tmp_0;
        var tmp_2;
        var tmp$ret$0;
        $l$block: {
          {
          }
          tmp$ret$0 = null == null ? true : isBlank(null);
          break $l$block;
        }
        if (!tmp$ret$0) {
          tmp_2 = 'null::';
        } else {
          {
            tmp_2 = '';
          }
        }
        tmp$ret$1 = tmp_1 + tmp_2 + message();
        break $l$block_0;
      }
      tmp.info(replace, tmp$ret$1, color);
    }
  };
  Log.prototype.i_1oyrtx_k$ = function (className, replace, color, message) {
    if (this.logLevel_1.value_1 >= LogLevel_LOG_1_getInstance().value_1) {
      var tmp = this._get_loggerObject__3639506492_au8ssk_k$();
      var tmp$ret$1;
      $l$block_0: {
        var tmp_0;
        var tmp0_elvis_lhs_1 = this._get_loggerObject__3639506492_au8ssk_k$().prependLogType;
        if (tmp0_elvis_lhs_1 == null ? DefaultLoggerObject_getInstance()._get_prependLogType__1117758171_ihhfq3_k$() : tmp0_elvis_lhs_1) {
          tmp_0 = '**LOG1** ';
        } else {
          {
            tmp_0 = '';
          }
        }
        var tmp_1 = tmp_0;
        var tmp_2;
        var tmp$ret$0;
        $l$block: {
          {
          }
          tmp$ret$0 = className == null ? true : isBlank(className);
          break $l$block;
        }
        if (!tmp$ret$0) {
          tmp_2 = className + '::';
        } else {
          {
            tmp_2 = '';
          }
        }
        tmp$ret$1 = tmp_1 + tmp_2 + message();
        break $l$block_0;
      }
      tmp.info(replace, tmp$ret$1, color);
    }
  };
  Log.prototype.i2_c0hp46_k$ = function (replace, color, message) {
    if (this.logLevel_1.value_1 >= LogLevel_LOG_2_getInstance().value_1) {
      var tmp = this._get_loggerObject__3639506492_au8ssk_k$();
      var tmp$ret$1;
      $l$block_0: {
        var tmp_0;
        var tmp0_elvis_lhs_1 = this._get_loggerObject__3639506492_au8ssk_k$().prependLogType;
        if (tmp0_elvis_lhs_1 == null ? DefaultLoggerObject_getInstance()._get_prependLogType__1117758171_ihhfq3_k$() : tmp0_elvis_lhs_1) {
          tmp_0 = '**LOG2** ';
        } else {
          {
            tmp_0 = '';
          }
        }
        var tmp_1 = tmp_0;
        var tmp_2;
        var tmp$ret$0;
        $l$block: {
          {
          }
          tmp$ret$0 = null == null ? true : isBlank(null);
          break $l$block;
        }
        if (!tmp$ret$0) {
          tmp_2 = 'null::';
        } else {
          {
            tmp_2 = '';
          }
        }
        tmp$ret$1 = tmp_1 + tmp_2 + message();
        break $l$block_0;
      }
      tmp.info(replace, tmp$ret$1, color);
    }
  };
  Log.prototype.i2_rwpijf_k$ = function (className, replace, color, message) {
    if (this.logLevel_1.value_1 >= LogLevel_LOG_2_getInstance().value_1) {
      var tmp = this._get_loggerObject__3639506492_au8ssk_k$();
      var tmp$ret$1;
      $l$block_0: {
        var tmp_0;
        var tmp0_elvis_lhs_1 = this._get_loggerObject__3639506492_au8ssk_k$().prependLogType;
        if (tmp0_elvis_lhs_1 == null ? DefaultLoggerObject_getInstance()._get_prependLogType__1117758171_ihhfq3_k$() : tmp0_elvis_lhs_1) {
          tmp_0 = '**LOG2** ';
        } else {
          {
            tmp_0 = '';
          }
        }
        var tmp_1 = tmp_0;
        var tmp_2;
        var tmp$ret$0;
        $l$block: {
          {
          }
          tmp$ret$0 = className == null ? true : isBlank(className);
          break $l$block;
        }
        if (!tmp$ret$0) {
          tmp_2 = className + '::';
        } else {
          {
            tmp_2 = '';
          }
        }
        tmp$ret$1 = tmp_1 + tmp_2 + message();
        break $l$block_0;
      }
      tmp.info(replace, tmp$ret$1, color);
    }
  };
  Log.prototype.t_3zvde7_k$ = function (replace, color, message) {
    if (this.logLevel_1.value_1 >= LogLevel_TRACE_getInstance().value_1) {
      var tmp = this._get_loggerObject__3639506492_au8ssk_k$();
      var tmp$ret$2;
      $l$block_1: {
        var tmp_0;
        var tmp0_elvis_lhs_1 = this._get_loggerObject__3639506492_au8ssk_k$().prependLogType;
        if (tmp0_elvis_lhs_1 == null ? DefaultLoggerObject_getInstance()._get_prependLogType__1117758171_ihhfq3_k$() : tmp0_elvis_lhs_1) {
          tmp_0 = '**TRACE** ';
        } else {
          {
            tmp_0 = '';
          }
        }
        var tmp_1 = tmp_0;
        var tmp_2;
        var tmp$ret$0;
        $l$block: {
          {
          }
          tmp$ret$0 = null == null ? true : isBlank(null);
          break $l$block;
        }
        if (!tmp$ret$0) {
          tmp_2 = 'null::';
        } else {
          {
            tmp_2 = '';
          }
        }
        var tmp_3 = tmp_2;
        var tmp$ret$1;
        $l$block_0: {
          tmp$ret$1 = message() + '\n' + stackTraceToString(Exception_init_$Create$_0());
          break $l$block_0;
        }
        tmp$ret$2 = tmp_1 + tmp_3 + tmp$ret$1;
        break $l$block_1;
      }
      tmp.info(replace, tmp$ret$2, color);
    }
  };
  Log.prototype.t_fey4w_k$ = function (className, replace, color, message) {
    if (this.logLevel_1.value_1 >= LogLevel_TRACE_getInstance().value_1) {
      var tmp = this._get_loggerObject__3639506492_au8ssk_k$();
      var tmp$ret$2;
      $l$block_1: {
        var tmp_0;
        var tmp0_elvis_lhs_1 = this._get_loggerObject__3639506492_au8ssk_k$().prependLogType;
        if (tmp0_elvis_lhs_1 == null ? DefaultLoggerObject_getInstance()._get_prependLogType__1117758171_ihhfq3_k$() : tmp0_elvis_lhs_1) {
          tmp_0 = '**TRACE** ';
        } else {
          {
            tmp_0 = '';
          }
        }
        var tmp_1 = tmp_0;
        var tmp_2;
        var tmp$ret$0;
        $l$block: {
          {
          }
          tmp$ret$0 = className == null ? true : isBlank(className);
          break $l$block;
        }
        if (!tmp$ret$0) {
          tmp_2 = className + '::';
        } else {
          {
            tmp_2 = '';
          }
        }
        var tmp_3 = tmp_2;
        var tmp$ret$1;
        $l$block_0: {
          tmp$ret$1 = message() + '\n' + stackTraceToString(Exception_init_$Create$_0());
          break $l$block_0;
        }
        tmp$ret$2 = tmp_1 + tmp_3 + tmp$ret$1;
        break $l$block_1;
      }
      tmp.info(replace, tmp$ret$2, color);
    }
  };
  Log.prototype.w_e1xpc_k$ = function (color, message) {
    if (this.logLevel_1.value_1 >= LogLevel_WARN_getInstance().value_1) {
      var tmp = this._get_loggerObject__3639506492_au8ssk_k$();
      var tmp$ret$1;
      $l$block_0: {
        var tmp_0;
        var tmp0_elvis_lhs_1 = this._get_loggerObject__3639506492_au8ssk_k$().prependLogType;
        if (tmp0_elvis_lhs_1 == null ? DefaultLoggerObject_getInstance()._get_prependLogType__1117758171_ihhfq3_k$() : tmp0_elvis_lhs_1) {
          tmp_0 = '**WARN** ';
        } else {
          {
            tmp_0 = '';
          }
        }
        var tmp_1 = tmp_0;
        var tmp_2;
        var tmp$ret$0;
        $l$block: {
          {
          }
          tmp$ret$0 = null == null ? true : isBlank(null);
          break $l$block;
        }
        if (!tmp$ret$0) {
          tmp_2 = 'null::';
        } else {
          {
            tmp_2 = '';
          }
        }
        tmp$ret$1 = tmp_1 + tmp_2 + message();
        break $l$block_0;
      }
      tmp.warning(tmp$ret$1, color);
    }
  };
  Log.prototype.w_w3kj41_k$ = function (className, color, message) {
    if (this.logLevel_1.value_1 >= LogLevel_WARN_getInstance().value_1) {
      var tmp = this._get_loggerObject__3639506492_au8ssk_k$();
      var tmp$ret$1;
      $l$block_0: {
        var tmp_0;
        var tmp0_elvis_lhs_1 = this._get_loggerObject__3639506492_au8ssk_k$().prependLogType;
        if (tmp0_elvis_lhs_1 == null ? DefaultLoggerObject_getInstance()._get_prependLogType__1117758171_ihhfq3_k$() : tmp0_elvis_lhs_1) {
          tmp_0 = '**WARN** ';
        } else {
          {
            tmp_0 = '';
          }
        }
        var tmp_1 = tmp_0;
        var tmp_2;
        var tmp$ret$0;
        $l$block: {
          {
          }
          tmp$ret$0 = className == null ? true : isBlank(className);
          break $l$block;
        }
        if (!tmp$ret$0) {
          tmp_2 = className + '::';
        } else {
          {
            tmp_2 = '';
          }
        }
        tmp$ret$1 = tmp_1 + tmp_2 + message();
        break $l$block_0;
      }
      tmp.warning(tmp$ret$1, color);
    }
  };
  Log.prototype.e_7sd7le_k$ = function (color, message) {
    if (this.logLevel_1.value_1 >= LogLevel_ERROR_getInstance().value_1) {
      var tmp = this._get_loggerObject__3639506492_au8ssk_k$();
      var tmp$ret$1;
      $l$block_0: {
        var tmp_0;
        var tmp0_elvis_lhs_1 = this._get_loggerObject__3639506492_au8ssk_k$().prependLogType;
        if (tmp0_elvis_lhs_1 == null ? DefaultLoggerObject_getInstance()._get_prependLogType__1117758171_ihhfq3_k$() : tmp0_elvis_lhs_1) {
          tmp_0 = '**ERROR** ';
        } else {
          {
            tmp_0 = '';
          }
        }
        var tmp_1 = tmp_0;
        var tmp_2;
        var tmp$ret$0;
        $l$block: {
          {
          }
          tmp$ret$0 = null == null ? true : isBlank(null);
          break $l$block;
        }
        if (!tmp$ret$0) {
          tmp_2 = 'null::';
        } else {
          {
            tmp_2 = '';
          }
        }
        tmp$ret$1 = tmp_1 + tmp_2 + message();
        break $l$block_0;
      }
      tmp.error(tmp$ret$1, color);
    }
  };
  Log.prototype.e_xsja4z_k$ = function (className, color, message) {
    if (this.logLevel_1.value_1 >= LogLevel_ERROR_getInstance().value_1) {
      var tmp = this._get_loggerObject__3639506492_au8ssk_k$();
      var tmp$ret$1;
      $l$block_0: {
        var tmp_0;
        var tmp0_elvis_lhs_1 = this._get_loggerObject__3639506492_au8ssk_k$().prependLogType;
        if (tmp0_elvis_lhs_1 == null ? DefaultLoggerObject_getInstance()._get_prependLogType__1117758171_ihhfq3_k$() : tmp0_elvis_lhs_1) {
          tmp_0 = '**ERROR** ';
        } else {
          {
            tmp_0 = '';
          }
        }
        var tmp_1 = tmp_0;
        var tmp_2;
        var tmp$ret$0;
        $l$block: {
          {
          }
          tmp$ret$0 = className == null ? true : isBlank(className);
          break $l$block;
        }
        if (!tmp$ret$0) {
          tmp_2 = className + '::';
        } else {
          {
            tmp_2 = '';
          }
        }
        tmp$ret$1 = tmp_1 + tmp_2 + message();
        break $l$block_0;
      }
      tmp.error(tmp$ret$1, color);
    }
  };
  Log.prototype.format_mpabgc_k$ = function (kind, className, message) {
    var tmp;
    var tmp0_elvis_lhs = this._get_loggerObject__3639506492_au8ssk_k$().prependLogType;
    if (tmp0_elvis_lhs == null ? DefaultLoggerObject_getInstance()._get_prependLogType__1117758171_ihhfq3_k$() : tmp0_elvis_lhs) {
      tmp = '**' + kind + '** ';
    } else {
      {
        tmp = '';
      }
    }
    var tmp_0 = tmp;
    var tmp_1;
    var tmp$ret$0;
    $l$block: {
      {
      }
      tmp$ret$0 = className == null ? true : isBlank(className);
      break $l$block;
    }
    if (!tmp$ret$0) {
      tmp_1 = '' + className + '::';
    } else {
      {
        tmp_1 = '';
      }
    }
    return tmp_0 + tmp_1 + message();
  };
  Log.prototype.logMemory_qing9g_k$ = function () {
    this._get_loggerObject__3639506492_au8ssk_k$().logMemory();
  };
  Log.prototype.hasMode_bbho6c_k$ = function (mode) {
    return this.modes_1.contains_2ehdt1_k$(mode);
  };
  Log.prototype.setMode_pasj3v_k$ = function (mode, active) {
    var hasMode = this.modes_1.contains_2ehdt1_k$(mode);
    if (active === hasMode) {
      return Unit_getInstance();
    }
    if (active) {
      this.modes_1.add_1j60pz_k$(mode);
      Unit_getInstance();
    } else {
      this.modes_1.remove_8hbkc6_k$(mode);
      Unit_getInstance();
    }
  };
  Log.$metadata$ = {
    simpleName: 'Log',
    kind: 'object',
    interfaces: []
  };
  var Log_instance;
  function Log_getInstance() {
    if (Log_instance == null)
      new Log();
    return Log_instance;
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
        THROW_ISE();
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
  LogLevel.prototype._get_value__3683422336_a43j40_k$ = function () {
    return this.value_1;
  };
  LogLevel.$metadata$ = {
    simpleName: 'LogLevel',
    kind: 'class',
    interfaces: [HasIntValue]
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
  function _get_NEWLINE_REGEX__306141877() {
    init_properties_util_string_kt_2265555191();
    return NEWLINE_REGEX;
  }
  var NEWLINE_REGEX;
  function _get_allchars__1496850543() {
    init_properties_util_string_kt_2265555191();
    return allchars;
  }
  var allchars;
  function ensureNotEndsWith(_this__1828080292, tail) {
    init_properties_util_string_kt_2265555191();
    var tmp;
    if (_this__1828080292 === tail) {
      tmp = '';
    } else {
      if (endsWith$default_0(_this__1828080292, tail, false, 2, null)) {
        var tmp$ret$1;
        $l$block_0: {
          var tmp0_substring_0 = _get_lastIndex__339712501(_this__1828080292) - tail.length | 0;
          var tmp$ret$0;
          $l$block: {
            tmp$ret$0 = _this__1828080292;
            break $l$block;
          }
          tmp$ret$1 = tmp$ret$0.substring(0, tmp0_substring_0);
          break $l$block_0;
        }
        tmp = tmp$ret$1;
      } else {
        {
          tmp = _this__1828080292;
        }
      }
    }
    return tmp;
  }
  function nullIfEmpty(_this__1828080292) {
    init_properties_util_string_kt_2265555191();
    return (_this__1828080292 == null ? true : isBlank(_this__1828080292)) ? null : _this__1828080292;
  }
  function ensureEndsWith(_this__1828080292, char) {
    init_properties_util_string_kt_2265555191();
    if (endsWith$default(_this__1828080292, char, false, 2, null))
      return _this__1828080292;
    else {
    }
    return _this__1828080292 + new Char(char);
  }
  function superUnescape(string) {
    init_properties_util_string_kt_2265555191();
    var escape = ';;#@(_x.x_)@#;;';
    $l$loop: while (true) {
      var tmp = escape;
      if (!contains$default_0(string, tmp, false, 2, null)) {
        break $l$loop;
      }
      escape = '!x(' + escape + ')x!';
    }
    var tmp$ret$0;
    $l$block: {
      var tmp_0 = escape;
      var tmp_1 = replace$default(string, '\\\\', tmp_0, false, 4, null);
      var tmp_2 = replace$default(tmp_1, '\\n', '\n', false, 4, null);
      var tmp_3 = replace$default(tmp_2, '\\r', '\r', false, 4, null);
      var tmp_4 = replace$default(tmp_3, '\\"', '"', false, 4, null);
      var tmp_5 = replace$default(tmp_4, "\\'", "'", false, 4, null);
      var tmp_6 = replace$default(tmp_5, '\\t', '\t', false, 4, null);
      var tmp_7 = replace$default(tmp_6, '\\b', '\b', false, 4, null);
      var tmp_8 = replace$default(tmp_7, '\\', '', false, 4, null);
      var tmp_9 = escape;
      var tmp0_replace_0 = replace$default(tmp_8, tmp_9, '\\', false, 4, null);
      var tmp1_replace_0 = _get_NEWLINE_REGEX__306141877();
      tmp$ret$0 = tmp1_replace_0.replace_838ra0_k$(tmp0_replace_0, '\r\n');
      break $l$block;
    }
    return tmp$ret$0;
  }
  function _get_ESCAPE_SEQUENCE__3104434738() {
    return ESCAPE_SEQUENCE;
  }
  var ESCAPE_SEQUENCE;
  var properties_initialized_util_string_kt_3973136211;
  function init_properties_util_string_kt_2265555191() {
    if (!properties_initialized_util_string_kt_3973136211) {
      properties_initialized_util_string_kt_3973136211 = true;
      var tmp$ret$0;
      $l$block: {
        tmp$ret$0 = Regex_init_$Create$_0('\r?\n');
        break $l$block;
      }
      NEWLINE_REGEX = tmp$ret$0;
      allchars = toCharArray('abcdefghijklmnopqrstuvwxyz0123456789');
    }
  }
  function _get_leadingNumberRegex__2378735347() {
    init_properties_utils_file_kt_3586268097();
    return leadingNumberRegex;
  }
  var leadingNumberRegex;
  function _get_trailingNumberRegex__1004234255() {
    init_properties_utils_file_kt_3586268097();
    return trailingNumberRegex;
  }
  var trailingNumberRegex;
  function _get_sortedFilesNice__3323124410() {
    init_properties_utils_file_kt_3586268097();
    return sortedFilesNice;
  }
  var sortedFilesNice;
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
  var properties_initialized_utils_file_kt_731857381;
  function init_properties_utils_file_kt_3586268097() {
    if (!properties_initialized_utils_file_kt_731857381) {
      properties_initialized_utils_file_kt_731857381 = true;
      var tmp$ret$0;
      $l$block: {
        tmp$ret$0 = Regex_init_$Create$_0('^(\\d+)(.+?)?(\\..+$)?');
        break $l$block;
      }
      leadingNumberRegex = tmp$ret$0;
      var tmp$ret$0_0;
      $l$block_0: {
        tmp$ret$0_0 = Regex_init_$Create$_0('^(.+?)?(\\d+)(\\..+$)?');
        break $l$block_0;
      }
      trailingNumberRegex = tmp$ret$0_0;
      var tmp = sortedFilesNice$lambda();
      sortedFilesNice = new sam$kotlin_Comparator$0(tmp);
    }
  }
  function _get_errorToleranceRange__38180921() {
    init_properties_utils_numbers_kt_76049703();
    return errorToleranceRange;
  }
  var errorToleranceRange;
  function _get_comparisonTolerance__246044941() {
    return comparisonTolerance;
  }
  var comparisonTolerance;
  var properties_initialized_utils_numbers_kt_383902851;
  function init_properties_utils_numbers_kt_76049703() {
    if (!properties_initialized_utils_numbers_kt_383902851) {
      properties_initialized_utils_numbers_kt_383902851 = true;
      errorToleranceRange = rangeTo(-1.0E-4, 1.0E-4);
    }
  }
  function setLogger_0(logger) {
    setLogger(createSingleFunctionLogger(logger));
  }
  function _get_bytes__3133227206_0($this) {
    return $this.bytes_1;
  }
  function JsByteReader_init_$Init$(byteString, $this) {
    JsByteReader.call($this, encodeToByteArray(byteString));
    return $this;
  }
  function fromString(byteString) {
    return JsByteReader_init_$Init$(byteString, Object.create(JsByteReader.prototype));
  }
  function _get_reader__3365748392($this) {
    return $this.reader_1;
  }
  function JsByteReader(bytes) {
    this.bytes_1 = bytes;
    this.reader_1 = new MemoryByteStreamReader(this.bytes_1);
  }
  JsByteReader.prototype._get_uInt8__3632685907_ayazl9_k$ = function () {
    return _get_uInt8__3632685907(this.reader_1);
  };
  JsByteReader.prototype._get_uInt16__944106508_fm3h8s_k$ = function () {
    return _get_uInt16__944106508(this.reader_1);
  };
  JsByteReader.prototype._get_uInt32__944108306_fm3imq_k$ = function () {
    return _get_uInt32__944108306(this.reader_1).toFloat_jhbgwv_k$();
  };
  JsByteReader.prototype._get_peakUInt8__520051602_8lmidu_k$ = function () {
    return peakUInt8(this.reader_1);
  };
  JsByteReader.prototype._get_size__809037418_ddoh9m_k$ = function () {
    return this.reader_1._get_size__809037418_ddoh9m_k$();
  };
  JsByteReader.prototype.seek = function (newPosition) {
    setPosition(this.reader_1, toLong(newPosition));
    Unit_getInstance();
  };
  JsByteReader.$metadata$ = {
    simpleName: 'JsByteReader',
    kind: 'class',
    interfaces: []
  };
  Object.defineProperty(JsByteReader.prototype, 'uInt8', {
    configurable: true,
    get: JsByteReader.prototype._get_uInt8__3632685907_ayazl9_k$
  });
  Object.defineProperty(JsByteReader.prototype, 'uInt16', {
    configurable: true,
    get: JsByteReader.prototype._get_uInt16__944106508_fm3h8s_k$
  });
  Object.defineProperty(JsByteReader.prototype, 'uInt32', {
    configurable: true,
    get: JsByteReader.prototype._get_uInt32__944108306_fm3imq_k$
  });
  Object.defineProperty(JsByteReader.prototype, 'peakUInt8', {
    configurable: true,
    get: JsByteReader.prototype._get_peakUInt8__520051602_8lmidu_k$
  });
  Object.defineProperty(JsByteReader.prototype, 'size', {
    configurable: true,
    get: JsByteReader.prototype._get_size__809037418_ddoh9m_k$
  });
  function _get_readBuffer__1897246165() {
    init_properties_byte_reader_js_kt_1698161483();
    return readBuffer;
  }
  var readBuffer;
  var properties_initialized_byte_reader_js_kt_2651674479;
  function init_properties_byte_reader_js_kt_1698161483() {
    if (!properties_initialized_byte_reader_js_kt_2651674479) {
      properties_initialized_byte_reader_js_kt_2651674479 = true;
      readBuffer = new DataView(new ArrayBuffer(8));
    }
  }
  function _get_floatsBuffer__2694523764() {
    init_properties_byte_writer_js_kt_31435515();
    return floatsBuffer;
  }
  var floatsBuffer;
  function _get_doubleBuffer__4225483770() {
    init_properties_byte_writer_js_kt_31435515();
    return doubleBuffer;
  }
  var doubleBuffer;
  function writeFloat(writer, float) {
    init_properties_byte_writer_js_kt_31435515();
    var tmp$ret$7;
    $l$block_6: {
      var tmp0_let_0 = _get_floatsBuffer__2694523764();
      {
      }
      var tmp$ret$6;
      $l$block_5: {
        {
          var tmp$ret$0;
          $l$block: {
            tmp$ret$0 = tmp0_let_0;
            break $l$block;
          }
          tmp$ret$0[0] = float;
        }
        var buffer_2 = new Uint8Array(tmp0_let_0.buffer);
        var tmp$ret$5;
        $l$block_4: {
          var tmp0_map_0_4 = numberRangeToNumber(0, 3);
          var tmp$ret$4;
          $l$block_3: {
            var tmp0_mapTo_0_1_5 = ArrayList_init_$Create$(collectionSizeOrDefault(tmp0_map_0_4, 10));
            var inductionVariable = tmp0_map_0_4._get_first__3232921377_hkbbvj_k$();
            var last = tmp0_map_0_4._get_last__802328181_d9oodx_k$();
            if (inductionVariable <= last)
              do {
                var item_2_3_7 = inductionVariable;
                inductionVariable = inductionVariable + 1 | 0;
                var tmp$ret$3;
                $l$block_2: {
                  var tmp$ret$2;
                  $l$block_1: {
                    var tmp$ret$1;
                    $l$block_0: {
                      tmp$ret$1 = buffer_2;
                      break $l$block_0;
                    }
                    tmp$ret$2 = tmp$ret$1[item_2_3_7];
                    break $l$block_1;
                  }
                  tmp$ret$3 = tmp$ret$2;
                  break $l$block_2;
                }
                tmp0_mapTo_0_1_5.add_1j60pz_k$(tmp$ret$3);
                Unit_getInstance();
              }
               while (!(item_2_3_7 === last));
            tmp$ret$4 = tmp0_mapTo_0_1_5;
            break $l$block_3;
          }
          tmp$ret$5 = tmp$ret$4;
          break $l$block_4;
        }
        var bytes_3 = toByteArray(tmp$ret$5);
        var tmp = console;
        tmp.log('FloatBytesToWrite: [' + joinToString$default_0(bytes_3, ',', null, null, 0, null, null, 62, null) + ']');
        tmp$ret$6 = writer.write(bytes_3);
        break $l$block_5;
      }
      tmp$ret$7 = tmp$ret$6;
      break $l$block_6;
    }
    return tmp$ret$7;
  }
  function writeDouble(writer, double) {
    init_properties_byte_writer_js_kt_31435515();
    var tmp$ret$7;
    $l$block_6: {
      var tmp0_let_0 = _get_doubleBuffer__4225483770();
      {
      }
      var tmp$ret$6;
      $l$block_5: {
        {
          var tmp$ret$0;
          $l$block: {
            tmp$ret$0 = tmp0_let_0;
            break $l$block;
          }
          tmp$ret$0[0] = double;
        }
        var buffer_2 = new Uint8Array(tmp0_let_0.buffer);
        var tmp$ret$5;
        $l$block_4: {
          var tmp0_map_0_4 = numberRangeToNumber(0, 7);
          var tmp$ret$4;
          $l$block_3: {
            var tmp0_mapTo_0_1_5 = ArrayList_init_$Create$(collectionSizeOrDefault(tmp0_map_0_4, 10));
            var inductionVariable = tmp0_map_0_4._get_first__3232921377_hkbbvj_k$();
            var last = tmp0_map_0_4._get_last__802328181_d9oodx_k$();
            if (inductionVariable <= last)
              do {
                var item_2_3_7 = inductionVariable;
                inductionVariable = inductionVariable + 1 | 0;
                var tmp$ret$3;
                $l$block_2: {
                  var tmp$ret$2;
                  $l$block_1: {
                    var tmp$ret$1;
                    $l$block_0: {
                      tmp$ret$1 = buffer_2;
                      break $l$block_0;
                    }
                    tmp$ret$2 = tmp$ret$1[item_2_3_7];
                    break $l$block_1;
                  }
                  tmp$ret$3 = tmp$ret$2;
                  break $l$block_2;
                }
                tmp0_mapTo_0_1_5.add_1j60pz_k$(tmp$ret$3);
                Unit_getInstance();
              }
               while (!(item_2_3_7 === last));
            tmp$ret$4 = tmp0_mapTo_0_1_5;
            break $l$block_3;
          }
          tmp$ret$5 = tmp$ret$4;
          break $l$block_4;
        }
        var bytes_3 = toByteArray(tmp$ret$5);
        var tmp = console;
        tmp.log('DoubleBytesToWrite: [' + joinToString$default_0(bytes_3, ',', null, null, 0, null, null, 62, null) + ']');
        tmp$ret$6 = writer.write(bytes_3);
        break $l$block_5;
      }
      tmp$ret$7 = tmp$ret$6;
      break $l$block_6;
    }
    return tmp$ret$7;
  }
  function writeStringWithCreaturesEncoding(writer, string) {
    init_properties_byte_writer_js_kt_31435515();
    var replaceCharCodesForLatin1 = mapOf([to(0, 0), to(1, 1), to(2, 2), to(3, 3), to(4, 4), to(5, 5), to(6, 6), to(7, 7), to(8, 8), to(9, 9), to(10, 10), to(11, 11), to(12, 12), to(13, 13), to(14, 14), to(15, 15), to(16, 16), to(17, 17), to(18, 18), to(19, 19), to(20, 20), to(21, 21), to(22, 22), to(23, 23), to(24, 24), to(25, 25), to(26, 26), to(27, 27), to(28, 28), to(29, 29), to(30, 30), to(31, 31), to(32, 32), to(33, 33), to(34, 34), to(35, 35), to(36, 36), to(37, 37), to(38, 38), to(39, 39), to(40, 40), to(41, 41), to(42, 42), to(43, 43), to(44, 44), to(45, 45), to(46, 46), to(47, 47), to(48, 48), to(49, 49), to(50, 50), to(51, 51), to(52, 52), to(53, 53), to(54, 54), to(55, 55), to(56, 56), to(57, 57), to(58, 58), to(59, 59), to(60, 60), to(61, 61), to(62, 62), to(63, 63), to(64, 64), to(65, 65), to(66, 66), to(67, 67), to(68, 68), to(69, 69), to(70, 70), to(71, 71), to(72, 72), to(73, 73), to(74, 74), to(75, 75), to(76, 76), to(77, 77), to(78, 78), to(79, 79), to(80, 80), to(81, 81), to(82, 82), to(83, 83), to(84, 84), to(85, 85), to(86, 86), to(87, 87), to(88, 88), to(89, 89), to(90, 90), to(91, 91), to(92, 92), to(93, 93), to(94, 94), to(95, 95), to(96, 96), to(97, 97), to(98, 98), to(99, 99), to(100, 100), to(101, 101), to(102, 102), to(103, 103), to(104, 104), to(105, 105), to(106, 106), to(107, 107), to(108, 108), to(109, 109), to(110, 110), to(111, 111), to(112, 112), to(113, 113), to(114, 114), to(115, 115), to(116, 116), to(117, 117), to(118, 118), to(119, 119), to(120, 120), to(121, 121), to(122, 122), to(123, 123), to(124, 124), to(125, 125), to(126, 126), to(127, 127), to(8364, 128), to(8218, 130), to(402, 131), to(8222, 132), to(8230, 133), to(8224, 134), to(8225, 135), to(710, 136), to(8240, 137), to(352, 138), to(8249, 139), to(338, 140), to(381, 142), to(8216, 145), to(8217, 146), to(8220, 147), to(8221, 148), to(8226, 149), to(8211, 150), to(8212, 151), to(732, 152), to(8482, 153), to(353, 154), to(8250, 155), to(339, 156), to(382, 158), to(376, 159), to(160, 160), to(161, 161), to(162, 162), to(163, 163), to(164, 164), to(165, 165), to(166, 166), to(167, 167), to(168, 168), to(169, 169), to(170, 170), to(171, 171), to(172, 172), to(173, 173), to(174, 174), to(175, 175), to(176, 176), to(177, 177), to(178, 178), to(179, 179), to(180, 180), to(181, 181), to(182, 182), to(183, 183), to(184, 184), to(185, 185), to(186, 186), to(187, 187), to(188, 188), to(189, 189), to(190, 190), to(191, 191), to(192, 192), to(193, 193), to(194, 194), to(195, 195), to(196, 196), to(197, 197), to(198, 198), to(199, 199), to(200, 200), to(201, 201), to(202, 202), to(203, 203), to(204, 204), to(205, 205), to(206, 206), to(207, 207), to(208, 208), to(209, 209), to(210, 210), to(211, 211), to(212, 212), to(213, 213), to(214, 214), to(215, 215), to(216, 216), to(217, 217), to(218, 218), to(219, 219), to(220, 220), to(221, 221), to(222, 222), to(223, 223), to(224, 224), to(225, 225), to(226, 226), to(227, 227), to(228, 228), to(229, 229), to(230, 230), to(231, 231), to(232, 232), to(233, 233), to(234, 234), to(235, 235), to(236, 236), to(237, 237), to(238, 238), to(239, 239), to(240, 240), to(241, 241), to(242, 242), to(243, 243), to(244, 244), to(245, 245), to(246, 246), to(247, 247), to(248, 248), to(249, 249), to(250, 250), to(251, 251), to(252, 252), to(253, 253), to(254, 254), to(255, 255)]);
    var length = string.length;
    var bytes = new Int8Array(length + 1 | 0);
    var inductionVariable = 0;
    if (inductionVariable < length)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp$ret$0;
        $l$block: {
          var tmp0__get_code__0_2225219253 = charSequenceGet(string, i);
          tmp$ret$0 = Char__toInt_impl_2402388783(tmp0__get_code__0_2225219253);
          break $l$block;
        }
        var charCode = tmp$ret$0;
        var tmp;
        if (charCode > 256) {
          var tmp_0;
          if (replaceCharCodesForLatin1.containsKey_wgk31w_k$(charCode)) {
            tmp_0 = ensureNotNull(replaceCharCodesForLatin1.get_1mhr4y_k$(charCode));
          } else {
            {
              var tmp1_e_0 = Log_getInstance();
              if (tmp1_e_0._get_logLevel__3219972395_hs0vdh_k$()._get_value__3683422336_a43j40_k$() >= LogLevel_ERROR_getInstance()._get_value__3683422336_a43j40_k$()) {
                var tmp_1 = tmp1_e_0._get_loggerObject__3639506492_au8ssk_k$();
                var tmp$ret$3;
                $l$block_2: {
                  var tmp_2;
                  var tmp0_elvis_lhs_1_1 = tmp1_e_0._get_loggerObject__3639506492_au8ssk_k$().prependLogType;
                  if (tmp0_elvis_lhs_1_1 == null ? DefaultLoggerObject_getInstance()._get_prependLogType__1117758171_ihhfq3_k$() : tmp0_elvis_lhs_1_1) {
                    tmp_2 = '**ERROR** ';
                  } else {
                    {
                      tmp_2 = '';
                    }
                  }
                  var tmp_3 = tmp_2;
                  var tmp_4;
                  var tmp$ret$1;
                  $l$block_0: {
                    {
                    }
                    tmp$ret$1 = null == null ? true : isBlank(null);
                    break $l$block_0;
                  }
                  if (!tmp$ret$1) {
                    tmp_4 = 'null::';
                  } else {
                    {
                      tmp_4 = '';
                    }
                  }
                  var tmp_5 = tmp_4;
                  var tmp$ret$2;
                  $l$block_1: {
                    var tmp_6 = replaceCharCodesForLatin1._get_keys__801529559_d97k5z_k$();
                    tmp$ret$2 = 'CP1252 does not have char code ' + charCode + '; Codes: ' + joinToString$default(tmp_6, null, null, null, 0, null, writeStringWithCreaturesEncoding$lambda(), 31, null);
                    break $l$block_1;
                  }
                  tmp$ret$3 = tmp_3 + tmp_5 + tmp$ret$2;
                  break $l$block_2;
                }
                tmp_1.error(tmp$ret$3, null);
              }
            }
            var tmp$ret$4;
            $l$block_3: {
              tmp$ret$4 = 65533;
              break $l$block_3;
            }
            tmp_0 = tmp$ret$4;
          }
          tmp = tmp_0;
        } else {
          tmp = charCode;
        }
        var code = tmp;
        bytes[i] = toByte(code);
      }
       while (inductionVariable < length);
    return writer.write(bytes);
  }
  function writeStringWithCreaturesEncoding$lambda() {
    return function (it) {
      return '' + it;
    };
  }
  var properties_initialized_byte_writer_js_kt_984948511;
  function init_properties_byte_writer_js_kt_31435515() {
    if (!properties_initialized_byte_writer_js_kt_984948511) {
      properties_initialized_byte_writer_js_kt_984948511 = true;
      floatsBuffer = new Float32Array(1);
      doubleBuffer = new Float64Array(1);
    }
  }
  function _get_pathSeparatorChar__3143419483() {
    init_properties_path_util_js_kt_1773386958();
    var tmp$ret$0;
    $l$block: {
      var tmp0_getValue_0 = pathSeparatorChar$factory();
      tmp$ret$0 = pathSeparatorChar$delegate._get_value__3683422336_a43j40_k$();
      break $l$block;
    }
    return tmp$ret$0;
  }
  var pathSeparatorChar$delegate;
  function _get_pathSeparator__1107968145() {
    init_properties_path_util_js_kt_1773386958();
    return pathSeparator_0;
  }
  var pathSeparator_0;
  function _get_applicationSupportPath__3105448039() {
    init_properties_path_util_js_kt_1773386958();
    return applicationSupportPath;
  }
  var applicationSupportPath;
  function pathSeparatorChar$delegate$lambda() {
    return function () {
      var tmp;
      var tmp_0 = require != null;
      if ((!(tmp_0 == null) ? typeof tmp_0 === 'boolean' : false) ? tmp_0 : THROW_CCE()) {
        var tmp_1;
        try {
          tmp_1 = function () {
            try {
              return require('path').sep;
            } catch (e) {
              return '/';
            }
          }();
        } catch ($p) {
          var tmp_2;
          if ($p instanceof Exception) {
            tmp_2 = _Char___init__impl__380027157(47);
          } else {
            if ($p instanceof Error_0) {
              tmp_2 = _Char___init__impl__380027157(47);
            } else {
              {
                throw $p;
              }
            }
          }
          tmp_1 = tmp_2;
        }
        tmp = tmp_1;
      } else {
        {
          tmp = _Char___init__impl__380027157(47);
        }
      }
      return tmp;
    };
  }
  function pathSeparatorChar$factory() {
    return getPropertyCallableRef('pathSeparatorChar', 0, KProperty0, function () {
      return new Char(_get_pathSeparatorChar__3143419483());
    }, null);
  }
  var properties_initialized_path_util_js_kt_3168791026;
  function init_properties_path_util_js_kt_1773386958() {
    if (!properties_initialized_path_util_js_kt_3168791026) {
      properties_initialized_path_util_js_kt_3168791026 = true;
      pathSeparatorChar$delegate = lazy(pathSeparatorChar$delegate$lambda());
      pathSeparator_0 = '' + new Char(_get_pathSeparatorChar__3143419483());
      applicationSupportPath = null;
    }
  }
  function _get_colorEscape__2454662221($this) {
    return $this.colorEscape_1;
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
    this.colorEscape_1 = '\x1B[3';
    this.prependLogType_1 = false;
  }
  DefaultLoggerObject.prototype._get_prependLogType__1117758171_ihhfq3_k$ = function () {
    return this.prependLogType_1;
  };
  DefaultLoggerObject.prototype.log = function (replace, message, color) {
    var tmp0_safe_receiver = this.getColor(color);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      var tmp$ret$1;
      $l$block_0: {
        {
        }
        var tmp$ret$0;
        $l$block: {
          tmp$ret$0 = DefaultLoggerObject_getInstance().colorEscape_1 + tmp0_safe_receiver + 'm';
          break $l$block;
        }
        tmp$ret$1 = tmp$ret$0;
        break $l$block_0;
      }
      tmp = tmp$ret$1;
    }
    var tmp1_elvis_lhs = tmp;
    var colorPrefix = tmp1_elvis_lhs == null ? '' : tmp1_elvis_lhs;
    if (replace) {
      var tmp_0 = colorPrefix + message;
      logReplace(tmp_0, DefaultLoggerObject$log$log$ref(console));
      return Unit_getInstance();
    }
    console.log(colorPrefix + message);
  };
  DefaultLoggerObject.prototype.info = function (replace, message, color) {
    var tmp0_safe_receiver = this.getColor(color);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      var tmp$ret$1;
      $l$block_0: {
        {
        }
        var tmp$ret$0;
        $l$block: {
          tmp$ret$0 = DefaultLoggerObject_getInstance().colorEscape_1 + tmp0_safe_receiver + 'm';
          break $l$block;
        }
        tmp$ret$1 = tmp$ret$0;
        break $l$block_0;
      }
      tmp = tmp$ret$1;
    }
    var tmp1_elvis_lhs = tmp;
    var colorPrefix = tmp1_elvis_lhs == null ? '' : tmp1_elvis_lhs;
    if (replace) {
      var tmp_0 = colorPrefix + message;
      logReplace(tmp_0, DefaultLoggerObject$info$info$ref(console));
      return Unit_getInstance();
    }
    console.info(colorPrefix + message);
  };
  DefaultLoggerObject.prototype.warning = function (message, color) {
    var tmp0_safe_receiver = this.getColor(color);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      var tmp$ret$1;
      $l$block_0: {
        {
        }
        var tmp$ret$0;
        $l$block: {
          tmp$ret$0 = DefaultLoggerObject_getInstance().colorEscape_1 + tmp0_safe_receiver + 'm';
          break $l$block;
        }
        tmp$ret$1 = tmp$ret$0;
        break $l$block_0;
      }
      tmp = tmp$ret$1;
    }
    var tmp1_elvis_lhs = tmp;
    var colorPrefix = tmp1_elvis_lhs == null ? '' : tmp1_elvis_lhs;
    console.warn(colorPrefix + message);
  };
  DefaultLoggerObject.prototype.logMemory = function () {
    console.log('Cannot log memory');
  };
  DefaultLoggerObject.prototype.error = function (message, color) {
    var tmp0_elvis_lhs = color;
    var tmp1_safe_receiver = this.getColor(tmp0_elvis_lhs == null ? RED_getInstance() : tmp0_elvis_lhs);
    var tmp;
    if (tmp1_safe_receiver == null) {
      tmp = null;
    } else {
      var tmp$ret$1;
      $l$block_0: {
        {
        }
        var tmp$ret$0;
        $l$block: {
          tmp$ret$0 = DefaultLoggerObject_getInstance().colorEscape_1 + tmp1_safe_receiver + 'm';
          break $l$block;
        }
        tmp$ret$1 = tmp$ret$0;
        break $l$block_0;
      }
      tmp = tmp$ret$1;
    }
    var tmp2_elvis_lhs = tmp;
    var colorPrefix = tmp2_elvis_lhs == null ? '' : tmp2_elvis_lhs;
    console.warn(colorPrefix + message);
  };
  DefaultLoggerObject.prototype.getColor = function (color) {
    if (color == null) {
      return null;
    }
    var tmp0_subject = color;
    var tmp;
    if (equals(tmp0_subject, BLACK_getInstance())) {
      tmp = '0';
    } else if (equals(tmp0_subject, RED_getInstance())) {
      tmp = '1';
    } else if (equals(tmp0_subject, GREEN_getInstance())) {
      tmp = '2';
    } else if (equals(tmp0_subject, YELLOW_getInstance())) {
      tmp = '3';
    } else if (equals(tmp0_subject, BLUE_getInstance())) {
      tmp = '4';
    } else if (equals(tmp0_subject, MAGENTA_getInstance())) {
      tmp = '5';
    } else if (equals(tmp0_subject, CYAN_getInstance())) {
      tmp = '6';
    } else if (equals(tmp0_subject, WHITE_getInstance())) {
      tmp = '7';
    } else {
      noWhenBranchMatchedException();
    }
    return tmp;
  };
  DefaultLoggerObject.$metadata$ = {
    simpleName: 'DefaultLoggerObject',
    kind: 'object',
    interfaces: []
  };
  Object.defineProperty(DefaultLoggerObject.prototype, 'prependLogType', {
    configurable: true,
    get: function () {
      return this._get_prependLogType__1117758171_ihhfq3_k$();
    }
  });
  var DefaultLoggerObject_instance;
  function DefaultLoggerObject_getInstance() {
    if (DefaultLoggerObject_instance == null)
      new DefaultLoggerObject();
    return DefaultLoggerObject_instance;
  }
  function createSingleFunctionLogger(logger) {
    return new createSingleFunctionLogger$1(logger);
  }
  function logReplace(message, fallback) {
    var process_0 = process;
    var tmp = logReplace$outlinedJsCode$(process_0);
    var isStdOutObject = (!(tmp == null) ? typeof tmp === 'boolean' : false) ? tmp : THROW_CCE();
    var tmp_0;
    if (process_0 == null ? true : !isStdOutObject) {
      tmp_0 = true;
    } else {
      var tmp0_safe_receiver = process_0.stdout;
      var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.constructor;
      tmp_0 = (tmp1_safe_receiver == null ? null : tmp1_safe_receiver.name) != 'WriteStream';
    }
    if (tmp_0) {
      fallback(message);
    } else {
    }
    process_0.stdout.clearLine(0);
    process_0.stdout.cursorTo(0);
    var tmp$ret$2;
    $l$block_1: {
      var tmp$ret$0;
      $l$block: {
        var tmp_1 = process_0.stdout.columns;
        var tmp0_min_0 = numberToInt(isNumber(tmp_1) ? tmp_1 : THROW_CCE());
        var tmp1_min_0 = message.length;
        tmp$ret$0 = Math.min(tmp0_min_0, tmp1_min_0);
        break $l$block;
      }
      var tmp2_substring_0 = tmp$ret$0;
      var tmp$ret$1;
      $l$block_0: {
        tmp$ret$1 = message;
        break $l$block_0;
      }
      tmp$ret$2 = tmp$ret$1.substring(0, tmp2_substring_0);
      break $l$block_1;
    }
    process_0.stdout.write(tmp$ret$2, 'utf8');
  }
  function logReplace$outlinedJsCode$(process) {
    return typeof process.stdout === 'object';
  }
  function createSingleFunctionLogger$1($logger) {
    this.$logger_1 = $logger;
  }
  createSingleFunctionLogger$1.prototype.log = function (replace, message, color) {
    this.$logger_1('log', message);
  };
  createSingleFunctionLogger$1.prototype.info = function (replace, message, color) {
    this.$logger_1('info', message);
  };
  createSingleFunctionLogger$1.prototype.warning = function (message, color) {
    this.$logger_1('warning', message);
  };
  createSingleFunctionLogger$1.prototype.error = function (message, color) {
    this.$logger_1('error', message);
  };
  createSingleFunctionLogger$1.prototype.getColor = function (color) {
    return null;
  };
  createSingleFunctionLogger$1.prototype.logMemory = function () {
  };
  createSingleFunctionLogger$1.prototype._get_prependLogType__1117758171_ihhfq3_k$ = function () {
    return null;
  };
  createSingleFunctionLogger$1.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  Object.defineProperty(createSingleFunctionLogger$1.prototype, 'prependLogType', {
    configurable: true,
    get: function () {
      return this._get_prependLogType__1117758171_ihhfq3_k$();
    }
  });
  //region block: init
  ESCAPE_SEQUENCE = ';;#@(_x.x_)@#;;';
  comparisonTolerance = 1.0E-4;
  //endregion
  //region block: exports
  function $jsExportAll$(_) {
    var $bedalton = _.bedalton || (_.bedalton = {});
    var $bedalton$creatures = $bedalton.creatures || ($bedalton.creatures = {});
    var $bedalton$creatures$bytes = $bedalton$creatures.bytes || ($bedalton$creatures.bytes = {});
    $bedalton$creatures$bytes.uInt16 = uInt16;
    $bedalton$creatures$bytes.uInt16BE = uInt16BE;
    $bedalton$creatures$bytes.int16 = int16;
    $bedalton$creatures$bytes.int16BE = int16BE;
    $bedalton$creatures$bytes.int32 = int32;
    $bedalton$creatures$bytes.uInt32 = uInt32;
    $bedalton$creatures$bytes.int32BE = int32BE;
    $bedalton$creatures$bytes.uInt32BE = uInt32BE;
    $bedalton$creatures$bytes.bytes = bytes;
    $bedalton$creatures$bytes.skip = skip;
    $bedalton$creatures$bytes.offset = offset;
    var $bedalton = _.bedalton || (_.bedalton = {});
    var $bedalton$creatures = $bedalton.creatures || ($bedalton.creatures = {});
    var $bedalton$creatures$bytes = $bedalton$creatures.bytes || ($bedalton$creatures.bytes = {});
    $bedalton$creatures$bytes.MemoryByteStreamWriter = MemoryByteStreamWriter;
    Object.defineProperty($bedalton$creatures$bytes.MemoryByteStreamWriter, 'Companion', {
      configurable: true,
      get: Companion_getInstance
    });
    var $bedalton = _.bedalton || (_.bedalton = {});
    var $bedalton$creatures = $bedalton.creatures || ($bedalton.creatures = {});
    var $bedalton$creatures$geometry = $bedalton$creatures.geometry || ($bedalton$creatures.geometry = {});
    $bedalton$creatures$geometry.Line = Line;
    var $bedalton = _.bedalton || (_.bedalton = {});
    var $bedalton$creatures = $bedalton.creatures || ($bedalton.creatures = {});
    var $bedalton$creatures$util = $bedalton$creatures.util || ($bedalton$creatures.util = {});
    $bedalton$creatures$util.CommonException = CommonException;
    $bedalton$creatures$util.IOException = IOException;
    $bedalton$creatures$util.CreaturesIOException = CreaturesIOException;
    $bedalton$creatures$util.IOFileNotFoundException = IOFileNotFoundException;
    var $bedalton = _.bedalton || (_.bedalton = {});
    var $bedalton$creatures = $bedalton.creatures || ($bedalton.creatures = {});
    var $bedalton$creatures$util = $bedalton$creatures.util || ($bedalton$creatures.util = {});
    $bedalton$creatures$util.LoggerBuilder = LoggerBuilder;
    var $bedalton = _.bedalton || (_.bedalton = {});
    var $bedalton$creatures = $bedalton.creatures || ($bedalton.creatures = {});
    var $bedalton$creatures$util = $bedalton$creatures.util || ($bedalton$creatures.util = {});
    $bedalton$creatures$util.LoggerColor = LoggerColor;
    Object.defineProperty($bedalton$creatures$util.LoggerColor, 'BLACK', {
      configurable: true,
      get: BLACK_getInstance
    });
    Object.defineProperty($bedalton$creatures$util.LoggerColor, 'RED', {
      configurable: true,
      get: RED_getInstance
    });
    Object.defineProperty($bedalton$creatures$util.LoggerColor, 'GREEN', {
      configurable: true,
      get: GREEN_getInstance
    });
    Object.defineProperty($bedalton$creatures$util.LoggerColor, 'YELLOW', {
      configurable: true,
      get: YELLOW_getInstance
    });
    Object.defineProperty($bedalton$creatures$util.LoggerColor, 'BLUE', {
      configurable: true,
      get: BLUE_getInstance
    });
    Object.defineProperty($bedalton$creatures$util.LoggerColor, 'MAGENTA', {
      configurable: true,
      get: MAGENTA_getInstance
    });
    Object.defineProperty($bedalton$creatures$util.LoggerColor, 'CYAN', {
      configurable: true,
      get: CYAN_getInstance
    });
    Object.defineProperty($bedalton$creatures$util.LoggerColor, 'WHITE', {
      configurable: true,
      get: WHITE_getInstance
    });
    _.setLogger = setLogger_0;
    var $bedalton = _.bedalton || (_.bedalton = {});
    var $bedalton$creatures = $bedalton.creatures || ($bedalton.creatures = {});
    var $bedalton$creatures$bytes = $bedalton$creatures.bytes || ($bedalton$creatures.bytes = {});
    $bedalton$creatures$bytes.JsByteReader = JsByteReader;
    $bedalton$creatures$bytes.JsByteReader.fromString = fromString;
    var $bedalton = _.bedalton || (_.bedalton = {});
    var $bedalton$creatures = $bedalton.creatures || ($bedalton.creatures = {});
    var $bedalton$creatures$bytes = $bedalton$creatures.bytes || ($bedalton$creatures.bytes = {});
    var $bedalton = _.bedalton || (_.bedalton = {});
    var $bedalton$creatures = $bedalton.creatures || ($bedalton.creatures = {});
    var $bedalton$creatures$bytes = $bedalton$creatures.bytes || ($bedalton$creatures.bytes = {});
    var $bedalton = _.bedalton || (_.bedalton = {});
    var $bedalton$creatures = $bedalton.creatures || ($bedalton.creatures = {});
    var $bedalton$creatures$geometry = $bedalton$creatures.geometry || ($bedalton$creatures.geometry = {});
    var $bedalton = _.bedalton || (_.bedalton = {});
    var $bedalton$creatures = $bedalton.creatures || ($bedalton.creatures = {});
    var $bedalton$creatures$structs = $bedalton$creatures.structs || ($bedalton$creatures.structs = {});
    var $bedalton = _.bedalton || (_.bedalton = {});
    var $bedalton$creatures = $bedalton.creatures || ($bedalton.creatures = {});
    var $bedalton$creatures$structs = $bedalton$creatures.structs || ($bedalton$creatures.structs = {});
    var $bedalton = _.bedalton || (_.bedalton = {});
    var $bedalton$creatures = $bedalton.creatures || ($bedalton.creatures = {});
    var $bedalton$creatures$util = $bedalton$creatures.util || ($bedalton$creatures.util = {});
  }
  $jsExportAll$(_);
  _.$jsExportAll$ = $jsExportAll$;
  _.$crossModule$ = _.$crossModule$ || {};
  _.$crossModule$.ensureNotEndsWith = ensureNotEndsWith;
  _.$crossModule$.nullIfEmpty = nullIfEmpty;
  _.$crossModule$.superUnescape = superUnescape;
  _.$crossModule$.LogLevel_ERROR_getInstance = LogLevel_ERROR_getInstance;
  _.$crossModule$.LogLevel_LOG_1_getInstance = LogLevel_LOG_1_getInstance;
  _.$crossModule$.Companion_getInstance = Companion_getInstance_0;
  _.$crossModule$.DefaultLoggerObject_getInstance = DefaultLoggerObject_getInstance;
  _.$crossModule$.FileNameUtil_getInstance = FileNameUtil_getInstance;
  _.$crossModule$.Log_getInstance = Log_getInstance;
  //endregion
  return _;
}));

//# sourceMappingURL=kotlin_bedalton_creatures_CommonCore.js.map