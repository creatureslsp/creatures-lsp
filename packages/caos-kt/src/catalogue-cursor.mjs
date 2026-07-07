import {
  Companion_getInstance3ke535klgonhf as Companion_getInstance,
  get_catalogueJson3mvdgectzlrxg as get_catalogueJson,
  parseCatalogue312p0ytu09usl as parseCatalogue,
  CatalogueParseResult1yfws1keg5isn as CatalogueParseResult,
  CatalogueParserItem3vj926q0zs8te as CatalogueParserItem,
  CatalogueRawItemWalkerzhz206ejuld6 as CatalogueRawItemWalker,
} from './catalogue-core.mjs';
import {
  Companion_getInstance2gte478q2girr as Companion_getInstance_0,
  getRelativeCursorPosition38kiizh2sz33b as getRelativeCursorPosition,
  CursorPosition_AFTER_getInstance28lxpmihixed4 as CursorPosition_AFTER_getInstance,
  getAbsoluteDistanceFromNearestEdge2v1sjlath5vfs as getAbsoluteDistanceFromNearestEdge,
} from './common-lsp-cursor.mjs';
import {
  LazyThreadSafetyMode_PUBLICATION_getInstance3qslfm3vqg6y3 as LazyThreadSafetyMode_PUBLICATION_getInstance,
  lazy1261dae0bgscp as lazy,
  initMetadataForCompanion1wyw17z38v6ac as initMetadataForCompanion,
  VOID3gxj6tk5isa35 as VOID,
  Unit_instancev9v8hjid95df as Unit_instance,
  THROW_CCE2g6jy02ryeudk as THROW_CCE,
  protoOf180f3jzyo7rfj as protoOf,
  initMetadataForObject1cxne3s9w65el as initMetadataForObject,
  toString1pkumu07cwy4m as toString,
  hashCodeq5arwsb9dgti as hashCode,
  equals2au1ep9vhcato as equals,
  createThis2j2avj17cvnv2 as createThis,
  initMetadataForClassbxx6q50dy2s7 as initMetadataForClass,
  ArrayList3it5z8td81qkl as ArrayList,
  singleOrNullrknfaxokm1sl as singleOrNull,
  compareTo3ankvs086tmwq as compareTo,
  getKClass3t8tygqu4lcxf as getKClass,
  arrayOf1akklvh2at202 as arrayOf,
  createKType31ecntyyaay3k as createKType,
  isInterface3d6p8outrmvmk as isInterface,
  PrimitiveClasses_getInstanceds06xwqrwfdm as PrimitiveClasses_getInstance,
  createInvariantKTypeProjection3h5364czc0a8w as createInvariantKTypeProjection,
  substringiqarkczpya5m as substring,
} from './kotlin-kotlin-stdlib.mjs';
import {
  PluginGeneratedSerialDescriptorqdzeg5asqhfg as PluginGeneratedSerialDescriptor,
  UnknownFieldExceptiona60e3a6v1xqo as UnknownFieldException,
  StringSerializer_getInstance11v9md0a7d9yk as StringSerializer_getInstance,
  typeParametersSerializers2likxjr48tr7y as typeParametersSerializers,
  GeneratedSerializer1f7t7hssdd2ws as GeneratedSerializer,
  throwMissingFieldException2cmke0v3ynf14 as throwMissingFieldException,
  SerializableWithd2dap36updxd as SerializableWith,
  serializer1i4e9ym37oxmo as serializer,
  KSerializerzf77vz1967fq as KSerializer,
} from './kotlinx-serialization-kotlinx-serialization-core.mjs';
import { nullIfEmptyrckcy231jwd8 as nullIfEmpty } from './bedalton-common-core.mjs';
import { inRange3fhiozomdlnya as inRange } from './common-ast-structs.mjs';
import {
  encodeToDynamicsae9c2u7066d as encodeToDynamic,
  decodeFromDynamic3axi482yesc93 as decodeFromDynamic,
} from './kotlinx-serialization-kotlinx-serialization-json.mjs';
import { Log_getInstance1ciirpgt53ci1 as Log_getInstance } from './bedalton-common-log.mjs';
//region block: imports
var imul = Math.imul;
//endregion
//region block: pre-declaration
class Companion {
  constructor() {
    Companion_instance = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    var tmp_1 = lazy(tmp_0, CatalogueCursorData$Companion$$childSerializers$_anonymous__dulzi7);
    var tmp_2 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.h67_1 = [tmp_1, lazy(tmp_2, CatalogueCursorData$Companion$$childSerializers$_anonymous__dulzi7_0), null];
  }
}
class $serializer {
  constructor() {
    $serializer_instance = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('com.bedalton.creatures.catalogue.cursor.CatalogueCursorData', this, 3);
    tmp0_serialDesc.w13('item', false);
    tmp0_serialDesc.w13('position', false);
    tmp0_serialDesc.w13('positionString', true);
    this.i67_1 = tmp0_serialDesc;
  }
  j67(encoder, value) {
    var tmp0_desc = this.i67_1;
    var tmp1_output = encoder.bw(tmp0_desc);
    var tmp2_cached = Companion_getInstance_1().h67_1;
    tmp1_output.tx(tmp0_desc, 0, tmp2_cached[0].k3(), value.k67_1);
    tmp1_output.tx(tmp0_desc, 1, tmp2_cached[1].k3(), value.l67_1);
    var tmp;
    if (tmp1_output.zx(tmp0_desc, 2)) {
      tmp = true;
    } else {
      // Inline function 'kotlin.text.uppercase' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp$ret$0 = value.l67_1.c1_1.toUpperCase();
      tmp = !(value.m67_1 === tmp$ret$0);
    }
    if (tmp) {
      tmp1_output.rx(tmp0_desc, 2, value.m67_1);
    }
    tmp1_output.cw(tmp0_desc);
  }
  mr(encoder, value) {
    return this.j67(encoder, value instanceof CatalogueCursorData ? value : THROW_CCE());
  }
  nr(decoder) {
    var tmp0_desc = this.i67_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_input = decoder.bw(tmp0_desc);
    var tmp8_cached = Companion_getInstance_1().h67_1;
    if (tmp7_input.sw()) {
      tmp4_local0 = tmp7_input.nw(tmp0_desc, 0, tmp8_cached[0].k3(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp7_input.nw(tmp0_desc, 1, tmp8_cached[1].k3(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp7_input.lw(tmp0_desc, 2);
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
            tmp6_local2 = tmp7_input.lw(tmp0_desc, 2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          default:
            throw UnknownFieldException.et(tmp2_index);
        }
      }
    tmp7_input.cw(tmp0_desc);
    return CatalogueCursorData.n67(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, null);
  }
  lr() {
    return this.i67_1;
  }
  l14() {
    var tmp0_cached = Companion_getInstance_1().h67_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [tmp0_cached[0].k3(), tmp0_cached[1].k3(), StringSerializer_getInstance()];
  }
}
class CatalogueCursorData {
  constructor(item, position) {
    Companion_getInstance_1();
    this.k67_1 = item;
    this.l67_1 = position;
    var tmp = this;
    // Inline function 'kotlin.text.uppercase' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.m67_1 = this.l67_1.c1_1.toUpperCase();
  }
  toString() {
    return 'CatalogueCursorData(item=' + toString(this.k67_1) + ', position=' + this.l67_1.toString() + ')';
  }
  hashCode() {
    var result = hashCode(this.k67_1);
    result = imul(result, 31) + this.l67_1.hashCode() | 0;
    return result;
  }
  equals(other) {
    if (this === other)
      return true;
    if (!(other instanceof CatalogueCursorData))
      return false;
    if (!equals(this.k67_1, other.k67_1))
      return false;
    if (!this.l67_1.equals(other.l67_1))
      return false;
    return true;
  }
  static n67(seen0, item, position, positionString, serializationConstructorMarker) {
    Companion_getInstance_1();
    if (!(3 === (3 & seen0))) {
      throwMissingFieldException(seen0, 3, $serializer_getInstance().i67_1);
    }
    var $this = createThis(this);
    $this.k67_1 = item;
    $this.l67_1 = position;
    if (0 === (seen0 & 4)) {
      var tmp = $this;
      // Inline function 'kotlin.text.uppercase' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp.m67_1 = $this.l67_1.c1_1.toUpperCase();
    } else
      $this.m67_1 = positionString;
    return $this;
  }
}
//endregion
function CatalogueCursorData$Companion$$childSerializers$_anonymous__dulzi7() {
  return Companion_getInstance().k1e();
}
function CatalogueCursorData$Companion$$childSerializers$_anonymous__dulzi7_0() {
  return Companion_getInstance_0().k1e();
}
var Companion_instance;
function Companion_getInstance_1() {
  if (Companion_instance === VOID)
    new Companion();
  return Companion_instance;
}
var $serializer_instance;
function $serializer_getInstance() {
  if ($serializer_instance === VOID)
    new $serializer();
  return $serializer_instance;
}
function getCatalogueCursorPosition(parseResult, lineNumber, column, includeAfter) {
  var tmp0_elvis_lhs = nullIfEmpty(parseResult.parserItems);
  var tmp;
  if (tmp0_elvis_lhs == null) {
    return null;
  } else {
    tmp = tmp0_elvis_lhs;
  }
  var items = tmp;
  // Inline function 'kotlin.collections.filter' call
  // Inline function 'kotlin.collections.filterTo' call
  var destination = ArrayList.u1();
  var inductionVariable = 0;
  var last = items.length;
  while (inductionVariable < last) {
    var element = items[inductionVariable];
    inductionVariable = inductionVariable + 1 | 0;
    if (inRange(element.d1e(), lineNumber, column, VOID, true) || inRange(element.d1e(), lineNumber, column - 1 | 0, VOID, true)) {
      destination.z1(element);
    }
  }
  var nearby = destination;
  if (!includeAfter) {
    // Inline function 'kotlin.collections.filter' call
    var tmp0 = nearby;
    // Inline function 'kotlin.collections.filterTo' call
    var destination_0 = ArrayList.u1();
    var _iterator__ex2g4s = tmp0.w();
    while (_iterator__ex2g4s.x()) {
      var element_0 = _iterator__ex2g4s.y();
      if (!getRelativeCursorPosition(element_0, lineNumber, column).equals(CursorPosition_AFTER_getInstance())) {
        destination_0.z1(element_0);
      }
    }
    nearby = destination_0;
  }
  if (nearby.u()) {
    return null;
  }
  var tmp1_elvis_lhs = singleOrNull(nearby);
  var tmp_0;
  if (tmp1_elvis_lhs == null) {
    var tmp0_0 = nearby;
    var tmp$ret$6;
    $l$block_0: {
      // Inline function 'kotlin.collections.minByOrNull' call
      var iterator = tmp0_0.w();
      if (!iterator.x()) {
        tmp$ret$6 = null;
        break $l$block_0;
      }
      var minElem = iterator.y();
      if (!iterator.x()) {
        tmp$ret$6 = minElem;
        break $l$block_0;
      }
      var it = minElem;
      var minValue = getDistanceAbsoluteAsInt(it.d1e(), lineNumber, column);
      do {
        var e = iterator.y();
        var v = getDistanceAbsoluteAsInt(e.d1e(), lineNumber, column);
        if (compareTo(minValue, v) > 0) {
          minElem = e;
          minValue = v;
        }
      }
       while (iterator.x());
      tmp$ret$6 = minElem;
    }
    tmp_0 = tmp$ret$6;
  } else {
    tmp_0 = tmp1_elvis_lhs;
  }
  var tmp2_elvis_lhs = tmp_0;
  var tmp_1;
  if (tmp2_elvis_lhs == null) {
    return null;
  } else {
    tmp_1 = tmp2_elvis_lhs;
  }
  var closest = tmp_1;
  var position = getRelativeCursorPosition(closest, lineNumber, column);
  return new CatalogueCursorData(closest, position);
}
function getDistanceAbsoluteAsInt(range, lineNumber, column) {
  var distance = getAbsoluteDistanceFromNearestEdge(range, lineNumber, column);
  return distance.t53_1 << 16 | distance.u53_1;
}
function getCatalogueCursor(text, line, character, includeAfter) {
  includeAfter = includeAfter === VOID ? false : includeAfter;
  var tmp0_elvis_lhs = fromDynamic(text);
  var tmp;
  if (tmp0_elvis_lhs == null) {
    return null;
  } else {
    tmp = tmp0_elvis_lhs;
  }
  var parseResult = tmp;
  var data = getCatalogueCursorPosition(parseResult, line, character, true);
  // Inline function 'kotlinx.serialization.json.encodeToDynamic' call
  var this_0 = get_catalogueJson();
  // Inline function 'kotlinx.serialization.serializer' call
  var this_1 = this_0.rw();
  // Inline function 'kotlinx.serialization.internal.cast' call
  var this_2 = serializer(this_1, createKType(getKClass(CatalogueCursorData), arrayOf([]), true));
  var tmp$ret$1 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
  return encodeToDynamic(this_0, tmp$ret$1, data);
}
function fromDynamic(dynamic) {
  if (dynamic == null) {
    return null;
  }
  if (!(dynamic == null) ? typeof dynamic === 'string' : false) {
    return parseCatalogue((!(dynamic == null) ? typeof dynamic === 'string' : false) ? dynamic : THROW_CCE());
  }
  if (dynamic instanceof CatalogueParseResult) {
    return dynamic instanceof CatalogueParseResult ? dynamic : THROW_CCE();
  }
  if (dynamic.catalogueEntries != null) {
    // Inline function 'kotlinx.serialization.json.decodeFromDynamic' call
    var this_0 = get_catalogueJson();
    // Inline function 'kotlinx.serialization.serializer' call
    var this_1 = this_0.rw();
    // Inline function 'kotlinx.serialization.internal.cast' call
    var this_2 = serializer(this_1, createKType(getKClass(CatalogueParseResult), arrayOf([]), false));
    var tmp$ret$1 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
    return decodeFromDynamic(this_0, tmp$ret$1, dynamic);
  }
  if (Array.isArray(dynamic)) {
    // Inline function 'kotlinx.serialization.json.decodeFromDynamic' call
    var this_3 = get_catalogueJson();
    // Inline function 'kotlinx.serialization.serializer' call
    var this_4 = this_3.rw();
    // Inline function 'kotlinx.serialization.internal.cast' call
    var this_5 = serializer(this_4, createKType(PrimitiveClasses_getInstance().ie(), arrayOf([createInvariantKTypeProjection(createKType(getKClass(CatalogueParserItem), arrayOf([]), false))]), false));
    var tmp$ret$4 = isInterface(this_5, KSerializer) ? this_5 : THROW_CCE();
    var items = decodeFromDynamic(this_3, tmp$ret$4, dynamic);
    return (new CatalogueRawItemWalker(items)).b67();
  }
  var jsonString = JSON.stringify(dynamic);
  if (jsonString.length > 1200) {
    jsonString = substring(jsonString, 0, 1200);
  }
  Log_getInstance().r1i('Argument is not a catalogue parse result; JSON(slice): ' + jsonString);
  return null;
}
//region block: post-declaration
initMetadataForCompanion(Companion);
protoOf($serializer).m14 = typeParametersSerializers;
initMetadataForObject($serializer, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(CatalogueCursorData, 'CatalogueCursorData', VOID, VOID, VOID, VOID, VOID, {0: $serializer_getInstance});
//endregion
//region block: exports
export {
  getCatalogueCursor as getCatalogueCursor,
};
//endregion

//# sourceMappingURL=catalogue-cursor.mjs.map
