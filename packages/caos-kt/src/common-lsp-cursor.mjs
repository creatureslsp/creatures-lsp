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
    this.b54_1 = closest;
    this.c54_1 = previous;
  }
  equals(other) {
    if (this === other)
      return true;
    if (other == null || !getKClassFromExpression(this).equals(getKClassFromExpression(other)))
      return false;
    if (!(other instanceof ClosestItemResult))
      THROW_CCE();
    if (!equals(this.b54_1, other.b54_1))
      return false;
    if (!contentEquals(this.c54_1, other.c54_1))
      return false;
    return true;
  }
  hashCode() {
    var result = hashCode(this.b54_1);
    result = imul(31, result) + contentHashCode(this.c54_1) | 0;
    return result;
  }
  toString() {
    return 'ClosestItemResult(closest=' + toString(this.b54_1) + ', previous=' + toString(this.c54_1) + ')';
  }
}
class Companion {
  constructor() {
    Companion_instance = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp.d54_1 = lazy(tmp_0, CursorPosition$Companion$_anonymous__riyxn4);
  }
  k1e() {
    return _get_$cachedSerializer__te6jhj(this);
  }
  y14(typeParamsSerializers) {
    return this.k1e();
  }
}
class CursorPosition extends Enum {
  constructor(name, ordinal, value) {
    super(name, ordinal);
    this.g54_1 = value;
  }
}
class Companion_0 {}
class $serializer {
  constructor() {
    $serializer_instance = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('com.bedalton.common.lsp.cursor.Distance', this, 2);
    tmp0_serialDesc.w13('lineOffset', false);
    tmp0_serialDesc.w13('columnOffset', false);
    this.h54_1 = tmp0_serialDesc;
  }
  i54(encoder, value) {
    var tmp0_desc = this.h54_1;
    var tmp1_output = encoder.bw(tmp0_desc);
    tmp1_output.mx(tmp0_desc, 0, value.j54_1);
    tmp1_output.mx(tmp0_desc, 1, value.k54_1);
    tmp1_output.cw(tmp0_desc);
  }
  mr(encoder, value) {
    return this.i54(encoder, value instanceof Distance ? value : THROW_CCE());
  }
  nr(decoder) {
    var tmp0_desc = this.h54_1;
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
    return Distance.l54(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  }
  lr() {
    return this.h54_1;
  }
  l14() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [IntSerializer_getInstance(), IntSerializer_getInstance()];
  }
}
class Distance {
  constructor(lineOffset, columnOffset) {
    this.j54_1 = lineOffset;
    this.k54_1 = columnOffset;
  }
  toString() {
    return 'Distance(lineOffset=' + this.j54_1 + ', columnOffset=' + this.k54_1 + ')';
  }
  hashCode() {
    var result = this.j54_1;
    result = imul(result, 31) + this.k54_1 | 0;
    return result;
  }
  equals(other) {
    if (this === other)
      return true;
    if (!(other instanceof Distance))
      return false;
    if (!(this.j54_1 === other.j54_1))
      return false;
    if (!(this.k54_1 === other.k54_1))
      return false;
    return true;
  }
  static l54(seen0, lineOffset, columnOffset, serializationConstructorMarker) {
    if (!(3 === (3 & seen0))) {
      throwMissingFieldException(seen0, 3, $serializer_getInstance().h54_1);
    }
    var $this = createThis(this);
    $this.j54_1 = lineOffset;
    $this.k54_1 = columnOffset;
    return $this;
  }
}
class Companion_1 {
  constructor() {
    Companion_instance_1 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('com.bedalton.common.lsp.cursor.Distanced', null, 2);
    tmp0_serialDesc.w13('item', false);
    tmp0_serialDesc.w13('distance', false);
    this.m54_1 = tmp0_serialDesc;
  }
  s4u(typeSerial0) {
    return $serializer_0.p54(typeSerial0);
  }
  y14(typeParamsSerializers) {
    return this.s4u(typeParamsSerializers[0]);
  }
}
class $serializer_0 {
  static q54() {
    var $this = createThis(this);
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('com.bedalton.common.lsp.cursor.Distanced', $this, 2);
    tmp0_serialDesc.w13('item', false);
    tmp0_serialDesc.w13('distance', false);
    $this.n54_1 = tmp0_serialDesc;
    return $this;
  }
  r54(encoder, value) {
    var tmp0_desc = this.n54_1;
    var tmp1_output = encoder.bw(tmp0_desc);
    tmp1_output.tx(tmp0_desc, 0, this.o54_1, value.s54_1);
    tmp1_output.tx(tmp0_desc, 1, $serializer_getInstance(), value.t54_1);
    tmp1_output.cw(tmp0_desc);
  }
  mr(encoder, value) {
    return this.r54(encoder, value instanceof Distanced ? value : THROW_CCE());
  }
  nr(decoder) {
    var tmp0_desc = this.n54_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_input = decoder.bw(tmp0_desc);
    if (tmp6_input.sw()) {
      tmp4_local0 = tmp6_input.nw(tmp0_desc, 0, this.o54_1, tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp6_input.nw(tmp0_desc, 1, $serializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp6_input.tw(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp6_input.nw(tmp0_desc, 0, this.o54_1, tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp6_input.nw(tmp0_desc, 1, $serializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          default:
            throw UnknownFieldException.et(tmp2_index);
        }
      }
    tmp6_input.cw(tmp0_desc);
    return Distanced.u54(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  }
  lr() {
    return this.n54_1;
  }
  l14() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [this.o54_1, $serializer_getInstance()];
  }
  m14() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [this.o54_1];
  }
  static p54(typeSerial0) {
    var $this = this.q54();
    $this.o54_1 = typeSerial0;
    return $this;
  }
}
class Distanced {
  constructor(item, distance) {
    Companion_getInstance_1();
    this.s54_1 = item;
    this.t54_1 = distance;
  }
  toString() {
    return 'Distanced(item=' + toString(this.s54_1) + ', distance=' + this.t54_1.toString() + ')';
  }
  hashCode() {
    var result = hashCode(this.s54_1);
    result = imul(result, 31) + this.t54_1.hashCode() | 0;
    return result;
  }
  equals(other) {
    if (this === other)
      return true;
    if (!(other instanceof Distanced))
      return false;
    if (!equals(this.s54_1, other.s54_1))
      return false;
    if (!this.t54_1.equals(other.t54_1))
      return false;
    return true;
  }
  static u54(seen0, item, distance, serializationConstructorMarker) {
    Companion_getInstance_1();
    if (!(3 === (3 & seen0))) {
      throwMissingFieldException(seen0, 3, Companion_getInstance_1().m54_1);
    }
    var $this = createThis(this);
    $this.s54_1 = item;
    $this.t54_1 = distance;
    return $this;
  }
}
//endregion
function _get_$cachedSerializer__te6jhj($this) {
  return $this.d54_1.k3();
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
  var tmp = lineNumber - range.h1().e1e() | 0;
  var tmp_0;
  if (lineNumber === range.h1().e1e()) {
    tmp_0 = column - range.h1().i1e() | 0;
  } else {
    tmp_0 = range.h1().i1e();
  }
  return new Distance(tmp, tmp_0);
}
function getAbsoluteDistanceFromNearestEdge(range, lineNumber, column) {
  return getDistance(range, lineNumber, column, true);
}
function getDistance(range, lineNumber, column, absolute) {
  if (lineNumber === range.h1().e1e()) {
    if (column >= range.h1().i1e()) {
      if (lineNumber < range.f1e().e1e()) {
        return new Distance(0, 0);
      } else if (column <= range.f1e().i1e()) {
        return new Distance(0, 0);
      }
    }
  }
  var tmp;
  if (lineNumber === range.f1e().e1e()) {
    var tmp_0;
    if (column <= range.f1e().i1e()) {
      return new Distance(0, 0);
    } else {
      tmp_0 = range.f1e();
    }
    tmp = tmp_0;
  } else {
    tmp = range.h1();
  }
  var point = tmp;
  var tmp_1;
  if (lineNumber === point.e1e()) {
    tmp_1 = column - point.i1e() | 0;
  } else {
    tmp_1 = point.i1e();
  }
  var characterDistance = tmp_1;
  if (absolute && characterDistance < 0) {
    characterDistance = imul(characterDistance, -1);
  }
  return new Distance(lineNumber - point.e1e() | 0, characterDistance);
}
function getRelativeCursorPosition(parseTreeItem, line, character) {
  var range = parseTreeItem.d1e();
  var start = range.h1();
  var end = range.f1e();
  if (line === start.e1e()) {
    if (end.e1e() === start.e1e()) {
      var tmp;
      if (character === start.i1e()) {
        tmp = CursorPosition_START_getInstance();
      } else {
        if (character === end.i1e()) {
          tmp = CursorPosition_END_getInstance();
        } else {
          if (character < start.i1e()) {
            tmp = CursorPosition_BEFORE_getInstance();
          } else {
            if (character > end.i1e()) {
              tmp = CursorPosition_AFTER_getInstance();
            } else {
              var containsLower = start.i1e();
              if (character <= end.i1e() ? containsLower <= character : false) {
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
      return character === start.i1e() ? CursorPosition_START_getInstance() : character < start.i1e() ? CursorPosition_BEFORE_getInstance() : CursorPosition_INSIDE_getInstance();
    }
  } else if (line === end.e1e()) {
    return character === end.i1e() ? CursorPosition_END_getInstance() : character > end.i1e() ? CursorPosition_AFTER_getInstance() : CursorPosition_INSIDE_getInstance();
  } else if (line < start.e1e()) {
    return CursorPosition_BEFORE_getInstance();
  } else if (line > end.e1e()) {
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
protoOf($serializer).m14 = typeParametersSerializers;
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
