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
    tmp0_serialDesc.w13('severity', false);
    tmp0_serialDesc.w13('code', false);
    tmp0_serialDesc.w13('message', false);
    tmp0_serialDesc.w13('location', false);
    tmp0_serialDesc.w13('source', false);
    tmp0_serialDesc.w13('suggestion', false);
    this.s5b_1 = tmp0_serialDesc;
  }
  t5b(encoder, value) {
    var tmp0_desc = this.s5b_1;
    var tmp1_output = encoder.bw(tmp0_desc);
    tmp1_output.rx(tmp0_desc, 0, value.u5b_1);
    tmp1_output.rx(tmp0_desc, 1, value.v5b_1);
    tmp1_output.rx(tmp0_desc, 2, value.w5b_1);
    tmp1_output.tx(tmp0_desc, 3, $serializer_getInstance_0(), value.x5b_1);
    tmp1_output.vx(tmp0_desc, 4, $serializer_getInstance_1(), value.y5b_1);
    tmp1_output.vx(tmp0_desc, 5, $serializer_getInstance_2(), value.z5b_1);
    tmp1_output.cw(tmp0_desc);
  }
  mr(encoder, value) {
    return this.t5b(encoder, value instanceof Diagnostic ? value : THROW_CCE());
  }
  nr(decoder) {
    var tmp0_desc = this.s5b_1;
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
      tmp4_local0 = tmp10_input.lw(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp10_input.lw(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp10_input.lw(tmp0_desc, 2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp10_input.nw(tmp0_desc, 3, $serializer_getInstance_0(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp10_input.pw(tmp0_desc, 4, $serializer_getInstance_1(), tmp8_local4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp9_local5 = tmp10_input.pw(tmp0_desc, 5, $serializer_getInstance_2(), tmp9_local5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp10_input.tw(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp10_input.lw(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp10_input.lw(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp10_input.lw(tmp0_desc, 2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp10_input.nw(tmp0_desc, 3, $serializer_getInstance_0(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp10_input.pw(tmp0_desc, 4, $serializer_getInstance_1(), tmp8_local4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp9_local5 = tmp10_input.pw(tmp0_desc, 5, $serializer_getInstance_2(), tmp9_local5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          default:
            throw UnknownFieldException.et(tmp2_index);
        }
      }
    tmp10_input.cw(tmp0_desc);
    return Diagnostic.a5c(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, null);
  }
  lr() {
    return this.s5b_1;
  }
  l14() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), StringSerializer_getInstance(), StringSerializer_getInstance(), $serializer_getInstance_0(), get_nullable($serializer_getInstance_1()), get_nullable($serializer_getInstance_2())];
  }
}
class Diagnostic {
  constructor(severity, code, message, location, source, suggestion) {
    this.u5b_1 = severity;
    this.v5b_1 = code;
    this.w5b_1 = message;
    this.x5b_1 = location;
    this.y5b_1 = source;
    this.z5b_1 = suggestion;
  }
  static a5c(seen0, severity, code, message, location, source, suggestion, serializationConstructorMarker) {
    if (!(63 === (63 & seen0))) {
      throwMissingFieldException(seen0, 63, $serializer_getInstance().s5b_1);
    }
    var $this = createThis(this);
    $this.u5b_1 = severity;
    $this.v5b_1 = code;
    $this.w5b_1 = message;
    $this.x5b_1 = location;
    $this.y5b_1 = source;
    $this.z5b_1 = suggestion;
    return $this;
  }
}
class DiagnosticFormatter {
  m5c(filename, errors) {
    return joinToString_0(errors, '\n\n', VOID, VOID, VOID, VOID, DiagnosticFormatter$formatHumanReadable$lambda(filename));
  }
}
class Companion_0 {
  constructor() {
    this.n5c_1 = 1;
    this.o5c_1 = 1;
    this.p5c_1 = 1;
  }
}
class $serializer_0 {
  constructor() {
    $serializer_instance_0 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('com.bedalton.common.lsp.validation.Location', this, 7);
    tmp0_serialDesc.w13('startLine', false);
    tmp0_serialDesc.w13('endLine', false);
    tmp0_serialDesc.w13('startColumn', false);
    tmp0_serialDesc.w13('endColumn', false);
    tmp0_serialDesc.w13('startIndex', false);
    tmp0_serialDesc.w13('endIndex', false);
    tmp0_serialDesc.w13('indexing', false);
    this.q5c_1 = tmp0_serialDesc;
  }
  r5c(encoder, value) {
    var tmp0_desc = this.q5c_1;
    var tmp1_output = encoder.bw(tmp0_desc);
    tmp1_output.mx(tmp0_desc, 0, value.b5c_1);
    tmp1_output.mx(tmp0_desc, 1, value.c5c_1);
    tmp1_output.mx(tmp0_desc, 2, value.d5c_1);
    tmp1_output.mx(tmp0_desc, 3, value.e5c_1);
    tmp1_output.mx(tmp0_desc, 4, value.f5c_1);
    tmp1_output.mx(tmp0_desc, 5, value.g5c_1);
    tmp1_output.rx(tmp0_desc, 6, value.h5c_1);
    tmp1_output.cw(tmp0_desc);
  }
  mr(encoder, value) {
    return this.r5c(encoder, value instanceof Location ? value : THROW_CCE());
  }
  nr(decoder) {
    var tmp0_desc = this.q5c_1;
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
    var tmp11_input = decoder.bw(tmp0_desc);
    if (tmp11_input.sw()) {
      tmp4_local0 = tmp11_input.gw(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp11_input.gw(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp11_input.gw(tmp0_desc, 2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp11_input.gw(tmp0_desc, 3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp11_input.gw(tmp0_desc, 4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp9_local5 = tmp11_input.gw(tmp0_desc, 5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
      tmp10_local6 = tmp11_input.lw(tmp0_desc, 6);
      tmp3_bitMask0 = tmp3_bitMask0 | 64;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp11_input.tw(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp11_input.gw(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp11_input.gw(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp11_input.gw(tmp0_desc, 2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp11_input.gw(tmp0_desc, 3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp11_input.gw(tmp0_desc, 4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp9_local5 = tmp11_input.gw(tmp0_desc, 5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          case 6:
            tmp10_local6 = tmp11_input.lw(tmp0_desc, 6);
            tmp3_bitMask0 = tmp3_bitMask0 | 64;
            break;
          default:
            throw UnknownFieldException.et(tmp2_index);
        }
      }
    tmp11_input.cw(tmp0_desc);
    return Location.s5c(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, tmp10_local6, null);
  }
  lr() {
    return this.q5c_1;
  }
  l14() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [IntSerializer_getInstance(), IntSerializer_getInstance(), IntSerializer_getInstance(), IntSerializer_getInstance(), IntSerializer_getInstance(), IntSerializer_getInstance(), StringSerializer_getInstance()];
  }
}
class Location {
  static t5c(startLine, endLine, startColumn, endColumn, startIndex, endIndex, indexing) {
    var $this = createThis(this);
    $this.b5c_1 = startLine;
    $this.c5c_1 = endLine;
    $this.d5c_1 = startColumn;
    $this.e5c_1 = endColumn;
    $this.f5c_1 = startIndex;
    $this.g5c_1 = endIndex;
    $this.h5c_1 = indexing;
    return $this;
  }
  static u5c(range, offset) {
    offset = offset === VOID ? 1 : offset;
    var tmp = range.h1().e1e();
    var tmp_0 = tmp + (offset == null ? 1 : offset) | 0;
    var tmp_1 = range.f1e().e1e();
    var tmp_2 = tmp_1 + (offset == null ? 1 : offset) | 0;
    var tmp_3 = range.h1().i1e();
    var tmp_4 = tmp_3 + (offset == null ? 1 : offset) | 0;
    var tmp_5 = range.f1e().i1e();
    var tmp_6 = tmp_5 + (offset == null ? 1 : offset) | 0;
    var tmp_7 = range.g1e();
    var tmp_8 = tmp_7 + (offset == null ? 1 : offset) | 0;
    var tmp_9 = range.j1e();
    return this.t5c(tmp_0, tmp_2, tmp_4, tmp_6, tmp_8, tmp_9 + (offset == null ? 1 : offset) | 0, '1-indexed');
  }
  toString() {
    return 'Location(startLine=' + this.b5c_1 + ', endLine=' + this.c5c_1 + ', startColumn=' + this.d5c_1 + ', endColumn=' + this.e5c_1 + ', startIndex=' + this.f5c_1 + ', endIndex=' + this.g5c_1 + ', indexing=' + this.h5c_1 + ')';
  }
  hashCode() {
    var result = this.b5c_1;
    result = imul(result, 31) + this.c5c_1 | 0;
    result = imul(result, 31) + this.d5c_1 | 0;
    result = imul(result, 31) + this.e5c_1 | 0;
    result = imul(result, 31) + this.f5c_1 | 0;
    result = imul(result, 31) + this.g5c_1 | 0;
    result = imul(result, 31) + getStringHashCode(this.h5c_1) | 0;
    return result;
  }
  equals(other) {
    if (this === other)
      return true;
    if (!(other instanceof Location))
      return false;
    if (!(this.b5c_1 === other.b5c_1))
      return false;
    if (!(this.c5c_1 === other.c5c_1))
      return false;
    if (!(this.d5c_1 === other.d5c_1))
      return false;
    if (!(this.e5c_1 === other.e5c_1))
      return false;
    if (!(this.f5c_1 === other.f5c_1))
      return false;
    if (!(this.g5c_1 === other.g5c_1))
      return false;
    if (!(this.h5c_1 === other.h5c_1))
      return false;
    return true;
  }
  static s5c(seen0, startLine, endLine, startColumn, endColumn, startIndex, endIndex, indexing, serializationConstructorMarker) {
    if (!(127 === (127 & seen0))) {
      throwMissingFieldException(seen0, 127, $serializer_getInstance_0().q5c_1);
    }
    var $this = createThis(this);
    $this.b5c_1 = startLine;
    $this.c5c_1 = endLine;
    $this.d5c_1 = startColumn;
    $this.e5c_1 = endColumn;
    $this.f5c_1 = startIndex;
    $this.g5c_1 = endIndex;
    $this.h5c_1 = indexing;
    return $this;
  }
}
class Companion_1 {
  constructor() {
    this.v5c_1 = 200;
  }
  w5c(lines, location) {
    if (!(location.b5c_1 === location.c5c_1)) {
      return null;
    }
    var tmp0_elvis_lhs = getOrNull(lines, location.b5c_1 - 1 | 0);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return null;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var line = tmp;
    var offset = 0;
    if (line.length > 200) {
      offset = location.d5c_1 - 30 | 0;
      var tmp0 = location.e5c_1 + 10 | 0;
      // Inline function 'kotlin.math.min' call
      var b = line.length;
      var end = Math.min(tmp0, b);
      line = substring(line, offset, end);
    }
    var column = location.d5c_1 - offset | 0;
    var endColumn = location.e5c_1 - offset | 0;
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
    tmp0_serialDesc.w13('lineText', false);
    tmp0_serialDesc.w13('marker', false);
    this.x5c_1 = tmp0_serialDesc;
  }
  y5c(encoder, value) {
    var tmp0_desc = this.x5c_1;
    var tmp1_output = encoder.bw(tmp0_desc);
    tmp1_output.rx(tmp0_desc, 0, value.i5c_1);
    tmp1_output.rx(tmp0_desc, 1, value.j5c_1);
    tmp1_output.cw(tmp0_desc);
  }
  mr(encoder, value) {
    return this.y5c(encoder, value instanceof Source ? value : THROW_CCE());
  }
  nr(decoder) {
    var tmp0_desc = this.x5c_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_input = decoder.bw(tmp0_desc);
    if (tmp6_input.sw()) {
      tmp4_local0 = tmp6_input.lw(tmp0_desc, 0);
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
            tmp4_local0 = tmp6_input.lw(tmp0_desc, 0);
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
    return Source.z5c(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  }
  lr() {
    return this.x5c_1;
  }
  l14() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), StringSerializer_getInstance()];
  }
}
class Source {
  constructor(lineText, marker) {
    this.i5c_1 = lineText;
    this.j5c_1 = marker;
  }
  toString() {
    return 'Source(lineText=' + this.i5c_1 + ', marker=' + this.j5c_1 + ')';
  }
  hashCode() {
    var result = getStringHashCode(this.i5c_1);
    result = imul(result, 31) + getStringHashCode(this.j5c_1) | 0;
    return result;
  }
  equals(other) {
    if (this === other)
      return true;
    if (!(other instanceof Source))
      return false;
    if (!(this.i5c_1 === other.i5c_1))
      return false;
    if (!(this.j5c_1 === other.j5c_1))
      return false;
    return true;
  }
  static z5c(seen0, lineText, marker, serializationConstructorMarker) {
    if (!(3 === (3 & seen0))) {
      throwMissingFieldException(seen0, 3, $serializer_getInstance_1().x5c_1);
    }
    var $this = createThis(this);
    $this.i5c_1 = lineText;
    $this.j5c_1 = marker;
    return $this;
  }
}
class Companion_2 {}
class $serializer_2 {
  constructor() {
    $serializer_instance_2 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('com.bedalton.common.lsp.validation.Suggestion', this, 2);
    tmp0_serialDesc.w13('description', true);
    tmp0_serialDesc.w13('replacement', true);
    this.a5d_1 = tmp0_serialDesc;
  }
  b5d(encoder, value) {
    var tmp0_desc = this.a5d_1;
    var tmp1_output = encoder.bw(tmp0_desc);
    if (tmp1_output.zx(tmp0_desc, 0) ? true : !(value.k5c_1 == null)) {
      tmp1_output.vx(tmp0_desc, 0, StringSerializer_getInstance(), value.k5c_1);
    }
    if (tmp1_output.zx(tmp0_desc, 1) ? true : !(value.l5c_1 == null)) {
      tmp1_output.vx(tmp0_desc, 1, StringSerializer_getInstance(), value.l5c_1);
    }
    tmp1_output.cw(tmp0_desc);
  }
  mr(encoder, value) {
    return this.b5d(encoder, value instanceof Suggestion ? value : THROW_CCE());
  }
  nr(decoder) {
    var tmp0_desc = this.a5d_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_input = decoder.bw(tmp0_desc);
    if (tmp6_input.sw()) {
      tmp4_local0 = tmp6_input.pw(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp6_input.pw(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp6_input.tw(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp6_input.pw(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp6_input.pw(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          default:
            throw UnknownFieldException.et(tmp2_index);
        }
      }
    tmp6_input.cw(tmp0_desc);
    return Suggestion.c5d(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  }
  lr() {
    return this.a5d_1;
  }
  l14() {
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
    this.k5c_1 = description;
    this.l5c_1 = replacement;
  }
  toString() {
    return 'Suggestion(description=' + this.k5c_1 + ', replacement=' + this.l5c_1 + ')';
  }
  hashCode() {
    var result = this.k5c_1 == null ? 0 : getStringHashCode(this.k5c_1);
    result = imul(result, 31) + (this.l5c_1 == null ? 0 : getStringHashCode(this.l5c_1)) | 0;
    return result;
  }
  equals(other) {
    if (this === other)
      return true;
    if (!(other instanceof Suggestion))
      return false;
    if (!(this.k5c_1 == other.k5c_1))
      return false;
    if (!(this.l5c_1 == other.l5c_1))
      return false;
    return true;
  }
  static c5d(seen0, description, replacement, serializationConstructorMarker) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_2().a5d_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1))
      $this.k5c_1 = null;
    else
      $this.k5c_1 = description;
    if (0 === (seen0 & 2))
      $this.l5c_1 = null;
    else
      $this.l5c_1 = replacement;
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
  var location = diagnostic.x5b_1;
  var tmp;
  if (filename == null) {
    tmp = null;
  } else {
    // Inline function 'kotlin.let' call
    tmp = 'File: ' + filename;
  }
  var file = tmp;
  var tmp1_safe_receiver = diagnostic.y5b_1;
  var tmp_0;
  if (tmp1_safe_receiver == null) {
    tmp_0 = null;
  } else {
    // Inline function 'kotlin.let' call
    var markerPadding = repeat(' ', location.b5c_1.toString().length);
    tmp_0 = '\n' + location.b5c_1 + ' | ' + tmp1_safe_receiver.i5c_1 + '\n' + markerPadding + ' | ' + tmp1_safe_receiver.j5c_1;
  }
  var source = tmp_0;
  var tmp2_safe_receiver = diagnostic.z5b_1;
  var tmp3_safe_receiver = tmp2_safe_receiver == null ? null : tmp2_safe_receiver.l5c_1;
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
  var severity = diagnostic.u5b_1.toUpperCase();
  // Inline function 'kotlin.text.trim' call
  var this_0 = joinToString(listOfNotNull([severity + ': ' + diagnostic.v5b_1, file, 'Location: line ' + location.b5c_1 + ', column ' + location.d5c_1 + ', ' + location.h5c_1, 'Problem: ' + diagnostic.w5b_1, source, suggestion]), '\n');
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
protoOf($serializer).m14 = typeParametersSerializers;
initMetadataForObject($serializer, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(Diagnostic, 'Diagnostic', VOID, VOID, VOID, VOID, VOID, {0: $serializer_getInstance});
initMetadataForObject(DiagnosticFormatter, 'DiagnosticFormatter');
initMetadataForCompanion(Companion_0);
protoOf($serializer_0).m14 = typeParametersSerializers;
initMetadataForObject($serializer_0, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(Location, 'Location', VOID, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_0});
initMetadataForCompanion(Companion_1);
protoOf($serializer_1).m14 = typeParametersSerializers;
initMetadataForObject($serializer_1, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(Source, 'Source', VOID, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_1});
initMetadataForCompanion(Companion_2);
protoOf($serializer_2).m14 = typeParametersSerializers;
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
