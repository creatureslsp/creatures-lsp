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
    tmp.i59_1 = [null, null, tmp_1, lazy(tmp_2, FormatResult$Companion$$childSerializers$_anonymous__qoz48m_0)];
  }
}
class $serializer {
  constructor() {
    $serializer_instance = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('com.bedalton.common.lsp.formatter.FormatResult', this, 4);
    tmp0_serialDesc.z13('formattedText', false);
    tmp0_serialDesc.z13('oldText', false);
    tmp0_serialDesc.z13('edits', false);
    tmp0_serialDesc.z13('editReasons', false);
    this.j59_1 = tmp0_serialDesc;
  }
  k59(encoder, value) {
    var tmp0_desc = this.j59_1;
    var tmp1_output = encoder.ew(tmp0_desc);
    var tmp2_cached = Companion_getInstance().i59_1;
    tmp1_output.ux(tmp0_desc, 0, value.formattedText);
    tmp1_output.ux(tmp0_desc, 1, value.oldText);
    tmp1_output.wx(tmp0_desc, 2, tmp2_cached[2].r3(), value.edits);
    tmp1_output.wx(tmp0_desc, 3, tmp2_cached[3].r3(), value.editReasons);
    tmp1_output.fw(tmp0_desc);
  }
  pr(encoder, value) {
    return this.k59(encoder, value instanceof FormatResult ? value : THROW_CCE());
  }
  qr(decoder) {
    var tmp0_desc = this.j59_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_input = decoder.ew(tmp0_desc);
    var tmp9_cached = Companion_getInstance().i59_1;
    if (tmp8_input.vw()) {
      tmp4_local0 = tmp8_input.ow(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp8_input.ow(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp8_input.qw(tmp0_desc, 2, tmp9_cached[2].r3(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp8_input.qw(tmp0_desc, 3, tmp9_cached[3].r3(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp8_input.ww(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp8_input.ow(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp8_input.ow(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp8_input.qw(tmp0_desc, 2, tmp9_cached[2].r3(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp8_input.qw(tmp0_desc, 3, tmp9_cached[3].r3(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          default:
            throw UnknownFieldException.ht(tmp2_index);
        }
      }
    tmp8_input.fw(tmp0_desc);
    return FormatResult.l59(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, null);
  }
  or() {
    return this.j59_1;
  }
  o14() {
    var tmp0_cached = Companion_getInstance().i59_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), StringSerializer_getInstance(), tmp0_cached[2].r3(), tmp0_cached[3].r3()];
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
  m59() {
    return this.formattedText;
  }
  n59() {
    return this.oldText;
  }
  o59() {
    return this.edits;
  }
  p59() {
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
  static l59(seen0, formattedText, oldText, edits, editReasons, serializationConstructorMarker) {
    Companion_getInstance();
    if (!(15 === (15 & seen0))) {
      throwMissingFieldException(seen0, 15, $serializer_getInstance().j59_1);
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
    this.s59_1 = commonName;
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
//region block: post-declaration
initMetadataForCompanion(Companion);
protoOf($serializer).p14 = typeParametersSerializers;
initMetadataForObject($serializer, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(FormatResult, 'FormatResult', VOID, VOID, VOID, VOID, VOID, {0: $serializer_getInstance});
initMetadataForClass(EditReason, 'EditReason');
//endregion
//region block: exports
export {
  FormatResult as FormatResult115095obxt6jw,
  EditReason_INCORRECT_CASE_getInstance as EditReason_INCORRECT_CASE_getInstance1y65lwjubz3iv,
  EditReason_NEWLINES_NEEDED_getInstance as EditReason_NEWLINES_NEEDED_getInstance24861lh5a763c,
  EditReason_NEWLINES_TOO_MANY_getInstance as EditReason_NEWLINES_TOO_MANY_getInstance3h5jgowgliuvp,
  EditReason_SPACE_NEEDED_getInstance as EditReason_SPACE_NEEDED_getInstance37n8d0srbuhik,
  EditReason_SPACE_TOO_MANY_getInstance as EditReason_SPACE_TOO_MANY_getInstanceb0ks7h26wtjt,
  EditReason_TAB_CHANGE_getInstance as EditReason_TAB_CHANGE_getInstance2x8k1k26kt671,
};
//endregion

//# sourceMappingURL=common-lsp-formatter.mjs.map
