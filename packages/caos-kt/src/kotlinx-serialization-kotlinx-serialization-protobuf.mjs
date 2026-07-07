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
    this.b4j_1 = encodeDefaults;
    this.c4j_1 = serializersModule;
  }
  rw() {
    return this.c4j_1;
  }
  d4j(deserializer, bytes) {
    var input = new ByteArrayInput(bytes);
    var decoder = new ProtobufDecoder(this, new ProtobufReader(input), deserializer.lr());
    return decoder.aw(deserializer);
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
    this.o4j_1 = proto.b4j_1;
    this.p4j_1 = proto.rw();
  }
}
class ProtoBufImpl extends ProtoBuf {}
class ProtoNumber {
  constructor(number) {
    this.q4j_1 = number;
  }
  equals(other) {
    if (!(other instanceof ProtoNumber))
      return false;
    var tmp0_other_with_cast = other instanceof ProtoNumber ? other : THROW_CCE();
    if (!(this.q4j_1 === tmp0_other_with_cast.q4j_1))
      return false;
    return true;
  }
  hashCode() {
    return imul(getStringHashCode('number'), 127) ^ this.q4j_1;
  }
  toString() {
    return '@kotlinx.serialization.protobuf.ProtoNumber(' + 'number=' + this.q4j_1 + ')';
  }
}
class ProtoIntegerType extends Enum {
  constructor(name, ordinal, signature) {
    super(name, ordinal);
    this.t4j_1 = signature;
  }
}
class ProtoOneOf {}
class ProtoType {}
class ProtoPacked {}
class ProtobufDecodingException extends SerializationException {
  static a4k(message, e) {
    e = e === VOID ? null : e;
    var $this = this.gt(message, e);
    captureStack($this, $this.z4j_1);
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
        var _iterator__ex2g4s = tmp0.w();
        while (_iterator__ex2g4s.x()) {
          var element = _iterator__ex2g4s.y();
          if (element.d4k_1 === tmp_2) {
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
    tmp.e4k_1 = tmp_1;
  }
  f4k(value) {
    return this.e4k_1[value & 7];
  }
}
class ProtoWireType extends Enum {
  constructor(name, ordinal, typeId) {
    super(name, ordinal);
    this.d4k_1 = typeId;
  }
  toString() {
    return this.c1_1 + '(' + this.d4k_1 + ')';
  }
}
class ProtobufTaggedBase {
  constructor() {
    this.l4l_1 = new BigInt64Array(8);
    this.m4l_1 = -1;
  }
  n4l() {
    return this.m4l_1 === -1 ? 19500n : this.l4l_1[this.m4l_1];
  }
  o4l() {
    var tmp;
    if (this.m4l_1 === -1) {
      tmp = 19500n;
    } else {
      var tmp_0 = this.l4l_1;
      var _unary__edvuaz = this.m4l_1;
      this.m4l_1 = _unary__edvuaz - 1 | 0;
      tmp = tmp_0[_unary__edvuaz];
    }
    return tmp;
  }
  p4l(tag) {
    if (tag === 19500n)
      return Unit_instance;
    this.m4l_1 = this.m4l_1 + 1 | 0;
    var idx = this.m4l_1;
    if (this.m4l_1 >= this.l4l_1.length) {
      expand(this);
    }
    this.l4l_1[idx] = tag;
  }
}
class ProtobufTaggedDecoder extends ProtobufTaggedBase {
  k4l(tag, inlineDescriptor) {
    // Inline function 'kotlin.apply' call
    this.p4l(tag);
    return this;
  }
  mv() {
    return true;
  }
  nv() {
    return null;
  }
  ov() {
    return this.z4k(this.o4l());
  }
  pv() {
    return this.a4l(this.o4l());
  }
  qv() {
    return this.b4l(this.o4l());
  }
  rv() {
    return this.c4l(this.o4l());
  }
  sv() {
    return this.d4l(this.o4l());
  }
  tv() {
    return this.e4l(this.o4l());
  }
  uv() {
    return this.f4l(this.o4l());
  }
  vv() {
    return this.g4l(this.o4l());
  }
  wv() {
    return this.x4k(this.o4l());
  }
  xv(enumDescriptor) {
    return this.h4l(this.o4l(), enumDescriptor);
  }
  bw(descriptor) {
    return this;
  }
  cw(descriptor) {
  }
  dw(descriptor, index) {
    return this.z4k(this.l1a(descriptor, index));
  }
  ew(descriptor, index) {
    return this.a4l(this.l1a(descriptor, index));
  }
  fw(descriptor, index) {
    return this.b4l(this.l1a(descriptor, index));
  }
  gw(descriptor, index) {
    return this.c4l(this.l1a(descriptor, index));
  }
  hw(descriptor, index) {
    return this.d4l(this.l1a(descriptor, index));
  }
  iw(descriptor, index) {
    return this.e4l(this.l1a(descriptor, index));
  }
  jw(descriptor, index) {
    return this.f4l(this.l1a(descriptor, index));
  }
  kw(descriptor, index) {
    return this.g4l(this.l1a(descriptor, index));
  }
  lw(descriptor, index) {
    return this.x4k(this.l1a(descriptor, index));
  }
  nw(descriptor, index, deserializer, previousValue) {
    // Inline function 'kotlinx.serialization.protobuf.internal.ProtobufTaggedBase.tagBlock' call
    var tag = this.l1a(descriptor, index);
    this.p4l(tag);
    return this.zv(deserializer, previousValue);
  }
  pw(descriptor, index, deserializer, previousValue) {
    // Inline function 'kotlinx.serialization.protobuf.internal.ProtobufTaggedBase.tagBlock' call
    var tag = this.l1a(descriptor, index);
    this.p4l(tag);
    var tmp;
    if (this.mv()) {
      tmp = this.zv(deserializer, previousValue);
    } else {
      tmp = this.nv();
    }
    return tmp;
  }
  yv(descriptor) {
    return this.k4l(this.o4l(), descriptor);
  }
  mw(descriptor, index) {
    return this.k4l(this.l1a(descriptor, index), descriptor.pu(index));
  }
}
class ProtobufDecoder extends ProtobufTaggedDecoder {
  constructor(proto, reader, descriptor) {
    super();
    this.g4j_1 = proto;
    this.h4j_1 = reader;
    this.i4j_1 = descriptor;
    this.j4j_1 = null;
    this.k4j_1 = null;
    this.l4j_1 = null;
    this.m4j_1 = false;
    var tmp = this;
    tmp.n4j_1 = new ElementMarker(this.i4j_1, ProtobufDecoder$readIfAbsent$ref(this));
    this.y4k(this.i4j_1);
  }
  rw() {
    return this.g4j_1.rw();
  }
  y4k(descriptor) {
    var elements = descriptor.ku();
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
      this.j4j_1 = cache;
    } else {
      populateCacheMap(this, descriptor, elements);
    }
  }
  bw(descriptor) {
    var tmp;
    try {
      var tmp0_subject = descriptor.iu();
      var tmp_0;
      if (equals(tmp0_subject, LIST_getInstance())) {
        var tag = this.n4l();
        var tmp_1;
        if (equals(this.i4j_1.iu(), LIST_getInstance()) && !(tag === 19500n) && !equals(this.i4j_1, descriptor)) {
          var reader = makeDelimited(this.h4j_1, tag);
          reader.t4l();
          // Inline function 'kotlinx.serialization.protobuf.internal.ProtoDesc' call
          var packedBits = false ? 4294967296n : 0n;
          var oneOfBits = false ? 68719476736n : 0n;
          var tmp$ret$0 = packedBits | oneOfBits | ProtoIntegerType_DEFAULT_getInstance().t4j_1 | fromInt(1);
          tmp_1 = new RepeatedDecoder(this.g4j_1, reader, tmp$ret$0, descriptor);
        } else if (this.h4j_1.t4k_1.equals(ProtoWireType_SIZE_DELIMITED_getInstance()) && get_isPackable(descriptor.pu(0))) {
          var sliceReader = new ProtobufReader(this.h4j_1.s4l());
          tmp_1 = new PackedArrayDecoder(this.g4j_1, sliceReader, descriptor);
        } else {
          tmp_1 = new RepeatedDecoder(this.g4j_1, this.h4j_1, tag, descriptor);
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
          var tag_0 = this.n4l();
          if (tag_0 === 19500n && equals(this.i4j_1, descriptor))
            return this;
          if (get_isOneOf(tag_0)) {
            // Inline function 'kotlinx.serialization.protobuf.internal.protoId' call
            var rawIndex = convertToInt(tag_0 & 2147483647n) - 1 | 0;
            var tmp1_safe_receiver = this.l4j_1;
            var tmp2_safe_receiver = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.r3(rawIndex);
            var tmp_4;
            if (tmp2_safe_receiver == null) {
              tmp_4 = null;
            } else {
              // Inline function 'kotlin.let' call
              tmp_4 = overrideId(tag_0, tmp2_safe_receiver);
            }
            var tmp3_elvis_lhs = tmp_4;
            var restoredTag = tmp3_elvis_lhs == null ? tag_0 : tmp3_elvis_lhs;
            return new OneOfPolymorphicReader(this.g4j_1, this.h4j_1, restoredTag, descriptor);
          }
          return new ProtobufDecoder(this.g4j_1, makeDelimited(this.h4j_1, tag_0), descriptor);
        } else {
          if (equals(tmp0_subject, MAP_getInstance())) {
            tmp_0 = new MapEntryReader(this.g4j_1, makeDelimitedForced(this.h4j_1, this.n4l()), this.n4l(), descriptor);
          } else {
            throw SerializationException.dt('Primitives are not supported at top-level');
          }
        }
      }
      tmp = tmp_0;
    } catch ($p) {
      var tmp_5;
      if ($p instanceof ProtobufDecodingException) {
        var e = $p;
        var tmp_6 = descriptor.ps();
        var tmp_7 = this.i4j_1.ps();
        // Inline function 'kotlinx.serialization.protobuf.internal.protoId' call
        var this_0 = this.n4l();
        var tmp$ret$4 = convertToInt(this_0 & 2147483647n);
        throw ProtobufDecodingException.a4k('Fail to begin structure for ' + tmp_6 + ' in ' + tmp_7 + ' at proto number ' + tmp$ret$4, e);
      } else {
        throw $p;
      }
    }
    return tmp;
  }
  cw(descriptor) {
  }
  z4k(tag) {
    var value = this.c4l(tag);
    var tmp;
    switch (value) {
      case 0:
        tmp = false;
        break;
      case 1:
        tmp = true;
        break;
      default:
        throw SerializationException.dt('Unexpected boolean value: ' + value);
    }
    return tmp;
  }
  a4l(tag) {
    return toByte(this.c4l(tag));
  }
  b4l(tag) {
    return toShort(this.c4l(tag));
  }
  c4l(tag) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.serialization.protobuf.internal.ProtobufDecoder.decodeOrThrow' call
      try {
        var tmp;
        if (tag === 19500n) {
          tmp = this.h4j_1.v4l();
        } else {
          tmp = this.h4j_1.u4l(get_integerType(tag));
        }
        tmp$ret$0 = tmp;
        break $l$block;
      } catch ($p) {
        if ($p instanceof ProtobufDecodingException) {
          var e = $p;
          // Inline function 'kotlinx.serialization.protobuf.internal.ProtobufDecoder.rethrowException' call
          // Inline function 'kotlinx.serialization.protobuf.internal.protoId' call
          var tmp$ret$3 = convertToInt(tag & 2147483647n);
          throw ProtobufDecodingException.a4k('Error while decoding proto number ' + tmp$ret$3 + ' of ' + this.i4j_1.ps(), e);
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  }
  d4l(tag) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.serialization.protobuf.internal.ProtobufDecoder.decodeOrThrow' call
      try {
        var tmp;
        if (tag === 19500n) {
          tmp = this.h4j_1.x4l();
        } else {
          tmp = this.h4j_1.w4l(get_integerType(tag));
        }
        tmp$ret$0 = tmp;
        break $l$block;
      } catch ($p) {
        if ($p instanceof ProtobufDecodingException) {
          var e = $p;
          // Inline function 'kotlinx.serialization.protobuf.internal.ProtobufDecoder.rethrowException' call
          // Inline function 'kotlinx.serialization.protobuf.internal.protoId' call
          var tmp$ret$3 = convertToInt(tag & 2147483647n);
          throw ProtobufDecodingException.a4k('Error while decoding proto number ' + tmp$ret$3 + ' of ' + this.i4j_1.ps(), e);
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  }
  e4l(tag) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.serialization.protobuf.internal.ProtobufDecoder.decodeOrThrow' call
      try {
        var tmp;
        if (tag === 19500n) {
          tmp = this.h4j_1.z4l();
        } else {
          tmp = this.h4j_1.y4l();
        }
        tmp$ret$0 = tmp;
        break $l$block;
      } catch ($p) {
        if ($p instanceof ProtobufDecodingException) {
          var e = $p;
          // Inline function 'kotlinx.serialization.protobuf.internal.ProtobufDecoder.rethrowException' call
          // Inline function 'kotlinx.serialization.protobuf.internal.protoId' call
          var tmp$ret$3 = convertToInt(tag & 2147483647n);
          throw ProtobufDecodingException.a4k('Error while decoding proto number ' + tmp$ret$3 + ' of ' + this.i4j_1.ps(), e);
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  }
  f4l(tag) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.serialization.protobuf.internal.ProtobufDecoder.decodeOrThrow' call
      try {
        var tmp;
        if (tag === 19500n) {
          tmp = this.h4j_1.b4m();
        } else {
          tmp = this.h4j_1.a4m();
        }
        tmp$ret$0 = tmp;
        break $l$block;
      } catch ($p) {
        if ($p instanceof ProtobufDecodingException) {
          var e = $p;
          // Inline function 'kotlinx.serialization.protobuf.internal.ProtobufDecoder.rethrowException' call
          // Inline function 'kotlinx.serialization.protobuf.internal.protoId' call
          var tmp$ret$3 = convertToInt(tag & 2147483647n);
          throw ProtobufDecodingException.a4k('Error while decoding proto number ' + tmp$ret$3 + ' of ' + this.i4j_1.ps(), e);
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  }
  g4l(tag) {
    return numberToChar(this.c4l(tag));
  }
  x4k(tag) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.serialization.protobuf.internal.ProtobufDecoder.decodeOrThrow' call
      try {
        var tmp;
        if (tag === 19500n) {
          tmp = this.h4j_1.d4m();
        } else {
          tmp = this.h4j_1.c4m();
        }
        tmp$ret$0 = tmp;
        break $l$block;
      } catch ($p) {
        if ($p instanceof ProtobufDecodingException) {
          var e = $p;
          // Inline function 'kotlinx.serialization.protobuf.internal.ProtobufDecoder.rethrowException' call
          // Inline function 'kotlinx.serialization.protobuf.internal.protoId' call
          var tmp$ret$3 = convertToInt(tag & 2147483647n);
          throw ProtobufDecodingException.a4k('Error while decoding proto number ' + tmp$ret$3 + ' of ' + this.i4j_1.ps(), e);
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  }
  h4l(tag, enumDescription) {
    return findIndexByTag(this, enumDescription, this.c4l(tag));
  }
  aw(deserializer) {
    return this.zv(deserializer, null);
  }
  zv(deserializer, previousValue) {
    var tmp;
    try {
      var tmp_0;
      if (deserializer instanceof MapLikeSerializer) {
        tmp_0 = deserializeMap(this, isInterface(deserializer, DeserializationStrategy) ? deserializer : THROW_CCE(), previousValue);
      } else {
        if (equals(deserializer.lr(), ByteArraySerializer().lr())) {
          tmp_0 = deserializeByteArray(this, (previousValue == null ? true : isByteArray(previousValue)) ? previousValue : THROW_CCE());
        } else {
          if (equals(deserializer.lr(), UByteArraySerializer().lr())) {
            var tmp_1;
            if (previousValue == null ? true : previousValue instanceof UByteArray) {
              var tmp_2 = previousValue;
              tmp_1 = tmp_2 == null ? null : tmp_2.yp_1;
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
              tmp_0 = (deserializer instanceof AbstractCollectionSerializer ? deserializer : THROW_CCE()).zz(this, previousValue);
            } else {
              tmp_0 = deserializer.nr(this);
            }
          }
        }
      }
      tmp = tmp_0;
    } catch ($p) {
      var tmp_5;
      if ($p instanceof ProtobufDecodingException) {
        var e = $p;
        var currentTag = this.n4l();
        var tmp_6;
        if (!equals(this.i4j_1, deserializer.lr())) {
          var tmp_7;
          if (equals(this.i4j_1.iu(), LIST_getInstance()) && !equals(deserializer.lr().iu(), MAP_getInstance())) {
            // Inline function 'kotlinx.serialization.protobuf.internal.protoId' call
            tmp_7 = 'Error while decoding index ' + (convertToInt(currentTag & 2147483647n) - 1 | 0) + ' in repeated field of ' + deserializer.lr().ps();
          } else if (equals(this.i4j_1.iu(), MAP_getInstance())) {
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
            tmp_7 = 'Error while decoding ' + field + ' of index ' + index + ' in map field of ' + deserializer.lr().ps();
          } else {
            var tmp_9 = deserializer.lr().ps();
            // Inline function 'kotlinx.serialization.protobuf.internal.protoId' call
            tmp_7 = 'Error while decoding ' + tmp_9 + ' at proto number ' + convertToInt(currentTag & 2147483647n) + ' of ' + this.i4j_1.ps();
          }
          tmp_6 = tmp_7;
        } else {
          tmp_6 = 'Error while decoding ' + this.i4j_1.ps();
        }
        var msg = tmp_6;
        throw ProtobufDecodingException.a4k(msg, e);
      } else {
        throw $p;
      }
    }
    return tmp;
  }
  l1a(_this__u8e3s4, index) {
    return extractParameters(_this__u8e3s4, index);
  }
  tw(descriptor) {
    try {
      while (true) {
        var protoId = this.h4j_1.t4l();
        if (protoId === -1) {
          return this.n4j_1.l12();
        }
        if (protoId === 0) {
          throw SerializationException.dt('0 is not allowed as the protobuf field number in ' + descriptor.ps() + ', the input bytes may have been corrupted');
        }
        var index = getIndexByNum(this, protoId);
        if (index === -1) {
          this.h4j_1.e4m();
        } else {
          if (get_isOneOf(extractParameters(descriptor, index))) {
            var tmp0_safe_receiver = this.l4j_1;
            if (tmp0_safe_receiver == null)
              null;
            else
              tmp0_safe_receiver.l3(index, protoId);
          }
          this.n4j_1.k12(index);
          return index;
        }
      }
    } catch ($p) {
      if ($p instanceof ProtobufDecodingException) {
        var e = $p;
        throw ProtobufDecodingException.a4k('Fail to get element index for ' + descriptor.ps() + ' in ' + this.i4j_1.ps(), e);
      } else {
        throw $p;
      }
    }
  }
  mv() {
    return !this.m4j_1;
  }
}
class PackedArrayDecoder extends ProtobufDecoder {
  constructor(proto, reader, descriptor) {
    super(proto, reader, descriptor);
    this.q4k_1 = 0;
  }
  l1a(_this__u8e3s4, index) {
    return 19500n;
  }
  bw(descriptor) {
    throw SerializationException.dt('Packing only supports primitive number types. The input type however was a struct: ' + toString(descriptor));
  }
  tw(descriptor) {
    if (this.h4j_1.w4k())
      return -1;
    var _unary__edvuaz = this.q4k_1;
    this.q4k_1 = _unary__edvuaz + 1 | 0;
    return _unary__edvuaz;
  }
  x4k(tag) {
    throw SerializationException.dt('Packing only supports primitive number types. The actual reading is for string.');
  }
}
class MapEntryReader extends ProtobufDecoder {
  constructor(proto, decoder, parentTag, descriptor) {
    super(proto, decoder, descriptor);
    this.p4m_1 = parentTag;
  }
  l1a(_this__u8e3s4, index) {
    var tmp;
    if ((index % 2 | 0) === 0) {
      // Inline function 'kotlinx.serialization.protobuf.internal.ProtoDesc' call
      var packedBits = false ? 4294967296n : 0n;
      var oneOfBits = false ? 68719476736n : 0n;
      tmp = packedBits | oneOfBits | get_integerType(this.p4m_1).t4j_1 | fromInt(1);
    } else {
      // Inline function 'kotlinx.serialization.protobuf.internal.ProtoDesc' call
      var packedBits_0 = false ? 4294967296n : 0n;
      var oneOfBits_0 = false ? 68719476736n : 0n;
      tmp = packedBits_0 | oneOfBits_0 | get_integerType(this.p4m_1).t4j_1 | fromInt(2);
    }
    return tmp;
  }
}
class RepeatedDecoder extends ProtobufDecoder {
  constructor(proto, decoder, currentTag, descriptor) {
    super(proto, decoder, descriptor);
    this.a4n_1 = -1;
    var tmp = this;
    var tmp_0;
    if (currentTag === 19500n) {
      var length = this.h4j_1.v4l();
      // Inline function 'kotlin.require' call
      if (!(length >= 0)) {
        var message = 'Expected positive length for ' + toString(descriptor) + ', but got ' + length;
        throw IllegalArgumentException.m1(toString(message));
      }
      tmp_0 = negate(fromInt(length));
    } else {
      tmp_0 = currentTag;
    }
    tmp.b4n_1 = tmp_0;
  }
  tw(descriptor) {
    if (this.b4n_1 > 0n) {
      return decodeTaggedListIndex(this);
    }
    return decodeListIndexNoTag(this);
  }
  l1a(_this__u8e3s4, index) {
    if (this.b4n_1 > 0n)
      return this.b4n_1;
    return 19500n;
  }
}
class OneOfPolymorphicReader extends ProtobufDecoder {
  constructor(proto, decoder, parentTag, descriptor) {
    super(proto, decoder, descriptor);
    this.o4n_1 = parentTag;
    this.p4n_1 = false;
    this.q4n_1 = false;
  }
  l1a(_this__u8e3s4, index) {
    var tmp;
    if (index === 0) {
      tmp = 19501n;
    } else {
      tmp = extractParameters(_this__u8e3s4, 0);
    }
    return tmp;
  }
  bw(descriptor) {
    var tmp;
    if (equals(descriptor, this.i4j_1)) {
      tmp = this;
    } else {
      tmp = new OneOfElementReader(this.g4j_1, this.h4j_1, descriptor);
    }
    return tmp;
  }
  tw(descriptor) {
    if (!this.p4n_1) {
      this.p4n_1 = true;
      return 0;
    } else if (!this.q4n_1) {
      this.q4n_1 = true;
      return 1;
    } else {
      return -1;
    }
  }
  x4k(tag) {
    var tmp;
    if (tag === 19501n) {
      var tmp_0 = this.rw();
      // Inline function 'kotlinx.serialization.protobuf.internal.protoId' call
      var this_0 = this.o4n_1;
      var tmp$ret$0 = convertToInt(this_0 & 2147483647n);
      var tmp0_safe_receiver = getActualOneOfSerializer(this.i4j_1, tmp_0, tmp$ret$0);
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.ps();
      var tmp_1;
      if (tmp1_elvis_lhs == null) {
        var tmp_2 = this.i4j_1.ps();
        // Inline function 'kotlinx.serialization.protobuf.internal.protoId' call
        var this_1 = this.o4n_1;
        var tmp$ret$1 = convertToInt(this_1 & 2147483647n);
        throw SerializationException.dt('Cannot find a subclass of ' + tmp_2 + ' annotated with @ProtoNumber(' + tmp$ret$1 + ').');
      } else {
        tmp_1 = tmp1_elvis_lhs;
      }
      tmp = tmp_1;
    } else {
      tmp = super.x4k(tag);
    }
    return tmp;
  }
}
class OneOfElementReader extends ProtobufDecoder {
  constructor(proto, decoder, descriptor) {
    super(proto, decoder, descriptor);
    // Inline function 'kotlin.require' call
    if (!(descriptor.ku() === 1)) {
      var message = 'Implementation of oneOf type ' + descriptor.ps() + ' should contain only 1 element, but get ' + descriptor.ku();
      throw IllegalArgumentException.m1(toString(message));
    }
    // Inline function 'kotlin.collections.filterIsInstance' call
    var tmp0 = descriptor.ou(0);
    // Inline function 'kotlin.collections.filterIsInstanceTo' call
    var destination = ArrayList.u1();
    var _iterator__ex2g4s = tmp0.w();
    while (_iterator__ex2g4s.x()) {
      var element = _iterator__ex2g4s.y();
      if (element instanceof ProtoNumber) {
        destination.z1(element);
      }
    }
    var protoNumber = singleOrNull(destination);
    // Inline function 'kotlin.require' call
    if (!!(protoNumber == null)) {
      var message_0 = 'Implementation of oneOf type ' + descriptor.ps() + ' should have @ProtoNumber annotation';
      throw IllegalArgumentException.m1(toString(message_0));
    }
    this.b4o_1 = protoNumber.q4j_1;
    this.c4o_1 = false;
  }
  bw(descriptor) {
    var tmp0_subject = descriptor.iu();
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
      var tag = this.n4l();
      if (tag === 19500n && equals(this.i4j_1, descriptor))
        return this;
      if (get_isOneOf(tag))
        throw SerializationException.dt('An oneof element cannot be directly child of another oneof element');
      tmp = new ProtobufDecoder(this.g4j_1, makeDelimited(this.h4j_1, tag), descriptor);
    } else {
      throw SerializationException.dt('Type ' + descriptor.iu().toString() + ' cannot be directly child of oneof element');
    }
    return tmp;
  }
  tw(descriptor) {
    var tmp;
    if (this.c4o_1) {
      tmp = -1;
    } else {
      this.c4o_1 = true;
      tmp = 0;
    }
    return tmp;
  }
}
class ProtobufReader {
  constructor(input) {
    this.r4k_1 = input;
    this.s4k_1 = -1;
    this.t4k_1 = ProtoWireType_INVALID_getInstance();
    this.u4k_1 = false;
    this.v4k_1 = 0;
  }
  w4k() {
    return !this.u4k_1 && this.r4k_1.j4o() === 0;
  }
  t4l() {
    if (this.u4k_1) {
      this.u4k_1 = false;
      var previousHeader = this.s4k_1 << 3 | this.t4k_1.d4k_1;
      // Inline function 'kotlin.also' call
      var this_0 = updateIdAndType(this, this.v4k_1);
      this.v4k_1 = previousHeader;
      return this_0;
    }
    this.v4k_1 = this.s4k_1 << 3 | this.t4k_1.d4k_1;
    var header = convertToInt(this.r4k_1.h4o(true));
    return updateIdAndType(this, header);
  }
  c4n() {
    this.u4k_1 = true;
    var nextHeader = this.s4k_1 << 3 | this.t4k_1.d4k_1;
    updateIdAndType(this, this.v4k_1);
    this.v4k_1 = nextHeader;
  }
  e4m() {
    switch (this.t4k_1.d1_1) {
      case 1:
        this.u4l(ProtoIntegerType_DEFAULT_getInstance());
        break;
      case 2:
        this.w4l(ProtoIntegerType_FIXED_getInstance());
        break;
      case 3:
        this.k4o();
        break;
      case 4:
        this.u4l(ProtoIntegerType_FIXED_getInstance());
        break;
      default:
        throw ProtobufDecodingException.a4k('Unsupported start group or end group wire type: ' + this.t4k_1.toString());
    }
  }
  q4l() {
    // Inline function 'kotlinx.serialization.protobuf.internal.ProtobufReader.assertWireType' call
    var expected = ProtoWireType_SIZE_DELIMITED_getInstance();
    if (!this.t4k_1.equals(expected))
      throw ProtobufDecodingException.a4k('Expected wire type ' + expected.toString() + ', but found ' + this.t4k_1.toString());
    return this.r4l();
  }
  k4o() {
    // Inline function 'kotlinx.serialization.protobuf.internal.ProtobufReader.assertWireType' call
    var expected = ProtoWireType_SIZE_DELIMITED_getInstance();
    if (!this.t4k_1.equals(expected))
      throw ProtobufDecodingException.a4k('Expected wire type ' + expected.toString() + ', but found ' + this.t4k_1.toString());
    var length = decode32(this);
    checkLength(this, length);
    this.r4k_1.l4o(length);
  }
  r4l() {
    var length = decode32(this);
    checkLength(this, length);
    return this.r4k_1.m4o(length);
  }
  s4l() {
    // Inline function 'kotlinx.serialization.protobuf.internal.ProtobufReader.assertWireType' call
    var expected = ProtoWireType_SIZE_DELIMITED_getInstance();
    if (!this.t4k_1.equals(expected))
      throw ProtobufDecodingException.a4k('Expected wire type ' + expected.toString() + ', but found ' + this.t4k_1.toString());
    return this.d4n();
  }
  d4n() {
    var length = decode32(this);
    checkLength(this, length);
    return this.r4k_1.n4o(length);
  }
  u4l(format) {
    var wireType = format.equals(ProtoIntegerType_FIXED_getInstance()) ? ProtoWireType_i32_getInstance() : ProtoWireType_VARINT_getInstance();
    // Inline function 'kotlinx.serialization.protobuf.internal.ProtobufReader.assertWireType' call
    if (!this.t4k_1.equals(wireType))
      throw ProtobufDecodingException.a4k('Expected wire type ' + wireType.toString() + ', but found ' + this.t4k_1.toString());
    return decode32(this, format);
  }
  v4l() {
    return decode32(this);
  }
  w4l(format) {
    var wireType = format.equals(ProtoIntegerType_FIXED_getInstance()) ? ProtoWireType_i64_getInstance() : ProtoWireType_VARINT_getInstance();
    // Inline function 'kotlinx.serialization.protobuf.internal.ProtobufReader.assertWireType' call
    if (!this.t4k_1.equals(wireType))
      throw ProtobufDecodingException.a4k('Expected wire type ' + wireType.toString() + ', but found ' + this.t4k_1.toString());
    return decode64(this, format);
  }
  x4l() {
    return decode64(this, ProtoIntegerType_DEFAULT_getInstance());
  }
  y4l() {
    // Inline function 'kotlinx.serialization.protobuf.internal.ProtobufReader.assertWireType' call
    var expected = ProtoWireType_i32_getInstance();
    if (!this.t4k_1.equals(expected))
      throw ProtobufDecodingException.a4k('Expected wire type ' + expected.toString() + ', but found ' + this.t4k_1.toString());
    // Inline function 'kotlin.fromBits' call
    var bits = readIntLittleEndian(this);
    return floatFromBits(bits);
  }
  z4l() {
    // Inline function 'kotlin.fromBits' call
    var bits = readIntLittleEndian(this);
    return floatFromBits(bits);
  }
  a4m() {
    // Inline function 'kotlinx.serialization.protobuf.internal.ProtobufReader.assertWireType' call
    var expected = ProtoWireType_i64_getInstance();
    if (!this.t4k_1.equals(expected))
      throw ProtobufDecodingException.a4k('Expected wire type ' + expected.toString() + ', but found ' + this.t4k_1.toString());
    // Inline function 'kotlin.fromBits' call
    var bits = readLongLittleEndian(this);
    return doubleFromBits(bits);
  }
  b4m() {
    // Inline function 'kotlin.fromBits' call
    var bits = readLongLittleEndian(this);
    return doubleFromBits(bits);
  }
  c4m() {
    // Inline function 'kotlinx.serialization.protobuf.internal.ProtobufReader.assertWireType' call
    var expected = ProtoWireType_SIZE_DELIMITED_getInstance();
    if (!this.t4k_1.equals(expected))
      throw ProtobufDecodingException.a4k('Expected wire type ' + expected.toString() + ', but found ' + this.t4k_1.toString());
    var length = decode32(this);
    checkLength(this, length);
    return this.r4k_1.o4o(length);
  }
  d4m() {
    var length = decode32(this);
    checkLength(this, length);
    return this.r4k_1.o4o(length);
  }
}
class ByteArrayInput {
  constructor(array, endIndex) {
    endIndex = endIndex === VOID ? array.length : endIndex;
    this.d4o_1 = array;
    this.e4o_1 = endIndex;
    this.f4o_1 = 0;
  }
  j4o() {
    return this.e4o_1 - this.f4o_1 | 0;
  }
  n4o(size) {
    ensureEnoughBytes(this, size);
    var result = new ByteArrayInput(this.d4o_1, this.f4o_1 + size | 0);
    result.f4o_1 = this.f4o_1;
    this.f4o_1 = this.f4o_1 + size | 0;
    return result;
  }
  g4o() {
    var tmp;
    if (this.f4o_1 < this.e4o_1) {
      var tmp_0 = this.d4o_1;
      var _unary__edvuaz = this.f4o_1;
      this.f4o_1 = _unary__edvuaz + 1 | 0;
      tmp = tmp_0[_unary__edvuaz] & 255;
    } else {
      tmp = -1;
    }
    return tmp;
  }
  m4o(bytesCount) {
    ensureEnoughBytes(this, bytesCount);
    var b = new Int8Array(bytesCount);
    var length = b.length;
    var copied = (this.e4o_1 - this.f4o_1 | 0) < length ? this.e4o_1 - this.f4o_1 | 0 : length;
    var tmp0 = this.d4o_1;
    var tmp6 = this.f4o_1;
    // Inline function 'kotlin.collections.copyInto' call
    var endIndex = this.f4o_1 + copied | 0;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp = tmp0;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    arrayCopy(tmp, b, 0, tmp6, endIndex);
    this.f4o_1 = this.f4o_1 + copied | 0;
    return b;
  }
  l4o(bytesCount) {
    ensureEnoughBytes(this, bytesCount);
    this.f4o_1 = this.f4o_1 + bytesCount | 0;
  }
  o4o(length) {
    var result = decodeToString(this.d4o_1, this.f4o_1, this.f4o_1 + length | 0);
    this.f4o_1 = this.f4o_1 + length | 0;
    return result;
  }
  i4o() {
    if (this.f4o_1 === this.e4o_1) {
      eof(this);
    }
    var currentPosition = this.f4o_1;
    var tmp = this.d4o_1;
    var _unary__edvuaz = currentPosition;
    currentPosition = _unary__edvuaz + 1 | 0;
    var result = tmp[_unary__edvuaz];
    if (result >= 0) {
      this.f4o_1 = currentPosition;
      return result;
    } else if ((this.e4o_1 - this.f4o_1 | 0) > 1) {
      var tmp_0 = result;
      var tmp_1 = this.d4o_1;
      var _unary__edvuaz_0 = currentPosition;
      currentPosition = _unary__edvuaz_0 + 1 | 0;
      result = tmp_0 ^ tmp_1[_unary__edvuaz_0] << 7;
      if (result < 0) {
        this.f4o_1 = currentPosition;
        return result ^ -128;
      }
    }
    return readVarint32SlowPath(this);
  }
  h4o(eofAllowed) {
    if (this.f4o_1 === this.e4o_1) {
      if (eofAllowed)
        return -1n;
      else {
        eof(this);
      }
    }
    var currentPosition = this.f4o_1;
    var tmp = this.d4o_1;
    var _unary__edvuaz = currentPosition;
    currentPosition = _unary__edvuaz + 1 | 0;
    var result = fromInt(tmp[_unary__edvuaz]);
    if (result >= 0n) {
      this.f4o_1 = currentPosition;
      return result;
    } else if ((this.e4o_1 - this.f4o_1 | 0) > 1) {
      var tmp_0 = result;
      var tmp_1 = this.d4o_1;
      var _unary__edvuaz_0 = currentPosition;
      currentPosition = _unary__edvuaz_0 + 1 | 0;
      result = tmp_0 ^ shiftLeft(fromInt(tmp_1[_unary__edvuaz_0]), 7);
      if (result < 0n) {
        this.f4o_1 = currentPosition;
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
  return new ProtoBufImpl(b.o4j_1, b.p4j_1);
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
  var annotations = descriptor.ou(index);
  var result = zeroBasedDefault ? index : index + 1 | 0;
  var inductionVariable = 0;
  var last = annotations.b2() - 1 | 0;
  if (inductionVariable <= last)
    do {
      var i = inductionVariable;
      inductionVariable = inductionVariable + 1 | 0;
      var annotation = annotations.d2(i);
      if (annotation instanceof ProtoOneOf) {
        return -2;
      } else {
        if (annotation instanceof ProtoNumber) {
          result = annotation.q4j_1;
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
  var tmp0_subject = _this__u8e3s4.iu();
  var tmp;
  if (equals(tmp0_subject, OPEN_getInstance())) {
    tmp = getPolymorphicDescriptors(serializersModule, _this__u8e3s4);
  } else if (equals(tmp0_subject, SEALED_getInstance())) {
    tmp = toList(get_elementDescriptors(_this__u8e3s4.pu(1)));
  } else {
    throw IllegalArgumentException.m1('Class ' + _this__u8e3s4.ps() + ' should be abstract or sealed or interface to be used as @ProtoOneOf property.');
  }
  // Inline function 'kotlin.collections.onEach' call
  // Inline function 'kotlin.apply' call
  var this_0 = tmp;
  var _iterator__ex2g4s = this_0.w();
  while (_iterator__ex2g4s.x()) {
    var element = _iterator__ex2g4s.y();
    var tmp0 = element.ou(0);
    var tmp$ret$4;
    $l$block_0: {
      // Inline function 'kotlin.collections.none' call
      var tmp_0;
      if (isInterface(tmp0, Collection)) {
        tmp_0 = tmp0.u();
      } else {
        tmp_0 = false;
      }
      if (tmp_0) {
        tmp$ret$4 = true;
        break $l$block_0;
      }
      var _iterator__ex2g4s_0 = tmp0.w();
      while (_iterator__ex2g4s_0.x()) {
        var element_0 = _iterator__ex2g4s_0.y();
        if (element_0 instanceof ProtoNumber) {
          tmp$ret$4 = false;
          break $l$block_0;
        }
      }
      tmp$ret$4 = true;
    }
    if (tmp$ret$4) {
      throw IllegalArgumentException.m1(element.ps() + ' implementing oneOf type ' + _this__u8e3s4.ps() + ' should have @ProtoNumber annotation in its single property.');
    }
  }
  return this_0;
}
function extractParameters(_this__u8e3s4, index) {
  var annotations = _this__u8e3s4.ou(index);
  var protoId = index + 1 | 0;
  var format = ProtoIntegerType_DEFAULT_getInstance();
  var protoPacked = false;
  var isOneOf = false;
  var inductionVariable = 0;
  var last = annotations.b2() - 1 | 0;
  if (inductionVariable <= last)
    do {
      var i = inductionVariable;
      inductionVariable = inductionVariable + 1 | 0;
      var annotation = annotations.d2(i);
      if (annotation instanceof ProtoNumber) {
        protoId = annotation.q4j_1;
        checkFieldNumber(protoId, i, _this__u8e3s4);
      } else {
        if (annotation instanceof ProtoType) {
          format = annotation.u4j_1;
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
  return packedBits | oneOfBits | format.t4j_1 | fromInt(tmp0);
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
  if (_this__u8e3s4.ju()) {
    tmp = (_this__u8e3s4.ku() === 1 && get_isPackable(_this__u8e3s4.pu(0)));
  } else {
    var tmp_0 = _this__u8e3s4.iu();
    if (tmp_0 instanceof PrimitiveKind) {
      tmp = !equals(_this__u8e3s4.iu(), STRING_getInstance());
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
  return tmp0_subject === ProtoIntegerType_DEFAULT_getInstance().t4j_1 ? ProtoIntegerType_DEFAULT_getInstance() : tmp0_subject === ProtoIntegerType_SIGNED_getInstance().t4j_1 ? ProtoIntegerType_SIGNED_getInstance() : ProtoIntegerType_FIXED_getInstance();
}
function getActualOneOfSerializer(_this__u8e3s4, serializersModule, protoId) {
  // Inline function 'kotlin.collections.find' call
  var tmp0 = getAllOneOfSerializerOfField(_this__u8e3s4, serializersModule);
  var tmp$ret$1;
  $l$block: {
    // Inline function 'kotlin.collections.firstOrNull' call
    var _iterator__ex2g4s = tmp0.w();
    while (_iterator__ex2g4s.x()) {
      var element = _iterator__ex2g4s.y();
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
    throw SerializationException.dt('' + fieldNumber + " is not allowed in ProtoNumber for property '" + descriptor.mu(propertyIndex) + "' of '" + descriptor.ps() + "', because protobuf supports field numbers in range 1..2147483647");
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
  var map = HashMap.k8(elements, 1.0);
  var oneOfCount = 0;
  var inductionVariable = 0;
  if (inductionVariable < elements)
    do {
      var i = inductionVariable;
      inductionVariable = inductionVariable + 1 | 0;
      var id = extractProtoId(descriptor, i, false);
      if (id === -2) {
        // Inline function 'kotlin.collections.map' call
        var this_0 = getAllOneOfSerializerOfField(descriptor.pu(i), $this.rw());
        // Inline function 'kotlin.collections.mapTo' call
        var destination = ArrayList.y1(collectionSizeOrDefault(this_0, 10));
        var _iterator__ex2g4s = this_0.w();
        while (_iterator__ex2g4s.x()) {
          var item = _iterator__ex2g4s.y();
          // Inline function 'kotlinx.serialization.protobuf.internal.protoId' call
          var this_1 = extractParameters(item, 0);
          var tmp$ret$2 = convertToInt(this_1 & 2147483647n);
          destination.z1(tmp$ret$2);
        }
        // Inline function 'kotlin.collections.forEach' call
        var _iterator__ex2g4s_0 = destination.w();
        while (_iterator__ex2g4s_0.x()) {
          var element = _iterator__ex2g4s_0.y();
          putProtoId($this, map, element, i);
        }
        oneOfCount = oneOfCount + 1 | 0;
      } else {
        putProtoId($this, map, extractProtoId(descriptor, i, false), i);
      }
    }
     while (inductionVariable < elements);
  if (oneOfCount > 0) {
    $this.l4j_1 = HashMap.k8(oneOfCount, 1.0);
  }
  $this.k4j_1 = map;
}
function putProtoId($this, $receiver, protoId, index) {
  $receiver.l3(protoId, index);
}
function getIndexByNum($this, protoNum) {
  var array = $this.j4j_1;
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
  var tmp0_elvis_lhs = ensureNotNull($this.k4j_1).r3(protoTag);
  var tmp;
  if (tmp0_elvis_lhs == null) {
    tmp = -1;
  } else {
    tmp = tmp0_elvis_lhs;
  }
  return tmp;
}
function findIndexByTag($this, descriptor, protoTag) {
  if (protoTag < descriptor.ku() && protoTag >= 0) {
    var protoId = extractProtoId(descriptor, protoTag, true);
    if (protoId === protoTag)
      return protoTag;
  }
  return findIndexByTagSlowPath($this, descriptor, protoTag);
}
function findIndexByTagSlowPath($this, desc, protoTag) {
  var inductionVariable = 0;
  var last = desc.ku();
  if (inductionVariable < last)
    do {
      var i = inductionVariable;
      inductionVariable = inductionVariable + 1 | 0;
      var protoId = extractProtoId(desc, i, true);
      if (protoId === protoTag)
        return i;
    }
     while (inductionVariable < last);
  throw ProtobufDecodingException.a4k('' + protoTag + ' is not among valid ' + $this.i4j_1.ps() + ' enum proto numbers');
}
function deserializeByteArray($this, previousValue) {
  var tag = $this.n4l();
  var tmp$ret$0;
  $l$block: {
    // Inline function 'kotlinx.serialization.protobuf.internal.ProtobufDecoder.decodeOrThrow' call
    try {
      var tmp;
      if (tag === 19500n) {
        tmp = $this.h4j_1.r4l();
      } else {
        tmp = $this.h4j_1.q4l();
      }
      tmp$ret$0 = tmp;
      break $l$block;
    } catch ($p) {
      if ($p instanceof ProtobufDecodingException) {
        var e = $p;
        // Inline function 'kotlinx.serialization.protobuf.internal.ProtobufDecoder.rethrowException' call
        // Inline function 'kotlinx.serialization.protobuf.internal.protoId' call
        var tmp$ret$3 = convertToInt(tag & 2147483647n);
        throw ProtobufDecodingException.a4k('Error while decoding proto number ' + tmp$ret$3 + ' of ' + $this.i4j_1.ps(), e);
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
  var mapEntrySerial = MapEntrySerializer(serializer.j10_1, serializer.k10_1);
  var tmp0_safe_receiver = (!(previousValue == null) ? isInterface(previousValue, KtMap) : false) ? previousValue : null;
  var oldSet = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.m2();
  var tmp = SetSerializer(mapEntrySerial);
  var setOfEntries = (tmp instanceof AbstractCollectionSerializer ? tmp : THROW_CCE()).zz($this, oldSet);
  // Inline function 'kotlin.collections.associateBy' call
  var capacity = coerceAtLeast(mapCapacity(collectionSizeOrDefault(setOfEntries, 10)), 16);
  // Inline function 'kotlin.collections.associateByTo' call
  var destination = LinkedHashMap.nb(capacity);
  var _iterator__ex2g4s = setOfEntries.w();
  while (_iterator__ex2g4s.x()) {
    var element = _iterator__ex2g4s.y();
    var tmp_0 = element.j3();
    var tmp$ret$3 = element.k3();
    destination.l3(tmp_0, tmp$ret$3);
  }
  return destination;
}
function readIfAbsent($this, descriptor, index) {
  if (!descriptor.qu(index)) {
    var elementDescriptor = descriptor.pu(index);
    var kind = elementDescriptor.iu();
    if (equals(kind, MAP_getInstance()) || equals(kind, LIST_getInstance())) {
      $this.m4j_1 = false;
      return true;
    } else if (elementDescriptor.vt()) {
      $this.m4j_1 = true;
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
  var size = negate($this.b4n_1);
  $this.a4n_1 = $this.a4n_1 + 1 | 0;
  var idx = $this.a4n_1;
  if (fromInt(idx) === size || $this.h4j_1.w4k())
    return -1;
  return idx;
}
function decodeTaggedListIndex($this) {
  var tmp;
  if ($this.a4n_1 === -1) {
    tmp = $this.h4j_1.s4k_1;
  } else {
    tmp = $this.h4j_1.t4l();
  }
  var protoId = tmp;
  var tmp_0;
  // Inline function 'kotlinx.serialization.protobuf.internal.protoId' call
  var this_0 = $this.b4n_1;
  if (protoId === convertToInt(this_0 & 2147483647n)) {
    $this.a4n_1 = $this.a4n_1 + 1 | 0;
    tmp_0 = $this.a4n_1;
  } else {
    $this.h4j_1.c4n();
    tmp_0 = -1;
  }
  return tmp_0;
}
function makeDelimited(decoder, parentTag) {
  var tagless = parentTag === 19500n;
  var input = tagless ? decoder.d4n() : decoder.s4l();
  return new ProtobufReader(input);
}
function makeDelimitedForced(decoder, parentTag) {
  var tagless = parentTag === 19500n;
  var input = tagless ? decoder.d4n() : decoder.s4l();
  return new ProtobufReader(input);
}
function updateIdAndType($this, header) {
  var tmp;
  if (header === -1) {
    $this.s4k_1 = -1;
    $this.t4k_1 = ProtoWireType_INVALID_getInstance();
    tmp = -1;
  } else {
    $this.s4k_1 = header >>> 3 | 0;
    $this.t4k_1 = Companion_getInstance().f4k(header);
    tmp = $this.s4k_1;
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
      var byte = $this.r4k_1.g4o() & 255;
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
      var byte = fromInt($this.r4k_1.g4o() & 255);
      result = result | shiftLeft(byte, imul(i, 8));
    }
     while (inductionVariable <= 7);
  return result;
}
function checkLength($this, length) {
  if (length < 0) {
    throw ProtobufDecodingException.a4k('Unexpected negative length: ' + length);
  }
}
function decode32($this, format) {
  format = format === VOID ? ProtoIntegerType_DEFAULT_getInstance() : format;
  var tmp;
  switch (format.d1_1) {
    case 0:
      tmp = convertToInt($this.r4k_1.h4o(false));
      break;
    case 1:
      tmp = decodeSignedVarintInt($this, $this.r4k_1);
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
  switch (format.d1_1) {
    case 0:
      tmp = $this.r4k_1.h4o(false);
      break;
    case 1:
      tmp = decodeSignedVarintLong($this, $this.r4k_1);
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
  var raw = input.i4o();
  var temp = (raw << 31 >> 31 ^ raw) >> 1;
  return temp ^ raw & -2147483648;
}
function decodeSignedVarintLong($this, input) {
  var raw = input.h4o(false);
  var temp = shiftRight(shiftRight(shiftLeft(raw, 63), 63) ^ raw, 1);
  return temp ^ raw & -9223372036854775808n;
}
function expand($this) {
  $this.l4l_1 = copyOf($this.l4l_1, imul($this.l4l_1.length, 2));
}
function ensureEnoughBytes($this, bytesCount) {
  if (bytesCount > $this.j4o()) {
    throw SerializationException.dt('Unexpected EOF, available ' + $this.j4o() + ' bytes, requested: ' + bytesCount);
  }
}
function eof($this) {
  throw SerializationException.dt('Unexpected EOF');
}
function readVarint64SlowPath($this) {
  var result = 0n;
  var shift = 0;
  while (shift < 64) {
    var byte = $this.g4o();
    result = result | shiftLeft(fromInt(byte & 127), shift);
    if ((byte & 128) === 0) {
      return result;
    }
    shift = shift + 7 | 0;
  }
  throw SerializationException.dt('Input stream is malformed: Varint too long (exceeded 64 bits)');
}
function readVarint32SlowPath($this) {
  var result = 0;
  var shift = 0;
  while (shift < 32) {
    var byte = $this.g4o();
    result = result | (byte & 127) << shift;
    if ((byte & 128) === 0) {
      return result;
    }
    shift = shift + 7 | 0;
  }
  throw SerializationException.dt('Input stream is malformed: Varint too long (exceeded 32 bits)');
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
protoOf(ProtobufTaggedDecoder).ow = decodeSerializableElement$default;
protoOf(ProtobufTaggedDecoder).qw = decodeNullableSerializableElement$default;
protoOf(ProtobufTaggedDecoder).aw = decodeSerializableValue;
protoOf(ProtobufTaggedDecoder).sw = decodeSequentially;
protoOf(ProtobufTaggedDecoder).uw = decodeCollectionSize;
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
