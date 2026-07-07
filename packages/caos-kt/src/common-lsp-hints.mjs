import {
  initMetadataForInterface1egvbzx539z91 as initMetadataForInterface,
  VOID3gxj6tk5isa35 as VOID,
  getKClass3t8tygqu4lcxf as getKClass,
  LazyThreadSafetyMode_PUBLICATION_getInstance3qslfm3vqg6y3 as LazyThreadSafetyMode_PUBLICATION_getInstance,
  lazy1261dae0bgscp as lazy,
  initMetadataForCompanion1wyw17z38v6ac as initMetadataForCompanion,
  Unit_instancev9v8hjid95df as Unit_instance,
  THROW_CCE2g6jy02ryeudk as THROW_CCE,
  protoOf180f3jzyo7rfj as protoOf,
  initMetadataForObject1cxne3s9w65el as initMetadataForObject,
  equals2au1ep9vhcato as equals,
  contentEqualsaf55p28mnw74 as contentEquals,
  hashCodeq5arwsb9dgti as hashCode,
  getStringHashCode26igk1bx568vk as getStringHashCode,
  contentHashCode2i020q5tbeh2s as contentHashCode,
  getBooleanHashCode1bbj3u6b3v0a7 as getBooleanHashCode,
  toString1pkumu07cwy4m as toString,
  createThis2j2avj17cvnv2 as createThis,
  initMetadataForClassbxx6q50dy2s7 as initMetadataForClass,
  emptyList1g2z5xcrvp2zy as emptyList,
  PrimitiveClasses_getInstanceds06xwqrwfdm as PrimitiveClasses_getInstance,
  arrayOf1akklvh2at202 as arrayOf,
  createKType31ecntyyaay3k as createKType,
  isInterface3d6p8outrmvmk as isInterface,
  createInvariantKTypeProjection3h5364czc0a8w as createInvariantKTypeProjection,
  lazy2hsh8ze7j6ikd as lazy_0,
  KProperty1ca4yb4wlo496 as KProperty1,
  getPropertyCallableRef3hckxc0xueiaj as getPropertyCallableRef,
  copyToArray2j022khrow2yi as copyToArray,
  toList383f556t1dixk as toList,
} from './kotlin-kotlin-stdlib.mjs';
import {
  SerializableWithd2dap36updxd as SerializableWith,
  ReferenceArraySerializer3juj1vqolxkrs as ReferenceArraySerializer,
  PluginGeneratedSerialDescriptorqdzeg5asqhfg as PluginGeneratedSerialDescriptor,
  IntSerializer_getInstanceuhm8c1wku08l as IntSerializer_getInstance,
  StringSerializer_getInstance11v9md0a7d9yk as StringSerializer_getInstance,
  BooleanSerializer_getInstance2fsi2wywr82nt as BooleanSerializer_getInstance,
  UnknownFieldExceptiona60e3a6v1xqo as UnknownFieldException,
  get_nullable197rfua9r7fsz as get_nullable,
  typeParametersSerializers2likxjr48tr7y as typeParametersSerializers,
  GeneratedSerializer1f7t7hssdd2ws as GeneratedSerializer,
  throwMissingFieldException2cmke0v3ynf14 as throwMissingFieldException,
  buildClassSerialDescriptors2a6xdp6mrtw as buildClassSerialDescriptor,
  serializer1hwzc6m64v1op as serializer,
  KSerializerzf77vz1967fq as KSerializer,
  ListSerializer1hxuk9dx5n9du as ListSerializer,
  SerializationExceptioneqrdve3ts2n9 as SerializationException,
} from './kotlinx-serialization-kotlinx-serialization-core.mjs';
import {
  TextEdit2vup9uby0zik8 as TextEdit,
  TextEditSerializer_getInstance361vpulvedeni as TextEditSerializer_getInstance,
} from './common-lsp-edit.mjs';
import {
  PositionSerializer_getInstance30kb0wbmzb8y as PositionSerializer_getInstance,
  Companion_instance17wxk1w7q7sr8 as Companion_instance,
} from './common-ast-structs.mjs';
import {
  decodeNullableIntElement33f6dr575xvqa as decodeNullableIntElement,
  decodeNullableStringElement3f6s2kwh7ol5y as decodeNullableStringElement,
  decodeNullableBooleanElement2mibszteo1dbv as decodeNullableBooleanElement,
  encodeNullableIntElement24zeq3y1z0lv7 as encodeNullableIntElement,
  encodeNullableStringElement1xeyx7vmwqbzv as encodeNullableStringElement,
  encodeNullableBooleanElementx419t8kcjsew as encodeNullableBooleanElement,
} from './bedalton-common-serialization.mjs';
//region block: imports
var imul = Math.imul;
//endregion
//region block: pre-declaration
class InlayHint {}
class Companion {
  constructor() {
    Companion_instance_0 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.v5g_1 = [null, null, null, lazy(tmp_0, InlayHintImpl$Companion$$childSerializers$_anonymous__uk33a4), null, null, null];
  }
}
class $serializer {
  constructor() {
    $serializer_instance = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('com.bedalton.common.ast.hints.InlayHintImpl', this, 7);
    tmp0_serialDesc.w13('position', false);
    tmp0_serialDesc.w13('label', false);
    tmp0_serialDesc.w13('kind', true);
    tmp0_serialDesc.w13('textEdits', true);
    tmp0_serialDesc.w13('tooltip', true);
    tmp0_serialDesc.w13('paddingLeft', true);
    tmp0_serialDesc.w13('paddingRight', true);
    this.w5g_1 = tmp0_serialDesc;
  }
  x5g(encoder, value) {
    var tmp0_desc = this.w5g_1;
    var tmp1_output = encoder.bw(tmp0_desc);
    var tmp2_cached = Companion_getInstance().v5g_1;
    tmp1_output.tx(tmp0_desc, 0, PositionSerializer_getInstance(), value.y5g_1);
    tmp1_output.rx(tmp0_desc, 1, value.z5g_1);
    if (tmp1_output.zx(tmp0_desc, 2) ? true : !(value.a5h_1 === 1)) {
      tmp1_output.vx(tmp0_desc, 2, IntSerializer_getInstance(), value.a5h_1);
    }
    if (tmp1_output.zx(tmp0_desc, 3) ? true : !(value.b5h_1 == null)) {
      tmp1_output.vx(tmp0_desc, 3, tmp2_cached[3].k3(), value.b5h_1);
    }
    if (tmp1_output.zx(tmp0_desc, 4) ? true : !(value.c5h_1 == null)) {
      tmp1_output.vx(tmp0_desc, 4, StringSerializer_getInstance(), value.c5h_1);
    }
    if (tmp1_output.zx(tmp0_desc, 5) ? true : !(value.d5h_1 == null)) {
      tmp1_output.vx(tmp0_desc, 5, BooleanSerializer_getInstance(), value.d5h_1);
    }
    if (tmp1_output.zx(tmp0_desc, 6) ? true : !(value.e5h_1 == null)) {
      tmp1_output.vx(tmp0_desc, 6, BooleanSerializer_getInstance(), value.e5h_1);
    }
    tmp1_output.cw(tmp0_desc);
  }
  mr(encoder, value) {
    return this.x5g(encoder, value instanceof InlayHintImpl ? value : THROW_CCE());
  }
  nr(decoder) {
    var tmp0_desc = this.w5g_1;
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
    var tmp11_input = decoder.bw(tmp0_desc);
    var tmp12_cached = Companion_getInstance().v5g_1;
    if (tmp11_input.sw()) {
      tmp4_local0 = tmp11_input.nw(tmp0_desc, 0, PositionSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp11_input.lw(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp11_input.pw(tmp0_desc, 2, IntSerializer_getInstance(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp11_input.pw(tmp0_desc, 3, tmp12_cached[3].k3(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp11_input.pw(tmp0_desc, 4, StringSerializer_getInstance(), tmp8_local4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp9_local5 = tmp11_input.pw(tmp0_desc, 5, BooleanSerializer_getInstance(), tmp9_local5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
      tmp10_local6 = tmp11_input.pw(tmp0_desc, 6, BooleanSerializer_getInstance(), tmp10_local6);
      tmp3_bitMask0 = tmp3_bitMask0 | 64;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp11_input.tw(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp11_input.nw(tmp0_desc, 0, PositionSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp11_input.lw(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp11_input.pw(tmp0_desc, 2, IntSerializer_getInstance(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp11_input.pw(tmp0_desc, 3, tmp12_cached[3].k3(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp11_input.pw(tmp0_desc, 4, StringSerializer_getInstance(), tmp8_local4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp9_local5 = tmp11_input.pw(tmp0_desc, 5, BooleanSerializer_getInstance(), tmp9_local5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          case 6:
            tmp10_local6 = tmp11_input.pw(tmp0_desc, 6, BooleanSerializer_getInstance(), tmp10_local6);
            tmp3_bitMask0 = tmp3_bitMask0 | 64;
            break;
          default:
            throw UnknownFieldException.et(tmp2_index);
        }
      }
    tmp11_input.cw(tmp0_desc);
    return InlayHintImpl.f5h(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, tmp10_local6, null);
  }
  lr() {
    return this.w5g_1;
  }
  l14() {
    var tmp0_cached = Companion_getInstance().v5g_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [PositionSerializer_getInstance(), StringSerializer_getInstance(), get_nullable(IntSerializer_getInstance()), get_nullable(tmp0_cached[3].k3()), get_nullable(StringSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance())];
  }
}
class InlayHintImpl {
  constructor(position, label, kind, textEdits, tooltip, paddingLeft, paddingRight) {
    Companion_getInstance();
    kind = kind === VOID ? 1 : kind;
    textEdits = textEdits === VOID ? null : textEdits;
    tooltip = tooltip === VOID ? null : tooltip;
    paddingLeft = paddingLeft === VOID ? null : paddingLeft;
    paddingRight = paddingRight === VOID ? null : paddingRight;
    this.y5g_1 = position;
    this.z5g_1 = label;
    this.a5h_1 = kind;
    this.b5h_1 = textEdits;
    this.c5h_1 = tooltip;
    this.d5h_1 = paddingLeft;
    this.e5h_1 = paddingRight;
  }
  i28() {
    return this.y5g_1;
  }
  q5g() {
    return this.z5g_1;
  }
  iu() {
    return this.a5h_1;
  }
  r5g() {
    return this.b5h_1;
  }
  s5g() {
    return this.c5h_1;
  }
  t5g() {
    return this.d5h_1;
  }
  u5g() {
    return this.e5h_1;
  }
  equals(other) {
    if (this === other)
      return true;
    if (!(other instanceof InlayHintImpl))
      return false;
    if (!equals(this.y5g_1, other.y5g_1))
      return false;
    if (!(this.z5g_1 === other.z5g_1))
      return false;
    if (!(this.a5h_1 == other.a5h_1))
      return false;
    if (!(this.b5h_1 == null)) {
      if (other.b5h_1 == null)
        return false;
      if (!contentEquals(this.b5h_1, other.b5h_1))
        return false;
    } else if (!(other.b5h_1 == null))
      return false;
    if (!(this.c5h_1 == other.c5h_1))
      return false;
    if (!(this.d5h_1 == other.d5h_1))
      return false;
    if (!(this.e5h_1 == other.e5h_1))
      return false;
    return true;
  }
  hashCode() {
    var result = hashCode(this.y5g_1);
    result = imul(31, result) + getStringHashCode(this.z5g_1) | 0;
    var tmp = imul(31, result);
    var tmp0_elvis_lhs = this.a5h_1;
    result = tmp + (tmp0_elvis_lhs == null ? 0 : tmp0_elvis_lhs) | 0;
    var tmp_0 = imul(31, result);
    var tmp1_safe_receiver = this.b5h_1;
    var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : contentHashCode(tmp1_safe_receiver);
    result = tmp_0 + (tmp2_elvis_lhs == null ? 0 : tmp2_elvis_lhs) | 0;
    var tmp_1 = imul(31, result);
    var tmp3_safe_receiver = this.c5h_1;
    var tmp4_elvis_lhs = tmp3_safe_receiver == null ? null : getStringHashCode(tmp3_safe_receiver);
    result = tmp_1 + (tmp4_elvis_lhs == null ? 0 : tmp4_elvis_lhs) | 0;
    var tmp_2 = imul(31, result);
    var tmp5_safe_receiver = this.d5h_1;
    var tmp6_elvis_lhs = tmp5_safe_receiver == null ? null : getBooleanHashCode(tmp5_safe_receiver);
    result = tmp_2 + (tmp6_elvis_lhs == null ? 0 : tmp6_elvis_lhs) | 0;
    var tmp_3 = imul(31, result);
    var tmp7_safe_receiver = this.e5h_1;
    var tmp8_elvis_lhs = tmp7_safe_receiver == null ? null : getBooleanHashCode(tmp7_safe_receiver);
    result = tmp_3 + (tmp8_elvis_lhs == null ? 0 : tmp8_elvis_lhs) | 0;
    return result;
  }
  toString() {
    return 'InlayHintImpl(position=' + toString(this.y5g_1) + ', label=' + this.z5g_1 + ', kind=' + this.a5h_1 + ', textEdits=' + toString(this.b5h_1) + ', tooltip=' + this.c5h_1 + ', paddingLeft=' + this.d5h_1 + ', paddingRight=' + this.e5h_1 + ')';
  }
  static f5h(seen0, position, label, kind, textEdits, tooltip, paddingLeft, paddingRight, serializationConstructorMarker) {
    Companion_getInstance();
    if (!(3 === (3 & seen0))) {
      throwMissingFieldException(seen0, 3, $serializer_getInstance().w5g_1);
    }
    var $this = createThis(this);
    $this.y5g_1 = position;
    $this.z5g_1 = label;
    if (0 === (seen0 & 4))
      $this.a5h_1 = 1;
    else
      $this.a5h_1 = kind;
    if (0 === (seen0 & 8))
      $this.b5h_1 = null;
    else
      $this.b5h_1 = textEdits;
    if (0 === (seen0 & 16))
      $this.c5h_1 = null;
    else
      $this.c5h_1 = tooltip;
    if (0 === (seen0 & 32))
      $this.d5h_1 = null;
    else
      $this.d5h_1 = paddingLeft;
    if (0 === (seen0 & 64))
      $this.e5h_1 = null;
    else
      $this.e5h_1 = paddingRight;
    return $this;
  }
}
class InlayHintSerializer {
  constructor() {
    InlayHintSerializer_instance = this;
    this.g5h_1 = get_nullable(ListSerializer(TextEditSerializer_getInstance()));
    this.h5h_1 = 0;
    this.i5h_1 = 1;
    this.j5h_1 = 2;
    this.k5h_1 = 3;
    this.l5h_1 = 4;
    this.m5h_1 = 5;
    this.n5h_1 = 6;
    var tmp = this;
    tmp.o5h_1 = lazy_0(InlayHintSerializer$descriptor$delegate$lambda);
  }
  lr() {
    var tmp0 = this.o5h_1;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('descriptor', 1, tmp, InlayHintSerializer$_get_descriptor_$ref_mbwu4p(), null);
    return tmp0.k3();
  }
  nr(decoder) {
    var descriptor = this.lr();
    var ob = decoder.bw(descriptor);
    var index;
    var position = null;
    var label = null;
    var kind = null;
    var edits = null;
    var tooltip = null;
    var paddingLeft = null;
    var paddingRight = null;
    $l$loop: while (true) {
      // Inline function 'kotlin.also' call
      var this_0 = ob.tw(descriptor);
      index = this_0;
      if (!!(this_0 === -1)) {
        break $l$loop;
      }
      switch (index) {
        case 0:
          position = ob.ow(descriptor, index, Companion_instance.k1e());
          break;
        case 1:
          label = ob.lw(descriptor, index);
          break;
        case 2:
          kind = decodeNullableIntElement(ob, descriptor, index);
          break;
        case 3:
          var tmp1_safe_receiver = ob.ow(descriptor, index, this.g5h_1);
          var tmp;
          if (tmp1_safe_receiver == null) {
            tmp = null;
          } else {
            // Inline function 'kotlin.collections.toTypedArray' call
            tmp = copyToArray(tmp1_safe_receiver);
          }

          edits = tmp;
          break;
        case 4:
          tooltip = decodeNullableStringElement(ob, descriptor, index);
          break;
        case 5:
          paddingLeft = decodeNullableBooleanElement(ob, descriptor, index);
          break;
        case 6:
          paddingRight = decodeNullableBooleanElement(ob, descriptor, index);
          break;
      }
    }
    ob.cw(descriptor);
    if (position == null || label == null) {
      var tmp2_subject = position;
      var missing = tmp2_subject == null && label == null ? 'position, label' : tmp2_subject == null ? 'position' : 'label';
      throw SerializationException.dt('InlayHint is missing element: [' + missing + ']');
    }
    return new InlayHintImpl(position, label, kind, edits, tooltip, paddingLeft, paddingRight);
  }
  p5h(encoder, value) {
    var ob = encoder.bw(this.lr());
    ob.tx(this.lr(), 0, PositionSerializer_getInstance(), value.i28());
    ob.rx(this.lr(), 1, value.q5g());
    encodeNullableIntElement(ob, this.lr(), 2, value.iu());
    var tmp = this.lr();
    var tmp0_safe_receiver = value.r5g();
    ob.tx(tmp, 3, this.g5h_1, tmp0_safe_receiver == null ? null : toList(tmp0_safe_receiver));
    encodeNullableStringElement(ob, this.lr(), 4, value.s5g());
    encodeNullableBooleanElement(ob, this.lr(), 5, value.t5g());
    encodeNullableBooleanElement(ob, this.lr(), 6, value.u5g());
    ob.cw(this.lr());
  }
  mr(encoder, value) {
    return this.p5h(encoder, (!(value == null) ? isInterface(value, InlayHint) : false) ? value : THROW_CCE());
  }
}
//endregion
function InlayHintImpl$Companion$$childSerializers$_anonymous__uk33a4() {
  return new ReferenceArraySerializer(getKClass(TextEdit), TextEditSerializer_getInstance());
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
function InlayHintSerializer$descriptor$delegate$lambda() {
  return buildClassSerialDescriptor('InlayHint', [], InlayHintSerializer$descriptor$delegate$lambda$lambda);
}
function InlayHintSerializer$descriptor$delegate$lambda$lambda($this$buildClassSerialDescriptor) {
  $this$buildClassSerialDescriptor.wr('position', PositionSerializer_getInstance().lr());
  // Inline function 'kotlinx.serialization.descriptors.element' call
  var annotations = emptyList();
  // Inline function 'kotlinx.serialization.serializer' call
  // Inline function 'kotlinx.serialization.internal.cast' call
  var this_0 = serializer(createKType(PrimitiveClasses_getInstance().je(), arrayOf([]), false));
  var descriptor = (isInterface(this_0, KSerializer) ? this_0 : THROW_CCE()).lr();
  $this$buildClassSerialDescriptor.xu('label', descriptor, annotations, false);
  // Inline function 'kotlinx.serialization.descriptors.element' call
  var annotations_0 = emptyList();
  // Inline function 'kotlinx.serialization.serializer' call
  // Inline function 'kotlinx.serialization.internal.cast' call
  var this_1 = serializer(createKType(PrimitiveClasses_getInstance().ee(), arrayOf([]), true));
  var descriptor_0 = (isInterface(this_1, KSerializer) ? this_1 : THROW_CCE()).lr();
  $this$buildClassSerialDescriptor.xu('kind', descriptor_0, annotations_0, false);
  // Inline function 'kotlinx.serialization.descriptors.element' call
  var elementName = 'text_edits';
  var annotations_1 = emptyList();
  // Inline function 'kotlinx.serialization.serializer' call
  // Inline function 'kotlinx.serialization.internal.cast' call
  var this_2 = serializer(createKType(PrimitiveClasses_getInstance().ie(), arrayOf([createInvariantKTypeProjection(createKType(getKClass(TextEdit), arrayOf([]), false))]), false));
  var descriptor_1 = (isInterface(this_2, KSerializer) ? this_2 : THROW_CCE()).lr();
  $this$buildClassSerialDescriptor.xu(elementName, descriptor_1, annotations_1, false);
  // Inline function 'kotlinx.serialization.descriptors.element' call
  var annotations_2 = emptyList();
  // Inline function 'kotlinx.serialization.serializer' call
  // Inline function 'kotlinx.serialization.internal.cast' call
  var this_3 = serializer(createKType(PrimitiveClasses_getInstance().je(), arrayOf([]), true));
  var descriptor_2 = (isInterface(this_3, KSerializer) ? this_3 : THROW_CCE()).lr();
  $this$buildClassSerialDescriptor.xu('tooltip', descriptor_2, annotations_2, false);
  // Inline function 'kotlinx.serialization.descriptors.element' call
  var elementName_0 = 'padding_left';
  var annotations_3 = emptyList();
  // Inline function 'kotlinx.serialization.serializer' call
  // Inline function 'kotlinx.serialization.internal.cast' call
  var this_4 = serializer(createKType(PrimitiveClasses_getInstance().be(), arrayOf([]), false));
  var descriptor_3 = (isInterface(this_4, KSerializer) ? this_4 : THROW_CCE()).lr();
  $this$buildClassSerialDescriptor.xu(elementName_0, descriptor_3, annotations_3, false);
  // Inline function 'kotlinx.serialization.descriptors.element' call
  var elementName_1 = 'padding_right';
  var annotations_4 = emptyList();
  // Inline function 'kotlinx.serialization.serializer' call
  // Inline function 'kotlinx.serialization.internal.cast' call
  var this_5 = serializer(createKType(PrimitiveClasses_getInstance().be(), arrayOf([]), false));
  var descriptor_4 = (isInterface(this_5, KSerializer) ? this_5 : THROW_CCE()).lr();
  $this$buildClassSerialDescriptor.xu(elementName_1, descriptor_4, annotations_4, false);
  return Unit_instance;
}
function InlayHintSerializer$_get_descriptor_$ref_mbwu4p() {
  return (p0) => p0.lr();
}
var InlayHintSerializer_instance;
function InlayHintSerializer_getInstance() {
  if (InlayHintSerializer_instance === VOID)
    new InlayHintSerializer();
  return InlayHintSerializer_instance;
}
var EMPTY_INLAY_LIST;
function code(_this__u8e3s4) {
  _init_properties_util_kt__mcwhvi();
  return '' + _this__u8e3s4.i28().e1e() + ':' + _this__u8e3s4.i28().i1e() + ':' + _this__u8e3s4.q5g();
}
var properties_initialized_util_kt_qfsh5w;
function _init_properties_util_kt__mcwhvi() {
  if (!properties_initialized_util_kt_qfsh5w) {
    properties_initialized_util_kt_qfsh5w = true;
    EMPTY_INLAY_LIST = emptyList();
  }
}
//region block: post-declaration
initMetadataForInterface(InlayHint, 'InlayHint', VOID, VOID, VOID, VOID, VOID, {0: InlayHintSerializer_getInstance});
initMetadataForCompanion(Companion);
protoOf($serializer).m14 = typeParametersSerializers;
initMetadataForObject($serializer, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(InlayHintImpl, 'InlayHintImpl', VOID, VOID, [InlayHint], VOID, VOID, {0: $serializer_getInstance});
initMetadataForObject(InlayHintSerializer, 'InlayHintSerializer', VOID, VOID, [KSerializer]);
//endregion
//region block: exports
export {
  InlayHintImpl as InlayHintImplk5u632cniibk,
  InlayHint as InlayHint1kryusiq4k661,
  code as code1b2s4zfpxmvjv,
};
//endregion

//# sourceMappingURL=common-lsp-hints.mjs.map
