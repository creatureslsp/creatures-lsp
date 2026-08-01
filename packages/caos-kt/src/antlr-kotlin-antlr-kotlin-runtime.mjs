import {
  numberToChar93r9buh19yek as numberToChar,
  minOrNull1g8m0136x75mg as minOrNull,
  NoSuchElementException679xzhnp5bpj as NoSuchElementException,
  maxOrNull2e5ok5wkly1cp as maxOrNull,
  initMetadataForObject1cxne3s9w65el as initMetadataForObject,
  println2shhhgwwt4c61 as println,
  Unit_instancev9v8hjid95df as Unit_instance,
  VOID3gxj6tk5isa35 as VOID,
  IllegalArgumentException2asla15b5jaob as IllegalArgumentException,
  toHexString22imn3z7nuei9 as toHexString,
  Builder2mo1myasewjph as Builder,
  Paire9pteg33gng7 as Pair,
  charCodeAt1yspne1d8erbm as charCodeAt,
  Char__toInt_impl_vasixdnyockrdnmht5 as Char__toInt_impl_vasixd,
  initMetadataForClassbxx6q50dy2s7 as initMetadataForClass,
  ArrayList3it5z8td81qkl as ArrayList,
  IllegalStateExceptionkoljg5n0nrlr as IllegalStateException,
  AssertionError3yq7q0knw9m5 as AssertionError,
  isInterface3d6p8outrmvmk as isInterface,
  IndexOutOfBoundsException1qfr429iumro0 as IndexOutOfBoundsException,
  ensureNotNull1e947j3ixpazm as ensureNotNull,
  StringBuildermazzzhj6kkai as StringBuilder,
  initMetadataForInterface1egvbzx539z91 as initMetadataForInterface,
  initMetadataForCompanion1wyw17z38v6ac as initMetadataForCompanion,
  createThis2j2avj17cvnv2 as createThis,
  replace3le3ie7l9k8aq as replace,
  protoOf180f3jzyo7rfj as protoOf,
  THROW_CCE2g6jy02ryeudk as THROW_CCE,
  UnsupportedOperationException2tkumpmhredt3 as UnsupportedOperationException,
  RuntimeException1r3t0zl97011n as RuntimeException,
  captureStack1fzi4aczwc4hg as captureStack,
  _Char___init__impl__6a9atx2gndcvjvc5pke as _Char___init__impl__6a9atx,
  toString22rbkbhdb5cl2 as toString,
  getKClassFromExpression348iqjl4fnx2f as getKClassFromExpression,
  asReversed2y2qzr7vrqd5 as asReversed,
  HashMap1a0ld5kgwhmhv as HashMap,
  listOfvhqybd2zx248 as listOf,
  indexOf1xbs558u7wr52 as indexOf,
  substringiqarkczpya5m as substring,
  isHighSurrogate11jfjw70ar0zf as isHighSurrogate,
  copyOf2ng0t8oizk6it as copyOf,
  charSequenceLength3278n89t01tmv as charSequenceLength,
  isUpperCase16ivdixranflt as isUpperCase,
  isArray1hxjqtqy632bc as isArray,
  Regexxgw0gjiagf4z as Regex,
  toString1pkumu07cwy4m as toString_0,
  count1ygc0p0bu4uw8 as count,
  lastoeigeylztyfl as last,
  nonevl3joy0pn7x0 as none,
  LinkedHashMap1zhqxkxv3xnkl as LinkedHashMap,
  equals2au1ep9vhcato as equals,
  hashCodeq5arwsb9dgti as hashCode,
  KtMutableSetwuwn7k5m570a as KtMutableSet,
  noWhenBranchMatchedException2a6r7ubxgky5j as noWhenBranchMatchedException,
  copyOfRange1v9olvyjr7c0r as copyOfRange,
  enumEntries20mr21zbe3az4 as enumEntries,
  Enum3alwj03lh1n41 as Enum,
  contentEquals2jbsaphs7gxql as contentEquals,
  contentEqualsaf55p28mnw74 as contentEquals_0,
  toString30pk9tzaqopn as toString_1,
  HashSet2dzve9y63nf0v as HashSet,
  get_lastIndexx0qsydpfv3mu as get_lastIndex,
  Exceptiondt2hlxn7j7vw as Exception,
  toBoolean2azvnq2ukl7b3 as toBoolean,
  joinToStringxqcavsxcmh4q as joinToString,
  copyToArray2j022khrow2yi as copyToArray,
  copyOf3rutauicler23 as copyOf_0,
  Comparable198qfk8pnblz0 as Comparable,
  LinkedHashSet2tkztfx86kyx2 as LinkedHashSet,
  asList2ho2pewtsfvv as asList,
  getStringHashCode26igk1bx568vk as getStringHashCode,
  getKClass3t8tygqu4lcxf as getKClass,
  FunctionAdapter3lcrrz3moet5b as FunctionAdapter,
  Comparator2b3maoeh98xtg as Comparator,
  compareValues1n2ayl87ihzfk as compareValues,
  sortWith4fnm6b3vw03s as sortWith,
  numberToInt1ygmcfwhs2fkq as numberToInt,
  arrayIterator3lgwvgteckzhv as arrayIterator,
  arrayCopytctsywo3h7gj as arrayCopy,
  KtMutableMap1kqeifoi36kpz as KtMutableMap,
  fill2542d4m9l93pn as fill,
  joinToStringo3uw31d7e8og as joinToString_0,
  toCharArray32huqyw9tt7kx as toCharArray,
  MutableEntry12w2i19w0igk5 as MutableEntry,
  AbstractMutableSetthfi6jds1k2h as AbstractMutableSet,
  AbstractMutableCollections0bg6c40ztuj as AbstractMutableCollection,
} from './kotlin-kotlin-stdlib.mjs';
//region block: imports
var imul = Math.imul;
//endregion
//region block: pre-declaration
class Collections {
  d27(collection) {
    var tmp0_elvis_lhs = minOrNull(collection);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw NoSuchElementException.v5();
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  e27(collection) {
    var tmp0_elvis_lhs = maxOrNull(collection);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw NoSuchElementException.v5();
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
}
class StdPrintStream {
  f27(message) {
    return println(message);
  }
}
class ErrPrintStream {
  f27(message) {
    // Inline function 'com.strumenta.antlrkotlin.runtime.platformPrintErrLn' call
    console.error(message);
    return Unit_instance;
  }
}
class System {
  constructor() {
    System_instance = this;
    this.g27_1 = StdPrintStream_instance;
    this.h27_1 = ErrPrintStream_instance;
  }
  i27(name, defaultValue) {
    var tmp0_elvis_lhs = platformGetEnv(name);
    return tmp0_elvis_lhs == null ? defaultValue : tmp0_elvis_lhs;
  }
}
class AbstractCharStreams {
  j27(str, sourceName) {
    return new StringCharStream(str, sourceName);
  }
  k27(str, sourceName, $super) {
    sourceName = sourceName === VOID ? '<unknown>' : sourceName;
    return $super === VOID ? this.j27(str, sourceName) : $super.j27.call(this, str, sourceName);
  }
}
class BaseErrorListener {
  l27(recognizer, offendingSymbol, line, charPositionInLine, msg, e) {
  }
  m27(recognizer, dfa, startIndex, stopIndex, exact, ambigAlts, configs) {
  }
  n27(recognizer, dfa, startIndex, stopIndex, conflictingAlts, configs) {
  }
  o27(recognizer, dfa, startIndex, stopIndex, prediction, configs) {
  }
}
class BufferedTokenStream {
  constructor(tokenSource) {
    this.p27_1 = ArrayList.y1(100);
    this.q27_1 = -1;
    this.r27_1 = false;
    this.s27_1 = tokenSource;
  }
  t27() {
    return this.s27_1;
  }
  u27() {
    return this.q27_1;
  }
  v27() {
    return 0;
  }
  w27(marker) {
  }
  x27(index) {
    this.y27();
    this.q27_1 = this.z27(index);
  }
  a28() {
    return this.p27_1.b2();
  }
  b28() {
    var tmp;
    if (this.q27_1 >= 0) {
      var tmp_0;
      if (this.r27_1) {
        tmp_0 = this.q27_1 < (this.p27_1.b2() - 1 | 0);
      } else {
        tmp_0 = this.q27_1 < this.p27_1.b2();
      }
      tmp = tmp_0;
    } else {
      tmp = false;
    }
    var skipEofCheck = tmp;
    if (!skipEofCheck && this.c28(1) === -1) {
      throw IllegalStateException.l4('cannot consume EOF');
    }
    if (this.d28(this.q27_1 + 1 | 0)) {
      this.q27_1 = this.z27(this.q27_1 + 1 | 0);
    }
  }
  d28(i) {
    // Inline function 'com.strumenta.antlrkotlin.runtime.assert' call
    if (!(i >= 0)) {
      throw AssertionError.vc(null);
    }
    var n = (i - this.p27_1.b2() | 0) + 1 | 0;
    if (n > 0) {
      var fetched = this.e28(n);
      return fetched >= n;
    }
    return true;
  }
  e28(n) {
    if (this.r27_1) {
      return 0;
    }
    var inductionVariable = 0;
    if (inductionVariable < n)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var t = this.t27().f28();
        if (isInterface(t, WritableToken)) {
          t.g28(this.p27_1.b2());
        }
        this.p27_1.z1(t);
        if (t.d1s() === -1) {
          this.r27_1 = true;
          return i + 1 | 0;
        }
      }
       while (inductionVariable < n);
    return n;
  }
  d2(index) {
    if (index < 0 || index >= this.p27_1.b2()) {
      throw IndexOutOfBoundsException.mc('token index ' + index + ' out of range 0..' + (this.p27_1.b2() - 1 | 0));
    }
    return this.p27_1.d2(index);
  }
  c28(i) {
    return ensureNotNull(this.h28(i)).d1s();
  }
  i28(k) {
    var tmp;
    if ((this.q27_1 - k | 0) < 0) {
      tmp = null;
    } else {
      tmp = this.p27_1.d2(this.q27_1 - k | 0);
    }
    return tmp;
  }
  h28(k) {
    this.y27();
    if (k === 0) {
      return null;
    }
    if (k < 0) {
      return this.i28(-k | 0);
    }
    var i = (this.q27_1 + k | 0) - 1 | 0;
    this.d28(i);
    var tmp;
    if (i >= this.p27_1.b2()) {
      tmp = this.p27_1.d2(this.p27_1.b2() - 1 | 0);
    } else {
      tmp = this.p27_1.d2(i);
    }
    return tmp;
  }
  z27(i) {
    return i;
  }
  y27() {
    if (this.q27_1 === -1) {
      this.j28();
    }
  }
  j28() {
    this.d28(0);
    this.q27_1 = this.z27(0);
  }
  k28(start, stop, types) {
    this.y27();
    if (start < 0 || stop >= this.p27_1.b2() || stop < 0 || start >= this.p27_1.b2()) {
      throw IndexOutOfBoundsException.mc('start ' + start + ' or stop ' + stop + ' not in 0..' + (this.p27_1.b2() - 1 | 0));
    }
    if (start > stop) {
      return null;
    }
    var filteredTokens = ArrayList.u1();
    var inductionVariable = start;
    if (inductionVariable <= stop)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var t = this.p27_1.d2(i);
        if (types == null || types.g2(t.d1s())) {
          filteredTokens.z1(t);
        }
      }
       while (!(i === stop));
    // Inline function 'kotlin.collections.ifEmpty' call
    var tmp;
    if (filteredTokens.u()) {
      tmp = null;
    } else {
      tmp = filteredTokens;
    }
    return tmp;
  }
  l28(start, stop, types, $super) {
    types = types === VOID ? null : types;
    return $super === VOID ? this.k28(start, stop, types) : $super.k28.call(this, start, stop, types);
  }
  m28(i, channel) {
    this.d28(i);
    if (i >= this.a28()) {
      return this.a28() - 1 | 0;
    }
    var token = this.p27_1.d2(i);
    var ii = i;
    while (!(token.n28() === channel)) {
      if (token.d1s() === -1) {
        return ii;
      }
      ii = ii + 1 | 0;
      this.d28(ii);
      token = this.p27_1.d2(ii);
    }
    return ii;
  }
  o28(i, channel) {
    this.d28(i);
    if (i >= this.a28()) {
      return this.a28() - 1 | 0;
    }
    var ii = i;
    while (ii >= 0) {
      var token = this.p27_1.d2(ii);
      if (token.d1s() === -1 || token.n28() === channel) {
        return ii;
      }
      ii = ii - 1 | 0;
    }
    return ii;
  }
  p28(interval) {
    var start = interval.q28_1;
    var stop = interval.r28_1;
    if (start < 0 || stop < 0) {
      return '';
    }
    this.d28(stop);
    if (stop >= this.p27_1.b2()) {
      stop = this.p27_1.b2() - 1 | 0;
    }
    var buf = StringBuilder.s();
    var inductionVariable = start;
    var last = stop;
    if (inductionVariable <= last)
      $l$loop: do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var t = this.p27_1.d2(i);
        if (t.d1s() === -1) {
          break $l$loop;
        }
        buf.t(t.j1f());
      }
       while (!(i === last));
    return buf.toString();
  }
  s28(start, stop) {
    var tmp;
    if (!(start == null) && !(stop == null)) {
      tmp = this.p28(Companion_getInstance_25().x28(start.t28(), stop.t28()));
    } else {
      tmp = '';
    }
    return tmp;
  }
}
class CharStream {}
class Companion {
  constructor() {
    Companion_instance = this;
    this.y28_1 = new Pair(null, null);
  }
}
class Token {}
function startPoint() {
  return new Point(this.e1e(), this.l29());
}
function endPoint() {
  var tmp0_elvis_lhs = this.j1f();
  var tmp;
  if (tmp0_elvis_lhs == null) {
    return null;
  } else {
    tmp = tmp0_elvis_lhs;
  }
  var text = tmp;
  return (new Point(this.e1e(), this.l29())).q2l(text);
}
class WritableToken {}
class CommonToken {
  i29(_set____db54di) {
    this.b29_1 = _set____db54di;
  }
  d1s() {
    return this.b29_1;
  }
  j29(_set____db54di) {
    this.c29_1 = _set____db54di;
  }
  e1e() {
    return this.c29_1;
  }
  k29(_set____db54di) {
    this.d29_1 = _set____db54di;
  }
  l29() {
    return this.d29_1;
  }
  m29(_set____db54di) {
    this.e29_1 = _set____db54di;
  }
  n28() {
    return this.e29_1;
  }
  g28(_set____db54di) {
    this.f29_1 = _set____db54di;
  }
  t28() {
    return this.f29_1;
  }
  n29(_set____db54di) {
    this.g29_1 = _set____db54di;
  }
  g1e() {
    return this.g29_1;
  }
  o29(_set____db54di) {
    this.h29_1 = _set____db54di;
  }
  p29() {
    return this.h29_1;
  }
  t27() {
    return this.z28_1.first;
  }
  q29() {
    return this.z28_1.second;
  }
  r29(value) {
    this.a29_1 = value;
  }
  j1f() {
    if (!(this.a29_1 == null)) {
      return this.a29_1;
    }
    var tmp0_elvis_lhs = this.q29();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return null;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var input = tmp;
    var n = input.a28();
    var tmp_0;
    if (this.g1e() < n && this.p29() < n) {
      tmp_0 = input.p28(Companion_getInstance_25().x28(this.g1e(), this.p29()));
    } else {
      tmp_0 = '<EOF>';
    }
    return tmp_0;
  }
  static s29(source, type, channel, startIndex, stopIndex) {
    Companion_getInstance();
    var $this = createThis(this);
    init_org_antlr_v4_kotlinruntime_CommonToken($this);
    $this.z28_1 = source;
    $this.i29(type);
    $this.m29(channel);
    $this.n29(startIndex);
    $this.o29(stopIndex);
    var a = source.first;
    if (!(a == null)) {
      $this.j29(a.e1e());
      $this.k29(a.l29());
    }
    return $this;
  }
  toString() {
    return this.t29(null);
  }
  t29(r) {
    var tmp;
    if (this.n28() > 0) {
      tmp = ',channel=' + this.n28();
    } else {
      tmp = '';
    }
    var channelStr = tmp;
    var txt = this.j1f();
    if (!(txt == null)) {
      txt = replace(txt, '\n', '\\n');
      txt = replace(txt, '\r', '\\r');
      txt = replace(txt, '\t', '\\t');
    } else {
      txt = '<no text>';
    }
    var tmp1_safe_receiver = r == null ? null : r.w29();
    var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.x29(this.d1s());
    var typeString = tmp2_elvis_lhs == null ? this.d1s().toString() : tmp2_elvis_lhs;
    return '[@' + this.t28() + ',' + this.g1e() + ':' + this.p29() + "='" + txt + "',<" + typeString + '>' + channelStr + ',' + this.e1e() + ':' + this.l29() + ']';
  }
}
class Companion_0 {
  constructor() {
    Companion_instance_0 = this;
    this.a2a_1 = new CommonTokenFactory();
  }
}
class CommonTokenFactory {
  constructor(copyText) {
    Companion_getInstance_0();
    copyText = copyText === VOID ? false : copyText;
    this.b2a_1 = copyText;
  }
  c2a(source, type, text, channel, start, stop, line, charPositionInLine) {
    var t = CommonToken.s29(source, type, channel, start, stop);
    t.j29(line);
    t.k29(charPositionInLine);
    if (!(text == null)) {
      t.r29(text);
    } else if (this.b2a_1 && !(source.second == null)) {
      t.r29(ensureNotNull(source.second).p28(Companion_getInstance_25().x28(start, stop)));
    }
    return t;
  }
}
class CommonTokenStream extends BufferedTokenStream {
  constructor(tokenSource) {
    super(tokenSource);
    this.h2a_1 = 0;
  }
  z27(i) {
    return this.m28(i, this.h2a_1);
  }
  i28(k) {
    if (k === 0 || (this.q27_1 - k | 0) < 0) {
      return null;
    }
    var i = this.q27_1;
    var n = 1;
    while (n <= k && i > 0) {
      i = this.o28(i - 1 | 0, this.h2a_1);
      n = n + 1 | 0;
    }
    var tmp;
    if (i < 0) {
      tmp = null;
    } else {
      tmp = this.p27_1.d2(i);
    }
    return tmp;
  }
  h28(k) {
    this.y27();
    if (k === 0) {
      return null;
    }
    if (k < 0) {
      return this.i28(-k | 0);
    }
    var i = this.q27_1;
    var n = 1;
    while (n < k) {
      if (this.d28(i + 1 | 0)) {
        i = this.m28(i + 1 | 0, this.h2a_1);
      }
      n = n + 1 | 0;
    }
    return this.p27_1.d2(i);
  }
}
class Companion_1 {
  constructor() {
    Companion_instance_1 = this;
    this.i2a_1 = new ConsoleErrorListener();
  }
}
class ConsoleErrorListener extends BaseErrorListener {
  constructor() {
    Companion_getInstance_1();
    super();
  }
  l27(recognizer, offendingSymbol, line, charPositionInLine, msg, e) {
    System_getInstance().h27_1.f27('line ' + line + ':' + charPositionInLine + ' ' + msg);
  }
}
class DefaultErrorStrategy {
  constructor() {
    this.j2a_1 = false;
    this.k2a_1 = -1;
    this.l2a_1 = null;
    this.m2a_1 = null;
    this.n2a_1 = 0;
  }
  o2a(recognizer) {
    return this.p2a(recognizer);
  }
  q2a(recognizer) {
    this.j2a_1 = true;
  }
  r2a(recognizer) {
    return this.j2a_1;
  }
  p2a(recognizer) {
    this.j2a_1 = false;
    this.l2a_1 = null;
    this.k2a_1 = -1;
  }
  s2a(recognizer) {
    return this.p2a(recognizer);
  }
  t2a(recognizer, e) {
    if (this.r2a(recognizer)) {
      return Unit_instance;
    }
    this.q2a(recognizer);
    if (e instanceof NoViableAltException) {
      this.r2b(recognizer, e);
    } else {
      if (e instanceof InputMismatchException) {
        this.q2b(recognizer, e);
      } else {
        if (e instanceof FailedPredicateException) {
          this.p2b(recognizer, e);
        } else {
          System_getInstance().h27_1.f27('unknown recognition error type: ' + e.toString());
          recognizer.o2b(ensureNotNull(e.z2a_1), ensureNotNull(e.message), e);
        }
      }
    }
  }
  s2b(recognizer, e) {
    var lastErrorStatesTemp = this.l2a_1;
    if (this.k2a_1 === recognizer.u2b().u27() && !(lastErrorStatesTemp == null) && lastErrorStatesTemp.vk(recognizer.v29_1)) {
      recognizer.t2b();
    }
    this.k2a_1 = recognizer.u2b().u27();
    if (lastErrorStatesTemp == null) {
      lastErrorStatesTemp = IntervalSet.x2b();
      this.l2a_1 = lastErrorStatesTemp;
    }
    lastErrorStatesTemp.y2b(recognizer.v29_1);
    var followSet = this.z2b(recognizer);
    this.a2c(recognizer, followSet);
  }
  b2c(recognizer) {
    var s = recognizer.o2c().m2c_1.e2c_1.d2(recognizer.v29_1);
    if (this.r2a(recognizer)) {
      return Unit_instance;
    }
    var tokens = recognizer.u2b();
    var la = tokens.c28(1);
    var nextTokens = recognizer.p2c().q2c(ensureNotNull(s));
    if (nextTokens.vk(la)) {
      this.m2a_1 = null;
      this.n2a_1 = -1;
      return Unit_instance;
    }
    if (nextTokens.vk(-2)) {
      if (this.m2a_1 == null) {
        this.m2a_1 = recognizer.i2b_1;
        this.n2a_1 = recognizer.v29_1;
      }
      return Unit_instance;
    }
    switch (s.y2c()) {
      case 3:
      case 5:
      case 4:
      case 10:
        if (!(this.z2c(recognizer) == null)) {
          return Unit_instance;
        }

        throw InputMismatchException.j2d(recognizer);
      case 11:
      case 9:
        this.k2d(recognizer);
        var expecting = recognizer.l2d();
        var whatFollowsLoopIterationOrRule = expecting.m2d(this.z2b(recognizer));
        this.a2c(recognizer, whatFollowsLoopIterationOrRule);
        break;
      default:
        break;
    }
  }
  r2b(recognizer, e) {
    var tokens = recognizer.u2b();
    var tmp;
    if (ensureNotNull(e.v2d_1).d1s() === -1) {
      tmp = '<EOF>';
    } else {
      tmp = ensureNotNull(tokens.s28(e.v2d_1, ensureNotNull(e.z2a_1)));
    }
    var input = tmp;
    var msg = 'no viable alternative at input ' + this.y2d(input);
    recognizer.o2b(ensureNotNull(e.z2a_1), msg, e);
  }
  q2b(recognizer, e) {
    var tokenErrorDisplay = this.z2d(e.z2a_1);
    var expectedToken = ensureNotNull(e.l2d()).a2e(recognizer.w29());
    var msg = 'mismatched input ' + tokenErrorDisplay + ' expecting ' + expectedToken;
    recognizer.o2b(ensureNotNull(e.z2a_1), msg, e);
  }
  p2b(recognizer, e) {
    var ruleName = recognizer.b2e()[ensureNotNull(recognizer.i2b_1).h2e()];
    var msg = 'rule ' + ruleName + ' ' + e.message;
    recognizer.o2b(ensureNotNull(e.z2a_1), msg, e);
  }
  k2d(recognizer) {
    if (this.r2a(recognizer)) {
      return Unit_instance;
    }
    this.q2a(recognizer);
    var t = ensureNotNull(recognizer.i2e());
    var tokenName = this.z2d(t);
    var expecting = this.j2e(recognizer);
    var msg = 'extraneous input ' + tokenName + ' expecting ' + expecting.a2e(recognizer.w29());
    recognizer.o2b(t, msg, null);
  }
  k2e(recognizer) {
    if (this.r2a(recognizer)) {
      return Unit_instance;
    }
    this.q2a(recognizer);
    var t = ensureNotNull(recognizer.i2e());
    var expecting = this.j2e(recognizer);
    var msg = 'missing ' + expecting.a2e(recognizer.w29()) + ' at ' + this.z2d(t);
    recognizer.o2b(t, msg, null);
  }
  l2e(recognizer) {
    var matchedSymbol = this.z2c(recognizer);
    if (!(matchedSymbol == null)) {
      recognizer.t2b();
      return matchedSymbol;
    }
    if (this.n2e(recognizer)) {
      return this.m2e(recognizer);
    }
    var tmp;
    if (this.m2a_1 == null) {
      tmp = InputMismatchException.j2d(recognizer);
    } else {
      tmp = InputMismatchException.o2e(recognizer, this.n2a_1, ensureNotNull(this.m2a_1));
    }
    var e = tmp;
    throw e;
  }
  n2e(recognizer) {
    var currentSymbolType = recognizer.u2b().c28(1);
    var currentState = recognizer.o2c().m2c_1.e2c_1.d2(recognizer.v29_1);
    var next = ensureNotNull(currentState).r2e(0).p2e_1;
    var atn = recognizer.o2c().m2c_1;
    var expectingAtLL2 = atn.s2e(next, recognizer.i2b_1);
    if (expectingAtLL2.vk(currentSymbolType)) {
      this.k2e(recognizer);
      return true;
    }
    return false;
  }
  z2c(recognizer) {
    var nextTokenType = recognizer.u2b().c28(2);
    var expecting = this.j2e(recognizer);
    if (expecting.vk(nextTokenType)) {
      this.k2d(recognizer);
      recognizer.t2b();
      var matchedSymbol = recognizer.i2e();
      this.s2a(recognizer);
      return matchedSymbol;
    }
    return null;
  }
  m2e(recognizer) {
    var currentSymbol = recognizer.i2e();
    var expecting = this.j2e(recognizer);
    var expectedTokenType = 0;
    if (!expecting.u2e()) {
      expectedTokenType = expecting.t2e();
    }
    var tmp;
    if (expectedTokenType === -1) {
      tmp = '<missing EOF>';
    } else {
      tmp = '<missing ' + recognizer.w29().x29(expectedTokenType) + '>';
    }
    var tokenText = tmp;
    var current = currentSymbol;
    var lookback = recognizer.u2b().h28(-1);
    if (ensureNotNull(current).d1s() === -1 && !(lookback == null)) {
      current = lookback;
    }
    return recognizer.v2e().c2a(new Pair(current.t27(), current.q29()), expectedTokenType, tokenText, 0, -1, -1, current.e1e(), current.l29());
  }
  j2e(recognizer) {
    return recognizer.l2d();
  }
  z2d(t) {
    if (t == null) {
      return '<no token>';
    }
    var s = this.w2e(t);
    if (s == null) {
      var tmp;
      if (this.x2e(t) === -1) {
        tmp = '<EOF>';
      } else {
        tmp = '<' + this.x2e(t) + '>';
      }
      s = tmp;
    }
    return this.y2d(s);
  }
  w2e(symbol) {
    return symbol.j1f();
  }
  x2e(symbol) {
    return symbol.d1s();
  }
  y2d(s) {
    var ss = s;
    ss = replace(ss, '\n', '\\n');
    ss = replace(ss, '\r', '\\r');
    ss = replace(ss, '\t', '\\t');
    return "'" + ss + "'";
  }
  z2b(recognizer) {
    var atn = recognizer.o2c().m2c_1;
    var ctx = recognizer.i2b_1;
    var recoverSet = IntervalSet.x2b();
    while (!(ctx == null) && ctx.d2e_1 >= 0) {
      var invokingState = atn.e2c_1.d2(ctx.d2e_1);
      var tmp = ensureNotNull(invokingState).r2e(0);
      var rt = tmp instanceof RuleTransition ? tmp : THROW_CCE();
      var follow = atn.q2c(rt.c2f_1);
      recoverSet.f2f(follow);
      ctx = ctx.g2f();
    }
    recoverSet.h2f(-2);
    return recoverSet;
  }
  a2c(recognizer, set) {
    var ttype = recognizer.u2b().c28(1);
    while (!(ttype === -1) && !set.vk(ttype)) {
      recognizer.t2b();
      ttype = recognizer.u2b().c28(1);
    }
  }
}
class DummyTokenStream {
  t27() {
    throw UnsupportedOperationException.q7();
  }
  b28() {
    throw UnsupportedOperationException.q7();
  }
  c28(i) {
    throw UnsupportedOperationException.q7();
  }
  v27() {
    throw UnsupportedOperationException.q7();
  }
  w27(marker) {
    throw UnsupportedOperationException.q7();
  }
  u27() {
    throw UnsupportedOperationException.q7();
  }
  x27(index) {
  }
  a28() {
    return 0;
  }
  h28(k) {
    throw UnsupportedOperationException.q7();
  }
  d2(index) {
    throw UnsupportedOperationException.q7();
  }
  p28(interval) {
    throw UnsupportedOperationException.q7();
  }
  s28(start, stop) {
    throw UnsupportedOperationException.q7();
  }
}
class EmptyStackException extends RuntimeException {
  static l2f(message, cause) {
    message = message === VOID ? null : message;
    cause = cause === VOID ? null : cause;
    var $this = this.dc(message, cause);
    captureStack($this, $this.k2f_1);
    return $this;
  }
}
class RecognitionException extends RuntimeException {
  static m2f(recognizer, inputStream, ctx, message) {
    message = message === VOID ? null : message;
    var $this = this.ba(message);
    captureStack($this, $this.b2b_1);
    $this.w2a_1 = recognizer;
    $this.x2a_1 = inputStream;
    $this.y2a_1 = ctx;
    $this.z2a_1 = null;
    $this.a2b_1 = -1;
    if (!($this.w2a_1 == null)) {
      $this.a2b_1 = $this.w2a_1.v29_1;
    }
    return $this;
  }
  q29() {
    return this.x2a_1;
  }
  l2d() {
    var tmp0_safe_receiver = this.w2a_1;
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.p2c();
    return tmp1_safe_receiver == null ? null : tmp1_safe_receiver.t2i(this.a2b_1, this.y2a_1);
  }
}
class FailedPredicateException extends RecognitionException {}
class InputMismatchException extends RecognitionException {
  static j2d(recognizer) {
    var $this = this.m2f(recognizer, recognizer.u2b(), ensureNotNull(recognizer.i2b_1));
    init_org_antlr_v4_kotlinruntime_InputMismatchException($this);
    $this.z2a_1 = recognizer.i2e();
    return $this;
  }
  static o2e(recognizer, state, ctx) {
    var $this = this.m2f(recognizer, recognizer.u2b(), ctx);
    init_org_antlr_v4_kotlinruntime_InputMismatchException($this);
    $this.a2b_1 = state;
    $this.z2a_1 = recognizer.i2e();
    return $this;
  }
}
class Companion_2 {
  constructor() {
    this.n2f_1 = 0;
    this.o2f_1 = -2;
    this.p2f_1 = -3;
    this.q2f_1 = 0;
    this.r2f_1 = 1;
    this.s2f_1 = 0;
    this.t2f_1 = 1114111;
  }
}
class Recognizer {
  constructor() {
    Companion_getInstance_4();
    this.u29_1 = ArrayList.v1(listOf(Companion_getInstance_1().i2a_1));
    this.v29_1 = -1;
  }
  w29() {
    return Companion_getInstance_5().f2l(this.a2h());
  }
  y2h() {
    return this.u29_1;
  }
  w2h() {
    return new ProxyErrorListener(this.y2h());
  }
  z2h(listener) {
    this.u29_1.z1(listener);
  }
  a2i(_localctx, ruleIndex, predIndex) {
    return true;
  }
  b2i(localctx, precedence) {
    return true;
  }
  c2i(_localctx, ruleIndex, actionIndex) {
  }
}
class Lexer extends Recognizer {
  constructor(input) {
    super();
    this.w2f_1 = input;
    this.x2f_1 = new Pair(this, input);
    this.y2f_1 = Companion_getInstance_0().a2a_1;
    this.z2f_1 = null;
    this.a2g_1 = -1;
    this.b2g_1 = 0;
    this.c2g_1 = 0;
    this.d2g_1 = false;
    this.e2g_1 = 0;
    this.f2g_1 = 0;
    this.g2g_1 = IntegerStack.o2g();
    this.h2g_1 = 0;
    this.i2g_1 = null;
    var tmp = this;
    // Inline function 'kotlin.emptyArray' call
    tmp.j2g_1 = [];
    var tmp_0 = this;
    // Inline function 'kotlin.emptyArray' call
    tmp_0.k2g_1 = [];
    var tmp_1 = this;
    // Inline function 'kotlin.emptyArray' call
    tmp_1.l2g_1 = [];
  }
  v2e() {
    return this.y2f_1;
  }
  p2g(_set____db54di) {
    this.z2f_1 = _set____db54di;
  }
  g1s() {
    return this.z2f_1;
  }
  e1e() {
    return this.o2c().v2g_1;
  }
  l29() {
    return this.o2c().w2g_1;
  }
  z2g() {
    return this.w2f_1.u27();
  }
  a2h() {
    return this.l2g_1;
  }
  b2h() {
    var tokens = ArrayList.u1();
    var t = this.f28();
    while (!(t.d1s() === -1)) {
      tokens.z1(t);
      t = this.f28();
    }
    return tokens;
  }
  c2h() {
    this.w2f_1.x27(0);
    this.p2g(null);
    this.f2g_1 = 0;
    this.e2g_1 = 0;
    this.a2g_1 = -1;
    this.c2g_1 = -1;
    this.b2g_1 = -1;
    this.i2g_1 = null;
    this.d2g_1 = false;
    this.h2g_1 = 0;
    this.g2g_1.u3();
    var tmp0_safe_receiver = this.o2c();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.c2h();
    }
  }
  f28() {
    var tokenStartMarker = this.w2f_1.v27();
    try {
      outer: while (true) {
        if (this.d2g_1) {
          this.f2h();
          return ensureNotNull(this.g1s());
        }
        this.p2g(null);
        this.e2g_1 = 0;
        this.a2g_1 = this.w2f_1.u27();
        this.c2g_1 = this.o2c().w2g_1;
        this.b2g_1 = this.o2c().v2g_1;
        this.i2g_1 = null;
        do {
          this.f2g_1 = 0;
          var ttype;
          try {
            ttype = this.o2c().g2h(this.w2f_1, this.h2g_1);
          } catch ($p) {
            if ($p instanceof LexerNoViableAltException) {
              var e = $p;
              this.h2h(e);
              this.i2h(e);
              ttype = -3;
            } else {
              throw $p;
            }
          }
          if (this.w2f_1.c28(1) === -1) {
            this.d2g_1 = true;
          }
          if (this.f2g_1 === 0) {
            this.f2g_1 = ttype;
          }
          if (this.f2g_1 === -3) {
            continue outer;
          }
        }
         while (this.f2g_1 === -2);
        if (this.g1s() == null) {
          this.j2h();
        }
        return ensureNotNull(this.g1s());
      }
    }finally {
      this.w2f_1.w27(tokenStartMarker);
    }
  }
  k2h() {
    this.f2g_1 = -3;
  }
  l2h() {
    this.f2g_1 = -2;
  }
  m2h(m) {
    this.h2g_1 = m;
  }
  n2h(m) {
    if (false) {
      System_getInstance().g27_1.f27('pushMode ' + m);
    }
    this.g2g_1.o2h(this.h2g_1);
    this.m2h(m);
  }
  p2h() {
    if (this.g2g_1.q2h()) {
      throw EmptyStackException.l2f();
    }
    if (false) {
      System_getInstance().g27_1.f27('popMode back to ' + this.g2g_1.r2h());
    }
    this.m2h(this.g2g_1.s2h());
    return this.h2g_1;
  }
  t2h(token) {
    this.p2g(token);
  }
  j2h() {
    var t = this.v2e().c2a(this.x2f_1, this.f2g_1, this.i2g_1, this.e2g_1, this.a2g_1, this.z2g() - 1 | 0, this.b2g_1, this.c2g_1);
    this.t2h(t);
    return t;
  }
  f2h() {
    var cPos = this.l29();
    var eof = this.v2e().c2a(this.x2f_1, -1, null, 0, this.w2f_1.u27(), this.w2f_1.u27() - 1 | 0, this.e1e(), cPos);
    this.t2h(eof);
    return eof;
  }
  i2h(e) {
    if (!(this.w2f_1.c28(1) === -1)) {
      this.o2c().u2h(this.w2f_1);
    }
  }
  h2h(e) {
    var text = this.w2f_1.p28(Companion_getInstance_25().x28(this.a2g_1, this.w2f_1.u27()));
    var msg = "token recognition error at: '" + this.v2h(text) + "'";
    this.w2h().l27(this, null, this.b2g_1, this.c2g_1, msg, e);
  }
  v2h(s) {
    var buf = StringBuilder.s();
    var inductionVariable = 0;
    var last = s.length;
    while (inductionVariable < last) {
      var c = charCodeAt(s, inductionVariable);
      inductionVariable = inductionVariable + 1 | 0;
      // Inline function 'kotlin.code' call
      var tmp$ret$0 = Char__toInt_impl_vasixd(c);
      buf.t(this.x2h(tmp$ret$0));
    }
    return buf.toString();
  }
  x2h(c) {
    var tmp;
    if (c === -1) {
      tmp = '<EOF>';
    } else {
      // Inline function 'kotlin.code' call
      var this_0 = _Char___init__impl__6a9atx(10);
      if (c === Char__toInt_impl_vasixd(this_0)) {
        tmp = '\\n';
      } else {
        // Inline function 'kotlin.code' call
        var this_1 = _Char___init__impl__6a9atx(9);
        if (c === Char__toInt_impl_vasixd(this_1)) {
          tmp = '\\t';
        } else {
          // Inline function 'kotlin.code' call
          var this_2 = _Char___init__impl__6a9atx(13);
          if (c === Char__toInt_impl_vasixd(this_2)) {
            tmp = '\\r';
          } else {
            tmp = toString(numberToChar(c));
          }
        }
      }
    }
    return tmp;
  }
}
class LexerNoViableAltException extends RecognitionException {
  static o2i(lexer, input, startIndex, deadEndConfigs) {
    var $this = this.m2f(lexer, input, null);
    captureStack($this, $this.n2i_1);
    $this.l2i_1 = startIndex;
    $this.m2i_1 = deadEndConfigs;
    return $this;
  }
  q29() {
    var tmp = super.q29();
    return isInterface(tmp, CharStream) ? tmp : THROW_CCE();
  }
  toString() {
    var symbol = '';
    if (this.l2i_1 >= 0 && this.l2i_1 < this.q29().a28()) {
      symbol = this.q29().p28(Companion_getInstance_25().x28(this.l2i_1, this.l2i_1));
      symbol = Utils_instance.p2i(symbol, false);
    }
    return '' + getKClassFromExpression(this).q() + "('" + symbol + "')";
  }
}
class NoViableAltException extends RecognitionException {
  static q2i(recognizer, input, startToken, offendingToken, deadEndConfigs, ctx) {
    input = input === VOID ? recognizer.u2b() : input;
    startToken = startToken === VOID ? recognizer.i2e() : startToken;
    offendingToken = offendingToken === VOID ? recognizer.i2e() : offendingToken;
    deadEndConfigs = deadEndConfigs === VOID ? null : deadEndConfigs;
    ctx = ctx === VOID ? ensureNotNull(recognizer.i2b_1) : ctx;
    var $this = this.m2f(recognizer, input, ctx);
    captureStack($this, $this.x2d_1);
    $this.v2d_1 = startToken;
    $this.w2d_1 = deadEndConfigs;
    $this.z2a_1 = offendingToken;
    return $this;
  }
}
class Parser extends Recognizer {
  constructor(input) {
    super();
    this.e2b_1 = null;
    this.f2b_1 = new DefaultErrorStrategy();
    this.g2b_1 = input;
    var tmp = this;
    // Inline function 'kotlin.also' call
    var this_0 = IntegerStack.o2g();
    this_0.o2h(0);
    tmp.h2b_1 = this_0;
    this.i2b_1 = null;
    this.j2b_1 = true;
    this.k2b_1 = null;
    this.l2b_1 = ArrayList.u1();
    this.m2b_1 = 0;
    this.n2b_1 = false;
    this.r2i(input);
  }
  v2e() {
    return this.g2b_1.t27().v2e();
  }
  r2i(value) {
    this.g2b_1 = DummyTokenStream_instance;
    this.c2h();
    this.g2b_1 = value;
  }
  u2b() {
    return this.g2b_1;
  }
  i2e() {
    return this.g2b_1.h28(1);
  }
  s2i() {
    var tmp;
    if (this.h2b_1.q2h()) {
      tmp = -1;
    } else {
      tmp = this.h2b_1.r2h();
    }
    return tmp;
  }
  l2d() {
    return this.p2c().t2i(this.v29_1, this.i2b_1);
  }
  c2h() {
    this.u2b().x27(0);
    this.f2b_1.o2a(this);
    this.i2b_1 = null;
    this.m2b_1 = 0;
    this.n2b_1 = false;
    this.h2b_1.u3();
    this.h2b_1.o2h(0);
    var tmp0_safe_receiver = this.o2c();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.c2h();
    }
  }
  e2j(ttype) {
    var t = this.i2e();
    if (ensureNotNull(t).d1s() === ttype) {
      if (ttype === -1) {
        this.n2b_1 = true;
      }
      this.f2b_1.s2a(this);
      this.t2b();
    } else {
      t = this.f2b_1.l2e(this);
      if (this.j2b_1 && t.t28() === -1) {
        ensureNotNull(this.i2b_1).p2j(this.f2j(this.i2b_1, t));
      }
    }
    return t;
  }
  q2j() {
    var _iterator__ex2g4s = this.l2b_1.w();
    while (_iterator__ex2g4s.x()) {
      var listener = _iterator__ex2g4s.y();
      listener.r2j(ensureNotNull(this.i2b_1));
      ensureNotNull(this.i2b_1).s2j(listener);
    }
  }
  t2j() {
    var _iterator__ex2g4s = asReversed(this.l2b_1).w();
    while (_iterator__ex2g4s.x()) {
      var listener = _iterator__ex2g4s.y();
      ensureNotNull(this.i2b_1).u2j(listener);
      listener.v2j(ensureNotNull(this.i2b_1));
    }
  }
  o2b(offendingToken, msg, e) {
    this.m2b_1 = this.m2b_1 + 1 | 0;
    var line = offendingToken.e1e();
    var charPositionInLine = offendingToken.l29();
    var listener = this.w2h();
    listener.l27(this, offendingToken, line, charPositionInLine, msg, e);
  }
  t2b() {
    var o = this.i2e();
    if (!(ensureNotNull(o).d1s() === -1)) {
      this.u2b().b28();
    }
    var tmp;
    if (this.j2b_1) {
      tmp = true;
    } else {
      // Inline function 'kotlin.collections.isNotEmpty' call
      tmp = !this.l2b_1.u();
    }
    if (tmp) {
      if (this.f2b_1.r2a(this)) {
        var node = ensureNotNull(this.i2b_1).p2j(this.f2j(this.i2b_1, o));
        var _iterator__ex2g4s = this.l2b_1.w();
        while (_iterator__ex2g4s.x()) {
          var listener = _iterator__ex2g4s.y();
          listener.z2j(node);
        }
      } else {
        var node_0 = ensureNotNull(this.i2b_1).x2j(this.w2j(this.i2b_1, o));
        var _iterator__ex2g4s_0 = this.l2b_1.w();
        while (_iterator__ex2g4s_0.x()) {
          var listener_0 = _iterator__ex2g4s_0.y();
          listener_0.y2j(node_0);
        }
      }
    }
    return o;
  }
  w2j(parent, t) {
    return new TerminalNodeImpl(t);
  }
  f2j(parent, t) {
    return new ErrorNodeImpl(t);
  }
  a2k() {
    var parent = ensureNotNull(this.i2b_1).g2f();
    if (parent == null)
      null;
    else
      parent.b2k(ensureNotNull(this.i2b_1));
  }
  c2k(localctx, state, ruleIndex) {
    this.v29_1 = state;
    this.i2b_1 = localctx;
    ensureNotNull(this.i2b_1).m2j_1 = this.g2b_1.h28(1);
    if (this.j2b_1) {
      this.a2k();
    }
    this.q2j();
  }
  d2k() {
    if (this.n2b_1) {
      ensureNotNull(this.i2b_1).n2j_1 = this.g2b_1.h28(1);
    } else {
      ensureNotNull(this.i2b_1).n2j_1 = this.g2b_1.h28(-1);
    }
    this.t2j();
    this.v29_1 = ensureNotNull(this.i2b_1).d2e_1;
    this.i2b_1 = ensureNotNull(this.i2b_1).g2f();
  }
  e2k(localctx, altNum) {
    localctx.f2k(altNum);
    if (this.j2b_1 && !(this.i2b_1 === localctx)) {
      var parent = ensureNotNull(this.i2b_1).g2f();
      if (!(parent == null)) {
        parent.g2k();
        parent.b2k(localctx);
      }
    }
    this.i2b_1 = localctx;
  }
  b2i(localctx, precedence) {
    return precedence >= this.h2b_1.r2h();
  }
  h2k(ctx) {
    var p = ctx;
    var ruleNames = this.b2e();
    var stack = ArrayList.u1();
    while (!(p == null)) {
      var ruleIndex = p.h2e();
      if (ruleIndex < 0) {
        stack.z1('n/a');
      } else {
        stack.z1(ruleNames[ruleIndex]);
      }
      p = p.g2f();
    }
    return stack;
  }
  i2k(ctx, $super) {
    ctx = ctx === VOID ? this.i2b_1 : ctx;
    return $super === VOID ? this.h2k(ctx) : $super.h2k.call(this, ctx);
  }
}
class Companion_3 {
  constructor() {
    Companion_instance_3 = this;
    this.j2k_1 = ParserRuleContext.k2k();
  }
}
class ParseTree {}
class RuleNode {}
class RuleContext {
  q2h() {
    return this.d2e_1 === -1;
  }
  n2k() {
    return this;
  }
  j1f() {
    if (this.m2k() === 0) {
      return '';
    }
    var builder = StringBuilder.s();
    var inductionVariable = 0;
    var last = this.m2k();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        builder.t(ensureNotNull(this.t2k(i)).j1f());
      }
       while (inductionVariable < last);
    return builder.toString();
  }
  h2e() {
    return this.f2e_1;
  }
  f2k(value) {
  }
  m2k() {
    return this.g2e_1;
  }
  static o2k() {
    var $this = createThis(this);
    init_org_antlr_v4_kotlinruntime_RuleContext($this);
    return $this;
  }
  static q2k(parent, invokingState) {
    var $this = createThis(this);
    init_org_antlr_v4_kotlinruntime_RuleContext($this);
    $this.c2e_1 = parent;
    $this.d2e_1 = invokingState;
    return $this;
  }
  g2f() {
    return this.c2e_1;
  }
  r2k(value) {
    this.c2e_1 = value;
  }
  t2k(i) {
    return null;
  }
  toString() {
    return this.y2k(null, null);
  }
  y2k(ruleNames, stop) {
    var buf = StringBuilder.s();
    var p = this;
    buf.t('[');
    while (!(p == null) && !(p === stop)) {
      if (ruleNames == null) {
        if (!p.q2h()) {
          buf.af(p.d2e_1);
        }
      } else {
        var ruleIndex = p.h2e();
        var tmp;
        if (ruleIndex >= 0 && ruleIndex < ruleNames.b2()) {
          tmp = ruleNames.d2(ruleIndex);
        } else {
          tmp = ruleIndex.toString();
        }
        var ruleName = tmp;
        buf.t(ruleName);
      }
      if (!(p.c2e_1 == null) && (!(ruleNames == null) || !ensureNotNull(p.c2e_1).q2h())) {
        buf.t(' ');
      }
      p = p.c2e_1;
    }
    buf.t(']');
    return buf.toString();
  }
}
class ParserRuleContext extends RuleContext {
  l2k() {
    var start = this.m2j_1;
    var stop = this.n2j_1;
    if (!(start == null) && !(stop == null)) {
      var endPoint = stop.z29();
      if (!(endPoint == null)) {
        return new Position(start.y29(), endPoint);
      }
    }
    return null;
  }
  m2k() {
    var tmp0_safe_receiver = this.l2j_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.b2();
    return tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
  }
  n2k() {
    return this;
  }
  static k2k() {
    Companion_getInstance_3();
    var $this = this.o2k();
    init_org_antlr_v4_kotlinruntime_ParserRuleContext($this);
    return $this;
  }
  static p2k(parent, invokingStateNumber) {
    Companion_getInstance_3();
    var $this = this.q2k(parent, invokingStateNumber);
    init_org_antlr_v4_kotlinruntime_ParserRuleContext($this);
    return $this;
  }
  g2f() {
    var tmp = this.c2e_1;
    return (tmp == null ? true : tmp instanceof ParserRuleContext) ? tmp : THROW_CCE();
  }
  r2k(value) {
    var tmp = this;
    tmp.c2e_1 = (value == null ? true : value instanceof ParserRuleContext) ? value : THROW_CCE();
  }
  s2j(listener) {
  }
  u2j(listener) {
  }
  s2k(t) {
    var childrenTemp = this.l2j_1;
    if (childrenTemp == null) {
      childrenTemp = ArrayList.u1();
      this.l2j_1 = childrenTemp;
    }
    childrenTemp.z1(t);
    return t;
  }
  b2k(ruleInvocation) {
    return this.s2k(ruleInvocation);
  }
  x2j(t) {
    t.r2k(this);
    return this.s2k(t);
  }
  p2j(errorNode) {
    errorNode.r2k(this);
    return this.s2k(errorNode);
  }
  g2k() {
    var tempChildren = this.l2j_1;
    if (tempChildren == null)
      null;
    else
      tempChildren.x3(tempChildren.b2() - 1 | 0);
  }
  t2k(i) {
    var tempChildren = this.l2j_1;
    var tmp;
    if (!(tempChildren == null) && i >= 0 && i < tempChildren.b2()) {
      tmp = tempChildren.d2(i);
    } else {
      tmp = null;
    }
    return tmp;
  }
  u2k(ctxType, i) {
    var tempChildren = this.l2j_1;
    if (tempChildren == null || i < 0 || i >= tempChildren.b2()) {
      return null;
    }
    var j = -1;
    var _iterator__ex2g4s = tempChildren.w();
    while (_iterator__ex2g4s.x()) {
      var o = _iterator__ex2g4s.y();
      if (ctxType.kd(o)) {
        j = j + 1 | 0;
        if (j === i) {
          return isInterface(o, ParseTree) ? o : THROW_CCE();
        }
      }
    }
    return null;
  }
  v2k(ttype, i) {
    var tempChildren = this.l2j_1;
    if (tempChildren == null || i < 0 || i >= tempChildren.b2()) {
      return null;
    }
    var j = -1;
    var _iterator__ex2g4s = tempChildren.w();
    while (_iterator__ex2g4s.x()) {
      var o = _iterator__ex2g4s.y();
      if (isInterface(o, TerminalNode)) {
        var symbol = o.w2k();
        if (symbol.d1s() === ttype) {
          j = j + 1 | 0;
          if (j === i) {
            return o;
          }
        }
      }
    }
    return null;
  }
  x2k(ctxType, i) {
    return this.u2k(ctxType, i);
  }
}
class ProxyErrorListener {
  constructor(delegates) {
    this.z2k_1 = delegates;
  }
  l27(recognizer, offendingSymbol, line, charPositionInLine, msg, e) {
    var _iterator__ex2g4s = this.z2k_1.w();
    while (_iterator__ex2g4s.x()) {
      var listener = _iterator__ex2g4s.y();
      listener.l27(recognizer, offendingSymbol, line, charPositionInLine, msg, e);
    }
  }
  m27(recognizer, dfa, startIndex, stopIndex, exact, ambigAlts, configs) {
    var _iterator__ex2g4s = this.z2k_1.w();
    while (_iterator__ex2g4s.x()) {
      var listener = _iterator__ex2g4s.y();
      listener.m27(recognizer, dfa, startIndex, stopIndex, exact, ambigAlts, configs);
    }
  }
  n27(recognizer, dfa, startIndex, stopIndex, conflictingAlts, configs) {
    var _iterator__ex2g4s = this.z2k_1.w();
    while (_iterator__ex2g4s.x()) {
      var listener = _iterator__ex2g4s.y();
      listener.n27(recognizer, dfa, startIndex, stopIndex, conflictingAlts, configs);
    }
  }
  o27(recognizer, dfa, startIndex, stopIndex, prediction, configs) {
    var _iterator__ex2g4s = this.z2k_1.w();
    while (_iterator__ex2g4s.x()) {
      var listener = _iterator__ex2g4s.y();
      listener.o27(recognizer, dfa, startIndex, stopIndex, prediction, configs);
    }
  }
}
class Companion_4 {
  constructor() {
    Companion_instance_4 = this;
    this.a2l_1 = -1;
    this.b2l_1 = HashMap.y7();
    this.c2l_1 = HashMap.y7();
  }
}
class RuntimeMetaData {
  constructor() {
    this.g2l_1 = '4.13.1';
  }
  h2l(generatingToolVersion, compileTimeVersion) {
    var runtimeConflictsWithGeneratingTool = false;
    if (!(generatingToolVersion == null)) {
      runtimeConflictsWithGeneratingTool = (!('4.13.1' === generatingToolVersion) && !(this.i2l('4.13.1') === this.i2l(generatingToolVersion)));
    }
    var runtimeConflictsWithCompileTimeTool = !('4.13.1' === compileTimeVersion) && !(this.i2l('4.13.1') === this.i2l(compileTimeVersion));
    if (runtimeConflictsWithGeneratingTool) {
      System_getInstance().h27_1.f27('ANTLR Tool version ' + generatingToolVersion + ' used for code generation does not match the current runtime version 4.13.1');
    }
    if (runtimeConflictsWithCompileTimeTool) {
      System_getInstance().h27_1.f27('ANTLR Runtime version ' + compileTimeVersion + ' used for parser compilation does not match the current runtime version 4.13.1');
    }
  }
  i2l(version) {
    var firstDot = indexOf(version, _Char___init__impl__6a9atx(46));
    var tmp;
    if (firstDot >= 0) {
      tmp = indexOf(version, _Char___init__impl__6a9atx(46), firstDot + 1 | 0);
    } else {
      tmp = -1;
    }
    var secondDot = tmp;
    var firstDash = indexOf(version, _Char___init__impl__6a9atx(45));
    var referenceLength = version.length;
    if (secondDot >= 0) {
      // Inline function 'kotlin.math.min' call
      var a = referenceLength;
      referenceLength = Math.min(a, secondDot);
    }
    if (firstDash >= 0) {
      // Inline function 'kotlin.math.min' call
      var a_0 = referenceLength;
      referenceLength = Math.min(a_0, firstDash);
    }
    return substring(version, 0, referenceLength);
  }
}
class StringCharStream {
  constructor(source, sourceName) {
    sourceName = sourceName === VOID ? '<unknown>' : sourceName;
    this.j2l_1 = source;
    this.k2l_1 = sourceName;
    this.n2l_1 = 0;
    var _destruct__k2r9zo = codePointIndicesFast(this.j2l_1);
    var codePointIndices = _destruct__k2r9zo.ki();
    var size = _destruct__k2r9zo.li();
    this.l2l_1 = codePointIndices;
    this.m2l_1 = size;
  }
  b28() {
    if ((this.m2l_1 - this.n2l_1 | 0) === 0) {
      // Inline function 'com.strumenta.antlrkotlin.runtime.assert' call
      if (!(this.c28(1) === -1)) {
        throw AssertionError.vc(null);
      }
      throw IllegalStateException.l4('cannot consume EOF');
    }
    this.n2l_1 = this.n2l_1 + 1 | 0;
  }
  u27() {
    return this.n2l_1;
  }
  a28() {
    return this.m2l_1;
  }
  v27() {
    return -1;
  }
  w27(marker) {
  }
  x27(index) {
    this.n2l_1 = index;
  }
  toString() {
    return this.p28(Companion_getInstance_25().x28(0, this.m2l_1 - 1 | 0));
  }
  p28(interval) {
    if (interval.q28_1 >= this.m2l_1 || interval.r28_1 < 0) {
      return '';
    }
    var start = this.l2l_1[interval.q28_1];
    var bPlus1 = interval.r28_1 + 1 | 0;
    var tmp;
    if (bPlus1 < this.m2l_1) {
      tmp = this.l2l_1[bPlus1];
    } else {
      tmp = this.j2l_1.length;
    }
    var stop = tmp;
    return substring(this.j2l_1, start, stop);
  }
  c28(i) {
    return i < 0 ? codePoint(this, this.n2l_1 + i | 0) : i > 0 ? codePoint(this, (this.n2l_1 + i | 0) - 1 | 0) : 0;
  }
}
class Companion_5 {
  constructor() {
    Companion_instance_5 = this;
    var tmp = this;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp.d2l_1 = Array(0);
    this.e2l_1 = new VocabularyImpl(this.d2l_1, this.d2l_1, this.d2l_1);
  }
  f2l(tokenNames) {
    // Inline function 'kotlin.collections.isNullOrEmpty' call
    var tmp;
    if (tokenNames == null) {
      tmp = true;
    } else {
      // Inline function 'kotlin.collections.isEmpty' call
      tmp = tokenNames.length === 0;
    }
    if (tmp) {
      return this.e2l_1;
    }
    var literalNames = copyOf(tokenNames, tokenNames.length);
    var symbolicNames = copyOf(tokenNames, tokenNames.length);
    var inductionVariable = 0;
    var last = tokenNames.length - 1 | 0;
    if (inductionVariable <= last)
      $l$loop_0: do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tokenName = tokenNames[i];
        // Inline function 'kotlin.text.isNotEmpty' call
        if (charSequenceLength(tokenName) > 0) {
          var firstChar = charCodeAt(tokenName, 0);
          if (firstChar === _Char___init__impl__6a9atx(39)) {
            symbolicNames[i] = null;
            continue $l$loop_0;
          } else if (isUpperCase(firstChar)) {
            literalNames[i] = null;
            continue $l$loop_0;
          }
        }
        literalNames[i] = null;
        symbolicNames[i] = null;
      }
       while (inductionVariable <= last);
    return new VocabularyImpl(literalNames, symbolicNames, (!(tokenNames == null) ? isArray(tokenNames) : false) ? tokenNames : THROW_CCE());
  }
}
class VocabularyImpl {
  constructor(literalNames, symbolicNames, displayNames) {
    Companion_getInstance_5();
    displayNames = displayNames === VOID ? null : displayNames;
    var tmp = this;
    tmp.r2l_1 = literalNames == null ? Companion_getInstance_5().d2l_1 : literalNames;
    var tmp_0 = this;
    tmp_0.s2l_1 = symbolicNames == null ? Companion_getInstance_5().d2l_1 : symbolicNames;
    var tmp_1 = this;
    tmp_1.t2l_1 = displayNames == null ? Companion_getInstance_5().d2l_1 : displayNames;
    var tmp_2 = this;
    var tmp0 = this.t2l_1.length;
    var tmp0_0 = this.r2l_1.length;
    // Inline function 'kotlin.math.max' call
    var b = this.s2l_1.length;
    // Inline function 'kotlin.math.max' call
    var b_0 = Math.max(tmp0_0, b);
    tmp_2.u2l_1 = Math.max(tmp0, b_0) - 1 | 0;
  }
  v2l(tokenType) {
    var tmp;
    if (0 <= tokenType ? tokenType <= (this.r2l_1.length - 1 | 0) : false) {
      tmp = this.r2l_1[tokenType];
    } else {
      tmp = null;
    }
    return tmp;
  }
  w2l(tokenType) {
    if (0 <= tokenType ? tokenType <= (this.s2l_1.length - 1 | 0) : false) {
      return this.s2l_1[tokenType];
    }
    return tokenType === -1 ? 'EOF' : null;
  }
  x29(tokenType) {
    if (0 <= tokenType ? tokenType <= (this.t2l_1.length - 1 | 0) : false) {
      var displayName = this.t2l_1[tokenType];
      if (!(displayName == null)) {
        return displayName;
      }
    }
    var literalName = this.v2l(tokenType);
    if (!(literalName == null)) {
      return literalName;
    }
    var symbolicName = this.w2l(tokenType);
    return symbolicName == null ? tokenType.toString() : symbolicName;
  }
}
class Companion_6 {
  constructor() {
    Companion_instance_6 = this;
    this.x2l_1 = Regex.uf('\r\n|\r|\n');
  }
}
class Point {
  constructor(line, column) {
    Companion_getInstance_6();
    this.o2l_1 = line;
    this.p2l_1 = column;
    // Inline function 'kotlin.require' call
    if (!(this.o2l_1 >= 1)) {
      var message = 'Line should be equal or greater than 1, but was ' + this.o2l_1;
      throw IllegalArgumentException.m1(toString_0(message));
    }
    // Inline function 'kotlin.require' call
    if (!(this.p2l_1 >= 0)) {
      var message_0 = 'Column should be equal or greater than 0, but was ' + this.p2l_1;
      throw IllegalArgumentException.m1(toString_0(message_0));
    }
  }
  toString() {
    return 'line ' + this.o2l_1 + ' : column ' + this.p2l_1;
  }
  y2l(other) {
    return this.o2l_1 < other.o2l_1 || (this.o2l_1 === other.o2l_1 && this.p2l_1 < other.p2l_1);
  }
  q2l(text) {
    var matches = Companion_getInstance_6().x2l_1.zf(text);
    var line = this.o2l_1 + count(matches) | 0;
    var tmp;
    if (none(matches)) {
      tmp = this.p2l_1 + text.length | 0;
    } else {
      tmp = (text.length - last(matches).dg().q2_1 | 0) - 1 | 0;
    }
    var col = tmp;
    return new Point(line, col);
  }
  hashCode() {
    var result = this.o2l_1;
    result = imul(result, 31) + this.p2l_1 | 0;
    return result;
  }
  equals(other) {
    if (this === other)
      return true;
    if (!(other instanceof Point))
      return false;
    var tmp0_other_with_cast = other instanceof Point ? other : THROW_CCE();
    if (!(this.o2l_1 === tmp0_other_with_cast.o2l_1))
      return false;
    if (!(this.p2l_1 === tmp0_other_with_cast.p2l_1))
      return false;
    return true;
  }
}
class Position {
  constructor(start, end) {
    this.z2l_1 = start;
    this.a2m_1 = end;
    // Inline function 'kotlin.require' call
    if (!(this.z2l_1.y2l(this.a2m_1) || this.z2l_1.equals(this.a2m_1))) {
      var message = 'End should follows start or be the same as start (start: ' + this.z2l_1.toString() + ', end: ' + this.a2m_1.toString() + ')';
      throw IllegalArgumentException.m1(toString_0(message));
    }
  }
  toString() {
    return 'Position(start=' + this.z2l_1.toString() + ', end=' + this.a2m_1.toString() + ')';
  }
  hashCode() {
    var result = this.z2l_1.hashCode();
    result = imul(result, 31) + this.a2m_1.hashCode() | 0;
    return result;
  }
  equals(other) {
    if (this === other)
      return true;
    if (!(other instanceof Position))
      return false;
    var tmp0_other_with_cast = other instanceof Position ? other : THROW_CCE();
    if (!this.z2l_1.equals(tmp0_other_with_cast.z2l_1))
      return false;
    if (!this.a2m_1.equals(tmp0_other_with_cast.a2m_1))
      return false;
    return true;
  }
}
class Companion_7 {
  constructor() {
    this.b2m_1 = 0;
  }
}
class ATN {
  constructor(grammarType, maxTokenType) {
    this.c2c_1 = grammarType;
    this.d2c_1 = maxTokenType;
    this.e2c_1 = ArrayList.u1();
    this.f2c_1 = ArrayList.u1();
    this.g2c_1 = null;
    this.h2c_1 = null;
    this.i2c_1 = LinkedHashMap.mb();
    this.j2c_1 = null;
    this.k2c_1 = null;
    this.l2c_1 = ArrayList.u1();
  }
  c2m() {
    return this.f2c_1.b2();
  }
  s2e(s, ctx) {
    var anal = new LL1Analyzer(this);
    return anal.e2m(s, ctx);
  }
  q2c(s) {
    var nextTokenWithinRule = s.w2c_1;
    if (!(nextTokenWithinRule == null)) {
      return nextTokenWithinRule;
    }
    nextTokenWithinRule = this.s2e(s, null);
    nextTokenWithinRule.f2m(true);
    s.w2c_1 = nextTokenWithinRule;
    return nextTokenWithinRule;
  }
  g2m(state) {
    if (!(state == null)) {
      state.r2c_1 = this;
      state.s2c_1 = this.e2c_1.b2();
    }
    this.e2c_1.z1(state);
  }
  h2m(s) {
    this.f2c_1.z1(s);
    s.p2m_1 = this.f2c_1.b2() - 1 | 0;
    return s.p2m_1;
  }
  r2m(decision) {
    var tmp;
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!this.f2c_1.u()) {
      tmp = this.f2c_1.d2(decision);
    } else {
      tmp = null;
    }
    return tmp;
  }
  t2i(stateNumber, context) {
    if (stateNumber < 0 || stateNumber >= this.e2c_1.b2()) {
      throw IllegalArgumentException.m1('Invalid state number.');
    }
    var ctx = context;
    var s = this.e2c_1.d2(stateNumber);
    var following = this.q2c(ensureNotNull(s));
    if (!following.vk(-2)) {
      return following;
    }
    var expected = IntervalSet.x2b();
    expected.f2f(following);
    expected.h2f(-2);
    while (!(ctx == null) && ctx.d2e_1 >= 0 && following.vk(-2)) {
      var invokingState = this.e2c_1.d2(ctx.d2e_1);
      var tmp = ensureNotNull(invokingState).r2e(0);
      var rt = tmp instanceof RuleTransition ? tmp : THROW_CCE();
      following = this.q2c(rt.c2f_1);
      expected.f2f(following);
      expected.h2f(-2);
      ctx = ctx.g2f();
    }
    if (following.vk(-2)) {
      expected.y2b(-1);
    }
    return expected;
  }
}
class Companion_8 {
  constructor() {
    this.s2m_1 = 1073741824;
  }
}
class ATNConfig {
  y2m() {
    return this.w2m_1 & -1073741825;
  }
  z2m(value) {
    var tmp;
    if (value) {
      this.w2m_1 = this.w2m_1 | 1073741824;
      tmp = Unit_instance;
    } else {
      this.w2m_1 = this.w2m_1 & -1073741825;
      tmp = Unit_instance;
    }
    return tmp;
  }
  a2n() {
    return !((this.w2m_1 & 1073741824) === 0);
  }
  static b2n(state, alt, context, semanticContext) {
    semanticContext = semanticContext === VOID ? Empty_getInstance() : semanticContext;
    var $this = createThis(this);
    init_org_antlr_v4_kotlinruntime_atn_ATNConfig($this);
    $this.t2m_1 = state;
    $this.u2m_1 = alt;
    $this.v2m_1 = context;
    $this.x2m_1 = semanticContext;
    return $this;
  }
  static c2n(c, state, semanticContext) {
    return this.d2n(c, state, c.v2m_1, semanticContext);
  }
  static e2n(c, semanticContext) {
    return this.d2n(c, c.t2m_1, c.v2m_1, semanticContext);
  }
  static d2n(c, state, context, semanticContext) {
    context = context === VOID ? c.v2m_1 : context;
    semanticContext = semanticContext === VOID ? c.x2m_1 : semanticContext;
    var $this = createThis(this);
    init_org_antlr_v4_kotlinruntime_atn_ATNConfig($this);
    $this.t2m_1 = state;
    $this.u2m_1 = c.u2m_1;
    $this.v2m_1 = context;
    $this.x2m_1 = semanticContext;
    $this.w2m_1 = c.w2m_1;
    return $this;
  }
  equals(other) {
    var tmp;
    if (other instanceof ATNConfig) {
      tmp = this.f2n(other);
    } else {
      tmp = false;
    }
    return tmp;
  }
  f2n(other) {
    if (this === other) {
      return true;
    }
    if (other == null) {
      return false;
    }
    return this.t2m_1.s2c_1 === other.t2m_1.s2c_1 && this.u2m_1 === other.u2m_1 && equals(this.v2m_1, other.v2m_1) && equals(this.x2m_1, other.x2m_1) && this.a2n() === other.a2n();
  }
  hashCode() {
    var hashCode = MurmurHash_instance.h2n(7);
    hashCode = MurmurHash_instance.i2n(hashCode, this.t2m_1.s2c_1);
    hashCode = MurmurHash_instance.i2n(hashCode, this.u2m_1);
    hashCode = MurmurHash_instance.j2n(hashCode, this.v2m_1);
    hashCode = MurmurHash_instance.j2n(hashCode, this.x2m_1);
    hashCode = MurmurHash_instance.k2n(hashCode, 4);
    return hashCode;
  }
  toString() {
    return this.l2n(null, true);
  }
  l2n(recog, showAlt) {
    var buf = StringBuilder.s();
    buf.t('(');
    buf.z(this.t2m_1);
    if (showAlt) {
      buf.t(',');
      buf.af(this.u2m_1);
    }
    if (!(this.v2m_1 == null)) {
      buf.t(',[');
      buf.t(toString_0(ensureNotNull(this.v2m_1)));
      buf.t(']');
    }
    if (!(this.x2m_1 === Empty_getInstance())) {
      buf.t(',');
      buf.z(this.x2m_1);
    }
    if (this.y2m() > 0) {
      buf.t(',up=');
      buf.af(this.y2m());
    }
    buf.t(')');
    return buf.toString();
  }
}
class Array2DHashSet {
  constructor(comparator, initialCapacity, initialBucketCapacity) {
    comparator = comparator === VOID ? Companion_getInstance_27().k2x_1 : comparator;
    initialCapacity = initialCapacity === VOID ? 16 : initialCapacity;
    initialBucketCapacity = initialBucketCapacity === VOID ? 8 : initialBucketCapacity;
    this.w2n_1 = comparator;
    this.x2n_1 = initialCapacity;
    this.y2n_1 = initialBucketCapacity;
    this.a2o_1 = 0;
    this.b2o_1 = 1;
    this.c2o_1 = 0;
    this.z2n_1 = this.u2n(this.x2n_1);
    var tmp = this;
    // Inline function 'kotlin.math.floor' call
    var x = this.x2n_1 * 0.75;
    var tmp$ret$0 = Math.floor(x);
    tmp.c2o_1 = numberToInt(tmp$ret$0);
  }
  d2o(o) {
    if (this.a2o_1 > this.c2o_1) {
      this.h2o();
    }
    return this.e2o(o);
  }
  e2o(o) {
    var b = this.g2o(o);
    var bucket = this.z2n_1[b];
    if (bucket == null) {
      bucket = this.v2n(this.y2n_1);
      bucket[0] = o;
      this.z2n_1[b] = bucket;
      this.a2o_1 = this.a2o_1 + 1 | 0;
      return o;
    }
    var inductionVariable = 0;
    var last = bucket.length - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var existing = bucket[i];
        if (existing == null) {
          bucket[i] = o;
          this.a2o_1 = this.a2o_1 + 1 | 0;
          return o;
        }
        if (this.w2n_1.q2o(existing, o)) {
          return existing;
        }
      }
       while (inductionVariable <= last);
    var oldLength = bucket.length;
    bucket = copyOf(bucket, imul(bucket.length, 2));
    this.z2n_1[b] = bucket;
    bucket[oldLength] = o;
    this.a2o_1 = this.a2o_1 + 1 | 0;
    return o;
  }
  f2o(o) {
    if (o == null) {
      return o;
    }
    var b = this.g2o(o);
    var tmp0_elvis_lhs = this.z2n_1[b];
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return null;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var bucket = tmp;
    var inductionVariable = 0;
    var last = bucket.length;
    while (inductionVariable < last) {
      var e = bucket[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      if (e == null) {
        return null;
      }
      if (this.w2n_1.q2o(e, o)) {
        return e;
      }
    }
    return null;
  }
  g2o(o) {
    var hash = this.w2n_1.o2o(o);
    return hash & (this.z2n_1.length - 1 | 0);
  }
  hashCode() {
    var hash = MurmurHash_instance.c2z();
    var indexedObject = this.z2n_1;
    var inductionVariable = 0;
    var last = indexedObject.length;
    $l$loop: while (inductionVariable < last) {
      var bucket = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      if (bucket == null) {
        continue $l$loop;
      }
      var _iterator__ex2g4s = arrayIterator(bucket);
      $l$loop_0: while (_iterator__ex2g4s.x()) {
        var o = _iterator__ex2g4s.y();
        if (o == null) {
          break $l$loop_0;
        }
        hash = MurmurHash_instance.i2n(hash, this.w2n_1.o2o(o));
      }
    }
    hash = MurmurHash_instance.k2n(hash, this.b2());
    return hash;
  }
  equals(other) {
    if (other === this) {
      return true;
    }
    if (!(other instanceof Array2DHashSet)) {
      return false;
    }
    var tmp;
    if (other.b2() === this.b2()) {
      // Inline function 'kotlin.collections.containsAll' call
      tmp = this.h3(other);
    } else {
      tmp = false;
    }
    return tmp;
  }
  h2o() {
    var old = this.z2n_1;
    this.b2o_1 = this.b2o_1 + 4 | 0;
    var newCapacity = imul(this.z2n_1.length, 2);
    var newTable = this.u2n(newCapacity);
    var newBucketLengths = new Int32Array(newTable.length);
    this.z2n_1 = newTable;
    this.c2o_1 = numberToInt(newCapacity * 0.75);
    var oldSize = this.b2();
    var inductionVariable = 0;
    var last = old.length;
    $l$loop: while (inductionVariable < last) {
      var bucket = old[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      if (bucket == null) {
        continue $l$loop;
      }
      var _iterator__ex2g4s = arrayIterator(bucket);
      $l$loop_0: while (_iterator__ex2g4s.x()) {
        var o = _iterator__ex2g4s.y();
        if (o == null) {
          break $l$loop_0;
        }
        var b = this.g2o(o);
        var bucketLength = newBucketLengths[b];
        var newBucket;
        if (bucketLength === 0) {
          newBucket = this.v2n(this.y2n_1);
          newTable[b] = newBucket;
        } else {
          newBucket = ensureNotNull(newTable[b]);
          if (bucketLength === newBucket.length) {
            newBucket = copyOf(newBucket, imul(newBucket.length, 2));
            newTable[b] = newBucket;
          }
        }
        newBucket[bucketLength] = o;
        newBucketLengths[b] = newBucketLengths[b] + 1 | 0;
      }
    }
    // Inline function 'com.strumenta.antlrkotlin.runtime.assert' call
    if (!(this.a2o_1 === oldSize)) {
      throw AssertionError.vc(null);
    }
  }
  i2o(element) {
    var existing = this.d2o(element);
    return existing === element;
  }
  z1(element) {
    return this.i2o(element);
  }
  b2() {
    return this.a2o_1;
  }
  u() {
    return this.a2o_1 === 0;
  }
  gi(element) {
    return this.j2o(element);
  }
  g2(element) {
    if (!true)
      return false;
    return this.gi(element);
  }
  j2o(obj) {
    var tmp;
    if (obj == null) {
      tmp = false;
    } else {
      tmp = !(this.f2o(obj) == null);
    }
    return tmp;
  }
  w() {
    return new SetIterator(this, this.m7());
  }
  m7() {
    var a = this.v2n(this.b2());
    var i = 0;
    var indexedObject = this.z2n_1;
    var inductionVariable = 0;
    var last = indexedObject.length;
    $l$loop: while (inductionVariable < last) {
      var bucket = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      if (bucket == null) {
        continue $l$loop;
      }
      var _iterator__ex2g4s = arrayIterator(bucket);
      $l$loop_0: while (_iterator__ex2g4s.x()) {
        var o = _iterator__ex2g4s.y();
        if (o == null) {
          break $l$loop_0;
        }
        var _unary__edvuaz = i;
        i = _unary__edvuaz + 1 | 0;
        a[_unary__edvuaz] = o;
      }
    }
    return isArray(a) ? a : THROW_CCE();
  }
  k2o(element) {
    return this.l2o(this.t2n(element));
  }
  l2o(obj) {
    if (obj == null) {
      return false;
    }
    var b = this.g2o(obj);
    var tmp0_elvis_lhs = this.z2n_1[b];
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var bucket = tmp;
    var inductionVariable = 0;
    var last = bucket.length - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp1_elvis_lhs = bucket[i];
        var tmp_0;
        if (tmp1_elvis_lhs == null) {
          return false;
        } else {
          tmp_0 = tmp1_elvis_lhs;
        }
        var e = tmp_0;
        if (this.w2n_1.q2o(e, obj)) {
          var tmp6 = i + 1 | 0;
          // Inline function 'kotlin.collections.copyInto' call
          var endIndex = bucket.length;
          arrayCopy(bucket, bucket, i, tmp6, endIndex);
          bucket[bucket.length - 1 | 0] = null;
          this.a2o_1 = this.a2o_1 - 1 | 0;
          return true;
        }
      }
       while (inductionVariable <= last);
    return false;
  }
  hi(elements) {
    if (elements instanceof Array2DHashSet) {
      var indexedObject = this.z2n_1;
      var inductionVariable = 0;
      var last = indexedObject.length;
      $l$loop: while (inductionVariable < last) {
        var bucket = indexedObject[inductionVariable];
        inductionVariable = inductionVariable + 1 | 0;
        if (bucket == null) {
          continue $l$loop;
        }
        var _iterator__ex2g4s = arrayIterator(bucket);
        $l$loop_0: while (_iterator__ex2g4s.x()) {
          var o = _iterator__ex2g4s.y();
          if (o == null) {
            break $l$loop_0;
          }
          if (!this.j2o(this.t2n(o))) {
            return false;
          }
        }
      }
    } else {
      var _iterator__ex2g4s_0 = elements.w();
      while (_iterator__ex2g4s_0.x()) {
        var o_0 = _iterator__ex2g4s_0.y();
        if (!(o_0 == null) && !this.j2o(this.t2n(o_0))) {
          return false;
        }
      }
    }
    return true;
  }
  h3(elements) {
    return this.hi(elements);
  }
  m2o(elements) {
    var changed = false;
    var _iterator__ex2g4s = elements.w();
    while (_iterator__ex2g4s.x()) {
      var o = _iterator__ex2g4s.y();
      var existing = this.d2o(o);
      if (!(existing === o)) {
        changed = true;
      }
    }
    return changed;
  }
  c2(elements) {
    return this.m2o(elements);
  }
  toString() {
    if (this.b2() === 0) {
      return '{}';
    }
    var buf = StringBuilder.s();
    buf.t('{');
    var first = true;
    var indexedObject = this.z2n_1;
    var inductionVariable = 0;
    var last = indexedObject.length;
    $l$loop: while (inductionVariable < last) {
      var bucket = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      if (bucket == null)
        continue $l$loop;
      var _iterator__ex2g4s = arrayIterator(bucket);
      $l$loop_0: while (_iterator__ex2g4s.x()) {
        var o = _iterator__ex2g4s.y();
        if (o == null) {
          break $l$loop_0;
        }
        if (first) {
          first = false;
        } else {
          buf.t(', ');
        }
        buf.t(toString_0(o));
      }
    }
    buf.t('}');
    return buf.toString();
  }
  t2n(o) {
    return o;
  }
  u2n(capacity) {
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp = Array(capacity);
    return isArray(tmp) ? tmp : THROW_CCE();
  }
  v2n(capacity) {
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp = Array(capacity);
    return isArray(tmp) ? tmp : THROW_CCE();
  }
}
class AbstractConfigHashSet extends Array2DHashSet {
  constructor(comparator, initialCapacity, initialBucketCapacity) {
    initialCapacity = initialCapacity === VOID ? 16 : initialCapacity;
    initialBucketCapacity = initialBucketCapacity === VOID ? 2 : initialBucketCapacity;
    super(comparator, initialCapacity, initialBucketCapacity);
  }
  t2n(o) {
    var tmp;
    if (!(o instanceof ATNConfig)) {
      tmp = null;
    } else {
      tmp = o;
    }
    return tmp;
  }
  u2n(capacity) {
    // Inline function 'kotlin.arrayOfNulls' call
    return Array(capacity);
  }
  v2n(capacity) {
    // Inline function 'kotlin.arrayOfNulls' call
    return Array(capacity);
  }
}
class ConfigHashSet extends AbstractConfigHashSet {
  constructor() {
    super(ConfigEqualityComparator_getInstance());
  }
}
class AbstractEqualityComparator {}
class ConfigEqualityComparator extends AbstractEqualityComparator {
  constructor() {
    ConfigEqualityComparator_instance = null;
    super();
    ConfigEqualityComparator_instance = this;
  }
  n2o(obj) {
    var hashCode_0 = 7;
    hashCode_0 = imul(31, hashCode_0) + obj.t2m_1.s2c_1 | 0;
    hashCode_0 = imul(31, hashCode_0) + obj.u2m_1 | 0;
    hashCode_0 = imul(31, hashCode_0) + hashCode(obj.x2m_1) | 0;
    return hashCode_0;
  }
  o2o(obj) {
    return this.n2o(obj instanceof ATNConfig ? obj : THROW_CCE());
  }
  p2o(a, b) {
    if (a === b) {
      return true;
    }
    if (a == null || b == null) {
      return false;
    }
    return a.t2m_1.s2c_1 === b.t2m_1.s2c_1 && a.u2m_1 === b.u2m_1 && equals(a.x2m_1, b.x2m_1);
  }
  q2o(a, b) {
    var tmp = (a == null ? true : a instanceof ATNConfig) ? a : THROW_CCE();
    return this.p2o(tmp, (b == null ? true : b instanceof ATNConfig) ? b : THROW_CCE());
  }
}
class ATNConfigSet {
  constructor(fullCtx) {
    fullCtx = fullCtx === VOID ? true : fullCtx;
    this.r2o_1 = fullCtx;
    this.s2o_1 = new ConfigHashSet();
    this.t2o_1 = ArrayList.y1(7);
    this.u2o_1 = 0;
    this.v2o_1 = null;
    this.w2o_1 = false;
    this.x2o_1 = false;
    this.y2o_1 = -1;
    this.z2o_1 = false;
  }
  a2p() {
    var alts = BitSet.c2p();
    var _iterator__ex2g4s = this.t2o_1.w();
    while (_iterator__ex2g4s.x()) {
      var config = _iterator__ex2g4s.y();
      alts.d2p(config.u2m_1);
    }
    return alts;
  }
  f2m(value) {
    this.z2o_1 = value;
    this.s2o_1 = null;
  }
  e2p(element) {
    return this.f2p(element, null);
  }
  z1(element) {
    return this.e2p(element instanceof ATNConfig ? element : THROW_CCE());
  }
  f2p(config, mergeCache) {
    if (this.z2o_1) {
      throw IllegalStateException.l4('This set is readonly');
    }
    if (!(config.x2m_1 === Empty_getInstance())) {
      this.w2o_1 = true;
    }
    if (config.y2m() > 0) {
      this.x2o_1 = true;
    }
    var existing = ensureNotNull(this.s2o_1).d2o(config);
    if (existing === config) {
      this.y2o_1 = -1;
      this.t2o_1.z1(config);
      return true;
    }
    var rootIsWildcard = !this.r2o_1;
    var merged = Companion_instance_17.j2p(existing.v2m_1, config.v2m_1, rootIsWildcard, mergeCache);
    var tmp = existing;
    var tmp0 = existing.w2m_1;
    // Inline function 'kotlin.math.max' call
    var b = config.w2m_1;
    tmp.w2m_1 = Math.max(tmp0, b);
    if (config.a2n()) {
      existing.z2m(true);
    }
    existing.v2m_1 = merged;
    return true;
  }
  k2p() {
    return this.t2o_1;
  }
  l2p(interpreter) {
    if (this.z2o_1) {
      throw IllegalStateException.l4('This set is readonly');
    }
    if (ensureNotNull(this.s2o_1).u()) {
      return Unit_instance;
    }
    var _iterator__ex2g4s = this.t2o_1.w();
    while (_iterator__ex2g4s.x()) {
      var config = _iterator__ex2g4s.y();
      config.v2m_1 = interpreter.m2p(ensureNotNull(config.v2m_1));
    }
  }
  n2p(elements) {
    var _iterator__ex2g4s = elements.w();
    while (_iterator__ex2g4s.x()) {
      var c = _iterator__ex2g4s.y();
      this.e2p(c);
    }
    return false;
  }
  c2(elements) {
    return this.n2p(elements);
  }
  equals(other) {
    if (other === this) {
      return true;
    }
    if (!(other instanceof ATNConfigSet)) {
      return false;
    }
    return equals(this.t2o_1, other.t2o_1) && this.r2o_1 === other.r2o_1 && this.u2o_1 === other.u2o_1 && this.v2o_1 === other.v2o_1 && this.w2o_1 === other.w2o_1 && this.x2o_1 === other.x2o_1;
  }
  hashCode() {
    if (this.z2o_1) {
      if (this.y2o_1 === -1) {
        this.y2o_1 = hashCode(this.t2o_1);
      }
      return this.y2o_1;
    }
    return hashCode(this.t2o_1);
  }
  b2() {
    return this.t2o_1.b2();
  }
  u() {
    return this.t2o_1.u();
  }
  o2p(element) {
    if (this.s2o_1 == null) {
      throw UnsupportedOperationException.l9('This method is not implemented for readonly sets.');
    }
    return ensureNotNull(this.s2o_1).gi(element);
  }
  g2(element) {
    if (!(element instanceof ATNConfig))
      return false;
    return this.o2p(element instanceof ATNConfig ? element : THROW_CCE());
  }
  w() {
    return this.t2o_1.w();
  }
  toString() {
    var buf = StringBuilder.s();
    buf.t(toString_0(this.k2p()));
    if (this.w2o_1) {
      buf.t(',hasSemanticContext=');
      buf.ze(this.w2o_1);
    }
    if (!(this.u2o_1 === 0)) {
      buf.t(',uniqueAlt=');
      buf.af(this.u2o_1);
    }
    if (!(this.v2o_1 == null)) {
      buf.t(',conflictingAlts=');
      buf.z(this.v2o_1);
    }
    if (this.x2o_1) {
      buf.t(',dipsIntoOuterContext');
    }
    return buf.toString();
  }
  p2p(elements) {
    throw UnsupportedOperationException.q7();
  }
  h3(elements) {
    return this.p2p(elements);
  }
}
class Companion_9 {
  constructor() {
    Companion_instance_9 = this;
    var tmp = this;
    // Inline function 'kotlin.also' call
    var this_0 = ATNDeserializationOptions.t2p();
    this_0.u2p();
    tmp.v2p_1 = this_0;
  }
}
class ATNDeserializationOptions {
  w2p() {
    return this.r2p_1;
  }
  x2p() {
    return this.s2p_1;
  }
  static t2p() {
    Companion_getInstance_9();
    var $this = createThis(this);
    init_org_antlr_v4_kotlinruntime_atn_ATNDeserializationOptions($this);
    $this.r2p_1 = true;
    $this.s2p_1 = false;
    return $this;
  }
  u2p() {
    this.q2p_1 = true;
  }
}
class Companion_10 {
  constructor() {
    this.y2p_1 = 4;
  }
}
class ATNDeserializer {
  constructor(deserializationOptions) {
    deserializationOptions = deserializationOptions === VOID ? Companion_getInstance_9().v2p_1 : deserializationOptions;
    this.a2q_1 = deserializationOptions;
  }
  b2q(data) {
    return this.d2q(this.c2q(data));
  }
  d2q(data) {
    var p = {_v: 0};
    var _unary__edvuaz = p._v;
    p._v = _unary__edvuaz + 1 | 0;
    var version = data[_unary__edvuaz];
    if (!(version === 4)) {
      var reason = 'Could not deserialize ATN with version ' + version + ' (expected 4).';
      throw UnsupportedOperationException.l9(reason);
    }
    var tmp = get_entries();
    var _unary__edvuaz_0 = p._v;
    p._v = _unary__edvuaz_0 + 1 | 0;
    var grammarType = tmp.d2(data[_unary__edvuaz_0]);
    var _unary__edvuaz_1 = p._v;
    p._v = _unary__edvuaz_1 + 1 | 0;
    var maxTokenType = data[_unary__edvuaz_1];
    var atn = new ATN(grammarType, maxTokenType);
    var loopBackStateNumbers = ArrayList.u1();
    var endStateNumbers = ArrayList.u1();
    var _unary__edvuaz_2 = p._v;
    p._v = _unary__edvuaz_2 + 1 | 0;
    var nStates = data[_unary__edvuaz_2];
    var inductionVariable = 0;
    if (inductionVariable < nStates)
      $l$loop: do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var _unary__edvuaz_3 = p._v;
        p._v = _unary__edvuaz_3 + 1 | 0;
        var sType = data[_unary__edvuaz_3];
        if (sType === 0) {
          atn.g2m(null);
          continue $l$loop;
        }
        var _unary__edvuaz_4 = p._v;
        p._v = _unary__edvuaz_4 + 1 | 0;
        var ruleIndex = data[_unary__edvuaz_4];
        var s = this.e2q(sType, ruleIndex);
        if (sType === 12) {
          var _unary__edvuaz_5 = p._v;
          p._v = _unary__edvuaz_5 + 1 | 0;
          var loopBackStateNumber = data[_unary__edvuaz_5];
          loopBackStateNumbers.z1(new Pair(s instanceof LoopEndState ? s : THROW_CCE(), loopBackStateNumber));
        } else {
          if (s instanceof BlockStartState) {
            var _unary__edvuaz_6 = p._v;
            p._v = _unary__edvuaz_6 + 1 | 0;
            var endStateNumber = data[_unary__edvuaz_6];
            endStateNumbers.z1(new Pair(s, endStateNumber));
          }
        }
        atn.g2m(s);
      }
       while (inductionVariable < nStates);
    var _iterator__ex2g4s = loopBackStateNumbers.w();
    while (_iterator__ex2g4s.x()) {
      var pair = _iterator__ex2g4s.y();
      pair.first.m2q_1 = atn.e2c_1.d2(pair.second);
    }
    var _iterator__ex2g4s_0 = endStateNumbers.w();
    while (_iterator__ex2g4s_0.x()) {
      var pair_0 = _iterator__ex2g4s_0.y();
      var tmp_0 = pair_0.first;
      var tmp_1 = atn.e2c_1.d2(pair_0.second);
      tmp_0.x2q_1 = tmp_1 instanceof BlockEndState ? tmp_1 : THROW_CCE();
    }
    var _unary__edvuaz_7 = p._v;
    p._v = _unary__edvuaz_7 + 1 | 0;
    var numNonGreedyStates = data[_unary__edvuaz_7];
    var inductionVariable_0 = 0;
    if (inductionVariable_0 < numNonGreedyStates)
      do {
        var i_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        var _unary__edvuaz_8 = p._v;
        p._v = _unary__edvuaz_8 + 1 | 0;
        var stateNumber = data[_unary__edvuaz_8];
        var tmp_2 = atn.e2c_1.d2(stateNumber);
        (tmp_2 instanceof DecisionState ? tmp_2 : THROW_CCE()).q2m_1 = true;
      }
       while (inductionVariable_0 < numNonGreedyStates);
    var _unary__edvuaz_9 = p._v;
    p._v = _unary__edvuaz_9 + 1 | 0;
    var numPrecedenceStates = data[_unary__edvuaz_9];
    var inductionVariable_1 = 0;
    if (inductionVariable_1 < numPrecedenceStates)
      do {
        var i_1 = inductionVariable_1;
        inductionVariable_1 = inductionVariable_1 + 1 | 0;
        var _unary__edvuaz_10 = p._v;
        p._v = _unary__edvuaz_10 + 1 | 0;
        var stateNumber_0 = data[_unary__edvuaz_10];
        var tmp_3 = atn.e2c_1.d2(stateNumber_0);
        (tmp_3 instanceof RuleStartState ? tmp_3 : THROW_CCE()).g2r_1 = true;
      }
       while (inductionVariable_1 < numPrecedenceStates);
    var _unary__edvuaz_11 = p._v;
    p._v = _unary__edvuaz_11 + 1 | 0;
    var nRules = data[_unary__edvuaz_11];
    if (atn.c2c_1.equals(ATNType_LEXER_getInstance())) {
      atn.j2c_1 = new Int32Array(nRules);
    }
    var tmp_4 = atn;
    var tmp_5 = 0;
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp_6 = Array(nRules);
    while (tmp_5 < nRules) {
      var tmp_7 = tmp_5;
      var _unary__edvuaz_12 = p._v;
      p._v = _unary__edvuaz_12 + 1 | 0;
      var s_0 = data[_unary__edvuaz_12];
      var tmp_8 = atn.e2c_1.d2(s_0);
      var startState = tmp_8 instanceof RuleStartState ? tmp_8 : THROW_CCE();
      if (atn.c2c_1.equals(ATNType_LEXER_getInstance())) {
        var _unary__edvuaz_13 = p._v;
        p._v = _unary__edvuaz_13 + 1 | 0;
        var tokenType = data[_unary__edvuaz_13];
        ensureNotNull(atn.j2c_1)[tmp_7] = tokenType;
      }
      tmp_6[tmp_7] = startState;
      tmp_5 = tmp_5 + 1 | 0;
    }
    tmp_4.g2c_1 = tmp_6;
    var tmp_9 = atn;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp_9.h2c_1 = Array(nRules);
    var _iterator__ex2g4s_1 = atn.e2c_1.w();
    $l$loop_0: while (_iterator__ex2g4s_1.x()) {
      var state = _iterator__ex2g4s_1.y();
      if (!(state instanceof RuleStopState)) {
        continue $l$loop_0;
      }
      ensureNotNull(atn.h2c_1)[state.t2c_1] = state;
      ensureNotNull(atn.g2c_1)[state.t2c_1].f2r_1 = state;
    }
    var _unary__edvuaz_14 = p._v;
    p._v = _unary__edvuaz_14 + 1 | 0;
    var nModes = data[_unary__edvuaz_14];
    var inductionVariable_2 = 0;
    if (inductionVariable_2 < nModes)
      do {
        var i_2 = inductionVariable_2;
        inductionVariable_2 = inductionVariable_2 + 1 | 0;
        var _unary__edvuaz_15 = p._v;
        p._v = _unary__edvuaz_15 + 1 | 0;
        var s_1 = data[_unary__edvuaz_15];
        var tmp_10 = atn.e2c_1.d2(s_1);
        atn.l2c_1.z1(tmp_10 instanceof TokensStartState ? tmp_10 : THROW_CCE());
      }
       while (inductionVariable_2 < nModes);
    var sets = ArrayList.u1();
    p._v = deserializeSets(this, data, p._v, sets);
    var _unary__edvuaz_16 = p._v;
    p._v = _unary__edvuaz_16 + 1 | 0;
    var nEdges = data[_unary__edvuaz_16];
    var inductionVariable_3 = 0;
    if (inductionVariable_3 < nEdges)
      do {
        var i_3 = inductionVariable_3;
        inductionVariable_3 = inductionVariable_3 + 1 | 0;
        var src = data[p._v];
        var trg = data[p._v + 1 | 0];
        var ttype = data[p._v + 2 | 0];
        var arg1 = data[p._v + 3 | 0];
        var arg2 = data[p._v + 4 | 0];
        var arg3 = data[p._v + 5 | 0];
        var trans = this.i2r(atn, ttype, src, trg, arg1, arg2, arg3, sets);
        var srcState = atn.e2c_1.d2(src);
        ensureNotNull(srcState).j2r(trans);
        p._v = p._v + 6 | 0;
      }
       while (inductionVariable_3 < nEdges);
    var _iterator__ex2g4s_2 = atn.e2c_1.w();
    while (_iterator__ex2g4s_2.x()) {
      var state_0 = _iterator__ex2g4s_2.y();
      var inductionVariable_4 = 0;
      var last = ensureNotNull(state_0).k2r();
      if (inductionVariable_4 < last)
        $l$loop_1: do {
          var i_4 = inductionVariable_4;
          inductionVariable_4 = inductionVariable_4 + 1 | 0;
          var tmp_11 = state_0.r2e(i_4);
          var tmp0_elvis_lhs = tmp_11 instanceof RuleTransition ? tmp_11 : null;
          var tmp_12;
          if (tmp0_elvis_lhs == null) {
            continue $l$loop_1;
          } else {
            tmp_12 = tmp0_elvis_lhs;
          }
          var t = tmp_12;
          var outermostPrecedenceReturn = -1;
          if (ensureNotNull(atn.g2c_1)[t.p2e_1.t2c_1].g2r_1) {
            if (t.b2f_1 === 0) {
              outermostPrecedenceReturn = t.p2e_1.t2c_1;
            }
          }
          var returnTransition = new EpsilonTransition(t.c2f_1, outermostPrecedenceReturn);
          ensureNotNull(ensureNotNull(atn.h2c_1)[t.p2e_1.t2c_1]).j2r(returnTransition);
        }
         while (inductionVariable_4 < last);
    }
    var _iterator__ex2g4s_3 = atn.e2c_1.w();
    while (_iterator__ex2g4s_3.x()) {
      var state_1 = _iterator__ex2g4s_3.y();
      if (state_1 instanceof BlockStartState) {
        var tmp1_elvis_lhs = state_1.x2q_1;
        var tmp_13;
        if (tmp1_elvis_lhs == null) {
          throw IllegalStateException.ac();
        } else {
          tmp_13 = tmp1_elvis_lhs;
        }
        var endState = tmp_13;
        if (!(endState.s2r_1 == null)) {
          throw IllegalStateException.ac();
        }
        endState.s2r_1 = state_1;
      }
      if (state_1 instanceof PlusLoopbackState) {
        var inductionVariable_5 = 0;
        var last_0 = state_1.k2r();
        if (inductionVariable_5 < last_0)
          do {
            var i_5 = inductionVariable_5;
            inductionVariable_5 = inductionVariable_5 + 1 | 0;
            var target = state_1.r2e(i_5).p2e_1;
            if (target instanceof PlusBlockStartState) {
              target.q2s_1 = state_1;
            }
          }
           while (inductionVariable_5 < last_0);
      } else {
        if (state_1 instanceof StarLoopbackState) {
          var inductionVariable_6 = 0;
          var last_1 = state_1.k2r();
          if (inductionVariable_6 < last_1)
            do {
              var i_6 = inductionVariable_6;
              inductionVariable_6 = inductionVariable_6 + 1 | 0;
              var target_0 = state_1.r2e(i_6).p2e_1;
              if (target_0 instanceof StarLoopEntryState) {
                target_0.d2s_1 = state_1;
              }
            }
             while (inductionVariable_6 < last_1);
        }
      }
    }
    var _unary__edvuaz_17 = p._v;
    p._v = _unary__edvuaz_17 + 1 | 0;
    var nDecisions = data[_unary__edvuaz_17];
    var inductionVariable_7 = 1;
    if (inductionVariable_7 <= nDecisions)
      do {
        var i_7 = inductionVariable_7;
        inductionVariable_7 = inductionVariable_7 + 1 | 0;
        var _unary__edvuaz_18 = p._v;
        p._v = _unary__edvuaz_18 + 1 | 0;
        var s_2 = data[_unary__edvuaz_18];
        var tmp_14 = atn.e2c_1.d2(s_2);
        var decState = tmp_14 instanceof DecisionState ? tmp_14 : THROW_CCE();
        atn.f2c_1.z1(decState);
        decState.p2m_1 = i_7 - 1 | 0;
      }
       while (!(i_7 === nDecisions));
    if (atn.c2c_1.equals(ATNType_LEXER_getInstance())) {
      var tmp_15 = atn;
      var tmp_16 = 0;
      var _unary__edvuaz_19 = p._v;
      p._v = _unary__edvuaz_19 + 1 | 0;
      var tmp_17 = data[_unary__edvuaz_19];
      // Inline function 'kotlin.arrayOfNulls' call
      var tmp_18 = Array(tmp_17);
      while (tmp_16 < tmp_17) {
        var tmp_19 = tmp_16;
        var tmp_20 = get_entries_0();
        var _unary__edvuaz_20 = p._v;
        p._v = _unary__edvuaz_20 + 1 | 0;
        var actionType = tmp_20.d2(data[_unary__edvuaz_20]);
        var _unary__edvuaz_21 = p._v;
        p._v = _unary__edvuaz_21 + 1 | 0;
        var data1 = data[_unary__edvuaz_21];
        var _unary__edvuaz_22 = p._v;
        p._v = _unary__edvuaz_22 + 1 | 0;
        var data2 = data[_unary__edvuaz_22];
        tmp_18[tmp_19] = this.s2s(actionType, data1, data2);
        tmp_16 = tmp_16 + 1 | 0;
      }
      tmp_15.k2c_1 = tmp_18;
    }
    this.t2s(atn);
    if (this.a2q_1.w2p()) {
      this.u2s(atn);
    }
    if (this.a2q_1.x2p() && atn.c2c_1.equals(ATNType_PARSER_getInstance())) {
      atn.j2c_1 = new Int32Array(ensureNotNull(atn.g2c_1).length);
      var inductionVariable_8 = 0;
      var last_2 = ensureNotNull(atn.g2c_1).length - 1 | 0;
      if (inductionVariable_8 <= last_2)
        do {
          var i_8 = inductionVariable_8;
          inductionVariable_8 = inductionVariable_8 + 1 | 0;
          ensureNotNull(atn.j2c_1)[i_8] = (atn.d2c_1 + i_8 | 0) + 1 | 0;
        }
         while (inductionVariable_8 <= last_2);
      var inductionVariable_9 = 0;
      var last_3 = ensureNotNull(atn.g2c_1).length - 1 | 0;
      if (inductionVariable_9 <= last_3)
        do {
          var i_9 = inductionVariable_9;
          inductionVariable_9 = inductionVariable_9 + 1 | 0;
          var bypassStart = new BasicBlockStartState();
          bypassStart.t2c_1 = i_9;
          atn.g2m(bypassStart);
          var bypassStop = new BlockEndState();
          bypassStop.t2c_1 = i_9;
          atn.g2m(bypassStop);
          bypassStart.x2q_1 = bypassStop;
          atn.h2m(bypassStart);
          bypassStop.s2r_1 = bypassStart;
          var endState_0;
          var excludeTransition = null;
          if (ensureNotNull(atn.g2c_1)[i_9].g2r_1) {
            endState_0 = null;
            var _iterator__ex2g4s_4 = atn.e2c_1.w();
            $l$loop_5: while (_iterator__ex2g4s_4.x()) {
              var state_2 = _iterator__ex2g4s_4.y();
              if (!(ensureNotNull(state_2).t2c_1 === i_9)) {
                continue $l$loop_5;
              }
              if (!(state_2 instanceof StarLoopEntryState)) {
                continue $l$loop_5;
              }
              var maybeLoopEndState = state_2.r2e(state_2.k2r() - 1 | 0).p2e_1;
              if (!(maybeLoopEndState instanceof LoopEndState)) {
                continue $l$loop_5;
              }
              var tmp_21;
              if (maybeLoopEndState.u2c_1) {
                var tmp_22 = maybeLoopEndState.r2e(0).p2e_1;
                tmp_21 = tmp_22 instanceof RuleStopState;
              } else {
                tmp_21 = false;
              }
              if (tmp_21) {
                endState_0 = state_2;
                break $l$loop_5;
              }
            }
            if (endState_0 == null) {
              throw UnsupportedOperationException.l9("Couldn't identify final state of the precedence rule prefix section.");
            }
            excludeTransition = ensureNotNull((endState_0 instanceof StarLoopEntryState ? endState_0 : THROW_CCE()).d2s_1).r2e(0);
          } else {
            endState_0 = ensureNotNull(atn.h2c_1)[i_9];
          }
          var _iterator__ex2g4s_5 = atn.e2c_1.w();
          while (_iterator__ex2g4s_5.x()) {
            var state_3 = _iterator__ex2g4s_5.y();
            var _iterator__ex2g4s_6 = ensureNotNull(state_3).v2c_1.w();
            $l$loop_6: while (_iterator__ex2g4s_6.x()) {
              var transition = _iterator__ex2g4s_6.y();
              if (transition === excludeTransition) {
                continue $l$loop_6;
              }
              if (transition.p2e_1 === endState_0) {
                transition.p2e_1 = bypassStop;
              }
            }
          }
          while (ensureNotNull(atn.g2c_1)[i_9].k2r() > 0) {
            var transition_0 = ensureNotNull(atn.g2c_1)[i_9].v2s(ensureNotNull(atn.g2c_1)[i_9].k2r() - 1 | 0);
            bypassStart.j2r(transition_0);
          }
          ensureNotNull(atn.g2c_1)[i_9].j2r(new EpsilonTransition(bypassStart));
          bypassStop.j2r(new EpsilonTransition(ensureNotNull(endState_0)));
          var matchState = new BasicState();
          atn.g2m(matchState);
          matchState.j2r(new AtomTransition(bypassStop, ensureNotNull(atn.j2c_1)[i_9]));
          bypassStart.j2r(new EpsilonTransition(matchState));
        }
         while (inductionVariable_9 <= last_3);
      if (this.a2q_1.w2p()) {
        this.u2s(atn);
      }
    }
    return atn;
  }
  t2s(atn) {
    var _iterator__ex2g4s = atn.e2c_1.w();
    $l$loop: while (_iterator__ex2g4s.x()) {
      var state = _iterator__ex2g4s.y();
      if (!(state instanceof StarLoopEntryState)) {
        continue $l$loop;
      }
      if (ensureNotNull(atn.g2c_1)[state.t2c_1].g2r_1) {
        var maybeLoopEndState = state.r2e(state.k2r() - 1 | 0).p2e_1;
        if (maybeLoopEndState instanceof LoopEndState) {
          var tmp;
          if (maybeLoopEndState.u2c_1) {
            var tmp_0 = maybeLoopEndState.r2e(0).p2e_1;
            tmp = tmp_0 instanceof RuleStopState;
          } else {
            tmp = false;
          }
          if (tmp) {
            state.e2s_1 = true;
          }
        }
      }
    }
  }
  u2s(atn) {
    var _iterator__ex2g4s = atn.e2c_1.w();
    $l$loop: while (_iterator__ex2g4s.x()) {
      var state = _iterator__ex2g4s.y();
      if (state == null) {
        continue $l$loop;
      }
      this.x2s(state.w2s() || state.k2r() <= 1);
      if (state instanceof PlusBlockStartState) {
        this.x2s(!(state.q2s_1 == null));
      }
      if (state instanceof StarLoopEntryState) {
        this.x2s(!(state.d2s_1 == null));
        this.x2s(state.k2r() === 2);
        var tmp0_subject = state.r2e(0).p2e_1;
        if (tmp0_subject instanceof StarBlockStartState) {
          var tmp = state.r2e(1).p2e_1;
          this.x2s(tmp instanceof LoopEndState);
          this.x2s(!state.q2m_1);
        } else {
          if (tmp0_subject instanceof LoopEndState) {
            var tmp_0 = state.r2e(1).p2e_1;
            this.x2s(tmp_0 instanceof StarBlockStartState);
            this.x2s(state.q2m_1);
          } else {
            throw IllegalStateException.ac();
          }
        }
      }
      if (state instanceof StarLoopbackState) {
        this.x2s(state.k2r() === 1);
        var tmp_1 = state.r2e(0).p2e_1;
        this.x2s(tmp_1 instanceof StarLoopEntryState);
      }
      if (state instanceof LoopEndState) {
        this.x2s(!(state.m2q_1 == null));
      }
      if (state instanceof RuleStartState) {
        this.x2s(!(state.f2r_1 == null));
      }
      if (state instanceof BlockStartState) {
        this.x2s(!(state.x2q_1 == null));
      }
      if (state instanceof BlockEndState) {
        this.x2s(!(state.s2r_1 == null));
      }
      if (state instanceof DecisionState) {
        this.x2s(state.k2r() <= 1 || state.p2m_1 >= 0);
      } else {
        var tmp_2;
        if (state.k2r() <= 1) {
          tmp_2 = true;
        } else {
          tmp_2 = state instanceof RuleStopState;
        }
        this.x2s(tmp_2);
      }
    }
  }
  y2s(condition, message) {
    if (!condition) {
      throw IllegalStateException.l4(message);
    }
  }
  x2s(condition, message, $super) {
    message = message === VOID ? null : message;
    var tmp;
    if ($super === VOID) {
      this.y2s(condition, message);
      tmp = Unit_instance;
    } else {
      tmp = $super.y2s.call(this, condition, message);
    }
    return tmp;
  }
  i2r(atn, type, src, trg, arg1, arg2, arg3, sets) {
    var target = ensureNotNull(atn.e2c_1.d2(trg));
    var tmp;
    switch (type) {
      case 1:
        tmp = new EpsilonTransition(target);
        break;
      case 2:
        var tmp_0;
        if (!(arg3 === 0)) {
          tmp_0 = new RangeTransition(target, -1, arg2);
        } else {
          tmp_0 = new RangeTransition(target, arg1, arg2);
        }

        tmp = tmp_0;
        break;
      case 3:
        var tmp_1 = atn.e2c_1.d2(arg1);
        tmp = new RuleTransition(tmp_1 instanceof RuleStartState ? tmp_1 : THROW_CCE(), arg2, arg3, target);
        break;
      case 4:
        tmp = new PredicateTransition(target, arg1, arg2, !(arg3 === 0));
        break;
      case 10:
        tmp = new PrecedencePredicateTransition(target, arg1);
        break;
      case 5:
        var tmp_2;
        if (!(arg3 === 0)) {
          tmp_2 = new AtomTransition(target, -1);
        } else {
          tmp_2 = new AtomTransition(target, arg1);
        }

        tmp = tmp_2;
        break;
      case 6:
        tmp = new ActionTransition(target, arg1, arg2, !(arg3 === 0));
        break;
      case 7:
        tmp = new SetTransition(target, sets.d2(arg1));
        break;
      case 8:
        tmp = new NotSetTransition(target, sets.d2(arg1));
        break;
      case 9:
        tmp = new WildcardTransition(target);
        break;
      default:
        throw IllegalArgumentException.m1('The specified transition type is not valid.');
    }
    return tmp;
  }
  e2q(type, ruleIndex) {
    var tmp;
    switch (type) {
      case 0:
        return null;
      case 1:
        tmp = new BasicState();
        break;
      case 2:
        tmp = new RuleStartState();
        break;
      case 3:
        tmp = new BasicBlockStartState();
        break;
      case 4:
        tmp = new PlusBlockStartState();
        break;
      case 5:
        tmp = new StarBlockStartState();
        break;
      case 6:
        tmp = new TokensStartState();
        break;
      case 7:
        tmp = new RuleStopState();
        break;
      case 8:
        tmp = new BlockEndState();
        break;
      case 9:
        tmp = new StarLoopbackState();
        break;
      case 10:
        tmp = new StarLoopEntryState();
        break;
      case 11:
        tmp = new PlusLoopbackState();
        break;
      case 12:
        tmp = new LoopEndState();
        break;
      default:
        throw IllegalArgumentException.m1('The specified state type ' + type + ' is not valid.');
    }
    var s = tmp;
    s.t2c_1 = ruleIndex;
    return s;
  }
  s2s(type, data1, data2) {
    var tmp;
    switch (type.d1_1) {
      case 0:
        tmp = new LexerChannelAction(data1);
        break;
      case 1:
        tmp = new LexerCustomAction(data1, data2);
        break;
      case 2:
        tmp = new LexerModeAction(data1);
        break;
      case 3:
        tmp = LexerMoreAction_getInstance();
        break;
      case 4:
        tmp = LexerPopModeAction_getInstance();
        break;
      case 5:
        tmp = new LexerPushModeAction(data1);
        break;
      case 6:
        tmp = LexerSkipAction_getInstance();
        break;
      case 7:
        tmp = new LexerTypeAction(data1);
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  }
  z2s(data16, trimToSize) {
    var data = new Int32Array(data16.length);
    var i = 0;
    var i2 = 0;
    while (i < data16.length) {
      var _unary__edvuaz = i;
      i = _unary__edvuaz + 1 | 0;
      var v = data16[_unary__edvuaz];
      // Inline function 'kotlin.code' call
      if ((Char__toInt_impl_vasixd(v) & 32768) === 0) {
        var _unary__edvuaz_0 = i2;
        i2 = _unary__edvuaz_0 + 1 | 0;
        // Inline function 'kotlin.code' call
        data[_unary__edvuaz_0] = Char__toInt_impl_vasixd(v);
      } else {
        var _unary__edvuaz_1 = i;
        i = _unary__edvuaz_1 + 1 | 0;
        var vnext = data16[_unary__edvuaz_1];
        var tmp;
        // Inline function 'kotlin.code' call
        if (Char__toInt_impl_vasixd(v) === 65535) {
          // Inline function 'kotlin.code' call
          tmp = Char__toInt_impl_vasixd(vnext) === 65535;
        } else {
          tmp = false;
        }
        if (tmp) {
          var _unary__edvuaz_2 = i2;
          i2 = _unary__edvuaz_2 + 1 | 0;
          data[_unary__edvuaz_2] = -1;
        } else {
          var _unary__edvuaz_3 = i2;
          i2 = _unary__edvuaz_3 + 1 | 0;
          // Inline function 'kotlin.code' call
          var tmp_0 = (Char__toInt_impl_vasixd(v) & 32767) << 16;
          // Inline function 'kotlin.code' call
          data[_unary__edvuaz_3] = tmp_0 | Char__toInt_impl_vasixd(vnext) & 65535;
        }
      }
    }
    if (trimToSize) {
      return copyOfRange(data, 0, i2);
    }
    return data;
  }
  c2q(data16, trimToSize, $super) {
    trimToSize = trimToSize === VOID ? false : trimToSize;
    return $super === VOID ? this.z2s(data16, trimToSize) : $super.z2s.call(this, data16, trimToSize);
  }
}
class Companion_11 {
  constructor() {
    Companion_instance_11 = this;
    var tmp = this;
    // Inline function 'kotlin.also' call
    var this_0 = DFAState.i2t(new ATNConfigSet());
    this_0.a2t_1 = 2147483647;
    tmp.j2t_1 = this_0;
  }
}
class ATNSimulator {
  constructor(atn, sharedContextCache) {
    Companion_getInstance_11();
    this.m2c_1 = atn;
    this.n2c_1 = sharedContextCache;
  }
  m2p(context) {
    if (this.n2c_1 == null) {
      return context;
    }
    // Inline function 'com.strumenta.antlrkotlin.runtime.synchronized' call
    this.n2c_1;
    var visited = new IdentityHashMap();
    return Companion_instance_17.k2t(context, this.n2c_1, visited);
  }
}
class Companion_12 {
  constructor() {
    Companion_instance_12 = this;
    this.l2t_1 = 4;
    this.m2t_1 = 0;
    this.n2t_1 = 1;
    this.o2t_1 = 2;
    this.p2t_1 = 3;
    this.q2t_1 = 4;
    this.r2t_1 = 5;
    this.s2t_1 = 6;
    this.t2t_1 = 7;
    this.u2t_1 = 8;
    this.v2t_1 = 9;
    this.w2t_1 = 10;
    this.x2t_1 = 11;
    this.y2t_1 = 12;
    var tmp = this;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.z2t_1 = ['INVALID', 'BASIC', 'RULE_START', 'BLOCK_START', 'PLUS_BLOCK_START', 'STAR_BLOCK_START', 'TOKEN_START', 'RULE_STOP', 'BLOCK_END', 'STAR_LOOP_BACK', 'STAR_LOOP_ENTRY', 'PLUS_LOOP_BACK', 'LOOP_END'];
    this.a2u_1 = -1;
  }
}
class ATNState {
  constructor() {
    Companion_getInstance_12();
    this.r2c_1 = null;
    this.s2c_1 = -1;
    this.t2c_1 = 0;
    this.u2c_1 = false;
    this.v2c_1 = ArrayList.y1(4);
    this.w2c_1 = null;
    this.x2c_1 = false;
  }
  k2r() {
    return this.v2c_1.b2();
  }
  hashCode() {
    return this.s2c_1;
  }
  equals(other) {
    var tmp;
    if (other instanceof ATNState) {
      tmp = this.s2c_1 === other.s2c_1;
    } else {
      tmp = false;
    }
    return tmp;
  }
  toString() {
    return this.s2c_1.toString();
  }
  j2r(e) {
    return this.b2u(this.v2c_1.b2(), e);
  }
  b2u(index, e) {
    if (this.v2c_1.u()) {
      this.u2c_1 = e.c2u();
    } else if (!(this.u2c_1 === e.c2u())) {
      System_getInstance().h27_1.f27('ATN state ' + this.s2c_1 + ' has both epsilon and non-epsilon transitions.');
      this.u2c_1 = false;
    }
    var alreadyPresent = false;
    var _iterator__ex2g4s = this.v2c_1.w();
    $l$loop_0: while (_iterator__ex2g4s.x()) {
      var t = _iterator__ex2g4s.y();
      if (t.p2e_1.s2c_1 === e.p2e_1.s2c_1) {
        if (!(t.getLabel() == null) && !(e.getLabel() == null) && ensureNotNull(t.getLabel()).equals(e.getLabel())) {
          alreadyPresent = true;
          break $l$loop_0;
        } else if (t.c2u() && e.c2u()) {
          alreadyPresent = true;
          break $l$loop_0;
        }
      }
    }
    if (!alreadyPresent) {
      this.v2c_1.w3(index, e);
    }
  }
  r2e(i) {
    return this.v2c_1.d2(i);
  }
  v2s(index) {
    return this.v2c_1.x3(index);
  }
  w2s() {
    return this.u2c_1;
  }
}
class ATNType extends Enum {}
class Transition {
  constructor(target) {
    Companion_getInstance_21();
    this.p2e_1 = target;
    this.q2e_1 = false;
  }
  c2u() {
    return this.q2e_1;
  }
  getLabel() {
    return null;
  }
}
class AbstractPredicateTransition extends Transition {}
class ActionTransition extends Transition {
  constructor(target, ruleIndex, actionIndex, isCtxDependent) {
    actionIndex = actionIndex === VOID ? -1 : actionIndex;
    isCtxDependent = isCtxDependent === VOID ? false : isCtxDependent;
    super(target);
    this.h2u_1 = ruleIndex;
    this.i2u_1 = actionIndex;
    this.j2u_1 = isCtxDependent;
    this.k2u_1 = 6;
    this.l2u_1 = true;
  }
  d2u() {
    return this.k2u_1;
  }
  c2u() {
    return this.l2u_1;
  }
  e2u(symbol, minVocabSymbol, maxVocabSymbol) {
    return false;
  }
  toString() {
    return 'action_' + this.h2u_1 + ':' + this.i2u_1;
  }
}
class PredictionContext {
  static u2u(cachedHashCode) {
    var $this = createThis(this);
    $this.s2u_1 = cachedHashCode;
    var tmp = $this;
    var _unary__edvuaz = Companion_instance_17.i2p_1;
    Companion_instance_17.i2p_1 = _unary__edvuaz + 1 | 0;
    tmp.t2u_1 = _unary__edvuaz;
    return $this;
  }
  q2h() {
    return this === EmptyPredictionContext_getInstance();
  }
  c2v() {
    return this.b2v(this.a28() - 1 | 0) === 2147483647;
  }
  d2v(recog) {
    return toString_0(this);
  }
  hashCode() {
    return this.s2u_1;
  }
}
class ArrayPredictionContext extends PredictionContext {
  static q2u(parents, returnStates) {
    var $this = this.u2u(Companion_instance_17.r2u(parents, returnStates));
    $this.o2u_1 = parents;
    $this.p2u_1 = returnStates;
    // Inline function 'kotlin.collections.isNotEmpty' call
    // Inline function 'kotlin.collections.isEmpty' call
    // Inline function 'com.strumenta.antlrkotlin.runtime.assert' call
    if (!!($this.o2u_1.length === 0)) {
      throw AssertionError.vc(null);
    }
    // Inline function 'kotlin.collections.isNotEmpty' call
    // Inline function 'kotlin.collections.isEmpty' call
    // Inline function 'com.strumenta.antlrkotlin.runtime.assert' call
    if (!!($this.p2u_1.length === 0)) {
      throw AssertionError.vc(null);
    }
    return $this;
  }
  q2h() {
    return this.p2u_1[0] === 2147483647;
  }
  static v2u(a) {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp = [a.y2u_1];
    // Inline function 'kotlin.intArrayOf' call
    var tmp$ret$3 = new Int32Array([a.z2u_1]);
    return this.q2u(tmp, tmp$ret$3);
  }
  a28() {
    return this.p2u_1.length;
  }
  a2v(index) {
    return this.o2u_1[index];
  }
  b2v(index) {
    return this.p2u_1[index];
  }
  equals(other) {
    if (this === other) {
      return true;
    }
    if (!(other instanceof ArrayPredictionContext)) {
      return false;
    }
    if (!(this.hashCode() === other.hashCode())) {
      return false;
    }
    return contentEquals(this.p2u_1, other.p2u_1) && contentEquals_0(this.o2u_1, other.o2u_1);
  }
  toString() {
    if (this.q2h()) {
      return '[]';
    }
    var buf = StringBuilder.s();
    buf.t('[');
    var inductionVariable = 0;
    var last = this.p2u_1.length - 1 | 0;
    if (inductionVariable <= last)
      $l$loop: do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (i > 0) {
          buf.t(', ');
        }
        if (this.p2u_1[i] === 2147483647) {
          buf.t('$');
          continue $l$loop;
        }
        buf.af(this.p2u_1[i]);
        if (!(this.o2u_1[i] == null)) {
          buf.t(' ');
          buf.t(toString_1(this.o2u_1[i]));
        } else {
          buf.t('null');
        }
      }
       while (inductionVariable <= last);
    buf.t(']');
    return buf.toString();
  }
}
class AtomTransition extends Transition {
  constructor(target, label) {
    super(target);
    this.g2v_1 = label;
    this.h2v_1 = 5;
  }
  d2u() {
    return this.h2v_1;
  }
  i2v() {
    return Companion_getInstance_26().l2v(this.g2v_1);
  }
  getLabel() {
    return this.i2v();
  }
  e2u(symbol, minVocabSymbol, maxVocabSymbol) {
    return this.g2v_1 === symbol;
  }
  toString() {
    return this.g2v_1.toString();
  }
}
class DecisionState extends ATNState {
  constructor() {
    super();
    this.p2m_1 = -1;
    this.q2m_1 = false;
  }
}
class BlockStartState extends DecisionState {
  constructor() {
    super();
    this.x2q_1 = null;
  }
}
class BasicBlockStartState extends BlockStartState {
  constructor() {
    super();
    this.w2v_1 = 3;
  }
  y2c() {
    return this.w2v_1;
  }
}
class BasicState extends ATNState {
  constructor() {
    super();
    this.e2w_1 = 1;
  }
  y2c() {
    return this.e2w_1;
  }
}
class BlockEndState extends ATNState {
  constructor() {
    super();
    this.s2r_1 = null;
    this.t2r_1 = 8;
  }
  y2c() {
    return this.t2r_1;
  }
}
class SingletonPredictionContext extends PredictionContext {
  static l2w(parent, returnState) {
    var $this = this.u2u(!(parent == null) ? Companion_instance_17.u33(parent, returnState) : Companion_instance_17.t33());
    $this.y2u_1 = parent;
    $this.z2u_1 = returnState;
    // Inline function 'com.strumenta.antlrkotlin.runtime.assert' call
    if (!!($this.z2u_1 === -1)) {
      throw AssertionError.vc(null);
    }
    return $this;
  }
  a28() {
    return 1;
  }
  a2v(index) {
    // Inline function 'com.strumenta.antlrkotlin.runtime.assert' call
    if (!(index === 0)) {
      throw AssertionError.vc(null);
    }
    return this.y2u_1;
  }
  b2v(index) {
    // Inline function 'com.strumenta.antlrkotlin.runtime.assert' call
    if (!(index === 0)) {
      throw AssertionError.vc(null);
    }
    return this.z2u_1;
  }
  equals(other) {
    if (this === other) {
      return true;
    }
    if (!(other instanceof SingletonPredictionContext)) {
      return false;
    }
    if (!(this.hashCode() === other.hashCode())) {
      return false;
    }
    return this.z2u_1 === other.z2u_1 && (!(this.y2u_1 == null) && equals(this.y2u_1, other.y2u_1));
  }
  toString() {
    var tmp0_safe_receiver = this.y2u_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : toString_0(tmp0_safe_receiver);
    var up = tmp1_elvis_lhs == null ? '' : tmp1_elvis_lhs;
    var tmp;
    // Inline function 'kotlin.text.isEmpty' call
    if (charSequenceLength(up) === 0) {
      var tmp_0;
      if (this.z2u_1 === 2147483647) {
        tmp_0 = '$';
      } else {
        tmp_0 = this.z2u_1.toString();
      }
      tmp = tmp_0;
    } else {
      tmp = '' + this.z2u_1 + ' ' + up;
    }
    return tmp;
  }
}
class EmptyPredictionContext extends SingletonPredictionContext {
  static k2w() {
    EmptyPredictionContext_instance = null;
    var $this = this.l2w(null, 2147483647);
    EmptyPredictionContext_instance = $this;
    $this.j2w_1 = true;
    return $this;
  }
  q2h() {
    return this.j2w_1;
  }
  a28() {
    return 1;
  }
  a2v(index) {
    return null;
  }
  b2v(index) {
    return 2147483647;
  }
  equals(other) {
    return this === other;
  }
  toString() {
    return '$';
  }
}
class EpsilonTransition extends Transition {
  constructor(target, outermostPrecedenceReturn) {
    outermostPrecedenceReturn = outermostPrecedenceReturn === VOID ? -1 : outermostPrecedenceReturn;
    super(target);
    this.o2w_1 = 1;
    this.p2w_1 = true;
    this.q2w_1 = outermostPrecedenceReturn;
  }
  d2u() {
    return this.o2w_1;
  }
  c2u() {
    return this.p2w_1;
  }
  e2u(symbol, minVocabSymbol, maxVocabSymbol) {
    return false;
  }
  toString() {
    return 'epsilon';
  }
}
class Companion_13 {
  constructor() {
    this.r2w_1 = 0;
  }
}
class LL1Analyzer {
  constructor(atn) {
    this.d2m_1 = atn;
  }
  e2m(s, ctx) {
    return this.s2w(s, null, ctx);
  }
  s2w(s, stopState, ctx) {
    var r = IntervalSet.x2b();
    var seeThruPreds = true;
    var tmp;
    if (!(ctx == null)) {
      tmp = Companion_instance_17.t2w(ensureNotNull(s.r2c_1), ctx);
    } else {
      tmp = null;
    }
    var lookContext = tmp;
    this.u2w(s, stopState, lookContext, r, HashSet.o9(), BitSet.c2p(), seeThruPreds, true);
    return r;
  }
  u2w(s, stopState, ctx, look, lookBusy, calledRuleStack, seeThruPreds, addEOF) {
    var c = ATNConfig.b2n(s, 0, ctx);
    if (!lookBusy.z1(c)) {
      return Unit_instance;
    }
    if (s === stopState) {
      if (ctx == null) {
        look.y2b(-2);
        return Unit_instance;
      } else if (ctx.q2h() && addEOF) {
        look.y2b(-1);
        return Unit_instance;
      }
    }
    if (s instanceof RuleStopState) {
      if (ctx == null) {
        look.y2b(-2);
        return Unit_instance;
      } else if (ctx.q2h() && addEOF) {
        look.y2b(-1);
        return Unit_instance;
      }
      if (!(ctx === EmptyPredictionContext_getInstance())) {
        var removed = calledRuleStack.d2(s.t2c_1);
        try {
          calledRuleStack.v2w(s.t2c_1);
          var inductionVariable = 0;
          var last = ctx.a28();
          if (inductionVariable < last)
            do {
              var i = inductionVariable;
              inductionVariable = inductionVariable + 1 | 0;
              var returnState = this.d2m_1.e2c_1.d2(ctx.b2v(i));
              this.u2w(ensureNotNull(returnState), stopState, ctx.a2v(i), look, lookBusy, calledRuleStack, seeThruPreds, addEOF);
            }
             while (inductionVariable < last);
        }finally {
          if (removed) {
            calledRuleStack.d2p(s.t2c_1);
          }
        }
        return Unit_instance;
      }
    }
    var n = s.k2r();
    var inductionVariable_0 = 0;
    if (inductionVariable_0 < n)
      $l$loop: do {
        var i_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        var t = s.r2e(i_0);
        if (t instanceof RuleTransition) {
          if (calledRuleStack.d2(t.p2e_1.t2c_1)) {
            continue $l$loop;
          }
          var newContext = Companion_instance_20.x2w(ctx, t.c2f_1.s2c_1);
          try {
            calledRuleStack.d2p(t.p2e_1.t2c_1);
            this.u2w(t.p2e_1, stopState, newContext, look, lookBusy, calledRuleStack, seeThruPreds, addEOF);
          }finally {
            calledRuleStack.v2w(t.p2e_1.t2c_1);
          }
        } else {
          if (t instanceof AbstractPredicateTransition) {
            if (seeThruPreds) {
              this.u2w(t.p2e_1, stopState, ctx, look, lookBusy, calledRuleStack, seeThruPreds, addEOF);
            } else {
              look.y2b(0);
            }
          } else {
            if (t.c2u()) {
              this.u2w(t.p2e_1, stopState, ctx, look, lookBusy, calledRuleStack, seeThruPreds, addEOF);
            } else {
              if (t instanceof WildcardTransition) {
                look.f2f(Companion_getInstance_26().x28(1, this.d2m_1.d2c_1));
              } else {
                var set = t.getLabel();
                if (!(set == null)) {
                  if (t instanceof NotSetTransition) {
                    set = set.w2w(Companion_getInstance_26().x28(1, this.d2m_1.d2c_1));
                  }
                  look.f2f(set);
                }
              }
            }
          }
        }
      }
       while (inductionVariable_0 < n);
  }
}
class LexerATNConfig extends ATNConfig {
  static f2x(state, alt, context) {
    var $this = this.b2n(state, alt, context, Empty_getInstance());
    init_org_antlr_v4_kotlinruntime_atn_LexerATNConfig($this);
    $this.d2x_1 = false;
    $this.e2x_1 = null;
    return $this;
  }
  static g2x(c, state) {
    var $this = this.d2n(c, state, c.v2m_1, c.x2m_1);
    init_org_antlr_v4_kotlinruntime_atn_LexerATNConfig($this);
    $this.e2x_1 = c.e2x_1;
    $this.d2x_1 = checkNonGreedyDecision($this, c, state);
    return $this;
  }
  static h2x(c, state, lexerActionExecutor) {
    var $this = this.d2n(c, state, c.v2m_1, c.x2m_1);
    init_org_antlr_v4_kotlinruntime_atn_LexerATNConfig($this);
    $this.e2x_1 = lexerActionExecutor;
    $this.d2x_1 = checkNonGreedyDecision($this, c, state);
    return $this;
  }
  static i2x(c, state, context) {
    var $this = this.d2n(c, state, context, c.x2m_1);
    init_org_antlr_v4_kotlinruntime_atn_LexerATNConfig($this);
    $this.e2x_1 = c.e2x_1;
    $this.d2x_1 = checkNonGreedyDecision($this, c, state);
    return $this;
  }
  j2x() {
    return this.d2x_1;
  }
  hashCode() {
    var hashCode = MurmurHash_instance.h2n(7);
    hashCode = MurmurHash_instance.i2n(hashCode, this.t2m_1.s2c_1);
    hashCode = MurmurHash_instance.i2n(hashCode, this.u2m_1);
    hashCode = MurmurHash_instance.j2n(hashCode, this.v2m_1);
    hashCode = MurmurHash_instance.j2n(hashCode, this.x2m_1);
    hashCode = MurmurHash_instance.i2n(hashCode, this.d2x_1 ? 1 : 0);
    hashCode = MurmurHash_instance.j2n(hashCode, this.e2x_1);
    hashCode = MurmurHash_instance.k2n(hashCode, 6);
    return hashCode;
  }
  f2n(other) {
    if (this === other) {
      return true;
    }
    if (!(other instanceof LexerATNConfig)) {
      return false;
    }
    if (!(this.d2x_1 === other.d2x_1)) {
      return false;
    }
    if (!Companion_getInstance_27().k2x_1.q2o(this.e2x_1, other.e2x_1)) {
      return false;
    }
    return super.f2n(other);
  }
}
class Companion_14 {
  constructor() {
    this.l2x_1 = false;
    this.m2x_1 = false;
    this.n2x_1 = 0;
    this.o2x_1 = 127;
  }
}
class SimState {
  constructor() {
    this.p2x_1 = -1;
    this.q2x_1 = 0;
    this.r2x_1 = -1;
    this.s2x_1 = null;
  }
  c2h() {
    this.p2x_1 = -1;
    this.q2x_1 = 0;
    this.r2x_1 = -1;
    this.s2x_1 = null;
  }
}
class LexerATNSimulator extends ATNSimulator {
  constructor(recog, atn, decisionToDFA, sharedContextCache) {
    super(atn, sharedContextCache);
    this.s2g_1 = recog;
    this.t2g_1 = decisionToDFA;
    this.u2g_1 = -1;
    this.v2g_1 = 1;
    this.w2g_1 = 0;
    this.x2g_1 = 0;
    this.y2g_1 = new SimState();
  }
  g2h(input, mode) {
    this.x2g_1 = mode;
    var mark = input.v27();
    try {
      this.u2g_1 = input.u27();
      this.y2g_1.c2h();
      var dfa = this.t2g_1[mode];
      var tmp;
      if (dfa.w2x_1 == null) {
        tmp = this.z2x(input);
      } else {
        var tmp_0 = dfa.w2x_1;
        tmp = this.y2x(input, tmp_0 instanceof DFAState ? tmp_0 : THROW_CCE());
      }
      return tmp;
    }finally {
      input.w27(mark);
    }
  }
  c2h() {
    this.y2g_1.c2h();
    this.u2g_1 = -1;
    this.v2g_1 = 1;
    this.w2g_1 = 0;
    this.x2g_1 = 0;
  }
  z2x(input) {
    var startState = this.m2c_1.l2c_1.d2(this.x2g_1);
    if (false) {
      System_getInstance().g27_1.f27('matchATN mode ' + this.x2g_1 + ' start: ' + startState.toString());
    }
    var oldMode = this.x2g_1;
    var s0Closure = this.a2y(input, startState);
    var suppressEdge = s0Closure.w2o_1;
    s0Closure.w2o_1 = false;
    var next = this.b2y(s0Closure);
    if (!suppressEdge) {
      this.t2g_1[this.x2g_1].w2x_1 = next;
    }
    var predict = this.y2x(input, next);
    if (false) {
      System_getInstance().g27_1.f27('DFA after matchATN: ' + this.t2g_1[oldMode].c2y());
    }
    return predict;
  }
  y2x(input, ds0) {
    if (false) {
      System_getInstance().g27_1.f27('start state closure=' + ds0.b2t_1.toString());
    }
    if (ds0.d2t_1) {
      this.d2y(this.y2g_1, input, ds0);
    }
    var t = input.c28(1);
    var s = ds0;
    $l$loop_0: while (true) {
      if (false) {
        System_getInstance().g27_1.f27('execATN loop starting closure: ' + s.b2t_1.toString());
      }
      var tmp0_elvis_lhs = this.e2y(s, t);
      var target = tmp0_elvis_lhs == null ? this.f2y(input, s, t) : tmp0_elvis_lhs;
      if (target === Companion_getInstance_11().j2t_1) {
        break $l$loop_0;
      }
      if (!(t === -1)) {
        this.u2h(input);
      }
      if (target.d2t_1) {
        this.d2y(this.y2g_1, input, target);
        if (t === -1) {
          break $l$loop_0;
        }
      }
      t = input.c28(1);
      s = target;
    }
    return this.g2y(this.y2g_1, input, s.b2t_1, t);
  }
  e2y(s, t) {
    if (s.c2t_1 == null || t < 0 || t > 127) {
      return null;
    }
    var target = ensureNotNull(s.c2t_1)[t - 0 | 0];
    if (false && !(target == null)) {
      System_getInstance().g27_1.f27('reuse state ' + s.a2t_1 + ' edge to ' + target.a2t_1);
    }
    return target;
  }
  f2y(input, s, t) {
    var reach = new OrderedATNConfigSet();
    this.h2y(input, s.b2t_1, reach, t);
    if (reach.u()) {
      if (!reach.w2o_1) {
        this.i2y(s, t, Companion_getInstance_11().j2t_1);
      }
      return Companion_getInstance_11().j2t_1;
    }
    return this.j2y(s, t, reach);
  }
  g2y(prevAccept, input, reach, t) {
    if (!(prevAccept.s2x_1 == null)) {
      var lexerActionExecutor = ensureNotNull(prevAccept.s2x_1).f2t_1;
      this.k2y(input, lexerActionExecutor, this.u2g_1, prevAccept.p2x_1, prevAccept.q2x_1, prevAccept.r2x_1);
      return ensureNotNull(prevAccept.s2x_1).e2t_1;
    }
    if (t === -1 && input.u27() === this.u2g_1) {
      return -1;
    }
    throw LexerNoViableAltException.o2i(ensureNotNull(this.s2g_1), input, this.u2g_1, reach);
  }
  h2y(input, closure, reach, t) {
    var skipAlt = 0;
    var _iterator__ex2g4s = closure.w();
    $l$loop: while (_iterator__ex2g4s.x()) {
      var c = _iterator__ex2g4s.y();
      var currentAltReachedAcceptState = c.u2m_1 === skipAlt;
      var tmp;
      if (currentAltReachedAcceptState) {
        tmp = (c instanceof LexerATNConfig ? c : THROW_CCE()).j2x();
      } else {
        tmp = false;
      }
      if (tmp) {
        continue $l$loop;
      }
      if (false) {
        System_getInstance().g27_1.f27('testing ' + this.l2y(t) + ' at ' + c.l2n(this.s2g_1, true));
      }
      var n = c.t2m_1.k2r();
      var inductionVariable = 0;
      if (inductionVariable < n)
        $l$loop_0: do {
          var ti = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var trans = c.t2m_1.r2e(ti);
          var target = this.m2y(trans, t);
          if (!(target == null)) {
            var lexerActionExecutor = (c instanceof LexerATNConfig ? c : THROW_CCE()).e2x_1;
            if (!(lexerActionExecutor == null)) {
              lexerActionExecutor = lexerActionExecutor.p2y(input.u27() - this.u2g_1 | 0);
            }
            var treatEofAsEpsilon = t === -1;
            if (this.q2y(input, LexerATNConfig.h2x(c, target, lexerActionExecutor), reach, currentAltReachedAcceptState, true, treatEofAsEpsilon)) {
              skipAlt = c.u2m_1;
              break $l$loop_0;
            }
          }
        }
         while (inductionVariable < n);
    }
  }
  k2y(input, lexerActionExecutor, startIndex, index, line, charPos) {
    if (false) {
      System_getInstance().g27_1.f27('ACTION ' + toString_1(lexerActionExecutor));
    }
    input.x27(index);
    this.v2g_1 = line;
    this.w2g_1 = charPos;
    if (!(lexerActionExecutor == null) && !(this.s2g_1 == null)) {
      lexerActionExecutor.r2y(this.s2g_1, input, startIndex);
    }
  }
  m2y(trans, t) {
    var tmp;
    if (trans.e2u(t, 0, 1114111)) {
      tmp = trans.p2e_1;
    } else {
      tmp = null;
    }
    return tmp;
  }
  a2y(input, p) {
    var initialContext = EmptyPredictionContext_getInstance();
    var configs = new OrderedATNConfigSet();
    var inductionVariable = 0;
    var last = p.k2r();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var target = p.r2e(i).p2e_1;
        var c = LexerATNConfig.f2x(target, i + 1 | 0, initialContext);
        this.q2y(input, c, configs, false, false, false);
      }
       while (inductionVariable < last);
    return configs;
  }
  q2y(input, config, configs, currentAltReachedAcceptState, speculative, treatEofAsEpsilon) {
    var tempCurrentAltReachedAcceptState = currentAltReachedAcceptState;
    if (false) {
      System_getInstance().g27_1.f27('closure(' + config.l2n(this.s2g_1, true) + ')');
    }
    var tmp = config.t2m_1;
    if (tmp instanceof RuleStopState) {
      if (false) {
        if (!(this.s2g_1 == null)) {
          System_getInstance().g27_1.f27('closure at ' + this.s2g_1.b2e()[config.t2m_1.t2c_1] + ' rule stop ' + config.toString());
        } else {
          System_getInstance().g27_1.f27('closure at rule stop ' + config.toString());
        }
      }
      if (config.v2m_1 == null || ensureNotNull(config.v2m_1).c2v()) {
        if (config.v2m_1 == null || ensureNotNull(config.v2m_1).q2h()) {
          configs.e2p(config);
          return true;
        }
        configs.e2p(LexerATNConfig.i2x(config, config.t2m_1, EmptyPredictionContext_getInstance()));
        tempCurrentAltReachedAcceptState = true;
      }
      if (!(config.v2m_1 == null) && !ensureNotNull(config.v2m_1).q2h()) {
        var inductionVariable = 0;
        var last = ensureNotNull(config.v2m_1).a28();
        if (inductionVariable < last)
          do {
            var i = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            if (!(ensureNotNull(config.v2m_1).b2v(i) === 2147483647)) {
              var newContext = ensureNotNull(config.v2m_1).a2v(i);
              var returnState = this.m2c_1.e2c_1.d2(ensureNotNull(config.v2m_1).b2v(i));
              var c = LexerATNConfig.i2x(config, ensureNotNull(returnState), ensureNotNull(newContext));
              tempCurrentAltReachedAcceptState = this.q2y(input, c, configs, tempCurrentAltReachedAcceptState, speculative, treatEofAsEpsilon);
            }
          }
           while (inductionVariable < last);
      }
      return tempCurrentAltReachedAcceptState;
    }
    if (!config.t2m_1.w2s()) {
      if (!tempCurrentAltReachedAcceptState || !config.j2x()) {
        configs.e2p(config);
      }
    }
    var p = config.t2m_1;
    var inductionVariable_0 = 0;
    var last_0 = p.k2r();
    if (inductionVariable_0 < last_0)
      do {
        var i_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        var t = p.r2e(i_0);
        var c_0 = this.s2y(input, config, t, configs, speculative, treatEofAsEpsilon);
        if (!(c_0 == null)) {
          tempCurrentAltReachedAcceptState = this.q2y(input, c_0, configs, tempCurrentAltReachedAcceptState, speculative, treatEofAsEpsilon);
        }
      }
       while (inductionVariable_0 < last_0);
    return tempCurrentAltReachedAcceptState;
  }
  s2y(input, config, t, configs, speculative, treatEofAsEpsilon) {
    var c = null;
    switch (t.d2u()) {
      case 3:
        var ruleTransition = t instanceof RuleTransition ? t : THROW_CCE();
        var newContext = Companion_instance_20.x2w(config.v2m_1, ruleTransition.c2f_1.s2c_1);
        c = LexerATNConfig.i2x(config, t.p2e_1, newContext);
        break;
      case 10:
        throw UnsupportedOperationException.l9('Precedence predicates are not supported in lexers.');
      case 4:
        var pt = t instanceof PredicateTransition ? t : THROW_CCE();
        if (false) {
          System_getInstance().g27_1.f27('EVAL rule ' + pt.v2y_1 + ':' + pt.w2y_1);
        }

        configs.w2o_1 = true;
        if (this.a2z(input, pt.v2y_1, pt.w2y_1, speculative)) {
          c = LexerATNConfig.g2x(config, t.p2e_1);
        }

        break;
      case 6:
        if (config.v2m_1 == null || ensureNotNull(config.v2m_1).c2v()) {
          var tmp = Companion_instance_15;
          var tmp_0 = ensureNotNull(this.m2c_1.k2c_1);
          var lexerActionExecutor = tmp.b2z(config.e2x_1, tmp_0[(t instanceof ActionTransition ? t : THROW_CCE()).i2u_1]);
          c = LexerATNConfig.h2x(config, t.p2e_1, lexerActionExecutor);
        } else {
          c = LexerATNConfig.g2x(config, t.p2e_1);
        }

        break;
      case 1:
        c = LexerATNConfig.g2x(config, t.p2e_1);
        break;
      case 5:
      case 2:
      case 7:
        if (treatEofAsEpsilon) {
          if (t.e2u(-1, 0, 1114111)) {
            c = LexerATNConfig.g2x(config, t.p2e_1);
          }
        }

        break;
    }
    return c;
  }
  a2z(input, ruleIndex, predIndex, speculative) {
    if (this.s2g_1 == null) {
      return true;
    }
    if (!speculative) {
      return this.s2g_1.a2i(null, ruleIndex, predIndex);
    }
    var savedCharPositionInLine = this.w2g_1;
    var savedLine = this.v2g_1;
    var index = input.u27();
    var marker = input.v27();
    try {
      this.u2h(input);
      return this.s2g_1.a2i(null, ruleIndex, predIndex);
    }finally {
      this.w2g_1 = savedCharPositionInLine;
      this.v2g_1 = savedLine;
      input.x27(index);
      input.w27(marker);
    }
  }
  d2y(settings, input, dfaState) {
    settings.p2x_1 = input.u27();
    settings.q2x_1 = this.v2g_1;
    settings.r2x_1 = this.w2g_1;
    settings.s2x_1 = dfaState;
  }
  j2y(from, t, q) {
    var suppressEdge = q.w2o_1;
    q.w2o_1 = false;
    var to = this.b2y(q);
    if (suppressEdge) {
      return to;
    }
    this.i2y(from, t, to);
    return to;
  }
  i2y(p, t, q) {
    if (t < 0 || t > 127) {
      return Unit_instance;
    }
    if (false) {
      System_getInstance().g27_1.f27('EDGE ' + p.toString() + ' -> ' + q.toString() + ' upon ' + toString(numberToChar(t)));
    }
    // Inline function 'com.strumenta.antlrkotlin.runtime.synchronized' call
    if (p.c2t_1 == null) {
      var tmp = p;
      // Inline function 'kotlin.arrayOfNulls' call
      tmp.c2t_1 = Array(128);
    }
    ensureNotNull(p.c2t_1)[t - 0 | 0] = q;
  }
  b2y(configs) {
    // Inline function 'com.strumenta.antlrkotlin.runtime.assert' call
    if (!!configs.w2o_1) {
      throw AssertionError.vc(null);
    }
    var proposed = DFAState.i2t(configs);
    var firstConfigWithRuleStopState = null;
    var _iterator__ex2g4s = configs.w();
    $l$loop: while (_iterator__ex2g4s.x()) {
      var c = _iterator__ex2g4s.y();
      var tmp = c.t2m_1;
      if (tmp instanceof RuleStopState) {
        firstConfigWithRuleStopState = c;
        break $l$loop;
      }
    }
    if (!(firstConfigWithRuleStopState == null)) {
      proposed.d2t_1 = true;
      var tmp_0 = proposed;
      tmp_0.f2t_1 = (firstConfigWithRuleStopState instanceof LexerATNConfig ? firstConfigWithRuleStopState : THROW_CCE()).e2x_1;
      proposed.e2t_1 = ensureNotNull(this.m2c_1.j2c_1)[firstConfigWithRuleStopState.t2m_1.t2c_1];
    }
    var dfa = this.t2g_1[this.x2g_1];
    // Inline function 'com.strumenta.antlrkotlin.runtime.synchronized' call
    dfa.v2x_1;
    var existing = dfa.v2x_1.r3(proposed);
    if (!(existing == null)) {
      return existing;
    }
    proposed.a2t_1 = dfa.v2x_1.b2();
    configs.f2m(true);
    proposed.b2t_1 = configs;
    // Inline function 'kotlin.collections.set' call
    dfa.v2x_1.l3(proposed, proposed);
    return proposed;
  }
  u2h(input) {
    var curChar = input.c28(1);
    if (numberToChar(curChar) === _Char___init__impl__6a9atx(10)) {
      this.v2g_1 = this.v2g_1 + 1 | 0;
      this.w2g_1 = 0;
    } else {
      this.w2g_1 = this.w2g_1 + 1 | 0;
    }
    input.b28();
  }
  l2y(t) {
    var tmp;
    if (t === -1) {
      tmp = 'EOF';
    } else {
      tmp = "'" + toString(numberToChar(t)) + "'";
    }
    return tmp;
  }
}
class Companion_15 {
  b2z(lexerActionExecutor, lexerAction) {
    if (lexerActionExecutor == null) {
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp$ret$0 = [lexerAction];
      return new LexerActionExecutor(tmp$ret$0);
    }
    var lexerActions = copyOf(lexerActionExecutor.n2y_1, lexerActionExecutor.n2y_1.length + 1 | 0);
    lexerActions[get_lastIndex(lexerActions)] = lexerAction;
    return new LexerActionExecutor(isArray(lexerActions) ? lexerActions : THROW_CCE());
  }
}
class LexerActionExecutor {
  constructor(lexerActions) {
    this.n2y_1 = lexerActions;
    var hash = MurmurHash_instance.c2z();
    var indexedObject = this.n2y_1;
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var lexerAction = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      hash = MurmurHash_instance.j2n(hash, lexerAction);
    }
    this.o2y_1 = MurmurHash_instance.k2n(hash, this.n2y_1.length);
  }
  p2y(offset) {
    var updatedLexerActions = null;
    var inductionVariable = 0;
    var last = this.n2y_1.length - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp;
        if (this.n2y_1[i].d2z()) {
          var tmp_0 = this.n2y_1[i];
          tmp = !(tmp_0 instanceof LexerIndexedCustomAction);
        } else {
          tmp = false;
        }
        if (tmp) {
          if (updatedLexerActions == null) {
            // Inline function 'kotlin.collections.copyOf' call
            // Inline function 'kotlin.js.asDynamic' call
            updatedLexerActions = this.n2y_1.slice();
          }
          updatedLexerActions[i] = new LexerIndexedCustomAction(offset, this.n2y_1[i]);
        }
      }
       while (inductionVariable <= last);
    var tmp_1;
    if (updatedLexerActions == null) {
      tmp_1 = this;
    } else {
      tmp_1 = new LexerActionExecutor(updatedLexerActions);
    }
    return tmp_1;
  }
  r2y(lexer, input, startIndex) {
    var requiresSeek = false;
    var stopIndex = input.u27();
    try {
      var indexedObject = this.n2y_1;
      var inductionVariable = 0;
      var last = indexedObject.length;
      while (inductionVariable < last) {
        var lexerAction = indexedObject[inductionVariable];
        inductionVariable = inductionVariable + 1 | 0;
        var mutableLexerAction = lexerAction;
        if (mutableLexerAction instanceof LexerIndexedCustomAction) {
          var offset = mutableLexerAction.e2z_1;
          input.x27(startIndex + offset | 0);
          mutableLexerAction = mutableLexerAction.f2z_1;
          requiresSeek = !((startIndex + offset | 0) === stopIndex);
        } else {
          if (mutableLexerAction.d2z()) {
            input.x27(stopIndex);
            requiresSeek = false;
          }
        }
        mutableLexerAction.h2z(lexer);
      }
    }finally {
      if (requiresSeek) {
        input.x27(stopIndex);
      }
    }
  }
  hashCode() {
    return this.o2y_1;
  }
  equals(other) {
    if (other === this) {
      return true;
    }
    if (!(other instanceof LexerActionExecutor)) {
      return false;
    }
    return this.o2y_1 === other.o2y_1 && contentEquals_0(this.n2y_1, other.n2y_1);
  }
}
class LexerActionType extends Enum {}
class LexerChannelAction {
  constructor(channel) {
    this.i2z_1 = channel;
    this.j2z_1 = LexerActionType_CHANNEL_getInstance();
    this.k2z_1 = false;
  }
  d2z() {
    return this.k2z_1;
  }
  h2z(lexer) {
    lexer.e2g_1 = this.i2z_1;
  }
  hashCode() {
    var hash = MurmurHash_instance.c2z();
    hash = MurmurHash_instance.i2n(hash, this.j2z_1.d1_1);
    hash = MurmurHash_instance.i2n(hash, this.i2z_1);
    return MurmurHash_instance.k2n(hash, 2);
  }
  equals(other) {
    if (other === this) {
      return true;
    }
    if (!(other instanceof LexerChannelAction)) {
      return false;
    }
    return this.i2z_1 === other.i2z_1;
  }
  toString() {
    return 'channel(' + this.i2z_1 + ')';
  }
}
class LexerCustomAction {
  constructor(ruleIndex, actionIndex) {
    this.l2z_1 = ruleIndex;
    this.m2z_1 = actionIndex;
    this.n2z_1 = LexerActionType_CUSTOM_getInstance();
    this.o2z_1 = true;
  }
  p2z() {
    return this.n2z_1;
  }
  d2z() {
    return this.o2z_1;
  }
  h2z(lexer) {
    return lexer.c2i(null, this.l2z_1, this.m2z_1);
  }
  hashCode() {
    var hash = MurmurHash_instance.c2z();
    hash = MurmurHash_instance.i2n(hash, this.p2z().d1_1);
    hash = MurmurHash_instance.i2n(hash, this.l2z_1);
    hash = MurmurHash_instance.i2n(hash, this.m2z_1);
    return MurmurHash_instance.k2n(hash, 3);
  }
  equals(other) {
    if (other === this) {
      return true;
    }
    if (!(other instanceof LexerCustomAction)) {
      return false;
    }
    return this.l2z_1 === other.l2z_1 && this.m2z_1 === other.m2z_1;
  }
}
class LexerIndexedCustomAction {
  constructor(offset, action) {
    this.e2z_1 = offset;
    this.f2z_1 = action;
    this.g2z_1 = true;
  }
  d2z() {
    return this.g2z_1;
  }
  h2z(lexer) {
    return this.f2z_1.h2z(lexer);
  }
  hashCode() {
    var hash = MurmurHash_instance.c2z();
    hash = MurmurHash_instance.i2n(hash, this.e2z_1);
    hash = MurmurHash_instance.j2n(hash, this.f2z_1);
    return MurmurHash_instance.k2n(hash, 2);
  }
  equals(other) {
    if (other === this) {
      return true;
    }
    if (!(other instanceof LexerIndexedCustomAction)) {
      return false;
    }
    return this.e2z_1 === other.e2z_1 && equals(this.f2z_1, other.f2z_1);
  }
}
class LexerModeAction {
  constructor(mode) {
    this.q2z_1 = mode;
    this.r2z_1 = LexerActionType_MODE_getInstance();
    this.s2z_1 = false;
  }
  d2z() {
    return this.s2z_1;
  }
  h2z(lexer) {
    return lexer.m2h(this.q2z_1);
  }
  hashCode() {
    var hash = MurmurHash_instance.c2z();
    hash = MurmurHash_instance.i2n(hash, this.r2z_1.d1_1);
    hash = MurmurHash_instance.i2n(hash, this.q2z_1);
    return MurmurHash_instance.k2n(hash, 2);
  }
  equals(other) {
    if (other === this) {
      return true;
    }
    if (!(other instanceof LexerModeAction)) {
      return false;
    }
    return this.q2z_1 === other.q2z_1;
  }
  toString() {
    return 'mode(' + this.q2z_1 + ')';
  }
}
class LexerMoreAction {
  constructor() {
    LexerMoreAction_instance = this;
    this.t2z_1 = LexerActionType_MORE_getInstance();
    this.u2z_1 = false;
  }
  d2z() {
    return this.u2z_1;
  }
  h2z(lexer) {
    return lexer.l2h();
  }
  hashCode() {
    var hash = MurmurHash_instance.c2z();
    hash = MurmurHash_instance.i2n(hash, this.t2z_1.d1_1);
    return MurmurHash_instance.k2n(hash, 1);
  }
  equals(other) {
    return other === this;
  }
  toString() {
    return 'more';
  }
}
class LexerPopModeAction {
  constructor() {
    LexerPopModeAction_instance = this;
    this.v2z_1 = LexerActionType_POP_MODE_getInstance();
    this.w2z_1 = false;
  }
  d2z() {
    return this.w2z_1;
  }
  h2z(lexer) {
    lexer.p2h();
  }
  hashCode() {
    var hash = MurmurHash_instance.c2z();
    hash = MurmurHash_instance.i2n(hash, this.v2z_1.d1_1);
    return MurmurHash_instance.k2n(hash, 1);
  }
  equals(other) {
    return other === this;
  }
  toString() {
    return 'popMode';
  }
}
class LexerPushModeAction {
  constructor(mode) {
    this.x2z_1 = mode;
    this.y2z_1 = LexerActionType_PUSH_MODE_getInstance();
    this.z2z_1 = false;
  }
  d2z() {
    return this.z2z_1;
  }
  h2z(lexer) {
    return lexer.n2h(this.x2z_1);
  }
  hashCode() {
    var hash = MurmurHash_instance.c2z();
    hash = MurmurHash_instance.i2n(hash, this.y2z_1.d1_1);
    hash = MurmurHash_instance.i2n(hash, this.x2z_1);
    return MurmurHash_instance.k2n(hash, 2);
  }
  equals(other) {
    if (other === this) {
      return true;
    }
    if (!(other instanceof LexerPushModeAction)) {
      return false;
    }
    return this.x2z_1 === other.x2z_1;
  }
  toString() {
    return 'pushMode(' + this.x2z_1 + ')';
  }
}
class LexerSkipAction {
  constructor() {
    LexerSkipAction_instance = this;
    this.a30_1 = LexerActionType_SKIP_getInstance();
    this.b30_1 = false;
  }
  d2z() {
    return this.b30_1;
  }
  h2z(lexer) {
    return lexer.k2h();
  }
  hashCode() {
    var hash = MurmurHash_instance.c2z();
    hash = MurmurHash_instance.i2n(hash, this.a30_1.d1_1);
    return MurmurHash_instance.k2n(hash, 1);
  }
  equals(other) {
    return other === this;
  }
  toString() {
    return 'skip';
  }
}
class LexerTypeAction {
  constructor(type) {
    this.c30_1 = type;
    this.d30_1 = LexerActionType_TYPE_getInstance();
    this.e30_1 = false;
  }
  d2z() {
    return this.e30_1;
  }
  h2z(lexer) {
    lexer.f2g_1 = this.c30_1;
  }
  hashCode() {
    var hash = MurmurHash_instance.c2z();
    hash = MurmurHash_instance.i2n(hash, this.d30_1.d1_1);
    hash = MurmurHash_instance.i2n(hash, this.c30_1);
    return MurmurHash_instance.k2n(hash, 2);
  }
  equals(other) {
    if (other === this) {
      return true;
    }
    if (!(other instanceof LexerTypeAction)) {
      return false;
    }
    return this.c30_1 === other.c30_1;
  }
  toString() {
    return 'type(' + this.c30_1 + ')';
  }
}
class LoopEndState extends ATNState {
  constructor() {
    super();
    this.m2q_1 = null;
    this.n2q_1 = 12;
  }
  y2c() {
    return this.n2q_1;
  }
}
class SetTransition extends Transition {
  constructor(target, set) {
    super(target);
    var tmp = this;
    tmp.m30_1 = set == null ? Companion_getInstance_26().l2v(0) : set;
    this.n30_1 = 7;
  }
  d2u() {
    return this.n30_1;
  }
  i2v() {
    return this.m30_1;
  }
  getLabel() {
    return this.i2v();
  }
  e2u(symbol, minVocabSymbol, maxVocabSymbol) {
    return this.m30_1.vk(symbol);
  }
  toString() {
    return this.m30_1.toString();
  }
}
class NotSetTransition extends SetTransition {
  constructor(target, set) {
    super(target, set);
    this.j30_1 = 8;
  }
  d2u() {
    return this.j30_1;
  }
  e2u(symbol, minVocabSymbol, maxVocabSymbol) {
    return (minVocabSymbol <= symbol ? symbol <= maxVocabSymbol : false) && !super.e2u(symbol, minVocabSymbol, maxVocabSymbol);
  }
  toString() {
    return '~' + super.toString();
  }
}
class LexerConfigHashSet extends AbstractConfigHashSet {
  constructor() {
    super(Companion_getInstance_27().k2x_1);
  }
}
class OrderedATNConfigSet extends ATNConfigSet {
  constructor() {
    super();
    this.s2o_1 = new LexerConfigHashSet();
  }
}
class Companion_16 {
  constructor() {
    Companion_instance_16 = this;
    this.o30_1 = false;
    this.p30_1 = false;
    this.q30_1 = false;
    this.r30_1 = false;
    this.s30_1 = toBoolean(getSafeEnv(this, 'TURN_OFF_LR_LOOP_ENTRY_BRANCH_OPT', 'false'));
  }
  t30(configs) {
    var alt = 0;
    var _iterator__ex2g4s = configs.w();
    while (_iterator__ex2g4s.x()) {
      var c = _iterator__ex2g4s.y();
      if (alt === 0) {
        alt = c.u2m_1;
      } else if (!(c.u2m_1 === alt)) {
        return 0;
      }
    }
    return alt;
  }
}
class ParserATNSimulator extends ATNSimulator {
  constructor(parser, atn, decisionToDFA, sharedContextCache) {
    Companion_getInstance_16();
    super(atn, sharedContextCache);
    this.w2i_1 = parser;
    this.x2i_1 = decisionToDFA;
    this.y2i_1 = PredictionMode_LL_getInstance();
    this.z2i_1 = null;
    this.a2j_1 = null;
    this.b2j_1 = 0;
    this.c2j_1 = null;
    this.d2j_1 = null;
  }
  c2h() {
  }
  u30(input, decision, outerContext) {
    var tempOuterContext = outerContext;
    if (Companion_getInstance_16().o30_1 || Companion_getInstance_16().p30_1) {
      System_getInstance().g27_1.f27('adaptivePredict decision ' + decision + (' exec LA(1)==' + this.v30(input)) + (' line ' + ensureNotNull(input.h28(1)).e1e() + ':' + ensureNotNull(input.h28(1)).l29()));
    }
    this.a2j_1 = input;
    this.b2j_1 = input.u27();
    this.c2j_1 = tempOuterContext;
    var dfa = this.x2i_1[decision];
    this.d2j_1 = dfa;
    var m = input.v27();
    var index = this.b2j_1;
    try {
      var tmp;
      if (dfa.x2x_1) {
        tmp = dfa.w30(this.w2i_1.s2i());
      } else {
        tmp = dfa.w2x_1;
      }
      var s0 = tmp;
      if (s0 == null) {
        if (tempOuterContext == null) {
          tempOuterContext = Companion_getInstance_3().j2k_1;
        }
        var fullCtx = false;
        var s0Closure = this.x30(dfa.t2x_1, Companion_getInstance_3().j2k_1, fullCtx);
        if (dfa.x2x_1) {
          ensureNotNull(dfa.w2x_1).b2t_1 = s0Closure;
          s0Closure = this.z30(s0Closure);
          s0 = this.y30(dfa, DFAState.i2t(s0Closure));
          dfa.a31(this.w2i_1.s2i(), s0);
        } else {
          s0 = this.y30(dfa, DFAState.i2t(s0Closure));
          dfa.w2x_1 = s0;
        }
      }
      var alt = this.b31(dfa, s0, input, index, ensureNotNull(tempOuterContext));
      if (Companion_getInstance_16().o30_1) {
        System_getInstance().g27_1.f27('DFA after predictATN: ' + dfa.a2e(this.w2i_1.w29()));
      }
      return alt;
    }finally {
      this.z2i_1 = null;
      this.d2j_1 = null;
      input.x27(index);
      input.w27(m);
    }
  }
  b31(dfa, s0, input, startIndex, outerContext) {
    if (Companion_getInstance_16().o30_1 || Companion_getInstance_16().p30_1) {
      System_getInstance().g27_1.f27('execATN decision ' + dfa.u2x_1 + (', DFA state ' + s0.toString()) + (', LA(1)==' + this.v30(input)) + (', line ' + ensureNotNull(input.h28(1)).e1e() + ':' + ensureNotNull(input.h28(1)).l29()));
    }
    var previousD = s0;
    var t = input.c28(1);
    while (true) {
      var tmp0_elvis_lhs = this.e2y(previousD, t);
      var D = tmp0_elvis_lhs == null ? this.c31(dfa, previousD, t) : tmp0_elvis_lhs;
      if (D === Companion_getInstance_11().j2t_1) {
        var e = this.d31(input, outerContext, previousD.b2t_1, startIndex);
        input.x27(startIndex);
        var alt = this.e31(previousD.b2t_1, outerContext);
        if (!(alt === 0)) {
          return alt;
        }
        throw e;
      }
      if (ensureNotNull(D).g2t_1 && !this.y2i_1.equals(PredictionMode_SLL_getInstance())) {
        var conflictingAlts = D.b2t_1.v2o_1;
        if (!(D.h2t_1 == null)) {
          if (Companion_getInstance_16().o30_1) {
            System_getInstance().g27_1.f27('DFA state has preds in DFA sim LL failover');
          }
          var conflictIndex = input.u27();
          if (!(conflictIndex === startIndex)) {
            input.x27(startIndex);
          }
          conflictingAlts = this.f31(ensureNotNull(D.h2t_1), outerContext, true);
          if (conflictingAlts.h31() === 1) {
            if (Companion_getInstance_16().o30_1) {
              System_getInstance().g27_1.f27('Full LL avoided');
            }
            return conflictingAlts.g31(0);
          }
          if (!(conflictIndex === startIndex)) {
            input.x27(conflictIndex);
          }
        }
        if (Companion_getInstance_16().q30_1) {
          System_getInstance().g27_1.f27('ctx sensitive state ' + outerContext.toString() + ' in ' + toString_1(D));
        }
        var fullCtx = true;
        var s0Closure = this.x30(dfa.t2x_1, outerContext, fullCtx);
        this.i31(dfa, ensureNotNull(conflictingAlts), D.b2t_1, startIndex, input.u27());
        return this.j31(dfa, D, s0Closure, input, startIndex, outerContext);
      }
      if (D.d2t_1) {
        if (D.h2t_1 == null) {
          return D.e2t_1;
        }
        var stopIndex = input.u27();
        input.x27(startIndex);
        var alts = this.f31(ensureNotNull(D.h2t_1), outerContext, true);
        switch (alts.h31()) {
          case 0:
            throw this.d31(input, outerContext, D.b2t_1, startIndex);
          case 1:
            return alts.g31(0);
          default:
            this.k31(dfa, D, startIndex, stopIndex, false, alts, D.b2t_1);
            return alts.g31(0);
        }
      }
      previousD = D;
      if (!(t === -1)) {
        input.b28();
        t = input.c28(1);
      }
    }
  }
  e2y(previousD, t) {
    var edges = previousD.c2t_1;
    if (edges == null || (t + 1 | 0) < 0 || (t + 1 | 0) >= edges.length) {
      return null;
    }
    return edges[t + 1 | 0];
  }
  c31(dfa, previousD, t) {
    var reach = this.l31(previousD.b2t_1, t, false);
    if (reach == null) {
      this.m31(dfa, previousD, t, Companion_getInstance_11().j2t_1);
      return Companion_getInstance_11().j2t_1;
    }
    var D = DFAState.i2t(reach);
    var predictedAlt = Companion_getInstance_16().t30(reach);
    if (Companion_getInstance_16().o30_1) {
      var altSubSets = Companion_instance_18.n31(reach);
      System_getInstance().g27_1.f27('SLL altSubSets=' + toString_0(altSubSets) + (', configs=' + toString_1(reach)) + (', predict=' + predictedAlt) + (', allSubsetsConflict=' + Companion_instance_18.o31(altSubSets)) + (', conflictingAlts=' + this.p31(reach).toString()));
    }
    if (!(predictedAlt === 0)) {
      D.d2t_1 = true;
      D.b2t_1.u2o_1 = predictedAlt;
      D.e2t_1 = predictedAlt;
    } else if (Companion_instance_18.q31(this.y2i_1, reach)) {
      D.b2t_1.v2o_1 = this.p31(reach);
      D.g2t_1 = true;
      D.d2t_1 = true;
      D.e2t_1 = ensureNotNull(D.b2t_1.v2o_1).g31(0);
    }
    if (D.d2t_1 && D.b2t_1.w2o_1) {
      this.r31(D, ensureNotNull(this.m2c_1.r2m(dfa.u2x_1)));
      if (!(D.h2t_1 == null)) {
        D.e2t_1 = 0;
      }
    }
    return this.m31(dfa, previousD, t, D);
  }
  r31(dfaState, decisionState) {
    var nAlts = decisionState.k2r();
    var altsToCollectPredsFrom = this.s31(dfaState.b2t_1);
    var altToPred = this.t31(altsToCollectPredsFrom, dfaState.b2t_1, nAlts);
    if (!(altToPred == null)) {
      dfaState.h2t_1 = this.u31(altsToCollectPredsFrom, altToPred);
      dfaState.e2t_1 = 0;
    } else {
      dfaState.e2t_1 = altsToCollectPredsFrom.g31(0);
    }
  }
  j31(dfa, D, s0, input, startIndex, outerContext) {
    if (Companion_getInstance_16().o30_1 || Companion_getInstance_16().p30_1) {
      System_getInstance().g27_1.f27('execATNWithFullContext ' + s0.toString());
    }
    var fullCtx = true;
    var foundExactAmbig = false;
    var reach;
    var previous = s0;
    input.x27(startIndex);
    var t = input.c28(1);
    var predictedAlt;
    $l$loop_1: while (true) {
      reach = this.l31(previous, t, fullCtx);
      if (reach == null) {
        var e = this.d31(input, outerContext, previous, startIndex);
        input.x27(startIndex);
        var alt = this.e31(previous, outerContext);
        if (!(alt === 0)) {
          return alt;
        }
        throw e;
      }
      var altSubSets = Companion_instance_18.n31(reach);
      if (Companion_getInstance_16().o30_1) {
        System_getInstance().g27_1.f27('LL altSubSets=' + toString_0(altSubSets) + (', predict=' + Companion_instance_18.v31(altSubSets)) + (', resolvesToJustOneViableAlt=' + Companion_instance_18.w31(altSubSets)));
      }
      reach.u2o_1 = Companion_getInstance_16().t30(reach);
      if (!(reach.u2o_1 === 0)) {
        predictedAlt = reach.u2o_1;
        break $l$loop_1;
      }
      if (!this.y2i_1.equals(PredictionMode_LL_EXACT_AMBIG_DETECTION_getInstance())) {
        predictedAlt = Companion_instance_18.w31(altSubSets);
        if (!(predictedAlt === 0)) {
          break $l$loop_1;
        }
      } else {
        if (Companion_instance_18.o31(altSubSets) && Companion_instance_18.y31(altSubSets)) {
          foundExactAmbig = true;
          predictedAlt = Companion_instance_18.x31(altSubSets);
          break $l$loop_1;
        }
      }
      previous = reach;
      if (!(t === -1)) {
        input.b28();
        t = input.c28(1);
      }
    }
    if (!(ensureNotNull(reach).u2o_1 === 0)) {
      this.z31(dfa, predictedAlt, reach, startIndex, input.u27());
      return predictedAlt;
    }
    this.k31(dfa, D, startIndex, input.u27(), foundExactAmbig, reach.a2p(), reach);
    return predictedAlt;
  }
  l31(closure, t, fullCtx) {
    if (Companion_getInstance_16().o30_1) {
      System_getInstance().g27_1.f27('in computeReachSet, starting closure: ' + closure.toString());
    }
    if (this.z2i_1 == null) {
      this.z2i_1 = new DoubleKeyMap();
    }
    var intermediate = new ATNConfigSet(fullCtx);
    var skippedStopStates = null;
    var _iterator__ex2g4s = closure.w();
    $l$loop: while (_iterator__ex2g4s.x()) {
      var c = _iterator__ex2g4s.y();
      if (Companion_getInstance_16().o30_1) {
        System_getInstance().g27_1.f27('testing ' + this.l2y(t) + ' at ' + c.toString());
      }
      var tmp = c.t2m_1;
      if (tmp instanceof RuleStopState) {
        // Inline function 'com.strumenta.antlrkotlin.runtime.assert' call
        if (!ensureNotNull(c.v2m_1).q2h()) {
          throw AssertionError.vc(null);
        }
        if (fullCtx || t === -1) {
          if (skippedStopStates == null) {
            skippedStopStates = ArrayList.u1();
          }
          skippedStopStates.z1(c);
        }
        continue $l$loop;
      }
      var n = c.t2m_1.k2r();
      var inductionVariable = 0;
      if (inductionVariable < n)
        do {
          var ti = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var trans = c.t2m_1.r2e(ti);
          var target = this.m2y(trans, t);
          if (!(target == null)) {
            intermediate.f2p(ATNConfig.d2n(c, target), this.z2i_1);
          }
        }
         while (inductionVariable < n);
    }
    var reach = null;
    if (skippedStopStates == null && !(t === -1)) {
      if (intermediate.b2() === 1) {
        reach = intermediate;
      } else if (!(Companion_getInstance_16().t30(intermediate) === 0)) {
        reach = intermediate;
      }
    }
    if (reach == null) {
      reach = new ATNConfigSet(fullCtx);
      var closureBusy = HashSet.o9();
      var treatEofAsEpsilon = t === -1;
      var _iterator__ex2g4s_0 = intermediate.w();
      while (_iterator__ex2g4s_0.x()) {
        var c_0 = _iterator__ex2g4s_0.y();
        this.a32(c_0, reach, closureBusy, false, fullCtx, treatEofAsEpsilon);
      }
    }
    if (t === -1) {
      reach = this.b32(reach, reach === intermediate);
    }
    if (!(skippedStopStates == null) && (!fullCtx || !Companion_instance_18.c32(reach))) {
      // Inline function 'kotlin.collections.isNotEmpty' call
      // Inline function 'com.strumenta.antlrkotlin.runtime.assert' call
      if (!!skippedStopStates.u()) {
        throw AssertionError.vc(null);
      }
      var _iterator__ex2g4s_1 = skippedStopStates.w();
      while (_iterator__ex2g4s_1.x()) {
        var c_1 = _iterator__ex2g4s_1.y();
        reach.f2p(c_1, this.z2i_1);
      }
    }
    if (Companion_getInstance_16().p30_1) {
      System_getInstance().g27_1.f27('computeReachSet ' + closure.toString() + ' -> ' + toString_1(reach));
    }
    var tmp_0;
    if (reach.u()) {
      tmp_0 = null;
    } else {
      tmp_0 = reach;
    }
    return tmp_0;
  }
  b32(configs, lookToEndOfRule) {
    if (Companion_instance_18.d32(configs)) {
      return configs;
    }
    var result = new ATNConfigSet(configs.r2o_1);
    var _iterator__ex2g4s = configs.w();
    $l$loop: while (_iterator__ex2g4s.x()) {
      var config = _iterator__ex2g4s.y();
      var tmp = config.t2m_1;
      if (tmp instanceof RuleStopState) {
        result.f2p(config, this.z2i_1);
        continue $l$loop;
      }
      if (lookToEndOfRule && config.t2m_1.w2s()) {
        var nextTokens = this.m2c_1.q2c(config.t2m_1);
        if (nextTokens.vk(-2)) {
          var endOfRuleState = ensureNotNull(this.m2c_1.h2c_1)[config.t2m_1.t2c_1];
          result.f2p(ATNConfig.d2n(config, ensureNotNull(endOfRuleState)), this.z2i_1);
        }
      }
    }
    return result;
  }
  x30(p, ctx, fullCtx) {
    var initialContext = Companion_instance_17.t2w(this.m2c_1, ctx);
    var configs = new ATNConfigSet(fullCtx);
    if (Companion_getInstance_16().p30_1) {
      System_getInstance().g27_1.f27('computeStartState from ATN state ' + p.toString() + ' initialContext=' + initialContext.d2v(this.w2i_1));
    }
    var inductionVariable = 0;
    var last = p.k2r();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var target = p.r2e(i).p2e_1;
        var c = ATNConfig.b2n(target, i + 1 | 0, initialContext);
        var closureBusy = HashSet.o9();
        this.a32(c, configs, closureBusy, true, fullCtx, false);
      }
       while (inductionVariable < last);
    return configs;
  }
  z30(configs) {
    var statesFromAlt1 = HashMap.y7();
    var configSet = new ATNConfigSet(configs.r2o_1);
    var _iterator__ex2g4s = configs.w();
    $l$loop_0: while (_iterator__ex2g4s.x()) {
      var config = _iterator__ex2g4s.y();
      if (!(config.u2m_1 === 1)) {
        continue $l$loop_0;
      }
      var tmp0_elvis_lhs = config.x2m_1.e32(this.w2i_1, ensureNotNull(this.c2j_1));
      var tmp;
      if (tmp0_elvis_lhs == null) {
        continue $l$loop_0;
      } else {
        tmp = tmp0_elvis_lhs;
      }
      var updatedContext = tmp;
      var tmp2 = config.t2m_1.s2c_1;
      // Inline function 'kotlin.collections.set' call
      var value = ensureNotNull(config.v2m_1);
      statesFromAlt1.l3(tmp2, value);
      if (!(updatedContext === config.x2m_1)) {
        configSet.f2p(ATNConfig.e2n(config, updatedContext), this.z2i_1);
      } else {
        configSet.f2p(config, this.z2i_1);
      }
    }
    var _iterator__ex2g4s_0 = configs.w();
    $l$loop_2: while (_iterator__ex2g4s_0.x()) {
      var config_0 = _iterator__ex2g4s_0.y();
      if (config_0.u2m_1 === 1) {
        continue $l$loop_2;
      }
      if (!config_0.a2n()) {
        var context = statesFromAlt1.r3(config_0.t2m_1.s2c_1);
        if (!(context == null) && equals(context, config_0.v2m_1)) {
          continue $l$loop_2;
        }
      }
      configSet.f2p(config_0, this.z2i_1);
    }
    return configSet;
  }
  m2y(trans, ttype) {
    var tmp;
    if (trans.e2u(ttype, 0, this.m2c_1.d2c_1)) {
      tmp = trans.p2e_1;
    } else {
      tmp = null;
    }
    return tmp;
  }
  t31(ambigAlts, configs, nAlts) {
    // Inline function 'kotlin.arrayOfNulls' call
    var size = nAlts + 1 | 0;
    var altToPred = Array(size);
    var _iterator__ex2g4s = configs.w();
    while (_iterator__ex2g4s.x()) {
      var c = _iterator__ex2g4s.y();
      if (ambigAlts.d2(c.u2m_1)) {
        altToPred[c.u2m_1] = Companion_instance_19.f32(altToPred[c.u2m_1], c.x2m_1);
      }
    }
    var nPredAlts = 0;
    var inductionVariable = 1;
    if (inductionVariable <= nAlts)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (altToPred[i] == null) {
          altToPred[i] = Empty_getInstance();
        } else if (!(altToPred[i] === Empty_getInstance())) {
          nPredAlts = nPredAlts + 1 | 0;
        }
      }
       while (!(i === nAlts));
    if (nPredAlts === 0) {
      if (Companion_getInstance_16().o30_1) {
        System_getInstance().g27_1.f27('getPredsForAmbigAlts result null');
      }
      return null;
    }
    if (Companion_getInstance_16().o30_1) {
      System_getInstance().g27_1.f27('getPredsForAmbigAlts result ' + joinToString(altToPred));
    }
    return altToPred;
  }
  u31(ambigAlts, altToPred) {
    var pairs = ArrayList.u1();
    var containsPredicate = false;
    var inductionVariable = 1;
    var last = altToPred.length;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var pred = altToPred[i];
        // Inline function 'com.strumenta.antlrkotlin.runtime.assert' call
        if (!!(pred == null)) {
          throw AssertionError.vc(null);
        }
        if (!(ambigAlts == null) && ambigAlts.d2(i)) {
          pairs.z1(new PredPrediction(pred, i));
        }
        if (!(pred === Empty_getInstance())) {
          containsPredicate = true;
        }
      }
       while (inductionVariable < last);
    if (!containsPredicate) {
      return null;
    }
    // Inline function 'kotlin.collections.toTypedArray' call
    return copyToArray(pairs);
  }
  e31(configs, outerContext) {
    var sets = this.g32(configs, outerContext);
    var semValidConfigs = sets.first;
    var semInvalidConfigs = sets.second;
    var alt = this.h32(semValidConfigs);
    if (!(alt === 0)) {
      return alt;
    }
    if (semInvalidConfigs.b2() > 0) {
      alt = this.h32(semInvalidConfigs);
      if (!(alt === 0)) {
        return alt;
      }
    }
    return 0;
  }
  h32(configs) {
    var alts = IntervalSet.x2b();
    var _iterator__ex2g4s = configs.w();
    while (_iterator__ex2g4s.x()) {
      var c = _iterator__ex2g4s.y();
      var tmp;
      if (c.y2m() > 0) {
        tmp = true;
      } else {
        var tmp_0;
        var tmp_1 = c.t2m_1;
        if (tmp_1 instanceof RuleStopState) {
          tmp_0 = ensureNotNull(c.v2m_1).c2v();
        } else {
          tmp_0 = false;
        }
        tmp = tmp_0;
      }
      if (tmp) {
        alts.y2b(c.u2m_1);
      }
    }
    if (alts.a28() === 0) {
      return 0;
    }
    return alts.t2e();
  }
  g32(configs, outerContext) {
    var succeeded = new ATNConfigSet(configs.r2o_1);
    var failed = new ATNConfigSet(configs.r2o_1);
    var _iterator__ex2g4s = configs.w();
    while (_iterator__ex2g4s.x()) {
      var c = _iterator__ex2g4s.y();
      if (!(c.x2m_1 === Empty_getInstance())) {
        var predicateEvaluationResult = this.i32(c.x2m_1, outerContext, c.u2m_1, configs.r2o_1);
        if (predicateEvaluationResult) {
          succeeded.e2p(c);
        } else {
          failed.e2p(c);
        }
      } else {
        succeeded.e2p(c);
      }
    }
    return new Pair(succeeded, failed);
  }
  f31(predPredictions, outerContext, complete) {
    var predictions = BitSet.c2p();
    var inductionVariable = 0;
    var last = predPredictions.length;
    $l$loop_1: while (inductionVariable < last) {
      var pair = predPredictions[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      if (pair.j32_1 === Empty_getInstance()) {
        predictions.d2p(pair.k32_1);
        if (!complete) {
          break $l$loop_1;
        }
        continue $l$loop_1;
      }
      var fullCtx = false;
      var predicateEvaluationResult = this.i32(pair.j32_1, outerContext, pair.k32_1, fullCtx);
      if (Companion_getInstance_16().o30_1 || Companion_getInstance_16().q30_1) {
        System_getInstance().g27_1.f27('eval pred ' + pair.toString() + '=' + predicateEvaluationResult);
      }
      if (predicateEvaluationResult) {
        if (Companion_getInstance_16().o30_1 || Companion_getInstance_16().q30_1) {
          System_getInstance().g27_1.f27('PREDICT ' + pair.k32_1);
        }
        predictions.d2p(pair.k32_1);
        if (!complete) {
          break $l$loop_1;
        }
      }
    }
    return predictions;
  }
  i32(pred, parserCallStack, alt, fullCtx) {
    return pred.l32(this.w2i_1, parserCallStack);
  }
  a32(config, configs, closureBusy, collectPredicates, fullCtx, treatEofAsEpsilon) {
    var initialDepth = 0;
    this.m32(config, configs, closureBusy, collectPredicates, fullCtx, initialDepth, treatEofAsEpsilon);
    // Inline function 'com.strumenta.antlrkotlin.runtime.assert' call
    if (!(!fullCtx || !configs.x2o_1)) {
      throw AssertionError.vc(null);
    }
  }
  m32(config, configs, closureBusy, collectPredicates, fullCtx, depth, treatEofAsEpsilon) {
    if (Companion_getInstance_16().p30_1) {
      System_getInstance().g27_1.f27('closure(' + config.l2n(this.w2i_1, true) + ')');
    }
    var tmp = config.t2m_1;
    if (tmp instanceof RuleStopState) {
      if (!ensureNotNull(config.v2m_1).q2h()) {
        var inductionVariable = 0;
        var last = ensureNotNull(config.v2m_1).a28();
        if (inductionVariable < last)
          $l$loop_0: do {
            var i = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            if (ensureNotNull(config.v2m_1).b2v(i) === 2147483647) {
              if (fullCtx) {
                configs.f2p(ATNConfig.d2n(config, config.t2m_1, EmptyPredictionContext_getInstance()), this.z2i_1);
                continue $l$loop_0;
              }
              if (Companion_getInstance_16().o30_1) {
                System_getInstance().g27_1.f27('FALLING off rule ' + this.n32(config.t2m_1.t2c_1));
              }
              this.o32(config, configs, closureBusy, collectPredicates, fullCtx, depth, treatEofAsEpsilon);
              continue $l$loop_0;
            }
            var returnState = this.m2c_1.e2c_1.d2(ensureNotNull(config.v2m_1).b2v(i));
            var newContext = ensureNotNull(config.v2m_1).a2v(i);
            var c = ATNConfig.b2n(ensureNotNull(returnState), config.u2m_1, ensureNotNull(newContext), config.x2m_1);
            c.w2m_1 = config.w2m_1;
            // Inline function 'com.strumenta.antlrkotlin.runtime.assert' call
            if (!(depth > -2147483648)) {
              throw AssertionError.vc(null);
            }
            this.m32(c, configs, closureBusy, collectPredicates, fullCtx, depth - 1 | 0, treatEofAsEpsilon);
          }
           while (inductionVariable < last);
        return Unit_instance;
      } else if (fullCtx) {
        configs.f2p(config, this.z2i_1);
        return Unit_instance;
      } else {
        if (Companion_getInstance_16().o30_1) {
          System_getInstance().g27_1.f27('FALLING off rule ' + this.n32(config.t2m_1.t2c_1));
        }
      }
    }
    this.o32(config, configs, closureBusy, collectPredicates, fullCtx, depth, treatEofAsEpsilon);
  }
  o32(config, configs, closureBusy, collectPredicates, fullCtx, depth, treatEofAsEpsilon) {
    var p = config.t2m_1;
    if (!p.w2s()) {
      configs.f2p(config, this.z2i_1);
    }
    var inductionVariable = 0;
    var last = p.k2r();
    if (inductionVariable < last)
      $l$loop_1: do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (i === 0 && this.p32(config)) {
          continue $l$loop_1;
        }
        var t = p.r2e(i);
        var tmp;
        if (!(t instanceof ActionTransition)) {
          tmp = collectPredicates;
        } else {
          tmp = false;
        }
        var continueCollecting = tmp;
        var c = this.q32(config, t, continueCollecting, depth === 0, fullCtx, treatEofAsEpsilon);
        if (!(c == null)) {
          var newDepth = depth;
          var tmp_0 = config.t2m_1;
          if (tmp_0 instanceof RuleStopState) {
            // Inline function 'com.strumenta.antlrkotlin.runtime.assert' call
            if (!!fullCtx) {
              throw AssertionError.vc(null);
            }
            if (!(this.d2j_1 == null) && ensureNotNull(this.d2j_1).x2x_1) {
              var outermostPrecedenceReturn = (t instanceof EpsilonTransition ? t : THROW_CCE()).q2w_1;
              if (outermostPrecedenceReturn === ensureNotNull(this.d2j_1).t2x_1.t2c_1) {
                c.z2m(true);
              }
            }
            c.w2m_1 = c.w2m_1 + 1 | 0;
            if (!closureBusy.z1(c)) {
              continue $l$loop_1;
            }
            configs.x2o_1 = true;
            // Inline function 'com.strumenta.antlrkotlin.runtime.assert' call
            if (!(newDepth > -2147483648)) {
              throw AssertionError.vc(null);
            }
            newDepth = newDepth - 1 | 0;
            if (Companion_getInstance_16().o30_1) {
              System_getInstance().g27_1.f27('dips into outer ctx: ' + toString_1(c));
            }
          } else {
            if (!t.c2u() && !closureBusy.z1(c)) {
              continue $l$loop_1;
            }
            if (t instanceof RuleTransition) {
              if (newDepth >= 0) {
                newDepth = newDepth + 1 | 0;
              }
            }
          }
          this.m32(c, configs, closureBusy, continueCollecting, fullCtx, newDepth, treatEofAsEpsilon);
        }
      }
       while (inductionVariable < last);
  }
  p32(config) {
    if (Companion_getInstance_16().s30_1) {
      return false;
    }
    var p = config.t2m_1;
    var tmp;
    var tmp_0;
    var tmp_1;
    if (!(p.y2c() === 10)) {
      tmp_1 = true;
    } else {
      tmp_1 = !(p instanceof StarLoopEntryState ? p : THROW_CCE()).e2s_1;
    }
    if (tmp_1) {
      tmp_0 = true;
    } else {
      tmp_0 = ensureNotNull(config.v2m_1).q2h();
    }
    if (tmp_0) {
      tmp = true;
    } else {
      tmp = ensureNotNull(config.v2m_1).c2v();
    }
    if (tmp) {
      return false;
    }
    var numCtxs = ensureNotNull(config.v2m_1).a28();
    var inductionVariable = 0;
    if (inductionVariable < numCtxs)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var returnState = this.m2c_1.e2c_1.d2(ensureNotNull(config.v2m_1).b2v(i));
        if (!(ensureNotNull(returnState).t2c_1 === p.t2c_1)) {
          return false;
        }
      }
       while (inductionVariable < numCtxs);
    var tmp_2 = p.r2e(0).p2e_1;
    var decisionStartState = tmp_2 instanceof BlockStartState ? tmp_2 : THROW_CCE();
    var blockEndStateNum = ensureNotNull(decisionStartState.x2q_1).s2c_1;
    var tmp_3 = this.m2c_1.e2c_1.d2(blockEndStateNum);
    var blockEndState = tmp_3 instanceof BlockEndState ? tmp_3 : THROW_CCE();
    var inductionVariable_0 = 0;
    if (inductionVariable_0 < numCtxs)
      $l$loop_2: do {
        var i_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        var returnStateNumber = ensureNotNull(config.v2m_1).b2v(i_0);
        var returnState_0 = this.m2c_1.e2c_1.d2(returnStateNumber);
        if (!(ensureNotNull(returnState_0).k2r() === 1) || !returnState_0.r2e(0).c2u()) {
          return false;
        }
        var returnStateTarget = returnState_0.r2e(0).p2e_1;
        if (returnState_0.y2c() === 8 && returnStateTarget === p) {
          continue $l$loop_2;
        }
        if (returnState_0 === blockEndState) {
          continue $l$loop_2;
        }
        if (returnStateTarget === blockEndState) {
          continue $l$loop_2;
        }
        if (returnStateTarget.y2c() === 8 && returnStateTarget.k2r() === 1 && returnStateTarget.r2e(0).c2u() && returnStateTarget.r2e(0).p2e_1 === p) {
          continue $l$loop_2;
        }
        return false;
      }
       while (inductionVariable_0 < numCtxs);
    return true;
  }
  n32(index) {
    if (index >= 0) {
      return this.w2i_1.b2e()[index];
    }
    return '<rule ' + index + '>';
  }
  q32(config, t, collectPredicates, inContext, fullCtx, treatEofAsEpsilon) {
    switch (t.d2u()) {
      case 3:
        return this.r32(config, t instanceof RuleTransition ? t : THROW_CCE());
      case 10:
        return this.s32(config, t instanceof PrecedencePredicateTransition ? t : THROW_CCE(), collectPredicates, inContext, fullCtx);
      case 4:
        return this.t32(config, t instanceof PredicateTransition ? t : THROW_CCE(), collectPredicates, inContext, fullCtx);
      case 6:
        return this.u32(config, t instanceof ActionTransition ? t : THROW_CCE());
      case 1:
        return ATNConfig.d2n(config, t.p2e_1);
      case 5:
      case 2:
      case 7:
        if (treatEofAsEpsilon) {
          if (t.e2u(-1, 0, 1)) {
            return ATNConfig.d2n(config, t.p2e_1);
          }
        }

        return null;
      default:
        return null;
    }
  }
  u32(config, t) {
    if (Companion_getInstance_16().o30_1) {
      System_getInstance().g27_1.f27('ACTION edge ' + t.h2u_1 + ':' + t.i2u_1);
    }
    return ATNConfig.d2n(config, t.p2e_1);
  }
  s32(config, pt, collectPredicates, inContext, fullCtx) {
    if (Companion_getInstance_16().o30_1) {
      System_getInstance().g27_1.f27('PRED (collectPredicates=' + collectPredicates + ') ' + pt.x32_1 + '>=_p, ctx dependent=true');
      System_getInstance().g27_1.f27('context surrounding pred is ' + toString_0(this.w2i_1.i2k()));
    }
    var c = null;
    if (collectPredicates && inContext) {
      if (fullCtx) {
        var currentPosition = ensureNotNull(this.a2j_1).u27();
        ensureNotNull(this.a2j_1).x27(this.b2j_1);
        var predSucceeds = this.i32(pt.a33(), ensureNotNull(this.c2j_1), config.u2m_1, fullCtx);
        ensureNotNull(this.a2j_1).x27(currentPosition);
        if (predSucceeds) {
          c = ATNConfig.d2n(config, pt.p2e_1);
        }
      } else {
        var newSemCtx = Companion_instance_19.b33(config.x2m_1, pt.a33());
        c = ATNConfig.c2n(config, pt.p2e_1, ensureNotNull(newSemCtx));
      }
    } else {
      c = ATNConfig.d2n(config, pt.p2e_1);
    }
    if (Companion_getInstance_16().o30_1) {
      System_getInstance().g27_1.f27('config from pred transition=' + toString_1(c));
    }
    return c;
  }
  t32(config, pt, collectPredicates, inContext, fullCtx) {
    if (Companion_getInstance_16().o30_1) {
      System_getInstance().g27_1.f27('PRED (collectPredicates=' + collectPredicates + ')' + (' ' + pt.v2y_1 + ':' + pt.w2y_1) + (', ctx dependent=' + pt.x2y_1));
      System_getInstance().g27_1.f27('context surrounding pred is ' + toString_0(this.w2i_1.i2k()));
    }
    var c = null;
    if (collectPredicates && (!pt.x2y_1 || (pt.x2y_1 && inContext))) {
      if (fullCtx) {
        var currentPosition = ensureNotNull(this.a2j_1).u27();
        ensureNotNull(this.a2j_1).x27(this.b2j_1);
        var predSucceeds = this.i32(pt.a33(), ensureNotNull(this.c2j_1), config.u2m_1, fullCtx);
        ensureNotNull(this.a2j_1).x27(currentPosition);
        if (predSucceeds) {
          c = ATNConfig.d2n(config, pt.p2e_1);
        }
      } else {
        var newSemCtx = Companion_instance_19.b33(config.x2m_1, pt.a33());
        c = ATNConfig.c2n(config, pt.p2e_1, ensureNotNull(newSemCtx));
      }
    } else {
      c = ATNConfig.d2n(config, pt.p2e_1);
    }
    if (Companion_getInstance_16().o30_1) {
      System_getInstance().g27_1.f27('config from pred transition=' + toString_1(c));
    }
    return c;
  }
  r32(config, t) {
    if (Companion_getInstance_16().o30_1) {
      System_getInstance().g27_1.f27('CALL rule ' + this.n32(t.p2e_1.t2c_1) + ', ctx=' + toString_1(config.v2m_1));
    }
    var returnState = t.c2f_1;
    var newContext = Companion_instance_20.x2w(config.v2m_1, returnState.s2c_1);
    return ATNConfig.d2n(config, t.p2e_1, newContext);
  }
  p31(configs) {
    var altSets = Companion_instance_18.n31(configs);
    return Companion_instance_18.c33(altSets);
  }
  s31(configs) {
    var conflictingAlts;
    if (!(configs.u2o_1 === 0)) {
      conflictingAlts = BitSet.c2p();
      conflictingAlts.d2p(configs.u2o_1);
    } else {
      conflictingAlts = ensureNotNull(configs.v2o_1);
    }
    return conflictingAlts;
  }
  l2y(t) {
    if (t === -1) {
      return 'EOF';
    }
    var vocabulary = this.w2i_1.w29();
    var displayName = vocabulary.x29(t);
    if (displayName === t.toString()) {
      return displayName;
    }
    return displayName + '<' + t + '>';
  }
  v30(input) {
    return this.l2y(input.c28(1));
  }
  d31(input, outerContext, configs, startIndex) {
    return NoViableAltException.q2i(this.w2i_1, input, input.d2(startIndex), input.h28(1), configs, outerContext);
  }
  m31(dfa, from, t, to) {
    if (Companion_getInstance_16().o30_1) {
      System_getInstance().g27_1.f27('EDGE ' + toString_1(from) + ' -> ' + toString_1(to) + ' upon ' + this.l2y(t));
    }
    if (to == null) {
      return null;
    }
    var tto = this.y30(dfa, to);
    if (from == null || t < -1 || t > this.m2c_1.d2c_1) {
      return tto;
    }
    // Inline function 'com.strumenta.antlrkotlin.runtime.synchronized' call
    if (from.c2t_1 == null) {
      var tmp = from;
      // Inline function 'kotlin.arrayOfNulls' call
      var size = (this.m2c_1.d2c_1 + 1 | 0) + 1 | 0;
      tmp.c2t_1 = Array(size);
    }
    ensureNotNull(from.c2t_1)[t + 1 | 0] = tto;
    if (Companion_getInstance_16().o30_1) {
      System_getInstance().g27_1.f27('DFA=\n' + dfa.a2e(this.w2i_1.w29()));
    }
    return tto;
  }
  y30(dfa, D) {
    if (D === Companion_getInstance_11().j2t_1) {
      return D;
    }
    // Inline function 'com.strumenta.antlrkotlin.runtime.synchronized' call
    dfa.v2x_1;
    var existing = dfa.v2x_1.r3(D);
    if (!(existing == null)) {
      if (Companion_getInstance_16().p30_1) {
        System_getInstance().g27_1.f27('addDFAState ' + D.toString() + ' exists');
      }
      return existing;
    }
    D.a2t_1 = dfa.v2x_1.b2();
    if (!D.b2t_1.z2o_1) {
      D.b2t_1.l2p(this);
      D.b2t_1.f2m(true);
    }
    if (Companion_getInstance_16().p30_1) {
      System_getInstance().g27_1.f27('addDFAState new ' + D.toString());
    }
    // Inline function 'kotlin.collections.set' call
    dfa.v2x_1.l3(D, D);
    return D;
  }
  i31(dfa, conflictingAlts, configs, startIndex, stopIndex) {
    if (Companion_getInstance_16().o30_1 || Companion_getInstance_16().r30_1) {
      var interval = Companion_getInstance_25().x28(startIndex, stopIndex);
      System_getInstance().g27_1.f27('reportAttemptingFullContext' + (' decision=' + dfa.u2x_1 + ':' + configs.toString()) + (', input=' + this.w2i_1.u2b().p28(interval)));
    }
    this.w2i_1.w2h().n27(this.w2i_1, dfa, startIndex, stopIndex, conflictingAlts, configs);
  }
  z31(dfa, prediction, configs, startIndex, stopIndex) {
    if (Companion_getInstance_16().o30_1 || Companion_getInstance_16().r30_1) {
      var interval = Companion_getInstance_25().x28(startIndex, stopIndex);
      System_getInstance().g27_1.f27('reportContextSensitivity' + (' decision=' + dfa.u2x_1 + ':' + configs.toString()) + (', input=' + this.w2i_1.u2b().p28(interval)));
    }
    this.w2i_1.w2h().o27(this.w2i_1, dfa, startIndex, stopIndex, prediction, configs);
  }
  k31(dfa, D, startIndex, stopIndex, exact, ambigAlts, configs) {
    if (Companion_getInstance_16().o30_1 || Companion_getInstance_16().r30_1) {
      var interval = Companion_getInstance_25().x28(startIndex, stopIndex);
      System_getInstance().g27_1.f27('reportAmbiguity ' + ambigAlts.toString() + ':' + configs.toString() + ', input=' + this.w2i_1.u2b().p28(interval));
    }
    this.w2i_1.w2h().m27(this.w2i_1, dfa, startIndex, stopIndex, exact, ambigAlts, configs);
  }
}
class PlusBlockStartState extends BlockStartState {
  constructor() {
    super();
    this.q2s_1 = null;
    this.r2s_1 = 4;
  }
  y2c() {
    return this.r2s_1;
  }
}
class PlusLoopbackState extends DecisionState {
  constructor() {
    super();
    this.m33_1 = 11;
  }
  y2c() {
    return this.m33_1;
  }
}
class PrecedencePredicateTransition extends AbstractPredicateTransition {
  constructor(target, precedence) {
    super(target);
    this.x32_1 = precedence;
    this.y32_1 = 10;
    this.z32_1 = true;
  }
  d2u() {
    return this.y32_1;
  }
  c2u() {
    return this.z32_1;
  }
  a33() {
    return PrecedencePredicate.o33(this.x32_1);
  }
  e2u(symbol, minVocabSymbol, maxVocabSymbol) {
    return false;
  }
  toString() {
    return '' + this.x32_1 + ' >= _p';
  }
}
class PredicateTransition extends AbstractPredicateTransition {
  constructor(target, ruleIndex, predIndex, isCtxDependent) {
    super(target);
    this.v2y_1 = ruleIndex;
    this.w2y_1 = predIndex;
    this.x2y_1 = isCtxDependent;
    this.y2y_1 = 4;
    this.z2y_1 = true;
  }
  d2u() {
    return this.y2y_1;
  }
  c2u() {
    return this.z2y_1;
  }
  a33() {
    return Predicate.s33(this.v2y_1, this.w2y_1, this.x2y_1);
  }
  e2u(symbol, minVocabSymbol, maxVocabSymbol) {
    return false;
  }
  toString() {
    return 'pred_' + this.v2y_1 + ':' + this.w2y_1;
  }
}
class Companion_17 {
  constructor() {
    this.g2p_1 = 1;
    this.h2p_1 = 2147483647;
    this.i2p_1 = 0;
  }
  t2w(atn, outerContext) {
    var tempOuterContext = outerContext == null ? Companion_getInstance_3().j2k_1 : outerContext;
    if (tempOuterContext.g2f() == null || tempOuterContext === Companion_getInstance_3().j2k_1) {
      return EmptyPredictionContext_getInstance();
    }
    var parent = this.t2w(atn, tempOuterContext.g2f());
    var state = atn.e2c_1.d2(tempOuterContext.d2e_1);
    var tmp = ensureNotNull(state).r2e(0);
    var transition = tmp instanceof RuleTransition ? tmp : THROW_CCE();
    return Companion_instance_20.x2w(parent, transition.c2f_1.s2c_1);
  }
  t33() {
    var hash = MurmurHash_instance.h2n(1);
    hash = MurmurHash_instance.k2n(hash, 0);
    return hash;
  }
  u33(parent, returnState) {
    var hash = MurmurHash_instance.h2n(1);
    hash = MurmurHash_instance.j2n(hash, parent);
    hash = MurmurHash_instance.i2n(hash, returnState);
    hash = MurmurHash_instance.k2n(hash, 2);
    return hash;
  }
  r2u(parents, returnStates) {
    var hash = MurmurHash_instance.h2n(1);
    var inductionVariable = 0;
    var last = parents.length;
    while (inductionVariable < last) {
      var parent = parents[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      hash = MurmurHash_instance.j2n(hash, parent);
    }
    var inductionVariable_0 = 0;
    var last_0 = returnStates.length;
    while (inductionVariable_0 < last_0) {
      var returnState = returnStates[inductionVariable_0];
      inductionVariable_0 = inductionVariable_0 + 1 | 0;
      hash = MurmurHash_instance.i2n(hash, returnState);
    }
    hash = MurmurHash_instance.k2n(hash, imul(2, parents.length));
    return hash;
  }
  j2p(a, b, rootIsWildcard, mergeCache) {
    var aa = a;
    var bb = b;
    // Inline function 'com.strumenta.antlrkotlin.runtime.assert' call
    if (!(!(aa == null) && !(bb == null))) {
      throw AssertionError.vc(null);
    }
    if (a === b || equals(aa, bb)) {
      return aa;
    }
    var tmp;
    if (aa instanceof SingletonPredictionContext) {
      tmp = bb instanceof SingletonPredictionContext;
    } else {
      tmp = false;
    }
    if (tmp) {
      return this.v33(aa, bb, rootIsWildcard, mergeCache);
    }
    if (rootIsWildcard) {
      if (aa instanceof EmptyPredictionContext) {
        return aa;
      }
      if (bb instanceof EmptyPredictionContext) {
        return bb;
      }
    }
    if (aa instanceof SingletonPredictionContext) {
      aa = ArrayPredictionContext.v2u(aa);
    }
    if (bb instanceof SingletonPredictionContext) {
      bb = ArrayPredictionContext.v2u(bb);
    }
    var tmp_0 = aa instanceof ArrayPredictionContext ? aa : THROW_CCE();
    return this.w33(tmp_0, bb instanceof ArrayPredictionContext ? bb : THROW_CCE(), rootIsWildcard, mergeCache);
  }
  v33(a, b, rootIsWildcard, mergeCache) {
    if (!(mergeCache == null)) {
      var previous = mergeCache.y33(a, b);
      if (!(previous == null)) {
        return previous;
      }
      previous = mergeCache.y33(b, a);
      if (!(previous == null)) {
        return previous;
      }
    }
    var rootMerge = this.z33(a, b, rootIsWildcard);
    if (!(rootMerge == null)) {
      if (mergeCache == null)
        null;
      else
        mergeCache.a34(a, b, rootMerge);
      return rootMerge;
    }
    if (a.z2u_1 === b.z2u_1) {
      var parent = this.j2p(a.y2u_1, b.y2u_1, rootIsWildcard, mergeCache);
      if (parent === a.y2u_1) {
        return a;
      }
      if (parent === b.y2u_1) {
        return b;
      }
      var a_ = Companion_instance_20.x2w(parent, a.z2u_1);
      if (mergeCache == null)
        null;
      else
        mergeCache.a34(a, b, a_);
      return a_;
    }
    var singleParent = null;
    if (a === b || (!(a.y2u_1 == null) && equals(a.y2u_1, b.y2u_1))) {
      singleParent = a.y2u_1;
    }
    if (!(singleParent == null)) {
      // Inline function 'kotlin.intArrayOf' call
      var payloads = new Int32Array([a.z2u_1, b.z2u_1]);
      if (a.z2u_1 > b.z2u_1) {
        payloads[0] = b.z2u_1;
        payloads[1] = a.z2u_1;
      }
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var parents = [singleParent, singleParent];
      var a__0 = ArrayPredictionContext.q2u(parents, payloads);
      if (mergeCache == null)
        null;
      else
        mergeCache.a34(a, b, a__0);
      return a__0;
    }
    // Inline function 'kotlin.intArrayOf' call
    var payloads_0 = new Int32Array([a.z2u_1, b.z2u_1]);
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var parents_0 = [a.y2u_1, b.y2u_1];
    if (a.z2u_1 > b.z2u_1) {
      payloads_0[0] = b.z2u_1;
      payloads_0[1] = a.z2u_1;
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      parents_0 = [b.y2u_1, a.y2u_1];
    }
    var a__1 = ArrayPredictionContext.q2u(parents_0, payloads_0);
    if (mergeCache == null)
      null;
    else
      mergeCache.a34(a, b, a__1);
    return a__1;
  }
  z33(a, b, rootIsWildcard) {
    if (rootIsWildcard) {
      if (a === EmptyPredictionContext_getInstance()) {
        return EmptyPredictionContext_getInstance();
      }
      if (b === EmptyPredictionContext_getInstance()) {
        return EmptyPredictionContext_getInstance();
      }
    } else {
      if (a === EmptyPredictionContext_getInstance() && b === EmptyPredictionContext_getInstance()) {
        return EmptyPredictionContext_getInstance();
      }
      if (a === EmptyPredictionContext_getInstance()) {
        // Inline function 'kotlin.intArrayOf' call
        var payloads = new Int32Array([b.z2u_1, 2147483647]);
        // Inline function 'kotlin.arrayOf' call
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        var parents = [b.y2u_1, null];
        return ArrayPredictionContext.q2u(parents, payloads);
      }
      if (b === EmptyPredictionContext_getInstance()) {
        // Inline function 'kotlin.intArrayOf' call
        var payloads_0 = new Int32Array([a.z2u_1, 2147483647]);
        // Inline function 'kotlin.arrayOf' call
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        var parents_0 = [a.y2u_1, null];
        return ArrayPredictionContext.q2u(parents_0, payloads_0);
      }
    }
    return null;
  }
  w33(a, b, rootIsWildcard, mergeCache) {
    if (!(mergeCache == null)) {
      var previous = mergeCache.y33(a, b);
      if (!(previous == null)) {
        if (Companion_getInstance_16().p30_1) {
          System_getInstance().g27_1.f27('mergeArrays a=' + a.toString() + ',b=' + b.toString() + ' -> previous');
        }
        return previous;
      }
      previous = mergeCache.y33(b, a);
      if (!(previous == null)) {
        if (Companion_getInstance_16().p30_1) {
          System_getInstance().g27_1.f27('mergeArrays a=' + a.toString() + ',b=' + b.toString() + ' -> previous');
        }
        return previous;
      }
    }
    var i = 0;
    var j = 0;
    var k = 0;
    var mergedReturnStates = new Int32Array(a.p2u_1.length + b.p2u_1.length | 0);
    // Inline function 'kotlin.arrayOfNulls' call
    var size = a.p2u_1.length + b.p2u_1.length | 0;
    var mergedParents = Array(size);
    while (i < a.p2u_1.length && j < b.p2u_1.length) {
      var aParent = a.o2u_1[i];
      var bParent = b.o2u_1[j];
      if (a.p2u_1[i] === b.p2u_1[j]) {
        var payload = a.p2u_1[i];
        var both = payload === 2147483647 && aParent == null && bParent == null;
        var ax_ax = !(aParent == null) && !(bParent == null) && equals(aParent, bParent);
        if (both || ax_ax) {
          mergedParents[k] = aParent;
          mergedReturnStates[k] = payload;
        } else {
          var mergedParent = this.j2p(aParent, bParent, rootIsWildcard, mergeCache);
          mergedParents[k] = mergedParent;
          mergedReturnStates[k] = payload;
        }
        i = i + 1 | 0;
        j = j + 1 | 0;
      } else if (a.p2u_1[i] < b.p2u_1[j]) {
        mergedParents[k] = aParent;
        mergedReturnStates[k] = a.p2u_1[i];
        i = i + 1 | 0;
      } else {
        mergedParents[k] = bParent;
        mergedReturnStates[k] = b.p2u_1[j];
        j = j + 1 | 0;
      }
      k = k + 1 | 0;
    }
    if (i < a.p2u_1.length) {
      var inductionVariable = i;
      var last = a.p2u_1.length;
      if (inductionVariable < last)
        do {
          var p = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          mergedParents[k] = a.o2u_1[p];
          mergedReturnStates[k] = a.p2u_1[p];
          k = k + 1 | 0;
        }
         while (inductionVariable < last);
    } else {
      var inductionVariable_0 = j;
      var last_0 = b.p2u_1.length;
      if (inductionVariable_0 < last_0)
        do {
          var p_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          mergedParents[k] = b.o2u_1[p_0];
          mergedReturnStates[k] = b.p2u_1[p_0];
          k = k + 1 | 0;
        }
         while (inductionVariable_0 < last_0);
    }
    if (k < mergedParents.length) {
      if (k === 1) {
        var a_ = Companion_instance_20.x2w(mergedParents[0], mergedReturnStates[0]);
        if (mergeCache == null)
          null;
        else
          mergeCache.a34(a, b, a_);
        return a_;
      }
      mergedParents = copyOf(mergedParents, k);
      mergedReturnStates = copyOf_0(mergedReturnStates, k);
    }
    var M = ArrayPredictionContext.q2u(mergedParents, mergedReturnStates);
    if (M.equals(a)) {
      if (mergeCache == null)
        null;
      else
        mergeCache.a34(a, b, a);
      if (Companion_getInstance_16().p30_1) {
        System_getInstance().g27_1.f27('mergeArrays a=' + a.toString() + ',b=' + b.toString() + ' -> a');
      }
      return a;
    }
    if (M.equals(b)) {
      if (mergeCache == null)
        null;
      else
        mergeCache.a34(a, b, b);
      if (Companion_getInstance_16().p30_1) {
        System_getInstance().g27_1.f27('mergeArrays a=' + a.toString() + ',b=' + b.toString() + ' -> b');
      }
      return b;
    }
    this.b34(mergedParents);
    if (mergeCache == null)
      null;
    else
      mergeCache.a34(a, b, M);
    if (Companion_getInstance_16().p30_1) {
      System_getInstance().g27_1.f27('mergeArrays a=' + a.toString() + ',b=' + b.toString() + ' -> ' + M.toString());
    }
    return M;
  }
  b34(parents) {
    var uniqueParents = HashMap.y7();
    var inductionVariable = 0;
    var last = parents.length - 1 | 0;
    if (inductionVariable <= last)
      do {
        var p = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var parent = parents[p];
        if (!uniqueParents.p3(parent)) {
          // Inline function 'kotlin.collections.set' call
          uniqueParents.l3(parent, parent);
        }
      }
       while (inductionVariable <= last);
    var inductionVariable_0 = 0;
    var last_0 = parents.length - 1 | 0;
    if (inductionVariable_0 <= last_0)
      do {
        var p_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        parents[p_0] = uniqueParents.r3(parents[p_0]);
      }
       while (inductionVariable_0 <= last_0);
  }
  k2t(context, contextCache, visited) {
    if (context.q2h()) {
      return context;
    }
    var existing = visited.r3(context);
    if (!(existing == null)) {
      return existing;
    }
    existing = contextCache.d34(context);
    if (!(existing == null)) {
      // Inline function 'kotlin.collections.set' call
      var value = existing;
      visited.l3(context, value);
      return existing;
    }
    var changed = false;
    // Inline function 'kotlin.arrayOfNulls' call
    var size = context.a28();
    var parents = Array(size);
    var inductionVariable = 0;
    var last = parents.length - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var parent = this.k2t(ensureNotNull(context.a2v(i)), contextCache, visited);
        if (changed || !(parent === context.a2v(i))) {
          if (!changed) {
            // Inline function 'kotlin.arrayOfNulls' call
            var size_0 = context.a28();
            parents = Array(size_0);
            var inductionVariable_0 = 0;
            var last_0 = context.a28();
            if (inductionVariable_0 < last_0)
              do {
                var j = inductionVariable_0;
                inductionVariable_0 = inductionVariable_0 + 1 | 0;
                parents[j] = context.a2v(j);
              }
               while (inductionVariable_0 < last_0);
            changed = true;
          }
          parents[i] = parent;
        }
      }
       while (inductionVariable <= last);
    if (!changed) {
      contextCache.e34(context);
      // Inline function 'kotlin.collections.set' call
      visited.l3(context, context);
      return context;
    }
    var tmp;
    // Inline function 'kotlin.collections.isEmpty' call
    if (parents.length === 0) {
      tmp = EmptyPredictionContext_getInstance();
    } else {
      if (parents.length === 1) {
        tmp = Companion_instance_20.x2w(parents[0], context.b2v(0));
      } else {
        var arrayPredictionContext = context instanceof ArrayPredictionContext ? context : THROW_CCE();
        tmp = ArrayPredictionContext.q2u(parents, arrayPredictionContext.p2u_1);
      }
    }
    var updated = tmp;
    contextCache.e34(updated);
    // Inline function 'kotlin.collections.set' call
    visited.l3(updated, updated);
    // Inline function 'kotlin.collections.set' call
    visited.l3(context, updated);
    return updated;
  }
}
class PredictionContextCache {
  constructor() {
    this.c34_1 = HashMap.y7();
  }
  e34(ctx) {
    if (ctx === EmptyPredictionContext_getInstance()) {
      return EmptyPredictionContext_getInstance();
    }
    var existing = this.c34_1.r3(ctx);
    if (!(existing == null)) {
      return existing;
    }
    // Inline function 'kotlin.collections.set' call
    this.c34_1.l3(ctx, ctx);
    return ctx;
  }
  d34(ctx) {
    return this.c34_1.r3(ctx);
  }
}
class FlexibleHashMap {
  constructor(comparator, initialCapacity, initialBucketCapacity) {
    comparator = comparator === VOID ? Companion_getInstance_27().k2x_1 : comparator;
    initialCapacity = initialCapacity === VOID ? 16 : initialCapacity;
    initialBucketCapacity = initialBucketCapacity === VOID ? 8 : initialBucketCapacity;
    this.f34_1 = comparator;
    this.g34_1 = initialCapacity;
    this.h34_1 = initialBucketCapacity;
    this.j34_1 = 0;
    this.k34_1 = 1;
    this.l34_1 = 0;
    this.i34_1 = createEntryListArray(Companion_instance_23, this.h34_1);
    var tmp = this;
    // Inline function 'kotlin.math.floor' call
    var x = this.g34_1 * 0.75;
    var tmp$ret$0 = Math.floor(x);
    tmp.l34_1 = numberToInt(tmp$ret$0);
  }
  b2() {
    return this.j34_1;
  }
  n3() {
    throw UnsupportedOperationException.q7();
  }
  o3() {
    var a = ArrayList.y1(this.b2());
    var indexedObject = this.i34_1;
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var bucket = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      if (!(bucket == null)) {
        var _iterator__ex2g4s = bucket.w();
        while (_iterator__ex2g4s.x()) {
          var entry = _iterator__ex2g4s.y();
          a.z1(ensureNotNull(entry).a38_1);
        }
      }
    }
    return a;
  }
  m2() {
    throw UnsupportedOperationException.q7();
  }
  r3(key) {
    if (key == null) {
      return null;
    }
    var b = this.m34(key);
    var tmp0_elvis_lhs = this.i34_1[b];
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return null;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var bucket = tmp;
    var _iterator__ex2g4s = bucket.w();
    while (_iterator__ex2g4s.x()) {
      var e = _iterator__ex2g4s.y();
      if (this.f34_1.q2o(e == null ? null : e.z37_1, key)) {
        return e == null ? null : e.a38_1;
      }
    }
    return null;
  }
  l3(key, value) {
    if (key == null) {
      return null;
    }
    if (this.j34_1 > this.l34_1) {
      this.h2o();
    }
    var b = this.m34(key);
    var existingBucket = this.i34_1[b];
    var tmp;
    if (!(existingBucket == null)) {
      tmp = existingBucket;
    } else {
      var list = ArrayList.u1();
      this.i34_1[b] = list;
      tmp = list;
    }
    var bucket = tmp;
    var _iterator__ex2g4s = bucket.w();
    while (_iterator__ex2g4s.x()) {
      var e = _iterator__ex2g4s.y();
      if (this.f34_1.q2o(e == null ? null : e.z37_1, key)) {
        var prev = e == null ? null : e.a38_1;
        if (e == null)
          null;
        else {
          e.a38_1 = value;
        }
        this.j34_1 = this.j34_1 + 1 | 0;
        return prev;
      }
    }
    bucket.z1(new Entry(key, value));
    this.j34_1 = this.j34_1 + 1 | 0;
    return null;
  }
  m3(key) {
    throw UnsupportedOperationException.q7();
  }
  p3(key) {
    return !(this.r3(key) == null);
  }
  hashCode() {
    var hash = MurmurHash_instance.c2z();
    var indexedObject = this.i34_1;
    var inductionVariable = 0;
    var last = indexedObject.length;
    $l$loop: while (inductionVariable < last) {
      var bucket = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      if (bucket == null) {
        continue $l$loop;
      }
      var _iterator__ex2g4s = bucket.w();
      $l$loop_0: while (_iterator__ex2g4s.x()) {
        var e = _iterator__ex2g4s.y();
        if (e == null) {
          break $l$loop_0;
        }
        hash = MurmurHash_instance.i2n(hash, this.f34_1.o2o(e.z37_1));
      }
    }
    hash = MurmurHash_instance.k2n(hash, this.b2());
    return hash;
  }
  equals(other) {
    throw UnsupportedOperationException.q7();
  }
  m34(key) {
    var hash = this.f34_1.o2o(key);
    return hash & (this.i34_1.length - 1 | 0);
  }
  h2o() {
    var old = this.i34_1;
    this.k34_1 = this.k34_1 + 4 | 0;
    var newCapacity = imul(this.i34_1.length, 2);
    var newTable = createEntryListArray(Companion_instance_23, newCapacity);
    this.i34_1 = newTable;
    this.l34_1 = numberToInt(newCapacity * 0.75);
    var oldSize = this.b2();
    var inductionVariable = 0;
    var last = old.length;
    $l$loop: while (inductionVariable < last) {
      var bucket = old[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      if (bucket == null) {
        continue $l$loop;
      }
      var _iterator__ex2g4s = bucket.w();
      $l$loop_0: while (_iterator__ex2g4s.x()) {
        var e = _iterator__ex2g4s.y();
        if (e == null) {
          break $l$loop_0;
        }
        this.l3(e.z37_1, e.a38_1);
      }
    }
    this.j34_1 = oldSize;
  }
  u() {
    return this.j34_1 === 0;
  }
  toString() {
    if (this.b2() === 0) {
      return '{}';
    }
    var first = true;
    var buf = StringBuilder.s();
    buf.t('{');
    var indexedObject = this.i34_1;
    var inductionVariable = 0;
    var last = indexedObject.length;
    $l$loop: while (inductionVariable < last) {
      var bucket = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      if (bucket == null) {
        continue $l$loop;
      }
      var _iterator__ex2g4s = bucket.w();
      $l$loop_0: while (_iterator__ex2g4s.x()) {
        var e = _iterator__ex2g4s.y();
        if (e == null) {
          break $l$loop_0;
        }
        if (first) {
          first = false;
        } else {
          buf.t(', ');
        }
        buf.t(e.toString());
      }
    }
    buf.t('}');
    return buf.toString();
  }
}
class AltAndContextMap extends FlexibleHashMap {
  constructor() {
    super(AltAndContextConfigEqualityComparator_getInstance());
  }
}
class AltAndContextConfigEqualityComparator extends AbstractEqualityComparator {
  constructor() {
    AltAndContextConfigEqualityComparator_instance = null;
    super();
    AltAndContextConfigEqualityComparator_instance = this;
  }
  n2o(obj) {
    var hashCode = MurmurHash_instance.h2n(7);
    hashCode = MurmurHash_instance.i2n(hashCode, obj.t2m_1.s2c_1);
    hashCode = MurmurHash_instance.j2n(hashCode, obj.v2m_1);
    hashCode = MurmurHash_instance.k2n(hashCode, 2);
    return hashCode;
  }
  o2o(obj) {
    return this.n2o(obj instanceof ATNConfig ? obj : THROW_CCE());
  }
  p2o(a, b) {
    if (a === b) {
      return true;
    }
    if (a == null || b == null) {
      return false;
    }
    return a.t2m_1.s2c_1 === b.t2m_1.s2c_1 && equals(a.v2m_1, b.v2m_1);
  }
  q2o(a, b) {
    var tmp = (a == null ? true : a instanceof ATNConfig) ? a : THROW_CCE();
    return this.p2o(tmp, (b == null ? true : b instanceof ATNConfig) ? b : THROW_CCE());
  }
}
class Companion_18 {
  q31(mode, configs) {
    var tempConfig = configs;
    if (this.d32(tempConfig)) {
      return true;
    }
    if (mode.equals(PredictionMode_SLL_getInstance())) {
      if (tempConfig.w2o_1) {
        var dup = new ATNConfigSet();
        var _iterator__ex2g4s = tempConfig.w();
        while (_iterator__ex2g4s.x()) {
          var c = _iterator__ex2g4s.y();
          var tempC = c;
          tempC = ATNConfig.e2n(tempC, Empty_getInstance());
          dup.e2p(tempC);
        }
        tempConfig = dup;
      }
    }
    var altSets = this.n31(tempConfig);
    return this.n34(altSets) && !this.o34(tempConfig);
  }
  c32(configs) {
    var _iterator__ex2g4s = configs.w();
    while (_iterator__ex2g4s.x()) {
      var c = _iterator__ex2g4s.y();
      var tmp = c.t2m_1;
      if (tmp instanceof RuleStopState) {
        return true;
      }
    }
    return false;
  }
  d32(configs) {
    var _iterator__ex2g4s = configs.w();
    while (_iterator__ex2g4s.x()) {
      var config = _iterator__ex2g4s.y();
      var tmp = config.t2m_1;
      if (!(tmp instanceof RuleStopState)) {
        return false;
      }
    }
    return true;
  }
  w31(altSets) {
    return this.x31(altSets);
  }
  o31(altSets) {
    return !this.p34(altSets);
  }
  p34(altSets) {
    var _iterator__ex2g4s = altSets.w();
    while (_iterator__ex2g4s.x()) {
      var alts = _iterator__ex2g4s.y();
      if (alts.h31() === 1) {
        return true;
      }
    }
    return false;
  }
  n34(altSets) {
    var _iterator__ex2g4s = altSets.w();
    while (_iterator__ex2g4s.x()) {
      var alts = _iterator__ex2g4s.y();
      if (alts.h31() > 1) {
        return true;
      }
    }
    return false;
  }
  y31(altSets) {
    var it = altSets.w();
    var first = it.y();
    while (it.x()) {
      var next = it.y();
      if (!next.equals(first)) {
        return false;
      }
    }
    return true;
  }
  v31(altSets) {
    var all = this.c33(altSets);
    if (all.h31() === 1) {
      return all.g31(0);
    }
    return 0;
  }
  c33(altSets) {
    var all = BitSet.c2p();
    var _iterator__ex2g4s = altSets.w();
    while (_iterator__ex2g4s.x()) {
      var alts = _iterator__ex2g4s.y();
      all.q34(alts);
    }
    return all;
  }
  n31(configs) {
    var configToAlts = new AltAndContextMap();
    var _iterator__ex2g4s = configs.w();
    while (_iterator__ex2g4s.x()) {
      var c = _iterator__ex2g4s.y();
      var alts = configToAlts.r3(c);
      if (alts == null) {
        alts = BitSet.c2p();
        // Inline function 'kotlin.collections.set' call
        var value = alts;
        configToAlts.l3(c, value);
      }
      alts.d2p(c.u2m_1);
    }
    return configToAlts.o3();
  }
  r34(configs) {
    var m = HashMap.y7();
    var _iterator__ex2g4s = configs.w();
    while (_iterator__ex2g4s.x()) {
      var c = _iterator__ex2g4s.y();
      var alts = m.r3(c.t2m_1);
      if (alts == null) {
        alts = BitSet.c2p();
        var tmp2 = c.t2m_1;
        // Inline function 'kotlin.collections.set' call
        var value = alts;
        m.l3(tmp2, value);
      }
      alts.d2p(c.u2m_1);
    }
    return m;
  }
  o34(configs) {
    var x = this.r34(configs);
    var _iterator__ex2g4s = x.o3().w();
    while (_iterator__ex2g4s.x()) {
      var alts = _iterator__ex2g4s.y();
      if (alts.h31() === 1) {
        return true;
      }
    }
    return false;
  }
  x31(altSets) {
    var viableAlts = BitSet.c2p();
    var _iterator__ex2g4s = altSets.w();
    while (_iterator__ex2g4s.x()) {
      var alts = _iterator__ex2g4s.y();
      var minAlt = alts.g31(0);
      viableAlts.d2p(minAlt);
      if (viableAlts.h31() > 1) {
        return 0;
      }
    }
    return viableAlts.g31(0);
  }
}
class PredictionMode extends Enum {}
class RangeTransition extends Transition {
  constructor(target, from, to) {
    super(target);
    this.u34_1 = from;
    this.v34_1 = to;
    this.w34_1 = 2;
  }
  d2u() {
    return this.w34_1;
  }
  i2v() {
    return Companion_getInstance_26().x28(this.u34_1, this.v34_1);
  }
  getLabel() {
    return this.i2v();
  }
  e2u(symbol, minVocabSymbol, maxVocabSymbol) {
    var containsLower = this.u34_1;
    return symbol <= this.v34_1 ? containsLower <= symbol : false;
  }
  toString() {
    var buf = StringBuilder.we("'");
    appendCodePoint(buf, this.u34_1);
    buf.t("'..'");
    appendCodePoint(buf, this.v34_1);
    buf.t("'");
    return buf.toString();
  }
}
class RuleStartState extends ATNState {
  constructor() {
    super();
    this.f2r_1 = null;
    this.g2r_1 = false;
    this.h2r_1 = 2;
  }
  y2c() {
    return this.h2r_1;
  }
}
class RuleStopState extends ATNState {
  constructor() {
    super();
    this.e35_1 = 7;
  }
  y2c() {
    return this.e35_1;
  }
}
class RuleTransition extends Transition {
  constructor(ruleStart, ruleIndex, precedence, followState) {
    super(ruleStart);
    this.a2f_1 = ruleIndex;
    this.b2f_1 = precedence;
    this.c2f_1 = followState;
    this.d2f_1 = 3;
    this.e2f_1 = true;
  }
  d2u() {
    return this.d2f_1;
  }
  c2u() {
    return this.e2f_1;
  }
  e2u(symbol, minVocabSymbol, maxVocabSymbol) {
    return false;
  }
}
class Companion_19 {
  b33(a, b) {
    if (a == null || a === Empty_getInstance()) {
      return b;
    }
    if (b == null || b === Empty_getInstance()) {
      return a;
    }
    var result = AND.g35(a, b);
    var tmp;
    if (result.f35_1.length === 1) {
      tmp = result.f35_1[0];
    } else {
      tmp = result;
    }
    return tmp;
  }
  f32(a, b) {
    if (a == null) {
      return b;
    }
    if (b == null) {
      return a;
    }
    if (a === Empty_getInstance() || b === Empty_getInstance()) {
      return Empty_getInstance();
    }
    var result = OR.i35(a, b);
    var tmp;
    if (result.h35_1.length === 1) {
      tmp = result.h35_1[0];
    } else {
      tmp = result;
    }
    return tmp;
  }
}
class SemanticContext {
  static k35() {
    return createThis(this);
  }
  e32(parser, parserCallStack) {
    return this;
  }
}
class Empty extends SemanticContext {
  static j35() {
    Empty_instance = null;
    var $this = this.k35();
    Empty_instance = $this;
    return $this;
  }
  l32(parser, parserCallStack) {
    return false;
  }
}
class Predicate extends SemanticContext {
  static l35() {
    var $this = this.k35();
    init_org_antlr_v4_kotlinruntime_atn_SemanticContext_Predicate($this);
    $this.p33_1 = -1;
    $this.q33_1 = -1;
    $this.r33_1 = false;
    return $this;
  }
  static s33(ruleIndex, predIndex, isCtxDependent) {
    var $this = this.k35();
    init_org_antlr_v4_kotlinruntime_atn_SemanticContext_Predicate($this);
    $this.p33_1 = ruleIndex;
    $this.q33_1 = predIndex;
    $this.r33_1 = isCtxDependent;
    return $this;
  }
  l32(parser, parserCallStack) {
    var tmp;
    if (this.r33_1) {
      tmp = parserCallStack;
    } else {
      tmp = null;
    }
    var localctx = tmp;
    return parser.a2i(localctx, this.p33_1, this.q33_1);
  }
  hashCode() {
    var hashCode = MurmurHash_instance.c2z();
    hashCode = MurmurHash_instance.i2n(hashCode, this.p33_1);
    hashCode = MurmurHash_instance.i2n(hashCode, this.q33_1);
    hashCode = MurmurHash_instance.i2n(hashCode, this.r33_1 ? 1 : 0);
    hashCode = MurmurHash_instance.k2n(hashCode, 3);
    return hashCode;
  }
  equals(other) {
    if (!(other instanceof Predicate)) {
      return false;
    }
    if (this === other) {
      return true;
    }
    return this.p33_1 === other.p33_1 && this.q33_1 === other.q33_1 && this.r33_1 === other.r33_1;
  }
  toString() {
    return '{' + this.p33_1 + ':' + this.q33_1 + '}?';
  }
}
class PrecedencePredicate extends SemanticContext {
  static o33(precedence) {
    precedence = precedence === VOID ? 0 : precedence;
    var $this = this.k35();
    $this.n33_1 = precedence;
    return $this;
  }
  l32(parser, parserCallStack) {
    return parser.b2i(parserCallStack, this.n33_1);
  }
  e32(parser, parserCallStack) {
    var tmp;
    if (parser.b2i(parserCallStack, this.n33_1)) {
      tmp = Empty_getInstance();
    } else {
      tmp = null;
    }
    return tmp;
  }
  m35(other) {
    return this.n33_1 - other.n33_1 | 0;
  }
  d(other) {
    return this.m35(other instanceof PrecedencePredicate ? other : THROW_CCE());
  }
  hashCode() {
    var hashCode = 1;
    hashCode = imul(31, hashCode) + this.n33_1 | 0;
    return hashCode;
  }
  equals(other) {
    if (!(other instanceof PrecedencePredicate)) {
      return false;
    }
    if (this === other) {
      return true;
    }
    return this.n33_1 === other.n33_1;
  }
  toString() {
    return '{' + this.n33_1 + '>=prec}?';
  }
}
class Operator extends SemanticContext {
  static n35() {
    return this.k35();
  }
}
class AND extends Operator {
  static g35(a, b) {
    var $this = this.n35();
    var operands = LinkedHashSet.e2();
    if (a instanceof AND) {
      operands.c2(asList(a.f35_1));
    } else {
      operands.z1(a);
    }
    if (b instanceof AND) {
      operands.c2(asList(b.f35_1));
    } else {
      operands.z1(b);
    }
    var precedencePredicates = filterPrecedencePredicates(Companion_instance_19, operands);
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!precedencePredicates.u()) {
      var reduced = Collections_instance.d27(precedencePredicates);
      operands.z1(reduced);
    }
    var tmp = $this;
    // Inline function 'kotlin.collections.toTypedArray' call
    tmp.f35_1 = copyToArray(operands);
    return $this;
  }
  equals(other) {
    if (this === other) {
      return true;
    }
    if (!(other instanceof AND)) {
      return false;
    }
    return contentEquals_0(this.f35_1, other.f35_1);
  }
  hashCode() {
    var fqn = 'org.antlr.v4.kotlinruntime.atn.SemanticContext.AND';
    var seed = imul(31, getStringHashCode(fqn)) + getKClass(AND).hashCode() | 0;
    return MurmurHash_instance.o35(this.f35_1, seed);
  }
  l32(parser, parserCallStack) {
    var indexedObject = this.f35_1;
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var operand = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      if (!operand.l32(parser, parserCallStack)) {
        return false;
      }
    }
    return true;
  }
  e32(parser, parserCallStack) {
    var differs = false;
    var operands = ArrayList.u1();
    var indexedObject = this.f35_1;
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var context = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      var evaluated = context.e32(parser, parserCallStack);
      differs = !!(differs | !(evaluated === context));
      if (evaluated == null) {
        return null;
      } else if (!(evaluated === Empty_getInstance())) {
        operands.z1(evaluated);
      }
    }
    if (!differs) {
      return this;
    }
    if (operands.u()) {
      return Empty_getInstance();
    }
    var result = operands.d2(0);
    var inductionVariable_0 = 1;
    var last_0 = operands.b2();
    if (inductionVariable_0 < last_0)
      do {
        var i = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        result = Companion_instance_19.b33(result, operands.d2(i));
      }
       while (inductionVariable_0 < last_0);
    return result;
  }
  toString() {
    return joinToString(this.f35_1, '&&');
  }
}
class OR extends Operator {
  static i35(a, b) {
    var $this = this.n35();
    var operands = LinkedHashSet.e2();
    if (a instanceof OR) {
      operands.c2(asList(a.h35_1));
    } else {
      operands.z1(a);
    }
    if (b instanceof OR) {
      operands.c2(asList(b.h35_1));
    } else {
      operands.z1(b);
    }
    var precedencePredicates = filterPrecedencePredicates(Companion_instance_19, operands);
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!precedencePredicates.u()) {
      var reduced = Collections_instance.e27(precedencePredicates);
      operands.z1(reduced);
    }
    var tmp = $this;
    // Inline function 'kotlin.collections.toTypedArray' call
    tmp.h35_1 = copyToArray(operands);
    return $this;
  }
  equals(other) {
    if (this === other) {
      return true;
    }
    if (!(other instanceof OR)) {
      return false;
    }
    return contentEquals_0(this.h35_1, other.h35_1);
  }
  hashCode() {
    var fqn = 'org.antlr.v4.kotlinruntime.atn.SemanticContext.OR';
    var seed = imul(31, getStringHashCode(fqn)) + getKClass(OR).hashCode() | 0;
    return MurmurHash_instance.o35(this.h35_1, seed);
  }
  l32(parser, parserCallStack) {
    var indexedObject = this.h35_1;
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var operand = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      if (operand.l32(parser, parserCallStack)) {
        return true;
      }
    }
    return false;
  }
  e32(parser, parserCallStack) {
    var differs = false;
    var operands = ArrayList.u1();
    var indexedObject = this.h35_1;
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var context = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      var evaluated = context.e32(parser, parserCallStack);
      differs = !!(differs | !(evaluated === context));
      if (evaluated === Empty_getInstance()) {
        return Empty_getInstance();
      } else if (!(evaluated == null)) {
        operands.z1(evaluated);
      }
    }
    if (!differs) {
      return this;
    }
    if (operands.u()) {
      return null;
    }
    var result = operands.d2(0);
    var inductionVariable_0 = 1;
    var last_0 = operands.b2();
    if (inductionVariable_0 < last_0)
      do {
        var i = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        result = Companion_instance_19.f32(result, operands.d2(i));
      }
       while (inductionVariable_0 < last_0);
    return result;
  }
  toString() {
    return joinToString(this.h35_1, '||');
  }
}
class Companion_20 {
  x2w(parent, returnState) {
    var tmp;
    if (returnState === 2147483647 && parent == null) {
      tmp = EmptyPredictionContext_getInstance();
    } else {
      tmp = SingletonPredictionContext.l2w(parent, returnState);
    }
    return tmp;
  }
}
class StarBlockStartState extends BlockStartState {
  constructor() {
    super();
    this.z35_1 = 5;
  }
  y2c() {
    return this.z35_1;
  }
}
class StarLoopEntryState extends DecisionState {
  constructor() {
    super();
    this.d2s_1 = null;
    this.e2s_1 = false;
    this.f2s_1 = 10;
  }
  y2c() {
    return this.f2s_1;
  }
}
class StarLoopbackState extends ATNState {
  constructor() {
    super();
    this.h36_1 = 9;
  }
  y2c() {
    return this.h36_1;
  }
}
class TokensStartState extends DecisionState {
  constructor() {
    super();
    this.r36_1 = 6;
  }
  y2c() {
    return this.r36_1;
  }
}
class Companion_21 {
  constructor() {
    Companion_instance_21 = this;
    this.s36_1 = 1;
    this.t36_1 = 2;
    this.u36_1 = 3;
    this.v36_1 = 4;
    this.w36_1 = 5;
    this.x36_1 = 6;
    this.y36_1 = 7;
    this.z36_1 = 8;
    this.a37_1 = 9;
    this.b37_1 = 10;
    var tmp = this;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.c37_1 = ['INVALID', 'EPSILON', 'RANGE', 'RULE', 'PREDICATE', 'ATOM', 'ACTION', 'SET', 'NOT_SET', 'WILDCARD', 'PRECEDENCE'];
  }
}
class WildcardTransition extends Transition {
  constructor(target) {
    super(target);
    this.f37_1 = 9;
  }
  d2u() {
    return this.f37_1;
  }
  e2u(symbol, minVocabSymbol, maxVocabSymbol) {
    return minVocabSymbol <= symbol ? symbol <= maxVocabSymbol : false;
  }
  toString() {
    return '.';
  }
}
class sam$kotlin_Comparator$0 {
  constructor(function_0) {
    this.g37_1 = function_0;
  }
  wg(a, b) {
    return this.g37_1(a, b);
  }
  compare(a, b) {
    return this.wg(a, b);
  }
  f4() {
    return this.g37_1;
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
class DFA {
  constructor(atnStartState, decision) {
    decision = decision === VOID ? 0 : decision;
    this.t2x_1 = atnStartState;
    this.u2x_1 = decision;
    this.v2x_1 = HashMap.y7();
    this.w2x_1 = null;
    var isPrecedenceDfa = false;
    var tmp = this.t2x_1;
    if (tmp instanceof StarLoopEntryState) {
      if (this.t2x_1.e2s_1) {
        isPrecedenceDfa = true;
        var precedenceState = DFAState.i2t(new ATNConfigSet());
        var tmp_0 = precedenceState;
        // Inline function 'kotlin.arrayOfNulls' call
        tmp_0.c2t_1 = Array(0);
        precedenceState.d2t_1 = false;
        precedenceState.g2t_1 = false;
        this.w2x_1 = precedenceState;
      }
    }
    this.x2x_1 = isPrecedenceDfa;
  }
  w30(precedence) {
    if (!this.x2x_1) {
      throw IllegalStateException.l4('Only precedence DFAs may contain a precedence start state.');
    }
    var edges = ensureNotNull(ensureNotNull(this.w2x_1).c2t_1);
    var tmp;
    if (precedence < 0 || precedence >= edges.length) {
      tmp = null;
    } else {
      tmp = edges[precedence];
    }
    return tmp;
  }
  a31(precedence, startState) {
    if (!this.x2x_1) {
      throw IllegalStateException.l4('Only precedence DFAs may contain a precedence start state.');
    }
    if (precedence < 0) {
      return Unit_instance;
    }
    var s0 = ensureNotNull(this.w2x_1);
    // Inline function 'com.strumenta.antlrkotlin.runtime.synchronized' call
    if (precedence >= ensureNotNull(s0.c2t_1).length) {
      s0.c2t_1 = copyOf(ensureNotNull(s0.c2t_1), precedence + 1 | 0);
    }
    ensureNotNull(s0.c2t_1)[precedence] = startState;
  }
  h37() {
    var result = ArrayList.v1(this.v2x_1.n3());
    // Inline function 'kotlin.collections.sortBy' call
    if (result.b2() > 1) {
      // Inline function 'kotlin.comparisons.compareBy' call
      var tmp = DFA$getStates$lambda;
      var tmp$ret$1 = new sam$kotlin_Comparator$0(tmp);
      sortWith(result, tmp$ret$1);
    }
    return result;
  }
  toString() {
    return this.a2e(Companion_getInstance_5().e2l_1);
  }
  a2e(vocabulary) {
    if (this.w2x_1 == null) {
      return '';
    }
    var serializer = new DFASerializer(this, vocabulary);
    return serializer.toString();
  }
  c2y() {
    if (this.w2x_1 == null) {
      return '';
    }
    var serializer = new LexerDFASerializer(this);
    return serializer.toString();
  }
}
class DFASerializer {
  constructor(dfa, vocabulary) {
    this.i37_1 = dfa;
    this.j37_1 = vocabulary;
  }
  toString() {
    if (this.i37_1.w2x_1 == null) {
      return 'null';
    }
    var buf = StringBuilder.s();
    var states = this.i37_1.h37();
    var _iterator__ex2g4s = states.w();
    while (_iterator__ex2g4s.x()) {
      var s = _iterator__ex2g4s.y();
      var n = 0;
      var edges = s.c2t_1;
      if (!(edges == null)) {
        n = edges.length;
      }
      var inductionVariable = 0;
      var last = n;
      if (inductionVariable < last)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var t = ensureNotNull(edges)[i];
          if (!(t == null) && !(t.a2t_1 === 2147483647)) {
            buf.t(this.k37(s));
            buf.t('-');
            buf.t(this.l37(i));
            buf.t('->');
            buf.t(this.k37(t));
            buf.t('\n');
          }
        }
         while (inductionVariable < last);
    }
    var output = buf.toString();
    // Inline function 'kotlin.text.ifEmpty' call
    var tmp;
    // Inline function 'kotlin.text.isEmpty' call
    if (charSequenceLength(output) === 0) {
      tmp = 'null';
    } else {
      tmp = output;
    }
    return tmp;
  }
  l37(i) {
    return this.j37_1.x29(i - 1 | 0);
  }
  k37(s) {
    var n = s.a2t_1;
    var baseStateStr = (s.d2t_1 ? ':' : '') + 's' + n + (s.g2t_1 ? '^' : '');
    var tmp;
    if (s.d2t_1) {
      var predicates = s.h2t_1;
      var tmp_0;
      if (!(predicates == null)) {
        tmp_0 = baseStateStr + '=>' + joinToString(predicates);
      } else {
        tmp_0 = baseStateStr + '=>' + s.e2t_1;
      }
      tmp = tmp_0;
    } else {
      tmp = baseStateStr;
    }
    return tmp;
  }
}
class PredPrediction {
  constructor(pred, alt) {
    this.j32_1 = pred;
    this.k32_1 = alt;
  }
  toString() {
    return '(' + toString_0(this.j32_1) + ', ' + this.k32_1 + ')';
  }
}
class DFAState {
  static m37() {
    var $this = createThis(this);
    init_org_antlr_v4_kotlinruntime_dfa_DFAState($this);
    return $this;
  }
  static i2t(configs) {
    var $this = createThis(this);
    init_org_antlr_v4_kotlinruntime_dfa_DFAState($this);
    $this.b2t_1 = configs;
    return $this;
  }
  hashCode() {
    var hash = MurmurHash_instance.h2n(7);
    hash = MurmurHash_instance.i2n(hash, this.b2t_1.hashCode());
    hash = MurmurHash_instance.k2n(hash, 1);
    return hash;
  }
  equals(other) {
    if (this === other) {
      return true;
    }
    if (!(other instanceof DFAState)) {
      return false;
    }
    return this.b2t_1.equals(other.b2t_1);
  }
  toString() {
    var buf = StringBuilder.s();
    buf.af(this.a2t_1);
    buf.t(':');
    buf.z(this.b2t_1);
    if (this.d2t_1) {
      buf.t('=>');
      var predicates = this.h2t_1;
      if (!(predicates == null)) {
        buf.t(joinToString(predicates));
      } else {
        buf.af(this.e2t_1);
      }
    }
    return buf.toString();
  }
}
class LexerDFASerializer extends DFASerializer {
  constructor(dfa) {
    super(dfa, Companion_getInstance_5().e2l_1);
  }
  l37(i) {
    var buf = StringBuilder.s();
    buf.t("'");
    appendCodePoint(buf, i);
    buf.t("'");
    return buf.toString();
  }
}
class Companion_22 {
  constructor() {
    this.p37_1 = 16;
    this.q37_1 = 8;
    this.r37_1 = 0.75;
  }
}
class SetIterator {
  constructor($outer, data) {
    this.v37_1 = $outer;
    this.s37_1 = data;
    this.t37_1 = 0;
    this.u37_1 = true;
  }
  x() {
    return this.t37_1 < this.s37_1.length;
  }
  y() {
    if (!this.x()) {
      throw NoSuchElementException.v5();
    }
    this.u37_1 = false;
    var _unary__edvuaz = this.t37_1;
    this.t37_1 = _unary__edvuaz + 1 | 0;
    return this.s37_1[_unary__edvuaz];
  }
  r5() {
    if (this.u37_1) {
      throw IllegalStateException.ac();
    }
    this.v37_1.k2o(this.s37_1[this.t37_1 - 1 | 0]);
    this.u37_1 = true;
  }
}
class DoubleKeyMap {
  constructor() {
    this.x33_1 = LinkedHashMap.mb();
  }
  a34(k1, k2, v) {
    var data2 = this.x33_1.r3(k1);
    var prev = null;
    if (data2 == null) {
      data2 = LinkedHashMap.mb();
      var tmp0 = this.x33_1;
      // Inline function 'kotlin.collections.set' call
      var value = data2;
      tmp0.l3(k1, value);
    } else {
      prev = data2.r3(k2);
    }
    // Inline function 'kotlin.collections.set' call
    data2.l3(k2, v);
    return prev;
  }
  y33(k1, k2) {
    var tmp0_elvis_lhs = this.x33_1.r3(k1);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return null;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var data2 = tmp;
    return data2.r3(k2);
  }
}
class Companion_23 {
  constructor() {
    this.w37_1 = 16;
    this.x37_1 = 8;
    this.y37_1 = 0.75;
  }
}
class Entry {
  constructor(key, value) {
    this.z37_1 = key;
    this.a38_1 = value;
  }
  toString() {
    return toString_1(this.z37_1) + ':' + toString_1(this.a38_1);
  }
  hashCode() {
    var result = this.z37_1 == null ? 0 : hashCode(this.z37_1);
    result = imul(result, 31) + (this.a38_1 == null ? 0 : hashCode(this.a38_1)) | 0;
    return result;
  }
  equals(other) {
    if (this === other)
      return true;
    if (!(other instanceof Entry))
      return false;
    var tmp0_other_with_cast = other instanceof Entry ? other : THROW_CCE();
    if (!equals(this.z37_1, tmp0_other_with_cast.z37_1))
      return false;
    if (!equals(this.a38_1, tmp0_other_with_cast.a38_1))
      return false;
    return true;
  }
}
class Companion_24 {
  constructor() {
    Companion_instance_24 = this;
    this.b38_1 = new Int32Array(0);
    this.c38_1 = 4;
    this.d38_1 = 2147483639;
  }
}
class IntegerList {
  q2h() {
    return this.e2h_1 === 0;
  }
  static e38() {
    Companion_getInstance_24();
    var $this = createThis(this);
    init_org_antlr_v4_kotlinruntime_misc_IntegerList($this);
    $this.d2h_1 = Companion_getInstance_24().b38_1;
    return $this;
  }
  y2b(value) {
    if (this.d2h_1.length === this.e2h_1) {
      ensureCapacity(this, this.e2h_1 + 1 | 0);
    }
    this.d2h_1[this.e2h_1] = value;
    this.e2h_1 = this.e2h_1 + 1 | 0;
  }
  d2(index) {
    if (index < 0 || index >= this.e2h_1) {
      throw IndexOutOfBoundsException.lc();
    }
    return this.d2h_1[index];
  }
  x3(index) {
    var value = this.d2(index);
    var inductionVariable = 0;
    var last = (this.e2h_1 - index | 0) - 1 | 0;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        this.d2h_1[index + i | 0] = this.d2h_1[(index + i | 0) + 1 | 0];
      }
       while (inductionVariable < last);
    this.d2h_1[this.e2h_1 - 1 | 0] = 0;
    this.e2h_1 = this.e2h_1 - 1 | 0;
    return value;
  }
  a28() {
    return this.e2h_1;
  }
  u3() {
    fill(this.d2h_1, 0);
    this.e2h_1 = 0;
  }
  m7() {
    var tmp;
    if (this.e2h_1 === 0) {
      tmp = Companion_getInstance_24().b38_1;
    } else {
      // Inline function 'kotlin.collections.copyOf' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp = this.d2h_1.slice();
    }
    return tmp;
  }
  equals(other) {
    if (other === this) {
      return true;
    }
    var tmp;
    if (!(other instanceof IntegerList)) {
      tmp = true;
    } else {
      tmp = !(this.e2h_1 === other.e2h_1);
    }
    if (tmp) {
      return false;
    }
    var inductionVariable = 0;
    var last = this.e2h_1;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (!(this.d2h_1[i] === other.d2h_1[i])) {
          return false;
        }
      }
       while (inductionVariable < last);
    return true;
  }
  hashCode() {
    var hashCode = 1;
    var inductionVariable = 0;
    var last = this.e2h_1;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        hashCode = imul(31, hashCode) + this.d2h_1[i] | 0;
      }
       while (inductionVariable < last);
    return hashCode;
  }
  toString() {
    return joinToString_0(this.m7());
  }
}
class IntegerStack extends IntegerList {
  static o2g() {
    var $this = this.e38();
    init_org_antlr_v4_kotlinruntime_misc_IntegerStack($this);
    return $this;
  }
  o2h(value) {
    return this.y2b(value);
  }
  s2h() {
    return this.x3(this.a28() - 1 | 0);
  }
  r2h() {
    return this.d2(this.a28() - 1 | 0);
  }
}
class Companion_25 {
  constructor() {
    Companion_instance_25 = this;
    this.u28_1 = 1000;
    this.v28_1 = new Interval(-1, -2);
    var tmp = this;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp.w28_1 = Array(1001);
  }
  x28(a, b) {
    if (!(a === b) || a < 0 || a > 1000) {
      return new Interval(a, b);
    }
    var interval = this.w28_1[a];
    if (interval == null) {
      interval = new Interval(a, a);
      this.w28_1[a] = interval;
    }
    return interval;
  }
}
class Interval {
  constructor(a, b) {
    Companion_getInstance_25();
    this.q28_1 = a;
    this.r28_1 = b;
  }
  f38(other) {
    return this.q28_1 < other.q28_1 && this.r28_1 < other.q28_1;
  }
  g38(other) {
    return this.q28_1 > other.r28_1;
  }
  h38(other) {
    return this.f38(other) || this.g38(other);
  }
  i38(other) {
    return this.q28_1 === (other.r28_1 + 1 | 0) || this.r28_1 === (other.q28_1 - 1 | 0);
  }
  j38(other) {
    var tmp = Companion_getInstance_25();
    var tmp0 = this.q28_1;
    // Inline function 'kotlin.math.min' call
    var b = other.q28_1;
    var tmp_0 = Math.min(tmp0, b);
    var tmp0_0 = this.r28_1;
    // Inline function 'kotlin.math.max' call
    var b_0 = other.r28_1;
    var tmp$ret$1 = Math.max(tmp0_0, b_0);
    return tmp.x28(tmp_0, tmp$ret$1);
  }
  equals(other) {
    var tmp;
    var tmp_0;
    if (other instanceof Interval) {
      tmp_0 = this.q28_1 === other.q28_1;
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = this.r28_1 === other.r28_1;
    } else {
      tmp = false;
    }
    return tmp;
  }
  hashCode() {
    var hash = 23;
    hash = imul(hash, 31) + this.q28_1 | 0;
    hash = imul(hash, 31) + this.r28_1 | 0;
    return hash;
  }
  toString() {
    return '' + this.q28_1 + '..' + this.r28_1;
  }
}
class Companion_26 {
  constructor() {
    Companion_instance_26 = this;
    var tmp = this;
    // Inline function 'kotlin.also' call
    var this_0 = this.x28(0, 1114111);
    this_0.f2m(true);
    tmp.j2v_1 = this_0;
    var tmp_0 = this;
    // Inline function 'kotlin.also' call
    var this_1 = IntervalSet.x2b();
    this_1.f2m(true);
    tmp_0.k2v_1 = this_1;
  }
  l2v(a) {
    var s = IntervalSet.x2b();
    s.y2b(a);
    return s;
  }
  x28(a, b) {
    var s = IntervalSet.x2b();
    s.z2p(a, b);
    return s;
  }
  k38(left, right) {
    if (left.u2e()) {
      return IntervalSet.x2b();
    }
    var result = IntervalSet.l38(left);
    if (right.u2e()) {
      return result;
    }
    var resultI = 0;
    var rightI = 0;
    $l$loop_4: while (resultI < result.v2b_1.b2() && rightI < right.v2b_1.b2()) {
      var resultInterval = result.v2b_1.d2(resultI);
      var rightInterval = right.v2b_1.d2(rightI);
      if (rightInterval.r28_1 < resultInterval.q28_1) {
        rightI = rightI + 1 | 0;
        continue $l$loop_4;
      }
      if (rightInterval.q28_1 > resultInterval.r28_1) {
        resultI = resultI + 1 | 0;
        continue $l$loop_4;
      }
      var beforeCurrent = null;
      var afterCurrent = null;
      if (rightInterval.q28_1 > resultInterval.q28_1) {
        beforeCurrent = new Interval(resultInterval.q28_1, rightInterval.q28_1 - 1 | 0);
      }
      if (rightInterval.r28_1 < resultInterval.r28_1) {
        afterCurrent = new Interval(rightInterval.r28_1 + 1 | 0, resultInterval.r28_1);
      }
      if (!(beforeCurrent == null)) {
        if (!(afterCurrent == null)) {
          result.v2b_1.v3(resultI, beforeCurrent);
          result.v2b_1.w3(resultI + 1 | 0, afterCurrent);
          resultI = resultI + 1 | 0;
          rightI = rightI + 1 | 0;
          continue $l$loop_4;
        } else {
          result.v2b_1.v3(resultI, beforeCurrent);
          resultI = resultI + 1 | 0;
          continue $l$loop_4;
        }
      } else {
        if (!(afterCurrent == null)) {
          result.v2b_1.v3(resultI, afterCurrent);
          rightI = rightI + 1 | 0;
          continue $l$loop_4;
        } else {
          result.v2b_1.x3(resultI);
          continue $l$loop_4;
        }
      }
    }
    return result;
  }
}
class IntervalSet {
  u2e() {
    return this.v2b_1.b2() === 0;
  }
  t2e() {
    if (this.u2e()) {
      throw RuntimeException.ba('set is empty');
    }
    return this.v2b_1.d2(0).q28_1;
  }
  f2m(value) {
    if (this.w2b_1 && !value) {
      throw IllegalStateException.l4("can't alter readonly IntervalSet");
    }
    this.w2b_1 = value;
  }
  static x2b() {
    Companion_getInstance_26();
    var $this = createThis(this);
    init_org_antlr_v4_kotlinruntime_misc_IntervalSet($this);
    $this.v2b_1 = ArrayList.y1(16);
    return $this;
  }
  static l38(set) {
    Companion_getInstance_26();
    var $this = createThis(this);
    init_org_antlr_v4_kotlinruntime_misc_IntervalSet($this);
    $this.v2b_1 = ArrayList.y1(set.v2b_1.b2());
    $this.f2f(set);
    return $this;
  }
  y2b(el) {
    return this.z2p(el, el);
  }
  z2p(a, b) {
    return add(this, Companion_getInstance_25().x28(a, b));
  }
  f2f(set) {
    if (set instanceof IntervalSet) {
      var setIntervals = set.v2b_1;
      var inductionVariable = 0;
      var last = setIntervals.b2();
      if (inductionVariable < last)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var I = setIntervals.d2(i);
          this.z2p(I.q28_1, I.r28_1);
        }
         while (inductionVariable < last);
    } else {
      var _iterator__ex2g4s = set.m38().w();
      while (_iterator__ex2g4s.x()) {
        var value = _iterator__ex2g4s.y();
        this.y2b(value);
      }
    }
    return this;
  }
  w2w(elements) {
    if (elements.u2e()) {
      return IntervalSet.x2b();
    }
    var tmp;
    if (elements instanceof IntervalSet) {
      tmp = elements;
    } else {
      var temp = IntervalSet.x2b();
      temp.f2f(elements);
      tmp = temp;
    }
    var vocabularyIS = tmp;
    return vocabularyIS.n38(this);
  }
  n38(a) {
    if (a.u2e()) {
      return IntervalSet.l38(this);
    }
    if (a instanceof IntervalSet) {
      return Companion_getInstance_26().k38(this, a);
    }
    var other = IntervalSet.x2b();
    other.f2f(a);
    return Companion_getInstance_26().k38(this, other);
  }
  m2d(a) {
    var o = IntervalSet.x2b();
    o.f2f(this);
    o.f2f(a);
    return o;
  }
  vk(el) {
    var n = this.v2b_1.b2();
    var l = 0;
    var r = n - 1 | 0;
    while (l <= r) {
      var m = (l + r | 0) / 2 | 0;
      var I = this.v2b_1.d2(m);
      var a = I.q28_1;
      var b = I.r28_1;
      if (b < el) {
        l = m + 1 | 0;
      } else if (a > el) {
        r = m - 1 | 0;
      } else {
        return true;
      }
    }
    return false;
  }
  hashCode() {
    var hash = MurmurHash_instance.c2z();
    var _iterator__ex2g4s = this.v2b_1.w();
    while (_iterator__ex2g4s.x()) {
      var I = _iterator__ex2g4s.y();
      hash = MurmurHash_instance.i2n(hash, I.q28_1);
      hash = MurmurHash_instance.i2n(hash, I.r28_1);
    }
    hash = MurmurHash_instance.k2n(hash, imul(this.v2b_1.b2(), 2));
    return hash;
  }
  equals(other) {
    var tmp;
    if (other instanceof IntervalSet) {
      tmp = equals(this.v2b_1, other.v2b_1);
    } else {
      tmp = false;
    }
    return tmp;
  }
  toString() {
    return this.o38(false);
  }
  o38(elemAreChar) {
    if (this.v2b_1.u()) {
      return '{}';
    }
    var buf = StringBuilder.eb(64);
    if (this.a28() > 1) {
      buf.t('{');
    }
    var n = this.v2b_1.b2();
    var index = 0;
    while (index < n) {
      var _unary__edvuaz = index;
      index = _unary__edvuaz + 1 | 0;
      var I = this.v2b_1.d2(_unary__edvuaz);
      var a = I.q28_1;
      var b = I.r28_1;
      if (a === b) {
        if (a === -1) {
          buf.t('<EOF>');
        } else if (elemAreChar) {
          buf.t("'");
          appendCodePoint(buf, a);
          buf.t("'");
        } else {
          buf.af(a);
        }
      } else {
        if (elemAreChar) {
          buf.t("'");
          appendCodePoint(buf, a);
          buf.t("'..'");
          appendCodePoint(buf, b);
          buf.t("'");
        } else {
          buf.af(a);
          buf.t('..');
          buf.af(b);
        }
      }
      if (index < n) {
        buf.t(', ');
      }
    }
    if (this.a28() > 1) {
      buf.t('}');
    }
    return buf.toString();
  }
  a2e(vocabulary) {
    if (this.v2b_1.u()) {
      return '{}';
    }
    var buf = StringBuilder.eb(64);
    if (this.a28() > 1) {
      buf.t('{');
    }
    var n = this.v2b_1.b2();
    var index = 0;
    while (index < n) {
      var _unary__edvuaz = index;
      index = _unary__edvuaz + 1 | 0;
      var I = this.v2b_1.d2(_unary__edvuaz);
      var a = I.q28_1;
      var b = I.r28_1;
      if (a === b) {
        buf.t(elementName(this, vocabulary, a));
      } else {
        var inductionVariable = a;
        if (inductionVariable <= b)
          do {
            var p = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            if (p > a) {
              buf.t(', ');
            }
            buf.t(elementName(this, vocabulary, p));
          }
           while (!(p === b));
      }
      if (index < n) {
        buf.t(', ');
      }
    }
    if (this.a28() > 1) {
      buf.t('}');
    }
    return buf.toString();
  }
  a28() {
    var numIntervals = this.v2b_1.b2();
    if (numIntervals === 1) {
      var firstInterval = this.v2b_1.d2(0);
      return (firstInterval.r28_1 - firstInterval.q28_1 | 0) + 1 | 0;
    }
    var n = 0;
    var inductionVariable = 0;
    if (inductionVariable < numIntervals)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var I = this.v2b_1.d2(i);
        n = n + ((I.r28_1 - I.q28_1 | 0) + 1 | 0) | 0;
      }
       while (inductionVariable < numIntervals);
    return n;
  }
  m38() {
    var values = ArrayList.y1(32);
    var n = this.v2b_1.b2();
    var inductionVariable = 0;
    if (inductionVariable < n)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var I = this.v2b_1.d2(i);
        var a = I.q28_1;
        var b = I.r28_1;
        var inductionVariable_0 = a;
        if (inductionVariable_0 <= b)
          do {
            var v = inductionVariable_0;
            inductionVariable_0 = inductionVariable_0 + 1 | 0;
            values.z1(v);
          }
           while (!(v === b));
      }
       while (inductionVariable < n);
    return values;
  }
  h2f(el) {
    if (this.w2b_1) {
      throw IllegalStateException.l4("can't alter readonly IntervalSet");
    }
    var n = this.v2b_1.b2();
    var inductionVariable = 0;
    if (inductionVariable < n)
      $l$loop_2: do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var I = this.v2b_1.d2(i);
        var a = I.q28_1;
        var b = I.r28_1;
        if (el < a) {
          break $l$loop_2;
        }
        if (el === a && el === b) {
          this.v2b_1.x3(i);
          break $l$loop_2;
        }
        if (el === a) {
          I.q28_1 = I.q28_1 + 1 | 0;
          break $l$loop_2;
        }
        if (el === b) {
          I.r28_1 = I.r28_1 - 1 | 0;
          break $l$loop_2;
        }
        if (el < b) {
          var oldB = I.r28_1;
          I.r28_1 = el - 1 | 0;
          this.z2p(el + 1 | 0, oldB);
        }
      }
       while (inductionVariable < n);
  }
}
class MurmurHash {
  constructor() {
    this.g2n_1 = 0;
  }
  h2n(seed) {
    return seed;
  }
  c2z(seed, $super) {
    seed = seed === VOID ? 0 : seed;
    return $super === VOID ? this.h2n(seed) : $super.h2n.call(this, seed);
  }
  i2n(hash, value) {
    var tempHash = hash;
    var c1 = -862048943;
    var c2 = 461845907;
    var r1 = 15;
    var r2 = 13;
    var m = 5;
    var n = -430675100;
    var k = value;
    k = imul(k, c1);
    k = k << r1 | (k >>> (32 - r1 | 0) | 0);
    k = imul(k, c2);
    tempHash = tempHash ^ k;
    tempHash = tempHash << r2 | (tempHash >>> (32 - r2 | 0) | 0);
    tempHash = imul(tempHash, m) + n | 0;
    return tempHash;
  }
  j2n(hash, value) {
    var tmp1_elvis_lhs = value == null ? null : hashCode(value);
    return this.i2n(hash, tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs);
  }
  k2n(hash, numberOfWords) {
    var tempHash = hash;
    tempHash = tempHash ^ imul(numberOfWords, 4);
    tempHash = tempHash ^ (tempHash >>> 16 | 0);
    tempHash = imul(tempHash, -2048144789);
    tempHash = tempHash ^ (tempHash >>> 13 | 0);
    tempHash = imul(tempHash, -1028477387);
    tempHash = tempHash ^ (tempHash >>> 16 | 0);
    return tempHash;
  }
  o35(data, seed) {
    var hash = this.h2n(seed);
    var inductionVariable = 0;
    var last = data.length;
    while (inductionVariable < last) {
      var value = data[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      hash = this.j2n(hash, value);
    }
    hash = this.k2n(hash, data.length);
    return hash;
  }
}
class Companion_27 {
  constructor() {
    Companion_instance_27 = this;
    this.k2x_1 = new ObjectEqualityComparator();
  }
}
class ObjectEqualityComparator extends AbstractEqualityComparator {
  constructor() {
    Companion_getInstance_27();
    super();
  }
  o2o(obj) {
    var tmp1_elvis_lhs = obj == null ? null : hashCode(obj);
    return tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
  }
  q2o(a, b) {
    return a == null && b == null || equals(a, b);
  }
}
class Utils {
  p2i(s, escapeSpaces) {
    var buf = StringBuilder.s();
    var indexedObject = toCharArray(s);
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var c = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      if (c === _Char___init__impl__6a9atx(32) && escapeSpaces)
        buf.t('\xB7');
      else if (c === _Char___init__impl__6a9atx(9))
        buf.t('\\t');
      else if (c === _Char___init__impl__6a9atx(10))
        buf.t('\\n');
      else if (c === _Char___init__impl__6a9atx(13))
        buf.t('\\r');
      else
        buf.v(c);
    }
    return buf.toString();
  }
}
class TerminalNode {}
class ErrorNode {}
class TerminalNodeImpl {
  constructor(symbol) {
    this.p38_1 = symbol;
    this.q38_1 = null;
    this.r38_1 = 0;
  }
  w2k() {
    return this.p38_1;
  }
  m2k() {
    return this.r38_1;
  }
  j1f() {
    return ensureNotNull(this.w2k().j1f());
  }
  r2k(value) {
    this.q38_1 = value;
  }
  t2k(i) {
    return null;
  }
  toString() {
    var tmp;
    if (this.w2k().d1s() === -1) {
      tmp = '<EOF>';
    } else {
      tmp = ensureNotNull(this.w2k().j1f());
    }
    return tmp;
  }
}
class ErrorNodeImpl extends TerminalNodeImpl {}
class Companion_28 {
  constructor() {
    Companion_instance_28 = this;
    this.s38_1 = new ParseTreeWalker();
  }
}
class ParseTreeWalker {
  constructor() {
    Companion_getInstance_28();
  }
  t38(listener, t) {
    if (isInterface(t, ErrorNode)) {
      listener.z2j(t);
      return Unit_instance;
    } else {
      if (isInterface(t, TerminalNode)) {
        listener.y2j(t);
        return Unit_instance;
      }
    }
    var r = isInterface(t, RuleNode) ? t : THROW_CCE();
    this.u38(listener, r);
    var n = r.m2k();
    var inductionVariable = 0;
    if (inductionVariable < n)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        this.t38(listener, ensureNotNull(r.t2k(i)));
      }
       while (inductionVariable < n);
    this.v38(listener, r);
  }
  u38(listener, r) {
    var tmp = r.n2k();
    var ctx = tmp instanceof ParserRuleContext ? tmp : THROW_CCE();
    listener.r2j(ctx);
    ctx.s2j(listener);
  }
  v38(listener, r) {
    var tmp = r.n2k();
    var ctx = tmp instanceof ParserRuleContext ? tmp : THROW_CCE();
    ctx.u2j(listener);
    listener.v2j(ctx);
  }
}
class CharStreams extends AbstractCharStreams {
  constructor() {
    CharStreams_instance = null;
    super();
    CharStreams_instance = this;
  }
}
class BitSet {
  static w38(size) {
    var $this = createThis(this);
    var tmp = $this;
    // Inline function 'com.strumenta.antlrkotlin.runtime.newArray' call
    tmp.b2p_1 = Array(size);
    // Inline function 'kotlin.require' call
    if (!(size >= 0)) {
      var message = 'The initial bitset size must be equal or greater than 0';
      throw IllegalArgumentException.m1(toString_0(message));
    }
    return $this;
  }
  static c2p() {
    return this.w38(64);
  }
  d2p(bitIndex) {
    if (bitIndex < 0) {
      throw IndexOutOfBoundsException.mc('bitIndex < 0: ' + bitIndex);
    }
    this.b2p_1[bitIndex] = true;
  }
  v2w(bitIndex) {
    if (bitIndex < 0) {
      throw IndexOutOfBoundsException.mc('bitIndex < 0: ' + bitIndex);
    }
    delete(this.b2p_1[bitIndex]);
  }
  d2(bitIndex) {
    if (bitIndex < 0) {
      throw IndexOutOfBoundsException.mc('bitIndex < 0: ' + bitIndex);
    }
    if (bitIndex >= this.b2p_1.length) {
      return false;
    }
    return this.b2p_1[bitIndex] === true;
  }
  h31() {
    var c = 0;
    var inductionVariable = 0;
    var last = this.b2p_1.length - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (this.b2p_1[i] === true) {
          c = c + 1 | 0;
        }
      }
       while (inductionVariable <= last);
    return c;
  }
  g31(startIndex) {
    if (startIndex < 0) {
      throw IndexOutOfBoundsException.mc('fromIndex < 0: ' + startIndex);
    }
    if (startIndex >= this.b2p_1.length) {
      return -1;
    }
    var inductionVariable = startIndex;
    var last = this.b2p_1.length;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (this.b2p_1[i] === true) {
          return i;
        }
      }
       while (inductionVariable < last);
    return -1;
  }
  q34(another) {
    var inductionVariable = 0;
    var last = another.b2p_1.length;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var result = this.b2p_1[i] === true || another.b2p_1[i] === true;
        if (result) {
          this.b2p_1[i] = true;
        }
      }
       while (inductionVariable < last);
  }
  equals(other) {
    var tmp;
    if (this === other) {
      tmp = true;
    } else {
      var tmp_0;
      if (other instanceof BitSet) {
        tmp_0 = contentEquals_1(this, this.b2p_1, other.b2p_1);
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    }
    return tmp;
  }
  hashCode() {
    var fqn = 'com.strumenta.antlrkotlin.runtime.BitSet';
    var hashCode = MurmurHash_instance.h2n(getStringHashCode(fqn));
    var on = 0;
    var inductionVariable = 0;
    var last = this.b2p_1.length - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (this.b2p_1[i] === true) {
          hashCode = MurmurHash_instance.i2n(hashCode, i);
          on = on + 1 | 0;
        }
      }
       while (inductionVariable <= last);
    return MurmurHash_instance.k2n(hashCode, on);
  }
  toString() {
    var sb = StringBuilder.s();
    var first = true;
    sb.t('{');
    var index = this.g31(0);
    while (!(index === -1)) {
      if (!first) {
        sb.t(', ');
      } else {
        first = false;
      }
      sb.af(index);
      index = this.g31(index + 1 | 0);
    }
    sb.t('}');
    return sb.toString();
  }
}
class IdentityEntry {
  constructor($outer, key, value) {
    this.a39_1 = $outer;
    this.y38_1 = key;
    this.z38_1 = value;
  }
  j3() {
    return this.y38_1;
  }
  k3() {
    return this.z38_1;
  }
}
class IdentityEntriesView$iterator$1 {
  constructor($iterator, this$0) {
    this.c39_1 = $iterator;
    this.d39_1 = this$0;
    this.b39_1 = null;
  }
  x() {
    return this.c39_1.x();
  }
  y() {
    var _destruct__k2r9zo = this.c39_1.y();
    var key = component1(_destruct__k2r9zo);
    var value = component2(_destruct__k2r9zo);
    var entry = new IdentityEntry(this.d39_1, key, value);
    this.b39_1 = entry;
    return entry;
  }
  r5() {
    // Inline function 'kotlin.checkNotNull' call
    var tmp0 = this.b39_1;
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.checkNotNull' call
      if (tmp0 == null) {
        var message = 'Required value was null.';
        throw IllegalStateException.l4(toString_0(message));
      } else {
        tmp$ret$1 = tmp0;
        break $l$block;
      }
    }
    var lastEntry = tmp$ret$1;
    remove(this.d39_1, lastEntry.y38_1, lastEntry.z38_1);
  }
}
class IdentityEntriesView extends AbstractMutableSet {
  static e39(jsMap) {
    var $this = this.h7();
    $this.x38_1 = jsMap;
    return $this;
  }
  b2() {
    return this.x38_1.size;
  }
  u() {
    return this.x38_1.size === 0;
  }
  f39(element) {
    throw UnsupportedOperationException.l9('Adding is not supported on entries');
  }
  z1(element) {
    return this.f39((!(element == null) ? isInterface(element, MutableEntry) : false) ? element : THROW_CCE());
  }
  g39(element) {
    // Inline function 'com.strumenta.antlrkotlin.runtime.undefinedToNull' call
    var value = element.j3();
    var k = value === undefined ? null : value;
    return this.x38_1.has(k) && this.x38_1.get(k) === element.k3();
  }
  g2(element) {
    if (!(!(element == null) ? isInterface(element, MutableEntry) : false))
      return false;
    return this.g39((!(element == null) ? isInterface(element, MutableEntry) : false) ? element : THROW_CCE());
  }
  w() {
    var iterator_0 = toKotlinIterator(iterator(this.x38_1));
    return new IdentityEntriesView$iterator$1(iterator_0, this);
  }
}
class IdentityHashMap {
  constructor() {
    this.h39_1 = new Map();
  }
  b2() {
    return this.h39_1.size;
  }
  n3() {
    return IdentityKeysView.j39(this);
  }
  o3() {
    return IdentityValuesView.l39(this);
  }
  m2() {
    return IdentityEntriesView.e39(this.h39_1);
  }
  u() {
    return this.h39_1.size === 0;
  }
  r3(key) {
    // Inline function 'com.strumenta.antlrkotlin.runtime.undefinedToNull' call
    var k = key === undefined ? null : key;
    // Inline function 'com.strumenta.antlrkotlin.runtime.undefinedToNull' call
    var value = this.h39_1.get(k);
    return value === undefined ? null : value;
  }
  l3(key, value) {
    // Inline function 'com.strumenta.antlrkotlin.runtime.undefinedToNull' call
    var k = key === undefined ? null : key;
    var previousValue = this.h39_1.get(k);
    this.h39_1.set(k, value);
    // Inline function 'com.strumenta.antlrkotlin.runtime.undefinedToNull' call
    return previousValue === undefined ? null : previousValue;
  }
  m3(key) {
    // Inline function 'com.strumenta.antlrkotlin.runtime.undefinedToNull' call
    var k = key === undefined ? null : key;
    var removedValue = this.h39_1.get(k);
    this.h39_1.delete(k);
    // Inline function 'com.strumenta.antlrkotlin.runtime.undefinedToNull' call
    return removedValue === undefined ? null : removedValue;
  }
  p3(key) {
    // Inline function 'com.strumenta.antlrkotlin.runtime.undefinedToNull' call
    var k = key === undefined ? null : key;
    return this.h39_1.has(k);
  }
  q3(value) {
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s = toKotlinIterator(this.h39_1.values());
    while (_iterator__ex2g4s.x()) {
      var v = _iterator__ex2g4s.y();
      if (v === value) {
        return true;
      }
    }
    return false;
  }
}
class IdentityKeysView$iterator$1 {
  constructor($entriesIterator) {
    this.m39_1 = $entriesIterator;
  }
  x() {
    return this.m39_1.x();
  }
  y() {
    return this.m39_1.y().j3();
  }
  r5() {
    return this.m39_1.r5();
  }
}
class IdentityKeysView extends AbstractMutableSet {
  static j39(map) {
    var $this = this.h7();
    $this.i39_1 = map;
    return $this;
  }
  b2() {
    return this.i39_1.b2();
  }
  u() {
    return this.i39_1.u();
  }
  p8(element) {
    return this.i39_1.p3(element);
  }
  g2(element) {
    if (!true)
      return false;
    return this.p8(element);
  }
  k9(element) {
    throw UnsupportedOperationException.l9('Adding is not supported on keys');
  }
  z1(element) {
    return this.k9(element);
  }
  w() {
    var entriesIterator = this.i39_1.m2().w();
    return new IdentityKeysView$iterator$1(entriesIterator);
  }
}
class IdentityValuesView$iterator$1 {
  constructor($entriesIterator) {
    this.n39_1 = $entriesIterator;
  }
  x() {
    return this.n39_1.x();
  }
  y() {
    return this.n39_1.y().k3();
  }
  r5() {
    return this.n39_1.r5();
  }
}
class IdentityValuesView extends AbstractMutableCollection {
  static l39(map) {
    var $this = this.o5();
    $this.k39_1 = map;
    return $this;
  }
  b2() {
    return this.k39_1.b2();
  }
  u() {
    return this.k39_1.u();
  }
  z8(element) {
    throw UnsupportedOperationException.l9('Adding is not supported on values');
  }
  z1(element) {
    return this.z8(element);
  }
  y8(element) {
    return this.k39_1.q3(element);
  }
  g2(element) {
    if (!true)
      return false;
    return this.y8(element);
  }
  w() {
    var entriesIterator = this.k39_1.m2().w();
    return new IdentityValuesView$iterator$1(entriesIterator);
  }
}
class KotlinIterator {
  constructor(jsIterator) {
    this.o39_1 = jsIterator;
    this.p39_1 = null;
  }
  x() {
    if (this.p39_1 == null) {
      this.p39_1 = this.o39_1.next();
    }
    var tmp0_safe_receiver = this.p39_1;
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.done;
    var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : !tmp1_safe_receiver;
    return tmp2_elvis_lhs == null ? false : tmp2_elvis_lhs;
  }
  y() {
    var tmp0_elvis_lhs = this.p39_1;
    var value = tmp0_elvis_lhs == null ? this.o39_1.next() : tmp0_elvis_lhs;
    this.p39_1 = null;
    if (value.done) {
      throw NoSuchElementException.v5();
    }
    return value.value;
  }
}
//endregion
function isBmpCodePoint(codePoint) {
  return (codePoint >>> 16 | 0) === 0;
}
function isValidCodePoint(codePoint) {
  return 0 <= codePoint ? codePoint <= 1114111 : false;
}
function highSurrogate(codePoint) {
  return numberToChar((codePoint >>> 10 | 0) + 55232 | 0);
}
function lowSurrogate(codePoint) {
  return numberToChar((codePoint & 1023) + 56320 | 0);
}
var Collections_instance;
function Collections_getInstance() {
  return Collections_instance;
}
var StdPrintStream_instance;
function StdPrintStream_getInstance() {
  return StdPrintStream_instance;
}
var ErrPrintStream_instance;
function ErrPrintStream_getInstance() {
  return ErrPrintStream_instance;
}
var System_instance;
function System_getInstance() {
  if (System_instance === VOID)
    new System();
  return System_instance;
}
function appendCodePoint(_this__u8e3s4, codePoint) {
  if (isBmpCodePoint(codePoint)) {
    _this__u8e3s4.v(numberToChar(codePoint));
  } else if (isValidCodePoint(codePoint)) {
    _this__u8e3s4.v(highSurrogate(codePoint));
    _this__u8e3s4.v(lowSurrogate(codePoint));
  } else {
    throw IllegalArgumentException.m1('Not a valid Unicode code point: ' + toHex(codePoint));
  }
  return _this__u8e3s4;
}
function get_hexFormat() {
  _init_properties_Int_ext_kt__26f69c();
  return hexFormat;
}
var hexFormat;
function toHex(_this__u8e3s4) {
  _init_properties_Int_ext_kt__26f69c();
  return toHexString(_this__u8e3s4, get_hexFormat());
}
var properties_initialized_Int_ext_kt_32ewk2;
function _init_properties_Int_ext_kt__26f69c() {
  if (!properties_initialized_Int_ext_kt_32ewk2) {
    properties_initialized_Int_ext_kt_32ewk2 = true;
    // Inline function 'kotlin.text.HexFormat' call
    // Inline function 'kotlin.apply' call
    var this_0 = new Builder();
    this_0.gm_1 = true;
    // Inline function 'kotlin.text.Builder.number' call
    var $this$number = this_0.jm();
    $this$number.ul('0x');
    $this$number.rl_1 = true;
    hexFormat = this_0.vl();
  }
}
function codePointIndicesFast(str) {
  var strLength = str.length;
  var intArray = new Int32Array(strLength + 1 | 0);
  var size = 0;
  var i = 1;
  var _unary__edvuaz = size;
  size = _unary__edvuaz + 1 | 0;
  intArray[_unary__edvuaz] = 0;
  while (i < strLength) {
    if (!hasSurrogatePairAtFast(str, i)) {
      var _unary__edvuaz_0 = size;
      size = _unary__edvuaz_0 + 1 | 0;
      intArray[_unary__edvuaz_0] = i;
    }
    i = i + 1 | 0;
  }
  // Inline function 'kotlin.math.min' call
  var a = size;
  var tmp$ret$0 = Math.min(a, strLength);
  return new Pair(intArray, tmp$ret$0);
}
function hasSurrogatePairAtFast(str, index) {
  // Inline function 'kotlin.code' call
  var this_0 = charCodeAt(str, index - 1 | 0);
  var containsArg = Char__toInt_impl_vasixd(this_0);
  if (55296 <= containsArg ? containsArg <= 56319 : false) {
    // Inline function 'kotlin.code' call
    var this_1 = charCodeAt(str, index);
    var containsArg_0 = Char__toInt_impl_vasixd(this_1);
    return 56320 <= containsArg_0 ? containsArg_0 <= 57343 : false;
  }
  return false;
}
var Companion_instance;
function Companion_getInstance() {
  if (Companion_instance === VOID)
    new Companion();
  return Companion_instance;
}
function init_org_antlr_v4_kotlinruntime_CommonToken(_this__u8e3s4) {
  Companion_getInstance();
  _this__u8e3s4.a29_1 = null;
  _this__u8e3s4.b29_1 = 0;
  _this__u8e3s4.c29_1 = 0;
  _this__u8e3s4.d29_1 = -1;
  _this__u8e3s4.e29_1 = 0;
  _this__u8e3s4.f29_1 = -1;
  _this__u8e3s4.g29_1 = 0;
  _this__u8e3s4.h29_1 = 0;
}
var Companion_instance_0;
function Companion_getInstance_0() {
  if (Companion_instance_0 === VOID)
    new Companion_0();
  return Companion_instance_0;
}
var Companion_instance_1;
function Companion_getInstance_1() {
  if (Companion_instance_1 === VOID)
    new Companion_1();
  return Companion_instance_1;
}
var DummyTokenStream_instance;
function DummyTokenStream_getInstance() {
  return DummyTokenStream_instance;
}
function init_org_antlr_v4_kotlinruntime_InputMismatchException(_this__u8e3s4) {
  captureStack(_this__u8e3s4, _this__u8e3s4.i2d_1);
}
var Companion_instance_2;
function Companion_getInstance_2() {
  return Companion_instance_2;
}
var Companion_instance_3;
function Companion_getInstance_3() {
  if (Companion_instance_3 === VOID)
    new Companion_3();
  return Companion_instance_3;
}
function init_org_antlr_v4_kotlinruntime_ParserRuleContext(_this__u8e3s4) {
  Companion_getInstance_3();
  _this__u8e3s4.l2j_1 = null;
  _this__u8e3s4.m2j_1 = null;
  _this__u8e3s4.n2j_1 = null;
  _this__u8e3s4.o2j_1 = null;
}
var Companion_instance_4;
function Companion_getInstance_4() {
  if (Companion_instance_4 === VOID)
    new Companion_4();
  return Companion_instance_4;
}
function init_org_antlr_v4_kotlinruntime_RuleContext(_this__u8e3s4) {
  _this__u8e3s4.c2e_1 = null;
  _this__u8e3s4.d2e_1 = -1;
  _this__u8e3s4.e2e_1 = Companion_getInstance_25().v28_1;
  _this__u8e3s4.f2e_1 = -1;
  _this__u8e3s4.g2e_1 = 0;
}
var RuntimeMetaData_instance;
function RuntimeMetaData_getInstance() {
  return RuntimeMetaData_instance;
}
function codePoint($this, index) {
  if (!(0 <= index ? index < $this.m2l_1 : false)) {
    return -1;
  }
  var char = charCodeAt($this.j2l_1, $this.l2l_1[index]);
  if (isHighSurrogate(char)) {
    var containsUpper = $this.m2l_1;
    var containsArg = index + 1 | 0;
    if (0 <= containsArg ? containsArg < containsUpper : false) {
      var low = charCodeAt($this.j2l_1, $this.l2l_1[index] + 1 | 0);
      return toCodePoint($this, char, low);
    }
    return -1;
  }
  // Inline function 'kotlin.code' call
  return Char__toInt_impl_vasixd(char);
}
function toCodePoint($this, high, low) {
  // Inline function 'kotlin.code' call
  var tmp = Char__toInt_impl_vasixd(high) << 10;
  // Inline function 'kotlin.code' call
  return (tmp + Char__toInt_impl_vasixd(low) | 0) + -56613888 | 0;
}
var Companion_instance_5;
function Companion_getInstance_5() {
  if (Companion_instance_5 === VOID)
    new Companion_5();
  return Companion_instance_5;
}
var Companion_instance_6;
function Companion_getInstance_6() {
  if (Companion_instance_6 === VOID)
    new Companion_6();
  return Companion_instance_6;
}
var Companion_instance_7;
function Companion_getInstance_7() {
  return Companion_instance_7;
}
var Companion_instance_8;
function Companion_getInstance_8() {
  return Companion_instance_8;
}
function init_org_antlr_v4_kotlinruntime_atn_ATNConfig(_this__u8e3s4) {
  _this__u8e3s4.v2m_1 = null;
  _this__u8e3s4.w2m_1 = 0;
}
var ConfigEqualityComparator_instance;
function ConfigEqualityComparator_getInstance() {
  if (ConfigEqualityComparator_instance === VOID)
    new ConfigEqualityComparator();
  return ConfigEqualityComparator_instance;
}
var Companion_instance_9;
function Companion_getInstance_9() {
  if (Companion_instance_9 === VOID)
    new Companion_9();
  return Companion_instance_9;
}
function init_org_antlr_v4_kotlinruntime_atn_ATNDeserializationOptions(_this__u8e3s4) {
  Companion_getInstance_9();
  _this__u8e3s4.q2p_1 = false;
  _this__u8e3s4.r2p_1 = false;
  _this__u8e3s4.s2p_1 = false;
}
var Companion_instance_10;
function Companion_getInstance_10() {
  return Companion_instance_10;
}
function deserializeSets($this, data, p, sets) {
  var pp = p;
  var _unary__edvuaz = pp;
  pp = _unary__edvuaz + 1 | 0;
  var nSets = data[_unary__edvuaz];
  var inductionVariable = 0;
  if (inductionVariable < nSets)
    do {
      var i = inductionVariable;
      inductionVariable = inductionVariable + 1 | 0;
      var nIntervals = data[pp];
      pp = pp + 1 | 0;
      var set = IntervalSet.x2b();
      sets.z1(set);
      var _unary__edvuaz_0 = pp;
      pp = _unary__edvuaz_0 + 1 | 0;
      var containsEof = !(data[_unary__edvuaz_0] === 0);
      if (containsEof) {
        set.y2b(-1);
      }
      var inductionVariable_0 = 0;
      if (inductionVariable_0 < nIntervals)
        do {
          var j = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          var _unary__edvuaz_1 = pp;
          pp = _unary__edvuaz_1 + 1 | 0;
          var a = data[_unary__edvuaz_1];
          var _unary__edvuaz_2 = pp;
          pp = _unary__edvuaz_2 + 1 | 0;
          var b = data[_unary__edvuaz_2];
          set.z2p(a, b);
        }
         while (inductionVariable_0 < nIntervals);
    }
     while (inductionVariable < nSets);
  return pp;
}
var Companion_instance_11;
function Companion_getInstance_11() {
  if (Companion_instance_11 === VOID)
    new Companion_11();
  return Companion_instance_11;
}
var Companion_instance_12;
function Companion_getInstance_12() {
  if (Companion_instance_12 === VOID)
    new Companion_12();
  return Companion_instance_12;
}
var ATNType_LEXER_instance;
var ATNType_PARSER_instance;
function values() {
  return [ATNType_LEXER_getInstance(), ATNType_PARSER_getInstance()];
}
function get_entries() {
  if ($ENTRIES == null)
    $ENTRIES = enumEntries(values());
  return $ENTRIES;
}
var ATNType_entriesInitialized;
function ATNType_initEntries() {
  if (ATNType_entriesInitialized)
    return Unit_instance;
  ATNType_entriesInitialized = true;
  ATNType_LEXER_instance = new ATNType('LEXER', 0);
  ATNType_PARSER_instance = new ATNType('PARSER', 1);
}
var $ENTRIES;
function ATNType_LEXER_getInstance() {
  ATNType_initEntries();
  return ATNType_LEXER_instance;
}
function ATNType_PARSER_getInstance() {
  ATNType_initEntries();
  return ATNType_PARSER_instance;
}
var EmptyPredictionContext_instance;
function EmptyPredictionContext_getInstance() {
  if (EmptyPredictionContext_instance === VOID)
    EmptyPredictionContext.k2w();
  return EmptyPredictionContext_instance;
}
var Companion_instance_13;
function Companion_getInstance_13() {
  return Companion_instance_13;
}
function checkNonGreedyDecision($this, source, target) {
  var tmp;
  if (source.d2x_1) {
    tmp = true;
  } else {
    var tmp_0;
    if (target instanceof DecisionState) {
      tmp_0 = target.q2m_1;
    } else {
      tmp_0 = false;
    }
    tmp = tmp_0;
  }
  return tmp;
}
function init_org_antlr_v4_kotlinruntime_atn_LexerATNConfig(_this__u8e3s4) {
}
var Companion_instance_14;
function Companion_getInstance_14() {
  return Companion_instance_14;
}
var Companion_instance_15;
function Companion_getInstance_15() {
  return Companion_instance_15;
}
var LexerActionType_CHANNEL_instance;
var LexerActionType_CUSTOM_instance;
var LexerActionType_MODE_instance;
var LexerActionType_MORE_instance;
var LexerActionType_POP_MODE_instance;
var LexerActionType_PUSH_MODE_instance;
var LexerActionType_SKIP_instance;
var LexerActionType_TYPE_instance;
function values_0() {
  return [LexerActionType_CHANNEL_getInstance(), LexerActionType_CUSTOM_getInstance(), LexerActionType_MODE_getInstance(), LexerActionType_MORE_getInstance(), LexerActionType_POP_MODE_getInstance(), LexerActionType_PUSH_MODE_getInstance(), LexerActionType_SKIP_getInstance(), LexerActionType_TYPE_getInstance()];
}
function get_entries_0() {
  if ($ENTRIES_0 == null)
    $ENTRIES_0 = enumEntries(values_0());
  return $ENTRIES_0;
}
var LexerActionType_entriesInitialized;
function LexerActionType_initEntries() {
  if (LexerActionType_entriesInitialized)
    return Unit_instance;
  LexerActionType_entriesInitialized = true;
  LexerActionType_CHANNEL_instance = new LexerActionType('CHANNEL', 0);
  LexerActionType_CUSTOM_instance = new LexerActionType('CUSTOM', 1);
  LexerActionType_MODE_instance = new LexerActionType('MODE', 2);
  LexerActionType_MORE_instance = new LexerActionType('MORE', 3);
  LexerActionType_POP_MODE_instance = new LexerActionType('POP_MODE', 4);
  LexerActionType_PUSH_MODE_instance = new LexerActionType('PUSH_MODE', 5);
  LexerActionType_SKIP_instance = new LexerActionType('SKIP', 6);
  LexerActionType_TYPE_instance = new LexerActionType('TYPE', 7);
}
var $ENTRIES_0;
function LexerActionType_CHANNEL_getInstance() {
  LexerActionType_initEntries();
  return LexerActionType_CHANNEL_instance;
}
function LexerActionType_CUSTOM_getInstance() {
  LexerActionType_initEntries();
  return LexerActionType_CUSTOM_instance;
}
function LexerActionType_MODE_getInstance() {
  LexerActionType_initEntries();
  return LexerActionType_MODE_instance;
}
function LexerActionType_MORE_getInstance() {
  LexerActionType_initEntries();
  return LexerActionType_MORE_instance;
}
function LexerActionType_POP_MODE_getInstance() {
  LexerActionType_initEntries();
  return LexerActionType_POP_MODE_instance;
}
function LexerActionType_PUSH_MODE_getInstance() {
  LexerActionType_initEntries();
  return LexerActionType_PUSH_MODE_instance;
}
function LexerActionType_SKIP_getInstance() {
  LexerActionType_initEntries();
  return LexerActionType_SKIP_instance;
}
function LexerActionType_TYPE_getInstance() {
  LexerActionType_initEntries();
  return LexerActionType_TYPE_instance;
}
var LexerMoreAction_instance;
function LexerMoreAction_getInstance() {
  if (LexerMoreAction_instance === VOID)
    new LexerMoreAction();
  return LexerMoreAction_instance;
}
var LexerPopModeAction_instance;
function LexerPopModeAction_getInstance() {
  if (LexerPopModeAction_instance === VOID)
    new LexerPopModeAction();
  return LexerPopModeAction_instance;
}
var LexerSkipAction_instance;
function LexerSkipAction_getInstance() {
  if (LexerSkipAction_instance === VOID)
    new LexerSkipAction();
  return LexerSkipAction_instance;
}
function getSafeEnv($this, envName, defaultValue) {
  defaultValue = defaultValue === VOID ? null : defaultValue;
  var tmp;
  try {
    tmp = System_getInstance().i27(envName, defaultValue);
  } catch ($p) {
    var tmp_0;
    if ($p instanceof Exception) {
      var e = $p;
      System_getInstance().h27_1.f27(e.toString());
      tmp_0 = null;
    } else {
      throw $p;
    }
    tmp = tmp_0;
  }
  return tmp;
}
var Companion_instance_16;
function Companion_getInstance_16() {
  if (Companion_instance_16 === VOID)
    new Companion_16();
  return Companion_instance_16;
}
var Companion_instance_17;
function Companion_getInstance_17() {
  return Companion_instance_17;
}
var PredictionMode_SLL_instance;
var PredictionMode_LL_instance;
var PredictionMode_LL_EXACT_AMBIG_DETECTION_instance;
var AltAndContextConfigEqualityComparator_instance;
function AltAndContextConfigEqualityComparator_getInstance() {
  PredictionMode_initEntries();
  if (AltAndContextConfigEqualityComparator_instance === VOID)
    new AltAndContextConfigEqualityComparator();
  return AltAndContextConfigEqualityComparator_instance;
}
var Companion_instance_18;
function Companion_getInstance_18() {
  return Companion_instance_18;
}
var PredictionMode_entriesInitialized;
function PredictionMode_initEntries() {
  if (PredictionMode_entriesInitialized)
    return Unit_instance;
  PredictionMode_entriesInitialized = true;
  PredictionMode_SLL_instance = new PredictionMode('SLL', 0);
  PredictionMode_LL_instance = new PredictionMode('LL', 1);
  PredictionMode_LL_EXACT_AMBIG_DETECTION_instance = new PredictionMode('LL_EXACT_AMBIG_DETECTION', 2);
}
function PredictionMode_SLL_getInstance() {
  PredictionMode_initEntries();
  return PredictionMode_SLL_instance;
}
function PredictionMode_LL_getInstance() {
  PredictionMode_initEntries();
  return PredictionMode_LL_instance;
}
function PredictionMode_LL_EXACT_AMBIG_DETECTION_getInstance() {
  PredictionMode_initEntries();
  return PredictionMode_LL_EXACT_AMBIG_DETECTION_instance;
}
function filterPrecedencePredicates($this, collection) {
  var result = ArrayList.u1();
  var iterator = collection.w();
  while (iterator.x()) {
    var context = iterator.y();
    if (context instanceof PrecedencePredicate) {
      result.z1(context);
      iterator.r5();
    }
  }
  return result;
}
function init_org_antlr_v4_kotlinruntime_atn_SemanticContext_Predicate(_this__u8e3s4) {
}
var Companion_instance_19;
function Companion_getInstance_19() {
  return Companion_instance_19;
}
var Empty_instance;
function Empty_getInstance() {
  if (Empty_instance === VOID)
    Empty.j35();
  return Empty_instance;
}
var Companion_instance_20;
function Companion_getInstance_20() {
  return Companion_instance_20;
}
var Companion_instance_21;
function Companion_getInstance_21() {
  if (Companion_instance_21 === VOID)
    new Companion_21();
  return Companion_instance_21;
}
function DFA$getStates$lambda(a, b) {
  // Inline function 'kotlin.comparisons.compareValuesBy' call
  var tmp = a.a2t_1;
  var tmp$ret$2 = b.a2t_1;
  return compareValues(tmp, tmp$ret$2);
}
function init_org_antlr_v4_kotlinruntime_dfa_DFAState(_this__u8e3s4) {
  _this__u8e3s4.a2t_1 = -1;
  _this__u8e3s4.b2t_1 = new ATNConfigSet();
  _this__u8e3s4.c2t_1 = null;
  _this__u8e3s4.d2t_1 = false;
  _this__u8e3s4.e2t_1 = 0;
  _this__u8e3s4.f2t_1 = null;
  _this__u8e3s4.g2t_1 = false;
  _this__u8e3s4.h2t_1 = null;
}
var Companion_instance_22;
function Companion_getInstance_22() {
  return Companion_instance_22;
}
function createEntryListArray($this, length) {
  // Inline function 'kotlin.arrayOfNulls' call
  return Array(length);
}
var Companion_instance_23;
function Companion_getInstance_23() {
  return Companion_instance_23;
}
var Companion_instance_24;
function Companion_getInstance_24() {
  if (Companion_instance_24 === VOID)
    new Companion_24();
  return Companion_instance_24;
}
function ensureCapacity($this, capacity) {
  if (capacity < 0 || capacity > 2147483639) {
    throw RuntimeException.xb();
  }
  var tmp;
  // Inline function 'kotlin.collections.isEmpty' call
  if ($this.d2h_1.length === 0) {
    tmp = 4;
  } else {
    tmp = $this.d2h_1.length;
  }
  var newLength = tmp;
  while (newLength < capacity) {
    newLength = imul(newLength, 2);
    if (newLength < 0 || newLength > 2147483639) {
      newLength = 2147483639;
    }
  }
  $this.d2h_1 = copyOf_0($this.d2h_1, newLength);
}
function init_org_antlr_v4_kotlinruntime_misc_IntegerList(_this__u8e3s4) {
  Companion_getInstance_24();
  _this__u8e3s4.e2h_1 = 0;
}
function init_org_antlr_v4_kotlinruntime_misc_IntegerStack(_this__u8e3s4) {
}
var Companion_instance_25;
function Companion_getInstance_25() {
  if (Companion_instance_25 === VOID)
    new Companion_25();
  return Companion_instance_25;
}
var Companion_instance_26;
function Companion_getInstance_26() {
  if (Companion_instance_26 === VOID)
    new Companion_26();
  return Companion_instance_26;
}
function add($this, addition) {
  if ($this.w2b_1) {
    throw IllegalStateException.l4("can't alter readonly IntervalSet");
  }
  if (addition.r28_1 < addition.q28_1) {
    return Unit_instance;
  }
  var iter = $this.v2b_1.y3();
  while (iter.x()) {
    var r = iter.y();
    if (addition.equals(r)) {
      return Unit_instance;
    }
    if (addition.i38(r) || !addition.h38(r)) {
      var bigger = addition.j38(r);
      iter.h6(bigger);
      $l$loop: while (iter.x()) {
        var next = iter.y();
        if (!bigger.i38(next) && bigger.h38(next)) {
          break $l$loop;
        }
        iter.r5();
        iter.d6();
        iter.h6(bigger.j38(next));
        iter.y();
      }
      return Unit_instance;
    }
    if (addition.f38(r)) {
      iter.d6();
      iter.f6(addition);
      return Unit_instance;
    }
  }
  $this.v2b_1.z1(addition);
}
function elementName($this, vocabulary, a) {
  switch (a) {
    case -1:
      return '<EOF>';
    case -2:
      return '<EPSILON>';
    default:
      return vocabulary.x29(a);
  }
}
function init_org_antlr_v4_kotlinruntime_misc_IntervalSet(_this__u8e3s4) {
  Companion_getInstance_26();
  _this__u8e3s4.w2b_1 = false;
}
var MurmurHash_instance;
function MurmurHash_getInstance() {
  return MurmurHash_instance;
}
var Companion_instance_27;
function Companion_getInstance_27() {
  if (Companion_instance_27 === VOID)
    new Companion_27();
  return Companion_instance_27;
}
var Utils_instance;
function Utils_getInstance() {
  return Utils_instance;
}
var Companion_instance_28;
function Companion_getInstance_28() {
  if (Companion_instance_28 === VOID)
    new Companion_28();
  return Companion_instance_28;
}
var CharStreams_instance;
function CharStreams_getInstance() {
  if (CharStreams_instance === VOID)
    new CharStreams();
  return CharStreams_instance;
}
function contentEquals_1($this, one, two) {
  var lastIndexOne = lastBitSetIndex($this, one);
  var lastIndexTwo = lastBitSetIndex($this, two);
  if (!(lastIndexOne === lastIndexTwo)) {
    return false;
  }
  var inductionVariable = 0;
  if (inductionVariable <= lastIndexOne)
    do {
      var i = inductionVariable;
      inductionVariable = inductionVariable + 1 | 0;
      if (!(one[i] === two[i])) {
        return false;
      }
    }
     while (!(i === lastIndexOne));
  return true;
}
function lastBitSetIndex($this, bits) {
  var i = bits.length - 1 | 0;
  while (i > -1) {
    if (bits[i] === true) {
      return i;
    }
    i = i - 1 | 0;
  }
  return -1;
}
function platformGetEnv(name) {
  if (isNodeJs()) {
    // Inline function 'kotlin.js.unsafeCast' call
    return process.env[name];
  }
  System_getInstance().g27_1.f27('Environment variables are not supported in the browser');
  return null;
}
function remove($this, key, value) {
  // Inline function 'com.strumenta.antlrkotlin.runtime.undefinedToNull' call
  var k = key === undefined ? null : key;
  if ($this.x38_1.has(k)) {
    if ($this.x38_1.get(k) === value) {
      return $this.x38_1.delete(k);
    }
  }
  return false;
}
function toKotlinIterator(_this__u8e3s4) {
  return new KotlinIterator(_this__u8e3s4);
}
function iterator(_this__u8e3s4) {
  return jsIterator(_this__u8e3s4);
}
function component1(_this__u8e3s4) {
  // Inline function 'kotlin.js.asDynamic' call
  return _this__u8e3s4[0];
}
function component2(_this__u8e3s4) {
  // Inline function 'kotlin.js.asDynamic' call
  return _this__u8e3s4[1];
}
function jsIterator(jsMap) {
  return jsMap[Symbol.iterator]();
}
function isNodeJs() {
  return typeof process !== 'undefined' && process.versions != null && process.versions.node != null || (typeof window !== 'undefined' && typeof window.process !== 'undefined' && window.process.versions != null && window.process.versions.node != null);
}
//region block: post-declaration
initMetadataForObject(Collections, 'Collections');
initMetadataForObject(StdPrintStream, 'StdPrintStream');
initMetadataForObject(ErrPrintStream, 'ErrPrintStream');
initMetadataForObject(System, 'System');
initMetadataForClass(AbstractCharStreams, 'AbstractCharStreams');
initMetadataForClass(BaseErrorListener, 'BaseErrorListener', BaseErrorListener);
initMetadataForClass(BufferedTokenStream, 'BufferedTokenStream');
initMetadataForInterface(CharStream, 'CharStream');
initMetadataForCompanion(Companion);
initMetadataForInterface(Token, 'Token');
initMetadataForInterface(WritableToken, 'WritableToken', VOID, VOID, [Token]);
protoOf(CommonToken).y29 = startPoint;
protoOf(CommonToken).z29 = endPoint;
initMetadataForClass(CommonToken, 'CommonToken', VOID, VOID, [WritableToken]);
initMetadataForCompanion(Companion_0);
initMetadataForClass(CommonTokenFactory, 'CommonTokenFactory', CommonTokenFactory);
initMetadataForClass(CommonTokenStream, 'CommonTokenStream');
initMetadataForCompanion(Companion_1);
initMetadataForClass(ConsoleErrorListener, 'ConsoleErrorListener', ConsoleErrorListener);
initMetadataForClass(DefaultErrorStrategy, 'DefaultErrorStrategy', DefaultErrorStrategy);
initMetadataForObject(DummyTokenStream, 'DummyTokenStream');
initMetadataForClass(EmptyStackException, 'EmptyStackException', EmptyStackException.l2f);
initMetadataForClass(RecognitionException, 'RecognitionException');
initMetadataForClass(FailedPredicateException, 'FailedPredicateException');
initMetadataForClass(InputMismatchException, 'InputMismatchException');
initMetadataForCompanion(Companion_2);
initMetadataForClass(Recognizer, 'Recognizer');
initMetadataForClass(Lexer, 'Lexer');
initMetadataForClass(LexerNoViableAltException, 'LexerNoViableAltException');
initMetadataForClass(NoViableAltException, 'NoViableAltException');
initMetadataForClass(Parser, 'Parser');
initMetadataForCompanion(Companion_3);
initMetadataForInterface(ParseTree, 'ParseTree');
initMetadataForInterface(RuleNode, 'RuleNode', VOID, VOID, [ParseTree]);
initMetadataForClass(RuleContext, 'RuleContext', RuleContext.o2k, VOID, [RuleNode]);
initMetadataForClass(ParserRuleContext, 'ParserRuleContext', ParserRuleContext.k2k);
initMetadataForClass(ProxyErrorListener, 'ProxyErrorListener');
initMetadataForCompanion(Companion_4);
initMetadataForObject(RuntimeMetaData, 'RuntimeMetaData');
initMetadataForClass(StringCharStream, 'StringCharStream', VOID, VOID, [CharStream]);
initMetadataForCompanion(Companion_5);
initMetadataForClass(VocabularyImpl, 'VocabularyImpl');
initMetadataForCompanion(Companion_6);
initMetadataForClass(Point, 'Point');
initMetadataForClass(Position, 'Position');
initMetadataForCompanion(Companion_7);
initMetadataForClass(ATN, 'ATN');
initMetadataForCompanion(Companion_8);
initMetadataForClass(ATNConfig, 'ATNConfig');
initMetadataForClass(Array2DHashSet, 'Array2DHashSet', Array2DHashSet, VOID, [KtMutableSet]);
initMetadataForClass(AbstractConfigHashSet, 'AbstractConfigHashSet');
initMetadataForClass(ConfigHashSet, 'ConfigHashSet', ConfigHashSet);
initMetadataForClass(AbstractEqualityComparator, 'AbstractEqualityComparator');
initMetadataForObject(ConfigEqualityComparator, 'ConfigEqualityComparator');
initMetadataForClass(ATNConfigSet, 'ATNConfigSet', ATNConfigSet, VOID, [KtMutableSet]);
initMetadataForCompanion(Companion_9);
initMetadataForClass(ATNDeserializationOptions, 'ATNDeserializationOptions', ATNDeserializationOptions.t2p);
initMetadataForCompanion(Companion_10);
initMetadataForClass(ATNDeserializer, 'ATNDeserializer', ATNDeserializer);
initMetadataForCompanion(Companion_11);
initMetadataForClass(ATNSimulator, 'ATNSimulator');
initMetadataForCompanion(Companion_12);
initMetadataForClass(ATNState, 'ATNState');
initMetadataForClass(ATNType, 'ATNType');
initMetadataForClass(Transition, 'Transition');
initMetadataForClass(AbstractPredicateTransition, 'AbstractPredicateTransition');
initMetadataForClass(ActionTransition, 'ActionTransition');
initMetadataForClass(PredictionContext, 'PredictionContext');
initMetadataForClass(ArrayPredictionContext, 'ArrayPredictionContext');
initMetadataForClass(AtomTransition, 'AtomTransition');
initMetadataForClass(DecisionState, 'DecisionState');
initMetadataForClass(BlockStartState, 'BlockStartState');
initMetadataForClass(BasicBlockStartState, 'BasicBlockStartState', BasicBlockStartState);
initMetadataForClass(BasicState, 'BasicState', BasicState);
initMetadataForClass(BlockEndState, 'BlockEndState', BlockEndState);
initMetadataForClass(SingletonPredictionContext, 'SingletonPredictionContext');
initMetadataForObject(EmptyPredictionContext, 'EmptyPredictionContext');
initMetadataForClass(EpsilonTransition, 'EpsilonTransition');
initMetadataForCompanion(Companion_13);
initMetadataForClass(LL1Analyzer, 'LL1Analyzer');
initMetadataForClass(LexerATNConfig, 'LexerATNConfig');
initMetadataForCompanion(Companion_14);
initMetadataForClass(SimState, 'SimState', SimState);
initMetadataForClass(LexerATNSimulator, 'LexerATNSimulator');
initMetadataForCompanion(Companion_15);
initMetadataForClass(LexerActionExecutor, 'LexerActionExecutor');
initMetadataForClass(LexerActionType, 'LexerActionType');
initMetadataForClass(LexerChannelAction, 'LexerChannelAction');
initMetadataForClass(LexerCustomAction, 'LexerCustomAction');
initMetadataForClass(LexerIndexedCustomAction, 'LexerIndexedCustomAction');
initMetadataForClass(LexerModeAction, 'LexerModeAction');
initMetadataForObject(LexerMoreAction, 'LexerMoreAction');
initMetadataForObject(LexerPopModeAction, 'LexerPopModeAction');
initMetadataForClass(LexerPushModeAction, 'LexerPushModeAction');
initMetadataForObject(LexerSkipAction, 'LexerSkipAction');
initMetadataForClass(LexerTypeAction, 'LexerTypeAction');
initMetadataForClass(LoopEndState, 'LoopEndState', LoopEndState);
initMetadataForClass(SetTransition, 'SetTransition');
initMetadataForClass(NotSetTransition, 'NotSetTransition');
initMetadataForClass(LexerConfigHashSet, 'LexerConfigHashSet', LexerConfigHashSet);
initMetadataForClass(OrderedATNConfigSet, 'OrderedATNConfigSet', OrderedATNConfigSet);
initMetadataForCompanion(Companion_16);
initMetadataForClass(ParserATNSimulator, 'ParserATNSimulator');
initMetadataForClass(PlusBlockStartState, 'PlusBlockStartState', PlusBlockStartState);
initMetadataForClass(PlusLoopbackState, 'PlusLoopbackState', PlusLoopbackState);
initMetadataForClass(PrecedencePredicateTransition, 'PrecedencePredicateTransition');
initMetadataForClass(PredicateTransition, 'PredicateTransition');
initMetadataForCompanion(Companion_17);
initMetadataForClass(PredictionContextCache, 'PredictionContextCache', PredictionContextCache);
initMetadataForClass(FlexibleHashMap, 'FlexibleHashMap', FlexibleHashMap, VOID, [KtMutableMap]);
initMetadataForClass(AltAndContextMap, 'AltAndContextMap', AltAndContextMap);
initMetadataForObject(AltAndContextConfigEqualityComparator, 'AltAndContextConfigEqualityComparator');
initMetadataForCompanion(Companion_18);
initMetadataForClass(PredictionMode, 'PredictionMode');
initMetadataForClass(RangeTransition, 'RangeTransition');
initMetadataForClass(RuleStartState, 'RuleStartState', RuleStartState);
initMetadataForClass(RuleStopState, 'RuleStopState', RuleStopState);
initMetadataForClass(RuleTransition, 'RuleTransition');
initMetadataForCompanion(Companion_19);
initMetadataForClass(SemanticContext, 'SemanticContext');
initMetadataForObject(Empty, 'Empty');
initMetadataForClass(Predicate, 'Predicate', Predicate.l35);
initMetadataForClass(PrecedencePredicate, 'PrecedencePredicate', PrecedencePredicate.o33, VOID, [Comparable]);
initMetadataForClass(Operator, 'Operator');
initMetadataForClass(AND, 'AND');
initMetadataForClass(OR, 'OR');
initMetadataForCompanion(Companion_20);
initMetadataForClass(StarBlockStartState, 'StarBlockStartState', StarBlockStartState);
initMetadataForClass(StarLoopEntryState, 'StarLoopEntryState', StarLoopEntryState);
initMetadataForClass(StarLoopbackState, 'StarLoopbackState', StarLoopbackState);
initMetadataForClass(TokensStartState, 'TokensStartState', TokensStartState);
initMetadataForCompanion(Companion_21);
initMetadataForClass(WildcardTransition, 'WildcardTransition');
initMetadataForClass(sam$kotlin_Comparator$0, 'sam$kotlin_Comparator$0', VOID, VOID, [Comparator, FunctionAdapter]);
initMetadataForClass(DFA, 'DFA');
initMetadataForClass(DFASerializer, 'DFASerializer');
initMetadataForClass(PredPrediction, 'PredPrediction');
initMetadataForClass(DFAState, 'DFAState', DFAState.m37);
initMetadataForClass(LexerDFASerializer, 'LexerDFASerializer');
initMetadataForCompanion(Companion_22);
initMetadataForClass(SetIterator, 'SetIterator');
initMetadataForClass(DoubleKeyMap, 'DoubleKeyMap', DoubleKeyMap);
initMetadataForCompanion(Companion_23);
initMetadataForClass(Entry, 'Entry');
initMetadataForCompanion(Companion_24);
initMetadataForClass(IntegerList, 'IntegerList', IntegerList.e38);
initMetadataForClass(IntegerStack, 'IntegerStack', IntegerStack.o2g);
initMetadataForCompanion(Companion_25);
initMetadataForClass(Interval, 'Interval');
initMetadataForCompanion(Companion_26);
initMetadataForClass(IntervalSet, 'IntervalSet', IntervalSet.x2b);
initMetadataForObject(MurmurHash, 'MurmurHash');
initMetadataForCompanion(Companion_27);
initMetadataForClass(ObjectEqualityComparator, 'ObjectEqualityComparator', ObjectEqualityComparator);
initMetadataForObject(Utils, 'Utils');
initMetadataForInterface(TerminalNode, 'TerminalNode', VOID, VOID, [ParseTree]);
initMetadataForInterface(ErrorNode, 'ErrorNode', VOID, VOID, [TerminalNode]);
initMetadataForClass(TerminalNodeImpl, 'TerminalNodeImpl', VOID, VOID, [TerminalNode]);
initMetadataForClass(ErrorNodeImpl, 'ErrorNodeImpl', VOID, VOID, [ErrorNode]);
initMetadataForCompanion(Companion_28);
initMetadataForClass(ParseTreeWalker, 'ParseTreeWalker', ParseTreeWalker);
initMetadataForObject(CharStreams, 'CharStreams');
initMetadataForClass(BitSet, 'BitSet', BitSet.c2p);
initMetadataForClass(IdentityEntry, 'IdentityEntry', VOID, VOID, [MutableEntry]);
initMetadataForClass(IdentityEntriesView$iterator$1);
initMetadataForClass(IdentityEntriesView, 'IdentityEntriesView');
initMetadataForClass(IdentityHashMap, 'IdentityHashMap', IdentityHashMap, VOID, [KtMutableMap]);
initMetadataForClass(IdentityKeysView$iterator$1);
initMetadataForClass(IdentityKeysView, 'IdentityKeysView');
initMetadataForClass(IdentityValuesView$iterator$1);
initMetadataForClass(IdentityValuesView, 'IdentityValuesView');
initMetadataForClass(KotlinIterator, 'KotlinIterator');
//endregion
//region block: init
Collections_instance = new Collections();
StdPrintStream_instance = new StdPrintStream();
ErrPrintStream_instance = new ErrPrintStream();
DummyTokenStream_instance = new DummyTokenStream();
Companion_instance_2 = new Companion_2();
RuntimeMetaData_instance = new RuntimeMetaData();
Companion_instance_7 = new Companion_7();
Companion_instance_8 = new Companion_8();
Companion_instance_10 = new Companion_10();
Companion_instance_13 = new Companion_13();
Companion_instance_14 = new Companion_14();
Companion_instance_15 = new Companion_15();
Companion_instance_17 = new Companion_17();
Companion_instance_18 = new Companion_18();
Companion_instance_19 = new Companion_19();
Companion_instance_20 = new Companion_20();
Companion_instance_22 = new Companion_22();
Companion_instance_23 = new Companion_23();
MurmurHash_instance = new MurmurHash();
Utils_instance = new Utils();
//endregion
//region block: exports
export {
  Companion_getInstance_28 as Companion_getInstance1gfmo8zey038s,
  CharStreams_getInstance as CharStreams_getInstance14yi3lkwt4hrl,
  RuntimeMetaData_instance as RuntimeMetaData_instance3xy3s2y4hijp,
  Position as Position1t7ilfw35y6a7,
  ATNDeserializer as ATNDeserializer38hindcbku97l,
  LexerATNSimulator as LexerATNSimulatortd250bjgrg4c,
  ParserATNSimulator as ParserATNSimulator2q23r2xjx2vh1,
  PredictionContextCache as PredictionContextCachef3ngnq97rlzk,
  DFA as DFA2zc0bf86orsyu,
  Interval as Interval1m1c4nnvh1zfp,
  CommonTokenStream as CommonTokenStream1l1edmai5e916,
  CommonToken as CommonTokenl6opgwbjf7tl,
  DefaultErrorStrategy as DefaultErrorStrategyw6z5x09kdjrd,
  Lexer as Lexer1j039m5zfrqe,
  NoViableAltException as NoViableAltException1475tj7jjeamb,
  ParserRuleContext as ParserRuleContext1gg604fkr82fb,
  Parser as Parser3c2ne9hhhvtri,
  RecognitionException as RecognitionExceptionkh91xibl3g5u,
  Token as Tokenauae6vog3el3,
  VocabularyImpl as VocabularyImpl10pr7n784umpv,
};
//endregion

//# sourceMappingURL=antlr-kotlin-antlr-kotlin-runtime.mjs.map
