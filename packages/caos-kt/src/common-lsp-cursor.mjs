import {
  getKClassFromExpression348iqjl4fnx2f as getKClassFromExpression,
  THROW_CCE2g6jy02ryeudk as THROW_CCE,
  Unit_instancev9v8hjid95df as Unit_instance,
  equals2au1ep9vhcato as equals,
  contentEqualsaf55p28mnw74 as contentEquals,
  hashCodeq5arwsb9dgti as hashCode,
  contentHashCode2i020q5tbeh2s as contentHashCode,
  toString1pkumu07cwy4m as toString,
  initMetadataForClassbxx6q50dy2s7 as initMetadataForClass,
  LazyThreadSafetyMode_PUBLICATION_getInstance3qslfm3vqg6y3 as LazyThreadSafetyMode_PUBLICATION_getInstance,
  lazy1261dae0bgscp as lazy,
  initMetadataForCompanion1wyw17z38v6ac as initMetadataForCompanion,
  VOID3gxj6tk5isa35 as VOID,
  Enum3alwj03lh1n41 as Enum,
  protoOf180f3jzyo7rfj as protoOf,
  initMetadataForObject1cxne3s9w65el as initMetadataForObject,
  createThis2j2avj17cvnv2 as createThis,
} from './kotlin-kotlin-stdlib.mjs';
import {
  createSimpleEnumSerializer2guioz11kk1m0 as createSimpleEnumSerializer,
  SerializerFactory1qv9hivitncuv as SerializerFactory,
  SerializableWithd2dap36updxd as SerializableWith,
  PluginGeneratedSerialDescriptorqdzeg5asqhfg as PluginGeneratedSerialDescriptor,
  UnknownFieldExceptiona60e3a6v1xqo as UnknownFieldException,
  IntSerializer_getInstanceuhm8c1wku08l as IntSerializer_getInstance,
  typeParametersSerializers2likxjr48tr7y as typeParametersSerializers,
  GeneratedSerializer1f7t7hssdd2ws as GeneratedSerializer,
  throwMissingFieldException2cmke0v3ynf14 as throwMissingFieldException,
} from './kotlinx-serialization-kotlinx-serialization-core.mjs';
//region block: imports
var imul = Math.imul;
//endregion
//region block: pre-declaration
class ClosestItemResult {
  constructor(closest, previous) {
    this.l56_1 = closest;
    this.m56_1 = previous;
  }
  equals(other) {
    if (this === other)
      return true;
    if (other == null || !getKClassFromExpression(this).equals(getKClassFromExpression(other)))
      return false;
    if (!(other instanceof ClosestItemResult))
      THROW_CCE();
    if (!equals(this.l56_1, other.l56_1))
      return false;
    if (!contentEquals(this.m56_1, other.m56_1))
      return false;
    return true;
  }
  hashCode() {
    var result = hashCode(this.l56_1);
    result = imul(31, result) + contentHashCode(this.m56_1) | 0;
    return result;
  }
  toString() {
    return 'ClosestItemResult(closest=' + toString(this.l56_1) + ', previous=' + toString(this.m56_1) + ')';
  }
}
class Companion {
  constructor() {
    Companion_instance = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp.n56_1 = lazy(tmp_0, CursorPosition$Companion$_anonymous__riyxn4);
  }
  n1e() {
    return _get_$cachedSerializer__te6jhj(this);
  }
  b15(typeParamsSerializers) {
    return this.n1e();
  }
}
class CursorPosition extends Enum {
  constructor(name, ordinal, value) {
    super(name, ordinal);
    this.q56_1 = value;
  }
}
class Companion_0 {}
class $serializer {
  constructor() {
    $serializer_instance = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('com.bedalton.common.lsp.cursor.Distance', this, 2);
    tmp0_serialDesc.z13('lineOffset', false);
    tmp0_serialDesc.z13('columnOffset', false);
    this.r56_1 = tmp0_serialDesc;
  }
  s56(encoder, value) {
    var tmp0_desc = this.r56_1;
    var tmp1_output = encoder.ew(tmp0_desc);
    tmp1_output.px(tmp0_desc, 0, value.t56_1);
    tmp1_output.px(tmp0_desc, 1, value.u56_1);
    tmp1_output.fw(tmp0_desc);
  }
  pr(encoder, value) {
    return this.s56(encoder, value instanceof Distance ? value : THROW_CCE());
  }
  qr(decoder) {
    var tmp0_desc = this.r56_1;
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
    return Distance.v56(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  }
  or() {
    return this.r56_1;
  }
  o14() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [IntSerializer_getInstance(), IntSerializer_getInstance()];
  }
}
class Distance {
  constructor(lineOffset, columnOffset) {
    this.t56_1 = lineOffset;
    this.u56_1 = columnOffset;
  }
  toString() {
    return 'Distance(lineOffset=' + this.t56_1 + ', columnOffset=' + this.u56_1 + ')';
  }
  hashCode() {
    var result = this.t56_1;
    result = imul(result, 31) + this.u56_1 | 0;
    return result;
  }
  equals(other) {
    if (this === other)
      return true;
    if (!(other instanceof Distance))
      return false;
    if (!(this.t56_1 === other.t56_1))
      return false;
    if (!(this.u56_1 === other.u56_1))
      return false;
    return true;
  }
  static v56(seen0, lineOffset, columnOffset, serializationConstructorMarker) {
    if (!(3 === (3 & seen0))) {
      throwMissingFieldException(seen0, 3, $serializer_getInstance().r56_1);
    }
    var $this = createThis(this);
    $this.t56_1 = lineOffset;
    $this.u56_1 = columnOffset;
    return $this;
  }
}
class Companion_1 {
  constructor() {
    Companion_instance_1 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('com.bedalton.common.lsp.cursor.Distanced', null, 2);
    tmp0_serialDesc.z13('item', false);
    tmp0_serialDesc.z13('distance', false);
    this.w56_1 = tmp0_serialDesc;
  }
  p26(typeSerial0) {
    return $serializer_0.z56(typeSerial0);
  }
  b15(typeParamsSerializers) {
    return this.p26(typeParamsSerializers[0]);
  }
}
class $serializer_0 {
  static a57() {
    var $this = createThis(this);
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('com.bedalton.common.lsp.cursor.Distanced', $this, 2);
    tmp0_serialDesc.z13('item', false);
    tmp0_serialDesc.z13('distance', false);
    $this.x56_1 = tmp0_serialDesc;
    return $this;
  }
  b57(encoder, value) {
    var tmp0_desc = this.x56_1;
    var tmp1_output = encoder.ew(tmp0_desc);
    tmp1_output.wx(tmp0_desc, 0, this.y56_1, value.c57_1);
    tmp1_output.wx(tmp0_desc, 1, $serializer_getInstance(), value.d57_1);
    tmp1_output.fw(tmp0_desc);
  }
  pr(encoder, value) {
    return this.b57(encoder, value instanceof Distanced ? value : THROW_CCE());
  }
  qr(decoder) {
    var tmp0_desc = this.x56_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_input = decoder.ew(tmp0_desc);
    if (tmp6_input.vw()) {
      tmp4_local0 = tmp6_input.qw(tmp0_desc, 0, this.y56_1, tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp6_input.qw(tmp0_desc, 1, $serializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp6_input.ww(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp6_input.qw(tmp0_desc, 0, this.y56_1, tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp6_input.qw(tmp0_desc, 1, $serializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          default:
            throw UnknownFieldException.ht(tmp2_index);
        }
      }
    tmp6_input.fw(tmp0_desc);
    return Distanced.e57(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  }
  or() {
    return this.x56_1;
  }
  o14() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [this.y56_1, $serializer_getInstance()];
  }
  p14() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [this.y56_1];
  }
  static z56(typeSerial0) {
    var $this = this.a57();
    $this.y56_1 = typeSerial0;
    return $this;
  }
}
class Distanced {
  constructor(item, distance) {
    Companion_getInstance_1();
    this.c57_1 = item;
    this.d57_1 = distance;
  }
  toString() {
    return 'Distanced(item=' + toString(this.c57_1) + ', distance=' + this.d57_1.toString() + ')';
  }
  hashCode() {
    var result = hashCode(this.c57_1);
    result = imul(result, 31) + this.d57_1.hashCode() | 0;
    return result;
  }
  equals(other) {
    if (this === other)
      return true;
    if (!(other instanceof Distanced))
      return false;
    if (!equals(this.c57_1, other.c57_1))
      return false;
    if (!this.d57_1.equals(other.d57_1))
      return false;
    return true;
  }
  static e57(seen0, item, distance, serializationConstructorMarker) {
    Companion_getInstance_1();
    if (!(3 === (3 & seen0))) {
      throwMissingFieldException(seen0, 3, Companion_getInstance_1().w56_1);
    }
    var $this = createThis(this);
    $this.c57_1 = item;
    $this.d57_1 = distance;
    return $this;
  }
}
//endregion
function _get_$cachedSerializer__te6jhj($this) {
  return $this.n56_1.r3();
}
function CursorPosition$Companion$_anonymous__riyxn4() {
  return createSimpleEnumSerializer('com.bedalton.common.lsp.cursor.CursorPosition', values());
}
var CursorPosition_BEFORE_instance;
var CursorPosition_START_instance;
var CursorPosition_INSIDE_instance;
var CursorPosition_END_instance;
var CursorPosition_AFTER_instance;
function values() {
  return [CursorPosition_BEFORE_getInstance(), CursorPosition_START_getInstance(), CursorPosition_INSIDE_getInstance(), CursorPosition_END_getInstance(), CursorPosition_AFTER_getInstance()];
}
var Companion_instance;
function Companion_getInstance() {
  CursorPosition_initEntries();
  if (Companion_instance === VOID)
    new Companion();
  return Companion_instance;
}
var CursorPosition_entriesInitialized;
function CursorPosition_initEntries() {
  if (CursorPosition_entriesInitialized)
    return Unit_instance;
  CursorPosition_entriesInitialized = true;
  CursorPosition_BEFORE_instance = new CursorPosition('BEFORE', 0, 0);
  CursorPosition_START_instance = new CursorPosition('START', 1, 1);
  CursorPosition_INSIDE_instance = new CursorPosition('INSIDE', 2, 2);
  CursorPosition_END_instance = new CursorPosition('END', 3, 3);
  CursorPosition_AFTER_instance = new CursorPosition('AFTER', 4, 4);
  Companion_getInstance();
}
function CursorPosition_BEFORE_getInstance() {
  CursorPosition_initEntries();
  return CursorPosition_BEFORE_instance;
}
function CursorPosition_START_getInstance() {
  CursorPosition_initEntries();
  return CursorPosition_START_instance;
}
function CursorPosition_INSIDE_getInstance() {
  CursorPosition_initEntries();
  return CursorPosition_INSIDE_instance;
}
function CursorPosition_END_getInstance() {
  CursorPosition_initEntries();
  return CursorPosition_END_instance;
}
function CursorPosition_AFTER_getInstance() {
  CursorPosition_initEntries();
  return CursorPosition_AFTER_instance;
}
var Companion_instance_0;
function Companion_getInstance_0() {
  return Companion_instance_0;
}
var $serializer_instance;
function $serializer_getInstance() {
  if ($serializer_instance === VOID)
    new $serializer();
  return $serializer_instance;
}
var Companion_instance_1;
function Companion_getInstance_1() {
  if (Companion_instance_1 === VOID)
    new Companion_1();
  return Companion_instance_1;
}
function getDistanceFromStart(range, lineNumber, column) {
  var tmp = lineNumber - range.o1().h1e() | 0;
  var tmp_0;
  if (lineNumber === range.o1().h1e()) {
    tmp_0 = column - range.o1().l1e() | 0;
  } else {
    tmp_0 = range.o1().l1e();
  }
  return new Distance(tmp, tmp_0);
}
function getAbsoluteDistanceFromNearestEdge(range, lineNumber, column) {
  return getDistance(range, lineNumber, column, true);
}
function getDistance(range, lineNumber, column, absolute) {
  if (lineNumber === range.o1().h1e()) {
    if (column >= range.o1().l1e()) {
      if (lineNumber < range.i1e().h1e()) {
        return new Distance(0, 0);
      } else if (column <= range.i1e().l1e()) {
        return new Distance(0, 0);
      }
    }
  }
  var tmp;
  if (lineNumber === range.i1e().h1e()) {
    var tmp_0;
    if (column <= range.i1e().l1e()) {
      return new Distance(0, 0);
    } else {
      tmp_0 = range.i1e();
    }
    tmp = tmp_0;
  } else {
    tmp = range.o1();
  }
  var point = tmp;
  var tmp_1;
  if (lineNumber === point.h1e()) {
    tmp_1 = column - point.l1e() | 0;
  } else {
    tmp_1 = point.l1e();
  }
  var characterDistance = tmp_1;
  if (absolute && characterDistance < 0) {
    characterDistance = imul(characterDistance, -1);
  }
  return new Distance(lineNumber - point.h1e() | 0, characterDistance);
}
function getRelativeCursorPosition(parseTreeItem, line, character) {
  var range = parseTreeItem.g1e();
  var start = range.o1();
  var end = range.i1e();
  if (line === start.h1e()) {
    if (end.h1e() === start.h1e()) {
      var tmp;
      if (character === start.l1e()) {
        tmp = CursorPosition_START_getInstance();
      } else {
        if (character === end.l1e()) {
          tmp = CursorPosition_END_getInstance();
        } else {
          if (character < start.l1e()) {
            tmp = CursorPosition_BEFORE_getInstance();
          } else {
            if (character > end.l1e()) {
              tmp = CursorPosition_AFTER_getInstance();
            } else {
              var containsLower = start.l1e();
              if (character <= end.l1e() ? containsLower <= character : false) {
                tmp = CursorPosition_INSIDE_getInstance();
              } else {
                tmp = CursorPosition_INSIDE_getInstance();
              }
            }
          }
        }
      }
      return tmp;
    } else {
      return character === start.l1e() ? CursorPosition_START_getInstance() : character < start.l1e() ? CursorPosition_BEFORE_getInstance() : CursorPosition_INSIDE_getInstance();
    }
  } else if (line === end.h1e()) {
    return character === end.l1e() ? CursorPosition_END_getInstance() : character > end.l1e() ? CursorPosition_AFTER_getInstance() : CursorPosition_INSIDE_getInstance();
  } else if (line < start.h1e()) {
    return CursorPosition_BEFORE_getInstance();
  } else if (line > end.h1e()) {
    return CursorPosition_AFTER_getInstance();
  } else {
    return CursorPosition_INSIDE_getInstance();
  }
}
//region block: post-declaration
initMetadataForClass(ClosestItemResult, 'ClosestItemResult');
initMetadataForCompanion(Companion, VOID, [SerializerFactory]);
initMetadataForClass(CursorPosition, 'CursorPosition', VOID, VOID, VOID, VOID, VOID, {0: Companion_getInstance});
initMetadataForCompanion(Companion_0);
protoOf($serializer).p14 = typeParametersSerializers;
initMetadataForObject($serializer, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(Distance, 'Distance', VOID, VOID, VOID, VOID, VOID, {0: $serializer_getInstance});
initMetadataForCompanion(Companion_1, VOID, [SerializerFactory]);
initMetadataForClass($serializer_0, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(Distanced, 'Distanced', VOID, VOID, VOID, VOID, VOID, {0: Companion_getInstance_1});
//endregion
//region block: init
Companion_instance_0 = new Companion_0();
//endregion
//region block: exports
export {
  getRelativeCursorPosition as getRelativeCursorPosition,
};
export {
  ClosestItemResult as ClosestItemResult2yh056qyeir83,
  Distanced as Distanced1fqqmuxnmvtj8,
  getAbsoluteDistanceFromNearestEdge as getAbsoluteDistanceFromNearestEdge2v1sjlath5vfs,
  getDistanceFromStart as getDistanceFromStart2rjq7ai9z1l8j,
  getRelativeCursorPosition as getRelativeCursorPosition38kiizh2sz33b,
  Companion_getInstance as Companion_getInstance2gte478q2girr,
  CursorPosition_AFTER_getInstance as CursorPosition_AFTER_getInstance28lxpmihixed4,
};
//endregion

//# sourceMappingURL=common-lsp-cursor.mjs.map
