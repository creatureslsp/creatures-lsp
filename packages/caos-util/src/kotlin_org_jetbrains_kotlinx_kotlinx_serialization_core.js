(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin_kotlin.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin_kotlin.js'));
  else {
    if (typeof kotlin_kotlin === 'undefined') {
      throw new Error("Error loading module 'kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core'. Its dependency 'kotlin_kotlin' was not found. Please, check whether 'kotlin_kotlin' is loaded prior to 'kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core'.");
    }
    root.kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core = factory(typeof kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core === 'undefined' ? {} : kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core, kotlin_kotlin);
  }
}(this, function (_, kotlin_kotlin) {
  //region block: imports
  var imul = Math.imul;
  var THROW_CCE = kotlin_kotlin.$crossModule$.THROW_CCE;
  var Annotation = kotlin_kotlin.$crossModule$.Annotation;
  var getKClass = kotlin_kotlin.$crossModule$.getKClass;
  var getStringHashCode = kotlin_kotlin.$crossModule$.getStringHashCode;
  var getKClassFromExpression = kotlin_kotlin.$crossModule$.getKClassFromExpression;
  var Unit_getInstance = kotlin_kotlin.$crossModule$.Unit_getInstance;
  var StringCompanionObject_getInstance = kotlin_kotlin.$crossModule$.StringCompanionObject_getInstance;
  var Entry = kotlin_kotlin.$crossModule$.Entry;
  var isInterface = kotlin_kotlin.$crossModule$.isInterface;
  var Grouping = kotlin_kotlin.$crossModule$.Grouping;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$crossModule$.IllegalArgumentException_init_$Create$_1;
  var zip = kotlin_kotlin.$crossModule$.zip;
  var toMap = kotlin_kotlin.$crossModule$.toMap_1;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$crossModule$.LinkedHashMap_init_$Create$_1;
  var toString = kotlin_kotlin.$crossModule$.toString_1;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$crossModule$.IllegalStateException_init_$Create$_1;
  var mapCapacity = kotlin_kotlin.$crossModule$.mapCapacity;
  var LinkedHashMap_init_$Create$_0 = kotlin_kotlin.$crossModule$.LinkedHashMap_init_$Create$;
  var Map = kotlin_kotlin.$crossModule$.Map;
  var captureStack = kotlin_kotlin.$crossModule$.captureStack;
  var IllegalArgumentException_init_$Init$ = kotlin_kotlin.$crossModule$.IllegalArgumentException_init_$Init$_1;
  var IllegalArgumentException_init_$Init$_0 = kotlin_kotlin.$crossModule$.IllegalArgumentException_init_$Init$_2;
  var IllegalArgumentException_init_$Init$_1 = kotlin_kotlin.$crossModule$.IllegalArgumentException_init_$Init$_3;
  var IllegalArgumentException_init_$Init$_2 = kotlin_kotlin.$crossModule$.IllegalArgumentException_init_$Init$;
  var IllegalArgumentException = kotlin_kotlin.$crossModule$.IllegalArgumentException;
  var collectionSizeOrDefault = kotlin_kotlin.$crossModule$.collectionSizeOrDefault;
  var ArrayList_init_$Create$ = kotlin_kotlin.$crossModule$.ArrayList_init_$Create$;
  var KClass = kotlin_kotlin.$crossModule$.KClass;
  var copyToArray = kotlin_kotlin.$crossModule$.copyToArray;
  var Triple = kotlin_kotlin.$crossModule$.Triple;
  var Pair = kotlin_kotlin.$crossModule$.Pair;
  var LinkedHashMap = kotlin_kotlin.$crossModule$.LinkedHashMap;
  var MutableMap = kotlin_kotlin.$crossModule$.MutableMap;
  var HashMap = kotlin_kotlin.$crossModule$.HashMap;
  var LinkedHashSet = kotlin_kotlin.$crossModule$.LinkedHashSet;
  var MutableSet = kotlin_kotlin.$crossModule$.MutableSet;
  var Set = kotlin_kotlin.$crossModule$.Set;
  var HashSet = kotlin_kotlin.$crossModule$.HashSet;
  var ArrayList = kotlin_kotlin.$crossModule$.ArrayList;
  var MutableList = kotlin_kotlin.$crossModule$.MutableList;
  var List = kotlin_kotlin.$crossModule$.List;
  var emptyList = kotlin_kotlin.$crossModule$.emptyList;
  var Iterator = kotlin_kotlin.$crossModule$.Iterator;
  var Iterable = kotlin_kotlin.$crossModule$.Iterable;
  var isBlank = kotlin_kotlin.$crossModule$.isBlank;
  var equals = kotlin_kotlin.$crossModule$.equals;
  var toList = kotlin_kotlin.$crossModule$.toList_1;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$crossModule$.ArrayList_init_$Create$_1;
  var HashSet_init_$Create$ = kotlin_kotlin.$crossModule$.HashSet_init_$Create$_1;
  var contentHashCode = kotlin_kotlin.$crossModule$.contentHashCode;
  var hashCode = kotlin_kotlin.$crossModule$.hashCode;
  var toBooleanArray = kotlin_kotlin.$crossModule$.toBooleanArray;
  var withIndex = kotlin_kotlin.$crossModule$.withIndex;
  var to = kotlin_kotlin.$crossModule$.to;
  var lazy = kotlin_kotlin.$crossModule$.lazy;
  var contentEquals = kotlin_kotlin.$crossModule$.contentEquals;
  var until = kotlin_kotlin.$crossModule$.until;
  var joinToString$default = kotlin_kotlin.$crossModule$.joinToString$default_1;
  var KProperty1 = kotlin_kotlin.$crossModule$.KProperty1;
  var getPropertyCallableRef = kotlin_kotlin.$crossModule$.getPropertyCallableRef;
  var ensureNotNull = kotlin_kotlin.$crossModule$.ensureNotNull;
  var Long = kotlin_kotlin.$crossModule$.Long;
  var Char = kotlin_kotlin.$crossModule$.Char;
  var isObject = kotlin_kotlin.$crossModule$.isObject;
  var toIntOrNull = kotlin_kotlin.$crossModule$.toIntOrNull_1;
  var isArray = kotlin_kotlin.$crossModule$.isArray;
  var arrayIterator = kotlin_kotlin.$crossModule$.arrayIterator;
  var asList = kotlin_kotlin.$crossModule$.asList;
  var ArrayList_init_$Create$_1 = kotlin_kotlin.$crossModule$.ArrayList_init_$Create$_2;
  var LinkedHashMap_init_$Create$_1 = kotlin_kotlin.$crossModule$.LinkedHashMap_init_$Create$_2;
  var step = kotlin_kotlin.$crossModule$.step;
  var getValue = kotlin_kotlin.$crossModule$.getValue;
  var HashSet_init_$Create$_0 = kotlin_kotlin.$crossModule$.HashSet_init_$Create$_2;
  var LinkedHashSet_init_$Create$ = kotlin_kotlin.$crossModule$.LinkedHashSet_init_$Create$;
  var LinkedHashSet_init_$Create$_0 = kotlin_kotlin.$crossModule$.LinkedHashSet_init_$Create$_1;
  var HashMap_init_$Create$ = kotlin_kotlin.$crossModule$.HashMap_init_$Create$;
  var HashMap_init_$Create$_0 = kotlin_kotlin.$crossModule$.HashMap_init_$Create$_1;
  var HashSet_init_$Create$_1 = kotlin_kotlin.$crossModule$.HashSet_init_$Create$;
  var fillArrayVal = kotlin_kotlin.$crossModule$.fillArrayVal;
  var booleanArray = kotlin_kotlin.$crossModule$.booleanArray;
  var IndexOutOfBoundsException_init_$Create$ = kotlin_kotlin.$crossModule$.IndexOutOfBoundsException_init_$Create$_1;
  var Companion_getInstance = kotlin_kotlin.$crossModule$.Companion_getInstance;
  var isCharArray = kotlin_kotlin.$crossModule$.isCharArray;
  var charArray = kotlin_kotlin.$crossModule$.charArray;
  var DoubleCompanionObject_getInstance = kotlin_kotlin.$crossModule$.DoubleCompanionObject_getInstance;
  var isDoubleArray = kotlin_kotlin.$crossModule$.isDoubleArray;
  var FloatCompanionObject_getInstance = kotlin_kotlin.$crossModule$.FloatCompanionObject_getInstance;
  var isFloatArray = kotlin_kotlin.$crossModule$.isFloatArray;
  var Companion_getInstance_0 = kotlin_kotlin.$crossModule$.Companion_getInstance_1;
  var isLongArray = kotlin_kotlin.$crossModule$.isLongArray;
  var longArray = kotlin_kotlin.$crossModule$.longArray;
  var IntCompanionObject_getInstance = kotlin_kotlin.$crossModule$.IntCompanionObject_getInstance;
  var isIntArray = kotlin_kotlin.$crossModule$.isIntArray;
  var ShortCompanionObject_getInstance = kotlin_kotlin.$crossModule$.ShortCompanionObject_getInstance;
  var isShortArray = kotlin_kotlin.$crossModule$.isShortArray;
  var ByteCompanionObject_getInstance = kotlin_kotlin.$crossModule$.ByteCompanionObject_getInstance;
  var isByteArray = kotlin_kotlin.$crossModule$.isByteArray;
  var BooleanCompanionObject_getInstance = kotlin_kotlin.$crossModule$.BooleanCompanionObject_getInstance;
  var isBooleanArray = kotlin_kotlin.$crossModule$.isBooleanArray;
  var coerceAtLeast = kotlin_kotlin.$crossModule$.coerceAtLeast;
  var copyOf = kotlin_kotlin.$crossModule$.copyOf_4;
  var copyOf_0 = kotlin_kotlin.$crossModule$.copyOf_6;
  var copyOf_1 = kotlin_kotlin.$crossModule$.copyOf_7;
  var copyOf_2 = kotlin_kotlin.$crossModule$.copyOf_2;
  var copyOf_3 = kotlin_kotlin.$crossModule$.copyOf_9;
  var copyOf_4 = kotlin_kotlin.$crossModule$.copyOf_1;
  var copyOf_5 = kotlin_kotlin.$crossModule$.copyOf_5;
  var copyOf_6 = kotlin_kotlin.$crossModule$.copyOf_3;
  var Unit = kotlin_kotlin.$crossModule$.Unit;
  var capitalize = kotlin_kotlin.$crossModule$.capitalize;
  var trimIndent = kotlin_kotlin.$crossModule$.trimIndent;
  var equals_0 = kotlin_kotlin.$crossModule$.equals_1;
  var PrimitiveClasses_getInstance = kotlin_kotlin.$crossModule$.PrimitiveClasses_getInstance;
  var mapOf = kotlin_kotlin.$crossModule$.mapOf;
  var charSequenceLength = kotlin_kotlin.$crossModule$.charSequenceLength;
  var last = kotlin_kotlin.$crossModule$.last;
  var lastOrNull = kotlin_kotlin.$crossModule$.lastOrNull;
  var _get_lastIndex__339712501 = kotlin_kotlin.$crossModule$._get_lastIndex__339712501;
  var emptyMap = kotlin_kotlin.$crossModule$.emptyMap;
  var _get_indices__2241594442 = kotlin_kotlin.$crossModule$._get_indices__2241594442_1;
  var _get_indices__2241594442_0 = kotlin_kotlin.$crossModule$._get_indices__2241594442;
  var _get_js__1413122402 = kotlin_kotlin.$crossModule$._get_js__1413122402;
  var findAssociatedObject = kotlin_kotlin.$crossModule$.findAssociatedObject;
  //endregion
  'use strict';
  //region block: pre-declaration
  SealedClassSerializer.prototype = Object.create(AbstractPolymorphicSerializer.prototype);
  SealedClassSerializer.prototype.constructor = SealedClassSerializer;
  SerializationException.prototype = Object.create(IllegalArgumentException.prototype);
  SerializationException.prototype.constructor = SerializationException;
  UnknownFieldException.prototype = Object.create(SerializationException.prototype);
  UnknownFieldException.prototype.constructor = UnknownFieldException;
  MissingFieldException.prototype = Object.create(SerializationException.prototype);
  MissingFieldException.prototype.constructor = MissingFieldException;
  function _get_isNullable__336674624() {
    return false;
  }
  function _get_annotations__1905959661() {
    return emptyList();
  }
  ENUM.prototype = Object.create(SerialKind.prototype);
  ENUM.prototype.constructor = ENUM;
  CONTEXTUAL.prototype = Object.create(SerialKind.prototype);
  CONTEXTUAL.prototype.constructor = CONTEXTUAL;
  PrimitiveKind.prototype = Object.create(SerialKind.prototype);
  PrimitiveKind.prototype.constructor = PrimitiveKind;
  BOOLEAN.prototype = Object.create(PrimitiveKind.prototype);
  BOOLEAN.prototype.constructor = BOOLEAN;
  BYTE.prototype = Object.create(PrimitiveKind.prototype);
  BYTE.prototype.constructor = BYTE;
  CHAR.prototype = Object.create(PrimitiveKind.prototype);
  CHAR.prototype.constructor = CHAR;
  SHORT.prototype = Object.create(PrimitiveKind.prototype);
  SHORT.prototype.constructor = SHORT;
  INT.prototype = Object.create(PrimitiveKind.prototype);
  INT.prototype.constructor = INT;
  LONG.prototype = Object.create(PrimitiveKind.prototype);
  LONG.prototype.constructor = LONG;
  FLOAT.prototype = Object.create(PrimitiveKind.prototype);
  FLOAT.prototype.constructor = FLOAT;
  DOUBLE.prototype = Object.create(PrimitiveKind.prototype);
  DOUBLE.prototype.constructor = DOUBLE;
  STRING.prototype = Object.create(PrimitiveKind.prototype);
  STRING.prototype.constructor = STRING;
  StructureKind.prototype = Object.create(SerialKind.prototype);
  StructureKind.prototype.constructor = StructureKind;
  CLASS.prototype = Object.create(StructureKind.prototype);
  CLASS.prototype.constructor = CLASS;
  LIST.prototype = Object.create(StructureKind.prototype);
  LIST.prototype.constructor = LIST;
  MAP.prototype = Object.create(StructureKind.prototype);
  MAP.prototype.constructor = MAP;
  OBJECT.prototype = Object.create(StructureKind.prototype);
  OBJECT.prototype.constructor = OBJECT;
  PolymorphicKind.prototype = Object.create(SerialKind.prototype);
  PolymorphicKind.prototype.constructor = PolymorphicKind;
  SEALED.prototype = Object.create(PolymorphicKind.prototype);
  SEALED.prototype.constructor = SEALED;
  OPEN.prototype = Object.create(PolymorphicKind.prototype);
  OPEN.prototype.constructor = OPEN;
  function decodeSerializableValue(deserializer) {
    return deserializer.deserialize_2t41fm_k$(this);
  }
  function decodeNullableSerializableValue(deserializer) {
    var isNullabilitySupported = deserializer._get_descriptor__684124924_bbb664_k$()._get_isNullable__336674624_5kg3sw_k$();
    return (isNullabilitySupported ? true : this.decodeNotNullMark_us4ba1_k$()) ? this.decodeSerializableValue_xpp80o_k$(deserializer) : this.decodeNull_jzrmuj_k$();
  }
  function decodeSequentially() {
    return false;
  }
  function decodeCollectionSize(descriptor) {
    return -1;
  }
  function decodeSerializableElement$default(descriptor, index, deserializer, previousValue, $mask0, $handler) {
    if (!(($mask0 & 8) === 0))
      previousValue = null;
    return $handler == null ? this.decodeSerializableElement_5lsbxj_k$(descriptor, index, deserializer, previousValue) : $handler(descriptor, index, deserializer, previousValue);
  }
  function decodeNullableSerializableElement$default(descriptor, index, deserializer, previousValue, $mask0, $handler) {
    if (!(($mask0 & 8) === 0))
      previousValue = null;
    return $handler == null ? this.decodeNullableSerializableElement_ri3t5d_k$(descriptor, index, deserializer, previousValue) : $handler(descriptor, index, deserializer, previousValue);
  }
  function decodeSerializableElement(descriptor, i, deserializer) {
    return this.decodeSerializableElement_5lsbxj_k$(descriptor, i, deserializer, null);
  }
  function decodeNullableSerializableElement(descriptor, i, deserializer) {
    return this.decodeNullableSerializableElement_ri3t5d_k$(descriptor, i, deserializer, null);
  }
  function encodeNotNullMark() {
  }
  function beginCollection(descriptor, collectionSize) {
    return this.beginStructure_dv3yt3_k$(descriptor);
  }
  function encodeSerializableValue(serializer, value) {
    serializer.serialize_32qylj_k$(this, value);
  }
  function encodeNullableSerializableValue(serializer, value) {
    var isNullabilitySupported = serializer._get_descriptor__684124924_bbb664_k$()._get_isNullable__336674624_5kg3sw_k$();
    if (isNullabilitySupported) {
      return this.encodeSerializableValue_bps9ot_k$(isInterface(serializer, SerializationStrategy) ? serializer : THROW_CCE(), value);
    }
    if (value == null) {
      this.encodeNull_ek2hec_k$();
    } else {
      this.encodeNotNullMark_40lhgg_k$();
      this.encodeSerializableValue_bps9ot_k$(serializer, value);
    }
  }
  function shouldEncodeElementDefault(descriptor, index) {
    return true;
  }
  PrimitiveArrayDescriptor.prototype = Object.create(ListLikeDescriptor.prototype);
  PrimitiveArrayDescriptor.prototype.constructor = PrimitiveArrayDescriptor;
  ArrayClassDesc.prototype = Object.create(ListLikeDescriptor.prototype);
  ArrayClassDesc.prototype.constructor = ArrayClassDesc;
  ArrayListClassDesc.prototype = Object.create(ListLikeDescriptor.prototype);
  ArrayListClassDesc.prototype.constructor = ArrayListClassDesc;
  LinkedHashMapClassDesc.prototype = Object.create(MapLikeDescriptor.prototype);
  LinkedHashMapClassDesc.prototype.constructor = LinkedHashMapClassDesc;
  HashSetClassDesc.prototype = Object.create(ListLikeDescriptor.prototype);
  HashSetClassDesc.prototype.constructor = HashSetClassDesc;
  LinkedHashSetClassDesc.prototype = Object.create(ListLikeDescriptor.prototype);
  LinkedHashSetClassDesc.prototype.constructor = LinkedHashSetClassDesc;
  HashMapClassDesc.prototype = Object.create(MapLikeDescriptor.prototype);
  HashMapClassDesc.prototype.constructor = HashMapClassDesc;
  ListLikeSerializer.prototype = Object.create(AbstractCollectionSerializer.prototype);
  ListLikeSerializer.prototype.constructor = ListLikeSerializer;
  PrimitiveArraySerializer.prototype = Object.create(ListLikeSerializer.prototype);
  PrimitiveArraySerializer.prototype.constructor = PrimitiveArraySerializer;
  ReferenceArraySerializer.prototype = Object.create(ListLikeSerializer.prototype);
  ReferenceArraySerializer.prototype.constructor = ReferenceArraySerializer;
  ArrayListSerializer.prototype = Object.create(ListLikeSerializer.prototype);
  ArrayListSerializer.prototype.constructor = ArrayListSerializer;
  MapLikeSerializer.prototype = Object.create(AbstractCollectionSerializer.prototype);
  MapLikeSerializer.prototype.constructor = MapLikeSerializer;
  LinkedHashMapSerializer.prototype = Object.create(MapLikeSerializer.prototype);
  LinkedHashMapSerializer.prototype.constructor = LinkedHashMapSerializer;
  HashSetSerializer.prototype = Object.create(ListLikeSerializer.prototype);
  HashSetSerializer.prototype.constructor = HashSetSerializer;
  LinkedHashSetSerializer.prototype = Object.create(ListLikeSerializer.prototype);
  LinkedHashSetSerializer.prototype.constructor = LinkedHashSetSerializer;
  HashMapSerializer.prototype = Object.create(MapLikeSerializer.prototype);
  HashMapSerializer.prototype.constructor = HashMapSerializer;
  function typeParametersSerializers() {
    return _get_EMPTY_SERIALIZER_ARRAY__3941305005();
  }
  CharArraySerializer_0.prototype = Object.create(PrimitiveArraySerializer.prototype);
  CharArraySerializer_0.prototype.constructor = CharArraySerializer_0;
  DoubleArraySerializer_0.prototype = Object.create(PrimitiveArraySerializer.prototype);
  DoubleArraySerializer_0.prototype.constructor = DoubleArraySerializer_0;
  FloatArraySerializer_0.prototype = Object.create(PrimitiveArraySerializer.prototype);
  FloatArraySerializer_0.prototype.constructor = FloatArraySerializer_0;
  LongArraySerializer_0.prototype = Object.create(PrimitiveArraySerializer.prototype);
  LongArraySerializer_0.prototype.constructor = LongArraySerializer_0;
  IntArraySerializer_0.prototype = Object.create(PrimitiveArraySerializer.prototype);
  IntArraySerializer_0.prototype.constructor = IntArraySerializer_0;
  ShortArraySerializer_0.prototype = Object.create(PrimitiveArraySerializer.prototype);
  ShortArraySerializer_0.prototype.constructor = ShortArraySerializer_0;
  ByteArraySerializer_0.prototype = Object.create(PrimitiveArraySerializer.prototype);
  ByteArraySerializer_0.prototype.constructor = ByteArraySerializer_0;
  BooleanArraySerializer_0.prototype = Object.create(PrimitiveArraySerializer.prototype);
  BooleanArraySerializer_0.prototype.constructor = BooleanArraySerializer_0;
  CharArrayBuilder.prototype = Object.create(PrimitiveArrayBuilder.prototype);
  CharArrayBuilder.prototype.constructor = CharArrayBuilder;
  DoubleArrayBuilder.prototype = Object.create(PrimitiveArrayBuilder.prototype);
  DoubleArrayBuilder.prototype.constructor = DoubleArrayBuilder;
  FloatArrayBuilder.prototype = Object.create(PrimitiveArrayBuilder.prototype);
  FloatArrayBuilder.prototype.constructor = FloatArrayBuilder;
  LongArrayBuilder.prototype = Object.create(PrimitiveArrayBuilder.prototype);
  LongArrayBuilder.prototype.constructor = LongArrayBuilder;
  IntArrayBuilder.prototype = Object.create(PrimitiveArrayBuilder.prototype);
  IntArrayBuilder.prototype.constructor = IntArrayBuilder;
  ShortArrayBuilder.prototype = Object.create(PrimitiveArrayBuilder.prototype);
  ShortArrayBuilder.prototype.constructor = ShortArrayBuilder;
  ByteArrayBuilder.prototype = Object.create(PrimitiveArrayBuilder.prototype);
  ByteArrayBuilder.prototype.constructor = ByteArrayBuilder;
  BooleanArrayBuilder.prototype = Object.create(PrimitiveArrayBuilder.prototype);
  BooleanArrayBuilder.prototype.constructor = BooleanArrayBuilder;
  NamedValueEncoder.prototype = Object.create(TaggedEncoder.prototype);
  NamedValueEncoder.prototype.constructor = NamedValueEncoder;
  NamedValueDecoder.prototype = Object.create(TaggedDecoder.prototype);
  NamedValueDecoder.prototype.constructor = NamedValueDecoder;
  MapEntrySerializer_0.prototype = Object.create(KeyValueSerializer.prototype);
  MapEntrySerializer_0.prototype.constructor = MapEntrySerializer_0;
  PairSerializer_0.prototype = Object.create(KeyValueSerializer.prototype);
  PairSerializer_0.prototype.constructor = PairSerializer_0;
  SerialModuleImpl.prototype = Object.create(SerializersModule.prototype);
  SerialModuleImpl.prototype.constructor = SerialModuleImpl;
  //endregion
  function ExperimentalSerializationApi() {
  }
  ExperimentalSerializationApi.prototype.equals = function (other) {
    if (!(other instanceof ExperimentalSerializationApi))
      return false;
    else {
    }
    var tmp0_other_with_cast = other instanceof ExperimentalSerializationApi ? other : THROW_CCE();
    return true;
  };
  ExperimentalSerializationApi.prototype.hashCode = function () {
    return 0;
  };
  ExperimentalSerializationApi.prototype.toString = function () {
    return '@kotlinx.serialization.ExperimentalSerializationApi()';
  };
  ExperimentalSerializationApi.$metadata$ = {
    simpleName: 'ExperimentalSerializationApi',
    kind: 'class',
    interfaces: [Annotation]
  };
  function InternalSerializationApi() {
  }
  InternalSerializationApi.prototype.equals = function (other) {
    if (!(other instanceof InternalSerializationApi))
      return false;
    else {
    }
    var tmp0_other_with_cast = other instanceof InternalSerializationApi ? other : THROW_CCE();
    return true;
  };
  InternalSerializationApi.prototype.hashCode = function () {
    return 0;
  };
  InternalSerializationApi.prototype.toString = function () {
    return '@kotlinx.serialization.InternalSerializationApi()';
  };
  InternalSerializationApi.$metadata$ = {
    simpleName: 'InternalSerializationApi',
    kind: 'class',
    interfaces: [Annotation]
  };
  function Serializable_init_$Init$(with_0, $mask0, $marker, $this) {
    if (!(($mask0 & 1) === 0))
      with_0 = getKClass(KSerializer);
    Serializable.call($this, with_0);
    return $this;
  }
  function Serializable_init_$Create$(with_0, $mask0, $marker) {
    return Serializable_init_$Init$(with_0, $mask0, $marker, Object.create(Serializable.prototype));
  }
  function Serializable(with_0) {
    this.with_1 = with_0;
  }
  Serializable.prototype._get_with__812725829_dfvj9h_k$ = function () {
    return this.with_1;
  };
  Serializable.prototype.equals = function (other) {
    if (!(other instanceof Serializable))
      return false;
    else {
    }
    var tmp0_other_with_cast = other instanceof Serializable ? other : THROW_CCE();
    if (!this.with_1.equals(tmp0_other_with_cast.with_1))
      return false;
    return true;
  };
  Serializable.prototype.hashCode = function () {
    return imul(getStringHashCode('with'), 127) ^ this.with_1.hashCode();
  };
  Serializable.prototype.toString = function () {
    return '@kotlinx.serialization.Serializable(with=' + this.with_1 + ')';
  };
  Serializable.$metadata$ = {
    simpleName: 'Serializable',
    kind: 'class',
    interfaces: [Annotation]
  };
  function Serializer(forClass) {
    this.forClass_1 = forClass;
  }
  Serializer.prototype._get_forClass__2100593532_yqn0cc_k$ = function () {
    return this.forClass_1;
  };
  Serializer.prototype.equals = function (other) {
    if (!(other instanceof Serializer))
      return false;
    else {
    }
    var tmp0_other_with_cast = other instanceof Serializer ? other : THROW_CCE();
    if (!this.forClass_1.equals(tmp0_other_with_cast.forClass_1))
      return false;
    return true;
  };
  Serializer.prototype.hashCode = function () {
    return imul(getStringHashCode('forClass'), 127) ^ this.forClass_1.hashCode();
  };
  Serializer.prototype.toString = function () {
    return '@kotlinx.serialization.Serializer(forClass=' + this.forClass_1 + ')';
  };
  Serializer.$metadata$ = {
    simpleName: 'Serializer',
    kind: 'class',
    interfaces: [Annotation]
  };
  function KSerializer() {
  }
  KSerializer.$metadata$ = {
    simpleName: 'KSerializer',
    kind: 'interface',
    interfaces: [SerializationStrategy, DeserializationStrategy]
  };
  function DeserializationStrategy() {
  }
  DeserializationStrategy.$metadata$ = {
    simpleName: 'DeserializationStrategy',
    kind: 'interface',
    interfaces: []
  };
  function SerializationStrategy() {
  }
  SerializationStrategy.$metadata$ = {
    simpleName: 'SerializationStrategy',
    kind: 'interface',
    interfaces: []
  };
  function findPolymorphicSerializer(_this__1828080292, encoder, value) {
    var tmp0_elvis_lhs = _this__1828080292.findPolymorphicSerializerOrNull_mimmn_k$(encoder, value);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throwSubtypeNotRegistered(getKClassFromExpression(value), _this__1828080292._get_baseClass__1703496202_s67u2y_k$());
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function findPolymorphicSerializer_0(_this__1828080292, decoder, klassName) {
    var tmp0_elvis_lhs = _this__1828080292.findPolymorphicSerializerOrNull_e7t5h9_k$(decoder, klassName);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throwSubtypeNotRegistered_0(klassName, _this__1828080292._get_baseClass__1703496202_s67u2y_k$());
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function _get_class2Serializer__1352632671($this) {
    return $this.class2Serializer_1;
  }
  function _get_serialName2Serializer__2568977164($this) {
    return $this.serialName2Serializer_1;
  }
  function SealedClassSerializer$descriptor$lambda$lambda($subclassSerializers) {
    return function (_this__1828080292) {
      var indexedObject = $subclassSerializers;
      var inductionVariable = 0;
      var last = indexedObject.length;
      while (inductionVariable < last) {
        var element_2 = indexedObject[inductionVariable];
        inductionVariable = inductionVariable + 1 | 0;
        {
          var d_4 = element_2._get_descriptor__684124924_bbb664_k$();
          var tmp = d_4._get_serialName__1025298892_gyfpos_k$();
          _this__1828080292.element$default_m7h690_k$(tmp, d_4, null, false, 12, null);
        }
      }
      Unit_getInstance();
      return Unit_getInstance();
    };
  }
  function SealedClassSerializer$descriptor$lambda(this$0, $subclassSerializers) {
    return function (_this__1828080292) {
      var tmp = serializer_1(StringCompanionObject_getInstance())._get_descriptor__684124924_bbb664_k$();
      _this__1828080292.element$default_m7h690_k$('type', tmp, null, false, 12, null);
      var tmp_0 = 'kotlinx.serialization.Sealed<' + this$0.baseClass_1._get_simpleName__973554894_g3mnri_k$() + '>';
      var tmp_1 = CONTEXTUAL_getInstance();
      var elementDescriptor = buildSerialDescriptor$default(tmp_0, tmp_1, [], SealedClassSerializer$descriptor$lambda$lambda($subclassSerializers), 4, null);
      Unit_getInstance();
      _this__1828080292.element$default_m7h690_k$('value', elementDescriptor, null, false, 12, null);
      return Unit_getInstance();
    };
  }
  function _no_name_provided__1_2832250971($tmp0_groupingBy_0) {
    this.$tmp0_groupingBy_0__1 = $tmp0_groupingBy_0;
  }
  _no_name_provided__1_2832250971.prototype.sourceIterator_2_z1a12c_k$ = function () {
    return this.$tmp0_groupingBy_0__1.iterator_jk1svi_k$();
  };
  _no_name_provided__1_2832250971.prototype.sourceIterator_2zqxcn_k$ = function () {
    return this.sourceIterator_2_z1a12c_k$();
  };
  _no_name_provided__1_2832250971.prototype.keyOf_3_hp4ft6_k$ = function (element) {
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = element._get_value__3683422336_a43j40_k$()._get_descriptor__684124924_bbb664_k$()._get_serialName__1025298892_gyfpos_k$();
      break $l$block;
    }
    return tmp$ret$0;
  };
  _no_name_provided__1_2832250971.prototype.keyOf_dhlc0l_k$ = function (element) {
    return this.keyOf_3_hp4ft6_k$((!(element == null) ? isInterface(element, Entry) : false) ? element : THROW_CCE());
  };
  _no_name_provided__1_2832250971.$metadata$ = {
    simpleName: '<no name provided>_1',
    kind: 'class',
    interfaces: [Grouping]
  };
  function SealedClassSerializer(serialName, baseClass, subclasses, subclassSerializers) {
    AbstractPolymorphicSerializer.call(this);
    this.baseClass_1 = baseClass;
    var tmp = this;
    var tmp_0 = SEALED_getInstance();
    tmp.descriptor_1 = buildSerialDescriptor$default(serialName, tmp_0, [], SealedClassSerializer$descriptor$lambda(this, subclassSerializers), 4, null);
    if (!(subclasses.length === subclassSerializers.length)) {
      throw IllegalArgumentException_init_$Create$('All subclasses of sealed class ' + this.baseClass_1._get_simpleName__973554894_g3mnri_k$() + ' should be marked @Serializable');
    }
    this.class2Serializer_1 = toMap(zip(subclasses, subclassSerializers));
    var tmp_1 = this;
    var tmp$ret$10;
    $l$block_9: {
      var tmp$ret$5;
      $l$block_4: {
        var tmp$ret$0;
        $l$block: {
          var tmp0_groupingBy_0 = this.class2Serializer_1._get_entries__31877249_iz8n5_k$();
          tmp$ret$0 = new _no_name_provided__1_2832250971(tmp0_groupingBy_0);
          break $l$block;
        }
        var tmp1_aggregate_0 = tmp$ret$0;
        var tmp$ret$4;
        $l$block_3: {
          var tmp$ret$1;
          $l$block_0: {
            tmp$ret$1 = LinkedHashMap_init_$Create$();
            break $l$block_0;
          }
          var tmp2_aggregateTo_0_1 = tmp$ret$1;
          var tmp$ret$2;
          $l$block_1: {
            var tmp0_iterator_0_3 = tmp1_aggregate_0.sourceIterator_2zqxcn_k$();
            tmp$ret$2 = tmp0_iterator_0_3;
            break $l$block_1;
          }
          var tmp0_iterator_1_2 = tmp$ret$2;
          while (tmp0_iterator_1_2.hasNext_bitz1p_k$()) {
            var e_2_4 = tmp0_iterator_1_2.next_20eer_k$();
            var key_3_5 = tmp1_aggregate_0.keyOf_dhlc0l_k$(e_2_4);
            var accumulator_4_6 = tmp2_aggregateTo_0_1.get_1mhr4y_k$(key_3_5);
            {
              var tmp$ret$3;
              $l$block_2: {
                var tmp2__anonymous__8_1215738850 = accumulator_4_6 == null ? !tmp2_aggregateTo_0_1.containsKey_wgk31w_k$(key_3_5) : false;
                if (!(accumulator_4_6 == null)) {
                  {
                    var tmp0_error_0_9 = "Multiple sealed subclasses of '" + this.baseClass_1 + "' have the same serial name '" + key_3_5 + "':" + (" '" + accumulator_4_6._get_key__857139730_e6bh8y_k$() + "', '" + e_2_4._get_key__857139730_e6bh8y_k$() + "'");
                    throw IllegalStateException_init_$Create$(toString(tmp0_error_0_9));
                  }
                }
                tmp$ret$3 = e_2_4;
                break $l$block_2;
              }
              var tmp1_set_0_7 = tmp$ret$3;
              tmp2_aggregateTo_0_1.put_3mhbri_k$(key_3_5, tmp1_set_0_7);
              Unit_getInstance();
            }
          }
          tmp$ret$4 = tmp2_aggregateTo_0_1;
          break $l$block_3;
        }
        tmp$ret$5 = tmp$ret$4;
        break $l$block_4;
      }
      var tmp3_mapValues_0 = tmp$ret$5;
      var tmp$ret$9;
      $l$block_8: {
        var tmp1_mapValuesTo_0_1 = LinkedHashMap_init_$Create$_0(mapCapacity(tmp3_mapValues_0._get_size__809037418_ddoh9m_k$()));
        var tmp$ret$8;
        $l$block_7: {
          var tmp0_associateByTo_0_2 = tmp3_mapValues_0._get_entries__31877249_iz8n5_k$();
          var tmp0_iterator_1_3 = tmp0_associateByTo_0_2.iterator_jk1svi_k$();
          while (tmp0_iterator_1_3.hasNext_bitz1p_k$()) {
            var element_2_4 = tmp0_iterator_1_3.next_20eer_k$();
            var tmp$ret$6;
            $l$block_5: {
              tmp$ret$6 = element_2_4._get_key__857139730_e6bh8y_k$();
              break $l$block_5;
            }
            var tmp_2 = tmp$ret$6;
            var tmp$ret$7;
            $l$block_6: {
              tmp$ret$7 = element_2_4._get_value__3683422336_a43j40_k$()._get_value__3683422336_a43j40_k$();
              break $l$block_6;
            }
            tmp1_mapValuesTo_0_1.put_3mhbri_k$(tmp_2, tmp$ret$7);
            Unit_getInstance();
          }
          tmp$ret$8 = tmp1_mapValuesTo_0_1;
          break $l$block_7;
        }
        tmp$ret$9 = tmp$ret$8;
        break $l$block_8;
      }
      tmp$ret$10 = tmp$ret$9;
      break $l$block_9;
    }
    tmp_1.serialName2Serializer_1 = tmp$ret$10;
  }
  SealedClassSerializer.prototype._get_baseClass__1703496202_s67u2y_k$ = function () {
    return this.baseClass_1;
  };
  SealedClassSerializer.prototype._get_descriptor__684124924_bbb664_k$ = function () {
    return this.descriptor_1;
  };
  SealedClassSerializer.prototype.findPolymorphicSerializerOrNull_e7t5h9_k$ = function (decoder, klassName) {
    var tmp$ret$0;
    $l$block: {
      var tmp0_get_0 = this.serialName2Serializer_1;
      tmp$ret$0 = (isInterface(tmp0_get_0, Map) ? tmp0_get_0 : THROW_CCE()).get_1mhr4y_k$(klassName);
      break $l$block;
    }
    var tmp0_elvis_lhs = tmp$ret$0;
    return tmp0_elvis_lhs == null ? AbstractPolymorphicSerializer.prototype.findPolymorphicSerializerOrNull_e7t5h9_k$.call(this, decoder, klassName) : tmp0_elvis_lhs;
  };
  SealedClassSerializer.prototype.findPolymorphicSerializerOrNull_mimmn_k$ = function (encoder, value) {
    var tmp0_elvis_lhs = this.class2Serializer_1.get_1mhr4y_k$(getKClassFromExpression(value));
    var tmp1_safe_receiver = tmp0_elvis_lhs == null ? AbstractPolymorphicSerializer.prototype.findPolymorphicSerializerOrNull_mimmn_k$.call(this, encoder, value) : tmp0_elvis_lhs;
    var tmp;
    if (tmp1_safe_receiver == null) {
      tmp = null;
    } else {
      var tmp$ret$0;
      $l$block: {
        tmp$ret$0 = (!(tmp1_safe_receiver == null) ? isInterface(tmp1_safe_receiver, SerializationStrategy) : false) ? tmp1_safe_receiver : THROW_CCE();
        break $l$block;
      }
      tmp = tmp$ret$0;
    }
    return tmp;
  };
  SealedClassSerializer.$metadata$ = {
    simpleName: 'SealedClassSerializer',
    kind: 'class',
    interfaces: []
  };
  function StringFormat() {
  }
  StringFormat.$metadata$ = {
    simpleName: 'StringFormat',
    kind: 'interface',
    interfaces: [SerialFormat]
  };
  function SerialFormat() {
  }
  SerialFormat.$metadata$ = {
    simpleName: 'SerialFormat',
    kind: 'interface',
    interfaces: []
  };
  function UnknownFieldException(index) {
    SerializationException_init_$Init$_0('An unknown field for index ' + index, this);
    captureStack(this, UnknownFieldException);
  }
  UnknownFieldException.$metadata$ = {
    simpleName: 'UnknownFieldException',
    kind: 'class',
    interfaces: []
  };
  function MissingFieldException(fieldName) {
    SerializationException_init_$Init$_0("Field '" + fieldName + "' is required, but it was missing", this);
    captureStack(this, MissingFieldException);
  }
  MissingFieldException.$metadata$ = {
    simpleName: 'MissingFieldException',
    kind: 'class',
    interfaces: []
  };
  function SerializationException_init_$Init$($this) {
    IllegalArgumentException_init_$Init$($this);
    SerializationException.call($this);
    return $this;
  }
  function SerializationException_init_$Create$() {
    var tmp = SerializationException_init_$Init$(Object.create(SerializationException.prototype));
    captureStack(tmp, SerializationException_init_$Create$);
    return tmp;
  }
  function SerializationException_init_$Init$_0(message, $this) {
    IllegalArgumentException_init_$Init$_0(message, $this);
    SerializationException.call($this);
    return $this;
  }
  function SerializationException_init_$Create$_0(message) {
    var tmp = SerializationException_init_$Init$_0(message, Object.create(SerializationException.prototype));
    captureStack(tmp, SerializationException_init_$Create$_0);
    return tmp;
  }
  function SerializationException_init_$Init$_1(message, cause, $this) {
    IllegalArgumentException_init_$Init$_1(message, cause, $this);
    SerializationException.call($this);
    return $this;
  }
  function SerializationException_init_$Create$_1(message, cause) {
    var tmp = SerializationException_init_$Init$_1(message, cause, Object.create(SerializationException.prototype));
    captureStack(tmp, SerializationException_init_$Create$_1);
    return tmp;
  }
  function SerializationException_init_$Init$_2(cause, $this) {
    IllegalArgumentException_init_$Init$_2(cause, $this);
    SerializationException.call($this);
    return $this;
  }
  function SerializationException_init_$Create$_2(cause) {
    var tmp = SerializationException_init_$Init$_2(cause, Object.create(SerializationException.prototype));
    captureStack(tmp, SerializationException_init_$Create$_2);
    return tmp;
  }
  function SerializationException() {
    captureStack(this, SerializationException);
  }
  SerializationException.$metadata$ = {
    simpleName: 'SerializationException',
    kind: 'class',
    interfaces: []
  };
  function serializer(type) {
    var tmp0_elvis_lhs = serializerByKTypeImpl(_get_EmptySerializersModule__1292120011(), type);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      platformSpecificSerializerNotRegistered(kclass(type));
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var result = tmp;
    return nullable(result, type._get_isMarkedNullable__252231220_4666us_k$());
  }
  function serializerByKTypeImpl(_this__1828080292, type) {
    var rootClass = kclass(type);
    var tmp$ret$4;
    $l$block_3: {
      var tmp0_map_0 = type._get_arguments__15705019_9cm2j_k$();
      var tmp$ret$3;
      $l$block_2: {
        var tmp0_mapTo_0_1 = ArrayList_init_$Create$(collectionSizeOrDefault(tmp0_map_0, 10));
        var tmp0_iterator_1_2 = tmp0_map_0.iterator_jk1svi_k$();
        while (tmp0_iterator_1_2.hasNext_bitz1p_k$()) {
          var item_2_3 = tmp0_iterator_1_2.next_20eer_k$();
          var tmp$ret$2;
          $l$block_1: {
            var tmp$ret$1;
            $l$block_0: {
              var tmp0_requireNotNull_0_5 = item_2_3._get_type__810427985_deia8h_k$();
              {
              }
              if (tmp0_requireNotNull_0_5 == null) {
                var tmp$ret$0;
                $l$block: {
                  tmp$ret$0 = 'Star projections in type arguments are not allowed, but had ' + type;
                  break $l$block;
                }
                var message_1_6 = tmp$ret$0;
                throw IllegalArgumentException_init_$Create$(toString(message_1_6));
              } else {
                tmp$ret$1 = tmp0_requireNotNull_0_5;
                break $l$block_0;
              }
            }
            tmp$ret$2 = tmp$ret$1;
            break $l$block_1;
          }
          tmp0_mapTo_0_1.add_1j60pz_k$(tmp$ret$2);
          Unit_getInstance();
        }
        tmp$ret$3 = tmp0_mapTo_0_1;
        break $l$block_2;
      }
      tmp$ret$4 = tmp$ret$3;
      break $l$block_3;
    }
    var typeArguments = tmp$ret$4;
    var tmp;
    if (typeArguments.isEmpty_y1axqb_k$()) {
      var tmp0_elvis_lhs = serializerOrNull(rootClass);
      tmp = tmp0_elvis_lhs == null ? _this__1828080292.getContextual_715qcj_k$(rootClass) : tmp0_elvis_lhs;
    } else {
      tmp = builtinSerializerOrNull(_this__1828080292, typeArguments, rootClass);
    }
    var tmp1_safe_receiver = tmp;
    var tmp_0;
    if (tmp1_safe_receiver == null) {
      tmp_0 = null;
    } else {
      var tmp$ret$5;
      $l$block_4: {
        tmp$ret$5 = (!(tmp1_safe_receiver == null) ? isInterface(tmp1_safe_receiver, KSerializer) : false) ? tmp1_safe_receiver : THROW_CCE();
        break $l$block_4;
      }
      tmp_0 = tmp$ret$5;
    }
    return tmp_0;
  }
  function nullable(_this__1828080292, shouldBeNullable) {
    if (shouldBeNullable)
      return _get_nullable__2526391434(_this__1828080292);
    return isInterface(_this__1828080292, KSerializer) ? _this__1828080292 : THROW_CCE();
  }
  function serializerOrNull(_this__1828080292) {
    var tmp0_elvis_lhs = compiledSerializerImpl(_this__1828080292);
    return tmp0_elvis_lhs == null ? builtinSerializerOrNull_0(_this__1828080292) : tmp0_elvis_lhs;
  }
  function builtinSerializerOrNull(_this__1828080292, typeArguments, rootClass) {
    var tmp$ret$1;
    $l$block_0: {
      var tmp$ret$0;
      $l$block: {
        var tmp0_mapTo_0_1 = ArrayList_init_$Create$(collectionSizeOrDefault(typeArguments, 10));
        var tmp0_iterator_1_2 = typeArguments.iterator_jk1svi_k$();
        while (tmp0_iterator_1_2.hasNext_bitz1p_k$()) {
          var item_2_3 = tmp0_iterator_1_2.next_20eer_k$();
          tmp0_mapTo_0_1.add_1j60pz_k$(serializer_0(_this__1828080292, item_2_3));
          Unit_getInstance();
        }
        tmp$ret$0 = tmp0_mapTo_0_1;
        break $l$block;
      }
      tmp$ret$1 = tmp$ret$0;
      break $l$block_0;
    }
    var serializers = tmp$ret$1;
    var tmp0_subject = rootClass;
    var tmp;
    if ((tmp0_subject.equals(getKClass(List)) ? true : tmp0_subject.equals(getKClass(MutableList))) ? true : tmp0_subject.equals(getKClass(ArrayList))) {
      tmp = new ArrayListSerializer(serializers.get_fkrdnv_k$(0));
    } else if (tmp0_subject.equals(getKClass(HashSet))) {
      tmp = new HashSetSerializer(serializers.get_fkrdnv_k$(0));
    } else if ((tmp0_subject.equals(getKClass(Set)) ? true : tmp0_subject.equals(getKClass(MutableSet))) ? true : tmp0_subject.equals(getKClass(LinkedHashSet))) {
      tmp = new LinkedHashSetSerializer(serializers.get_fkrdnv_k$(0));
    } else if (tmp0_subject.equals(getKClass(HashMap))) {
      tmp = new HashMapSerializer(serializers.get_fkrdnv_k$(0), serializers.get_fkrdnv_k$(1));
    } else if ((tmp0_subject.equals(getKClass(Map)) ? true : tmp0_subject.equals(getKClass(MutableMap))) ? true : tmp0_subject.equals(getKClass(LinkedHashMap))) {
      tmp = new LinkedHashMapSerializer(serializers.get_fkrdnv_k$(0), serializers.get_fkrdnv_k$(1));
    } else if (tmp0_subject.equals(getKClass(Entry))) {
      tmp = MapEntrySerializer(serializers.get_fkrdnv_k$(0), serializers.get_fkrdnv_k$(1));
    } else if (tmp0_subject.equals(getKClass(Pair))) {
      tmp = PairSerializer(serializers.get_fkrdnv_k$(0), serializers.get_fkrdnv_k$(1));
    } else if (tmp0_subject.equals(getKClass(Triple))) {
      tmp = TripleSerializer(serializers.get_fkrdnv_k$(0), serializers.get_fkrdnv_k$(1), serializers.get_fkrdnv_k$(2));
    } else {
      if (isReferenceArray(rootClass)) {
        var tmp$ret$2;
        $l$block_1: {
          var tmp_0 = typeArguments.get_fkrdnv_k$(0)._get_classifier__2273016458_xftf92_k$();
          var tmp0_cast_0 = ArraySerializer((!(tmp_0 == null) ? isInterface(tmp_0, KClass) : false) ? tmp_0 : THROW_CCE(), serializers.get_fkrdnv_k$(0));
          tmp$ret$2 = isInterface(tmp0_cast_0, KSerializer) ? tmp0_cast_0 : THROW_CCE();
          break $l$block_1;
        }
        return tmp$ret$2;
      }
      var tmp$ret$5;
      $l$block_4: {
        var tmp$ret$3;
        $l$block_2: {
          tmp$ret$3 = copyToArray(serializers);
          break $l$block_2;
        }
        var tmp1_requireNotNull_0 = constructSerializerForGivenTypeArgs(rootClass, tmp$ret$3.slice());
        {
        }
        if (tmp1_requireNotNull_0 == null) {
          var tmp$ret$4;
          $l$block_3: {
            tmp$ret$4 = "Can't find a method to construct serializer for type " + rootClass._get_simpleName__973554894_g3mnri_k$() + '. ' + 'Make sure this class is marked as @Serializable or provide serializer explicitly.';
            break $l$block_3;
          }
          var message_1 = tmp$ret$4;
          throw IllegalArgumentException_init_$Create$(toString(message_1));
        } else {
          tmp$ret$5 = tmp1_requireNotNull_0;
          break $l$block_4;
        }
      }
      tmp = tmp$ret$5;
    }
    return tmp;
  }
  function serializer_0(_this__1828080292, type) {
    var kclass_0 = kclass(type);
    var isNullable = type._get_isMarkedNullable__252231220_4666us_k$();
    var builtin = serializerByKTypeImpl(_this__1828080292, type);
    if (!(builtin == null)) {
      var tmp$ret$0;
      $l$block: {
        var tmp0_cast_0 = nullable(builtin, isNullable);
        tmp$ret$0 = isInterface(tmp0_cast_0, KSerializer) ? tmp0_cast_0 : THROW_CCE();
        break $l$block;
      }
      return tmp$ret$0;
    }
    var tmp0_safe_receiver = _this__1828080292.getContextual_715qcj_k$(kclass_0);
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : nullable(tmp0_safe_receiver, isNullable);
    var tmp;
    if (tmp1_safe_receiver == null) {
      tmp = null;
    } else {
      var tmp$ret$1;
      $l$block_0: {
        tmp$ret$1 = (!(tmp1_safe_receiver == null) ? isInterface(tmp1_safe_receiver, KSerializer) : false) ? tmp1_safe_receiver : THROW_CCE();
        break $l$block_0;
      }
      tmp = tmp$ret$1;
    }
    var tmp2_elvis_lhs = tmp;
    var tmp_0;
    if (tmp2_elvis_lhs == null) {
      platformSpecificSerializerNotRegistered(kclass(type));
    } else {
      tmp_0 = tmp2_elvis_lhs;
    }
    return tmp_0;
  }
  function serializer_1(_this__1828080292) {
    return StringSerializer_getInstance();
  }
  function serializer_2(_this__1828080292) {
    return CharSerializer_getInstance();
  }
  function CharArraySerializer() {
    return CharArraySerializer_getInstance();
  }
  function serializer_3(_this__1828080292) {
    return DoubleSerializer_getInstance();
  }
  function DoubleArraySerializer() {
    return DoubleArraySerializer_getInstance();
  }
  function serializer_4(_this__1828080292) {
    return FloatSerializer_getInstance();
  }
  function FloatArraySerializer() {
    return FloatArraySerializer_getInstance();
  }
  function serializer_5(_this__1828080292) {
    return LongSerializer_getInstance();
  }
  function LongArraySerializer() {
    return LongArraySerializer_getInstance();
  }
  function serializer_6(_this__1828080292) {
    return IntSerializer_getInstance();
  }
  function IntArraySerializer() {
    return IntArraySerializer_getInstance();
  }
  function serializer_7(_this__1828080292) {
    return ShortSerializer_getInstance();
  }
  function ShortArraySerializer() {
    return ShortArraySerializer_getInstance();
  }
  function serializer_8(_this__1828080292) {
    return ByteSerializer_getInstance();
  }
  function ByteArraySerializer() {
    return ByteArraySerializer_getInstance();
  }
  function serializer_9(_this__1828080292) {
    return BooleanSerializer_getInstance();
  }
  function BooleanArraySerializer() {
    return BooleanArraySerializer_getInstance();
  }
  function serializer_10(_this__1828080292) {
    return UnitSerializer_getInstance();
  }
  function _get_nullable__2526391434(_this__1828080292) {
    var tmp;
    if (_this__1828080292._get_descriptor__684124924_bbb664_k$()._get_isNullable__336674624_5kg3sw_k$()) {
      tmp = isInterface(_this__1828080292, KSerializer) ? _this__1828080292 : THROW_CCE();
    } else {
      tmp = new NullableSerializer(_this__1828080292);
    }
    return tmp;
  }
  function MapSerializer(keySerializer, valueSerializer) {
    return new LinkedHashMapSerializer(keySerializer, valueSerializer);
  }
  function ListSerializer(elementSerializer) {
    return new ArrayListSerializer(elementSerializer);
  }
  function MapEntrySerializer(keySerializer, valueSerializer) {
    return new MapEntrySerializer_0(keySerializer, valueSerializer);
  }
  function PairSerializer(keySerializer, valueSerializer) {
    return new PairSerializer_0(keySerializer, valueSerializer);
  }
  function TripleSerializer(aSerializer, bSerializer, cSerializer) {
    return new TripleSerializer_0(aSerializer, bSerializer, cSerializer);
  }
  function ArraySerializer(kClass, elementSerializer) {
    return new ReferenceArraySerializer(kClass, elementSerializer);
  }
  function SerialDescriptor() {
  }
  SerialDescriptor.$metadata$ = {
    simpleName: 'SerialDescriptor',
    kind: 'interface',
    interfaces: []
  };
  function _get_elementDescriptors__2235584067(_this__1828080292) {
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = new _no_name_provided__1_2832250971_0(_this__1828080292);
      break $l$block;
    }
    return tmp$ret$0;
  }
  function _set_elementsLeft__3041364857($this, _set____804775014) {
    $this.elementsLeft_1 = _set____804775014;
  }
  function _get_elementsLeft__3981517677($this) {
    return $this.elementsLeft_1;
  }
  function elementDescriptors$1$1($this_elementDescriptors) {
    this.$this_elementDescriptors_1 = $this_elementDescriptors;
    this.elementsLeft_1 = $this_elementDescriptors._get_elementsCount__2919979385_mqmrgn_k$();
  }
  elementDescriptors$1$1.prototype.hasNext_bitz1p_k$ = function () {
    return this.elementsLeft_1 > 0;
  };
  elementDescriptors$1$1.prototype.next_20eer_k$ = function () {
    var tmp = this.$this_elementDescriptors_1._get_elementsCount__2919979385_mqmrgn_k$();
    var tmp0_this = this;
    var tmp1 = tmp0_this.elementsLeft_1;
    tmp0_this.elementsLeft_1 = tmp1 - 1 | 0;
    return this.$this_elementDescriptors_1.getElementDescriptor_sqz94k_k$(tmp - tmp1 | 0);
  };
  elementDescriptors$1$1.$metadata$ = {
    kind: 'class',
    interfaces: [Iterator]
  };
  function _no_name_provided__1_2832250971_0($this_elementDescriptors) {
    this.$this_elementDescriptors_1 = $this_elementDescriptors;
  }
  _no_name_provided__1_2832250971_0.prototype.iterator_2_syqo9r_k$ = function () {
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = new elementDescriptors$1$1(this.$this_elementDescriptors_1);
      break $l$block;
    }
    return tmp$ret$0;
  };
  _no_name_provided__1_2832250971_0.prototype.iterator_jk1svi_k$ = function () {
    return this.iterator_2_syqo9r_k$();
  };
  _no_name_provided__1_2832250971_0.$metadata$ = {
    simpleName: '<no name provided>_1',
    kind: 'class',
    interfaces: [Iterable]
  };
  function buildSerialDescriptor(serialName, kind, typeParameters, builder) {
    {
      var tmp$ret$0;
      $l$block: {
        tmp$ret$0 = !isBlank(serialName);
        break $l$block;
      }
      var tmp0_require_0 = tmp$ret$0;
      {
      }
      if (!tmp0_require_0) {
        var tmp$ret$1;
        $l$block_0: {
          tmp$ret$1 = 'Blank serial names are prohibited';
          break $l$block_0;
        }
        var message_1 = tmp$ret$1;
        throw IllegalArgumentException_init_$Create$(toString(message_1));
      }
    }
    {
      var tmp1_require_0 = !equals(kind, CLASS_getInstance());
      {
      }
      if (!tmp1_require_0) {
        var tmp$ret$2;
        $l$block_1: {
          tmp$ret$2 = "For StructureKind.CLASS please use 'buildClassSerialDescriptor' instead";
          break $l$block_1;
        }
        var message_1_0 = tmp$ret$2;
        throw IllegalArgumentException_init_$Create$(toString(message_1_0));
      }
    }
    var sdBuilder = new ClassSerialDescriptorBuilder(serialName);
    builder(sdBuilder);
    return new SerialDescriptorImpl(serialName, kind, sdBuilder.elementNames_1._get_size__809037418_ddoh9m_k$(), toList(typeParameters), sdBuilder);
  }
  function buildSerialDescriptor$default(serialName, kind, typeParameters, builder, $mask0, $handler) {
    if (!(($mask0 & 8) === 0)) {
      builder = buildSerialDescriptor$lambda();
    }
    return buildSerialDescriptor(serialName, kind, typeParameters, builder);
  }
  function _get_uniqueNames__1757766266($this) {
    return $this.uniqueNames_1;
  }
  function ClassSerialDescriptorBuilder(serialName) {
    this.serialName_1 = serialName;
    this.isNullable_1 = false;
    this.annotations_1 = emptyList();
    this.elementNames_1 = ArrayList_init_$Create$_0();
    this.uniqueNames_1 = HashSet_init_$Create$();
    this.elementDescriptors_1 = ArrayList_init_$Create$_0();
    this.elementAnnotations_1 = ArrayList_init_$Create$_0();
    this.elementOptionality_1 = ArrayList_init_$Create$_0();
  }
  ClassSerialDescriptorBuilder.prototype._get_serialName__1025298892_gyfpos_k$ = function () {
    return this.serialName_1;
  };
  ClassSerialDescriptorBuilder.prototype._set_isNullable__1247427148_7ys3xf_k$ = function (_set____804775014) {
    this.isNullable_1 = _set____804775014;
  };
  ClassSerialDescriptorBuilder.prototype._get_isNullable__336674624_5kg3sw_k$ = function () {
    return this.isNullable_1;
  };
  ClassSerialDescriptorBuilder.prototype._set_annotations__74516833_7ksc49_k$ = function (_set____804775014) {
    this.annotations_1 = _set____804775014;
  };
  ClassSerialDescriptorBuilder.prototype._get_annotations__1905959661_virbvx_k$ = function () {
    return this.annotations_1;
  };
  ClassSerialDescriptorBuilder.prototype._get_elementNames__2941870367_mdlk9t_k$ = function () {
    return this.elementNames_1;
  };
  ClassSerialDescriptorBuilder.prototype._get_elementDescriptors__2235584067_y23q9p_k$ = function () {
    return this.elementDescriptors_1;
  };
  ClassSerialDescriptorBuilder.prototype._get_elementAnnotations__113538563_1vliwz_k$ = function () {
    return this.elementAnnotations_1;
  };
  ClassSerialDescriptorBuilder.prototype._get_elementOptionality__1684645145_ruzsih_k$ = function () {
    return this.elementOptionality_1;
  };
  ClassSerialDescriptorBuilder.prototype.element_t1rubu_k$ = function (elementName, descriptor, annotations, isOptional) {
    {
      var tmp0_require_0 = this.uniqueNames_1.add_1j60pz_k$(elementName);
      {
      }
      if (!tmp0_require_0) {
        var tmp$ret$0;
        $l$block: {
          tmp$ret$0 = "Element with name '" + elementName + "' is already registered";
          break $l$block;
        }
        var message_1 = tmp$ret$0;
        throw IllegalArgumentException_init_$Create$(toString(message_1));
      }
    }
    var tmp0_this = this;
    {
      var tmp1_plusAssign_0 = tmp0_this.elementNames_1;
      tmp1_plusAssign_0.add_1j60pz_k$(elementName);
      Unit_getInstance();
    }
    var tmp1_this = this;
    {
      var tmp2_plusAssign_0 = tmp1_this.elementDescriptors_1;
      tmp2_plusAssign_0.add_1j60pz_k$(descriptor);
      Unit_getInstance();
    }
    var tmp2_this = this;
    {
      var tmp3_plusAssign_0 = tmp2_this.elementAnnotations_1;
      tmp3_plusAssign_0.add_1j60pz_k$(annotations);
      Unit_getInstance();
    }
    var tmp3_this = this;
    {
      var tmp4_plusAssign_0 = tmp3_this.elementOptionality_1;
      tmp4_plusAssign_0.add_1j60pz_k$(isOptional);
      Unit_getInstance();
    }
  };
  ClassSerialDescriptorBuilder.prototype.element$default_m7h690_k$ = function (elementName, descriptor, annotations, isOptional, $mask0, $handler) {
    if (!(($mask0 & 4) === 0))
      annotations = emptyList();
    if (!(($mask0 & 8) === 0))
      isOptional = false;
    return this.element_t1rubu_k$(elementName, descriptor, annotations, isOptional);
  };
  ClassSerialDescriptorBuilder.$metadata$ = {
    simpleName: 'ClassSerialDescriptorBuilder',
    kind: 'class',
    interfaces: []
  };
  function _get_elementNames__2941870367($this) {
    return $this.elementNames_1;
  }
  function _get_elementDescriptors__2235584067_0($this) {
    return $this.elementDescriptors_1;
  }
  function _get_elementAnnotations__113538563($this) {
    return $this.elementAnnotations_1;
  }
  function _get_elementOptionality__1684645145($this) {
    return $this.elementOptionality_1;
  }
  function _get_name2Index__241853408($this) {
    return $this.name2Index_1;
  }
  function _get_typeParametersDescriptors__3844499665($this) {
    return $this.typeParametersDescriptors_1;
  }
  function _get__hashCode__1781908503($this) {
    var tmp$ret$0;
    $l$block: {
      var tmp0_getValue_0 = _hashCode$factory();
      tmp$ret$0 = $this._hashCode$delegate_1._get_value__3683422336_a43j40_k$();
      break $l$block;
    }
    return tmp$ret$0;
  }
  function SerialDescriptorImpl$_hashCode$delegate$lambda(this$0) {
    return function () {
      var tmp$ret$10;
      $l$block_9: {
        var tmp2_hashCodeImpl_0 = this$0.typeParametersDescriptors_1;
        var result_1 = getStringHashCode(this$0._get_serialName__1025298892_gyfpos_k$());
        result_1 = imul(31, result_1) + contentHashCode(tmp2_hashCodeImpl_0) | 0;
        var elementDescriptors_2 = _get_elementDescriptors__2235584067(this$0);
        var tmp$ret$4;
        $l$block_3: {
          var tmp$ret$3;
          $l$block_2: {
            var accumulator_1 = 1;
            var tmp0_iterator_2 = elementDescriptors_2.iterator_jk1svi_k$();
            while (tmp0_iterator_2.hasNext_bitz1p_k$()) {
              var element_3 = tmp0_iterator_2.next_20eer_k$();
              var tmp$ret$2;
              $l$block_1: {
                var tmp0__anonymous__1_4_1682274510 = accumulator_1;
                var tmp = imul(31, tmp0__anonymous__1_4_1682274510);
                var tmp$ret$1;
                $l$block_0: {
                  var tmp$ret$0;
                  $l$block: {
                    tmp$ret$0 = element_3._get_serialName__1025298892_gyfpos_k$();
                    break $l$block;
                  }
                  var tmp0_hashCode_0_5 = tmp$ret$0;
                  var tmp0_safe_receiver_2_7 = tmp0_hashCode_0_5;
                  var tmp1_elvis_lhs_1_6 = tmp0_safe_receiver_2_7 == null ? null : hashCode(tmp0_safe_receiver_2_7);
                  tmp$ret$1 = tmp1_elvis_lhs_1_6 == null ? 0 : tmp1_elvis_lhs_1_6;
                  break $l$block_0;
                }
                tmp$ret$2 = tmp + tmp$ret$1 | 0;
                break $l$block_1;
              }
              accumulator_1 = tmp$ret$2;
            }
            tmp$ret$3 = accumulator_1;
            break $l$block_2;
          }
          tmp$ret$4 = tmp$ret$3;
          break $l$block_3;
        }
        var namesHash_3 = tmp$ret$4;
        var tmp$ret$9;
        $l$block_8: {
          var tmp$ret$8;
          $l$block_7: {
            var accumulator_1_0 = 1;
            var tmp0_iterator_2_0 = elementDescriptors_2.iterator_jk1svi_k$();
            while (tmp0_iterator_2_0.hasNext_bitz1p_k$()) {
              var element_3_0 = tmp0_iterator_2_0.next_20eer_k$();
              var tmp$ret$7;
              $l$block_6: {
                var tmp1__anonymous__1_4_3035584207 = accumulator_1_0;
                var tmp_0 = imul(31, tmp1__anonymous__1_4_3035584207);
                var tmp$ret$6;
                $l$block_5: {
                  var tmp$ret$5;
                  $l$block_4: {
                    tmp$ret$5 = element_3_0._get_kind__801637687_d99vlj_k$();
                    break $l$block_4;
                  }
                  var tmp0_hashCode_0_5_0 = tmp$ret$5;
                  var tmp0_safe_receiver_2_7_0 = tmp0_hashCode_0_5_0;
                  var tmp1_elvis_lhs_1_6_0 = tmp0_safe_receiver_2_7_0 == null ? null : hashCode(tmp0_safe_receiver_2_7_0);
                  tmp$ret$6 = tmp1_elvis_lhs_1_6_0 == null ? 0 : tmp1_elvis_lhs_1_6_0;
                  break $l$block_5;
                }
                tmp$ret$7 = tmp_0 + tmp$ret$6 | 0;
                break $l$block_6;
              }
              accumulator_1_0 = tmp$ret$7;
            }
            tmp$ret$8 = accumulator_1_0;
            break $l$block_7;
          }
          tmp$ret$9 = tmp$ret$8;
          break $l$block_8;
        }
        var kindHash_5 = tmp$ret$9;
        result_1 = imul(31, result_1) + namesHash_3 | 0;
        result_1 = imul(31, result_1) + kindHash_5 | 0;
        tmp$ret$10 = result_1;
        break $l$block_9;
      }
      return tmp$ret$10;
    };
  }
  function SerialDescriptorImpl$toString$lambda(this$0) {
    return function (it) {
      return this$0.getElementName_ykpypc_k$(it) + ': ' + this$0.getElementDescriptor_sqz94k_k$(it)._get_serialName__1025298892_gyfpos_k$();
    };
  }
  function SerialDescriptorImpl(serialName, kind, elementsCount, typeParameters, builder) {
    this.serialName_1 = serialName;
    this.kind_1 = kind;
    this.elementsCount_1 = elementsCount;
    this.annotations_1 = builder.annotations_1;
    var tmp = this;
    var tmp$ret$0;
    $l$block: {
      var tmp0_toTypedArray_0 = builder.elementNames_1;
      tmp$ret$0 = copyToArray(tmp0_toTypedArray_0);
      break $l$block;
    }
    tmp.elementNames_1 = tmp$ret$0;
    this.elementDescriptors_1 = compactArray(builder.elementDescriptors_1);
    var tmp_0 = this;
    var tmp$ret$1;
    $l$block_0: {
      var tmp0_toTypedArray_0_0 = builder.elementAnnotations_1;
      tmp$ret$1 = copyToArray(tmp0_toTypedArray_0_0);
      break $l$block_0;
    }
    tmp_0.elementAnnotations_1 = tmp$ret$1;
    this.elementOptionality_1 = toBooleanArray(builder.elementOptionality_1);
    var tmp_1 = this;
    var tmp$ret$4;
    $l$block_3: {
      var tmp0_map_0 = withIndex(this.elementNames_1);
      var tmp$ret$3;
      $l$block_2: {
        var tmp0_mapTo_0_1 = ArrayList_init_$Create$(collectionSizeOrDefault(tmp0_map_0, 10));
        var tmp0_iterator_1_2 = tmp0_map_0.iterator_jk1svi_k$();
        while (tmp0_iterator_1_2.hasNext_bitz1p_k$()) {
          var item_2_3 = tmp0_iterator_1_2.next_20eer_k$();
          var tmp$ret$2;
          $l$block_1: {
            tmp$ret$2 = to(item_2_3._get_value__3683422336_a43j40_k$(), item_2_3._get_index__3322996031_g2optt_k$());
            break $l$block_1;
          }
          tmp0_mapTo_0_1.add_1j60pz_k$(tmp$ret$2);
          Unit_getInstance();
        }
        tmp$ret$3 = tmp0_mapTo_0_1;
        break $l$block_2;
      }
      tmp$ret$4 = tmp$ret$3;
      break $l$block_3;
    }
    tmp_1.name2Index_1 = toMap(tmp$ret$4);
    this.typeParametersDescriptors_1 = compactArray(typeParameters);
    var tmp_2 = this;
    tmp_2._hashCode$delegate_1 = lazy(SerialDescriptorImpl$_hashCode$delegate$lambda(this));
  }
  SerialDescriptorImpl.prototype._get_serialName__1025298892_gyfpos_k$ = function () {
    return this.serialName_1;
  };
  SerialDescriptorImpl.prototype._get_kind__801637687_d99vlj_k$ = function () {
    return this.kind_1;
  };
  SerialDescriptorImpl.prototype._get_elementsCount__2919979385_mqmrgn_k$ = function () {
    return this.elementsCount_1;
  };
  SerialDescriptorImpl.prototype._get_annotations__1905959661_virbvx_k$ = function () {
    return this.annotations_1;
  };
  SerialDescriptorImpl.prototype.getElementName_ykpypc_k$ = function (index) {
    return getChecked(this.elementNames_1, index);
  };
  SerialDescriptorImpl.prototype.getElementIndex_2hwbkl_k$ = function (name) {
    var tmp0_elvis_lhs = this.name2Index_1.get_1mhr4y_k$(name);
    return tmp0_elvis_lhs == null ? Companion_getInstance_1()._get_UNKNOWN_NAME__1523688395_p75xhn_k$() : tmp0_elvis_lhs;
  };
  SerialDescriptorImpl.prototype.getElementAnnotations_a57oar_k$ = function (index) {
    return getChecked(this.elementAnnotations_1, index);
  };
  SerialDescriptorImpl.prototype.getElementDescriptor_sqz94k_k$ = function (index) {
    return getChecked(this.elementDescriptors_1, index);
  };
  SerialDescriptorImpl.prototype.isElementOptional_c3hgb3_k$ = function (index) {
    return getChecked_0(this.elementOptionality_1, index);
  };
  SerialDescriptorImpl.prototype.equals = function (other) {
    var tmp$ret$0;
    $l$block_7: {
      if (this === other) {
        tmp$ret$0 = true;
        break $l$block_7;
      }
      if (!(other instanceof SerialDescriptorImpl)) {
        tmp$ret$0 = false;
        break $l$block_7;
      } else {
      }
      if (!(this._get_serialName__1025298892_gyfpos_k$() === other._get_serialName__1025298892_gyfpos_k$())) {
        tmp$ret$0 = false;
        break $l$block_7;
      }
      var tmp$ret$1;
      $l$block_2: {
        var tmp0__anonymous__3_2495602523 = other;
        tmp$ret$1 = contentEquals(this.typeParametersDescriptors_1, tmp0__anonymous__3_2495602523.typeParametersDescriptors_1);
        break $l$block_2;
      }
      if (!tmp$ret$1) {
        tmp$ret$0 = false;
        break $l$block_7;
      } else {
      }
      if (!(this._get_elementsCount__2919979385_mqmrgn_k$() === other._get_elementsCount__2919979385_mqmrgn_k$())) {
        tmp$ret$0 = false;
        break $l$block_7;
      }
      var inductionVariable = 0;
      var last = this._get_elementsCount__2919979385_mqmrgn_k$();
      if (inductionVariable < last)
        do {
          var index_2 = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          if (!(this.getElementDescriptor_sqz94k_k$(index_2)._get_serialName__1025298892_gyfpos_k$() === other.getElementDescriptor_sqz94k_k$(index_2)._get_serialName__1025298892_gyfpos_k$())) {
            tmp$ret$0 = false;
            break $l$block_7;
          }
          if (!equals(this.getElementDescriptor_sqz94k_k$(index_2)._get_kind__801637687_d99vlj_k$(), other.getElementDescriptor_sqz94k_k$(index_2)._get_kind__801637687_d99vlj_k$())) {
            tmp$ret$0 = false;
            break $l$block_7;
          }
        }
         while (inductionVariable < last);
      tmp$ret$0 = true;
      break $l$block_7;
    }
    return tmp$ret$0;
  };
  SerialDescriptorImpl.prototype.hashCode = function () {
    return _get__hashCode__1781908503(this);
  };
  SerialDescriptorImpl.prototype.toString = function () {
    var tmp = until(0, this.elementsCount_1);
    var tmp_0 = this.serialName_1 + '(';
    return joinToString$default(tmp, ', ', tmp_0, ')', 0, null, SerialDescriptorImpl$toString$lambda(this), 24, null);
  };
  SerialDescriptorImpl.$metadata$ = {
    simpleName: 'SerialDescriptorImpl',
    kind: 'class',
    interfaces: [SerialDescriptor]
  };
  function PrimitiveSerialDescriptor(serialName, kind) {
    {
      var tmp$ret$0;
      $l$block: {
        tmp$ret$0 = !isBlank(serialName);
        break $l$block;
      }
      var tmp0_require_0 = tmp$ret$0;
      {
      }
      if (!tmp0_require_0) {
        var tmp$ret$1;
        $l$block_0: {
          tmp$ret$1 = 'Blank serial names are prohibited';
          break $l$block_0;
        }
        var message_1 = tmp$ret$1;
        throw IllegalArgumentException_init_$Create$(toString(message_1));
      }
    }
    return PrimitiveDescriptorSafe(serialName, kind);
  }
  function buildClassSerialDescriptor(serialName, typeParameters, builderAction) {
    {
      var tmp$ret$0;
      $l$block: {
        tmp$ret$0 = !isBlank(serialName);
        break $l$block;
      }
      var tmp0_require_0 = tmp$ret$0;
      {
      }
      if (!tmp0_require_0) {
        var tmp$ret$1;
        $l$block_0: {
          tmp$ret$1 = 'Blank serial names are prohibited';
          break $l$block_0;
        }
        var message_1 = tmp$ret$1;
        throw IllegalArgumentException_init_$Create$(toString(message_1));
      }
    }
    var sdBuilder = new ClassSerialDescriptorBuilder(serialName);
    builderAction(sdBuilder);
    return new SerialDescriptorImpl(serialName, CLASS_getInstance(), sdBuilder.elementNames_1._get_size__809037418_ddoh9m_k$(), toList(typeParameters), sdBuilder);
  }
  function buildClassSerialDescriptor$default(serialName, typeParameters, builderAction, $mask0, $handler) {
    if (!(($mask0 & 4) === 0)) {
      builderAction = buildClassSerialDescriptor$lambda();
    }
    return buildClassSerialDescriptor(serialName, typeParameters, builderAction);
  }
  function buildSerialDescriptor$lambda() {
    return function (_this__1828080292) {
      return Unit_getInstance();
    };
  }
  function buildClassSerialDescriptor$lambda() {
    return function (_this__1828080292) {
      return Unit_getInstance();
    };
  }
  function _hashCode$factory() {
    return getPropertyCallableRef('_hashCode', 1, KProperty1, function (receiver) {
      return _get__hashCode__1781908503(receiver);
    }, null);
  }
  function ENUM() {
    ENUM_instance = this;
    SerialKind.call(this);
  }
  ENUM.$metadata$ = {
    simpleName: 'ENUM',
    kind: 'object',
    interfaces: []
  };
  var ENUM_instance;
  function ENUM_getInstance() {
    if (ENUM_instance == null)
      new ENUM();
    return ENUM_instance;
  }
  function CONTEXTUAL() {
    CONTEXTUAL_instance = this;
    SerialKind.call(this);
  }
  CONTEXTUAL.$metadata$ = {
    simpleName: 'CONTEXTUAL',
    kind: 'object',
    interfaces: []
  };
  var CONTEXTUAL_instance;
  function CONTEXTUAL_getInstance() {
    if (CONTEXTUAL_instance == null)
      new CONTEXTUAL();
    return CONTEXTUAL_instance;
  }
  function SerialKind() {
  }
  SerialKind.prototype.toString = function () {
    return ensureNotNull(getKClassFromExpression(this)._get_simpleName__973554894_g3mnri_k$());
  };
  SerialKind.prototype.hashCode = function () {
    return getStringHashCode(this.toString());
  };
  SerialKind.$metadata$ = {
    simpleName: 'SerialKind',
    kind: 'class',
    interfaces: []
  };
  function BOOLEAN() {
    BOOLEAN_instance = this;
    PrimitiveKind.call(this);
  }
  BOOLEAN.$metadata$ = {
    simpleName: 'BOOLEAN',
    kind: 'object',
    interfaces: []
  };
  var BOOLEAN_instance;
  function BOOLEAN_getInstance() {
    if (BOOLEAN_instance == null)
      new BOOLEAN();
    return BOOLEAN_instance;
  }
  function BYTE() {
    BYTE_instance = this;
    PrimitiveKind.call(this);
  }
  BYTE.$metadata$ = {
    simpleName: 'BYTE',
    kind: 'object',
    interfaces: []
  };
  var BYTE_instance;
  function BYTE_getInstance() {
    if (BYTE_instance == null)
      new BYTE();
    return BYTE_instance;
  }
  function CHAR() {
    CHAR_instance = this;
    PrimitiveKind.call(this);
  }
  CHAR.$metadata$ = {
    simpleName: 'CHAR',
    kind: 'object',
    interfaces: []
  };
  var CHAR_instance;
  function CHAR_getInstance() {
    if (CHAR_instance == null)
      new CHAR();
    return CHAR_instance;
  }
  function SHORT() {
    SHORT_instance = this;
    PrimitiveKind.call(this);
  }
  SHORT.$metadata$ = {
    simpleName: 'SHORT',
    kind: 'object',
    interfaces: []
  };
  var SHORT_instance;
  function SHORT_getInstance() {
    if (SHORT_instance == null)
      new SHORT();
    return SHORT_instance;
  }
  function INT() {
    INT_instance = this;
    PrimitiveKind.call(this);
  }
  INT.$metadata$ = {
    simpleName: 'INT',
    kind: 'object',
    interfaces: []
  };
  var INT_instance;
  function INT_getInstance() {
    if (INT_instance == null)
      new INT();
    return INT_instance;
  }
  function LONG() {
    LONG_instance = this;
    PrimitiveKind.call(this);
  }
  LONG.$metadata$ = {
    simpleName: 'LONG',
    kind: 'object',
    interfaces: []
  };
  var LONG_instance;
  function LONG_getInstance() {
    if (LONG_instance == null)
      new LONG();
    return LONG_instance;
  }
  function FLOAT() {
    FLOAT_instance = this;
    PrimitiveKind.call(this);
  }
  FLOAT.$metadata$ = {
    simpleName: 'FLOAT',
    kind: 'object',
    interfaces: []
  };
  var FLOAT_instance;
  function FLOAT_getInstance() {
    if (FLOAT_instance == null)
      new FLOAT();
    return FLOAT_instance;
  }
  function DOUBLE() {
    DOUBLE_instance = this;
    PrimitiveKind.call(this);
  }
  DOUBLE.$metadata$ = {
    simpleName: 'DOUBLE',
    kind: 'object',
    interfaces: []
  };
  var DOUBLE_instance;
  function DOUBLE_getInstance() {
    if (DOUBLE_instance == null)
      new DOUBLE();
    return DOUBLE_instance;
  }
  function STRING() {
    STRING_instance = this;
    PrimitiveKind.call(this);
  }
  STRING.$metadata$ = {
    simpleName: 'STRING',
    kind: 'object',
    interfaces: []
  };
  var STRING_instance;
  function STRING_getInstance() {
    if (STRING_instance == null)
      new STRING();
    return STRING_instance;
  }
  function PrimitiveKind() {
    SerialKind.call(this);
  }
  PrimitiveKind.$metadata$ = {
    simpleName: 'PrimitiveKind',
    kind: 'class',
    interfaces: []
  };
  function CLASS() {
    CLASS_instance = this;
    StructureKind.call(this);
  }
  CLASS.$metadata$ = {
    simpleName: 'CLASS',
    kind: 'object',
    interfaces: []
  };
  var CLASS_instance;
  function CLASS_getInstance() {
    if (CLASS_instance == null)
      new CLASS();
    return CLASS_instance;
  }
  function LIST() {
    LIST_instance = this;
    StructureKind.call(this);
  }
  LIST.$metadata$ = {
    simpleName: 'LIST',
    kind: 'object',
    interfaces: []
  };
  var LIST_instance;
  function LIST_getInstance() {
    if (LIST_instance == null)
      new LIST();
    return LIST_instance;
  }
  function MAP() {
    MAP_instance = this;
    StructureKind.call(this);
  }
  MAP.$metadata$ = {
    simpleName: 'MAP',
    kind: 'object',
    interfaces: []
  };
  var MAP_instance;
  function MAP_getInstance() {
    if (MAP_instance == null)
      new MAP();
    return MAP_instance;
  }
  function OBJECT() {
    OBJECT_instance = this;
    StructureKind.call(this);
  }
  OBJECT.$metadata$ = {
    simpleName: 'OBJECT',
    kind: 'object',
    interfaces: []
  };
  var OBJECT_instance;
  function OBJECT_getInstance() {
    if (OBJECT_instance == null)
      new OBJECT();
    return OBJECT_instance;
  }
  function StructureKind() {
    SerialKind.call(this);
  }
  StructureKind.$metadata$ = {
    simpleName: 'StructureKind',
    kind: 'class',
    interfaces: []
  };
  function SEALED() {
    SEALED_instance = this;
    PolymorphicKind.call(this);
  }
  SEALED.$metadata$ = {
    simpleName: 'SEALED',
    kind: 'object',
    interfaces: []
  };
  var SEALED_instance;
  function SEALED_getInstance() {
    if (SEALED_instance == null)
      new SEALED();
    return SEALED_instance;
  }
  function OPEN() {
    OPEN_instance = this;
    PolymorphicKind.call(this);
  }
  OPEN.$metadata$ = {
    simpleName: 'OPEN',
    kind: 'object',
    interfaces: []
  };
  var OPEN_instance;
  function OPEN_getInstance() {
    if (OPEN_instance == null)
      new OPEN();
    return OPEN_instance;
  }
  function PolymorphicKind() {
    SerialKind.call(this);
  }
  PolymorphicKind.$metadata$ = {
    simpleName: 'PolymorphicKind',
    kind: 'class',
    interfaces: []
  };
  function AbstractDecoder() {
  }
  AbstractDecoder.prototype.decodeValue_jl9esj_k$ = function () {
    throw SerializationException_init_$Create$_0('' + getKClassFromExpression(this) + " can't retrieve untyped values");
  };
  AbstractDecoder.prototype.decodeNotNullMark_us4ba1_k$ = function () {
    return true;
  };
  AbstractDecoder.prototype.decodeNull_jzrmuj_k$ = function () {
    return null;
  };
  AbstractDecoder.prototype.decodeBoolean_m0aca_k$ = function () {
    var tmp = this.decodeValue_jl9esj_k$();
    return typeof tmp === 'boolean' ? tmp : THROW_CCE();
  };
  AbstractDecoder.prototype.decodeByte_jzz7je_k$ = function () {
    var tmp = this.decodeValue_jl9esj_k$();
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  AbstractDecoder.prototype.decodeShort_jjqk32_k$ = function () {
    var tmp = this.decodeValue_jl9esj_k$();
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  AbstractDecoder.prototype.decodeInt_8iq8f5_k$ = function () {
    var tmp = this.decodeValue_jl9esj_k$();
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  AbstractDecoder.prototype.decodeLong_jzt186_k$ = function () {
    var tmp = this.decodeValue_jl9esj_k$();
    return tmp instanceof Long ? tmp : THROW_CCE();
  };
  AbstractDecoder.prototype.decodeFloat_jcnrwu_k$ = function () {
    var tmp = this.decodeValue_jl9esj_k$();
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  AbstractDecoder.prototype.decodeDouble_ur8l0f_k$ = function () {
    var tmp = this.decodeValue_jl9esj_k$();
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  AbstractDecoder.prototype.decodeChar_dc2jtx_k$ = function () {
    var tmp = this.decodeValue_jl9esj_k$();
    return tmp instanceof Char ? tmp.value_1 : THROW_CCE();
  };
  AbstractDecoder.prototype.decodeString_x3hxsx_k$ = function () {
    var tmp = this.decodeValue_jl9esj_k$();
    return typeof tmp === 'string' ? tmp : THROW_CCE();
  };
  AbstractDecoder.prototype.decodeEnum_w3hzf6_k$ = function (enumDescriptor) {
    var tmp = this.decodeValue_jl9esj_k$();
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  AbstractDecoder.prototype.decodeSerializableValue_613aoe_k$ = function (deserializer, previousValue) {
    return this.decodeSerializableValue_xpp80o_k$(deserializer);
  };
  AbstractDecoder.prototype.decodeSerializableValue$default_7yctd9_k$ = function (deserializer, previousValue, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      previousValue = null;
    return $handler == null ? this.decodeSerializableValue_613aoe_k$(deserializer, previousValue) : $handler(deserializer, previousValue);
  };
  AbstractDecoder.prototype.beginStructure_dv3yt3_k$ = function (descriptor) {
    return this;
  };
  AbstractDecoder.prototype.endStructure_e64gd4_k$ = function (descriptor) {
  };
  AbstractDecoder.prototype.decodeBooleanElement_3vswy_k$ = function (descriptor, index) {
    return this.decodeBoolean_m0aca_k$();
  };
  AbstractDecoder.prototype.decodeByteElement_76b0gq_k$ = function (descriptor, index) {
    return this.decodeByte_jzz7je_k$();
  };
  AbstractDecoder.prototype.decodeShortElement_zjkfm_k$ = function (descriptor, index) {
    return this.decodeShort_jjqk32_k$();
  };
  AbstractDecoder.prototype.decodeIntElement_cmpvet_k$ = function (descriptor, index) {
    return this.decodeInt_8iq8f5_k$();
  };
  AbstractDecoder.prototype.decodeLongElement_kyznym_k$ = function (descriptor, index) {
    return this.decodeLong_jzt186_k$();
  };
  AbstractDecoder.prototype.decodeFloatElement_nl5jiq_k$ = function (descriptor, index) {
    return this.decodeFloat_jcnrwu_k$();
  };
  AbstractDecoder.prototype.decodeDoubleElement_42w6gz_k$ = function (descriptor, index) {
    return this.decodeDouble_ur8l0f_k$();
  };
  AbstractDecoder.prototype.decodeCharElement_pg5vs7_k$ = function (descriptor, index) {
    return this.decodeChar_dc2jtx_k$();
  };
  AbstractDecoder.prototype.decodeStringElement_4is7ib_k$ = function (descriptor, index) {
    return this.decodeString_x3hxsx_k$();
  };
  AbstractDecoder.prototype.decodeSerializableElement_5lsbxj_k$ = function (descriptor, index, deserializer, previousValue) {
    return this.decodeSerializableValue_613aoe_k$(deserializer, previousValue);
  };
  AbstractDecoder.prototype.decodeNullableSerializableElement_ri3t5d_k$ = function (descriptor, index, deserializer, previousValue) {
    var isNullabilitySupported = deserializer._get_descriptor__684124924_bbb664_k$()._get_isNullable__336674624_5kg3sw_k$();
    return (isNullabilitySupported ? true : this.decodeNotNullMark_us4ba1_k$()) ? this.decodeSerializableValue_613aoe_k$(deserializer, previousValue) : this.decodeNull_jzrmuj_k$();
  };
  AbstractDecoder.$metadata$ = {
    simpleName: 'AbstractDecoder',
    kind: 'class',
    interfaces: [Decoder, CompositeDecoder]
  };
  function AbstractEncoder() {
  }
  AbstractEncoder.prototype.beginStructure_dv3yt3_k$ = function (descriptor) {
    return this;
  };
  AbstractEncoder.prototype.endStructure_e64gd4_k$ = function (descriptor) {
  };
  AbstractEncoder.prototype.encodeElement_gaiom2_k$ = function (descriptor, index) {
    return true;
  };
  AbstractEncoder.prototype.encodeValue_g5opg2_k$ = function (value) {
    throw SerializationException_init_$Create$_0('Non-serializable ' + getKClassFromExpression(value) + ' is not supported by ' + getKClassFromExpression(this) + ' encoder');
  };
  AbstractEncoder.prototype.encodeNull_ek2hec_k$ = function () {
    throw SerializationException_init_$Create$_0("'null' is not supported by default");
  };
  AbstractEncoder.prototype.encodeBoolean_6cztl5_k$ = function (value) {
    return this.encodeValue_g5opg2_k$(value);
  };
  AbstractEncoder.prototype.encodeByte_gpyndp_k$ = function (value) {
    return this.encodeValue_g5opg2_k$(value);
  };
  AbstractEncoder.prototype.encodeShort_rh3vxz_k$ = function (value) {
    return this.encodeValue_g5opg2_k$(value);
  };
  AbstractEncoder.prototype.encodeInt_5vxmon_k$ = function (value) {
    return this.encodeValue_g5opg2_k$(value);
  };
  AbstractEncoder.prototype.encodeLong_rk3ab9_k$ = function (value) {
    return this.encodeValue_g5opg2_k$(value);
  };
  AbstractEncoder.prototype.encodeFloat_f5fde1_k$ = function (value) {
    return this.encodeValue_g5opg2_k$(value);
  };
  AbstractEncoder.prototype.encodeDouble_79ztsb_k$ = function (value) {
    return this.encodeValue_g5opg2_k$(value);
  };
  AbstractEncoder.prototype.encodeChar_kkx54x_k$ = function (value) {
    return this.encodeValue_g5opg2_k$(new Char(value));
  };
  AbstractEncoder.prototype.encodeString_90sumj_k$ = function (value) {
    return this.encodeValue_g5opg2_k$(value);
  };
  AbstractEncoder.prototype.encodeEnum_dzauii_k$ = function (enumDescriptor, index) {
    return this.encodeValue_g5opg2_k$(index);
  };
  AbstractEncoder.prototype.encodeBooleanElement_2l5aov_k$ = function (descriptor, index, value) {
    if (this.encodeElement_gaiom2_k$(descriptor, index))
      this.encodeBoolean_6cztl5_k$(value);
  };
  AbstractEncoder.prototype.encodeByteElement_r2fm3n_k$ = function (descriptor, index, value) {
    if (this.encodeElement_gaiom2_k$(descriptor, index))
      this.encodeByte_gpyndp_k$(value);
  };
  AbstractEncoder.prototype.encodeShortElement_2nnlvd_k$ = function (descriptor, index, value) {
    if (this.encodeElement_gaiom2_k$(descriptor, index))
      this.encodeShort_rh3vxz_k$(value);
  };
  AbstractEncoder.prototype.encodeIntElement_utywpf_k$ = function (descriptor, index, value) {
    if (this.encodeElement_gaiom2_k$(descriptor, index))
      this.encodeInt_5vxmon_k$(value);
  };
  AbstractEncoder.prototype.encodeLongElement_xtv8il_k$ = function (descriptor, index, value) {
    if (this.encodeElement_gaiom2_k$(descriptor, index))
      this.encodeLong_rk3ab9_k$(value);
  };
  AbstractEncoder.prototype.encodeFloatElement_o97mfb_k$ = function (descriptor, index, value) {
    if (this.encodeElement_gaiom2_k$(descriptor, index))
      this.encodeFloat_f5fde1_k$(value);
  };
  AbstractEncoder.prototype.encodeDoubleElement_m8xcw3_k$ = function (descriptor, index, value) {
    if (this.encodeElement_gaiom2_k$(descriptor, index))
      this.encodeDouble_79ztsb_k$(value);
  };
  AbstractEncoder.prototype.encodeCharElement_4fawdf_k$ = function (descriptor, index, value) {
    if (this.encodeElement_gaiom2_k$(descriptor, index))
      this.encodeChar_kkx54x_k$(value);
  };
  AbstractEncoder.prototype.encodeStringElement_pgmbgj_k$ = function (descriptor, index, value) {
    if (this.encodeElement_gaiom2_k$(descriptor, index))
      this.encodeString_90sumj_k$(value);
  };
  AbstractEncoder.prototype.encodeSerializableElement_pr92am_k$ = function (descriptor, index, serializer, value) {
    if (this.encodeElement_gaiom2_k$(descriptor, index))
      this.encodeSerializableValue_bps9ot_k$(serializer, value);
  };
  AbstractEncoder.prototype.encodeNullableSerializableElement_m9ow0w_k$ = function (descriptor, index, serializer, value) {
    if (this.encodeElement_gaiom2_k$(descriptor, index))
      this.encodeNullableSerializableValue_35ub11_k$(serializer, value);
  };
  AbstractEncoder.$metadata$ = {
    simpleName: 'AbstractEncoder',
    kind: 'class',
    interfaces: [Encoder, CompositeEncoder]
  };
  function Decoder() {
  }
  Decoder.$metadata$ = {
    simpleName: 'Decoder',
    kind: 'interface',
    interfaces: []
  };
  function Companion() {
    Companion_instance = this;
    this.DECODE_DONE_1 = -1;
    this.UNKNOWN_NAME_1 = -3;
  }
  Companion.prototype._get_DECODE_DONE__3215019198_huz1aa_k$ = function () {
    return this.DECODE_DONE_1;
  };
  Companion.prototype._get_UNKNOWN_NAME__1523688395_p75xhn_k$ = function () {
    return this.UNKNOWN_NAME_1;
  };
  Companion.$metadata$ = {
    simpleName: 'Companion',
    kind: 'object',
    interfaces: []
  };
  var Companion_instance;
  function Companion_getInstance_1() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function CompositeDecoder() {
    Companion_getInstance_1();
  }
  CompositeDecoder.$metadata$ = {
    simpleName: 'CompositeDecoder',
    kind: 'interface',
    interfaces: []
  };
  function decodeStructure(_this__1828080292, descriptor, block) {
    var composite = _this__1828080292.beginStructure_dv3yt3_k$(descriptor);
    try {
      return block(composite);
    }finally {
      composite.endStructure_e64gd4_k$(descriptor);
    }
  }
  function Encoder() {
  }
  Encoder.$metadata$ = {
    simpleName: 'Encoder',
    kind: 'interface',
    interfaces: []
  };
  function CompositeEncoder() {
  }
  CompositeEncoder.$metadata$ = {
    simpleName: 'CompositeEncoder',
    kind: 'interface',
    interfaces: []
  };
  function encodeStructure(_this__1828080292, descriptor, block) {
    var composite = _this__1828080292.beginStructure_dv3yt3_k$(descriptor);
    try {
      block(composite);
    }finally {
      composite.endStructure_e64gd4_k$(descriptor);
    }
  }
  function decodeSequentially_0($this, compositeDecoder) {
    var klassName = compositeDecoder.decodeStringElement_4is7ib_k$($this._get_descriptor__684124924_bbb664_k$(), 0);
    var serializer = findPolymorphicSerializer_0($this, compositeDecoder, klassName);
    var tmp = $this._get_descriptor__684124924_bbb664_k$();
    return compositeDecoder.decodeSerializableElement$default_xyql7s_k$(tmp, 1, serializer, null, 8, null);
  }
  function AbstractPolymorphicSerializer() {
  }
  AbstractPolymorphicSerializer.prototype.serialize_32qylj_k$ = function (encoder, value) {
    var actualSerializer = findPolymorphicSerializer(this, encoder, value);
    {
      var tmp0_encodeStructure_0 = this._get_descriptor__684124924_bbb664_k$();
      var composite_1 = encoder.beginStructure_dv3yt3_k$(tmp0_encodeStructure_0);
      try {
        {
          composite_1.encodeStringElement_pgmbgj_k$(this._get_descriptor__684124924_bbb664_k$(), 0, actualSerializer._get_descriptor__684124924_bbb664_k$()._get_serialName__1025298892_gyfpos_k$());
          var tmp = this._get_descriptor__684124924_bbb664_k$();
          var tmp$ret$0;
          $l$block: {
            tmp$ret$0 = isInterface(actualSerializer, SerializationStrategy) ? actualSerializer : THROW_CCE();
            break $l$block;
          }
          composite_1.encodeSerializableElement_pr92am_k$(tmp, 1, tmp$ret$0, value);
        }
      }finally {
        composite_1.endStructure_e64gd4_k$(tmp0_encodeStructure_0);
      }
    }
  };
  AbstractPolymorphicSerializer.prototype.deserialize_2t41fm_k$ = function (decoder) {
    var tmp$ret$5;
    $l$block_4: {
      var tmp0_decodeStructure_0 = this._get_descriptor__684124924_bbb664_k$();
      var composite_1 = decoder.beginStructure_dv3yt3_k$(tmp0_decodeStructure_0);
      try {
        var tmp$ret$4;
        $l$block_3: {
          var klassName_3 = null;
          var value_4 = null;
          if (composite_1.decodeSequentially_xlblqy_k$()) {
            return decodeSequentially_0(this, composite_1);
          }
          mainLoop: while (true) {
            var index_5 = composite_1.decodeElementIndex_nk5a2l_k$(this._get_descriptor__684124924_bbb664_k$());
            if (index_5 === Companion_getInstance_1()._get_DECODE_DONE__3215019198_huz1aa_k$()) {
              break mainLoop;
            } else if (index_5 === 0) {
              klassName_3 = composite_1.decodeStringElement_4is7ib_k$(this._get_descriptor__684124924_bbb664_k$(), index_5);
            } else if (index_5 === 1) {
              var tmp$ret$1;
              $l$block_0: {
                var tmp0_requireNotNull_0_6 = klassName_3;
                {
                }
                if (tmp0_requireNotNull_0_6 == null) {
                  var tmp$ret$0;
                  $l$block: {
                    tmp$ret$0 = 'Cannot read polymorphic value before its type token';
                    break $l$block;
                  }
                  var message_1_7 = tmp$ret$0;
                  throw IllegalArgumentException_init_$Create$(toString(message_1_7));
                } else {
                  tmp$ret$1 = tmp0_requireNotNull_0_6;
                  break $l$block_0;
                }
              }
              klassName_3 = tmp$ret$1;
              var serializer_8 = findPolymorphicSerializer_0(this, composite_1, klassName_3);
              var tmp = this._get_descriptor__684124924_bbb664_k$();
              value_4 = composite_1.decodeSerializableElement$default_xyql7s_k$(tmp, index_5, serializer_8, null, 8, null);
            } else {
              var tmp0_elvis_lhs_9 = klassName_3;
              throw SerializationException_init_$Create$_0('Invalid index in polymorphic deserialization of ' + (tmp0_elvis_lhs_9 == null ? 'unknown class' : tmp0_elvis_lhs_9) + ('\n Expected 0, 1 or DECODE_DONE(-1), but found ' + index_5));
            }
          }
          var tmp$ret$3;
          $l$block_2: {
            var tmp1_requireNotNull_0_10 = value_4;
            {
            }
            if (tmp1_requireNotNull_0_10 == null) {
              var tmp$ret$2;
              $l$block_1: {
                tmp$ret$2 = 'Polymorphic value has not been read for class ' + klassName_3;
                break $l$block_1;
              }
              var message_1_11 = tmp$ret$2;
              throw IllegalArgumentException_init_$Create$(toString(message_1_11));
            } else {
              tmp$ret$3 = tmp1_requireNotNull_0_10;
              break $l$block_2;
            }
          }
          var tmp_0 = tmp$ret$3;
          tmp$ret$4 = isObject(tmp_0) ? tmp_0 : THROW_CCE();
          break $l$block_3;
        }
        tmp$ret$5 = tmp$ret$4;
        break $l$block_4;
      }finally {
        composite_1.endStructure_e64gd4_k$(tmp0_decodeStructure_0);
      }
    }
    return tmp$ret$5;
  };
  AbstractPolymorphicSerializer.prototype.findPolymorphicSerializerOrNull_e7t5h9_k$ = function (decoder, klassName) {
    return decoder._get_serializersModule__364239364_60uww4_k$().getPolymorphic_gixe6f_k$(this._get_baseClass__1703496202_s67u2y_k$(), klassName);
  };
  AbstractPolymorphicSerializer.prototype.findPolymorphicSerializerOrNull_mimmn_k$ = function (encoder, value) {
    return encoder._get_serializersModule__364239364_60uww4_k$().getPolymorphic_1pjrjm_k$(this._get_baseClass__1703496202_s67u2y_k$(), value);
  };
  AbstractPolymorphicSerializer.$metadata$ = {
    simpleName: 'AbstractPolymorphicSerializer',
    kind: 'class',
    interfaces: [KSerializer]
  };
  function throwSubtypeNotRegistered(subClass, baseClass) {
    var tmp0_elvis_lhs = subClass._get_simpleName__973554894_g3mnri_k$();
    throwSubtypeNotRegistered_0(tmp0_elvis_lhs == null ? '' + subClass : tmp0_elvis_lhs, baseClass);
  }
  function throwSubtypeNotRegistered_0(subClassName, baseClass) {
    var scope = "in the scope of '" + baseClass._get_simpleName__973554894_g3mnri_k$() + "'";
    throw SerializationException_init_$Create$_0(subClassName == null ? 'Class discriminator was missing and no default polymorphic serializers were registered ' + scope : "Class '" + subClassName + "' is not registered for polymorphic serialization " + scope + '.\n' + "Mark the base class as 'sealed' or register the serializer explicitly.");
  }
  function PrimitiveArrayDescriptor(primitive) {
    ListLikeDescriptor.call(this, primitive);
    this.serialName_1 = primitive._get_serialName__1025298892_gyfpos_k$() + 'Array';
  }
  PrimitiveArrayDescriptor.prototype._get_serialName__1025298892_gyfpos_k$ = function () {
    return this.serialName_1;
  };
  PrimitiveArrayDescriptor.$metadata$ = {
    simpleName: 'PrimitiveArrayDescriptor',
    kind: 'class',
    interfaces: []
  };
  function ListLikeDescriptor(elementDescriptor) {
    this.elementDescriptor_1 = elementDescriptor;
    this.elementsCount_1 = 1;
  }
  ListLikeDescriptor.prototype._get_elementDescriptor__2150325542_zgv462_k$ = function () {
    return this.elementDescriptor_1;
  };
  ListLikeDescriptor.prototype._get_kind__801637687_d99vlj_k$ = function () {
    return LIST_getInstance();
  };
  ListLikeDescriptor.prototype._get_elementsCount__2919979385_mqmrgn_k$ = function () {
    return this.elementsCount_1;
  };
  ListLikeDescriptor.prototype.getElementName_ykpypc_k$ = function (index) {
    return index.toString();
  };
  ListLikeDescriptor.prototype.getElementIndex_2hwbkl_k$ = function (name) {
    var tmp0_elvis_lhs = toIntOrNull(name);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalArgumentException_init_$Create$(name + ' is not a valid list index');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  ListLikeDescriptor.prototype.isElementOptional_c3hgb3_k$ = function (index) {
    {
      var tmp0_require_0 = index >= 0;
      {
      }
      if (!tmp0_require_0) {
        var tmp$ret$0;
        $l$block: {
          tmp$ret$0 = 'Illegal index ' + index + ', ' + this._get_serialName__1025298892_gyfpos_k$() + ' expects only non-negative indices';
          break $l$block;
        }
        var message_1 = tmp$ret$0;
        throw IllegalArgumentException_init_$Create$(toString(message_1));
      }
    }
    return false;
  };
  ListLikeDescriptor.prototype.getElementAnnotations_a57oar_k$ = function (index) {
    {
      var tmp0_require_0 = index >= 0;
      {
      }
      if (!tmp0_require_0) {
        var tmp$ret$0;
        $l$block: {
          tmp$ret$0 = 'Illegal index ' + index + ', ' + this._get_serialName__1025298892_gyfpos_k$() + ' expects only non-negative indices';
          break $l$block;
        }
        var message_1 = tmp$ret$0;
        throw IllegalArgumentException_init_$Create$(toString(message_1));
      }
    }
    return emptyList();
  };
  ListLikeDescriptor.prototype.getElementDescriptor_sqz94k_k$ = function (index) {
    {
      var tmp0_require_0 = index >= 0;
      {
      }
      if (!tmp0_require_0) {
        var tmp$ret$0;
        $l$block: {
          tmp$ret$0 = 'Illegal index ' + index + ', ' + this._get_serialName__1025298892_gyfpos_k$() + ' expects only non-negative indices';
          break $l$block;
        }
        var message_1 = tmp$ret$0;
        throw IllegalArgumentException_init_$Create$(toString(message_1));
      }
    }
    return this.elementDescriptor_1;
  };
  ListLikeDescriptor.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ListLikeDescriptor))
      return false;
    else {
    }
    if (equals(this.elementDescriptor_1, other.elementDescriptor_1) ? this._get_serialName__1025298892_gyfpos_k$() === other._get_serialName__1025298892_gyfpos_k$() : false)
      return true;
    return false;
  };
  ListLikeDescriptor.prototype.hashCode = function () {
    return imul(hashCode(this.elementDescriptor_1), 31) + getStringHashCode(this._get_serialName__1025298892_gyfpos_k$()) | 0;
  };
  ListLikeDescriptor.prototype.toString = function () {
    return this._get_serialName__1025298892_gyfpos_k$() + '(' + this.elementDescriptor_1 + ')';
  };
  ListLikeDescriptor.$metadata$ = {
    simpleName: 'ListLikeDescriptor',
    kind: 'class',
    interfaces: [SerialDescriptor]
  };
  function ArrayClassDesc(elementDesc) {
    ListLikeDescriptor.call(this, elementDesc);
  }
  ArrayClassDesc.prototype._get_serialName__1025298892_gyfpos_k$ = function () {
    return 'kotlin.Array';
  };
  ArrayClassDesc.$metadata$ = {
    simpleName: 'ArrayClassDesc',
    kind: 'class',
    interfaces: []
  };
  function ArrayListClassDesc(elementDesc) {
    ListLikeDescriptor.call(this, elementDesc);
  }
  ArrayListClassDesc.prototype._get_serialName__1025298892_gyfpos_k$ = function () {
    return 'kotlin.collections.ArrayList';
  };
  ArrayListClassDesc.$metadata$ = {
    simpleName: 'ArrayListClassDesc',
    kind: 'class',
    interfaces: []
  };
  function LinkedHashMapClassDesc(keyDesc, valueDesc) {
    MapLikeDescriptor.call(this, 'kotlin.collections.LinkedHashMap', keyDesc, valueDesc);
  }
  LinkedHashMapClassDesc.$metadata$ = {
    simpleName: 'LinkedHashMapClassDesc',
    kind: 'class',
    interfaces: []
  };
  function _get_ARRAY_NAME__2245115354() {
    return ARRAY_NAME;
  }
  var ARRAY_NAME;
  function _get_ARRAY_LIST_NAME__3955999179() {
    return ARRAY_LIST_NAME;
  }
  var ARRAY_LIST_NAME;
  function MapLikeDescriptor(serialName, keyDescriptor, valueDescriptor) {
    this.serialName_1 = serialName;
    this.keyDescriptor_1 = keyDescriptor;
    this.valueDescriptor_1 = valueDescriptor;
    this.elementsCount_1 = 2;
  }
  MapLikeDescriptor.prototype._get_serialName__1025298892_gyfpos_k$ = function () {
    return this.serialName_1;
  };
  MapLikeDescriptor.prototype._get_keyDescriptor__1078653795_hu7alf_k$ = function () {
    return this.keyDescriptor_1;
  };
  MapLikeDescriptor.prototype._get_valueDescriptor__3769493585_8ouq3z_k$ = function () {
    return this.valueDescriptor_1;
  };
  MapLikeDescriptor.prototype._get_kind__801637687_d99vlj_k$ = function () {
    return MAP_getInstance();
  };
  MapLikeDescriptor.prototype._get_elementsCount__2919979385_mqmrgn_k$ = function () {
    return this.elementsCount_1;
  };
  MapLikeDescriptor.prototype.getElementName_ykpypc_k$ = function (index) {
    return index.toString();
  };
  MapLikeDescriptor.prototype.getElementIndex_2hwbkl_k$ = function (name) {
    var tmp0_elvis_lhs = toIntOrNull(name);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalArgumentException_init_$Create$(name + ' is not a valid map index');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  MapLikeDescriptor.prototype.isElementOptional_c3hgb3_k$ = function (index) {
    {
      var tmp0_require_0 = index >= 0;
      {
      }
      if (!tmp0_require_0) {
        var tmp$ret$0;
        $l$block: {
          tmp$ret$0 = 'Illegal index ' + index + ', ' + this._get_serialName__1025298892_gyfpos_k$() + ' expects only non-negative indices';
          break $l$block;
        }
        var message_1 = tmp$ret$0;
        throw IllegalArgumentException_init_$Create$(toString(message_1));
      }
    }
    return false;
  };
  MapLikeDescriptor.prototype.getElementAnnotations_a57oar_k$ = function (index) {
    {
      var tmp0_require_0 = index >= 0;
      {
      }
      if (!tmp0_require_0) {
        var tmp$ret$0;
        $l$block: {
          tmp$ret$0 = 'Illegal index ' + index + ', ' + this._get_serialName__1025298892_gyfpos_k$() + ' expects only non-negative indices';
          break $l$block;
        }
        var message_1 = tmp$ret$0;
        throw IllegalArgumentException_init_$Create$(toString(message_1));
      }
    }
    return emptyList();
  };
  MapLikeDescriptor.prototype.getElementDescriptor_sqz94k_k$ = function (index) {
    {
      var tmp0_require_0 = index >= 0;
      {
      }
      if (!tmp0_require_0) {
        var tmp$ret$0;
        $l$block: {
          tmp$ret$0 = 'Illegal index ' + index + ', ' + this._get_serialName__1025298892_gyfpos_k$() + ' expects only non-negative indices';
          break $l$block;
        }
        var message_1 = tmp$ret$0;
        throw IllegalArgumentException_init_$Create$(toString(message_1));
      }
    }
    var tmp0_subject = index % 2;
    var tmp;
    switch (tmp0_subject) {
      case 0:
        tmp = this.keyDescriptor_1;
        break;
      case 1:
        tmp = this.valueDescriptor_1;
        break;
      default:
        throw IllegalStateException_init_$Create$('Unreached');
    }
    return tmp;
  };
  MapLikeDescriptor.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof MapLikeDescriptor))
      return false;
    else {
    }
    if (!(this._get_serialName__1025298892_gyfpos_k$() === other._get_serialName__1025298892_gyfpos_k$()))
      return false;
    if (!equals(this.keyDescriptor_1, other.keyDescriptor_1))
      return false;
    if (!equals(this.valueDescriptor_1, other.valueDescriptor_1))
      return false;
    return true;
  };
  MapLikeDescriptor.prototype.hashCode = function () {
    var result = getStringHashCode(this._get_serialName__1025298892_gyfpos_k$());
    result = imul(31, result) + hashCode(this.keyDescriptor_1) | 0;
    result = imul(31, result) + hashCode(this.valueDescriptor_1) | 0;
    return result;
  };
  MapLikeDescriptor.prototype.toString = function () {
    return this._get_serialName__1025298892_gyfpos_k$() + '(' + this.keyDescriptor_1 + ', ' + this.valueDescriptor_1 + ')';
  };
  MapLikeDescriptor.$metadata$ = {
    simpleName: 'MapLikeDescriptor',
    kind: 'class',
    interfaces: [SerialDescriptor]
  };
  function _get_LINKED_HASH_MAP_NAME__2653756242() {
    return LINKED_HASH_MAP_NAME;
  }
  var LINKED_HASH_MAP_NAME;
  function HashSetClassDesc(elementDesc) {
    ListLikeDescriptor.call(this, elementDesc);
  }
  HashSetClassDesc.prototype._get_serialName__1025298892_gyfpos_k$ = function () {
    return 'kotlin.collections.HashSet';
  };
  HashSetClassDesc.$metadata$ = {
    simpleName: 'HashSetClassDesc',
    kind: 'class',
    interfaces: []
  };
  function LinkedHashSetClassDesc(elementDesc) {
    ListLikeDescriptor.call(this, elementDesc);
  }
  LinkedHashSetClassDesc.prototype._get_serialName__1025298892_gyfpos_k$ = function () {
    return 'kotlin.collections.LinkedHashSet';
  };
  LinkedHashSetClassDesc.$metadata$ = {
    simpleName: 'LinkedHashSetClassDesc',
    kind: 'class',
    interfaces: []
  };
  function HashMapClassDesc(keyDesc, valueDesc) {
    MapLikeDescriptor.call(this, 'kotlin.collections.HashMap', keyDesc, valueDesc);
  }
  HashMapClassDesc.$metadata$ = {
    simpleName: 'HashMapClassDesc',
    kind: 'class',
    interfaces: []
  };
  function _get_HASH_SET_NAME__1326691192() {
    return HASH_SET_NAME;
  }
  var HASH_SET_NAME;
  function _get_LINKED_HASH_SET_NAME__2330285528() {
    return LINKED_HASH_SET_NAME;
  }
  var LINKED_HASH_SET_NAME;
  function _get_HASH_MAP_NAME__1650161906() {
    return HASH_MAP_NAME;
  }
  var HASH_MAP_NAME;
  function PrimitiveArraySerializer(primitiveSerializer) {
    ListLikeSerializer.call(this, primitiveSerializer);
    this.descriptor_1 = new PrimitiveArrayDescriptor(primitiveSerializer._get_descriptor__684124924_bbb664_k$());
  }
  PrimitiveArraySerializer.prototype._get_descriptor__684124924_bbb664_k$ = function () {
    return this.descriptor_1;
  };
  PrimitiveArraySerializer.prototype.builderSize_mmbugq_k$ = function (_this__1828080292) {
    return _this__1828080292._get_position__3188952002_iahqv2_k$();
  };
  PrimitiveArraySerializer.prototype.toResult_nzwaf2_k$ = function (_this__1828080292) {
    return _this__1828080292.build_1k0s4u_k$();
  };
  PrimitiveArraySerializer.prototype.checkCapacity_ge5iis_k$ = function (_this__1828080292, size) {
    return _this__1828080292.ensureCapacity_ignus8_k$(size);
  };
  PrimitiveArraySerializer.prototype.collectionIterator_apv53g_k$ = function (_this__1828080292) {
    {
      throw IllegalStateException_init_$Create$('This method lead to boxing and must not be used, use writeContents instead');
    }
  };
  PrimitiveArraySerializer.prototype.collectionIterator_v9vfqb_k$ = function (_this__1828080292) {
    return this.collectionIterator_apv53g_k$((_this__1828080292 == null ? true : isObject(_this__1828080292)) ? _this__1828080292 : THROW_CCE());
  };
  PrimitiveArraySerializer.prototype.insert_64qdau_k$ = function (_this__1828080292, index, element) {
    {
      throw IllegalStateException_init_$Create$('This method lead to boxing and must not be used, use Builder.append instead');
    }
  };
  PrimitiveArraySerializer.prototype.builder_3thy1n_k$ = function () {
    return this.toBuilder_9n7g5t_k$(this.empty_1lj7f1_k$());
  };
  PrimitiveArraySerializer.prototype.serialize_q3dfzy_k$ = function (encoder, value) {
    var size = this.collectionSize_gnp0og_k$(value);
    var composite = encoder.beginCollection_dgpn47_k$(this.descriptor_1, size);
    this.writeContent_jq3j40_k$(composite, value, size);
    composite.endStructure_e64gd4_k$(this.descriptor_1);
  };
  PrimitiveArraySerializer.prototype.serialize_32qylj_k$ = function (encoder, value) {
    return this.serialize_q3dfzy_k$(encoder, (value == null ? true : isObject(value)) ? value : THROW_CCE());
  };
  PrimitiveArraySerializer.prototype.serialize_wciw4p_k$ = function (encoder, value) {
    return this.serialize_q3dfzy_k$(encoder, (value == null ? true : isObject(value)) ? value : THROW_CCE());
  };
  PrimitiveArraySerializer.prototype.deserialize_2t41fm_k$ = function (decoder) {
    return this.merge_6fpf53_k$(decoder, null);
  };
  PrimitiveArraySerializer.$metadata$ = {
    simpleName: 'PrimitiveArraySerializer',
    kind: 'class',
    interfaces: []
  };
  function PrimitiveArrayBuilder() {
  }
  PrimitiveArrayBuilder.prototype.ensureCapacity$default_ya9857_k$ = function (requiredCapacity, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      requiredCapacity = this._get_position__3188952002_iahqv2_k$() + 1 | 0;
    return $handler == null ? this.ensureCapacity_ignus8_k$(requiredCapacity) : $handler(requiredCapacity);
  };
  PrimitiveArrayBuilder.$metadata$ = {
    simpleName: 'PrimitiveArrayBuilder',
    kind: 'class',
    interfaces: []
  };
  function _get_elementSerializer__2517172067($this) {
    return $this.elementSerializer_1;
  }
  function ListLikeSerializer(elementSerializer) {
    AbstractCollectionSerializer.call(this);
    this.elementSerializer_1 = elementSerializer;
  }
  ListLikeSerializer.prototype.serialize_wciw4p_k$ = function (encoder, value) {
    var size = this.collectionSize_gnp0og_k$(value);
    var composite = encoder.beginCollection_dgpn47_k$(this._get_descriptor__684124924_bbb664_k$(), size);
    var iterator = this.collectionIterator_v9vfqb_k$(value);
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        composite.encodeSerializableElement_pr92am_k$(this._get_descriptor__684124924_bbb664_k$(), index, this.elementSerializer_1, iterator.next_20eer_k$());
      }
       while (inductionVariable < size);
    composite.endStructure_e64gd4_k$(this._get_descriptor__684124924_bbb664_k$());
  };
  ListLikeSerializer.prototype.serialize_32qylj_k$ = function (encoder, value) {
    return this.serialize_wciw4p_k$(encoder, (value == null ? true : isObject(value)) ? value : THROW_CCE());
  };
  ListLikeSerializer.prototype.readAll_s7t1kq_k$ = function (decoder, builder, startIndex, size) {
    {
      var tmp0_require_0 = size >= 0;
      {
      }
      if (!tmp0_require_0) {
        var tmp$ret$0;
        $l$block: {
          tmp$ret$0 = 'Size must be known in advance when using READ_ALL';
          break $l$block;
        }
        var message_1 = tmp$ret$0;
        throw IllegalArgumentException_init_$Create$(toString(message_1));
      }
    }
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        this.readElement_yuufx2_k$(decoder, startIndex + index | 0, builder, false);
      }
       while (inductionVariable < size);
  };
  ListLikeSerializer.prototype.readElement_yuufx2_k$ = function (decoder, index, builder, checkIndex) {
    var tmp = this._get_descriptor__684124924_bbb664_k$();
    this.insert_64qdau_k$(builder, index, decoder.decodeSerializableElement$default_xyql7s_k$(tmp, index, this.elementSerializer_1, null, 8, null));
  };
  ListLikeSerializer.$metadata$ = {
    simpleName: 'ListLikeSerializer',
    kind: 'class',
    interfaces: []
  };
  function readSize($this, decoder, builder) {
    var size = decoder.decodeCollectionSize_cd6i6s_k$($this._get_descriptor__684124924_bbb664_k$());
    $this.checkCapacity_ge5iis_k$(builder, size);
    return size;
  }
  function AbstractCollectionSerializer() {
  }
  AbstractCollectionSerializer.prototype.merge_6fpf53_k$ = function (decoder, previous) {
    var tmp0_safe_receiver = previous;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : this.toBuilder_9n7g5t_k$(tmp0_safe_receiver);
    var builder = tmp1_elvis_lhs == null ? this.builder_3thy1n_k$() : tmp1_elvis_lhs;
    var startIndex = this.builderSize_mmbugq_k$(builder);
    var compositeDecoder = decoder.beginStructure_dv3yt3_k$(this._get_descriptor__684124924_bbb664_k$());
    if (compositeDecoder.decodeSequentially_xlblqy_k$()) {
      this.readAll_s7t1kq_k$(compositeDecoder, builder, startIndex, readSize(this, compositeDecoder, builder));
    } else {
      $l$loop: while (true) {
        var index = compositeDecoder.decodeElementIndex_nk5a2l_k$(this._get_descriptor__684124924_bbb664_k$());
        if (index === Companion_getInstance_1()._get_DECODE_DONE__3215019198_huz1aa_k$())
          break $l$loop;
        var tmp = startIndex + index | 0;
        this.readElement$default_s49edv_k$(compositeDecoder, tmp, builder, false, 8, null);
      }
    }
    compositeDecoder.endStructure_e64gd4_k$(this._get_descriptor__684124924_bbb664_k$());
    return this.toResult_nzwaf2_k$(builder);
  };
  AbstractCollectionSerializer.prototype.deserialize_2t41fm_k$ = function (decoder) {
    return this.merge_6fpf53_k$(decoder, null);
  };
  AbstractCollectionSerializer.prototype.readElement$default_s49edv_k$ = function (decoder, index, builder, checkIndex, $mask0, $handler) {
    if (!(($mask0 & 8) === 0))
      checkIndex = true;
    return $handler == null ? this.readElement_yuufx2_k$(decoder, index, builder, checkIndex) : $handler(decoder, index, builder, checkIndex);
  };
  AbstractCollectionSerializer.$metadata$ = {
    simpleName: 'AbstractCollectionSerializer',
    kind: 'class',
    interfaces: [KSerializer]
  };
  function _get_kClass__484881630($this) {
    return $this.kClass_1;
  }
  function ReferenceArraySerializer(kClass, eSerializer) {
    ListLikeSerializer.call(this, eSerializer);
    this.kClass_1 = kClass;
    this.descriptor_1 = new ArrayClassDesc(eSerializer._get_descriptor__684124924_bbb664_k$());
  }
  ReferenceArraySerializer.prototype._get_descriptor__684124924_bbb664_k$ = function () {
    return this.descriptor_1;
  };
  ReferenceArraySerializer.prototype.collectionSize_sgvbkw_k$ = function (_this__1828080292) {
    return _this__1828080292.length;
  };
  ReferenceArraySerializer.prototype.collectionSize_gnp0og_k$ = function (_this__1828080292) {
    return this.collectionSize_sgvbkw_k$((!(_this__1828080292 == null) ? isArray(_this__1828080292) : false) ? _this__1828080292 : THROW_CCE());
  };
  ReferenceArraySerializer.prototype.collectionIterator_hdgi7n_k$ = function (_this__1828080292) {
    return arrayIterator(_this__1828080292);
  };
  ReferenceArraySerializer.prototype.collectionIterator_v9vfqb_k$ = function (_this__1828080292) {
    return this.collectionIterator_hdgi7n_k$((!(_this__1828080292 == null) ? isArray(_this__1828080292) : false) ? _this__1828080292 : THROW_CCE());
  };
  ReferenceArraySerializer.prototype.builder_3thy1n_k$ = function () {
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = ArrayList_init_$Create$_0();
      break $l$block;
    }
    return tmp$ret$0;
  };
  ReferenceArraySerializer.prototype.builderSize_q7iht4_k$ = function (_this__1828080292) {
    return _this__1828080292._get_size__809037418_ddoh9m_k$();
  };
  ReferenceArraySerializer.prototype.builderSize_mmbugq_k$ = function (_this__1828080292) {
    return this.builderSize_q7iht4_k$(_this__1828080292 instanceof ArrayList ? _this__1828080292 : THROW_CCE());
  };
  ReferenceArraySerializer.prototype.toResult_l9vbl8_k$ = function (_this__1828080292) {
    return toNativeArrayImpl(_this__1828080292, this.kClass_1);
  };
  ReferenceArraySerializer.prototype.toResult_nzwaf2_k$ = function (_this__1828080292) {
    return this.toResult_l9vbl8_k$(_this__1828080292 instanceof ArrayList ? _this__1828080292 : THROW_CCE());
  };
  ReferenceArraySerializer.prototype.toBuilder_qnyl35_k$ = function (_this__1828080292) {
    return ArrayList_init_$Create$_1(asList(_this__1828080292));
  };
  ReferenceArraySerializer.prototype.toBuilder_9n7g5t_k$ = function (_this__1828080292) {
    return this.toBuilder_qnyl35_k$((!(_this__1828080292 == null) ? isArray(_this__1828080292) : false) ? _this__1828080292 : THROW_CCE());
  };
  ReferenceArraySerializer.prototype.checkCapacity_3yirqq_k$ = function (_this__1828080292, size) {
    return _this__1828080292.ensureCapacity_ignus8_k$(size);
  };
  ReferenceArraySerializer.prototype.checkCapacity_ge5iis_k$ = function (_this__1828080292, size) {
    return this.checkCapacity_3yirqq_k$(_this__1828080292 instanceof ArrayList ? _this__1828080292 : THROW_CCE(), size);
  };
  ReferenceArraySerializer.prototype.insert_5tew8_k$ = function (_this__1828080292, index, element) {
    _this__1828080292.add_ydlf05_k$(index, element);
  };
  ReferenceArraySerializer.prototype.insert_64qdau_k$ = function (_this__1828080292, index, element) {
    var tmp = _this__1828080292 instanceof ArrayList ? _this__1828080292 : THROW_CCE();
    return this.insert_5tew8_k$(tmp, index, (element == null ? true : isObject(element)) ? element : THROW_CCE());
  };
  ReferenceArraySerializer.$metadata$ = {
    simpleName: 'ReferenceArraySerializer',
    kind: 'class',
    interfaces: []
  };
  function ArrayListSerializer(element) {
    ListLikeSerializer.call(this, element);
    this.descriptor_1 = new ArrayListClassDesc(element._get_descriptor__684124924_bbb664_k$());
  }
  ArrayListSerializer.prototype._get_descriptor__684124924_bbb664_k$ = function () {
    return this.descriptor_1;
  };
  ArrayListSerializer.prototype.collectionSize_arfs71_k$ = function (_this__1828080292) {
    return _this__1828080292._get_size__809037418_ddoh9m_k$();
  };
  ArrayListSerializer.prototype.collectionSize_gnp0og_k$ = function (_this__1828080292) {
    return this.collectionSize_arfs71_k$((!(_this__1828080292 == null) ? isInterface(_this__1828080292, List) : false) ? _this__1828080292 : THROW_CCE());
  };
  ArrayListSerializer.prototype.collectionIterator_ye4tsa_k$ = function (_this__1828080292) {
    return _this__1828080292.iterator_jk1svi_k$();
  };
  ArrayListSerializer.prototype.collectionIterator_v9vfqb_k$ = function (_this__1828080292) {
    return this.collectionIterator_ye4tsa_k$((!(_this__1828080292 == null) ? isInterface(_this__1828080292, List) : false) ? _this__1828080292 : THROW_CCE());
  };
  ArrayListSerializer.prototype.builder_3thy1n_k$ = function () {
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = ArrayList_init_$Create$_0();
      break $l$block;
    }
    return tmp$ret$0;
  };
  ArrayListSerializer.prototype.builderSize_pted1r_k$ = function (_this__1828080292) {
    return _this__1828080292._get_size__809037418_ddoh9m_k$();
  };
  ArrayListSerializer.prototype.builderSize_mmbugq_k$ = function (_this__1828080292) {
    return this.builderSize_pted1r_k$(_this__1828080292 instanceof ArrayList ? _this__1828080292 : THROW_CCE());
  };
  ArrayListSerializer.prototype.toResult_t33s23_k$ = function (_this__1828080292) {
    return _this__1828080292;
  };
  ArrayListSerializer.prototype.toResult_nzwaf2_k$ = function (_this__1828080292) {
    return this.toResult_t33s23_k$(_this__1828080292 instanceof ArrayList ? _this__1828080292 : THROW_CCE());
  };
  ArrayListSerializer.prototype.toBuilder_9sdg76_k$ = function (_this__1828080292) {
    var tmp0_elvis_lhs = _this__1828080292 instanceof ArrayList ? _this__1828080292 : null;
    return tmp0_elvis_lhs == null ? ArrayList_init_$Create$_1(_this__1828080292) : tmp0_elvis_lhs;
  };
  ArrayListSerializer.prototype.toBuilder_9n7g5t_k$ = function (_this__1828080292) {
    return this.toBuilder_9sdg76_k$((!(_this__1828080292 == null) ? isInterface(_this__1828080292, List) : false) ? _this__1828080292 : THROW_CCE());
  };
  ArrayListSerializer.prototype.checkCapacity_ao7vf_k$ = function (_this__1828080292, size) {
    return _this__1828080292.ensureCapacity_ignus8_k$(size);
  };
  ArrayListSerializer.prototype.checkCapacity_ge5iis_k$ = function (_this__1828080292, size) {
    return this.checkCapacity_ao7vf_k$(_this__1828080292 instanceof ArrayList ? _this__1828080292 : THROW_CCE(), size);
  };
  ArrayListSerializer.prototype.insert_fxdj4m_k$ = function (_this__1828080292, index, element) {
    _this__1828080292.add_ydlf05_k$(index, element);
  };
  ArrayListSerializer.prototype.insert_64qdau_k$ = function (_this__1828080292, index, element) {
    var tmp = _this__1828080292 instanceof ArrayList ? _this__1828080292 : THROW_CCE();
    return this.insert_fxdj4m_k$(tmp, index, (element == null ? true : isObject(element)) ? element : THROW_CCE());
  };
  ArrayListSerializer.$metadata$ = {
    simpleName: 'ArrayListSerializer',
    kind: 'class',
    interfaces: []
  };
  function LinkedHashMapSerializer(kSerializer, vSerializer) {
    MapLikeSerializer.call(this, kSerializer, vSerializer);
    this.descriptor_1 = new LinkedHashMapClassDesc(kSerializer._get_descriptor__684124924_bbb664_k$(), vSerializer._get_descriptor__684124924_bbb664_k$());
  }
  LinkedHashMapSerializer.prototype._get_descriptor__684124924_bbb664_k$ = function () {
    return this.descriptor_1;
  };
  LinkedHashMapSerializer.prototype.collectionSize_1ouzjx_k$ = function (_this__1828080292) {
    return _this__1828080292._get_size__809037418_ddoh9m_k$();
  };
  LinkedHashMapSerializer.prototype.collectionSize_gnp0og_k$ = function (_this__1828080292) {
    return this.collectionSize_1ouzjx_k$((!(_this__1828080292 == null) ? isInterface(_this__1828080292, Map) : false) ? _this__1828080292 : THROW_CCE());
  };
  LinkedHashMapSerializer.prototype.collectionIterator_kjktzq_k$ = function (_this__1828080292) {
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = _this__1828080292._get_entries__31877249_iz8n5_k$().iterator_jk1svi_k$();
      break $l$block;
    }
    return tmp$ret$0;
  };
  LinkedHashMapSerializer.prototype.collectionIterator_v9vfqb_k$ = function (_this__1828080292) {
    return this.collectionIterator_kjktzq_k$((!(_this__1828080292 == null) ? isInterface(_this__1828080292, Map) : false) ? _this__1828080292 : THROW_CCE());
  };
  LinkedHashMapSerializer.prototype.builder_3thy1n_k$ = function () {
    return LinkedHashMap_init_$Create$();
  };
  LinkedHashMapSerializer.prototype.builderSize_39d0bl_k$ = function (_this__1828080292) {
    return _this__1828080292._get_size__809037418_ddoh9m_k$();
  };
  LinkedHashMapSerializer.prototype.builderSize_mmbugq_k$ = function (_this__1828080292) {
    return this.builderSize_39d0bl_k$(_this__1828080292 instanceof LinkedHashMap ? _this__1828080292 : THROW_CCE());
  };
  LinkedHashMapSerializer.prototype.toResult_8706jh_k$ = function (_this__1828080292) {
    return _this__1828080292;
  };
  LinkedHashMapSerializer.prototype.toResult_nzwaf2_k$ = function (_this__1828080292) {
    return this.toResult_8706jh_k$(_this__1828080292 instanceof LinkedHashMap ? _this__1828080292 : THROW_CCE());
  };
  LinkedHashMapSerializer.prototype.toBuilder_iza02_k$ = function (_this__1828080292) {
    var tmp0_elvis_lhs = _this__1828080292 instanceof LinkedHashMap ? _this__1828080292 : null;
    return tmp0_elvis_lhs == null ? LinkedHashMap_init_$Create$_1(_this__1828080292) : tmp0_elvis_lhs;
  };
  LinkedHashMapSerializer.prototype.toBuilder_9n7g5t_k$ = function (_this__1828080292) {
    return this.toBuilder_iza02_k$((!(_this__1828080292 == null) ? isInterface(_this__1828080292, Map) : false) ? _this__1828080292 : THROW_CCE());
  };
  LinkedHashMapSerializer.prototype.checkCapacity_n86247_k$ = function (_this__1828080292, size) {
  };
  LinkedHashMapSerializer.prototype.checkCapacity_ge5iis_k$ = function (_this__1828080292, size) {
    return this.checkCapacity_n86247_k$(_this__1828080292 instanceof LinkedHashMap ? _this__1828080292 : THROW_CCE(), size);
  };
  LinkedHashMapSerializer.prototype.insertKeyValuePair_o57l8p_k$ = function (_this__1828080292, index, key, value) {
    _this__1828080292.put_3mhbri_k$(key, value);
    return Unit_getInstance();
  };
  LinkedHashMapSerializer.prototype.insertKeyValuePair_nrn1wz_k$ = function (_this__1828080292, index, key, value) {
    var tmp = _this__1828080292 instanceof LinkedHashMap ? _this__1828080292 : THROW_CCE();
    var tmp_0 = (key == null ? true : isObject(key)) ? key : THROW_CCE();
    return this.insertKeyValuePair_o57l8p_k$(tmp, index, tmp_0, (value == null ? true : isObject(value)) ? value : THROW_CCE());
  };
  LinkedHashMapSerializer.$metadata$ = {
    simpleName: 'LinkedHashMapSerializer',
    kind: 'class',
    interfaces: []
  };
  function MapLikeSerializer(keySerializer, valueSerializer) {
    AbstractCollectionSerializer.call(this);
    this.keySerializer_1 = keySerializer;
    this.valueSerializer_1 = valueSerializer;
  }
  MapLikeSerializer.prototype._get_keySerializer__1445500320_nwm36o_k$ = function () {
    return this.keySerializer_1;
  };
  MapLikeSerializer.prototype._get_valueSerializer__4136340110_2mfxiq_k$ = function () {
    return this.valueSerializer_1;
  };
  MapLikeSerializer.prototype.readAll_s7t1kq_k$ = function (decoder, builder, startIndex, size) {
    {
      var tmp0_require_0 = size >= 0;
      {
      }
      if (!tmp0_require_0) {
        var tmp$ret$0;
        $l$block: {
          tmp$ret$0 = 'Size must be known in advance when using READ_ALL';
          break $l$block;
        }
        var message_1 = tmp$ret$0;
        throw IllegalArgumentException_init_$Create$(toString(message_1));
      }
    }
    var progression = step(until(0, imul(size, 2)), 2);
    var inductionVariable = progression._get_first__3232921377_hkbbvj_k$();
    var last = progression._get_last__802328181_d9oodx_k$();
    var step_0 = progression._get_step__809345279_ddv2tb_k$();
    if ((step_0 > 0 ? inductionVariable <= last : false) ? true : step_0 < 0 ? last <= inductionVariable : false)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + step_0 | 0;
        this.readElement_yuufx2_k$(decoder, startIndex + index | 0, builder, false);
      }
       while (!(index === last));
  };
  MapLikeSerializer.prototype.readElement_yuufx2_k$ = function (decoder, index, builder, checkIndex) {
    var tmp = this._get_descriptor__684124924_bbb664_k$();
    var key = decoder.decodeSerializableElement$default_xyql7s_k$(tmp, index, this.keySerializer_1, null, 8, null);
    var tmp_0;
    if (checkIndex) {
      var tmp$ret$1;
      $l$block_0: {
        var tmp0_also_0 = decoder.decodeElementIndex_nk5a2l_k$(this._get_descriptor__684124924_bbb664_k$());
        {
        }
        {
          {
            var tmp0_require_0_2 = tmp0_also_0 === (index + 1 | 0);
            {
            }
            if (!tmp0_require_0_2) {
              var tmp$ret$0;
              $l$block: {
                tmp$ret$0 = 'Value must follow key in a map, index for key: ' + index + ', returned index for value: ' + tmp0_also_0;
                break $l$block;
              }
              var message_1_3 = tmp$ret$0;
              throw IllegalArgumentException_init_$Create$(toString(message_1_3));
            }
          }
        }
        tmp$ret$1 = tmp0_also_0;
        break $l$block_0;
      }
      tmp_0 = tmp$ret$1;
    } else {
      tmp_0 = index + 1 | 0;
    }
    var vIndex = tmp_0;
    var tmp_1;
    var tmp_2;
    if (builder.containsKey_wgk31w_k$(key)) {
      var tmp_3 = this.valueSerializer_1._get_descriptor__684124924_bbb664_k$()._get_kind__801637687_d99vlj_k$();
      tmp_2 = !(tmp_3 instanceof PrimitiveKind);
    } else {
      tmp_2 = false;
    }
    if (tmp_2) {
      tmp_1 = decoder.decodeSerializableElement_5lsbxj_k$(this._get_descriptor__684124924_bbb664_k$(), vIndex, this.valueSerializer_1, getValue(builder, key));
    } else {
      {
        var tmp_4 = this._get_descriptor__684124924_bbb664_k$();
        tmp_1 = decoder.decodeSerializableElement$default_xyql7s_k$(tmp_4, vIndex, this.valueSerializer_1, null, 8, null);
      }
    }
    var value = tmp_1;
    {
      builder.put_3mhbri_k$(key, value);
      Unit_getInstance();
    }
  };
  MapLikeSerializer.prototype.serialize_wciw4p_k$ = function (encoder, value) {
    var size = this.collectionSize_gnp0og_k$(value);
    var composite = encoder.beginCollection_dgpn47_k$(this._get_descriptor__684124924_bbb664_k$(), size);
    var iterator = this.collectionIterator_v9vfqb_k$(value);
    var index = 0;
    {
      var tmp$ret$0;
      $l$block: {
        tmp$ret$0 = iterator;
        break $l$block;
      }
      var tmp0_iterator_1 = tmp$ret$0;
      while (tmp0_iterator_1.hasNext_bitz1p_k$()) {
        var element_2 = tmp0_iterator_1.next_20eer_k$();
        {
          var tmp$ret$1;
          $l$block_0: {
            tmp$ret$1 = element_2._get_key__857139730_e6bh8y_k$();
            break $l$block_0;
          }
          var k_4 = tmp$ret$1;
          var tmp$ret$2;
          $l$block_1: {
            tmp$ret$2 = element_2._get_value__3683422336_a43j40_k$();
            break $l$block_1;
          }
          var v_5 = tmp$ret$2;
          var tmp = this._get_descriptor__684124924_bbb664_k$();
          var tmp0_6 = index;
          index = tmp0_6 + 1 | 0;
          composite.encodeSerializableElement_pr92am_k$(tmp, tmp0_6, this.keySerializer_1, k_4);
          var tmp_0 = this._get_descriptor__684124924_bbb664_k$();
          var tmp1_7 = index;
          index = tmp1_7 + 1 | 0;
          composite.encodeSerializableElement_pr92am_k$(tmp_0, tmp1_7, this.valueSerializer_1, v_5);
        }
      }
    }
    composite.endStructure_e64gd4_k$(this._get_descriptor__684124924_bbb664_k$());
  };
  MapLikeSerializer.prototype.serialize_32qylj_k$ = function (encoder, value) {
    return this.serialize_wciw4p_k$(encoder, (value == null ? true : isObject(value)) ? value : THROW_CCE());
  };
  MapLikeSerializer.$metadata$ = {
    simpleName: 'MapLikeSerializer',
    kind: 'class',
    interfaces: []
  };
  function HashSetSerializer(eSerializer) {
    ListLikeSerializer.call(this, eSerializer);
    this.descriptor_1 = new HashSetClassDesc(eSerializer._get_descriptor__684124924_bbb664_k$());
  }
  HashSetSerializer.prototype._get_descriptor__684124924_bbb664_k$ = function () {
    return this.descriptor_1;
  };
  HashSetSerializer.prototype.collectionSize_ed1hnr_k$ = function (_this__1828080292) {
    return _this__1828080292._get_size__809037418_ddoh9m_k$();
  };
  HashSetSerializer.prototype.collectionSize_gnp0og_k$ = function (_this__1828080292) {
    return this.collectionSize_ed1hnr_k$((!(_this__1828080292 == null) ? isInterface(_this__1828080292, Set) : false) ? _this__1828080292 : THROW_CCE());
  };
  HashSetSerializer.prototype.collectionIterator_kh28ic_k$ = function (_this__1828080292) {
    return _this__1828080292.iterator_jk1svi_k$();
  };
  HashSetSerializer.prototype.collectionIterator_v9vfqb_k$ = function (_this__1828080292) {
    return this.collectionIterator_kh28ic_k$((!(_this__1828080292 == null) ? isInterface(_this__1828080292, Set) : false) ? _this__1828080292 : THROW_CCE());
  };
  HashSetSerializer.prototype.builder_3thy1n_k$ = function () {
    return HashSet_init_$Create$();
  };
  HashSetSerializer.prototype.builderSize_9hxhhu_k$ = function (_this__1828080292) {
    return _this__1828080292._get_size__809037418_ddoh9m_k$();
  };
  HashSetSerializer.prototype.builderSize_mmbugq_k$ = function (_this__1828080292) {
    return this.builderSize_9hxhhu_k$(_this__1828080292 instanceof HashSet ? _this__1828080292 : THROW_CCE());
  };
  HashSetSerializer.prototype.toResult_bsa6lu_k$ = function (_this__1828080292) {
    return _this__1828080292;
  };
  HashSetSerializer.prototype.toResult_nzwaf2_k$ = function (_this__1828080292) {
    return this.toResult_bsa6lu_k$(_this__1828080292 instanceof HashSet ? _this__1828080292 : THROW_CCE());
  };
  HashSetSerializer.prototype.toBuilder_lmw6bc_k$ = function (_this__1828080292) {
    var tmp0_elvis_lhs = _this__1828080292 instanceof HashSet ? _this__1828080292 : null;
    return tmp0_elvis_lhs == null ? HashSet_init_$Create$_0(_this__1828080292) : tmp0_elvis_lhs;
  };
  HashSetSerializer.prototype.toBuilder_9n7g5t_k$ = function (_this__1828080292) {
    return this.toBuilder_lmw6bc_k$((!(_this__1828080292 == null) ? isInterface(_this__1828080292, Set) : false) ? _this__1828080292 : THROW_CCE());
  };
  HashSetSerializer.prototype.checkCapacity_bde2fc_k$ = function (_this__1828080292, size) {
  };
  HashSetSerializer.prototype.checkCapacity_ge5iis_k$ = function (_this__1828080292, size) {
    return this.checkCapacity_bde2fc_k$(_this__1828080292 instanceof HashSet ? _this__1828080292 : THROW_CCE(), size);
  };
  HashSetSerializer.prototype.insert_66pcc9_k$ = function (_this__1828080292, index, element) {
    _this__1828080292.add_1j60pz_k$(element);
    Unit_getInstance();
  };
  HashSetSerializer.prototype.insert_64qdau_k$ = function (_this__1828080292, index, element) {
    var tmp = _this__1828080292 instanceof HashSet ? _this__1828080292 : THROW_CCE();
    return this.insert_66pcc9_k$(tmp, index, (element == null ? true : isObject(element)) ? element : THROW_CCE());
  };
  HashSetSerializer.$metadata$ = {
    simpleName: 'HashSetSerializer',
    kind: 'class',
    interfaces: []
  };
  function LinkedHashSetSerializer(eSerializer) {
    ListLikeSerializer.call(this, eSerializer);
    this.descriptor_1 = new LinkedHashSetClassDesc(eSerializer._get_descriptor__684124924_bbb664_k$());
  }
  LinkedHashSetSerializer.prototype._get_descriptor__684124924_bbb664_k$ = function () {
    return this.descriptor_1;
  };
  LinkedHashSetSerializer.prototype.collectionSize_ed1hnr_k$ = function (_this__1828080292) {
    return _this__1828080292._get_size__809037418_ddoh9m_k$();
  };
  LinkedHashSetSerializer.prototype.collectionSize_gnp0og_k$ = function (_this__1828080292) {
    return this.collectionSize_ed1hnr_k$((!(_this__1828080292 == null) ? isInterface(_this__1828080292, Set) : false) ? _this__1828080292 : THROW_CCE());
  };
  LinkedHashSetSerializer.prototype.collectionIterator_kh28ic_k$ = function (_this__1828080292) {
    return _this__1828080292.iterator_jk1svi_k$();
  };
  LinkedHashSetSerializer.prototype.collectionIterator_v9vfqb_k$ = function (_this__1828080292) {
    return this.collectionIterator_kh28ic_k$((!(_this__1828080292 == null) ? isInterface(_this__1828080292, Set) : false) ? _this__1828080292 : THROW_CCE());
  };
  LinkedHashSetSerializer.prototype.builder_3thy1n_k$ = function () {
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = LinkedHashSet_init_$Create$();
      break $l$block;
    }
    return tmp$ret$0;
  };
  LinkedHashSetSerializer.prototype.builderSize_c7xn2j_k$ = function (_this__1828080292) {
    return _this__1828080292._get_size__809037418_ddoh9m_k$();
  };
  LinkedHashSetSerializer.prototype.builderSize_mmbugq_k$ = function (_this__1828080292) {
    return this.builderSize_c7xn2j_k$(_this__1828080292 instanceof LinkedHashSet ? _this__1828080292 : THROW_CCE());
  };
  LinkedHashSetSerializer.prototype.toResult_rgrz5l_k$ = function (_this__1828080292) {
    return _this__1828080292;
  };
  LinkedHashSetSerializer.prototype.toResult_nzwaf2_k$ = function (_this__1828080292) {
    return this.toResult_rgrz5l_k$(_this__1828080292 instanceof LinkedHashSet ? _this__1828080292 : THROW_CCE());
  };
  LinkedHashSetSerializer.prototype.toBuilder_lmw6bc_k$ = function (_this__1828080292) {
    var tmp0_elvis_lhs = _this__1828080292 instanceof LinkedHashSet ? _this__1828080292 : null;
    return tmp0_elvis_lhs == null ? LinkedHashSet_init_$Create$_0(_this__1828080292) : tmp0_elvis_lhs;
  };
  LinkedHashSetSerializer.prototype.toBuilder_9n7g5t_k$ = function (_this__1828080292) {
    return this.toBuilder_lmw6bc_k$((!(_this__1828080292 == null) ? isInterface(_this__1828080292, Set) : false) ? _this__1828080292 : THROW_CCE());
  };
  LinkedHashSetSerializer.prototype.checkCapacity_qs5vdt_k$ = function (_this__1828080292, size) {
  };
  LinkedHashSetSerializer.prototype.checkCapacity_ge5iis_k$ = function (_this__1828080292, size) {
    return this.checkCapacity_qs5vdt_k$(_this__1828080292 instanceof LinkedHashSet ? _this__1828080292 : THROW_CCE(), size);
  };
  LinkedHashSetSerializer.prototype.insert_3b5fv6_k$ = function (_this__1828080292, index, element) {
    _this__1828080292.add_1j60pz_k$(element);
    Unit_getInstance();
  };
  LinkedHashSetSerializer.prototype.insert_64qdau_k$ = function (_this__1828080292, index, element) {
    var tmp = _this__1828080292 instanceof LinkedHashSet ? _this__1828080292 : THROW_CCE();
    return this.insert_3b5fv6_k$(tmp, index, (element == null ? true : isObject(element)) ? element : THROW_CCE());
  };
  LinkedHashSetSerializer.$metadata$ = {
    simpleName: 'LinkedHashSetSerializer',
    kind: 'class',
    interfaces: []
  };
  function HashMapSerializer(kSerializer, vSerializer) {
    MapLikeSerializer.call(this, kSerializer, vSerializer);
    this.descriptor_1 = new HashMapClassDesc(kSerializer._get_descriptor__684124924_bbb664_k$(), vSerializer._get_descriptor__684124924_bbb664_k$());
  }
  HashMapSerializer.prototype._get_descriptor__684124924_bbb664_k$ = function () {
    return this.descriptor_1;
  };
  HashMapSerializer.prototype.collectionSize_1ouzjx_k$ = function (_this__1828080292) {
    return _this__1828080292._get_size__809037418_ddoh9m_k$();
  };
  HashMapSerializer.prototype.collectionSize_gnp0og_k$ = function (_this__1828080292) {
    return this.collectionSize_1ouzjx_k$((!(_this__1828080292 == null) ? isInterface(_this__1828080292, Map) : false) ? _this__1828080292 : THROW_CCE());
  };
  HashMapSerializer.prototype.collectionIterator_kjktzq_k$ = function (_this__1828080292) {
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = _this__1828080292._get_entries__31877249_iz8n5_k$().iterator_jk1svi_k$();
      break $l$block;
    }
    return tmp$ret$0;
  };
  HashMapSerializer.prototype.collectionIterator_v9vfqb_k$ = function (_this__1828080292) {
    return this.collectionIterator_kjktzq_k$((!(_this__1828080292 == null) ? isInterface(_this__1828080292, Map) : false) ? _this__1828080292 : THROW_CCE());
  };
  HashMapSerializer.prototype.builder_3thy1n_k$ = function () {
    return HashMap_init_$Create$();
  };
  HashMapSerializer.prototype.builderSize_f8e7zc_k$ = function (_this__1828080292) {
    return _this__1828080292._get_size__809037418_ddoh9m_k$();
  };
  HashMapSerializer.prototype.builderSize_mmbugq_k$ = function (_this__1828080292) {
    return this.builderSize_f8e7zc_k$(_this__1828080292 instanceof HashMap ? _this__1828080292 : THROW_CCE());
  };
  HashMapSerializer.prototype.toResult_ii3mzo_k$ = function (_this__1828080292) {
    return _this__1828080292;
  };
  HashMapSerializer.prototype.toResult_nzwaf2_k$ = function (_this__1828080292) {
    return this.toResult_ii3mzo_k$(_this__1828080292 instanceof HashMap ? _this__1828080292 : THROW_CCE());
  };
  HashMapSerializer.prototype.toBuilder_iza02_k$ = function (_this__1828080292) {
    var tmp0_elvis_lhs = _this__1828080292 instanceof HashMap ? _this__1828080292 : null;
    return tmp0_elvis_lhs == null ? HashMap_init_$Create$_0(_this__1828080292) : tmp0_elvis_lhs;
  };
  HashMapSerializer.prototype.toBuilder_9n7g5t_k$ = function (_this__1828080292) {
    return this.toBuilder_iza02_k$((!(_this__1828080292 == null) ? isInterface(_this__1828080292, Map) : false) ? _this__1828080292 : THROW_CCE());
  };
  HashMapSerializer.prototype.checkCapacity_bomj8i_k$ = function (_this__1828080292, size) {
  };
  HashMapSerializer.prototype.checkCapacity_ge5iis_k$ = function (_this__1828080292, size) {
    return this.checkCapacity_bomj8i_k$(_this__1828080292 instanceof HashMap ? _this__1828080292 : THROW_CCE(), size);
  };
  HashMapSerializer.prototype.insertKeyValuePair_ogcj1a_k$ = function (_this__1828080292, index, key, value) {
    _this__1828080292.put_3mhbri_k$(key, value);
    return Unit_getInstance();
  };
  HashMapSerializer.prototype.insertKeyValuePair_nrn1wz_k$ = function (_this__1828080292, index, key, value) {
    var tmp = _this__1828080292 instanceof HashMap ? _this__1828080292 : THROW_CCE();
    var tmp_0 = (key == null ? true : isObject(key)) ? key : THROW_CCE();
    return this.insertKeyValuePair_ogcj1a_k$(tmp, index, tmp_0, (value == null ? true : isObject(value)) ? value : THROW_CCE());
  };
  HashMapSerializer.$metadata$ = {
    simpleName: 'HashMapSerializer',
    kind: 'class',
    interfaces: []
  };
  function jsonCachedSerialNames(_this__1828080292) {
    return cachedSerialNames(_this__1828080292);
  }
  function _get_serializer__1050971449($this) {
    return $this.serializer_1;
  }
  function NullableSerializer(serializer) {
    this.serializer_1 = serializer;
    this.descriptor_1 = new SerialDescriptorForNullable(this.serializer_1._get_descriptor__684124924_bbb664_k$());
  }
  NullableSerializer.prototype._get_descriptor__684124924_bbb664_k$ = function () {
    return this.descriptor_1;
  };
  NullableSerializer.prototype.serialize_l9nmnw_k$ = function (encoder, value) {
    if (!(value == null)) {
      encoder.encodeNotNullMark_40lhgg_k$();
      encoder.encodeSerializableValue_bps9ot_k$(this.serializer_1, value);
    } else {
      encoder.encodeNull_ek2hec_k$();
    }
  };
  NullableSerializer.prototype.serialize_32qylj_k$ = function (encoder, value) {
    return this.serialize_l9nmnw_k$(encoder, (value == null ? true : isObject(value)) ? value : THROW_CCE());
  };
  NullableSerializer.prototype.deserialize_2t41fm_k$ = function (decoder) {
    return decoder.decodeNotNullMark_us4ba1_k$() ? decoder.decodeSerializableValue_xpp80o_k$(this.serializer_1) : decoder.decodeNull_jzrmuj_k$();
  };
  NullableSerializer.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (other == null ? true : !getKClassFromExpression(this).equals(getKClassFromExpression(other)))
      return false;
    if (other instanceof NullableSerializer)
      other;
    else
      THROW_CCE();
    Unit_getInstance();
    if (!equals(this.serializer_1, other.serializer_1))
      return false;
    return true;
  };
  NullableSerializer.prototype.hashCode = function () {
    return hashCode(this.serializer_1);
  };
  NullableSerializer.$metadata$ = {
    simpleName: 'NullableSerializer',
    kind: 'class',
    interfaces: [KSerializer]
  };
  function SerialDescriptorForNullable(original) {
    this.original_1 = original;
    this.serialName_1 = this.original_1._get_serialName__1025298892_gyfpos_k$() + '?';
  }
  SerialDescriptorForNullable.prototype._get_original__1282519066_l7ku1m_k$ = function () {
    return this.original_1;
  };
  SerialDescriptorForNullable.prototype.getElementAnnotations_a57oar_k$ = function (index) {
    return this.original_1.getElementAnnotations_a57oar_k$(index);
  };
  SerialDescriptorForNullable.prototype.getElementDescriptor_sqz94k_k$ = function (index) {
    return this.original_1.getElementDescriptor_sqz94k_k$(index);
  };
  SerialDescriptorForNullable.prototype.getElementIndex_2hwbkl_k$ = function (name) {
    return this.original_1.getElementIndex_2hwbkl_k$(name);
  };
  SerialDescriptorForNullable.prototype.getElementName_ykpypc_k$ = function (index) {
    return this.original_1.getElementName_ykpypc_k$(index);
  };
  SerialDescriptorForNullable.prototype.isElementOptional_c3hgb3_k$ = function (index) {
    return this.original_1.isElementOptional_c3hgb3_k$(index);
  };
  SerialDescriptorForNullable.prototype._get_annotations__1905959661_virbvx_k$ = function () {
    return this.original_1._get_annotations__1905959661_virbvx_k$();
  };
  SerialDescriptorForNullable.prototype._get_elementsCount__2919979385_mqmrgn_k$ = function () {
    return this.original_1._get_elementsCount__2919979385_mqmrgn_k$();
  };
  SerialDescriptorForNullable.prototype._get_kind__801637687_d99vlj_k$ = function () {
    return this.original_1._get_kind__801637687_d99vlj_k$();
  };
  SerialDescriptorForNullable.prototype._get_serialName__1025298892_gyfpos_k$ = function () {
    return this.serialName_1;
  };
  SerialDescriptorForNullable.prototype._get_isNullable__336674624_5kg3sw_k$ = function () {
    return true;
  };
  SerialDescriptorForNullable.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof SerialDescriptorForNullable))
      return false;
    else {
    }
    if (!equals(this.original_1, other.original_1))
      return false;
    return true;
  };
  SerialDescriptorForNullable.prototype.toString = function () {
    return '' + this.original_1 + '?';
  };
  SerialDescriptorForNullable.prototype.hashCode = function () {
    return imul(hashCode(this.original_1), 31);
  };
  SerialDescriptorForNullable.$metadata$ = {
    simpleName: 'SerialDescriptorForNullable',
    kind: 'class',
    interfaces: [SerialDescriptor]
  };
  function _get_objectInstance__3253605271($this) {
    return $this.objectInstance_1;
  }
  function ObjectSerializer(serialName, objectInstance) {
    this.objectInstance_1 = objectInstance;
    var tmp = this;
    var tmp_0 = OBJECT_getInstance();
    tmp.descriptor_1 = buildSerialDescriptor$default(serialName, tmp_0, [], null, 12, null);
  }
  ObjectSerializer.prototype._get_descriptor__684124924_bbb664_k$ = function () {
    return this.descriptor_1;
  };
  ObjectSerializer.prototype.serialize_32qylj_k$ = function (encoder, value) {
    encoder.beginStructure_dv3yt3_k$(this.descriptor_1).endStructure_e64gd4_k$(this.descriptor_1);
  };
  ObjectSerializer.prototype.deserialize_2t41fm_k$ = function (decoder) {
    decoder.beginStructure_dv3yt3_k$(this.descriptor_1).endStructure_e64gd4_k$(this.descriptor_1);
    return this.objectInstance_1;
  };
  ObjectSerializer.$metadata$ = {
    simpleName: 'ObjectSerializer',
    kind: 'class',
    interfaces: [KSerializer]
  };
  function _get_EMPTY_DESCRIPTOR_ARRAY__577980976() {
    init_properties_Platform_common_kt_3699467694();
    return EMPTY_DESCRIPTOR_ARRAY;
  }
  var EMPTY_DESCRIPTOR_ARRAY;
  function cast(_this__1828080292) {
    init_properties_Platform_common_kt_3699467694();
    return isInterface(_this__1828080292, KSerializer) ? _this__1828080292 : THROW_CCE();
  }
  function compactArray(_this__1828080292) {
    init_properties_Platform_common_kt_3699467694();
    var tmp$ret$2;
    $l$block_1: {
      {
      }
      var tmp;
      var tmp$ret$1;
      $l$block_0: {
        var tmp$ret$0;
        $l$block: {
          {
          }
          tmp$ret$0 = _this__1828080292 == null ? true : _this__1828080292.isEmpty_y1axqb_k$();
          break $l$block;
        }
        tmp$ret$1 = tmp$ret$0;
        break $l$block_0;
      }
      if (!tmp$ret$1) {
        tmp = _this__1828080292;
      } else {
        {
          tmp = null;
        }
      }
      tmp$ret$2 = tmp;
      break $l$block_1;
    }
    var tmp0_safe_receiver = tmp$ret$2;
    var tmp_0;
    if (tmp0_safe_receiver == null) {
      tmp_0 = null;
    } else {
      var tmp$ret$3;
      $l$block_2: {
        tmp$ret$3 = copyToArray(tmp0_safe_receiver);
        break $l$block_2;
      }
      tmp_0 = tmp$ret$3;
    }
    var tmp1_elvis_lhs = tmp_0;
    return tmp1_elvis_lhs == null ? _get_EMPTY_DESCRIPTOR_ARRAY__577980976() : tmp1_elvis_lhs;
  }
  function elementsHashCodeBy(_this__1828080292, selector) {
    init_properties_Platform_common_kt_3699467694();
    var tmp$ret$2;
    $l$block_1: {
      var accumulator_1 = 1;
      var tmp0_iterator_2 = _this__1828080292.iterator_jk1svi_k$();
      while (tmp0_iterator_2.hasNext_bitz1p_k$()) {
        var element_3 = tmp0_iterator_2.next_20eer_k$();
        var tmp$ret$1;
        $l$block_0: {
          var tmp0__anonymous__4_2495602524 = accumulator_1;
          var tmp = imul(31, tmp0__anonymous__4_2495602524);
          var tmp$ret$0;
          $l$block: {
            var tmp0_hashCode_0_5 = selector(element_3);
            var tmp0_safe_receiver_2_7 = tmp0_hashCode_0_5;
            var tmp1_elvis_lhs_1_6 = tmp0_safe_receiver_2_7 == null ? null : hashCode(tmp0_safe_receiver_2_7);
            tmp$ret$0 = tmp1_elvis_lhs_1_6 == null ? 0 : tmp1_elvis_lhs_1_6;
            break $l$block;
          }
          tmp$ret$1 = tmp + tmp$ret$0 | 0;
          break $l$block_0;
        }
        accumulator_1 = tmp$ret$1;
      }
      tmp$ret$2 = accumulator_1;
      break $l$block_1;
    }
    return tmp$ret$2;
  }
  function cachedSerialNames(_this__1828080292) {
    init_properties_Platform_common_kt_3699467694();
    if (_this__1828080292 instanceof PluginGeneratedSerialDescriptor)
      return _this__1828080292._get_namesSet__2733192977_ptu8rz_k$();
    else {
    }
    var result = HashSet_init_$Create$_1(_this__1828080292._get_elementsCount__2919979385_mqmrgn_k$());
    var inductionVariable = 0;
    var last = _this__1828080292._get_elementsCount__2919979385_mqmrgn_k$();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        {
          var tmp0_plusAssign_0 = _this__1828080292.getElementName_ykpypc_k$(i);
          result.add_1j60pz_k$(tmp0_plusAssign_0);
          Unit_getInstance();
        }
      }
       while (inductionVariable < last);
    return result;
  }
  function cast_0(_this__1828080292) {
    init_properties_Platform_common_kt_3699467694();
    return isInterface(_this__1828080292, SerializationStrategy) ? _this__1828080292 : THROW_CCE();
  }
  function kclass(_this__1828080292) {
    init_properties_Platform_common_kt_3699467694();
    var t = _this__1828080292._get_classifier__2273016458_xftf92_k$();
    var tmp;
    if (!(t == null) ? isInterface(t, KClass) : false) {
      tmp = t;
    } else {
      {
        var tmp0_error_0 = 'Only KClass supported as classifier, got ' + t;
        throw IllegalStateException_init_$Create$(toString(tmp0_error_0));
      }
    }
    var tmp_0 = tmp;
    return isInterface(tmp_0, KClass) ? tmp_0 : THROW_CCE();
  }
  var properties_initialized_Platform_common_kt_3193599498;
  function init_properties_Platform_common_kt_3699467694() {
    if (!properties_initialized_Platform_common_kt_3193599498) {
      properties_initialized_Platform_common_kt_3193599498 = true;
      var tmp$ret$2;
      $l$block_1: {
        var tmp$ret$1;
        $l$block_0: {
          var tmp$ret$0;
          $l$block: {
            tmp$ret$0 = [];
            break $l$block;
          }
          tmp$ret$1 = tmp$ret$0;
          break $l$block_0;
        }
        tmp$ret$2 = tmp$ret$1;
        break $l$block_1;
      }
      EMPTY_DESCRIPTOR_ARRAY = tmp$ret$2;
    }
  }
  function hashCodeImpl(_this__1828080292, typeParams) {
    var result = getStringHashCode(_this__1828080292._get_serialName__1025298892_gyfpos_k$());
    result = imul(31, result) + contentHashCode(typeParams) | 0;
    var elementDescriptors = _get_elementDescriptors__2235584067(_this__1828080292);
    var tmp$ret$4;
    $l$block_3: {
      var tmp$ret$3;
      $l$block_2: {
        var accumulator_1_1 = 1;
        var tmp0_iterator_2_2 = elementDescriptors.iterator_jk1svi_k$();
        while (tmp0_iterator_2_2.hasNext_bitz1p_k$()) {
          var element_3_3 = tmp0_iterator_2_2.next_20eer_k$();
          var tmp$ret$2;
          $l$block_1: {
            var tmp0__anonymous__4_4_1682277393 = accumulator_1_1;
            var tmp = imul(31, tmp0__anonymous__4_4_1682277393);
            var tmp$ret$1;
            $l$block_0: {
              var tmp$ret$0;
              $l$block: {
                tmp$ret$0 = element_3_3._get_serialName__1025298892_gyfpos_k$();
                break $l$block;
              }
              var tmp0_hashCode_0_5_5 = tmp$ret$0;
              var tmp0_safe_receiver_2_7_7 = tmp0_hashCode_0_5_5;
              var tmp1_elvis_lhs_1_6_6 = tmp0_safe_receiver_2_7_7 == null ? null : hashCode(tmp0_safe_receiver_2_7_7);
              tmp$ret$1 = tmp1_elvis_lhs_1_6_6 == null ? 0 : tmp1_elvis_lhs_1_6_6;
              break $l$block_0;
            }
            tmp$ret$2 = tmp + tmp$ret$1 | 0;
            break $l$block_1;
          }
          accumulator_1_1 = tmp$ret$2;
        }
        tmp$ret$3 = accumulator_1_1;
        break $l$block_2;
      }
      tmp$ret$4 = tmp$ret$3;
      break $l$block_3;
    }
    var namesHash = tmp$ret$4;
    var tmp$ret$9;
    $l$block_8: {
      var tmp$ret$8;
      $l$block_7: {
        var accumulator_1_1_0 = 1;
        var tmp0_iterator_2_2_0 = elementDescriptors.iterator_jk1svi_k$();
        while (tmp0_iterator_2_2_0.hasNext_bitz1p_k$()) {
          var element_3_3_0 = tmp0_iterator_2_2_0.next_20eer_k$();
          var tmp$ret$7;
          $l$block_6: {
            var tmp0__anonymous__4_4_1682277393_0 = accumulator_1_1_0;
            var tmp_0 = imul(31, tmp0__anonymous__4_4_1682277393_0);
            var tmp$ret$6;
            $l$block_5: {
              var tmp$ret$5;
              $l$block_4: {
                tmp$ret$5 = element_3_3_0._get_kind__801637687_d99vlj_k$();
                break $l$block_4;
              }
              var tmp0_hashCode_0_5_5_0 = tmp$ret$5;
              var tmp0_safe_receiver_2_7_7_0 = tmp0_hashCode_0_5_5_0;
              var tmp1_elvis_lhs_1_6_6_0 = tmp0_safe_receiver_2_7_7_0 == null ? null : hashCode(tmp0_safe_receiver_2_7_7_0);
              tmp$ret$6 = tmp1_elvis_lhs_1_6_6_0 == null ? 0 : tmp1_elvis_lhs_1_6_6_0;
              break $l$block_5;
            }
            tmp$ret$7 = tmp_0 + tmp$ret$6 | 0;
            break $l$block_6;
          }
          accumulator_1_1_0 = tmp$ret$7;
        }
        tmp$ret$8 = accumulator_1_1_0;
        break $l$block_7;
      }
      tmp$ret$9 = tmp$ret$8;
      break $l$block_8;
    }
    var kindHash = tmp$ret$9;
    result = imul(31, result) + namesHash | 0;
    result = imul(31, result) + kindHash | 0;
    return result;
  }
  function PluginGeneratedSerialDescriptor_init_$Init$(serialName, generatedSerializer, elementsCount, $mask0, $marker, $this) {
    if (!(($mask0 & 2) === 0))
      generatedSerializer = null;
    PluginGeneratedSerialDescriptor.call($this, serialName, generatedSerializer, elementsCount);
    return $this;
  }
  function PluginGeneratedSerialDescriptor_init_$Create$(serialName, generatedSerializer, elementsCount, $mask0, $marker) {
    return PluginGeneratedSerialDescriptor_init_$Init$(serialName, generatedSerializer, elementsCount, $mask0, $marker, Object.create(PluginGeneratedSerialDescriptor.prototype));
  }
  function _get_generatedSerializer__1983103536($this) {
    return $this.generatedSerializer_1;
  }
  function _set_added__726564933($this, _set____804775014) {
    $this.added_1 = _set____804775014;
  }
  function _get_added__3084726993($this) {
    return $this.added_1;
  }
  function _get_names__3454403977($this) {
    return $this.names_1;
  }
  function _get_propertiesAnnotations__1421149184($this) {
    return $this.propertiesAnnotations_1;
  }
  function _set_classAnnotations__1835603915($this, _set____804775014) {
    $this.classAnnotations_1 = _set____804775014;
  }
  function _get_classAnnotations__3594360255($this) {
    return $this.classAnnotations_1;
  }
  function _set_elementsOptionality__1011932174($this, _set____804775014) {
    $this.elementsOptionality_1 = _set____804775014;
  }
  function _get_elementsOptionality__1816013210($this) {
    return $this.elementsOptionality_1;
  }
  function _get_indices__2241594442_1($this) {
    var tmp$ret$0;
    $l$block: {
      var tmp0_getValue_0 = indices$factory();
      tmp$ret$0 = $this.indices$delegate_1._get_value__3683422336_a43j40_k$();
      break $l$block;
    }
    return tmp$ret$0;
  }
  function _get_typeParameterDescriptors__1590510230($this) {
    var tmp$ret$0;
    $l$block: {
      var tmp0_getValue_0 = typeParameterDescriptors$factory();
      tmp$ret$0 = $this.typeParameterDescriptors$delegate_1._get_value__3683422336_a43j40_k$();
      break $l$block;
    }
    return tmp$ret$0;
  }
  function _get__hashCode__1781908503_0($this) {
    var tmp$ret$0;
    $l$block: {
      var tmp0_getValue_0 = _hashCode$factory_0();
      tmp$ret$0 = $this._hashCode$delegate_1._get_value__3683422336_a43j40_k$();
      break $l$block;
    }
    return tmp$ret$0;
  }
  function buildIndices($this) {
    var indices = HashMap_init_$Create$();
    var inductionVariable = 0;
    var last = $this.names_1.length - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        {
          var tmp0_set_0 = $this.names_1[i];
          indices.put_3mhbri_k$(tmp0_set_0, i);
          Unit_getInstance();
        }
      }
       while (inductionVariable <= last);
    return indices;
  }
  function PluginGeneratedSerialDescriptor$indices$delegate$lambda(this$0) {
    return function () {
      return buildIndices(this$0);
    };
  }
  function PluginGeneratedSerialDescriptor$typeParameterDescriptors$delegate$lambda(this$0) {
    return function () {
      var tmp0_safe_receiver = this$0.generatedSerializer_1;
      var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.typeParametersSerializers_fr94fx_k$();
      var tmp;
      if (tmp1_safe_receiver == null) {
        tmp = null;
      } else {
        var tmp$ret$2;
        $l$block_1: {
          var tmp$ret$1;
          $l$block_0: {
            var tmp0_mapTo_0_1 = ArrayList_init_$Create$(tmp1_safe_receiver.length);
            var tmp0_iterator_1_2 = arrayIterator(tmp1_safe_receiver);
            while (tmp0_iterator_1_2.hasNext_bitz1p_k$()) {
              var item_2_3 = tmp0_iterator_1_2.next_20eer_k$();
              var tmp$ret$0;
              $l$block: {
                tmp$ret$0 = item_2_3._get_descriptor__684124924_bbb664_k$();
                break $l$block;
              }
              tmp0_mapTo_0_1.add_1j60pz_k$(tmp$ret$0);
              Unit_getInstance();
            }
            tmp$ret$1 = tmp0_mapTo_0_1;
            break $l$block_0;
          }
          tmp$ret$2 = tmp$ret$1;
          break $l$block_1;
        }
        tmp = tmp$ret$2;
      }
      return compactArray(tmp);
    };
  }
  function PluginGeneratedSerialDescriptor$_hashCode$delegate$lambda(this$0) {
    return function () {
      var tmp$ret$10;
      $l$block_9: {
        var tmp0_hashCodeImpl_0 = _get_typeParameterDescriptors__1590510230(this$0);
        var result_1 = getStringHashCode(this$0._get_serialName__1025298892_gyfpos_k$());
        result_1 = imul(31, result_1) + contentHashCode(tmp0_hashCodeImpl_0) | 0;
        var elementDescriptors_2 = _get_elementDescriptors__2235584067(this$0);
        var tmp$ret$4;
        $l$block_3: {
          var tmp$ret$3;
          $l$block_2: {
            var accumulator_1_1_4 = 1;
            var tmp0_iterator_2_2_5 = elementDescriptors_2.iterator_jk1svi_k$();
            while (tmp0_iterator_2_2_5.hasNext_bitz1p_k$()) {
              var element_3_3_6 = tmp0_iterator_2_2_5.next_20eer_k$();
              var tmp$ret$2;
              $l$block_1: {
                var tmp0__anonymous__4_4_7_1760874377 = accumulator_1_1_4;
                var tmp = imul(31, tmp0__anonymous__4_4_7_1760874377);
                var tmp$ret$1;
                $l$block_0: {
                  var tmp$ret$0;
                  $l$block: {
                    tmp$ret$0 = element_3_3_6._get_serialName__1025298892_gyfpos_k$();
                    break $l$block;
                  }
                  var tmp0_hashCode_0_5_5_8 = tmp$ret$0;
                  var tmp0_safe_receiver_2_7_7_10 = tmp0_hashCode_0_5_5_8;
                  var tmp1_elvis_lhs_1_6_6_9 = tmp0_safe_receiver_2_7_7_10 == null ? null : hashCode(tmp0_safe_receiver_2_7_7_10);
                  tmp$ret$1 = tmp1_elvis_lhs_1_6_6_9 == null ? 0 : tmp1_elvis_lhs_1_6_6_9;
                  break $l$block_0;
                }
                tmp$ret$2 = tmp + tmp$ret$1 | 0;
                break $l$block_1;
              }
              accumulator_1_1_4 = tmp$ret$2;
            }
            tmp$ret$3 = accumulator_1_1_4;
            break $l$block_2;
          }
          tmp$ret$4 = tmp$ret$3;
          break $l$block_3;
        }
        var namesHash_3 = tmp$ret$4;
        var tmp$ret$9;
        $l$block_8: {
          var tmp$ret$8;
          $l$block_7: {
            var accumulator_1_1_12 = 1;
            var tmp0_iterator_2_2_13 = elementDescriptors_2.iterator_jk1svi_k$();
            while (tmp0_iterator_2_2_13.hasNext_bitz1p_k$()) {
              var element_3_3_14 = tmp0_iterator_2_2_13.next_20eer_k$();
              var tmp$ret$7;
              $l$block_6: {
                var tmp0__anonymous__4_4_15_3047498002 = accumulator_1_1_12;
                var tmp_0 = imul(31, tmp0__anonymous__4_4_15_3047498002);
                var tmp$ret$6;
                $l$block_5: {
                  var tmp$ret$5;
                  $l$block_4: {
                    tmp$ret$5 = element_3_3_14._get_kind__801637687_d99vlj_k$();
                    break $l$block_4;
                  }
                  var tmp0_hashCode_0_5_5_16 = tmp$ret$5;
                  var tmp0_safe_receiver_2_7_7_18 = tmp0_hashCode_0_5_5_16;
                  var tmp1_elvis_lhs_1_6_6_17 = tmp0_safe_receiver_2_7_7_18 == null ? null : hashCode(tmp0_safe_receiver_2_7_7_18);
                  tmp$ret$6 = tmp1_elvis_lhs_1_6_6_17 == null ? 0 : tmp1_elvis_lhs_1_6_6_17;
                  break $l$block_5;
                }
                tmp$ret$7 = tmp_0 + tmp$ret$6 | 0;
                break $l$block_6;
              }
              accumulator_1_1_12 = tmp$ret$7;
            }
            tmp$ret$8 = accumulator_1_1_12;
            break $l$block_7;
          }
          tmp$ret$9 = tmp$ret$8;
          break $l$block_8;
        }
        var kindHash_11 = tmp$ret$9;
        result_1 = imul(31, result_1) + namesHash_3 | 0;
        result_1 = imul(31, result_1) + kindHash_11 | 0;
        tmp$ret$10 = result_1;
        break $l$block_9;
      }
      return tmp$ret$10;
    };
  }
  function PluginGeneratedSerialDescriptor$toString$lambda(this$0) {
    return function (it) {
      return it._get_key__857139730_e6bh8y_k$() + ': ' + this$0.getElementDescriptor_sqz94k_k$(it._get_value__3683422336_a43j40_k$())._get_serialName__1025298892_gyfpos_k$();
    };
  }
  function PluginGeneratedSerialDescriptor(serialName, generatedSerializer, elementsCount) {
    this.serialName_1 = serialName;
    this.generatedSerializer_1 = generatedSerializer;
    this.elementsCount_1 = elementsCount;
    this.added_1 = -1;
    var tmp = this;
    var tmp_0 = 0;
    var tmp_1 = this.elementsCount_1;
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = fillArrayVal(Array(tmp_1), null);
      break $l$block;
    }
    var tmp_2 = tmp$ret$0;
    while (tmp_0 < tmp_1) {
      var tmp_3 = tmp_0;
      var tmp$ret$1;
      $l$block_0: {
        tmp$ret$1 = '[UNINITIALIZED]';
        break $l$block_0;
      }
      tmp_2[tmp_3] = tmp$ret$1;
      tmp_0 = tmp_0 + 1 | 0;
    }
    tmp.names_1 = tmp_2;
    var tmp_4 = this;
    var tmp$ret$2;
    $l$block_1: {
      var tmp0_arrayOfNulls_0 = this.elementsCount_1;
      tmp$ret$2 = fillArrayVal(Array(tmp0_arrayOfNulls_0), null);
      break $l$block_1;
    }
    tmp_4.propertiesAnnotations_1 = tmp$ret$2;
    this.classAnnotations_1 = null;
    this.elementsOptionality_1 = booleanArray(this.elementsCount_1);
    var tmp_5 = this;
    tmp_5.indices$delegate_1 = lazy(PluginGeneratedSerialDescriptor$indices$delegate$lambda(this));
    var tmp_6 = this;
    tmp_6.typeParameterDescriptors$delegate_1 = lazy(PluginGeneratedSerialDescriptor$typeParameterDescriptors$delegate$lambda(this));
    var tmp_7 = this;
    tmp_7._hashCode$delegate_1 = lazy(PluginGeneratedSerialDescriptor$_hashCode$delegate$lambda(this));
  }
  PluginGeneratedSerialDescriptor.prototype._get_serialName__1025298892_gyfpos_k$ = function () {
    return this.serialName_1;
  };
  PluginGeneratedSerialDescriptor.prototype._get_elementsCount__2919979385_mqmrgn_k$ = function () {
    return this.elementsCount_1;
  };
  PluginGeneratedSerialDescriptor.prototype._get_kind__801637687_d99vlj_k$ = function () {
    return CLASS_getInstance();
  };
  PluginGeneratedSerialDescriptor.prototype._get_annotations__1905959661_virbvx_k$ = function () {
    var tmp0_elvis_lhs = this.classAnnotations_1;
    return tmp0_elvis_lhs == null ? emptyList() : tmp0_elvis_lhs;
  };
  PluginGeneratedSerialDescriptor.prototype._get_namesSet__2733192977_ptu8rz_k$ = function () {
    return _get_indices__2241594442_1(this)._get_keys__801529559_d97k5z_k$();
  };
  PluginGeneratedSerialDescriptor.prototype.addElement_ifop3j_k$ = function (name, isOptional) {
    var tmp0_this = this;
    tmp0_this.added_1 = tmp0_this.added_1 + 1 | 0;
    this.names_1[tmp0_this.added_1] = name;
    this.elementsOptionality_1[this.added_1] = isOptional;
    this.propertiesAnnotations_1[this.added_1] = null;
  };
  PluginGeneratedSerialDescriptor.prototype.addElement$default_c7nl76_k$ = function (name, isOptional, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      isOptional = false;
    return this.addElement_ifop3j_k$(name, isOptional);
  };
  PluginGeneratedSerialDescriptor.prototype.pushAnnotation_kbn3rf_k$ = function (annotation) {
    var tmp$ret$1;
    $l$block_0: {
      var tmp0_let_0 = this.propertiesAnnotations_1[this.added_1];
      {
      }
      var tmp$ret$0;
      $l$block: {
        var tmp;
        if (tmp0_let_0 == null) {
          var result_2 = ArrayList_init_$Create$(1);
          this.propertiesAnnotations_1[this.added_1] = result_2;
          tmp = result_2;
        } else {
          tmp = tmp0_let_0;
        }
        tmp$ret$0 = tmp;
        break $l$block;
      }
      tmp$ret$1 = tmp$ret$0;
      break $l$block_0;
    }
    var list = tmp$ret$1;
    list.add_1j60pz_k$(annotation);
    Unit_getInstance();
  };
  PluginGeneratedSerialDescriptor.prototype.pushClassAnnotation_tfb9g9_k$ = function (a) {
    if (this.classAnnotations_1 == null) {
      this.classAnnotations_1 = ArrayList_init_$Create$(1);
    }
    ensureNotNull(this.classAnnotations_1).add_1j60pz_k$(a);
    Unit_getInstance();
  };
  PluginGeneratedSerialDescriptor.prototype.getElementDescriptor_sqz94k_k$ = function (index) {
    var tmp0_safe_receiver = this.generatedSerializer_1;
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.childSerializers_5ghqw5_k$();
    var tmp2_safe_receiver = tmp1_safe_receiver == null ? null : tmp1_safe_receiver[index];
    var tmp3_elvis_lhs = tmp2_safe_receiver == null ? null : tmp2_safe_receiver._get_descriptor__684124924_bbb664_k$();
    var tmp;
    if (tmp3_elvis_lhs == null) {
      throw IndexOutOfBoundsException_init_$Create$(this._get_serialName__1025298892_gyfpos_k$() + ' descriptor has only ' + this.elementsCount_1 + ' elements, index: ' + index);
    } else {
      tmp = tmp3_elvis_lhs;
    }
    return tmp;
  };
  PluginGeneratedSerialDescriptor.prototype.isElementOptional_c3hgb3_k$ = function (index) {
    return getChecked_0(this.elementsOptionality_1, index);
  };
  PluginGeneratedSerialDescriptor.prototype.getElementAnnotations_a57oar_k$ = function (index) {
    var tmp0_elvis_lhs = getChecked(this.propertiesAnnotations_1, index);
    return tmp0_elvis_lhs == null ? emptyList() : tmp0_elvis_lhs;
  };
  PluginGeneratedSerialDescriptor.prototype.getElementName_ykpypc_k$ = function (index) {
    return getChecked(this.names_1, index);
  };
  PluginGeneratedSerialDescriptor.prototype.getElementIndex_2hwbkl_k$ = function (name) {
    var tmp0_elvis_lhs = _get_indices__2241594442_1(this).get_1mhr4y_k$(name);
    return tmp0_elvis_lhs == null ? Companion_getInstance_1()._get_UNKNOWN_NAME__1523688395_p75xhn_k$() : tmp0_elvis_lhs;
  };
  PluginGeneratedSerialDescriptor.prototype.equals = function (other) {
    var tmp$ret$0;
    $l$block_7: {
      if (this === other) {
        tmp$ret$0 = true;
        break $l$block_7;
      }
      if (!(other instanceof PluginGeneratedSerialDescriptor)) {
        tmp$ret$0 = false;
        break $l$block_7;
      } else {
      }
      if (!(this._get_serialName__1025298892_gyfpos_k$() === other._get_serialName__1025298892_gyfpos_k$())) {
        tmp$ret$0 = false;
        break $l$block_7;
      }
      var tmp$ret$1;
      $l$block_2: {
        var tmp0__anonymous__3_2495602523 = other;
        tmp$ret$1 = contentEquals(_get_typeParameterDescriptors__1590510230(this), _get_typeParameterDescriptors__1590510230(tmp0__anonymous__3_2495602523));
        break $l$block_2;
      }
      if (!tmp$ret$1) {
        tmp$ret$0 = false;
        break $l$block_7;
      } else {
      }
      if (!(this._get_elementsCount__2919979385_mqmrgn_k$() === other._get_elementsCount__2919979385_mqmrgn_k$())) {
        tmp$ret$0 = false;
        break $l$block_7;
      }
      var inductionVariable = 0;
      var last = this._get_elementsCount__2919979385_mqmrgn_k$();
      if (inductionVariable < last)
        do {
          var index_2 = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          if (!(this.getElementDescriptor_sqz94k_k$(index_2)._get_serialName__1025298892_gyfpos_k$() === other.getElementDescriptor_sqz94k_k$(index_2)._get_serialName__1025298892_gyfpos_k$())) {
            tmp$ret$0 = false;
            break $l$block_7;
          }
          if (!equals(this.getElementDescriptor_sqz94k_k$(index_2)._get_kind__801637687_d99vlj_k$(), other.getElementDescriptor_sqz94k_k$(index_2)._get_kind__801637687_d99vlj_k$())) {
            tmp$ret$0 = false;
            break $l$block_7;
          }
        }
         while (inductionVariable < last);
      tmp$ret$0 = true;
      break $l$block_7;
    }
    return tmp$ret$0;
  };
  PluginGeneratedSerialDescriptor.prototype.hashCode = function () {
    return _get__hashCode__1781908503_0(this);
  };
  PluginGeneratedSerialDescriptor.prototype.toString = function () {
    var tmp = _get_indices__2241594442_1(this)._get_entries__31877249_iz8n5_k$();
    var tmp_0 = this._get_serialName__1025298892_gyfpos_k$() + '(';
    return joinToString$default(tmp, ', ', tmp_0, ')', 0, null, PluginGeneratedSerialDescriptor$toString$lambda(this), 24, null);
  };
  PluginGeneratedSerialDescriptor.$metadata$ = {
    simpleName: 'PluginGeneratedSerialDescriptor',
    kind: 'class',
    interfaces: [SerialDescriptor]
  };
  function indices$factory() {
    return getPropertyCallableRef('indices', 1, KProperty1, function (receiver) {
      return _get_indices__2241594442_1(receiver);
    }, null);
  }
  function typeParameterDescriptors$factory() {
    return getPropertyCallableRef('typeParameterDescriptors', 1, KProperty1, function (receiver) {
      return _get_typeParameterDescriptors__1590510230(receiver);
    }, null);
  }
  function _hashCode$factory_0() {
    return getPropertyCallableRef('_hashCode', 1, KProperty1, function (receiver) {
      return _get__hashCode__1781908503_0(receiver);
    }, null);
  }
  function _get_EMPTY_SERIALIZER_ARRAY__3941305005() {
    init_properties_PluginHelperInterfaces_kt_1772994175();
    return EMPTY_SERIALIZER_ARRAY;
  }
  var EMPTY_SERIALIZER_ARRAY;
  function GeneratedSerializer() {
  }
  GeneratedSerializer.$metadata$ = {
    simpleName: 'GeneratedSerializer',
    kind: 'interface',
    interfaces: [KSerializer]
  };
  function SerializerFactory() {
  }
  SerializerFactory.$metadata$ = {
    simpleName: 'SerializerFactory',
    kind: 'interface',
    interfaces: []
  };
  var properties_initialized_PluginHelperInterfaces_kt_3647917731;
  function init_properties_PluginHelperInterfaces_kt_1772994175() {
    if (!properties_initialized_PluginHelperInterfaces_kt_3647917731) {
      properties_initialized_PluginHelperInterfaces_kt_3647917731 = true;
      var tmp$ret$2;
      $l$block_1: {
        var tmp$ret$1;
        $l$block_0: {
          var tmp$ret$0;
          $l$block: {
            tmp$ret$0 = [];
            break $l$block;
          }
          tmp$ret$1 = tmp$ret$0;
          break $l$block_0;
        }
        tmp$ret$2 = tmp$ret$1;
        break $l$block_1;
      }
      EMPTY_SERIALIZER_ARRAY = tmp$ret$2;
    }
  }
  function CharArraySerializer_0() {
    CharArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_2(Companion_getInstance()));
  }
  CharArraySerializer_0.prototype.collectionSize_ws33uw_k$ = function (_this__1828080292) {
    return _this__1828080292.length;
  };
  CharArraySerializer_0.prototype.collectionSize_gnp0og_k$ = function (_this__1828080292) {
    return this.collectionSize_ws33uw_k$((!(_this__1828080292 == null) ? isCharArray(_this__1828080292) : false) ? _this__1828080292 : THROW_CCE());
  };
  CharArraySerializer_0.prototype.toBuilder_waug93_k$ = function (_this__1828080292) {
    return new CharArrayBuilder(_this__1828080292);
  };
  CharArraySerializer_0.prototype.toBuilder_9n7g5t_k$ = function (_this__1828080292) {
    return this.toBuilder_waug93_k$((!(_this__1828080292 == null) ? isCharArray(_this__1828080292) : false) ? _this__1828080292 : THROW_CCE());
  };
  CharArraySerializer_0.prototype.empty_1lj7f1_k$ = function () {
    return charArray(0);
  };
  CharArraySerializer_0.prototype.readElement_le7skj_k$ = function (decoder, index, builder, checkIndex) {
    builder.append_y20c3x_k$(decoder.decodeCharElement_pg5vs7_k$(this._get_descriptor__684124924_bbb664_k$(), index));
  };
  CharArraySerializer_0.prototype.readElement_yuufx2_k$ = function (decoder, index, builder, checkIndex) {
    return this.readElement_le7skj_k$(decoder, index, builder instanceof CharArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  CharArraySerializer_0.prototype.writeContent_wscki9_k$ = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.encodeCharElement_4fawdf_k$(this._get_descriptor__684124924_bbb664_k$(), i, content[i]);
      }
       while (inductionVariable < size);
  };
  CharArraySerializer_0.prototype.writeContent_jq3j40_k$ = function (encoder, content, size) {
    return this.writeContent_wscki9_k$(encoder, (!(content == null) ? isCharArray(content) : false) ? content : THROW_CCE(), size);
  };
  CharArraySerializer_0.$metadata$ = {
    simpleName: 'CharArraySerializer',
    kind: 'object',
    interfaces: [KSerializer]
  };
  var CharArraySerializer_instance;
  function CharArraySerializer_getInstance() {
    if (CharArraySerializer_instance == null)
      new CharArraySerializer_0();
    return CharArraySerializer_instance;
  }
  function DoubleArraySerializer_0() {
    DoubleArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_3(DoubleCompanionObject_getInstance()));
  }
  DoubleArraySerializer_0.prototype.collectionSize_pzip3n_k$ = function (_this__1828080292) {
    return _this__1828080292.length;
  };
  DoubleArraySerializer_0.prototype.collectionSize_gnp0og_k$ = function (_this__1828080292) {
    return this.collectionSize_pzip3n_k$((!(_this__1828080292 == null) ? isDoubleArray(_this__1828080292) : false) ? _this__1828080292 : THROW_CCE());
  };
  DoubleArraySerializer_0.prototype.toBuilder_b07jn0_k$ = function (_this__1828080292) {
    return new DoubleArrayBuilder(_this__1828080292);
  };
  DoubleArraySerializer_0.prototype.toBuilder_9n7g5t_k$ = function (_this__1828080292) {
    return this.toBuilder_b07jn0_k$((!(_this__1828080292 == null) ? isDoubleArray(_this__1828080292) : false) ? _this__1828080292 : THROW_CCE());
  };
  DoubleArraySerializer_0.prototype.empty_1lj7f1_k$ = function () {
    return new Float64Array(0);
  };
  DoubleArraySerializer_0.prototype.readElement_g1li9q_k$ = function (decoder, index, builder, checkIndex) {
    builder.append_g44bp4_k$(decoder.decodeDoubleElement_42w6gz_k$(this._get_descriptor__684124924_bbb664_k$(), index));
  };
  DoubleArraySerializer_0.prototype.readElement_yuufx2_k$ = function (decoder, index, builder, checkIndex) {
    return this.readElement_g1li9q_k$(decoder, index, builder instanceof DoubleArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  DoubleArraySerializer_0.prototype.writeContent_xk6378_k$ = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.encodeDoubleElement_m8xcw3_k$(this._get_descriptor__684124924_bbb664_k$(), i, content[i]);
      }
       while (inductionVariable < size);
  };
  DoubleArraySerializer_0.prototype.writeContent_jq3j40_k$ = function (encoder, content, size) {
    return this.writeContent_xk6378_k$(encoder, (!(content == null) ? isDoubleArray(content) : false) ? content : THROW_CCE(), size);
  };
  DoubleArraySerializer_0.$metadata$ = {
    simpleName: 'DoubleArraySerializer',
    kind: 'object',
    interfaces: [KSerializer]
  };
  var DoubleArraySerializer_instance;
  function DoubleArraySerializer_getInstance() {
    if (DoubleArraySerializer_instance == null)
      new DoubleArraySerializer_0();
    return DoubleArraySerializer_instance;
  }
  function FloatArraySerializer_0() {
    FloatArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_4(FloatCompanionObject_getInstance()));
  }
  FloatArraySerializer_0.prototype.collectionSize_173jc8_k$ = function (_this__1828080292) {
    return _this__1828080292.length;
  };
  FloatArraySerializer_0.prototype.collectionSize_gnp0og_k$ = function (_this__1828080292) {
    return this.collectionSize_173jc8_k$((!(_this__1828080292 == null) ? isFloatArray(_this__1828080292) : false) ? _this__1828080292 : THROW_CCE());
  };
  FloatArraySerializer_0.prototype.toBuilder_g1jv47_k$ = function (_this__1828080292) {
    return new FloatArrayBuilder(_this__1828080292);
  };
  FloatArraySerializer_0.prototype.toBuilder_9n7g5t_k$ = function (_this__1828080292) {
    return this.toBuilder_g1jv47_k$((!(_this__1828080292 == null) ? isFloatArray(_this__1828080292) : false) ? _this__1828080292 : THROW_CCE());
  };
  FloatArraySerializer_0.prototype.empty_1lj7f1_k$ = function () {
    return new Float32Array(0);
  };
  FloatArraySerializer_0.prototype.readElement_x45ji7_k$ = function (decoder, index, builder, checkIndex) {
    builder.append_urs3el_k$(decoder.decodeFloatElement_nl5jiq_k$(this._get_descriptor__684124924_bbb664_k$(), index));
  };
  FloatArraySerializer_0.prototype.readElement_yuufx2_k$ = function (decoder, index, builder, checkIndex) {
    return this.readElement_x45ji7_k$(decoder, index, builder instanceof FloatArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  FloatArraySerializer_0.prototype.writeContent_z7nd2p_k$ = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.encodeFloatElement_o97mfb_k$(this._get_descriptor__684124924_bbb664_k$(), i, content[i]);
      }
       while (inductionVariable < size);
  };
  FloatArraySerializer_0.prototype.writeContent_jq3j40_k$ = function (encoder, content, size) {
    return this.writeContent_z7nd2p_k$(encoder, (!(content == null) ? isFloatArray(content) : false) ? content : THROW_CCE(), size);
  };
  FloatArraySerializer_0.$metadata$ = {
    simpleName: 'FloatArraySerializer',
    kind: 'object',
    interfaces: [KSerializer]
  };
  var FloatArraySerializer_instance;
  function FloatArraySerializer_getInstance() {
    if (FloatArraySerializer_instance == null)
      new FloatArraySerializer_0();
    return FloatArraySerializer_instance;
  }
  function LongArraySerializer_0() {
    LongArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_5(Companion_getInstance_0()));
  }
  LongArraySerializer_0.prototype.collectionSize_91vysi_k$ = function (_this__1828080292) {
    return _this__1828080292.length;
  };
  LongArraySerializer_0.prototype.collectionSize_gnp0og_k$ = function (_this__1828080292) {
    return this.collectionSize_91vysi_k$((!(_this__1828080292 == null) ? isLongArray(_this__1828080292) : false) ? _this__1828080292 : THROW_CCE());
  };
  LongArraySerializer_0.prototype.toBuilder_8knb6p_k$ = function (_this__1828080292) {
    return new LongArrayBuilder(_this__1828080292);
  };
  LongArraySerializer_0.prototype.toBuilder_9n7g5t_k$ = function (_this__1828080292) {
    return this.toBuilder_8knb6p_k$((!(_this__1828080292 == null) ? isLongArray(_this__1828080292) : false) ? _this__1828080292 : THROW_CCE());
  };
  LongArraySerializer_0.prototype.empty_1lj7f1_k$ = function () {
    return longArray(0);
  };
  LongArraySerializer_0.prototype.readElement_qrifnb_k$ = function (decoder, index, builder, checkIndex) {
    builder.append_gvce4t_k$(decoder.decodeLongElement_kyznym_k$(this._get_descriptor__684124924_bbb664_k$(), index));
  };
  LongArraySerializer_0.prototype.readElement_yuufx2_k$ = function (decoder, index, builder, checkIndex) {
    return this.readElement_qrifnb_k$(decoder, index, builder instanceof LongArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  LongArraySerializer_0.prototype.writeContent_42fxmf_k$ = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.encodeLongElement_xtv8il_k$(this._get_descriptor__684124924_bbb664_k$(), i, content[i]);
      }
       while (inductionVariable < size);
  };
  LongArraySerializer_0.prototype.writeContent_jq3j40_k$ = function (encoder, content, size) {
    return this.writeContent_42fxmf_k$(encoder, (!(content == null) ? isLongArray(content) : false) ? content : THROW_CCE(), size);
  };
  LongArraySerializer_0.$metadata$ = {
    simpleName: 'LongArraySerializer',
    kind: 'object',
    interfaces: [KSerializer]
  };
  var LongArraySerializer_instance;
  function LongArraySerializer_getInstance() {
    if (LongArraySerializer_instance == null)
      new LongArraySerializer_0();
    return LongArraySerializer_instance;
  }
  function IntArraySerializer_0() {
    IntArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_6(IntCompanionObject_getInstance()));
  }
  IntArraySerializer_0.prototype.collectionSize_p5ta3p_k$ = function (_this__1828080292) {
    return _this__1828080292.length;
  };
  IntArraySerializer_0.prototype.collectionSize_gnp0og_k$ = function (_this__1828080292) {
    return this.collectionSize_p5ta3p_k$((!(_this__1828080292 == null) ? isIntArray(_this__1828080292) : false) ? _this__1828080292 : THROW_CCE());
  };
  IntArraySerializer_0.prototype.toBuilder_murpja_k$ = function (_this__1828080292) {
    return new IntArrayBuilder(_this__1828080292);
  };
  IntArraySerializer_0.prototype.toBuilder_9n7g5t_k$ = function (_this__1828080292) {
    return this.toBuilder_murpja_k$((!(_this__1828080292 == null) ? isIntArray(_this__1828080292) : false) ? _this__1828080292 : THROW_CCE());
  };
  IntArraySerializer_0.prototype.empty_1lj7f1_k$ = function () {
    return new Int32Array(0);
  };
  IntArraySerializer_0.prototype.readElement_q2v34c_k$ = function (decoder, index, builder, checkIndex) {
    builder.append_da0tyi_k$(decoder.decodeIntElement_cmpvet_k$(this._get_descriptor__684124924_bbb664_k$(), index));
  };
  IntArraySerializer_0.prototype.readElement_yuufx2_k$ = function (decoder, index, builder, checkIndex) {
    return this.readElement_q2v34c_k$(decoder, index, builder instanceof IntArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  IntArraySerializer_0.prototype.writeContent_h3vxwe_k$ = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.encodeIntElement_utywpf_k$(this._get_descriptor__684124924_bbb664_k$(), i, content[i]);
      }
       while (inductionVariable < size);
  };
  IntArraySerializer_0.prototype.writeContent_jq3j40_k$ = function (encoder, content, size) {
    return this.writeContent_h3vxwe_k$(encoder, (!(content == null) ? isIntArray(content) : false) ? content : THROW_CCE(), size);
  };
  IntArraySerializer_0.$metadata$ = {
    simpleName: 'IntArraySerializer',
    kind: 'object',
    interfaces: [KSerializer]
  };
  var IntArraySerializer_instance;
  function IntArraySerializer_getInstance() {
    if (IntArraySerializer_instance == null)
      new IntArraySerializer_0();
    return IntArraySerializer_instance;
  }
  function ShortArraySerializer_0() {
    ShortArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_7(ShortCompanionObject_getInstance()));
  }
  ShortArraySerializer_0.prototype.collectionSize_tiggjs_k$ = function (_this__1828080292) {
    return _this__1828080292.length;
  };
  ShortArraySerializer_0.prototype.collectionSize_gnp0og_k$ = function (_this__1828080292) {
    return this.collectionSize_tiggjs_k$((!(_this__1828080292 == null) ? isShortArray(_this__1828080292) : false) ? _this__1828080292 : THROW_CCE());
  };
  ShortArraySerializer_0.prototype.toBuilder_qo79nd_k$ = function (_this__1828080292) {
    return new ShortArrayBuilder(_this__1828080292);
  };
  ShortArraySerializer_0.prototype.toBuilder_9n7g5t_k$ = function (_this__1828080292) {
    return this.toBuilder_qo79nd_k$((!(_this__1828080292 == null) ? isShortArray(_this__1828080292) : false) ? _this__1828080292 : THROW_CCE());
  };
  ShortArraySerializer_0.prototype.empty_1lj7f1_k$ = function () {
    return new Int16Array(0);
  };
  ShortArraySerializer_0.prototype.readElement_btg9b5_k$ = function (decoder, index, builder, checkIndex) {
    builder.append_piqb6l_k$(decoder.decodeShortElement_zjkfm_k$(this._get_descriptor__684124924_bbb664_k$(), index));
  };
  ShortArraySerializer_0.prototype.readElement_yuufx2_k$ = function (decoder, index, builder, checkIndex) {
    return this.readElement_btg9b5_k$(decoder, index, builder instanceof ShortArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  ShortArraySerializer_0.prototype.writeContent_i3wixd_k$ = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.encodeShortElement_2nnlvd_k$(this._get_descriptor__684124924_bbb664_k$(), i, content[i]);
      }
       while (inductionVariable < size);
  };
  ShortArraySerializer_0.prototype.writeContent_jq3j40_k$ = function (encoder, content, size) {
    return this.writeContent_i3wixd_k$(encoder, (!(content == null) ? isShortArray(content) : false) ? content : THROW_CCE(), size);
  };
  ShortArraySerializer_0.$metadata$ = {
    simpleName: 'ShortArraySerializer',
    kind: 'object',
    interfaces: [KSerializer]
  };
  var ShortArraySerializer_instance;
  function ShortArraySerializer_getInstance() {
    if (ShortArraySerializer_instance == null)
      new ShortArraySerializer_0();
    return ShortArraySerializer_instance;
  }
  function ByteArraySerializer_0() {
    ByteArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_8(ByteCompanionObject_getInstance()));
  }
  ByteArraySerializer_0.prototype.collectionSize_qzl5wq_k$ = function (_this__1828080292) {
    return _this__1828080292.length;
  };
  ByteArraySerializer_0.prototype.collectionSize_gnp0og_k$ = function (_this__1828080292) {
    return this.collectionSize_qzl5wq_k$((!(_this__1828080292 == null) ? isByteArray(_this__1828080292) : false) ? _this__1828080292 : THROW_CCE());
  };
  ByteArraySerializer_0.prototype.toBuilder_rgttij_k$ = function (_this__1828080292) {
    return new ByteArrayBuilder(_this__1828080292);
  };
  ByteArraySerializer_0.prototype.toBuilder_9n7g5t_k$ = function (_this__1828080292) {
    return this.toBuilder_rgttij_k$((!(_this__1828080292 == null) ? isByteArray(_this__1828080292) : false) ? _this__1828080292 : THROW_CCE());
  };
  ByteArraySerializer_0.prototype.empty_1lj7f1_k$ = function () {
    return new Int8Array(0);
  };
  ByteArraySerializer_0.prototype.readElement_9ieobv_k$ = function (decoder, index, builder, checkIndex) {
    builder.append_jiz7k1_k$(decoder.decodeByteElement_76b0gq_k$(this._get_descriptor__684124924_bbb664_k$(), index));
  };
  ByteArraySerializer_0.prototype.readElement_yuufx2_k$ = function (decoder, index, builder, checkIndex) {
    return this.readElement_9ieobv_k$(decoder, index, builder instanceof ByteArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  ByteArraySerializer_0.prototype.writeContent_16s3nh_k$ = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.encodeByteElement_r2fm3n_k$(this._get_descriptor__684124924_bbb664_k$(), i, content[i]);
      }
       while (inductionVariable < size);
  };
  ByteArraySerializer_0.prototype.writeContent_jq3j40_k$ = function (encoder, content, size) {
    return this.writeContent_16s3nh_k$(encoder, (!(content == null) ? isByteArray(content) : false) ? content : THROW_CCE(), size);
  };
  ByteArraySerializer_0.$metadata$ = {
    simpleName: 'ByteArraySerializer',
    kind: 'object',
    interfaces: [KSerializer]
  };
  var ByteArraySerializer_instance;
  function ByteArraySerializer_getInstance() {
    if (ByteArraySerializer_instance == null)
      new ByteArraySerializer_0();
    return ByteArraySerializer_instance;
  }
  function BooleanArraySerializer_0() {
    BooleanArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_9(BooleanCompanionObject_getInstance()));
  }
  BooleanArraySerializer_0.prototype.collectionSize_keckzw_k$ = function (_this__1828080292) {
    return _this__1828080292.length;
  };
  BooleanArraySerializer_0.prototype.collectionSize_gnp0og_k$ = function (_this__1828080292) {
    return this.collectionSize_keckzw_k$((!(_this__1828080292 == null) ? isBooleanArray(_this__1828080292) : false) ? _this__1828080292 : THROW_CCE());
  };
  BooleanArraySerializer_0.prototype.toBuilder_uo58bx_k$ = function (_this__1828080292) {
    return new BooleanArrayBuilder(_this__1828080292);
  };
  BooleanArraySerializer_0.prototype.toBuilder_9n7g5t_k$ = function (_this__1828080292) {
    return this.toBuilder_uo58bx_k$((!(_this__1828080292 == null) ? isBooleanArray(_this__1828080292) : false) ? _this__1828080292 : THROW_CCE());
  };
  BooleanArraySerializer_0.prototype.empty_1lj7f1_k$ = function () {
    return booleanArray(0);
  };
  BooleanArraySerializer_0.prototype.readElement_kzf5fx_k$ = function (decoder, index, builder, checkIndex) {
    builder.append_l5nnnz_k$(decoder.decodeBooleanElement_3vswy_k$(this._get_descriptor__684124924_bbb664_k$(), index));
  };
  BooleanArraySerializer_0.prototype.readElement_yuufx2_k$ = function (decoder, index, builder, checkIndex) {
    return this.readElement_kzf5fx_k$(decoder, index, builder instanceof BooleanArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  BooleanArraySerializer_0.prototype.writeContent_j8grad_k$ = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.encodeBooleanElement_2l5aov_k$(this._get_descriptor__684124924_bbb664_k$(), i, content[i]);
      }
       while (inductionVariable < size);
  };
  BooleanArraySerializer_0.prototype.writeContent_jq3j40_k$ = function (encoder, content, size) {
    return this.writeContent_j8grad_k$(encoder, (!(content == null) ? isBooleanArray(content) : false) ? content : THROW_CCE(), size);
  };
  BooleanArraySerializer_0.$metadata$ = {
    simpleName: 'BooleanArraySerializer',
    kind: 'object',
    interfaces: [KSerializer]
  };
  var BooleanArraySerializer_instance;
  function BooleanArraySerializer_getInstance() {
    if (BooleanArraySerializer_instance == null)
      new BooleanArraySerializer_0();
    return BooleanArraySerializer_instance;
  }
  function _set_buffer__2424755159($this, _set____804775014) {
    $this.buffer_1 = _set____804775014;
  }
  function _get_buffer__2513334987($this) {
    return $this.buffer_1;
  }
  function _set_position__3963083214($this, _set____804775014) {
    $this.position_1 = _set____804775014;
  }
  function CharArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.buffer_1 = bufferWithData;
    this.position_1 = bufferWithData.length;
    this.ensureCapacity_ignus8_k$(10);
  }
  CharArrayBuilder.prototype._get_position__3188952002_iahqv2_k$ = function () {
    return this.position_1;
  };
  CharArrayBuilder.prototype.ensureCapacity_ignus8_k$ = function (requiredCapacity) {
    if (this.buffer_1.length < requiredCapacity)
      this.buffer_1 = copyOf(this.buffer_1, coerceAtLeast(requiredCapacity, imul(this.buffer_1.length, 2)));
  };
  CharArrayBuilder.prototype.append_y20c3x_k$ = function (c) {
    this.ensureCapacity$default_ya9857_k$(0, 1, null);
    var tmp = this.buffer_1;
    var tmp0_this = this;
    var tmp1 = tmp0_this.position_1;
    tmp0_this.position_1 = tmp1 + 1 | 0;
    tmp[tmp1] = c;
  };
  CharArrayBuilder.prototype.build_1k0s4u_k$ = function () {
    return copyOf(this.buffer_1, this.position_1);
  };
  CharArrayBuilder.$metadata$ = {
    simpleName: 'CharArrayBuilder',
    kind: 'class',
    interfaces: []
  };
  function _set_buffer__2424755159_0($this, _set____804775014) {
    $this.buffer_1 = _set____804775014;
  }
  function _get_buffer__2513334987_0($this) {
    return $this.buffer_1;
  }
  function _set_position__3963083214_0($this, _set____804775014) {
    $this.position_1 = _set____804775014;
  }
  function DoubleArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.buffer_1 = bufferWithData;
    this.position_1 = bufferWithData.length;
    this.ensureCapacity_ignus8_k$(10);
  }
  DoubleArrayBuilder.prototype._get_position__3188952002_iahqv2_k$ = function () {
    return this.position_1;
  };
  DoubleArrayBuilder.prototype.ensureCapacity_ignus8_k$ = function (requiredCapacity) {
    if (this.buffer_1.length < requiredCapacity)
      this.buffer_1 = copyOf_0(this.buffer_1, coerceAtLeast(requiredCapacity, imul(this.buffer_1.length, 2)));
  };
  DoubleArrayBuilder.prototype.append_g44bp4_k$ = function (c) {
    this.ensureCapacity$default_ya9857_k$(0, 1, null);
    var tmp = this.buffer_1;
    var tmp0_this = this;
    var tmp1 = tmp0_this.position_1;
    tmp0_this.position_1 = tmp1 + 1 | 0;
    tmp[tmp1] = c;
  };
  DoubleArrayBuilder.prototype.build_1k0s4u_k$ = function () {
    return copyOf_0(this.buffer_1, this.position_1);
  };
  DoubleArrayBuilder.$metadata$ = {
    simpleName: 'DoubleArrayBuilder',
    kind: 'class',
    interfaces: []
  };
  function _set_buffer__2424755159_1($this, _set____804775014) {
    $this.buffer_1 = _set____804775014;
  }
  function _get_buffer__2513334987_1($this) {
    return $this.buffer_1;
  }
  function _set_position__3963083214_1($this, _set____804775014) {
    $this.position_1 = _set____804775014;
  }
  function FloatArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.buffer_1 = bufferWithData;
    this.position_1 = bufferWithData.length;
    this.ensureCapacity_ignus8_k$(10);
  }
  FloatArrayBuilder.prototype._get_position__3188952002_iahqv2_k$ = function () {
    return this.position_1;
  };
  FloatArrayBuilder.prototype.ensureCapacity_ignus8_k$ = function (requiredCapacity) {
    if (this.buffer_1.length < requiredCapacity)
      this.buffer_1 = copyOf_1(this.buffer_1, coerceAtLeast(requiredCapacity, imul(this.buffer_1.length, 2)));
  };
  FloatArrayBuilder.prototype.append_urs3el_k$ = function (c) {
    this.ensureCapacity$default_ya9857_k$(0, 1, null);
    var tmp = this.buffer_1;
    var tmp0_this = this;
    var tmp1 = tmp0_this.position_1;
    tmp0_this.position_1 = tmp1 + 1 | 0;
    tmp[tmp1] = c;
  };
  FloatArrayBuilder.prototype.build_1k0s4u_k$ = function () {
    return copyOf_1(this.buffer_1, this.position_1);
  };
  FloatArrayBuilder.$metadata$ = {
    simpleName: 'FloatArrayBuilder',
    kind: 'class',
    interfaces: []
  };
  function _set_buffer__2424755159_2($this, _set____804775014) {
    $this.buffer_1 = _set____804775014;
  }
  function _get_buffer__2513334987_2($this) {
    return $this.buffer_1;
  }
  function _set_position__3963083214_2($this, _set____804775014) {
    $this.position_1 = _set____804775014;
  }
  function LongArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.buffer_1 = bufferWithData;
    this.position_1 = bufferWithData.length;
    this.ensureCapacity_ignus8_k$(10);
  }
  LongArrayBuilder.prototype._get_position__3188952002_iahqv2_k$ = function () {
    return this.position_1;
  };
  LongArrayBuilder.prototype.ensureCapacity_ignus8_k$ = function (requiredCapacity) {
    if (this.buffer_1.length < requiredCapacity)
      this.buffer_1 = copyOf_2(this.buffer_1, coerceAtLeast(requiredCapacity, imul(this.buffer_1.length, 2)));
  };
  LongArrayBuilder.prototype.append_gvce4t_k$ = function (c) {
    this.ensureCapacity$default_ya9857_k$(0, 1, null);
    var tmp = this.buffer_1;
    var tmp0_this = this;
    var tmp1 = tmp0_this.position_1;
    tmp0_this.position_1 = tmp1 + 1 | 0;
    tmp[tmp1] = c;
  };
  LongArrayBuilder.prototype.build_1k0s4u_k$ = function () {
    return copyOf_2(this.buffer_1, this.position_1);
  };
  LongArrayBuilder.$metadata$ = {
    simpleName: 'LongArrayBuilder',
    kind: 'class',
    interfaces: []
  };
  function _set_buffer__2424755159_3($this, _set____804775014) {
    $this.buffer_1 = _set____804775014;
  }
  function _get_buffer__2513334987_3($this) {
    return $this.buffer_1;
  }
  function _set_position__3963083214_3($this, _set____804775014) {
    $this.position_1 = _set____804775014;
  }
  function IntArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.buffer_1 = bufferWithData;
    this.position_1 = bufferWithData.length;
    this.ensureCapacity_ignus8_k$(10);
  }
  IntArrayBuilder.prototype._get_position__3188952002_iahqv2_k$ = function () {
    return this.position_1;
  };
  IntArrayBuilder.prototype.ensureCapacity_ignus8_k$ = function (requiredCapacity) {
    if (this.buffer_1.length < requiredCapacity)
      this.buffer_1 = copyOf_3(this.buffer_1, coerceAtLeast(requiredCapacity, imul(this.buffer_1.length, 2)));
  };
  IntArrayBuilder.prototype.append_da0tyi_k$ = function (c) {
    this.ensureCapacity$default_ya9857_k$(0, 1, null);
    var tmp = this.buffer_1;
    var tmp0_this = this;
    var tmp1 = tmp0_this.position_1;
    tmp0_this.position_1 = tmp1 + 1 | 0;
    tmp[tmp1] = c;
  };
  IntArrayBuilder.prototype.build_1k0s4u_k$ = function () {
    return copyOf_3(this.buffer_1, this.position_1);
  };
  IntArrayBuilder.$metadata$ = {
    simpleName: 'IntArrayBuilder',
    kind: 'class',
    interfaces: []
  };
  function _set_buffer__2424755159_4($this, _set____804775014) {
    $this.buffer_1 = _set____804775014;
  }
  function _get_buffer__2513334987_4($this) {
    return $this.buffer_1;
  }
  function _set_position__3963083214_4($this, _set____804775014) {
    $this.position_1 = _set____804775014;
  }
  function ShortArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.buffer_1 = bufferWithData;
    this.position_1 = bufferWithData.length;
    this.ensureCapacity_ignus8_k$(10);
  }
  ShortArrayBuilder.prototype._get_position__3188952002_iahqv2_k$ = function () {
    return this.position_1;
  };
  ShortArrayBuilder.prototype.ensureCapacity_ignus8_k$ = function (requiredCapacity) {
    if (this.buffer_1.length < requiredCapacity)
      this.buffer_1 = copyOf_4(this.buffer_1, coerceAtLeast(requiredCapacity, imul(this.buffer_1.length, 2)));
  };
  ShortArrayBuilder.prototype.append_piqb6l_k$ = function (c) {
    this.ensureCapacity$default_ya9857_k$(0, 1, null);
    var tmp = this.buffer_1;
    var tmp0_this = this;
    var tmp1 = tmp0_this.position_1;
    tmp0_this.position_1 = tmp1 + 1 | 0;
    tmp[tmp1] = c;
  };
  ShortArrayBuilder.prototype.build_1k0s4u_k$ = function () {
    return copyOf_4(this.buffer_1, this.position_1);
  };
  ShortArrayBuilder.$metadata$ = {
    simpleName: 'ShortArrayBuilder',
    kind: 'class',
    interfaces: []
  };
  function _set_buffer__2424755159_5($this, _set____804775014) {
    $this.buffer_1 = _set____804775014;
  }
  function _get_buffer__2513334987_5($this) {
    return $this.buffer_1;
  }
  function _set_position__3963083214_5($this, _set____804775014) {
    $this.position_1 = _set____804775014;
  }
  function ByteArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.buffer_1 = bufferWithData;
    this.position_1 = bufferWithData.length;
    this.ensureCapacity_ignus8_k$(10);
  }
  ByteArrayBuilder.prototype._get_position__3188952002_iahqv2_k$ = function () {
    return this.position_1;
  };
  ByteArrayBuilder.prototype.ensureCapacity_ignus8_k$ = function (requiredCapacity) {
    if (this.buffer_1.length < requiredCapacity)
      this.buffer_1 = copyOf_5(this.buffer_1, coerceAtLeast(requiredCapacity, imul(this.buffer_1.length, 2)));
  };
  ByteArrayBuilder.prototype.append_jiz7k1_k$ = function (c) {
    this.ensureCapacity$default_ya9857_k$(0, 1, null);
    var tmp = this.buffer_1;
    var tmp0_this = this;
    var tmp1 = tmp0_this.position_1;
    tmp0_this.position_1 = tmp1 + 1 | 0;
    tmp[tmp1] = c;
  };
  ByteArrayBuilder.prototype.build_1k0s4u_k$ = function () {
    return copyOf_5(this.buffer_1, this.position_1);
  };
  ByteArrayBuilder.$metadata$ = {
    simpleName: 'ByteArrayBuilder',
    kind: 'class',
    interfaces: []
  };
  function _set_buffer__2424755159_6($this, _set____804775014) {
    $this.buffer_1 = _set____804775014;
  }
  function _get_buffer__2513334987_6($this) {
    return $this.buffer_1;
  }
  function _set_position__3963083214_6($this, _set____804775014) {
    $this.position_1 = _set____804775014;
  }
  function BooleanArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.buffer_1 = bufferWithData;
    this.position_1 = bufferWithData.length;
    this.ensureCapacity_ignus8_k$(10);
  }
  BooleanArrayBuilder.prototype._get_position__3188952002_iahqv2_k$ = function () {
    return this.position_1;
  };
  BooleanArrayBuilder.prototype.ensureCapacity_ignus8_k$ = function (requiredCapacity) {
    if (this.buffer_1.length < requiredCapacity)
      this.buffer_1 = copyOf_6(this.buffer_1, coerceAtLeast(requiredCapacity, imul(this.buffer_1.length, 2)));
  };
  BooleanArrayBuilder.prototype.append_l5nnnz_k$ = function (c) {
    this.ensureCapacity$default_ya9857_k$(0, 1, null);
    var tmp = this.buffer_1;
    var tmp0_this = this;
    var tmp1 = tmp0_this.position_1;
    tmp0_this.position_1 = tmp1 + 1 | 0;
    tmp[tmp1] = c;
  };
  BooleanArrayBuilder.prototype.build_1k0s4u_k$ = function () {
    return copyOf_6(this.buffer_1, this.position_1);
  };
  BooleanArrayBuilder.$metadata$ = {
    simpleName: 'BooleanArrayBuilder',
    kind: 'class',
    interfaces: []
  };
  function _get_INITIAL_SIZE__3961910415() {
    return INITIAL_SIZE;
  }
  var INITIAL_SIZE;
  function _get_BUILTIN_SERIALIZERS__2271679596() {
    init_properties_Primitives_kt_2468588270();
    return BUILTIN_SERIALIZERS;
  }
  var BUILTIN_SERIALIZERS;
  function StringSerializer() {
    StringSerializer_instance = this;
    this.descriptor_1 = new PrimitiveSerialDescriptor_0('kotlin.String', STRING_getInstance());
  }
  StringSerializer.prototype._get_descriptor__684124924_bbb664_k$ = function () {
    return this.descriptor_1;
  };
  StringSerializer.prototype.serialize_xxlebn_k$ = function (encoder, value) {
    return encoder.encodeString_90sumj_k$(value);
  };
  StringSerializer.prototype.serialize_32qylj_k$ = function (encoder, value) {
    return this.serialize_xxlebn_k$(encoder, (!(value == null) ? typeof value === 'string' : false) ? value : THROW_CCE());
  };
  StringSerializer.prototype.deserialize_2t41fm_k$ = function (decoder) {
    return decoder.decodeString_x3hxsx_k$();
  };
  StringSerializer.$metadata$ = {
    simpleName: 'StringSerializer',
    kind: 'object',
    interfaces: [KSerializer]
  };
  var StringSerializer_instance;
  function StringSerializer_getInstance() {
    if (StringSerializer_instance == null)
      new StringSerializer();
    return StringSerializer_instance;
  }
  function CharSerializer() {
    CharSerializer_instance = this;
    this.descriptor_1 = new PrimitiveSerialDescriptor_0('kotlin.Char', CHAR_getInstance());
  }
  CharSerializer.prototype._get_descriptor__684124924_bbb664_k$ = function () {
    return this.descriptor_1;
  };
  CharSerializer.prototype.serialize_t91c8o_k$ = function (encoder, value) {
    return encoder.encodeChar_kkx54x_k$(value);
  };
  CharSerializer.prototype.serialize_32qylj_k$ = function (encoder, value) {
    return this.serialize_t91c8o_k$(encoder, value instanceof Char ? value.value_1 : THROW_CCE());
  };
  CharSerializer.prototype.deserialize_a5cptt_k$ = function (decoder) {
    return decoder.decodeChar_dc2jtx_k$();
  };
  CharSerializer.prototype.deserialize_2t41fm_k$ = function (decoder) {
    return new Char(this.deserialize_a5cptt_k$(decoder));
  };
  CharSerializer.$metadata$ = {
    simpleName: 'CharSerializer',
    kind: 'object',
    interfaces: [KSerializer]
  };
  var CharSerializer_instance;
  function CharSerializer_getInstance() {
    if (CharSerializer_instance == null)
      new CharSerializer();
    return CharSerializer_instance;
  }
  function DoubleSerializer() {
    DoubleSerializer_instance = this;
    this.descriptor_1 = new PrimitiveSerialDescriptor_0('kotlin.Double', DOUBLE_getInstance());
  }
  DoubleSerializer.prototype._get_descriptor__684124924_bbb664_k$ = function () {
    return this.descriptor_1;
  };
  DoubleSerializer.prototype.serialize_jhnp8j_k$ = function (encoder, value) {
    return encoder.encodeDouble_79ztsb_k$(value);
  };
  DoubleSerializer.prototype.serialize_32qylj_k$ = function (encoder, value) {
    return this.serialize_jhnp8j_k$(encoder, (!(value == null) ? typeof value === 'number' : false) ? value : THROW_CCE());
  };
  DoubleSerializer.prototype.deserialize_2t41fm_k$ = function (decoder) {
    return decoder.decodeDouble_ur8l0f_k$();
  };
  DoubleSerializer.$metadata$ = {
    simpleName: 'DoubleSerializer',
    kind: 'object',
    interfaces: [KSerializer]
  };
  var DoubleSerializer_instance;
  function DoubleSerializer_getInstance() {
    if (DoubleSerializer_instance == null)
      new DoubleSerializer();
    return DoubleSerializer_instance;
  }
  function FloatSerializer() {
    FloatSerializer_instance = this;
    this.descriptor_1 = new PrimitiveSerialDescriptor_0('kotlin.Float', FLOAT_getInstance());
  }
  FloatSerializer.prototype._get_descriptor__684124924_bbb664_k$ = function () {
    return this.descriptor_1;
  };
  FloatSerializer.prototype.serialize_4f2ixk_k$ = function (encoder, value) {
    return encoder.encodeFloat_f5fde1_k$(value);
  };
  FloatSerializer.prototype.serialize_32qylj_k$ = function (encoder, value) {
    return this.serialize_4f2ixk_k$(encoder, (!(value == null) ? typeof value === 'number' : false) ? value : THROW_CCE());
  };
  FloatSerializer.prototype.deserialize_2t41fm_k$ = function (decoder) {
    return decoder.decodeFloat_jcnrwu_k$();
  };
  FloatSerializer.$metadata$ = {
    simpleName: 'FloatSerializer',
    kind: 'object',
    interfaces: [KSerializer]
  };
  var FloatSerializer_instance;
  function FloatSerializer_getInstance() {
    if (FloatSerializer_instance == null)
      new FloatSerializer();
    return FloatSerializer_instance;
  }
  function LongSerializer() {
    LongSerializer_instance = this;
    this.descriptor_1 = new PrimitiveSerialDescriptor_0('kotlin.Long', LONG_getInstance());
  }
  LongSerializer.prototype._get_descriptor__684124924_bbb664_k$ = function () {
    return this.descriptor_1;
  };
  LongSerializer.prototype.serialize_95a0ia_k$ = function (encoder, value) {
    return encoder.encodeLong_rk3ab9_k$(value);
  };
  LongSerializer.prototype.serialize_32qylj_k$ = function (encoder, value) {
    return this.serialize_95a0ia_k$(encoder, value instanceof Long ? value : THROW_CCE());
  };
  LongSerializer.prototype.deserialize_2t41fm_k$ = function (decoder) {
    return decoder.decodeLong_jzt186_k$();
  };
  LongSerializer.$metadata$ = {
    simpleName: 'LongSerializer',
    kind: 'object',
    interfaces: [KSerializer]
  };
  var LongSerializer_instance;
  function LongSerializer_getInstance() {
    if (LongSerializer_instance == null)
      new LongSerializer();
    return LongSerializer_instance;
  }
  function IntSerializer() {
    IntSerializer_instance = this;
    this.descriptor_1 = new PrimitiveSerialDescriptor_0('kotlin.Int', INT_getInstance());
  }
  IntSerializer.prototype._get_descriptor__684124924_bbb664_k$ = function () {
    return this.descriptor_1;
  };
  IntSerializer.prototype.serialize_ui7jaz_k$ = function (encoder, value) {
    return encoder.encodeInt_5vxmon_k$(value);
  };
  IntSerializer.prototype.serialize_32qylj_k$ = function (encoder, value) {
    return this.serialize_ui7jaz_k$(encoder, (!(value == null) ? typeof value === 'number' : false) ? value : THROW_CCE());
  };
  IntSerializer.prototype.deserialize_2t41fm_k$ = function (decoder) {
    return decoder.decodeInt_8iq8f5_k$();
  };
  IntSerializer.$metadata$ = {
    simpleName: 'IntSerializer',
    kind: 'object',
    interfaces: [KSerializer]
  };
  var IntSerializer_instance;
  function IntSerializer_getInstance() {
    if (IntSerializer_instance == null)
      new IntSerializer();
    return IntSerializer_instance;
  }
  function ShortSerializer() {
    ShortSerializer_instance = this;
    this.descriptor_1 = new PrimitiveSerialDescriptor_0('kotlin.Short', SHORT_getInstance());
  }
  ShortSerializer.prototype._get_descriptor__684124924_bbb664_k$ = function () {
    return this.descriptor_1;
  };
  ShortSerializer.prototype.serialize_tz9ag_k$ = function (encoder, value) {
    return encoder.encodeShort_rh3vxz_k$(value);
  };
  ShortSerializer.prototype.serialize_32qylj_k$ = function (encoder, value) {
    return this.serialize_tz9ag_k$(encoder, (!(value == null) ? typeof value === 'number' : false) ? value : THROW_CCE());
  };
  ShortSerializer.prototype.deserialize_2t41fm_k$ = function (decoder) {
    return decoder.decodeShort_jjqk32_k$();
  };
  ShortSerializer.$metadata$ = {
    simpleName: 'ShortSerializer',
    kind: 'object',
    interfaces: [KSerializer]
  };
  var ShortSerializer_instance;
  function ShortSerializer_getInstance() {
    if (ShortSerializer_instance == null)
      new ShortSerializer();
    return ShortSerializer_instance;
  }
  function ByteSerializer() {
    ByteSerializer_instance = this;
    this.descriptor_1 = new PrimitiveSerialDescriptor_0('kotlin.Byte', BYTE_getInstance());
  }
  ByteSerializer.prototype._get_descriptor__684124924_bbb664_k$ = function () {
    return this.descriptor_1;
  };
  ByteSerializer.prototype.serialize_bswtxi_k$ = function (encoder, value) {
    return encoder.encodeByte_gpyndp_k$(value);
  };
  ByteSerializer.prototype.serialize_32qylj_k$ = function (encoder, value) {
    return this.serialize_bswtxi_k$(encoder, (!(value == null) ? typeof value === 'number' : false) ? value : THROW_CCE());
  };
  ByteSerializer.prototype.deserialize_2t41fm_k$ = function (decoder) {
    return decoder.decodeByte_jzz7je_k$();
  };
  ByteSerializer.$metadata$ = {
    simpleName: 'ByteSerializer',
    kind: 'object',
    interfaces: [KSerializer]
  };
  var ByteSerializer_instance;
  function ByteSerializer_getInstance() {
    if (ByteSerializer_instance == null)
      new ByteSerializer();
    return ByteSerializer_instance;
  }
  function BooleanSerializer() {
    BooleanSerializer_instance = this;
    this.descriptor_1 = new PrimitiveSerialDescriptor_0('kotlin.Boolean', BOOLEAN_getInstance());
  }
  BooleanSerializer.prototype._get_descriptor__684124924_bbb664_k$ = function () {
    return this.descriptor_1;
  };
  BooleanSerializer.prototype.serialize_bl0ez0_k$ = function (encoder, value) {
    return encoder.encodeBoolean_6cztl5_k$(value);
  };
  BooleanSerializer.prototype.serialize_32qylj_k$ = function (encoder, value) {
    return this.serialize_bl0ez0_k$(encoder, (!(value == null) ? typeof value === 'boolean' : false) ? value : THROW_CCE());
  };
  BooleanSerializer.prototype.deserialize_2t41fm_k$ = function (decoder) {
    return decoder.decodeBoolean_m0aca_k$();
  };
  BooleanSerializer.$metadata$ = {
    simpleName: 'BooleanSerializer',
    kind: 'object',
    interfaces: [KSerializer]
  };
  var BooleanSerializer_instance;
  function BooleanSerializer_getInstance() {
    if (BooleanSerializer_instance == null)
      new BooleanSerializer();
    return BooleanSerializer_instance;
  }
  function UnitSerializer() {
    UnitSerializer_instance = this;
    this.$$delegate_0__1 = new ObjectSerializer('kotlin.Unit', Unit_getInstance());
  }
  UnitSerializer.prototype.deserialize_a513f7_k$ = function (decoder) {
    this.$$delegate_0__1.deserialize_2t41fm_k$(decoder);
  };
  UnitSerializer.prototype.deserialize_2t41fm_k$ = function (decoder) {
    this.deserialize_a513f7_k$(decoder);
    return Unit_getInstance();
  };
  UnitSerializer.prototype.serialize_x908om_k$ = function (encoder, value) {
    this.$$delegate_0__1.serialize_32qylj_k$(encoder, Unit_getInstance());
  };
  UnitSerializer.prototype.serialize_32qylj_k$ = function (encoder, value) {
    return this.serialize_x908om_k$(encoder, value instanceof Unit ? value : THROW_CCE());
  };
  UnitSerializer.prototype._get_descriptor__684124924_bbb664_k$ = function () {
    return this.$$delegate_0__1._get_descriptor__684124924_bbb664_k$();
  };
  UnitSerializer.$metadata$ = {
    simpleName: 'UnitSerializer',
    kind: 'object',
    interfaces: [KSerializer]
  };
  var UnitSerializer_instance;
  function UnitSerializer_getInstance() {
    if (UnitSerializer_instance == null)
      new UnitSerializer();
    return UnitSerializer_instance;
  }
  function error($this) {
    throw IllegalStateException_init_$Create$('Primitive descriptor does not have elements');
  }
  function PrimitiveSerialDescriptor_0(serialName, kind) {
    this.serialName_1 = serialName;
    this.kind_1 = kind;
  }
  PrimitiveSerialDescriptor_0.prototype._get_serialName__1025298892_gyfpos_k$ = function () {
    return this.serialName_1;
  };
  PrimitiveSerialDescriptor_0.prototype._get_kind__801637687_d99vlj_k$ = function () {
    return this.kind_1;
  };
  PrimitiveSerialDescriptor_0.prototype._get_elementsCount__2919979385_mqmrgn_k$ = function () {
    return 0;
  };
  PrimitiveSerialDescriptor_0.prototype.getElementName_ykpypc_k$ = function (index) {
    error(this);
  };
  PrimitiveSerialDescriptor_0.prototype.getElementIndex_2hwbkl_k$ = function (name) {
    error(this);
  };
  PrimitiveSerialDescriptor_0.prototype.isElementOptional_c3hgb3_k$ = function (index) {
    error(this);
  };
  PrimitiveSerialDescriptor_0.prototype.getElementDescriptor_sqz94k_k$ = function (index) {
    error(this);
  };
  PrimitiveSerialDescriptor_0.prototype.getElementAnnotations_a57oar_k$ = function (index) {
    error(this);
  };
  PrimitiveSerialDescriptor_0.prototype.toString = function () {
    return 'PrimitiveDescriptor(' + this.serialName_1 + ')';
  };
  PrimitiveSerialDescriptor_0.$metadata$ = {
    simpleName: 'PrimitiveSerialDescriptor',
    kind: 'class',
    interfaces: [SerialDescriptor]
  };
  function PrimitiveDescriptorSafe(serialName, kind) {
    init_properties_Primitives_kt_2468588270();
    checkName(serialName);
    return new PrimitiveSerialDescriptor_0(serialName, kind);
  }
  function checkName(serialName) {
    init_properties_Primitives_kt_2468588270();
    var keys = _get_BUILTIN_SERIALIZERS__2271679596()._get_keys__801529559_d97k5z_k$();
    var tmp0_iterator = keys.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var primitive = tmp0_iterator.next_20eer_k$();
      var simpleName = capitalize(ensureNotNull(primitive._get_simpleName__973554894_g3mnri_k$()));
      var qualifiedName = 'kotlin.' + simpleName;
      if (equals_0(serialName, qualifiedName, true) ? true : equals_0(serialName, simpleName, true)) {
        throw IllegalArgumentException_init_$Create$(trimIndent('\n                The name of serial descriptor should uniquely identify associated serializer.\n                For serial name ' + serialName + ' there already exist ' + capitalize(simpleName) + 'Serializer.\n                Please refer to SerialDescriptor documentation for additional information.\n            '));
      }
    }
  }
  function builtinSerializerOrNull_0(_this__1828080292) {
    init_properties_Primitives_kt_2468588270();
    var tmp = _get_BUILTIN_SERIALIZERS__2271679596().get_1mhr4y_k$(_this__1828080292);
    return (tmp == null ? true : isInterface(tmp, KSerializer)) ? tmp : THROW_CCE();
  }
  var properties_initialized_Primitives_kt_3909144850;
  function init_properties_Primitives_kt_2468588270() {
    if (!properties_initialized_Primitives_kt_3909144850) {
      properties_initialized_Primitives_kt_3909144850 = true;
      BUILTIN_SERIALIZERS = mapOf([to(PrimitiveClasses_getInstance()._get_stringClass__1269070474_kzkl1m_k$(), serializer_1(StringCompanionObject_getInstance())), to(getKClass(Char), serializer_2(Companion_getInstance())), to(PrimitiveClasses_getInstance()._get_charArrayClass__2352161302_w4p2p6_k$(), CharArraySerializer()), to(PrimitiveClasses_getInstance()._get_doubleClass__2234697290_y2mqie_k$(), serializer_3(DoubleCompanionObject_getInstance())), to(PrimitiveClasses_getInstance()._get_doubleArrayClass__2928832379_mld0g5_k$(), DoubleArraySerializer()), to(PrimitiveClasses_getInstance()._get_floatClass__141668239_2ccfwv_k$(), serializer_4(FloatCompanionObject_getInstance())), to(PrimitiveClasses_getInstance()._get_floatArrayClass__2432403798_usx76y_k$(), FloatArraySerializer()), to(getKClass(Long), serializer_5(Companion_getInstance_0())), to(PrimitiveClasses_getInstance()._get_longArrayClass__2852100912_nv1mts_k$(), LongArraySerializer()), to(PrimitiveClasses_getInstance()._get_intClass__1005394466_gml3c2_k$(), serializer_6(IntCompanionObject_getInstance())), to(PrimitiveClasses_getInstance()._get_intArrayClass__787137187_d0n2xv_k$(), IntArraySerializer()), to(PrimitiveClasses_getInstance()._get_shortClass__2900162991_n2fhw1_k$(), serializer_7(ShortCompanionObject_getInstance())), to(PrimitiveClasses_getInstance()._get_shortArrayClass__1957270326_wdb3g6_k$(), ShortArraySerializer()), to(PrimitiveClasses_getInstance()._get_byteClass__3017072385_l4tq0v_k$(), serializer_8(ByteCompanionObject_getInstance())), to(PrimitiveClasses_getInstance()._get_byteArrayClass__2177249572_z0u1gc_k$(), ByteArraySerializer()), to(PrimitiveClasses_getInstance()._get_booleanClass__1099338011_i6immz_k$(), serializer_9(BooleanCompanionObject_getInstance())), to(PrimitiveClasses_getInstance()._get_booleanArrayClass__3316760394_g6ed9y_k$(), BooleanArraySerializer()), to(getKClass(Unit), serializer_10(Unit_getInstance()))]);
    }
  }
  function SerializationConstructorMarker() {
  }
  SerializationConstructorMarker.$metadata$ = {
    simpleName: 'SerializationConstructorMarker',
    kind: 'class',
    interfaces: []
  };
  function NamedValueEncoder() {
    TaggedEncoder.call(this);
  }
  NamedValueEncoder.prototype.getTag_8zycz2_k$ = function (_this__1828080292, index) {
    return this.nested_xy40wa_k$(this.elementName_9sehmv_k$(_this__1828080292, index));
  };
  NamedValueEncoder.prototype.nested_xy40wa_k$ = function (nestedName) {
    var tmp0_elvis_lhs = this._get_currentTagOrNull__3083342688_k1dbj4_k$();
    return this.composeName_t9idc5_k$(tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs, nestedName);
  };
  NamedValueEncoder.prototype.elementName_9sehmv_k$ = function (descriptor, index) {
    return descriptor.getElementName_ykpypc_k$(index);
  };
  NamedValueEncoder.prototype.composeName_t9idc5_k$ = function (parentName, childName) {
    var tmp;
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = charSequenceLength(parentName) === 0;
      break $l$block;
    }
    if (tmp$ret$0) {
      tmp = childName;
    } else {
      {
        tmp = parentName + '.' + childName;
      }
    }
    return tmp;
  };
  NamedValueEncoder.$metadata$ = {
    simpleName: 'NamedValueEncoder',
    kind: 'class',
    interfaces: []
  };
  function encodeElement($this, desc, index) {
    var tag = $this.getTag_8zycz2_k$(desc, index);
    $this.pushTag_2jen4a_k$(tag);
    return true;
  }
  function _get_tagStack__3229326973($this) {
    return $this.tagStack_1;
  }
  function TaggedEncoder() {
    var tmp = this;
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = ArrayList_init_$Create$_0();
      break $l$block;
    }
    tmp.tagStack_1 = tmp$ret$0;
  }
  TaggedEncoder.prototype._get_serializersModule__364239364_60uww4_k$ = function () {
    return _get_EmptySerializersModule__1292120011();
  };
  TaggedEncoder.prototype.encodeTaggedValue_rik3ib_k$ = function (tag, value) {
    throw SerializationException_init_$Create$_0('Non-serializable ' + getKClassFromExpression(value) + ' is not supported by ' + getKClassFromExpression(this) + ' encoder');
  };
  TaggedEncoder.prototype.encodeTaggedNull_qi5bv1_k$ = function (tag) {
    throw SerializationException_init_$Create$_0('null is not supported');
  };
  TaggedEncoder.prototype.encodeTaggedInt_ndzaig_k$ = function (tag, value) {
    return this.encodeTaggedValue_rik3ib_k$(tag, value);
  };
  TaggedEncoder.prototype.encodeTaggedByte_e5naty_k$ = function (tag, value) {
    return this.encodeTaggedValue_rik3ib_k$(tag, value);
  };
  TaggedEncoder.prototype.encodeTaggedShort_4ro7mw_k$ = function (tag, value) {
    return this.encodeTaggedValue_rik3ib_k$(tag, value);
  };
  TaggedEncoder.prototype.encodeTaggedLong_68sg4u_k$ = function (tag, value) {
    return this.encodeTaggedValue_rik3ib_k$(tag, value);
  };
  TaggedEncoder.prototype.encodeTaggedFloat_xhp5co_k$ = function (tag, value) {
    return this.encodeTaggedValue_rik3ib_k$(tag, value);
  };
  TaggedEncoder.prototype.encodeTaggedDouble_dgqq9w_k$ = function (tag, value) {
    return this.encodeTaggedValue_rik3ib_k$(tag, value);
  };
  TaggedEncoder.prototype.encodeTaggedBoolean_wlumqg_k$ = function (tag, value) {
    return this.encodeTaggedValue_rik3ib_k$(tag, value);
  };
  TaggedEncoder.prototype.encodeTaggedChar_2dcv0m_k$ = function (tag, value) {
    return this.encodeTaggedValue_rik3ib_k$(tag, new Char(value));
  };
  TaggedEncoder.prototype.encodeTaggedString_ault6k_k$ = function (tag, value) {
    return this.encodeTaggedValue_rik3ib_k$(tag, value);
  };
  TaggedEncoder.prototype.encodeTaggedEnum_j126tp_k$ = function (tag, enumDescriptor, ordinal) {
    return this.encodeTaggedValue_rik3ib_k$(tag, ordinal);
  };
  TaggedEncoder.prototype.encodeNotNullMark_40lhgg_k$ = function () {
  };
  TaggedEncoder.prototype.encodeNull_ek2hec_k$ = function () {
    return this.encodeTaggedNull_qi5bv1_k$(this.popTag_g8zwqf_k$());
  };
  TaggedEncoder.prototype.encodeBoolean_6cztl5_k$ = function (value) {
    return this.encodeTaggedBoolean_wlumqg_k$(this.popTag_g8zwqf_k$(), value);
  };
  TaggedEncoder.prototype.encodeByte_gpyndp_k$ = function (value) {
    return this.encodeTaggedByte_e5naty_k$(this.popTag_g8zwqf_k$(), value);
  };
  TaggedEncoder.prototype.encodeShort_rh3vxz_k$ = function (value) {
    return this.encodeTaggedShort_4ro7mw_k$(this.popTag_g8zwqf_k$(), value);
  };
  TaggedEncoder.prototype.encodeInt_5vxmon_k$ = function (value) {
    return this.encodeTaggedInt_ndzaig_k$(this.popTag_g8zwqf_k$(), value);
  };
  TaggedEncoder.prototype.encodeLong_rk3ab9_k$ = function (value) {
    return this.encodeTaggedLong_68sg4u_k$(this.popTag_g8zwqf_k$(), value);
  };
  TaggedEncoder.prototype.encodeFloat_f5fde1_k$ = function (value) {
    return this.encodeTaggedFloat_xhp5co_k$(this.popTag_g8zwqf_k$(), value);
  };
  TaggedEncoder.prototype.encodeDouble_79ztsb_k$ = function (value) {
    return this.encodeTaggedDouble_dgqq9w_k$(this.popTag_g8zwqf_k$(), value);
  };
  TaggedEncoder.prototype.encodeChar_kkx54x_k$ = function (value) {
    return this.encodeTaggedChar_2dcv0m_k$(this.popTag_g8zwqf_k$(), value);
  };
  TaggedEncoder.prototype.encodeString_90sumj_k$ = function (value) {
    return this.encodeTaggedString_ault6k_k$(this.popTag_g8zwqf_k$(), value);
  };
  TaggedEncoder.prototype.encodeEnum_dzauii_k$ = function (enumDescriptor, index) {
    return this.encodeTaggedEnum_j126tp_k$(this.popTag_g8zwqf_k$(), enumDescriptor, index);
  };
  TaggedEncoder.prototype.beginStructure_dv3yt3_k$ = function (descriptor) {
    return this;
  };
  TaggedEncoder.prototype.endStructure_e64gd4_k$ = function (descriptor) {
    var tmp$ret$0;
    $l$block: {
      var tmp0_isNotEmpty_0 = this.tagStack_1;
      tmp$ret$0 = !tmp0_isNotEmpty_0.isEmpty_y1axqb_k$();
      break $l$block;
    }
    if (tmp$ret$0) {
      this.popTag_g8zwqf_k$();
      Unit_getInstance();
    } else {
    }
    this.endEncode_2disap_k$(descriptor);
  };
  TaggedEncoder.prototype.endEncode_2disap_k$ = function (descriptor) {
  };
  TaggedEncoder.prototype.encodeBooleanElement_2l5aov_k$ = function (descriptor, index, value) {
    return this.encodeTaggedBoolean_wlumqg_k$(this.getTag_8zycz2_k$(descriptor, index), value);
  };
  TaggedEncoder.prototype.encodeByteElement_r2fm3n_k$ = function (descriptor, index, value) {
    return this.encodeTaggedByte_e5naty_k$(this.getTag_8zycz2_k$(descriptor, index), value);
  };
  TaggedEncoder.prototype.encodeShortElement_2nnlvd_k$ = function (descriptor, index, value) {
    return this.encodeTaggedShort_4ro7mw_k$(this.getTag_8zycz2_k$(descriptor, index), value);
  };
  TaggedEncoder.prototype.encodeIntElement_utywpf_k$ = function (descriptor, index, value) {
    return this.encodeTaggedInt_ndzaig_k$(this.getTag_8zycz2_k$(descriptor, index), value);
  };
  TaggedEncoder.prototype.encodeLongElement_xtv8il_k$ = function (descriptor, index, value) {
    return this.encodeTaggedLong_68sg4u_k$(this.getTag_8zycz2_k$(descriptor, index), value);
  };
  TaggedEncoder.prototype.encodeFloatElement_o97mfb_k$ = function (descriptor, index, value) {
    return this.encodeTaggedFloat_xhp5co_k$(this.getTag_8zycz2_k$(descriptor, index), value);
  };
  TaggedEncoder.prototype.encodeDoubleElement_m8xcw3_k$ = function (descriptor, index, value) {
    return this.encodeTaggedDouble_dgqq9w_k$(this.getTag_8zycz2_k$(descriptor, index), value);
  };
  TaggedEncoder.prototype.encodeCharElement_4fawdf_k$ = function (descriptor, index, value) {
    return this.encodeTaggedChar_2dcv0m_k$(this.getTag_8zycz2_k$(descriptor, index), value);
  };
  TaggedEncoder.prototype.encodeStringElement_pgmbgj_k$ = function (descriptor, index, value) {
    return this.encodeTaggedString_ault6k_k$(this.getTag_8zycz2_k$(descriptor, index), value);
  };
  TaggedEncoder.prototype.encodeSerializableElement_pr92am_k$ = function (descriptor, index, serializer, value) {
    if (encodeElement(this, descriptor, index))
      this.encodeSerializableValue_bps9ot_k$(serializer, value);
  };
  TaggedEncoder.prototype.encodeNullableSerializableElement_m9ow0w_k$ = function (descriptor, index, serializer, value) {
    if (encodeElement(this, descriptor, index))
      this.encodeNullableSerializableValue_35ub11_k$(serializer, value);
  };
  TaggedEncoder.prototype._get_currentTag__3009892682_l93lx2_k$ = function () {
    return last(this.tagStack_1);
  };
  TaggedEncoder.prototype._get_currentTagOrNull__3083342688_k1dbj4_k$ = function () {
    return lastOrNull(this.tagStack_1);
  };
  TaggedEncoder.prototype.pushTag_2jen4a_k$ = function (name) {
    this.tagStack_1.add_1j60pz_k$(name);
    Unit_getInstance();
  };
  TaggedEncoder.prototype.popTag_g8zwqf_k$ = function () {
    var tmp;
    var tmp$ret$0;
    $l$block: {
      var tmp0_isNotEmpty_0 = this.tagStack_1;
      tmp$ret$0 = !tmp0_isNotEmpty_0.isEmpty_y1axqb_k$();
      break $l$block;
    }
    if (tmp$ret$0) {
      tmp = this.tagStack_1.removeAt_qvpkxi_k$(_get_lastIndex__339712501(this.tagStack_1));
    } else {
      {
        throw SerializationException_init_$Create$_0('No tag in stack for requested element');
      }
    }
    return tmp;
  };
  TaggedEncoder.$metadata$ = {
    simpleName: 'TaggedEncoder',
    kind: 'class',
    interfaces: [Encoder, CompositeEncoder]
  };
  function NamedValueDecoder() {
    TaggedDecoder.call(this);
  }
  NamedValueDecoder.prototype.getTag_8zycz2_k$ = function (_this__1828080292, index) {
    return this.nested_xy40wa_k$(this.elementName_9sehmv_k$(_this__1828080292, index));
  };
  NamedValueDecoder.prototype.nested_xy40wa_k$ = function (nestedName) {
    var tmp0_elvis_lhs = this._get_currentTagOrNull__3083342688_k1dbj4_k$();
    return this.composeName_t9idc5_k$(tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs, nestedName);
  };
  NamedValueDecoder.prototype.elementName_9sehmv_k$ = function (desc, index) {
    return desc.getElementName_ykpypc_k$(index);
  };
  NamedValueDecoder.prototype.composeName_t9idc5_k$ = function (parentName, childName) {
    var tmp;
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = charSequenceLength(parentName) === 0;
      break $l$block;
    }
    if (tmp$ret$0) {
      tmp = childName;
    } else {
      {
        tmp = parentName + '.' + childName;
      }
    }
    return tmp;
  };
  NamedValueDecoder.$metadata$ = {
    simpleName: 'NamedValueDecoder',
    kind: 'class',
    interfaces: []
  };
  function tagBlock($this, tag, block) {
    $this.pushTag_2jen4a_k$(tag);
    var r = block();
    if (!$this.flag_1) {
      $this.popTag_g8zwqf_k$();
      Unit_getInstance();
    }
    $this.flag_1 = false;
    return r;
  }
  function _get_tagStack__3229326973_0($this) {
    return $this.tagStack_1;
  }
  function _set_flag__582479979($this, _set____804775014) {
    $this.flag_1 = _set____804775014;
  }
  function _get_flag__797097055($this) {
    return $this.flag_1;
  }
  function TaggedDecoder$decodeSerializableElement$lambda(this$0, $deserializer, $previousValue) {
    return function () {
      return this$0.decodeSerializableValue_613aoe_k$($deserializer, $previousValue);
    };
  }
  function TaggedDecoder$decodeNullableSerializableElement$lambda(this$0, $deserializer, $previousValue) {
    return function () {
      return this$0.decodeNotNullMark_us4ba1_k$() ? this$0.decodeSerializableValue_613aoe_k$($deserializer, $previousValue) : this$0.decodeNull_jzrmuj_k$();
    };
  }
  function TaggedDecoder() {
    var tmp = this;
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = ArrayList_init_$Create$_0();
      break $l$block;
    }
    tmp.tagStack_1 = tmp$ret$0;
    this.flag_1 = false;
  }
  TaggedDecoder.prototype._get_serializersModule__364239364_60uww4_k$ = function () {
    return _get_EmptySerializersModule__1292120011();
  };
  TaggedDecoder.prototype.decodeTaggedValue_b9nx02_k$ = function (tag) {
    throw SerializationException_init_$Create$_0('' + getKClassFromExpression(this) + " can't retrieve untyped values");
  };
  TaggedDecoder.prototype.decodeTaggedNotNullMark_lc2tyw_k$ = function (tag) {
    return true;
  };
  TaggedDecoder.prototype.decodeTaggedNull_x1ibl0_k$ = function (tag) {
    return null;
  };
  TaggedDecoder.prototype.decodeTaggedBoolean_kbjyq1_k$ = function (tag) {
    var tmp = this.decodeTaggedValue_b9nx02_k$(tag);
    return typeof tmp === 'boolean' ? tmp : THROW_CCE();
  };
  TaggedDecoder.prototype.decodeTaggedByte_weg8ir_k$ = function (tag) {
    var tmp = this.decodeTaggedValue_b9nx02_k$(tag);
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  TaggedDecoder.prototype.decodeTaggedShort_9lw2oz_k$ = function (tag) {
    var tmp = this.decodeTaggedValue_b9nx02_k$(tag);
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  TaggedDecoder.prototype.decodeTaggedInt_rqx040_k$ = function (tag) {
    var tmp = this.decodeTaggedValue_b9nx02_k$(tag);
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  TaggedDecoder.prototype.decodeTaggedLong_z7jgpd_k$ = function (tag) {
    var tmp = this.decodeTaggedValue_b9nx02_k$(tag);
    return tmp instanceof Long ? tmp : THROW_CCE();
  };
  TaggedDecoder.prototype.decodeTaggedFloat_azhupv_k$ = function (tag) {
    var tmp = this.decodeTaggedValue_b9nx02_k$(tag);
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  TaggedDecoder.prototype.decodeTaggedDouble_qq3qze_k$ = function (tag) {
    var tmp = this.decodeTaggedValue_b9nx02_k$(tag);
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  TaggedDecoder.prototype.decodeTaggedChar_xsxsj0_k$ = function (tag) {
    var tmp = this.decodeTaggedValue_b9nx02_k$(tag);
    return tmp instanceof Char ? tmp.value_1 : THROW_CCE();
  };
  TaggedDecoder.prototype.decodeTaggedString_5es7hi_k$ = function (tag) {
    var tmp = this.decodeTaggedValue_b9nx02_k$(tag);
    return typeof tmp === 'string' ? tmp : THROW_CCE();
  };
  TaggedDecoder.prototype.decodeTaggedEnum_jxsvth_k$ = function (tag, enumDescriptor) {
    var tmp = this.decodeTaggedValue_b9nx02_k$(tag);
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  TaggedDecoder.prototype.decodeSerializableValue_613aoe_k$ = function (deserializer, previousValue) {
    return this.decodeSerializableValue_xpp80o_k$(deserializer);
  };
  TaggedDecoder.prototype.decodeNotNullMark_us4ba1_k$ = function () {
    var tmp0_elvis_lhs = this._get_currentTagOrNull__3083342688_k1dbj4_k$();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var currentTag = tmp;
    return this.decodeTaggedNotNullMark_lc2tyw_k$(currentTag);
  };
  TaggedDecoder.prototype.decodeNull_jzrmuj_k$ = function () {
    return null;
  };
  TaggedDecoder.prototype.decodeBoolean_m0aca_k$ = function () {
    return this.decodeTaggedBoolean_kbjyq1_k$(this.popTag_g8zwqf_k$());
  };
  TaggedDecoder.prototype.decodeByte_jzz7je_k$ = function () {
    return this.decodeTaggedByte_weg8ir_k$(this.popTag_g8zwqf_k$());
  };
  TaggedDecoder.prototype.decodeShort_jjqk32_k$ = function () {
    return this.decodeTaggedShort_9lw2oz_k$(this.popTag_g8zwqf_k$());
  };
  TaggedDecoder.prototype.decodeInt_8iq8f5_k$ = function () {
    return this.decodeTaggedInt_rqx040_k$(this.popTag_g8zwqf_k$());
  };
  TaggedDecoder.prototype.decodeLong_jzt186_k$ = function () {
    return this.decodeTaggedLong_z7jgpd_k$(this.popTag_g8zwqf_k$());
  };
  TaggedDecoder.prototype.decodeFloat_jcnrwu_k$ = function () {
    return this.decodeTaggedFloat_azhupv_k$(this.popTag_g8zwqf_k$());
  };
  TaggedDecoder.prototype.decodeDouble_ur8l0f_k$ = function () {
    return this.decodeTaggedDouble_qq3qze_k$(this.popTag_g8zwqf_k$());
  };
  TaggedDecoder.prototype.decodeChar_dc2jtx_k$ = function () {
    return this.decodeTaggedChar_xsxsj0_k$(this.popTag_g8zwqf_k$());
  };
  TaggedDecoder.prototype.decodeString_x3hxsx_k$ = function () {
    return this.decodeTaggedString_5es7hi_k$(this.popTag_g8zwqf_k$());
  };
  TaggedDecoder.prototype.decodeEnum_w3hzf6_k$ = function (enumDescriptor) {
    return this.decodeTaggedEnum_jxsvth_k$(this.popTag_g8zwqf_k$(), enumDescriptor);
  };
  TaggedDecoder.prototype.beginStructure_dv3yt3_k$ = function (descriptor) {
    return this;
  };
  TaggedDecoder.prototype.endStructure_e64gd4_k$ = function (descriptor) {
  };
  TaggedDecoder.prototype.decodeBooleanElement_3vswy_k$ = function (descriptor, index) {
    return this.decodeTaggedBoolean_kbjyq1_k$(this.getTag_8zycz2_k$(descriptor, index));
  };
  TaggedDecoder.prototype.decodeByteElement_76b0gq_k$ = function (descriptor, index) {
    return this.decodeTaggedByte_weg8ir_k$(this.getTag_8zycz2_k$(descriptor, index));
  };
  TaggedDecoder.prototype.decodeShortElement_zjkfm_k$ = function (descriptor, index) {
    return this.decodeTaggedShort_9lw2oz_k$(this.getTag_8zycz2_k$(descriptor, index));
  };
  TaggedDecoder.prototype.decodeIntElement_cmpvet_k$ = function (descriptor, index) {
    return this.decodeTaggedInt_rqx040_k$(this.getTag_8zycz2_k$(descriptor, index));
  };
  TaggedDecoder.prototype.decodeLongElement_kyznym_k$ = function (descriptor, index) {
    return this.decodeTaggedLong_z7jgpd_k$(this.getTag_8zycz2_k$(descriptor, index));
  };
  TaggedDecoder.prototype.decodeFloatElement_nl5jiq_k$ = function (descriptor, index) {
    return this.decodeTaggedFloat_azhupv_k$(this.getTag_8zycz2_k$(descriptor, index));
  };
  TaggedDecoder.prototype.decodeDoubleElement_42w6gz_k$ = function (descriptor, index) {
    return this.decodeTaggedDouble_qq3qze_k$(this.getTag_8zycz2_k$(descriptor, index));
  };
  TaggedDecoder.prototype.decodeCharElement_pg5vs7_k$ = function (descriptor, index) {
    return this.decodeTaggedChar_xsxsj0_k$(this.getTag_8zycz2_k$(descriptor, index));
  };
  TaggedDecoder.prototype.decodeStringElement_4is7ib_k$ = function (descriptor, index) {
    return this.decodeTaggedString_5es7hi_k$(this.getTag_8zycz2_k$(descriptor, index));
  };
  TaggedDecoder.prototype.decodeSerializableElement_5lsbxj_k$ = function (descriptor, index, deserializer, previousValue) {
    var tmp = this.getTag_8zycz2_k$(descriptor, index);
    return tagBlock(this, tmp, TaggedDecoder$decodeSerializableElement$lambda(this, deserializer, previousValue));
  };
  TaggedDecoder.prototype.decodeNullableSerializableElement_ri3t5d_k$ = function (descriptor, index, deserializer, previousValue) {
    var tmp = this.getTag_8zycz2_k$(descriptor, index);
    return tagBlock(this, tmp, TaggedDecoder$decodeNullableSerializableElement$lambda(this, deserializer, previousValue));
  };
  TaggedDecoder.prototype._get_currentTag__3009892682_l93lx2_k$ = function () {
    return last(this.tagStack_1);
  };
  TaggedDecoder.prototype._get_currentTagOrNull__3083342688_k1dbj4_k$ = function () {
    return lastOrNull(this.tagStack_1);
  };
  TaggedDecoder.prototype.pushTag_2jen4a_k$ = function (name) {
    this.tagStack_1.add_1j60pz_k$(name);
    Unit_getInstance();
  };
  TaggedDecoder.prototype.copyTagsTo_jzbkv7_k$ = function (other) {
    other.tagStack_1.addAll_oxxjjk_k$(this.tagStack_1);
    Unit_getInstance();
  };
  TaggedDecoder.prototype.popTag_g8zwqf_k$ = function () {
    var r = this.tagStack_1.removeAt_qvpkxi_k$(_get_lastIndex__339712501(this.tagStack_1));
    this.flag_1 = true;
    return r;
  };
  TaggedDecoder.$metadata$ = {
    simpleName: 'TaggedDecoder',
    kind: 'class',
    interfaces: [Decoder, CompositeDecoder]
  };
  function _get_NULL__774226340() {
    init_properties_Tuples_kt_2406524623();
    return NULL;
  }
  var NULL;
  function MapEntry(key, value) {
    this.key_1 = key;
    this.value_1 = value;
  }
  MapEntry.prototype._get_key__857139730_e6bh8y_k$ = function () {
    return this.key_1;
  };
  MapEntry.prototype._get_value__3683422336_a43j40_k$ = function () {
    return this.value_1;
  };
  MapEntry.prototype.component1_7eebsc_k$ = function () {
    return this.key_1;
  };
  MapEntry.prototype.component2_7eebsb_k$ = function () {
    return this.value_1;
  };
  MapEntry.prototype.copy_8d20yw_k$ = function (key, value) {
    return new MapEntry(key, value);
  };
  MapEntry.prototype.copy$default_mlmd97_k$ = function (key, value, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      key = this.key_1;
    if (!(($mask0 & 2) === 0))
      value = this.value_1;
    return this.copy_8d20yw_k$(key, value);
  };
  MapEntry.prototype.toString = function () {
    return 'MapEntry(key=' + this.key_1 + ', value=' + this.value_1 + ')';
  };
  MapEntry.prototype.hashCode = function () {
    return imul(this.key_1 == null ? 0 : hashCode(this.key_1), 31) + (this.value_1 == null ? 0 : hashCode(this.value_1)) | 0;
  };
  MapEntry.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof MapEntry))
      return false;
    else {
    }
    var tmp0_other_with_cast = other instanceof MapEntry ? other : THROW_CCE();
    if (!equals(this.key_1, tmp0_other_with_cast.key_1))
      return false;
    if (!equals(this.value_1, tmp0_other_with_cast.value_1))
      return false;
    return true;
  };
  MapEntry.$metadata$ = {
    simpleName: 'MapEntry',
    kind: 'class',
    interfaces: [Entry]
  };
  function MapEntrySerializer$descriptor$lambda($keySerializer, $valueSerializer) {
    return function (_this__1828080292) {
      var tmp = $keySerializer._get_descriptor__684124924_bbb664_k$();
      _this__1828080292.element$default_m7h690_k$('key', tmp, null, false, 12, null);
      var tmp_0 = $valueSerializer._get_descriptor__684124924_bbb664_k$();
      _this__1828080292.element$default_m7h690_k$('value', tmp_0, null, false, 12, null);
      return Unit_getInstance();
    };
  }
  function MapEntrySerializer_0(keySerializer, valueSerializer) {
    KeyValueSerializer.call(this, keySerializer, valueSerializer);
    var tmp = this;
    var tmp_0 = MAP_getInstance();
    tmp.descriptor_1 = buildSerialDescriptor$default('kotlin.collections.Map.Entry', tmp_0, [], MapEntrySerializer$descriptor$lambda(keySerializer, valueSerializer), 4, null);
  }
  MapEntrySerializer_0.prototype._get_descriptor__684124924_bbb664_k$ = function () {
    return this.descriptor_1;
  };
  MapEntrySerializer_0.prototype._get_key__857139730_1rfkai_k$ = function (_this__1828080292) {
    return _this__1828080292._get_key__857139730_e6bh8y_k$();
  };
  MapEntrySerializer_0.prototype._get_key__857139730_s3hvyl_k$ = function (_this__1828080292) {
    return this._get_key__857139730_1rfkai_k$((!(_this__1828080292 == null) ? isInterface(_this__1828080292, Entry) : false) ? _this__1828080292 : THROW_CCE());
  };
  MapEntrySerializer_0.prototype._get_value__3683422336_uolul4_k$ = function (_this__1828080292) {
    return _this__1828080292._get_value__3683422336_a43j40_k$();
  };
  MapEntrySerializer_0.prototype._get_value__3683422336_bnezxd_k$ = function (_this__1828080292) {
    return this._get_value__3683422336_uolul4_k$((!(_this__1828080292 == null) ? isInterface(_this__1828080292, Entry) : false) ? _this__1828080292 : THROW_CCE());
  };
  MapEntrySerializer_0.prototype.toResult_qr0m57_k$ = function (key, value) {
    return new MapEntry(key, value);
  };
  MapEntrySerializer_0.$metadata$ = {
    simpleName: 'MapEntrySerializer',
    kind: 'class',
    interfaces: []
  };
  function PairSerializer$descriptor$lambda($keySerializer, $valueSerializer) {
    return function (_this__1828080292) {
      var tmp = $keySerializer._get_descriptor__684124924_bbb664_k$();
      _this__1828080292.element$default_m7h690_k$('first', tmp, null, false, 12, null);
      var tmp_0 = $valueSerializer._get_descriptor__684124924_bbb664_k$();
      _this__1828080292.element$default_m7h690_k$('second', tmp_0, null, false, 12, null);
      return Unit_getInstance();
    };
  }
  function PairSerializer_0(keySerializer, valueSerializer) {
    KeyValueSerializer.call(this, keySerializer, valueSerializer);
    var tmp = this;
    tmp.descriptor_1 = buildClassSerialDescriptor$default('kotlin.Pair', [], PairSerializer$descriptor$lambda(keySerializer, valueSerializer), 2, null);
  }
  PairSerializer_0.prototype._get_descriptor__684124924_bbb664_k$ = function () {
    return this.descriptor_1;
  };
  PairSerializer_0.prototype._get_key__857139730_bwdepp_k$ = function (_this__1828080292) {
    return _this__1828080292._get_first__3232921377_hkbbvj_k$();
  };
  PairSerializer_0.prototype._get_key__857139730_s3hvyl_k$ = function (_this__1828080292) {
    return this._get_key__857139730_bwdepp_k$(_this__1828080292 instanceof Pair ? _this__1828080292 : THROW_CCE());
  };
  PairSerializer_0.prototype._get_value__3683422336_33dpip_k$ = function (_this__1828080292) {
    return _this__1828080292._get_second__4255435031_njbah_k$();
  };
  PairSerializer_0.prototype._get_value__3683422336_bnezxd_k$ = function (_this__1828080292) {
    return this._get_value__3683422336_33dpip_k$(_this__1828080292 instanceof Pair ? _this__1828080292 : THROW_CCE());
  };
  PairSerializer_0.prototype.toResult_qr0m57_k$ = function (key, value) {
    return to(key, value);
  };
  PairSerializer_0.$metadata$ = {
    simpleName: 'PairSerializer',
    kind: 'class',
    interfaces: []
  };
  function _get_aSerializer__1600472862($this) {
    return $this.aSerializer_1;
  }
  function _get_bSerializer__1729555581($this) {
    return $this.bSerializer_1;
  }
  function _get_cSerializer__1858638300($this) {
    return $this.cSerializer_1;
  }
  function decodeSequentially_1($this, composite) {
    var a = composite.decodeSerializableElement$default_xyql7s_k$($this.descriptor_1, 0, $this.aSerializer_1, null, 8, null);
    var b = composite.decodeSerializableElement$default_xyql7s_k$($this.descriptor_1, 1, $this.bSerializer_1, null, 8, null);
    var c = composite.decodeSerializableElement$default_xyql7s_k$($this.descriptor_1, 2, $this.cSerializer_1, null, 8, null);
    composite.endStructure_e64gd4_k$($this.descriptor_1);
    return new Triple(a, b, c);
  }
  function decodeStructure_0($this, composite) {
    var a = _get_NULL__774226340();
    var b = _get_NULL__774226340();
    var c = _get_NULL__774226340();
    mainLoop: while (true) {
      var index = composite.decodeElementIndex_nk5a2l_k$($this.descriptor_1);
      if (index === Companion_getInstance_1()._get_DECODE_DONE__3215019198_huz1aa_k$()) {
        break mainLoop;
      } else if (index === 0) {
        a = composite.decodeSerializableElement$default_xyql7s_k$($this.descriptor_1, 0, $this.aSerializer_1, null, 8, null);
      } else if (index === 1) {
        b = composite.decodeSerializableElement$default_xyql7s_k$($this.descriptor_1, 1, $this.bSerializer_1, null, 8, null);
      } else if (index === 2) {
        c = composite.decodeSerializableElement$default_xyql7s_k$($this.descriptor_1, 2, $this.cSerializer_1, null, 8, null);
      } else
        throw SerializationException_init_$Create$_0('Unexpected index ' + index);
    }
    composite.endStructure_e64gd4_k$($this.descriptor_1);
    if (a === _get_NULL__774226340())
      throw SerializationException_init_$Create$_0("Element 'first' is missing");
    if (b === _get_NULL__774226340())
      throw SerializationException_init_$Create$_0("Element 'second' is missing");
    if (c === _get_NULL__774226340())
      throw SerializationException_init_$Create$_0("Element 'third' is missing");
    var tmp = (a == null ? true : isObject(a)) ? a : THROW_CCE();
    var tmp_0 = (b == null ? true : isObject(b)) ? b : THROW_CCE();
    return new Triple(tmp, tmp_0, (c == null ? true : isObject(c)) ? c : THROW_CCE());
  }
  function TripleSerializer$descriptor$lambda(this$0) {
    return function (_this__1828080292) {
      var tmp = this$0.aSerializer_1._get_descriptor__684124924_bbb664_k$();
      _this__1828080292.element$default_m7h690_k$('first', tmp, null, false, 12, null);
      var tmp_0 = this$0.bSerializer_1._get_descriptor__684124924_bbb664_k$();
      _this__1828080292.element$default_m7h690_k$('second', tmp_0, null, false, 12, null);
      var tmp_1 = this$0.cSerializer_1._get_descriptor__684124924_bbb664_k$();
      _this__1828080292.element$default_m7h690_k$('third', tmp_1, null, false, 12, null);
      return Unit_getInstance();
    };
  }
  function TripleSerializer_0(aSerializer, bSerializer, cSerializer) {
    this.aSerializer_1 = aSerializer;
    this.bSerializer_1 = bSerializer;
    this.cSerializer_1 = cSerializer;
    var tmp = this;
    tmp.descriptor_1 = buildClassSerialDescriptor$default('kotlin.Triple', [], TripleSerializer$descriptor$lambda(this), 2, null);
  }
  TripleSerializer_0.prototype._get_descriptor__684124924_bbb664_k$ = function () {
    return this.descriptor_1;
  };
  TripleSerializer_0.prototype.serialize_dxgg6y_k$ = function (encoder, value) {
    var structuredEncoder = encoder.beginStructure_dv3yt3_k$(this.descriptor_1);
    structuredEncoder.encodeSerializableElement_pr92am_k$(this.descriptor_1, 0, this.aSerializer_1, value._get_first__3232921377_hkbbvj_k$());
    structuredEncoder.encodeSerializableElement_pr92am_k$(this.descriptor_1, 1, this.bSerializer_1, value._get_second__4255435031_njbah_k$());
    structuredEncoder.encodeSerializableElement_pr92am_k$(this.descriptor_1, 2, this.cSerializer_1, value._get_third__3632536394_aye6ye_k$());
    structuredEncoder.endStructure_e64gd4_k$(this.descriptor_1);
  };
  TripleSerializer_0.prototype.serialize_32qylj_k$ = function (encoder, value) {
    return this.serialize_dxgg6y_k$(encoder, value instanceof Triple ? value : THROW_CCE());
  };
  TripleSerializer_0.prototype.deserialize_2t41fm_k$ = function (decoder) {
    var composite = decoder.beginStructure_dv3yt3_k$(this.descriptor_1);
    if (composite.decodeSequentially_xlblqy_k$()) {
      return decodeSequentially_1(this, composite);
    }
    return decodeStructure_0(this, composite);
  };
  TripleSerializer_0.$metadata$ = {
    simpleName: 'TripleSerializer',
    kind: 'class',
    interfaces: [KSerializer]
  };
  function KeyValueSerializer(keySerializer, valueSerializer) {
    this.keySerializer_1 = keySerializer;
    this.valueSerializer_1 = valueSerializer;
  }
  KeyValueSerializer.prototype._get_keySerializer__1445500320_nwm36o_k$ = function () {
    return this.keySerializer_1;
  };
  KeyValueSerializer.prototype._get_valueSerializer__4136340110_2mfxiq_k$ = function () {
    return this.valueSerializer_1;
  };
  KeyValueSerializer.prototype.serialize_n6wuhj_k$ = function (encoder, value) {
    var structuredEncoder = encoder.beginStructure_dv3yt3_k$(this._get_descriptor__684124924_bbb664_k$());
    structuredEncoder.encodeSerializableElement_pr92am_k$(this._get_descriptor__684124924_bbb664_k$(), 0, this.keySerializer_1, this._get_key__857139730_s3hvyl_k$(value));
    structuredEncoder.encodeSerializableElement_pr92am_k$(this._get_descriptor__684124924_bbb664_k$(), 1, this.valueSerializer_1, this._get_value__3683422336_bnezxd_k$(value));
    structuredEncoder.endStructure_e64gd4_k$(this._get_descriptor__684124924_bbb664_k$());
  };
  KeyValueSerializer.prototype.serialize_32qylj_k$ = function (encoder, value) {
    return this.serialize_n6wuhj_k$(encoder, (value == null ? true : isObject(value)) ? value : THROW_CCE());
  };
  KeyValueSerializer.prototype.deserialize_2t41fm_k$ = function (decoder) {
    var composite = decoder.beginStructure_dv3yt3_k$(this._get_descriptor__684124924_bbb664_k$());
    if (composite.decodeSequentially_xlblqy_k$()) {
      var tmp = this._get_descriptor__684124924_bbb664_k$();
      var key = composite.decodeSerializableElement$default_xyql7s_k$(tmp, 0, this.keySerializer_1, null, 8, null);
      var tmp_0 = this._get_descriptor__684124924_bbb664_k$();
      var value = composite.decodeSerializableElement$default_xyql7s_k$(tmp_0, 1, this.valueSerializer_1, null, 8, null);
      return this.toResult_qr0m57_k$(key, value);
    }
    var key_0 = _get_NULL__774226340();
    var value_0 = _get_NULL__774226340();
    mainLoop: while (true) {
      var idx = composite.decodeElementIndex_nk5a2l_k$(this._get_descriptor__684124924_bbb664_k$());
      if (idx === Companion_getInstance_1()._get_DECODE_DONE__3215019198_huz1aa_k$()) {
        break mainLoop;
      } else if (idx === 0) {
        var tmp_1 = this._get_descriptor__684124924_bbb664_k$();
        key_0 = composite.decodeSerializableElement$default_xyql7s_k$(tmp_1, 0, this.keySerializer_1, null, 8, null);
      } else if (idx === 1) {
        var tmp_2 = this._get_descriptor__684124924_bbb664_k$();
        value_0 = composite.decodeSerializableElement$default_xyql7s_k$(tmp_2, 1, this.valueSerializer_1, null, 8, null);
      } else
        throw SerializationException_init_$Create$_0('Invalid index: ' + idx);
    }
    composite.endStructure_e64gd4_k$(this._get_descriptor__684124924_bbb664_k$());
    if (key_0 === _get_NULL__774226340())
      throw SerializationException_init_$Create$_0("Element 'key' is missing");
    if (value_0 === _get_NULL__774226340())
      throw SerializationException_init_$Create$_0("Element 'value' is missing");
    var tmp_3 = (key_0 == null ? true : isObject(key_0)) ? key_0 : THROW_CCE();
    return this.toResult_qr0m57_k$(tmp_3, (value_0 == null ? true : isObject(value_0)) ? value_0 : THROW_CCE());
  };
  KeyValueSerializer.$metadata$ = {
    simpleName: 'KeyValueSerializer',
    kind: 'class',
    interfaces: [KSerializer]
  };
  var properties_initialized_Tuples_kt_234782451;
  function init_properties_Tuples_kt_2406524623() {
    if (!properties_initialized_Tuples_kt_234782451) {
      properties_initialized_Tuples_kt_234782451 = true;
      NULL = new Object();
    }
  }
  function _get_EmptySerializersModule__1292120011() {
    init_properties_SerializersModule_kt_1747798503();
    return EmptySerializersModule;
  }
  var EmptySerializersModule;
  function SerializersModule() {
  }
  SerializersModule.$metadata$ = {
    simpleName: 'SerializersModule',
    kind: 'class',
    interfaces: []
  };
  function _get_class2Serializer__1352632671_0($this) {
    return $this.class2Serializer_1;
  }
  function _get_polyBase2NamedSerializers__180277908($this) {
    return $this.polyBase2NamedSerializers_1;
  }
  function _get_polyBase2DefaultProvider__3776021998($this) {
    return $this.polyBase2DefaultProvider_1;
  }
  function SerialModuleImpl(class2Serializer, polyBase2Serializers, polyBase2NamedSerializers, polyBase2DefaultProvider) {
    SerializersModule.call(this);
    this.class2Serializer_1 = class2Serializer;
    this.polyBase2Serializers_1 = polyBase2Serializers;
    this.polyBase2NamedSerializers_1 = polyBase2NamedSerializers;
    this.polyBase2DefaultProvider_1 = polyBase2DefaultProvider;
  }
  SerialModuleImpl.prototype._get_polyBase2Serializers__2126258943_z5x3wf_k$ = function () {
    return this.polyBase2Serializers_1;
  };
  SerialModuleImpl.prototype.getPolymorphic_1pjrjm_k$ = function (baseClass, value) {
    if (!isInstanceOf(value, baseClass))
      return null;
    var tmp0_safe_receiver = this.polyBase2Serializers_1.get_1mhr4y_k$(baseClass);
    var tmp = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.get_1mhr4y_k$(getKClassFromExpression(value));
    return (!(tmp == null) ? isInterface(tmp, SerializationStrategy) : false) ? tmp : null;
  };
  SerialModuleImpl.prototype.getPolymorphic_gixe6f_k$ = function (baseClass, serializedClassName) {
    var tmp0_safe_receiver = this.polyBase2NamedSerializers_1.get_1mhr4y_k$(baseClass);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      var tmp$ret$0;
      $l$block: {
        tmp$ret$0 = ((!(tmp0_safe_receiver == null) ? isInterface(tmp0_safe_receiver, Map) : false) ? tmp0_safe_receiver : THROW_CCE()).get_1mhr4y_k$(serializedClassName);
        break $l$block;
      }
      tmp = tmp$ret$0;
    }
    var tmp_0 = tmp;
    var registered = (!(tmp_0 == null) ? isInterface(tmp_0, KSerializer) : false) ? tmp_0 : null;
    if (!(registered == null))
      return registered;
    var tmp_1 = this.polyBase2DefaultProvider_1.get_1mhr4y_k$(baseClass);
    var tmp1_safe_receiver = (!(tmp_1 == null) ? typeof tmp_1 === 'function' : false) ? tmp_1 : null;
    return tmp1_safe_receiver == null ? null : tmp1_safe_receiver(serializedClassName);
  };
  SerialModuleImpl.prototype.getContextual_715qcj_k$ = function (kclass) {
    var tmp = this.class2Serializer_1.get_1mhr4y_k$(kclass);
    return (!(tmp == null) ? isInterface(tmp, KSerializer) : false) ? tmp : null;
  };
  SerialModuleImpl.prototype.dumpTo_q6va1n_k$ = function (collector) {
    {
      var tmp0_forEach_0 = this.class2Serializer_1;
      var tmp$ret$0;
      $l$block: {
        tmp$ret$0 = tmp0_forEach_0._get_entries__31877249_iz8n5_k$().iterator_jk1svi_k$();
        break $l$block;
      }
      var tmp0_iterator_1 = tmp$ret$0;
      while (tmp0_iterator_1.hasNext_bitz1p_k$()) {
        var element_2 = tmp0_iterator_1.next_20eer_k$();
        {
          var tmp$ret$1;
          $l$block_0: {
            tmp$ret$1 = element_2._get_key__857139730_e6bh8y_k$();
            break $l$block_0;
          }
          var kclass_4 = tmp$ret$1;
          var tmp$ret$2;
          $l$block_1: {
            tmp$ret$2 = element_2._get_value__3683422336_a43j40_k$();
            break $l$block_1;
          }
          var serial_5 = tmp$ret$2;
          var tmp = isInterface(kclass_4, KClass) ? kclass_4 : THROW_CCE();
          var tmp$ret$3;
          $l$block_2: {
            tmp$ret$3 = isInterface(serial_5, KSerializer) ? serial_5 : THROW_CCE();
            break $l$block_2;
          }
          collector.contextual_7ekeez_k$(tmp, tmp$ret$3);
        }
      }
    }
    {
      var tmp1_forEach_0 = this.polyBase2Serializers_1;
      var tmp$ret$4;
      $l$block_3: {
        tmp$ret$4 = tmp1_forEach_0._get_entries__31877249_iz8n5_k$().iterator_jk1svi_k$();
        break $l$block_3;
      }
      var tmp0_iterator_1_0 = tmp$ret$4;
      while (tmp0_iterator_1_0.hasNext_bitz1p_k$()) {
        var element_2_0 = tmp0_iterator_1_0.next_20eer_k$();
        {
          var tmp$ret$5;
          $l$block_4: {
            tmp$ret$5 = element_2_0._get_key__857139730_e6bh8y_k$();
            break $l$block_4;
          }
          var baseClass_4 = tmp$ret$5;
          var tmp$ret$6;
          $l$block_5: {
            tmp$ret$6 = element_2_0._get_value__3683422336_a43j40_k$();
            break $l$block_5;
          }
          var classMap_5 = tmp$ret$6;
          {
            var tmp$ret$7;
            $l$block_6: {
              tmp$ret$7 = classMap_5._get_entries__31877249_iz8n5_k$().iterator_jk1svi_k$();
              break $l$block_6;
            }
            var tmp0_iterator_1_6 = tmp$ret$7;
            while (tmp0_iterator_1_6.hasNext_bitz1p_k$()) {
              var element_2_7 = tmp0_iterator_1_6.next_20eer_k$();
              {
                var tmp$ret$8;
                $l$block_7: {
                  tmp$ret$8 = element_2_7._get_key__857139730_e6bh8y_k$();
                  break $l$block_7;
                }
                var actualClass_4_8 = tmp$ret$8;
                var tmp$ret$9;
                $l$block_8: {
                  tmp$ret$9 = element_2_7._get_value__3683422336_a43j40_k$();
                  break $l$block_8;
                }
                var serializer_5_9 = tmp$ret$9;
                var tmp_0 = isInterface(baseClass_4, KClass) ? baseClass_4 : THROW_CCE();
                var tmp_1 = isInterface(actualClass_4_8, KClass) ? actualClass_4_8 : THROW_CCE();
                var tmp$ret$10;
                $l$block_9: {
                  tmp$ret$10 = isInterface(serializer_5_9, KSerializer) ? serializer_5_9 : THROW_CCE();
                  break $l$block_9;
                }
                collector.polymorphic_2hf1qx_k$(tmp_0, tmp_1, tmp$ret$10);
              }
            }
          }
        }
      }
    }
    {
      var tmp2_forEach_0 = this.polyBase2DefaultProvider_1;
      var tmp$ret$11;
      $l$block_10: {
        tmp$ret$11 = tmp2_forEach_0._get_entries__31877249_iz8n5_k$().iterator_jk1svi_k$();
        break $l$block_10;
      }
      var tmp0_iterator_1_1 = tmp$ret$11;
      while (tmp0_iterator_1_1.hasNext_bitz1p_k$()) {
        var element_2_1 = tmp0_iterator_1_1.next_20eer_k$();
        {
          var tmp$ret$12;
          $l$block_11: {
            tmp$ret$12 = element_2_1._get_key__857139730_e6bh8y_k$();
            break $l$block_11;
          }
          var baseClass_4_0 = tmp$ret$12;
          var tmp$ret$13;
          $l$block_12: {
            tmp$ret$13 = element_2_1._get_value__3683422336_a43j40_k$();
            break $l$block_12;
          }
          var provider_5 = tmp$ret$13;
          var tmp_2 = isInterface(baseClass_4_0, KClass) ? baseClass_4_0 : THROW_CCE();
          collector.polymorphicDefault_fpe08l_k$(tmp_2, typeof provider_5 === 'function' ? provider_5 : THROW_CCE());
        }
      }
    }
  };
  SerialModuleImpl.$metadata$ = {
    simpleName: 'SerialModuleImpl',
    kind: 'class',
    interfaces: []
  };
  var properties_initialized_SerializersModule_kt_939766595;
  function init_properties_SerializersModule_kt_1747798503() {
    if (!properties_initialized_SerializersModule_kt_939766595) {
      properties_initialized_SerializersModule_kt_939766595 = true;
      EmptySerializersModule = new SerialModuleImpl(emptyMap(), emptyMap(), emptyMap(), emptyMap());
    }
  }
  function SerializersModuleCollector() {
  }
  SerializersModuleCollector.$metadata$ = {
    simpleName: 'SerializersModuleCollector',
    kind: 'interface',
    interfaces: []
  };
  function SerializableWith(serializer) {
    this.serializer_1 = serializer;
  }
  SerializableWith.prototype._get_serializer__1050971449_hdpyrd_k$ = function () {
    return this.serializer_1;
  };
  SerializableWith.prototype.equals = function (other) {
    if (!(other instanceof SerializableWith))
      return false;
    else {
    }
    var tmp0_other_with_cast = other instanceof SerializableWith ? other : THROW_CCE();
    if (!this.serializer_1.equals(tmp0_other_with_cast.serializer_1))
      return false;
    return true;
  };
  SerializableWith.prototype.hashCode = function () {
    return imul(getStringHashCode('serializer'), 127) ^ this.serializer_1.hashCode();
  };
  SerializableWith.prototype.toString = function () {
    return '@kotlinx.serialization.SerializableWith(serializer=' + this.serializer_1 + ')';
  };
  SerializableWith.$metadata$ = {
    simpleName: 'SerializableWith',
    kind: 'class',
    interfaces: [Annotation],
    associatedObjectKey: 0
  };
  function isInstanceOf(_this__1828080292, kclass) {
    return kclass.isInstance_6tn68w_k$(_this__1828080292);
  }
  function getChecked(_this__1828080292, index) {
    if (!(0 <= index ? index <= (_this__1828080292.length - 1 | 0) : false))
      throw IndexOutOfBoundsException_init_$Create$('Index ' + index + ' out of bounds ' + _get_indices__2241594442(_this__1828080292));
    return _this__1828080292[index];
  }
  function getChecked_0(_this__1828080292, index) {
    if (!(0 <= index ? index <= (_this__1828080292.length - 1 | 0) : false))
      throw IndexOutOfBoundsException_init_$Create$('Index ' + index + ' out of bounds ' + _get_indices__2241594442_0(_this__1828080292));
    return _this__1828080292[index];
  }
  function toNativeArrayImpl(_this__1828080292, eClass) {
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = copyToArray(_this__1828080292);
      break $l$block;
    }
    return tmp$ret$0;
  }
  function platformSpecificSerializerNotRegistered(_this__1828080292) {
    throw SerializationException_init_$Create$_0("Serializer for class '" + _this__1828080292._get_simpleName__973554894_g3mnri_k$() + "' is not found.\n" + 'Mark the class as @Serializable or provide the serializer explicitly.\n' + 'On Kotlin/JS explicitly declared serializer should be used for interfaces and enums without @Serializable annotation');
  }
  function compiledSerializerImpl(_this__1828080292) {
    var tmp1_elvis_lhs = constructSerializerForGivenTypeArgs(_this__1828080292, []);
    var tmp;
    if (tmp1_elvis_lhs == null) {
      var tmp$ret$0;
      $l$block: {
        var tmp0_asDynamic_0 = _get_js__1413122402(_this__1828080292);
        tmp$ret$0 = tmp0_asDynamic_0;
        break $l$block;
      }
      var tmp0_safe_receiver = tmp$ret$0.Companion;
      var tmp_0 = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.serializer();
      tmp = (!(tmp_0 == null) ? isInterface(tmp_0, KSerializer) : false) ? tmp_0 : null;
    } else {
      tmp = tmp1_elvis_lhs;
    }
    return tmp;
  }
  function isReferenceArray(rootClass) {
    return rootClass.equals(PrimitiveClasses_getInstance()._get_arrayClass__2667531724_qwxlbo_k$());
  }
  function constructSerializerForGivenTypeArgs(_this__1828080292, args) {
    var tmp;
    try {
      var tmp$ret$0;
      $l$block: {
        tmp$ret$0 = findAssociatedObject(_this__1828080292, getKClass(SerializableWith));
        break $l$block;
      }
      var assocObject = tmp$ret$0;
      var tmp_0;
      if (!(assocObject == null) ? isInterface(assocObject, KSerializer) : false) {
        tmp_0 = (!(assocObject == null) ? isInterface(assocObject, KSerializer) : false) ? assocObject : THROW_CCE();
      } else {
        if (!(assocObject == null) ? isInterface(assocObject, SerializerFactory) : false) {
          var tmp_1 = assocObject.serializer_5xgt5t_k$(args.slice());
          tmp_0 = isInterface(tmp_1, KSerializer) ? tmp_1 : THROW_CCE();
        } else {
          {
            tmp_0 = null;
          }
        }
      }
      tmp = tmp_0;
    } catch ($p) {
      var tmp_2;
      {
        tmp_2 = null;
      }
      tmp = tmp_2;
    }
    return tmp;
  }
  //region block: post-declaration
  SerialDescriptorImpl.prototype._get_isNullable__336674624_5kg3sw_k$ = _get_isNullable__336674624;
  AbstractDecoder.prototype.decodeSerializableElement$default_xyql7s_k$ = decodeSerializableElement$default;
  AbstractDecoder.prototype.decodeNullableSerializableElement$default_9il7ee_k$ = decodeNullableSerializableElement$default;
  AbstractDecoder.prototype.decodeSerializableValue_xpp80o_k$ = decodeSerializableValue;
  AbstractDecoder.prototype.decodeNullableSerializableValue_927wg6_k$ = decodeNullableSerializableValue;
  AbstractDecoder.prototype.decodeSequentially_xlblqy_k$ = decodeSequentially;
  AbstractDecoder.prototype.decodeCollectionSize_cd6i6s_k$ = decodeCollectionSize;
  AbstractDecoder.prototype.decodeSerializableElement_q809j1_k$ = decodeSerializableElement;
  AbstractDecoder.prototype.decodeNullableSerializableElement_xwfpfp_k$ = decodeNullableSerializableElement;
  AbstractEncoder.prototype.encodeNotNullMark_40lhgg_k$ = encodeNotNullMark;
  AbstractEncoder.prototype.beginCollection_dgpn47_k$ = beginCollection;
  AbstractEncoder.prototype.encodeSerializableValue_bps9ot_k$ = encodeSerializableValue;
  AbstractEncoder.prototype.encodeNullableSerializableValue_35ub11_k$ = encodeNullableSerializableValue;
  AbstractEncoder.prototype.shouldEncodeElementDefault_m92hrm_k$ = shouldEncodeElementDefault;
  ListLikeDescriptor.prototype._get_isNullable__336674624_5kg3sw_k$ = _get_isNullable__336674624;
  ListLikeDescriptor.prototype._get_annotations__1905959661_virbvx_k$ = _get_annotations__1905959661;
  PrimitiveArrayDescriptor.prototype._get_isNullable__336674624_5kg3sw_k$ = _get_isNullable__336674624;
  PrimitiveArrayDescriptor.prototype._get_annotations__1905959661_virbvx_k$ = _get_annotations__1905959661;
  ArrayClassDesc.prototype._get_isNullable__336674624_5kg3sw_k$ = _get_isNullable__336674624;
  ArrayClassDesc.prototype._get_annotations__1905959661_virbvx_k$ = _get_annotations__1905959661;
  ArrayListClassDesc.prototype._get_isNullable__336674624_5kg3sw_k$ = _get_isNullable__336674624;
  ArrayListClassDesc.prototype._get_annotations__1905959661_virbvx_k$ = _get_annotations__1905959661;
  MapLikeDescriptor.prototype._get_isNullable__336674624_5kg3sw_k$ = _get_isNullable__336674624;
  MapLikeDescriptor.prototype._get_annotations__1905959661_virbvx_k$ = _get_annotations__1905959661;
  LinkedHashMapClassDesc.prototype._get_isNullable__336674624_5kg3sw_k$ = _get_isNullable__336674624;
  LinkedHashMapClassDesc.prototype._get_annotations__1905959661_virbvx_k$ = _get_annotations__1905959661;
  HashSetClassDesc.prototype._get_isNullable__336674624_5kg3sw_k$ = _get_isNullable__336674624;
  HashSetClassDesc.prototype._get_annotations__1905959661_virbvx_k$ = _get_annotations__1905959661;
  LinkedHashSetClassDesc.prototype._get_isNullable__336674624_5kg3sw_k$ = _get_isNullable__336674624;
  LinkedHashSetClassDesc.prototype._get_annotations__1905959661_virbvx_k$ = _get_annotations__1905959661;
  HashMapClassDesc.prototype._get_isNullable__336674624_5kg3sw_k$ = _get_isNullable__336674624;
  HashMapClassDesc.prototype._get_annotations__1905959661_virbvx_k$ = _get_annotations__1905959661;
  PluginGeneratedSerialDescriptor.prototype._get_isNullable__336674624_5kg3sw_k$ = _get_isNullable__336674624;
  PrimitiveSerialDescriptor_0.prototype._get_isNullable__336674624_5kg3sw_k$ = _get_isNullable__336674624;
  PrimitiveSerialDescriptor_0.prototype._get_annotations__1905959661_virbvx_k$ = _get_annotations__1905959661;
  TaggedEncoder.prototype.beginCollection_dgpn47_k$ = beginCollection;
  TaggedEncoder.prototype.encodeSerializableValue_bps9ot_k$ = encodeSerializableValue;
  TaggedEncoder.prototype.encodeNullableSerializableValue_35ub11_k$ = encodeNullableSerializableValue;
  TaggedEncoder.prototype.shouldEncodeElementDefault_m92hrm_k$ = shouldEncodeElementDefault;
  NamedValueEncoder.prototype.beginCollection_dgpn47_k$ = beginCollection;
  NamedValueEncoder.prototype.encodeSerializableValue_bps9ot_k$ = encodeSerializableValue;
  NamedValueEncoder.prototype.encodeNullableSerializableValue_35ub11_k$ = encodeNullableSerializableValue;
  NamedValueEncoder.prototype.shouldEncodeElementDefault_m92hrm_k$ = shouldEncodeElementDefault;
  TaggedDecoder.prototype.decodeSerializableElement$default_xyql7s_k$ = decodeSerializableElement$default;
  TaggedDecoder.prototype.decodeNullableSerializableElement$default_9il7ee_k$ = decodeNullableSerializableElement$default;
  TaggedDecoder.prototype.decodeSerializableValue_xpp80o_k$ = decodeSerializableValue;
  TaggedDecoder.prototype.decodeNullableSerializableValue_927wg6_k$ = decodeNullableSerializableValue;
  TaggedDecoder.prototype.decodeSequentially_xlblqy_k$ = decodeSequentially;
  TaggedDecoder.prototype.decodeCollectionSize_cd6i6s_k$ = decodeCollectionSize;
  TaggedDecoder.prototype.decodeSerializableElement_q809j1_k$ = decodeSerializableElement;
  TaggedDecoder.prototype.decodeNullableSerializableElement_xwfpfp_k$ = decodeNullableSerializableElement;
  NamedValueDecoder.prototype.decodeSerializableValue_xpp80o_k$ = decodeSerializableValue;
  NamedValueDecoder.prototype.decodeSerializableElement$default_xyql7s_k$ = decodeSerializableElement$default;
  NamedValueDecoder.prototype.decodeSerializableElement_q809j1_k$ = decodeSerializableElement;
  NamedValueDecoder.prototype.decodeNullableSerializableElement$default_9il7ee_k$ = decodeNullableSerializableElement$default;
  NamedValueDecoder.prototype.decodeNullableSerializableElement_xwfpfp_k$ = decodeNullableSerializableElement;
  NamedValueDecoder.prototype.decodeNullableSerializableValue_927wg6_k$ = decodeNullableSerializableValue;
  NamedValueDecoder.prototype.decodeSequentially_xlblqy_k$ = decodeSequentially;
  NamedValueDecoder.prototype.decodeCollectionSize_cd6i6s_k$ = decodeCollectionSize;
  //endregion
  //region block: init
  ARRAY_NAME = 'kotlin.Array';
  ARRAY_LIST_NAME = 'kotlin.collections.ArrayList';
  LINKED_HASH_MAP_NAME = 'kotlin.collections.LinkedHashMap';
  HASH_SET_NAME = 'kotlin.collections.HashSet';
  LINKED_HASH_SET_NAME = 'kotlin.collections.LinkedHashSet';
  HASH_MAP_NAME = 'kotlin.collections.HashMap';
  INITIAL_SIZE = 10;
  //endregion
  //region block: exports
  _.$crossModule$ = _.$crossModule$ || {};
  _.$crossModule$.buildSerialDescriptor$default = buildSerialDescriptor$default;
  _.$crossModule$.decodeNullableSerializableElement$default = decodeNullableSerializableElement$default;
  _.$crossModule$.decodeSerializableElement$default = decodeSerializableElement$default;
  _.$crossModule$.SerializationException_init_$Init$ = SerializationException_init_$Init$_0;
  _.$crossModule$.SerializationException_init_$Create$ = SerializationException_init_$Create$_0;
  _.$crossModule$.SEALED_getInstance = SEALED_getInstance;
  _.$crossModule$.INT_getInstance = INT_getInstance;
  _.$crossModule$.STRING_getInstance = STRING_getInstance;
  _.$crossModule$.CONTEXTUAL_getInstance = CONTEXTUAL_getInstance;
  _.$crossModule$.ENUM_getInstance = ENUM_getInstance;
  _.$crossModule$.LIST_getInstance = LIST_getInstance;
  _.$crossModule$.MAP_getInstance = MAP_getInstance;
  _.$crossModule$.Companion_getInstance = Companion_getInstance_1;
  _.$crossModule$.BooleanSerializer_getInstance = BooleanSerializer_getInstance;
  _.$crossModule$.IntSerializer_getInstance = IntSerializer_getInstance;
  _.$crossModule$.LongSerializer_getInstance = LongSerializer_getInstance;
  _.$crossModule$.StringSerializer_getInstance = StringSerializer_getInstance;
  _.$crossModule$.ListSerializer = ListSerializer;
  _.$crossModule$.MapSerializer = MapSerializer;
  _.$crossModule$._get_nullable__2526391434 = _get_nullable__2526391434;
  _.$crossModule$.serializer = serializer_1;
  _.$crossModule$.PolymorphicKind = PolymorphicKind;
  _.$crossModule$.PrimitiveKind = PrimitiveKind;
  _.$crossModule$.PrimitiveSerialDescriptor = PrimitiveSerialDescriptor;
  _.$crossModule$._get_annotations__1905959661 = _get_annotations__1905959661;
  _.$crossModule$._get_isNullable__336674624 = _get_isNullable__336674624;
  _.$crossModule$.SerialDescriptor = SerialDescriptor;
  _.$crossModule$.ENUM = ENUM;
  _.$crossModule$.AbstractDecoder = AbstractDecoder;
  _.$crossModule$.AbstractEncoder = AbstractEncoder;
  _.$crossModule$.decodeCollectionSize = decodeCollectionSize;
  _.$crossModule$.decodeNullableSerializableElement = decodeNullableSerializableElement;
  _.$crossModule$.decodeSequentially = decodeSequentially;
  _.$crossModule$.decodeSerializableElement = decodeSerializableElement;
  _.$crossModule$.CompositeDecoder = CompositeDecoder;
  _.$crossModule$.CompositeEncoder = CompositeEncoder;
  _.$crossModule$.decodeNullableSerializableValue = decodeNullableSerializableValue;
  _.$crossModule$.Decoder = Decoder;
  _.$crossModule$.beginCollection = beginCollection;
  _.$crossModule$.encodeNotNullMark = encodeNotNullMark;
  _.$crossModule$.encodeNullableSerializableValue = encodeNullableSerializableValue;
  _.$crossModule$.Encoder = Encoder;
  _.$crossModule$.AbstractPolymorphicSerializer = AbstractPolymorphicSerializer;
  _.$crossModule$.ArrayListSerializer = ArrayListSerializer;
  _.$crossModule$.typeParametersSerializers = typeParametersSerializers;
  _.$crossModule$.GeneratedSerializer = GeneratedSerializer;
  _.$crossModule$.LinkedHashMapSerializer = LinkedHashMapSerializer;
  _.$crossModule$.NamedValueDecoder = NamedValueDecoder;
  _.$crossModule$.NamedValueEncoder = NamedValueEncoder;
  _.$crossModule$.PluginGeneratedSerialDescriptor = PluginGeneratedSerialDescriptor;
  _.$crossModule$.ReferenceArraySerializer = ReferenceArraySerializer;
  _.$crossModule$.jsonCachedSerialNames = jsonCachedSerialNames;
  _.$crossModule$._get_EmptySerializersModule__1292120011 = _get_EmptySerializersModule__1292120011;
  _.$crossModule$.SerializersModuleCollector = SerializersModuleCollector;
  _.$crossModule$.DeserializationStrategy = DeserializationStrategy;
  _.$crossModule$.KSerializer = KSerializer;
  _.$crossModule$.MissingFieldException = MissingFieldException;
  _.$crossModule$.SealedClassSerializer = SealedClassSerializer;
  _.$crossModule$.SerializationException = SerializationException;
  _.$crossModule$.SerializationStrategy = SerializationStrategy;
  _.$crossModule$.StringFormat = StringFormat;
  _.$crossModule$.UnknownFieldException = UnknownFieldException;
  _.$crossModule$.findPolymorphicSerializer = findPolymorphicSerializer;
  _.$crossModule$.serializer_1 = serializer;
  //endregion
  return _;
}));
