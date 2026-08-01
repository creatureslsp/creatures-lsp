import {
  isInterface3d6p8outrmvmk as isInterface,
  initMetadataForInterface1egvbzx539z91 as initMetadataForInterface,
  VOID3gxj6tk5isa35 as VOID,
} from './kotlin-kotlin-stdlib.mjs';
import { TextWithRange2q8nc6zoqlr5f as TextWithRange } from './common-ast-structs.mjs';
//region block: imports
//endregion
//region block: pre-declaration
class ParseTreeItem {}
function get_parserIndexStart() {
  return this.d1e().g1e();
}
function get_parserIndexEnd() {
  return this.d1e().j1e();
}
class WhitespaceParseTreeItem {}
class NewLineParseTreeItem {}
class SpaceParseTreeItem {}
//endregion
function isWhitespace(_this__u8e3s4) {
  var tmp;
  if (isInterface(_this__u8e3s4, NewLineParseTreeItem)) {
    tmp = true;
  } else {
    tmp = isInterface(_this__u8e3s4, SpaceParseTreeItem);
  }
  return tmp;
}
//region block: post-declaration
initMetadataForInterface(ParseTreeItem, 'ParseTreeItem', VOID, VOID, [TextWithRange]);
initMetadataForInterface(WhitespaceParseTreeItem, 'WhitespaceParseTreeItem', VOID, VOID, [ParseTreeItem]);
initMetadataForInterface(NewLineParseTreeItem, 'NewLineParseTreeItem', VOID, VOID, [WhitespaceParseTreeItem]);
initMetadataForInterface(SpaceParseTreeItem, 'SpaceParseTreeItem', VOID, VOID, [WhitespaceParseTreeItem]);
//endregion
//region block: exports
export {
  NewLineParseTreeItem as NewLineParseTreeItem1hevrey7cynlj,
  get_parserIndexEnd as get_parserIndexEnd307z1fa8yxa8k,
  get_parserIndexStart as get_parserIndexStartcpg74ttcro0w,
  ParseTreeItem as ParseTreeItem1yt8aen10ic07,
  SpaceParseTreeItem as SpaceParseTreeItemgrc85zs1a361,
  WhitespaceParseTreeItem as WhitespaceParseTreeItem1a7wvmsr6fprs,
  isWhitespace as isWhitespace3tzql31uogr7d,
};
//endregion

//# sourceMappingURL=common-ast-parseritems.mjs.map
