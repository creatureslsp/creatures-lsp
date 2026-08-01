import {
  firstOrNull1gk7vzkf4h3nq as firstOrNull,
  initMetadataForObject1cxne3s9w65el as initMetadataForObject,
  VOID3gxj6tk5isa35 as VOID,
  getKClass3t8tygqu4lcxf as getKClass,
  LazyThreadSafetyMode_PUBLICATION_getInstance3qslfm3vqg6y3 as LazyThreadSafetyMode_PUBLICATION_getInstance,
  lazy1261dae0bgscp as lazy,
  initMetadataForCompanion1wyw17z38v6ac as initMetadataForCompanion,
  THROW_CCE2g6jy02ryeudk as THROW_CCE,
  protoOf180f3jzyo7rfj as protoOf,
  getKClassFromExpression348iqjl4fnx2f as getKClassFromExpression,
  Unit_instancev9v8hjid95df as Unit_instance,
  contentEqualsaf55p28mnw74 as contentEquals,
  getBooleanHashCode1bbj3u6b3v0a7 as getBooleanHashCode,
  getStringHashCode26igk1bx568vk as getStringHashCode,
  contentHashCode2i020q5tbeh2s as contentHashCode,
  toString1pkumu07cwy4m as toString,
  createThis2j2avj17cvnv2 as createThis,
  initMetadataForClassbxx6q50dy2s7 as initMetadataForClass,
  Regexxgw0gjiagf4z as Regex,
  Exceptiondt2hlxn7j7vw as Exception,
  PrimitiveClasses_getInstanceds06xwqrwfdm as PrimitiveClasses_getInstance,
  arrayOf1akklvh2at202 as arrayOf,
  createKType31ecntyyaay3k as createKType,
  createInvariantKTypeProjection3h5364czc0a8w as createInvariantKTypeProjection,
  isInterface3d6p8outrmvmk as isInterface,
} from './kotlin-kotlin-stdlib.mjs';
import {
  Location3lef9d1tfhncu as Location,
  Companion_instance1214jcxfgicpd as Companion_instance,
  Diagnostic7wo6iljgifv7 as Diagnostic,
  $serializer_getInstance3ogtke189la6y as $serializer_getInstance,
  DiagnosticFormatter_instance1olgnikpme1hc as DiagnosticFormatter_instance,
} from './common-lsp-validation.mjs';
import {
  TypeTokens_getInstanceano5od1y9c5f as TypeTokens_getInstance,
  assertValidVariantj6a091z2jtqp as assertValidVariant,
  get_caosCoreDefaultSerializersModule1aaqup6w7ri8s as get_caosCoreDefaultSerializersModule,
} from './caos-core.mjs';
import {
  ReferenceArraySerializer3juj1vqolxkrs as ReferenceArraySerializer,
  PluginGeneratedSerialDescriptorqdzeg5asqhfg as PluginGeneratedSerialDescriptor,
  StringSerializer_getInstance11v9md0a7d9yk as StringSerializer_getInstance,
  UnknownFieldExceptiona60e3a6v1xqo as UnknownFieldException,
  BooleanSerializer_getInstance2fsi2wywr82nt as BooleanSerializer_getInstance,
  get_nullable197rfua9r7fsz as get_nullable,
  typeParametersSerializers2likxjr48tr7y as typeParametersSerializers,
  GeneratedSerializer1f7t7hssdd2ws as GeneratedSerializer,
  throwMissingFieldException2cmke0v3ynf14 as throwMissingFieldException,
  SerializableWithd2dap36updxd as SerializableWith,
  serializer1i4e9ym37oxmo as serializer,
  KSerializerzf77vz1967fq as KSerializer,
} from './kotlinx-serialization-kotlinx-serialization-core.mjs';
import {
  CaosParser_instance3ff94tinm0osm as CaosParser_instance,
  parseResultFromDynamic_JsApi1xom06t9icuqr as parseResultFromDynamic_JsApi,
} from './caos-parser.mjs';
import { validateCaosParseResultWithSuggestions6ja6r8bm15x2 as validateCaosParseResultWithSuggestions } from './caos-validation.mjs';
import {
  Jsonsmkyu9xjl7fv as Json,
  encodeToDynamicsae9c2u7066d as encodeToDynamic,
  decodeFromDynamic3axi482yesc93 as decodeFromDynamic,
} from './kotlinx-serialization-kotlinx-serialization-json.mjs';
//region block: imports
var imul = Math.imul;
//endregion
//region block: pre-declaration
class CaosDiagnosticFormatter {
  o5q(filename, variant, errors) {
    var tmp0_safe_receiver = firstOrNull(errors);
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.x5b_1;
    var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.h5c_1;
    var indexing = tmp2_elvis_lhs == null ? '1-indexed' : tmp2_elvis_lhs;
    // Inline function 'kotlin.collections.isEmpty' call
    var tmp3_okay = errors.length === 0;
    return new DiagnosticReport(tmp3_okay, filename, 'CAOS', variant, errors, indexing);
  }
}
class Companion {
  constructor() {
    Companion_instance_0 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.p5q_1 = [null, null, null, null, lazy(tmp_0, DiagnosticReport$Companion$$childSerializers$_anonymous__g7dvv5), null];
  }
}
class $serializer {
  constructor() {
    $serializer_instance = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('com.bedalton.creatures.caos.validation.report.DiagnosticReport', this, 6);
    tmp0_serialDesc.w13('okay', false);
    tmp0_serialDesc.w13('file', false);
    tmp0_serialDesc.w13('language', false);
    tmp0_serialDesc.w13('variant', false);
    tmp0_serialDesc.w13('diagnostics', false);
    tmp0_serialDesc.w13('indexing', false);
    this.q5q_1 = tmp0_serialDesc;
  }
  r5q(encoder, value) {
    var tmp0_desc = this.q5q_1;
    var tmp1_output = encoder.bw(tmp0_desc);
    var tmp2_cached = Companion_getInstance().p5q_1;
    tmp1_output.jx(tmp0_desc, 0, value.s5q_1);
    tmp1_output.vx(tmp0_desc, 1, StringSerializer_getInstance(), value.t5q_1);
    tmp1_output.rx(tmp0_desc, 2, value.u5q_1);
    tmp1_output.vx(tmp0_desc, 3, StringSerializer_getInstance(), value.v5q_1);
    tmp1_output.tx(tmp0_desc, 4, tmp2_cached[4].k3(), value.w5q_1);
    tmp1_output.rx(tmp0_desc, 5, value.x5q_1);
    tmp1_output.cw(tmp0_desc);
  }
  mr(encoder, value) {
    return this.r5q(encoder, value instanceof DiagnosticReport ? value : THROW_CCE());
  }
  nr(decoder) {
    var tmp0_desc = this.q5q_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = false;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_local4 = null;
    var tmp9_local5 = null;
    var tmp10_input = decoder.bw(tmp0_desc);
    var tmp11_cached = Companion_getInstance().p5q_1;
    if (tmp10_input.sw()) {
      tmp4_local0 = tmp10_input.dw(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp10_input.pw(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp10_input.lw(tmp0_desc, 2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp10_input.pw(tmp0_desc, 3, StringSerializer_getInstance(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp10_input.nw(tmp0_desc, 4, tmp11_cached[4].k3(), tmp8_local4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp9_local5 = tmp10_input.lw(tmp0_desc, 5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp10_input.tw(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp10_input.dw(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp10_input.pw(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp10_input.lw(tmp0_desc, 2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp10_input.pw(tmp0_desc, 3, StringSerializer_getInstance(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp10_input.nw(tmp0_desc, 4, tmp11_cached[4].k3(), tmp8_local4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp9_local5 = tmp10_input.lw(tmp0_desc, 5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          default:
            throw UnknownFieldException.et(tmp2_index);
        }
      }
    tmp10_input.cw(tmp0_desc);
    return DiagnosticReport.y5q(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, null);
  }
  lr() {
    return this.q5q_1;
  }
  l14() {
    var tmp0_cached = Companion_getInstance().p5q_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [BooleanSerializer_getInstance(), get_nullable(StringSerializer_getInstance()), StringSerializer_getInstance(), get_nullable(StringSerializer_getInstance()), tmp0_cached[4].k3(), StringSerializer_getInstance()];
  }
}
class DiagnosticReport {
  constructor(okay, file, language, variant, diagnostics, indexing) {
    Companion_getInstance();
    this.s5q_1 = okay;
    this.t5q_1 = file;
    this.u5q_1 = language;
    this.v5q_1 = variant;
    this.w5q_1 = diagnostics;
    this.x5q_1 = indexing;
  }
  equals(other) {
    if (this === other)
      return true;
    if (other == null || !getKClassFromExpression(this).equals(getKClassFromExpression(other)))
      return false;
    if (!(other instanceof DiagnosticReport))
      THROW_CCE();
    if (!(this.s5q_1 === other.s5q_1))
      return false;
    if (!(this.t5q_1 == other.t5q_1))
      return false;
    if (!(this.u5q_1 === other.u5q_1))
      return false;
    if (!(this.v5q_1 == other.v5q_1))
      return false;
    if (!contentEquals(this.w5q_1, other.w5q_1))
      return false;
    if (!(this.x5q_1 === other.x5q_1))
      return false;
    return true;
  }
  hashCode() {
    var result = getBooleanHashCode(this.s5q_1);
    var tmp = imul(31, result);
    var tmp0_safe_receiver = this.t5q_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : getStringHashCode(tmp0_safe_receiver);
    result = tmp + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
    result = imul(31, result) + getStringHashCode(this.u5q_1) | 0;
    var tmp_0 = imul(31, result);
    var tmp2_safe_receiver = this.v5q_1;
    var tmp3_elvis_lhs = tmp2_safe_receiver == null ? null : getStringHashCode(tmp2_safe_receiver);
    result = tmp_0 + (tmp3_elvis_lhs == null ? 0 : tmp3_elvis_lhs) | 0;
    result = imul(31, result) + contentHashCode(this.w5q_1) | 0;
    result = imul(31, result) + getStringHashCode(this.x5q_1) | 0;
    return result;
  }
  toString() {
    return 'DiagnosticReport(okay=' + this.s5q_1 + ', file=' + this.t5q_1 + ', language=' + this.u5q_1 + ', variant=' + this.v5q_1 + ', diagnostics=' + toString(this.w5q_1) + ', indexing=' + this.x5q_1 + ')';
  }
  static y5q(seen0, okay, file, language, variant, diagnostics, indexing, serializationConstructorMarker) {
    Companion_getInstance();
    if (!(63 === (63 & seen0))) {
      throwMissingFieldException(seen0, 63, $serializer_getInstance_0().q5q_1);
    }
    var $this = createThis(this);
    $this.s5q_1 = okay;
    $this.t5q_1 = file;
    $this.u5q_1 = language;
    $this.v5q_1 = variant;
    $this.w5q_1 = diagnostics;
    $this.x5q_1 = indexing;
    return $this;
  }
}
//endregion
var CaosDiagnosticFormatter_instance;
function CaosDiagnosticFormatter_getInstance() {
  return CaosDiagnosticFormatter_instance;
}
function createCaosDiagnostic(lines, error, suggestion) {
  suggestion = suggestion === VOID ? null : suggestion;
  var location = Location.u5c(error.h1o_1);
  var source = Companion_instance.w5c(lines, location);
  return new Diagnostic(severity(error), errorCodeFromInt(error.errorCode), error.message, location, source, suggestion);
}
function severity(error) {
  return error.actualTokenType === TypeTokens_getInstance().WARNING ? 'warning' : 'error';
}
function errorCodeFromInt(code) {
  switch (code) {
    case 0:
      return 'GENERAL';
    case 1:
      return 'TYPE_ERROR';
    case 2:
      return 'INCOMPLETE_COMMAND_ERROR';
    case 3:
      return 'OUT_OF_VARIANT';
    case 10:
      return 'COMMUNITY_EDITION_ONLY';
    case 4:
      return 'UNTERMINATED_CONTROL_STATEMENT';
    case 5:
      return 'UNEXPECTED_CONTROL_TERMINATOR';
    case 6:
      return 'WHITESPACE_ERROR';
    case 7:
      return 'TOO_MANY_NEWLINES';
    case 8:
      return 'UNTERMINATED_STRING';
    case 9:
      return 'POSSIBLE_LOGIC_PROBLEM';
    default:
      return 'ERROR';
  }
}
function DiagnosticReport$Companion$$childSerializers$_anonymous__g7dvv5() {
  return new ReferenceArraySerializer(getKClass(Diagnostic), $serializer_getInstance());
}
var Companion_instance_0;
function Companion_getInstance() {
  if (Companion_instance_0 === VOID)
    new Companion();
  return Companion_instance_0;
}
var $serializer_instance;
function $serializer_getInstance_0() {
  if ($serializer_instance === VOID)
    new $serializer();
  return $serializer_instance;
}
function validateCaosAsDiagnostics(variant, caos, withSuggestions, checkCancelled) {
  withSuggestions = withSuggestions === VOID ? false : withSuggestions;
  var tmp;
  if (checkCancelled === VOID) {
    tmp = validateCaosAsDiagnostics$lambda;
  } else {
    tmp = checkCancelled;
  }
  checkCancelled = tmp;
  assertValidVariant(variant);
  var tmp_0 = CaosParser_instance;
  var parseResult = tmp_0.m4z(variant, caos, validateCaosAsDiagnostics$lambda_0(checkCancelled));
  return validateCaosParseResultAsDiagnostics(parseResult, withSuggestions, checkCancelled);
}
function validateCaosParseResultAsDiagnostics(result, withSuggestions, checkCancelled) {
  withSuggestions = withSuggestions === VOID ? false : withSuggestions;
  var tmp;
  if (checkCancelled === VOID) {
    tmp = validateCaosParseResultAsDiagnostics$lambda;
  } else {
    tmp = checkCancelled;
  }
  checkCancelled = tmp;
  var errors = validateCaosParseResultWithSuggestions(result, withSuggestions, result.variant === 'DS:CE', checkCancelled);
  var tmp0 = result.originalText;
  // Inline function 'kotlin.text.toRegex' call
  // Inline function 'kotlin.text.split' call
  var lines = Regex.uf('\r?\n').eg(tmp0, 0);
  var tmp_0 = 0;
  var tmp_1 = errors.length;
  // Inline function 'kotlin.arrayOfNulls' call
  var tmp_2 = Array(tmp_1);
  while (tmp_0 < tmp_1) {
    var tmp_3 = tmp_0;
    var _destruct__k2r9zo = errors[tmp_3];
    var error = _destruct__k2r9zo.ki();
    var suggestion = _destruct__k2r9zo.li();
    tmp_2[tmp_3] = createCaosDiagnostic(lines, error, suggestion);
    tmp_0 = tmp_0 + 1 | 0;
  }
  return tmp_2;
}
function validateCaosAsDiagnostics$lambda() {
  return Unit_instance;
}
function validateCaosAsDiagnostics$lambda_0($checkCancelled) {
  return () => {
    $checkCancelled();
    return true;
  };
}
function validateCaosParseResultAsDiagnostics$lambda() {
  return Unit_instance;
}
function getDiagnostics(variant, data, withSuggestions, checkCancelled) {
  assertValidVariant(variant);
  var tmp;
  if (!(data == null) ? typeof data === 'string' : false) {
    tmp = validateCaosAsDiagnostics(variant, (!(data == null) ? typeof data === 'string' : false) ? data : THROW_CCE(), withSuggestions, checkCancelled);
  } else {
    var tmp0_elvis_lhs = parseResultFromDynamic_JsApi(data);
    var tmp_0;
    if (tmp0_elvis_lhs == null) {
      throw Exception.gc('Invalid data passed to validateCaos. Expected string or ParseResult object');
    } else {
      tmp_0 = tmp0_elvis_lhs;
    }
    var parseResult = tmp_0;
    tmp = validateCaosParseResultAsDiagnostics(parseResult, withSuggestions, checkCancelled);
  }
  return tmp;
}
function json(pretty) {
  return Json(VOID, json$lambda(pretty));
}
function json$lambda($pretty) {
  return ($this$Json) => {
    $this$Json.x4i_1 = false;
    $this$Json.y4i_1 = false;
    $this$Json.b4j_1 = $pretty;
    $this$Json.z4i_1 = true;
    $this$Json.o4j_1 = get_caosCoreDefaultSerializersModule();
    return Unit_instance;
  };
}
function caosValidationAsDiagnostics(variant, data, withSuggestions, checkCancelled) {
  withSuggestions = withSuggestions === VOID ? false : withSuggestions;
  var tmp;
  if (checkCancelled === VOID) {
    tmp = getValidationAsDiagnostics_jsAPI$lambda;
  } else {
    tmp = checkCancelled;
  }
  checkCancelled = tmp;
  assertValidVariant(variant);
  var diagnostics = getDiagnostics(variant, data, withSuggestions, checkCancelled);
  // Inline function 'kotlinx.serialization.json.encodeToDynamic' call
  var this_0 = json(false);
  // Inline function 'kotlinx.serialization.serializer' call
  var this_1 = this_0.rw();
  // Inline function 'kotlinx.serialization.internal.cast' call
  var this_2 = serializer(this_1, createKType(PrimitiveClasses_getInstance().ie(), arrayOf([createInvariantKTypeProjection(createKType(getKClass(Diagnostic), arrayOf([]), false))]), false));
  var tmp$ret$1 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
  return encodeToDynamic(this_0, tmp$ret$1, diagnostics);
}
function getValidationAsDiagnostics_jsAPI$lambda() {
  return Unit_instance;
}
function caosValidationReportAsFlatString(variant, data, withSuggestions, checkCancelled) {
  var tmp;
  if (checkCancelled === VOID) {
    tmp = getValidationReportAsFlatReport$lambda;
  } else {
    tmp = checkCancelled;
  }
  checkCancelled = tmp;
  assertValidVariant(variant);
  var errors = getDiagnostics(variant, data, withSuggestions, checkCancelled);
  return DiagnosticFormatter_instance.m5c(null, errors);
}
function caosValidationReport(variant, data, withSuggestions, pretty, checkCancelled) {
  var tmp;
  if (checkCancelled === VOID) {
    tmp = getValidationReportAsObject$lambda;
  } else {
    tmp = checkCancelled;
  }
  checkCancelled = tmp;
  assertValidVariant(variant);
  var errors = getDiagnostics(variant, data, withSuggestions, checkCancelled);
  var report = CaosDiagnosticFormatter_instance.o5q(null, variant, errors);
  // Inline function 'kotlinx.serialization.json.encodeToDynamic' call
  var this_0 = json(pretty);
  // Inline function 'kotlinx.serialization.serializer' call
  var this_1 = this_0.rw();
  // Inline function 'kotlinx.serialization.internal.cast' call
  var this_2 = serializer(this_1, createKType(getKClass(DiagnosticReport), arrayOf([]), false));
  var tmp$ret$1 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
  return encodeToDynamic(this_0, tmp$ret$1, report);
}
function caosDiagnosticsAsFlatString(data) {
  // Inline function 'kotlinx.serialization.json.decodeFromDynamic' call
  var this_0 = json(false);
  // Inline function 'kotlinx.serialization.serializer' call
  var this_1 = this_0.rw();
  // Inline function 'kotlinx.serialization.internal.cast' call
  var this_2 = serializer(this_1, createKType(PrimitiveClasses_getInstance().ie(), arrayOf([createInvariantKTypeProjection(createKType(getKClass(Diagnostic), arrayOf([]), false))]), false));
  var tmp$ret$1 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
  var errors = decodeFromDynamic(this_0, tmp$ret$1, data);
  return DiagnosticFormatter_instance.m5c(null, errors);
}
function getValidationReportAsFlatReport$lambda() {
  return Unit_instance;
}
function getValidationReportAsObject$lambda() {
  return Unit_instance;
}
//region block: post-declaration
initMetadataForObject(CaosDiagnosticFormatter, 'CaosDiagnosticFormatter');
initMetadataForCompanion(Companion);
protoOf($serializer).m14 = typeParametersSerializers;
initMetadataForObject($serializer, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(DiagnosticReport, 'DiagnosticReport', VOID, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_0});
//endregion
//region block: init
CaosDiagnosticFormatter_instance = new CaosDiagnosticFormatter();
//endregion
//region block: exports
export {
  caosValidationAsDiagnostics as caosValidationAsDiagnostics,
  caosValidationReportAsFlatString as caosValidationReportAsFlatString,
  caosValidationReport as caosValidationReport,
  caosDiagnosticsAsFlatString as caosDiagnosticsAsFlatString,
};
//endregion

//# sourceMappingURL=caos-validation-report.mjs.map
