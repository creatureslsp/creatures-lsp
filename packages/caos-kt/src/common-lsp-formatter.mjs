import {
  TextEdit2vup9uby0zik8 as TextEdit,
  TextEditSerializer_getInstance361vpulvedeni as TextEditSerializer_getInstance,
} from './common-lsp-edit.mjs';
import {
  getKClass3t8tygqu4lcxf as getKClass,
  LazyThreadSafetyMode_PUBLICATION_getInstance3qslfm3vqg6y3 as LazyThreadSafetyMode_PUBLICATION_getInstance,
  lazy1261dae0bgscp as lazy,
  initMetadataForCompanion1wyw17z38v6ac as initMetadataForCompanion,
  VOID3gxj6tk5isa35 as VOID,
  THROW_CCE2g6jy02ryeudk as THROW_CCE,
  protoOf180f3jzyo7rfj as protoOf,
  initMetadataForObject1cxne3s9w65el as initMetadataForObject,
  contentEqualsaf55p28mnw74 as contentEquals,
  getStringHashCode26igk1bx568vk as getStringHashCode,
  contentHashCode2i020q5tbeh2s as contentHashCode,
  toString1pkumu07cwy4m as toString,
  Unit_instancev9v8hjid95df as Unit_instance,
  createThis2j2avj17cvnv2 as createThis,
  initMetadataForClassbxx6q50dy2s7 as initMetadataForClass,
  Enum3alwj03lh1n41 as Enum,
  initMetadataForInterface1egvbzx539z91 as initMetadataForInterface,
  lazy2hsh8ze7j6ikd as lazy_0,
  KProperty1ca4yb4wlo496 as KProperty1,
  getPropertyCallableRef3hckxc0xueiaj as getPropertyCallableRef,
  numberToInt1ygmcfwhs2fkq as numberToInt,
  emptyList1g2z5xcrvp2zy as emptyList,
  PrimitiveClasses_getInstanceds06xwqrwfdm as PrimitiveClasses_getInstance,
  arrayOf1akklvh2at202 as arrayOf,
  createKType31ecntyyaay3k as createKType,
  isInterface3d6p8outrmvmk as isInterface,
  IntCompanionObject_instance38ap4zil98hon as IntCompanionObject_instance,
  BooleanCompanionObject_instance1app94b8o3img as BooleanCompanionObject_instance,
  StringCompanionObject_instance1v0ht40fz3tq0 as StringCompanionObject_instance,
} from './kotlin-kotlin-stdlib.mjs';
import {
  ReferenceArraySerializer3juj1vqolxkrs as ReferenceArraySerializer,
  createSimpleEnumSerializer2guioz11kk1m0 as createSimpleEnumSerializer,
  PluginGeneratedSerialDescriptorqdzeg5asqhfg as PluginGeneratedSerialDescriptor,
  UnknownFieldExceptiona60e3a6v1xqo as UnknownFieldException,
  StringSerializer_getInstance11v9md0a7d9yk as StringSerializer_getInstance,
  typeParametersSerializers2likxjr48tr7y as typeParametersSerializers,
  GeneratedSerializer1f7t7hssdd2ws as GeneratedSerializer,
  throwMissingFieldException2cmke0v3ynf14 as throwMissingFieldException,
  SerializableWithd2dap36updxd as SerializableWith,
  get_nullable197rfua9r7fsz as get_nullable,
  buildClassSerialDescriptors2a6xdp6mrtw as buildClassSerialDescriptor,
  serializer1hwzc6m64v1op as serializer,
  KSerializerzf77vz1967fq as KSerializer,
  serializer1hu9wv9at41ww as serializer_0,
  serializer3u3hsxnenk49x as serializer_1,
  serializer1x79l67jvwntn as serializer_2,
} from './kotlinx-serialization-kotlinx-serialization-core.mjs';
//region block: imports
var imul = Math.imul;
//endregion
//region block: pre-declaration
class Companion {
  constructor() {
    Companion_instance = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    var tmp_1 = lazy(tmp_0, FormatResult$Companion$$childSerializers$_anonymous__qoz48m);
    var tmp_2 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.y56_1 = [null, null, tmp_1, lazy(tmp_2, FormatResult$Companion$$childSerializers$_anonymous__qoz48m_0)];
  }
}
class $serializer {
  constructor() {
    $serializer_instance = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('com.bedalton.common.lsp.formatter.FormatResult', this, 4);
    tmp0_serialDesc.w13('formattedText', false);
    tmp0_serialDesc.w13('oldText', false);
    tmp0_serialDesc.w13('edits', false);
    tmp0_serialDesc.w13('editReasons', false);
    this.z56_1 = tmp0_serialDesc;
  }
  a57(encoder, value) {
    var tmp0_desc = this.z56_1;
    var tmp1_output = encoder.bw(tmp0_desc);
    var tmp2_cached = Companion_getInstance().y56_1;
    tmp1_output.rx(tmp0_desc, 0, value.formattedText);
    tmp1_output.rx(tmp0_desc, 1, value.oldText);
    tmp1_output.tx(tmp0_desc, 2, tmp2_cached[2].k3(), value.edits);
    tmp1_output.tx(tmp0_desc, 3, tmp2_cached[3].k3(), value.editReasons);
    tmp1_output.cw(tmp0_desc);
  }
  mr(encoder, value) {
    return this.a57(encoder, value instanceof FormatResult ? value : THROW_CCE());
  }
  nr(decoder) {
    var tmp0_desc = this.z56_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_input = decoder.bw(tmp0_desc);
    var tmp9_cached = Companion_getInstance().y56_1;
    if (tmp8_input.sw()) {
      tmp4_local0 = tmp8_input.lw(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp8_input.lw(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp8_input.nw(tmp0_desc, 2, tmp9_cached[2].k3(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp8_input.nw(tmp0_desc, 3, tmp9_cached[3].k3(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp8_input.tw(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp8_input.lw(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp8_input.lw(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp8_input.nw(tmp0_desc, 2, tmp9_cached[2].k3(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp8_input.nw(tmp0_desc, 3, tmp9_cached[3].k3(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          default:
            throw UnknownFieldException.et(tmp2_index);
        }
      }
    tmp8_input.cw(tmp0_desc);
    return FormatResult.b57(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, null);
  }
  lr() {
    return this.z56_1;
  }
  l14() {
    var tmp0_cached = Companion_getInstance().y56_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), StringSerializer_getInstance(), tmp0_cached[2].k3(), tmp0_cached[3].k3()];
  }
}
class FormatResult {
  constructor(formattedText, oldText, edits, editReasons) {
    Companion_getInstance();
    this.formattedText = formattedText;
    this.oldText = oldText;
    this.edits = edits;
    this.editReasons = editReasons;
  }
  c57() {
    return this.formattedText;
  }
  d57() {
    return this.oldText;
  }
  e57() {
    return this.edits;
  }
  f57() {
    return this.editReasons;
  }
  equals(other) {
    if (this === other)
      return true;
    if (!(other instanceof FormatResult))
      return false;
    if (!(this.formattedText === other.formattedText))
      return false;
    if (!(this.oldText === other.oldText))
      return false;
    if (!contentEquals(this.edits, other.edits))
      return false;
    return true;
  }
  hashCode() {
    var result = getStringHashCode(this.formattedText);
    result = imul(31, result) + getStringHashCode(this.oldText) | 0;
    result = imul(31, result) + contentHashCode(this.edits) | 0;
    return result;
  }
  toString() {
    return 'FormatResult(formattedText=' + this.formattedText + ', oldText=' + this.oldText + ', edits=' + toString(this.edits) + ', editReasons=' + toString(this.editReasons) + ')';
  }
  static b57(seen0, formattedText, oldText, edits, editReasons, serializationConstructorMarker) {
    Companion_getInstance();
    if (!(15 === (15 & seen0))) {
      throwMissingFieldException(seen0, 15, $serializer_getInstance().z56_1);
    }
    var $this = createThis(this);
    $this.formattedText = formattedText;
    $this.oldText = oldText;
    $this.edits = edits;
    $this.editReasons = editReasons;
    return $this;
  }
}
class EditReason extends Enum {
  constructor(name, ordinal, commonName) {
    super(name, ordinal);
    this.i57_1 = commonName;
  }
}
class FormatterOptions {}
class FormatterOptionsBuilder {
  constructor() {
    this.u57_1 = null;
    this.v57_1 = null;
    this.w57_1 = null;
    this.x57_1 = null;
    this.y57_1 = null;
    this.z57_1 = null;
    this.a58_1 = null;
    this.b58_1 = null;
    this.c58_1 = null;
    this.d58_1 = null;
    this.e58_1 = null;
  }
  j57() {
    var tmp0_elvis_lhs = this.u57_1;
    return tmp0_elvis_lhs == null ? 4 : tmp0_elvis_lhs;
  }
  f58(tabSize) {
    this.u57_1 = tabSize;
    return this;
  }
  k57() {
    var tmp0_elvis_lhs = this.v57_1;
    return tmp0_elvis_lhs == null ? true : tmp0_elvis_lhs;
  }
  g58(insert) {
    this.v57_1 = insert;
    return this;
  }
  l57() {
    return this.w57_1;
  }
  h58(trim) {
    this.w57_1 = trim;
    return this;
  }
  m57() {
    return this.x57_1;
  }
  i58(insert) {
    this.x57_1 = insert;
    return this;
  }
  n57() {
    return this.y57_1;
  }
  j58(trim) {
    this.y57_1 = trim;
    return this;
  }
  o57() {
    return this.z57_1;
  }
  k58(minBlankLines) {
    this.z57_1 = minBlankLines;
    return this;
  }
  p57() {
    return this.a58_1;
  }
  l58(maxBlankLines) {
    this.a58_1 = maxBlankLines;
    return this;
  }
  q57() {
    return this.b58_1;
  }
  m58(indent) {
    this.b58_1 = indent;
    return this;
  }
  r57() {
    return this.c58_1;
  }
  n58(indent) {
    this.c58_1 = indent;
    return this;
  }
  s57() {
    return this.d58_1;
  }
  o58(newline) {
    this.d58_1 = newline;
    return this;
  }
  t57() {
    return this.e58_1;
  }
  p58(force) {
    this.e58_1 = force;
    return this;
  }
}
class Companion_0 {
  constructor() {
    this.q58_1 = 4;
    this.r58_1 = true;
    this.s58_1 = false;
    this.t58_1 = true;
    this.u58_1 = 0;
    this.v58_1 = '\n';
    this.w58_1 = false;
  }
}
class $serializer_0 {
  constructor() {
    $serializer_instance_0 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('com.bedalton.common.lsp.formatter.FormatterOptionsImpl', this, 1);
    tmp0_serialDesc.w13('opts', true);
    this.x58_1 = tmp0_serialDesc;
  }
  y58(encoder, value) {
    var tmp0_desc = this.x58_1;
    var tmp1_output = encoder.bw(tmp0_desc);
    if (tmp1_output.zx(tmp0_desc, 0) ? true : !(value.l59() == null)) {
      tmp1_output.vx(tmp0_desc, 0, FormatterOptionsSerializer_getInstance(), value.l59());
    }
    tmp1_output.cw(tmp0_desc);
  }
  mr(encoder, value) {
    return this.y58(encoder, value instanceof FormatterOptionsImpl ? value : THROW_CCE());
  }
  nr(decoder) {
    var tmp0_desc = this.x58_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp16_input = decoder.bw(tmp0_desc);
    if (tmp16_input.sw()) {
      tmp4_local0 = tmp16_input.pw(tmp0_desc, 0, FormatterOptionsSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp16_input.tw(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp16_input.pw(tmp0_desc, 0, FormatterOptionsSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          default:
            throw UnknownFieldException.et(tmp2_index);
        }
      }
    tmp16_input.cw(tmp0_desc);
    return FormatterOptionsImpl.m59(tmp3_bitMask0, tmp4_local0, null);
  }
  lr() {
    return this.x58_1;
  }
  l14() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(FormatterOptionsSerializer_getInstance())];
  }
}
class FormatterOptionsImpl {
  constructor(opts) {
    opts = opts === VOID ? null : opts;
    this.z58_1 = opts;
    var tmp = this;
    tmp.a59_1 = lazy_0(FormatterOptionsImpl$tabSize$delegate$lambda(this));
    var tmp_0 = this;
    tmp_0.b59_1 = lazy_0(FormatterOptionsImpl$insertSpaces$delegate$lambda(this));
    var tmp_1 = this;
    tmp_1.c59_1 = lazy_0(FormatterOptionsImpl$trimTrailingWhitespace$delegate$lambda(this));
    var tmp_2 = this;
    tmp_2.d59_1 = lazy_0(FormatterOptionsImpl$insertFinalNewline$delegate$lambda(this));
    var tmp_3 = this;
    tmp_3.e59_1 = lazy_0(FormatterOptionsImpl$trimFinalNewlines$delegate$lambda(this));
    var tmp_4 = this;
    tmp_4.f59_1 = lazy_0(FormatterOptionsImpl$indentComments$delegate$lambda(this));
    var tmp_5 = this;
    tmp_5.g59_1 = lazy_0(FormatterOptionsImpl$continuationIndent$delegate$lambda(this));
    var tmp_6 = this;
    tmp_6.h59_1 = lazy_0(FormatterOptionsImpl$minBlankLines$delegate$lambda(this));
    var tmp_7 = this;
    tmp_7.i59_1 = lazy_0(FormatterOptionsImpl$maxBlankLines$delegate$lambda(this));
    var tmp_8 = this;
    tmp_8.j59_1 = lazy_0(FormatterOptionsImpl$newLineChar$delegate$lambda(this));
    var tmp_9 = this;
    tmp_9.k59_1 = lazy_0(FormatterOptionsImpl$forceMinBlankLinesAfterComments$delegate$lambda(this));
  }
  l59() {
    return this.z58_1;
  }
  j57() {
    var tmp0 = this.a59_1;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('tabSize', 1, tmp, FormatterOptionsImpl$_get_tabSize_$ref_hwkkhy(), null);
    return tmp0.k3();
  }
  k57() {
    var tmp0 = this.b59_1;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('insertSpaces', 1, tmp, FormatterOptionsImpl$_get_insertSpaces_$ref_pa5tks(), null);
    return tmp0.k3();
  }
  l57() {
    var tmp0 = this.c59_1;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('trimTrailingWhitespace', 1, tmp, FormatterOptionsImpl$_get_trimTrailingWhitespace_$ref_5jjnm9(), null);
    return tmp0.k3();
  }
  m57() {
    var tmp0 = this.d59_1;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('insertFinalNewline', 1, tmp, FormatterOptionsImpl$_get_insertFinalNewline_$ref_negokt(), null);
    return tmp0.k3();
  }
  n57() {
    var tmp0 = this.e59_1;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('trimFinalNewlines', 1, tmp, FormatterOptionsImpl$_get_trimFinalNewlines_$ref_mabf19(), null);
    return tmp0.k3();
  }
  q57() {
    var tmp0 = this.f59_1;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('indentComments', 1, tmp, FormatterOptionsImpl$_get_indentComments_$ref_3c1vuy(), null);
    return tmp0.k3();
  }
  r57() {
    var tmp0 = this.g59_1;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('continuationIndent', 1, tmp, FormatterOptionsImpl$_get_continuationIndent_$ref_slxct5(), null);
    return tmp0.k3();
  }
  o57() {
    var tmp0 = this.h59_1;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('minBlankLines', 1, tmp, FormatterOptionsImpl$_get_minBlankLines_$ref_ghgmtv(), null);
    return tmp0.k3();
  }
  p57() {
    var tmp0 = this.i59_1;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('maxBlankLines', 1, tmp, FormatterOptionsImpl$_get_maxBlankLines_$ref_xwldq7(), null);
    return tmp0.k3();
  }
  s57() {
    var tmp0 = this.j59_1;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('newLineChar', 1, tmp, FormatterOptionsImpl$_get_newLineChar_$ref_ipusee(), null);
    return tmp0.k3();
  }
  t57() {
    var tmp0 = this.k59_1;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('forceMinBlankLinesAfterComments', 1, tmp, FormatterOptionsImpl$_get_forceMinBlankLinesAfterComments_$ref_axojzm(), null);
    return tmp0.k3();
  }
  static m59(seen0, opts, serializationConstructorMarker) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_0().x58_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1))
      $this.z58_1 = null;
    else
      $this.z58_1 = opts;
    var tmp = $this;
    tmp.a59_1 = lazy_0(FormatterOptionsImpl$_init_$lambda_68b2ax($this));
    var tmp_0 = $this;
    tmp_0.b59_1 = lazy_0(FormatterOptionsImpl$_init_$lambda_68b2ax_0($this));
    var tmp_1 = $this;
    tmp_1.c59_1 = lazy_0(FormatterOptionsImpl$_init_$lambda_68b2ax_1($this));
    var tmp_2 = $this;
    tmp_2.d59_1 = lazy_0(FormatterOptionsImpl$_init_$lambda_68b2ax_2($this));
    var tmp_3 = $this;
    tmp_3.e59_1 = lazy_0(FormatterOptionsImpl$_init_$lambda_68b2ax_3($this));
    var tmp_4 = $this;
    tmp_4.f59_1 = lazy_0(FormatterOptionsImpl$_init_$lambda_68b2ax_4($this));
    var tmp_5 = $this;
    tmp_5.g59_1 = lazy_0(FormatterOptionsImpl$_init_$lambda_68b2ax_5($this));
    var tmp_6 = $this;
    tmp_6.h59_1 = lazy_0(FormatterOptionsImpl$_init_$lambda_68b2ax_6($this));
    var tmp_7 = $this;
    tmp_7.i59_1 = lazy_0(FormatterOptionsImpl$_init_$lambda_68b2ax_7($this));
    var tmp_8 = $this;
    tmp_8.j59_1 = lazy_0(FormatterOptionsImpl$_init_$lambda_68b2ax_8($this));
    var tmp_9 = $this;
    tmp_9.k59_1 = lazy_0(FormatterOptionsImpl$_init_$lambda_68b2ax_9($this));
    return $this;
  }
}
class FormatterOptionsSerializer {
  constructor() {
    FormatterOptionsSerializer_instance = this;
    var tmp = this;
    tmp.n59_1 = lazy_0(FormatterOptionsSerializer$descriptor$delegate$lambda);
  }
  lr() {
    var tmp0 = this.n59_1;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('descriptor', 1, tmp, FormatterOptionsSerializer$_get_descriptor_$ref_lajlo7(), null);
    return tmp0.k3();
  }
  nr(decoder) {
    var descriptor = this.lr();
    var o = decoder.bw(descriptor);
    var tabSize = null;
    var insertSpaces = null;
    var trimTrailingWhitespace = null;
    var insertFinalNewline = null;
    var trimFinalNewlines = null;
    var minBlankLines = null;
    var maxBlankLines = null;
    var indentComments = null;
    var continuationIndent = null;
    var newLineChar = null;
    var forceMinBlankLinesAfterComments = null;
    var nullableInt = get_nullable(serializer_0(IntCompanionObject_instance));
    var nullableBool = get_nullable(serializer_1(BooleanCompanionObject_instance));
    $l$loop: while (true) {
      var i = o.tw(descriptor);
      switch (i) {
        case 0:
          tabSize = o.qw(descriptor, i, nullableInt);
          break;
        case 1:
          insertSpaces = o.qw(descriptor, i, nullableBool);
          break;
        case 2:
          trimTrailingWhitespace = o.qw(descriptor, i, nullableBool);
          break;
        case 3:
          insertFinalNewline = o.qw(descriptor, i, nullableBool);
          break;
        case 4:
          trimFinalNewlines = o.qw(descriptor, i, nullableBool);
          break;
        case 5:
          minBlankLines = o.qw(descriptor, i, nullableInt);
          break;
        case 6:
          maxBlankLines = o.qw(descriptor, i, nullableInt);
          break;
        case 7:
          indentComments = o.qw(descriptor, i, nullableBool);
          break;
        case 8:
          continuationIndent = o.qw(descriptor, i, nullableInt);
          break;
        case 9:
          newLineChar = o.qw(descriptor, i, get_nullable(serializer_2(StringCompanionObject_instance)));
          break;
        case 10:
          forceMinBlankLinesAfterComments = o.qw(descriptor, i, nullableBool);
          break;
        case -1:
          break $l$loop;
      }
    }
    o.cw(descriptor);
    return (new FormatterOptionsBuilder()).f58(tabSize).g58(insertSpaces).h58(trimTrailingWhitespace).i58(insertFinalNewline).j58(trimFinalNewlines).k58(minBlankLines).l58(maxBlankLines).m58(indentComments).n58(continuationIndent).o58(newLineChar).p58(forceMinBlankLinesAfterComments);
  }
  o59(encoder, value) {
    var nullableBool = get_nullable(serializer_1(BooleanCompanionObject_instance));
    var nullableInt = get_nullable(serializer_0(IntCompanionObject_instance));
    var descriptor = this.lr();
    var o = encoder.bw(descriptor);
    o.vx(descriptor, 0, nullableInt, value.j57());
    o.vx(descriptor, 1, nullableBool, value.k57());
    o.vx(descriptor, 2, nullableBool, value.l57());
    o.vx(descriptor, 3, nullableBool, value.m57());
    o.vx(descriptor, 4, nullableBool, value.n57());
    o.vx(descriptor, 5, nullableInt, value.o57());
    o.vx(descriptor, 6, nullableInt, value.p57());
    o.vx(descriptor, 7, nullableBool, value.q57());
    o.vx(descriptor, 8, nullableInt, value.r57());
    o.vx(descriptor, 9, get_nullable(serializer_2(StringCompanionObject_instance)), value.s57());
    o.vx(descriptor, 10, nullableBool, value.t57());
    o.cw(descriptor);
  }
  mr(encoder, value) {
    return this.o59(encoder, (!(value == null) ? isInterface(value, FormatterOptions) : false) ? value : THROW_CCE());
  }
}
//endregion
function FormatResult$Companion$$childSerializers$_anonymous__qoz48m() {
  return new ReferenceArraySerializer(getKClass(TextEdit), TextEditSerializer_getInstance());
}
function FormatResult$Companion$$childSerializers$_anonymous__qoz48m_0() {
  return new ReferenceArraySerializer(getKClass(EditReason), createSimpleEnumSerializer('com.bedalton.common.lsp.formatter.EditReason', values()));
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
var EditReason_DANGLING_AUTO_COMPLETE_instance;
var EditReason_COMMENT_instance;
var EditReason_SPACE_BETWEEN_BRACKETS_instance;
var EditReason_SPACES_BETWEEN_COMMANDS_instance;
var EditReason_SPACE_NEEDED_instance;
var EditReason_SPACE_TOO_MANY_instance;
var EditReason_NEWLINES_NEEDED_instance;
var EditReason_NEWLINES_TOO_MANY_instance;
var EditReason_SPACE_TOKEN_instance;
var EditReason_INCORRECT_CASE_instance;
var EditReason_TAB_CHANGE_instance;
function values() {
  return [EditReason_DANGLING_AUTO_COMPLETE_getInstance(), EditReason_COMMENT_getInstance(), EditReason_SPACE_BETWEEN_BRACKETS_getInstance(), EditReason_SPACES_BETWEEN_COMMANDS_getInstance(), EditReason_SPACE_NEEDED_getInstance(), EditReason_SPACE_TOO_MANY_getInstance(), EditReason_NEWLINES_NEEDED_getInstance(), EditReason_NEWLINES_TOO_MANY_getInstance(), EditReason_SPACE_TOKEN_getInstance(), EditReason_INCORRECT_CASE_getInstance(), EditReason_TAB_CHANGE_getInstance()];
}
var EditReason_entriesInitialized;
function EditReason_initEntries() {
  if (EditReason_entriesInitialized)
    return Unit_instance;
  EditReason_entriesInitialized = true;
  EditReason_DANGLING_AUTO_COMPLETE_instance = new EditReason('DANGLING_AUTO_COMPLETE', 0, 'auto-complete.dangling');
  EditReason_COMMENT_instance = new EditReason('COMMENT', 1, 'comment');
  EditReason_SPACE_BETWEEN_BRACKETS_instance = new EditReason('SPACE_BETWEEN_BRACKETS', 2, 'spacing.brackets');
  EditReason_SPACES_BETWEEN_COMMANDS_instance = new EditReason('SPACES_BETWEEN_COMMANDS', 3, 'spacing.command');
  EditReason_SPACE_NEEDED_instance = new EditReason('SPACE_NEEDED', 4, 'spacing.needed');
  EditReason_SPACE_TOO_MANY_instance = new EditReason('SPACE_TOO_MANY', 5, 'spacing.remove');
  EditReason_NEWLINES_NEEDED_instance = new EditReason('NEWLINES_NEEDED', 6, 'newline.add');
  EditReason_NEWLINES_TOO_MANY_instance = new EditReason('NEWLINES_TOO_MANY', 7, 'newline.remove');
  EditReason_SPACE_TOKEN_instance = new EditReason('SPACE_TOKEN', 8, 'spacing.tokens');
  EditReason_INCORRECT_CASE_instance = new EditReason('INCORRECT_CASE', 9, 'case');
  EditReason_TAB_CHANGE_instance = new EditReason('TAB_CHANGE', 10, 'spacing.tabs');
}
function EditReason_DANGLING_AUTO_COMPLETE_getInstance() {
  EditReason_initEntries();
  return EditReason_DANGLING_AUTO_COMPLETE_instance;
}
function EditReason_COMMENT_getInstance() {
  EditReason_initEntries();
  return EditReason_COMMENT_instance;
}
function EditReason_SPACE_BETWEEN_BRACKETS_getInstance() {
  EditReason_initEntries();
  return EditReason_SPACE_BETWEEN_BRACKETS_instance;
}
function EditReason_SPACES_BETWEEN_COMMANDS_getInstance() {
  EditReason_initEntries();
  return EditReason_SPACES_BETWEEN_COMMANDS_instance;
}
function EditReason_SPACE_NEEDED_getInstance() {
  EditReason_initEntries();
  return EditReason_SPACE_NEEDED_instance;
}
function EditReason_SPACE_TOO_MANY_getInstance() {
  EditReason_initEntries();
  return EditReason_SPACE_TOO_MANY_instance;
}
function EditReason_NEWLINES_NEEDED_getInstance() {
  EditReason_initEntries();
  return EditReason_NEWLINES_NEEDED_instance;
}
function EditReason_NEWLINES_TOO_MANY_getInstance() {
  EditReason_initEntries();
  return EditReason_NEWLINES_TOO_MANY_instance;
}
function EditReason_SPACE_TOKEN_getInstance() {
  EditReason_initEntries();
  return EditReason_SPACE_TOKEN_instance;
}
function EditReason_INCORRECT_CASE_getInstance() {
  EditReason_initEntries();
  return EditReason_INCORRECT_CASE_instance;
}
function EditReason_TAB_CHANGE_getInstance() {
  EditReason_initEntries();
  return EditReason_TAB_CHANGE_instance;
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
function FormatterOptionsImpl$tabSize$delegate$lambda(this$0) {
  return () => {
    var tmp0_safe_receiver = this$0.l59();
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.j57();
    return tmp1_elvis_lhs == null ? 4 : tmp1_elvis_lhs;
  };
}
function FormatterOptionsImpl$_get_tabSize_$ref_hwkkhy() {
  return (p0) => p0.j57();
}
function FormatterOptionsImpl$insertSpaces$delegate$lambda(this$0) {
  return () => {
    var tmp0_safe_receiver = this$0.l59();
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.k57();
    return tmp1_elvis_lhs == null ? true : tmp1_elvis_lhs;
  };
}
function FormatterOptionsImpl$_get_insertSpaces_$ref_pa5tks() {
  return (p0) => p0.k57();
}
function FormatterOptionsImpl$trimTrailingWhitespace$delegate$lambda(this$0) {
  return () => {
    var tmp0_safe_receiver = this$0.l59();
    return tmp0_safe_receiver == null ? null : tmp0_safe_receiver.l57();
  };
}
function FormatterOptionsImpl$_get_trimTrailingWhitespace_$ref_5jjnm9() {
  return (p0) => p0.l57();
}
function FormatterOptionsImpl$insertFinalNewline$delegate$lambda(this$0) {
  return () => {
    var tmp0_safe_receiver = this$0.l59();
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.m57();
    return tmp1_elvis_lhs == null ? false : tmp1_elvis_lhs;
  };
}
function FormatterOptionsImpl$_get_insertFinalNewline_$ref_negokt() {
  return (p0) => p0.m57();
}
function FormatterOptionsImpl$trimFinalNewlines$delegate$lambda(this$0) {
  return () => {
    var tmp0_safe_receiver = this$0.l59();
    return tmp0_safe_receiver == null ? null : tmp0_safe_receiver.n57();
  };
}
function FormatterOptionsImpl$_get_trimFinalNewlines_$ref_mabf19() {
  return (p0) => p0.n57();
}
function FormatterOptionsImpl$indentComments$delegate$lambda(this$0) {
  return () => {
    var tmp0_safe_receiver = this$0.l59();
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.q57();
    return tmp1_elvis_lhs == null ? true : tmp1_elvis_lhs;
  };
}
function FormatterOptionsImpl$_get_indentComments_$ref_3c1vuy() {
  return (p0) => p0.q57();
}
function FormatterOptionsImpl$continuationIndent$delegate$lambda(this$0) {
  return () => {
    var tmp0_safe_receiver = this$0.l59();
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.r57();
    return tmp1_elvis_lhs == null ? get_defaultContinuationIndent(this$0) : tmp1_elvis_lhs;
  };
}
function FormatterOptionsImpl$_get_continuationIndent_$ref_slxct5() {
  return (p0) => p0.r57();
}
function FormatterOptionsImpl$minBlankLines$delegate$lambda(this$0) {
  return () => {
    var tmp0_safe_receiver = this$0.l59();
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.o57();
    // Inline function 'kotlin.math.max' call
    var b = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    return Math.max(0, b);
  };
}
function FormatterOptionsImpl$_get_minBlankLines_$ref_ghgmtv() {
  return (p0) => p0.o57();
}
function FormatterOptionsImpl$maxBlankLines$delegate$lambda(this$0) {
  return () => {
    var tmp0_safe_receiver = this$0.l59();
    return coalesceMaxBlankLines(tmp0_safe_receiver == null ? null : tmp0_safe_receiver.p57());
  };
}
function FormatterOptionsImpl$_get_maxBlankLines_$ref_xwldq7() {
  return (p0) => p0.p57();
}
function FormatterOptionsImpl$newLineChar$delegate$lambda(this$0) {
  return () => {
    var tmp0_safe_receiver = this$0.l59();
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.s57();
    return tmp1_elvis_lhs == null ? '\n' : tmp1_elvis_lhs;
  };
}
function FormatterOptionsImpl$_get_newLineChar_$ref_ipusee() {
  return (p0) => p0.s57();
}
function FormatterOptionsImpl$forceMinBlankLinesAfterComments$delegate$lambda(this$0) {
  return () => {
    var tmp0_safe_receiver = this$0.l59();
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.t57();
    return tmp1_elvis_lhs == null ? false : tmp1_elvis_lhs;
  };
}
function FormatterOptionsImpl$_get_forceMinBlankLinesAfterComments_$ref_axojzm() {
  return (p0) => p0.t57();
}
function FormatterOptionsImpl$_init_$lambda_68b2ax(this$0) {
  return () => {
    var tmp0_safe_receiver = this$0.l59();
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.j57();
    return tmp1_elvis_lhs == null ? 4 : tmp1_elvis_lhs;
  };
}
function FormatterOptionsImpl$_init_$lambda_68b2ax_0(this$0) {
  return () => {
    var tmp0_safe_receiver = this$0.l59();
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.k57();
    return tmp1_elvis_lhs == null ? true : tmp1_elvis_lhs;
  };
}
function FormatterOptionsImpl$_init_$lambda_68b2ax_1(this$0) {
  return () => {
    var tmp0_safe_receiver = this$0.l59();
    return tmp0_safe_receiver == null ? null : tmp0_safe_receiver.l57();
  };
}
function FormatterOptionsImpl$_init_$lambda_68b2ax_2(this$0) {
  return () => {
    var tmp0_safe_receiver = this$0.l59();
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.m57();
    return tmp1_elvis_lhs == null ? false : tmp1_elvis_lhs;
  };
}
function FormatterOptionsImpl$_init_$lambda_68b2ax_3(this$0) {
  return () => {
    var tmp0_safe_receiver = this$0.l59();
    return tmp0_safe_receiver == null ? null : tmp0_safe_receiver.n57();
  };
}
function FormatterOptionsImpl$_init_$lambda_68b2ax_4(this$0) {
  return () => {
    var tmp0_safe_receiver = this$0.l59();
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.q57();
    return tmp1_elvis_lhs == null ? true : tmp1_elvis_lhs;
  };
}
function FormatterOptionsImpl$_init_$lambda_68b2ax_5(this$0) {
  return () => {
    var tmp0_safe_receiver = this$0.l59();
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.r57();
    return tmp1_elvis_lhs == null ? get_defaultContinuationIndent(this$0) : tmp1_elvis_lhs;
  };
}
function FormatterOptionsImpl$_init_$lambda_68b2ax_6(this$0) {
  return () => {
    var tmp0_safe_receiver = this$0.l59();
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.o57();
    // Inline function 'kotlin.math.max' call
    var b = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    return Math.max(0, b);
  };
}
function FormatterOptionsImpl$_init_$lambda_68b2ax_7(this$0) {
  return () => {
    var tmp0_safe_receiver = this$0.l59();
    return coalesceMaxBlankLines(tmp0_safe_receiver == null ? null : tmp0_safe_receiver.p57());
  };
}
function FormatterOptionsImpl$_init_$lambda_68b2ax_8(this$0) {
  return () => {
    var tmp0_safe_receiver = this$0.l59();
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.s57();
    return tmp1_elvis_lhs == null ? '\n' : tmp1_elvis_lhs;
  };
}
function FormatterOptionsImpl$_init_$lambda_68b2ax_9(this$0) {
  return () => {
    var tmp0_safe_receiver = this$0.l59();
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.t57();
    return tmp1_elvis_lhs == null ? false : tmp1_elvis_lhs;
  };
}
function get_defaultContinuationIndent(_this__u8e3s4) {
  // Inline function 'kotlin.math.floor' call
  var x = _this__u8e3s4.j57() / 2.0;
  var tmp$ret$0 = Math.floor(x);
  // Inline function 'kotlin.math.max' call
  var b = numberToInt(tmp$ret$0);
  return Math.max(1, b);
}
function coalesceMaxBlankLines(maxBlankLines) {
  var tmp;
  if ((maxBlankLines == null ? -1 : maxBlankLines) < 0) {
    tmp = 32767;
  } else {
    tmp = maxBlankLines == null ? 32767 : maxBlankLines;
  }
  return tmp;
}
function FormatterOptionsSerializer$descriptor$delegate$lambda() {
  return buildClassSerialDescriptor('FormatterOptions', [], FormatterOptionsSerializer$descriptor$delegate$lambda$lambda);
}
function FormatterOptionsSerializer$descriptor$delegate$lambda$lambda($this$buildClassSerialDescriptor) {
  // Inline function 'kotlinx.serialization.descriptors.element' call
  var annotations = emptyList();
  // Inline function 'kotlinx.serialization.serializer' call
  // Inline function 'kotlinx.serialization.internal.cast' call
  var this_0 = serializer(createKType(PrimitiveClasses_getInstance().ee(), arrayOf([]), false));
  var descriptor = (isInterface(this_0, KSerializer) ? this_0 : THROW_CCE()).lr();
  $this$buildClassSerialDescriptor.xu('tabSize', descriptor, annotations, false);
  // Inline function 'kotlinx.serialization.descriptors.element' call
  var elementName = 'insertSpaces';
  var annotations_0 = emptyList();
  // Inline function 'kotlinx.serialization.serializer' call
  // Inline function 'kotlinx.serialization.internal.cast' call
  var this_1 = serializer(createKType(PrimitiveClasses_getInstance().be(), arrayOf([]), false));
  var descriptor_0 = (isInterface(this_1, KSerializer) ? this_1 : THROW_CCE()).lr();
  $this$buildClassSerialDescriptor.xu(elementName, descriptor_0, annotations_0, false);
  // Inline function 'kotlinx.serialization.descriptors.element' call
  var elementName_0 = 'trimTrailingWhitespace';
  var annotations_1 = emptyList();
  // Inline function 'kotlinx.serialization.serializer' call
  // Inline function 'kotlinx.serialization.internal.cast' call
  var this_2 = serializer(createKType(PrimitiveClasses_getInstance().be(), arrayOf([]), true));
  var descriptor_1 = (isInterface(this_2, KSerializer) ? this_2 : THROW_CCE()).lr();
  $this$buildClassSerialDescriptor.xu(elementName_0, descriptor_1, annotations_1, false);
  // Inline function 'kotlinx.serialization.descriptors.element' call
  var elementName_1 = 'insertFinalNewline';
  var annotations_2 = emptyList();
  // Inline function 'kotlinx.serialization.serializer' call
  // Inline function 'kotlinx.serialization.internal.cast' call
  var this_3 = serializer(createKType(PrimitiveClasses_getInstance().be(), arrayOf([]), true));
  var descriptor_2 = (isInterface(this_3, KSerializer) ? this_3 : THROW_CCE()).lr();
  $this$buildClassSerialDescriptor.xu(elementName_1, descriptor_2, annotations_2, false);
  // Inline function 'kotlinx.serialization.descriptors.element' call
  var elementName_2 = 'trimFinalNewlines';
  var annotations_3 = emptyList();
  // Inline function 'kotlinx.serialization.serializer' call
  // Inline function 'kotlinx.serialization.internal.cast' call
  var this_4 = serializer(createKType(PrimitiveClasses_getInstance().be(), arrayOf([]), true));
  var descriptor_3 = (isInterface(this_4, KSerializer) ? this_4 : THROW_CCE()).lr();
  $this$buildClassSerialDescriptor.xu(elementName_2, descriptor_3, annotations_3, false);
  // Inline function 'kotlinx.serialization.descriptors.element' call
  var elementName_3 = 'minBlankLines';
  var annotations_4 = emptyList();
  // Inline function 'kotlinx.serialization.serializer' call
  // Inline function 'kotlinx.serialization.internal.cast' call
  var this_5 = serializer(createKType(PrimitiveClasses_getInstance().ee(), arrayOf([]), true));
  var descriptor_4 = (isInterface(this_5, KSerializer) ? this_5 : THROW_CCE()).lr();
  $this$buildClassSerialDescriptor.xu(elementName_3, descriptor_4, annotations_4, false);
  // Inline function 'kotlinx.serialization.descriptors.element' call
  var elementName_4 = 'maxBlankLines';
  var annotations_5 = emptyList();
  // Inline function 'kotlinx.serialization.serializer' call
  // Inline function 'kotlinx.serialization.internal.cast' call
  var this_6 = serializer(createKType(PrimitiveClasses_getInstance().ee(), arrayOf([]), true));
  var descriptor_5 = (isInterface(this_6, KSerializer) ? this_6 : THROW_CCE()).lr();
  $this$buildClassSerialDescriptor.xu(elementName_4, descriptor_5, annotations_5, false);
  // Inline function 'kotlinx.serialization.descriptors.element' call
  var elementName_5 = 'indentComments';
  var annotations_6 = emptyList();
  // Inline function 'kotlinx.serialization.serializer' call
  // Inline function 'kotlinx.serialization.internal.cast' call
  var this_7 = serializer(createKType(PrimitiveClasses_getInstance().be(), arrayOf([]), true));
  var descriptor_6 = (isInterface(this_7, KSerializer) ? this_7 : THROW_CCE()).lr();
  $this$buildClassSerialDescriptor.xu(elementName_5, descriptor_6, annotations_6, false);
  // Inline function 'kotlinx.serialization.descriptors.element' call
  var elementName_6 = 'continuationIndent';
  var annotations_7 = emptyList();
  // Inline function 'kotlinx.serialization.serializer' call
  // Inline function 'kotlinx.serialization.internal.cast' call
  var this_8 = serializer(createKType(PrimitiveClasses_getInstance().ee(), arrayOf([]), true));
  var descriptor_7 = (isInterface(this_8, KSerializer) ? this_8 : THROW_CCE()).lr();
  $this$buildClassSerialDescriptor.xu(elementName_6, descriptor_7, annotations_7, false);
  // Inline function 'kotlinx.serialization.descriptors.element' call
  var elementName_7 = 'newLineChar';
  var annotations_8 = emptyList();
  // Inline function 'kotlinx.serialization.serializer' call
  // Inline function 'kotlinx.serialization.internal.cast' call
  var this_9 = serializer(createKType(PrimitiveClasses_getInstance().je(), arrayOf([]), true));
  var descriptor_8 = (isInterface(this_9, KSerializer) ? this_9 : THROW_CCE()).lr();
  $this$buildClassSerialDescriptor.xu(elementName_7, descriptor_8, annotations_8, false);
  // Inline function 'kotlinx.serialization.descriptors.element' call
  var elementName_8 = 'forceMinBlankLinesAfterComments';
  var annotations_9 = emptyList();
  // Inline function 'kotlinx.serialization.serializer' call
  // Inline function 'kotlinx.serialization.internal.cast' call
  var this_10 = serializer(createKType(PrimitiveClasses_getInstance().be(), arrayOf([]), true));
  var descriptor_9 = (isInterface(this_10, KSerializer) ? this_10 : THROW_CCE()).lr();
  $this$buildClassSerialDescriptor.xu(elementName_8, descriptor_9, annotations_9, false);
  return Unit_instance;
}
function FormatterOptionsSerializer$_get_descriptor_$ref_lajlo7() {
  return (p0) => p0.lr();
}
var FormatterOptionsSerializer_instance;
function FormatterOptionsSerializer_getInstance() {
  if (FormatterOptionsSerializer_instance === VOID)
    new FormatterOptionsSerializer();
  return FormatterOptionsSerializer_instance;
}
//region block: post-declaration
initMetadataForCompanion(Companion);
protoOf($serializer).m14 = typeParametersSerializers;
initMetadataForObject($serializer, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(FormatResult, 'FormatResult', VOID, VOID, VOID, VOID, VOID, {0: $serializer_getInstance});
initMetadataForClass(EditReason, 'EditReason');
initMetadataForInterface(FormatterOptions, 'FormatterOptions', VOID, VOID, VOID, VOID, VOID, {0: FormatterOptionsSerializer_getInstance});
initMetadataForClass(FormatterOptionsBuilder, 'FormatterOptionsBuilder', FormatterOptionsBuilder, VOID, [FormatterOptions]);
initMetadataForCompanion(Companion_0);
protoOf($serializer_0).m14 = typeParametersSerializers;
initMetadataForObject($serializer_0, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(FormatterOptionsImpl, 'FormatterOptionsImpl', FormatterOptionsImpl, VOID, [FormatterOptions], VOID, VOID, {0: $serializer_getInstance_0});
initMetadataForObject(FormatterOptionsSerializer, 'FormatterOptionsSerializer', VOID, VOID, [KSerializer]);
//endregion
//region block: init
Companion_instance_0 = new Companion_0();
//endregion
//region block: exports
export {
  FormatResult as FormatResult115095obxt6jw,
  FormatterOptionsImpl as FormatterOptionsImplhxwshkac15d8,
  FormatterOptions as FormatterOptions30b0j2hzx8867,
  FormatterOptionsSerializer_getInstance as FormatterOptionsSerializer_getInstanceofehaqxrpm5y,
  EditReason_INCORRECT_CASE_getInstance as EditReason_INCORRECT_CASE_getInstance1y65lwjubz3iv,
  EditReason_NEWLINES_NEEDED_getInstance as EditReason_NEWLINES_NEEDED_getInstance24861lh5a763c,
  EditReason_NEWLINES_TOO_MANY_getInstance as EditReason_NEWLINES_TOO_MANY_getInstance3h5jgowgliuvp,
  EditReason_SPACE_NEEDED_getInstance as EditReason_SPACE_NEEDED_getInstance37n8d0srbuhik,
  EditReason_SPACE_TOO_MANY_getInstance as EditReason_SPACE_TOO_MANY_getInstanceb0ks7h26wtjt,
  EditReason_TAB_CHANGE_getInstance as EditReason_TAB_CHANGE_getInstance2x8k1k26kt671,
};
//endregion

//# sourceMappingURL=common-lsp-formatter.mjs.map
