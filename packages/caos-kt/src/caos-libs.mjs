import {
  ArrayList3it5z8td81qkl as ArrayList,
  addAll1k27qatfgp3k5 as addAll,
  Unit_instancev9v8hjid95df as Unit_instance,
  copyToArray2j022khrow2yi as copyToArray,
  plus310ted5e4i90h as plus,
  toIntArray2d4xwvtjb01mq as toIntArray,
  to2cs3ny02qtbcb as to,
  toMap1vec9topfei08 as toMap,
  lazy2hsh8ze7j6ikd as lazy,
  KProperty1ca4yb4wlo496 as KProperty1,
  getPropertyCallableRef3hckxc0xueiaj as getPropertyCallableRef,
  equals2v6cggk171b6e as equals,
  VOID3gxj6tk5isa35 as VOID,
  Regexxgw0gjiagf4z as Regex,
  collectionSizeOrDefault36dulx8yinfqm as collectionSizeOrDefault,
  initMetadataForClassbxx6q50dy2s7 as initMetadataForClass,
  equals2au1ep9vhcato as equals_0,
  FunctionAdapter3lcrrz3moet5b as FunctionAdapter,
  isInterface3d6p8outrmvmk as isInterface,
  Comparator2b3maoeh98xtg as Comparator,
  hashCodeq5arwsb9dgti as hashCode,
  LinkedHashMap1zhqxkxv3xnkl as LinkedHashMap,
  ensureNotNull1e947j3ixpazm as ensureNotNull,
  mapOf1xd03cq9cnmy8 as mapOf,
  THROW_CCE2g6jy02ryeudk as THROW_CCE,
  emptyList1g2z5xcrvp2zy as emptyList,
  compareValues1n2ayl87ihzfk as compareValues,
  contains1tccixv8iwdcq as contains,
  getOrNullef5jbxih7r4f as getOrNull,
  Paire9pteg33gng7 as Pair,
  Exceptiondt2hlxn7j7vw as Exception,
  toString1pkumu07cwy4m as toString,
  sortedWith13ny3qsmk2kn8 as sortedWith,
  initMetadataForObject1cxne3s9w65el as initMetadataForObject,
  initMetadataForInterface1egvbzx539z91 as initMetadataForInterface,
  copyOfRange1v9olvyjr7c0r as copyOfRange,
  joinToStringo3uw31d7e8og as joinToString,
  toList383f556t1dixk as toList,
  sortedWith2csnbbb21k0lg as sortedWith_0,
  first58ocm7j58k3q as first,
  protoOf180f3jzyo7rfj as protoOf,
  _Char___init__impl__6a9atx2gndcvjvc5pke as _Char___init__impl__6a9atx,
  charArrayOf27f4r3dozbrk1 as charArrayOf,
  split3d3yeauc4rm2n as split,
  contains3u8qpdzrl9an as contains_0,
  KProperty02ce7r476m8633 as KProperty0,
  getKClass3t8tygqu4lcxf as getKClass,
  arrayOf1akklvh2at202 as arrayOf,
  createKType31ecntyyaay3k as createKType,
  PrimitiveClasses_getInstanceds06xwqrwfdm as PrimitiveClasses_getInstance,
  createInvariantKTypeProjection3h5364czc0a8w as createInvariantKTypeProjection,
} from './kotlin-kotlin-stdlib.mjs';
import {
  throwOnInvalid3qrq0nbcv2ih3 as throwOnInvalid,
  Companion_getInstance3vd61mqbhyckz as Companion_getInstance,
  ValueType_ANY_getInstance2q5nm1hp7r7t9 as ValueType_ANY_getInstance,
  CommandType3lkx67ym5p71i as CommandType,
  token1mihb7gu4zjp0 as token,
  Companion_instance1rqzem4e6o708 as Companion_instance,
  token1u5hn8rkgpmre as token_0,
  likes8ybtqy04zqg as like,
} from './caos-core.mjs';
import { get_universalLib38e6v52ntart6 as get_universalLib } from './caos-libs-definitions-provider.mjs';
import {
  HasGetterImplwlmesz4hhsp0 as HasGetterImpl,
  toVariantCommand39sm5na6okek1 as toVariantCommand,
  Commands1nb2w46x6pqxt as Commands,
  CaosValuesList2rvf4fhtfg19g as CaosValuesList,
} from './caos-lib-structs.mjs';
import {
  serializer1i4e9ym37oxmo as serializer,
  KSerializerzf77vz1967fq as KSerializer,
} from './kotlinx-serialization-kotlinx-serialization-core.mjs';
import {
  encodeToDynamicsae9c2u7066d as encodeToDynamic,
  Jsonsmkyu9xjl7fv as Json,
} from './kotlinx-serialization-kotlinx-serialization-json.mjs';
//region block: imports
//endregion
//region block: pre-declaration
class CaosLib {
  constructor(lib, variant) {
    this.h4v_1 = lib;
    this.i4v_1 = variant;
    var tmp = this;
    switch (this.i4v_1.v4s_1) {
      case 'DS':
        tmp.j4v_1 = false;
        break;
      case 'DS:CE':
        tmp.j4v_1 = true;
        break;
      default:
        tmp.j4v_1 = null;
        break;
    }
    var tmp_0 = this;
    var tmp_1 = this.h4v_1.p4q();
    // Inline function 'kotlin.collections.map' call
    var this_0 = this.i4v_1.z4s_1;
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList.y1(this_0.b2());
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s = this_0.m2().w();
    while (_iterator__ex2g4s.x()) {
      var item = _iterator__ex2g4s.y();
      // Inline function 'kotlin.collections.component1' call
      var commandString = item.j3();
      // Inline function 'kotlin.collections.component2' call
      var commandIds = item.k3();
      var tmp$ret$3 = to(commandString, toIntArray(commandIds.o3()));
      destination.z1(tmp$ret$3);
    }
    tmp_0.k4v_1 = new CaosCommandMap(tmp_1, toMap(destination), this.j4v_1);
    var tmp_2 = this;
    tmp_2.l4v_1 = lazy(CaosLib$rvalues$delegate$lambda(this));
    var tmp_3 = this;
    var tmp_4 = this.h4v_1.p4q();
    // Inline function 'kotlin.collections.map' call
    var this_1 = this.i4v_1.y4s_1;
    // Inline function 'kotlin.collections.mapTo' call
    var destination_0 = ArrayList.y1(this_1.b2());
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s_0 = this_1.m2().w();
    while (_iterator__ex2g4s_0.x()) {
      var item_0 = _iterator__ex2g4s_0.y();
      // Inline function 'kotlin.collections.component1' call
      var commandString_0 = item_0.j3();
      // Inline function 'kotlin.collections.component2' call
      var commandId = item_0.k3();
      // Inline function 'kotlin.intArrayOf' call
      var tmp$ret$12 = new Int32Array([commandId]);
      var tmp$ret$9 = to(commandString_0, tmp$ret$12);
      destination_0.z1(tmp$ret$9);
    }
    tmp_3.m4v_1 = new CaosCommandMap(tmp_4, toMap(destination_0), this.j4v_1);
    var tmp_5 = this;
    tmp_5.n4v_1 = lazy(CaosLib$lvalues$delegate$lambda(this));
    var tmp_6 = this;
    var tmp_7 = this.h4v_1.p4q();
    // Inline function 'kotlin.collections.map' call
    var this_2 = this.i4v_1.x4s_1;
    // Inline function 'kotlin.collections.mapTo' call
    var destination_1 = ArrayList.y1(this_2.b2());
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s_1 = this_2.m2().w();
    while (_iterator__ex2g4s_1.x()) {
      var item_1 = _iterator__ex2g4s_1.y();
      // Inline function 'kotlin.collections.component1' call
      var commandString_1 = item_1.j3();
      // Inline function 'kotlin.collections.component2' call
      var commandId_0 = item_1.k3();
      // Inline function 'kotlin.intArrayOf' call
      var tmp$ret$19 = new Int32Array([commandId_0]);
      var tmp$ret$16 = to(commandString_1, tmp$ret$19);
      destination_1.z1(tmp$ret$16);
    }
    tmp_6.o4v_1 = new CaosCommandMap(tmp_7, toMap(destination_1), this.j4v_1);
    var tmp_8 = this;
    tmp_8.p4v_1 = lazy(CaosLib$commands$delegate$lambda(this));
    var tmp_9 = this;
    tmp_9.q4v_1 = lazy(CaosLib$allCommands$delegate$lambda(this));
    this.r4v_1 = this.i4v_1.w4s_1;
    this.s4v_1 = this.i4v_1.v4s_1;
    this.t4v_1 = this.i4v_1.u4s_1;
  }
  l4t() {
    var tmp0 = this.l4v_1;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('rvalues', 1, tmp, CaosLib$_get_rvalues_$ref_yauua3(), null);
    return tmp0.k3();
  }
  m4t() {
    var tmp0 = this.n4v_1;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('lvalues', 1, tmp, CaosLib$_get_lvalues_$ref_lhqp3l(), null);
    return tmp0.k3();
  }
  k4t() {
    var tmp0 = this.p4v_1;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('commands', 1, tmp, CaosLib$_get_commands_$ref_38ij03(), null);
    return tmp0.k3();
  }
  u4v() {
    return CaosLibs_getInstance().a4w(this.i4v_1.a4t_1);
  }
  valuesListWithId(valuesListId) {
    return CaosLibs_getInstance().y4v_1.get(valuesListId);
  }
  valuesListWithName(valuesListName) {
    var tmp0 = this.u4v();
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlin.collections.firstOrNull' call
      var inductionVariable = 0;
      var last = tmp0.length;
      while (inductionVariable < last) {
        var element = tmp0[inductionVariable];
        inductionVariable = inductionVariable + 1 | 0;
        if (equals(element.name, valuesListName, true)) {
          tmp$ret$0 = element;
          break $l$block;
        }
      }
      tmp$ret$0 = null;
    }
    return tmp$ret$0;
  }
  b4w(type) {
    var tmp;
    if (type === Companion_getInstance().b1t_1) {
      tmp = this.k4v_1;
    } else if (type === Companion_getInstance().a1t_1) {
      tmp = this.m4v_1;
    } else if (type === Companion_getInstance().z1s_1) {
      tmp = this.o4v_1;
    } else {
      throwOnInvalid(type);
    }
    return tmp;
  }
  c4w(type, tokens, bias) {
    var tmp;
    if (type === Companion_getInstance().b1t_1) {
      tmp = this.k4v_1;
    } else if (type === Companion_getInstance().a1t_1) {
      tmp = this.m4v_1;
    } else if (type === Companion_getInstance().z1s_1) {
      tmp = this.o4v_1;
    } else {
      throwOnInvalid(type);
    }
    return tmp.d4w(tokens, bias);
  }
  getCommandWithTypeEnum(type, tokens, bias, $super) {
    bias = bias === VOID ? ValueType_ANY_getInstance() : bias;
    return $super === VOID ? this.c4w(type, tokens, bias) : $super.c4w.call(this, new CommandType(type), tokens, bias);
  }
  e4w(type, commandString, bias) {
    // Inline function 'kotlin.text.toRegex' call
    // Inline function 'kotlin.text.split' call
    // Inline function 'kotlin.collections.map' call
    var this_0 = Regex.uf('\\s+').eg(commandString, 0);
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList.y1(collectionSizeOrDefault(this_0, 10));
    var _iterator__ex2g4s = this_0.w();
    while (_iterator__ex2g4s.x()) {
      var item = _iterator__ex2g4s.y();
      // Inline function 'kotlin.text.lowercase' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp$ret$5 = item.toLowerCase();
      var tmp$ret$4 = token(tmp$ret$5);
      destination.z1(tmp$ret$4);
    }
    var tokens = toIntArray(destination);
    var tmp;
    if (type === Companion_getInstance().b1t_1) {
      tmp = this.k4v_1;
    } else if (type === Companion_getInstance().a1t_1) {
      tmp = this.m4v_1;
    } else if (type === Companion_getInstance().z1s_1) {
      tmp = this.o4v_1;
    } else {
      throwOnInvalid(type);
    }
    return tmp.d4w(tokens, bias);
  }
  getCommandFromString(type, commandString, bias, $super) {
    bias = bias === VOID ? ValueType_ANY_getInstance() : bias;
    return $super === VOID ? this.e4w(type, commandString, bias) : $super.e4w.call(this, new CommandType(type), commandString, bias);
  }
  f4w(type, tokens, bias) {
    var tmp;
    if (type === Companion_getInstance().b1t_1) {
      tmp = this.k4v_1;
    } else if (type === Companion_getInstance().a1t_1) {
      tmp = this.m4v_1;
    } else if (type === Companion_getInstance().z1s_1) {
      tmp = this.o4v_1;
    } else {
      throwOnInvalid(type);
    }
    return tmp.d4w(tokens, Companion_instance.fromIntValue(bias));
  }
  get(type, tokens, bias, $super) {
    bias = bias === VOID ? ValueType_ANY_getInstance().value : bias;
    return $super === VOID ? this.f4w(type, tokens, bias) : $super.f4w.call(this, new CommandType(type), tokens, bias);
  }
}
class sam$kotlin_Comparator$0 {
  constructor(function_0) {
    this.g4w_1 = function_0;
  }
  wg(a, b) {
    return this.g4w_1(a, b);
  }
  compare(a, b) {
    return this.wg(a, b);
  }
  f4() {
    return this.g4w_1;
  }
  equals(other) {
    var tmp;
    if (!(other == null) ? isInterface(other, Comparator) : false) {
      var tmp_0;
      if (!(other == null) ? isInterface(other, FunctionAdapter) : false) {
        tmp_0 = equals_0(this.f4(), other.f4());
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
class CaosLibs$valuesList$1 {
  d2(key) {
    return CaosLibs_getInstance().h4w().m4q_1.r3('list_' + key);
  }
  get(key) {
    return this.d2((!(key == null) ? typeof key === 'number' : false) ? key : THROW_CCE());
  }
}
class CaosLibs {
  constructor() {
    CaosLibs_instance = this;
    var tmp = this;
    tmp.v4v_1 = lazy(CaosLibs$ceOnlyCommands$delegate$lambda);
    var tmp_0 = this;
    tmp_0.w4v_1 = lazy(CaosLibs$universalLib$delegate$lambda);
    var tmp_1 = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp_1.x4v_1 = LinkedHashMap.mb();
    var tmp_2 = this;
    tmp_2.y4v_1 = new CaosLibs$valuesList$1();
    var tmp_3 = this;
    tmp_3.z4v_1 = lazy(CaosLibs$valuesLists$delegate$lambda);
  }
  h4w() {
    var tmp0 = this.w4v_1;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('universalLib', 1, tmp, CaosLibs$_get_universalLib_$ref_3hwyms(), null);
    return tmp0.k3();
  }
  a4w(ids) {
    // Inline function 'kotlin.collections.filter' call
    var tmp0 = this.h4w().m4q_1.o3();
    // Inline function 'kotlin.collections.filterTo' call
    var destination = ArrayList.u1();
    var _iterator__ex2g4s = tmp0.w();
    while (_iterator__ex2g4s.x()) {
      var element = _iterator__ex2g4s.y();
      if (contains(ids, element.id)) {
        destination.z1(element);
      }
    }
    // Inline function 'kotlin.collections.toTypedArray' call
    return copyToArray(destination);
  }
  j4w(tokens) {
    var numTokens = tokens.length;
    if (numTokens < 1)
      return null;
    // Inline function 'kotlin.collections.filter' call
    var tmp0 = this.h4w().k4q_1.o3();
    // Inline function 'kotlin.collections.filterTo' call
    var destination = ArrayList.u1();
    var _iterator__ex2g4s = tmp0.w();
    while (_iterator__ex2g4s.x()) {
      var element = _iterator__ex2g4s.y();
      if (element.j1s()[0] === tokens[0]) {
        destination.z1(element);
      }
    }
    var tmp0_elvis_lhs = this.k4w(destination);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return null;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var matchSets = tmp;
    var depth = 1;
    var tmp_0;
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!matchSets.u()) {
      tmp_0 = tokens.length > 1;
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      // Inline function 'kotlin.collections.filter' call
      var tmp0_0 = matchSets;
      // Inline function 'kotlin.collections.filterTo' call
      var destination_0 = ArrayList.u1();
      var _iterator__ex2g4s_0 = tmp0_0.w();
      while (_iterator__ex2g4s_0.x()) {
        var element_0 = _iterator__ex2g4s_0.y();
        if (tokens[1] === getOrNull(element_0.j1s(), 1)) {
          destination_0.z1(element_0);
        }
      }
      var tempMatches = destination_0;
      // Inline function 'kotlin.collections.isNotEmpty' call
      if (!tempMatches.u()) {
        depth = depth + 1 | 0;
        matchSets = tempMatches;
        if (tokens.length > 2) {
          // Inline function 'kotlin.collections.filter' call
          var tmp0_1 = matchSets;
          // Inline function 'kotlin.collections.filterTo' call
          var destination_1 = ArrayList.u1();
          var _iterator__ex2g4s_1 = tmp0_1.w();
          while (_iterator__ex2g4s_1.x()) {
            var element_1 = _iterator__ex2g4s_1.y();
            if (tokens[2] === getOrNull(element_1.j1s(), 2)) {
              destination_1.z1(element_1);
            }
          }
          tempMatches = destination_1;
          // Inline function 'kotlin.collections.isNotEmpty' call
          if (!tempMatches.u()) {
            depth = depth + 1 | 0;
            matchSets = tempMatches;
          }
        }
      }
    }
    // Inline function 'kotlin.collections.filter' call
    var tmp0_2 = matchSets;
    // Inline function 'kotlin.collections.filterTo' call
    var destination_2 = ArrayList.u1();
    var _iterator__ex2g4s_2 = tmp0_2.w();
    while (_iterator__ex2g4s_2.x()) {
      var element_2 = _iterator__ex2g4s_2.y();
      if (element_2.j1s().length === depth) {
        destination_2.z1(element_2);
      }
    }
    matchSets = destination_2;
    return new Pair(matchSets, depth);
  }
  kg(variantCode) {
    var tmp0_safe_receiver = this.x4v_1.r3(variantCode);
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      return tmp0_safe_receiver;
    }
    var tmp1_elvis_lhs = this.h4w().l4q_1.r3(variantCode);
    var tmp;
    if (tmp1_elvis_lhs == null) {
      throw Exception.gc("Invalid variant: '" + variantCode + "' encountered. Known variants are: " + toString(this.h4w().l4q_1.n3()));
    } else {
      tmp = tmp1_elvis_lhs;
    }
    var variant = tmp;
    var lib = new CaosLib(this.h4w(), variant);
    // Inline function 'kotlin.collections.set' call
    this.x4v_1.l3(variantCode, lib);
    return lib;
  }
  i4w(_this__u8e3s4) {
    // Inline function 'kotlin.collections.sortedBy' call
    var this_0 = this.a4w(_this__u8e3s4.a4t_1);
    // Inline function 'kotlin.comparisons.compareBy' call
    var tmp = CaosLibs$_get_valuesLists_$lambda_xys3of;
    var tmp$ret$1 = new sam$kotlin_Comparator$0(tmp);
    return sortedWith(this_0, tmp$ret$1);
  }
  k4w(_this__u8e3s4) {
    var tmp;
    // Inline function 'kotlin.collections.isNullOrEmpty' call
    if (_this__u8e3s4 == null || _this__u8e3s4.u()) {
      tmp = null;
    } else {
      tmp = _this__u8e3s4;
    }
    return tmp;
  }
}
class CommandGetter {}
function get$default(tokens, bias, $super) {
  bias = bias === VOID ? ValueType_ANY_getInstance() : bias;
  return $super === VOID ? this.d4w(tokens, bias) : $super.d4w.call(this, tokens, bias);
}
class sam$kotlin_Comparator$0_0 {
  constructor(function_0) {
    this.m4w_1 = function_0;
  }
  wg(a, b) {
    return this.m4w_1(a, b);
  }
  compare(a, b) {
    return this.wg(a, b);
  }
  f4() {
    return this.m4w_1;
  }
  equals(other) {
    var tmp;
    if (!(other == null) ? isInterface(other, Comparator) : false) {
      var tmp_0;
      if (!(other == null) ? isInterface(other, FunctionAdapter) : false) {
        tmp_0 = equals_0(this.f4(), other.f4());
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
class CaosCommandMap {
  constructor(commands, tokenIds, ceEnabled) {
    this.n4w_1 = mapCommands(commands, tokenIds, ceEnabled);
  }
  d4w(tokens, bias) {
    var numTokens = tokens.length;
    if (numTokens < 1)
      return null;
    // Inline function 'kotlin.collections.filter' call
    var tmp0 = this.n4w_1;
    // Inline function 'kotlin.collections.filterTo' call
    var destination = ArrayList.u1();
    var _iterator__ex2g4s = tmp0.w();
    while (_iterator__ex2g4s.x()) {
      var element = _iterator__ex2g4s.y();
      if (tokens[0] === element.first[0]) {
        destination.z1(element);
      }
    }
    var matchSets = destination;
    var depth = 0;
    var inductionVariable = 0;
    var last = tokens.length - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlin.collections.filter' call
        var tmp0_0 = matchSets;
        // Inline function 'kotlin.collections.filterTo' call
        var destination_0 = ArrayList.u1();
        var _iterator__ex2g4s_0 = tmp0_0.w();
        while (_iterator__ex2g4s_0.x()) {
          var element_0 = _iterator__ex2g4s_0.y();
          if (element_0.first.length > i && tokens[i] === element_0.first[i]) {
            destination_0.z1(element_0);
          }
        }
        var tempMatches = destination_0;
        // Inline function 'kotlin.collections.isNotEmpty' call
        if (!tempMatches.u()) {
          depth = depth + 1 | 0;
          matchSets = tempMatches;
        }
      }
       while (inductionVariable <= last);
    // Inline function 'kotlin.collections.filter' call
    var tmp0_1 = matchSets;
    // Inline function 'kotlin.collections.filterTo' call
    var destination_1 = ArrayList.u1();
    var _iterator__ex2g4s_1 = tmp0_1.w();
    while (_iterator__ex2g4s_1.x()) {
      var element_1 = _iterator__ex2g4s_1.y();
      if (element_1.first.length === depth) {
        destination_1.z1(element_1);
      }
    }
    matchSets = destination_1;
    if (matchSets.u()) {
      return null;
    }
    if (matchSets.b2() > 1) {
      var tmp = copyOfRange(tokens, 0, depth);
      throw Exception.gc('Too many results returned for command ' + joinToString(tmp, ' ', VOID, VOID, VOID, VOID, CaosCommandMap$get$lambda));
    }
    // Inline function 'kotlin.collections.flatMap' call
    var tmp0_2 = matchSets;
    // Inline function 'kotlin.collections.flatMapTo' call
    var destination_2 = ArrayList.u1();
    var _iterator__ex2g4s_2 = tmp0_2.w();
    while (_iterator__ex2g4s_2.x()) {
      var element_2 = _iterator__ex2g4s_2.y();
      var list = toList(element_2.second);
      addAll(destination_2, list);
    }
    var matches = destination_2;
    // Inline function 'kotlin.collections.sortedBy' call
    var this_0 = matches;
    // Inline function 'kotlin.comparisons.compareBy' call
    var tmp_0 = CaosCommandMap$get$lambda_0(bias);
    var tmp$ret$14 = new sam$kotlin_Comparator$0_0(tmp_0);
    matches = sortedWith_0(this_0, tmp$ret$14);
    return new Pair(first(matches), depth);
  }
}
//endregion
function CaosLib$rvalues$delegate$lambda(this$0) {
  return () => {
    // Inline function 'kotlin.collections.flatMap' call
    var tmp0 = this$0.i4v_1.z4s_1.o3();
    // Inline function 'kotlin.collections.flatMapTo' call
    var destination = ArrayList.u1();
    var _iterator__ex2g4s = tmp0.w();
    while (_iterator__ex2g4s.x()) {
      var element = _iterator__ex2g4s.y();
      var list = element.o3();
      addAll(destination, list);
    }
    var rvalueCommandIds = destination;
    // Inline function 'kotlin.collections.filter' call
    var tmp0_0 = this$0.h4v_1.k4q_1.o3();
    // Inline function 'kotlin.collections.filterTo' call
    var destination_0 = ArrayList.u1();
    var _iterator__ex2g4s_0 = tmp0_0.w();
    while (_iterator__ex2g4s_0.x()) {
      var element_0 = _iterator__ex2g4s_0.y();
      if (rvalueCommandIds.g2(element_0.i4p_1) && (this$0.j4v_1 == null || this$0.j4v_1 || !(element_0.w4p_1 === true))) {
        destination_0.z1(element_0);
      }
    }
    // Inline function 'kotlin.collections.toTypedArray' call
    return copyToArray(destination_0);
  };
}
function CaosLib$_get_rvalues_$ref_yauua3() {
  return (p0) => p0.l4t();
}
function CaosLib$lvalues$delegate$lambda(this$0) {
  return () => {
    var lvalueCommandIds = this$0.i4v_1.y4s_1.o3();
    // Inline function 'kotlin.collections.filter' call
    var tmp0 = this$0.h4v_1.k4q_1.o3();
    // Inline function 'kotlin.collections.filterTo' call
    var destination = ArrayList.u1();
    var _iterator__ex2g4s = tmp0.w();
    while (_iterator__ex2g4s.x()) {
      var element = _iterator__ex2g4s.y();
      if (lvalueCommandIds.g2(element.i4p_1) && (this$0.j4v_1 == null || this$0.j4v_1 || !(element.w4p_1 === true))) {
        destination.z1(element);
      }
    }
    // Inline function 'kotlin.collections.toTypedArray' call
    return copyToArray(destination);
  };
}
function CaosLib$_get_lvalues_$ref_lhqp3l() {
  return (p0) => p0.m4t();
}
function CaosLib$commands$delegate$lambda(this$0) {
  return () => {
    var commandIds = this$0.i4v_1.x4s_1.o3();
    // Inline function 'kotlin.collections.filter' call
    var tmp0 = this$0.h4v_1.k4q_1.o3();
    // Inline function 'kotlin.collections.filterTo' call
    var destination = ArrayList.u1();
    var _iterator__ex2g4s = tmp0.w();
    while (_iterator__ex2g4s.x()) {
      var element = _iterator__ex2g4s.y();
      if (commandIds.g2(element.i4p_1) && (this$0.j4v_1 == null || this$0.j4v_1 || !(element.w4p_1 === true))) {
        destination.z1(element);
      }
    }
    // Inline function 'kotlin.collections.toTypedArray' call
    return copyToArray(destination);
  };
}
function CaosLib$_get_commands_$ref_38ij03() {
  return (p0) => p0.k4t();
}
function CaosLib$allCommands$delegate$lambda(this$0) {
  return () => {
    // Inline function 'kotlin.collections.flatMap' call
    var tmp0 = this$0.i4v_1.z4s_1.o3();
    // Inline function 'kotlin.collections.flatMapTo' call
    var destination = ArrayList.u1();
    var _iterator__ex2g4s = tmp0.w();
    while (_iterator__ex2g4s.x()) {
      var element = _iterator__ex2g4s.y();
      var list = element.o3();
      addAll(destination, list);
    }
    var commandIds = plus(plus(destination, this$0.i4v_1.y4s_1.o3()), this$0.i4v_1.x4s_1.o3());
    // Inline function 'kotlin.collections.filter' call
    var tmp0_0 = this$0.h4v_1.k4q_1.o3();
    // Inline function 'kotlin.collections.filterTo' call
    var destination_0 = ArrayList.u1();
    var _iterator__ex2g4s_0 = tmp0_0.w();
    while (_iterator__ex2g4s_0.x()) {
      var element_0 = _iterator__ex2g4s_0.y();
      if (commandIds.g2(element_0.i4p_1) && (this$0.j4v_1 == null || this$0.j4v_1 || !(element_0.w4p_1 === true))) {
        destination_0.z1(element_0);
      }
    }
    // Inline function 'kotlin.collections.toTypedArray' call
    return copyToArray(destination_0);
  };
}
function CaosLibs$ceOnlyCommands$delegate$lambda() {
  // Inline function 'kotlin.collections.filter' call
  var tmp0 = CaosLibs_getInstance().h4w().k4q_1;
  // Inline function 'kotlin.collections.filterTo' call
  var destination = LinkedHashMap.mb();
  // Inline function 'kotlin.collections.iterator' call
  var _iterator__ex2g4s = tmp0.m2().w();
  while (_iterator__ex2g4s.x()) {
    var element = _iterator__ex2g4s.y();
    if (element.k3().w4p_1 === true) {
      destination.l3(element.j3(), element.k3());
    }
  }
  // Inline function 'kotlin.collections.map' call
  // Inline function 'kotlin.collections.mapTo' call
  var destination_0 = ArrayList.y1(destination.b2());
  // Inline function 'kotlin.collections.iterator' call
  var _iterator__ex2g4s_0 = destination.m2().w();
  while (_iterator__ex2g4s_0.x()) {
    var item = _iterator__ex2g4s_0.y();
    var tmp$ret$7 = item.k3().i4p_1;
    destination_0.z1(tmp$ret$7);
  }
  return destination_0;
}
function CaosLibs$universalLib$delegate$lambda() {
  var lib = get_universalLib();
  // Inline function 'kotlin.collections.map' call
  var this_0 = lib.k4q_1;
  // Inline function 'kotlin.collections.mapTo' call
  var destination = ArrayList.y1(this_0.b2());
  // Inline function 'kotlin.collections.iterator' call
  var _iterator__ex2g4s = this_0.m2().w();
  while (_iterator__ex2g4s.x()) {
    var item = _iterator__ex2g4s.y();
    // Inline function 'kotlin.collections.component1' call
    var key = item.j3();
    // Inline function 'kotlin.collections.component2' call
    var command = item.k3();
    var tmp$ret$3 = to(key, applyCE(command));
    destination.z1(tmp$ret$3);
  }
  return lib.r4q(VOID, toMap(destination), mapOf([to('C1', ensureNotNull(lib.l4q_1.r3('C1'))), to('C2', ensureNotNull(lib.l4q_1.r3('C2'))), to('CV', ensureNotNull(lib.l4q_1.r3('CV'))), to('C3', ensureNotNull(lib.l4q_1.r3('C3'))), to('DS', ensureNotNull(lib.l4q_1.r3('DS'))), to('DS:CE', ensureNotNull(lib.l4q_1.r3('DS')).f4t('DS: Community Edition', 'DS:CE')), to('SM', ensureNotNull(lib.l4q_1.r3('SM')))]));
}
function CaosLibs$_get_universalLib_$ref_3hwyms() {
  return (p0) => p0.h4w();
}
function CaosLibs$valuesLists$delegate$lambda() {
  return new HasGetterImpl(CaosLibs$valuesLists$delegate$lambda$lambda);
}
function CaosLibs$valuesLists$delegate$lambda$lambda(variant) {
  var tmp0_safe_receiver = CaosLibs_getInstance().h4w().l4q_1.r3(variant.m4s());
  // Inline function 'kotlin.collections.orEmpty' call
  var tmp0_elvis_lhs = tmp0_safe_receiver == null ? null : CaosLibs_getInstance().i4w(tmp0_safe_receiver);
  return tmp0_elvis_lhs == null ? emptyList() : tmp0_elvis_lhs;
}
function CaosLibs$_get_valuesLists_$lambda_xys3of(a, b) {
  // Inline function 'kotlin.comparisons.compareValuesBy' call
  var tmp = a.name;
  var tmp$ret$2 = b.name;
  return compareValues(tmp, tmp$ret$2);
}
var CaosLibs_instance;
function CaosLibs_getInstance() {
  if (CaosLibs_instance === VOID)
    new CaosLibs();
  return CaosLibs_instance;
}
function applyCE(_this__u8e3s4) {
  if (!contains(_this__u8e3s4.p4p_1, 'DS')) {
    return _this__u8e3s4;
  }
  // Inline function 'kotlin.collections.plus' call
  // Inline function 'kotlin.js.asDynamic' call
  var tmp$ret$1 = _this__u8e3s4.p4p_1;
  // Inline function 'kotlin.arrayOf' call
  // Inline function 'kotlin.js.unsafeCast' call
  // Inline function 'kotlin.js.asDynamic' call
  var tmp$ret$2 = ['DS:CE'];
  var variants = tmp$ret$1.concat(tmp$ret$2);
  if (_this__u8e3s4.w4p_1 === true) {
    // Inline function 'kotlin.collections.filter' call
    var tmp0 = variants;
    // Inline function 'kotlin.collections.filterTo' call
    var destination = ArrayList.u1();
    var inductionVariable = 0;
    var last = tmp0.length;
    while (inductionVariable < last) {
      var element = tmp0[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      if (!(element === 'DS')) {
        destination.z1(element);
      }
    }
    // Inline function 'kotlin.collections.toTypedArray' call
    variants = copyToArray(destination);
  }
  return _this__u8e3s4.f4q(VOID, VOID, VOID, VOID, VOID, VOID, VOID, variants);
}
function getCommandsForLib(variant) {
  var lib = CaosLibs_getInstance().kg(variant);
  // Inline function 'kotlin.collections.map' call
  var this_0 = lib.k4t();
  // Inline function 'kotlin.collections.mapTo' call
  var destination = ArrayList.y1(this_0.length);
  var inductionVariable = 0;
  var last = this_0.length;
  while (inductionVariable < last) {
    var item = this_0[inductionVariable];
    inductionVariable = inductionVariable + 1 | 0;
    var tmp$ret$2 = toVariantCommand(item, variant);
    destination.z1(tmp$ret$2);
  }
  // Inline function 'kotlin.collections.toTypedArray' call
  var tmp0_commands = copyToArray(destination);
  // Inline function 'kotlin.collections.map' call
  var this_1 = lib.m4t();
  // Inline function 'kotlin.collections.mapTo' call
  var destination_0 = ArrayList.y1(this_1.length);
  var inductionVariable_0 = 0;
  var last_0 = this_1.length;
  while (inductionVariable_0 < last_0) {
    var item_0 = this_1[inductionVariable_0];
    inductionVariable_0 = inductionVariable_0 + 1 | 0;
    var tmp$ret$6 = toVariantCommand(item_0, variant);
    destination_0.z1(tmp$ret$6);
  }
  // Inline function 'kotlin.collections.toTypedArray' call
  var tmp1_lvalues = copyToArray(destination_0);
  // Inline function 'kotlin.collections.map' call
  var this_2 = lib.l4t();
  // Inline function 'kotlin.collections.mapTo' call
  var destination_1 = ArrayList.y1(this_2.length);
  var inductionVariable_1 = 0;
  var last_1 = this_2.length;
  while (inductionVariable_1 < last_1) {
    var item_1 = this_2[inductionVariable_1];
    inductionVariable_1 = inductionVariable_1 + 1 | 0;
    var tmp$ret$10 = toVariantCommand(item_1, variant);
    destination_1.z1(tmp$ret$10);
  }
  // Inline function 'kotlin.collections.toTypedArray' call
  var tmp2_rvalues = copyToArray(destination_1);
  return new Commands(tmp0_commands, tmp2_rvalues, tmp1_lvalues);
}
function CaosCommandMap$get$lambda(it) {
  // Inline function 'kotlin.text.uppercase' call
  // Inline function 'kotlin.js.asDynamic' call
  return token_0(it).toUpperCase();
}
function CaosCommandMap$get$lambda_0($bias) {
  return (a, b) => {
    // Inline function 'kotlin.comparisons.compareValuesBy' call
    var tmp = a.b4q().equals($bias) ? 0 : like(a.b4q(), $bias) ? 1 : 100;
    var tmp$ret$2 = b.b4q().equals($bias) ? 0 : like(b.b4q(), $bias) ? 1 : 100;
    return compareValues(tmp, tmp$ret$2);
  };
}
function mapCommands(commands, tokenIds, ceEnabled) {
  // Inline function 'kotlin.collections.map' call
  // Inline function 'kotlin.collections.mapTo' call
  var destination = ArrayList.y1(tokenIds.b2());
  // Inline function 'kotlin.collections.iterator' call
  var _iterator__ex2g4s = tokenIds.m2().w();
  while (_iterator__ex2g4s.x()) {
    var item = _iterator__ex2g4s.y();
    // Inline function 'kotlin.collections.component1' call
    var commandString = item.j3();
    // Inline function 'kotlin.collections.component2' call
    var commandIds = item.k3();
    // Inline function 'kotlin.collections.map' call
    var this_0 = split(commandString, charArrayOf([_Char___init__impl__6a9atx(32)]));
    // Inline function 'kotlin.collections.mapTo' call
    var destination_0 = ArrayList.y1(collectionSizeOrDefault(this_0, 10));
    var _iterator__ex2g4s_0 = this_0.w();
    while (_iterator__ex2g4s_0.x()) {
      var item_0 = _iterator__ex2g4s_0.y();
      var tmp$ret$8 = token(item_0);
      destination_0.z1(tmp$ret$8);
    }
    var tokens = toIntArray(destination_0);
    // Inline function 'kotlin.collections.filter' call
    // Inline function 'kotlin.collections.filterTo' call
    var destination_1 = LinkedHashMap.mb();
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s_1 = commands.m2().w();
    while (_iterator__ex2g4s_1.x()) {
      var element = _iterator__ex2g4s_1.y();
      if (contains_0(commandIds, element.j3())) {
        destination_1.l3(element.j3(), element.k3());
      }
    }
    // Inline function 'kotlin.collections.toTypedArray' call
    var this_1 = destination_1.o3();
    var matchingCommands = copyToArray(this_1);
    if (!(matchingCommands.length === commandIds.length))
      throw Exception.gc("Mismatched token to id conversion. Failed to find all referenced commands for '" + commandString + "'");
    var tmp$ret$3 = to(tokens, matchingCommands);
    destination.z1(tmp$ret$3);
  }
  var out = destination;
  var tmp;
  if (ceEnabled === false) {
    // Inline function 'kotlin.collections.mapNotNull' call
    // Inline function 'kotlin.collections.mapNotNullTo' call
    var destination_2 = ArrayList.u1();
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s_2 = out.w();
    while (_iterator__ex2g4s_2.x()) {
      var element_0 = _iterator__ex2g4s_2.y();
      var tokens_0 = element_0.ki();
      var commands_0 = element_0.li();
      // Inline function 'kotlin.collections.filter' call
      // Inline function 'kotlin.collections.filterTo' call
      var destination_3 = ArrayList.u1();
      var inductionVariable = 0;
      var last = commands_0.length;
      while (inductionVariable < last) {
        var element_1 = commands_0[inductionVariable];
        inductionVariable = inductionVariable + 1 | 0;
        if (!(element_1.w4p_1 === true)) {
          destination_3.z1(element_1);
        }
      }
      var filtered = destination_3;
      var tmp_0;
      // Inline function 'kotlin.collections.isNotEmpty' call
      if (!filtered.u()) {
        // Inline function 'kotlin.collections.toTypedArray' call
        var tmp$ret$23 = copyToArray(filtered);
        tmp_0 = to(tokens_0, tmp$ret$23);
      } else {
        tmp_0 = null;
      }
      var tmp0_safe_receiver = tmp_0;
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        destination_2.z1(tmp0_safe_receiver);
      }
    }
    tmp = destination_2;
  } else {
    tmp = out;
  }
  return tmp;
}
function getValuesList(id) {
  return get_universalLib().m4q_1.r3('list_' + id);
}
function getValueTypeName(value) {
  return Companion_instance.simpleName(value);
}
function get_caosLibsJsonSerializer() {
  _init_properties_libs_kt__k8ocmq();
  var tmp0 = caosLibsJsonSerializer$delegate;
  var tmp = KProperty0;
  // Inline function 'kotlin.getValue' call
  getPropertyCallableRef('caosLibsJsonSerializer', 0, tmp, _get_caosLibsJsonSerializer_$ref_d145f4(), null);
  return tmp0.k3();
}
var caosLibsJsonSerializer$delegate;
function getCommandsForVariant(variant) {
  _init_properties_libs_kt__k8ocmq();
  var result = getCommandsForLib(variant);
  // Inline function 'kotlinx.serialization.json.encodeToDynamic' call
  var this_0 = get_caosLibsJsonSerializer();
  // Inline function 'kotlinx.serialization.serializer' call
  var this_1 = this_0.rw();
  // Inline function 'kotlinx.serialization.internal.cast' call
  var this_2 = serializer(this_1, createKType(getKClass(Commands), arrayOf([]), false));
  var tmp$ret$1 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
  return encodeToDynamic(this_0, tmp$ret$1, result);
}
function getValuesList_0(id) {
  _init_properties_libs_kt__k8ocmq();
  var valuesList = getValuesList(id);
  // Inline function 'kotlinx.serialization.json.encodeToDynamic' call
  var this_0 = get_caosLibsJsonSerializer();
  // Inline function 'kotlinx.serialization.serializer' call
  var this_1 = this_0.rw();
  // Inline function 'kotlinx.serialization.internal.cast' call
  var this_2 = serializer(this_1, createKType(getKClass(CaosValuesList), arrayOf([]), true));
  var tmp$ret$1 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
  return encodeToDynamic(this_0, tmp$ret$1, valuesList);
}
function getAllValuesLists(variant) {
  _init_properties_libs_kt__k8ocmq();
  var valuesLists = CaosLibs_getInstance().kg(variant).u4v();
  // Inline function 'kotlinx.serialization.json.encodeToDynamic' call
  var this_0 = get_caosLibsJsonSerializer();
  // Inline function 'kotlinx.serialization.serializer' call
  var this_1 = this_0.rw();
  // Inline function 'kotlinx.serialization.internal.cast' call
  var this_2 = serializer(this_1, createKType(PrimitiveClasses_getInstance().ie(), arrayOf([createInvariantKTypeProjection(createKType(getKClass(CaosValuesList), arrayOf([]), false))]), false));
  var tmp$ret$1 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
  return encodeToDynamic(this_0, tmp$ret$1, valuesLists);
}
function getValueTypeName_0(typeId) {
  _init_properties_libs_kt__k8ocmq();
  return getValueTypeName(typeId);
}
function caosLibsJsonSerializer$delegate$lambda() {
  _init_properties_libs_kt__k8ocmq();
  return Json(VOID, caosLibsJsonSerializer$delegate$lambda$lambda);
}
function caosLibsJsonSerializer$delegate$lambda$lambda($this$Json) {
  _init_properties_libs_kt__k8ocmq();
  $this$Json.w45_1 = true;
  return Unit_instance;
}
function _get_caosLibsJsonSerializer_$ref_d145f4() {
  return () => get_caosLibsJsonSerializer();
}
var properties_initialized_libs_kt_lscusw;
function _init_properties_libs_kt__k8ocmq() {
  if (!properties_initialized_libs_kt_lscusw) {
    properties_initialized_libs_kt_lscusw = true;
    caosLibsJsonSerializer$delegate = lazy(caosLibsJsonSerializer$delegate$lambda);
  }
}
//region block: post-declaration
initMetadataForClass(CaosLib, 'CaosLib');
initMetadataForClass(sam$kotlin_Comparator$0, 'sam$kotlin_Comparator$0', VOID, VOID, [Comparator, FunctionAdapter]);
initMetadataForClass(CaosLibs$valuesList$1);
initMetadataForObject(CaosLibs, 'CaosLibs');
initMetadataForInterface(CommandGetter, 'CommandGetter');
initMetadataForClass(sam$kotlin_Comparator$0_0, 'sam$kotlin_Comparator$0', VOID, VOID, [Comparator, FunctionAdapter]);
protoOf(CaosCommandMap).l4w = get$default;
initMetadataForClass(CaosCommandMap, 'CaosCommandMap', VOID, VOID, [CommandGetter]);
//endregion
//region block: exports
export {
  getCommandsForVariant as getCommandsForVariant,
  getValuesList_0 as getValuesList,
  getAllValuesLists as getAllValuesLists,
  getValueTypeName_0 as getValueTypeName,
};
export {
  getCommandsForLib as getCommandsForLib3bl2j4jrrm9yu,
  getValueTypeName as getValueTypeName196k0w1ujjjaf,
  getValuesList as getValuesList2oe40mvk4r5e,
  CaosLibs_getInstance as CaosLibs_getInstance20rfi0vj8s87r,
};
//endregion

//# sourceMappingURL=caos-libs.mjs.map
