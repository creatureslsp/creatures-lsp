import {
  initMetadataForCompanion1wyw17z38v6ac as initMetadataForCompanion,
  Unit_instancev9v8hjid95df as Unit_instance,
  THROW_CCE2g6jy02ryeudk as THROW_CCE,
  protoOf180f3jzyo7rfj as protoOf,
  initMetadataForObject1cxne3s9w65el as initMetadataForObject,
  VOID3gxj6tk5isa35 as VOID,
  toString30pk9tzaqopn as toString,
  getStringHashCode26igk1bx568vk as getStringHashCode,
  getBooleanHashCode1bbj3u6b3v0a7 as getBooleanHashCode,
  hashCodeq5arwsb9dgti as hashCode,
  equals2au1ep9vhcato as equals,
  createThis2j2avj17cvnv2 as createThis,
  initMetadataForClassbxx6q50dy2s7 as initMetadataForClass,
  getKClass3t8tygqu4lcxf as getKClass,
  LazyThreadSafetyMode_PUBLICATION_getInstance3qslfm3vqg6y3 as LazyThreadSafetyMode_PUBLICATION_getInstance,
  lazy1261dae0bgscp as lazy,
  copyToArray2j022khrow2yi as copyToArray,
  getKClassFromExpression348iqjl4fnx2f as getKClassFromExpression,
  contentEqualsaf55p28mnw74 as contentEquals,
  contentHashCode2i020q5tbeh2s as contentHashCode,
  toString1pkumu07cwy4m as toString_0,
} from './kotlin-kotlin-stdlib.mjs';
import {
  PluginGeneratedSerialDescriptorqdzeg5asqhfg as PluginGeneratedSerialDescriptor,
  IntSerializer_getInstanceuhm8c1wku08l as IntSerializer_getInstance,
  StringSerializer_getInstance11v9md0a7d9yk as StringSerializer_getInstance,
  BooleanSerializer_getInstance2fsi2wywr82nt as BooleanSerializer_getInstance,
  UnknownFieldExceptiona60e3a6v1xqo as UnknownFieldException,
  get_nullable197rfua9r7fsz as get_nullable,
  typeParametersSerializers2likxjr48tr7y as typeParametersSerializers,
  GeneratedSerializer1f7t7hssdd2ws as GeneratedSerializer,
  throwMissingFieldException2cmke0v3ynf14 as throwMissingFieldException,
  SerializableWithd2dap36updxd as SerializableWith,
  ReferenceArraySerializer3juj1vqolxkrs as ReferenceArraySerializer,
} from './kotlinx-serialization-kotlinx-serialization-core.mjs';
import { $serializer_getInstance1ivhwy0byi76u as $serializer_getInstance } from './common-lsp-edit.mjs';
//region block: imports
var imul = Math.imul;
//endregion
//region block: pre-declaration
class Companion {}
class $serializer {
  constructor() {
    $serializer_instance = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('com.bedalton.common.lsp.completion.CompletionItem', this, 12);
    tmp0_serialDesc.w13('label', false);
    tmp0_serialDesc.w13('kind', true);
    tmp0_serialDesc.w13('detail', true);
    tmp0_serialDesc.w13('documentation', true);
    tmp0_serialDesc.w13('preselect', true);
    tmp0_serialDesc.w13('sortText', true);
    tmp0_serialDesc.w13('filterText', true);
    tmp0_serialDesc.w13('insertText', true);
    tmp0_serialDesc.w13('insertTextFormat', true);
    tmp0_serialDesc.w13('insertTextMode', true);
    tmp0_serialDesc.w13('textEdit', true);
    tmp0_serialDesc.w13('command', true);
    this.v52_1 = tmp0_serialDesc;
  }
  w52(encoder, value) {
    var tmp0_desc = this.v52_1;
    var tmp1_output = encoder.bw(tmp0_desc);
    tmp1_output.rx(tmp0_desc, 0, value.x52_1);
    if (tmp1_output.zx(tmp0_desc, 1) ? true : !(value.y52_1 == null)) {
      tmp1_output.vx(tmp0_desc, 1, IntSerializer_getInstance(), value.y52_1);
    }
    if (tmp1_output.zx(tmp0_desc, 2) ? true : !(value.z52_1 == null)) {
      tmp1_output.vx(tmp0_desc, 2, StringSerializer_getInstance(), value.z52_1);
    }
    if (tmp1_output.zx(tmp0_desc, 3) ? true : !(value.a53_1 == null)) {
      tmp1_output.vx(tmp0_desc, 3, StringSerializer_getInstance(), value.a53_1);
    }
    if (tmp1_output.zx(tmp0_desc, 4) ? true : !(value.b53_1 == null)) {
      tmp1_output.vx(tmp0_desc, 4, BooleanSerializer_getInstance(), value.b53_1);
    }
    if (tmp1_output.zx(tmp0_desc, 5) ? true : !(value.c53_1 == null)) {
      tmp1_output.vx(tmp0_desc, 5, StringSerializer_getInstance(), value.c53_1);
    }
    if (tmp1_output.zx(tmp0_desc, 6) ? true : !(value.d53_1 == null)) {
      tmp1_output.vx(tmp0_desc, 6, StringSerializer_getInstance(), value.d53_1);
    }
    if (tmp1_output.zx(tmp0_desc, 7) ? true : !(value.e53_1 == null)) {
      tmp1_output.vx(tmp0_desc, 7, StringSerializer_getInstance(), value.e53_1);
    }
    if (tmp1_output.zx(tmp0_desc, 8) ? true : !(value.f53_1 == null)) {
      tmp1_output.vx(tmp0_desc, 8, IntSerializer_getInstance(), value.f53_1);
    }
    if (tmp1_output.zx(tmp0_desc, 9) ? true : !(value.g53_1 == null)) {
      tmp1_output.vx(tmp0_desc, 9, IntSerializer_getInstance(), value.g53_1);
    }
    if (tmp1_output.zx(tmp0_desc, 10) ? true : !(value.h53_1 == null)) {
      tmp1_output.vx(tmp0_desc, 10, $serializer_getInstance(), value.h53_1);
    }
    if (tmp1_output.zx(tmp0_desc, 11) ? true : !(value.i53_1 == null)) {
      tmp1_output.vx(tmp0_desc, 11, $serializer_getInstance_3(), value.i53_1);
    }
    tmp1_output.cw(tmp0_desc);
  }
  mr(encoder, value) {
    return this.w52(encoder, value instanceof CompletionItem ? value : THROW_CCE());
  }
  nr(decoder) {
    var tmp0_desc = this.v52_1;
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
    var tmp11_local7 = null;
    var tmp12_local8 = null;
    var tmp13_local9 = null;
    var tmp14_local10 = null;
    var tmp15_local11 = null;
    var tmp17_input = decoder.bw(tmp0_desc);
    if (tmp17_input.sw()) {
      tmp4_local0 = tmp17_input.lw(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp17_input.pw(tmp0_desc, 1, IntSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp17_input.pw(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp17_input.pw(tmp0_desc, 3, StringSerializer_getInstance(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp17_input.pw(tmp0_desc, 4, BooleanSerializer_getInstance(), tmp8_local4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp9_local5 = tmp17_input.pw(tmp0_desc, 5, StringSerializer_getInstance(), tmp9_local5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
      tmp10_local6 = tmp17_input.pw(tmp0_desc, 6, StringSerializer_getInstance(), tmp10_local6);
      tmp3_bitMask0 = tmp3_bitMask0 | 64;
      tmp11_local7 = tmp17_input.pw(tmp0_desc, 7, StringSerializer_getInstance(), tmp11_local7);
      tmp3_bitMask0 = tmp3_bitMask0 | 128;
      tmp12_local8 = tmp17_input.pw(tmp0_desc, 8, IntSerializer_getInstance(), tmp12_local8);
      tmp3_bitMask0 = tmp3_bitMask0 | 256;
      tmp13_local9 = tmp17_input.pw(tmp0_desc, 9, IntSerializer_getInstance(), tmp13_local9);
      tmp3_bitMask0 = tmp3_bitMask0 | 512;
      tmp14_local10 = tmp17_input.pw(tmp0_desc, 10, $serializer_getInstance(), tmp14_local10);
      tmp3_bitMask0 = tmp3_bitMask0 | 1024;
      tmp15_local11 = tmp17_input.pw(tmp0_desc, 11, $serializer_getInstance_3(), tmp15_local11);
      tmp3_bitMask0 = tmp3_bitMask0 | 2048;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp17_input.tw(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp17_input.lw(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp17_input.pw(tmp0_desc, 1, IntSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp17_input.pw(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp17_input.pw(tmp0_desc, 3, StringSerializer_getInstance(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp17_input.pw(tmp0_desc, 4, BooleanSerializer_getInstance(), tmp8_local4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp9_local5 = tmp17_input.pw(tmp0_desc, 5, StringSerializer_getInstance(), tmp9_local5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          case 6:
            tmp10_local6 = tmp17_input.pw(tmp0_desc, 6, StringSerializer_getInstance(), tmp10_local6);
            tmp3_bitMask0 = tmp3_bitMask0 | 64;
            break;
          case 7:
            tmp11_local7 = tmp17_input.pw(tmp0_desc, 7, StringSerializer_getInstance(), tmp11_local7);
            tmp3_bitMask0 = tmp3_bitMask0 | 128;
            break;
          case 8:
            tmp12_local8 = tmp17_input.pw(tmp0_desc, 8, IntSerializer_getInstance(), tmp12_local8);
            tmp3_bitMask0 = tmp3_bitMask0 | 256;
            break;
          case 9:
            tmp13_local9 = tmp17_input.pw(tmp0_desc, 9, IntSerializer_getInstance(), tmp13_local9);
            tmp3_bitMask0 = tmp3_bitMask0 | 512;
            break;
          case 10:
            tmp14_local10 = tmp17_input.pw(tmp0_desc, 10, $serializer_getInstance(), tmp14_local10);
            tmp3_bitMask0 = tmp3_bitMask0 | 1024;
            break;
          case 11:
            tmp15_local11 = tmp17_input.pw(tmp0_desc, 11, $serializer_getInstance_3(), tmp15_local11);
            tmp3_bitMask0 = tmp3_bitMask0 | 2048;
            break;
          default:
            throw UnknownFieldException.et(tmp2_index);
        }
      }
    tmp17_input.cw(tmp0_desc);
    return CompletionItem.k53(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, tmp10_local6, tmp11_local7, tmp12_local8, tmp13_local9, tmp14_local10, tmp15_local11, null);
  }
  lr() {
    return this.v52_1;
  }
  l14() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), get_nullable(IntSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(IntSerializer_getInstance()), get_nullable(IntSerializer_getInstance()), get_nullable($serializer_getInstance()), get_nullable($serializer_getInstance_3())];
  }
}
class CompletionItem {
  constructor(label, kind, detail, documentation, preselect, sortText, filterText, insertText, insertTextFormat, insertTextMode, textEdit, command, data) {
    kind = kind === VOID ? null : kind;
    detail = detail === VOID ? null : detail;
    documentation = documentation === VOID ? null : documentation;
    preselect = preselect === VOID ? null : preselect;
    sortText = sortText === VOID ? null : sortText;
    filterText = filterText === VOID ? null : filterText;
    insertText = insertText === VOID ? null : insertText;
    insertTextFormat = insertTextFormat === VOID ? null : insertTextFormat;
    insertTextMode = insertTextMode === VOID ? null : insertTextMode;
    textEdit = textEdit === VOID ? null : textEdit;
    command = command === VOID ? null : command;
    data = data === VOID ? null : data;
    this.x52_1 = label;
    this.y52_1 = kind;
    this.z52_1 = detail;
    this.a53_1 = documentation;
    this.b53_1 = preselect;
    this.c53_1 = sortText;
    this.d53_1 = filterText;
    this.e53_1 = insertText;
    this.f53_1 = insertTextFormat;
    this.g53_1 = insertTextMode;
    this.h53_1 = textEdit;
    this.i53_1 = command;
    this.j53_1 = data;
  }
  l53(label, kind, detail, documentation, preselect, sortText, filterText, insertText, insertTextFormat, insertTextMode, textEdit, command, data) {
    return new CompletionItem(label, kind, detail, documentation, preselect, sortText, filterText, insertText, insertTextFormat, insertTextMode, textEdit, command, data);
  }
  m53(label, kind, detail, documentation, preselect, sortText, filterText, insertText, insertTextFormat, insertTextMode, textEdit, command, data, $super) {
    label = label === VOID ? this.x52_1 : label;
    kind = kind === VOID ? this.y52_1 : kind;
    detail = detail === VOID ? this.z52_1 : detail;
    documentation = documentation === VOID ? this.a53_1 : documentation;
    preselect = preselect === VOID ? this.b53_1 : preselect;
    sortText = sortText === VOID ? this.c53_1 : sortText;
    filterText = filterText === VOID ? this.d53_1 : filterText;
    insertText = insertText === VOID ? this.e53_1 : insertText;
    insertTextFormat = insertTextFormat === VOID ? this.f53_1 : insertTextFormat;
    insertTextMode = insertTextMode === VOID ? this.g53_1 : insertTextMode;
    textEdit = textEdit === VOID ? this.h53_1 : textEdit;
    command = command === VOID ? this.i53_1 : command;
    data = data === VOID ? this.j53_1 : data;
    return $super === VOID ? this.l53(label, kind, detail, documentation, preselect, sortText, filterText, insertText, insertTextFormat, insertTextMode, textEdit, command, data) : $super.l53.call(this, label, kind, detail, documentation, preselect, sortText, filterText, insertText, insertTextFormat, insertTextMode, textEdit, command, data);
  }
  toString() {
    return 'CompletionItem(label=' + this.x52_1 + ', kind=' + this.y52_1 + ', detail=' + this.z52_1 + ', documentation=' + this.a53_1 + ', preselect=' + this.b53_1 + ', sortText=' + this.c53_1 + ', filterText=' + this.d53_1 + ', insertText=' + this.e53_1 + ', insertTextFormat=' + this.f53_1 + ', insertTextMode=' + this.g53_1 + ', textEdit=' + toString(this.h53_1) + ', command=' + toString(this.i53_1) + ', data=' + toString(this.j53_1) + ')';
  }
  hashCode() {
    var result = getStringHashCode(this.x52_1);
    result = imul(result, 31) + (this.y52_1 == null ? 0 : this.y52_1) | 0;
    result = imul(result, 31) + (this.z52_1 == null ? 0 : getStringHashCode(this.z52_1)) | 0;
    result = imul(result, 31) + (this.a53_1 == null ? 0 : getStringHashCode(this.a53_1)) | 0;
    result = imul(result, 31) + (this.b53_1 == null ? 0 : getBooleanHashCode(this.b53_1)) | 0;
    result = imul(result, 31) + (this.c53_1 == null ? 0 : getStringHashCode(this.c53_1)) | 0;
    result = imul(result, 31) + (this.d53_1 == null ? 0 : getStringHashCode(this.d53_1)) | 0;
    result = imul(result, 31) + (this.e53_1 == null ? 0 : getStringHashCode(this.e53_1)) | 0;
    result = imul(result, 31) + (this.f53_1 == null ? 0 : this.f53_1) | 0;
    result = imul(result, 31) + (this.g53_1 == null ? 0 : this.g53_1) | 0;
    result = imul(result, 31) + (this.h53_1 == null ? 0 : this.h53_1.hashCode()) | 0;
    result = imul(result, 31) + (this.i53_1 == null ? 0 : this.i53_1.hashCode()) | 0;
    result = imul(result, 31) + (this.j53_1 == null ? 0 : hashCode(this.j53_1)) | 0;
    return result;
  }
  equals(other) {
    if (this === other)
      return true;
    if (!(other instanceof CompletionItem))
      return false;
    if (!(this.x52_1 === other.x52_1))
      return false;
    if (!(this.y52_1 == other.y52_1))
      return false;
    if (!(this.z52_1 == other.z52_1))
      return false;
    if (!(this.a53_1 == other.a53_1))
      return false;
    if (!(this.b53_1 == other.b53_1))
      return false;
    if (!(this.c53_1 == other.c53_1))
      return false;
    if (!(this.d53_1 == other.d53_1))
      return false;
    if (!(this.e53_1 == other.e53_1))
      return false;
    if (!(this.f53_1 == other.f53_1))
      return false;
    if (!(this.g53_1 == other.g53_1))
      return false;
    if (!equals(this.h53_1, other.h53_1))
      return false;
    if (!equals(this.i53_1, other.i53_1))
      return false;
    if (!equals(this.j53_1, other.j53_1))
      return false;
    return true;
  }
  static k53(seen0, label, kind, detail, documentation, preselect, sortText, filterText, insertText, insertTextFormat, insertTextMode, textEdit, command, serializationConstructorMarker) {
    if (!(1 === (1 & seen0))) {
      throwMissingFieldException(seen0, 1, $serializer_getInstance_0().v52_1);
    }
    var $this = createThis(this);
    $this.x52_1 = label;
    if (0 === (seen0 & 2))
      $this.y52_1 = null;
    else
      $this.y52_1 = kind;
    if (0 === (seen0 & 4))
      $this.z52_1 = null;
    else
      $this.z52_1 = detail;
    if (0 === (seen0 & 8))
      $this.a53_1 = null;
    else
      $this.a53_1 = documentation;
    if (0 === (seen0 & 16))
      $this.b53_1 = null;
    else
      $this.b53_1 = preselect;
    if (0 === (seen0 & 32))
      $this.c53_1 = null;
    else
      $this.c53_1 = sortText;
    if (0 === (seen0 & 64))
      $this.d53_1 = null;
    else
      $this.d53_1 = filterText;
    if (0 === (seen0 & 128))
      $this.e53_1 = null;
    else
      $this.e53_1 = insertText;
    if (0 === (seen0 & 256))
      $this.f53_1 = null;
    else
      $this.f53_1 = insertTextFormat;
    if (0 === (seen0 & 512))
      $this.g53_1 = null;
    else
      $this.g53_1 = insertTextMode;
    if (0 === (seen0 & 1024))
      $this.h53_1 = null;
    else
      $this.h53_1 = textEdit;
    if (0 === (seen0 & 2048))
      $this.i53_1 = null;
    else
      $this.i53_1 = command;
    $this.j53_1 = null;
    return $this;
  }
}
class Companion_0 {}
class $serializer_0 {
  constructor() {
    $serializer_instance_0 = this;
    this.n53_1 = new PluginGeneratedSerialDescriptor('com.bedalton.common.lsp.completion.CompletionItemData', this, 0);
  }
  o53(encoder, value) {
    var tmp0_desc = this.n53_1;
    encoder.bw(tmp0_desc).cw(tmp0_desc);
  }
  mr(encoder, value) {
    return this.o53(encoder, value instanceof CompletionItemData ? value : THROW_CCE());
  }
  nr(decoder) {
    var tmp0_desc = this.n53_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp4_input = decoder.bw(tmp0_desc);
    if (!tmp4_input.sw())
      while (tmp1_flag) {
        tmp2_index = tmp4_input.tw(tmp0_desc);
        if (tmp2_index === -1)
          tmp1_flag = false;
        else
          throw UnknownFieldException.et(tmp2_index);
      }
    tmp4_input.cw(tmp0_desc);
    return CompletionItemData.p53(0, null);
  }
  lr() {
    return this.n53_1;
  }
  l14() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [];
  }
}
class CompletionItemData {
  static p53(seen0, serializationConstructorMarker) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_1().n53_1);
    }
    return createThis(this);
  }
}
class Companion_1 {
  constructor() {
    Companion_instance_1 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.q53_1 = [null, lazy(tmp_0, CompletionList$Companion$$childSerializers$_anonymous__ihib9s)];
  }
}
class $serializer_1 {
  constructor() {
    $serializer_instance_1 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('com.bedalton.common.lsp.completion.CompletionList', this, 2);
    tmp0_serialDesc.w13('isIncomplete', false);
    tmp0_serialDesc.w13('items', false);
    this.r53_1 = tmp0_serialDesc;
  }
  s53(encoder, value) {
    var tmp0_desc = this.r53_1;
    var tmp1_output = encoder.bw(tmp0_desc);
    var tmp2_cached = Companion_getInstance_1().q53_1;
    tmp1_output.jx(tmp0_desc, 0, value.isIncomplete);
    tmp1_output.tx(tmp0_desc, 1, tmp2_cached[1].k3(), value.items);
    tmp1_output.cw(tmp0_desc);
  }
  mr(encoder, value) {
    return this.s53(encoder, value instanceof CompletionList ? value : THROW_CCE());
  }
  nr(decoder) {
    var tmp0_desc = this.r53_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = false;
    var tmp5_local1 = null;
    var tmp6_input = decoder.bw(tmp0_desc);
    var tmp7_cached = Companion_getInstance_1().q53_1;
    if (tmp6_input.sw()) {
      tmp4_local0 = tmp6_input.dw(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp6_input.nw(tmp0_desc, 1, tmp7_cached[1].k3(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp6_input.tw(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp6_input.dw(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp6_input.nw(tmp0_desc, 1, tmp7_cached[1].k3(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          default:
            throw UnknownFieldException.et(tmp2_index);
        }
      }
    tmp6_input.cw(tmp0_desc);
    return CompletionList.t53(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  }
  lr() {
    return this.r53_1;
  }
  l14() {
    var tmp0_cached = Companion_getInstance_1().q53_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [BooleanSerializer_getInstance(), tmp0_cached[1].k3()];
  }
}
class CompletionList {
  static u53(isIncomplete, items) {
    Companion_getInstance_1();
    var $this = createThis(this);
    $this.isIncomplete = isIncomplete;
    $this.items = items;
    return $this;
  }
  v53() {
    return this.isIncomplete;
  }
  t1s() {
    return this.items;
  }
  static w53(isIncomplete, items) {
    Companion_getInstance_1();
    // Inline function 'kotlin.collections.toTypedArray' call
    var tmp$ret$0 = copyToArray(items);
    return this.u53(isIncomplete, tmp$ret$0);
  }
  equals(other) {
    if (this === other)
      return true;
    if (other == null || !getKClassFromExpression(this).equals(getKClassFromExpression(other)))
      return false;
    if (!(other instanceof CompletionList))
      THROW_CCE();
    if (!(this.isIncomplete === other.isIncomplete))
      return false;
    if (!contentEquals(this.items, other.items))
      return false;
    return true;
  }
  hashCode() {
    var result = getBooleanHashCode(this.isIncomplete);
    result = imul(31, result) + contentHashCode(this.items) | 0;
    return result;
  }
  toString() {
    return 'CompletionList(isIncomplete=' + this.isIncomplete + ', items=' + toString_0(this.items) + ')';
  }
  static t53(seen0, isIncomplete, items, serializationConstructorMarker) {
    Companion_getInstance_1();
    if (!(3 === (3 & seen0))) {
      throwMissingFieldException(seen0, 3, $serializer_getInstance_2().r53_1);
    }
    var $this = createThis(this);
    $this.isIncomplete = isIncomplete;
    $this.items = items;
    return $this;
  }
}
class Companion_2 {}
class $serializer_2 {
  constructor() {
    $serializer_instance_2 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('com.bedalton.common.lsp.completion.LspCommand', this, 2);
    tmp0_serialDesc.w13('title', false);
    tmp0_serialDesc.w13('command', false);
    this.x53_1 = tmp0_serialDesc;
  }
  y53(encoder, value) {
    var tmp0_desc = this.x53_1;
    var tmp1_output = encoder.bw(tmp0_desc);
    tmp1_output.rx(tmp0_desc, 0, value.title);
    tmp1_output.rx(tmp0_desc, 1, value.command);
    tmp1_output.cw(tmp0_desc);
  }
  mr(encoder, value) {
    return this.y53(encoder, value instanceof LspCommand ? value : THROW_CCE());
  }
  nr(decoder) {
    var tmp0_desc = this.x53_1;
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
    return LspCommand.z53(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  }
  lr() {
    return this.x53_1;
  }
  l14() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), StringSerializer_getInstance()];
  }
}
class LspCommand {
  constructor(title, command) {
    this.title = title;
    this.command = command;
  }
  a54() {
    return this.title;
  }
  g1s() {
    return this.command;
  }
  toString() {
    return 'LspCommand(title=' + this.title + ', command=' + this.command + ')';
  }
  hashCode() {
    var result = getStringHashCode(this.title);
    result = imul(result, 31) + getStringHashCode(this.command) | 0;
    return result;
  }
  equals(other) {
    if (this === other)
      return true;
    if (!(other instanceof LspCommand))
      return false;
    if (!(this.title === other.title))
      return false;
    if (!(this.command === other.command))
      return false;
    return true;
  }
  static z53(seen0, title, command, serializationConstructorMarker) {
    if (!(3 === (3 & seen0))) {
      throwMissingFieldException(seen0, 3, $serializer_getInstance_3().x53_1);
    }
    var $this = createThis(this);
    $this.title = title;
    $this.command = command;
    return $this;
  }
}
//endregion
var Companion_instance;
function Companion_getInstance() {
  return Companion_instance;
}
var $serializer_instance;
function $serializer_getInstance_0() {
  if ($serializer_instance === VOID)
    new $serializer();
  return $serializer_instance;
}
var Companion_instance_0;
function Companion_getInstance_0() {
  return Companion_instance_0;
}
var $serializer_instance_0;
function $serializer_getInstance_1() {
  if ($serializer_instance_0 === VOID)
    new $serializer_0();
  return $serializer_instance_0;
}
function CompletionList$Companion$$childSerializers$_anonymous__ihib9s() {
  return new ReferenceArraySerializer(getKClass(CompletionItem), $serializer_getInstance_0());
}
var Companion_instance_1;
function Companion_getInstance_1() {
  if (Companion_instance_1 === VOID)
    new Companion_1();
  return Companion_instance_1;
}
var $serializer_instance_1;
function $serializer_getInstance_2() {
  if ($serializer_instance_1 === VOID)
    new $serializer_1();
  return $serializer_instance_1;
}
var Companion_instance_2;
function Companion_getInstance_2() {
  return Companion_instance_2;
}
var $serializer_instance_2;
function $serializer_getInstance_3() {
  if ($serializer_instance_2 === VOID)
    new $serializer_2();
  return $serializer_instance_2;
}
//region block: post-declaration
initMetadataForCompanion(Companion);
protoOf($serializer).m14 = typeParametersSerializers;
initMetadataForObject($serializer, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(CompletionItem, 'CompletionItem', VOID, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_0});
initMetadataForCompanion(Companion_0);
protoOf($serializer_0).m14 = typeParametersSerializers;
initMetadataForObject($serializer_0, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(CompletionItemData, 'CompletionItemData', CompletionItemData, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_1});
initMetadataForCompanion(Companion_1);
protoOf($serializer_1).m14 = typeParametersSerializers;
initMetadataForObject($serializer_1, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(CompletionList, 'CompletionList', VOID, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_2});
initMetadataForCompanion(Companion_2);
protoOf($serializer_2).m14 = typeParametersSerializers;
initMetadataForObject($serializer_2, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(LspCommand, 'LspCommand', VOID, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_3});
//endregion
//region block: init
Companion_instance = new Companion();
Companion_instance_0 = new Companion_0();
Companion_instance_2 = new Companion_2();
//endregion
//region block: exports
export {
  CompletionItemData as CompletionItemData29nm2jvswfr44,
  CompletionItem as CompletionItem17znz1fko34i1,
  CompletionList as CompletionList3hftjtzf4vcjo,
  LspCommand as LspCommand1c1gzb7ynb5dl,
};
//endregion

//# sourceMappingURL=common-lsp-completion.mjs.map
