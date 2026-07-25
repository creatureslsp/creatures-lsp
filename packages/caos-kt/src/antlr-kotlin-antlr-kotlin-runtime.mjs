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
  c1v(collection) {
    var tmp0_elvis_lhs = minOrNull(collection);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw NoSuchElementException.v5();
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  d1v(collection) {
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
  e1v(message) {
    return println(message);
  }
}
class ErrPrintStream {
  e1v(message) {
    // Inline function 'com.strumenta.antlrkotlin.runtime.platformPrintErrLn' call
    console.error(message);
    return Unit_instance;
  }
}
class System {
  constructor() {
    System_instance = this;
    this.f1v_1 = StdPrintStream_instance;
    this.g1v_1 = ErrPrintStream_instance;
  }
  h1v(name, defaultValue) {
    var tmp0_elvis_lhs = platformGetEnv(name);
    return tmp0_elvis_lhs == null ? defaultValue : tmp0_elvis_lhs;
  }
}
class AbstractCharStreams {
  i1v(str, sourceName) {
    return new StringCharStream(str, sourceName);
  }
  j1v(str, sourceName, $super) {
    sourceName = sourceName === VOID ? '<unknown>' : sourceName;
    return $super === VOID ? this.i1v(str, sourceName) : $super.i1v.call(this, str, sourceName);
  }
}
class BaseErrorListener {
  k1v(recognizer, offendingSymbol, line, charPositionInLine, msg, e) {
  }
  l1v(recognizer, dfa, startIndex, stopIndex, exact, ambigAlts, configs) {
  }
  m1v(recognizer, dfa, startIndex, stopIndex, conflictingAlts, configs) {
  }
  n1v(recognizer, dfa, startIndex, stopIndex, prediction, configs) {
  }
}
class BufferedTokenStream {
  constructor(tokenSource) {
    this.o1v_1 = ArrayList.y1(100);
    this.p1v_1 = -1;
    this.q1v_1 = false;
    this.r1v_1 = tokenSource;
  }
  s1v() {
    return this.r1v_1;
  }
  t1v() {
    return this.p1v_1;
  }
  u1v() {
    return 0;
  }
  v1v(marker) {
  }
  w1v(index) {
    this.x1v();
    this.p1v_1 = this.y1v(index);
  }
  z1v() {
    return this.o1v_1.b2();
  }
  a1w() {
    var tmp;
    if (this.p1v_1 >= 0) {
      var tmp_0;
      if (this.q1v_1) {
        tmp_0 = this.p1v_1 < (this.o1v_1.b2() - 1 | 0);
      } else {
        tmp_0 = this.p1v_1 < this.o1v_1.b2();
      }
      tmp = tmp_0;
    } else {
      tmp = false;
    }
    var skipEofCheck = tmp;
    if (!skipEofCheck && this.b1w(1) === -1) {
      throw IllegalStateException.l4('cannot consume EOF');
    }
    if (this.c1w(this.p1v_1 + 1 | 0)) {
      this.p1v_1 = this.y1v(this.p1v_1 + 1 | 0);
    }
  }
  c1w(i) {
    // Inline function 'com.strumenta.antlrkotlin.runtime.assert' call
    if (!(i >= 0)) {
      throw AssertionError.vc(null);
    }
    var n = (i - this.o1v_1.b2() | 0) + 1 | 0;
    if (n > 0) {
      var fetched = this.d1w(n);
      return fetched >= n;
    }
    return true;
  }
  d1w(n) {
    if (this.q1v_1) {
      return 0;
    }
    var inductionVariable = 0;
    if (inductionVariable < n)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var t = this.s1v().e1w();
        if (isInterface(t, WritableToken)) {
          t.f1w(this.o1v_1.b2());
        }
        this.o1v_1.z1(t);
        if (t.x1r() === -1) {
          this.q1v_1 = true;
          return i + 1 | 0;
        }
      }
       while (inductionVariable < n);
    return n;
  }
  d2(index) {
    if (index < 0 || index >= this.o1v_1.b2()) {
      throw IndexOutOfBoundsException.mc('token index ' + index + ' out of range 0..' + (this.o1v_1.b2() - 1 | 0));
    }
    return this.o1v_1.d2(index);
  }
  b1w(i) {
    return ensureNotNull(this.g1w(i)).x1r();
  }
  h1w(k) {
    var tmp;
    if ((this.p1v_1 - k | 0) < 0) {
      tmp = null;
    } else {
      tmp = this.o1v_1.d2(this.p1v_1 - k | 0);
    }
    return tmp;
  }
  g1w(k) {
    this.x1v();
    if (k === 0) {
      return null;
    }
    if (k < 0) {
      return this.h1w(-k | 0);
    }
    var i = (this.p1v_1 + k | 0) - 1 | 0;
    this.c1w(i);
    var tmp;
    if (i >= this.o1v_1.b2()) {
      tmp = this.o1v_1.d2(this.o1v_1.b2() - 1 | 0);
    } else {
      tmp = this.o1v_1.d2(i);
    }
    return tmp;
  }
  y1v(i) {
    return i;
  }
  x1v() {
    if (this.p1v_1 === -1) {
      this.i1w();
    }
  }
  i1w() {
    this.c1w(0);
    this.p1v_1 = this.y1v(0);
  }
  j1w(start, stop, types) {
    this.x1v();
    if (start < 0 || stop >= this.o1v_1.b2() || stop < 0 || start >= this.o1v_1.b2()) {
      throw IndexOutOfBoundsException.mc('start ' + start + ' or stop ' + stop + ' not in 0..' + (this.o1v_1.b2() - 1 | 0));
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
        var t = this.o1v_1.d2(i);
        if (types == null || types.g2(t.x1r())) {
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
  k1w(start, stop, types, $super) {
    types = types === VOID ? null : types;
    return $super === VOID ? this.j1w(start, stop, types) : $super.j1w.call(this, start, stop, types);
  }
  l1w(i, channel) {
    this.c1w(i);
    if (i >= this.z1v()) {
      return this.z1v() - 1 | 0;
    }
    var token = this.o1v_1.d2(i);
    var ii = i;
    while (!(token.m1w() === channel)) {
      if (token.x1r() === -1) {
        return ii;
      }
      ii = ii + 1 | 0;
      this.c1w(ii);
      token = this.o1v_1.d2(ii);
    }
    return ii;
  }
  n1w(i, channel) {
    this.c1w(i);
    if (i >= this.z1v()) {
      return this.z1v() - 1 | 0;
    }
    var ii = i;
    while (ii >= 0) {
      var token = this.o1v_1.d2(ii);
      if (token.x1r() === -1 || token.m1w() === channel) {
        return ii;
      }
      ii = ii - 1 | 0;
    }
    return ii;
  }
  o1w(interval) {
    var start = interval.p1w_1;
    var stop = interval.q1w_1;
    if (start < 0 || stop < 0) {
      return '';
    }
    this.c1w(stop);
    if (stop >= this.o1v_1.b2()) {
      stop = this.o1v_1.b2() - 1 | 0;
    }
    var buf = StringBuilder.s();
    var inductionVariable = start;
    var last = stop;
    if (inductionVariable <= last)
      $l$loop: do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var t = this.o1v_1.d2(i);
        if (t.x1r() === -1) {
          break $l$loop;
        }
        buf.t(t.j1f());
      }
       while (!(i === last));
    return buf.toString();
  }
  r1w(start, stop) {
    var tmp;
    if (!(start == null) && !(stop == null)) {
      tmp = this.o1w(Companion_getInstance_25().w1w(start.s1w(), stop.s1w()));
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
    this.x1w_1 = new Pair(null, null);
  }
}
class Token {}
function startPoint() {
  return new Point(this.e1e(), this.k1x());
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
  return (new Point(this.e1e(), this.k1x())).p29(text);
}
class WritableToken {}
class CommonToken {
  h1x(_set____db54di) {
    this.a1x_1 = _set____db54di;
  }
  x1r() {
    return this.a1x_1;
  }
  i1x(_set____db54di) {
    this.b1x_1 = _set____db54di;
  }
  e1e() {
    return this.b1x_1;
  }
  j1x(_set____db54di) {
    this.c1x_1 = _set____db54di;
  }
  k1x() {
    return this.c1x_1;
  }
  l1x(_set____db54di) {
    this.d1x_1 = _set____db54di;
  }
  m1w() {
    return this.d1x_1;
  }
  f1w(_set____db54di) {
    this.e1x_1 = _set____db54di;
  }
  s1w() {
    return this.e1x_1;
  }
  m1x(_set____db54di) {
    this.f1x_1 = _set____db54di;
  }
  g1e() {
    return this.f1x_1;
  }
  n1x(_set____db54di) {
    this.g1x_1 = _set____db54di;
  }
  o1x() {
    return this.g1x_1;
  }
  s1v() {
    return this.y1w_1.first;
  }
  p1x() {
    return this.y1w_1.second;
  }
  q1x(value) {
    this.z1w_1 = value;
  }
  j1f() {
    if (!(this.z1w_1 == null)) {
      return this.z1w_1;
    }
    var tmp0_elvis_lhs = this.p1x();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return null;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var input = tmp;
    var n = input.z1v();
    var tmp_0;
    if (this.g1e() < n && this.o1x() < n) {
      tmp_0 = input.o1w(Companion_getInstance_25().w1w(this.g1e(), this.o1x()));
    } else {
      tmp_0 = '<EOF>';
    }
    return tmp_0;
  }
  static r1x(source, type, channel, startIndex, stopIndex) {
    Companion_getInstance();
    var $this = createThis(this);
    init_org_antlr_v4_kotlinruntime_CommonToken($this);
    $this.y1w_1 = source;
    $this.h1x(type);
    $this.l1x(channel);
    $this.m1x(startIndex);
    $this.n1x(stopIndex);
    var a = source.first;
    if (!(a == null)) {
      $this.i1x(a.e1e());
      $this.j1x(a.k1x());
    }
    return $this;
  }
  toString() {
    return this.s1x(null);
  }
  s1x(r) {
    var tmp;
    if (this.m1w() > 0) {
      tmp = ',channel=' + this.m1w();
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
    var tmp1_safe_receiver = r == null ? null : r.v1x();
    var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.w1x(this.x1r());
    var typeString = tmp2_elvis_lhs == null ? this.x1r().toString() : tmp2_elvis_lhs;
    return '[@' + this.s1w() + ',' + this.g1e() + ':' + this.o1x() + "='" + txt + "',<" + typeString + '>' + channelStr + ',' + this.e1e() + ':' + this.k1x() + ']';
  }
}
class Companion_0 {
  constructor() {
    Companion_instance_0 = this;
    this.z1x_1 = new CommonTokenFactory();
  }
}
class CommonTokenFactory {
  constructor(copyText) {
    Companion_getInstance_0();
    copyText = copyText === VOID ? false : copyText;
    this.a1y_1 = copyText;
  }
  b1y(source, type, text, channel, start, stop, line, charPositionInLine) {
    var t = CommonToken.r1x(source, type, channel, start, stop);
    t.i1x(line);
    t.j1x(charPositionInLine);
    if (!(text == null)) {
      t.q1x(text);
    } else if (this.a1y_1 && !(source.second == null)) {
      t.q1x(ensureNotNull(source.second).o1w(Companion_getInstance_25().w1w(start, stop)));
    }
    return t;
  }
}
class CommonTokenStream extends BufferedTokenStream {
  constructor(tokenSource) {
    super(tokenSource);
    this.g1y_1 = 0;
  }
  y1v(i) {
    return this.l1w(i, this.g1y_1);
  }
  h1w(k) {
    if (k === 0 || (this.p1v_1 - k | 0) < 0) {
      return null;
    }
    var i = this.p1v_1;
    var n = 1;
    while (n <= k && i > 0) {
      i = this.n1w(i - 1 | 0, this.g1y_1);
      n = n + 1 | 0;
    }
    var tmp;
    if (i < 0) {
      tmp = null;
    } else {
      tmp = this.o1v_1.d2(i);
    }
    return tmp;
  }
  g1w(k) {
    this.x1v();
    if (k === 0) {
      return null;
    }
    if (k < 0) {
      return this.h1w(-k | 0);
    }
    var i = this.p1v_1;
    var n = 1;
    while (n < k) {
      if (this.c1w(i + 1 | 0)) {
        i = this.l1w(i + 1 | 0, this.g1y_1);
      }
      n = n + 1 | 0;
    }
    return this.o1v_1.d2(i);
  }
}
class Companion_1 {
  constructor() {
    Companion_instance_1 = this;
    this.h1y_1 = new ConsoleErrorListener();
  }
}
class ConsoleErrorListener extends BaseErrorListener {
  constructor() {
    Companion_getInstance_1();
    super();
  }
  k1v(recognizer, offendingSymbol, line, charPositionInLine, msg, e) {
    System_getInstance().g1v_1.e1v('line ' + line + ':' + charPositionInLine + ' ' + msg);
  }
}
class DefaultErrorStrategy {
  constructor() {
    this.i1y_1 = false;
    this.j1y_1 = -1;
    this.k1y_1 = null;
    this.l1y_1 = null;
    this.m1y_1 = 0;
  }
  n1y(recognizer) {
    return this.o1y(recognizer);
  }
  p1y(recognizer) {
    this.i1y_1 = true;
  }
  q1y(recognizer) {
    return this.i1y_1;
  }
  o1y(recognizer) {
    this.i1y_1 = false;
    this.k1y_1 = null;
    this.j1y_1 = -1;
  }
  r1y(recognizer) {
    return this.o1y(recognizer);
  }
  s1y(recognizer, e) {
    if (this.q1y(recognizer)) {
      return Unit_instance;
    }
    this.p1y(recognizer);
    if (e instanceof NoViableAltException) {
      this.q1z(recognizer, e);
    } else {
      if (e instanceof InputMismatchException) {
        this.p1z(recognizer, e);
      } else {
        if (e instanceof FailedPredicateException) {
          this.o1z(recognizer, e);
        } else {
          System_getInstance().g1v_1.e1v('unknown recognition error type: ' + e.toString());
          recognizer.n1z(ensureNotNull(e.y1y_1), ensureNotNull(e.message), e);
        }
      }
    }
  }
  r1z(recognizer, e) {
    var lastErrorStatesTemp = this.k1y_1;
    if (this.j1y_1 === recognizer.t1z().t1v() && !(lastErrorStatesTemp == null) && lastErrorStatesTemp.vk(recognizer.u1x_1)) {
      recognizer.s1z();
    }
    this.j1y_1 = recognizer.t1z().t1v();
    if (lastErrorStatesTemp == null) {
      lastErrorStatesTemp = IntervalSet.w1z();
      this.k1y_1 = lastErrorStatesTemp;
    }
    lastErrorStatesTemp.x1z(recognizer.u1x_1);
    var followSet = this.y1z(recognizer);
    this.z1z(recognizer, followSet);
  }
  a20(recognizer) {
    var s = recognizer.n20().l20_1.d20_1.d2(recognizer.u1x_1);
    if (this.q1y(recognizer)) {
      return Unit_instance;
    }
    var tokens = recognizer.t1z();
    var la = tokens.b1w(1);
    var nextTokens = recognizer.o20().p20(ensureNotNull(s));
    if (nextTokens.vk(la)) {
      this.l1y_1 = null;
      this.m1y_1 = -1;
      return Unit_instance;
    }
    if (nextTokens.vk(-2)) {
      if (this.l1y_1 == null) {
        this.l1y_1 = recognizer.h1z_1;
        this.m1y_1 = recognizer.u1x_1;
      }
      return Unit_instance;
    }
    switch (s.x20()) {
      case 3:
      case 5:
      case 4:
      case 10:
        if (!(this.y20(recognizer) == null)) {
          return Unit_instance;
        }

        throw InputMismatchException.i21(recognizer);
      case 11:
      case 9:
        this.j21(recognizer);
        var expecting = recognizer.k21();
        var whatFollowsLoopIterationOrRule = expecting.l21(this.y1z(recognizer));
        this.z1z(recognizer, whatFollowsLoopIterationOrRule);
        break;
      default:
        break;
    }
  }
  q1z(recognizer, e) {
    var tokens = recognizer.t1z();
    var tmp;
    if (ensureNotNull(e.u21_1).x1r() === -1) {
      tmp = '<EOF>';
    } else {
      tmp = ensureNotNull(tokens.r1w(e.u21_1, ensureNotNull(e.y1y_1)));
    }
    var input = tmp;
    var msg = 'no viable alternative at input ' + this.x21(input);
    recognizer.n1z(ensureNotNull(e.y1y_1), msg, e);
  }
  p1z(recognizer, e) {
    var tokenErrorDisplay = this.y21(e.y1y_1);
    var expectedToken = ensureNotNull(e.k21()).z21(recognizer.v1x());
    var msg = 'mismatched input ' + tokenErrorDisplay + ' expecting ' + expectedToken;
    recognizer.n1z(ensureNotNull(e.y1y_1), msg, e);
  }
  o1z(recognizer, e) {
    var ruleName = recognizer.a22()[ensureNotNull(recognizer.h1z_1).g22()];
    var msg = 'rule ' + ruleName + ' ' + e.message;
    recognizer.n1z(ensureNotNull(e.y1y_1), msg, e);
  }
  j21(recognizer) {
    if (this.q1y(recognizer)) {
      return Unit_instance;
    }
    this.p1y(recognizer);
    var t = ensureNotNull(recognizer.h22());
    var tokenName = this.y21(t);
    var expecting = this.i22(recognizer);
    var msg = 'extraneous input ' + tokenName + ' expecting ' + expecting.z21(recognizer.v1x());
    recognizer.n1z(t, msg, null);
  }
  j22(recognizer) {
    if (this.q1y(recognizer)) {
      return Unit_instance;
    }
    this.p1y(recognizer);
    var t = ensureNotNull(recognizer.h22());
    var expecting = this.i22(recognizer);
    var msg = 'missing ' + expecting.z21(recognizer.v1x()) + ' at ' + this.y21(t);
    recognizer.n1z(t, msg, null);
  }
  k22(recognizer) {
    var matchedSymbol = this.y20(recognizer);
    if (!(matchedSymbol == null)) {
      recognizer.s1z();
      return matchedSymbol;
    }
    if (this.m22(recognizer)) {
      return this.l22(recognizer);
    }
    var tmp;
    if (this.l1y_1 == null) {
      tmp = InputMismatchException.i21(recognizer);
    } else {
      tmp = InputMismatchException.n22(recognizer, this.m1y_1, ensureNotNull(this.l1y_1));
    }
    var e = tmp;
    throw e;
  }
  m22(recognizer) {
    var currentSymbolType = recognizer.t1z().b1w(1);
    var currentState = recognizer.n20().l20_1.d20_1.d2(recognizer.u1x_1);
    var next = ensureNotNull(currentState).q22(0).o22_1;
    var atn = recognizer.n20().l20_1;
    var expectingAtLL2 = atn.r22(next, recognizer.h1z_1);
    if (expectingAtLL2.vk(currentSymbolType)) {
      this.j22(recognizer);
      return true;
    }
    return false;
  }
  y20(recognizer) {
    var nextTokenType = recognizer.t1z().b1w(2);
    var expecting = this.i22(recognizer);
    if (expecting.vk(nextTokenType)) {
      this.j21(recognizer);
      recognizer.s1z();
      var matchedSymbol = recognizer.h22();
      this.r1y(recognizer);
      return matchedSymbol;
    }
    return null;
  }
  l22(recognizer) {
    var currentSymbol = recognizer.h22();
    var expecting = this.i22(recognizer);
    var expectedTokenType = 0;
    if (!expecting.t22()) {
      expectedTokenType = expecting.s22();
    }
    var tmp;
    if (expectedTokenType === -1) {
      tmp = '<missing EOF>';
    } else {
      tmp = '<missing ' + recognizer.v1x().w1x(expectedTokenType) + '>';
    }
    var tokenText = tmp;
    var current = currentSymbol;
    var lookback = recognizer.t1z().g1w(-1);
    if (ensureNotNull(current).x1r() === -1 && !(lookback == null)) {
      current = lookback;
    }
    return recognizer.u22().b1y(new Pair(current.s1v(), current.p1x()), expectedTokenType, tokenText, 0, -1, -1, current.e1e(), current.k1x());
  }
  i22(recognizer) {
    return recognizer.k21();
  }
  y21(t) {
    if (t == null) {
      return '<no token>';
    }
    var s = this.v22(t);
    if (s == null) {
      var tmp;
      if (this.w22(t) === -1) {
        tmp = '<EOF>';
      } else {
        tmp = '<' + this.w22(t) + '>';
      }
      s = tmp;
    }
    return this.x21(s);
  }
  v22(symbol) {
    return symbol.j1f();
  }
  w22(symbol) {
    return symbol.x1r();
  }
  x21(s) {
    var ss = s;
    ss = replace(ss, '\n', '\\n');
    ss = replace(ss, '\r', '\\r');
    ss = replace(ss, '\t', '\\t');
    return "'" + ss + "'";
  }
  y1z(recognizer) {
    var atn = recognizer.n20().l20_1;
    var ctx = recognizer.h1z_1;
    var recoverSet = IntervalSet.w1z();
    while (!(ctx == null) && ctx.c22_1 >= 0) {
      var invokingState = atn.d20_1.d2(ctx.c22_1);
      var tmp = ensureNotNull(invokingState).q22(0);
      var rt = tmp instanceof RuleTransition ? tmp : THROW_CCE();
      var follow = atn.p20(rt.b23_1);
      recoverSet.e23(follow);
      ctx = ctx.f23();
    }
    recoverSet.g23(-2);
    return recoverSet;
  }
  z1z(recognizer, set) {
    var ttype = recognizer.t1z().b1w(1);
    while (!(ttype === -1) && !set.vk(ttype)) {
      recognizer.s1z();
      ttype = recognizer.t1z().b1w(1);
    }
  }
}
class DummyTokenStream {
  s1v() {
    throw UnsupportedOperationException.q7();
  }
  a1w() {
    throw UnsupportedOperationException.q7();
  }
  b1w(i) {
    throw UnsupportedOperationException.q7();
  }
  u1v() {
    throw UnsupportedOperationException.q7();
  }
  v1v(marker) {
    throw UnsupportedOperationException.q7();
  }
  t1v() {
    throw UnsupportedOperationException.q7();
  }
  w1v(index) {
  }
  z1v() {
    return 0;
  }
  g1w(k) {
    throw UnsupportedOperationException.q7();
  }
  d2(index) {
    throw UnsupportedOperationException.q7();
  }
  o1w(interval) {
    throw UnsupportedOperationException.q7();
  }
  r1w(start, stop) {
    throw UnsupportedOperationException.q7();
  }
}
class EmptyStackException extends RuntimeException {
  static k23(message, cause) {
    message = message === VOID ? null : message;
    cause = cause === VOID ? null : cause;
    var $this = this.dc(message, cause);
    captureStack($this, $this.j23_1);
    return $this;
  }
}
class RecognitionException extends RuntimeException {
  static l23(recognizer, inputStream, ctx, message) {
    message = message === VOID ? null : message;
    var $this = this.ba(message);
    captureStack($this, $this.a1z_1);
    $this.v1y_1 = recognizer;
    $this.w1y_1 = inputStream;
    $this.x1y_1 = ctx;
    $this.y1y_1 = null;
    $this.z1y_1 = -1;
    if (!($this.v1y_1 == null)) {
      $this.z1y_1 = $this.v1y_1.u1x_1;
    }
    return $this;
  }
  p1x() {
    return this.w1y_1;
  }
  k21() {
    var tmp0_safe_receiver = this.v1y_1;
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.o20();
    return tmp1_safe_receiver == null ? null : tmp1_safe_receiver.s26(this.z1y_1, this.x1y_1);
  }
}
class FailedPredicateException extends RecognitionException {}
class InputMismatchException extends RecognitionException {
  static i21(recognizer) {
    var $this = this.l23(recognizer, recognizer.t1z(), ensureNotNull(recognizer.h1z_1));
    init_org_antlr_v4_kotlinruntime_InputMismatchException($this);
    $this.y1y_1 = recognizer.h22();
    return $this;
  }
  static n22(recognizer, state, ctx) {
    var $this = this.l23(recognizer, recognizer.t1z(), ctx);
    init_org_antlr_v4_kotlinruntime_InputMismatchException($this);
    $this.z1y_1 = state;
    $this.y1y_1 = recognizer.h22();
    return $this;
  }
}
class Companion_2 {
  constructor() {
    this.m23_1 = 0;
    this.n23_1 = -2;
    this.o23_1 = -3;
    this.p23_1 = 0;
    this.q23_1 = 1;
    this.r23_1 = 0;
    this.s23_1 = 1114111;
  }
}
class Recognizer {
  constructor() {
    Companion_getInstance_4();
    this.t1x_1 = ArrayList.v1(listOf(Companion_getInstance_1().h1y_1));
    this.u1x_1 = -1;
  }
  v1x() {
    return Companion_getInstance_5().e29(this.z24());
  }
  x25() {
    return this.t1x_1;
  }
  v25() {
    return new ProxyErrorListener(this.x25());
  }
  y25(listener) {
    this.t1x_1.z1(listener);
  }
  z25(_localctx, ruleIndex, predIndex) {
    return true;
  }
  a26(localctx, precedence) {
    return true;
  }
  b26(_localctx, ruleIndex, actionIndex) {
  }
}
class Lexer extends Recognizer {
  constructor(input) {
    super();
    this.v23_1 = input;
    this.w23_1 = new Pair(this, input);
    this.x23_1 = Companion_getInstance_0().z1x_1;
    this.y23_1 = null;
    this.z23_1 = -1;
    this.a24_1 = 0;
    this.b24_1 = 0;
    this.c24_1 = false;
    this.d24_1 = 0;
    this.e24_1 = 0;
    this.f24_1 = IntegerStack.n24();
    this.g24_1 = 0;
    this.h24_1 = null;
    var tmp = this;
    // Inline function 'kotlin.emptyArray' call
    tmp.i24_1 = [];
    var tmp_0 = this;
    // Inline function 'kotlin.emptyArray' call
    tmp_0.j24_1 = [];
    var tmp_1 = this;
    // Inline function 'kotlin.emptyArray' call
    tmp_1.k24_1 = [];
  }
  u22() {
    return this.x23_1;
  }
  o24(_set____db54di) {
    this.y23_1 = _set____db54di;
  }
  a1s() {
    return this.y23_1;
  }
  e1e() {
    return this.n20().u24_1;
  }
  k1x() {
    return this.n20().v24_1;
  }
  y24() {
    return this.v23_1.t1v();
  }
  z24() {
    return this.k24_1;
  }
  a25() {
    var tokens = ArrayList.u1();
    var t = this.e1w();
    while (!(t.x1r() === -1)) {
      tokens.z1(t);
      t = this.e1w();
    }
    return tokens;
  }
  b25() {
    this.v23_1.w1v(0);
    this.o24(null);
    this.e24_1 = 0;
    this.d24_1 = 0;
    this.z23_1 = -1;
    this.b24_1 = -1;
    this.a24_1 = -1;
    this.h24_1 = null;
    this.c24_1 = false;
    this.g24_1 = 0;
    this.f24_1.u3();
    var tmp0_safe_receiver = this.n20();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.b25();
    }
  }
  e1w() {
    var tokenStartMarker = this.v23_1.u1v();
    try {
      outer: while (true) {
        if (this.c24_1) {
          this.e25();
          return ensureNotNull(this.a1s());
        }
        this.o24(null);
        this.d24_1 = 0;
        this.z23_1 = this.v23_1.t1v();
        this.b24_1 = this.n20().v24_1;
        this.a24_1 = this.n20().u24_1;
        this.h24_1 = null;
        do {
          this.e24_1 = 0;
          var ttype;
          try {
            ttype = this.n20().f25(this.v23_1, this.g24_1);
          } catch ($p) {
            if ($p instanceof LexerNoViableAltException) {
              var e = $p;
              this.g25(e);
              this.h25(e);
              ttype = -3;
            } else {
              throw $p;
            }
          }
          if (this.v23_1.b1w(1) === -1) {
            this.c24_1 = true;
          }
          if (this.e24_1 === 0) {
            this.e24_1 = ttype;
          }
          if (this.e24_1 === -3) {
            continue outer;
          }
        }
         while (this.e24_1 === -2);
        if (this.a1s() == null) {
          this.i25();
        }
        return ensureNotNull(this.a1s());
      }
    }finally {
      this.v23_1.v1v(tokenStartMarker);
    }
  }
  j25() {
    this.e24_1 = -3;
  }
  k25() {
    this.e24_1 = -2;
  }
  l25(m) {
    this.g24_1 = m;
  }
  m25(m) {
    if (false) {
      System_getInstance().f1v_1.e1v('pushMode ' + m);
    }
    this.f24_1.n25(this.g24_1);
    this.l25(m);
  }
  o25() {
    if (this.f24_1.p25()) {
      throw EmptyStackException.k23();
    }
    if (false) {
      System_getInstance().f1v_1.e1v('popMode back to ' + this.f24_1.q25());
    }
    this.l25(this.f24_1.r25());
    return this.g24_1;
  }
  s25(token) {
    this.o24(token);
  }
  i25() {
    var t = this.u22().b1y(this.w23_1, this.e24_1, this.h24_1, this.d24_1, this.z23_1, this.y24() - 1 | 0, this.a24_1, this.b24_1);
    this.s25(t);
    return t;
  }
  e25() {
    var cPos = this.k1x();
    var eof = this.u22().b1y(this.w23_1, -1, null, 0, this.v23_1.t1v(), this.v23_1.t1v() - 1 | 0, this.e1e(), cPos);
    this.s25(eof);
    return eof;
  }
  h25(e) {
    if (!(this.v23_1.b1w(1) === -1)) {
      this.n20().t25(this.v23_1);
    }
  }
  g25(e) {
    var text = this.v23_1.o1w(Companion_getInstance_25().w1w(this.z23_1, this.v23_1.t1v()));
    var msg = "token recognition error at: '" + this.u25(text) + "'";
    this.v25().k1v(this, null, this.a24_1, this.b24_1, msg, e);
  }
  u25(s) {
    var buf = StringBuilder.s();
    var inductionVariable = 0;
    var last = s.length;
    while (inductionVariable < last) {
      var c = charCodeAt(s, inductionVariable);
      inductionVariable = inductionVariable + 1 | 0;
      // Inline function 'kotlin.code' call
      var tmp$ret$0 = Char__toInt_impl_vasixd(c);
      buf.t(this.w25(tmp$ret$0));
    }
    return buf.toString();
  }
  w25(c) {
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
  static n26(lexer, input, startIndex, deadEndConfigs) {
    var $this = this.l23(lexer, input, null);
    captureStack($this, $this.m26_1);
    $this.k26_1 = startIndex;
    $this.l26_1 = deadEndConfigs;
    return $this;
  }
  p1x() {
    var tmp = super.p1x();
    return isInterface(tmp, CharStream) ? tmp : THROW_CCE();
  }
  toString() {
    var symbol = '';
    if (this.k26_1 >= 0 && this.k26_1 < this.p1x().z1v()) {
      symbol = this.p1x().o1w(Companion_getInstance_25().w1w(this.k26_1, this.k26_1));
      symbol = Utils_instance.o26(symbol, false);
    }
    return '' + getKClassFromExpression(this).q() + "('" + symbol + "')";
  }
}
class NoViableAltException extends RecognitionException {
  static p26(recognizer, input, startToken, offendingToken, deadEndConfigs, ctx) {
    input = input === VOID ? recognizer.t1z() : input;
    startToken = startToken === VOID ? recognizer.h22() : startToken;
    offendingToken = offendingToken === VOID ? recognizer.h22() : offendingToken;
    deadEndConfigs = deadEndConfigs === VOID ? null : deadEndConfigs;
    ctx = ctx === VOID ? ensureNotNull(recognizer.h1z_1) : ctx;
    var $this = this.l23(recognizer, input, ctx);
    captureStack($this, $this.w21_1);
    $this.u21_1 = startToken;
    $this.v21_1 = deadEndConfigs;
    $this.y1y_1 = offendingToken;
    return $this;
  }
}
class Parser extends Recognizer {
  constructor(input) {
    super();
    this.d1z_1 = null;
    this.e1z_1 = new DefaultErrorStrategy();
    this.f1z_1 = input;
    var tmp = this;
    // Inline function 'kotlin.also' call
    var this_0 = IntegerStack.n24();
    this_0.n25(0);
    tmp.g1z_1 = this_0;
    this.h1z_1 = null;
    this.i1z_1 = true;
    this.j1z_1 = null;
    this.k1z_1 = ArrayList.u1();
    this.l1z_1 = 0;
    this.m1z_1 = false;
    this.q26(input);
  }
  u22() {
    return this.f1z_1.s1v().u22();
  }
  q26(value) {
    this.f1z_1 = DummyTokenStream_instance;
    this.b25();
    this.f1z_1 = value;
  }
  t1z() {
    return this.f1z_1;
  }
  h22() {
    return this.f1z_1.g1w(1);
  }
  r26() {
    var tmp;
    if (this.g1z_1.p25()) {
      tmp = -1;
    } else {
      tmp = this.g1z_1.q25();
    }
    return tmp;
  }
  k21() {
    return this.o20().s26(this.u1x_1, this.h1z_1);
  }
  b25() {
    this.t1z().w1v(0);
    this.e1z_1.n1y(this);
    this.h1z_1 = null;
    this.l1z_1 = 0;
    this.m1z_1 = false;
    this.g1z_1.u3();
    this.g1z_1.n25(0);
    var tmp0_safe_receiver = this.n20();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.b25();
    }
  }
  d27(ttype) {
    var t = this.h22();
    if (ensureNotNull(t).x1r() === ttype) {
      if (ttype === -1) {
        this.m1z_1 = true;
      }
      this.e1z_1.r1y(this);
      this.s1z();
    } else {
      t = this.e1z_1.k22(this);
      if (this.i1z_1 && t.s1w() === -1) {
        ensureNotNull(this.h1z_1).o27(this.e27(this.h1z_1, t));
      }
    }
    return t;
  }
  p27() {
    var _iterator__ex2g4s = this.k1z_1.w();
    while (_iterator__ex2g4s.x()) {
      var listener = _iterator__ex2g4s.y();
      listener.q27(ensureNotNull(this.h1z_1));
      ensureNotNull(this.h1z_1).r27(listener);
    }
  }
  s27() {
    var _iterator__ex2g4s = asReversed(this.k1z_1).w();
    while (_iterator__ex2g4s.x()) {
      var listener = _iterator__ex2g4s.y();
      ensureNotNull(this.h1z_1).t27(listener);
      listener.u27(ensureNotNull(this.h1z_1));
    }
  }
  n1z(offendingToken, msg, e) {
    this.l1z_1 = this.l1z_1 + 1 | 0;
    var line = offendingToken.e1e();
    var charPositionInLine = offendingToken.k1x();
    var listener = this.v25();
    listener.k1v(this, offendingToken, line, charPositionInLine, msg, e);
  }
  s1z() {
    var o = this.h22();
    if (!(ensureNotNull(o).x1r() === -1)) {
      this.t1z().a1w();
    }
    var tmp;
    if (this.i1z_1) {
      tmp = true;
    } else {
      // Inline function 'kotlin.collections.isNotEmpty' call
      tmp = !this.k1z_1.u();
    }
    if (tmp) {
      if (this.e1z_1.q1y(this)) {
        var node = ensureNotNull(this.h1z_1).o27(this.e27(this.h1z_1, o));
        var _iterator__ex2g4s = this.k1z_1.w();
        while (_iterator__ex2g4s.x()) {
          var listener = _iterator__ex2g4s.y();
          listener.y27(node);
        }
      } else {
        var node_0 = ensureNotNull(this.h1z_1).w27(this.v27(this.h1z_1, o));
        var _iterator__ex2g4s_0 = this.k1z_1.w();
        while (_iterator__ex2g4s_0.x()) {
          var listener_0 = _iterator__ex2g4s_0.y();
          listener_0.x27(node_0);
        }
      }
    }
    return o;
  }
  v27(parent, t) {
    return new TerminalNodeImpl(t);
  }
  e27(parent, t) {
    return new ErrorNodeImpl(t);
  }
  z27() {
    var parent = ensureNotNull(this.h1z_1).f23();
    if (parent == null)
      null;
    else
      parent.a28(ensureNotNull(this.h1z_1));
  }
  b28(localctx, state, ruleIndex) {
    this.u1x_1 = state;
    this.h1z_1 = localctx;
    ensureNotNull(this.h1z_1).l27_1 = this.f1z_1.g1w(1);
    if (this.i1z_1) {
      this.z27();
    }
    this.p27();
  }
  c28() {
    if (this.m1z_1) {
      ensureNotNull(this.h1z_1).m27_1 = this.f1z_1.g1w(1);
    } else {
      ensureNotNull(this.h1z_1).m27_1 = this.f1z_1.g1w(-1);
    }
    this.s27();
    this.u1x_1 = ensureNotNull(this.h1z_1).c22_1;
    this.h1z_1 = ensureNotNull(this.h1z_1).f23();
  }
  d28(localctx, altNum) {
    localctx.e28(altNum);
    if (this.i1z_1 && !(this.h1z_1 === localctx)) {
      var parent = ensureNotNull(this.h1z_1).f23();
      if (!(parent == null)) {
        parent.f28();
        parent.a28(localctx);
      }
    }
    this.h1z_1 = localctx;
  }
  a26(localctx, precedence) {
    return precedence >= this.g1z_1.q25();
  }
  g28(ctx) {
    var p = ctx;
    var ruleNames = this.a22();
    var stack = ArrayList.u1();
    while (!(p == null)) {
      var ruleIndex = p.g22();
      if (ruleIndex < 0) {
        stack.z1('n/a');
      } else {
        stack.z1(ruleNames[ruleIndex]);
      }
      p = p.f23();
    }
    return stack;
  }
  h28(ctx, $super) {
    ctx = ctx === VOID ? this.h1z_1 : ctx;
    return $super === VOID ? this.g28(ctx) : $super.g28.call(this, ctx);
  }
}
class Companion_3 {
  constructor() {
    Companion_instance_3 = this;
    this.i28_1 = ParserRuleContext.j28();
  }
}
class ParseTree {}
class RuleNode {}
class RuleContext {
  p25() {
    return this.c22_1 === -1;
  }
  m28() {
    return this;
  }
  j1f() {
    if (this.l28() === 0) {
      return '';
    }
    var builder = StringBuilder.s();
    var inductionVariable = 0;
    var last = this.l28();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        builder.t(ensureNotNull(this.s28(i)).j1f());
      }
       while (inductionVariable < last);
    return builder.toString();
  }
  g22() {
    return this.e22_1;
  }
  e28(value) {
  }
  l28() {
    return this.f22_1;
  }
  static n28() {
    var $this = createThis(this);
    init_org_antlr_v4_kotlinruntime_RuleContext($this);
    return $this;
  }
  static p28(parent, invokingState) {
    var $this = createThis(this);
    init_org_antlr_v4_kotlinruntime_RuleContext($this);
    $this.b22_1 = parent;
    $this.c22_1 = invokingState;
    return $this;
  }
  f23() {
    return this.b22_1;
  }
  q28(value) {
    this.b22_1 = value;
  }
  s28(i) {
    return null;
  }
  toString() {
    return this.x28(null, null);
  }
  x28(ruleNames, stop) {
    var buf = StringBuilder.s();
    var p = this;
    buf.t('[');
    while (!(p == null) && !(p === stop)) {
      if (ruleNames == null) {
        if (!p.p25()) {
          buf.af(p.c22_1);
        }
      } else {
        var ruleIndex = p.g22();
        var tmp;
        if (ruleIndex >= 0 && ruleIndex < ruleNames.b2()) {
          tmp = ruleNames.d2(ruleIndex);
        } else {
          tmp = ruleIndex.toString();
        }
        var ruleName = tmp;
        buf.t(ruleName);
      }
      if (!(p.b22_1 == null) && (!(ruleNames == null) || !ensureNotNull(p.b22_1).p25())) {
        buf.t(' ');
      }
      p = p.b22_1;
    }
    buf.t(']');
    return buf.toString();
  }
}
class ParserRuleContext extends RuleContext {
  k28() {
    var start = this.l27_1;
    var stop = this.m27_1;
    if (!(start == null) && !(stop == null)) {
      var endPoint = stop.y1x();
      if (!(endPoint == null)) {
        return new Position(start.x1x(), endPoint);
      }
    }
    return null;
  }
  l28() {
    var tmp0_safe_receiver = this.k27_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.b2();
    return tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
  }
  m28() {
    return this;
  }
  static j28() {
    Companion_getInstance_3();
    var $this = this.n28();
    init_org_antlr_v4_kotlinruntime_ParserRuleContext($this);
    return $this;
  }
  static o28(parent, invokingStateNumber) {
    Companion_getInstance_3();
    var $this = this.p28(parent, invokingStateNumber);
    init_org_antlr_v4_kotlinruntime_ParserRuleContext($this);
    return $this;
  }
  f23() {
    var tmp = this.b22_1;
    return (tmp == null ? true : tmp instanceof ParserRuleContext) ? tmp : THROW_CCE();
  }
  q28(value) {
    var tmp = this;
    tmp.b22_1 = (value == null ? true : value instanceof ParserRuleContext) ? value : THROW_CCE();
  }
  r27(listener) {
  }
  t27(listener) {
  }
  r28(t) {
    var childrenTemp = this.k27_1;
    if (childrenTemp == null) {
      childrenTemp = ArrayList.u1();
      this.k27_1 = childrenTemp;
    }
    childrenTemp.z1(t);
    return t;
  }
  a28(ruleInvocation) {
    return this.r28(ruleInvocation);
  }
  w27(t) {
    t.q28(this);
    return this.r28(t);
  }
  o27(errorNode) {
    errorNode.q28(this);
    return this.r28(errorNode);
  }
  f28() {
    var tempChildren = this.k27_1;
    if (tempChildren == null)
      null;
    else
      tempChildren.x3(tempChildren.b2() - 1 | 0);
  }
  s28(i) {
    var tempChildren = this.k27_1;
    var tmp;
    if (!(tempChildren == null) && i >= 0 && i < tempChildren.b2()) {
      tmp = tempChildren.d2(i);
    } else {
      tmp = null;
    }
    return tmp;
  }
  t28(ctxType, i) {
    var tempChildren = this.k27_1;
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
  u28(ttype, i) {
    var tempChildren = this.k27_1;
    if (tempChildren == null || i < 0 || i >= tempChildren.b2()) {
      return null;
    }
    var j = -1;
    var _iterator__ex2g4s = tempChildren.w();
    while (_iterator__ex2g4s.x()) {
      var o = _iterator__ex2g4s.y();
      if (isInterface(o, TerminalNode)) {
        var symbol = o.v28();
        if (symbol.x1r() === ttype) {
          j = j + 1 | 0;
          if (j === i) {
            return o;
          }
        }
      }
    }
    return null;
  }
  w28(ctxType, i) {
    return this.t28(ctxType, i);
  }
}
class ProxyErrorListener {
  constructor(delegates) {
    this.y28_1 = delegates;
  }
  k1v(recognizer, offendingSymbol, line, charPositionInLine, msg, e) {
    var _iterator__ex2g4s = this.y28_1.w();
    while (_iterator__ex2g4s.x()) {
      var listener = _iterator__ex2g4s.y();
      listener.k1v(recognizer, offendingSymbol, line, charPositionInLine, msg, e);
    }
  }
  l1v(recognizer, dfa, startIndex, stopIndex, exact, ambigAlts, configs) {
    var _iterator__ex2g4s = this.y28_1.w();
    while (_iterator__ex2g4s.x()) {
      var listener = _iterator__ex2g4s.y();
      listener.l1v(recognizer, dfa, startIndex, stopIndex, exact, ambigAlts, configs);
    }
  }
  m1v(recognizer, dfa, startIndex, stopIndex, conflictingAlts, configs) {
    var _iterator__ex2g4s = this.y28_1.w();
    while (_iterator__ex2g4s.x()) {
      var listener = _iterator__ex2g4s.y();
      listener.m1v(recognizer, dfa, startIndex, stopIndex, conflictingAlts, configs);
    }
  }
  n1v(recognizer, dfa, startIndex, stopIndex, prediction, configs) {
    var _iterator__ex2g4s = this.y28_1.w();
    while (_iterator__ex2g4s.x()) {
      var listener = _iterator__ex2g4s.y();
      listener.n1v(recognizer, dfa, startIndex, stopIndex, prediction, configs);
    }
  }
}
class Companion_4 {
  constructor() {
    Companion_instance_4 = this;
    this.z28_1 = -1;
    this.a29_1 = HashMap.y7();
    this.b29_1 = HashMap.y7();
  }
}
class RuntimeMetaData {
  constructor() {
    this.f29_1 = '4.13.1';
  }
  g29(generatingToolVersion, compileTimeVersion) {
    var runtimeConflictsWithGeneratingTool = false;
    if (!(generatingToolVersion == null)) {
      runtimeConflictsWithGeneratingTool = (!('4.13.1' === generatingToolVersion) && !(this.h29('4.13.1') === this.h29(generatingToolVersion)));
    }
    var runtimeConflictsWithCompileTimeTool = !('4.13.1' === compileTimeVersion) && !(this.h29('4.13.1') === this.h29(compileTimeVersion));
    if (runtimeConflictsWithGeneratingTool) {
      System_getInstance().g1v_1.e1v('ANTLR Tool version ' + generatingToolVersion + ' used for code generation does not match the current runtime version 4.13.1');
    }
    if (runtimeConflictsWithCompileTimeTool) {
      System_getInstance().g1v_1.e1v('ANTLR Runtime version ' + compileTimeVersion + ' used for parser compilation does not match the current runtime version 4.13.1');
    }
  }
  h29(version) {
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
    this.i29_1 = source;
    this.j29_1 = sourceName;
    this.m29_1 = 0;
    var _destruct__k2r9zo = codePointIndicesFast(this.i29_1);
    var codePointIndices = _destruct__k2r9zo.ki();
    var size = _destruct__k2r9zo.li();
    this.k29_1 = codePointIndices;
    this.l29_1 = size;
  }
  a1w() {
    if ((this.l29_1 - this.m29_1 | 0) === 0) {
      // Inline function 'com.strumenta.antlrkotlin.runtime.assert' call
      if (!(this.b1w(1) === -1)) {
        throw AssertionError.vc(null);
      }
      throw IllegalStateException.l4('cannot consume EOF');
    }
    this.m29_1 = this.m29_1 + 1 | 0;
  }
  t1v() {
    return this.m29_1;
  }
  z1v() {
    return this.l29_1;
  }
  u1v() {
    return -1;
  }
  v1v(marker) {
  }
  w1v(index) {
    this.m29_1 = index;
  }
  toString() {
    return this.o1w(Companion_getInstance_25().w1w(0, this.l29_1 - 1 | 0));
  }
  o1w(interval) {
    if (interval.p1w_1 >= this.l29_1 || interval.q1w_1 < 0) {
      return '';
    }
    var start = this.k29_1[interval.p1w_1];
    var bPlus1 = interval.q1w_1 + 1 | 0;
    var tmp;
    if (bPlus1 < this.l29_1) {
      tmp = this.k29_1[bPlus1];
    } else {
      tmp = this.i29_1.length;
    }
    var stop = tmp;
    return substring(this.i29_1, start, stop);
  }
  b1w(i) {
    return i < 0 ? codePoint(this, this.m29_1 + i | 0) : i > 0 ? codePoint(this, (this.m29_1 + i | 0) - 1 | 0) : 0;
  }
}
class Companion_5 {
  constructor() {
    Companion_instance_5 = this;
    var tmp = this;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp.c29_1 = Array(0);
    this.d29_1 = new VocabularyImpl(this.c29_1, this.c29_1, this.c29_1);
  }
  e29(tokenNames) {
    // Inline function 'kotlin.collections.isNullOrEmpty' call
    var tmp;
    if (tokenNames == null) {
      tmp = true;
    } else {
      // Inline function 'kotlin.collections.isEmpty' call
      tmp = tokenNames.length === 0;
    }
    if (tmp) {
      return this.d29_1;
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
    tmp.q29_1 = literalNames == null ? Companion_getInstance_5().c29_1 : literalNames;
    var tmp_0 = this;
    tmp_0.r29_1 = symbolicNames == null ? Companion_getInstance_5().c29_1 : symbolicNames;
    var tmp_1 = this;
    tmp_1.s29_1 = displayNames == null ? Companion_getInstance_5().c29_1 : displayNames;
    var tmp_2 = this;
    var tmp0 = this.s29_1.length;
    var tmp0_0 = this.q29_1.length;
    // Inline function 'kotlin.math.max' call
    var b = this.r29_1.length;
    // Inline function 'kotlin.math.max' call
    var b_0 = Math.max(tmp0_0, b);
    tmp_2.t29_1 = Math.max(tmp0, b_0) - 1 | 0;
  }
  u29(tokenType) {
    var tmp;
    if (0 <= tokenType ? tokenType <= (this.q29_1.length - 1 | 0) : false) {
      tmp = this.q29_1[tokenType];
    } else {
      tmp = null;
    }
    return tmp;
  }
  v29(tokenType) {
    if (0 <= tokenType ? tokenType <= (this.r29_1.length - 1 | 0) : false) {
      return this.r29_1[tokenType];
    }
    return tokenType === -1 ? 'EOF' : null;
  }
  w1x(tokenType) {
    if (0 <= tokenType ? tokenType <= (this.s29_1.length - 1 | 0) : false) {
      var displayName = this.s29_1[tokenType];
      if (!(displayName == null)) {
        return displayName;
      }
    }
    var literalName = this.u29(tokenType);
    if (!(literalName == null)) {
      return literalName;
    }
    var symbolicName = this.v29(tokenType);
    return symbolicName == null ? tokenType.toString() : symbolicName;
  }
}
class Companion_6 {
  constructor() {
    Companion_instance_6 = this;
    this.w29_1 = Regex.uf('\r\n|\r|\n');
  }
}
class Point {
  constructor(line, column) {
    Companion_getInstance_6();
    this.n29_1 = line;
    this.o29_1 = column;
    // Inline function 'kotlin.require' call
    if (!(this.n29_1 >= 1)) {
      var message = 'Line should be equal or greater than 1, but was ' + this.n29_1;
      throw IllegalArgumentException.m1(toString_0(message));
    }
    // Inline function 'kotlin.require' call
    if (!(this.o29_1 >= 0)) {
      var message_0 = 'Column should be equal or greater than 0, but was ' + this.o29_1;
      throw IllegalArgumentException.m1(toString_0(message_0));
    }
  }
  toString() {
    return 'line ' + this.n29_1 + ' : column ' + this.o29_1;
  }
  x29(other) {
    return this.n29_1 < other.n29_1 || (this.n29_1 === other.n29_1 && this.o29_1 < other.o29_1);
  }
  p29(text) {
    var matches = Companion_getInstance_6().w29_1.zf(text);
    var line = this.n29_1 + count(matches) | 0;
    var tmp;
    if (none(matches)) {
      tmp = this.o29_1 + text.length | 0;
    } else {
      tmp = (text.length - last(matches).dg().q2_1 | 0) - 1 | 0;
    }
    var col = tmp;
    return new Point(line, col);
  }
  hashCode() {
    var result = this.n29_1;
    result = imul(result, 31) + this.o29_1 | 0;
    return result;
  }
  equals(other) {
    if (this === other)
      return true;
    if (!(other instanceof Point))
      return false;
    var tmp0_other_with_cast = other instanceof Point ? other : THROW_CCE();
    if (!(this.n29_1 === tmp0_other_with_cast.n29_1))
      return false;
    if (!(this.o29_1 === tmp0_other_with_cast.o29_1))
      return false;
    return true;
  }
}
class Position {
  constructor(start, end) {
    this.y29_1 = start;
    this.z29_1 = end;
    // Inline function 'kotlin.require' call
    if (!(this.y29_1.x29(this.z29_1) || this.y29_1.equals(this.z29_1))) {
      var message = 'End should follows start or be the same as start (start: ' + this.y29_1.toString() + ', end: ' + this.z29_1.toString() + ')';
      throw IllegalArgumentException.m1(toString_0(message));
    }
  }
  toString() {
    return 'Position(start=' + this.y29_1.toString() + ', end=' + this.z29_1.toString() + ')';
  }
  hashCode() {
    var result = this.y29_1.hashCode();
    result = imul(result, 31) + this.z29_1.hashCode() | 0;
    return result;
  }
  equals(other) {
    if (this === other)
      return true;
    if (!(other instanceof Position))
      return false;
    var tmp0_other_with_cast = other instanceof Position ? other : THROW_CCE();
    if (!this.y29_1.equals(tmp0_other_with_cast.y29_1))
      return false;
    if (!this.z29_1.equals(tmp0_other_with_cast.z29_1))
      return false;
    return true;
  }
}
class Companion_7 {
  constructor() {
    this.a2a_1 = 0;
  }
}
class ATN {
  constructor(grammarType, maxTokenType) {
    this.b20_1 = grammarType;
    this.c20_1 = maxTokenType;
    this.d20_1 = ArrayList.u1();
    this.e20_1 = ArrayList.u1();
    this.f20_1 = null;
    this.g20_1 = null;
    this.h20_1 = LinkedHashMap.mb();
    this.i20_1 = null;
    this.j20_1 = null;
    this.k20_1 = ArrayList.u1();
  }
  b2a() {
    return this.e20_1.b2();
  }
  r22(s, ctx) {
    var anal = new LL1Analyzer(this);
    return anal.d2a(s, ctx);
  }
  p20(s) {
    var nextTokenWithinRule = s.v20_1;
    if (!(nextTokenWithinRule == null)) {
      return nextTokenWithinRule;
    }
    nextTokenWithinRule = this.r22(s, null);
    nextTokenWithinRule.e2a(true);
    s.v20_1 = nextTokenWithinRule;
    return nextTokenWithinRule;
  }
  f2a(state) {
    if (!(state == null)) {
      state.q20_1 = this;
      state.r20_1 = this.d20_1.b2();
    }
    this.d20_1.z1(state);
  }
  g2a(s) {
    this.e20_1.z1(s);
    s.o2a_1 = this.e20_1.b2() - 1 | 0;
    return s.o2a_1;
  }
  q2a(decision) {
    var tmp;
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!this.e20_1.u()) {
      tmp = this.e20_1.d2(decision);
    } else {
      tmp = null;
    }
    return tmp;
  }
  s26(stateNumber, context) {
    if (stateNumber < 0 || stateNumber >= this.d20_1.b2()) {
      throw IllegalArgumentException.m1('Invalid state number.');
    }
    var ctx = context;
    var s = this.d20_1.d2(stateNumber);
    var following = this.p20(ensureNotNull(s));
    if (!following.vk(-2)) {
      return following;
    }
    var expected = IntervalSet.w1z();
    expected.e23(following);
    expected.g23(-2);
    while (!(ctx == null) && ctx.c22_1 >= 0 && following.vk(-2)) {
      var invokingState = this.d20_1.d2(ctx.c22_1);
      var tmp = ensureNotNull(invokingState).q22(0);
      var rt = tmp instanceof RuleTransition ? tmp : THROW_CCE();
      following = this.p20(rt.b23_1);
      expected.e23(following);
      expected.g23(-2);
      ctx = ctx.f23();
    }
    if (following.vk(-2)) {
      expected.x1z(-1);
    }
    return expected;
  }
}
class Companion_8 {
  constructor() {
    this.r2a_1 = 1073741824;
  }
}
class ATNConfig {
  x2a() {
    return this.v2a_1 & -1073741825;
  }
  y2a(value) {
    var tmp;
    if (value) {
      this.v2a_1 = this.v2a_1 | 1073741824;
      tmp = Unit_instance;
    } else {
      this.v2a_1 = this.v2a_1 & -1073741825;
      tmp = Unit_instance;
    }
    return tmp;
  }
  z2a() {
    return !((this.v2a_1 & 1073741824) === 0);
  }
  static a2b(state, alt, context, semanticContext) {
    semanticContext = semanticContext === VOID ? Empty_getInstance() : semanticContext;
    var $this = createThis(this);
    init_org_antlr_v4_kotlinruntime_atn_ATNConfig($this);
    $this.s2a_1 = state;
    $this.t2a_1 = alt;
    $this.u2a_1 = context;
    $this.w2a_1 = semanticContext;
    return $this;
  }
  static b2b(c, state, semanticContext) {
    return this.c2b(c, state, c.u2a_1, semanticContext);
  }
  static d2b(c, semanticContext) {
    return this.c2b(c, c.s2a_1, c.u2a_1, semanticContext);
  }
  static c2b(c, state, context, semanticContext) {
    context = context === VOID ? c.u2a_1 : context;
    semanticContext = semanticContext === VOID ? c.w2a_1 : semanticContext;
    var $this = createThis(this);
    init_org_antlr_v4_kotlinruntime_atn_ATNConfig($this);
    $this.s2a_1 = state;
    $this.t2a_1 = c.t2a_1;
    $this.u2a_1 = context;
    $this.w2a_1 = semanticContext;
    $this.v2a_1 = c.v2a_1;
    return $this;
  }
  equals(other) {
    var tmp;
    if (other instanceof ATNConfig) {
      tmp = this.e2b(other);
    } else {
      tmp = false;
    }
    return tmp;
  }
  e2b(other) {
    if (this === other) {
      return true;
    }
    if (other == null) {
      return false;
    }
    return this.s2a_1.r20_1 === other.s2a_1.r20_1 && this.t2a_1 === other.t2a_1 && equals(this.u2a_1, other.u2a_1) && equals(this.w2a_1, other.w2a_1) && this.z2a() === other.z2a();
  }
  hashCode() {
    var hashCode = MurmurHash_instance.g2b(7);
    hashCode = MurmurHash_instance.h2b(hashCode, this.s2a_1.r20_1);
    hashCode = MurmurHash_instance.h2b(hashCode, this.t2a_1);
    hashCode = MurmurHash_instance.i2b(hashCode, this.u2a_1);
    hashCode = MurmurHash_instance.i2b(hashCode, this.w2a_1);
    hashCode = MurmurHash_instance.j2b(hashCode, 4);
    return hashCode;
  }
  toString() {
    return this.k2b(null, true);
  }
  k2b(recog, showAlt) {
    var buf = StringBuilder.s();
    buf.t('(');
    buf.z(this.s2a_1);
    if (showAlt) {
      buf.t(',');
      buf.af(this.t2a_1);
    }
    if (!(this.u2a_1 == null)) {
      buf.t(',[');
      buf.t(toString_0(ensureNotNull(this.u2a_1)));
      buf.t(']');
    }
    if (!(this.w2a_1 === Empty_getInstance())) {
      buf.t(',');
      buf.z(this.w2a_1);
    }
    if (this.x2a() > 0) {
      buf.t(',up=');
      buf.af(this.x2a());
    }
    buf.t(')');
    return buf.toString();
  }
}
class Array2DHashSet {
  constructor(comparator, initialCapacity, initialBucketCapacity) {
    comparator = comparator === VOID ? Companion_getInstance_27().j2l_1 : comparator;
    initialCapacity = initialCapacity === VOID ? 16 : initialCapacity;
    initialBucketCapacity = initialBucketCapacity === VOID ? 8 : initialBucketCapacity;
    this.v2b_1 = comparator;
    this.w2b_1 = initialCapacity;
    this.x2b_1 = initialBucketCapacity;
    this.z2b_1 = 0;
    this.a2c_1 = 1;
    this.b2c_1 = 0;
    this.y2b_1 = this.t2b(this.w2b_1);
    var tmp = this;
    // Inline function 'kotlin.math.floor' call
    var x = this.w2b_1 * 0.75;
    var tmp$ret$0 = Math.floor(x);
    tmp.b2c_1 = numberToInt(tmp$ret$0);
  }
  c2c(o) {
    if (this.z2b_1 > this.b2c_1) {
      this.g2c();
    }
    return this.d2c(o);
  }
  d2c(o) {
    var b = this.f2c(o);
    var bucket = this.y2b_1[b];
    if (bucket == null) {
      bucket = this.u2b(this.x2b_1);
      bucket[0] = o;
      this.y2b_1[b] = bucket;
      this.z2b_1 = this.z2b_1 + 1 | 0;
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
          this.z2b_1 = this.z2b_1 + 1 | 0;
          return o;
        }
        if (this.v2b_1.p2c(existing, o)) {
          return existing;
        }
      }
       while (inductionVariable <= last);
    var oldLength = bucket.length;
    bucket = copyOf(bucket, imul(bucket.length, 2));
    this.y2b_1[b] = bucket;
    bucket[oldLength] = o;
    this.z2b_1 = this.z2b_1 + 1 | 0;
    return o;
  }
  e2c(o) {
    if (o == null) {
      return o;
    }
    var b = this.f2c(o);
    var tmp0_elvis_lhs = this.y2b_1[b];
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
      if (this.v2b_1.p2c(e, o)) {
        return e;
      }
    }
    return null;
  }
  f2c(o) {
    var hash = this.v2b_1.n2c(o);
    return hash & (this.y2b_1.length - 1 | 0);
  }
  hashCode() {
    var hash = MurmurHash_instance.b2n();
    var indexedObject = this.y2b_1;
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
        hash = MurmurHash_instance.h2b(hash, this.v2b_1.n2c(o));
      }
    }
    hash = MurmurHash_instance.j2b(hash, this.b2());
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
  g2c() {
    var old = this.y2b_1;
    this.a2c_1 = this.a2c_1 + 4 | 0;
    var newCapacity = imul(this.y2b_1.length, 2);
    var newTable = this.t2b(newCapacity);
    var newBucketLengths = new Int32Array(newTable.length);
    this.y2b_1 = newTable;
    this.b2c_1 = numberToInt(newCapacity * 0.75);
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
        var b = this.f2c(o);
        var bucketLength = newBucketLengths[b];
        var newBucket;
        if (bucketLength === 0) {
          newBucket = this.u2b(this.x2b_1);
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
    if (!(this.z2b_1 === oldSize)) {
      throw AssertionError.vc(null);
    }
  }
  h2c(element) {
    var existing = this.c2c(element);
    return existing === element;
  }
  z1(element) {
    return this.h2c(element);
  }
  b2() {
    return this.z2b_1;
  }
  u() {
    return this.z2b_1 === 0;
  }
  gi(element) {
    return this.i2c(element);
  }
  g2(element) {
    if (!true)
      return false;
    return this.gi(element);
  }
  i2c(obj) {
    var tmp;
    if (obj == null) {
      tmp = false;
    } else {
      tmp = !(this.e2c(obj) == null);
    }
    return tmp;
  }
  w() {
    return new SetIterator(this, this.m7());
  }
  m7() {
    var a = this.u2b(this.b2());
    var i = 0;
    var indexedObject = this.y2b_1;
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
  j2c(element) {
    return this.k2c(this.s2b(element));
  }
  k2c(obj) {
    if (obj == null) {
      return false;
    }
    var b = this.f2c(obj);
    var tmp0_elvis_lhs = this.y2b_1[b];
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
        if (this.v2b_1.p2c(e, obj)) {
          var tmp6 = i + 1 | 0;
          // Inline function 'kotlin.collections.copyInto' call
          var endIndex = bucket.length;
          arrayCopy(bucket, bucket, i, tmp6, endIndex);
          bucket[bucket.length - 1 | 0] = null;
          this.z2b_1 = this.z2b_1 - 1 | 0;
          return true;
        }
      }
       while (inductionVariable <= last);
    return false;
  }
  hi(elements) {
    if (elements instanceof Array2DHashSet) {
      var indexedObject = this.y2b_1;
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
          if (!this.i2c(this.s2b(o))) {
            return false;
          }
        }
      }
    } else {
      var _iterator__ex2g4s_0 = elements.w();
      while (_iterator__ex2g4s_0.x()) {
        var o_0 = _iterator__ex2g4s_0.y();
        if (!(o_0 == null) && !this.i2c(this.s2b(o_0))) {
          return false;
        }
      }
    }
    return true;
  }
  h3(elements) {
    return this.hi(elements);
  }
  l2c(elements) {
    var changed = false;
    var _iterator__ex2g4s = elements.w();
    while (_iterator__ex2g4s.x()) {
      var o = _iterator__ex2g4s.y();
      var existing = this.c2c(o);
      if (!(existing === o)) {
        changed = true;
      }
    }
    return changed;
  }
  c2(elements) {
    return this.l2c(elements);
  }
  toString() {
    if (this.b2() === 0) {
      return '{}';
    }
    var buf = StringBuilder.s();
    buf.t('{');
    var first = true;
    var indexedObject = this.y2b_1;
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
  s2b(o) {
    return o;
  }
  t2b(capacity) {
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp = Array(capacity);
    return isArray(tmp) ? tmp : THROW_CCE();
  }
  u2b(capacity) {
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
  s2b(o) {
    var tmp;
    if (!(o instanceof ATNConfig)) {
      tmp = null;
    } else {
      tmp = o;
    }
    return tmp;
  }
  t2b(capacity) {
    // Inline function 'kotlin.arrayOfNulls' call
    return Array(capacity);
  }
  u2b(capacity) {
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
  m2c(obj) {
    var hashCode_0 = 7;
    hashCode_0 = imul(31, hashCode_0) + obj.s2a_1.r20_1 | 0;
    hashCode_0 = imul(31, hashCode_0) + obj.t2a_1 | 0;
    hashCode_0 = imul(31, hashCode_0) + hashCode(obj.w2a_1) | 0;
    return hashCode_0;
  }
  n2c(obj) {
    return this.m2c(obj instanceof ATNConfig ? obj : THROW_CCE());
  }
  o2c(a, b) {
    if (a === b) {
      return true;
    }
    if (a == null || b == null) {
      return false;
    }
    return a.s2a_1.r20_1 === b.s2a_1.r20_1 && a.t2a_1 === b.t2a_1 && equals(a.w2a_1, b.w2a_1);
  }
  p2c(a, b) {
    var tmp = (a == null ? true : a instanceof ATNConfig) ? a : THROW_CCE();
    return this.o2c(tmp, (b == null ? true : b instanceof ATNConfig) ? b : THROW_CCE());
  }
}
class ATNConfigSet {
  constructor(fullCtx) {
    fullCtx = fullCtx === VOID ? true : fullCtx;
    this.q2c_1 = fullCtx;
    this.r2c_1 = new ConfigHashSet();
    this.s2c_1 = ArrayList.y1(7);
    this.t2c_1 = 0;
    this.u2c_1 = null;
    this.v2c_1 = false;
    this.w2c_1 = false;
    this.x2c_1 = -1;
    this.y2c_1 = false;
  }
  z2c() {
    var alts = BitSet.b2d();
    var _iterator__ex2g4s = this.s2c_1.w();
    while (_iterator__ex2g4s.x()) {
      var config = _iterator__ex2g4s.y();
      alts.c2d(config.t2a_1);
    }
    return alts;
  }
  e2a(value) {
    this.y2c_1 = value;
    this.r2c_1 = null;
  }
  d2d(element) {
    return this.e2d(element, null);
  }
  z1(element) {
    return this.d2d(element instanceof ATNConfig ? element : THROW_CCE());
  }
  e2d(config, mergeCache) {
    if (this.y2c_1) {
      throw IllegalStateException.l4('This set is readonly');
    }
    if (!(config.w2a_1 === Empty_getInstance())) {
      this.v2c_1 = true;
    }
    if (config.x2a() > 0) {
      this.w2c_1 = true;
    }
    var existing = ensureNotNull(this.r2c_1).c2c(config);
    if (existing === config) {
      this.x2c_1 = -1;
      this.s2c_1.z1(config);
      return true;
    }
    var rootIsWildcard = !this.q2c_1;
    var merged = Companion_instance_17.i2d(existing.u2a_1, config.u2a_1, rootIsWildcard, mergeCache);
    var tmp = existing;
    var tmp0 = existing.v2a_1;
    // Inline function 'kotlin.math.max' call
    var b = config.v2a_1;
    tmp.v2a_1 = Math.max(tmp0, b);
    if (config.z2a()) {
      existing.y2a(true);
    }
    existing.u2a_1 = merged;
    return true;
  }
  j2d() {
    return this.s2c_1;
  }
  k2d(interpreter) {
    if (this.y2c_1) {
      throw IllegalStateException.l4('This set is readonly');
    }
    if (ensureNotNull(this.r2c_1).u()) {
      return Unit_instance;
    }
    var _iterator__ex2g4s = this.s2c_1.w();
    while (_iterator__ex2g4s.x()) {
      var config = _iterator__ex2g4s.y();
      config.u2a_1 = interpreter.l2d(ensureNotNull(config.u2a_1));
    }
  }
  m2d(elements) {
    var _iterator__ex2g4s = elements.w();
    while (_iterator__ex2g4s.x()) {
      var c = _iterator__ex2g4s.y();
      this.d2d(c);
    }
    return false;
  }
  c2(elements) {
    return this.m2d(elements);
  }
  equals(other) {
    if (other === this) {
      return true;
    }
    if (!(other instanceof ATNConfigSet)) {
      return false;
    }
    return equals(this.s2c_1, other.s2c_1) && this.q2c_1 === other.q2c_1 && this.t2c_1 === other.t2c_1 && this.u2c_1 === other.u2c_1 && this.v2c_1 === other.v2c_1 && this.w2c_1 === other.w2c_1;
  }
  hashCode() {
    if (this.y2c_1) {
      if (this.x2c_1 === -1) {
        this.x2c_1 = hashCode(this.s2c_1);
      }
      return this.x2c_1;
    }
    return hashCode(this.s2c_1);
  }
  b2() {
    return this.s2c_1.b2();
  }
  u() {
    return this.s2c_1.u();
  }
  n2d(element) {
    if (this.r2c_1 == null) {
      throw UnsupportedOperationException.l9('This method is not implemented for readonly sets.');
    }
    return ensureNotNull(this.r2c_1).gi(element);
  }
  g2(element) {
    if (!(element instanceof ATNConfig))
      return false;
    return this.n2d(element instanceof ATNConfig ? element : THROW_CCE());
  }
  w() {
    return this.s2c_1.w();
  }
  toString() {
    var buf = StringBuilder.s();
    buf.t(toString_0(this.j2d()));
    if (this.v2c_1) {
      buf.t(',hasSemanticContext=');
      buf.ze(this.v2c_1);
    }
    if (!(this.t2c_1 === 0)) {
      buf.t(',uniqueAlt=');
      buf.af(this.t2c_1);
    }
    if (!(this.u2c_1 == null)) {
      buf.t(',conflictingAlts=');
      buf.z(this.u2c_1);
    }
    if (this.w2c_1) {
      buf.t(',dipsIntoOuterContext');
    }
    return buf.toString();
  }
  o2d(elements) {
    throw UnsupportedOperationException.q7();
  }
  h3(elements) {
    return this.o2d(elements);
  }
}
class Companion_9 {
  constructor() {
    Companion_instance_9 = this;
    var tmp = this;
    // Inline function 'kotlin.also' call
    var this_0 = ATNDeserializationOptions.s2d();
    this_0.t2d();
    tmp.u2d_1 = this_0;
  }
}
class ATNDeserializationOptions {
  v2d() {
    return this.q2d_1;
  }
  w2d() {
    return this.r2d_1;
  }
  static s2d() {
    Companion_getInstance_9();
    var $this = createThis(this);
    init_org_antlr_v4_kotlinruntime_atn_ATNDeserializationOptions($this);
    $this.q2d_1 = true;
    $this.r2d_1 = false;
    return $this;
  }
  t2d() {
    this.p2d_1 = true;
  }
}
class Companion_10 {
  constructor() {
    this.x2d_1 = 4;
  }
}
class ATNDeserializer {
  constructor(deserializationOptions) {
    deserializationOptions = deserializationOptions === VOID ? Companion_getInstance_9().u2d_1 : deserializationOptions;
    this.z2d_1 = deserializationOptions;
  }
  a2e(data) {
    return this.c2e(this.b2e(data));
  }
  c2e(data) {
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
          atn.f2a(null);
          continue $l$loop;
        }
        var _unary__edvuaz_4 = p._v;
        p._v = _unary__edvuaz_4 + 1 | 0;
        var ruleIndex = data[_unary__edvuaz_4];
        var s = this.d2e(sType, ruleIndex);
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
        atn.f2a(s);
      }
       while (inductionVariable < nStates);
    var _iterator__ex2g4s = loopBackStateNumbers.w();
    while (_iterator__ex2g4s.x()) {
      var pair = _iterator__ex2g4s.y();
      pair.first.l2e_1 = atn.d20_1.d2(pair.second);
    }
    var _iterator__ex2g4s_0 = endStateNumbers.w();
    while (_iterator__ex2g4s_0.x()) {
      var pair_0 = _iterator__ex2g4s_0.y();
      var tmp_0 = pair_0.first;
      var tmp_1 = atn.d20_1.d2(pair_0.second);
      tmp_0.w2e_1 = tmp_1 instanceof BlockEndState ? tmp_1 : THROW_CCE();
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
        var tmp_2 = atn.d20_1.d2(stateNumber);
        (tmp_2 instanceof DecisionState ? tmp_2 : THROW_CCE()).p2a_1 = true;
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
        var tmp_3 = atn.d20_1.d2(stateNumber_0);
        (tmp_3 instanceof RuleStartState ? tmp_3 : THROW_CCE()).f2f_1 = true;
      }
       while (inductionVariable_1 < numPrecedenceStates);
    var _unary__edvuaz_11 = p._v;
    p._v = _unary__edvuaz_11 + 1 | 0;
    var nRules = data[_unary__edvuaz_11];
    if (atn.b20_1.equals(ATNType_LEXER_getInstance())) {
      atn.i20_1 = new Int32Array(nRules);
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
      var tmp_8 = atn.d20_1.d2(s_0);
      var startState = tmp_8 instanceof RuleStartState ? tmp_8 : THROW_CCE();
      if (atn.b20_1.equals(ATNType_LEXER_getInstance())) {
        var _unary__edvuaz_13 = p._v;
        p._v = _unary__edvuaz_13 + 1 | 0;
        var tokenType = data[_unary__edvuaz_13];
        ensureNotNull(atn.i20_1)[tmp_7] = tokenType;
      }
      tmp_6[tmp_7] = startState;
      tmp_5 = tmp_5 + 1 | 0;
    }
    tmp_4.f20_1 = tmp_6;
    var tmp_9 = atn;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp_9.g20_1 = Array(nRules);
    var _iterator__ex2g4s_1 = atn.d20_1.w();
    $l$loop_0: while (_iterator__ex2g4s_1.x()) {
      var state = _iterator__ex2g4s_1.y();
      if (!(state instanceof RuleStopState)) {
        continue $l$loop_0;
      }
      ensureNotNull(atn.g20_1)[state.s20_1] = state;
      ensureNotNull(atn.f20_1)[state.s20_1].e2f_1 = state;
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
        var tmp_10 = atn.d20_1.d2(s_1);
        atn.k20_1.z1(tmp_10 instanceof TokensStartState ? tmp_10 : THROW_CCE());
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
        var trans = this.h2f(atn, ttype, src, trg, arg1, arg2, arg3, sets);
        var srcState = atn.d20_1.d2(src);
        ensureNotNull(srcState).i2f(trans);
        p._v = p._v + 6 | 0;
      }
       while (inductionVariable_3 < nEdges);
    var _iterator__ex2g4s_2 = atn.d20_1.w();
    while (_iterator__ex2g4s_2.x()) {
      var state_0 = _iterator__ex2g4s_2.y();
      var inductionVariable_4 = 0;
      var last = ensureNotNull(state_0).j2f();
      if (inductionVariable_4 < last)
        $l$loop_1: do {
          var i_4 = inductionVariable_4;
          inductionVariable_4 = inductionVariable_4 + 1 | 0;
          var tmp_11 = state_0.q22(i_4);
          var tmp0_elvis_lhs = tmp_11 instanceof RuleTransition ? tmp_11 : null;
          var tmp_12;
          if (tmp0_elvis_lhs == null) {
            continue $l$loop_1;
          } else {
            tmp_12 = tmp0_elvis_lhs;
          }
          var t = tmp_12;
          var outermostPrecedenceReturn = -1;
          if (ensureNotNull(atn.f20_1)[t.o22_1.s20_1].f2f_1) {
            if (t.a23_1 === 0) {
              outermostPrecedenceReturn = t.o22_1.s20_1;
            }
          }
          var returnTransition = new EpsilonTransition(t.b23_1, outermostPrecedenceReturn);
          ensureNotNull(ensureNotNull(atn.g20_1)[t.o22_1.s20_1]).i2f(returnTransition);
        }
         while (inductionVariable_4 < last);
    }
    var _iterator__ex2g4s_3 = atn.d20_1.w();
    while (_iterator__ex2g4s_3.x()) {
      var state_1 = _iterator__ex2g4s_3.y();
      if (state_1 instanceof BlockStartState) {
        var tmp1_elvis_lhs = state_1.w2e_1;
        var tmp_13;
        if (tmp1_elvis_lhs == null) {
          throw IllegalStateException.ac();
        } else {
          tmp_13 = tmp1_elvis_lhs;
        }
        var endState = tmp_13;
        if (!(endState.r2f_1 == null)) {
          throw IllegalStateException.ac();
        }
        endState.r2f_1 = state_1;
      }
      if (state_1 instanceof PlusLoopbackState) {
        var inductionVariable_5 = 0;
        var last_0 = state_1.j2f();
        if (inductionVariable_5 < last_0)
          do {
            var i_5 = inductionVariable_5;
            inductionVariable_5 = inductionVariable_5 + 1 | 0;
            var target = state_1.q22(i_5).o22_1;
            if (target instanceof PlusBlockStartState) {
              target.p2g_1 = state_1;
            }
          }
           while (inductionVariable_5 < last_0);
      } else {
        if (state_1 instanceof StarLoopbackState) {
          var inductionVariable_6 = 0;
          var last_1 = state_1.j2f();
          if (inductionVariable_6 < last_1)
            do {
              var i_6 = inductionVariable_6;
              inductionVariable_6 = inductionVariable_6 + 1 | 0;
              var target_0 = state_1.q22(i_6).o22_1;
              if (target_0 instanceof StarLoopEntryState) {
                target_0.c2g_1 = state_1;
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
        var tmp_14 = atn.d20_1.d2(s_2);
        var decState = tmp_14 instanceof DecisionState ? tmp_14 : THROW_CCE();
        atn.e20_1.z1(decState);
        decState.o2a_1 = i_7 - 1 | 0;
      }
       while (!(i_7 === nDecisions));
    if (atn.b20_1.equals(ATNType_LEXER_getInstance())) {
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
        tmp_18[tmp_19] = this.r2g(actionType, data1, data2);
        tmp_16 = tmp_16 + 1 | 0;
      }
      tmp_15.j20_1 = tmp_18;
    }
    this.s2g(atn);
    if (this.z2d_1.v2d()) {
      this.t2g(atn);
    }
    if (this.z2d_1.w2d() && atn.b20_1.equals(ATNType_PARSER_getInstance())) {
      atn.i20_1 = new Int32Array(ensureNotNull(atn.f20_1).length);
      var inductionVariable_8 = 0;
      var last_2 = ensureNotNull(atn.f20_1).length - 1 | 0;
      if (inductionVariable_8 <= last_2)
        do {
          var i_8 = inductionVariable_8;
          inductionVariable_8 = inductionVariable_8 + 1 | 0;
          ensureNotNull(atn.i20_1)[i_8] = (atn.c20_1 + i_8 | 0) + 1 | 0;
        }
         while (inductionVariable_8 <= last_2);
      var inductionVariable_9 = 0;
      var last_3 = ensureNotNull(atn.f20_1).length - 1 | 0;
      if (inductionVariable_9 <= last_3)
        do {
          var i_9 = inductionVariable_9;
          inductionVariable_9 = inductionVariable_9 + 1 | 0;
          var bypassStart = new BasicBlockStartState();
          bypassStart.s20_1 = i_9;
          atn.f2a(bypassStart);
          var bypassStop = new BlockEndState();
          bypassStop.s20_1 = i_9;
          atn.f2a(bypassStop);
          bypassStart.w2e_1 = bypassStop;
          atn.g2a(bypassStart);
          bypassStop.r2f_1 = bypassStart;
          var endState_0;
          var excludeTransition = null;
          if (ensureNotNull(atn.f20_1)[i_9].f2f_1) {
            endState_0 = null;
            var _iterator__ex2g4s_4 = atn.d20_1.w();
            $l$loop_5: while (_iterator__ex2g4s_4.x()) {
              var state_2 = _iterator__ex2g4s_4.y();
              if (!(ensureNotNull(state_2).s20_1 === i_9)) {
                continue $l$loop_5;
              }
              if (!(state_2 instanceof StarLoopEntryState)) {
                continue $l$loop_5;
              }
              var maybeLoopEndState = state_2.q22(state_2.j2f() - 1 | 0).o22_1;
              if (!(maybeLoopEndState instanceof LoopEndState)) {
                continue $l$loop_5;
              }
              var tmp_21;
              if (maybeLoopEndState.t20_1) {
                var tmp_22 = maybeLoopEndState.q22(0).o22_1;
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
            excludeTransition = ensureNotNull((endState_0 instanceof StarLoopEntryState ? endState_0 : THROW_CCE()).c2g_1).q22(0);
          } else {
            endState_0 = ensureNotNull(atn.g20_1)[i_9];
          }
          var _iterator__ex2g4s_5 = atn.d20_1.w();
          while (_iterator__ex2g4s_5.x()) {
            var state_3 = _iterator__ex2g4s_5.y();
            var _iterator__ex2g4s_6 = ensureNotNull(state_3).u20_1.w();
            $l$loop_6: while (_iterator__ex2g4s_6.x()) {
              var transition = _iterator__ex2g4s_6.y();
              if (transition === excludeTransition) {
                continue $l$loop_6;
              }
              if (transition.o22_1 === endState_0) {
                transition.o22_1 = bypassStop;
              }
            }
          }
          while (ensureNotNull(atn.f20_1)[i_9].j2f() > 0) {
            var transition_0 = ensureNotNull(atn.f20_1)[i_9].u2g(ensureNotNull(atn.f20_1)[i_9].j2f() - 1 | 0);
            bypassStart.i2f(transition_0);
          }
          ensureNotNull(atn.f20_1)[i_9].i2f(new EpsilonTransition(bypassStart));
          bypassStop.i2f(new EpsilonTransition(ensureNotNull(endState_0)));
          var matchState = new BasicState();
          atn.f2a(matchState);
          matchState.i2f(new AtomTransition(bypassStop, ensureNotNull(atn.i20_1)[i_9]));
          bypassStart.i2f(new EpsilonTransition(matchState));
        }
         while (inductionVariable_9 <= last_3);
      if (this.z2d_1.v2d()) {
        this.t2g(atn);
      }
    }
    return atn;
  }
  s2g(atn) {
    var _iterator__ex2g4s = atn.d20_1.w();
    $l$loop: while (_iterator__ex2g4s.x()) {
      var state = _iterator__ex2g4s.y();
      if (!(state instanceof StarLoopEntryState)) {
        continue $l$loop;
      }
      if (ensureNotNull(atn.f20_1)[state.s20_1].f2f_1) {
        var maybeLoopEndState = state.q22(state.j2f() - 1 | 0).o22_1;
        if (maybeLoopEndState instanceof LoopEndState) {
          var tmp;
          if (maybeLoopEndState.t20_1) {
            var tmp_0 = maybeLoopEndState.q22(0).o22_1;
            tmp = tmp_0 instanceof RuleStopState;
          } else {
            tmp = false;
          }
          if (tmp) {
            state.d2g_1 = true;
          }
        }
      }
    }
  }
  t2g(atn) {
    var _iterator__ex2g4s = atn.d20_1.w();
    $l$loop: while (_iterator__ex2g4s.x()) {
      var state = _iterator__ex2g4s.y();
      if (state == null) {
        continue $l$loop;
      }
      this.w2g(state.v2g() || state.j2f() <= 1);
      if (state instanceof PlusBlockStartState) {
        this.w2g(!(state.p2g_1 == null));
      }
      if (state instanceof StarLoopEntryState) {
        this.w2g(!(state.c2g_1 == null));
        this.w2g(state.j2f() === 2);
        var tmp0_subject = state.q22(0).o22_1;
        if (tmp0_subject instanceof StarBlockStartState) {
          var tmp = state.q22(1).o22_1;
          this.w2g(tmp instanceof LoopEndState);
          this.w2g(!state.p2a_1);
        } else {
          if (tmp0_subject instanceof LoopEndState) {
            var tmp_0 = state.q22(1).o22_1;
            this.w2g(tmp_0 instanceof StarBlockStartState);
            this.w2g(state.p2a_1);
          } else {
            throw IllegalStateException.ac();
          }
        }
      }
      if (state instanceof StarLoopbackState) {
        this.w2g(state.j2f() === 1);
        var tmp_1 = state.q22(0).o22_1;
        this.w2g(tmp_1 instanceof StarLoopEntryState);
      }
      if (state instanceof LoopEndState) {
        this.w2g(!(state.l2e_1 == null));
      }
      if (state instanceof RuleStartState) {
        this.w2g(!(state.e2f_1 == null));
      }
      if (state instanceof BlockStartState) {
        this.w2g(!(state.w2e_1 == null));
      }
      if (state instanceof BlockEndState) {
        this.w2g(!(state.r2f_1 == null));
      }
      if (state instanceof DecisionState) {
        this.w2g(state.j2f() <= 1 || state.o2a_1 >= 0);
      } else {
        var tmp_2;
        if (state.j2f() <= 1) {
          tmp_2 = true;
        } else {
          tmp_2 = state instanceof RuleStopState;
        }
        this.w2g(tmp_2);
      }
    }
  }
  x2g(condition, message) {
    if (!condition) {
      throw IllegalStateException.l4(message);
    }
  }
  w2g(condition, message, $super) {
    message = message === VOID ? null : message;
    var tmp;
    if ($super === VOID) {
      this.x2g(condition, message);
      tmp = Unit_instance;
    } else {
      tmp = $super.x2g.call(this, condition, message);
    }
    return tmp;
  }
  h2f(atn, type, src, trg, arg1, arg2, arg3, sets) {
    var target = ensureNotNull(atn.d20_1.d2(trg));
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
        var tmp_1 = atn.d20_1.d2(arg1);
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
  d2e(type, ruleIndex) {
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
    s.s20_1 = ruleIndex;
    return s;
  }
  r2g(type, data1, data2) {
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
  y2g(data16, trimToSize) {
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
  b2e(data16, trimToSize, $super) {
    trimToSize = trimToSize === VOID ? false : trimToSize;
    return $super === VOID ? this.y2g(data16, trimToSize) : $super.y2g.call(this, data16, trimToSize);
  }
}
class Companion_11 {
  constructor() {
    Companion_instance_11 = this;
    var tmp = this;
    // Inline function 'kotlin.also' call
    var this_0 = DFAState.h2h(new ATNConfigSet());
    this_0.z2g_1 = 2147483647;
    tmp.i2h_1 = this_0;
  }
}
class ATNSimulator {
  constructor(atn, sharedContextCache) {
    Companion_getInstance_11();
    this.l20_1 = atn;
    this.m20_1 = sharedContextCache;
  }
  l2d(context) {
    if (this.m20_1 == null) {
      return context;
    }
    // Inline function 'com.strumenta.antlrkotlin.runtime.synchronized' call
    this.m20_1;
    var visited = new IdentityHashMap();
    return Companion_instance_17.j2h(context, this.m20_1, visited);
  }
}
class Companion_12 {
  constructor() {
    Companion_instance_12 = this;
    this.k2h_1 = 4;
    this.l2h_1 = 0;
    this.m2h_1 = 1;
    this.n2h_1 = 2;
    this.o2h_1 = 3;
    this.p2h_1 = 4;
    this.q2h_1 = 5;
    this.r2h_1 = 6;
    this.s2h_1 = 7;
    this.t2h_1 = 8;
    this.u2h_1 = 9;
    this.v2h_1 = 10;
    this.w2h_1 = 11;
    this.x2h_1 = 12;
    var tmp = this;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.y2h_1 = ['INVALID', 'BASIC', 'RULE_START', 'BLOCK_START', 'PLUS_BLOCK_START', 'STAR_BLOCK_START', 'TOKEN_START', 'RULE_STOP', 'BLOCK_END', 'STAR_LOOP_BACK', 'STAR_LOOP_ENTRY', 'PLUS_LOOP_BACK', 'LOOP_END'];
    this.z2h_1 = -1;
  }
}
class ATNState {
  constructor() {
    Companion_getInstance_12();
    this.q20_1 = null;
    this.r20_1 = -1;
    this.s20_1 = 0;
    this.t20_1 = false;
    this.u20_1 = ArrayList.y1(4);
    this.v20_1 = null;
    this.w20_1 = false;
  }
  j2f() {
    return this.u20_1.b2();
  }
  hashCode() {
    return this.r20_1;
  }
  equals(other) {
    var tmp;
    if (other instanceof ATNState) {
      tmp = this.r20_1 === other.r20_1;
    } else {
      tmp = false;
    }
    return tmp;
  }
  toString() {
    return this.r20_1.toString();
  }
  i2f(e) {
    return this.a2i(this.u20_1.b2(), e);
  }
  a2i(index, e) {
    if (this.u20_1.u()) {
      this.t20_1 = e.b2i();
    } else if (!(this.t20_1 === e.b2i())) {
      System_getInstance().g1v_1.e1v('ATN state ' + this.r20_1 + ' has both epsilon and non-epsilon transitions.');
      this.t20_1 = false;
    }
    var alreadyPresent = false;
    var _iterator__ex2g4s = this.u20_1.w();
    $l$loop_0: while (_iterator__ex2g4s.x()) {
      var t = _iterator__ex2g4s.y();
      if (t.o22_1.r20_1 === e.o22_1.r20_1) {
        if (!(t.getLabel() == null) && !(e.getLabel() == null) && ensureNotNull(t.getLabel()).equals(e.getLabel())) {
          alreadyPresent = true;
          break $l$loop_0;
        } else if (t.b2i() && e.b2i()) {
          alreadyPresent = true;
          break $l$loop_0;
        }
      }
    }
    if (!alreadyPresent) {
      this.u20_1.w3(index, e);
    }
  }
  q22(i) {
    return this.u20_1.d2(i);
  }
  u2g(index) {
    return this.u20_1.x3(index);
  }
  v2g() {
    return this.t20_1;
  }
}
class ATNType extends Enum {}
class Transition {
  constructor(target) {
    Companion_getInstance_21();
    this.o22_1 = target;
    this.p22_1 = false;
  }
  b2i() {
    return this.p22_1;
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
    this.g2i_1 = ruleIndex;
    this.h2i_1 = actionIndex;
    this.i2i_1 = isCtxDependent;
    this.j2i_1 = 6;
    this.k2i_1 = true;
  }
  c2i() {
    return this.j2i_1;
  }
  b2i() {
    return this.k2i_1;
  }
  d2i(symbol, minVocabSymbol, maxVocabSymbol) {
    return false;
  }
  toString() {
    return 'action_' + this.g2i_1 + ':' + this.h2i_1;
  }
}
class PredictionContext {
  static t2i(cachedHashCode) {
    var $this = createThis(this);
    $this.r2i_1 = cachedHashCode;
    var tmp = $this;
    var _unary__edvuaz = Companion_instance_17.h2d_1;
    Companion_instance_17.h2d_1 = _unary__edvuaz + 1 | 0;
    tmp.s2i_1 = _unary__edvuaz;
    return $this;
  }
  p25() {
    return this === EmptyPredictionContext_getInstance();
  }
  b2j() {
    return this.a2j(this.z1v() - 1 | 0) === 2147483647;
  }
  c2j(recog) {
    return toString_0(this);
  }
  hashCode() {
    return this.r2i_1;
  }
}
class ArrayPredictionContext extends PredictionContext {
  static p2i(parents, returnStates) {
    var $this = this.t2i(Companion_instance_17.q2i(parents, returnStates));
    $this.n2i_1 = parents;
    $this.o2i_1 = returnStates;
    // Inline function 'kotlin.collections.isNotEmpty' call
    // Inline function 'kotlin.collections.isEmpty' call
    // Inline function 'com.strumenta.antlrkotlin.runtime.assert' call
    if (!!($this.n2i_1.length === 0)) {
      throw AssertionError.vc(null);
    }
    // Inline function 'kotlin.collections.isNotEmpty' call
    // Inline function 'kotlin.collections.isEmpty' call
    // Inline function 'com.strumenta.antlrkotlin.runtime.assert' call
    if (!!($this.o2i_1.length === 0)) {
      throw AssertionError.vc(null);
    }
    return $this;
  }
  p25() {
    return this.o2i_1[0] === 2147483647;
  }
  static u2i(a) {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp = [a.x2i_1];
    // Inline function 'kotlin.intArrayOf' call
    var tmp$ret$3 = new Int32Array([a.y2i_1]);
    return this.p2i(tmp, tmp$ret$3);
  }
  z1v() {
    return this.o2i_1.length;
  }
  z2i(index) {
    return this.n2i_1[index];
  }
  a2j(index) {
    return this.o2i_1[index];
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
    return contentEquals(this.o2i_1, other.o2i_1) && contentEquals_0(this.n2i_1, other.n2i_1);
  }
  toString() {
    if (this.p25()) {
      return '[]';
    }
    var buf = StringBuilder.s();
    buf.t('[');
    var inductionVariable = 0;
    var last = this.o2i_1.length - 1 | 0;
    if (inductionVariable <= last)
      $l$loop: do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (i > 0) {
          buf.t(', ');
        }
        if (this.o2i_1[i] === 2147483647) {
          buf.t('$');
          continue $l$loop;
        }
        buf.af(this.o2i_1[i]);
        if (!(this.n2i_1[i] == null)) {
          buf.t(' ');
          buf.t(toString_1(this.n2i_1[i]));
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
    this.f2j_1 = label;
    this.g2j_1 = 5;
  }
  c2i() {
    return this.g2j_1;
  }
  h2j() {
    return Companion_getInstance_26().k2j(this.f2j_1);
  }
  getLabel() {
    return this.h2j();
  }
  d2i(symbol, minVocabSymbol, maxVocabSymbol) {
    return this.f2j_1 === symbol;
  }
  toString() {
    return this.f2j_1.toString();
  }
}
class DecisionState extends ATNState {
  constructor() {
    super();
    this.o2a_1 = -1;
    this.p2a_1 = false;
  }
}
class BlockStartState extends DecisionState {
  constructor() {
    super();
    this.w2e_1 = null;
  }
}
class BasicBlockStartState extends BlockStartState {
  constructor() {
    super();
    this.v2j_1 = 3;
  }
  x20() {
    return this.v2j_1;
  }
}
class BasicState extends ATNState {
  constructor() {
    super();
    this.d2k_1 = 1;
  }
  x20() {
    return this.d2k_1;
  }
}
class BlockEndState extends ATNState {
  constructor() {
    super();
    this.r2f_1 = null;
    this.s2f_1 = 8;
  }
  x20() {
    return this.s2f_1;
  }
}
class SingletonPredictionContext extends PredictionContext {
  static k2k(parent, returnState) {
    var $this = this.t2i(!(parent == null) ? Companion_instance_17.t2r(parent, returnState) : Companion_instance_17.s2r());
    $this.x2i_1 = parent;
    $this.y2i_1 = returnState;
    // Inline function 'com.strumenta.antlrkotlin.runtime.assert' call
    if (!!($this.y2i_1 === -1)) {
      throw AssertionError.vc(null);
    }
    return $this;
  }
  z1v() {
    return 1;
  }
  z2i(index) {
    // Inline function 'com.strumenta.antlrkotlin.runtime.assert' call
    if (!(index === 0)) {
      throw AssertionError.vc(null);
    }
    return this.x2i_1;
  }
  a2j(index) {
    // Inline function 'com.strumenta.antlrkotlin.runtime.assert' call
    if (!(index === 0)) {
      throw AssertionError.vc(null);
    }
    return this.y2i_1;
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
    return this.y2i_1 === other.y2i_1 && (!(this.x2i_1 == null) && equals(this.x2i_1, other.x2i_1));
  }
  toString() {
    var tmp0_safe_receiver = this.x2i_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : toString_0(tmp0_safe_receiver);
    var up = tmp1_elvis_lhs == null ? '' : tmp1_elvis_lhs;
    var tmp;
    // Inline function 'kotlin.text.isEmpty' call
    if (charSequenceLength(up) === 0) {
      var tmp_0;
      if (this.y2i_1 === 2147483647) {
        tmp_0 = '$';
      } else {
        tmp_0 = this.y2i_1.toString();
      }
      tmp = tmp_0;
    } else {
      tmp = '' + this.y2i_1 + ' ' + up;
    }
    return tmp;
  }
}
class EmptyPredictionContext extends SingletonPredictionContext {
  static j2k() {
    EmptyPredictionContext_instance = null;
    var $this = this.k2k(null, 2147483647);
    EmptyPredictionContext_instance = $this;
    $this.i2k_1 = true;
    return $this;
  }
  p25() {
    return this.i2k_1;
  }
  z1v() {
    return 1;
  }
  z2i(index) {
    return null;
  }
  a2j(index) {
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
    this.n2k_1 = 1;
    this.o2k_1 = true;
    this.p2k_1 = outermostPrecedenceReturn;
  }
  c2i() {
    return this.n2k_1;
  }
  b2i() {
    return this.o2k_1;
  }
  d2i(symbol, minVocabSymbol, maxVocabSymbol) {
    return false;
  }
  toString() {
    return 'epsilon';
  }
}
class Companion_13 {
  constructor() {
    this.q2k_1 = 0;
  }
}
class LL1Analyzer {
  constructor(atn) {
    this.c2a_1 = atn;
  }
  d2a(s, ctx) {
    return this.r2k(s, null, ctx);
  }
  r2k(s, stopState, ctx) {
    var r = IntervalSet.w1z();
    var seeThruPreds = true;
    var tmp;
    if (!(ctx == null)) {
      tmp = Companion_instance_17.s2k(ensureNotNull(s.q20_1), ctx);
    } else {
      tmp = null;
    }
    var lookContext = tmp;
    this.t2k(s, stopState, lookContext, r, HashSet.o9(), BitSet.b2d(), seeThruPreds, true);
    return r;
  }
  t2k(s, stopState, ctx, look, lookBusy, calledRuleStack, seeThruPreds, addEOF) {
    var c = ATNConfig.a2b(s, 0, ctx);
    if (!lookBusy.z1(c)) {
      return Unit_instance;
    }
    if (s === stopState) {
      if (ctx == null) {
        look.x1z(-2);
        return Unit_instance;
      } else if (ctx.p25() && addEOF) {
        look.x1z(-1);
        return Unit_instance;
      }
    }
    if (s instanceof RuleStopState) {
      if (ctx == null) {
        look.x1z(-2);
        return Unit_instance;
      } else if (ctx.p25() && addEOF) {
        look.x1z(-1);
        return Unit_instance;
      }
      if (!(ctx === EmptyPredictionContext_getInstance())) {
        var removed = calledRuleStack.d2(s.s20_1);
        try {
          calledRuleStack.u2k(s.s20_1);
          var inductionVariable = 0;
          var last = ctx.z1v();
          if (inductionVariable < last)
            do {
              var i = inductionVariable;
              inductionVariable = inductionVariable + 1 | 0;
              var returnState = this.c2a_1.d20_1.d2(ctx.a2j(i));
              this.t2k(ensureNotNull(returnState), stopState, ctx.z2i(i), look, lookBusy, calledRuleStack, seeThruPreds, addEOF);
            }
             while (inductionVariable < last);
        }finally {
          if (removed) {
            calledRuleStack.c2d(s.s20_1);
          }
        }
        return Unit_instance;
      }
    }
    var n = s.j2f();
    var inductionVariable_0 = 0;
    if (inductionVariable_0 < n)
      $l$loop: do {
        var i_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        var t = s.q22(i_0);
        if (t instanceof RuleTransition) {
          if (calledRuleStack.d2(t.o22_1.s20_1)) {
            continue $l$loop;
          }
          var newContext = Companion_instance_20.w2k(ctx, t.b23_1.r20_1);
          try {
            calledRuleStack.c2d(t.o22_1.s20_1);
            this.t2k(t.o22_1, stopState, newContext, look, lookBusy, calledRuleStack, seeThruPreds, addEOF);
          }finally {
            calledRuleStack.u2k(t.o22_1.s20_1);
          }
        } else {
          if (t instanceof AbstractPredicateTransition) {
            if (seeThruPreds) {
              this.t2k(t.o22_1, stopState, ctx, look, lookBusy, calledRuleStack, seeThruPreds, addEOF);
            } else {
              look.x1z(0);
            }
          } else {
            if (t.b2i()) {
              this.t2k(t.o22_1, stopState, ctx, look, lookBusy, calledRuleStack, seeThruPreds, addEOF);
            } else {
              if (t instanceof WildcardTransition) {
                look.e23(Companion_getInstance_26().w1w(1, this.c2a_1.c20_1));
              } else {
                var set = t.getLabel();
                if (!(set == null)) {
                  if (t instanceof NotSetTransition) {
                    set = set.v2k(Companion_getInstance_26().w1w(1, this.c2a_1.c20_1));
                  }
                  look.e23(set);
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
  static e2l(state, alt, context) {
    var $this = this.a2b(state, alt, context, Empty_getInstance());
    init_org_antlr_v4_kotlinruntime_atn_LexerATNConfig($this);
    $this.c2l_1 = false;
    $this.d2l_1 = null;
    return $this;
  }
  static f2l(c, state) {
    var $this = this.c2b(c, state, c.u2a_1, c.w2a_1);
    init_org_antlr_v4_kotlinruntime_atn_LexerATNConfig($this);
    $this.d2l_1 = c.d2l_1;
    $this.c2l_1 = checkNonGreedyDecision($this, c, state);
    return $this;
  }
  static g2l(c, state, lexerActionExecutor) {
    var $this = this.c2b(c, state, c.u2a_1, c.w2a_1);
    init_org_antlr_v4_kotlinruntime_atn_LexerATNConfig($this);
    $this.d2l_1 = lexerActionExecutor;
    $this.c2l_1 = checkNonGreedyDecision($this, c, state);
    return $this;
  }
  static h2l(c, state, context) {
    var $this = this.c2b(c, state, context, c.w2a_1);
    init_org_antlr_v4_kotlinruntime_atn_LexerATNConfig($this);
    $this.d2l_1 = c.d2l_1;
    $this.c2l_1 = checkNonGreedyDecision($this, c, state);
    return $this;
  }
  i2l() {
    return this.c2l_1;
  }
  hashCode() {
    var hashCode = MurmurHash_instance.g2b(7);
    hashCode = MurmurHash_instance.h2b(hashCode, this.s2a_1.r20_1);
    hashCode = MurmurHash_instance.h2b(hashCode, this.t2a_1);
    hashCode = MurmurHash_instance.i2b(hashCode, this.u2a_1);
    hashCode = MurmurHash_instance.i2b(hashCode, this.w2a_1);
    hashCode = MurmurHash_instance.h2b(hashCode, this.c2l_1 ? 1 : 0);
    hashCode = MurmurHash_instance.i2b(hashCode, this.d2l_1);
    hashCode = MurmurHash_instance.j2b(hashCode, 6);
    return hashCode;
  }
  e2b(other) {
    if (this === other) {
      return true;
    }
    if (!(other instanceof LexerATNConfig)) {
      return false;
    }
    if (!(this.c2l_1 === other.c2l_1)) {
      return false;
    }
    if (!Companion_getInstance_27().j2l_1.p2c(this.d2l_1, other.d2l_1)) {
      return false;
    }
    return super.e2b(other);
  }
}
class Companion_14 {
  constructor() {
    this.k2l_1 = false;
    this.l2l_1 = false;
    this.m2l_1 = 0;
    this.n2l_1 = 127;
  }
}
class SimState {
  constructor() {
    this.o2l_1 = -1;
    this.p2l_1 = 0;
    this.q2l_1 = -1;
    this.r2l_1 = null;
  }
  b25() {
    this.o2l_1 = -1;
    this.p2l_1 = 0;
    this.q2l_1 = -1;
    this.r2l_1 = null;
  }
}
class LexerATNSimulator extends ATNSimulator {
  constructor(recog, atn, decisionToDFA, sharedContextCache) {
    super(atn, sharedContextCache);
    this.r24_1 = recog;
    this.s24_1 = decisionToDFA;
    this.t24_1 = -1;
    this.u24_1 = 1;
    this.v24_1 = 0;
    this.w24_1 = 0;
    this.x24_1 = new SimState();
  }
  f25(input, mode) {
    this.w24_1 = mode;
    var mark = input.u1v();
    try {
      this.t24_1 = input.t1v();
      this.x24_1.b25();
      var dfa = this.s24_1[mode];
      var tmp;
      if (dfa.v2l_1 == null) {
        tmp = this.y2l(input);
      } else {
        var tmp_0 = dfa.v2l_1;
        tmp = this.x2l(input, tmp_0 instanceof DFAState ? tmp_0 : THROW_CCE());
      }
      return tmp;
    }finally {
      input.v1v(mark);
    }
  }
  b25() {
    this.x24_1.b25();
    this.t24_1 = -1;
    this.u24_1 = 1;
    this.v24_1 = 0;
    this.w24_1 = 0;
  }
  y2l(input) {
    var startState = this.l20_1.k20_1.d2(this.w24_1);
    if (false) {
      System_getInstance().f1v_1.e1v('matchATN mode ' + this.w24_1 + ' start: ' + startState.toString());
    }
    var oldMode = this.w24_1;
    var s0Closure = this.z2l(input, startState);
    var suppressEdge = s0Closure.v2c_1;
    s0Closure.v2c_1 = false;
    var next = this.a2m(s0Closure);
    if (!suppressEdge) {
      this.s24_1[this.w24_1].v2l_1 = next;
    }
    var predict = this.x2l(input, next);
    if (false) {
      System_getInstance().f1v_1.e1v('DFA after matchATN: ' + this.s24_1[oldMode].b2m());
    }
    return predict;
  }
  x2l(input, ds0) {
    if (false) {
      System_getInstance().f1v_1.e1v('start state closure=' + ds0.a2h_1.toString());
    }
    if (ds0.c2h_1) {
      this.c2m(this.x24_1, input, ds0);
    }
    var t = input.b1w(1);
    var s = ds0;
    $l$loop_0: while (true) {
      if (false) {
        System_getInstance().f1v_1.e1v('execATN loop starting closure: ' + s.a2h_1.toString());
      }
      var tmp0_elvis_lhs = this.d2m(s, t);
      var target = tmp0_elvis_lhs == null ? this.e2m(input, s, t) : tmp0_elvis_lhs;
      if (target === Companion_getInstance_11().i2h_1) {
        break $l$loop_0;
      }
      if (!(t === -1)) {
        this.t25(input);
      }
      if (target.c2h_1) {
        this.c2m(this.x24_1, input, target);
        if (t === -1) {
          break $l$loop_0;
        }
      }
      t = input.b1w(1);
      s = target;
    }
    return this.f2m(this.x24_1, input, s.a2h_1, t);
  }
  d2m(s, t) {
    if (s.b2h_1 == null || t < 0 || t > 127) {
      return null;
    }
    var target = ensureNotNull(s.b2h_1)[t - 0 | 0];
    if (false && !(target == null)) {
      System_getInstance().f1v_1.e1v('reuse state ' + s.z2g_1 + ' edge to ' + target.z2g_1);
    }
    return target;
  }
  e2m(input, s, t) {
    var reach = new OrderedATNConfigSet();
    this.g2m(input, s.a2h_1, reach, t);
    if (reach.u()) {
      if (!reach.v2c_1) {
        this.h2m(s, t, Companion_getInstance_11().i2h_1);
      }
      return Companion_getInstance_11().i2h_1;
    }
    return this.i2m(s, t, reach);
  }
  f2m(prevAccept, input, reach, t) {
    if (!(prevAccept.r2l_1 == null)) {
      var lexerActionExecutor = ensureNotNull(prevAccept.r2l_1).e2h_1;
      this.j2m(input, lexerActionExecutor, this.t24_1, prevAccept.o2l_1, prevAccept.p2l_1, prevAccept.q2l_1);
      return ensureNotNull(prevAccept.r2l_1).d2h_1;
    }
    if (t === -1 && input.t1v() === this.t24_1) {
      return -1;
    }
    throw LexerNoViableAltException.n26(ensureNotNull(this.r24_1), input, this.t24_1, reach);
  }
  g2m(input, closure, reach, t) {
    var skipAlt = 0;
    var _iterator__ex2g4s = closure.w();
    $l$loop: while (_iterator__ex2g4s.x()) {
      var c = _iterator__ex2g4s.y();
      var currentAltReachedAcceptState = c.t2a_1 === skipAlt;
      var tmp;
      if (currentAltReachedAcceptState) {
        tmp = (c instanceof LexerATNConfig ? c : THROW_CCE()).i2l();
      } else {
        tmp = false;
      }
      if (tmp) {
        continue $l$loop;
      }
      if (false) {
        System_getInstance().f1v_1.e1v('testing ' + this.k2m(t) + ' at ' + c.k2b(this.r24_1, true));
      }
      var n = c.s2a_1.j2f();
      var inductionVariable = 0;
      if (inductionVariable < n)
        $l$loop_0: do {
          var ti = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var trans = c.s2a_1.q22(ti);
          var target = this.l2m(trans, t);
          if (!(target == null)) {
            var lexerActionExecutor = (c instanceof LexerATNConfig ? c : THROW_CCE()).d2l_1;
            if (!(lexerActionExecutor == null)) {
              lexerActionExecutor = lexerActionExecutor.o2m(input.t1v() - this.t24_1 | 0);
            }
            var treatEofAsEpsilon = t === -1;
            if (this.p2m(input, LexerATNConfig.g2l(c, target, lexerActionExecutor), reach, currentAltReachedAcceptState, true, treatEofAsEpsilon)) {
              skipAlt = c.t2a_1;
              break $l$loop_0;
            }
          }
        }
         while (inductionVariable < n);
    }
  }
  j2m(input, lexerActionExecutor, startIndex, index, line, charPos) {
    if (false) {
      System_getInstance().f1v_1.e1v('ACTION ' + toString_1(lexerActionExecutor));
    }
    input.w1v(index);
    this.u24_1 = line;
    this.v24_1 = charPos;
    if (!(lexerActionExecutor == null) && !(this.r24_1 == null)) {
      lexerActionExecutor.q2m(this.r24_1, input, startIndex);
    }
  }
  l2m(trans, t) {
    var tmp;
    if (trans.d2i(t, 0, 1114111)) {
      tmp = trans.o22_1;
    } else {
      tmp = null;
    }
    return tmp;
  }
  z2l(input, p) {
    var initialContext = EmptyPredictionContext_getInstance();
    var configs = new OrderedATNConfigSet();
    var inductionVariable = 0;
    var last = p.j2f();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var target = p.q22(i).o22_1;
        var c = LexerATNConfig.e2l(target, i + 1 | 0, initialContext);
        this.p2m(input, c, configs, false, false, false);
      }
       while (inductionVariable < last);
    return configs;
  }
  p2m(input, config, configs, currentAltReachedAcceptState, speculative, treatEofAsEpsilon) {
    var tempCurrentAltReachedAcceptState = currentAltReachedAcceptState;
    if (false) {
      System_getInstance().f1v_1.e1v('closure(' + config.k2b(this.r24_1, true) + ')');
    }
    var tmp = config.s2a_1;
    if (tmp instanceof RuleStopState) {
      if (false) {
        if (!(this.r24_1 == null)) {
          System_getInstance().f1v_1.e1v('closure at ' + this.r24_1.a22()[config.s2a_1.s20_1] + ' rule stop ' + config.toString());
        } else {
          System_getInstance().f1v_1.e1v('closure at rule stop ' + config.toString());
        }
      }
      if (config.u2a_1 == null || ensureNotNull(config.u2a_1).b2j()) {
        if (config.u2a_1 == null || ensureNotNull(config.u2a_1).p25()) {
          configs.d2d(config);
          return true;
        }
        configs.d2d(LexerATNConfig.h2l(config, config.s2a_1, EmptyPredictionContext_getInstance()));
        tempCurrentAltReachedAcceptState = true;
      }
      if (!(config.u2a_1 == null) && !ensureNotNull(config.u2a_1).p25()) {
        var inductionVariable = 0;
        var last = ensureNotNull(config.u2a_1).z1v();
        if (inductionVariable < last)
          do {
            var i = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            if (!(ensureNotNull(config.u2a_1).a2j(i) === 2147483647)) {
              var newContext = ensureNotNull(config.u2a_1).z2i(i);
              var returnState = this.l20_1.d20_1.d2(ensureNotNull(config.u2a_1).a2j(i));
              var c = LexerATNConfig.h2l(config, ensureNotNull(returnState), ensureNotNull(newContext));
              tempCurrentAltReachedAcceptState = this.p2m(input, c, configs, tempCurrentAltReachedAcceptState, speculative, treatEofAsEpsilon);
            }
          }
           while (inductionVariable < last);
      }
      return tempCurrentAltReachedAcceptState;
    }
    if (!config.s2a_1.v2g()) {
      if (!tempCurrentAltReachedAcceptState || !config.i2l()) {
        configs.d2d(config);
      }
    }
    var p = config.s2a_1;
    var inductionVariable_0 = 0;
    var last_0 = p.j2f();
    if (inductionVariable_0 < last_0)
      do {
        var i_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        var t = p.q22(i_0);
        var c_0 = this.r2m(input, config, t, configs, speculative, treatEofAsEpsilon);
        if (!(c_0 == null)) {
          tempCurrentAltReachedAcceptState = this.p2m(input, c_0, configs, tempCurrentAltReachedAcceptState, speculative, treatEofAsEpsilon);
        }
      }
       while (inductionVariable_0 < last_0);
    return tempCurrentAltReachedAcceptState;
  }
  r2m(input, config, t, configs, speculative, treatEofAsEpsilon) {
    var c = null;
    switch (t.c2i()) {
      case 3:
        var ruleTransition = t instanceof RuleTransition ? t : THROW_CCE();
        var newContext = Companion_instance_20.w2k(config.u2a_1, ruleTransition.b23_1.r20_1);
        c = LexerATNConfig.h2l(config, t.o22_1, newContext);
        break;
      case 10:
        throw UnsupportedOperationException.l9('Precedence predicates are not supported in lexers.');
      case 4:
        var pt = t instanceof PredicateTransition ? t : THROW_CCE();
        if (false) {
          System_getInstance().f1v_1.e1v('EVAL rule ' + pt.u2m_1 + ':' + pt.v2m_1);
        }

        configs.v2c_1 = true;
        if (this.z2m(input, pt.u2m_1, pt.v2m_1, speculative)) {
          c = LexerATNConfig.f2l(config, t.o22_1);
        }

        break;
      case 6:
        if (config.u2a_1 == null || ensureNotNull(config.u2a_1).b2j()) {
          var tmp = Companion_instance_15;
          var tmp_0 = ensureNotNull(this.l20_1.j20_1);
          var lexerActionExecutor = tmp.a2n(config.d2l_1, tmp_0[(t instanceof ActionTransition ? t : THROW_CCE()).h2i_1]);
          c = LexerATNConfig.g2l(config, t.o22_1, lexerActionExecutor);
        } else {
          c = LexerATNConfig.f2l(config, t.o22_1);
        }

        break;
      case 1:
        c = LexerATNConfig.f2l(config, t.o22_1);
        break;
      case 5:
      case 2:
      case 7:
        if (treatEofAsEpsilon) {
          if (t.d2i(-1, 0, 1114111)) {
            c = LexerATNConfig.f2l(config, t.o22_1);
          }
        }

        break;
    }
    return c;
  }
  z2m(input, ruleIndex, predIndex, speculative) {
    if (this.r24_1 == null) {
      return true;
    }
    if (!speculative) {
      return this.r24_1.z25(null, ruleIndex, predIndex);
    }
    var savedCharPositionInLine = this.v24_1;
    var savedLine = this.u24_1;
    var index = input.t1v();
    var marker = input.u1v();
    try {
      this.t25(input);
      return this.r24_1.z25(null, ruleIndex, predIndex);
    }finally {
      this.v24_1 = savedCharPositionInLine;
      this.u24_1 = savedLine;
      input.w1v(index);
      input.v1v(marker);
    }
  }
  c2m(settings, input, dfaState) {
    settings.o2l_1 = input.t1v();
    settings.p2l_1 = this.u24_1;
    settings.q2l_1 = this.v24_1;
    settings.r2l_1 = dfaState;
  }
  i2m(from, t, q) {
    var suppressEdge = q.v2c_1;
    q.v2c_1 = false;
    var to = this.a2m(q);
    if (suppressEdge) {
      return to;
    }
    this.h2m(from, t, to);
    return to;
  }
  h2m(p, t, q) {
    if (t < 0 || t > 127) {
      return Unit_instance;
    }
    if (false) {
      System_getInstance().f1v_1.e1v('EDGE ' + p.toString() + ' -> ' + q.toString() + ' upon ' + toString(numberToChar(t)));
    }
    // Inline function 'com.strumenta.antlrkotlin.runtime.synchronized' call
    if (p.b2h_1 == null) {
      var tmp = p;
      // Inline function 'kotlin.arrayOfNulls' call
      tmp.b2h_1 = Array(128);
    }
    ensureNotNull(p.b2h_1)[t - 0 | 0] = q;
  }
  a2m(configs) {
    // Inline function 'com.strumenta.antlrkotlin.runtime.assert' call
    if (!!configs.v2c_1) {
      throw AssertionError.vc(null);
    }
    var proposed = DFAState.h2h(configs);
    var firstConfigWithRuleStopState = null;
    var _iterator__ex2g4s = configs.w();
    $l$loop: while (_iterator__ex2g4s.x()) {
      var c = _iterator__ex2g4s.y();
      var tmp = c.s2a_1;
      if (tmp instanceof RuleStopState) {
        firstConfigWithRuleStopState = c;
        break $l$loop;
      }
    }
    if (!(firstConfigWithRuleStopState == null)) {
      proposed.c2h_1 = true;
      var tmp_0 = proposed;
      tmp_0.e2h_1 = (firstConfigWithRuleStopState instanceof LexerATNConfig ? firstConfigWithRuleStopState : THROW_CCE()).d2l_1;
      proposed.d2h_1 = ensureNotNull(this.l20_1.i20_1)[firstConfigWithRuleStopState.s2a_1.s20_1];
    }
    var dfa = this.s24_1[this.w24_1];
    // Inline function 'com.strumenta.antlrkotlin.runtime.synchronized' call
    dfa.u2l_1;
    var existing = dfa.u2l_1.r3(proposed);
    if (!(existing == null)) {
      return existing;
    }
    proposed.z2g_1 = dfa.u2l_1.b2();
    configs.e2a(true);
    proposed.a2h_1 = configs;
    // Inline function 'kotlin.collections.set' call
    dfa.u2l_1.l3(proposed, proposed);
    return proposed;
  }
  t25(input) {
    var curChar = input.b1w(1);
    if (numberToChar(curChar) === _Char___init__impl__6a9atx(10)) {
      this.u24_1 = this.u24_1 + 1 | 0;
      this.v24_1 = 0;
    } else {
      this.v24_1 = this.v24_1 + 1 | 0;
    }
    input.a1w();
  }
  k2m(t) {
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
  a2n(lexerActionExecutor, lexerAction) {
    if (lexerActionExecutor == null) {
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp$ret$0 = [lexerAction];
      return new LexerActionExecutor(tmp$ret$0);
    }
    var lexerActions = copyOf(lexerActionExecutor.m2m_1, lexerActionExecutor.m2m_1.length + 1 | 0);
    lexerActions[get_lastIndex(lexerActions)] = lexerAction;
    return new LexerActionExecutor(isArray(lexerActions) ? lexerActions : THROW_CCE());
  }
}
class LexerActionExecutor {
  constructor(lexerActions) {
    this.m2m_1 = lexerActions;
    var hash = MurmurHash_instance.b2n();
    var indexedObject = this.m2m_1;
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var lexerAction = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      hash = MurmurHash_instance.i2b(hash, lexerAction);
    }
    this.n2m_1 = MurmurHash_instance.j2b(hash, this.m2m_1.length);
  }
  o2m(offset) {
    var updatedLexerActions = null;
    var inductionVariable = 0;
    var last = this.m2m_1.length - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp;
        if (this.m2m_1[i].c2n()) {
          var tmp_0 = this.m2m_1[i];
          tmp = !(tmp_0 instanceof LexerIndexedCustomAction);
        } else {
          tmp = false;
        }
        if (tmp) {
          if (updatedLexerActions == null) {
            // Inline function 'kotlin.collections.copyOf' call
            // Inline function 'kotlin.js.asDynamic' call
            updatedLexerActions = this.m2m_1.slice();
          }
          updatedLexerActions[i] = new LexerIndexedCustomAction(offset, this.m2m_1[i]);
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
  q2m(lexer, input, startIndex) {
    var requiresSeek = false;
    var stopIndex = input.t1v();
    try {
      var indexedObject = this.m2m_1;
      var inductionVariable = 0;
      var last = indexedObject.length;
      while (inductionVariable < last) {
        var lexerAction = indexedObject[inductionVariable];
        inductionVariable = inductionVariable + 1 | 0;
        var mutableLexerAction = lexerAction;
        if (mutableLexerAction instanceof LexerIndexedCustomAction) {
          var offset = mutableLexerAction.d2n_1;
          input.w1v(startIndex + offset | 0);
          mutableLexerAction = mutableLexerAction.e2n_1;
          requiresSeek = !((startIndex + offset | 0) === stopIndex);
        } else {
          if (mutableLexerAction.c2n()) {
            input.w1v(stopIndex);
            requiresSeek = false;
          }
        }
        mutableLexerAction.g2n(lexer);
      }
    }finally {
      if (requiresSeek) {
        input.w1v(stopIndex);
      }
    }
  }
  hashCode() {
    return this.n2m_1;
  }
  equals(other) {
    if (other === this) {
      return true;
    }
    if (!(other instanceof LexerActionExecutor)) {
      return false;
    }
    return this.n2m_1 === other.n2m_1 && contentEquals_0(this.m2m_1, other.m2m_1);
  }
}
class LexerActionType extends Enum {}
class LexerChannelAction {
  constructor(channel) {
    this.h2n_1 = channel;
    this.i2n_1 = LexerActionType_CHANNEL_getInstance();
    this.j2n_1 = false;
  }
  c2n() {
    return this.j2n_1;
  }
  g2n(lexer) {
    lexer.d24_1 = this.h2n_1;
  }
  hashCode() {
    var hash = MurmurHash_instance.b2n();
    hash = MurmurHash_instance.h2b(hash, this.i2n_1.d1_1);
    hash = MurmurHash_instance.h2b(hash, this.h2n_1);
    return MurmurHash_instance.j2b(hash, 2);
  }
  equals(other) {
    if (other === this) {
      return true;
    }
    if (!(other instanceof LexerChannelAction)) {
      return false;
    }
    return this.h2n_1 === other.h2n_1;
  }
  toString() {
    return 'channel(' + this.h2n_1 + ')';
  }
}
class LexerCustomAction {
  constructor(ruleIndex, actionIndex) {
    this.k2n_1 = ruleIndex;
    this.l2n_1 = actionIndex;
    this.m2n_1 = LexerActionType_CUSTOM_getInstance();
    this.n2n_1 = true;
  }
  o2n() {
    return this.m2n_1;
  }
  c2n() {
    return this.n2n_1;
  }
  g2n(lexer) {
    return lexer.b26(null, this.k2n_1, this.l2n_1);
  }
  hashCode() {
    var hash = MurmurHash_instance.b2n();
    hash = MurmurHash_instance.h2b(hash, this.o2n().d1_1);
    hash = MurmurHash_instance.h2b(hash, this.k2n_1);
    hash = MurmurHash_instance.h2b(hash, this.l2n_1);
    return MurmurHash_instance.j2b(hash, 3);
  }
  equals(other) {
    if (other === this) {
      return true;
    }
    if (!(other instanceof LexerCustomAction)) {
      return false;
    }
    return this.k2n_1 === other.k2n_1 && this.l2n_1 === other.l2n_1;
  }
}
class LexerIndexedCustomAction {
  constructor(offset, action) {
    this.d2n_1 = offset;
    this.e2n_1 = action;
    this.f2n_1 = true;
  }
  c2n() {
    return this.f2n_1;
  }
  g2n(lexer) {
    return this.e2n_1.g2n(lexer);
  }
  hashCode() {
    var hash = MurmurHash_instance.b2n();
    hash = MurmurHash_instance.h2b(hash, this.d2n_1);
    hash = MurmurHash_instance.i2b(hash, this.e2n_1);
    return MurmurHash_instance.j2b(hash, 2);
  }
  equals(other) {
    if (other === this) {
      return true;
    }
    if (!(other instanceof LexerIndexedCustomAction)) {
      return false;
    }
    return this.d2n_1 === other.d2n_1 && equals(this.e2n_1, other.e2n_1);
  }
}
class LexerModeAction {
  constructor(mode) {
    this.p2n_1 = mode;
    this.q2n_1 = LexerActionType_MODE_getInstance();
    this.r2n_1 = false;
  }
  c2n() {
    return this.r2n_1;
  }
  g2n(lexer) {
    return lexer.l25(this.p2n_1);
  }
  hashCode() {
    var hash = MurmurHash_instance.b2n();
    hash = MurmurHash_instance.h2b(hash, this.q2n_1.d1_1);
    hash = MurmurHash_instance.h2b(hash, this.p2n_1);
    return MurmurHash_instance.j2b(hash, 2);
  }
  equals(other) {
    if (other === this) {
      return true;
    }
    if (!(other instanceof LexerModeAction)) {
      return false;
    }
    return this.p2n_1 === other.p2n_1;
  }
  toString() {
    return 'mode(' + this.p2n_1 + ')';
  }
}
class LexerMoreAction {
  constructor() {
    LexerMoreAction_instance = this;
    this.s2n_1 = LexerActionType_MORE_getInstance();
    this.t2n_1 = false;
  }
  c2n() {
    return this.t2n_1;
  }
  g2n(lexer) {
    return lexer.k25();
  }
  hashCode() {
    var hash = MurmurHash_instance.b2n();
    hash = MurmurHash_instance.h2b(hash, this.s2n_1.d1_1);
    return MurmurHash_instance.j2b(hash, 1);
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
    this.u2n_1 = LexerActionType_POP_MODE_getInstance();
    this.v2n_1 = false;
  }
  c2n() {
    return this.v2n_1;
  }
  g2n(lexer) {
    lexer.o25();
  }
  hashCode() {
    var hash = MurmurHash_instance.b2n();
    hash = MurmurHash_instance.h2b(hash, this.u2n_1.d1_1);
    return MurmurHash_instance.j2b(hash, 1);
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
    this.w2n_1 = mode;
    this.x2n_1 = LexerActionType_PUSH_MODE_getInstance();
    this.y2n_1 = false;
  }
  c2n() {
    return this.y2n_1;
  }
  g2n(lexer) {
    return lexer.m25(this.w2n_1);
  }
  hashCode() {
    var hash = MurmurHash_instance.b2n();
    hash = MurmurHash_instance.h2b(hash, this.x2n_1.d1_1);
    hash = MurmurHash_instance.h2b(hash, this.w2n_1);
    return MurmurHash_instance.j2b(hash, 2);
  }
  equals(other) {
    if (other === this) {
      return true;
    }
    if (!(other instanceof LexerPushModeAction)) {
      return false;
    }
    return this.w2n_1 === other.w2n_1;
  }
  toString() {
    return 'pushMode(' + this.w2n_1 + ')';
  }
}
class LexerSkipAction {
  constructor() {
    LexerSkipAction_instance = this;
    this.z2n_1 = LexerActionType_SKIP_getInstance();
    this.a2o_1 = false;
  }
  c2n() {
    return this.a2o_1;
  }
  g2n(lexer) {
    return lexer.j25();
  }
  hashCode() {
    var hash = MurmurHash_instance.b2n();
    hash = MurmurHash_instance.h2b(hash, this.z2n_1.d1_1);
    return MurmurHash_instance.j2b(hash, 1);
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
    this.b2o_1 = type;
    this.c2o_1 = LexerActionType_TYPE_getInstance();
    this.d2o_1 = false;
  }
  c2n() {
    return this.d2o_1;
  }
  g2n(lexer) {
    lexer.e24_1 = this.b2o_1;
  }
  hashCode() {
    var hash = MurmurHash_instance.b2n();
    hash = MurmurHash_instance.h2b(hash, this.c2o_1.d1_1);
    hash = MurmurHash_instance.h2b(hash, this.b2o_1);
    return MurmurHash_instance.j2b(hash, 2);
  }
  equals(other) {
    if (other === this) {
      return true;
    }
    if (!(other instanceof LexerTypeAction)) {
      return false;
    }
    return this.b2o_1 === other.b2o_1;
  }
  toString() {
    return 'type(' + this.b2o_1 + ')';
  }
}
class LoopEndState extends ATNState {
  constructor() {
    super();
    this.l2e_1 = null;
    this.m2e_1 = 12;
  }
  x20() {
    return this.m2e_1;
  }
}
class SetTransition extends Transition {
  constructor(target, set) {
    super(target);
    var tmp = this;
    tmp.l2o_1 = set == null ? Companion_getInstance_26().k2j(0) : set;
    this.m2o_1 = 7;
  }
  c2i() {
    return this.m2o_1;
  }
  h2j() {
    return this.l2o_1;
  }
  getLabel() {
    return this.h2j();
  }
  d2i(symbol, minVocabSymbol, maxVocabSymbol) {
    return this.l2o_1.vk(symbol);
  }
  toString() {
    return this.l2o_1.toString();
  }
}
class NotSetTransition extends SetTransition {
  constructor(target, set) {
    super(target, set);
    this.i2o_1 = 8;
  }
  c2i() {
    return this.i2o_1;
  }
  d2i(symbol, minVocabSymbol, maxVocabSymbol) {
    return (minVocabSymbol <= symbol ? symbol <= maxVocabSymbol : false) && !super.d2i(symbol, minVocabSymbol, maxVocabSymbol);
  }
  toString() {
    return '~' + super.toString();
  }
}
class LexerConfigHashSet extends AbstractConfigHashSet {
  constructor() {
    super(Companion_getInstance_27().j2l_1);
  }
}
class OrderedATNConfigSet extends ATNConfigSet {
  constructor() {
    super();
    this.r2c_1 = new LexerConfigHashSet();
  }
}
class Companion_16 {
  constructor() {
    Companion_instance_16 = this;
    this.n2o_1 = false;
    this.o2o_1 = false;
    this.p2o_1 = false;
    this.q2o_1 = false;
    this.r2o_1 = toBoolean(getSafeEnv(this, 'TURN_OFF_LR_LOOP_ENTRY_BRANCH_OPT', 'false'));
  }
  s2o(configs) {
    var alt = 0;
    var _iterator__ex2g4s = configs.w();
    while (_iterator__ex2g4s.x()) {
      var c = _iterator__ex2g4s.y();
      if (alt === 0) {
        alt = c.t2a_1;
      } else if (!(c.t2a_1 === alt)) {
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
    this.v26_1 = parser;
    this.w26_1 = decisionToDFA;
    this.x26_1 = PredictionMode_LL_getInstance();
    this.y26_1 = null;
    this.z26_1 = null;
    this.a27_1 = 0;
    this.b27_1 = null;
    this.c27_1 = null;
  }
  b25() {
  }
  t2o(input, decision, outerContext) {
    var tempOuterContext = outerContext;
    if (Companion_getInstance_16().n2o_1 || Companion_getInstance_16().o2o_1) {
      System_getInstance().f1v_1.e1v('adaptivePredict decision ' + decision + (' exec LA(1)==' + this.u2o(input)) + (' line ' + ensureNotNull(input.g1w(1)).e1e() + ':' + ensureNotNull(input.g1w(1)).k1x()));
    }
    this.z26_1 = input;
    this.a27_1 = input.t1v();
    this.b27_1 = tempOuterContext;
    var dfa = this.w26_1[decision];
    this.c27_1 = dfa;
    var m = input.u1v();
    var index = this.a27_1;
    try {
      var tmp;
      if (dfa.w2l_1) {
        tmp = dfa.v2o(this.v26_1.r26());
      } else {
        tmp = dfa.v2l_1;
      }
      var s0 = tmp;
      if (s0 == null) {
        if (tempOuterContext == null) {
          tempOuterContext = Companion_getInstance_3().i28_1;
        }
        var fullCtx = false;
        var s0Closure = this.w2o(dfa.s2l_1, Companion_getInstance_3().i28_1, fullCtx);
        if (dfa.w2l_1) {
          ensureNotNull(dfa.v2l_1).a2h_1 = s0Closure;
          s0Closure = this.y2o(s0Closure);
          s0 = this.x2o(dfa, DFAState.h2h(s0Closure));
          dfa.z2o(this.v26_1.r26(), s0);
        } else {
          s0 = this.x2o(dfa, DFAState.h2h(s0Closure));
          dfa.v2l_1 = s0;
        }
      }
      var alt = this.a2p(dfa, s0, input, index, ensureNotNull(tempOuterContext));
      if (Companion_getInstance_16().n2o_1) {
        System_getInstance().f1v_1.e1v('DFA after predictATN: ' + dfa.z21(this.v26_1.v1x()));
      }
      return alt;
    }finally {
      this.y26_1 = null;
      this.c27_1 = null;
      input.w1v(index);
      input.v1v(m);
    }
  }
  a2p(dfa, s0, input, startIndex, outerContext) {
    if (Companion_getInstance_16().n2o_1 || Companion_getInstance_16().o2o_1) {
      System_getInstance().f1v_1.e1v('execATN decision ' + dfa.t2l_1 + (', DFA state ' + s0.toString()) + (', LA(1)==' + this.u2o(input)) + (', line ' + ensureNotNull(input.g1w(1)).e1e() + ':' + ensureNotNull(input.g1w(1)).k1x()));
    }
    var previousD = s0;
    var t = input.b1w(1);
    while (true) {
      var tmp0_elvis_lhs = this.d2m(previousD, t);
      var D = tmp0_elvis_lhs == null ? this.b2p(dfa, previousD, t) : tmp0_elvis_lhs;
      if (D === Companion_getInstance_11().i2h_1) {
        var e = this.c2p(input, outerContext, previousD.a2h_1, startIndex);
        input.w1v(startIndex);
        var alt = this.d2p(previousD.a2h_1, outerContext);
        if (!(alt === 0)) {
          return alt;
        }
        throw e;
      }
      if (ensureNotNull(D).f2h_1 && !this.x26_1.equals(PredictionMode_SLL_getInstance())) {
        var conflictingAlts = D.a2h_1.u2c_1;
        if (!(D.g2h_1 == null)) {
          if (Companion_getInstance_16().n2o_1) {
            System_getInstance().f1v_1.e1v('DFA state has preds in DFA sim LL failover');
          }
          var conflictIndex = input.t1v();
          if (!(conflictIndex === startIndex)) {
            input.w1v(startIndex);
          }
          conflictingAlts = this.e2p(ensureNotNull(D.g2h_1), outerContext, true);
          if (conflictingAlts.g2p() === 1) {
            if (Companion_getInstance_16().n2o_1) {
              System_getInstance().f1v_1.e1v('Full LL avoided');
            }
            return conflictingAlts.f2p(0);
          }
          if (!(conflictIndex === startIndex)) {
            input.w1v(conflictIndex);
          }
        }
        if (Companion_getInstance_16().p2o_1) {
          System_getInstance().f1v_1.e1v('ctx sensitive state ' + outerContext.toString() + ' in ' + toString_1(D));
        }
        var fullCtx = true;
        var s0Closure = this.w2o(dfa.s2l_1, outerContext, fullCtx);
        this.h2p(dfa, ensureNotNull(conflictingAlts), D.a2h_1, startIndex, input.t1v());
        return this.i2p(dfa, D, s0Closure, input, startIndex, outerContext);
      }
      if (D.c2h_1) {
        if (D.g2h_1 == null) {
          return D.d2h_1;
        }
        var stopIndex = input.t1v();
        input.w1v(startIndex);
        var alts = this.e2p(ensureNotNull(D.g2h_1), outerContext, true);
        switch (alts.g2p()) {
          case 0:
            throw this.c2p(input, outerContext, D.a2h_1, startIndex);
          case 1:
            return alts.f2p(0);
          default:
            this.j2p(dfa, D, startIndex, stopIndex, false, alts, D.a2h_1);
            return alts.f2p(0);
        }
      }
      previousD = D;
      if (!(t === -1)) {
        input.a1w();
        t = input.b1w(1);
      }
    }
  }
  d2m(previousD, t) {
    var edges = previousD.b2h_1;
    if (edges == null || (t + 1 | 0) < 0 || (t + 1 | 0) >= edges.length) {
      return null;
    }
    return edges[t + 1 | 0];
  }
  b2p(dfa, previousD, t) {
    var reach = this.k2p(previousD.a2h_1, t, false);
    if (reach == null) {
      this.l2p(dfa, previousD, t, Companion_getInstance_11().i2h_1);
      return Companion_getInstance_11().i2h_1;
    }
    var D = DFAState.h2h(reach);
    var predictedAlt = Companion_getInstance_16().s2o(reach);
    if (Companion_getInstance_16().n2o_1) {
      var altSubSets = Companion_instance_18.m2p(reach);
      System_getInstance().f1v_1.e1v('SLL altSubSets=' + toString_0(altSubSets) + (', configs=' + toString_1(reach)) + (', predict=' + predictedAlt) + (', allSubsetsConflict=' + Companion_instance_18.n2p(altSubSets)) + (', conflictingAlts=' + this.o2p(reach).toString()));
    }
    if (!(predictedAlt === 0)) {
      D.c2h_1 = true;
      D.a2h_1.t2c_1 = predictedAlt;
      D.d2h_1 = predictedAlt;
    } else if (Companion_instance_18.p2p(this.x26_1, reach)) {
      D.a2h_1.u2c_1 = this.o2p(reach);
      D.f2h_1 = true;
      D.c2h_1 = true;
      D.d2h_1 = ensureNotNull(D.a2h_1.u2c_1).f2p(0);
    }
    if (D.c2h_1 && D.a2h_1.v2c_1) {
      this.q2p(D, ensureNotNull(this.l20_1.q2a(dfa.t2l_1)));
      if (!(D.g2h_1 == null)) {
        D.d2h_1 = 0;
      }
    }
    return this.l2p(dfa, previousD, t, D);
  }
  q2p(dfaState, decisionState) {
    var nAlts = decisionState.j2f();
    var altsToCollectPredsFrom = this.r2p(dfaState.a2h_1);
    var altToPred = this.s2p(altsToCollectPredsFrom, dfaState.a2h_1, nAlts);
    if (!(altToPred == null)) {
      dfaState.g2h_1 = this.t2p(altsToCollectPredsFrom, altToPred);
      dfaState.d2h_1 = 0;
    } else {
      dfaState.d2h_1 = altsToCollectPredsFrom.f2p(0);
    }
  }
  i2p(dfa, D, s0, input, startIndex, outerContext) {
    if (Companion_getInstance_16().n2o_1 || Companion_getInstance_16().o2o_1) {
      System_getInstance().f1v_1.e1v('execATNWithFullContext ' + s0.toString());
    }
    var fullCtx = true;
    var foundExactAmbig = false;
    var reach;
    var previous = s0;
    input.w1v(startIndex);
    var t = input.b1w(1);
    var predictedAlt;
    $l$loop_1: while (true) {
      reach = this.k2p(previous, t, fullCtx);
      if (reach == null) {
        var e = this.c2p(input, outerContext, previous, startIndex);
        input.w1v(startIndex);
        var alt = this.d2p(previous, outerContext);
        if (!(alt === 0)) {
          return alt;
        }
        throw e;
      }
      var altSubSets = Companion_instance_18.m2p(reach);
      if (Companion_getInstance_16().n2o_1) {
        System_getInstance().f1v_1.e1v('LL altSubSets=' + toString_0(altSubSets) + (', predict=' + Companion_instance_18.u2p(altSubSets)) + (', resolvesToJustOneViableAlt=' + Companion_instance_18.v2p(altSubSets)));
      }
      reach.t2c_1 = Companion_getInstance_16().s2o(reach);
      if (!(reach.t2c_1 === 0)) {
        predictedAlt = reach.t2c_1;
        break $l$loop_1;
      }
      if (!this.x26_1.equals(PredictionMode_LL_EXACT_AMBIG_DETECTION_getInstance())) {
        predictedAlt = Companion_instance_18.v2p(altSubSets);
        if (!(predictedAlt === 0)) {
          break $l$loop_1;
        }
      } else {
        if (Companion_instance_18.n2p(altSubSets) && Companion_instance_18.x2p(altSubSets)) {
          foundExactAmbig = true;
          predictedAlt = Companion_instance_18.w2p(altSubSets);
          break $l$loop_1;
        }
      }
      previous = reach;
      if (!(t === -1)) {
        input.a1w();
        t = input.b1w(1);
      }
    }
    if (!(ensureNotNull(reach).t2c_1 === 0)) {
      this.y2p(dfa, predictedAlt, reach, startIndex, input.t1v());
      return predictedAlt;
    }
    this.j2p(dfa, D, startIndex, input.t1v(), foundExactAmbig, reach.z2c(), reach);
    return predictedAlt;
  }
  k2p(closure, t, fullCtx) {
    if (Companion_getInstance_16().n2o_1) {
      System_getInstance().f1v_1.e1v('in computeReachSet, starting closure: ' + closure.toString());
    }
    if (this.y26_1 == null) {
      this.y26_1 = new DoubleKeyMap();
    }
    var intermediate = new ATNConfigSet(fullCtx);
    var skippedStopStates = null;
    var _iterator__ex2g4s = closure.w();
    $l$loop: while (_iterator__ex2g4s.x()) {
      var c = _iterator__ex2g4s.y();
      if (Companion_getInstance_16().n2o_1) {
        System_getInstance().f1v_1.e1v('testing ' + this.k2m(t) + ' at ' + c.toString());
      }
      var tmp = c.s2a_1;
      if (tmp instanceof RuleStopState) {
        // Inline function 'com.strumenta.antlrkotlin.runtime.assert' call
        if (!ensureNotNull(c.u2a_1).p25()) {
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
      var n = c.s2a_1.j2f();
      var inductionVariable = 0;
      if (inductionVariable < n)
        do {
          var ti = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var trans = c.s2a_1.q22(ti);
          var target = this.l2m(trans, t);
          if (!(target == null)) {
            intermediate.e2d(ATNConfig.c2b(c, target), this.y26_1);
          }
        }
         while (inductionVariable < n);
    }
    var reach = null;
    if (skippedStopStates == null && !(t === -1)) {
      if (intermediate.b2() === 1) {
        reach = intermediate;
      } else if (!(Companion_getInstance_16().s2o(intermediate) === 0)) {
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
        this.z2p(c_0, reach, closureBusy, false, fullCtx, treatEofAsEpsilon);
      }
    }
    if (t === -1) {
      reach = this.a2q(reach, reach === intermediate);
    }
    if (!(skippedStopStates == null) && (!fullCtx || !Companion_instance_18.b2q(reach))) {
      // Inline function 'kotlin.collections.isNotEmpty' call
      // Inline function 'com.strumenta.antlrkotlin.runtime.assert' call
      if (!!skippedStopStates.u()) {
        throw AssertionError.vc(null);
      }
      var _iterator__ex2g4s_1 = skippedStopStates.w();
      while (_iterator__ex2g4s_1.x()) {
        var c_1 = _iterator__ex2g4s_1.y();
        reach.e2d(c_1, this.y26_1);
      }
    }
    if (Companion_getInstance_16().o2o_1) {
      System_getInstance().f1v_1.e1v('computeReachSet ' + closure.toString() + ' -> ' + toString_1(reach));
    }
    var tmp_0;
    if (reach.u()) {
      tmp_0 = null;
    } else {
      tmp_0 = reach;
    }
    return tmp_0;
  }
  a2q(configs, lookToEndOfRule) {
    if (Companion_instance_18.c2q(configs)) {
      return configs;
    }
    var result = new ATNConfigSet(configs.q2c_1);
    var _iterator__ex2g4s = configs.w();
    $l$loop: while (_iterator__ex2g4s.x()) {
      var config = _iterator__ex2g4s.y();
      var tmp = config.s2a_1;
      if (tmp instanceof RuleStopState) {
        result.e2d(config, this.y26_1);
        continue $l$loop;
      }
      if (lookToEndOfRule && config.s2a_1.v2g()) {
        var nextTokens = this.l20_1.p20(config.s2a_1);
        if (nextTokens.vk(-2)) {
          var endOfRuleState = ensureNotNull(this.l20_1.g20_1)[config.s2a_1.s20_1];
          result.e2d(ATNConfig.c2b(config, ensureNotNull(endOfRuleState)), this.y26_1);
        }
      }
    }
    return result;
  }
  w2o(p, ctx, fullCtx) {
    var initialContext = Companion_instance_17.s2k(this.l20_1, ctx);
    var configs = new ATNConfigSet(fullCtx);
    if (Companion_getInstance_16().o2o_1) {
      System_getInstance().f1v_1.e1v('computeStartState from ATN state ' + p.toString() + ' initialContext=' + initialContext.c2j(this.v26_1));
    }
    var inductionVariable = 0;
    var last = p.j2f();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var target = p.q22(i).o22_1;
        var c = ATNConfig.a2b(target, i + 1 | 0, initialContext);
        var closureBusy = HashSet.o9();
        this.z2p(c, configs, closureBusy, true, fullCtx, false);
      }
       while (inductionVariable < last);
    return configs;
  }
  y2o(configs) {
    var statesFromAlt1 = HashMap.y7();
    var configSet = new ATNConfigSet(configs.q2c_1);
    var _iterator__ex2g4s = configs.w();
    $l$loop_0: while (_iterator__ex2g4s.x()) {
      var config = _iterator__ex2g4s.y();
      if (!(config.t2a_1 === 1)) {
        continue $l$loop_0;
      }
      var tmp0_elvis_lhs = config.w2a_1.d2q(this.v26_1, ensureNotNull(this.b27_1));
      var tmp;
      if (tmp0_elvis_lhs == null) {
        continue $l$loop_0;
      } else {
        tmp = tmp0_elvis_lhs;
      }
      var updatedContext = tmp;
      var tmp2 = config.s2a_1.r20_1;
      // Inline function 'kotlin.collections.set' call
      var value = ensureNotNull(config.u2a_1);
      statesFromAlt1.l3(tmp2, value);
      if (!(updatedContext === config.w2a_1)) {
        configSet.e2d(ATNConfig.d2b(config, updatedContext), this.y26_1);
      } else {
        configSet.e2d(config, this.y26_1);
      }
    }
    var _iterator__ex2g4s_0 = configs.w();
    $l$loop_2: while (_iterator__ex2g4s_0.x()) {
      var config_0 = _iterator__ex2g4s_0.y();
      if (config_0.t2a_1 === 1) {
        continue $l$loop_2;
      }
      if (!config_0.z2a()) {
        var context = statesFromAlt1.r3(config_0.s2a_1.r20_1);
        if (!(context == null) && equals(context, config_0.u2a_1)) {
          continue $l$loop_2;
        }
      }
      configSet.e2d(config_0, this.y26_1);
    }
    return configSet;
  }
  l2m(trans, ttype) {
    var tmp;
    if (trans.d2i(ttype, 0, this.l20_1.c20_1)) {
      tmp = trans.o22_1;
    } else {
      tmp = null;
    }
    return tmp;
  }
  s2p(ambigAlts, configs, nAlts) {
    // Inline function 'kotlin.arrayOfNulls' call
    var size = nAlts + 1 | 0;
    var altToPred = Array(size);
    var _iterator__ex2g4s = configs.w();
    while (_iterator__ex2g4s.x()) {
      var c = _iterator__ex2g4s.y();
      if (ambigAlts.d2(c.t2a_1)) {
        altToPred[c.t2a_1] = Companion_instance_19.e2q(altToPred[c.t2a_1], c.w2a_1);
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
      if (Companion_getInstance_16().n2o_1) {
        System_getInstance().f1v_1.e1v('getPredsForAmbigAlts result null');
      }
      return null;
    }
    if (Companion_getInstance_16().n2o_1) {
      System_getInstance().f1v_1.e1v('getPredsForAmbigAlts result ' + joinToString(altToPred));
    }
    return altToPred;
  }
  t2p(ambigAlts, altToPred) {
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
  d2p(configs, outerContext) {
    var sets = this.f2q(configs, outerContext);
    var semValidConfigs = sets.first;
    var semInvalidConfigs = sets.second;
    var alt = this.g2q(semValidConfigs);
    if (!(alt === 0)) {
      return alt;
    }
    if (semInvalidConfigs.b2() > 0) {
      alt = this.g2q(semInvalidConfigs);
      if (!(alt === 0)) {
        return alt;
      }
    }
    return 0;
  }
  g2q(configs) {
    var alts = IntervalSet.w1z();
    var _iterator__ex2g4s = configs.w();
    while (_iterator__ex2g4s.x()) {
      var c = _iterator__ex2g4s.y();
      var tmp;
      if (c.x2a() > 0) {
        tmp = true;
      } else {
        var tmp_0;
        var tmp_1 = c.s2a_1;
        if (tmp_1 instanceof RuleStopState) {
          tmp_0 = ensureNotNull(c.u2a_1).b2j();
        } else {
          tmp_0 = false;
        }
        tmp = tmp_0;
      }
      if (tmp) {
        alts.x1z(c.t2a_1);
      }
    }
    if (alts.z1v() === 0) {
      return 0;
    }
    return alts.s22();
  }
  f2q(configs, outerContext) {
    var succeeded = new ATNConfigSet(configs.q2c_1);
    var failed = new ATNConfigSet(configs.q2c_1);
    var _iterator__ex2g4s = configs.w();
    while (_iterator__ex2g4s.x()) {
      var c = _iterator__ex2g4s.y();
      if (!(c.w2a_1 === Empty_getInstance())) {
        var predicateEvaluationResult = this.h2q(c.w2a_1, outerContext, c.t2a_1, configs.q2c_1);
        if (predicateEvaluationResult) {
          succeeded.d2d(c);
        } else {
          failed.d2d(c);
        }
      } else {
        succeeded.d2d(c);
      }
    }
    return new Pair(succeeded, failed);
  }
  e2p(predPredictions, outerContext, complete) {
    var predictions = BitSet.b2d();
    var inductionVariable = 0;
    var last = predPredictions.length;
    $l$loop_1: while (inductionVariable < last) {
      var pair = predPredictions[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      if (pair.i2q_1 === Empty_getInstance()) {
        predictions.c2d(pair.j2q_1);
        if (!complete) {
          break $l$loop_1;
        }
        continue $l$loop_1;
      }
      var fullCtx = false;
      var predicateEvaluationResult = this.h2q(pair.i2q_1, outerContext, pair.j2q_1, fullCtx);
      if (Companion_getInstance_16().n2o_1 || Companion_getInstance_16().p2o_1) {
        System_getInstance().f1v_1.e1v('eval pred ' + pair.toString() + '=' + predicateEvaluationResult);
      }
      if (predicateEvaluationResult) {
        if (Companion_getInstance_16().n2o_1 || Companion_getInstance_16().p2o_1) {
          System_getInstance().f1v_1.e1v('PREDICT ' + pair.j2q_1);
        }
        predictions.c2d(pair.j2q_1);
        if (!complete) {
          break $l$loop_1;
        }
      }
    }
    return predictions;
  }
  h2q(pred, parserCallStack, alt, fullCtx) {
    return pred.k2q(this.v26_1, parserCallStack);
  }
  z2p(config, configs, closureBusy, collectPredicates, fullCtx, treatEofAsEpsilon) {
    var initialDepth = 0;
    this.l2q(config, configs, closureBusy, collectPredicates, fullCtx, initialDepth, treatEofAsEpsilon);
    // Inline function 'com.strumenta.antlrkotlin.runtime.assert' call
    if (!(!fullCtx || !configs.w2c_1)) {
      throw AssertionError.vc(null);
    }
  }
  l2q(config, configs, closureBusy, collectPredicates, fullCtx, depth, treatEofAsEpsilon) {
    if (Companion_getInstance_16().o2o_1) {
      System_getInstance().f1v_1.e1v('closure(' + config.k2b(this.v26_1, true) + ')');
    }
    var tmp = config.s2a_1;
    if (tmp instanceof RuleStopState) {
      if (!ensureNotNull(config.u2a_1).p25()) {
        var inductionVariable = 0;
        var last = ensureNotNull(config.u2a_1).z1v();
        if (inductionVariable < last)
          $l$loop_0: do {
            var i = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            if (ensureNotNull(config.u2a_1).a2j(i) === 2147483647) {
              if (fullCtx) {
                configs.e2d(ATNConfig.c2b(config, config.s2a_1, EmptyPredictionContext_getInstance()), this.y26_1);
                continue $l$loop_0;
              }
              if (Companion_getInstance_16().n2o_1) {
                System_getInstance().f1v_1.e1v('FALLING off rule ' + this.m2q(config.s2a_1.s20_1));
              }
              this.n2q(config, configs, closureBusy, collectPredicates, fullCtx, depth, treatEofAsEpsilon);
              continue $l$loop_0;
            }
            var returnState = this.l20_1.d20_1.d2(ensureNotNull(config.u2a_1).a2j(i));
            var newContext = ensureNotNull(config.u2a_1).z2i(i);
            var c = ATNConfig.a2b(ensureNotNull(returnState), config.t2a_1, ensureNotNull(newContext), config.w2a_1);
            c.v2a_1 = config.v2a_1;
            // Inline function 'com.strumenta.antlrkotlin.runtime.assert' call
            if (!(depth > -2147483648)) {
              throw AssertionError.vc(null);
            }
            this.l2q(c, configs, closureBusy, collectPredicates, fullCtx, depth - 1 | 0, treatEofAsEpsilon);
          }
           while (inductionVariable < last);
        return Unit_instance;
      } else if (fullCtx) {
        configs.e2d(config, this.y26_1);
        return Unit_instance;
      } else {
        if (Companion_getInstance_16().n2o_1) {
          System_getInstance().f1v_1.e1v('FALLING off rule ' + this.m2q(config.s2a_1.s20_1));
        }
      }
    }
    this.n2q(config, configs, closureBusy, collectPredicates, fullCtx, depth, treatEofAsEpsilon);
  }
  n2q(config, configs, closureBusy, collectPredicates, fullCtx, depth, treatEofAsEpsilon) {
    var p = config.s2a_1;
    if (!p.v2g()) {
      configs.e2d(config, this.y26_1);
    }
    var inductionVariable = 0;
    var last = p.j2f();
    if (inductionVariable < last)
      $l$loop_1: do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (i === 0 && this.o2q(config)) {
          continue $l$loop_1;
        }
        var t = p.q22(i);
        var tmp;
        if (!(t instanceof ActionTransition)) {
          tmp = collectPredicates;
        } else {
          tmp = false;
        }
        var continueCollecting = tmp;
        var c = this.p2q(config, t, continueCollecting, depth === 0, fullCtx, treatEofAsEpsilon);
        if (!(c == null)) {
          var newDepth = depth;
          var tmp_0 = config.s2a_1;
          if (tmp_0 instanceof RuleStopState) {
            // Inline function 'com.strumenta.antlrkotlin.runtime.assert' call
            if (!!fullCtx) {
              throw AssertionError.vc(null);
            }
            if (!(this.c27_1 == null) && ensureNotNull(this.c27_1).w2l_1) {
              var outermostPrecedenceReturn = (t instanceof EpsilonTransition ? t : THROW_CCE()).p2k_1;
              if (outermostPrecedenceReturn === ensureNotNull(this.c27_1).s2l_1.s20_1) {
                c.y2a(true);
              }
            }
            c.v2a_1 = c.v2a_1 + 1 | 0;
            if (!closureBusy.z1(c)) {
              continue $l$loop_1;
            }
            configs.w2c_1 = true;
            // Inline function 'com.strumenta.antlrkotlin.runtime.assert' call
            if (!(newDepth > -2147483648)) {
              throw AssertionError.vc(null);
            }
            newDepth = newDepth - 1 | 0;
            if (Companion_getInstance_16().n2o_1) {
              System_getInstance().f1v_1.e1v('dips into outer ctx: ' + toString_1(c));
            }
          } else {
            if (!t.b2i() && !closureBusy.z1(c)) {
              continue $l$loop_1;
            }
            if (t instanceof RuleTransition) {
              if (newDepth >= 0) {
                newDepth = newDepth + 1 | 0;
              }
            }
          }
          this.l2q(c, configs, closureBusy, continueCollecting, fullCtx, newDepth, treatEofAsEpsilon);
        }
      }
       while (inductionVariable < last);
  }
  o2q(config) {
    if (Companion_getInstance_16().r2o_1) {
      return false;
    }
    var p = config.s2a_1;
    var tmp;
    var tmp_0;
    var tmp_1;
    if (!(p.x20() === 10)) {
      tmp_1 = true;
    } else {
      tmp_1 = !(p instanceof StarLoopEntryState ? p : THROW_CCE()).d2g_1;
    }
    if (tmp_1) {
      tmp_0 = true;
    } else {
      tmp_0 = ensureNotNull(config.u2a_1).p25();
    }
    if (tmp_0) {
      tmp = true;
    } else {
      tmp = ensureNotNull(config.u2a_1).b2j();
    }
    if (tmp) {
      return false;
    }
    var numCtxs = ensureNotNull(config.u2a_1).z1v();
    var inductionVariable = 0;
    if (inductionVariable < numCtxs)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var returnState = this.l20_1.d20_1.d2(ensureNotNull(config.u2a_1).a2j(i));
        if (!(ensureNotNull(returnState).s20_1 === p.s20_1)) {
          return false;
        }
      }
       while (inductionVariable < numCtxs);
    var tmp_2 = p.q22(0).o22_1;
    var decisionStartState = tmp_2 instanceof BlockStartState ? tmp_2 : THROW_CCE();
    var blockEndStateNum = ensureNotNull(decisionStartState.w2e_1).r20_1;
    var tmp_3 = this.l20_1.d20_1.d2(blockEndStateNum);
    var blockEndState = tmp_3 instanceof BlockEndState ? tmp_3 : THROW_CCE();
    var inductionVariable_0 = 0;
    if (inductionVariable_0 < numCtxs)
      $l$loop_2: do {
        var i_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        var returnStateNumber = ensureNotNull(config.u2a_1).a2j(i_0);
        var returnState_0 = this.l20_1.d20_1.d2(returnStateNumber);
        if (!(ensureNotNull(returnState_0).j2f() === 1) || !returnState_0.q22(0).b2i()) {
          return false;
        }
        var returnStateTarget = returnState_0.q22(0).o22_1;
        if (returnState_0.x20() === 8 && returnStateTarget === p) {
          continue $l$loop_2;
        }
        if (returnState_0 === blockEndState) {
          continue $l$loop_2;
        }
        if (returnStateTarget === blockEndState) {
          continue $l$loop_2;
        }
        if (returnStateTarget.x20() === 8 && returnStateTarget.j2f() === 1 && returnStateTarget.q22(0).b2i() && returnStateTarget.q22(0).o22_1 === p) {
          continue $l$loop_2;
        }
        return false;
      }
       while (inductionVariable_0 < numCtxs);
    return true;
  }
  m2q(index) {
    if (index >= 0) {
      return this.v26_1.a22()[index];
    }
    return '<rule ' + index + '>';
  }
  p2q(config, t, collectPredicates, inContext, fullCtx, treatEofAsEpsilon) {
    switch (t.c2i()) {
      case 3:
        return this.q2q(config, t instanceof RuleTransition ? t : THROW_CCE());
      case 10:
        return this.r2q(config, t instanceof PrecedencePredicateTransition ? t : THROW_CCE(), collectPredicates, inContext, fullCtx);
      case 4:
        return this.s2q(config, t instanceof PredicateTransition ? t : THROW_CCE(), collectPredicates, inContext, fullCtx);
      case 6:
        return this.t2q(config, t instanceof ActionTransition ? t : THROW_CCE());
      case 1:
        return ATNConfig.c2b(config, t.o22_1);
      case 5:
      case 2:
      case 7:
        if (treatEofAsEpsilon) {
          if (t.d2i(-1, 0, 1)) {
            return ATNConfig.c2b(config, t.o22_1);
          }
        }

        return null;
      default:
        return null;
    }
  }
  t2q(config, t) {
    if (Companion_getInstance_16().n2o_1) {
      System_getInstance().f1v_1.e1v('ACTION edge ' + t.g2i_1 + ':' + t.h2i_1);
    }
    return ATNConfig.c2b(config, t.o22_1);
  }
  r2q(config, pt, collectPredicates, inContext, fullCtx) {
    if (Companion_getInstance_16().n2o_1) {
      System_getInstance().f1v_1.e1v('PRED (collectPredicates=' + collectPredicates + ') ' + pt.w2q_1 + '>=_p, ctx dependent=true');
      System_getInstance().f1v_1.e1v('context surrounding pred is ' + toString_0(this.v26_1.h28()));
    }
    var c = null;
    if (collectPredicates && inContext) {
      if (fullCtx) {
        var currentPosition = ensureNotNull(this.z26_1).t1v();
        ensureNotNull(this.z26_1).w1v(this.a27_1);
        var predSucceeds = this.h2q(pt.z2q(), ensureNotNull(this.b27_1), config.t2a_1, fullCtx);
        ensureNotNull(this.z26_1).w1v(currentPosition);
        if (predSucceeds) {
          c = ATNConfig.c2b(config, pt.o22_1);
        }
      } else {
        var newSemCtx = Companion_instance_19.a2r(config.w2a_1, pt.z2q());
        c = ATNConfig.b2b(config, pt.o22_1, ensureNotNull(newSemCtx));
      }
    } else {
      c = ATNConfig.c2b(config, pt.o22_1);
    }
    if (Companion_getInstance_16().n2o_1) {
      System_getInstance().f1v_1.e1v('config from pred transition=' + toString_1(c));
    }
    return c;
  }
  s2q(config, pt, collectPredicates, inContext, fullCtx) {
    if (Companion_getInstance_16().n2o_1) {
      System_getInstance().f1v_1.e1v('PRED (collectPredicates=' + collectPredicates + ')' + (' ' + pt.u2m_1 + ':' + pt.v2m_1) + (', ctx dependent=' + pt.w2m_1));
      System_getInstance().f1v_1.e1v('context surrounding pred is ' + toString_0(this.v26_1.h28()));
    }
    var c = null;
    if (collectPredicates && (!pt.w2m_1 || (pt.w2m_1 && inContext))) {
      if (fullCtx) {
        var currentPosition = ensureNotNull(this.z26_1).t1v();
        ensureNotNull(this.z26_1).w1v(this.a27_1);
        var predSucceeds = this.h2q(pt.z2q(), ensureNotNull(this.b27_1), config.t2a_1, fullCtx);
        ensureNotNull(this.z26_1).w1v(currentPosition);
        if (predSucceeds) {
          c = ATNConfig.c2b(config, pt.o22_1);
        }
      } else {
        var newSemCtx = Companion_instance_19.a2r(config.w2a_1, pt.z2q());
        c = ATNConfig.b2b(config, pt.o22_1, ensureNotNull(newSemCtx));
      }
    } else {
      c = ATNConfig.c2b(config, pt.o22_1);
    }
    if (Companion_getInstance_16().n2o_1) {
      System_getInstance().f1v_1.e1v('config from pred transition=' + toString_1(c));
    }
    return c;
  }
  q2q(config, t) {
    if (Companion_getInstance_16().n2o_1) {
      System_getInstance().f1v_1.e1v('CALL rule ' + this.m2q(t.o22_1.s20_1) + ', ctx=' + toString_1(config.u2a_1));
    }
    var returnState = t.b23_1;
    var newContext = Companion_instance_20.w2k(config.u2a_1, returnState.r20_1);
    return ATNConfig.c2b(config, t.o22_1, newContext);
  }
  o2p(configs) {
    var altSets = Companion_instance_18.m2p(configs);
    return Companion_instance_18.b2r(altSets);
  }
  r2p(configs) {
    var conflictingAlts;
    if (!(configs.t2c_1 === 0)) {
      conflictingAlts = BitSet.b2d();
      conflictingAlts.c2d(configs.t2c_1);
    } else {
      conflictingAlts = ensureNotNull(configs.u2c_1);
    }
    return conflictingAlts;
  }
  k2m(t) {
    if (t === -1) {
      return 'EOF';
    }
    var vocabulary = this.v26_1.v1x();
    var displayName = vocabulary.w1x(t);
    if (displayName === t.toString()) {
      return displayName;
    }
    return displayName + '<' + t + '>';
  }
  u2o(input) {
    return this.k2m(input.b1w(1));
  }
  c2p(input, outerContext, configs, startIndex) {
    return NoViableAltException.p26(this.v26_1, input, input.d2(startIndex), input.g1w(1), configs, outerContext);
  }
  l2p(dfa, from, t, to) {
    if (Companion_getInstance_16().n2o_1) {
      System_getInstance().f1v_1.e1v('EDGE ' + toString_1(from) + ' -> ' + toString_1(to) + ' upon ' + this.k2m(t));
    }
    if (to == null) {
      return null;
    }
    var tto = this.x2o(dfa, to);
    if (from == null || t < -1 || t > this.l20_1.c20_1) {
      return tto;
    }
    // Inline function 'com.strumenta.antlrkotlin.runtime.synchronized' call
    if (from.b2h_1 == null) {
      var tmp = from;
      // Inline function 'kotlin.arrayOfNulls' call
      var size = (this.l20_1.c20_1 + 1 | 0) + 1 | 0;
      tmp.b2h_1 = Array(size);
    }
    ensureNotNull(from.b2h_1)[t + 1 | 0] = tto;
    if (Companion_getInstance_16().n2o_1) {
      System_getInstance().f1v_1.e1v('DFA=\n' + dfa.z21(this.v26_1.v1x()));
    }
    return tto;
  }
  x2o(dfa, D) {
    if (D === Companion_getInstance_11().i2h_1) {
      return D;
    }
    // Inline function 'com.strumenta.antlrkotlin.runtime.synchronized' call
    dfa.u2l_1;
    var existing = dfa.u2l_1.r3(D);
    if (!(existing == null)) {
      if (Companion_getInstance_16().o2o_1) {
        System_getInstance().f1v_1.e1v('addDFAState ' + D.toString() + ' exists');
      }
      return existing;
    }
    D.z2g_1 = dfa.u2l_1.b2();
    if (!D.a2h_1.y2c_1) {
      D.a2h_1.k2d(this);
      D.a2h_1.e2a(true);
    }
    if (Companion_getInstance_16().o2o_1) {
      System_getInstance().f1v_1.e1v('addDFAState new ' + D.toString());
    }
    // Inline function 'kotlin.collections.set' call
    dfa.u2l_1.l3(D, D);
    return D;
  }
  h2p(dfa, conflictingAlts, configs, startIndex, stopIndex) {
    if (Companion_getInstance_16().n2o_1 || Companion_getInstance_16().q2o_1) {
      var interval = Companion_getInstance_25().w1w(startIndex, stopIndex);
      System_getInstance().f1v_1.e1v('reportAttemptingFullContext' + (' decision=' + dfa.t2l_1 + ':' + configs.toString()) + (', input=' + this.v26_1.t1z().o1w(interval)));
    }
    this.v26_1.v25().m1v(this.v26_1, dfa, startIndex, stopIndex, conflictingAlts, configs);
  }
  y2p(dfa, prediction, configs, startIndex, stopIndex) {
    if (Companion_getInstance_16().n2o_1 || Companion_getInstance_16().q2o_1) {
      var interval = Companion_getInstance_25().w1w(startIndex, stopIndex);
      System_getInstance().f1v_1.e1v('reportContextSensitivity' + (' decision=' + dfa.t2l_1 + ':' + configs.toString()) + (', input=' + this.v26_1.t1z().o1w(interval)));
    }
    this.v26_1.v25().n1v(this.v26_1, dfa, startIndex, stopIndex, prediction, configs);
  }
  j2p(dfa, D, startIndex, stopIndex, exact, ambigAlts, configs) {
    if (Companion_getInstance_16().n2o_1 || Companion_getInstance_16().q2o_1) {
      var interval = Companion_getInstance_25().w1w(startIndex, stopIndex);
      System_getInstance().f1v_1.e1v('reportAmbiguity ' + ambigAlts.toString() + ':' + configs.toString() + ', input=' + this.v26_1.t1z().o1w(interval));
    }
    this.v26_1.v25().l1v(this.v26_1, dfa, startIndex, stopIndex, exact, ambigAlts, configs);
  }
}
class PlusBlockStartState extends BlockStartState {
  constructor() {
    super();
    this.p2g_1 = null;
    this.q2g_1 = 4;
  }
  x20() {
    return this.q2g_1;
  }
}
class PlusLoopbackState extends DecisionState {
  constructor() {
    super();
    this.l2r_1 = 11;
  }
  x20() {
    return this.l2r_1;
  }
}
class PrecedencePredicateTransition extends AbstractPredicateTransition {
  constructor(target, precedence) {
    super(target);
    this.w2q_1 = precedence;
    this.x2q_1 = 10;
    this.y2q_1 = true;
  }
  c2i() {
    return this.x2q_1;
  }
  b2i() {
    return this.y2q_1;
  }
  z2q() {
    return PrecedencePredicate.n2r(this.w2q_1);
  }
  d2i(symbol, minVocabSymbol, maxVocabSymbol) {
    return false;
  }
  toString() {
    return '' + this.w2q_1 + ' >= _p';
  }
}
class PredicateTransition extends AbstractPredicateTransition {
  constructor(target, ruleIndex, predIndex, isCtxDependent) {
    super(target);
    this.u2m_1 = ruleIndex;
    this.v2m_1 = predIndex;
    this.w2m_1 = isCtxDependent;
    this.x2m_1 = 4;
    this.y2m_1 = true;
  }
  c2i() {
    return this.x2m_1;
  }
  b2i() {
    return this.y2m_1;
  }
  z2q() {
    return Predicate.r2r(this.u2m_1, this.v2m_1, this.w2m_1);
  }
  d2i(symbol, minVocabSymbol, maxVocabSymbol) {
    return false;
  }
  toString() {
    return 'pred_' + this.u2m_1 + ':' + this.v2m_1;
  }
}
class Companion_17 {
  constructor() {
    this.f2d_1 = 1;
    this.g2d_1 = 2147483647;
    this.h2d_1 = 0;
  }
  s2k(atn, outerContext) {
    var tempOuterContext = outerContext == null ? Companion_getInstance_3().i28_1 : outerContext;
    if (tempOuterContext.f23() == null || tempOuterContext === Companion_getInstance_3().i28_1) {
      return EmptyPredictionContext_getInstance();
    }
    var parent = this.s2k(atn, tempOuterContext.f23());
    var state = atn.d20_1.d2(tempOuterContext.c22_1);
    var tmp = ensureNotNull(state).q22(0);
    var transition = tmp instanceof RuleTransition ? tmp : THROW_CCE();
    return Companion_instance_20.w2k(parent, transition.b23_1.r20_1);
  }
  s2r() {
    var hash = MurmurHash_instance.g2b(1);
    hash = MurmurHash_instance.j2b(hash, 0);
    return hash;
  }
  t2r(parent, returnState) {
    var hash = MurmurHash_instance.g2b(1);
    hash = MurmurHash_instance.i2b(hash, parent);
    hash = MurmurHash_instance.h2b(hash, returnState);
    hash = MurmurHash_instance.j2b(hash, 2);
    return hash;
  }
  q2i(parents, returnStates) {
    var hash = MurmurHash_instance.g2b(1);
    var inductionVariable = 0;
    var last = parents.length;
    while (inductionVariable < last) {
      var parent = parents[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      hash = MurmurHash_instance.i2b(hash, parent);
    }
    var inductionVariable_0 = 0;
    var last_0 = returnStates.length;
    while (inductionVariable_0 < last_0) {
      var returnState = returnStates[inductionVariable_0];
      inductionVariable_0 = inductionVariable_0 + 1 | 0;
      hash = MurmurHash_instance.h2b(hash, returnState);
    }
    hash = MurmurHash_instance.j2b(hash, imul(2, parents.length));
    return hash;
  }
  i2d(a, b, rootIsWildcard, mergeCache) {
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
      return this.u2r(aa, bb, rootIsWildcard, mergeCache);
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
      aa = ArrayPredictionContext.u2i(aa);
    }
    if (bb instanceof SingletonPredictionContext) {
      bb = ArrayPredictionContext.u2i(bb);
    }
    var tmp_0 = aa instanceof ArrayPredictionContext ? aa : THROW_CCE();
    return this.v2r(tmp_0, bb instanceof ArrayPredictionContext ? bb : THROW_CCE(), rootIsWildcard, mergeCache);
  }
  u2r(a, b, rootIsWildcard, mergeCache) {
    if (!(mergeCache == null)) {
      var previous = mergeCache.x2r(a, b);
      if (!(previous == null)) {
        return previous;
      }
      previous = mergeCache.x2r(b, a);
      if (!(previous == null)) {
        return previous;
      }
    }
    var rootMerge = this.y2r(a, b, rootIsWildcard);
    if (!(rootMerge == null)) {
      if (mergeCache == null)
        null;
      else
        mergeCache.z2r(a, b, rootMerge);
      return rootMerge;
    }
    if (a.y2i_1 === b.y2i_1) {
      var parent = this.i2d(a.x2i_1, b.x2i_1, rootIsWildcard, mergeCache);
      if (parent === a.x2i_1) {
        return a;
      }
      if (parent === b.x2i_1) {
        return b;
      }
      var a_ = Companion_instance_20.w2k(parent, a.y2i_1);
      if (mergeCache == null)
        null;
      else
        mergeCache.z2r(a, b, a_);
      return a_;
    }
    var singleParent = null;
    if (a === b || (!(a.x2i_1 == null) && equals(a.x2i_1, b.x2i_1))) {
      singleParent = a.x2i_1;
    }
    if (!(singleParent == null)) {
      // Inline function 'kotlin.intArrayOf' call
      var payloads = new Int32Array([a.y2i_1, b.y2i_1]);
      if (a.y2i_1 > b.y2i_1) {
        payloads[0] = b.y2i_1;
        payloads[1] = a.y2i_1;
      }
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var parents = [singleParent, singleParent];
      var a__0 = ArrayPredictionContext.p2i(parents, payloads);
      if (mergeCache == null)
        null;
      else
        mergeCache.z2r(a, b, a__0);
      return a__0;
    }
    // Inline function 'kotlin.intArrayOf' call
    var payloads_0 = new Int32Array([a.y2i_1, b.y2i_1]);
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var parents_0 = [a.x2i_1, b.x2i_1];
    if (a.y2i_1 > b.y2i_1) {
      payloads_0[0] = b.y2i_1;
      payloads_0[1] = a.y2i_1;
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      parents_0 = [b.x2i_1, a.x2i_1];
    }
    var a__1 = ArrayPredictionContext.p2i(parents_0, payloads_0);
    if (mergeCache == null)
      null;
    else
      mergeCache.z2r(a, b, a__1);
    return a__1;
  }
  y2r(a, b, rootIsWildcard) {
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
        var payloads = new Int32Array([b.y2i_1, 2147483647]);
        // Inline function 'kotlin.arrayOf' call
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        var parents = [b.x2i_1, null];
        return ArrayPredictionContext.p2i(parents, payloads);
      }
      if (b === EmptyPredictionContext_getInstance()) {
        // Inline function 'kotlin.intArrayOf' call
        var payloads_0 = new Int32Array([a.y2i_1, 2147483647]);
        // Inline function 'kotlin.arrayOf' call
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        var parents_0 = [a.x2i_1, null];
        return ArrayPredictionContext.p2i(parents_0, payloads_0);
      }
    }
    return null;
  }
  v2r(a, b, rootIsWildcard, mergeCache) {
    if (!(mergeCache == null)) {
      var previous = mergeCache.x2r(a, b);
      if (!(previous == null)) {
        if (Companion_getInstance_16().o2o_1) {
          System_getInstance().f1v_1.e1v('mergeArrays a=' + a.toString() + ',b=' + b.toString() + ' -> previous');
        }
        return previous;
      }
      previous = mergeCache.x2r(b, a);
      if (!(previous == null)) {
        if (Companion_getInstance_16().o2o_1) {
          System_getInstance().f1v_1.e1v('mergeArrays a=' + a.toString() + ',b=' + b.toString() + ' -> previous');
        }
        return previous;
      }
    }
    var i = 0;
    var j = 0;
    var k = 0;
    var mergedReturnStates = new Int32Array(a.o2i_1.length + b.o2i_1.length | 0);
    // Inline function 'kotlin.arrayOfNulls' call
    var size = a.o2i_1.length + b.o2i_1.length | 0;
    var mergedParents = Array(size);
    while (i < a.o2i_1.length && j < b.o2i_1.length) {
      var aParent = a.n2i_1[i];
      var bParent = b.n2i_1[j];
      if (a.o2i_1[i] === b.o2i_1[j]) {
        var payload = a.o2i_1[i];
        var both = payload === 2147483647 && aParent == null && bParent == null;
        var ax_ax = !(aParent == null) && !(bParent == null) && equals(aParent, bParent);
        if (both || ax_ax) {
          mergedParents[k] = aParent;
          mergedReturnStates[k] = payload;
        } else {
          var mergedParent = this.i2d(aParent, bParent, rootIsWildcard, mergeCache);
          mergedParents[k] = mergedParent;
          mergedReturnStates[k] = payload;
        }
        i = i + 1 | 0;
        j = j + 1 | 0;
      } else if (a.o2i_1[i] < b.o2i_1[j]) {
        mergedParents[k] = aParent;
        mergedReturnStates[k] = a.o2i_1[i];
        i = i + 1 | 0;
      } else {
        mergedParents[k] = bParent;
        mergedReturnStates[k] = b.o2i_1[j];
        j = j + 1 | 0;
      }
      k = k + 1 | 0;
    }
    if (i < a.o2i_1.length) {
      var inductionVariable = i;
      var last = a.o2i_1.length;
      if (inductionVariable < last)
        do {
          var p = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          mergedParents[k] = a.n2i_1[p];
          mergedReturnStates[k] = a.o2i_1[p];
          k = k + 1 | 0;
        }
         while (inductionVariable < last);
    } else {
      var inductionVariable_0 = j;
      var last_0 = b.o2i_1.length;
      if (inductionVariable_0 < last_0)
        do {
          var p_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          mergedParents[k] = b.n2i_1[p_0];
          mergedReturnStates[k] = b.o2i_1[p_0];
          k = k + 1 | 0;
        }
         while (inductionVariable_0 < last_0);
    }
    if (k < mergedParents.length) {
      if (k === 1) {
        var a_ = Companion_instance_20.w2k(mergedParents[0], mergedReturnStates[0]);
        if (mergeCache == null)
          null;
        else
          mergeCache.z2r(a, b, a_);
        return a_;
      }
      mergedParents = copyOf(mergedParents, k);
      mergedReturnStates = copyOf_0(mergedReturnStates, k);
    }
    var M = ArrayPredictionContext.p2i(mergedParents, mergedReturnStates);
    if (M.equals(a)) {
      if (mergeCache == null)
        null;
      else
        mergeCache.z2r(a, b, a);
      if (Companion_getInstance_16().o2o_1) {
        System_getInstance().f1v_1.e1v('mergeArrays a=' + a.toString() + ',b=' + b.toString() + ' -> a');
      }
      return a;
    }
    if (M.equals(b)) {
      if (mergeCache == null)
        null;
      else
        mergeCache.z2r(a, b, b);
      if (Companion_getInstance_16().o2o_1) {
        System_getInstance().f1v_1.e1v('mergeArrays a=' + a.toString() + ',b=' + b.toString() + ' -> b');
      }
      return b;
    }
    this.a2s(mergedParents);
    if (mergeCache == null)
      null;
    else
      mergeCache.z2r(a, b, M);
    if (Companion_getInstance_16().o2o_1) {
      System_getInstance().f1v_1.e1v('mergeArrays a=' + a.toString() + ',b=' + b.toString() + ' -> ' + M.toString());
    }
    return M;
  }
  a2s(parents) {
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
  j2h(context, contextCache, visited) {
    if (context.p25()) {
      return context;
    }
    var existing = visited.r3(context);
    if (!(existing == null)) {
      return existing;
    }
    existing = contextCache.c2s(context);
    if (!(existing == null)) {
      // Inline function 'kotlin.collections.set' call
      var value = existing;
      visited.l3(context, value);
      return existing;
    }
    var changed = false;
    // Inline function 'kotlin.arrayOfNulls' call
    var size = context.z1v();
    var parents = Array(size);
    var inductionVariable = 0;
    var last = parents.length - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var parent = this.j2h(ensureNotNull(context.z2i(i)), contextCache, visited);
        if (changed || !(parent === context.z2i(i))) {
          if (!changed) {
            // Inline function 'kotlin.arrayOfNulls' call
            var size_0 = context.z1v();
            parents = Array(size_0);
            var inductionVariable_0 = 0;
            var last_0 = context.z1v();
            if (inductionVariable_0 < last_0)
              do {
                var j = inductionVariable_0;
                inductionVariable_0 = inductionVariable_0 + 1 | 0;
                parents[j] = context.z2i(j);
              }
               while (inductionVariable_0 < last_0);
            changed = true;
          }
          parents[i] = parent;
        }
      }
       while (inductionVariable <= last);
    if (!changed) {
      contextCache.d2s(context);
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
        tmp = Companion_instance_20.w2k(parents[0], context.a2j(0));
      } else {
        var arrayPredictionContext = context instanceof ArrayPredictionContext ? context : THROW_CCE();
        tmp = ArrayPredictionContext.p2i(parents, arrayPredictionContext.o2i_1);
      }
    }
    var updated = tmp;
    contextCache.d2s(updated);
    // Inline function 'kotlin.collections.set' call
    visited.l3(updated, updated);
    // Inline function 'kotlin.collections.set' call
    visited.l3(context, updated);
    return updated;
  }
}
class PredictionContextCache {
  constructor() {
    this.b2s_1 = HashMap.y7();
  }
  d2s(ctx) {
    if (ctx === EmptyPredictionContext_getInstance()) {
      return EmptyPredictionContext_getInstance();
    }
    var existing = this.b2s_1.r3(ctx);
    if (!(existing == null)) {
      return existing;
    }
    // Inline function 'kotlin.collections.set' call
    this.b2s_1.l3(ctx, ctx);
    return ctx;
  }
  c2s(ctx) {
    return this.b2s_1.r3(ctx);
  }
}
class FlexibleHashMap {
  constructor(comparator, initialCapacity, initialBucketCapacity) {
    comparator = comparator === VOID ? Companion_getInstance_27().j2l_1 : comparator;
    initialCapacity = initialCapacity === VOID ? 16 : initialCapacity;
    initialBucketCapacity = initialBucketCapacity === VOID ? 8 : initialBucketCapacity;
    this.e2s_1 = comparator;
    this.f2s_1 = initialCapacity;
    this.g2s_1 = initialBucketCapacity;
    this.i2s_1 = 0;
    this.j2s_1 = 1;
    this.k2s_1 = 0;
    this.h2s_1 = createEntryListArray(Companion_instance_23, this.g2s_1);
    var tmp = this;
    // Inline function 'kotlin.math.floor' call
    var x = this.f2s_1 * 0.75;
    var tmp$ret$0 = Math.floor(x);
    tmp.k2s_1 = numberToInt(tmp$ret$0);
  }
  b2() {
    return this.i2s_1;
  }
  n3() {
    throw UnsupportedOperationException.q7();
  }
  o3() {
    var a = ArrayList.y1(this.b2());
    var indexedObject = this.h2s_1;
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var bucket = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      if (!(bucket == null)) {
        var _iterator__ex2g4s = bucket.w();
        while (_iterator__ex2g4s.x()) {
          var entry = _iterator__ex2g4s.y();
          a.z1(ensureNotNull(entry).z2v_1);
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
    var b = this.l2s(key);
    var tmp0_elvis_lhs = this.h2s_1[b];
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
      if (this.e2s_1.p2c(e == null ? null : e.y2v_1, key)) {
        return e == null ? null : e.z2v_1;
      }
    }
    return null;
  }
  l3(key, value) {
    if (key == null) {
      return null;
    }
    if (this.i2s_1 > this.k2s_1) {
      this.g2c();
    }
    var b = this.l2s(key);
    var existingBucket = this.h2s_1[b];
    var tmp;
    if (!(existingBucket == null)) {
      tmp = existingBucket;
    } else {
      var list = ArrayList.u1();
      this.h2s_1[b] = list;
      tmp = list;
    }
    var bucket = tmp;
    var _iterator__ex2g4s = bucket.w();
    while (_iterator__ex2g4s.x()) {
      var e = _iterator__ex2g4s.y();
      if (this.e2s_1.p2c(e == null ? null : e.y2v_1, key)) {
        var prev = e == null ? null : e.z2v_1;
        if (e == null)
          null;
        else {
          e.z2v_1 = value;
        }
        this.i2s_1 = this.i2s_1 + 1 | 0;
        return prev;
      }
    }
    bucket.z1(new Entry(key, value));
    this.i2s_1 = this.i2s_1 + 1 | 0;
    return null;
  }
  m3(key) {
    throw UnsupportedOperationException.q7();
  }
  p3(key) {
    return !(this.r3(key) == null);
  }
  hashCode() {
    var hash = MurmurHash_instance.b2n();
    var indexedObject = this.h2s_1;
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
        hash = MurmurHash_instance.h2b(hash, this.e2s_1.n2c(e.y2v_1));
      }
    }
    hash = MurmurHash_instance.j2b(hash, this.b2());
    return hash;
  }
  equals(other) {
    throw UnsupportedOperationException.q7();
  }
  l2s(key) {
    var hash = this.e2s_1.n2c(key);
    return hash & (this.h2s_1.length - 1 | 0);
  }
  g2c() {
    var old = this.h2s_1;
    this.j2s_1 = this.j2s_1 + 4 | 0;
    var newCapacity = imul(this.h2s_1.length, 2);
    var newTable = createEntryListArray(Companion_instance_23, newCapacity);
    this.h2s_1 = newTable;
    this.k2s_1 = numberToInt(newCapacity * 0.75);
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
        this.l3(e.y2v_1, e.z2v_1);
      }
    }
    this.i2s_1 = oldSize;
  }
  u() {
    return this.i2s_1 === 0;
  }
  toString() {
    if (this.b2() === 0) {
      return '{}';
    }
    var first = true;
    var buf = StringBuilder.s();
    buf.t('{');
    var indexedObject = this.h2s_1;
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
  m2c(obj) {
    var hashCode = MurmurHash_instance.g2b(7);
    hashCode = MurmurHash_instance.h2b(hashCode, obj.s2a_1.r20_1);
    hashCode = MurmurHash_instance.i2b(hashCode, obj.u2a_1);
    hashCode = MurmurHash_instance.j2b(hashCode, 2);
    return hashCode;
  }
  n2c(obj) {
    return this.m2c(obj instanceof ATNConfig ? obj : THROW_CCE());
  }
  o2c(a, b) {
    if (a === b) {
      return true;
    }
    if (a == null || b == null) {
      return false;
    }
    return a.s2a_1.r20_1 === b.s2a_1.r20_1 && equals(a.u2a_1, b.u2a_1);
  }
  p2c(a, b) {
    var tmp = (a == null ? true : a instanceof ATNConfig) ? a : THROW_CCE();
    return this.o2c(tmp, (b == null ? true : b instanceof ATNConfig) ? b : THROW_CCE());
  }
}
class Companion_18 {
  p2p(mode, configs) {
    var tempConfig = configs;
    if (this.c2q(tempConfig)) {
      return true;
    }
    if (mode.equals(PredictionMode_SLL_getInstance())) {
      if (tempConfig.v2c_1) {
        var dup = new ATNConfigSet();
        var _iterator__ex2g4s = tempConfig.w();
        while (_iterator__ex2g4s.x()) {
          var c = _iterator__ex2g4s.y();
          var tempC = c;
          tempC = ATNConfig.d2b(tempC, Empty_getInstance());
          dup.d2d(tempC);
        }
        tempConfig = dup;
      }
    }
    var altSets = this.m2p(tempConfig);
    return this.m2s(altSets) && !this.n2s(tempConfig);
  }
  b2q(configs) {
    var _iterator__ex2g4s = configs.w();
    while (_iterator__ex2g4s.x()) {
      var c = _iterator__ex2g4s.y();
      var tmp = c.s2a_1;
      if (tmp instanceof RuleStopState) {
        return true;
      }
    }
    return false;
  }
  c2q(configs) {
    var _iterator__ex2g4s = configs.w();
    while (_iterator__ex2g4s.x()) {
      var config = _iterator__ex2g4s.y();
      var tmp = config.s2a_1;
      if (!(tmp instanceof RuleStopState)) {
        return false;
      }
    }
    return true;
  }
  v2p(altSets) {
    return this.w2p(altSets);
  }
  n2p(altSets) {
    return !this.o2s(altSets);
  }
  o2s(altSets) {
    var _iterator__ex2g4s = altSets.w();
    while (_iterator__ex2g4s.x()) {
      var alts = _iterator__ex2g4s.y();
      if (alts.g2p() === 1) {
        return true;
      }
    }
    return false;
  }
  m2s(altSets) {
    var _iterator__ex2g4s = altSets.w();
    while (_iterator__ex2g4s.x()) {
      var alts = _iterator__ex2g4s.y();
      if (alts.g2p() > 1) {
        return true;
      }
    }
    return false;
  }
  x2p(altSets) {
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
  u2p(altSets) {
    var all = this.b2r(altSets);
    if (all.g2p() === 1) {
      return all.f2p(0);
    }
    return 0;
  }
  b2r(altSets) {
    var all = BitSet.b2d();
    var _iterator__ex2g4s = altSets.w();
    while (_iterator__ex2g4s.x()) {
      var alts = _iterator__ex2g4s.y();
      all.p2s(alts);
    }
    return all;
  }
  m2p(configs) {
    var configToAlts = new AltAndContextMap();
    var _iterator__ex2g4s = configs.w();
    while (_iterator__ex2g4s.x()) {
      var c = _iterator__ex2g4s.y();
      var alts = configToAlts.r3(c);
      if (alts == null) {
        alts = BitSet.b2d();
        // Inline function 'kotlin.collections.set' call
        var value = alts;
        configToAlts.l3(c, value);
      }
      alts.c2d(c.t2a_1);
    }
    return configToAlts.o3();
  }
  q2s(configs) {
    var m = HashMap.y7();
    var _iterator__ex2g4s = configs.w();
    while (_iterator__ex2g4s.x()) {
      var c = _iterator__ex2g4s.y();
      var alts = m.r3(c.s2a_1);
      if (alts == null) {
        alts = BitSet.b2d();
        var tmp2 = c.s2a_1;
        // Inline function 'kotlin.collections.set' call
        var value = alts;
        m.l3(tmp2, value);
      }
      alts.c2d(c.t2a_1);
    }
    return m;
  }
  n2s(configs) {
    var x = this.q2s(configs);
    var _iterator__ex2g4s = x.o3().w();
    while (_iterator__ex2g4s.x()) {
      var alts = _iterator__ex2g4s.y();
      if (alts.g2p() === 1) {
        return true;
      }
    }
    return false;
  }
  w2p(altSets) {
    var viableAlts = BitSet.b2d();
    var _iterator__ex2g4s = altSets.w();
    while (_iterator__ex2g4s.x()) {
      var alts = _iterator__ex2g4s.y();
      var minAlt = alts.f2p(0);
      viableAlts.c2d(minAlt);
      if (viableAlts.g2p() > 1) {
        return 0;
      }
    }
    return viableAlts.f2p(0);
  }
}
class PredictionMode extends Enum {}
class RangeTransition extends Transition {
  constructor(target, from, to) {
    super(target);
    this.t2s_1 = from;
    this.u2s_1 = to;
    this.v2s_1 = 2;
  }
  c2i() {
    return this.v2s_1;
  }
  h2j() {
    return Companion_getInstance_26().w1w(this.t2s_1, this.u2s_1);
  }
  getLabel() {
    return this.h2j();
  }
  d2i(symbol, minVocabSymbol, maxVocabSymbol) {
    var containsLower = this.t2s_1;
    return symbol <= this.u2s_1 ? containsLower <= symbol : false;
  }
  toString() {
    var buf = StringBuilder.we("'");
    appendCodePoint(buf, this.t2s_1);
    buf.t("'..'");
    appendCodePoint(buf, this.u2s_1);
    buf.t("'");
    return buf.toString();
  }
}
class RuleStartState extends ATNState {
  constructor() {
    super();
    this.e2f_1 = null;
    this.f2f_1 = false;
    this.g2f_1 = 2;
  }
  x20() {
    return this.g2f_1;
  }
}
class RuleStopState extends ATNState {
  constructor() {
    super();
    this.d2t_1 = 7;
  }
  x20() {
    return this.d2t_1;
  }
}
class RuleTransition extends Transition {
  constructor(ruleStart, ruleIndex, precedence, followState) {
    super(ruleStart);
    this.z22_1 = ruleIndex;
    this.a23_1 = precedence;
    this.b23_1 = followState;
    this.c23_1 = 3;
    this.d23_1 = true;
  }
  c2i() {
    return this.c23_1;
  }
  b2i() {
    return this.d23_1;
  }
  d2i(symbol, minVocabSymbol, maxVocabSymbol) {
    return false;
  }
}
class Companion_19 {
  a2r(a, b) {
    if (a == null || a === Empty_getInstance()) {
      return b;
    }
    if (b == null || b === Empty_getInstance()) {
      return a;
    }
    var result = AND.f2t(a, b);
    var tmp;
    if (result.e2t_1.length === 1) {
      tmp = result.e2t_1[0];
    } else {
      tmp = result;
    }
    return tmp;
  }
  e2q(a, b) {
    if (a == null) {
      return b;
    }
    if (b == null) {
      return a;
    }
    if (a === Empty_getInstance() || b === Empty_getInstance()) {
      return Empty_getInstance();
    }
    var result = OR.h2t(a, b);
    var tmp;
    if (result.g2t_1.length === 1) {
      tmp = result.g2t_1[0];
    } else {
      tmp = result;
    }
    return tmp;
  }
}
class SemanticContext {
  static j2t() {
    return createThis(this);
  }
  d2q(parser, parserCallStack) {
    return this;
  }
}
class Empty extends SemanticContext {
  static i2t() {
    Empty_instance = null;
    var $this = this.j2t();
    Empty_instance = $this;
    return $this;
  }
  k2q(parser, parserCallStack) {
    return false;
  }
}
class Predicate extends SemanticContext {
  static k2t() {
    var $this = this.j2t();
    init_org_antlr_v4_kotlinruntime_atn_SemanticContext_Predicate($this);
    $this.o2r_1 = -1;
    $this.p2r_1 = -1;
    $this.q2r_1 = false;
    return $this;
  }
  static r2r(ruleIndex, predIndex, isCtxDependent) {
    var $this = this.j2t();
    init_org_antlr_v4_kotlinruntime_atn_SemanticContext_Predicate($this);
    $this.o2r_1 = ruleIndex;
    $this.p2r_1 = predIndex;
    $this.q2r_1 = isCtxDependent;
    return $this;
  }
  k2q(parser, parserCallStack) {
    var tmp;
    if (this.q2r_1) {
      tmp = parserCallStack;
    } else {
      tmp = null;
    }
    var localctx = tmp;
    return parser.z25(localctx, this.o2r_1, this.p2r_1);
  }
  hashCode() {
    var hashCode = MurmurHash_instance.b2n();
    hashCode = MurmurHash_instance.h2b(hashCode, this.o2r_1);
    hashCode = MurmurHash_instance.h2b(hashCode, this.p2r_1);
    hashCode = MurmurHash_instance.h2b(hashCode, this.q2r_1 ? 1 : 0);
    hashCode = MurmurHash_instance.j2b(hashCode, 3);
    return hashCode;
  }
  equals(other) {
    if (!(other instanceof Predicate)) {
      return false;
    }
    if (this === other) {
      return true;
    }
    return this.o2r_1 === other.o2r_1 && this.p2r_1 === other.p2r_1 && this.q2r_1 === other.q2r_1;
  }
  toString() {
    return '{' + this.o2r_1 + ':' + this.p2r_1 + '}?';
  }
}
class PrecedencePredicate extends SemanticContext {
  static n2r(precedence) {
    precedence = precedence === VOID ? 0 : precedence;
    var $this = this.j2t();
    $this.m2r_1 = precedence;
    return $this;
  }
  k2q(parser, parserCallStack) {
    return parser.a26(parserCallStack, this.m2r_1);
  }
  d2q(parser, parserCallStack) {
    var tmp;
    if (parser.a26(parserCallStack, this.m2r_1)) {
      tmp = Empty_getInstance();
    } else {
      tmp = null;
    }
    return tmp;
  }
  l2t(other) {
    return this.m2r_1 - other.m2r_1 | 0;
  }
  d(other) {
    return this.l2t(other instanceof PrecedencePredicate ? other : THROW_CCE());
  }
  hashCode() {
    var hashCode = 1;
    hashCode = imul(31, hashCode) + this.m2r_1 | 0;
    return hashCode;
  }
  equals(other) {
    if (!(other instanceof PrecedencePredicate)) {
      return false;
    }
    if (this === other) {
      return true;
    }
    return this.m2r_1 === other.m2r_1;
  }
  toString() {
    return '{' + this.m2r_1 + '>=prec}?';
  }
}
class Operator extends SemanticContext {
  static m2t() {
    return this.j2t();
  }
}
class AND extends Operator {
  static f2t(a, b) {
    var $this = this.m2t();
    var operands = LinkedHashSet.e2();
    if (a instanceof AND) {
      operands.c2(asList(a.e2t_1));
    } else {
      operands.z1(a);
    }
    if (b instanceof AND) {
      operands.c2(asList(b.e2t_1));
    } else {
      operands.z1(b);
    }
    var precedencePredicates = filterPrecedencePredicates(Companion_instance_19, operands);
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!precedencePredicates.u()) {
      var reduced = Collections_instance.c1v(precedencePredicates);
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
    if (!(other instanceof AND)) {
      return false;
    }
    return contentEquals_0(this.e2t_1, other.e2t_1);
  }
  hashCode() {
    var fqn = 'org.antlr.v4.kotlinruntime.atn.SemanticContext.AND';
    var seed = imul(31, getStringHashCode(fqn)) + getKClass(AND).hashCode() | 0;
    return MurmurHash_instance.n2t(this.e2t_1, seed);
  }
  k2q(parser, parserCallStack) {
    var indexedObject = this.e2t_1;
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var operand = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      if (!operand.k2q(parser, parserCallStack)) {
        return false;
      }
    }
    return true;
  }
  d2q(parser, parserCallStack) {
    var differs = false;
    var operands = ArrayList.u1();
    var indexedObject = this.e2t_1;
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var context = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      var evaluated = context.d2q(parser, parserCallStack);
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
        result = Companion_instance_19.a2r(result, operands.d2(i));
      }
       while (inductionVariable_0 < last_0);
    return result;
  }
  toString() {
    return joinToString(this.e2t_1, '&&');
  }
}
class OR extends Operator {
  static h2t(a, b) {
    var $this = this.m2t();
    var operands = LinkedHashSet.e2();
    if (a instanceof OR) {
      operands.c2(asList(a.g2t_1));
    } else {
      operands.z1(a);
    }
    if (b instanceof OR) {
      operands.c2(asList(b.g2t_1));
    } else {
      operands.z1(b);
    }
    var precedencePredicates = filterPrecedencePredicates(Companion_instance_19, operands);
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!precedencePredicates.u()) {
      var reduced = Collections_instance.d1v(precedencePredicates);
      operands.z1(reduced);
    }
    var tmp = $this;
    // Inline function 'kotlin.collections.toTypedArray' call
    tmp.g2t_1 = copyToArray(operands);
    return $this;
  }
  equals(other) {
    if (this === other) {
      return true;
    }
    if (!(other instanceof OR)) {
      return false;
    }
    return contentEquals_0(this.g2t_1, other.g2t_1);
  }
  hashCode() {
    var fqn = 'org.antlr.v4.kotlinruntime.atn.SemanticContext.OR';
    var seed = imul(31, getStringHashCode(fqn)) + getKClass(OR).hashCode() | 0;
    return MurmurHash_instance.n2t(this.g2t_1, seed);
  }
  k2q(parser, parserCallStack) {
    var indexedObject = this.g2t_1;
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var operand = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      if (operand.k2q(parser, parserCallStack)) {
        return true;
      }
    }
    return false;
  }
  d2q(parser, parserCallStack) {
    var differs = false;
    var operands = ArrayList.u1();
    var indexedObject = this.g2t_1;
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var context = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      var evaluated = context.d2q(parser, parserCallStack);
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
        result = Companion_instance_19.e2q(result, operands.d2(i));
      }
       while (inductionVariable_0 < last_0);
    return result;
  }
  toString() {
    return joinToString(this.g2t_1, '||');
  }
}
class Companion_20 {
  w2k(parent, returnState) {
    var tmp;
    if (returnState === 2147483647 && parent == null) {
      tmp = EmptyPredictionContext_getInstance();
    } else {
      tmp = SingletonPredictionContext.k2k(parent, returnState);
    }
    return tmp;
  }
}
class StarBlockStartState extends BlockStartState {
  constructor() {
    super();
    this.y2t_1 = 5;
  }
  x20() {
    return this.y2t_1;
  }
}
class StarLoopEntryState extends DecisionState {
  constructor() {
    super();
    this.c2g_1 = null;
    this.d2g_1 = false;
    this.e2g_1 = 10;
  }
  x20() {
    return this.e2g_1;
  }
}
class StarLoopbackState extends ATNState {
  constructor() {
    super();
    this.g2u_1 = 9;
  }
  x20() {
    return this.g2u_1;
  }
}
class TokensStartState extends DecisionState {
  constructor() {
    super();
    this.q2u_1 = 6;
  }
  x20() {
    return this.q2u_1;
  }
}
class Companion_21 {
  constructor() {
    Companion_instance_21 = this;
    this.r2u_1 = 1;
    this.s2u_1 = 2;
    this.t2u_1 = 3;
    this.u2u_1 = 4;
    this.v2u_1 = 5;
    this.w2u_1 = 6;
    this.x2u_1 = 7;
    this.y2u_1 = 8;
    this.z2u_1 = 9;
    this.a2v_1 = 10;
    var tmp = this;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.b2v_1 = ['INVALID', 'EPSILON', 'RANGE', 'RULE', 'PREDICATE', 'ATOM', 'ACTION', 'SET', 'NOT_SET', 'WILDCARD', 'PRECEDENCE'];
  }
}
class WildcardTransition extends Transition {
  constructor(target) {
    super(target);
    this.e2v_1 = 9;
  }
  c2i() {
    return this.e2v_1;
  }
  d2i(symbol, minVocabSymbol, maxVocabSymbol) {
    return minVocabSymbol <= symbol ? symbol <= maxVocabSymbol : false;
  }
  toString() {
    return '.';
  }
}
class sam$kotlin_Comparator$0 {
  constructor(function_0) {
    this.f2v_1 = function_0;
  }
  wg(a, b) {
    return this.f2v_1(a, b);
  }
  compare(a, b) {
    return this.wg(a, b);
  }
  f4() {
    return this.f2v_1;
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
    this.s2l_1 = atnStartState;
    this.t2l_1 = decision;
    this.u2l_1 = HashMap.y7();
    this.v2l_1 = null;
    var isPrecedenceDfa = false;
    var tmp = this.s2l_1;
    if (tmp instanceof StarLoopEntryState) {
      if (this.s2l_1.d2g_1) {
        isPrecedenceDfa = true;
        var precedenceState = DFAState.h2h(new ATNConfigSet());
        var tmp_0 = precedenceState;
        // Inline function 'kotlin.arrayOfNulls' call
        tmp_0.b2h_1 = Array(0);
        precedenceState.c2h_1 = false;
        precedenceState.f2h_1 = false;
        this.v2l_1 = precedenceState;
      }
    }
    this.w2l_1 = isPrecedenceDfa;
  }
  v2o(precedence) {
    if (!this.w2l_1) {
      throw IllegalStateException.l4('Only precedence DFAs may contain a precedence start state.');
    }
    var edges = ensureNotNull(ensureNotNull(this.v2l_1).b2h_1);
    var tmp;
    if (precedence < 0 || precedence >= edges.length) {
      tmp = null;
    } else {
      tmp = edges[precedence];
    }
    return tmp;
  }
  z2o(precedence, startState) {
    if (!this.w2l_1) {
      throw IllegalStateException.l4('Only precedence DFAs may contain a precedence start state.');
    }
    if (precedence < 0) {
      return Unit_instance;
    }
    var s0 = ensureNotNull(this.v2l_1);
    // Inline function 'com.strumenta.antlrkotlin.runtime.synchronized' call
    if (precedence >= ensureNotNull(s0.b2h_1).length) {
      s0.b2h_1 = copyOf(ensureNotNull(s0.b2h_1), precedence + 1 | 0);
    }
    ensureNotNull(s0.b2h_1)[precedence] = startState;
  }
  g2v() {
    var result = ArrayList.v1(this.u2l_1.n3());
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
    return this.z21(Companion_getInstance_5().d29_1);
  }
  z21(vocabulary) {
    if (this.v2l_1 == null) {
      return '';
    }
    var serializer = new DFASerializer(this, vocabulary);
    return serializer.toString();
  }
  b2m() {
    if (this.v2l_1 == null) {
      return '';
    }
    var serializer = new LexerDFASerializer(this);
    return serializer.toString();
  }
}
class DFASerializer {
  constructor(dfa, vocabulary) {
    this.h2v_1 = dfa;
    this.i2v_1 = vocabulary;
  }
  toString() {
    if (this.h2v_1.v2l_1 == null) {
      return 'null';
    }
    var buf = StringBuilder.s();
    var states = this.h2v_1.g2v();
    var _iterator__ex2g4s = states.w();
    while (_iterator__ex2g4s.x()) {
      var s = _iterator__ex2g4s.y();
      var n = 0;
      var edges = s.b2h_1;
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
          if (!(t == null) && !(t.z2g_1 === 2147483647)) {
            buf.t(this.j2v(s));
            buf.t('-');
            buf.t(this.k2v(i));
            buf.t('->');
            buf.t(this.j2v(t));
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
  k2v(i) {
    return this.i2v_1.w1x(i - 1 | 0);
  }
  j2v(s) {
    var n = s.z2g_1;
    var baseStateStr = (s.c2h_1 ? ':' : '') + 's' + n + (s.f2h_1 ? '^' : '');
    var tmp;
    if (s.c2h_1) {
      var predicates = s.g2h_1;
      var tmp_0;
      if (!(predicates == null)) {
        tmp_0 = baseStateStr + '=>' + joinToString(predicates);
      } else {
        tmp_0 = baseStateStr + '=>' + s.d2h_1;
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
    this.i2q_1 = pred;
    this.j2q_1 = alt;
  }
  toString() {
    return '(' + toString_0(this.i2q_1) + ', ' + this.j2q_1 + ')';
  }
}
class DFAState {
  static l2v() {
    var $this = createThis(this);
    init_org_antlr_v4_kotlinruntime_dfa_DFAState($this);
    return $this;
  }
  static h2h(configs) {
    var $this = createThis(this);
    init_org_antlr_v4_kotlinruntime_dfa_DFAState($this);
    $this.a2h_1 = configs;
    return $this;
  }
  hashCode() {
    var hash = MurmurHash_instance.g2b(7);
    hash = MurmurHash_instance.h2b(hash, this.a2h_1.hashCode());
    hash = MurmurHash_instance.j2b(hash, 1);
    return hash;
  }
  equals(other) {
    if (this === other) {
      return true;
    }
    if (!(other instanceof DFAState)) {
      return false;
    }
    return this.a2h_1.equals(other.a2h_1);
  }
  toString() {
    var buf = StringBuilder.s();
    buf.af(this.z2g_1);
    buf.t(':');
    buf.z(this.a2h_1);
    if (this.c2h_1) {
      buf.t('=>');
      var predicates = this.g2h_1;
      if (!(predicates == null)) {
        buf.t(joinToString(predicates));
      } else {
        buf.af(this.d2h_1);
      }
    }
    return buf.toString();
  }
}
class LexerDFASerializer extends DFASerializer {
  constructor(dfa) {
    super(dfa, Companion_getInstance_5().d29_1);
  }
  k2v(i) {
    var buf = StringBuilder.s();
    buf.t("'");
    appendCodePoint(buf, i);
    buf.t("'");
    return buf.toString();
  }
}
class Companion_22 {
  constructor() {
    this.o2v_1 = 16;
    this.p2v_1 = 8;
    this.q2v_1 = 0.75;
  }
}
class SetIterator {
  constructor($outer, data) {
    this.u2v_1 = $outer;
    this.r2v_1 = data;
    this.s2v_1 = 0;
    this.t2v_1 = true;
  }
  x() {
    return this.s2v_1 < this.r2v_1.length;
  }
  y() {
    if (!this.x()) {
      throw NoSuchElementException.v5();
    }
    this.t2v_1 = false;
    var _unary__edvuaz = this.s2v_1;
    this.s2v_1 = _unary__edvuaz + 1 | 0;
    return this.r2v_1[_unary__edvuaz];
  }
  r5() {
    if (this.t2v_1) {
      throw IllegalStateException.ac();
    }
    this.u2v_1.j2c(this.r2v_1[this.s2v_1 - 1 | 0]);
    this.t2v_1 = true;
  }
}
class DoubleKeyMap {
  constructor() {
    this.w2r_1 = LinkedHashMap.mb();
  }
  z2r(k1, k2, v) {
    var data2 = this.w2r_1.r3(k1);
    var prev = null;
    if (data2 == null) {
      data2 = LinkedHashMap.mb();
      var tmp0 = this.w2r_1;
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
  x2r(k1, k2) {
    var tmp0_elvis_lhs = this.w2r_1.r3(k1);
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
    this.v2v_1 = 16;
    this.w2v_1 = 8;
    this.x2v_1 = 0.75;
  }
}
class Entry {
  constructor(key, value) {
    this.y2v_1 = key;
    this.z2v_1 = value;
  }
  toString() {
    return toString_1(this.y2v_1) + ':' + toString_1(this.z2v_1);
  }
  hashCode() {
    var result = this.y2v_1 == null ? 0 : hashCode(this.y2v_1);
    result = imul(result, 31) + (this.z2v_1 == null ? 0 : hashCode(this.z2v_1)) | 0;
    return result;
  }
  equals(other) {
    if (this === other)
      return true;
    if (!(other instanceof Entry))
      return false;
    var tmp0_other_with_cast = other instanceof Entry ? other : THROW_CCE();
    if (!equals(this.y2v_1, tmp0_other_with_cast.y2v_1))
      return false;
    if (!equals(this.z2v_1, tmp0_other_with_cast.z2v_1))
      return false;
    return true;
  }
}
class Companion_24 {
  constructor() {
    Companion_instance_24 = this;
    this.a2w_1 = new Int32Array(0);
    this.b2w_1 = 4;
    this.c2w_1 = 2147483639;
  }
}
class IntegerList {
  p25() {
    return this.d25_1 === 0;
  }
  static d2w() {
    Companion_getInstance_24();
    var $this = createThis(this);
    init_org_antlr_v4_kotlinruntime_misc_IntegerList($this);
    $this.c25_1 = Companion_getInstance_24().a2w_1;
    return $this;
  }
  x1z(value) {
    if (this.c25_1.length === this.d25_1) {
      ensureCapacity(this, this.d25_1 + 1 | 0);
    }
    this.c25_1[this.d25_1] = value;
    this.d25_1 = this.d25_1 + 1 | 0;
  }
  d2(index) {
    if (index < 0 || index >= this.d25_1) {
      throw IndexOutOfBoundsException.lc();
    }
    return this.c25_1[index];
  }
  x3(index) {
    var value = this.d2(index);
    var inductionVariable = 0;
    var last = (this.d25_1 - index | 0) - 1 | 0;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        this.c25_1[index + i | 0] = this.c25_1[(index + i | 0) + 1 | 0];
      }
       while (inductionVariable < last);
    this.c25_1[this.d25_1 - 1 | 0] = 0;
    this.d25_1 = this.d25_1 - 1 | 0;
    return value;
  }
  z1v() {
    return this.d25_1;
  }
  u3() {
    fill(this.c25_1, 0);
    this.d25_1 = 0;
  }
  m7() {
    var tmp;
    if (this.d25_1 === 0) {
      tmp = Companion_getInstance_24().a2w_1;
    } else {
      // Inline function 'kotlin.collections.copyOf' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp = this.c25_1.slice();
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
      tmp = !(this.d25_1 === other.d25_1);
    }
    if (tmp) {
      return false;
    }
    var inductionVariable = 0;
    var last = this.d25_1;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (!(this.c25_1[i] === other.c25_1[i])) {
          return false;
        }
      }
       while (inductionVariable < last);
    return true;
  }
  hashCode() {
    var hashCode = 1;
    var inductionVariable = 0;
    var last = this.d25_1;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        hashCode = imul(31, hashCode) + this.c25_1[i] | 0;
      }
       while (inductionVariable < last);
    return hashCode;
  }
  toString() {
    return joinToString_0(this.m7());
  }
}
class IntegerStack extends IntegerList {
  static n24() {
    var $this = this.d2w();
    init_org_antlr_v4_kotlinruntime_misc_IntegerStack($this);
    return $this;
  }
  n25(value) {
    return this.x1z(value);
  }
  r25() {
    return this.x3(this.z1v() - 1 | 0);
  }
  q25() {
    return this.d2(this.z1v() - 1 | 0);
  }
}
class Companion_25 {
  constructor() {
    Companion_instance_25 = this;
    this.t1w_1 = 1000;
    this.u1w_1 = new Interval(-1, -2);
    var tmp = this;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp.v1w_1 = Array(1001);
  }
  w1w(a, b) {
    if (!(a === b) || a < 0 || a > 1000) {
      return new Interval(a, b);
    }
    var interval = this.v1w_1[a];
    if (interval == null) {
      interval = new Interval(a, a);
      this.v1w_1[a] = interval;
    }
    return interval;
  }
}
class Interval {
  constructor(a, b) {
    Companion_getInstance_25();
    this.p1w_1 = a;
    this.q1w_1 = b;
  }
  e2w(other) {
    return this.p1w_1 < other.p1w_1 && this.q1w_1 < other.p1w_1;
  }
  f2w(other) {
    return this.p1w_1 > other.q1w_1;
  }
  g2w(other) {
    return this.e2w(other) || this.f2w(other);
  }
  h2w(other) {
    return this.p1w_1 === (other.q1w_1 + 1 | 0) || this.q1w_1 === (other.p1w_1 - 1 | 0);
  }
  i2w(other) {
    var tmp = Companion_getInstance_25();
    var tmp0 = this.p1w_1;
    // Inline function 'kotlin.math.min' call
    var b = other.p1w_1;
    var tmp_0 = Math.min(tmp0, b);
    var tmp0_0 = this.q1w_1;
    // Inline function 'kotlin.math.max' call
    var b_0 = other.q1w_1;
    var tmp$ret$1 = Math.max(tmp0_0, b_0);
    return tmp.w1w(tmp_0, tmp$ret$1);
  }
  equals(other) {
    var tmp;
    var tmp_0;
    if (other instanceof Interval) {
      tmp_0 = this.p1w_1 === other.p1w_1;
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = this.q1w_1 === other.q1w_1;
    } else {
      tmp = false;
    }
    return tmp;
  }
  hashCode() {
    var hash = 23;
    hash = imul(hash, 31) + this.p1w_1 | 0;
    hash = imul(hash, 31) + this.q1w_1 | 0;
    return hash;
  }
  toString() {
    return '' + this.p1w_1 + '..' + this.q1w_1;
  }
}
class Companion_26 {
  constructor() {
    Companion_instance_26 = this;
    var tmp = this;
    // Inline function 'kotlin.also' call
    var this_0 = this.w1w(0, 1114111);
    this_0.e2a(true);
    tmp.i2j_1 = this_0;
    var tmp_0 = this;
    // Inline function 'kotlin.also' call
    var this_1 = IntervalSet.w1z();
    this_1.e2a(true);
    tmp_0.j2j_1 = this_1;
  }
  k2j(a) {
    var s = IntervalSet.w1z();
    s.x1z(a);
    return s;
  }
  w1w(a, b) {
    var s = IntervalSet.w1z();
    s.y2d(a, b);
    return s;
  }
  j2w(left, right) {
    if (left.t22()) {
      return IntervalSet.w1z();
    }
    var result = IntervalSet.k2w(left);
    if (right.t22()) {
      return result;
    }
    var resultI = 0;
    var rightI = 0;
    $l$loop_4: while (resultI < result.u1z_1.b2() && rightI < right.u1z_1.b2()) {
      var resultInterval = result.u1z_1.d2(resultI);
      var rightInterval = right.u1z_1.d2(rightI);
      if (rightInterval.q1w_1 < resultInterval.p1w_1) {
        rightI = rightI + 1 | 0;
        continue $l$loop_4;
      }
      if (rightInterval.p1w_1 > resultInterval.q1w_1) {
        resultI = resultI + 1 | 0;
        continue $l$loop_4;
      }
      var beforeCurrent = null;
      var afterCurrent = null;
      if (rightInterval.p1w_1 > resultInterval.p1w_1) {
        beforeCurrent = new Interval(resultInterval.p1w_1, rightInterval.p1w_1 - 1 | 0);
      }
      if (rightInterval.q1w_1 < resultInterval.q1w_1) {
        afterCurrent = new Interval(rightInterval.q1w_1 + 1 | 0, resultInterval.q1w_1);
      }
      if (!(beforeCurrent == null)) {
        if (!(afterCurrent == null)) {
          result.u1z_1.v3(resultI, beforeCurrent);
          result.u1z_1.w3(resultI + 1 | 0, afterCurrent);
          resultI = resultI + 1 | 0;
          rightI = rightI + 1 | 0;
          continue $l$loop_4;
        } else {
          result.u1z_1.v3(resultI, beforeCurrent);
          resultI = resultI + 1 | 0;
          continue $l$loop_4;
        }
      } else {
        if (!(afterCurrent == null)) {
          result.u1z_1.v3(resultI, afterCurrent);
          rightI = rightI + 1 | 0;
          continue $l$loop_4;
        } else {
          result.u1z_1.x3(resultI);
          continue $l$loop_4;
        }
      }
    }
    return result;
  }
}
class IntervalSet {
  t22() {
    return this.u1z_1.b2() === 0;
  }
  s22() {
    if (this.t22()) {
      throw RuntimeException.ba('set is empty');
    }
    return this.u1z_1.d2(0).p1w_1;
  }
  e2a(value) {
    if (this.v1z_1 && !value) {
      throw IllegalStateException.l4("can't alter readonly IntervalSet");
    }
    this.v1z_1 = value;
  }
  static w1z() {
    Companion_getInstance_26();
    var $this = createThis(this);
    init_org_antlr_v4_kotlinruntime_misc_IntervalSet($this);
    $this.u1z_1 = ArrayList.y1(16);
    return $this;
  }
  static k2w(set) {
    Companion_getInstance_26();
    var $this = createThis(this);
    init_org_antlr_v4_kotlinruntime_misc_IntervalSet($this);
    $this.u1z_1 = ArrayList.y1(set.u1z_1.b2());
    $this.e23(set);
    return $this;
  }
  x1z(el) {
    return this.y2d(el, el);
  }
  y2d(a, b) {
    return add(this, Companion_getInstance_25().w1w(a, b));
  }
  e23(set) {
    if (set instanceof IntervalSet) {
      var setIntervals = set.u1z_1;
      var inductionVariable = 0;
      var last = setIntervals.b2();
      if (inductionVariable < last)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var I = setIntervals.d2(i);
          this.y2d(I.p1w_1, I.q1w_1);
        }
         while (inductionVariable < last);
    } else {
      var _iterator__ex2g4s = set.l2w().w();
      while (_iterator__ex2g4s.x()) {
        var value = _iterator__ex2g4s.y();
        this.x1z(value);
      }
    }
    return this;
  }
  v2k(elements) {
    if (elements.t22()) {
      return IntervalSet.w1z();
    }
    var tmp;
    if (elements instanceof IntervalSet) {
      tmp = elements;
    } else {
      var temp = IntervalSet.w1z();
      temp.e23(elements);
      tmp = temp;
    }
    var vocabularyIS = tmp;
    return vocabularyIS.m2w(this);
  }
  m2w(a) {
    if (a.t22()) {
      return IntervalSet.k2w(this);
    }
    if (a instanceof IntervalSet) {
      return Companion_getInstance_26().j2w(this, a);
    }
    var other = IntervalSet.w1z();
    other.e23(a);
    return Companion_getInstance_26().j2w(this, other);
  }
  l21(a) {
    var o = IntervalSet.w1z();
    o.e23(this);
    o.e23(a);
    return o;
  }
  vk(el) {
    var n = this.u1z_1.b2();
    var l = 0;
    var r = n - 1 | 0;
    while (l <= r) {
      var m = (l + r | 0) / 2 | 0;
      var I = this.u1z_1.d2(m);
      var a = I.p1w_1;
      var b = I.q1w_1;
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
    var hash = MurmurHash_instance.b2n();
    var _iterator__ex2g4s = this.u1z_1.w();
    while (_iterator__ex2g4s.x()) {
      var I = _iterator__ex2g4s.y();
      hash = MurmurHash_instance.h2b(hash, I.p1w_1);
      hash = MurmurHash_instance.h2b(hash, I.q1w_1);
    }
    hash = MurmurHash_instance.j2b(hash, imul(this.u1z_1.b2(), 2));
    return hash;
  }
  equals(other) {
    var tmp;
    if (other instanceof IntervalSet) {
      tmp = equals(this.u1z_1, other.u1z_1);
    } else {
      tmp = false;
    }
    return tmp;
  }
  toString() {
    return this.n2w(false);
  }
  n2w(elemAreChar) {
    if (this.u1z_1.u()) {
      return '{}';
    }
    var buf = StringBuilder.eb(64);
    if (this.z1v() > 1) {
      buf.t('{');
    }
    var n = this.u1z_1.b2();
    var index = 0;
    while (index < n) {
      var _unary__edvuaz = index;
      index = _unary__edvuaz + 1 | 0;
      var I = this.u1z_1.d2(_unary__edvuaz);
      var a = I.p1w_1;
      var b = I.q1w_1;
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
    if (this.z1v() > 1) {
      buf.t('}');
    }
    return buf.toString();
  }
  z21(vocabulary) {
    if (this.u1z_1.u()) {
      return '{}';
    }
    var buf = StringBuilder.eb(64);
    if (this.z1v() > 1) {
      buf.t('{');
    }
    var n = this.u1z_1.b2();
    var index = 0;
    while (index < n) {
      var _unary__edvuaz = index;
      index = _unary__edvuaz + 1 | 0;
      var I = this.u1z_1.d2(_unary__edvuaz);
      var a = I.p1w_1;
      var b = I.q1w_1;
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
    if (this.z1v() > 1) {
      buf.t('}');
    }
    return buf.toString();
  }
  z1v() {
    var numIntervals = this.u1z_1.b2();
    if (numIntervals === 1) {
      var firstInterval = this.u1z_1.d2(0);
      return (firstInterval.q1w_1 - firstInterval.p1w_1 | 0) + 1 | 0;
    }
    var n = 0;
    var inductionVariable = 0;
    if (inductionVariable < numIntervals)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var I = this.u1z_1.d2(i);
        n = n + ((I.q1w_1 - I.p1w_1 | 0) + 1 | 0) | 0;
      }
       while (inductionVariable < numIntervals);
    return n;
  }
  l2w() {
    var values = ArrayList.y1(32);
    var n = this.u1z_1.b2();
    var inductionVariable = 0;
    if (inductionVariable < n)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var I = this.u1z_1.d2(i);
        var a = I.p1w_1;
        var b = I.q1w_1;
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
  g23(el) {
    if (this.v1z_1) {
      throw IllegalStateException.l4("can't alter readonly IntervalSet");
    }
    var n = this.u1z_1.b2();
    var inductionVariable = 0;
    if (inductionVariable < n)
      $l$loop_2: do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var I = this.u1z_1.d2(i);
        var a = I.p1w_1;
        var b = I.q1w_1;
        if (el < a) {
          break $l$loop_2;
        }
        if (el === a && el === b) {
          this.u1z_1.x3(i);
          break $l$loop_2;
        }
        if (el === a) {
          I.p1w_1 = I.p1w_1 + 1 | 0;
          break $l$loop_2;
        }
        if (el === b) {
          I.q1w_1 = I.q1w_1 - 1 | 0;
          break $l$loop_2;
        }
        if (el < b) {
          var oldB = I.q1w_1;
          I.q1w_1 = el - 1 | 0;
          this.y2d(el + 1 | 0, oldB);
        }
      }
       while (inductionVariable < n);
  }
}
class MurmurHash {
  constructor() {
    this.f2b_1 = 0;
  }
  g2b(seed) {
    return seed;
  }
  b2n(seed, $super) {
    seed = seed === VOID ? 0 : seed;
    return $super === VOID ? this.g2b(seed) : $super.g2b.call(this, seed);
  }
  h2b(hash, value) {
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
  i2b(hash, value) {
    var tmp1_elvis_lhs = value == null ? null : hashCode(value);
    return this.h2b(hash, tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs);
  }
  j2b(hash, numberOfWords) {
    var tempHash = hash;
    tempHash = tempHash ^ imul(numberOfWords, 4);
    tempHash = tempHash ^ (tempHash >>> 16 | 0);
    tempHash = imul(tempHash, -2048144789);
    tempHash = tempHash ^ (tempHash >>> 13 | 0);
    tempHash = imul(tempHash, -1028477387);
    tempHash = tempHash ^ (tempHash >>> 16 | 0);
    return tempHash;
  }
  n2t(data, seed) {
    var hash = this.g2b(seed);
    var inductionVariable = 0;
    var last = data.length;
    while (inductionVariable < last) {
      var value = data[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      hash = this.i2b(hash, value);
    }
    hash = this.j2b(hash, data.length);
    return hash;
  }
}
class Companion_27 {
  constructor() {
    Companion_instance_27 = this;
    this.j2l_1 = new ObjectEqualityComparator();
  }
}
class ObjectEqualityComparator extends AbstractEqualityComparator {
  constructor() {
    Companion_getInstance_27();
    super();
  }
  n2c(obj) {
    var tmp1_elvis_lhs = obj == null ? null : hashCode(obj);
    return tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
  }
  p2c(a, b) {
    return a == null && b == null || equals(a, b);
  }
}
class Utils {
  o26(s, escapeSpaces) {
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
    this.o2w_1 = symbol;
    this.p2w_1 = null;
    this.q2w_1 = 0;
  }
  v28() {
    return this.o2w_1;
  }
  l28() {
    return this.q2w_1;
  }
  j1f() {
    return ensureNotNull(this.v28().j1f());
  }
  q28(value) {
    this.p2w_1 = value;
  }
  s28(i) {
    return null;
  }
  toString() {
    var tmp;
    if (this.v28().x1r() === -1) {
      tmp = '<EOF>';
    } else {
      tmp = ensureNotNull(this.v28().j1f());
    }
    return tmp;
  }
}
class ErrorNodeImpl extends TerminalNodeImpl {}
class Companion_28 {
  constructor() {
    Companion_instance_28 = this;
    this.r2w_1 = new ParseTreeWalker();
  }
}
class ParseTreeWalker {
  constructor() {
    Companion_getInstance_28();
  }
  s2w(listener, t) {
    if (isInterface(t, ErrorNode)) {
      listener.y27(t);
      return Unit_instance;
    } else {
      if (isInterface(t, TerminalNode)) {
        listener.x27(t);
        return Unit_instance;
      }
    }
    var r = isInterface(t, RuleNode) ? t : THROW_CCE();
    this.t2w(listener, r);
    var n = r.l28();
    var inductionVariable = 0;
    if (inductionVariable < n)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        this.s2w(listener, ensureNotNull(r.s28(i)));
      }
       while (inductionVariable < n);
    this.u2w(listener, r);
  }
  t2w(listener, r) {
    var tmp = r.m28();
    var ctx = tmp instanceof ParserRuleContext ? tmp : THROW_CCE();
    listener.q27(ctx);
    ctx.r27(listener);
  }
  u2w(listener, r) {
    var tmp = r.m28();
    var ctx = tmp instanceof ParserRuleContext ? tmp : THROW_CCE();
    ctx.t27(listener);
    listener.u27(ctx);
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
  static v2w(size) {
    var $this = createThis(this);
    var tmp = $this;
    // Inline function 'com.strumenta.antlrkotlin.runtime.newArray' call
    tmp.a2d_1 = Array(size);
    // Inline function 'kotlin.require' call
    if (!(size >= 0)) {
      var message = 'The initial bitset size must be equal or greater than 0';
      throw IllegalArgumentException.m1(toString_0(message));
    }
    return $this;
  }
  static b2d() {
    return this.v2w(64);
  }
  c2d(bitIndex) {
    if (bitIndex < 0) {
      throw IndexOutOfBoundsException.mc('bitIndex < 0: ' + bitIndex);
    }
    this.a2d_1[bitIndex] = true;
  }
  u2k(bitIndex) {
    if (bitIndex < 0) {
      throw IndexOutOfBoundsException.mc('bitIndex < 0: ' + bitIndex);
    }
    delete(this.a2d_1[bitIndex]);
  }
  d2(bitIndex) {
    if (bitIndex < 0) {
      throw IndexOutOfBoundsException.mc('bitIndex < 0: ' + bitIndex);
    }
    if (bitIndex >= this.a2d_1.length) {
      return false;
    }
    return this.a2d_1[bitIndex] === true;
  }
  g2p() {
    var c = 0;
    var inductionVariable = 0;
    var last = this.a2d_1.length - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (this.a2d_1[i] === true) {
          c = c + 1 | 0;
        }
      }
       while (inductionVariable <= last);
    return c;
  }
  f2p(startIndex) {
    if (startIndex < 0) {
      throw IndexOutOfBoundsException.mc('fromIndex < 0: ' + startIndex);
    }
    if (startIndex >= this.a2d_1.length) {
      return -1;
    }
    var inductionVariable = startIndex;
    var last = this.a2d_1.length;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (this.a2d_1[i] === true) {
          return i;
        }
      }
       while (inductionVariable < last);
    return -1;
  }
  p2s(another) {
    var inductionVariable = 0;
    var last = another.a2d_1.length;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var result = this.a2d_1[i] === true || another.a2d_1[i] === true;
        if (result) {
          this.a2d_1[i] = true;
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
        tmp_0 = contentEquals_1(this, this.a2d_1, other.a2d_1);
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    }
    return tmp;
  }
  hashCode() {
    var fqn = 'com.strumenta.antlrkotlin.runtime.BitSet';
    var hashCode = MurmurHash_instance.g2b(getStringHashCode(fqn));
    var on = 0;
    var inductionVariable = 0;
    var last = this.a2d_1.length - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (this.a2d_1[i] === true) {
          hashCode = MurmurHash_instance.h2b(hashCode, i);
          on = on + 1 | 0;
        }
      }
       while (inductionVariable <= last);
    return MurmurHash_instance.j2b(hashCode, on);
  }
  toString() {
    var sb = StringBuilder.s();
    var first = true;
    sb.t('{');
    var index = this.f2p(0);
    while (!(index === -1)) {
      if (!first) {
        sb.t(', ');
      } else {
        first = false;
      }
      sb.af(index);
      index = this.f2p(index + 1 | 0);
    }
    sb.t('}');
    return sb.toString();
  }
}
class IdentityEntry {
  constructor($outer, key, value) {
    this.z2w_1 = $outer;
    this.x2w_1 = key;
    this.y2w_1 = value;
  }
  j3() {
    return this.x2w_1;
  }
  k3() {
    return this.y2w_1;
  }
}
class IdentityEntriesView$iterator$1 {
  constructor($iterator, this$0) {
    this.b2x_1 = $iterator;
    this.c2x_1 = this$0;
    this.a2x_1 = null;
  }
  x() {
    return this.b2x_1.x();
  }
  y() {
    var _destruct__k2r9zo = this.b2x_1.y();
    var key = component1(_destruct__k2r9zo);
    var value = component2(_destruct__k2r9zo);
    var entry = new IdentityEntry(this.c2x_1, key, value);
    this.a2x_1 = entry;
    return entry;
  }
  r5() {
    // Inline function 'kotlin.checkNotNull' call
    var tmp0 = this.a2x_1;
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
    remove(this.c2x_1, lastEntry.x2w_1, lastEntry.y2w_1);
  }
}
class IdentityEntriesView extends AbstractMutableSet {
  static d2x(jsMap) {
    var $this = this.h7();
    $this.w2w_1 = jsMap;
    return $this;
  }
  b2() {
    return this.w2w_1.size;
  }
  u() {
    return this.w2w_1.size === 0;
  }
  e2x(element) {
    throw UnsupportedOperationException.l9('Adding is not supported on entries');
  }
  z1(element) {
    return this.e2x((!(element == null) ? isInterface(element, MutableEntry) : false) ? element : THROW_CCE());
  }
  f2x(element) {
    // Inline function 'com.strumenta.antlrkotlin.runtime.undefinedToNull' call
    var value = element.j3();
    var k = value === undefined ? null : value;
    return this.w2w_1.has(k) && this.w2w_1.get(k) === element.k3();
  }
  g2(element) {
    if (!(!(element == null) ? isInterface(element, MutableEntry) : false))
      return false;
    return this.f2x((!(element == null) ? isInterface(element, MutableEntry) : false) ? element : THROW_CCE());
  }
  w() {
    var iterator_0 = toKotlinIterator(iterator(this.w2w_1));
    return new IdentityEntriesView$iterator$1(iterator_0, this);
  }
}
class IdentityHashMap {
  constructor() {
    this.g2x_1 = new Map();
  }
  b2() {
    return this.g2x_1.size;
  }
  n3() {
    return IdentityKeysView.i2x(this);
  }
  o3() {
    return IdentityValuesView.k2x(this);
  }
  m2() {
    return IdentityEntriesView.d2x(this.g2x_1);
  }
  u() {
    return this.g2x_1.size === 0;
  }
  r3(key) {
    // Inline function 'com.strumenta.antlrkotlin.runtime.undefinedToNull' call
    var k = key === undefined ? null : key;
    // Inline function 'com.strumenta.antlrkotlin.runtime.undefinedToNull' call
    var value = this.g2x_1.get(k);
    return value === undefined ? null : value;
  }
  l3(key, value) {
    // Inline function 'com.strumenta.antlrkotlin.runtime.undefinedToNull' call
    var k = key === undefined ? null : key;
    var previousValue = this.g2x_1.get(k);
    this.g2x_1.set(k, value);
    // Inline function 'com.strumenta.antlrkotlin.runtime.undefinedToNull' call
    return previousValue === undefined ? null : previousValue;
  }
  m3(key) {
    // Inline function 'com.strumenta.antlrkotlin.runtime.undefinedToNull' call
    var k = key === undefined ? null : key;
    var removedValue = this.g2x_1.get(k);
    this.g2x_1.delete(k);
    // Inline function 'com.strumenta.antlrkotlin.runtime.undefinedToNull' call
    return removedValue === undefined ? null : removedValue;
  }
  p3(key) {
    // Inline function 'com.strumenta.antlrkotlin.runtime.undefinedToNull' call
    var k = key === undefined ? null : key;
    return this.g2x_1.has(k);
  }
  q3(value) {
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s = toKotlinIterator(this.g2x_1.values());
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
    this.l2x_1 = $entriesIterator;
  }
  x() {
    return this.l2x_1.x();
  }
  y() {
    return this.l2x_1.y().j3();
  }
  r5() {
    return this.l2x_1.r5();
  }
}
class IdentityKeysView extends AbstractMutableSet {
  static i2x(map) {
    var $this = this.h7();
    $this.h2x_1 = map;
    return $this;
  }
  b2() {
    return this.h2x_1.b2();
  }
  u() {
    return this.h2x_1.u();
  }
  p8(element) {
    return this.h2x_1.p3(element);
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
    var entriesIterator = this.h2x_1.m2().w();
    return new IdentityKeysView$iterator$1(entriesIterator);
  }
}
class IdentityValuesView$iterator$1 {
  constructor($entriesIterator) {
    this.m2x_1 = $entriesIterator;
  }
  x() {
    return this.m2x_1.x();
  }
  y() {
    return this.m2x_1.y().k3();
  }
  r5() {
    return this.m2x_1.r5();
  }
}
class IdentityValuesView extends AbstractMutableCollection {
  static k2x(map) {
    var $this = this.o5();
    $this.j2x_1 = map;
    return $this;
  }
  b2() {
    return this.j2x_1.b2();
  }
  u() {
    return this.j2x_1.u();
  }
  z8(element) {
    throw UnsupportedOperationException.l9('Adding is not supported on values');
  }
  z1(element) {
    return this.z8(element);
  }
  y8(element) {
    return this.j2x_1.q3(element);
  }
  g2(element) {
    if (!true)
      return false;
    return this.y8(element);
  }
  w() {
    var entriesIterator = this.j2x_1.m2().w();
    return new IdentityValuesView$iterator$1(entriesIterator);
  }
}
class KotlinIterator {
  constructor(jsIterator) {
    this.n2x_1 = jsIterator;
    this.o2x_1 = null;
  }
  x() {
    if (this.o2x_1 == null) {
      this.o2x_1 = this.n2x_1.next();
    }
    var tmp0_safe_receiver = this.o2x_1;
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.done;
    var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : !tmp1_safe_receiver;
    return tmp2_elvis_lhs == null ? false : tmp2_elvis_lhs;
  }
  y() {
    var tmp0_elvis_lhs = this.o2x_1;
    var value = tmp0_elvis_lhs == null ? this.n2x_1.next() : tmp0_elvis_lhs;
    this.o2x_1 = null;
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
  _this__u8e3s4.z1w_1 = null;
  _this__u8e3s4.a1x_1 = 0;
  _this__u8e3s4.b1x_1 = 0;
  _this__u8e3s4.c1x_1 = -1;
  _this__u8e3s4.d1x_1 = 0;
  _this__u8e3s4.e1x_1 = -1;
  _this__u8e3s4.f1x_1 = 0;
  _this__u8e3s4.g1x_1 = 0;
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
  captureStack(_this__u8e3s4, _this__u8e3s4.h21_1);
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
  _this__u8e3s4.k27_1 = null;
  _this__u8e3s4.l27_1 = null;
  _this__u8e3s4.m27_1 = null;
  _this__u8e3s4.n27_1 = null;
}
var Companion_instance_4;
function Companion_getInstance_4() {
  if (Companion_instance_4 === VOID)
    new Companion_4();
  return Companion_instance_4;
}
function init_org_antlr_v4_kotlinruntime_RuleContext(_this__u8e3s4) {
  _this__u8e3s4.b22_1 = null;
  _this__u8e3s4.c22_1 = -1;
  _this__u8e3s4.d22_1 = Companion_getInstance_25().u1w_1;
  _this__u8e3s4.e22_1 = -1;
  _this__u8e3s4.f22_1 = 0;
}
var RuntimeMetaData_instance;
function RuntimeMetaData_getInstance() {
  return RuntimeMetaData_instance;
}
function codePoint($this, index) {
  if (!(0 <= index ? index < $this.l29_1 : false)) {
    return -1;
  }
  var char = charCodeAt($this.i29_1, $this.k29_1[index]);
  if (isHighSurrogate(char)) {
    var containsUpper = $this.l29_1;
    var containsArg = index + 1 | 0;
    if (0 <= containsArg ? containsArg < containsUpper : false) {
      var low = charCodeAt($this.i29_1, $this.k29_1[index] + 1 | 0);
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
  _this__u8e3s4.u2a_1 = null;
  _this__u8e3s4.v2a_1 = 0;
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
  _this__u8e3s4.p2d_1 = false;
  _this__u8e3s4.q2d_1 = false;
  _this__u8e3s4.r2d_1 = false;
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
      var set = IntervalSet.w1z();
      sets.z1(set);
      var _unary__edvuaz_0 = pp;
      pp = _unary__edvuaz_0 + 1 | 0;
      var containsEof = !(data[_unary__edvuaz_0] === 0);
      if (containsEof) {
        set.x1z(-1);
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
          set.y2d(a, b);
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
    EmptyPredictionContext.j2k();
  return EmptyPredictionContext_instance;
}
var Companion_instance_13;
function Companion_getInstance_13() {
  return Companion_instance_13;
}
function checkNonGreedyDecision($this, source, target) {
  var tmp;
  if (source.c2l_1) {
    tmp = true;
  } else {
    var tmp_0;
    if (target instanceof DecisionState) {
      tmp_0 = target.p2a_1;
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
    tmp = System_getInstance().h1v(envName, defaultValue);
  } catch ($p) {
    var tmp_0;
    if ($p instanceof Exception) {
      var e = $p;
      System_getInstance().g1v_1.e1v(e.toString());
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
    Empty.i2t();
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
  var tmp = a.z2g_1;
  var tmp$ret$2 = b.z2g_1;
  return compareValues(tmp, tmp$ret$2);
}
function init_org_antlr_v4_kotlinruntime_dfa_DFAState(_this__u8e3s4) {
  _this__u8e3s4.z2g_1 = -1;
  _this__u8e3s4.a2h_1 = new ATNConfigSet();
  _this__u8e3s4.b2h_1 = null;
  _this__u8e3s4.c2h_1 = false;
  _this__u8e3s4.d2h_1 = 0;
  _this__u8e3s4.e2h_1 = null;
  _this__u8e3s4.f2h_1 = false;
  _this__u8e3s4.g2h_1 = null;
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
  if ($this.c25_1.length === 0) {
    tmp = 4;
  } else {
    tmp = $this.c25_1.length;
  }
  var newLength = tmp;
  while (newLength < capacity) {
    newLength = imul(newLength, 2);
    if (newLength < 0 || newLength > 2147483639) {
      newLength = 2147483639;
    }
  }
  $this.c25_1 = copyOf_0($this.c25_1, newLength);
}
function init_org_antlr_v4_kotlinruntime_misc_IntegerList(_this__u8e3s4) {
  Companion_getInstance_24();
  _this__u8e3s4.d25_1 = 0;
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
  if ($this.v1z_1) {
    throw IllegalStateException.l4("can't alter readonly IntervalSet");
  }
  if (addition.q1w_1 < addition.p1w_1) {
    return Unit_instance;
  }
  var iter = $this.u1z_1.y3();
  while (iter.x()) {
    var r = iter.y();
    if (addition.equals(r)) {
      return Unit_instance;
    }
    if (addition.h2w(r) || !addition.g2w(r)) {
      var bigger = addition.i2w(r);
      iter.h6(bigger);
      $l$loop: while (iter.x()) {
        var next = iter.y();
        if (!bigger.h2w(next) && bigger.g2w(next)) {
          break $l$loop;
        }
        iter.r5();
        iter.d6();
        iter.h6(bigger.i2w(next));
        iter.y();
      }
      return Unit_instance;
    }
    if (addition.e2w(r)) {
      iter.d6();
      iter.f6(addition);
      return Unit_instance;
    }
  }
  $this.u1z_1.z1(addition);
}
function elementName($this, vocabulary, a) {
  switch (a) {
    case -1:
      return '<EOF>';
    case -2:
      return '<EPSILON>';
    default:
      return vocabulary.w1x(a);
  }
}
function init_org_antlr_v4_kotlinruntime_misc_IntervalSet(_this__u8e3s4) {
  Companion_getInstance_26();
  _this__u8e3s4.v1z_1 = false;
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
  System_getInstance().f1v_1.e1v('Environment variables are not supported in the browser');
  return null;
}
function remove($this, key, value) {
  // Inline function 'com.strumenta.antlrkotlin.runtime.undefinedToNull' call
  var k = key === undefined ? null : key;
  if ($this.w2w_1.has(k)) {
    if ($this.w2w_1.get(k) === value) {
      return $this.w2w_1.delete(k);
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
protoOf(CommonToken).x1x = startPoint;
protoOf(CommonToken).y1x = endPoint;
initMetadataForClass(CommonToken, 'CommonToken', VOID, VOID, [WritableToken]);
initMetadataForCompanion(Companion_0);
initMetadataForClass(CommonTokenFactory, 'CommonTokenFactory', CommonTokenFactory);
initMetadataForClass(CommonTokenStream, 'CommonTokenStream');
initMetadataForCompanion(Companion_1);
initMetadataForClass(ConsoleErrorListener, 'ConsoleErrorListener', ConsoleErrorListener);
initMetadataForClass(DefaultErrorStrategy, 'DefaultErrorStrategy', DefaultErrorStrategy);
initMetadataForObject(DummyTokenStream, 'DummyTokenStream');
initMetadataForClass(EmptyStackException, 'EmptyStackException', EmptyStackException.k23);
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
initMetadataForClass(RuleContext, 'RuleContext', RuleContext.n28, VOID, [RuleNode]);
initMetadataForClass(ParserRuleContext, 'ParserRuleContext', ParserRuleContext.j28);
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
initMetadataForClass(ATNDeserializationOptions, 'ATNDeserializationOptions', ATNDeserializationOptions.s2d);
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
initMetadataForClass(Predicate, 'Predicate', Predicate.k2t);
initMetadataForClass(PrecedencePredicate, 'PrecedencePredicate', PrecedencePredicate.n2r, VOID, [Comparable]);
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
initMetadataForClass(DFAState, 'DFAState', DFAState.l2v);
initMetadataForClass(LexerDFASerializer, 'LexerDFASerializer');
initMetadataForCompanion(Companion_22);
initMetadataForClass(SetIterator, 'SetIterator');
initMetadataForClass(DoubleKeyMap, 'DoubleKeyMap', DoubleKeyMap);
initMetadataForCompanion(Companion_23);
initMetadataForClass(Entry, 'Entry');
initMetadataForCompanion(Companion_24);
initMetadataForClass(IntegerList, 'IntegerList', IntegerList.d2w);
initMetadataForClass(IntegerStack, 'IntegerStack', IntegerStack.n24);
initMetadataForCompanion(Companion_25);
initMetadataForClass(Interval, 'Interval');
initMetadataForCompanion(Companion_26);
initMetadataForClass(IntervalSet, 'IntervalSet', IntervalSet.w1z);
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
initMetadataForClass(BitSet, 'BitSet', BitSet.b2d);
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
