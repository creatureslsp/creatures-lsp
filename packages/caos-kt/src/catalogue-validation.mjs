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
    tmp.w64_1 = [null, lazy(tmp_0, CatalogueError$Companion$$childSerializers$_anonymous__pu1vd7), null, null];
  }
}
class $serializer {
  constructor() {
    $serializer_instance = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('com.bedalton.creatures.catalogue.validation.CatalogueError', this, 4);
    tmp0_serialDesc.z13('textRange', false);
    tmp0_serialDesc.z13('parserItem', false);
    tmp0_serialDesc.z13('message', false);
    tmp0_serialDesc.z13('errorType', false);
    this.x64_1 = tmp0_serialDesc;
  }
  y64(encoder, value) {
    var tmp0_desc = this.x64_1;
    var tmp1_output = encoder.ew(tmp0_desc);
    var tmp2_cached = Companion_getInstance_0().w64_1;
    tmp1_output.wx(tmp0_desc, 0, RangeWithIndexSerializer_getInstance(), value.z64_1);
    tmp1_output.yx(tmp0_desc, 1, tmp2_cached[1].r3(), value.a65_1);
    tmp1_output.ux(tmp0_desc, 2, value.b65_1);
    tmp1_output.px(tmp0_desc, 3, value.c65_1);
    tmp1_output.fw(tmp0_desc);
  }
  pr(encoder, value) {
    return this.y64(encoder, value instanceof CatalogueError ? value : THROW_CCE());
  }
  qr(decoder) {
    var tmp0_desc = this.x64_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = 0;
    var tmp8_input = decoder.ew(tmp0_desc);
    var tmp9_cached = Companion_getInstance_0().w64_1;
    if (tmp8_input.vw()) {
      tmp4_local0 = tmp8_input.qw(tmp0_desc, 0, RangeWithIndexSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp8_input.sw(tmp0_desc, 1, tmp9_cached[1].r3(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp8_input.ow(tmp0_desc, 2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp8_input.jw(tmp0_desc, 3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp8_input.ww(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp8_input.qw(tmp0_desc, 0, RangeWithIndexSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp8_input.sw(tmp0_desc, 1, tmp9_cached[1].r3(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp8_input.ow(tmp0_desc, 2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp8_input.jw(tmp0_desc, 3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          default:
            throw UnknownFieldException.ht(tmp2_index);
        }
      }
    tmp8_input.fw(tmp0_desc);
    return CatalogueError.d65(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, null);
  }
  or() {
    return this.x64_1;
  }
  o14() {
    var tmp0_cached = Companion_getInstance_0().w64_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [RangeWithIndexSerializer_getInstance(), get_nullable(tmp0_cached[1].r3()), StringSerializer_getInstance(), IntSerializer_getInstance()];
  }
}
class CatalogueError {
  constructor(textRange, parserItem, message, errorType) {
    Companion_getInstance_0();
    this.z64_1 = textRange;
    this.a65_1 = parserItem;
    this.b65_1 = message;
    this.c65_1 = errorType;
  }
  toString() {
    return 'CatalogueError(textRange=' + toString(this.z64_1) + ', parserItem=' + toString_0(this.a65_1) + ', message=' + this.b65_1 + ', errorType=' + this.c65_1 + ')';
  }
  hashCode() {
    var result = hashCode(this.z64_1);
    result = imul(result, 31) + (this.a65_1 == null ? 0 : hashCode(this.a65_1)) | 0;
    result = imul(result, 31) + getStringHashCode(this.b65_1) | 0;
    result = imul(result, 31) + this.c65_1 | 0;
    return result;
  }
  equals(other) {
    if (this === other)
      return true;
    if (!(other instanceof CatalogueError))
      return false;
    if (!equals(this.z64_1, other.z64_1))
      return false;
    if (!equals(this.a65_1, other.a65_1))
      return false;
    if (!(this.b65_1 === other.b65_1))
      return false;
    if (!(this.c65_1 === other.c65_1))
      return false;
    return true;
  }
  static d65(seen0, textRange, parserItem, message, errorType, serializationConstructorMarker) {
    Companion_getInstance_0();
    if (!(15 === (15 & seen0))) {
      throwMissingFieldException(seen0, 15, $serializer_getInstance().x64_1);
    }
    var $this = createThis(this);
    $this.z64_1 = textRange;
    $this.a65_1 = parserItem;
    $this.b65_1 = message;
    $this.c65_1 = errorType;
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
  e65() {
    return this.INVALID_OVERRIDE;
  }
  f65() {
    return this.ARRAY_TAG_CONFLICT;
  }
  g65() {
    return this.INVALID_ARRAY_COUNT;
  }
  h65() {
    return this.NEEDS_QUOTES;
  }
  i65() {
    return this.EXTRANEOUS_VALUE;
  }
  j65() {
    return this.MUST_BE_UPPERCASE;
  }
  k65() {
    return this.SINGLE_QUOTES;
  }
  l65() {
    return this.INCOMPLETE_QUOTE;
  }
}
class sam$kotlin_Comparator$0 {
  constructor(function_0) {
    this.m65_1 = function_0;
  }
  zg(a, b) {
    return this.m65_1(a, b);
  }
  compare(a, b) {
    return this.zg(a, b);
  }
  m4() {
    return this.m65_1;
  }
  equals(other) {
    var tmp;
    if (!(other == null) ? isInterface(other, Comparator) : false) {
      var tmp_0;
      if (!(other == null) ? isInterface(other, FunctionAdapter) : false) {
        tmp_0 = equals(this.m4(), other.m4());
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
    return hashCode(this.m4());
  }
}
class CatalogueValidator {
  n65(parseResult) {
    return this.o65(parseResult.catalogueEntries, parseResult.looseItems, parseResult.parserItems);
  }
  o65(entries, looseItems, parserItems) {
    // Inline function 'kotlin.collections.mutableListOf' call
    var out = ArrayList.b2();
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
  return Companion_getInstance().n1e();
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
  var error = new CatalogueError(item.g1e(), item, message, errorType);
  out.g2(error);
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
  var tmp = item.m1f();
  // Inline function 'kotlin.text.uppercase' call
  // Inline function 'kotlin.js.asDynamic' call
  if (tmp === item.m1f().toUpperCase()) {
    return Unit_instance;
  }
  var error = new CatalogueError(item.g1e(), item, 'Keyword "' + item.m1f() + '" must be uppercase', 6);
  out.g2(error);
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
    var error = new CatalogueError(item.g1e(), item, 'Values must be quoted', 4);
    out.g2(error);
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
  var tmp = get_sortValue(a.z64_1);
  var tmp$ret$2 = get_sortValue(b.z64_1);
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
        var this_1 = this_0.uw();
        // Inline function 'kotlinx.serialization.internal.cast' call
        var this_2 = serializer(this_1, createKType(getKClass(CatalogueParseResult), arrayOf([]), false));
        var tmp$ret$1 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
        tmp = decodeFromDynamic(this_0, tmp$ret$1, catalogue);
      } else {
        throw Exception.lc('Unexpected catalogue parser data');
      }
    }
  }
  var parseResult = tmp;
  var errors = CatalogueValidator_instance.o65(parseResult.catalogueEntries, parseResult.looseItems, parseResult.parserItems);
  // Inline function 'kotlin.collections.isEmpty' call
  if (errors.length === 0) {
    // Inline function 'kotlin.emptyArray' call
    return [];
  }
  // Inline function 'kotlinx.serialization.json.encodeToDynamic' call
  var this_3 = get_catalogueJson();
  // Inline function 'kotlinx.serialization.serializer' call
  var this_4 = this_3.uw();
  // Inline function 'kotlinx.serialization.internal.cast' call
  var this_5 = serializer(this_4, createKType(PrimitiveClasses_getInstance().le(), arrayOf([createInvariantKTypeProjection(createKType(getKClass(CatalogueError), arrayOf([]), false))]), false));
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
protoOf($serializer).p14 = typeParametersSerializers;
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
