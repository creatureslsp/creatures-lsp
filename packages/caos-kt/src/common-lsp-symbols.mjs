import {
  getKClass3t8tygqu4lcxf as getKClass,
  LazyThreadSafetyMode_PUBLICATION_getInstance3qslfm3vqg6y3 as LazyThreadSafetyMode_PUBLICATION_getInstance,
  lazy1261dae0bgscp as lazy,
  initMetadataForCompanion1wyw17z38v6ac as initMetadataForCompanion,
  VOID3gxj6tk5isa35 as VOID,
  Unit_instancev9v8hjid95df as Unit_instance,
  equals2au1ep9vhcato as equals,
  THROW_CCE2g6jy02ryeudk as THROW_CCE,
  protoOf180f3jzyo7rfj as protoOf,
  initMetadataForObject1cxne3s9w65el as initMetadataForObject,
  contentEqualsaf55p28mnw74 as contentEquals,
  contentEquals2jbsaphs7gxql as contentEquals_0,
  getStringHashCode26igk1bx568vk as getStringHashCode,
  hashCodeq5arwsb9dgti as hashCode,
  contentHashCode2i020q5tbeh2s as contentHashCode,
  contentHashCode33l4yznfe2pz3 as contentHashCode_0,
  toString1pkumu07cwy4m as toString,
  createThis2j2avj17cvnv2 as createThis,
  initMetadataForClassbxx6q50dy2s7 as initMetadataForClass,
  KProperty1ca4yb4wlo496 as KProperty1,
  getPropertyCallableRef3hckxc0xueiaj as getPropertyCallableRef,
  emptyList1g2z5xcrvp2zy as emptyList,
  PrimitiveClasses_getInstanceds06xwqrwfdm as PrimitiveClasses_getInstance,
  arrayOf1akklvh2at202 as arrayOf,
  createKType31ecntyyaay3k as createKType,
  isInterface3d6p8outrmvmk as isInterface,
  createInvariantKTypeProjection3h5364czc0a8w as createInvariantKTypeProjection,
  lazy2hsh8ze7j6ikd as lazy_0,
  ensureNotNull1e947j3ixpazm as ensureNotNull,
  StringCompanionObject_instance1v0ht40fz3tq0 as StringCompanionObject_instance,
  initMetadataForInterface1egvbzx539z91 as initMetadataForInterface,
} from './kotlin-kotlin-stdlib.mjs';
import {
  ReferenceArraySerializer3juj1vqolxkrs as ReferenceArraySerializer,
  PluginGeneratedSerialDescriptorqdzeg5asqhfg as PluginGeneratedSerialDescriptor,
  StringSerializer_getInstance11v9md0a7d9yk as StringSerializer_getInstance,
  IntArraySerializer_getInstance1rr9hqd2i2l73 as IntArraySerializer_getInstance,
  UnknownFieldExceptiona60e3a6v1xqo as UnknownFieldException,
  IntSerializer_getInstanceuhm8c1wku08l as IntSerializer_getInstance,
  get_nullable197rfua9r7fsz as get_nullable,
  typeParametersSerializers2likxjr48tr7y as typeParametersSerializers,
  GeneratedSerializer1f7t7hssdd2ws as GeneratedSerializer,
  throwMissingFieldException2cmke0v3ynf14 as throwMissingFieldException,
  SerializableWithd2dap36updxd as SerializableWith,
  ArraySerializermpxy3fgi5xnb as ArraySerializer,
  IntArraySerializer1m3fo301mmjdr as IntArraySerializer,
  buildClassSerialDescriptors2a6xdp6mrtw as buildClassSerialDescriptor,
  serializer1hwzc6m64v1op as serializer,
  KSerializerzf77vz1967fq as KSerializer,
  serializer1x79l67jvwntn as serializer_0,
} from './kotlinx-serialization-kotlinx-serialization-core.mjs';
import { RangeSerializer_getInstancesbqzmtha7l6u as RangeSerializer_getInstance } from './common-ast-structs.mjs';
import { decodeNullableStringElement3f6s2kwh7ol5y as decodeNullableStringElement } from './bedalton-common-serialization.mjs';
//region block: imports
var imul = Math.imul;
//endregion
//region block: pre-declaration
class Companion {
  constructor() {
    Companion_instance = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.y5e_1 = [null, null, null, null, lazy(tmp_0, DocumentSymbolImpl$Companion$$childSerializers$_anonymous__ebl0p), null, null];
  }
}
class $serializer {
  constructor() {
    $serializer_instance = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('com.bedalton.common.lsp.symbols.DocumentSymbolImpl', this, 7);
    tmp0_serialDesc.z13('name', false);
    tmp0_serialDesc.z13('kind', false);
    tmp0_serialDesc.z13('range', false);
    tmp0_serialDesc.z13('selectionRange', false);
    tmp0_serialDesc.z13('children', false);
    tmp0_serialDesc.z13('detail', true);
    tmp0_serialDesc.z13('tags', true);
    this.z5e_1 = tmp0_serialDesc;
  }
  a5f(encoder, value) {
    var tmp0_desc = this.z5e_1;
    var tmp1_output = encoder.ew(tmp0_desc);
    var tmp2_cached = Companion_getInstance().y5e_1;
    tmp1_output.ux(tmp0_desc, 0, value.b5f_1);
    tmp1_output.px(tmp0_desc, 1, value.c5f_1);
    tmp1_output.wx(tmp0_desc, 2, RangeSerializer_getInstance(), value.d5f_1);
    tmp1_output.wx(tmp0_desc, 3, RangeSerializer_getInstance(), value.e5f_1);
    tmp1_output.wx(tmp0_desc, 4, tmp2_cached[4].r3(), value.f5f_1);
    if (tmp1_output.cy(tmp0_desc, 5) ? true : !(value.g5f_1 == null)) {
      tmp1_output.yx(tmp0_desc, 5, StringSerializer_getInstance(), value.g5f_1);
    }
    var tmp;
    if (tmp1_output.cy(tmp0_desc, 6)) {
      tmp = true;
    } else {
      // Inline function 'kotlin.intArrayOf' call
      var tmp$ret$0 = new Int32Array([]);
      tmp = !equals(value.h5f_1, tmp$ret$0);
    }
    if (tmp) {
      tmp1_output.wx(tmp0_desc, 6, IntArraySerializer_getInstance(), value.h5f_1);
    }
    tmp1_output.fw(tmp0_desc);
  }
  pr(encoder, value) {
    return this.a5f(encoder, value instanceof DocumentSymbolImpl ? value : THROW_CCE());
  }
  qr(decoder) {
    var tmp0_desc = this.z5e_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = 0;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_local4 = null;
    var tmp9_local5 = null;
    var tmp10_local6 = null;
    var tmp11_input = decoder.ew(tmp0_desc);
    var tmp12_cached = Companion_getInstance().y5e_1;
    if (tmp11_input.vw()) {
      tmp4_local0 = tmp11_input.ow(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp11_input.jw(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp11_input.qw(tmp0_desc, 2, RangeSerializer_getInstance(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp11_input.qw(tmp0_desc, 3, RangeSerializer_getInstance(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp11_input.qw(tmp0_desc, 4, tmp12_cached[4].r3(), tmp8_local4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp9_local5 = tmp11_input.sw(tmp0_desc, 5, StringSerializer_getInstance(), tmp9_local5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
      tmp10_local6 = tmp11_input.qw(tmp0_desc, 6, IntArraySerializer_getInstance(), tmp10_local6);
      tmp3_bitMask0 = tmp3_bitMask0 | 64;
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
            tmp5_local1 = tmp11_input.jw(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp11_input.qw(tmp0_desc, 2, RangeSerializer_getInstance(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp11_input.qw(tmp0_desc, 3, RangeSerializer_getInstance(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp11_input.qw(tmp0_desc, 4, tmp12_cached[4].r3(), tmp8_local4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp9_local5 = tmp11_input.sw(tmp0_desc, 5, StringSerializer_getInstance(), tmp9_local5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          case 6:
            tmp10_local6 = tmp11_input.qw(tmp0_desc, 6, IntArraySerializer_getInstance(), tmp10_local6);
            tmp3_bitMask0 = tmp3_bitMask0 | 64;
            break;
          default:
            throw UnknownFieldException.ht(tmp2_index);
        }
      }
    tmp11_input.fw(tmp0_desc);
    return DocumentSymbolImpl.i5f(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, tmp10_local6, null);
  }
  or() {
    return this.z5e_1;
  }
  o14() {
    var tmp0_cached = Companion_getInstance().y5e_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), IntSerializer_getInstance(), RangeSerializer_getInstance(), RangeSerializer_getInstance(), tmp0_cached[4].r3(), get_nullable(StringSerializer_getInstance()), IntArraySerializer_getInstance()];
  }
}
class DocumentSymbol {}
class DocumentSymbolImpl {
  constructor(name, kind, range, selectionRange, children, detail, tags) {
    Companion_getInstance();
    detail = detail === VOID ? null : detail;
    var tmp;
    if (tags === VOID) {
      // Inline function 'kotlin.intArrayOf' call
      tmp = new Int32Array([]);
    } else {
      tmp = tags;
    }
    tags = tmp;
    this.b5f_1 = name;
    this.c5f_1 = kind;
    this.d5f_1 = range;
    this.e5f_1 = selectionRange;
    this.f5f_1 = children;
    this.g5f_1 = detail;
    this.h5f_1 = tags;
  }
  v() {
    return this.b5f_1;
  }
  lu() {
    return this.c5f_1;
  }
  gg() {
    return this.d5f_1;
  }
  j5f() {
    return this.e5f_1;
  }
  k5f() {
    return this.f5f_1;
  }
  l5f() {
    return this.g5f_1;
  }
  m5f() {
    return this.h5f_1;
  }
  equals(other) {
    if (this === other)
      return true;
    if (!(other instanceof DocumentSymbolImpl))
      return false;
    if (!(this.b5f_1 === other.b5f_1))
      return false;
    if (!(this.c5f_1 === other.c5f_1))
      return false;
    if (!equals(this.d5f_1, other.d5f_1))
      return false;
    if (!equals(this.e5f_1, other.e5f_1))
      return false;
    if (!contentEquals(this.f5f_1, other.f5f_1))
      return false;
    if (!(this.g5f_1 == other.g5f_1))
      return false;
    if (!contentEquals_0(this.h5f_1, other.h5f_1))
      return false;
    return true;
  }
  hashCode() {
    var result = getStringHashCode(this.b5f_1);
    result = imul(31, result) + this.c5f_1 | 0;
    result = imul(31, result) + hashCode(this.d5f_1) | 0;
    result = imul(31, result) + hashCode(this.e5f_1) | 0;
    result = imul(31, result) + contentHashCode(this.f5f_1) | 0;
    var tmp = imul(31, result);
    var tmp0_safe_receiver = this.g5f_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : getStringHashCode(tmp0_safe_receiver);
    result = tmp + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
    result = imul(31, result) + contentHashCode_0(this.h5f_1) | 0;
    return result;
  }
  toString() {
    return 'DocumentSymbolImpl(name=' + this.b5f_1 + ', kind=' + this.c5f_1 + ', range=' + toString(this.d5f_1) + ', selectionRange=' + toString(this.e5f_1) + ', children=' + toString(this.f5f_1) + ', detail=' + this.g5f_1 + ', tags=' + toString(this.h5f_1) + ')';
  }
  static i5f(seen0, name, kind, range, selectionRange, children, detail, tags, serializationConstructorMarker) {
    Companion_getInstance();
    if (!(31 === (31 & seen0))) {
      throwMissingFieldException(seen0, 31, $serializer_getInstance().z5e_1);
    }
    var $this = createThis(this);
    $this.b5f_1 = name;
    $this.c5f_1 = kind;
    $this.d5f_1 = range;
    $this.e5f_1 = selectionRange;
    $this.f5f_1 = children;
    if (0 === (seen0 & 32))
      $this.g5f_1 = null;
    else
      $this.g5f_1 = detail;
    if (0 === (seen0 & 64)) {
      var tmp = $this;
      // Inline function 'kotlin.intArrayOf' call
      tmp.h5f_1 = new Int32Array([]);
    } else
      $this.h5f_1 = tags;
    return $this;
  }
}
class DocumentSymbolSerializer {
  constructor() {
    DocumentSymbolSerializer_instance = this;
    var tmp = this;
    tmp.n5f_1 = lazy_0(DocumentSymbolSerializer$childrenSerializer$delegate$lambda);
    var tmp_0 = this;
    tmp_0.o5f_1 = lazy_0(DocumentSymbolSerializer$intArraySerializer$delegate$lambda);
    var tmp_1 = this;
    tmp_1.p5f_1 = lazy_0(DocumentSymbolSerializer$descriptor$delegate$lambda);
  }
  or() {
    var tmp0 = this.p5f_1;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('descriptor', 1, tmp, DocumentSymbolSerializer$_get_descriptor_$ref_817kp6(), null);
    return tmp0.r3();
  }
  qr(decoder) {
    var structure = decoder.ew(this.or());
    var index = structure.ww(this.or());
    var name = null;
    var detail = null;
    var kind = null;
    var tags = null;
    var range = null;
    var selectionRange = null;
    var children = null;
    while (!(index === -1)) {
      switch (index) {
        case 0:
          name = structure.ow(this.or(), index);
          break;
        case 1:
          detail = decodeNullableStringElement(structure, this.or(), index);
          break;
        case 2:
          kind = structure.jw(this.or(), index);
          break;
        case 3:
          tags = structure.rw(this.or(), index, _get_intArraySerializer__ivdakx(this));
          break;
        case 4:
          range = structure.rw(this.or(), index, RangeSerializer_getInstance());
          break;
        case 5:
          selectionRange = structure.tw(this.or(), index, RangeSerializer_getInstance());
          break;
        case 6:
          children = structure.tw(this.or(), index, _get_childrenSerializer__f1any2(this));
          break;
      }
      index = structure.ww(this.or());
    }
    structure.fw(this.or());
    var tmp3_name = ensureNotNull(name);
    var tmp4_detail = detail;
    var tmp5_kind = ensureNotNull(kind);
    var tmp1_elvis_lhs = tags;
    var tmp;
    if (tmp1_elvis_lhs == null) {
      // Inline function 'kotlin.intArrayOf' call
      tmp = new Int32Array([]);
    } else {
      tmp = tmp1_elvis_lhs;
    }
    var tmp6_tags = tmp;
    var tmp7_range = ensureNotNull(range);
    var tmp8_selectionRange = ensureNotNull(selectionRange);
    var tmp2_elvis_lhs = children;
    var tmp_0;
    if (tmp2_elvis_lhs == null) {
      // Inline function 'kotlin.emptyArray' call
      tmp_0 = [];
    } else {
      tmp_0 = tmp2_elvis_lhs;
    }
    var tmp9_children = tmp_0;
    var tmp_1 = new DocumentSymbolImpl(tmp3_name, tmp5_kind, tmp7_range, tmp8_selectionRange, tmp9_children, tmp4_detail, tmp6_tags);
    return isInterface(tmp_1, DocumentSymbol) ? tmp_1 : THROW_CCE();
  }
  q5f(encoder, value) {
    var structure = encoder.ew(this.or());
    structure.ux(this.or(), 0, value.v());
    structure.yx(this.or(), 1, get_nullable(serializer_0(StringCompanionObject_instance)), value.l5f());
    structure.px(this.or(), 2, value.lu());
    structure.wx(this.or(), 3, _get_intArraySerializer__ivdakx(this), value.m5f());
    structure.wx(this.or(), 4, RangeSerializer_getInstance(), value.gg());
    structure.yx(this.or(), 5, RangeSerializer_getInstance(), value.j5f());
    structure.yx(this.or(), 5, _get_childrenSerializer__f1any2(this), value.k5f());
    structure.fw(this.or());
  }
  pr(encoder, value) {
    return this.q5f(encoder, (!(value == null) ? isInterface(value, DocumentSymbol) : false) ? value : THROW_CCE());
  }
}
//endregion
function DocumentSymbolImpl$Companion$$childSerializers$_anonymous__ebl0p() {
  return new ReferenceArraySerializer(getKClass(DocumentSymbol), DocumentSymbolSerializer_getInstance());
}
var Companion_instance;
function Companion_getInstance() {
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
function _get_childrenSerializer__f1any2($this) {
  var tmp0 = $this.n5f_1;
  var tmp = KProperty1;
  // Inline function 'kotlin.getValue' call
  getPropertyCallableRef('childrenSerializer', 1, tmp, DocumentSymbolSerializer$_get_childrenSerializer_$ref_xvhaa0(), null);
  return tmp0.r3();
}
function _get_intArraySerializer__ivdakx($this) {
  var tmp0 = $this.o5f_1;
  var tmp = KProperty1;
  // Inline function 'kotlin.getValue' call
  getPropertyCallableRef('intArraySerializer', 1, tmp, DocumentSymbolSerializer$_get_intArraySerializer_$ref_mk2283(), null);
  return tmp0.r3();
}
function DocumentSymbolSerializer$childrenSerializer$delegate$lambda() {
  return ArraySerializer(getKClass(DocumentSymbol), DocumentSymbolSerializer_getInstance());
}
function DocumentSymbolSerializer$_get_childrenSerializer_$ref_xvhaa0() {
  return (p0) => _get_childrenSerializer__f1any2(p0);
}
function DocumentSymbolSerializer$intArraySerializer$delegate$lambda() {
  return IntArraySerializer();
}
function DocumentSymbolSerializer$_get_intArraySerializer_$ref_mk2283() {
  return (p0) => _get_intArraySerializer__ivdakx(p0);
}
function DocumentSymbolSerializer$descriptor$delegate$lambda() {
  return buildClassSerialDescriptor('DocumentSymbol', [], DocumentSymbolSerializer$descriptor$delegate$lambda$lambda);
}
function DocumentSymbolSerializer$descriptor$delegate$lambda$lambda($this$buildClassSerialDescriptor) {
  // Inline function 'kotlinx.serialization.descriptors.element' call
  var annotations = emptyList();
  // Inline function 'kotlinx.serialization.serializer' call
  // Inline function 'kotlinx.serialization.internal.cast' call
  var this_0 = serializer(createKType(PrimitiveClasses_getInstance().me(), arrayOf([]), false));
  var descriptor = (isInterface(this_0, KSerializer) ? this_0 : THROW_CCE()).or();
  $this$buildClassSerialDescriptor.av('name', descriptor, annotations, false);
  // Inline function 'kotlinx.serialization.descriptors.element' call
  var annotations_0 = emptyList();
  // Inline function 'kotlinx.serialization.serializer' call
  // Inline function 'kotlinx.serialization.internal.cast' call
  var this_1 = serializer(createKType(PrimitiveClasses_getInstance().me(), arrayOf([]), false));
  var descriptor_0 = (isInterface(this_1, KSerializer) ? this_1 : THROW_CCE()).or();
  $this$buildClassSerialDescriptor.av('detail', descriptor_0, annotations_0, true);
  // Inline function 'kotlinx.serialization.descriptors.element' call
  var annotations_1 = emptyList();
  // Inline function 'kotlinx.serialization.serializer' call
  // Inline function 'kotlinx.serialization.internal.cast' call
  var this_2 = serializer(createKType(PrimitiveClasses_getInstance().he(), arrayOf([]), false));
  var descriptor_1 = (isInterface(this_2, KSerializer) ? this_2 : THROW_CCE()).or();
  $this$buildClassSerialDescriptor.av('kind', descriptor_1, annotations_1, false);
  // Inline function 'kotlinx.serialization.descriptors.element' call
  var annotations_2 = emptyList();
  // Inline function 'kotlinx.serialization.serializer' call
  // Inline function 'kotlinx.serialization.internal.cast' call
  var this_3 = serializer(createKType(PrimitiveClasses_getInstance().se(), arrayOf([]), false));
  var descriptor_2 = (isInterface(this_3, KSerializer) ? this_3 : THROW_CCE()).or();
  $this$buildClassSerialDescriptor.av('tags', descriptor_2, annotations_2, false);
  $this$buildClassSerialDescriptor.av('range', RangeSerializer_getInstance().or(), emptyList(), false);
  $this$buildClassSerialDescriptor.av('selectionRange', RangeSerializer_getInstance().or(), emptyList(), false);
  // Inline function 'kotlinx.serialization.descriptors.element' call
  var elementName = 'children';
  var annotations_3 = emptyList();
  // Inline function 'kotlinx.serialization.serializer' call
  // Inline function 'kotlinx.serialization.internal.cast' call
  var this_4 = serializer(createKType(PrimitiveClasses_getInstance().le(), arrayOf([createInvariantKTypeProjection(createKType(getKClass(DocumentSymbol), arrayOf([]), false))]), false));
  var descriptor_3 = (isInterface(this_4, KSerializer) ? this_4 : THROW_CCE()).or();
  $this$buildClassSerialDescriptor.av(elementName, descriptor_3, annotations_3, true);
  return Unit_instance;
}
function DocumentSymbolSerializer$_get_descriptor_$ref_817kp6() {
  return (p0) => p0.or();
}
var DocumentSymbolSerializer_instance;
function DocumentSymbolSerializer_getInstance() {
  if (DocumentSymbolSerializer_instance === VOID)
    new DocumentSymbolSerializer();
  return DocumentSymbolSerializer_instance;
}
//region block: post-declaration
initMetadataForCompanion(Companion);
protoOf($serializer).p14 = typeParametersSerializers;
initMetadataForObject($serializer, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForInterface(DocumentSymbol, 'DocumentSymbol', VOID, VOID, VOID, VOID, VOID, {0: DocumentSymbolSerializer_getInstance});
initMetadataForClass(DocumentSymbolImpl, 'DocumentSymbolImpl', VOID, VOID, [DocumentSymbol], VOID, VOID, {0: $serializer_getInstance});
initMetadataForObject(DocumentSymbolSerializer, 'DocumentSymbolSerializer', VOID, VOID, [KSerializer]);
//endregion
//region block: exports
export {
  DocumentSymbolImpl as DocumentSymbolImpl2cvvum5l66ux4,
  DocumentSymbol as DocumentSymbol100yl149da3cd,
};
//endregion

//# sourceMappingURL=common-lsp-symbols.mjs.map
