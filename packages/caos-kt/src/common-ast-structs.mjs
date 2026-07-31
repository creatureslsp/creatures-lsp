import {
  initMetadataForCompanion1wyw17z38v6ac as initMetadataForCompanion,
  THROW_CCE2g6jy02ryeudk as THROW_CCE,
  protoOf180f3jzyo7rfj as protoOf,
  initMetadataForObject1cxne3s9w65el as initMetadataForObject,
  VOID3gxj6tk5isa35 as VOID,
  toString1pkumu07cwy4m as toString,
  hashCodeq5arwsb9dgti as hashCode,
  equals2au1ep9vhcato as equals,
  Unit_instancev9v8hjid95df as Unit_instance,
  createThis2j2avj17cvnv2 as createThis,
  initMetadataForClassbxx6q50dy2s7 as initMetadataForClass,
  initMetadataForInterface1egvbzx539z91 as initMetadataForInterface,
  Exceptiondt2hlxn7j7vw as Exception,
  numberRangeToNumber25vse2rgp6rs8 as numberRangeToNumber,
  isInterface3d6p8outrmvmk as isInterface,
  sortedWith2csnbbb21k0lg as sortedWith,
  _Char___init__impl__6a9atx2gndcvjvc5pke as _Char___init__impl__6a9atx,
  startsWith1bgirhbedtv2y as startsWith,
  repeat2w4c6j8zoq09o as repeat,
  FunctionAdapter3lcrrz3moet5b as FunctionAdapter,
  Comparator2b3maoeh98xtg as Comparator,
  compareValues1n2ayl87ihzfk as compareValues,
  getStringHashCode26igk1bx568vk as getStringHashCode,
  lazy2hsh8ze7j6ikd as lazy,
  KProperty1ca4yb4wlo496 as KProperty1,
  getPropertyCallableRef3hckxc0xueiaj as getPropertyCallableRef,
  IllegalStateExceptionkoljg5n0nrlr as IllegalStateException,
  emptyList1g2z5xcrvp2zy as emptyList,
  PrimitiveClasses_getInstanceds06xwqrwfdm as PrimitiveClasses_getInstance,
  arrayOf1akklvh2at202 as arrayOf,
  createKType31ecntyyaay3k as createKType,
  IntCompanionObject_instance38ap4zil98hon as IntCompanionObject_instance,
  ensureNotNull1e947j3ixpazm as ensureNotNull,
  getKClass3t8tygqu4lcxf as getKClass,
  ArrayList3it5z8td81qkl as ArrayList,
} from './kotlin-kotlin-stdlib.mjs';
import {
  PluginGeneratedSerialDescriptorqdzeg5asqhfg as PluginGeneratedSerialDescriptor,
  UnknownFieldExceptiona60e3a6v1xqo as UnknownFieldException,
  typeParametersSerializers2likxjr48tr7y as typeParametersSerializers,
  GeneratedSerializer1f7t7hssdd2ws as GeneratedSerializer,
  throwMissingFieldException2cmke0v3ynf14 as throwMissingFieldException,
  SerializableWithd2dap36updxd as SerializableWith,
  IntSerializer_getInstanceuhm8c1wku08l as IntSerializer_getInstance,
  get_nullable197rfua9r7fsz as get_nullable,
  StringSerializer_getInstance11v9md0a7d9yk as StringSerializer_getInstance,
  buildClassSerialDescriptors2a6xdp6mrtw as buildClassSerialDescriptor,
  SerializationExceptioneqrdve3ts2n9 as SerializationException,
  KSerializerzf77vz1967fq as KSerializer,
  serializer1hwzc6m64v1op as serializer,
  serializer1hu9wv9at41ww as serializer_0,
  PolymorphicModuleBuilder1c33fhfru2id5 as PolymorphicModuleBuilder,
  SerializationStrategyh6ouydnm6hci as SerializationStrategy,
} from './kotlinx-serialization-kotlinx-serialization-core.mjs';
import { decodeNullableIntElement33f6dr575xvqa as decodeNullableIntElement } from './bedalton-common-serialization.mjs';
//region block: imports
var imul = Math.imul;
//endregion
//region block: pre-declaration
class Companion {
  n1e() {
    return $serializer_getInstance();
  }
}
class $serializer {
  constructor() {
    $serializer_instance = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('com.bedalton.common.ast.structs.HasRangeImpl', this, 1);
    tmp0_serialDesc.z13('textRange', false);
    this.o1e_1 = tmp0_serialDesc;
  }
  p1e(encoder, value) {
    var tmp0_desc = this.o1e_1;
    var tmp1_output = encoder.ew(tmp0_desc);
    tmp1_output.wx(tmp0_desc, 0, RangeWithIndexSerializer_getInstance(), value.q1e_1);
    tmp1_output.fw(tmp0_desc);
  }
  pr(encoder, value) {
    return this.p1e(encoder, value instanceof HasRangeImpl ? value : THROW_CCE());
  }
  qr(decoder) {
    var tmp0_desc = this.o1e_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_input = decoder.ew(tmp0_desc);
    if (tmp5_input.vw()) {
      tmp4_local0 = tmp5_input.qw(tmp0_desc, 0, RangeWithIndexSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp5_input.ww(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp5_input.qw(tmp0_desc, 0, RangeWithIndexSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          default:
            throw UnknownFieldException.ht(tmp2_index);
        }
      }
    tmp5_input.fw(tmp0_desc);
    return HasRangeImpl.r1e(tmp3_bitMask0, tmp4_local0, null);
  }
  or() {
    return this.o1e_1;
  }
  o14() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [RangeWithIndexSerializer_getInstance()];
  }
}
class HasRange {}
class HasRangeImpl {
  constructor(textRange) {
    this.q1e_1 = textRange;
  }
  g1e() {
    return this.q1e_1;
  }
  toString() {
    return 'HasRangeImpl(textRange=' + toString(this.q1e_1) + ')';
  }
  hashCode() {
    return hashCode(this.q1e_1);
  }
  equals(other) {
    if (this === other)
      return true;
    if (!(other instanceof HasRangeImpl))
      return false;
    if (!equals(this.q1e_1, other.q1e_1))
      return false;
    return true;
  }
  static r1e(seen0, textRange, serializationConstructorMarker) {
    if (!(1 === (1 & seen0))) {
      throwMissingFieldException(seen0, 1, $serializer_getInstance().o1e_1);
    }
    var $this = createThis(this);
    $this.q1e_1 = textRange;
    return $this;
  }
}
class Position {}
class Companion_0 {
  n1e() {
    return $serializer_getInstance_0();
  }
}
class $serializer_0 {
  constructor() {
    $serializer_instance_0 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('com.bedalton.common.ast.structs.PositionImpl', this, 2);
    tmp0_serialDesc.z13('line', false);
    tmp0_serialDesc.z13('character', false);
    this.s1e_1 = tmp0_serialDesc;
  }
  t1e(encoder, value) {
    var tmp0_desc = this.s1e_1;
    var tmp1_output = encoder.ew(tmp0_desc);
    tmp1_output.px(tmp0_desc, 0, value.u1e_1);
    tmp1_output.px(tmp0_desc, 1, value.v1e_1);
    tmp1_output.fw(tmp0_desc);
  }
  pr(encoder, value) {
    return this.t1e(encoder, value instanceof PositionImpl ? value : THROW_CCE());
  }
  qr(decoder) {
    var tmp0_desc = this.s1e_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = 0;
    var tmp5_local1 = 0;
    var tmp6_input = decoder.ew(tmp0_desc);
    if (tmp6_input.vw()) {
      tmp4_local0 = tmp6_input.jw(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp6_input.jw(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp6_input.ww(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp6_input.jw(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp6_input.jw(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          default:
            throw UnknownFieldException.ht(tmp2_index);
        }
      }
    tmp6_input.fw(tmp0_desc);
    return PositionImpl.w1e(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  }
  or() {
    return this.s1e_1;
  }
  o14() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [IntSerializer_getInstance(), IntSerializer_getInstance()];
  }
}
class PositionImpl {
  constructor(line, character) {
    this.u1e_1 = line;
    this.v1e_1 = character;
  }
  h1e() {
    return this.u1e_1;
  }
  l1e() {
    return this.v1e_1;
  }
  toString() {
    return 'PositionImpl(line=' + this.u1e_1 + ', character=' + this.v1e_1 + ')';
  }
  hashCode() {
    var result = this.u1e_1;
    result = imul(result, 31) + this.v1e_1 | 0;
    return result;
  }
  equals(other) {
    if (this === other)
      return true;
    if (!(other instanceof PositionImpl))
      return false;
    if (!(this.u1e_1 === other.u1e_1))
      return false;
    if (!(this.v1e_1 === other.v1e_1))
      return false;
    return true;
  }
  static w1e(seen0, line, character, serializationConstructorMarker) {
    if (!(3 === (3 & seen0))) {
      throwMissingFieldException(seen0, 3, $serializer_getInstance_0().s1e_1);
    }
    var $this = createThis(this);
    $this.u1e_1 = line;
    $this.v1e_1 = character;
    return $this;
  }
}
class Range {}
class Companion_1 {}
class $serializer_1 {
  constructor() {
    $serializer_instance_1 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('com.bedalton.common.ast.structs.RangeImpl', this, 2);
    tmp0_serialDesc.z13('start', false);
    tmp0_serialDesc.z13('end', false);
    this.x1e_1 = tmp0_serialDesc;
  }
  y1e(encoder, value) {
    var tmp0_desc = this.x1e_1;
    var tmp1_output = encoder.ew(tmp0_desc);
    tmp1_output.wx(tmp0_desc, 0, PositionSerializer_getInstance(), value.z1e_1);
    tmp1_output.wx(tmp0_desc, 1, PositionSerializer_getInstance(), value.a1f_1);
    tmp1_output.fw(tmp0_desc);
  }
  pr(encoder, value) {
    return this.y1e(encoder, value instanceof RangeImpl ? value : THROW_CCE());
  }
  qr(decoder) {
    var tmp0_desc = this.x1e_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_input = decoder.ew(tmp0_desc);
    if (tmp6_input.vw()) {
      tmp4_local0 = tmp6_input.qw(tmp0_desc, 0, PositionSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp6_input.qw(tmp0_desc, 1, PositionSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp6_input.ww(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp6_input.qw(tmp0_desc, 0, PositionSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp6_input.qw(tmp0_desc, 1, PositionSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          default:
            throw UnknownFieldException.ht(tmp2_index);
        }
      }
    tmp6_input.fw(tmp0_desc);
    return RangeImpl.b1f(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  }
  or() {
    return this.x1e_1;
  }
  o14() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [PositionSerializer_getInstance(), PositionSerializer_getInstance()];
  }
}
class RangeImpl {
  constructor(start, end) {
    this.z1e_1 = start;
    this.a1f_1 = end;
  }
  o1() {
    return this.z1e_1;
  }
  i1e() {
    return this.a1f_1;
  }
  toString() {
    return 'RangeImpl(start=' + toString(this.z1e_1) + ', end=' + toString(this.a1f_1) + ')';
  }
  hashCode() {
    var result = hashCode(this.z1e_1);
    result = imul(result, 31) + hashCode(this.a1f_1) | 0;
    return result;
  }
  equals(other) {
    if (this === other)
      return true;
    if (!(other instanceof RangeImpl))
      return false;
    if (!equals(this.z1e_1, other.z1e_1))
      return false;
    if (!equals(this.a1f_1, other.a1f_1))
      return false;
    return true;
  }
  static b1f(seen0, start, end, serializationConstructorMarker) {
    if (!(3 === (3 & seen0))) {
      throwMissingFieldException(seen0, 3, $serializer_getInstance_1().x1e_1);
    }
    var $this = createThis(this);
    $this.z1e_1 = start;
    $this.a1f_1 = end;
    return $this;
  }
}
class RangeWithIndex {}
class Companion_2 {
  n1e() {
    return $serializer_getInstance_2();
  }
}
class $serializer_2 {
  constructor() {
    $serializer_instance_2 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('com.bedalton.common.ast.structs.RangeWithIndexImpl', this, 5);
    tmp0_serialDesc.z13('start', false);
    tmp0_serialDesc.z13('end', false);
    tmp0_serialDesc.z13('startIndex', false);
    tmp0_serialDesc.z13('endIndex', false);
    tmp0_serialDesc.z13('parserIndex', true);
    this.c1f_1 = tmp0_serialDesc;
  }
  d1f(encoder, value) {
    var tmp0_desc = this.c1f_1;
    var tmp1_output = encoder.ew(tmp0_desc);
    tmp1_output.wx(tmp0_desc, 0, PositionSerializer_getInstance(), value.e1f_1);
    tmp1_output.wx(tmp0_desc, 1, PositionSerializer_getInstance(), value.f1f_1);
    tmp1_output.px(tmp0_desc, 2, value.g1f_1);
    tmp1_output.px(tmp0_desc, 3, value.h1f_1);
    if (tmp1_output.cy(tmp0_desc, 4) ? true : !(value.i1f_1 == null)) {
      tmp1_output.yx(tmp0_desc, 4, IntSerializer_getInstance(), value.i1f_1);
    }
    tmp1_output.fw(tmp0_desc);
  }
  pr(encoder, value) {
    return this.d1f(encoder, value instanceof RangeWithIndexImpl ? value : THROW_CCE());
  }
  qr(decoder) {
    var tmp0_desc = this.c1f_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = 0;
    var tmp7_local3 = 0;
    var tmp8_local4 = null;
    var tmp9_input = decoder.ew(tmp0_desc);
    if (tmp9_input.vw()) {
      tmp4_local0 = tmp9_input.qw(tmp0_desc, 0, PositionSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp9_input.qw(tmp0_desc, 1, PositionSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp9_input.jw(tmp0_desc, 2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp9_input.jw(tmp0_desc, 3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp9_input.sw(tmp0_desc, 4, IntSerializer_getInstance(), tmp8_local4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp9_input.ww(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp9_input.qw(tmp0_desc, 0, PositionSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp9_input.qw(tmp0_desc, 1, PositionSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp9_input.jw(tmp0_desc, 2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp9_input.jw(tmp0_desc, 3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp9_input.sw(tmp0_desc, 4, IntSerializer_getInstance(), tmp8_local4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          default:
            throw UnknownFieldException.ht(tmp2_index);
        }
      }
    tmp9_input.fw(tmp0_desc);
    return RangeWithIndexImpl.j1f(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, null);
  }
  or() {
    return this.c1f_1;
  }
  o14() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [PositionSerializer_getInstance(), PositionSerializer_getInstance(), IntSerializer_getInstance(), IntSerializer_getInstance(), get_nullable(IntSerializer_getInstance())];
  }
}
class RangeWithIndexImpl {
  constructor(start, end, startIndex, endIndex, parserIndex) {
    parserIndex = parserIndex === VOID ? null : parserIndex;
    this.e1f_1 = start;
    this.f1f_1 = end;
    this.g1f_1 = startIndex;
    this.h1f_1 = endIndex;
    this.i1f_1 = parserIndex;
    assertIsValid(this);
  }
  o1() {
    return this.e1f_1;
  }
  i1e() {
    return this.f1f_1;
  }
  j1e() {
    return this.g1f_1;
  }
  m1e() {
    return this.h1f_1;
  }
  k1e() {
    return this.i1f_1;
  }
  k1f(start, end, startIndex, endIndex, parserIndex) {
    return new RangeWithIndexImpl(start, end, startIndex, endIndex, parserIndex);
  }
  l1f(start, end, startIndex, endIndex, parserIndex, $super) {
    start = start === VOID ? this.e1f_1 : start;
    end = end === VOID ? this.f1f_1 : end;
    startIndex = startIndex === VOID ? this.g1f_1 : startIndex;
    endIndex = endIndex === VOID ? this.h1f_1 : endIndex;
    parserIndex = parserIndex === VOID ? this.i1f_1 : parserIndex;
    return $super === VOID ? this.k1f(start, end, startIndex, endIndex, parserIndex) : $super.k1f.call(this, start, end, startIndex, endIndex, parserIndex);
  }
  toString() {
    return 'RangeWithIndexImpl(start=' + toString(this.e1f_1) + ', end=' + toString(this.f1f_1) + ', startIndex=' + this.g1f_1 + ', endIndex=' + this.h1f_1 + ', parserIndex=' + this.i1f_1 + ')';
  }
  hashCode() {
    var result = hashCode(this.e1f_1);
    result = imul(result, 31) + hashCode(this.f1f_1) | 0;
    result = imul(result, 31) + this.g1f_1 | 0;
    result = imul(result, 31) + this.h1f_1 | 0;
    result = imul(result, 31) + (this.i1f_1 == null ? 0 : this.i1f_1) | 0;
    return result;
  }
  equals(other) {
    if (this === other)
      return true;
    if (!(other instanceof RangeWithIndexImpl))
      return false;
    if (!equals(this.e1f_1, other.e1f_1))
      return false;
    if (!equals(this.f1f_1, other.f1f_1))
      return false;
    if (!(this.g1f_1 === other.g1f_1))
      return false;
    if (!(this.h1f_1 === other.h1f_1))
      return false;
    if (!(this.i1f_1 == other.i1f_1))
      return false;
    return true;
  }
  static j1f(seen0, start, end, startIndex, endIndex, parserIndex, serializationConstructorMarker) {
    if (!(15 === (15 & seen0))) {
      throwMissingFieldException(seen0, 15, $serializer_getInstance_2().c1f_1);
    }
    var $this = createThis(this);
    $this.e1f_1 = start;
    $this.f1f_1 = end;
    $this.g1f_1 = startIndex;
    $this.h1f_1 = endIndex;
    if (0 === (seen0 & 16))
      $this.i1f_1 = null;
    else
      $this.i1f_1 = parserIndex;
    assertIsValid($this);
    return $this;
  }
}
class HasText {}
class TextWithRange {}
class sam$kotlin_Comparator$0 {
  constructor(function_0) {
    this.n1f_1 = function_0;
  }
  zg(a, b) {
    return this.n1f_1(a, b);
  }
  compare(a, b) {
    return this.zg(a, b);
  }
  m4() {
    return this.n1f_1;
  }
  equals(other) {
    var tmp;
    if (!(other == null) ? isInterface(other, Comparator) : false) {
      var tmp_0;
      if (!(other == null) ? isInterface(other, FunctionAdapter) : false) {
        tmp_0 = equals(this.m4(), other.m4());
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    } else {
      tmp = false;
    }
    return tmp;
  }
  hashCode() {
    return hashCode(this.m4());
  }
}
class Companion_3 {
  n1e() {
    return $serializer_getInstance_3();
  }
}
class $serializer_3 {
  constructor() {
    $serializer_instance_3 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('com.bedalton.common.ast.structs.TextWithRangeImpl', this, 2);
    tmp0_serialDesc.z13('textRange', false);
    tmp0_serialDesc.z13('text', false);
    this.o1f_1 = tmp0_serialDesc;
  }
  p1f(encoder, value) {
    var tmp0_desc = this.o1f_1;
    var tmp1_output = encoder.ew(tmp0_desc);
    tmp1_output.wx(tmp0_desc, 0, RangeWithIndexSerializer_getInstance(), value.q1f_1);
    tmp1_output.ux(tmp0_desc, 1, value.r1f_1);
    tmp1_output.fw(tmp0_desc);
  }
  pr(encoder, value) {
    return this.p1f(encoder, value instanceof TextWithRangeImpl ? value : THROW_CCE());
  }
  qr(decoder) {
    var tmp0_desc = this.o1f_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_input = decoder.ew(tmp0_desc);
    if (tmp6_input.vw()) {
      tmp4_local0 = tmp6_input.qw(tmp0_desc, 0, RangeWithIndexSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp6_input.ow(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp6_input.ww(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp6_input.qw(tmp0_desc, 0, RangeWithIndexSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp6_input.ow(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          default:
            throw UnknownFieldException.ht(tmp2_index);
        }
      }
    tmp6_input.fw(tmp0_desc);
    return TextWithRangeImpl.s1f(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  }
  or() {
    return this.o1f_1;
  }
  o14() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [RangeWithIndexSerializer_getInstance(), StringSerializer_getInstance()];
  }
}
class TextWithRangeImpl {
  constructor(textRange, text) {
    this.q1f_1 = textRange;
    this.r1f_1 = text;
  }
  g1e() {
    return this.q1f_1;
  }
  m1f() {
    return this.r1f_1;
  }
  toString() {
    return 'TextWithRangeImpl(textRange=' + toString(this.q1f_1) + ', text=' + this.r1f_1 + ')';
  }
  hashCode() {
    var result = hashCode(this.q1f_1);
    result = imul(result, 31) + getStringHashCode(this.r1f_1) | 0;
    return result;
  }
  equals(other) {
    if (this === other)
      return true;
    if (!(other instanceof TextWithRangeImpl))
      return false;
    if (!equals(this.q1f_1, other.q1f_1))
      return false;
    if (!(this.r1f_1 === other.r1f_1))
      return false;
    return true;
  }
  static s1f(seen0, textRange, text, serializationConstructorMarker) {
    if (!(3 === (3 & seen0))) {
      throwMissingFieldException(seen0, 3, $serializer_getInstance_3().o1f_1);
    }
    var $this = createThis(this);
    $this.q1f_1 = textRange;
    $this.r1f_1 = text;
    return $this;
  }
}
class HasRangeSerializer {
  constructor() {
    HasRangeSerializer_instance = this;
    var tmp = this;
    tmp.w1f_1 = lazy(HasRangeSerializer$descriptor$delegate$lambda);
  }
  or() {
    var tmp0 = this.w1f_1;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('descriptor', 1, tmp, HasRangeSerializer$_get_descriptor_$ref_mc9kd6(), null);
    return tmp0.r3();
  }
  qr(decoder) {
    var obj = decoder.ew(this.or());
    var textRange = null;
    $l$loop: while (true) {
      var index = obj.ww(this.or());
      switch (index) {
        case 0:
          textRange = obj.rw(this.or(), index, RangeWithIndexSerializer_getInstance());
          break;
        case -1:
          break $l$loop;
        default:
          // Inline function 'kotlin.error' call

          var message = 'Unexpected index: ' + index;
          throw IllegalStateException.s4(toString(message));
      }
    }
    obj.fw(this.or());
    if (textRange == null) {
      throw SerializationException.gt('Missing textRange in HasRange');
    }
    return new HasRangeImpl(textRange);
  }
  x1f(encoder, value) {
    var obj = encoder.ew(this.or());
    obj.wx(this.or(), 0, RangeSerializer_getInstance(), value.g1e());
    obj.fw(this.or());
  }
  pr(encoder, value) {
    return this.x1f(encoder, (!(value == null) ? isInterface(value, HasRange) : false) ? value : THROW_CCE());
  }
}
class PositionSerializer {
  constructor() {
    PositionSerializer_instance = this;
    var tmp = this;
    tmp.y1f_1 = lazy(PositionSerializer$descriptor$delegate$lambda);
  }
  or() {
    var tmp0 = this.y1f_1;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('descriptor', 1, tmp, PositionSerializer$_get_descriptor_$ref_xy4f64(), null);
    return tmp0.r3();
  }
  qr(decoder) {
    var structure = decoder.ew(this.or());
    var index = structure.ww(this.or());
    var line = null;
    var character = null;
    while (!(index === -1)) {
      var tmp0_subject = index;
      if (tmp0_subject === 0)
        line = structure.jw(this.or(), index);
      else if (tmp0_subject === 1)
        character = structure.jw(this.or(), index);
      index = structure.ww(this.or());
    }
    structure.fw(this.or());
    var tmp1_elvis_lhs = line;
    var tmp;
    if (tmp1_elvis_lhs == null) {
      throw SerializationException.gt('Position is missing element: "line"');
    } else {
      tmp = tmp1_elvis_lhs;
    }
    var tmp_0 = tmp;
    var tmp2_elvis_lhs = character;
    var tmp_1;
    if (tmp2_elvis_lhs == null) {
      throw SerializationException.gt('Position is missing element: "character"');
    } else {
      tmp_1 = tmp2_elvis_lhs;
    }
    return new PositionImpl(tmp_0, tmp_1);
  }
  z1f(encoder, value) {
    var structure = encoder.ew(this.or());
    structure.px(this.or(), 0, value.h1e());
    structure.px(this.or(), 1, value.l1e());
    structure.fw(this.or());
  }
  pr(encoder, value) {
    return this.z1f(encoder, (!(value == null) ? isInterface(value, Position) : false) ? value : THROW_CCE());
  }
}
class RangeSerializer {
  constructor() {
    RangeSerializer_instance = this;
    this.t1f_1 = 'RangeWithIndex';
    this.u1f_1 = 'Range';
    var tmp = this;
    tmp.v1f_1 = lazy(RangeSerializer$descriptor$delegate$lambda);
  }
  or() {
    var tmp0 = this.v1f_1;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('descriptor', 1, tmp, RangeSerializer$_get_descriptor_$ref_5fb4dc(), null);
    return tmp0.r3();
  }
  qr(decoder) {
    var structure = decoder.ew(this.or());
    var index = structure.ww(this.or());
    var type = null;
    var start = null;
    var end = null;
    var startIndex = null;
    var endIndex = null;
    var parserIndex = null;
    while (!(index === -1)) {
      switch (index) {
        case 0:
          type = structure.ow(this.or(), index);
          break;
        case 1:
          start = structure.rw(this.or(), index, PositionSerializer_getInstance());
          break;
        case 2:
          end = structure.rw(this.or(), index, PositionSerializer_getInstance());
          break;
        case 3:
          startIndex = structure.jw(this.or(), index);
          break;
        case 4:
          endIndex = structure.jw(this.or(), index);
          break;
        case 5:
          parserIndex = decodeNullableIntElement(structure, this.or(), index);
          break;
      }
      index = structure.ww(this.or());
    }
    structure.fw(this.or());
    var tmp;
    switch (type) {
      case 'RangeWithIndex':
        var tmp2_elvis_lhs = start;
        var tmp_0;
        if (tmp2_elvis_lhs == null) {
          throw SerializationException.gt('Range with index is missing "start"');
        } else {
          tmp_0 = tmp2_elvis_lhs;
        }

        var tmp_1 = tmp_0;
        var tmp3_elvis_lhs = end;
        var tmp_2;
        if (tmp3_elvis_lhs == null) {
          throw SerializationException.gt('Range with index is missing "end"');
        } else {
          tmp_2 = tmp3_elvis_lhs;
        }

        var tmp_3 = tmp_2;
        var tmp4_elvis_lhs = startIndex;
        var tmp_4;
        if (tmp4_elvis_lhs == null) {
          throw SerializationException.gt('Range with index is missing "startIndex"');
        } else {
          tmp_4 = tmp4_elvis_lhs;
        }

        var tmp_5 = tmp_4;
        var tmp5_elvis_lhs = endIndex;
        var tmp_6;
        if (tmp5_elvis_lhs == null) {
          throw SerializationException.gt('Range with index is missing "endIndex"');
        } else {
          tmp_6 = tmp5_elvis_lhs;
        }

        tmp = new RangeWithIndexImpl(tmp_1, tmp_3, tmp_5, tmp_6, parserIndex);
        break;
      case 'Range':
      case null:
        var tmp6_elvis_lhs = start;
        var tmp_7;
        if (tmp6_elvis_lhs == null) {
          throw SerializationException.gt('Range without index is missing "start"');
        } else {
          tmp_7 = tmp6_elvis_lhs;
        }

        var tmp_8 = tmp_7;
        var tmp7_elvis_lhs = end;
        var tmp_9;
        if (tmp7_elvis_lhs == null) {
          throw SerializationException.gt('Range without index is missing "end"');
        } else {
          tmp_9 = tmp7_elvis_lhs;
        }

        tmp = new RangeImpl(tmp_8, tmp_9);
        break;
      default:
        throw SerializationException.gt('Invalid range type: ' + type);
    }
    return tmp;
  }
  a1g(encoder, value) {
    var structure = encoder.ew(this.or());
    if (isRangeWithIndex(value)) {
      var range = isInterface(value, RangeWithIndex) ? value : THROW_CCE();
      structure.ux(this.or(), 0, 'RangeWithIndex');
      structure.px(this.or(), 3, range.j1e());
      structure.px(this.or(), 4, range.m1e());
      structure.yx(this.or(), 5, serializer_0(IntCompanionObject_instance), range.k1e());
    } else {
      structure.ux(this.or(), 0, 'Range');
    }
    structure.wx(this.or(), 1, PositionSerializer_getInstance(), value.o1());
    structure.wx(this.or(), 2, PositionSerializer_getInstance(), value.i1e());
    structure.fw(this.or());
  }
  pr(encoder, value) {
    return this.a1g(encoder, (!(value == null) ? isInterface(value, Range) : false) ? value : THROW_CCE());
  }
}
class RangeWithIndexSerializer {
  constructor() {
    RangeWithIndexSerializer_instance = this;
    var tmp = this;
    tmp.b1g_1 = lazy(RangeWithIndexSerializer$descriptor$delegate$lambda);
  }
  or() {
    var tmp0 = this.b1g_1;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('descriptor', 1, tmp, RangeWithIndexSerializer$_get_descriptor_$ref_uvhlf2(), null);
    return tmp0.r3();
  }
  qr(decoder) {
    var structure = decoder.ew(this.or());
    var index = structure.ww(this.or());
    var type = null;
    var start = null;
    var end = null;
    var startIndex = null;
    var endIndex = null;
    var parserIndex = null;
    while (!(index === -1)) {
      switch (index) {
        case 0:
          type = structure.ow(this.or(), index);
          break;
        case 1:
          start = structure.rw(this.or(), index, PositionSerializer_getInstance());
          break;
        case 2:
          end = structure.rw(this.or(), index, PositionSerializer_getInstance());
          break;
        case 3:
          startIndex = structure.jw(this.or(), index);
          break;
        case 4:
          endIndex = structure.jw(this.or(), index);
          break;
        case 5:
          parserIndex = structure.tw(this.or(), index, get_nullable(serializer_0(IntCompanionObject_instance)));
          break;
      }
      index = structure.ww(this.or());
    }
    structure.fw(this.or());
    var tmp;
    switch (type) {
      case 'RangeWithIndex':
      case null:
        tmp = new RangeWithIndexImpl(ensureNotNull(start), ensureNotNull(end), ensureNotNull(startIndex), ensureNotNull(endIndex), parserIndex);
        break;
      default:
        throw SerializationException.gt('Invalid range type: ' + type);
    }
    return tmp;
  }
  c1g(encoder, value) {
    var structure = encoder.ew(this.or());
    structure.ux(this.or(), 0, 'RangeWithIndex');
    structure.wx(this.or(), 1, PositionSerializer_getInstance(), value.o1());
    structure.wx(this.or(), 2, PositionSerializer_getInstance(), value.i1e());
    structure.px(this.or(), 3, value.j1e());
    structure.px(this.or(), 4, value.m1e());
    structure.yx(this.or(), 5, serializer_0(IntCompanionObject_instance), value.k1e());
    structure.fw(this.or());
  }
  pr(encoder, value) {
    return this.c1g(encoder, (!(value == null) ? isInterface(value, RangeWithIndex) : false) ? value : THROW_CCE());
  }
}
class TextWithRangeSerializer {
  constructor() {
    TextWithRangeSerializer_instance = this;
    var tmp = this;
    tmp.d1g_1 = lazy(TextWithRangeSerializer$descriptor$delegate$lambda);
  }
  or() {
    var tmp0 = this.d1g_1;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('descriptor', 1, tmp, TextWithRangeSerializer$_get_descriptor_$ref_du0lpp(), null);
    return tmp0.r3();
  }
  qr(decoder) {
    var obj = decoder.ew(this.or());
    var textRange = null;
    var text = null;
    $l$loop: while (true) {
      var index = obj.ww(this.or());
      switch (index) {
        case 0:
          textRange = obj.rw(this.or(), index, RangeWithIndexSerializer_getInstance());
          break;
        case 1:
          text = obj.ow(this.or(), index);
          break;
        case -1:
          break $l$loop;
        default:
          // Inline function 'kotlin.error' call

          var message = 'Unexpected index: ' + index;
          throw IllegalStateException.s4(toString(message));
      }
    }
    obj.fw(this.or());
    // Inline function 'kotlin.collections.mutableListOf' call
    var missing = ArrayList.b2();
    if (textRange == null) {
      missing.g2('textRange');
    }
    if (text == null) {
      missing.g2('text');
    }
    if (missing.i2() > 0) {
      throw SerializationException.gt('Failed to decode TextWithRange. Missing ' + toString(missing));
    }
    return new TextWithRangeImpl(ensureNotNull(textRange), ensureNotNull(text));
  }
  e1g(encoder, value) {
    var obj = encoder.ew(this.or());
    obj.wx(this.or(), 0, RangeSerializer_getInstance(), value.g1e());
    obj.ux(this.or(), 1, value.m1f());
    obj.fw(this.or());
  }
  pr(encoder, value) {
    return this.e1g(encoder, (!(value == null) ? isInterface(value, TextWithRange) : false) ? value : THROW_CCE());
  }
}
//endregion
function get_start(_this__u8e3s4) {
  return _this__u8e3s4.g1e().o1();
}
function get_startLine(_this__u8e3s4) {
  return _this__u8e3s4.g1e().o1().h1e();
}
function get_endLine(_this__u8e3s4) {
  return _this__u8e3s4.g1e().i1e().h1e();
}
function get_startIndex(_this__u8e3s4) {
  return _this__u8e3s4.g1e().j1e();
}
function get_parserIndex(_this__u8e3s4) {
  return _this__u8e3s4.g1e().k1e();
}
function get_startCharacter(_this__u8e3s4) {
  return _this__u8e3s4.g1e().o1().l1e();
}
function get_endIndex(_this__u8e3s4) {
  return _this__u8e3s4.g1e().m1e();
}
function get_end(_this__u8e3s4) {
  return _this__u8e3s4.g1e().i1e();
}
var Companion_instance;
function Companion_getInstance() {
  return Companion_instance;
}
var $serializer_instance;
function $serializer_getInstance() {
  if ($serializer_instance === VOID)
    new $serializer();
  return $serializer_instance;
}
function offset(_this__u8e3s4, lineOffset, characterOffset) {
  lineOffset = lineOffset === VOID ? null : lineOffset;
  characterOffset = characterOffset === VOID ? null : characterOffset;
  var tmp = _this__u8e3s4.h1e();
  var tmp_0 = tmp + (lineOffset == null ? 0 : lineOffset) | 0;
  var tmp_1 = _this__u8e3s4.l1e();
  return new PositionImpl(tmp_0, tmp_1 + (characterOffset == null ? 0 : characterOffset) | 0);
}
var Companion_instance_0;
function Companion_getInstance_0() {
  return Companion_instance_0;
}
var $serializer_instance_0;
function $serializer_getInstance_0() {
  if ($serializer_instance_0 === VOID)
    new $serializer_0();
  return $serializer_instance_0;
}
function inRange(range, lineNumber, column, ignoreColumn, soft) {
  ignoreColumn = ignoreColumn === VOID ? null : ignoreColumn;
  soft = soft === VOID ? null : soft;
  if (range == null) {
    throw Exception.lc('TextRange is invalid in getRange');
  }
  var startLineNumber = range.o1().h1e();
  var endLineNumber = range.i1e().h1e();
  var offsetColumn = column;
  var tmp;
  if (startLineNumber === endLineNumber) {
    if (!(lineNumber === startLineNumber)) {
      return false;
    }
    if (ignoreColumn == null ? false : ignoreColumn) {
      return true;
    }
    var tmp_0;
    if (soft == null ? true : soft) {
      tmp_0 = 1;
    } else {
      tmp_0 = 0;
    }
    var mod = tmp_0;
    var containsLower = range.o1().l1e() - mod | 0;
    tmp = column <= (range.i1e().l1e() + mod | 0) ? containsLower <= column : false;
  } else if (startLineNumber === lineNumber) {
    if (ignoreColumn == null ? false : ignoreColumn) {
      return true;
    }
    var tmp_1;
    if (soft == null ? true : soft) {
      tmp_1 = (range.o1().l1e() - 1 | 0) <= offsetColumn;
    } else {
      tmp_1 = range.o1().l1e() <= offsetColumn;
    }
    tmp = tmp_1;
  } else if (endLineNumber === lineNumber) {
    if (ignoreColumn == null ? false : ignoreColumn) {
      return true;
    }
    var tmp_2;
    if (soft == null ? true : soft) {
      tmp_2 = (range.i1e().l1e() + 1 | 0) >= offsetColumn;
    } else {
      tmp_2 = range.i1e().l1e() >= offsetColumn;
    }
    tmp = tmp_2;
  } else {
    tmp = (startLineNumber + 1 | 0) <= lineNumber ? lineNumber < endLineNumber : false;
  }
  return tmp;
}
function contains(_this__u8e3s4, otherRange) {
  var oStart = _this__u8e3s4.j1e();
  var oEnd = _this__u8e3s4.m1e();
  var theRange = numberRangeToNumber(oStart, oEnd);
  var tmp;
  var containsLower = theRange.w2_1;
  var containsUpper = theRange.x2_1;
  var containsArg = otherRange.j1e();
  if (containsLower <= containsArg ? containsArg <= containsUpper : false) {
    var containsLower_0 = theRange.w2_1;
    var containsUpper_0 = theRange.x2_1;
    var containsArg_0 = otherRange.m1e();
    tmp = containsLower_0 <= containsArg_0 ? containsArg_0 <= containsUpper_0 : false;
  } else {
    tmp = false;
  }
  return tmp;
}
function get_sortValue(_this__u8e3s4) {
  var startLine = _this__u8e3s4.o1().h1e();
  var startColumn = _this__u8e3s4.o1().l1e();
  return startLine << 16 | startColumn;
}
function inRange_0(child, parent) {
  if (child.o1().h1e() < parent.o1().h1e()) {
    return false;
  }
  var endLineNumber = child.i1e().h1e();
  if (endLineNumber > parent.i1e().h1e()) {
    return false;
  }
  if (child.o1().h1e() === parent.o1().h1e()) {
    var startColumn = child.o1().l1e();
    if (startColumn < parent.o1().l1e()) {
      return false;
    }
  }
  if (endLineNumber === parent.i1e().h1e()) {
    var endColumn = child.i1e().l1e();
    if (endColumn > parent.i1e().l1e()) {
      return false;
    }
  }
  return true;
}
function inRange_1(range, ranges) {
  var tmp$ret$0;
  $l$block: {
    // Inline function 'kotlin.collections.any' call
    var inductionVariable = 0;
    var last = ranges.length;
    while (inductionVariable < last) {
      var element = ranges[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      if (inRange_0(range, element)) {
        tmp$ret$0 = true;
        break $l$block;
      }
    }
    tmp$ret$0 = false;
  }
  return tmp$ret$0;
}
function inside(_this__u8e3s4, other) {
  return inRange_0(_this__u8e3s4, other);
}
function assertIsValid(_this__u8e3s4) {
  var tmp;
  var tmp_0;
  var tmp_1;
  if (isInterface(_this__u8e3s4, RangeWithIndex)) {
    tmp_1 = _this__u8e3s4.o1().h1e() === _this__u8e3s4.i1e().h1e();
  } else {
    tmp_1 = false;
  }
  if (tmp_1) {
    tmp_0 = _this__u8e3s4.o1().l1e() === _this__u8e3s4.i1e().l1e();
  } else {
    tmp_0 = false;
  }
  if (tmp_0) {
    tmp = !(_this__u8e3s4.j1e() === _this__u8e3s4.m1e());
  } else {
    tmp = false;
  }
  if (tmp) {
    throw Exception.lc('Range is invalid; ' + _this__u8e3s4.o1().h1e() + ':' + _this__u8e3s4.o1().l1e() + ' to ' + _this__u8e3s4.i1e().h1e() + ':' + _this__u8e3s4.i1e().l1e() + '; StarIndex: ' + _this__u8e3s4.j1e() + '; EndIndex: ' + _this__u8e3s4.m1e());
  }
  if (isValid(_this__u8e3s4)) {
    return Unit_instance;
  }
  throw Exception.lc('Range is invalid; ' + _this__u8e3s4.o1().h1e() + ':' + _this__u8e3s4.o1().l1e() + ' to ' + _this__u8e3s4.i1e().h1e() + ':' + _this__u8e3s4.i1e().l1e());
}
function isValid(_this__u8e3s4) {
  if (_this__u8e3s4.i1e().h1e() < _this__u8e3s4.o1().h1e()) {
    return false;
  }
  if (_this__u8e3s4.o1().h1e() === _this__u8e3s4.i1e().h1e()) {
    return _this__u8e3s4.i1e().l1e() >= _this__u8e3s4.o1().l1e();
  }
  return true;
}
var Companion_instance_1;
function Companion_getInstance_1() {
  return Companion_instance_1;
}
var $serializer_instance_1;
function $serializer_getInstance_1() {
  if ($serializer_instance_1 === VOID)
    new $serializer_1();
  return $serializer_instance_1;
}
function toRange(_this__u8e3s4) {
  return new RangeImpl(_this__u8e3s4.o1(), _this__u8e3s4.i1e());
}
function empty(_this__u8e3s4) {
  return _this__u8e3s4.m1e() <= _this__u8e3s4.j1e();
}
function plus(_this__u8e3s4, other) {
  var tmp0 = _this__u8e3s4.j1e();
  // Inline function 'kotlin.math.min' call
  var b = other.j1e();
  var tmp0_startIndex = Math.min(tmp0, b);
  var tmp0_0 = _this__u8e3s4.m1e();
  // Inline function 'kotlin.math.max' call
  var b_0 = other.m1e();
  var tmp1_endIndex = Math.max(tmp0_0, b_0);
  var tmp2_start = _this__u8e3s4.j1e() < other.j1e() ? _this__u8e3s4.o1() : other.o1();
  var tmp3_end = _this__u8e3s4.m1e() > other.m1e() ? _this__u8e3s4.i1e() : other.i1e();
  var tmp4_parserIndex = _this__u8e3s4.k1e();
  return new RangeWithIndexImpl(tmp2_start, tmp3_end, tmp0_startIndex, tmp1_endIndex, tmp4_parserIndex);
}
var Companion_instance_2;
function Companion_getInstance_2() {
  return Companion_instance_2;
}
var $serializer_instance_2;
function $serializer_getInstance_2() {
  if ($serializer_instance_2 === VOID)
    new $serializer_2();
  return $serializer_instance_2;
}
function stitch(_this__u8e3s4) {
  // Inline function 'kotlin.collections.sortedBy' call
  // Inline function 'kotlin.comparisons.compareBy' call
  var tmp = stitch$lambda;
  var tmp$ret$1 = new sam$kotlin_Comparator$0(tmp);
  var itemsSorted = sortedWith(_this__u8e3s4, tmp$ret$1);
  var last = null;
  var out = '';
  var _iterator__ex2g4s = itemsSorted.d1();
  $l$loop: while (_iterator__ex2g4s.e1()) {
    var item = _iterator__ex2g4s.f1();
    if (startsWith(item.m1f(), _Char___init__impl__6a9atx(123))) {
      last = item;
      continue $l$loop;
    }
    out = out + (!(last == null) ? gap(last, item) : '');
    out = out + item.m1f();
    last = item;
  }
  return out;
}
function gap(last, next) {
  var lines = next.g1e().o1().h1e() - last.g1e().i1e().h1e() | 0;
  var tmp;
  if (lines === 0) {
    tmp = (next.g1e().o1().l1e() + 1 | 0) - last.g1e().i1e().l1e() | 0;
  } else {
    tmp = next.g1e().o1().l1e();
  }
  var spaces = tmp;
  var padding = next.g1e().j1e() - ((lines + spaces | 0) + last.g1e().m1e() | 0) | 0;
  var tmp_0;
  if (padding > 0 && lines > 1) {
    tmp_0 = '\n' + repeat(' ', padding) + repeat('\n', lines - 1 | 0);
  } else if (lines > 0) {
    tmp_0 = repeat('\n', lines);
  } else {
    tmp_0 = '';
  }
  var out = tmp_0;
  // Inline function 'kotlin.math.max' call
  var b = spaces - 1 | 0;
  var tmp$ret$0 = Math.max(0, b);
  return out + repeat(' ', tmp$ret$0);
}
function stitch$lambda(a, b) {
  // Inline function 'kotlin.comparisons.compareValuesBy' call
  var tmp = a.g1e().o1().h1e() << 8 | a.g1e().o1().h1e();
  var tmp$ret$2 = b.g1e().o1().h1e() << 8 | b.g1e().o1().h1e();
  return compareValues(tmp, tmp$ret$2);
}
var Companion_instance_3;
function Companion_getInstance_3() {
  return Companion_instance_3;
}
var $serializer_instance_3;
function $serializer_getInstance_3() {
  if ($serializer_instance_3 === VOID)
    new $serializer_3();
  return $serializer_instance_3;
}
function HasRangeSerializer$descriptor$delegate$lambda() {
  return buildClassSerialDescriptor('HasRange', [], HasRangeSerializer$descriptor$delegate$lambda$lambda);
}
function HasRangeSerializer$descriptor$delegate$lambda$lambda($this$buildClassSerialDescriptor) {
  $this$buildClassSerialDescriptor.zr('textRange', RangeSerializer_getInstance().or());
  return Unit_instance;
}
function HasRangeSerializer$_get_descriptor_$ref_mc9kd6() {
  return (p0) => p0.or();
}
var HasRangeSerializer_instance;
function HasRangeSerializer_getInstance() {
  if (HasRangeSerializer_instance === VOID)
    new HasRangeSerializer();
  return HasRangeSerializer_instance;
}
function PositionSerializer$descriptor$delegate$lambda() {
  return buildClassSerialDescriptor('Position', [], PositionSerializer$descriptor$delegate$lambda$lambda);
}
function PositionSerializer$descriptor$delegate$lambda$lambda($this$buildClassSerialDescriptor) {
  // Inline function 'kotlinx.serialization.descriptors.element' call
  var annotations = emptyList();
  // Inline function 'kotlinx.serialization.serializer' call
  // Inline function 'kotlinx.serialization.internal.cast' call
  var this_0 = serializer(createKType(PrimitiveClasses_getInstance().he(), arrayOf([]), false));
  var descriptor = (isInterface(this_0, KSerializer) ? this_0 : THROW_CCE()).or();
  $this$buildClassSerialDescriptor.av('line', descriptor, annotations, false);
  // Inline function 'kotlinx.serialization.descriptors.element' call
  var elementName = 'character';
  var annotations_0 = emptyList();
  // Inline function 'kotlinx.serialization.serializer' call
  // Inline function 'kotlinx.serialization.internal.cast' call
  var this_1 = serializer(createKType(PrimitiveClasses_getInstance().he(), arrayOf([]), false));
  var descriptor_0 = (isInterface(this_1, KSerializer) ? this_1 : THROW_CCE()).or();
  $this$buildClassSerialDescriptor.av(elementName, descriptor_0, annotations_0, false);
  return Unit_instance;
}
function PositionSerializer$_get_descriptor_$ref_xy4f64() {
  return (p0) => p0.or();
}
var PositionSerializer_instance;
function PositionSerializer_getInstance() {
  if (PositionSerializer_instance === VOID)
    new PositionSerializer();
  return PositionSerializer_instance;
}
function RangeSerializer$descriptor$delegate$lambda() {
  return buildClassSerialDescriptor('Range', [], RangeSerializer$descriptor$delegate$lambda$lambda);
}
function RangeSerializer$descriptor$delegate$lambda$lambda($this$buildClassSerialDescriptor) {
  // Inline function 'kotlinx.serialization.descriptors.element' call
  var annotations = emptyList();
  // Inline function 'kotlinx.serialization.serializer' call
  // Inline function 'kotlinx.serialization.internal.cast' call
  var this_0 = serializer(createKType(PrimitiveClasses_getInstance().me(), arrayOf([]), false));
  var descriptor = (isInterface(this_0, KSerializer) ? this_0 : THROW_CCE()).or();
  $this$buildClassSerialDescriptor.av('type', descriptor, annotations, true);
  $this$buildClassSerialDescriptor.av('start', PositionSerializer_getInstance().or(), emptyList(), false);
  $this$buildClassSerialDescriptor.av('end', PositionSerializer_getInstance().or(), emptyList(), false);
  // Inline function 'kotlinx.serialization.descriptors.element' call
  var elementName = 'startIndex';
  var annotations_0 = emptyList();
  // Inline function 'kotlinx.serialization.serializer' call
  // Inline function 'kotlinx.serialization.internal.cast' call
  var this_1 = serializer(createKType(PrimitiveClasses_getInstance().he(), arrayOf([]), false));
  var descriptor_0 = (isInterface(this_1, KSerializer) ? this_1 : THROW_CCE()).or();
  $this$buildClassSerialDescriptor.av(elementName, descriptor_0, annotations_0, true);
  // Inline function 'kotlinx.serialization.descriptors.element' call
  var elementName_0 = 'endIndex';
  var annotations_1 = emptyList();
  // Inline function 'kotlinx.serialization.serializer' call
  // Inline function 'kotlinx.serialization.internal.cast' call
  var this_2 = serializer(createKType(PrimitiveClasses_getInstance().he(), arrayOf([]), false));
  var descriptor_1 = (isInterface(this_2, KSerializer) ? this_2 : THROW_CCE()).or();
  $this$buildClassSerialDescriptor.av(elementName_0, descriptor_1, annotations_1, true);
  // Inline function 'kotlinx.serialization.descriptors.element' call
  var elementName_1 = 'parserIndex';
  var annotations_2 = emptyList();
  // Inline function 'kotlinx.serialization.serializer' call
  // Inline function 'kotlinx.serialization.internal.cast' call
  var this_3 = serializer(createKType(PrimitiveClasses_getInstance().he(), arrayOf([]), false));
  var descriptor_2 = (isInterface(this_3, KSerializer) ? this_3 : THROW_CCE()).or();
  $this$buildClassSerialDescriptor.av(elementName_1, descriptor_2, annotations_2, true);
  return Unit_instance;
}
function RangeSerializer$_get_descriptor_$ref_5fb4dc() {
  return (p0) => p0.or();
}
var RangeSerializer_instance;
function RangeSerializer_getInstance() {
  if (RangeSerializer_instance === VOID)
    new RangeSerializer();
  return RangeSerializer_instance;
}
function RangeWithIndexSerializer$descriptor$delegate$lambda() {
  return buildClassSerialDescriptor('IRangeWithIndex', [], RangeWithIndexSerializer$descriptor$delegate$lambda$lambda);
}
function RangeWithIndexSerializer$descriptor$delegate$lambda$lambda($this$buildClassSerialDescriptor) {
  // Inline function 'kotlinx.serialization.descriptors.element' call
  var annotations = emptyList();
  // Inline function 'kotlinx.serialization.serializer' call
  // Inline function 'kotlinx.serialization.internal.cast' call
  var this_0 = serializer(createKType(PrimitiveClasses_getInstance().me(), arrayOf([]), false));
  var descriptor = (isInterface(this_0, KSerializer) ? this_0 : THROW_CCE()).or();
  $this$buildClassSerialDescriptor.av('type', descriptor, annotations, false);
  $this$buildClassSerialDescriptor.av('start', PositionSerializer_getInstance().or(), emptyList(), false);
  $this$buildClassSerialDescriptor.av('end', PositionSerializer_getInstance().or(), emptyList(), false);
  // Inline function 'kotlinx.serialization.descriptors.element' call
  var elementName = 'startIndex';
  var annotations_0 = emptyList();
  // Inline function 'kotlinx.serialization.serializer' call
  // Inline function 'kotlinx.serialization.internal.cast' call
  var this_1 = serializer(createKType(PrimitiveClasses_getInstance().he(), arrayOf([]), false));
  var descriptor_0 = (isInterface(this_1, KSerializer) ? this_1 : THROW_CCE()).or();
  $this$buildClassSerialDescriptor.av(elementName, descriptor_0, annotations_0, true);
  // Inline function 'kotlinx.serialization.descriptors.element' call
  var elementName_0 = 'endIndex';
  var annotations_1 = emptyList();
  // Inline function 'kotlinx.serialization.serializer' call
  // Inline function 'kotlinx.serialization.internal.cast' call
  var this_2 = serializer(createKType(PrimitiveClasses_getInstance().he(), arrayOf([]), false));
  var descriptor_1 = (isInterface(this_2, KSerializer) ? this_2 : THROW_CCE()).or();
  $this$buildClassSerialDescriptor.av(elementName_0, descriptor_1, annotations_1, true);
  // Inline function 'kotlinx.serialization.descriptors.element' call
  var elementName_1 = 'parserIndex';
  var annotations_2 = emptyList();
  // Inline function 'kotlinx.serialization.serializer' call
  // Inline function 'kotlinx.serialization.internal.cast' call
  var this_3 = serializer(createKType(PrimitiveClasses_getInstance().he(), arrayOf([]), false));
  var descriptor_2 = (isInterface(this_3, KSerializer) ? this_3 : THROW_CCE()).or();
  $this$buildClassSerialDescriptor.av(elementName_1, descriptor_2, annotations_2, true);
  return Unit_instance;
}
function RangeWithIndexSerializer$_get_descriptor_$ref_uvhlf2() {
  return (p0) => p0.or();
}
var RangeWithIndexSerializer_instance;
function RangeWithIndexSerializer_getInstance() {
  if (RangeWithIndexSerializer_instance === VOID)
    new RangeWithIndexSerializer();
  return RangeWithIndexSerializer_instance;
}
function astCoreRangeWithIndexPolymorphic(_this__u8e3s4, init) {
  var tmp;
  if (init === VOID) {
    tmp = astCoreRangeWithIndexPolymorphic$lambda;
  } else {
    tmp = init;
  }
  init = tmp;
  // Inline function 'kotlinx.serialization.modules.polymorphic' call
  var baseClass = getKClass(RangeWithIndex);
  var builder = new PolymorphicModuleBuilder(baseClass, null);
  // Inline function 'kotlinx.serialization.modules.subclass' call
  var clazz = getKClass(RangeWithIndexImpl);
  // Inline function 'kotlinx.serialization.serializer' call
  // Inline function 'kotlinx.serialization.internal.cast' call
  var this_0 = serializer(createKType(getKClass(RangeWithIndexImpl), arrayOf([]), false));
  var tmp$ret$3 = isInterface(this_0, KSerializer) ? this_0 : THROW_CCE();
  builder.y1c(clazz, tmp$ret$3);
  init(builder);
  builder.z1c(astCoreRangeWithIndexPolymorphic$lambda_0);
  builder.a1d(_this__u8e3s4);
  return _this__u8e3s4;
}
function astCoreRangeWithIndexDefaultSerializer(_this__u8e3s4, getSerializer) {
  var tmp;
  if (getSerializer === VOID) {
    tmp = astCoreRangeWithIndexDefaultSerializer$lambda;
  } else {
    tmp = getSerializer;
  }
  getSerializer = tmp;
  var tmp_0 = getKClass(RangeWithIndex);
  _this__u8e3s4.q1d(tmp_0, astCoreRangeWithIndexDefaultSerializer$lambda_0(getSerializer));
  return _this__u8e3s4;
}
function astCoreRangePolymorphic(_this__u8e3s4, init) {
  var tmp;
  if (init === VOID) {
    tmp = astCoreRangePolymorphic$lambda;
  } else {
    tmp = init;
  }
  init = tmp;
  // Inline function 'kotlinx.serialization.modules.polymorphic' call
  var baseClass = getKClass(Range);
  var builder = new PolymorphicModuleBuilder(baseClass, null);
  // Inline function 'kotlinx.serialization.modules.subclass' call
  var clazz = getKClass(RangeWithIndexImpl);
  // Inline function 'kotlinx.serialization.serializer' call
  // Inline function 'kotlinx.serialization.internal.cast' call
  var this_0 = serializer(createKType(getKClass(RangeWithIndexImpl), arrayOf([]), false));
  var tmp$ret$3 = isInterface(this_0, KSerializer) ? this_0 : THROW_CCE();
  builder.y1c(clazz, tmp$ret$3);
  init(builder);
  builder.z1c(astCoreRangePolymorphic$lambda_0);
  builder.a1d(_this__u8e3s4);
  return _this__u8e3s4;
}
function astCoreRangeDefaultSerializer(_this__u8e3s4, getSerializer) {
  var tmp;
  if (getSerializer === VOID) {
    tmp = astCoreRangeDefaultSerializer$lambda;
  } else {
    tmp = getSerializer;
  }
  getSerializer = tmp;
  var tmp_0 = getKClass(Range);
  _this__u8e3s4.q1d(tmp_0, astCoreRangeDefaultSerializer$lambda_0(getSerializer));
  return _this__u8e3s4;
}
function astCoreHasTextPolymorphic(_this__u8e3s4, init) {
  var tmp;
  if (init === VOID) {
    tmp = astCoreHasTextPolymorphic$lambda;
  } else {
    tmp = init;
  }
  init = tmp;
  // Inline function 'kotlinx.serialization.modules.polymorphic' call
  var baseClass = getKClass(HasText);
  var builder = new PolymorphicModuleBuilder(baseClass, null);
  // Inline function 'kotlinx.serialization.modules.subclass' call
  var clazz = getKClass(TextWithRange);
  // Inline function 'kotlinx.serialization.serializer' call
  // Inline function 'kotlinx.serialization.internal.cast' call
  var this_0 = serializer(createKType(getKClass(TextWithRange), arrayOf([]), false));
  var tmp$ret$3 = isInterface(this_0, KSerializer) ? this_0 : THROW_CCE();
  builder.y1c(clazz, tmp$ret$3);
  init(builder);
  builder.a1d(_this__u8e3s4);
  return _this__u8e3s4;
}
function astCoreHasTextDefaultSerializer(_this__u8e3s4, getSerializer) {
  var tmp;
  if (getSerializer === VOID) {
    tmp = astCoreHasTextDefaultSerializer$lambda;
  } else {
    tmp = getSerializer;
  }
  getSerializer = tmp;
  var tmp_0 = getKClass(HasText);
  _this__u8e3s4.q1d(tmp_0, astCoreHasTextDefaultSerializer$lambda_0(getSerializer));
  return _this__u8e3s4;
}
function astCorePositionPolymorphic(_this__u8e3s4, init) {
  var tmp;
  if (init === VOID) {
    tmp = astCorePositionPolymorphic$lambda;
  } else {
    tmp = init;
  }
  init = tmp;
  // Inline function 'kotlinx.serialization.modules.polymorphic' call
  var baseClass = getKClass(Position);
  var builder = new PolymorphicModuleBuilder(baseClass, null);
  // Inline function 'kotlinx.serialization.modules.subclass' call
  var clazz = getKClass(PositionImpl);
  // Inline function 'kotlinx.serialization.serializer' call
  // Inline function 'kotlinx.serialization.internal.cast' call
  var this_0 = serializer(createKType(getKClass(PositionImpl), arrayOf([]), false));
  var tmp$ret$3 = isInterface(this_0, KSerializer) ? this_0 : THROW_CCE();
  builder.y1c(clazz, tmp$ret$3);
  init(builder);
  builder.z1c(astCorePositionPolymorphic$lambda_0);
  builder.a1d(_this__u8e3s4);
  return _this__u8e3s4;
}
function astCorePositionDefaultSerializer(_this__u8e3s4, getSerializer) {
  var tmp;
  if (getSerializer === VOID) {
    tmp = astCorePositionDefaultSerializer$lambda;
  } else {
    tmp = getSerializer;
  }
  getSerializer = tmp;
  var tmp_0 = getKClass(Position);
  _this__u8e3s4.q1d(tmp_0, astCorePositionDefaultSerializer$lambda_0(getSerializer));
  return _this__u8e3s4;
}
function astCoreHasRangePolymorphic(_this__u8e3s4, init) {
  var tmp;
  if (init === VOID) {
    tmp = astCoreHasRangePolymorphic$lambda;
  } else {
    tmp = init;
  }
  init = tmp;
  // Inline function 'kotlinx.serialization.modules.polymorphic' call
  var baseClass = getKClass(HasRange);
  var builder = new PolymorphicModuleBuilder(baseClass, null);
  // Inline function 'kotlinx.serialization.modules.subclass' call
  var clazz = getKClass(TextWithRangeImpl);
  // Inline function 'kotlinx.serialization.serializer' call
  // Inline function 'kotlinx.serialization.internal.cast' call
  var this_0 = serializer(createKType(getKClass(TextWithRangeImpl), arrayOf([]), false));
  var tmp$ret$3 = isInterface(this_0, KSerializer) ? this_0 : THROW_CCE();
  builder.y1c(clazz, tmp$ret$3);
  builder.z1c(astCoreHasRangePolymorphic$lambda_0);
  init(builder);
  builder.a1d(_this__u8e3s4);
  return _this__u8e3s4;
}
function astCoreHasRangeDefaultSerializer(_this__u8e3s4, getSerializer) {
  var tmp;
  if (getSerializer === VOID) {
    tmp = astCoreHasRangeDefaultSerializer$lambda;
  } else {
    tmp = getSerializer;
  }
  getSerializer = tmp;
  var tmp_0 = getKClass(HasRange);
  _this__u8e3s4.q1d(tmp_0, astCoreHasRangeDefaultSerializer$lambda_0(getSerializer));
  return _this__u8e3s4;
}
function astCoreTextWithRangePolymorphic(_this__u8e3s4, init) {
  var tmp;
  if (init === VOID) {
    tmp = astCoreTextWithRangePolymorphic$lambda;
  } else {
    tmp = init;
  }
  init = tmp;
  // Inline function 'kotlinx.serialization.modules.polymorphic' call
  var baseClass = getKClass(TextWithRange);
  var builder = new PolymorphicModuleBuilder(baseClass, null);
  // Inline function 'kotlinx.serialization.modules.subclass' call
  var clazz = getKClass(TextWithRangeImpl);
  // Inline function 'kotlinx.serialization.serializer' call
  // Inline function 'kotlinx.serialization.internal.cast' call
  var this_0 = serializer(createKType(getKClass(TextWithRangeImpl), arrayOf([]), false));
  var tmp$ret$3 = isInterface(this_0, KSerializer) ? this_0 : THROW_CCE();
  builder.y1c(clazz, tmp$ret$3);
  init(builder);
  builder.z1c(astCoreTextWithRangePolymorphic$lambda_0);
  builder.a1d(_this__u8e3s4);
  return _this__u8e3s4;
}
function astCoreTextWithRangeDefaultSerializer(_this__u8e3s4, getSerializer) {
  var tmp;
  if (getSerializer === VOID) {
    tmp = astCoreTextWithRangeDefaultSerializer$lambda;
  } else {
    tmp = getSerializer;
  }
  getSerializer = tmp;
  var tmp_0 = getKClass(TextWithRange);
  _this__u8e3s4.q1d(tmp_0, astCoreTextWithRangeDefaultSerializer$lambda_0(getSerializer));
  return _this__u8e3s4;
}
function astCoreRangeWithIndexPolymorphic$lambda(_this__u8e3s4) {
  return Unit_instance;
}
function astCoreRangeWithIndexPolymorphic$lambda_0(it) {
  return RangeWithIndexSerializer_getInstance();
}
function astCoreRangeWithIndexDefaultSerializer$lambda(it) {
  return null;
}
function astCoreRangeWithIndexDefaultSerializer$lambda_0($getSerializer) {
  return (instance) => {
    var tmp0_safe_receiver = $getSerializer(instance);
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      return tmp0_safe_receiver;
    }
    var tmp;
    if (instance instanceof RangeWithIndexImpl) {
      var tmp_0 = Companion_instance_2.n1e();
      tmp = isInterface(tmp_0, SerializationStrategy) ? tmp_0 : THROW_CCE();
    } else {
      tmp = RangeWithIndexSerializer_getInstance();
    }
    return tmp;
  };
}
function astCoreRangePolymorphic$lambda(_this__u8e3s4) {
  return Unit_instance;
}
function astCoreRangePolymorphic$lambda_0(it) {
  return RangeSerializer_getInstance();
}
function astCoreRangeDefaultSerializer$lambda(it) {
  return null;
}
function astCoreRangeDefaultSerializer$lambda_0($getSerializer) {
  return (instance) => {
    var tmp0_safe_receiver = $getSerializer(instance);
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      return tmp0_safe_receiver;
    }
    var tmp;
    if (instance instanceof RangeWithIndexImpl) {
      var tmp_0 = Companion_instance_2.n1e();
      tmp = isInterface(tmp_0, SerializationStrategy) ? tmp_0 : THROW_CCE();
    } else {
      if (isInterface(instance, RangeWithIndex)) {
        var tmp_1 = RangeWithIndexSerializer_getInstance();
        tmp = isInterface(tmp_1, SerializationStrategy) ? tmp_1 : THROW_CCE();
      } else {
        tmp = RangeSerializer_getInstance();
      }
    }
    return tmp;
  };
}
function astCoreHasTextPolymorphic$lambda(_this__u8e3s4) {
  return Unit_instance;
}
function astCoreHasTextDefaultSerializer$lambda(it) {
  return null;
}
function astCoreHasTextDefaultSerializer$lambda_0($getSerializer) {
  return (instance) => {
    var tmp0_safe_receiver = $getSerializer(instance);
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      return tmp0_safe_receiver;
    }
    var tmp;
    if (instance instanceof TextWithRangeImpl) {
      var tmp_0 = Companion_instance_3.n1e();
      tmp = isInterface(tmp_0, SerializationStrategy) ? tmp_0 : THROW_CCE();
    } else {
      tmp = null;
    }
    return tmp;
  };
}
function astCorePositionPolymorphic$lambda(_this__u8e3s4) {
  return Unit_instance;
}
function astCorePositionPolymorphic$lambda_0(it) {
  return PositionSerializer_getInstance();
}
function astCorePositionDefaultSerializer$lambda(it) {
  return null;
}
function astCorePositionDefaultSerializer$lambda_0($getSerializer) {
  return (instance) => {
    var tmp0_safe_receiver = $getSerializer(instance);
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      return tmp0_safe_receiver;
    }
    var tmp;
    if (instance instanceof PositionImpl) {
      var tmp_0 = Companion_instance_0.n1e();
      tmp = isInterface(tmp_0, SerializationStrategy) ? tmp_0 : THROW_CCE();
    } else {
      tmp = PositionSerializer_getInstance();
    }
    return tmp;
  };
}
function astCoreHasRangePolymorphic$lambda(_this__u8e3s4) {
  return Unit_instance;
}
function astCoreHasRangePolymorphic$lambda_0(it) {
  return HasRangeSerializer_getInstance();
}
function astCoreHasRangeDefaultSerializer$lambda(it) {
  return null;
}
function astCoreHasRangeDefaultSerializer$lambda_0($getSerializer) {
  return (instance) => {
    var tmp0_safe_receiver = $getSerializer(instance);
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      return tmp0_safe_receiver;
    }
    var tmp;
    if (instance instanceof TextWithRangeImpl) {
      var tmp_0 = Companion_instance_3.n1e();
      tmp = isInterface(tmp_0, SerializationStrategy) ? tmp_0 : THROW_CCE();
    } else {
      if (isInterface(instance, TextWithRange)) {
        var tmp_1 = TextWithRangeSerializer_getInstance();
        tmp = isInterface(tmp_1, SerializationStrategy) ? tmp_1 : THROW_CCE();
      } else {
        if (instance instanceof HasRangeImpl) {
          var tmp_2 = Companion_instance.n1e();
          tmp = isInterface(tmp_2, SerializationStrategy) ? tmp_2 : THROW_CCE();
        } else {
          tmp = HasRangeSerializer_getInstance();
        }
      }
    }
    return tmp;
  };
}
function astCoreTextWithRangePolymorphic$lambda(_this__u8e3s4) {
  return Unit_instance;
}
function astCoreTextWithRangePolymorphic$lambda_0(it) {
  return TextWithRangeSerializer_getInstance();
}
function astCoreTextWithRangeDefaultSerializer$lambda(it) {
  return null;
}
function astCoreTextWithRangeDefaultSerializer$lambda_0($getSerializer) {
  return (instance) => {
    var tmp0_safe_receiver = $getSerializer(instance);
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      return tmp0_safe_receiver;
    }
    var tmp;
    if (instance instanceof TextWithRangeImpl) {
      var tmp_0 = Companion_instance_3.n1e();
      tmp = isInterface(tmp_0, SerializationStrategy) ? tmp_0 : THROW_CCE();
    } else {
      tmp = TextWithRangeSerializer_getInstance();
    }
    return tmp;
  };
}
function TextWithRangeSerializer$descriptor$delegate$lambda() {
  return buildClassSerialDescriptor('TextWithRange', [], TextWithRangeSerializer$descriptor$delegate$lambda$lambda);
}
function TextWithRangeSerializer$descriptor$delegate$lambda$lambda($this$buildClassSerialDescriptor) {
  $this$buildClassSerialDescriptor.zr('textRange', RangeSerializer_getInstance().or());
  // Inline function 'kotlinx.serialization.descriptors.element' call
  var annotations = emptyList();
  // Inline function 'kotlinx.serialization.serializer' call
  // Inline function 'kotlinx.serialization.internal.cast' call
  var this_0 = serializer(createKType(PrimitiveClasses_getInstance().me(), arrayOf([]), false));
  var descriptor = (isInterface(this_0, KSerializer) ? this_0 : THROW_CCE()).or();
  $this$buildClassSerialDescriptor.av('text', descriptor, annotations, false);
  return Unit_instance;
}
function TextWithRangeSerializer$_get_descriptor_$ref_du0lpp() {
  return (p0) => p0.or();
}
var TextWithRangeSerializer_instance;
function TextWithRangeSerializer_getInstance() {
  if (TextWithRangeSerializer_instance === VOID)
    new TextWithRangeSerializer();
  return TextWithRangeSerializer_instance;
}
function isRangeWithIndex(range) {
  if (range instanceof RangeWithIndexImpl) {
    return true;
  }
  // Inline function 'kotlin.js.asDynamic' call
  var dynamic = range;
  return dynamic.hasOwnProperty != null && dynamic.hasOwnProperty('startIndex') == true;
}
//region block: post-declaration
initMetadataForCompanion(Companion);
protoOf($serializer).p14 = typeParametersSerializers;
initMetadataForObject($serializer, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForInterface(HasRange, 'HasRange', VOID, VOID, VOID, VOID, VOID, {0: HasRangeSerializer_getInstance});
initMetadataForClass(HasRangeImpl, 'HasRangeImpl', VOID, VOID, [HasRange], VOID, VOID, {0: $serializer_getInstance});
initMetadataForInterface(Position, 'Position', VOID, VOID, VOID, VOID, VOID, {0: PositionSerializer_getInstance});
initMetadataForCompanion(Companion_0);
protoOf($serializer_0).p14 = typeParametersSerializers;
initMetadataForObject($serializer_0, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(PositionImpl, 'PositionImpl', VOID, VOID, [Position], VOID, VOID, {0: $serializer_getInstance_0});
initMetadataForInterface(Range, 'Range', VOID, VOID, VOID, VOID, VOID, {0: RangeSerializer_getInstance});
initMetadataForCompanion(Companion_1);
protoOf($serializer_1).p14 = typeParametersSerializers;
initMetadataForObject($serializer_1, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(RangeImpl, 'RangeImpl', VOID, VOID, [Range], VOID, VOID, {0: $serializer_getInstance_1});
initMetadataForInterface(RangeWithIndex, 'RangeWithIndex', VOID, VOID, [Range], VOID, VOID, {0: RangeWithIndexSerializer_getInstance});
initMetadataForCompanion(Companion_2);
protoOf($serializer_2).p14 = typeParametersSerializers;
initMetadataForObject($serializer_2, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(RangeWithIndexImpl, 'RangeWithIndexImpl', VOID, VOID, [RangeWithIndex], VOID, VOID, {0: $serializer_getInstance_2});
initMetadataForInterface(HasText, 'HasText');
initMetadataForInterface(TextWithRange, 'TextWithRange', VOID, VOID, [HasRange, HasText], VOID, VOID, {0: TextWithRangeSerializer_getInstance});
initMetadataForClass(sam$kotlin_Comparator$0, 'sam$kotlin_Comparator$0', VOID, VOID, [Comparator, FunctionAdapter]);
initMetadataForCompanion(Companion_3);
protoOf($serializer_3).p14 = typeParametersSerializers;
initMetadataForObject($serializer_3, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(TextWithRangeImpl, 'TextWithRangeImpl', VOID, VOID, [TextWithRange], VOID, VOID, {0: $serializer_getInstance_3});
initMetadataForObject(HasRangeSerializer, 'HasRangeSerializer', VOID, VOID, [KSerializer]);
initMetadataForObject(PositionSerializer, 'PositionSerializer', VOID, VOID, [KSerializer]);
initMetadataForObject(RangeSerializer, 'RangeSerializer', VOID, VOID, [KSerializer]);
initMetadataForObject(RangeWithIndexSerializer, 'RangeWithIndexSerializer', VOID, VOID, [KSerializer]);
initMetadataForObject(TextWithRangeSerializer, 'TextWithRangeSerializer', VOID, VOID, [KSerializer]);
//endregion
//region block: init
Companion_instance = new Companion();
Companion_instance_0 = new Companion_0();
Companion_instance_1 = new Companion_1();
Companion_instance_2 = new Companion_2();
Companion_instance_3 = new Companion_3();
//endregion
//region block: exports
export {
  astCoreHasRangeDefaultSerializer as astCoreHasRangeDefaultSerializer60ljmx384fjm,
  astCoreHasRangePolymorphic as astCoreHasRangePolymorphic2jyfiusvo002k,
  astCoreHasTextDefaultSerializer as astCoreHasTextDefaultSerializer1q81vh5lbxw15,
  astCoreHasTextPolymorphic as astCoreHasTextPolymorphic1x1rg34xkx9p1,
  astCorePositionDefaultSerializer as astCorePositionDefaultSerializer8ypzz7v4urju,
  astCorePositionPolymorphic as astCorePositionPolymorphicnq9t3xhq8kqb,
  astCoreRangeDefaultSerializer as astCoreRangeDefaultSerializer3g5tn3n4vim8z,
  astCoreRangePolymorphic as astCoreRangePolymorphic1rillxgf6enh2,
  astCoreRangeWithIndexDefaultSerializer as astCoreRangeWithIndexDefaultSerializer3l7f8oyqbwfei,
  astCoreRangeWithIndexPolymorphic as astCoreRangeWithIndexPolymorphic2w7yeu64hev4q,
  astCoreTextWithRangeDefaultSerializer as astCoreTextWithRangeDefaultSerializerhz9nxv5ehexn,
  astCoreTextWithRangePolymorphic as astCoreTextWithRangePolymorphic13h3zlsqlr7zo,
  HasRange as HasRange37aayvdo2pqep,
  PositionImpl as PositionImpl2ytjbl3oqczz6,
  Position as Position17mp9nzvwhav3,
  RangeImpl as RangeImpld52svpprrf2s,
  RangeWithIndexImpl as RangeWithIndexImpl3hv9fvnni0g7w,
  RangeWithIndex as RangeWithIndex24ai2msf9abug,
  Range as Range1q42fn976dy5y,
  TextWithRange as TextWithRange2q8nc6zoqlr5f,
  assertIsValid as assertIsValidp38ol1acdoan,
  contains as contains13ck0m4u7i227,
  empty as empty3b3p0t7pnwiup,
  get_end as get_end3suc9txv2ts3s,
  get_endIndex as get_endIndex2m1u0qib2h9vq,
  get_endLine as get_endLine33mw6qczr5a3a,
  inRange_1 as inRange2gnmhcuofotqx,
  inRange as inRange3fhiozomdlnya,
  inRange_0 as inRange36v7dwbljt6sz,
  inside as inside1n2resiu47lmu,
  offset as offset28yog6gotbqkz,
  get_parserIndex as get_parserIndex3im8ocmpscp1o,
  plus as plus5i4ifyf9slo5,
  get_sortValue as get_sortValue3305pt8rns63f,
  get_start as get_start6jzvz90ekvzg,
  get_startCharacter as get_startCharacter3smi96toww9yn,
  get_startIndex as get_startIndex1rqi25fw89hqv,
  get_startLine as get_startLine3i306kj8l2ztq,
  stitch as stitch25earyrgzp4jl,
  toRange as toRange2bbskfy9df951,
  PositionSerializer_getInstance as PositionSerializer_getInstance30kb0wbmzb8y,
  RangeSerializer_getInstance as RangeSerializer_getInstancesbqzmtha7l6u,
  RangeWithIndexSerializer_getInstance as RangeWithIndexSerializer_getInstance1z1rijinqeoet,
  Companion_instance_0 as Companion_instance17wxk1w7q7sr8,
  Companion_instance_2 as Companion_instancen1egan6q2lq7,
};
//endregion

//# sourceMappingURL=common-ast-structs.mjs.map
