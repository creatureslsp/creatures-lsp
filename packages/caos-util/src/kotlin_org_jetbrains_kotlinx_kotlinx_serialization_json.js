(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin_kotlin.js', './kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin_kotlin.js'), require('./kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.js'));
  else {
    if (typeof kotlin_kotlin === 'undefined') {
      throw new Error("Error loading module 'kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json'. Its dependency 'kotlin_kotlin' was not found. Please, check whether 'kotlin_kotlin' is loaded prior to 'kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json'.");
    }
    if (typeof kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core === 'undefined') {
      throw new Error("Error loading module 'kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json'. Its dependency 'kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core' was not found. Please, check whether 'kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core' is loaded prior to 'kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json'.");
    }
    root.kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json = factory(typeof kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json === 'undefined' ? {} : kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json, kotlin_kotlin, kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core);
  }
}(this, function (_, kotlin_kotlin, kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core) {
  //region block: imports
  var imul = Math.imul;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$crossModule$.StringBuilder_init_$Create$;
  var fillArrayVal = kotlin_kotlin.$crossModule$.fillArrayVal;
  var Unit_getInstance = kotlin_kotlin.$crossModule$.Unit_getInstance;
  var toString = kotlin_kotlin.$crossModule$.toString_1;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$crossModule$.IllegalStateException_init_$Create$_1;
  var StringFormat = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$crossModule$.StringFormat;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$crossModule$.IllegalArgumentException_init_$Create$_1;
  var charSequenceGet = kotlin_kotlin.$crossModule$.charSequenceGet;
  var Char = kotlin_kotlin.$crossModule$.Char;
  var _Char___init__impl__380027157 = kotlin_kotlin.$crossModule$._Char___init__impl__380027157;
  var equals = kotlin_kotlin.$crossModule$.equals;
  var _get_EmptySerializersModule__1292120011 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$crossModule$._get_EmptySerializersModule__1292120011;
  var Decoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$crossModule$.Decoder;
  var CompositeDecoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$crossModule$.CompositeDecoder;
  var THROW_CCE = kotlin_kotlin.$crossModule$.THROW_CCE;
  var hashCode = kotlin_kotlin.$crossModule$.hashCode;
  var joinToString$default = kotlin_kotlin.$crossModule$.joinToString$default_1;
  var Map = kotlin_kotlin.$crossModule$.Map;
  var List = kotlin_kotlin.$crossModule$.List;
  var getKClassFromExpression = kotlin_kotlin.$crossModule$.getKClassFromExpression;
  var getStringHashCode = kotlin_kotlin.$crossModule$.getStringHashCode;
  var toInt = kotlin_kotlin.$crossModule$.toInt;
  var toLong = kotlin_kotlin.$crossModule$.toLong_1;
  var toDouble = kotlin_kotlin.$crossModule$.toDouble;
  var toLongOrNull = kotlin_kotlin.$crossModule$.toLongOrNull;
  var toDoubleOrNull = kotlin_kotlin.$crossModule$.toDoubleOrNull;
  var SEALED_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$crossModule$.SEALED_getInstance;
  var buildSerialDescriptor$default = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$crossModule$.buildSerialDescriptor$default;
  var noWhenBranchMatchedException = kotlin_kotlin.$crossModule$.noWhenBranchMatchedException;
  var KSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$crossModule$.KSerializer;
  var HashMap = kotlin_kotlin.$crossModule$.HashMap;
  var getKClass = kotlin_kotlin.$crossModule$.getKClass;
  var PrimitiveClasses_getInstance = kotlin_kotlin.$crossModule$.PrimitiveClasses_getInstance;
  var arrayOf = kotlin_kotlin.$crossModule$.arrayOf;
  var createKType = kotlin_kotlin.$crossModule$.createKType;
  var createInvariantKTypeProjection = kotlin_kotlin.$crossModule$.createInvariantKTypeProjection;
  var serializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$crossModule$.serializer_1;
  var isInterface = kotlin_kotlin.$crossModule$.isInterface;
  var SerialDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$crossModule$.SerialDescriptor;
  var StringCompanionObject_getInstance = kotlin_kotlin.$crossModule$.StringCompanionObject_getInstance;
  var serializer_0 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$crossModule$.serializer;
  var MapSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$crossModule$.MapSerializer;
  var ListSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$crossModule$.ListSerializer;
  var STRING_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$crossModule$.STRING_getInstance;
  var ENUM_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$crossModule$.ENUM_getInstance;
  var PrimitiveSerialDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$crossModule$.PrimitiveSerialDescriptor;
  var lazy = kotlin_kotlin.$crossModule$.lazy;
  var _get_annotations__1905959661 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$crossModule$._get_annotations__1905959661;
  var _get_isNullable__336674624 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$crossModule$._get_isNullable__336674624;
  var KProperty1 = kotlin_kotlin.$crossModule$.KProperty1;
  var getPropertyCallableRef = kotlin_kotlin.$crossModule$.getPropertyCallableRef;
  var Encoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$crossModule$.Encoder;
  var CompositeEncoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$crossModule$.CompositeEncoder;
  var captureStack = kotlin_kotlin.$crossModule$.captureStack;
  var SerializationException = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$crossModule$.SerializationException;
  var SerializationException_init_$Init$ = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$crossModule$.SerializationException_init_$Init$;
  var coerceAtLeast = kotlin_kotlin.$crossModule$.coerceAtLeast;
  var coerceAtMost = kotlin_kotlin.$crossModule$.coerceAtMost;
  var numberToChar = kotlin_kotlin.$crossModule$.numberToChar;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$crossModule$.LinkedHashMap_init_$Create$_1;
  var ArrayList_init_$Create$ = kotlin_kotlin.$crossModule$.ArrayList_init_$Create$_1;
  var Char__toInt_impl_2402388783 = kotlin_kotlin.$crossModule$.Char__toInt_impl_2402388783;
  var concatToString = kotlin_kotlin.$crossModule$.concatToString;
  var copyOf = kotlin_kotlin.$crossModule$.copyOf_4;
  var charArray = kotlin_kotlin.$crossModule$.charArray;
  var last = kotlin_kotlin.$crossModule$.last;
  var AbstractPolymorphicSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$crossModule$.AbstractPolymorphicSerializer;
  var SerializationStrategy = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$crossModule$.SerializationStrategy;
  var isObject = kotlin_kotlin.$crossModule$.isObject;
  var DeserializationStrategy = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$crossModule$.DeserializationStrategy;
  var findPolymorphicSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$crossModule$.findPolymorphicSerializer;
  var SealedClassSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$crossModule$.SealedClassSerializer;
  var jsonCachedSerialNames = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$crossModule$.jsonCachedSerialNames;
  var ENUM = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$crossModule$.ENUM;
  var PrimitiveKind = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$crossModule$.PrimitiveKind;
  var PolymorphicKind = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$crossModule$.PolymorphicKind;
  var CONTEXTUAL_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$crossModule$.CONTEXTUAL_getInstance;
  var MAP_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$crossModule$.MAP_getInstance;
  var LIST_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$crossModule$.LIST_getInstance;
  var SerializersModuleCollector = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$crossModule$.SerializersModuleCollector;
  var Companion_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$crossModule$.Companion_getInstance;
  var AbstractDecoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$crossModule$.AbstractDecoder;
  var toByte = kotlin_kotlin.$crossModule$.toByte_1;
  var toShort = kotlin_kotlin.$crossModule$.toShort_1;
  var isFinite = kotlin_kotlin.$crossModule$.isFinite_1;
  var isFinite_0 = kotlin_kotlin.$crossModule$.isFinite;
  var single = kotlin_kotlin.$crossModule$.single;
  var decodeNullableSerializableValue = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$crossModule$.decodeNullableSerializableValue;
  var decodeSequentially = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$crossModule$.decodeSequentially;
  var decodeCollectionSize = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$crossModule$.decodeCollectionSize;
  var decodeSerializableElement$default = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$crossModule$.decodeSerializableElement$default;
  var decodeSerializableElement = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$crossModule$.decodeSerializableElement;
  var decodeNullableSerializableElement$default = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$crossModule$.decodeNullableSerializableElement$default;
  var decodeNullableSerializableElement = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$crossModule$.decodeNullableSerializableElement;
  var AbstractEncoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$crossModule$.AbstractEncoder;
  var toString_0 = kotlin_kotlin.$crossModule$.toString;
  var encodeNotNullMark = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$crossModule$.encodeNotNullMark;
  var beginCollection = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$crossModule$.beginCollection;
  var encodeNullableSerializableValue = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$crossModule$.encodeNullableSerializableValue;
  var equals_0 = kotlin_kotlin.$crossModule$.equals_1;
  var SerializationException_init_$Create$ = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$crossModule$.SerializationException_init_$Create$;
  var NamedValueDecoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$crossModule$.NamedValueDecoder;
  var toByte_0 = kotlin_kotlin.$crossModule$.toByte;
  var toShort_0 = kotlin_kotlin.$crossModule$.toShort;
  var getValue = kotlin_kotlin.$crossModule$.getValue;
  var toList = kotlin_kotlin.$crossModule$.toList;
  var throwUninitializedPropertyAccessException = kotlin_kotlin.$crossModule$.throwUninitializedPropertyAccessException;
  var NamedValueEncoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$crossModule$.NamedValueEncoder;
  var THROW_ISE = kotlin_kotlin.$crossModule$.THROW_ISE;
  var Enum = kotlin_kotlin.$crossModule$.Enum;
  //endregion
  'use strict';
  //region block: pre-declaration
  Default.prototype = Object.create(Json.prototype);
  Default.prototype.constructor = Default;
  JsonImpl.prototype = Object.create(Json.prototype);
  JsonImpl.prototype.constructor = JsonImpl;
  JsonObject.prototype = Object.create(JsonElement.prototype);
  JsonObject.prototype.constructor = JsonObject;
  JsonPrimitive.prototype = Object.create(JsonElement.prototype);
  JsonPrimitive.prototype.constructor = JsonPrimitive;
  JsonNull.prototype = Object.create(JsonPrimitive.prototype);
  JsonNull.prototype.constructor = JsonNull;
  JsonArray.prototype = Object.create(JsonElement.prototype);
  JsonArray.prototype.constructor = JsonArray;
  JsonLiteral.prototype = Object.create(JsonPrimitive.prototype);
  JsonLiteral.prototype.constructor = JsonLiteral;
  JsonException.prototype = Object.create(SerializationException.prototype);
  JsonException.prototype.constructor = JsonException;
  JsonEncodingException.prototype = Object.create(JsonException.prototype);
  JsonEncodingException.prototype.constructor = JsonEncodingException;
  JsonDecodingException.prototype = Object.create(JsonException.prototype);
  JsonDecodingException.prototype.constructor = JsonDecodingException;
  StreamingJsonDecoder.prototype = Object.create(AbstractDecoder.prototype);
  StreamingJsonDecoder.prototype.constructor = StreamingJsonDecoder;
  StreamingJsonEncoder.prototype = Object.create(AbstractEncoder.prototype);
  StreamingJsonEncoder.prototype.constructor = StreamingJsonEncoder;
  AbstractJsonTreeDecoder.prototype = Object.create(NamedValueDecoder.prototype);
  AbstractJsonTreeDecoder.prototype.constructor = AbstractJsonTreeDecoder;
  JsonTreeDecoder.prototype = Object.create(AbstractJsonTreeDecoder.prototype);
  JsonTreeDecoder.prototype.constructor = JsonTreeDecoder;
  JsonTreeListDecoder.prototype = Object.create(AbstractJsonTreeDecoder.prototype);
  JsonTreeListDecoder.prototype.constructor = JsonTreeListDecoder;
  JsonPrimitiveDecoder.prototype = Object.create(AbstractJsonTreeDecoder.prototype);
  JsonPrimitiveDecoder.prototype.constructor = JsonPrimitiveDecoder;
  JsonTreeMapDecoder.prototype = Object.create(JsonTreeDecoder.prototype);
  JsonTreeMapDecoder.prototype.constructor = JsonTreeMapDecoder;
  AbstractJsonTreeEncoder.prototype = Object.create(NamedValueEncoder.prototype);
  AbstractJsonTreeEncoder.prototype.constructor = AbstractJsonTreeEncoder;
  JsonTreeEncoder.prototype = Object.create(AbstractJsonTreeEncoder.prototype);
  JsonTreeEncoder.prototype.constructor = JsonTreeEncoder;
  JsonPrimitiveEncoder.prototype = Object.create(AbstractJsonTreeEncoder.prototype);
  JsonPrimitiveEncoder.prototype.constructor = JsonPrimitiveEncoder;
  JsonTreeListEncoder.prototype = Object.create(AbstractJsonTreeEncoder.prototype);
  JsonTreeListEncoder.prototype.constructor = JsonTreeListEncoder;
  JsonTreeMapEncoder.prototype = Object.create(JsonTreeEncoder.prototype);
  JsonTreeMapEncoder.prototype.constructor = JsonTreeMapEncoder;
  WriteMode.prototype = Object.create(Enum.prototype);
  WriteMode.prototype.constructor = WriteMode;
  //endregion
  function Default() {
    Default_instance = this;
    Json.call(this, JsonConf_init_$Create$(false, false, false, false, false, null, false, false, null, false, null, 2047, null));
  }
  Default.$metadata$ = {
    simpleName: 'Default',
    kind: 'object',
    interfaces: []
  };
  var Default_instance;
  function Default_getInstance() {
    if (Default_instance == null)
      new Default();
    return Default_instance;
  }
  function Json(configuration) {
    Default_getInstance();
    this.configuration_1 = configuration;
  }
  Json.prototype._get_configuration__311089819_557qfv_k$ = function () {
    return this.configuration_1;
  };
  Json.prototype._get_serializersModule__364239364_60uww4_k$ = function () {
    return this.configuration_1._get_serializersModule__364239364_60uww4_k$();
  };
  Json.prototype.encodeToString_pl8vu2_k$ = function (serializer, value) {
    var result = StringBuilder_init_$Create$();
    var tmp = WriteMode_OBJ_getInstance();
    var tmp$ret$0;
    $l$block: {
      var tmp0_arrayOfNulls_0 = values().length;
      tmp$ret$0 = fillArrayVal(Array(tmp0_arrayOfNulls_0), null);
      break $l$block;
    }
    var encoder = StreamingJsonEncoder_init_$Create$(result, this, tmp, tmp$ret$0);
    encoder.encodeSerializableValue_bps9ot_k$(serializer, value);
    return result.toString();
  };
  Json.prototype.decodeFromString_ink0ik_k$ = function (deserializer, string) {
    var reader = new JsonReader(string);
    var input = new StreamingJsonDecoder(this, WriteMode_OBJ_getInstance(), reader);
    var result = input.decodeSerializableValue_xpp80o_k$(deserializer);
    if (!reader._get_isDone__47544511_sb1kv_k$()) {
      {
        var tmp0_error_0 = 'Reader has not consumed the whole input: ' + reader;
        throw IllegalStateException_init_$Create$(toString(tmp0_error_0));
      }
    }
    return result;
  };
  Json.prototype.encodeToJsonElement_cdthrp_k$ = function (serializer, value) {
    return writeJson(this, value, serializer);
  };
  Json.prototype.decodeFromJsonElement_96mzou_k$ = function (deserializer, element) {
    return readJson(this, element, deserializer);
  };
  Json.prototype.parseToJsonElement_lw2h4r_k$ = function (string) {
    return this.decodeFromString_ink0ik_k$(JsonElementSerializer_getInstance(), string);
  };
  Json.$metadata$ = {
    simpleName: 'Json',
    kind: 'class',
    interfaces: [StringFormat]
  };
  function Json_0(from, builderAction) {
    var builder = new JsonBuilder(from.configuration_1);
    builderAction(builder);
    var conf = builder.build_1k0s4u_k$();
    return new JsonImpl(conf);
  }
  function Json$default(from, builderAction, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      from = Default_getInstance();
    return Json_0(from, builderAction);
  }
  function JsonBuilder(conf) {
    this.encodeDefaults_1 = conf._get_encodeDefaults__2255426691_xqaflp_k$();
    this.ignoreUnknownKeys_1 = conf._get_ignoreUnknownKeys__4153108645_2cgiu3_k$();
    this.isLenient_1 = conf._get_isLenient__4131730692_2p6q64_k$();
    this.allowStructuredMapKeys_1 = conf._get_allowStructuredMapKeys__141016373_2bygxh_k$();
    this.prettyPrint_1 = conf._get_prettyPrint__1073381530_hr2ahm_k$();
    this.prettyPrintIndent_1 = conf._get_prettyPrintIndent__3554969678_c8kpte_k$();
    this.coerceInputValues_1 = conf._get_coerceInputValues__1564306208_pvcie8_k$();
    this.useArrayPolymorphism_1 = conf._get_useArrayPolymorphism__4259793650_kxw5q_k$();
    this.classDiscriminator_1 = conf._get_classDiscriminator__1173799943_jeultz_k$();
    this.allowSpecialFloatingPointValues_1 = conf._get_allowSpecialFloatingPointValues__1768724981_t91wxh_k$();
    this.serializersModule_1 = conf._get_serializersModule__364239364_60uww4_k$();
  }
  JsonBuilder.prototype._set_encodeDefaults__711698831_cx9vgm_k$ = function (_set____804775014) {
    this.encodeDefaults_1 = _set____804775014;
  };
  JsonBuilder.prototype._get_encodeDefaults__2255426691_xqaflp_k$ = function () {
    return this.encodeDefaults_1;
  };
  JsonBuilder.prototype._set_ignoreUnknownKeys__1171269657_vwghbk_k$ = function (_set____804775014) {
    this.ignoreUnknownKeys_1 = _set____804775014;
  };
  JsonBuilder.prototype._get_ignoreUnknownKeys__4153108645_2cgiu3_k$ = function () {
    return this.ignoreUnknownKeys_1;
  };
  JsonBuilder.prototype._set_isLenient__2359994488_y1rek1_k$ = function (_set____804775014) {
    this.isLenient_1 = _set____804775014;
  };
  JsonBuilder.prototype._get_isLenient__4131730692_2p6q64_k$ = function () {
    return this.isLenient_1;
  };
  JsonBuilder.prototype._set_allowStructuredMapKeys__3090449985_lcd8c8_k$ = function (_set____804775014) {
    this.allowStructuredMapKeys_1 = _set____804775014;
  };
  JsonBuilder.prototype._get_allowStructuredMapKeys__141016373_2bygxh_k$ = function () {
    return this.allowStructuredMapKeys_1;
  };
  JsonBuilder.prototype._set_prettyPrint__3536905998_tucie3_k$ = function (_set____804775014) {
    this.prettyPrint_1 = _set____804775014;
  };
  JsonBuilder.prototype._get_prettyPrint__1073381530_hr2ahm_k$ = function () {
    return this.prettyPrint_1;
  };
  JsonBuilder.prototype._set_prettyPrintIndent__573130690_296hxs_k$ = function (_set____804775014) {
    this.prettyPrintIndent_1 = _set____804775014;
  };
  JsonBuilder.prototype._get_prettyPrintIndent__3554969678_c8kpte_k$ = function () {
    return this.prettyPrintIndent_1;
  };
  JsonBuilder.prototype._set_coerceInputValues__2877434516_orvlm3_k$ = function (_set____804775014) {
    this.coerceInputValues_1 = _set____804775014;
  };
  JsonBuilder.prototype._get_coerceInputValues__1564306208_pvcie8_k$ = function () {
    return this.coerceInputValues_1;
  };
  JsonBuilder.prototype._set_useArrayPolymorphism__808118014_qmb1uz_k$ = function (_set____804775014) {
    this.useArrayPolymorphism_1 = _set____804775014;
  };
  JsonBuilder.prototype._get_useArrayPolymorphism__4259793650_kxw5q_k$ = function () {
    return this.useArrayPolymorphism_1;
  };
  JsonBuilder.prototype._set_classDiscriminator__3226071827_fxi1q9_k$ = function (_set____804775014) {
    this.classDiscriminator_1 = _set____804775014;
  };
  JsonBuilder.prototype._get_classDiscriminator__1173799943_jeultz_k$ = function () {
    return this.classDiscriminator_1;
  };
  JsonBuilder.prototype._set_allowSpecialFloatingPointValues__3697491561_z4i4io_k$ = function (_set____804775014) {
    this.allowSpecialFloatingPointValues_1 = _set____804775014;
  };
  JsonBuilder.prototype._get_allowSpecialFloatingPointValues__1768724981_t91wxh_k$ = function () {
    return this.allowSpecialFloatingPointValues_1;
  };
  JsonBuilder.prototype._set_serializersModule__1677367672_myj7pj_k$ = function (_set____804775014) {
    this.serializersModule_1 = _set____804775014;
  };
  JsonBuilder.prototype._get_serializersModule__364239364_60uww4_k$ = function () {
    return this.serializersModule_1;
  };
  JsonBuilder.prototype.build_1k0s4u_k$ = function () {
    if (this.useArrayPolymorphism_1) {
      var tmp0_require_0 = this.classDiscriminator_1 === 'type';
      {
      }
      if (!tmp0_require_0) {
        var tmp$ret$0;
        $l$block: {
          tmp$ret$0 = 'Class discriminator should not be specified when array polymorphism is specified';
          break $l$block;
        }
        var message_1 = tmp$ret$0;
        throw IllegalArgumentException_init_$Create$(toString(message_1));
      }
    }
    if (!this.prettyPrint_1) {
      {
        var tmp1_require_0 = this.prettyPrintIndent_1 === '    ';
        {
        }
        if (!tmp1_require_0) {
          var tmp$ret$1;
          $l$block_0: {
            tmp$ret$1 = 'Indent should not be specified when default printing mode is used';
            break $l$block_0;
          }
          var message_1_0 = tmp$ret$1;
          throw IllegalArgumentException_init_$Create$(toString(message_1_0));
        }
      }
    } else if (!(this.prettyPrintIndent_1 === '    ')) {
      var tmp$ret$3;
      $l$block_3: {
        var tmp2_all_0 = this.prettyPrintIndent_1;
        var indexedObject = tmp2_all_0;
        var inductionVariable = 0;
        var last = indexedObject.length;
        while (inductionVariable < last) {
          var element_2 = charSequenceGet(indexedObject, inductionVariable);
          inductionVariable = inductionVariable + 1 | 0;
          var tmp$ret$2;
          $l$block_1: {
            tmp$ret$2 = ((equals(new Char(element_2), new Char(_Char___init__impl__380027157(32))) ? true : equals(new Char(element_2), new Char(_Char___init__impl__380027157(9)))) ? true : equals(new Char(element_2), new Char(_Char___init__impl__380027157(13)))) ? true : equals(new Char(element_2), new Char(_Char___init__impl__380027157(10)));
            break $l$block_1;
          }
          if (!tmp$ret$2) {
            tmp$ret$3 = false;
            break $l$block_3;
          } else {
          }
        }
        tmp$ret$3 = true;
        break $l$block_3;
      }
      var allWhitespaces = tmp$ret$3;
      {
        {
        }
        if (!allWhitespaces) {
          var tmp$ret$4;
          $l$block_4: {
            tmp$ret$4 = 'Only whitespace, tab, newline and carriage return are allowed as pretty print symbols. Had ' + this.prettyPrintIndent_1;
            break $l$block_4;
          }
          var message_1_1 = tmp$ret$4;
          throw IllegalArgumentException_init_$Create$(toString(message_1_1));
        }
      }
    }
    return new JsonConf(this.encodeDefaults_1, this.ignoreUnknownKeys_1, this.isLenient_1, this.allowStructuredMapKeys_1, this.prettyPrint_1, this.prettyPrintIndent_1, this.coerceInputValues_1, this.useArrayPolymorphism_1, this.classDiscriminator_1, this.allowSpecialFloatingPointValues_1, this.serializersModule_1);
  };
  JsonBuilder.$metadata$ = {
    simpleName: 'JsonBuilder',
    kind: 'class',
    interfaces: []
  };
  function validateConfiguration($this) {
    if (equals($this._get_serializersModule__364239364_60uww4_k$(), _get_EmptySerializersModule__1292120011()))
      return Unit_getInstance();
    var collector = new PolymorphismValidator($this._get_configuration__311089819_557qfv_k$()._get_useArrayPolymorphism__4259793650_kxw5q_k$(), $this._get_configuration__311089819_557qfv_k$()._get_classDiscriminator__1173799943_jeultz_k$());
    $this._get_serializersModule__364239364_60uww4_k$().dumpTo_q6va1n_k$(collector);
  }
  function JsonImpl(configuration) {
    Json.call(this, configuration);
    validateConfiguration(this);
  }
  JsonImpl.$metadata$ = {
    simpleName: 'JsonImpl',
    kind: 'class',
    interfaces: []
  };
  function _get_defaultDiscriminator__3968777680() {
    return defaultDiscriminator;
  }
  var defaultDiscriminator;
  function _get_defaultIndent__177749028() {
    return defaultIndent;
  }
  var defaultIndent;
  function JsonDecoder() {
  }
  JsonDecoder.$metadata$ = {
    simpleName: 'JsonDecoder',
    kind: 'interface',
    interfaces: [Decoder, CompositeDecoder]
  };
  function Companion() {
    Companion_instance = this;
  }
  Companion.prototype.serializer_9w0wvi_k$ = function () {
    return JsonElementSerializer_getInstance();
  };
  Companion.$metadata$ = {
    simpleName: 'Companion',
    kind: 'object',
    interfaces: []
  };
  var Companion_instance;
  function Companion_getInstance_0() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function JsonElement() {
    Companion_getInstance_0();
  }
  JsonElement.$metadata$ = {
    simpleName: 'JsonElement',
    kind: 'class',
    interfaces: [],
    associatedObjects: {0: JsonElementSerializer_getInstance}
  };
  function _get_content__1558689208($this) {
    return $this.content_1;
  }
  function Companion_0() {
    Companion_instance_0 = this;
  }
  Companion_0.prototype.serializer_9w0wvi_k$ = function () {
    return JsonObjectSerializer_getInstance();
  };
  Companion_0.$metadata$ = {
    simpleName: 'Companion',
    kind: 'object',
    interfaces: []
  };
  var Companion_instance_0;
  function Companion_getInstance_1() {
    if (Companion_instance_0 == null)
      new Companion_0();
    return Companion_instance_0;
  }
  function JsonObject$toString$lambda() {
    return function (_name_for_destructuring_parameter_0__1970834502) {
      var tmp$ret$0;
      $l$block: {
        tmp$ret$0 = _name_for_destructuring_parameter_0__1970834502._get_key__857139730_e6bh8y_k$();
        break $l$block;
      }
      var k = tmp$ret$0;
      Unit_getInstance();
      var tmp$ret$1;
      $l$block_0: {
        tmp$ret$1 = _name_for_destructuring_parameter_0__1970834502._get_value__3683422336_a43j40_k$();
        break $l$block_0;
      }
      var v = tmp$ret$1;
      Unit_getInstance();
      return '"' + k + '":' + v;
    };
  }
  function JsonObject(content) {
    Companion_getInstance_1();
    JsonElement.call(this);
    this.content_1 = content;
  }
  JsonObject.prototype.containsKey_mw51tt_k$ = function (key) {
    return this.content_1.containsKey_wgk31w_k$(key);
  };
  JsonObject.prototype.containsKey_wgk31w_k$ = function (key) {
    if (!(!(key == null) ? typeof key === 'string' : false))
      return false;
    else {
    }
    return this.containsKey_mw51tt_k$((!(key == null) ? typeof key === 'string' : false) ? key : THROW_CCE());
  };
  JsonObject.prototype.containsValue_eu7wk0_k$ = function (value) {
    return this.content_1.containsValue_5viga1_k$(value);
  };
  JsonObject.prototype.containsValue_5viga1_k$ = function (value) {
    if (!(value instanceof JsonElement))
      return false;
    else {
    }
    return this.containsValue_eu7wk0_k$(value instanceof JsonElement ? value : THROW_CCE());
  };
  JsonObject.prototype.get_4u8u51_k$ = function (key) {
    return this.content_1.get_1mhr4y_k$(key);
  };
  JsonObject.prototype.get_1mhr4y_k$ = function (key) {
    if (!(!(key == null) ? typeof key === 'string' : false))
      return null;
    else {
    }
    return this.get_4u8u51_k$((!(key == null) ? typeof key === 'string' : false) ? key : THROW_CCE());
  };
  JsonObject.prototype.isEmpty_y1axqb_k$ = function () {
    return this.content_1.isEmpty_y1axqb_k$();
  };
  JsonObject.prototype._get_entries__31877249_iz8n5_k$ = function () {
    return this.content_1._get_entries__31877249_iz8n5_k$();
  };
  JsonObject.prototype._get_keys__801529559_d97k5z_k$ = function () {
    return this.content_1._get_keys__801529559_d97k5z_k$();
  };
  JsonObject.prototype._get_size__809037418_ddoh9m_k$ = function () {
    return this.content_1._get_size__809037418_ddoh9m_k$();
  };
  JsonObject.prototype._get_values__2516944425_tel787_k$ = function () {
    return this.content_1._get_values__2516944425_tel787_k$();
  };
  JsonObject.prototype.equals = function (other) {
    return equals(this.content_1, other);
  };
  JsonObject.prototype.hashCode = function () {
    return hashCode(this.content_1);
  };
  JsonObject.prototype.toString = function () {
    var tmp = this.content_1._get_entries__31877249_iz8n5_k$();
    return joinToString$default(tmp, ',', '{', '}', 0, null, JsonObject$toString$lambda(), 24, null);
  };
  JsonObject.$metadata$ = {
    simpleName: 'JsonObject',
    kind: 'class',
    interfaces: [Map],
    associatedObjects: {0: JsonObjectSerializer_getInstance}
  };
  function JsonNull() {
    JsonNull_instance = this;
    JsonPrimitive.call(this);
    this.content_1 = 'null';
  }
  JsonNull.prototype._get_isString__3315263824_g7ag1c_k$ = function () {
    return false;
  };
  JsonNull.prototype._get_content__1558689208_ps04ag_k$ = function () {
    return this.content_1;
  };
  JsonNull.$metadata$ = {
    simpleName: 'JsonNull',
    kind: 'object',
    interfaces: []
  };
  var JsonNull_instance;
  function JsonNull_getInstance() {
    if (JsonNull_instance == null)
      new JsonNull();
    return JsonNull_instance;
  }
  function Companion_1() {
    Companion_instance_1 = this;
  }
  Companion_1.prototype.serializer_9w0wvi_k$ = function () {
    return JsonPrimitiveSerializer_getInstance();
  };
  Companion_1.$metadata$ = {
    simpleName: 'Companion',
    kind: 'object',
    interfaces: []
  };
  var Companion_instance_1;
  function Companion_getInstance_2() {
    if (Companion_instance_1 == null)
      new Companion_1();
    return Companion_instance_1;
  }
  function JsonPrimitive() {
    Companion_getInstance_2();
    JsonElement.call(this);
  }
  JsonPrimitive.prototype.toString = function () {
    return this._get_content__1558689208_ps04ag_k$();
  };
  JsonPrimitive.$metadata$ = {
    simpleName: 'JsonPrimitive',
    kind: 'class',
    interfaces: [],
    associatedObjects: {0: JsonPrimitiveSerializer_getInstance}
  };
  function JsonPrimitive_0(value) {
    if (value == null)
      return JsonNull_getInstance();
    return new JsonLiteral(value, false);
  }
  function JsonPrimitive_1(value) {
    if (value == null)
      return JsonNull_getInstance();
    return new JsonLiteral(value, false);
  }
  function JsonPrimitive_2(value) {
    if (value == null)
      return JsonNull_getInstance();
    return new JsonLiteral(value, true);
  }
  function _get_content__1558689208_0($this) {
    return $this.content_1;
  }
  function Companion_2() {
    Companion_instance_2 = this;
  }
  Companion_2.prototype.serializer_9w0wvi_k$ = function () {
    return JsonArraySerializer_getInstance();
  };
  Companion_2.$metadata$ = {
    simpleName: 'Companion',
    kind: 'object',
    interfaces: []
  };
  var Companion_instance_2;
  function Companion_getInstance_3() {
    if (Companion_instance_2 == null)
      new Companion_2();
    return Companion_instance_2;
  }
  function JsonArray(content) {
    Companion_getInstance_3();
    JsonElement.call(this);
    this.content_1 = content;
  }
  JsonArray.prototype.contains_kpaesj_k$ = function (element) {
    return this.content_1.contains_2ehdt1_k$(element);
  };
  JsonArray.prototype.contains_2ehdt1_k$ = function (element) {
    if (!(element instanceof JsonElement))
      return false;
    else {
    }
    return this.contains_kpaesj_k$(element instanceof JsonElement ? element : THROW_CCE());
  };
  JsonArray.prototype.containsAll_o6wx2e_k$ = function (elements) {
    return this.content_1.containsAll_jr3fla_k$(elements);
  };
  JsonArray.prototype.containsAll_jr3fla_k$ = function (elements) {
    return this.containsAll_o6wx2e_k$(elements);
  };
  JsonArray.prototype.get_fkrdnv_k$ = function (index) {
    return this.content_1.get_fkrdnv_k$(index);
  };
  JsonArray.prototype.indexOf_7jcirr_k$ = function (element) {
    return this.content_1.indexOf_dcv8dt_k$(element);
  };
  JsonArray.prototype.indexOf_dcv8dt_k$ = function (element) {
    if (!(element instanceof JsonElement))
      return -1;
    else {
    }
    return this.indexOf_7jcirr_k$(element instanceof JsonElement ? element : THROW_CCE());
  };
  JsonArray.prototype.isEmpty_y1axqb_k$ = function () {
    return this.content_1.isEmpty_y1axqb_k$();
  };
  JsonArray.prototype.iterator_jk1svi_k$ = function () {
    return this.content_1.iterator_jk1svi_k$();
  };
  JsonArray.prototype.lastIndexOf_mrbxe9_k$ = function (element) {
    return this.content_1.lastIndexOf_rzx8t5_k$(element);
  };
  JsonArray.prototype.lastIndexOf_rzx8t5_k$ = function (element) {
    if (!(element instanceof JsonElement))
      return -1;
    else {
    }
    return this.lastIndexOf_mrbxe9_k$(element instanceof JsonElement ? element : THROW_CCE());
  };
  JsonArray.prototype.listIterator_xjshxw_k$ = function () {
    return this.content_1.listIterator_xjshxw_k$();
  };
  JsonArray.prototype.listIterator_5hanv9_k$ = function (index) {
    return this.content_1.listIterator_5hanv9_k$(index);
  };
  JsonArray.prototype.subList_d153ha_k$ = function (fromIndex, toIndex) {
    return this.content_1.subList_d153ha_k$(fromIndex, toIndex);
  };
  JsonArray.prototype._get_size__809037418_ddoh9m_k$ = function () {
    return this.content_1._get_size__809037418_ddoh9m_k$();
  };
  JsonArray.prototype.equals = function (other) {
    return equals(this.content_1, other);
  };
  JsonArray.prototype.hashCode = function () {
    return hashCode(this.content_1);
  };
  JsonArray.prototype.toString = function () {
    return joinToString$default(this.content_1, ',', '[', ']', 0, null, null, 56, null);
  };
  JsonArray.$metadata$ = {
    simpleName: 'JsonArray',
    kind: 'class',
    interfaces: [List],
    associatedObjects: {0: JsonArraySerializer_getInstance}
  };
  function JsonLiteral(body, isString) {
    JsonPrimitive.call(this);
    this.isString_1 = isString;
    this.content_1 = toString(body);
  }
  JsonLiteral.prototype._get_isString__3315263824_g7ag1c_k$ = function () {
    return this.isString_1;
  };
  JsonLiteral.prototype._get_content__1558689208_ps04ag_k$ = function () {
    return this.content_1;
  };
  JsonLiteral.prototype.toString = function () {
    var tmp;
    if (this.isString_1) {
      var tmp$ret$1;
      $l$block_0: {
        {
        }
        var tmp$ret$0;
        $l$block: {
          var tmp0_apply_0_1 = StringBuilder_init_$Create$();
          {
          }
          {
            printQuoted(tmp0_apply_0_1, this.content_1);
          }
          tmp$ret$0 = tmp0_apply_0_1;
          break $l$block;
        }
        tmp$ret$1 = tmp$ret$0.toString();
        break $l$block_0;
      }
      tmp = tmp$ret$1;
    } else {
      tmp = this.content_1;
    }
    return tmp;
  };
  JsonLiteral.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (other == null ? true : !getKClassFromExpression(this).equals(getKClassFromExpression(other)))
      return false;
    if (other instanceof JsonLiteral)
      other;
    else
      THROW_CCE();
    Unit_getInstance();
    if (!(this.isString_1 === other.isString_1))
      return false;
    if (!(this.content_1 === other.content_1))
      return false;
    return true;
  };
  JsonLiteral.prototype.hashCode = function () {
    var result = this.isString_1 | 0;
    result = imul(31, result) + getStringHashCode(this.content_1) | 0;
    return result;
  };
  JsonLiteral.$metadata$ = {
    simpleName: 'JsonLiteral',
    kind: 'class',
    interfaces: []
  };
  function _get_boolean__4132074473(_this__1828080292) {
    return toBooleanStrict(_this__1828080292._get_content__1558689208_ps04ag_k$());
  }
  function _get_int__857088642(_this__1828080292) {
    return toInt(_this__1828080292._get_content__1558689208_ps04ag_k$());
  }
  function _get_long__802740047(_this__1828080292) {
    return toLong(_this__1828080292._get_content__1558689208_ps04ag_k$());
  }
  function _get_float__3235585269(_this__1828080292) {
    var tmp$ret$2;
    $l$block_1: {
      var tmp0_toFloat_0 = _this__1828080292._get_content__1558689208_ps04ag_k$();
      var tmp$ret$1;
      $l$block_0: {
        var tmp0_unsafeCast_0_1 = toDouble(tmp0_toFloat_0);
        var tmp$ret$0;
        $l$block: {
          tmp$ret$0 = tmp0_unsafeCast_0_1;
          break $l$block;
        }
        tmp$ret$1 = tmp$ret$0;
        break $l$block_0;
      }
      tmp$ret$2 = tmp$ret$1;
      break $l$block_1;
    }
    return tmp$ret$2;
  }
  function _get_double__4130307418(_this__1828080292) {
    return toDouble(_this__1828080292._get_content__1558689208_ps04ag_k$());
  }
  function _get_contentOrNull__3948604750(_this__1828080292) {
    var tmp;
    if (_this__1828080292 instanceof JsonNull) {
      tmp = null;
    } else {
      {
        tmp = _this__1828080292._get_content__1558689208_ps04ag_k$();
      }
    }
    return tmp;
  }
  function _get_longOrNull__3875291557(_this__1828080292) {
    return toLongOrNull(_this__1828080292._get_content__1558689208_ps04ag_k$());
  }
  function _get_doubleOrNull__2770531184(_this__1828080292) {
    return toDoubleOrNull(_this__1828080292._get_content__1558689208_ps04ag_k$());
  }
  function _get_booleanOrNull__1934131903(_this__1828080292) {
    return toBooleanStrictOrNull(_this__1828080292._get_content__1558689208_ps04ag_k$());
  }
  function _get_jsonPrimitive__1390217170(_this__1828080292) {
    var tmp0_elvis_lhs = _this__1828080292 instanceof JsonPrimitive ? _this__1828080292 : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      error(_this__1828080292, 'JsonPrimitive');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function error(_this__1828080292, element) {
    throw IllegalArgumentException_init_$Create$('Element ' + getKClassFromExpression(_this__1828080292) + ' is not a ' + element);
  }
  function JsonElementSerializer$descriptor$lambda$lambda() {
    return function () {
      return JsonPrimitiveSerializer_getInstance().descriptor_1;
    };
  }
  function JsonElementSerializer$descriptor$lambda$lambda_0() {
    return function () {
      return JsonNullSerializer_getInstance().descriptor_1;
    };
  }
  function JsonElementSerializer$descriptor$lambda$lambda_1() {
    return function () {
      return JsonLiteralSerializer_getInstance().descriptor_1;
    };
  }
  function JsonElementSerializer$descriptor$lambda$lambda_2() {
    return function () {
      return JsonObjectSerializer_getInstance().descriptor_1;
    };
  }
  function JsonElementSerializer$descriptor$lambda$lambda_3() {
    return function () {
      return JsonArraySerializer_getInstance().descriptor_1;
    };
  }
  function JsonElementSerializer$descriptor$lambda() {
    return function (_this__1828080292) {
      var tmp = defer(JsonElementSerializer$descriptor$lambda$lambda());
      _this__1828080292.element$default_m7h690_k$('JsonPrimitive', tmp, null, false, 12, null);
      var tmp_0 = defer(JsonElementSerializer$descriptor$lambda$lambda_0());
      _this__1828080292.element$default_m7h690_k$('JsonNull', tmp_0, null, false, 12, null);
      var tmp_1 = defer(JsonElementSerializer$descriptor$lambda$lambda_1());
      _this__1828080292.element$default_m7h690_k$('JsonLiteral', tmp_1, null, false, 12, null);
      var tmp_2 = defer(JsonElementSerializer$descriptor$lambda$lambda_2());
      _this__1828080292.element$default_m7h690_k$('JsonObject', tmp_2, null, false, 12, null);
      var tmp_3 = defer(JsonElementSerializer$descriptor$lambda$lambda_3());
      _this__1828080292.element$default_m7h690_k$('JsonArray', tmp_3, null, false, 12, null);
      return Unit_getInstance();
    };
  }
  function JsonElementSerializer() {
    JsonElementSerializer_instance = this;
    var tmp = this;
    var tmp_0 = SEALED_getInstance();
    tmp.descriptor_1 = buildSerialDescriptor$default('kotlinx.serialization.json.JsonElement', tmp_0, [], JsonElementSerializer$descriptor$lambda(), 4, null);
  }
  JsonElementSerializer.prototype._get_descriptor__684124924_bbb664_k$ = function () {
    return this.descriptor_1;
  };
  JsonElementSerializer.prototype.serialize_j52v1g_k$ = function (encoder, value) {
    verify(encoder);
    var tmp0_subject = value;
    if (tmp0_subject instanceof JsonPrimitive)
      encoder.encodeSerializableValue_bps9ot_k$(JsonPrimitiveSerializer_getInstance(), value);
    else {
      if (tmp0_subject instanceof JsonObject)
        encoder.encodeSerializableValue_bps9ot_k$(JsonObjectSerializer_getInstance(), value);
      else {
        if (tmp0_subject instanceof JsonArray)
          encoder.encodeSerializableValue_bps9ot_k$(JsonArraySerializer_getInstance(), value);
        else {
          {
            noWhenBranchMatchedException();
          }
        }
      }
    }
  };
  JsonElementSerializer.prototype.serialize_32qylj_k$ = function (encoder, value) {
    return this.serialize_j52v1g_k$(encoder, value instanceof JsonElement ? value : THROW_CCE());
  };
  JsonElementSerializer.prototype.deserialize_2t41fm_k$ = function (decoder) {
    var input = asJsonDecoder(decoder);
    return input.decodeJsonElement_6lz9ye_k$();
  };
  JsonElementSerializer.$metadata$ = {
    simpleName: 'JsonElementSerializer',
    kind: 'object',
    interfaces: [KSerializer]
  };
  var JsonElementSerializer_instance;
  function JsonElementSerializer_getInstance() {
    if (JsonElementSerializer_instance == null)
      new JsonElementSerializer();
    return JsonElementSerializer_instance;
  }
  function JsonObjectDescriptor() {
    JsonObjectDescriptor_instance = this;
    var tmp = this;
    var tmp$ret$2;
    $l$block_1: {
      var tmp$ret$1;
      $l$block_0: {
        var tmp$ret$0;
        $l$block: {
          var tmp0_cast_0_1_1 = serializer(createKType(getKClass(HashMap), arrayOf([createInvariantKTypeProjection(createKType(PrimitiveClasses_getInstance()._get_stringClass__1269070474_kzkl1m_k$(), arrayOf([]), false)), createInvariantKTypeProjection(createKType(getKClass(JsonElement), arrayOf([]), false))]), false));
          tmp$ret$0 = isInterface(tmp0_cast_0_1_1, KSerializer) ? tmp0_cast_0_1_1 : THROW_CCE();
          break $l$block;
        }
        tmp$ret$1 = tmp$ret$0;
        break $l$block_0;
      }
      tmp$ret$2 = tmp$ret$1._get_descriptor__684124924_bbb664_k$();
      break $l$block_1;
    }
    tmp.$$delegate_0__1 = tmp$ret$2;
    this.serialName_1 = 'kotlinx.serialization.json.JsonObject';
  }
  JsonObjectDescriptor.prototype.getElementAnnotations_a57oar_k$ = function (index) {
    return this.$$delegate_0__1.getElementAnnotations_a57oar_k$(index);
  };
  JsonObjectDescriptor.prototype.getElementDescriptor_sqz94k_k$ = function (index) {
    return this.$$delegate_0__1.getElementDescriptor_sqz94k_k$(index);
  };
  JsonObjectDescriptor.prototype.getElementIndex_2hwbkl_k$ = function (name) {
    return this.$$delegate_0__1.getElementIndex_2hwbkl_k$(name);
  };
  JsonObjectDescriptor.prototype.getElementName_ykpypc_k$ = function (index) {
    return this.$$delegate_0__1.getElementName_ykpypc_k$(index);
  };
  JsonObjectDescriptor.prototype.isElementOptional_c3hgb3_k$ = function (index) {
    return this.$$delegate_0__1.isElementOptional_c3hgb3_k$(index);
  };
  JsonObjectDescriptor.prototype._get_annotations__1905959661_virbvx_k$ = function () {
    return this.$$delegate_0__1._get_annotations__1905959661_virbvx_k$();
  };
  JsonObjectDescriptor.prototype._get_elementsCount__2919979385_mqmrgn_k$ = function () {
    return this.$$delegate_0__1._get_elementsCount__2919979385_mqmrgn_k$();
  };
  JsonObjectDescriptor.prototype._get_isNullable__336674624_5kg3sw_k$ = function () {
    return this.$$delegate_0__1._get_isNullable__336674624_5kg3sw_k$();
  };
  JsonObjectDescriptor.prototype._get_kind__801637687_d99vlj_k$ = function () {
    return this.$$delegate_0__1._get_kind__801637687_d99vlj_k$();
  };
  JsonObjectDescriptor.prototype._get_serialName__1025298892_gyfpos_k$ = function () {
    return this.serialName_1;
  };
  JsonObjectDescriptor.$metadata$ = {
    simpleName: 'JsonObjectDescriptor',
    kind: 'object',
    interfaces: [SerialDescriptor]
  };
  var JsonObjectDescriptor_instance;
  function JsonObjectDescriptor_getInstance() {
    if (JsonObjectDescriptor_instance == null)
      new JsonObjectDescriptor();
    return JsonObjectDescriptor_instance;
  }
  function JsonObjectSerializer() {
    JsonObjectSerializer_instance = this;
    this.descriptor_1 = JsonObjectDescriptor_getInstance();
  }
  JsonObjectSerializer.prototype._get_descriptor__684124924_bbb664_k$ = function () {
    return this.descriptor_1;
  };
  JsonObjectSerializer.prototype.serialize_wwmfvn_k$ = function (encoder, value) {
    verify(encoder);
    MapSerializer(serializer_0(StringCompanionObject_getInstance()), JsonElementSerializer_getInstance()).serialize_32qylj_k$(encoder, value);
  };
  JsonObjectSerializer.prototype.serialize_32qylj_k$ = function (encoder, value) {
    return this.serialize_wwmfvn_k$(encoder, value instanceof JsonObject ? value : THROW_CCE());
  };
  JsonObjectSerializer.prototype.deserialize_2t41fm_k$ = function (decoder) {
    verify_0(decoder);
    return new JsonObject(MapSerializer(serializer_0(StringCompanionObject_getInstance()), JsonElementSerializer_getInstance()).deserialize_2t41fm_k$(decoder));
  };
  JsonObjectSerializer.$metadata$ = {
    simpleName: 'JsonObjectSerializer',
    kind: 'object',
    interfaces: [KSerializer]
  };
  var JsonObjectSerializer_instance;
  function JsonObjectSerializer_getInstance() {
    if (JsonObjectSerializer_instance == null)
      new JsonObjectSerializer();
    return JsonObjectSerializer_instance;
  }
  function JsonArrayDescriptor() {
    JsonArrayDescriptor_instance = this;
    var tmp = this;
    var tmp$ret$2;
    $l$block_1: {
      var tmp$ret$1;
      $l$block_0: {
        var tmp$ret$0;
        $l$block: {
          var tmp0_cast_0_1_1 = serializer(createKType(getKClass(List), arrayOf([createInvariantKTypeProjection(createKType(getKClass(JsonElement), arrayOf([]), false))]), false));
          tmp$ret$0 = isInterface(tmp0_cast_0_1_1, KSerializer) ? tmp0_cast_0_1_1 : THROW_CCE();
          break $l$block;
        }
        tmp$ret$1 = tmp$ret$0;
        break $l$block_0;
      }
      tmp$ret$2 = tmp$ret$1._get_descriptor__684124924_bbb664_k$();
      break $l$block_1;
    }
    tmp.$$delegate_0__1 = tmp$ret$2;
    this.serialName_1 = 'kotlinx.serialization.json.JsonArray';
  }
  JsonArrayDescriptor.prototype.getElementAnnotations_a57oar_k$ = function (index) {
    return this.$$delegate_0__1.getElementAnnotations_a57oar_k$(index);
  };
  JsonArrayDescriptor.prototype.getElementDescriptor_sqz94k_k$ = function (index) {
    return this.$$delegate_0__1.getElementDescriptor_sqz94k_k$(index);
  };
  JsonArrayDescriptor.prototype.getElementIndex_2hwbkl_k$ = function (name) {
    return this.$$delegate_0__1.getElementIndex_2hwbkl_k$(name);
  };
  JsonArrayDescriptor.prototype.getElementName_ykpypc_k$ = function (index) {
    return this.$$delegate_0__1.getElementName_ykpypc_k$(index);
  };
  JsonArrayDescriptor.prototype.isElementOptional_c3hgb3_k$ = function (index) {
    return this.$$delegate_0__1.isElementOptional_c3hgb3_k$(index);
  };
  JsonArrayDescriptor.prototype._get_annotations__1905959661_virbvx_k$ = function () {
    return this.$$delegate_0__1._get_annotations__1905959661_virbvx_k$();
  };
  JsonArrayDescriptor.prototype._get_elementsCount__2919979385_mqmrgn_k$ = function () {
    return this.$$delegate_0__1._get_elementsCount__2919979385_mqmrgn_k$();
  };
  JsonArrayDescriptor.prototype._get_isNullable__336674624_5kg3sw_k$ = function () {
    return this.$$delegate_0__1._get_isNullable__336674624_5kg3sw_k$();
  };
  JsonArrayDescriptor.prototype._get_kind__801637687_d99vlj_k$ = function () {
    return this.$$delegate_0__1._get_kind__801637687_d99vlj_k$();
  };
  JsonArrayDescriptor.prototype._get_serialName__1025298892_gyfpos_k$ = function () {
    return this.serialName_1;
  };
  JsonArrayDescriptor.$metadata$ = {
    simpleName: 'JsonArrayDescriptor',
    kind: 'object',
    interfaces: [SerialDescriptor]
  };
  var JsonArrayDescriptor_instance;
  function JsonArrayDescriptor_getInstance() {
    if (JsonArrayDescriptor_instance == null)
      new JsonArrayDescriptor();
    return JsonArrayDescriptor_instance;
  }
  function JsonArraySerializer() {
    JsonArraySerializer_instance = this;
    this.descriptor_1 = JsonArrayDescriptor_getInstance();
  }
  JsonArraySerializer.prototype._get_descriptor__684124924_bbb664_k$ = function () {
    return this.descriptor_1;
  };
  JsonArraySerializer.prototype.serialize_vr3ymf_k$ = function (encoder, value) {
    verify(encoder);
    ListSerializer(JsonElementSerializer_getInstance()).serialize_32qylj_k$(encoder, value);
  };
  JsonArraySerializer.prototype.serialize_32qylj_k$ = function (encoder, value) {
    return this.serialize_vr3ymf_k$(encoder, value instanceof JsonArray ? value : THROW_CCE());
  };
  JsonArraySerializer.prototype.deserialize_2t41fm_k$ = function (decoder) {
    verify_0(decoder);
    return new JsonArray(ListSerializer(JsonElementSerializer_getInstance()).deserialize_2t41fm_k$(decoder));
  };
  JsonArraySerializer.$metadata$ = {
    simpleName: 'JsonArraySerializer',
    kind: 'object',
    interfaces: [KSerializer]
  };
  var JsonArraySerializer_instance;
  function JsonArraySerializer_getInstance() {
    if (JsonArraySerializer_instance == null)
      new JsonArraySerializer();
    return JsonArraySerializer_instance;
  }
  function defer(deferred) {
    return new defer$1(deferred);
  }
  function JsonPrimitiveSerializer() {
    JsonPrimitiveSerializer_instance = this;
    var tmp = this;
    var tmp_0 = STRING_getInstance();
    tmp.descriptor_1 = buildSerialDescriptor$default('kotlinx.serialization.json.JsonPrimitive', tmp_0, [], null, 12, null);
  }
  JsonPrimitiveSerializer.prototype._get_descriptor__684124924_bbb664_k$ = function () {
    return this.descriptor_1;
  };
  JsonPrimitiveSerializer.prototype.serialize_b1s4xz_k$ = function (encoder, value) {
    verify(encoder);
    var tmp;
    if (value instanceof JsonNull) {
      tmp = encoder.encodeSerializableValue_bps9ot_k$(JsonNullSerializer_getInstance(), JsonNull_getInstance());
    } else {
      {
        var tmp_0 = JsonLiteralSerializer_getInstance();
        tmp = encoder.encodeSerializableValue_bps9ot_k$(tmp_0, value instanceof JsonLiteral ? value : THROW_CCE());
      }
    }
    return tmp;
  };
  JsonPrimitiveSerializer.prototype.serialize_32qylj_k$ = function (encoder, value) {
    return this.serialize_b1s4xz_k$(encoder, value instanceof JsonPrimitive ? value : THROW_CCE());
  };
  JsonPrimitiveSerializer.prototype.deserialize_2t41fm_k$ = function (decoder) {
    var result = asJsonDecoder(decoder).decodeJsonElement_6lz9ye_k$();
    if (!(result instanceof JsonPrimitive))
      throw JsonDecodingException_0(-1, 'Unexpected JSON element, expected JsonPrimitive, had ' + getKClassFromExpression(result), toString(result));
    else {
    }
    return result;
  };
  JsonPrimitiveSerializer.$metadata$ = {
    simpleName: 'JsonPrimitiveSerializer',
    kind: 'object',
    interfaces: [KSerializer]
  };
  var JsonPrimitiveSerializer_instance;
  function JsonPrimitiveSerializer_getInstance() {
    if (JsonPrimitiveSerializer_instance == null)
      new JsonPrimitiveSerializer();
    return JsonPrimitiveSerializer_instance;
  }
  function JsonNullSerializer() {
    JsonNullSerializer_instance = this;
    var tmp = this;
    var tmp_0 = ENUM_getInstance();
    tmp.descriptor_1 = buildSerialDescriptor$default('kotlinx.serialization.json.JsonNull', tmp_0, [], null, 12, null);
  }
  JsonNullSerializer.prototype._get_descriptor__684124924_bbb664_k$ = function () {
    return this.descriptor_1;
  };
  JsonNullSerializer.prototype.serialize_e8ms6d_k$ = function (encoder, value) {
    verify(encoder);
    encoder.encodeNull_ek2hec_k$();
  };
  JsonNullSerializer.prototype.serialize_32qylj_k$ = function (encoder, value) {
    return this.serialize_e8ms6d_k$(encoder, value instanceof JsonNull ? value : THROW_CCE());
  };
  JsonNullSerializer.prototype.deserialize_2t41fm_k$ = function (decoder) {
    verify_0(decoder);
    decoder.decodeNull_jzrmuj_k$();
    Unit_getInstance();
    return JsonNull_getInstance();
  };
  JsonNullSerializer.$metadata$ = {
    simpleName: 'JsonNullSerializer',
    kind: 'object',
    interfaces: [KSerializer]
  };
  var JsonNullSerializer_instance;
  function JsonNullSerializer_getInstance() {
    if (JsonNullSerializer_instance == null)
      new JsonNullSerializer();
    return JsonNullSerializer_instance;
  }
  function JsonLiteralSerializer() {
    JsonLiteralSerializer_instance = this;
    this.descriptor_1 = PrimitiveSerialDescriptor('kotlinx.serialization.json.JsonLiteral', STRING_getInstance());
  }
  JsonLiteralSerializer.prototype._get_descriptor__684124924_bbb664_k$ = function () {
    return this.descriptor_1;
  };
  JsonLiteralSerializer.prototype.serialize_qqh0j5_k$ = function (encoder, value) {
    verify(encoder);
    if (value._get_isString__3315263824_g7ag1c_k$()) {
      return encoder.encodeString_90sumj_k$(value._get_content__1558689208_ps04ag_k$());
    }
    var long = _get_longOrNull__3875291557(value);
    if (!(long == null)) {
      return encoder.encodeLong_rk3ab9_k$(long);
    }
    var double = _get_doubleOrNull__2770531184(value);
    if (!(double == null)) {
      return encoder.encodeDouble_79ztsb_k$(double);
    }
    var boolean = _get_booleanOrNull__1934131903(value);
    if (!(boolean == null)) {
      return encoder.encodeBoolean_6cztl5_k$(boolean);
    }
    encoder.encodeString_90sumj_k$(value._get_content__1558689208_ps04ag_k$());
  };
  JsonLiteralSerializer.prototype.serialize_32qylj_k$ = function (encoder, value) {
    return this.serialize_qqh0j5_k$(encoder, value instanceof JsonLiteral ? value : THROW_CCE());
  };
  JsonLiteralSerializer.prototype.deserialize_2t41fm_k$ = function (decoder) {
    var result = asJsonDecoder(decoder).decodeJsonElement_6lz9ye_k$();
    if (!(result instanceof JsonLiteral))
      throw JsonDecodingException_0(-1, 'Unexpected JSON element, expected JsonLiteral, had ' + getKClassFromExpression(result), toString(result));
    else {
    }
    return result;
  };
  JsonLiteralSerializer.$metadata$ = {
    simpleName: 'JsonLiteralSerializer',
    kind: 'object',
    interfaces: [KSerializer]
  };
  var JsonLiteralSerializer_instance;
  function JsonLiteralSerializer_getInstance() {
    if (JsonLiteralSerializer_instance == null)
      new JsonLiteralSerializer();
    return JsonLiteralSerializer_instance;
  }
  function verify(encoder) {
    asJsonEncoder(encoder);
    Unit_getInstance();
  }
  function asJsonDecoder(_this__1828080292) {
    var tmp0_elvis_lhs = isInterface(_this__1828080292, JsonDecoder) ? _this__1828080292 : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalStateException_init_$Create$('This serializer can be used only with Json format.' + ('Expected Decoder to be JsonDecoder, got ' + getKClassFromExpression(_this__1828080292)));
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function verify_0(decoder) {
    asJsonDecoder(decoder);
    Unit_getInstance();
  }
  function asJsonEncoder(_this__1828080292) {
    var tmp0_elvis_lhs = isInterface(_this__1828080292, JsonEncoder) ? _this__1828080292 : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalStateException_init_$Create$('This serializer can be used only with Json format.' + ('Expected Encoder to be JsonEncoder, got ' + getKClassFromExpression(_this__1828080292)));
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function _get_original__1282519066($this) {
    var tmp$ret$0;
    $l$block: {
      var tmp0_getValue_0 = original$factory();
      tmp$ret$0 = $this.original$delegate_1._get_value__3683422336_a43j40_k$();
      break $l$block;
    }
    return tmp$ret$0;
  }
  function defer$1($deferred) {
    this.original$delegate_1 = lazy($deferred);
  }
  defer$1.prototype._get_serialName__1025298892_gyfpos_k$ = function () {
    return _get_original__1282519066(this)._get_serialName__1025298892_gyfpos_k$();
  };
  defer$1.prototype._get_kind__801637687_d99vlj_k$ = function () {
    return _get_original__1282519066(this)._get_kind__801637687_d99vlj_k$();
  };
  defer$1.prototype._get_elementsCount__2919979385_mqmrgn_k$ = function () {
    return _get_original__1282519066(this)._get_elementsCount__2919979385_mqmrgn_k$();
  };
  defer$1.prototype.getElementName_ykpypc_k$ = function (index) {
    return _get_original__1282519066(this).getElementName_ykpypc_k$(index);
  };
  defer$1.prototype.getElementIndex_2hwbkl_k$ = function (name) {
    return _get_original__1282519066(this).getElementIndex_2hwbkl_k$(name);
  };
  defer$1.prototype.getElementAnnotations_a57oar_k$ = function (index) {
    return _get_original__1282519066(this).getElementAnnotations_a57oar_k$(index);
  };
  defer$1.prototype.getElementDescriptor_sqz94k_k$ = function (index) {
    return _get_original__1282519066(this).getElementDescriptor_sqz94k_k$(index);
  };
  defer$1.prototype.isElementOptional_c3hgb3_k$ = function (index) {
    return _get_original__1282519066(this).isElementOptional_c3hgb3_k$(index);
  };
  defer$1.$metadata$ = {
    kind: 'class',
    interfaces: [SerialDescriptor]
  };
  function original$factory() {
    return getPropertyCallableRef('original', 1, KProperty1, function (receiver) {
      return _get_original__1282519066(receiver);
    }, null);
  }
  function JsonEncoder() {
  }
  JsonEncoder.$metadata$ = {
    simpleName: 'JsonEncoder',
    kind: 'interface',
    interfaces: [Encoder, CompositeEncoder]
  };
  function JsonConf_init_$Init$(encodeDefaults, ignoreUnknownKeys, isLenient, allowStructuredMapKeys, prettyPrint, prettyPrintIndent, coerceInputValues, useArrayPolymorphism, classDiscriminator, allowSpecialFloatingPointValues, serializersModule, $mask0, $marker, $this) {
    if (!(($mask0 & 1) === 0))
      encodeDefaults = false;
    if (!(($mask0 & 2) === 0))
      ignoreUnknownKeys = false;
    if (!(($mask0 & 4) === 0))
      isLenient = false;
    if (!(($mask0 & 8) === 0))
      allowStructuredMapKeys = false;
    if (!(($mask0 & 16) === 0))
      prettyPrint = false;
    if (!(($mask0 & 32) === 0))
      prettyPrintIndent = '    ';
    if (!(($mask0 & 64) === 0))
      coerceInputValues = false;
    if (!(($mask0 & 128) === 0))
      useArrayPolymorphism = false;
    if (!(($mask0 & 256) === 0))
      classDiscriminator = 'type';
    if (!(($mask0 & 512) === 0))
      allowSpecialFloatingPointValues = false;
    if (!(($mask0 & 1024) === 0))
      serializersModule = _get_EmptySerializersModule__1292120011();
    JsonConf.call($this, encodeDefaults, ignoreUnknownKeys, isLenient, allowStructuredMapKeys, prettyPrint, prettyPrintIndent, coerceInputValues, useArrayPolymorphism, classDiscriminator, allowSpecialFloatingPointValues, serializersModule);
    return $this;
  }
  function JsonConf_init_$Create$(encodeDefaults, ignoreUnknownKeys, isLenient, allowStructuredMapKeys, prettyPrint, prettyPrintIndent, coerceInputValues, useArrayPolymorphism, classDiscriminator, allowSpecialFloatingPointValues, serializersModule, $mask0, $marker) {
    return JsonConf_init_$Init$(encodeDefaults, ignoreUnknownKeys, isLenient, allowStructuredMapKeys, prettyPrint, prettyPrintIndent, coerceInputValues, useArrayPolymorphism, classDiscriminator, allowSpecialFloatingPointValues, serializersModule, $mask0, $marker, Object.create(JsonConf.prototype));
  }
  function JsonConf(encodeDefaults, ignoreUnknownKeys, isLenient, allowStructuredMapKeys, prettyPrint, prettyPrintIndent, coerceInputValues, useArrayPolymorphism, classDiscriminator, allowSpecialFloatingPointValues, serializersModule) {
    this.encodeDefaults_1 = encodeDefaults;
    this.ignoreUnknownKeys_1 = ignoreUnknownKeys;
    this.isLenient_1 = isLenient;
    this.allowStructuredMapKeys_1 = allowStructuredMapKeys;
    this.prettyPrint_1 = prettyPrint;
    this.prettyPrintIndent_1 = prettyPrintIndent;
    this.coerceInputValues_1 = coerceInputValues;
    this.useArrayPolymorphism_1 = useArrayPolymorphism;
    this.classDiscriminator_1 = classDiscriminator;
    this.allowSpecialFloatingPointValues_1 = allowSpecialFloatingPointValues;
    this.serializersModule_1 = serializersModule;
  }
  JsonConf.prototype._get_encodeDefaults__2255426691_xqaflp_k$ = function () {
    return this.encodeDefaults_1;
  };
  JsonConf.prototype._get_ignoreUnknownKeys__4153108645_2cgiu3_k$ = function () {
    return this.ignoreUnknownKeys_1;
  };
  JsonConf.prototype._get_isLenient__4131730692_2p6q64_k$ = function () {
    return this.isLenient_1;
  };
  JsonConf.prototype._get_allowStructuredMapKeys__141016373_2bygxh_k$ = function () {
    return this.allowStructuredMapKeys_1;
  };
  JsonConf.prototype._get_prettyPrint__1073381530_hr2ahm_k$ = function () {
    return this.prettyPrint_1;
  };
  JsonConf.prototype._get_prettyPrintIndent__3554969678_c8kpte_k$ = function () {
    return this.prettyPrintIndent_1;
  };
  JsonConf.prototype._get_coerceInputValues__1564306208_pvcie8_k$ = function () {
    return this.coerceInputValues_1;
  };
  JsonConf.prototype._get_useArrayPolymorphism__4259793650_kxw5q_k$ = function () {
    return this.useArrayPolymorphism_1;
  };
  JsonConf.prototype._get_classDiscriminator__1173799943_jeultz_k$ = function () {
    return this.classDiscriminator_1;
  };
  JsonConf.prototype._get_allowSpecialFloatingPointValues__1768724981_t91wxh_k$ = function () {
    return this.allowSpecialFloatingPointValues_1;
  };
  JsonConf.prototype._get_serializersModule__364239364_60uww4_k$ = function () {
    return this.serializersModule_1;
  };
  JsonConf.prototype.component1_7eebsc_k$ = function () {
    return this.encodeDefaults_1;
  };
  JsonConf.prototype.component2_7eebsb_k$ = function () {
    return this.ignoreUnknownKeys_1;
  };
  JsonConf.prototype.component3_7eebsa_k$ = function () {
    return this.isLenient_1;
  };
  JsonConf.prototype.component4_7eebs9_k$ = function () {
    return this.allowStructuredMapKeys_1;
  };
  JsonConf.prototype.component5_7eebs8_k$ = function () {
    return this.prettyPrint_1;
  };
  JsonConf.prototype.component6_7eebs7_k$ = function () {
    return this.prettyPrintIndent_1;
  };
  JsonConf.prototype.component7_7eebs6_k$ = function () {
    return this.coerceInputValues_1;
  };
  JsonConf.prototype.component8_7eebs5_k$ = function () {
    return this.useArrayPolymorphism_1;
  };
  JsonConf.prototype.component9_7eebs4_k$ = function () {
    return this.classDiscriminator_1;
  };
  JsonConf.prototype.component10_gazzfo_k$ = function () {
    return this.allowSpecialFloatingPointValues_1;
  };
  JsonConf.prototype.component11_gazzfn_k$ = function () {
    return this.serializersModule_1;
  };
  JsonConf.prototype.copy_kxfakp_k$ = function (encodeDefaults, ignoreUnknownKeys, isLenient, allowStructuredMapKeys, prettyPrint, prettyPrintIndent, coerceInputValues, useArrayPolymorphism, classDiscriminator, allowSpecialFloatingPointValues, serializersModule) {
    return new JsonConf(encodeDefaults, ignoreUnknownKeys, isLenient, allowStructuredMapKeys, prettyPrint, prettyPrintIndent, coerceInputValues, useArrayPolymorphism, classDiscriminator, allowSpecialFloatingPointValues, serializersModule);
  };
  JsonConf.prototype.copy$default_ps1fcp_k$ = function (encodeDefaults, ignoreUnknownKeys, isLenient, allowStructuredMapKeys, prettyPrint, prettyPrintIndent, coerceInputValues, useArrayPolymorphism, classDiscriminator, allowSpecialFloatingPointValues, serializersModule, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      encodeDefaults = this.encodeDefaults_1;
    if (!(($mask0 & 2) === 0))
      ignoreUnknownKeys = this.ignoreUnknownKeys_1;
    if (!(($mask0 & 4) === 0))
      isLenient = this.isLenient_1;
    if (!(($mask0 & 8) === 0))
      allowStructuredMapKeys = this.allowStructuredMapKeys_1;
    if (!(($mask0 & 16) === 0))
      prettyPrint = this.prettyPrint_1;
    if (!(($mask0 & 32) === 0))
      prettyPrintIndent = this.prettyPrintIndent_1;
    if (!(($mask0 & 64) === 0))
      coerceInputValues = this.coerceInputValues_1;
    if (!(($mask0 & 128) === 0))
      useArrayPolymorphism = this.useArrayPolymorphism_1;
    if (!(($mask0 & 256) === 0))
      classDiscriminator = this.classDiscriminator_1;
    if (!(($mask0 & 512) === 0))
      allowSpecialFloatingPointValues = this.allowSpecialFloatingPointValues_1;
    if (!(($mask0 & 1024) === 0))
      serializersModule = this.serializersModule_1;
    return this.copy_kxfakp_k$(encodeDefaults, ignoreUnknownKeys, isLenient, allowStructuredMapKeys, prettyPrint, prettyPrintIndent, coerceInputValues, useArrayPolymorphism, classDiscriminator, allowSpecialFloatingPointValues, serializersModule);
  };
  JsonConf.prototype.toString = function () {
    return 'JsonConf(encodeDefaults=' + this.encodeDefaults_1 + ', ignoreUnknownKeys=' + this.ignoreUnknownKeys_1 + ', isLenient=' + this.isLenient_1 + ', allowStructuredMapKeys=' + this.allowStructuredMapKeys_1 + ', prettyPrint=' + this.prettyPrint_1 + ', prettyPrintIndent=' + this.prettyPrintIndent_1 + ', coerceInputValues=' + this.coerceInputValues_1 + ', useArrayPolymorphism=' + this.useArrayPolymorphism_1 + ', classDiscriminator=' + this.classDiscriminator_1 + ', allowSpecialFloatingPointValues=' + this.allowSpecialFloatingPointValues_1 + ', serializersModule=' + this.serializersModule_1 + ')';
  };
  JsonConf.prototype.hashCode = function () {
    return imul(imul(imul(imul(imul(imul(imul(imul(imul(imul(this.encodeDefaults_1 | 0, 31) + (this.ignoreUnknownKeys_1 | 0) | 0, 31) + (this.isLenient_1 | 0) | 0, 31) + (this.allowStructuredMapKeys_1 | 0) | 0, 31) + (this.prettyPrint_1 | 0) | 0, 31) + getStringHashCode(this.prettyPrintIndent_1) | 0, 31) + (this.coerceInputValues_1 | 0) | 0, 31) + (this.useArrayPolymorphism_1 | 0) | 0, 31) + getStringHashCode(this.classDiscriminator_1) | 0, 31) + (this.allowSpecialFloatingPointValues_1 | 0) | 0, 31) + hashCode(this.serializersModule_1) | 0;
  };
  JsonConf.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof JsonConf))
      return false;
    else {
    }
    var tmp0_other_with_cast = other instanceof JsonConf ? other : THROW_CCE();
    if (!(this.encodeDefaults_1 === tmp0_other_with_cast.encodeDefaults_1))
      return false;
    if (!(this.ignoreUnknownKeys_1 === tmp0_other_with_cast.ignoreUnknownKeys_1))
      return false;
    if (!(this.isLenient_1 === tmp0_other_with_cast.isLenient_1))
      return false;
    if (!(this.allowStructuredMapKeys_1 === tmp0_other_with_cast.allowStructuredMapKeys_1))
      return false;
    if (!(this.prettyPrint_1 === tmp0_other_with_cast.prettyPrint_1))
      return false;
    if (!(this.prettyPrintIndent_1 === tmp0_other_with_cast.prettyPrintIndent_1))
      return false;
    if (!(this.coerceInputValues_1 === tmp0_other_with_cast.coerceInputValues_1))
      return false;
    if (!(this.useArrayPolymorphism_1 === tmp0_other_with_cast.useArrayPolymorphism_1))
      return false;
    if (!(this.classDiscriminator_1 === tmp0_other_with_cast.classDiscriminator_1))
      return false;
    if (!(this.allowSpecialFloatingPointValues_1 === tmp0_other_with_cast.allowSpecialFloatingPointValues_1))
      return false;
    if (!equals(this.serializersModule_1, tmp0_other_with_cast.serializersModule_1))
      return false;
    return true;
  };
  JsonConf.$metadata$ = {
    simpleName: 'JsonConf',
    kind: 'class',
    interfaces: []
  };
  function JsonEncodingException(message) {
    JsonException.call(this, message);
    captureStack(this, JsonEncodingException);
  }
  JsonEncodingException.$metadata$ = {
    simpleName: 'JsonEncodingException',
    kind: 'class',
    interfaces: []
  };
  function InvalidFloatingPointEncoded(value, output) {
    var tmp = 'Unexpected special floating-point value ' + toString(value) + '. By default, ' + 'non-finite floating point values are prohibited because they do not conform JSON specification. ' + (_get_specialFlowingValuesHint__2362587175() + '\n');
    return new JsonEncodingException(tmp + ('Current output: ' + minify$default(output, 0, 1, null)));
  }
  function InvalidKeyKindException(keyDescriptor) {
    return new JsonEncodingException("Value of type '" + keyDescriptor._get_serialName__1025298892_gyfpos_k$() + "' can't be used in JSON as a key in the map. " + ("It should have either primitive or enum kind, but its kind is '" + keyDescriptor._get_kind__801637687_d99vlj_k$() + "'.\n") + _get_allowStructuredMapKeysHint__3890899950());
  }
  function JsonDecodingException(message) {
    JsonException.call(this, message);
    captureStack(this, JsonDecodingException);
  }
  JsonDecodingException.$metadata$ = {
    simpleName: 'JsonDecodingException',
    kind: 'class',
    interfaces: []
  };
  function JsonDecodingException_0(offset, message, input) {
    return JsonDecodingException_1(offset, message + '\nJSON input: ' + minify(input, offset));
  }
  function throwInvalidFloatingPointDecoded(_this__1828080292, result) {
    var tmp = 'Unexpected special floating-point value ' + toString(result) + '. By default, ' + 'non-finite floating point values are prohibited because they do not conform JSON specification. ' + _get_specialFlowingValuesHint__2362587175();
    _this__1828080292.fail$default_ojg9wb_k$(tmp, 0, 2, null);
  }
  function InvalidFloatingPointEncoded_0(value, key, output) {
    return new JsonEncodingException(unexpectedFpErrorMessage(value, key, output));
  }
  function InvalidFloatingPointDecoded(value, key, output) {
    return JsonDecodingException_1(-1, unexpectedFpErrorMessage(value, key, output));
  }
  function UnknownKeyException(key, input) {
    var tmp = "Encountered unknown key '" + key + "'.\n" + (_get_ignoreUnknownKeysHint__4251639646() + '\n');
    return JsonDecodingException_1(-1, tmp + ('Current input: ' + minify$default(input, 0, 1, null)));
  }
  function JsonException(message) {
    SerializationException_init_$Init$(message, this);
    captureStack(this, JsonException);
  }
  JsonException.$metadata$ = {
    simpleName: 'JsonException',
    kind: 'class',
    interfaces: []
  };
  function minify(_this__1828080292, offset) {
    if (_this__1828080292.length < 200)
      return _this__1828080292;
    if (offset === -1) {
      var start = _this__1828080292.length - 60 | 0;
      if (start <= 0)
        return _this__1828080292;
      var tmp$ret$1;
      $l$block_0: {
        var tmp$ret$0;
        $l$block: {
          tmp$ret$0 = _this__1828080292;
          break $l$block;
        }
        tmp$ret$1 = tmp$ret$0.substring(start);
        break $l$block_0;
      }
      return '.....' + tmp$ret$1;
    }
    var start_0 = offset - 30 | 0;
    var end = offset + 30 | 0;
    var prefix = start_0 <= 0 ? '' : '.....';
    var suffix = end >= _this__1828080292.length ? '' : '.....';
    var tmp$ret$3;
    $l$block_2: {
      var tmp0_substring_0 = coerceAtLeast(start_0, 0);
      var tmp1_substring_0 = coerceAtMost(end, _this__1828080292.length);
      var tmp$ret$2;
      $l$block_1: {
        tmp$ret$2 = _this__1828080292;
        break $l$block_1;
      }
      tmp$ret$3 = tmp$ret$2.substring(tmp0_substring_0, tmp1_substring_0);
      break $l$block_2;
    }
    return prefix + tmp$ret$3 + suffix;
  }
  function minify$default(_this__1828080292, offset, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      offset = -1;
    return minify(_this__1828080292, offset);
  }
  function JsonDecodingException_1(offset, message) {
    return new JsonDecodingException(offset >= 0 ? 'Unexpected JSON token at offset ' + offset + ': ' + message : message);
  }
  function unexpectedFpErrorMessage(value, key, output) {
    var tmp = 'Unexpected special floating-point value ' + toString(value) + ' with key ' + key + '. By default, ' + 'non-finite floating point values are prohibited because they do not conform JSON specification. ' + (_get_specialFlowingValuesHint__2362587175() + '\n');
    return tmp + ('Current output: ' + minify$default(output, 0, 1, null));
  }
  function _get_reader__3365748392($this) {
    return $this.reader_1;
  }
  function _get_isLenient__4131730692($this) {
    return $this.isLenient_1;
  }
  function readObject($this) {
    {
      var tmp0_requireTokenClass_0 = $this.reader_1;
      var tmp1_requireTokenClass_0 = _get_TC_BEGIN_OBJ__3637395738();
      if (!(tmp0_requireTokenClass_0._get_tokenClass__450714988_7gcdws_k$() === tmp1_requireTokenClass_0)) {
        var tmp$ret$0;
        $l$block: {
          var tmp2__anonymous__1_1215738843 = numberToChar(tmp0_requireTokenClass_0._get_tokenClass__450714988_7gcdws_k$());
          tmp$ret$0 = 'Expected start of the object';
          break $l$block;
        }
        tmp0_requireTokenClass_0.fail_8sige4_k$(tmp$ret$0, _get_tokenPosition__2900019919(tmp0_requireTokenClass_0));
      }
    }
    $this.reader_1.nextToken_kw32id_k$();
    {
      var tmp3_require_0 = $this.reader_1;
      var tmp4_require_0 = !($this.reader_1._get_tokenClass__450714988_7gcdws_k$() === _get_TC_COMMA__1190675334());
      var tmp5_require_0 = $this.reader_1._get_currentPosition__868736655_ed81hr_k$();
      if (!tmp4_require_0) {
        var tmp$ret$1;
        $l$block_0: {
          tmp$ret$1 = 'Unexpected leading comma';
          break $l$block_0;
        }
        tmp3_require_0.fail_8sige4_k$(tmp$ret$1, tmp5_require_0);
      }
    }
    var tmp$ret$2;
    $l$block_1: {
      tmp$ret$2 = LinkedHashMap_init_$Create$();
      break $l$block_1;
    }
    var result = tmp$ret$2;
    var valueExpected = false;
    while ($this.reader_1._get_canBeginValue__2149250457_zhi5pj_k$()) {
      valueExpected = false;
      var key = $this.isLenient_1 ? $this.reader_1.takeString_ihe360_k$() : $this.reader_1.takeStringQuoted_dmnzeo_k$();
      {
        var tmp6_requireTokenClass_0 = $this.reader_1;
        var tmp7_requireTokenClass_0 = _get_TC_COLON__1190647868();
        if (!(tmp6_requireTokenClass_0._get_tokenClass__450714988_7gcdws_k$() === tmp7_requireTokenClass_0)) {
          var tmp$ret$3;
          $l$block_2: {
            var tmp8__anonymous__1_1671115105 = numberToChar(tmp6_requireTokenClass_0._get_tokenClass__450714988_7gcdws_k$());
            tmp$ret$3 = "Expected ':'";
            break $l$block_2;
          }
          tmp6_requireTokenClass_0.fail_8sige4_k$(tmp$ret$3, _get_tokenPosition__2900019919(tmp6_requireTokenClass_0));
        }
      }
      $this.reader_1.nextToken_kw32id_k$();
      var element = $this.read_22xsm_k$();
      {
        result.put_3mhbri_k$(key, element);
        Unit_getInstance();
      }
      if (!($this.reader_1._get_tokenClass__450714988_7gcdws_k$() === _get_TC_COMMA__1190675334())) {
        {
          var tmp9_requireTokenClass_0 = $this.reader_1;
          var tmp10_requireTokenClass_0 = _get_TC_END_OBJ__4135196520();
          if (!(tmp9_requireTokenClass_0._get_tokenClass__450714988_7gcdws_k$() === tmp10_requireTokenClass_0)) {
            var tmp$ret$4;
            $l$block_3: {
              var tmp11__anonymous__1_787113559 = numberToChar(tmp9_requireTokenClass_0._get_tokenClass__450714988_7gcdws_k$());
              tmp$ret$4 = 'Expected end of the object or comma';
              break $l$block_3;
            }
            tmp9_requireTokenClass_0.fail_8sige4_k$(tmp$ret$4, _get_tokenPosition__2900019919(tmp9_requireTokenClass_0));
          }
        }
      } else {
        valueExpected = true;
        $this.reader_1.nextToken_kw32id_k$();
      }
    }
    {
      var tmp12_require_0 = $this.reader_1;
      var tmp13_require_0 = !valueExpected ? $this.reader_1._get_tokenClass__450714988_7gcdws_k$() === _get_TC_END_OBJ__4135196520() : false;
      var tmp14_require_0 = $this.reader_1._get_currentPosition__868736655_ed81hr_k$();
      if (!tmp13_require_0) {
        var tmp$ret$5;
        $l$block_4: {
          tmp$ret$5 = 'Expected end of the object';
          break $l$block_4;
        }
        tmp12_require_0.fail_8sige4_k$(tmp$ret$5, tmp14_require_0);
      }
    }
    $this.reader_1.nextToken_kw32id_k$();
    return new JsonObject(result);
  }
  function readArray($this) {
    {
      var tmp0_requireTokenClass_0 = $this.reader_1;
      var tmp1_requireTokenClass_0 = _get_TC_BEGIN_LIST__1087565549();
      if (!(tmp0_requireTokenClass_0._get_tokenClass__450714988_7gcdws_k$() === tmp1_requireTokenClass_0)) {
        var tmp$ret$0;
        $l$block: {
          var tmp2__anonymous__1_1215738843 = numberToChar(tmp0_requireTokenClass_0._get_tokenClass__450714988_7gcdws_k$());
          tmp$ret$0 = 'Expected start of the array';
          break $l$block;
        }
        tmp0_requireTokenClass_0.fail_8sige4_k$(tmp$ret$0, _get_tokenPosition__2900019919(tmp0_requireTokenClass_0));
      }
    }
    $this.reader_1.nextToken_kw32id_k$();
    {
      var tmp3_require_0 = $this.reader_1;
      var tmp4_require_0 = !($this.reader_1._get_tokenClass__450714988_7gcdws_k$() === _get_TC_COMMA__1190675334());
      var tmp5_require_0 = $this.reader_1._get_currentPosition__868736655_ed81hr_k$();
      if (!tmp4_require_0) {
        var tmp$ret$1;
        $l$block_0: {
          tmp$ret$1 = 'Unexpected leading comma';
          break $l$block_0;
        }
        tmp3_require_0.fail_8sige4_k$(tmp$ret$1, tmp5_require_0);
      }
    }
    var tmp$ret$2;
    $l$block_1: {
      tmp$ret$2 = ArrayList_init_$Create$();
      break $l$block_1;
    }
    var result = tmp$ret$2;
    var valueExpected = false;
    while ($this.reader_1._get_canBeginValue__2149250457_zhi5pj_k$()) {
      valueExpected = false;
      var element = $this.read_22xsm_k$();
      result.add_1j60pz_k$(element);
      Unit_getInstance();
      if (!($this.reader_1._get_tokenClass__450714988_7gcdws_k$() === _get_TC_COMMA__1190675334())) {
        {
          var tmp6_requireTokenClass_0 = $this.reader_1;
          var tmp7_requireTokenClass_0 = _get_TC_END_LIST__3634487903();
          if (!(tmp6_requireTokenClass_0._get_tokenClass__450714988_7gcdws_k$() === tmp7_requireTokenClass_0)) {
            var tmp$ret$3;
            $l$block_2: {
              var tmp8__anonymous__1_1671115105 = numberToChar(tmp6_requireTokenClass_0._get_tokenClass__450714988_7gcdws_k$());
              tmp$ret$3 = 'Expected end of the array or comma';
              break $l$block_2;
            }
            tmp6_requireTokenClass_0.fail_8sige4_k$(tmp$ret$3, _get_tokenPosition__2900019919(tmp6_requireTokenClass_0));
          }
        }
      } else {
        valueExpected = true;
        $this.reader_1.nextToken_kw32id_k$();
      }
    }
    {
      var tmp9_require_0 = $this.reader_1;
      var tmp10_require_0 = !valueExpected;
      var tmp11_require_0 = $this.reader_1._get_currentPosition__868736655_ed81hr_k$();
      if (!tmp10_require_0) {
        var tmp$ret$4;
        $l$block_3: {
          tmp$ret$4 = 'Unexpected trailing comma';
          break $l$block_3;
        }
        tmp9_require_0.fail_8sige4_k$(tmp$ret$4, tmp11_require_0);
      }
    }
    $this.reader_1.nextToken_kw32id_k$();
    return new JsonArray(result);
  }
  function readValue($this, isString) {
    var tmp;
    if ($this.isLenient_1) {
      tmp = $this.reader_1.takeString_ihe360_k$();
    } else {
      tmp = isString ? $this.reader_1.takeStringQuoted_dmnzeo_k$() : $this.reader_1.takeString_ihe360_k$();
    }
    var str = tmp;
    return new JsonLiteral(str, isString);
  }
  function JsonParser(configuration, reader) {
    this.reader_1 = reader;
    this.isLenient_1 = configuration._get_isLenient__4131730692_2p6q64_k$();
  }
  JsonParser.prototype.read_22xsm_k$ = function () {
    if (!this.reader_1._get_canBeginValue__2149250457_zhi5pj_k$()) {
      this.reader_1.fail$default_ojg9wb_k$("Can't begin reading value from here", 0, 2, null);
    }
    var tmp0_subject = this.reader_1._get_tokenClass__450714988_7gcdws_k$();
    var tmp;
    if (tmp0_subject === _get_TC_NULL__325840026()) {
      var tmp$ret$0;
      $l$block: {
        var tmp0_also_0 = JsonNull_getInstance();
        {
        }
        {
          this.reader_1.nextToken_kw32id_k$();
        }
        tmp$ret$0 = tmp0_also_0;
        break $l$block;
      }
      tmp = tmp$ret$0;
    } else if (tmp0_subject === _get_TC_STRING__4014011024()) {
      tmp = readValue(this, true);
    } else if (tmp0_subject === _get_TC_OTHER__1538686635()) {
      tmp = readValue(this, false);
    } else if (tmp0_subject === _get_TC_BEGIN_OBJ__3637395738()) {
      tmp = readObject(this);
    } else if (tmp0_subject === _get_TC_BEGIN_LIST__1087565549()) {
      tmp = readArray(this);
    } else {
      this.reader_1.fail$default_ojg9wb_k$("Can't begin reading element, unexpected token", 0, 2, null);
    }
    return tmp;
  };
  JsonParser.$metadata$ = {
    simpleName: 'JsonParser',
    kind: 'class',
    interfaces: []
  };
  function _get_C2TC__763032333() {
    init_properties_JsonReader_kt_1193781039();
    return C2TC;
  }
  var C2TC;
  function initC2TC(_this__1828080292, c, cl) {
    init_properties_JsonReader_kt_1193781039();
    _this__1828080292[c] = cl;
  }
  function _get_TC_INVALID__3004039524() {
    return TC_INVALID;
  }
  var TC_INVALID;
  function _get_TC_WS__2681908901() {
    return TC_WS;
  }
  var TC_WS;
  function initC2TC_0(_this__1828080292, c, cl) {
    init_properties_JsonReader_kt_1193781039();
    initC2TC(_this__1828080292, Char__toInt_impl_2402388783(c), cl);
  }
  function _get_COMMA__2205749180() {
    return COMMA;
  }
  var COMMA;
  function _get_TC_COMMA__1190675334() {
    return TC_COMMA;
  }
  var TC_COMMA;
  function _get_COLON__2205721714() {
    return COLON;
  }
  var COLON;
  function _get_TC_COLON__1190647868() {
    return TC_COLON;
  }
  var TC_COLON;
  function _get_BEGIN_OBJ__318898768() {
    return BEGIN_OBJ;
  }
  var BEGIN_OBJ;
  function _get_TC_BEGIN_OBJ__3637395738() {
    return TC_BEGIN_OBJ;
  }
  var TC_BEGIN_OBJ;
  function _get_END_OBJ__368619038() {
    return END_OBJ;
  }
  var END_OBJ;
  function _get_TC_END_OBJ__4135196520() {
    return TC_END_OBJ;
  }
  var TC_END_OBJ;
  function _get_BEGIN_LIST__1293374583() {
    return BEGIN_LIST;
  }
  var BEGIN_LIST;
  function _get_TC_BEGIN_LIST__1087565549() {
    return TC_BEGIN_LIST;
  }
  var TC_BEGIN_LIST;
  function _get_END_LIST__2834702953() {
    return END_LIST;
  }
  var END_LIST;
  function _get_TC_END_LIST__3634487903() {
    return TC_END_LIST;
  }
  var TC_END_LIST;
  function _get_STRING__1121561882() {
    return STRING;
  }
  var STRING;
  function _get_TC_STRING__4014011024() {
    return TC_STRING;
  }
  var TC_STRING;
  function _get_STRING_ESC__3080402244() {
    return STRING_ESC;
  }
  var STRING_ESC;
  function _get_TC_STRING_ESC__2874593210() {
    return TC_STRING_ESC;
  }
  var TC_STRING_ESC;
  function _get_CTC_MAX__2179331194() {
    return CTC_MAX;
  }
  var CTC_MAX;
  function _get_source__263461456($this) {
    return $this.source_1;
  }
  function _set_tokenPosition__3820053571($this, _set____804775014) {
    $this.tokenPosition_1 = _set____804775014;
  }
  function _get_tokenPosition__2900019919($this) {
    return $this.tokenPosition_1;
  }
  function _set_offset__648351204($this, _set____804775014) {
    $this.offset_1 = _set____804775014;
  }
  function _get_offset__736931032($this) {
    return $this.offset_1;
  }
  function _set_length__2259223025($this, _set____804775014) {
    $this.length_1 = _set____804775014;
  }
  function _get_length__2347802853($this) {
    return $this.length_1;
  }
  function _set_buf__295773938($this, _set____804775014) {
    $this.buf_1 = _set____804775014;
  }
  function _get_buf__856886398($this) {
    return $this.buf_1;
  }
  function takeStringInternal($this, advance) {
    var tmp;
    if ($this.offset_1 < 0) {
      tmp = concatToString($this.buf_1, 0, 0 + $this.length_1 | 0);
    } else {
      var tmp$ret$1;
      $l$block_0: {
        var tmp0_substring_0 = $this.source_1;
        var tmp1_substring_0 = $this.offset_1;
        var tmp2_substring_0 = $this.offset_1 + $this.length_1 | 0;
        var tmp$ret$0;
        $l$block: {
          tmp$ret$0 = tmp0_substring_0;
          break $l$block;
        }
        tmp$ret$1 = tmp$ret$0.substring(tmp1_substring_0, tmp2_substring_0);
        break $l$block_0;
      }
      tmp = tmp$ret$1;
    }
    var prevStr = tmp;
    if (advance)
      $this.nextToken_kw32id_k$();
    return prevStr;
  }
  function takeStringInternal$default($this, advance, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      advance = true;
    return takeStringInternal($this, advance);
  }
  function append($this, ch) {
    if ($this.length_1 >= $this.buf_1.length)
      $this.buf_1 = copyOf($this.buf_1, imul(2, $this.buf_1.length));
    var tmp = $this.buf_1;
    var tmp0_this = $this;
    var tmp1 = tmp0_this.length_1;
    tmp0_this.length_1 = tmp1 + 1 | 0;
    tmp[tmp1] = ch;
  }
  function appendRange($this, source, fromIndex, toIndex) {
    var addLen = toIndex - fromIndex | 0;
    var oldLen = $this.length_1;
    var newLen = oldLen + addLen | 0;
    if (newLen > $this.buf_1.length)
      $this.buf_1 = copyOf($this.buf_1, coerceAtLeast(newLen, imul(2, $this.buf_1.length)));
    var inductionVariable = 0;
    if (inductionVariable < addLen)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        $this.buf_1[oldLen + i | 0] = charSequenceGet(source, fromIndex + i | 0);
      }
       while (inductionVariable < addLen);
    var tmp1_this = $this;
    tmp1_this.length_1 = tmp1_this.length_1 + addLen | 0;
  }
  function nextLiteral($this, source, startPos) {
    $this.tokenPosition_1 = startPos;
    $this.offset_1 = startPos;
    var currentPosition = startPos;
    while (currentPosition < source.length ? charToTokenClass(charSequenceGet(source, currentPosition)) === 0 : false) {
      var tmp0 = currentPosition;
      currentPosition = tmp0 + 1 | 0;
      Unit_getInstance();
    }
    $this.currentPosition_1 = currentPosition;
    $this.length_1 = currentPosition - $this.offset_1 | 0;
    $this.tokenClass_1 = rangeEquals(source, $this.offset_1, $this.length_1, 'null') ? 10 : 0;
  }
  function nextString($this, source, startPosition) {
    $this.tokenPosition_1 = startPosition;
    $this.length_1 = 0;
    var currentPosition = startPosition + 1 | 0;
    if (currentPosition >= source.length) {
      $this.fail_8sige4_k$('EOF', currentPosition);
    }
    var lastPosition = currentPosition;
    while (!equals(new Char(charSequenceGet(source, currentPosition)), new Char(_Char___init__impl__380027157(34)))) {
      if (equals(new Char(charSequenceGet(source, currentPosition)), new Char(_Char___init__impl__380027157(92)))) {
        appendRange($this, source, lastPosition, currentPosition);
        var newPosition = appendEsc($this, source, currentPosition + 1 | 0);
        currentPosition = newPosition;
        lastPosition = newPosition;
      } else {
        currentPosition = currentPosition + 1 | 0;
        if (currentPosition >= source.length) {
          $this.fail_8sige4_k$('EOF', currentPosition);
        } else {
        }
      }
    }
    if (lastPosition === (startPosition + 1 | 0)) {
      $this.offset_1 = lastPosition;
      $this.length_1 = currentPosition - lastPosition | 0;
    } else {
      appendRange($this, source, lastPosition, currentPosition);
      $this.offset_1 = -1;
    }
    $this.currentPosition_1 = currentPosition + 1 | 0;
    $this.tokenClass_1 = 1;
  }
  function appendEsc($this, source, startPosition) {
    var currentPosition = startPosition;
    {
      var tmp0_require_0 = currentPosition < source.length;
      var tmp1_require_0 = currentPosition;
      if (!tmp0_require_0) {
        var tmp$ret$0;
        $l$block: {
          tmp$ret$0 = 'Unexpected EOF after escape character';
          break $l$block;
        }
        $this.fail_8sige4_k$(tmp$ret$0, tmp1_require_0);
      }
    }
    var tmp0 = currentPosition;
    currentPosition = tmp0 + 1 | 0;
    var currentChar = charSequenceGet(source, tmp0);
    if (equals(new Char(currentChar), new Char(_Char___init__impl__380027157(117)))) {
      return appendHex($this, source, currentPosition);
    }
    var c = escapeToChar(Char__toInt_impl_2402388783(currentChar));
    {
      var tmp2_require_0 = !equals(new Char(c), new Char(_Char___init__impl__380027157(0)));
      var tmp3_require_0 = currentPosition;
      if (!tmp2_require_0) {
        var tmp$ret$1;
        $l$block_0: {
          tmp$ret$1 = "Invalid escaped char '" + new Char(currentChar) + "'";
          break $l$block_0;
        }
        $this.fail_8sige4_k$(tmp$ret$1, tmp3_require_0);
      }
    }
    append($this, c);
    return currentPosition;
  }
  function appendHex($this, source, startPos) {
    var curPos = startPos;
    var tmp3 = curPos;
    curPos = tmp3 + 1 | 0;
    var tmp = fromHexChar($this, source, tmp3) << 12;
    var tmp2 = curPos;
    curPos = tmp2 + 1 | 0;
    var tmp_0 = tmp + (fromHexChar($this, source, tmp2) << 8) | 0;
    var tmp1 = curPos;
    curPos = tmp1 + 1 | 0;
    var tmp_1 = tmp_0 + (fromHexChar($this, source, tmp1) << 4) | 0;
    var tmp0 = curPos;
    curPos = tmp0 + 1 | 0;
    append($this, numberToChar(tmp_1 + fromHexChar($this, source, tmp0) | 0));
    return curPos;
  }
  function fromHexChar($this, source, currentPosition) {
    {
      var tmp0_require_0 = currentPosition < source.length;
      if (!tmp0_require_0) {
        var tmp$ret$0;
        $l$block: {
          tmp$ret$0 = 'Unexpected EOF during unicode escape';
          break $l$block;
        }
        $this.fail_8sige4_k$(tmp$ret$0, currentPosition);
      }
    }
    var curChar = charSequenceGet(source, currentPosition);
    var tmp;
    if (_Char___init__impl__380027157(48) <= curChar ? curChar <= _Char___init__impl__380027157(57) : false) {
      tmp = Char__toInt_impl_2402388783(curChar) - 48 | 0;
    } else if (_Char___init__impl__380027157(97) <= curChar ? curChar <= _Char___init__impl__380027157(102) : false) {
      tmp = (Char__toInt_impl_2402388783(curChar) - 97 | 0) + 10 | 0;
    } else if (_Char___init__impl__380027157(65) <= curChar ? curChar <= _Char___init__impl__380027157(70) : false) {
      tmp = (Char__toInt_impl_2402388783(curChar) - 65 | 0) + 10 | 0;
    } else {
      var tmp_0 = "Invalid toHexChar char '" + new Char(curChar) + "' in unicode escape";
      $this.fail$default_ojg9wb_k$(tmp_0, 0, 2, null);
    }
    return tmp;
  }
  function JsonReader(source) {
    this.source_1 = source;
    this.currentPosition_1 = 0;
    this.tokenClass_1 = 12;
    this.tokenPosition_1 = 0;
    this.offset_1 = -1;
    this.length_1 = 0;
    this.buf_1 = charArray(16);
    this.nextToken_kw32id_k$();
  }
  JsonReader.prototype._set_currentPosition__257813251_ilyt3h_k$ = function (_set____804775014) {
    this.currentPosition_1 = _set____804775014;
  };
  JsonReader.prototype._get_currentPosition__868736655_ed81hr_k$ = function () {
    return this.currentPosition_1;
  };
  JsonReader.prototype._set_tokenClass__1361467512_dbhdpf_k$ = function (_set____804775014) {
    this.tokenClass_1 = _set____804775014;
  };
  JsonReader.prototype._get_tokenClass__450714988_7gcdws_k$ = function () {
    return this.tokenClass_1;
  };
  JsonReader.prototype._get_isDone__47544511_sb1kv_k$ = function () {
    return this.tokenClass_1 === 12;
  };
  JsonReader.prototype._get_canBeginValue__2149250457_zhi5pj_k$ = function () {
    var tmp0_subject = this.tokenClass_1;
    return ((((tmp0_subject === 8 ? true : tmp0_subject === 6) ? true : tmp0_subject === 0) ? true : tmp0_subject === 1) ? true : tmp0_subject === 10) ? true : false;
  };
  JsonReader.prototype.requireTokenClass_ho8m1p_k$ = function (expected, errorMessage) {
    if (!(this.tokenClass_1 === expected)) {
      this.fail_8sige4_k$(errorMessage(new Char(numberToChar(this.tokenClass_1))), this.tokenPosition_1);
    }
  };
  JsonReader.prototype.takeString_ihe360_k$ = function () {
    if (!(this.tokenClass_1 === 0) ? !(this.tokenClass_1 === 1) : false) {
      this.fail_8sige4_k$('Expected string or non-null literal', this.tokenPosition_1);
    }
    return takeStringInternal$default(this, false, 2, null);
  };
  JsonReader.prototype.peekString_9klnyq_k$ = function (isLenient) {
    return (!(this.tokenClass_1 === 1) ? !isLenient ? true : !(this.tokenClass_1 === 0) : false) ? null : takeStringInternal(this, false);
  };
  JsonReader.prototype.takeStringQuoted_dmnzeo_k$ = function () {
    var tmp0_subject = this.tokenClass_1;
    if (tmp0_subject === 1) {
    } else if (tmp0_subject === 10) {
      this.fail_8sige4_k$("Expected string literal but 'null' literal was found.\nUse 'coerceInputValues = true' in 'Json {}` builder to coerce nulls to default values.", this.tokenPosition_1);
    } else {
      this.fail_8sige4_k$("Expected string literal with quotes.\nUse 'isLenient = true' in 'Json {}` builder to accept non-compliant JSON.", this.tokenPosition_1);
    }
    return takeStringInternal$default(this, false, 2, null);
  };
  JsonReader.prototype.takeBooleanStringUnquoted_toqf7x_k$ = function () {
    if (!(this.tokenClass_1 === 0)) {
      this.fail_8sige4_k$("Expected start of the unquoted boolean literal.\nUse 'isLenient = true' in 'Json {}` builder to accept non-compliant JSON.", this.tokenPosition_1);
    }
    return takeStringInternal$default(this, false, 2, null);
  };
  JsonReader.prototype.nextToken_kw32id_k$ = function () {
    var source = this.source_1;
    var currentPosition = this.currentPosition_1;
    while (currentPosition < source.length) {
      var ch = charSequenceGet(source, currentPosition);
      var tc = charToTokenClass(ch);
      if (tc === 3) {
        var tmp0 = currentPosition;
        currentPosition = tmp0 + 1 | 0;
        Unit_getInstance();
      } else if (tc === 0) {
        nextLiteral(this, source, currentPosition);
        return Unit_getInstance();
      } else if (tc === 1) {
        nextString(this, source, currentPosition);
        return Unit_getInstance();
      } else {
        this.tokenPosition_1 = currentPosition;
        this.tokenClass_1 = tc;
        this.currentPosition_1 = currentPosition + 1 | 0;
        return Unit_getInstance();
      }
    }
    this.tokenPosition_1 = currentPosition;
    this.tokenClass_1 = 12;
  };
  JsonReader.prototype.skipElement_5zxmi4_k$ = function () {
    if (!(this.tokenClass_1 === 6) ? !(this.tokenClass_1 === 8) : false) {
      this.nextToken_kw32id_k$();
      return Unit_getInstance();
    }
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = ArrayList_init_$Create$();
      break $l$block;
    }
    var tokenStack = tmp$ret$0;
    $l$1: do {
      $l$0: do {
        var tmp0_subject = this.tokenClass_1;
        if (tmp0_subject === 8 ? true : tmp0_subject === 6) {
          tokenStack.add_1j60pz_k$(this.tokenClass_1);
          Unit_getInstance();
        } else if (tmp0_subject === 9) {
          if (!(last(tokenStack) === 8))
            throw JsonDecodingException_0(this.currentPosition_1, 'found ] instead of }', this.source_1);
          tokenStack.removeAt_qvpkxi_k$(tokenStack._get_size__809037418_ddoh9m_k$() - 1 | 0);
          Unit_getInstance();
        } else if (tmp0_subject === 7) {
          if (!(last(tokenStack) === 6))
            throw JsonDecodingException_0(this.currentPosition_1, 'found } instead of ]', this.source_1);
          tokenStack.removeAt_qvpkxi_k$(tokenStack._get_size__809037418_ddoh9m_k$() - 1 | 0);
          Unit_getInstance();
        }
        this.nextToken_kw32id_k$();
      }
       while (false);
      var tmp$ret$1;
      $l$block_0: {
        tmp$ret$1 = !tokenStack.isEmpty_y1axqb_k$();
        break $l$block_0;
      }
    }
     while (tmp$ret$1);
  };
  JsonReader.prototype.toString = function () {
    return "JsonReader(source='" + this.source_1 + "', currentPosition=" + this.currentPosition_1 + ', tokenClass=' + this.tokenClass_1 + ', tokenPosition=' + this.tokenPosition_1 + ', offset=' + this.offset_1 + ')';
  };
  JsonReader.prototype.fail_8sige4_k$ = function (message, position) {
    throw JsonDecodingException_0(position, message, this.source_1);
  };
  JsonReader.prototype.fail$default_ojg9wb_k$ = function (message, position, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      position = this.currentPosition_1;
    return this.fail_8sige4_k$(message, position);
  };
  JsonReader.prototype.require_6c485v_k$ = function (condition, position, message) {
    if (!condition) {
      this.fail_8sige4_k$(message(), position);
    }
  };
  JsonReader.$metadata$ = {
    simpleName: 'JsonReader',
    kind: 'class',
    interfaces: []
  };
  function _get_INVALID__3532429338() {
    return INVALID;
  }
  var INVALID;
  function _get_NULL__774226340() {
    return NULL;
  }
  var NULL;
  function charToTokenClass(c) {
    init_properties_JsonReader_kt_1193781039();
    return Char__toInt_impl_2402388783(c) < 126 ? _get_C2TC__763032333()[Char__toInt_impl_2402388783(c)] : 0;
  }
  function _get_TC_EOF__1534257535() {
    return TC_EOF;
  }
  var TC_EOF;
  function _get_TC_OTHER__1538686635() {
    return TC_OTHER;
  }
  var TC_OTHER;
  function _get_TC_NULL__325840026() {
    return TC_NULL;
  }
  var TC_NULL;
  function _get_coerceInputValuesHint__1561406553() {
    return coerceInputValuesHint;
  }
  var coerceInputValuesHint;
  function _get_lenientHint__2822994611() {
    return lenientHint;
  }
  var lenientHint;
  function rangeEquals(source, start, length, str) {
    init_properties_JsonReader_kt_1193781039();
    var n = str.length;
    if (!(length === n))
      return false;
    var inductionVariable = 0;
    if (inductionVariable < n)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (!equals(new Char(charSequenceGet(source, start + i | 0)), new Char(charSequenceGet(str, i))))
          return false;
      }
       while (inductionVariable < n);
    return true;
  }
  function _get_UNICODE_ESC__1541125918() {
    return UNICODE_ESC;
  }
  var UNICODE_ESC;
  function escapeToChar(c) {
    init_properties_JsonReader_kt_1193781039();
    return c < 117 ? EscapeCharMappings_getInstance().ESCAPE_2_CHAR_1[c] : _Char___init__impl__380027157(0);
  }
  function _get_ESC2C_MAX__2560763846() {
    return ESC2C_MAX;
  }
  var ESC2C_MAX;
  function initC2ESC($this, c, esc) {
    if (!equals(new Char(esc), new Char(_Char___init__impl__380027157(117))))
      $this.ESCAPE_2_CHAR_1[Char__toInt_impl_2402388783(esc)] = numberToChar(c);
  }
  function initC2ESC_0($this, c, esc) {
    return initC2ESC($this, Char__toInt_impl_2402388783(c), esc);
  }
  function EscapeCharMappings() {
    EscapeCharMappings_instance = this;
    this.ESCAPE_2_CHAR_1 = charArray(117);
    var inductionVariable = 0;
    if (inductionVariable <= 31)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        initC2ESC(this, i, _Char___init__impl__380027157(117));
      }
       while (inductionVariable <= 31);
    initC2ESC(this, 8, _Char___init__impl__380027157(98));
    initC2ESC(this, 9, _Char___init__impl__380027157(116));
    initC2ESC(this, 10, _Char___init__impl__380027157(110));
    initC2ESC(this, 12, _Char___init__impl__380027157(102));
    initC2ESC(this, 13, _Char___init__impl__380027157(114));
    initC2ESC_0(this, _Char___init__impl__380027157(47), _Char___init__impl__380027157(47));
    initC2ESC_0(this, _Char___init__impl__380027157(34), _Char___init__impl__380027157(34));
    initC2ESC_0(this, _Char___init__impl__380027157(92), _Char___init__impl__380027157(92));
  }
  EscapeCharMappings.prototype._get_ESCAPE_2_CHAR__4210855984_1e2spc_k$ = function () {
    return this.ESCAPE_2_CHAR_1;
  };
  EscapeCharMappings.$metadata$ = {
    simpleName: 'EscapeCharMappings',
    kind: 'object',
    interfaces: []
  };
  var EscapeCharMappings_instance;
  function EscapeCharMappings_getInstance() {
    if (EscapeCharMappings_instance == null)
      new EscapeCharMappings();
    return EscapeCharMappings_instance;
  }
  function _get_ignoreUnknownKeysHint__4251639646() {
    return ignoreUnknownKeysHint;
  }
  var ignoreUnknownKeysHint;
  function _get_specialFlowingValuesHint__2362587175() {
    return specialFlowingValuesHint;
  }
  var specialFlowingValuesHint;
  function _get_allowStructuredMapKeysHint__3890899950() {
    return allowStructuredMapKeysHint;
  }
  var allowStructuredMapKeysHint;
  var properties_initialized_JsonReader_kt_2634337619;
  function init_properties_JsonReader_kt_1193781039() {
    if (!properties_initialized_JsonReader_kt_2634337619) {
      properties_initialized_JsonReader_kt_2634337619 = true;
      var tmp$ret$0;
      $l$block: {
        var tmp0_apply_0 = new Int8Array(126);
        {
        }
        {
          var inductionVariable = 0;
          if (inductionVariable <= 32)
            do {
              var i_3 = inductionVariable;
              inductionVariable = inductionVariable + 1 | 0;
              initC2TC(tmp0_apply_0, i_3, 11);
            }
             while (inductionVariable <= 32);
          initC2TC(tmp0_apply_0, 9, 3);
          initC2TC(tmp0_apply_0, 10, 3);
          initC2TC(tmp0_apply_0, 13, 3);
          initC2TC(tmp0_apply_0, 32, 3);
          initC2TC_0(tmp0_apply_0, _Char___init__impl__380027157(44), 4);
          initC2TC_0(tmp0_apply_0, _Char___init__impl__380027157(58), 5);
          initC2TC_0(tmp0_apply_0, _Char___init__impl__380027157(123), 6);
          initC2TC_0(tmp0_apply_0, _Char___init__impl__380027157(125), 7);
          initC2TC_0(tmp0_apply_0, _Char___init__impl__380027157(91), 8);
          initC2TC_0(tmp0_apply_0, _Char___init__impl__380027157(93), 9);
          initC2TC_0(tmp0_apply_0, _Char___init__impl__380027157(34), 1);
          initC2TC_0(tmp0_apply_0, _Char___init__impl__380027157(92), 2);
        }
        tmp$ret$0 = tmp0_apply_0;
        break $l$block;
      }
      C2TC = tmp$ret$0;
    }
  }
  function encodePolymorphically(_this__1828080292, serializer, value, ifPolymorphic) {
    var tmp;
    if (!(serializer instanceof AbstractPolymorphicSerializer)) {
      tmp = true;
    } else {
      {
        tmp = _this__1828080292._get_json__801013347_d8whur_k$()._get_configuration__311089819_557qfv_k$()._get_useArrayPolymorphism__4259793650_kxw5q_k$();
      }
    }
    if (tmp) {
      serializer.serialize_32qylj_k$(_this__1828080292, value);
      return Unit_getInstance();
    } else {
    }
    var tmp_0 = isInterface(serializer, SerializationStrategy) ? serializer : THROW_CCE();
    var actualSerializer = findActualSerializer$accessor$1hu6t4x(_this__1828080292, tmp_0, isObject(value) ? value : THROW_CCE());
    ifPolymorphic();
    actualSerializer.serialize_32qylj_k$(_this__1828080292, value);
  }
  function decodeSerializableValuePolymorphic(_this__1828080292, deserializer) {
    var tmp;
    if (!(deserializer instanceof AbstractPolymorphicSerializer)) {
      tmp = true;
    } else {
      {
        tmp = _this__1828080292._get_json__801013347_d8whur_k$()._get_configuration__311089819_557qfv_k$()._get_useArrayPolymorphism__4259793650_kxw5q_k$();
      }
    }
    if (tmp) {
      return deserializer.deserialize_2t41fm_k$(_this__1828080292);
    } else {
    }
    var tmp$ret$0;
    $l$block: {
      var tmp0_cast_0 = _this__1828080292.decodeJsonElement_6lz9ye_k$();
      var tmp1_cast_0 = deserializer._get_descriptor__684124924_bbb664_k$();
      if (!(tmp0_cast_0 instanceof JsonObject)) {
        throw JsonDecodingException_1(-1, 'Expected ' + getKClass(JsonObject) + ' as the serialized body of ' + tmp1_cast_0._get_serialName__1025298892_gyfpos_k$() + ', but had ' + getKClassFromExpression(tmp0_cast_0));
      } else {
      }
      tmp$ret$0 = tmp0_cast_0;
      break $l$block;
    }
    var jsonTree = tmp$ret$0;
    var discriminator = _this__1828080292._get_json__801013347_d8whur_k$()._get_configuration__311089819_557qfv_k$()._get_classDiscriminator__1173799943_jeultz_k$();
    var tmp0_safe_receiver = jsonTree.get_4u8u51_k$(discriminator);
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : _get_jsonPrimitive__1390217170(tmp0_safe_receiver);
    var type = tmp1_safe_receiver == null ? null : tmp1_safe_receiver._get_content__1558689208_ps04ag_k$();
    var tmp2_elvis_lhs = deserializer.findPolymorphicSerializerOrNull_e7t5h9_k$(_this__1828080292, type);
    var tmp_0;
    if (tmp2_elvis_lhs == null) {
      throwSerializerNotFound(type, jsonTree);
    } else {
      tmp_0 = tmp2_elvis_lhs;
    }
    var actualSerializer = tmp_0;
    var tmp_1 = _this__1828080292._get_json__801013347_d8whur_k$();
    return readPolymorphicJson(tmp_1, discriminator, jsonTree, isInterface(actualSerializer, DeserializationStrategy) ? actualSerializer : THROW_CCE());
  }
  function findActualSerializer(_this__1828080292, serializer, value) {
    var casted = serializer instanceof AbstractPolymorphicSerializer ? serializer : THROW_CCE();
    var actualSerializer = findPolymorphicSerializer(casted, _this__1828080292, isObject(value) ? value : THROW_CCE());
    validateIfSealed(casted, actualSerializer, _this__1828080292._get_json__801013347_d8whur_k$()._get_configuration__311089819_557qfv_k$()._get_classDiscriminator__1173799943_jeultz_k$());
    var kind = actualSerializer._get_descriptor__684124924_bbb664_k$()._get_kind__801637687_d99vlj_k$();
    checkKind(kind);
    return actualSerializer;
  }
  function throwSerializerNotFound(type, jsonTree) {
    var suffix = type == null ? "missing class discriminator ('null')" : "class discriminator '" + type + "'";
    throw JsonDecodingException_0(-1, 'Polymorphic serializer was not found for ' + suffix, jsonTree.toString());
  }
  function validateIfSealed(serializer, actualSerializer, classDiscriminator) {
    if (!(serializer instanceof SealedClassSerializer))
      return Unit_getInstance();
    else {
    }
    if (jsonCachedSerialNames(actualSerializer._get_descriptor__684124924_bbb664_k$()).contains_2ehdt1_k$(classDiscriminator)) {
      var baseName = serializer._get_descriptor__684124924_bbb664_k$()._get_serialName__1025298892_gyfpos_k$();
      var actualName = actualSerializer._get_descriptor__684124924_bbb664_k$()._get_serialName__1025298892_gyfpos_k$();
      {
        var tmp0_error_0 = "Sealed class '" + actualName + "' cannot be serialized as base class '" + baseName + "' because" + (" it has property name that conflicts with JSON class discriminator '" + classDiscriminator + "'. ") + 'You can either change class discriminator in JsonConfiguration, ' + 'rename property with @SerialName annotation or fall back to array polymorphism';
        throw IllegalStateException_init_$Create$(toString(tmp0_error_0));
      }
    }
  }
  function checkKind(kind) {
    if (kind instanceof ENUM) {
      throw IllegalStateException_init_$Create$("Enums cannot be serialized polymorphically with 'type' parameter. You can use 'JsonBuilder.useArrayPolymorphism' instead");
    } else {
    }
    if (kind instanceof PrimitiveKind) {
      throw IllegalStateException_init_$Create$("Primitives cannot be serialized polymorphically with 'type' parameter. You can use 'JsonBuilder.useArrayPolymorphism' instead");
    } else {
    }
    if (kind instanceof PolymorphicKind) {
      throw IllegalStateException_init_$Create$('Actual serializer for polymorphic cannot be polymorphic itself');
    } else {
    }
  }
  function findActualSerializer$accessor$1hu6t4x(_this__1828080292, serializer, value) {
    return findActualSerializer(_this__1828080292, serializer, value);
  }
  function _get_useArrayPolymorphism__4259793650($this) {
    return $this.useArrayPolymorphism_1;
  }
  function _get_discriminator__2118466997($this) {
    return $this.discriminator_1;
  }
  function checkKind_0($this, descriptor, actualClass) {
    var kind = descriptor._get_kind__801637687_d99vlj_k$();
    var tmp;
    if (kind instanceof PolymorphicKind) {
      tmp = true;
    } else {
      {
        tmp = equals(kind, CONTEXTUAL_getInstance());
      }
    }
    if (tmp) {
      throw IllegalArgumentException_init_$Create$('Serializer for ' + actualClass._get_simpleName__973554894_g3mnri_k$() + " can't be registered as a subclass for polymorphic serialization " + ('because its kind ' + kind + ' is not concrete. To work with multiple hierarchies, register it as a base class.'));
    } else {
    }
    if ($this.useArrayPolymorphism_1)
      return Unit_getInstance();
    var tmp_0;
    var tmp_1;
    if (equals(kind, LIST_getInstance()) ? true : equals(kind, MAP_getInstance())) {
      tmp_1 = true;
    } else {
      tmp_1 = kind instanceof PrimitiveKind;
    }
    if (tmp_1) {
      tmp_0 = true;
    } else {
      {
        tmp_0 = kind instanceof ENUM;
      }
    }
    if (tmp_0) {
      throw IllegalArgumentException_init_$Create$('Serializer for ' + actualClass._get_simpleName__973554894_g3mnri_k$() + ' of kind ' + kind + ' cannot be serialized polymorphically with class discriminator.');
    } else {
    }
  }
  function checkDiscriminatorCollisions($this, descriptor, actualClass) {
    var inductionVariable = 0;
    var last = descriptor._get_elementsCount__2919979385_mqmrgn_k$();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var name = descriptor.getElementName_ykpypc_k$(i);
        if (name === $this.discriminator_1) {
          throw IllegalArgumentException_init_$Create$('Polymorphic serializer for ' + actualClass + " has property '" + name + "' that conflicts " + 'with JSON class discriminator. You can either change class discriminator in JsonConfiguration, ' + 'rename property with @SerialName annotation ' + 'or fall back to array polymorphism');
        }
      }
       while (inductionVariable < last);
  }
  function PolymorphismValidator(useArrayPolymorphism, discriminator) {
    this.useArrayPolymorphism_1 = useArrayPolymorphism;
    this.discriminator_1 = discriminator;
  }
  PolymorphismValidator.prototype.contextual_7ekeez_k$ = function (kClass, serializer) {
  };
  PolymorphismValidator.prototype.polymorphic_2hf1qx_k$ = function (baseClass, actualClass, actualSerializer) {
    var descriptor = actualSerializer._get_descriptor__684124924_bbb664_k$();
    checkKind_0(this, descriptor, actualClass);
    if (!this.useArrayPolymorphism_1) {
      checkDiscriminatorCollisions(this, descriptor, actualClass);
    }
  };
  PolymorphismValidator.prototype.polymorphicDefault_fpe08l_k$ = function (baseClass, defaultSerializerProvider) {
  };
  PolymorphismValidator.$metadata$ = {
    simpleName: 'PolymorphismValidator',
    kind: 'class',
    interfaces: [SerializersModuleCollector]
  };
  function _get_mode__803653896($this) {
    return $this.mode_1;
  }
  function _set_currentIndex__750761374($this, _set____804775014) {
    $this.currentIndex_1 = _set____804775014;
  }
  function _get_currentIndex__1690914194($this) {
    return $this.currentIndex_1;
  }
  function _get_configuration__311089819($this) {
    return $this.configuration_1;
  }
  function decodeMapIndex($this, tokenClass) {
    if (!(tokenClass === _get_TC_COMMA__1190675334()) ? $this.currentIndex_1 % 2 === 1 : false) {
      {
        var tmp0_requireTokenClass_0 = $this.reader_1;
        var tmp1_requireTokenClass_0 = _get_TC_END_OBJ__4135196520();
        if (!(tmp0_requireTokenClass_0._get_tokenClass__450714988_7gcdws_k$() === tmp1_requireTokenClass_0)) {
          var tmp$ret$0;
          $l$block: {
            var tmp2__anonymous__1_1215738843 = numberToChar(tmp0_requireTokenClass_0._get_tokenClass__450714988_7gcdws_k$());
            tmp$ret$0 = 'Expected end of the object or comma';
            break $l$block;
          }
          tmp0_requireTokenClass_0.fail_8sige4_k$(tmp$ret$0, _get_tokenPosition__2900019919(tmp0_requireTokenClass_0));
        }
      }
    }
    if ($this.currentIndex_1 % 2 === 0) {
      {
        var tmp3_requireTokenClass_0 = $this.reader_1;
        var tmp4_requireTokenClass_0 = _get_TC_COLON__1190647868();
        if (!(tmp3_requireTokenClass_0._get_tokenClass__450714988_7gcdws_k$() === tmp4_requireTokenClass_0)) {
          var tmp$ret$1;
          $l$block_0: {
            var tmp5__anonymous__1_1443426974 = numberToChar(tmp3_requireTokenClass_0._get_tokenClass__450714988_7gcdws_k$());
            tmp$ret$1 = "Expected ':' after the key";
            break $l$block_0;
          }
          tmp3_requireTokenClass_0.fail_8sige4_k$(tmp$ret$1, _get_tokenPosition__2900019919(tmp3_requireTokenClass_0));
        }
      }
      $this.reader_1.nextToken_kw32id_k$();
    }
    var tmp;
    if (!$this.reader_1._get_canBeginValue__2149250457_zhi5pj_k$()) {
      {
        var tmp6_require_0 = $this.reader_1;
        var tmp7_require_0 = !(tokenClass === _get_TC_COMMA__1190675334());
        var tmp8_require_0 = tmp6_require_0._get_currentPosition__868736655_ed81hr_k$();
        if (!tmp7_require_0) {
          var tmp$ret$2;
          $l$block_1: {
            tmp$ret$2 = 'Unexpected trailing comma';
            break $l$block_1;
          }
          tmp6_require_0.fail_8sige4_k$(tmp$ret$2, tmp8_require_0);
        }
      }
      tmp = Companion_getInstance()._get_DECODE_DONE__3215019198_huz1aa_k$();
    } else {
      var tmp0_this = $this;
      tmp0_this.currentIndex_1 = tmp0_this.currentIndex_1 + 1 | 0;
      tmp = tmp0_this.currentIndex_1;
    }
    return tmp;
  }
  function coerceInputValue($this, descriptor, index) {
    var elementDescriptor = descriptor.getElementDescriptor_sqz94k_k$(index);
    if ($this.reader_1._get_tokenClass__450714988_7gcdws_k$() === _get_TC_NULL__325840026() ? !elementDescriptor._get_isNullable__336674624_5kg3sw_k$() : false)
      return true;
    if (equals(elementDescriptor._get_kind__801637687_d99vlj_k$(), ENUM_getInstance())) {
      var tmp0_elvis_lhs = $this.reader_1.peekString_9klnyq_k$($this.configuration_1._get_isLenient__4131730692_2p6q64_k$());
      var tmp;
      if (tmp0_elvis_lhs == null) {
        return false;
      } else {
        tmp = tmp0_elvis_lhs;
      }
      var enumValue = tmp;
      var enumIndex = elementDescriptor.getElementIndex_2hwbkl_k$(enumValue);
      if (enumIndex === Companion_getInstance()._get_UNKNOWN_NAME__1523688395_p75xhn_k$())
        return true;
    }
    return false;
  }
  function decodeObjectIndex($this, tokenClass, descriptor) {
    if (tokenClass === _get_TC_COMMA__1190675334() ? !$this.reader_1._get_canBeginValue__2149250457_zhi5pj_k$() : false) {
      $this.reader_1.fail$default_ojg9wb_k$('Unexpected trailing comma', 0, 2, null);
    }
    while ($this.reader_1._get_canBeginValue__2149250457_zhi5pj_k$()) {
      var tmp0_this = $this;
      tmp0_this.currentIndex_1 = tmp0_this.currentIndex_1 + 1 | 0;
      Unit_getInstance();
      var key = $this.decodeString_x3hxsx_k$();
      {
        var tmp0_requireTokenClass_0 = $this.reader_1;
        var tmp1_requireTokenClass_0 = _get_TC_COLON__1190647868();
        if (!(tmp0_requireTokenClass_0._get_tokenClass__450714988_7gcdws_k$() === tmp1_requireTokenClass_0)) {
          var tmp$ret$0;
          $l$block: {
            var tmp2__anonymous__1_1215738843 = numberToChar(tmp0_requireTokenClass_0._get_tokenClass__450714988_7gcdws_k$());
            tmp$ret$0 = "Expected ':'";
            break $l$block;
          }
          tmp0_requireTokenClass_0.fail_8sige4_k$(tmp$ret$0, _get_tokenPosition__2900019919(tmp0_requireTokenClass_0));
        }
      }
      $this.reader_1.nextToken_kw32id_k$();
      var index = descriptor.getElementIndex_2hwbkl_k$(key);
      var tmp;
      if (!(index === Companion_getInstance()._get_UNKNOWN_NAME__1523688395_p75xhn_k$())) {
        var tmp_0;
        if ($this.configuration_1._get_coerceInputValues__1564306208_pvcie8_k$() ? coerceInputValue($this, descriptor, index) : false) {
          tmp_0 = false;
        } else {
          return index;
        }
        tmp = tmp_0;
      } else {
        tmp = true;
      }
      var isUnknown = tmp;
      if (isUnknown ? !$this.configuration_1._get_ignoreUnknownKeys__4153108645_2cgiu3_k$() : false) {
        var tmp_1 = "Encountered an unknown key '" + key + "'.\n" + _get_ignoreUnknownKeysHint__4251639646();
        $this.reader_1.fail$default_ojg9wb_k$(tmp_1, 0, 2, null);
      } else {
        $this.reader_1.skipElement_5zxmi4_k$();
      }
      if ($this.reader_1._get_tokenClass__450714988_7gcdws_k$() === _get_TC_COMMA__1190675334()) {
        $this.reader_1.nextToken_kw32id_k$();
        {
          var tmp3_require_0 = $this.reader_1;
          var tmp4_require_0 = $this.reader_1._get_canBeginValue__2149250457_zhi5pj_k$();
          var tmp5_require_0 = $this.reader_1._get_currentPosition__868736655_ed81hr_k$();
          if (!tmp4_require_0) {
            var tmp$ret$1;
            $l$block_0: {
              tmp$ret$1 = 'Unexpected trailing comma';
              break $l$block_0;
            }
            tmp3_require_0.fail_8sige4_k$(tmp$ret$1, tmp5_require_0);
          }
        }
      }
    }
    return Companion_getInstance()._get_DECODE_DONE__3215019198_huz1aa_k$();
  }
  function decodeListIndex($this, tokenClass) {
    if (!(tokenClass === _get_TC_COMMA__1190675334()) ? !($this.currentIndex_1 === -1) : false) {
      {
        var tmp0_requireTokenClass_0 = $this.reader_1;
        var tmp1_requireTokenClass_0 = _get_TC_END_LIST__3634487903();
        if (!(tmp0_requireTokenClass_0._get_tokenClass__450714988_7gcdws_k$() === tmp1_requireTokenClass_0)) {
          var tmp$ret$0;
          $l$block: {
            var tmp2__anonymous__1_1215738843 = numberToChar(tmp0_requireTokenClass_0._get_tokenClass__450714988_7gcdws_k$());
            tmp$ret$0 = 'Expected end of the array or comma';
            break $l$block;
          }
          tmp0_requireTokenClass_0.fail_8sige4_k$(tmp$ret$0, _get_tokenPosition__2900019919(tmp0_requireTokenClass_0));
        }
      }
    }
    var tmp;
    if (!$this.reader_1._get_canBeginValue__2149250457_zhi5pj_k$()) {
      {
        var tmp3_require_0 = $this.reader_1;
        var tmp4_require_0 = !(tokenClass === _get_TC_COMMA__1190675334());
        var tmp5_require_0 = tmp3_require_0._get_currentPosition__868736655_ed81hr_k$();
        if (!tmp4_require_0) {
          var tmp$ret$1;
          $l$block_0: {
            tmp$ret$1 = 'Unexpected trailing comma';
            break $l$block_0;
          }
          tmp3_require_0.fail_8sige4_k$(tmp$ret$1, tmp5_require_0);
        }
      }
      tmp = Companion_getInstance()._get_DECODE_DONE__3215019198_huz1aa_k$();
    } else {
      var tmp0_this = $this;
      tmp0_this.currentIndex_1 = tmp0_this.currentIndex_1 + 1 | 0;
      tmp = tmp0_this.currentIndex_1;
    }
    return tmp;
  }
  function parse(_this__1828080292, $this, type, block) {
    try {
      return block(_this__1828080292);
    } catch ($p) {
      if ($p instanceof Error) {
        var tmp = "Failed to parse '" + type + "'";
        $this.reader_1.fail$default_ojg9wb_k$(tmp, 0, 2, null);
      } else {
        {
          throw $p;
        }
      }
    }
  }
  function StreamingJsonDecoder(json, mode, reader) {
    AbstractDecoder.call(this);
    this.json_1 = json;
    this.mode_1 = mode;
    this.reader_1 = reader;
    this.serializersModule_1 = this.json_1._get_serializersModule__364239364_60uww4_k$();
    this.currentIndex_1 = -1;
    this.configuration_1 = this.json_1._get_configuration__311089819_557qfv_k$();
  }
  StreamingJsonDecoder.prototype._get_json__801013347_d8whur_k$ = function () {
    return this.json_1;
  };
  StreamingJsonDecoder.prototype._get_reader__3365748392_fd8dw8_k$ = function () {
    return this.reader_1;
  };
  StreamingJsonDecoder.prototype._get_serializersModule__364239364_60uww4_k$ = function () {
    return this.serializersModule_1;
  };
  StreamingJsonDecoder.prototype.decodeJsonElement_6lz9ye_k$ = function () {
    return (new JsonParser(this.json_1._get_configuration__311089819_557qfv_k$(), this.reader_1)).read_22xsm_k$();
  };
  StreamingJsonDecoder.prototype.decodeSerializableValue_xpp80o_k$ = function (deserializer) {
    return decodeSerializableValuePolymorphic(this, deserializer);
  };
  StreamingJsonDecoder.prototype.beginStructure_dv3yt3_k$ = function (descriptor) {
    var newMode = switchMode(this.json_1, descriptor);
    if (!equals(new Char(newMode._get_begin__3114373192_c9kma1_k$()), new Char(_get_INVALID__3532429338()))) {
      {
        var tmp0_requireTokenClass_0 = this.reader_1;
        var tmp1_requireTokenClass_0 = newMode._get_beginTc__3615423769_b8kz53_k$();
        if (!(tmp0_requireTokenClass_0._get_tokenClass__450714988_7gcdws_k$() === tmp1_requireTokenClass_0)) {
          var tmp$ret$0;
          $l$block: {
            var tmp2__anonymous__1_1215738843 = numberToChar(tmp0_requireTokenClass_0._get_tokenClass__450714988_7gcdws_k$());
            tmp$ret$0 = "Expected '" + new Char(newMode._get_begin__3114373192_c9kma1_k$()) + ', kind: ' + descriptor._get_kind__801637687_d99vlj_k$() + "'";
            break $l$block;
          }
          tmp0_requireTokenClass_0.fail_8sige4_k$(tmp$ret$0, _get_tokenPosition__2900019919(tmp0_requireTokenClass_0));
        }
      }
      this.reader_1.nextToken_kw32id_k$();
    }
    var tmp0_subject = newMode;
    var tmp0 = tmp0_subject._get_ordinal__3363892928_fec5kw_k$();
    switch (tmp0) {
      case 1:
      case 2:
      case 3:
        return new StreamingJsonDecoder(this.json_1, newMode, this.reader_1);
      default:
        return this.mode_1.equals(newMode) ? this : new StreamingJsonDecoder(this.json_1, newMode, this.reader_1);
    }
  };
  StreamingJsonDecoder.prototype.endStructure_e64gd4_k$ = function (descriptor) {
    if (!equals(new Char(this.mode_1._get_end__856968982_ypp5lj_k$()), new Char(_get_INVALID__3532429338()))) {
      {
        var tmp0_requireTokenClass_0 = this.reader_1;
        var tmp1_requireTokenClass_0 = this.mode_1._get_endTc__3208462439_hyvkih_k$();
        if (!(tmp0_requireTokenClass_0._get_tokenClass__450714988_7gcdws_k$() === tmp1_requireTokenClass_0)) {
          var tmp$ret$0;
          $l$block: {
            var tmp2__anonymous__1_1215738843 = numberToChar(tmp0_requireTokenClass_0._get_tokenClass__450714988_7gcdws_k$());
            tmp$ret$0 = "Expected '" + new Char(this.mode_1._get_end__856968982_ypp5lj_k$()) + "'";
            break $l$block;
          }
          tmp0_requireTokenClass_0.fail_8sige4_k$(tmp$ret$0, _get_tokenPosition__2900019919(tmp0_requireTokenClass_0));
        }
      }
      this.reader_1.nextToken_kw32id_k$();
    }
  };
  StreamingJsonDecoder.prototype.decodeNotNullMark_us4ba1_k$ = function () {
    return !(this.reader_1._get_tokenClass__450714988_7gcdws_k$() === _get_TC_NULL__325840026());
  };
  StreamingJsonDecoder.prototype.decodeNull_jzrmuj_k$ = function () {
    {
      var tmp0_requireTokenClass_0 = this.reader_1;
      var tmp1_requireTokenClass_0 = _get_TC_NULL__325840026();
      if (!(tmp0_requireTokenClass_0._get_tokenClass__450714988_7gcdws_k$() === tmp1_requireTokenClass_0)) {
        var tmp$ret$0;
        $l$block: {
          var tmp2__anonymous__1_1215738843 = numberToChar(tmp0_requireTokenClass_0._get_tokenClass__450714988_7gcdws_k$());
          tmp$ret$0 = "Expected 'null' literal";
          break $l$block;
        }
        tmp0_requireTokenClass_0.fail_8sige4_k$(tmp$ret$0, _get_tokenPosition__2900019919(tmp0_requireTokenClass_0));
      }
    }
    this.reader_1.nextToken_kw32id_k$();
    return null;
  };
  StreamingJsonDecoder.prototype.decodeElementIndex_nk5a2l_k$ = function (descriptor) {
    var tokenClass = this.reader_1._get_tokenClass__450714988_7gcdws_k$();
    if (tokenClass === _get_TC_COMMA__1190675334()) {
      {
        var tmp0_require_0 = this.reader_1;
        var tmp1_require_0 = !(this.currentIndex_1 === -1);
        var tmp2_require_0 = this.reader_1._get_currentPosition__868736655_ed81hr_k$();
        if (!tmp1_require_0) {
          var tmp$ret$0;
          $l$block: {
            tmp$ret$0 = 'Unexpected leading comma';
            break $l$block;
          }
          tmp0_require_0.fail_8sige4_k$(tmp$ret$0, tmp2_require_0);
        }
      }
      this.reader_1.nextToken_kw32id_k$();
    }
    var tmp0_subject = this.mode_1;
    var tmp0 = tmp0_subject._get_ordinal__3363892928_fec5kw_k$();
    var tmp;
    switch (tmp0) {
      case 1:
        tmp = decodeListIndex(this, tokenClass);
        break;
      case 2:
        tmp = decodeMapIndex(this, tokenClass);
        break;
      case 3:
        var tmp1_this = this;
        tmp1_this.currentIndex_1 = tmp1_this.currentIndex_1 + 1 | 0;
        var tmp2_subject = tmp1_this.currentIndex_1;
        var tmp_0;
        switch (tmp2_subject) {
          case 0:
            tmp_0 = 0;
            break;
          case 1:
            tmp_0 = 1;
            break;
          default:
            tmp_0 = Companion_getInstance()._get_DECODE_DONE__3215019198_huz1aa_k$();
            break;
        }

        tmp = tmp_0;
        break;
      default:
        tmp = decodeObjectIndex(this, tokenClass, descriptor);
        break;
    }
    return tmp;
  };
  StreamingJsonDecoder.prototype.decodeBoolean_m0aca_k$ = function () {
    var tmp;
    if (this.configuration_1._get_isLenient__4131730692_2p6q64_k$()) {
      tmp = toBooleanStrict(this.reader_1.takeString_ihe360_k$());
    } else {
      tmp = toBooleanStrict(this.reader_1.takeBooleanStringUnquoted_toqf7x_k$());
    }
    return tmp;
  };
  StreamingJsonDecoder.prototype.decodeByte_jzz7je_k$ = function () {
    var tmp$ret$1;
    $l$block_0: {
      var tmp0_parse_0 = this.reader_1.takeString_ihe360_k$();
      try {
        var tmp$ret$0;
        $l$block: {
          tmp$ret$0 = toByte(tmp0_parse_0);
          break $l$block;
        }
        tmp$ret$1 = tmp$ret$0;
        break $l$block_0;
      } catch ($p) {
        if ($p instanceof Error) {
          this.reader_1.fail$default_ojg9wb_k$("Failed to parse 'byte'", 0, 2, null);
        } else {
          {
            throw $p;
          }
        }
      }
    }
    return tmp$ret$1;
  };
  StreamingJsonDecoder.prototype.decodeShort_jjqk32_k$ = function () {
    var tmp$ret$1;
    $l$block_0: {
      var tmp0_parse_0 = this.reader_1.takeString_ihe360_k$();
      try {
        var tmp$ret$0;
        $l$block: {
          tmp$ret$0 = toShort(tmp0_parse_0);
          break $l$block;
        }
        tmp$ret$1 = tmp$ret$0;
        break $l$block_0;
      } catch ($p) {
        if ($p instanceof Error) {
          this.reader_1.fail$default_ojg9wb_k$("Failed to parse 'short'", 0, 2, null);
        } else {
          {
            throw $p;
          }
        }
      }
    }
    return tmp$ret$1;
  };
  StreamingJsonDecoder.prototype.decodeInt_8iq8f5_k$ = function () {
    var tmp$ret$1;
    $l$block_0: {
      var tmp0_parse_0 = this.reader_1.takeString_ihe360_k$();
      try {
        var tmp$ret$0;
        $l$block: {
          tmp$ret$0 = toInt(tmp0_parse_0);
          break $l$block;
        }
        tmp$ret$1 = tmp$ret$0;
        break $l$block_0;
      } catch ($p) {
        if ($p instanceof Error) {
          this.reader_1.fail$default_ojg9wb_k$("Failed to parse 'int'", 0, 2, null);
        } else {
          {
            throw $p;
          }
        }
      }
    }
    return tmp$ret$1;
  };
  StreamingJsonDecoder.prototype.decodeLong_jzt186_k$ = function () {
    var tmp$ret$1;
    $l$block_0: {
      var tmp0_parse_0 = this.reader_1.takeString_ihe360_k$();
      try {
        var tmp$ret$0;
        $l$block: {
          tmp$ret$0 = toLong(tmp0_parse_0);
          break $l$block;
        }
        tmp$ret$1 = tmp$ret$0;
        break $l$block_0;
      } catch ($p) {
        if ($p instanceof Error) {
          this.reader_1.fail$default_ojg9wb_k$("Failed to parse 'long'", 0, 2, null);
        } else {
          {
            throw $p;
          }
        }
      }
    }
    return tmp$ret$1;
  };
  StreamingJsonDecoder.prototype.decodeFloat_jcnrwu_k$ = function () {
    var tmp$ret$4;
    $l$block_3: {
      var tmp0_parse_0 = this.reader_1.takeString_ihe360_k$();
      try {
        var tmp$ret$3;
        $l$block_2: {
          var tmp$ret$2;
          $l$block_1: {
            var tmp$ret$1;
            $l$block_0: {
              var tmp0_unsafeCast_0_1_3 = toDouble(tmp0_parse_0);
              var tmp$ret$0;
              $l$block: {
                tmp$ret$0 = tmp0_unsafeCast_0_1_3;
                break $l$block;
              }
              tmp$ret$1 = tmp$ret$0;
              break $l$block_0;
            }
            tmp$ret$2 = tmp$ret$1;
            break $l$block_1;
          }
          tmp$ret$3 = tmp$ret$2;
          break $l$block_2;
        }
        tmp$ret$4 = tmp$ret$3;
        break $l$block_3;
      } catch ($p) {
        if ($p instanceof Error) {
          this.reader_1.fail$default_ojg9wb_k$("Failed to parse 'float'", 0, 2, null);
        } else {
          {
            throw $p;
          }
        }
      }
    }
    var result = tmp$ret$4;
    var specialFp = this.json_1._get_configuration__311089819_557qfv_k$()._get_allowSpecialFloatingPointValues__1768724981_t91wxh_k$();
    if (specialFp ? true : isFinite(result))
      return result;
    throwInvalidFloatingPointDecoded(this.reader_1, result);
  };
  StreamingJsonDecoder.prototype.decodeDouble_ur8l0f_k$ = function () {
    var tmp$ret$1;
    $l$block_0: {
      var tmp0_parse_0 = this.reader_1.takeString_ihe360_k$();
      try {
        var tmp$ret$0;
        $l$block: {
          tmp$ret$0 = toDouble(tmp0_parse_0);
          break $l$block;
        }
        tmp$ret$1 = tmp$ret$0;
        break $l$block_0;
      } catch ($p) {
        if ($p instanceof Error) {
          this.reader_1.fail$default_ojg9wb_k$("Failed to parse 'double'", 0, 2, null);
        } else {
          {
            throw $p;
          }
        }
      }
    }
    var result = tmp$ret$1;
    var specialFp = this.json_1._get_configuration__311089819_557qfv_k$()._get_allowSpecialFloatingPointValues__1768724981_t91wxh_k$();
    if (specialFp ? true : isFinite_0(result))
      return result;
    throwInvalidFloatingPointDecoded(this.reader_1, result);
  };
  StreamingJsonDecoder.prototype.decodeChar_dc2jtx_k$ = function () {
    var tmp$ret$1;
    $l$block_0: {
      var tmp0_parse_0 = this.reader_1.takeString_ihe360_k$();
      try {
        var tmp$ret$0;
        $l$block: {
          tmp$ret$0 = single(tmp0_parse_0);
          break $l$block;
        }
        tmp$ret$1 = tmp$ret$0;
        break $l$block_0;
      } catch ($p) {
        if ($p instanceof Error) {
          this.reader_1.fail$default_ojg9wb_k$("Failed to parse 'char'", 0, 2, null);
        } else {
          {
            throw $p;
          }
        }
      }
    }
    return tmp$ret$1;
  };
  StreamingJsonDecoder.prototype.decodeString_x3hxsx_k$ = function () {
    var tmp;
    if (this.configuration_1._get_isLenient__4131730692_2p6q64_k$()) {
      tmp = this.reader_1.takeString_ihe360_k$();
    } else {
      tmp = this.reader_1.takeStringQuoted_dmnzeo_k$();
    }
    return tmp;
  };
  StreamingJsonDecoder.prototype.decodeEnum_w3hzf6_k$ = function (enumDescriptor) {
    return getElementIndexOrThrow(enumDescriptor, this.decodeString_x3hxsx_k$());
  };
  StreamingJsonDecoder.$metadata$ = {
    simpleName: 'StreamingJsonDecoder',
    kind: 'class',
    interfaces: [JsonDecoder]
  };
  function _get_json__801013347($this) {
    return $this.json_1;
  }
  function _set_level__1042945601($this, _set____804775014) {
    $this.level_1 = _set____804775014;
  }
  function _get_level__3401107661($this) {
    return $this.level_1;
  }
  function _set_writingFirst__7482531($this, _set____804775014) {
    $this.writingFirst_1 = _set____804775014;
  }
  function _get_composer__82076331($this) {
    return $this.composer_1;
  }
  function _get_mode__803653896_0($this) {
    return $this.mode_1;
  }
  function _get_modeReuseCache__114960570($this) {
    return $this.modeReuseCache_1;
  }
  function StreamingJsonEncoder_init_$Init$(output, json, mode, modeReuseCache, $this) {
    StreamingJsonEncoder.call($this, new Composer(output, json), json, mode, modeReuseCache);
    return $this;
  }
  function StreamingJsonEncoder_init_$Create$(output, json, mode, modeReuseCache) {
    return StreamingJsonEncoder_init_$Init$(output, json, mode, modeReuseCache, Object.create(StreamingJsonEncoder.prototype));
  }
  function _get_configuration__311089819_0($this) {
    return $this.configuration_1;
  }
  function _set_forceQuoting__728008777($this, _set____804775014) {
    $this.forceQuoting_1 = _set____804775014;
  }
  function _get_forceQuoting__1668161597($this) {
    return $this.forceQuoting_1;
  }
  function _set_writePolymorphic__2658397760($this, _set____804775014) {
    $this.writePolymorphic_1 = _set____804775014;
  }
  function _get_writePolymorphic__122186804($this) {
    return $this.writePolymorphic_1;
  }
  function encodeTypeInfo($this, descriptor) {
    $this.composer_1.nextItem_403h3p_k$();
    $this.encodeString_90sumj_k$($this.configuration_1._get_classDiscriminator__1173799943_jeultz_k$());
    $this.composer_1.print_csf5ip_k$(_get_COLON__2205721714());
    Unit_getInstance();
    $this.composer_1.space_pnmf91_k$();
    $this.encodeString_90sumj_k$(descriptor._get_serialName__1025298892_gyfpos_k$());
  }
  function Composer(sb, json) {
    this.sb_1 = sb;
    this.json_1 = json;
    this.level_1 = 0;
    this.writingFirst_1 = true;
  }
  Composer.prototype._get_sb__1413130524_ndcaho_k$ = function () {
    return this.sb_1;
  };
  Composer.prototype._get_writingFirst__947635351_fo7447_k$ = function () {
    return this.writingFirst_1;
  };
  Composer.prototype.indent_cv7m3p_k$ = function () {
    this.writingFirst_1 = true;
    var tmp0_this = this;
    var tmp1 = tmp0_this.level_1;
    tmp0_this.level_1 = tmp1 + 1 | 0;
    Unit_getInstance();
  };
  Composer.prototype.unIndent_456c0k_k$ = function () {
    var tmp0_this = this;
    var tmp1 = tmp0_this.level_1;
    tmp0_this.level_1 = tmp1 - 1 | 0;
    Unit_getInstance();
  };
  Composer.prototype.nextItem_403h3p_k$ = function () {
    this.writingFirst_1 = false;
    if (this.json_1._get_configuration__311089819_557qfv_k$()._get_prettyPrint__1073381530_hr2ahm_k$()) {
      this.print_a3n2jw_k$('\n');
      Unit_getInstance();
      {
        var tmp0_repeat_0 = this.level_1;
        {
        }
        var inductionVariable = 0;
        if (inductionVariable < tmp0_repeat_0)
          do {
            var index_2 = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            {
              this.print_a3n2jw_k$(this.json_1._get_configuration__311089819_557qfv_k$()._get_prettyPrintIndent__3554969678_c8kpte_k$());
              Unit_getInstance();
            }
          }
           while (inductionVariable < tmp0_repeat_0);
      }
    }
  };
  Composer.prototype.space_pnmf91_k$ = function () {
    if (this.json_1._get_configuration__311089819_557qfv_k$()._get_prettyPrint__1073381530_hr2ahm_k$()) {
      this.print_csf5ip_k$(_Char___init__impl__380027157(32));
      Unit_getInstance();
    }
  };
  Composer.prototype.print_csf5ip_k$ = function (v) {
    return this.sb_1.append_t8oh9e_k$(v);
  };
  Composer.prototype.print_a3n2jw_k$ = function (v) {
    return this.sb_1.append_ssq29y_k$(v);
  };
  Composer.prototype.print_tnwcyn_k$ = function (v) {
    return this.sb_1.append_t8pm91_k$(v);
  };
  Composer.prototype.print_2x9je4_k$ = function (v) {
    return this.sb_1.append_t8pm91_k$(v);
  };
  Composer.prototype.print_csevkz_k$ = function (v) {
    return this.sb_1.append_t8pm91_k$(v);
  };
  Composer.prototype.print_tgtksf_k$ = function (v) {
    return this.sb_1.append_t8pm91_k$(v);
  };
  Composer.prototype.print_4ztws4_k$ = function (v) {
    return this.sb_1.append_t8pm91_k$(v);
  };
  Composer.prototype.print_csl1w7_k$ = function (v) {
    return this.sb_1.append_t8pm91_k$(v);
  };
  Composer.prototype.print_9ttg5v_k$ = function (v) {
    return this.sb_1.append_a1id5s_k$(v);
  };
  Composer.prototype.printQuoted_vsh1i5_k$ = function (value) {
    return printQuoted(this.sb_1, value);
  };
  Composer.$metadata$ = {
    simpleName: 'Composer',
    kind: 'class',
    interfaces: []
  };
  function StreamingJsonEncoder(composer, json, mode, modeReuseCache) {
    AbstractEncoder.call(this);
    this.composer_1 = composer;
    this.json_1 = json;
    this.mode_1 = mode;
    this.modeReuseCache_1 = modeReuseCache;
    this.serializersModule_1 = this.json_1._get_serializersModule__364239364_60uww4_k$();
    this.configuration_1 = this.json_1._get_configuration__311089819_557qfv_k$();
    this.forceQuoting_1 = false;
    this.writePolymorphic_1 = false;
    var i = this.mode_1._get_ordinal__3363892928_fec5kw_k$();
    if (!(this.modeReuseCache_1[i] === null) ? true : !(this.modeReuseCache_1[i] === this))
      this.modeReuseCache_1[i] = this;
  }
  StreamingJsonEncoder.prototype._get_json__801013347_d8whur_k$ = function () {
    return this.json_1;
  };
  StreamingJsonEncoder.prototype._get_serializersModule__364239364_60uww4_k$ = function () {
    return this.serializersModule_1;
  };
  StreamingJsonEncoder.prototype.encodeJsonElement_javf71_k$ = function (element) {
    this.encodeSerializableValue_bps9ot_k$(JsonElementSerializer_getInstance(), element);
  };
  StreamingJsonEncoder.prototype.shouldEncodeElementDefault_m92hrm_k$ = function (descriptor, index) {
    return this.configuration_1._get_encodeDefaults__2255426691_xqaflp_k$();
  };
  StreamingJsonEncoder.prototype.encodeSerializableValue_bps9ot_k$ = function (serializer, value) {
    var tmp$ret$0;
    $l$block: {
      var tmp;
      if (!(serializer instanceof AbstractPolymorphicSerializer)) {
        tmp = true;
      } else {
        {
          tmp = this._get_json__801013347_d8whur_k$()._get_configuration__311089819_557qfv_k$()._get_useArrayPolymorphism__4259793650_kxw5q_k$();
        }
      }
      if (tmp) {
        serializer.serialize_32qylj_k$(this, value);
        tmp$ret$0 = Unit_getInstance();
        break $l$block;
      } else {
      }
      var tmp_0 = isInterface(serializer, SerializationStrategy) ? serializer : THROW_CCE();
      var actualSerializer_1 = findActualSerializer$accessor$1hu6t4x(this, tmp_0, isObject(value) ? value : THROW_CCE());
      {
        this.writePolymorphic_1 = true;
      }
      actualSerializer_1.serialize_32qylj_k$(this, value);
    }
  };
  StreamingJsonEncoder.prototype.beginStructure_dv3yt3_k$ = function (descriptor) {
    var newMode = switchMode(this.json_1, descriptor);
    if (!equals(new Char(newMode._get_begin__3114373192_c9kma1_k$()), new Char(_get_INVALID__3532429338()))) {
      this.composer_1.print_csf5ip_k$(newMode._get_begin__3114373192_c9kma1_k$());
      Unit_getInstance();
      this.composer_1.indent_cv7m3p_k$();
    }
    if (this.writePolymorphic_1) {
      this.writePolymorphic_1 = false;
      encodeTypeInfo(this, descriptor);
    }
    if (this.mode_1.equals(newMode)) {
      return this;
    }
    var tmp0_elvis_lhs = this.modeReuseCache_1[newMode._get_ordinal__3363892928_fec5kw_k$()];
    return tmp0_elvis_lhs == null ? new StreamingJsonEncoder(this.composer_1, this.json_1, newMode, this.modeReuseCache_1) : tmp0_elvis_lhs;
  };
  StreamingJsonEncoder.prototype.endStructure_e64gd4_k$ = function (descriptor) {
    if (!equals(new Char(this.mode_1._get_end__856968982_ypp5lj_k$()), new Char(_get_INVALID__3532429338()))) {
      this.composer_1.unIndent_456c0k_k$();
      this.composer_1.nextItem_403h3p_k$();
      this.composer_1.print_csf5ip_k$(this.mode_1._get_end__856968982_ypp5lj_k$());
      Unit_getInstance();
    }
  };
  StreamingJsonEncoder.prototype.encodeElement_gaiom2_k$ = function (descriptor, index) {
    var tmp0_subject = this.mode_1;
    var tmp0 = tmp0_subject._get_ordinal__3363892928_fec5kw_k$();
    switch (tmp0) {
      case 1:
        if (!this.composer_1.writingFirst_1) {
          this.composer_1.print_csf5ip_k$(_get_COMMA__2205749180());
          Unit_getInstance();
        }

        this.composer_1.nextItem_403h3p_k$();
        break;
      case 2:
        if (!this.composer_1.writingFirst_1) {
          var tmp = this;
          var tmp_0;
          if (index % 2 === 0) {
            this.composer_1.print_csf5ip_k$(_get_COMMA__2205749180());
            Unit_getInstance();
            this.composer_1.nextItem_403h3p_k$();
            tmp_0 = true;
          } else {
            this.composer_1.print_csf5ip_k$(_get_COLON__2205721714());
            Unit_getInstance();
            this.composer_1.space_pnmf91_k$();
            tmp_0 = false;
          }
          tmp.forceQuoting_1 = tmp_0;
        } else {
          this.forceQuoting_1 = true;
          this.composer_1.nextItem_403h3p_k$();
        }

        break;
      case 3:
        if (index === 0)
          this.forceQuoting_1 = true;
        if (index === 1) {
          this.composer_1.print_csf5ip_k$(_get_COMMA__2205749180());
          Unit_getInstance();
          this.composer_1.space_pnmf91_k$();
          this.forceQuoting_1 = false;
        }

        break;
      default:
        if (!this.composer_1.writingFirst_1) {
          this.composer_1.print_csf5ip_k$(_get_COMMA__2205749180());
          Unit_getInstance();
        }

        this.composer_1.nextItem_403h3p_k$();
        this.encodeString_90sumj_k$(descriptor.getElementName_ykpypc_k$(index));
        this.composer_1.print_csf5ip_k$(_get_COLON__2205721714());
        Unit_getInstance();
        this.composer_1.space_pnmf91_k$();
        break;
    }
    return true;
  };
  StreamingJsonEncoder.prototype.encodeNull_ek2hec_k$ = function () {
    this.composer_1.print_a3n2jw_k$(_get_NULL__774226340());
    Unit_getInstance();
  };
  StreamingJsonEncoder.prototype.encodeBoolean_6cztl5_k$ = function (value) {
    if (this.forceQuoting_1)
      this.encodeString_90sumj_k$(value.toString());
    else {
      this.composer_1.print_9ttg5v_k$(value);
      Unit_getInstance();
    }
  };
  StreamingJsonEncoder.prototype.encodeByte_gpyndp_k$ = function (value) {
    if (this.forceQuoting_1)
      this.encodeString_90sumj_k$(value.toString());
    else {
      this.composer_1.print_csevkz_k$(value);
      Unit_getInstance();
    }
  };
  StreamingJsonEncoder.prototype.encodeShort_rh3vxz_k$ = function (value) {
    if (this.forceQuoting_1)
      this.encodeString_90sumj_k$(value.toString());
    else {
      this.composer_1.print_tgtksf_k$(value);
      Unit_getInstance();
    }
  };
  StreamingJsonEncoder.prototype.encodeInt_5vxmon_k$ = function (value) {
    if (this.forceQuoting_1)
      this.encodeString_90sumj_k$(value.toString());
    else {
      this.composer_1.print_4ztws4_k$(value);
      Unit_getInstance();
    }
  };
  StreamingJsonEncoder.prototype.encodeLong_rk3ab9_k$ = function (value) {
    if (this.forceQuoting_1)
      this.encodeString_90sumj_k$(value.toString());
    else {
      this.composer_1.print_csl1w7_k$(value);
      Unit_getInstance();
    }
  };
  StreamingJsonEncoder.prototype.encodeFloat_f5fde1_k$ = function (value) {
    if (this.forceQuoting_1)
      this.encodeString_90sumj_k$(value.toString());
    else {
      this.composer_1.print_tnwcyn_k$(value);
      Unit_getInstance();
    }
    if (!this.configuration_1._get_allowSpecialFloatingPointValues__1768724981_t91wxh_k$() ? !isFinite(value) : false) {
      throw InvalidFloatingPointEncoded(value, this.composer_1.sb_1.toString());
    }
  };
  StreamingJsonEncoder.prototype.encodeDouble_79ztsb_k$ = function (value) {
    if (this.forceQuoting_1)
      this.encodeString_90sumj_k$(value.toString());
    else {
      this.composer_1.print_2x9je4_k$(value);
      Unit_getInstance();
    }
    if (!this.configuration_1._get_allowSpecialFloatingPointValues__1768724981_t91wxh_k$() ? !isFinite_0(value) : false) {
      throw InvalidFloatingPointEncoded(value, this.composer_1.sb_1.toString());
    }
  };
  StreamingJsonEncoder.prototype.encodeChar_kkx54x_k$ = function (value) {
    this.encodeString_90sumj_k$(toString_0(value));
  };
  StreamingJsonEncoder.prototype.encodeString_90sumj_k$ = function (value) {
    return this.composer_1.printQuoted_vsh1i5_k$(value);
  };
  StreamingJsonEncoder.prototype.encodeEnum_dzauii_k$ = function (enumDescriptor, index) {
    this.encodeString_90sumj_k$(enumDescriptor.getElementName_ykpypc_k$(index));
  };
  StreamingJsonEncoder.$metadata$ = {
    simpleName: 'StreamingJsonEncoder',
    kind: 'class',
    interfaces: [JsonEncoder]
  };
  function _get_ESCAPE_CHARS__601239212() {
    init_properties_StringOps_kt_977888371();
    return ESCAPE_CHARS;
  }
  var ESCAPE_CHARS;
  function toHexChar(i) {
    init_properties_StringOps_kt_977888371();
    var d = i & 15;
    return d < 10 ? numberToChar(d + 48 | 0) : numberToChar((d - 10 | 0) + 97 | 0);
  }
  function printQuoted(_this__1828080292, value) {
    init_properties_StringOps_kt_977888371();
    _this__1828080292.append_t8oh9e_k$(_get_STRING__1121561882());
    Unit_getInstance();
    var lastPos = 0;
    var length = value.length;
    var inductionVariable = 0;
    if (inductionVariable < length)
      $l$loop_0: do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var c = Char__toInt_impl_2402388783(charSequenceGet(value, i));
        if (c >= _get_ESCAPE_CHARS__601239212().length)
          continue $l$loop_0;
        var tmp1_elvis_lhs = _get_ESCAPE_CHARS__601239212()[c];
        var tmp;
        if (tmp1_elvis_lhs == null) {
          continue $l$loop_0;
        } else {
          tmp = tmp1_elvis_lhs;
        }
        var esc = tmp;
        _this__1828080292.append_tbojcw_k$(value, lastPos, i);
        Unit_getInstance();
        _this__1828080292.append_ssq29y_k$(esc);
        Unit_getInstance();
        lastPos = i + 1 | 0;
      }
       while (inductionVariable < length);
    _this__1828080292.append_tbojcw_k$(value, lastPos, length);
    Unit_getInstance();
    _this__1828080292.append_t8oh9e_k$(_get_STRING__1121561882());
    Unit_getInstance();
  }
  function toBooleanStrict(_this__1828080292) {
    init_properties_StringOps_kt_977888371();
    var tmp0_elvis_lhs = toBooleanStrictOrNull(_this__1828080292);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalStateException_init_$Create$(_this__1828080292 + ' does not represent a Boolean');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function toBooleanStrictOrNull(_this__1828080292) {
    init_properties_StringOps_kt_977888371();
    return equals_0(_this__1828080292, 'true', true) ? true : equals_0(_this__1828080292, 'false', true) ? false : null;
  }
  var properties_initialized_StringOps_kt_1994189263;
  function init_properties_StringOps_kt_977888371() {
    if (!properties_initialized_StringOps_kt_1994189263) {
      properties_initialized_StringOps_kt_1994189263 = true;
      var tmp$ret$1;
      $l$block_0: {
        var tmp$ret$0;
        $l$block: {
          tmp$ret$0 = fillArrayVal(Array(128), null);
          break $l$block;
        }
        var tmp0_apply_0 = tmp$ret$0;
        {
        }
        {
          var inductionVariable = 0;
          if (inductionVariable <= 31)
            do {
              var c_3 = inductionVariable;
              inductionVariable = inductionVariable + 1 | 0;
              var c1_4 = toHexChar(c_3 >> 12);
              var c2_5 = toHexChar(c_3 >> 8);
              var c3_6 = toHexChar(c_3 >> 4);
              var c4_7 = toHexChar(c_3);
              tmp0_apply_0[c_3] = '\\u' + new Char(c1_4) + new Char(c2_5) + new Char(c3_6) + new Char(c4_7);
            }
             while (inductionVariable <= 31);
          tmp0_apply_0[34] = '\\"';
          tmp0_apply_0[92] = '\\\\';
          tmp0_apply_0[9] = '\\t';
          tmp0_apply_0[8] = '\\b';
          tmp0_apply_0[10] = '\\n';
          tmp0_apply_0[13] = '\\r';
          tmp0_apply_0[12] = '\\f';
        }
        tmp$ret$1 = tmp0_apply_0;
        break $l$block_0;
      }
      ESCAPE_CHARS = tmp$ret$1;
    }
  }
  function readJson(_this__1828080292, element, deserializer) {
    var tmp0_subject = element;
    var tmp;
    if (tmp0_subject instanceof JsonObject) {
      tmp = JsonTreeDecoder_init_$Create$(_this__1828080292, element, null, null, 12, null);
    } else {
      if (tmp0_subject instanceof JsonArray) {
        tmp = new JsonTreeListDecoder(_this__1828080292, element);
      } else {
        var tmp_0;
        if (tmp0_subject instanceof JsonLiteral) {
          tmp_0 = true;
        } else {
          {
            tmp_0 = equals(tmp0_subject, JsonNull_getInstance());
          }
        }
        if (tmp_0) {
          tmp = new JsonPrimitiveDecoder(_this__1828080292, element instanceof JsonPrimitive ? element : THROW_CCE());
        } else {
          {
            noWhenBranchMatchedException();
          }
        }
      }
    }
    var input = tmp;
    return input.decodeSerializableValue_xpp80o_k$(deserializer);
  }
  function getElementIndexOrThrow(_this__1828080292, name) {
    var index = _this__1828080292.getElementIndex_2hwbkl_k$(name);
    if (index === Companion_getInstance()._get_UNKNOWN_NAME__1523688395_p75xhn_k$())
      throw SerializationException_init_$Create$(_this__1828080292._get_serialName__1025298892_gyfpos_k$() + " does not contain element with name '" + name + "'");
    return index;
  }
  function currentObject($this) {
    var tmp0_safe_receiver = $this._get_currentTagOrNull__3083342688_k1dbj4_k$();
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
          tmp$ret$0 = $this.currentElement_sx22im_k$(tmp0_safe_receiver);
          break $l$block;
        }
        tmp$ret$1 = tmp$ret$0;
        break $l$block_0;
      }
      tmp = tmp$ret$1;
    }
    var tmp1_elvis_lhs = tmp;
    return tmp1_elvis_lhs == null ? $this._get_value__3683422336_a43j40_k$() : tmp1_elvis_lhs;
  }
  function primitive(_this__1828080292, $this, primitive, block) {
    try {
      return block(_this__1828080292);
    } catch ($p) {
      if ($p instanceof Error) {
        throw JsonDecodingException_0(-1, "Failed to parse '" + primitive + "'", toString(currentObject($this)));
      } else {
        {
          throw $p;
        }
      }
    }
  }
  function AbstractJsonTreeDecoder(json, value) {
    NamedValueDecoder.call(this);
    this.json_1 = json;
    this.value_1 = value;
    this.configuration_1 = this._get_json__801013347_d8whur_k$()._get_configuration__311089819_557qfv_k$();
  }
  AbstractJsonTreeDecoder.prototype._get_json__801013347_d8whur_k$ = function () {
    return this.json_1;
  };
  AbstractJsonTreeDecoder.prototype._get_value__3683422336_a43j40_k$ = function () {
    return this.value_1;
  };
  AbstractJsonTreeDecoder.prototype._get_serializersModule__364239364_60uww4_k$ = function () {
    return this._get_json__801013347_d8whur_k$()._get_serializersModule__364239364_60uww4_k$();
  };
  AbstractJsonTreeDecoder.prototype._get_configuration__311089819_557qfv_k$ = function () {
    return this.configuration_1;
  };
  AbstractJsonTreeDecoder.prototype.decodeJsonElement_6lz9ye_k$ = function () {
    return currentObject(this);
  };
  AbstractJsonTreeDecoder.prototype.decodeSerializableValue_xpp80o_k$ = function (deserializer) {
    return decodeSerializableValuePolymorphic(this, deserializer);
  };
  AbstractJsonTreeDecoder.prototype.composeName_t9idc5_k$ = function (parentName, childName) {
    return childName;
  };
  AbstractJsonTreeDecoder.prototype.beginStructure_dv3yt3_k$ = function (descriptor) {
    var currentObject_0 = currentObject(this);
    var tmp0_subject = descriptor._get_kind__801637687_d99vlj_k$();
    var tmp;
    var tmp_0;
    if (equals(tmp0_subject, LIST_getInstance())) {
      tmp_0 = true;
    } else {
      tmp_0 = tmp0_subject instanceof PolymorphicKind;
    }
    if (tmp_0) {
      var tmp_1 = this._get_json__801013347_d8whur_k$();
      var tmp$ret$0;
      $l$block: {
        if (!(currentObject_0 instanceof JsonArray)) {
          throw JsonDecodingException_1(-1, 'Expected ' + getKClass(JsonArray) + ' as the serialized body of ' + descriptor._get_serialName__1025298892_gyfpos_k$() + ', but had ' + getKClassFromExpression(currentObject_0));
        } else {
        }
        tmp$ret$0 = currentObject_0;
        break $l$block;
      }
      tmp = new JsonTreeListDecoder(tmp_1, tmp$ret$0);
    } else {
      if (equals(tmp0_subject, MAP_getInstance())) {
        var tmp$ret$5;
        $l$block_4: {
          var tmp0_selectMapMode_0 = this._get_json__801013347_d8whur_k$();
          var keyDescriptor_1 = descriptor.getElementDescriptor_sqz94k_k$(0);
          var keyKind_2 = keyDescriptor_1._get_kind__801637687_d99vlj_k$();
          var tmp_2;
          var tmp_3;
          if (keyKind_2 instanceof PrimitiveKind) {
            tmp_3 = true;
          } else {
            {
              tmp_3 = equals(keyKind_2, ENUM_getInstance());
            }
          }
          if (tmp_3) {
            var tmp$ret$2;
            $l$block_1: {
              var tmp_4 = this._get_json__801013347_d8whur_k$();
              var tmp$ret$1;
              $l$block_0: {
                if (!(currentObject_0 instanceof JsonObject)) {
                  throw JsonDecodingException_1(-1, 'Expected ' + getKClass(JsonObject) + ' as the serialized body of ' + descriptor._get_serialName__1025298892_gyfpos_k$() + ', but had ' + getKClassFromExpression(currentObject_0));
                } else {
                }
                tmp$ret$1 = currentObject_0;
                break $l$block_0;
              }
              tmp$ret$2 = new JsonTreeMapDecoder(tmp_4, tmp$ret$1);
              break $l$block_1;
            }
            tmp_2 = tmp$ret$2;
          } else {
            if (tmp0_selectMapMode_0._get_configuration__311089819_557qfv_k$()._get_allowStructuredMapKeys__141016373_2bygxh_k$()) {
              var tmp$ret$4;
              $l$block_3: {
                var tmp_5 = this._get_json__801013347_d8whur_k$();
                var tmp$ret$3;
                $l$block_2: {
                  if (!(currentObject_0 instanceof JsonArray)) {
                    throw JsonDecodingException_1(-1, 'Expected ' + getKClass(JsonArray) + ' as the serialized body of ' + descriptor._get_serialName__1025298892_gyfpos_k$() + ', but had ' + getKClassFromExpression(currentObject_0));
                  } else {
                  }
                  tmp$ret$3 = currentObject_0;
                  break $l$block_2;
                }
                tmp$ret$4 = new JsonTreeListDecoder(tmp_5, tmp$ret$3);
                break $l$block_3;
              }
              tmp_2 = tmp$ret$4;
            } else {
              {
                throw InvalidKeyKindException(keyDescriptor_1);
              }
            }
          }
          tmp$ret$5 = tmp_2;
          break $l$block_4;
        }
        tmp = tmp$ret$5;
      } else {
        {
          var tmp_6 = this._get_json__801013347_d8whur_k$();
          var tmp$ret$6;
          $l$block_5: {
            if (!(currentObject_0 instanceof JsonObject)) {
              throw JsonDecodingException_1(-1, 'Expected ' + getKClass(JsonObject) + ' as the serialized body of ' + descriptor._get_serialName__1025298892_gyfpos_k$() + ', but had ' + getKClassFromExpression(currentObject_0));
            } else {
            }
            tmp$ret$6 = currentObject_0;
            break $l$block_5;
          }
          var tmp_7 = tmp$ret$6;
          tmp = JsonTreeDecoder_init_$Create$(tmp_6, tmp_7, null, null, 12, null);
        }
      }
    }
    return tmp;
  };
  AbstractJsonTreeDecoder.prototype.endStructure_e64gd4_k$ = function (descriptor) {
  };
  AbstractJsonTreeDecoder.prototype.decodeNotNullMark_us4ba1_k$ = function () {
    var tmp = currentObject(this);
    return !(tmp instanceof JsonNull);
  };
  AbstractJsonTreeDecoder.prototype.getValue_77wvui_k$ = function (tag) {
    var currentElement = this.currentElement_sx22im_k$(tag);
    var tmp0_elvis_lhs = currentElement instanceof JsonPrimitive ? currentElement : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw JsonDecodingException_0(-1, 'Expected JsonPrimitive at ' + tag + ', found ' + currentElement, toString(currentObject(this)));
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  AbstractJsonTreeDecoder.prototype.decodeTaggedEnum_pfrl5l_k$ = function (tag, enumDescriptor) {
    return getElementIndexOrThrow(enumDescriptor, this.getValue_77wvui_k$(tag)._get_content__1558689208_ps04ag_k$());
  };
  AbstractJsonTreeDecoder.prototype.decodeTaggedEnum_jxsvth_k$ = function (tag, enumDescriptor) {
    return this.decodeTaggedEnum_pfrl5l_k$((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE(), enumDescriptor);
  };
  AbstractJsonTreeDecoder.prototype.decodeTaggedNull_9cvjhc_k$ = function (tag) {
    return null;
  };
  AbstractJsonTreeDecoder.prototype.decodeTaggedNull_x1ibl0_k$ = function (tag) {
    return this.decodeTaggedNull_9cvjhc_k$((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  AbstractJsonTreeDecoder.prototype.decodeTaggedNotNullMark_o4mjck_k$ = function (tag) {
    return !(this.currentElement_sx22im_k$(tag) === JsonNull_getInstance());
  };
  AbstractJsonTreeDecoder.prototype.decodeTaggedNotNullMark_lc2tyw_k$ = function (tag) {
    return this.decodeTaggedNotNullMark_o4mjck_k$((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  AbstractJsonTreeDecoder.prototype.decodeTaggedBoolean_69nto3_k$ = function (tag) {
    var value = this.getValue_77wvui_k$(tag);
    if (!this._get_json__801013347_d8whur_k$()._get_configuration__311089819_557qfv_k$()._get_isLenient__4131730692_2p6q64_k$()) {
      var literal = value instanceof JsonLiteral ? value : THROW_CCE();
      if (literal._get_isString__3315263824_g7ag1c_k$())
        throw JsonDecodingException_0(-1, "Boolean literal for key '" + tag + "' should be unquoted.\n" + _get_lenientHint__2822994611(), toString(currentObject(this)));
    }
    return _get_boolean__4132074473(value);
  };
  AbstractJsonTreeDecoder.prototype.decodeTaggedBoolean_kbjyq1_k$ = function (tag) {
    return this.decodeTaggedBoolean_69nto3_k$((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  AbstractJsonTreeDecoder.prototype.decodeTaggedByte_z232qn_k$ = function (tag) {
    var tmp$ret$1;
    $l$block_0: {
      var tmp0_primitive_0 = this.getValue_77wvui_k$(tag);
      try {
        var tmp$ret$0;
        $l$block: {
          tmp$ret$0 = toByte_0(_get_int__857088642(tmp0_primitive_0));
          break $l$block;
        }
        tmp$ret$1 = tmp$ret$0;
        break $l$block_0;
      } catch ($p) {
        if ($p instanceof Error) {
          throw JsonDecodingException_0(-1, "Failed to parse 'byte'", toString(currentObject(this)));
        } else {
          {
            throw $p;
          }
        }
      }
    }
    return tmp$ret$1;
  };
  AbstractJsonTreeDecoder.prototype.decodeTaggedByte_weg8ir_k$ = function (tag) {
    return this.decodeTaggedByte_z232qn_k$((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  AbstractJsonTreeDecoder.prototype.decodeTaggedShort_d78pwf_k$ = function (tag) {
    var tmp$ret$1;
    $l$block_0: {
      var tmp0_primitive_0 = this.getValue_77wvui_k$(tag);
      try {
        var tmp$ret$0;
        $l$block: {
          tmp$ret$0 = toShort_0(_get_int__857088642(tmp0_primitive_0));
          break $l$block;
        }
        tmp$ret$1 = tmp$ret$0;
        break $l$block_0;
      } catch ($p) {
        if ($p instanceof Error) {
          throw JsonDecodingException_0(-1, "Failed to parse 'short'", toString(currentObject(this)));
        } else {
          {
            throw $p;
          }
        }
      }
    }
    return tmp$ret$1;
  };
  AbstractJsonTreeDecoder.prototype.decodeTaggedShort_9lw2oz_k$ = function (tag) {
    return this.decodeTaggedShort_d78pwf_k$((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  AbstractJsonTreeDecoder.prototype.decodeTaggedInt_g5h384_k$ = function (tag) {
    var tmp$ret$1;
    $l$block_0: {
      var tmp0_primitive_0 = this.getValue_77wvui_k$(tag);
      try {
        var tmp$ret$0;
        $l$block: {
          tmp$ret$0 = _get_int__857088642(tmp0_primitive_0);
          break $l$block;
        }
        tmp$ret$1 = tmp$ret$0;
        break $l$block_0;
      } catch ($p) {
        if ($p instanceof Error) {
          throw JsonDecodingException_0(-1, "Failed to parse 'int'", toString(currentObject(this)));
        } else {
          {
            throw $p;
          }
        }
      }
    }
    return tmp$ret$1;
  };
  AbstractJsonTreeDecoder.prototype.decodeTaggedInt_rqx040_k$ = function (tag) {
    return this.decodeTaggedInt_g5h384_k$((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  AbstractJsonTreeDecoder.prototype.decodeTaggedLong_vws05x_k$ = function (tag) {
    var tmp$ret$1;
    $l$block_0: {
      var tmp0_primitive_0 = this.getValue_77wvui_k$(tag);
      try {
        var tmp$ret$0;
        $l$block: {
          tmp$ret$0 = _get_long__802740047(tmp0_primitive_0);
          break $l$block;
        }
        tmp$ret$1 = tmp$ret$0;
        break $l$block_0;
      } catch ($p) {
        if ($p instanceof Error) {
          throw JsonDecodingException_0(-1, "Failed to parse 'long'", toString(currentObject(this)));
        } else {
          {
            throw $p;
          }
        }
      }
    }
    return tmp$ret$1;
  };
  AbstractJsonTreeDecoder.prototype.decodeTaggedLong_z7jgpd_k$ = function (tag) {
    return this.decodeTaggedLong_vws05x_k$((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  AbstractJsonTreeDecoder.prototype.decodeTaggedFloat_wuaksh_k$ = function (tag) {
    var tmp$ret$1;
    $l$block_0: {
      var tmp0_primitive_0 = this.getValue_77wvui_k$(tag);
      try {
        var tmp$ret$0;
        $l$block: {
          tmp$ret$0 = _get_float__3235585269(tmp0_primitive_0);
          break $l$block;
        }
        tmp$ret$1 = tmp$ret$0;
        break $l$block_0;
      } catch ($p) {
        if ($p instanceof Error) {
          throw JsonDecodingException_0(-1, "Failed to parse 'float'", toString(currentObject(this)));
        } else {
          {
            throw $p;
          }
        }
      }
    }
    var result = tmp$ret$1;
    var specialFp = this._get_json__801013347_d8whur_k$()._get_configuration__311089819_557qfv_k$()._get_allowSpecialFloatingPointValues__1768724981_t91wxh_k$();
    if (specialFp ? true : isFinite(result))
      return result;
    throw InvalidFloatingPointDecoded(result, tag, toString(currentObject(this)));
  };
  AbstractJsonTreeDecoder.prototype.decodeTaggedFloat_azhupv_k$ = function (tag) {
    return this.decodeTaggedFloat_wuaksh_k$((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  AbstractJsonTreeDecoder.prototype.decodeTaggedDouble_c9vp4a_k$ = function (tag) {
    var tmp$ret$1;
    $l$block_0: {
      var tmp0_primitive_0 = this.getValue_77wvui_k$(tag);
      try {
        var tmp$ret$0;
        $l$block: {
          tmp$ret$0 = _get_double__4130307418(tmp0_primitive_0);
          break $l$block;
        }
        tmp$ret$1 = tmp$ret$0;
        break $l$block_0;
      } catch ($p) {
        if ($p instanceof Error) {
          throw JsonDecodingException_0(-1, "Failed to parse 'double'", toString(currentObject(this)));
        } else {
          {
            throw $p;
          }
        }
      }
    }
    var result = tmp$ret$1;
    var specialFp = this._get_json__801013347_d8whur_k$()._get_configuration__311089819_557qfv_k$()._get_allowSpecialFloatingPointValues__1768724981_t91wxh_k$();
    if (specialFp ? true : isFinite_0(result))
      return result;
    throw InvalidFloatingPointDecoded(result, tag, toString(currentObject(this)));
  };
  AbstractJsonTreeDecoder.prototype.decodeTaggedDouble_qq3qze_k$ = function (tag) {
    return this.decodeTaggedDouble_c9vp4a_k$((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  AbstractJsonTreeDecoder.prototype.decodeTaggedChar_ouxcj4_k$ = function (tag) {
    var tmp$ret$1;
    $l$block_0: {
      var tmp0_primitive_0 = this.getValue_77wvui_k$(tag);
      try {
        var tmp$ret$0;
        $l$block: {
          tmp$ret$0 = single(tmp0_primitive_0._get_content__1558689208_ps04ag_k$());
          break $l$block;
        }
        tmp$ret$1 = tmp$ret$0;
        break $l$block_0;
      } catch ($p) {
        if ($p instanceof Error) {
          throw JsonDecodingException_0(-1, "Failed to parse 'char'", toString(currentObject(this)));
        } else {
          {
            throw $p;
          }
        }
      }
    }
    return tmp$ret$1;
  };
  AbstractJsonTreeDecoder.prototype.decodeTaggedChar_xsxsj0_k$ = function (tag) {
    return this.decodeTaggedChar_ouxcj4_k$((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  AbstractJsonTreeDecoder.prototype.decodeTaggedString_9404dm_k$ = function (tag) {
    var value = this.getValue_77wvui_k$(tag);
    if (!this._get_json__801013347_d8whur_k$()._get_configuration__311089819_557qfv_k$()._get_isLenient__4131730692_2p6q64_k$()) {
      var literal = value instanceof JsonLiteral ? value : THROW_CCE();
      if (!literal._get_isString__3315263824_g7ag1c_k$())
        throw JsonDecodingException_0(-1, "String literal for key '" + tag + "' should be quoted.\n" + _get_lenientHint__2822994611(), toString(currentObject(this)));
    }
    return value._get_content__1558689208_ps04ag_k$();
  };
  AbstractJsonTreeDecoder.prototype.decodeTaggedString_5es7hi_k$ = function (tag) {
    return this.decodeTaggedString_9404dm_k$((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  AbstractJsonTreeDecoder.$metadata$ = {
    simpleName: 'AbstractJsonTreeDecoder',
    kind: 'class',
    interfaces: [JsonDecoder]
  };
  function JsonTreeDecoder_init_$Init$(json, value, polyDiscriminator, polyDescriptor, $mask0, $marker, $this) {
    if (!(($mask0 & 4) === 0))
      polyDiscriminator = null;
    if (!(($mask0 & 8) === 0))
      polyDescriptor = null;
    JsonTreeDecoder.call($this, json, value, polyDiscriminator, polyDescriptor);
    return $this;
  }
  function JsonTreeDecoder_init_$Create$(json, value, polyDiscriminator, polyDescriptor, $mask0, $marker) {
    return JsonTreeDecoder_init_$Init$(json, value, polyDiscriminator, polyDescriptor, $mask0, $marker, Object.create(JsonTreeDecoder.prototype));
  }
  function _get_polyDiscriminator__1459915553($this) {
    return $this.polyDiscriminator_1;
  }
  function _get_polyDescriptor__1219261712($this) {
    return $this.polyDescriptor_1;
  }
  function _set_position__3963083214($this, _set____804775014) {
    $this.position_1 = _set____804775014;
  }
  function _get_position__3188952002($this) {
    return $this.position_1;
  }
  function coerceInputValue_0($this, descriptor, index, tag) {
    var elementDescriptor = descriptor.getElementDescriptor_sqz94k_k$(index);
    var tmp;
    var tmp_0 = $this.currentElement_sx22im_k$(tag);
    if (tmp_0 instanceof JsonNull) {
      tmp = !elementDescriptor._get_isNullable__336674624_5kg3sw_k$();
    } else {
      {
        tmp = false;
      }
    }
    if (tmp)
      return true;
    else {
    }
    if (equals(elementDescriptor._get_kind__801637687_d99vlj_k$(), ENUM_getInstance())) {
      var tmp_1 = $this.currentElement_sx22im_k$(tag);
      var tmp0_safe_receiver = tmp_1 instanceof JsonPrimitive ? tmp_1 : null;
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : _get_contentOrNull__3948604750(tmp0_safe_receiver);
      var tmp_2;
      if (tmp1_elvis_lhs == null) {
        return false;
      } else {
        tmp_2 = tmp1_elvis_lhs;
      }
      var enumValue = tmp_2;
      var enumIndex = elementDescriptor.getElementIndex_2hwbkl_k$(enumValue);
      if (enumIndex === Companion_getInstance()._get_UNKNOWN_NAME__1523688395_p75xhn_k$())
        return true;
    }
    return false;
  }
  function JsonTreeDecoder(json, value, polyDiscriminator, polyDescriptor) {
    AbstractJsonTreeDecoder.call(this, json, value);
    this.value_2 = value;
    this.polyDiscriminator_1 = polyDiscriminator;
    this.polyDescriptor_1 = polyDescriptor;
    this.position_1 = 0;
  }
  JsonTreeDecoder.prototype._get_value__3683422336_a43j40_k$ = function () {
    return this.value_2;
  };
  JsonTreeDecoder.prototype.decodeElementIndex_nk5a2l_k$ = function (descriptor) {
    while (this.position_1 < descriptor._get_elementsCount__2919979385_mqmrgn_k$()) {
      var tmp0_this = this;
      var tmp1 = tmp0_this.position_1;
      tmp0_this.position_1 = tmp1 + 1 | 0;
      var name = this.getTag_8zycz2_k$(descriptor, tmp1);
      var tmp;
      var tmp$ret$1;
      $l$block_0: {
        var tmp0_contains_0 = this._get_value__3683422336_a43j40_k$();
        var tmp$ret$0;
        $l$block: {
          tmp$ret$0 = (isInterface(tmp0_contains_0, Map) ? tmp0_contains_0 : THROW_CCE()).containsKey_wgk31w_k$(name);
          break $l$block;
        }
        tmp$ret$1 = tmp$ret$0;
        break $l$block_0;
      }
      if (tmp$ret$1) {
        tmp = !this._get_configuration__311089819_557qfv_k$()._get_coerceInputValues__1564306208_pvcie8_k$() ? true : !coerceInputValue_0(this, descriptor, this.position_1 - 1 | 0, name);
      } else {
        {
          tmp = false;
        }
      }
      if (tmp) {
        return this.position_1 - 1 | 0;
      } else {
      }
    }
    return Companion_getInstance()._get_DECODE_DONE__3215019198_huz1aa_k$();
  };
  JsonTreeDecoder.prototype.currentElement_sx22im_k$ = function (tag) {
    return getValue(this._get_value__3683422336_a43j40_k$(), tag);
  };
  JsonTreeDecoder.prototype.beginStructure_dv3yt3_k$ = function (descriptor) {
    if (descriptor === this.polyDescriptor_1)
      return this;
    return AbstractJsonTreeDecoder.prototype.beginStructure_dv3yt3_k$.call(this, descriptor);
  };
  JsonTreeDecoder.prototype.endStructure_e64gd4_k$ = function (descriptor) {
    var tmp;
    if (this._get_configuration__311089819_557qfv_k$()._get_ignoreUnknownKeys__4153108645_2cgiu3_k$()) {
      tmp = true;
    } else {
      var tmp_0 = descriptor._get_kind__801637687_d99vlj_k$();
      tmp = tmp_0 instanceof PolymorphicKind;
    }
    if (tmp)
      return Unit_getInstance();
    else {
    }
    var names = jsonCachedSerialNames(descriptor);
    var tmp0_iterator = this._get_value__3683422336_a43j40_k$()._get_keys__801529559_d97k5z_k$().iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var key = tmp0_iterator.next_20eer_k$();
      if (!names.contains_2ehdt1_k$(key) ? !(key === this.polyDiscriminator_1) : false) {
        throw UnknownKeyException(key, this._get_value__3683422336_a43j40_k$().toString());
      }
    }
  };
  JsonTreeDecoder.$metadata$ = {
    simpleName: 'JsonTreeDecoder',
    kind: 'class',
    interfaces: []
  };
  function _get_size__809037418($this) {
    return $this.size_1;
  }
  function _set_currentIndex__750761374_0($this, _set____804775014) {
    $this.currentIndex_1 = _set____804775014;
  }
  function _get_currentIndex__1690914194_0($this) {
    return $this.currentIndex_1;
  }
  function JsonTreeListDecoder(json, value) {
    AbstractJsonTreeDecoder.call(this, json, value);
    this.value_2 = value;
    this.size_1 = this.value_2._get_size__809037418_ddoh9m_k$();
    this.currentIndex_1 = -1;
  }
  JsonTreeListDecoder.prototype._get_value__3683422336_a43j40_k$ = function () {
    return this.value_2;
  };
  JsonTreeListDecoder.prototype.elementName_9sehmv_k$ = function (desc, index) {
    return index.toString();
  };
  JsonTreeListDecoder.prototype.currentElement_sx22im_k$ = function (tag) {
    return this.value_2.get_fkrdnv_k$(toInt(tag));
  };
  JsonTreeListDecoder.prototype.decodeElementIndex_nk5a2l_k$ = function (descriptor) {
    while (this.currentIndex_1 < (this.size_1 - 1 | 0)) {
      var tmp0_this = this;
      var tmp1 = tmp0_this.currentIndex_1;
      tmp0_this.currentIndex_1 = tmp1 + 1 | 0;
      Unit_getInstance();
      return this.currentIndex_1;
    }
    return Companion_getInstance()._get_DECODE_DONE__3215019198_huz1aa_k$();
  };
  JsonTreeListDecoder.$metadata$ = {
    simpleName: 'JsonTreeListDecoder',
    kind: 'class',
    interfaces: []
  };
  function JsonPrimitiveDecoder(json, value) {
    AbstractJsonTreeDecoder.call(this, json, value);
    this.value_2 = value;
    this.pushTag_2jen4a_k$(_get_PRIMITIVE_TAG__1142709519());
  }
  JsonPrimitiveDecoder.prototype._get_value__3683422336_a43j40_k$ = function () {
    return this.value_2;
  };
  JsonPrimitiveDecoder.prototype.decodeElementIndex_nk5a2l_k$ = function (descriptor) {
    return 0;
  };
  JsonPrimitiveDecoder.prototype.currentElement_sx22im_k$ = function (tag) {
    {
      var tmp0_require_0 = tag === _get_PRIMITIVE_TAG__1142709519();
      {
      }
      if (!tmp0_require_0) {
        var tmp$ret$0;
        $l$block: {
          tmp$ret$0 = "This input can only handle primitives with '" + _get_PRIMITIVE_TAG__1142709519() + "' tag";
          break $l$block;
        }
        var message_1 = tmp$ret$0;
        throw IllegalArgumentException_init_$Create$(toString(message_1));
      }
    }
    return this.value_2;
  };
  JsonPrimitiveDecoder.$metadata$ = {
    simpleName: 'JsonPrimitiveDecoder',
    kind: 'class',
    interfaces: []
  };
  function _get_keys__801529559($this) {
    return $this.keys_1;
  }
  function _get_size__809037418_0($this) {
    return $this.size_1;
  }
  function _set_position__3963083214_0($this, _set____804775014) {
    $this.position_2 = _set____804775014;
  }
  function _get_position__3188952002_0($this) {
    return $this.position_2;
  }
  function JsonTreeMapDecoder(json, value) {
    JsonTreeDecoder_init_$Init$(json, value, null, null, 12, null, this);
    this.value_3 = value;
    this.keys_1 = toList(this.value_3._get_keys__801529559_d97k5z_k$());
    this.size_1 = imul(this.keys_1._get_size__809037418_ddoh9m_k$(), 2);
    this.position_2 = -1;
  }
  JsonTreeMapDecoder.prototype._get_value__3683422336_a43j40_k$ = function () {
    return this.value_3;
  };
  JsonTreeMapDecoder.prototype.elementName_9sehmv_k$ = function (desc, index) {
    var i = index / 2 | 0;
    return this.keys_1.get_fkrdnv_k$(i);
  };
  JsonTreeMapDecoder.prototype.decodeElementIndex_nk5a2l_k$ = function (descriptor) {
    while (this.position_2 < (this.size_1 - 1 | 0)) {
      var tmp0_this = this;
      var tmp1 = tmp0_this.position_2;
      tmp0_this.position_2 = tmp1 + 1 | 0;
      Unit_getInstance();
      return this.position_2;
    }
    return Companion_getInstance()._get_DECODE_DONE__3215019198_huz1aa_k$();
  };
  JsonTreeMapDecoder.prototype.currentElement_sx22im_k$ = function (tag) {
    return this.position_2 % 2 === 0 ? JsonPrimitive_2(tag) : getValue(this.value_3, tag);
  };
  JsonTreeMapDecoder.prototype.endStructure_e64gd4_k$ = function (descriptor) {
  };
  JsonTreeMapDecoder.$metadata$ = {
    simpleName: 'JsonTreeMapDecoder',
    kind: 'class',
    interfaces: []
  };
  function readPolymorphicJson(_this__1828080292, discriminator, element, deserializer) {
    return (new JsonTreeDecoder(_this__1828080292, element, discriminator, deserializer._get_descriptor__684124924_bbb664_k$())).decodeSerializableValue_xpp80o_k$(deserializer);
  }
  function writeJson(_this__1828080292, value, serializer) {
    var result = {_v: null};
    var encoder = new JsonTreeEncoder(_this__1828080292, writeJson$lambda(result));
    encoder.encodeSerializableValue_bps9ot_k$(serializer, value);
    var tmp;
    if (result._v == null) {
      throwUninitializedPropertyAccessException('result');
    } else {
      tmp = result._v;
    }
    return tmp;
  }
  function JsonTreeEncoder(json, nodeConsumer) {
    AbstractJsonTreeEncoder.call(this, json, nodeConsumer);
    var tmp = this;
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = LinkedHashMap_init_$Create$();
      break $l$block;
    }
    tmp.content_1 = tmp$ret$0;
  }
  JsonTreeEncoder.prototype._get_content__1558689208_ps04ag_k$ = function () {
    return this.content_1;
  };
  JsonTreeEncoder.prototype.putElement_q1lsnv_k$ = function (key, element) {
    {
      var tmp0_set_0 = this.content_1;
      tmp0_set_0.put_3mhbri_k$(key, element);
      Unit_getInstance();
    }
  };
  JsonTreeEncoder.prototype.getCurrent_z8uawt_k$ = function () {
    return new JsonObject(this.content_1);
  };
  JsonTreeEncoder.$metadata$ = {
    simpleName: 'JsonTreeEncoder',
    kind: 'class',
    interfaces: []
  };
  function _get_nodeConsumer__2876997683($this) {
    return $this.nodeConsumer_1;
  }
  function _set_writePolymorphic__2658397760_0($this, _set____804775014) {
    $this.writePolymorphic_1 = _set____804775014;
  }
  function _get_writePolymorphic__122186804_0($this) {
    return $this.writePolymorphic_1;
  }
  function AbstractJsonTreeEncoder$beginStructure$lambda(this$0) {
    return function (node) {
      this$0.putElement_q1lsnv_k$(this$0._get_currentTag__3009892682_l93lx2_k$(), node);
      return Unit_getInstance();
    };
  }
  function AbstractJsonTreeEncoder(json, nodeConsumer) {
    NamedValueEncoder.call(this);
    this.json_1 = json;
    this.nodeConsumer_1 = nodeConsumer;
    this.configuration_1 = this.json_1._get_configuration__311089819_557qfv_k$();
    this.writePolymorphic_1 = false;
  }
  AbstractJsonTreeEncoder.prototype._get_json__801013347_d8whur_k$ = function () {
    return this.json_1;
  };
  AbstractJsonTreeEncoder.prototype._get_serializersModule__364239364_60uww4_k$ = function () {
    return this.json_1._get_serializersModule__364239364_60uww4_k$();
  };
  AbstractJsonTreeEncoder.prototype._get_configuration__311089819_557qfv_k$ = function () {
    return this.configuration_1;
  };
  AbstractJsonTreeEncoder.prototype.encodeJsonElement_javf71_k$ = function (element) {
    this.encodeSerializableValue_bps9ot_k$(JsonElementSerializer_getInstance(), element);
  };
  AbstractJsonTreeEncoder.prototype.shouldEncodeElementDefault_m92hrm_k$ = function (descriptor, index) {
    return this.configuration_1._get_encodeDefaults__2255426691_xqaflp_k$();
  };
  AbstractJsonTreeEncoder.prototype.composeName_t9idc5_k$ = function (parentName, childName) {
    return childName;
  };
  AbstractJsonTreeEncoder.prototype.encodeNull_ek2hec_k$ = function () {
    var tmp0_elvis_lhs = this._get_currentTagOrNull__3083342688_k1dbj4_k$();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return this.nodeConsumer_1(JsonNull_getInstance());
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var tag = tmp;
    this.encodeTaggedNull_7uuv7t_k$(tag);
  };
  AbstractJsonTreeEncoder.prototype.encodeTaggedNull_7uuv7t_k$ = function (tag) {
    return this.putElement_q1lsnv_k$(tag, JsonNull_getInstance());
  };
  AbstractJsonTreeEncoder.prototype.encodeTaggedNull_qi5bv1_k$ = function (tag) {
    return this.encodeTaggedNull_7uuv7t_k$((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  AbstractJsonTreeEncoder.prototype.encodeTaggedInt_bsahq4_k$ = function (tag, value) {
    return this.putElement_q1lsnv_k$(tag, JsonPrimitive_0(value));
  };
  AbstractJsonTreeEncoder.prototype.encodeTaggedInt_ndzaig_k$ = function (tag, value) {
    return this.encodeTaggedInt_bsahq4_k$((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE(), value);
  };
  AbstractJsonTreeEncoder.prototype.encodeTaggedByte_hkv08e_k$ = function (tag, value) {
    return this.putElement_q1lsnv_k$(tag, JsonPrimitive_0(value));
  };
  AbstractJsonTreeEncoder.prototype.encodeTaggedByte_e5naty_k$ = function (tag, value) {
    return this.encodeTaggedByte_hkv08e_k$((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE(), value);
  };
  AbstractJsonTreeEncoder.prototype.encodeTaggedShort_drdhss_k$ = function (tag, value) {
    return this.putElement_q1lsnv_k$(tag, JsonPrimitive_0(value));
  };
  AbstractJsonTreeEncoder.prototype.encodeTaggedShort_4ro7mw_k$ = function (tag, value) {
    return this.encodeTaggedShort_drdhss_k$((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE(), value);
  };
  AbstractJsonTreeEncoder.prototype.encodeTaggedLong_kg8soa_k$ = function (tag, value) {
    return this.putElement_q1lsnv_k$(tag, JsonPrimitive_0(value));
  };
  AbstractJsonTreeEncoder.prototype.encodeTaggedLong_68sg4u_k$ = function (tag, value) {
    return this.encodeTaggedLong_kg8soa_k$((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE(), value);
  };
  AbstractJsonTreeEncoder.prototype.encodeTaggedFloat_px6isk_k$ = function (tag, value) {
    this.putElement_q1lsnv_k$(tag, JsonPrimitive_0(value));
    if (!this.configuration_1._get_allowSpecialFloatingPointValues__1768724981_t91wxh_k$() ? !isFinite(value) : false) {
      throw InvalidFloatingPointEncoded_0(value, tag, toString(this.getCurrent_z8uawt_k$()));
    }
  };
  AbstractJsonTreeEncoder.prototype.encodeTaggedFloat_xhp5co_k$ = function (tag, value) {
    return this.encodeTaggedFloat_px6isk_k$((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE(), value);
  };
  AbstractJsonTreeEncoder.prototype.encodeSerializableValue_bps9ot_k$ = function (serializer, value) {
    var tmp;
    if (!(this._get_currentTagOrNull__3083342688_k1dbj4_k$() == null)) {
      tmp = true;
    } else {
      var tmp_0;
      var tmp_1 = serializer._get_descriptor__684124924_bbb664_k$()._get_kind__801637687_d99vlj_k$();
      if (!(tmp_1 instanceof PrimitiveKind)) {
        tmp_0 = !(serializer._get_descriptor__684124924_bbb664_k$()._get_kind__801637687_d99vlj_k$() === ENUM_getInstance());
      } else {
        {
          tmp_0 = false;
        }
      }
      tmp = tmp_0;
    }
    if (tmp) {
      var tmp$ret$0;
      $l$block: {
        var tmp_2;
        if (!(serializer instanceof AbstractPolymorphicSerializer)) {
          tmp_2 = true;
        } else {
          {
            tmp_2 = this._get_json__801013347_d8whur_k$()._get_configuration__311089819_557qfv_k$()._get_useArrayPolymorphism__4259793650_kxw5q_k$();
          }
        }
        if (tmp_2) {
          serializer.serialize_32qylj_k$(this, value);
          tmp$ret$0 = Unit_getInstance();
          break $l$block;
        } else {
        }
        var tmp_3 = isInterface(serializer, SerializationStrategy) ? serializer : THROW_CCE();
        var actualSerializer_1 = findActualSerializer$accessor$1hu6t4x(this, tmp_3, isObject(value) ? value : THROW_CCE());
        {
          this.writePolymorphic_1 = true;
        }
        actualSerializer_1.serialize_32qylj_k$(this, value);
      }
    } else {
      {
        var tmp$ret$1;
        $l$block_0: {
          var tmp0_apply_0 = new JsonPrimitiveEncoder(this.json_1, this.nodeConsumer_1);
          {
          }
          {
            tmp0_apply_0.encodeSerializableValue_bps9ot_k$(serializer, value);
            tmp0_apply_0.endEncode_2disap_k$(serializer._get_descriptor__684124924_bbb664_k$());
          }
          tmp$ret$1 = tmp0_apply_0;
          break $l$block_0;
        }
        Unit_getInstance();
      }
    }
  };
  AbstractJsonTreeEncoder.prototype.encodeTaggedDouble_8ug3sw_k$ = function (tag, value) {
    this.putElement_q1lsnv_k$(tag, JsonPrimitive_0(value));
    if (!this.configuration_1._get_allowSpecialFloatingPointValues__1768724981_t91wxh_k$() ? !isFinite_0(value) : false) {
      throw InvalidFloatingPointEncoded_0(value, tag, toString(this.getCurrent_z8uawt_k$()));
    }
  };
  AbstractJsonTreeEncoder.prototype.encodeTaggedDouble_dgqq9w_k$ = function (tag, value) {
    return this.encodeTaggedDouble_8ug3sw_k$((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE(), value);
  };
  AbstractJsonTreeEncoder.prototype.encodeTaggedBoolean_mejn8k_k$ = function (tag, value) {
    return this.putElement_q1lsnv_k$(tag, JsonPrimitive_1(value));
  };
  AbstractJsonTreeEncoder.prototype.encodeTaggedBoolean_wlumqg_k$ = function (tag, value) {
    return this.encodeTaggedBoolean_mejn8k_k$((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE(), value);
  };
  AbstractJsonTreeEncoder.prototype.encodeTaggedChar_q2imt2_k$ = function (tag, value) {
    return this.putElement_q1lsnv_k$(tag, JsonPrimitive_2(toString_0(value)));
  };
  AbstractJsonTreeEncoder.prototype.encodeTaggedChar_2dcv0m_k$ = function (tag, value) {
    return this.encodeTaggedChar_q2imt2_k$((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE(), value);
  };
  AbstractJsonTreeEncoder.prototype.encodeTaggedString_tybxa8_k$ = function (tag, value) {
    return this.putElement_q1lsnv_k$(tag, JsonPrimitive_2(value));
  };
  AbstractJsonTreeEncoder.prototype.encodeTaggedString_ault6k_k$ = function (tag, value) {
    return this.encodeTaggedString_tybxa8_k$((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE(), value);
  };
  AbstractJsonTreeEncoder.prototype.encodeTaggedEnum_x78vv5_k$ = function (tag, enumDescriptor, ordinal) {
    return this.putElement_q1lsnv_k$(tag, JsonPrimitive_2(enumDescriptor.getElementName_ykpypc_k$(ordinal)));
  };
  AbstractJsonTreeEncoder.prototype.encodeTaggedEnum_j126tp_k$ = function (tag, enumDescriptor, ordinal) {
    return this.encodeTaggedEnum_x78vv5_k$((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE(), enumDescriptor, ordinal);
  };
  AbstractJsonTreeEncoder.prototype.encodeTaggedValue_vuddkv_k$ = function (tag, value) {
    this.putElement_q1lsnv_k$(tag, JsonPrimitive_2(toString(value)));
  };
  AbstractJsonTreeEncoder.prototype.encodeTaggedValue_rik3ib_k$ = function (tag, value) {
    return this.encodeTaggedValue_vuddkv_k$((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE(), value);
  };
  AbstractJsonTreeEncoder.prototype.beginStructure_dv3yt3_k$ = function (descriptor) {
    var tmp;
    if (this._get_currentTagOrNull__3083342688_k1dbj4_k$() == null) {
      tmp = this.nodeConsumer_1;
    } else {
      tmp = AbstractJsonTreeEncoder$beginStructure$lambda(this);
    }
    var consumer = tmp;
    var tmp0_subject = descriptor._get_kind__801637687_d99vlj_k$();
    var tmp_0;
    var tmp_1;
    if (equals(tmp0_subject, LIST_getInstance())) {
      tmp_1 = true;
    } else {
      tmp_1 = tmp0_subject instanceof PolymorphicKind;
    }
    if (tmp_1) {
      tmp_0 = new JsonTreeListEncoder(this.json_1, consumer);
    } else {
      if (equals(tmp0_subject, MAP_getInstance())) {
        var tmp$ret$2;
        $l$block_1: {
          var tmp0_selectMapMode_0 = this.json_1;
          var keyDescriptor_1 = descriptor.getElementDescriptor_sqz94k_k$(0);
          var keyKind_2 = keyDescriptor_1._get_kind__801637687_d99vlj_k$();
          var tmp_2;
          var tmp_3;
          if (keyKind_2 instanceof PrimitiveKind) {
            tmp_3 = true;
          } else {
            {
              tmp_3 = equals(keyKind_2, ENUM_getInstance());
            }
          }
          if (tmp_3) {
            var tmp$ret$0;
            $l$block: {
              tmp$ret$0 = new JsonTreeMapEncoder(this.json_1, consumer);
              break $l$block;
            }
            tmp_2 = tmp$ret$0;
          } else {
            if (tmp0_selectMapMode_0._get_configuration__311089819_557qfv_k$()._get_allowStructuredMapKeys__141016373_2bygxh_k$()) {
              var tmp$ret$1;
              $l$block_0: {
                tmp$ret$1 = new JsonTreeListEncoder(this.json_1, consumer);
                break $l$block_0;
              }
              tmp_2 = tmp$ret$1;
            } else {
              {
                throw InvalidKeyKindException(keyDescriptor_1);
              }
            }
          }
          tmp$ret$2 = tmp_2;
          break $l$block_1;
        }
        tmp_0 = tmp$ret$2;
      } else {
        {
          tmp_0 = new JsonTreeEncoder(this.json_1, consumer);
        }
      }
    }
    var encoder = tmp_0;
    if (this.writePolymorphic_1) {
      this.writePolymorphic_1 = false;
      encoder.putElement_q1lsnv_k$(this.configuration_1._get_classDiscriminator__1173799943_jeultz_k$(), JsonPrimitive_2(descriptor._get_serialName__1025298892_gyfpos_k$()));
    }
    return encoder;
  };
  AbstractJsonTreeEncoder.prototype.endEncode_2disap_k$ = function (descriptor) {
    this.nodeConsumer_1(this.getCurrent_z8uawt_k$());
  };
  AbstractJsonTreeEncoder.$metadata$ = {
    simpleName: 'AbstractJsonTreeEncoder',
    kind: 'class',
    interfaces: [JsonEncoder]
  };
  function _set_content__3107681836($this, _set____804775014) {
    $this.content_1 = _set____804775014;
  }
  function _get_content__1558689208_1($this) {
    return $this.content_1;
  }
  function JsonPrimitiveEncoder(json, nodeConsumer) {
    AbstractJsonTreeEncoder.call(this, json, nodeConsumer);
    this.content_1 = null;
    this.pushTag_2jen4a_k$('primitive');
  }
  JsonPrimitiveEncoder.prototype.putElement_q1lsnv_k$ = function (key, element) {
    {
      var tmp0_require_0 = key === 'primitive';
      {
      }
      if (!tmp0_require_0) {
        var tmp$ret$0;
        $l$block: {
          tmp$ret$0 = "This output can only consume primitives with 'primitive' tag";
          break $l$block;
        }
        var message_1 = tmp$ret$0;
        throw IllegalArgumentException_init_$Create$(toString(message_1));
      }
    }
    {
      var tmp1_require_0 = this.content_1 == null;
      {
      }
      if (!tmp1_require_0) {
        var tmp$ret$1;
        $l$block_0: {
          tmp$ret$1 = 'Primitive element was already recorded. Does call to .encodeXxx happen more than once?';
          break $l$block_0;
        }
        var message_1_0 = tmp$ret$1;
        throw IllegalArgumentException_init_$Create$(toString(message_1_0));
      }
    }
    this.content_1 = element;
  };
  JsonPrimitiveEncoder.prototype.getCurrent_z8uawt_k$ = function () {
    var tmp$ret$1;
    $l$block_0: {
      var tmp0_requireNotNull_0 = this.content_1;
      {
      }
      if (tmp0_requireNotNull_0 == null) {
        var tmp$ret$0;
        $l$block: {
          tmp$ret$0 = 'Primitive element has not been recorded. Is call to .encodeXxx is missing in serializer?';
          break $l$block;
        }
        var message_1 = tmp$ret$0;
        throw IllegalArgumentException_init_$Create$(toString(message_1));
      } else {
        tmp$ret$1 = tmp0_requireNotNull_0;
        break $l$block_0;
      }
    }
    return tmp$ret$1;
  };
  JsonPrimitiveEncoder.$metadata$ = {
    simpleName: 'JsonPrimitiveEncoder',
    kind: 'class',
    interfaces: []
  };
  function _get_array__3098070168($this) {
    return $this.array_1;
  }
  function JsonTreeListEncoder(json, nodeConsumer) {
    AbstractJsonTreeEncoder.call(this, json, nodeConsumer);
    var tmp = this;
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = ArrayList_init_$Create$();
      break $l$block;
    }
    tmp.array_1 = tmp$ret$0;
  }
  JsonTreeListEncoder.prototype.elementName_9sehmv_k$ = function (descriptor, index) {
    return index.toString();
  };
  JsonTreeListEncoder.prototype.putElement_q1lsnv_k$ = function (key, element) {
    var idx = toInt(key);
    this.array_1.add_ydlf05_k$(idx, element);
  };
  JsonTreeListEncoder.prototype.getCurrent_z8uawt_k$ = function () {
    return new JsonArray(this.array_1);
  };
  JsonTreeListEncoder.$metadata$ = {
    simpleName: 'JsonTreeListEncoder',
    kind: 'class',
    interfaces: []
  };
  function _set_tag__296290987($this, _set____804775014) {
    $this.tag_1 = _set____804775014;
  }
  function _get_tag__857403447($this) {
    var tmp = $this.tag_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('tag');
    }
  }
  function _set_isKey__968706832($this, _set____804775014) {
    $this.isKey_1 = _set____804775014;
  }
  function _get_isKey__3326868892($this) {
    return $this.isKey_1;
  }
  function JsonTreeMapEncoder(json, nodeConsumer) {
    JsonTreeEncoder.call(this, json, nodeConsumer);
    this.isKey_1 = true;
  }
  JsonTreeMapEncoder.prototype.putElement_q1lsnv_k$ = function (key, element) {
    if (this.isKey_1) {
      var tmp = this;
      var tmp0_subject = element;
      var tmp_0;
      if (tmp0_subject instanceof JsonPrimitive) {
        tmp_0 = element._get_content__1558689208_ps04ag_k$();
      } else {
        if (tmp0_subject instanceof JsonObject) {
          throw InvalidKeyKindException(JsonObjectSerializer_getInstance()._get_descriptor__684124924_bbb664_k$());
        } else {
          if (tmp0_subject instanceof JsonArray) {
            throw InvalidKeyKindException(JsonArraySerializer_getInstance()._get_descriptor__684124924_bbb664_k$());
          } else {
            {
              noWhenBranchMatchedException();
            }
          }
        }
      }
      tmp.tag_1 = tmp_0;
      this.isKey_1 = false;
    } else {
      {
        var tmp0_set_0 = this._get_content__1558689208_ps04ag_k$();
        var tmp1_set_0 = _get_tag__857403447(this);
        tmp0_set_0.put_3mhbri_k$(tmp1_set_0, element);
        Unit_getInstance();
      }
      this.isKey_1 = true;
    }
  };
  JsonTreeMapEncoder.prototype.getCurrent_z8uawt_k$ = function () {
    return new JsonObject(this._get_content__1558689208_ps04ag_k$());
  };
  JsonTreeMapEncoder.$metadata$ = {
    simpleName: 'JsonTreeMapEncoder',
    kind: 'class',
    interfaces: []
  };
  function _get_PRIMITIVE_TAG__1142709519() {
    return PRIMITIVE_TAG;
  }
  var PRIMITIVE_TAG;
  function writeJson$lambda($result) {
    return function (it) {
      $result._v = it;
      return Unit_getInstance();
    };
  }
  var WriteMode_OBJ_instance;
  var WriteMode_LIST_instance;
  var WriteMode_MAP_instance;
  var WriteMode_POLY_OBJ_instance;
  function values() {
    return [WriteMode_OBJ_getInstance(), WriteMode_LIST_getInstance(), WriteMode_MAP_getInstance(), WriteMode_POLY_OBJ_getInstance()];
  }
  function valueOf(value) {
    switch (value) {
      case 'OBJ':
        return WriteMode_OBJ_getInstance();
      case 'LIST':
        return WriteMode_LIST_getInstance();
      case 'MAP':
        return WriteMode_MAP_getInstance();
      case 'POLY_OBJ':
        return WriteMode_POLY_OBJ_getInstance();
      default:
        WriteMode_initEntries();
        THROW_ISE();
        break;
    }
  }
  var WriteMode_entriesInitialized;
  function WriteMode_initEntries() {
    if (WriteMode_entriesInitialized)
      return Unit_getInstance();
    WriteMode_entriesInitialized = true;
    WriteMode_OBJ_instance = new WriteMode('OBJ', 0, _get_BEGIN_OBJ__318898768(), _get_END_OBJ__368619038());
    WriteMode_LIST_instance = new WriteMode('LIST', 1, _get_BEGIN_LIST__1293374583(), _get_END_LIST__2834702953());
    WriteMode_MAP_instance = new WriteMode('MAP', 2, _get_BEGIN_OBJ__318898768(), _get_END_OBJ__368619038());
    WriteMode_POLY_OBJ_instance = new WriteMode('POLY_OBJ', 3, _get_BEGIN_LIST__1293374583(), _get_END_LIST__2834702953());
  }
  function WriteMode(name, ordinal, begin, end) {
    Enum.call(this, name, ordinal);
    this.begin_1 = begin;
    this.end_1 = end;
    this.beginTc_1 = charToTokenClass(this.begin_1);
    this.endTc_1 = charToTokenClass(this.end_1);
  }
  WriteMode.prototype._get_begin__3114373192_c9kma1_k$ = function () {
    return this.begin_1;
  };
  WriteMode.prototype._get_end__856968982_ypp5lj_k$ = function () {
    return this.end_1;
  };
  WriteMode.prototype._get_beginTc__3615423769_b8kz53_k$ = function () {
    return this.beginTc_1;
  };
  WriteMode.prototype._get_endTc__3208462439_hyvkih_k$ = function () {
    return this.endTc_1;
  };
  WriteMode.$metadata$ = {
    simpleName: 'WriteMode',
    kind: 'class',
    interfaces: []
  };
  function switchMode(_this__1828080292, desc) {
    var tmp0_subject = desc._get_kind__801637687_d99vlj_k$();
    var tmp;
    if (tmp0_subject instanceof PolymorphicKind) {
      tmp = WriteMode_POLY_OBJ_getInstance();
    } else {
      if (equals(tmp0_subject, LIST_getInstance())) {
        tmp = WriteMode_LIST_getInstance();
      } else {
        if (equals(tmp0_subject, MAP_getInstance())) {
          var tmp$ret$2;
          $l$block_1: {
            var keyDescriptor_1 = desc.getElementDescriptor_sqz94k_k$(0);
            var keyKind_2 = keyDescriptor_1._get_kind__801637687_d99vlj_k$();
            var tmp_0;
            var tmp_1;
            if (keyKind_2 instanceof PrimitiveKind) {
              tmp_1 = true;
            } else {
              {
                tmp_1 = equals(keyKind_2, ENUM_getInstance());
              }
            }
            if (tmp_1) {
              var tmp$ret$0;
              $l$block: {
                tmp$ret$0 = WriteMode_MAP_getInstance();
                break $l$block;
              }
              tmp_0 = tmp$ret$0;
            } else {
              if (_this__1828080292._get_configuration__311089819_557qfv_k$()._get_allowStructuredMapKeys__141016373_2bygxh_k$()) {
                var tmp$ret$1;
                $l$block_0: {
                  tmp$ret$1 = WriteMode_LIST_getInstance();
                  break $l$block_0;
                }
                tmp_0 = tmp$ret$1;
              } else {
                {
                  throw InvalidKeyKindException(keyDescriptor_1);
                }
              }
            }
            tmp$ret$2 = tmp_0;
            break $l$block_1;
          }
          tmp = tmp$ret$2;
        } else {
          {
            tmp = WriteMode_OBJ_getInstance();
          }
        }
      }
    }
    return tmp;
  }
  function selectMapMode(_this__1828080292, mapDescriptor, ifMap, ifList) {
    var keyDescriptor = mapDescriptor.getElementDescriptor_sqz94k_k$(0);
    var keyKind = keyDescriptor._get_kind__801637687_d99vlj_k$();
    var tmp;
    var tmp_0;
    if (keyKind instanceof PrimitiveKind) {
      tmp_0 = true;
    } else {
      {
        tmp_0 = equals(keyKind, ENUM_getInstance());
      }
    }
    if (tmp_0) {
      tmp = ifMap();
    } else {
      if (_this__1828080292._get_configuration__311089819_557qfv_k$()._get_allowStructuredMapKeys__141016373_2bygxh_k$()) {
        tmp = ifList();
      } else {
        {
          throw InvalidKeyKindException(keyDescriptor);
        }
      }
    }
    return tmp;
  }
  function WriteMode_OBJ_getInstance() {
    WriteMode_initEntries();
    return WriteMode_OBJ_instance;
  }
  function WriteMode_LIST_getInstance() {
    WriteMode_initEntries();
    return WriteMode_LIST_instance;
  }
  function WriteMode_MAP_getInstance() {
    WriteMode_initEntries();
    return WriteMode_MAP_instance;
  }
  function WriteMode_POLY_OBJ_getInstance() {
    WriteMode_initEntries();
    return WriteMode_POLY_OBJ_instance;
  }
  //region block: post-declaration
  defer$1.prototype._get_annotations__1905959661_virbvx_k$ = _get_annotations__1905959661;
  defer$1.prototype._get_isNullable__336674624_5kg3sw_k$ = _get_isNullable__336674624;
  StreamingJsonDecoder.prototype.decodeNullableSerializableValue_927wg6_k$ = decodeNullableSerializableValue;
  StreamingJsonDecoder.prototype.decodeSequentially_xlblqy_k$ = decodeSequentially;
  StreamingJsonDecoder.prototype.decodeCollectionSize_cd6i6s_k$ = decodeCollectionSize;
  StreamingJsonDecoder.prototype.decodeSerializableElement$default_xyql7s_k$ = decodeSerializableElement$default;
  StreamingJsonDecoder.prototype.decodeSerializableElement_q809j1_k$ = decodeSerializableElement;
  StreamingJsonDecoder.prototype.decodeNullableSerializableElement$default_9il7ee_k$ = decodeNullableSerializableElement$default;
  StreamingJsonDecoder.prototype.decodeNullableSerializableElement_xwfpfp_k$ = decodeNullableSerializableElement;
  StreamingJsonEncoder.prototype.encodeNotNullMark_40lhgg_k$ = encodeNotNullMark;
  StreamingJsonEncoder.prototype.beginCollection_dgpn47_k$ = beginCollection;
  StreamingJsonEncoder.prototype.encodeNullableSerializableValue_35ub11_k$ = encodeNullableSerializableValue;
  AbstractJsonTreeDecoder.prototype.decodeNullableSerializableElement_xwfpfp_k$ = decodeNullableSerializableElement;
  AbstractJsonTreeDecoder.prototype.decodeSerializableElement_q809j1_k$ = decodeSerializableElement;
  AbstractJsonTreeDecoder.prototype.decodeNullableSerializableValue_927wg6_k$ = decodeNullableSerializableValue;
  AbstractJsonTreeDecoder.prototype.decodeSequentially_xlblqy_k$ = decodeSequentially;
  AbstractJsonTreeDecoder.prototype.decodeNullableSerializableElement$default_9il7ee_k$ = decodeNullableSerializableElement$default;
  AbstractJsonTreeDecoder.prototype.decodeSerializableElement$default_xyql7s_k$ = decodeSerializableElement$default;
  AbstractJsonTreeDecoder.prototype.decodeCollectionSize_cd6i6s_k$ = decodeCollectionSize;
  JsonTreeDecoder.prototype.decodeNullableSerializableElement_xwfpfp_k$ = decodeNullableSerializableElement;
  JsonTreeDecoder.prototype.decodeSerializableElement_q809j1_k$ = decodeSerializableElement;
  JsonTreeDecoder.prototype.decodeNullableSerializableValue_927wg6_k$ = decodeNullableSerializableValue;
  JsonTreeDecoder.prototype.decodeSequentially_xlblqy_k$ = decodeSequentially;
  JsonTreeDecoder.prototype.decodeNullableSerializableElement$default_9il7ee_k$ = decodeNullableSerializableElement$default;
  JsonTreeDecoder.prototype.decodeSerializableElement$default_xyql7s_k$ = decodeSerializableElement$default;
  JsonTreeDecoder.prototype.decodeCollectionSize_cd6i6s_k$ = decodeCollectionSize;
  JsonTreeListDecoder.prototype.decodeNullableSerializableElement_xwfpfp_k$ = decodeNullableSerializableElement;
  JsonTreeListDecoder.prototype.decodeSerializableElement_q809j1_k$ = decodeSerializableElement;
  JsonTreeListDecoder.prototype.decodeNullableSerializableValue_927wg6_k$ = decodeNullableSerializableValue;
  JsonTreeListDecoder.prototype.decodeSequentially_xlblqy_k$ = decodeSequentially;
  JsonTreeListDecoder.prototype.decodeNullableSerializableElement$default_9il7ee_k$ = decodeNullableSerializableElement$default;
  JsonTreeListDecoder.prototype.decodeSerializableElement$default_xyql7s_k$ = decodeSerializableElement$default;
  JsonTreeListDecoder.prototype.decodeCollectionSize_cd6i6s_k$ = decodeCollectionSize;
  JsonPrimitiveDecoder.prototype.decodeNullableSerializableElement_xwfpfp_k$ = decodeNullableSerializableElement;
  JsonPrimitiveDecoder.prototype.decodeSerializableElement_q809j1_k$ = decodeSerializableElement;
  JsonPrimitiveDecoder.prototype.decodeNullableSerializableValue_927wg6_k$ = decodeNullableSerializableValue;
  JsonPrimitiveDecoder.prototype.decodeSequentially_xlblqy_k$ = decodeSequentially;
  JsonPrimitiveDecoder.prototype.decodeNullableSerializableElement$default_9il7ee_k$ = decodeNullableSerializableElement$default;
  JsonPrimitiveDecoder.prototype.decodeSerializableElement$default_xyql7s_k$ = decodeSerializableElement$default;
  JsonPrimitiveDecoder.prototype.decodeCollectionSize_cd6i6s_k$ = decodeCollectionSize;
  JsonTreeMapDecoder.prototype.decodeNullableSerializableElement_xwfpfp_k$ = decodeNullableSerializableElement;
  JsonTreeMapDecoder.prototype.decodeSerializableElement_q809j1_k$ = decodeSerializableElement;
  JsonTreeMapDecoder.prototype.decodeNullableSerializableValue_927wg6_k$ = decodeNullableSerializableValue;
  JsonTreeMapDecoder.prototype.decodeSequentially_xlblqy_k$ = decodeSequentially;
  JsonTreeMapDecoder.prototype.decodeNullableSerializableElement$default_9il7ee_k$ = decodeNullableSerializableElement$default;
  JsonTreeMapDecoder.prototype.decodeSerializableElement$default_xyql7s_k$ = decodeSerializableElement$default;
  JsonTreeMapDecoder.prototype.decodeCollectionSize_cd6i6s_k$ = decodeCollectionSize;
  AbstractJsonTreeEncoder.prototype.encodeNullableSerializableValue_35ub11_k$ = encodeNullableSerializableValue;
  AbstractJsonTreeEncoder.prototype.beginCollection_dgpn47_k$ = beginCollection;
  JsonTreeEncoder.prototype.encodeNullableSerializableValue_35ub11_k$ = encodeNullableSerializableValue;
  JsonTreeEncoder.prototype.beginCollection_dgpn47_k$ = beginCollection;
  JsonPrimitiveEncoder.prototype.encodeNullableSerializableValue_35ub11_k$ = encodeNullableSerializableValue;
  JsonPrimitiveEncoder.prototype.beginCollection_dgpn47_k$ = beginCollection;
  JsonTreeListEncoder.prototype.encodeNullableSerializableValue_35ub11_k$ = encodeNullableSerializableValue;
  JsonTreeListEncoder.prototype.beginCollection_dgpn47_k$ = beginCollection;
  JsonTreeMapEncoder.prototype.encodeNullableSerializableValue_35ub11_k$ = encodeNullableSerializableValue;
  JsonTreeMapEncoder.prototype.beginCollection_dgpn47_k$ = beginCollection;
  //endregion
  //region block: init
  defaultDiscriminator = 'type';
  defaultIndent = '    ';
  TC_INVALID = 11;
  TC_WS = 3;
  COMMA = _Char___init__impl__380027157(44);
  TC_COMMA = 4;
  COLON = _Char___init__impl__380027157(58);
  TC_COLON = 5;
  BEGIN_OBJ = _Char___init__impl__380027157(123);
  TC_BEGIN_OBJ = 6;
  END_OBJ = _Char___init__impl__380027157(125);
  TC_END_OBJ = 7;
  BEGIN_LIST = _Char___init__impl__380027157(91);
  TC_BEGIN_LIST = 8;
  END_LIST = _Char___init__impl__380027157(93);
  TC_END_LIST = 9;
  STRING = _Char___init__impl__380027157(34);
  TC_STRING = 1;
  STRING_ESC = _Char___init__impl__380027157(92);
  TC_STRING_ESC = 2;
  CTC_MAX = 126;
  INVALID = _Char___init__impl__380027157(0);
  NULL = 'null';
  TC_EOF = 12;
  TC_OTHER = 0;
  TC_NULL = 10;
  coerceInputValuesHint = "Use 'coerceInputValues = true' in 'Json {}` builder to coerce nulls to default values.";
  lenientHint = "Use 'isLenient = true' in 'Json {}` builder to accept non-compliant JSON.";
  UNICODE_ESC = _Char___init__impl__380027157(117);
  ESC2C_MAX = 117;
  ignoreUnknownKeysHint = "Use 'ignoreUnknownKeys = true' in 'Json {}' builder to ignore unknown keys.";
  specialFlowingValuesHint = "It is possible to deserialize them using 'JsonBuilder.allowSpecialFloatingPointValues = true'";
  allowStructuredMapKeysHint = "Use 'allowStructuredMapKeys = true' in 'Json {}' builder to convert such maps to [key1, value1, key2, value2,...] arrays.";
  PRIMITIVE_TAG = 'primitive';
  //endregion
  //region block: exports
  _.$crossModule$ = _.$crossModule$ || {};
  _.$crossModule$.Json$default = Json$default;
  _.$crossModule$.Default_getInstance = Default_getInstance;
  //endregion
  return _;
}));
