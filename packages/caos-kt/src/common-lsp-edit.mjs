import {
  initMetadataForInterface1egvbzx539z91 as initMetadataForInterface,
  VOID3gxj6tk5isa35 as VOID,
  initMetadataForCompanion1wyw17z38v6ac as initMetadataForCompanion,
  THROW_CCE2g6jy02ryeudk as THROW_CCE,
  protoOf180f3jzyo7rfj as protoOf,
  initMetadataForObject1cxne3s9w65el as initMetadataForObject,
  toString1pkumu07cwy4m as toString,
  hashCodeq5arwsb9dgti as hashCode,
  getStringHashCode26igk1bx568vk as getStringHashCode,
  equals2au1ep9vhcato as equals,
  Unit_instancev9v8hjid95df as Unit_instance,
  createThis2j2avj17cvnv2 as createThis,
  initMetadataForClassbxx6q50dy2s7 as initMetadataForClass,
  emptyList1g2z5xcrvp2zy as emptyList,
  PrimitiveClasses_getInstanceds06xwqrwfdm as PrimitiveClasses_getInstance,
  arrayOf1akklvh2at202 as arrayOf,
  createKType31ecntyyaay3k as createKType,
  isInterface3d6p8outrmvmk as isInterface,
  lazy2hsh8ze7j6ikd as lazy,
  KProperty1ca4yb4wlo496 as KProperty1,
  getPropertyCallableRef3hckxc0xueiaj as getPropertyCallableRef,
} from './kotlin-kotlin-stdlib.mjs';
import {
  SerializableWithd2dap36updxd as SerializableWith,
  PluginGeneratedSerialDescriptorqdzeg5asqhfg as PluginGeneratedSerialDescriptor,
  UnknownFieldExceptiona60e3a6v1xqo as UnknownFieldException,
  StringSerializer_getInstance11v9md0a7d9yk as StringSerializer_getInstance,
  typeParametersSerializers2likxjr48tr7y as typeParametersSerializers,
  GeneratedSerializer1f7t7hssdd2ws as GeneratedSerializer,
  throwMissingFieldException2cmke0v3ynf14 as throwMissingFieldException,
  buildClassSerialDescriptors2a6xdp6mrtw as buildClassSerialDescriptor,
  serializer1hwzc6m64v1op as serializer,
  KSerializerzf77vz1967fq as KSerializer,
  SerializationExceptioneqrdve3ts2n9 as SerializationException,
} from './kotlinx-serialization-kotlinx-serialization-core.mjs';
import { RangeSerializer_getInstancesbqzmtha7l6u as RangeSerializer_getInstance } from './common-ast-structs.mjs';
//region block: imports
var imul = Math.imul;
//endregion
//region block: pre-declaration
class TextEdit {}
class Companion {}
class $serializer {
  constructor() {
    $serializer_instance = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('com.bedalton.common.lsp.edit.TextEditImpl', this, 2);
    tmp0_serialDesc.w13('range', false);
    tmp0_serialDesc.w13('newText', false);
    this.u51_1 = tmp0_serialDesc;
  }
  v51(encoder, value) {
    var tmp0_desc = this.u51_1;
    var tmp1_output = encoder.bw(tmp0_desc);
    tmp1_output.tx(tmp0_desc, 0, RangeSerializer_getInstance(), value.w51_1);
    tmp1_output.rx(tmp0_desc, 1, value.x51_1);
    tmp1_output.cw(tmp0_desc);
  }
  mr(encoder, value) {
    return this.v51(encoder, value instanceof TextEditImpl ? value : THROW_CCE());
  }
  nr(decoder) {
    var tmp0_desc = this.u51_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_input = decoder.bw(tmp0_desc);
    if (tmp6_input.sw()) {
      tmp4_local0 = tmp6_input.nw(tmp0_desc, 0, RangeSerializer_getInstance(), tmp4_local0);
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
            tmp4_local0 = tmp6_input.nw(tmp0_desc, 0, RangeSerializer_getInstance(), tmp4_local0);
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
    return TextEditImpl.y51(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  }
  lr() {
    return this.u51_1;
  }
  l14() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [RangeSerializer_getInstance(), StringSerializer_getInstance()];
  }
}
class TextEditImpl {
  constructor(range, newText) {
    this.w51_1 = range;
    this.x51_1 = newText;
  }
  dg() {
    return this.w51_1;
  }
  t51() {
    return this.x51_1;
  }
  z51(range, newText) {
    return new TextEditImpl(range, newText);
  }
  a52(range, newText, $super) {
    range = range === VOID ? this.w51_1 : range;
    newText = newText === VOID ? this.x51_1 : newText;
    return $super === VOID ? this.z51(range, newText) : $super.z51.call(this, range, newText);
  }
  toString() {
    return 'TextEditImpl(range=' + toString(this.w51_1) + ', newText=' + this.x51_1 + ')';
  }
  hashCode() {
    var result = hashCode(this.w51_1);
    result = imul(result, 31) + getStringHashCode(this.x51_1) | 0;
    return result;
  }
  equals(other) {
    if (this === other)
      return true;
    if (!(other instanceof TextEditImpl))
      return false;
    if (!equals(this.w51_1, other.w51_1))
      return false;
    if (!(this.x51_1 === other.x51_1))
      return false;
    return true;
  }
  static y51(seen0, range, newText, serializationConstructorMarker) {
    if (!(3 === (3 & seen0))) {
      throwMissingFieldException(seen0, 3, $serializer_getInstance().u51_1);
    }
    var $this = createThis(this);
    $this.w51_1 = range;
    $this.x51_1 = newText;
    return $this;
  }
}
class TextEditSerializer {
  constructor() {
    TextEditSerializer_instance = this;
    this.b52_1 = 0;
    this.c52_1 = 1;
    var tmp = this;
    tmp.d52_1 = lazy(TextEditSerializer$descriptor$delegate$lambda);
  }
  lr() {
    var tmp0 = this.d52_1;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('descriptor', 1, tmp, TextEditSerializer$_get_descriptor_$ref_svr1dy(), null);
    return tmp0.k3();
  }
  nr(decoder) {
    var descriptor = this.lr();
    var range = null;
    var newText = null;
    var ob = decoder.bw(descriptor);
    var index;
    $l$loop: while (true) {
      // Inline function 'kotlin.also' call
      var this_0 = ob.tw(descriptor);
      index = this_0;
      if (!!(this_0 === -1)) {
        break $l$loop;
      }
      if (index === 0)
        range = ob.ow(descriptor, index, RangeSerializer_getInstance());
      else if (index === 1)
        newText = ob.lw(descriptor, index);
    }
    ob.cw(descriptor);
    if (range == null || newText == null) {
      var tmp1_subject = range;
      var error = tmp1_subject == null && newText == null ? 'Invalid EditText serialized data. Missing: "range" and "new_text" values' : tmp1_subject == null ? 'Invalid EditText serialized data. Missing: "range" value' : 'Invalid EditText serialized data. Missing: "new_text" value';
      throw SerializationException.dt(error);
    }
    return new TextEditImpl(range, newText);
  }
  e52(encoder, value) {
    var descriptor = this.lr();
    var ob = encoder.bw(descriptor);
    ob.tx(descriptor, 0, RangeSerializer_getInstance(), value.dg());
    ob.rx(descriptor, 1, value.t51());
    ob.cw(descriptor);
  }
  mr(encoder, value) {
    return this.e52(encoder, (!(value == null) ? isInterface(value, TextEdit) : false) ? value : THROW_CCE());
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
function TextEditSerializer$descriptor$delegate$lambda() {
  return buildClassSerialDescriptor('TextEdit', [], TextEditSerializer$descriptor$delegate$lambda$lambda);
}
function TextEditSerializer$descriptor$delegate$lambda$lambda($this$buildClassSerialDescriptor) {
  $this$buildClassSerialDescriptor.wr('range', RangeSerializer_getInstance().lr());
  // Inline function 'kotlinx.serialization.descriptors.element' call
  var elementName = 'new_text';
  var annotations = emptyList();
  // Inline function 'kotlinx.serialization.serializer' call
  // Inline function 'kotlinx.serialization.internal.cast' call
  var this_0 = serializer(createKType(PrimitiveClasses_getInstance().je(), arrayOf([]), false));
  var descriptor = (isInterface(this_0, KSerializer) ? this_0 : THROW_CCE()).lr();
  $this$buildClassSerialDescriptor.xu(elementName, descriptor, annotations, false);
  return Unit_instance;
}
function TextEditSerializer$_get_descriptor_$ref_svr1dy() {
  return (p0) => p0.lr();
}
var TextEditSerializer_instance;
function TextEditSerializer_getInstance() {
  if (TextEditSerializer_instance === VOID)
    new TextEditSerializer();
  return TextEditSerializer_instance;
}
//region block: post-declaration
initMetadataForInterface(TextEdit, 'TextEdit', VOID, VOID, VOID, VOID, VOID, {0: TextEditSerializer_getInstance});
initMetadataForCompanion(Companion);
protoOf($serializer).m14 = typeParametersSerializers;
initMetadataForObject($serializer, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(TextEditImpl, 'TextEditImpl', VOID, VOID, [TextEdit], VOID, VOID, {0: $serializer_getInstance});
initMetadataForObject(TextEditSerializer, 'TextEditSerializer', VOID, VOID, [KSerializer]);
//endregion
//region block: init
Companion_instance = new Companion();
//endregion
//region block: exports
export {
  TextEditImpl as TextEditImpl14efa5renoti5,
  TextEdit as TextEdit2vup9uby0zik8,
  $serializer_getInstance as $serializer_getInstance1ivhwy0byi76u,
  TextEditSerializer_getInstance as TextEditSerializer_getInstance361vpulvedeni,
};
//endregion

//# sourceMappingURL=common-lsp-edit.mjs.map
