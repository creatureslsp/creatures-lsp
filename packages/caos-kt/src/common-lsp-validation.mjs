import {
  initMetadataForCompanion1wyw17z38v6ac as initMetadataForCompanion,
  THROW_CCE2g6jy02ryeudk as THROW_CCE,
  protoOf180f3jzyo7rfj as protoOf,
  initMetadataForObject1cxne3s9w65el as initMetadataForObject,
  VOID3gxj6tk5isa35 as VOID,
  Unit_instancev9v8hjid95df as Unit_instance,
  createThis2j2avj17cvnv2 as createThis,
  initMetadataForClassbxx6q50dy2s7 as initMetadataForClass,
  repeat2w4c6j8zoq09o as repeat,
  listOfNotNull2woi2boe01ub4 as listOfNotNull,
  joinToString1cxrrlmo0chqs as joinToString,
  isCharSequence1ju9jr1w86plq as isCharSequence,
  trim11nh7r46at6sx as trim,
  toString1pkumu07cwy4m as toString,
  joinToStringxqcavsxcmh4q as joinToString_0,
  getStringHashCode26igk1bx568vk as getStringHashCode,
  getOrNull1go7ef9ldk0df as getOrNull,
  substringiqarkczpya5m as substring,
} from './kotlin-kotlin-stdlib.mjs';
import {
  PluginGeneratedSerialDescriptorqdzeg5asqhfg as PluginGeneratedSerialDescriptor,
  UnknownFieldExceptiona60e3a6v1xqo as UnknownFieldException,
  StringSerializer_getInstance11v9md0a7d9yk as StringSerializer_getInstance,
  get_nullable197rfua9r7fsz as get_nullable,
  typeParametersSerializers2likxjr48tr7y as typeParametersSerializers,
  GeneratedSerializer1f7t7hssdd2ws as GeneratedSerializer,
  throwMissingFieldException2cmke0v3ynf14 as throwMissingFieldException,
  SerializableWithd2dap36updxd as SerializableWith,
  IntSerializer_getInstanceuhm8c1wku08l as IntSerializer_getInstance,
} from './kotlinx-serialization-kotlinx-serialization-core.mjs';
//region block: imports
var imul = Math.imul;
//endregion
//region block: pre-declaration
class Companion {}
class $serializer {
  constructor() {
    $serializer_instance = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('com.bedalton.common.lsp.validation.Diagnostic', this, 6);
    tmp0_serialDesc.z13('severity', false);
    tmp0_serialDesc.z13('code', false);
    tmp0_serialDesc.z13('message', false);
    tmp0_serialDesc.z13('location', false);
    tmp0_serialDesc.z13('source', false);
    tmp0_serialDesc.z13('suggestion', false);
    this.t59_1 = tmp0_serialDesc;
  }
  u59(encoder, value) {
    var tmp0_desc = this.t59_1;
    var tmp1_output = encoder.ew(tmp0_desc);
    tmp1_output.ux(tmp0_desc, 0, value.v59_1);
    tmp1_output.ux(tmp0_desc, 1, value.w59_1);
    tmp1_output.ux(tmp0_desc, 2, value.x59_1);
    tmp1_output.wx(tmp0_desc, 3, $serializer_getInstance_0(), value.y59_1);
    tmp1_output.yx(tmp0_desc, 4, $serializer_getInstance_1(), value.z59_1);
    tmp1_output.yx(tmp0_desc, 5, $serializer_getInstance_2(), value.a5a_1);
    tmp1_output.fw(tmp0_desc);
  }
  pr(encoder, value) {
    return this.u59(encoder, value instanceof Diagnostic ? value : THROW_CCE());
  }
  qr(decoder) {
    var tmp0_desc = this.t59_1;
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
      tmp4_local0 = tmp10_input.ow(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp10_input.ow(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp10_input.ow(tmp0_desc, 2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp10_input.qw(tmp0_desc, 3, $serializer_getInstance_0(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp10_input.sw(tmp0_desc, 4, $serializer_getInstance_1(), tmp8_local4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp9_local5 = tmp10_input.sw(tmp0_desc, 5, $serializer_getInstance_2(), tmp9_local5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp10_input.ww(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp10_input.ow(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp10_input.ow(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp10_input.ow(tmp0_desc, 2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp10_input.qw(tmp0_desc, 3, $serializer_getInstance_0(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp10_input.sw(tmp0_desc, 4, $serializer_getInstance_1(), tmp8_local4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp9_local5 = tmp10_input.sw(tmp0_desc, 5, $serializer_getInstance_2(), tmp9_local5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          default:
            throw UnknownFieldException.ht(tmp2_index);
        }
      }
    tmp10_input.fw(tmp0_desc);
    return Diagnostic.b5a(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, null);
  }
  or() {
    return this.t59_1;
  }
  o14() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), StringSerializer_getInstance(), StringSerializer_getInstance(), $serializer_getInstance_0(), get_nullable($serializer_getInstance_1()), get_nullable($serializer_getInstance_2())];
  }
}
class Diagnostic {
  constructor(severity, code, message, location, source, suggestion) {
    this.v59_1 = severity;
    this.w59_1 = code;
    this.x59_1 = message;
    this.y59_1 = location;
    this.z59_1 = source;
    this.a5a_1 = suggestion;
  }
  static b5a(seen0, severity, code, message, location, source, suggestion, serializationConstructorMarker) {
    if (!(63 === (63 & seen0))) {
      throwMissingFieldException(seen0, 63, $serializer_getInstance().t59_1);
    }
    var $this = createThis(this);
    $this.v59_1 = severity;
    $this.w59_1 = code;
    $this.x59_1 = message;
    $this.y59_1 = location;
    $this.z59_1 = source;
    $this.a5a_1 = suggestion;
    return $this;
  }
}
class DiagnosticFormatter {
  n5a(filename, errors) {
    return joinToString_0(errors, '\n\n', VOID, VOID, VOID, VOID, DiagnosticFormatter$formatHumanReadable$lambda(filename));
  }
}
class Companion_0 {
  constructor() {
    this.o5a_1 = 1;
    this.p5a_1 = 1;
    this.q5a_1 = 1;
  }
}
class $serializer_0 {
  constructor() {
    $serializer_instance_0 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('com.bedalton.common.lsp.validation.Location', this, 7);
    tmp0_serialDesc.z13('startLine', false);
    tmp0_serialDesc.z13('endLine', false);
    tmp0_serialDesc.z13('startColumn', false);
    tmp0_serialDesc.z13('endColumn', false);
    tmp0_serialDesc.z13('startIndex', false);
    tmp0_serialDesc.z13('endIndex', false);
    tmp0_serialDesc.z13('indexing', false);
    this.r5a_1 = tmp0_serialDesc;
  }
  s5a(encoder, value) {
    var tmp0_desc = this.r5a_1;
    var tmp1_output = encoder.ew(tmp0_desc);
    tmp1_output.px(tmp0_desc, 0, value.c5a_1);
    tmp1_output.px(tmp0_desc, 1, value.d5a_1);
    tmp1_output.px(tmp0_desc, 2, value.e5a_1);
    tmp1_output.px(tmp0_desc, 3, value.f5a_1);
    tmp1_output.px(tmp0_desc, 4, value.g5a_1);
    tmp1_output.px(tmp0_desc, 5, value.h5a_1);
    tmp1_output.ux(tmp0_desc, 6, value.i5a_1);
    tmp1_output.fw(tmp0_desc);
  }
  pr(encoder, value) {
    return this.s5a(encoder, value instanceof Location ? value : THROW_CCE());
  }
  qr(decoder) {
    var tmp0_desc = this.r5a_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = 0;
    var tmp5_local1 = 0;
    var tmp6_local2 = 0;
    var tmp7_local3 = 0;
    var tmp8_local4 = 0;
    var tmp9_local5 = 0;
    var tmp10_local6 = null;
    var tmp11_input = decoder.ew(tmp0_desc);
    if (tmp11_input.vw()) {
      tmp4_local0 = tmp11_input.jw(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp11_input.jw(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp11_input.jw(tmp0_desc, 2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp11_input.jw(tmp0_desc, 3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp11_input.jw(tmp0_desc, 4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp9_local5 = tmp11_input.jw(tmp0_desc, 5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
      tmp10_local6 = tmp11_input.ow(tmp0_desc, 6);
      tmp3_bitMask0 = tmp3_bitMask0 | 64;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp11_input.ww(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp11_input.jw(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp11_input.jw(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp11_input.jw(tmp0_desc, 2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp11_input.jw(tmp0_desc, 3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp11_input.jw(tmp0_desc, 4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp9_local5 = tmp11_input.jw(tmp0_desc, 5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          case 6:
            tmp10_local6 = tmp11_input.ow(tmp0_desc, 6);
            tmp3_bitMask0 = tmp3_bitMask0 | 64;
            break;
          default:
            throw UnknownFieldException.ht(tmp2_index);
        }
      }
    tmp11_input.fw(tmp0_desc);
    return Location.t5a(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, tmp10_local6, null);
  }
  or() {
    return this.r5a_1;
  }
  o14() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [IntSerializer_getInstance(), IntSerializer_getInstance(), IntSerializer_getInstance(), IntSerializer_getInstance(), IntSerializer_getInstance(), IntSerializer_getInstance(), StringSerializer_getInstance()];
  }
}
class Location {
  static u5a(startLine, endLine, startColumn, endColumn, startIndex, endIndex, indexing) {
    var $this = createThis(this);
    $this.c5a_1 = startLine;
    $this.d5a_1 = endLine;
    $this.e5a_1 = startColumn;
    $this.f5a_1 = endColumn;
    $this.g5a_1 = startIndex;
    $this.h5a_1 = endIndex;
    $this.i5a_1 = indexing;
    return $this;
  }
  static v5a(range, offset) {
    offset = offset === VOID ? 1 : offset;
    var tmp = range.o1().h1e();
    var tmp_0 = tmp + (offset == null ? 1 : offset) | 0;
    var tmp_1 = range.i1e().h1e();
    var tmp_2 = tmp_1 + (offset == null ? 1 : offset) | 0;
    var tmp_3 = range.o1().l1e();
    var tmp_4 = tmp_3 + (offset == null ? 1 : offset) | 0;
    var tmp_5 = range.i1e().l1e();
    var tmp_6 = tmp_5 + (offset == null ? 1 : offset) | 0;
    var tmp_7 = range.j1e();
    var tmp_8 = tmp_7 + (offset == null ? 1 : offset) | 0;
    var tmp_9 = range.m1e();
    return this.u5a(tmp_0, tmp_2, tmp_4, tmp_6, tmp_8, tmp_9 + (offset == null ? 1 : offset) | 0, '1-indexed');
  }
  toString() {
    return 'Location(startLine=' + this.c5a_1 + ', endLine=' + this.d5a_1 + ', startColumn=' + this.e5a_1 + ', endColumn=' + this.f5a_1 + ', startIndex=' + this.g5a_1 + ', endIndex=' + this.h5a_1 + ', indexing=' + this.i5a_1 + ')';
  }
  hashCode() {
    var result = this.c5a_1;
    result = imul(result, 31) + this.d5a_1 | 0;
    result = imul(result, 31) + this.e5a_1 | 0;
    result = imul(result, 31) + this.f5a_1 | 0;
    result = imul(result, 31) + this.g5a_1 | 0;
    result = imul(result, 31) + this.h5a_1 | 0;
    result = imul(result, 31) + getStringHashCode(this.i5a_1) | 0;
    return result;
  }
  equals(other) {
    if (this === other)
      return true;
    if (!(other instanceof Location))
      return false;
    if (!(this.c5a_1 === other.c5a_1))
      return false;
    if (!(this.d5a_1 === other.d5a_1))
      return false;
    if (!(this.e5a_1 === other.e5a_1))
      return false;
    if (!(this.f5a_1 === other.f5a_1))
      return false;
    if (!(this.g5a_1 === other.g5a_1))
      return false;
    if (!(this.h5a_1 === other.h5a_1))
      return false;
    if (!(this.i5a_1 === other.i5a_1))
      return false;
    return true;
  }
  static t5a(seen0, startLine, endLine, startColumn, endColumn, startIndex, endIndex, indexing, serializationConstructorMarker) {
    if (!(127 === (127 & seen0))) {
      throwMissingFieldException(seen0, 127, $serializer_getInstance_0().r5a_1);
    }
    var $this = createThis(this);
    $this.c5a_1 = startLine;
    $this.d5a_1 = endLine;
    $this.e5a_1 = startColumn;
    $this.f5a_1 = endColumn;
    $this.g5a_1 = startIndex;
    $this.h5a_1 = endIndex;
    $this.i5a_1 = indexing;
    return $this;
  }
}
class Companion_1 {
  constructor() {
    this.w5a_1 = 200;
  }
  x5a(lines, location) {
    if (!(location.c5a_1 === location.d5a_1)) {
      return null;
    }
    var tmp0_elvis_lhs = getOrNull(lines, location.c5a_1 - 1 | 0);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return null;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var line = tmp;
    var offset = 0;
    if (line.length > 200) {
      offset = location.e5a_1 - 30 | 0;
      var tmp0 = location.f5a_1 + 10 | 0;
      // Inline function 'kotlin.math.min' call
      var b = line.length;
      var end = Math.min(tmp0, b);
      line = substring(line, offset, end);
    }
    var column = location.e5a_1 - offset | 0;
    var endColumn = location.f5a_1 - offset | 0;
    var markerLength = endColumn - column | 0;
    var isEmptyAtZero = markerLength === 0 && column === 1;
    var tmp_0;
    if (isEmptyAtZero) {
      tmp_0 = '^';
    } else {
      var tmp_1 = repeat(' ', column - 1 | 0);
      // Inline function 'kotlin.math.max' call
      var a = markerLength + 1 | 0;
      var tmp$ret$1 = Math.max(a, 1);
      tmp_0 = tmp_1 + repeat('^', tmp$ret$1);
    }
    var marker = tmp_0;
    return new Source(line, marker);
  }
}
class $serializer_1 {
  constructor() {
    $serializer_instance_1 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('com.bedalton.common.lsp.validation.Source', this, 2);
    tmp0_serialDesc.z13('lineText', false);
    tmp0_serialDesc.z13('marker', false);
    this.y5a_1 = tmp0_serialDesc;
  }
  z5a(encoder, value) {
    var tmp0_desc = this.y5a_1;
    var tmp1_output = encoder.ew(tmp0_desc);
    tmp1_output.ux(tmp0_desc, 0, value.j5a_1);
    tmp1_output.ux(tmp0_desc, 1, value.k5a_1);
    tmp1_output.fw(tmp0_desc);
  }
  pr(encoder, value) {
    return this.z5a(encoder, value instanceof Source ? value : THROW_CCE());
  }
  qr(decoder) {
    var tmp0_desc = this.y5a_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_input = decoder.ew(tmp0_desc);
    if (tmp6_input.vw()) {
      tmp4_local0 = tmp6_input.ow(tmp0_desc, 0);
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
            tmp4_local0 = tmp6_input.ow(tmp0_desc, 0);
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
    return Source.a5b(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  }
  or() {
    return this.y5a_1;
  }
  o14() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), StringSerializer_getInstance()];
  }
}
class Source {
  constructor(lineText, marker) {
    this.j5a_1 = lineText;
    this.k5a_1 = marker;
  }
  toString() {
    return 'Source(lineText=' + this.j5a_1 + ', marker=' + this.k5a_1 + ')';
  }
  hashCode() {
    var result = getStringHashCode(this.j5a_1);
    result = imul(result, 31) + getStringHashCode(this.k5a_1) | 0;
    return result;
  }
  equals(other) {
    if (this === other)
      return true;
    if (!(other instanceof Source))
      return false;
    if (!(this.j5a_1 === other.j5a_1))
      return false;
    if (!(this.k5a_1 === other.k5a_1))
      return false;
    return true;
  }
  static a5b(seen0, lineText, marker, serializationConstructorMarker) {
    if (!(3 === (3 & seen0))) {
      throwMissingFieldException(seen0, 3, $serializer_getInstance_1().y5a_1);
    }
    var $this = createThis(this);
    $this.j5a_1 = lineText;
    $this.k5a_1 = marker;
    return $this;
  }
}
class Companion_2 {}
class $serializer_2 {
  constructor() {
    $serializer_instance_2 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('com.bedalton.common.lsp.validation.Suggestion', this, 2);
    tmp0_serialDesc.z13('description', true);
    tmp0_serialDesc.z13('replacement', true);
    this.b5b_1 = tmp0_serialDesc;
  }
  c5b(encoder, value) {
    var tmp0_desc = this.b5b_1;
    var tmp1_output = encoder.ew(tmp0_desc);
    if (tmp1_output.cy(tmp0_desc, 0) ? true : !(value.l5a_1 == null)) {
      tmp1_output.yx(tmp0_desc, 0, StringSerializer_getInstance(), value.l5a_1);
    }
    if (tmp1_output.cy(tmp0_desc, 1) ? true : !(value.m5a_1 == null)) {
      tmp1_output.yx(tmp0_desc, 1, StringSerializer_getInstance(), value.m5a_1);
    }
    tmp1_output.fw(tmp0_desc);
  }
  pr(encoder, value) {
    return this.c5b(encoder, value instanceof Suggestion ? value : THROW_CCE());
  }
  qr(decoder) {
    var tmp0_desc = this.b5b_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_input = decoder.ew(tmp0_desc);
    if (tmp6_input.vw()) {
      tmp4_local0 = tmp6_input.sw(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp6_input.sw(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp6_input.ww(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp6_input.sw(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp6_input.sw(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          default:
            throw UnknownFieldException.ht(tmp2_index);
        }
      }
    tmp6_input.fw(tmp0_desc);
    return Suggestion.d5b(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  }
  or() {
    return this.b5b_1;
  }
  o14() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance())];
  }
}
class Suggestion {
  constructor(description, replacement) {
    description = description === VOID ? null : description;
    replacement = replacement === VOID ? null : replacement;
    this.l5a_1 = description;
    this.m5a_1 = replacement;
  }
  toString() {
    return 'Suggestion(description=' + this.l5a_1 + ', replacement=' + this.m5a_1 + ')';
  }
  hashCode() {
    var result = this.l5a_1 == null ? 0 : getStringHashCode(this.l5a_1);
    result = imul(result, 31) + (this.m5a_1 == null ? 0 : getStringHashCode(this.m5a_1)) | 0;
    return result;
  }
  equals(other) {
    if (this === other)
      return true;
    if (!(other instanceof Suggestion))
      return false;
    if (!(this.l5a_1 == other.l5a_1))
      return false;
    if (!(this.m5a_1 == other.m5a_1))
      return false;
    return true;
  }
  static d5b(seen0, description, replacement, serializationConstructorMarker) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_2().b5b_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1))
      $this.l5a_1 = null;
    else
      $this.l5a_1 = description;
    if (0 === (seen0 & 2))
      $this.m5a_1 = null;
    else
      $this.m5a_1 = replacement;
    return $this;
  }
}
//endregion
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
function formatError($this, filename, diagnostic) {
  var location = diagnostic.y59_1;
  var tmp;
  if (filename == null) {
    tmp = null;
  } else {
    // Inline function 'kotlin.let' call
    tmp = 'File: ' + filename;
  }
  var file = tmp;
  var tmp1_safe_receiver = diagnostic.z59_1;
  var tmp_0;
  if (tmp1_safe_receiver == null) {
    tmp_0 = null;
  } else {
    // Inline function 'kotlin.let' call
    var markerPadding = repeat(' ', location.c5a_1.toString().length);
    tmp_0 = '\n' + location.c5a_1 + ' | ' + tmp1_safe_receiver.j5a_1 + '\n' + markerPadding + ' | ' + tmp1_safe_receiver.k5a_1;
  }
  var source = tmp_0;
  var tmp2_safe_receiver = diagnostic.a5a_1;
  var tmp3_safe_receiver = tmp2_safe_receiver == null ? null : tmp2_safe_receiver.m5a_1;
  var tmp_1;
  if (tmp3_safe_receiver == null) {
    tmp_1 = null;
  } else {
    // Inline function 'kotlin.let' call
    tmp_1 = '\nSuggested fix:\n' + tmp3_safe_receiver;
  }
  var tmp4_elvis_lhs = tmp_1;
  var suggestion = tmp4_elvis_lhs == null ? '' : tmp4_elvis_lhs;
  // Inline function 'kotlin.text.uppercase' call
  // Inline function 'kotlin.js.asDynamic' call
  var severity = diagnostic.v59_1.toUpperCase();
  // Inline function 'kotlin.text.trim' call
  var this_0 = joinToString(listOfNotNull([severity + ': ' + diagnostic.w59_1, file, 'Location: line ' + location.c5a_1 + ', column ' + location.e5a_1 + ', ' + location.i5a_1, 'Problem: ' + diagnostic.x59_1, source, suggestion]), '\n');
  return toString(trim(isCharSequence(this_0) ? this_0 : THROW_CCE()));
}
function DiagnosticFormatter$formatHumanReadable$lambda($filename) {
  return (error) => formatError(DiagnosticFormatter_instance, $filename, error);
}
var DiagnosticFormatter_instance;
function DiagnosticFormatter_getInstance() {
  return DiagnosticFormatter_instance;
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
//region block: post-declaration
initMetadataForCompanion(Companion);
protoOf($serializer).p14 = typeParametersSerializers;
initMetadataForObject($serializer, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(Diagnostic, 'Diagnostic', VOID, VOID, VOID, VOID, VOID, {0: $serializer_getInstance});
initMetadataForObject(DiagnosticFormatter, 'DiagnosticFormatter');
initMetadataForCompanion(Companion_0);
protoOf($serializer_0).p14 = typeParametersSerializers;
initMetadataForObject($serializer_0, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(Location, 'Location', VOID, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_0});
initMetadataForCompanion(Companion_1);
protoOf($serializer_1).p14 = typeParametersSerializers;
initMetadataForObject($serializer_1, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(Source, 'Source', VOID, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_1});
initMetadataForCompanion(Companion_2);
protoOf($serializer_2).p14 = typeParametersSerializers;
initMetadataForObject($serializer_2, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(Suggestion, 'Suggestion', Suggestion, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_2});
//endregion
//region block: init
Companion_instance = new Companion();
DiagnosticFormatter_instance = new DiagnosticFormatter();
Companion_instance_0 = new Companion_0();
Companion_instance_1 = new Companion_1();
Companion_instance_2 = new Companion_2();
//endregion
//region block: exports
export {
  Diagnostic as Diagnostic7wo6iljgifv7,
  Location as Location3lef9d1tfhncu,
  Suggestion as Suggestiont49xplgtw8za,
  $serializer_getInstance as $serializer_getInstance3ogtke189la6y,
  DiagnosticFormatter_instance as DiagnosticFormatter_instance1olgnikpme1hc,
  Companion_instance_1 as Companion_instance1214jcxfgicpd,
};
//endregion

//# sourceMappingURL=common-lsp-validation.mjs.map
