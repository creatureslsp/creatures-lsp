(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.js', './kotlin_kotlin.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.js'), require('./kotlin_kotlin.js'));
  else {
    if (typeof kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core === 'undefined') {
      throw new Error("Error loading module 'kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json'. Its dependency 'kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core' was not found. Please, check whether 'kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core' is loaded prior to 'kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json'.");
    }
    if (typeof kotlin_kotlin === 'undefined') {
      throw new Error("Error loading module 'kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json'. Its dependency 'kotlin_kotlin' was not found. Please, check whether 'kotlin_kotlin' is loaded prior to 'kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json'.");
    }
    root.kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json = factory(typeof kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json === 'undefined' ? {} : kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json, kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core, kotlin_kotlin);
  }
}(this, function (_, kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core, kotlin_kotlin) {
  //region block: imports
  var imul = Math.imul;
  var _get_EmptySerializersModule__1292120011 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$crossModule$._get_EmptySerializersModule__1292120011;
  var fillArrayVal = kotlin_kotlin.$crossModule$.fillArrayVal;
  var Unit_getInstance = kotlin_kotlin.$crossModule$.Unit_getInstance;
  var StringFormat = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$crossModule$.StringFormat;
  var toString = kotlin_kotlin.$crossModule$.toString_1;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$crossModule$.IllegalArgumentException_init_$Create$_1;
  var charSequenceGet = kotlin_kotlin.$crossModule$.charSequenceGet;
  var Char = kotlin_kotlin.$crossModule$.Char;
  var _Char___init__impl__380027157 = kotlin_kotlin.$crossModule$._Char___init__impl__380027157;
  var equals = kotlin_kotlin.$crossModule$.equals;
  var Decoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$crossModule$.Decoder;
  var CompositeDecoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$crossModule$.CompositeDecoder;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$crossModule$.StringBuilder_init_$Create$_1;
  var THROW_CCE = kotlin_kotlin.$crossModule$.THROW_CCE;
  var hashCode = kotlin_kotlin.$crossModule$.hashCode;
  var joinToString$default = kotlin_kotlin.$crossModule$.joinToString$default_2;
  var Map = kotlin_kotlin.$crossModule$.Map;
  var getKClassFromExpression = kotlin_kotlin.$crossModule$.getKClassFromExpression;
  var getStringHashCode = kotlin_kotlin.$crossModule$.getStringHashCode;
  var List = kotlin_kotlin.$crossModule$.List;
  var toInt = kotlin_kotlin.$crossModule$.toInt;
  var toLong = kotlin_kotlin.$crossModule$.toLong_1;
  var toDouble = kotlin_kotlin.$crossModule$.toDouble;
  var toLongOrNull = kotlin_kotlin.$crossModule$.toLongOrNull;
  var toDoubleOrNull = kotlin_kotlin.$crossModule$.toDoubleOrNull;
  var SEALED_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$crossModule$.SEALED_getInstance;
  var buildSerialDescriptor$default = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$crossModule$.buildSerialDescriptor$default;
  var KSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$crossModule$.KSerializer;
  var StringCompanionObject_getInstance = kotlin_kotlin.$crossModule$.StringCompanionObject_getInstance;
  var serializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$crossModule$.serializer;
  var MapSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$crossModule$.MapSerializer;
  var SerialDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$crossModule$.SerialDescriptor;
  var ListSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$crossModule$.ListSerializer;
  var STRING_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$crossModule$.STRING_getInstance;
  var ENUM_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$crossModule$.ENUM_getInstance;
  var PrimitiveSerialDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$crossModule$.PrimitiveSerialDescriptor;
  var toULongOrNull = kotlin_kotlin.$crossModule$.toULongOrNull;
  var Companion_getInstance = kotlin_kotlin.$crossModule$.Companion_getInstance_5;
  var serializer_0 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$crossModule$.serializer_5;
  var _ULong___get_data__impl__934646663 = kotlin_kotlin.$crossModule$._ULong___get_data__impl__934646663;
  var ULong = kotlin_kotlin.$crossModule$.ULong;
  var isInterface = kotlin_kotlin.$crossModule$.isInterface;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$crossModule$.IllegalStateException_init_$Create$_1;
  var lazy = kotlin_kotlin.$crossModule$.lazy;
  var _get_isNullable__336674624 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$crossModule$._get_isNullable__336674624;
  var _get_isInline__2852845512 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$crossModule$._get_isInline__2852845512;
  var _get_annotations__1905959661 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$crossModule$._get_annotations__1905959661;
  var KProperty1 = kotlin_kotlin.$crossModule$.KProperty1;
  var getPropertyCallableRef = kotlin_kotlin.$crossModule$.getPropertyCallableRef;
  var Encoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$crossModule$.Encoder;
  var CompositeEncoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$crossModule$.CompositeEncoder;
  var contentEquals = kotlin_kotlin.$crossModule$.contentEquals;
  var Annotation = kotlin_kotlin.$crossModule$.Annotation;
  var toLong_0 = kotlin_kotlin.$crossModule$.toLong;
  var _UInt___init__impl__1282792953 = kotlin_kotlin.$crossModule$._UInt___init__impl__1282792953;
  var UInt__toString_impl_3489657447 = kotlin_kotlin.$crossModule$.UInt__toString_impl_3489657447;
  var _ULong___init__impl__737756120 = kotlin_kotlin.$crossModule$._ULong___init__impl__737756120;
  var ULong__toString_impl_922614896 = kotlin_kotlin.$crossModule$.ULong__toString_impl_922614896;
  var _UByte___init__impl__983398756 = kotlin_kotlin.$crossModule$._UByte___init__impl__983398756;
  var UByte__toString_impl_4242569316 = kotlin_kotlin.$crossModule$.UByte__toString_impl_4242569316;
  var _UShort___init__impl__3115094534 = kotlin_kotlin.$crossModule$._UShort___init__impl__3115094534;
  var UShort__toString_impl_3426107642 = kotlin_kotlin.$crossModule$.UShort__toString_impl_3426107642;
  var captureStack = kotlin_kotlin.$crossModule$.captureStack;
  var SerializationException = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$crossModule$.SerializationException;
  var SerializationException_init_$Init$ = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$crossModule$.SerializationException_init_$Init$;
  var coerceAtLeast = kotlin_kotlin.$crossModule$.coerceAtLeast;
  var coerceAtMost = kotlin_kotlin.$crossModule$.coerceAtMost;
  var toString_0 = kotlin_kotlin.$crossModule$.toString;
  var ensureNotNull = kotlin_kotlin.$crossModule$.ensureNotNull;
  var Char__toInt_impl_2402388783 = kotlin_kotlin.$crossModule$.Char__toInt_impl_2402388783;
  var numberToChar = kotlin_kotlin.$crossModule$.numberToChar;
  var charSequenceLength = kotlin_kotlin.$crossModule$.charSequenceLength;
  var indexOf$default = kotlin_kotlin.$crossModule$.indexOf$default;
  var ArrayList_init_$Create$ = kotlin_kotlin.$crossModule$.ArrayList_init_$Create$_1;
  var last = kotlin_kotlin.$crossModule$.last;
  var removeLast = kotlin_kotlin.$crossModule$.removeLast;
  var lastIndexOf$default = kotlin_kotlin.$crossModule$.lastIndexOf$default_1;
  var Long = kotlin_kotlin.$crossModule$.Long;
  var Char__minus_impl_3686210483 = kotlin_kotlin.$crossModule$.Char__minus_impl_3686210483;
  var Companion_getInstance_0 = kotlin_kotlin.$crossModule$.Companion_getInstance_1;
  var charArray = kotlin_kotlin.$crossModule$.charArray;
  var Companion_getInstance_1 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$crossModule$.Companion_getInstance;
  var SerializationException_init_$Create$ = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$crossModule$.SerializationException_init_$Create$;
  var singleOrNull = kotlin_kotlin.$crossModule$.singleOrNull;
  var arrayIterator = kotlin_kotlin.$crossModule$.arrayIterator;
  var emptyMap = kotlin_kotlin.$crossModule$.emptyMap;
  var getValue = kotlin_kotlin.$crossModule$.getValue;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$crossModule$.LinkedHashMap_init_$Create$_1;
  var AbstractPolymorphicSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$crossModule$.AbstractPolymorphicSerializer;
  var SerializationStrategy = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$crossModule$.SerializationStrategy;
  var isObject = kotlin_kotlin.$crossModule$.isObject;
  var getKClass = kotlin_kotlin.$crossModule$.getKClass;
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
  var contextual = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$crossModule$.contextual;
  var SerializersModuleCollector = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$crossModule$.SerializersModuleCollector;
  var AbstractDecoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$crossModule$.AbstractDecoder;
  var IllegalArgumentException = kotlin_kotlin.$crossModule$.IllegalArgumentException;
  var isFinite = kotlin_kotlin.$crossModule$.isFinite_1;
  var isFinite_0 = kotlin_kotlin.$crossModule$.isFinite;
  var decodeNullableSerializableValue = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$crossModule$.decodeNullableSerializableValue;
  var decodeSequentially = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$crossModule$.decodeSequentially;
  var decodeCollectionSize = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$crossModule$.decodeCollectionSize;
  var decodeSerializableElement$default = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$crossModule$.decodeSerializableElement$default;
  var decodeNullableSerializableElement$default = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$crossModule$.decodeNullableSerializableElement$default;
  var toUInt = kotlin_kotlin.$crossModule$.toUInt;
  var _UInt___get_data__impl__908473640 = kotlin_kotlin.$crossModule$._UInt___get_data__impl__908473640;
  var toULong = kotlin_kotlin.$crossModule$.toULong;
  var toUByte = kotlin_kotlin.$crossModule$.toUByte;
  var _UByte___get_data__impl__1189880595 = kotlin_kotlin.$crossModule$._UByte___get_data__impl__1189880595;
  var toUShort = kotlin_kotlin.$crossModule$.toUShort;
  var _UShort___get_data__impl__26876597 = kotlin_kotlin.$crossModule$._UShort___get_data__impl__26876597;
  var decodeSerializableValue = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$crossModule$.decodeSerializableValue;
  var AbstractEncoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$crossModule$.AbstractEncoder;
  var encodeNotNullMark = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$crossModule$.encodeNotNullMark;
  var beginCollection = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$crossModule$.beginCollection;
  var encodeNullableSerializableValue = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$crossModule$.encodeNullableSerializableValue;
  var Companion_getInstance_2 = kotlin_kotlin.$crossModule$.Companion_getInstance_4;
  var serializer_1 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$crossModule$.serializer_2;
  var Companion_getInstance_3 = kotlin_kotlin.$crossModule$.Companion_getInstance_3;
  var serializer_2 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$crossModule$.serializer_4;
  var Companion_getInstance_4 = kotlin_kotlin.$crossModule$.Companion_getInstance_6;
  var serializer_3 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$crossModule$.serializer_1;
  var setOf = kotlin_kotlin.$crossModule$.setOf;
  var equals_0 = kotlin_kotlin.$crossModule$.equals_1;
  var toByte = kotlin_kotlin.$crossModule$.toByte;
  var noWhenBranchMatchedException = kotlin_kotlin.$crossModule$.noWhenBranchMatchedException;
  var NamedValueDecoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$crossModule$.NamedValueDecoder;
  var IllegalArgumentException_init_$Create$_0 = kotlin_kotlin.$crossModule$.IllegalArgumentException_init_$Create$;
  var ByteCompanionObject_getInstance = kotlin_kotlin.$crossModule$.ByteCompanionObject_getInstance;
  var ShortCompanionObject_getInstance = kotlin_kotlin.$crossModule$.ShortCompanionObject_getInstance;
  var toShort = kotlin_kotlin.$crossModule$.toShort;
  var single = kotlin_kotlin.$crossModule$.single;
  var emptySet = kotlin_kotlin.$crossModule$.emptySet;
  var plus = kotlin_kotlin.$crossModule$.plus_2;
  var toList = kotlin_kotlin.$crossModule$.toList;
  var throwUninitializedPropertyAccessException = kotlin_kotlin.$crossModule$.throwUninitializedPropertyAccessException;
  var encodeSerializableValue = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$crossModule$.encodeSerializableValue;
  var shouldEncodeElementDefault = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$crossModule$.shouldEncodeElementDefault;
  var NamedValueEncoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$crossModule$.NamedValueEncoder;
  var THROW_ISE = kotlin_kotlin.$crossModule$.THROW_ISE;
  var Enum = kotlin_kotlin.$crossModule$.Enum;
  var getContextualDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$crossModule$.getContextualDescriptor;
  var StringBuilder_init_$Create$_0 = kotlin_kotlin.$crossModule$.StringBuilder_init_$Create$;
  var HashMap_init_$Create$ = kotlin_kotlin.$crossModule$.HashMap_init_$Create$;
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
  JsonLiteral.prototype = Object.create(JsonPrimitive.prototype);
  JsonLiteral.prototype.constructor = JsonLiteral;
  JsonArray.prototype = Object.create(JsonElement.prototype);
  JsonArray.prototype.constructor = JsonArray;
  ComposerForUnsignedNumbers.prototype = Object.create(Composer.prototype);
  ComposerForUnsignedNumbers.prototype.constructor = ComposerForUnsignedNumbers;
  JsonException.prototype = Object.create(SerializationException.prototype);
  JsonException.prototype.constructor = JsonException;
  JsonEncodingException.prototype = Object.create(JsonException.prototype);
  JsonEncodingException.prototype.constructor = JsonEncodingException;
  JsonDecodingException.prototype = Object.create(JsonException.prototype);
  JsonDecodingException.prototype.constructor = JsonDecodingException;
  StreamingJsonDecoder.prototype = Object.create(AbstractDecoder.prototype);
  StreamingJsonDecoder.prototype.constructor = StreamingJsonDecoder;
  JsonDecoderForUnsignedTypes.prototype = Object.create(AbstractDecoder.prototype);
  JsonDecoderForUnsignedTypes.prototype.constructor = JsonDecoderForUnsignedTypes;
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
  AbstractJsonTreeEncoder$encodeTaggedInline$1.prototype = Object.create(AbstractEncoder.prototype);
  AbstractJsonTreeEncoder$encodeTaggedInline$1.prototype.constructor = AbstractJsonTreeEncoder$encodeTaggedInline$1;
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
    Json.call(this, JsonConfiguration_init_$Create$(false, false, false, false, false, null, false, false, null, false, false, 2047, null), _get_EmptySerializersModule__1292120011());
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
  function Json(configuration, serializersModule) {
    Default_getInstance();
    this.configuration_1 = configuration;
    this.serializersModule_1 = serializersModule;
    this._schemaCache_1 = new DescriptorSchemaCache();
  }
  Json.prototype._get_configuration__311089819_557qfv_k$ = function () {
    return this.configuration_1;
  };
  Json.prototype._get_serializersModule__364239364_60uww4_k$ = function () {
    return this.serializersModule_1;
  };
  Json.prototype._get__schemaCache__4146643177_2gb3mf_k$ = function () {
    return this._schemaCache_1;
  };
  Json.prototype.encodeToString_pl8vu2_k$ = function (serializer, value) {
    var result = new JsonStringBuilder();
    try {
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
    }finally {
      result.release_wtm6d2_k$();
    }
  };
  Json.prototype.decodeFromString_ink0ik_k$ = function (deserializer, string) {
    var lexer = new JsonLexer(string);
    var input = new StreamingJsonDecoder(this, WriteMode_OBJ_getInstance(), lexer);
    var result = input.decodeSerializableValue_xpp80o_k$(deserializer);
    lexer.expectEof_2xcy36_k$();
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
    var builder = new JsonBuilder(from);
    builderAction(builder);
    var conf = builder.build_1k0s4u_k$();
    return new JsonImpl(conf, builder.serializersModule_1);
  }
  function Json$default(from, builderAction, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      from = Default_getInstance();
    return Json_0(from, builderAction);
  }
  function JsonBuilder(json) {
    this.encodeDefaults_1 = json.configuration_1._get_encodeDefaults__2255426691_xqaflp_k$();
    this.ignoreUnknownKeys_1 = json.configuration_1._get_ignoreUnknownKeys__4153108645_2cgiu3_k$();
    this.isLenient_1 = json.configuration_1._get_isLenient__4131730692_2p6q64_k$();
    this.allowStructuredMapKeys_1 = json.configuration_1._get_allowStructuredMapKeys__141016373_2bygxh_k$();
    this.prettyPrint_1 = json.configuration_1._get_prettyPrint__1073381530_hr2ahm_k$();
    this.prettyPrintIndent_1 = json.configuration_1._get_prettyPrintIndent__3554969678_c8kpte_k$();
    this.coerceInputValues_1 = json.configuration_1._get_coerceInputValues__1564306208_pvcie8_k$();
    this.useArrayPolymorphism_1 = json.configuration_1._get_useArrayPolymorphism__4259793650_kxw5q_k$();
    this.classDiscriminator_1 = json.configuration_1._get_classDiscriminator__1173799943_jeultz_k$();
    this.allowSpecialFloatingPointValues_1 = json.configuration_1._get_allowSpecialFloatingPointValues__1768724981_t91wxh_k$();
    this.useAlternativeNames_1 = json.configuration_1._get_useAlternativeNames__3550019471_cbitf5_k$();
    this.serializersModule_1 = json._get_serializersModule__364239364_60uww4_k$();
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
  JsonBuilder.prototype._set_useAlternativeNames__2745938435_sv4806_k$ = function (_set____804775014) {
    this.useAlternativeNames_1 = _set____804775014;
  };
  JsonBuilder.prototype._get_useAlternativeNames__3550019471_cbitf5_k$ = function () {
    return this.useAlternativeNames_1;
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
    return new JsonConfiguration(this.encodeDefaults_1, this.ignoreUnknownKeys_1, this.isLenient_1, this.allowStructuredMapKeys_1, this.prettyPrint_1, this.prettyPrintIndent_1, this.coerceInputValues_1, this.useArrayPolymorphism_1, this.classDiscriminator_1, this.allowSpecialFloatingPointValues_1, this.useAlternativeNames_1);
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
  function JsonImpl(configuration, module_0) {
    Json.call(this, configuration, module_0);
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
  function JsonConfiguration_init_$Init$(encodeDefaults, ignoreUnknownKeys, isLenient, allowStructuredMapKeys, prettyPrint, prettyPrintIndent, coerceInputValues, useArrayPolymorphism, classDiscriminator, allowSpecialFloatingPointValues, useAlternativeNames, $mask0, $marker, $this) {
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
      useAlternativeNames = true;
    JsonConfiguration.call($this, encodeDefaults, ignoreUnknownKeys, isLenient, allowStructuredMapKeys, prettyPrint, prettyPrintIndent, coerceInputValues, useArrayPolymorphism, classDiscriminator, allowSpecialFloatingPointValues, useAlternativeNames);
    return $this;
  }
  function JsonConfiguration_init_$Create$(encodeDefaults, ignoreUnknownKeys, isLenient, allowStructuredMapKeys, prettyPrint, prettyPrintIndent, coerceInputValues, useArrayPolymorphism, classDiscriminator, allowSpecialFloatingPointValues, useAlternativeNames, $mask0, $marker) {
    return JsonConfiguration_init_$Init$(encodeDefaults, ignoreUnknownKeys, isLenient, allowStructuredMapKeys, prettyPrint, prettyPrintIndent, coerceInputValues, useArrayPolymorphism, classDiscriminator, allowSpecialFloatingPointValues, useAlternativeNames, $mask0, $marker, Object.create(JsonConfiguration.prototype));
  }
  function JsonConfiguration(encodeDefaults, ignoreUnknownKeys, isLenient, allowStructuredMapKeys, prettyPrint, prettyPrintIndent, coerceInputValues, useArrayPolymorphism, classDiscriminator, allowSpecialFloatingPointValues, useAlternativeNames) {
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
    this.useAlternativeNames_1 = useAlternativeNames;
  }
  JsonConfiguration.prototype._get_encodeDefaults__2255426691_xqaflp_k$ = function () {
    return this.encodeDefaults_1;
  };
  JsonConfiguration.prototype._get_ignoreUnknownKeys__4153108645_2cgiu3_k$ = function () {
    return this.ignoreUnknownKeys_1;
  };
  JsonConfiguration.prototype._get_isLenient__4131730692_2p6q64_k$ = function () {
    return this.isLenient_1;
  };
  JsonConfiguration.prototype._get_allowStructuredMapKeys__141016373_2bygxh_k$ = function () {
    return this.allowStructuredMapKeys_1;
  };
  JsonConfiguration.prototype._get_prettyPrint__1073381530_hr2ahm_k$ = function () {
    return this.prettyPrint_1;
  };
  JsonConfiguration.prototype._get_prettyPrintIndent__3554969678_c8kpte_k$ = function () {
    return this.prettyPrintIndent_1;
  };
  JsonConfiguration.prototype._get_coerceInputValues__1564306208_pvcie8_k$ = function () {
    return this.coerceInputValues_1;
  };
  JsonConfiguration.prototype._get_useArrayPolymorphism__4259793650_kxw5q_k$ = function () {
    return this.useArrayPolymorphism_1;
  };
  JsonConfiguration.prototype._get_classDiscriminator__1173799943_jeultz_k$ = function () {
    return this.classDiscriminator_1;
  };
  JsonConfiguration.prototype._get_allowSpecialFloatingPointValues__1768724981_t91wxh_k$ = function () {
    return this.allowSpecialFloatingPointValues_1;
  };
  JsonConfiguration.prototype._get_useAlternativeNames__3550019471_cbitf5_k$ = function () {
    return this.useAlternativeNames_1;
  };
  JsonConfiguration.prototype.toString = function () {
    return 'JsonConfiguration(encodeDefaults=' + this.encodeDefaults_1 + ', ignoreUnknownKeys=' + this.ignoreUnknownKeys_1 + ', isLenient=' + this.isLenient_1 + ', allowStructuredMapKeys=' + this.allowStructuredMapKeys_1 + ', prettyPrint=' + this.prettyPrint_1 + ", prettyPrintIndent='" + this.prettyPrintIndent_1 + "', coerceInputValues=" + this.coerceInputValues_1 + ', useArrayPolymorphism=' + this.useArrayPolymorphism_1 + ", classDiscriminator='" + this.classDiscriminator_1 + "', allowSpecialFloatingPointValues=" + this.allowSpecialFloatingPointValues_1 + ')';
  };
  JsonConfiguration.$metadata$ = {
    simpleName: 'JsonConfiguration',
    kind: 'class',
    interfaces: []
  };
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
  function Companion_getInstance_5() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function JsonElement() {
    Companion_getInstance_5();
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
  function Companion_getInstance_6() {
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
      var tmp$ret$3;
      $l$block_2: {
        {
        }
        var tmp$ret$2;
        $l$block_1: {
          var tmp0_apply_0_1 = StringBuilder_init_$Create$();
          {
          }
          {
            printQuoted(tmp0_apply_0_1, k);
            tmp0_apply_0_1.append_t8oh9e_k$(_Char___init__impl__380027157(58));
            Unit_getInstance();
            tmp0_apply_0_1.append_t8pm91_k$(v);
            Unit_getInstance();
          }
          tmp$ret$2 = tmp0_apply_0_1;
          break $l$block_1;
        }
        tmp$ret$3 = tmp$ret$2.toString();
        break $l$block_2;
      }
      return tmp$ret$3;
    };
  }
  function JsonObject(content) {
    Companion_getInstance_6();
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
  function Companion_getInstance_7() {
    if (Companion_instance_1 == null)
      new Companion_1();
    return Companion_instance_1;
  }
  function JsonPrimitive() {
    Companion_getInstance_7();
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
  function Companion_getInstance_8() {
    if (Companion_instance_2 == null)
      new Companion_2();
    return Companion_instance_2;
  }
  function JsonArray(content) {
    Companion_getInstance_8();
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
  function _get_booleanOrNull__1934131903(_this__1828080292) {
    return toBooleanStrictOrNull(_this__1828080292._get_content__1558689208_ps04ag_k$());
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
    return function ($this$buildSerialDescriptor) {
      var tmp = defer(JsonElementSerializer$descriptor$lambda$lambda());
      $this$buildSerialDescriptor.element$default_m7h690_k$('JsonPrimitive', tmp, null, false, 12, null);
      var tmp_0 = defer(JsonElementSerializer$descriptor$lambda$lambda_0());
      $this$buildSerialDescriptor.element$default_m7h690_k$('JsonNull', tmp_0, null, false, 12, null);
      var tmp_1 = defer(JsonElementSerializer$descriptor$lambda$lambda_1());
      $this$buildSerialDescriptor.element$default_m7h690_k$('JsonLiteral', tmp_1, null, false, 12, null);
      var tmp_2 = defer(JsonElementSerializer$descriptor$lambda$lambda_2());
      $this$buildSerialDescriptor.element$default_m7h690_k$('JsonObject', tmp_2, null, false, 12, null);
      var tmp_3 = defer(JsonElementSerializer$descriptor$lambda$lambda_3());
      $this$buildSerialDescriptor.element$default_m7h690_k$('JsonArray', tmp_3, null, false, 12, null);
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
    this.$$delegate_0__1 = MapSerializer(serializer(StringCompanionObject_getInstance()), JsonElementSerializer_getInstance())._get_descriptor__684124924_bbb664_k$();
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
  JsonObjectDescriptor.prototype._get_isInline__2852845512_nuloag_k$ = function () {
    return this.$$delegate_0__1._get_isInline__2852845512_nuloag_k$();
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
    MapSerializer(serializer(StringCompanionObject_getInstance()), JsonElementSerializer_getInstance()).serialize_32qylj_k$(encoder, value);
  };
  JsonObjectSerializer.prototype.serialize_32qylj_k$ = function (encoder, value) {
    return this.serialize_wwmfvn_k$(encoder, value instanceof JsonObject ? value : THROW_CCE());
  };
  JsonObjectSerializer.prototype.deserialize_2t41fm_k$ = function (decoder) {
    verify_0(decoder);
    return new JsonObject(MapSerializer(serializer(StringCompanionObject_getInstance()), JsonElementSerializer_getInstance()).deserialize_2t41fm_k$(decoder));
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
    this.$$delegate_0__1 = ListSerializer(JsonElementSerializer_getInstance())._get_descriptor__684124924_bbb664_k$();
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
  JsonArrayDescriptor.prototype._get_isInline__2852845512_nuloag_k$ = function () {
    return this.$$delegate_0__1._get_isInline__2852845512_nuloag_k$();
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
    if (decoder.decodeNotNullMark_us4ba1_k$()) {
      throw new JsonDecodingException("Expected 'null' literal");
    }
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
    var tmp0_safe_receiver = _get_longOrNull__3875291557(value);
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp$ret$0;
      {
        {
        }
        return encoder.encodeLong_rk3ab9_k$(tmp0_safe_receiver);
      }
    }
    Unit_getInstance();
    var tmp1_safe_receiver = toULongOrNull(value._get_content__1558689208_ps04ag_k$());
    var tmp = tmp1_safe_receiver;
    if ((tmp == null ? null : new ULong(tmp)) == null)
      null;
    else {
      {
        var tmp$ret$2;
        {
          {
          }
          var tmp_0 = encoder.encodeInline_8gn4q6_k$(serializer_0(Companion_getInstance())._get_descriptor__684124924_bbb664_k$());
          var tmp$ret$1;
          $l$block: {
            tmp$ret$1 = _ULong___get_data__impl__934646663(tmp1_safe_receiver);
            break $l$block;
          }
          tmp_0.encodeLong_rk3ab9_k$(tmp$ret$1);
          return Unit_getInstance();
        }
      }
    }
    Unit_getInstance();
    var tmp2_safe_receiver = _get_doubleOrNull__2770531184(value);
    if (tmp2_safe_receiver == null)
      null;
    else {
      var tmp$ret$3;
      {
        {
        }
        return encoder.encodeDouble_79ztsb_k$(tmp2_safe_receiver);
      }
    }
    Unit_getInstance();
    var tmp3_safe_receiver = _get_booleanOrNull__1934131903(value);
    if (tmp3_safe_receiver == null)
      null;
    else {
      var tmp$ret$4;
      {
        {
        }
        return encoder.encodeBoolean_6cztl5_k$(tmp3_safe_receiver);
      }
    }
    Unit_getInstance();
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
  function JsonNames(names) {
    this.names_1 = names;
  }
  JsonNames.prototype._get_names__3454403977_dwg6t3_k$ = function () {
    return this.names_1;
  };
  JsonNames.prototype.equals = function (other) {
    if (!(other instanceof JsonNames))
      return false;
    else {
    }
    var tmp0_other_with_cast = other instanceof JsonNames ? other : THROW_CCE();
    if (!contentEquals(this.names_1, tmp0_other_with_cast.names_1))
      return false;
    return true;
  };
  JsonNames.prototype.hashCode = function () {
    return imul(getStringHashCode('names'), 127) ^ hashCode(this.names_1);
  };
  JsonNames.prototype.toString = function () {
    return '@kotlinx.serialization.json.JsonNames(names=' + toString(this.names_1) + ')';
  };
  JsonNames.$metadata$ = {
    simpleName: 'JsonNames',
    kind: 'class',
    interfaces: [Annotation]
  };
  function _set_level__1042945601($this, _set____804775014) {
    $this.level_1 = _set____804775014;
  }
  function _get_level__3401107661($this) {
    return $this.level_1;
  }
  function _set_writingFirst__7482531($this, _set____804775014) {
    $this.writingFirst_1 = _set____804775014;
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
  Composer.prototype._get_json__801013347_d8whur_k$ = function () {
    return this.json_1;
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
      this.print_mp71d1_k$('\n');
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
              this.print_mp71d1_k$(this.json_1._get_configuration__311089819_557qfv_k$()._get_prettyPrintIndent__3554969678_c8kpte_k$());
            }
          }
           while (inductionVariable < tmp0_repeat_0);
      }
    }
  };
  Composer.prototype.space_pnmf91_k$ = function () {
    if (this.json_1._get_configuration__311089819_557qfv_k$()._get_prettyPrint__1073381530_hr2ahm_k$())
      this.print_kq9ffk_k$(_Char___init__impl__380027157(32));
  };
  Composer.prototype.print_kq9ffk_k$ = function (v) {
    return this.sb_1.append_y20c3x_k$(v);
  };
  Composer.prototype.print_mp71d1_k$ = function (v) {
    return this.sb_1.append_1o6mm0_k$(v);
  };
  Composer.prototype.print_hp9wj4_k$ = function (v) {
    return this.sb_1.append_1o6mm0_k$(v.toString());
  };
  Composer.prototype.print_xvzbiz_k$ = function (v) {
    return this.sb_1.append_1o6mm0_k$(v.toString());
  };
  Composer.prototype.print_wuq48e_k$ = function (v) {
    return this.sb_1.append_gvce4t_k$(toLong_0(v));
  };
  Composer.prototype.print_cg84b4_k$ = function (v) {
    return this.sb_1.append_gvce4t_k$(toLong_0(v));
  };
  Composer.prototype.print_p8se77_k$ = function (v) {
    return this.sb_1.append_gvce4t_k$(toLong_0(v));
  };
  Composer.prototype.print_u73at6_k$ = function (v) {
    return this.sb_1.append_gvce4t_k$(v);
  };
  Composer.prototype.print_8kbg64_k$ = function (v) {
    return this.sb_1.append_1o6mm0_k$(v.toString());
  };
  Composer.prototype.printQuoted_vsh1i5_k$ = function (value) {
    return this.sb_1.appendQuoted_lngcuo_k$(value);
  };
  Composer.$metadata$ = {
    simpleName: 'Composer',
    kind: 'class',
    interfaces: []
  };
  function ComposerForUnsignedNumbers(sb, json) {
    Composer.call(this, sb, json);
  }
  ComposerForUnsignedNumbers.prototype.print_p8se77_k$ = function (v) {
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = _UInt___init__impl__1282792953(v);
      break $l$block;
    }
    return Composer.prototype.print_mp71d1_k$.call(this, UInt__toString_impl_3489657447(tmp$ret$0));
  };
  ComposerForUnsignedNumbers.prototype.print_u73at6_k$ = function (v) {
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = _ULong___init__impl__737756120(v);
      break $l$block;
    }
    return Composer.prototype.print_mp71d1_k$.call(this, ULong__toString_impl_922614896(tmp$ret$0));
  };
  ComposerForUnsignedNumbers.prototype.print_wuq48e_k$ = function (v) {
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = _UByte___init__impl__983398756(v);
      break $l$block;
    }
    return Composer.prototype.print_mp71d1_k$.call(this, UByte__toString_impl_4242569316(tmp$ret$0));
  };
  ComposerForUnsignedNumbers.prototype.print_cg84b4_k$ = function (v) {
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = _UShort___init__impl__3115094534(v);
      break $l$block;
    }
    return Composer.prototype.print_mp71d1_k$.call(this, UShort__toString_impl_3426107642(tmp$ret$0));
  };
  ComposerForUnsignedNumbers.$metadata$ = {
    simpleName: 'ComposerForUnsignedNumbers',
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
  function JsonDecodingException_1(offset, message) {
    return new JsonDecodingException(offset >= 0 ? 'Unexpected JSON token at offset ' + offset + ': ' + message : message);
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
  function unexpectedFpErrorMessage(value, key, output) {
    var tmp = 'Unexpected special floating-point value ' + toString(value) + ' with key ' + key + '. By default, ' + 'non-finite floating point values are prohibited because they do not conform JSON specification. ' + (_get_specialFlowingValuesHint__2362587175() + '\n');
    return tmp + ('Current output: ' + minify$default(output, 0, 1, null));
  }
  function _get_source__263461456($this) {
    return $this.source_1;
  }
  function isValidValueStart($this, c) {
    var tmp0_subject = c;
    return (((equals(new Char(tmp0_subject), new Char(_Char___init__impl__380027157(125))) ? true : equals(new Char(tmp0_subject), new Char(_Char___init__impl__380027157(93)))) ? true : equals(new Char(tmp0_subject), new Char(_Char___init__impl__380027157(58)))) ? true : equals(new Char(tmp0_subject), new Char(_Char___init__impl__380027157(44)))) ? false : true;
  }
  function _set_peekedString__4191111884($this, _set____804775014) {
    $this.peekedString_1 = _set____804775014;
  }
  function _get_peekedString__836297408($this) {
    return $this.peekedString_1;
  }
  function _set_escapedString__3791878865($this, _set____804775014) {
    $this.escapedString_1 = _set____804775014;
  }
  function _get_escapedString__2871845213($this) {
    return $this.escapedString_1;
  }
  function unexpectedToken($this, expected) {
    var tmp0_this = $this;
    tmp0_this.currentPosition_1 = tmp0_this.currentPosition_1 - 1 | 0;
    Unit_getInstance();
    if (equals(new Char(expected), new Char(_Char___init__impl__380027157(34))) ? $this.consumeStringLenient_9oypvu_k$() === 'null' : false) {
      $this.fail_8sige4_k$("Expected string literal but 'null' literal was found.\nUse 'coerceInputValues = true' in 'Json {}` builder to coerce nulls to default values.", $this.currentPosition_1 - 4 | 0);
    }
    fail($this, charToTokenClass(expected));
  }
  function fail($this, expectedToken) {
    var tmp0_subject = expectedToken;
    var expected = tmp0_subject === 1 ? "quotation mark '\"'" : tmp0_subject === 4 ? "comma ','" : tmp0_subject === 5 ? "semicolon ':'" : tmp0_subject === 6 ? "start of the object '{'" : tmp0_subject === 7 ? "end of the object '}'" : tmp0_subject === 8 ? "start of the array '['" : tmp0_subject === 9 ? "end of the array ']'" : 'valid token';
    var s = ($this.currentPosition_1 === $this.source_1.length ? true : $this.currentPosition_1 <= 0) ? 'EOF' : toString_0(charSequenceGet($this.source_1, $this.currentPosition_1 - 1 | 0));
    $this.fail_8sige4_k$('Expected ' + expected + ", but had '" + s + "' instead", $this.currentPosition_1 - 1 | 0);
  }
  function skipWhitespaces($this) {
    var current = $this.currentPosition_1;
    $l$loop: while (current < $this.source_1.length) {
      var c = charSequenceGet($this.source_1, current);
      if (((equals(new Char(c), new Char(_Char___init__impl__380027157(32))) ? true : equals(new Char(c), new Char(_Char___init__impl__380027157(10)))) ? true : equals(new Char(c), new Char(_Char___init__impl__380027157(13)))) ? true : equals(new Char(c), new Char(_Char___init__impl__380027157(9)))) {
        current = current + 1 | 0;
        Unit_getInstance();
      } else {
        break $l$loop;
      }
    }
    $this.currentPosition_1 = current;
    return current;
  }
  function consumeString($this, startPosition, current) {
    var currentPosition = current;
    var lastPosition = startPosition;
    var source = $this.source_1;
    var char = charSequenceGet(source, currentPosition);
    while (!equals(new Char(char), new Char(_Char___init__impl__380027157(34)))) {
      if (equals(new Char(char), new Char(_Char___init__impl__380027157(92)))) {
        currentPosition = appendEscape($this, lastPosition, currentPosition);
        lastPosition = currentPosition;
      } else {
        currentPosition = currentPosition + 1 | 0;
        if (currentPosition >= source.length) {
          $this.fail_8sige4_k$('EOF', currentPosition);
        } else {
        }
      }
      char = charSequenceGet(source, currentPosition);
    }
    var tmp;
    if (lastPosition === startPosition) {
      var tmp$ret$1;
      $l$block_0: {
        var tmp0_substring_0 = lastPosition;
        var tmp1_substring_0 = currentPosition;
        var tmp$ret$0;
        $l$block: {
          tmp$ret$0 = source;
          break $l$block;
        }
        tmp$ret$1 = tmp$ret$0.substring(tmp0_substring_0, tmp1_substring_0);
        break $l$block_0;
      }
      tmp = tmp$ret$1;
    } else {
      tmp = decodedString($this, lastPosition, currentPosition);
    }
    var string = tmp;
    $this.currentPosition_1 = currentPosition + 1 | 0;
    return string;
  }
  function appendEscape($this, lastPosition, current) {
    $this.escapedString_1.append_tbojcw_k$($this.source_1, lastPosition, current);
    Unit_getInstance();
    return appendEsc($this, current + 1 | 0);
  }
  function decodedString($this, lastPosition, currentPosition) {
    appendRange($this, lastPosition, currentPosition);
    var result = $this.escapedString_1.toString();
    $this.escapedString_1.setLength_kzn4fs_k$(0);
    return result;
  }
  function takePeeked($this) {
    var tmp$ret$0;
    $l$block: {
      var tmp0_also_0 = ensureNotNull($this.peekedString_1);
      {
      }
      {
        $this.peekedString_1 = null;
      }
      tmp$ret$0 = tmp0_also_0;
      break $l$block;
    }
    return tmp$ret$0;
  }
  function appendRange($this, fromIndex, toIndex) {
    $this.escapedString_1.append_tbojcw_k$($this.source_1, fromIndex, toIndex);
    Unit_getInstance();
  }
  function appendEsc($this, startPosition) {
    var currentPosition = startPosition;
    var tmp0 = currentPosition;
    currentPosition = tmp0 + 1 | 0;
    var currentChar = charSequenceGet($this.source_1, tmp0);
    if (equals(new Char(currentChar), new Char(_Char___init__impl__380027157(117)))) {
      return appendHex($this, $this.source_1, currentPosition);
    }
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = Char__toInt_impl_2402388783(currentChar);
      break $l$block;
    }
    var c = escapeToChar(tmp$ret$0);
    if (equals(new Char(c), new Char(_Char___init__impl__380027157(0)))) {
      var tmp = "Invalid escaped char '" + new Char(currentChar) + "'";
      $this.fail$default_ojg9wb_k$(tmp, 0, 2, null);
    }
    $this.escapedString_1.append_t8oh9e_k$(c);
    Unit_getInstance();
    return currentPosition;
  }
  function appendHex($this, source, startPos) {
    if ((startPos + 4 | 0) >= source.length) {
      $this.fail$default_ojg9wb_k$('Unexpected EOF during unicode escape', 0, 2, null);
    }
    $this.escapedString_1.append_t8oh9e_k$(numberToChar((((fromHexChar($this, source, startPos) << 12) + (fromHexChar($this, source, startPos + 1 | 0) << 8) | 0) + (fromHexChar($this, source, startPos + 2 | 0) << 4) | 0) + fromHexChar($this, source, startPos + 3 | 0) | 0));
    Unit_getInstance();
    return startPos + 4 | 0;
  }
  function fromHexChar($this, source, currentPosition) {
    var character = charSequenceGet(source, currentPosition);
    var tmp;
    if (_Char___init__impl__380027157(48) <= character ? character <= _Char___init__impl__380027157(57) : false) {
      var tmp$ret$0;
      $l$block: {
        tmp$ret$0 = Char__toInt_impl_2402388783(character);
        break $l$block;
      }
      var tmp_0 = tmp$ret$0;
      var tmp$ret$1;
      $l$block_0: {
        tmp$ret$1 = 48;
        break $l$block_0;
      }
      tmp = tmp_0 - tmp$ret$1 | 0;
    } else if (_Char___init__impl__380027157(97) <= character ? character <= _Char___init__impl__380027157(102) : false) {
      var tmp$ret$2;
      $l$block_1: {
        tmp$ret$2 = Char__toInt_impl_2402388783(character);
        break $l$block_1;
      }
      var tmp_1 = tmp$ret$2;
      var tmp$ret$3;
      $l$block_2: {
        tmp$ret$3 = 97;
        break $l$block_2;
      }
      tmp = (tmp_1 - tmp$ret$3 | 0) + 10 | 0;
    } else if (_Char___init__impl__380027157(65) <= character ? character <= _Char___init__impl__380027157(70) : false) {
      var tmp$ret$4;
      $l$block_3: {
        tmp$ret$4 = Char__toInt_impl_2402388783(character);
        break $l$block_3;
      }
      var tmp_2 = tmp$ret$4;
      var tmp$ret$5;
      $l$block_4: {
        tmp$ret$5 = 65;
        break $l$block_4;
      }
      tmp = (tmp_2 - tmp$ret$5 | 0) + 10 | 0;
    } else {
      var tmp_3 = "Invalid toHexChar char '" + new Char(character) + "' in unicode escape";
      $this.fail$default_ojg9wb_k$(tmp_3, 0, 2, null);
    }
    return tmp;
  }
  function consumeBoolean($this, start) {
    var current = start;
    if (current === $this.source_1.length) {
      $this.fail$default_ojg9wb_k$('EOF', 0, 2, null);
    }
    var tmp$ret$0;
    $l$block: {
      var tmp0 = current;
      current = tmp0 + 1 | 0;
      var tmp0__get_code__0_2225219253 = charSequenceGet($this.source_1, tmp0);
      tmp$ret$0 = Char__toInt_impl_2402388783(tmp0__get_code__0_2225219253);
      break $l$block;
    }
    var tmp1_subject = tmp$ret$0 | 32;
    var tmp;
    var tmp$ret$1;
    $l$block_0: {
      tmp$ret$1 = 116;
      break $l$block_0;
    }
    if (tmp1_subject === tmp$ret$1) {
      consumeBooleanLiteral($this, 'rue', current);
      tmp = true;
    } else {
      var tmp$ret$2;
      $l$block_1: {
        tmp$ret$2 = 102;
        break $l$block_1;
      }
      if (tmp1_subject === tmp$ret$2) {
        consumeBooleanLiteral($this, 'alse', current);
        tmp = false;
      } else {
        {
          var tmp_0 = "Expected valid boolean literal prefix, but had '" + $this.consumeStringLenient_9oypvu_k$() + "'";
          $this.fail$default_ojg9wb_k$(tmp_0, 0, 2, null);
        }
      }
    }
    return tmp;
  }
  function consumeBooleanLiteral($this, literalSuffix, current) {
    if (($this.source_1.length - current | 0) < literalSuffix.length) {
      $this.fail$default_ojg9wb_k$('Unexpected end of boolean literal', 0, 2, null);
    }
    var inductionVariable = 0;
    var last = charSequenceLength(literalSuffix) - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var expected = charSequenceGet(literalSuffix, i);
        var actual = charSequenceGet($this.source_1, current + i | 0);
        var tmp$ret$0;
        $l$block: {
          tmp$ret$0 = Char__toInt_impl_2402388783(expected);
          break $l$block;
        }
        var tmp = tmp$ret$0;
        var tmp$ret$1;
        $l$block_0: {
          tmp$ret$1 = Char__toInt_impl_2402388783(actual);
          break $l$block_0;
        }
        if (!(tmp === (tmp$ret$1 | 32))) {
          var tmp_0 = "Expected valid boolean literal prefix, but had '" + $this.consumeStringLenient_9oypvu_k$() + "'";
          $this.fail$default_ojg9wb_k$(tmp_0, 0, 2, null);
        } else {
        }
      }
       while (inductionVariable <= last);
    $this.currentPosition_1 = current + literalSuffix.length | 0;
  }
  function JsonLexer(source) {
    this.source_1 = source;
    this.currentPosition_1 = 0;
    this.peekedString_1 = null;
    this.escapedString_1 = StringBuilder_init_$Create$();
  }
  JsonLexer.prototype._set_currentPosition__257813251_ilyt3h_k$ = function (_set____804775014) {
    this.currentPosition_1 = _set____804775014;
  };
  JsonLexer.prototype._get_currentPosition__868736655_ed81hr_k$ = function () {
    return this.currentPosition_1;
  };
  JsonLexer.prototype.expectEof_2xcy36_k$ = function () {
    var nextToken = this.consumeNextToken_uf1vsa_k$();
    if (!(nextToken === 10)) {
      var tmp = 'Expected EOF, but had ' + new Char(charSequenceGet(this.source_1, this.currentPosition_1 - 1 | 0)) + ' instead';
      this.fail$default_ojg9wb_k$(tmp, 0, 2, null);
    }
  };
  JsonLexer.prototype.tryConsumeComma_9n2ve4_k$ = function () {
    var current = skipWhitespaces(this);
    if (current === this.source_1.length)
      return false;
    if (equals(new Char(charSequenceGet(this.source_1, current)), new Char(_Char___init__impl__380027157(44)))) {
      var tmp0_this = this;
      tmp0_this.currentPosition_1 = tmp0_this.currentPosition_1 + 1 | 0;
      Unit_getInstance();
      return true;
    }
    return false;
  };
  JsonLexer.prototype.canConsumeValue_oljqd7_k$ = function () {
    var current = this.currentPosition_1;
    $l$loop: while (current < this.source_1.length) {
      var c = charSequenceGet(this.source_1, current);
      if (((equals(new Char(c), new Char(_Char___init__impl__380027157(32))) ? true : equals(new Char(c), new Char(_Char___init__impl__380027157(10)))) ? true : equals(new Char(c), new Char(_Char___init__impl__380027157(13)))) ? true : equals(new Char(c), new Char(_Char___init__impl__380027157(9)))) {
        current = current + 1 | 0;
        Unit_getInstance();
        continue $l$loop;
      }
      this.currentPosition_1 = current;
      return isValidValueStart(this, c);
    }
    this.currentPosition_1 = current;
    return false;
  };
  JsonLexer.prototype.consumeNextToken_trhodc_k$ = function (expected) {
    var token = this.consumeNextToken_uf1vsa_k$();
    if (!(token === expected)) {
      fail(this, expected);
    }
    return token;
  };
  JsonLexer.prototype.consumeNextToken_ev7fkz_k$ = function (expected) {
    var source = this.source_1;
    $l$loop: while (this.currentPosition_1 < source.length) {
      var tmp0_this = this;
      var tmp1 = tmp0_this.currentPosition_1;
      tmp0_this.currentPosition_1 = tmp1 + 1 | 0;
      var c = charSequenceGet(source, tmp1);
      if (((equals(new Char(c), new Char(_Char___init__impl__380027157(32))) ? true : equals(new Char(c), new Char(_Char___init__impl__380027157(10)))) ? true : equals(new Char(c), new Char(_Char___init__impl__380027157(13)))) ? true : equals(new Char(c), new Char(_Char___init__impl__380027157(9))))
        continue $l$loop;
      if (equals(new Char(c), new Char(expected)))
        return Unit_getInstance();
      unexpectedToken(this, expected);
    }
    unexpectedToken(this, expected);
  };
  JsonLexer.prototype.peekNextToken_1gqwr9_k$ = function () {
    var source = this.source_1;
    $l$loop: while (this.currentPosition_1 < source.length) {
      var ch = charSequenceGet(source, this.currentPosition_1);
      if (((equals(new Char(ch), new Char(_Char___init__impl__380027157(32))) ? true : equals(new Char(ch), new Char(_Char___init__impl__380027157(10)))) ? true : equals(new Char(ch), new Char(_Char___init__impl__380027157(13)))) ? true : equals(new Char(ch), new Char(_Char___init__impl__380027157(9)))) {
        var tmp0_this = this;
        tmp0_this.currentPosition_1 = tmp0_this.currentPosition_1 + 1 | 0;
        Unit_getInstance();
        continue $l$loop;
      }
      return charToTokenClass(ch);
    }
    return 10;
  };
  JsonLexer.prototype.consumeNextToken_uf1vsa_k$ = function () {
    var source = this.source_1;
    $l$loop: while (this.currentPosition_1 < source.length) {
      var tmp0_this = this;
      var tmp1 = tmp0_this.currentPosition_1;
      tmp0_this.currentPosition_1 = tmp1 + 1 | 0;
      var ch = charSequenceGet(source, tmp1);
      var tc = charToTokenClass(ch);
      var tmp;
      if (tc === 3) {
        continue $l$loop;
      } else {
        tmp = tc;
      }
      return tmp;
    }
    return 10;
  };
  JsonLexer.prototype.tryConsumeNotNull_blklc7_k$ = function () {
    var current = skipWhitespaces(this);
    var len = this.source_1.length - current | 0;
    if (len < 4)
      return true;
    var inductionVariable = 0;
    if (inductionVariable <= 3)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (!equals(new Char(charSequenceGet('null', i)), new Char(charSequenceGet(this.source_1, current + i | 0))))
          return true;
      }
       while (inductionVariable <= 3);
    if (len > 4 ? charToTokenClass(charSequenceGet(this.source_1, current + 4 | 0)) === 0 : false)
      return true;
    this.currentPosition_1 = current + 4 | 0;
    return false;
  };
  JsonLexer.prototype.peekString_9klnyq_k$ = function (isLenient) {
    var token = this.peekNextToken_1gqwr9_k$();
    var tmp;
    if (isLenient) {
      if (!(token === 1) ? !(token === 0) : false)
        return null;
      tmp = this.consumeStringLenient_9oypvu_k$();
    } else {
      if (!(token === 1))
        return null;
      tmp = this.consumeString_j3j2z7_k$();
    }
    var string = tmp;
    this.peekedString_1 = string;
    return string;
  };
  JsonLexer.prototype.consumeKeyString_mfa3ws_k$ = function () {
    this.consumeNextToken_ev7fkz_k$(_Char___init__impl__380027157(34));
    var current = this.currentPosition_1;
    var tmp = _Char___init__impl__380027157(34);
    var closingQuote = indexOf$default(this.source_1, tmp, current, false, 4, null);
    if (closingQuote === -1)
      fail(this, 1);
    var inductionVariable = current;
    if (inductionVariable < closingQuote)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (equals(new Char(charSequenceGet(this.source_1, i)), new Char(_Char___init__impl__380027157(92)))) {
          return consumeString(this, this.currentPosition_1, i);
        }
      }
       while (inductionVariable < closingQuote);
    this.currentPosition_1 = closingQuote + 1 | 0;
    var tmp$ret$1;
    $l$block_0: {
      var tmp0_substring_0 = this.source_1;
      var tmp$ret$0;
      $l$block: {
        tmp$ret$0 = tmp0_substring_0;
        break $l$block;
      }
      tmp$ret$1 = tmp$ret$0.substring(current, closingQuote);
      break $l$block_0;
    }
    return tmp$ret$1;
  };
  JsonLexer.prototype.consumeString_j3j2z7_k$ = function () {
    if (!(this.peekedString_1 == null)) {
      return takePeeked(this);
    }
    return this.consumeKeyString_mfa3ws_k$();
  };
  JsonLexer.prototype.consumeStringLenientNotNull_m2rgts_k$ = function () {
    var result = this.consumeStringLenient_9oypvu_k$();
    if (result === 'null') {
      this.fail$default_ojg9wb_k$("Unexpected 'null' value instead of string literal", 0, 2, null);
    }
    return result;
  };
  JsonLexer.prototype.consumeStringLenient_9oypvu_k$ = function () {
    if (!(this.peekedString_1 == null)) {
      return takePeeked(this);
    }
    var current = skipWhitespaces(this);
    if (current >= this.source_1.length) {
      this.fail_8sige4_k$('EOF', current);
    }
    var token = charToTokenClass(charSequenceGet(this.source_1, current));
    if (token === 1) {
      return this.consumeString_j3j2z7_k$();
    }
    if (!(token === 0)) {
      var tmp = 'Expected beginning of the string, but got ' + new Char(charSequenceGet(this.source_1, current));
      this.fail$default_ojg9wb_k$(tmp, 0, 2, null);
    }
    while (current < this.source_1.length ? charToTokenClass(charSequenceGet(this.source_1, current)) === 0 : false) {
      current = current + 1 | 0;
      Unit_getInstance();
    }
    var tmp$ret$1;
    $l$block_0: {
      var tmp0_substring_0 = this.source_1;
      var tmp1_substring_0 = this.currentPosition_1;
      var tmp2_substring_0 = current;
      var tmp$ret$0;
      $l$block: {
        tmp$ret$0 = tmp0_substring_0;
        break $l$block;
      }
      tmp$ret$1 = tmp$ret$0.substring(tmp1_substring_0, tmp2_substring_0);
      break $l$block_0;
    }
    var result = tmp$ret$1;
    this.currentPosition_1 = current;
    return result;
  };
  JsonLexer.prototype.skipElement_wcp1ak_k$ = function (allowLenientStrings) {
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = ArrayList_init_$Create$();
      break $l$block;
    }
    var tokenStack = tmp$ret$0;
    var lastToken = this.peekNextToken_1gqwr9_k$();
    if (!(lastToken === 8) ? !(lastToken === 6) : false) {
      this.consumeStringLenient_9oypvu_k$();
      Unit_getInstance();
      return Unit_getInstance();
    }
    $l$loop: while (true) {
      lastToken = this.peekNextToken_1gqwr9_k$();
      if (lastToken === 1) {
        if (allowLenientStrings) {
          this.consumeStringLenient_9oypvu_k$();
          Unit_getInstance();
        } else {
          this.consumeKeyString_mfa3ws_k$();
          Unit_getInstance();
        }
        continue $l$loop;
      }
      var tmp0_subject = lastToken;
      if (tmp0_subject === 8 ? true : tmp0_subject === 6) {
        tokenStack.add_1j60pz_k$(lastToken);
        Unit_getInstance();
      } else if (tmp0_subject === 9) {
        if (!(last(tokenStack) === 8))
          throw JsonDecodingException_0(this.currentPosition_1, 'found ] instead of }', this.source_1);
        removeLast(tokenStack);
        Unit_getInstance();
      } else if (tmp0_subject === 7) {
        if (!(last(tokenStack) === 6))
          throw JsonDecodingException_0(this.currentPosition_1, 'found } instead of ]', this.source_1);
        removeLast(tokenStack);
        Unit_getInstance();
      } else if (tmp0_subject === 10) {
        this.fail$default_ojg9wb_k$('Unexpected end of input due to malformed JSON during ignoring unknown keys', 0, 2, null);
      }
      this.consumeNextToken_uf1vsa_k$();
      Unit_getInstance();
      if (tokenStack._get_size__809037418_ddoh9m_k$() === 0)
        return Unit_getInstance();
    }
  };
  JsonLexer.prototype.toString = function () {
    return "JsonReader(source='" + this.source_1 + "', currentPosition=" + this.currentPosition_1 + ')';
  };
  JsonLexer.prototype.failOnUnknownKey_6lfa5c_k$ = function (key) {
    var tmp$ret$1;
    $l$block_0: {
      var tmp0_substring_0 = this.source_1;
      var tmp1_substring_0 = this.currentPosition_1;
      var tmp$ret$0;
      $l$block: {
        tmp$ret$0 = tmp0_substring_0;
        break $l$block;
      }
      tmp$ret$1 = tmp$ret$0.substring(0, tmp1_substring_0);
      break $l$block_0;
    }
    var processed = tmp$ret$1;
    var lastIndexOf = lastIndexOf$default(processed, key, 0, false, 6, null);
    this.fail_8sige4_k$("Encountered an unknown key '" + key + "'.\nUse 'ignoreUnknownKeys = true' in 'Json {}' builder to ignore unknown keys.", lastIndexOf);
  };
  JsonLexer.prototype.fail_8sige4_k$ = function (message, position) {
    throw JsonDecodingException_0(position, message, this.source_1);
  };
  JsonLexer.prototype.fail$default_ojg9wb_k$ = function (message, position, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      position = this.currentPosition_1;
    return this.fail_8sige4_k$(message, position);
  };
  JsonLexer.prototype.require_6c485v_k$ = function (condition, position, message) {
    if (!condition) {
      this.fail_8sige4_k$(message(), position);
    }
  };
  JsonLexer.prototype.consumeNumericLiteral_rdea66_k$ = function () {
    var current = skipWhitespaces(this);
    if (current === this.source_1.length) {
      this.fail$default_ojg9wb_k$('EOF', 0, 2, null);
    }
    var tmp;
    if (equals(new Char(charSequenceGet(this.source_1, current)), new Char(_Char___init__impl__380027157(34)))) {
      current = current + 1 | 0;
      if (current === this.source_1.length) {
        this.fail$default_ojg9wb_k$('EOF', 0, 2, null);
      } else {
      }
      tmp = true;
    } else {
      tmp = false;
    }
    var hasQuotation = tmp;
    var accumulator = new Long(0, 0);
    var isNegative = false;
    var start = current;
    var hasChars = true;
    $l$loop_0: while (hasChars) {
      var ch = charSequenceGet(this.source_1, current);
      if (equals(new Char(ch), new Char(_Char___init__impl__380027157(45)))) {
        if (!(current === start)) {
          this.fail$default_ojg9wb_k$("Unexpected symbol '-' in numeric literal", 0, 2, null);
        }
        isNegative = true;
        current = current + 1 | 0;
        Unit_getInstance();
        continue $l$loop_0;
      }
      var token = charToTokenClass(ch);
      if (!(token === 0))
        break $l$loop_0;
      current = current + 1 | 0;
      Unit_getInstance();
      hasChars = !(current === this.source_1.length);
      var digit = Char__minus_impl_3686210483(ch, _Char___init__impl__380027157(48));
      if (!(0 <= digit ? digit <= 9 : false)) {
        var tmp_0 = "Unexpected symbol '" + new Char(ch) + "' in numeric literal";
        this.fail$default_ojg9wb_k$(tmp_0, 0, 2, null);
      }
      var tmp$ret$1;
      $l$block_0: {
        var tmp$ret$0;
        $l$block: {
          var tmp0_times_0 = accumulator;
          tmp$ret$0 = tmp0_times_0.times_2zfqpc_k$(new Long(10, 0));
          break $l$block;
        }
        var tmp1_minus_0 = tmp$ret$0;
        tmp$ret$1 = tmp1_minus_0.minus_llf5ei_k$(toLong_0(digit));
        break $l$block_0;
      }
      accumulator = tmp$ret$1;
      if (accumulator.compareTo_n4fqi2_k$(new Long(0, 0)) > 0) {
        this.fail$default_ojg9wb_k$('Numeric value overflow', 0, 2, null);
      }
    }
    if (start === current ? true : isNegative ? start === (current - 1 | 0) : false) {
      this.fail$default_ojg9wb_k$('Expected numeric literal', 0, 2, null);
    }
    if (hasQuotation) {
      if (!hasChars) {
        this.fail$default_ojg9wb_k$('EOF', 0, 2, null);
      }
      if (!equals(new Char(charSequenceGet(this.source_1, current)), new Char(_Char___init__impl__380027157(34)))) {
        this.fail$default_ojg9wb_k$('Expected closing quotation mark', 0, 2, null);
      }
      current = current + 1 | 0;
      Unit_getInstance();
    }
    this.currentPosition_1 = current;
    var tmp_1;
    if (isNegative) {
      tmp_1 = accumulator;
    } else if (!accumulator.equals(Companion_getInstance_0()._get_MIN_VALUE__1378605517_mssatp_k$())) {
      tmp_1 = accumulator.unaryMinus_6uz0qp_k$();
    } else {
      this.fail$default_ojg9wb_k$('Numeric value overflow', 0, 2, null);
    }
    return tmp_1;
  };
  JsonLexer.prototype.consumeBoolean_8eci30_k$ = function () {
    return consumeBoolean(this, skipWhitespaces(this));
  };
  JsonLexer.prototype.consumeBooleanLenient_iqeqb9_k$ = function () {
    var current = skipWhitespaces(this);
    if (current === this.source_1.length) {
      this.fail$default_ojg9wb_k$('EOF', 0, 2, null);
    }
    var tmp;
    if (equals(new Char(charSequenceGet(this.source_1, current)), new Char(_Char___init__impl__380027157(34)))) {
      current = current + 1 | 0;
      Unit_getInstance();
      tmp = true;
    } else {
      tmp = false;
    }
    var hasQuotation = tmp;
    var result = consumeBoolean(this, current);
    if (hasQuotation) {
      if (this.currentPosition_1 === this.source_1.length) {
        this.fail$default_ojg9wb_k$('EOF', 0, 2, null);
      }
      if (!equals(new Char(charSequenceGet(this.source_1, this.currentPosition_1)), new Char(_Char___init__impl__380027157(34)))) {
        this.fail$default_ojg9wb_k$('Expected closing quotation mark', 0, 2, null);
      }
      var tmp0_this = this;
      tmp0_this.currentPosition_1 = tmp0_this.currentPosition_1 + 1 | 0;
      Unit_getInstance();
    }
    return result;
  };
  JsonLexer.$metadata$ = {
    simpleName: 'JsonLexer',
    kind: 'class',
    interfaces: []
  };
  function _get_COLON__2205721714() {
    return COLON;
  }
  var COLON;
  function _get_INVALID__3532429338() {
    return INVALID;
  }
  var INVALID;
  function _get_COMMA__2205749180() {
    return COMMA;
  }
  var COMMA;
  function _get_NULL__774226340() {
    return NULL;
  }
  var NULL;
  function _get_BEGIN_OBJ__318898768() {
    return BEGIN_OBJ;
  }
  var BEGIN_OBJ;
  function _get_END_OBJ__368619038() {
    return END_OBJ;
  }
  var END_OBJ;
  function _get_BEGIN_LIST__1293374583() {
    return BEGIN_LIST;
  }
  var BEGIN_LIST;
  function _get_END_LIST__2834702953() {
    return END_LIST;
  }
  var END_LIST;
  function _get_TC_EOF__1534257535() {
    return TC_EOF;
  }
  var TC_EOF;
  function _get_STRING__1121561882() {
    return STRING;
  }
  var STRING;
  function _get_coerceInputValuesHint__1561406553() {
    return coerceInputValuesHint;
  }
  var coerceInputValuesHint;
  function charToTokenClass(c) {
    var tmp;
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = Char__toInt_impl_2402388783(c);
      break $l$block;
    }
    if (tmp$ret$0 < 126) {
      var tmp_0 = CharMappings_getInstance().CHAR_TO_TOKEN_1;
      var tmp$ret$1;
      $l$block_0: {
        tmp$ret$1 = Char__toInt_impl_2402388783(c);
        break $l$block_0;
      }
      tmp = tmp_0[tmp$ret$1];
    } else {
      {
        tmp = 0;
      }
    }
    return tmp;
  }
  function _get_TC_STRING__4014011024() {
    return TC_STRING;
  }
  var TC_STRING;
  function _get_TC_COMMA__1190675334() {
    return TC_COMMA;
  }
  var TC_COMMA;
  function _get_TC_COLON__1190647868() {
    return TC_COLON;
  }
  var TC_COLON;
  function _get_TC_BEGIN_OBJ__3637395738() {
    return TC_BEGIN_OBJ;
  }
  var TC_BEGIN_OBJ;
  function _get_TC_END_OBJ__4135196520() {
    return TC_END_OBJ;
  }
  var TC_END_OBJ;
  function _get_TC_BEGIN_LIST__1087565549() {
    return TC_BEGIN_LIST;
  }
  var TC_BEGIN_LIST;
  function _get_TC_END_LIST__3634487903() {
    return TC_END_LIST;
  }
  var TC_END_LIST;
  function _get_TC_WHITESPACE__55179300() {
    return TC_WHITESPACE;
  }
  var TC_WHITESPACE;
  function _get_TC_OTHER__1538686635() {
    return TC_OTHER;
  }
  var TC_OTHER;
  function _get_STRING_ESC__3080402244() {
    return STRING_ESC;
  }
  var STRING_ESC;
  function _get_UNICODE_ESC__1541125918() {
    return UNICODE_ESC;
  }
  var UNICODE_ESC;
  function escapeToChar(c) {
    return c < 117 ? CharMappings_getInstance().ESCAPE_2_CHAR_1[c] : _Char___init__impl__380027157(0);
  }
  function _get_ignoreUnknownKeysHint__4251639646() {
    return ignoreUnknownKeysHint;
  }
  var ignoreUnknownKeysHint;
  function _get_asciiCaseMask__3040916932() {
    return asciiCaseMask;
  }
  var asciiCaseMask;
  function _get_CTC_MAX__2179331194() {
    return CTC_MAX;
  }
  var CTC_MAX;
  function initEscape($this) {
    var inductionVariable = 0;
    if (inductionVariable <= 31)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        initC2ESC($this, i, _Char___init__impl__380027157(117));
      }
       while (inductionVariable <= 31);
    initC2ESC($this, 8, _Char___init__impl__380027157(98));
    initC2ESC($this, 9, _Char___init__impl__380027157(116));
    initC2ESC($this, 10, _Char___init__impl__380027157(110));
    initC2ESC($this, 12, _Char___init__impl__380027157(102));
    initC2ESC($this, 13, _Char___init__impl__380027157(114));
    initC2ESC_0($this, _Char___init__impl__380027157(47), _Char___init__impl__380027157(47));
    initC2ESC_0($this, _Char___init__impl__380027157(34), _Char___init__impl__380027157(34));
    initC2ESC_0($this, _Char___init__impl__380027157(92), _Char___init__impl__380027157(92));
  }
  function initCharToToken($this) {
    var inductionVariable = 0;
    if (inductionVariable <= 32)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        initC2TC($this, i, 127);
      }
       while (inductionVariable <= 32);
    initC2TC($this, 9, 3);
    initC2TC($this, 10, 3);
    initC2TC($this, 13, 3);
    initC2TC($this, 32, 3);
    initC2TC_0($this, _Char___init__impl__380027157(44), 4);
    initC2TC_0($this, _Char___init__impl__380027157(58), 5);
    initC2TC_0($this, _Char___init__impl__380027157(123), 6);
    initC2TC_0($this, _Char___init__impl__380027157(125), 7);
    initC2TC_0($this, _Char___init__impl__380027157(91), 8);
    initC2TC_0($this, _Char___init__impl__380027157(93), 9);
    initC2TC_0($this, _Char___init__impl__380027157(34), 1);
    initC2TC_0($this, _Char___init__impl__380027157(92), 2);
  }
  function initC2ESC($this, c, esc) {
    if (!equals(new Char(esc), new Char(_Char___init__impl__380027157(117)))) {
      var tmp$ret$0;
      $l$block: {
        tmp$ret$0 = Char__toInt_impl_2402388783(esc);
        break $l$block;
      }
      $this.ESCAPE_2_CHAR_1[tmp$ret$0] = numberToChar(c);
    }
  }
  function initC2ESC_0($this, c, esc) {
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = Char__toInt_impl_2402388783(c);
      break $l$block;
    }
    return initC2ESC($this, tmp$ret$0, esc);
  }
  function initC2TC($this, c, cl) {
    $this.CHAR_TO_TOKEN_1[c] = cl;
  }
  function initC2TC_0($this, c, cl) {
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = Char__toInt_impl_2402388783(c);
      break $l$block;
    }
    return initC2TC($this, tmp$ret$0, cl);
  }
  function CharMappings() {
    CharMappings_instance = this;
    this.ESCAPE_2_CHAR_1 = charArray(117);
    this.CHAR_TO_TOKEN_1 = new Int8Array(126);
    initEscape(this);
    initCharToToken(this);
  }
  CharMappings.prototype._get_ESCAPE_2_CHAR__4210855984_1e2spc_k$ = function () {
    return this.ESCAPE_2_CHAR_1;
  };
  CharMappings.prototype._get_CHAR_TO_TOKEN__2282176179_xad3kd_k$ = function () {
    return this.CHAR_TO_TOKEN_1;
  };
  CharMappings.$metadata$ = {
    simpleName: 'CharMappings',
    kind: 'object',
    interfaces: []
  };
  var CharMappings_instance;
  function CharMappings_getInstance() {
    if (CharMappings_instance == null)
      new CharMappings();
    return CharMappings_instance;
  }
  function _get_ESC2C_MAX__2560763846() {
    return ESC2C_MAX;
  }
  var ESC2C_MAX;
  function _get_TC_INVALID__3004039524() {
    return TC_INVALID;
  }
  var TC_INVALID;
  function _get_TC_STRING_ESC__2874593210() {
    return TC_STRING_ESC;
  }
  var TC_STRING_ESC;
  function _get_lenientHint__2822994611() {
    return lenientHint;
  }
  var lenientHint;
  function _get_specialFlowingValuesHint__2362587175() {
    return specialFlowingValuesHint;
  }
  var specialFlowingValuesHint;
  function _get_allowStructuredMapKeysHint__3890899950() {
    return allowStructuredMapKeysHint;
  }
  var allowStructuredMapKeysHint;
  function _get_JsonAlternativeNamesKey__1245246965() {
    init_properties_JsonNamesMap_kt_4202451614();
    return JsonAlternativeNamesKey;
  }
  var JsonAlternativeNamesKey;
  function tryCoerceValue(_this__1828080292, elementDescriptor, peekNull, peekString, onEnumCoercing) {
    init_properties_JsonNamesMap_kt_4202451614();
    if (!elementDescriptor._get_isNullable__336674624_5kg3sw_k$() ? peekNull() : false)
      return true;
    if (equals(elementDescriptor._get_kind__801637687_d99vlj_k$(), ENUM_getInstance())) {
      var tmp0_elvis_lhs = peekString();
      var tmp;
      if (tmp0_elvis_lhs == null) {
        return false;
      } else {
        tmp = tmp0_elvis_lhs;
      }
      var enumValue = tmp;
      var enumIndex = getJsonNameIndex(elementDescriptor, _this__1828080292, enumValue);
      if (enumIndex === Companion_getInstance_1()._get_UNKNOWN_NAME__1523688395_p75xhn_k$()) {
        onEnumCoercing();
        return true;
      }
    }
    return false;
  }
  function getJsonNameIndex(_this__1828080292, json, name) {
    init_properties_JsonNamesMap_kt_4202451614();
    var index = _this__1828080292.getElementIndex_2hwbkl_k$(name);
    if (!(index === Companion_getInstance_1()._get_UNKNOWN_NAME__1523688395_p75xhn_k$()))
      return index;
    if (!json._get_configuration__311089819_557qfv_k$()._get_useAlternativeNames__3550019471_cbitf5_k$())
      return index;
    var tmp = _get_schemaCache__3869482832(json);
    var tmp_0 = _get_JsonAlternativeNamesKey__1245246965();
    var alternativeNamesMap = tmp.getOrPut_2oe0zz_k$(_this__1828080292, tmp_0, buildAlternativeNamesMap$ref(_this__1828080292));
    var tmp0_elvis_lhs = alternativeNamesMap.get_1mhr4y_k$(name);
    return tmp0_elvis_lhs == null ? Companion_getInstance_1()._get_UNKNOWN_NAME__1523688395_p75xhn_k$() : tmp0_elvis_lhs;
  }
  function getJsonNameIndexOrThrow(_this__1828080292, json, name) {
    init_properties_JsonNamesMap_kt_4202451614();
    var index = getJsonNameIndex(_this__1828080292, json, name);
    if (index === Companion_getInstance_1()._get_UNKNOWN_NAME__1523688395_p75xhn_k$())
      throw SerializationException_init_$Create$(_this__1828080292._get_serialName__1025298892_gyfpos_k$() + " does not contain element with name '" + name + "'");
    return index;
  }
  function buildAlternativeNamesMap(_this__1828080292) {
    init_properties_JsonNamesMap_kt_4202451614();
    var builder = null;
    var inductionVariable = 0;
    var last = _this__1828080292._get_elementsCount__2919979385_mqmrgn_k$();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp$ret$1;
        $l$block_0: {
          var tmp0_filterIsInstance_0 = _this__1828080292.getElementAnnotations_a57oar_k$(i);
          var tmp$ret$0;
          $l$block: {
            var tmp0_filterIsInstanceTo_0_1 = ArrayList_init_$Create$();
            var tmp0_iterator_1_2 = tmp0_filterIsInstance_0.iterator_jk1svi_k$();
            while (tmp0_iterator_1_2.hasNext_bitz1p_k$()) {
              var element_2_3 = tmp0_iterator_1_2.next_20eer_k$();
              if (element_2_3 instanceof JsonNames) {
                tmp0_filterIsInstanceTo_0_1.add_1j60pz_k$(element_2_3);
                Unit_getInstance();
              } else {
              }
            }
            tmp$ret$0 = tmp0_filterIsInstanceTo_0_1;
            break $l$block;
          }
          tmp$ret$1 = tmp$ret$0;
          break $l$block_0;
        }
        var tmp1_safe_receiver = singleOrNull(tmp$ret$1);
        var tmp2_safe_receiver = tmp1_safe_receiver == null ? null : tmp1_safe_receiver._get_names__3454403977_dwg6t3_k$();
        if (tmp2_safe_receiver == null)
          null;
        else {
          {
            var tmp0_iterator_1 = arrayIterator(tmp2_safe_receiver);
            while (tmp0_iterator_1.hasNext_bitz1p_k$()) {
              var element_2 = tmp0_iterator_1.next_20eer_k$();
              {
                if (builder == null)
                  builder = createMapForCache(_this__1828080292._get_elementsCount__2919979385_mqmrgn_k$());
                buildAlternativeNamesMap$putOrThrow(ensureNotNull(builder), _this__1828080292, element_2, i);
              }
            }
          }
          Unit_getInstance();
        }
        Unit_getInstance();
      }
       while (inductionVariable < last);
    var tmp3_elvis_lhs = builder;
    return tmp3_elvis_lhs == null ? emptyMap() : tmp3_elvis_lhs;
  }
  function buildAlternativeNamesMap$putOrThrow(_this__1828080292, $this_buildAlternativeNamesMap, name, index) {
    init_properties_JsonNamesMap_kt_4202451614();
    var tmp$ret$1;
    $l$block_0: {
      var tmp$ret$0;
      $l$block: {
        tmp$ret$0 = (isInterface(_this__1828080292, Map) ? _this__1828080292 : THROW_CCE()).containsKey_wgk31w_k$(name);
        break $l$block;
      }
      tmp$ret$1 = tmp$ret$0;
      break $l$block_0;
    }
    if (tmp$ret$1) {
      throw new JsonException("The suggested name '" + name + "' for property " + $this_buildAlternativeNamesMap.getElementName_ykpypc_k$(index) + ' is already one of the names for property ' + ($this_buildAlternativeNamesMap.getElementName_ykpypc_k$(getValue(_this__1828080292, name)) + ' in ' + $this_buildAlternativeNamesMap));
    } else {
    }
    {
      _this__1828080292.put_3mhbri_k$(name, index);
      Unit_getInstance();
    }
  }
  function tryCoerceValue$lambda() {
    return function () {
      return Unit_getInstance();
    };
  }
  function buildAlternativeNamesMap$ref($boundThis) {
    var l = function () {
      return buildAlternativeNamesMap($boundThis);
    };
    l.callableName = 'buildAlternativeNamesMap';
    return l;
  }
  var properties_initialized_JsonNamesMap_kt_1302888386;
  function init_properties_JsonNamesMap_kt_4202451614() {
    if (!properties_initialized_JsonNamesMap_kt_1302888386) {
      properties_initialized_JsonNamesMap_kt_1302888386 = true;
      JsonAlternativeNamesKey = new Key();
    }
  }
  function _get_lexer__3401167429($this) {
    return $this.lexer_1;
  }
  function _get_isLenient__4131730692($this) {
    return $this.isLenient_1;
  }
  function readObject($this) {
    var lastToken = $this.lexer_1.consumeNextToken_trhodc_k$(_get_TC_BEGIN_OBJ__3637395738());
    if ($this.lexer_1.peekNextToken_1gqwr9_k$() === _get_TC_COMMA__1190675334()) {
      $this.lexer_1.fail$default_ojg9wb_k$('Unexpected leading comma', 0, 2, null);
    }
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = LinkedHashMap_init_$Create$();
      break $l$block;
    }
    var result = tmp$ret$0;
    while ($this.lexer_1.canConsumeValue_oljqd7_k$()) {
      var key = $this.isLenient_1 ? $this.lexer_1.consumeStringLenient_9oypvu_k$() : $this.lexer_1.consumeString_j3j2z7_k$();
      $this.lexer_1.consumeNextToken_trhodc_k$(_get_TC_COLON__1190647868());
      Unit_getInstance();
      var element = $this.read_22xsm_k$();
      {
        result.put_3mhbri_k$(key, element);
        Unit_getInstance();
      }
      lastToken = $this.lexer_1.consumeNextToken_uf1vsa_k$();
      if (!(lastToken === _get_TC_COMMA__1190675334()) ? !(lastToken === _get_TC_END_OBJ__4135196520()) : false) {
        $this.lexer_1.fail$default_ojg9wb_k$('Expected end of the object or comma', 0, 2, null);
      }
    }
    if (lastToken === _get_TC_BEGIN_OBJ__3637395738()) {
      $this.lexer_1.consumeNextToken_trhodc_k$(_get_TC_END_OBJ__4135196520());
      Unit_getInstance();
    } else if (lastToken === _get_TC_COMMA__1190675334()) {
      $this.lexer_1.fail$default_ojg9wb_k$('Unexpected trailing comma', 0, 2, null);
    }
    return new JsonObject(result);
  }
  function readArray($this) {
    var lastToken = $this.lexer_1.consumeNextToken_uf1vsa_k$();
    if ($this.lexer_1.peekNextToken_1gqwr9_k$() === _get_TC_COMMA__1190675334()) {
      $this.lexer_1.fail$default_ojg9wb_k$('Unexpected leading comma', 0, 2, null);
    }
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = ArrayList_init_$Create$();
      break $l$block;
    }
    var result = tmp$ret$0;
    while ($this.lexer_1.canConsumeValue_oljqd7_k$()) {
      var element = $this.read_22xsm_k$();
      result.add_1j60pz_k$(element);
      Unit_getInstance();
      lastToken = $this.lexer_1.consumeNextToken_uf1vsa_k$();
      if (!(lastToken === _get_TC_COMMA__1190675334())) {
        {
          var tmp0_require_0 = $this.lexer_1;
          var tmp1_require_0 = lastToken === _get_TC_END_LIST__3634487903();
          var tmp2_require_0 = tmp0_require_0._get_currentPosition__868736655_ed81hr_k$();
          if (!tmp1_require_0) {
            var tmp$ret$1;
            $l$block_0: {
              tmp$ret$1 = 'Expected end of the array or comma';
              break $l$block_0;
            }
            tmp0_require_0.fail_8sige4_k$(tmp$ret$1, tmp2_require_0);
          }
        }
      }
    }
    if (lastToken === _get_TC_BEGIN_LIST__1087565549()) {
      $this.lexer_1.consumeNextToken_trhodc_k$(_get_TC_END_LIST__3634487903());
      Unit_getInstance();
    } else if (lastToken === _get_TC_COMMA__1190675334()) {
      $this.lexer_1.fail$default_ojg9wb_k$('Unexpected trailing comma', 0, 2, null);
    }
    return new JsonArray(result);
  }
  function readValue($this, isString) {
    var tmp;
    if ($this.isLenient_1 ? true : !isString) {
      tmp = $this.lexer_1.consumeStringLenient_9oypvu_k$();
    } else {
      tmp = $this.lexer_1.consumeString_j3j2z7_k$();
    }
    var string = tmp;
    if (!isString ? string === _get_NULL__774226340() : false)
      return JsonNull_getInstance();
    return new JsonLiteral(string, isString);
  }
  function JsonTreeReader(configuration, lexer) {
    this.lexer_1 = lexer;
    this.isLenient_1 = configuration._get_isLenient__4131730692_2p6q64_k$();
  }
  JsonTreeReader.prototype.read_22xsm_k$ = function () {
    var tmp0_subject = this.lexer_1.peekNextToken_1gqwr9_k$();
    var tmp;
    if (tmp0_subject === _get_TC_STRING__4014011024()) {
      tmp = readValue(this, true);
    } else if (tmp0_subject === _get_TC_OTHER__1538686635()) {
      tmp = readValue(this, false);
    } else if (tmp0_subject === _get_TC_BEGIN_OBJ__3637395738()) {
      tmp = readObject(this);
    } else if (tmp0_subject === _get_TC_BEGIN_LIST__1087565549()) {
      tmp = readArray(this);
    } else {
      this.lexer_1.fail$default_ojg9wb_k$("Can't begin reading element, unexpected token", 0, 2, null);
    }
    return tmp;
  };
  JsonTreeReader.$metadata$ = {
    simpleName: 'JsonTreeReader',
    kind: 'class',
    interfaces: []
  };
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
    var actualSerializer = findPolymorphicSerializer(casted, _this__1828080292, value);
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
  PolymorphismValidator.prototype.contextual_e1eobl_k$ = function (kClass, provider) {
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
  function _get_map__857195189($this) {
    return $this.map_1;
  }
  function Key() {
  }
  Key.$metadata$ = {
    simpleName: 'Key',
    kind: 'class',
    interfaces: []
  };
  function DescriptorSchemaCache() {
    this.map_1 = createMapForCache(1);
  }
  DescriptorSchemaCache.prototype.set_h659ud_k$ = function (descriptor, key, value) {
    {
      var tmp$ret$1;
      $l$block_0: {
        var tmp0_getOrPut_0 = this.map_1;
        var value_1 = tmp0_getOrPut_0.get_1mhr4y_k$(descriptor);
        var tmp;
        if (value_1 == null) {
          var tmp$ret$0;
          $l$block: {
            tmp$ret$0 = createMapForCache(1);
            break $l$block;
          }
          var answer_2 = tmp$ret$0;
          tmp0_getOrPut_0.put_3mhbri_k$(descriptor, answer_2);
          Unit_getInstance();
          tmp = answer_2;
        } else {
          tmp = value_1;
        }
        tmp$ret$1 = tmp;
        break $l$block_0;
      }
      var tmp1_set_0 = tmp$ret$1;
      var tmp2_set_0 = key instanceof Key ? key : THROW_CCE();
      var tmp3_set_0 = isObject(value) ? value : THROW_CCE();
      tmp1_set_0.put_3mhbri_k$(tmp2_set_0, tmp3_set_0);
      Unit_getInstance();
    }
  };
  DescriptorSchemaCache.prototype.getOrPut_2oe0zz_k$ = function (descriptor, key, defaultValue) {
    var tmp0_safe_receiver = this.get_eg3l1p_k$(descriptor, key);
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp$ret$0;
      {
        {
        }
        return tmp0_safe_receiver;
      }
    }
    Unit_getInstance();
    var value = defaultValue();
    this.set_h659ud_k$(descriptor, key, value);
    return value;
  };
  DescriptorSchemaCache.prototype.get_eg3l1p_k$ = function (descriptor, key) {
    var tmp0_safe_receiver = this.map_1.get_1mhr4y_k$(descriptor);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      tmp = tmp0_safe_receiver.get_1mhr4y_k$(key instanceof Key ? key : THROW_CCE());
    }
    var tmp_0 = tmp;
    return isObject(tmp_0) ? tmp_0 : null;
  };
  DescriptorSchemaCache.$metadata$ = {
    simpleName: 'DescriptorSchemaCache',
    kind: 'class',
    interfaces: []
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
  function checkLeadingComma($this) {
    if ($this.lexer_1.peekNextToken_1gqwr9_k$() === _get_TC_COMMA__1190675334()) {
      $this.lexer_1.fail$default_ojg9wb_k$('Unexpected leading comma', 0, 2, null);
    }
  }
  function decodeMapIndex($this) {
    var hasComma = false;
    var decodingKey = !($this.currentIndex_1 % 2 === 0);
    if (decodingKey) {
      if (!($this.currentIndex_1 === -1)) {
        hasComma = $this.lexer_1.tryConsumeComma_9n2ve4_k$();
      }
    } else {
      $this.lexer_1.consumeNextToken_ev7fkz_k$(_get_COLON__2205721714());
    }
    var tmp;
    if ($this.lexer_1.canConsumeValue_oljqd7_k$()) {
      if (decodingKey) {
        if ($this.currentIndex_1 === -1) {
          var tmp0_require_0 = $this.lexer_1;
          var tmp1_require_0 = !hasComma;
          var tmp2_require_0 = tmp0_require_0._get_currentPosition__868736655_ed81hr_k$();
          if (!tmp1_require_0) {
            var tmp$ret$0;
            $l$block: {
              tmp$ret$0 = 'Unexpected trailing comma';
              break $l$block;
            }
            tmp0_require_0.fail_8sige4_k$(tmp$ret$0, tmp2_require_0);
          }
        } else {
          var tmp3_require_0 = $this.lexer_1;
          var tmp4_require_0 = hasComma;
          var tmp5_require_0 = tmp3_require_0._get_currentPosition__868736655_ed81hr_k$();
          if (!tmp4_require_0) {
            var tmp$ret$1;
            $l$block_0: {
              tmp$ret$1 = 'Expected comma after the key-value pair';
              break $l$block_0;
            }
            tmp3_require_0.fail_8sige4_k$(tmp$ret$1, tmp5_require_0);
          }
        }
      }
      var tmp0_this = $this;
      tmp0_this.currentIndex_1 = tmp0_this.currentIndex_1 + 1 | 0;
      tmp = tmp0_this.currentIndex_1;
    } else {
      if (hasComma) {
        $this.lexer_1.fail$default_ojg9wb_k$("Expected '}', but had ',' instead", 0, 2, null);
      }
      tmp = Companion_getInstance_1()._get_DECODE_DONE__3215019198_huz1aa_k$();
    }
    return tmp;
  }
  function coerceInputValue($this, descriptor, index) {
    var tmp$ret$1;
    $l$block_4: {
      var tmp0_tryCoerceValue_0 = $this.json_1;
      var tmp1_tryCoerceValue_0 = descriptor.getElementDescriptor_sqz94k_k$(index);
      var tmp;
      if (!tmp1_tryCoerceValue_0._get_isNullable__336674624_5kg3sw_k$()) {
        var tmp$ret$0;
        $l$block: {
          tmp$ret$0 = !$this.lexer_1.tryConsumeNotNull_blklc7_k$();
          break $l$block;
        }
        tmp = tmp$ret$0;
      } else {
        tmp = false;
      }
      if (tmp) {
        tmp$ret$1 = true;
        break $l$block_4;
      } else {
      }
      if (equals(tmp1_tryCoerceValue_0._get_kind__801637687_d99vlj_k$(), ENUM_getInstance())) {
        var tmp$ret$2;
        $l$block_1: {
          tmp$ret$2 = $this.lexer_1.peekString_9klnyq_k$($this.configuration_1._get_isLenient__4131730692_2p6q64_k$());
          break $l$block_1;
        }
        var tmp0_elvis_lhs_3 = tmp$ret$2;
        var tmp_0;
        if (tmp0_elvis_lhs_3 == null) {
          tmp$ret$1 = false;
          break $l$block_4;
        } else {
          tmp_0 = tmp0_elvis_lhs_3;
        }
        var enumValue_2 = tmp_0;
        var enumIndex_4 = getJsonNameIndex(tmp1_tryCoerceValue_0, tmp0_tryCoerceValue_0, enumValue_2);
        if (enumIndex_4 === Companion_getInstance_1()._get_UNKNOWN_NAME__1523688395_p75xhn_k$()) {
          {
            $this.lexer_1.consumeString_j3j2z7_k$();
            Unit_getInstance();
          }
          tmp$ret$1 = true;
          break $l$block_4;
        }
      }
      tmp$ret$1 = false;
      break $l$block_4;
    }
    return tmp$ret$1;
  }
  function decodeObjectIndex($this, descriptor) {
    var hasComma = $this.lexer_1.tryConsumeComma_9n2ve4_k$();
    while ($this.lexer_1.canConsumeValue_oljqd7_k$()) {
      hasComma = false;
      var key = decodeStringKey($this);
      $this.lexer_1.consumeNextToken_ev7fkz_k$(_get_COLON__2205721714());
      var index = getJsonNameIndex(descriptor, $this.json_1, key);
      var tmp;
      if (!(index === Companion_getInstance_1()._get_UNKNOWN_NAME__1523688395_p75xhn_k$())) {
        var tmp_0;
        if ($this.configuration_1._get_coerceInputValues__1564306208_pvcie8_k$() ? coerceInputValue($this, descriptor, index) : false) {
          hasComma = $this.lexer_1.tryConsumeComma_9n2ve4_k$();
          tmp_0 = false;
        } else {
          return index;
        }
        tmp = tmp_0;
      } else {
        tmp = true;
      }
      var isUnknown = tmp;
      if (isUnknown) {
        hasComma = handleUnknown($this, key);
      }
    }
    if (hasComma) {
      $this.lexer_1.fail$default_ojg9wb_k$('Unexpected trailing comma', 0, 2, null);
    }
    return Companion_getInstance_1()._get_DECODE_DONE__3215019198_huz1aa_k$();
  }
  function handleUnknown($this, key) {
    if ($this.configuration_1._get_ignoreUnknownKeys__4153108645_2cgiu3_k$()) {
      $this.lexer_1.skipElement_wcp1ak_k$($this.configuration_1._get_isLenient__4131730692_2p6q64_k$());
    } else {
      $this.lexer_1.failOnUnknownKey_6lfa5c_k$(key);
    }
    return $this.lexer_1.tryConsumeComma_9n2ve4_k$();
  }
  function decodeListIndex($this) {
    var hasComma = $this.lexer_1.tryConsumeComma_9n2ve4_k$();
    var tmp;
    if ($this.lexer_1.canConsumeValue_oljqd7_k$()) {
      if (!($this.currentIndex_1 === -1) ? !hasComma : false) {
        $this.lexer_1.fail$default_ojg9wb_k$('Expected end of the array or comma', 0, 2, null);
      }
      var tmp0_this = $this;
      tmp0_this.currentIndex_1 = tmp0_this.currentIndex_1 + 1 | 0;
      tmp = tmp0_this.currentIndex_1;
    } else {
      if (hasComma) {
        $this.lexer_1.fail$default_ojg9wb_k$('Unexpected trailing comma', 0, 2, null);
      }
      tmp = Companion_getInstance_1()._get_DECODE_DONE__3215019198_huz1aa_k$();
    }
    return tmp;
  }
  function decodeStringKey($this) {
    var tmp;
    if ($this.configuration_1._get_isLenient__4131730692_2p6q64_k$()) {
      tmp = $this.lexer_1.consumeStringLenientNotNull_m2rgts_k$();
    } else {
      tmp = $this.lexer_1.consumeKeyString_mfa3ws_k$();
    }
    return tmp;
  }
  function StreamingJsonDecoder(json, mode, lexer) {
    AbstractDecoder.call(this);
    this.json_1 = json;
    this.mode_1 = mode;
    this.lexer_1 = lexer;
    this.serializersModule_1 = this.json_1._get_serializersModule__364239364_60uww4_k$();
    this.currentIndex_1 = -1;
    this.configuration_1 = this.json_1._get_configuration__311089819_557qfv_k$();
  }
  StreamingJsonDecoder.prototype._get_json__801013347_d8whur_k$ = function () {
    return this.json_1;
  };
  StreamingJsonDecoder.prototype._get_lexer__3401167429_es58e3_k$ = function () {
    return this.lexer_1;
  };
  StreamingJsonDecoder.prototype._get_serializersModule__364239364_60uww4_k$ = function () {
    return this.serializersModule_1;
  };
  StreamingJsonDecoder.prototype.decodeJsonElement_6lz9ye_k$ = function () {
    return (new JsonTreeReader(this.json_1._get_configuration__311089819_557qfv_k$(), this.lexer_1)).read_22xsm_k$();
  };
  StreamingJsonDecoder.prototype.decodeSerializableValue_xpp80o_k$ = function (deserializer) {
    return decodeSerializableValuePolymorphic(this, deserializer);
  };
  StreamingJsonDecoder.prototype.beginStructure_dv3yt3_k$ = function (descriptor) {
    var newMode = switchMode(this.json_1, descriptor);
    this.lexer_1.consumeNextToken_ev7fkz_k$(newMode._get_begin__3114373192_c9kma1_k$());
    checkLeadingComma(this);
    var tmp0_subject = newMode;
    var tmp0 = tmp0_subject._get_ordinal__3363892928_fec5kw_k$();
    var tmp;
    switch (tmp0) {
      case 1:
      case 2:
      case 3:
        tmp = new StreamingJsonDecoder(this.json_1, newMode, this.lexer_1);
        break;
      default:
        var tmp_0;
        if (this.mode_1.equals(newMode)) {
          tmp_0 = this;
        } else {
          tmp_0 = new StreamingJsonDecoder(this.json_1, newMode, this.lexer_1);
        }

        tmp = tmp_0;
        break;
    }
    return tmp;
  };
  StreamingJsonDecoder.prototype.endStructure_e64gd4_k$ = function (descriptor) {
    this.lexer_1.consumeNextToken_ev7fkz_k$(this.mode_1._get_end__856968982_ypp5lj_k$());
  };
  StreamingJsonDecoder.prototype.decodeNotNullMark_us4ba1_k$ = function () {
    return this.lexer_1.tryConsumeNotNull_blklc7_k$();
  };
  StreamingJsonDecoder.prototype.decodeNull_jzrmuj_k$ = function () {
    return null;
  };
  StreamingJsonDecoder.prototype.decodeElementIndex_nk5a2l_k$ = function (descriptor) {
    var tmp0_subject = this.mode_1;
    var tmp0 = tmp0_subject._get_ordinal__3363892928_fec5kw_k$();
    switch (tmp0) {
      case 0:
        return decodeObjectIndex(this, descriptor);
      case 2:
        return decodeMapIndex(this);
      default:
        return decodeListIndex(this);
    }
  };
  StreamingJsonDecoder.prototype.decodeBoolean_m0aca_k$ = function () {
    var tmp;
    if (this.configuration_1._get_isLenient__4131730692_2p6q64_k$()) {
      tmp = this.lexer_1.consumeBooleanLenient_iqeqb9_k$();
    } else {
      tmp = this.lexer_1.consumeBoolean_8eci30_k$();
    }
    return tmp;
  };
  StreamingJsonDecoder.prototype.decodeByte_jzz7je_k$ = function () {
    var value = this.lexer_1.consumeNumericLiteral_rdea66_k$();
    if (!value.equals(toLong_0(value.toByte_edm0nx_k$()))) {
      var tmp = "Failed to parse byte for input '" + toString(value) + "'";
      this.lexer_1.fail$default_ojg9wb_k$(tmp, 0, 2, null);
    }
    return value.toByte_edm0nx_k$();
  };
  StreamingJsonDecoder.prototype.decodeShort_jjqk32_k$ = function () {
    var value = this.lexer_1.consumeNumericLiteral_rdea66_k$();
    if (!value.equals(toLong_0(value.toShort_ja8oqn_k$()))) {
      var tmp = "Failed to parse short for input '" + toString(value) + "'";
      this.lexer_1.fail$default_ojg9wb_k$(tmp, 0, 2, null);
    }
    return value.toShort_ja8oqn_k$();
  };
  StreamingJsonDecoder.prototype.decodeInt_8iq8f5_k$ = function () {
    var value = this.lexer_1.consumeNumericLiteral_rdea66_k$();
    if (!value.equals(toLong_0(value.toInt_1tsl84_k$()))) {
      var tmp = "Failed to parse int for input '" + toString(value) + "'";
      this.lexer_1.fail$default_ojg9wb_k$(tmp, 0, 2, null);
    }
    return value.toInt_1tsl84_k$();
  };
  StreamingJsonDecoder.prototype.decodeLong_jzt186_k$ = function () {
    return this.lexer_1.consumeNumericLiteral_rdea66_k$();
  };
  StreamingJsonDecoder.prototype.decodeFloat_jcnrwu_k$ = function () {
    var tmp$ret$4;
    $l$block_3: {
      var tmp0_parseString_0 = this.lexer_1;
      var input_1 = tmp0_parseString_0.consumeStringLenient_9oypvu_k$();
      try {
        var tmp$ret$3;
        $l$block_2: {
          var tmp$ret$2;
          $l$block_1: {
            var tmp$ret$1;
            $l$block_0: {
              var tmp0_unsafeCast_0_1_4 = toDouble(input_1);
              var tmp$ret$0;
              $l$block: {
                tmp$ret$0 = tmp0_unsafeCast_0_1_4;
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
        if ($p instanceof IllegalArgumentException) {
          var tmp = "Failed to parse type 'float' for input '" + input_1 + "'";
          tmp0_parseString_0.fail$default_ojg9wb_k$(tmp, 0, 2, null);
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
    throwInvalidFloatingPointDecoded(this.lexer_1, result);
  };
  StreamingJsonDecoder.prototype.decodeDouble_ur8l0f_k$ = function () {
    var tmp$ret$1;
    $l$block_0: {
      var tmp0_parseString_0 = this.lexer_1;
      var input_1 = tmp0_parseString_0.consumeStringLenient_9oypvu_k$();
      try {
        var tmp$ret$0;
        $l$block: {
          tmp$ret$0 = toDouble(input_1);
          break $l$block;
        }
        tmp$ret$1 = tmp$ret$0;
        break $l$block_0;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var tmp = "Failed to parse type 'double' for input '" + input_1 + "'";
          tmp0_parseString_0.fail$default_ojg9wb_k$(tmp, 0, 2, null);
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
    throwInvalidFloatingPointDecoded(this.lexer_1, result);
  };
  StreamingJsonDecoder.prototype.decodeChar_dc2jtx_k$ = function () {
    var string = this.lexer_1.consumeStringLenient_9oypvu_k$();
    if (!(string.length === 1)) {
      var tmp = "Expected single char, but got '" + string + "'";
      this.lexer_1.fail$default_ojg9wb_k$(tmp, 0, 2, null);
    }
    return charSequenceGet(string, 0);
  };
  StreamingJsonDecoder.prototype.decodeString_x3hxsx_k$ = function () {
    var tmp;
    if (this.configuration_1._get_isLenient__4131730692_2p6q64_k$()) {
      tmp = this.lexer_1.consumeStringLenientNotNull_m2rgts_k$();
    } else {
      tmp = this.lexer_1.consumeString_j3j2z7_k$();
    }
    return tmp;
  };
  StreamingJsonDecoder.prototype.decodeInline_k1q7ba_k$ = function (inlineDescriptor) {
    return _get_isUnsignedNumber__858424675(inlineDescriptor) ? new JsonDecoderForUnsignedTypes(this.lexer_1, this.json_1) : AbstractDecoder.prototype.decodeInline_k1q7ba_k$.call(this, inlineDescriptor);
  };
  StreamingJsonDecoder.prototype.decodeEnum_w3hzf6_k$ = function (enumDescriptor) {
    return getJsonNameIndexOrThrow(enumDescriptor, this.json_1, this.decodeString_x3hxsx_k$());
  };
  StreamingJsonDecoder.$metadata$ = {
    simpleName: 'StreamingJsonDecoder',
    kind: 'class',
    interfaces: [JsonDecoder]
  };
  function parseString(_this__1828080292, expectedType, block) {
    var input = _this__1828080292.consumeStringLenient_9oypvu_k$();
    try {
      return block(input);
    } catch ($p) {
      if ($p instanceof IllegalArgumentException) {
        var tmp = "Failed to parse type '" + expectedType + "' for input '" + input + "'";
        _this__1828080292.fail$default_ojg9wb_k$(tmp, 0, 2, null);
      } else {
        {
          throw $p;
        }
      }
    }
  }
  function _get_lexer__3401167429_0($this) {
    return $this.lexer_1;
  }
  function JsonDecoderForUnsignedTypes(lexer, json) {
    AbstractDecoder.call(this);
    this.lexer_1 = lexer;
    this.serializersModule_1 = json._get_serializersModule__364239364_60uww4_k$();
  }
  JsonDecoderForUnsignedTypes.prototype._get_serializersModule__364239364_60uww4_k$ = function () {
    return this.serializersModule_1;
  };
  JsonDecoderForUnsignedTypes.prototype.decodeElementIndex_nk5a2l_k$ = function (descriptor) {
    {
      throw IllegalStateException_init_$Create$('unsupported');
    }
  };
  JsonDecoderForUnsignedTypes.prototype.decodeInt_8iq8f5_k$ = function () {
    var tmp$ret$2;
    $l$block_1: {
      var tmp0_parseString_0 = this.lexer_1;
      var input_1 = tmp0_parseString_0.consumeStringLenient_9oypvu_k$();
      try {
        var tmp$ret$1;
        $l$block_0: {
          var tmp$ret$0;
          $l$block: {
            var tmp0_toInt_0_4 = toUInt(input_1);
            tmp$ret$0 = _UInt___get_data__impl__908473640(tmp0_toInt_0_4);
            break $l$block;
          }
          tmp$ret$1 = tmp$ret$0;
          break $l$block_0;
        }
        tmp$ret$2 = tmp$ret$1;
        break $l$block_1;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var tmp = "Failed to parse type 'UInt' for input '" + input_1 + "'";
          tmp0_parseString_0.fail$default_ojg9wb_k$(tmp, 0, 2, null);
        } else {
          {
            throw $p;
          }
        }
      }
    }
    return tmp$ret$2;
  };
  JsonDecoderForUnsignedTypes.prototype.decodeLong_jzt186_k$ = function () {
    var tmp$ret$2;
    $l$block_1: {
      var tmp0_parseString_0 = this.lexer_1;
      var input_1 = tmp0_parseString_0.consumeStringLenient_9oypvu_k$();
      try {
        var tmp$ret$1;
        $l$block_0: {
          var tmp$ret$0;
          $l$block: {
            var tmp0_toLong_0_4 = toULong(input_1);
            tmp$ret$0 = _ULong___get_data__impl__934646663(tmp0_toLong_0_4);
            break $l$block;
          }
          tmp$ret$1 = tmp$ret$0;
          break $l$block_0;
        }
        tmp$ret$2 = tmp$ret$1;
        break $l$block_1;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var tmp = "Failed to parse type 'ULong' for input '" + input_1 + "'";
          tmp0_parseString_0.fail$default_ojg9wb_k$(tmp, 0, 2, null);
        } else {
          {
            throw $p;
          }
        }
      }
    }
    return tmp$ret$2;
  };
  JsonDecoderForUnsignedTypes.prototype.decodeByte_jzz7je_k$ = function () {
    var tmp$ret$2;
    $l$block_1: {
      var tmp0_parseString_0 = this.lexer_1;
      var input_1 = tmp0_parseString_0.consumeStringLenient_9oypvu_k$();
      try {
        var tmp$ret$1;
        $l$block_0: {
          var tmp$ret$0;
          $l$block: {
            var tmp0_toByte_0_4 = toUByte(input_1);
            tmp$ret$0 = _UByte___get_data__impl__1189880595(tmp0_toByte_0_4);
            break $l$block;
          }
          tmp$ret$1 = tmp$ret$0;
          break $l$block_0;
        }
        tmp$ret$2 = tmp$ret$1;
        break $l$block_1;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var tmp = "Failed to parse type 'UByte' for input '" + input_1 + "'";
          tmp0_parseString_0.fail$default_ojg9wb_k$(tmp, 0, 2, null);
        } else {
          {
            throw $p;
          }
        }
      }
    }
    return tmp$ret$2;
  };
  JsonDecoderForUnsignedTypes.prototype.decodeShort_jjqk32_k$ = function () {
    var tmp$ret$2;
    $l$block_1: {
      var tmp0_parseString_0 = this.lexer_1;
      var input_1 = tmp0_parseString_0.consumeStringLenient_9oypvu_k$();
      try {
        var tmp$ret$1;
        $l$block_0: {
          var tmp$ret$0;
          $l$block: {
            var tmp0_toShort_0_4 = toUShort(input_1);
            tmp$ret$0 = _UShort___get_data__impl__26876597(tmp0_toShort_0_4);
            break $l$block;
          }
          tmp$ret$1 = tmp$ret$0;
          break $l$block_0;
        }
        tmp$ret$2 = tmp$ret$1;
        break $l$block_1;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var tmp = "Failed to parse type 'UShort' for input '" + input_1 + "'";
          tmp0_parseString_0.fail$default_ojg9wb_k$(tmp, 0, 2, null);
        } else {
          {
            throw $p;
          }
        }
      }
    }
    return tmp$ret$2;
  };
  JsonDecoderForUnsignedTypes.$metadata$ = {
    simpleName: 'JsonDecoderForUnsignedTypes',
    kind: 'class',
    interfaces: []
  };
  function _get_unsignedNumberDescriptors__1390733227() {
    init_properties_StreamingJsonEncoder_kt_2688071816();
    return unsignedNumberDescriptors;
  }
  var unsignedNumberDescriptors;
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
    $this.composer_1.print_kq9ffk_k$(_get_COLON__2205721714());
    $this.composer_1.space_pnmf91_k$();
    $this.encodeString_90sumj_k$(descriptor._get_serialName__1025298892_gyfpos_k$());
  }
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
    if (!(this.modeReuseCache_1 == null)) {
      if (!(this.modeReuseCache_1[i] === null) ? true : !(this.modeReuseCache_1[i] === this))
        this.modeReuseCache_1[i] = this;
    }
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
      this.composer_1.print_kq9ffk_k$(newMode._get_begin__3114373192_c9kma1_k$());
      this.composer_1.indent_cv7m3p_k$();
    }
    if (this.writePolymorphic_1) {
      this.writePolymorphic_1 = false;
      encodeTypeInfo(this, descriptor);
    }
    if (this.mode_1.equals(newMode)) {
      return this;
    }
    var tmp0_safe_receiver = this.modeReuseCache_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver[newMode._get_ordinal__3363892928_fec5kw_k$()];
    return tmp1_elvis_lhs == null ? new StreamingJsonEncoder(this.composer_1, this.json_1, newMode, this.modeReuseCache_1) : tmp1_elvis_lhs;
  };
  StreamingJsonEncoder.prototype.endStructure_e64gd4_k$ = function (descriptor) {
    if (!equals(new Char(this.mode_1._get_end__856968982_ypp5lj_k$()), new Char(_get_INVALID__3532429338()))) {
      this.composer_1.unIndent_456c0k_k$();
      this.composer_1.nextItem_403h3p_k$();
      this.composer_1.print_kq9ffk_k$(this.mode_1._get_end__856968982_ypp5lj_k$());
    }
  };
  StreamingJsonEncoder.prototype.encodeElement_gaiom2_k$ = function (descriptor, index) {
    var tmp0_subject = this.mode_1;
    var tmp0 = tmp0_subject._get_ordinal__3363892928_fec5kw_k$();
    switch (tmp0) {
      case 1:
        if (!this.composer_1._get_writingFirst__947635351_fo7447_k$())
          this.composer_1.print_kq9ffk_k$(_get_COMMA__2205749180());
        this.composer_1.nextItem_403h3p_k$();
        break;
      case 2:
        if (!this.composer_1._get_writingFirst__947635351_fo7447_k$()) {
          var tmp = this;
          var tmp_0;
          if (index % 2 === 0) {
            this.composer_1.print_kq9ffk_k$(_get_COMMA__2205749180());
            this.composer_1.nextItem_403h3p_k$();
            tmp_0 = true;
          } else {
            this.composer_1.print_kq9ffk_k$(_get_COLON__2205721714());
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
          this.composer_1.print_kq9ffk_k$(_get_COMMA__2205749180());
          this.composer_1.space_pnmf91_k$();
          this.forceQuoting_1 = false;
        }

        break;
      default:
        if (!this.composer_1._get_writingFirst__947635351_fo7447_k$())
          this.composer_1.print_kq9ffk_k$(_get_COMMA__2205749180());
        this.composer_1.nextItem_403h3p_k$();
        this.encodeString_90sumj_k$(descriptor.getElementName_ykpypc_k$(index));
        this.composer_1.print_kq9ffk_k$(_get_COLON__2205721714());
        this.composer_1.space_pnmf91_k$();
        break;
    }
    return true;
  };
  StreamingJsonEncoder.prototype.encodeInline_8gn4q6_k$ = function (inlineDescriptor) {
    return _get_isUnsignedNumber__858424675(inlineDescriptor) ? new StreamingJsonEncoder(new ComposerForUnsignedNumbers(this.composer_1._get_sb__1413130524_ndcaho_k$(), this.json_1), this.json_1, this.mode_1, null) : AbstractEncoder.prototype.encodeInline_8gn4q6_k$.call(this, inlineDescriptor);
  };
  StreamingJsonEncoder.prototype.encodeNull_ek2hec_k$ = function () {
    this.composer_1.print_mp71d1_k$(_get_NULL__774226340());
  };
  StreamingJsonEncoder.prototype.encodeBoolean_6cztl5_k$ = function (value) {
    if (this.forceQuoting_1)
      this.encodeString_90sumj_k$(value.toString());
    else
      this.composer_1.print_8kbg64_k$(value);
  };
  StreamingJsonEncoder.prototype.encodeByte_gpyndp_k$ = function (value) {
    if (this.forceQuoting_1)
      this.encodeString_90sumj_k$(value.toString());
    else
      this.composer_1.print_wuq48e_k$(value);
  };
  StreamingJsonEncoder.prototype.encodeShort_rh3vxz_k$ = function (value) {
    if (this.forceQuoting_1)
      this.encodeString_90sumj_k$(value.toString());
    else
      this.composer_1.print_cg84b4_k$(value);
  };
  StreamingJsonEncoder.prototype.encodeInt_5vxmon_k$ = function (value) {
    if (this.forceQuoting_1)
      this.encodeString_90sumj_k$(value.toString());
    else
      this.composer_1.print_p8se77_k$(value);
  };
  StreamingJsonEncoder.prototype.encodeLong_rk3ab9_k$ = function (value) {
    if (this.forceQuoting_1)
      this.encodeString_90sumj_k$(value.toString());
    else
      this.composer_1.print_u73at6_k$(value);
  };
  StreamingJsonEncoder.prototype.encodeFloat_f5fde1_k$ = function (value) {
    if (this.forceQuoting_1)
      this.encodeString_90sumj_k$(value.toString());
    else
      this.composer_1.print_hp9wj4_k$(value);
    if (!this.configuration_1._get_allowSpecialFloatingPointValues__1768724981_t91wxh_k$() ? !isFinite(value) : false) {
      throw InvalidFloatingPointEncoded(value, this.composer_1._get_sb__1413130524_ndcaho_k$().toString());
    }
  };
  StreamingJsonEncoder.prototype.encodeDouble_79ztsb_k$ = function (value) {
    if (this.forceQuoting_1)
      this.encodeString_90sumj_k$(value.toString());
    else
      this.composer_1.print_xvzbiz_k$(value);
    if (!this.configuration_1._get_allowSpecialFloatingPointValues__1768724981_t91wxh_k$() ? !isFinite_0(value) : false) {
      throw InvalidFloatingPointEncoded(value, this.composer_1._get_sb__1413130524_ndcaho_k$().toString());
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
  function _get_isUnsignedNumber__858424675(_this__1828080292) {
    init_properties_StreamingJsonEncoder_kt_2688071816();
    return _this__1828080292._get_isInline__2852845512_nuloag_k$() ? _get_unsignedNumberDescriptors__1390733227().contains_2ehdt1_k$(_this__1828080292) : false;
  }
  var properties_initialized_StreamingJsonEncoder_kt_3901194668;
  function init_properties_StreamingJsonEncoder_kt_2688071816() {
    if (!properties_initialized_StreamingJsonEncoder_kt_3901194668) {
      properties_initialized_StreamingJsonEncoder_kt_3901194668 = true;
      unsignedNumberDescriptors = setOf([serializer_1(Companion_getInstance_2())._get_descriptor__684124924_bbb664_k$(), serializer_0(Companion_getInstance())._get_descriptor__684124924_bbb664_k$(), serializer_2(Companion_getInstance_3())._get_descriptor__684124924_bbb664_k$(), serializer_3(Companion_getInstance_4())._get_descriptor__684124924_bbb664_k$()]);
    }
  }
  function _get_ESCAPE_STRINGS__2623815143() {
    init_properties_StringOps_kt_977888371();
    return ESCAPE_STRINGS;
  }
  var ESCAPE_STRINGS;
  function _get_ESCAPE_MARKERS__1075776464() {
    init_properties_StringOps_kt_977888371();
    return ESCAPE_MARKERS;
  }
  var ESCAPE_MARKERS;
  function toHexChar(i) {
    init_properties_StringOps_kt_977888371();
    var d = i & 15;
    var tmp;
    if (d < 10) {
      var tmp$ret$0;
      $l$block: {
        tmp$ret$0 = 48;
        break $l$block;
      }
      tmp = numberToChar(d + tmp$ret$0 | 0);
    } else {
      var tmp_0 = d - 10 | 0;
      var tmp$ret$1;
      $l$block_0: {
        tmp$ret$1 = 97;
        break $l$block_0;
      }
      tmp = numberToChar(tmp_0 + tmp$ret$1 | 0);
    }
    return tmp;
  }
  function printQuoted(_this__1828080292, value) {
    init_properties_StringOps_kt_977888371();
    _this__1828080292.append_t8oh9e_k$(_get_STRING__1121561882());
    Unit_getInstance();
    var lastPos = 0;
    var inductionVariable = 0;
    var last = charSequenceLength(value) - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp$ret$0;
        $l$block: {
          var tmp0__get_code__0_2225219253 = charSequenceGet(value, i);
          tmp$ret$0 = Char__toInt_impl_2402388783(tmp0__get_code__0_2225219253);
          break $l$block;
        }
        var c = tmp$ret$0;
        if (c < _get_ESCAPE_STRINGS__2623815143().length ? !(_get_ESCAPE_STRINGS__2623815143()[c] == null) : false) {
          _this__1828080292.append_tbojcw_k$(value, lastPos, i);
          Unit_getInstance();
          _this__1828080292.append_ssq29y_k$(_get_ESCAPE_STRINGS__2623815143()[c]);
          Unit_getInstance();
          lastPos = i + 1 | 0;
        }
      }
       while (inductionVariable <= last);
    if (!(lastPos === 0)) {
      _this__1828080292.append_tbojcw_k$(value, lastPos, value.length);
      Unit_getInstance();
    } else {
      _this__1828080292.append_ssq29y_k$(value);
      Unit_getInstance();
    }
    _this__1828080292.append_t8oh9e_k$(_get_STRING__1121561882());
    Unit_getInstance();
  }
  function toBooleanStrictOrNull(_this__1828080292) {
    init_properties_StringOps_kt_977888371();
    return equals_0(_this__1828080292, 'true', true) ? true : equals_0(_this__1828080292, 'false', true) ? false : null;
  }
  var properties_initialized_StringOps_kt_1994189263;
  function init_properties_StringOps_kt_977888371() {
    if (!properties_initialized_StringOps_kt_1994189263) {
      properties_initialized_StringOps_kt_1994189263 = true;
      var tmp$ret$7;
      $l$block_6: {
        var tmp$ret$0;
        $l$block: {
          tmp$ret$0 = fillArrayVal(Array(93), null);
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
          var tmp$ret$1;
          $l$block_0: {
            tmp$ret$1 = 34;
            break $l$block_0;
          }
          tmp0_apply_0[tmp$ret$1] = '\\"';
          var tmp$ret$2;
          $l$block_1: {
            tmp$ret$2 = 92;
            break $l$block_1;
          }
          tmp0_apply_0[tmp$ret$2] = '\\\\';
          var tmp$ret$3;
          $l$block_2: {
            tmp$ret$3 = 9;
            break $l$block_2;
          }
          tmp0_apply_0[tmp$ret$3] = '\\t';
          var tmp$ret$4;
          $l$block_3: {
            tmp$ret$4 = 8;
            break $l$block_3;
          }
          tmp0_apply_0[tmp$ret$4] = '\\b';
          var tmp$ret$5;
          $l$block_4: {
            tmp$ret$5 = 10;
            break $l$block_4;
          }
          tmp0_apply_0[tmp$ret$5] = '\\n';
          var tmp$ret$6;
          $l$block_5: {
            tmp$ret$6 = 13;
            break $l$block_5;
          }
          tmp0_apply_0[tmp$ret$6] = '\\r';
          tmp0_apply_0[12] = '\\f';
        }
        tmp$ret$7 = tmp0_apply_0;
        break $l$block_6;
      }
      ESCAPE_STRINGS = tmp$ret$7;
      var tmp$ret$13;
      $l$block_20: {
        var tmp0_apply_0_0 = new Int8Array(93);
        {
        }
        {
          var inductionVariable_0 = 0;
          if (inductionVariable_0 <= 31)
            do {
              var c_3_0 = inductionVariable_0;
              inductionVariable_0 = inductionVariable_0 + 1 | 0;
              tmp0_apply_0_0[c_3_0] = 1;
            }
             while (inductionVariable_0 <= 31);
          var tmp$ret$0_0;
          $l$block_7: {
            tmp$ret$0_0 = 34;
            break $l$block_7;
          }
          var tmp = tmp$ret$0_0;
          var tmp$ret$1_0;
          $l$block_8: {
            tmp$ret$1_0 = 34;
            break $l$block_8;
          }
          tmp0_apply_0_0[tmp] = toByte(tmp$ret$1_0);
          var tmp$ret$2_0;
          $l$block_9: {
            tmp$ret$2_0 = 92;
            break $l$block_9;
          }
          var tmp_0 = tmp$ret$2_0;
          var tmp$ret$3_0;
          $l$block_10: {
            tmp$ret$3_0 = 92;
            break $l$block_10;
          }
          tmp0_apply_0_0[tmp_0] = toByte(tmp$ret$3_0);
          var tmp$ret$4_0;
          $l$block_11: {
            tmp$ret$4_0 = 9;
            break $l$block_11;
          }
          var tmp_1 = tmp$ret$4_0;
          var tmp$ret$5_0;
          $l$block_12: {
            tmp$ret$5_0 = 116;
            break $l$block_12;
          }
          tmp0_apply_0_0[tmp_1] = toByte(tmp$ret$5_0);
          var tmp$ret$6_0;
          $l$block_13: {
            tmp$ret$6_0 = 8;
            break $l$block_13;
          }
          var tmp_2 = tmp$ret$6_0;
          var tmp$ret$7_0;
          $l$block_14: {
            tmp$ret$7_0 = 98;
            break $l$block_14;
          }
          tmp0_apply_0_0[tmp_2] = toByte(tmp$ret$7_0);
          var tmp$ret$8;
          $l$block_15: {
            tmp$ret$8 = 10;
            break $l$block_15;
          }
          var tmp_3 = tmp$ret$8;
          var tmp$ret$9;
          $l$block_16: {
            tmp$ret$9 = 110;
            break $l$block_16;
          }
          tmp0_apply_0_0[tmp_3] = toByte(tmp$ret$9);
          var tmp$ret$10;
          $l$block_17: {
            tmp$ret$10 = 13;
            break $l$block_17;
          }
          var tmp_4 = tmp$ret$10;
          var tmp$ret$11;
          $l$block_18: {
            tmp$ret$11 = 114;
            break $l$block_18;
          }
          tmp0_apply_0_0[tmp_4] = toByte(tmp$ret$11);
          var tmp$ret$12;
          $l$block_19: {
            tmp$ret$12 = 102;
            break $l$block_19;
          }
          tmp0_apply_0_0[12] = toByte(tmp$ret$12);
        }
        tmp$ret$13 = tmp0_apply_0_0;
        break $l$block_20;
      }
      ESCAPE_MARKERS = tmp$ret$13;
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
      var tmp0_elvis_lhs = block(_this__1828080292);
      var tmp;
      if (tmp0_elvis_lhs == null) {
        unparsedPrimitive($this, primitive);
      } else {
        tmp = tmp0_elvis_lhs;
      }
      return tmp;
    } catch ($p) {
      if ($p instanceof IllegalArgumentException) {
        unparsedPrimitive($this, primitive);
      } else {
        {
          throw $p;
        }
      }
    }
  }
  function unparsedPrimitive($this, primitive) {
    throw JsonDecodingException_0(-1, "Failed to parse '" + primitive + "'", toString(currentObject($this)));
  }
  function asLiteral(_this__1828080292, $this, type) {
    var tmp0_elvis_lhs = _this__1828080292 instanceof JsonLiteral ? _this__1828080292 : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw JsonDecodingException_1(-1, "Unexpected 'null' when " + type + ' was expected');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
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
          var keyDescriptor_1 = carrierDescriptor(descriptor.getElementDescriptor_sqz94k_k$(0), tmp0_selectMapMode_0._get_serializersModule__364239364_60uww4_k$());
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
  AbstractJsonTreeDecoder.prototype.getPrimitiveValue_r7a8w1_k$ = function (tag) {
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
    return getJsonNameIndexOrThrow(enumDescriptor, this._get_json__801013347_d8whur_k$(), this.getPrimitiveValue_r7a8w1_k$(tag)._get_content__1558689208_ps04ag_k$());
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
    var value = this.getPrimitiveValue_r7a8w1_k$(tag);
    if (!this._get_json__801013347_d8whur_k$()._get_configuration__311089819_557qfv_k$()._get_isLenient__4131730692_2p6q64_k$()) {
      var literal = asLiteral(value, this, 'boolean');
      if (literal._get_isString__3315263824_g7ag1c_k$())
        throw JsonDecodingException_0(-1, "Boolean literal for key '" + tag + "' should be unquoted.\n" + _get_lenientHint__2822994611(), toString(currentObject(this)));
    }
    var tmp$ret$1;
    $l$block_0: {
      try {
        var tmp$ret$0;
        $l$block: {
          var tmp0_elvis_lhs_4 = _get_booleanOrNull__1934131903(value);
          var tmp;
          if (tmp0_elvis_lhs_4 == null) {
            throw IllegalArgumentException_init_$Create$_0();
          } else {
            tmp = tmp0_elvis_lhs_4;
          }
          tmp$ret$0 = tmp;
          break $l$block;
        }
        var tmp0_elvis_lhs_1 = tmp$ret$0;
        var tmp_0;
        if (tmp0_elvis_lhs_1 == null) {
          unparsedPrimitive(this, 'boolean');
        } else {
          tmp_0 = tmp0_elvis_lhs_1;
        }
        tmp$ret$1 = tmp_0;
        break $l$block_0;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          unparsedPrimitive(this, 'boolean');
        } else {
          {
            throw $p;
          }
        }
      }
    }
    return tmp$ret$1;
  };
  AbstractJsonTreeDecoder.prototype.decodeTaggedBoolean_kbjyq1_k$ = function (tag) {
    return this.decodeTaggedBoolean_69nto3_k$((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  AbstractJsonTreeDecoder.prototype.decodeTaggedByte_z232qn_k$ = function (tag) {
    var tmp$ret$1;
    $l$block_0: {
      var tmp0_primitive_0 = this.getPrimitiveValue_r7a8w1_k$(tag);
      try {
        var tmp$ret$0;
        $l$block: {
          var result_4 = _get_int__857088642(tmp0_primitive_0);
          var tmp;
          var containsLower = ByteCompanionObject_getInstance()._get_MIN_VALUE__1378605517_mssatp_k$();
          if (result_4 <= ByteCompanionObject_getInstance()._get_MAX_VALUE__3201573499_i2z81x_k$() ? containsLower <= result_4 : false) {
            tmp = toByte(result_4);
          } else {
            {
              tmp = null;
            }
          }
          tmp$ret$0 = tmp;
          break $l$block;
        }
        var tmp0_elvis_lhs_1 = tmp$ret$0;
        var tmp_0;
        if (tmp0_elvis_lhs_1 == null) {
          unparsedPrimitive(this, 'byte');
        } else {
          tmp_0 = tmp0_elvis_lhs_1;
        }
        tmp$ret$1 = tmp_0;
        break $l$block_0;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          unparsedPrimitive(this, 'byte');
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
      var tmp0_primitive_0 = this.getPrimitiveValue_r7a8w1_k$(tag);
      try {
        var tmp$ret$0;
        $l$block: {
          var result_4 = _get_int__857088642(tmp0_primitive_0);
          var tmp;
          var containsLower = ShortCompanionObject_getInstance()._get_MIN_VALUE__1378605517_mssatp_k$();
          if (result_4 <= ShortCompanionObject_getInstance()._get_MAX_VALUE__3201573499_i2z81x_k$() ? containsLower <= result_4 : false) {
            tmp = toShort(result_4);
          } else {
            {
              tmp = null;
            }
          }
          tmp$ret$0 = tmp;
          break $l$block;
        }
        var tmp0_elvis_lhs_1 = tmp$ret$0;
        var tmp_0;
        if (tmp0_elvis_lhs_1 == null) {
          unparsedPrimitive(this, 'short');
        } else {
          tmp_0 = tmp0_elvis_lhs_1;
        }
        tmp$ret$1 = tmp_0;
        break $l$block_0;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          unparsedPrimitive(this, 'short');
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
      var tmp0_primitive_0 = this.getPrimitiveValue_r7a8w1_k$(tag);
      try {
        var tmp$ret$0;
        $l$block: {
          tmp$ret$0 = _get_int__857088642(tmp0_primitive_0);
          break $l$block;
        }
        var tmp0_elvis_lhs_1 = tmp$ret$0;
        var tmp;
        if (tmp0_elvis_lhs_1 == null) {
          unparsedPrimitive(this, 'int');
        } else {
          tmp = tmp0_elvis_lhs_1;
        }
        tmp$ret$1 = tmp;
        break $l$block_0;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          unparsedPrimitive(this, 'int');
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
      var tmp0_primitive_0 = this.getPrimitiveValue_r7a8w1_k$(tag);
      try {
        var tmp$ret$0;
        $l$block: {
          tmp$ret$0 = _get_long__802740047(tmp0_primitive_0);
          break $l$block;
        }
        var tmp0_elvis_lhs_1 = tmp$ret$0;
        var tmp;
        if (tmp0_elvis_lhs_1 == null) {
          unparsedPrimitive(this, 'long');
        } else {
          tmp = tmp0_elvis_lhs_1;
        }
        tmp$ret$1 = tmp;
        break $l$block_0;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          unparsedPrimitive(this, 'long');
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
      var tmp0_primitive_0 = this.getPrimitiveValue_r7a8w1_k$(tag);
      try {
        var tmp$ret$0;
        $l$block: {
          tmp$ret$0 = _get_float__3235585269(tmp0_primitive_0);
          break $l$block;
        }
        var tmp0_elvis_lhs_1 = tmp$ret$0;
        var tmp;
        if (tmp0_elvis_lhs_1 == null) {
          unparsedPrimitive(this, 'float');
        } else {
          tmp = tmp0_elvis_lhs_1;
        }
        tmp$ret$1 = tmp;
        break $l$block_0;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          unparsedPrimitive(this, 'float');
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
      var tmp0_primitive_0 = this.getPrimitiveValue_r7a8w1_k$(tag);
      try {
        var tmp$ret$0;
        $l$block: {
          tmp$ret$0 = _get_double__4130307418(tmp0_primitive_0);
          break $l$block;
        }
        var tmp0_elvis_lhs_1 = tmp$ret$0;
        var tmp;
        if (tmp0_elvis_lhs_1 == null) {
          unparsedPrimitive(this, 'double');
        } else {
          tmp = tmp0_elvis_lhs_1;
        }
        tmp$ret$1 = tmp;
        break $l$block_0;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          unparsedPrimitive(this, 'double');
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
      var tmp0_primitive_0 = this.getPrimitiveValue_r7a8w1_k$(tag);
      try {
        var tmp$ret$0;
        $l$block: {
          tmp$ret$0 = single(tmp0_primitive_0._get_content__1558689208_ps04ag_k$());
          break $l$block;
        }
        var tmp0_elvis_lhs_1 = tmp$ret$0;
        var tmp;
        var tmp_0 = tmp0_elvis_lhs_1;
        if ((tmp_0 == null ? null : new Char(tmp_0)) == null) {
          unparsedPrimitive(this, 'char');
        } else {
          {
            tmp = tmp0_elvis_lhs_1;
          }
        }
        tmp$ret$1 = tmp;
        break $l$block_0;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          unparsedPrimitive(this, 'char');
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
    var value = this.getPrimitiveValue_r7a8w1_k$(tag);
    if (!this._get_json__801013347_d8whur_k$()._get_configuration__311089819_557qfv_k$()._get_isLenient__4131730692_2p6q64_k$()) {
      var literal = asLiteral(value, this, 'string');
      if (!literal._get_isString__3315263824_g7ag1c_k$())
        throw JsonDecodingException_0(-1, "String literal for key '" + tag + "' should be quoted.\n" + _get_lenientHint__2822994611(), toString(currentObject(this)));
    }
    if (value instanceof JsonNull)
      throw JsonDecodingException_0(-1, "Unexpected 'null' value instead of string literal", toString(currentObject(this)));
    else {
    }
    return value._get_content__1558689208_ps04ag_k$();
  };
  AbstractJsonTreeDecoder.prototype.decodeTaggedString_5es7hi_k$ = function (tag) {
    return this.decodeTaggedString_9404dm_k$((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  AbstractJsonTreeDecoder.prototype.decodeTaggedInline_qtikgf_k$ = function (tag, inlineDescriptor) {
    return _get_isUnsignedNumber__858424675(inlineDescriptor) ? new JsonDecoderForUnsignedTypes(new JsonLexer(this.getPrimitiveValue_r7a8w1_k$(tag)._get_content__1558689208_ps04ag_k$()), this._get_json__801013347_d8whur_k$()) : NamedValueDecoder.prototype.decodeTaggedInline_lzvm4z_k$.call(this, tag, inlineDescriptor);
  };
  AbstractJsonTreeDecoder.prototype.decodeTaggedInline_lzvm4z_k$ = function (tag, inlineDescriptor) {
    return this.decodeTaggedInline_qtikgf_k$((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE(), inlineDescriptor);
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
    var tmp$ret$1;
    $l$block_5: {
      var tmp0_tryCoerceValue_0 = $this._get_json__801013347_d8whur_k$();
      var tmp1_tryCoerceValue_0 = descriptor.getElementDescriptor_sqz94k_k$(index);
      var tmp;
      if (!tmp1_tryCoerceValue_0._get_isNullable__336674624_5kg3sw_k$()) {
        var tmp$ret$0;
        $l$block: {
          var tmp_0 = $this.currentElement_sx22im_k$(tag);
          tmp$ret$0 = tmp_0 instanceof JsonNull;
          break $l$block;
        }
        tmp = tmp$ret$0;
      } else {
        tmp = false;
      }
      if (tmp) {
        tmp$ret$1 = true;
        break $l$block_5;
      } else {
      }
      if (equals(tmp1_tryCoerceValue_0._get_kind__801637687_d99vlj_k$(), ENUM_getInstance())) {
        var tmp$ret$2;
        $l$block_1: {
          var tmp_1 = $this.currentElement_sx22im_k$(tag);
          var tmp0_safe_receiver_7 = tmp_1 instanceof JsonPrimitive ? tmp_1 : null;
          tmp$ret$2 = tmp0_safe_receiver_7 == null ? null : _get_contentOrNull__3948604750(tmp0_safe_receiver_7);
          break $l$block_1;
        }
        var tmp0_elvis_lhs_3 = tmp$ret$2;
        var tmp_2;
        if (tmp0_elvis_lhs_3 == null) {
          tmp$ret$1 = false;
          break $l$block_5;
        } else {
          tmp_2 = tmp0_elvis_lhs_3;
        }
        var enumValue_2 = tmp_2;
        var enumIndex_4 = getJsonNameIndex(tmp1_tryCoerceValue_0, tmp0_tryCoerceValue_0, enumValue_2);
        if (enumIndex_4 === Companion_getInstance_1()._get_UNKNOWN_NAME__1523688395_p75xhn_k$()) {
          var tmp$ret$3;
          $l$block_3: {
            tmp$ret$3 = Unit_getInstance();
            break $l$block_3;
          }
          tmp$ret$1 = true;
          break $l$block_5;
        }
      }
      tmp$ret$1 = false;
      break $l$block_5;
    }
    return tmp$ret$1;
  }
  function buildAlternativeNamesMap$ref_0($boundThis) {
    var l = function () {
      return buildAlternativeNamesMap($boundThis);
    };
    l.callableName = 'buildAlternativeNamesMap';
    return l;
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
    return Companion_getInstance_1()._get_DECODE_DONE__3215019198_huz1aa_k$();
  };
  JsonTreeDecoder.prototype.elementName_9sehmv_k$ = function (desc, index) {
    var mainName = desc.getElementName_ykpypc_k$(index);
    if (!this._get_configuration__311089819_557qfv_k$()._get_useAlternativeNames__3550019471_cbitf5_k$())
      return mainName;
    if (this._get_value__3683422336_a43j40_k$()._get_keys__801529559_d97k5z_k$().contains_2ehdt1_k$(mainName))
      return mainName;
    var tmp = _get_schemaCache__3869482832(this._get_json__801013347_d8whur_k$());
    var tmp_0 = _get_JsonAlternativeNamesKey__1245246965();
    var alternativeNamesMap = tmp.getOrPut_2oe0zz_k$(desc, tmp_0, buildAlternativeNamesMap$ref_0(desc));
    var tmp$ret$2;
    $l$block_2: {
      var tmp0_find_0 = this._get_value__3683422336_a43j40_k$()._get_keys__801529559_d97k5z_k$();
      var tmp$ret$1;
      $l$block_1: {
        var tmp0_iterator_1_1 = tmp0_find_0.iterator_jk1svi_k$();
        while (tmp0_iterator_1_1.hasNext_bitz1p_k$()) {
          var element_2_2 = tmp0_iterator_1_1.next_20eer_k$();
          var tmp$ret$0;
          $l$block: {
            tmp$ret$0 = alternativeNamesMap.get_1mhr4y_k$(element_2_2) === index;
            break $l$block;
          }
          if (tmp$ret$0) {
            tmp$ret$1 = element_2_2;
            break $l$block_1;
          } else {
          }
        }
        tmp$ret$1 = null;
        break $l$block_1;
      }
      tmp$ret$2 = tmp$ret$1;
      break $l$block_2;
    }
    var nameInObject = tmp$ret$2;
    var tmp0_elvis_lhs = nameInObject;
    return tmp0_elvis_lhs == null ? mainName : tmp0_elvis_lhs;
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
    var tmp_1;
    if (!this._get_configuration__311089819_557qfv_k$()._get_useAlternativeNames__3550019471_cbitf5_k$()) {
      tmp_1 = jsonCachedSerialNames(descriptor);
    } else {
      var tmp_2 = jsonCachedSerialNames(descriptor);
      var tmp$ret$0;
      $l$block: {
        var tmp0_safe_receiver = _get_schemaCache__3869482832(this._get_json__801013347_d8whur_k$()).get_eg3l1p_k$(descriptor, _get_JsonAlternativeNamesKey__1245246965());
        var tmp0_orEmpty_0 = tmp0_safe_receiver == null ? null : tmp0_safe_receiver._get_keys__801529559_d97k5z_k$();
        var tmp0_elvis_lhs_1 = tmp0_orEmpty_0;
        tmp$ret$0 = tmp0_elvis_lhs_1 == null ? emptySet() : tmp0_elvis_lhs_1;
        break $l$block;
      }
      tmp_1 = plus(tmp_2, tmp$ret$0);
    }
    var names = tmp_1;
    var tmp1_iterator = this._get_value__3683422336_a43j40_k$()._get_keys__801529559_d97k5z_k$().iterator_jk1svi_k$();
    while (tmp1_iterator.hasNext_bitz1p_k$()) {
      var key = tmp1_iterator.next_20eer_k$();
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
    return Companion_getInstance_1()._get_DECODE_DONE__3215019198_huz1aa_k$();
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
    return Companion_getInstance_1()._get_DECODE_DONE__3215019198_huz1aa_k$();
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
  function AbstractJsonTreeEncoder$encodeTaggedInline$1(this$0, $tag) {
    this.this$0__1 = this$0;
    this.$tag_1 = $tag;
    AbstractEncoder.call(this);
    this.serializersModule_1 = this$0.json_1._get_serializersModule__364239364_60uww4_k$();
  }
  AbstractJsonTreeEncoder$encodeTaggedInline$1.prototype._get_serializersModule__364239364_60uww4_k$ = function () {
    return this.serializersModule_1;
  };
  AbstractJsonTreeEncoder$encodeTaggedInline$1.prototype.putUnquotedString_bv71rl_k$ = function (s) {
    return this.this$0__1.putElement_q1lsnv_k$(this.$tag_1, new JsonLiteral(s, false));
  };
  AbstractJsonTreeEncoder$encodeTaggedInline$1.prototype.encodeInt_5vxmon_k$ = function (value) {
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = _UInt___init__impl__1282792953(value);
      break $l$block;
    }
    return this.putUnquotedString_bv71rl_k$(UInt__toString_impl_3489657447(tmp$ret$0));
  };
  AbstractJsonTreeEncoder$encodeTaggedInline$1.prototype.encodeLong_rk3ab9_k$ = function (value) {
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = _ULong___init__impl__737756120(value);
      break $l$block;
    }
    return this.putUnquotedString_bv71rl_k$(ULong__toString_impl_922614896(tmp$ret$0));
  };
  AbstractJsonTreeEncoder$encodeTaggedInline$1.prototype.encodeByte_gpyndp_k$ = function (value) {
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = _UByte___init__impl__983398756(value);
      break $l$block;
    }
    return this.putUnquotedString_bv71rl_k$(UByte__toString_impl_4242569316(tmp$ret$0));
  };
  AbstractJsonTreeEncoder$encodeTaggedInline$1.prototype.encodeShort_rh3vxz_k$ = function (value) {
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = _UShort___init__impl__3115094534(value);
      break $l$block;
    }
    return this.putUnquotedString_bv71rl_k$(UShort__toString_impl_3426107642(tmp$ret$0));
  };
  AbstractJsonTreeEncoder$encodeTaggedInline$1.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
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
  AbstractJsonTreeEncoder.prototype.encodeTaggedInline_n78nx5_k$ = function (tag, inlineDescriptor) {
    var tmp;
    if (_get_isUnsignedNumber__858424675(inlineDescriptor)) {
      tmp = new AbstractJsonTreeEncoder$encodeTaggedInline$1(this, tag);
    } else {
      tmp = NamedValueEncoder.prototype.encodeTaggedInline_nljf4l_k$.call(this, tag, inlineDescriptor);
    }
    return tmp;
  };
  AbstractJsonTreeEncoder.prototype.encodeTaggedInline_nljf4l_k$ = function (tag, inlineDescriptor) {
    return this.encodeTaggedInline_n78nx5_k$((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE(), inlineDescriptor);
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
          var keyDescriptor_1 = carrierDescriptor(descriptor.getElementDescriptor_sqz94k_k$(0), tmp0_selectMapMode_0._get_serializersModule__364239364_60uww4_k$());
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
  }
  WriteMode.prototype._get_begin__3114373192_c9kma1_k$ = function () {
    return this.begin_1;
  };
  WriteMode.prototype._get_end__856968982_ypp5lj_k$ = function () {
    return this.end_1;
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
            var keyDescriptor_1 = carrierDescriptor(desc.getElementDescriptor_sqz94k_k$(0), _this__1828080292._get_serializersModule__364239364_60uww4_k$());
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
    var keyDescriptor = carrierDescriptor(mapDescriptor.getElementDescriptor_sqz94k_k$(0), _this__1828080292._get_serializersModule__364239364_60uww4_k$());
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
  function carrierDescriptor(_this__1828080292, module_0) {
    var tmp;
    if (equals(_this__1828080292._get_kind__801637687_d99vlj_k$(), CONTEXTUAL_getInstance())) {
      var tmp0_safe_receiver = getContextualDescriptor(module_0, _this__1828080292);
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : carrierDescriptor(tmp0_safe_receiver, module_0);
      tmp = tmp1_elvis_lhs == null ? _this__1828080292 : tmp1_elvis_lhs;
    } else if (_this__1828080292._get_isInline__2852845512_nuloag_k$()) {
      tmp = _this__1828080292.getElementDescriptor_sqz94k_k$(0);
    } else {
      tmp = _this__1828080292;
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
  function _get_schemaCache__3869482832(_this__1828080292) {
    return _this__1828080292._get__schemaCache__4146643177_2gb3mf_k$();
  }
  function _get_sb__1413130524($this) {
    return $this.sb_1;
  }
  function JsonStringBuilder() {
    this.sb_1 = StringBuilder_init_$Create$_0(128);
  }
  JsonStringBuilder.prototype.append_gvce4t_k$ = function (value) {
    this.sb_1.append_t8pm91_k$(value);
    Unit_getInstance();
  };
  JsonStringBuilder.prototype.append_y20c3x_k$ = function (ch) {
    this.sb_1.append_t8oh9e_k$(ch);
    Unit_getInstance();
  };
  JsonStringBuilder.prototype.append_1o6mm0_k$ = function (string) {
    this.sb_1.append_ssq29y_k$(string);
    Unit_getInstance();
  };
  JsonStringBuilder.prototype.appendQuoted_lngcuo_k$ = function (string) {
    printQuoted(this.sb_1, string);
  };
  JsonStringBuilder.prototype.toString = function () {
    return this.sb_1.toString();
  };
  JsonStringBuilder.prototype.release_wtm6d2_k$ = function () {
  };
  JsonStringBuilder.$metadata$ = {
    simpleName: 'JsonStringBuilder',
    kind: 'class',
    interfaces: []
  };
  function createMapForCache(initialCapacity) {
    return HashMap_init_$Create$(initialCapacity);
  }
  //region block: post-declaration
  defer$1.prototype._get_isNullable__336674624_5kg3sw_k$ = _get_isNullable__336674624;
  defer$1.prototype._get_isInline__2852845512_nuloag_k$ = _get_isInline__2852845512;
  defer$1.prototype._get_annotations__1905959661_virbvx_k$ = _get_annotations__1905959661;
  PolymorphismValidator.prototype.contextual_7ekeez_k$ = contextual;
  StreamingJsonDecoder.prototype.decodeNullableSerializableValue_927wg6_k$ = decodeNullableSerializableValue;
  StreamingJsonDecoder.prototype.decodeSequentially_xlblqy_k$ = decodeSequentially;
  StreamingJsonDecoder.prototype.decodeCollectionSize_cd6i6s_k$ = decodeCollectionSize;
  StreamingJsonDecoder.prototype.decodeSerializableElement$default_xyql7s_k$ = decodeSerializableElement$default;
  StreamingJsonDecoder.prototype.decodeNullableSerializableElement$default_9il7ee_k$ = decodeNullableSerializableElement$default;
  JsonDecoderForUnsignedTypes.prototype.decodeSerializableValue_xpp80o_k$ = decodeSerializableValue;
  JsonDecoderForUnsignedTypes.prototype.decodeSerializableElement$default_xyql7s_k$ = decodeSerializableElement$default;
  JsonDecoderForUnsignedTypes.prototype.decodeNullableSerializableElement$default_9il7ee_k$ = decodeNullableSerializableElement$default;
  JsonDecoderForUnsignedTypes.prototype.decodeNullableSerializableValue_927wg6_k$ = decodeNullableSerializableValue;
  JsonDecoderForUnsignedTypes.prototype.decodeSequentially_xlblqy_k$ = decodeSequentially;
  JsonDecoderForUnsignedTypes.prototype.decodeCollectionSize_cd6i6s_k$ = decodeCollectionSize;
  StreamingJsonEncoder.prototype.encodeNotNullMark_40lhgg_k$ = encodeNotNullMark;
  StreamingJsonEncoder.prototype.beginCollection_dgpn47_k$ = beginCollection;
  StreamingJsonEncoder.prototype.encodeNullableSerializableValue_35ub11_k$ = encodeNullableSerializableValue;
  AbstractJsonTreeDecoder.prototype.decodeSerializableElement$default_xyql7s_k$ = decodeSerializableElement$default;
  AbstractJsonTreeDecoder.prototype.decodeNullableSerializableElement$default_9il7ee_k$ = decodeNullableSerializableElement$default;
  AbstractJsonTreeDecoder.prototype.decodeNullableSerializableValue_927wg6_k$ = decodeNullableSerializableValue;
  AbstractJsonTreeDecoder.prototype.decodeSequentially_xlblqy_k$ = decodeSequentially;
  AbstractJsonTreeDecoder.prototype.decodeCollectionSize_cd6i6s_k$ = decodeCollectionSize;
  JsonTreeDecoder.prototype.decodeSerializableElement$default_xyql7s_k$ = decodeSerializableElement$default;
  JsonTreeDecoder.prototype.decodeNullableSerializableElement$default_9il7ee_k$ = decodeNullableSerializableElement$default;
  JsonTreeDecoder.prototype.decodeNullableSerializableValue_927wg6_k$ = decodeNullableSerializableValue;
  JsonTreeDecoder.prototype.decodeSequentially_xlblqy_k$ = decodeSequentially;
  JsonTreeDecoder.prototype.decodeCollectionSize_cd6i6s_k$ = decodeCollectionSize;
  JsonTreeListDecoder.prototype.decodeSerializableElement$default_xyql7s_k$ = decodeSerializableElement$default;
  JsonTreeListDecoder.prototype.decodeNullableSerializableElement$default_9il7ee_k$ = decodeNullableSerializableElement$default;
  JsonTreeListDecoder.prototype.decodeNullableSerializableValue_927wg6_k$ = decodeNullableSerializableValue;
  JsonTreeListDecoder.prototype.decodeSequentially_xlblqy_k$ = decodeSequentially;
  JsonTreeListDecoder.prototype.decodeCollectionSize_cd6i6s_k$ = decodeCollectionSize;
  JsonPrimitiveDecoder.prototype.decodeSerializableElement$default_xyql7s_k$ = decodeSerializableElement$default;
  JsonPrimitiveDecoder.prototype.decodeNullableSerializableElement$default_9il7ee_k$ = decodeNullableSerializableElement$default;
  JsonPrimitiveDecoder.prototype.decodeNullableSerializableValue_927wg6_k$ = decodeNullableSerializableValue;
  JsonPrimitiveDecoder.prototype.decodeSequentially_xlblqy_k$ = decodeSequentially;
  JsonPrimitiveDecoder.prototype.decodeCollectionSize_cd6i6s_k$ = decodeCollectionSize;
  JsonTreeMapDecoder.prototype.decodeSerializableElement$default_xyql7s_k$ = decodeSerializableElement$default;
  JsonTreeMapDecoder.prototype.decodeNullableSerializableElement$default_9il7ee_k$ = decodeNullableSerializableElement$default;
  JsonTreeMapDecoder.prototype.decodeNullableSerializableValue_927wg6_k$ = decodeNullableSerializableValue;
  JsonTreeMapDecoder.prototype.decodeSequentially_xlblqy_k$ = decodeSequentially;
  JsonTreeMapDecoder.prototype.decodeCollectionSize_cd6i6s_k$ = decodeCollectionSize;
  AbstractJsonTreeEncoder.prototype.beginCollection_dgpn47_k$ = beginCollection;
  AbstractJsonTreeEncoder.prototype.encodeNullableSerializableValue_35ub11_k$ = encodeNullableSerializableValue;
  JsonTreeEncoder.prototype.beginCollection_dgpn47_k$ = beginCollection;
  JsonTreeEncoder.prototype.encodeNullableSerializableValue_35ub11_k$ = encodeNullableSerializableValue;
  AbstractJsonTreeEncoder$encodeTaggedInline$1.prototype.encodeNotNullMark_40lhgg_k$ = encodeNotNullMark;
  AbstractJsonTreeEncoder$encodeTaggedInline$1.prototype.beginCollection_dgpn47_k$ = beginCollection;
  AbstractJsonTreeEncoder$encodeTaggedInline$1.prototype.encodeSerializableValue_bps9ot_k$ = encodeSerializableValue;
  AbstractJsonTreeEncoder$encodeTaggedInline$1.prototype.encodeNullableSerializableValue_35ub11_k$ = encodeNullableSerializableValue;
  AbstractJsonTreeEncoder$encodeTaggedInline$1.prototype.shouldEncodeElementDefault_m92hrm_k$ = shouldEncodeElementDefault;
  JsonPrimitiveEncoder.prototype.beginCollection_dgpn47_k$ = beginCollection;
  JsonPrimitiveEncoder.prototype.encodeNullableSerializableValue_35ub11_k$ = encodeNullableSerializableValue;
  JsonTreeListEncoder.prototype.beginCollection_dgpn47_k$ = beginCollection;
  JsonTreeListEncoder.prototype.encodeNullableSerializableValue_35ub11_k$ = encodeNullableSerializableValue;
  JsonTreeMapEncoder.prototype.beginCollection_dgpn47_k$ = beginCollection;
  JsonTreeMapEncoder.prototype.encodeNullableSerializableValue_35ub11_k$ = encodeNullableSerializableValue;
  //endregion
  //region block: init
  defaultDiscriminator = 'type';
  defaultIndent = '    ';
  COLON = _Char___init__impl__380027157(58);
  INVALID = _Char___init__impl__380027157(0);
  COMMA = _Char___init__impl__380027157(44);
  NULL = 'null';
  BEGIN_OBJ = _Char___init__impl__380027157(123);
  END_OBJ = _Char___init__impl__380027157(125);
  BEGIN_LIST = _Char___init__impl__380027157(91);
  END_LIST = _Char___init__impl__380027157(93);
  TC_EOF = 10;
  STRING = _Char___init__impl__380027157(34);
  coerceInputValuesHint = "Use 'coerceInputValues = true' in 'Json {}` builder to coerce nulls to default values.";
  TC_STRING = 1;
  TC_COMMA = 4;
  TC_COLON = 5;
  TC_BEGIN_OBJ = 6;
  TC_END_OBJ = 7;
  TC_BEGIN_LIST = 8;
  TC_END_LIST = 9;
  TC_WHITESPACE = 3;
  TC_OTHER = 0;
  STRING_ESC = _Char___init__impl__380027157(92);
  UNICODE_ESC = _Char___init__impl__380027157(117);
  ignoreUnknownKeysHint = "Use 'ignoreUnknownKeys = true' in 'Json {}' builder to ignore unknown keys.";
  asciiCaseMask = 32;
  CTC_MAX = 126;
  ESC2C_MAX = 117;
  TC_INVALID = 127;
  TC_STRING_ESC = 2;
  lenientHint = "Use 'isLenient = true' in 'Json {}` builder to accept non-compliant JSON.";
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

//# sourceMappingURL=kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.js.map