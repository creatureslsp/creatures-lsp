import {
  PluginGeneratedSerialDescriptorqdzeg5asqhfg as PluginGeneratedSerialDescriptor,
  SerializerFactory1qv9hivitncuv as SerializerFactory,
  UnknownFieldExceptiona60e3a6v1xqo as UnknownFieldException,
  GeneratedSerializer1f7t7hssdd2ws as GeneratedSerializer,
  throwMissingFieldException2cmke0v3ynf14 as throwMissingFieldException,
  SerializableWithd2dap36updxd as SerializableWith,
} from './kotlinx-serialization-kotlinx-serialization-core.mjs';
import {
  initMetadataForCompanion1wyw17z38v6ac as initMetadataForCompanion,
  VOID3gxj6tk5isa35 as VOID,
  createThis2j2avj17cvnv2 as createThis,
  THROW_CCE2g6jy02ryeudk as THROW_CCE,
  initMetadataForClassbxx6q50dy2s7 as initMetadataForClass,
  toString30pk9tzaqopn as toString,
  hashCodeq5arwsb9dgti as hashCode,
  equals2au1ep9vhcato as equals,
  Unit_instancev9v8hjid95df as Unit_instance,
  _Char___init__impl__6a9atx2gndcvjvc5pke as _Char___init__impl__6a9atx,
  stackTraceToString2670q6lbhdojj as stackTraceToString,
  toString22rbkbhdb5cl2 as toString_0,
  toMutableList3ewlpx8m5ca2q as toMutableList,
  getKClassFromExpression348iqjl4fnx2f as getKClassFromExpression,
  isBlank1dvkhjjvox3p0 as isBlank,
  Collection1k04j3hzsbod0 as Collection,
  isInterface3d6p8outrmvmk as isInterface,
  equals2v6cggk171b6e as equals_0,
  charSequenceLength3278n89t01tmv as charSequenceLength,
  charCodeAt1yspne1d8erbm as charCodeAt,
  isLowerCase16nv9n55l9laa as isLowerCase,
  toString1pkumu07cwy4m as toString_1,
  substring3saq8ornu0luv as substring,
  isCharSequence1ju9jr1w86plq as isCharSequence,
  trim11nh7r46at6sx as trim,
  get_lastIndexld83bqhfgcdd as get_lastIndex,
  substringiqarkczpya5m as substring_0,
  startsWith1bgirhbedtv2y as startsWith,
  endsWith278181ii8uuo as endsWith,
  abs1kdzbjes1idip as abs,
  contains3ue2qo8xhmpf1 as contains,
  endsWith3cq61xxngobwh as endsWith_0,
  replace3le3ie7l9k8aq as replace,
  Regexxgw0gjiagf4z as Regex,
  toCharArray32huqyw9tt7kx as toCharArray,
  padStart36w1507hs626a as padStart,
  getNumberHashCode2l4nbdcihl25f as getNumberHashCode,
  numberToLong2pakxeg38estk as numberToLong,
  fromInt2ii0rejb1w62w as fromInt,
  add2suhfggl4zvkk as add,
  toNumber2e2hj9zugjwi2 as toNumber,
} from './kotlin-kotlin-stdlib.mjs';
import {
  Log_getInstance1ciirpgt53ci1 as Log_getInstance,
  createSingleFunctionLogger3kyaf7giz9xxr as createSingleFunctionLogger,
} from './bedalton-common-log.mjs';
//region block: imports
var imul = Math.imul;
//endregion
//region block: pre-declaration
class Companion {
  constructor() {
    Companion_instance = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('tuple', null, 2);
    tmp0_serialDesc.z13('first', false);
    tmp0_serialDesc.z13('second', false);
    this.d1j_1 = tmp0_serialDesc;
  }
  e1j(typeSerial0, typeSerial1) {
    return $serializer.i1j(typeSerial0, typeSerial1);
  }
  b15(typeParamsSerializers) {
    return this.e1j(typeParamsSerializers[0], typeParamsSerializers[1]);
  }
}
class $serializer {
  static j1j() {
    var $this = createThis(this);
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('tuple', $this, 2);
    tmp0_serialDesc.z13('first', false);
    tmp0_serialDesc.z13('second', false);
    $this.f1j_1 = tmp0_serialDesc;
    return $this;
  }
  k1j(encoder, value) {
    var tmp0_desc = this.f1j_1;
    var tmp1_output = encoder.ew(tmp0_desc);
    tmp1_output.wx(tmp0_desc, 0, this.g1j_1, value.l1j_1);
    tmp1_output.wx(tmp0_desc, 1, this.h1j_1, value.m1j_1);
    tmp1_output.fw(tmp0_desc);
  }
  pr(encoder, value) {
    return this.k1j(encoder, value instanceof Tuple ? value : THROW_CCE());
  }
  qr(decoder) {
    var tmp0_desc = this.f1j_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_input = decoder.ew(tmp0_desc);
    if (tmp6_input.vw()) {
      tmp4_local0 = tmp6_input.qw(tmp0_desc, 0, this.g1j_1, tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp6_input.qw(tmp0_desc, 1, this.h1j_1, tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp6_input.ww(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp6_input.qw(tmp0_desc, 0, this.g1j_1, tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp6_input.qw(tmp0_desc, 1, this.h1j_1, tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          default:
            throw UnknownFieldException.ht(tmp2_index);
        }
      }
    tmp6_input.fw(tmp0_desc);
    return Tuple.n1j(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  }
  or() {
    return this.f1j_1;
  }
  o14() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [this.g1j_1, this.h1j_1];
  }
  p14() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [this.g1j_1, this.h1j_1];
  }
  static i1j(typeSerial0, typeSerial1) {
    var $this = this.j1j();
    $this.g1j_1 = typeSerial0;
    $this.h1j_1 = typeSerial1;
    return $this;
  }
}
class Tuple {
  constructor(first, second) {
    Companion_getInstance();
    this.l1j_1 = first;
    this.m1j_1 = second;
    delete this.first;
    delete this.second;
  }
  gp() {
    return this.l1j_1;
  }
  hp() {
    return this.m1j_1;
  }
  ni() {
    return this.l1j_1;
  }
  oi() {
    return this.m1j_1;
  }
  toString() {
    return 'Tuple(first=' + toString(this.l1j_1) + ', second=' + toString(this.m1j_1) + ')';
  }
  hashCode() {
    var result = this.l1j_1 == null ? 0 : hashCode(this.l1j_1);
    result = imul(result, 31) + (this.m1j_1 == null ? 0 : hashCode(this.m1j_1)) | 0;
    return result;
  }
  equals(other) {
    if (this === other)
      return true;
    if (!(other instanceof Tuple))
      return false;
    var tmp0_other_with_cast = other instanceof Tuple ? other : THROW_CCE();
    if (!equals(this.l1j_1, tmp0_other_with_cast.l1j_1))
      return false;
    if (!equals(this.m1j_1, tmp0_other_with_cast.m1j_1))
      return false;
    return true;
  }
  static n1j(seen0, first, second, serializationConstructorMarker) {
    Companion_getInstance();
    if (!(3 === (3 & seen0))) {
      throwMissingFieldException(seen0, 3, Companion_getInstance().d1j_1);
    }
    var $this = createThis(this);
    $this.l1j_1 = first;
    $this.m1j_1 = second;
    return $this;
  }
  get first() {
    return this.gp();
  }
  get second() {
    return this.hp();
  }
}
class DateComponents {
  constructor(year, monthZeroIndexed, day, hour, minute, seconds, unix) {
    hour = hour === VOID ? null : hour;
    minute = minute === VOID ? null : minute;
    seconds = seconds === VOID ? null : seconds;
    unix = unix === VOID ? null : unix;
    this.year = year;
    this.monthZeroIndexed = monthZeroIndexed;
    this.day = day;
    this.hour = hour;
    this.minute = minute;
    this.seconds = seconds;
    this.unix = unix;
  }
  o1j() {
    return this.year;
  }
  p1j() {
    return this.monthZeroIndexed;
  }
  q1j() {
    return this.day;
  }
  r1j() {
    return this.hour;
  }
  s1j() {
    return this.minute;
  }
  t1j() {
    return this.seconds;
  }
  u1j() {
    return this.unix;
  }
  v1j(offsetHours, offsetMinutes) {
    var tmp;
    if (!(offsetHours == null)) {
      var tmp_0 = (offsetHours > 0 ? '+' : '') + offsetHours.toString() + ':';
      tmp = tmp_0 + padStart((offsetMinutes == null ? 0 : offsetMinutes).toString(), 2, _Char___init__impl__6a9atx(48));
    } else {
      tmp = '';
    }
    var offset = tmp;
    var tmp_1;
    if (!(this.hour == null) || !(this.minute == null)) {
      var tmp1_elvis_lhs = this.hour;
      var tmp_2 = 'T' + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) + ':';
      var tmp2_elvis_lhs = this.minute;
      tmp_1 = tmp_2 + (tmp2_elvis_lhs == null ? 0 : tmp2_elvis_lhs) + (!(this.seconds == null) ? ':' + this.seconds : '');
    } else {
      tmp_1 = '';
    }
    var time = tmp_1;
    return this.year.toString() + '-' + padStart((this.monthZeroIndexed + 1 | 0).toString(), 2, _Char___init__impl__6a9atx(48)) + '-' + this.day.toString() + time + offset;
  }
  toISO(offsetHours, offsetMinutes, $super) {
    offsetHours = offsetHours === VOID ? null : offsetHours;
    offsetMinutes = offsetMinutes === VOID ? null : offsetMinutes;
    return $super === VOID ? this.v1j(offsetHours, offsetMinutes) : $super.v1j.call(this, offsetHours, offsetMinutes);
  }
  ni() {
    return this.year;
  }
  oi() {
    return this.monthZeroIndexed;
  }
  mp() {
    return this.day;
  }
  w1j() {
    return this.hour;
  }
  x1j() {
    return this.minute;
  }
  y1j() {
    return this.seconds;
  }
  z1j() {
    return this.unix;
  }
  a1k(year, monthZeroIndexed, day, hour, minute, seconds, unix) {
    return new DateComponents(year, monthZeroIndexed, day, hour, minute, seconds, unix);
  }
  copy(year, monthZeroIndexed, day, hour, minute, seconds, unix, $super) {
    year = year === VOID ? this.year : year;
    monthZeroIndexed = monthZeroIndexed === VOID ? this.monthZeroIndexed : monthZeroIndexed;
    day = day === VOID ? this.day : day;
    hour = hour === VOID ? this.hour : hour;
    minute = minute === VOID ? this.minute : minute;
    seconds = seconds === VOID ? this.seconds : seconds;
    unix = unix === VOID ? this.unix : unix;
    return $super === VOID ? this.a1k(year, monthZeroIndexed, day, hour, minute, seconds, unix) : $super.a1k.call(this, year, monthZeroIndexed, day, hour, minute, seconds, unix);
  }
  toString() {
    return 'DateComponents(year=' + this.year + ', monthZeroIndexed=' + this.monthZeroIndexed + ', day=' + this.day + ', hour=' + this.hour + ', minute=' + this.minute + ', seconds=' + this.seconds + ', unix=' + this.unix + ')';
  }
  hashCode() {
    var result = this.year;
    result = imul(result, 31) + this.monthZeroIndexed | 0;
    result = imul(result, 31) + this.day | 0;
    result = imul(result, 31) + (this.hour == null ? 0 : this.hour) | 0;
    result = imul(result, 31) + (this.minute == null ? 0 : this.minute) | 0;
    result = imul(result, 31) + (this.seconds == null ? 0 : this.seconds) | 0;
    result = imul(result, 31) + (this.unix == null ? 0 : getNumberHashCode(this.unix)) | 0;
    return result;
  }
  equals(other) {
    if (this === other)
      return true;
    if (!(other instanceof DateComponents))
      return false;
    var tmp0_other_with_cast = other instanceof DateComponents ? other : THROW_CCE();
    if (!(this.year === tmp0_other_with_cast.year))
      return false;
    if (!(this.monthZeroIndexed === tmp0_other_with_cast.monthZeroIndexed))
      return false;
    if (!(this.day === tmp0_other_with_cast.day))
      return false;
    if (!(this.hour == tmp0_other_with_cast.hour))
      return false;
    if (!(this.minute == tmp0_other_with_cast.minute))
      return false;
    if (!(this.seconds == tmp0_other_with_cast.seconds))
      return false;
    if (!equals(this.unix, tmp0_other_with_cast.unix))
      return false;
    return true;
  }
}
//endregion
var Companion_instance;
function Companion_getInstance() {
  if (Companion_instance === VOID)
    new Companion();
  return Companion_instance;
}
function formatted(_this__u8e3s4, printStackTrace) {
  printStackTrace = printStackTrace === VOID ? get_defaultLogStackTrace() : printStackTrace;
  var tmp0_safe_receiver = _this__u8e3s4.message;
  var tmp;
  if (tmp0_safe_receiver == null) {
    tmp = null;
  } else {
    // Inline function 'kotlin.let' call
    tmp = ': ' + tmp0_safe_receiver;
  }
  var tmp1_elvis_lhs = tmp;
  var message = tmp1_elvis_lhs == null ? '' : tmp1_elvis_lhs;
  var tmp_0;
  if (printStackTrace == null ? Log_getInstance().a1j('DEBUG') : printStackTrace) {
    var tmp0 = _Char___init__impl__6a9atx(10);
    // Inline function 'kotlin.text.plus' call
    var other = stackTraceToString(_this__u8e3s4);
    tmp_0 = toString_0(tmp0) + other;
  } else {
    tmp_0 = '';
  }
  var stack = tmp_0;
  return '' + get_className(_this__u8e3s4) + message + stack;
}
function get_defaultLogStackTrace() {
  return Log_getInstance().a1j('DEBUG') || Log_getInstance().a1j('verbose');
}
var mMemoryConstrained;
function nullIfEmpty(_this__u8e3s4) {
  // Inline function 'kotlin.collections.ifEmpty' call
  var tmp;
  if (_this__u8e3s4.b1()) {
    tmp = null;
  } else {
    tmp = _this__u8e3s4;
  }
  return tmp;
}
function nullIfEmpty_0(_this__u8e3s4) {
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
function isNotNullOrEmpty(_this__u8e3s4) {
  var tmp;
  if (!(_this__u8e3s4 == null)) {
    // Inline function 'kotlin.collections.isNotEmpty' call
    tmp = !_this__u8e3s4.b1();
  } else {
    tmp = false;
  }
  return tmp;
}
function equalIgnoringOrder(_this__u8e3s4, other) {
  if (!(other.length === _this__u8e3s4.length)) {
    return false;
  }
  var otherCopy = toMutableList(other);
  var inductionVariable = 0;
  var last = _this__u8e3s4.length;
  while (inductionVariable < last) {
    var e = _this__u8e3s4[inductionVariable];
    inductionVariable = inductionVariable + 1 | 0;
    if (!otherCopy.n2(e)) {
      return false;
    }
    otherCopy.z3(e);
  }
  return true;
}
function insertFront(_this__u8e3s4, item) {
  if (_this__u8e3s4.b1())
    _this__u8e3s4.g2(item);
  else {
    _this__u8e3s4.d4(0, item);
  }
  return _this__u8e3s4;
}
function orElse(_this__u8e3s4, other) {
  return _this__u8e3s4 == null ? other : _this__u8e3s4;
}
function orFalse(_this__u8e3s4) {
  return _this__u8e3s4 == null ? false : _this__u8e3s4;
}
function get_className(_this__u8e3s4) {
  var tmp;
  if (_this__u8e3s4 == null) {
    tmp = null;
  } else {
    // Inline function 'kotlin.let' call
    tmp = getKClassFromExpression(_this__u8e3s4).x();
  }
  return tmp;
}
function get_REGEX_ESCAPES_REGEX() {
  _init_properties_util_string_kt__j9ylij();
  return REGEX_ESCAPES_REGEX;
}
var REGEX_ESCAPES_REGEX;
function get_NEWLINE_REGEX() {
  _init_properties_util_string_kt__j9ylij();
  return NEWLINE_REGEX;
}
var NEWLINE_REGEX;
var allchars;
var uppercaseSplitRegex;
function isNotNullOrBlank(_this__u8e3s4) {
  _init_properties_util_string_kt__j9ylij();
  // Inline function 'kotlin.text.isNullOrBlank' call
  return !(_this__u8e3s4 == null || isBlank(_this__u8e3s4));
}
function notLikeAny(_this__u8e3s4, other) {
  _init_properties_util_string_kt__j9ylij();
  if (_this__u8e3s4 == null || other == null)
    return false;
  var tmp$ret$0;
  $l$block_0: {
    // Inline function 'kotlin.collections.none' call
    var tmp;
    if (isInterface(other, Collection)) {
      tmp = other.b1();
    } else {
      tmp = false;
    }
    if (tmp) {
      tmp$ret$0 = true;
      break $l$block_0;
    }
    var _iterator__ex2g4s = other.d1();
    while (_iterator__ex2g4s.e1()) {
      var element = _iterator__ex2g4s.f1();
      if (equals_0(_this__u8e3s4, element, true)) {
        tmp$ret$0 = false;
        break $l$block_0;
      }
    }
    tmp$ret$0 = true;
  }
  return tmp$ret$0;
}
function nullIfEmpty_1(_this__u8e3s4) {
  _init_properties_util_string_kt__j9ylij();
  var tmp;
  // Inline function 'kotlin.text.isNullOrBlank' call
  if (_this__u8e3s4 == null || isBlank(_this__u8e3s4)) {
    tmp = null;
  } else {
    tmp = _this__u8e3s4;
  }
  return tmp;
}
function likeAny(_this__u8e3s4, other) {
  _init_properties_util_string_kt__j9ylij();
  if (_this__u8e3s4 == null || other == null)
    return false;
  var tmp$ret$0;
  $l$block_0: {
    // Inline function 'kotlin.collections.any' call
    var tmp;
    if (isInterface(other, Collection)) {
      tmp = other.b1();
    } else {
      tmp = false;
    }
    if (tmp) {
      tmp$ret$0 = false;
      break $l$block_0;
    }
    var _iterator__ex2g4s = other.d1();
    while (_iterator__ex2g4s.e1()) {
      var element = _iterator__ex2g4s.f1();
      if (equals_0(_this__u8e3s4, element, true)) {
        tmp$ret$0 = true;
        break $l$block_0;
      }
    }
    tmp$ret$0 = false;
  }
  return tmp$ret$0;
}
function like(_this__u8e3s4, other) {
  _init_properties_util_string_kt__j9ylij();
  var tmp1_elvis_lhs = _this__u8e3s4 == null ? null : equals_0(_this__u8e3s4, other, true);
  return tmp1_elvis_lhs == null ? false : tmp1_elvis_lhs;
}
function notLike(_this__u8e3s4, other) {
  _init_properties_util_string_kt__j9ylij();
  return !((_this__u8e3s4 == null ? null : equals_0(_this__u8e3s4, other, true)) === true);
}
function capitalize(_this__u8e3s4) {
  _init_properties_util_string_kt__j9ylij();
  // Inline function 'kotlin.text.replaceFirstChar' call
  var tmp;
  // Inline function 'kotlin.text.isNotEmpty' call
  if (charSequenceLength(_this__u8e3s4) > 0) {
    var it = charCodeAt(_this__u8e3s4, 0);
    var tmp_0;
    if (isLowerCase(it)) {
      // Inline function 'kotlin.text.uppercase' call
      // Inline function 'kotlin.js.asDynamic' call
      // Inline function 'kotlin.js.unsafeCast' call
      tmp_0 = toString_0(it).toUpperCase();
    } else {
      tmp_0 = toString_0(it);
    }
    var tmp$ret$2 = tmp_0;
    tmp = toString_1(tmp$ret$2) + substring(_this__u8e3s4, 1);
  } else {
    tmp = _this__u8e3s4;
  }
  return tmp;
}
function stripSurroundingQuotes(_this__u8e3s4, trim_0, superUnescape_0) {
  trim_0 = trim_0 === VOID ? null : trim_0;
  superUnescape_0 = superUnescape_0 === VOID ? null : superUnescape_0;
  _init_properties_util_string_kt__j9ylij();
  var trimNotNull = trim_0 == null ? 1 : trim_0;
  // Inline function 'kotlin.text.isEmpty' call
  if (charSequenceLength(_this__u8e3s4) === 0) {
    return '';
  }
  var tmp;
  if (trimNotNull > 0) {
    // Inline function 'kotlin.text.trim' call
    tmp = toString_1(trim(isCharSequence(_this__u8e3s4) ? _this__u8e3s4 : THROW_CCE()));
  } else {
    tmp = _this__u8e3s4;
  }
  var string = tmp;
  if (string.length === 1) {
    var tmp_0;
    if (charCodeAt(string, 0) === _Char___init__impl__6a9atx(34) || charCodeAt(string, 0) === _Char___init__impl__6a9atx(39)) {
      tmp_0 = '';
    } else {
      tmp_0 = _this__u8e3s4;
    }
    return tmp_0;
  }
  if (startsWith(string, _Char___init__impl__6a9atx(34)) && endsWith(string, _Char___init__impl__6a9atx(34))) {
    string = substring_0(string, 1, get_lastIndex(string));
  } else if (startsWith(string, _Char___init__impl__6a9atx(39)) && endsWith(string, _Char___init__impl__6a9atx(39))) {
    string = substring_0(string, 1, get_lastIndex(string));
  }
  if (!(superUnescape_0 === false)) {
    string = superUnescape(string);
  }
  var tmp_1;
  if (trimNotNull > 1) {
    // Inline function 'kotlin.text.trim' call
    var this_0 = string;
    tmp_1 = toString_1(trim(isCharSequence(this_0) ? this_0 : THROW_CCE()));
  } else {
    tmp_1 = string;
  }
  return tmp_1;
}
function substringFromEnd(_this__u8e3s4, start, fromEnd) {
  _init_properties_util_string_kt__j9ylij();
  // Inline function 'kotlin.math.max' call
  var a = _this__u8e3s4.length - abs(fromEnd) | 0;
  var tmp$ret$0 = Math.max(a, start);
  return substring_0(_this__u8e3s4, start, tmp$ret$0);
}
function superUnescape(string) {
  _init_properties_util_string_kt__j9ylij();
  var escape = ';;#@(_x.x_)@#;;';
  while (contains(string, escape)) {
    escape = '!x(' + escape + ')x!';
  }
  var tail = endsWith_0(string, '\\') ? '\\' : '';
  var tmp0 = replace(replace(replace(replace(replace(replace(replace(replace(string, '\\\\', escape), '\\n', '\n'), '\\r', '\r'), '\\"', '"'), "\\'", "'"), '\\t', '\t'), '\\b', '\b'), '\\ ', ' ');
  // Inline function 'kotlin.text.replace' call
  var tmp$ret$0 = get_REGEX_ESCAPES_REGEX().eg(tmp0, '\\$1');
  var tmp0_0 = replace(tmp$ret$0, escape, '\\');
  // Inline function 'kotlin.text.replace' call
  return get_NEWLINE_REGEX().eg(tmp0_0, '\r\n') + tail;
}
var properties_initialized_util_string_kt_5blygd;
function _init_properties_util_string_kt__j9ylij() {
  if (!properties_initialized_util_string_kt_5blygd) {
    properties_initialized_util_string_kt_5blygd = true;
    // Inline function 'kotlin.text.toRegex' call
    var this_0 = '\\\\([?$\\[\\]^.\\\\*(){}])';
    REGEX_ESCAPES_REGEX = Regex.xf(this_0);
    // Inline function 'kotlin.text.toRegex' call
    NEWLINE_REGEX = Regex.xf('\r?\n');
    allchars = toCharArray('abcdefghijklmnopqrstuvwxyz0123456789');
    // Inline function 'kotlin.text.toRegex' call
    var this_1 = '(?=\\p{Lu})';
    uppercaseSplitRegex = Regex.xf(this_1);
  }
}
function setLogger(logger) {
  Log_getInstance().b1j(createSingleFunctionLogger(logger));
}
var mPathSeparator;
var applicationSupportPath;
function unixToDateComponents(unix) {
  var date = new Date(unix);
  return new DateComponents(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds(), unix);
}
function toUnixTime(dateComponents, offsetHours, offsetMinutes) {
  offsetHours = offsetHours === VOID ? null : offsetHours;
  offsetMinutes = offsetMinutes === VOID ? null : offsetMinutes;
  var date = new Date(dateComponents.toISO());
  var time = numberToLong(date.getTime());
  var tmp;
  if (!(offsetHours == null) || !(offsetMinutes == null)) {
    var tmp_0 = imul(offsetHours == null ? 0 : offsetHours, 60);
    var offset = tmp_0 + (offsetMinutes == null ? 0 : offsetMinutes) | 0;
    // Inline function 'kotlin.Long.plus' call
    tmp = add(time, fromInt(offset));
  } else {
    tmp = time;
  }
  var out = tmp;
  // Inline function 'kotlin.Long.div' call
  // Inline function 'kotlin.math.floor' call
  var x = toNumber(out) / 1000.0;
  return Math.floor(x);
}
//region block: post-declaration
initMetadataForCompanion(Companion, VOID, [SerializerFactory]);
initMetadataForClass($serializer, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(Tuple, 'Tuple', VOID, VOID, VOID, VOID, VOID, {0: Companion_getInstance});
initMetadataForClass(DateComponents, 'DateComponents');
//endregion
//region block: init
mMemoryConstrained = false;
mPathSeparator = null;
applicationSupportPath = null;
//endregion
//region block: exports
export {
  DateComponents as DateComponents,
  setLogger as setLogger,
  unixToDateComponents as unixToDateComponents,
  toUnixTime as toUnixTime,
};
export {
  Tuple as Tupleioyug11t68tu,
  capitalize as capitalizepy5zlt8fhvbr,
  get_className as get_className37xavsdkoilw5,
  equalIgnoringOrder as equalIgnoringOrder1wm6kurq1yuqp,
  formatted as formattedhd9t434i734u,
  insertFront as insertFrontbmbud0h7uft5,
  isNotNullOrBlank as isNotNullOrBlank1u4951vzcrlk2,
  isNotNullOrEmpty as isNotNullOrEmpty28m50napiy7is,
  likeAny as likeAny1hyo1tti2wgqa,
  like as likefsaj12z3bof4,
  notLikeAny as notLikeAny3kh4piuek5a9y,
  notLike as notLike11aoxchz4fswx,
  nullIfEmpty_0 as nullIfEmptyrckcy231jwd8,
  nullIfEmpty as nullIfEmpty3kcyb26c2a3ni,
  nullIfEmpty_1 as nullIfEmpty3thbpl2p81qbc,
  orElse as orElse3904fpbx0d33s,
  orFalse as orFalse1e5x3q8zjtwum,
  stripSurroundingQuotes as stripSurroundingQuotes12l3nx4fm0ipq,
  substringFromEnd as substringFromEnd2kw6x50snhok7,
};
//endregion

//# sourceMappingURL=bedalton-common-core.mjs.map
