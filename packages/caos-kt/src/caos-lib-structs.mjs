import {
  getKClass3t8tygqu4lcxf as getKClass,
  PrimitiveClasses_getInstanceds06xwqrwfdm as PrimitiveClasses_getInstance,
  LazyThreadSafetyMode_PUBLICATION_getInstance3qslfm3vqg6y3 as LazyThreadSafetyMode_PUBLICATION_getInstance,
  lazy1261dae0bgscp as lazy,
  initMetadataForCompanion1wyw17z38v6ac as initMetadataForCompanion,
  VOID3gxj6tk5isa35 as VOID,
  Unit_instancev9v8hjid95df as Unit_instance,
  THROW_CCE2g6jy02ryeudk as THROW_CCE,
  protoOf180f3jzyo7rfj as protoOf,
  initMetadataForObject1cxne3s9w65el as initMetadataForObject,
  _Char___init__impl__6a9atx2gndcvjvc5pke as _Char___init__impl__6a9atx,
  charArrayOf27f4r3dozbrk1 as charArrayOf,
  split3d3yeauc4rm2n as split,
  ArrayList3it5z8td81qkl as ArrayList,
  collectionSizeOrDefault36dulx8yinfqm as collectionSizeOrDefault,
  toIntArray2d4xwvtjb01mq as toIntArray,
  StringBuildermazzzhj6kkai as StringBuilder,
  lazy2hsh8ze7j6ikd as lazy_0,
  KProperty1ca4yb4wlo496 as KProperty1,
  getPropertyCallableRef3hckxc0xueiaj as getPropertyCallableRef,
  contentEqualsaf55p28mnw74 as contentEquals,
  equals2au1ep9vhcato as equals,
  getStringHashCode26igk1bx568vk as getStringHashCode,
  contentHashCode2i020q5tbeh2s as contentHashCode,
  hashCodeq5arwsb9dgti as hashCode,
  getBooleanHashCode1bbj3u6b3v0a7 as getBooleanHashCode,
  toString1pkumu07cwy4m as toString,
  toString30pk9tzaqopn as toString_0,
  createThis2j2avj17cvnv2 as createThis,
  initMetadataForClassbxx6q50dy2s7 as initMetadataForClass,
  charCodeAt1yspne1d8erbm as charCodeAt,
  toInt2q8uldh7sc951 as toInt,
  to2cs3ny02qtbcb as to,
  toMap1vec9topfei08 as toMap,
  getBigIntHashCode294hi5bdhtj6e as getBigIntHashCode,
  Enum3alwj03lh1n41 as Enum,
  equals2v6cggk171b6e as equals_0,
  toIntOrNull3w2d066r9pvwm as toIntOrNull,
  ensureNotNull1e947j3ixpazm as ensureNotNull,
  getKClassFromExpression348iqjl4fnx2f as getKClassFromExpression,
  isCharSequence1ju9jr1w86plq as isCharSequence,
  trim11nh7r46at6sx as trim,
  substring3saq8ornu0luv as substring,
  startsWith26w8qjqapeeq6 as startsWith,
  noWhenBranchMatchedException2a6r7ubxgky5j as noWhenBranchMatchedException,
  listOf1jh22dvmctj1r as listOf,
  singleOrNull2lwppijf18f1o as singleOrNull,
  Exceptiondt2hlxn7j7vw as Exception,
  sortedWith2csnbbb21k0lg as sortedWith,
  copyToArray2j022khrow2yi as copyToArray,
  FunctionAdapter3lcrrz3moet5b as FunctionAdapter,
  isInterface3d6p8outrmvmk as isInterface,
  Comparator2b3maoeh98xtg as Comparator,
  compareValues1n2ayl87ihzfk as compareValues,
} from './kotlin-kotlin-stdlib.mjs';
import {
  ReferenceArraySerializer3juj1vqolxkrs as ReferenceArraySerializer,
  StringSerializer_getInstance11v9md0a7d9yk as StringSerializer_getInstance,
  IntSerializer_getInstanceuhm8c1wku08l as IntSerializer_getInstance,
  LinkedHashMapSerializermaoj2nyji7op as LinkedHashMapSerializer,
  PluginGeneratedSerialDescriptorqdzeg5asqhfg as PluginGeneratedSerialDescriptor,
  BooleanSerializer_getInstance2fsi2wywr82nt as BooleanSerializer_getInstance,
  UnknownFieldExceptiona60e3a6v1xqo as UnknownFieldException,
  get_nullable197rfua9r7fsz as get_nullable,
  typeParametersSerializers2likxjr48tr7y as typeParametersSerializers,
  GeneratedSerializer1f7t7hssdd2ws as GeneratedSerializer,
  throwMissingFieldException2cmke0v3ynf14 as throwMissingFieldException,
  SerializableWithd2dap36updxd as SerializableWith,
  LongSerializer_getInstance2fim4572ialei as LongSerializer_getInstance,
  createAnnotatedEnumSerializer20ay4pme9p2h9 as createAnnotatedEnumSerializer,
  SerializerFactory1qv9hivitncuv as SerializerFactory,
  ArrayListSerializer7k5wnrulb3y6 as ArrayListSerializer,
  SealedClassSerializeriwipiibk55zc as SealedClassSerializer,
  IntArraySerializer_getInstance1rr9hqd2i2l73 as IntArraySerializer_getInstance,
} from './kotlinx-serialization-kotlinx-serialization-core.mjs';
import { ProtoNumber3ejuegvjqu86s as ProtoNumber } from './kotlinx-serialization-kotlinx-serialization-protobuf.mjs';
import {
  token1mihb7gu4zjp0 as token,
  Companion_instance1rqzem4e6o708 as Companion_instance,
} from './caos-core.mjs';
//region block: imports
var imul = Math.imul;
//endregion
//region block: pre-declaration
class Companion {
  constructor() {
    Companion_instance_0 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    var tmp_1 = lazy(tmp_0, CaosCommand$Companion$$childSerializers$_anonymous__psokld);
    var tmp_2 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    var tmp_3 = lazy(tmp_2, CaosCommand$Companion$$childSerializers$_anonymous__psokld_0);
    var tmp_4 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.f4p_1 = [null, null, tmp_1, null, null, tmp_3, null, lazy(tmp_4, CaosCommand$Companion$$childSerializers$_anonymous__psokld_1), null, null, null, null, null, null, null];
  }
}
class $serializer {
  constructor() {
    $serializer_instance = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('com.bedalton.creatures.caos.libstructs.CaosCommand', this, 15);
    tmp0_serialDesc.w13('id', false);
    tmp0_serialDesc.e13(new ProtoNumber(1));
    tmp0_serialDesc.w13('command', false);
    tmp0_serialDesc.e13(new ProtoNumber(2));
    tmp0_serialDesc.w13('parameters', false);
    tmp0_serialDesc.e13(new ProtoNumber(3));
    tmp0_serialDesc.w13('returnTypeId', false);
    tmp0_serialDesc.e13(new ProtoNumber(4));
    tmp0_serialDesc.w13('description', true);
    tmp0_serialDesc.e13(new ProtoNumber(5));
    tmp0_serialDesc.w13('returnValuesListIds', true);
    tmp0_serialDesc.e13(new ProtoNumber(6));
    tmp0_serialDesc.w13('requiresOwnr', true);
    tmp0_serialDesc.e13(new ProtoNumber(7));
    tmp0_serialDesc.w13('variants', false);
    tmp0_serialDesc.e13(new ProtoNumber(8));
    tmp0_serialDesc.w13('rvalue', false);
    tmp0_serialDesc.e13(new ProtoNumber(9));
    tmp0_serialDesc.w13('lvalue', false);
    tmp0_serialDesc.e13(new ProtoNumber(10));
    tmp0_serialDesc.w13('lvalueName', true);
    tmp0_serialDesc.e13(new ProtoNumber(11));
    tmp0_serialDesc.w13('commandGroup', false);
    tmp0_serialDesc.e13(new ProtoNumber(12));
    tmp0_serialDesc.w13('doifFormat', true);
    tmp0_serialDesc.e13(new ProtoNumber(13));
    tmp0_serialDesc.w13('requiresCreatureOwnr', true);
    tmp0_serialDesc.e13(new ProtoNumber(14));
    tmp0_serialDesc.w13('ceOnly', true);
    tmp0_serialDesc.e13(new ProtoNumber(15));
    this.g4p_1 = tmp0_serialDesc;
  }
  h4p(encoder, value) {
    var tmp0_desc = this.g4p_1;
    var tmp1_output = encoder.bw(tmp0_desc);
    var tmp2_cached = Companion_getInstance().f4p_1;
    tmp1_output.mx(tmp0_desc, 0, value.i4p_1);
    tmp1_output.rx(tmp0_desc, 1, value.j4p_1);
    tmp1_output.tx(tmp0_desc, 2, tmp2_cached[2].k3(), value.k4p_1);
    tmp1_output.mx(tmp0_desc, 3, value.l4p_1);
    if (tmp1_output.zx(tmp0_desc, 4) ? true : !(value.m4p_1 == null)) {
      tmp1_output.vx(tmp0_desc, 4, StringSerializer_getInstance(), value.m4p_1);
    }
    if (tmp1_output.zx(tmp0_desc, 5) ? true : !(value.n4p_1 == null)) {
      tmp1_output.vx(tmp0_desc, 5, tmp2_cached[5].k3(), value.n4p_1);
    }
    if (tmp1_output.zx(tmp0_desc, 6) ? true : !(value.o4p_1 === 0)) {
      tmp1_output.mx(tmp0_desc, 6, value.o4p_1);
    }
    tmp1_output.tx(tmp0_desc, 7, tmp2_cached[7].k3(), value.p4p_1);
    tmp1_output.jx(tmp0_desc, 8, value.q4p_1);
    tmp1_output.jx(tmp0_desc, 9, value.r4p_1);
    if (tmp1_output.zx(tmp0_desc, 10) ? true : !(value.s4p_1 == null)) {
      tmp1_output.vx(tmp0_desc, 10, StringSerializer_getInstance(), value.s4p_1);
    }
    tmp1_output.rx(tmp0_desc, 11, value.t4p_1);
    if (tmp1_output.zx(tmp0_desc, 12) ? true : !(value.u4p_1 == null)) {
      tmp1_output.vx(tmp0_desc, 12, StringSerializer_getInstance(), value.u4p_1);
    }
    if (tmp1_output.zx(tmp0_desc, 13) ? true : !(value.v4p_1 === false)) {
      tmp1_output.jx(tmp0_desc, 13, value.v4p_1);
    }
    if (tmp1_output.zx(tmp0_desc, 14) ? true : !(value.w4p_1 == null)) {
      tmp1_output.vx(tmp0_desc, 14, BooleanSerializer_getInstance(), value.w4p_1);
    }
    tmp1_output.cw(tmp0_desc);
  }
  mr(encoder, value) {
    return this.h4p(encoder, value instanceof CaosCommand ? value : THROW_CCE());
  }
  nr(decoder) {
    var tmp0_desc = this.g4p_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = 0;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = 0;
    var tmp8_local4 = null;
    var tmp9_local5 = null;
    var tmp10_local6 = 0;
    var tmp11_local7 = null;
    var tmp12_local8 = false;
    var tmp13_local9 = false;
    var tmp14_local10 = null;
    var tmp15_local11 = null;
    var tmp16_local12 = null;
    var tmp17_local13 = false;
    var tmp18_local14 = null;
    var tmp22_input = decoder.bw(tmp0_desc);
    var tmp23_cached = Companion_getInstance().f4p_1;
    if (tmp22_input.sw()) {
      tmp4_local0 = tmp22_input.gw(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp22_input.lw(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp22_input.nw(tmp0_desc, 2, tmp23_cached[2].k3(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp22_input.gw(tmp0_desc, 3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp22_input.pw(tmp0_desc, 4, StringSerializer_getInstance(), tmp8_local4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp9_local5 = tmp22_input.pw(tmp0_desc, 5, tmp23_cached[5].k3(), tmp9_local5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
      tmp10_local6 = tmp22_input.gw(tmp0_desc, 6);
      tmp3_bitMask0 = tmp3_bitMask0 | 64;
      tmp11_local7 = tmp22_input.nw(tmp0_desc, 7, tmp23_cached[7].k3(), tmp11_local7);
      tmp3_bitMask0 = tmp3_bitMask0 | 128;
      tmp12_local8 = tmp22_input.dw(tmp0_desc, 8);
      tmp3_bitMask0 = tmp3_bitMask0 | 256;
      tmp13_local9 = tmp22_input.dw(tmp0_desc, 9);
      tmp3_bitMask0 = tmp3_bitMask0 | 512;
      tmp14_local10 = tmp22_input.pw(tmp0_desc, 10, StringSerializer_getInstance(), tmp14_local10);
      tmp3_bitMask0 = tmp3_bitMask0 | 1024;
      tmp15_local11 = tmp22_input.lw(tmp0_desc, 11);
      tmp3_bitMask0 = tmp3_bitMask0 | 2048;
      tmp16_local12 = tmp22_input.pw(tmp0_desc, 12, StringSerializer_getInstance(), tmp16_local12);
      tmp3_bitMask0 = tmp3_bitMask0 | 4096;
      tmp17_local13 = tmp22_input.dw(tmp0_desc, 13);
      tmp3_bitMask0 = tmp3_bitMask0 | 8192;
      tmp18_local14 = tmp22_input.pw(tmp0_desc, 14, BooleanSerializer_getInstance(), tmp18_local14);
      tmp3_bitMask0 = tmp3_bitMask0 | 16384;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp22_input.tw(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp22_input.gw(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp22_input.lw(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp22_input.nw(tmp0_desc, 2, tmp23_cached[2].k3(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp22_input.gw(tmp0_desc, 3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp22_input.pw(tmp0_desc, 4, StringSerializer_getInstance(), tmp8_local4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp9_local5 = tmp22_input.pw(tmp0_desc, 5, tmp23_cached[5].k3(), tmp9_local5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          case 6:
            tmp10_local6 = tmp22_input.gw(tmp0_desc, 6);
            tmp3_bitMask0 = tmp3_bitMask0 | 64;
            break;
          case 7:
            tmp11_local7 = tmp22_input.nw(tmp0_desc, 7, tmp23_cached[7].k3(), tmp11_local7);
            tmp3_bitMask0 = tmp3_bitMask0 | 128;
            break;
          case 8:
            tmp12_local8 = tmp22_input.dw(tmp0_desc, 8);
            tmp3_bitMask0 = tmp3_bitMask0 | 256;
            break;
          case 9:
            tmp13_local9 = tmp22_input.dw(tmp0_desc, 9);
            tmp3_bitMask0 = tmp3_bitMask0 | 512;
            break;
          case 10:
            tmp14_local10 = tmp22_input.pw(tmp0_desc, 10, StringSerializer_getInstance(), tmp14_local10);
            tmp3_bitMask0 = tmp3_bitMask0 | 1024;
            break;
          case 11:
            tmp15_local11 = tmp22_input.lw(tmp0_desc, 11);
            tmp3_bitMask0 = tmp3_bitMask0 | 2048;
            break;
          case 12:
            tmp16_local12 = tmp22_input.pw(tmp0_desc, 12, StringSerializer_getInstance(), tmp16_local12);
            tmp3_bitMask0 = tmp3_bitMask0 | 4096;
            break;
          case 13:
            tmp17_local13 = tmp22_input.dw(tmp0_desc, 13);
            tmp3_bitMask0 = tmp3_bitMask0 | 8192;
            break;
          case 14:
            tmp18_local14 = tmp22_input.pw(tmp0_desc, 14, BooleanSerializer_getInstance(), tmp18_local14);
            tmp3_bitMask0 = tmp3_bitMask0 | 16384;
            break;
          default:
            throw UnknownFieldException.et(tmp2_index);
        }
      }
    tmp22_input.cw(tmp0_desc);
    return CaosCommand.a4q(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, tmp10_local6, tmp11_local7, tmp12_local8, tmp13_local9, tmp14_local10, tmp15_local11, tmp16_local12, tmp17_local13, tmp18_local14, null);
  }
  lr() {
    return this.g4p_1;
  }
  l14() {
    var tmp0_cached = Companion_getInstance().f4p_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [IntSerializer_getInstance(), StringSerializer_getInstance(), tmp0_cached[2].k3(), IntSerializer_getInstance(), get_nullable(StringSerializer_getInstance()), get_nullable(tmp0_cached[5].k3()), IntSerializer_getInstance(), tmp0_cached[7].k3(), BooleanSerializer_getInstance(), BooleanSerializer_getInstance(), get_nullable(StringSerializer_getInstance()), StringSerializer_getInstance(), get_nullable(StringSerializer_getInstance()), BooleanSerializer_getInstance(), get_nullable(BooleanSerializer_getInstance())];
  }
}
class CaosCommand {
  constructor(id, command, parameters, returnTypeId, description, returnValuesListIds, requiresOwnr, variants, rvalue, lvalue, lvalueName, commandGroup, doifFormat, requiresCreatureOwnr, ceOnly) {
    Companion_getInstance();
    description = description === VOID ? null : description;
    returnValuesListIds = returnValuesListIds === VOID ? null : returnValuesListIds;
    requiresOwnr = requiresOwnr === VOID ? 0 : requiresOwnr;
    lvalueName = lvalueName === VOID ? null : lvalueName;
    doifFormat = doifFormat === VOID ? null : doifFormat;
    requiresCreatureOwnr = requiresCreatureOwnr === VOID ? false : requiresCreatureOwnr;
    ceOnly = ceOnly === VOID ? null : ceOnly;
    this.i4p_1 = id;
    this.j4p_1 = command;
    this.k4p_1 = parameters;
    this.l4p_1 = returnTypeId;
    this.m4p_1 = description;
    this.n4p_1 = returnValuesListIds;
    this.o4p_1 = requiresOwnr;
    this.p4p_1 = variants;
    this.q4p_1 = rvalue;
    this.r4p_1 = lvalue;
    this.s4p_1 = lvalueName;
    this.t4p_1 = commandGroup;
    this.u4p_1 = doifFormat;
    this.v4p_1 = requiresCreatureOwnr;
    this.w4p_1 = ceOnly;
    var tmp = this;
    tmp.x4p_1 = lazy_0(CaosCommand$tokens$delegate$lambda(this));
    var tmp_0 = this;
    tmp_0.y4p_1 = lazy_0(CaosCommand$fullCommandHeader$delegate$lambda(this));
    var tmp_1 = this;
    tmp_1.z4p_1 = lazy_0(CaosCommand$isCommand$delegate$lambda(this));
  }
  b4q() {
    return Companion_instance.fromIntValue(this.l4p_1);
  }
  j1s() {
    var tmp0 = this.x4p_1;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('tokens', 1, tmp, CaosCommand$_get_tokens_$ref_qlm063(), null);
    return tmp0.k3();
  }
  d4q() {
    var tmp0 = this.z4p_1;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('isCommand', 1, tmp, CaosCommand$_get_isCommand_$ref_j0upw(), null);
    return tmp0.k3();
  }
  equals(other) {
    if (this === other)
      return true;
    if (!(other instanceof CaosCommand))
      return false;
    if (!(this.i4p_1 === other.i4p_1))
      return false;
    if (!(this.j4p_1 === other.j4p_1))
      return false;
    if (!contentEquals(this.k4p_1, other.k4p_1))
      return false;
    if (!this.b4q().equals(other.b4q()))
      return false;
    if (!(this.m4p_1 == other.m4p_1))
      return false;
    if (!equals(this.n4p_1, other.n4p_1))
      return false;
    if (!(this.o4p_1 === other.o4p_1))
      return false;
    if (!contentEquals(this.p4p_1, other.p4p_1))
      return false;
    if (!(this.q4p_1 === other.q4p_1))
      return false;
    if (!(this.r4p_1 === other.r4p_1))
      return false;
    if (!(this.s4p_1 == other.s4p_1))
      return false;
    if (!(this.t4p_1 === other.t4p_1))
      return false;
    if (!(this.u4p_1 == other.u4p_1))
      return false;
    if (!(this.v4p_1 === other.v4p_1))
      return false;
    return true;
  }
  hashCode() {
    var result = this.i4p_1;
    result = imul(31, result) + getStringHashCode(this.j4p_1) | 0;
    result = imul(31, result) + contentHashCode(this.k4p_1) | 0;
    result = imul(31, result) + this.b4q().hashCode() | 0;
    var tmp = imul(31, result);
    var tmp0_safe_receiver = this.m4p_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : getStringHashCode(tmp0_safe_receiver);
    result = tmp + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
    var tmp_0 = imul(31, result);
    var tmp2_safe_receiver = this.n4p_1;
    var tmp3_elvis_lhs = tmp2_safe_receiver == null ? null : hashCode(tmp2_safe_receiver);
    result = tmp_0 + (tmp3_elvis_lhs == null ? 0 : tmp3_elvis_lhs) | 0;
    result = imul(31, result) + this.o4p_1 | 0;
    result = imul(31, result) + contentHashCode(this.p4p_1) | 0;
    result = imul(31, result) + getBooleanHashCode(this.q4p_1) | 0;
    result = imul(31, result) + getBooleanHashCode(this.r4p_1) | 0;
    var tmp_1 = imul(31, result);
    var tmp4_safe_receiver = this.s4p_1;
    var tmp5_elvis_lhs = tmp4_safe_receiver == null ? null : getStringHashCode(tmp4_safe_receiver);
    result = tmp_1 + (tmp5_elvis_lhs == null ? 0 : tmp5_elvis_lhs) | 0;
    result = imul(31, result) + getStringHashCode(this.t4p_1) | 0;
    var tmp_2 = imul(31, result);
    var tmp6_safe_receiver = this.u4p_1;
    var tmp7_elvis_lhs = tmp6_safe_receiver == null ? null : getStringHashCode(tmp6_safe_receiver);
    result = tmp_2 + (tmp7_elvis_lhs == null ? 0 : tmp7_elvis_lhs) | 0;
    result = imul(31, result) + getBooleanHashCode(this.v4p_1) | 0;
    return result;
  }
  e4q(id, command, parameters, returnTypeId, description, returnValuesListIds, requiresOwnr, variants, rvalue, lvalue, lvalueName, commandGroup, doifFormat, requiresCreatureOwnr, ceOnly) {
    return new CaosCommand(id, command, parameters, returnTypeId, description, returnValuesListIds, requiresOwnr, variants, rvalue, lvalue, lvalueName, commandGroup, doifFormat, requiresCreatureOwnr, ceOnly);
  }
  f4q(id, command, parameters, returnTypeId, description, returnValuesListIds, requiresOwnr, variants, rvalue, lvalue, lvalueName, commandGroup, doifFormat, requiresCreatureOwnr, ceOnly, $super) {
    id = id === VOID ? this.i4p_1 : id;
    command = command === VOID ? this.j4p_1 : command;
    parameters = parameters === VOID ? this.k4p_1 : parameters;
    returnTypeId = returnTypeId === VOID ? this.l4p_1 : returnTypeId;
    description = description === VOID ? this.m4p_1 : description;
    returnValuesListIds = returnValuesListIds === VOID ? this.n4p_1 : returnValuesListIds;
    requiresOwnr = requiresOwnr === VOID ? this.o4p_1 : requiresOwnr;
    variants = variants === VOID ? this.p4p_1 : variants;
    rvalue = rvalue === VOID ? this.q4p_1 : rvalue;
    lvalue = lvalue === VOID ? this.r4p_1 : lvalue;
    lvalueName = lvalueName === VOID ? this.s4p_1 : lvalueName;
    commandGroup = commandGroup === VOID ? this.t4p_1 : commandGroup;
    doifFormat = doifFormat === VOID ? this.u4p_1 : doifFormat;
    requiresCreatureOwnr = requiresCreatureOwnr === VOID ? this.v4p_1 : requiresCreatureOwnr;
    ceOnly = ceOnly === VOID ? this.w4p_1 : ceOnly;
    return $super === VOID ? this.e4q(id, command, parameters, returnTypeId, description, returnValuesListIds, requiresOwnr, variants, rvalue, lvalue, lvalueName, commandGroup, doifFormat, requiresCreatureOwnr, ceOnly) : $super.e4q.call(this, id, command, parameters, returnTypeId, description, returnValuesListIds, requiresOwnr, variants, rvalue, lvalue, lvalueName, commandGroup, doifFormat, requiresCreatureOwnr, ceOnly);
  }
  toString() {
    return 'CaosCommand(id=' + this.i4p_1 + ', command=' + this.j4p_1 + ', parameters=' + toString(this.k4p_1) + ', returnTypeId=' + this.l4p_1 + ', description=' + this.m4p_1 + ', returnValuesListIds=' + toString_0(this.n4p_1) + ', requiresOwnr=' + this.o4p_1 + ', variants=' + toString(this.p4p_1) + ', rvalue=' + this.q4p_1 + ', lvalue=' + this.r4p_1 + ', lvalueName=' + this.s4p_1 + ', commandGroup=' + this.t4p_1 + ', doifFormat=' + this.u4p_1 + ', requiresCreatureOwnr=' + this.v4p_1 + ', ceOnly=' + this.w4p_1 + ')';
  }
  static a4q(seen0, id, command, parameters, returnTypeId, description, returnValuesListIds, requiresOwnr, variants, rvalue, lvalue, lvalueName, commandGroup, doifFormat, requiresCreatureOwnr, ceOnly, serializationConstructorMarker) {
    Companion_getInstance();
    if (!(2959 === (2959 & seen0))) {
      throwMissingFieldException(seen0, 2959, $serializer_getInstance().g4p_1);
    }
    var $this = createThis(this);
    $this.i4p_1 = id;
    $this.j4p_1 = command;
    $this.k4p_1 = parameters;
    $this.l4p_1 = returnTypeId;
    if (0 === (seen0 & 16))
      $this.m4p_1 = null;
    else
      $this.m4p_1 = description;
    if (0 === (seen0 & 32))
      $this.n4p_1 = null;
    else
      $this.n4p_1 = returnValuesListIds;
    if (0 === (seen0 & 64))
      $this.o4p_1 = 0;
    else
      $this.o4p_1 = requiresOwnr;
    $this.p4p_1 = variants;
    $this.q4p_1 = rvalue;
    $this.r4p_1 = lvalue;
    if (0 === (seen0 & 1024))
      $this.s4p_1 = null;
    else
      $this.s4p_1 = lvalueName;
    $this.t4p_1 = commandGroup;
    if (0 === (seen0 & 4096))
      $this.u4p_1 = null;
    else
      $this.u4p_1 = doifFormat;
    if (0 === (seen0 & 8192))
      $this.v4p_1 = false;
    else
      $this.v4p_1 = requiresCreatureOwnr;
    if (0 === (seen0 & 16384))
      $this.w4p_1 = null;
    else
      $this.w4p_1 = ceOnly;
    var tmp = $this;
    tmp.x4p_1 = lazy_0(CaosCommand$_init_$lambda_fg2qzm($this));
    var tmp_0 = $this;
    tmp_0.y4p_1 = lazy_0(CaosCommand$_init_$lambda_fg2qzm_0($this));
    var tmp_1 = $this;
    tmp_1.z4p_1 = lazy_0(CaosCommand$_init_$lambda_fg2qzm_1($this));
    return $this;
  }
}
class Companion_0 {
  constructor() {
    Companion_instance_1 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    var tmp_1 = lazy(tmp_0, CaosLibDefinitions$Companion$$childSerializers$_anonymous__fp73zn);
    var tmp_2 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    var tmp_3 = lazy(tmp_2, CaosLibDefinitions$Companion$$childSerializers$_anonymous__fp73zn_0);
    var tmp_4 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.g4q_1 = [null, tmp_1, tmp_3, lazy(tmp_4, CaosLibDefinitions$Companion$$childSerializers$_anonymous__fp73zn_1)];
  }
  k1e() {
    return $serializer_getInstance_0();
  }
}
class $serializer_0 {
  constructor() {
    $serializer_instance_0 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('com.bedalton.creatures.caos.libstructs.CaosLibDefinitions', this, 4);
    tmp0_serialDesc.w13('modDate', false);
    tmp0_serialDesc.e13(new ProtoNumber(1));
    tmp0_serialDesc.w13('commands', false);
    tmp0_serialDesc.e13(new ProtoNumber(2));
    tmp0_serialDesc.w13('variantMap', false);
    tmp0_serialDesc.e13(new ProtoNumber(3));
    tmp0_serialDesc.w13('valuesLists', false);
    tmp0_serialDesc.e13(new ProtoNumber(4));
    this.h4q_1 = tmp0_serialDesc;
  }
  i4q(encoder, value) {
    var tmp0_desc = this.h4q_1;
    var tmp1_output = encoder.bw(tmp0_desc);
    var tmp2_cached = Companion_getInstance_0().g4q_1;
    tmp1_output.nx(tmp0_desc, 0, value.j4q_1);
    tmp1_output.tx(tmp0_desc, 1, tmp2_cached[1].k3(), value.k4q_1);
    tmp1_output.tx(tmp0_desc, 2, tmp2_cached[2].k3(), value.l4q_1);
    tmp1_output.tx(tmp0_desc, 3, tmp2_cached[3].k3(), value.m4q_1);
    tmp1_output.cw(tmp0_desc);
  }
  mr(encoder, value) {
    return this.i4q(encoder, value instanceof CaosLibDefinitions ? value : THROW_CCE());
  }
  nr(decoder) {
    var tmp0_desc = this.h4q_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = 0n;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp9_input = decoder.bw(tmp0_desc);
    var tmp10_cached = Companion_getInstance_0().g4q_1;
    if (tmp9_input.sw()) {
      tmp4_local0 = tmp9_input.hw(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp9_input.nw(tmp0_desc, 1, tmp10_cached[1].k3(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp9_input.nw(tmp0_desc, 2, tmp10_cached[2].k3(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp9_input.nw(tmp0_desc, 3, tmp10_cached[3].k3(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp9_input.tw(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp9_input.hw(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp9_input.nw(tmp0_desc, 1, tmp10_cached[1].k3(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp9_input.nw(tmp0_desc, 2, tmp10_cached[2].k3(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp9_input.nw(tmp0_desc, 3, tmp10_cached[3].k3(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          default:
            throw UnknownFieldException.et(tmp2_index);
        }
      }
    tmp9_input.cw(tmp0_desc);
    return CaosLibDefinitions.o4q(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, null);
  }
  lr() {
    return this.h4q_1;
  }
  l14() {
    var tmp0_cached = Companion_getInstance_0().g4q_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [LongSerializer_getInstance(), tmp0_cached[1].k3(), tmp0_cached[2].k3(), tmp0_cached[3].k3()];
  }
}
class CaosLibDefinitions {
  constructor(modDate, commands, variantMap, valuesLists) {
    Companion_getInstance_0();
    this.j4q_1 = modDate;
    this.k4q_1 = commands;
    this.l4q_1 = variantMap;
    this.m4q_1 = valuesLists;
    var tmp = this;
    tmp.n4q_1 = lazy_0(CaosLibDefinitions$commandsById$delegate$lambda(this));
  }
  p4q() {
    var tmp0 = this.n4q_1;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('commandsById', 1, tmp, CaosLibDefinitions$_get_commandsById_$ref_g2b0sn(), null);
    return tmp0.k3();
  }
  q4q(modDate, commands, variantMap, valuesLists) {
    return new CaosLibDefinitions(modDate, commands, variantMap, valuesLists);
  }
  r4q(modDate, commands, variantMap, valuesLists, $super) {
    modDate = modDate === VOID ? this.j4q_1 : modDate;
    commands = commands === VOID ? this.k4q_1 : commands;
    variantMap = variantMap === VOID ? this.l4q_1 : variantMap;
    valuesLists = valuesLists === VOID ? this.m4q_1 : valuesLists;
    return $super === VOID ? this.q4q(modDate, commands, variantMap, valuesLists) : $super.q4q.call(this, modDate, commands, variantMap, valuesLists);
  }
  toString() {
    return 'CaosLibDefinitions(modDate=' + this.j4q_1.toString() + ', commands=' + toString(this.k4q_1) + ', variantMap=' + toString(this.l4q_1) + ', valuesLists=' + toString(this.m4q_1) + ')';
  }
  hashCode() {
    var result = getBigIntHashCode(this.j4q_1);
    result = imul(result, 31) + hashCode(this.k4q_1) | 0;
    result = imul(result, 31) + hashCode(this.l4q_1) | 0;
    result = imul(result, 31) + hashCode(this.m4q_1) | 0;
    return result;
  }
  equals(other) {
    if (this === other)
      return true;
    if (!(other instanceof CaosLibDefinitions))
      return false;
    if (!(this.j4q_1 === other.j4q_1))
      return false;
    if (!equals(this.k4q_1, other.k4q_1))
      return false;
    if (!equals(this.l4q_1, other.l4q_1))
      return false;
    if (!equals(this.m4q_1, other.m4q_1))
      return false;
    return true;
  }
  static o4q(seen0, modDate, commands, variantMap, valuesLists, serializationConstructorMarker) {
    Companion_getInstance_0();
    if (!(15 === (15 & seen0))) {
      throwMissingFieldException(seen0, 15, $serializer_getInstance_0().h4q_1);
    }
    var $this = createThis(this);
    $this.j4q_1 = modDate;
    $this.k4q_1 = commands;
    $this.l4q_1 = variantMap;
    $this.m4q_1 = valuesLists;
    var tmp = $this;
    tmp.n4q_1 = lazy_0(CaosLibDefinitions$_init_$lambda_tfojde($this));
    return $this;
  }
}
class Companion_1 {
  constructor() {
    Companion_instance_2 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.s4q_1 = [null, null, null, lazy(tmp_0, CaosParameter$Companion$$childSerializers$_anonymous__oeh02l), null, null, null];
  }
}
class $serializer_1 {
  constructor() {
    $serializer_instance_1 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('com.bedalton.creatures.caos.libstructs.CaosParameter', this, 7);
    tmp0_serialDesc.w13('index', false);
    tmp0_serialDesc.e13(new ProtoNumber(1));
    tmp0_serialDesc.w13('name', false);
    tmp0_serialDesc.e13(new ProtoNumber(2));
    tmp0_serialDesc.w13('typeId', false);
    tmp0_serialDesc.e13(new ProtoNumber(3));
    tmp0_serialDesc.w13('valuesListIds', true);
    tmp0_serialDesc.e13(new ProtoNumber(4));
    tmp0_serialDesc.w13('description', true);
    tmp0_serialDesc.e13(new ProtoNumber(5));
    tmp0_serialDesc.w13('min', true);
    tmp0_serialDesc.e13(new ProtoNumber(6));
    tmp0_serialDesc.w13('max', true);
    tmp0_serialDesc.e13(new ProtoNumber(7));
    this.t4q_1 = tmp0_serialDesc;
  }
  u4q(encoder, value) {
    var tmp0_desc = this.t4q_1;
    var tmp1_output = encoder.bw(tmp0_desc);
    var tmp2_cached = Companion_getInstance_1().s4q_1;
    tmp1_output.mx(tmp0_desc, 0, value.index);
    tmp1_output.rx(tmp0_desc, 1, value.name);
    tmp1_output.mx(tmp0_desc, 2, value.typeId);
    if (tmp1_output.zx(tmp0_desc, 3) ? true : !(value.valuesListIds == null)) {
      tmp1_output.vx(tmp0_desc, 3, tmp2_cached[3].k3(), value.valuesListIds);
    }
    if (tmp1_output.zx(tmp0_desc, 4) ? true : !(value.description == null)) {
      tmp1_output.vx(tmp0_desc, 4, StringSerializer_getInstance(), value.description);
    }
    if (tmp1_output.zx(tmp0_desc, 5) ? true : !(value.min == null)) {
      tmp1_output.vx(tmp0_desc, 5, IntSerializer_getInstance(), value.min);
    }
    if (tmp1_output.zx(tmp0_desc, 6) ? true : !(value.max == null)) {
      tmp1_output.vx(tmp0_desc, 6, IntSerializer_getInstance(), value.max);
    }
    tmp1_output.cw(tmp0_desc);
  }
  mr(encoder, value) {
    return this.u4q(encoder, value instanceof CaosParameter ? value : THROW_CCE());
  }
  nr(decoder) {
    var tmp0_desc = this.t4q_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = 0;
    var tmp5_local1 = null;
    var tmp6_local2 = 0;
    var tmp7_local3 = null;
    var tmp8_local4 = null;
    var tmp9_local5 = null;
    var tmp10_local6 = null;
    var tmp12_input = decoder.bw(tmp0_desc);
    var tmp13_cached = Companion_getInstance_1().s4q_1;
    if (tmp12_input.sw()) {
      tmp4_local0 = tmp12_input.gw(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp12_input.lw(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp12_input.gw(tmp0_desc, 2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp12_input.pw(tmp0_desc, 3, tmp13_cached[3].k3(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp12_input.pw(tmp0_desc, 4, StringSerializer_getInstance(), tmp8_local4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp9_local5 = tmp12_input.pw(tmp0_desc, 5, IntSerializer_getInstance(), tmp9_local5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
      tmp10_local6 = tmp12_input.pw(tmp0_desc, 6, IntSerializer_getInstance(), tmp10_local6);
      tmp3_bitMask0 = tmp3_bitMask0 | 64;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp12_input.tw(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp12_input.gw(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp12_input.lw(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp12_input.gw(tmp0_desc, 2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp12_input.pw(tmp0_desc, 3, tmp13_cached[3].k3(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp12_input.pw(tmp0_desc, 4, StringSerializer_getInstance(), tmp8_local4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp9_local5 = tmp12_input.pw(tmp0_desc, 5, IntSerializer_getInstance(), tmp9_local5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          case 6:
            tmp10_local6 = tmp12_input.pw(tmp0_desc, 6, IntSerializer_getInstance(), tmp10_local6);
            tmp3_bitMask0 = tmp3_bitMask0 | 64;
            break;
          default:
            throw UnknownFieldException.et(tmp2_index);
        }
      }
    tmp12_input.cw(tmp0_desc);
    return CaosParameter.v4q(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, tmp10_local6, null);
  }
  lr() {
    return this.t4q_1;
  }
  l14() {
    var tmp0_cached = Companion_getInstance_1().s4q_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [IntSerializer_getInstance(), StringSerializer_getInstance(), IntSerializer_getInstance(), get_nullable(tmp0_cached[3].k3()), get_nullable(StringSerializer_getInstance()), get_nullable(IntSerializer_getInstance()), get_nullable(IntSerializer_getInstance())];
  }
}
class CaosParameter {
  constructor(index, name, typeId, valuesListIds, description, min, max) {
    Companion_getInstance_1();
    valuesListIds = valuesListIds === VOID ? null : valuesListIds;
    description = description === VOID ? null : description;
    min = min === VOID ? null : min;
    max = max === VOID ? null : max;
    this.index = index;
    this.name = name;
    this.typeId = typeId;
    this.valuesListIds = valuesListIds;
    this.description = description;
    this.min = min;
    this.max = max;
    var tmp = this;
    tmp.c4q_1 = lazy_0(CaosParameter$type$delegate$lambda(this));
  }
  y1r() {
    return this.index;
  }
  o() {
    return this.name;
  }
  w4q() {
    return this.typeId;
  }
  x4q() {
    return this.valuesListIds;
  }
  y4q() {
    return this.description;
  }
  z4q() {
    return this.min;
  }
  a4r() {
    return this.max;
  }
  x1r() {
    var tmp0 = this.c4q_1;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('type', 1, tmp, CaosParameter$_get_type_$ref_n5tl2b(), null);
    return tmp0.k3();
  }
  toString() {
    return 'CaosParameter(index=' + this.index + ', name=' + this.name + ', typeId=' + this.typeId + ', valuesListIds=' + toString_0(this.valuesListIds) + ', description=' + this.description + ', min=' + this.min + ', max=' + this.max + ')';
  }
  hashCode() {
    var result = this.index;
    result = imul(result, 31) + getStringHashCode(this.name) | 0;
    result = imul(result, 31) + this.typeId | 0;
    result = imul(result, 31) + (this.valuesListIds == null ? 0 : hashCode(this.valuesListIds)) | 0;
    result = imul(result, 31) + (this.description == null ? 0 : getStringHashCode(this.description)) | 0;
    result = imul(result, 31) + (this.min == null ? 0 : this.min) | 0;
    result = imul(result, 31) + (this.max == null ? 0 : this.max) | 0;
    return result;
  }
  equals(other) {
    if (this === other)
      return true;
    if (!(other instanceof CaosParameter))
      return false;
    if (!(this.index === other.index))
      return false;
    if (!(this.name === other.name))
      return false;
    if (!(this.typeId === other.typeId))
      return false;
    if (!equals(this.valuesListIds, other.valuesListIds))
      return false;
    if (!(this.description == other.description))
      return false;
    if (!(this.min == other.min))
      return false;
    if (!(this.max == other.max))
      return false;
    return true;
  }
  static v4q(seen0, index, name, typeId, valuesListIds, description, min, max, serializationConstructorMarker) {
    Companion_getInstance_1();
    if (!(7 === (7 & seen0))) {
      throwMissingFieldException(seen0, 7, $serializer_getInstance_1().t4q_1);
    }
    var $this = createThis(this);
    $this.index = index;
    $this.name = name;
    $this.typeId = typeId;
    if (0 === (seen0 & 8))
      $this.valuesListIds = null;
    else
      $this.valuesListIds = valuesListIds;
    if (0 === (seen0 & 16))
      $this.description = null;
    else
      $this.description = description;
    if (0 === (seen0 & 32))
      $this.min = null;
    else
      $this.min = min;
    if (0 === (seen0 & 64))
      $this.max = null;
    else
      $this.max = max;
    var tmp = $this;
    tmp.c4q_1 = lazy_0(CaosParameter$_init_$lambda_3besw4($this));
    return $this;
  }
  get type() {
    return this.x1r();
  }
}
class Companion_2 {
  constructor() {
    Companion_instance_3 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp.b4r_1 = lazy(tmp_0, CaosScriptVarTokenGroup$Companion$_anonymous__6yzde9);
  }
  k1e() {
    return _get_$cachedSerializer__te6jhj(this);
  }
  y14(typeParamsSerializers) {
    return this.k1e();
  }
}
class CaosScriptVarTokenGroup extends Enum {
  constructor(name, ordinal, value) {
    super(name, ordinal);
    this.e4r_1 = value;
  }
}
class Companion_3 {
  constructor() {
    Companion_instance_4 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    var tmp_1 = lazy(tmp_0, CaosValuesList$Companion$$childSerializers$_anonymous__8fg7ag);
    var tmp_2 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    var tmp_3 = lazy(tmp_2, CaosValuesList$Companion$$childSerializers$_anonymous__8fg7ag_0);
    var tmp_4 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.f4r_1 = [null, null, tmp_1, null, null, tmp_3, lazy(tmp_4, CaosValuesList$Companion$$childSerializers$_anonymous__8fg7ag_1)];
  }
}
class $serializer_2 {
  constructor() {
    $serializer_instance_2 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('com.bedalton.creatures.caos.libstructs.CaosValuesList', this, 7);
    tmp0_serialDesc.w13('id', false);
    tmp0_serialDesc.e13(new ProtoNumber(1));
    tmp0_serialDesc.w13('name', false);
    tmp0_serialDesc.e13(new ProtoNumber(2));
    tmp0_serialDesc.w13('values', false);
    tmp0_serialDesc.e13(new ProtoNumber(3));
    tmp0_serialDesc.w13('description', true);
    tmp0_serialDesc.e13(new ProtoNumber(4));
    tmp0_serialDesc.w13('extensionType', true);
    tmp0_serialDesc.e13(new ProtoNumber(5));
    tmp0_serialDesc.w13('negative', true);
    tmp0_serialDesc.w13('greaterThan', true);
    this.g4r_1 = tmp0_serialDesc;
  }
  h4r(encoder, value) {
    var tmp0_desc = this.g4r_1;
    var tmp1_output = encoder.bw(tmp0_desc);
    var tmp2_cached = Companion_getInstance_3().f4r_1;
    tmp1_output.mx(tmp0_desc, 0, value.id);
    tmp1_output.rx(tmp0_desc, 1, value.name);
    tmp1_output.tx(tmp0_desc, 2, tmp2_cached[2].k3(), value.values);
    if (tmp1_output.zx(tmp0_desc, 3) ? true : !(value.description == null)) {
      tmp1_output.vx(tmp0_desc, 3, StringSerializer_getInstance(), value.description);
    }
    if (tmp1_output.zx(tmp0_desc, 4) ? true : !(value.extensionType == null)) {
      tmp1_output.vx(tmp0_desc, 4, StringSerializer_getInstance(), value.extensionType);
    }
    var tmp;
    if (tmp1_output.zx(tmp0_desc, 5)) {
      tmp = true;
    } else {
      // Inline function 'kotlin.collections.filter' call
      var tmp0 = value.values;
      // Inline function 'kotlin.collections.filterTo' call
      var destination = ArrayList.u1();
      var inductionVariable = 0;
      var last = tmp0.length;
      while (inductionVariable < last) {
        var element = tmp0[inductionVariable];
        inductionVariable = inductionVariable + 1 | 0;
        if (element.o4r()) {
          destination.z1(element);
        }
      }
      tmp = !equals(value.i4r_1, destination);
    }
    if (tmp) {
      tmp1_output.tx(tmp0_desc, 5, tmp2_cached[5].k3(), value.i4r_1);
    }
    var tmp_0;
    if (tmp1_output.zx(tmp0_desc, 6)) {
      tmp_0 = true;
    } else {
      // Inline function 'kotlin.collections.filter' call
      var tmp0_0 = value.values;
      // Inline function 'kotlin.collections.filterTo' call
      var destination_0 = ArrayList.u1();
      var inductionVariable_0 = 0;
      var last_0 = tmp0_0.length;
      while (inductionVariable_0 < last_0) {
        var element_0 = tmp0_0[inductionVariable_0];
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        if (element_0.p4r()) {
          destination_0.z1(element_0);
        }
      }
      tmp_0 = !equals(value.j4r_1, destination_0);
    }
    if (tmp_0) {
      tmp1_output.tx(tmp0_desc, 6, tmp2_cached[6].k3(), value.j4r_1);
    }
    tmp1_output.cw(tmp0_desc);
  }
  mr(encoder, value) {
    return this.h4r(encoder, value instanceof CaosValuesList ? value : THROW_CCE());
  }
  nr(decoder) {
    var tmp0_desc = this.g4r_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = 0;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_local4 = null;
    var tmp9_local5 = null;
    var tmp10_local6 = null;
    var tmp12_input = decoder.bw(tmp0_desc);
    var tmp13_cached = Companion_getInstance_3().f4r_1;
    if (tmp12_input.sw()) {
      tmp4_local0 = tmp12_input.gw(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp12_input.lw(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp12_input.nw(tmp0_desc, 2, tmp13_cached[2].k3(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp12_input.pw(tmp0_desc, 3, StringSerializer_getInstance(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp12_input.pw(tmp0_desc, 4, StringSerializer_getInstance(), tmp8_local4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp9_local5 = tmp12_input.nw(tmp0_desc, 5, tmp13_cached[5].k3(), tmp9_local5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
      tmp10_local6 = tmp12_input.nw(tmp0_desc, 6, tmp13_cached[6].k3(), tmp10_local6);
      tmp3_bitMask0 = tmp3_bitMask0 | 64;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp12_input.tw(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp12_input.gw(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp12_input.lw(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp12_input.nw(tmp0_desc, 2, tmp13_cached[2].k3(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp12_input.pw(tmp0_desc, 3, StringSerializer_getInstance(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp12_input.pw(tmp0_desc, 4, StringSerializer_getInstance(), tmp8_local4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp9_local5 = tmp12_input.nw(tmp0_desc, 5, tmp13_cached[5].k3(), tmp9_local5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          case 6:
            tmp10_local6 = tmp12_input.nw(tmp0_desc, 6, tmp13_cached[6].k3(), tmp10_local6);
            tmp3_bitMask0 = tmp3_bitMask0 | 64;
            break;
          default:
            throw UnknownFieldException.et(tmp2_index);
        }
      }
    tmp12_input.cw(tmp0_desc);
    return CaosValuesList.q4r(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, tmp10_local6, null);
  }
  lr() {
    return this.g4r_1;
  }
  l14() {
    var tmp0_cached = Companion_getInstance_3().f4r_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [IntSerializer_getInstance(), StringSerializer_getInstance(), tmp0_cached[2].k3(), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), tmp0_cached[5].k3(), tmp0_cached[6].k3()];
  }
}
class CaosValuesList {
  constructor(id, name, values, description, extensionType) {
    Companion_getInstance_3();
    description = description === VOID ? null : description;
    extensionType = extensionType === VOID ? null : extensionType;
    this.id = id;
    this.name = name;
    this.values = values;
    this.description = description;
    this.extensionType = extensionType;
    var tmp = this;
    // Inline function 'kotlin.collections.filter' call
    var tmp0 = this.values;
    // Inline function 'kotlin.collections.filterTo' call
    var destination = ArrayList.u1();
    var inductionVariable = 0;
    var last = tmp0.length;
    while (inductionVariable < last) {
      var element = tmp0[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      if (element.o4r()) {
        destination.z1(element);
      }
    }
    tmp.i4r_1 = destination;
    var tmp_0 = this;
    // Inline function 'kotlin.collections.filter' call
    var tmp0_0 = this.values;
    // Inline function 'kotlin.collections.filterTo' call
    var destination_0 = ArrayList.u1();
    var inductionVariable_0 = 0;
    var last_0 = tmp0_0.length;
    while (inductionVariable_0 < last_0) {
      var element_0 = tmp0_0[inductionVariable_0];
      inductionVariable_0 = inductionVariable_0 + 1 | 0;
      if (element_0.p4r()) {
        destination_0.z1(element_0);
      }
    }
    tmp_0.j4r_1 = destination_0;
    var tmp_1 = this;
    tmp_1.k4r_1 = lazy_0(CaosValuesList$bitflag$delegate$lambda(this));
  }
  s4r() {
    return this.id;
  }
  o() {
    return this.name;
  }
  o3() {
    return this.values;
  }
  y4q() {
    return this.description;
  }
  t4r() {
    return this.extensionType;
  }
  getValueWithString(key) {
    var tmp0_safe_receiver = toIntOrNull(key);
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      return this.getValueWithInt(tmp0_safe_receiver);
    }
    var tmp0 = this.values;
    var tmp$ret$2;
    $l$block: {
      // Inline function 'kotlin.collections.firstOrNull' call
      var inductionVariable = 0;
      var last = tmp0.length;
      while (inductionVariable < last) {
        var element = tmp0[inductionVariable];
        inductionVariable = inductionVariable + 1 | 0;
        if (element.value === key) {
          tmp$ret$2 = element;
          break $l$block;
        }
      }
      tmp$ret$2 = null;
    }
    return tmp$ret$2;
  }
  getValueWithInt(key) {
    var tmp0 = this.values;
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlin.collections.firstOrNull' call
      var inductionVariable = 0;
      var last = tmp0.length;
      while (inductionVariable < last) {
        var element = tmp0[inductionVariable];
        inductionVariable = inductionVariable + 1 | 0;
        if (element.h1s() === key) {
          tmp$ret$0 = element;
          break $l$block;
        }
      }
      tmp$ret$0 = null;
    }
    var tmp0_elvis_lhs = tmp$ret$0;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var tmp0_0 = this.i4r_1;
      var tmp$ret$2;
      $l$block_0: {
        // Inline function 'kotlin.collections.firstOrNull' call
        var _iterator__ex2g4s = tmp0_0.w();
        while (_iterator__ex2g4s.x()) {
          var element_0 = _iterator__ex2g4s.y();
          if (!(element_0.h1s() === key)) {
            tmp$ret$2 = element_0;
            break $l$block_0;
          }
        }
        tmp$ret$2 = null;
      }
      tmp = tmp$ret$2;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var tmp1_elvis_lhs = tmp;
    var tmp_0;
    if (tmp1_elvis_lhs == null) {
      var tmp0_1 = this.j4r_1;
      var tmp$ret$4;
      $l$block_1: {
        // Inline function 'kotlin.collections.firstOrNull' call
        var _iterator__ex2g4s_0 = tmp0_1.w();
        while (_iterator__ex2g4s_0.x()) {
          var element_1 = _iterator__ex2g4s_0.y();
          if (ensureNotNull(element_1.h1s()) < key) {
            tmp$ret$4 = element_1;
            break $l$block_1;
          }
        }
        tmp$ret$4 = null;
      }
      tmp_0 = tmp$ret$4;
    } else {
      tmp_0 = tmp1_elvis_lhs;
    }
    return tmp_0;
  }
  equals(other) {
    if (this === other)
      return true;
    if (other == null || !getKClassFromExpression(this).equals(getKClassFromExpression(other)))
      return false;
    if (!(other instanceof CaosValuesList))
      THROW_CCE();
    if (!(this.id === other.id))
      return false;
    if (!(this.r4r() === other.r4r()))
      return false;
    if (!(this.name === other.name))
      return false;
    if (!contentEquals(this.values, other.values))
      return false;
    if (!(this.description == other.description))
      return false;
    if (!(this.extensionType == other.extensionType))
      return false;
    if (!equals(this.i4r_1, other.i4r_1))
      return false;
    if (!equals(this.j4r_1, other.j4r_1))
      return false;
    return true;
  }
  hashCode() {
    var result = this.id;
    result = imul(31, result) + getBooleanHashCode(this.r4r()) | 0;
    result = imul(31, result) + getStringHashCode(this.name) | 0;
    result = imul(31, result) + contentHashCode(this.values) | 0;
    var tmp = imul(31, result);
    var tmp0_safe_receiver = this.description;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : getStringHashCode(tmp0_safe_receiver);
    result = tmp + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
    var tmp_0 = imul(31, result);
    var tmp2_safe_receiver = this.extensionType;
    var tmp3_elvis_lhs = tmp2_safe_receiver == null ? null : getStringHashCode(tmp2_safe_receiver);
    result = tmp_0 + (tmp3_elvis_lhs == null ? 0 : tmp3_elvis_lhs) | 0;
    result = imul(31, result) + hashCode(this.i4r_1) | 0;
    result = imul(31, result) + hashCode(this.j4r_1) | 0;
    return result;
  }
  r4r() {
    var tmp0 = this.k4r_1;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('bitflag', 1, tmp, CaosValuesList$_get_bitflag_$ref_koiysb(), null);
    return tmp0.k3();
  }
  toString() {
    return 'CaosValuesList(id=' + this.id + ', name=' + this.name + ', values=' + toString(this.values) + ', description=' + this.description + ', extensionType=' + this.extensionType + ')';
  }
  static q4r(seen0, id, name, values, description, extensionType, negative, greaterThan, serializationConstructorMarker) {
    Companion_getInstance_3();
    if (!(7 === (7 & seen0))) {
      throwMissingFieldException(seen0, 7, $serializer_getInstance_2().g4r_1);
    }
    var $this = createThis(this);
    $this.id = id;
    $this.name = name;
    $this.values = values;
    if (0 === (seen0 & 8))
      $this.description = null;
    else
      $this.description = description;
    if (0 === (seen0 & 16))
      $this.extensionType = null;
    else
      $this.extensionType = extensionType;
    if (0 === (seen0 & 32)) {
      var tmp = $this;
      // Inline function 'kotlin.collections.filter' call
      var tmp0 = $this.values;
      // Inline function 'kotlin.collections.filterTo' call
      var destination = ArrayList.u1();
      var inductionVariable = 0;
      var last = tmp0.length;
      while (inductionVariable < last) {
        var element = tmp0[inductionVariable];
        inductionVariable = inductionVariable + 1 | 0;
        if (element.o4r()) {
          destination.z1(element);
        }
      }
      tmp.i4r_1 = destination;
    } else
      $this.i4r_1 = negative;
    if (0 === (seen0 & 64)) {
      var tmp_0 = $this;
      // Inline function 'kotlin.collections.filter' call
      var tmp0_0 = $this.values;
      // Inline function 'kotlin.collections.filterTo' call
      var destination_0 = ArrayList.u1();
      var inductionVariable_0 = 0;
      var last_0 = tmp0_0.length;
      while (inductionVariable_0 < last_0) {
        var element_0 = tmp0_0[inductionVariable_0];
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        if (element_0.p4r()) {
          destination_0.z1(element_0);
        }
      }
      tmp_0.j4r_1 = destination_0;
    } else
      $this.j4r_1 = greaterThan;
    var tmp_1 = $this;
    tmp_1.k4r_1 = lazy_0(CaosValuesList$_init_$lambda_11sxhl($this));
    return $this;
  }
}
class Companion_4 {}
class $serializer_3 {
  constructor() {
    $serializer_instance_3 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('com.bedalton.creatures.caos.libstructs.CaosValuesListValue', this, 4);
    tmp0_serialDesc.w13('value', false);
    tmp0_serialDesc.e13(new ProtoNumber(1));
    tmp0_serialDesc.w13('name', false);
    tmp0_serialDesc.e13(new ProtoNumber(2));
    tmp0_serialDesc.w13('description', true);
    tmp0_serialDesc.e13(new ProtoNumber(3));
    tmp0_serialDesc.w13('beforeRegion', true);
    tmp0_serialDesc.e13(new ProtoNumber(4));
    this.u4r_1 = tmp0_serialDesc;
  }
  v4r(encoder, value) {
    var tmp0_desc = this.u4r_1;
    var tmp1_output = encoder.bw(tmp0_desc);
    tmp1_output.rx(tmp0_desc, 0, value.value);
    tmp1_output.rx(tmp0_desc, 1, value.name);
    if (tmp1_output.zx(tmp0_desc, 2) ? true : !(value.description == null)) {
      tmp1_output.vx(tmp0_desc, 2, StringSerializer_getInstance(), value.description);
    }
    if (tmp1_output.zx(tmp0_desc, 3) ? true : !(value.beforeRegion == null)) {
      tmp1_output.vx(tmp0_desc, 3, StringSerializer_getInstance(), value.beforeRegion);
    }
    tmp1_output.cw(tmp0_desc);
  }
  mr(encoder, value) {
    return this.v4r(encoder, value instanceof ValuesListValue ? value : THROW_CCE());
  }
  nr(decoder) {
    var tmp0_desc = this.u4r_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp11_input = decoder.bw(tmp0_desc);
    if (tmp11_input.sw()) {
      tmp4_local0 = tmp11_input.lw(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp11_input.lw(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp11_input.pw(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp11_input.pw(tmp0_desc, 3, StringSerializer_getInstance(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp11_input.tw(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp11_input.lw(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp11_input.lw(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp11_input.pw(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp11_input.pw(tmp0_desc, 3, StringSerializer_getInstance(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          default:
            throw UnknownFieldException.et(tmp2_index);
        }
      }
    tmp11_input.cw(tmp0_desc);
    return ValuesListValue.w4r(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, null);
  }
  lr() {
    return this.u4r_1;
  }
  l14() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), StringSerializer_getInstance(), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance())];
  }
}
class ValuesListValue {
  constructor(value, name, description, beforeRegion) {
    description = description === VOID ? null : description;
    beforeRegion = beforeRegion === VOID ? null : beforeRegion;
    this.value = value;
    this.name = name;
    this.description = description;
    this.beforeRegion = beforeRegion;
    var tmp = this;
    tmp.l4r_1 = lazy_0(CaosValuesListValue$intValue$delegate$lambda(this));
    var tmp_0 = this;
    tmp_0.m4r_1 = lazy_0(CaosValuesListValue$not$delegate$lambda(this));
    var tmp_1 = this;
    tmp_1.n4r_1 = lazy_0(CaosValuesListValue$greaterThan$delegate$lambda(this));
  }
  k3() {
    return this.value;
  }
  o() {
    return this.name;
  }
  y4q() {
    return this.description;
  }
  x4r() {
    return this.beforeRegion;
  }
  h1s() {
    var tmp0 = this.l4r_1;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('intValue', 1, tmp, CaosValuesListValue$_get_intValue_$ref_pvr0wd(), null);
    return tmp0.k3();
  }
  o4r() {
    var tmp0 = this.m4r_1;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('not', 1, tmp, CaosValuesListValue$_get_not_$ref_4vgyw(), null);
    return tmp0.k3();
  }
  p4r() {
    var tmp0 = this.n4r_1;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('greaterThan', 1, tmp, CaosValuesListValue$_get_greaterThan_$ref_das0vk(), null);
    return tmp0.k3();
  }
  toString() {
    return 'CaosValuesListValue(value=' + this.value + ', name=' + this.name + ', description=' + this.description + ', beforeRegion=' + this.beforeRegion + ')';
  }
  hashCode() {
    var result = getStringHashCode(this.value);
    result = imul(result, 31) + getStringHashCode(this.name) | 0;
    result = imul(result, 31) + (this.description == null ? 0 : getStringHashCode(this.description)) | 0;
    result = imul(result, 31) + (this.beforeRegion == null ? 0 : getStringHashCode(this.beforeRegion)) | 0;
    return result;
  }
  equals(other) {
    if (this === other)
      return true;
    if (!(other instanceof ValuesListValue))
      return false;
    if (!(this.value === other.value))
      return false;
    if (!(this.name === other.name))
      return false;
    if (!(this.description == other.description))
      return false;
    if (!(this.beforeRegion == other.beforeRegion))
      return false;
    return true;
  }
  static w4r(seen0, value, name, description, beforeRegion, serializationConstructorMarker) {
    if (!(3 === (3 & seen0))) {
      throwMissingFieldException(seen0, 3, $serializer_getInstance_3().u4r_1);
    }
    var $this = createThis(this);
    $this.value = value;
    $this.name = name;
    if (0 === (seen0 & 4))
      $this.description = null;
    else
      $this.description = description;
    if (0 === (seen0 & 8))
      $this.beforeRegion = null;
    else
      $this.beforeRegion = beforeRegion;
    var tmp = $this;
    tmp.l4r_1 = lazy_0(CaosValuesListValue$_init_$lambda_7cqd18($this));
    var tmp_0 = $this;
    tmp_0.m4r_1 = lazy_0(CaosValuesListValue$_init_$lambda_7cqd18_0($this));
    var tmp_1 = $this;
    tmp_1.n4r_1 = lazy_0(CaosValuesListValue$_init_$lambda_7cqd18_1($this));
    return $this;
  }
  get intValue() {
    return this.h1s();
  }
  get negatedValue() {
    return this.o4r();
  }
  get greaterThanValue() {
    return this.p4r();
  }
}
class Companion_5 {}
class $serializer_4 {
  constructor() {
    $serializer_instance_4 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('com.bedalton.creatures.caos.libstructs.CaosVarConstraints', this, 5);
    tmp0_serialDesc.w13('VARx', false);
    tmp0_serialDesc.e13(new ProtoNumber(1));
    tmp0_serialDesc.w13('VAxx', false);
    tmp0_serialDesc.e13(new ProtoNumber(2));
    tmp0_serialDesc.w13('OBVx', false);
    tmp0_serialDesc.e13(new ProtoNumber(3));
    tmp0_serialDesc.w13('OVxx', false);
    tmp0_serialDesc.e13(new ProtoNumber(4));
    tmp0_serialDesc.w13('MVxx', false);
    tmp0_serialDesc.e13(new ProtoNumber(5));
    this.y4r_1 = tmp0_serialDesc;
  }
  z4r(encoder, value) {
    var tmp0_desc = this.y4r_1;
    var tmp1_output = encoder.bw(tmp0_desc);
    tmp1_output.vx(tmp0_desc, 0, IntSerializer_getInstance(), value.a4s_1);
    tmp1_output.vx(tmp0_desc, 1, IntSerializer_getInstance(), value.b4s_1);
    tmp1_output.vx(tmp0_desc, 2, IntSerializer_getInstance(), value.c4s_1);
    tmp1_output.vx(tmp0_desc, 3, IntSerializer_getInstance(), value.d4s_1);
    tmp1_output.vx(tmp0_desc, 4, IntSerializer_getInstance(), value.e4s_1);
    tmp1_output.cw(tmp0_desc);
  }
  mr(encoder, value) {
    return this.z4r(encoder, value instanceof CaosVarConstraints ? value : THROW_CCE());
  }
  nr(decoder) {
    var tmp0_desc = this.y4r_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_local4 = null;
    var tmp9_input = decoder.bw(tmp0_desc);
    if (tmp9_input.sw()) {
      tmp4_local0 = tmp9_input.pw(tmp0_desc, 0, IntSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp9_input.pw(tmp0_desc, 1, IntSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp9_input.pw(tmp0_desc, 2, IntSerializer_getInstance(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp9_input.pw(tmp0_desc, 3, IntSerializer_getInstance(), tmp7_local3);
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
            tmp4_local0 = tmp9_input.pw(tmp0_desc, 0, IntSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp9_input.pw(tmp0_desc, 1, IntSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp9_input.pw(tmp0_desc, 2, IntSerializer_getInstance(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp9_input.pw(tmp0_desc, 3, IntSerializer_getInstance(), tmp7_local3);
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
    return CaosVarConstraints.f4s(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, null);
  }
  lr() {
    return this.y4r_1;
  }
  l14() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(IntSerializer_getInstance()), get_nullable(IntSerializer_getInstance()), get_nullable(IntSerializer_getInstance()), get_nullable(IntSerializer_getInstance()), get_nullable(IntSerializer_getInstance())];
  }
}
class CaosVarConstraints {
  constructor(VARx, VAxx, OBVx, OVxx, MVxx) {
    this.a4s_1 = VARx;
    this.b4s_1 = VAxx;
    this.c4s_1 = OBVx;
    this.d4s_1 = OVxx;
    this.e4s_1 = MVxx;
  }
  g4s(key) {
    var tmp;
    switch (key.d1_1) {
      case 1:
        tmp = this.a4s_1;
        break;
      case 3:
        tmp = this.b4s_1;
        break;
      case 2:
        tmp = this.c4s_1;
        break;
      case 4:
        tmp = this.d4s_1;
        break;
      case 5:
        tmp = this.e4s_1;
        break;
      case 0:
        tmp = null;
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  }
  get(key) {
    return this.g4s(key instanceof CaosScriptVarTokenGroup ? key : THROW_CCE());
  }
  toString() {
    return 'CaosVarConstraints(VARx=' + this.a4s_1 + ', VAxx=' + this.b4s_1 + ', OBVx=' + this.c4s_1 + ', OVxx=' + this.d4s_1 + ', MVxx=' + this.e4s_1 + ')';
  }
  hashCode() {
    var result = this.a4s_1 == null ? 0 : this.a4s_1;
    result = imul(result, 31) + (this.b4s_1 == null ? 0 : this.b4s_1) | 0;
    result = imul(result, 31) + (this.c4s_1 == null ? 0 : this.c4s_1) | 0;
    result = imul(result, 31) + (this.d4s_1 == null ? 0 : this.d4s_1) | 0;
    result = imul(result, 31) + (this.e4s_1 == null ? 0 : this.e4s_1) | 0;
    return result;
  }
  equals(other) {
    if (this === other)
      return true;
    if (!(other instanceof CaosVarConstraints))
      return false;
    if (!(this.a4s_1 == other.a4s_1))
      return false;
    if (!(this.b4s_1 == other.b4s_1))
      return false;
    if (!(this.c4s_1 == other.c4s_1))
      return false;
    if (!(this.d4s_1 == other.d4s_1))
      return false;
    if (!(this.e4s_1 == other.e4s_1))
      return false;
    return true;
  }
  static f4s(seen0, VARx, VAxx, OBVx, OVxx, MVxx, serializationConstructorMarker) {
    if (!(31 === (31 & seen0))) {
      throwMissingFieldException(seen0, 31, $serializer_getInstance_4().y4r_1);
    }
    var $this = createThis(this);
    $this.a4s_1 = VARx;
    $this.b4s_1 = VAxx;
    $this.c4s_1 = OBVx;
    $this.d4s_1 = OVxx;
    $this.e4s_1 = MVxx;
    return $this;
  }
}
class CaosVariant {
  constructor(code, fullName, index) {
    Companion_getInstance_6();
    this.j4s_1 = code;
    this.k4s_1 = fullName;
    this.l4s_1 = index;
  }
  m4s() {
    return this.j4s_1;
  }
  y1r() {
    return this.l4s_1;
  }
  n4s() {
    return get_VARIANT_OLD().g2(this);
  }
  o4s() {
    return !get_VARIANT_OLD().g2(this);
  }
  p4s() {
    return !get_VARIANT_OLD().g2(this);
  }
  toString() {
    return this.m4s();
  }
  compareTo(version) {
    return (this.y1r() - version | 0) < 0 ? -1 : (this.y1r() - version | 0) > 0 ? 1 : 0;
  }
  equals(other) {
    if (this === other)
      return true;
    if (!(other instanceof CaosVariant))
      return false;
    if (!(this.m4s() === other.m4s()))
      return false;
    return true;
  }
  hashCode() {
    return getStringHashCode(this.m4s());
  }
  get isOld() {
    return this.n4s();
  }
  get isNotOld() {
    return this.o4s();
  }
  get isNew() {
    return this.p4s();
  }
}
class C1 extends CaosVariant {
  constructor() {
    C1_instance = null;
    super('C1', 'Creatures 1', 1);
    C1_instance = this;
  }
}
class C2 extends CaosVariant {
  constructor() {
    C2_instance = null;
    super('C2', 'Creatures 2', 2);
    C2_instance = this;
  }
}
class CV extends CaosVariant {
  constructor() {
    CV_instance = null;
    super('CV', 'Creatures Village', 3);
    CV_instance = this;
  }
}
class C3 extends CaosVariant {
  constructor() {
    C3_instance = null;
    super('C3', 'Creatures 3', 4);
    C3_instance = this;
  }
}
class DS extends CaosVariant {
  constructor() {
    DS_instance = null;
    super('DS', 'Docking Station', 5);
    DS_instance = this;
  }
}
class CE extends CaosVariant {
  constructor() {
    CE_instance = null;
    super('DS:CE', 'DS: Community Edition', 6);
    CE_instance = this;
  }
}
class SM extends CaosVariant {
  constructor() {
    SM_instance = null;
    super('SM', 'Sea Monkeys', 7);
    SM_instance = this;
  }
}
class UNKNOWN extends CaosVariant {
  constructor() {
    UNKNOWN_instance = null;
    super('??', 'Unknown', -1);
    UNKNOWN_instance = this;
  }
}
class Companion_6 {
  constructor() {
    Companion_instance_7 = this;
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.h4s_1 = ArrayList.u1();
    var tmp_0 = this;
    var tmp_1 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp_0.i4s_1 = lazy(tmp_1, CaosVariant$Companion$_anonymous__9oo02c);
  }
  q4s(variant) {
    var tmp;
    switch (variant) {
      case 'C1':
        tmp = C1_getInstance();
        break;
      case 'C2':
        tmp = C2_getInstance();
        break;
      case 'CV':
        tmp = CV_getInstance();
        break;
      case 'C3':
        tmp = C3_getInstance();
        break;
      case 'DS':
        tmp = DS_getInstance();
        break;
      case 'SM':
        tmp = SM_getInstance();
        break;
      case 'DS:CE':
        tmp = CE_getInstance();
        break;
      default:
        var tmp0 = this.h4s_1;
        var tmp$ret$0;
        $l$block: {
          // Inline function 'kotlin.collections.firstOrNull' call
          var _iterator__ex2g4s = tmp0.w();
          while (_iterator__ex2g4s.x()) {
            var element = _iterator__ex2g4s.y();
            if (element.m4s() === variant) {
              tmp$ret$0 = element;
              break $l$block;
            }
          }
          tmp$ret$0 = null;
        }

        var tmp1_elvis_lhs = tmp$ret$0;
        tmp = tmp1_elvis_lhs == null ? UNKNOWN_getInstance() : tmp1_elvis_lhs;
        break;
    }
    return tmp;
  }
  k1e() {
    return _get_$cachedSerializer__te6jhj_0(this);
  }
  y14(typeParamsSerializers) {
    return this.k1e();
  }
}
class Companion_7 {
  constructor() {
    Companion_instance_8 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    var tmp_1 = lazy(tmp_0, CaosVariantData$Companion$$childSerializers$_anonymous__z6x1a5);
    var tmp_2 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    var tmp_3 = lazy(tmp_2, CaosVariantData$Companion$$childSerializers$_anonymous__z6x1a5_0);
    var tmp_4 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    var tmp_5 = lazy(tmp_4, CaosVariantData$Companion$$childSerializers$_anonymous__z6x1a5_1);
    var tmp_6 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.r4s_1 = [null, null, null, tmp_1, tmp_3, tmp_5, lazy(tmp_6, CaosVariantData$Companion$$childSerializers$_anonymous__z6x1a5_2)];
  }
}
class $serializer_5 {
  constructor() {
    $serializer_instance_5 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('com.bedalton.creatures.caos.libstructs.CaosVariantData', this, 7);
    tmp0_serialDesc.w13('name', false);
    tmp0_serialDesc.e13(new ProtoNumber(1));
    tmp0_serialDesc.w13('code', false);
    tmp0_serialDesc.e13(new ProtoNumber(2));
    tmp0_serialDesc.w13('vars', false);
    tmp0_serialDesc.e13(new ProtoNumber(3));
    tmp0_serialDesc.w13('commands', false);
    tmp0_serialDesc.e13(new ProtoNumber(4));
    tmp0_serialDesc.w13('lvalues', false);
    tmp0_serialDesc.e13(new ProtoNumber(5));
    tmp0_serialDesc.w13('rvalues', false);
    tmp0_serialDesc.e13(new ProtoNumber(6));
    tmp0_serialDesc.w13('valuesListsIds', true);
    tmp0_serialDesc.e13(new ProtoNumber(7));
    this.s4s_1 = tmp0_serialDesc;
  }
  t4s(encoder, value) {
    var tmp0_desc = this.s4s_1;
    var tmp1_output = encoder.bw(tmp0_desc);
    var tmp2_cached = Companion_getInstance_7().r4s_1;
    tmp1_output.rx(tmp0_desc, 0, value.u4s_1);
    tmp1_output.rx(tmp0_desc, 1, value.v4s_1);
    tmp1_output.tx(tmp0_desc, 2, $serializer_getInstance_4(), value.w4s_1);
    tmp1_output.tx(tmp0_desc, 3, tmp2_cached[3].k3(), value.x4s_1);
    tmp1_output.tx(tmp0_desc, 4, tmp2_cached[4].k3(), value.y4s_1);
    tmp1_output.tx(tmp0_desc, 5, tmp2_cached[5].k3(), value.z4s_1);
    var tmp;
    if (tmp1_output.zx(tmp0_desc, 6)) {
      tmp = true;
    } else {
      // Inline function 'kotlin.emptyArray' call
      var tmp$ret$0 = [];
      tmp = !equals(value.a4t_1, tmp$ret$0);
    }
    if (tmp) {
      tmp1_output.tx(tmp0_desc, 6, tmp2_cached[6].k3(), value.a4t_1);
    }
    tmp1_output.cw(tmp0_desc);
  }
  mr(encoder, value) {
    return this.t4s(encoder, value instanceof CaosVariantData ? value : THROW_CCE());
  }
  nr(decoder) {
    var tmp0_desc = this.s4s_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_local4 = null;
    var tmp9_local5 = null;
    var tmp10_local6 = null;
    var tmp13_input = decoder.bw(tmp0_desc);
    var tmp14_cached = Companion_getInstance_7().r4s_1;
    if (tmp13_input.sw()) {
      tmp4_local0 = tmp13_input.lw(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp13_input.lw(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp13_input.nw(tmp0_desc, 2, $serializer_getInstance_4(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp13_input.nw(tmp0_desc, 3, tmp14_cached[3].k3(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp13_input.nw(tmp0_desc, 4, tmp14_cached[4].k3(), tmp8_local4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp9_local5 = tmp13_input.nw(tmp0_desc, 5, tmp14_cached[5].k3(), tmp9_local5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
      tmp10_local6 = tmp13_input.nw(tmp0_desc, 6, tmp14_cached[6].k3(), tmp10_local6);
      tmp3_bitMask0 = tmp3_bitMask0 | 64;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp13_input.tw(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp13_input.lw(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp13_input.lw(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp13_input.nw(tmp0_desc, 2, $serializer_getInstance_4(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp13_input.nw(tmp0_desc, 3, tmp14_cached[3].k3(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp13_input.nw(tmp0_desc, 4, tmp14_cached[4].k3(), tmp8_local4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp9_local5 = tmp13_input.nw(tmp0_desc, 5, tmp14_cached[5].k3(), tmp9_local5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          case 6:
            tmp10_local6 = tmp13_input.nw(tmp0_desc, 6, tmp14_cached[6].k3(), tmp10_local6);
            tmp3_bitMask0 = tmp3_bitMask0 | 64;
            break;
          default:
            throw UnknownFieldException.et(tmp2_index);
        }
      }
    tmp13_input.cw(tmp0_desc);
    return CaosVariantData.d4t(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, tmp10_local6, null);
  }
  lr() {
    return this.s4s_1;
  }
  l14() {
    var tmp0_cached = Companion_getInstance_7().r4s_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), StringSerializer_getInstance(), $serializer_getInstance_4(), tmp0_cached[3].k3(), tmp0_cached[4].k3(), tmp0_cached[5].k3(), tmp0_cached[6].k3()];
  }
}
class CaosVariantData {
  constructor(name, code, vars, commands, lvalues, rvalues, valuesListsIds) {
    Companion_getInstance_7();
    var tmp;
    if (valuesListsIds === VOID) {
      // Inline function 'kotlin.emptyArray' call
      tmp = [];
    } else {
      tmp = valuesListsIds;
    }
    valuesListsIds = tmp;
    this.u4s_1 = name;
    this.v4s_1 = code;
    this.w4s_1 = vars;
    this.x4s_1 = commands;
    this.y4s_1 = lvalues;
    this.z4s_1 = rvalues;
    this.a4t_1 = valuesListsIds;
    var tmp_0 = this;
    tmp_0.b4t_1 = lazy_0(CaosVariantData$isOld$delegate$lambda(this));
    var tmp_1 = this;
    tmp_1.c4t_1 = lazy_0(CaosVariantData$isNew$delegate$lambda(this));
  }
  equals(other) {
    if (this === other)
      return true;
    if (!(other instanceof CaosVariantData))
      return false;
    if (!(this.u4s_1 === other.u4s_1))
      return false;
    if (!(this.v4s_1 === other.v4s_1))
      return false;
    if (!this.w4s_1.equals(other.w4s_1))
      return false;
    if (!equals(this.x4s_1, other.x4s_1))
      return false;
    if (!equals(this.y4s_1, other.y4s_1))
      return false;
    if (!equals(this.z4s_1, other.z4s_1))
      return false;
    if (!contentEquals(this.a4t_1, other.a4t_1))
      return false;
    return true;
  }
  hashCode() {
    var result = getStringHashCode(this.u4s_1);
    result = imul(31, result) + getStringHashCode(this.v4s_1) | 0;
    result = imul(31, result) + this.w4s_1.hashCode() | 0;
    result = imul(31, result) + hashCode(this.x4s_1) | 0;
    result = imul(31, result) + hashCode(this.y4s_1) | 0;
    result = imul(31, result) + hashCode(this.z4s_1) | 0;
    result = imul(31, result) + contentHashCode(this.a4t_1) | 0;
    return result;
  }
  e4t(name, code, vars, commands, lvalues, rvalues, valuesListsIds) {
    return new CaosVariantData(name, code, vars, commands, lvalues, rvalues, valuesListsIds);
  }
  f4t(name, code, vars, commands, lvalues, rvalues, valuesListsIds, $super) {
    name = name === VOID ? this.u4s_1 : name;
    code = code === VOID ? this.v4s_1 : code;
    vars = vars === VOID ? this.w4s_1 : vars;
    commands = commands === VOID ? this.x4s_1 : commands;
    lvalues = lvalues === VOID ? this.y4s_1 : lvalues;
    rvalues = rvalues === VOID ? this.z4s_1 : rvalues;
    valuesListsIds = valuesListsIds === VOID ? this.a4t_1 : valuesListsIds;
    return $super === VOID ? this.e4t(name, code, vars, commands, lvalues, rvalues, valuesListsIds) : $super.e4t.call(this, name, code, vars, commands, lvalues, rvalues, valuesListsIds);
  }
  toString() {
    return 'CaosVariantData(name=' + this.u4s_1 + ', code=' + this.v4s_1 + ', vars=' + this.w4s_1.toString() + ', commands=' + toString(this.x4s_1) + ', lvalues=' + toString(this.y4s_1) + ', rvalues=' + toString(this.z4s_1) + ', valuesListsIds=' + toString(this.a4t_1) + ')';
  }
  static d4t(seen0, name, code, vars, commands, lvalues, rvalues, valuesListsIds, serializationConstructorMarker) {
    Companion_getInstance_7();
    if (!(63 === (63 & seen0))) {
      throwMissingFieldException(seen0, 63, $serializer_getInstance_5().s4s_1);
    }
    var $this = createThis(this);
    $this.u4s_1 = name;
    $this.v4s_1 = code;
    $this.w4s_1 = vars;
    $this.x4s_1 = commands;
    $this.y4s_1 = lvalues;
    $this.z4s_1 = rvalues;
    if (0 === (seen0 & 64)) {
      var tmp = $this;
      // Inline function 'kotlin.emptyArray' call
      tmp.a4t_1 = [];
    } else
      $this.a4t_1 = valuesListsIds;
    var tmp_0 = $this;
    tmp_0.b4t_1 = lazy_0(CaosVariantData$_init_$lambda_7brc0u($this));
    var tmp_1 = $this;
    tmp_1.c4t_1 = lazy_0(CaosVariantData$_init_$lambda_7brc0u_0($this));
    return $this;
  }
}
class Companion_8 {
  constructor() {
    Companion_instance_9 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    var tmp_1 = lazy(tmp_0, Commands$Companion$$childSerializers$_anonymous__37qrhe);
    var tmp_2 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    var tmp_3 = lazy(tmp_2, Commands$Companion$$childSerializers$_anonymous__37qrhe_0);
    var tmp_4 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.g4t_1 = [tmp_1, tmp_3, lazy(tmp_4, Commands$Companion$$childSerializers$_anonymous__37qrhe_1)];
  }
}
class $serializer_6 {
  constructor() {
    $serializer_instance_6 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('com.bedalton.creatures.caos.libstructs.Commands', this, 3);
    tmp0_serialDesc.w13('commands', false);
    tmp0_serialDesc.e13(new ProtoNumber(1));
    tmp0_serialDesc.w13('rvalues', false);
    tmp0_serialDesc.e13(new ProtoNumber(2));
    tmp0_serialDesc.w13('lvalues', false);
    tmp0_serialDesc.e13(new ProtoNumber(3));
    this.h4t_1 = tmp0_serialDesc;
  }
  i4t(encoder, value) {
    var tmp0_desc = this.h4t_1;
    var tmp1_output = encoder.bw(tmp0_desc);
    var tmp2_cached = Companion_getInstance_8().g4t_1;
    tmp1_output.tx(tmp0_desc, 0, tmp2_cached[0].k3(), value.commands);
    tmp1_output.tx(tmp0_desc, 1, tmp2_cached[1].k3(), value.rvalues);
    tmp1_output.tx(tmp0_desc, 2, tmp2_cached[2].k3(), value.lvalues);
    tmp1_output.cw(tmp0_desc);
  }
  mr(encoder, value) {
    return this.i4t(encoder, value instanceof Commands ? value : THROW_CCE());
  }
  nr(decoder) {
    var tmp0_desc = this.h4t_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_input = decoder.bw(tmp0_desc);
    var tmp8_cached = Companion_getInstance_8().g4t_1;
    if (tmp7_input.sw()) {
      tmp4_local0 = tmp7_input.nw(tmp0_desc, 0, tmp8_cached[0].k3(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp7_input.nw(tmp0_desc, 1, tmp8_cached[1].k3(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp7_input.nw(tmp0_desc, 2, tmp8_cached[2].k3(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp7_input.tw(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp7_input.nw(tmp0_desc, 0, tmp8_cached[0].k3(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp7_input.nw(tmp0_desc, 1, tmp8_cached[1].k3(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp7_input.nw(tmp0_desc, 2, tmp8_cached[2].k3(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          default:
            throw UnknownFieldException.et(tmp2_index);
        }
      }
    tmp7_input.cw(tmp0_desc);
    return Commands.j4t(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, null);
  }
  lr() {
    return this.h4t_1;
  }
  l14() {
    var tmp0_cached = Companion_getInstance_8().g4t_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [tmp0_cached[0].k3(), tmp0_cached[1].k3(), tmp0_cached[2].k3()];
  }
}
class Commands {
  constructor(commands, rvalues, lvalues) {
    Companion_getInstance_8();
    this.commands = commands;
    this.rvalues = rvalues;
    this.lvalues = lvalues;
  }
  k4t() {
    return this.commands;
  }
  l4t() {
    return this.rvalues;
  }
  m4t() {
    return this.lvalues;
  }
  equals(other) {
    if (this === other)
      return true;
    if (!(other instanceof Commands))
      return false;
    if (!contentEquals(this.commands, other.commands))
      return false;
    if (!contentEquals(this.rvalues, other.rvalues))
      return false;
    if (!contentEquals(this.lvalues, other.lvalues))
      return false;
    return true;
  }
  hashCode() {
    var result = contentHashCode(this.commands);
    result = imul(31, result) + contentHashCode(this.rvalues) | 0;
    result = imul(31, result) + contentHashCode(this.lvalues) | 0;
    return result;
  }
  toString() {
    return 'Commands(commands=' + toString(this.commands) + ', rvalues=' + toString(this.rvalues) + ', lvalues=' + toString(this.lvalues) + ')';
  }
  static j4t(seen0, commands, rvalues, lvalues, serializationConstructorMarker) {
    Companion_getInstance_8();
    if (!(7 === (7 & seen0))) {
      throwMissingFieldException(seen0, 7, $serializer_getInstance_6().h4t_1);
    }
    var $this = createThis(this);
    $this.commands = commands;
    $this.rvalues = rvalues;
    $this.lvalues = lvalues;
    return $this;
  }
}
class HasGetterImpl {
  constructor(getter) {
    this.n4t_1 = getter;
  }
  r3(key) {
    return this.n4t_1(key);
  }
  get(key) {
    return this.r3(key);
  }
}
class Companion_9 {
  constructor() {
    Companion_instance_10 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    var tmp_1 = lazy(tmp_0, VariantCaosCommand$Companion$$childSerializers$_anonymous__495hkq);
    var tmp_2 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    var tmp_3 = lazy(tmp_2, VariantCaosCommand$Companion$$childSerializers$_anonymous__495hkq_0);
    var tmp_4 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.r4t_1 = [null, tmp_1, null, null, null, null, null, tmp_3, null, null, lazy(tmp_4, VariantCaosCommand$Companion$$childSerializers$_anonymous__495hkq_1), null, null, null, null, null, null];
  }
}
class $serializer_7 {
  constructor() {
    $serializer_instance_7 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('com.bedalton.creatures.caos.libstructs.VariantCaosCommand', this, 17);
    tmp0_serialDesc.w13('command', false);
    tmp0_serialDesc.e13(new ProtoNumber(1));
    tmp0_serialDesc.w13('parameters', false);
    tmp0_serialDesc.e13(new ProtoNumber(2));
    tmp0_serialDesc.w13('isLvalue', false);
    tmp0_serialDesc.e13(new ProtoNumber(3));
    tmp0_serialDesc.w13('isRvalue', false);
    tmp0_serialDesc.e13(new ProtoNumber(4));
    tmp0_serialDesc.w13('isCommand', true);
    tmp0_serialDesc.e13(new ProtoNumber(5));
    tmp0_serialDesc.w13('returnTypeId', false);
    tmp0_serialDesc.e13(new ProtoNumber(6));
    tmp0_serialDesc.w13('returnTypeName', false);
    tmp0_serialDesc.e13(new ProtoNumber(7));
    tmp0_serialDesc.w13('variants', false);
    tmp0_serialDesc.e13(new ProtoNumber(8));
    tmp0_serialDesc.w13('description', false);
    tmp0_serialDesc.e13(new ProtoNumber(9));
    tmp0_serialDesc.w13('lvalueName', true);
    tmp0_serialDesc.e13(new ProtoNumber(10));
    tmp0_serialDesc.w13('returnValuesListIds', true);
    tmp0_serialDesc.e13(new ProtoNumber(11));
    tmp0_serialDesc.w13('requiresOwnr', true);
    tmp0_serialDesc.e13(new ProtoNumber(12));
    tmp0_serialDesc.w13('commandGroup', false);
    tmp0_serialDesc.e13(new ProtoNumber(13));
    tmp0_serialDesc.w13('doifFormat', true);
    tmp0_serialDesc.e13(new ProtoNumber(14));
    tmp0_serialDesc.w13('requiresCreatureOwnr', true);
    tmp0_serialDesc.e13(new ProtoNumber(15));
    tmp0_serialDesc.w13('tokens', false);
    tmp0_serialDesc.e13(new ProtoNumber(16));
    tmp0_serialDesc.w13('ceOnly', false);
    tmp0_serialDesc.e13(new ProtoNumber(17));
    this.s4t_1 = tmp0_serialDesc;
  }
  t4t(encoder, value) {
    var tmp0_desc = this.s4t_1;
    var tmp1_output = encoder.bw(tmp0_desc);
    var tmp2_cached = Companion_getInstance_9().r4t_1;
    tmp1_output.rx(tmp0_desc, 0, value.command);
    tmp1_output.tx(tmp0_desc, 1, tmp2_cached[1].k3(), value.parameters);
    tmp1_output.jx(tmp0_desc, 2, value.isLvalue);
    tmp1_output.jx(tmp0_desc, 3, value.isRvalue);
    if (tmp1_output.zx(tmp0_desc, 4) ? true : !(value.isCommand === !(value.isRvalue || value.isLvalue))) {
      tmp1_output.jx(tmp0_desc, 4, value.isCommand);
    }
    tmp1_output.mx(tmp0_desc, 5, value.returnTypeId);
    tmp1_output.rx(tmp0_desc, 6, value.returnTypeName);
    tmp1_output.tx(tmp0_desc, 7, tmp2_cached[7].k3(), value.variants);
    tmp1_output.vx(tmp0_desc, 8, StringSerializer_getInstance(), value.description);
    if (tmp1_output.zx(tmp0_desc, 9) ? true : !(value.lvalueName == null)) {
      tmp1_output.vx(tmp0_desc, 9, StringSerializer_getInstance(), value.lvalueName);
    }
    if (tmp1_output.zx(tmp0_desc, 10) ? true : !(value.returnValuesListIds == null)) {
      tmp1_output.vx(tmp0_desc, 10, tmp2_cached[10].k3(), value.returnValuesListIds);
    }
    if (tmp1_output.zx(tmp0_desc, 11) ? true : !(value.requiresOwnr === 0)) {
      tmp1_output.mx(tmp0_desc, 11, value.requiresOwnr);
    }
    tmp1_output.rx(tmp0_desc, 12, value.commandGroup);
    if (tmp1_output.zx(tmp0_desc, 13) ? true : !(value.doifFormat == null)) {
      tmp1_output.vx(tmp0_desc, 13, StringSerializer_getInstance(), value.doifFormat);
    }
    if (tmp1_output.zx(tmp0_desc, 14) ? true : !(value.requiresCreatureOwnr === false)) {
      tmp1_output.jx(tmp0_desc, 14, value.requiresCreatureOwnr);
    }
    tmp1_output.tx(tmp0_desc, 15, IntArraySerializer_getInstance(), value.tokens);
    tmp1_output.jx(tmp0_desc, 16, value.ceOnly);
    tmp1_output.cw(tmp0_desc);
  }
  mr(encoder, value) {
    return this.t4t(encoder, value instanceof ICaosCommand ? value : THROW_CCE());
  }
  nr(decoder) {
    var tmp0_desc = this.s4t_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = false;
    var tmp7_local3 = false;
    var tmp8_local4 = false;
    var tmp9_local5 = 0;
    var tmp10_local6 = null;
    var tmp11_local7 = null;
    var tmp12_local8 = null;
    var tmp13_local9 = null;
    var tmp14_local10 = null;
    var tmp15_local11 = 0;
    var tmp16_local12 = null;
    var tmp17_local13 = null;
    var tmp18_local14 = false;
    var tmp19_local15 = null;
    var tmp20_local16 = false;
    var tmp21_input = decoder.bw(tmp0_desc);
    var tmp22_cached = Companion_getInstance_9().r4t_1;
    if (tmp21_input.sw()) {
      tmp4_local0 = tmp21_input.lw(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp21_input.nw(tmp0_desc, 1, tmp22_cached[1].k3(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp21_input.dw(tmp0_desc, 2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp21_input.dw(tmp0_desc, 3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp21_input.dw(tmp0_desc, 4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp9_local5 = tmp21_input.gw(tmp0_desc, 5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
      tmp10_local6 = tmp21_input.lw(tmp0_desc, 6);
      tmp3_bitMask0 = tmp3_bitMask0 | 64;
      tmp11_local7 = tmp21_input.nw(tmp0_desc, 7, tmp22_cached[7].k3(), tmp11_local7);
      tmp3_bitMask0 = tmp3_bitMask0 | 128;
      tmp12_local8 = tmp21_input.pw(tmp0_desc, 8, StringSerializer_getInstance(), tmp12_local8);
      tmp3_bitMask0 = tmp3_bitMask0 | 256;
      tmp13_local9 = tmp21_input.pw(tmp0_desc, 9, StringSerializer_getInstance(), tmp13_local9);
      tmp3_bitMask0 = tmp3_bitMask0 | 512;
      tmp14_local10 = tmp21_input.pw(tmp0_desc, 10, tmp22_cached[10].k3(), tmp14_local10);
      tmp3_bitMask0 = tmp3_bitMask0 | 1024;
      tmp15_local11 = tmp21_input.gw(tmp0_desc, 11);
      tmp3_bitMask0 = tmp3_bitMask0 | 2048;
      tmp16_local12 = tmp21_input.lw(tmp0_desc, 12);
      tmp3_bitMask0 = tmp3_bitMask0 | 4096;
      tmp17_local13 = tmp21_input.pw(tmp0_desc, 13, StringSerializer_getInstance(), tmp17_local13);
      tmp3_bitMask0 = tmp3_bitMask0 | 8192;
      tmp18_local14 = tmp21_input.dw(tmp0_desc, 14);
      tmp3_bitMask0 = tmp3_bitMask0 | 16384;
      tmp19_local15 = tmp21_input.nw(tmp0_desc, 15, IntArraySerializer_getInstance(), tmp19_local15);
      tmp3_bitMask0 = tmp3_bitMask0 | 32768;
      tmp20_local16 = tmp21_input.dw(tmp0_desc, 16);
      tmp3_bitMask0 = tmp3_bitMask0 | 65536;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp21_input.tw(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp21_input.lw(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp21_input.nw(tmp0_desc, 1, tmp22_cached[1].k3(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp21_input.dw(tmp0_desc, 2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp21_input.dw(tmp0_desc, 3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp21_input.dw(tmp0_desc, 4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp9_local5 = tmp21_input.gw(tmp0_desc, 5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          case 6:
            tmp10_local6 = tmp21_input.lw(tmp0_desc, 6);
            tmp3_bitMask0 = tmp3_bitMask0 | 64;
            break;
          case 7:
            tmp11_local7 = tmp21_input.nw(tmp0_desc, 7, tmp22_cached[7].k3(), tmp11_local7);
            tmp3_bitMask0 = tmp3_bitMask0 | 128;
            break;
          case 8:
            tmp12_local8 = tmp21_input.pw(tmp0_desc, 8, StringSerializer_getInstance(), tmp12_local8);
            tmp3_bitMask0 = tmp3_bitMask0 | 256;
            break;
          case 9:
            tmp13_local9 = tmp21_input.pw(tmp0_desc, 9, StringSerializer_getInstance(), tmp13_local9);
            tmp3_bitMask0 = tmp3_bitMask0 | 512;
            break;
          case 10:
            tmp14_local10 = tmp21_input.pw(tmp0_desc, 10, tmp22_cached[10].k3(), tmp14_local10);
            tmp3_bitMask0 = tmp3_bitMask0 | 1024;
            break;
          case 11:
            tmp15_local11 = tmp21_input.gw(tmp0_desc, 11);
            tmp3_bitMask0 = tmp3_bitMask0 | 2048;
            break;
          case 12:
            tmp16_local12 = tmp21_input.lw(tmp0_desc, 12);
            tmp3_bitMask0 = tmp3_bitMask0 | 4096;
            break;
          case 13:
            tmp17_local13 = tmp21_input.pw(tmp0_desc, 13, StringSerializer_getInstance(), tmp17_local13);
            tmp3_bitMask0 = tmp3_bitMask0 | 8192;
            break;
          case 14:
            tmp18_local14 = tmp21_input.dw(tmp0_desc, 14);
            tmp3_bitMask0 = tmp3_bitMask0 | 16384;
            break;
          case 15:
            tmp19_local15 = tmp21_input.nw(tmp0_desc, 15, IntArraySerializer_getInstance(), tmp19_local15);
            tmp3_bitMask0 = tmp3_bitMask0 | 32768;
            break;
          case 16:
            tmp20_local16 = tmp21_input.dw(tmp0_desc, 16);
            tmp3_bitMask0 = tmp3_bitMask0 | 65536;
            break;
          default:
            throw UnknownFieldException.et(tmp2_index);
        }
      }
    tmp21_input.cw(tmp0_desc);
    return ICaosCommand.u4t(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, tmp10_local6, tmp11_local7, tmp12_local8, tmp13_local9, tmp14_local10, tmp15_local11, tmp16_local12, tmp17_local13, tmp18_local14, tmp19_local15, tmp20_local16, null);
  }
  lr() {
    return this.s4t_1;
  }
  l14() {
    var tmp0_cached = Companion_getInstance_9().r4t_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), tmp0_cached[1].k3(), BooleanSerializer_getInstance(), BooleanSerializer_getInstance(), BooleanSerializer_getInstance(), IntSerializer_getInstance(), StringSerializer_getInstance(), tmp0_cached[7].k3(), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(tmp0_cached[10].k3()), IntSerializer_getInstance(), StringSerializer_getInstance(), get_nullable(StringSerializer_getInstance()), BooleanSerializer_getInstance(), IntArraySerializer_getInstance(), BooleanSerializer_getInstance()];
  }
}
class ICaosCommand {
  constructor(command, parameters, isLvalue, isRvalue, isCommand, returnTypeId, returnTypeName, variants, description, lvalueName, returnValuesListIds, requiresOwnr, commandGroup, doifFormat, requiresCreatureOwnr, tokens, ceOnly) {
    Companion_getInstance_9();
    isCommand = isCommand === VOID ? !(isRvalue || isLvalue) : isCommand;
    lvalueName = lvalueName === VOID ? null : lvalueName;
    returnValuesListIds = returnValuesListIds === VOID ? null : returnValuesListIds;
    requiresOwnr = requiresOwnr === VOID ? 0 : requiresOwnr;
    doifFormat = doifFormat === VOID ? null : doifFormat;
    requiresCreatureOwnr = requiresCreatureOwnr === VOID ? false : requiresCreatureOwnr;
    this.command = command;
    this.parameters = parameters;
    this.isLvalue = isLvalue;
    this.isRvalue = isRvalue;
    this.isCommand = isCommand;
    this.returnTypeId = returnTypeId;
    this.returnTypeName = returnTypeName;
    this.variants = variants;
    this.description = description;
    this.lvalueName = lvalueName;
    this.returnValuesListIds = returnValuesListIds;
    this.requiresOwnr = requiresOwnr;
    this.commandGroup = commandGroup;
    this.doifFormat = doifFormat;
    this.requiresCreatureOwnr = requiresCreatureOwnr;
    this.tokens = tokens;
    this.ceOnly = ceOnly;
  }
  g1s() {
    return this.command;
  }
  v4t() {
    return this.parameters;
  }
  w4t() {
    return this.isLvalue;
  }
  x4t() {
    return this.isRvalue;
  }
  d4q() {
    return this.isCommand;
  }
  y4t() {
    return this.returnTypeId;
  }
  z4t() {
    return this.returnTypeName;
  }
  a4u() {
    return this.variants;
  }
  y4q() {
    return this.description;
  }
  b4u() {
    return this.lvalueName;
  }
  c4u() {
    return this.returnValuesListIds;
  }
  d4u() {
    return this.requiresOwnr;
  }
  e4u() {
    return this.commandGroup;
  }
  f4u() {
    return this.doifFormat;
  }
  g4u() {
    return this.requiresCreatureOwnr;
  }
  j1s() {
    return this.tokens;
  }
  h4u() {
    return this.ceOnly;
  }
  i4u() {
    return singleOrNull(this.tokens);
  }
  equals(other) {
    if (this === other)
      return true;
    if (!(other instanceof ICaosCommand))
      return false;
    if (!(this.command === other.command))
      return false;
    if (!contentEquals(this.parameters, other.parameters))
      return false;
    if (!(this.isLvalue === other.isLvalue))
      return false;
    if (!(this.isRvalue === other.isRvalue))
      return false;
    if (!(this.isCommand === other.isCommand))
      return false;
    if (!(this.returnTypeId === other.returnTypeId))
      return false;
    if (!(this.returnTypeName === other.returnTypeName))
      return false;
    if (!contentEquals(this.variants, other.variants))
      return false;
    if (!(this.description == other.description))
      return false;
    if (!(this.lvalueName == other.lvalueName))
      return false;
    if (!equals(this.returnValuesListIds, other.returnValuesListIds))
      return false;
    if (!(this.requiresOwnr === other.requiresOwnr))
      return false;
    if (!(this.commandGroup === other.commandGroup))
      return false;
    if (!(this.doifFormat == other.doifFormat))
      return false;
    if (!(this.requiresCreatureOwnr === other.requiresCreatureOwnr))
      return false;
    if (!(this.ceOnly === other.ceOnly))
      return false;
    return true;
  }
  hashCode() {
    var result = getStringHashCode(this.command);
    result = imul(31, result) + contentHashCode(this.parameters) | 0;
    result = imul(31, result) + getBooleanHashCode(this.isLvalue) | 0;
    result = imul(31, result) + getBooleanHashCode(this.isRvalue) | 0;
    result = imul(31, result) + getBooleanHashCode(this.isCommand) | 0;
    result = imul(31, result) + this.returnTypeId | 0;
    result = imul(31, result) + getStringHashCode(this.returnTypeName) | 0;
    result = imul(31, result) + contentHashCode(this.variants) | 0;
    var tmp = imul(31, result);
    var tmp0_safe_receiver = this.description;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : getStringHashCode(tmp0_safe_receiver);
    result = tmp + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
    var tmp_0 = imul(31, result);
    var tmp2_safe_receiver = this.lvalueName;
    var tmp3_elvis_lhs = tmp2_safe_receiver == null ? null : getStringHashCode(tmp2_safe_receiver);
    result = tmp_0 + (tmp3_elvis_lhs == null ? 0 : tmp3_elvis_lhs) | 0;
    var tmp_1 = imul(31, result);
    var tmp4_safe_receiver = this.returnValuesListIds;
    var tmp5_elvis_lhs = tmp4_safe_receiver == null ? null : tmp4_safe_receiver.hashCode();
    result = tmp_1 + (tmp5_elvis_lhs == null ? 0 : tmp5_elvis_lhs) | 0;
    result = imul(31, result) + this.requiresOwnr | 0;
    result = imul(31, result) + getStringHashCode(this.commandGroup) | 0;
    var tmp_2 = imul(31, result);
    var tmp6_safe_receiver = this.doifFormat;
    var tmp7_elvis_lhs = tmp6_safe_receiver == null ? null : getStringHashCode(tmp6_safe_receiver);
    result = tmp_2 + (tmp7_elvis_lhs == null ? 0 : tmp7_elvis_lhs) | 0;
    result = imul(31, result) + getBooleanHashCode(this.requiresCreatureOwnr) | 0;
    result = imul(31, result) + getBooleanHashCode(this.ceOnly) | 0;
    return result;
  }
  j4u(command, parameters, isLvalue, isRvalue, isCommand, returnTypeId, returnTypeName, variants, description, lvalueName, returnValuesListIds, requiresOwnr, commandGroup, doifFormat, requiresCreatureOwnr, tokens, ceOnly) {
    return new ICaosCommand(command, parameters, isLvalue, isRvalue, isCommand, returnTypeId, returnTypeName, variants, description, lvalueName, returnValuesListIds, requiresOwnr, commandGroup, doifFormat, requiresCreatureOwnr, tokens, ceOnly);
  }
  k4u(command, parameters, isLvalue, isRvalue, isCommand, returnTypeId, returnTypeName, variants, description, lvalueName, returnValuesListIds, requiresOwnr, commandGroup, doifFormat, requiresCreatureOwnr, tokens, ceOnly, $super) {
    command = command === VOID ? this.command : command;
    parameters = parameters === VOID ? this.parameters : parameters;
    isLvalue = isLvalue === VOID ? this.isLvalue : isLvalue;
    isRvalue = isRvalue === VOID ? this.isRvalue : isRvalue;
    isCommand = isCommand === VOID ? this.isCommand : isCommand;
    returnTypeId = returnTypeId === VOID ? this.returnTypeId : returnTypeId;
    returnTypeName = returnTypeName === VOID ? this.returnTypeName : returnTypeName;
    variants = variants === VOID ? this.variants : variants;
    description = description === VOID ? this.description : description;
    lvalueName = lvalueName === VOID ? this.lvalueName : lvalueName;
    returnValuesListIds = returnValuesListIds === VOID ? this.returnValuesListIds : returnValuesListIds;
    requiresOwnr = requiresOwnr === VOID ? this.requiresOwnr : requiresOwnr;
    commandGroup = commandGroup === VOID ? this.commandGroup : commandGroup;
    doifFormat = doifFormat === VOID ? this.doifFormat : doifFormat;
    requiresCreatureOwnr = requiresCreatureOwnr === VOID ? this.requiresCreatureOwnr : requiresCreatureOwnr;
    tokens = tokens === VOID ? this.tokens : tokens;
    ceOnly = ceOnly === VOID ? this.ceOnly : ceOnly;
    return $super === VOID ? this.j4u(command, parameters, isLvalue, isRvalue, isCommand, returnTypeId, returnTypeName, variants, description, lvalueName, returnValuesListIds, requiresOwnr, commandGroup, doifFormat, requiresCreatureOwnr, tokens, ceOnly) : $super.j4u.call(this, command, parameters, isLvalue, isRvalue, isCommand, returnTypeId, returnTypeName, variants, description, lvalueName, returnValuesListIds, requiresOwnr, commandGroup, doifFormat, requiresCreatureOwnr, tokens, ceOnly);
  }
  toString() {
    return 'VariantCaosCommand(command=' + this.command + ', parameters=' + toString(this.parameters) + ', isLvalue=' + this.isLvalue + ', isRvalue=' + this.isRvalue + ', isCommand=' + this.isCommand + ', returnTypeId=' + this.returnTypeId + ', returnTypeName=' + this.returnTypeName + ', variants=' + toString(this.variants) + ', description=' + this.description + ', lvalueName=' + this.lvalueName + ', returnValuesListIds=' + toString_0(this.returnValuesListIds) + ', requiresOwnr=' + this.requiresOwnr + ', commandGroup=' + this.commandGroup + ', doifFormat=' + this.doifFormat + ', requiresCreatureOwnr=' + this.requiresCreatureOwnr + ', tokens=' + toString(this.tokens) + ', ceOnly=' + this.ceOnly + ')';
  }
  static u4t(seen0, command, parameters, isLvalue, isRvalue, isCommand, returnTypeId, returnTypeName, variants, description, lvalueName, returnValuesListIds, requiresOwnr, commandGroup, doifFormat, requiresCreatureOwnr, tokens, ceOnly, serializationConstructorMarker) {
    Companion_getInstance_9();
    if (!(102895 === (102895 & seen0))) {
      throwMissingFieldException(seen0, 102895, $serializer_getInstance_7().s4t_1);
    }
    var $this = createThis(this);
    $this.command = command;
    $this.parameters = parameters;
    $this.isLvalue = isLvalue;
    $this.isRvalue = isRvalue;
    if (0 === (seen0 & 16))
      $this.isCommand = !($this.isRvalue || $this.isLvalue);
    else
      $this.isCommand = isCommand;
    $this.returnTypeId = returnTypeId;
    $this.returnTypeName = returnTypeName;
    $this.variants = variants;
    $this.description = description;
    if (0 === (seen0 & 512))
      $this.lvalueName = null;
    else
      $this.lvalueName = lvalueName;
    if (0 === (seen0 & 1024))
      $this.returnValuesListIds = null;
    else
      $this.returnValuesListIds = returnValuesListIds;
    if (0 === (seen0 & 2048))
      $this.requiresOwnr = 0;
    else
      $this.requiresOwnr = requiresOwnr;
    $this.commandGroup = commandGroup;
    if (0 === (seen0 & 8192))
      $this.doifFormat = null;
    else
      $this.doifFormat = doifFormat;
    if (0 === (seen0 & 16384))
      $this.requiresCreatureOwnr = false;
    else
      $this.requiresCreatureOwnr = requiresCreatureOwnr;
    $this.tokens = tokens;
    $this.ceOnly = ceOnly;
    return $this;
  }
}
class Companion_10 {}
class $serializer_8 {
  constructor() {
    $serializer_instance_8 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('com.bedalton.creatures.caos.libstructs.VariantCaosParameter', this, 5);
    tmp0_serialDesc.w13('index', false);
    tmp0_serialDesc.e13(new ProtoNumber(1));
    tmp0_serialDesc.w13('name', false);
    tmp0_serialDesc.e13(new ProtoNumber(2));
    tmp0_serialDesc.w13('typeId', false);
    tmp0_serialDesc.e13(new ProtoNumber(3));
    tmp0_serialDesc.w13('typeName', false);
    tmp0_serialDesc.e13(new ProtoNumber(4));
    tmp0_serialDesc.w13('valuesListId', true);
    tmp0_serialDesc.e13(new ProtoNumber(5));
    this.l4u_1 = tmp0_serialDesc;
  }
  m4u(encoder, value) {
    var tmp0_desc = this.l4u_1;
    var tmp1_output = encoder.bw(tmp0_desc);
    tmp1_output.mx(tmp0_desc, 0, value.index);
    tmp1_output.rx(tmp0_desc, 1, value.name);
    tmp1_output.mx(tmp0_desc, 2, value.typeId);
    tmp1_output.rx(tmp0_desc, 3, value.type);
    if (tmp1_output.zx(tmp0_desc, 4) ? true : !(value.valuesListId == null)) {
      tmp1_output.vx(tmp0_desc, 4, IntSerializer_getInstance(), value.valuesListId);
    }
    tmp1_output.cw(tmp0_desc);
  }
  mr(encoder, value) {
    return this.m4u(encoder, value instanceof ICaosParameter ? value : THROW_CCE());
  }
  nr(decoder) {
    var tmp0_desc = this.l4u_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = 0;
    var tmp5_local1 = null;
    var tmp6_local2 = 0;
    var tmp7_local3 = null;
    var tmp8_local4 = null;
    var tmp9_input = decoder.bw(tmp0_desc);
    if (tmp9_input.sw()) {
      tmp4_local0 = tmp9_input.gw(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp9_input.lw(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp9_input.gw(tmp0_desc, 2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp9_input.lw(tmp0_desc, 3);
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
            tmp4_local0 = tmp9_input.gw(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp9_input.lw(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp9_input.gw(tmp0_desc, 2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp9_input.lw(tmp0_desc, 3);
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
    return ICaosParameter.n4u(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, null);
  }
  lr() {
    return this.l4u_1;
  }
  l14() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [IntSerializer_getInstance(), StringSerializer_getInstance(), IntSerializer_getInstance(), StringSerializer_getInstance(), get_nullable(IntSerializer_getInstance())];
  }
}
class ICaosParameter {
  static o4u(index, name, typeId, typeName, valuesListId) {
    valuesListId = valuesListId === VOID ? null : valuesListId;
    var $this = createThis(this);
    $this.index = index;
    $this.name = name;
    $this.typeId = typeId;
    $this.type = typeName;
    $this.valuesListId = valuesListId;
    return $this;
  }
  y1r() {
    return this.index;
  }
  o() {
    return this.name;
  }
  w4q() {
    return this.typeId;
  }
  x1r() {
    return this.type;
  }
  p4u() {
    return this.valuesListId;
  }
  static q4u(parameter, variant) {
    var tmp = parameter.x1r().simpleName;
    var tmp0_safe_receiver = parameter.valuesListIds;
    return this.o4u(parameter.index, parameter.name, parameter.typeId, tmp, tmp0_safe_receiver == null ? null : tmp0_safe_receiver.r3(variant));
  }
  toString() {
    return 'VariantCaosParameter(index=' + this.index + ', name=' + this.name + ', typeId=' + this.typeId + ', typeName=' + this.type + ', valuesListId=' + this.valuesListId + ')';
  }
  hashCode() {
    var result = this.index;
    result = imul(result, 31) + getStringHashCode(this.name) | 0;
    result = imul(result, 31) + this.typeId | 0;
    result = imul(result, 31) + getStringHashCode(this.type) | 0;
    result = imul(result, 31) + (this.valuesListId == null ? 0 : this.valuesListId) | 0;
    return result;
  }
  equals(other) {
    if (this === other)
      return true;
    if (!(other instanceof ICaosParameter))
      return false;
    if (!(this.index === other.index))
      return false;
    if (!(this.name === other.name))
      return false;
    if (!(this.typeId === other.typeId))
      return false;
    if (!(this.type === other.type))
      return false;
    if (!(this.valuesListId == other.valuesListId))
      return false;
    return true;
  }
  static n4u(seen0, index, name, typeId, typeName, valuesListId, serializationConstructorMarker) {
    if (!(15 === (15 & seen0))) {
      throwMissingFieldException(seen0, 15, $serializer_getInstance_8().l4u_1);
    }
    var $this = createThis(this);
    $this.index = index;
    $this.name = name;
    $this.typeId = typeId;
    $this.type = typeName;
    if (0 === (seen0 & 16))
      $this.valuesListId = null;
    else
      $this.valuesListId = valuesListId;
    return $this;
  }
}
class Companion_11 {
  constructor() {
    Companion_instance_12 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('com.bedalton.creatures.caos.libstructs.VariantData', null, 6);
    tmp0_serialDesc.w13('C1', true);
    tmp0_serialDesc.w13('C2', true);
    tmp0_serialDesc.w13('CV', true);
    tmp0_serialDesc.w13('C3', true);
    tmp0_serialDesc.w13('DS', true);
    tmp0_serialDesc.w13('SM', true);
    this.r4u_1 = tmp0_serialDesc;
  }
  s4u(typeSerial0) {
    return $serializer_9.q4t(typeSerial0);
  }
  y14(typeParamsSerializers) {
    return this.s4u(typeParamsSerializers[0]);
  }
}
class $serializer_9 {
  static t4u() {
    var $this = createThis(this);
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('com.bedalton.creatures.caos.libstructs.VariantData', $this, 6);
    tmp0_serialDesc.w13('C1', true);
    tmp0_serialDesc.e13(new ProtoNumber(1));
    tmp0_serialDesc.w13('C2', true);
    tmp0_serialDesc.e13(new ProtoNumber(2));
    tmp0_serialDesc.w13('CV', true);
    tmp0_serialDesc.e13(new ProtoNumber(3));
    tmp0_serialDesc.w13('C3', true);
    tmp0_serialDesc.e13(new ProtoNumber(4));
    tmp0_serialDesc.w13('DS', true);
    tmp0_serialDesc.e13(new ProtoNumber(5));
    tmp0_serialDesc.w13('SM', true);
    tmp0_serialDesc.e13(new ProtoNumber(6));
    $this.o4t_1 = tmp0_serialDesc;
    return $this;
  }
  u4u(encoder, value) {
    var tmp0_desc = this.o4t_1;
    var tmp1_output = encoder.bw(tmp0_desc);
    if (tmp1_output.zx(tmp0_desc, 0) ? true : !(value.C1 == null)) {
      tmp1_output.vx(tmp0_desc, 0, this.p4t_1, value.C1);
    }
    if (tmp1_output.zx(tmp0_desc, 1) ? true : !(value.C2 == null)) {
      tmp1_output.vx(tmp0_desc, 1, this.p4t_1, value.C2);
    }
    if (tmp1_output.zx(tmp0_desc, 2) ? true : !(value.CV == null)) {
      tmp1_output.vx(tmp0_desc, 2, this.p4t_1, value.CV);
    }
    if (tmp1_output.zx(tmp0_desc, 3) ? true : !(value.C3 == null)) {
      tmp1_output.vx(tmp0_desc, 3, this.p4t_1, value.C3);
    }
    if (tmp1_output.zx(tmp0_desc, 4) ? true : !(value.DS == null)) {
      tmp1_output.vx(tmp0_desc, 4, this.p4t_1, value.DS);
    }
    if (tmp1_output.zx(tmp0_desc, 5) ? true : !(value.SM == null)) {
      tmp1_output.vx(tmp0_desc, 5, this.p4t_1, value.SM);
    }
    tmp1_output.cw(tmp0_desc);
  }
  mr(encoder, value) {
    return this.u4u(encoder, value instanceof VariantData ? value : THROW_CCE());
  }
  nr(decoder) {
    var tmp0_desc = this.o4t_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_local4 = null;
    var tmp9_local5 = null;
    var tmp10_input = decoder.bw(tmp0_desc);
    if (tmp10_input.sw()) {
      tmp4_local0 = tmp10_input.pw(tmp0_desc, 0, this.p4t_1, tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp10_input.pw(tmp0_desc, 1, this.p4t_1, tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp10_input.pw(tmp0_desc, 2, this.p4t_1, tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp10_input.pw(tmp0_desc, 3, this.p4t_1, tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp10_input.pw(tmp0_desc, 4, this.p4t_1, tmp8_local4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp9_local5 = tmp10_input.pw(tmp0_desc, 5, this.p4t_1, tmp9_local5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp10_input.tw(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp10_input.pw(tmp0_desc, 0, this.p4t_1, tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp10_input.pw(tmp0_desc, 1, this.p4t_1, tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp10_input.pw(tmp0_desc, 2, this.p4t_1, tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp10_input.pw(tmp0_desc, 3, this.p4t_1, tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp10_input.pw(tmp0_desc, 4, this.p4t_1, tmp8_local4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp9_local5 = tmp10_input.pw(tmp0_desc, 5, this.p4t_1, tmp9_local5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          default:
            throw UnknownFieldException.et(tmp2_index);
        }
      }
    tmp10_input.cw(tmp0_desc);
    return VariantData.v4u(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, null);
  }
  lr() {
    return this.o4t_1;
  }
  l14() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(this.p4t_1), get_nullable(this.p4t_1), get_nullable(this.p4t_1), get_nullable(this.p4t_1), get_nullable(this.p4t_1), get_nullable(this.p4t_1)];
  }
  m14() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [this.p4t_1];
  }
  static q4t(typeSerial0) {
    var $this = this.t4u();
    $this.p4t_1 = typeSerial0;
    return $this;
  }
}
class VariantData {
  static w4u(C1, C2, CV, C3, DS, SM) {
    Companion_getInstance_11();
    C1 = C1 === VOID ? null : C1;
    C2 = C2 === VOID ? null : C2;
    CV = CV === VOID ? null : CV;
    C3 = C3 === VOID ? null : C3;
    DS = DS === VOID ? null : DS;
    SM = SM === VOID ? null : SM;
    var $this = createThis(this);
    $this.C1 = C1;
    $this.C2 = C2;
    $this.CV = CV;
    $this.C3 = C3;
    $this.DS = DS;
    $this.SM = SM;
    return $this;
  }
  x4u() {
    return this.C1;
  }
  y4u() {
    return this.C2;
  }
  z4u() {
    return this.CV;
  }
  a4v() {
    return this.C3;
  }
  b4v() {
    return this.DS;
  }
  c4v() {
    return this.SM;
  }
  static d4v(map) {
    Companion_getInstance_11();
    return this.w4u(map.r3('C1'), map.r3('C2'), map.r3('CV'), map.r3('C3'), map.r3('DS'), map.r3('SM'));
  }
  copyWithValueForVariantEnum(variant, value) {
    var tmp;
    if (variant.equals(C1_getInstance())) {
      tmp = this.e4v(value);
    } else if (variant.equals(C2_getInstance())) {
      tmp = this.e4v(VOID, value);
    } else if (variant.equals(CV_getInstance())) {
      tmp = this.e4v(VOID, VOID, value);
    } else if (variant.equals(C3_getInstance())) {
      tmp = this.e4v(VOID, VOID, VOID, value);
    } else if (variant.equals(DS_getInstance())) {
      tmp = this.e4v(VOID, VOID, VOID, VOID, value);
    } else if (variant.equals(SM_getInstance())) {
      tmp = this.e4v(VOID, VOID, VOID, VOID, VOID, value);
    } else {
      throw Exception.gc('Invalid variant');
    }
    return tmp;
  }
  valueForVariant(variant) {
    return variant.equals(C1_getInstance()) ? this.C1 : variant.equals(C2_getInstance()) ? this.C2 : variant.equals(CV_getInstance()) ? this.CV : variant.equals(C3_getInstance()) ? this.C3 : variant.equals(DS_getInstance()) ? this.DS : variant.equals(SM_getInstance()) ? this.SM : null;
  }
  kg(variant) {
    // Inline function 'kotlin.text.uppercase' call
    // Inline function 'kotlin.js.asDynamic' call
    switch (variant.toUpperCase()) {
      case 'C1':
        return this.C1;
      case 'C2':
        return this.C2;
      case 'CV':
        return this.CV;
      case 'C3':
        return this.C3;
      case 'DS':
        return this.DS;
      case 'SM':
        return this.SM;
      default:
        return null;
    }
  }
  f4v(C1, C2, CV, C3, DS, SM) {
    return VariantData.w4u(C1, C2, CV, C3, DS, SM);
  }
  e4v(C1, C2, CV, C3, DS, SM, $super) {
    C1 = C1 === VOID ? this.C1 : C1;
    C2 = C2 === VOID ? this.C2 : C2;
    CV = CV === VOID ? this.CV : CV;
    C3 = C3 === VOID ? this.C3 : C3;
    DS = DS === VOID ? this.DS : DS;
    SM = SM === VOID ? this.SM : SM;
    return $super === VOID ? this.f4v(C1, C2, CV, C3, DS, SM) : $super.f4v.call(this, C1, C2, CV, C3, DS, SM);
  }
  toString() {
    return 'VariantData(C1=' + toString_0(this.C1) + ', C2=' + toString_0(this.C2) + ', CV=' + toString_0(this.CV) + ', C3=' + toString_0(this.C3) + ', DS=' + toString_0(this.DS) + ', SM=' + toString_0(this.SM) + ')';
  }
  hashCode() {
    var result = this.C1 == null ? 0 : hashCode(this.C1);
    result = imul(result, 31) + (this.C2 == null ? 0 : hashCode(this.C2)) | 0;
    result = imul(result, 31) + (this.CV == null ? 0 : hashCode(this.CV)) | 0;
    result = imul(result, 31) + (this.C3 == null ? 0 : hashCode(this.C3)) | 0;
    result = imul(result, 31) + (this.DS == null ? 0 : hashCode(this.DS)) | 0;
    result = imul(result, 31) + (this.SM == null ? 0 : hashCode(this.SM)) | 0;
    return result;
  }
  equals(other) {
    if (this === other)
      return true;
    if (!(other instanceof VariantData))
      return false;
    if (!equals(this.C1, other.C1))
      return false;
    if (!equals(this.C2, other.C2))
      return false;
    if (!equals(this.CV, other.CV))
      return false;
    if (!equals(this.C3, other.C3))
      return false;
    if (!equals(this.DS, other.DS))
      return false;
    if (!equals(this.SM, other.SM))
      return false;
    return true;
  }
  static v4u(seen0, C1, C2, CV, C3, DS, SM, serializationConstructorMarker) {
    Companion_getInstance_11();
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, Companion_getInstance_11().r4u_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1))
      $this.C1 = null;
    else
      $this.C1 = C1;
    if (0 === (seen0 & 2))
      $this.C2 = null;
    else
      $this.C2 = C2;
    if (0 === (seen0 & 4))
      $this.CV = null;
    else
      $this.CV = CV;
    if (0 === (seen0 & 8))
      $this.C3 = null;
    else
      $this.C3 = C3;
    if (0 === (seen0 & 16))
      $this.DS = null;
    else
      $this.DS = DS;
    if (0 === (seen0 & 32))
      $this.SM = null;
    else
      $this.SM = SM;
    return $this;
  }
}
class sam$kotlin_Comparator$0 {
  constructor(function_0) {
    this.g4v_1 = function_0;
  }
  wg(a, b) {
    return this.g4v_1(a, b);
  }
  compare(a, b) {
    return this.wg(a, b);
  }
  f4() {
    return this.g4v_1;
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
//endregion
function CaosCommand$Companion$$childSerializers$_anonymous__psokld() {
  return new ReferenceArraySerializer(getKClass(CaosParameter), $serializer_getInstance_1());
}
function CaosCommand$Companion$$childSerializers$_anonymous__psokld_0() {
  return new LinkedHashMapSerializer(StringSerializer_getInstance(), IntSerializer_getInstance());
}
function CaosCommand$Companion$$childSerializers$_anonymous__psokld_1() {
  return new ReferenceArraySerializer(PrimitiveClasses_getInstance().je(), StringSerializer_getInstance());
}
var Companion_instance_0;
function Companion_getInstance() {
  if (Companion_instance_0 === VOID)
    new Companion();
  return Companion_instance_0;
}
var $serializer_instance;
function $serializer_getInstance() {
  if ($serializer_instance === VOID)
    new $serializer();
  return $serializer_instance;
}
function CaosCommand$tokens$delegate$lambda(this$0) {
  return () => {
    // Inline function 'kotlin.collections.map' call
    var this_0 = split(this$0.j4p_1, charArrayOf([_Char___init__impl__6a9atx(32)]));
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList.y1(collectionSizeOrDefault(this_0, 10));
    var _iterator__ex2g4s = this_0.w();
    while (_iterator__ex2g4s.x()) {
      var item = _iterator__ex2g4s.y();
      var tmp$ret$2 = token(item);
      destination.z1(tmp$ret$2);
    }
    return toIntArray(destination);
  };
}
function CaosCommand$_get_tokens_$ref_qlm063() {
  return (p0) => p0.j1s();
}
function CaosCommand$fullCommandHeader$delegate$lambda(this$0) {
  return () => {
    var commandHeader = formatNameWithType(this$0.j4p_1, this$0.b4q());
    var tmp;
    if (nullIfEmpty(this$0.k4p_1) == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      var builder = StringBuilder.we(commandHeader);
      var indexedObject = this$0.k4p_1;
      var inductionVariable = 0;
      var last = indexedObject.length;
      while (inductionVariable < last) {
        var parameter = indexedObject[inductionVariable];
        inductionVariable = inductionVariable + 1 | 0;
        builder.t(' ').t(formatNameWithType(parameter.name, parameter.x1r()));
      }
      tmp = builder.toString();
    }
    var tmp1_elvis_lhs = tmp;
    return tmp1_elvis_lhs == null ? commandHeader : tmp1_elvis_lhs;
  };
}
function CaosCommand$isCommand$delegate$lambda(this$0) {
  return () => !(this$0.q4p_1 || this$0.r4p_1);
}
function CaosCommand$_get_isCommand_$ref_j0upw() {
  return (p0) => p0.d4q();
}
function CaosCommand$_init_$lambda_fg2qzm(this$0) {
  return () => {
    // Inline function 'kotlin.collections.map' call
    var this_0 = split(this$0.j4p_1, charArrayOf([_Char___init__impl__6a9atx(32)]));
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList.y1(collectionSizeOrDefault(this_0, 10));
    var _iterator__ex2g4s = this_0.w();
    while (_iterator__ex2g4s.x()) {
      var item = _iterator__ex2g4s.y();
      var tmp$ret$2 = token(item);
      destination.z1(tmp$ret$2);
    }
    return toIntArray(destination);
  };
}
function CaosCommand$_init_$lambda_fg2qzm_0(this$0) {
  return () => {
    var commandHeader = formatNameWithType(this$0.j4p_1, this$0.b4q());
    var tmp;
    if (nullIfEmpty(this$0.k4p_1) == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      var builder = StringBuilder.we(commandHeader);
      var indexedObject = this$0.k4p_1;
      var inductionVariable = 0;
      var last = indexedObject.length;
      while (inductionVariable < last) {
        var parameter = indexedObject[inductionVariable];
        inductionVariable = inductionVariable + 1 | 0;
        builder.t(' ').t(formatNameWithType(parameter.name, parameter.x1r()));
      }
      tmp = builder.toString();
    }
    var tmp1_elvis_lhs = tmp;
    return tmp1_elvis_lhs == null ? commandHeader : tmp1_elvis_lhs;
  };
}
function CaosCommand$_init_$lambda_fg2qzm_1(this$0) {
  return () => !(this$0.q4p_1 || this$0.r4p_1);
}
function formatNameWithType(name, type) {
  // Inline function 'kotlin.let' call
  var simpleName = type.simpleName;
  return name + (charCodeAt(simpleName, 0) === _Char___init__impl__6a9atx(91) ? ' ' + simpleName : ' (' + simpleName + ')');
}
function CaosLibDefinitions$Companion$$childSerializers$_anonymous__fp73zn() {
  return new LinkedHashMapSerializer(StringSerializer_getInstance(), $serializer_getInstance());
}
function CaosLibDefinitions$Companion$$childSerializers$_anonymous__fp73zn_0() {
  return new LinkedHashMapSerializer(StringSerializer_getInstance(), $serializer_getInstance_5());
}
function CaosLibDefinitions$Companion$$childSerializers$_anonymous__fp73zn_1() {
  return new LinkedHashMapSerializer(StringSerializer_getInstance(), $serializer_getInstance_2());
}
var Companion_instance_1;
function Companion_getInstance_0() {
  if (Companion_instance_1 === VOID)
    new Companion_0();
  return Companion_instance_1;
}
var $serializer_instance_0;
function $serializer_getInstance_0() {
  if ($serializer_instance_0 === VOID)
    new $serializer_0();
  return $serializer_instance_0;
}
function CaosLibDefinitions$commandsById$delegate$lambda(this$0) {
  return () => {
    // Inline function 'kotlin.collections.map' call
    var this_0 = this$0.k4q_1;
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList.y1(this_0.b2());
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s = this_0.m2().w();
    while (_iterator__ex2g4s.x()) {
      var item = _iterator__ex2g4s.y();
      var tmp$ret$3 = to(toInt(item.j3()), item.k3());
      destination.z1(tmp$ret$3);
    }
    return toMap(destination);
  };
}
function CaosLibDefinitions$_get_commandsById_$ref_g2b0sn() {
  return (p0) => p0.p4q();
}
function CaosLibDefinitions$_init_$lambda_tfojde(this$0) {
  return () => {
    // Inline function 'kotlin.collections.map' call
    var this_0 = this$0.k4q_1;
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList.y1(this_0.b2());
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s = this_0.m2().w();
    while (_iterator__ex2g4s.x()) {
      var item = _iterator__ex2g4s.y();
      var tmp$ret$3 = to(toInt(item.j3()), item.k3());
      destination.z1(tmp$ret$3);
    }
    return toMap(destination);
  };
}
function CaosParameter$Companion$$childSerializers$_anonymous__oeh02l() {
  return new LinkedHashMapSerializer(StringSerializer_getInstance(), IntSerializer_getInstance());
}
var Companion_instance_2;
function Companion_getInstance_1() {
  if (Companion_instance_2 === VOID)
    new Companion_1();
  return Companion_instance_2;
}
var $serializer_instance_1;
function $serializer_getInstance_1() {
  if ($serializer_instance_1 === VOID)
    new $serializer_1();
  return $serializer_instance_1;
}
function CaosParameter$type$delegate$lambda(this$0) {
  return () => Companion_instance.fromIntValue(this$0.typeId);
}
function CaosParameter$_get_type_$ref_n5tl2b() {
  return (p0) => p0.x1r();
}
function CaosParameter$_init_$lambda_3besw4(this$0) {
  return () => Companion_instance.fromIntValue(this$0.typeId);
}
function _get_$cachedSerializer__te6jhj($this) {
  return $this.b4r_1.k3();
}
function CaosScriptVarTokenGroup$Companion$_anonymous__6yzde9() {
  var tmp = values();
  // Inline function 'kotlin.arrayOf' call
  // Inline function 'kotlin.js.unsafeCast' call
  // Inline function 'kotlin.js.asDynamic' call
  var tmp_0 = [null, null, null, null, null, null];
  // Inline function 'kotlin.arrayOf' call
  // Inline function 'kotlin.js.unsafeCast' call
  // Inline function 'kotlin.js.asDynamic' call
  var tmp_1 = [new ProtoNumber(1)];
  // Inline function 'kotlin.arrayOf' call
  // Inline function 'kotlin.js.unsafeCast' call
  // Inline function 'kotlin.js.asDynamic' call
  var tmp_2 = [new ProtoNumber(2)];
  // Inline function 'kotlin.arrayOf' call
  // Inline function 'kotlin.js.unsafeCast' call
  // Inline function 'kotlin.js.asDynamic' call
  var tmp_3 = [new ProtoNumber(3)];
  // Inline function 'kotlin.arrayOf' call
  // Inline function 'kotlin.js.unsafeCast' call
  // Inline function 'kotlin.js.asDynamic' call
  var tmp_4 = [new ProtoNumber(4)];
  // Inline function 'kotlin.arrayOf' call
  // Inline function 'kotlin.js.unsafeCast' call
  // Inline function 'kotlin.js.asDynamic' call
  var tmp_5 = [new ProtoNumber(5)];
  // Inline function 'kotlin.arrayOf' call
  // Inline function 'kotlin.js.unsafeCast' call
  // Inline function 'kotlin.js.asDynamic' call
  // Inline function 'kotlin.arrayOf' call
  // Inline function 'kotlin.js.unsafeCast' call
  // Inline function 'kotlin.js.asDynamic' call
  var tmp$ret$21 = [tmp_1, tmp_2, tmp_3, tmp_4, tmp_5, [new ProtoNumber(6)]];
  return createAnnotatedEnumSerializer('com.bedalton.creatures.caos.libstructs.CaosScriptVarTokenGroup', tmp, tmp_0, tmp$ret$21, null);
}
var CaosScriptVarTokenGroup_UNKNOWN_instance;
var CaosScriptVarTokenGroup_VARx_instance;
var CaosScriptVarTokenGroup_OBVx_instance;
var CaosScriptVarTokenGroup_VAxx_instance;
var CaosScriptVarTokenGroup_OVxx_instance;
var CaosScriptVarTokenGroup_MVxx_instance;
var Companion_instance_3;
function Companion_getInstance_2() {
  CaosScriptVarTokenGroup_initEntries();
  if (Companion_instance_3 === VOID)
    new Companion_2();
  return Companion_instance_3;
}
function values() {
  return [CaosScriptVarTokenGroup_UNKNOWN_getInstance(), CaosScriptVarTokenGroup_VARx_getInstance(), CaosScriptVarTokenGroup_OBVx_getInstance(), CaosScriptVarTokenGroup_VAxx_getInstance(), CaosScriptVarTokenGroup_OVxx_getInstance(), CaosScriptVarTokenGroup_MVxx_getInstance()];
}
var CaosScriptVarTokenGroup_entriesInitialized;
function CaosScriptVarTokenGroup_initEntries() {
  if (CaosScriptVarTokenGroup_entriesInitialized)
    return Unit_instance;
  CaosScriptVarTokenGroup_entriesInitialized = true;
  CaosScriptVarTokenGroup_UNKNOWN_instance = new CaosScriptVarTokenGroup('UNKNOWN', 0, '???');
  CaosScriptVarTokenGroup_VARx_instance = new CaosScriptVarTokenGroup('VARx', 1, 'VARx');
  CaosScriptVarTokenGroup_OBVx_instance = new CaosScriptVarTokenGroup('OBVx', 2, 'OBVx');
  CaosScriptVarTokenGroup_VAxx_instance = new CaosScriptVarTokenGroup('VAxx', 3, 'VAxx');
  CaosScriptVarTokenGroup_OVxx_instance = new CaosScriptVarTokenGroup('OVxx', 4, 'OVxx');
  CaosScriptVarTokenGroup_MVxx_instance = new CaosScriptVarTokenGroup('MVxx', 5, 'MVxx');
  Companion_getInstance_2();
}
function CaosScriptVarTokenGroup_UNKNOWN_getInstance() {
  CaosScriptVarTokenGroup_initEntries();
  return CaosScriptVarTokenGroup_UNKNOWN_instance;
}
function CaosScriptVarTokenGroup_VARx_getInstance() {
  CaosScriptVarTokenGroup_initEntries();
  return CaosScriptVarTokenGroup_VARx_instance;
}
function CaosScriptVarTokenGroup_OBVx_getInstance() {
  CaosScriptVarTokenGroup_initEntries();
  return CaosScriptVarTokenGroup_OBVx_instance;
}
function CaosScriptVarTokenGroup_VAxx_getInstance() {
  CaosScriptVarTokenGroup_initEntries();
  return CaosScriptVarTokenGroup_VAxx_instance;
}
function CaosScriptVarTokenGroup_OVxx_getInstance() {
  CaosScriptVarTokenGroup_initEntries();
  return CaosScriptVarTokenGroup_OVxx_instance;
}
function CaosScriptVarTokenGroup_MVxx_getInstance() {
  CaosScriptVarTokenGroup_initEntries();
  return CaosScriptVarTokenGroup_MVxx_instance;
}
function CaosValuesList$Companion$$childSerializers$_anonymous__8fg7ag() {
  return new ReferenceArraySerializer(getKClass(ValuesListValue), $serializer_getInstance_3());
}
function CaosValuesList$Companion$$childSerializers$_anonymous__8fg7ag_0() {
  return new ArrayListSerializer($serializer_getInstance_3());
}
function CaosValuesList$Companion$$childSerializers$_anonymous__8fg7ag_1() {
  return new ArrayListSerializer($serializer_getInstance_3());
}
var Companion_instance_4;
function Companion_getInstance_3() {
  if (Companion_instance_4 === VOID)
    new Companion_3();
  return Companion_instance_4;
}
var $serializer_instance_2;
function $serializer_getInstance_2() {
  if ($serializer_instance_2 === VOID)
    new $serializer_2();
  return $serializer_instance_2;
}
function CaosValuesList$bitflag$delegate$lambda(this$0) {
  return () => {
    var tmp0_safe_receiver = this$0.extensionType;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : equals_0(tmp0_safe_receiver, 'BitFlags', true);
    return tmp1_elvis_lhs == null ? false : tmp1_elvis_lhs;
  };
}
function CaosValuesList$_get_bitflag_$ref_koiysb() {
  return (p0) => p0.r4r();
}
function CaosValuesList$_init_$lambda_11sxhl(this$0) {
  return () => {
    var tmp0_safe_receiver = this$0.extensionType;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : equals_0(tmp0_safe_receiver, 'BitFlags', true);
    return tmp1_elvis_lhs == null ? false : tmp1_elvis_lhs;
  };
}
var Companion_instance_5;
function Companion_getInstance_4() {
  return Companion_instance_5;
}
var $serializer_instance_3;
function $serializer_getInstance_3() {
  if ($serializer_instance_3 === VOID)
    new $serializer_3();
  return $serializer_instance_3;
}
function CaosValuesListValue$intValue$delegate$lambda(this$0) {
  return () => {
    // Inline function 'kotlin.text.trim' call
    var this_0 = this$0.value;
    var value = toString(trim(isCharSequence(this_0) ? this_0 : THROW_CCE()));
    return startsWith(value, '>') || startsWith(value, '!') ? toIntOrNull(substring(value, 1)) : toIntOrNull(value);
  };
}
function CaosValuesListValue$_get_intValue_$ref_pvr0wd() {
  return (p0) => p0.h1s();
}
function CaosValuesListValue$not$delegate$lambda(this$0) {
  return () => startsWith(this$0.value, '!');
}
function CaosValuesListValue$_get_not_$ref_4vgyw() {
  return (p0) => p0.o4r();
}
function CaosValuesListValue$greaterThan$delegate$lambda(this$0) {
  return () => !(this$0.h1s() == null) && startsWith(this$0.value, '>');
}
function CaosValuesListValue$_get_greaterThan_$ref_das0vk() {
  return (p0) => p0.p4r();
}
function CaosValuesListValue$_init_$lambda_7cqd18(this$0) {
  return () => {
    // Inline function 'kotlin.text.trim' call
    var this_0 = this$0.value;
    var value = toString(trim(isCharSequence(this_0) ? this_0 : THROW_CCE()));
    return startsWith(value, '>') || startsWith(value, '!') ? toIntOrNull(substring(value, 1)) : toIntOrNull(value);
  };
}
function CaosValuesListValue$_init_$lambda_7cqd18_0(this$0) {
  return () => startsWith(this$0.value, '!');
}
function CaosValuesListValue$_init_$lambda_7cqd18_1(this$0) {
  return () => !(this$0.h1s() == null) && startsWith(this$0.value, '>');
}
var Companion_instance_6;
function Companion_getInstance_5() {
  return Companion_instance_6;
}
var $serializer_instance_4;
function $serializer_getInstance_4() {
  if ($serializer_instance_4 === VOID)
    new $serializer_4();
  return $serializer_instance_4;
}
function get_VARIANT_OLD() {
  _init_properties_CaosVariant_kt__re5vzl();
  return VARIANT_OLD;
}
var VARIANT_OLD;
function _get_$cachedSerializer__te6jhj_0($this) {
  return $this.i4s_1.k3();
}
function CaosVariant$Companion$_anonymous__9oo02c() {
  var tmp = getKClass(CaosVariant);
  // Inline function 'kotlin.arrayOf' call
  // Inline function 'kotlin.js.unsafeCast' call
  // Inline function 'kotlin.js.asDynamic' call
  var tmp_0 = [];
  // Inline function 'kotlin.arrayOf' call
  // Inline function 'kotlin.js.unsafeCast' call
  // Inline function 'kotlin.js.asDynamic' call
  var tmp_1 = [];
  // Inline function 'kotlin.arrayOf' call
  // Inline function 'kotlin.js.unsafeCast' call
  // Inline function 'kotlin.js.asDynamic' call
  var tmp$ret$6 = [];
  return SealedClassSerializer.ss('com.bedalton.creatures.caos.libstructs.CaosVariant', tmp, tmp_0, tmp_1, tmp$ret$6);
}
var C1_instance;
function C1_getInstance() {
  if (C1_instance === VOID)
    new C1();
  return C1_instance;
}
var C2_instance;
function C2_getInstance() {
  if (C2_instance === VOID)
    new C2();
  return C2_instance;
}
var CV_instance;
function CV_getInstance() {
  if (CV_instance === VOID)
    new CV();
  return CV_instance;
}
var C3_instance;
function C3_getInstance() {
  if (C3_instance === VOID)
    new C3();
  return C3_instance;
}
var DS_instance;
function DS_getInstance() {
  if (DS_instance === VOID)
    new DS();
  return DS_instance;
}
var CE_instance;
function CE_getInstance() {
  if (CE_instance === VOID)
    new CE();
  return CE_instance;
}
var SM_instance;
function SM_getInstance() {
  if (SM_instance === VOID)
    new SM();
  return SM_instance;
}
var UNKNOWN_instance;
function UNKNOWN_getInstance() {
  if (UNKNOWN_instance === VOID)
    new UNKNOWN();
  return UNKNOWN_instance;
}
var Companion_instance_7;
function Companion_getInstance_6() {
  if (Companion_instance_7 === VOID)
    new Companion_6();
  return Companion_instance_7;
}
function orElse(_this__u8e3s4, variant) {
  _init_properties_CaosVariant_kt__re5vzl();
  var tmp;
  if (_this__u8e3s4 == null || equals(_this__u8e3s4, UNKNOWN_getInstance())) {
    tmp = variant;
  } else {
    tmp = _this__u8e3s4;
  }
  return tmp;
}
var properties_initialized_CaosVariant_kt_r0n2rx;
function _init_properties_CaosVariant_kt__re5vzl() {
  if (!properties_initialized_CaosVariant_kt_r0n2rx) {
    properties_initialized_CaosVariant_kt_r0n2rx = true;
    VARIANT_OLD = listOf([C1_getInstance(), C2_getInstance()]);
  }
}
function CaosVariantData$Companion$$childSerializers$_anonymous__z6x1a5() {
  return new LinkedHashMapSerializer(StringSerializer_getInstance(), IntSerializer_getInstance());
}
function CaosVariantData$Companion$$childSerializers$_anonymous__z6x1a5_0() {
  return new LinkedHashMapSerializer(StringSerializer_getInstance(), IntSerializer_getInstance());
}
function CaosVariantData$Companion$$childSerializers$_anonymous__z6x1a5_1() {
  return new LinkedHashMapSerializer(StringSerializer_getInstance(), new LinkedHashMapSerializer(IntSerializer_getInstance(), IntSerializer_getInstance()));
}
function CaosVariantData$Companion$$childSerializers$_anonymous__z6x1a5_2() {
  return new ReferenceArraySerializer(PrimitiveClasses_getInstance().ee(), IntSerializer_getInstance());
}
var Companion_instance_8;
function Companion_getInstance_7() {
  if (Companion_instance_8 === VOID)
    new Companion_7();
  return Companion_instance_8;
}
var $serializer_instance_5;
function $serializer_getInstance_5() {
  if ($serializer_instance_5 === VOID)
    new $serializer_5();
  return $serializer_instance_5;
}
function CaosVariantData$isOld$delegate$lambda(this$0) {
  return () => listOf(['C1', 'C2']).g2(this$0.v4s_1);
}
function CaosVariantData$isNew$delegate$lambda(this$0) {
  return () => !listOf(['C1', 'C2']).g2(this$0.v4s_1);
}
function CaosVariantData$_init_$lambda_7brc0u(this$0) {
  return () => listOf(['C1', 'C2']).g2(this$0.v4s_1);
}
function CaosVariantData$_init_$lambda_7brc0u_0(this$0) {
  return () => !listOf(['C1', 'C2']).g2(this$0.v4s_1);
}
function Commands$Companion$$childSerializers$_anonymous__37qrhe() {
  return new ReferenceArraySerializer(getKClass(ICaosCommand), $serializer_getInstance_7());
}
function Commands$Companion$$childSerializers$_anonymous__37qrhe_0() {
  return new ReferenceArraySerializer(getKClass(ICaosCommand), $serializer_getInstance_7());
}
function Commands$Companion$$childSerializers$_anonymous__37qrhe_1() {
  return new ReferenceArraySerializer(getKClass(ICaosCommand), $serializer_getInstance_7());
}
var Companion_instance_9;
function Companion_getInstance_8() {
  if (Companion_instance_9 === VOID)
    new Companion_8();
  return Companion_instance_9;
}
var $serializer_instance_6;
function $serializer_getInstance_6() {
  if ($serializer_instance_6 === VOID)
    new $serializer_6();
  return $serializer_instance_6;
}
function VariantCaosCommand$Companion$$childSerializers$_anonymous__495hkq() {
  return new ReferenceArraySerializer(getKClass(ICaosParameter), $serializer_getInstance_8());
}
function VariantCaosCommand$Companion$$childSerializers$_anonymous__495hkq_0() {
  return new ReferenceArraySerializer(PrimitiveClasses_getInstance().je(), StringSerializer_getInstance());
}
function VariantCaosCommand$Companion$$childSerializers$_anonymous__495hkq_1() {
  return $serializer_9.q4t(IntSerializer_getInstance());
}
var Companion_instance_10;
function Companion_getInstance_9() {
  if (Companion_instance_10 === VOID)
    new Companion_9();
  return Companion_instance_10;
}
var $serializer_instance_7;
function $serializer_getInstance_7() {
  if ($serializer_instance_7 === VOID)
    new $serializer_7();
  return $serializer_instance_7;
}
var Companion_instance_11;
function Companion_getInstance_10() {
  return Companion_instance_11;
}
var $serializer_instance_8;
function $serializer_getInstance_8() {
  if ($serializer_instance_8 === VOID)
    new $serializer_8();
  return $serializer_instance_8;
}
var Companion_instance_12;
function Companion_getInstance_11() {
  if (Companion_instance_12 === VOID)
    new Companion_11();
  return Companion_instance_12;
}
var mInTest;
function nullIfEmpty(_this__u8e3s4) {
  var tmp;
  // Inline function 'kotlin.collections.isNullOrEmpty' call
  var tmp_0;
  if (_this__u8e3s4 == null) {
    tmp_0 = true;
  } else {
    // Inline function 'kotlin.collections.isEmpty' call
    tmp_0 = _this__u8e3s4.length === 0;
  }
  if (tmp_0) {
    tmp = null;
  } else {
    tmp = _this__u8e3s4;
  }
  return tmp;
}
function toVariantCommand(_this__u8e3s4, variant) {
  var tmp1_command = _this__u8e3s4.j4p_1;
  // Inline function 'kotlin.collections.map' call
  var this_0 = _this__u8e3s4.k4p_1;
  // Inline function 'kotlin.collections.mapTo' call
  var destination = ArrayList.y1(this_0.length);
  var inductionVariable = 0;
  var last = this_0.length;
  while (inductionVariable < last) {
    var item = this_0[inductionVariable];
    inductionVariable = inductionVariable + 1 | 0;
    var tmp$ret$2 = ICaosParameter.q4u(item, variant);
    destination.z1(tmp$ret$2);
  }
  // Inline function 'kotlin.collections.sortedBy' call
  // Inline function 'kotlin.comparisons.compareBy' call
  var tmp = toVariantCommand$lambda;
  var tmp$ret$4 = new sam$kotlin_Comparator$0(tmp);
  // Inline function 'kotlin.collections.toTypedArray' call
  var this_1 = sortedWith(destination, tmp$ret$4);
  var tmp2_parameters = copyToArray(this_1);
  var tmp3_isLvalue = _this__u8e3s4.r4p_1;
  var tmp4_isRvalue = _this__u8e3s4.q4p_1;
  var tmp5_returnTypeId = _this__u8e3s4.b4q().value;
  var tmp6_returnTypeName = _this__u8e3s4.b4q().simpleName;
  var tmp7_variants = _this__u8e3s4.p4p_1;
  var tmp8_description = _this__u8e3s4.m4p_1;
  var tmp9_commandGroup = _this__u8e3s4.t4p_1;
  var tmp10_doifFormat = _this__u8e3s4.u4p_1;
  var tmp11_lvalueName = _this__u8e3s4.s4p_1;
  var tmp12_requiresCreatureOwnr = _this__u8e3s4.v4p_1;
  var tmp13_requiresOwnr = _this__u8e3s4.o4p_1;
  var tmp0_safe_receiver = _this__u8e3s4.n4p_1;
  var tmp_0;
  if (tmp0_safe_receiver == null) {
    tmp_0 = null;
  } else {
    // Inline function 'kotlin.let' call
    tmp_0 = VariantData.d4v(tmp0_safe_receiver);
  }
  var tmp14_returnValuesListIds = tmp_0;
  var tmp15_isCommand = _this__u8e3s4.d4q();
  var tmp16_tokens = _this__u8e3s4.j1s();
  var tmp17_ceOnly = _this__u8e3s4.w4p_1 === true;
  return new ICaosCommand(tmp1_command, tmp2_parameters, tmp3_isLvalue, tmp4_isRvalue, tmp15_isCommand, tmp5_returnTypeId, tmp6_returnTypeName, tmp7_variants, tmp8_description, tmp11_lvalueName, tmp14_returnValuesListIds, tmp13_requiresOwnr, tmp9_commandGroup, tmp10_doifFormat, tmp12_requiresCreatureOwnr, tmp16_tokens, tmp17_ceOnly);
}
function toVariantCommand$lambda(a, b) {
  // Inline function 'kotlin.comparisons.compareValuesBy' call
  var tmp = a.index;
  var tmp$ret$2 = b.index;
  return compareValues(tmp, tmp$ret$2);
}
//region block: post-declaration
initMetadataForCompanion(Companion);
protoOf($serializer).m14 = typeParametersSerializers;
initMetadataForObject($serializer, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(CaosCommand, 'CaosCommand', VOID, VOID, VOID, VOID, VOID, {0: $serializer_getInstance});
initMetadataForCompanion(Companion_0);
protoOf($serializer_0).m14 = typeParametersSerializers;
initMetadataForObject($serializer_0, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(CaosLibDefinitions, 'CaosLibDefinitions', VOID, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_0});
initMetadataForCompanion(Companion_1);
protoOf($serializer_1).m14 = typeParametersSerializers;
initMetadataForObject($serializer_1, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(CaosParameter, 'CaosParameter', VOID, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_1});
initMetadataForCompanion(Companion_2, VOID, [SerializerFactory]);
initMetadataForClass(CaosScriptVarTokenGroup, 'CaosScriptVarTokenGroup', VOID, VOID, VOID, VOID, VOID, {0: Companion_getInstance_2});
initMetadataForCompanion(Companion_3);
protoOf($serializer_2).m14 = typeParametersSerializers;
initMetadataForObject($serializer_2, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(CaosValuesList, 'CaosValuesList', VOID, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_2});
initMetadataForCompanion(Companion_4);
protoOf($serializer_3).m14 = typeParametersSerializers;
initMetadataForObject($serializer_3, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(ValuesListValue, 'CaosValuesListValue', VOID, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_3});
initMetadataForCompanion(Companion_5);
protoOf($serializer_4).m14 = typeParametersSerializers;
initMetadataForObject($serializer_4, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(CaosVarConstraints, 'CaosVarConstraints', VOID, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_4});
initMetadataForClass(CaosVariant, 'CaosVariant', VOID, VOID, VOID, VOID, VOID, {0: Companion_getInstance_6});
initMetadataForObject(C1, 'C1');
initMetadataForObject(C2, 'C2');
initMetadataForObject(CV, 'CV');
initMetadataForObject(C3, 'C3');
initMetadataForObject(DS, 'DS');
initMetadataForObject(CE, 'CE');
initMetadataForObject(SM, 'SM');
initMetadataForObject(UNKNOWN, 'UNKNOWN');
initMetadataForCompanion(Companion_6, VOID, [SerializerFactory]);
initMetadataForCompanion(Companion_7);
protoOf($serializer_5).m14 = typeParametersSerializers;
initMetadataForObject($serializer_5, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(CaosVariantData, 'CaosVariantData', VOID, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_5});
initMetadataForCompanion(Companion_8);
protoOf($serializer_6).m14 = typeParametersSerializers;
initMetadataForObject($serializer_6, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(Commands, 'Commands', VOID, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_6});
initMetadataForClass(HasGetterImpl, 'HasGetterImpl');
initMetadataForCompanion(Companion_9);
protoOf($serializer_7).m14 = typeParametersSerializers;
initMetadataForObject($serializer_7, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(ICaosCommand, 'VariantCaosCommand', VOID, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_7});
initMetadataForCompanion(Companion_10);
protoOf($serializer_8).m14 = typeParametersSerializers;
initMetadataForObject($serializer_8, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(ICaosParameter, 'VariantCaosParameter', VOID, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_8});
initMetadataForCompanion(Companion_11, VOID, [SerializerFactory]);
initMetadataForClass($serializer_9, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(VariantData, 'VariantData', VariantData.w4u, VOID, VOID, VOID, VOID, {0: Companion_getInstance_11});
initMetadataForClass(sam$kotlin_Comparator$0, 'sam$kotlin_Comparator$0', VOID, VOID, [Comparator, FunctionAdapter]);
//endregion
//region block: init
Companion_instance_5 = new Companion_4();
Companion_instance_6 = new Companion_5();
Companion_instance_11 = new Companion_10();
mInTest = true;
//endregion
//region block: exports
export {
  CaosValuesList as CaosValuesList2rvf4fhtfg19g,
  Commands as Commands1nb2w46x6pqxt,
  HasGetterImpl as HasGetterImplwlmesz4hhsp0,
  ICaosCommand as ICaosCommand2pli3z4fsuk7y,
  ICaosParameter as ICaosParameter1rcrnjyzw4yla,
  orElse as orElse20h27uqt0etik,
  toVariantCommand as toVariantCommand39sm5na6okek1,
  Companion_getInstance_0 as Companion_getInstance34l4x8oszj3u,
  $serializer_getInstance_2 as $serializer_getInstance1j7xfhye2seg7,
  C1_getInstance as C1_getInstance2xunjuuzenn1g,
  C2_getInstance as C2_getInstancejewyy70cvwsm,
  C3_getInstance as C3_getInstance2fiyy2xkcwags,
  CE_getInstance as CE_getInstance2xiye7do5z5nt,
  CV_getInstance as CV_getInstance2lup6zwb9u5k6,
  Companion_getInstance_6 as Companion_getInstance3er65ct1xcevy,
  DS_getInstance as DS_getInstancehmq1jmepbhht,
  SM_getInstance as SM_getInstanceltbfjafnrdog,
  UNKNOWN_getInstance as UNKNOWN_getInstance1zm3icqfz5trb,
  $serializer_getInstance_7 as $serializer_getInstance2p15nu7jxmifa,
  $serializer_getInstance_8 as $serializer_getInstance28ul0erzewprr,
};
//endregion

//# sourceMappingURL=caos-lib-structs.mjs.map
