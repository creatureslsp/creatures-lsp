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
  a1v(collection) {
    var tmp0_elvis_lhs = minOrNull(collection);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw NoSuchElementException.v5();
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  b1v(collection) {
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
  c1v(message) {
    return println(message);
  }
}
class ErrPrintStream {
  c1v(message) {
    // Inline function 'com.strumenta.antlrkotlin.runtime.platformPrintErrLn' call
    console.error(message);
    return Unit_instance;
  }
}
class System {
  constructor() {
    System_instance = this;
    this.d1v_1 = StdPrintStream_instance;
    this.e1v_1 = ErrPrintStream_instance;
  }
  f1v(name, defaultValue) {
    var tmp0_elvis_lhs = platformGetEnv(name);
    return tmp0_elvis_lhs == null ? defaultValue : tmp0_elvis_lhs;
  }
}
class AbstractCharStreams {
  g1v(str, sourceName) {
    return new StringCharStream(str, sourceName);
  }
  h1v(str, sourceName, $super) {
    sourceName = sourceName === VOID ? '<unknown>' : sourceName;
    return $super === VOID ? this.g1v(str, sourceName) : $super.g1v.call(this, str, sourceName);
  }
}
class BaseErrorListener {
  i1v(recognizer, offendingSymbol, line, charPositionInLine, msg, e) {
  }
  j1v(recognizer, dfa, startIndex, stopIndex, exact, ambigAlts, configs) {
  }
  k1v(recognizer, dfa, startIndex, stopIndex, conflictingAlts, configs) {
  }
  l1v(recognizer, dfa, startIndex, stopIndex, prediction, configs) {
  }
}
class BufferedTokenStream {
  constructor(tokenSource) {
    this.m1v_1 = ArrayList.y1(100);
    this.n1v_1 = -1;
    this.o1v_1 = false;
    this.p1v_1 = tokenSource;
  }
  q1v() {
    return this.p1v_1;
  }
  r1v() {
    return this.n1v_1;
  }
  s1v() {
    return 0;
  }
  t1v(marker) {
  }
  u1v(index) {
    this.v1v();
    this.n1v_1 = this.w1v(index);
  }
  x1v() {
    return this.m1v_1.b2();
  }
  y1v() {
    var tmp;
    if (this.n1v_1 >= 0) {
      var tmp_0;
      if (this.o1v_1) {
        tmp_0 = this.n1v_1 < (this.m1v_1.b2() - 1 | 0);
      } else {
        tmp_0 = this.n1v_1 < this.m1v_1.b2();
      }
      tmp = tmp_0;
    } else {
      tmp = false;
    }
    var skipEofCheck = tmp;
    if (!skipEofCheck && this.z1v(1) === -1) {
      throw IllegalStateException.l4('cannot consume EOF');
    }
    if (this.a1w(this.n1v_1 + 1 | 0)) {
      this.n1v_1 = this.w1v(this.n1v_1 + 1 | 0);
    }
  }
  a1w(i) {
    // Inline function 'com.strumenta.antlrkotlin.runtime.assert' call
    if (!(i >= 0)) {
      throw AssertionError.vc(null);
    }
    var n = (i - this.m1v_1.b2() | 0) + 1 | 0;
    if (n > 0) {
      var fetched = this.b1w(n);
      return fetched >= n;
    }
    return true;
  }
  b1w(n) {
    if (this.o1v_1) {
      return 0;
    }
    var inductionVariable = 0;
    if (inductionVariable < n)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var t = this.q1v().c1w();
        if (isInterface(t, WritableToken)) {
          t.d1w(this.m1v_1.b2());
        }
        this.m1v_1.z1(t);
        if (t.v1r() === -1) {
          this.o1v_1 = true;
          return i + 1 | 0;
        }
      }
       while (inductionVariable < n);
    return n;
  }
  d2(index) {
    if (index < 0 || index >= this.m1v_1.b2()) {
      throw IndexOutOfBoundsException.mc('token index ' + index + ' out of range 0..' + (this.m1v_1.b2() - 1 | 0));
    }
    return this.m1v_1.d2(index);
  }
  z1v(i) {
    return ensureNotNull(this.e1w(i)).v1r();
  }
  f1w(k) {
    var tmp;
    if ((this.n1v_1 - k | 0) < 0) {
      tmp = null;
    } else {
      tmp = this.m1v_1.d2(this.n1v_1 - k | 0);
    }
    return tmp;
  }
  e1w(k) {
    this.v1v();
    if (k === 0) {
      return null;
    }
    if (k < 0) {
      return this.f1w(-k | 0);
    }
    var i = (this.n1v_1 + k | 0) - 1 | 0;
    this.a1w(i);
    var tmp;
    if (i >= this.m1v_1.b2()) {
      tmp = this.m1v_1.d2(this.m1v_1.b2() - 1 | 0);
    } else {
      tmp = this.m1v_1.d2(i);
    }
    return tmp;
  }
  w1v(i) {
    return i;
  }
  v1v() {
    if (this.n1v_1 === -1) {
      this.g1w();
    }
  }
  g1w() {
    this.a1w(0);
    this.n1v_1 = this.w1v(0);
  }
  h1w(start, stop, types) {
    this.v1v();
    if (start < 0 || stop >= this.m1v_1.b2() || stop < 0 || start >= this.m1v_1.b2()) {
      throw IndexOutOfBoundsException.mc('start ' + start + ' or stop ' + stop + ' not in 0..' + (this.m1v_1.b2() - 1 | 0));
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
        var t = this.m1v_1.d2(i);
        if (types == null || types.g2(t.v1r())) {
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
  i1w(start, stop, types, $super) {
    types = types === VOID ? null : types;
    return $super === VOID ? this.h1w(start, stop, types) : $super.h1w.call(this, start, stop, types);
  }
  j1w(i, channel) {
    this.a1w(i);
    if (i >= this.x1v()) {
      return this.x1v() - 1 | 0;
    }
    var token = this.m1v_1.d2(i);
    var ii = i;
    while (!(token.k1w() === channel)) {
      if (token.v1r() === -1) {
        return ii;
      }
      ii = ii + 1 | 0;
      this.a1w(ii);
      token = this.m1v_1.d2(ii);
    }
    return ii;
  }
  l1w(i, channel) {
    this.a1w(i);
    if (i >= this.x1v()) {
      return this.x1v() - 1 | 0;
    }
    var ii = i;
    while (ii >= 0) {
      var token = this.m1v_1.d2(ii);
      if (token.v1r() === -1 || token.k1w() === channel) {
        return ii;
      }
      ii = ii - 1 | 0;
    }
    return ii;
  }
  m1w(interval) {
    var start = interval.n1w_1;
    var stop = interval.o1w_1;
    if (start < 0 || stop < 0) {
      return '';
    }
    this.a1w(stop);
    if (stop >= this.m1v_1.b2()) {
      stop = this.m1v_1.b2() - 1 | 0;
    }
    var buf = StringBuilder.s();
    var inductionVariable = start;
    var last = stop;
    if (inductionVariable <= last)
      $l$loop: do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var t = this.m1v_1.d2(i);
        if (t.v1r() === -1) {
          break $l$loop;
        }
        buf.t(t.j1f());
      }
       while (!(i === last));
    return buf.toString();
  }
  p1w(start, stop) {
    var tmp;
    if (!(start == null) && !(stop == null)) {
      tmp = this.m1w(Companion_getInstance_25().u1w(start.q1w(), stop.q1w()));
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
    this.v1w_1 = new Pair(null, null);
  }
}
class Token {}
function startPoint() {
  return new Point(this.e1e(), this.i1x());
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
  return (new Point(this.e1e(), this.i1x())).n29(text);
}
class WritableToken {}
class CommonToken {
  f1x(_set____db54di) {
    this.y1w_1 = _set____db54di;
  }
  v1r() {
    return this.y1w_1;
  }
  g1x(_set____db54di) {
    this.z1w_1 = _set____db54di;
  }
  e1e() {
    return this.z1w_1;
  }
  h1x(_set____db54di) {
    this.a1x_1 = _set____db54di;
  }
  i1x() {
    return this.a1x_1;
  }
  j1x(_set____db54di) {
    this.b1x_1 = _set____db54di;
  }
  k1w() {
    return this.b1x_1;
  }
  d1w(_set____db54di) {
    this.c1x_1 = _set____db54di;
  }
  q1w() {
    return this.c1x_1;
  }
  k1x(_set____db54di) {
    this.d1x_1 = _set____db54di;
  }
  g1e() {
    return this.d1x_1;
  }
  l1x(_set____db54di) {
    this.e1x_1 = _set____db54di;
  }
  m1x() {
    return this.e1x_1;
  }
  q1v() {
    return this.w1w_1.first;
  }
  n1x() {
    return this.w1w_1.second;
  }
  o1x(value) {
    this.x1w_1 = value;
  }
  j1f() {
    if (!(this.x1w_1 == null)) {
      return this.x1w_1;
    }
    var tmp0_elvis_lhs = this.n1x();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return null;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var input = tmp;
    var n = input.x1v();
    var tmp_0;
    if (this.g1e() < n && this.m1x() < n) {
      tmp_0 = input.m1w(Companion_getInstance_25().u1w(this.g1e(), this.m1x()));
    } else {
      tmp_0 = '<EOF>';
    }
    return tmp_0;
  }
  static p1x(source, type, channel, startIndex, stopIndex) {
    Companion_getInstance();
    var $this = createThis(this);
    init_org_antlr_v4_kotlinruntime_CommonToken($this);
    $this.w1w_1 = source;
    $this.f1x(type);
    $this.j1x(channel);
    $this.k1x(startIndex);
    $this.l1x(stopIndex);
    var a = source.first;
    if (!(a == null)) {
      $this.g1x(a.e1e());
      $this.h1x(a.i1x());
    }
    return $this;
  }
  toString() {
    return this.q1x(null);
  }
  q1x(r) {
    var tmp;
    if (this.k1w() > 0) {
      tmp = ',channel=' + this.k1w();
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
    var tmp1_safe_receiver = r == null ? null : r.t1x();
    var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.u1x(this.v1r());
    var typeString = tmp2_elvis_lhs == null ? this.v1r().toString() : tmp2_elvis_lhs;
    return '[@' + this.q1w() + ',' + this.g1e() + ':' + this.m1x() + "='" + txt + "',<" + typeString + '>' + channelStr + ',' + this.e1e() + ':' + this.i1x() + ']';
  }
}
class Companion_0 {
  constructor() {
    Companion_instance_0 = this;
    this.x1x_1 = new CommonTokenFactory();
  }
}
class CommonTokenFactory {
  constructor(copyText) {
    Companion_getInstance_0();
    copyText = copyText === VOID ? false : copyText;
    this.y1x_1 = copyText;
  }
  z1x(source, type, text, channel, start, stop, line, charPositionInLine) {
    var t = CommonToken.p1x(source, type, channel, start, stop);
    t.g1x(line);
    t.h1x(charPositionInLine);
    if (!(text == null)) {
      t.o1x(text);
    } else if (this.y1x_1 && !(source.second == null)) {
      t.o1x(ensureNotNull(source.second).m1w(Companion_getInstance_25().u1w(start, stop)));
    }
    return t;
  }
}
class CommonTokenStream extends BufferedTokenStream {
  constructor(tokenSource) {
    super(tokenSource);
    this.e1y_1 = 0;
  }
  w1v(i) {
    return this.j1w(i, this.e1y_1);
  }
  f1w(k) {
    if (k === 0 || (this.n1v_1 - k | 0) < 0) {
      return null;
    }
    var i = this.n1v_1;
    var n = 1;
    while (n <= k && i > 0) {
      i = this.l1w(i - 1 | 0, this.e1y_1);
      n = n + 1 | 0;
    }
    var tmp;
    if (i < 0) {
      tmp = null;
    } else {
      tmp = this.m1v_1.d2(i);
    }
    return tmp;
  }
  e1w(k) {
    this.v1v();
    if (k === 0) {
      return null;
    }
    if (k < 0) {
      return this.f1w(-k | 0);
    }
    var i = this.n1v_1;
    var n = 1;
    while (n < k) {
      if (this.a1w(i + 1 | 0)) {
        i = this.j1w(i + 1 | 0, this.e1y_1);
      }
      n = n + 1 | 0;
    }
    return this.m1v_1.d2(i);
  }
}
class Companion_1 {
  constructor() {
    Companion_instance_1 = this;
    this.f1y_1 = new ConsoleErrorListener();
  }
}
class ConsoleErrorListener extends BaseErrorListener {
  constructor() {
    Companion_getInstance_1();
    super();
  }
  i1v(recognizer, offendingSymbol, line, charPositionInLine, msg, e) {
    System_getInstance().e1v_1.c1v('line ' + line + ':' + charPositionInLine + ' ' + msg);
  }
}
class DefaultErrorStrategy {
  constructor() {
    this.g1y_1 = false;
    this.h1y_1 = -1;
    this.i1y_1 = null;
    this.j1y_1 = null;
    this.k1y_1 = 0;
  }
  l1y(recognizer) {
    return this.m1y(recognizer);
  }
  n1y(recognizer) {
    this.g1y_1 = true;
  }
  o1y(recognizer) {
    return this.g1y_1;
  }
  m1y(recognizer) {
    this.g1y_1 = false;
    this.i1y_1 = null;
    this.h1y_1 = -1;
  }
  p1y(recognizer) {
    return this.m1y(recognizer);
  }
  q1y(recognizer, e) {
    if (this.o1y(recognizer)) {
      return Unit_instance;
    }
    this.n1y(recognizer);
    if (e instanceof NoViableAltException) {
      this.o1z(recognizer, e);
    } else {
      if (e instanceof InputMismatchException) {
        this.n1z(recognizer, e);
      } else {
        if (e instanceof FailedPredicateException) {
          this.m1z(recognizer, e);
        } else {
          System_getInstance().e1v_1.c1v('unknown recognition error type: ' + e.toString());
          recognizer.l1z(ensureNotNull(e.w1y_1), ensureNotNull(e.message), e);
        }
      }
    }
  }
  p1z(recognizer, e) {
    var lastErrorStatesTemp = this.i1y_1;
    if (this.h1y_1 === recognizer.r1z().r1v() && !(lastErrorStatesTemp == null) && lastErrorStatesTemp.vk(recognizer.s1x_1)) {
      recognizer.q1z();
    }
    this.h1y_1 = recognizer.r1z().r1v();
    if (lastErrorStatesTemp == null) {
      lastErrorStatesTemp = IntervalSet.u1z();
      this.i1y_1 = lastErrorStatesTemp;
    }
    lastErrorStatesTemp.v1z(recognizer.s1x_1);
    var followSet = this.w1z(recognizer);
    this.x1z(recognizer, followSet);
  }
  y1z(recognizer) {
    var s = recognizer.l20().j20_1.b20_1.d2(recognizer.s1x_1);
    if (this.o1y(recognizer)) {
      return Unit_instance;
    }
    var tokens = recognizer.r1z();
    var la = tokens.z1v(1);
    var nextTokens = recognizer.m20().n20(ensureNotNull(s));
    if (nextTokens.vk(la)) {
      this.j1y_1 = null;
      this.k1y_1 = -1;
      return Unit_instance;
    }
    if (nextTokens.vk(-2)) {
      if (this.j1y_1 == null) {
        this.j1y_1 = recognizer.f1z_1;
        this.k1y_1 = recognizer.s1x_1;
      }
      return Unit_instance;
    }
    switch (s.v20()) {
      case 3:
      case 5:
      case 4:
      case 10:
        if (!(this.w20(recognizer) == null)) {
          return Unit_instance;
        }

        throw InputMismatchException.g21(recognizer);
      case 11:
      case 9:
        this.h21(recognizer);
        var expecting = recognizer.i21();
        var whatFollowsLoopIterationOrRule = expecting.j21(this.w1z(recognizer));
        this.x1z(recognizer, whatFollowsLoopIterationOrRule);
        break;
      default:
        break;
    }
  }
  o1z(recognizer, e) {
    var tokens = recognizer.r1z();
    var tmp;
    if (ensureNotNull(e.s21_1).v1r() === -1) {
      tmp = '<EOF>';
    } else {
      tmp = ensureNotNull(tokens.p1w(e.s21_1, ensureNotNull(e.w1y_1)));
    }
    var input = tmp;
    var msg = 'no viable alternative at input ' + this.v21(input);
    recognizer.l1z(ensureNotNull(e.w1y_1), msg, e);
  }
  n1z(recognizer, e) {
    var tokenErrorDisplay = this.w21(e.w1y_1);
    var expectedToken = ensureNotNull(e.i21()).x21(recognizer.t1x());
    var msg = 'mismatched input ' + tokenErrorDisplay + ' expecting ' + expectedToken;
    recognizer.l1z(ensureNotNull(e.w1y_1), msg, e);
  }
  m1z(recognizer, e) {
    var ruleName = recognizer.y21()[ensureNotNull(recognizer.f1z_1).e22()];
    var msg = 'rule ' + ruleName + ' ' + e.message;
    recognizer.l1z(ensureNotNull(e.w1y_1), msg, e);
  }
  h21(recognizer) {
    if (this.o1y(recognizer)) {
      return Unit_instance;
    }
    this.n1y(recognizer);
    var t = ensureNotNull(recognizer.f22());
    var tokenName = this.w21(t);
    var expecting = this.g22(recognizer);
    var msg = 'extraneous input ' + tokenName + ' expecting ' + expecting.x21(recognizer.t1x());
    recognizer.l1z(t, msg, null);
  }
  h22(recognizer) {
    if (this.o1y(recognizer)) {
      return Unit_instance;
    }
    this.n1y(recognizer);
    var t = ensureNotNull(recognizer.f22());
    var expecting = this.g22(recognizer);
    var msg = 'missing ' + expecting.x21(recognizer.t1x()) + ' at ' + this.w21(t);
    recognizer.l1z(t, msg, null);
  }
  i22(recognizer) {
    var matchedSymbol = this.w20(recognizer);
    if (!(matchedSymbol == null)) {
      recognizer.q1z();
      return matchedSymbol;
    }
    if (this.k22(recognizer)) {
      return this.j22(recognizer);
    }
    var tmp;
    if (this.j1y_1 == null) {
      tmp = InputMismatchException.g21(recognizer);
    } else {
      tmp = InputMismatchException.l22(recognizer, this.k1y_1, ensureNotNull(this.j1y_1));
    }
    var e = tmp;
    throw e;
  }
  k22(recognizer) {
    var currentSymbolType = recognizer.r1z().z1v(1);
    var currentState = recognizer.l20().j20_1.b20_1.d2(recognizer.s1x_1);
    var next = ensureNotNull(currentState).o22(0).m22_1;
    var atn = recognizer.l20().j20_1;
    var expectingAtLL2 = atn.p22(next, recognizer.f1z_1);
    if (expectingAtLL2.vk(currentSymbolType)) {
      this.h22(recognizer);
      return true;
    }
    return false;
  }
  w20(recognizer) {
    var nextTokenType = recognizer.r1z().z1v(2);
    var expecting = this.g22(recognizer);
    if (expecting.vk(nextTokenType)) {
      this.h21(recognizer);
      recognizer.q1z();
      var matchedSymbol = recognizer.f22();
      this.p1y(recognizer);
      return matchedSymbol;
    }
    return null;
  }
  j22(recognizer) {
    var currentSymbol = recognizer.f22();
    var expecting = this.g22(recognizer);
    var expectedTokenType = 0;
    if (!expecting.r22()) {
      expectedTokenType = expecting.q22();
    }
    var tmp;
    if (expectedTokenType === -1) {
      tmp = '<missing EOF>';
    } else {
      tmp = '<missing ' + recognizer.t1x().u1x(expectedTokenType) + '>';
    }
    var tokenText = tmp;
    var current = currentSymbol;
    var lookback = recognizer.r1z().e1w(-1);
    if (ensureNotNull(current).v1r() === -1 && !(lookback == null)) {
      current = lookback;
    }
    return recognizer.s22().z1x(new Pair(current.q1v(), current.n1x()), expectedTokenType, tokenText, 0, -1, -1, current.e1e(), current.i1x());
  }
  g22(recognizer) {
    return recognizer.i21();
  }
  w21(t) {
    if (t == null) {
      return '<no token>';
    }
    var s = this.t22(t);
    if (s == null) {
      var tmp;
      if (this.u22(t) === -1) {
        tmp = '<EOF>';
      } else {
        tmp = '<' + this.u22(t) + '>';
      }
      s = tmp;
    }
    return this.v21(s);
  }
  t22(symbol) {
    return symbol.j1f();
  }
  u22(symbol) {
    return symbol.v1r();
  }
  v21(s) {
    var ss = s;
    ss = replace(ss, '\n', '\\n');
    ss = replace(ss, '\r', '\\r');
    ss = replace(ss, '\t', '\\t');
    return "'" + ss + "'";
  }
  w1z(recognizer) {
    var atn = recognizer.l20().j20_1;
    var ctx = recognizer.f1z_1;
    var recoverSet = IntervalSet.u1z();
    while (!(ctx == null) && ctx.a22_1 >= 0) {
      var invokingState = atn.b20_1.d2(ctx.a22_1);
      var tmp = ensureNotNull(invokingState).o22(0);
      var rt = tmp instanceof RuleTransition ? tmp : THROW_CCE();
      var follow = atn.n20(rt.z22_1);
      recoverSet.c23(follow);
      ctx = ctx.d23();
    }
    recoverSet.e23(-2);
    return recoverSet;
  }
  x1z(recognizer, set) {
    var ttype = recognizer.r1z().z1v(1);
    while (!(ttype === -1) && !set.vk(ttype)) {
      recognizer.q1z();
      ttype = recognizer.r1z().z1v(1);
    }
  }
}
class DummyTokenStream {
  q1v() {
    throw UnsupportedOperationException.q7();
  }
  y1v() {
    throw UnsupportedOperationException.q7();
  }
  z1v(i) {
    throw UnsupportedOperationException.q7();
  }
  s1v() {
    throw UnsupportedOperationException.q7();
  }
  t1v(marker) {
    throw UnsupportedOperationException.q7();
  }
  r1v() {
    throw UnsupportedOperationException.q7();
  }
  u1v(index) {
  }
  x1v() {
    return 0;
  }
  e1w(k) {
    throw UnsupportedOperationException.q7();
  }
  d2(index) {
    throw UnsupportedOperationException.q7();
  }
  m1w(interval) {
    throw UnsupportedOperationException.q7();
  }
  p1w(start, stop) {
    throw UnsupportedOperationException.q7();
  }
}
class EmptyStackException extends RuntimeException {
  static i23(message, cause) {
    message = message === VOID ? null : message;
    cause = cause === VOID ? null : cause;
    var $this = this.dc(message, cause);
    captureStack($this, $this.h23_1);
    return $this;
  }
}
class RecognitionException extends RuntimeException {
  static j23(recognizer, inputStream, ctx, message) {
    message = message === VOID ? null : message;
    var $this = this.ba(message);
    captureStack($this, $this.y1y_1);
    $this.t1y_1 = recognizer;
    $this.u1y_1 = inputStream;
    $this.v1y_1 = ctx;
    $this.w1y_1 = null;
    $this.x1y_1 = -1;
    if (!($this.t1y_1 == null)) {
      $this.x1y_1 = $this.t1y_1.s1x_1;
    }
    return $this;
  }
  n1x() {
    return this.u1y_1;
  }
  i21() {
    var tmp0_safe_receiver = this.t1y_1;
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.m20();
    return tmp1_safe_receiver == null ? null : tmp1_safe_receiver.q26(this.x1y_1, this.v1y_1);
  }
}
class FailedPredicateException extends RecognitionException {}
class InputMismatchException extends RecognitionException {
  static g21(recognizer) {
    var $this = this.j23(recognizer, recognizer.r1z(), ensureNotNull(recognizer.f1z_1));
    init_org_antlr_v4_kotlinruntime_InputMismatchException($this);
    $this.w1y_1 = recognizer.f22();
    return $this;
  }
  static l22(recognizer, state, ctx) {
    var $this = this.j23(recognizer, recognizer.r1z(), ctx);
    init_org_antlr_v4_kotlinruntime_InputMismatchException($this);
    $this.x1y_1 = state;
    $this.w1y_1 = recognizer.f22();
    return $this;
  }
}
class Companion_2 {
  constructor() {
    this.k23_1 = 0;
    this.l23_1 = -2;
    this.m23_1 = -3;
    this.n23_1 = 0;
    this.o23_1 = 1;
    this.p23_1 = 0;
    this.q23_1 = 1114111;
  }
}
class Recognizer {
  constructor() {
    Companion_getInstance_4();
    this.r1x_1 = ArrayList.v1(listOf(Companion_getInstance_1().f1y_1));
    this.s1x_1 = -1;
  }
  t1x() {
    return Companion_getInstance_5().c29(this.x24());
  }
  v25() {
    return this.r1x_1;
  }
  t25() {
    return new ProxyErrorListener(this.v25());
  }
  w25(listener) {
    this.r1x_1.z1(listener);
  }
  x25(_localctx, ruleIndex, predIndex) {
    return true;
  }
  y25(localctx, precedence) {
    return true;
  }
  z25(_localctx, ruleIndex, actionIndex) {
  }
}
class Lexer extends Recognizer {
  constructor(input) {
    super();
    this.t23_1 = input;
    this.u23_1 = new Pair(this, input);
    this.v23_1 = Companion_getInstance_0().x1x_1;
    this.w23_1 = null;
    this.x23_1 = -1;
    this.y23_1 = 0;
    this.z23_1 = 0;
    this.a24_1 = false;
    this.b24_1 = 0;
    this.c24_1 = 0;
    this.d24_1 = IntegerStack.l24();
    this.e24_1 = 0;
    this.f24_1 = null;
    var tmp = this;
    // Inline function 'kotlin.emptyArray' call
    tmp.g24_1 = [];
    var tmp_0 = this;
    // Inline function 'kotlin.emptyArray' call
    tmp_0.h24_1 = [];
    var tmp_1 = this;
    // Inline function 'kotlin.emptyArray' call
    tmp_1.i24_1 = [];
  }
  s22() {
    return this.v23_1;
  }
  m24(_set____db54di) {
    this.w23_1 = _set____db54di;
  }
  y1r() {
    return this.w23_1;
  }
  e1e() {
    return this.l20().s24_1;
  }
  i1x() {
    return this.l20().t24_1;
  }
  w24() {
    return this.t23_1.r1v();
  }
  x24() {
    return this.i24_1;
  }
  y24() {
    var tokens = ArrayList.u1();
    var t = this.c1w();
    while (!(t.v1r() === -1)) {
      tokens.z1(t);
      t = this.c1w();
    }
    return tokens;
  }
  z24() {
    this.t23_1.u1v(0);
    this.m24(null);
    this.c24_1 = 0;
    this.b24_1 = 0;
    this.x23_1 = -1;
    this.z23_1 = -1;
    this.y23_1 = -1;
    this.f24_1 = null;
    this.a24_1 = false;
    this.e24_1 = 0;
    this.d24_1.u3();
    var tmp0_safe_receiver = this.l20();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.z24();
    }
  }
  c1w() {
    var tokenStartMarker = this.t23_1.s1v();
    try {
      outer: while (true) {
        if (this.a24_1) {
          this.c25();
          return ensureNotNull(this.y1r());
        }
        this.m24(null);
        this.b24_1 = 0;
        this.x23_1 = this.t23_1.r1v();
        this.z23_1 = this.l20().t24_1;
        this.y23_1 = this.l20().s24_1;
        this.f24_1 = null;
        do {
          this.c24_1 = 0;
          var ttype;
          try {
            ttype = this.l20().d25(this.t23_1, this.e24_1);
          } catch ($p) {
            if ($p instanceof LexerNoViableAltException) {
              var e = $p;
              this.e25(e);
              this.f25(e);
              ttype = -3;
            } else {
              throw $p;
            }
          }
          if (this.t23_1.z1v(1) === -1) {
            this.a24_1 = true;
          }
          if (this.c24_1 === 0) {
            this.c24_1 = ttype;
          }
          if (this.c24_1 === -3) {
            continue outer;
          }
        }
         while (this.c24_1 === -2);
        if (this.y1r() == null) {
          this.g25();
        }
        return ensureNotNull(this.y1r());
      }
    }finally {
      this.t23_1.t1v(tokenStartMarker);
    }
  }
  h25() {
    this.c24_1 = -3;
  }
  i25() {
    this.c24_1 = -2;
  }
  j25(m) {
    this.e24_1 = m;
  }
  k25(m) {
    if (false) {
      System_getInstance().d1v_1.c1v('pushMode ' + m);
    }
    this.d24_1.l25(this.e24_1);
    this.j25(m);
  }
  m25() {
    if (this.d24_1.n25()) {
      throw EmptyStackException.i23();
    }
    if (false) {
      System_getInstance().d1v_1.c1v('popMode back to ' + this.d24_1.o25());
    }
    this.j25(this.d24_1.p25());
    return this.e24_1;
  }
  q25(token) {
    this.m24(token);
  }
  g25() {
    var t = this.s22().z1x(this.u23_1, this.c24_1, this.f24_1, this.b24_1, this.x23_1, this.w24() - 1 | 0, this.y23_1, this.z23_1);
    this.q25(t);
    return t;
  }
  c25() {
    var cPos = this.i1x();
    var eof = this.s22().z1x(this.u23_1, -1, null, 0, this.t23_1.r1v(), this.t23_1.r1v() - 1 | 0, this.e1e(), cPos);
    this.q25(eof);
    return eof;
  }
  f25(e) {
    if (!(this.t23_1.z1v(1) === -1)) {
      this.l20().r25(this.t23_1);
    }
  }
  e25(e) {
    var text = this.t23_1.m1w(Companion_getInstance_25().u1w(this.x23_1, this.t23_1.r1v()));
    var msg = "token recognition error at: '" + this.s25(text) + "'";
    this.t25().i1v(this, null, this.y23_1, this.z23_1, msg, e);
  }
  s25(s) {
    var buf = StringBuilder.s();
    var inductionVariable = 0;
    var last = s.length;
    while (inductionVariable < last) {
      var c = charCodeAt(s, inductionVariable);
      inductionVariable = inductionVariable + 1 | 0;
      // Inline function 'kotlin.code' call
      var tmp$ret$0 = Char__toInt_impl_vasixd(c);
      buf.t(this.u25(tmp$ret$0));
    }
    return buf.toString();
  }
  u25(c) {
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
  static l26(lexer, input, startIndex, deadEndConfigs) {
    var $this = this.j23(lexer, input, null);
    captureStack($this, $this.k26_1);
    $this.i26_1 = startIndex;
    $this.j26_1 = deadEndConfigs;
    return $this;
  }
  n1x() {
    var tmp = super.n1x();
    return isInterface(tmp, CharStream) ? tmp : THROW_CCE();
  }
  toString() {
    var symbol = '';
    if (this.i26_1 >= 0 && this.i26_1 < this.n1x().x1v()) {
      symbol = this.n1x().m1w(Companion_getInstance_25().u1w(this.i26_1, this.i26_1));
      symbol = Utils_instance.m26(symbol, false);
    }
    return '' + getKClassFromExpression(this).q() + "('" + symbol + "')";
  }
}
class NoViableAltException extends RecognitionException {
  static n26(recognizer, input, startToken, offendingToken, deadEndConfigs, ctx) {
    input = input === VOID ? recognizer.r1z() : input;
    startToken = startToken === VOID ? recognizer.f22() : startToken;
    offendingToken = offendingToken === VOID ? recognizer.f22() : offendingToken;
    deadEndConfigs = deadEndConfigs === VOID ? null : deadEndConfigs;
    ctx = ctx === VOID ? ensureNotNull(recognizer.f1z_1) : ctx;
    var $this = this.j23(recognizer, input, ctx);
    captureStack($this, $this.u21_1);
    $this.s21_1 = startToken;
    $this.t21_1 = deadEndConfigs;
    $this.w1y_1 = offendingToken;
    return $this;
  }
}
class Parser extends Recognizer {
  constructor(input) {
    super();
    this.b1z_1 = null;
    this.c1z_1 = new DefaultErrorStrategy();
    this.d1z_1 = input;
    var tmp = this;
    // Inline function 'kotlin.also' call
    var this_0 = IntegerStack.l24();
    this_0.l25(0);
    tmp.e1z_1 = this_0;
    this.f1z_1 = null;
    this.g1z_1 = true;
    this.h1z_1 = null;
    this.i1z_1 = ArrayList.u1();
    this.j1z_1 = 0;
    this.k1z_1 = false;
    this.o26(input);
  }
  s22() {
    return this.d1z_1.q1v().s22();
  }
  o26(value) {
    this.d1z_1 = DummyTokenStream_instance;
    this.z24();
    this.d1z_1 = value;
  }
  r1z() {
    return this.d1z_1;
  }
  f22() {
    return this.d1z_1.e1w(1);
  }
  p26() {
    var tmp;
    if (this.e1z_1.n25()) {
      tmp = -1;
    } else {
      tmp = this.e1z_1.o25();
    }
    return tmp;
  }
  i21() {
    return this.m20().q26(this.s1x_1, this.f1z_1);
  }
  z24() {
    this.r1z().u1v(0);
    this.c1z_1.l1y(this);
    this.f1z_1 = null;
    this.j1z_1 = 0;
    this.k1z_1 = false;
    this.e1z_1.u3();
    this.e1z_1.l25(0);
    var tmp0_safe_receiver = this.l20();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.z24();
    }
  }
  b27(ttype) {
    var t = this.f22();
    if (ensureNotNull(t).v1r() === ttype) {
      if (ttype === -1) {
        this.k1z_1 = true;
      }
      this.c1z_1.p1y(this);
      this.q1z();
    } else {
      t = this.c1z_1.i22(this);
      if (this.g1z_1 && t.q1w() === -1) {
        ensureNotNull(this.f1z_1).m27(this.c27(this.f1z_1, t));
      }
    }
    return t;
  }
  n27() {
    var _iterator__ex2g4s = this.i1z_1.w();
    while (_iterator__ex2g4s.x()) {
      var listener = _iterator__ex2g4s.y();
      listener.o27(ensureNotNull(this.f1z_1));
      ensureNotNull(this.f1z_1).p27(listener);
    }
  }
  q27() {
    var _iterator__ex2g4s = asReversed(this.i1z_1).w();
    while (_iterator__ex2g4s.x()) {
      var listener = _iterator__ex2g4s.y();
      ensureNotNull(this.f1z_1).r27(listener);
      listener.s27(ensureNotNull(this.f1z_1));
    }
  }
  l1z(offendingToken, msg, e) {
    this.j1z_1 = this.j1z_1 + 1 | 0;
    var line = offendingToken.e1e();
    var charPositionInLine = offendingToken.i1x();
    var listener = this.t25();
    listener.i1v(this, offendingToken, line, charPositionInLine, msg, e);
  }
  q1z() {
    var o = this.f22();
    if (!(ensureNotNull(o).v1r() === -1)) {
      this.r1z().y1v();
    }
    var tmp;
    if (this.g1z_1) {
      tmp = true;
    } else {
      // Inline function 'kotlin.collections.isNotEmpty' call
      tmp = !this.i1z_1.u();
    }
    if (tmp) {
      if (this.c1z_1.o1y(this)) {
        var node = ensureNotNull(this.f1z_1).m27(this.c27(this.f1z_1, o));
        var _iterator__ex2g4s = this.i1z_1.w();
        while (_iterator__ex2g4s.x()) {
          var listener = _iterator__ex2g4s.y();
          listener.w27(node);
        }
      } else {
        var node_0 = ensureNotNull(this.f1z_1).u27(this.t27(this.f1z_1, o));
        var _iterator__ex2g4s_0 = this.i1z_1.w();
        while (_iterator__ex2g4s_0.x()) {
          var listener_0 = _iterator__ex2g4s_0.y();
          listener_0.v27(node_0);
        }
      }
    }
    return o;
  }
  t27(parent, t) {
    return new TerminalNodeImpl(t);
  }
  c27(parent, t) {
    return new ErrorNodeImpl(t);
  }
  x27() {
    var parent = ensureNotNull(this.f1z_1).d23();
    if (parent == null)
      null;
    else
      parent.y27(ensureNotNull(this.f1z_1));
  }
  z27(localctx, state, ruleIndex) {
    this.s1x_1 = state;
    this.f1z_1 = localctx;
    ensureNotNull(this.f1z_1).j27_1 = this.d1z_1.e1w(1);
    if (this.g1z_1) {
      this.x27();
    }
    this.n27();
  }
  a28() {
    if (this.k1z_1) {
      ensureNotNull(this.f1z_1).k27_1 = this.d1z_1.e1w(1);
    } else {
      ensureNotNull(this.f1z_1).k27_1 = this.d1z_1.e1w(-1);
    }
    this.q27();
    this.s1x_1 = ensureNotNull(this.f1z_1).a22_1;
    this.f1z_1 = ensureNotNull(this.f1z_1).d23();
  }
  b28(localctx, altNum) {
    localctx.c28(altNum);
    if (this.g1z_1 && !(this.f1z_1 === localctx)) {
      var parent = ensureNotNull(this.f1z_1).d23();
      if (!(parent == null)) {
        parent.d28();
        parent.y27(localctx);
      }
    }
    this.f1z_1 = localctx;
  }
  y25(localctx, precedence) {
    return precedence >= this.e1z_1.o25();
  }
  e28(ctx) {
    var p = ctx;
    var ruleNames = this.y21();
    var stack = ArrayList.u1();
    while (!(p == null)) {
      var ruleIndex = p.e22();
      if (ruleIndex < 0) {
        stack.z1('n/a');
      } else {
        stack.z1(ruleNames[ruleIndex]);
      }
      p = p.d23();
    }
    return stack;
  }
  f28(ctx, $super) {
    ctx = ctx === VOID ? this.f1z_1 : ctx;
    return $super === VOID ? this.e28(ctx) : $super.e28.call(this, ctx);
  }
}
class Companion_3 {
  constructor() {
    Companion_instance_3 = this;
    this.g28_1 = ParserRuleContext.h28();
  }
}
class ParseTree {}
class RuleNode {}
class RuleContext {
  n25() {
    return this.a22_1 === -1;
  }
  k28() {
    return this;
  }
  j1f() {
    if (this.j28() === 0) {
      return '';
    }
    var builder = StringBuilder.s();
    var inductionVariable = 0;
    var last = this.j28();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        builder.t(ensureNotNull(this.q28(i)).j1f());
      }
       while (inductionVariable < last);
    return builder.toString();
  }
  e22() {
    return this.c22_1;
  }
  c28(value) {
  }
  j28() {
    return this.d22_1;
  }
  static l28() {
    var $this = createThis(this);
    init_org_antlr_v4_kotlinruntime_RuleContext($this);
    return $this;
  }
  static n28(parent, invokingState) {
    var $this = createThis(this);
    init_org_antlr_v4_kotlinruntime_RuleContext($this);
    $this.z21_1 = parent;
    $this.a22_1 = invokingState;
    return $this;
  }
  d23() {
    return this.z21_1;
  }
  o28(value) {
    this.z21_1 = value;
  }
  q28(i) {
    return null;
  }
  toString() {
    return this.v28(null, null);
  }
  v28(ruleNames, stop) {
    var buf = StringBuilder.s();
    var p = this;
    buf.t('[');
    while (!(p == null) && !(p === stop)) {
      if (ruleNames == null) {
        if (!p.n25()) {
          buf.af(p.a22_1);
        }
      } else {
        var ruleIndex = p.e22();
        var tmp;
        if (ruleIndex >= 0 && ruleIndex < ruleNames.b2()) {
          tmp = ruleNames.d2(ruleIndex);
        } else {
          tmp = ruleIndex.toString();
        }
        var ruleName = tmp;
        buf.t(ruleName);
      }
      if (!(p.z21_1 == null) && (!(ruleNames == null) || !ensureNotNull(p.z21_1).n25())) {
        buf.t(' ');
      }
      p = p.z21_1;
    }
    buf.t(']');
    return buf.toString();
  }
}
class ParserRuleContext extends RuleContext {
  i28() {
    var start = this.j27_1;
    var stop = this.k27_1;
    if (!(start == null) && !(stop == null)) {
      var endPoint = stop.w1x();
      if (!(endPoint == null)) {
        return new Position(start.v1x(), endPoint);
      }
    }
    return null;
  }
  j28() {
    var tmp0_safe_receiver = this.i27_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.b2();
    return tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
  }
  k28() {
    return this;
  }
  static h28() {
    Companion_getInstance_3();
    var $this = this.l28();
    init_org_antlr_v4_kotlinruntime_ParserRuleContext($this);
    return $this;
  }
  static m28(parent, invokingStateNumber) {
    Companion_getInstance_3();
    var $this = this.n28(parent, invokingStateNumber);
    init_org_antlr_v4_kotlinruntime_ParserRuleContext($this);
    return $this;
  }
  d23() {
    var tmp = this.z21_1;
    return (tmp == null ? true : tmp instanceof ParserRuleContext) ? tmp : THROW_CCE();
  }
  o28(value) {
    var tmp = this;
    tmp.z21_1 = (value == null ? true : value instanceof ParserRuleContext) ? value : THROW_CCE();
  }
  p27(listener) {
  }
  r27(listener) {
  }
  p28(t) {
    var childrenTemp = this.i27_1;
    if (childrenTemp == null) {
      childrenTemp = ArrayList.u1();
      this.i27_1 = childrenTemp;
    }
    childrenTemp.z1(t);
    return t;
  }
  y27(ruleInvocation) {
    return this.p28(ruleInvocation);
  }
  u27(t) {
    t.o28(this);
    return this.p28(t);
  }
  m27(errorNode) {
    errorNode.o28(this);
    return this.p28(errorNode);
  }
  d28() {
    var tempChildren = this.i27_1;
    if (tempChildren == null)
      null;
    else
      tempChildren.x3(tempChildren.b2() - 1 | 0);
  }
  q28(i) {
    var tempChildren = this.i27_1;
    var tmp;
    if (!(tempChildren == null) && i >= 0 && i < tempChildren.b2()) {
      tmp = tempChildren.d2(i);
    } else {
      tmp = null;
    }
    return tmp;
  }
  r28(ctxType, i) {
    var tempChildren = this.i27_1;
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
  s28(ttype, i) {
    var tempChildren = this.i27_1;
    if (tempChildren == null || i < 0 || i >= tempChildren.b2()) {
      return null;
    }
    var j = -1;
    var _iterator__ex2g4s = tempChildren.w();
    while (_iterator__ex2g4s.x()) {
      var o = _iterator__ex2g4s.y();
      if (isInterface(o, TerminalNode)) {
        var symbol = o.t28();
        if (symbol.v1r() === ttype) {
          j = j + 1 | 0;
          if (j === i) {
            return o;
          }
        }
      }
    }
    return null;
  }
  u28(ctxType, i) {
    return this.r28(ctxType, i);
  }
}
class ProxyErrorListener {
  constructor(delegates) {
    this.w28_1 = delegates;
  }
  i1v(recognizer, offendingSymbol, line, charPositionInLine, msg, e) {
    var _iterator__ex2g4s = this.w28_1.w();
    while (_iterator__ex2g4s.x()) {
      var listener = _iterator__ex2g4s.y();
      listener.i1v(recognizer, offendingSymbol, line, charPositionInLine, msg, e);
    }
  }
  j1v(recognizer, dfa, startIndex, stopIndex, exact, ambigAlts, configs) {
    var _iterator__ex2g4s = this.w28_1.w();
    while (_iterator__ex2g4s.x()) {
      var listener = _iterator__ex2g4s.y();
      listener.j1v(recognizer, dfa, startIndex, stopIndex, exact, ambigAlts, configs);
    }
  }
  k1v(recognizer, dfa, startIndex, stopIndex, conflictingAlts, configs) {
    var _iterator__ex2g4s = this.w28_1.w();
    while (_iterator__ex2g4s.x()) {
      var listener = _iterator__ex2g4s.y();
      listener.k1v(recognizer, dfa, startIndex, stopIndex, conflictingAlts, configs);
    }
  }
  l1v(recognizer, dfa, startIndex, stopIndex, prediction, configs) {
    var _iterator__ex2g4s = this.w28_1.w();
    while (_iterator__ex2g4s.x()) {
      var listener = _iterator__ex2g4s.y();
      listener.l1v(recognizer, dfa, startIndex, stopIndex, prediction, configs);
    }
  }
}
class Companion_4 {
  constructor() {
    Companion_instance_4 = this;
    this.x28_1 = -1;
    this.y28_1 = HashMap.y7();
    this.z28_1 = HashMap.y7();
  }
}
class RuntimeMetaData {
  constructor() {
    this.d29_1 = '4.13.1';
  }
  e29(generatingToolVersion, compileTimeVersion) {
    var runtimeConflictsWithGeneratingTool = false;
    if (!(generatingToolVersion == null)) {
      runtimeConflictsWithGeneratingTool = (!('4.13.1' === generatingToolVersion) && !(this.f29('4.13.1') === this.f29(generatingToolVersion)));
    }
    var runtimeConflictsWithCompileTimeTool = !('4.13.1' === compileTimeVersion) && !(this.f29('4.13.1') === this.f29(compileTimeVersion));
    if (runtimeConflictsWithGeneratingTool) {
      System_getInstance().e1v_1.c1v('ANTLR Tool version ' + generatingToolVersion + ' used for code generation does not match the current runtime version 4.13.1');
    }
    if (runtimeConflictsWithCompileTimeTool) {
      System_getInstance().e1v_1.c1v('ANTLR Runtime version ' + compileTimeVersion + ' used for parser compilation does not match the current runtime version 4.13.1');
    }
  }
  f29(version) {
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
    this.g29_1 = source;
    this.h29_1 = sourceName;
    this.k29_1 = 0;
    var _destruct__k2r9zo = codePointIndicesFast(this.g29_1);
    var codePointIndices = _destruct__k2r9zo.ki();
    var size = _destruct__k2r9zo.li();
    this.i29_1 = codePointIndices;
    this.j29_1 = size;
  }
  y1v() {
    if ((this.j29_1 - this.k29_1 | 0) === 0) {
      // Inline function 'com.strumenta.antlrkotlin.runtime.assert' call
      if (!(this.z1v(1) === -1)) {
        throw AssertionError.vc(null);
      }
      throw IllegalStateException.l4('cannot consume EOF');
    }
    this.k29_1 = this.k29_1 + 1 | 0;
  }
  r1v() {
    return this.k29_1;
  }
  x1v() {
    return this.j29_1;
  }
  s1v() {
    return -1;
  }
  t1v(marker) {
  }
  u1v(index) {
    this.k29_1 = index;
  }
  toString() {
    return this.m1w(Companion_getInstance_25().u1w(0, this.j29_1 - 1 | 0));
  }
  m1w(interval) {
    if (interval.n1w_1 >= this.j29_1 || interval.o1w_1 < 0) {
      return '';
    }
    var start = this.i29_1[interval.n1w_1];
    var bPlus1 = interval.o1w_1 + 1 | 0;
    var tmp;
    if (bPlus1 < this.j29_1) {
      tmp = this.i29_1[bPlus1];
    } else {
      tmp = this.g29_1.length;
    }
    var stop = tmp;
    return substring(this.g29_1, start, stop);
  }
  z1v(i) {
    return i < 0 ? codePoint(this, this.k29_1 + i | 0) : i > 0 ? codePoint(this, (this.k29_1 + i | 0) - 1 | 0) : 0;
  }
}
class Companion_5 {
  constructor() {
    Companion_instance_5 = this;
    var tmp = this;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp.a29_1 = Array(0);
    this.b29_1 = new VocabularyImpl(this.a29_1, this.a29_1, this.a29_1);
  }
  c29(tokenNames) {
    // Inline function 'kotlin.collections.isNullOrEmpty' call
    var tmp;
    if (tokenNames == null) {
      tmp = true;
    } else {
      // Inline function 'kotlin.collections.isEmpty' call
      tmp = tokenNames.length === 0;
    }
    if (tmp) {
      return this.b29_1;
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
    tmp.o29_1 = literalNames == null ? Companion_getInstance_5().a29_1 : literalNames;
    var tmp_0 = this;
    tmp_0.p29_1 = symbolicNames == null ? Companion_getInstance_5().a29_1 : symbolicNames;
    var tmp_1 = this;
    tmp_1.q29_1 = displayNames == null ? Companion_getInstance_5().a29_1 : displayNames;
    var tmp_2 = this;
    var tmp0 = this.q29_1.length;
    var tmp0_0 = this.o29_1.length;
    // Inline function 'kotlin.math.max' call
    var b = this.p29_1.length;
    // Inline function 'kotlin.math.max' call
    var b_0 = Math.max(tmp0_0, b);
    tmp_2.r29_1 = Math.max(tmp0, b_0) - 1 | 0;
  }
  s29(tokenType) {
    var tmp;
    if (0 <= tokenType ? tokenType <= (this.o29_1.length - 1 | 0) : false) {
      tmp = this.o29_1[tokenType];
    } else {
      tmp = null;
    }
    return tmp;
  }
  t29(tokenType) {
    if (0 <= tokenType ? tokenType <= (this.p29_1.length - 1 | 0) : false) {
      return this.p29_1[tokenType];
    }
    return tokenType === -1 ? 'EOF' : null;
  }
  u1x(tokenType) {
    if (0 <= tokenType ? tokenType <= (this.q29_1.length - 1 | 0) : false) {
      var displayName = this.q29_1[tokenType];
      if (!(displayName == null)) {
        return displayName;
      }
    }
    var literalName = this.s29(tokenType);
    if (!(literalName == null)) {
      return literalName;
    }
    var symbolicName = this.t29(tokenType);
    return symbolicName == null ? tokenType.toString() : symbolicName;
  }
}
class Companion_6 {
  constructor() {
    Companion_instance_6 = this;
    this.u29_1 = Regex.uf('\r\n|\r|\n');
  }
}
class Point {
  constructor(line, column) {
    Companion_getInstance_6();
    this.l29_1 = line;
    this.m29_1 = column;
    // Inline function 'kotlin.require' call
    if (!(this.l29_1 >= 1)) {
      var message = 'Line should be equal or greater than 1, but was ' + this.l29_1;
      throw IllegalArgumentException.m1(toString_0(message));
    }
    // Inline function 'kotlin.require' call
    if (!(this.m29_1 >= 0)) {
      var message_0 = 'Column should be equal or greater than 0, but was ' + this.m29_1;
      throw IllegalArgumentException.m1(toString_0(message_0));
    }
  }
  toString() {
    return 'line ' + this.l29_1 + ' : column ' + this.m29_1;
  }
  v29(other) {
    return this.l29_1 < other.l29_1 || (this.l29_1 === other.l29_1 && this.m29_1 < other.m29_1);
  }
  n29(text) {
    var matches = Companion_getInstance_6().u29_1.zf(text);
    var line = this.l29_1 + count(matches) | 0;
    var tmp;
    if (none(matches)) {
      tmp = this.m29_1 + text.length | 0;
    } else {
      tmp = (text.length - last(matches).dg().q2_1 | 0) - 1 | 0;
    }
    var col = tmp;
    return new Point(line, col);
  }
  hashCode() {
    var result = this.l29_1;
    result = imul(result, 31) + this.m29_1 | 0;
    return result;
  }
  equals(other) {
    if (this === other)
      return true;
    if (!(other instanceof Point))
      return false;
    var tmp0_other_with_cast = other instanceof Point ? other : THROW_CCE();
    if (!(this.l29_1 === tmp0_other_with_cast.l29_1))
      return false;
    if (!(this.m29_1 === tmp0_other_with_cast.m29_1))
      return false;
    return true;
  }
}
class Position {
  constructor(start, end) {
    this.w29_1 = start;
    this.x29_1 = end;
    // Inline function 'kotlin.require' call
    if (!(this.w29_1.v29(this.x29_1) || this.w29_1.equals(this.x29_1))) {
      var message = 'End should follows start or be the same as start (start: ' + this.w29_1.toString() + ', end: ' + this.x29_1.toString() + ')';
      throw IllegalArgumentException.m1(toString_0(message));
    }
  }
  toString() {
    return 'Position(start=' + this.w29_1.toString() + ', end=' + this.x29_1.toString() + ')';
  }
  hashCode() {
    var result = this.w29_1.hashCode();
    result = imul(result, 31) + this.x29_1.hashCode() | 0;
    return result;
  }
  equals(other) {
    if (this === other)
      return true;
    if (!(other instanceof Position))
      return false;
    var tmp0_other_with_cast = other instanceof Position ? other : THROW_CCE();
    if (!this.w29_1.equals(tmp0_other_with_cast.w29_1))
      return false;
    if (!this.x29_1.equals(tmp0_other_with_cast.x29_1))
      return false;
    return true;
  }
}
class Companion_7 {
  constructor() {
    this.y29_1 = 0;
  }
}
class ATN {
  constructor(grammarType, maxTokenType) {
    this.z1z_1 = grammarType;
    this.a20_1 = maxTokenType;
    this.b20_1 = ArrayList.u1();
    this.c20_1 = ArrayList.u1();
    this.d20_1 = null;
    this.e20_1 = null;
    this.f20_1 = LinkedHashMap.mb();
    this.g20_1 = null;
    this.h20_1 = null;
    this.i20_1 = ArrayList.u1();
  }
  z29() {
    return this.c20_1.b2();
  }
  p22(s, ctx) {
    var anal = new LL1Analyzer(this);
    return anal.b2a(s, ctx);
  }
  n20(s) {
    var nextTokenWithinRule = s.t20_1;
    if (!(nextTokenWithinRule == null)) {
      return nextTokenWithinRule;
    }
    nextTokenWithinRule = this.p22(s, null);
    nextTokenWithinRule.c2a(true);
    s.t20_1 = nextTokenWithinRule;
    return nextTokenWithinRule;
  }
  d2a(state) {
    if (!(state == null)) {
      state.o20_1 = this;
      state.p20_1 = this.b20_1.b2();
    }
    this.b20_1.z1(state);
  }
  e2a(s) {
    this.c20_1.z1(s);
    s.m2a_1 = this.c20_1.b2() - 1 | 0;
    return s.m2a_1;
  }
  o2a(decision) {
    var tmp;
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!this.c20_1.u()) {
      tmp = this.c20_1.d2(decision);
    } else {
      tmp = null;
    }
    return tmp;
  }
  q26(stateNumber, context) {
    if (stateNumber < 0 || stateNumber >= this.b20_1.b2()) {
      throw IllegalArgumentException.m1('Invalid state number.');
    }
    var ctx = context;
    var s = this.b20_1.d2(stateNumber);
    var following = this.n20(ensureNotNull(s));
    if (!following.vk(-2)) {
      return following;
    }
    var expected = IntervalSet.u1z();
    expected.c23(following);
    expected.e23(-2);
    while (!(ctx == null) && ctx.a22_1 >= 0 && following.vk(-2)) {
      var invokingState = this.b20_1.d2(ctx.a22_1);
      var tmp = ensureNotNull(invokingState).o22(0);
      var rt = tmp instanceof RuleTransition ? tmp : THROW_CCE();
      following = this.n20(rt.z22_1);
      expected.c23(following);
      expected.e23(-2);
      ctx = ctx.d23();
    }
    if (following.vk(-2)) {
      expected.v1z(-1);
    }
    return expected;
  }
}
class Companion_8 {
  constructor() {
    this.p2a_1 = 1073741824;
  }
}
class ATNConfig {
  v2a() {
    return this.t2a_1 & -1073741825;
  }
  w2a(value) {
    var tmp;
    if (value) {
      this.t2a_1 = this.t2a_1 | 1073741824;
      tmp = Unit_instance;
    } else {
      this.t2a_1 = this.t2a_1 & -1073741825;
      tmp = Unit_instance;
    }
    return tmp;
  }
  x2a() {
    return !((this.t2a_1 & 1073741824) === 0);
  }
  static y2a(state, alt, context, semanticContext) {
    semanticContext = semanticContext === VOID ? Empty_getInstance() : semanticContext;
    var $this = createThis(this);
    init_org_antlr_v4_kotlinruntime_atn_ATNConfig($this);
    $this.q2a_1 = state;
    $this.r2a_1 = alt;
    $this.s2a_1 = context;
    $this.u2a_1 = semanticContext;
    return $this;
  }
  static z2a(c, state, semanticContext) {
    return this.a2b(c, state, c.s2a_1, semanticContext);
  }
  static b2b(c, semanticContext) {
    return this.a2b(c, c.q2a_1, c.s2a_1, semanticContext);
  }
  static a2b(c, state, context, semanticContext) {
    context = context === VOID ? c.s2a_1 : context;
    semanticContext = semanticContext === VOID ? c.u2a_1 : semanticContext;
    var $this = createThis(this);
    init_org_antlr_v4_kotlinruntime_atn_ATNConfig($this);
    $this.q2a_1 = state;
    $this.r2a_1 = c.r2a_1;
    $this.s2a_1 = context;
    $this.u2a_1 = semanticContext;
    $this.t2a_1 = c.t2a_1;
    return $this;
  }
  equals(other) {
    var tmp;
    if (other instanceof ATNConfig) {
      tmp = this.c2b(other);
    } else {
      tmp = false;
    }
    return tmp;
  }
  c2b(other) {
    if (this === other) {
      return true;
    }
    if (other == null) {
      return false;
    }
    return this.q2a_1.p20_1 === other.q2a_1.p20_1 && this.r2a_1 === other.r2a_1 && equals(this.s2a_1, other.s2a_1) && equals(this.u2a_1, other.u2a_1) && this.x2a() === other.x2a();
  }
  hashCode() {
    var hashCode = MurmurHash_instance.e2b(7);
    hashCode = MurmurHash_instance.f2b(hashCode, this.q2a_1.p20_1);
    hashCode = MurmurHash_instance.f2b(hashCode, this.r2a_1);
    hashCode = MurmurHash_instance.g2b(hashCode, this.s2a_1);
    hashCode = MurmurHash_instance.g2b(hashCode, this.u2a_1);
    hashCode = MurmurHash_instance.h2b(hashCode, 4);
    return hashCode;
  }
  toString() {
    return this.i2b(null, true);
  }
  i2b(recog, showAlt) {
    var buf = StringBuilder.s();
    buf.t('(');
    buf.z(this.q2a_1);
    if (showAlt) {
      buf.t(',');
      buf.af(this.r2a_1);
    }
    if (!(this.s2a_1 == null)) {
      buf.t(',[');
      buf.t(toString_0(ensureNotNull(this.s2a_1)));
      buf.t(']');
    }
    if (!(this.u2a_1 === Empty_getInstance())) {
      buf.t(',');
      buf.z(this.u2a_1);
    }
    if (this.v2a() > 0) {
      buf.t(',up=');
      buf.af(this.v2a());
    }
    buf.t(')');
    return buf.toString();
  }
}
class Array2DHashSet {
  constructor(comparator, initialCapacity, initialBucketCapacity) {
    comparator = comparator === VOID ? Companion_getInstance_27().h2l_1 : comparator;
    initialCapacity = initialCapacity === VOID ? 16 : initialCapacity;
    initialBucketCapacity = initialBucketCapacity === VOID ? 8 : initialBucketCapacity;
    this.t2b_1 = comparator;
    this.u2b_1 = initialCapacity;
    this.v2b_1 = initialBucketCapacity;
    this.x2b_1 = 0;
    this.y2b_1 = 1;
    this.z2b_1 = 0;
    this.w2b_1 = this.r2b(this.u2b_1);
    var tmp = this;
    // Inline function 'kotlin.math.floor' call
    var x = this.u2b_1 * 0.75;
    var tmp$ret$0 = Math.floor(x);
    tmp.z2b_1 = numberToInt(tmp$ret$0);
  }
  a2c(o) {
    if (this.x2b_1 > this.z2b_1) {
      this.e2c();
    }
    return this.b2c(o);
  }
  b2c(o) {
    var b = this.d2c(o);
    var bucket = this.w2b_1[b];
    if (bucket == null) {
      bucket = this.s2b(this.v2b_1);
      bucket[0] = o;
      this.w2b_1[b] = bucket;
      this.x2b_1 = this.x2b_1 + 1 | 0;
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
          this.x2b_1 = this.x2b_1 + 1 | 0;
          return o;
        }
        if (this.t2b_1.n2c(existing, o)) {
          return existing;
        }
      }
       while (inductionVariable <= last);
    var oldLength = bucket.length;
    bucket = copyOf(bucket, imul(bucket.length, 2));
    this.w2b_1[b] = bucket;
    bucket[oldLength] = o;
    this.x2b_1 = this.x2b_1 + 1 | 0;
    return o;
  }
  c2c(o) {
    if (o == null) {
      return o;
    }
    var b = this.d2c(o);
    var tmp0_elvis_lhs = this.w2b_1[b];
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
      if (this.t2b_1.n2c(e, o)) {
        return e;
      }
    }
    return null;
  }
  d2c(o) {
    var hash = this.t2b_1.l2c(o);
    return hash & (this.w2b_1.length - 1 | 0);
  }
  hashCode() {
    var hash = MurmurHash_instance.z2m();
    var indexedObject = this.w2b_1;
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
        hash = MurmurHash_instance.f2b(hash, this.t2b_1.l2c(o));
      }
    }
    hash = MurmurHash_instance.h2b(hash, this.b2());
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
  e2c() {
    var old = this.w2b_1;
    this.y2b_1 = this.y2b_1 + 4 | 0;
    var newCapacity = imul(this.w2b_1.length, 2);
    var newTable = this.r2b(newCapacity);
    var newBucketLengths = new Int32Array(newTable.length);
    this.w2b_1 = newTable;
    this.z2b_1 = numberToInt(newCapacity * 0.75);
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
        var b = this.d2c(o);
        var bucketLength = newBucketLengths[b];
        var newBucket;
        if (bucketLength === 0) {
          newBucket = this.s2b(this.v2b_1);
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
    if (!(this.x2b_1 === oldSize)) {
      throw AssertionError.vc(null);
    }
  }
  f2c(element) {
    var existing = this.a2c(element);
    return existing === element;
  }
  z1(element) {
    return this.f2c(element);
  }
  b2() {
    return this.x2b_1;
  }
  u() {
    return this.x2b_1 === 0;
  }
  gi(element) {
    return this.g2c(element);
  }
  g2(element) {
    if (!true)
      return false;
    return this.gi(element);
  }
  g2c(obj) {
    var tmp;
    if (obj == null) {
      tmp = false;
    } else {
      tmp = !(this.c2c(obj) == null);
    }
    return tmp;
  }
  w() {
    return new SetIterator(this, this.m7());
  }
  m7() {
    var a = this.s2b(this.b2());
    var i = 0;
    var indexedObject = this.w2b_1;
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
  h2c(element) {
    return this.i2c(this.q2b(element));
  }
  i2c(obj) {
    if (obj == null) {
      return false;
    }
    var b = this.d2c(obj);
    var tmp0_elvis_lhs = this.w2b_1[b];
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
        if (this.t2b_1.n2c(e, obj)) {
          var tmp6 = i + 1 | 0;
          // Inline function 'kotlin.collections.copyInto' call
          var endIndex = bucket.length;
          arrayCopy(bucket, bucket, i, tmp6, endIndex);
          bucket[bucket.length - 1 | 0] = null;
          this.x2b_1 = this.x2b_1 - 1 | 0;
          return true;
        }
      }
       while (inductionVariable <= last);
    return false;
  }
  hi(elements) {
    if (elements instanceof Array2DHashSet) {
      var indexedObject = this.w2b_1;
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
          if (!this.g2c(this.q2b(o))) {
            return false;
          }
        }
      }
    } else {
      var _iterator__ex2g4s_0 = elements.w();
      while (_iterator__ex2g4s_0.x()) {
        var o_0 = _iterator__ex2g4s_0.y();
        if (!(o_0 == null) && !this.g2c(this.q2b(o_0))) {
          return false;
        }
      }
    }
    return true;
  }
  h3(elements) {
    return this.hi(elements);
  }
  j2c(elements) {
    var changed = false;
    var _iterator__ex2g4s = elements.w();
    while (_iterator__ex2g4s.x()) {
      var o = _iterator__ex2g4s.y();
      var existing = this.a2c(o);
      if (!(existing === o)) {
        changed = true;
      }
    }
    return changed;
  }
  c2(elements) {
    return this.j2c(elements);
  }
  toString() {
    if (this.b2() === 0) {
      return '{}';
    }
    var buf = StringBuilder.s();
    buf.t('{');
    var first = true;
    var indexedObject = this.w2b_1;
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
  q2b(o) {
    return o;
  }
  r2b(capacity) {
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp = Array(capacity);
    return isArray(tmp) ? tmp : THROW_CCE();
  }
  s2b(capacity) {
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
  q2b(o) {
    var tmp;
    if (!(o instanceof ATNConfig)) {
      tmp = null;
    } else {
      tmp = o;
    }
    return tmp;
  }
  r2b(capacity) {
    // Inline function 'kotlin.arrayOfNulls' call
    return Array(capacity);
  }
  s2b(capacity) {
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
  k2c(obj) {
    var hashCode_0 = 7;
    hashCode_0 = imul(31, hashCode_0) + obj.q2a_1.p20_1 | 0;
    hashCode_0 = imul(31, hashCode_0) + obj.r2a_1 | 0;
    hashCode_0 = imul(31, hashCode_0) + hashCode(obj.u2a_1) | 0;
    return hashCode_0;
  }
  l2c(obj) {
    return this.k2c(obj instanceof ATNConfig ? obj : THROW_CCE());
  }
  m2c(a, b) {
    if (a === b) {
      return true;
    }
    if (a == null || b == null) {
      return false;
    }
    return a.q2a_1.p20_1 === b.q2a_1.p20_1 && a.r2a_1 === b.r2a_1 && equals(a.u2a_1, b.u2a_1);
  }
  n2c(a, b) {
    var tmp = (a == null ? true : a instanceof ATNConfig) ? a : THROW_CCE();
    return this.m2c(tmp, (b == null ? true : b instanceof ATNConfig) ? b : THROW_CCE());
  }
}
class ATNConfigSet {
  constructor(fullCtx) {
    fullCtx = fullCtx === VOID ? true : fullCtx;
    this.o2c_1 = fullCtx;
    this.p2c_1 = new ConfigHashSet();
    this.q2c_1 = ArrayList.y1(7);
    this.r2c_1 = 0;
    this.s2c_1 = null;
    this.t2c_1 = false;
    this.u2c_1 = false;
    this.v2c_1 = -1;
    this.w2c_1 = false;
  }
  x2c() {
    var alts = BitSet.z2c();
    var _iterator__ex2g4s = this.q2c_1.w();
    while (_iterator__ex2g4s.x()) {
      var config = _iterator__ex2g4s.y();
      alts.a2d(config.r2a_1);
    }
    return alts;
  }
  c2a(value) {
    this.w2c_1 = value;
    this.p2c_1 = null;
  }
  b2d(element) {
    return this.c2d(element, null);
  }
  z1(element) {
    return this.b2d(element instanceof ATNConfig ? element : THROW_CCE());
  }
  c2d(config, mergeCache) {
    if (this.w2c_1) {
      throw IllegalStateException.l4('This set is readonly');
    }
    if (!(config.u2a_1 === Empty_getInstance())) {
      this.t2c_1 = true;
    }
    if (config.v2a() > 0) {
      this.u2c_1 = true;
    }
    var existing = ensureNotNull(this.p2c_1).a2c(config);
    if (existing === config) {
      this.v2c_1 = -1;
      this.q2c_1.z1(config);
      return true;
    }
    var rootIsWildcard = !this.o2c_1;
    var merged = Companion_instance_17.g2d(existing.s2a_1, config.s2a_1, rootIsWildcard, mergeCache);
    var tmp = existing;
    var tmp0 = existing.t2a_1;
    // Inline function 'kotlin.math.max' call
    var b = config.t2a_1;
    tmp.t2a_1 = Math.max(tmp0, b);
    if (config.x2a()) {
      existing.w2a(true);
    }
    existing.s2a_1 = merged;
    return true;
  }
  h2d() {
    return this.q2c_1;
  }
  i2d(interpreter) {
    if (this.w2c_1) {
      throw IllegalStateException.l4('This set is readonly');
    }
    if (ensureNotNull(this.p2c_1).u()) {
      return Unit_instance;
    }
    var _iterator__ex2g4s = this.q2c_1.w();
    while (_iterator__ex2g4s.x()) {
      var config = _iterator__ex2g4s.y();
      config.s2a_1 = interpreter.j2d(ensureNotNull(config.s2a_1));
    }
  }
  k2d(elements) {
    var _iterator__ex2g4s = elements.w();
    while (_iterator__ex2g4s.x()) {
      var c = _iterator__ex2g4s.y();
      this.b2d(c);
    }
    return false;
  }
  c2(elements) {
    return this.k2d(elements);
  }
  equals(other) {
    if (other === this) {
      return true;
    }
    if (!(other instanceof ATNConfigSet)) {
      return false;
    }
    return equals(this.q2c_1, other.q2c_1) && this.o2c_1 === other.o2c_1 && this.r2c_1 === other.r2c_1 && this.s2c_1 === other.s2c_1 && this.t2c_1 === other.t2c_1 && this.u2c_1 === other.u2c_1;
  }
  hashCode() {
    if (this.w2c_1) {
      if (this.v2c_1 === -1) {
        this.v2c_1 = hashCode(this.q2c_1);
      }
      return this.v2c_1;
    }
    return hashCode(this.q2c_1);
  }
  b2() {
    return this.q2c_1.b2();
  }
  u() {
    return this.q2c_1.u();
  }
  l2d(element) {
    if (this.p2c_1 == null) {
      throw UnsupportedOperationException.l9('This method is not implemented for readonly sets.');
    }
    return ensureNotNull(this.p2c_1).gi(element);
  }
  g2(element) {
    if (!(element instanceof ATNConfig))
      return false;
    return this.l2d(element instanceof ATNConfig ? element : THROW_CCE());
  }
  w() {
    return this.q2c_1.w();
  }
  toString() {
    var buf = StringBuilder.s();
    buf.t(toString_0(this.h2d()));
    if (this.t2c_1) {
      buf.t(',hasSemanticContext=');
      buf.ze(this.t2c_1);
    }
    if (!(this.r2c_1 === 0)) {
      buf.t(',uniqueAlt=');
      buf.af(this.r2c_1);
    }
    if (!(this.s2c_1 == null)) {
      buf.t(',conflictingAlts=');
      buf.z(this.s2c_1);
    }
    if (this.u2c_1) {
      buf.t(',dipsIntoOuterContext');
    }
    return buf.toString();
  }
  m2d(elements) {
    throw UnsupportedOperationException.q7();
  }
  h3(elements) {
    return this.m2d(elements);
  }
}
class Companion_9 {
  constructor() {
    Companion_instance_9 = this;
    var tmp = this;
    // Inline function 'kotlin.also' call
    var this_0 = ATNDeserializationOptions.q2d();
    this_0.r2d();
    tmp.s2d_1 = this_0;
  }
}
class ATNDeserializationOptions {
  t2d() {
    return this.o2d_1;
  }
  u2d() {
    return this.p2d_1;
  }
  static q2d() {
    Companion_getInstance_9();
    var $this = createThis(this);
    init_org_antlr_v4_kotlinruntime_atn_ATNDeserializationOptions($this);
    $this.o2d_1 = true;
    $this.p2d_1 = false;
    return $this;
  }
  r2d() {
    this.n2d_1 = true;
  }
}
class Companion_10 {
  constructor() {
    this.v2d_1 = 4;
  }
}
class ATNDeserializer {
  constructor(deserializationOptions) {
    deserializationOptions = deserializationOptions === VOID ? Companion_getInstance_9().s2d_1 : deserializationOptions;
    this.x2d_1 = deserializationOptions;
  }
  y2d(data) {
    return this.a2e(this.z2d(data));
  }
  a2e(data) {
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
          atn.d2a(null);
          continue $l$loop;
        }
        var _unary__edvuaz_4 = p._v;
        p._v = _unary__edvuaz_4 + 1 | 0;
        var ruleIndex = data[_unary__edvuaz_4];
        var s = this.b2e(sType, ruleIndex);
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
        atn.d2a(s);
      }
       while (inductionVariable < nStates);
    var _iterator__ex2g4s = loopBackStateNumbers.w();
    while (_iterator__ex2g4s.x()) {
      var pair = _iterator__ex2g4s.y();
      pair.first.j2e_1 = atn.b20_1.d2(pair.second);
    }
    var _iterator__ex2g4s_0 = endStateNumbers.w();
    while (_iterator__ex2g4s_0.x()) {
      var pair_0 = _iterator__ex2g4s_0.y();
      var tmp_0 = pair_0.first;
      var tmp_1 = atn.b20_1.d2(pair_0.second);
      tmp_0.u2e_1 = tmp_1 instanceof BlockEndState ? tmp_1 : THROW_CCE();
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
        var tmp_2 = atn.b20_1.d2(stateNumber);
        (tmp_2 instanceof DecisionState ? tmp_2 : THROW_CCE()).n2a_1 = true;
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
        var tmp_3 = atn.b20_1.d2(stateNumber_0);
        (tmp_3 instanceof RuleStartState ? tmp_3 : THROW_CCE()).d2f_1 = true;
      }
       while (inductionVariable_1 < numPrecedenceStates);
    var _unary__edvuaz_11 = p._v;
    p._v = _unary__edvuaz_11 + 1 | 0;
    var nRules = data[_unary__edvuaz_11];
    if (atn.z1z_1.equals(ATNType_LEXER_getInstance())) {
      atn.g20_1 = new Int32Array(nRules);
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
      var tmp_8 = atn.b20_1.d2(s_0);
      var startState = tmp_8 instanceof RuleStartState ? tmp_8 : THROW_CCE();
      if (atn.z1z_1.equals(ATNType_LEXER_getInstance())) {
        var _unary__edvuaz_13 = p._v;
        p._v = _unary__edvuaz_13 + 1 | 0;
        var tokenType = data[_unary__edvuaz_13];
        ensureNotNull(atn.g20_1)[tmp_7] = tokenType;
      }
      tmp_6[tmp_7] = startState;
      tmp_5 = tmp_5 + 1 | 0;
    }
    tmp_4.d20_1 = tmp_6;
    var tmp_9 = atn;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp_9.e20_1 = Array(nRules);
    var _iterator__ex2g4s_1 = atn.b20_1.w();
    $l$loop_0: while (_iterator__ex2g4s_1.x()) {
      var state = _iterator__ex2g4s_1.y();
      if (!(state instanceof RuleStopState)) {
        continue $l$loop_0;
      }
      ensureNotNull(atn.e20_1)[state.q20_1] = state;
      ensureNotNull(atn.d20_1)[state.q20_1].c2f_1 = state;
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
        var tmp_10 = atn.b20_1.d2(s_1);
        atn.i20_1.z1(tmp_10 instanceof TokensStartState ? tmp_10 : THROW_CCE());
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
        var trans = this.f2f(atn, ttype, src, trg, arg1, arg2, arg3, sets);
        var srcState = atn.b20_1.d2(src);
        ensureNotNull(srcState).g2f(trans);
        p._v = p._v + 6 | 0;
      }
       while (inductionVariable_3 < nEdges);
    var _iterator__ex2g4s_2 = atn.b20_1.w();
    while (_iterator__ex2g4s_2.x()) {
      var state_0 = _iterator__ex2g4s_2.y();
      var inductionVariable_4 = 0;
      var last = ensureNotNull(state_0).h2f();
      if (inductionVariable_4 < last)
        $l$loop_1: do {
          var i_4 = inductionVariable_4;
          inductionVariable_4 = inductionVariable_4 + 1 | 0;
          var tmp_11 = state_0.o22(i_4);
          var tmp0_elvis_lhs = tmp_11 instanceof RuleTransition ? tmp_11 : null;
          var tmp_12;
          if (tmp0_elvis_lhs == null) {
            continue $l$loop_1;
          } else {
            tmp_12 = tmp0_elvis_lhs;
          }
          var t = tmp_12;
          var outermostPrecedenceReturn = -1;
          if (ensureNotNull(atn.d20_1)[t.m22_1.q20_1].d2f_1) {
            if (t.y22_1 === 0) {
              outermostPrecedenceReturn = t.m22_1.q20_1;
            }
          }
          var returnTransition = new EpsilonTransition(t.z22_1, outermostPrecedenceReturn);
          ensureNotNull(ensureNotNull(atn.e20_1)[t.m22_1.q20_1]).g2f(returnTransition);
        }
         while (inductionVariable_4 < last);
    }
    var _iterator__ex2g4s_3 = atn.b20_1.w();
    while (_iterator__ex2g4s_3.x()) {
      var state_1 = _iterator__ex2g4s_3.y();
      if (state_1 instanceof BlockStartState) {
        var tmp1_elvis_lhs = state_1.u2e_1;
        var tmp_13;
        if (tmp1_elvis_lhs == null) {
          throw IllegalStateException.ac();
        } else {
          tmp_13 = tmp1_elvis_lhs;
        }
        var endState = tmp_13;
        if (!(endState.p2f_1 == null)) {
          throw IllegalStateException.ac();
        }
        endState.p2f_1 = state_1;
      }
      if (state_1 instanceof PlusLoopbackState) {
        var inductionVariable_5 = 0;
        var last_0 = state_1.h2f();
        if (inductionVariable_5 < last_0)
          do {
            var i_5 = inductionVariable_5;
            inductionVariable_5 = inductionVariable_5 + 1 | 0;
            var target = state_1.o22(i_5).m22_1;
            if (target instanceof PlusBlockStartState) {
              target.n2g_1 = state_1;
            }
          }
           while (inductionVariable_5 < last_0);
      } else {
        if (state_1 instanceof StarLoopbackState) {
          var inductionVariable_6 = 0;
          var last_1 = state_1.h2f();
          if (inductionVariable_6 < last_1)
            do {
              var i_6 = inductionVariable_6;
              inductionVariable_6 = inductionVariable_6 + 1 | 0;
              var target_0 = state_1.o22(i_6).m22_1;
              if (target_0 instanceof StarLoopEntryState) {
                target_0.a2g_1 = state_1;
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
        var tmp_14 = atn.b20_1.d2(s_2);
        var decState = tmp_14 instanceof DecisionState ? tmp_14 : THROW_CCE();
        atn.c20_1.z1(decState);
        decState.m2a_1 = i_7 - 1 | 0;
      }
       while (!(i_7 === nDecisions));
    if (atn.z1z_1.equals(ATNType_LEXER_getInstance())) {
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
        tmp_18[tmp_19] = this.p2g(actionType, data1, data2);
        tmp_16 = tmp_16 + 1 | 0;
      }
      tmp_15.h20_1 = tmp_18;
    }
    this.q2g(atn);
    if (this.x2d_1.t2d()) {
      this.r2g(atn);
    }
    if (this.x2d_1.u2d() && atn.z1z_1.equals(ATNType_PARSER_getInstance())) {
      atn.g20_1 = new Int32Array(ensureNotNull(atn.d20_1).length);
      var inductionVariable_8 = 0;
      var last_2 = ensureNotNull(atn.d20_1).length - 1 | 0;
      if (inductionVariable_8 <= last_2)
        do {
          var i_8 = inductionVariable_8;
          inductionVariable_8 = inductionVariable_8 + 1 | 0;
          ensureNotNull(atn.g20_1)[i_8] = (atn.a20_1 + i_8 | 0) + 1 | 0;
        }
         while (inductionVariable_8 <= last_2);
      var inductionVariable_9 = 0;
      var last_3 = ensureNotNull(atn.d20_1).length - 1 | 0;
      if (inductionVariable_9 <= last_3)
        do {
          var i_9 = inductionVariable_9;
          inductionVariable_9 = inductionVariable_9 + 1 | 0;
          var bypassStart = new BasicBlockStartState();
          bypassStart.q20_1 = i_9;
          atn.d2a(bypassStart);
          var bypassStop = new BlockEndState();
          bypassStop.q20_1 = i_9;
          atn.d2a(bypassStop);
          bypassStart.u2e_1 = bypassStop;
          atn.e2a(bypassStart);
          bypassStop.p2f_1 = bypassStart;
          var endState_0;
          var excludeTransition = null;
          if (ensureNotNull(atn.d20_1)[i_9].d2f_1) {
            endState_0 = null;
            var _iterator__ex2g4s_4 = atn.b20_1.w();
            $l$loop_5: while (_iterator__ex2g4s_4.x()) {
              var state_2 = _iterator__ex2g4s_4.y();
              if (!(ensureNotNull(state_2).q20_1 === i_9)) {
                continue $l$loop_5;
              }
              if (!(state_2 instanceof StarLoopEntryState)) {
                continue $l$loop_5;
              }
              var maybeLoopEndState = state_2.o22(state_2.h2f() - 1 | 0).m22_1;
              if (!(maybeLoopEndState instanceof LoopEndState)) {
                continue $l$loop_5;
              }
              var tmp_21;
              if (maybeLoopEndState.r20_1) {
                var tmp_22 = maybeLoopEndState.o22(0).m22_1;
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
            excludeTransition = ensureNotNull((endState_0 instanceof StarLoopEntryState ? endState_0 : THROW_CCE()).a2g_1).o22(0);
          } else {
            endState_0 = ensureNotNull(atn.e20_1)[i_9];
          }
          var _iterator__ex2g4s_5 = atn.b20_1.w();
          while (_iterator__ex2g4s_5.x()) {
            var state_3 = _iterator__ex2g4s_5.y();
            var _iterator__ex2g4s_6 = ensureNotNull(state_3).s20_1.w();
            $l$loop_6: while (_iterator__ex2g4s_6.x()) {
              var transition = _iterator__ex2g4s_6.y();
              if (transition === excludeTransition) {
                continue $l$loop_6;
              }
              if (transition.m22_1 === endState_0) {
                transition.m22_1 = bypassStop;
              }
            }
          }
          while (ensureNotNull(atn.d20_1)[i_9].h2f() > 0) {
            var transition_0 = ensureNotNull(atn.d20_1)[i_9].s2g(ensureNotNull(atn.d20_1)[i_9].h2f() - 1 | 0);
            bypassStart.g2f(transition_0);
          }
          ensureNotNull(atn.d20_1)[i_9].g2f(new EpsilonTransition(bypassStart));
          bypassStop.g2f(new EpsilonTransition(ensureNotNull(endState_0)));
          var matchState = new BasicState();
          atn.d2a(matchState);
          matchState.g2f(new AtomTransition(bypassStop, ensureNotNull(atn.g20_1)[i_9]));
          bypassStart.g2f(new EpsilonTransition(matchState));
        }
         while (inductionVariable_9 <= last_3);
      if (this.x2d_1.t2d()) {
        this.r2g(atn);
      }
    }
    return atn;
  }
  q2g(atn) {
    var _iterator__ex2g4s = atn.b20_1.w();
    $l$loop: while (_iterator__ex2g4s.x()) {
      var state = _iterator__ex2g4s.y();
      if (!(state instanceof StarLoopEntryState)) {
        continue $l$loop;
      }
      if (ensureNotNull(atn.d20_1)[state.q20_1].d2f_1) {
        var maybeLoopEndState = state.o22(state.h2f() - 1 | 0).m22_1;
        if (maybeLoopEndState instanceof LoopEndState) {
          var tmp;
          if (maybeLoopEndState.r20_1) {
            var tmp_0 = maybeLoopEndState.o22(0).m22_1;
            tmp = tmp_0 instanceof RuleStopState;
          } else {
            tmp = false;
          }
          if (tmp) {
            state.b2g_1 = true;
          }
        }
      }
    }
  }
  r2g(atn) {
    var _iterator__ex2g4s = atn.b20_1.w();
    $l$loop: while (_iterator__ex2g4s.x()) {
      var state = _iterator__ex2g4s.y();
      if (state == null) {
        continue $l$loop;
      }
      this.u2g(state.t2g() || state.h2f() <= 1);
      if (state instanceof PlusBlockStartState) {
        this.u2g(!(state.n2g_1 == null));
      }
      if (state instanceof StarLoopEntryState) {
        this.u2g(!(state.a2g_1 == null));
        this.u2g(state.h2f() === 2);
        var tmp0_subject = state.o22(0).m22_1;
        if (tmp0_subject instanceof StarBlockStartState) {
          var tmp = state.o22(1).m22_1;
          this.u2g(tmp instanceof LoopEndState);
          this.u2g(!state.n2a_1);
        } else {
          if (tmp0_subject instanceof LoopEndState) {
            var tmp_0 = state.o22(1).m22_1;
            this.u2g(tmp_0 instanceof StarBlockStartState);
            this.u2g(state.n2a_1);
          } else {
            throw IllegalStateException.ac();
          }
        }
      }
      if (state instanceof StarLoopbackState) {
        this.u2g(state.h2f() === 1);
        var tmp_1 = state.o22(0).m22_1;
        this.u2g(tmp_1 instanceof StarLoopEntryState);
      }
      if (state instanceof LoopEndState) {
        this.u2g(!(state.j2e_1 == null));
      }
      if (state instanceof RuleStartState) {
        this.u2g(!(state.c2f_1 == null));
      }
      if (state instanceof BlockStartState) {
        this.u2g(!(state.u2e_1 == null));
      }
      if (state instanceof BlockEndState) {
        this.u2g(!(state.p2f_1 == null));
      }
      if (state instanceof DecisionState) {
        this.u2g(state.h2f() <= 1 || state.m2a_1 >= 0);
      } else {
        var tmp_2;
        if (state.h2f() <= 1) {
          tmp_2 = true;
        } else {
          tmp_2 = state instanceof RuleStopState;
        }
        this.u2g(tmp_2);
      }
    }
  }
  v2g(condition, message) {
    if (!condition) {
      throw IllegalStateException.l4(message);
    }
  }
  u2g(condition, message, $super) {
    message = message === VOID ? null : message;
    var tmp;
    if ($super === VOID) {
      this.v2g(condition, message);
      tmp = Unit_instance;
    } else {
      tmp = $super.v2g.call(this, condition, message);
    }
    return tmp;
  }
  f2f(atn, type, src, trg, arg1, arg2, arg3, sets) {
    var target = ensureNotNull(atn.b20_1.d2(trg));
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
        var tmp_1 = atn.b20_1.d2(arg1);
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
  b2e(type, ruleIndex) {
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
    s.q20_1 = ruleIndex;
    return s;
  }
  p2g(type, data1, data2) {
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
  w2g(data16, trimToSize) {
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
  z2d(data16, trimToSize, $super) {
    trimToSize = trimToSize === VOID ? false : trimToSize;
    return $super === VOID ? this.w2g(data16, trimToSize) : $super.w2g.call(this, data16, trimToSize);
  }
}
class Companion_11 {
  constructor() {
    Companion_instance_11 = this;
    var tmp = this;
    // Inline function 'kotlin.also' call
    var this_0 = DFAState.f2h(new ATNConfigSet());
    this_0.x2g_1 = 2147483647;
    tmp.g2h_1 = this_0;
  }
}
class ATNSimulator {
  constructor(atn, sharedContextCache) {
    Companion_getInstance_11();
    this.j20_1 = atn;
    this.k20_1 = sharedContextCache;
  }
  j2d(context) {
    if (this.k20_1 == null) {
      return context;
    }
    // Inline function 'com.strumenta.antlrkotlin.runtime.synchronized' call
    this.k20_1;
    var visited = new IdentityHashMap();
    return Companion_instance_17.h2h(context, this.k20_1, visited);
  }
}
class Companion_12 {
  constructor() {
    Companion_instance_12 = this;
    this.i2h_1 = 4;
    this.j2h_1 = 0;
    this.k2h_1 = 1;
    this.l2h_1 = 2;
    this.m2h_1 = 3;
    this.n2h_1 = 4;
    this.o2h_1 = 5;
    this.p2h_1 = 6;
    this.q2h_1 = 7;
    this.r2h_1 = 8;
    this.s2h_1 = 9;
    this.t2h_1 = 10;
    this.u2h_1 = 11;
    this.v2h_1 = 12;
    var tmp = this;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.w2h_1 = ['INVALID', 'BASIC', 'RULE_START', 'BLOCK_START', 'PLUS_BLOCK_START', 'STAR_BLOCK_START', 'TOKEN_START', 'RULE_STOP', 'BLOCK_END', 'STAR_LOOP_BACK', 'STAR_LOOP_ENTRY', 'PLUS_LOOP_BACK', 'LOOP_END'];
    this.x2h_1 = -1;
  }
}
class ATNState {
  constructor() {
    Companion_getInstance_12();
    this.o20_1 = null;
    this.p20_1 = -1;
    this.q20_1 = 0;
    this.r20_1 = false;
    this.s20_1 = ArrayList.y1(4);
    this.t20_1 = null;
    this.u20_1 = false;
  }
  h2f() {
    return this.s20_1.b2();
  }
  hashCode() {
    return this.p20_1;
  }
  equals(other) {
    var tmp;
    if (other instanceof ATNState) {
      tmp = this.p20_1 === other.p20_1;
    } else {
      tmp = false;
    }
    return tmp;
  }
  toString() {
    return this.p20_1.toString();
  }
  g2f(e) {
    return this.y2h(this.s20_1.b2(), e);
  }
  y2h(index, e) {
    if (this.s20_1.u()) {
      this.r20_1 = e.z2h();
    } else if (!(this.r20_1 === e.z2h())) {
      System_getInstance().e1v_1.c1v('ATN state ' + this.p20_1 + ' has both epsilon and non-epsilon transitions.');
      this.r20_1 = false;
    }
    var alreadyPresent = false;
    var _iterator__ex2g4s = this.s20_1.w();
    $l$loop_0: while (_iterator__ex2g4s.x()) {
      var t = _iterator__ex2g4s.y();
      if (t.m22_1.p20_1 === e.m22_1.p20_1) {
        if (!(t.getLabel() == null) && !(e.getLabel() == null) && ensureNotNull(t.getLabel()).equals(e.getLabel())) {
          alreadyPresent = true;
          break $l$loop_0;
        } else if (t.z2h() && e.z2h()) {
          alreadyPresent = true;
          break $l$loop_0;
        }
      }
    }
    if (!alreadyPresent) {
      this.s20_1.w3(index, e);
    }
  }
  o22(i) {
    return this.s20_1.d2(i);
  }
  s2g(index) {
    return this.s20_1.x3(index);
  }
  t2g() {
    return this.r20_1;
  }
}
class ATNType extends Enum {}
class Transition {
  constructor(target) {
    Companion_getInstance_21();
    this.m22_1 = target;
    this.n22_1 = false;
  }
  z2h() {
    return this.n22_1;
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
    this.e2i_1 = ruleIndex;
    this.f2i_1 = actionIndex;
    this.g2i_1 = isCtxDependent;
    this.h2i_1 = 6;
    this.i2i_1 = true;
  }
  a2i() {
    return this.h2i_1;
  }
  z2h() {
    return this.i2i_1;
  }
  b2i(symbol, minVocabSymbol, maxVocabSymbol) {
    return false;
  }
  toString() {
    return 'action_' + this.e2i_1 + ':' + this.f2i_1;
  }
}
class PredictionContext {
  static r2i(cachedHashCode) {
    var $this = createThis(this);
    $this.p2i_1 = cachedHashCode;
    var tmp = $this;
    var _unary__edvuaz = Companion_instance_17.f2d_1;
    Companion_instance_17.f2d_1 = _unary__edvuaz + 1 | 0;
    tmp.q2i_1 = _unary__edvuaz;
    return $this;
  }
  n25() {
    return this === EmptyPredictionContext_getInstance();
  }
  z2i() {
    return this.y2i(this.x1v() - 1 | 0) === 2147483647;
  }
  a2j(recog) {
    return toString_0(this);
  }
  hashCode() {
    return this.p2i_1;
  }
}
class ArrayPredictionContext extends PredictionContext {
  static n2i(parents, returnStates) {
    var $this = this.r2i(Companion_instance_17.o2i(parents, returnStates));
    $this.l2i_1 = parents;
    $this.m2i_1 = returnStates;
    // Inline function 'kotlin.collections.isNotEmpty' call
    // Inline function 'kotlin.collections.isEmpty' call
    // Inline function 'com.strumenta.antlrkotlin.runtime.assert' call
    if (!!($this.l2i_1.length === 0)) {
      throw AssertionError.vc(null);
    }
    // Inline function 'kotlin.collections.isNotEmpty' call
    // Inline function 'kotlin.collections.isEmpty' call
    // Inline function 'com.strumenta.antlrkotlin.runtime.assert' call
    if (!!($this.m2i_1.length === 0)) {
      throw AssertionError.vc(null);
    }
    return $this;
  }
  n25() {
    return this.m2i_1[0] === 2147483647;
  }
  static s2i(a) {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp = [a.v2i_1];
    // Inline function 'kotlin.intArrayOf' call
    var tmp$ret$3 = new Int32Array([a.w2i_1]);
    return this.n2i(tmp, tmp$ret$3);
  }
  x1v() {
    return this.m2i_1.length;
  }
  x2i(index) {
    return this.l2i_1[index];
  }
  y2i(index) {
    return this.m2i_1[index];
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
    return contentEquals(this.m2i_1, other.m2i_1) && contentEquals_0(this.l2i_1, other.l2i_1);
  }
  toString() {
    if (this.n25()) {
      return '[]';
    }
    var buf = StringBuilder.s();
    buf.t('[');
    var inductionVariable = 0;
    var last = this.m2i_1.length - 1 | 0;
    if (inductionVariable <= last)
      $l$loop: do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (i > 0) {
          buf.t(', ');
        }
        if (this.m2i_1[i] === 2147483647) {
          buf.t('$');
          continue $l$loop;
        }
        buf.af(this.m2i_1[i]);
        if (!(this.l2i_1[i] == null)) {
          buf.t(' ');
          buf.t(toString_1(this.l2i_1[i]));
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
    this.d2j_1 = label;
    this.e2j_1 = 5;
  }
  a2i() {
    return this.e2j_1;
  }
  f2j() {
    return Companion_getInstance_26().i2j(this.d2j_1);
  }
  getLabel() {
    return this.f2j();
  }
  b2i(symbol, minVocabSymbol, maxVocabSymbol) {
    return this.d2j_1 === symbol;
  }
  toString() {
    return this.d2j_1.toString();
  }
}
class DecisionState extends ATNState {
  constructor() {
    super();
    this.m2a_1 = -1;
    this.n2a_1 = false;
  }
}
class BlockStartState extends DecisionState {
  constructor() {
    super();
    this.u2e_1 = null;
  }
}
class BasicBlockStartState extends BlockStartState {
  constructor() {
    super();
    this.t2j_1 = 3;
  }
  v20() {
    return this.t2j_1;
  }
}
class BasicState extends ATNState {
  constructor() {
    super();
    this.b2k_1 = 1;
  }
  v20() {
    return this.b2k_1;
  }
}
class BlockEndState extends ATNState {
  constructor() {
    super();
    this.p2f_1 = null;
    this.q2f_1 = 8;
  }
  v20() {
    return this.q2f_1;
  }
}
class SingletonPredictionContext extends PredictionContext {
  static i2k(parent, returnState) {
    var $this = this.r2i(!(parent == null) ? Companion_instance_17.r2r(parent, returnState) : Companion_instance_17.q2r());
    $this.v2i_1 = parent;
    $this.w2i_1 = returnState;
    // Inline function 'com.strumenta.antlrkotlin.runtime.assert' call
    if (!!($this.w2i_1 === -1)) {
      throw AssertionError.vc(null);
    }
    return $this;
  }
  x1v() {
    return 1;
  }
  x2i(index) {
    // Inline function 'com.strumenta.antlrkotlin.runtime.assert' call
    if (!(index === 0)) {
      throw AssertionError.vc(null);
    }
    return this.v2i_1;
  }
  y2i(index) {
    // Inline function 'com.strumenta.antlrkotlin.runtime.assert' call
    if (!(index === 0)) {
      throw AssertionError.vc(null);
    }
    return this.w2i_1;
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
    return this.w2i_1 === other.w2i_1 && (!(this.v2i_1 == null) && equals(this.v2i_1, other.v2i_1));
  }
  toString() {
    var tmp0_safe_receiver = this.v2i_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : toString_0(tmp0_safe_receiver);
    var up = tmp1_elvis_lhs == null ? '' : tmp1_elvis_lhs;
    var tmp;
    // Inline function 'kotlin.text.isEmpty' call
    if (charSequenceLength(up) === 0) {
      var tmp_0;
      if (this.w2i_1 === 2147483647) {
        tmp_0 = '$';
      } else {
        tmp_0 = this.w2i_1.toString();
      }
      tmp = tmp_0;
    } else {
      tmp = '' + this.w2i_1 + ' ' + up;
    }
    return tmp;
  }
}
class EmptyPredictionContext extends SingletonPredictionContext {
  static h2k() {
    EmptyPredictionContext_instance = null;
    var $this = this.i2k(null, 2147483647);
    EmptyPredictionContext_instance = $this;
    $this.g2k_1 = true;
    return $this;
  }
  n25() {
    return this.g2k_1;
  }
  x1v() {
    return 1;
  }
  x2i(index) {
    return null;
  }
  y2i(index) {
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
    this.l2k_1 = 1;
    this.m2k_1 = true;
    this.n2k_1 = outermostPrecedenceReturn;
  }
  a2i() {
    return this.l2k_1;
  }
  z2h() {
    return this.m2k_1;
  }
  b2i(symbol, minVocabSymbol, maxVocabSymbol) {
    return false;
  }
  toString() {
    return 'epsilon';
  }
}
class Companion_13 {
  constructor() {
    this.o2k_1 = 0;
  }
}
class LL1Analyzer {
  constructor(atn) {
    this.a2a_1 = atn;
  }
  b2a(s, ctx) {
    return this.p2k(s, null, ctx);
  }
  p2k(s, stopState, ctx) {
    var r = IntervalSet.u1z();
    var seeThruPreds = true;
    var tmp;
    if (!(ctx == null)) {
      tmp = Companion_instance_17.q2k(ensureNotNull(s.o20_1), ctx);
    } else {
      tmp = null;
    }
    var lookContext = tmp;
    this.r2k(s, stopState, lookContext, r, HashSet.o9(), BitSet.z2c(), seeThruPreds, true);
    return r;
  }
  r2k(s, stopState, ctx, look, lookBusy, calledRuleStack, seeThruPreds, addEOF) {
    var c = ATNConfig.y2a(s, 0, ctx);
    if (!lookBusy.z1(c)) {
      return Unit_instance;
    }
    if (s === stopState) {
      if (ctx == null) {
        look.v1z(-2);
        return Unit_instance;
      } else if (ctx.n25() && addEOF) {
        look.v1z(-1);
        return Unit_instance;
      }
    }
    if (s instanceof RuleStopState) {
      if (ctx == null) {
        look.v1z(-2);
        return Unit_instance;
      } else if (ctx.n25() && addEOF) {
        look.v1z(-1);
        return Unit_instance;
      }
      if (!(ctx === EmptyPredictionContext_getInstance())) {
        var removed = calledRuleStack.d2(s.q20_1);
        try {
          calledRuleStack.s2k(s.q20_1);
          var inductionVariable = 0;
          var last = ctx.x1v();
          if (inductionVariable < last)
            do {
              var i = inductionVariable;
              inductionVariable = inductionVariable + 1 | 0;
              var returnState = this.a2a_1.b20_1.d2(ctx.y2i(i));
              this.r2k(ensureNotNull(returnState), stopState, ctx.x2i(i), look, lookBusy, calledRuleStack, seeThruPreds, addEOF);
            }
             while (inductionVariable < last);
        }finally {
          if (removed) {
            calledRuleStack.a2d(s.q20_1);
          }
        }
        return Unit_instance;
      }
    }
    var n = s.h2f();
    var inductionVariable_0 = 0;
    if (inductionVariable_0 < n)
      $l$loop: do {
        var i_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        var t = s.o22(i_0);
        if (t instanceof RuleTransition) {
          if (calledRuleStack.d2(t.m22_1.q20_1)) {
            continue $l$loop;
          }
          var newContext = Companion_instance_20.u2k(ctx, t.z22_1.p20_1);
          try {
            calledRuleStack.a2d(t.m22_1.q20_1);
            this.r2k(t.m22_1, stopState, newContext, look, lookBusy, calledRuleStack, seeThruPreds, addEOF);
          }finally {
            calledRuleStack.s2k(t.m22_1.q20_1);
          }
        } else {
          if (t instanceof AbstractPredicateTransition) {
            if (seeThruPreds) {
              this.r2k(t.m22_1, stopState, ctx, look, lookBusy, calledRuleStack, seeThruPreds, addEOF);
            } else {
              look.v1z(0);
            }
          } else {
            if (t.z2h()) {
              this.r2k(t.m22_1, stopState, ctx, look, lookBusy, calledRuleStack, seeThruPreds, addEOF);
            } else {
              if (t instanceof WildcardTransition) {
                look.c23(Companion_getInstance_26().u1w(1, this.a2a_1.a20_1));
              } else {
                var set = t.getLabel();
                if (!(set == null)) {
                  if (t instanceof NotSetTransition) {
                    set = set.t2k(Companion_getInstance_26().u1w(1, this.a2a_1.a20_1));
                  }
                  look.c23(set);
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
  static c2l(state, alt, context) {
    var $this = this.y2a(state, alt, context, Empty_getInstance());
    init_org_antlr_v4_kotlinruntime_atn_LexerATNConfig($this);
    $this.a2l_1 = false;
    $this.b2l_1 = null;
    return $this;
  }
  static d2l(c, state) {
    var $this = this.a2b(c, state, c.s2a_1, c.u2a_1);
    init_org_antlr_v4_kotlinruntime_atn_LexerATNConfig($this);
    $this.b2l_1 = c.b2l_1;
    $this.a2l_1 = checkNonGreedyDecision($this, c, state);
    return $this;
  }
  static e2l(c, state, lexerActionExecutor) {
    var $this = this.a2b(c, state, c.s2a_1, c.u2a_1);
    init_org_antlr_v4_kotlinruntime_atn_LexerATNConfig($this);
    $this.b2l_1 = lexerActionExecutor;
    $this.a2l_1 = checkNonGreedyDecision($this, c, state);
    return $this;
  }
  static f2l(c, state, context) {
    var $this = this.a2b(c, state, context, c.u2a_1);
    init_org_antlr_v4_kotlinruntime_atn_LexerATNConfig($this);
    $this.b2l_1 = c.b2l_1;
    $this.a2l_1 = checkNonGreedyDecision($this, c, state);
    return $this;
  }
  g2l() {
    return this.a2l_1;
  }
  hashCode() {
    var hashCode = MurmurHash_instance.e2b(7);
    hashCode = MurmurHash_instance.f2b(hashCode, this.q2a_1.p20_1);
    hashCode = MurmurHash_instance.f2b(hashCode, this.r2a_1);
    hashCode = MurmurHash_instance.g2b(hashCode, this.s2a_1);
    hashCode = MurmurHash_instance.g2b(hashCode, this.u2a_1);
    hashCode = MurmurHash_instance.f2b(hashCode, this.a2l_1 ? 1 : 0);
    hashCode = MurmurHash_instance.g2b(hashCode, this.b2l_1);
    hashCode = MurmurHash_instance.h2b(hashCode, 6);
    return hashCode;
  }
  c2b(other) {
    if (this === other) {
      return true;
    }
    if (!(other instanceof LexerATNConfig)) {
      return false;
    }
    if (!(this.a2l_1 === other.a2l_1)) {
      return false;
    }
    if (!Companion_getInstance_27().h2l_1.n2c(this.b2l_1, other.b2l_1)) {
      return false;
    }
    return super.c2b(other);
  }
}
class Companion_14 {
  constructor() {
    this.i2l_1 = false;
    this.j2l_1 = false;
    this.k2l_1 = 0;
    this.l2l_1 = 127;
  }
}
class SimState {
  constructor() {
    this.m2l_1 = -1;
    this.n2l_1 = 0;
    this.o2l_1 = -1;
    this.p2l_1 = null;
  }
  z24() {
    this.m2l_1 = -1;
    this.n2l_1 = 0;
    this.o2l_1 = -1;
    this.p2l_1 = null;
  }
}
class LexerATNSimulator extends ATNSimulator {
  constructor(recog, atn, decisionToDFA, sharedContextCache) {
    super(atn, sharedContextCache);
    this.p24_1 = recog;
    this.q24_1 = decisionToDFA;
    this.r24_1 = -1;
    this.s24_1 = 1;
    this.t24_1 = 0;
    this.u24_1 = 0;
    this.v24_1 = new SimState();
  }
  d25(input, mode) {
    this.u24_1 = mode;
    var mark = input.s1v();
    try {
      this.r24_1 = input.r1v();
      this.v24_1.z24();
      var dfa = this.q24_1[mode];
      var tmp;
      if (dfa.t2l_1 == null) {
        tmp = this.w2l(input);
      } else {
        var tmp_0 = dfa.t2l_1;
        tmp = this.v2l(input, tmp_0 instanceof DFAState ? tmp_0 : THROW_CCE());
      }
      return tmp;
    }finally {
      input.t1v(mark);
    }
  }
  z24() {
    this.v24_1.z24();
    this.r24_1 = -1;
    this.s24_1 = 1;
    this.t24_1 = 0;
    this.u24_1 = 0;
  }
  w2l(input) {
    var startState = this.j20_1.i20_1.d2(this.u24_1);
    if (false) {
      System_getInstance().d1v_1.c1v('matchATN mode ' + this.u24_1 + ' start: ' + startState.toString());
    }
    var oldMode = this.u24_1;
    var s0Closure = this.x2l(input, startState);
    var suppressEdge = s0Closure.t2c_1;
    s0Closure.t2c_1 = false;
    var next = this.y2l(s0Closure);
    if (!suppressEdge) {
      this.q24_1[this.u24_1].t2l_1 = next;
    }
    var predict = this.v2l(input, next);
    if (false) {
      System_getInstance().d1v_1.c1v('DFA after matchATN: ' + this.q24_1[oldMode].z2l());
    }
    return predict;
  }
  v2l(input, ds0) {
    if (false) {
      System_getInstance().d1v_1.c1v('start state closure=' + ds0.y2g_1.toString());
    }
    if (ds0.a2h_1) {
      this.a2m(this.v24_1, input, ds0);
    }
    var t = input.z1v(1);
    var s = ds0;
    $l$loop_0: while (true) {
      if (false) {
        System_getInstance().d1v_1.c1v('execATN loop starting closure: ' + s.y2g_1.toString());
      }
      var tmp0_elvis_lhs = this.b2m(s, t);
      var target = tmp0_elvis_lhs == null ? this.c2m(input, s, t) : tmp0_elvis_lhs;
      if (target === Companion_getInstance_11().g2h_1) {
        break $l$loop_0;
      }
      if (!(t === -1)) {
        this.r25(input);
      }
      if (target.a2h_1) {
        this.a2m(this.v24_1, input, target);
        if (t === -1) {
          break $l$loop_0;
        }
      }
      t = input.z1v(1);
      s = target;
    }
    return this.d2m(this.v24_1, input, s.y2g_1, t);
  }
  b2m(s, t) {
    if (s.z2g_1 == null || t < 0 || t > 127) {
      return null;
    }
    var target = ensureNotNull(s.z2g_1)[t - 0 | 0];
    if (false && !(target == null)) {
      System_getInstance().d1v_1.c1v('reuse state ' + s.x2g_1 + ' edge to ' + target.x2g_1);
    }
    return target;
  }
  c2m(input, s, t) {
    var reach = new OrderedATNConfigSet();
    this.e2m(input, s.y2g_1, reach, t);
    if (reach.u()) {
      if (!reach.t2c_1) {
        this.f2m(s, t, Companion_getInstance_11().g2h_1);
      }
      return Companion_getInstance_11().g2h_1;
    }
    return this.g2m(s, t, reach);
  }
  d2m(prevAccept, input, reach, t) {
    if (!(prevAccept.p2l_1 == null)) {
      var lexerActionExecutor = ensureNotNull(prevAccept.p2l_1).c2h_1;
      this.h2m(input, lexerActionExecutor, this.r24_1, prevAccept.m2l_1, prevAccept.n2l_1, prevAccept.o2l_1);
      return ensureNotNull(prevAccept.p2l_1).b2h_1;
    }
    if (t === -1 && input.r1v() === this.r24_1) {
      return -1;
    }
    throw LexerNoViableAltException.l26(ensureNotNull(this.p24_1), input, this.r24_1, reach);
  }
  e2m(input, closure, reach, t) {
    var skipAlt = 0;
    var _iterator__ex2g4s = closure.w();
    $l$loop: while (_iterator__ex2g4s.x()) {
      var c = _iterator__ex2g4s.y();
      var currentAltReachedAcceptState = c.r2a_1 === skipAlt;
      var tmp;
      if (currentAltReachedAcceptState) {
        tmp = (c instanceof LexerATNConfig ? c : THROW_CCE()).g2l();
      } else {
        tmp = false;
      }
      if (tmp) {
        continue $l$loop;
      }
      if (false) {
        System_getInstance().d1v_1.c1v('testing ' + this.i2m(t) + ' at ' + c.i2b(this.p24_1, true));
      }
      var n = c.q2a_1.h2f();
      var inductionVariable = 0;
      if (inductionVariable < n)
        $l$loop_0: do {
          var ti = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var trans = c.q2a_1.o22(ti);
          var target = this.j2m(trans, t);
          if (!(target == null)) {
            var lexerActionExecutor = (c instanceof LexerATNConfig ? c : THROW_CCE()).b2l_1;
            if (!(lexerActionExecutor == null)) {
              lexerActionExecutor = lexerActionExecutor.m2m(input.r1v() - this.r24_1 | 0);
            }
            var treatEofAsEpsilon = t === -1;
            if (this.n2m(input, LexerATNConfig.e2l(c, target, lexerActionExecutor), reach, currentAltReachedAcceptState, true, treatEofAsEpsilon)) {
              skipAlt = c.r2a_1;
              break $l$loop_0;
            }
          }
        }
         while (inductionVariable < n);
    }
  }
  h2m(input, lexerActionExecutor, startIndex, index, line, charPos) {
    if (false) {
      System_getInstance().d1v_1.c1v('ACTION ' + toString_1(lexerActionExecutor));
    }
    input.u1v(index);
    this.s24_1 = line;
    this.t24_1 = charPos;
    if (!(lexerActionExecutor == null) && !(this.p24_1 == null)) {
      lexerActionExecutor.o2m(this.p24_1, input, startIndex);
    }
  }
  j2m(trans, t) {
    var tmp;
    if (trans.b2i(t, 0, 1114111)) {
      tmp = trans.m22_1;
    } else {
      tmp = null;
    }
    return tmp;
  }
  x2l(input, p) {
    var initialContext = EmptyPredictionContext_getInstance();
    var configs = new OrderedATNConfigSet();
    var inductionVariable = 0;
    var last = p.h2f();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var target = p.o22(i).m22_1;
        var c = LexerATNConfig.c2l(target, i + 1 | 0, initialContext);
        this.n2m(input, c, configs, false, false, false);
      }
       while (inductionVariable < last);
    return configs;
  }
  n2m(input, config, configs, currentAltReachedAcceptState, speculative, treatEofAsEpsilon) {
    var tempCurrentAltReachedAcceptState = currentAltReachedAcceptState;
    if (false) {
      System_getInstance().d1v_1.c1v('closure(' + config.i2b(this.p24_1, true) + ')');
    }
    var tmp = config.q2a_1;
    if (tmp instanceof RuleStopState) {
      if (false) {
        if (!(this.p24_1 == null)) {
          System_getInstance().d1v_1.c1v('closure at ' + this.p24_1.y21()[config.q2a_1.q20_1] + ' rule stop ' + config.toString());
        } else {
          System_getInstance().d1v_1.c1v('closure at rule stop ' + config.toString());
        }
      }
      if (config.s2a_1 == null || ensureNotNull(config.s2a_1).z2i()) {
        if (config.s2a_1 == null || ensureNotNull(config.s2a_1).n25()) {
          configs.b2d(config);
          return true;
        }
        configs.b2d(LexerATNConfig.f2l(config, config.q2a_1, EmptyPredictionContext_getInstance()));
        tempCurrentAltReachedAcceptState = true;
      }
      if (!(config.s2a_1 == null) && !ensureNotNull(config.s2a_1).n25()) {
        var inductionVariable = 0;
        var last = ensureNotNull(config.s2a_1).x1v();
        if (inductionVariable < last)
          do {
            var i = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            if (!(ensureNotNull(config.s2a_1).y2i(i) === 2147483647)) {
              var newContext = ensureNotNull(config.s2a_1).x2i(i);
              var returnState = this.j20_1.b20_1.d2(ensureNotNull(config.s2a_1).y2i(i));
              var c = LexerATNConfig.f2l(config, ensureNotNull(returnState), ensureNotNull(newContext));
              tempCurrentAltReachedAcceptState = this.n2m(input, c, configs, tempCurrentAltReachedAcceptState, speculative, treatEofAsEpsilon);
            }
          }
           while (inductionVariable < last);
      }
      return tempCurrentAltReachedAcceptState;
    }
    if (!config.q2a_1.t2g()) {
      if (!tempCurrentAltReachedAcceptState || !config.g2l()) {
        configs.b2d(config);
      }
    }
    var p = config.q2a_1;
    var inductionVariable_0 = 0;
    var last_0 = p.h2f();
    if (inductionVariable_0 < last_0)
      do {
        var i_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        var t = p.o22(i_0);
        var c_0 = this.p2m(input, config, t, configs, speculative, treatEofAsEpsilon);
        if (!(c_0 == null)) {
          tempCurrentAltReachedAcceptState = this.n2m(input, c_0, configs, tempCurrentAltReachedAcceptState, speculative, treatEofAsEpsilon);
        }
      }
       while (inductionVariable_0 < last_0);
    return tempCurrentAltReachedAcceptState;
  }
  p2m(input, config, t, configs, speculative, treatEofAsEpsilon) {
    var c = null;
    switch (t.a2i()) {
      case 3:
        var ruleTransition = t instanceof RuleTransition ? t : THROW_CCE();
        var newContext = Companion_instance_20.u2k(config.s2a_1, ruleTransition.z22_1.p20_1);
        c = LexerATNConfig.f2l(config, t.m22_1, newContext);
        break;
      case 10:
        throw UnsupportedOperationException.l9('Precedence predicates are not supported in lexers.');
      case 4:
        var pt = t instanceof PredicateTransition ? t : THROW_CCE();
        if (false) {
          System_getInstance().d1v_1.c1v('EVAL rule ' + pt.s2m_1 + ':' + pt.t2m_1);
        }

        configs.t2c_1 = true;
        if (this.x2m(input, pt.s2m_1, pt.t2m_1, speculative)) {
          c = LexerATNConfig.d2l(config, t.m22_1);
        }

        break;
      case 6:
        if (config.s2a_1 == null || ensureNotNull(config.s2a_1).z2i()) {
          var tmp = Companion_instance_15;
          var tmp_0 = ensureNotNull(this.j20_1.h20_1);
          var lexerActionExecutor = tmp.y2m(config.b2l_1, tmp_0[(t instanceof ActionTransition ? t : THROW_CCE()).f2i_1]);
          c = LexerATNConfig.e2l(config, t.m22_1, lexerActionExecutor);
        } else {
          c = LexerATNConfig.d2l(config, t.m22_1);
        }

        break;
      case 1:
        c = LexerATNConfig.d2l(config, t.m22_1);
        break;
      case 5:
      case 2:
      case 7:
        if (treatEofAsEpsilon) {
          if (t.b2i(-1, 0, 1114111)) {
            c = LexerATNConfig.d2l(config, t.m22_1);
          }
        }

        break;
    }
    return c;
  }
  x2m(input, ruleIndex, predIndex, speculative) {
    if (this.p24_1 == null) {
      return true;
    }
    if (!speculative) {
      return this.p24_1.x25(null, ruleIndex, predIndex);
    }
    var savedCharPositionInLine = this.t24_1;
    var savedLine = this.s24_1;
    var index = input.r1v();
    var marker = input.s1v();
    try {
      this.r25(input);
      return this.p24_1.x25(null, ruleIndex, predIndex);
    }finally {
      this.t24_1 = savedCharPositionInLine;
      this.s24_1 = savedLine;
      input.u1v(index);
      input.t1v(marker);
    }
  }
  a2m(settings, input, dfaState) {
    settings.m2l_1 = input.r1v();
    settings.n2l_1 = this.s24_1;
    settings.o2l_1 = this.t24_1;
    settings.p2l_1 = dfaState;
  }
  g2m(from, t, q) {
    var suppressEdge = q.t2c_1;
    q.t2c_1 = false;
    var to = this.y2l(q);
    if (suppressEdge) {
      return to;
    }
    this.f2m(from, t, to);
    return to;
  }
  f2m(p, t, q) {
    if (t < 0 || t > 127) {
      return Unit_instance;
    }
    if (false) {
      System_getInstance().d1v_1.c1v('EDGE ' + p.toString() + ' -> ' + q.toString() + ' upon ' + toString(numberToChar(t)));
    }
    // Inline function 'com.strumenta.antlrkotlin.runtime.synchronized' call
    if (p.z2g_1 == null) {
      var tmp = p;
      // Inline function 'kotlin.arrayOfNulls' call
      tmp.z2g_1 = Array(128);
    }
    ensureNotNull(p.z2g_1)[t - 0 | 0] = q;
  }
  y2l(configs) {
    // Inline function 'com.strumenta.antlrkotlin.runtime.assert' call
    if (!!configs.t2c_1) {
      throw AssertionError.vc(null);
    }
    var proposed = DFAState.f2h(configs);
    var firstConfigWithRuleStopState = null;
    var _iterator__ex2g4s = configs.w();
    $l$loop: while (_iterator__ex2g4s.x()) {
      var c = _iterator__ex2g4s.y();
      var tmp = c.q2a_1;
      if (tmp instanceof RuleStopState) {
        firstConfigWithRuleStopState = c;
        break $l$loop;
      }
    }
    if (!(firstConfigWithRuleStopState == null)) {
      proposed.a2h_1 = true;
      var tmp_0 = proposed;
      tmp_0.c2h_1 = (firstConfigWithRuleStopState instanceof LexerATNConfig ? firstConfigWithRuleStopState : THROW_CCE()).b2l_1;
      proposed.b2h_1 = ensureNotNull(this.j20_1.g20_1)[firstConfigWithRuleStopState.q2a_1.q20_1];
    }
    var dfa = this.q24_1[this.u24_1];
    // Inline function 'com.strumenta.antlrkotlin.runtime.synchronized' call
    dfa.s2l_1;
    var existing = dfa.s2l_1.r3(proposed);
    if (!(existing == null)) {
      return existing;
    }
    proposed.x2g_1 = dfa.s2l_1.b2();
    configs.c2a(true);
    proposed.y2g_1 = configs;
    // Inline function 'kotlin.collections.set' call
    dfa.s2l_1.l3(proposed, proposed);
    return proposed;
  }
  r25(input) {
    var curChar = input.z1v(1);
    if (numberToChar(curChar) === _Char___init__impl__6a9atx(10)) {
      this.s24_1 = this.s24_1 + 1 | 0;
      this.t24_1 = 0;
    } else {
      this.t24_1 = this.t24_1 + 1 | 0;
    }
    input.y1v();
  }
  i2m(t) {
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
  y2m(lexerActionExecutor, lexerAction) {
    if (lexerActionExecutor == null) {
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp$ret$0 = [lexerAction];
      return new LexerActionExecutor(tmp$ret$0);
    }
    var lexerActions = copyOf(lexerActionExecutor.k2m_1, lexerActionExecutor.k2m_1.length + 1 | 0);
    lexerActions[get_lastIndex(lexerActions)] = lexerAction;
    return new LexerActionExecutor(isArray(lexerActions) ? lexerActions : THROW_CCE());
  }
}
class LexerActionExecutor {
  constructor(lexerActions) {
    this.k2m_1 = lexerActions;
    var hash = MurmurHash_instance.z2m();
    var indexedObject = this.k2m_1;
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var lexerAction = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      hash = MurmurHash_instance.g2b(hash, lexerAction);
    }
    this.l2m_1 = MurmurHash_instance.h2b(hash, this.k2m_1.length);
  }
  m2m(offset) {
    var updatedLexerActions = null;
    var inductionVariable = 0;
    var last = this.k2m_1.length - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp;
        if (this.k2m_1[i].a2n()) {
          var tmp_0 = this.k2m_1[i];
          tmp = !(tmp_0 instanceof LexerIndexedCustomAction);
        } else {
          tmp = false;
        }
        if (tmp) {
          if (updatedLexerActions == null) {
            // Inline function 'kotlin.collections.copyOf' call
            // Inline function 'kotlin.js.asDynamic' call
            updatedLexerActions = this.k2m_1.slice();
          }
          updatedLexerActions[i] = new LexerIndexedCustomAction(offset, this.k2m_1[i]);
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
  o2m(lexer, input, startIndex) {
    var requiresSeek = false;
    var stopIndex = input.r1v();
    try {
      var indexedObject = this.k2m_1;
      var inductionVariable = 0;
      var last = indexedObject.length;
      while (inductionVariable < last) {
        var lexerAction = indexedObject[inductionVariable];
        inductionVariable = inductionVariable + 1 | 0;
        var mutableLexerAction = lexerAction;
        if (mutableLexerAction instanceof LexerIndexedCustomAction) {
          var offset = mutableLexerAction.b2n_1;
          input.u1v(startIndex + offset | 0);
          mutableLexerAction = mutableLexerAction.c2n_1;
          requiresSeek = !((startIndex + offset | 0) === stopIndex);
        } else {
          if (mutableLexerAction.a2n()) {
            input.u1v(stopIndex);
            requiresSeek = false;
          }
        }
        mutableLexerAction.e2n(lexer);
      }
    }finally {
      if (requiresSeek) {
        input.u1v(stopIndex);
      }
    }
  }
  hashCode() {
    return this.l2m_1;
  }
  equals(other) {
    if (other === this) {
      return true;
    }
    if (!(other instanceof LexerActionExecutor)) {
      return false;
    }
    return this.l2m_1 === other.l2m_1 && contentEquals_0(this.k2m_1, other.k2m_1);
  }
}
class LexerActionType extends Enum {}
class LexerChannelAction {
  constructor(channel) {
    this.f2n_1 = channel;
    this.g2n_1 = LexerActionType_CHANNEL_getInstance();
    this.h2n_1 = false;
  }
  a2n() {
    return this.h2n_1;
  }
  e2n(lexer) {
    lexer.b24_1 = this.f2n_1;
  }
  hashCode() {
    var hash = MurmurHash_instance.z2m();
    hash = MurmurHash_instance.f2b(hash, this.g2n_1.d1_1);
    hash = MurmurHash_instance.f2b(hash, this.f2n_1);
    return MurmurHash_instance.h2b(hash, 2);
  }
  equals(other) {
    if (other === this) {
      return true;
    }
    if (!(other instanceof LexerChannelAction)) {
      return false;
    }
    return this.f2n_1 === other.f2n_1;
  }
  toString() {
    return 'channel(' + this.f2n_1 + ')';
  }
}
class LexerCustomAction {
  constructor(ruleIndex, actionIndex) {
    this.i2n_1 = ruleIndex;
    this.j2n_1 = actionIndex;
    this.k2n_1 = LexerActionType_CUSTOM_getInstance();
    this.l2n_1 = true;
  }
  m2n() {
    return this.k2n_1;
  }
  a2n() {
    return this.l2n_1;
  }
  e2n(lexer) {
    return lexer.z25(null, this.i2n_1, this.j2n_1);
  }
  hashCode() {
    var hash = MurmurHash_instance.z2m();
    hash = MurmurHash_instance.f2b(hash, this.m2n().d1_1);
    hash = MurmurHash_instance.f2b(hash, this.i2n_1);
    hash = MurmurHash_instance.f2b(hash, this.j2n_1);
    return MurmurHash_instance.h2b(hash, 3);
  }
  equals(other) {
    if (other === this) {
      return true;
    }
    if (!(other instanceof LexerCustomAction)) {
      return false;
    }
    return this.i2n_1 === other.i2n_1 && this.j2n_1 === other.j2n_1;
  }
}
class LexerIndexedCustomAction {
  constructor(offset, action) {
    this.b2n_1 = offset;
    this.c2n_1 = action;
    this.d2n_1 = true;
  }
  a2n() {
    return this.d2n_1;
  }
  e2n(lexer) {
    return this.c2n_1.e2n(lexer);
  }
  hashCode() {
    var hash = MurmurHash_instance.z2m();
    hash = MurmurHash_instance.f2b(hash, this.b2n_1);
    hash = MurmurHash_instance.g2b(hash, this.c2n_1);
    return MurmurHash_instance.h2b(hash, 2);
  }
  equals(other) {
    if (other === this) {
      return true;
    }
    if (!(other instanceof LexerIndexedCustomAction)) {
      return false;
    }
    return this.b2n_1 === other.b2n_1 && equals(this.c2n_1, other.c2n_1);
  }
}
class LexerModeAction {
  constructor(mode) {
    this.n2n_1 = mode;
    this.o2n_1 = LexerActionType_MODE_getInstance();
    this.p2n_1 = false;
  }
  a2n() {
    return this.p2n_1;
  }
  e2n(lexer) {
    return lexer.j25(this.n2n_1);
  }
  hashCode() {
    var hash = MurmurHash_instance.z2m();
    hash = MurmurHash_instance.f2b(hash, this.o2n_1.d1_1);
    hash = MurmurHash_instance.f2b(hash, this.n2n_1);
    return MurmurHash_instance.h2b(hash, 2);
  }
  equals(other) {
    if (other === this) {
      return true;
    }
    if (!(other instanceof LexerModeAction)) {
      return false;
    }
    return this.n2n_1 === other.n2n_1;
  }
  toString() {
    return 'mode(' + this.n2n_1 + ')';
  }
}
class LexerMoreAction {
  constructor() {
    LexerMoreAction_instance = this;
    this.q2n_1 = LexerActionType_MORE_getInstance();
    this.r2n_1 = false;
  }
  a2n() {
    return this.r2n_1;
  }
  e2n(lexer) {
    return lexer.i25();
  }
  hashCode() {
    var hash = MurmurHash_instance.z2m();
    hash = MurmurHash_instance.f2b(hash, this.q2n_1.d1_1);
    return MurmurHash_instance.h2b(hash, 1);
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
    this.s2n_1 = LexerActionType_POP_MODE_getInstance();
    this.t2n_1 = false;
  }
  a2n() {
    return this.t2n_1;
  }
  e2n(lexer) {
    lexer.m25();
  }
  hashCode() {
    var hash = MurmurHash_instance.z2m();
    hash = MurmurHash_instance.f2b(hash, this.s2n_1.d1_1);
    return MurmurHash_instance.h2b(hash, 1);
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
    this.u2n_1 = mode;
    this.v2n_1 = LexerActionType_PUSH_MODE_getInstance();
    this.w2n_1 = false;
  }
  a2n() {
    return this.w2n_1;
  }
  e2n(lexer) {
    return lexer.k25(this.u2n_1);
  }
  hashCode() {
    var hash = MurmurHash_instance.z2m();
    hash = MurmurHash_instance.f2b(hash, this.v2n_1.d1_1);
    hash = MurmurHash_instance.f2b(hash, this.u2n_1);
    return MurmurHash_instance.h2b(hash, 2);
  }
  equals(other) {
    if (other === this) {
      return true;
    }
    if (!(other instanceof LexerPushModeAction)) {
      return false;
    }
    return this.u2n_1 === other.u2n_1;
  }
  toString() {
    return 'pushMode(' + this.u2n_1 + ')';
  }
}
class LexerSkipAction {
  constructor() {
    LexerSkipAction_instance = this;
    this.x2n_1 = LexerActionType_SKIP_getInstance();
    this.y2n_1 = false;
  }
  a2n() {
    return this.y2n_1;
  }
  e2n(lexer) {
    return lexer.h25();
  }
  hashCode() {
    var hash = MurmurHash_instance.z2m();
    hash = MurmurHash_instance.f2b(hash, this.x2n_1.d1_1);
    return MurmurHash_instance.h2b(hash, 1);
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
    this.z2n_1 = type;
    this.a2o_1 = LexerActionType_TYPE_getInstance();
    this.b2o_1 = false;
  }
  a2n() {
    return this.b2o_1;
  }
  e2n(lexer) {
    lexer.c24_1 = this.z2n_1;
  }
  hashCode() {
    var hash = MurmurHash_instance.z2m();
    hash = MurmurHash_instance.f2b(hash, this.a2o_1.d1_1);
    hash = MurmurHash_instance.f2b(hash, this.z2n_1);
    return MurmurHash_instance.h2b(hash, 2);
  }
  equals(other) {
    if (other === this) {
      return true;
    }
    if (!(other instanceof LexerTypeAction)) {
      return false;
    }
    return this.z2n_1 === other.z2n_1;
  }
  toString() {
    return 'type(' + this.z2n_1 + ')';
  }
}
class LoopEndState extends ATNState {
  constructor() {
    super();
    this.j2e_1 = null;
    this.k2e_1 = 12;
  }
  v20() {
    return this.k2e_1;
  }
}
class SetTransition extends Transition {
  constructor(target, set) {
    super(target);
    var tmp = this;
    tmp.j2o_1 = set == null ? Companion_getInstance_26().i2j(0) : set;
    this.k2o_1 = 7;
  }
  a2i() {
    return this.k2o_1;
  }
  f2j() {
    return this.j2o_1;
  }
  getLabel() {
    return this.f2j();
  }
  b2i(symbol, minVocabSymbol, maxVocabSymbol) {
    return this.j2o_1.vk(symbol);
  }
  toString() {
    return this.j2o_1.toString();
  }
}
class NotSetTransition extends SetTransition {
  constructor(target, set) {
    super(target, set);
    this.g2o_1 = 8;
  }
  a2i() {
    return this.g2o_1;
  }
  b2i(symbol, minVocabSymbol, maxVocabSymbol) {
    return (minVocabSymbol <= symbol ? symbol <= maxVocabSymbol : false) && !super.b2i(symbol, minVocabSymbol, maxVocabSymbol);
  }
  toString() {
    return '~' + super.toString();
  }
}
class LexerConfigHashSet extends AbstractConfigHashSet {
  constructor() {
    super(Companion_getInstance_27().h2l_1);
  }
}
class OrderedATNConfigSet extends ATNConfigSet {
  constructor() {
    super();
    this.p2c_1 = new LexerConfigHashSet();
  }
}
class Companion_16 {
  constructor() {
    Companion_instance_16 = this;
    this.l2o_1 = false;
    this.m2o_1 = false;
    this.n2o_1 = false;
    this.o2o_1 = false;
    this.p2o_1 = toBoolean(getSafeEnv(this, 'TURN_OFF_LR_LOOP_ENTRY_BRANCH_OPT', 'false'));
  }
  q2o(configs) {
    var alt = 0;
    var _iterator__ex2g4s = configs.w();
    while (_iterator__ex2g4s.x()) {
      var c = _iterator__ex2g4s.y();
      if (alt === 0) {
        alt = c.r2a_1;
      } else if (!(c.r2a_1 === alt)) {
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
    this.t26_1 = parser;
    this.u26_1 = decisionToDFA;
    this.v26_1 = PredictionMode_LL_getInstance();
    this.w26_1 = null;
    this.x26_1 = null;
    this.y26_1 = 0;
    this.z26_1 = null;
    this.a27_1 = null;
  }
  z24() {
  }
  r2o(input, decision, outerContext) {
    var tempOuterContext = outerContext;
    if (Companion_getInstance_16().l2o_1 || Companion_getInstance_16().m2o_1) {
      System_getInstance().d1v_1.c1v('adaptivePredict decision ' + decision + (' exec LA(1)==' + this.s2o(input)) + (' line ' + ensureNotNull(input.e1w(1)).e1e() + ':' + ensureNotNull(input.e1w(1)).i1x()));
    }
    this.x26_1 = input;
    this.y26_1 = input.r1v();
    this.z26_1 = tempOuterContext;
    var dfa = this.u26_1[decision];
    this.a27_1 = dfa;
    var m = input.s1v();
    var index = this.y26_1;
    try {
      var tmp;
      if (dfa.u2l_1) {
        tmp = dfa.t2o(this.t26_1.p26());
      } else {
        tmp = dfa.t2l_1;
      }
      var s0 = tmp;
      if (s0 == null) {
        if (tempOuterContext == null) {
          tempOuterContext = Companion_getInstance_3().g28_1;
        }
        var fullCtx = false;
        var s0Closure = this.u2o(dfa.q2l_1, Companion_getInstance_3().g28_1, fullCtx);
        if (dfa.u2l_1) {
          ensureNotNull(dfa.t2l_1).y2g_1 = s0Closure;
          s0Closure = this.w2o(s0Closure);
          s0 = this.v2o(dfa, DFAState.f2h(s0Closure));
          dfa.x2o(this.t26_1.p26(), s0);
        } else {
          s0 = this.v2o(dfa, DFAState.f2h(s0Closure));
          dfa.t2l_1 = s0;
        }
      }
      var alt = this.y2o(dfa, s0, input, index, ensureNotNull(tempOuterContext));
      if (Companion_getInstance_16().l2o_1) {
        System_getInstance().d1v_1.c1v('DFA after predictATN: ' + dfa.x21(this.t26_1.t1x()));
      }
      return alt;
    }finally {
      this.w26_1 = null;
      this.a27_1 = null;
      input.u1v(index);
      input.t1v(m);
    }
  }
  y2o(dfa, s0, input, startIndex, outerContext) {
    if (Companion_getInstance_16().l2o_1 || Companion_getInstance_16().m2o_1) {
      System_getInstance().d1v_1.c1v('execATN decision ' + dfa.r2l_1 + (', DFA state ' + s0.toString()) + (', LA(1)==' + this.s2o(input)) + (', line ' + ensureNotNull(input.e1w(1)).e1e() + ':' + ensureNotNull(input.e1w(1)).i1x()));
    }
    var previousD = s0;
    var t = input.z1v(1);
    while (true) {
      var tmp0_elvis_lhs = this.b2m(previousD, t);
      var D = tmp0_elvis_lhs == null ? this.z2o(dfa, previousD, t) : tmp0_elvis_lhs;
      if (D === Companion_getInstance_11().g2h_1) {
        var e = this.a2p(input, outerContext, previousD.y2g_1, startIndex);
        input.u1v(startIndex);
        var alt = this.b2p(previousD.y2g_1, outerContext);
        if (!(alt === 0)) {
          return alt;
        }
        throw e;
      }
      if (ensureNotNull(D).d2h_1 && !this.v26_1.equals(PredictionMode_SLL_getInstance())) {
        var conflictingAlts = D.y2g_1.s2c_1;
        if (!(D.e2h_1 == null)) {
          if (Companion_getInstance_16().l2o_1) {
            System_getInstance().d1v_1.c1v('DFA state has preds in DFA sim LL failover');
          }
          var conflictIndex = input.r1v();
          if (!(conflictIndex === startIndex)) {
            input.u1v(startIndex);
          }
          conflictingAlts = this.c2p(ensureNotNull(D.e2h_1), outerContext, true);
          if (conflictingAlts.e2p() === 1) {
            if (Companion_getInstance_16().l2o_1) {
              System_getInstance().d1v_1.c1v('Full LL avoided');
            }
            return conflictingAlts.d2p(0);
          }
          if (!(conflictIndex === startIndex)) {
            input.u1v(conflictIndex);
          }
        }
        if (Companion_getInstance_16().n2o_1) {
          System_getInstance().d1v_1.c1v('ctx sensitive state ' + outerContext.toString() + ' in ' + toString_1(D));
        }
        var fullCtx = true;
        var s0Closure = this.u2o(dfa.q2l_1, outerContext, fullCtx);
        this.f2p(dfa, ensureNotNull(conflictingAlts), D.y2g_1, startIndex, input.r1v());
        return this.g2p(dfa, D, s0Closure, input, startIndex, outerContext);
      }
      if (D.a2h_1) {
        if (D.e2h_1 == null) {
          return D.b2h_1;
        }
        var stopIndex = input.r1v();
        input.u1v(startIndex);
        var alts = this.c2p(ensureNotNull(D.e2h_1), outerContext, true);
        switch (alts.e2p()) {
          case 0:
            throw this.a2p(input, outerContext, D.y2g_1, startIndex);
          case 1:
            return alts.d2p(0);
          default:
            this.h2p(dfa, D, startIndex, stopIndex, false, alts, D.y2g_1);
            return alts.d2p(0);
        }
      }
      previousD = D;
      if (!(t === -1)) {
        input.y1v();
        t = input.z1v(1);
      }
    }
  }
  b2m(previousD, t) {
    var edges = previousD.z2g_1;
    if (edges == null || (t + 1 | 0) < 0 || (t + 1 | 0) >= edges.length) {
      return null;
    }
    return edges[t + 1 | 0];
  }
  z2o(dfa, previousD, t) {
    var reach = this.i2p(previousD.y2g_1, t, false);
    if (reach == null) {
      this.j2p(dfa, previousD, t, Companion_getInstance_11().g2h_1);
      return Companion_getInstance_11().g2h_1;
    }
    var D = DFAState.f2h(reach);
    var predictedAlt = Companion_getInstance_16().q2o(reach);
    if (Companion_getInstance_16().l2o_1) {
      var altSubSets = Companion_instance_18.k2p(reach);
      System_getInstance().d1v_1.c1v('SLL altSubSets=' + toString_0(altSubSets) + (', configs=' + toString_1(reach)) + (', predict=' + predictedAlt) + (', allSubsetsConflict=' + Companion_instance_18.l2p(altSubSets)) + (', conflictingAlts=' + this.m2p(reach).toString()));
    }
    if (!(predictedAlt === 0)) {
      D.a2h_1 = true;
      D.y2g_1.r2c_1 = predictedAlt;
      D.b2h_1 = predictedAlt;
    } else if (Companion_instance_18.n2p(this.v26_1, reach)) {
      D.y2g_1.s2c_1 = this.m2p(reach);
      D.d2h_1 = true;
      D.a2h_1 = true;
      D.b2h_1 = ensureNotNull(D.y2g_1.s2c_1).d2p(0);
    }
    if (D.a2h_1 && D.y2g_1.t2c_1) {
      this.o2p(D, ensureNotNull(this.j20_1.o2a(dfa.r2l_1)));
      if (!(D.e2h_1 == null)) {
        D.b2h_1 = 0;
      }
    }
    return this.j2p(dfa, previousD, t, D);
  }
  o2p(dfaState, decisionState) {
    var nAlts = decisionState.h2f();
    var altsToCollectPredsFrom = this.p2p(dfaState.y2g_1);
    var altToPred = this.q2p(altsToCollectPredsFrom, dfaState.y2g_1, nAlts);
    if (!(altToPred == null)) {
      dfaState.e2h_1 = this.r2p(altsToCollectPredsFrom, altToPred);
      dfaState.b2h_1 = 0;
    } else {
      dfaState.b2h_1 = altsToCollectPredsFrom.d2p(0);
    }
  }
  g2p(dfa, D, s0, input, startIndex, outerContext) {
    if (Companion_getInstance_16().l2o_1 || Companion_getInstance_16().m2o_1) {
      System_getInstance().d1v_1.c1v('execATNWithFullContext ' + s0.toString());
    }
    var fullCtx = true;
    var foundExactAmbig = false;
    var reach;
    var previous = s0;
    input.u1v(startIndex);
    var t = input.z1v(1);
    var predictedAlt;
    $l$loop_1: while (true) {
      reach = this.i2p(previous, t, fullCtx);
      if (reach == null) {
        var e = this.a2p(input, outerContext, previous, startIndex);
        input.u1v(startIndex);
        var alt = this.b2p(previous, outerContext);
        if (!(alt === 0)) {
          return alt;
        }
        throw e;
      }
      var altSubSets = Companion_instance_18.k2p(reach);
      if (Companion_getInstance_16().l2o_1) {
        System_getInstance().d1v_1.c1v('LL altSubSets=' + toString_0(altSubSets) + (', predict=' + Companion_instance_18.s2p(altSubSets)) + (', resolvesToJustOneViableAlt=' + Companion_instance_18.t2p(altSubSets)));
      }
      reach.r2c_1 = Companion_getInstance_16().q2o(reach);
      if (!(reach.r2c_1 === 0)) {
        predictedAlt = reach.r2c_1;
        break $l$loop_1;
      }
      if (!this.v26_1.equals(PredictionMode_LL_EXACT_AMBIG_DETECTION_getInstance())) {
        predictedAlt = Companion_instance_18.t2p(altSubSets);
        if (!(predictedAlt === 0)) {
          break $l$loop_1;
        }
      } else {
        if (Companion_instance_18.l2p(altSubSets) && Companion_instance_18.v2p(altSubSets)) {
          foundExactAmbig = true;
          predictedAlt = Companion_instance_18.u2p(altSubSets);
          break $l$loop_1;
        }
      }
      previous = reach;
      if (!(t === -1)) {
        input.y1v();
        t = input.z1v(1);
      }
    }
    if (!(ensureNotNull(reach).r2c_1 === 0)) {
      this.w2p(dfa, predictedAlt, reach, startIndex, input.r1v());
      return predictedAlt;
    }
    this.h2p(dfa, D, startIndex, input.r1v(), foundExactAmbig, reach.x2c(), reach);
    return predictedAlt;
  }
  i2p(closure, t, fullCtx) {
    if (Companion_getInstance_16().l2o_1) {
      System_getInstance().d1v_1.c1v('in computeReachSet, starting closure: ' + closure.toString());
    }
    if (this.w26_1 == null) {
      this.w26_1 = new DoubleKeyMap();
    }
    var intermediate = new ATNConfigSet(fullCtx);
    var skippedStopStates = null;
    var _iterator__ex2g4s = closure.w();
    $l$loop: while (_iterator__ex2g4s.x()) {
      var c = _iterator__ex2g4s.y();
      if (Companion_getInstance_16().l2o_1) {
        System_getInstance().d1v_1.c1v('testing ' + this.i2m(t) + ' at ' + c.toString());
      }
      var tmp = c.q2a_1;
      if (tmp instanceof RuleStopState) {
        // Inline function 'com.strumenta.antlrkotlin.runtime.assert' call
        if (!ensureNotNull(c.s2a_1).n25()) {
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
      var n = c.q2a_1.h2f();
      var inductionVariable = 0;
      if (inductionVariable < n)
        do {
          var ti = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var trans = c.q2a_1.o22(ti);
          var target = this.j2m(trans, t);
          if (!(target == null)) {
            intermediate.c2d(ATNConfig.a2b(c, target), this.w26_1);
          }
        }
         while (inductionVariable < n);
    }
    var reach = null;
    if (skippedStopStates == null && !(t === -1)) {
      if (intermediate.b2() === 1) {
        reach = intermediate;
      } else if (!(Companion_getInstance_16().q2o(intermediate) === 0)) {
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
        this.x2p(c_0, reach, closureBusy, false, fullCtx, treatEofAsEpsilon);
      }
    }
    if (t === -1) {
      reach = this.y2p(reach, reach === intermediate);
    }
    if (!(skippedStopStates == null) && (!fullCtx || !Companion_instance_18.z2p(reach))) {
      // Inline function 'kotlin.collections.isNotEmpty' call
      // Inline function 'com.strumenta.antlrkotlin.runtime.assert' call
      if (!!skippedStopStates.u()) {
        throw AssertionError.vc(null);
      }
      var _iterator__ex2g4s_1 = skippedStopStates.w();
      while (_iterator__ex2g4s_1.x()) {
        var c_1 = _iterator__ex2g4s_1.y();
        reach.c2d(c_1, this.w26_1);
      }
    }
    if (Companion_getInstance_16().m2o_1) {
      System_getInstance().d1v_1.c1v('computeReachSet ' + closure.toString() + ' -> ' + toString_1(reach));
    }
    var tmp_0;
    if (reach.u()) {
      tmp_0 = null;
    } else {
      tmp_0 = reach;
    }
    return tmp_0;
  }
  y2p(configs, lookToEndOfRule) {
    if (Companion_instance_18.a2q(configs)) {
      return configs;
    }
    var result = new ATNConfigSet(configs.o2c_1);
    var _iterator__ex2g4s = configs.w();
    $l$loop: while (_iterator__ex2g4s.x()) {
      var config = _iterator__ex2g4s.y();
      var tmp = config.q2a_1;
      if (tmp instanceof RuleStopState) {
        result.c2d(config, this.w26_1);
        continue $l$loop;
      }
      if (lookToEndOfRule && config.q2a_1.t2g()) {
        var nextTokens = this.j20_1.n20(config.q2a_1);
        if (nextTokens.vk(-2)) {
          var endOfRuleState = ensureNotNull(this.j20_1.e20_1)[config.q2a_1.q20_1];
          result.c2d(ATNConfig.a2b(config, ensureNotNull(endOfRuleState)), this.w26_1);
        }
      }
    }
    return result;
  }
  u2o(p, ctx, fullCtx) {
    var initialContext = Companion_instance_17.q2k(this.j20_1, ctx);
    var configs = new ATNConfigSet(fullCtx);
    if (Companion_getInstance_16().m2o_1) {
      System_getInstance().d1v_1.c1v('computeStartState from ATN state ' + p.toString() + ' initialContext=' + initialContext.a2j(this.t26_1));
    }
    var inductionVariable = 0;
    var last = p.h2f();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var target = p.o22(i).m22_1;
        var c = ATNConfig.y2a(target, i + 1 | 0, initialContext);
        var closureBusy = HashSet.o9();
        this.x2p(c, configs, closureBusy, true, fullCtx, false);
      }
       while (inductionVariable < last);
    return configs;
  }
  w2o(configs) {
    var statesFromAlt1 = HashMap.y7();
    var configSet = new ATNConfigSet(configs.o2c_1);
    var _iterator__ex2g4s = configs.w();
    $l$loop_0: while (_iterator__ex2g4s.x()) {
      var config = _iterator__ex2g4s.y();
      if (!(config.r2a_1 === 1)) {
        continue $l$loop_0;
      }
      var tmp0_elvis_lhs = config.u2a_1.b2q(this.t26_1, ensureNotNull(this.z26_1));
      var tmp;
      if (tmp0_elvis_lhs == null) {
        continue $l$loop_0;
      } else {
        tmp = tmp0_elvis_lhs;
      }
      var updatedContext = tmp;
      var tmp2 = config.q2a_1.p20_1;
      // Inline function 'kotlin.collections.set' call
      var value = ensureNotNull(config.s2a_1);
      statesFromAlt1.l3(tmp2, value);
      if (!(updatedContext === config.u2a_1)) {
        configSet.c2d(ATNConfig.b2b(config, updatedContext), this.w26_1);
      } else {
        configSet.c2d(config, this.w26_1);
      }
    }
    var _iterator__ex2g4s_0 = configs.w();
    $l$loop_2: while (_iterator__ex2g4s_0.x()) {
      var config_0 = _iterator__ex2g4s_0.y();
      if (config_0.r2a_1 === 1) {
        continue $l$loop_2;
      }
      if (!config_0.x2a()) {
        var context = statesFromAlt1.r3(config_0.q2a_1.p20_1);
        if (!(context == null) && equals(context, config_0.s2a_1)) {
          continue $l$loop_2;
        }
      }
      configSet.c2d(config_0, this.w26_1);
    }
    return configSet;
  }
  j2m(trans, ttype) {
    var tmp;
    if (trans.b2i(ttype, 0, this.j20_1.a20_1)) {
      tmp = trans.m22_1;
    } else {
      tmp = null;
    }
    return tmp;
  }
  q2p(ambigAlts, configs, nAlts) {
    // Inline function 'kotlin.arrayOfNulls' call
    var size = nAlts + 1 | 0;
    var altToPred = Array(size);
    var _iterator__ex2g4s = configs.w();
    while (_iterator__ex2g4s.x()) {
      var c = _iterator__ex2g4s.y();
      if (ambigAlts.d2(c.r2a_1)) {
        altToPred[c.r2a_1] = Companion_instance_19.c2q(altToPred[c.r2a_1], c.u2a_1);
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
      if (Companion_getInstance_16().l2o_1) {
        System_getInstance().d1v_1.c1v('getPredsForAmbigAlts result null');
      }
      return null;
    }
    if (Companion_getInstance_16().l2o_1) {
      System_getInstance().d1v_1.c1v('getPredsForAmbigAlts result ' + joinToString(altToPred));
    }
    return altToPred;
  }
  r2p(ambigAlts, altToPred) {
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
  b2p(configs, outerContext) {
    var sets = this.d2q(configs, outerContext);
    var semValidConfigs = sets.first;
    var semInvalidConfigs = sets.second;
    var alt = this.e2q(semValidConfigs);
    if (!(alt === 0)) {
      return alt;
    }
    if (semInvalidConfigs.b2() > 0) {
      alt = this.e2q(semInvalidConfigs);
      if (!(alt === 0)) {
        return alt;
      }
    }
    return 0;
  }
  e2q(configs) {
    var alts = IntervalSet.u1z();
    var _iterator__ex2g4s = configs.w();
    while (_iterator__ex2g4s.x()) {
      var c = _iterator__ex2g4s.y();
      var tmp;
      if (c.v2a() > 0) {
        tmp = true;
      } else {
        var tmp_0;
        var tmp_1 = c.q2a_1;
        if (tmp_1 instanceof RuleStopState) {
          tmp_0 = ensureNotNull(c.s2a_1).z2i();
        } else {
          tmp_0 = false;
        }
        tmp = tmp_0;
      }
      if (tmp) {
        alts.v1z(c.r2a_1);
      }
    }
    if (alts.x1v() === 0) {
      return 0;
    }
    return alts.q22();
  }
  d2q(configs, outerContext) {
    var succeeded = new ATNConfigSet(configs.o2c_1);
    var failed = new ATNConfigSet(configs.o2c_1);
    var _iterator__ex2g4s = configs.w();
    while (_iterator__ex2g4s.x()) {
      var c = _iterator__ex2g4s.y();
      if (!(c.u2a_1 === Empty_getInstance())) {
        var predicateEvaluationResult = this.f2q(c.u2a_1, outerContext, c.r2a_1, configs.o2c_1);
        if (predicateEvaluationResult) {
          succeeded.b2d(c);
        } else {
          failed.b2d(c);
        }
      } else {
        succeeded.b2d(c);
      }
    }
    return new Pair(succeeded, failed);
  }
  c2p(predPredictions, outerContext, complete) {
    var predictions = BitSet.z2c();
    var inductionVariable = 0;
    var last = predPredictions.length;
    $l$loop_1: while (inductionVariable < last) {
      var pair = predPredictions[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      if (pair.g2q_1 === Empty_getInstance()) {
        predictions.a2d(pair.h2q_1);
        if (!complete) {
          break $l$loop_1;
        }
        continue $l$loop_1;
      }
      var fullCtx = false;
      var predicateEvaluationResult = this.f2q(pair.g2q_1, outerContext, pair.h2q_1, fullCtx);
      if (Companion_getInstance_16().l2o_1 || Companion_getInstance_16().n2o_1) {
        System_getInstance().d1v_1.c1v('eval pred ' + pair.toString() + '=' + predicateEvaluationResult);
      }
      if (predicateEvaluationResult) {
        if (Companion_getInstance_16().l2o_1 || Companion_getInstance_16().n2o_1) {
          System_getInstance().d1v_1.c1v('PREDICT ' + pair.h2q_1);
        }
        predictions.a2d(pair.h2q_1);
        if (!complete) {
          break $l$loop_1;
        }
      }
    }
    return predictions;
  }
  f2q(pred, parserCallStack, alt, fullCtx) {
    return pred.i2q(this.t26_1, parserCallStack);
  }
  x2p(config, configs, closureBusy, collectPredicates, fullCtx, treatEofAsEpsilon) {
    var initialDepth = 0;
    this.j2q(config, configs, closureBusy, collectPredicates, fullCtx, initialDepth, treatEofAsEpsilon);
    // Inline function 'com.strumenta.antlrkotlin.runtime.assert' call
    if (!(!fullCtx || !configs.u2c_1)) {
      throw AssertionError.vc(null);
    }
  }
  j2q(config, configs, closureBusy, collectPredicates, fullCtx, depth, treatEofAsEpsilon) {
    if (Companion_getInstance_16().m2o_1) {
      System_getInstance().d1v_1.c1v('closure(' + config.i2b(this.t26_1, true) + ')');
    }
    var tmp = config.q2a_1;
    if (tmp instanceof RuleStopState) {
      if (!ensureNotNull(config.s2a_1).n25()) {
        var inductionVariable = 0;
        var last = ensureNotNull(config.s2a_1).x1v();
        if (inductionVariable < last)
          $l$loop_0: do {
            var i = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            if (ensureNotNull(config.s2a_1).y2i(i) === 2147483647) {
              if (fullCtx) {
                configs.c2d(ATNConfig.a2b(config, config.q2a_1, EmptyPredictionContext_getInstance()), this.w26_1);
                continue $l$loop_0;
              }
              if (Companion_getInstance_16().l2o_1) {
                System_getInstance().d1v_1.c1v('FALLING off rule ' + this.k2q(config.q2a_1.q20_1));
              }
              this.l2q(config, configs, closureBusy, collectPredicates, fullCtx, depth, treatEofAsEpsilon);
              continue $l$loop_0;
            }
            var returnState = this.j20_1.b20_1.d2(ensureNotNull(config.s2a_1).y2i(i));
            var newContext = ensureNotNull(config.s2a_1).x2i(i);
            var c = ATNConfig.y2a(ensureNotNull(returnState), config.r2a_1, ensureNotNull(newContext), config.u2a_1);
            c.t2a_1 = config.t2a_1;
            // Inline function 'com.strumenta.antlrkotlin.runtime.assert' call
            if (!(depth > -2147483648)) {
              throw AssertionError.vc(null);
            }
            this.j2q(c, configs, closureBusy, collectPredicates, fullCtx, depth - 1 | 0, treatEofAsEpsilon);
          }
           while (inductionVariable < last);
        return Unit_instance;
      } else if (fullCtx) {
        configs.c2d(config, this.w26_1);
        return Unit_instance;
      } else {
        if (Companion_getInstance_16().l2o_1) {
          System_getInstance().d1v_1.c1v('FALLING off rule ' + this.k2q(config.q2a_1.q20_1));
        }
      }
    }
    this.l2q(config, configs, closureBusy, collectPredicates, fullCtx, depth, treatEofAsEpsilon);
  }
  l2q(config, configs, closureBusy, collectPredicates, fullCtx, depth, treatEofAsEpsilon) {
    var p = config.q2a_1;
    if (!p.t2g()) {
      configs.c2d(config, this.w26_1);
    }
    var inductionVariable = 0;
    var last = p.h2f();
    if (inductionVariable < last)
      $l$loop_1: do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (i === 0 && this.m2q(config)) {
          continue $l$loop_1;
        }
        var t = p.o22(i);
        var tmp;
        if (!(t instanceof ActionTransition)) {
          tmp = collectPredicates;
        } else {
          tmp = false;
        }
        var continueCollecting = tmp;
        var c = this.n2q(config, t, continueCollecting, depth === 0, fullCtx, treatEofAsEpsilon);
        if (!(c == null)) {
          var newDepth = depth;
          var tmp_0 = config.q2a_1;
          if (tmp_0 instanceof RuleStopState) {
            // Inline function 'com.strumenta.antlrkotlin.runtime.assert' call
            if (!!fullCtx) {
              throw AssertionError.vc(null);
            }
            if (!(this.a27_1 == null) && ensureNotNull(this.a27_1).u2l_1) {
              var outermostPrecedenceReturn = (t instanceof EpsilonTransition ? t : THROW_CCE()).n2k_1;
              if (outermostPrecedenceReturn === ensureNotNull(this.a27_1).q2l_1.q20_1) {
                c.w2a(true);
              }
            }
            c.t2a_1 = c.t2a_1 + 1 | 0;
            if (!closureBusy.z1(c)) {
              continue $l$loop_1;
            }
            configs.u2c_1 = true;
            // Inline function 'com.strumenta.antlrkotlin.runtime.assert' call
            if (!(newDepth > -2147483648)) {
              throw AssertionError.vc(null);
            }
            newDepth = newDepth - 1 | 0;
            if (Companion_getInstance_16().l2o_1) {
              System_getInstance().d1v_1.c1v('dips into outer ctx: ' + toString_1(c));
            }
          } else {
            if (!t.z2h() && !closureBusy.z1(c)) {
              continue $l$loop_1;
            }
            if (t instanceof RuleTransition) {
              if (newDepth >= 0) {
                newDepth = newDepth + 1 | 0;
              }
            }
          }
          this.j2q(c, configs, closureBusy, continueCollecting, fullCtx, newDepth, treatEofAsEpsilon);
        }
      }
       while (inductionVariable < last);
  }
  m2q(config) {
    if (Companion_getInstance_16().p2o_1) {
      return false;
    }
    var p = config.q2a_1;
    var tmp;
    var tmp_0;
    var tmp_1;
    if (!(p.v20() === 10)) {
      tmp_1 = true;
    } else {
      tmp_1 = !(p instanceof StarLoopEntryState ? p : THROW_CCE()).b2g_1;
    }
    if (tmp_1) {
      tmp_0 = true;
    } else {
      tmp_0 = ensureNotNull(config.s2a_1).n25();
    }
    if (tmp_0) {
      tmp = true;
    } else {
      tmp = ensureNotNull(config.s2a_1).z2i();
    }
    if (tmp) {
      return false;
    }
    var numCtxs = ensureNotNull(config.s2a_1).x1v();
    var inductionVariable = 0;
    if (inductionVariable < numCtxs)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var returnState = this.j20_1.b20_1.d2(ensureNotNull(config.s2a_1).y2i(i));
        if (!(ensureNotNull(returnState).q20_1 === p.q20_1)) {
          return false;
        }
      }
       while (inductionVariable < numCtxs);
    var tmp_2 = p.o22(0).m22_1;
    var decisionStartState = tmp_2 instanceof BlockStartState ? tmp_2 : THROW_CCE();
    var blockEndStateNum = ensureNotNull(decisionStartState.u2e_1).p20_1;
    var tmp_3 = this.j20_1.b20_1.d2(blockEndStateNum);
    var blockEndState = tmp_3 instanceof BlockEndState ? tmp_3 : THROW_CCE();
    var inductionVariable_0 = 0;
    if (inductionVariable_0 < numCtxs)
      $l$loop_2: do {
        var i_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        var returnStateNumber = ensureNotNull(config.s2a_1).y2i(i_0);
        var returnState_0 = this.j20_1.b20_1.d2(returnStateNumber);
        if (!(ensureNotNull(returnState_0).h2f() === 1) || !returnState_0.o22(0).z2h()) {
          return false;
        }
        var returnStateTarget = returnState_0.o22(0).m22_1;
        if (returnState_0.v20() === 8 && returnStateTarget === p) {
          continue $l$loop_2;
        }
        if (returnState_0 === blockEndState) {
          continue $l$loop_2;
        }
        if (returnStateTarget === blockEndState) {
          continue $l$loop_2;
        }
        if (returnStateTarget.v20() === 8 && returnStateTarget.h2f() === 1 && returnStateTarget.o22(0).z2h() && returnStateTarget.o22(0).m22_1 === p) {
          continue $l$loop_2;
        }
        return false;
      }
       while (inductionVariable_0 < numCtxs);
    return true;
  }
  k2q(index) {
    if (index >= 0) {
      return this.t26_1.y21()[index];
    }
    return '<rule ' + index + '>';
  }
  n2q(config, t, collectPredicates, inContext, fullCtx, treatEofAsEpsilon) {
    switch (t.a2i()) {
      case 3:
        return this.o2q(config, t instanceof RuleTransition ? t : THROW_CCE());
      case 10:
        return this.p2q(config, t instanceof PrecedencePredicateTransition ? t : THROW_CCE(), collectPredicates, inContext, fullCtx);
      case 4:
        return this.q2q(config, t instanceof PredicateTransition ? t : THROW_CCE(), collectPredicates, inContext, fullCtx);
      case 6:
        return this.r2q(config, t instanceof ActionTransition ? t : THROW_CCE());
      case 1:
        return ATNConfig.a2b(config, t.m22_1);
      case 5:
      case 2:
      case 7:
        if (treatEofAsEpsilon) {
          if (t.b2i(-1, 0, 1)) {
            return ATNConfig.a2b(config, t.m22_1);
          }
        }

        return null;
      default:
        return null;
    }
  }
  r2q(config, t) {
    if (Companion_getInstance_16().l2o_1) {
      System_getInstance().d1v_1.c1v('ACTION edge ' + t.e2i_1 + ':' + t.f2i_1);
    }
    return ATNConfig.a2b(config, t.m22_1);
  }
  p2q(config, pt, collectPredicates, inContext, fullCtx) {
    if (Companion_getInstance_16().l2o_1) {
      System_getInstance().d1v_1.c1v('PRED (collectPredicates=' + collectPredicates + ') ' + pt.u2q_1 + '>=_p, ctx dependent=true');
      System_getInstance().d1v_1.c1v('context surrounding pred is ' + toString_0(this.t26_1.f28()));
    }
    var c = null;
    if (collectPredicates && inContext) {
      if (fullCtx) {
        var currentPosition = ensureNotNull(this.x26_1).r1v();
        ensureNotNull(this.x26_1).u1v(this.y26_1);
        var predSucceeds = this.f2q(pt.x2q(), ensureNotNull(this.z26_1), config.r2a_1, fullCtx);
        ensureNotNull(this.x26_1).u1v(currentPosition);
        if (predSucceeds) {
          c = ATNConfig.a2b(config, pt.m22_1);
        }
      } else {
        var newSemCtx = Companion_instance_19.y2q(config.u2a_1, pt.x2q());
        c = ATNConfig.z2a(config, pt.m22_1, ensureNotNull(newSemCtx));
      }
    } else {
      c = ATNConfig.a2b(config, pt.m22_1);
    }
    if (Companion_getInstance_16().l2o_1) {
      System_getInstance().d1v_1.c1v('config from pred transition=' + toString_1(c));
    }
    return c;
  }
  q2q(config, pt, collectPredicates, inContext, fullCtx) {
    if (Companion_getInstance_16().l2o_1) {
      System_getInstance().d1v_1.c1v('PRED (collectPredicates=' + collectPredicates + ')' + (' ' + pt.s2m_1 + ':' + pt.t2m_1) + (', ctx dependent=' + pt.u2m_1));
      System_getInstance().d1v_1.c1v('context surrounding pred is ' + toString_0(this.t26_1.f28()));
    }
    var c = null;
    if (collectPredicates && (!pt.u2m_1 || (pt.u2m_1 && inContext))) {
      if (fullCtx) {
        var currentPosition = ensureNotNull(this.x26_1).r1v();
        ensureNotNull(this.x26_1).u1v(this.y26_1);
        var predSucceeds = this.f2q(pt.x2q(), ensureNotNull(this.z26_1), config.r2a_1, fullCtx);
        ensureNotNull(this.x26_1).u1v(currentPosition);
        if (predSucceeds) {
          c = ATNConfig.a2b(config, pt.m22_1);
        }
      } else {
        var newSemCtx = Companion_instance_19.y2q(config.u2a_1, pt.x2q());
        c = ATNConfig.z2a(config, pt.m22_1, ensureNotNull(newSemCtx));
      }
    } else {
      c = ATNConfig.a2b(config, pt.m22_1);
    }
    if (Companion_getInstance_16().l2o_1) {
      System_getInstance().d1v_1.c1v('config from pred transition=' + toString_1(c));
    }
    return c;
  }
  o2q(config, t) {
    if (Companion_getInstance_16().l2o_1) {
      System_getInstance().d1v_1.c1v('CALL rule ' + this.k2q(t.m22_1.q20_1) + ', ctx=' + toString_1(config.s2a_1));
    }
    var returnState = t.z22_1;
    var newContext = Companion_instance_20.u2k(config.s2a_1, returnState.p20_1);
    return ATNConfig.a2b(config, t.m22_1, newContext);
  }
  m2p(configs) {
    var altSets = Companion_instance_18.k2p(configs);
    return Companion_instance_18.z2q(altSets);
  }
  p2p(configs) {
    var conflictingAlts;
    if (!(configs.r2c_1 === 0)) {
      conflictingAlts = BitSet.z2c();
      conflictingAlts.a2d(configs.r2c_1);
    } else {
      conflictingAlts = ensureNotNull(configs.s2c_1);
    }
    return conflictingAlts;
  }
  i2m(t) {
    if (t === -1) {
      return 'EOF';
    }
    var vocabulary = this.t26_1.t1x();
    var displayName = vocabulary.u1x(t);
    if (displayName === t.toString()) {
      return displayName;
    }
    return displayName + '<' + t + '>';
  }
  s2o(input) {
    return this.i2m(input.z1v(1));
  }
  a2p(input, outerContext, configs, startIndex) {
    return NoViableAltException.n26(this.t26_1, input, input.d2(startIndex), input.e1w(1), configs, outerContext);
  }
  j2p(dfa, from, t, to) {
    if (Companion_getInstance_16().l2o_1) {
      System_getInstance().d1v_1.c1v('EDGE ' + toString_1(from) + ' -> ' + toString_1(to) + ' upon ' + this.i2m(t));
    }
    if (to == null) {
      return null;
    }
    var tto = this.v2o(dfa, to);
    if (from == null || t < -1 || t > this.j20_1.a20_1) {
      return tto;
    }
    // Inline function 'com.strumenta.antlrkotlin.runtime.synchronized' call
    if (from.z2g_1 == null) {
      var tmp = from;
      // Inline function 'kotlin.arrayOfNulls' call
      var size = (this.j20_1.a20_1 + 1 | 0) + 1 | 0;
      tmp.z2g_1 = Array(size);
    }
    ensureNotNull(from.z2g_1)[t + 1 | 0] = tto;
    if (Companion_getInstance_16().l2o_1) {
      System_getInstance().d1v_1.c1v('DFA=\n' + dfa.x21(this.t26_1.t1x()));
    }
    return tto;
  }
  v2o(dfa, D) {
    if (D === Companion_getInstance_11().g2h_1) {
      return D;
    }
    // Inline function 'com.strumenta.antlrkotlin.runtime.synchronized' call
    dfa.s2l_1;
    var existing = dfa.s2l_1.r3(D);
    if (!(existing == null)) {
      if (Companion_getInstance_16().m2o_1) {
        System_getInstance().d1v_1.c1v('addDFAState ' + D.toString() + ' exists');
      }
      return existing;
    }
    D.x2g_1 = dfa.s2l_1.b2();
    if (!D.y2g_1.w2c_1) {
      D.y2g_1.i2d(this);
      D.y2g_1.c2a(true);
    }
    if (Companion_getInstance_16().m2o_1) {
      System_getInstance().d1v_1.c1v('addDFAState new ' + D.toString());
    }
    // Inline function 'kotlin.collections.set' call
    dfa.s2l_1.l3(D, D);
    return D;
  }
  f2p(dfa, conflictingAlts, configs, startIndex, stopIndex) {
    if (Companion_getInstance_16().l2o_1 || Companion_getInstance_16().o2o_1) {
      var interval = Companion_getInstance_25().u1w(startIndex, stopIndex);
      System_getInstance().d1v_1.c1v('reportAttemptingFullContext' + (' decision=' + dfa.r2l_1 + ':' + configs.toString()) + (', input=' + this.t26_1.r1z().m1w(interval)));
    }
    this.t26_1.t25().k1v(this.t26_1, dfa, startIndex, stopIndex, conflictingAlts, configs);
  }
  w2p(dfa, prediction, configs, startIndex, stopIndex) {
    if (Companion_getInstance_16().l2o_1 || Companion_getInstance_16().o2o_1) {
      var interval = Companion_getInstance_25().u1w(startIndex, stopIndex);
      System_getInstance().d1v_1.c1v('reportContextSensitivity' + (' decision=' + dfa.r2l_1 + ':' + configs.toString()) + (', input=' + this.t26_1.r1z().m1w(interval)));
    }
    this.t26_1.t25().l1v(this.t26_1, dfa, startIndex, stopIndex, prediction, configs);
  }
  h2p(dfa, D, startIndex, stopIndex, exact, ambigAlts, configs) {
    if (Companion_getInstance_16().l2o_1 || Companion_getInstance_16().o2o_1) {
      var interval = Companion_getInstance_25().u1w(startIndex, stopIndex);
      System_getInstance().d1v_1.c1v('reportAmbiguity ' + ambigAlts.toString() + ':' + configs.toString() + ', input=' + this.t26_1.r1z().m1w(interval));
    }
    this.t26_1.t25().j1v(this.t26_1, dfa, startIndex, stopIndex, exact, ambigAlts, configs);
  }
}
class PlusBlockStartState extends BlockStartState {
  constructor() {
    super();
    this.n2g_1 = null;
    this.o2g_1 = 4;
  }
  v20() {
    return this.o2g_1;
  }
}
class PlusLoopbackState extends DecisionState {
  constructor() {
    super();
    this.j2r_1 = 11;
  }
  v20() {
    return this.j2r_1;
  }
}
class PrecedencePredicateTransition extends AbstractPredicateTransition {
  constructor(target, precedence) {
    super(target);
    this.u2q_1 = precedence;
    this.v2q_1 = 10;
    this.w2q_1 = true;
  }
  a2i() {
    return this.v2q_1;
  }
  z2h() {
    return this.w2q_1;
  }
  x2q() {
    return PrecedencePredicate.l2r(this.u2q_1);
  }
  b2i(symbol, minVocabSymbol, maxVocabSymbol) {
    return false;
  }
  toString() {
    return '' + this.u2q_1 + ' >= _p';
  }
}
class PredicateTransition extends AbstractPredicateTransition {
  constructor(target, ruleIndex, predIndex, isCtxDependent) {
    super(target);
    this.s2m_1 = ruleIndex;
    this.t2m_1 = predIndex;
    this.u2m_1 = isCtxDependent;
    this.v2m_1 = 4;
    this.w2m_1 = true;
  }
  a2i() {
    return this.v2m_1;
  }
  z2h() {
    return this.w2m_1;
  }
  x2q() {
    return Predicate.p2r(this.s2m_1, this.t2m_1, this.u2m_1);
  }
  b2i(symbol, minVocabSymbol, maxVocabSymbol) {
    return false;
  }
  toString() {
    return 'pred_' + this.s2m_1 + ':' + this.t2m_1;
  }
}
class Companion_17 {
  constructor() {
    this.d2d_1 = 1;
    this.e2d_1 = 2147483647;
    this.f2d_1 = 0;
  }
  q2k(atn, outerContext) {
    var tempOuterContext = outerContext == null ? Companion_getInstance_3().g28_1 : outerContext;
    if (tempOuterContext.d23() == null || tempOuterContext === Companion_getInstance_3().g28_1) {
      return EmptyPredictionContext_getInstance();
    }
    var parent = this.q2k(atn, tempOuterContext.d23());
    var state = atn.b20_1.d2(tempOuterContext.a22_1);
    var tmp = ensureNotNull(state).o22(0);
    var transition = tmp instanceof RuleTransition ? tmp : THROW_CCE();
    return Companion_instance_20.u2k(parent, transition.z22_1.p20_1);
  }
  q2r() {
    var hash = MurmurHash_instance.e2b(1);
    hash = MurmurHash_instance.h2b(hash, 0);
    return hash;
  }
  r2r(parent, returnState) {
    var hash = MurmurHash_instance.e2b(1);
    hash = MurmurHash_instance.g2b(hash, parent);
    hash = MurmurHash_instance.f2b(hash, returnState);
    hash = MurmurHash_instance.h2b(hash, 2);
    return hash;
  }
  o2i(parents, returnStates) {
    var hash = MurmurHash_instance.e2b(1);
    var inductionVariable = 0;
    var last = parents.length;
    while (inductionVariable < last) {
      var parent = parents[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      hash = MurmurHash_instance.g2b(hash, parent);
    }
    var inductionVariable_0 = 0;
    var last_0 = returnStates.length;
    while (inductionVariable_0 < last_0) {
      var returnState = returnStates[inductionVariable_0];
      inductionVariable_0 = inductionVariable_0 + 1 | 0;
      hash = MurmurHash_instance.f2b(hash, returnState);
    }
    hash = MurmurHash_instance.h2b(hash, imul(2, parents.length));
    return hash;
  }
  g2d(a, b, rootIsWildcard, mergeCache) {
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
      return this.s2r(aa, bb, rootIsWildcard, mergeCache);
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
      aa = ArrayPredictionContext.s2i(aa);
    }
    if (bb instanceof SingletonPredictionContext) {
      bb = ArrayPredictionContext.s2i(bb);
    }
    var tmp_0 = aa instanceof ArrayPredictionContext ? aa : THROW_CCE();
    return this.t2r(tmp_0, bb instanceof ArrayPredictionContext ? bb : THROW_CCE(), rootIsWildcard, mergeCache);
  }
  s2r(a, b, rootIsWildcard, mergeCache) {
    if (!(mergeCache == null)) {
      var previous = mergeCache.v2r(a, b);
      if (!(previous == null)) {
        return previous;
      }
      previous = mergeCache.v2r(b, a);
      if (!(previous == null)) {
        return previous;
      }
    }
    var rootMerge = this.w2r(a, b, rootIsWildcard);
    if (!(rootMerge == null)) {
      if (mergeCache == null)
        null;
      else
        mergeCache.x2r(a, b, rootMerge);
      return rootMerge;
    }
    if (a.w2i_1 === b.w2i_1) {
      var parent = this.g2d(a.v2i_1, b.v2i_1, rootIsWildcard, mergeCache);
      if (parent === a.v2i_1) {
        return a;
      }
      if (parent === b.v2i_1) {
        return b;
      }
      var a_ = Companion_instance_20.u2k(parent, a.w2i_1);
      if (mergeCache == null)
        null;
      else
        mergeCache.x2r(a, b, a_);
      return a_;
    }
    var singleParent = null;
    if (a === b || (!(a.v2i_1 == null) && equals(a.v2i_1, b.v2i_1))) {
      singleParent = a.v2i_1;
    }
    if (!(singleParent == null)) {
      // Inline function 'kotlin.intArrayOf' call
      var payloads = new Int32Array([a.w2i_1, b.w2i_1]);
      if (a.w2i_1 > b.w2i_1) {
        payloads[0] = b.w2i_1;
        payloads[1] = a.w2i_1;
      }
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var parents = [singleParent, singleParent];
      var a__0 = ArrayPredictionContext.n2i(parents, payloads);
      if (mergeCache == null)
        null;
      else
        mergeCache.x2r(a, b, a__0);
      return a__0;
    }
    // Inline function 'kotlin.intArrayOf' call
    var payloads_0 = new Int32Array([a.w2i_1, b.w2i_1]);
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var parents_0 = [a.v2i_1, b.v2i_1];
    if (a.w2i_1 > b.w2i_1) {
      payloads_0[0] = b.w2i_1;
      payloads_0[1] = a.w2i_1;
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      parents_0 = [b.v2i_1, a.v2i_1];
    }
    var a__1 = ArrayPredictionContext.n2i(parents_0, payloads_0);
    if (mergeCache == null)
      null;
    else
      mergeCache.x2r(a, b, a__1);
    return a__1;
  }
  w2r(a, b, rootIsWildcard) {
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
        var payloads = new Int32Array([b.w2i_1, 2147483647]);
        // Inline function 'kotlin.arrayOf' call
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        var parents = [b.v2i_1, null];
        return ArrayPredictionContext.n2i(parents, payloads);
      }
      if (b === EmptyPredictionContext_getInstance()) {
        // Inline function 'kotlin.intArrayOf' call
        var payloads_0 = new Int32Array([a.w2i_1, 2147483647]);
        // Inline function 'kotlin.arrayOf' call
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        var parents_0 = [a.v2i_1, null];
        return ArrayPredictionContext.n2i(parents_0, payloads_0);
      }
    }
    return null;
  }
  t2r(a, b, rootIsWildcard, mergeCache) {
    if (!(mergeCache == null)) {
      var previous = mergeCache.v2r(a, b);
      if (!(previous == null)) {
        if (Companion_getInstance_16().m2o_1) {
          System_getInstance().d1v_1.c1v('mergeArrays a=' + a.toString() + ',b=' + b.toString() + ' -> previous');
        }
        return previous;
      }
      previous = mergeCache.v2r(b, a);
      if (!(previous == null)) {
        if (Companion_getInstance_16().m2o_1) {
          System_getInstance().d1v_1.c1v('mergeArrays a=' + a.toString() + ',b=' + b.toString() + ' -> previous');
        }
        return previous;
      }
    }
    var i = 0;
    var j = 0;
    var k = 0;
    var mergedReturnStates = new Int32Array(a.m2i_1.length + b.m2i_1.length | 0);
    // Inline function 'kotlin.arrayOfNulls' call
    var size = a.m2i_1.length + b.m2i_1.length | 0;
    var mergedParents = Array(size);
    while (i < a.m2i_1.length && j < b.m2i_1.length) {
      var aParent = a.l2i_1[i];
      var bParent = b.l2i_1[j];
      if (a.m2i_1[i] === b.m2i_1[j]) {
        var payload = a.m2i_1[i];
        var both = payload === 2147483647 && aParent == null && bParent == null;
        var ax_ax = !(aParent == null) && !(bParent == null) && equals(aParent, bParent);
        if (both || ax_ax) {
          mergedParents[k] = aParent;
          mergedReturnStates[k] = payload;
        } else {
          var mergedParent = this.g2d(aParent, bParent, rootIsWildcard, mergeCache);
          mergedParents[k] = mergedParent;
          mergedReturnStates[k] = payload;
        }
        i = i + 1 | 0;
        j = j + 1 | 0;
      } else if (a.m2i_1[i] < b.m2i_1[j]) {
        mergedParents[k] = aParent;
        mergedReturnStates[k] = a.m2i_1[i];
        i = i + 1 | 0;
      } else {
        mergedParents[k] = bParent;
        mergedReturnStates[k] = b.m2i_1[j];
        j = j + 1 | 0;
      }
      k = k + 1 | 0;
    }
    if (i < a.m2i_1.length) {
      var inductionVariable = i;
      var last = a.m2i_1.length;
      if (inductionVariable < last)
        do {
          var p = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          mergedParents[k] = a.l2i_1[p];
          mergedReturnStates[k] = a.m2i_1[p];
          k = k + 1 | 0;
        }
         while (inductionVariable < last);
    } else {
      var inductionVariable_0 = j;
      var last_0 = b.m2i_1.length;
      if (inductionVariable_0 < last_0)
        do {
          var p_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          mergedParents[k] = b.l2i_1[p_0];
          mergedReturnStates[k] = b.m2i_1[p_0];
          k = k + 1 | 0;
        }
         while (inductionVariable_0 < last_0);
    }
    if (k < mergedParents.length) {
      if (k === 1) {
        var a_ = Companion_instance_20.u2k(mergedParents[0], mergedReturnStates[0]);
        if (mergeCache == null)
          null;
        else
          mergeCache.x2r(a, b, a_);
        return a_;
      }
      mergedParents = copyOf(mergedParents, k);
      mergedReturnStates = copyOf_0(mergedReturnStates, k);
    }
    var M = ArrayPredictionContext.n2i(mergedParents, mergedReturnStates);
    if (M.equals(a)) {
      if (mergeCache == null)
        null;
      else
        mergeCache.x2r(a, b, a);
      if (Companion_getInstance_16().m2o_1) {
        System_getInstance().d1v_1.c1v('mergeArrays a=' + a.toString() + ',b=' + b.toString() + ' -> a');
      }
      return a;
    }
    if (M.equals(b)) {
      if (mergeCache == null)
        null;
      else
        mergeCache.x2r(a, b, b);
      if (Companion_getInstance_16().m2o_1) {
        System_getInstance().d1v_1.c1v('mergeArrays a=' + a.toString() + ',b=' + b.toString() + ' -> b');
      }
      return b;
    }
    this.y2r(mergedParents);
    if (mergeCache == null)
      null;
    else
      mergeCache.x2r(a, b, M);
    if (Companion_getInstance_16().m2o_1) {
      System_getInstance().d1v_1.c1v('mergeArrays a=' + a.toString() + ',b=' + b.toString() + ' -> ' + M.toString());
    }
    return M;
  }
  y2r(parents) {
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
  h2h(context, contextCache, visited) {
    if (context.n25()) {
      return context;
    }
    var existing = visited.r3(context);
    if (!(existing == null)) {
      return existing;
    }
    existing = contextCache.a2s(context);
    if (!(existing == null)) {
      // Inline function 'kotlin.collections.set' call
      var value = existing;
      visited.l3(context, value);
      return existing;
    }
    var changed = false;
    // Inline function 'kotlin.arrayOfNulls' call
    var size = context.x1v();
    var parents = Array(size);
    var inductionVariable = 0;
    var last = parents.length - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var parent = this.h2h(ensureNotNull(context.x2i(i)), contextCache, visited);
        if (changed || !(parent === context.x2i(i))) {
          if (!changed) {
            // Inline function 'kotlin.arrayOfNulls' call
            var size_0 = context.x1v();
            parents = Array(size_0);
            var inductionVariable_0 = 0;
            var last_0 = context.x1v();
            if (inductionVariable_0 < last_0)
              do {
                var j = inductionVariable_0;
                inductionVariable_0 = inductionVariable_0 + 1 | 0;
                parents[j] = context.x2i(j);
              }
               while (inductionVariable_0 < last_0);
            changed = true;
          }
          parents[i] = parent;
        }
      }
       while (inductionVariable <= last);
    if (!changed) {
      contextCache.b2s(context);
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
        tmp = Companion_instance_20.u2k(parents[0], context.y2i(0));
      } else {
        var arrayPredictionContext = context instanceof ArrayPredictionContext ? context : THROW_CCE();
        tmp = ArrayPredictionContext.n2i(parents, arrayPredictionContext.m2i_1);
      }
    }
    var updated = tmp;
    contextCache.b2s(updated);
    // Inline function 'kotlin.collections.set' call
    visited.l3(updated, updated);
    // Inline function 'kotlin.collections.set' call
    visited.l3(context, updated);
    return updated;
  }
}
class PredictionContextCache {
  constructor() {
    this.z2r_1 = HashMap.y7();
  }
  b2s(ctx) {
    if (ctx === EmptyPredictionContext_getInstance()) {
      return EmptyPredictionContext_getInstance();
    }
    var existing = this.z2r_1.r3(ctx);
    if (!(existing == null)) {
      return existing;
    }
    // Inline function 'kotlin.collections.set' call
    this.z2r_1.l3(ctx, ctx);
    return ctx;
  }
  a2s(ctx) {
    return this.z2r_1.r3(ctx);
  }
}
class FlexibleHashMap {
  constructor(comparator, initialCapacity, initialBucketCapacity) {
    comparator = comparator === VOID ? Companion_getInstance_27().h2l_1 : comparator;
    initialCapacity = initialCapacity === VOID ? 16 : initialCapacity;
    initialBucketCapacity = initialBucketCapacity === VOID ? 8 : initialBucketCapacity;
    this.c2s_1 = comparator;
    this.d2s_1 = initialCapacity;
    this.e2s_1 = initialBucketCapacity;
    this.g2s_1 = 0;
    this.h2s_1 = 1;
    this.i2s_1 = 0;
    this.f2s_1 = createEntryListArray(Companion_instance_23, this.e2s_1);
    var tmp = this;
    // Inline function 'kotlin.math.floor' call
    var x = this.d2s_1 * 0.75;
    var tmp$ret$0 = Math.floor(x);
    tmp.i2s_1 = numberToInt(tmp$ret$0);
  }
  b2() {
    return this.g2s_1;
  }
  n3() {
    throw UnsupportedOperationException.q7();
  }
  o3() {
    var a = ArrayList.y1(this.b2());
    var indexedObject = this.f2s_1;
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var bucket = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      if (!(bucket == null)) {
        var _iterator__ex2g4s = bucket.w();
        while (_iterator__ex2g4s.x()) {
          var entry = _iterator__ex2g4s.y();
          a.z1(ensureNotNull(entry).x2v_1);
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
    var b = this.j2s(key);
    var tmp0_elvis_lhs = this.f2s_1[b];
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
      if (this.c2s_1.n2c(e == null ? null : e.w2v_1, key)) {
        return e == null ? null : e.x2v_1;
      }
    }
    return null;
  }
  l3(key, value) {
    if (key == null) {
      return null;
    }
    if (this.g2s_1 > this.i2s_1) {
      this.e2c();
    }
    var b = this.j2s(key);
    var existingBucket = this.f2s_1[b];
    var tmp;
    if (!(existingBucket == null)) {
      tmp = existingBucket;
    } else {
      var list = ArrayList.u1();
      this.f2s_1[b] = list;
      tmp = list;
    }
    var bucket = tmp;
    var _iterator__ex2g4s = bucket.w();
    while (_iterator__ex2g4s.x()) {
      var e = _iterator__ex2g4s.y();
      if (this.c2s_1.n2c(e == null ? null : e.w2v_1, key)) {
        var prev = e == null ? null : e.x2v_1;
        if (e == null)
          null;
        else {
          e.x2v_1 = value;
        }
        this.g2s_1 = this.g2s_1 + 1 | 0;
        return prev;
      }
    }
    bucket.z1(new Entry(key, value));
    this.g2s_1 = this.g2s_1 + 1 | 0;
    return null;
  }
  m3(key) {
    throw UnsupportedOperationException.q7();
  }
  p3(key) {
    return !(this.r3(key) == null);
  }
  hashCode() {
    var hash = MurmurHash_instance.z2m();
    var indexedObject = this.f2s_1;
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
        hash = MurmurHash_instance.f2b(hash, this.c2s_1.l2c(e.w2v_1));
      }
    }
    hash = MurmurHash_instance.h2b(hash, this.b2());
    return hash;
  }
  equals(other) {
    throw UnsupportedOperationException.q7();
  }
  j2s(key) {
    var hash = this.c2s_1.l2c(key);
    return hash & (this.f2s_1.length - 1 | 0);
  }
  e2c() {
    var old = this.f2s_1;
    this.h2s_1 = this.h2s_1 + 4 | 0;
    var newCapacity = imul(this.f2s_1.length, 2);
    var newTable = createEntryListArray(Companion_instance_23, newCapacity);
    this.f2s_1 = newTable;
    this.i2s_1 = numberToInt(newCapacity * 0.75);
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
        this.l3(e.w2v_1, e.x2v_1);
      }
    }
    this.g2s_1 = oldSize;
  }
  u() {
    return this.g2s_1 === 0;
  }
  toString() {
    if (this.b2() === 0) {
      return '{}';
    }
    var first = true;
    var buf = StringBuilder.s();
    buf.t('{');
    var indexedObject = this.f2s_1;
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
  k2c(obj) {
    var hashCode = MurmurHash_instance.e2b(7);
    hashCode = MurmurHash_instance.f2b(hashCode, obj.q2a_1.p20_1);
    hashCode = MurmurHash_instance.g2b(hashCode, obj.s2a_1);
    hashCode = MurmurHash_instance.h2b(hashCode, 2);
    return hashCode;
  }
  l2c(obj) {
    return this.k2c(obj instanceof ATNConfig ? obj : THROW_CCE());
  }
  m2c(a, b) {
    if (a === b) {
      return true;
    }
    if (a == null || b == null) {
      return false;
    }
    return a.q2a_1.p20_1 === b.q2a_1.p20_1 && equals(a.s2a_1, b.s2a_1);
  }
  n2c(a, b) {
    var tmp = (a == null ? true : a instanceof ATNConfig) ? a : THROW_CCE();
    return this.m2c(tmp, (b == null ? true : b instanceof ATNConfig) ? b : THROW_CCE());
  }
}
class Companion_18 {
  n2p(mode, configs) {
    var tempConfig = configs;
    if (this.a2q(tempConfig)) {
      return true;
    }
    if (mode.equals(PredictionMode_SLL_getInstance())) {
      if (tempConfig.t2c_1) {
        var dup = new ATNConfigSet();
        var _iterator__ex2g4s = tempConfig.w();
        while (_iterator__ex2g4s.x()) {
          var c = _iterator__ex2g4s.y();
          var tempC = c;
          tempC = ATNConfig.b2b(tempC, Empty_getInstance());
          dup.b2d(tempC);
        }
        tempConfig = dup;
      }
    }
    var altSets = this.k2p(tempConfig);
    return this.k2s(altSets) && !this.l2s(tempConfig);
  }
  z2p(configs) {
    var _iterator__ex2g4s = configs.w();
    while (_iterator__ex2g4s.x()) {
      var c = _iterator__ex2g4s.y();
      var tmp = c.q2a_1;
      if (tmp instanceof RuleStopState) {
        return true;
      }
    }
    return false;
  }
  a2q(configs) {
    var _iterator__ex2g4s = configs.w();
    while (_iterator__ex2g4s.x()) {
      var config = _iterator__ex2g4s.y();
      var tmp = config.q2a_1;
      if (!(tmp instanceof RuleStopState)) {
        return false;
      }
    }
    return true;
  }
  t2p(altSets) {
    return this.u2p(altSets);
  }
  l2p(altSets) {
    return !this.m2s(altSets);
  }
  m2s(altSets) {
    var _iterator__ex2g4s = altSets.w();
    while (_iterator__ex2g4s.x()) {
      var alts = _iterator__ex2g4s.y();
      if (alts.e2p() === 1) {
        return true;
      }
    }
    return false;
  }
  k2s(altSets) {
    var _iterator__ex2g4s = altSets.w();
    while (_iterator__ex2g4s.x()) {
      var alts = _iterator__ex2g4s.y();
      if (alts.e2p() > 1) {
        return true;
      }
    }
    return false;
  }
  v2p(altSets) {
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
  s2p(altSets) {
    var all = this.z2q(altSets);
    if (all.e2p() === 1) {
      return all.d2p(0);
    }
    return 0;
  }
  z2q(altSets) {
    var all = BitSet.z2c();
    var _iterator__ex2g4s = altSets.w();
    while (_iterator__ex2g4s.x()) {
      var alts = _iterator__ex2g4s.y();
      all.n2s(alts);
    }
    return all;
  }
  k2p(configs) {
    var configToAlts = new AltAndContextMap();
    var _iterator__ex2g4s = configs.w();
    while (_iterator__ex2g4s.x()) {
      var c = _iterator__ex2g4s.y();
      var alts = configToAlts.r3(c);
      if (alts == null) {
        alts = BitSet.z2c();
        // Inline function 'kotlin.collections.set' call
        var value = alts;
        configToAlts.l3(c, value);
      }
      alts.a2d(c.r2a_1);
    }
    return configToAlts.o3();
  }
  o2s(configs) {
    var m = HashMap.y7();
    var _iterator__ex2g4s = configs.w();
    while (_iterator__ex2g4s.x()) {
      var c = _iterator__ex2g4s.y();
      var alts = m.r3(c.q2a_1);
      if (alts == null) {
        alts = BitSet.z2c();
        var tmp2 = c.q2a_1;
        // Inline function 'kotlin.collections.set' call
        var value = alts;
        m.l3(tmp2, value);
      }
      alts.a2d(c.r2a_1);
    }
    return m;
  }
  l2s(configs) {
    var x = this.o2s(configs);
    var _iterator__ex2g4s = x.o3().w();
    while (_iterator__ex2g4s.x()) {
      var alts = _iterator__ex2g4s.y();
      if (alts.e2p() === 1) {
        return true;
      }
    }
    return false;
  }
  u2p(altSets) {
    var viableAlts = BitSet.z2c();
    var _iterator__ex2g4s = altSets.w();
    while (_iterator__ex2g4s.x()) {
      var alts = _iterator__ex2g4s.y();
      var minAlt = alts.d2p(0);
      viableAlts.a2d(minAlt);
      if (viableAlts.e2p() > 1) {
        return 0;
      }
    }
    return viableAlts.d2p(0);
  }
}
class PredictionMode extends Enum {}
class RangeTransition extends Transition {
  constructor(target, from, to) {
    super(target);
    this.r2s_1 = from;
    this.s2s_1 = to;
    this.t2s_1 = 2;
  }
  a2i() {
    return this.t2s_1;
  }
  f2j() {
    return Companion_getInstance_26().u1w(this.r2s_1, this.s2s_1);
  }
  getLabel() {
    return this.f2j();
  }
  b2i(symbol, minVocabSymbol, maxVocabSymbol) {
    var containsLower = this.r2s_1;
    return symbol <= this.s2s_1 ? containsLower <= symbol : false;
  }
  toString() {
    var buf = StringBuilder.we("'");
    appendCodePoint(buf, this.r2s_1);
    buf.t("'..'");
    appendCodePoint(buf, this.s2s_1);
    buf.t("'");
    return buf.toString();
  }
}
class RuleStartState extends ATNState {
  constructor() {
    super();
    this.c2f_1 = null;
    this.d2f_1 = false;
    this.e2f_1 = 2;
  }
  v20() {
    return this.e2f_1;
  }
}
class RuleStopState extends ATNState {
  constructor() {
    super();
    this.b2t_1 = 7;
  }
  v20() {
    return this.b2t_1;
  }
}
class RuleTransition extends Transition {
  constructor(ruleStart, ruleIndex, precedence, followState) {
    super(ruleStart);
    this.x22_1 = ruleIndex;
    this.y22_1 = precedence;
    this.z22_1 = followState;
    this.a23_1 = 3;
    this.b23_1 = true;
  }
  a2i() {
    return this.a23_1;
  }
  z2h() {
    return this.b23_1;
  }
  b2i(symbol, minVocabSymbol, maxVocabSymbol) {
    return false;
  }
}
class Companion_19 {
  y2q(a, b) {
    if (a == null || a === Empty_getInstance()) {
      return b;
    }
    if (b == null || b === Empty_getInstance()) {
      return a;
    }
    var result = AND.d2t(a, b);
    var tmp;
    if (result.c2t_1.length === 1) {
      tmp = result.c2t_1[0];
    } else {
      tmp = result;
    }
    return tmp;
  }
  c2q(a, b) {
    if (a == null) {
      return b;
    }
    if (b == null) {
      return a;
    }
    if (a === Empty_getInstance() || b === Empty_getInstance()) {
      return Empty_getInstance();
    }
    var result = OR.f2t(a, b);
    var tmp;
    if (result.e2t_1.length === 1) {
      tmp = result.e2t_1[0];
    } else {
      tmp = result;
    }
    return tmp;
  }
}
class SemanticContext {
  static h2t() {
    return createThis(this);
  }
  b2q(parser, parserCallStack) {
    return this;
  }
}
class Empty extends SemanticContext {
  static g2t() {
    Empty_instance = null;
    var $this = this.h2t();
    Empty_instance = $this;
    return $this;
  }
  i2q(parser, parserCallStack) {
    return false;
  }
}
class Predicate extends SemanticContext {
  static i2t() {
    var $this = this.h2t();
    init_org_antlr_v4_kotlinruntime_atn_SemanticContext_Predicate($this);
    $this.m2r_1 = -1;
    $this.n2r_1 = -1;
    $this.o2r_1 = false;
    return $this;
  }
  static p2r(ruleIndex, predIndex, isCtxDependent) {
    var $this = this.h2t();
    init_org_antlr_v4_kotlinruntime_atn_SemanticContext_Predicate($this);
    $this.m2r_1 = ruleIndex;
    $this.n2r_1 = predIndex;
    $this.o2r_1 = isCtxDependent;
    return $this;
  }
  i2q(parser, parserCallStack) {
    var tmp;
    if (this.o2r_1) {
      tmp = parserCallStack;
    } else {
      tmp = null;
    }
    var localctx = tmp;
    return parser.x25(localctx, this.m2r_1, this.n2r_1);
  }
  hashCode() {
    var hashCode = MurmurHash_instance.z2m();
    hashCode = MurmurHash_instance.f2b(hashCode, this.m2r_1);
    hashCode = MurmurHash_instance.f2b(hashCode, this.n2r_1);
    hashCode = MurmurHash_instance.f2b(hashCode, this.o2r_1 ? 1 : 0);
    hashCode = MurmurHash_instance.h2b(hashCode, 3);
    return hashCode;
  }
  equals(other) {
    if (!(other instanceof Predicate)) {
      return false;
    }
    if (this === other) {
      return true;
    }
    return this.m2r_1 === other.m2r_1 && this.n2r_1 === other.n2r_1 && this.o2r_1 === other.o2r_1;
  }
  toString() {
    return '{' + this.m2r_1 + ':' + this.n2r_1 + '}?';
  }
}
class PrecedencePredicate extends SemanticContext {
  static l2r(precedence) {
    precedence = precedence === VOID ? 0 : precedence;
    var $this = this.h2t();
    $this.k2r_1 = precedence;
    return $this;
  }
  i2q(parser, parserCallStack) {
    return parser.y25(parserCallStack, this.k2r_1);
  }
  b2q(parser, parserCallStack) {
    var tmp;
    if (parser.y25(parserCallStack, this.k2r_1)) {
      tmp = Empty_getInstance();
    } else {
      tmp = null;
    }
    return tmp;
  }
  j2t(other) {
    return this.k2r_1 - other.k2r_1 | 0;
  }
  d(other) {
    return this.j2t(other instanceof PrecedencePredicate ? other : THROW_CCE());
  }
  hashCode() {
    var hashCode = 1;
    hashCode = imul(31, hashCode) + this.k2r_1 | 0;
    return hashCode;
  }
  equals(other) {
    if (!(other instanceof PrecedencePredicate)) {
      return false;
    }
    if (this === other) {
      return true;
    }
    return this.k2r_1 === other.k2r_1;
  }
  toString() {
    return '{' + this.k2r_1 + '>=prec}?';
  }
}
class Operator extends SemanticContext {
  static k2t() {
    return this.h2t();
  }
}
class AND extends Operator {
  static d2t(a, b) {
    var $this = this.k2t();
    var operands = LinkedHashSet.e2();
    if (a instanceof AND) {
      operands.c2(asList(a.c2t_1));
    } else {
      operands.z1(a);
    }
    if (b instanceof AND) {
      operands.c2(asList(b.c2t_1));
    } else {
      operands.z1(b);
    }
    var precedencePredicates = filterPrecedencePredicates(Companion_instance_19, operands);
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!precedencePredicates.u()) {
      var reduced = Collections_instance.a1v(precedencePredicates);
      operands.z1(reduced);
    }
    var tmp = $this;
    // Inline function 'kotlin.collections.toTypedArray' call
    tmp.c2t_1 = copyToArray(operands);
    return $this;
  }
  equals(other) {
    if (this === other) {
      return true;
    }
    if (!(other instanceof AND)) {
      return false;
    }
    return contentEquals_0(this.c2t_1, other.c2t_1);
  }
  hashCode() {
    var fqn = 'org.antlr.v4.kotlinruntime.atn.SemanticContext.AND';
    var seed = imul(31, getStringHashCode(fqn)) + getKClass(AND).hashCode() | 0;
    return MurmurHash_instance.l2t(this.c2t_1, seed);
  }
  i2q(parser, parserCallStack) {
    var indexedObject = this.c2t_1;
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var operand = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      if (!operand.i2q(parser, parserCallStack)) {
        return false;
      }
    }
    return true;
  }
  b2q(parser, parserCallStack) {
    var differs = false;
    var operands = ArrayList.u1();
    var indexedObject = this.c2t_1;
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var context = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      var evaluated = context.b2q(parser, parserCallStack);
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
        result = Companion_instance_19.y2q(result, operands.d2(i));
      }
       while (inductionVariable_0 < last_0);
    return result;
  }
  toString() {
    return joinToString(this.c2t_1, '&&');
  }
}
class OR extends Operator {
  static f2t(a, b) {
    var $this = this.k2t();
    var operands = LinkedHashSet.e2();
    if (a instanceof OR) {
      operands.c2(asList(a.e2t_1));
    } else {
      operands.z1(a);
    }
    if (b instanceof OR) {
      operands.c2(asList(b.e2t_1));
    } else {
      operands.z1(b);
    }
    var precedencePredicates = filterPrecedencePredicates(Companion_instance_19, operands);
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!precedencePredicates.u()) {
      var reduced = Collections_instance.b1v(precedencePredicates);
      operands.z1(reduced);
    }
    var tmp = $this;
    // Inline function 'kotlin.collections.toTypedArray' call
    tmp.e2t_1 = copyToArray(operands);
    return $this;
  }
  equals(other) {
    if (this === other) {
      return true;
    }
    if (!(other instanceof OR)) {
      return false;
    }
    return contentEquals_0(this.e2t_1, other.e2t_1);
  }
  hashCode() {
    var fqn = 'org.antlr.v4.kotlinruntime.atn.SemanticContext.OR';
    var seed = imul(31, getStringHashCode(fqn)) + getKClass(OR).hashCode() | 0;
    return MurmurHash_instance.l2t(this.e2t_1, seed);
  }
  i2q(parser, parserCallStack) {
    var indexedObject = this.e2t_1;
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var operand = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      if (operand.i2q(parser, parserCallStack)) {
        return true;
      }
    }
    return false;
  }
  b2q(parser, parserCallStack) {
    var differs = false;
    var operands = ArrayList.u1();
    var indexedObject = this.e2t_1;
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var context = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      var evaluated = context.b2q(parser, parserCallStack);
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
        result = Companion_instance_19.c2q(result, operands.d2(i));
      }
       while (inductionVariable_0 < last_0);
    return result;
  }
  toString() {
    return joinToString(this.e2t_1, '||');
  }
}
class Companion_20 {
  u2k(parent, returnState) {
    var tmp;
    if (returnState === 2147483647 && parent == null) {
      tmp = EmptyPredictionContext_getInstance();
    } else {
      tmp = SingletonPredictionContext.i2k(parent, returnState);
    }
    return tmp;
  }
}
class StarBlockStartState extends BlockStartState {
  constructor() {
    super();
    this.w2t_1 = 5;
  }
  v20() {
    return this.w2t_1;
  }
}
class StarLoopEntryState extends DecisionState {
  constructor() {
    super();
    this.a2g_1 = null;
    this.b2g_1 = false;
    this.c2g_1 = 10;
  }
  v20() {
    return this.c2g_1;
  }
}
class StarLoopbackState extends ATNState {
  constructor() {
    super();
    this.e2u_1 = 9;
  }
  v20() {
    return this.e2u_1;
  }
}
class TokensStartState extends DecisionState {
  constructor() {
    super();
    this.o2u_1 = 6;
  }
  v20() {
    return this.o2u_1;
  }
}
class Companion_21 {
  constructor() {
    Companion_instance_21 = this;
    this.p2u_1 = 1;
    this.q2u_1 = 2;
    this.r2u_1 = 3;
    this.s2u_1 = 4;
    this.t2u_1 = 5;
    this.u2u_1 = 6;
    this.v2u_1 = 7;
    this.w2u_1 = 8;
    this.x2u_1 = 9;
    this.y2u_1 = 10;
    var tmp = this;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.z2u_1 = ['INVALID', 'EPSILON', 'RANGE', 'RULE', 'PREDICATE', 'ATOM', 'ACTION', 'SET', 'NOT_SET', 'WILDCARD', 'PRECEDENCE'];
  }
}
class WildcardTransition extends Transition {
  constructor(target) {
    super(target);
    this.c2v_1 = 9;
  }
  a2i() {
    return this.c2v_1;
  }
  b2i(symbol, minVocabSymbol, maxVocabSymbol) {
    return minVocabSymbol <= symbol ? symbol <= maxVocabSymbol : false;
  }
  toString() {
    return '.';
  }
}
class sam$kotlin_Comparator$0 {
  constructor(function_0) {
    this.d2v_1 = function_0;
  }
  wg(a, b) {
    return this.d2v_1(a, b);
  }
  compare(a, b) {
    return this.wg(a, b);
  }
  f4() {
    return this.d2v_1;
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
    this.q2l_1 = atnStartState;
    this.r2l_1 = decision;
    this.s2l_1 = HashMap.y7();
    this.t2l_1 = null;
    var isPrecedenceDfa = false;
    var tmp = this.q2l_1;
    if (tmp instanceof StarLoopEntryState) {
      if (this.q2l_1.b2g_1) {
        isPrecedenceDfa = true;
        var precedenceState = DFAState.f2h(new ATNConfigSet());
        var tmp_0 = precedenceState;
        // Inline function 'kotlin.arrayOfNulls' call
        tmp_0.z2g_1 = Array(0);
        precedenceState.a2h_1 = false;
        precedenceState.d2h_1 = false;
        this.t2l_1 = precedenceState;
      }
    }
    this.u2l_1 = isPrecedenceDfa;
  }
  t2o(precedence) {
    if (!this.u2l_1) {
      throw IllegalStateException.l4('Only precedence DFAs may contain a precedence start state.');
    }
    var edges = ensureNotNull(ensureNotNull(this.t2l_1).z2g_1);
    var tmp;
    if (precedence < 0 || precedence >= edges.length) {
      tmp = null;
    } else {
      tmp = edges[precedence];
    }
    return tmp;
  }
  x2o(precedence, startState) {
    if (!this.u2l_1) {
      throw IllegalStateException.l4('Only precedence DFAs may contain a precedence start state.');
    }
    if (precedence < 0) {
      return Unit_instance;
    }
    var s0 = ensureNotNull(this.t2l_1);
    // Inline function 'com.strumenta.antlrkotlin.runtime.synchronized' call
    if (precedence >= ensureNotNull(s0.z2g_1).length) {
      s0.z2g_1 = copyOf(ensureNotNull(s0.z2g_1), precedence + 1 | 0);
    }
    ensureNotNull(s0.z2g_1)[precedence] = startState;
  }
  e2v() {
    var result = ArrayList.v1(this.s2l_1.n3());
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
    return this.x21(Companion_getInstance_5().b29_1);
  }
  x21(vocabulary) {
    if (this.t2l_1 == null) {
      return '';
    }
    var serializer = new DFASerializer(this, vocabulary);
    return serializer.toString();
  }
  z2l() {
    if (this.t2l_1 == null) {
      return '';
    }
    var serializer = new LexerDFASerializer(this);
    return serializer.toString();
  }
}
class DFASerializer {
  constructor(dfa, vocabulary) {
    this.f2v_1 = dfa;
    this.g2v_1 = vocabulary;
  }
  toString() {
    if (this.f2v_1.t2l_1 == null) {
      return 'null';
    }
    var buf = StringBuilder.s();
    var states = this.f2v_1.e2v();
    var _iterator__ex2g4s = states.w();
    while (_iterator__ex2g4s.x()) {
      var s = _iterator__ex2g4s.y();
      var n = 0;
      var edges = s.z2g_1;
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
          if (!(t == null) && !(t.x2g_1 === 2147483647)) {
            buf.t(this.h2v(s));
            buf.t('-');
            buf.t(this.i2v(i));
            buf.t('->');
            buf.t(this.h2v(t));
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
  i2v(i) {
    return this.g2v_1.u1x(i - 1 | 0);
  }
  h2v(s) {
    var n = s.x2g_1;
    var baseStateStr = (s.a2h_1 ? ':' : '') + 's' + n + (s.d2h_1 ? '^' : '');
    var tmp;
    if (s.a2h_1) {
      var predicates = s.e2h_1;
      var tmp_0;
      if (!(predicates == null)) {
        tmp_0 = baseStateStr + '=>' + joinToString(predicates);
      } else {
        tmp_0 = baseStateStr + '=>' + s.b2h_1;
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
    this.g2q_1 = pred;
    this.h2q_1 = alt;
  }
  toString() {
    return '(' + toString_0(this.g2q_1) + ', ' + this.h2q_1 + ')';
  }
}
class DFAState {
  static j2v() {
    var $this = createThis(this);
    init_org_antlr_v4_kotlinruntime_dfa_DFAState($this);
    return $this;
  }
  static f2h(configs) {
    var $this = createThis(this);
    init_org_antlr_v4_kotlinruntime_dfa_DFAState($this);
    $this.y2g_1 = configs;
    return $this;
  }
  hashCode() {
    var hash = MurmurHash_instance.e2b(7);
    hash = MurmurHash_instance.f2b(hash, this.y2g_1.hashCode());
    hash = MurmurHash_instance.h2b(hash, 1);
    return hash;
  }
  equals(other) {
    if (this === other) {
      return true;
    }
    if (!(other instanceof DFAState)) {
      return false;
    }
    return this.y2g_1.equals(other.y2g_1);
  }
  toString() {
    var buf = StringBuilder.s();
    buf.af(this.x2g_1);
    buf.t(':');
    buf.z(this.y2g_1);
    if (this.a2h_1) {
      buf.t('=>');
      var predicates = this.e2h_1;
      if (!(predicates == null)) {
        buf.t(joinToString(predicates));
      } else {
        buf.af(this.b2h_1);
      }
    }
    return buf.toString();
  }
}
class LexerDFASerializer extends DFASerializer {
  constructor(dfa) {
    super(dfa, Companion_getInstance_5().b29_1);
  }
  i2v(i) {
    var buf = StringBuilder.s();
    buf.t("'");
    appendCodePoint(buf, i);
    buf.t("'");
    return buf.toString();
  }
}
class Companion_22 {
  constructor() {
    this.m2v_1 = 16;
    this.n2v_1 = 8;
    this.o2v_1 = 0.75;
  }
}
class SetIterator {
  constructor($outer, data) {
    this.s2v_1 = $outer;
    this.p2v_1 = data;
    this.q2v_1 = 0;
    this.r2v_1 = true;
  }
  x() {
    return this.q2v_1 < this.p2v_1.length;
  }
  y() {
    if (!this.x()) {
      throw NoSuchElementException.v5();
    }
    this.r2v_1 = false;
    var _unary__edvuaz = this.q2v_1;
    this.q2v_1 = _unary__edvuaz + 1 | 0;
    return this.p2v_1[_unary__edvuaz];
  }
  r5() {
    if (this.r2v_1) {
      throw IllegalStateException.ac();
    }
    this.s2v_1.h2c(this.p2v_1[this.q2v_1 - 1 | 0]);
    this.r2v_1 = true;
  }
}
class DoubleKeyMap {
  constructor() {
    this.u2r_1 = LinkedHashMap.mb();
  }
  x2r(k1, k2, v) {
    var data2 = this.u2r_1.r3(k1);
    var prev = null;
    if (data2 == null) {
      data2 = LinkedHashMap.mb();
      var tmp0 = this.u2r_1;
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
  v2r(k1, k2) {
    var tmp0_elvis_lhs = this.u2r_1.r3(k1);
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
    this.t2v_1 = 16;
    this.u2v_1 = 8;
    this.v2v_1 = 0.75;
  }
}
class Entry {
  constructor(key, value) {
    this.w2v_1 = key;
    this.x2v_1 = value;
  }
  toString() {
    return toString_1(this.w2v_1) + ':' + toString_1(this.x2v_1);
  }
  hashCode() {
    var result = this.w2v_1 == null ? 0 : hashCode(this.w2v_1);
    result = imul(result, 31) + (this.x2v_1 == null ? 0 : hashCode(this.x2v_1)) | 0;
    return result;
  }
  equals(other) {
    if (this === other)
      return true;
    if (!(other instanceof Entry))
      return false;
    var tmp0_other_with_cast = other instanceof Entry ? other : THROW_CCE();
    if (!equals(this.w2v_1, tmp0_other_with_cast.w2v_1))
      return false;
    if (!equals(this.x2v_1, tmp0_other_with_cast.x2v_1))
      return false;
    return true;
  }
}
class Companion_24 {
  constructor() {
    Companion_instance_24 = this;
    this.y2v_1 = new Int32Array(0);
    this.z2v_1 = 4;
    this.a2w_1 = 2147483639;
  }
}
class IntegerList {
  n25() {
    return this.b25_1 === 0;
  }
  static b2w() {
    Companion_getInstance_24();
    var $this = createThis(this);
    init_org_antlr_v4_kotlinruntime_misc_IntegerList($this);
    $this.a25_1 = Companion_getInstance_24().y2v_1;
    return $this;
  }
  v1z(value) {
    if (this.a25_1.length === this.b25_1) {
      ensureCapacity(this, this.b25_1 + 1 | 0);
    }
    this.a25_1[this.b25_1] = value;
    this.b25_1 = this.b25_1 + 1 | 0;
  }
  d2(index) {
    if (index < 0 || index >= this.b25_1) {
      throw IndexOutOfBoundsException.lc();
    }
    return this.a25_1[index];
  }
  x3(index) {
    var value = this.d2(index);
    var inductionVariable = 0;
    var last = (this.b25_1 - index | 0) - 1 | 0;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        this.a25_1[index + i | 0] = this.a25_1[(index + i | 0) + 1 | 0];
      }
       while (inductionVariable < last);
    this.a25_1[this.b25_1 - 1 | 0] = 0;
    this.b25_1 = this.b25_1 - 1 | 0;
    return value;
  }
  x1v() {
    return this.b25_1;
  }
  u3() {
    fill(this.a25_1, 0);
    this.b25_1 = 0;
  }
  m7() {
    var tmp;
    if (this.b25_1 === 0) {
      tmp = Companion_getInstance_24().y2v_1;
    } else {
      // Inline function 'kotlin.collections.copyOf' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp = this.a25_1.slice();
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
      tmp = !(this.b25_1 === other.b25_1);
    }
    if (tmp) {
      return false;
    }
    var inductionVariable = 0;
    var last = this.b25_1;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (!(this.a25_1[i] === other.a25_1[i])) {
          return false;
        }
      }
       while (inductionVariable < last);
    return true;
  }
  hashCode() {
    var hashCode = 1;
    var inductionVariable = 0;
    var last = this.b25_1;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        hashCode = imul(31, hashCode) + this.a25_1[i] | 0;
      }
       while (inductionVariable < last);
    return hashCode;
  }
  toString() {
    return joinToString_0(this.m7());
  }
}
class IntegerStack extends IntegerList {
  static l24() {
    var $this = this.b2w();
    init_org_antlr_v4_kotlinruntime_misc_IntegerStack($this);
    return $this;
  }
  l25(value) {
    return this.v1z(value);
  }
  p25() {
    return this.x3(this.x1v() - 1 | 0);
  }
  o25() {
    return this.d2(this.x1v() - 1 | 0);
  }
}
class Companion_25 {
  constructor() {
    Companion_instance_25 = this;
    this.r1w_1 = 1000;
    this.s1w_1 = new Interval(-1, -2);
    var tmp = this;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp.t1w_1 = Array(1001);
  }
  u1w(a, b) {
    if (!(a === b) || a < 0 || a > 1000) {
      return new Interval(a, b);
    }
    var interval = this.t1w_1[a];
    if (interval == null) {
      interval = new Interval(a, a);
      this.t1w_1[a] = interval;
    }
    return interval;
  }
}
class Interval {
  constructor(a, b) {
    Companion_getInstance_25();
    this.n1w_1 = a;
    this.o1w_1 = b;
  }
  c2w(other) {
    return this.n1w_1 < other.n1w_1 && this.o1w_1 < other.n1w_1;
  }
  d2w(other) {
    return this.n1w_1 > other.o1w_1;
  }
  e2w(other) {
    return this.c2w(other) || this.d2w(other);
  }
  f2w(other) {
    return this.n1w_1 === (other.o1w_1 + 1 | 0) || this.o1w_1 === (other.n1w_1 - 1 | 0);
  }
  g2w(other) {
    var tmp = Companion_getInstance_25();
    var tmp0 = this.n1w_1;
    // Inline function 'kotlin.math.min' call
    var b = other.n1w_1;
    var tmp_0 = Math.min(tmp0, b);
    var tmp0_0 = this.o1w_1;
    // Inline function 'kotlin.math.max' call
    var b_0 = other.o1w_1;
    var tmp$ret$1 = Math.max(tmp0_0, b_0);
    return tmp.u1w(tmp_0, tmp$ret$1);
  }
  equals(other) {
    var tmp;
    var tmp_0;
    if (other instanceof Interval) {
      tmp_0 = this.n1w_1 === other.n1w_1;
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = this.o1w_1 === other.o1w_1;
    } else {
      tmp = false;
    }
    return tmp;
  }
  hashCode() {
    var hash = 23;
    hash = imul(hash, 31) + this.n1w_1 | 0;
    hash = imul(hash, 31) + this.o1w_1 | 0;
    return hash;
  }
  toString() {
    return '' + this.n1w_1 + '..' + this.o1w_1;
  }
}
class Companion_26 {
  constructor() {
    Companion_instance_26 = this;
    var tmp = this;
    // Inline function 'kotlin.also' call
    var this_0 = this.u1w(0, 1114111);
    this_0.c2a(true);
    tmp.g2j_1 = this_0;
    var tmp_0 = this;
    // Inline function 'kotlin.also' call
    var this_1 = IntervalSet.u1z();
    this_1.c2a(true);
    tmp_0.h2j_1 = this_1;
  }
  i2j(a) {
    var s = IntervalSet.u1z();
    s.v1z(a);
    return s;
  }
  u1w(a, b) {
    var s = IntervalSet.u1z();
    s.w2d(a, b);
    return s;
  }
  h2w(left, right) {
    if (left.r22()) {
      return IntervalSet.u1z();
    }
    var result = IntervalSet.i2w(left);
    if (right.r22()) {
      return result;
    }
    var resultI = 0;
    var rightI = 0;
    $l$loop_4: while (resultI < result.s1z_1.b2() && rightI < right.s1z_1.b2()) {
      var resultInterval = result.s1z_1.d2(resultI);
      var rightInterval = right.s1z_1.d2(rightI);
      if (rightInterval.o1w_1 < resultInterval.n1w_1) {
        rightI = rightI + 1 | 0;
        continue $l$loop_4;
      }
      if (rightInterval.n1w_1 > resultInterval.o1w_1) {
        resultI = resultI + 1 | 0;
        continue $l$loop_4;
      }
      var beforeCurrent = null;
      var afterCurrent = null;
      if (rightInterval.n1w_1 > resultInterval.n1w_1) {
        beforeCurrent = new Interval(resultInterval.n1w_1, rightInterval.n1w_1 - 1 | 0);
      }
      if (rightInterval.o1w_1 < resultInterval.o1w_1) {
        afterCurrent = new Interval(rightInterval.o1w_1 + 1 | 0, resultInterval.o1w_1);
      }
      if (!(beforeCurrent == null)) {
        if (!(afterCurrent == null)) {
          result.s1z_1.v3(resultI, beforeCurrent);
          result.s1z_1.w3(resultI + 1 | 0, afterCurrent);
          resultI = resultI + 1 | 0;
          rightI = rightI + 1 | 0;
          continue $l$loop_4;
        } else {
          result.s1z_1.v3(resultI, beforeCurrent);
          resultI = resultI + 1 | 0;
          continue $l$loop_4;
        }
      } else {
        if (!(afterCurrent == null)) {
          result.s1z_1.v3(resultI, afterCurrent);
          rightI = rightI + 1 | 0;
          continue $l$loop_4;
        } else {
          result.s1z_1.x3(resultI);
          continue $l$loop_4;
        }
      }
    }
    return result;
  }
}
class IntervalSet {
  r22() {
    return this.s1z_1.b2() === 0;
  }
  q22() {
    if (this.r22()) {
      throw RuntimeException.ba('set is empty');
    }
    return this.s1z_1.d2(0).n1w_1;
  }
  c2a(value) {
    if (this.t1z_1 && !value) {
      throw IllegalStateException.l4("can't alter readonly IntervalSet");
    }
    this.t1z_1 = value;
  }
  static u1z() {
    Companion_getInstance_26();
    var $this = createThis(this);
    init_org_antlr_v4_kotlinruntime_misc_IntervalSet($this);
    $this.s1z_1 = ArrayList.y1(16);
    return $this;
  }
  static i2w(set) {
    Companion_getInstance_26();
    var $this = createThis(this);
    init_org_antlr_v4_kotlinruntime_misc_IntervalSet($this);
    $this.s1z_1 = ArrayList.y1(set.s1z_1.b2());
    $this.c23(set);
    return $this;
  }
  v1z(el) {
    return this.w2d(el, el);
  }
  w2d(a, b) {
    return add(this, Companion_getInstance_25().u1w(a, b));
  }
  c23(set) {
    if (set instanceof IntervalSet) {
      var setIntervals = set.s1z_1;
      var inductionVariable = 0;
      var last = setIntervals.b2();
      if (inductionVariable < last)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var I = setIntervals.d2(i);
          this.w2d(I.n1w_1, I.o1w_1);
        }
         while (inductionVariable < last);
    } else {
      var _iterator__ex2g4s = set.j2w().w();
      while (_iterator__ex2g4s.x()) {
        var value = _iterator__ex2g4s.y();
        this.v1z(value);
      }
    }
    return this;
  }
  t2k(elements) {
    if (elements.r22()) {
      return IntervalSet.u1z();
    }
    var tmp;
    if (elements instanceof IntervalSet) {
      tmp = elements;
    } else {
      var temp = IntervalSet.u1z();
      temp.c23(elements);
      tmp = temp;
    }
    var vocabularyIS = tmp;
    return vocabularyIS.k2w(this);
  }
  k2w(a) {
    if (a.r22()) {
      return IntervalSet.i2w(this);
    }
    if (a instanceof IntervalSet) {
      return Companion_getInstance_26().h2w(this, a);
    }
    var other = IntervalSet.u1z();
    other.c23(a);
    return Companion_getInstance_26().h2w(this, other);
  }
  j21(a) {
    var o = IntervalSet.u1z();
    o.c23(this);
    o.c23(a);
    return o;
  }
  vk(el) {
    var n = this.s1z_1.b2();
    var l = 0;
    var r = n - 1 | 0;
    while (l <= r) {
      var m = (l + r | 0) / 2 | 0;
      var I = this.s1z_1.d2(m);
      var a = I.n1w_1;
      var b = I.o1w_1;
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
    var hash = MurmurHash_instance.z2m();
    var _iterator__ex2g4s = this.s1z_1.w();
    while (_iterator__ex2g4s.x()) {
      var I = _iterator__ex2g4s.y();
      hash = MurmurHash_instance.f2b(hash, I.n1w_1);
      hash = MurmurHash_instance.f2b(hash, I.o1w_1);
    }
    hash = MurmurHash_instance.h2b(hash, imul(this.s1z_1.b2(), 2));
    return hash;
  }
  equals(other) {
    var tmp;
    if (other instanceof IntervalSet) {
      tmp = equals(this.s1z_1, other.s1z_1);
    } else {
      tmp = false;
    }
    return tmp;
  }
  toString() {
    return this.l2w(false);
  }
  l2w(elemAreChar) {
    if (this.s1z_1.u()) {
      return '{}';
    }
    var buf = StringBuilder.eb(64);
    if (this.x1v() > 1) {
      buf.t('{');
    }
    var n = this.s1z_1.b2();
    var index = 0;
    while (index < n) {
      var _unary__edvuaz = index;
      index = _unary__edvuaz + 1 | 0;
      var I = this.s1z_1.d2(_unary__edvuaz);
      var a = I.n1w_1;
      var b = I.o1w_1;
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
    if (this.x1v() > 1) {
      buf.t('}');
    }
    return buf.toString();
  }
  x21(vocabulary) {
    if (this.s1z_1.u()) {
      return '{}';
    }
    var buf = StringBuilder.eb(64);
    if (this.x1v() > 1) {
      buf.t('{');
    }
    var n = this.s1z_1.b2();
    var index = 0;
    while (index < n) {
      var _unary__edvuaz = index;
      index = _unary__edvuaz + 1 | 0;
      var I = this.s1z_1.d2(_unary__edvuaz);
      var a = I.n1w_1;
      var b = I.o1w_1;
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
    if (this.x1v() > 1) {
      buf.t('}');
    }
    return buf.toString();
  }
  x1v() {
    var numIntervals = this.s1z_1.b2();
    if (numIntervals === 1) {
      var firstInterval = this.s1z_1.d2(0);
      return (firstInterval.o1w_1 - firstInterval.n1w_1 | 0) + 1 | 0;
    }
    var n = 0;
    var inductionVariable = 0;
    if (inductionVariable < numIntervals)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var I = this.s1z_1.d2(i);
        n = n + ((I.o1w_1 - I.n1w_1 | 0) + 1 | 0) | 0;
      }
       while (inductionVariable < numIntervals);
    return n;
  }
  j2w() {
    var values = ArrayList.y1(32);
    var n = this.s1z_1.b2();
    var inductionVariable = 0;
    if (inductionVariable < n)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var I = this.s1z_1.d2(i);
        var a = I.n1w_1;
        var b = I.o1w_1;
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
  e23(el) {
    if (this.t1z_1) {
      throw IllegalStateException.l4("can't alter readonly IntervalSet");
    }
    var n = this.s1z_1.b2();
    var inductionVariable = 0;
    if (inductionVariable < n)
      $l$loop_2: do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var I = this.s1z_1.d2(i);
        var a = I.n1w_1;
        var b = I.o1w_1;
        if (el < a) {
          break $l$loop_2;
        }
        if (el === a && el === b) {
          this.s1z_1.x3(i);
          break $l$loop_2;
        }
        if (el === a) {
          I.n1w_1 = I.n1w_1 + 1 | 0;
          break $l$loop_2;
        }
        if (el === b) {
          I.o1w_1 = I.o1w_1 - 1 | 0;
          break $l$loop_2;
        }
        if (el < b) {
          var oldB = I.o1w_1;
          I.o1w_1 = el - 1 | 0;
          this.w2d(el + 1 | 0, oldB);
        }
      }
       while (inductionVariable < n);
  }
}
class MurmurHash {
  constructor() {
    this.d2b_1 = 0;
  }
  e2b(seed) {
    return seed;
  }
  z2m(seed, $super) {
    seed = seed === VOID ? 0 : seed;
    return $super === VOID ? this.e2b(seed) : $super.e2b.call(this, seed);
  }
  f2b(hash, value) {
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
  g2b(hash, value) {
    var tmp1_elvis_lhs = value == null ? null : hashCode(value);
    return this.f2b(hash, tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs);
  }
  h2b(hash, numberOfWords) {
    var tempHash = hash;
    tempHash = tempHash ^ imul(numberOfWords, 4);
    tempHash = tempHash ^ (tempHash >>> 16 | 0);
    tempHash = imul(tempHash, -2048144789);
    tempHash = tempHash ^ (tempHash >>> 13 | 0);
    tempHash = imul(tempHash, -1028477387);
    tempHash = tempHash ^ (tempHash >>> 16 | 0);
    return tempHash;
  }
  l2t(data, seed) {
    var hash = this.e2b(seed);
    var inductionVariable = 0;
    var last = data.length;
    while (inductionVariable < last) {
      var value = data[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      hash = this.g2b(hash, value);
    }
    hash = this.h2b(hash, data.length);
    return hash;
  }
}
class Companion_27 {
  constructor() {
    Companion_instance_27 = this;
    this.h2l_1 = new ObjectEqualityComparator();
  }
}
class ObjectEqualityComparator extends AbstractEqualityComparator {
  constructor() {
    Companion_getInstance_27();
    super();
  }
  l2c(obj) {
    var tmp1_elvis_lhs = obj == null ? null : hashCode(obj);
    return tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
  }
  n2c(a, b) {
    return a == null && b == null || equals(a, b);
  }
}
class Utils {
  m26(s, escapeSpaces) {
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
    this.m2w_1 = symbol;
    this.n2w_1 = null;
    this.o2w_1 = 0;
  }
  t28() {
    return this.m2w_1;
  }
  j28() {
    return this.o2w_1;
  }
  j1f() {
    return ensureNotNull(this.t28().j1f());
  }
  o28(value) {
    this.n2w_1 = value;
  }
  q28(i) {
    return null;
  }
  toString() {
    var tmp;
    if (this.t28().v1r() === -1) {
      tmp = '<EOF>';
    } else {
      tmp = ensureNotNull(this.t28().j1f());
    }
    return tmp;
  }
}
class ErrorNodeImpl extends TerminalNodeImpl {}
class Companion_28 {
  constructor() {
    Companion_instance_28 = this;
    this.p2w_1 = new ParseTreeWalker();
  }
}
class ParseTreeWalker {
  constructor() {
    Companion_getInstance_28();
  }
  q2w(listener, t) {
    if (isInterface(t, ErrorNode)) {
      listener.w27(t);
      return Unit_instance;
    } else {
      if (isInterface(t, TerminalNode)) {
        listener.v27(t);
        return Unit_instance;
      }
    }
    var r = isInterface(t, RuleNode) ? t : THROW_CCE();
    this.r2w(listener, r);
    var n = r.j28();
    var inductionVariable = 0;
    if (inductionVariable < n)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        this.q2w(listener, ensureNotNull(r.q28(i)));
      }
       while (inductionVariable < n);
    this.s2w(listener, r);
  }
  r2w(listener, r) {
    var tmp = r.k28();
    var ctx = tmp instanceof ParserRuleContext ? tmp : THROW_CCE();
    listener.o27(ctx);
    ctx.p27(listener);
  }
  s2w(listener, r) {
    var tmp = r.k28();
    var ctx = tmp instanceof ParserRuleContext ? tmp : THROW_CCE();
    ctx.r27(listener);
    listener.s27(ctx);
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
  static t2w(size) {
    var $this = createThis(this);
    var tmp = $this;
    // Inline function 'com.strumenta.antlrkotlin.runtime.newArray' call
    tmp.y2c_1 = Array(size);
    // Inline function 'kotlin.require' call
    if (!(size >= 0)) {
      var message = 'The initial bitset size must be equal or greater than 0';
      throw IllegalArgumentException.m1(toString_0(message));
    }
    return $this;
  }
  static z2c() {
    return this.t2w(64);
  }
  a2d(bitIndex) {
    if (bitIndex < 0) {
      throw IndexOutOfBoundsException.mc('bitIndex < 0: ' + bitIndex);
    }
    this.y2c_1[bitIndex] = true;
  }
  s2k(bitIndex) {
    if (bitIndex < 0) {
      throw IndexOutOfBoundsException.mc('bitIndex < 0: ' + bitIndex);
    }
    delete(this.y2c_1[bitIndex]);
  }
  d2(bitIndex) {
    if (bitIndex < 0) {
      throw IndexOutOfBoundsException.mc('bitIndex < 0: ' + bitIndex);
    }
    if (bitIndex >= this.y2c_1.length) {
      return false;
    }
    return this.y2c_1[bitIndex] === true;
  }
  e2p() {
    var c = 0;
    var inductionVariable = 0;
    var last = this.y2c_1.length - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (this.y2c_1[i] === true) {
          c = c + 1 | 0;
        }
      }
       while (inductionVariable <= last);
    return c;
  }
  d2p(startIndex) {
    if (startIndex < 0) {
      throw IndexOutOfBoundsException.mc('fromIndex < 0: ' + startIndex);
    }
    if (startIndex >= this.y2c_1.length) {
      return -1;
    }
    var inductionVariable = startIndex;
    var last = this.y2c_1.length;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (this.y2c_1[i] === true) {
          return i;
        }
      }
       while (inductionVariable < last);
    return -1;
  }
  n2s(another) {
    var inductionVariable = 0;
    var last = another.y2c_1.length;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var result = this.y2c_1[i] === true || another.y2c_1[i] === true;
        if (result) {
          this.y2c_1[i] = true;
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
        tmp_0 = contentEquals_1(this, this.y2c_1, other.y2c_1);
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    }
    return tmp;
  }
  hashCode() {
    var fqn = 'com.strumenta.antlrkotlin.runtime.BitSet';
    var hashCode = MurmurHash_instance.e2b(getStringHashCode(fqn));
    var on = 0;
    var inductionVariable = 0;
    var last = this.y2c_1.length - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (this.y2c_1[i] === true) {
          hashCode = MurmurHash_instance.f2b(hashCode, i);
          on = on + 1 | 0;
        }
      }
       while (inductionVariable <= last);
    return MurmurHash_instance.h2b(hashCode, on);
  }
  toString() {
    var sb = StringBuilder.s();
    var first = true;
    sb.t('{');
    var index = this.d2p(0);
    while (!(index === -1)) {
      if (!first) {
        sb.t(', ');
      } else {
        first = false;
      }
      sb.af(index);
      index = this.d2p(index + 1 | 0);
    }
    sb.t('}');
    return sb.toString();
  }
}
class IdentityEntry {
  constructor($outer, key, value) {
    this.x2w_1 = $outer;
    this.v2w_1 = key;
    this.w2w_1 = value;
  }
  j3() {
    return this.v2w_1;
  }
  k3() {
    return this.w2w_1;
  }
}
class IdentityEntriesView$iterator$1 {
  constructor($iterator, this$0) {
    this.z2w_1 = $iterator;
    this.a2x_1 = this$0;
    this.y2w_1 = null;
  }
  x() {
    return this.z2w_1.x();
  }
  y() {
    var _destruct__k2r9zo = this.z2w_1.y();
    var key = component1(_destruct__k2r9zo);
    var value = component2(_destruct__k2r9zo);
    var entry = new IdentityEntry(this.a2x_1, key, value);
    this.y2w_1 = entry;
    return entry;
  }
  r5() {
    // Inline function 'kotlin.checkNotNull' call
    var tmp0 = this.y2w_1;
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
    remove(this.a2x_1, lastEntry.v2w_1, lastEntry.w2w_1);
  }
}
class IdentityEntriesView extends AbstractMutableSet {
  static b2x(jsMap) {
    var $this = this.h7();
    $this.u2w_1 = jsMap;
    return $this;
  }
  b2() {
    return this.u2w_1.size;
  }
  u() {
    return this.u2w_1.size === 0;
  }
  c2x(element) {
    throw UnsupportedOperationException.l9('Adding is not supported on entries');
  }
  z1(element) {
    return this.c2x((!(element == null) ? isInterface(element, MutableEntry) : false) ? element : THROW_CCE());
  }
  d2x(element) {
    // Inline function 'com.strumenta.antlrkotlin.runtime.undefinedToNull' call
    var value = element.j3();
    var k = value === undefined ? null : value;
    return this.u2w_1.has(k) && this.u2w_1.get(k) === element.k3();
  }
  g2(element) {
    if (!(!(element == null) ? isInterface(element, MutableEntry) : false))
      return false;
    return this.d2x((!(element == null) ? isInterface(element, MutableEntry) : false) ? element : THROW_CCE());
  }
  w() {
    var iterator_0 = toKotlinIterator(iterator(this.u2w_1));
    return new IdentityEntriesView$iterator$1(iterator_0, this);
  }
}
class IdentityHashMap {
  constructor() {
    this.e2x_1 = new Map();
  }
  b2() {
    return this.e2x_1.size;
  }
  n3() {
    return IdentityKeysView.g2x(this);
  }
  o3() {
    return IdentityValuesView.i2x(this);
  }
  m2() {
    return IdentityEntriesView.b2x(this.e2x_1);
  }
  u() {
    return this.e2x_1.size === 0;
  }
  r3(key) {
    // Inline function 'com.strumenta.antlrkotlin.runtime.undefinedToNull' call
    var k = key === undefined ? null : key;
    // Inline function 'com.strumenta.antlrkotlin.runtime.undefinedToNull' call
    var value = this.e2x_1.get(k);
    return value === undefined ? null : value;
  }
  l3(key, value) {
    // Inline function 'com.strumenta.antlrkotlin.runtime.undefinedToNull' call
    var k = key === undefined ? null : key;
    var previousValue = this.e2x_1.get(k);
    this.e2x_1.set(k, value);
    // Inline function 'com.strumenta.antlrkotlin.runtime.undefinedToNull' call
    return previousValue === undefined ? null : previousValue;
  }
  m3(key) {
    // Inline function 'com.strumenta.antlrkotlin.runtime.undefinedToNull' call
    var k = key === undefined ? null : key;
    var removedValue = this.e2x_1.get(k);
    this.e2x_1.delete(k);
    // Inline function 'com.strumenta.antlrkotlin.runtime.undefinedToNull' call
    return removedValue === undefined ? null : removedValue;
  }
  p3(key) {
    // Inline function 'com.strumenta.antlrkotlin.runtime.undefinedToNull' call
    var k = key === undefined ? null : key;
    return this.e2x_1.has(k);
  }
  q3(value) {
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s = toKotlinIterator(this.e2x_1.values());
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
    this.j2x_1 = $entriesIterator;
  }
  x() {
    return this.j2x_1.x();
  }
  y() {
    return this.j2x_1.y().j3();
  }
  r5() {
    return this.j2x_1.r5();
  }
}
class IdentityKeysView extends AbstractMutableSet {
  static g2x(map) {
    var $this = this.h7();
    $this.f2x_1 = map;
    return $this;
  }
  b2() {
    return this.f2x_1.b2();
  }
  u() {
    return this.f2x_1.u();
  }
  p8(element) {
    return this.f2x_1.p3(element);
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
    var entriesIterator = this.f2x_1.m2().w();
    return new IdentityKeysView$iterator$1(entriesIterator);
  }
}
class IdentityValuesView$iterator$1 {
  constructor($entriesIterator) {
    this.k2x_1 = $entriesIterator;
  }
  x() {
    return this.k2x_1.x();
  }
  y() {
    return this.k2x_1.y().k3();
  }
  r5() {
    return this.k2x_1.r5();
  }
}
class IdentityValuesView extends AbstractMutableCollection {
  static i2x(map) {
    var $this = this.o5();
    $this.h2x_1 = map;
    return $this;
  }
  b2() {
    return this.h2x_1.b2();
  }
  u() {
    return this.h2x_1.u();
  }
  z8(element) {
    throw UnsupportedOperationException.l9('Adding is not supported on values');
  }
  z1(element) {
    return this.z8(element);
  }
  y8(element) {
    return this.h2x_1.q3(element);
  }
  g2(element) {
    if (!true)
      return false;
    return this.y8(element);
  }
  w() {
    var entriesIterator = this.h2x_1.m2().w();
    return new IdentityValuesView$iterator$1(entriesIterator);
  }
}
class KotlinIterator {
  constructor(jsIterator) {
    this.l2x_1 = jsIterator;
    this.m2x_1 = null;
  }
  x() {
    if (this.m2x_1 == null) {
      this.m2x_1 = this.l2x_1.next();
    }
    var tmp0_safe_receiver = this.m2x_1;
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.done;
    var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : !tmp1_safe_receiver;
    return tmp2_elvis_lhs == null ? false : tmp2_elvis_lhs;
  }
  y() {
    var tmp0_elvis_lhs = this.m2x_1;
    var value = tmp0_elvis_lhs == null ? this.l2x_1.next() : tmp0_elvis_lhs;
    this.m2x_1 = null;
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
  _this__u8e3s4.x1w_1 = null;
  _this__u8e3s4.y1w_1 = 0;
  _this__u8e3s4.z1w_1 = 0;
  _this__u8e3s4.a1x_1 = -1;
  _this__u8e3s4.b1x_1 = 0;
  _this__u8e3s4.c1x_1 = -1;
  _this__u8e3s4.d1x_1 = 0;
  _this__u8e3s4.e1x_1 = 0;
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
  captureStack(_this__u8e3s4, _this__u8e3s4.f21_1);
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
  _this__u8e3s4.i27_1 = null;
  _this__u8e3s4.j27_1 = null;
  _this__u8e3s4.k27_1 = null;
  _this__u8e3s4.l27_1 = null;
}
var Companion_instance_4;
function Companion_getInstance_4() {
  if (Companion_instance_4 === VOID)
    new Companion_4();
  return Companion_instance_4;
}
function init_org_antlr_v4_kotlinruntime_RuleContext(_this__u8e3s4) {
  _this__u8e3s4.z21_1 = null;
  _this__u8e3s4.a22_1 = -1;
  _this__u8e3s4.b22_1 = Companion_getInstance_25().s1w_1;
  _this__u8e3s4.c22_1 = -1;
  _this__u8e3s4.d22_1 = 0;
}
var RuntimeMetaData_instance;
function RuntimeMetaData_getInstance() {
  return RuntimeMetaData_instance;
}
function codePoint($this, index) {
  if (!(0 <= index ? index < $this.j29_1 : false)) {
    return -1;
  }
  var char = charCodeAt($this.g29_1, $this.i29_1[index]);
  if (isHighSurrogate(char)) {
    var containsUpper = $this.j29_1;
    var containsArg = index + 1 | 0;
    if (0 <= containsArg ? containsArg < containsUpper : false) {
      var low = charCodeAt($this.g29_1, $this.i29_1[index] + 1 | 0);
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
  _this__u8e3s4.s2a_1 = null;
  _this__u8e3s4.t2a_1 = 0;
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
  _this__u8e3s4.n2d_1 = false;
  _this__u8e3s4.o2d_1 = false;
  _this__u8e3s4.p2d_1 = false;
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
      var set = IntervalSet.u1z();
      sets.z1(set);
      var _unary__edvuaz_0 = pp;
      pp = _unary__edvuaz_0 + 1 | 0;
      var containsEof = !(data[_unary__edvuaz_0] === 0);
      if (containsEof) {
        set.v1z(-1);
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
          set.w2d(a, b);
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
    EmptyPredictionContext.h2k();
  return EmptyPredictionContext_instance;
}
var Companion_instance_13;
function Companion_getInstance_13() {
  return Companion_instance_13;
}
function checkNonGreedyDecision($this, source, target) {
  var tmp;
  if (source.a2l_1) {
    tmp = true;
  } else {
    var tmp_0;
    if (target instanceof DecisionState) {
      tmp_0 = target.n2a_1;
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
    tmp = System_getInstance().f1v(envName, defaultValue);
  } catch ($p) {
    var tmp_0;
    if ($p instanceof Exception) {
      var e = $p;
      System_getInstance().e1v_1.c1v(e.toString());
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
    Empty.g2t();
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
  var tmp = a.x2g_1;
  var tmp$ret$2 = b.x2g_1;
  return compareValues(tmp, tmp$ret$2);
}
function init_org_antlr_v4_kotlinruntime_dfa_DFAState(_this__u8e3s4) {
  _this__u8e3s4.x2g_1 = -1;
  _this__u8e3s4.y2g_1 = new ATNConfigSet();
  _this__u8e3s4.z2g_1 = null;
  _this__u8e3s4.a2h_1 = false;
  _this__u8e3s4.b2h_1 = 0;
  _this__u8e3s4.c2h_1 = null;
  _this__u8e3s4.d2h_1 = false;
  _this__u8e3s4.e2h_1 = null;
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
  if ($this.a25_1.length === 0) {
    tmp = 4;
  } else {
    tmp = $this.a25_1.length;
  }
  var newLength = tmp;
  while (newLength < capacity) {
    newLength = imul(newLength, 2);
    if (newLength < 0 || newLength > 2147483639) {
      newLength = 2147483639;
    }
  }
  $this.a25_1 = copyOf_0($this.a25_1, newLength);
}
function init_org_antlr_v4_kotlinruntime_misc_IntegerList(_this__u8e3s4) {
  Companion_getInstance_24();
  _this__u8e3s4.b25_1 = 0;
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
  if ($this.t1z_1) {
    throw IllegalStateException.l4("can't alter readonly IntervalSet");
  }
  if (addition.o1w_1 < addition.n1w_1) {
    return Unit_instance;
  }
  var iter = $this.s1z_1.y3();
  while (iter.x()) {
    var r = iter.y();
    if (addition.equals(r)) {
      return Unit_instance;
    }
    if (addition.f2w(r) || !addition.e2w(r)) {
      var bigger = addition.g2w(r);
      iter.h6(bigger);
      $l$loop: while (iter.x()) {
        var next = iter.y();
        if (!bigger.f2w(next) && bigger.e2w(next)) {
          break $l$loop;
        }
        iter.r5();
        iter.d6();
        iter.h6(bigger.g2w(next));
        iter.y();
      }
      return Unit_instance;
    }
    if (addition.c2w(r)) {
      iter.d6();
      iter.f6(addition);
      return Unit_instance;
    }
  }
  $this.s1z_1.z1(addition);
}
function elementName($this, vocabulary, a) {
  switch (a) {
    case -1:
      return '<EOF>';
    case -2:
      return '<EPSILON>';
    default:
      return vocabulary.u1x(a);
  }
}
function init_org_antlr_v4_kotlinruntime_misc_IntervalSet(_this__u8e3s4) {
  Companion_getInstance_26();
  _this__u8e3s4.t1z_1 = false;
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
  System_getInstance().d1v_1.c1v('Environment variables are not supported in the browser');
  return null;
}
function remove($this, key, value) {
  // Inline function 'com.strumenta.antlrkotlin.runtime.undefinedToNull' call
  var k = key === undefined ? null : key;
  if ($this.u2w_1.has(k)) {
    if ($this.u2w_1.get(k) === value) {
      return $this.u2w_1.delete(k);
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
protoOf(CommonToken).v1x = startPoint;
protoOf(CommonToken).w1x = endPoint;
initMetadataForClass(CommonToken, 'CommonToken', VOID, VOID, [WritableToken]);
initMetadataForCompanion(Companion_0);
initMetadataForClass(CommonTokenFactory, 'CommonTokenFactory', CommonTokenFactory);
initMetadataForClass(CommonTokenStream, 'CommonTokenStream');
initMetadataForCompanion(Companion_1);
initMetadataForClass(ConsoleErrorListener, 'ConsoleErrorListener', ConsoleErrorListener);
initMetadataForClass(DefaultErrorStrategy, 'DefaultErrorStrategy', DefaultErrorStrategy);
initMetadataForObject(DummyTokenStream, 'DummyTokenStream');
initMetadataForClass(EmptyStackException, 'EmptyStackException', EmptyStackException.i23);
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
initMetadataForClass(RuleContext, 'RuleContext', RuleContext.l28, VOID, [RuleNode]);
initMetadataForClass(ParserRuleContext, 'ParserRuleContext', ParserRuleContext.h28);
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
initMetadataForClass(ATNDeserializationOptions, 'ATNDeserializationOptions', ATNDeserializationOptions.q2d);
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
initMetadataForClass(Predicate, 'Predicate', Predicate.i2t);
initMetadataForClass(PrecedencePredicate, 'PrecedencePredicate', PrecedencePredicate.l2r, VOID, [Comparable]);
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
initMetadataForClass(DFAState, 'DFAState', DFAState.j2v);
initMetadataForClass(LexerDFASerializer, 'LexerDFASerializer');
initMetadataForCompanion(Companion_22);
initMetadataForClass(SetIterator, 'SetIterator');
initMetadataForClass(DoubleKeyMap, 'DoubleKeyMap', DoubleKeyMap);
initMetadataForCompanion(Companion_23);
initMetadataForClass(Entry, 'Entry');
initMetadataForCompanion(Companion_24);
initMetadataForClass(IntegerList, 'IntegerList', IntegerList.b2w);
initMetadataForClass(IntegerStack, 'IntegerStack', IntegerStack.l24);
initMetadataForCompanion(Companion_25);
initMetadataForClass(Interval, 'Interval');
initMetadataForCompanion(Companion_26);
initMetadataForClass(IntervalSet, 'IntervalSet', IntervalSet.u1z);
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
initMetadataForClass(BitSet, 'BitSet', BitSet.z2c);
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
