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
    tmp.c21_1 = [null, null, tmp_1, null, null, tmp_3, null, lazy(tmp_4, CaosCommand$Companion$$childSerializers$_anonymous__psokld_1), null, null, null, null, null, null, null];
  }
}
class $serializer {
  constructor() {
    $serializer_instance = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('com.bedalton.creatures.caos.libstructs.CaosCommand', this, 15);
    tmp0_serialDesc.z13('id', false);
    tmp0_serialDesc.h13(new ProtoNumber(1));
    tmp0_serialDesc.z13('command', false);
    tmp0_serialDesc.h13(new ProtoNumber(2));
    tmp0_serialDesc.z13('parameters', false);
    tmp0_serialDesc.h13(new ProtoNumber(3));
    tmp0_serialDesc.z13('returnTypeId', false);
    tmp0_serialDesc.h13(new ProtoNumber(4));
    tmp0_serialDesc.z13('description', true);
    tmp0_serialDesc.h13(new ProtoNumber(5));
    tmp0_serialDesc.z13('returnValuesListIds', true);
    tmp0_serialDesc.h13(new ProtoNumber(6));
    tmp0_serialDesc.z13('requiresOwnr', true);
    tmp0_serialDesc.h13(new ProtoNumber(7));
    tmp0_serialDesc.z13('variants', false);
    tmp0_serialDesc.h13(new ProtoNumber(8));
    tmp0_serialDesc.z13('rvalue', false);
    tmp0_serialDesc.h13(new ProtoNumber(9));
    tmp0_serialDesc.z13('lvalue', false);
    tmp0_serialDesc.h13(new ProtoNumber(10));
    tmp0_serialDesc.z13('lvalueName', true);
    tmp0_serialDesc.h13(new ProtoNumber(11));
    tmp0_serialDesc.z13('commandGroup', false);
    tmp0_serialDesc.h13(new ProtoNumber(12));
    tmp0_serialDesc.z13('doifFormat', true);
    tmp0_serialDesc.h13(new ProtoNumber(13));
    tmp0_serialDesc.z13('requiresCreatureOwnr', true);
    tmp0_serialDesc.h13(new ProtoNumber(14));
    tmp0_serialDesc.z13('ceOnly', true);
    tmp0_serialDesc.h13(new ProtoNumber(15));
    this.d21_1 = tmp0_serialDesc;
  }
  e21(encoder, value) {
    var tmp0_desc = this.d21_1;
    var tmp1_output = encoder.ew(tmp0_desc);
    var tmp2_cached = Companion_getInstance().c21_1;
    tmp1_output.px(tmp0_desc, 0, value.f21_1);
    tmp1_output.ux(tmp0_desc, 1, value.g21_1);
    tmp1_output.wx(tmp0_desc, 2, tmp2_cached[2].r3(), value.h21_1);
    tmp1_output.px(tmp0_desc, 3, value.i21_1);
    if (tmp1_output.cy(tmp0_desc, 4) ? true : !(value.j21_1 == null)) {
      tmp1_output.yx(tmp0_desc, 4, StringSerializer_getInstance(), value.j21_1);
    }
    if (tmp1_output.cy(tmp0_desc, 5) ? true : !(value.k21_1 == null)) {
      tmp1_output.yx(tmp0_desc, 5, tmp2_cached[5].r3(), value.k21_1);
    }
    if (tmp1_output.cy(tmp0_desc, 6) ? true : !(value.l21_1 === 0)) {
      tmp1_output.px(tmp0_desc, 6, value.l21_1);
    }
    tmp1_output.wx(tmp0_desc, 7, tmp2_cached[7].r3(), value.m21_1);
    tmp1_output.mx(tmp0_desc, 8, value.n21_1);
    tmp1_output.mx(tmp0_desc, 9, value.o21_1);
    if (tmp1_output.cy(tmp0_desc, 10) ? true : !(value.p21_1 == null)) {
      tmp1_output.yx(tmp0_desc, 10, StringSerializer_getInstance(), value.p21_1);
    }
    tmp1_output.ux(tmp0_desc, 11, value.q21_1);
    if (tmp1_output.cy(tmp0_desc, 12) ? true : !(value.r21_1 == null)) {
      tmp1_output.yx(tmp0_desc, 12, StringSerializer_getInstance(), value.r21_1);
    }
    if (tmp1_output.cy(tmp0_desc, 13) ? true : !(value.s21_1 === false)) {
      tmp1_output.mx(tmp0_desc, 13, value.s21_1);
    }
    if (tmp1_output.cy(tmp0_desc, 14) ? true : !(value.t21_1 == null)) {
      tmp1_output.yx(tmp0_desc, 14, BooleanSerializer_getInstance(), value.t21_1);
    }
    tmp1_output.fw(tmp0_desc);
  }
  pr(encoder, value) {
    return this.e21(encoder, value instanceof CaosCommand ? value : THROW_CCE());
  }
  qr(decoder) {
    var tmp0_desc = this.d21_1;
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
    var tmp22_input = decoder.ew(tmp0_desc);
    var tmp23_cached = Companion_getInstance().c21_1;
    if (tmp22_input.vw()) {
      tmp4_local0 = tmp22_input.jw(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp22_input.ow(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp22_input.qw(tmp0_desc, 2, tmp23_cached[2].r3(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp22_input.jw(tmp0_desc, 3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp22_input.sw(tmp0_desc, 4, StringSerializer_getInstance(), tmp8_local4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp9_local5 = tmp22_input.sw(tmp0_desc, 5, tmp23_cached[5].r3(), tmp9_local5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
      tmp10_local6 = tmp22_input.jw(tmp0_desc, 6);
      tmp3_bitMask0 = tmp3_bitMask0 | 64;
      tmp11_local7 = tmp22_input.qw(tmp0_desc, 7, tmp23_cached[7].r3(), tmp11_local7);
      tmp3_bitMask0 = tmp3_bitMask0 | 128;
      tmp12_local8 = tmp22_input.gw(tmp0_desc, 8);
      tmp3_bitMask0 = tmp3_bitMask0 | 256;
      tmp13_local9 = tmp22_input.gw(tmp0_desc, 9);
      tmp3_bitMask0 = tmp3_bitMask0 | 512;
      tmp14_local10 = tmp22_input.sw(tmp0_desc, 10, StringSerializer_getInstance(), tmp14_local10);
      tmp3_bitMask0 = tmp3_bitMask0 | 1024;
      tmp15_local11 = tmp22_input.ow(tmp0_desc, 11);
      tmp3_bitMask0 = tmp3_bitMask0 | 2048;
      tmp16_local12 = tmp22_input.sw(tmp0_desc, 12, StringSerializer_getInstance(), tmp16_local12);
      tmp3_bitMask0 = tmp3_bitMask0 | 4096;
      tmp17_local13 = tmp22_input.gw(tmp0_desc, 13);
      tmp3_bitMask0 = tmp3_bitMask0 | 8192;
      tmp18_local14 = tmp22_input.sw(tmp0_desc, 14, BooleanSerializer_getInstance(), tmp18_local14);
      tmp3_bitMask0 = tmp3_bitMask0 | 16384;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp22_input.ww(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp22_input.jw(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp22_input.ow(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp22_input.qw(tmp0_desc, 2, tmp23_cached[2].r3(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp22_input.jw(tmp0_desc, 3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp22_input.sw(tmp0_desc, 4, StringSerializer_getInstance(), tmp8_local4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp9_local5 = tmp22_input.sw(tmp0_desc, 5, tmp23_cached[5].r3(), tmp9_local5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          case 6:
            tmp10_local6 = tmp22_input.jw(tmp0_desc, 6);
            tmp3_bitMask0 = tmp3_bitMask0 | 64;
            break;
          case 7:
            tmp11_local7 = tmp22_input.qw(tmp0_desc, 7, tmp23_cached[7].r3(), tmp11_local7);
            tmp3_bitMask0 = tmp3_bitMask0 | 128;
            break;
          case 8:
            tmp12_local8 = tmp22_input.gw(tmp0_desc, 8);
            tmp3_bitMask0 = tmp3_bitMask0 | 256;
            break;
          case 9:
            tmp13_local9 = tmp22_input.gw(tmp0_desc, 9);
            tmp3_bitMask0 = tmp3_bitMask0 | 512;
            break;
          case 10:
            tmp14_local10 = tmp22_input.sw(tmp0_desc, 10, StringSerializer_getInstance(), tmp14_local10);
            tmp3_bitMask0 = tmp3_bitMask0 | 1024;
            break;
          case 11:
            tmp15_local11 = tmp22_input.ow(tmp0_desc, 11);
            tmp3_bitMask0 = tmp3_bitMask0 | 2048;
            break;
          case 12:
            tmp16_local12 = tmp22_input.sw(tmp0_desc, 12, StringSerializer_getInstance(), tmp16_local12);
            tmp3_bitMask0 = tmp3_bitMask0 | 4096;
            break;
          case 13:
            tmp17_local13 = tmp22_input.gw(tmp0_desc, 13);
            tmp3_bitMask0 = tmp3_bitMask0 | 8192;
            break;
          case 14:
            tmp18_local14 = tmp22_input.sw(tmp0_desc, 14, BooleanSerializer_getInstance(), tmp18_local14);
            tmp3_bitMask0 = tmp3_bitMask0 | 16384;
            break;
          default:
            throw UnknownFieldException.ht(tmp2_index);
        }
      }
    tmp22_input.fw(tmp0_desc);
    return CaosCommand.x21(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, tmp10_local6, tmp11_local7, tmp12_local8, tmp13_local9, tmp14_local10, tmp15_local11, tmp16_local12, tmp17_local13, tmp18_local14, null);
  }
  or() {
    return this.d21_1;
  }
  o14() {
    var tmp0_cached = Companion_getInstance().c21_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [IntSerializer_getInstance(), StringSerializer_getInstance(), tmp0_cached[2].r3(), IntSerializer_getInstance(), get_nullable(StringSerializer_getInstance()), get_nullable(tmp0_cached[5].r3()), IntSerializer_getInstance(), tmp0_cached[7].r3(), BooleanSerializer_getInstance(), BooleanSerializer_getInstance(), get_nullable(StringSerializer_getInstance()), StringSerializer_getInstance(), get_nullable(StringSerializer_getInstance()), BooleanSerializer_getInstance(), get_nullable(BooleanSerializer_getInstance())];
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
    this.f21_1 = id;
    this.g21_1 = command;
    this.h21_1 = parameters;
    this.i21_1 = returnTypeId;
    this.j21_1 = description;
    this.k21_1 = returnValuesListIds;
    this.l21_1 = requiresOwnr;
    this.m21_1 = variants;
    this.n21_1 = rvalue;
    this.o21_1 = lvalue;
    this.p21_1 = lvalueName;
    this.q21_1 = commandGroup;
    this.r21_1 = doifFormat;
    this.s21_1 = requiresCreatureOwnr;
    this.t21_1 = ceOnly;
    var tmp = this;
    tmp.u21_1 = lazy_0(CaosCommand$tokens$delegate$lambda(this));
    var tmp_0 = this;
    tmp_0.v21_1 = lazy_0(CaosCommand$fullCommandHeader$delegate$lambda(this));
    var tmp_1 = this;
    tmp_1.w21_1 = lazy_0(CaosCommand$isCommand$delegate$lambda(this));
  }
  y21() {
    return Companion_instance.fromIntValue(this.i21_1);
  }
  s1s() {
    var tmp0 = this.u21_1;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('tokens', 1, tmp, CaosCommand$_get_tokens_$ref_qlm063(), null);
    return tmp0.r3();
  }
  a22() {
    var tmp0 = this.w21_1;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('isCommand', 1, tmp, CaosCommand$_get_isCommand_$ref_j0upw(), null);
    return tmp0.r3();
  }
  equals(other) {
    if (this === other)
      return true;
    if (!(other instanceof CaosCommand))
      return false;
    if (!(this.f21_1 === other.f21_1))
      return false;
    if (!(this.g21_1 === other.g21_1))
      return false;
    if (!contentEquals(this.h21_1, other.h21_1))
      return false;
    if (!this.y21().equals(other.y21()))
      return false;
    if (!(this.j21_1 == other.j21_1))
      return false;
    if (!equals(this.k21_1, other.k21_1))
      return false;
    if (!(this.l21_1 === other.l21_1))
      return false;
    if (!contentEquals(this.m21_1, other.m21_1))
      return false;
    if (!(this.n21_1 === other.n21_1))
      return false;
    if (!(this.o21_1 === other.o21_1))
      return false;
    if (!(this.p21_1 == other.p21_1))
      return false;
    if (!(this.q21_1 === other.q21_1))
      return false;
    if (!(this.r21_1 == other.r21_1))
      return false;
    if (!(this.s21_1 === other.s21_1))
      return false;
    return true;
  }
  hashCode() {
    var result = this.f21_1;
    result = imul(31, result) + getStringHashCode(this.g21_1) | 0;
    result = imul(31, result) + contentHashCode(this.h21_1) | 0;
    result = imul(31, result) + this.y21().hashCode() | 0;
    var tmp = imul(31, result);
    var tmp0_safe_receiver = this.j21_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : getStringHashCode(tmp0_safe_receiver);
    result = tmp + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
    var tmp_0 = imul(31, result);
    var tmp2_safe_receiver = this.k21_1;
    var tmp3_elvis_lhs = tmp2_safe_receiver == null ? null : hashCode(tmp2_safe_receiver);
    result = tmp_0 + (tmp3_elvis_lhs == null ? 0 : tmp3_elvis_lhs) | 0;
    result = imul(31, result) + this.l21_1 | 0;
    result = imul(31, result) + contentHashCode(this.m21_1) | 0;
    result = imul(31, result) + getBooleanHashCode(this.n21_1) | 0;
    result = imul(31, result) + getBooleanHashCode(this.o21_1) | 0;
    var tmp_1 = imul(31, result);
    var tmp4_safe_receiver = this.p21_1;
    var tmp5_elvis_lhs = tmp4_safe_receiver == null ? null : getStringHashCode(tmp4_safe_receiver);
    result = tmp_1 + (tmp5_elvis_lhs == null ? 0 : tmp5_elvis_lhs) | 0;
    result = imul(31, result) + getStringHashCode(this.q21_1) | 0;
    var tmp_2 = imul(31, result);
    var tmp6_safe_receiver = this.r21_1;
    var tmp7_elvis_lhs = tmp6_safe_receiver == null ? null : getStringHashCode(tmp6_safe_receiver);
    result = tmp_2 + (tmp7_elvis_lhs == null ? 0 : tmp7_elvis_lhs) | 0;
    result = imul(31, result) + getBooleanHashCode(this.s21_1) | 0;
    return result;
  }
  b22(id, command, parameters, returnTypeId, description, returnValuesListIds, requiresOwnr, variants, rvalue, lvalue, lvalueName, commandGroup, doifFormat, requiresCreatureOwnr, ceOnly) {
    return new CaosCommand(id, command, parameters, returnTypeId, description, returnValuesListIds, requiresOwnr, variants, rvalue, lvalue, lvalueName, commandGroup, doifFormat, requiresCreatureOwnr, ceOnly);
  }
  c22(id, command, parameters, returnTypeId, description, returnValuesListIds, requiresOwnr, variants, rvalue, lvalue, lvalueName, commandGroup, doifFormat, requiresCreatureOwnr, ceOnly, $super) {
    id = id === VOID ? this.f21_1 : id;
    command = command === VOID ? this.g21_1 : command;
    parameters = parameters === VOID ? this.h21_1 : parameters;
    returnTypeId = returnTypeId === VOID ? this.i21_1 : returnTypeId;
    description = description === VOID ? this.j21_1 : description;
    returnValuesListIds = returnValuesListIds === VOID ? this.k21_1 : returnValuesListIds;
    requiresOwnr = requiresOwnr === VOID ? this.l21_1 : requiresOwnr;
    variants = variants === VOID ? this.m21_1 : variants;
    rvalue = rvalue === VOID ? this.n21_1 : rvalue;
    lvalue = lvalue === VOID ? this.o21_1 : lvalue;
    lvalueName = lvalueName === VOID ? this.p21_1 : lvalueName;
    commandGroup = commandGroup === VOID ? this.q21_1 : commandGroup;
    doifFormat = doifFormat === VOID ? this.r21_1 : doifFormat;
    requiresCreatureOwnr = requiresCreatureOwnr === VOID ? this.s21_1 : requiresCreatureOwnr;
    ceOnly = ceOnly === VOID ? this.t21_1 : ceOnly;
    return $super === VOID ? this.b22(id, command, parameters, returnTypeId, description, returnValuesListIds, requiresOwnr, variants, rvalue, lvalue, lvalueName, commandGroup, doifFormat, requiresCreatureOwnr, ceOnly) : $super.b22.call(this, id, command, parameters, returnTypeId, description, returnValuesListIds, requiresOwnr, variants, rvalue, lvalue, lvalueName, commandGroup, doifFormat, requiresCreatureOwnr, ceOnly);
  }
  toString() {
    return 'CaosCommand(id=' + this.f21_1 + ', command=' + this.g21_1 + ', parameters=' + toString(this.h21_1) + ', returnTypeId=' + this.i21_1 + ', description=' + this.j21_1 + ', returnValuesListIds=' + toString_0(this.k21_1) + ', requiresOwnr=' + this.l21_1 + ', variants=' + toString(this.m21_1) + ', rvalue=' + this.n21_1 + ', lvalue=' + this.o21_1 + ', lvalueName=' + this.p21_1 + ', commandGroup=' + this.q21_1 + ', doifFormat=' + this.r21_1 + ', requiresCreatureOwnr=' + this.s21_1 + ', ceOnly=' + this.t21_1 + ')';
  }
  static x21(seen0, id, command, parameters, returnTypeId, description, returnValuesListIds, requiresOwnr, variants, rvalue, lvalue, lvalueName, commandGroup, doifFormat, requiresCreatureOwnr, ceOnly, serializationConstructorMarker) {
    Companion_getInstance();
    if (!(2959 === (2959 & seen0))) {
      throwMissingFieldException(seen0, 2959, $serializer_getInstance().d21_1);
    }
    var $this = createThis(this);
    $this.f21_1 = id;
    $this.g21_1 = command;
    $this.h21_1 = parameters;
    $this.i21_1 = returnTypeId;
    if (0 === (seen0 & 16))
      $this.j21_1 = null;
    else
      $this.j21_1 = description;
    if (0 === (seen0 & 32))
      $this.k21_1 = null;
    else
      $this.k21_1 = returnValuesListIds;
    if (0 === (seen0 & 64))
      $this.l21_1 = 0;
    else
      $this.l21_1 = requiresOwnr;
    $this.m21_1 = variants;
    $this.n21_1 = rvalue;
    $this.o21_1 = lvalue;
    if (0 === (seen0 & 1024))
      $this.p21_1 = null;
    else
      $this.p21_1 = lvalueName;
    $this.q21_1 = commandGroup;
    if (0 === (seen0 & 4096))
      $this.r21_1 = null;
    else
      $this.r21_1 = doifFormat;
    if (0 === (seen0 & 8192))
      $this.s21_1 = false;
    else
      $this.s21_1 = requiresCreatureOwnr;
    if (0 === (seen0 & 16384))
      $this.t21_1 = null;
    else
      $this.t21_1 = ceOnly;
    var tmp = $this;
    tmp.u21_1 = lazy_0(CaosCommand$_init_$lambda_fg2qzm($this));
    var tmp_0 = $this;
    tmp_0.v21_1 = lazy_0(CaosCommand$_init_$lambda_fg2qzm_0($this));
    var tmp_1 = $this;
    tmp_1.w21_1 = lazy_0(CaosCommand$_init_$lambda_fg2qzm_1($this));
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
    tmp.d22_1 = [null, tmp_1, tmp_3, lazy(tmp_4, CaosLibDefinitions$Companion$$childSerializers$_anonymous__fp73zn_1)];
  }
  n1e() {
    return $serializer_getInstance_0();
  }
}
class $serializer_0 {
  constructor() {
    $serializer_instance_0 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('com.bedalton.creatures.caos.libstructs.CaosLibDefinitions', this, 4);
    tmp0_serialDesc.z13('modDate', false);
    tmp0_serialDesc.h13(new ProtoNumber(1));
    tmp0_serialDesc.z13('commands', false);
    tmp0_serialDesc.h13(new ProtoNumber(2));
    tmp0_serialDesc.z13('variantMap', false);
    tmp0_serialDesc.h13(new ProtoNumber(3));
    tmp0_serialDesc.z13('valuesLists', false);
    tmp0_serialDesc.h13(new ProtoNumber(4));
    this.e22_1 = tmp0_serialDesc;
  }
  f22(encoder, value) {
    var tmp0_desc = this.e22_1;
    var tmp1_output = encoder.ew(tmp0_desc);
    var tmp2_cached = Companion_getInstance_0().d22_1;
    tmp1_output.qx(tmp0_desc, 0, value.g22_1);
    tmp1_output.wx(tmp0_desc, 1, tmp2_cached[1].r3(), value.h22_1);
    tmp1_output.wx(tmp0_desc, 2, tmp2_cached[2].r3(), value.i22_1);
    tmp1_output.wx(tmp0_desc, 3, tmp2_cached[3].r3(), value.j22_1);
    tmp1_output.fw(tmp0_desc);
  }
  pr(encoder, value) {
    return this.f22(encoder, value instanceof CaosLibDefinitions ? value : THROW_CCE());
  }
  qr(decoder) {
    var tmp0_desc = this.e22_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = 0n;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp9_input = decoder.ew(tmp0_desc);
    var tmp10_cached = Companion_getInstance_0().d22_1;
    if (tmp9_input.vw()) {
      tmp4_local0 = tmp9_input.kw(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp9_input.qw(tmp0_desc, 1, tmp10_cached[1].r3(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp9_input.qw(tmp0_desc, 2, tmp10_cached[2].r3(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp9_input.qw(tmp0_desc, 3, tmp10_cached[3].r3(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp9_input.ww(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp9_input.kw(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp9_input.qw(tmp0_desc, 1, tmp10_cached[1].r3(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp9_input.qw(tmp0_desc, 2, tmp10_cached[2].r3(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp9_input.qw(tmp0_desc, 3, tmp10_cached[3].r3(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          default:
            throw UnknownFieldException.ht(tmp2_index);
        }
      }
    tmp9_input.fw(tmp0_desc);
    return CaosLibDefinitions.l22(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, null);
  }
  or() {
    return this.e22_1;
  }
  o14() {
    var tmp0_cached = Companion_getInstance_0().d22_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [LongSerializer_getInstance(), tmp0_cached[1].r3(), tmp0_cached[2].r3(), tmp0_cached[3].r3()];
  }
}
class CaosLibDefinitions {
  constructor(modDate, commands, variantMap, valuesLists) {
    Companion_getInstance_0();
    this.g22_1 = modDate;
    this.h22_1 = commands;
    this.i22_1 = variantMap;
    this.j22_1 = valuesLists;
    var tmp = this;
    tmp.k22_1 = lazy_0(CaosLibDefinitions$commandsById$delegate$lambda(this));
  }
  m22() {
    var tmp0 = this.k22_1;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('commandsById', 1, tmp, CaosLibDefinitions$_get_commandsById_$ref_g2b0sn(), null);
    return tmp0.r3();
  }
  n22(modDate, commands, variantMap, valuesLists) {
    return new CaosLibDefinitions(modDate, commands, variantMap, valuesLists);
  }
  o22(modDate, commands, variantMap, valuesLists, $super) {
    modDate = modDate === VOID ? this.g22_1 : modDate;
    commands = commands === VOID ? this.h22_1 : commands;
    variantMap = variantMap === VOID ? this.i22_1 : variantMap;
    valuesLists = valuesLists === VOID ? this.j22_1 : valuesLists;
    return $super === VOID ? this.n22(modDate, commands, variantMap, valuesLists) : $super.n22.call(this, modDate, commands, variantMap, valuesLists);
  }
  toString() {
    return 'CaosLibDefinitions(modDate=' + this.g22_1.toString() + ', commands=' + toString(this.h22_1) + ', variantMap=' + toString(this.i22_1) + ', valuesLists=' + toString(this.j22_1) + ')';
  }
  hashCode() {
    var result = getBigIntHashCode(this.g22_1);
    result = imul(result, 31) + hashCode(this.h22_1) | 0;
    result = imul(result, 31) + hashCode(this.i22_1) | 0;
    result = imul(result, 31) + hashCode(this.j22_1) | 0;
    return result;
  }
  equals(other) {
    if (this === other)
      return true;
    if (!(other instanceof CaosLibDefinitions))
      return false;
    if (!(this.g22_1 === other.g22_1))
      return false;
    if (!equals(this.h22_1, other.h22_1))
      return false;
    if (!equals(this.i22_1, other.i22_1))
      return false;
    if (!equals(this.j22_1, other.j22_1))
      return false;
    return true;
  }
  static l22(seen0, modDate, commands, variantMap, valuesLists, serializationConstructorMarker) {
    Companion_getInstance_0();
    if (!(15 === (15 & seen0))) {
      throwMissingFieldException(seen0, 15, $serializer_getInstance_0().e22_1);
    }
    var $this = createThis(this);
    $this.g22_1 = modDate;
    $this.h22_1 = commands;
    $this.i22_1 = variantMap;
    $this.j22_1 = valuesLists;
    var tmp = $this;
    tmp.k22_1 = lazy_0(CaosLibDefinitions$_init_$lambda_tfojde($this));
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
    tmp.p22_1 = [null, null, null, lazy(tmp_0, CaosParameter$Companion$$childSerializers$_anonymous__oeh02l), null, null, null];
  }
}
class $serializer_1 {
  constructor() {
    $serializer_instance_1 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('com.bedalton.creatures.caos.libstructs.CaosParameter', this, 7);
    tmp0_serialDesc.z13('index', false);
    tmp0_serialDesc.h13(new ProtoNumber(1));
    tmp0_serialDesc.z13('name', false);
    tmp0_serialDesc.h13(new ProtoNumber(2));
    tmp0_serialDesc.z13('typeId', false);
    tmp0_serialDesc.h13(new ProtoNumber(3));
    tmp0_serialDesc.z13('valuesListIds', true);
    tmp0_serialDesc.h13(new ProtoNumber(4));
    tmp0_serialDesc.z13('description', true);
    tmp0_serialDesc.h13(new ProtoNumber(5));
    tmp0_serialDesc.z13('min', true);
    tmp0_serialDesc.h13(new ProtoNumber(6));
    tmp0_serialDesc.z13('max', true);
    tmp0_serialDesc.h13(new ProtoNumber(7));
    this.q22_1 = tmp0_serialDesc;
  }
  r22(encoder, value) {
    var tmp0_desc = this.q22_1;
    var tmp1_output = encoder.ew(tmp0_desc);
    var tmp2_cached = Companion_getInstance_1().p22_1;
    tmp1_output.px(tmp0_desc, 0, value.index);
    tmp1_output.ux(tmp0_desc, 1, value.name);
    tmp1_output.px(tmp0_desc, 2, value.typeId);
    if (tmp1_output.cy(tmp0_desc, 3) ? true : !(value.valuesListIds == null)) {
      tmp1_output.yx(tmp0_desc, 3, tmp2_cached[3].r3(), value.valuesListIds);
    }
    if (tmp1_output.cy(tmp0_desc, 4) ? true : !(value.description == null)) {
      tmp1_output.yx(tmp0_desc, 4, StringSerializer_getInstance(), value.description);
    }
    if (tmp1_output.cy(tmp0_desc, 5) ? true : !(value.min == null)) {
      tmp1_output.yx(tmp0_desc, 5, IntSerializer_getInstance(), value.min);
    }
    if (tmp1_output.cy(tmp0_desc, 6) ? true : !(value.max == null)) {
      tmp1_output.yx(tmp0_desc, 6, IntSerializer_getInstance(), value.max);
    }
    tmp1_output.fw(tmp0_desc);
  }
  pr(encoder, value) {
    return this.r22(encoder, value instanceof CaosParameter ? value : THROW_CCE());
  }
  qr(decoder) {
    var tmp0_desc = this.q22_1;
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
    var tmp12_input = decoder.ew(tmp0_desc);
    var tmp13_cached = Companion_getInstance_1().p22_1;
    if (tmp12_input.vw()) {
      tmp4_local0 = tmp12_input.jw(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp12_input.ow(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp12_input.jw(tmp0_desc, 2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp12_input.sw(tmp0_desc, 3, tmp13_cached[3].r3(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp12_input.sw(tmp0_desc, 4, StringSerializer_getInstance(), tmp8_local4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp9_local5 = tmp12_input.sw(tmp0_desc, 5, IntSerializer_getInstance(), tmp9_local5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
      tmp10_local6 = tmp12_input.sw(tmp0_desc, 6, IntSerializer_getInstance(), tmp10_local6);
      tmp3_bitMask0 = tmp3_bitMask0 | 64;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp12_input.ww(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp12_input.jw(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp12_input.ow(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp12_input.jw(tmp0_desc, 2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp12_input.sw(tmp0_desc, 3, tmp13_cached[3].r3(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp12_input.sw(tmp0_desc, 4, StringSerializer_getInstance(), tmp8_local4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp9_local5 = tmp12_input.sw(tmp0_desc, 5, IntSerializer_getInstance(), tmp9_local5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          case 6:
            tmp10_local6 = tmp12_input.sw(tmp0_desc, 6, IntSerializer_getInstance(), tmp10_local6);
            tmp3_bitMask0 = tmp3_bitMask0 | 64;
            break;
          default:
            throw UnknownFieldException.ht(tmp2_index);
        }
      }
    tmp12_input.fw(tmp0_desc);
    return CaosParameter.s22(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, tmp10_local6, null);
  }
  or() {
    return this.q22_1;
  }
  o14() {
    var tmp0_cached = Companion_getInstance_1().p22_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [IntSerializer_getInstance(), StringSerializer_getInstance(), IntSerializer_getInstance(), get_nullable(tmp0_cached[3].r3()), get_nullable(StringSerializer_getInstance()), get_nullable(IntSerializer_getInstance()), get_nullable(IntSerializer_getInstance())];
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
    tmp.z21_1 = lazy_0(CaosParameter$type$delegate$lambda(this));
  }
  h1s() {
    return this.index;
  }
  v() {
    return this.name;
  }
  t22() {
    return this.typeId;
  }
  u22() {
    return this.valuesListIds;
  }
  v22() {
    return this.description;
  }
  w22() {
    return this.min;
  }
  x22() {
    return this.max;
  }
  g1s() {
    var tmp0 = this.z21_1;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('type', 1, tmp, CaosParameter$_get_type_$ref_n5tl2b(), null);
    return tmp0.r3();
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
  static s22(seen0, index, name, typeId, valuesListIds, description, min, max, serializationConstructorMarker) {
    Companion_getInstance_1();
    if (!(7 === (7 & seen0))) {
      throwMissingFieldException(seen0, 7, $serializer_getInstance_1().q22_1);
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
    tmp.z21_1 = lazy_0(CaosParameter$_init_$lambda_3besw4($this));
    return $this;
  }
  get type() {
    return this.g1s();
  }
}
class Companion_2 {
  constructor() {
    Companion_instance_3 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp.y22_1 = lazy(tmp_0, CaosScriptVarTokenGroup$Companion$_anonymous__6yzde9);
  }
  n1e() {
    return _get_$cachedSerializer__te6jhj(this);
  }
  b15(typeParamsSerializers) {
    return this.n1e();
  }
}
class CaosScriptVarTokenGroup extends Enum {
  constructor(name, ordinal, value) {
    super(name, ordinal);
    this.b23_1 = value;
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
    tmp.c23_1 = [null, null, tmp_1, null, null, tmp_3, lazy(tmp_4, CaosValuesList$Companion$$childSerializers$_anonymous__8fg7ag_1)];
  }
}
class $serializer_2 {
  constructor() {
    $serializer_instance_2 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('com.bedalton.creatures.caos.libstructs.CaosValuesList', this, 7);
    tmp0_serialDesc.z13('id', false);
    tmp0_serialDesc.h13(new ProtoNumber(1));
    tmp0_serialDesc.z13('name', false);
    tmp0_serialDesc.h13(new ProtoNumber(2));
    tmp0_serialDesc.z13('values', false);
    tmp0_serialDesc.h13(new ProtoNumber(3));
    tmp0_serialDesc.z13('description', true);
    tmp0_serialDesc.h13(new ProtoNumber(4));
    tmp0_serialDesc.z13('extensionType', true);
    tmp0_serialDesc.h13(new ProtoNumber(5));
    tmp0_serialDesc.z13('negative', true);
    tmp0_serialDesc.z13('greaterThan', true);
    this.d23_1 = tmp0_serialDesc;
  }
  e23(encoder, value) {
    var tmp0_desc = this.d23_1;
    var tmp1_output = encoder.ew(tmp0_desc);
    var tmp2_cached = Companion_getInstance_3().c23_1;
    tmp1_output.px(tmp0_desc, 0, value.id);
    tmp1_output.ux(tmp0_desc, 1, value.name);
    tmp1_output.wx(tmp0_desc, 2, tmp2_cached[2].r3(), value.values);
    if (tmp1_output.cy(tmp0_desc, 3) ? true : !(value.description == null)) {
      tmp1_output.yx(tmp0_desc, 3, StringSerializer_getInstance(), value.description);
    }
    if (tmp1_output.cy(tmp0_desc, 4) ? true : !(value.extensionType == null)) {
      tmp1_output.yx(tmp0_desc, 4, StringSerializer_getInstance(), value.extensionType);
    }
    var tmp;
    if (tmp1_output.cy(tmp0_desc, 5)) {
      tmp = true;
    } else {
      // Inline function 'kotlin.collections.filter' call
      var tmp0 = value.values;
      // Inline function 'kotlin.collections.filterTo' call
      var destination = ArrayList.b2();
      var inductionVariable = 0;
      var last = tmp0.length;
      while (inductionVariable < last) {
        var element = tmp0[inductionVariable];
        inductionVariable = inductionVariable + 1 | 0;
        if (element.l23()) {
          destination.g2(element);
        }
      }
      tmp = !equals(value.f23_1, destination);
    }
    if (tmp) {
      tmp1_output.wx(tmp0_desc, 5, tmp2_cached[5].r3(), value.f23_1);
    }
    var tmp_0;
    if (tmp1_output.cy(tmp0_desc, 6)) {
      tmp_0 = true;
    } else {
      // Inline function 'kotlin.collections.filter' call
      var tmp0_0 = value.values;
      // Inline function 'kotlin.collections.filterTo' call
      var destination_0 = ArrayList.b2();
      var inductionVariable_0 = 0;
      var last_0 = tmp0_0.length;
      while (inductionVariable_0 < last_0) {
        var element_0 = tmp0_0[inductionVariable_0];
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        if (element_0.m23()) {
          destination_0.g2(element_0);
        }
      }
      tmp_0 = !equals(value.g23_1, destination_0);
    }
    if (tmp_0) {
      tmp1_output.wx(tmp0_desc, 6, tmp2_cached[6].r3(), value.g23_1);
    }
    tmp1_output.fw(tmp0_desc);
  }
  pr(encoder, value) {
    return this.e23(encoder, value instanceof CaosValuesList ? value : THROW_CCE());
  }
  qr(decoder) {
    var tmp0_desc = this.d23_1;
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
    var tmp12_input = decoder.ew(tmp0_desc);
    var tmp13_cached = Companion_getInstance_3().c23_1;
    if (tmp12_input.vw()) {
      tmp4_local0 = tmp12_input.jw(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp12_input.ow(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp12_input.qw(tmp0_desc, 2, tmp13_cached[2].r3(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp12_input.sw(tmp0_desc, 3, StringSerializer_getInstance(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp12_input.sw(tmp0_desc, 4, StringSerializer_getInstance(), tmp8_local4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp9_local5 = tmp12_input.qw(tmp0_desc, 5, tmp13_cached[5].r3(), tmp9_local5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
      tmp10_local6 = tmp12_input.qw(tmp0_desc, 6, tmp13_cached[6].r3(), tmp10_local6);
      tmp3_bitMask0 = tmp3_bitMask0 | 64;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp12_input.ww(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp12_input.jw(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp12_input.ow(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp12_input.qw(tmp0_desc, 2, tmp13_cached[2].r3(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp12_input.sw(tmp0_desc, 3, StringSerializer_getInstance(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp12_input.sw(tmp0_desc, 4, StringSerializer_getInstance(), tmp8_local4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp9_local5 = tmp12_input.qw(tmp0_desc, 5, tmp13_cached[5].r3(), tmp9_local5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          case 6:
            tmp10_local6 = tmp12_input.qw(tmp0_desc, 6, tmp13_cached[6].r3(), tmp10_local6);
            tmp3_bitMask0 = tmp3_bitMask0 | 64;
            break;
          default:
            throw UnknownFieldException.ht(tmp2_index);
        }
      }
    tmp12_input.fw(tmp0_desc);
    return CaosValuesList.n23(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, tmp10_local6, null);
  }
  or() {
    return this.d23_1;
  }
  o14() {
    var tmp0_cached = Companion_getInstance_3().c23_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [IntSerializer_getInstance(), StringSerializer_getInstance(), tmp0_cached[2].r3(), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), tmp0_cached[5].r3(), tmp0_cached[6].r3()];
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
    var destination = ArrayList.b2();
    var inductionVariable = 0;
    var last = tmp0.length;
    while (inductionVariable < last) {
      var element = tmp0[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      if (element.l23()) {
        destination.g2(element);
      }
    }
    tmp.f23_1 = destination;
    var tmp_0 = this;
    // Inline function 'kotlin.collections.filter' call
    var tmp0_0 = this.values;
    // Inline function 'kotlin.collections.filterTo' call
    var destination_0 = ArrayList.b2();
    var inductionVariable_0 = 0;
    var last_0 = tmp0_0.length;
    while (inductionVariable_0 < last_0) {
      var element_0 = tmp0_0[inductionVariable_0];
      inductionVariable_0 = inductionVariable_0 + 1 | 0;
      if (element_0.m23()) {
        destination_0.g2(element_0);
      }
    }
    tmp_0.g23_1 = destination_0;
    var tmp_1 = this;
    tmp_1.h23_1 = lazy_0(CaosValuesList$bitflag$delegate$lambda(this));
  }
  p23() {
    return this.id;
  }
  v() {
    return this.name;
  }
  v3() {
    return this.values;
  }
  v22() {
    return this.description;
  }
  q23() {
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
        if (element.q1s() === key) {
          tmp$ret$0 = element;
          break $l$block;
        }
      }
      tmp$ret$0 = null;
    }
    var tmp0_elvis_lhs = tmp$ret$0;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var tmp0_0 = this.f23_1;
      var tmp$ret$2;
      $l$block_0: {
        // Inline function 'kotlin.collections.firstOrNull' call
        var _iterator__ex2g4s = tmp0_0.d1();
        while (_iterator__ex2g4s.e1()) {
          var element_0 = _iterator__ex2g4s.f1();
          if (!(element_0.q1s() === key)) {
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
      var tmp0_1 = this.g23_1;
      var tmp$ret$4;
      $l$block_1: {
        // Inline function 'kotlin.collections.firstOrNull' call
        var _iterator__ex2g4s_0 = tmp0_1.d1();
        while (_iterator__ex2g4s_0.e1()) {
          var element_1 = _iterator__ex2g4s_0.f1();
          if (ensureNotNull(element_1.q1s()) < key) {
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
    if (!(this.o23() === other.o23()))
      return false;
    if (!(this.name === other.name))
      return false;
    if (!contentEquals(this.values, other.values))
      return false;
    if (!(this.description == other.description))
      return false;
    if (!(this.extensionType == other.extensionType))
      return false;
    if (!equals(this.f23_1, other.f23_1))
      return false;
    if (!equals(this.g23_1, other.g23_1))
      return false;
    return true;
  }
  hashCode() {
    var result = this.id;
    result = imul(31, result) + getBooleanHashCode(this.o23()) | 0;
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
    result = imul(31, result) + hashCode(this.f23_1) | 0;
    result = imul(31, result) + hashCode(this.g23_1) | 0;
    return result;
  }
  o23() {
    var tmp0 = this.h23_1;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('bitflag', 1, tmp, CaosValuesList$_get_bitflag_$ref_koiysb(), null);
    return tmp0.r3();
  }
  toString() {
    return 'CaosValuesList(id=' + this.id + ', name=' + this.name + ', values=' + toString(this.values) + ', description=' + this.description + ', extensionType=' + this.extensionType + ')';
  }
  static n23(seen0, id, name, values, description, extensionType, negative, greaterThan, serializationConstructorMarker) {
    Companion_getInstance_3();
    if (!(7 === (7 & seen0))) {
      throwMissingFieldException(seen0, 7, $serializer_getInstance_2().d23_1);
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
      var destination = ArrayList.b2();
      var inductionVariable = 0;
      var last = tmp0.length;
      while (inductionVariable < last) {
        var element = tmp0[inductionVariable];
        inductionVariable = inductionVariable + 1 | 0;
        if (element.l23()) {
          destination.g2(element);
        }
      }
      tmp.f23_1 = destination;
    } else
      $this.f23_1 = negative;
    if (0 === (seen0 & 64)) {
      var tmp_0 = $this;
      // Inline function 'kotlin.collections.filter' call
      var tmp0_0 = $this.values;
      // Inline function 'kotlin.collections.filterTo' call
      var destination_0 = ArrayList.b2();
      var inductionVariable_0 = 0;
      var last_0 = tmp0_0.length;
      while (inductionVariable_0 < last_0) {
        var element_0 = tmp0_0[inductionVariable_0];
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        if (element_0.m23()) {
          destination_0.g2(element_0);
        }
      }
      tmp_0.g23_1 = destination_0;
    } else
      $this.g23_1 = greaterThan;
    var tmp_1 = $this;
    tmp_1.h23_1 = lazy_0(CaosValuesList$_init_$lambda_11sxhl($this));
    return $this;
  }
}
class Companion_4 {}
class $serializer_3 {
  constructor() {
    $serializer_instance_3 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('com.bedalton.creatures.caos.libstructs.CaosValuesListValue', this, 4);
    tmp0_serialDesc.z13('value', false);
    tmp0_serialDesc.h13(new ProtoNumber(1));
    tmp0_serialDesc.z13('name', false);
    tmp0_serialDesc.h13(new ProtoNumber(2));
    tmp0_serialDesc.z13('description', true);
    tmp0_serialDesc.h13(new ProtoNumber(3));
    tmp0_serialDesc.z13('beforeRegion', true);
    tmp0_serialDesc.h13(new ProtoNumber(4));
    this.r23_1 = tmp0_serialDesc;
  }
  s23(encoder, value) {
    var tmp0_desc = this.r23_1;
    var tmp1_output = encoder.ew(tmp0_desc);
    tmp1_output.ux(tmp0_desc, 0, value.value);
    tmp1_output.ux(tmp0_desc, 1, value.name);
    if (tmp1_output.cy(tmp0_desc, 2) ? true : !(value.description == null)) {
      tmp1_output.yx(tmp0_desc, 2, StringSerializer_getInstance(), value.description);
    }
    if (tmp1_output.cy(tmp0_desc, 3) ? true : !(value.beforeRegion == null)) {
      tmp1_output.yx(tmp0_desc, 3, StringSerializer_getInstance(), value.beforeRegion);
    }
    tmp1_output.fw(tmp0_desc);
  }
  pr(encoder, value) {
    return this.s23(encoder, value instanceof ValuesListValue ? value : THROW_CCE());
  }
  qr(decoder) {
    var tmp0_desc = this.r23_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp11_input = decoder.ew(tmp0_desc);
    if (tmp11_input.vw()) {
      tmp4_local0 = tmp11_input.ow(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp11_input.ow(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp11_input.sw(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp11_input.sw(tmp0_desc, 3, StringSerializer_getInstance(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp11_input.ww(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp11_input.ow(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp11_input.ow(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp11_input.sw(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp11_input.sw(tmp0_desc, 3, StringSerializer_getInstance(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          default:
            throw UnknownFieldException.ht(tmp2_index);
        }
      }
    tmp11_input.fw(tmp0_desc);
    return ValuesListValue.t23(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, null);
  }
  or() {
    return this.r23_1;
  }
  o14() {
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
    tmp.i23_1 = lazy_0(CaosValuesListValue$intValue$delegate$lambda(this));
    var tmp_0 = this;
    tmp_0.j23_1 = lazy_0(CaosValuesListValue$not$delegate$lambda(this));
    var tmp_1 = this;
    tmp_1.k23_1 = lazy_0(CaosValuesListValue$greaterThan$delegate$lambda(this));
  }
  r3() {
    return this.value;
  }
  v() {
    return this.name;
  }
  v22() {
    return this.description;
  }
  u23() {
    return this.beforeRegion;
  }
  q1s() {
    var tmp0 = this.i23_1;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('intValue', 1, tmp, CaosValuesListValue$_get_intValue_$ref_pvr0wd(), null);
    return tmp0.r3();
  }
  l23() {
    var tmp0 = this.j23_1;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('not', 1, tmp, CaosValuesListValue$_get_not_$ref_4vgyw(), null);
    return tmp0.r3();
  }
  m23() {
    var tmp0 = this.k23_1;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('greaterThan', 1, tmp, CaosValuesListValue$_get_greaterThan_$ref_das0vk(), null);
    return tmp0.r3();
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
  static t23(seen0, value, name, description, beforeRegion, serializationConstructorMarker) {
    if (!(3 === (3 & seen0))) {
      throwMissingFieldException(seen0, 3, $serializer_getInstance_3().r23_1);
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
    tmp.i23_1 = lazy_0(CaosValuesListValue$_init_$lambda_7cqd18($this));
    var tmp_0 = $this;
    tmp_0.j23_1 = lazy_0(CaosValuesListValue$_init_$lambda_7cqd18_0($this));
    var tmp_1 = $this;
    tmp_1.k23_1 = lazy_0(CaosValuesListValue$_init_$lambda_7cqd18_1($this));
    return $this;
  }
  get intValue() {
    return this.q1s();
  }
  get negatedValue() {
    return this.l23();
  }
  get greaterThanValue() {
    return this.m23();
  }
}
class Companion_5 {}
class $serializer_4 {
  constructor() {
    $serializer_instance_4 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('com.bedalton.creatures.caos.libstructs.CaosVarConstraints', this, 5);
    tmp0_serialDesc.z13('VARx', false);
    tmp0_serialDesc.h13(new ProtoNumber(1));
    tmp0_serialDesc.z13('VAxx', false);
    tmp0_serialDesc.h13(new ProtoNumber(2));
    tmp0_serialDesc.z13('OBVx', false);
    tmp0_serialDesc.h13(new ProtoNumber(3));
    tmp0_serialDesc.z13('OVxx', false);
    tmp0_serialDesc.h13(new ProtoNumber(4));
    tmp0_serialDesc.z13('MVxx', false);
    tmp0_serialDesc.h13(new ProtoNumber(5));
    this.v23_1 = tmp0_serialDesc;
  }
  w23(encoder, value) {
    var tmp0_desc = this.v23_1;
    var tmp1_output = encoder.ew(tmp0_desc);
    tmp1_output.yx(tmp0_desc, 0, IntSerializer_getInstance(), value.x23_1);
    tmp1_output.yx(tmp0_desc, 1, IntSerializer_getInstance(), value.y23_1);
    tmp1_output.yx(tmp0_desc, 2, IntSerializer_getInstance(), value.z23_1);
    tmp1_output.yx(tmp0_desc, 3, IntSerializer_getInstance(), value.a24_1);
    tmp1_output.yx(tmp0_desc, 4, IntSerializer_getInstance(), value.b24_1);
    tmp1_output.fw(tmp0_desc);
  }
  pr(encoder, value) {
    return this.w23(encoder, value instanceof CaosVarConstraints ? value : THROW_CCE());
  }
  qr(decoder) {
    var tmp0_desc = this.v23_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_local4 = null;
    var tmp9_input = decoder.ew(tmp0_desc);
    if (tmp9_input.vw()) {
      tmp4_local0 = tmp9_input.sw(tmp0_desc, 0, IntSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp9_input.sw(tmp0_desc, 1, IntSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp9_input.sw(tmp0_desc, 2, IntSerializer_getInstance(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp9_input.sw(tmp0_desc, 3, IntSerializer_getInstance(), tmp7_local3);
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
            tmp4_local0 = tmp9_input.sw(tmp0_desc, 0, IntSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp9_input.sw(tmp0_desc, 1, IntSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp9_input.sw(tmp0_desc, 2, IntSerializer_getInstance(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp9_input.sw(tmp0_desc, 3, IntSerializer_getInstance(), tmp7_local3);
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
    return CaosVarConstraints.c24(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, null);
  }
  or() {
    return this.v23_1;
  }
  o14() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(IntSerializer_getInstance()), get_nullable(IntSerializer_getInstance()), get_nullable(IntSerializer_getInstance()), get_nullable(IntSerializer_getInstance()), get_nullable(IntSerializer_getInstance())];
  }
}
class CaosVarConstraints {
  constructor(VARx, VAxx, OBVx, OVxx, MVxx) {
    this.x23_1 = VARx;
    this.y23_1 = VAxx;
    this.z23_1 = OBVx;
    this.a24_1 = OVxx;
    this.b24_1 = MVxx;
  }
  d24(key) {
    var tmp;
    switch (key.k1_1) {
      case 1:
        tmp = this.x23_1;
        break;
      case 3:
        tmp = this.y23_1;
        break;
      case 2:
        tmp = this.z23_1;
        break;
      case 4:
        tmp = this.a24_1;
        break;
      case 5:
        tmp = this.b24_1;
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
    return this.d24(key instanceof CaosScriptVarTokenGroup ? key : THROW_CCE());
  }
  toString() {
    return 'CaosVarConstraints(VARx=' + this.x23_1 + ', VAxx=' + this.y23_1 + ', OBVx=' + this.z23_1 + ', OVxx=' + this.a24_1 + ', MVxx=' + this.b24_1 + ')';
  }
  hashCode() {
    var result = this.x23_1 == null ? 0 : this.x23_1;
    result = imul(result, 31) + (this.y23_1 == null ? 0 : this.y23_1) | 0;
    result = imul(result, 31) + (this.z23_1 == null ? 0 : this.z23_1) | 0;
    result = imul(result, 31) + (this.a24_1 == null ? 0 : this.a24_1) | 0;
    result = imul(result, 31) + (this.b24_1 == null ? 0 : this.b24_1) | 0;
    return result;
  }
  equals(other) {
    if (this === other)
      return true;
    if (!(other instanceof CaosVarConstraints))
      return false;
    if (!(this.x23_1 == other.x23_1))
      return false;
    if (!(this.y23_1 == other.y23_1))
      return false;
    if (!(this.z23_1 == other.z23_1))
      return false;
    if (!(this.a24_1 == other.a24_1))
      return false;
    if (!(this.b24_1 == other.b24_1))
      return false;
    return true;
  }
  static c24(seen0, VARx, VAxx, OBVx, OVxx, MVxx, serializationConstructorMarker) {
    if (!(31 === (31 & seen0))) {
      throwMissingFieldException(seen0, 31, $serializer_getInstance_4().v23_1);
    }
    var $this = createThis(this);
    $this.x23_1 = VARx;
    $this.y23_1 = VAxx;
    $this.z23_1 = OBVx;
    $this.a24_1 = OVxx;
    $this.b24_1 = MVxx;
    return $this;
  }
}
class CaosVariant {
  constructor(code, fullName, index) {
    Companion_getInstance_6();
    this.g24_1 = code;
    this.h24_1 = fullName;
    this.i24_1 = index;
  }
  j24() {
    return this.g24_1;
  }
  h1s() {
    return this.i24_1;
  }
  k24() {
    return get_VARIANT_OLD().n2(this);
  }
  l24() {
    return !get_VARIANT_OLD().n2(this);
  }
  m24() {
    return !get_VARIANT_OLD().n2(this);
  }
  toString() {
    return this.j24();
  }
  compareTo(version) {
    return (this.h1s() - version | 0) < 0 ? -1 : (this.h1s() - version | 0) > 0 ? 1 : 0;
  }
  equals(other) {
    if (this === other)
      return true;
    if (!(other instanceof CaosVariant))
      return false;
    if (!(this.j24() === other.j24()))
      return false;
    return true;
  }
  hashCode() {
    return getStringHashCode(this.j24());
  }
  get isOld() {
    return this.k24();
  }
  get isNotOld() {
    return this.l24();
  }
  get isNew() {
    return this.m24();
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
    tmp.e24_1 = ArrayList.b2();
    var tmp_0 = this;
    var tmp_1 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp_0.f24_1 = lazy(tmp_1, CaosVariant$Companion$_anonymous__9oo02c);
  }
  n24(variant) {
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
        var tmp0 = this.e24_1;
        var tmp$ret$0;
        $l$block: {
          // Inline function 'kotlin.collections.firstOrNull' call
          var _iterator__ex2g4s = tmp0.d1();
          while (_iterator__ex2g4s.e1()) {
            var element = _iterator__ex2g4s.f1();
            if (element.j24() === variant) {
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
  n1e() {
    return _get_$cachedSerializer__te6jhj_0(this);
  }
  b15(typeParamsSerializers) {
    return this.n1e();
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
    tmp.o24_1 = [null, null, null, tmp_1, tmp_3, tmp_5, lazy(tmp_6, CaosVariantData$Companion$$childSerializers$_anonymous__z6x1a5_2)];
  }
}
class $serializer_5 {
  constructor() {
    $serializer_instance_5 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('com.bedalton.creatures.caos.libstructs.CaosVariantData', this, 7);
    tmp0_serialDesc.z13('name', false);
    tmp0_serialDesc.h13(new ProtoNumber(1));
    tmp0_serialDesc.z13('code', false);
    tmp0_serialDesc.h13(new ProtoNumber(2));
    tmp0_serialDesc.z13('vars', false);
    tmp0_serialDesc.h13(new ProtoNumber(3));
    tmp0_serialDesc.z13('commands', false);
    tmp0_serialDesc.h13(new ProtoNumber(4));
    tmp0_serialDesc.z13('lvalues', false);
    tmp0_serialDesc.h13(new ProtoNumber(5));
    tmp0_serialDesc.z13('rvalues', false);
    tmp0_serialDesc.h13(new ProtoNumber(6));
    tmp0_serialDesc.z13('valuesListsIds', true);
    tmp0_serialDesc.h13(new ProtoNumber(7));
    this.p24_1 = tmp0_serialDesc;
  }
  q24(encoder, value) {
    var tmp0_desc = this.p24_1;
    var tmp1_output = encoder.ew(tmp0_desc);
    var tmp2_cached = Companion_getInstance_7().o24_1;
    tmp1_output.ux(tmp0_desc, 0, value.r24_1);
    tmp1_output.ux(tmp0_desc, 1, value.s24_1);
    tmp1_output.wx(tmp0_desc, 2, $serializer_getInstance_4(), value.t24_1);
    tmp1_output.wx(tmp0_desc, 3, tmp2_cached[3].r3(), value.u24_1);
    tmp1_output.wx(tmp0_desc, 4, tmp2_cached[4].r3(), value.v24_1);
    tmp1_output.wx(tmp0_desc, 5, tmp2_cached[5].r3(), value.w24_1);
    var tmp;
    if (tmp1_output.cy(tmp0_desc, 6)) {
      tmp = true;
    } else {
      // Inline function 'kotlin.emptyArray' call
      var tmp$ret$0 = [];
      tmp = !equals(value.x24_1, tmp$ret$0);
    }
    if (tmp) {
      tmp1_output.wx(tmp0_desc, 6, tmp2_cached[6].r3(), value.x24_1);
    }
    tmp1_output.fw(tmp0_desc);
  }
  pr(encoder, value) {
    return this.q24(encoder, value instanceof CaosVariantData ? value : THROW_CCE());
  }
  qr(decoder) {
    var tmp0_desc = this.p24_1;
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
    var tmp13_input = decoder.ew(tmp0_desc);
    var tmp14_cached = Companion_getInstance_7().o24_1;
    if (tmp13_input.vw()) {
      tmp4_local0 = tmp13_input.ow(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp13_input.ow(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp13_input.qw(tmp0_desc, 2, $serializer_getInstance_4(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp13_input.qw(tmp0_desc, 3, tmp14_cached[3].r3(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp13_input.qw(tmp0_desc, 4, tmp14_cached[4].r3(), tmp8_local4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp9_local5 = tmp13_input.qw(tmp0_desc, 5, tmp14_cached[5].r3(), tmp9_local5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
      tmp10_local6 = tmp13_input.qw(tmp0_desc, 6, tmp14_cached[6].r3(), tmp10_local6);
      tmp3_bitMask0 = tmp3_bitMask0 | 64;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp13_input.ww(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp13_input.ow(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp13_input.ow(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp13_input.qw(tmp0_desc, 2, $serializer_getInstance_4(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp13_input.qw(tmp0_desc, 3, tmp14_cached[3].r3(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp13_input.qw(tmp0_desc, 4, tmp14_cached[4].r3(), tmp8_local4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp9_local5 = tmp13_input.qw(tmp0_desc, 5, tmp14_cached[5].r3(), tmp9_local5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          case 6:
            tmp10_local6 = tmp13_input.qw(tmp0_desc, 6, tmp14_cached[6].r3(), tmp10_local6);
            tmp3_bitMask0 = tmp3_bitMask0 | 64;
            break;
          default:
            throw UnknownFieldException.ht(tmp2_index);
        }
      }
    tmp13_input.fw(tmp0_desc);
    return CaosVariantData.a25(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, tmp10_local6, null);
  }
  or() {
    return this.p24_1;
  }
  o14() {
    var tmp0_cached = Companion_getInstance_7().o24_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), StringSerializer_getInstance(), $serializer_getInstance_4(), tmp0_cached[3].r3(), tmp0_cached[4].r3(), tmp0_cached[5].r3(), tmp0_cached[6].r3()];
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
    this.r24_1 = name;
    this.s24_1 = code;
    this.t24_1 = vars;
    this.u24_1 = commands;
    this.v24_1 = lvalues;
    this.w24_1 = rvalues;
    this.x24_1 = valuesListsIds;
    var tmp_0 = this;
    tmp_0.y24_1 = lazy_0(CaosVariantData$isOld$delegate$lambda(this));
    var tmp_1 = this;
    tmp_1.z24_1 = lazy_0(CaosVariantData$isNew$delegate$lambda(this));
  }
  equals(other) {
    if (this === other)
      return true;
    if (!(other instanceof CaosVariantData))
      return false;
    if (!(this.r24_1 === other.r24_1))
      return false;
    if (!(this.s24_1 === other.s24_1))
      return false;
    if (!this.t24_1.equals(other.t24_1))
      return false;
    if (!equals(this.u24_1, other.u24_1))
      return false;
    if (!equals(this.v24_1, other.v24_1))
      return false;
    if (!equals(this.w24_1, other.w24_1))
      return false;
    if (!contentEquals(this.x24_1, other.x24_1))
      return false;
    return true;
  }
  hashCode() {
    var result = getStringHashCode(this.r24_1);
    result = imul(31, result) + getStringHashCode(this.s24_1) | 0;
    result = imul(31, result) + this.t24_1.hashCode() | 0;
    result = imul(31, result) + hashCode(this.u24_1) | 0;
    result = imul(31, result) + hashCode(this.v24_1) | 0;
    result = imul(31, result) + hashCode(this.w24_1) | 0;
    result = imul(31, result) + contentHashCode(this.x24_1) | 0;
    return result;
  }
  b25(name, code, vars, commands, lvalues, rvalues, valuesListsIds) {
    return new CaosVariantData(name, code, vars, commands, lvalues, rvalues, valuesListsIds);
  }
  c25(name, code, vars, commands, lvalues, rvalues, valuesListsIds, $super) {
    name = name === VOID ? this.r24_1 : name;
    code = code === VOID ? this.s24_1 : code;
    vars = vars === VOID ? this.t24_1 : vars;
    commands = commands === VOID ? this.u24_1 : commands;
    lvalues = lvalues === VOID ? this.v24_1 : lvalues;
    rvalues = rvalues === VOID ? this.w24_1 : rvalues;
    valuesListsIds = valuesListsIds === VOID ? this.x24_1 : valuesListsIds;
    return $super === VOID ? this.b25(name, code, vars, commands, lvalues, rvalues, valuesListsIds) : $super.b25.call(this, name, code, vars, commands, lvalues, rvalues, valuesListsIds);
  }
  toString() {
    return 'CaosVariantData(name=' + this.r24_1 + ', code=' + this.s24_1 + ', vars=' + this.t24_1.toString() + ', commands=' + toString(this.u24_1) + ', lvalues=' + toString(this.v24_1) + ', rvalues=' + toString(this.w24_1) + ', valuesListsIds=' + toString(this.x24_1) + ')';
  }
  static a25(seen0, name, code, vars, commands, lvalues, rvalues, valuesListsIds, serializationConstructorMarker) {
    Companion_getInstance_7();
    if (!(63 === (63 & seen0))) {
      throwMissingFieldException(seen0, 63, $serializer_getInstance_5().p24_1);
    }
    var $this = createThis(this);
    $this.r24_1 = name;
    $this.s24_1 = code;
    $this.t24_1 = vars;
    $this.u24_1 = commands;
    $this.v24_1 = lvalues;
    $this.w24_1 = rvalues;
    if (0 === (seen0 & 64)) {
      var tmp = $this;
      // Inline function 'kotlin.emptyArray' call
      tmp.x24_1 = [];
    } else
      $this.x24_1 = valuesListsIds;
    var tmp_0 = $this;
    tmp_0.y24_1 = lazy_0(CaosVariantData$_init_$lambda_7brc0u($this));
    var tmp_1 = $this;
    tmp_1.z24_1 = lazy_0(CaosVariantData$_init_$lambda_7brc0u_0($this));
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
    tmp.d25_1 = [tmp_1, tmp_3, lazy(tmp_4, Commands$Companion$$childSerializers$_anonymous__37qrhe_1)];
  }
}
class $serializer_6 {
  constructor() {
    $serializer_instance_6 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('com.bedalton.creatures.caos.libstructs.Commands', this, 3);
    tmp0_serialDesc.z13('commands', false);
    tmp0_serialDesc.h13(new ProtoNumber(1));
    tmp0_serialDesc.z13('rvalues', false);
    tmp0_serialDesc.h13(new ProtoNumber(2));
    tmp0_serialDesc.z13('lvalues', false);
    tmp0_serialDesc.h13(new ProtoNumber(3));
    this.e25_1 = tmp0_serialDesc;
  }
  f25(encoder, value) {
    var tmp0_desc = this.e25_1;
    var tmp1_output = encoder.ew(tmp0_desc);
    var tmp2_cached = Companion_getInstance_8().d25_1;
    tmp1_output.wx(tmp0_desc, 0, tmp2_cached[0].r3(), value.commands);
    tmp1_output.wx(tmp0_desc, 1, tmp2_cached[1].r3(), value.rvalues);
    tmp1_output.wx(tmp0_desc, 2, tmp2_cached[2].r3(), value.lvalues);
    tmp1_output.fw(tmp0_desc);
  }
  pr(encoder, value) {
    return this.f25(encoder, value instanceof Commands ? value : THROW_CCE());
  }
  qr(decoder) {
    var tmp0_desc = this.e25_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_input = decoder.ew(tmp0_desc);
    var tmp8_cached = Companion_getInstance_8().d25_1;
    if (tmp7_input.vw()) {
      tmp4_local0 = tmp7_input.qw(tmp0_desc, 0, tmp8_cached[0].r3(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp7_input.qw(tmp0_desc, 1, tmp8_cached[1].r3(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp7_input.qw(tmp0_desc, 2, tmp8_cached[2].r3(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp7_input.ww(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp7_input.qw(tmp0_desc, 0, tmp8_cached[0].r3(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp7_input.qw(tmp0_desc, 1, tmp8_cached[1].r3(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp7_input.qw(tmp0_desc, 2, tmp8_cached[2].r3(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          default:
            throw UnknownFieldException.ht(tmp2_index);
        }
      }
    tmp7_input.fw(tmp0_desc);
    return Commands.g25(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, null);
  }
  or() {
    return this.e25_1;
  }
  o14() {
    var tmp0_cached = Companion_getInstance_8().d25_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [tmp0_cached[0].r3(), tmp0_cached[1].r3(), tmp0_cached[2].r3()];
  }
}
class Commands {
  constructor(commands, rvalues, lvalues) {
    Companion_getInstance_8();
    this.commands = commands;
    this.rvalues = rvalues;
    this.lvalues = lvalues;
  }
  h25() {
    return this.commands;
  }
  i25() {
    return this.rvalues;
  }
  j25() {
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
  static g25(seen0, commands, rvalues, lvalues, serializationConstructorMarker) {
    Companion_getInstance_8();
    if (!(7 === (7 & seen0))) {
      throwMissingFieldException(seen0, 7, $serializer_getInstance_6().e25_1);
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
    this.k25_1 = getter;
  }
  y3(key) {
    return this.k25_1(key);
  }
  get(key) {
    return this.y3(key);
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
    tmp.o25_1 = [null, tmp_1, null, null, null, null, null, tmp_3, null, null, lazy(tmp_4, VariantCaosCommand$Companion$$childSerializers$_anonymous__495hkq_1), null, null, null, null, null, null];
  }
}
class $serializer_7 {
  constructor() {
    $serializer_instance_7 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('com.bedalton.creatures.caos.libstructs.VariantCaosCommand', this, 17);
    tmp0_serialDesc.z13('command', false);
    tmp0_serialDesc.h13(new ProtoNumber(1));
    tmp0_serialDesc.z13('parameters', false);
    tmp0_serialDesc.h13(new ProtoNumber(2));
    tmp0_serialDesc.z13('isLvalue', false);
    tmp0_serialDesc.h13(new ProtoNumber(3));
    tmp0_serialDesc.z13('isRvalue', false);
    tmp0_serialDesc.h13(new ProtoNumber(4));
    tmp0_serialDesc.z13('isCommand', true);
    tmp0_serialDesc.h13(new ProtoNumber(5));
    tmp0_serialDesc.z13('returnTypeId', false);
    tmp0_serialDesc.h13(new ProtoNumber(6));
    tmp0_serialDesc.z13('returnTypeName', false);
    tmp0_serialDesc.h13(new ProtoNumber(7));
    tmp0_serialDesc.z13('variants', false);
    tmp0_serialDesc.h13(new ProtoNumber(8));
    tmp0_serialDesc.z13('description', false);
    tmp0_serialDesc.h13(new ProtoNumber(9));
    tmp0_serialDesc.z13('lvalueName', true);
    tmp0_serialDesc.h13(new ProtoNumber(10));
    tmp0_serialDesc.z13('returnValuesListIds', true);
    tmp0_serialDesc.h13(new ProtoNumber(11));
    tmp0_serialDesc.z13('requiresOwnr', true);
    tmp0_serialDesc.h13(new ProtoNumber(12));
    tmp0_serialDesc.z13('commandGroup', false);
    tmp0_serialDesc.h13(new ProtoNumber(13));
    tmp0_serialDesc.z13('doifFormat', true);
    tmp0_serialDesc.h13(new ProtoNumber(14));
    tmp0_serialDesc.z13('requiresCreatureOwnr', true);
    tmp0_serialDesc.h13(new ProtoNumber(15));
    tmp0_serialDesc.z13('tokens', false);
    tmp0_serialDesc.h13(new ProtoNumber(16));
    tmp0_serialDesc.z13('ceOnly', false);
    tmp0_serialDesc.h13(new ProtoNumber(17));
    this.p25_1 = tmp0_serialDesc;
  }
  q25(encoder, value) {
    var tmp0_desc = this.p25_1;
    var tmp1_output = encoder.ew(tmp0_desc);
    var tmp2_cached = Companion_getInstance_9().o25_1;
    tmp1_output.ux(tmp0_desc, 0, value.command);
    tmp1_output.wx(tmp0_desc, 1, tmp2_cached[1].r3(), value.parameters);
    tmp1_output.mx(tmp0_desc, 2, value.isLvalue);
    tmp1_output.mx(tmp0_desc, 3, value.isRvalue);
    if (tmp1_output.cy(tmp0_desc, 4) ? true : !(value.isCommand === !(value.isRvalue || value.isLvalue))) {
      tmp1_output.mx(tmp0_desc, 4, value.isCommand);
    }
    tmp1_output.px(tmp0_desc, 5, value.returnTypeId);
    tmp1_output.ux(tmp0_desc, 6, value.returnTypeName);
    tmp1_output.wx(tmp0_desc, 7, tmp2_cached[7].r3(), value.variants);
    tmp1_output.yx(tmp0_desc, 8, StringSerializer_getInstance(), value.description);
    if (tmp1_output.cy(tmp0_desc, 9) ? true : !(value.lvalueName == null)) {
      tmp1_output.yx(tmp0_desc, 9, StringSerializer_getInstance(), value.lvalueName);
    }
    if (tmp1_output.cy(tmp0_desc, 10) ? true : !(value.returnValuesListIds == null)) {
      tmp1_output.yx(tmp0_desc, 10, tmp2_cached[10].r3(), value.returnValuesListIds);
    }
    if (tmp1_output.cy(tmp0_desc, 11) ? true : !(value.requiresOwnr === 0)) {
      tmp1_output.px(tmp0_desc, 11, value.requiresOwnr);
    }
    tmp1_output.ux(tmp0_desc, 12, value.commandGroup);
    if (tmp1_output.cy(tmp0_desc, 13) ? true : !(value.doifFormat == null)) {
      tmp1_output.yx(tmp0_desc, 13, StringSerializer_getInstance(), value.doifFormat);
    }
    if (tmp1_output.cy(tmp0_desc, 14) ? true : !(value.requiresCreatureOwnr === false)) {
      tmp1_output.mx(tmp0_desc, 14, value.requiresCreatureOwnr);
    }
    tmp1_output.wx(tmp0_desc, 15, IntArraySerializer_getInstance(), value.tokens);
    tmp1_output.mx(tmp0_desc, 16, value.ceOnly);
    tmp1_output.fw(tmp0_desc);
  }
  pr(encoder, value) {
    return this.q25(encoder, value instanceof ICaosCommand ? value : THROW_CCE());
  }
  qr(decoder) {
    var tmp0_desc = this.p25_1;
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
    var tmp21_input = decoder.ew(tmp0_desc);
    var tmp22_cached = Companion_getInstance_9().o25_1;
    if (tmp21_input.vw()) {
      tmp4_local0 = tmp21_input.ow(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp21_input.qw(tmp0_desc, 1, tmp22_cached[1].r3(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp21_input.gw(tmp0_desc, 2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp21_input.gw(tmp0_desc, 3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp21_input.gw(tmp0_desc, 4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp9_local5 = tmp21_input.jw(tmp0_desc, 5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
      tmp10_local6 = tmp21_input.ow(tmp0_desc, 6);
      tmp3_bitMask0 = tmp3_bitMask0 | 64;
      tmp11_local7 = tmp21_input.qw(tmp0_desc, 7, tmp22_cached[7].r3(), tmp11_local7);
      tmp3_bitMask0 = tmp3_bitMask0 | 128;
      tmp12_local8 = tmp21_input.sw(tmp0_desc, 8, StringSerializer_getInstance(), tmp12_local8);
      tmp3_bitMask0 = tmp3_bitMask0 | 256;
      tmp13_local9 = tmp21_input.sw(tmp0_desc, 9, StringSerializer_getInstance(), tmp13_local9);
      tmp3_bitMask0 = tmp3_bitMask0 | 512;
      tmp14_local10 = tmp21_input.sw(tmp0_desc, 10, tmp22_cached[10].r3(), tmp14_local10);
      tmp3_bitMask0 = tmp3_bitMask0 | 1024;
      tmp15_local11 = tmp21_input.jw(tmp0_desc, 11);
      tmp3_bitMask0 = tmp3_bitMask0 | 2048;
      tmp16_local12 = tmp21_input.ow(tmp0_desc, 12);
      tmp3_bitMask0 = tmp3_bitMask0 | 4096;
      tmp17_local13 = tmp21_input.sw(tmp0_desc, 13, StringSerializer_getInstance(), tmp17_local13);
      tmp3_bitMask0 = tmp3_bitMask0 | 8192;
      tmp18_local14 = tmp21_input.gw(tmp0_desc, 14);
      tmp3_bitMask0 = tmp3_bitMask0 | 16384;
      tmp19_local15 = tmp21_input.qw(tmp0_desc, 15, IntArraySerializer_getInstance(), tmp19_local15);
      tmp3_bitMask0 = tmp3_bitMask0 | 32768;
      tmp20_local16 = tmp21_input.gw(tmp0_desc, 16);
      tmp3_bitMask0 = tmp3_bitMask0 | 65536;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp21_input.ww(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp21_input.ow(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp21_input.qw(tmp0_desc, 1, tmp22_cached[1].r3(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp21_input.gw(tmp0_desc, 2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp21_input.gw(tmp0_desc, 3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp21_input.gw(tmp0_desc, 4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp9_local5 = tmp21_input.jw(tmp0_desc, 5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          case 6:
            tmp10_local6 = tmp21_input.ow(tmp0_desc, 6);
            tmp3_bitMask0 = tmp3_bitMask0 | 64;
            break;
          case 7:
            tmp11_local7 = tmp21_input.qw(tmp0_desc, 7, tmp22_cached[7].r3(), tmp11_local7);
            tmp3_bitMask0 = tmp3_bitMask0 | 128;
            break;
          case 8:
            tmp12_local8 = tmp21_input.sw(tmp0_desc, 8, StringSerializer_getInstance(), tmp12_local8);
            tmp3_bitMask0 = tmp3_bitMask0 | 256;
            break;
          case 9:
            tmp13_local9 = tmp21_input.sw(tmp0_desc, 9, StringSerializer_getInstance(), tmp13_local9);
            tmp3_bitMask0 = tmp3_bitMask0 | 512;
            break;
          case 10:
            tmp14_local10 = tmp21_input.sw(tmp0_desc, 10, tmp22_cached[10].r3(), tmp14_local10);
            tmp3_bitMask0 = tmp3_bitMask0 | 1024;
            break;
          case 11:
            tmp15_local11 = tmp21_input.jw(tmp0_desc, 11);
            tmp3_bitMask0 = tmp3_bitMask0 | 2048;
            break;
          case 12:
            tmp16_local12 = tmp21_input.ow(tmp0_desc, 12);
            tmp3_bitMask0 = tmp3_bitMask0 | 4096;
            break;
          case 13:
            tmp17_local13 = tmp21_input.sw(tmp0_desc, 13, StringSerializer_getInstance(), tmp17_local13);
            tmp3_bitMask0 = tmp3_bitMask0 | 8192;
            break;
          case 14:
            tmp18_local14 = tmp21_input.gw(tmp0_desc, 14);
            tmp3_bitMask0 = tmp3_bitMask0 | 16384;
            break;
          case 15:
            tmp19_local15 = tmp21_input.qw(tmp0_desc, 15, IntArraySerializer_getInstance(), tmp19_local15);
            tmp3_bitMask0 = tmp3_bitMask0 | 32768;
            break;
          case 16:
            tmp20_local16 = tmp21_input.gw(tmp0_desc, 16);
            tmp3_bitMask0 = tmp3_bitMask0 | 65536;
            break;
          default:
            throw UnknownFieldException.ht(tmp2_index);
        }
      }
    tmp21_input.fw(tmp0_desc);
    return ICaosCommand.r25(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, tmp10_local6, tmp11_local7, tmp12_local8, tmp13_local9, tmp14_local10, tmp15_local11, tmp16_local12, tmp17_local13, tmp18_local14, tmp19_local15, tmp20_local16, null);
  }
  or() {
    return this.p25_1;
  }
  o14() {
    var tmp0_cached = Companion_getInstance_9().o25_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), tmp0_cached[1].r3(), BooleanSerializer_getInstance(), BooleanSerializer_getInstance(), BooleanSerializer_getInstance(), IntSerializer_getInstance(), StringSerializer_getInstance(), tmp0_cached[7].r3(), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(tmp0_cached[10].r3()), IntSerializer_getInstance(), StringSerializer_getInstance(), get_nullable(StringSerializer_getInstance()), BooleanSerializer_getInstance(), IntArraySerializer_getInstance(), BooleanSerializer_getInstance()];
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
  p1s() {
    return this.command;
  }
  s25() {
    return this.parameters;
  }
  t25() {
    return this.isLvalue;
  }
  u25() {
    return this.isRvalue;
  }
  a22() {
    return this.isCommand;
  }
  v25() {
    return this.returnTypeId;
  }
  w25() {
    return this.returnTypeName;
  }
  x25() {
    return this.variants;
  }
  v22() {
    return this.description;
  }
  y25() {
    return this.lvalueName;
  }
  z25() {
    return this.returnValuesListIds;
  }
  a26() {
    return this.requiresOwnr;
  }
  b26() {
    return this.commandGroup;
  }
  c26() {
    return this.doifFormat;
  }
  d26() {
    return this.requiresCreatureOwnr;
  }
  s1s() {
    return this.tokens;
  }
  e26() {
    return this.ceOnly;
  }
  f26() {
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
  g26(command, parameters, isLvalue, isRvalue, isCommand, returnTypeId, returnTypeName, variants, description, lvalueName, returnValuesListIds, requiresOwnr, commandGroup, doifFormat, requiresCreatureOwnr, tokens, ceOnly) {
    return new ICaosCommand(command, parameters, isLvalue, isRvalue, isCommand, returnTypeId, returnTypeName, variants, description, lvalueName, returnValuesListIds, requiresOwnr, commandGroup, doifFormat, requiresCreatureOwnr, tokens, ceOnly);
  }
  h26(command, parameters, isLvalue, isRvalue, isCommand, returnTypeId, returnTypeName, variants, description, lvalueName, returnValuesListIds, requiresOwnr, commandGroup, doifFormat, requiresCreatureOwnr, tokens, ceOnly, $super) {
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
    return $super === VOID ? this.g26(command, parameters, isLvalue, isRvalue, isCommand, returnTypeId, returnTypeName, variants, description, lvalueName, returnValuesListIds, requiresOwnr, commandGroup, doifFormat, requiresCreatureOwnr, tokens, ceOnly) : $super.g26.call(this, command, parameters, isLvalue, isRvalue, isCommand, returnTypeId, returnTypeName, variants, description, lvalueName, returnValuesListIds, requiresOwnr, commandGroup, doifFormat, requiresCreatureOwnr, tokens, ceOnly);
  }
  toString() {
    return 'VariantCaosCommand(command=' + this.command + ', parameters=' + toString(this.parameters) + ', isLvalue=' + this.isLvalue + ', isRvalue=' + this.isRvalue + ', isCommand=' + this.isCommand + ', returnTypeId=' + this.returnTypeId + ', returnTypeName=' + this.returnTypeName + ', variants=' + toString(this.variants) + ', description=' + this.description + ', lvalueName=' + this.lvalueName + ', returnValuesListIds=' + toString_0(this.returnValuesListIds) + ', requiresOwnr=' + this.requiresOwnr + ', commandGroup=' + this.commandGroup + ', doifFormat=' + this.doifFormat + ', requiresCreatureOwnr=' + this.requiresCreatureOwnr + ', tokens=' + toString(this.tokens) + ', ceOnly=' + this.ceOnly + ')';
  }
  static r25(seen0, command, parameters, isLvalue, isRvalue, isCommand, returnTypeId, returnTypeName, variants, description, lvalueName, returnValuesListIds, requiresOwnr, commandGroup, doifFormat, requiresCreatureOwnr, tokens, ceOnly, serializationConstructorMarker) {
    Companion_getInstance_9();
    if (!(102895 === (102895 & seen0))) {
      throwMissingFieldException(seen0, 102895, $serializer_getInstance_7().p25_1);
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
    tmp0_serialDesc.z13('index', false);
    tmp0_serialDesc.h13(new ProtoNumber(1));
    tmp0_serialDesc.z13('name', false);
    tmp0_serialDesc.h13(new ProtoNumber(2));
    tmp0_serialDesc.z13('typeId', false);
    tmp0_serialDesc.h13(new ProtoNumber(3));
    tmp0_serialDesc.z13('typeName', false);
    tmp0_serialDesc.h13(new ProtoNumber(4));
    tmp0_serialDesc.z13('valuesListId', true);
    tmp0_serialDesc.h13(new ProtoNumber(5));
    this.i26_1 = tmp0_serialDesc;
  }
  j26(encoder, value) {
    var tmp0_desc = this.i26_1;
    var tmp1_output = encoder.ew(tmp0_desc);
    tmp1_output.px(tmp0_desc, 0, value.index);
    tmp1_output.ux(tmp0_desc, 1, value.name);
    tmp1_output.px(tmp0_desc, 2, value.typeId);
    tmp1_output.ux(tmp0_desc, 3, value.type);
    if (tmp1_output.cy(tmp0_desc, 4) ? true : !(value.valuesListId == null)) {
      tmp1_output.yx(tmp0_desc, 4, IntSerializer_getInstance(), value.valuesListId);
    }
    tmp1_output.fw(tmp0_desc);
  }
  pr(encoder, value) {
    return this.j26(encoder, value instanceof ICaosParameter ? value : THROW_CCE());
  }
  qr(decoder) {
    var tmp0_desc = this.i26_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = 0;
    var tmp5_local1 = null;
    var tmp6_local2 = 0;
    var tmp7_local3 = null;
    var tmp8_local4 = null;
    var tmp9_input = decoder.ew(tmp0_desc);
    if (tmp9_input.vw()) {
      tmp4_local0 = tmp9_input.jw(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp9_input.ow(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp9_input.jw(tmp0_desc, 2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp9_input.ow(tmp0_desc, 3);
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
            tmp4_local0 = tmp9_input.jw(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp9_input.ow(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp9_input.jw(tmp0_desc, 2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp9_input.ow(tmp0_desc, 3);
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
    return ICaosParameter.k26(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, null);
  }
  or() {
    return this.i26_1;
  }
  o14() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [IntSerializer_getInstance(), StringSerializer_getInstance(), IntSerializer_getInstance(), StringSerializer_getInstance(), get_nullable(IntSerializer_getInstance())];
  }
}
class ICaosParameter {
  static l26(index, name, typeId, typeName, valuesListId) {
    valuesListId = valuesListId === VOID ? null : valuesListId;
    var $this = createThis(this);
    $this.index = index;
    $this.name = name;
    $this.typeId = typeId;
    $this.type = typeName;
    $this.valuesListId = valuesListId;
    return $this;
  }
  h1s() {
    return this.index;
  }
  v() {
    return this.name;
  }
  t22() {
    return this.typeId;
  }
  g1s() {
    return this.type;
  }
  m26() {
    return this.valuesListId;
  }
  static n26(parameter, variant) {
    var tmp = parameter.g1s().simpleName;
    var tmp0_safe_receiver = parameter.valuesListIds;
    return this.l26(parameter.index, parameter.name, parameter.typeId, tmp, tmp0_safe_receiver == null ? null : tmp0_safe_receiver.y3(variant));
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
  static k26(seen0, index, name, typeId, typeName, valuesListId, serializationConstructorMarker) {
    if (!(15 === (15 & seen0))) {
      throwMissingFieldException(seen0, 15, $serializer_getInstance_8().i26_1);
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
    tmp0_serialDesc.z13('C1', true);
    tmp0_serialDesc.z13('C2', true);
    tmp0_serialDesc.z13('CV', true);
    tmp0_serialDesc.z13('C3', true);
    tmp0_serialDesc.z13('DS', true);
    tmp0_serialDesc.z13('SM', true);
    this.o26_1 = tmp0_serialDesc;
  }
  p26(typeSerial0) {
    return $serializer_9.n25(typeSerial0);
  }
  b15(typeParamsSerializers) {
    return this.p26(typeParamsSerializers[0]);
  }
}
class $serializer_9 {
  static q26() {
    var $this = createThis(this);
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('com.bedalton.creatures.caos.libstructs.VariantData', $this, 6);
    tmp0_serialDesc.z13('C1', true);
    tmp0_serialDesc.h13(new ProtoNumber(1));
    tmp0_serialDesc.z13('C2', true);
    tmp0_serialDesc.h13(new ProtoNumber(2));
    tmp0_serialDesc.z13('CV', true);
    tmp0_serialDesc.h13(new ProtoNumber(3));
    tmp0_serialDesc.z13('C3', true);
    tmp0_serialDesc.h13(new ProtoNumber(4));
    tmp0_serialDesc.z13('DS', true);
    tmp0_serialDesc.h13(new ProtoNumber(5));
    tmp0_serialDesc.z13('SM', true);
    tmp0_serialDesc.h13(new ProtoNumber(6));
    $this.l25_1 = tmp0_serialDesc;
    return $this;
  }
  r26(encoder, value) {
    var tmp0_desc = this.l25_1;
    var tmp1_output = encoder.ew(tmp0_desc);
    if (tmp1_output.cy(tmp0_desc, 0) ? true : !(value.C1 == null)) {
      tmp1_output.yx(tmp0_desc, 0, this.m25_1, value.C1);
    }
    if (tmp1_output.cy(tmp0_desc, 1) ? true : !(value.C2 == null)) {
      tmp1_output.yx(tmp0_desc, 1, this.m25_1, value.C2);
    }
    if (tmp1_output.cy(tmp0_desc, 2) ? true : !(value.CV == null)) {
      tmp1_output.yx(tmp0_desc, 2, this.m25_1, value.CV);
    }
    if (tmp1_output.cy(tmp0_desc, 3) ? true : !(value.C3 == null)) {
      tmp1_output.yx(tmp0_desc, 3, this.m25_1, value.C3);
    }
    if (tmp1_output.cy(tmp0_desc, 4) ? true : !(value.DS == null)) {
      tmp1_output.yx(tmp0_desc, 4, this.m25_1, value.DS);
    }
    if (tmp1_output.cy(tmp0_desc, 5) ? true : !(value.SM == null)) {
      tmp1_output.yx(tmp0_desc, 5, this.m25_1, value.SM);
    }
    tmp1_output.fw(tmp0_desc);
  }
  pr(encoder, value) {
    return this.r26(encoder, value instanceof VariantData ? value : THROW_CCE());
  }
  qr(decoder) {
    var tmp0_desc = this.l25_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_local4 = null;
    var tmp9_local5 = null;
    var tmp10_input = decoder.ew(tmp0_desc);
    if (tmp10_input.vw()) {
      tmp4_local0 = tmp10_input.sw(tmp0_desc, 0, this.m25_1, tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp10_input.sw(tmp0_desc, 1, this.m25_1, tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp10_input.sw(tmp0_desc, 2, this.m25_1, tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp10_input.sw(tmp0_desc, 3, this.m25_1, tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp10_input.sw(tmp0_desc, 4, this.m25_1, tmp8_local4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp9_local5 = tmp10_input.sw(tmp0_desc, 5, this.m25_1, tmp9_local5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp10_input.ww(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp10_input.sw(tmp0_desc, 0, this.m25_1, tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp10_input.sw(tmp0_desc, 1, this.m25_1, tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp10_input.sw(tmp0_desc, 2, this.m25_1, tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp10_input.sw(tmp0_desc, 3, this.m25_1, tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp10_input.sw(tmp0_desc, 4, this.m25_1, tmp8_local4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp9_local5 = tmp10_input.sw(tmp0_desc, 5, this.m25_1, tmp9_local5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          default:
            throw UnknownFieldException.ht(tmp2_index);
        }
      }
    tmp10_input.fw(tmp0_desc);
    return VariantData.s26(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, null);
  }
  or() {
    return this.l25_1;
  }
  o14() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(this.m25_1), get_nullable(this.m25_1), get_nullable(this.m25_1), get_nullable(this.m25_1), get_nullable(this.m25_1), get_nullable(this.m25_1)];
  }
  p14() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [this.m25_1];
  }
  static n25(typeSerial0) {
    var $this = this.q26();
    $this.m25_1 = typeSerial0;
    return $this;
  }
}
class VariantData {
  static t26(C1, C2, CV, C3, DS, SM) {
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
  u26() {
    return this.C1;
  }
  v26() {
    return this.C2;
  }
  w26() {
    return this.CV;
  }
  x26() {
    return this.C3;
  }
  y26() {
    return this.DS;
  }
  z26() {
    return this.SM;
  }
  static a27(map) {
    Companion_getInstance_11();
    return this.t26(map.y3('C1'), map.y3('C2'), map.y3('CV'), map.y3('C3'), map.y3('DS'), map.y3('SM'));
  }
  copyWithValueForVariantEnum(variant, value) {
    var tmp;
    if (variant.equals(C1_getInstance())) {
      tmp = this.b27(value);
    } else if (variant.equals(C2_getInstance())) {
      tmp = this.b27(VOID, value);
    } else if (variant.equals(CV_getInstance())) {
      tmp = this.b27(VOID, VOID, value);
    } else if (variant.equals(C3_getInstance())) {
      tmp = this.b27(VOID, VOID, VOID, value);
    } else if (variant.equals(DS_getInstance())) {
      tmp = this.b27(VOID, VOID, VOID, VOID, value);
    } else if (variant.equals(SM_getInstance())) {
      tmp = this.b27(VOID, VOID, VOID, VOID, VOID, value);
    } else {
      throw Exception.lc('Invalid variant');
    }
    return tmp;
  }
  valueForVariant(variant) {
    return variant.equals(C1_getInstance()) ? this.C1 : variant.equals(C2_getInstance()) ? this.C2 : variant.equals(CV_getInstance()) ? this.CV : variant.equals(C3_getInstance()) ? this.C3 : variant.equals(DS_getInstance()) ? this.DS : variant.equals(SM_getInstance()) ? this.SM : null;
  }
  ng(variant) {
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
  c27(C1, C2, CV, C3, DS, SM) {
    return VariantData.t26(C1, C2, CV, C3, DS, SM);
  }
  b27(C1, C2, CV, C3, DS, SM, $super) {
    C1 = C1 === VOID ? this.C1 : C1;
    C2 = C2 === VOID ? this.C2 : C2;
    CV = CV === VOID ? this.CV : CV;
    C3 = C3 === VOID ? this.C3 : C3;
    DS = DS === VOID ? this.DS : DS;
    SM = SM === VOID ? this.SM : SM;
    return $super === VOID ? this.c27(C1, C2, CV, C3, DS, SM) : $super.c27.call(this, C1, C2, CV, C3, DS, SM);
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
  static s26(seen0, C1, C2, CV, C3, DS, SM, serializationConstructorMarker) {
    Companion_getInstance_11();
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, Companion_getInstance_11().o26_1);
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
    this.d27_1 = function_0;
  }
  zg(a, b) {
    return this.d27_1(a, b);
  }
  compare(a, b) {
    return this.zg(a, b);
  }
  m4() {
    return this.d27_1;
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
//endregion
function CaosCommand$Companion$$childSerializers$_anonymous__psokld() {
  return new ReferenceArraySerializer(getKClass(CaosParameter), $serializer_getInstance_1());
}
function CaosCommand$Companion$$childSerializers$_anonymous__psokld_0() {
  return new LinkedHashMapSerializer(StringSerializer_getInstance(), IntSerializer_getInstance());
}
function CaosCommand$Companion$$childSerializers$_anonymous__psokld_1() {
  return new ReferenceArraySerializer(PrimitiveClasses_getInstance().me(), StringSerializer_getInstance());
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
    var this_0 = split(this$0.g21_1, charArrayOf([_Char___init__impl__6a9atx(32)]));
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList.f2(collectionSizeOrDefault(this_0, 10));
    var _iterator__ex2g4s = this_0.d1();
    while (_iterator__ex2g4s.e1()) {
      var item = _iterator__ex2g4s.f1();
      var tmp$ret$2 = token(item);
      destination.g2(tmp$ret$2);
    }
    return toIntArray(destination);
  };
}
function CaosCommand$_get_tokens_$ref_qlm063() {
  return (p0) => p0.s1s();
}
function CaosCommand$fullCommandHeader$delegate$lambda(this$0) {
  return () => {
    var commandHeader = formatNameWithType(this$0.g21_1, this$0.y21());
    var tmp;
    if (nullIfEmpty(this$0.h21_1) == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      var builder = StringBuilder.ze(commandHeader);
      var indexedObject = this$0.h21_1;
      var inductionVariable = 0;
      var last = indexedObject.length;
      while (inductionVariable < last) {
        var parameter = indexedObject[inductionVariable];
        inductionVariable = inductionVariable + 1 | 0;
        builder.a1(' ').a1(formatNameWithType(parameter.name, parameter.g1s()));
      }
      tmp = builder.toString();
    }
    var tmp1_elvis_lhs = tmp;
    return tmp1_elvis_lhs == null ? commandHeader : tmp1_elvis_lhs;
  };
}
function CaosCommand$isCommand$delegate$lambda(this$0) {
  return () => !(this$0.n21_1 || this$0.o21_1);
}
function CaosCommand$_get_isCommand_$ref_j0upw() {
  return (p0) => p0.a22();
}
function CaosCommand$_init_$lambda_fg2qzm(this$0) {
  return () => {
    // Inline function 'kotlin.collections.map' call
    var this_0 = split(this$0.g21_1, charArrayOf([_Char___init__impl__6a9atx(32)]));
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList.f2(collectionSizeOrDefault(this_0, 10));
    var _iterator__ex2g4s = this_0.d1();
    while (_iterator__ex2g4s.e1()) {
      var item = _iterator__ex2g4s.f1();
      var tmp$ret$2 = token(item);
      destination.g2(tmp$ret$2);
    }
    return toIntArray(destination);
  };
}
function CaosCommand$_init_$lambda_fg2qzm_0(this$0) {
  return () => {
    var commandHeader = formatNameWithType(this$0.g21_1, this$0.y21());
    var tmp;
    if (nullIfEmpty(this$0.h21_1) == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      var builder = StringBuilder.ze(commandHeader);
      var indexedObject = this$0.h21_1;
      var inductionVariable = 0;
      var last = indexedObject.length;
      while (inductionVariable < last) {
        var parameter = indexedObject[inductionVariable];
        inductionVariable = inductionVariable + 1 | 0;
        builder.a1(' ').a1(formatNameWithType(parameter.name, parameter.g1s()));
      }
      tmp = builder.toString();
    }
    var tmp1_elvis_lhs = tmp;
    return tmp1_elvis_lhs == null ? commandHeader : tmp1_elvis_lhs;
  };
}
function CaosCommand$_init_$lambda_fg2qzm_1(this$0) {
  return () => !(this$0.n21_1 || this$0.o21_1);
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
    var this_0 = this$0.h22_1;
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList.f2(this_0.i2());
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s = this_0.t2().d1();
    while (_iterator__ex2g4s.e1()) {
      var item = _iterator__ex2g4s.f1();
      var tmp$ret$3 = to(toInt(item.q3()), item.r3());
      destination.g2(tmp$ret$3);
    }
    return toMap(destination);
  };
}
function CaosLibDefinitions$_get_commandsById_$ref_g2b0sn() {
  return (p0) => p0.m22();
}
function CaosLibDefinitions$_init_$lambda_tfojde(this$0) {
  return () => {
    // Inline function 'kotlin.collections.map' call
    var this_0 = this$0.h22_1;
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList.f2(this_0.i2());
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s = this_0.t2().d1();
    while (_iterator__ex2g4s.e1()) {
      var item = _iterator__ex2g4s.f1();
      var tmp$ret$3 = to(toInt(item.q3()), item.r3());
      destination.g2(tmp$ret$3);
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
  return (p0) => p0.g1s();
}
function CaosParameter$_init_$lambda_3besw4(this$0) {
  return () => Companion_instance.fromIntValue(this$0.typeId);
}
function _get_$cachedSerializer__te6jhj($this) {
  return $this.y22_1.r3();
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
  return (p0) => p0.o23();
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
  return (p0) => p0.q1s();
}
function CaosValuesListValue$not$delegate$lambda(this$0) {
  return () => startsWith(this$0.value, '!');
}
function CaosValuesListValue$_get_not_$ref_4vgyw() {
  return (p0) => p0.l23();
}
function CaosValuesListValue$greaterThan$delegate$lambda(this$0) {
  return () => !(this$0.q1s() == null) && startsWith(this$0.value, '>');
}
function CaosValuesListValue$_get_greaterThan_$ref_das0vk() {
  return (p0) => p0.m23();
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
  return () => !(this$0.q1s() == null) && startsWith(this$0.value, '>');
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
  return $this.f24_1.r3();
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
  return SealedClassSerializer.vs('com.bedalton.creatures.caos.libstructs.CaosVariant', tmp, tmp_0, tmp_1, tmp$ret$6);
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
  return new ReferenceArraySerializer(PrimitiveClasses_getInstance().he(), IntSerializer_getInstance());
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
  return () => listOf(['C1', 'C2']).n2(this$0.s24_1);
}
function CaosVariantData$isNew$delegate$lambda(this$0) {
  return () => !listOf(['C1', 'C2']).n2(this$0.s24_1);
}
function CaosVariantData$_init_$lambda_7brc0u(this$0) {
  return () => listOf(['C1', 'C2']).n2(this$0.s24_1);
}
function CaosVariantData$_init_$lambda_7brc0u_0(this$0) {
  return () => !listOf(['C1', 'C2']).n2(this$0.s24_1);
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
  return new ReferenceArraySerializer(PrimitiveClasses_getInstance().me(), StringSerializer_getInstance());
}
function VariantCaosCommand$Companion$$childSerializers$_anonymous__495hkq_1() {
  return $serializer_9.n25(IntSerializer_getInstance());
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
  var tmp1_command = _this__u8e3s4.g21_1;
  // Inline function 'kotlin.collections.map' call
  var this_0 = _this__u8e3s4.h21_1;
  // Inline function 'kotlin.collections.mapTo' call
  var destination = ArrayList.f2(this_0.length);
  var inductionVariable = 0;
  var last = this_0.length;
  while (inductionVariable < last) {
    var item = this_0[inductionVariable];
    inductionVariable = inductionVariable + 1 | 0;
    var tmp$ret$2 = ICaosParameter.n26(item, variant);
    destination.g2(tmp$ret$2);
  }
  // Inline function 'kotlin.collections.sortedBy' call
  // Inline function 'kotlin.comparisons.compareBy' call
  var tmp = toVariantCommand$lambda;
  var tmp$ret$4 = new sam$kotlin_Comparator$0(tmp);
  // Inline function 'kotlin.collections.toTypedArray' call
  var this_1 = sortedWith(destination, tmp$ret$4);
  var tmp2_parameters = copyToArray(this_1);
  var tmp3_isLvalue = _this__u8e3s4.o21_1;
  var tmp4_isRvalue = _this__u8e3s4.n21_1;
  var tmp5_returnTypeId = _this__u8e3s4.y21().value;
  var tmp6_returnTypeName = _this__u8e3s4.y21().simpleName;
  var tmp7_variants = _this__u8e3s4.m21_1;
  var tmp8_description = _this__u8e3s4.j21_1;
  var tmp9_commandGroup = _this__u8e3s4.q21_1;
  var tmp10_doifFormat = _this__u8e3s4.r21_1;
  var tmp11_lvalueName = _this__u8e3s4.p21_1;
  var tmp12_requiresCreatureOwnr = _this__u8e3s4.s21_1;
  var tmp13_requiresOwnr = _this__u8e3s4.l21_1;
  var tmp0_safe_receiver = _this__u8e3s4.k21_1;
  var tmp_0;
  if (tmp0_safe_receiver == null) {
    tmp_0 = null;
  } else {
    // Inline function 'kotlin.let' call
    tmp_0 = VariantData.a27(tmp0_safe_receiver);
  }
  var tmp14_returnValuesListIds = tmp_0;
  var tmp15_isCommand = _this__u8e3s4.a22();
  var tmp16_tokens = _this__u8e3s4.s1s();
  var tmp17_ceOnly = _this__u8e3s4.t21_1 === true;
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
protoOf($serializer).p14 = typeParametersSerializers;
initMetadataForObject($serializer, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(CaosCommand, 'CaosCommand', VOID, VOID, VOID, VOID, VOID, {0: $serializer_getInstance});
initMetadataForCompanion(Companion_0);
protoOf($serializer_0).p14 = typeParametersSerializers;
initMetadataForObject($serializer_0, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(CaosLibDefinitions, 'CaosLibDefinitions', VOID, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_0});
initMetadataForCompanion(Companion_1);
protoOf($serializer_1).p14 = typeParametersSerializers;
initMetadataForObject($serializer_1, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(CaosParameter, 'CaosParameter', VOID, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_1});
initMetadataForCompanion(Companion_2, VOID, [SerializerFactory]);
initMetadataForClass(CaosScriptVarTokenGroup, 'CaosScriptVarTokenGroup', VOID, VOID, VOID, VOID, VOID, {0: Companion_getInstance_2});
initMetadataForCompanion(Companion_3);
protoOf($serializer_2).p14 = typeParametersSerializers;
initMetadataForObject($serializer_2, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(CaosValuesList, 'CaosValuesList', VOID, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_2});
initMetadataForCompanion(Companion_4);
protoOf($serializer_3).p14 = typeParametersSerializers;
initMetadataForObject($serializer_3, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(ValuesListValue, 'CaosValuesListValue', VOID, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_3});
initMetadataForCompanion(Companion_5);
protoOf($serializer_4).p14 = typeParametersSerializers;
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
protoOf($serializer_5).p14 = typeParametersSerializers;
initMetadataForObject($serializer_5, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(CaosVariantData, 'CaosVariantData', VOID, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_5});
initMetadataForCompanion(Companion_8);
protoOf($serializer_6).p14 = typeParametersSerializers;
initMetadataForObject($serializer_6, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(Commands, 'Commands', VOID, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_6});
initMetadataForClass(HasGetterImpl, 'HasGetterImpl');
initMetadataForCompanion(Companion_9);
protoOf($serializer_7).p14 = typeParametersSerializers;
initMetadataForObject($serializer_7, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(ICaosCommand, 'VariantCaosCommand', VOID, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_7});
initMetadataForCompanion(Companion_10);
protoOf($serializer_8).p14 = typeParametersSerializers;
initMetadataForObject($serializer_8, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(ICaosParameter, 'VariantCaosParameter', VOID, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_8});
initMetadataForCompanion(Companion_11, VOID, [SerializerFactory]);
initMetadataForClass($serializer_9, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(VariantData, 'VariantData', VariantData.t26, VOID, VOID, VOID, VOID, {0: Companion_getInstance_11});
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
  CaosParameter as CaosParameter39r9eh83ibrsy,
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
