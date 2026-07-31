import {
  StringCompanionObject_instance1v0ht40fz3tq0 as StringCompanionObject_instance,
  PrimitiveClasses_getInstanceds06xwqrwfdm as PrimitiveClasses_getInstance,
  BooleanCompanionObject_instance1app94b8o3img as BooleanCompanionObject_instance,
  ByteCompanionObject_instance1i09zkznh3bs3 as ByteCompanionObject_instance,
  ShortCompanionObject_instancekdrujyym9g7v as ShortCompanionObject_instance,
  IntCompanionObject_instance38ap4zil98hon as IntCompanionObject_instance,
  Companion_instance1txg8t7ewhdy9 as Companion_instance,
  DoubleCompanionObject_instance1bwirhd8p0qhc as DoubleCompanionObject_instance,
  FloatCompanionObject_instance1gmrivpej6y77 as FloatCompanionObject_instance,
} from './kotlin-kotlin-stdlib.mjs';
import {
  serializer1x79l67jvwntn as serializer,
  get_nullable197rfua9r7fsz as get_nullable,
  ListSerializer1hxuk9dx5n9du as ListSerializer,
  ArraySerializermpxy3fgi5xnb as ArraySerializer,
  serializer3u3hsxnenk49x as serializer_0,
  serializer1r0h5yakm679b as serializer_1,
  serializer1tw0a8bv7lkga as serializer_2,
  serializer1hu9wv9at41ww as serializer_3,
  serializerodflzzf6s3fp as serializer_4,
  serializer1wpgysz06u9ol as serializer_5,
  serializer3x9uckd1deom as serializer_6,
} from './kotlinx-serialization-kotlinx-serialization-core.mjs';
//region block: imports
//endregion
//region block: pre-declaration
//endregion
function decodeNullableIntElement(_this__u8e3s4, descriptor, index) {
  return _this__u8e3s4.rw(descriptor, index, get_nullableIntSerializer());
}
function decodeNullableStringElement(_this__u8e3s4, descriptor, index) {
  return _this__u8e3s4.rw(descriptor, index, get_nullableStringSerializer());
}
function decodeNullableBooleanElement(_this__u8e3s4, descriptor, index) {
  return _this__u8e3s4.rw(descriptor, index, get_nullableBooleanSerializer());
}
function encodeNullableIntElement(_this__u8e3s4, descriptor, index, value) {
  _this__u8e3s4.wx(descriptor, index, get_nullableIntSerializer(), value);
}
function encodeNullableStringElement(_this__u8e3s4, descriptor, index, value) {
  _this__u8e3s4.wx(descriptor, index, get_nullableStringSerializer(), value);
}
function encodeStringArrayElement(_this__u8e3s4, descriptor, index, value) {
  _this__u8e3s4.wx(descriptor, index, get_stringArraySerializer(), value);
}
function encodeNullableBooleanElement(_this__u8e3s4, descriptor, index, value) {
  _this__u8e3s4.wx(descriptor, index, get_nullableBooleanSerializer(), value);
}
function get_nullableStringSerializer() {
  _init_properties_nullableSerializers_serializers_kt__uyqu7();
  return nullableStringSerializer;
}
var nullableStringSerializer;
var stringListSerializer;
var nullableStringListSerializer;
function get_stringArraySerializer() {
  _init_properties_nullableSerializers_serializers_kt__uyqu7();
  return stringArraySerializer;
}
var stringArraySerializer;
var nullableStringArraySerializer;
function get_nullableBooleanSerializer() {
  _init_properties_nullableSerializers_serializers_kt__uyqu7();
  return nullableBooleanSerializer;
}
var nullableBooleanSerializer;
var nullableByteSerializer;
var nullableShortSerializer;
function get_nullableIntSerializer() {
  _init_properties_nullableSerializers_serializers_kt__uyqu7();
  return nullableIntSerializer;
}
var nullableIntSerializer;
var nullableLongSerializer;
var nullableDoubleSerializer;
var nullableFloatSerializer;
var properties_initialized_nullableSerializers_serializers_kt_tyshpf;
function _init_properties_nullableSerializers_serializers_kt__uyqu7() {
  if (!properties_initialized_nullableSerializers_serializers_kt_tyshpf) {
    properties_initialized_nullableSerializers_serializers_kt_tyshpf = true;
    nullableStringSerializer = get_nullable(serializer(StringCompanionObject_instance));
    stringListSerializer = ListSerializer(serializer(StringCompanionObject_instance));
    nullableStringListSerializer = get_nullable(ListSerializer(serializer(StringCompanionObject_instance)));
    // Inline function 'kotlinx.serialization.builtins.ArraySerializer' call
    var elementSerializer = serializer(StringCompanionObject_instance);
    stringArraySerializer = ArraySerializer(PrimitiveClasses_getInstance().me(), elementSerializer);
    // Inline function 'kotlinx.serialization.builtins.ArraySerializer' call
    var elementSerializer_0 = serializer(StringCompanionObject_instance);
    var tmp$ret$0 = ArraySerializer(PrimitiveClasses_getInstance().me(), elementSerializer_0);
    nullableStringArraySerializer = get_nullable(tmp$ret$0);
    nullableBooleanSerializer = get_nullable(serializer_0(BooleanCompanionObject_instance));
    nullableByteSerializer = get_nullable(serializer_1(ByteCompanionObject_instance));
    nullableShortSerializer = get_nullable(serializer_2(ShortCompanionObject_instance));
    nullableIntSerializer = get_nullable(serializer_3(IntCompanionObject_instance));
    nullableLongSerializer = get_nullable(serializer_4(Companion_instance));
    nullableDoubleSerializer = get_nullable(serializer_5(DoubleCompanionObject_instance));
    nullableFloatSerializer = get_nullable(serializer_6(FloatCompanionObject_instance));
  }
}
//region block: exports
export {
  decodeNullableBooleanElement as decodeNullableBooleanElement2mibszteo1dbv,
  decodeNullableIntElement as decodeNullableIntElement33f6dr575xvqa,
  decodeNullableStringElement as decodeNullableStringElement3f6s2kwh7ol5y,
  encodeNullableBooleanElement as encodeNullableBooleanElementx419t8kcjsew,
  encodeNullableIntElement as encodeNullableIntElement24zeq3y1z0lv7,
  encodeNullableStringElement as encodeNullableStringElement1xeyx7vmwqbzv,
  encodeStringArrayElement as encodeStringArrayElement1b1564jwta1lt,
};
//endregion

//# sourceMappingURL=bedalton-common-serialization.mjs.map
