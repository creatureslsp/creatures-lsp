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
  k1e() {
    return $serializer_getInstance();
  }
}
class $serializer {
  constructor() {
    $serializer_instance = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('com.bedalton.common.ast.structs.HasRangeImpl', this, 1);
    tmp0_serialDesc.w13('textRange', false);
    this.l1e_1 = tmp0_serialDesc;
  }
  m1e(encoder, value) {
    var tmp0_desc = this.l1e_1;
    var tmp1_output = encoder.bw(tmp0_desc);
    tmp1_output.tx(tmp0_desc, 0, RangeWithIndexSerializer_getInstance(), value.n1e_1);
    tmp1_output.cw(tmp0_desc);
  }
  mr(encoder, value) {
    return this.m1e(encoder, value instanceof HasRangeImpl ? value : THROW_CCE());
  }
  nr(decoder) {
    var tmp0_desc = this.l1e_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_input = decoder.bw(tmp0_desc);
    if (tmp5_input.sw()) {
      tmp4_local0 = tmp5_input.nw(tmp0_desc, 0, RangeWithIndexSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp5_input.tw(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp5_input.nw(tmp0_desc, 0, RangeWithIndexSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          default:
            throw UnknownFieldException.et(tmp2_index);
        }
      }
    tmp5_input.cw(tmp0_desc);
    return HasRangeImpl.o1e(tmp3_bitMask0, tmp4_local0, null);
  }
  lr() {
    return this.l1e_1;
  }
  l14() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [RangeWithIndexSerializer_getInstance()];
  }
}
class HasRange {}
class HasRangeImpl {
  constructor(textRange) {
    this.n1e_1 = textRange;
  }
  d1e() {
    return this.n1e_1;
  }
  toString() {
    return 'HasRangeImpl(textRange=' + toString(this.n1e_1) + ')';
  }
  hashCode() {
    return hashCode(this.n1e_1);
  }
  equals(other) {
    if (this === other)
      return true;
    if (!(other instanceof HasRangeImpl))
      return false;
    if (!equals(this.n1e_1, other.n1e_1))
      return false;
    return true;
  }
  static o1e(seen0, textRange, serializationConstructorMarker) {
    if (!(1 === (1 & seen0))) {
      throwMissingFieldException(seen0, 1, $serializer_getInstance().l1e_1);
    }
    var $this = createThis(this);
    $this.n1e_1 = textRange;
    return $this;
  }
}
class Position {}
class Companion_0 {
  k1e() {
    return $serializer_getInstance_0();
  }
}
class $serializer_0 {
  constructor() {
    $serializer_instance_0 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('com.bedalton.common.ast.structs.PositionImpl', this, 2);
    tmp0_serialDesc.w13('line', false);
    tmp0_serialDesc.w13('character', false);
    this.p1e_1 = tmp0_serialDesc;
  }
  q1e(encoder, value) {
    var tmp0_desc = this.p1e_1;
    var tmp1_output = encoder.bw(tmp0_desc);
    tmp1_output.mx(tmp0_desc, 0, value.r1e_1);
    tmp1_output.mx(tmp0_desc, 1, value.s1e_1);
    tmp1_output.cw(tmp0_desc);
  }
  mr(encoder, value) {
    return this.q1e(encoder, value instanceof PositionImpl ? value : THROW_CCE());
  }
  nr(decoder) {
    var tmp0_desc = this.p1e_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = 0;
    var tmp5_local1 = 0;
    var tmp6_input = decoder.bw(tmp0_desc);
    if (tmp6_input.sw()) {
      tmp4_local0 = tmp6_input.gw(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp6_input.gw(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp6_input.tw(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp6_input.gw(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp6_input.gw(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          default:
            throw UnknownFieldException.et(tmp2_index);
        }
      }
    tmp6_input.cw(tmp0_desc);
    return PositionImpl.t1e(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  }
  lr() {
    return this.p1e_1;
  }
  l14() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [IntSerializer_getInstance(), IntSerializer_getInstance()];
  }
}
class PositionImpl {
  constructor(line, character) {
    this.r1e_1 = line;
    this.s1e_1 = character;
  }
  e1e() {
    return this.r1e_1;
  }
  i1e() {
    return this.s1e_1;
  }
  toString() {
    return 'PositionImpl(line=' + this.r1e_1 + ', character=' + this.s1e_1 + ')';
  }
  hashCode() {
    var result = this.r1e_1;
    result = imul(result, 31) + this.s1e_1 | 0;
    return result;
  }
  equals(other) {
    if (this === other)
      return true;
    if (!(other instanceof PositionImpl))
      return false;
    if (!(this.r1e_1 === other.r1e_1))
      return false;
    if (!(this.s1e_1 === other.s1e_1))
      return false;
    return true;
  }
  static t1e(seen0, line, character, serializationConstructorMarker) {
    if (!(3 === (3 & seen0))) {
      throwMissingFieldException(seen0, 3, $serializer_getInstance_0().p1e_1);
    }
    var $this = createThis(this);
    $this.r1e_1 = line;
    $this.s1e_1 = character;
    return $this;
  }
}
class Range {}
class Companion_1 {}
class $serializer_1 {
  constructor() {
    $serializer_instance_1 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('com.bedalton.common.ast.structs.RangeImpl', this, 2);
    tmp0_serialDesc.w13('start', false);
    tmp0_serialDesc.w13('end', false);
    this.u1e_1 = tmp0_serialDesc;
  }
  v1e(encoder, value) {
    var tmp0_desc = this.u1e_1;
    var tmp1_output = encoder.bw(tmp0_desc);
    tmp1_output.tx(tmp0_desc, 0, PositionSerializer_getInstance(), value.w1e_1);
    tmp1_output.tx(tmp0_desc, 1, PositionSerializer_getInstance(), value.x1e_1);
    tmp1_output.cw(tmp0_desc);
  }
  mr(encoder, value) {
    return this.v1e(encoder, value instanceof RangeImpl ? value : THROW_CCE());
  }
  nr(decoder) {
    var tmp0_desc = this.u1e_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_input = decoder.bw(tmp0_desc);
    if (tmp6_input.sw()) {
      tmp4_local0 = tmp6_input.nw(tmp0_desc, 0, PositionSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp6_input.nw(tmp0_desc, 1, PositionSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp6_input.tw(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp6_input.nw(tmp0_desc, 0, PositionSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp6_input.nw(tmp0_desc, 1, PositionSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          default:
            throw UnknownFieldException.et(tmp2_index);
        }
      }
    tmp6_input.cw(tmp0_desc);
    return RangeImpl.y1e(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  }
  lr() {
    return this.u1e_1;
  }
  l14() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [PositionSerializer_getInstance(), PositionSerializer_getInstance()];
  }
}
class RangeImpl {
  constructor(start, end) {
    this.w1e_1 = start;
    this.x1e_1 = end;
  }
  h1() {
    return this.w1e_1;
  }
  f1e() {
    return this.x1e_1;
  }
  toString() {
    return 'RangeImpl(start=' + toString(this.w1e_1) + ', end=' + toString(this.x1e_1) + ')';
  }
  hashCode() {
    var result = hashCode(this.w1e_1);
    result = imul(result, 31) + hashCode(this.x1e_1) | 0;
    return result;
  }
  equals(other) {
    if (this === other)
      return true;
    if (!(other instanceof RangeImpl))
      return false;
    if (!equals(this.w1e_1, other.w1e_1))
      return false;
    if (!equals(this.x1e_1, other.x1e_1))
      return false;
    return true;
  }
  static y1e(seen0, start, end, serializationConstructorMarker) {
    if (!(3 === (3 & seen0))) {
      throwMissingFieldException(seen0, 3, $serializer_getInstance_1().u1e_1);
    }
    var $this = createThis(this);
    $this.w1e_1 = start;
    $this.x1e_1 = end;
    return $this;
  }
}
class RangeWithIndex {}
class Companion_2 {
  k1e() {
    return $serializer_getInstance_2();
  }
}
class $serializer_2 {
  constructor() {
    $serializer_instance_2 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('com.bedalton.common.ast.structs.RangeWithIndexImpl', this, 5);
    tmp0_serialDesc.w13('start', false);
    tmp0_serialDesc.w13('end', false);
    tmp0_serialDesc.w13('startIndex', false);
    tmp0_serialDesc.w13('endIndex', false);
    tmp0_serialDesc.w13('parserIndex', true);
    this.z1e_1 = tmp0_serialDesc;
  }
  a1f(encoder, value) {
    var tmp0_desc = this.z1e_1;
    var tmp1_output = encoder.bw(tmp0_desc);
    tmp1_output.tx(tmp0_desc, 0, PositionSerializer_getInstance(), value.b1f_1);
    tmp1_output.tx(tmp0_desc, 1, PositionSerializer_getInstance(), value.c1f_1);
    tmp1_output.mx(tmp0_desc, 2, value.d1f_1);
    tmp1_output.mx(tmp0_desc, 3, value.e1f_1);
    if (tmp1_output.zx(tmp0_desc, 4) ? true : !(value.f1f_1 == null)) {
      tmp1_output.vx(tmp0_desc, 4, IntSerializer_getInstance(), value.f1f_1);
    }
    tmp1_output.cw(tmp0_desc);
  }
  mr(encoder, value) {
    return this.a1f(encoder, value instanceof RangeWithIndexImpl ? value : THROW_CCE());
  }
  nr(decoder) {
    var tmp0_desc = this.z1e_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = 0;
    var tmp7_local3 = 0;
    var tmp8_local4 = null;
    var tmp9_input = decoder.bw(tmp0_desc);
    if (tmp9_input.sw()) {
      tmp4_local0 = tmp9_input.nw(tmp0_desc, 0, PositionSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp9_input.nw(tmp0_desc, 1, PositionSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp9_input.gw(tmp0_desc, 2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp9_input.gw(tmp0_desc, 3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp9_input.pw(tmp0_desc, 4, IntSerializer_getInstance(), tmp8_local4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp9_input.tw(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp9_input.nw(tmp0_desc, 0, PositionSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp9_input.nw(tmp0_desc, 1, PositionSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp9_input.gw(tmp0_desc, 2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp9_input.gw(tmp0_desc, 3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp9_input.pw(tmp0_desc, 4, IntSerializer_getInstance(), tmp8_local4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          default:
            throw UnknownFieldException.et(tmp2_index);
        }
      }
    tmp9_input.cw(tmp0_desc);
    return RangeWithIndexImpl.g1f(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, null);
  }
  lr() {
    return this.z1e_1;
  }
  l14() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [PositionSerializer_getInstance(), PositionSerializer_getInstance(), IntSerializer_getInstance(), IntSerializer_getInstance(), get_nullable(IntSerializer_getInstance())];
  }
}
class RangeWithIndexImpl {
  constructor(start, end, startIndex, endIndex, parserIndex) {
    parserIndex = parserIndex === VOID ? null : parserIndex;
    this.b1f_1 = start;
    this.c1f_1 = end;
    this.d1f_1 = startIndex;
    this.e1f_1 = endIndex;
    this.f1f_1 = parserIndex;
    assertIsValid(this);
  }
  h1() {
    return this.b1f_1;
  }
  f1e() {
    return this.c1f_1;
  }
  g1e() {
    return this.d1f_1;
  }
  j1e() {
    return this.e1f_1;
  }
  h1e() {
    return this.f1f_1;
  }
  h1f(start, end, startIndex, endIndex, parserIndex) {
    return new RangeWithIndexImpl(start, end, startIndex, endIndex, parserIndex);
  }
  i1f(start, end, startIndex, endIndex, parserIndex, $super) {
    start = start === VOID ? this.b1f_1 : start;
    end = end === VOID ? this.c1f_1 : end;
    startIndex = startIndex === VOID ? this.d1f_1 : startIndex;
    endIndex = endIndex === VOID ? this.e1f_1 : endIndex;
    parserIndex = parserIndex === VOID ? this.f1f_1 : parserIndex;
    return $super === VOID ? this.h1f(start, end, startIndex, endIndex, parserIndex) : $super.h1f.call(this, start, end, startIndex, endIndex, parserIndex);
  }
  toString() {
    return 'RangeWithIndexImpl(start=' + toString(this.b1f_1) + ', end=' + toString(this.c1f_1) + ', startIndex=' + this.d1f_1 + ', endIndex=' + this.e1f_1 + ', parserIndex=' + this.f1f_1 + ')';
  }
  hashCode() {
    var result = hashCode(this.b1f_1);
    result = imul(result, 31) + hashCode(this.c1f_1) | 0;
    result = imul(result, 31) + this.d1f_1 | 0;
    result = imul(result, 31) + this.e1f_1 | 0;
    result = imul(result, 31) + (this.f1f_1 == null ? 0 : this.f1f_1) | 0;
    return result;
  }
  equals(other) {
    if (this === other)
      return true;
    if (!(other instanceof RangeWithIndexImpl))
      return false;
    if (!equals(this.b1f_1, other.b1f_1))
      return false;
    if (!equals(this.c1f_1, other.c1f_1))
      return false;
    if (!(this.d1f_1 === other.d1f_1))
      return false;
    if (!(this.e1f_1 === other.e1f_1))
      return false;
    if (!(this.f1f_1 == other.f1f_1))
      return false;
    return true;
  }
  static g1f(seen0, start, end, startIndex, endIndex, parserIndex, serializationConstructorMarker) {
    if (!(15 === (15 & seen0))) {
      throwMissingFieldException(seen0, 15, $serializer_getInstance_2().z1e_1);
    }
    var $this = createThis(this);
    $this.b1f_1 = start;
    $this.c1f_1 = end;
    $this.d1f_1 = startIndex;
    $this.e1f_1 = endIndex;
    if (0 === (seen0 & 16))
      $this.f1f_1 = null;
    else
      $this.f1f_1 = parserIndex;
    assertIsValid($this);
    return $this;
  }
}
class HasText {}
class TextWithRange {}
class sam$kotlin_Comparator$0 {
  constructor(function_0) {
    this.k1f_1 = function_0;
  }
  wg(a, b) {
    return this.k1f_1(a, b);
  }
  compare(a, b) {
    return this.wg(a, b);
  }
  f4() {
    return this.k1f_1;
  }
  equals(other) {
    var tmp;
    if (!(other == null) ? isInterface(other, Comparator) : false) {
      var tmp_0;
      if (!(other == null) ? isInterface(other, FunctionAdapter) : false) {
        tmp_0 = equals(this.f4(), other.f4());
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
    return hashCode(this.f4());
  }
}
class Companion_3 {
  k1e() {
    return $serializer_getInstance_3();
  }
}
class $serializer_3 {
  constructor() {
    $serializer_instance_3 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('com.bedalton.common.ast.structs.TextWithRangeImpl', this, 2);
    tmp0_serialDesc.w13('textRange', false);
    tmp0_serialDesc.w13('text', false);
    this.l1f_1 = tmp0_serialDesc;
  }
  m1f(encoder, value) {
    var tmp0_desc = this.l1f_1;
    var tmp1_output = encoder.bw(tmp0_desc);
    tmp1_output.tx(tmp0_desc, 0, RangeWithIndexSerializer_getInstance(), value.n1f_1);
    tmp1_output.rx(tmp0_desc, 1, value.o1f_1);
    tmp1_output.cw(tmp0_desc);
  }
  mr(encoder, value) {
    return this.m1f(encoder, value instanceof TextWithRangeImpl ? value : THROW_CCE());
  }
  nr(decoder) {
    var tmp0_desc = this.l1f_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_input = decoder.bw(tmp0_desc);
    if (tmp6_input.sw()) {
      tmp4_local0 = tmp6_input.nw(tmp0_desc, 0, RangeWithIndexSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp6_input.lw(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp6_input.tw(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp6_input.nw(tmp0_desc, 0, RangeWithIndexSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp6_input.lw(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          default:
            throw UnknownFieldException.et(tmp2_index);
        }
      }
    tmp6_input.cw(tmp0_desc);
    return TextWithRangeImpl.p1f(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  }
  lr() {
    return this.l1f_1;
  }
  l14() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [RangeWithIndexSerializer_getInstance(), StringSerializer_getInstance()];
  }
}
class TextWithRangeImpl {
  constructor(textRange, text) {
    this.n1f_1 = textRange;
    this.o1f_1 = text;
  }
  d1e() {
    return this.n1f_1;
  }
  j1f() {
    return this.o1f_1;
  }
  toString() {
    return 'TextWithRangeImpl(textRange=' + toString(this.n1f_1) + ', text=' + this.o1f_1 + ')';
  }
  hashCode() {
    var result = hashCode(this.n1f_1);
    result = imul(result, 31) + getStringHashCode(this.o1f_1) | 0;
    return result;
  }
  equals(other) {
    if (this === other)
      return true;
    if (!(other instanceof TextWithRangeImpl))
      return false;
    if (!equals(this.n1f_1, other.n1f_1))
      return false;
    if (!(this.o1f_1 === other.o1f_1))
      return false;
    return true;
  }
  static p1f(seen0, textRange, text, serializationConstructorMarker) {
    if (!(3 === (3 & seen0))) {
      throwMissingFieldException(seen0, 3, $serializer_getInstance_3().l1f_1);
    }
    var $this = createThis(this);
    $this.n1f_1 = textRange;
    $this.o1f_1 = text;
    return $this;
  }
}
class HasRangeSerializer {
  constructor() {
    HasRangeSerializer_instance = this;
    var tmp = this;
    tmp.t1f_1 = lazy(HasRangeSerializer$descriptor$delegate$lambda);
  }
  lr() {
    var tmp0 = this.t1f_1;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('descriptor', 1, tmp, HasRangeSerializer$_get_descriptor_$ref_mc9kd6(), null);
    return tmp0.k3();
  }
  nr(decoder) {
    var obj = decoder.bw(this.lr());
    var textRange = null;
    $l$loop: while (true) {
      var index = obj.tw(this.lr());
      switch (index) {
        case 0:
          textRange = obj.ow(this.lr(), index, RangeWithIndexSerializer_getInstance());
          break;
        case -1:
          break $l$loop;
        default:
          // Inline function 'kotlin.error' call

          var message = 'Unexpected index: ' + index;
          throw IllegalStateException.l4(toString(message));
      }
    }
    obj.cw(this.lr());
    if (textRange == null) {
      throw SerializationException.dt('Missing textRange in HasRange');
    }
    return new HasRangeImpl(textRange);
  }
  u1f(encoder, value) {
    var obj = encoder.bw(this.lr());
    obj.tx(this.lr(), 0, RangeSerializer_getInstance(), value.d1e());
    obj.cw(this.lr());
  }
  mr(encoder, value) {
    return this.u1f(encoder, (!(value == null) ? isInterface(value, HasRange) : false) ? value : THROW_CCE());
  }
}
class PositionSerializer {
  constructor() {
    PositionSerializer_instance = this;
    var tmp = this;
    tmp.v1f_1 = lazy(PositionSerializer$descriptor$delegate$lambda);
  }
  lr() {
    var tmp0 = this.v1f_1;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('descriptor', 1, tmp, PositionSerializer$_get_descriptor_$ref_xy4f64(), null);
    return tmp0.k3();
  }
  nr(decoder) {
    var structure = decoder.bw(this.lr());
    var index = structure.tw(this.lr());
    var line = null;
    var character = null;
    while (!(index === -1)) {
      var tmp0_subject = index;
      if (tmp0_subject === 0)
        line = structure.gw(this.lr(), index);
      else if (tmp0_subject === 1)
        character = structure.gw(this.lr(), index);
      index = structure.tw(this.lr());
    }
    structure.cw(this.lr());
    var tmp1_elvis_lhs = line;
    var tmp;
    if (tmp1_elvis_lhs == null) {
      throw SerializationException.dt('Position is missing element: "line"');
    } else {
      tmp = tmp1_elvis_lhs;
    }
    var tmp_0 = tmp;
    var tmp2_elvis_lhs = character;
    var tmp_1;
    if (tmp2_elvis_lhs == null) {
      throw SerializationException.dt('Position is missing element: "character"');
    } else {
      tmp_1 = tmp2_elvis_lhs;
    }
    return new PositionImpl(tmp_0, tmp_1);
  }
  w1f(encoder, value) {
    var structure = encoder.bw(this.lr());
    structure.mx(this.lr(), 0, value.e1e());
    structure.mx(this.lr(), 1, value.i1e());
    structure.cw(this.lr());
  }
  mr(encoder, value) {
    return this.w1f(encoder, (!(value == null) ? isInterface(value, Position) : false) ? value : THROW_CCE());
  }
}
class RangeSerializer {
  constructor() {
    RangeSerializer_instance = this;
    this.q1f_1 = 'RangeWithIndex';
    this.r1f_1 = 'Range';
    var tmp = this;
    tmp.s1f_1 = lazy(RangeSerializer$descriptor$delegate$lambda);
  }
  lr() {
    var tmp0 = this.s1f_1;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('descriptor', 1, tmp, RangeSerializer$_get_descriptor_$ref_5fb4dc(), null);
    return tmp0.k3();
  }
  nr(decoder) {
    var structure = decoder.bw(this.lr());
    var index = structure.tw(this.lr());
    var type = null;
    var start = null;
    var end = null;
    var startIndex = null;
    var endIndex = null;
    var parserIndex = null;
    while (!(index === -1)) {
      switch (index) {
        case 0:
          type = structure.lw(this.lr(), index);
          break;
        case 1:
          start = structure.ow(this.lr(), index, PositionSerializer_getInstance());
          break;
        case 2:
          end = structure.ow(this.lr(), index, PositionSerializer_getInstance());
          break;
        case 3:
          startIndex = structure.gw(this.lr(), index);
          break;
        case 4:
          endIndex = structure.gw(this.lr(), index);
          break;
        case 5:
          parserIndex = decodeNullableIntElement(structure, this.lr(), index);
          break;
      }
      index = structure.tw(this.lr());
    }
    structure.cw(this.lr());
    var tmp;
    switch (type) {
      case 'RangeWithIndex':
        var tmp2_elvis_lhs = start;
        var tmp_0;
        if (tmp2_elvis_lhs == null) {
          throw SerializationException.dt('Range with index is missing "start"');
        } else {
          tmp_0 = tmp2_elvis_lhs;
        }

        var tmp_1 = tmp_0;
        var tmp3_elvis_lhs = end;
        var tmp_2;
        if (tmp3_elvis_lhs == null) {
          throw SerializationException.dt('Range with index is missing "end"');
        } else {
          tmp_2 = tmp3_elvis_lhs;
        }

        var tmp_3 = tmp_2;
        var tmp4_elvis_lhs = startIndex;
        var tmp_4;
        if (tmp4_elvis_lhs == null) {
          throw SerializationException.dt('Range with index is missing "startIndex"');
        } else {
          tmp_4 = tmp4_elvis_lhs;
        }

        var tmp_5 = tmp_4;
        var tmp5_elvis_lhs = endIndex;
        var tmp_6;
        if (tmp5_elvis_lhs == null) {
          throw SerializationException.dt('Range with index is missing "endIndex"');
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
          throw SerializationException.dt('Range without index is missing "start"');
        } else {
          tmp_7 = tmp6_elvis_lhs;
        }

        var tmp_8 = tmp_7;
        var tmp7_elvis_lhs = end;
        var tmp_9;
        if (tmp7_elvis_lhs == null) {
          throw SerializationException.dt('Range without index is missing "end"');
        } else {
          tmp_9 = tmp7_elvis_lhs;
        }

        tmp = new RangeImpl(tmp_8, tmp_9);
        break;
      default:
        throw SerializationException.dt('Invalid range type: ' + type);
    }
    return tmp;
  }
  x1f(encoder, value) {
    var structure = encoder.bw(this.lr());
    if (isRangeWithIndex(value)) {
      var range = isInterface(value, RangeWithIndex) ? value : THROW_CCE();
      structure.rx(this.lr(), 0, 'RangeWithIndex');
      structure.mx(this.lr(), 3, range.g1e());
      structure.mx(this.lr(), 4, range.j1e());
      structure.vx(this.lr(), 5, serializer_0(IntCompanionObject_instance), range.h1e());
    } else {
      structure.rx(this.lr(), 0, 'Range');
    }
    structure.tx(this.lr(), 1, PositionSerializer_getInstance(), value.h1());
    structure.tx(this.lr(), 2, PositionSerializer_getInstance(), value.f1e());
    structure.cw(this.lr());
  }
  mr(encoder, value) {
    return this.x1f(encoder, (!(value == null) ? isInterface(value, Range) : false) ? value : THROW_CCE());
  }
}
class RangeWithIndexSerializer {
  constructor() {
    RangeWithIndexSerializer_instance = this;
    var tmp = this;
    tmp.y1f_1 = lazy(RangeWithIndexSerializer$descriptor$delegate$lambda);
  }
  lr() {
    var tmp0 = this.y1f_1;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('descriptor', 1, tmp, RangeWithIndexSerializer$_get_descriptor_$ref_uvhlf2(), null);
    return tmp0.k3();
  }
  nr(decoder) {
    var structure = decoder.bw(this.lr());
    var index = structure.tw(this.lr());
    var type = null;
    var start = null;
    var end = null;
    var startIndex = null;
    var endIndex = null;
    var parserIndex = null;
    while (!(index === -1)) {
      switch (index) {
        case 0:
          type = structure.lw(this.lr(), index);
          break;
        case 1:
          start = structure.ow(this.lr(), index, PositionSerializer_getInstance());
          break;
        case 2:
          end = structure.ow(this.lr(), index, PositionSerializer_getInstance());
          break;
        case 3:
          startIndex = structure.gw(this.lr(), index);
          break;
        case 4:
          endIndex = structure.gw(this.lr(), index);
          break;
        case 5:
          parserIndex = structure.qw(this.lr(), index, get_nullable(serializer_0(IntCompanionObject_instance)));
          break;
      }
      index = structure.tw(this.lr());
    }
    structure.cw(this.lr());
    var tmp;
    switch (type) {
      case 'RangeWithIndex':
      case null:
        tmp = new RangeWithIndexImpl(ensureNotNull(start), ensureNotNull(end), ensureNotNull(startIndex), ensureNotNull(endIndex), parserIndex);
        break;
      default:
        throw SerializationException.dt('Invalid range type: ' + type);
    }
    return tmp;
  }
  z1f(encoder, value) {
    var structure = encoder.bw(this.lr());
    structure.rx(this.lr(), 0, 'RangeWithIndex');
    structure.tx(this.lr(), 1, PositionSerializer_getInstance(), value.h1());
    structure.tx(this.lr(), 2, PositionSerializer_getInstance(), value.f1e());
    structure.mx(this.lr(), 3, value.g1e());
    structure.mx(this.lr(), 4, value.j1e());
    structure.vx(this.lr(), 5, serializer_0(IntCompanionObject_instance), value.h1e());
    structure.cw(this.lr());
  }
  mr(encoder, value) {
    return this.z1f(encoder, (!(value == null) ? isInterface(value, RangeWithIndex) : false) ? value : THROW_CCE());
  }
}
class TextWithRangeSerializer {
  constructor() {
    TextWithRangeSerializer_instance = this;
    var tmp = this;
    tmp.a1g_1 = lazy(TextWithRangeSerializer$descriptor$delegate$lambda);
  }
  lr() {
    var tmp0 = this.a1g_1;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('descriptor', 1, tmp, TextWithRangeSerializer$_get_descriptor_$ref_du0lpp(), null);
    return tmp0.k3();
  }
  nr(decoder) {
    var obj = decoder.bw(this.lr());
    var textRange = null;
    var text = null;
    $l$loop: while (true) {
      var index = obj.tw(this.lr());
      switch (index) {
        case 0:
          textRange = obj.ow(this.lr(), index, RangeWithIndexSerializer_getInstance());
          break;
        case 1:
          text = obj.lw(this.lr(), index);
          break;
        case -1:
          break $l$loop;
        default:
          // Inline function 'kotlin.error' call

          var message = 'Unexpected index: ' + index;
          throw IllegalStateException.l4(toString(message));
      }
    }
    obj.cw(this.lr());
    // Inline function 'kotlin.collections.mutableListOf' call
    var missing = ArrayList.u1();
    if (textRange == null) {
      missing.z1('textRange');
    }
    if (text == null) {
      missing.z1('text');
    }
    if (missing.b2() > 0) {
      throw SerializationException.dt('Failed to decode TextWithRange. Missing ' + toString(missing));
    }
    return new TextWithRangeImpl(ensureNotNull(textRange), ensureNotNull(text));
  }
  b1g(encoder, value) {
    var obj = encoder.bw(this.lr());
    obj.tx(this.lr(), 0, RangeSerializer_getInstance(), value.d1e());
    obj.rx(this.lr(), 1, value.j1f());
    obj.cw(this.lr());
  }
  mr(encoder, value) {
    return this.b1g(encoder, (!(value == null) ? isInterface(value, TextWithRange) : false) ? value : THROW_CCE());
  }
}
//endregion
function get_start(_this__u8e3s4) {
  return _this__u8e3s4.d1e().h1();
}
function get_startLine(_this__u8e3s4) {
  return _this__u8e3s4.d1e().h1().e1e();
}
function get_endLine(_this__u8e3s4) {
  return _this__u8e3s4.d1e().f1e().e1e();
}
function get_startIndex(_this__u8e3s4) {
  return _this__u8e3s4.d1e().g1e();
}
function get_parserIndex(_this__u8e3s4) {
  return _this__u8e3s4.d1e().h1e();
}
function get_startCharacter(_this__u8e3s4) {
  return _this__u8e3s4.d1e().h1().i1e();
}
function get_endIndex(_this__u8e3s4) {
  return _this__u8e3s4.d1e().j1e();
}
function get_end(_this__u8e3s4) {
  return _this__u8e3s4.d1e().f1e();
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
  var tmp = _this__u8e3s4.e1e();
  var tmp_0 = tmp + (lineOffset == null ? 0 : lineOffset) | 0;
  var tmp_1 = _this__u8e3s4.i1e();
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
    throw Exception.gc('TextRange is invalid in getRange');
  }
  var startLineNumber = range.h1().e1e();
  var endLineNumber = range.f1e().e1e();
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
    var containsLower = range.h1().i1e() - mod | 0;
    tmp = column <= (range.f1e().i1e() + mod | 0) ? containsLower <= column : false;
  } else if (startLineNumber === lineNumber) {
    if (ignoreColumn == null ? false : ignoreColumn) {
      return true;
    }
    var tmp_1;
    if (soft == null ? true : soft) {
      tmp_1 = (range.h1().i1e() - 1 | 0) <= offsetColumn;
    } else {
      tmp_1 = range.h1().i1e() <= offsetColumn;
    }
    tmp = tmp_1;
  } else if (endLineNumber === lineNumber) {
    if (ignoreColumn == null ? false : ignoreColumn) {
      return true;
    }
    var tmp_2;
    if (soft == null ? true : soft) {
      tmp_2 = (range.f1e().i1e() + 1 | 0) >= offsetColumn;
    } else {
      tmp_2 = range.f1e().i1e() >= offsetColumn;
    }
    tmp = tmp_2;
  } else {
    tmp = (startLineNumber + 1 | 0) <= lineNumber ? lineNumber < endLineNumber : false;
  }
  return tmp;
}
function contains(_this__u8e3s4, otherRange) {
  var oStart = _this__u8e3s4.g1e();
  var oEnd = _this__u8e3s4.j1e();
  var theRange = numberRangeToNumber(oStart, oEnd);
  var tmp;
  var containsLower = theRange.p2_1;
  var containsUpper = theRange.q2_1;
  var containsArg = otherRange.g1e();
  if (containsLower <= containsArg ? containsArg <= containsUpper : false) {
    var containsLower_0 = theRange.p2_1;
    var containsUpper_0 = theRange.q2_1;
    var containsArg_0 = otherRange.j1e();
    tmp = containsLower_0 <= containsArg_0 ? containsArg_0 <= containsUpper_0 : false;
  } else {
    tmp = false;
  }
  return tmp;
}
function get_sortValue(_this__u8e3s4) {
  var startLine = _this__u8e3s4.h1().e1e();
  var startColumn = _this__u8e3s4.h1().i1e();
  return startLine << 16 | startColumn;
}
function inRange_0(child, parent) {
  if (child.h1().e1e() < parent.h1().e1e()) {
    return false;
  }
  var endLineNumber = child.f1e().e1e();
  if (endLineNumber > parent.f1e().e1e()) {
    return false;
  }
  if (child.h1().e1e() === parent.h1().e1e()) {
    var startColumn = child.h1().i1e();
    if (startColumn < parent.h1().i1e()) {
      return false;
    }
  }
  if (endLineNumber === parent.f1e().e1e()) {
    var endColumn = child.f1e().i1e();
    if (endColumn > parent.f1e().i1e()) {
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
    tmp_1 = _this__u8e3s4.h1().e1e() === _this__u8e3s4.f1e().e1e();
  } else {
    tmp_1 = false;
  }
  if (tmp_1) {
    tmp_0 = _this__u8e3s4.h1().i1e() === _this__u8e3s4.f1e().i1e();
  } else {
    tmp_0 = false;
  }
  if (tmp_0) {
    tmp = !(_this__u8e3s4.g1e() === _this__u8e3s4.j1e());
  } else {
    tmp = false;
  }
  if (tmp) {
    throw Exception.gc('Range is invalid; ' + _this__u8e3s4.h1().e1e() + ':' + _this__u8e3s4.h1().i1e() + ' to ' + _this__u8e3s4.f1e().e1e() + ':' + _this__u8e3s4.f1e().i1e() + '; StarIndex: ' + _this__u8e3s4.g1e() + '; EndIndex: ' + _this__u8e3s4.j1e());
  }
  if (isValid(_this__u8e3s4)) {
    return Unit_instance;
  }
  throw Exception.gc('Range is invalid; ' + _this__u8e3s4.h1().e1e() + ':' + _this__u8e3s4.h1().i1e() + ' to ' + _this__u8e3s4.f1e().e1e() + ':' + _this__u8e3s4.f1e().i1e());
}
function isValid(_this__u8e3s4) {
  if (_this__u8e3s4.f1e().e1e() < _this__u8e3s4.h1().e1e()) {
    return false;
  }
  if (_this__u8e3s4.h1().e1e() === _this__u8e3s4.f1e().e1e()) {
    return _this__u8e3s4.f1e().i1e() >= _this__u8e3s4.h1().i1e();
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
  return new RangeImpl(_this__u8e3s4.h1(), _this__u8e3s4.f1e());
}
function empty(_this__u8e3s4) {
  return _this__u8e3s4.j1e() <= _this__u8e3s4.g1e();
}
function plus(_this__u8e3s4, other) {
  var tmp0 = _this__u8e3s4.g1e();
  // Inline function 'kotlin.math.min' call
  var b = other.g1e();
  var tmp0_startIndex = Math.min(tmp0, b);
  var tmp0_0 = _this__u8e3s4.j1e();
  // Inline function 'kotlin.math.max' call
  var b_0 = other.j1e();
  var tmp1_endIndex = Math.max(tmp0_0, b_0);
  var tmp2_start = _this__u8e3s4.g1e() < other.g1e() ? _this__u8e3s4.h1() : other.h1();
  var tmp3_end = _this__u8e3s4.j1e() > other.j1e() ? _this__u8e3s4.f1e() : other.f1e();
  var tmp4_parserIndex = _this__u8e3s4.h1e();
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
  var _iterator__ex2g4s = itemsSorted.w();
  $l$loop: while (_iterator__ex2g4s.x()) {
    var item = _iterator__ex2g4s.y();
    if (startsWith(item.j1f(), _Char___init__impl__6a9atx(123))) {
      last = item;
      continue $l$loop;
    }
    out = out + (!(last == null) ? gap(last, item) : '');
    out = out + item.j1f();
    last = item;
  }
  return out;
}
function gap(last, next) {
  var lines = next.d1e().h1().e1e() - last.d1e().f1e().e1e() | 0;
  var tmp;
  if (lines === 0) {
    tmp = (next.d1e().h1().i1e() + 1 | 0) - last.d1e().f1e().i1e() | 0;
  } else {
    tmp = next.d1e().h1().i1e();
  }
  var spaces = tmp;
  var padding = next.d1e().g1e() - ((lines + spaces | 0) + last.d1e().j1e() | 0) | 0;
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
  var tmp = a.d1e().h1().e1e() << 8 | a.d1e().h1().e1e();
  var tmp$ret$2 = b.d1e().h1().e1e() << 8 | b.d1e().h1().e1e();
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
  $this$buildClassSerialDescriptor.wr('textRange', RangeSerializer_getInstance().lr());
  return Unit_instance;
}
function HasRangeSerializer$_get_descriptor_$ref_mc9kd6() {
  return (p0) => p0.lr();
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
  var this_0 = serializer(createKType(PrimitiveClasses_getInstance().ee(), arrayOf([]), false));
  var descriptor = (isInterface(this_0, KSerializer) ? this_0 : THROW_CCE()).lr();
  $this$buildClassSerialDescriptor.xu('line', descriptor, annotations, false);
  // Inline function 'kotlinx.serialization.descriptors.element' call
  var elementName = 'character';
  var annotations_0 = emptyList();
  // Inline function 'kotlinx.serialization.serializer' call
  // Inline function 'kotlinx.serialization.internal.cast' call
  var this_1 = serializer(createKType(PrimitiveClasses_getInstance().ee(), arrayOf([]), false));
  var descriptor_0 = (isInterface(this_1, KSerializer) ? this_1 : THROW_CCE()).lr();
  $this$buildClassSerialDescriptor.xu(elementName, descriptor_0, annotations_0, false);
  return Unit_instance;
}
function PositionSerializer$_get_descriptor_$ref_xy4f64() {
  return (p0) => p0.lr();
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
  var this_0 = serializer(createKType(PrimitiveClasses_getInstance().je(), arrayOf([]), false));
  var descriptor = (isInterface(this_0, KSerializer) ? this_0 : THROW_CCE()).lr();
  $this$buildClassSerialDescriptor.xu('type', descriptor, annotations, true);
  $this$buildClassSerialDescriptor.xu('start', PositionSerializer_getInstance().lr(), emptyList(), false);
  $this$buildClassSerialDescriptor.xu('end', PositionSerializer_getInstance().lr(), emptyList(), false);
  // Inline function 'kotlinx.serialization.descriptors.element' call
  var elementName = 'startIndex';
  var annotations_0 = emptyList();
  // Inline function 'kotlinx.serialization.serializer' call
  // Inline function 'kotlinx.serialization.internal.cast' call
  var this_1 = serializer(createKType(PrimitiveClasses_getInstance().ee(), arrayOf([]), false));
  var descriptor_0 = (isInterface(this_1, KSerializer) ? this_1 : THROW_CCE()).lr();
  $this$buildClassSerialDescriptor.xu(elementName, descriptor_0, annotations_0, true);
  // Inline function 'kotlinx.serialization.descriptors.element' call
  var elementName_0 = 'endIndex';
  var annotations_1 = emptyList();
  // Inline function 'kotlinx.serialization.serializer' call
  // Inline function 'kotlinx.serialization.internal.cast' call
  var this_2 = serializer(createKType(PrimitiveClasses_getInstance().ee(), arrayOf([]), false));
  var descriptor_1 = (isInterface(this_2, KSerializer) ? this_2 : THROW_CCE()).lr();
  $this$buildClassSerialDescriptor.xu(elementName_0, descriptor_1, annotations_1, true);
  // Inline function 'kotlinx.serialization.descriptors.element' call
  var elementName_1 = 'parserIndex';
  var annotations_2 = emptyList();
  // Inline function 'kotlinx.serialization.serializer' call
  // Inline function 'kotlinx.serialization.internal.cast' call
  var this_3 = serializer(createKType(PrimitiveClasses_getInstance().ee(), arrayOf([]), false));
  var descriptor_2 = (isInterface(this_3, KSerializer) ? this_3 : THROW_CCE()).lr();
  $this$buildClassSerialDescriptor.xu(elementName_1, descriptor_2, annotations_2, true);
  return Unit_instance;
}
function RangeSerializer$_get_descriptor_$ref_5fb4dc() {
  return (p0) => p0.lr();
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
  var this_0 = serializer(createKType(PrimitiveClasses_getInstance().je(), arrayOf([]), false));
  var descriptor = (isInterface(this_0, KSerializer) ? this_0 : THROW_CCE()).lr();
  $this$buildClassSerialDescriptor.xu('type', descriptor, annotations, false);
  $this$buildClassSerialDescriptor.xu('start', PositionSerializer_getInstance().lr(), emptyList(), false);
  $this$buildClassSerialDescriptor.xu('end', PositionSerializer_getInstance().lr(), emptyList(), false);
  // Inline function 'kotlinx.serialization.descriptors.element' call
  var elementName = 'startIndex';
  var annotations_0 = emptyList();
  // Inline function 'kotlinx.serialization.serializer' call
  // Inline function 'kotlinx.serialization.internal.cast' call
  var this_1 = serializer(createKType(PrimitiveClasses_getInstance().ee(), arrayOf([]), false));
  var descriptor_0 = (isInterface(this_1, KSerializer) ? this_1 : THROW_CCE()).lr();
  $this$buildClassSerialDescriptor.xu(elementName, descriptor_0, annotations_0, true);
  // Inline function 'kotlinx.serialization.descriptors.element' call
  var elementName_0 = 'endIndex';
  var annotations_1 = emptyList();
  // Inline function 'kotlinx.serialization.serializer' call
  // Inline function 'kotlinx.serialization.internal.cast' call
  var this_2 = serializer(createKType(PrimitiveClasses_getInstance().ee(), arrayOf([]), false));
  var descriptor_1 = (isInterface(this_2, KSerializer) ? this_2 : THROW_CCE()).lr();
  $this$buildClassSerialDescriptor.xu(elementName_0, descriptor_1, annotations_1, true);
  // Inline function 'kotlinx.serialization.descriptors.element' call
  var elementName_1 = 'parserIndex';
  var annotations_2 = emptyList();
  // Inline function 'kotlinx.serialization.serializer' call
  // Inline function 'kotlinx.serialization.internal.cast' call
  var this_3 = serializer(createKType(PrimitiveClasses_getInstance().ee(), arrayOf([]), false));
  var descriptor_2 = (isInterface(this_3, KSerializer) ? this_3 : THROW_CCE()).lr();
  $this$buildClassSerialDescriptor.xu(elementName_1, descriptor_2, annotations_2, true);
  return Unit_instance;
}
function RangeWithIndexSerializer$_get_descriptor_$ref_uvhlf2() {
  return (p0) => p0.lr();
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
  builder.v1c(clazz, tmp$ret$3);
  init(builder);
  builder.w1c(astCoreRangeWithIndexPolymorphic$lambda_0);
  builder.x1c(_this__u8e3s4);
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
  _this__u8e3s4.n1d(tmp_0, astCoreRangeWithIndexDefaultSerializer$lambda_0(getSerializer));
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
  builder.v1c(clazz, tmp$ret$3);
  init(builder);
  builder.w1c(astCoreRangePolymorphic$lambda_0);
  builder.x1c(_this__u8e3s4);
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
  _this__u8e3s4.n1d(tmp_0, astCoreRangeDefaultSerializer$lambda_0(getSerializer));
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
  builder.v1c(clazz, tmp$ret$3);
  init(builder);
  builder.x1c(_this__u8e3s4);
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
  _this__u8e3s4.n1d(tmp_0, astCoreHasTextDefaultSerializer$lambda_0(getSerializer));
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
  builder.v1c(clazz, tmp$ret$3);
  init(builder);
  builder.w1c(astCorePositionPolymorphic$lambda_0);
  builder.x1c(_this__u8e3s4);
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
  _this__u8e3s4.n1d(tmp_0, astCorePositionDefaultSerializer$lambda_0(getSerializer));
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
  builder.v1c(clazz, tmp$ret$3);
  builder.w1c(astCoreHasRangePolymorphic$lambda_0);
  init(builder);
  builder.x1c(_this__u8e3s4);
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
  _this__u8e3s4.n1d(tmp_0, astCoreHasRangeDefaultSerializer$lambda_0(getSerializer));
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
  builder.v1c(clazz, tmp$ret$3);
  init(builder);
  builder.w1c(astCoreTextWithRangePolymorphic$lambda_0);
  builder.x1c(_this__u8e3s4);
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
  _this__u8e3s4.n1d(tmp_0, astCoreTextWithRangeDefaultSerializer$lambda_0(getSerializer));
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
      var tmp_0 = Companion_instance_2.k1e();
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
      var tmp_0 = Companion_instance_2.k1e();
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
      var tmp_0 = Companion_instance_3.k1e();
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
      var tmp_0 = Companion_instance_0.k1e();
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
      var tmp_0 = Companion_instance_3.k1e();
      tmp = isInterface(tmp_0, SerializationStrategy) ? tmp_0 : THROW_CCE();
    } else {
      if (isInterface(instance, TextWithRange)) {
        var tmp_1 = TextWithRangeSerializer_getInstance();
        tmp = isInterface(tmp_1, SerializationStrategy) ? tmp_1 : THROW_CCE();
      } else {
        if (instance instanceof HasRangeImpl) {
          var tmp_2 = Companion_instance.k1e();
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
      var tmp_0 = Companion_instance_3.k1e();
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
  $this$buildClassSerialDescriptor.wr('textRange', RangeSerializer_getInstance().lr());
  // Inline function 'kotlinx.serialization.descriptors.element' call
  var annotations = emptyList();
  // Inline function 'kotlinx.serialization.serializer' call
  // Inline function 'kotlinx.serialization.internal.cast' call
  var this_0 = serializer(createKType(PrimitiveClasses_getInstance().je(), arrayOf([]), false));
  var descriptor = (isInterface(this_0, KSerializer) ? this_0 : THROW_CCE()).lr();
  $this$buildClassSerialDescriptor.xu('text', descriptor, annotations, false);
  return Unit_instance;
}
function TextWithRangeSerializer$_get_descriptor_$ref_du0lpp() {
  return (p0) => p0.lr();
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
protoOf($serializer).m14 = typeParametersSerializers;
initMetadataForObject($serializer, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForInterface(HasRange, 'HasRange', VOID, VOID, VOID, VOID, VOID, {0: HasRangeSerializer_getInstance});
initMetadataForClass(HasRangeImpl, 'HasRangeImpl', VOID, VOID, [HasRange], VOID, VOID, {0: $serializer_getInstance});
initMetadataForInterface(Position, 'Position', VOID, VOID, VOID, VOID, VOID, {0: PositionSerializer_getInstance});
initMetadataForCompanion(Companion_0);
protoOf($serializer_0).m14 = typeParametersSerializers;
initMetadataForObject($serializer_0, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(PositionImpl, 'PositionImpl', VOID, VOID, [Position], VOID, VOID, {0: $serializer_getInstance_0});
initMetadataForInterface(Range, 'Range', VOID, VOID, VOID, VOID, VOID, {0: RangeSerializer_getInstance});
initMetadataForCompanion(Companion_1);
protoOf($serializer_1).m14 = typeParametersSerializers;
initMetadataForObject($serializer_1, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(RangeImpl, 'RangeImpl', VOID, VOID, [Range], VOID, VOID, {0: $serializer_getInstance_1});
initMetadataForInterface(RangeWithIndex, 'RangeWithIndex', VOID, VOID, [Range], VOID, VOID, {0: RangeWithIndexSerializer_getInstance});
initMetadataForCompanion(Companion_2);
protoOf($serializer_2).m14 = typeParametersSerializers;
initMetadataForObject($serializer_2, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(RangeWithIndexImpl, 'RangeWithIndexImpl', VOID, VOID, [RangeWithIndex], VOID, VOID, {0: $serializer_getInstance_2});
initMetadataForInterface(HasText, 'HasText');
initMetadataForInterface(TextWithRange, 'TextWithRange', VOID, VOID, [HasRange, HasText], VOID, VOID, {0: TextWithRangeSerializer_getInstance});
initMetadataForClass(sam$kotlin_Comparator$0, 'sam$kotlin_Comparator$0', VOID, VOID, [Comparator, FunctionAdapter]);
initMetadataForCompanion(Companion_3);
protoOf($serializer_3).m14 = typeParametersSerializers;
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
