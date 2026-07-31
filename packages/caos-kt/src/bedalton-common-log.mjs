import {
  initMetadataForObject1cxne3s9w65el as initMetadataForObject,
  VOID3gxj6tk5isa35 as VOID,
  THROW_CCE2g6jy02ryeudk as THROW_CCE,
  isCharSequence1ju9jr1w86plq as isCharSequence,
  trim11nh7r46at6sx as trim,
  toString1pkumu07cwy4m as toString,
  Regexxgw0gjiagf4z as Regex,
  noWhenBranchMatchedException2a6r7ubxgky5j as noWhenBranchMatchedException,
  equals2au1ep9vhcato as equals,
  initMetadataForClassbxx6q50dy2s7 as initMetadataForClass,
  Unit_instancev9v8hjid95df as Unit_instance,
  Enum3alwj03lh1n41 as Enum,
  defineProp3ur6h3slcvq4x as defineProp,
  toString30pk9tzaqopn as toString_0,
  hashCodeq5arwsb9dgti as hashCode,
  getBooleanHashCode1bbj3u6b3v0a7 as getBooleanHashCode,
  ArrayList3it5z8td81qkl as ArrayList,
  LinkedHashMap1zhqxkxv3xnkl as LinkedHashMap,
  isBlank1dvkhjjvox3p0 as isBlank,
  repeat2w4c6j8zoq09o as repeat,
  isNumberiramasdbon0i as isNumber,
  numberToInt1ygmcfwhs2fkq as numberToInt,
  substringiqarkczpya5m as substring,
} from './kotlin-kotlin-stdlib.mjs';
//region block: imports
var imul = Math.imul;
//endregion
//region block: pre-declaration
class DefaultConsoleColors {
  constructor() {
    DefaultConsoleColors_instance = this;
    this.k1g_1 = get_consoleColorEscapeSequence() + '[0m';
    this.l1g_1 = get_consoleColorEscapeSequence() + '[1m';
    this.m1g_1 = get_consoleColorEscapeSequence() + '[1m';
    this.n1g_1 = get_consoleColorEscapeSequence() + '[2m';
    this.o1g_1 = get_consoleColorEscapeSequence() + '[4m';
    this.p1g_1 = get_consoleColorEscapeSequence() + '[5m';
    this.q1g_1 = get_consoleColorEscapeSequence() + '[7m';
    this.r1g_1 = get_consoleColorEscapeSequence() + '[8m';
    this.s1g_1 = get_consoleColorEscapeSequence() + '[30m';
    this.t1g_1 = get_consoleColorEscapeSequence() + '[31m';
    this.u1g_1 = get_consoleColorEscapeSequence() + '[32m';
    this.v1g_1 = get_consoleColorEscapeSequence() + '[33m';
    this.w1g_1 = get_consoleColorEscapeSequence() + '[34m';
    this.x1g_1 = get_consoleColorEscapeSequence() + '[35m';
    this.y1g_1 = get_consoleColorEscapeSequence() + '[36m';
    this.z1g_1 = get_consoleColorEscapeSequence() + '[38;5;15m';
    this.a1h_1 = get_consoleColorEscapeSequence() + '[40m';
    this.b1h_1 = get_consoleColorEscapeSequence() + '[41m';
    this.c1h_1 = get_consoleColorEscapeSequence() + '[42m';
    this.d1h_1 = get_consoleColorEscapeSequence() + '[43m';
    this.e1h_1 = get_consoleColorEscapeSequence() + '[44m';
    this.f1h_1 = get_consoleColorEscapeSequence() + '[45m';
    this.g1h_1 = get_consoleColorEscapeSequence() + '[46m';
    this.h1h_1 = get_consoleColorEscapeSequence() + '[48;5;15m';
    this.i1h_1 = get_consoleColorEscapeSequence() + '[4;30m';
    this.j1h_1 = get_consoleColorEscapeSequence() + '[4;31m';
    this.k1h_1 = get_consoleColorEscapeSequence() + '[4;32m';
    this.l1h_1 = get_consoleColorEscapeSequence() + '[4;33m';
    this.m1h_1 = get_consoleColorEscapeSequence() + '[4;34m';
    this.n1h_1 = get_consoleColorEscapeSequence() + '[4;35m';
    this.o1h_1 = get_consoleColorEscapeSequence() + '[4;36m';
    this.p1h_1 = get_consoleColorEscapeSequence() + '[4;37m';
  }
}
class LoggerColor {}
class BLACK extends LoggerColor {
  constructor() {
    BLACK_instance = null;
    super();
    BLACK_instance = this;
  }
}
class RED extends LoggerColor {
  constructor() {
    RED_instance = null;
    super();
    RED_instance = this;
  }
}
class GREEN extends LoggerColor {
  constructor() {
    GREEN_instance = null;
    super();
    GREEN_instance = this;
  }
}
class YELLOW extends LoggerColor {
  constructor() {
    YELLOW_instance = null;
    super();
    YELLOW_instance = this;
  }
}
class BLUE extends LoggerColor {
  constructor() {
    BLUE_instance = null;
    super();
    BLUE_instance = this;
  }
}
class MAGENTA extends LoggerColor {
  constructor() {
    MAGENTA_instance = null;
    super();
    MAGENTA_instance = this;
  }
}
class CYAN extends LoggerColor {
  constructor() {
    CYAN_instance = null;
    super();
    CYAN_instance = this;
  }
}
class WHITE extends LoggerColor {
  constructor() {
    WHITE_instance = null;
    super();
    WHITE_instance = this;
  }
}
class LogLevel extends Enum {
  constructor(name, ordinal, value) {
    super(name, ordinal);
    this.s1h_1 = value;
  }
}
class LoggerBuilder {
  constructor() {
    this.t1h_1 = null;
    this.u1h_1 = null;
    this.v1h_1 = null;
    this.w1h_1 = null;
    this.x1h_1 = null;
    this.y1h_1 = null;
  }
  withLog(log) {
    this.t1h_1 = log;
  }
  info(log) {
    this.u1h_1 = log;
    return this;
  }
  warning(log) {
    this.v1h_1 = log;
    return this;
  }
  error(log) {
    this.w1h_1 = log;
    return this;
  }
  logMemory(log) {
    this.x1h_1 = log;
    return this;
  }
  getColor(callback) {
    this.y1h_1 = callback;
    return this;
  }
  build() {
    return new CallbackLogger(this.t1h_1, this.u1h_1, this.v1h_1, this.w1h_1, this.x1h_1, this.y1h_1);
  }
}
class CallbackLogger {
  constructor(mLog, mInfo, mWarning, mError, mLogMemory, mGetColor, prependLogType) {
    prependLogType = prependLogType === VOID ? null : prependLogType;
    this.z1h_1 = mLog;
    this.a1i_1 = mInfo;
    this.b1i_1 = mWarning;
    this.c1i_1 = mError;
    this.d1i_1 = mLogMemory;
    this.e1i_1 = mGetColor;
    this.f1i_1 = prependLogType;
    delete this.prependLogType;
  }
  g1i(_set____db54di) {
    this.f1i_1 = _set____db54di;
  }
  h1i() {
    return this.f1i_1;
  }
  log(replace, message, color) {
    var tmp0_safe_receiver = this.z1h_1;
    if (tmp0_safe_receiver == null)
      null;
    else
      tmp0_safe_receiver(replace, message, color);
  }
  info(replace, message, color) {
    var tmp0_safe_receiver = this.a1i_1;
    if (tmp0_safe_receiver == null)
      null;
    else
      tmp0_safe_receiver(replace, message, color);
  }
  warning(message, color) {
    var tmp0_safe_receiver = this.b1i_1;
    if (tmp0_safe_receiver == null)
      null;
    else
      tmp0_safe_receiver(message, color);
  }
  error(message, color) {
    var tmp0_safe_receiver = this.c1i_1;
    if (tmp0_safe_receiver == null)
      null;
    else
      tmp0_safe_receiver(message, color);
  }
  logMemory() {
    var tmp0_safe_receiver = this.d1i_1;
    if (tmp0_safe_receiver == null)
      null;
    else
      tmp0_safe_receiver();
  }
  getColorPrefix(color) {
    var tmp0_elvis_lhs = this.e1i_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      tmp = getLogColorPrefix$ref();
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp(color);
  }
  toString() {
    return 'CallbackLogger(mLog=' + toString_0(this.z1h_1) + ', mInfo=' + toString_0(this.a1i_1) + ', mWarning=' + toString_0(this.b1i_1) + ', mError=' + toString_0(this.c1i_1) + ', mLogMemory=' + toString_0(this.d1i_1) + ', mGetColor=' + toString_0(this.e1i_1) + ', prependLogType=' + this.f1i_1 + ')';
  }
  hashCode() {
    var result = this.z1h_1 == null ? 0 : hashCode(this.z1h_1);
    result = imul(result, 31) + (this.a1i_1 == null ? 0 : hashCode(this.a1i_1)) | 0;
    result = imul(result, 31) + (this.b1i_1 == null ? 0 : hashCode(this.b1i_1)) | 0;
    result = imul(result, 31) + (this.c1i_1 == null ? 0 : hashCode(this.c1i_1)) | 0;
    result = imul(result, 31) + (this.d1i_1 == null ? 0 : hashCode(this.d1i_1)) | 0;
    result = imul(result, 31) + (this.e1i_1 == null ? 0 : hashCode(this.e1i_1)) | 0;
    result = imul(result, 31) + (this.f1i_1 == null ? 0 : getBooleanHashCode(this.f1i_1)) | 0;
    return result;
  }
  equals(other) {
    if (this === other)
      return true;
    if (!(other instanceof CallbackLogger))
      return false;
    if (!equals(this.z1h_1, other.z1h_1))
      return false;
    if (!equals(this.a1i_1, other.a1i_1))
      return false;
    if (!equals(this.b1i_1, other.b1i_1))
      return false;
    if (!equals(this.c1i_1, other.c1i_1))
      return false;
    if (!equals(this.d1i_1, other.d1i_1))
      return false;
    if (!equals(this.e1i_1, other.e1i_1))
      return false;
    if (!(this.f1i_1 == other.f1i_1))
      return false;
    return true;
  }
  get prependLogType() {
    return this.h1i();
  }
  set prependLogType(value) {
    this.g1i(value);
  }
}
class Log {
  constructor() {
    Log_instance = this;
    this.i1i_1 = 'log.LOG_NO_PRINT_PREFIX';
    this.j1i_1 = DefaultLoggerObject_getInstance();
    this.k1i_1 = false;
    this.l1i_1 = LogLevel_LOG_2_getInstance();
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.m1i_1 = ArrayList.b2();
    this.n1i_1 = false;
    var tmp_0 = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp_0.o1i_1 = ArrayList.b2();
    var tmp_1 = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp_1.p1i_1 = LinkedHashMap.tb();
  }
  q1i() {
    return this.j1i_1;
  }
  r1i() {
    return this.l1i_1;
  }
  s1i() {
    return this.k1i_1;
  }
  t1i(className, message) {
    this.t1i(className, message);
  }
  u1i(message) {
    this.v1i(null, message);
  }
  v1i(color, message) {
    this.w1i(null, color, message);
  }
  x1i(className, message) {
    this.w1i(className, null, message);
  }
  w1i(className, color, message) {
    if (!this.s1i() && this.r1i().s1h_1 >= LogLevel_ERROR_getInstance().s1h_1) {
      this.q1i().error(this.y1i('ERROR', className, message), color);
    }
  }
  y1i(kind, className, message) {
    var tmp0_elvis_lhs = this.q1i().prependLogType;
    var prependLog = tmp0_elvis_lhs == null ? DefaultLoggerObject_getInstance().z1i_1 : tmp0_elvis_lhs;
    var tmp;
    if (prependLog && !this.a1j('log.LOG_NO_PRINT_PREFIX')) {
      tmp = '**' + kind + '** ';
    } else {
      tmp = '';
    }
    var prefix = tmp;
    var tmp_0;
    // Inline function 'kotlin.text.isNullOrBlank' call
    if (!(className == null || isBlank(className))) {
      tmp_0 = className + '::';
    } else {
      tmp_0 = '';
    }
    return prefix + tmp_0 + message;
  }
  a1j(mode) {
    return this.m1i_1.n2(mode);
  }
  b1j(logger) {
    this.j1i_1 = logger;
  }
}
class DefaultLoggerObject {
  constructor() {
    DefaultLoggerObject_instance = this;
    this.z1i_1 = false;
    delete this.prependLogType;
  }
  h1i() {
    return this.z1i_1;
  }
  log(replace, message, color) {
    var finalMessage = wrap(this, color, message);
    if (replace) {
      logReplace(finalMessage, Console$log$ref(console));
    } else {
      console.log(finalMessage);
    }
    lastLineLength = finalMessage.length;
  }
  info(replace, message, color) {
    var finalMessage = wrap(this, color, message);
    if (replace) {
      logReplace(finalMessage, Console$info$ref(console));
    } else {
      console.info(finalMessage);
    }
    lastLineLength = finalMessage.length;
  }
  warning(message, color) {
    var finalMessage = wrap(this, color, message);
    lastLineLength = finalMessage.length;
    console.warn(finalMessage);
  }
  logMemory() {
    console.log('Cannot log memory');
    lastLineLength = 17;
    var tmp0_safe_receiver = nodeRequires;
    var process = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.process();
    if (!(process == null)) {
      var tmp = console;
      var tmp1_safe_receiver = process.memoryUsage;
      var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : tmp1_safe_receiver();
      tmp.log(tmp2_elvis_lhs == null ? '' : tmp2_elvis_lhs);
    }
  }
  error(message, color) {
    var finalMessage = wrap(this, color, message);
    lastLineLength = finalMessage.length;
    console.error(finalMessage);
  }
  getColorPrefix(color) {
    return getLogColorPrefix(color);
  }
  get prependLogType() {
    return this.h1i();
  }
}
class createSingleFunctionLogger$1 {
  constructor($logger) {
    this.c1j_1 = $logger;
    delete this.prependLogType;
  }
  log(replace, message, color) {
    this.c1j_1('log', message);
  }
  info(replace, message, color) {
    this.c1j_1('info', message);
  }
  warning(message, color) {
    this.c1j_1('warning', message);
  }
  error(message, color) {
    this.c1j_1('error', message);
  }
  getColorPrefix(color) {
    return null;
  }
  logMemory() {
  }
  h1i() {
    return null;
  }
  get prependLogType() {
    return this.h1i();
  }
}
//endregion
var DefaultConsoleColors_instance;
function DefaultConsoleColors_getInstance() {
  if (DefaultConsoleColors_instance === VOID)
    new DefaultConsoleColors();
  return DefaultConsoleColors_instance;
}
function get_namespacePrefixRegex() {
  _init_properties_DefaultLoggerObject_kt__11m6n2();
  return namespacePrefixRegex;
}
var namespacePrefixRegex;
function getNamespacePrefix(_this__u8e3s4) {
  _init_properties_DefaultLoggerObject_kt__11m6n2();
  // Inline function 'kotlin.text.replace' call
  // Inline function 'kotlin.text.trim' call
  var this_0 = get_namespacePrefixRegex().eg(_this__u8e3s4, '$1');
  return toString(trim(isCharSequence(this_0) ? this_0 : THROW_CCE()));
}
function stripNamespacePrefix(_this__u8e3s4) {
  _init_properties_DefaultLoggerObject_kt__11m6n2();
  // Inline function 'kotlin.text.replace' call
  return get_namespacePrefixRegex().eg(_this__u8e3s4, '$2');
}
var properties_initialized_DefaultLoggerObject_kt_gbdsjk;
function _init_properties_DefaultLoggerObject_kt__11m6n2() {
  if (!properties_initialized_DefaultLoggerObject_kt_gbdsjk) {
    properties_initialized_DefaultLoggerObject_kt_gbdsjk = true;
    // Inline function 'kotlin.text.toRegex' call
    var this_0 = '^%([^%]+)%(.*)$';
    namespacePrefixRegex = Regex.xf(this_0);
  }
}
function getLogColorPrefix(color) {
  if (color == null) {
    return null;
  }
  var tmp;
  if (equals(color, BLACK_getInstance())) {
    tmp = DefaultConsoleColors_getInstance().s1g_1;
  } else if (equals(color, RED_getInstance())) {
    tmp = DefaultConsoleColors_getInstance().t1g_1;
  } else if (equals(color, GREEN_getInstance())) {
    tmp = DefaultConsoleColors_getInstance().u1g_1;
  } else if (equals(color, YELLOW_getInstance())) {
    tmp = DefaultConsoleColors_getInstance().v1g_1;
  } else if (equals(color, BLUE_getInstance())) {
    tmp = DefaultConsoleColors_getInstance().w1g_1;
  } else if (equals(color, MAGENTA_getInstance())) {
    tmp = DefaultConsoleColors_getInstance().x1g_1;
  } else if (equals(color, CYAN_getInstance())) {
    tmp = DefaultConsoleColors_getInstance().y1g_1;
  } else if (equals(color, WHITE_getInstance())) {
    tmp = DefaultConsoleColors_getInstance().z1g_1;
  } else {
    noWhenBranchMatchedException();
  }
  return tmp;
}
var BLACK_instance;
function BLACK_getInstance() {
  if (BLACK_instance === VOID)
    new BLACK();
  return BLACK_instance;
}
var RED_instance;
function RED_getInstance() {
  if (RED_instance === VOID)
    new RED();
  return RED_instance;
}
var GREEN_instance;
function GREEN_getInstance() {
  if (GREEN_instance === VOID)
    new GREEN();
  return GREEN_instance;
}
var YELLOW_instance;
function YELLOW_getInstance() {
  if (YELLOW_instance === VOID)
    new YELLOW();
  return YELLOW_instance;
}
var BLUE_instance;
function BLUE_getInstance() {
  if (BLUE_instance === VOID)
    new BLUE();
  return BLUE_instance;
}
var MAGENTA_instance;
function MAGENTA_getInstance() {
  if (MAGENTA_instance === VOID)
    new MAGENTA();
  return MAGENTA_instance;
}
var CYAN_instance;
function CYAN_getInstance() {
  if (CYAN_instance === VOID)
    new CYAN();
  return CYAN_instance;
}
var WHITE_instance;
function WHITE_getInstance() {
  if (WHITE_instance === VOID)
    new WHITE();
  return WHITE_instance;
}
var LogLevel_LOG_2_instance;
var LogLevel_LOG_1_instance;
var LogLevel_INFO_instance;
var LogLevel_TRACE_instance;
var LogLevel_WARN_instance;
var LogLevel_ERROR_instance;
var LogLevel_entriesInitialized;
function LogLevel_initEntries() {
  if (LogLevel_entriesInitialized)
    return Unit_instance;
  LogLevel_entriesInitialized = true;
  LogLevel_LOG_2_instance = new LogLevel('LOG_2', 0, 5);
  LogLevel_LOG_1_instance = new LogLevel('LOG_1', 1, 4);
  LogLevel_INFO_instance = new LogLevel('INFO', 2, 3);
  LogLevel_TRACE_instance = new LogLevel('TRACE', 3, 3);
  LogLevel_WARN_instance = new LogLevel('WARN', 4, 2);
  LogLevel_ERROR_instance = new LogLevel('ERROR', 5, 1);
}
function LogLevel_LOG_2_getInstance() {
  LogLevel_initEntries();
  return LogLevel_LOG_2_instance;
}
function LogLevel_ERROR_getInstance() {
  LogLevel_initEntries();
  return LogLevel_ERROR_instance;
}
function getLogColorPrefix$ref() {
  var l = (p0) => getLogColorPrefix(p0);
  l.callableName = 'getLogColorPrefix';
  return l;
}
var Log_instance;
function Log_getInstance() {
  if (Log_instance === VOID)
    new Log();
  return Log_instance;
}
function get_consoleColorEscapeSequence() {
  return consoleColorEscapeSequence;
}
var consoleColorEscapeSequence;
var lastLineLength;
var nodeRequires;
function setNodeLoggingImports(requires) {
  nodeRequires = requires;
}
function wrap($this, color, message) {
  var colorPrefix = $this.getColorPrefix(color);
  var tmp;
  if (!(colorPrefix == null)) {
    tmp = getNamespacePrefix(message) + colorPrefix + stripNamespacePrefix(message) + DefaultConsoleColors_getInstance().k1g_1;
  } else {
    tmp = message;
  }
  return tmp;
}
function Console$log$ref(p0) {
  return (receiver) => {
    p0.log(receiver);
    return Unit_instance;
  };
}
function Console$info$ref(p0) {
  return (receiver) => {
    p0.info(receiver);
    return Unit_instance;
  };
}
var DefaultLoggerObject_instance;
function DefaultLoggerObject_getInstance() {
  if (DefaultLoggerObject_instance === VOID)
    new DefaultLoggerObject();
  return DefaultLoggerObject_instance;
}
function logReplace(message, fallback) {
  var tmp = typeof window !== 'undefined';
  if ((!(tmp == null) ? typeof tmp === 'boolean' : false) ? tmp : THROW_CCE()) {
    fallback(message);
    return Unit_instance;
  }
  var tmp0_safe_receiver = nodeRequires;
  var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.process();
  var stdout = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.stdout;
  var tmp_0;
  if (stdout == null) {
    tmp_0 = true;
  } else {
    var tmp2_safe_receiver = stdout.constructor;
    tmp_0 = (tmp2_safe_receiver == null ? null : tmp2_safe_receiver.name) != 'WriteStream';
  }
  if (tmp_0) {
    fallback(message);
    return Unit_instance;
  }
  var tmp3_safe_receiver = nodeRequires;
  var readline = tmp3_safe_receiver == null ? null : tmp3_safe_receiver.readline();
  if (readline == null) {
    fallback(message);
    return Unit_instance;
  }
  readline.clearLine(stdout);
  readline.cursorTo(stdout, 0);
  var underflow = message.length - lastLineLength | 0;
  var tmp_1;
  if (underflow > 0) {
    tmp_1 = repeat(' ', underflow);
  } else {
    tmp_1 = '';
  }
  var tail = tmp_1;
  var messagePadded = message + tail;
  var tmp_2 = stdout.columns;
  var tmp0 = numberToInt(isNumber(tmp_2) ? tmp_2 : THROW_CCE());
  // Inline function 'kotlin.math.min' call
  var b = messagePadded.length;
  var tmp$ret$0 = Math.min(tmp0, b);
  stdout.write(substring(messagePadded, 0, tmp$ret$0), 'utf8');
}
function setLogger(logger) {
  Log_getInstance().b1j(logger);
}
function setSingleFunctionLogger(logger) {
  setLogger(createSingleFunctionLogger(logger));
}
function createSingleFunctionLogger(logger) {
  return new createSingleFunctionLogger$1(logger);
}
//region block: post-declaration
initMetadataForObject(DefaultConsoleColors, 'DefaultConsoleColors');
initMetadataForClass(LoggerColor, 'LoggerColor');
initMetadataForObject(BLACK, 'BLACK');
initMetadataForObject(RED, 'RED');
initMetadataForObject(GREEN, 'GREEN');
initMetadataForObject(YELLOW, 'YELLOW');
initMetadataForObject(BLUE, 'BLUE');
initMetadataForObject(MAGENTA, 'MAGENTA');
initMetadataForObject(CYAN, 'CYAN');
initMetadataForObject(WHITE, 'WHITE');
initMetadataForClass(LogLevel, 'LogLevel');
initMetadataForClass(LoggerBuilder, 'LoggerBuilder', LoggerBuilder);
initMetadataForClass(CallbackLogger, 'CallbackLogger');
initMetadataForObject(Log, 'Log');
initMetadataForObject(DefaultLoggerObject, 'DefaultLoggerObject');
initMetadataForClass(createSingleFunctionLogger$1);
//endregion
//region block: init
consoleColorEscapeSequence = '\x1B';
lastLineLength = 0;
nodeRequires = null;
//endregion
//region block: exports
defineProp(LoggerColor, 'BLACK', BLACK_getInstance, VOID, true);
defineProp(LoggerColor, 'RED', RED_getInstance, VOID, true);
defineProp(LoggerColor, 'GREEN', GREEN_getInstance, VOID, true);
defineProp(LoggerColor, 'YELLOW', YELLOW_getInstance, VOID, true);
defineProp(LoggerColor, 'BLUE', BLUE_getInstance, VOID, true);
defineProp(LoggerColor, 'MAGENTA', MAGENTA_getInstance, VOID, true);
defineProp(LoggerColor, 'CYAN', CYAN_getInstance, VOID, true);
defineProp(LoggerColor, 'WHITE', WHITE_getInstance, VOID, true);
export {
  LoggerColor as LoggerColor,
  LoggerBuilder as LoggerBuilder,
  setNodeLoggingImports as setNodeLoggingImports,
  setLogger as setLogger,
  setSingleFunctionLogger as setSingleFunctionLogger,
};
export {
  createSingleFunctionLogger as createSingleFunctionLogger3kyaf7giz9xxr,
  Log_getInstance as Log_getInstance1ciirpgt53ci1,
};
//endregion

//# sourceMappingURL=bedalton-common-log.mjs.map
