import {
  EmptySerializersModule991ju6pz9b79 as EmptySerializersModule,
  get_elementDescriptors13xxljc24xo44 as get_elementDescriptors,
  SEALED_getInstance2urch17m532zf as SEALED_getInstance,
  getPolymorphicDescriptors28tu404k84a43 as getPolymorphicDescriptors,
  OPEN_getInstance2yamxaa1a8hlr as OPEN_getInstance,
  SerializationExceptioneqrdve3ts2n9 as SerializationException,
  STRING_getInstance3lkmlozu5h7cs as STRING_getInstance,
  PrimitiveKindndgbuh6is7ze as PrimitiveKind,
  MapLikeSerializer39txwolqjdcc2 as MapLikeSerializer,
  MapEntrySerializer3oe1sx5ozvw2u as MapEntrySerializer,
  SetSerializert3lb0yy9iftr as SetSerializer,
  AbstractCollectionSerializer32faixtbm1vtg as AbstractCollectionSerializer,
  MAP_getInstance141vh6u7faopd as MAP_getInstance,
  LIST_getInstance2leq5bbahk4rz as LIST_getInstance,
  ElementMarker33ojvsajwmzts as ElementMarker,
  PolymorphicKindla9gurooefwb as PolymorphicKind,
  OBJECT_getInstance167untwb9admi as OBJECT_getInstance,
  CLASS_getInstance25nhr3t715wdo as CLASS_getInstance,
  UByteArraySerializer1sccfecbzq55o as UByteArraySerializer,
  ByteArraySerializersn06x87bo7h0 as ByteArraySerializer,
  DeserializationStrategy1z3z5pj9f7zc8 as DeserializationStrategy,
  decodeSerializableElement$default1kkisaow5bg5n as decodeSerializableElement$default,
  decodeNullableSerializableElement$default3hpfzb7uwvr0v as decodeNullableSerializableElement$default,
  decodeSerializableValue3h7ajfesxzjda as decodeSerializableValue,
  decodeSequentially27kmi8jnnsnbc as decodeSequentially,
  decodeCollectionSize3l4gjp9ef5h8u as decodeCollectionSize,
  Decoder23nde051s631g as Decoder,
  CompositeDecoder2tzm7wpwkr0og as CompositeDecoder,
} from './kotlinx-serialization-kotlinx-serialization-core.mjs';
import {
  initMetadataForObject1cxne3s9w65el as initMetadataForObject,
  VOID3gxj6tk5isa35 as VOID,
  initMetadataForClassbxx6q50dy2s7 as initMetadataForClass,
  THROW_CCE2g6jy02ryeudk as THROW_CCE,
  getStringHashCode26igk1bx568vk as getStringHashCode,
  Unit_instancev9v8hjid95df as Unit_instance,
  Enum3alwj03lh1n41 as Enum,
  IllegalArgumentException2asla15b5jaob as IllegalArgumentException,
  toList3jhuyej2anx2q as toList,
  equals2au1ep9vhcato as equals,
  Collection1k04j3hzsbod0 as Collection,
  isInterface3d6p8outrmvmk as isInterface,
  fromInt2ii0rejb1w62w as fromInt,
  captureStack1fzi4aczwc4hg as captureStack,
  initMetadataForCompanion1wyw17z38v6ac as initMetadataForCompanion,
  enumEntries20mr21zbe3az4 as enumEntries,
  convertToInty04h231mmjoh as convertToInt,
  toString1pkumu07cwy4m as toString,
  HashMap1a0ld5kgwhmhv as HashMap,
  ArrayList3it5z8td81qkl as ArrayList,
  collectionSizeOrDefault36dulx8yinfqm as collectionSizeOrDefault,
  ensureNotNull1e947j3ixpazm as ensureNotNull,
  primitiveArrayConcatwxgknw08pmlb as primitiveArrayConcat,
  KtMap140uvy3s5zad8 as KtMap,
  mapCapacity1h45rc3eh9p2l as mapCapacity,
  coerceAtLeast2bkz8m9ik7hep as coerceAtLeast,
  LinkedHashMap1zhqxkxv3xnkl as LinkedHashMap,
  toByte4i43936u611k as toByte,
  toShort36kaw0zjdq3ex as toShort,
  numberToChar93r9buh19yek as numberToChar,
  UByteArray2qu4d6gwssdf9 as UByteArray,
  _UByteArray___get_storage__impl__d4kctt79a8gj8q1jsz as _UByteArray___get_storage__impl__d4kctt,
  _UByteArray___init__impl__ip4y9n1rg5c5y25iboz as _UByteArray___init__impl__ip4y9n,
  isByteArray4nnzfn1x4o3w as isByteArray,
  negate13xrbakfwasjy as negate,
  singleOrNullrknfaxokm1sl as singleOrNull,
  shiftLeft3tsh2sstjchzn as shiftLeft,
  noWhenBranchMatchedException2a6r7ubxgky5j as noWhenBranchMatchedException,
  shiftRight2gqph14wydb8s as shiftRight,
  FloatCompanionObject_instance1gmrivpej6y77 as FloatCompanionObject_instance,
  floatFromBits1n9d03e2m5i5s as floatFromBits,
  DoubleCompanionObject_instance1bwirhd8p0qhc as DoubleCompanionObject_instance,
  doubleFromBits153kwgwnt8ety as doubleFromBits,
  copyOf9mbsebmgnw4t as copyOf,
  protoOf180f3jzyo7rfj as protoOf,
  arrayCopytctsywo3h7gj as arrayCopy,
  decodeToString1dbzcjd620q25 as decodeToString,
} from './kotlin-kotlin-stdlib.mjs';
//region block: imports
var imul = Math.imul;
//endregion
//region block: pre-declaration
class ProtoBuf {
  constructor(encodeDefaults, serializersModule) {
    Default_getInstance();
    this.o1v_1 = encodeDefaults;
    this.p1v_1 = serializersModule;
  }
  uw() {
    return this.p1v_1;
  }
  q1v(deserializer, bytes) {
    var input = new ByteArrayInput(bytes);
    var decoder = new ProtobufDecoder(this, new ProtobufReader(input), deserializer.or());
    return decoder.dw(deserializer);
  }
}
class Default extends ProtoBuf {
  constructor() {
    Default_instance = null;
    super(false, EmptySerializersModule());
    Default_instance = this;
  }
}
class ProtoBufBuilder {
  constructor(proto) {
    this.b1w_1 = proto.o1v_1;
    this.c1w_1 = proto.uw();
  }
}
class ProtoBufImpl extends ProtoBuf {}
class ProtoNumber {
  constructor(number) {
    this.d1w_1 = number;
  }
  equals(other) {
    if (!(other instanceof ProtoNumber))
      return false;
    var tmp0_other_with_cast = other instanceof ProtoNumber ? other : THROW_CCE();
    if (!(this.d1w_1 === tmp0_other_with_cast.d1w_1))
      return false;
    return true;
  }
  hashCode() {
    return imul(getStringHashCode('number'), 127) ^ this.d1w_1;
  }
  toString() {
    return '@kotlinx.serialization.protobuf.ProtoNumber(' + 'number=' + this.d1w_1 + ')';
  }
}
class ProtoIntegerType extends Enum {
  constructor(name, ordinal, signature) {
    super(name, ordinal);
    this.g1w_1 = signature;
  }
}
class ProtoOneOf {}
class ProtoType {}
class ProtoPacked {}
class ProtobufDecodingException extends SerializationException {
  static n1w(message, e) {
    e = e === VOID ? null : e;
    var $this = this.jt(message, e);
    captureStack($this, $this.m1w_1);
    return $this;
  }
}
class Companion {
  constructor() {
    Companion_instance = this;
    var tmp = this;
    var tmp_0 = 0;
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp_1 = Array(8);
    while (tmp_0 < 8) {
      var tmp_2 = tmp_0;
      // Inline function 'kotlin.collections.find' call
      var tmp0 = get_entries();
      var tmp$ret$3;
      $l$block: {
        // Inline function 'kotlin.collections.firstOrNull' call
        var _iterator__ex2g4s = tmp0.d1();
        while (_iterator__ex2g4s.e1()) {
          var element = _iterator__ex2g4s.f1();
          if (element.q1w_1 === tmp_2) {
            tmp$ret$3 = element;
            break $l$block;
          }
        }
        tmp$ret$3 = null;
      }
      var tmp0_elvis_lhs = tmp$ret$3;
      tmp_1[tmp_2] = tmp0_elvis_lhs == null ? ProtoWireType_INVALID_getInstance() : tmp0_elvis_lhs;
      tmp_0 = tmp_0 + 1 | 0;
    }
    tmp.r1w_1 = tmp_1;
  }
  s1w(value) {
    return this.r1w_1[value & 7];
  }
}
class ProtoWireType extends Enum {
  constructor(name, ordinal, typeId) {
    super(name, ordinal);
    this.q1w_1 = typeId;
  }
  toString() {
    return this.j1_1 + '(' + this.q1w_1 + ')';
  }
}
class ProtobufTaggedBase {
  constructor() {
    this.y1x_1 = new BigInt64Array(8);
    this.z1x_1 = -1;
  }
  a1y() {
    return this.z1x_1 === -1 ? 19500n : this.y1x_1[this.z1x_1];
  }
  b1y() {
    var tmp;
    if (this.z1x_1 === -1) {
      tmp = 19500n;
    } else {
      var tmp_0 = this.y1x_1;
      var _unary__edvuaz = this.z1x_1;
      this.z1x_1 = _unary__edvuaz - 1 | 0;
      tmp = tmp_0[_unary__edvuaz];
    }
    return tmp;
  }
  c1y(tag) {
    if (tag === 19500n)
      return Unit_instance;
    this.z1x_1 = this.z1x_1 + 1 | 0;
    var idx = this.z1x_1;
    if (this.z1x_1 >= this.y1x_1.length) {
      expand(this);
    }
    this.y1x_1[idx] = tag;
  }
}
class ProtobufTaggedDecoder extends ProtobufTaggedBase {
  x1x(tag, inlineDescriptor) {
    // Inline function 'kotlin.apply' call
    this.c1y(tag);
    return this;
  }
  pv() {
    return true;
  }
  qv() {
    return null;
  }
  rv() {
    return this.m1x(this.b1y());
  }
  sv() {
    return this.n1x(this.b1y());
  }
  tv() {
    return this.o1x(this.b1y());
  }
  uv() {
    return this.p1x(this.b1y());
  }
  vv() {
    return this.q1x(this.b1y());
  }
  wv() {
    return this.r1x(this.b1y());
  }
  xv() {
    return this.s1x(this.b1y());
  }
  yv() {
    return this.t1x(this.b1y());
  }
  zv() {
    return this.k1x(this.b1y());
  }
  aw(enumDescriptor) {
    return this.u1x(this.b1y(), enumDescriptor);
  }
  ew(descriptor) {
    return this;
  }
  fw(descriptor) {
  }
  gw(descriptor, index) {
    return this.m1x(this.o1a(descriptor, index));
  }
  hw(descriptor, index) {
    return this.n1x(this.o1a(descriptor, index));
  }
  iw(descriptor, index) {
    return this.o1x(this.o1a(descriptor, index));
  }
  jw(descriptor, index) {
    return this.p1x(this.o1a(descriptor, index));
  }
  kw(descriptor, index) {
    return this.q1x(this.o1a(descriptor, index));
  }
  lw(descriptor, index) {
    return this.r1x(this.o1a(descriptor, index));
  }
  mw(descriptor, index) {
    return this.s1x(this.o1a(descriptor, index));
  }
  nw(descriptor, index) {
    return this.t1x(this.o1a(descriptor, index));
  }
  ow(descriptor, index) {
    return this.k1x(this.o1a(descriptor, index));
  }
  qw(descriptor, index, deserializer, previousValue) {
    // Inline function 'kotlinx.serialization.protobuf.internal.ProtobufTaggedBase.tagBlock' call
    var tag = this.o1a(descriptor, index);
    this.c1y(tag);
    return this.cw(deserializer, previousValue);
  }
  sw(descriptor, index, deserializer, previousValue) {
    // Inline function 'kotlinx.serialization.protobuf.internal.ProtobufTaggedBase.tagBlock' call
    var tag = this.o1a(descriptor, index);
    this.c1y(tag);
    var tmp;
    if (this.pv()) {
      tmp = this.cw(deserializer, previousValue);
    } else {
      tmp = this.qv();
    }
    return tmp;
  }
  bw(descriptor) {
    return this.x1x(this.b1y(), descriptor);
  }
  pw(descriptor, index) {
    return this.x1x(this.o1a(descriptor, index), descriptor.su(index));
  }
}
class ProtobufDecoder extends ProtobufTaggedDecoder {
  constructor(proto, reader, descriptor) {
    super();
    this.t1v_1 = proto;
    this.u1v_1 = reader;
    this.v1v_1 = descriptor;
    this.w1v_1 = null;
    this.x1v_1 = null;
    this.y1v_1 = null;
    this.z1v_1 = false;
    var tmp = this;
    tmp.a1w_1 = new ElementMarker(this.v1v_1, ProtobufDecoder$readIfAbsent$ref(this));
    this.l1x(this.v1v_1);
  }
  uw() {
    return this.t1v_1.uw();
  }
  l1x(descriptor) {
    var elements = descriptor.nu();
    if (elements < 32) {
      var tmp = 0;
      var tmp_0 = elements + 1 | 0;
      var tmp_1 = new Int32Array(tmp_0);
      while (tmp < tmp_0) {
        tmp_1[tmp] = -1;
        tmp = tmp + 1 | 0;
      }
      var cache = tmp_1;
      var inductionVariable = 0;
      if (inductionVariable < elements)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var protoId = extractProtoId(descriptor, i, false);
          if (protoId <= elements && !(protoId === -2)) {
            cache[protoId] = i;
          } else {
            return populateCacheMap(this, descriptor, elements);
          }
        }
         while (inductionVariable < elements);
      this.w1v_1 = cache;
    } else {
      populateCacheMap(this, descriptor, elements);
    }
  }
  ew(descriptor) {
    var tmp;
    try {
      var tmp0_subject = descriptor.lu();
      var tmp_0;
      if (equals(tmp0_subject, LIST_getInstance())) {
        var tag = this.a1y();
        var tmp_1;
        if (equals(this.v1v_1.lu(), LIST_getInstance()) && !(tag === 19500n) && !equals(this.v1v_1, descriptor)) {
          var reader = makeDelimited(this.u1v_1, tag);
          reader.g1y();
          // Inline function 'kotlinx.serialization.protobuf.internal.ProtoDesc' call
          var packedBits = false ? 4294967296n : 0n;
          var oneOfBits = false ? 68719476736n : 0n;
          var tmp$ret$0 = packedBits | oneOfBits | ProtoIntegerType_DEFAULT_getInstance().g1w_1 | fromInt(1);
          tmp_1 = new RepeatedDecoder(this.t1v_1, reader, tmp$ret$0, descriptor);
        } else if (this.u1v_1.g1x_1.equals(ProtoWireType_SIZE_DELIMITED_getInstance()) && get_isPackable(descriptor.su(0))) {
          var sliceReader = new ProtobufReader(this.u1v_1.f1y());
          tmp_1 = new PackedArrayDecoder(this.t1v_1, sliceReader, descriptor);
        } else {
          tmp_1 = new RepeatedDecoder(this.t1v_1, this.u1v_1, tag, descriptor);
        }
        return tmp_1;
      } else {
        var tmp_2;
        if (equals(tmp0_subject, CLASS_getInstance())) {
          tmp_2 = true;
        } else {
          var tmp_3;
          if (equals(tmp0_subject, OBJECT_getInstance())) {
            tmp_3 = true;
          } else {
            tmp_3 = tmp0_subject instanceof PolymorphicKind;
          }
          tmp_2 = tmp_3;
        }
        if (tmp_2) {
          var tag_0 = this.a1y();
          if (tag_0 === 19500n && equals(this.v1v_1, descriptor))
            return this;
          if (get_isOneOf(tag_0)) {
            // Inline function 'kotlinx.serialization.protobuf.internal.protoId' call
            var rawIndex = convertToInt(tag_0 & 2147483647n) - 1 | 0;
            var tmp1_safe_receiver = this.y1v_1;
            var tmp2_safe_receiver = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.y3(rawIndex);
            var tmp_4;
            if (tmp2_safe_receiver == null) {
              tmp_4 = null;
            } else {
              // Inline function 'kotlin.let' call
              tmp_4 = overrideId(tag_0, tmp2_safe_receiver);
            }
            var tmp3_elvis_lhs = tmp_4;
            var restoredTag = tmp3_elvis_lhs == null ? tag_0 : tmp3_elvis_lhs;
            return new OneOfPolymorphicReader(this.t1v_1, this.u1v_1, restoredTag, descriptor);
          }
          return new ProtobufDecoder(this.t1v_1, makeDelimited(this.u1v_1, tag_0), descriptor);
        } else {
          if (equals(tmp0_subject, MAP_getInstance())) {
            tmp_0 = new MapEntryReader(this.t1v_1, makeDelimitedForced(this.u1v_1, this.a1y()), this.a1y(), descriptor);
          } else {
            throw SerializationException.gt('Primitives are not supported at top-level');
          }
        }
      }
      tmp = tmp_0;
    } catch ($p) {
      var tmp_5;
      if ($p instanceof ProtobufDecodingException) {
        var e = $p;
        var tmp_6 = descriptor.ss();
        var tmp_7 = this.v1v_1.ss();
        // Inline function 'kotlinx.serialization.protobuf.internal.protoId' call
        var this_0 = this.a1y();
        var tmp$ret$4 = convertToInt(this_0 & 2147483647n);
        throw ProtobufDecodingException.n1w('Fail to begin structure for ' + tmp_6 + ' in ' + tmp_7 + ' at proto number ' + tmp$ret$4, e);
      } else {
        throw $p;
      }
    }
    return tmp;
  }
  fw(descriptor) {
  }
  m1x(tag) {
    var value = this.p1x(tag);
    var tmp;
    switch (value) {
      case 0:
        tmp = false;
        break;
      case 1:
        tmp = true;
        break;
      default:
        throw SerializationException.gt('Unexpected boolean value: ' + value);
    }
    return tmp;
  }
  n1x(tag) {
    return toByte(this.p1x(tag));
  }
  o1x(tag) {
    return toShort(this.p1x(tag));
  }
  p1x(tag) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.serialization.protobuf.internal.ProtobufDecoder.decodeOrThrow' call
      try {
        var tmp;
        if (tag === 19500n) {
          tmp = this.u1v_1.i1y();
        } else {
          tmp = this.u1v_1.h1y(get_integerType(tag));
        }
        tmp$ret$0 = tmp;
        break $l$block;
      } catch ($p) {
        if ($p instanceof ProtobufDecodingException) {
          var e = $p;
          // Inline function 'kotlinx.serialization.protobuf.internal.ProtobufDecoder.rethrowException' call
          // Inline function 'kotlinx.serialization.protobuf.internal.protoId' call
          var tmp$ret$3 = convertToInt(tag & 2147483647n);
          throw ProtobufDecodingException.n1w('Error while decoding proto number ' + tmp$ret$3 + ' of ' + this.v1v_1.ss(), e);
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  }
  q1x(tag) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.serialization.protobuf.internal.ProtobufDecoder.decodeOrThrow' call
      try {
        var tmp;
        if (tag === 19500n) {
          tmp = this.u1v_1.k1y();
        } else {
          tmp = this.u1v_1.j1y(get_integerType(tag));
        }
        tmp$ret$0 = tmp;
        break $l$block;
      } catch ($p) {
        if ($p instanceof ProtobufDecodingException) {
          var e = $p;
          // Inline function 'kotlinx.serialization.protobuf.internal.ProtobufDecoder.rethrowException' call
          // Inline function 'kotlinx.serialization.protobuf.internal.protoId' call
          var tmp$ret$3 = convertToInt(tag & 2147483647n);
          throw ProtobufDecodingException.n1w('Error while decoding proto number ' + tmp$ret$3 + ' of ' + this.v1v_1.ss(), e);
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  }
  r1x(tag) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.serialization.protobuf.internal.ProtobufDecoder.decodeOrThrow' call
      try {
        var tmp;
        if (tag === 19500n) {
          tmp = this.u1v_1.m1y();
        } else {
          tmp = this.u1v_1.l1y();
        }
        tmp$ret$0 = tmp;
        break $l$block;
      } catch ($p) {
        if ($p instanceof ProtobufDecodingException) {
          var e = $p;
          // Inline function 'kotlinx.serialization.protobuf.internal.ProtobufDecoder.rethrowException' call
          // Inline function 'kotlinx.serialization.protobuf.internal.protoId' call
          var tmp$ret$3 = convertToInt(tag & 2147483647n);
          throw ProtobufDecodingException.n1w('Error while decoding proto number ' + tmp$ret$3 + ' of ' + this.v1v_1.ss(), e);
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  }
  s1x(tag) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.serialization.protobuf.internal.ProtobufDecoder.decodeOrThrow' call
      try {
        var tmp;
        if (tag === 19500n) {
          tmp = this.u1v_1.o1y();
        } else {
          tmp = this.u1v_1.n1y();
        }
        tmp$ret$0 = tmp;
        break $l$block;
      } catch ($p) {
        if ($p instanceof ProtobufDecodingException) {
          var e = $p;
          // Inline function 'kotlinx.serialization.protobuf.internal.ProtobufDecoder.rethrowException' call
          // Inline function 'kotlinx.serialization.protobuf.internal.protoId' call
          var tmp$ret$3 = convertToInt(tag & 2147483647n);
          throw ProtobufDecodingException.n1w('Error while decoding proto number ' + tmp$ret$3 + ' of ' + this.v1v_1.ss(), e);
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  }
  t1x(tag) {
    return numberToChar(this.p1x(tag));
  }
  k1x(tag) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.serialization.protobuf.internal.ProtobufDecoder.decodeOrThrow' call
      try {
        var tmp;
        if (tag === 19500n) {
          tmp = this.u1v_1.q1y();
        } else {
          tmp = this.u1v_1.p1y();
        }
        tmp$ret$0 = tmp;
        break $l$block;
      } catch ($p) {
        if ($p instanceof ProtobufDecodingException) {
          var e = $p;
          // Inline function 'kotlinx.serialization.protobuf.internal.ProtobufDecoder.rethrowException' call
          // Inline function 'kotlinx.serialization.protobuf.internal.protoId' call
          var tmp$ret$3 = convertToInt(tag & 2147483647n);
          throw ProtobufDecodingException.n1w('Error while decoding proto number ' + tmp$ret$3 + ' of ' + this.v1v_1.ss(), e);
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  }
  u1x(tag, enumDescription) {
    return findIndexByTag(this, enumDescription, this.p1x(tag));
  }
  dw(deserializer) {
    return this.cw(deserializer, null);
  }
  cw(deserializer, previousValue) {
    var tmp;
    try {
      var tmp_0;
      if (deserializer instanceof MapLikeSerializer) {
        tmp_0 = deserializeMap(this, isInterface(deserializer, DeserializationStrategy) ? deserializer : THROW_CCE(), previousValue);
      } else {
        if (equals(deserializer.or(), ByteArraySerializer().or())) {
          tmp_0 = deserializeByteArray(this, (previousValue == null ? true : isByteArray(previousValue)) ? previousValue : THROW_CCE());
        } else {
          if (equals(deserializer.or(), UByteArraySerializer().or())) {
            var tmp_1;
            if (previousValue == null ? true : previousValue instanceof UByteArray) {
              var tmp_2 = previousValue;
              tmp_1 = tmp_2 == null ? null : tmp_2.bq_1;
            } else {
              tmp_1 = THROW_CCE();
            }
            var tmp0_safe_receiver = tmp_1;
            var tmp_3;
            var tmp_4 = tmp0_safe_receiver;
            if ((tmp_4 == null ? null : new UByteArray(tmp_4)) == null) {
              tmp_3 = null;
            } else {
              // Inline function 'kotlin.collections.asByteArray' call
              tmp_3 = _UByteArray___get_storage__impl__d4kctt(tmp0_safe_receiver);
            }
            // Inline function 'kotlin.collections.asUByteArray' call
            var this_0 = deserializeByteArray(this, tmp_3);
            var tmp$ret$1 = _UByteArray___init__impl__ip4y9n(this_0);
            tmp_0 = new UByteArray(tmp$ret$1);
          } else {
            if (deserializer instanceof AbstractCollectionSerializer) {
              tmp_0 = (deserializer instanceof AbstractCollectionSerializer ? deserializer : THROW_CCE()).c10(this, previousValue);
            } else {
              tmp_0 = deserializer.qr(this);
            }
          }
        }
      }
      tmp = tmp_0;
    } catch ($p) {
      var tmp_5;
      if ($p instanceof ProtobufDecodingException) {
        var e = $p;
        var currentTag = this.a1y();
        var tmp_6;
        if (!equals(this.v1v_1, deserializer.or())) {
          var tmp_7;
          if (equals(this.v1v_1.lu(), LIST_getInstance()) && !equals(deserializer.or().lu(), MAP_getInstance())) {
            // Inline function 'kotlinx.serialization.protobuf.internal.protoId' call
            tmp_7 = 'Error while decoding index ' + (convertToInt(currentTag & 2147483647n) - 1 | 0) + ' in repeated field of ' + deserializer.or().ss();
          } else if (equals(this.v1v_1.lu(), MAP_getInstance())) {
            // Inline function 'kotlinx.serialization.protobuf.internal.protoId' call
            var index = (convertToInt(currentTag & 2147483647n) - 1 | 0) / 2 | 0;
            var tmp_8;
            // Inline function 'kotlinx.serialization.protobuf.internal.protoId' call
            if (((convertToInt(currentTag & 2147483647n) - 1 | 0) % 2 | 0) === 0) {
              tmp_8 = 'key';
            } else {
              tmp_8 = 'value';
            }
            var field = tmp_8;
            tmp_7 = 'Error while decoding ' + field + ' of index ' + index + ' in map field of ' + deserializer.or().ss();
          } else {
            var tmp_9 = deserializer.or().ss();
            // Inline function 'kotlinx.serialization.protobuf.internal.protoId' call
            tmp_7 = 'Error while decoding ' + tmp_9 + ' at proto number ' + convertToInt(currentTag & 2147483647n) + ' of ' + this.v1v_1.ss();
          }
          tmp_6 = tmp_7;
        } else {
          tmp_6 = 'Error while decoding ' + this.v1v_1.ss();
        }
        var msg = tmp_6;
        throw ProtobufDecodingException.n1w(msg, e);
      } else {
        throw $p;
      }
    }
    return tmp;
  }
  o1a(_this__u8e3s4, index) {
    return extractParameters(_this__u8e3s4, index);
  }
  ww(descriptor) {
    try {
      while (true) {
        var protoId = this.u1v_1.g1y();
        if (protoId === -1) {
          return this.a1w_1.o12();
        }
        if (protoId === 0) {
          throw SerializationException.gt('0 is not allowed as the protobuf field number in ' + descriptor.ss() + ', the input bytes may have been corrupted');
        }
        var index = getIndexByNum(this, protoId);
        if (index === -1) {
          this.u1v_1.r1y();
        } else {
          if (get_isOneOf(extractParameters(descriptor, index))) {
            var tmp0_safe_receiver = this.y1v_1;
            if (tmp0_safe_receiver == null)
              null;
            else
              tmp0_safe_receiver.s3(index, protoId);
          }
          this.a1w_1.n12(index);
          return index;
        }
      }
    } catch ($p) {
      if ($p instanceof ProtobufDecodingException) {
        var e = $p;
        throw ProtobufDecodingException.n1w('Fail to get element index for ' + descriptor.ss() + ' in ' + this.v1v_1.ss(), e);
      } else {
        throw $p;
      }
    }
  }
  pv() {
    return !this.z1v_1;
  }
}
class PackedArrayDecoder extends ProtobufDecoder {
  constructor(proto, reader, descriptor) {
    super(proto, reader, descriptor);
    this.d1x_1 = 0;
  }
  o1a(_this__u8e3s4, index) {
    return 19500n;
  }
  ew(descriptor) {
    throw SerializationException.gt('Packing only supports primitive number types. The input type however was a struct: ' + toString(descriptor));
  }
  ww(descriptor) {
    if (this.u1v_1.j1x())
      return -1;
    var _unary__edvuaz = this.d1x_1;
    this.d1x_1 = _unary__edvuaz + 1 | 0;
    return _unary__edvuaz;
  }
  k1x(tag) {
    throw SerializationException.gt('Packing only supports primitive number types. The actual reading is for string.');
  }
}
class MapEntryReader extends ProtobufDecoder {
  constructor(proto, decoder, parentTag, descriptor) {
    super(proto, decoder, descriptor);
    this.c1z_1 = parentTag;
  }
  o1a(_this__u8e3s4, index) {
    var tmp;
    if ((index % 2 | 0) === 0) {
      // Inline function 'kotlinx.serialization.protobuf.internal.ProtoDesc' call
      var packedBits = false ? 4294967296n : 0n;
      var oneOfBits = false ? 68719476736n : 0n;
      tmp = packedBits | oneOfBits | get_integerType(this.c1z_1).g1w_1 | fromInt(1);
    } else {
      // Inline function 'kotlinx.serialization.protobuf.internal.ProtoDesc' call
      var packedBits_0 = false ? 4294967296n : 0n;
      var oneOfBits_0 = false ? 68719476736n : 0n;
      tmp = packedBits_0 | oneOfBits_0 | get_integerType(this.c1z_1).g1w_1 | fromInt(2);
    }
    return tmp;
  }
}
class RepeatedDecoder extends ProtobufDecoder {
  constructor(proto, decoder, currentTag, descriptor) {
    super(proto, decoder, descriptor);
    this.n1z_1 = -1;
    var tmp = this;
    var tmp_0;
    if (currentTag === 19500n) {
      var length = this.u1v_1.i1y();
      // Inline function 'kotlin.require' call
      if (!(length >= 0)) {
        var message = 'Expected positive length for ' + toString(descriptor) + ', but got ' + length;
        throw IllegalArgumentException.t1(toString(message));
      }
      tmp_0 = negate(fromInt(length));
    } else {
      tmp_0 = currentTag;
    }
    tmp.o1z_1 = tmp_0;
  }
  ww(descriptor) {
    if (this.o1z_1 > 0n) {
      return decodeTaggedListIndex(this);
    }
    return decodeListIndexNoTag(this);
  }
  o1a(_this__u8e3s4, index) {
    if (this.o1z_1 > 0n)
      return this.o1z_1;
    return 19500n;
  }
}
class OneOfPolymorphicReader extends ProtobufDecoder {
  constructor(proto, decoder, parentTag, descriptor) {
    super(proto, decoder, descriptor);
    this.b20_1 = parentTag;
    this.c20_1 = false;
    this.d20_1 = false;
  }
  o1a(_this__u8e3s4, index) {
    var tmp;
    if (index === 0) {
      tmp = 19501n;
    } else {
      tmp = extractParameters(_this__u8e3s4, 0);
    }
    return tmp;
  }
  ew(descriptor) {
    var tmp;
    if (equals(descriptor, this.v1v_1)) {
      tmp = this;
    } else {
      tmp = new OneOfElementReader(this.t1v_1, this.u1v_1, descriptor);
    }
    return tmp;
  }
  ww(descriptor) {
    if (!this.c20_1) {
      this.c20_1 = true;
      return 0;
    } else if (!this.d20_1) {
      this.d20_1 = true;
      return 1;
    } else {
      return -1;
    }
  }
  k1x(tag) {
    var tmp;
    if (tag === 19501n) {
      var tmp_0 = this.uw();
      // Inline function 'kotlinx.serialization.protobuf.internal.protoId' call
      var this_0 = this.b20_1;
      var tmp$ret$0 = convertToInt(this_0 & 2147483647n);
      var tmp0_safe_receiver = getActualOneOfSerializer(this.v1v_1, tmp_0, tmp$ret$0);
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.ss();
      var tmp_1;
      if (tmp1_elvis_lhs == null) {
        var tmp_2 = this.v1v_1.ss();
        // Inline function 'kotlinx.serialization.protobuf.internal.protoId' call
        var this_1 = this.b20_1;
        var tmp$ret$1 = convertToInt(this_1 & 2147483647n);
        throw SerializationException.gt('Cannot find a subclass of ' + tmp_2 + ' annotated with @ProtoNumber(' + tmp$ret$1 + ').');
      } else {
        tmp_1 = tmp1_elvis_lhs;
      }
      tmp = tmp_1;
    } else {
      tmp = super.k1x(tag);
    }
    return tmp;
  }
}
class OneOfElementReader extends ProtobufDecoder {
  constructor(proto, decoder, descriptor) {
    super(proto, decoder, descriptor);
    // Inline function 'kotlin.require' call
    if (!(descriptor.nu() === 1)) {
      var message = 'Implementation of oneOf type ' + descriptor.ss() + ' should contain only 1 element, but get ' + descriptor.nu();
      throw IllegalArgumentException.t1(toString(message));
    }
    // Inline function 'kotlin.collections.filterIsInstance' call
    var tmp0 = descriptor.ru(0);
    // Inline function 'kotlin.collections.filterIsInstanceTo' call
    var destination = ArrayList.b2();
    var _iterator__ex2g4s = tmp0.d1();
    while (_iterator__ex2g4s.e1()) {
      var element = _iterator__ex2g4s.f1();
      if (element instanceof ProtoNumber) {
        destination.g2(element);
      }
    }
    var protoNumber = singleOrNull(destination);
    // Inline function 'kotlin.require' call
    if (!!(protoNumber == null)) {
      var message_0 = 'Implementation of oneOf type ' + descriptor.ss() + ' should have @ProtoNumber annotation';
      throw IllegalArgumentException.t1(toString(message_0));
    }
    this.o20_1 = protoNumber.d1w_1;
    this.p20_1 = false;
  }
  ew(descriptor) {
    var tmp0_subject = descriptor.lu();
    var tmp;
    var tmp_0;
    if (equals(tmp0_subject, CLASS_getInstance())) {
      tmp_0 = true;
    } else {
      var tmp_1;
      if (equals(tmp0_subject, OBJECT_getInstance())) {
        tmp_1 = true;
      } else {
        tmp_1 = tmp0_subject instanceof PolymorphicKind;
      }
      tmp_0 = tmp_1;
    }
    if (tmp_0) {
      var tag = this.a1y();
      if (tag === 19500n && equals(this.v1v_1, descriptor))
        return this;
      if (get_isOneOf(tag))
        throw SerializationException.gt('An oneof element cannot be directly child of another oneof element');
      tmp = new ProtobufDecoder(this.t1v_1, makeDelimited(this.u1v_1, tag), descriptor);
    } else {
      throw SerializationException.gt('Type ' + descriptor.lu().toString() + ' cannot be directly child of oneof element');
    }
    return tmp;
  }
  ww(descriptor) {
    var tmp;
    if (this.p20_1) {
      tmp = -1;
    } else {
      this.p20_1 = true;
      tmp = 0;
    }
    return tmp;
  }
}
class ProtobufReader {
  constructor(input) {
    this.e1x_1 = input;
    this.f1x_1 = -1;
    this.g1x_1 = ProtoWireType_INVALID_getInstance();
    this.h1x_1 = false;
    this.i1x_1 = 0;
  }
  j1x() {
    return !this.h1x_1 && this.e1x_1.w20() === 0;
  }
  g1y() {
    if (this.h1x_1) {
      this.h1x_1 = false;
      var previousHeader = this.f1x_1 << 3 | this.g1x_1.q1w_1;
      // Inline function 'kotlin.also' call
      var this_0 = updateIdAndType(this, this.i1x_1);
      this.i1x_1 = previousHeader;
      return this_0;
    }
    this.i1x_1 = this.f1x_1 << 3 | this.g1x_1.q1w_1;
    var header = convertToInt(this.e1x_1.u20(true));
    return updateIdAndType(this, header);
  }
  p1z() {
    this.h1x_1 = true;
    var nextHeader = this.f1x_1 << 3 | this.g1x_1.q1w_1;
    updateIdAndType(this, this.i1x_1);
    this.i1x_1 = nextHeader;
  }
  r1y() {
    switch (this.g1x_1.k1_1) {
      case 1:
        this.h1y(ProtoIntegerType_DEFAULT_getInstance());
        break;
      case 2:
        this.j1y(ProtoIntegerType_FIXED_getInstance());
        break;
      case 3:
        this.x20();
        break;
      case 4:
        this.h1y(ProtoIntegerType_FIXED_getInstance());
        break;
      default:
        throw ProtobufDecodingException.n1w('Unsupported start group or end group wire type: ' + this.g1x_1.toString());
    }
  }
  d1y() {
    // Inline function 'kotlinx.serialization.protobuf.internal.ProtobufReader.assertWireType' call
    var expected = ProtoWireType_SIZE_DELIMITED_getInstance();
    if (!this.g1x_1.equals(expected))
      throw ProtobufDecodingException.n1w('Expected wire type ' + expected.toString() + ', but found ' + this.g1x_1.toString());
    return this.e1y();
  }
  x20() {
    // Inline function 'kotlinx.serialization.protobuf.internal.ProtobufReader.assertWireType' call
    var expected = ProtoWireType_SIZE_DELIMITED_getInstance();
    if (!this.g1x_1.equals(expected))
      throw ProtobufDecodingException.n1w('Expected wire type ' + expected.toString() + ', but found ' + this.g1x_1.toString());
    var length = decode32(this);
    checkLength(this, length);
    this.e1x_1.y20(length);
  }
  e1y() {
    var length = decode32(this);
    checkLength(this, length);
    return this.e1x_1.z20(length);
  }
  f1y() {
    // Inline function 'kotlinx.serialization.protobuf.internal.ProtobufReader.assertWireType' call
    var expected = ProtoWireType_SIZE_DELIMITED_getInstance();
    if (!this.g1x_1.equals(expected))
      throw ProtobufDecodingException.n1w('Expected wire type ' + expected.toString() + ', but found ' + this.g1x_1.toString());
    return this.q1z();
  }
  q1z() {
    var length = decode32(this);
    checkLength(this, length);
    return this.e1x_1.a21(length);
  }
  h1y(format) {
    var wireType = format.equals(ProtoIntegerType_FIXED_getInstance()) ? ProtoWireType_i32_getInstance() : ProtoWireType_VARINT_getInstance();
    // Inline function 'kotlinx.serialization.protobuf.internal.ProtobufReader.assertWireType' call
    if (!this.g1x_1.equals(wireType))
      throw ProtobufDecodingException.n1w('Expected wire type ' + wireType.toString() + ', but found ' + this.g1x_1.toString());
    return decode32(this, format);
  }
  i1y() {
    return decode32(this);
  }
  j1y(format) {
    var wireType = format.equals(ProtoIntegerType_FIXED_getInstance()) ? ProtoWireType_i64_getInstance() : ProtoWireType_VARINT_getInstance();
    // Inline function 'kotlinx.serialization.protobuf.internal.ProtobufReader.assertWireType' call
    if (!this.g1x_1.equals(wireType))
      throw ProtobufDecodingException.n1w('Expected wire type ' + wireType.toString() + ', but found ' + this.g1x_1.toString());
    return decode64(this, format);
  }
  k1y() {
    return decode64(this, ProtoIntegerType_DEFAULT_getInstance());
  }
  l1y() {
    // Inline function 'kotlinx.serialization.protobuf.internal.ProtobufReader.assertWireType' call
    var expected = ProtoWireType_i32_getInstance();
    if (!this.g1x_1.equals(expected))
      throw ProtobufDecodingException.n1w('Expected wire type ' + expected.toString() + ', but found ' + this.g1x_1.toString());
    // Inline function 'kotlin.fromBits' call
    var bits = readIntLittleEndian(this);
    return floatFromBits(bits);
  }
  m1y() {
    // Inline function 'kotlin.fromBits' call
    var bits = readIntLittleEndian(this);
    return floatFromBits(bits);
  }
  n1y() {
    // Inline function 'kotlinx.serialization.protobuf.internal.ProtobufReader.assertWireType' call
    var expected = ProtoWireType_i64_getInstance();
    if (!this.g1x_1.equals(expected))
      throw ProtobufDecodingException.n1w('Expected wire type ' + expected.toString() + ', but found ' + this.g1x_1.toString());
    // Inline function 'kotlin.fromBits' call
    var bits = readLongLittleEndian(this);
    return doubleFromBits(bits);
  }
  o1y() {
    // Inline function 'kotlin.fromBits' call
    var bits = readLongLittleEndian(this);
    return doubleFromBits(bits);
  }
  p1y() {
    // Inline function 'kotlinx.serialization.protobuf.internal.ProtobufReader.assertWireType' call
    var expected = ProtoWireType_SIZE_DELIMITED_getInstance();
    if (!this.g1x_1.equals(expected))
      throw ProtobufDecodingException.n1w('Expected wire type ' + expected.toString() + ', but found ' + this.g1x_1.toString());
    var length = decode32(this);
    checkLength(this, length);
    return this.e1x_1.b21(length);
  }
  q1y() {
    var length = decode32(this);
    checkLength(this, length);
    return this.e1x_1.b21(length);
  }
}
class ByteArrayInput {
  constructor(array, endIndex) {
    endIndex = endIndex === VOID ? array.length : endIndex;
    this.q20_1 = array;
    this.r20_1 = endIndex;
    this.s20_1 = 0;
  }
  w20() {
    return this.r20_1 - this.s20_1 | 0;
  }
  a21(size) {
    ensureEnoughBytes(this, size);
    var result = new ByteArrayInput(this.q20_1, this.s20_1 + size | 0);
    result.s20_1 = this.s20_1;
    this.s20_1 = this.s20_1 + size | 0;
    return result;
  }
  t20() {
    var tmp;
    if (this.s20_1 < this.r20_1) {
      var tmp_0 = this.q20_1;
      var _unary__edvuaz = this.s20_1;
      this.s20_1 = _unary__edvuaz + 1 | 0;
      tmp = tmp_0[_unary__edvuaz] & 255;
    } else {
      tmp = -1;
    }
    return tmp;
  }
  z20(bytesCount) {
    ensureEnoughBytes(this, bytesCount);
    var b = new Int8Array(bytesCount);
    var length = b.length;
    var copied = (this.r20_1 - this.s20_1 | 0) < length ? this.r20_1 - this.s20_1 | 0 : length;
    var tmp0 = this.q20_1;
    var tmp6 = this.s20_1;
    // Inline function 'kotlin.collections.copyInto' call
    var endIndex = this.s20_1 + copied | 0;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp = tmp0;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    arrayCopy(tmp, b, 0, tmp6, endIndex);
    this.s20_1 = this.s20_1 + copied | 0;
    return b;
  }
  y20(bytesCount) {
    ensureEnoughBytes(this, bytesCount);
    this.s20_1 = this.s20_1 + bytesCount | 0;
  }
  b21(length) {
    var result = decodeToString(this.q20_1, this.s20_1, this.s20_1 + length | 0);
    this.s20_1 = this.s20_1 + length | 0;
    return result;
  }
  v20() {
    if (this.s20_1 === this.r20_1) {
      eof(this);
    }
    var currentPosition = this.s20_1;
    var tmp = this.q20_1;
    var _unary__edvuaz = currentPosition;
    currentPosition = _unary__edvuaz + 1 | 0;
    var result = tmp[_unary__edvuaz];
    if (result >= 0) {
      this.s20_1 = currentPosition;
      return result;
    } else if ((this.r20_1 - this.s20_1 | 0) > 1) {
      var tmp_0 = result;
      var tmp_1 = this.q20_1;
      var _unary__edvuaz_0 = currentPosition;
      currentPosition = _unary__edvuaz_0 + 1 | 0;
      result = tmp_0 ^ tmp_1[_unary__edvuaz_0] << 7;
      if (result < 0) {
        this.s20_1 = currentPosition;
        return result ^ -128;
      }
    }
    return readVarint32SlowPath(this);
  }
  u20(eofAllowed) {
    if (this.s20_1 === this.r20_1) {
      if (eofAllowed)
        return -1n;
      else {
        eof(this);
      }
    }
    var currentPosition = this.s20_1;
    var tmp = this.q20_1;
    var _unary__edvuaz = currentPosition;
    currentPosition = _unary__edvuaz + 1 | 0;
    var result = fromInt(tmp[_unary__edvuaz]);
    if (result >= 0n) {
      this.s20_1 = currentPosition;
      return result;
    } else if ((this.r20_1 - this.s20_1 | 0) > 1) {
      var tmp_0 = result;
      var tmp_1 = this.q20_1;
      var _unary__edvuaz_0 = currentPosition;
      currentPosition = _unary__edvuaz_0 + 1 | 0;
      result = tmp_0 ^ shiftLeft(fromInt(tmp_1[_unary__edvuaz_0]), 7);
      if (result < 0n) {
        this.s20_1 = currentPosition;
        return result ^ -128n;
      }
    }
    return readVarint64SlowPath(this);
  }
}
//endregion
var Default_instance;
function Default_getInstance() {
  if (Default_instance === VOID)
    new Default();
  return Default_instance;
}
function ProtoBuf_0(from, builderAction) {
  from = from === VOID ? Default_getInstance() : from;
  var b = new ProtoBufBuilder(from);
  builderAction(b);
  return new ProtoBufImpl(b.b1w_1, b.c1w_1);
}
var ProtoIntegerType_DEFAULT_instance;
var ProtoIntegerType_SIGNED_instance;
var ProtoIntegerType_FIXED_instance;
var ProtoIntegerType_entriesInitialized;
function ProtoIntegerType_initEntries() {
  if (ProtoIntegerType_entriesInitialized)
    return Unit_instance;
  ProtoIntegerType_entriesInitialized = true;
  ProtoIntegerType_DEFAULT_instance = new ProtoIntegerType('DEFAULT', 0, 0n);
  ProtoIntegerType_SIGNED_instance = new ProtoIntegerType('SIGNED', 1, 8589934592n);
  ProtoIntegerType_FIXED_instance = new ProtoIntegerType('FIXED', 2, 17179869184n);
}
function ProtoIntegerType_DEFAULT_getInstance() {
  ProtoIntegerType_initEntries();
  return ProtoIntegerType_DEFAULT_instance;
}
function ProtoIntegerType_SIGNED_getInstance() {
  ProtoIntegerType_initEntries();
  return ProtoIntegerType_SIGNED_instance;
}
function ProtoIntegerType_FIXED_getInstance() {
  ProtoIntegerType_initEntries();
  return ProtoIntegerType_FIXED_instance;
}
function extractProtoId(descriptor, index, zeroBasedDefault) {
  var annotations = descriptor.ru(index);
  var result = zeroBasedDefault ? index : index + 1 | 0;
  var inductionVariable = 0;
  var last = annotations.i2() - 1 | 0;
  if (inductionVariable <= last)
    do {
      var i = inductionVariable;
      inductionVariable = inductionVariable + 1 | 0;
      var annotation = annotations.k2(i);
      if (annotation instanceof ProtoOneOf) {
        return -2;
      } else {
        if (annotation instanceof ProtoNumber) {
          result = annotation.d1w_1;
          if (!zeroBasedDefault) {
            checkFieldNumber(result, i, descriptor);
          }
        }
      }
    }
     while (inductionVariable <= last);
  return result;
}
function getAllOneOfSerializerOfField(_this__u8e3s4, serializersModule) {
  var tmp0_subject = _this__u8e3s4.lu();
  var tmp;
  if (equals(tmp0_subject, OPEN_getInstance())) {
    tmp = getPolymorphicDescriptors(serializersModule, _this__u8e3s4);
  } else if (equals(tmp0_subject, SEALED_getInstance())) {
    tmp = toList(get_elementDescriptors(_this__u8e3s4.su(1)));
  } else {
    throw IllegalArgumentException.t1('Class ' + _this__u8e3s4.ss() + ' should be abstract or sealed or interface to be used as @ProtoOneOf property.');
  }
  // Inline function 'kotlin.collections.onEach' call
  // Inline function 'kotlin.apply' call
  var this_0 = tmp;
  var _iterator__ex2g4s = this_0.d1();
  while (_iterator__ex2g4s.e1()) {
    var element = _iterator__ex2g4s.f1();
    var tmp0 = element.ru(0);
    var tmp$ret$4;
    $l$block_0: {
      // Inline function 'kotlin.collections.none' call
      var tmp_0;
      if (isInterface(tmp0, Collection)) {
        tmp_0 = tmp0.b1();
      } else {
        tmp_0 = false;
      }
      if (tmp_0) {
        tmp$ret$4 = true;
        break $l$block_0;
      }
      var _iterator__ex2g4s_0 = tmp0.d1();
      while (_iterator__ex2g4s_0.e1()) {
        var element_0 = _iterator__ex2g4s_0.f1();
        if (element_0 instanceof ProtoNumber) {
          tmp$ret$4 = false;
          break $l$block_0;
        }
      }
      tmp$ret$4 = true;
    }
    if (tmp$ret$4) {
      throw IllegalArgumentException.t1(element.ss() + ' implementing oneOf type ' + _this__u8e3s4.ss() + ' should have @ProtoNumber annotation in its single property.');
    }
  }
  return this_0;
}
function extractParameters(_this__u8e3s4, index) {
  var annotations = _this__u8e3s4.ru(index);
  var protoId = index + 1 | 0;
  var format = ProtoIntegerType_DEFAULT_getInstance();
  var protoPacked = false;
  var isOneOf = false;
  var inductionVariable = 0;
  var last = annotations.i2() - 1 | 0;
  if (inductionVariable <= last)
    do {
      var i = inductionVariable;
      inductionVariable = inductionVariable + 1 | 0;
      var annotation = annotations.k2(i);
      if (annotation instanceof ProtoNumber) {
        protoId = annotation.d1w_1;
        checkFieldNumber(protoId, i, _this__u8e3s4);
      } else {
        if (annotation instanceof ProtoType) {
          format = annotation.h1w_1;
        } else {
          if (annotation instanceof ProtoPacked) {
            protoPacked = true;
          } else {
            if (annotation instanceof ProtoOneOf) {
              isOneOf = true;
            }
          }
        }
      }
    }
     while (inductionVariable <= last);
  if (isOneOf) {
    protoId = index + 1 | 0;
  }
  var tmp0 = protoId;
  // Inline function 'kotlinx.serialization.protobuf.internal.ProtoDesc' call
  var packedBits = protoPacked ? 4294967296n : 0n;
  var oneOfBits = isOneOf ? 68719476736n : 0n;
  return packedBits | oneOfBits | format.g1w_1 | fromInt(tmp0);
}
var ProtoWireType_INVALID_instance;
var ProtoWireType_VARINT_instance;
var ProtoWireType_i64_instance;
var ProtoWireType_SIZE_DELIMITED_instance;
var ProtoWireType_i32_instance;
var Companion_instance;
function Companion_getInstance() {
  ProtoWireType_initEntries();
  if (Companion_instance === VOID)
    new Companion();
  return Companion_instance;
}
function values() {
  return [ProtoWireType_INVALID_getInstance(), ProtoWireType_VARINT_getInstance(), ProtoWireType_i64_getInstance(), ProtoWireType_SIZE_DELIMITED_getInstance(), ProtoWireType_i32_getInstance()];
}
function get_entries() {
  if ($ENTRIES == null)
    $ENTRIES = enumEntries(values());
  return $ENTRIES;
}
var ProtoWireType_entriesInitialized;
function ProtoWireType_initEntries() {
  if (ProtoWireType_entriesInitialized)
    return Unit_instance;
  ProtoWireType_entriesInitialized = true;
  ProtoWireType_INVALID_instance = new ProtoWireType('INVALID', 0, -1);
  ProtoWireType_VARINT_instance = new ProtoWireType('VARINT', 1, 0);
  ProtoWireType_i64_instance = new ProtoWireType('i64', 2, 1);
  ProtoWireType_SIZE_DELIMITED_instance = new ProtoWireType('SIZE_DELIMITED', 3, 2);
  ProtoWireType_i32_instance = new ProtoWireType('i32', 4, 5);
  Companion_getInstance();
}
var $ENTRIES;
function get_isPackable(_this__u8e3s4) {
  var tmp;
  if (_this__u8e3s4.mu()) {
    tmp = (_this__u8e3s4.nu() === 1 && get_isPackable(_this__u8e3s4.su(0)));
  } else {
    var tmp_0 = _this__u8e3s4.lu();
    if (tmp_0 instanceof PrimitiveKind) {
      tmp = !equals(_this__u8e3s4.lu(), STRING_getInstance());
    } else {
      tmp = false;
    }
  }
  return tmp;
}
function get_isOneOf(_this__u8e3s4) {
  return !((_this__u8e3s4 & 68719476736n) === 0n);
}
function overrideId(_this__u8e3s4, protoId) {
  return _this__u8e3s4 & 1152921500311879680n | fromInt(protoId);
}
function get_integerType(_this__u8e3s4) {
  var tmp0_subject = _this__u8e3s4 & 25769803776n;
  return tmp0_subject === ProtoIntegerType_DEFAULT_getInstance().g1w_1 ? ProtoIntegerType_DEFAULT_getInstance() : tmp0_subject === ProtoIntegerType_SIGNED_getInstance().g1w_1 ? ProtoIntegerType_SIGNED_getInstance() : ProtoIntegerType_FIXED_getInstance();
}
function getActualOneOfSerializer(_this__u8e3s4, serializersModule, protoId) {
  // Inline function 'kotlin.collections.find' call
  var tmp0 = getAllOneOfSerializerOfField(_this__u8e3s4, serializersModule);
  var tmp$ret$1;
  $l$block: {
    // Inline function 'kotlin.collections.firstOrNull' call
    var _iterator__ex2g4s = tmp0.d1();
    while (_iterator__ex2g4s.e1()) {
      var element = _iterator__ex2g4s.f1();
      // Inline function 'kotlinx.serialization.protobuf.internal.protoId' call
      var this_0 = extractParameters(element, 0);
      if (convertToInt(this_0 & 2147483647n) === protoId) {
        tmp$ret$1 = element;
        break $l$block;
      }
    }
    tmp$ret$1 = null;
  }
  return tmp$ret$1;
}
function checkFieldNumber(fieldNumber, propertyIndex, descriptor) {
  if (fieldNumber <= 0) {
    throw SerializationException.gt('' + fieldNumber + " is not allowed in ProtoNumber for property '" + descriptor.pu(propertyIndex) + "' of '" + descriptor.ss() + "', because protobuf supports field numbers in range 1..2147483647");
  }
}
function ProtoWireType_INVALID_getInstance() {
  ProtoWireType_initEntries();
  return ProtoWireType_INVALID_instance;
}
function ProtoWireType_VARINT_getInstance() {
  ProtoWireType_initEntries();
  return ProtoWireType_VARINT_instance;
}
function ProtoWireType_i64_getInstance() {
  ProtoWireType_initEntries();
  return ProtoWireType_i64_instance;
}
function ProtoWireType_SIZE_DELIMITED_getInstance() {
  ProtoWireType_initEntries();
  return ProtoWireType_SIZE_DELIMITED_instance;
}
function ProtoWireType_i32_getInstance() {
  ProtoWireType_initEntries();
  return ProtoWireType_i32_instance;
}
function populateCacheMap($this, descriptor, elements) {
  var map = HashMap.r8(elements, 1.0);
  var oneOfCount = 0;
  var inductionVariable = 0;
  if (inductionVariable < elements)
    do {
      var i = inductionVariable;
      inductionVariable = inductionVariable + 1 | 0;
      var id = extractProtoId(descriptor, i, false);
      if (id === -2) {
        // Inline function 'kotlin.collections.map' call
        var this_0 = getAllOneOfSerializerOfField(descriptor.su(i), $this.uw());
        // Inline function 'kotlin.collections.mapTo' call
        var destination = ArrayList.f2(collectionSizeOrDefault(this_0, 10));
        var _iterator__ex2g4s = this_0.d1();
        while (_iterator__ex2g4s.e1()) {
          var item = _iterator__ex2g4s.f1();
          // Inline function 'kotlinx.serialization.protobuf.internal.protoId' call
          var this_1 = extractParameters(item, 0);
          var tmp$ret$2 = convertToInt(this_1 & 2147483647n);
          destination.g2(tmp$ret$2);
        }
        // Inline function 'kotlin.collections.forEach' call
        var _iterator__ex2g4s_0 = destination.d1();
        while (_iterator__ex2g4s_0.e1()) {
          var element = _iterator__ex2g4s_0.f1();
          putProtoId($this, map, element, i);
        }
        oneOfCount = oneOfCount + 1 | 0;
      } else {
        putProtoId($this, map, extractProtoId(descriptor, i, false), i);
      }
    }
     while (inductionVariable < elements);
  if (oneOfCount > 0) {
    $this.y1v_1 = HashMap.r8(oneOfCount, 1.0);
  }
  $this.x1v_1 = map;
}
function putProtoId($this, $receiver, protoId, index) {
  $receiver.s3(protoId, index);
}
function getIndexByNum($this, protoNum) {
  var array = $this.w1v_1;
  if (!(array == null)) {
    // Inline function 'kotlin.collections.getOrElse' call
    var tmp;
    if (0 <= protoNum ? protoNum <= (array.length - 1 | 0) : false) {
      tmp = array[protoNum];
    } else {
      tmp = -1;
    }
    return tmp;
  }
  return getIndexByNumSlowPath($this, protoNum);
}
function getIndexByNumSlowPath($this, protoTag) {
  // Inline function 'kotlin.collections.getOrElse' call
  var tmp0_elvis_lhs = ensureNotNull($this.x1v_1).y3(protoTag);
  var tmp;
  if (tmp0_elvis_lhs == null) {
    tmp = -1;
  } else {
    tmp = tmp0_elvis_lhs;
  }
  return tmp;
}
function findIndexByTag($this, descriptor, protoTag) {
  if (protoTag < descriptor.nu() && protoTag >= 0) {
    var protoId = extractProtoId(descriptor, protoTag, true);
    if (protoId === protoTag)
      return protoTag;
  }
  return findIndexByTagSlowPath($this, descriptor, protoTag);
}
function findIndexByTagSlowPath($this, desc, protoTag) {
  var inductionVariable = 0;
  var last = desc.nu();
  if (inductionVariable < last)
    do {
      var i = inductionVariable;
      inductionVariable = inductionVariable + 1 | 0;
      var protoId = extractProtoId(desc, i, true);
      if (protoId === protoTag)
        return i;
    }
     while (inductionVariable < last);
  throw ProtobufDecodingException.n1w('' + protoTag + ' is not among valid ' + $this.v1v_1.ss() + ' enum proto numbers');
}
function deserializeByteArray($this, previousValue) {
  var tag = $this.a1y();
  var tmp$ret$0;
  $l$block: {
    // Inline function 'kotlinx.serialization.protobuf.internal.ProtobufDecoder.decodeOrThrow' call
    try {
      var tmp;
      if (tag === 19500n) {
        tmp = $this.u1v_1.e1y();
      } else {
        tmp = $this.u1v_1.d1y();
      }
      tmp$ret$0 = tmp;
      break $l$block;
    } catch ($p) {
      if ($p instanceof ProtobufDecodingException) {
        var e = $p;
        // Inline function 'kotlinx.serialization.protobuf.internal.ProtobufDecoder.rethrowException' call
        // Inline function 'kotlinx.serialization.protobuf.internal.protoId' call
        var tmp$ret$3 = convertToInt(tag & 2147483647n);
        throw ProtobufDecodingException.n1w('Error while decoding proto number ' + tmp$ret$3 + ' of ' + $this.v1v_1.ss(), e);
      } else {
        throw $p;
      }
    }
  }
  var array = tmp$ret$0;
  var tmp_0;
  if (previousValue == null) {
    tmp_0 = array;
  } else {
    // Inline function 'kotlin.collections.plus' call
    tmp_0 = primitiveArrayConcat([previousValue, array]);
  }
  return tmp_0;
}
function deserializeMap($this, deserializer, previousValue) {
  var serializer = deserializer instanceof MapLikeSerializer ? deserializer : THROW_CCE();
  var mapEntrySerial = MapEntrySerializer(serializer.m10_1, serializer.n10_1);
  var tmp0_safe_receiver = (!(previousValue == null) ? isInterface(previousValue, KtMap) : false) ? previousValue : null;
  var oldSet = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.t2();
  var tmp = SetSerializer(mapEntrySerial);
  var setOfEntries = (tmp instanceof AbstractCollectionSerializer ? tmp : THROW_CCE()).c10($this, oldSet);
  // Inline function 'kotlin.collections.associateBy' call
  var capacity = coerceAtLeast(mapCapacity(collectionSizeOrDefault(setOfEntries, 10)), 16);
  // Inline function 'kotlin.collections.associateByTo' call
  var destination = LinkedHashMap.ub(capacity);
  var _iterator__ex2g4s = setOfEntries.d1();
  while (_iterator__ex2g4s.e1()) {
    var element = _iterator__ex2g4s.f1();
    var tmp_0 = element.q3();
    var tmp$ret$3 = element.r3();
    destination.s3(tmp_0, tmp$ret$3);
  }
  return destination;
}
function readIfAbsent($this, descriptor, index) {
  if (!descriptor.tu(index)) {
    var elementDescriptor = descriptor.su(index);
    var kind = elementDescriptor.lu();
    if (equals(kind, MAP_getInstance()) || equals(kind, LIST_getInstance())) {
      $this.z1v_1 = false;
      return true;
    } else if (elementDescriptor.yt()) {
      $this.z1v_1 = true;
      return true;
    }
  }
  return false;
}
function ProtobufDecoder$readIfAbsent$ref(p0) {
  var l = (_this__u8e3s4, p0_0) => {
    var tmp0 = p0;
    return readIfAbsent(tmp0, _this__u8e3s4, p0_0);
  };
  l.callableName = 'readIfAbsent';
  return l;
}
function decodeListIndexNoTag($this) {
  var size = negate($this.o1z_1);
  $this.n1z_1 = $this.n1z_1 + 1 | 0;
  var idx = $this.n1z_1;
  if (fromInt(idx) === size || $this.u1v_1.j1x())
    return -1;
  return idx;
}
function decodeTaggedListIndex($this) {
  var tmp;
  if ($this.n1z_1 === -1) {
    tmp = $this.u1v_1.f1x_1;
  } else {
    tmp = $this.u1v_1.g1y();
  }
  var protoId = tmp;
  var tmp_0;
  // Inline function 'kotlinx.serialization.protobuf.internal.protoId' call
  var this_0 = $this.o1z_1;
  if (protoId === convertToInt(this_0 & 2147483647n)) {
    $this.n1z_1 = $this.n1z_1 + 1 | 0;
    tmp_0 = $this.n1z_1;
  } else {
    $this.u1v_1.p1z();
    tmp_0 = -1;
  }
  return tmp_0;
}
function makeDelimited(decoder, parentTag) {
  var tagless = parentTag === 19500n;
  var input = tagless ? decoder.q1z() : decoder.f1y();
  return new ProtobufReader(input);
}
function makeDelimitedForced(decoder, parentTag) {
  var tagless = parentTag === 19500n;
  var input = tagless ? decoder.q1z() : decoder.f1y();
  return new ProtobufReader(input);
}
function updateIdAndType($this, header) {
  var tmp;
  if (header === -1) {
    $this.f1x_1 = -1;
    $this.g1x_1 = ProtoWireType_INVALID_getInstance();
    tmp = -1;
  } else {
    $this.f1x_1 = header >>> 3 | 0;
    $this.g1x_1 = Companion_getInstance().s1w(header);
    tmp = $this.f1x_1;
  }
  return tmp;
}
function readIntLittleEndian($this) {
  var result = 0;
  var inductionVariable = 0;
  if (inductionVariable <= 3)
    do {
      var i = inductionVariable;
      inductionVariable = inductionVariable + 1 | 0;
      var byte = $this.e1x_1.t20() & 255;
      result = result | byte << imul(i, 8);
    }
     while (inductionVariable <= 3);
  return result;
}
function readLongLittleEndian($this) {
  var result = 0n;
  var inductionVariable = 0;
  if (inductionVariable <= 7)
    do {
      var i = inductionVariable;
      inductionVariable = inductionVariable + 1 | 0;
      var byte = fromInt($this.e1x_1.t20() & 255);
      result = result | shiftLeft(byte, imul(i, 8));
    }
     while (inductionVariable <= 7);
  return result;
}
function checkLength($this, length) {
  if (length < 0) {
    throw ProtobufDecodingException.n1w('Unexpected negative length: ' + length);
  }
}
function decode32($this, format) {
  format = format === VOID ? ProtoIntegerType_DEFAULT_getInstance() : format;
  var tmp;
  switch (format.k1_1) {
    case 0:
      tmp = convertToInt($this.e1x_1.u20(false));
      break;
    case 1:
      tmp = decodeSignedVarintInt($this, $this.e1x_1);
      break;
    case 2:
      tmp = readIntLittleEndian($this);
      break;
    default:
      noWhenBranchMatchedException();
      break;
  }
  return tmp;
}
function decode64($this, format) {
  format = format === VOID ? ProtoIntegerType_DEFAULT_getInstance() : format;
  var tmp;
  switch (format.k1_1) {
    case 0:
      tmp = $this.e1x_1.u20(false);
      break;
    case 1:
      tmp = decodeSignedVarintLong($this, $this.e1x_1);
      break;
    case 2:
      tmp = readLongLittleEndian($this);
      break;
    default:
      noWhenBranchMatchedException();
      break;
  }
  return tmp;
}
function decodeSignedVarintInt($this, input) {
  var raw = input.v20();
  var temp = (raw << 31 >> 31 ^ raw) >> 1;
  return temp ^ raw & -2147483648;
}
function decodeSignedVarintLong($this, input) {
  var raw = input.u20(false);
  var temp = shiftRight(shiftRight(shiftLeft(raw, 63), 63) ^ raw, 1);
  return temp ^ raw & -9223372036854775808n;
}
function expand($this) {
  $this.y1x_1 = copyOf($this.y1x_1, imul($this.y1x_1.length, 2));
}
function ensureEnoughBytes($this, bytesCount) {
  if (bytesCount > $this.w20()) {
    throw SerializationException.gt('Unexpected EOF, available ' + $this.w20() + ' bytes, requested: ' + bytesCount);
  }
}
function eof($this) {
  throw SerializationException.gt('Unexpected EOF');
}
function readVarint64SlowPath($this) {
  var result = 0n;
  var shift = 0;
  while (shift < 64) {
    var byte = $this.t20();
    result = result | shiftLeft(fromInt(byte & 127), shift);
    if ((byte & 128) === 0) {
      return result;
    }
    shift = shift + 7 | 0;
  }
  throw SerializationException.gt('Input stream is malformed: Varint too long (exceeded 64 bits)');
}
function readVarint32SlowPath($this) {
  var result = 0;
  var shift = 0;
  while (shift < 32) {
    var byte = $this.t20();
    result = result | (byte & 127) << shift;
    if ((byte & 128) === 0) {
      return result;
    }
    shift = shift + 7 | 0;
  }
  throw SerializationException.gt('Input stream is malformed: Varint too long (exceeded 32 bits)');
}
//region block: post-declaration
initMetadataForClass(ProtoBuf, 'ProtoBuf');
initMetadataForObject(Default, 'Default');
initMetadataForClass(ProtoBufBuilder, 'ProtoBufBuilder');
initMetadataForClass(ProtoBufImpl, 'ProtoBufImpl');
initMetadataForClass(ProtoNumber, 'ProtoNumber');
initMetadataForClass(ProtoIntegerType, 'ProtoIntegerType');
initMetadataForClass(ProtoOneOf, 'ProtoOneOf');
initMetadataForClass(ProtoType, 'ProtoType');
initMetadataForClass(ProtoPacked, 'ProtoPacked');
initMetadataForClass(ProtobufDecodingException, 'ProtobufDecodingException');
initMetadataForCompanion(Companion);
initMetadataForClass(ProtoWireType, 'ProtoWireType');
initMetadataForClass(ProtobufTaggedBase, 'ProtobufTaggedBase');
protoOf(ProtobufTaggedDecoder).rw = decodeSerializableElement$default;
protoOf(ProtobufTaggedDecoder).tw = decodeNullableSerializableElement$default;
protoOf(ProtobufTaggedDecoder).dw = decodeSerializableValue;
protoOf(ProtobufTaggedDecoder).vw = decodeSequentially;
protoOf(ProtobufTaggedDecoder).xw = decodeCollectionSize;
initMetadataForClass(ProtobufTaggedDecoder, 'ProtobufTaggedDecoder', VOID, VOID, [Decoder, CompositeDecoder]);
initMetadataForClass(ProtobufDecoder, 'ProtobufDecoder');
initMetadataForClass(PackedArrayDecoder, 'PackedArrayDecoder');
initMetadataForClass(MapEntryReader, 'MapEntryReader');
initMetadataForClass(RepeatedDecoder, 'RepeatedDecoder');
initMetadataForClass(OneOfPolymorphicReader, 'OneOfPolymorphicReader');
initMetadataForClass(OneOfElementReader, 'OneOfElementReader');
initMetadataForClass(ProtobufReader, 'ProtobufReader');
initMetadataForClass(ByteArrayInput, 'ByteArrayInput');
//endregion
//region block: exports
export {
  ProtoBuf_0 as ProtoBuf1o4kfvnhqrnyf,
  ProtoNumber as ProtoNumber3ejuegvjqu86s,
};
//endregion

//# sourceMappingURL=kotlinx-serialization-kotlinx-serialization-protobuf.mjs.map
