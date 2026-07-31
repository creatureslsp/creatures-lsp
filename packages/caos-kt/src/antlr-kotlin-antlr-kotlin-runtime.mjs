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
  e27(collection) {
    var tmp0_elvis_lhs = minOrNull(collection);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw NoSuchElementException.c6();
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  f27(collection) {
    var tmp0_elvis_lhs = maxOrNull(collection);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw NoSuchElementException.c6();
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
}
class StdPrintStream {
  g27(message) {
    return println(message);
  }
}
class ErrPrintStream {
  g27(message) {
    // Inline function 'com.strumenta.antlrkotlin.runtime.platformPrintErrLn' call
    console.error(message);
    return Unit_instance;
  }
}
class System {
  constructor() {
    System_instance = this;
    this.h27_1 = StdPrintStream_instance;
    this.i27_1 = ErrPrintStream_instance;
  }
  j27(name, defaultValue) {
    var tmp0_elvis_lhs = platformGetEnv(name);
    return tmp0_elvis_lhs == null ? defaultValue : tmp0_elvis_lhs;
  }
}
class AbstractCharStreams {
  k27(str, sourceName) {
    return new StringCharStream(str, sourceName);
  }
  l27(str, sourceName, $super) {
    sourceName = sourceName === VOID ? '<unknown>' : sourceName;
    return $super === VOID ? this.k27(str, sourceName) : $super.k27.call(this, str, sourceName);
  }
}
class BaseErrorListener {
  m27(recognizer, offendingSymbol, line, charPositionInLine, msg, e) {
  }
  n27(recognizer, dfa, startIndex, stopIndex, exact, ambigAlts, configs) {
  }
  o27(recognizer, dfa, startIndex, stopIndex, conflictingAlts, configs) {
  }
  p27(recognizer, dfa, startIndex, stopIndex, prediction, configs) {
  }
}
class BufferedTokenStream {
  constructor(tokenSource) {
    this.q27_1 = ArrayList.f2(100);
    this.r27_1 = -1;
    this.s27_1 = false;
    this.t27_1 = tokenSource;
  }
  u27() {
    return this.t27_1;
  }
  v27() {
    return this.r27_1;
  }
  w27() {
    return 0;
  }
  x27(marker) {
  }
  y27(index) {
    this.z27();
    this.r27_1 = this.a28(index);
  }
  b28() {
    return this.q27_1.i2();
  }
  c28() {
    var tmp;
    if (this.r27_1 >= 0) {
      var tmp_0;
      if (this.s27_1) {
        tmp_0 = this.r27_1 < (this.q27_1.i2() - 1 | 0);
      } else {
        tmp_0 = this.r27_1 < this.q27_1.i2();
      }
      tmp = tmp_0;
    } else {
      tmp = false;
    }
    var skipEofCheck = tmp;
    if (!skipEofCheck && this.d28(1) === -1) {
      throw IllegalStateException.s4('cannot consume EOF');
    }
    if (this.e28(this.r27_1 + 1 | 0)) {
      this.r27_1 = this.a28(this.r27_1 + 1 | 0);
    }
  }
  e28(i) {
    // Inline function 'com.strumenta.antlrkotlin.runtime.assert' call
    if (!(i >= 0)) {
      throw AssertionError.yc(null);
    }
    var n = (i - this.q27_1.i2() | 0) + 1 | 0;
    if (n > 0) {
      var fetched = this.f28(n);
      return fetched >= n;
    }
    return true;
  }
  f28(n) {
    if (this.s27_1) {
      return 0;
    }
    var inductionVariable = 0;
    if (inductionVariable < n)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var t = this.u27().g28();
        if (isInterface(t, WritableToken)) {
          t.h28(this.q27_1.i2());
        }
        this.q27_1.g2(t);
        if (t.g1s() === -1) {
          this.s27_1 = true;
          return i + 1 | 0;
        }
      }
       while (inductionVariable < n);
    return n;
  }
  k2(index) {
    if (index < 0 || index >= this.q27_1.i2()) {
      throw IndexOutOfBoundsException.rc('token index ' + index + ' out of range 0..' + (this.q27_1.i2() - 1 | 0));
    }
    return this.q27_1.k2(index);
  }
  d28(i) {
    return ensureNotNull(this.i28(i)).g1s();
  }
  j28(k) {
    var tmp;
    if ((this.r27_1 - k | 0) < 0) {
      tmp = null;
    } else {
      tmp = this.q27_1.k2(this.r27_1 - k | 0);
    }
    return tmp;
  }
  i28(k) {
    this.z27();
    if (k === 0) {
      return null;
    }
    if (k < 0) {
      return this.j28(-k | 0);
    }
    var i = (this.r27_1 + k | 0) - 1 | 0;
    this.e28(i);
    var tmp;
    if (i >= this.q27_1.i2()) {
      tmp = this.q27_1.k2(this.q27_1.i2() - 1 | 0);
    } else {
      tmp = this.q27_1.k2(i);
    }
    return tmp;
  }
  a28(i) {
    return i;
  }
  z27() {
    if (this.r27_1 === -1) {
      this.k28();
    }
  }
  k28() {
    this.e28(0);
    this.r27_1 = this.a28(0);
  }
  l28(start, stop, types) {
    this.z27();
    if (start < 0 || stop >= this.q27_1.i2() || stop < 0 || start >= this.q27_1.i2()) {
      throw IndexOutOfBoundsException.rc('start ' + start + ' or stop ' + stop + ' not in 0..' + (this.q27_1.i2() - 1 | 0));
    }
    if (start > stop) {
      return null;
    }
    var filteredTokens = ArrayList.b2();
    var inductionVariable = start;
    if (inductionVariable <= stop)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var t = this.q27_1.k2(i);
        if (types == null || types.n2(t.g1s())) {
          filteredTokens.g2(t);
        }
      }
       while (!(i === stop));
    // Inline function 'kotlin.collections.ifEmpty' call
    var tmp;
    if (filteredTokens.b1()) {
      tmp = null;
    } else {
      tmp = filteredTokens;
    }
    return tmp;
  }
  m28(start, stop, types, $super) {
    types = types === VOID ? null : types;
    return $super === VOID ? this.l28(start, stop, types) : $super.l28.call(this, start, stop, types);
  }
  n28(i, channel) {
    this.e28(i);
    if (i >= this.b28()) {
      return this.b28() - 1 | 0;
    }
    var token = this.q27_1.k2(i);
    var ii = i;
    while (!(token.o28() === channel)) {
      if (token.g1s() === -1) {
        return ii;
      }
      ii = ii + 1 | 0;
      this.e28(ii);
      token = this.q27_1.k2(ii);
    }
    return ii;
  }
  p28(i, channel) {
    this.e28(i);
    if (i >= this.b28()) {
      return this.b28() - 1 | 0;
    }
    var ii = i;
    while (ii >= 0) {
      var token = this.q27_1.k2(ii);
      if (token.g1s() === -1 || token.o28() === channel) {
        return ii;
      }
      ii = ii - 1 | 0;
    }
    return ii;
  }
  q28(interval) {
    var start = interval.r28_1;
    var stop = interval.s28_1;
    if (start < 0 || stop < 0) {
      return '';
    }
    this.e28(stop);
    if (stop >= this.q27_1.i2()) {
      stop = this.q27_1.i2() - 1 | 0;
    }
    var buf = StringBuilder.z();
    var inductionVariable = start;
    var last = stop;
    if (inductionVariable <= last)
      $l$loop: do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var t = this.q27_1.k2(i);
        if (t.g1s() === -1) {
          break $l$loop;
        }
        buf.a1(t.m1f());
      }
       while (!(i === last));
    return buf.toString();
  }
  t28(start, stop) {
    var tmp;
    if (!(start == null) && !(stop == null)) {
      tmp = this.q28(Companion_getInstance_25().y28(start.u28(), stop.u28()));
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
    this.z28_1 = new Pair(null, null);
  }
}
class Token {}
function startPoint() {
  return new Point(this.h1e(), this.m29());
}
function endPoint() {
  var tmp0_elvis_lhs = this.m1f();
  var tmp;
  if (tmp0_elvis_lhs == null) {
    return null;
  } else {
    tmp = tmp0_elvis_lhs;
  }
  var text = tmp;
  return (new Point(this.h1e(), this.m29())).r2l(text);
}
class WritableToken {}
class CommonToken {
  j29(_set____db54di) {
    this.c29_1 = _set____db54di;
  }
  g1s() {
    return this.c29_1;
  }
  k29(_set____db54di) {
    this.d29_1 = _set____db54di;
  }
  h1e() {
    return this.d29_1;
  }
  l29(_set____db54di) {
    this.e29_1 = _set____db54di;
  }
  m29() {
    return this.e29_1;
  }
  n29(_set____db54di) {
    this.f29_1 = _set____db54di;
  }
  o28() {
    return this.f29_1;
  }
  h28(_set____db54di) {
    this.g29_1 = _set____db54di;
  }
  u28() {
    return this.g29_1;
  }
  o29(_set____db54di) {
    this.h29_1 = _set____db54di;
  }
  j1e() {
    return this.h29_1;
  }
  p29(_set____db54di) {
    this.i29_1 = _set____db54di;
  }
  q29() {
    return this.i29_1;
  }
  u27() {
    return this.a29_1.first;
  }
  r29() {
    return this.a29_1.second;
  }
  s29(value) {
    this.b29_1 = value;
  }
  m1f() {
    if (!(this.b29_1 == null)) {
      return this.b29_1;
    }
    var tmp0_elvis_lhs = this.r29();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return null;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var input = tmp;
    var n = input.b28();
    var tmp_0;
    if (this.j1e() < n && this.q29() < n) {
      tmp_0 = input.q28(Companion_getInstance_25().y28(this.j1e(), this.q29()));
    } else {
      tmp_0 = '<EOF>';
    }
    return tmp_0;
  }
  static t29(source, type, channel, startIndex, stopIndex) {
    Companion_getInstance();
    var $this = createThis(this);
    init_org_antlr_v4_kotlinruntime_CommonToken($this);
    $this.a29_1 = source;
    $this.j29(type);
    $this.n29(channel);
    $this.o29(startIndex);
    $this.p29(stopIndex);
    var a = source.first;
    if (!(a == null)) {
      $this.k29(a.h1e());
      $this.l29(a.m29());
    }
    return $this;
  }
  toString() {
    return this.u29(null);
  }
  u29(r) {
    var tmp;
    if (this.o28() > 0) {
      tmp = ',channel=' + this.o28();
    } else {
      tmp = '';
    }
    var channelStr = tmp;
    var txt = this.m1f();
    if (!(txt == null)) {
      txt = replace(txt, '\n', '\\n');
      txt = replace(txt, '\r', '\\r');
      txt = replace(txt, '\t', '\\t');
    } else {
      txt = '<no text>';
    }
    var tmp1_safe_receiver = r == null ? null : r.x29();
    var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.y29(this.g1s());
    var typeString = tmp2_elvis_lhs == null ? this.g1s().toString() : tmp2_elvis_lhs;
    return '[@' + this.u28() + ',' + this.j1e() + ':' + this.q29() + "='" + txt + "',<" + typeString + '>' + channelStr + ',' + this.h1e() + ':' + this.m29() + ']';
  }
}
class Companion_0 {
  constructor() {
    Companion_instance_0 = this;
    this.b2a_1 = new CommonTokenFactory();
  }
}
class CommonTokenFactory {
  constructor(copyText) {
    Companion_getInstance_0();
    copyText = copyText === VOID ? false : copyText;
    this.c2a_1 = copyText;
  }
  d2a(source, type, text, channel, start, stop, line, charPositionInLine) {
    var t = CommonToken.t29(source, type, channel, start, stop);
    t.k29(line);
    t.l29(charPositionInLine);
    if (!(text == null)) {
      t.s29(text);
    } else if (this.c2a_1 && !(source.second == null)) {
      t.s29(ensureNotNull(source.second).q28(Companion_getInstance_25().y28(start, stop)));
    }
    return t;
  }
}
class CommonTokenStream extends BufferedTokenStream {
  constructor(tokenSource) {
    super(tokenSource);
    this.i2a_1 = 0;
  }
  a28(i) {
    return this.n28(i, this.i2a_1);
  }
  j28(k) {
    if (k === 0 || (this.r27_1 - k | 0) < 0) {
      return null;
    }
    var i = this.r27_1;
    var n = 1;
    while (n <= k && i > 0) {
      i = this.p28(i - 1 | 0, this.i2a_1);
      n = n + 1 | 0;
    }
    var tmp;
    if (i < 0) {
      tmp = null;
    } else {
      tmp = this.q27_1.k2(i);
    }
    return tmp;
  }
  i28(k) {
    this.z27();
    if (k === 0) {
      return null;
    }
    if (k < 0) {
      return this.j28(-k | 0);
    }
    var i = this.r27_1;
    var n = 1;
    while (n < k) {
      if (this.e28(i + 1 | 0)) {
        i = this.n28(i + 1 | 0, this.i2a_1);
      }
      n = n + 1 | 0;
    }
    return this.q27_1.k2(i);
  }
}
class Companion_1 {
  constructor() {
    Companion_instance_1 = this;
    this.j2a_1 = new ConsoleErrorListener();
  }
}
class ConsoleErrorListener extends BaseErrorListener {
  constructor() {
    Companion_getInstance_1();
    super();
  }
  m27(recognizer, offendingSymbol, line, charPositionInLine, msg, e) {
    System_getInstance().i27_1.g27('line ' + line + ':' + charPositionInLine + ' ' + msg);
  }
}
class DefaultErrorStrategy {
  constructor() {
    this.k2a_1 = false;
    this.l2a_1 = -1;
    this.m2a_1 = null;
    this.n2a_1 = null;
    this.o2a_1 = 0;
  }
  p2a(recognizer) {
    return this.q2a(recognizer);
  }
  r2a(recognizer) {
    this.k2a_1 = true;
  }
  s2a(recognizer) {
    return this.k2a_1;
  }
  q2a(recognizer) {
    this.k2a_1 = false;
    this.m2a_1 = null;
    this.l2a_1 = -1;
  }
  t2a(recognizer) {
    return this.q2a(recognizer);
  }
  u2a(recognizer, e) {
    if (this.s2a(recognizer)) {
      return Unit_instance;
    }
    this.r2a(recognizer);
    if (e instanceof NoViableAltException) {
      this.s2b(recognizer, e);
    } else {
      if (e instanceof InputMismatchException) {
        this.r2b(recognizer, e);
      } else {
        if (e instanceof FailedPredicateException) {
          this.q2b(recognizer, e);
        } else {
          System_getInstance().i27_1.g27('unknown recognition error type: ' + e.toString());
          recognizer.p2b(ensureNotNull(e.a2b_1), ensureNotNull(e.message), e);
        }
      }
    }
  }
  t2b(recognizer, e) {
    var lastErrorStatesTemp = this.m2a_1;
    if (this.l2a_1 === recognizer.v2b().v27() && !(lastErrorStatesTemp == null) && lastErrorStatesTemp.yk(recognizer.w29_1)) {
      recognizer.u2b();
    }
    this.l2a_1 = recognizer.v2b().v27();
    if (lastErrorStatesTemp == null) {
      lastErrorStatesTemp = IntervalSet.y2b();
      this.m2a_1 = lastErrorStatesTemp;
    }
    lastErrorStatesTemp.z2b(recognizer.w29_1);
    var followSet = this.a2c(recognizer);
    this.b2c(recognizer, followSet);
  }
  c2c(recognizer) {
    var s = recognizer.p2c().n2c_1.f2c_1.k2(recognizer.w29_1);
    if (this.s2a(recognizer)) {
      return Unit_instance;
    }
    var tokens = recognizer.v2b();
    var la = tokens.d28(1);
    var nextTokens = recognizer.q2c().r2c(ensureNotNull(s));
    if (nextTokens.yk(la)) {
      this.n2a_1 = null;
      this.o2a_1 = -1;
      return Unit_instance;
    }
    if (nextTokens.yk(-2)) {
      if (this.n2a_1 == null) {
        this.n2a_1 = recognizer.j2b_1;
        this.o2a_1 = recognizer.w29_1;
      }
      return Unit_instance;
    }
    switch (s.z2c()) {
      case 3:
      case 5:
      case 4:
      case 10:
        if (!(this.a2d(recognizer) == null)) {
          return Unit_instance;
        }

        throw InputMismatchException.k2d(recognizer);
      case 11:
      case 9:
        this.l2d(recognizer);
        var expecting = recognizer.m2d();
        var whatFollowsLoopIterationOrRule = expecting.n2d(this.a2c(recognizer));
        this.b2c(recognizer, whatFollowsLoopIterationOrRule);
        break;
      default:
        break;
    }
  }
  s2b(recognizer, e) {
    var tokens = recognizer.v2b();
    var tmp;
    if (ensureNotNull(e.w2d_1).g1s() === -1) {
      tmp = '<EOF>';
    } else {
      tmp = ensureNotNull(tokens.t28(e.w2d_1, ensureNotNull(e.a2b_1)));
    }
    var input = tmp;
    var msg = 'no viable alternative at input ' + this.z2d(input);
    recognizer.p2b(ensureNotNull(e.a2b_1), msg, e);
  }
  r2b(recognizer, e) {
    var tokenErrorDisplay = this.a2e(e.a2b_1);
    var expectedToken = ensureNotNull(e.m2d()).b2e(recognizer.x29());
    var msg = 'mismatched input ' + tokenErrorDisplay + ' expecting ' + expectedToken;
    recognizer.p2b(ensureNotNull(e.a2b_1), msg, e);
  }
  q2b(recognizer, e) {
    var ruleName = recognizer.c2e()[ensureNotNull(recognizer.j2b_1).i2e()];
    var msg = 'rule ' + ruleName + ' ' + e.message;
    recognizer.p2b(ensureNotNull(e.a2b_1), msg, e);
  }
  l2d(recognizer) {
    if (this.s2a(recognizer)) {
      return Unit_instance;
    }
    this.r2a(recognizer);
    var t = ensureNotNull(recognizer.j2e());
    var tokenName = this.a2e(t);
    var expecting = this.k2e(recognizer);
    var msg = 'extraneous input ' + tokenName + ' expecting ' + expecting.b2e(recognizer.x29());
    recognizer.p2b(t, msg, null);
  }
  l2e(recognizer) {
    if (this.s2a(recognizer)) {
      return Unit_instance;
    }
    this.r2a(recognizer);
    var t = ensureNotNull(recognizer.j2e());
    var expecting = this.k2e(recognizer);
    var msg = 'missing ' + expecting.b2e(recognizer.x29()) + ' at ' + this.a2e(t);
    recognizer.p2b(t, msg, null);
  }
  m2e(recognizer) {
    var matchedSymbol = this.a2d(recognizer);
    if (!(matchedSymbol == null)) {
      recognizer.u2b();
      return matchedSymbol;
    }
    if (this.o2e(recognizer)) {
      return this.n2e(recognizer);
    }
    var tmp;
    if (this.n2a_1 == null) {
      tmp = InputMismatchException.k2d(recognizer);
    } else {
      tmp = InputMismatchException.p2e(recognizer, this.o2a_1, ensureNotNull(this.n2a_1));
    }
    var e = tmp;
    throw e;
  }
  o2e(recognizer) {
    var currentSymbolType = recognizer.v2b().d28(1);
    var currentState = recognizer.p2c().n2c_1.f2c_1.k2(recognizer.w29_1);
    var next = ensureNotNull(currentState).s2e(0).q2e_1;
    var atn = recognizer.p2c().n2c_1;
    var expectingAtLL2 = atn.t2e(next, recognizer.j2b_1);
    if (expectingAtLL2.yk(currentSymbolType)) {
      this.l2e(recognizer);
      return true;
    }
    return false;
  }
  a2d(recognizer) {
    var nextTokenType = recognizer.v2b().d28(2);
    var expecting = this.k2e(recognizer);
    if (expecting.yk(nextTokenType)) {
      this.l2d(recognizer);
      recognizer.u2b();
      var matchedSymbol = recognizer.j2e();
      this.t2a(recognizer);
      return matchedSymbol;
    }
    return null;
  }
  n2e(recognizer) {
    var currentSymbol = recognizer.j2e();
    var expecting = this.k2e(recognizer);
    var expectedTokenType = 0;
    if (!expecting.v2e()) {
      expectedTokenType = expecting.u2e();
    }
    var tmp;
    if (expectedTokenType === -1) {
      tmp = '<missing EOF>';
    } else {
      tmp = '<missing ' + recognizer.x29().y29(expectedTokenType) + '>';
    }
    var tokenText = tmp;
    var current = currentSymbol;
    var lookback = recognizer.v2b().i28(-1);
    if (ensureNotNull(current).g1s() === -1 && !(lookback == null)) {
      current = lookback;
    }
    return recognizer.w2e().d2a(new Pair(current.u27(), current.r29()), expectedTokenType, tokenText, 0, -1, -1, current.h1e(), current.m29());
  }
  k2e(recognizer) {
    return recognizer.m2d();
  }
  a2e(t) {
    if (t == null) {
      return '<no token>';
    }
    var s = this.x2e(t);
    if (s == null) {
      var tmp;
      if (this.y2e(t) === -1) {
        tmp = '<EOF>';
      } else {
        tmp = '<' + this.y2e(t) + '>';
      }
      s = tmp;
    }
    return this.z2d(s);
  }
  x2e(symbol) {
    return symbol.m1f();
  }
  y2e(symbol) {
    return symbol.g1s();
  }
  z2d(s) {
    var ss = s;
    ss = replace(ss, '\n', '\\n');
    ss = replace(ss, '\r', '\\r');
    ss = replace(ss, '\t', '\\t');
    return "'" + ss + "'";
  }
  a2c(recognizer) {
    var atn = recognizer.p2c().n2c_1;
    var ctx = recognizer.j2b_1;
    var recoverSet = IntervalSet.y2b();
    while (!(ctx == null) && ctx.e2e_1 >= 0) {
      var invokingState = atn.f2c_1.k2(ctx.e2e_1);
      var tmp = ensureNotNull(invokingState).s2e(0);
      var rt = tmp instanceof RuleTransition ? tmp : THROW_CCE();
      var follow = atn.r2c(rt.d2f_1);
      recoverSet.g2f(follow);
      ctx = ctx.h2f();
    }
    recoverSet.i2f(-2);
    return recoverSet;
  }
  b2c(recognizer, set) {
    var ttype = recognizer.v2b().d28(1);
    while (!(ttype === -1) && !set.yk(ttype)) {
      recognizer.u2b();
      ttype = recognizer.v2b().d28(1);
    }
  }
}
class DummyTokenStream {
  u27() {
    throw UnsupportedOperationException.x7();
  }
  c28() {
    throw UnsupportedOperationException.x7();
  }
  d28(i) {
    throw UnsupportedOperationException.x7();
  }
  w27() {
    throw UnsupportedOperationException.x7();
  }
  x27(marker) {
    throw UnsupportedOperationException.x7();
  }
  v27() {
    throw UnsupportedOperationException.x7();
  }
  y27(index) {
  }
  b28() {
    return 0;
  }
  i28(k) {
    throw UnsupportedOperationException.x7();
  }
  k2(index) {
    throw UnsupportedOperationException.x7();
  }
  q28(interval) {
    throw UnsupportedOperationException.x7();
  }
  t28(start, stop) {
    throw UnsupportedOperationException.x7();
  }
}
class EmptyStackException extends RuntimeException {
  static m2f(message, cause) {
    message = message === VOID ? null : message;
    cause = cause === VOID ? null : cause;
    var $this = this.ic(message, cause);
    captureStack($this, $this.l2f_1);
    return $this;
  }
}
class RecognitionException extends RuntimeException {
  static n2f(recognizer, inputStream, ctx, message) {
    message = message === VOID ? null : message;
    var $this = this.ia(message);
    captureStack($this, $this.c2b_1);
    $this.x2a_1 = recognizer;
    $this.y2a_1 = inputStream;
    $this.z2a_1 = ctx;
    $this.a2b_1 = null;
    $this.b2b_1 = -1;
    if (!($this.x2a_1 == null)) {
      $this.b2b_1 = $this.x2a_1.w29_1;
    }
    return $this;
  }
  r29() {
    return this.y2a_1;
  }
  m2d() {
    var tmp0_safe_receiver = this.x2a_1;
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.q2c();
    return tmp1_safe_receiver == null ? null : tmp1_safe_receiver.u2i(this.b2b_1, this.z2a_1);
  }
}
class FailedPredicateException extends RecognitionException {}
class InputMismatchException extends RecognitionException {
  static k2d(recognizer) {
    var $this = this.n2f(recognizer, recognizer.v2b(), ensureNotNull(recognizer.j2b_1));
    init_org_antlr_v4_kotlinruntime_InputMismatchException($this);
    $this.a2b_1 = recognizer.j2e();
    return $this;
  }
  static p2e(recognizer, state, ctx) {
    var $this = this.n2f(recognizer, recognizer.v2b(), ctx);
    init_org_antlr_v4_kotlinruntime_InputMismatchException($this);
    $this.b2b_1 = state;
    $this.a2b_1 = recognizer.j2e();
    return $this;
  }
}
class Companion_2 {
  constructor() {
    this.o2f_1 = 0;
    this.p2f_1 = -2;
    this.q2f_1 = -3;
    this.r2f_1 = 0;
    this.s2f_1 = 1;
    this.t2f_1 = 0;
    this.u2f_1 = 1114111;
  }
}
class Recognizer {
  constructor() {
    Companion_getInstance_4();
    this.v29_1 = ArrayList.c2(listOf(Companion_getInstance_1().j2a_1));
    this.w29_1 = -1;
  }
  x29() {
    return Companion_getInstance_5().g2l(this.b2h());
  }
  z2h() {
    return this.v29_1;
  }
  x2h() {
    return new ProxyErrorListener(this.z2h());
  }
  a2i(listener) {
    this.v29_1.g2(listener);
  }
  b2i(_localctx, ruleIndex, predIndex) {
    return true;
  }
  c2i(localctx, precedence) {
    return true;
  }
  d2i(_localctx, ruleIndex, actionIndex) {
  }
}
class Lexer extends Recognizer {
  constructor(input) {
    super();
    this.x2f_1 = input;
    this.y2f_1 = new Pair(this, input);
    this.z2f_1 = Companion_getInstance_0().b2a_1;
    this.a2g_1 = null;
    this.b2g_1 = -1;
    this.c2g_1 = 0;
    this.d2g_1 = 0;
    this.e2g_1 = false;
    this.f2g_1 = 0;
    this.g2g_1 = 0;
    this.h2g_1 = IntegerStack.p2g();
    this.i2g_1 = 0;
    this.j2g_1 = null;
    var tmp = this;
    // Inline function 'kotlin.emptyArray' call
    tmp.k2g_1 = [];
    var tmp_0 = this;
    // Inline function 'kotlin.emptyArray' call
    tmp_0.l2g_1 = [];
    var tmp_1 = this;
    // Inline function 'kotlin.emptyArray' call
    tmp_1.m2g_1 = [];
  }
  w2e() {
    return this.z2f_1;
  }
  q2g(_set____db54di) {
    this.a2g_1 = _set____db54di;
  }
  j1s() {
    return this.a2g_1;
  }
  h1e() {
    return this.p2c().w2g_1;
  }
  m29() {
    return this.p2c().x2g_1;
  }
  a2h() {
    return this.x2f_1.v27();
  }
  b2h() {
    return this.m2g_1;
  }
  c2h() {
    var tokens = ArrayList.b2();
    var t = this.g28();
    while (!(t.g1s() === -1)) {
      tokens.g2(t);
      t = this.g28();
    }
    return tokens;
  }
  d2h() {
    this.x2f_1.y27(0);
    this.q2g(null);
    this.g2g_1 = 0;
    this.f2g_1 = 0;
    this.b2g_1 = -1;
    this.d2g_1 = -1;
    this.c2g_1 = -1;
    this.j2g_1 = null;
    this.e2g_1 = false;
    this.i2g_1 = 0;
    this.h2g_1.b4();
    var tmp0_safe_receiver = this.p2c();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.d2h();
    }
  }
  g28() {
    var tokenStartMarker = this.x2f_1.w27();
    try {
      outer: while (true) {
        if (this.e2g_1) {
          this.g2h();
          return ensureNotNull(this.j1s());
        }
        this.q2g(null);
        this.f2g_1 = 0;
        this.b2g_1 = this.x2f_1.v27();
        this.d2g_1 = this.p2c().x2g_1;
        this.c2g_1 = this.p2c().w2g_1;
        this.j2g_1 = null;
        do {
          this.g2g_1 = 0;
          var ttype;
          try {
            ttype = this.p2c().h2h(this.x2f_1, this.i2g_1);
          } catch ($p) {
            if ($p instanceof LexerNoViableAltException) {
              var e = $p;
              this.i2h(e);
              this.j2h(e);
              ttype = -3;
            } else {
              throw $p;
            }
          }
          if (this.x2f_1.d28(1) === -1) {
            this.e2g_1 = true;
          }
          if (this.g2g_1 === 0) {
            this.g2g_1 = ttype;
          }
          if (this.g2g_1 === -3) {
            continue outer;
          }
        }
         while (this.g2g_1 === -2);
        if (this.j1s() == null) {
          this.k2h();
        }
        return ensureNotNull(this.j1s());
      }
    }finally {
      this.x2f_1.x27(tokenStartMarker);
    }
  }
  l2h() {
    this.g2g_1 = -3;
  }
  m2h() {
    this.g2g_1 = -2;
  }
  n2h(m) {
    this.i2g_1 = m;
  }
  o2h(m) {
    if (false) {
      System_getInstance().h27_1.g27('pushMode ' + m);
    }
    this.h2g_1.p2h(this.i2g_1);
    this.n2h(m);
  }
  q2h() {
    if (this.h2g_1.r2h()) {
      throw EmptyStackException.m2f();
    }
    if (false) {
      System_getInstance().h27_1.g27('popMode back to ' + this.h2g_1.s2h());
    }
    this.n2h(this.h2g_1.t2h());
    return this.i2g_1;
  }
  u2h(token) {
    this.q2g(token);
  }
  k2h() {
    var t = this.w2e().d2a(this.y2f_1, this.g2g_1, this.j2g_1, this.f2g_1, this.b2g_1, this.a2h() - 1 | 0, this.c2g_1, this.d2g_1);
    this.u2h(t);
    return t;
  }
  g2h() {
    var cPos = this.m29();
    var eof = this.w2e().d2a(this.y2f_1, -1, null, 0, this.x2f_1.v27(), this.x2f_1.v27() - 1 | 0, this.h1e(), cPos);
    this.u2h(eof);
    return eof;
  }
  j2h(e) {
    if (!(this.x2f_1.d28(1) === -1)) {
      this.p2c().v2h(this.x2f_1);
    }
  }
  i2h(e) {
    var text = this.x2f_1.q28(Companion_getInstance_25().y28(this.b2g_1, this.x2f_1.v27()));
    var msg = "token recognition error at: '" + this.w2h(text) + "'";
    this.x2h().m27(this, null, this.c2g_1, this.d2g_1, msg, e);
  }
  w2h(s) {
    var buf = StringBuilder.z();
    var inductionVariable = 0;
    var last = s.length;
    while (inductionVariable < last) {
      var c = charCodeAt(s, inductionVariable);
      inductionVariable = inductionVariable + 1 | 0;
      // Inline function 'kotlin.code' call
      var tmp$ret$0 = Char__toInt_impl_vasixd(c);
      buf.a1(this.y2h(tmp$ret$0));
    }
    return buf.toString();
  }
  y2h(c) {
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
  static p2i(lexer, input, startIndex, deadEndConfigs) {
    var $this = this.n2f(lexer, input, null);
    captureStack($this, $this.o2i_1);
    $this.m2i_1 = startIndex;
    $this.n2i_1 = deadEndConfigs;
    return $this;
  }
  r29() {
    var tmp = super.r29();
    return isInterface(tmp, CharStream) ? tmp : THROW_CCE();
  }
  toString() {
    var symbol = '';
    if (this.m2i_1 >= 0 && this.m2i_1 < this.r29().b28()) {
      symbol = this.r29().q28(Companion_getInstance_25().y28(this.m2i_1, this.m2i_1));
      symbol = Utils_instance.q2i(symbol, false);
    }
    return '' + getKClassFromExpression(this).x() + "('" + symbol + "')";
  }
}
class NoViableAltException extends RecognitionException {
  static r2i(recognizer, input, startToken, offendingToken, deadEndConfigs, ctx) {
    input = input === VOID ? recognizer.v2b() : input;
    startToken = startToken === VOID ? recognizer.j2e() : startToken;
    offendingToken = offendingToken === VOID ? recognizer.j2e() : offendingToken;
    deadEndConfigs = deadEndConfigs === VOID ? null : deadEndConfigs;
    ctx = ctx === VOID ? ensureNotNull(recognizer.j2b_1) : ctx;
    var $this = this.n2f(recognizer, input, ctx);
    captureStack($this, $this.y2d_1);
    $this.w2d_1 = startToken;
    $this.x2d_1 = deadEndConfigs;
    $this.a2b_1 = offendingToken;
    return $this;
  }
}
class Parser extends Recognizer {
  constructor(input) {
    super();
    this.f2b_1 = null;
    this.g2b_1 = new DefaultErrorStrategy();
    this.h2b_1 = input;
    var tmp = this;
    // Inline function 'kotlin.also' call
    var this_0 = IntegerStack.p2g();
    this_0.p2h(0);
    tmp.i2b_1 = this_0;
    this.j2b_1 = null;
    this.k2b_1 = true;
    this.l2b_1 = null;
    this.m2b_1 = ArrayList.b2();
    this.n2b_1 = 0;
    this.o2b_1 = false;
    this.s2i(input);
  }
  w2e() {
    return this.h2b_1.u27().w2e();
  }
  s2i(value) {
    this.h2b_1 = DummyTokenStream_instance;
    this.d2h();
    this.h2b_1 = value;
  }
  v2b() {
    return this.h2b_1;
  }
  j2e() {
    return this.h2b_1.i28(1);
  }
  t2i() {
    var tmp;
    if (this.i2b_1.r2h()) {
      tmp = -1;
    } else {
      tmp = this.i2b_1.s2h();
    }
    return tmp;
  }
  m2d() {
    return this.q2c().u2i(this.w29_1, this.j2b_1);
  }
  d2h() {
    this.v2b().y27(0);
    this.g2b_1.p2a(this);
    this.j2b_1 = null;
    this.n2b_1 = 0;
    this.o2b_1 = false;
    this.i2b_1.b4();
    this.i2b_1.p2h(0);
    var tmp0_safe_receiver = this.p2c();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.d2h();
    }
  }
  f2j(ttype) {
    var t = this.j2e();
    if (ensureNotNull(t).g1s() === ttype) {
      if (ttype === -1) {
        this.o2b_1 = true;
      }
      this.g2b_1.t2a(this);
      this.u2b();
    } else {
      t = this.g2b_1.m2e(this);
      if (this.k2b_1 && t.u28() === -1) {
        ensureNotNull(this.j2b_1).q2j(this.g2j(this.j2b_1, t));
      }
    }
    return t;
  }
  r2j() {
    var _iterator__ex2g4s = this.m2b_1.d1();
    while (_iterator__ex2g4s.e1()) {
      var listener = _iterator__ex2g4s.f1();
      listener.s2j(ensureNotNull(this.j2b_1));
      ensureNotNull(this.j2b_1).t2j(listener);
    }
  }
  u2j() {
    var _iterator__ex2g4s = asReversed(this.m2b_1).d1();
    while (_iterator__ex2g4s.e1()) {
      var listener = _iterator__ex2g4s.f1();
      ensureNotNull(this.j2b_1).v2j(listener);
      listener.w2j(ensureNotNull(this.j2b_1));
    }
  }
  p2b(offendingToken, msg, e) {
    this.n2b_1 = this.n2b_1 + 1 | 0;
    var line = offendingToken.h1e();
    var charPositionInLine = offendingToken.m29();
    var listener = this.x2h();
    listener.m27(this, offendingToken, line, charPositionInLine, msg, e);
  }
  u2b() {
    var o = this.j2e();
    if (!(ensureNotNull(o).g1s() === -1)) {
      this.v2b().c28();
    }
    var tmp;
    if (this.k2b_1) {
      tmp = true;
    } else {
      // Inline function 'kotlin.collections.isNotEmpty' call
      tmp = !this.m2b_1.b1();
    }
    if (tmp) {
      if (this.g2b_1.s2a(this)) {
        var node = ensureNotNull(this.j2b_1).q2j(this.g2j(this.j2b_1, o));
        var _iterator__ex2g4s = this.m2b_1.d1();
        while (_iterator__ex2g4s.e1()) {
          var listener = _iterator__ex2g4s.f1();
          listener.a2k(node);
        }
      } else {
        var node_0 = ensureNotNull(this.j2b_1).y2j(this.x2j(this.j2b_1, o));
        var _iterator__ex2g4s_0 = this.m2b_1.d1();
        while (_iterator__ex2g4s_0.e1()) {
          var listener_0 = _iterator__ex2g4s_0.f1();
          listener_0.z2j(node_0);
        }
      }
    }
    return o;
  }
  x2j(parent, t) {
    return new TerminalNodeImpl(t);
  }
  g2j(parent, t) {
    return new ErrorNodeImpl(t);
  }
  b2k() {
    var parent = ensureNotNull(this.j2b_1).h2f();
    if (parent == null)
      null;
    else
      parent.c2k(ensureNotNull(this.j2b_1));
  }
  d2k(localctx, state, ruleIndex) {
    this.w29_1 = state;
    this.j2b_1 = localctx;
    ensureNotNull(this.j2b_1).n2j_1 = this.h2b_1.i28(1);
    if (this.k2b_1) {
      this.b2k();
    }
    this.r2j();
  }
  e2k() {
    if (this.o2b_1) {
      ensureNotNull(this.j2b_1).o2j_1 = this.h2b_1.i28(1);
    } else {
      ensureNotNull(this.j2b_1).o2j_1 = this.h2b_1.i28(-1);
    }
    this.u2j();
    this.w29_1 = ensureNotNull(this.j2b_1).e2e_1;
    this.j2b_1 = ensureNotNull(this.j2b_1).h2f();
  }
  f2k(localctx, altNum) {
    localctx.g2k(altNum);
    if (this.k2b_1 && !(this.j2b_1 === localctx)) {
      var parent = ensureNotNull(this.j2b_1).h2f();
      if (!(parent == null)) {
        parent.h2k();
        parent.c2k(localctx);
      }
    }
    this.j2b_1 = localctx;
  }
  c2i(localctx, precedence) {
    return precedence >= this.i2b_1.s2h();
  }
  i2k(ctx) {
    var p = ctx;
    var ruleNames = this.c2e();
    var stack = ArrayList.b2();
    while (!(p == null)) {
      var ruleIndex = p.i2e();
      if (ruleIndex < 0) {
        stack.g2('n/a');
      } else {
        stack.g2(ruleNames[ruleIndex]);
      }
      p = p.h2f();
    }
    return stack;
  }
  j2k(ctx, $super) {
    ctx = ctx === VOID ? this.j2b_1 : ctx;
    return $super === VOID ? this.i2k(ctx) : $super.i2k.call(this, ctx);
  }
}
class Companion_3 {
  constructor() {
    Companion_instance_3 = this;
    this.k2k_1 = ParserRuleContext.l2k();
  }
}
class ParseTree {}
class RuleNode {}
class RuleContext {
  r2h() {
    return this.e2e_1 === -1;
  }
  o2k() {
    return this;
  }
  m1f() {
    if (this.n2k() === 0) {
      return '';
    }
    var builder = StringBuilder.z();
    var inductionVariable = 0;
    var last = this.n2k();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        builder.a1(ensureNotNull(this.u2k(i)).m1f());
      }
       while (inductionVariable < last);
    return builder.toString();
  }
  i2e() {
    return this.g2e_1;
  }
  g2k(value) {
  }
  n2k() {
    return this.h2e_1;
  }
  static p2k() {
    var $this = createThis(this);
    init_org_antlr_v4_kotlinruntime_RuleContext($this);
    return $this;
  }
  static r2k(parent, invokingState) {
    var $this = createThis(this);
    init_org_antlr_v4_kotlinruntime_RuleContext($this);
    $this.d2e_1 = parent;
    $this.e2e_1 = invokingState;
    return $this;
  }
  h2f() {
    return this.d2e_1;
  }
  s2k(value) {
    this.d2e_1 = value;
  }
  u2k(i) {
    return null;
  }
  toString() {
    return this.z2k(null, null);
  }
  z2k(ruleNames, stop) {
    var buf = StringBuilder.z();
    var p = this;
    buf.a1('[');
    while (!(p == null) && !(p === stop)) {
      if (ruleNames == null) {
        if (!p.r2h()) {
          buf.df(p.e2e_1);
        }
      } else {
        var ruleIndex = p.i2e();
        var tmp;
        if (ruleIndex >= 0 && ruleIndex < ruleNames.i2()) {
          tmp = ruleNames.k2(ruleIndex);
        } else {
          tmp = ruleIndex.toString();
        }
        var ruleName = tmp;
        buf.a1(ruleName);
      }
      if (!(p.d2e_1 == null) && (!(ruleNames == null) || !ensureNotNull(p.d2e_1).r2h())) {
        buf.a1(' ');
      }
      p = p.d2e_1;
    }
    buf.a1(']');
    return buf.toString();
  }
}
class ParserRuleContext extends RuleContext {
  m2k() {
    var start = this.n2j_1;
    var stop = this.o2j_1;
    if (!(start == null) && !(stop == null)) {
      var endPoint = stop.a2a();
      if (!(endPoint == null)) {
        return new Position(start.z29(), endPoint);
      }
    }
    return null;
  }
  n2k() {
    var tmp0_safe_receiver = this.m2j_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.i2();
    return tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
  }
  o2k() {
    return this;
  }
  static l2k() {
    Companion_getInstance_3();
    var $this = this.p2k();
    init_org_antlr_v4_kotlinruntime_ParserRuleContext($this);
    return $this;
  }
  static q2k(parent, invokingStateNumber) {
    Companion_getInstance_3();
    var $this = this.r2k(parent, invokingStateNumber);
    init_org_antlr_v4_kotlinruntime_ParserRuleContext($this);
    return $this;
  }
  h2f() {
    var tmp = this.d2e_1;
    return (tmp == null ? true : tmp instanceof ParserRuleContext) ? tmp : THROW_CCE();
  }
  s2k(value) {
    var tmp = this;
    tmp.d2e_1 = (value == null ? true : value instanceof ParserRuleContext) ? value : THROW_CCE();
  }
  t2j(listener) {
  }
  v2j(listener) {
  }
  t2k(t) {
    var childrenTemp = this.m2j_1;
    if (childrenTemp == null) {
      childrenTemp = ArrayList.b2();
      this.m2j_1 = childrenTemp;
    }
    childrenTemp.g2(t);
    return t;
  }
  c2k(ruleInvocation) {
    return this.t2k(ruleInvocation);
  }
  y2j(t) {
    t.s2k(this);
    return this.t2k(t);
  }
  q2j(errorNode) {
    errorNode.s2k(this);
    return this.t2k(errorNode);
  }
  h2k() {
    var tempChildren = this.m2j_1;
    if (tempChildren == null)
      null;
    else
      tempChildren.e4(tempChildren.i2() - 1 | 0);
  }
  u2k(i) {
    var tempChildren = this.m2j_1;
    var tmp;
    if (!(tempChildren == null) && i >= 0 && i < tempChildren.i2()) {
      tmp = tempChildren.k2(i);
    } else {
      tmp = null;
    }
    return tmp;
  }
  v2k(ctxType, i) {
    var tempChildren = this.m2j_1;
    if (tempChildren == null || i < 0 || i >= tempChildren.i2()) {
      return null;
    }
    var j = -1;
    var _iterator__ex2g4s = tempChildren.d1();
    while (_iterator__ex2g4s.e1()) {
      var o = _iterator__ex2g4s.f1();
      if (ctxType.nd(o)) {
        j = j + 1 | 0;
        if (j === i) {
          return isInterface(o, ParseTree) ? o : THROW_CCE();
        }
      }
    }
    return null;
  }
  w2k(ttype, i) {
    var tempChildren = this.m2j_1;
    if (tempChildren == null || i < 0 || i >= tempChildren.i2()) {
      return null;
    }
    var j = -1;
    var _iterator__ex2g4s = tempChildren.d1();
    while (_iterator__ex2g4s.e1()) {
      var o = _iterator__ex2g4s.f1();
      if (isInterface(o, TerminalNode)) {
        var symbol = o.x2k();
        if (symbol.g1s() === ttype) {
          j = j + 1 | 0;
          if (j === i) {
            return o;
          }
        }
      }
    }
    return null;
  }
  y2k(ctxType, i) {
    return this.v2k(ctxType, i);
  }
}
class ProxyErrorListener {
  constructor(delegates) {
    this.a2l_1 = delegates;
  }
  m27(recognizer, offendingSymbol, line, charPositionInLine, msg, e) {
    var _iterator__ex2g4s = this.a2l_1.d1();
    while (_iterator__ex2g4s.e1()) {
      var listener = _iterator__ex2g4s.f1();
      listener.m27(recognizer, offendingSymbol, line, charPositionInLine, msg, e);
    }
  }
  n27(recognizer, dfa, startIndex, stopIndex, exact, ambigAlts, configs) {
    var _iterator__ex2g4s = this.a2l_1.d1();
    while (_iterator__ex2g4s.e1()) {
      var listener = _iterator__ex2g4s.f1();
      listener.n27(recognizer, dfa, startIndex, stopIndex, exact, ambigAlts, configs);
    }
  }
  o27(recognizer, dfa, startIndex, stopIndex, conflictingAlts, configs) {
    var _iterator__ex2g4s = this.a2l_1.d1();
    while (_iterator__ex2g4s.e1()) {
      var listener = _iterator__ex2g4s.f1();
      listener.o27(recognizer, dfa, startIndex, stopIndex, conflictingAlts, configs);
    }
  }
  p27(recognizer, dfa, startIndex, stopIndex, prediction, configs) {
    var _iterator__ex2g4s = this.a2l_1.d1();
    while (_iterator__ex2g4s.e1()) {
      var listener = _iterator__ex2g4s.f1();
      listener.p27(recognizer, dfa, startIndex, stopIndex, prediction, configs);
    }
  }
}
class Companion_4 {
  constructor() {
    Companion_instance_4 = this;
    this.b2l_1 = -1;
    this.c2l_1 = HashMap.f8();
    this.d2l_1 = HashMap.f8();
  }
}
class RuntimeMetaData {
  constructor() {
    this.h2l_1 = '4.13.1';
  }
  i2l(generatingToolVersion, compileTimeVersion) {
    var runtimeConflictsWithGeneratingTool = false;
    if (!(generatingToolVersion == null)) {
      runtimeConflictsWithGeneratingTool = (!('4.13.1' === generatingToolVersion) && !(this.j2l('4.13.1') === this.j2l(generatingToolVersion)));
    }
    var runtimeConflictsWithCompileTimeTool = !('4.13.1' === compileTimeVersion) && !(this.j2l('4.13.1') === this.j2l(compileTimeVersion));
    if (runtimeConflictsWithGeneratingTool) {
      System_getInstance().i27_1.g27('ANTLR Tool version ' + generatingToolVersion + ' used for code generation does not match the current runtime version 4.13.1');
    }
    if (runtimeConflictsWithCompileTimeTool) {
      System_getInstance().i27_1.g27('ANTLR Runtime version ' + compileTimeVersion + ' used for parser compilation does not match the current runtime version 4.13.1');
    }
  }
  j2l(version) {
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
    this.k2l_1 = source;
    this.l2l_1 = sourceName;
    this.o2l_1 = 0;
    var _destruct__k2r9zo = codePointIndicesFast(this.k2l_1);
    var codePointIndices = _destruct__k2r9zo.ni();
    var size = _destruct__k2r9zo.oi();
    this.m2l_1 = codePointIndices;
    this.n2l_1 = size;
  }
  c28() {
    if ((this.n2l_1 - this.o2l_1 | 0) === 0) {
      // Inline function 'com.strumenta.antlrkotlin.runtime.assert' call
      if (!(this.d28(1) === -1)) {
        throw AssertionError.yc(null);
      }
      throw IllegalStateException.s4('cannot consume EOF');
    }
    this.o2l_1 = this.o2l_1 + 1 | 0;
  }
  v27() {
    return this.o2l_1;
  }
  b28() {
    return this.n2l_1;
  }
  w27() {
    return -1;
  }
  x27(marker) {
  }
  y27(index) {
    this.o2l_1 = index;
  }
  toString() {
    return this.q28(Companion_getInstance_25().y28(0, this.n2l_1 - 1 | 0));
  }
  q28(interval) {
    if (interval.r28_1 >= this.n2l_1 || interval.s28_1 < 0) {
      return '';
    }
    var start = this.m2l_1[interval.r28_1];
    var bPlus1 = interval.s28_1 + 1 | 0;
    var tmp;
    if (bPlus1 < this.n2l_1) {
      tmp = this.m2l_1[bPlus1];
    } else {
      tmp = this.k2l_1.length;
    }
    var stop = tmp;
    return substring(this.k2l_1, start, stop);
  }
  d28(i) {
    return i < 0 ? codePoint(this, this.o2l_1 + i | 0) : i > 0 ? codePoint(this, (this.o2l_1 + i | 0) - 1 | 0) : 0;
  }
}
class Companion_5 {
  constructor() {
    Companion_instance_5 = this;
    var tmp = this;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp.e2l_1 = Array(0);
    this.f2l_1 = new VocabularyImpl(this.e2l_1, this.e2l_1, this.e2l_1);
  }
  g2l(tokenNames) {
    // Inline function 'kotlin.collections.isNullOrEmpty' call
    var tmp;
    if (tokenNames == null) {
      tmp = true;
    } else {
      // Inline function 'kotlin.collections.isEmpty' call
      tmp = tokenNames.length === 0;
    }
    if (tmp) {
      return this.f2l_1;
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
    tmp.s2l_1 = literalNames == null ? Companion_getInstance_5().e2l_1 : literalNames;
    var tmp_0 = this;
    tmp_0.t2l_1 = symbolicNames == null ? Companion_getInstance_5().e2l_1 : symbolicNames;
    var tmp_1 = this;
    tmp_1.u2l_1 = displayNames == null ? Companion_getInstance_5().e2l_1 : displayNames;
    var tmp_2 = this;
    var tmp0 = this.u2l_1.length;
    var tmp0_0 = this.s2l_1.length;
    // Inline function 'kotlin.math.max' call
    var b = this.t2l_1.length;
    // Inline function 'kotlin.math.max' call
    var b_0 = Math.max(tmp0_0, b);
    tmp_2.v2l_1 = Math.max(tmp0, b_0) - 1 | 0;
  }
  w2l(tokenType) {
    var tmp;
    if (0 <= tokenType ? tokenType <= (this.s2l_1.length - 1 | 0) : false) {
      tmp = this.s2l_1[tokenType];
    } else {
      tmp = null;
    }
    return tmp;
  }
  x2l(tokenType) {
    if (0 <= tokenType ? tokenType <= (this.t2l_1.length - 1 | 0) : false) {
      return this.t2l_1[tokenType];
    }
    return tokenType === -1 ? 'EOF' : null;
  }
  y29(tokenType) {
    if (0 <= tokenType ? tokenType <= (this.u2l_1.length - 1 | 0) : false) {
      var displayName = this.u2l_1[tokenType];
      if (!(displayName == null)) {
        return displayName;
      }
    }
    var literalName = this.w2l(tokenType);
    if (!(literalName == null)) {
      return literalName;
    }
    var symbolicName = this.x2l(tokenType);
    return symbolicName == null ? tokenType.toString() : symbolicName;
  }
}
class Companion_6 {
  constructor() {
    Companion_instance_6 = this;
    this.y2l_1 = Regex.xf('\r\n|\r|\n');
  }
}
class Point {
  constructor(line, column) {
    Companion_getInstance_6();
    this.p2l_1 = line;
    this.q2l_1 = column;
    // Inline function 'kotlin.require' call
    if (!(this.p2l_1 >= 1)) {
      var message = 'Line should be equal or greater than 1, but was ' + this.p2l_1;
      throw IllegalArgumentException.t1(toString_0(message));
    }
    // Inline function 'kotlin.require' call
    if (!(this.q2l_1 >= 0)) {
      var message_0 = 'Column should be equal or greater than 0, but was ' + this.q2l_1;
      throw IllegalArgumentException.t1(toString_0(message_0));
    }
  }
  toString() {
    return 'line ' + this.p2l_1 + ' : column ' + this.q2l_1;
  }
  z2l(other) {
    return this.p2l_1 < other.p2l_1 || (this.p2l_1 === other.p2l_1 && this.q2l_1 < other.q2l_1);
  }
  r2l(text) {
    var matches = Companion_getInstance_6().y2l_1.cg(text);
    var line = this.p2l_1 + count(matches) | 0;
    var tmp;
    if (none(matches)) {
      tmp = this.q2l_1 + text.length | 0;
    } else {
      tmp = (text.length - last(matches).gg().x2_1 | 0) - 1 | 0;
    }
    var col = tmp;
    return new Point(line, col);
  }
  hashCode() {
    var result = this.p2l_1;
    result = imul(result, 31) + this.q2l_1 | 0;
    return result;
  }
  equals(other) {
    if (this === other)
      return true;
    if (!(other instanceof Point))
      return false;
    var tmp0_other_with_cast = other instanceof Point ? other : THROW_CCE();
    if (!(this.p2l_1 === tmp0_other_with_cast.p2l_1))
      return false;
    if (!(this.q2l_1 === tmp0_other_with_cast.q2l_1))
      return false;
    return true;
  }
}
class Position {
  constructor(start, end) {
    this.a2m_1 = start;
    this.b2m_1 = end;
    // Inline function 'kotlin.require' call
    if (!(this.a2m_1.z2l(this.b2m_1) || this.a2m_1.equals(this.b2m_1))) {
      var message = 'End should follows start or be the same as start (start: ' + this.a2m_1.toString() + ', end: ' + this.b2m_1.toString() + ')';
      throw IllegalArgumentException.t1(toString_0(message));
    }
  }
  toString() {
    return 'Position(start=' + this.a2m_1.toString() + ', end=' + this.b2m_1.toString() + ')';
  }
  hashCode() {
    var result = this.a2m_1.hashCode();
    result = imul(result, 31) + this.b2m_1.hashCode() | 0;
    return result;
  }
  equals(other) {
    if (this === other)
      return true;
    if (!(other instanceof Position))
      return false;
    var tmp0_other_with_cast = other instanceof Position ? other : THROW_CCE();
    if (!this.a2m_1.equals(tmp0_other_with_cast.a2m_1))
      return false;
    if (!this.b2m_1.equals(tmp0_other_with_cast.b2m_1))
      return false;
    return true;
  }
}
class Companion_7 {
  constructor() {
    this.c2m_1 = 0;
  }
}
class ATN {
  constructor(grammarType, maxTokenType) {
    this.d2c_1 = grammarType;
    this.e2c_1 = maxTokenType;
    this.f2c_1 = ArrayList.b2();
    this.g2c_1 = ArrayList.b2();
    this.h2c_1 = null;
    this.i2c_1 = null;
    this.j2c_1 = LinkedHashMap.tb();
    this.k2c_1 = null;
    this.l2c_1 = null;
    this.m2c_1 = ArrayList.b2();
  }
  d2m() {
    return this.g2c_1.i2();
  }
  t2e(s, ctx) {
    var anal = new LL1Analyzer(this);
    return anal.f2m(s, ctx);
  }
  r2c(s) {
    var nextTokenWithinRule = s.x2c_1;
    if (!(nextTokenWithinRule == null)) {
      return nextTokenWithinRule;
    }
    nextTokenWithinRule = this.t2e(s, null);
    nextTokenWithinRule.g2m(true);
    s.x2c_1 = nextTokenWithinRule;
    return nextTokenWithinRule;
  }
  h2m(state) {
    if (!(state == null)) {
      state.s2c_1 = this;
      state.t2c_1 = this.f2c_1.i2();
    }
    this.f2c_1.g2(state);
  }
  i2m(s) {
    this.g2c_1.g2(s);
    s.q2m_1 = this.g2c_1.i2() - 1 | 0;
    return s.q2m_1;
  }
  s2m(decision) {
    var tmp;
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!this.g2c_1.b1()) {
      tmp = this.g2c_1.k2(decision);
    } else {
      tmp = null;
    }
    return tmp;
  }
  u2i(stateNumber, context) {
    if (stateNumber < 0 || stateNumber >= this.f2c_1.i2()) {
      throw IllegalArgumentException.t1('Invalid state number.');
    }
    var ctx = context;
    var s = this.f2c_1.k2(stateNumber);
    var following = this.r2c(ensureNotNull(s));
    if (!following.yk(-2)) {
      return following;
    }
    var expected = IntervalSet.y2b();
    expected.g2f(following);
    expected.i2f(-2);
    while (!(ctx == null) && ctx.e2e_1 >= 0 && following.yk(-2)) {
      var invokingState = this.f2c_1.k2(ctx.e2e_1);
      var tmp = ensureNotNull(invokingState).s2e(0);
      var rt = tmp instanceof RuleTransition ? tmp : THROW_CCE();
      following = this.r2c(rt.d2f_1);
      expected.g2f(following);
      expected.i2f(-2);
      ctx = ctx.h2f();
    }
    if (following.yk(-2)) {
      expected.z2b(-1);
    }
    return expected;
  }
}
class Companion_8 {
  constructor() {
    this.t2m_1 = 1073741824;
  }
}
class ATNConfig {
  z2m() {
    return this.x2m_1 & -1073741825;
  }
  a2n(value) {
    var tmp;
    if (value) {
      this.x2m_1 = this.x2m_1 | 1073741824;
      tmp = Unit_instance;
    } else {
      this.x2m_1 = this.x2m_1 & -1073741825;
      tmp = Unit_instance;
    }
    return tmp;
  }
  b2n() {
    return !((this.x2m_1 & 1073741824) === 0);
  }
  static c2n(state, alt, context, semanticContext) {
    semanticContext = semanticContext === VOID ? Empty_getInstance() : semanticContext;
    var $this = createThis(this);
    init_org_antlr_v4_kotlinruntime_atn_ATNConfig($this);
    $this.u2m_1 = state;
    $this.v2m_1 = alt;
    $this.w2m_1 = context;
    $this.y2m_1 = semanticContext;
    return $this;
  }
  static d2n(c, state, semanticContext) {
    return this.e2n(c, state, c.w2m_1, semanticContext);
  }
  static f2n(c, semanticContext) {
    return this.e2n(c, c.u2m_1, c.w2m_1, semanticContext);
  }
  static e2n(c, state, context, semanticContext) {
    context = context === VOID ? c.w2m_1 : context;
    semanticContext = semanticContext === VOID ? c.y2m_1 : semanticContext;
    var $this = createThis(this);
    init_org_antlr_v4_kotlinruntime_atn_ATNConfig($this);
    $this.u2m_1 = state;
    $this.v2m_1 = c.v2m_1;
    $this.w2m_1 = context;
    $this.y2m_1 = semanticContext;
    $this.x2m_1 = c.x2m_1;
    return $this;
  }
  equals(other) {
    var tmp;
    if (other instanceof ATNConfig) {
      tmp = this.g2n(other);
    } else {
      tmp = false;
    }
    return tmp;
  }
  g2n(other) {
    if (this === other) {
      return true;
    }
    if (other == null) {
      return false;
    }
    return this.u2m_1.t2c_1 === other.u2m_1.t2c_1 && this.v2m_1 === other.v2m_1 && equals(this.w2m_1, other.w2m_1) && equals(this.y2m_1, other.y2m_1) && this.b2n() === other.b2n();
  }
  hashCode() {
    var hashCode = MurmurHash_instance.i2n(7);
    hashCode = MurmurHash_instance.j2n(hashCode, this.u2m_1.t2c_1);
    hashCode = MurmurHash_instance.j2n(hashCode, this.v2m_1);
    hashCode = MurmurHash_instance.k2n(hashCode, this.w2m_1);
    hashCode = MurmurHash_instance.k2n(hashCode, this.y2m_1);
    hashCode = MurmurHash_instance.l2n(hashCode, 4);
    return hashCode;
  }
  toString() {
    return this.m2n(null, true);
  }
  m2n(recog, showAlt) {
    var buf = StringBuilder.z();
    buf.a1('(');
    buf.g1(this.u2m_1);
    if (showAlt) {
      buf.a1(',');
      buf.df(this.v2m_1);
    }
    if (!(this.w2m_1 == null)) {
      buf.a1(',[');
      buf.a1(toString_0(ensureNotNull(this.w2m_1)));
      buf.a1(']');
    }
    if (!(this.y2m_1 === Empty_getInstance())) {
      buf.a1(',');
      buf.g1(this.y2m_1);
    }
    if (this.z2m() > 0) {
      buf.a1(',up=');
      buf.df(this.z2m());
    }
    buf.a1(')');
    return buf.toString();
  }
}
class Array2DHashSet {
  constructor(comparator, initialCapacity, initialBucketCapacity) {
    comparator = comparator === VOID ? Companion_getInstance_27().l2x_1 : comparator;
    initialCapacity = initialCapacity === VOID ? 16 : initialCapacity;
    initialBucketCapacity = initialBucketCapacity === VOID ? 8 : initialBucketCapacity;
    this.x2n_1 = comparator;
    this.y2n_1 = initialCapacity;
    this.z2n_1 = initialBucketCapacity;
    this.b2o_1 = 0;
    this.c2o_1 = 1;
    this.d2o_1 = 0;
    this.a2o_1 = this.v2n(this.y2n_1);
    var tmp = this;
    // Inline function 'kotlin.math.floor' call
    var x = this.y2n_1 * 0.75;
    var tmp$ret$0 = Math.floor(x);
    tmp.d2o_1 = numberToInt(tmp$ret$0);
  }
  e2o(o) {
    if (this.b2o_1 > this.d2o_1) {
      this.i2o();
    }
    return this.f2o(o);
  }
  f2o(o) {
    var b = this.h2o(o);
    var bucket = this.a2o_1[b];
    if (bucket == null) {
      bucket = this.w2n(this.z2n_1);
      bucket[0] = o;
      this.a2o_1[b] = bucket;
      this.b2o_1 = this.b2o_1 + 1 | 0;
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
          this.b2o_1 = this.b2o_1 + 1 | 0;
          return o;
        }
        if (this.x2n_1.r2o(existing, o)) {
          return existing;
        }
      }
       while (inductionVariable <= last);
    var oldLength = bucket.length;
    bucket = copyOf(bucket, imul(bucket.length, 2));
    this.a2o_1[b] = bucket;
    bucket[oldLength] = o;
    this.b2o_1 = this.b2o_1 + 1 | 0;
    return o;
  }
  g2o(o) {
    if (o == null) {
      return o;
    }
    var b = this.h2o(o);
    var tmp0_elvis_lhs = this.a2o_1[b];
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
      if (this.x2n_1.r2o(e, o)) {
        return e;
      }
    }
    return null;
  }
  h2o(o) {
    var hash = this.x2n_1.p2o(o);
    return hash & (this.a2o_1.length - 1 | 0);
  }
  hashCode() {
    var hash = MurmurHash_instance.d2z();
    var indexedObject = this.a2o_1;
    var inductionVariable = 0;
    var last = indexedObject.length;
    $l$loop: while (inductionVariable < last) {
      var bucket = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      if (bucket == null) {
        continue $l$loop;
      }
      var _iterator__ex2g4s = arrayIterator(bucket);
      $l$loop_0: while (_iterator__ex2g4s.e1()) {
        var o = _iterator__ex2g4s.f1();
        if (o == null) {
          break $l$loop_0;
        }
        hash = MurmurHash_instance.j2n(hash, this.x2n_1.p2o(o));
      }
    }
    hash = MurmurHash_instance.l2n(hash, this.i2());
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
    if (other.i2() === this.i2()) {
      // Inline function 'kotlin.collections.containsAll' call
      tmp = this.o3(other);
    } else {
      tmp = false;
    }
    return tmp;
  }
  i2o() {
    var old = this.a2o_1;
    this.c2o_1 = this.c2o_1 + 4 | 0;
    var newCapacity = imul(this.a2o_1.length, 2);
    var newTable = this.v2n(newCapacity);
    var newBucketLengths = new Int32Array(newTable.length);
    this.a2o_1 = newTable;
    this.d2o_1 = numberToInt(newCapacity * 0.75);
    var oldSize = this.i2();
    var inductionVariable = 0;
    var last = old.length;
    $l$loop: while (inductionVariable < last) {
      var bucket = old[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      if (bucket == null) {
        continue $l$loop;
      }
      var _iterator__ex2g4s = arrayIterator(bucket);
      $l$loop_0: while (_iterator__ex2g4s.e1()) {
        var o = _iterator__ex2g4s.f1();
        if (o == null) {
          break $l$loop_0;
        }
        var b = this.h2o(o);
        var bucketLength = newBucketLengths[b];
        var newBucket;
        if (bucketLength === 0) {
          newBucket = this.w2n(this.z2n_1);
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
    if (!(this.b2o_1 === oldSize)) {
      throw AssertionError.yc(null);
    }
  }
  j2o(element) {
    var existing = this.e2o(element);
    return existing === element;
  }
  g2(element) {
    return this.j2o(element);
  }
  i2() {
    return this.b2o_1;
  }
  b1() {
    return this.b2o_1 === 0;
  }
  ji(element) {
    return this.k2o(element);
  }
  n2(element) {
    if (!true)
      return false;
    return this.ji(element);
  }
  k2o(obj) {
    var tmp;
    if (obj == null) {
      tmp = false;
    } else {
      tmp = !(this.g2o(obj) == null);
    }
    return tmp;
  }
  d1() {
    return new SetIterator(this, this.t7());
  }
  t7() {
    var a = this.w2n(this.i2());
    var i = 0;
    var indexedObject = this.a2o_1;
    var inductionVariable = 0;
    var last = indexedObject.length;
    $l$loop: while (inductionVariable < last) {
      var bucket = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      if (bucket == null) {
        continue $l$loop;
      }
      var _iterator__ex2g4s = arrayIterator(bucket);
      $l$loop_0: while (_iterator__ex2g4s.e1()) {
        var o = _iterator__ex2g4s.f1();
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
  l2o(element) {
    return this.m2o(this.u2n(element));
  }
  m2o(obj) {
    if (obj == null) {
      return false;
    }
    var b = this.h2o(obj);
    var tmp0_elvis_lhs = this.a2o_1[b];
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
        if (this.x2n_1.r2o(e, obj)) {
          var tmp6 = i + 1 | 0;
          // Inline function 'kotlin.collections.copyInto' call
          var endIndex = bucket.length;
          arrayCopy(bucket, bucket, i, tmp6, endIndex);
          bucket[bucket.length - 1 | 0] = null;
          this.b2o_1 = this.b2o_1 - 1 | 0;
          return true;
        }
      }
       while (inductionVariable <= last);
    return false;
  }
  ki(elements) {
    if (elements instanceof Array2DHashSet) {
      var indexedObject = this.a2o_1;
      var inductionVariable = 0;
      var last = indexedObject.length;
      $l$loop: while (inductionVariable < last) {
        var bucket = indexedObject[inductionVariable];
        inductionVariable = inductionVariable + 1 | 0;
        if (bucket == null) {
          continue $l$loop;
        }
        var _iterator__ex2g4s = arrayIterator(bucket);
        $l$loop_0: while (_iterator__ex2g4s.e1()) {
          var o = _iterator__ex2g4s.f1();
          if (o == null) {
            break $l$loop_0;
          }
          if (!this.k2o(this.u2n(o))) {
            return false;
          }
        }
      }
    } else {
      var _iterator__ex2g4s_0 = elements.d1();
      while (_iterator__ex2g4s_0.e1()) {
        var o_0 = _iterator__ex2g4s_0.f1();
        if (!(o_0 == null) && !this.k2o(this.u2n(o_0))) {
          return false;
        }
      }
    }
    return true;
  }
  o3(elements) {
    return this.ki(elements);
  }
  n2o(elements) {
    var changed = false;
    var _iterator__ex2g4s = elements.d1();
    while (_iterator__ex2g4s.e1()) {
      var o = _iterator__ex2g4s.f1();
      var existing = this.e2o(o);
      if (!(existing === o)) {
        changed = true;
      }
    }
    return changed;
  }
  j2(elements) {
    return this.n2o(elements);
  }
  toString() {
    if (this.i2() === 0) {
      return '{}';
    }
    var buf = StringBuilder.z();
    buf.a1('{');
    var first = true;
    var indexedObject = this.a2o_1;
    var inductionVariable = 0;
    var last = indexedObject.length;
    $l$loop: while (inductionVariable < last) {
      var bucket = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      if (bucket == null)
        continue $l$loop;
      var _iterator__ex2g4s = arrayIterator(bucket);
      $l$loop_0: while (_iterator__ex2g4s.e1()) {
        var o = _iterator__ex2g4s.f1();
        if (o == null) {
          break $l$loop_0;
        }
        if (first) {
          first = false;
        } else {
          buf.a1(', ');
        }
        buf.a1(toString_0(o));
      }
    }
    buf.a1('}');
    return buf.toString();
  }
  u2n(o) {
    return o;
  }
  v2n(capacity) {
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp = Array(capacity);
    return isArray(tmp) ? tmp : THROW_CCE();
  }
  w2n(capacity) {
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
  u2n(o) {
    var tmp;
    if (!(o instanceof ATNConfig)) {
      tmp = null;
    } else {
      tmp = o;
    }
    return tmp;
  }
  v2n(capacity) {
    // Inline function 'kotlin.arrayOfNulls' call
    return Array(capacity);
  }
  w2n(capacity) {
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
  o2o(obj) {
    var hashCode_0 = 7;
    hashCode_0 = imul(31, hashCode_0) + obj.u2m_1.t2c_1 | 0;
    hashCode_0 = imul(31, hashCode_0) + obj.v2m_1 | 0;
    hashCode_0 = imul(31, hashCode_0) + hashCode(obj.y2m_1) | 0;
    return hashCode_0;
  }
  p2o(obj) {
    return this.o2o(obj instanceof ATNConfig ? obj : THROW_CCE());
  }
  q2o(a, b) {
    if (a === b) {
      return true;
    }
    if (a == null || b == null) {
      return false;
    }
    return a.u2m_1.t2c_1 === b.u2m_1.t2c_1 && a.v2m_1 === b.v2m_1 && equals(a.y2m_1, b.y2m_1);
  }
  r2o(a, b) {
    var tmp = (a == null ? true : a instanceof ATNConfig) ? a : THROW_CCE();
    return this.q2o(tmp, (b == null ? true : b instanceof ATNConfig) ? b : THROW_CCE());
  }
}
class ATNConfigSet {
  constructor(fullCtx) {
    fullCtx = fullCtx === VOID ? true : fullCtx;
    this.s2o_1 = fullCtx;
    this.t2o_1 = new ConfigHashSet();
    this.u2o_1 = ArrayList.f2(7);
    this.v2o_1 = 0;
    this.w2o_1 = null;
    this.x2o_1 = false;
    this.y2o_1 = false;
    this.z2o_1 = -1;
    this.a2p_1 = false;
  }
  b2p() {
    var alts = BitSet.d2p();
    var _iterator__ex2g4s = this.u2o_1.d1();
    while (_iterator__ex2g4s.e1()) {
      var config = _iterator__ex2g4s.f1();
      alts.e2p(config.v2m_1);
    }
    return alts;
  }
  g2m(value) {
    this.a2p_1 = value;
    this.t2o_1 = null;
  }
  f2p(element) {
    return this.g2p(element, null);
  }
  g2(element) {
    return this.f2p(element instanceof ATNConfig ? element : THROW_CCE());
  }
  g2p(config, mergeCache) {
    if (this.a2p_1) {
      throw IllegalStateException.s4('This set is readonly');
    }
    if (!(config.y2m_1 === Empty_getInstance())) {
      this.x2o_1 = true;
    }
    if (config.z2m() > 0) {
      this.y2o_1 = true;
    }
    var existing = ensureNotNull(this.t2o_1).e2o(config);
    if (existing === config) {
      this.z2o_1 = -1;
      this.u2o_1.g2(config);
      return true;
    }
    var rootIsWildcard = !this.s2o_1;
    var merged = Companion_instance_17.k2p(existing.w2m_1, config.w2m_1, rootIsWildcard, mergeCache);
    var tmp = existing;
    var tmp0 = existing.x2m_1;
    // Inline function 'kotlin.math.max' call
    var b = config.x2m_1;
    tmp.x2m_1 = Math.max(tmp0, b);
    if (config.b2n()) {
      existing.a2n(true);
    }
    existing.w2m_1 = merged;
    return true;
  }
  l2p() {
    return this.u2o_1;
  }
  m2p(interpreter) {
    if (this.a2p_1) {
      throw IllegalStateException.s4('This set is readonly');
    }
    if (ensureNotNull(this.t2o_1).b1()) {
      return Unit_instance;
    }
    var _iterator__ex2g4s = this.u2o_1.d1();
    while (_iterator__ex2g4s.e1()) {
      var config = _iterator__ex2g4s.f1();
      config.w2m_1 = interpreter.n2p(ensureNotNull(config.w2m_1));
    }
  }
  o2p(elements) {
    var _iterator__ex2g4s = elements.d1();
    while (_iterator__ex2g4s.e1()) {
      var c = _iterator__ex2g4s.f1();
      this.f2p(c);
    }
    return false;
  }
  j2(elements) {
    return this.o2p(elements);
  }
  equals(other) {
    if (other === this) {
      return true;
    }
    if (!(other instanceof ATNConfigSet)) {
      return false;
    }
    return equals(this.u2o_1, other.u2o_1) && this.s2o_1 === other.s2o_1 && this.v2o_1 === other.v2o_1 && this.w2o_1 === other.w2o_1 && this.x2o_1 === other.x2o_1 && this.y2o_1 === other.y2o_1;
  }
  hashCode() {
    if (this.a2p_1) {
      if (this.z2o_1 === -1) {
        this.z2o_1 = hashCode(this.u2o_1);
      }
      return this.z2o_1;
    }
    return hashCode(this.u2o_1);
  }
  i2() {
    return this.u2o_1.i2();
  }
  b1() {
    return this.u2o_1.b1();
  }
  p2p(element) {
    if (this.t2o_1 == null) {
      throw UnsupportedOperationException.s9('This method is not implemented for readonly sets.');
    }
    return ensureNotNull(this.t2o_1).ji(element);
  }
  n2(element) {
    if (!(element instanceof ATNConfig))
      return false;
    return this.p2p(element instanceof ATNConfig ? element : THROW_CCE());
  }
  d1() {
    return this.u2o_1.d1();
  }
  toString() {
    var buf = StringBuilder.z();
    buf.a1(toString_0(this.l2p()));
    if (this.x2o_1) {
      buf.a1(',hasSemanticContext=');
      buf.cf(this.x2o_1);
    }
    if (!(this.v2o_1 === 0)) {
      buf.a1(',uniqueAlt=');
      buf.df(this.v2o_1);
    }
    if (!(this.w2o_1 == null)) {
      buf.a1(',conflictingAlts=');
      buf.g1(this.w2o_1);
    }
    if (this.y2o_1) {
      buf.a1(',dipsIntoOuterContext');
    }
    return buf.toString();
  }
  q2p(elements) {
    throw UnsupportedOperationException.x7();
  }
  o3(elements) {
    return this.q2p(elements);
  }
}
class Companion_9 {
  constructor() {
    Companion_instance_9 = this;
    var tmp = this;
    // Inline function 'kotlin.also' call
    var this_0 = ATNDeserializationOptions.u2p();
    this_0.v2p();
    tmp.w2p_1 = this_0;
  }
}
class ATNDeserializationOptions {
  x2p() {
    return this.s2p_1;
  }
  y2p() {
    return this.t2p_1;
  }
  static u2p() {
    Companion_getInstance_9();
    var $this = createThis(this);
    init_org_antlr_v4_kotlinruntime_atn_ATNDeserializationOptions($this);
    $this.s2p_1 = true;
    $this.t2p_1 = false;
    return $this;
  }
  v2p() {
    this.r2p_1 = true;
  }
}
class Companion_10 {
  constructor() {
    this.z2p_1 = 4;
  }
}
class ATNDeserializer {
  constructor(deserializationOptions) {
    deserializationOptions = deserializationOptions === VOID ? Companion_getInstance_9().w2p_1 : deserializationOptions;
    this.b2q_1 = deserializationOptions;
  }
  c2q(data) {
    return this.e2q(this.d2q(data));
  }
  e2q(data) {
    var p = {_v: 0};
    var _unary__edvuaz = p._v;
    p._v = _unary__edvuaz + 1 | 0;
    var version = data[_unary__edvuaz];
    if (!(version === 4)) {
      var reason = 'Could not deserialize ATN with version ' + version + ' (expected 4).';
      throw UnsupportedOperationException.s9(reason);
    }
    var tmp = get_entries();
    var _unary__edvuaz_0 = p._v;
    p._v = _unary__edvuaz_0 + 1 | 0;
    var grammarType = tmp.k2(data[_unary__edvuaz_0]);
    var _unary__edvuaz_1 = p._v;
    p._v = _unary__edvuaz_1 + 1 | 0;
    var maxTokenType = data[_unary__edvuaz_1];
    var atn = new ATN(grammarType, maxTokenType);
    var loopBackStateNumbers = ArrayList.b2();
    var endStateNumbers = ArrayList.b2();
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
          atn.h2m(null);
          continue $l$loop;
        }
        var _unary__edvuaz_4 = p._v;
        p._v = _unary__edvuaz_4 + 1 | 0;
        var ruleIndex = data[_unary__edvuaz_4];
        var s = this.f2q(sType, ruleIndex);
        if (sType === 12) {
          var _unary__edvuaz_5 = p._v;
          p._v = _unary__edvuaz_5 + 1 | 0;
          var loopBackStateNumber = data[_unary__edvuaz_5];
          loopBackStateNumbers.g2(new Pair(s instanceof LoopEndState ? s : THROW_CCE(), loopBackStateNumber));
        } else {
          if (s instanceof BlockStartState) {
            var _unary__edvuaz_6 = p._v;
            p._v = _unary__edvuaz_6 + 1 | 0;
            var endStateNumber = data[_unary__edvuaz_6];
            endStateNumbers.g2(new Pair(s, endStateNumber));
          }
        }
        atn.h2m(s);
      }
       while (inductionVariable < nStates);
    var _iterator__ex2g4s = loopBackStateNumbers.d1();
    while (_iterator__ex2g4s.e1()) {
      var pair = _iterator__ex2g4s.f1();
      pair.first.n2q_1 = atn.f2c_1.k2(pair.second);
    }
    var _iterator__ex2g4s_0 = endStateNumbers.d1();
    while (_iterator__ex2g4s_0.e1()) {
      var pair_0 = _iterator__ex2g4s_0.f1();
      var tmp_0 = pair_0.first;
      var tmp_1 = atn.f2c_1.k2(pair_0.second);
      tmp_0.y2q_1 = tmp_1 instanceof BlockEndState ? tmp_1 : THROW_CCE();
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
        var tmp_2 = atn.f2c_1.k2(stateNumber);
        (tmp_2 instanceof DecisionState ? tmp_2 : THROW_CCE()).r2m_1 = true;
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
        var tmp_3 = atn.f2c_1.k2(stateNumber_0);
        (tmp_3 instanceof RuleStartState ? tmp_3 : THROW_CCE()).h2r_1 = true;
      }
       while (inductionVariable_1 < numPrecedenceStates);
    var _unary__edvuaz_11 = p._v;
    p._v = _unary__edvuaz_11 + 1 | 0;
    var nRules = data[_unary__edvuaz_11];
    if (atn.d2c_1.equals(ATNType_LEXER_getInstance())) {
      atn.k2c_1 = new Int32Array(nRules);
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
      var tmp_8 = atn.f2c_1.k2(s_0);
      var startState = tmp_8 instanceof RuleStartState ? tmp_8 : THROW_CCE();
      if (atn.d2c_1.equals(ATNType_LEXER_getInstance())) {
        var _unary__edvuaz_13 = p._v;
        p._v = _unary__edvuaz_13 + 1 | 0;
        var tokenType = data[_unary__edvuaz_13];
        ensureNotNull(atn.k2c_1)[tmp_7] = tokenType;
      }
      tmp_6[tmp_7] = startState;
      tmp_5 = tmp_5 + 1 | 0;
    }
    tmp_4.h2c_1 = tmp_6;
    var tmp_9 = atn;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp_9.i2c_1 = Array(nRules);
    var _iterator__ex2g4s_1 = atn.f2c_1.d1();
    $l$loop_0: while (_iterator__ex2g4s_1.e1()) {
      var state = _iterator__ex2g4s_1.f1();
      if (!(state instanceof RuleStopState)) {
        continue $l$loop_0;
      }
      ensureNotNull(atn.i2c_1)[state.u2c_1] = state;
      ensureNotNull(atn.h2c_1)[state.u2c_1].g2r_1 = state;
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
        var tmp_10 = atn.f2c_1.k2(s_1);
        atn.m2c_1.g2(tmp_10 instanceof TokensStartState ? tmp_10 : THROW_CCE());
      }
       while (inductionVariable_2 < nModes);
    var sets = ArrayList.b2();
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
        var trans = this.j2r(atn, ttype, src, trg, arg1, arg2, arg3, sets);
        var srcState = atn.f2c_1.k2(src);
        ensureNotNull(srcState).k2r(trans);
        p._v = p._v + 6 | 0;
      }
       while (inductionVariable_3 < nEdges);
    var _iterator__ex2g4s_2 = atn.f2c_1.d1();
    while (_iterator__ex2g4s_2.e1()) {
      var state_0 = _iterator__ex2g4s_2.f1();
      var inductionVariable_4 = 0;
      var last = ensureNotNull(state_0).l2r();
      if (inductionVariable_4 < last)
        $l$loop_1: do {
          var i_4 = inductionVariable_4;
          inductionVariable_4 = inductionVariable_4 + 1 | 0;
          var tmp_11 = state_0.s2e(i_4);
          var tmp0_elvis_lhs = tmp_11 instanceof RuleTransition ? tmp_11 : null;
          var tmp_12;
          if (tmp0_elvis_lhs == null) {
            continue $l$loop_1;
          } else {
            tmp_12 = tmp0_elvis_lhs;
          }
          var t = tmp_12;
          var outermostPrecedenceReturn = -1;
          if (ensureNotNull(atn.h2c_1)[t.q2e_1.u2c_1].h2r_1) {
            if (t.c2f_1 === 0) {
              outermostPrecedenceReturn = t.q2e_1.u2c_1;
            }
          }
          var returnTransition = new EpsilonTransition(t.d2f_1, outermostPrecedenceReturn);
          ensureNotNull(ensureNotNull(atn.i2c_1)[t.q2e_1.u2c_1]).k2r(returnTransition);
        }
         while (inductionVariable_4 < last);
    }
    var _iterator__ex2g4s_3 = atn.f2c_1.d1();
    while (_iterator__ex2g4s_3.e1()) {
      var state_1 = _iterator__ex2g4s_3.f1();
      if (state_1 instanceof BlockStartState) {
        var tmp1_elvis_lhs = state_1.y2q_1;
        var tmp_13;
        if (tmp1_elvis_lhs == null) {
          throw IllegalStateException.fc();
        } else {
          tmp_13 = tmp1_elvis_lhs;
        }
        var endState = tmp_13;
        if (!(endState.t2r_1 == null)) {
          throw IllegalStateException.fc();
        }
        endState.t2r_1 = state_1;
      }
      if (state_1 instanceof PlusLoopbackState) {
        var inductionVariable_5 = 0;
        var last_0 = state_1.l2r();
        if (inductionVariable_5 < last_0)
          do {
            var i_5 = inductionVariable_5;
            inductionVariable_5 = inductionVariable_5 + 1 | 0;
            var target = state_1.s2e(i_5).q2e_1;
            if (target instanceof PlusBlockStartState) {
              target.r2s_1 = state_1;
            }
          }
           while (inductionVariable_5 < last_0);
      } else {
        if (state_1 instanceof StarLoopbackState) {
          var inductionVariable_6 = 0;
          var last_1 = state_1.l2r();
          if (inductionVariable_6 < last_1)
            do {
              var i_6 = inductionVariable_6;
              inductionVariable_6 = inductionVariable_6 + 1 | 0;
              var target_0 = state_1.s2e(i_6).q2e_1;
              if (target_0 instanceof StarLoopEntryState) {
                target_0.e2s_1 = state_1;
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
        var tmp_14 = atn.f2c_1.k2(s_2);
        var decState = tmp_14 instanceof DecisionState ? tmp_14 : THROW_CCE();
        atn.g2c_1.g2(decState);
        decState.q2m_1 = i_7 - 1 | 0;
      }
       while (!(i_7 === nDecisions));
    if (atn.d2c_1.equals(ATNType_LEXER_getInstance())) {
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
        var actionType = tmp_20.k2(data[_unary__edvuaz_20]);
        var _unary__edvuaz_21 = p._v;
        p._v = _unary__edvuaz_21 + 1 | 0;
        var data1 = data[_unary__edvuaz_21];
        var _unary__edvuaz_22 = p._v;
        p._v = _unary__edvuaz_22 + 1 | 0;
        var data2 = data[_unary__edvuaz_22];
        tmp_18[tmp_19] = this.t2s(actionType, data1, data2);
        tmp_16 = tmp_16 + 1 | 0;
      }
      tmp_15.l2c_1 = tmp_18;
    }
    this.u2s(atn);
    if (this.b2q_1.x2p()) {
      this.v2s(atn);
    }
    if (this.b2q_1.y2p() && atn.d2c_1.equals(ATNType_PARSER_getInstance())) {
      atn.k2c_1 = new Int32Array(ensureNotNull(atn.h2c_1).length);
      var inductionVariable_8 = 0;
      var last_2 = ensureNotNull(atn.h2c_1).length - 1 | 0;
      if (inductionVariable_8 <= last_2)
        do {
          var i_8 = inductionVariable_8;
          inductionVariable_8 = inductionVariable_8 + 1 | 0;
          ensureNotNull(atn.k2c_1)[i_8] = (atn.e2c_1 + i_8 | 0) + 1 | 0;
        }
         while (inductionVariable_8 <= last_2);
      var inductionVariable_9 = 0;
      var last_3 = ensureNotNull(atn.h2c_1).length - 1 | 0;
      if (inductionVariable_9 <= last_3)
        do {
          var i_9 = inductionVariable_9;
          inductionVariable_9 = inductionVariable_9 + 1 | 0;
          var bypassStart = new BasicBlockStartState();
          bypassStart.u2c_1 = i_9;
          atn.h2m(bypassStart);
          var bypassStop = new BlockEndState();
          bypassStop.u2c_1 = i_9;
          atn.h2m(bypassStop);
          bypassStart.y2q_1 = bypassStop;
          atn.i2m(bypassStart);
          bypassStop.t2r_1 = bypassStart;
          var endState_0;
          var excludeTransition = null;
          if (ensureNotNull(atn.h2c_1)[i_9].h2r_1) {
            endState_0 = null;
            var _iterator__ex2g4s_4 = atn.f2c_1.d1();
            $l$loop_5: while (_iterator__ex2g4s_4.e1()) {
              var state_2 = _iterator__ex2g4s_4.f1();
              if (!(ensureNotNull(state_2).u2c_1 === i_9)) {
                continue $l$loop_5;
              }
              if (!(state_2 instanceof StarLoopEntryState)) {
                continue $l$loop_5;
              }
              var maybeLoopEndState = state_2.s2e(state_2.l2r() - 1 | 0).q2e_1;
              if (!(maybeLoopEndState instanceof LoopEndState)) {
                continue $l$loop_5;
              }
              var tmp_21;
              if (maybeLoopEndState.v2c_1) {
                var tmp_22 = maybeLoopEndState.s2e(0).q2e_1;
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
              throw UnsupportedOperationException.s9("Couldn't identify final state of the precedence rule prefix section.");
            }
            excludeTransition = ensureNotNull((endState_0 instanceof StarLoopEntryState ? endState_0 : THROW_CCE()).e2s_1).s2e(0);
          } else {
            endState_0 = ensureNotNull(atn.i2c_1)[i_9];
          }
          var _iterator__ex2g4s_5 = atn.f2c_1.d1();
          while (_iterator__ex2g4s_5.e1()) {
            var state_3 = _iterator__ex2g4s_5.f1();
            var _iterator__ex2g4s_6 = ensureNotNull(state_3).w2c_1.d1();
            $l$loop_6: while (_iterator__ex2g4s_6.e1()) {
              var transition = _iterator__ex2g4s_6.f1();
              if (transition === excludeTransition) {
                continue $l$loop_6;
              }
              if (transition.q2e_1 === endState_0) {
                transition.q2e_1 = bypassStop;
              }
            }
          }
          while (ensureNotNull(atn.h2c_1)[i_9].l2r() > 0) {
            var transition_0 = ensureNotNull(atn.h2c_1)[i_9].w2s(ensureNotNull(atn.h2c_1)[i_9].l2r() - 1 | 0);
            bypassStart.k2r(transition_0);
          }
          ensureNotNull(atn.h2c_1)[i_9].k2r(new EpsilonTransition(bypassStart));
          bypassStop.k2r(new EpsilonTransition(ensureNotNull(endState_0)));
          var matchState = new BasicState();
          atn.h2m(matchState);
          matchState.k2r(new AtomTransition(bypassStop, ensureNotNull(atn.k2c_1)[i_9]));
          bypassStart.k2r(new EpsilonTransition(matchState));
        }
         while (inductionVariable_9 <= last_3);
      if (this.b2q_1.x2p()) {
        this.v2s(atn);
      }
    }
    return atn;
  }
  u2s(atn) {
    var _iterator__ex2g4s = atn.f2c_1.d1();
    $l$loop: while (_iterator__ex2g4s.e1()) {
      var state = _iterator__ex2g4s.f1();
      if (!(state instanceof StarLoopEntryState)) {
        continue $l$loop;
      }
      if (ensureNotNull(atn.h2c_1)[state.u2c_1].h2r_1) {
        var maybeLoopEndState = state.s2e(state.l2r() - 1 | 0).q2e_1;
        if (maybeLoopEndState instanceof LoopEndState) {
          var tmp;
          if (maybeLoopEndState.v2c_1) {
            var tmp_0 = maybeLoopEndState.s2e(0).q2e_1;
            tmp = tmp_0 instanceof RuleStopState;
          } else {
            tmp = false;
          }
          if (tmp) {
            state.f2s_1 = true;
          }
        }
      }
    }
  }
  v2s(atn) {
    var _iterator__ex2g4s = atn.f2c_1.d1();
    $l$loop: while (_iterator__ex2g4s.e1()) {
      var state = _iterator__ex2g4s.f1();
      if (state == null) {
        continue $l$loop;
      }
      this.y2s(state.x2s() || state.l2r() <= 1);
      if (state instanceof PlusBlockStartState) {
        this.y2s(!(state.r2s_1 == null));
      }
      if (state instanceof StarLoopEntryState) {
        this.y2s(!(state.e2s_1 == null));
        this.y2s(state.l2r() === 2);
        var tmp0_subject = state.s2e(0).q2e_1;
        if (tmp0_subject instanceof StarBlockStartState) {
          var tmp = state.s2e(1).q2e_1;
          this.y2s(tmp instanceof LoopEndState);
          this.y2s(!state.r2m_1);
        } else {
          if (tmp0_subject instanceof LoopEndState) {
            var tmp_0 = state.s2e(1).q2e_1;
            this.y2s(tmp_0 instanceof StarBlockStartState);
            this.y2s(state.r2m_1);
          } else {
            throw IllegalStateException.fc();
          }
        }
      }
      if (state instanceof StarLoopbackState) {
        this.y2s(state.l2r() === 1);
        var tmp_1 = state.s2e(0).q2e_1;
        this.y2s(tmp_1 instanceof StarLoopEntryState);
      }
      if (state instanceof LoopEndState) {
        this.y2s(!(state.n2q_1 == null));
      }
      if (state instanceof RuleStartState) {
        this.y2s(!(state.g2r_1 == null));
      }
      if (state instanceof BlockStartState) {
        this.y2s(!(state.y2q_1 == null));
      }
      if (state instanceof BlockEndState) {
        this.y2s(!(state.t2r_1 == null));
      }
      if (state instanceof DecisionState) {
        this.y2s(state.l2r() <= 1 || state.q2m_1 >= 0);
      } else {
        var tmp_2;
        if (state.l2r() <= 1) {
          tmp_2 = true;
        } else {
          tmp_2 = state instanceof RuleStopState;
        }
        this.y2s(tmp_2);
      }
    }
  }
  z2s(condition, message) {
    if (!condition) {
      throw IllegalStateException.s4(message);
    }
  }
  y2s(condition, message, $super) {
    message = message === VOID ? null : message;
    var tmp;
    if ($super === VOID) {
      this.z2s(condition, message);
      tmp = Unit_instance;
    } else {
      tmp = $super.z2s.call(this, condition, message);
    }
    return tmp;
  }
  j2r(atn, type, src, trg, arg1, arg2, arg3, sets) {
    var target = ensureNotNull(atn.f2c_1.k2(trg));
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
        var tmp_1 = atn.f2c_1.k2(arg1);
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
        tmp = new SetTransition(target, sets.k2(arg1));
        break;
      case 8:
        tmp = new NotSetTransition(target, sets.k2(arg1));
        break;
      case 9:
        tmp = new WildcardTransition(target);
        break;
      default:
        throw IllegalArgumentException.t1('The specified transition type is not valid.');
    }
    return tmp;
  }
  f2q(type, ruleIndex) {
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
        throw IllegalArgumentException.t1('The specified state type ' + type + ' is not valid.');
    }
    var s = tmp;
    s.u2c_1 = ruleIndex;
    return s;
  }
  t2s(type, data1, data2) {
    var tmp;
    switch (type.k1_1) {
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
  a2t(data16, trimToSize) {
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
  d2q(data16, trimToSize, $super) {
    trimToSize = trimToSize === VOID ? false : trimToSize;
    return $super === VOID ? this.a2t(data16, trimToSize) : $super.a2t.call(this, data16, trimToSize);
  }
}
class Companion_11 {
  constructor() {
    Companion_instance_11 = this;
    var tmp = this;
    // Inline function 'kotlin.also' call
    var this_0 = DFAState.j2t(new ATNConfigSet());
    this_0.b2t_1 = 2147483647;
    tmp.k2t_1 = this_0;
  }
}
class ATNSimulator {
  constructor(atn, sharedContextCache) {
    Companion_getInstance_11();
    this.n2c_1 = atn;
    this.o2c_1 = sharedContextCache;
  }
  n2p(context) {
    if (this.o2c_1 == null) {
      return context;
    }
    // Inline function 'com.strumenta.antlrkotlin.runtime.synchronized' call
    this.o2c_1;
    var visited = new IdentityHashMap();
    return Companion_instance_17.l2t(context, this.o2c_1, visited);
  }
}
class Companion_12 {
  constructor() {
    Companion_instance_12 = this;
    this.m2t_1 = 4;
    this.n2t_1 = 0;
    this.o2t_1 = 1;
    this.p2t_1 = 2;
    this.q2t_1 = 3;
    this.r2t_1 = 4;
    this.s2t_1 = 5;
    this.t2t_1 = 6;
    this.u2t_1 = 7;
    this.v2t_1 = 8;
    this.w2t_1 = 9;
    this.x2t_1 = 10;
    this.y2t_1 = 11;
    this.z2t_1 = 12;
    var tmp = this;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.a2u_1 = ['INVALID', 'BASIC', 'RULE_START', 'BLOCK_START', 'PLUS_BLOCK_START', 'STAR_BLOCK_START', 'TOKEN_START', 'RULE_STOP', 'BLOCK_END', 'STAR_LOOP_BACK', 'STAR_LOOP_ENTRY', 'PLUS_LOOP_BACK', 'LOOP_END'];
    this.b2u_1 = -1;
  }
}
class ATNState {
  constructor() {
    Companion_getInstance_12();
    this.s2c_1 = null;
    this.t2c_1 = -1;
    this.u2c_1 = 0;
    this.v2c_1 = false;
    this.w2c_1 = ArrayList.f2(4);
    this.x2c_1 = null;
    this.y2c_1 = false;
  }
  l2r() {
    return this.w2c_1.i2();
  }
  hashCode() {
    return this.t2c_1;
  }
  equals(other) {
    var tmp;
    if (other instanceof ATNState) {
      tmp = this.t2c_1 === other.t2c_1;
    } else {
      tmp = false;
    }
    return tmp;
  }
  toString() {
    return this.t2c_1.toString();
  }
  k2r(e) {
    return this.c2u(this.w2c_1.i2(), e);
  }
  c2u(index, e) {
    if (this.w2c_1.b1()) {
      this.v2c_1 = e.d2u();
    } else if (!(this.v2c_1 === e.d2u())) {
      System_getInstance().i27_1.g27('ATN state ' + this.t2c_1 + ' has both epsilon and non-epsilon transitions.');
      this.v2c_1 = false;
    }
    var alreadyPresent = false;
    var _iterator__ex2g4s = this.w2c_1.d1();
    $l$loop_0: while (_iterator__ex2g4s.e1()) {
      var t = _iterator__ex2g4s.f1();
      if (t.q2e_1.t2c_1 === e.q2e_1.t2c_1) {
        if (!(t.getLabel() == null) && !(e.getLabel() == null) && ensureNotNull(t.getLabel()).equals(e.getLabel())) {
          alreadyPresent = true;
          break $l$loop_0;
        } else if (t.d2u() && e.d2u()) {
          alreadyPresent = true;
          break $l$loop_0;
        }
      }
    }
    if (!alreadyPresent) {
      this.w2c_1.d4(index, e);
    }
  }
  s2e(i) {
    return this.w2c_1.k2(i);
  }
  w2s(index) {
    return this.w2c_1.e4(index);
  }
  x2s() {
    return this.v2c_1;
  }
}
class ATNType extends Enum {}
class Transition {
  constructor(target) {
    Companion_getInstance_21();
    this.q2e_1 = target;
    this.r2e_1 = false;
  }
  d2u() {
    return this.r2e_1;
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
    this.i2u_1 = ruleIndex;
    this.j2u_1 = actionIndex;
    this.k2u_1 = isCtxDependent;
    this.l2u_1 = 6;
    this.m2u_1 = true;
  }
  e2u() {
    return this.l2u_1;
  }
  d2u() {
    return this.m2u_1;
  }
  f2u(symbol, minVocabSymbol, maxVocabSymbol) {
    return false;
  }
  toString() {
    return 'action_' + this.i2u_1 + ':' + this.j2u_1;
  }
}
class PredictionContext {
  static v2u(cachedHashCode) {
    var $this = createThis(this);
    $this.t2u_1 = cachedHashCode;
    var tmp = $this;
    var _unary__edvuaz = Companion_instance_17.j2p_1;
    Companion_instance_17.j2p_1 = _unary__edvuaz + 1 | 0;
    tmp.u2u_1 = _unary__edvuaz;
    return $this;
  }
  r2h() {
    return this === EmptyPredictionContext_getInstance();
  }
  d2v() {
    return this.c2v(this.b28() - 1 | 0) === 2147483647;
  }
  e2v(recog) {
    return toString_0(this);
  }
  hashCode() {
    return this.t2u_1;
  }
}
class ArrayPredictionContext extends PredictionContext {
  static r2u(parents, returnStates) {
    var $this = this.v2u(Companion_instance_17.s2u(parents, returnStates));
    $this.p2u_1 = parents;
    $this.q2u_1 = returnStates;
    // Inline function 'kotlin.collections.isNotEmpty' call
    // Inline function 'kotlin.collections.isEmpty' call
    // Inline function 'com.strumenta.antlrkotlin.runtime.assert' call
    if (!!($this.p2u_1.length === 0)) {
      throw AssertionError.yc(null);
    }
    // Inline function 'kotlin.collections.isNotEmpty' call
    // Inline function 'kotlin.collections.isEmpty' call
    // Inline function 'com.strumenta.antlrkotlin.runtime.assert' call
    if (!!($this.q2u_1.length === 0)) {
      throw AssertionError.yc(null);
    }
    return $this;
  }
  r2h() {
    return this.q2u_1[0] === 2147483647;
  }
  static w2u(a) {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp = [a.z2u_1];
    // Inline function 'kotlin.intArrayOf' call
    var tmp$ret$3 = new Int32Array([a.a2v_1]);
    return this.r2u(tmp, tmp$ret$3);
  }
  b28() {
    return this.q2u_1.length;
  }
  b2v(index) {
    return this.p2u_1[index];
  }
  c2v(index) {
    return this.q2u_1[index];
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
    return contentEquals(this.q2u_1, other.q2u_1) && contentEquals_0(this.p2u_1, other.p2u_1);
  }
  toString() {
    if (this.r2h()) {
      return '[]';
    }
    var buf = StringBuilder.z();
    buf.a1('[');
    var inductionVariable = 0;
    var last = this.q2u_1.length - 1 | 0;
    if (inductionVariable <= last)
      $l$loop: do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (i > 0) {
          buf.a1(', ');
        }
        if (this.q2u_1[i] === 2147483647) {
          buf.a1('$');
          continue $l$loop;
        }
        buf.df(this.q2u_1[i]);
        if (!(this.p2u_1[i] == null)) {
          buf.a1(' ');
          buf.a1(toString_1(this.p2u_1[i]));
        } else {
          buf.a1('null');
        }
      }
       while (inductionVariable <= last);
    buf.a1(']');
    return buf.toString();
  }
}
class AtomTransition extends Transition {
  constructor(target, label) {
    super(target);
    this.h2v_1 = label;
    this.i2v_1 = 5;
  }
  e2u() {
    return this.i2v_1;
  }
  j2v() {
    return Companion_getInstance_26().m2v(this.h2v_1);
  }
  getLabel() {
    return this.j2v();
  }
  f2u(symbol, minVocabSymbol, maxVocabSymbol) {
    return this.h2v_1 === symbol;
  }
  toString() {
    return this.h2v_1.toString();
  }
}
class DecisionState extends ATNState {
  constructor() {
    super();
    this.q2m_1 = -1;
    this.r2m_1 = false;
  }
}
class BlockStartState extends DecisionState {
  constructor() {
    super();
    this.y2q_1 = null;
  }
}
class BasicBlockStartState extends BlockStartState {
  constructor() {
    super();
    this.x2v_1 = 3;
  }
  z2c() {
    return this.x2v_1;
  }
}
class BasicState extends ATNState {
  constructor() {
    super();
    this.f2w_1 = 1;
  }
  z2c() {
    return this.f2w_1;
  }
}
class BlockEndState extends ATNState {
  constructor() {
    super();
    this.t2r_1 = null;
    this.u2r_1 = 8;
  }
  z2c() {
    return this.u2r_1;
  }
}
class SingletonPredictionContext extends PredictionContext {
  static m2w(parent, returnState) {
    var $this = this.v2u(!(parent == null) ? Companion_instance_17.v33(parent, returnState) : Companion_instance_17.u33());
    $this.z2u_1 = parent;
    $this.a2v_1 = returnState;
    // Inline function 'com.strumenta.antlrkotlin.runtime.assert' call
    if (!!($this.a2v_1 === -1)) {
      throw AssertionError.yc(null);
    }
    return $this;
  }
  b28() {
    return 1;
  }
  b2v(index) {
    // Inline function 'com.strumenta.antlrkotlin.runtime.assert' call
    if (!(index === 0)) {
      throw AssertionError.yc(null);
    }
    return this.z2u_1;
  }
  c2v(index) {
    // Inline function 'com.strumenta.antlrkotlin.runtime.assert' call
    if (!(index === 0)) {
      throw AssertionError.yc(null);
    }
    return this.a2v_1;
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
    return this.a2v_1 === other.a2v_1 && (!(this.z2u_1 == null) && equals(this.z2u_1, other.z2u_1));
  }
  toString() {
    var tmp0_safe_receiver = this.z2u_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : toString_0(tmp0_safe_receiver);
    var up = tmp1_elvis_lhs == null ? '' : tmp1_elvis_lhs;
    var tmp;
    // Inline function 'kotlin.text.isEmpty' call
    if (charSequenceLength(up) === 0) {
      var tmp_0;
      if (this.a2v_1 === 2147483647) {
        tmp_0 = '$';
      } else {
        tmp_0 = this.a2v_1.toString();
      }
      tmp = tmp_0;
    } else {
      tmp = '' + this.a2v_1 + ' ' + up;
    }
    return tmp;
  }
}
class EmptyPredictionContext extends SingletonPredictionContext {
  static l2w() {
    EmptyPredictionContext_instance = null;
    var $this = this.m2w(null, 2147483647);
    EmptyPredictionContext_instance = $this;
    $this.k2w_1 = true;
    return $this;
  }
  r2h() {
    return this.k2w_1;
  }
  b28() {
    return 1;
  }
  b2v(index) {
    return null;
  }
  c2v(index) {
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
    this.p2w_1 = 1;
    this.q2w_1 = true;
    this.r2w_1 = outermostPrecedenceReturn;
  }
  e2u() {
    return this.p2w_1;
  }
  d2u() {
    return this.q2w_1;
  }
  f2u(symbol, minVocabSymbol, maxVocabSymbol) {
    return false;
  }
  toString() {
    return 'epsilon';
  }
}
class Companion_13 {
  constructor() {
    this.s2w_1 = 0;
  }
}
class LL1Analyzer {
  constructor(atn) {
    this.e2m_1 = atn;
  }
  f2m(s, ctx) {
    return this.t2w(s, null, ctx);
  }
  t2w(s, stopState, ctx) {
    var r = IntervalSet.y2b();
    var seeThruPreds = true;
    var tmp;
    if (!(ctx == null)) {
      tmp = Companion_instance_17.u2w(ensureNotNull(s.s2c_1), ctx);
    } else {
      tmp = null;
    }
    var lookContext = tmp;
    this.v2w(s, stopState, lookContext, r, HashSet.v9(), BitSet.d2p(), seeThruPreds, true);
    return r;
  }
  v2w(s, stopState, ctx, look, lookBusy, calledRuleStack, seeThruPreds, addEOF) {
    var c = ATNConfig.c2n(s, 0, ctx);
    if (!lookBusy.g2(c)) {
      return Unit_instance;
    }
    if (s === stopState) {
      if (ctx == null) {
        look.z2b(-2);
        return Unit_instance;
      } else if (ctx.r2h() && addEOF) {
        look.z2b(-1);
        return Unit_instance;
      }
    }
    if (s instanceof RuleStopState) {
      if (ctx == null) {
        look.z2b(-2);
        return Unit_instance;
      } else if (ctx.r2h() && addEOF) {
        look.z2b(-1);
        return Unit_instance;
      }
      if (!(ctx === EmptyPredictionContext_getInstance())) {
        var removed = calledRuleStack.k2(s.u2c_1);
        try {
          calledRuleStack.w2w(s.u2c_1);
          var inductionVariable = 0;
          var last = ctx.b28();
          if (inductionVariable < last)
            do {
              var i = inductionVariable;
              inductionVariable = inductionVariable + 1 | 0;
              var returnState = this.e2m_1.f2c_1.k2(ctx.c2v(i));
              this.v2w(ensureNotNull(returnState), stopState, ctx.b2v(i), look, lookBusy, calledRuleStack, seeThruPreds, addEOF);
            }
             while (inductionVariable < last);
        }finally {
          if (removed) {
            calledRuleStack.e2p(s.u2c_1);
          }
        }
        return Unit_instance;
      }
    }
    var n = s.l2r();
    var inductionVariable_0 = 0;
    if (inductionVariable_0 < n)
      $l$loop: do {
        var i_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        var t = s.s2e(i_0);
        if (t instanceof RuleTransition) {
          if (calledRuleStack.k2(t.q2e_1.u2c_1)) {
            continue $l$loop;
          }
          var newContext = Companion_instance_20.y2w(ctx, t.d2f_1.t2c_1);
          try {
            calledRuleStack.e2p(t.q2e_1.u2c_1);
            this.v2w(t.q2e_1, stopState, newContext, look, lookBusy, calledRuleStack, seeThruPreds, addEOF);
          }finally {
            calledRuleStack.w2w(t.q2e_1.u2c_1);
          }
        } else {
          if (t instanceof AbstractPredicateTransition) {
            if (seeThruPreds) {
              this.v2w(t.q2e_1, stopState, ctx, look, lookBusy, calledRuleStack, seeThruPreds, addEOF);
            } else {
              look.z2b(0);
            }
          } else {
            if (t.d2u()) {
              this.v2w(t.q2e_1, stopState, ctx, look, lookBusy, calledRuleStack, seeThruPreds, addEOF);
            } else {
              if (t instanceof WildcardTransition) {
                look.g2f(Companion_getInstance_26().y28(1, this.e2m_1.e2c_1));
              } else {
                var set = t.getLabel();
                if (!(set == null)) {
                  if (t instanceof NotSetTransition) {
                    set = set.x2w(Companion_getInstance_26().y28(1, this.e2m_1.e2c_1));
                  }
                  look.g2f(set);
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
  static g2x(state, alt, context) {
    var $this = this.c2n(state, alt, context, Empty_getInstance());
    init_org_antlr_v4_kotlinruntime_atn_LexerATNConfig($this);
    $this.e2x_1 = false;
    $this.f2x_1 = null;
    return $this;
  }
  static h2x(c, state) {
    var $this = this.e2n(c, state, c.w2m_1, c.y2m_1);
    init_org_antlr_v4_kotlinruntime_atn_LexerATNConfig($this);
    $this.f2x_1 = c.f2x_1;
    $this.e2x_1 = checkNonGreedyDecision($this, c, state);
    return $this;
  }
  static i2x(c, state, lexerActionExecutor) {
    var $this = this.e2n(c, state, c.w2m_1, c.y2m_1);
    init_org_antlr_v4_kotlinruntime_atn_LexerATNConfig($this);
    $this.f2x_1 = lexerActionExecutor;
    $this.e2x_1 = checkNonGreedyDecision($this, c, state);
    return $this;
  }
  static j2x(c, state, context) {
    var $this = this.e2n(c, state, context, c.y2m_1);
    init_org_antlr_v4_kotlinruntime_atn_LexerATNConfig($this);
    $this.f2x_1 = c.f2x_1;
    $this.e2x_1 = checkNonGreedyDecision($this, c, state);
    return $this;
  }
  k2x() {
    return this.e2x_1;
  }
  hashCode() {
    var hashCode = MurmurHash_instance.i2n(7);
    hashCode = MurmurHash_instance.j2n(hashCode, this.u2m_1.t2c_1);
    hashCode = MurmurHash_instance.j2n(hashCode, this.v2m_1);
    hashCode = MurmurHash_instance.k2n(hashCode, this.w2m_1);
    hashCode = MurmurHash_instance.k2n(hashCode, this.y2m_1);
    hashCode = MurmurHash_instance.j2n(hashCode, this.e2x_1 ? 1 : 0);
    hashCode = MurmurHash_instance.k2n(hashCode, this.f2x_1);
    hashCode = MurmurHash_instance.l2n(hashCode, 6);
    return hashCode;
  }
  g2n(other) {
    if (this === other) {
      return true;
    }
    if (!(other instanceof LexerATNConfig)) {
      return false;
    }
    if (!(this.e2x_1 === other.e2x_1)) {
      return false;
    }
    if (!Companion_getInstance_27().l2x_1.r2o(this.f2x_1, other.f2x_1)) {
      return false;
    }
    return super.g2n(other);
  }
}
class Companion_14 {
  constructor() {
    this.m2x_1 = false;
    this.n2x_1 = false;
    this.o2x_1 = 0;
    this.p2x_1 = 127;
  }
}
class SimState {
  constructor() {
    this.q2x_1 = -1;
    this.r2x_1 = 0;
    this.s2x_1 = -1;
    this.t2x_1 = null;
  }
  d2h() {
    this.q2x_1 = -1;
    this.r2x_1 = 0;
    this.s2x_1 = -1;
    this.t2x_1 = null;
  }
}
class LexerATNSimulator extends ATNSimulator {
  constructor(recog, atn, decisionToDFA, sharedContextCache) {
    super(atn, sharedContextCache);
    this.t2g_1 = recog;
    this.u2g_1 = decisionToDFA;
    this.v2g_1 = -1;
    this.w2g_1 = 1;
    this.x2g_1 = 0;
    this.y2g_1 = 0;
    this.z2g_1 = new SimState();
  }
  h2h(input, mode) {
    this.y2g_1 = mode;
    var mark = input.w27();
    try {
      this.v2g_1 = input.v27();
      this.z2g_1.d2h();
      var dfa = this.u2g_1[mode];
      var tmp;
      if (dfa.x2x_1 == null) {
        tmp = this.a2y(input);
      } else {
        var tmp_0 = dfa.x2x_1;
        tmp = this.z2x(input, tmp_0 instanceof DFAState ? tmp_0 : THROW_CCE());
      }
      return tmp;
    }finally {
      input.x27(mark);
    }
  }
  d2h() {
    this.z2g_1.d2h();
    this.v2g_1 = -1;
    this.w2g_1 = 1;
    this.x2g_1 = 0;
    this.y2g_1 = 0;
  }
  a2y(input) {
    var startState = this.n2c_1.m2c_1.k2(this.y2g_1);
    if (false) {
      System_getInstance().h27_1.g27('matchATN mode ' + this.y2g_1 + ' start: ' + startState.toString());
    }
    var oldMode = this.y2g_1;
    var s0Closure = this.b2y(input, startState);
    var suppressEdge = s0Closure.x2o_1;
    s0Closure.x2o_1 = false;
    var next = this.c2y(s0Closure);
    if (!suppressEdge) {
      this.u2g_1[this.y2g_1].x2x_1 = next;
    }
    var predict = this.z2x(input, next);
    if (false) {
      System_getInstance().h27_1.g27('DFA after matchATN: ' + this.u2g_1[oldMode].d2y());
    }
    return predict;
  }
  z2x(input, ds0) {
    if (false) {
      System_getInstance().h27_1.g27('start state closure=' + ds0.c2t_1.toString());
    }
    if (ds0.e2t_1) {
      this.e2y(this.z2g_1, input, ds0);
    }
    var t = input.d28(1);
    var s = ds0;
    $l$loop_0: while (true) {
      if (false) {
        System_getInstance().h27_1.g27('execATN loop starting closure: ' + s.c2t_1.toString());
      }
      var tmp0_elvis_lhs = this.f2y(s, t);
      var target = tmp0_elvis_lhs == null ? this.g2y(input, s, t) : tmp0_elvis_lhs;
      if (target === Companion_getInstance_11().k2t_1) {
        break $l$loop_0;
      }
      if (!(t === -1)) {
        this.v2h(input);
      }
      if (target.e2t_1) {
        this.e2y(this.z2g_1, input, target);
        if (t === -1) {
          break $l$loop_0;
        }
      }
      t = input.d28(1);
      s = target;
    }
    return this.h2y(this.z2g_1, input, s.c2t_1, t);
  }
  f2y(s, t) {
    if (s.d2t_1 == null || t < 0 || t > 127) {
      return null;
    }
    var target = ensureNotNull(s.d2t_1)[t - 0 | 0];
    if (false && !(target == null)) {
      System_getInstance().h27_1.g27('reuse state ' + s.b2t_1 + ' edge to ' + target.b2t_1);
    }
    return target;
  }
  g2y(input, s, t) {
    var reach = new OrderedATNConfigSet();
    this.i2y(input, s.c2t_1, reach, t);
    if (reach.b1()) {
      if (!reach.x2o_1) {
        this.j2y(s, t, Companion_getInstance_11().k2t_1);
      }
      return Companion_getInstance_11().k2t_1;
    }
    return this.k2y(s, t, reach);
  }
  h2y(prevAccept, input, reach, t) {
    if (!(prevAccept.t2x_1 == null)) {
      var lexerActionExecutor = ensureNotNull(prevAccept.t2x_1).g2t_1;
      this.l2y(input, lexerActionExecutor, this.v2g_1, prevAccept.q2x_1, prevAccept.r2x_1, prevAccept.s2x_1);
      return ensureNotNull(prevAccept.t2x_1).f2t_1;
    }
    if (t === -1 && input.v27() === this.v2g_1) {
      return -1;
    }
    throw LexerNoViableAltException.p2i(ensureNotNull(this.t2g_1), input, this.v2g_1, reach);
  }
  i2y(input, closure, reach, t) {
    var skipAlt = 0;
    var _iterator__ex2g4s = closure.d1();
    $l$loop: while (_iterator__ex2g4s.e1()) {
      var c = _iterator__ex2g4s.f1();
      var currentAltReachedAcceptState = c.v2m_1 === skipAlt;
      var tmp;
      if (currentAltReachedAcceptState) {
        tmp = (c instanceof LexerATNConfig ? c : THROW_CCE()).k2x();
      } else {
        tmp = false;
      }
      if (tmp) {
        continue $l$loop;
      }
      if (false) {
        System_getInstance().h27_1.g27('testing ' + this.m2y(t) + ' at ' + c.m2n(this.t2g_1, true));
      }
      var n = c.u2m_1.l2r();
      var inductionVariable = 0;
      if (inductionVariable < n)
        $l$loop_0: do {
          var ti = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var trans = c.u2m_1.s2e(ti);
          var target = this.n2y(trans, t);
          if (!(target == null)) {
            var lexerActionExecutor = (c instanceof LexerATNConfig ? c : THROW_CCE()).f2x_1;
            if (!(lexerActionExecutor == null)) {
              lexerActionExecutor = lexerActionExecutor.q2y(input.v27() - this.v2g_1 | 0);
            }
            var treatEofAsEpsilon = t === -1;
            if (this.r2y(input, LexerATNConfig.i2x(c, target, lexerActionExecutor), reach, currentAltReachedAcceptState, true, treatEofAsEpsilon)) {
              skipAlt = c.v2m_1;
              break $l$loop_0;
            }
          }
        }
         while (inductionVariable < n);
    }
  }
  l2y(input, lexerActionExecutor, startIndex, index, line, charPos) {
    if (false) {
      System_getInstance().h27_1.g27('ACTION ' + toString_1(lexerActionExecutor));
    }
    input.y27(index);
    this.w2g_1 = line;
    this.x2g_1 = charPos;
    if (!(lexerActionExecutor == null) && !(this.t2g_1 == null)) {
      lexerActionExecutor.s2y(this.t2g_1, input, startIndex);
    }
  }
  n2y(trans, t) {
    var tmp;
    if (trans.f2u(t, 0, 1114111)) {
      tmp = trans.q2e_1;
    } else {
      tmp = null;
    }
    return tmp;
  }
  b2y(input, p) {
    var initialContext = EmptyPredictionContext_getInstance();
    var configs = new OrderedATNConfigSet();
    var inductionVariable = 0;
    var last = p.l2r();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var target = p.s2e(i).q2e_1;
        var c = LexerATNConfig.g2x(target, i + 1 | 0, initialContext);
        this.r2y(input, c, configs, false, false, false);
      }
       while (inductionVariable < last);
    return configs;
  }
  r2y(input, config, configs, currentAltReachedAcceptState, speculative, treatEofAsEpsilon) {
    var tempCurrentAltReachedAcceptState = currentAltReachedAcceptState;
    if (false) {
      System_getInstance().h27_1.g27('closure(' + config.m2n(this.t2g_1, true) + ')');
    }
    var tmp = config.u2m_1;
    if (tmp instanceof RuleStopState) {
      if (false) {
        if (!(this.t2g_1 == null)) {
          System_getInstance().h27_1.g27('closure at ' + this.t2g_1.c2e()[config.u2m_1.u2c_1] + ' rule stop ' + config.toString());
        } else {
          System_getInstance().h27_1.g27('closure at rule stop ' + config.toString());
        }
      }
      if (config.w2m_1 == null || ensureNotNull(config.w2m_1).d2v()) {
        if (config.w2m_1 == null || ensureNotNull(config.w2m_1).r2h()) {
          configs.f2p(config);
          return true;
        }
        configs.f2p(LexerATNConfig.j2x(config, config.u2m_1, EmptyPredictionContext_getInstance()));
        tempCurrentAltReachedAcceptState = true;
      }
      if (!(config.w2m_1 == null) && !ensureNotNull(config.w2m_1).r2h()) {
        var inductionVariable = 0;
        var last = ensureNotNull(config.w2m_1).b28();
        if (inductionVariable < last)
          do {
            var i = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            if (!(ensureNotNull(config.w2m_1).c2v(i) === 2147483647)) {
              var newContext = ensureNotNull(config.w2m_1).b2v(i);
              var returnState = this.n2c_1.f2c_1.k2(ensureNotNull(config.w2m_1).c2v(i));
              var c = LexerATNConfig.j2x(config, ensureNotNull(returnState), ensureNotNull(newContext));
              tempCurrentAltReachedAcceptState = this.r2y(input, c, configs, tempCurrentAltReachedAcceptState, speculative, treatEofAsEpsilon);
            }
          }
           while (inductionVariable < last);
      }
      return tempCurrentAltReachedAcceptState;
    }
    if (!config.u2m_1.x2s()) {
      if (!tempCurrentAltReachedAcceptState || !config.k2x()) {
        configs.f2p(config);
      }
    }
    var p = config.u2m_1;
    var inductionVariable_0 = 0;
    var last_0 = p.l2r();
    if (inductionVariable_0 < last_0)
      do {
        var i_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        var t = p.s2e(i_0);
        var c_0 = this.t2y(input, config, t, configs, speculative, treatEofAsEpsilon);
        if (!(c_0 == null)) {
          tempCurrentAltReachedAcceptState = this.r2y(input, c_0, configs, tempCurrentAltReachedAcceptState, speculative, treatEofAsEpsilon);
        }
      }
       while (inductionVariable_0 < last_0);
    return tempCurrentAltReachedAcceptState;
  }
  t2y(input, config, t, configs, speculative, treatEofAsEpsilon) {
    var c = null;
    switch (t.e2u()) {
      case 3:
        var ruleTransition = t instanceof RuleTransition ? t : THROW_CCE();
        var newContext = Companion_instance_20.y2w(config.w2m_1, ruleTransition.d2f_1.t2c_1);
        c = LexerATNConfig.j2x(config, t.q2e_1, newContext);
        break;
      case 10:
        throw UnsupportedOperationException.s9('Precedence predicates are not supported in lexers.');
      case 4:
        var pt = t instanceof PredicateTransition ? t : THROW_CCE();
        if (false) {
          System_getInstance().h27_1.g27('EVAL rule ' + pt.w2y_1 + ':' + pt.x2y_1);
        }

        configs.x2o_1 = true;
        if (this.b2z(input, pt.w2y_1, pt.x2y_1, speculative)) {
          c = LexerATNConfig.h2x(config, t.q2e_1);
        }

        break;
      case 6:
        if (config.w2m_1 == null || ensureNotNull(config.w2m_1).d2v()) {
          var tmp = Companion_instance_15;
          var tmp_0 = ensureNotNull(this.n2c_1.l2c_1);
          var lexerActionExecutor = tmp.c2z(config.f2x_1, tmp_0[(t instanceof ActionTransition ? t : THROW_CCE()).j2u_1]);
          c = LexerATNConfig.i2x(config, t.q2e_1, lexerActionExecutor);
        } else {
          c = LexerATNConfig.h2x(config, t.q2e_1);
        }

        break;
      case 1:
        c = LexerATNConfig.h2x(config, t.q2e_1);
        break;
      case 5:
      case 2:
      case 7:
        if (treatEofAsEpsilon) {
          if (t.f2u(-1, 0, 1114111)) {
            c = LexerATNConfig.h2x(config, t.q2e_1);
          }
        }

        break;
    }
    return c;
  }
  b2z(input, ruleIndex, predIndex, speculative) {
    if (this.t2g_1 == null) {
      return true;
    }
    if (!speculative) {
      return this.t2g_1.b2i(null, ruleIndex, predIndex);
    }
    var savedCharPositionInLine = this.x2g_1;
    var savedLine = this.w2g_1;
    var index = input.v27();
    var marker = input.w27();
    try {
      this.v2h(input);
      return this.t2g_1.b2i(null, ruleIndex, predIndex);
    }finally {
      this.x2g_1 = savedCharPositionInLine;
      this.w2g_1 = savedLine;
      input.y27(index);
      input.x27(marker);
    }
  }
  e2y(settings, input, dfaState) {
    settings.q2x_1 = input.v27();
    settings.r2x_1 = this.w2g_1;
    settings.s2x_1 = this.x2g_1;
    settings.t2x_1 = dfaState;
  }
  k2y(from, t, q) {
    var suppressEdge = q.x2o_1;
    q.x2o_1 = false;
    var to = this.c2y(q);
    if (suppressEdge) {
      return to;
    }
    this.j2y(from, t, to);
    return to;
  }
  j2y(p, t, q) {
    if (t < 0 || t > 127) {
      return Unit_instance;
    }
    if (false) {
      System_getInstance().h27_1.g27('EDGE ' + p.toString() + ' -> ' + q.toString() + ' upon ' + toString(numberToChar(t)));
    }
    // Inline function 'com.strumenta.antlrkotlin.runtime.synchronized' call
    if (p.d2t_1 == null) {
      var tmp = p;
      // Inline function 'kotlin.arrayOfNulls' call
      tmp.d2t_1 = Array(128);
    }
    ensureNotNull(p.d2t_1)[t - 0 | 0] = q;
  }
  c2y(configs) {
    // Inline function 'com.strumenta.antlrkotlin.runtime.assert' call
    if (!!configs.x2o_1) {
      throw AssertionError.yc(null);
    }
    var proposed = DFAState.j2t(configs);
    var firstConfigWithRuleStopState = null;
    var _iterator__ex2g4s = configs.d1();
    $l$loop: while (_iterator__ex2g4s.e1()) {
      var c = _iterator__ex2g4s.f1();
      var tmp = c.u2m_1;
      if (tmp instanceof RuleStopState) {
        firstConfigWithRuleStopState = c;
        break $l$loop;
      }
    }
    if (!(firstConfigWithRuleStopState == null)) {
      proposed.e2t_1 = true;
      var tmp_0 = proposed;
      tmp_0.g2t_1 = (firstConfigWithRuleStopState instanceof LexerATNConfig ? firstConfigWithRuleStopState : THROW_CCE()).f2x_1;
      proposed.f2t_1 = ensureNotNull(this.n2c_1.k2c_1)[firstConfigWithRuleStopState.u2m_1.u2c_1];
    }
    var dfa = this.u2g_1[this.y2g_1];
    // Inline function 'com.strumenta.antlrkotlin.runtime.synchronized' call
    dfa.w2x_1;
    var existing = dfa.w2x_1.y3(proposed);
    if (!(existing == null)) {
      return existing;
    }
    proposed.b2t_1 = dfa.w2x_1.i2();
    configs.g2m(true);
    proposed.c2t_1 = configs;
    // Inline function 'kotlin.collections.set' call
    dfa.w2x_1.s3(proposed, proposed);
    return proposed;
  }
  v2h(input) {
    var curChar = input.d28(1);
    if (numberToChar(curChar) === _Char___init__impl__6a9atx(10)) {
      this.w2g_1 = this.w2g_1 + 1 | 0;
      this.x2g_1 = 0;
    } else {
      this.x2g_1 = this.x2g_1 + 1 | 0;
    }
    input.c28();
  }
  m2y(t) {
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
  c2z(lexerActionExecutor, lexerAction) {
    if (lexerActionExecutor == null) {
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp$ret$0 = [lexerAction];
      return new LexerActionExecutor(tmp$ret$0);
    }
    var lexerActions = copyOf(lexerActionExecutor.o2y_1, lexerActionExecutor.o2y_1.length + 1 | 0);
    lexerActions[get_lastIndex(lexerActions)] = lexerAction;
    return new LexerActionExecutor(isArray(lexerActions) ? lexerActions : THROW_CCE());
  }
}
class LexerActionExecutor {
  constructor(lexerActions) {
    this.o2y_1 = lexerActions;
    var hash = MurmurHash_instance.d2z();
    var indexedObject = this.o2y_1;
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var lexerAction = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      hash = MurmurHash_instance.k2n(hash, lexerAction);
    }
    this.p2y_1 = MurmurHash_instance.l2n(hash, this.o2y_1.length);
  }
  q2y(offset) {
    var updatedLexerActions = null;
    var inductionVariable = 0;
    var last = this.o2y_1.length - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp;
        if (this.o2y_1[i].e2z()) {
          var tmp_0 = this.o2y_1[i];
          tmp = !(tmp_0 instanceof LexerIndexedCustomAction);
        } else {
          tmp = false;
        }
        if (tmp) {
          if (updatedLexerActions == null) {
            // Inline function 'kotlin.collections.copyOf' call
            // Inline function 'kotlin.js.asDynamic' call
            updatedLexerActions = this.o2y_1.slice();
          }
          updatedLexerActions[i] = new LexerIndexedCustomAction(offset, this.o2y_1[i]);
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
  s2y(lexer, input, startIndex) {
    var requiresSeek = false;
    var stopIndex = input.v27();
    try {
      var indexedObject = this.o2y_1;
      var inductionVariable = 0;
      var last = indexedObject.length;
      while (inductionVariable < last) {
        var lexerAction = indexedObject[inductionVariable];
        inductionVariable = inductionVariable + 1 | 0;
        var mutableLexerAction = lexerAction;
        if (mutableLexerAction instanceof LexerIndexedCustomAction) {
          var offset = mutableLexerAction.f2z_1;
          input.y27(startIndex + offset | 0);
          mutableLexerAction = mutableLexerAction.g2z_1;
          requiresSeek = !((startIndex + offset | 0) === stopIndex);
        } else {
          if (mutableLexerAction.e2z()) {
            input.y27(stopIndex);
            requiresSeek = false;
          }
        }
        mutableLexerAction.i2z(lexer);
      }
    }finally {
      if (requiresSeek) {
        input.y27(stopIndex);
      }
    }
  }
  hashCode() {
    return this.p2y_1;
  }
  equals(other) {
    if (other === this) {
      return true;
    }
    if (!(other instanceof LexerActionExecutor)) {
      return false;
    }
    return this.p2y_1 === other.p2y_1 && contentEquals_0(this.o2y_1, other.o2y_1);
  }
}
class LexerActionType extends Enum {}
class LexerChannelAction {
  constructor(channel) {
    this.j2z_1 = channel;
    this.k2z_1 = LexerActionType_CHANNEL_getInstance();
    this.l2z_1 = false;
  }
  e2z() {
    return this.l2z_1;
  }
  i2z(lexer) {
    lexer.f2g_1 = this.j2z_1;
  }
  hashCode() {
    var hash = MurmurHash_instance.d2z();
    hash = MurmurHash_instance.j2n(hash, this.k2z_1.k1_1);
    hash = MurmurHash_instance.j2n(hash, this.j2z_1);
    return MurmurHash_instance.l2n(hash, 2);
  }
  equals(other) {
    if (other === this) {
      return true;
    }
    if (!(other instanceof LexerChannelAction)) {
      return false;
    }
    return this.j2z_1 === other.j2z_1;
  }
  toString() {
    return 'channel(' + this.j2z_1 + ')';
  }
}
class LexerCustomAction {
  constructor(ruleIndex, actionIndex) {
    this.m2z_1 = ruleIndex;
    this.n2z_1 = actionIndex;
    this.o2z_1 = LexerActionType_CUSTOM_getInstance();
    this.p2z_1 = true;
  }
  q2z() {
    return this.o2z_1;
  }
  e2z() {
    return this.p2z_1;
  }
  i2z(lexer) {
    return lexer.d2i(null, this.m2z_1, this.n2z_1);
  }
  hashCode() {
    var hash = MurmurHash_instance.d2z();
    hash = MurmurHash_instance.j2n(hash, this.q2z().k1_1);
    hash = MurmurHash_instance.j2n(hash, this.m2z_1);
    hash = MurmurHash_instance.j2n(hash, this.n2z_1);
    return MurmurHash_instance.l2n(hash, 3);
  }
  equals(other) {
    if (other === this) {
      return true;
    }
    if (!(other instanceof LexerCustomAction)) {
      return false;
    }
    return this.m2z_1 === other.m2z_1 && this.n2z_1 === other.n2z_1;
  }
}
class LexerIndexedCustomAction {
  constructor(offset, action) {
    this.f2z_1 = offset;
    this.g2z_1 = action;
    this.h2z_1 = true;
  }
  e2z() {
    return this.h2z_1;
  }
  i2z(lexer) {
    return this.g2z_1.i2z(lexer);
  }
  hashCode() {
    var hash = MurmurHash_instance.d2z();
    hash = MurmurHash_instance.j2n(hash, this.f2z_1);
    hash = MurmurHash_instance.k2n(hash, this.g2z_1);
    return MurmurHash_instance.l2n(hash, 2);
  }
  equals(other) {
    if (other === this) {
      return true;
    }
    if (!(other instanceof LexerIndexedCustomAction)) {
      return false;
    }
    return this.f2z_1 === other.f2z_1 && equals(this.g2z_1, other.g2z_1);
  }
}
class LexerModeAction {
  constructor(mode) {
    this.r2z_1 = mode;
    this.s2z_1 = LexerActionType_MODE_getInstance();
    this.t2z_1 = false;
  }
  e2z() {
    return this.t2z_1;
  }
  i2z(lexer) {
    return lexer.n2h(this.r2z_1);
  }
  hashCode() {
    var hash = MurmurHash_instance.d2z();
    hash = MurmurHash_instance.j2n(hash, this.s2z_1.k1_1);
    hash = MurmurHash_instance.j2n(hash, this.r2z_1);
    return MurmurHash_instance.l2n(hash, 2);
  }
  equals(other) {
    if (other === this) {
      return true;
    }
    if (!(other instanceof LexerModeAction)) {
      return false;
    }
    return this.r2z_1 === other.r2z_1;
  }
  toString() {
    return 'mode(' + this.r2z_1 + ')';
  }
}
class LexerMoreAction {
  constructor() {
    LexerMoreAction_instance = this;
    this.u2z_1 = LexerActionType_MORE_getInstance();
    this.v2z_1 = false;
  }
  e2z() {
    return this.v2z_1;
  }
  i2z(lexer) {
    return lexer.m2h();
  }
  hashCode() {
    var hash = MurmurHash_instance.d2z();
    hash = MurmurHash_instance.j2n(hash, this.u2z_1.k1_1);
    return MurmurHash_instance.l2n(hash, 1);
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
    this.w2z_1 = LexerActionType_POP_MODE_getInstance();
    this.x2z_1 = false;
  }
  e2z() {
    return this.x2z_1;
  }
  i2z(lexer) {
    lexer.q2h();
  }
  hashCode() {
    var hash = MurmurHash_instance.d2z();
    hash = MurmurHash_instance.j2n(hash, this.w2z_1.k1_1);
    return MurmurHash_instance.l2n(hash, 1);
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
    this.y2z_1 = mode;
    this.z2z_1 = LexerActionType_PUSH_MODE_getInstance();
    this.a30_1 = false;
  }
  e2z() {
    return this.a30_1;
  }
  i2z(lexer) {
    return lexer.o2h(this.y2z_1);
  }
  hashCode() {
    var hash = MurmurHash_instance.d2z();
    hash = MurmurHash_instance.j2n(hash, this.z2z_1.k1_1);
    hash = MurmurHash_instance.j2n(hash, this.y2z_1);
    return MurmurHash_instance.l2n(hash, 2);
  }
  equals(other) {
    if (other === this) {
      return true;
    }
    if (!(other instanceof LexerPushModeAction)) {
      return false;
    }
    return this.y2z_1 === other.y2z_1;
  }
  toString() {
    return 'pushMode(' + this.y2z_1 + ')';
  }
}
class LexerSkipAction {
  constructor() {
    LexerSkipAction_instance = this;
    this.b30_1 = LexerActionType_SKIP_getInstance();
    this.c30_1 = false;
  }
  e2z() {
    return this.c30_1;
  }
  i2z(lexer) {
    return lexer.l2h();
  }
  hashCode() {
    var hash = MurmurHash_instance.d2z();
    hash = MurmurHash_instance.j2n(hash, this.b30_1.k1_1);
    return MurmurHash_instance.l2n(hash, 1);
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
    this.d30_1 = type;
    this.e30_1 = LexerActionType_TYPE_getInstance();
    this.f30_1 = false;
  }
  e2z() {
    return this.f30_1;
  }
  i2z(lexer) {
    lexer.g2g_1 = this.d30_1;
  }
  hashCode() {
    var hash = MurmurHash_instance.d2z();
    hash = MurmurHash_instance.j2n(hash, this.e30_1.k1_1);
    hash = MurmurHash_instance.j2n(hash, this.d30_1);
    return MurmurHash_instance.l2n(hash, 2);
  }
  equals(other) {
    if (other === this) {
      return true;
    }
    if (!(other instanceof LexerTypeAction)) {
      return false;
    }
    return this.d30_1 === other.d30_1;
  }
  toString() {
    return 'type(' + this.d30_1 + ')';
  }
}
class LoopEndState extends ATNState {
  constructor() {
    super();
    this.n2q_1 = null;
    this.o2q_1 = 12;
  }
  z2c() {
    return this.o2q_1;
  }
}
class SetTransition extends Transition {
  constructor(target, set) {
    super(target);
    var tmp = this;
    tmp.n30_1 = set == null ? Companion_getInstance_26().m2v(0) : set;
    this.o30_1 = 7;
  }
  e2u() {
    return this.o30_1;
  }
  j2v() {
    return this.n30_1;
  }
  getLabel() {
    return this.j2v();
  }
  f2u(symbol, minVocabSymbol, maxVocabSymbol) {
    return this.n30_1.yk(symbol);
  }
  toString() {
    return this.n30_1.toString();
  }
}
class NotSetTransition extends SetTransition {
  constructor(target, set) {
    super(target, set);
    this.k30_1 = 8;
  }
  e2u() {
    return this.k30_1;
  }
  f2u(symbol, minVocabSymbol, maxVocabSymbol) {
    return (minVocabSymbol <= symbol ? symbol <= maxVocabSymbol : false) && !super.f2u(symbol, minVocabSymbol, maxVocabSymbol);
  }
  toString() {
    return '~' + super.toString();
  }
}
class LexerConfigHashSet extends AbstractConfigHashSet {
  constructor() {
    super(Companion_getInstance_27().l2x_1);
  }
}
class OrderedATNConfigSet extends ATNConfigSet {
  constructor() {
    super();
    this.t2o_1 = new LexerConfigHashSet();
  }
}
class Companion_16 {
  constructor() {
    Companion_instance_16 = this;
    this.p30_1 = false;
    this.q30_1 = false;
    this.r30_1 = false;
    this.s30_1 = false;
    this.t30_1 = toBoolean(getSafeEnv(this, 'TURN_OFF_LR_LOOP_ENTRY_BRANCH_OPT', 'false'));
  }
  u30(configs) {
    var alt = 0;
    var _iterator__ex2g4s = configs.d1();
    while (_iterator__ex2g4s.e1()) {
      var c = _iterator__ex2g4s.f1();
      if (alt === 0) {
        alt = c.v2m_1;
      } else if (!(c.v2m_1 === alt)) {
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
    this.x2i_1 = parser;
    this.y2i_1 = decisionToDFA;
    this.z2i_1 = PredictionMode_LL_getInstance();
    this.a2j_1 = null;
    this.b2j_1 = null;
    this.c2j_1 = 0;
    this.d2j_1 = null;
    this.e2j_1 = null;
  }
  d2h() {
  }
  v30(input, decision, outerContext) {
    var tempOuterContext = outerContext;
    if (Companion_getInstance_16().p30_1 || Companion_getInstance_16().q30_1) {
      System_getInstance().h27_1.g27('adaptivePredict decision ' + decision + (' exec LA(1)==' + this.w30(input)) + (' line ' + ensureNotNull(input.i28(1)).h1e() + ':' + ensureNotNull(input.i28(1)).m29()));
    }
    this.b2j_1 = input;
    this.c2j_1 = input.v27();
    this.d2j_1 = tempOuterContext;
    var dfa = this.y2i_1[decision];
    this.e2j_1 = dfa;
    var m = input.w27();
    var index = this.c2j_1;
    try {
      var tmp;
      if (dfa.y2x_1) {
        tmp = dfa.x30(this.x2i_1.t2i());
      } else {
        tmp = dfa.x2x_1;
      }
      var s0 = tmp;
      if (s0 == null) {
        if (tempOuterContext == null) {
          tempOuterContext = Companion_getInstance_3().k2k_1;
        }
        var fullCtx = false;
        var s0Closure = this.y30(dfa.u2x_1, Companion_getInstance_3().k2k_1, fullCtx);
        if (dfa.y2x_1) {
          ensureNotNull(dfa.x2x_1).c2t_1 = s0Closure;
          s0Closure = this.a31(s0Closure);
          s0 = this.z30(dfa, DFAState.j2t(s0Closure));
          dfa.b31(this.x2i_1.t2i(), s0);
        } else {
          s0 = this.z30(dfa, DFAState.j2t(s0Closure));
          dfa.x2x_1 = s0;
        }
      }
      var alt = this.c31(dfa, s0, input, index, ensureNotNull(tempOuterContext));
      if (Companion_getInstance_16().p30_1) {
        System_getInstance().h27_1.g27('DFA after predictATN: ' + dfa.b2e(this.x2i_1.x29()));
      }
      return alt;
    }finally {
      this.a2j_1 = null;
      this.e2j_1 = null;
      input.y27(index);
      input.x27(m);
    }
  }
  c31(dfa, s0, input, startIndex, outerContext) {
    if (Companion_getInstance_16().p30_1 || Companion_getInstance_16().q30_1) {
      System_getInstance().h27_1.g27('execATN decision ' + dfa.v2x_1 + (', DFA state ' + s0.toString()) + (', LA(1)==' + this.w30(input)) + (', line ' + ensureNotNull(input.i28(1)).h1e() + ':' + ensureNotNull(input.i28(1)).m29()));
    }
    var previousD = s0;
    var t = input.d28(1);
    while (true) {
      var tmp0_elvis_lhs = this.f2y(previousD, t);
      var D = tmp0_elvis_lhs == null ? this.d31(dfa, previousD, t) : tmp0_elvis_lhs;
      if (D === Companion_getInstance_11().k2t_1) {
        var e = this.e31(input, outerContext, previousD.c2t_1, startIndex);
        input.y27(startIndex);
        var alt = this.f31(previousD.c2t_1, outerContext);
        if (!(alt === 0)) {
          return alt;
        }
        throw e;
      }
      if (ensureNotNull(D).h2t_1 && !this.z2i_1.equals(PredictionMode_SLL_getInstance())) {
        var conflictingAlts = D.c2t_1.w2o_1;
        if (!(D.i2t_1 == null)) {
          if (Companion_getInstance_16().p30_1) {
            System_getInstance().h27_1.g27('DFA state has preds in DFA sim LL failover');
          }
          var conflictIndex = input.v27();
          if (!(conflictIndex === startIndex)) {
            input.y27(startIndex);
          }
          conflictingAlts = this.g31(ensureNotNull(D.i2t_1), outerContext, true);
          if (conflictingAlts.i31() === 1) {
            if (Companion_getInstance_16().p30_1) {
              System_getInstance().h27_1.g27('Full LL avoided');
            }
            return conflictingAlts.h31(0);
          }
          if (!(conflictIndex === startIndex)) {
            input.y27(conflictIndex);
          }
        }
        if (Companion_getInstance_16().r30_1) {
          System_getInstance().h27_1.g27('ctx sensitive state ' + outerContext.toString() + ' in ' + toString_1(D));
        }
        var fullCtx = true;
        var s0Closure = this.y30(dfa.u2x_1, outerContext, fullCtx);
        this.j31(dfa, ensureNotNull(conflictingAlts), D.c2t_1, startIndex, input.v27());
        return this.k31(dfa, D, s0Closure, input, startIndex, outerContext);
      }
      if (D.e2t_1) {
        if (D.i2t_1 == null) {
          return D.f2t_1;
        }
        var stopIndex = input.v27();
        input.y27(startIndex);
        var alts = this.g31(ensureNotNull(D.i2t_1), outerContext, true);
        switch (alts.i31()) {
          case 0:
            throw this.e31(input, outerContext, D.c2t_1, startIndex);
          case 1:
            return alts.h31(0);
          default:
            this.l31(dfa, D, startIndex, stopIndex, false, alts, D.c2t_1);
            return alts.h31(0);
        }
      }
      previousD = D;
      if (!(t === -1)) {
        input.c28();
        t = input.d28(1);
      }
    }
  }
  f2y(previousD, t) {
    var edges = previousD.d2t_1;
    if (edges == null || (t + 1 | 0) < 0 || (t + 1 | 0) >= edges.length) {
      return null;
    }
    return edges[t + 1 | 0];
  }
  d31(dfa, previousD, t) {
    var reach = this.m31(previousD.c2t_1, t, false);
    if (reach == null) {
      this.n31(dfa, previousD, t, Companion_getInstance_11().k2t_1);
      return Companion_getInstance_11().k2t_1;
    }
    var D = DFAState.j2t(reach);
    var predictedAlt = Companion_getInstance_16().u30(reach);
    if (Companion_getInstance_16().p30_1) {
      var altSubSets = Companion_instance_18.o31(reach);
      System_getInstance().h27_1.g27('SLL altSubSets=' + toString_0(altSubSets) + (', configs=' + toString_1(reach)) + (', predict=' + predictedAlt) + (', allSubsetsConflict=' + Companion_instance_18.p31(altSubSets)) + (', conflictingAlts=' + this.q31(reach).toString()));
    }
    if (!(predictedAlt === 0)) {
      D.e2t_1 = true;
      D.c2t_1.v2o_1 = predictedAlt;
      D.f2t_1 = predictedAlt;
    } else if (Companion_instance_18.r31(this.z2i_1, reach)) {
      D.c2t_1.w2o_1 = this.q31(reach);
      D.h2t_1 = true;
      D.e2t_1 = true;
      D.f2t_1 = ensureNotNull(D.c2t_1.w2o_1).h31(0);
    }
    if (D.e2t_1 && D.c2t_1.x2o_1) {
      this.s31(D, ensureNotNull(this.n2c_1.s2m(dfa.v2x_1)));
      if (!(D.i2t_1 == null)) {
        D.f2t_1 = 0;
      }
    }
    return this.n31(dfa, previousD, t, D);
  }
  s31(dfaState, decisionState) {
    var nAlts = decisionState.l2r();
    var altsToCollectPredsFrom = this.t31(dfaState.c2t_1);
    var altToPred = this.u31(altsToCollectPredsFrom, dfaState.c2t_1, nAlts);
    if (!(altToPred == null)) {
      dfaState.i2t_1 = this.v31(altsToCollectPredsFrom, altToPred);
      dfaState.f2t_1 = 0;
    } else {
      dfaState.f2t_1 = altsToCollectPredsFrom.h31(0);
    }
  }
  k31(dfa, D, s0, input, startIndex, outerContext) {
    if (Companion_getInstance_16().p30_1 || Companion_getInstance_16().q30_1) {
      System_getInstance().h27_1.g27('execATNWithFullContext ' + s0.toString());
    }
    var fullCtx = true;
    var foundExactAmbig = false;
    var reach;
    var previous = s0;
    input.y27(startIndex);
    var t = input.d28(1);
    var predictedAlt;
    $l$loop_1: while (true) {
      reach = this.m31(previous, t, fullCtx);
      if (reach == null) {
        var e = this.e31(input, outerContext, previous, startIndex);
        input.y27(startIndex);
        var alt = this.f31(previous, outerContext);
        if (!(alt === 0)) {
          return alt;
        }
        throw e;
      }
      var altSubSets = Companion_instance_18.o31(reach);
      if (Companion_getInstance_16().p30_1) {
        System_getInstance().h27_1.g27('LL altSubSets=' + toString_0(altSubSets) + (', predict=' + Companion_instance_18.w31(altSubSets)) + (', resolvesToJustOneViableAlt=' + Companion_instance_18.x31(altSubSets)));
      }
      reach.v2o_1 = Companion_getInstance_16().u30(reach);
      if (!(reach.v2o_1 === 0)) {
        predictedAlt = reach.v2o_1;
        break $l$loop_1;
      }
      if (!this.z2i_1.equals(PredictionMode_LL_EXACT_AMBIG_DETECTION_getInstance())) {
        predictedAlt = Companion_instance_18.x31(altSubSets);
        if (!(predictedAlt === 0)) {
          break $l$loop_1;
        }
      } else {
        if (Companion_instance_18.p31(altSubSets) && Companion_instance_18.z31(altSubSets)) {
          foundExactAmbig = true;
          predictedAlt = Companion_instance_18.y31(altSubSets);
          break $l$loop_1;
        }
      }
      previous = reach;
      if (!(t === -1)) {
        input.c28();
        t = input.d28(1);
      }
    }
    if (!(ensureNotNull(reach).v2o_1 === 0)) {
      this.a32(dfa, predictedAlt, reach, startIndex, input.v27());
      return predictedAlt;
    }
    this.l31(dfa, D, startIndex, input.v27(), foundExactAmbig, reach.b2p(), reach);
    return predictedAlt;
  }
  m31(closure, t, fullCtx) {
    if (Companion_getInstance_16().p30_1) {
      System_getInstance().h27_1.g27('in computeReachSet, starting closure: ' + closure.toString());
    }
    if (this.a2j_1 == null) {
      this.a2j_1 = new DoubleKeyMap();
    }
    var intermediate = new ATNConfigSet(fullCtx);
    var skippedStopStates = null;
    var _iterator__ex2g4s = closure.d1();
    $l$loop: while (_iterator__ex2g4s.e1()) {
      var c = _iterator__ex2g4s.f1();
      if (Companion_getInstance_16().p30_1) {
        System_getInstance().h27_1.g27('testing ' + this.m2y(t) + ' at ' + c.toString());
      }
      var tmp = c.u2m_1;
      if (tmp instanceof RuleStopState) {
        // Inline function 'com.strumenta.antlrkotlin.runtime.assert' call
        if (!ensureNotNull(c.w2m_1).r2h()) {
          throw AssertionError.yc(null);
        }
        if (fullCtx || t === -1) {
          if (skippedStopStates == null) {
            skippedStopStates = ArrayList.b2();
          }
          skippedStopStates.g2(c);
        }
        continue $l$loop;
      }
      var n = c.u2m_1.l2r();
      var inductionVariable = 0;
      if (inductionVariable < n)
        do {
          var ti = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var trans = c.u2m_1.s2e(ti);
          var target = this.n2y(trans, t);
          if (!(target == null)) {
            intermediate.g2p(ATNConfig.e2n(c, target), this.a2j_1);
          }
        }
         while (inductionVariable < n);
    }
    var reach = null;
    if (skippedStopStates == null && !(t === -1)) {
      if (intermediate.i2() === 1) {
        reach = intermediate;
      } else if (!(Companion_getInstance_16().u30(intermediate) === 0)) {
        reach = intermediate;
      }
    }
    if (reach == null) {
      reach = new ATNConfigSet(fullCtx);
      var closureBusy = HashSet.v9();
      var treatEofAsEpsilon = t === -1;
      var _iterator__ex2g4s_0 = intermediate.d1();
      while (_iterator__ex2g4s_0.e1()) {
        var c_0 = _iterator__ex2g4s_0.f1();
        this.b32(c_0, reach, closureBusy, false, fullCtx, treatEofAsEpsilon);
      }
    }
    if (t === -1) {
      reach = this.c32(reach, reach === intermediate);
    }
    if (!(skippedStopStates == null) && (!fullCtx || !Companion_instance_18.d32(reach))) {
      // Inline function 'kotlin.collections.isNotEmpty' call
      // Inline function 'com.strumenta.antlrkotlin.runtime.assert' call
      if (!!skippedStopStates.b1()) {
        throw AssertionError.yc(null);
      }
      var _iterator__ex2g4s_1 = skippedStopStates.d1();
      while (_iterator__ex2g4s_1.e1()) {
        var c_1 = _iterator__ex2g4s_1.f1();
        reach.g2p(c_1, this.a2j_1);
      }
    }
    if (Companion_getInstance_16().q30_1) {
      System_getInstance().h27_1.g27('computeReachSet ' + closure.toString() + ' -> ' + toString_1(reach));
    }
    var tmp_0;
    if (reach.b1()) {
      tmp_0 = null;
    } else {
      tmp_0 = reach;
    }
    return tmp_0;
  }
  c32(configs, lookToEndOfRule) {
    if (Companion_instance_18.e32(configs)) {
      return configs;
    }
    var result = new ATNConfigSet(configs.s2o_1);
    var _iterator__ex2g4s = configs.d1();
    $l$loop: while (_iterator__ex2g4s.e1()) {
      var config = _iterator__ex2g4s.f1();
      var tmp = config.u2m_1;
      if (tmp instanceof RuleStopState) {
        result.g2p(config, this.a2j_1);
        continue $l$loop;
      }
      if (lookToEndOfRule && config.u2m_1.x2s()) {
        var nextTokens = this.n2c_1.r2c(config.u2m_1);
        if (nextTokens.yk(-2)) {
          var endOfRuleState = ensureNotNull(this.n2c_1.i2c_1)[config.u2m_1.u2c_1];
          result.g2p(ATNConfig.e2n(config, ensureNotNull(endOfRuleState)), this.a2j_1);
        }
      }
    }
    return result;
  }
  y30(p, ctx, fullCtx) {
    var initialContext = Companion_instance_17.u2w(this.n2c_1, ctx);
    var configs = new ATNConfigSet(fullCtx);
    if (Companion_getInstance_16().q30_1) {
      System_getInstance().h27_1.g27('computeStartState from ATN state ' + p.toString() + ' initialContext=' + initialContext.e2v(this.x2i_1));
    }
    var inductionVariable = 0;
    var last = p.l2r();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var target = p.s2e(i).q2e_1;
        var c = ATNConfig.c2n(target, i + 1 | 0, initialContext);
        var closureBusy = HashSet.v9();
        this.b32(c, configs, closureBusy, true, fullCtx, false);
      }
       while (inductionVariable < last);
    return configs;
  }
  a31(configs) {
    var statesFromAlt1 = HashMap.f8();
    var configSet = new ATNConfigSet(configs.s2o_1);
    var _iterator__ex2g4s = configs.d1();
    $l$loop_0: while (_iterator__ex2g4s.e1()) {
      var config = _iterator__ex2g4s.f1();
      if (!(config.v2m_1 === 1)) {
        continue $l$loop_0;
      }
      var tmp0_elvis_lhs = config.y2m_1.f32(this.x2i_1, ensureNotNull(this.d2j_1));
      var tmp;
      if (tmp0_elvis_lhs == null) {
        continue $l$loop_0;
      } else {
        tmp = tmp0_elvis_lhs;
      }
      var updatedContext = tmp;
      var tmp2 = config.u2m_1.t2c_1;
      // Inline function 'kotlin.collections.set' call
      var value = ensureNotNull(config.w2m_1);
      statesFromAlt1.s3(tmp2, value);
      if (!(updatedContext === config.y2m_1)) {
        configSet.g2p(ATNConfig.f2n(config, updatedContext), this.a2j_1);
      } else {
        configSet.g2p(config, this.a2j_1);
      }
    }
    var _iterator__ex2g4s_0 = configs.d1();
    $l$loop_2: while (_iterator__ex2g4s_0.e1()) {
      var config_0 = _iterator__ex2g4s_0.f1();
      if (config_0.v2m_1 === 1) {
        continue $l$loop_2;
      }
      if (!config_0.b2n()) {
        var context = statesFromAlt1.y3(config_0.u2m_1.t2c_1);
        if (!(context == null) && equals(context, config_0.w2m_1)) {
          continue $l$loop_2;
        }
      }
      configSet.g2p(config_0, this.a2j_1);
    }
    return configSet;
  }
  n2y(trans, ttype) {
    var tmp;
    if (trans.f2u(ttype, 0, this.n2c_1.e2c_1)) {
      tmp = trans.q2e_1;
    } else {
      tmp = null;
    }
    return tmp;
  }
  u31(ambigAlts, configs, nAlts) {
    // Inline function 'kotlin.arrayOfNulls' call
    var size = nAlts + 1 | 0;
    var altToPred = Array(size);
    var _iterator__ex2g4s = configs.d1();
    while (_iterator__ex2g4s.e1()) {
      var c = _iterator__ex2g4s.f1();
      if (ambigAlts.k2(c.v2m_1)) {
        altToPred[c.v2m_1] = Companion_instance_19.g32(altToPred[c.v2m_1], c.y2m_1);
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
      if (Companion_getInstance_16().p30_1) {
        System_getInstance().h27_1.g27('getPredsForAmbigAlts result null');
      }
      return null;
    }
    if (Companion_getInstance_16().p30_1) {
      System_getInstance().h27_1.g27('getPredsForAmbigAlts result ' + joinToString(altToPred));
    }
    return altToPred;
  }
  v31(ambigAlts, altToPred) {
    var pairs = ArrayList.b2();
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
          throw AssertionError.yc(null);
        }
        if (!(ambigAlts == null) && ambigAlts.k2(i)) {
          pairs.g2(new PredPrediction(pred, i));
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
  f31(configs, outerContext) {
    var sets = this.h32(configs, outerContext);
    var semValidConfigs = sets.first;
    var semInvalidConfigs = sets.second;
    var alt = this.i32(semValidConfigs);
    if (!(alt === 0)) {
      return alt;
    }
    if (semInvalidConfigs.i2() > 0) {
      alt = this.i32(semInvalidConfigs);
      if (!(alt === 0)) {
        return alt;
      }
    }
    return 0;
  }
  i32(configs) {
    var alts = IntervalSet.y2b();
    var _iterator__ex2g4s = configs.d1();
    while (_iterator__ex2g4s.e1()) {
      var c = _iterator__ex2g4s.f1();
      var tmp;
      if (c.z2m() > 0) {
        tmp = true;
      } else {
        var tmp_0;
        var tmp_1 = c.u2m_1;
        if (tmp_1 instanceof RuleStopState) {
          tmp_0 = ensureNotNull(c.w2m_1).d2v();
        } else {
          tmp_0 = false;
        }
        tmp = tmp_0;
      }
      if (tmp) {
        alts.z2b(c.v2m_1);
      }
    }
    if (alts.b28() === 0) {
      return 0;
    }
    return alts.u2e();
  }
  h32(configs, outerContext) {
    var succeeded = new ATNConfigSet(configs.s2o_1);
    var failed = new ATNConfigSet(configs.s2o_1);
    var _iterator__ex2g4s = configs.d1();
    while (_iterator__ex2g4s.e1()) {
      var c = _iterator__ex2g4s.f1();
      if (!(c.y2m_1 === Empty_getInstance())) {
        var predicateEvaluationResult = this.j32(c.y2m_1, outerContext, c.v2m_1, configs.s2o_1);
        if (predicateEvaluationResult) {
          succeeded.f2p(c);
        } else {
          failed.f2p(c);
        }
      } else {
        succeeded.f2p(c);
      }
    }
    return new Pair(succeeded, failed);
  }
  g31(predPredictions, outerContext, complete) {
    var predictions = BitSet.d2p();
    var inductionVariable = 0;
    var last = predPredictions.length;
    $l$loop_1: while (inductionVariable < last) {
      var pair = predPredictions[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      if (pair.k32_1 === Empty_getInstance()) {
        predictions.e2p(pair.l32_1);
        if (!complete) {
          break $l$loop_1;
        }
        continue $l$loop_1;
      }
      var fullCtx = false;
      var predicateEvaluationResult = this.j32(pair.k32_1, outerContext, pair.l32_1, fullCtx);
      if (Companion_getInstance_16().p30_1 || Companion_getInstance_16().r30_1) {
        System_getInstance().h27_1.g27('eval pred ' + pair.toString() + '=' + predicateEvaluationResult);
      }
      if (predicateEvaluationResult) {
        if (Companion_getInstance_16().p30_1 || Companion_getInstance_16().r30_1) {
          System_getInstance().h27_1.g27('PREDICT ' + pair.l32_1);
        }
        predictions.e2p(pair.l32_1);
        if (!complete) {
          break $l$loop_1;
        }
      }
    }
    return predictions;
  }
  j32(pred, parserCallStack, alt, fullCtx) {
    return pred.m32(this.x2i_1, parserCallStack);
  }
  b32(config, configs, closureBusy, collectPredicates, fullCtx, treatEofAsEpsilon) {
    var initialDepth = 0;
    this.n32(config, configs, closureBusy, collectPredicates, fullCtx, initialDepth, treatEofAsEpsilon);
    // Inline function 'com.strumenta.antlrkotlin.runtime.assert' call
    if (!(!fullCtx || !configs.y2o_1)) {
      throw AssertionError.yc(null);
    }
  }
  n32(config, configs, closureBusy, collectPredicates, fullCtx, depth, treatEofAsEpsilon) {
    if (Companion_getInstance_16().q30_1) {
      System_getInstance().h27_1.g27('closure(' + config.m2n(this.x2i_1, true) + ')');
    }
    var tmp = config.u2m_1;
    if (tmp instanceof RuleStopState) {
      if (!ensureNotNull(config.w2m_1).r2h()) {
        var inductionVariable = 0;
        var last = ensureNotNull(config.w2m_1).b28();
        if (inductionVariable < last)
          $l$loop_0: do {
            var i = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            if (ensureNotNull(config.w2m_1).c2v(i) === 2147483647) {
              if (fullCtx) {
                configs.g2p(ATNConfig.e2n(config, config.u2m_1, EmptyPredictionContext_getInstance()), this.a2j_1);
                continue $l$loop_0;
              }
              if (Companion_getInstance_16().p30_1) {
                System_getInstance().h27_1.g27('FALLING off rule ' + this.o32(config.u2m_1.u2c_1));
              }
              this.p32(config, configs, closureBusy, collectPredicates, fullCtx, depth, treatEofAsEpsilon);
              continue $l$loop_0;
            }
            var returnState = this.n2c_1.f2c_1.k2(ensureNotNull(config.w2m_1).c2v(i));
            var newContext = ensureNotNull(config.w2m_1).b2v(i);
            var c = ATNConfig.c2n(ensureNotNull(returnState), config.v2m_1, ensureNotNull(newContext), config.y2m_1);
            c.x2m_1 = config.x2m_1;
            // Inline function 'com.strumenta.antlrkotlin.runtime.assert' call
            if (!(depth > -2147483648)) {
              throw AssertionError.yc(null);
            }
            this.n32(c, configs, closureBusy, collectPredicates, fullCtx, depth - 1 | 0, treatEofAsEpsilon);
          }
           while (inductionVariable < last);
        return Unit_instance;
      } else if (fullCtx) {
        configs.g2p(config, this.a2j_1);
        return Unit_instance;
      } else {
        if (Companion_getInstance_16().p30_1) {
          System_getInstance().h27_1.g27('FALLING off rule ' + this.o32(config.u2m_1.u2c_1));
        }
      }
    }
    this.p32(config, configs, closureBusy, collectPredicates, fullCtx, depth, treatEofAsEpsilon);
  }
  p32(config, configs, closureBusy, collectPredicates, fullCtx, depth, treatEofAsEpsilon) {
    var p = config.u2m_1;
    if (!p.x2s()) {
      configs.g2p(config, this.a2j_1);
    }
    var inductionVariable = 0;
    var last = p.l2r();
    if (inductionVariable < last)
      $l$loop_1: do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (i === 0 && this.q32(config)) {
          continue $l$loop_1;
        }
        var t = p.s2e(i);
        var tmp;
        if (!(t instanceof ActionTransition)) {
          tmp = collectPredicates;
        } else {
          tmp = false;
        }
        var continueCollecting = tmp;
        var c = this.r32(config, t, continueCollecting, depth === 0, fullCtx, treatEofAsEpsilon);
        if (!(c == null)) {
          var newDepth = depth;
          var tmp_0 = config.u2m_1;
          if (tmp_0 instanceof RuleStopState) {
            // Inline function 'com.strumenta.antlrkotlin.runtime.assert' call
            if (!!fullCtx) {
              throw AssertionError.yc(null);
            }
            if (!(this.e2j_1 == null) && ensureNotNull(this.e2j_1).y2x_1) {
              var outermostPrecedenceReturn = (t instanceof EpsilonTransition ? t : THROW_CCE()).r2w_1;
              if (outermostPrecedenceReturn === ensureNotNull(this.e2j_1).u2x_1.u2c_1) {
                c.a2n(true);
              }
            }
            c.x2m_1 = c.x2m_1 + 1 | 0;
            if (!closureBusy.g2(c)) {
              continue $l$loop_1;
            }
            configs.y2o_1 = true;
            // Inline function 'com.strumenta.antlrkotlin.runtime.assert' call
            if (!(newDepth > -2147483648)) {
              throw AssertionError.yc(null);
            }
            newDepth = newDepth - 1 | 0;
            if (Companion_getInstance_16().p30_1) {
              System_getInstance().h27_1.g27('dips into outer ctx: ' + toString_1(c));
            }
          } else {
            if (!t.d2u() && !closureBusy.g2(c)) {
              continue $l$loop_1;
            }
            if (t instanceof RuleTransition) {
              if (newDepth >= 0) {
                newDepth = newDepth + 1 | 0;
              }
            }
          }
          this.n32(c, configs, closureBusy, continueCollecting, fullCtx, newDepth, treatEofAsEpsilon);
        }
      }
       while (inductionVariable < last);
  }
  q32(config) {
    if (Companion_getInstance_16().t30_1) {
      return false;
    }
    var p = config.u2m_1;
    var tmp;
    var tmp_0;
    var tmp_1;
    if (!(p.z2c() === 10)) {
      tmp_1 = true;
    } else {
      tmp_1 = !(p instanceof StarLoopEntryState ? p : THROW_CCE()).f2s_1;
    }
    if (tmp_1) {
      tmp_0 = true;
    } else {
      tmp_0 = ensureNotNull(config.w2m_1).r2h();
    }
    if (tmp_0) {
      tmp = true;
    } else {
      tmp = ensureNotNull(config.w2m_1).d2v();
    }
    if (tmp) {
      return false;
    }
    var numCtxs = ensureNotNull(config.w2m_1).b28();
    var inductionVariable = 0;
    if (inductionVariable < numCtxs)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var returnState = this.n2c_1.f2c_1.k2(ensureNotNull(config.w2m_1).c2v(i));
        if (!(ensureNotNull(returnState).u2c_1 === p.u2c_1)) {
          return false;
        }
      }
       while (inductionVariable < numCtxs);
    var tmp_2 = p.s2e(0).q2e_1;
    var decisionStartState = tmp_2 instanceof BlockStartState ? tmp_2 : THROW_CCE();
    var blockEndStateNum = ensureNotNull(decisionStartState.y2q_1).t2c_1;
    var tmp_3 = this.n2c_1.f2c_1.k2(blockEndStateNum);
    var blockEndState = tmp_3 instanceof BlockEndState ? tmp_3 : THROW_CCE();
    var inductionVariable_0 = 0;
    if (inductionVariable_0 < numCtxs)
      $l$loop_2: do {
        var i_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        var returnStateNumber = ensureNotNull(config.w2m_1).c2v(i_0);
        var returnState_0 = this.n2c_1.f2c_1.k2(returnStateNumber);
        if (!(ensureNotNull(returnState_0).l2r() === 1) || !returnState_0.s2e(0).d2u()) {
          return false;
        }
        var returnStateTarget = returnState_0.s2e(0).q2e_1;
        if (returnState_0.z2c() === 8 && returnStateTarget === p) {
          continue $l$loop_2;
        }
        if (returnState_0 === blockEndState) {
          continue $l$loop_2;
        }
        if (returnStateTarget === blockEndState) {
          continue $l$loop_2;
        }
        if (returnStateTarget.z2c() === 8 && returnStateTarget.l2r() === 1 && returnStateTarget.s2e(0).d2u() && returnStateTarget.s2e(0).q2e_1 === p) {
          continue $l$loop_2;
        }
        return false;
      }
       while (inductionVariable_0 < numCtxs);
    return true;
  }
  o32(index) {
    if (index >= 0) {
      return this.x2i_1.c2e()[index];
    }
    return '<rule ' + index + '>';
  }
  r32(config, t, collectPredicates, inContext, fullCtx, treatEofAsEpsilon) {
    switch (t.e2u()) {
      case 3:
        return this.s32(config, t instanceof RuleTransition ? t : THROW_CCE());
      case 10:
        return this.t32(config, t instanceof PrecedencePredicateTransition ? t : THROW_CCE(), collectPredicates, inContext, fullCtx);
      case 4:
        return this.u32(config, t instanceof PredicateTransition ? t : THROW_CCE(), collectPredicates, inContext, fullCtx);
      case 6:
        return this.v32(config, t instanceof ActionTransition ? t : THROW_CCE());
      case 1:
        return ATNConfig.e2n(config, t.q2e_1);
      case 5:
      case 2:
      case 7:
        if (treatEofAsEpsilon) {
          if (t.f2u(-1, 0, 1)) {
            return ATNConfig.e2n(config, t.q2e_1);
          }
        }

        return null;
      default:
        return null;
    }
  }
  v32(config, t) {
    if (Companion_getInstance_16().p30_1) {
      System_getInstance().h27_1.g27('ACTION edge ' + t.i2u_1 + ':' + t.j2u_1);
    }
    return ATNConfig.e2n(config, t.q2e_1);
  }
  t32(config, pt, collectPredicates, inContext, fullCtx) {
    if (Companion_getInstance_16().p30_1) {
      System_getInstance().h27_1.g27('PRED (collectPredicates=' + collectPredicates + ') ' + pt.y32_1 + '>=_p, ctx dependent=true');
      System_getInstance().h27_1.g27('context surrounding pred is ' + toString_0(this.x2i_1.j2k()));
    }
    var c = null;
    if (collectPredicates && inContext) {
      if (fullCtx) {
        var currentPosition = ensureNotNull(this.b2j_1).v27();
        ensureNotNull(this.b2j_1).y27(this.c2j_1);
        var predSucceeds = this.j32(pt.b33(), ensureNotNull(this.d2j_1), config.v2m_1, fullCtx);
        ensureNotNull(this.b2j_1).y27(currentPosition);
        if (predSucceeds) {
          c = ATNConfig.e2n(config, pt.q2e_1);
        }
      } else {
        var newSemCtx = Companion_instance_19.c33(config.y2m_1, pt.b33());
        c = ATNConfig.d2n(config, pt.q2e_1, ensureNotNull(newSemCtx));
      }
    } else {
      c = ATNConfig.e2n(config, pt.q2e_1);
    }
    if (Companion_getInstance_16().p30_1) {
      System_getInstance().h27_1.g27('config from pred transition=' + toString_1(c));
    }
    return c;
  }
  u32(config, pt, collectPredicates, inContext, fullCtx) {
    if (Companion_getInstance_16().p30_1) {
      System_getInstance().h27_1.g27('PRED (collectPredicates=' + collectPredicates + ')' + (' ' + pt.w2y_1 + ':' + pt.x2y_1) + (', ctx dependent=' + pt.y2y_1));
      System_getInstance().h27_1.g27('context surrounding pred is ' + toString_0(this.x2i_1.j2k()));
    }
    var c = null;
    if (collectPredicates && (!pt.y2y_1 || (pt.y2y_1 && inContext))) {
      if (fullCtx) {
        var currentPosition = ensureNotNull(this.b2j_1).v27();
        ensureNotNull(this.b2j_1).y27(this.c2j_1);
        var predSucceeds = this.j32(pt.b33(), ensureNotNull(this.d2j_1), config.v2m_1, fullCtx);
        ensureNotNull(this.b2j_1).y27(currentPosition);
        if (predSucceeds) {
          c = ATNConfig.e2n(config, pt.q2e_1);
        }
      } else {
        var newSemCtx = Companion_instance_19.c33(config.y2m_1, pt.b33());
        c = ATNConfig.d2n(config, pt.q2e_1, ensureNotNull(newSemCtx));
      }
    } else {
      c = ATNConfig.e2n(config, pt.q2e_1);
    }
    if (Companion_getInstance_16().p30_1) {
      System_getInstance().h27_1.g27('config from pred transition=' + toString_1(c));
    }
    return c;
  }
  s32(config, t) {
    if (Companion_getInstance_16().p30_1) {
      System_getInstance().h27_1.g27('CALL rule ' + this.o32(t.q2e_1.u2c_1) + ', ctx=' + toString_1(config.w2m_1));
    }
    var returnState = t.d2f_1;
    var newContext = Companion_instance_20.y2w(config.w2m_1, returnState.t2c_1);
    return ATNConfig.e2n(config, t.q2e_1, newContext);
  }
  q31(configs) {
    var altSets = Companion_instance_18.o31(configs);
    return Companion_instance_18.d33(altSets);
  }
  t31(configs) {
    var conflictingAlts;
    if (!(configs.v2o_1 === 0)) {
      conflictingAlts = BitSet.d2p();
      conflictingAlts.e2p(configs.v2o_1);
    } else {
      conflictingAlts = ensureNotNull(configs.w2o_1);
    }
    return conflictingAlts;
  }
  m2y(t) {
    if (t === -1) {
      return 'EOF';
    }
    var vocabulary = this.x2i_1.x29();
    var displayName = vocabulary.y29(t);
    if (displayName === t.toString()) {
      return displayName;
    }
    return displayName + '<' + t + '>';
  }
  w30(input) {
    return this.m2y(input.d28(1));
  }
  e31(input, outerContext, configs, startIndex) {
    return NoViableAltException.r2i(this.x2i_1, input, input.k2(startIndex), input.i28(1), configs, outerContext);
  }
  n31(dfa, from, t, to) {
    if (Companion_getInstance_16().p30_1) {
      System_getInstance().h27_1.g27('EDGE ' + toString_1(from) + ' -> ' + toString_1(to) + ' upon ' + this.m2y(t));
    }
    if (to == null) {
      return null;
    }
    var tto = this.z30(dfa, to);
    if (from == null || t < -1 || t > this.n2c_1.e2c_1) {
      return tto;
    }
    // Inline function 'com.strumenta.antlrkotlin.runtime.synchronized' call
    if (from.d2t_1 == null) {
      var tmp = from;
      // Inline function 'kotlin.arrayOfNulls' call
      var size = (this.n2c_1.e2c_1 + 1 | 0) + 1 | 0;
      tmp.d2t_1 = Array(size);
    }
    ensureNotNull(from.d2t_1)[t + 1 | 0] = tto;
    if (Companion_getInstance_16().p30_1) {
      System_getInstance().h27_1.g27('DFA=\n' + dfa.b2e(this.x2i_1.x29()));
    }
    return tto;
  }
  z30(dfa, D) {
    if (D === Companion_getInstance_11().k2t_1) {
      return D;
    }
    // Inline function 'com.strumenta.antlrkotlin.runtime.synchronized' call
    dfa.w2x_1;
    var existing = dfa.w2x_1.y3(D);
    if (!(existing == null)) {
      if (Companion_getInstance_16().q30_1) {
        System_getInstance().h27_1.g27('addDFAState ' + D.toString() + ' exists');
      }
      return existing;
    }
    D.b2t_1 = dfa.w2x_1.i2();
    if (!D.c2t_1.a2p_1) {
      D.c2t_1.m2p(this);
      D.c2t_1.g2m(true);
    }
    if (Companion_getInstance_16().q30_1) {
      System_getInstance().h27_1.g27('addDFAState new ' + D.toString());
    }
    // Inline function 'kotlin.collections.set' call
    dfa.w2x_1.s3(D, D);
    return D;
  }
  j31(dfa, conflictingAlts, configs, startIndex, stopIndex) {
    if (Companion_getInstance_16().p30_1 || Companion_getInstance_16().s30_1) {
      var interval = Companion_getInstance_25().y28(startIndex, stopIndex);
      System_getInstance().h27_1.g27('reportAttemptingFullContext' + (' decision=' + dfa.v2x_1 + ':' + configs.toString()) + (', input=' + this.x2i_1.v2b().q28(interval)));
    }
    this.x2i_1.x2h().o27(this.x2i_1, dfa, startIndex, stopIndex, conflictingAlts, configs);
  }
  a32(dfa, prediction, configs, startIndex, stopIndex) {
    if (Companion_getInstance_16().p30_1 || Companion_getInstance_16().s30_1) {
      var interval = Companion_getInstance_25().y28(startIndex, stopIndex);
      System_getInstance().h27_1.g27('reportContextSensitivity' + (' decision=' + dfa.v2x_1 + ':' + configs.toString()) + (', input=' + this.x2i_1.v2b().q28(interval)));
    }
    this.x2i_1.x2h().p27(this.x2i_1, dfa, startIndex, stopIndex, prediction, configs);
  }
  l31(dfa, D, startIndex, stopIndex, exact, ambigAlts, configs) {
    if (Companion_getInstance_16().p30_1 || Companion_getInstance_16().s30_1) {
      var interval = Companion_getInstance_25().y28(startIndex, stopIndex);
      System_getInstance().h27_1.g27('reportAmbiguity ' + ambigAlts.toString() + ':' + configs.toString() + ', input=' + this.x2i_1.v2b().q28(interval));
    }
    this.x2i_1.x2h().n27(this.x2i_1, dfa, startIndex, stopIndex, exact, ambigAlts, configs);
  }
}
class PlusBlockStartState extends BlockStartState {
  constructor() {
    super();
    this.r2s_1 = null;
    this.s2s_1 = 4;
  }
  z2c() {
    return this.s2s_1;
  }
}
class PlusLoopbackState extends DecisionState {
  constructor() {
    super();
    this.n33_1 = 11;
  }
  z2c() {
    return this.n33_1;
  }
}
class PrecedencePredicateTransition extends AbstractPredicateTransition {
  constructor(target, precedence) {
    super(target);
    this.y32_1 = precedence;
    this.z32_1 = 10;
    this.a33_1 = true;
  }
  e2u() {
    return this.z32_1;
  }
  d2u() {
    return this.a33_1;
  }
  b33() {
    return PrecedencePredicate.p33(this.y32_1);
  }
  f2u(symbol, minVocabSymbol, maxVocabSymbol) {
    return false;
  }
  toString() {
    return '' + this.y32_1 + ' >= _p';
  }
}
class PredicateTransition extends AbstractPredicateTransition {
  constructor(target, ruleIndex, predIndex, isCtxDependent) {
    super(target);
    this.w2y_1 = ruleIndex;
    this.x2y_1 = predIndex;
    this.y2y_1 = isCtxDependent;
    this.z2y_1 = 4;
    this.a2z_1 = true;
  }
  e2u() {
    return this.z2y_1;
  }
  d2u() {
    return this.a2z_1;
  }
  b33() {
    return Predicate.t33(this.w2y_1, this.x2y_1, this.y2y_1);
  }
  f2u(symbol, minVocabSymbol, maxVocabSymbol) {
    return false;
  }
  toString() {
    return 'pred_' + this.w2y_1 + ':' + this.x2y_1;
  }
}
class Companion_17 {
  constructor() {
    this.h2p_1 = 1;
    this.i2p_1 = 2147483647;
    this.j2p_1 = 0;
  }
  u2w(atn, outerContext) {
    var tempOuterContext = outerContext == null ? Companion_getInstance_3().k2k_1 : outerContext;
    if (tempOuterContext.h2f() == null || tempOuterContext === Companion_getInstance_3().k2k_1) {
      return EmptyPredictionContext_getInstance();
    }
    var parent = this.u2w(atn, tempOuterContext.h2f());
    var state = atn.f2c_1.k2(tempOuterContext.e2e_1);
    var tmp = ensureNotNull(state).s2e(0);
    var transition = tmp instanceof RuleTransition ? tmp : THROW_CCE();
    return Companion_instance_20.y2w(parent, transition.d2f_1.t2c_1);
  }
  u33() {
    var hash = MurmurHash_instance.i2n(1);
    hash = MurmurHash_instance.l2n(hash, 0);
    return hash;
  }
  v33(parent, returnState) {
    var hash = MurmurHash_instance.i2n(1);
    hash = MurmurHash_instance.k2n(hash, parent);
    hash = MurmurHash_instance.j2n(hash, returnState);
    hash = MurmurHash_instance.l2n(hash, 2);
    return hash;
  }
  s2u(parents, returnStates) {
    var hash = MurmurHash_instance.i2n(1);
    var inductionVariable = 0;
    var last = parents.length;
    while (inductionVariable < last) {
      var parent = parents[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      hash = MurmurHash_instance.k2n(hash, parent);
    }
    var inductionVariable_0 = 0;
    var last_0 = returnStates.length;
    while (inductionVariable_0 < last_0) {
      var returnState = returnStates[inductionVariable_0];
      inductionVariable_0 = inductionVariable_0 + 1 | 0;
      hash = MurmurHash_instance.j2n(hash, returnState);
    }
    hash = MurmurHash_instance.l2n(hash, imul(2, parents.length));
    return hash;
  }
  k2p(a, b, rootIsWildcard, mergeCache) {
    var aa = a;
    var bb = b;
    // Inline function 'com.strumenta.antlrkotlin.runtime.assert' call
    if (!(!(aa == null) && !(bb == null))) {
      throw AssertionError.yc(null);
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
      return this.w33(aa, bb, rootIsWildcard, mergeCache);
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
      aa = ArrayPredictionContext.w2u(aa);
    }
    if (bb instanceof SingletonPredictionContext) {
      bb = ArrayPredictionContext.w2u(bb);
    }
    var tmp_0 = aa instanceof ArrayPredictionContext ? aa : THROW_CCE();
    return this.x33(tmp_0, bb instanceof ArrayPredictionContext ? bb : THROW_CCE(), rootIsWildcard, mergeCache);
  }
  w33(a, b, rootIsWildcard, mergeCache) {
    if (!(mergeCache == null)) {
      var previous = mergeCache.z33(a, b);
      if (!(previous == null)) {
        return previous;
      }
      previous = mergeCache.z33(b, a);
      if (!(previous == null)) {
        return previous;
      }
    }
    var rootMerge = this.a34(a, b, rootIsWildcard);
    if (!(rootMerge == null)) {
      if (mergeCache == null)
        null;
      else
        mergeCache.b34(a, b, rootMerge);
      return rootMerge;
    }
    if (a.a2v_1 === b.a2v_1) {
      var parent = this.k2p(a.z2u_1, b.z2u_1, rootIsWildcard, mergeCache);
      if (parent === a.z2u_1) {
        return a;
      }
      if (parent === b.z2u_1) {
        return b;
      }
      var a_ = Companion_instance_20.y2w(parent, a.a2v_1);
      if (mergeCache == null)
        null;
      else
        mergeCache.b34(a, b, a_);
      return a_;
    }
    var singleParent = null;
    if (a === b || (!(a.z2u_1 == null) && equals(a.z2u_1, b.z2u_1))) {
      singleParent = a.z2u_1;
    }
    if (!(singleParent == null)) {
      // Inline function 'kotlin.intArrayOf' call
      var payloads = new Int32Array([a.a2v_1, b.a2v_1]);
      if (a.a2v_1 > b.a2v_1) {
        payloads[0] = b.a2v_1;
        payloads[1] = a.a2v_1;
      }
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var parents = [singleParent, singleParent];
      var a__0 = ArrayPredictionContext.r2u(parents, payloads);
      if (mergeCache == null)
        null;
      else
        mergeCache.b34(a, b, a__0);
      return a__0;
    }
    // Inline function 'kotlin.intArrayOf' call
    var payloads_0 = new Int32Array([a.a2v_1, b.a2v_1]);
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var parents_0 = [a.z2u_1, b.z2u_1];
    if (a.a2v_1 > b.a2v_1) {
      payloads_0[0] = b.a2v_1;
      payloads_0[1] = a.a2v_1;
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      parents_0 = [b.z2u_1, a.z2u_1];
    }
    var a__1 = ArrayPredictionContext.r2u(parents_0, payloads_0);
    if (mergeCache == null)
      null;
    else
      mergeCache.b34(a, b, a__1);
    return a__1;
  }
  a34(a, b, rootIsWildcard) {
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
        var payloads = new Int32Array([b.a2v_1, 2147483647]);
        // Inline function 'kotlin.arrayOf' call
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        var parents = [b.z2u_1, null];
        return ArrayPredictionContext.r2u(parents, payloads);
      }
      if (b === EmptyPredictionContext_getInstance()) {
        // Inline function 'kotlin.intArrayOf' call
        var payloads_0 = new Int32Array([a.a2v_1, 2147483647]);
        // Inline function 'kotlin.arrayOf' call
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        var parents_0 = [a.z2u_1, null];
        return ArrayPredictionContext.r2u(parents_0, payloads_0);
      }
    }
    return null;
  }
  x33(a, b, rootIsWildcard, mergeCache) {
    if (!(mergeCache == null)) {
      var previous = mergeCache.z33(a, b);
      if (!(previous == null)) {
        if (Companion_getInstance_16().q30_1) {
          System_getInstance().h27_1.g27('mergeArrays a=' + a.toString() + ',b=' + b.toString() + ' -> previous');
        }
        return previous;
      }
      previous = mergeCache.z33(b, a);
      if (!(previous == null)) {
        if (Companion_getInstance_16().q30_1) {
          System_getInstance().h27_1.g27('mergeArrays a=' + a.toString() + ',b=' + b.toString() + ' -> previous');
        }
        return previous;
      }
    }
    var i = 0;
    var j = 0;
    var k = 0;
    var mergedReturnStates = new Int32Array(a.q2u_1.length + b.q2u_1.length | 0);
    // Inline function 'kotlin.arrayOfNulls' call
    var size = a.q2u_1.length + b.q2u_1.length | 0;
    var mergedParents = Array(size);
    while (i < a.q2u_1.length && j < b.q2u_1.length) {
      var aParent = a.p2u_1[i];
      var bParent = b.p2u_1[j];
      if (a.q2u_1[i] === b.q2u_1[j]) {
        var payload = a.q2u_1[i];
        var both = payload === 2147483647 && aParent == null && bParent == null;
        var ax_ax = !(aParent == null) && !(bParent == null) && equals(aParent, bParent);
        if (both || ax_ax) {
          mergedParents[k] = aParent;
          mergedReturnStates[k] = payload;
        } else {
          var mergedParent = this.k2p(aParent, bParent, rootIsWildcard, mergeCache);
          mergedParents[k] = mergedParent;
          mergedReturnStates[k] = payload;
        }
        i = i + 1 | 0;
        j = j + 1 | 0;
      } else if (a.q2u_1[i] < b.q2u_1[j]) {
        mergedParents[k] = aParent;
        mergedReturnStates[k] = a.q2u_1[i];
        i = i + 1 | 0;
      } else {
        mergedParents[k] = bParent;
        mergedReturnStates[k] = b.q2u_1[j];
        j = j + 1 | 0;
      }
      k = k + 1 | 0;
    }
    if (i < a.q2u_1.length) {
      var inductionVariable = i;
      var last = a.q2u_1.length;
      if (inductionVariable < last)
        do {
          var p = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          mergedParents[k] = a.p2u_1[p];
          mergedReturnStates[k] = a.q2u_1[p];
          k = k + 1 | 0;
        }
         while (inductionVariable < last);
    } else {
      var inductionVariable_0 = j;
      var last_0 = b.q2u_1.length;
      if (inductionVariable_0 < last_0)
        do {
          var p_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          mergedParents[k] = b.p2u_1[p_0];
          mergedReturnStates[k] = b.q2u_1[p_0];
          k = k + 1 | 0;
        }
         while (inductionVariable_0 < last_0);
    }
    if (k < mergedParents.length) {
      if (k === 1) {
        var a_ = Companion_instance_20.y2w(mergedParents[0], mergedReturnStates[0]);
        if (mergeCache == null)
          null;
        else
          mergeCache.b34(a, b, a_);
        return a_;
      }
      mergedParents = copyOf(mergedParents, k);
      mergedReturnStates = copyOf_0(mergedReturnStates, k);
    }
    var M = ArrayPredictionContext.r2u(mergedParents, mergedReturnStates);
    if (M.equals(a)) {
      if (mergeCache == null)
        null;
      else
        mergeCache.b34(a, b, a);
      if (Companion_getInstance_16().q30_1) {
        System_getInstance().h27_1.g27('mergeArrays a=' + a.toString() + ',b=' + b.toString() + ' -> a');
      }
      return a;
    }
    if (M.equals(b)) {
      if (mergeCache == null)
        null;
      else
        mergeCache.b34(a, b, b);
      if (Companion_getInstance_16().q30_1) {
        System_getInstance().h27_1.g27('mergeArrays a=' + a.toString() + ',b=' + b.toString() + ' -> b');
      }
      return b;
    }
    this.c34(mergedParents);
    if (mergeCache == null)
      null;
    else
      mergeCache.b34(a, b, M);
    if (Companion_getInstance_16().q30_1) {
      System_getInstance().h27_1.g27('mergeArrays a=' + a.toString() + ',b=' + b.toString() + ' -> ' + M.toString());
    }
    return M;
  }
  c34(parents) {
    var uniqueParents = HashMap.f8();
    var inductionVariable = 0;
    var last = parents.length - 1 | 0;
    if (inductionVariable <= last)
      do {
        var p = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var parent = parents[p];
        if (!uniqueParents.w3(parent)) {
          // Inline function 'kotlin.collections.set' call
          uniqueParents.s3(parent, parent);
        }
      }
       while (inductionVariable <= last);
    var inductionVariable_0 = 0;
    var last_0 = parents.length - 1 | 0;
    if (inductionVariable_0 <= last_0)
      do {
        var p_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        parents[p_0] = uniqueParents.y3(parents[p_0]);
      }
       while (inductionVariable_0 <= last_0);
  }
  l2t(context, contextCache, visited) {
    if (context.r2h()) {
      return context;
    }
    var existing = visited.y3(context);
    if (!(existing == null)) {
      return existing;
    }
    existing = contextCache.e34(context);
    if (!(existing == null)) {
      // Inline function 'kotlin.collections.set' call
      var value = existing;
      visited.s3(context, value);
      return existing;
    }
    var changed = false;
    // Inline function 'kotlin.arrayOfNulls' call
    var size = context.b28();
    var parents = Array(size);
    var inductionVariable = 0;
    var last = parents.length - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var parent = this.l2t(ensureNotNull(context.b2v(i)), contextCache, visited);
        if (changed || !(parent === context.b2v(i))) {
          if (!changed) {
            // Inline function 'kotlin.arrayOfNulls' call
            var size_0 = context.b28();
            parents = Array(size_0);
            var inductionVariable_0 = 0;
            var last_0 = context.b28();
            if (inductionVariable_0 < last_0)
              do {
                var j = inductionVariable_0;
                inductionVariable_0 = inductionVariable_0 + 1 | 0;
                parents[j] = context.b2v(j);
              }
               while (inductionVariable_0 < last_0);
            changed = true;
          }
          parents[i] = parent;
        }
      }
       while (inductionVariable <= last);
    if (!changed) {
      contextCache.f34(context);
      // Inline function 'kotlin.collections.set' call
      visited.s3(context, context);
      return context;
    }
    var tmp;
    // Inline function 'kotlin.collections.isEmpty' call
    if (parents.length === 0) {
      tmp = EmptyPredictionContext_getInstance();
    } else {
      if (parents.length === 1) {
        tmp = Companion_instance_20.y2w(parents[0], context.c2v(0));
      } else {
        var arrayPredictionContext = context instanceof ArrayPredictionContext ? context : THROW_CCE();
        tmp = ArrayPredictionContext.r2u(parents, arrayPredictionContext.q2u_1);
      }
    }
    var updated = tmp;
    contextCache.f34(updated);
    // Inline function 'kotlin.collections.set' call
    visited.s3(updated, updated);
    // Inline function 'kotlin.collections.set' call
    visited.s3(context, updated);
    return updated;
  }
}
class PredictionContextCache {
  constructor() {
    this.d34_1 = HashMap.f8();
  }
  f34(ctx) {
    if (ctx === EmptyPredictionContext_getInstance()) {
      return EmptyPredictionContext_getInstance();
    }
    var existing = this.d34_1.y3(ctx);
    if (!(existing == null)) {
      return existing;
    }
    // Inline function 'kotlin.collections.set' call
    this.d34_1.s3(ctx, ctx);
    return ctx;
  }
  e34(ctx) {
    return this.d34_1.y3(ctx);
  }
}
class FlexibleHashMap {
  constructor(comparator, initialCapacity, initialBucketCapacity) {
    comparator = comparator === VOID ? Companion_getInstance_27().l2x_1 : comparator;
    initialCapacity = initialCapacity === VOID ? 16 : initialCapacity;
    initialBucketCapacity = initialBucketCapacity === VOID ? 8 : initialBucketCapacity;
    this.g34_1 = comparator;
    this.h34_1 = initialCapacity;
    this.i34_1 = initialBucketCapacity;
    this.k34_1 = 0;
    this.l34_1 = 1;
    this.m34_1 = 0;
    this.j34_1 = createEntryListArray(Companion_instance_23, this.i34_1);
    var tmp = this;
    // Inline function 'kotlin.math.floor' call
    var x = this.h34_1 * 0.75;
    var tmp$ret$0 = Math.floor(x);
    tmp.m34_1 = numberToInt(tmp$ret$0);
  }
  i2() {
    return this.k34_1;
  }
  u3() {
    throw UnsupportedOperationException.x7();
  }
  v3() {
    var a = ArrayList.f2(this.i2());
    var indexedObject = this.j34_1;
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var bucket = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      if (!(bucket == null)) {
        var _iterator__ex2g4s = bucket.d1();
        while (_iterator__ex2g4s.e1()) {
          var entry = _iterator__ex2g4s.f1();
          a.g2(ensureNotNull(entry).b38_1);
        }
      }
    }
    return a;
  }
  t2() {
    throw UnsupportedOperationException.x7();
  }
  y3(key) {
    if (key == null) {
      return null;
    }
    var b = this.n34(key);
    var tmp0_elvis_lhs = this.j34_1[b];
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return null;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var bucket = tmp;
    var _iterator__ex2g4s = bucket.d1();
    while (_iterator__ex2g4s.e1()) {
      var e = _iterator__ex2g4s.f1();
      if (this.g34_1.r2o(e == null ? null : e.a38_1, key)) {
        return e == null ? null : e.b38_1;
      }
    }
    return null;
  }
  s3(key, value) {
    if (key == null) {
      return null;
    }
    if (this.k34_1 > this.m34_1) {
      this.i2o();
    }
    var b = this.n34(key);
    var existingBucket = this.j34_1[b];
    var tmp;
    if (!(existingBucket == null)) {
      tmp = existingBucket;
    } else {
      var list = ArrayList.b2();
      this.j34_1[b] = list;
      tmp = list;
    }
    var bucket = tmp;
    var _iterator__ex2g4s = bucket.d1();
    while (_iterator__ex2g4s.e1()) {
      var e = _iterator__ex2g4s.f1();
      if (this.g34_1.r2o(e == null ? null : e.a38_1, key)) {
        var prev = e == null ? null : e.b38_1;
        if (e == null)
          null;
        else {
          e.b38_1 = value;
        }
        this.k34_1 = this.k34_1 + 1 | 0;
        return prev;
      }
    }
    bucket.g2(new Entry(key, value));
    this.k34_1 = this.k34_1 + 1 | 0;
    return null;
  }
  t3(key) {
    throw UnsupportedOperationException.x7();
  }
  w3(key) {
    return !(this.y3(key) == null);
  }
  hashCode() {
    var hash = MurmurHash_instance.d2z();
    var indexedObject = this.j34_1;
    var inductionVariable = 0;
    var last = indexedObject.length;
    $l$loop: while (inductionVariable < last) {
      var bucket = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      if (bucket == null) {
        continue $l$loop;
      }
      var _iterator__ex2g4s = bucket.d1();
      $l$loop_0: while (_iterator__ex2g4s.e1()) {
        var e = _iterator__ex2g4s.f1();
        if (e == null) {
          break $l$loop_0;
        }
        hash = MurmurHash_instance.j2n(hash, this.g34_1.p2o(e.a38_1));
      }
    }
    hash = MurmurHash_instance.l2n(hash, this.i2());
    return hash;
  }
  equals(other) {
    throw UnsupportedOperationException.x7();
  }
  n34(key) {
    var hash = this.g34_1.p2o(key);
    return hash & (this.j34_1.length - 1 | 0);
  }
  i2o() {
    var old = this.j34_1;
    this.l34_1 = this.l34_1 + 4 | 0;
    var newCapacity = imul(this.j34_1.length, 2);
    var newTable = createEntryListArray(Companion_instance_23, newCapacity);
    this.j34_1 = newTable;
    this.m34_1 = numberToInt(newCapacity * 0.75);
    var oldSize = this.i2();
    var inductionVariable = 0;
    var last = old.length;
    $l$loop: while (inductionVariable < last) {
      var bucket = old[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      if (bucket == null) {
        continue $l$loop;
      }
      var _iterator__ex2g4s = bucket.d1();
      $l$loop_0: while (_iterator__ex2g4s.e1()) {
        var e = _iterator__ex2g4s.f1();
        if (e == null) {
          break $l$loop_0;
        }
        this.s3(e.a38_1, e.b38_1);
      }
    }
    this.k34_1 = oldSize;
  }
  b1() {
    return this.k34_1 === 0;
  }
  toString() {
    if (this.i2() === 0) {
      return '{}';
    }
    var first = true;
    var buf = StringBuilder.z();
    buf.a1('{');
    var indexedObject = this.j34_1;
    var inductionVariable = 0;
    var last = indexedObject.length;
    $l$loop: while (inductionVariable < last) {
      var bucket = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      if (bucket == null) {
        continue $l$loop;
      }
      var _iterator__ex2g4s = bucket.d1();
      $l$loop_0: while (_iterator__ex2g4s.e1()) {
        var e = _iterator__ex2g4s.f1();
        if (e == null) {
          break $l$loop_0;
        }
        if (first) {
          first = false;
        } else {
          buf.a1(', ');
        }
        buf.a1(e.toString());
      }
    }
    buf.a1('}');
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
  o2o(obj) {
    var hashCode = MurmurHash_instance.i2n(7);
    hashCode = MurmurHash_instance.j2n(hashCode, obj.u2m_1.t2c_1);
    hashCode = MurmurHash_instance.k2n(hashCode, obj.w2m_1);
    hashCode = MurmurHash_instance.l2n(hashCode, 2);
    return hashCode;
  }
  p2o(obj) {
    return this.o2o(obj instanceof ATNConfig ? obj : THROW_CCE());
  }
  q2o(a, b) {
    if (a === b) {
      return true;
    }
    if (a == null || b == null) {
      return false;
    }
    return a.u2m_1.t2c_1 === b.u2m_1.t2c_1 && equals(a.w2m_1, b.w2m_1);
  }
  r2o(a, b) {
    var tmp = (a == null ? true : a instanceof ATNConfig) ? a : THROW_CCE();
    return this.q2o(tmp, (b == null ? true : b instanceof ATNConfig) ? b : THROW_CCE());
  }
}
class Companion_18 {
  r31(mode, configs) {
    var tempConfig = configs;
    if (this.e32(tempConfig)) {
      return true;
    }
    if (mode.equals(PredictionMode_SLL_getInstance())) {
      if (tempConfig.x2o_1) {
        var dup = new ATNConfigSet();
        var _iterator__ex2g4s = tempConfig.d1();
        while (_iterator__ex2g4s.e1()) {
          var c = _iterator__ex2g4s.f1();
          var tempC = c;
          tempC = ATNConfig.f2n(tempC, Empty_getInstance());
          dup.f2p(tempC);
        }
        tempConfig = dup;
      }
    }
    var altSets = this.o31(tempConfig);
    return this.o34(altSets) && !this.p34(tempConfig);
  }
  d32(configs) {
    var _iterator__ex2g4s = configs.d1();
    while (_iterator__ex2g4s.e1()) {
      var c = _iterator__ex2g4s.f1();
      var tmp = c.u2m_1;
      if (tmp instanceof RuleStopState) {
        return true;
      }
    }
    return false;
  }
  e32(configs) {
    var _iterator__ex2g4s = configs.d1();
    while (_iterator__ex2g4s.e1()) {
      var config = _iterator__ex2g4s.f1();
      var tmp = config.u2m_1;
      if (!(tmp instanceof RuleStopState)) {
        return false;
      }
    }
    return true;
  }
  x31(altSets) {
    return this.y31(altSets);
  }
  p31(altSets) {
    return !this.q34(altSets);
  }
  q34(altSets) {
    var _iterator__ex2g4s = altSets.d1();
    while (_iterator__ex2g4s.e1()) {
      var alts = _iterator__ex2g4s.f1();
      if (alts.i31() === 1) {
        return true;
      }
    }
    return false;
  }
  o34(altSets) {
    var _iterator__ex2g4s = altSets.d1();
    while (_iterator__ex2g4s.e1()) {
      var alts = _iterator__ex2g4s.f1();
      if (alts.i31() > 1) {
        return true;
      }
    }
    return false;
  }
  z31(altSets) {
    var it = altSets.d1();
    var first = it.f1();
    while (it.e1()) {
      var next = it.f1();
      if (!next.equals(first)) {
        return false;
      }
    }
    return true;
  }
  w31(altSets) {
    var all = this.d33(altSets);
    if (all.i31() === 1) {
      return all.h31(0);
    }
    return 0;
  }
  d33(altSets) {
    var all = BitSet.d2p();
    var _iterator__ex2g4s = altSets.d1();
    while (_iterator__ex2g4s.e1()) {
      var alts = _iterator__ex2g4s.f1();
      all.r34(alts);
    }
    return all;
  }
  o31(configs) {
    var configToAlts = new AltAndContextMap();
    var _iterator__ex2g4s = configs.d1();
    while (_iterator__ex2g4s.e1()) {
      var c = _iterator__ex2g4s.f1();
      var alts = configToAlts.y3(c);
      if (alts == null) {
        alts = BitSet.d2p();
        // Inline function 'kotlin.collections.set' call
        var value = alts;
        configToAlts.s3(c, value);
      }
      alts.e2p(c.v2m_1);
    }
    return configToAlts.v3();
  }
  s34(configs) {
    var m = HashMap.f8();
    var _iterator__ex2g4s = configs.d1();
    while (_iterator__ex2g4s.e1()) {
      var c = _iterator__ex2g4s.f1();
      var alts = m.y3(c.u2m_1);
      if (alts == null) {
        alts = BitSet.d2p();
        var tmp2 = c.u2m_1;
        // Inline function 'kotlin.collections.set' call
        var value = alts;
        m.s3(tmp2, value);
      }
      alts.e2p(c.v2m_1);
    }
    return m;
  }
  p34(configs) {
    var x = this.s34(configs);
    var _iterator__ex2g4s = x.v3().d1();
    while (_iterator__ex2g4s.e1()) {
      var alts = _iterator__ex2g4s.f1();
      if (alts.i31() === 1) {
        return true;
      }
    }
    return false;
  }
  y31(altSets) {
    var viableAlts = BitSet.d2p();
    var _iterator__ex2g4s = altSets.d1();
    while (_iterator__ex2g4s.e1()) {
      var alts = _iterator__ex2g4s.f1();
      var minAlt = alts.h31(0);
      viableAlts.e2p(minAlt);
      if (viableAlts.i31() > 1) {
        return 0;
      }
    }
    return viableAlts.h31(0);
  }
}
class PredictionMode extends Enum {}
class RangeTransition extends Transition {
  constructor(target, from, to) {
    super(target);
    this.v34_1 = from;
    this.w34_1 = to;
    this.x34_1 = 2;
  }
  e2u() {
    return this.x34_1;
  }
  j2v() {
    return Companion_getInstance_26().y28(this.v34_1, this.w34_1);
  }
  getLabel() {
    return this.j2v();
  }
  f2u(symbol, minVocabSymbol, maxVocabSymbol) {
    var containsLower = this.v34_1;
    return symbol <= this.w34_1 ? containsLower <= symbol : false;
  }
  toString() {
    var buf = StringBuilder.ze("'");
    appendCodePoint(buf, this.v34_1);
    buf.a1("'..'");
    appendCodePoint(buf, this.w34_1);
    buf.a1("'");
    return buf.toString();
  }
}
class RuleStartState extends ATNState {
  constructor() {
    super();
    this.g2r_1 = null;
    this.h2r_1 = false;
    this.i2r_1 = 2;
  }
  z2c() {
    return this.i2r_1;
  }
}
class RuleStopState extends ATNState {
  constructor() {
    super();
    this.f35_1 = 7;
  }
  z2c() {
    return this.f35_1;
  }
}
class RuleTransition extends Transition {
  constructor(ruleStart, ruleIndex, precedence, followState) {
    super(ruleStart);
    this.b2f_1 = ruleIndex;
    this.c2f_1 = precedence;
    this.d2f_1 = followState;
    this.e2f_1 = 3;
    this.f2f_1 = true;
  }
  e2u() {
    return this.e2f_1;
  }
  d2u() {
    return this.f2f_1;
  }
  f2u(symbol, minVocabSymbol, maxVocabSymbol) {
    return false;
  }
}
class Companion_19 {
  c33(a, b) {
    if (a == null || a === Empty_getInstance()) {
      return b;
    }
    if (b == null || b === Empty_getInstance()) {
      return a;
    }
    var result = AND.h35(a, b);
    var tmp;
    if (result.g35_1.length === 1) {
      tmp = result.g35_1[0];
    } else {
      tmp = result;
    }
    return tmp;
  }
  g32(a, b) {
    if (a == null) {
      return b;
    }
    if (b == null) {
      return a;
    }
    if (a === Empty_getInstance() || b === Empty_getInstance()) {
      return Empty_getInstance();
    }
    var result = OR.j35(a, b);
    var tmp;
    if (result.i35_1.length === 1) {
      tmp = result.i35_1[0];
    } else {
      tmp = result;
    }
    return tmp;
  }
}
class SemanticContext {
  static l35() {
    return createThis(this);
  }
  f32(parser, parserCallStack) {
    return this;
  }
}
class Empty extends SemanticContext {
  static k35() {
    Empty_instance = null;
    var $this = this.l35();
    Empty_instance = $this;
    return $this;
  }
  m32(parser, parserCallStack) {
    return false;
  }
}
class Predicate extends SemanticContext {
  static m35() {
    var $this = this.l35();
    init_org_antlr_v4_kotlinruntime_atn_SemanticContext_Predicate($this);
    $this.q33_1 = -1;
    $this.r33_1 = -1;
    $this.s33_1 = false;
    return $this;
  }
  static t33(ruleIndex, predIndex, isCtxDependent) {
    var $this = this.l35();
    init_org_antlr_v4_kotlinruntime_atn_SemanticContext_Predicate($this);
    $this.q33_1 = ruleIndex;
    $this.r33_1 = predIndex;
    $this.s33_1 = isCtxDependent;
    return $this;
  }
  m32(parser, parserCallStack) {
    var tmp;
    if (this.s33_1) {
      tmp = parserCallStack;
    } else {
      tmp = null;
    }
    var localctx = tmp;
    return parser.b2i(localctx, this.q33_1, this.r33_1);
  }
  hashCode() {
    var hashCode = MurmurHash_instance.d2z();
    hashCode = MurmurHash_instance.j2n(hashCode, this.q33_1);
    hashCode = MurmurHash_instance.j2n(hashCode, this.r33_1);
    hashCode = MurmurHash_instance.j2n(hashCode, this.s33_1 ? 1 : 0);
    hashCode = MurmurHash_instance.l2n(hashCode, 3);
    return hashCode;
  }
  equals(other) {
    if (!(other instanceof Predicate)) {
      return false;
    }
    if (this === other) {
      return true;
    }
    return this.q33_1 === other.q33_1 && this.r33_1 === other.r33_1 && this.s33_1 === other.s33_1;
  }
  toString() {
    return '{' + this.q33_1 + ':' + this.r33_1 + '}?';
  }
}
class PrecedencePredicate extends SemanticContext {
  static p33(precedence) {
    precedence = precedence === VOID ? 0 : precedence;
    var $this = this.l35();
    $this.o33_1 = precedence;
    return $this;
  }
  m32(parser, parserCallStack) {
    return parser.c2i(parserCallStack, this.o33_1);
  }
  f32(parser, parserCallStack) {
    var tmp;
    if (parser.c2i(parserCallStack, this.o33_1)) {
      tmp = Empty_getInstance();
    } else {
      tmp = null;
    }
    return tmp;
  }
  n35(other) {
    return this.o33_1 - other.o33_1 | 0;
  }
  d(other) {
    return this.n35(other instanceof PrecedencePredicate ? other : THROW_CCE());
  }
  hashCode() {
    var hashCode = 1;
    hashCode = imul(31, hashCode) + this.o33_1 | 0;
    return hashCode;
  }
  equals(other) {
    if (!(other instanceof PrecedencePredicate)) {
      return false;
    }
    if (this === other) {
      return true;
    }
    return this.o33_1 === other.o33_1;
  }
  toString() {
    return '{' + this.o33_1 + '>=prec}?';
  }
}
class Operator extends SemanticContext {
  static o35() {
    return this.l35();
  }
}
class AND extends Operator {
  static h35(a, b) {
    var $this = this.o35();
    var operands = LinkedHashSet.l2();
    if (a instanceof AND) {
      operands.j2(asList(a.g35_1));
    } else {
      operands.g2(a);
    }
    if (b instanceof AND) {
      operands.j2(asList(b.g35_1));
    } else {
      operands.g2(b);
    }
    var precedencePredicates = filterPrecedencePredicates(Companion_instance_19, operands);
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!precedencePredicates.b1()) {
      var reduced = Collections_instance.e27(precedencePredicates);
      operands.g2(reduced);
    }
    var tmp = $this;
    // Inline function 'kotlin.collections.toTypedArray' call
    tmp.g35_1 = copyToArray(operands);
    return $this;
  }
  equals(other) {
    if (this === other) {
      return true;
    }
    if (!(other instanceof AND)) {
      return false;
    }
    return contentEquals_0(this.g35_1, other.g35_1);
  }
  hashCode() {
    var fqn = 'org.antlr.v4.kotlinruntime.atn.SemanticContext.AND';
    var seed = imul(31, getStringHashCode(fqn)) + getKClass(AND).hashCode() | 0;
    return MurmurHash_instance.p35(this.g35_1, seed);
  }
  m32(parser, parserCallStack) {
    var indexedObject = this.g35_1;
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var operand = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      if (!operand.m32(parser, parserCallStack)) {
        return false;
      }
    }
    return true;
  }
  f32(parser, parserCallStack) {
    var differs = false;
    var operands = ArrayList.b2();
    var indexedObject = this.g35_1;
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var context = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      var evaluated = context.f32(parser, parserCallStack);
      differs = !!(differs | !(evaluated === context));
      if (evaluated == null) {
        return null;
      } else if (!(evaluated === Empty_getInstance())) {
        operands.g2(evaluated);
      }
    }
    if (!differs) {
      return this;
    }
    if (operands.b1()) {
      return Empty_getInstance();
    }
    var result = operands.k2(0);
    var inductionVariable_0 = 1;
    var last_0 = operands.i2();
    if (inductionVariable_0 < last_0)
      do {
        var i = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        result = Companion_instance_19.c33(result, operands.k2(i));
      }
       while (inductionVariable_0 < last_0);
    return result;
  }
  toString() {
    return joinToString(this.g35_1, '&&');
  }
}
class OR extends Operator {
  static j35(a, b) {
    var $this = this.o35();
    var operands = LinkedHashSet.l2();
    if (a instanceof OR) {
      operands.j2(asList(a.i35_1));
    } else {
      operands.g2(a);
    }
    if (b instanceof OR) {
      operands.j2(asList(b.i35_1));
    } else {
      operands.g2(b);
    }
    var precedencePredicates = filterPrecedencePredicates(Companion_instance_19, operands);
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!precedencePredicates.b1()) {
      var reduced = Collections_instance.f27(precedencePredicates);
      operands.g2(reduced);
    }
    var tmp = $this;
    // Inline function 'kotlin.collections.toTypedArray' call
    tmp.i35_1 = copyToArray(operands);
    return $this;
  }
  equals(other) {
    if (this === other) {
      return true;
    }
    if (!(other instanceof OR)) {
      return false;
    }
    return contentEquals_0(this.i35_1, other.i35_1);
  }
  hashCode() {
    var fqn = 'org.antlr.v4.kotlinruntime.atn.SemanticContext.OR';
    var seed = imul(31, getStringHashCode(fqn)) + getKClass(OR).hashCode() | 0;
    return MurmurHash_instance.p35(this.i35_1, seed);
  }
  m32(parser, parserCallStack) {
    var indexedObject = this.i35_1;
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var operand = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      if (operand.m32(parser, parserCallStack)) {
        return true;
      }
    }
    return false;
  }
  f32(parser, parserCallStack) {
    var differs = false;
    var operands = ArrayList.b2();
    var indexedObject = this.i35_1;
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var context = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      var evaluated = context.f32(parser, parserCallStack);
      differs = !!(differs | !(evaluated === context));
      if (evaluated === Empty_getInstance()) {
        return Empty_getInstance();
      } else if (!(evaluated == null)) {
        operands.g2(evaluated);
      }
    }
    if (!differs) {
      return this;
    }
    if (operands.b1()) {
      return null;
    }
    var result = operands.k2(0);
    var inductionVariable_0 = 1;
    var last_0 = operands.i2();
    if (inductionVariable_0 < last_0)
      do {
        var i = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        result = Companion_instance_19.g32(result, operands.k2(i));
      }
       while (inductionVariable_0 < last_0);
    return result;
  }
  toString() {
    return joinToString(this.i35_1, '||');
  }
}
class Companion_20 {
  y2w(parent, returnState) {
    var tmp;
    if (returnState === 2147483647 && parent == null) {
      tmp = EmptyPredictionContext_getInstance();
    } else {
      tmp = SingletonPredictionContext.m2w(parent, returnState);
    }
    return tmp;
  }
}
class StarBlockStartState extends BlockStartState {
  constructor() {
    super();
    this.a36_1 = 5;
  }
  z2c() {
    return this.a36_1;
  }
}
class StarLoopEntryState extends DecisionState {
  constructor() {
    super();
    this.e2s_1 = null;
    this.f2s_1 = false;
    this.g2s_1 = 10;
  }
  z2c() {
    return this.g2s_1;
  }
}
class StarLoopbackState extends ATNState {
  constructor() {
    super();
    this.i36_1 = 9;
  }
  z2c() {
    return this.i36_1;
  }
}
class TokensStartState extends DecisionState {
  constructor() {
    super();
    this.s36_1 = 6;
  }
  z2c() {
    return this.s36_1;
  }
}
class Companion_21 {
  constructor() {
    Companion_instance_21 = this;
    this.t36_1 = 1;
    this.u36_1 = 2;
    this.v36_1 = 3;
    this.w36_1 = 4;
    this.x36_1 = 5;
    this.y36_1 = 6;
    this.z36_1 = 7;
    this.a37_1 = 8;
    this.b37_1 = 9;
    this.c37_1 = 10;
    var tmp = this;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.d37_1 = ['INVALID', 'EPSILON', 'RANGE', 'RULE', 'PREDICATE', 'ATOM', 'ACTION', 'SET', 'NOT_SET', 'WILDCARD', 'PRECEDENCE'];
  }
}
class WildcardTransition extends Transition {
  constructor(target) {
    super(target);
    this.g37_1 = 9;
  }
  e2u() {
    return this.g37_1;
  }
  f2u(symbol, minVocabSymbol, maxVocabSymbol) {
    return minVocabSymbol <= symbol ? symbol <= maxVocabSymbol : false;
  }
  toString() {
    return '.';
  }
}
class sam$kotlin_Comparator$0 {
  constructor(function_0) {
    this.h37_1 = function_0;
  }
  zg(a, b) {
    return this.h37_1(a, b);
  }
  compare(a, b) {
    return this.zg(a, b);
  }
  m4() {
    return this.h37_1;
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
class DFA {
  constructor(atnStartState, decision) {
    decision = decision === VOID ? 0 : decision;
    this.u2x_1 = atnStartState;
    this.v2x_1 = decision;
    this.w2x_1 = HashMap.f8();
    this.x2x_1 = null;
    var isPrecedenceDfa = false;
    var tmp = this.u2x_1;
    if (tmp instanceof StarLoopEntryState) {
      if (this.u2x_1.f2s_1) {
        isPrecedenceDfa = true;
        var precedenceState = DFAState.j2t(new ATNConfigSet());
        var tmp_0 = precedenceState;
        // Inline function 'kotlin.arrayOfNulls' call
        tmp_0.d2t_1 = Array(0);
        precedenceState.e2t_1 = false;
        precedenceState.h2t_1 = false;
        this.x2x_1 = precedenceState;
      }
    }
    this.y2x_1 = isPrecedenceDfa;
  }
  x30(precedence) {
    if (!this.y2x_1) {
      throw IllegalStateException.s4('Only precedence DFAs may contain a precedence start state.');
    }
    var edges = ensureNotNull(ensureNotNull(this.x2x_1).d2t_1);
    var tmp;
    if (precedence < 0 || precedence >= edges.length) {
      tmp = null;
    } else {
      tmp = edges[precedence];
    }
    return tmp;
  }
  b31(precedence, startState) {
    if (!this.y2x_1) {
      throw IllegalStateException.s4('Only precedence DFAs may contain a precedence start state.');
    }
    if (precedence < 0) {
      return Unit_instance;
    }
    var s0 = ensureNotNull(this.x2x_1);
    // Inline function 'com.strumenta.antlrkotlin.runtime.synchronized' call
    if (precedence >= ensureNotNull(s0.d2t_1).length) {
      s0.d2t_1 = copyOf(ensureNotNull(s0.d2t_1), precedence + 1 | 0);
    }
    ensureNotNull(s0.d2t_1)[precedence] = startState;
  }
  i37() {
    var result = ArrayList.c2(this.w2x_1.u3());
    // Inline function 'kotlin.collections.sortBy' call
    if (result.i2() > 1) {
      // Inline function 'kotlin.comparisons.compareBy' call
      var tmp = DFA$getStates$lambda;
      var tmp$ret$1 = new sam$kotlin_Comparator$0(tmp);
      sortWith(result, tmp$ret$1);
    }
    return result;
  }
  toString() {
    return this.b2e(Companion_getInstance_5().f2l_1);
  }
  b2e(vocabulary) {
    if (this.x2x_1 == null) {
      return '';
    }
    var serializer = new DFASerializer(this, vocabulary);
    return serializer.toString();
  }
  d2y() {
    if (this.x2x_1 == null) {
      return '';
    }
    var serializer = new LexerDFASerializer(this);
    return serializer.toString();
  }
}
class DFASerializer {
  constructor(dfa, vocabulary) {
    this.j37_1 = dfa;
    this.k37_1 = vocabulary;
  }
  toString() {
    if (this.j37_1.x2x_1 == null) {
      return 'null';
    }
    var buf = StringBuilder.z();
    var states = this.j37_1.i37();
    var _iterator__ex2g4s = states.d1();
    while (_iterator__ex2g4s.e1()) {
      var s = _iterator__ex2g4s.f1();
      var n = 0;
      var edges = s.d2t_1;
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
          if (!(t == null) && !(t.b2t_1 === 2147483647)) {
            buf.a1(this.l37(s));
            buf.a1('-');
            buf.a1(this.m37(i));
            buf.a1('->');
            buf.a1(this.l37(t));
            buf.a1('\n');
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
  m37(i) {
    return this.k37_1.y29(i - 1 | 0);
  }
  l37(s) {
    var n = s.b2t_1;
    var baseStateStr = (s.e2t_1 ? ':' : '') + 's' + n + (s.h2t_1 ? '^' : '');
    var tmp;
    if (s.e2t_1) {
      var predicates = s.i2t_1;
      var tmp_0;
      if (!(predicates == null)) {
        tmp_0 = baseStateStr + '=>' + joinToString(predicates);
      } else {
        tmp_0 = baseStateStr + '=>' + s.f2t_1;
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
    this.k32_1 = pred;
    this.l32_1 = alt;
  }
  toString() {
    return '(' + toString_0(this.k32_1) + ', ' + this.l32_1 + ')';
  }
}
class DFAState {
  static n37() {
    var $this = createThis(this);
    init_org_antlr_v4_kotlinruntime_dfa_DFAState($this);
    return $this;
  }
  static j2t(configs) {
    var $this = createThis(this);
    init_org_antlr_v4_kotlinruntime_dfa_DFAState($this);
    $this.c2t_1 = configs;
    return $this;
  }
  hashCode() {
    var hash = MurmurHash_instance.i2n(7);
    hash = MurmurHash_instance.j2n(hash, this.c2t_1.hashCode());
    hash = MurmurHash_instance.l2n(hash, 1);
    return hash;
  }
  equals(other) {
    if (this === other) {
      return true;
    }
    if (!(other instanceof DFAState)) {
      return false;
    }
    return this.c2t_1.equals(other.c2t_1);
  }
  toString() {
    var buf = StringBuilder.z();
    buf.df(this.b2t_1);
    buf.a1(':');
    buf.g1(this.c2t_1);
    if (this.e2t_1) {
      buf.a1('=>');
      var predicates = this.i2t_1;
      if (!(predicates == null)) {
        buf.a1(joinToString(predicates));
      } else {
        buf.df(this.f2t_1);
      }
    }
    return buf.toString();
  }
}
class LexerDFASerializer extends DFASerializer {
  constructor(dfa) {
    super(dfa, Companion_getInstance_5().f2l_1);
  }
  m37(i) {
    var buf = StringBuilder.z();
    buf.a1("'");
    appendCodePoint(buf, i);
    buf.a1("'");
    return buf.toString();
  }
}
class Companion_22 {
  constructor() {
    this.q37_1 = 16;
    this.r37_1 = 8;
    this.s37_1 = 0.75;
  }
}
class SetIterator {
  constructor($outer, data) {
    this.w37_1 = $outer;
    this.t37_1 = data;
    this.u37_1 = 0;
    this.v37_1 = true;
  }
  e1() {
    return this.u37_1 < this.t37_1.length;
  }
  f1() {
    if (!this.e1()) {
      throw NoSuchElementException.c6();
    }
    this.v37_1 = false;
    var _unary__edvuaz = this.u37_1;
    this.u37_1 = _unary__edvuaz + 1 | 0;
    return this.t37_1[_unary__edvuaz];
  }
  y5() {
    if (this.v37_1) {
      throw IllegalStateException.fc();
    }
    this.w37_1.l2o(this.t37_1[this.u37_1 - 1 | 0]);
    this.v37_1 = true;
  }
}
class DoubleKeyMap {
  constructor() {
    this.y33_1 = LinkedHashMap.tb();
  }
  b34(k1, k2, v) {
    var data2 = this.y33_1.y3(k1);
    var prev = null;
    if (data2 == null) {
      data2 = LinkedHashMap.tb();
      var tmp0 = this.y33_1;
      // Inline function 'kotlin.collections.set' call
      var value = data2;
      tmp0.s3(k1, value);
    } else {
      prev = data2.y3(k2);
    }
    // Inline function 'kotlin.collections.set' call
    data2.s3(k2, v);
    return prev;
  }
  z33(k1, k2) {
    var tmp0_elvis_lhs = this.y33_1.y3(k1);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return null;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var data2 = tmp;
    return data2.y3(k2);
  }
}
class Companion_23 {
  constructor() {
    this.x37_1 = 16;
    this.y37_1 = 8;
    this.z37_1 = 0.75;
  }
}
class Entry {
  constructor(key, value) {
    this.a38_1 = key;
    this.b38_1 = value;
  }
  toString() {
    return toString_1(this.a38_1) + ':' + toString_1(this.b38_1);
  }
  hashCode() {
    var result = this.a38_1 == null ? 0 : hashCode(this.a38_1);
    result = imul(result, 31) + (this.b38_1 == null ? 0 : hashCode(this.b38_1)) | 0;
    return result;
  }
  equals(other) {
    if (this === other)
      return true;
    if (!(other instanceof Entry))
      return false;
    var tmp0_other_with_cast = other instanceof Entry ? other : THROW_CCE();
    if (!equals(this.a38_1, tmp0_other_with_cast.a38_1))
      return false;
    if (!equals(this.b38_1, tmp0_other_with_cast.b38_1))
      return false;
    return true;
  }
}
class Companion_24 {
  constructor() {
    Companion_instance_24 = this;
    this.c38_1 = new Int32Array(0);
    this.d38_1 = 4;
    this.e38_1 = 2147483639;
  }
}
class IntegerList {
  r2h() {
    return this.f2h_1 === 0;
  }
  static f38() {
    Companion_getInstance_24();
    var $this = createThis(this);
    init_org_antlr_v4_kotlinruntime_misc_IntegerList($this);
    $this.e2h_1 = Companion_getInstance_24().c38_1;
    return $this;
  }
  z2b(value) {
    if (this.e2h_1.length === this.f2h_1) {
      ensureCapacity(this, this.f2h_1 + 1 | 0);
    }
    this.e2h_1[this.f2h_1] = value;
    this.f2h_1 = this.f2h_1 + 1 | 0;
  }
  k2(index) {
    if (index < 0 || index >= this.f2h_1) {
      throw IndexOutOfBoundsException.qc();
    }
    return this.e2h_1[index];
  }
  e4(index) {
    var value = this.k2(index);
    var inductionVariable = 0;
    var last = (this.f2h_1 - index | 0) - 1 | 0;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        this.e2h_1[index + i | 0] = this.e2h_1[(index + i | 0) + 1 | 0];
      }
       while (inductionVariable < last);
    this.e2h_1[this.f2h_1 - 1 | 0] = 0;
    this.f2h_1 = this.f2h_1 - 1 | 0;
    return value;
  }
  b28() {
    return this.f2h_1;
  }
  b4() {
    fill(this.e2h_1, 0);
    this.f2h_1 = 0;
  }
  t7() {
    var tmp;
    if (this.f2h_1 === 0) {
      tmp = Companion_getInstance_24().c38_1;
    } else {
      // Inline function 'kotlin.collections.copyOf' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp = this.e2h_1.slice();
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
      tmp = !(this.f2h_1 === other.f2h_1);
    }
    if (tmp) {
      return false;
    }
    var inductionVariable = 0;
    var last = this.f2h_1;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (!(this.e2h_1[i] === other.e2h_1[i])) {
          return false;
        }
      }
       while (inductionVariable < last);
    return true;
  }
  hashCode() {
    var hashCode = 1;
    var inductionVariable = 0;
    var last = this.f2h_1;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        hashCode = imul(31, hashCode) + this.e2h_1[i] | 0;
      }
       while (inductionVariable < last);
    return hashCode;
  }
  toString() {
    return joinToString_0(this.t7());
  }
}
class IntegerStack extends IntegerList {
  static p2g() {
    var $this = this.f38();
    init_org_antlr_v4_kotlinruntime_misc_IntegerStack($this);
    return $this;
  }
  p2h(value) {
    return this.z2b(value);
  }
  t2h() {
    return this.e4(this.b28() - 1 | 0);
  }
  s2h() {
    return this.k2(this.b28() - 1 | 0);
  }
}
class Companion_25 {
  constructor() {
    Companion_instance_25 = this;
    this.v28_1 = 1000;
    this.w28_1 = new Interval(-1, -2);
    var tmp = this;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp.x28_1 = Array(1001);
  }
  y28(a, b) {
    if (!(a === b) || a < 0 || a > 1000) {
      return new Interval(a, b);
    }
    var interval = this.x28_1[a];
    if (interval == null) {
      interval = new Interval(a, a);
      this.x28_1[a] = interval;
    }
    return interval;
  }
}
class Interval {
  constructor(a, b) {
    Companion_getInstance_25();
    this.r28_1 = a;
    this.s28_1 = b;
  }
  g38(other) {
    return this.r28_1 < other.r28_1 && this.s28_1 < other.r28_1;
  }
  h38(other) {
    return this.r28_1 > other.s28_1;
  }
  i38(other) {
    return this.g38(other) || this.h38(other);
  }
  j38(other) {
    return this.r28_1 === (other.s28_1 + 1 | 0) || this.s28_1 === (other.r28_1 - 1 | 0);
  }
  k38(other) {
    var tmp = Companion_getInstance_25();
    var tmp0 = this.r28_1;
    // Inline function 'kotlin.math.min' call
    var b = other.r28_1;
    var tmp_0 = Math.min(tmp0, b);
    var tmp0_0 = this.s28_1;
    // Inline function 'kotlin.math.max' call
    var b_0 = other.s28_1;
    var tmp$ret$1 = Math.max(tmp0_0, b_0);
    return tmp.y28(tmp_0, tmp$ret$1);
  }
  equals(other) {
    var tmp;
    var tmp_0;
    if (other instanceof Interval) {
      tmp_0 = this.r28_1 === other.r28_1;
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = this.s28_1 === other.s28_1;
    } else {
      tmp = false;
    }
    return tmp;
  }
  hashCode() {
    var hash = 23;
    hash = imul(hash, 31) + this.r28_1 | 0;
    hash = imul(hash, 31) + this.s28_1 | 0;
    return hash;
  }
  toString() {
    return '' + this.r28_1 + '..' + this.s28_1;
  }
}
class Companion_26 {
  constructor() {
    Companion_instance_26 = this;
    var tmp = this;
    // Inline function 'kotlin.also' call
    var this_0 = this.y28(0, 1114111);
    this_0.g2m(true);
    tmp.k2v_1 = this_0;
    var tmp_0 = this;
    // Inline function 'kotlin.also' call
    var this_1 = IntervalSet.y2b();
    this_1.g2m(true);
    tmp_0.l2v_1 = this_1;
  }
  m2v(a) {
    var s = IntervalSet.y2b();
    s.z2b(a);
    return s;
  }
  y28(a, b) {
    var s = IntervalSet.y2b();
    s.a2q(a, b);
    return s;
  }
  l38(left, right) {
    if (left.v2e()) {
      return IntervalSet.y2b();
    }
    var result = IntervalSet.m38(left);
    if (right.v2e()) {
      return result;
    }
    var resultI = 0;
    var rightI = 0;
    $l$loop_4: while (resultI < result.w2b_1.i2() && rightI < right.w2b_1.i2()) {
      var resultInterval = result.w2b_1.k2(resultI);
      var rightInterval = right.w2b_1.k2(rightI);
      if (rightInterval.s28_1 < resultInterval.r28_1) {
        rightI = rightI + 1 | 0;
        continue $l$loop_4;
      }
      if (rightInterval.r28_1 > resultInterval.s28_1) {
        resultI = resultI + 1 | 0;
        continue $l$loop_4;
      }
      var beforeCurrent = null;
      var afterCurrent = null;
      if (rightInterval.r28_1 > resultInterval.r28_1) {
        beforeCurrent = new Interval(resultInterval.r28_1, rightInterval.r28_1 - 1 | 0);
      }
      if (rightInterval.s28_1 < resultInterval.s28_1) {
        afterCurrent = new Interval(rightInterval.s28_1 + 1 | 0, resultInterval.s28_1);
      }
      if (!(beforeCurrent == null)) {
        if (!(afterCurrent == null)) {
          result.w2b_1.c4(resultI, beforeCurrent);
          result.w2b_1.d4(resultI + 1 | 0, afterCurrent);
          resultI = resultI + 1 | 0;
          rightI = rightI + 1 | 0;
          continue $l$loop_4;
        } else {
          result.w2b_1.c4(resultI, beforeCurrent);
          resultI = resultI + 1 | 0;
          continue $l$loop_4;
        }
      } else {
        if (!(afterCurrent == null)) {
          result.w2b_1.c4(resultI, afterCurrent);
          rightI = rightI + 1 | 0;
          continue $l$loop_4;
        } else {
          result.w2b_1.e4(resultI);
          continue $l$loop_4;
        }
      }
    }
    return result;
  }
}
class IntervalSet {
  v2e() {
    return this.w2b_1.i2() === 0;
  }
  u2e() {
    if (this.v2e()) {
      throw RuntimeException.ia('set is empty');
    }
    return this.w2b_1.k2(0).r28_1;
  }
  g2m(value) {
    if (this.x2b_1 && !value) {
      throw IllegalStateException.s4("can't alter readonly IntervalSet");
    }
    this.x2b_1 = value;
  }
  static y2b() {
    Companion_getInstance_26();
    var $this = createThis(this);
    init_org_antlr_v4_kotlinruntime_misc_IntervalSet($this);
    $this.w2b_1 = ArrayList.f2(16);
    return $this;
  }
  static m38(set) {
    Companion_getInstance_26();
    var $this = createThis(this);
    init_org_antlr_v4_kotlinruntime_misc_IntervalSet($this);
    $this.w2b_1 = ArrayList.f2(set.w2b_1.i2());
    $this.g2f(set);
    return $this;
  }
  z2b(el) {
    return this.a2q(el, el);
  }
  a2q(a, b) {
    return add(this, Companion_getInstance_25().y28(a, b));
  }
  g2f(set) {
    if (set instanceof IntervalSet) {
      var setIntervals = set.w2b_1;
      var inductionVariable = 0;
      var last = setIntervals.i2();
      if (inductionVariable < last)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var I = setIntervals.k2(i);
          this.a2q(I.r28_1, I.s28_1);
        }
         while (inductionVariable < last);
    } else {
      var _iterator__ex2g4s = set.n38().d1();
      while (_iterator__ex2g4s.e1()) {
        var value = _iterator__ex2g4s.f1();
        this.z2b(value);
      }
    }
    return this;
  }
  x2w(elements) {
    if (elements.v2e()) {
      return IntervalSet.y2b();
    }
    var tmp;
    if (elements instanceof IntervalSet) {
      tmp = elements;
    } else {
      var temp = IntervalSet.y2b();
      temp.g2f(elements);
      tmp = temp;
    }
    var vocabularyIS = tmp;
    return vocabularyIS.o38(this);
  }
  o38(a) {
    if (a.v2e()) {
      return IntervalSet.m38(this);
    }
    if (a instanceof IntervalSet) {
      return Companion_getInstance_26().l38(this, a);
    }
    var other = IntervalSet.y2b();
    other.g2f(a);
    return Companion_getInstance_26().l38(this, other);
  }
  n2d(a) {
    var o = IntervalSet.y2b();
    o.g2f(this);
    o.g2f(a);
    return o;
  }
  yk(el) {
    var n = this.w2b_1.i2();
    var l = 0;
    var r = n - 1 | 0;
    while (l <= r) {
      var m = (l + r | 0) / 2 | 0;
      var I = this.w2b_1.k2(m);
      var a = I.r28_1;
      var b = I.s28_1;
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
    var hash = MurmurHash_instance.d2z();
    var _iterator__ex2g4s = this.w2b_1.d1();
    while (_iterator__ex2g4s.e1()) {
      var I = _iterator__ex2g4s.f1();
      hash = MurmurHash_instance.j2n(hash, I.r28_1);
      hash = MurmurHash_instance.j2n(hash, I.s28_1);
    }
    hash = MurmurHash_instance.l2n(hash, imul(this.w2b_1.i2(), 2));
    return hash;
  }
  equals(other) {
    var tmp;
    if (other instanceof IntervalSet) {
      tmp = equals(this.w2b_1, other.w2b_1);
    } else {
      tmp = false;
    }
    return tmp;
  }
  toString() {
    return this.p38(false);
  }
  p38(elemAreChar) {
    if (this.w2b_1.b1()) {
      return '{}';
    }
    var buf = StringBuilder.lb(64);
    if (this.b28() > 1) {
      buf.a1('{');
    }
    var n = this.w2b_1.i2();
    var index = 0;
    while (index < n) {
      var _unary__edvuaz = index;
      index = _unary__edvuaz + 1 | 0;
      var I = this.w2b_1.k2(_unary__edvuaz);
      var a = I.r28_1;
      var b = I.s28_1;
      if (a === b) {
        if (a === -1) {
          buf.a1('<EOF>');
        } else if (elemAreChar) {
          buf.a1("'");
          appendCodePoint(buf, a);
          buf.a1("'");
        } else {
          buf.df(a);
        }
      } else {
        if (elemAreChar) {
          buf.a1("'");
          appendCodePoint(buf, a);
          buf.a1("'..'");
          appendCodePoint(buf, b);
          buf.a1("'");
        } else {
          buf.df(a);
          buf.a1('..');
          buf.df(b);
        }
      }
      if (index < n) {
        buf.a1(', ');
      }
    }
    if (this.b28() > 1) {
      buf.a1('}');
    }
    return buf.toString();
  }
  b2e(vocabulary) {
    if (this.w2b_1.b1()) {
      return '{}';
    }
    var buf = StringBuilder.lb(64);
    if (this.b28() > 1) {
      buf.a1('{');
    }
    var n = this.w2b_1.i2();
    var index = 0;
    while (index < n) {
      var _unary__edvuaz = index;
      index = _unary__edvuaz + 1 | 0;
      var I = this.w2b_1.k2(_unary__edvuaz);
      var a = I.r28_1;
      var b = I.s28_1;
      if (a === b) {
        buf.a1(elementName(this, vocabulary, a));
      } else {
        var inductionVariable = a;
        if (inductionVariable <= b)
          do {
            var p = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            if (p > a) {
              buf.a1(', ');
            }
            buf.a1(elementName(this, vocabulary, p));
          }
           while (!(p === b));
      }
      if (index < n) {
        buf.a1(', ');
      }
    }
    if (this.b28() > 1) {
      buf.a1('}');
    }
    return buf.toString();
  }
  b28() {
    var numIntervals = this.w2b_1.i2();
    if (numIntervals === 1) {
      var firstInterval = this.w2b_1.k2(0);
      return (firstInterval.s28_1 - firstInterval.r28_1 | 0) + 1 | 0;
    }
    var n = 0;
    var inductionVariable = 0;
    if (inductionVariable < numIntervals)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var I = this.w2b_1.k2(i);
        n = n + ((I.s28_1 - I.r28_1 | 0) + 1 | 0) | 0;
      }
       while (inductionVariable < numIntervals);
    return n;
  }
  n38() {
    var values = ArrayList.f2(32);
    var n = this.w2b_1.i2();
    var inductionVariable = 0;
    if (inductionVariable < n)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var I = this.w2b_1.k2(i);
        var a = I.r28_1;
        var b = I.s28_1;
        var inductionVariable_0 = a;
        if (inductionVariable_0 <= b)
          do {
            var v = inductionVariable_0;
            inductionVariable_0 = inductionVariable_0 + 1 | 0;
            values.g2(v);
          }
           while (!(v === b));
      }
       while (inductionVariable < n);
    return values;
  }
  i2f(el) {
    if (this.x2b_1) {
      throw IllegalStateException.s4("can't alter readonly IntervalSet");
    }
    var n = this.w2b_1.i2();
    var inductionVariable = 0;
    if (inductionVariable < n)
      $l$loop_2: do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var I = this.w2b_1.k2(i);
        var a = I.r28_1;
        var b = I.s28_1;
        if (el < a) {
          break $l$loop_2;
        }
        if (el === a && el === b) {
          this.w2b_1.e4(i);
          break $l$loop_2;
        }
        if (el === a) {
          I.r28_1 = I.r28_1 + 1 | 0;
          break $l$loop_2;
        }
        if (el === b) {
          I.s28_1 = I.s28_1 - 1 | 0;
          break $l$loop_2;
        }
        if (el < b) {
          var oldB = I.s28_1;
          I.s28_1 = el - 1 | 0;
          this.a2q(el + 1 | 0, oldB);
        }
      }
       while (inductionVariable < n);
  }
}
class MurmurHash {
  constructor() {
    this.h2n_1 = 0;
  }
  i2n(seed) {
    return seed;
  }
  d2z(seed, $super) {
    seed = seed === VOID ? 0 : seed;
    return $super === VOID ? this.i2n(seed) : $super.i2n.call(this, seed);
  }
  j2n(hash, value) {
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
  k2n(hash, value) {
    var tmp1_elvis_lhs = value == null ? null : hashCode(value);
    return this.j2n(hash, tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs);
  }
  l2n(hash, numberOfWords) {
    var tempHash = hash;
    tempHash = tempHash ^ imul(numberOfWords, 4);
    tempHash = tempHash ^ (tempHash >>> 16 | 0);
    tempHash = imul(tempHash, -2048144789);
    tempHash = tempHash ^ (tempHash >>> 13 | 0);
    tempHash = imul(tempHash, -1028477387);
    tempHash = tempHash ^ (tempHash >>> 16 | 0);
    return tempHash;
  }
  p35(data, seed) {
    var hash = this.i2n(seed);
    var inductionVariable = 0;
    var last = data.length;
    while (inductionVariable < last) {
      var value = data[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      hash = this.k2n(hash, value);
    }
    hash = this.l2n(hash, data.length);
    return hash;
  }
}
class Companion_27 {
  constructor() {
    Companion_instance_27 = this;
    this.l2x_1 = new ObjectEqualityComparator();
  }
}
class ObjectEqualityComparator extends AbstractEqualityComparator {
  constructor() {
    Companion_getInstance_27();
    super();
  }
  p2o(obj) {
    var tmp1_elvis_lhs = obj == null ? null : hashCode(obj);
    return tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
  }
  r2o(a, b) {
    return a == null && b == null || equals(a, b);
  }
}
class Utils {
  q2i(s, escapeSpaces) {
    var buf = StringBuilder.z();
    var indexedObject = toCharArray(s);
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var c = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      if (c === _Char___init__impl__6a9atx(32) && escapeSpaces)
        buf.a1('\xB7');
      else if (c === _Char___init__impl__6a9atx(9))
        buf.a1('\\t');
      else if (c === _Char___init__impl__6a9atx(10))
        buf.a1('\\n');
      else if (c === _Char___init__impl__6a9atx(13))
        buf.a1('\\r');
      else
        buf.c1(c);
    }
    return buf.toString();
  }
}
class TerminalNode {}
class ErrorNode {}
class TerminalNodeImpl {
  constructor(symbol) {
    this.q38_1 = symbol;
    this.r38_1 = null;
    this.s38_1 = 0;
  }
  x2k() {
    return this.q38_1;
  }
  n2k() {
    return this.s38_1;
  }
  m1f() {
    return ensureNotNull(this.x2k().m1f());
  }
  s2k(value) {
    this.r38_1 = value;
  }
  u2k(i) {
    return null;
  }
  toString() {
    var tmp;
    if (this.x2k().g1s() === -1) {
      tmp = '<EOF>';
    } else {
      tmp = ensureNotNull(this.x2k().m1f());
    }
    return tmp;
  }
}
class ErrorNodeImpl extends TerminalNodeImpl {}
class Companion_28 {
  constructor() {
    Companion_instance_28 = this;
    this.t38_1 = new ParseTreeWalker();
  }
}
class ParseTreeWalker {
  constructor() {
    Companion_getInstance_28();
  }
  u38(listener, t) {
    if (isInterface(t, ErrorNode)) {
      listener.a2k(t);
      return Unit_instance;
    } else {
      if (isInterface(t, TerminalNode)) {
        listener.z2j(t);
        return Unit_instance;
      }
    }
    var r = isInterface(t, RuleNode) ? t : THROW_CCE();
    this.v38(listener, r);
    var n = r.n2k();
    var inductionVariable = 0;
    if (inductionVariable < n)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        this.u38(listener, ensureNotNull(r.u2k(i)));
      }
       while (inductionVariable < n);
    this.w38(listener, r);
  }
  v38(listener, r) {
    var tmp = r.o2k();
    var ctx = tmp instanceof ParserRuleContext ? tmp : THROW_CCE();
    listener.s2j(ctx);
    ctx.t2j(listener);
  }
  w38(listener, r) {
    var tmp = r.o2k();
    var ctx = tmp instanceof ParserRuleContext ? tmp : THROW_CCE();
    ctx.v2j(listener);
    listener.w2j(ctx);
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
  static x38(size) {
    var $this = createThis(this);
    var tmp = $this;
    // Inline function 'com.strumenta.antlrkotlin.runtime.newArray' call
    tmp.c2p_1 = Array(size);
    // Inline function 'kotlin.require' call
    if (!(size >= 0)) {
      var message = 'The initial bitset size must be equal or greater than 0';
      throw IllegalArgumentException.t1(toString_0(message));
    }
    return $this;
  }
  static d2p() {
    return this.x38(64);
  }
  e2p(bitIndex) {
    if (bitIndex < 0) {
      throw IndexOutOfBoundsException.rc('bitIndex < 0: ' + bitIndex);
    }
    this.c2p_1[bitIndex] = true;
  }
  w2w(bitIndex) {
    if (bitIndex < 0) {
      throw IndexOutOfBoundsException.rc('bitIndex < 0: ' + bitIndex);
    }
    delete(this.c2p_1[bitIndex]);
  }
  k2(bitIndex) {
    if (bitIndex < 0) {
      throw IndexOutOfBoundsException.rc('bitIndex < 0: ' + bitIndex);
    }
    if (bitIndex >= this.c2p_1.length) {
      return false;
    }
    return this.c2p_1[bitIndex] === true;
  }
  i31() {
    var c = 0;
    var inductionVariable = 0;
    var last = this.c2p_1.length - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (this.c2p_1[i] === true) {
          c = c + 1 | 0;
        }
      }
       while (inductionVariable <= last);
    return c;
  }
  h31(startIndex) {
    if (startIndex < 0) {
      throw IndexOutOfBoundsException.rc('fromIndex < 0: ' + startIndex);
    }
    if (startIndex >= this.c2p_1.length) {
      return -1;
    }
    var inductionVariable = startIndex;
    var last = this.c2p_1.length;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (this.c2p_1[i] === true) {
          return i;
        }
      }
       while (inductionVariable < last);
    return -1;
  }
  r34(another) {
    var inductionVariable = 0;
    var last = another.c2p_1.length;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var result = this.c2p_1[i] === true || another.c2p_1[i] === true;
        if (result) {
          this.c2p_1[i] = true;
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
        tmp_0 = contentEquals_1(this, this.c2p_1, other.c2p_1);
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    }
    return tmp;
  }
  hashCode() {
    var fqn = 'com.strumenta.antlrkotlin.runtime.BitSet';
    var hashCode = MurmurHash_instance.i2n(getStringHashCode(fqn));
    var on = 0;
    var inductionVariable = 0;
    var last = this.c2p_1.length - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (this.c2p_1[i] === true) {
          hashCode = MurmurHash_instance.j2n(hashCode, i);
          on = on + 1 | 0;
        }
      }
       while (inductionVariable <= last);
    return MurmurHash_instance.l2n(hashCode, on);
  }
  toString() {
    var sb = StringBuilder.z();
    var first = true;
    sb.a1('{');
    var index = this.h31(0);
    while (!(index === -1)) {
      if (!first) {
        sb.a1(', ');
      } else {
        first = false;
      }
      sb.df(index);
      index = this.h31(index + 1 | 0);
    }
    sb.a1('}');
    return sb.toString();
  }
}
class IdentityEntry {
  constructor($outer, key, value) {
    this.b39_1 = $outer;
    this.z38_1 = key;
    this.a39_1 = value;
  }
  q3() {
    return this.z38_1;
  }
  r3() {
    return this.a39_1;
  }
}
class IdentityEntriesView$iterator$1 {
  constructor($iterator, this$0) {
    this.d39_1 = $iterator;
    this.e39_1 = this$0;
    this.c39_1 = null;
  }
  e1() {
    return this.d39_1.e1();
  }
  f1() {
    var _destruct__k2r9zo = this.d39_1.f1();
    var key = component1(_destruct__k2r9zo);
    var value = component2(_destruct__k2r9zo);
    var entry = new IdentityEntry(this.e39_1, key, value);
    this.c39_1 = entry;
    return entry;
  }
  y5() {
    // Inline function 'kotlin.checkNotNull' call
    var tmp0 = this.c39_1;
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.checkNotNull' call
      if (tmp0 == null) {
        var message = 'Required value was null.';
        throw IllegalStateException.s4(toString_0(message));
      } else {
        tmp$ret$1 = tmp0;
        break $l$block;
      }
    }
    var lastEntry = tmp$ret$1;
    remove(this.e39_1, lastEntry.z38_1, lastEntry.a39_1);
  }
}
class IdentityEntriesView extends AbstractMutableSet {
  static f39(jsMap) {
    var $this = this.o7();
    $this.y38_1 = jsMap;
    return $this;
  }
  i2() {
    return this.y38_1.size;
  }
  b1() {
    return this.y38_1.size === 0;
  }
  g39(element) {
    throw UnsupportedOperationException.s9('Adding is not supported on entries');
  }
  g2(element) {
    return this.g39((!(element == null) ? isInterface(element, MutableEntry) : false) ? element : THROW_CCE());
  }
  h39(element) {
    // Inline function 'com.strumenta.antlrkotlin.runtime.undefinedToNull' call
    var value = element.q3();
    var k = value === undefined ? null : value;
    return this.y38_1.has(k) && this.y38_1.get(k) === element.r3();
  }
  n2(element) {
    if (!(!(element == null) ? isInterface(element, MutableEntry) : false))
      return false;
    return this.h39((!(element == null) ? isInterface(element, MutableEntry) : false) ? element : THROW_CCE());
  }
  d1() {
    var iterator_0 = toKotlinIterator(iterator(this.y38_1));
    return new IdentityEntriesView$iterator$1(iterator_0, this);
  }
}
class IdentityHashMap {
  constructor() {
    this.i39_1 = new Map();
  }
  i2() {
    return this.i39_1.size;
  }
  u3() {
    return IdentityKeysView.k39(this);
  }
  v3() {
    return IdentityValuesView.m39(this);
  }
  t2() {
    return IdentityEntriesView.f39(this.i39_1);
  }
  b1() {
    return this.i39_1.size === 0;
  }
  y3(key) {
    // Inline function 'com.strumenta.antlrkotlin.runtime.undefinedToNull' call
    var k = key === undefined ? null : key;
    // Inline function 'com.strumenta.antlrkotlin.runtime.undefinedToNull' call
    var value = this.i39_1.get(k);
    return value === undefined ? null : value;
  }
  s3(key, value) {
    // Inline function 'com.strumenta.antlrkotlin.runtime.undefinedToNull' call
    var k = key === undefined ? null : key;
    var previousValue = this.i39_1.get(k);
    this.i39_1.set(k, value);
    // Inline function 'com.strumenta.antlrkotlin.runtime.undefinedToNull' call
    return previousValue === undefined ? null : previousValue;
  }
  t3(key) {
    // Inline function 'com.strumenta.antlrkotlin.runtime.undefinedToNull' call
    var k = key === undefined ? null : key;
    var removedValue = this.i39_1.get(k);
    this.i39_1.delete(k);
    // Inline function 'com.strumenta.antlrkotlin.runtime.undefinedToNull' call
    return removedValue === undefined ? null : removedValue;
  }
  w3(key) {
    // Inline function 'com.strumenta.antlrkotlin.runtime.undefinedToNull' call
    var k = key === undefined ? null : key;
    return this.i39_1.has(k);
  }
  x3(value) {
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s = toKotlinIterator(this.i39_1.values());
    while (_iterator__ex2g4s.e1()) {
      var v = _iterator__ex2g4s.f1();
      if (v === value) {
        return true;
      }
    }
    return false;
  }
}
class IdentityKeysView$iterator$1 {
  constructor($entriesIterator) {
    this.n39_1 = $entriesIterator;
  }
  e1() {
    return this.n39_1.e1();
  }
  f1() {
    return this.n39_1.f1().q3();
  }
  y5() {
    return this.n39_1.y5();
  }
}
class IdentityKeysView extends AbstractMutableSet {
  static k39(map) {
    var $this = this.o7();
    $this.j39_1 = map;
    return $this;
  }
  i2() {
    return this.j39_1.i2();
  }
  b1() {
    return this.j39_1.b1();
  }
  w8(element) {
    return this.j39_1.w3(element);
  }
  n2(element) {
    if (!true)
      return false;
    return this.w8(element);
  }
  r9(element) {
    throw UnsupportedOperationException.s9('Adding is not supported on keys');
  }
  g2(element) {
    return this.r9(element);
  }
  d1() {
    var entriesIterator = this.j39_1.t2().d1();
    return new IdentityKeysView$iterator$1(entriesIterator);
  }
}
class IdentityValuesView$iterator$1 {
  constructor($entriesIterator) {
    this.o39_1 = $entriesIterator;
  }
  e1() {
    return this.o39_1.e1();
  }
  f1() {
    return this.o39_1.f1().r3();
  }
  y5() {
    return this.o39_1.y5();
  }
}
class IdentityValuesView extends AbstractMutableCollection {
  static m39(map) {
    var $this = this.v5();
    $this.l39_1 = map;
    return $this;
  }
  i2() {
    return this.l39_1.i2();
  }
  b1() {
    return this.l39_1.b1();
  }
  g9(element) {
    throw UnsupportedOperationException.s9('Adding is not supported on values');
  }
  g2(element) {
    return this.g9(element);
  }
  f9(element) {
    return this.l39_1.x3(element);
  }
  n2(element) {
    if (!true)
      return false;
    return this.f9(element);
  }
  d1() {
    var entriesIterator = this.l39_1.t2().d1();
    return new IdentityValuesView$iterator$1(entriesIterator);
  }
}
class KotlinIterator {
  constructor(jsIterator) {
    this.p39_1 = jsIterator;
    this.q39_1 = null;
  }
  e1() {
    if (this.q39_1 == null) {
      this.q39_1 = this.p39_1.next();
    }
    var tmp0_safe_receiver = this.q39_1;
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.done;
    var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : !tmp1_safe_receiver;
    return tmp2_elvis_lhs == null ? false : tmp2_elvis_lhs;
  }
  f1() {
    var tmp0_elvis_lhs = this.q39_1;
    var value = tmp0_elvis_lhs == null ? this.p39_1.next() : tmp0_elvis_lhs;
    this.q39_1 = null;
    if (value.done) {
      throw NoSuchElementException.c6();
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
    _this__u8e3s4.c1(numberToChar(codePoint));
  } else if (isValidCodePoint(codePoint)) {
    _this__u8e3s4.c1(highSurrogate(codePoint));
    _this__u8e3s4.c1(lowSurrogate(codePoint));
  } else {
    throw IllegalArgumentException.t1('Not a valid Unicode code point: ' + toHex(codePoint));
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
    this_0.jm_1 = true;
    // Inline function 'kotlin.text.Builder.number' call
    var $this$number = this_0.mm();
    $this$number.xl('0x');
    $this$number.ul_1 = true;
    hexFormat = this_0.yl();
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
  _this__u8e3s4.b29_1 = null;
  _this__u8e3s4.c29_1 = 0;
  _this__u8e3s4.d29_1 = 0;
  _this__u8e3s4.e29_1 = -1;
  _this__u8e3s4.f29_1 = 0;
  _this__u8e3s4.g29_1 = -1;
  _this__u8e3s4.h29_1 = 0;
  _this__u8e3s4.i29_1 = 0;
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
  captureStack(_this__u8e3s4, _this__u8e3s4.j2d_1);
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
  _this__u8e3s4.m2j_1 = null;
  _this__u8e3s4.n2j_1 = null;
  _this__u8e3s4.o2j_1 = null;
  _this__u8e3s4.p2j_1 = null;
}
var Companion_instance_4;
function Companion_getInstance_4() {
  if (Companion_instance_4 === VOID)
    new Companion_4();
  return Companion_instance_4;
}
function init_org_antlr_v4_kotlinruntime_RuleContext(_this__u8e3s4) {
  _this__u8e3s4.d2e_1 = null;
  _this__u8e3s4.e2e_1 = -1;
  _this__u8e3s4.f2e_1 = Companion_getInstance_25().w28_1;
  _this__u8e3s4.g2e_1 = -1;
  _this__u8e3s4.h2e_1 = 0;
}
var RuntimeMetaData_instance;
function RuntimeMetaData_getInstance() {
  return RuntimeMetaData_instance;
}
function codePoint($this, index) {
  if (!(0 <= index ? index < $this.n2l_1 : false)) {
    return -1;
  }
  var char = charCodeAt($this.k2l_1, $this.m2l_1[index]);
  if (isHighSurrogate(char)) {
    var containsUpper = $this.n2l_1;
    var containsArg = index + 1 | 0;
    if (0 <= containsArg ? containsArg < containsUpper : false) {
      var low = charCodeAt($this.k2l_1, $this.m2l_1[index] + 1 | 0);
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
  _this__u8e3s4.w2m_1 = null;
  _this__u8e3s4.x2m_1 = 0;
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
  _this__u8e3s4.r2p_1 = false;
  _this__u8e3s4.s2p_1 = false;
  _this__u8e3s4.t2p_1 = false;
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
      var set = IntervalSet.y2b();
      sets.g2(set);
      var _unary__edvuaz_0 = pp;
      pp = _unary__edvuaz_0 + 1 | 0;
      var containsEof = !(data[_unary__edvuaz_0] === 0);
      if (containsEof) {
        set.z2b(-1);
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
          set.a2q(a, b);
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
    EmptyPredictionContext.l2w();
  return EmptyPredictionContext_instance;
}
var Companion_instance_13;
function Companion_getInstance_13() {
  return Companion_instance_13;
}
function checkNonGreedyDecision($this, source, target) {
  var tmp;
  if (source.e2x_1) {
    tmp = true;
  } else {
    var tmp_0;
    if (target instanceof DecisionState) {
      tmp_0 = target.r2m_1;
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
    tmp = System_getInstance().j27(envName, defaultValue);
  } catch ($p) {
    var tmp_0;
    if ($p instanceof Exception) {
      var e = $p;
      System_getInstance().i27_1.g27(e.toString());
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
  var result = ArrayList.b2();
  var iterator = collection.d1();
  while (iterator.e1()) {
    var context = iterator.f1();
    if (context instanceof PrecedencePredicate) {
      result.g2(context);
      iterator.y5();
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
    Empty.k35();
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
  var tmp = a.b2t_1;
  var tmp$ret$2 = b.b2t_1;
  return compareValues(tmp, tmp$ret$2);
}
function init_org_antlr_v4_kotlinruntime_dfa_DFAState(_this__u8e3s4) {
  _this__u8e3s4.b2t_1 = -1;
  _this__u8e3s4.c2t_1 = new ATNConfigSet();
  _this__u8e3s4.d2t_1 = null;
  _this__u8e3s4.e2t_1 = false;
  _this__u8e3s4.f2t_1 = 0;
  _this__u8e3s4.g2t_1 = null;
  _this__u8e3s4.h2t_1 = false;
  _this__u8e3s4.i2t_1 = null;
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
    throw RuntimeException.ec();
  }
  var tmp;
  // Inline function 'kotlin.collections.isEmpty' call
  if ($this.e2h_1.length === 0) {
    tmp = 4;
  } else {
    tmp = $this.e2h_1.length;
  }
  var newLength = tmp;
  while (newLength < capacity) {
    newLength = imul(newLength, 2);
    if (newLength < 0 || newLength > 2147483639) {
      newLength = 2147483639;
    }
  }
  $this.e2h_1 = copyOf_0($this.e2h_1, newLength);
}
function init_org_antlr_v4_kotlinruntime_misc_IntegerList(_this__u8e3s4) {
  Companion_getInstance_24();
  _this__u8e3s4.f2h_1 = 0;
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
  if ($this.x2b_1) {
    throw IllegalStateException.s4("can't alter readonly IntervalSet");
  }
  if (addition.s28_1 < addition.r28_1) {
    return Unit_instance;
  }
  var iter = $this.w2b_1.f4();
  while (iter.e1()) {
    var r = iter.f1();
    if (addition.equals(r)) {
      return Unit_instance;
    }
    if (addition.j38(r) || !addition.i38(r)) {
      var bigger = addition.k38(r);
      iter.o6(bigger);
      $l$loop: while (iter.e1()) {
        var next = iter.f1();
        if (!bigger.j38(next) && bigger.i38(next)) {
          break $l$loop;
        }
        iter.y5();
        iter.k6();
        iter.o6(bigger.k38(next));
        iter.f1();
      }
      return Unit_instance;
    }
    if (addition.g38(r)) {
      iter.k6();
      iter.m6(addition);
      return Unit_instance;
    }
  }
  $this.w2b_1.g2(addition);
}
function elementName($this, vocabulary, a) {
  switch (a) {
    case -1:
      return '<EOF>';
    case -2:
      return '<EPSILON>';
    default:
      return vocabulary.y29(a);
  }
}
function init_org_antlr_v4_kotlinruntime_misc_IntervalSet(_this__u8e3s4) {
  Companion_getInstance_26();
  _this__u8e3s4.x2b_1 = false;
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
  System_getInstance().h27_1.g27('Environment variables are not supported in the browser');
  return null;
}
function remove($this, key, value) {
  // Inline function 'com.strumenta.antlrkotlin.runtime.undefinedToNull' call
  var k = key === undefined ? null : key;
  if ($this.y38_1.has(k)) {
    if ($this.y38_1.get(k) === value) {
      return $this.y38_1.delete(k);
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
protoOf(CommonToken).z29 = startPoint;
protoOf(CommonToken).a2a = endPoint;
initMetadataForClass(CommonToken, 'CommonToken', VOID, VOID, [WritableToken]);
initMetadataForCompanion(Companion_0);
initMetadataForClass(CommonTokenFactory, 'CommonTokenFactory', CommonTokenFactory);
initMetadataForClass(CommonTokenStream, 'CommonTokenStream');
initMetadataForCompanion(Companion_1);
initMetadataForClass(ConsoleErrorListener, 'ConsoleErrorListener', ConsoleErrorListener);
initMetadataForClass(DefaultErrorStrategy, 'DefaultErrorStrategy', DefaultErrorStrategy);
initMetadataForObject(DummyTokenStream, 'DummyTokenStream');
initMetadataForClass(EmptyStackException, 'EmptyStackException', EmptyStackException.m2f);
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
initMetadataForClass(RuleContext, 'RuleContext', RuleContext.p2k, VOID, [RuleNode]);
initMetadataForClass(ParserRuleContext, 'ParserRuleContext', ParserRuleContext.l2k);
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
initMetadataForClass(ATNDeserializationOptions, 'ATNDeserializationOptions', ATNDeserializationOptions.u2p);
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
initMetadataForClass(Predicate, 'Predicate', Predicate.m35);
initMetadataForClass(PrecedencePredicate, 'PrecedencePredicate', PrecedencePredicate.p33, VOID, [Comparable]);
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
initMetadataForClass(DFAState, 'DFAState', DFAState.n37);
initMetadataForClass(LexerDFASerializer, 'LexerDFASerializer');
initMetadataForCompanion(Companion_22);
initMetadataForClass(SetIterator, 'SetIterator');
initMetadataForClass(DoubleKeyMap, 'DoubleKeyMap', DoubleKeyMap);
initMetadataForCompanion(Companion_23);
initMetadataForClass(Entry, 'Entry');
initMetadataForCompanion(Companion_24);
initMetadataForClass(IntegerList, 'IntegerList', IntegerList.f38);
initMetadataForClass(IntegerStack, 'IntegerStack', IntegerStack.p2g);
initMetadataForCompanion(Companion_25);
initMetadataForClass(Interval, 'Interval');
initMetadataForCompanion(Companion_26);
initMetadataForClass(IntervalSet, 'IntervalSet', IntervalSet.y2b);
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
initMetadataForClass(BitSet, 'BitSet', BitSet.d2p);
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
