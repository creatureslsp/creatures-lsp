import {
  Companion_getInstance3ke535klgonhf as Companion_getInstance,
  CatalogueSpace1y4ikc6p9vvrt as CatalogueSpace,
  CatalogueTagKeyword1ifa1rkq2jxcy as CatalogueTagKeyword,
  CatalogueStringValue2sr8w14uk320g as CatalogueStringValue,
  CatalogueOverrideKeyword39tesapdatcuy as CatalogueOverrideKeyword,
  CatalogueNewline2unjctc4z8kmi as CatalogueNewline,
  CatalogueIntValue335r45fd008t as CatalogueIntValue,
  CatalogueFloatValue1nosawf1ahtlb as CatalogueFloatValue,
  CatalogueErrorCharbq8h4aehombx as CatalogueErrorChar,
  CatalogueComment3p67k3m1ov7ki as CatalogueComment,
  CatalogueArrayKeyword2l7paihdm22kh as CatalogueArrayKeyword,
  get_catalogueJson3mvdgectzlrxg as get_catalogueJson,
  CatalogueParseResult1yfws1keg5isn as CatalogueParseResult,
  parseCatalogue312p0ytu09usl as parseCatalogue,
} from './catalogue-core.mjs';
import {
  LazyThreadSafetyMode_PUBLICATION_getInstance3qslfm3vqg6y3 as LazyThreadSafetyMode_PUBLICATION_getInstance,
  lazy1261dae0bgscp as lazy,
  initMetadataForCompanion1wyw17z38v6ac as initMetadataForCompanion,
  VOID3gxj6tk5isa35 as VOID,
  THROW_CCE2g6jy02ryeudk as THROW_CCE,
  protoOf180f3jzyo7rfj as protoOf,
  initMetadataForObject1cxne3s9w65el as initMetadataForObject,
  toString1pkumu07cwy4m as toString,
  toString30pk9tzaqopn as toString_0,
  hashCodeq5arwsb9dgti as hashCode,
  getStringHashCode26igk1bx568vk as getStringHashCode,
  equals2au1ep9vhcato as equals,
  Unit_instancev9v8hjid95df as Unit_instance,
  createThis2j2avj17cvnv2 as createThis,
  initMetadataForClassbxx6q50dy2s7 as initMetadataForClass,
  noWhenBranchMatchedException2a6r7ubxgky5j as noWhenBranchMatchedException,
  FunctionAdapter3lcrrz3moet5b as FunctionAdapter,
  isInterface3d6p8outrmvmk as isInterface,
  Comparator2b3maoeh98xtg as Comparator,
  compareValues1n2ayl87ihzfk as compareValues,
  ArrayList3it5z8td81qkl as ArrayList,
  sortedWith2csnbbb21k0lg as sortedWith,
  copyToArray2j022khrow2yi as copyToArray,
  Exceptiondt2hlxn7j7vw as Exception,
  getKClass3t8tygqu4lcxf as getKClass,
  arrayOf1akklvh2at202 as arrayOf,
  createKType31ecntyyaay3k as createKType,
  PrimitiveClasses_getInstanceds06xwqrwfdm as PrimitiveClasses_getInstance,
  createInvariantKTypeProjection3h5364czc0a8w as createInvariantKTypeProjection,
  isArray1hxjqtqy632bc as isArray,
} from './kotlin-kotlin-stdlib.mjs';
import {
  PluginGeneratedSerialDescriptorqdzeg5asqhfg as PluginGeneratedSerialDescriptor,
  UnknownFieldExceptiona60e3a6v1xqo as UnknownFieldException,
  get_nullable197rfua9r7fsz as get_nullable,
  StringSerializer_getInstance11v9md0a7d9yk as StringSerializer_getInstance,
  IntSerializer_getInstanceuhm8c1wku08l as IntSerializer_getInstance,
  typeParametersSerializers2likxjr48tr7y as typeParametersSerializers,
  GeneratedSerializer1f7t7hssdd2ws as GeneratedSerializer,
  throwMissingFieldException2cmke0v3ynf14 as throwMissingFieldException,
  SerializableWithd2dap36updxd as SerializableWith,
  serializer1i4e9ym37oxmo as serializer,
  KSerializerzf77vz1967fq as KSerializer,
} from './kotlinx-serialization-kotlinx-serialization-core.mjs';
import {
  RangeWithIndexSerializer_getInstance1z1rijinqeoet as RangeWithIndexSerializer_getInstance,
  get_sortValue3305pt8rns63f as get_sortValue,
} from './common-ast-structs.mjs';
import {
  decodeFromDynamic3axi482yesc93 as decodeFromDynamic,
  encodeToDynamicsae9c2u7066d as encodeToDynamic,
} from './kotlinx-serialization-kotlinx-serialization-json.mjs';
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
    tmp.h68_1 = [null, lazy(tmp_0, CatalogueError$Companion$$childSerializers$_anonymous__pu1vd7), null, null];
  }
}
class $serializer {
  constructor() {
    $serializer_instance = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('com.bedalton.creatures.catalogue.validation.CatalogueError', this, 4);
    tmp0_serialDesc.w13('textRange', false);
    tmp0_serialDesc.w13('parserItem', false);
    tmp0_serialDesc.w13('message', false);
    tmp0_serialDesc.w13('errorType', false);
    this.i68_1 = tmp0_serialDesc;
  }
  j68(encoder, value) {
    var tmp0_desc = this.i68_1;
    var tmp1_output = encoder.bw(tmp0_desc);
    var tmp2_cached = Companion_getInstance_0().h68_1;
    tmp1_output.tx(tmp0_desc, 0, RangeWithIndexSerializer_getInstance(), value.k68_1);
    tmp1_output.vx(tmp0_desc, 1, tmp2_cached[1].k3(), value.l68_1);
    tmp1_output.rx(tmp0_desc, 2, value.m68_1);
    tmp1_output.mx(tmp0_desc, 3, value.n68_1);
    tmp1_output.cw(tmp0_desc);
  }
  mr(encoder, value) {
    return this.j68(encoder, value instanceof CatalogueError ? value : THROW_CCE());
  }
  nr(decoder) {
    var tmp0_desc = this.i68_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = 0;
    var tmp8_input = decoder.bw(tmp0_desc);
    var tmp9_cached = Companion_getInstance_0().h68_1;
    if (tmp8_input.sw()) {
      tmp4_local0 = tmp8_input.nw(tmp0_desc, 0, RangeWithIndexSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp8_input.pw(tmp0_desc, 1, tmp9_cached[1].k3(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp8_input.lw(tmp0_desc, 2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp8_input.gw(tmp0_desc, 3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp8_input.tw(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp8_input.nw(tmp0_desc, 0, RangeWithIndexSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp8_input.pw(tmp0_desc, 1, tmp9_cached[1].k3(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp8_input.lw(tmp0_desc, 2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp8_input.gw(tmp0_desc, 3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          default:
            throw UnknownFieldException.et(tmp2_index);
        }
      }
    tmp8_input.cw(tmp0_desc);
    return CatalogueError.o68(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, null);
  }
  lr() {
    return this.i68_1;
  }
  l14() {
    var tmp0_cached = Companion_getInstance_0().h68_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [RangeWithIndexSerializer_getInstance(), get_nullable(tmp0_cached[1].k3()), StringSerializer_getInstance(), IntSerializer_getInstance()];
  }
}
class CatalogueError {
  constructor(textRange, parserItem, message, errorType) {
    Companion_getInstance_0();
    this.k68_1 = textRange;
    this.l68_1 = parserItem;
    this.m68_1 = message;
    this.n68_1 = errorType;
  }
  toString() {
    return 'CatalogueError(textRange=' + toString(this.k68_1) + ', parserItem=' + toString_0(this.l68_1) + ', message=' + this.m68_1 + ', errorType=' + this.n68_1 + ')';
  }
  hashCode() {
    var result = hashCode(this.k68_1);
    result = imul(result, 31) + (this.l68_1 == null ? 0 : hashCode(this.l68_1)) | 0;
    result = imul(result, 31) + getStringHashCode(this.m68_1) | 0;
    result = imul(result, 31) + this.n68_1 | 0;
    return result;
  }
  equals(other) {
    if (this === other)
      return true;
    if (!(other instanceof CatalogueError))
      return false;
    if (!equals(this.k68_1, other.k68_1))
      return false;
    if (!equals(this.l68_1, other.l68_1))
      return false;
    if (!(this.m68_1 === other.m68_1))
      return false;
    if (!(this.n68_1 === other.n68_1))
      return false;
    return true;
  }
  static o68(seen0, textRange, parserItem, message, errorType, serializationConstructorMarker) {
    Companion_getInstance_0();
    if (!(15 === (15 & seen0))) {
      throwMissingFieldException(seen0, 15, $serializer_getInstance().i68_1);
    }
    var $this = createThis(this);
    $this.k68_1 = textRange;
    $this.l68_1 = parserItem;
    $this.m68_1 = message;
    $this.n68_1 = errorType;
    return $this;
  }
}
class CatalogueErrorTypes {
  constructor() {
    this.INVALID_OVERRIDE = 1;
    this.ARRAY_TAG_CONFLICT = 2;
    this.INVALID_ARRAY_COUNT = 3;
    this.NEEDS_QUOTES = 4;
    this.EXTRANEOUS_VALUE = 5;
    this.MUST_BE_UPPERCASE = 6;
    this.SINGLE_QUOTES = 7;
    this.INCOMPLETE_QUOTE = 8;
  }
  p68() {
    return this.INVALID_OVERRIDE;
  }
  q68() {
    return this.ARRAY_TAG_CONFLICT;
  }
  r68() {
    return this.INVALID_ARRAY_COUNT;
  }
  s68() {
    return this.NEEDS_QUOTES;
  }
  t68() {
    return this.EXTRANEOUS_VALUE;
  }
  u68() {
    return this.MUST_BE_UPPERCASE;
  }
  v68() {
    return this.SINGLE_QUOTES;
  }
  w68() {
    return this.INCOMPLETE_QUOTE;
  }
}
class sam$kotlin_Comparator$0 {
  constructor(function_0) {
    this.x68_1 = function_0;
  }
  wg(a, b) {
    return this.x68_1(a, b);
  }
  compare(a, b) {
    return this.wg(a, b);
  }
  f4() {
    return this.x68_1;
  }
  equals(other) {
    var tmp;
    if (!(other == null) ? isInterface(other, Comparator) : false) {
      var tmp_0;
      if (!(other == null) ? isInterface(other, FunctionAdapter) : false) {
        tmp_0 = equals(this.f4(), other.f4());
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    } else {
      tmp = false;
    }
    return tmp;
  }
  hashCode() {
    return hashCode(this.f4());
  }
}
class CatalogueValidator {
  y68(parseResult) {
    return this.z68(parseResult.catalogueEntries, parseResult.looseItems, parseResult.parserItems);
  }
  z68(entries, looseItems, parserItems) {
    // Inline function 'kotlin.collections.mutableListOf' call
    var out = ArrayList.u1();
    addLooseItemErrors(this, looseItems, out);
    addEntryErrors(this, entries, out);
    // Inline function 'kotlin.collections.sortedBy' call
    // Inline function 'kotlin.comparisons.compareBy' call
    var tmp = CatalogueValidator$validate$lambda;
    var tmp$ret$2 = new sam$kotlin_Comparator$0(tmp);
    // Inline function 'kotlin.collections.toTypedArray' call
    var this_0 = sortedWith(out, tmp$ret$2);
    return copyToArray(this_0);
  }
}
//endregion
function CatalogueError$Companion$$childSerializers$_anonymous__pu1vd7() {
  return Companion_getInstance().k1e();
}
var Companion_instance;
function Companion_getInstance_0() {
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
var CatalogueErrorTypes_instance;
function CatalogueErrorTypes_getInstance() {
  return CatalogueErrorTypes_instance;
}
function addLooseItemErrors($this, looseTokens, out) {
  var inductionVariable = 0;
  var last = looseTokens.length;
  while (inductionVariable < last) {
    var item = looseTokens[inductionVariable];
    inductionVariable = inductionVariable + 1 | 0;
    addLooseTokenError($this, item, out);
  }
}
function addLooseTokenError($this, item, out, message, errorType) {
  message = message === VOID ? 'Unexpected ' + getTypeName($this, item) : message;
  errorType = errorType === VOID ? 5 : errorType;
  var error = new CatalogueError(item.d1e(), item, message, errorType);
  out.z1(error);
}
function addEntryErrors($this, entries, out) {
  var inductionVariable = 0;
  var last = entries.length;
  while (inductionVariable < last) {
    var entry = entries[inductionVariable];
    inductionVariable = inductionVariable + 1 | 0;
    addEntryErrors_0($this, entry, out);
  }
}
function addEntryErrors_0($this, entry, out) {
  addExtraneousHeaderItemsErrors($this, entry, out);
  addLooseItemErrors($this, entry.looseItems, out);
  addNeedsQuoteErrors($this, entry.valueParserItems, out);
  addNotValidForTagErrors($this, entry, out);
  addCaseErrors($this, entry, out);
}
function addNotValidForTagErrors($this, entry, out) {
  if (entry.isArray) {
    return Unit_instance;
  }
  var tmp0_safe_receiver = entry.overrideKeyword;
  if (tmp0_safe_receiver == null)
    null;
  else {
    // Inline function 'kotlin.let' call
    addLooseTokenError(CatalogueValidator_instance, tmp0_safe_receiver, out, 'OVERRIDE keyword only allowed on ARRAY entries', 1);
  }
  var tmp1_safe_receiver = entry.arrayCountParserItem;
  if (tmp1_safe_receiver == null)
    null;
  else {
    // Inline function 'kotlin.let' call
    addLooseTokenError(CatalogueValidator_instance, tmp1_safe_receiver, out, 'Array item count is only allowed on ARRAY entries', 3);
  }
}
function addExtraneousHeaderItemsErrors($this, entry, out) {
  var indexedObject = entry.errorHeaderItems;
  var inductionVariable = 0;
  var last = indexedObject.length;
  while (inductionVariable < last) {
    var item = indexedObject[inductionVariable];
    inductionVariable = inductionVariable + 1 | 0;
    switch (item.itemType) {
      case 1:
      case 2:
        addLooseTokenError($this, item, out, 'Only one TAG or ARRAY keyword allowed', 2);
        break;
      case 3:
        addLooseTokenError($this, item, out, 'OVERRIDE can only be used once');
        break;
      default:
        addLooseTokenError($this, item, out);
        break;
    }
  }
}
function addCaseErrors($this, entry, out) {
  addCaseErrorIfAny($this, entry.keywordParserItem, out);
  addCaseErrorIfAny($this, entry.overrideKeyword, out);
  var indexedObject = entry.errorHeaderItems;
  var inductionVariable = 0;
  var last = indexedObject.length;
  while (inductionVariable < last) {
    var item = indexedObject[inductionVariable];
    inductionVariable = inductionVariable + 1 | 0;
    switch (item.itemType) {
      case 1:
        addCaseErrorIfAny($this, item, out);
        break;
      case 2:
        addCaseErrorIfAny($this, item, out);
        break;
      case 3:
        addCaseErrorIfAny($this, item, out);
        break;
    }
  }
}
function addCaseErrorIfAny($this, item, out) {
  if (item == null) {
    return Unit_instance;
  }
  var tmp = item.j1f();
  // Inline function 'kotlin.text.uppercase' call
  // Inline function 'kotlin.js.asDynamic' call
  if (tmp === item.j1f().toUpperCase()) {
    return Unit_instance;
  }
  var error = new CatalogueError(item.d1e(), item, 'Keyword "' + item.j1f() + '" must be uppercase', 6);
  out.z1(error);
}
function addNeedsQuoteErrors($this, items, out) {
  var inductionVariable = 0;
  var last = items.length;
  $l$loop: while (inductionVariable < last) {
    var item = items[inductionVariable];
    inductionVariable = inductionVariable + 1 | 0;
    if (item.itemType === 5) {
      continue $l$loop;
    }
    var error = new CatalogueError(item.d1e(), item, 'Values must be quoted', 4);
    out.z1(error);
  }
}
function getTypeName($this, item) {
  var tmp;
  if (item instanceof CatalogueArrayKeyword) {
    tmp = 'ARRAY keyword';
  } else {
    if (item instanceof CatalogueComment) {
      tmp = 'Comment';
    } else {
      if (item instanceof CatalogueErrorChar) {
        tmp = 'Token';
      } else {
        if (item instanceof CatalogueFloatValue) {
          tmp = 'Float';
        } else {
          if (item instanceof CatalogueIntValue) {
            tmp = 'Int';
          } else {
            if (item instanceof CatalogueNewline) {
              tmp = 'newline';
            } else {
              if (item instanceof CatalogueOverrideKeyword) {
                tmp = 'OVERRIDE keyword';
              } else {
                if (item instanceof CatalogueStringValue) {
                  tmp = 'string';
                } else {
                  if (item instanceof CatalogueTagKeyword) {
                    tmp = 'TAG keyword';
                  } else {
                    if (item instanceof CatalogueSpace) {
                      tmp = 'SPACE';
                    } else {
                      noWhenBranchMatchedException();
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  return tmp;
}
function CatalogueValidator$validate$lambda(a, b) {
  // Inline function 'kotlin.comparisons.compareValuesBy' call
  var tmp = get_sortValue(a.k68_1);
  var tmp$ret$2 = get_sortValue(b.k68_1);
  return compareValues(tmp, tmp$ret$2);
}
var CatalogueValidator_instance;
function CatalogueValidator_getInstance() {
  return CatalogueValidator_instance;
}
function get_CatalogueErrorTypes() {
  _init_properties_validateCatalogue_kt__nsd1lr();
  return catalogueErrorTypes;
}
var catalogueErrorTypes;
function validateCatalogue(catalogue) {
  _init_properties_validateCatalogue_kt__nsd1lr();
  var tmp;
  if (!(catalogue == null) ? typeof catalogue === 'string' : false) {
    tmp = parseCatalogue((!(catalogue == null) ? typeof catalogue === 'string' : false) ? catalogue : THROW_CCE());
  } else {
    if (catalogue instanceof CatalogueParseResult) {
      tmp = catalogue;
    } else {
      if (!(typeof catalogue['parserItems'] === 'undefined')) {
        // Inline function 'kotlinx.serialization.json.decodeFromDynamic' call
        var this_0 = get_catalogueJson();
        // Inline function 'kotlinx.serialization.serializer' call
        var this_1 = this_0.rw();
        // Inline function 'kotlinx.serialization.internal.cast' call
        var this_2 = serializer(this_1, createKType(getKClass(CatalogueParseResult), arrayOf([]), false));
        var tmp$ret$1 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
        tmp = decodeFromDynamic(this_0, tmp$ret$1, catalogue);
      } else {
        throw Exception.gc('Unexpected catalogue parser data');
      }
    }
  }
  var parseResult = tmp;
  var errors = CatalogueValidator_instance.z68(parseResult.catalogueEntries, parseResult.looseItems, parseResult.parserItems);
  // Inline function 'kotlin.collections.isEmpty' call
  if (errors.length === 0) {
    // Inline function 'kotlin.emptyArray' call
    return [];
  }
  // Inline function 'kotlinx.serialization.json.encodeToDynamic' call
  var this_3 = get_catalogueJson();
  // Inline function 'kotlinx.serialization.serializer' call
  var this_4 = this_3.rw();
  // Inline function 'kotlinx.serialization.internal.cast' call
  var this_5 = serializer(this_4, createKType(PrimitiveClasses_getInstance().ie(), arrayOf([createInvariantKTypeProjection(createKType(getKClass(CatalogueError), arrayOf([]), false))]), false));
  var tmp$ret$6 = isInterface(this_5, KSerializer) ? this_5 : THROW_CCE();
  var tmp_0 = encodeToDynamic(this_3, tmp$ret$6, errors);
  return (!(tmp_0 == null) ? isArray(tmp_0) : false) ? tmp_0 : THROW_CCE();
}
var properties_initialized_validateCatalogue_kt_tqg2oz;
function _init_properties_validateCatalogue_kt__nsd1lr() {
  if (!properties_initialized_validateCatalogue_kt_tqg2oz) {
    properties_initialized_validateCatalogue_kt_tqg2oz = true;
    catalogueErrorTypes = CatalogueErrorTypes_instance;
  }
}
//region block: post-declaration
initMetadataForCompanion(Companion);
protoOf($serializer).m14 = typeParametersSerializers;
initMetadataForObject($serializer, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(CatalogueError, 'CatalogueError', VOID, VOID, VOID, VOID, VOID, {0: $serializer_getInstance});
initMetadataForObject(CatalogueErrorTypes, 'CatalogueErrorTypes');
initMetadataForClass(sam$kotlin_Comparator$0, 'sam$kotlin_Comparator$0', VOID, VOID, [Comparator, FunctionAdapter]);
initMetadataForObject(CatalogueValidator, 'CatalogueValidator');
//endregion
//region block: init
CatalogueErrorTypes_instance = new CatalogueErrorTypes();
CatalogueValidator_instance = new CatalogueValidator();
//endregion
//region block: exports
var CatalogueErrorTypes_0 = {getInstance: CatalogueErrorTypes_getInstance};
var CatalogueErrorTypes_1 = {get: get_CatalogueErrorTypes};
export {
  CatalogueErrorTypes_0 as CatalogueErrorTypes,
  validateCatalogue as validateCatalogue,
};
export {
  CatalogueValidator_instance as CatalogueValidator_instance1xm9eu7q5lynu,
};
//endregion

//# sourceMappingURL=catalogue-validation.mjs.map
