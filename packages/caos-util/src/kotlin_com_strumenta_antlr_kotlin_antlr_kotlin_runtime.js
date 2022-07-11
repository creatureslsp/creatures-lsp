(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin_kotlin.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin_kotlin.js'));
  else {
    if (typeof kotlin_kotlin === 'undefined') {
      throw new Error("Error loading module 'kotlin_com_strumenta_antlr_kotlin_antlr_kotlin_runtime'. Its dependency 'kotlin_kotlin' was not found. Please, check whether 'kotlin_kotlin' is loaded prior to 'kotlin_com_strumenta_antlr_kotlin_antlr_kotlin_runtime'.");
    }
    root.kotlin_com_strumenta_antlr_kotlin_antlr_kotlin_runtime = factory(typeof kotlin_com_strumenta_antlr_kotlin_antlr_kotlin_runtime === 'undefined' ? {} : kotlin_com_strumenta_antlr_kotlin_antlr_kotlin_runtime, kotlin_kotlin);
  }
}(this, function (_, kotlin_kotlin) {
  //region block: imports
  var imul = Math.imul;
  var Unit_getInstance = kotlin_kotlin.$crossModule$.Unit_getInstance;
  var println = kotlin_kotlin.$crossModule$.println;
  var toString = kotlin_kotlin.$crossModule$.toString_1;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$crossModule$.IllegalArgumentException_init_$Create$_1;
  var charSequenceLength = kotlin_kotlin.$crossModule$.charSequenceLength;
  var ArrayList_init_$Create$ = kotlin_kotlin.$crossModule$.ArrayList_init_$Create$;
  var charSequenceGet = kotlin_kotlin.$crossModule$.charSequenceGet;
  var Char = kotlin_kotlin.$crossModule$.Char;
  var toCharArray = kotlin_kotlin.$crossModule$.toCharArray;
  var contentEquals = kotlin_kotlin.$crossModule$.contentEquals;
  var contentEquals_0 = kotlin_kotlin.$crossModule$.contentEquals_1;
  var NullPointerException_init_$Create$ = kotlin_kotlin.$crossModule$.NullPointerException_init_$Create$;
  var ensureNotNull = kotlin_kotlin.$crossModule$.ensureNotNull;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$crossModule$.IllegalStateException_init_$Create$_1;
  var THROW_CCE = kotlin_kotlin.$crossModule$.THROW_CCE;
  var isInterface = kotlin_kotlin.$crossModule$.isInterface;
  var IndexOutOfBoundsException_init_$Create$ = kotlin_kotlin.$crossModule$.IndexOutOfBoundsException_init_$Create$_1;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$crossModule$.ArrayList_init_$Create$_1;
  var HashSet_init_$Create$ = kotlin_kotlin.$crossModule$.HashSet_init_$Create$;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$crossModule$.StringBuilder_init_$Create$;
  var Pair = kotlin_kotlin.$crossModule$.Pair;
  var replace$default = kotlin_kotlin.$crossModule$.replace$default;
  var captureStack = kotlin_kotlin.$crossModule$.captureStack;
  var NotImplementedError_init_$Create$ = kotlin_kotlin.$crossModule$.NotImplementedError_init_$Create$;
  var RuntimeException_init_$Create$ = kotlin_kotlin.$crossModule$.RuntimeException_init_$Create$;
  var Char__toInt_impl_2402388783 = kotlin_kotlin.$crossModule$.Char__toInt_impl_2402388783;
  var numberToChar = kotlin_kotlin.$crossModule$.numberToChar;
  var toString_0 = kotlin_kotlin.$crossModule$.toString;
  var emptyList = kotlin_kotlin.$crossModule$.emptyList;
  var RuntimeException = kotlin_kotlin.$crossModule$.RuntimeException;
  var RuntimeException_init_$Init$ = kotlin_kotlin.$crossModule$.RuntimeException_init_$Init$;
  var HashMap_init_$Create$ = kotlin_kotlin.$crossModule$.HashMap_init_$Create$;
  var toMap = kotlin_kotlin.$crossModule$.toMap;
  var UnsupportedOperationException_init_$Create$ = kotlin_kotlin.$crossModule$.UnsupportedOperationException_init_$Create$_1;
  var to = kotlin_kotlin.$crossModule$.to;
  var toMap_0 = kotlin_kotlin.$crossModule$.toMap_1;
  var List = kotlin_kotlin.$crossModule$.List;
  var listOf = kotlin_kotlin.$crossModule$.listOf_1;
  var isHighSurrogate = kotlin_kotlin.$crossModule$.isHighSurrogate;
  var until = kotlin_kotlin.$crossModule$.until;
  var hasSurrogatePairAt = kotlin_kotlin.$crossModule$.hasSurrogatePairAt;
  var toIntArray = kotlin_kotlin.$crossModule$.toIntArray;
  var fillArrayVal = kotlin_kotlin.$crossModule$.fillArrayVal;
  var copyOf = kotlin_kotlin.$crossModule$.copyOf_8;
  var _Char___init__impl__380027157 = kotlin_kotlin.$crossModule$._Char___init__impl__380027157;
  var equals = kotlin_kotlin.$crossModule$.equals;
  var split$default = kotlin_kotlin.$crossModule$.split$default_1;
  var Regex_init_$Create$ = kotlin_kotlin.$crossModule$.Regex_init_$Create$;
  var count = kotlin_kotlin.$crossModule$.count;
  var last = kotlin_kotlin.$crossModule$.last_2;
  var none = kotlin_kotlin.$crossModule$.none;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$crossModule$.LinkedHashMap_init_$Create$_1;
  var NotImplementedError = kotlin_kotlin.$crossModule$.NotImplementedError;
  var hashCode = kotlin_kotlin.$crossModule$.hashCode;
  var HashSet_init_$Create$_0 = kotlin_kotlin.$crossModule$.HashSet_init_$Create$_1;
  var UnsupportedOperationException_init_$Create$_0 = kotlin_kotlin.$crossModule$.UnsupportedOperationException_init_$Create$;
  var Set = kotlin_kotlin.$crossModule$.Set;
  var THROW_ISE = kotlin_kotlin.$crossModule$.THROW_ISE;
  var Enum = kotlin_kotlin.$crossModule$.Enum;
  var toLong = kotlin_kotlin.$crossModule$.toLong;
  var Long = kotlin_kotlin.$crossModule$.Long;
  var copyOf_0 = kotlin_kotlin.$crossModule$.copyOf;
  var Companion_getInstance = kotlin_kotlin.$crossModule$.Companion_getInstance;
  var IllegalStateException_init_$Create$_0 = kotlin_kotlin.$crossModule$.IllegalStateException_init_$Create$;
  var copyToArray = kotlin_kotlin.$crossModule$.copyToArray;
  var IntCompanionObject_getInstance = kotlin_kotlin.$crossModule$.IntCompanionObject_getInstance;
  var _get_lastIndex__339712501 = kotlin_kotlin.$crossModule$._get_lastIndex__339712501_1;
  var filterNotNull = kotlin_kotlin.$crossModule$.filterNotNull;
  var joinToString$default = kotlin_kotlin.$crossModule$.joinToString$default_2;
  var copyOf_1 = kotlin_kotlin.$crossModule$.copyOf_9;
  var Comparable = kotlin_kotlin.$crossModule$.Comparable;
  var toList = kotlin_kotlin.$crossModule$.toList_1;
  var joinToString$default_0 = kotlin_kotlin.$crossModule$.joinToString$default_1;
  var Comparator = kotlin_kotlin.$crossModule$.Comparator;
  var compareValues = kotlin_kotlin.$crossModule$.compareValues;
  var ArrayList_init_$Create$_1 = kotlin_kotlin.$crossModule$.ArrayList_init_$Create$_2;
  var sortWith = kotlin_kotlin.$crossModule$.sortWith;
  var isArray = kotlin_kotlin.$crossModule$.isArray;
  var StringBuilder = kotlin_kotlin.$crossModule$.StringBuilder;
  var NoSuchElementException_init_$Create$ = kotlin_kotlin.$crossModule$.NoSuchElementException_init_$Create$;
  var MutableIterator = kotlin_kotlin.$crossModule$.MutableIterator;
  var numberToInt = kotlin_kotlin.$crossModule$.numberToInt;
  var isObject = kotlin_kotlin.$crossModule$.isObject;
  var MutableSet = kotlin_kotlin.$crossModule$.MutableSet;
  var toString_1 = kotlin_kotlin.$crossModule$.toString_3;
  var filterNotNull_0 = kotlin_kotlin.$crossModule$.filterNotNull_1;
  var collectionSizeOrDefault = kotlin_kotlin.$crossModule$.collectionSizeOrDefault;
  var addAll = kotlin_kotlin.$crossModule$.addAll_1;
  var toMutableSet = kotlin_kotlin.$crossModule$.toMutableSet;
  var toMutableList = kotlin_kotlin.$crossModule$.toMutableList;
  var MutableMap = kotlin_kotlin.$crossModule$.MutableMap;
  var IllegalArgumentException_init_$Create$_0 = kotlin_kotlin.$crossModule$.IllegalArgumentException_init_$Create$;
  var toTypedArray = kotlin_kotlin.$crossModule$.toTypedArray;
  var checkIndexOverflow = kotlin_kotlin.$crossModule$.checkIndexOverflow;
  var IndexOutOfBoundsException_init_$Create$_0 = kotlin_kotlin.$crossModule$.IndexOutOfBoundsException_init_$Create$;
  var sort = kotlin_kotlin.$crossModule$.sort;
  var joinToString$default_1 = kotlin_kotlin.$crossModule$.joinToString$default;
  var indexOf = kotlin_kotlin.$crossModule$.indexOf_2;
  var numberRangeToNumber = kotlin_kotlin.$crossModule$.numberRangeToNumber;
  var sliceArray = kotlin_kotlin.$crossModule$.sliceArray_1;
  var charArray = kotlin_kotlin.$crossModule$.charArray;
  var toTypedArray_0 = kotlin_kotlin.$crossModule$.toTypedArray_1;
  var RuntimeException_init_$Create$_0 = kotlin_kotlin.$crossModule$.RuntimeException_init_$Create$_1;
  var CoroutineImpl = kotlin_kotlin.$crossModule$.CoroutineImpl;
  var _get_COROUTINE_SUSPENDED__2870145053 = kotlin_kotlin.$crossModule$._get_COROUTINE_SUSPENDED__2870145053;
  var arrayIterator = kotlin_kotlin.$crossModule$.arrayIterator;
  var minOrNull = kotlin_kotlin.$crossModule$.minOrNull;
  var maxOrNull = kotlin_kotlin.$crossModule$.maxOrNull;
  var toLong_0 = kotlin_kotlin.$crossModule$.toLong_2;
  var getKClassFromExpression = kotlin_kotlin.$crossModule$.getKClassFromExpression;
  var _get_js__1413122402 = kotlin_kotlin.$crossModule$._get_js__1413122402;
  var uppercaseChar = kotlin_kotlin.$crossModule$.uppercaseChar;
  var _get_kotlin__1752270378 = kotlin_kotlin.$crossModule$._get_kotlin__1752270378;
  var Annotation = kotlin_kotlin.$crossModule$.Annotation;
  //endregion
  'use strict';
  //region block: pre-declaration
  function startPoint() {
    return new Point(this._get_line__802561239_d9to7r_k$(), this._get_charPositionInLine__2377044051_vpvr1p_k$());
  }
  function endPoint() {
    return this._get_text__809840318_de5ose_k$() == null ? null : (new Point(this._get_line__802561239_d9to7r_k$(), this._get_charPositionInLine__2377044051_vpvr1p_k$())).advance_fikpbz_k$(ensureNotNull(this._get_text__809840318_de5ose_k$()));
  }
  CommonTokenStream.prototype = Object.create(BufferedTokenStream.prototype);
  CommonTokenStream.prototype.constructor = CommonTokenStream;
  RecognitionException.prototype = Object.create(RuntimeException.prototype);
  RecognitionException.prototype.constructor = RecognitionException;
  FailedPredicateException.prototype = Object.create(RecognitionException.prototype);
  FailedPredicateException.prototype.constructor = FailedPredicateException;
  InputMismatchException.prototype = Object.create(RecognitionException.prototype);
  InputMismatchException.prototype.constructor = InputMismatchException;
  Lexer.prototype = Object.create(Recognizer.prototype);
  Lexer.prototype.constructor = Lexer;
  LexerNoViableAltException.prototype = Object.create(RecognitionException.prototype);
  LexerNoViableAltException.prototype.constructor = LexerNoViableAltException;
  NoViableAltException.prototype = Object.create(RecognitionException.prototype);
  NoViableAltException.prototype.constructor = NoViableAltException;
  Parser.prototype = Object.create(Recognizer.prototype);
  Parser.prototype.constructor = Parser;
  ParserRuleContext.prototype = Object.create(RuleContext.prototype);
  ParserRuleContext.prototype.constructor = ParserRuleContext;
  AbstractConfigHashSet.prototype = Object.create(Array2DHashSet.prototype);
  AbstractConfigHashSet.prototype.constructor = AbstractConfigHashSet;
  ConfigHashSet.prototype = Object.create(AbstractConfigHashSet.prototype);
  ConfigHashSet.prototype.constructor = ConfigHashSet;
  ConfigEqualityComparator.prototype = Object.create(AbstractEqualityComparator.prototype);
  ConfigEqualityComparator.prototype.constructor = ConfigEqualityComparator;
  UnicodeDeserializingMode.prototype = Object.create(Enum.prototype);
  UnicodeDeserializingMode.prototype.constructor = UnicodeDeserializingMode;
  ATNType.prototype = Object.create(Enum.prototype);
  ATNType.prototype.constructor = ATNType;
  AbstractPredicateTransition.prototype = Object.create(Transition.prototype);
  AbstractPredicateTransition.prototype.constructor = AbstractPredicateTransition;
  ActionTransition.prototype = Object.create(Transition.prototype);
  ActionTransition.prototype.constructor = ActionTransition;
  AmbiguityInfo.prototype = Object.create(DecisionEventInfo.prototype);
  AmbiguityInfo.prototype.constructor = AmbiguityInfo;
  ArrayPredictionContext.prototype = Object.create(PredictionContext.prototype);
  ArrayPredictionContext.prototype.constructor = ArrayPredictionContext;
  AtomTransition.prototype = Object.create(Transition.prototype);
  AtomTransition.prototype.constructor = AtomTransition;
  DecisionState.prototype = Object.create(ATNState.prototype);
  DecisionState.prototype.constructor = DecisionState;
  BlockStartState.prototype = Object.create(DecisionState.prototype);
  BlockStartState.prototype.constructor = BlockStartState;
  BasicBlockStartState.prototype = Object.create(BlockStartState.prototype);
  BasicBlockStartState.prototype.constructor = BasicBlockStartState;
  BasicState.prototype = Object.create(ATNState.prototype);
  BasicState.prototype.constructor = BasicState;
  BlockEndState.prototype = Object.create(ATNState.prototype);
  BlockEndState.prototype.constructor = BlockEndState;
  ContextSensitivityInfo.prototype = Object.create(DecisionEventInfo.prototype);
  ContextSensitivityInfo.prototype.constructor = ContextSensitivityInfo;
  SingletonPredictionContext.prototype = Object.create(PredictionContext.prototype);
  SingletonPredictionContext.prototype.constructor = SingletonPredictionContext;
  EmptyPredictionContext.prototype = Object.create(SingletonPredictionContext.prototype);
  EmptyPredictionContext.prototype.constructor = EmptyPredictionContext;
  EpsilonTransition.prototype = Object.create(Transition.prototype);
  EpsilonTransition.prototype.constructor = EpsilonTransition;
  ErrorInfo.prototype = Object.create(DecisionEventInfo.prototype);
  ErrorInfo.prototype.constructor = ErrorInfo;
  LexerATNConfig.prototype = Object.create(ATNConfig.prototype);
  LexerATNConfig.prototype.constructor = LexerATNConfig;
  LexerATNSimulator.prototype = Object.create(ATNSimulator.prototype);
  LexerATNSimulator.prototype.constructor = LexerATNSimulator;
  LexerActionType.prototype = Object.create(Enum.prototype);
  LexerActionType.prototype.constructor = LexerActionType;
  LookaheadEventInfo.prototype = Object.create(DecisionEventInfo.prototype);
  LookaheadEventInfo.prototype.constructor = LookaheadEventInfo;
  LoopEndState.prototype = Object.create(ATNState.prototype);
  LoopEndState.prototype.constructor = LoopEndState;
  SetTransition.prototype = Object.create(Transition.prototype);
  SetTransition.prototype.constructor = SetTransition;
  NotSetTransition.prototype = Object.create(SetTransition.prototype);
  NotSetTransition.prototype.constructor = NotSetTransition;
  LexerConfigHashSet.prototype = Object.create(AbstractConfigHashSet.prototype);
  LexerConfigHashSet.prototype.constructor = LexerConfigHashSet;
  OrderedATNConfigSet.prototype = Object.create(ATNConfigSet.prototype);
  OrderedATNConfigSet.prototype.constructor = OrderedATNConfigSet;
  ParserATNSimulator.prototype = Object.create(ATNSimulator.prototype);
  ParserATNSimulator.prototype.constructor = ParserATNSimulator;
  PlusBlockStartState.prototype = Object.create(BlockStartState.prototype);
  PlusBlockStartState.prototype.constructor = PlusBlockStartState;
  PlusLoopbackState.prototype = Object.create(DecisionState.prototype);
  PlusLoopbackState.prototype.constructor = PlusLoopbackState;
  PrecedencePredicateTransition.prototype = Object.create(AbstractPredicateTransition.prototype);
  PrecedencePredicateTransition.prototype.constructor = PrecedencePredicateTransition;
  PredicateEvalInfo.prototype = Object.create(DecisionEventInfo.prototype);
  PredicateEvalInfo.prototype.constructor = PredicateEvalInfo;
  PredicateTransition.prototype = Object.create(AbstractPredicateTransition.prototype);
  PredicateTransition.prototype.constructor = PredicateTransition;
  AltAndContextMap.prototype = Object.create(FlexibleHashMap.prototype);
  AltAndContextMap.prototype.constructor = AltAndContextMap;
  AltAndContextConfigEqualityComparator.prototype = Object.create(AbstractEqualityComparator.prototype);
  AltAndContextConfigEqualityComparator.prototype.constructor = AltAndContextConfigEqualityComparator;
  PredictionMode.prototype = Object.create(Enum.prototype);
  PredictionMode.prototype.constructor = PredictionMode;
  ProfilingATNSimulator.prototype = Object.create(ParserATNSimulator.prototype);
  ProfilingATNSimulator.prototype.constructor = ProfilingATNSimulator;
  RangeTransition.prototype = Object.create(Transition.prototype);
  RangeTransition.prototype.constructor = RangeTransition;
  RuleStartState.prototype = Object.create(ATNState.prototype);
  RuleStartState.prototype.constructor = RuleStartState;
  RuleStopState.prototype = Object.create(ATNState.prototype);
  RuleStopState.prototype.constructor = RuleStopState;
  RuleTransition.prototype = Object.create(Transition.prototype);
  RuleTransition.prototype.constructor = RuleTransition;
  Predicate.prototype = Object.create(SemanticContext.prototype);
  Predicate.prototype.constructor = Predicate;
  PrecedencePredicate.prototype = Object.create(SemanticContext.prototype);
  PrecedencePredicate.prototype.constructor = PrecedencePredicate;
  Operator.prototype = Object.create(SemanticContext.prototype);
  Operator.prototype.constructor = Operator;
  AND.prototype = Object.create(Operator.prototype);
  AND.prototype.constructor = AND;
  OR.prototype = Object.create(Operator.prototype);
  OR.prototype.constructor = OR;
  StarBlockStartState.prototype = Object.create(BlockStartState.prototype);
  StarBlockStartState.prototype.constructor = StarBlockStartState;
  StarLoopEntryState.prototype = Object.create(DecisionState.prototype);
  StarLoopEntryState.prototype.constructor = StarLoopEntryState;
  StarLoopbackState.prototype = Object.create(ATNState.prototype);
  StarLoopbackState.prototype.constructor = StarLoopbackState;
  TokensStartState.prototype = Object.create(DecisionState.prototype);
  TokensStartState.prototype.constructor = TokensStartState;
  WildcardTransition.prototype = Object.create(Transition.prototype);
  WildcardTransition.prototype.constructor = WildcardTransition;
  LexerDFASerializer.prototype = Object.create(DFASerializer.prototype);
  LexerDFASerializer.prototype.constructor = LexerDFASerializer;
  IntegerStack.prototype = Object.create(IntegerList.prototype);
  IntegerStack.prototype.constructor = IntegerStack;
  ObjectEqualityComparator.prototype = Object.create(AbstractEqualityComparator.prototype);
  ObjectEqualityComparator.prototype.constructor = ObjectEqualityComparator;
  $readFileCOROUTINE$0.prototype = Object.create(CoroutineImpl.prototype);
  $readFileCOROUTINE$0.prototype.constructor = $readFileCOROUTINE$0;
  ErrorNodeImpl.prototype = Object.create(TerminalNodeImpl.prototype);
  ErrorNodeImpl.prototype.constructor = ErrorNodeImpl;
  Variant.prototype = Object.create(Enum.prototype);
  Variant.prototype.constructor = Variant;
  CharStreams.prototype = Object.create(AbstractCharStreams.prototype);
  CharStreams.prototype.constructor = CharStreams;
  //endregion
  function Math_0() {
    Math_instance = this;
  }
  Math_0.prototype.min_vhgrta_k$ = function (a, b) {
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = Math.min(a, b);
      break $l$block;
    }
    return tmp$ret$0;
  };
  Math_0.prototype.max_tun7lo_k$ = function (a, b) {
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = Math.max(a, b);
      break $l$block;
    }
    return tmp$ret$0;
  };
  Math_0.prototype.floor_xdnczv_k$ = function (d) {
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = Math.floor(d);
      break $l$block;
    }
    return tmp$ret$0;
  };
  Math_0.$metadata$ = {
    simpleName: 'Math',
    kind: 'object',
    interfaces: []
  };
  var Math_instance;
  function Math_getInstance() {
    if (Math_instance == null)
      new Math_0();
    return Math_instance;
  }
  function outMessage(message) {
    println(message);
  }
  function assert(condition) {
    {
    }
    {
    }
    var tmp;
    if (!condition) {
      var tmp$ret$0;
      $l$block: {
        tmp$ret$0 = 'Failed requirement.';
        break $l$block;
      }
      var message_1_1 = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString(message_1_1));
    }
    return tmp;
  }
  function asCharArray(_this__1828080292) {
    var tmp$ret$2;
    $l$block_1: {
      var tmp$ret$1;
      $l$block_0: {
        var tmp0_mapTo_0_1 = ArrayList_init_$Create$(charSequenceLength(_this__1828080292));
        var indexedObject = _this__1828080292;
        var inductionVariable = 0;
        var last = indexedObject.length;
        while (inductionVariable < last) {
          var item_2_3 = charSequenceGet(indexedObject, inductionVariable);
          inductionVariable = inductionVariable + 1 | 0;
          var tmp$ret$0;
          $l$block: {
            tmp$ret$0 = item_2_3;
            break $l$block;
          }
          tmp0_mapTo_0_1.add_1j60pz_k$(new Char(tmp$ret$0));
          Unit_getInstance();
        }
        tmp$ret$1 = tmp0_mapTo_0_1;
        break $l$block_0;
      }
      tmp$ret$2 = tmp$ret$1;
      break $l$block_1;
    }
    return toCharArray(tmp$ret$2);
  }
  function Arrays() {
    Arrays_instance = this;
  }
  Arrays.prototype.equals_qcb8fz_k$ = function (a, b) {
    return (a == null ? b == null : false) ? true : (!(a == null) ? !(b == null) : false) ? contentEquals(a, b) : false;
  };
  Arrays.prototype.equals_dets0x_k$ = function (a, b) {
    return (a == null ? b == null : false) ? true : (!(a == null) ? !(b == null) : false) ? contentEquals_0(a, b) : false;
  };
  Arrays.$metadata$ = {
    simpleName: 'Arrays',
    kind: 'object',
    interfaces: []
  };
  var Arrays_instance;
  function Arrays_getInstance() {
    if (Arrays_instance == null)
      new Arrays();
    return Arrays_instance;
  }
  function TypeDeclarator() {
  }
  TypeDeclarator.$metadata$ = {
    simpleName: 'TypeDeclarator',
    kind: 'interface',
    interfaces: []
  };
  function ANTLRErrorListener() {
  }
  ANTLRErrorListener.$metadata$ = {
    simpleName: 'ANTLRErrorListener',
    kind: 'interface',
    interfaces: []
  };
  function ANTLRErrorStrategy() {
  }
  ANTLRErrorStrategy.$metadata$ = {
    simpleName: 'ANTLRErrorStrategy',
    kind: 'interface',
    interfaces: []
  };
  function AbstractCharStreams() {
  }
  AbstractCharStreams.prototype.fromString_u4ybkp_k$ = function (s, sourceName) {
    return new StringCharStream(s, sourceName);
  };
  AbstractCharStreams.prototype.fromString$default_ibgbyx_k$ = function (s, sourceName, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      sourceName = Companion_getInstance_3()._get_UNKNOWN_SOURCE_NAME__736680503_c6lmbb_k$();
    return this.fromString_u4ybkp_k$(s, sourceName);
  };
  AbstractCharStreams.$metadata$ = {
    simpleName: 'AbstractCharStreams',
    kind: 'class',
    interfaces: []
  };
  function BufferedTokenStream(tokenSource) {
    this.tokenSource_1 = tokenSource;
    this.tokens_1 = ArrayList_init_$Create$(100);
    this.p_1 = -1;
    this.fetchedEOF_1 = false;
    if (this._get_tokenSource__2506733725_tko1ur_k$() == null) {
      throw NullPointerException_init_$Create$('tokenSource cannot be null');
    }
  }
  BufferedTokenStream.prototype._set_tokenSource__675290897_psnmid_k$ = function (_set____804775014) {
    this.tokenSource_1 = _set____804775014;
  };
  BufferedTokenStream.prototype._get_tokenSource__2506733725_tko1ur_k$ = function () {
    return this.tokenSource_1;
  };
  BufferedTokenStream.prototype._set_tokens__1052773821_l7sfzo_k$ = function (_set____804775014) {
    this.tokens_1 = _set____804775014;
  };
  BufferedTokenStream.prototype._get_tokens__1141353649_ivj641_k$ = function () {
    return this.tokens_1;
  };
  BufferedTokenStream.prototype._set_p__804776533_7q7xz9_k$ = function (_set____804775014) {
    this.p_1 = _set____804775014;
  };
  BufferedTokenStream.prototype._get_p__461226721_7mlotd_k$ = function () {
    return this.p_1;
  };
  BufferedTokenStream.prototype._set_fetchedEOF__76354196_sdwhjp_k$ = function (_set____804775014) {
    this.fetchedEOF_1 = _set____804775014;
  };
  BufferedTokenStream.prototype._get_fetchedEOF__3460568968_dss1vc_k$ = function () {
    return this.fetchedEOF_1;
  };
  BufferedTokenStream.prototype._get_sourceName__2307762181_wv4pa3_k$ = function () {
    return ensureNotNull(this._get_tokenSource__2506733725_tko1ur_k$()._get_sourceName__2307762181_wv4pa3_k$());
  };
  BufferedTokenStream.prototype._get_text__809840318_de5ose_k$ = function () {
    return this.getText_egqjjt_k$(Companion_getInstance_31().of_9v4utl_k$(0, this.size_23och_k$() - 1 | 0));
  };
  BufferedTokenStream.prototype.index_1nqriq_k$ = function () {
    return this.p_1;
  };
  BufferedTokenStream.prototype.mark_1zob1_k$ = function () {
    return 0;
  };
  BufferedTokenStream.prototype.release_knbvef_k$ = function (marker) {
  };
  BufferedTokenStream.prototype.reset_5tn5dq_k$ = function () {
    this.seek_5aisp4_k$(0);
  };
  BufferedTokenStream.prototype.seek_5aisp4_k$ = function (index) {
    this.lazyInit_ml29bh_k$();
    this.p_1 = this.adjustSeekIndex_9m54ju_k$(index);
  };
  BufferedTokenStream.prototype.size_23och_k$ = function () {
    return this.tokens_1._get_size__809037418_ddoh9m_k$();
  };
  BufferedTokenStream.prototype.consume_spbz2t_k$ = function () {
    var skipEofCheck;
    if (this.p_1 >= 0) {
      if (this.fetchedEOF_1) {
        skipEofCheck = this.p_1 < (this.tokens_1._get_size__809037418_ddoh9m_k$() - 1 | 0);
      } else {
        skipEofCheck = this.p_1 < this.tokens_1._get_size__809037418_ddoh9m_k$();
      }
    } else {
      skipEofCheck = false;
    }
    if (!skipEofCheck ? this.LA_y7f82c_k$(1) === Companion_getInstance_3()._get_EOF__855984949_e5mq7p_k$() : false) {
      throw IllegalStateException_init_$Create$('cannot consume EOF');
    }
    if (this.sync_o63rt2_k$(this.p_1 + 1 | 0)) {
      this.p_1 = this.adjustSeekIndex_9m54ju_k$(this.p_1 + 1 | 0);
    }
  };
  BufferedTokenStream.prototype.sync_o63rt2_k$ = function (i) {
    assert(i >= 0);
    var n = (i - this.tokens_1._get_size__809037418_ddoh9m_k$() | 0) + 1 | 0;
    if (n > 0) {
      var fetched = this.fetch_es1drt_k$(n);
      return fetched >= n;
    }
    return true;
  };
  BufferedTokenStream.prototype.fetch_es1drt_k$ = function (n) {
    if (this.fetchedEOF_1) {
      return 0;
    }
    var inductionVariable = 0;
    if (inductionVariable < n)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var t = this._get_tokenSource__2506733725_tko1ur_k$().nextToken_jykgjq_k$();
        if (isInterface(t, WritableToken)) {
          (isInterface(t, WritableToken) ? t : THROW_CCE())._set_tokenIndex__1535165534_gfqnwy_k$(this.tokens_1._get_size__809037418_ddoh9m_k$());
        } else {
        }
        this.tokens_1.add_1j60pz_k$(t);
        Unit_getInstance();
        if (t._get_type__810427985_deia8h_k$() === Companion_getInstance_6()._get_EOF__855984949_e5mq7p_k$()) {
          this.fetchedEOF_1 = true;
          return i + 1 | 0;
        }
      }
       while (inductionVariable < n);
    return n;
  };
  BufferedTokenStream.prototype.get_fkrdnv_k$ = function (i) {
    if (i < 0 ? true : i >= this.tokens_1._get_size__809037418_ddoh9m_k$()) {
      throw IndexOutOfBoundsException_init_$Create$('token index ' + i + ' out of range 0..' + (this.tokens_1._get_size__809037418_ddoh9m_k$() - 1 | 0));
    }
    return this.tokens_1.get_fkrdnv_k$(i);
  };
  BufferedTokenStream.prototype.get_igkbp2_k$ = function (start, stop) {
    var stop_0 = stop;
    if (start < 0 ? true : stop_0 < 0)
      return null;
    this.lazyInit_ml29bh_k$();
    var subset = ArrayList_init_$Create$_0();
    if (stop_0 >= this.tokens_1._get_size__809037418_ddoh9m_k$())
      stop_0 = this.tokens_1._get_size__809037418_ddoh9m_k$() - 1 | 0;
    var inductionVariable = start;
    var last = stop_0;
    if (inductionVariable <= last)
      $l$loop: do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var t = this.tokens_1.get_fkrdnv_k$(i);
        if (t._get_type__810427985_deia8h_k$() === Companion_getInstance_6()._get_EOF__855984949_e5mq7p_k$())
          break $l$loop;
        subset.add_1j60pz_k$(t);
        Unit_getInstance();
      }
       while (!(i === last));
    return subset;
  };
  BufferedTokenStream.prototype.LA_y7f82c_k$ = function (i) {
    return ensureNotNull(this.LT_6crwc9_k$(i))._get_type__810427985_deia8h_k$();
  };
  BufferedTokenStream.prototype.LB_w2kj79_k$ = function (k) {
    return (this.p_1 - k | 0) < 0 ? null : this.tokens_1.get_fkrdnv_k$(this.p_1 - k | 0);
  };
  BufferedTokenStream.prototype.LT_6crwc9_k$ = function (k) {
    this.lazyInit_ml29bh_k$();
    if (k === 0)
      return null;
    if (k < 0)
      return this.LB_w2kj79_k$(-k | 0);
    var i = (this.p_1 + k | 0) - 1 | 0;
    this.sync_o63rt2_k$(i);
    Unit_getInstance();
    var tmp;
    if (i >= this.tokens_1._get_size__809037418_ddoh9m_k$()) {
      tmp = this.tokens_1.get_fkrdnv_k$(this.tokens_1._get_size__809037418_ddoh9m_k$() - 1 | 0);
    } else {
      tmp = this.tokens_1.get_fkrdnv_k$(i);
    }
    return tmp;
  };
  BufferedTokenStream.prototype.adjustSeekIndex_9m54ju_k$ = function (i) {
    return i;
  };
  BufferedTokenStream.prototype.lazyInit_ml29bh_k$ = function () {
    if (this.p_1 === -1) {
      this.setup_2uql04_k$();
    }
  };
  BufferedTokenStream.prototype.setup_2uql04_k$ = function () {
    this.sync_o63rt2_k$(0);
    Unit_getInstance();
    this.p_1 = this.adjustSeekIndex_9m54ju_k$(0);
  };
  BufferedTokenStream.prototype.getTokens_mje4b8_k$ = function (start, stop, types) {
    this.lazyInit_ml29bh_k$();
    if (((start < 0 ? true : stop >= this.tokens_1._get_size__809037418_ddoh9m_k$()) ? true : stop < 0) ? true : start >= this.tokens_1._get_size__809037418_ddoh9m_k$()) {
      throw IndexOutOfBoundsException_init_$Create$('start ' + start + ' or stop ' + stop + ' not in 0..' + (this.tokens_1._get_size__809037418_ddoh9m_k$() - 1 | 0));
    }
    if (start > stop)
      return null;
    var filteredTokens = ArrayList_init_$Create$_0();
    var inductionVariable = start;
    if (inductionVariable <= stop)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var t = this.tokens_1.get_fkrdnv_k$(i);
        if (types == null ? true : types.contains_2ehdt1_k$(t._get_type__810427985_deia8h_k$())) {
          ensureNotNull(filteredTokens).add_1j60pz_k$(t);
          Unit_getInstance();
        }
      }
       while (!(i === stop));
    if (ensureNotNull(filteredTokens).isEmpty_y1axqb_k$()) {
      filteredTokens = null;
    }
    return filteredTokens;
  };
  BufferedTokenStream.prototype.getTokens$default_y05h2p_k$ = function (start, stop, types, $mask0, $handler) {
    if (!(($mask0 & 4) === 0))
      types = null;
    return this.getTokens_mje4b8_k$(start, stop, types);
  };
  BufferedTokenStream.prototype.getTokens_sna6zz_k$ = function (start, stop, ttype) {
    var s = HashSet_init_$Create$(ttype);
    s.add_1j60pz_k$(ttype);
    Unit_getInstance();
    return this.getTokens_mje4b8_k$(start, stop, s);
  };
  BufferedTokenStream.prototype.nextTokenOnChannel_byqj1a_k$ = function (i, channel) {
    var i_0 = i;
    this.sync_o63rt2_k$(i_0);
    Unit_getInstance();
    if (i_0 >= this.size_23och_k$()) {
      return this.size_23och_k$() - 1 | 0;
    }
    var token = this.tokens_1.get_fkrdnv_k$(i_0);
    while (!(token._get_channel__3558637166_c6e3yq_k$() === channel)) {
      if (token._get_type__810427985_deia8h_k$() === Companion_getInstance_6()._get_EOF__855984949_e5mq7p_k$()) {
        return i_0;
      }
      var tmp0 = i_0;
      i_0 = tmp0 + 1 | 0;
      Unit_getInstance();
      this.sync_o63rt2_k$(i_0);
      Unit_getInstance();
      token = this.tokens_1.get_fkrdnv_k$(i_0);
    }
    return i_0;
  };
  BufferedTokenStream.prototype.previousTokenOnChannel_es5xwi_k$ = function (i, channel) {
    var i_0 = i;
    this.sync_o63rt2_k$(i_0);
    Unit_getInstance();
    if (i_0 >= this.size_23och_k$()) {
      return this.size_23och_k$() - 1 | 0;
    }
    while (i_0 >= 0) {
      var token = this.tokens_1.get_fkrdnv_k$(i_0);
      if (token._get_type__810427985_deia8h_k$() === Companion_getInstance_6()._get_EOF__855984949_e5mq7p_k$() ? true : token._get_channel__3558637166_c6e3yq_k$() === channel) {
        return i_0;
      }
      var tmp0 = i_0;
      i_0 = tmp0 - 1 | 0;
      Unit_getInstance();
    }
    return i_0;
  };
  BufferedTokenStream.prototype.getHiddenTokensToRight_60d8op_k$ = function (tokenIndex, channel) {
    this.lazyInit_ml29bh_k$();
    if (tokenIndex < 0 ? true : tokenIndex >= this.tokens_1._get_size__809037418_ddoh9m_k$()) {
      throw IndexOutOfBoundsException_init_$Create$(tokenIndex.toString() + ' not in 0..' + (this.tokens_1._get_size__809037418_ddoh9m_k$() - 1 | 0));
    }
    var nextOnChannel = this.nextTokenOnChannel_byqj1a_k$(tokenIndex + 1 | 0, Companion_getInstance_4()._get_DEFAULT_TOKEN_CHANNEL__3825883858_7ra33i_k$());
    var to;
    var from = tokenIndex + 1 | 0;
    if (nextOnChannel === -1)
      to = this.size_23och_k$() - 1 | 0;
    else
      to = nextOnChannel;
    return this.filterForChannel_mp7k27_k$(from, to, channel);
  };
  BufferedTokenStream.prototype.getHiddenTokensToRight$default_di4kf2_k$ = function (tokenIndex, channel, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      channel = -1;
    return this.getHiddenTokensToRight_60d8op_k$(tokenIndex, channel);
  };
  BufferedTokenStream.prototype.getHiddenTokensToLeft_b3beys_k$ = function (tokenIndex, channel) {
    this.lazyInit_ml29bh_k$();
    if (tokenIndex < 0 ? true : tokenIndex >= this.tokens_1._get_size__809037418_ddoh9m_k$()) {
      throw IndexOutOfBoundsException_init_$Create$(tokenIndex.toString() + ' not in 0..' + (this.tokens_1._get_size__809037418_ddoh9m_k$() - 1 | 0));
    }
    if (tokenIndex === 0) {
      return null;
    }
    var prevOnChannel = this.previousTokenOnChannel_es5xwi_k$(tokenIndex - 1 | 0, Companion_getInstance_4()._get_DEFAULT_TOKEN_CHANNEL__3825883858_7ra33i_k$());
    if (prevOnChannel === (tokenIndex - 1 | 0))
      return null;
    var from = prevOnChannel + 1 | 0;
    var to = tokenIndex - 1 | 0;
    return this.filterForChannel_mp7k27_k$(from, to, channel);
  };
  BufferedTokenStream.prototype.getHiddenTokensToLeft$default_tubp4n_k$ = function (tokenIndex, channel, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      channel = -1;
    return this.getHiddenTokensToLeft_b3beys_k$(tokenIndex, channel);
  };
  BufferedTokenStream.prototype.filterForChannel_mp7k27_k$ = function (from, to, channel) {
    var hidden = ArrayList_init_$Create$_0();
    var inductionVariable = from;
    if (inductionVariable <= to)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var t = this.tokens_1.get_fkrdnv_k$(i);
        if (channel === -1) {
          if (!(t._get_channel__3558637166_c6e3yq_k$() === Companion_getInstance_4()._get_DEFAULT_TOKEN_CHANNEL__3825883858_7ra33i_k$())) {
            hidden.add_1j60pz_k$(t);
            Unit_getInstance();
          }
        } else {
          if (t._get_channel__3558637166_c6e3yq_k$() === channel) {
            hidden.add_1j60pz_k$(t);
            Unit_getInstance();
          }
        }
      }
       while (!(i === to));
    return hidden._get_size__809037418_ddoh9m_k$() === 0 ? null : hidden;
  };
  BufferedTokenStream.prototype.getText_egqjjt_k$ = function (interval) {
    var start = interval._get_a__461226256_7mlogg_k$();
    var stop = interval._get_b__461226287_7mlohb_k$();
    if (start < 0 ? true : stop < 0)
      return '';
    this.fill_e0qjaq_k$();
    if (stop >= this.tokens_1._get_size__809037418_ddoh9m_k$())
      stop = this.tokens_1._get_size__809037418_ddoh9m_k$() - 1 | 0;
    var buf = StringBuilder_init_$Create$();
    var inductionVariable = start;
    var last = stop;
    if (inductionVariable <= last)
      $l$loop: do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var t = this.tokens_1.get_fkrdnv_k$(i);
        if (t._get_type__810427985_deia8h_k$() === Companion_getInstance_6()._get_EOF__855984949_e5mq7p_k$())
          break $l$loop;
        buf.append_ssq29y_k$(t._get_text__809840318_de5ose_k$());
        Unit_getInstance();
      }
       while (!(i === last));
    return buf.toString();
  };
  BufferedTokenStream.prototype.getText_r6348d_k$ = function (ctx) {
    return this.getText_egqjjt_k$(ctx._get_sourceInterval__288930827_4s0sgb_k$());
  };
  BufferedTokenStream.prototype.getText_7xesx5_k$ = function (start, stop) {
    var tmp;
    if (!(start == null) ? !(stop == null) : false) {
      tmp = this.getText_egqjjt_k$(Companion_getInstance_31().of_9v4utl_k$(ensureNotNull(start)._get_tokenIndex__624413010_abrc5u_k$(), ensureNotNull(stop)._get_tokenIndex__624413010_abrc5u_k$()));
    } else {
      tmp = '';
    }
    return tmp;
  };
  BufferedTokenStream.prototype.fill_e0qjaq_k$ = function () {
    this.lazyInit_ml29bh_k$();
    var blockSize = 1000;
    while (true) {
      var fetched = this.fetch_es1drt_k$(blockSize);
      if (fetched < blockSize) {
        return Unit_getInstance();
      }
    }
  };
  BufferedTokenStream.$metadata$ = {
    simpleName: 'BufferedTokenStream',
    kind: 'class',
    interfaces: [TokenStream]
  };
  function Companion() {
    Companion_instance = this;
    this.EOF_1 = Companion_getInstance_3()._get_EOF__855984949_e5mq7p_k$();
  }
  Companion.prototype._get_EOF__855984949_e5mq7p_k$ = function () {
    return this.EOF_1;
  };
  Companion.$metadata$ = {
    simpleName: 'Companion',
    kind: 'object',
    interfaces: []
  };
  var Companion_instance;
  function Companion_getInstance_0() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function CharStream() {
    Companion_getInstance_0();
  }
  CharStream.$metadata$ = {
    simpleName: 'CharStream',
    kind: 'interface',
    interfaces: [IntStream]
  };
  function CommonToken_init_$Init$(type, $this) {
    CommonToken.call($this);
    $this._set_type__595810909_36q4vn_k$(type);
    $this.source_1 = Companion_getInstance_1().EMPTY_SOURCE_1;
    return $this;
  }
  function CommonToken_init_$Create$(type) {
    return CommonToken_init_$Init$(type, Object.create(CommonToken.prototype));
  }
  function CommonToken_init_$Init$_0(source, type, channel, start, stop, $this) {
    CommonToken.call($this);
    $this.source_1 = source;
    $this._set_type__595810909_36q4vn_k$(type);
    $this._set_channel__812662498_ugi8aa_k$(channel);
    $this._set_startIndex__1161010183_otroeh_k$(start);
    $this._set_stopIndex__3869098453_a0eunv_k$(stop);
    if (!(source._get_first__3232921377_hkbbvj_k$() == null)) {
      $this._set_line__587944163_xvf6r1_k$(ensureNotNull(source._get_first__3232921377_hkbbvj_k$())._get_line__802561239_d9to7r_k$());
      $this._set_charPositionInLine__134348639_7venf3_k$(ensureNotNull(source._get_first__3232921377_hkbbvj_k$())._get_charPositionInLine__2377044051_vpvr1p_k$());
    }
    return $this;
  }
  function CommonToken_init_$Create$_0(source, type, channel, start, stop) {
    return CommonToken_init_$Init$_0(source, type, channel, start, stop, Object.create(CommonToken.prototype));
  }
  function CommonToken_init_$Init$_1(type, text, $this) {
    CommonToken.call($this);
    $this._set_type__595810909_36q4vn_k$(type);
    $this._set_channel__812662498_ugi8aa_k$(Companion_getInstance_6()._get_DEFAULT_CHANNEL__1918603244_vqabqk_k$());
    $this._set_text__595223242_ydrjlx_k$(text);
    $this.source_1 = Companion_getInstance_1().EMPTY_SOURCE_1;
    return $this;
  }
  function CommonToken_init_$Create$_1(type, text) {
    return CommonToken_init_$Init$_1(type, text, Object.create(CommonToken.prototype));
  }
  function CommonToken_init_$Init$_2(oldToken, $this) {
    CommonToken.call($this);
    $this._set_type__595810909_36q4vn_k$(oldToken._get_type__810427985_deia8h_k$());
    $this._set_line__587944163_xvf6r1_k$(oldToken._get_line__802561239_d9to7r_k$());
    $this._set_tokenIndex__1535165534_gfqnwy_k$(oldToken._get_tokenIndex__624413010_abrc5u_k$());
    $this._set_charPositionInLine__134348639_7venf3_k$(oldToken._get_charPositionInLine__2377044051_vpvr1p_k$());
    $this._set_channel__812662498_ugi8aa_k$(oldToken._get_channel__3558637166_c6e3yq_k$());
    $this._set_startIndex__1161010183_otroeh_k$(oldToken._get_startIndex__250257659_44zw1n_k$());
    $this._set_stopIndex__3869098453_a0eunv_k$(oldToken._get_stopIndex__1345867361_m9alwh_k$());
    if (oldToken instanceof CommonToken) {
      $this._set_text__595223242_ydrjlx_k$((oldToken instanceof CommonToken ? oldToken : THROW_CCE())._get_text__809840318_de5ose_k$());
      var tmp = $this;
      tmp.source_1 = (oldToken instanceof CommonToken ? oldToken : THROW_CCE()).source_1;
    } else {
      {
        $this._set_text__595223242_ydrjlx_k$(oldToken._get_text__809840318_de5ose_k$());
        $this.source_1 = new Pair(ensureNotNull(oldToken._get_tokenSource__2506733725_tko1ur_k$()), ensureNotNull(oldToken._get_inputStream__758653671_cjokx3_k$()));
      }
    }
    return $this;
  }
  function CommonToken_init_$Create$_2(oldToken) {
    return CommonToken_init_$Init$_2(oldToken, Object.create(CommonToken.prototype));
  }
  function Companion_0() {
    Companion_instance_0 = this;
    this.EMPTY_SOURCE_1 = new Pair(null, null);
  }
  Companion_0.prototype._get_EMPTY_SOURCE__74534782_18djem_k$ = function () {
    return this.EMPTY_SOURCE_1;
  };
  Companion_0.$metadata$ = {
    simpleName: 'Companion',
    kind: 'object',
    interfaces: []
  };
  var Companion_instance_0;
  function Companion_getInstance_1() {
    if (Companion_instance_0 == null)
      new Companion_0();
    return Companion_instance_0;
  }
  CommonToken.prototype._set_type__595810909_36q4vn_k$ = function (_set____804775014) {
    this.type_1 = _set____804775014;
  };
  CommonToken.prototype._get_type__810427985_deia8h_k$ = function () {
    return this.type_1;
  };
  CommonToken.prototype._set_line__587944163_xvf6r1_k$ = function (_set____804775014) {
    this.line_1 = _set____804775014;
  };
  CommonToken.prototype._get_line__802561239_d9to7r_k$ = function () {
    return this.line_1;
  };
  CommonToken.prototype._set_charPositionInLine__134348639_7venf3_k$ = function (_set____804775014) {
    this.charPositionInLine_1 = _set____804775014;
  };
  CommonToken.prototype._get_charPositionInLine__2377044051_vpvr1p_k$ = function () {
    return this.charPositionInLine_1;
  };
  CommonToken.prototype._set_channel__812662498_ugi8aa_k$ = function (_set____804775014) {
    this.channel_1 = _set____804775014;
  };
  CommonToken.prototype._get_channel__3558637166_c6e3yq_k$ = function () {
    return this.channel_1;
  };
  CommonToken.prototype._set_source__174881628_vxoc59_k$ = function (_set____804775014) {
    this.source_1 = _set____804775014;
  };
  CommonToken.prototype._get_source__263461456_4cuw5s_k$ = function () {
    return this.source_1;
  };
  CommonToken.prototype._set_tokenIndex__1535165534_gfqnwy_k$ = function (_set____804775014) {
    this.tokenIndex_1 = _set____804775014;
  };
  CommonToken.prototype._get_tokenIndex__624413010_abrc5u_k$ = function () {
    return this.tokenIndex_1;
  };
  CommonToken.prototype._set_startIndex__1161010183_otroeh_k$ = function (_set____804775014) {
    this.startIndex_1 = _set____804775014;
  };
  CommonToken.prototype._get_startIndex__250257659_44zw1n_k$ = function () {
    return this.startIndex_1;
  };
  CommonToken.prototype._set_stopIndex__3869098453_a0eunv_k$ = function (_set____804775014) {
    this.stopIndex_1 = _set____804775014;
  };
  CommonToken.prototype._get_stopIndex__1345867361_m9alwh_k$ = function () {
    return this.stopIndex_1;
  };
  CommonToken.prototype._get_tokenSource__2506733725_tko1ur_k$ = function () {
    return this.source_1._get_first__3232921377_hkbbvj_k$();
  };
  CommonToken.prototype._get_inputStream__758653671_cjokx3_k$ = function () {
    return this.source_1._get_second__4255435031_njbah_k$();
  };
  CommonToken.prototype._set_text__595223242_ydrjlx_k$ = function (_set____804775014) {
    this.text_1 = _set____804775014;
  };
  CommonToken.prototype._get_text__809840318_de5ose_k$ = function () {
    if (!(this.text_1 == null)) {
      return this.text_1;
    }
    var tmp0_elvis_lhs = this._get_inputStream__758653671_cjokx3_k$();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return null;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var input = tmp;
    var n = input.size_23och_k$();
    var tmp_0;
    if (this._get_startIndex__250257659_44zw1n_k$() < n ? this._get_stopIndex__1345867361_m9alwh_k$() < n : false) {
      tmp_0 = input.getText_egqjjt_k$(Companion_getInstance_31().of_9v4utl_k$(this._get_startIndex__250257659_44zw1n_k$(), this._get_stopIndex__1345867361_m9alwh_k$()));
    } else {
      tmp_0 = '<EOF>';
    }
    return tmp_0;
  };
  CommonToken.prototype.toString = function () {
    return this.toString_85zw68_k$(null);
  };
  CommonToken.prototype.toString_85zw68_k$ = function (r) {
    var channelStr = '';
    if (this._get_channel__3558637166_c6e3yq_k$() > 0) {
      channelStr = ',channel=' + this._get_channel__3558637166_c6e3yq_k$();
    }
    var txt = this._get_text__809840318_de5ose_k$();
    if (!(txt == null)) {
      var tmp = txt;
      txt = replace$default(tmp, '\n', '\\n', false, 4, null);
      var tmp_0 = txt;
      txt = replace$default(tmp_0, '\r', '\\r', false, 4, null);
      var tmp_1 = txt;
      txt = replace$default(tmp_1, '\t', '\\t', false, 4, null);
    } else {
      txt = '<no text>';
    }
    var typeString = this._get_type__810427985_deia8h_k$().toString();
    if (!(r == null)) {
      typeString = ensureNotNull(r)._get_vocabulary__3716553829_9kdeor_k$().getDisplayName_u57fdi_k$(this._get_type__810427985_deia8h_k$());
    }
    return '[@' + this._get_tokenIndex__624413010_abrc5u_k$() + ',' + this._get_startIndex__250257659_44zw1n_k$() + ':' + this._get_stopIndex__1345867361_m9alwh_k$() + "='" + txt + "',<" + typeString + '>' + channelStr + ',' + this._get_line__802561239_d9to7r_k$() + ':' + this._get_charPositionInLine__2377044051_vpvr1p_k$() + ']';
  };
  function CommonToken() {
    Companion_getInstance_1();
    this.type_1 = 0;
    this.line_1 = 0;
    this.charPositionInLine_1 = -1;
    this.channel_1 = Companion_getInstance_6()._get_DEFAULT_CHANNEL__1918603244_vqabqk_k$();
    this.tokenIndex_1 = -1;
    this.startIndex_1 = 0;
    this.stopIndex_1 = 0;
    this.text_1 = null;
  }
  CommonToken.$metadata$ = {
    simpleName: 'CommonToken',
    kind: 'class',
    interfaces: [WritableToken]
  };
  function CommonTokenFactory_init_$Init$(copyText, $mask0, $marker, $this) {
    if (!(($mask0 & 1) === 0))
      copyText = false;
    CommonTokenFactory.call($this, copyText);
    return $this;
  }
  function CommonTokenFactory_init_$Create$(copyText, $mask0, $marker) {
    return CommonTokenFactory_init_$Init$(copyText, $mask0, $marker, Object.create(CommonTokenFactory.prototype));
  }
  function Companion_1() {
    Companion_instance_1 = this;
    var tmp = this;
    tmp.DEFAULT_1 = CommonTokenFactory_init_$Create$(false, 1, null);
  }
  Companion_1.prototype._get_DEFAULT__3552918800_c9soa8_k$ = function () {
    return this.DEFAULT_1;
  };
  Companion_1.$metadata$ = {
    simpleName: 'Companion',
    kind: 'object',
    interfaces: []
  };
  var Companion_instance_1;
  function Companion_getInstance_2() {
    if (Companion_instance_1 == null)
      new Companion_1();
    return Companion_instance_1;
  }
  function CommonTokenFactory(copyText) {
    Companion_getInstance_2();
    this.copyText_1 = copyText;
  }
  CommonTokenFactory.prototype._get_copyText__2976915913_lsqeyf_k$ = function () {
    return this.copyText_1;
  };
  CommonTokenFactory.prototype.create_4bchqq_k$ = function (source, type, text, channel, start, stop, line, charPositionInLine) {
    var t = CommonToken_init_$Create$_0(source, type, channel, start, stop);
    t._set_line__587944163_xvf6r1_k$(line);
    t._set_charPositionInLine__134348639_7venf3_k$(charPositionInLine);
    if (!(text == null)) {
      t._set_text__595223242_ydrjlx_k$(text);
    } else if (this.copyText_1 ? !(source._get_second__4255435031_njbah_k$() == null) : false) {
      t._set_text__595223242_ydrjlx_k$(ensureNotNull(source._get_second__4255435031_njbah_k$()).getText_egqjjt_k$(Companion_getInstance_31().of_9v4utl_k$(start, stop)));
    }
    return t;
  };
  CommonTokenFactory.prototype.create_l5a7b0_k$ = function (type, text) {
    return CommonToken_init_$Create$_1(type, text);
  };
  CommonTokenFactory.$metadata$ = {
    simpleName: 'CommonTokenFactory',
    kind: 'class',
    interfaces: [TokenFactory]
  };
  function CommonTokenStream_init_$Init$(tokenSource, channel, $this) {
    CommonTokenStream.call($this, tokenSource);
    $this.channel_1 = channel;
    return $this;
  }
  function CommonTokenStream_init_$Create$(tokenSource, channel) {
    return CommonTokenStream_init_$Init$(tokenSource, channel, Object.create(CommonTokenStream.prototype));
  }
  function CommonTokenStream(tokenSource) {
    BufferedTokenStream.call(this, tokenSource);
    this.channel_1 = Companion_getInstance_6()._get_DEFAULT_CHANNEL__1918603244_vqabqk_k$();
  }
  CommonTokenStream.prototype._set_channel__812662498_ugi8aa_k$ = function (_set____804775014) {
    this.channel_1 = _set____804775014;
  };
  CommonTokenStream.prototype._get_channel__3558637166_c6e3yq_k$ = function () {
    return this.channel_1;
  };
  CommonTokenStream.prototype._get_numberOfOnChannelTokens__3670255379_abxqst_k$ = function () {
    var n = 0;
    this.fill_e0qjaq_k$();
    var inductionVariable = 0;
    var last = this._get_tokens__1141353649_ivj641_k$()._get_size__809037418_ddoh9m_k$() - 1 | 0;
    if (inductionVariable <= last)
      $l$loop: do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var t = this._get_tokens__1141353649_ivj641_k$().get_fkrdnv_k$(i);
        if (t._get_channel__3558637166_c6e3yq_k$() === this.channel_1) {
          var tmp1 = n;
          n = tmp1 + 1 | 0;
          Unit_getInstance();
        }
        if (t._get_type__810427985_deia8h_k$() === Companion_getInstance_6()._get_EOF__855984949_e5mq7p_k$())
          break $l$loop;
      }
       while (inductionVariable <= last);
    return n;
  };
  CommonTokenStream.prototype.adjustSeekIndex_9m54ju_k$ = function (i) {
    return this.nextTokenOnChannel_byqj1a_k$(i, this.channel_1);
  };
  CommonTokenStream.prototype.LB_w2kj79_k$ = function (k) {
    if (k === 0 ? true : (this._get_p__461226721_7mlotd_k$() - k | 0) < 0)
      return null;
    var i = this._get_p__461226721_7mlotd_k$();
    var n = 1;
    while (n <= k ? i > 0 : false) {
      i = this.previousTokenOnChannel_es5xwi_k$(i - 1 | 0, this.channel_1);
      var tmp0 = n;
      n = tmp0 + 1 | 0;
      Unit_getInstance();
    }
    return i < 0 ? null : this._get_tokens__1141353649_ivj641_k$().get_fkrdnv_k$(i);
  };
  CommonTokenStream.prototype.LT_6crwc9_k$ = function (k) {
    this.lazyInit_ml29bh_k$();
    if (k === 0)
      return null;
    if (k < 0)
      return this.LB_w2kj79_k$(-k | 0);
    var i = this._get_p__461226721_7mlotd_k$();
    var n = 1;
    while (n < k) {
      if (this.sync_o63rt2_k$(i + 1 | 0)) {
        i = this.nextTokenOnChannel_byqj1a_k$(i + 1 | 0, this.channel_1);
      }
      var tmp0 = n;
      n = tmp0 + 1 | 0;
      Unit_getInstance();
    }
    return this._get_tokens__1141353649_ivj641_k$().get_fkrdnv_k$(i);
  };
  CommonTokenStream.$metadata$ = {
    simpleName: 'CommonTokenStream',
    kind: 'class',
    interfaces: []
  };
  function DefaultErrorStrategy() {
    this.errorRecoveryMode_1 = false;
    this.lastErrorIndex_1 = -1;
    this.lastErrorStates_1 = null;
    this.nextTokensContext_1 = null;
    this.nextTokensState_1 = 0;
  }
  DefaultErrorStrategy.prototype._set_errorRecoveryMode__26073541_pkv7no_k$ = function (_set____804775014) {
    this.errorRecoveryMode_1 = _set____804775014;
  };
  DefaultErrorStrategy.prototype._get_errorRecoveryMode__3007912529_laa1tb_k$ = function () {
    return this.errorRecoveryMode_1;
  };
  DefaultErrorStrategy.prototype._set_lastErrorIndex__2590096439_zf6mmx_k$ = function (_set____804775014) {
    this.lastErrorIndex_1 = _set____804775014;
  };
  DefaultErrorStrategy.prototype._get_lastErrorIndex__4133824299_2nxuqd_k$ = function () {
    return this.lastErrorIndex_1;
  };
  DefaultErrorStrategy.prototype._set_lastErrorStates__3438115153_nnqc5h_k$ = function (_set____804775014) {
    this.lastErrorStates_1 = _set____804775014;
  };
  DefaultErrorStrategy.prototype._get_lastErrorStates__4049038557_42f3tv_k$ = function () {
    return this.lastErrorStates_1;
  };
  DefaultErrorStrategy.prototype._set_nextTokensContext__2503659651_rioxye_k$ = function (_set____804775014) {
    this.nextTokensContext_1 = _set____804775014;
  };
  DefaultErrorStrategy.prototype._get_nextTokensContext__1190531343_jot7v3_k$ = function () {
    return this.nextTokensContext_1;
  };
  DefaultErrorStrategy.prototype._set_nextTokensState__1658196705_dvdfe7_k$ = function (_set____804775014) {
    this.nextTokensState_1 = _set____804775014;
  };
  DefaultErrorStrategy.prototype._get_nextTokensState__2269120109_xi4xoz_k$ = function () {
    return this.nextTokensState_1;
  };
  DefaultErrorStrategy.prototype.reset_8vooxy_k$ = function (recognizer) {
    this.endErrorCondition_z9wxwn_k$(recognizer);
  };
  DefaultErrorStrategy.prototype.beginErrorCondition_jumdd3_k$ = function (recognizer) {
    this.errorRecoveryMode_1 = true;
  };
  DefaultErrorStrategy.prototype.inErrorRecoveryMode_xpxmaf_k$ = function (recognizer) {
    return this.errorRecoveryMode_1;
  };
  DefaultErrorStrategy.prototype.endErrorCondition_z9wxwn_k$ = function (recognizer) {
    this.errorRecoveryMode_1 = false;
    this.lastErrorStates_1 = null;
    this.lastErrorIndex_1 = -1;
  };
  DefaultErrorStrategy.prototype.reportMatch_qlge1w_k$ = function (recognizer) {
    this.endErrorCondition_z9wxwn_k$(recognizer);
  };
  DefaultErrorStrategy.prototype.reportError_dgnagc_k$ = function (recognizer, e) {
    if (this.inErrorRecoveryMode_xpxmaf_k$(recognizer)) {
      return Unit_getInstance();
    }
    this.beginErrorCondition_jumdd3_k$(recognizer);
    if (e instanceof NoViableAltException) {
      this.reportNoViableAlternative_89urbb_k$(recognizer, e instanceof NoViableAltException ? e : THROW_CCE());
    } else {
      if (e instanceof InputMismatchException) {
        this.reportInputMismatch_pscysd_k$(recognizer, e instanceof InputMismatchException ? e : THROW_CCE());
      } else {
        if (e instanceof FailedPredicateException) {
          this.reportFailedPredicate_912543_k$(recognizer, e instanceof FailedPredicateException ? e : THROW_CCE());
        } else {
          {
            errMessage('unknown recognition error type: ' + e);
            recognizer.notifyErrorListeners_t9ebjy_k$(ensureNotNull(e._get_offendingToken__2290202152_x5l2oo_k$()), ensureNotNull(e._get_message__1663917034_rinilm_k$()), e);
          }
        }
      }
    }
  };
  DefaultErrorStrategy.prototype.recover_tphv24_k$ = function (recognizer, e) {
    if ((this.lastErrorIndex_1 === ensureNotNull(recognizer.readInputStream_cn8ozw_k$()).index_1nqriq_k$() ? !(this.lastErrorStates_1 == null) : false) ? ensureNotNull(this.lastErrorStates_1).contains_1pg60y_k$(recognizer._get_state__3614753120_b8zcm8_k$()) : false) {
      recognizer.consume_fqiakc_k$();
      Unit_getInstance();
    }
    this.lastErrorIndex_1 = ensureNotNull(recognizer.readInputStream_cn8ozw_k$()).index_1nqriq_k$();
    if (this.lastErrorStates_1 == null)
      this.lastErrorStates_1 = IntervalSet_init_$Create$_1(new Int32Array([]));
    ensureNotNull(this.lastErrorStates_1).add_fx1qxd_k$(recognizer._get_state__3614753120_b8zcm8_k$());
    var followSet = this.getErrorRecoverySet_il00vd_k$(recognizer);
    this.consumeUntil_qjj3j9_k$(recognizer, followSet);
  };
  DefaultErrorStrategy.prototype.sync_ns01dy_k$ = function (recognizer) {
    var s = ensureNotNull(recognizer._get_interpreter__3830403671_7ol7l5_k$())._get_atn__856855894_e65e8m_k$()._get_states__388198729_6f4g21_k$().get_fkrdnv_k$(recognizer._get_state__3614753120_b8zcm8_k$());
    if (this.inErrorRecoveryMode_xpxmaf_k$(recognizer)) {
      return Unit_getInstance();
    }
    var tokens = recognizer.readInputStream_cn8ozw_k$();
    var la = ensureNotNull(tokens).LA_y7f82c_k$(1);
    var nextTokens = recognizer._get_atn__856855894_e65e8m_k$().nextTokens_z4h83x_k$(ensureNotNull(s));
    if (ensureNotNull(nextTokens).contains_1pg60y_k$(la)) {
      this.nextTokensContext_1 = null;
      this.nextTokensState_1 = Companion_getInstance_14()._get_INVALID_STATE_NUMBER__1984392172_wtgess_k$();
      return Unit_getInstance();
    }
    if (nextTokens.contains_1pg60y_k$(Companion_getInstance_6()._get_EPSILON__2552669447_stbhmh_k$())) {
      if (this.nextTokensContext_1 == null) {
        this.nextTokensContext_1 = recognizer._get_context__1558698818_ps0bpe_k$();
        this.nextTokensState_1 = recognizer._get_state__3614753120_b8zcm8_k$();
      }
      return Unit_getInstance();
    }
    var tmp0_subject = s._get_stateType__2749614150_pk2a4a_k$();
    if (((tmp0_subject === Companion_getInstance_14()._get_BLOCK_START__1705394593_s7ciw1_k$() ? true : tmp0_subject === Companion_getInstance_14()._get_STAR_BLOCK_START__2498915240_tpbmmw_k$()) ? true : tmp0_subject === Companion_getInstance_14()._get_PLUS_BLOCK_START__2103966048_ysnalc_k$()) ? true : tmp0_subject === Companion_getInstance_14()._get_STAR_LOOP_ENTRY__2890957197_n7wt4j_k$()) {
      if (!(this.singleTokenDeletion_uxznb9_k$(recognizer) == null)) {
        return Unit_getInstance();
      }
      throw InputMismatchException_init_$Create$(recognizer);
    } else if (tmp0_subject === Companion_getInstance_14()._get_PLUS_LOOP_BACK__1631569006_qze6pa_k$() ? true : tmp0_subject === Companion_getInstance_14()._get_STAR_LOOP_BACK__3553765558_c9aix6_k$()) {
      this.reportUnwantedToken_bo2zc8_k$(recognizer);
      var expecting = recognizer._get_expectedTokens__4165820889_24w207_k$();
      var whatFollowsLoopIterationOrRule = expecting.or_ajxx5i_k$(this.getErrorRecoverySet_il00vd_k$(recognizer));
      this.consumeUntil_qjj3j9_k$(recognizer, whatFollowsLoopIterationOrRule);
    } else {
    }
  };
  DefaultErrorStrategy.prototype.reportNoViableAlternative_89urbb_k$ = function (recognizer, e) {
    var tokens = recognizer.readInputStream_cn8ozw_k$();
    var input;
    if (!(tokens == null)) {
      if (ensureNotNull(e._get_startToken__566310068_9d5zn8_k$())._get_type__810427985_deia8h_k$() === Companion_getInstance_6()._get_EOF__855984949_e5mq7p_k$())
        input = '<EOF>';
      else
        input = ensureNotNull(e._get_startToken__566310068_9d5zn8_k$()._get_text__809840318_de5ose_k$());
    } else {
      input = '<unknown input>';
    }
    var msg = 'no viable alternative at input ' + this.escapeWSAndQuote_bv6g7z_k$(input);
    recognizer.notifyErrorListeners_t9ebjy_k$(ensureNotNull(e._get_offendingToken__2290202152_x5l2oo_k$()), msg, e);
  };
  DefaultErrorStrategy.prototype.reportInputMismatch_pscysd_k$ = function (recognizer, e) {
    var msg = 'mismatched input ' + this.getTokenErrorDisplay_yxu4n4_k$(e._get_offendingToken__2290202152_x5l2oo_k$()) + ' expecting ' + ensureNotNull(e._get_expectedTokens__4165820889_24w207_k$()).toString_dmzcgh_k$(recognizer._get_vocabulary__3716553829_9kdeor_k$());
    recognizer.notifyErrorListeners_t9ebjy_k$(ensureNotNull(e._get_offendingToken__2290202152_x5l2oo_k$()), msg, e);
  };
  DefaultErrorStrategy.prototype.reportFailedPredicate_912543_k$ = function (recognizer, e) {
    var ruleName = ensureNotNull(recognizer._get_ruleNames__2055232037_xzmr6t_k$())[ensureNotNull(recognizer._get_context__1558698818_ps0bpe_k$())._get_ruleIndex__1923824091_vte863_k$()];
    var msg = 'rule ' + ruleName + ' ' + e._get_message__1663917034_rinilm_k$();
    recognizer.notifyErrorListeners_t9ebjy_k$(ensureNotNull(e._get_offendingToken__2290202152_x5l2oo_k$()), msg, e);
  };
  DefaultErrorStrategy.prototype.reportUnwantedToken_bo2zc8_k$ = function (recognizer) {
    if (this.inErrorRecoveryMode_xpxmaf_k$(recognizer)) {
      return Unit_getInstance();
    }
    this.beginErrorCondition_jumdd3_k$(recognizer);
    var t = recognizer._get_currentToken__2006966603_x6w9cb_k$();
    var tokenName = this.getTokenErrorDisplay_yxu4n4_k$(t);
    var expecting = this.getExpectedTokens_j7dov0_k$(recognizer);
    var msg = 'extraneous input ' + tokenName + ' expecting ' + expecting.toString_dmzcgh_k$(recognizer._get_vocabulary__3716553829_9kdeor_k$());
    recognizer.notifyErrorListeners_t9ebjy_k$(ensureNotNull(t), msg, null);
  };
  DefaultErrorStrategy.prototype.reportMissingToken_4k7ocu_k$ = function (recognizer) {
    if (this.inErrorRecoveryMode_xpxmaf_k$(recognizer)) {
      return Unit_getInstance();
    }
    this.beginErrorCondition_jumdd3_k$(recognizer);
    var t = recognizer._get_currentToken__2006966603_x6w9cb_k$();
    var expecting = this.getExpectedTokens_j7dov0_k$(recognizer);
    var msg = 'missing ' + expecting.toString_dmzcgh_k$(recognizer._get_vocabulary__3716553829_9kdeor_k$()) + ' at ' + this.getTokenErrorDisplay_yxu4n4_k$(t);
    recognizer.notifyErrorListeners_t9ebjy_k$(ensureNotNull(t), msg, null);
  };
  DefaultErrorStrategy.prototype.recoverInline_4nx07t_k$ = function (recognizer) {
    var matchedSymbol = this.singleTokenDeletion_uxznb9_k$(recognizer);
    if (!(matchedSymbol == null)) {
      recognizer.consume_fqiakc_k$();
      Unit_getInstance();
      return matchedSymbol;
    }
    if (this.singleTokenInsertion_2fek2i_k$(recognizer)) {
      return this.getMissingSymbol_oizzx8_k$(recognizer);
    }
    var tmp;
    if (this.nextTokensContext_1 == null) {
      tmp = InputMismatchException_init_$Create$(recognizer);
    } else {
      tmp = InputMismatchException_init_$Create$_0(recognizer, this.nextTokensState_1, ensureNotNull(this.nextTokensContext_1));
    }
    var e = tmp;
    throw e;
  };
  DefaultErrorStrategy.prototype.singleTokenInsertion_2fek2i_k$ = function (recognizer) {
    var currentSymbolType = ensureNotNull(recognizer.readInputStream_cn8ozw_k$()).LA_y7f82c_k$(1);
    var currentState = ensureNotNull(recognizer._get_interpreter__3830403671_7ol7l5_k$())._get_atn__856855894_e65e8m_k$()._get_states__388198729_6f4g21_k$().get_fkrdnv_k$(recognizer._get_state__3614753120_b8zcm8_k$());
    var next = ensureNotNull(currentState).transition_bdhd2s_k$(0)._get_target__747061146_ccs42i_k$();
    var atn = ensureNotNull(recognizer._get_interpreter__3830403671_7ol7l5_k$())._get_atn__856855894_e65e8m_k$();
    var expectingAtLL2 = atn.nextTokens_1ht9us_k$(ensureNotNull(next), recognizer._get_context__1558698818_ps0bpe_k$());
    if (expectingAtLL2.contains_1pg60y_k$(currentSymbolType)) {
      this.reportMissingToken_4k7ocu_k$(recognizer);
      return true;
    }
    return false;
  };
  DefaultErrorStrategy.prototype.singleTokenDeletion_uxznb9_k$ = function (recognizer) {
    var nextTokenType = ensureNotNull(recognizer.readInputStream_cn8ozw_k$()).LA_y7f82c_k$(2);
    var expecting = this.getExpectedTokens_j7dov0_k$(recognizer);
    if (expecting.contains_1pg60y_k$(nextTokenType)) {
      this.reportUnwantedToken_bo2zc8_k$(recognizer);
      recognizer.consume_fqiakc_k$();
      Unit_getInstance();
      var matchedSymbol = recognizer._get_currentToken__2006966603_x6w9cb_k$();
      this.reportMatch_qlge1w_k$(recognizer);
      return matchedSymbol;
    }
    return null;
  };
  DefaultErrorStrategy.prototype.getMissingSymbol_oizzx8_k$ = function (recognizer) {
    var currentSymbol = recognizer._get_currentToken__2006966603_x6w9cb_k$();
    var expecting = this.getExpectedTokens_j7dov0_k$(recognizer);
    var expectedTokenType = Companion_getInstance_6()._get_INVALID_TYPE__2936648937_mgph5j_k$();
    if (!expecting._get_isNil__3326961706_g0bpw6_k$()) {
      expectedTokenType = expecting._get_minElement__3755190657_8xdabj_k$();
    }
    var tokenText;
    if (expectedTokenType === Companion_getInstance_6()._get_EOF__855984949_e5mq7p_k$())
      tokenText = '<missing EOF>';
    else
      tokenText = '<missing ' + recognizer._get_vocabulary__3716553829_9kdeor_k$().getDisplayName_u57fdi_k$(expectedTokenType) + '>';
    var current = currentSymbol;
    var tmp = recognizer.readInputStream_cn8ozw_k$();
    var lookback = ((!(tmp == null) ? isInterface(tmp, TokenStream) : false) ? tmp : THROW_CCE()).LT_6crwc9_k$(-1);
    if (ensureNotNull(current)._get_type__810427985_deia8h_k$() === Companion_getInstance_6()._get_EOF__855984949_e5mq7p_k$() ? !(lookback == null) : false) {
      current = lookback;
    }
    return recognizer._get_tokenFactory__3459348122_dti7vq_k$().create_4bchqq_k$(new Pair(current._get_tokenSource__2506733725_tko1ur_k$(), ensureNotNull(current._get_tokenSource__2506733725_tko1ur_k$()).readInputStream_cn8ozw_k$()), expectedTokenType, tokenText, Companion_getInstance_6()._get_DEFAULT_CHANNEL__1918603244_vqabqk_k$(), -1, -1, current._get_line__802561239_d9to7r_k$(), current._get_charPositionInLine__2377044051_vpvr1p_k$());
  };
  DefaultErrorStrategy.prototype.getExpectedTokens_j7dov0_k$ = function (recognizer) {
    return recognizer._get_expectedTokens__4165820889_24w207_k$();
  };
  DefaultErrorStrategy.prototype.getTokenErrorDisplay_yxu4n4_k$ = function (t) {
    if (t == null)
      return '<no token>';
    var s = this.getSymbolText_a15z0f_k$(t);
    if (s == null) {
      if (this.getSymbolType_ab1u6s_k$(t) === Companion_getInstance_6()._get_EOF__855984949_e5mq7p_k$()) {
        s = '<EOF>';
      } else {
        s = '<' + this.getSymbolType_ab1u6s_k$(t) + '>';
      }
    }
    return this.escapeWSAndQuote_bv6g7z_k$(s);
  };
  DefaultErrorStrategy.prototype.getSymbolText_a15z0f_k$ = function (symbol) {
    return ensureNotNull(symbol._get_text__809840318_de5ose_k$());
  };
  DefaultErrorStrategy.prototype.getSymbolType_ab1u6s_k$ = function (symbol) {
    return symbol._get_type__810427985_deia8h_k$();
  };
  DefaultErrorStrategy.prototype.escapeWSAndQuote_bv6g7z_k$ = function (s) {
    var s_0 = s;
    var tmp = s_0;
    s_0 = replace$default(tmp, '\n', '\\n', false, 4, null);
    var tmp_0 = s_0;
    s_0 = replace$default(tmp_0, '\r', '\\r', false, 4, null);
    var tmp_1 = s_0;
    s_0 = replace$default(tmp_1, '\t', '\\t', false, 4, null);
    return "'" + s_0 + "'";
  };
  DefaultErrorStrategy.prototype.getErrorRecoverySet_il00vd_k$ = function (recognizer) {
    var atn = ensureNotNull(recognizer._get_interpreter__3830403671_7ol7l5_k$())._get_atn__856855894_e65e8m_k$();
    var ctx = recognizer._get_context__1558698818_ps0bpe_k$();
    var recoverSet = IntervalSet_init_$Create$_1(new Int32Array([]));
    while (!(ctx == null) ? ensureNotNull(ctx)._get_invokingState__3304690165_gdl2q3_k$() >= 0 : false) {
      var invokingState = atn._get_states__388198729_6f4g21_k$().get_fkrdnv_k$(ensureNotNull(ctx)._get_invokingState__3304690165_gdl2q3_k$());
      var tmp = ensureNotNull(invokingState).transition_bdhd2s_k$(0);
      var rt = tmp instanceof RuleTransition ? tmp : THROW_CCE();
      var follow = atn.nextTokens_z4h83x_k$(rt._get_followState__3560924721_c512vj_k$());
      recoverSet.addAll_z9dmpz_k$(follow);
      Unit_getInstance();
      ctx = ensureNotNull(ctx).readParent_9zdz4w_k$();
    }
    recoverSet.remove_nib8oc_k$(Companion_getInstance_6()._get_EPSILON__2552669447_stbhmh_k$());
    return recoverSet;
  };
  DefaultErrorStrategy.prototype.consumeUntil_qjj3j9_k$ = function (recognizer, set) {
    var ttype = ensureNotNull(recognizer.readInputStream_cn8ozw_k$()).LA_y7f82c_k$(1);
    while (!(ttype === Companion_getInstance_6()._get_EOF__855984949_e5mq7p_k$()) ? !set.contains_1pg60y_k$(ttype) : false) {
      recognizer.consume_fqiakc_k$();
      Unit_getInstance();
      ttype = ensureNotNull(recognizer.readInputStream_cn8ozw_k$()).LA_y7f82c_k$(1);
    }
  };
  DefaultErrorStrategy.$metadata$ = {
    simpleName: 'DefaultErrorStrategy',
    kind: 'class',
    interfaces: [ANTLRErrorStrategy]
  };
  function FailedPredicateException_init_$Init$(recognizer, predicate, message, $mask0, $marker, $this) {
    if (!(($mask0 & 2) === 0))
      predicate = null;
    if (!(($mask0 & 4) === 0))
      message = null;
    FailedPredicateException.call($this, recognizer, predicate, message);
    return $this;
  }
  function FailedPredicateException_init_$Create$(recognizer, predicate, message, $mask0, $marker) {
    var tmp = FailedPredicateException_init_$Init$(recognizer, predicate, message, $mask0, $marker, Object.create(FailedPredicateException.prototype));
    captureStack(tmp, FailedPredicateException_init_$Create$);
    return tmp;
  }
  function FailedPredicateException(recognizer, predicate, message) {
    RecognitionException.call(this, recognizer, ensureNotNull(recognizer.readInputStream_cn8ozw_k$()), ensureNotNull(recognizer._get_context__1558698818_ps0bpe_k$()), formatMessage(predicate, message));
    this.predicate_1 = predicate;
    this.ruleIndex_1 = -1;
    this.predIndex_1 = -1;
    var s = ensureNotNull(recognizer._get_interpreter__3830403671_7ol7l5_k$())._get_atn__856855894_e65e8m_k$()._get_states__388198729_6f4g21_k$().get_fkrdnv_k$(recognizer._get_state__3614753120_b8zcm8_k$());
    var tmp = ensureNotNull(s).transition_bdhd2s_k$(0);
    var trans = tmp instanceof AbstractPredicateTransition ? tmp : THROW_CCE();
    if (trans instanceof PredicateTransition) {
      var tmp_0 = this;
      tmp_0.ruleIndex_1 = (trans instanceof PredicateTransition ? trans : THROW_CCE())._get_ruleIndex__1923824091_vte863_k$();
      var tmp_1 = this;
      tmp_1.predIndex_1 = (trans instanceof PredicateTransition ? trans : THROW_CCE())._get_predIndex__3241973056_hexbk0_k$();
    } else {
      {
        this.ruleIndex_1 = 0;
        this.predIndex_1 = 0;
      }
    }
    {
      throw NotImplementedError_init_$Create$(null, 1, null);
    }
  }
  FailedPredicateException.prototype._get_predicate__4147871610_2fkrra_k$ = function () {
    return this.predicate_1;
  };
  FailedPredicateException.prototype._set_ruleIndex__152087887_m9etbz_k$ = function (_set____804775014) {
    this.ruleIndex_1 = _set____804775014;
  };
  FailedPredicateException.prototype._get_ruleIndex__1923824091_vte863_k$ = function () {
    return this.ruleIndex_1;
  };
  FailedPredicateException.prototype._set_predIndex__1470236852_8ib530_k$ = function (_set____804775014) {
    this.predIndex_1 = _set____804775014;
  };
  FailedPredicateException.prototype._get_predIndex__3241973056_hexbk0_k$ = function () {
    return this.predIndex_1;
  };
  FailedPredicateException.$metadata$ = {
    simpleName: 'FailedPredicateException',
    kind: 'class',
    interfaces: []
  };
  function formatMessage(predicate, message) {
    var tmp0_elvis_lhs = message;
    return tmp0_elvis_lhs == null ? 'failed predicate: {' + predicate + '}?' : tmp0_elvis_lhs;
  }
  function InputMismatchException_init_$Init$(recognizer, $this) {
    var tmp = ensureNotNull(recognizer.readInputStream_cn8ozw_k$());
    var tmp_0 = ensureNotNull(recognizer._get_context__1558698818_ps0bpe_k$());
    RecognitionException_init_$Init$(recognizer, tmp, tmp_0, null, 8, null, $this);
    InputMismatchException.call($this);
    $this._set_offendingToken__746474292_qtwqee_k$(recognizer._get_currentToken__2006966603_x6w9cb_k$());
    return $this;
  }
  function InputMismatchException_init_$Create$(recognizer) {
    var tmp = InputMismatchException_init_$Init$(recognizer, Object.create(InputMismatchException.prototype));
    captureStack(tmp, InputMismatchException_init_$Create$);
    return tmp;
  }
  function InputMismatchException_init_$Init$_0(recognizer, state, ctx, $this) {
    var tmp = ensureNotNull(recognizer.readInputStream_cn8ozw_k$());
    RecognitionException_init_$Init$(recognizer, tmp, ctx, null, 8, null, $this);
    InputMismatchException.call($this);
    $this._set_offendingState__722178972_ptb990_k$(state);
    $this._set_offendingToken__746474292_qtwqee_k$(recognizer._get_currentToken__2006966603_x6w9cb_k$());
    return $this;
  }
  function InputMismatchException_init_$Create$_0(recognizer, state, ctx) {
    var tmp = InputMismatchException_init_$Init$_0(recognizer, state, ctx, Object.create(InputMismatchException.prototype));
    captureStack(tmp, InputMismatchException_init_$Create$_0);
    return tmp;
  }
  function InputMismatchException() {
    captureStack(this, InputMismatchException);
  }
  InputMismatchException.$metadata$ = {
    simpleName: 'InputMismatchException',
    kind: 'class',
    interfaces: []
  };
  function Companion_2() {
    Companion_instance_2 = this;
    this.EOF_1 = -1;
    this.UNKNOWN_SOURCE_NAME_1 = '<unknown>';
  }
  Companion_2.prototype._get_EOF__855984949_e5mq7p_k$ = function () {
    return this.EOF_1;
  };
  Companion_2.prototype._get_UNKNOWN_SOURCE_NAME__736680503_c6lmbb_k$ = function () {
    return this.UNKNOWN_SOURCE_NAME_1;
  };
  Companion_2.$metadata$ = {
    simpleName: 'Companion',
    kind: 'object',
    interfaces: []
  };
  var Companion_instance_2;
  function Companion_getInstance_3() {
    if (Companion_instance_2 == null)
      new Companion_2();
    return Companion_instance_2;
  }
  function IntStream() {
    Companion_getInstance_3();
  }
  IntStream.$metadata$ = {
    simpleName: 'IntStream',
    kind: 'interface',
    interfaces: []
  };
  function Lexer_init_$Init$($this) {
    Recognizer.call($this);
    Lexer.call($this);
    return $this;
  }
  function Lexer_init_$Create$() {
    return Lexer_init_$Init$(Object.create(Lexer.prototype));
  }
  function Lexer_init_$Init$_0(input, $this) {
    Recognizer.call($this);
    Lexer.call($this);
    $this._set_inputStream__3222178139_33dwuh_k$(input);
    $this._tokenFactorySourcePair_1 = new Pair($this, input);
    return $this;
  }
  function Lexer_init_$Create$_0(input) {
    return Lexer_init_$Init$_0(input, Object.create(Lexer.prototype));
  }
  function Companion_3() {
    Companion_instance_3 = this;
    this.DEFAULT_MODE_1 = 0;
    this.MORE_1 = -2;
    this.SKIP_1 = -3;
    this.DEFAULT_TOKEN_CHANNEL_1 = Companion_getInstance_6()._get_DEFAULT_CHANNEL__1918603244_vqabqk_k$();
    this.HIDDEN_1 = Companion_getInstance_6()._get_HIDDEN_CHANNEL__4161557629_27ffk3_k$();
    this.MIN_CHAR_VALUE_1 = 0;
    this.MAX_CHAR_VALUE_1 = 1114111;
  }
  Companion_3.prototype._get_DEFAULT_MODE__788028522_d166p6_k$ = function () {
    return this.DEFAULT_MODE_1;
  };
  Companion_3.prototype._get_MORE__773129622_csaumu_k$ = function () {
    return this.MORE_1;
  };
  Companion_3.prototype._get_SKIP__778543276_cvivu4_k$ = function () {
    return this.SKIP_1;
  };
  Companion_3.prototype._get_DEFAULT_TOKEN_CHANNEL__3825883858_7ra33i_k$ = function () {
    return this.DEFAULT_TOKEN_CHANNEL_1;
  };
  Companion_3.prototype._get_HIDDEN__3915915937_69odwf_k$ = function () {
    return this.HIDDEN_1;
  };
  Companion_3.prototype._get_MIN_CHAR_VALUE__2426922326_uw6oq2_k$ = function () {
    return this.MIN_CHAR_VALUE_1;
  };
  Companion_3.prototype._get_MAX_CHAR_VALUE__3537361256_cj24k8_k$ = function () {
    return this.MAX_CHAR_VALUE_1;
  };
  Companion_3.$metadata$ = {
    simpleName: 'Companion',
    kind: 'object',
    interfaces: []
  };
  var Companion_instance_3;
  function Companion_getInstance_4() {
    if (Companion_instance_3 == null)
      new Companion_3();
    return Companion_instance_3;
  }
  Lexer.prototype.assignInputStream_rrft07_k$ = function (newValue) {
    this.assignInputStream_6rpp7k_k$((newValue == null ? true : isInterface(newValue, CharStream)) ? newValue : THROW_CCE());
  };
  Lexer.prototype.assignInputStream_6rpp7k_k$ = function (input) {
    this._set_inputStream__3222178139_33dwuh_k$(null);
    this._tokenFactorySourcePair_1 = new Pair(this, null);
    this.reset_5tn5dq_k$();
    this._set_inputStream__3222178139_33dwuh_k$((!(input == null) ? isInterface(input, CharStream) : false) ? input : THROW_CCE());
    this._tokenFactorySourcePair_1 = new Pair(this, this.readInputStream_cn8ozw_k$());
  };
  Lexer.prototype.readInputStream_cn8ozw_k$ = function () {
    var tmp = this._get_inputStream__758653671_cjokx3_k$();
    return (tmp == null ? true : isInterface(tmp, CharStream)) ? tmp : THROW_CCE();
  };
  Lexer.prototype._set__tokenFactorySourcePair__1923924416_wnucsv_k$ = function (_set____804775014) {
    this._tokenFactorySourcePair_1 = _set____804775014;
  };
  Lexer.prototype._get__tokenFactorySourcePair__685795660_bcazbg_k$ = function () {
    return this._tokenFactorySourcePair_1;
  };
  Lexer.prototype._set_tokenFactory__2519195302_cze9i_k$ = function (_set____804775014) {
    this.tokenFactory_1 = _set____804775014;
  };
  Lexer.prototype._set_tokenFactory__2519195302_tyru0b_k$ = function (_set____804775014) {
    return this._set_tokenFactory__2519195302_cze9i_k$(_set____804775014);
  };
  Lexer.prototype._get_tokenFactory__3459348122_dti7vq_k$ = function () {
    return this.tokenFactory_1;
  };
  Lexer.prototype._set_token__1280886380_l5clcy_k$ = function (_set____804775014) {
    this.token_1 = _set____804775014;
  };
  Lexer.prototype._get_token__3639048440_auim88_k$ = function () {
    return this.token_1;
  };
  Lexer.prototype._set__tokenStartCharIndex__2425396835_2jkc4t_k$ = function (_set____804775014) {
    this._tokenStartCharIndex_1 = _set____804775014;
  };
  Lexer.prototype._get__tokenStartCharIndex__1582105175_q5y05z_k$ = function () {
    return this._tokenStartCharIndex_1;
  };
  Lexer.prototype._set__tokenStartLine__2374988905_hc5f3b_k$ = function (_set____804775014) {
    this._tokenStartLine_1 = _set____804775014;
  };
  Lexer.prototype._get__tokenStartLine__2985912309_lndlaj_k$ = function () {
    return this._tokenStartLine_1;
  };
  Lexer.prototype._set__tokenStartCharPositionInLine__3286663269_cizmc5_k$ = function (_set____804775014) {
    this._tokenStartCharPositionInLine_1 = _set____804775014;
  };
  Lexer.prototype._get__tokenStartCharPositionInLine__3865661169_73liq7_k$ = function () {
    return this._tokenStartCharPositionInLine_1;
  };
  Lexer.prototype._set__hitEOF__2664686333_59gito_k$ = function (_set____804775014) {
    this._hitEOF_1 = _set____804775014;
  };
  Lexer.prototype._get__hitEOF__1115693705_ig96rt_k$ = function () {
    return this._hitEOF_1;
  };
  Lexer.prototype._set_channel__812662498_ugi8aa_k$ = function (_set____804775014) {
    this.channel_1 = _set____804775014;
  };
  Lexer.prototype._get_channel__3558637166_c6e3yq_k$ = function () {
    return this.channel_1;
  };
  Lexer.prototype._set_type__595810909_36q4vn_k$ = function (_set____804775014) {
    this.type_1 = _set____804775014;
  };
  Lexer.prototype._get_type__810427985_deia8h_k$ = function () {
    return this.type_1;
  };
  Lexer.prototype._get__modeStack__610161701_a39vs5_k$ = function () {
    return this._modeStack_1;
  };
  Lexer.prototype._set__mode__677945091_e5rho3_k$ = function (_set____804775014) {
    this._mode_1 = _set____804775014;
  };
  Lexer.prototype._get__mode__3036107151_kthqpd_k$ = function () {
    return this._mode_1;
  };
  Lexer.prototype._set__text__684131513_kmhyye_k$ = function (_set____804775014) {
    this._text_1 = _set____804775014;
  };
  Lexer.prototype._get__text__3042293573_kpt58b_k$ = function () {
    return this._text_1;
  };
  Lexer.prototype._get_sourceName__2307762181_wv4pa3_k$ = function () {
    return ensureNotNull(ensureNotNull(this._get_inputStream__758653671_cjokx3_k$())._get_sourceName__2307762181_wv4pa3_k$());
  };
  Lexer.prototype._set_line__587944163_xvf6r1_k$ = function (line) {
    ensureNotNull(this._get_interpreter__3830403671_7ol7l5_k$())._set_line__587944163_xvf6r1_k$(line);
  };
  Lexer.prototype._get_line__802561239_d9to7r_k$ = function () {
    return ensureNotNull(this._get_interpreter__3830403671_7ol7l5_k$())._get_line__802561239_d9to7r_k$();
  };
  Lexer.prototype._set_charPositionInLine__134348639_7venf3_k$ = function (charPositionInLine) {
    ensureNotNull(this._get_interpreter__3830403671_7ol7l5_k$())._set_charPositionInLine__134348639_7venf3_k$(charPositionInLine);
  };
  Lexer.prototype._get_charPositionInLine__2377044051_vpvr1p_k$ = function () {
    return ensureNotNull(this._get_interpreter__3830403671_7ol7l5_k$())._get_charPositionInLine__2377044051_vpvr1p_k$();
  };
  Lexer.prototype._get_charIndex__3555199669_c8fscr_k$ = function () {
    return ensureNotNull(this._get_inputStream__758653671_cjokx3_k$()).index_1nqriq_k$();
  };
  Lexer.prototype._set_text__595223242_f11phk_k$ = function (text) {
    this._text_1 = text;
  };
  Lexer.prototype._get_text__809840318_de5ose_k$ = function () {
    var tmp;
    if (!(this._text_1 == null)) {
      tmp = ensureNotNull(this._text_1);
    } else {
      tmp = ensureNotNull(this._get_interpreter__3830403671_7ol7l5_k$()).getText_s3whmy_k$(ensureNotNull(this.readInputStream_cn8ozw_k$()));
    }
    return tmp;
  };
  Lexer.prototype._get_channelNames__1015995878_gswbfq_k$ = function () {
    return null;
  };
  Lexer.prototype._get_modeNames__4235010956_zp2lw_k$ = function () {
    return null;
  };
  Lexer.prototype._get_tokenNames__755820956_chzv6k_k$ = function () {
    return null;
  };
  Lexer.prototype._get_allTokens__3234289430_hji0a2_k$ = function () {
    var tokens = ArrayList_init_$Create$_0();
    var t = this.nextToken_jykgjq_k$();
    while (!(ensureNotNull(t)._get_type__810427985_deia8h_k$() === Companion_getInstance_6()._get_EOF__855984949_e5mq7p_k$())) {
      tokens.add_1j60pz_k$(t);
      Unit_getInstance();
      t = this.nextToken_jykgjq_k$();
    }
    return tokens;
  };
  Lexer.prototype.reset_5tn5dq_k$ = function () {
    if (!(this._get_inputStream__758653671_cjokx3_k$() == null)) {
      ensureNotNull(this._get_inputStream__758653671_cjokx3_k$()).seek_5aisp4_k$(0);
    }
    this.token_1 = null;
    this.type_1 = Companion_getInstance_6()._get_INVALID_TYPE__2936648937_mgph5j_k$();
    this.channel_1 = Companion_getInstance_6()._get_DEFAULT_CHANNEL__1918603244_vqabqk_k$();
    this._tokenStartCharIndex_1 = -1;
    this._tokenStartCharPositionInLine_1 = -1;
    this._tokenStartLine_1 = -1;
    this._text_1 = null;
    this._hitEOF_1 = false;
    this._mode_1 = Companion_getInstance_4().DEFAULT_MODE_1;
    this._modeStack_1.clear_j9y8zo_k$();
    ensureNotNull(this._get_interpreter__3830403671_7ol7l5_k$()).reset_5tn5dq_k$();
  };
  Lexer.prototype.nextToken_jykgjq_k$ = function () {
    if (this._get_inputStream__758653671_cjokx3_k$() == null) {
      throw IllegalStateException_init_$Create$('nextToken requires a non-null input stream.');
    }
    var tokenStartMarker = ensureNotNull(this._get_inputStream__758653671_cjokx3_k$()).mark_1zob1_k$();
    try {
      outer: while (true) {
        if (this._hitEOF_1) {
          this.emitEOF_qyns2f_k$();
          Unit_getInstance();
          return ensureNotNull(this.token_1);
        }
        this.token_1 = null;
        this.channel_1 = Companion_getInstance_6()._get_DEFAULT_CHANNEL__1918603244_vqabqk_k$();
        this._tokenStartCharIndex_1 = ensureNotNull(this._get_inputStream__758653671_cjokx3_k$()).index_1nqriq_k$();
        this._tokenStartCharPositionInLine_1 = ensureNotNull(this._get_interpreter__3830403671_7ol7l5_k$())._get_charPositionInLine__2377044051_vpvr1p_k$();
        this._tokenStartLine_1 = ensureNotNull(this._get_interpreter__3830403671_7ol7l5_k$())._get_line__802561239_d9to7r_k$();
        this._text_1 = null;
        do {
          this.type_1 = Companion_getInstance_6()._get_INVALID_TYPE__2936648937_mgph5j_k$();
          var ttype;
          try {
            ttype = ensureNotNull(this._get_interpreter__3830403671_7ol7l5_k$()).match_xqlx9l_k$(ensureNotNull(this.readInputStream_cn8ozw_k$()), this._mode_1);
          } catch ($p) {
            if ($p instanceof LexerNoViableAltException) {
              this.notifyListeners_uxqoh0_k$($p);
              this.recover_rjgbfy_k$($p);
              ttype = Companion_getInstance_4().SKIP_1;
            } else {
              {
                throw $p;
              }
            }
          }
          if (ensureNotNull(this._get_inputStream__758653671_cjokx3_k$()).LA_y7f82c_k$(1) === Companion_getInstance_3()._get_EOF__855984949_e5mq7p_k$()) {
            this._hitEOF_1 = true;
          }
          if (this.type_1 === Companion_getInstance_6()._get_INVALID_TYPE__2936648937_mgph5j_k$())
            this.type_1 = ttype;
          if (this.type_1 === Companion_getInstance_4().SKIP_1) {
            continue outer;
          }
        }
         while (this.type_1 === Companion_getInstance_4().MORE_1);
        if (this.token_1 == null) {
          this.emit_1ut3n_k$();
          Unit_getInstance();
        }
        return ensureNotNull(this.token_1);
      }
    }finally {
      ensureNotNull(this._get_inputStream__758653671_cjokx3_k$()).release_knbvef_k$(tokenStartMarker);
    }
  };
  Lexer.prototype.skip_xudknm_k$ = function () {
    this.type_1 = Companion_getInstance_4().SKIP_1;
  };
  Lexer.prototype.more_hk1t6k_k$ = function () {
    this.type_1 = Companion_getInstance_4().MORE_1;
  };
  Lexer.prototype.mode_oeyrir_k$ = function (m) {
    this._mode_1 = m;
  };
  Lexer.prototype.pushMode_bzuv65_k$ = function (m) {
    if (Companion_getInstance_16()._get_debug__3171493854_ikvxnm_k$())
      println('pushMode ' + m);
    this._modeStack_1.push_bcmxcm_k$(this._mode_1);
    this.mode_oeyrir_k$(m);
  };
  Lexer.prototype.popMode_6j8zfw_k$ = function () {
    if (this._modeStack_1._get_isEmpty__1500737838_oti0q6_k$())
      throw RuntimeException_init_$Create$();
    if (Companion_getInstance_16()._get_debug__3171493854_ikvxnm_k$())
      outMessage('popMode back to ' + this._modeStack_1.peek_21nx7_k$());
    this.mode_oeyrir_k$(this._modeStack_1.pop_2dsh_k$());
    return this._mode_1;
  };
  Lexer.prototype.emit_e0gr0o_k$ = function (token) {
    this.token_1 = token;
  };
  Lexer.prototype.emit_1ut3n_k$ = function () {
    var t = this._get_tokenFactory__3459348122_dti7vq_k$().create_4bchqq_k$(ensureNotNull(this._tokenFactorySourcePair_1), this.type_1, this._text_1, this.channel_1, this._tokenStartCharIndex_1, this._get_charIndex__3555199669_c8fscr_k$() - 1 | 0, this._tokenStartLine_1, this._tokenStartCharPositionInLine_1);
    this.emit_e0gr0o_k$(t);
    return t;
  };
  Lexer.prototype.emitEOF_qyns2f_k$ = function () {
    var cpos = this._get_charPositionInLine__2377044051_vpvr1p_k$();
    var line = this._get_line__802561239_d9to7r_k$();
    var eof = this._get_tokenFactory__3459348122_dti7vq_k$().create_4bchqq_k$(ensureNotNull(this._tokenFactorySourcePair_1), Companion_getInstance_6()._get_EOF__855984949_e5mq7p_k$(), null, Companion_getInstance_6()._get_DEFAULT_CHANNEL__1918603244_vqabqk_k$(), ensureNotNull(this._get_inputStream__758653671_cjokx3_k$()).index_1nqriq_k$(), ensureNotNull(this._get_inputStream__758653671_cjokx3_k$()).index_1nqriq_k$() - 1 | 0, line, cpos);
    this.emit_e0gr0o_k$(eof);
    return eof;
  };
  Lexer.prototype.recover_rjgbfy_k$ = function (e) {
    if (!(ensureNotNull(this._get_inputStream__758653671_cjokx3_k$()).LA_y7f82c_k$(1) === Companion_getInstance_3()._get_EOF__855984949_e5mq7p_k$())) {
      ensureNotNull(this._get_interpreter__3830403671_7ol7l5_k$()).consume_56q6m6_k$(ensureNotNull(this.readInputStream_cn8ozw_k$()));
    }
  };
  Lexer.prototype.notifyListeners_uxqoh0_k$ = function (e) {
    var text = ensureNotNull(this.readInputStream_cn8ozw_k$()).getText_egqjjt_k$(Companion_getInstance_31().of_9v4utl_k$(this._tokenStartCharIndex_1, ensureNotNull(this._get_inputStream__758653671_cjokx3_k$()).index_1nqriq_k$()));
    var msg = "token recognition error at: '" + this.getErrorDisplay_8sfw35_k$(text) + "'";
    var listener = this._get_errorListenerDispatch__3164396827_ip41r9_k$();
    listener.syntaxError_xqoc25_k$(this, null, this._tokenStartLine_1, this._tokenStartCharPositionInLine_1, msg, e);
  };
  Lexer.prototype.getErrorDisplay_8sfw35_k$ = function (s) {
    var buf = StringBuilder_init_$Create$();
    var indexedObject = asCharArray(s);
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var c = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      buf.append_ssq29y_k$(this.getErrorDisplay_rfpxxr_k$(Char__toInt_impl_2402388783(c)));
      Unit_getInstance();
    }
    return buf.toString();
  };
  Lexer.prototype.getErrorDisplay_rfpxxr_k$ = function (c) {
    var s = toString_0(numberToChar(c));
    var tmp0_subject = c;
    if (tmp0_subject === Companion_getInstance_6()._get_EOF__855984949_e5mq7p_k$())
      s = '<EOF>';
    else if (tmp0_subject === 10)
      s = '\\n';
    else if (tmp0_subject === 9)
      s = '\\t';
    else if (tmp0_subject === 13)
      s = '\\r';
    return s;
  };
  Lexer.prototype.getCharErrorDisplay_jqfquz_k$ = function (c) {
    var s = this.getErrorDisplay_rfpxxr_k$(c);
    return "'" + s + "'";
  };
  Lexer.prototype.recover_5hy96w_k$ = function (re) {
    ensureNotNull(this._get_inputStream__758653671_cjokx3_k$()).consume_spbz2t_k$();
  };
  function Lexer() {
    Companion_getInstance_4();
    this._tokenFactorySourcePair_1 = null;
    this.tokenFactory_1 = Companion_getInstance_2()._get_DEFAULT__3552918800_c9soa8_k$();
    this.token_1 = null;
    this._tokenStartCharIndex_1 = -1;
    this._tokenStartLine_1 = 0;
    this._tokenStartCharPositionInLine_1 = 0;
    this._hitEOF_1 = false;
    this.channel_1 = 0;
    this.type_1 = 0;
    this._modeStack_1 = IntegerStack_init_$Create$();
    this._mode_1 = Companion_getInstance_4().DEFAULT_MODE_1;
    this._text_1 = null;
  }
  Lexer.$metadata$ = {
    simpleName: 'Lexer',
    kind: 'class',
    interfaces: [TokenSource]
  };
  function LexerNoViableAltException(lexer, input, startIndex, deadEndConfigs) {
    RecognitionException_init_$Init$(lexer, input, null, null, 8, null, this);
    this.startIndex_1 = startIndex;
    this.deadEndConfigs_1 = deadEndConfigs;
    captureStack(this, LexerNoViableAltException);
  }
  LexerNoViableAltException.prototype._get_startIndex__250257659_44zw1n_k$ = function () {
    return this.startIndex_1;
  };
  LexerNoViableAltException.prototype._get_deadEndConfigs__1192939953_jq8ucx_k$ = function () {
    return this.deadEndConfigs_1;
  };
  LexerNoViableAltException.prototype._get_inputStream__758653671_cjokx3_k$ = function () {
    var tmp = RecognitionException.prototype._get_inputStream__758653671_cjokx3_k$.call(this);
    return isInterface(tmp, CharStream) ? tmp : THROW_CCE();
  };
  LexerNoViableAltException.prototype.toString = function () {
    var symbol = '';
    if (this.startIndex_1 >= 0 ? this.startIndex_1 < this._get_inputStream__758653671_cjokx3_k$().size_23och_k$() : false) {
      symbol = this._get_inputStream__758653671_cjokx3_k$().getText_egqjjt_k$(Companion_getInstance_31().of_9v4utl_k$(this.startIndex_1, this.startIndex_1));
      symbol = Utils_getInstance().escapeWhitespace_yaf43n_k$(symbol, false);
    }
    return "LexerNoViableAltException('" + symbol + "')";
  };
  LexerNoViableAltException.$metadata$ = {
    simpleName: 'LexerNoViableAltException',
    kind: 'class',
    interfaces: []
  };
  function NoViableAltException_init_$Init$(recognizer, input, startToken, offendingToken, deadEndConfigs, ctx, $mask0, $marker, $this) {
    if (!(($mask0 & 2) === 0)) {
      var tmp = recognizer.readInputStream_cn8ozw_k$();
      input = (tmp == null ? true : isInterface(tmp, TokenStream)) ? tmp : THROW_CCE();
    }
    if (!(($mask0 & 4) === 0))
      startToken = recognizer._get_currentToken__2006966603_x6w9cb_k$();
    if (!(($mask0 & 8) === 0))
      offendingToken = recognizer._get_currentToken__2006966603_x6w9cb_k$();
    if (!(($mask0 & 16) === 0))
      deadEndConfigs = null;
    if (!(($mask0 & 32) === 0))
      ctx = recognizer._get_context__1558698818_ps0bpe_k$();
    NoViableAltException.call($this, recognizer, input, startToken, offendingToken, deadEndConfigs, ctx);
    return $this;
  }
  function NoViableAltException_init_$Create$(recognizer, input, startToken, offendingToken, deadEndConfigs, ctx, $mask0, $marker) {
    var tmp = NoViableAltException_init_$Init$(recognizer, input, startToken, offendingToken, deadEndConfigs, ctx, $mask0, $marker, Object.create(NoViableAltException.prototype));
    captureStack(tmp, NoViableAltException_init_$Create$);
    return tmp;
  }
  function NoViableAltException(recognizer, input, startToken, offendingToken, deadEndConfigs, ctx) {
    var tmp = ensureNotNull(input);
    var tmp_0 = ensureNotNull(ctx);
    RecognitionException_init_$Init$(recognizer, tmp, tmp_0, null, 8, null, this);
    this.startToken_1 = startToken;
    this.deadEndConfigs_1 = deadEndConfigs;
    this._set_offendingToken__746474292_qtwqee_k$(offendingToken);
    captureStack(this, NoViableAltException);
  }
  NoViableAltException.prototype._get_startToken__566310068_9d5zn8_k$ = function () {
    return this.startToken_1;
  };
  NoViableAltException.prototype._get_deadEndConfigs__1192939953_jq8ucx_k$ = function () {
    return this.deadEndConfigs_1;
  };
  NoViableAltException.$metadata$ = {
    simpleName: 'NoViableAltException',
    kind: 'class',
    interfaces: []
  };
  function Parser(input) {
    Recognizer.call(this);
    this.errorHandler_1 = new DefaultErrorStrategy();
    this._input_1 = input;
    this._precedenceStack_1 = IntegerStack_init_$Create$();
    this.context_1 = null;
    this.buildParseTree_1 = true;
    this._parseListeners_1 = ArrayList_init_$Create$_0();
    this.numberOfSyntaxErrors_1 = 0;
    this.isMatchedEOF_1 = false;
    this.assignInputStream_rrft07_k$(input);
  }
  Parser.prototype.assignInputStream_rrft07_k$ = function (newValue) {
    this._set_inputStream__3222178139_33dwuh_k$(newValue);
  };
  Parser.prototype.readInputStream_cn8ozw_k$ = function () {
    return this._get_inputStream__758653671_cjokx3_k$();
  };
  Parser.prototype._set_errorHandler__2204440949_71nmlr_k$ = function (_set____804775014) {
    this.errorHandler_1 = _set____804775014;
  };
  Parser.prototype._get_errorHandler__3144593769_j0whw7_k$ = function () {
    return this.errorHandler_1;
  };
  Parser.prototype._set__input__3721363116_1ix66a_k$ = function (_set____804775014) {
    this._input_1 = _set____804775014;
  };
  Parser.prototype._get__input__3809942944_80rr6o_k$ = function () {
    return this._input_1;
  };
  Parser.prototype._get__precedenceStack__2654638668_r4lxo4_k$ = function () {
    return this._precedenceStack_1;
  };
  Parser.prototype._set_context__3107691446_5mlqml_k$ = function (_set____804775014) {
    this.context_1 = _set____804775014;
  };
  Parser.prototype._get_context__1558698818_ps0bpe_k$ = function () {
    return this.context_1;
  };
  Parser.prototype._set_buildParseTree__2261161300_z2rzzf_k$ = function (_set____804775014) {
    this.buildParseTree_1 = _set____804775014;
  };
  Parser.prototype._get_buildParseTree__3804889160_83s2pk_k$ = function () {
    return this.buildParseTree_1;
  };
  Parser.prototype._set__parseListeners__339092218_l3dthn_k$ = function (_set____804775014) {
    this._parseListeners_1 = _set____804775014;
  };
  Parser.prototype._get__parseListeners__950015622_fpm4qu_k$ = function () {
    return this._parseListeners_1;
  };
  Parser.prototype._set_numberOfSyntaxErrors__635919817_kkido9_k$ = function (_set____804775014) {
    this.numberOfSyntaxErrors_1 = _set____804775014;
  };
  Parser.prototype._get_numberOfSyntaxErrors__4087595453_3fgp4z_k$ = function () {
    return this.numberOfSyntaxErrors_1;
  };
  Parser.prototype._set_isMatchedEOF__3828833173_pgwb78_k$ = function (_set____804775014) {
    this.isMatchedEOF_1 = _set____804775014;
  };
  Parser.prototype._get_isMatchedEOF__474018697_7u7v61_k$ = function () {
    return this.isMatchedEOF_1;
  };
  Parser.prototype._get_parseListeners__3288287935_gncmrl_k$ = function () {
    return this._parseListeners_1;
  };
  Parser.prototype._set_tokenFactory__2519195302_tyru0b_k$ = function (factory) {
    ensureNotNull(ensureNotNull(this._input_1)._get_tokenSource__2506733725_tko1ur_k$())._set_tokenFactory__2519195302_tyru0b_k$(factory);
  };
  Parser.prototype._get_tokenFactory__3459348122_dti7vq_k$ = function () {
    return ensureNotNull(ensureNotNull(this._input_1)._get_tokenSource__2506733725_tko1ur_k$())._get_tokenFactory__3459348122_dti7vq_k$();
  };
  Parser.prototype._set_tokenStream__815277132_gjeqse_k$ = function (input) {
    this._input_1 = null;
    this.reset_5tn5dq_k$();
    this._input_1 = input;
  };
  Parser.prototype._get_tokenStream__2646719960_r9bns8_k$ = function () {
    return this._input_1;
  };
  Parser.prototype._get_currentToken__2006966603_x6w9cb_k$ = function () {
    return ensureNotNull(this._input_1).LT_6crwc9_k$(1);
  };
  Parser.prototype._get_precedence__3064254401_kcqg5b_k$ = function () {
    var tmp;
    if (this._precedenceStack_1._get_isEmpty__1500737838_oti0q6_k$()) {
      tmp = -1;
    } else {
      tmp = this._precedenceStack_1.peek_21nx7_k$();
    }
    return tmp;
  };
  Parser.prototype._get_expectedTokens__4165820889_24w207_k$ = function () {
    return this._get_atn__856855894_e65e8m_k$().getExpectedTokens_orplj2_k$(this._get_state__3614753120_b8zcm8_k$(), this.context_1);
  };
  Parser.prototype._get_ruleInvocationStack__1809866965_txjqad_k$ = function () {
    return this.getRuleInvocationStack_cmhryp_k$(this.context_1);
  };
  Parser.prototype._get_dfaStrings__2867877768_nlnhbs_k$ = function () {
    var tmp$ret$0;
    {
      var tmp0_synchronized_0 = ensureNotNull(this._get_interpreter__3830403671_7ol7l5_k$())._get_decisionToDFA__1733740713_so82w9_k$();
      var s_2 = ArrayList_init_$Create$_0();
      var inductionVariable = 0;
      var last = ensureNotNull(this._get_interpreter__3830403671_7ol7l5_k$())._get_decisionToDFA__1733740713_so82w9_k$().length;
      if (inductionVariable < last)
        do {
          var d_4 = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var dfa_5 = ensureNotNull(this._get_interpreter__3830403671_7ol7l5_k$())._get_decisionToDFA__1733740713_so82w9_k$()[d_4];
          s_2.add_1j60pz_k$(ensureNotNull(dfa_5.toString_dmzcgh_k$(this._get_vocabulary__3716553829_9kdeor_k$())));
          Unit_getInstance();
        }
         while (inductionVariable < last);
      return s_2;
    }
    return tmp$ret$0;
  };
  Parser.prototype._get_sourceName__2307762181_wv4pa3_k$ = function () {
    return ensureNotNull(ensureNotNull(this._input_1)._get_sourceName__2307762181_wv4pa3_k$());
  };
  Parser.prototype._get_parseInfo__1986056304_wug2uo_k$ = function () {
    var interp = this._get_interpreter__3830403671_7ol7l5_k$();
    var tmp;
    if (interp instanceof ProfilingATNSimulator) {
      tmp = new ParseInfo(interp instanceof ProfilingATNSimulator ? interp : THROW_CCE());
    } else {
      {
        tmp = null;
      }
    }
    return tmp;
  };
  Parser.prototype.reset_5tn5dq_k$ = function () {
    {
      throw NotImplementedError_init_$Create$(null, 1, null);
    }
  };
  Parser.prototype.match_vjr6ck_k$ = function (ttype) {
    var t = this._get_currentToken__2006966603_x6w9cb_k$();
    if (ensureNotNull(t)._get_type__810427985_deia8h_k$() === ttype) {
      if (ttype === Companion_getInstance_6()._get_EOF__855984949_e5mq7p_k$()) {
        this.isMatchedEOF_1 = true;
      }
      this.errorHandler_1.reportMatch_qlge1w_k$(this);
      this.consume_fqiakc_k$();
      Unit_getInstance();
    } else {
      t = this.errorHandler_1.recoverInline_4nx07t_k$(this);
      if (this.buildParseTree_1 ? t._get_tokenIndex__624413010_abrc5u_k$() === -1 : false) {
        ensureNotNull(this.context_1).addErrorNode_6gzfpc_k$(this.createErrorNode_esafeu_k$(this.context_1, t));
        Unit_getInstance();
      }
    }
    return t;
  };
  Parser.prototype.matchWildcard_r5k9mn_k$ = function () {
    var t = this._get_currentToken__2006966603_x6w9cb_k$();
    if (ensureNotNull(t)._get_type__810427985_deia8h_k$() > 0) {
      this.errorHandler_1.reportMatch_qlge1w_k$(this);
      this.consume_fqiakc_k$();
      Unit_getInstance();
    } else {
      t = this.errorHandler_1.recoverInline_4nx07t_k$(this);
      if (this.buildParseTree_1 ? t._get_tokenIndex__624413010_abrc5u_k$() === -1 : false) {
        ensureNotNull(this.context_1).addErrorNode_6gzfpc_k$(this.createErrorNode_esafeu_k$(this.context_1, t));
        Unit_getInstance();
      }
    }
    return t;
  };
  Parser.prototype.addParseListener_b61luh_k$ = function (listener) {
    this._parseListeners_1.add_1j60pz_k$(listener);
    Unit_getInstance();
  };
  Parser.prototype.removeParseListener_no08ws_k$ = function (listener) {
    this._parseListeners_1.remove_8hbkc6_k$(listener);
    Unit_getInstance();
  };
  Parser.prototype.removeParseListeners_unixwf_k$ = function () {
    this._parseListeners_1.clear_j9y8zo_k$();
  };
  Parser.prototype.triggerEnterRuleEvent_thajd9_k$ = function () {
    var tmp0_iterator = this._parseListeners_1.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var listener = tmp0_iterator.next_20eer_k$();
      listener.enterEveryRule_qb430n_k$(ensureNotNull(this.context_1));
      ensureNotNull(this.context_1).enterRule_nsg4az_k$(listener);
    }
  };
  Parser.prototype.triggerExitRuleEvent_m80f55_k$ = function () {
    var inductionVariable = this._parseListeners_1._get_size__809037418_ddoh9m_k$() - 1 | 0;
    if (0 <= inductionVariable)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + -1 | 0;
        var listener = this._parseListeners_1.get_fkrdnv_k$(i);
        ensureNotNull(this.context_1).exitRule_ixwge3_k$(listener);
        listener.exitEveryRule_1zne9f_k$(ensureNotNull(this.context_1));
      }
       while (0 <= inductionVariable);
  };
  Parser.prototype.notifyErrorListeners_bm61im_k$ = function (msg) {
    {
      var tmp0_require_0 = !(this._get_currentToken__2006966603_x6w9cb_k$() == null);
      {
      }
      {
        {
        }
        if (!tmp0_require_0) {
          var tmp$ret$0;
          $l$block: {
            tmp$ret$0 = 'Failed requirement.';
            break $l$block;
          }
          var message_1_1 = tmp$ret$0;
          throw IllegalArgumentException_init_$Create$(toString(message_1_1));
        }
      }
    }
    this.notifyErrorListeners_t9ebjy_k$(ensureNotNull(this._get_currentToken__2006966603_x6w9cb_k$()), msg, null);
  };
  Parser.prototype.notifyErrorListeners_t9ebjy_k$ = function (offendingToken, msg, e) {
    var tmp0_this = this;
    var tmp1 = tmp0_this.numberOfSyntaxErrors_1;
    tmp0_this.numberOfSyntaxErrors_1 = tmp1 + 1 | 0;
    Unit_getInstance();
    var line = -1;
    var charPositionInLine = -1;
    line = offendingToken._get_line__802561239_d9to7r_k$();
    charPositionInLine = offendingToken._get_charPositionInLine__2377044051_vpvr1p_k$();
    var listener = this._get_errorListenerDispatch__3164396827_ip41r9_k$();
    listener.syntaxError_xqoc25_k$(this, offendingToken, line, charPositionInLine, msg, e);
  };
  Parser.prototype.consume_fqiakc_k$ = function () {
    var o = this._get_currentToken__2006966603_x6w9cb_k$();
    {
      var tmp0_require_0 = !(o == null);
      {
      }
      if (!tmp0_require_0) {
        var tmp$ret$0;
        $l$block: {
          tmp$ret$0 = 'current token must not be null when consuming';
          break $l$block;
        }
        var message_1 = tmp$ret$0;
        throw IllegalArgumentException_init_$Create$(toString(message_1));
      }
    }
    if (!(ensureNotNull(o)._get_type__810427985_deia8h_k$() === Companion_getInstance_5()._get_EOF__855984949_e5mq7p_k$())) {
      ensureNotNull(this._get_inputStream__758653671_cjokx3_k$()).consume_spbz2t_k$();
    }
    var tmp$ret$1;
    $l$block_0: {
      var tmp1_isNotEmpty_0 = this._parseListeners_1;
      tmp$ret$1 = !tmp1_isNotEmpty_0.isEmpty_y1axqb_k$();
      break $l$block_0;
    }
    var hasListener = tmp$ret$1;
    if (this.buildParseTree_1 ? true : hasListener) {
      if (this.errorHandler_1.inErrorRecoveryMode_xpxmaf_k$(this)) {
        var node = ensureNotNull(this.context_1).addErrorNode_6gzfpc_k$(this.createErrorNode_esafeu_k$(this.context_1, o));
        var tmp0_iterator = this._parseListeners_1.iterator_jk1svi_k$();
        while (tmp0_iterator.hasNext_bitz1p_k$()) {
          var listener = tmp0_iterator.next_20eer_k$();
          listener.visitErrorNode_7q1wqt_k$(node);
        }
      } else {
        var node_0 = ensureNotNull(this.context_1).addChild_tzbc7q_k$(this.createTerminalNode_bgzc4m_k$(this.context_1, o));
        var tmp1_iterator = this._parseListeners_1.iterator_jk1svi_k$();
        while (tmp1_iterator.hasNext_bitz1p_k$()) {
          var listener_0 = tmp1_iterator.next_20eer_k$();
          listener_0.visitTerminal_j27dif_k$(node_0);
        }
      }
    }
    return o;
  };
  Parser.prototype.createTerminalNode_bgzc4m_k$ = function (parent, t) {
    return new TerminalNodeImpl(t);
  };
  Parser.prototype.createErrorNode_esafeu_k$ = function (parent, t) {
    return new ErrorNodeImpl(t);
  };
  Parser.prototype.addContextToParseTree_icuxjd_k$ = function () {
    var tmp = ensureNotNull(this.context_1).readParent_9zdz4w_k$();
    var parent = (tmp == null ? true : tmp instanceof ParserRuleContext) ? tmp : THROW_CCE();
    if (!(parent == null)) {
      parent.addChild_2bw2gr_k$(ensureNotNull(this.context_1));
      Unit_getInstance();
    }
  };
  Parser.prototype.enterRule_khu8i_k$ = function (localctx, state, ruleIndex) {
    this._set_state__1256591060_i39zdo_k$(state);
    this.context_1 = localctx;
    ensureNotNull(this.context_1)._set_start__1256589603_j393jf_k$(ensureNotNull(this._input_1).LT_6crwc9_k$(1));
    if (this.buildParseTree_1)
      this.addContextToParseTree_icuxjd_k$();
    this.triggerEnterRuleEvent_thajd9_k$();
  };
  Parser.prototype.exitRule_qudul3_k$ = function () {
    if (this.isMatchedEOF_1) {
      ensureNotNull(this.context_1)._set_stop__594737813_7umtdl_k$(ensureNotNull(this._input_1).LT_6crwc9_k$(1));
    } else {
      ensureNotNull(this.context_1)._set_stop__594737813_7umtdl_k$(ensureNotNull(this._input_1).LT_6crwc9_k$(-1));
    }
    this.triggerExitRuleEvent_m80f55_k$();
    this._set_state__1256591060_i39zdo_k$(ensureNotNull(this.context_1)._get_invokingState__3304690165_gdl2q3_k$());
    var tmp = this;
    var tmp_0 = ensureNotNull(this.context_1).readParent_9zdz4w_k$();
    tmp.context_1 = (tmp_0 == null ? true : tmp_0 instanceof ParserRuleContext) ? tmp_0 : THROW_CCE();
  };
  Parser.prototype.enterOuterAlt_9lkdc1_k$ = function (localctx, altNum) {
    localctx._set_altNumber__1663603123_18qvvn_k$(altNum);
    if (this.buildParseTree_1 ? !(this.context_1 === localctx) : false) {
      var tmp = ensureNotNull(this.context_1).readParent_9zdz4w_k$();
      var parent = (tmp == null ? true : tmp instanceof ParserRuleContext) ? tmp : THROW_CCE();
      if (!(parent == null)) {
        parent.removeLastChild_xbytzj_k$();
        parent.addChild_2bw2gr_k$(localctx);
        Unit_getInstance();
      }
    }
    this.context_1 = localctx;
  };
  Parser.prototype.enterRecursionRule_alh25d_k$ = function (localctx, ruleIndex) {
    this.enterRecursionRule_swkmkf_k$(localctx, ensureNotNull(ensureNotNull(this._get_atn__856855894_e65e8m_k$()._get_ruleToStartState__1344368709_m8ehj9_k$())[ruleIndex])._get_stateNumber__4121888151_2v1oq1_k$(), ruleIndex, 0);
  };
  Parser.prototype.enterRecursionRule_swkmkf_k$ = function (localctx, state, ruleIndex, precedence) {
    this._set_state__1256591060_i39zdo_k$(state);
    this._precedenceStack_1.push_bcmxcm_k$(precedence);
    this.context_1 = localctx;
    ensureNotNull(this.context_1)._set_start__1256589603_j393jf_k$(ensureNotNull(this._input_1).LT_6crwc9_k$(1));
    this.triggerEnterRuleEvent_thajd9_k$();
  };
  Parser.prototype.pushNewRecursionContext_r5dsj7_k$ = function (localctx, state, ruleIndex) {
    var previous = this.context_1;
    ensureNotNull(previous).assignParent_4sf3io_k$(localctx);
    ensureNotNull(previous)._set_invokingState__4224723817_ng3dt3_k$(state);
    ensureNotNull(previous)._set_stop__594737813_7umtdl_k$(ensureNotNull(this._input_1).LT_6crwc9_k$(-1));
    this.context_1 = localctx;
    ensureNotNull(this.context_1)._set_start__1256589603_j393jf_k$(ensureNotNull(previous)._get_start__3614751663_b8zdqp_k$());
    if (this.buildParseTree_1) {
      ensureNotNull(this.context_1).addChild_2bw2gr_k$(previous);
      Unit_getInstance();
    }
    this.triggerEnterRuleEvent_thajd9_k$();
  };
  Parser.prototype.unrollRecursionContexts_qpzf9j_k$ = function (_parentctx) {
    this._precedenceStack_1.pop_2dsh_k$();
    Unit_getInstance();
    ensureNotNull(this.context_1)._set_stop__594737813_7umtdl_k$(ensureNotNull(this._input_1).LT_6crwc9_k$(-1));
    var retctx = this.context_1;
    while (!(this.context_1 === _parentctx)) {
      this.triggerExitRuleEvent_m80f55_k$();
      var tmp = this;
      var tmp_0 = ensureNotNull(this.context_1).readParent_9zdz4w_k$();
      tmp.context_1 = (tmp_0 == null ? true : tmp_0 instanceof ParserRuleContext) ? tmp_0 : THROW_CCE();
    }
    ensureNotNull(retctx).assignParent_4sf3io_k$(_parentctx);
    if (this.buildParseTree_1 ? !(_parentctx == null) : false) {
      _parentctx.addChild_2bw2gr_k$(retctx);
      Unit_getInstance();
    }
  };
  Parser.prototype.getRuleIndex_ndo4w1_k$ = function (ruleName) {
    var ruleIndex = this._get_ruleIndexMap__600440773_9xhj2d_k$().get_1mhr4y_k$(ruleName);
    return !(ruleIndex == null) ? ensureNotNull(ruleIndex) : -1;
  };
  Parser.prototype.getRuleContext_3wxrmr_k$ = function () {
    return this.context_1;
  };
  Parser.prototype.getRuleInvocationStack_cmhryp_k$ = function (p) {
    var p_0 = p;
    var ruleNames = this._get_ruleNames__2055232037_xzmr6t_k$();
    var stack = ArrayList_init_$Create$_0();
    while (!(p_0 == null)) {
      var ruleIndex = ensureNotNull(p_0)._get_ruleIndex__1923824091_vte863_k$();
      if (ruleIndex < 0) {
        stack.add_1j60pz_k$('n/a');
        Unit_getInstance();
      } else {
        stack.add_1j60pz_k$(ensureNotNull(ruleNames)[ruleIndex]);
        Unit_getInstance();
      }
      p_0 = ensureNotNull(p_0).readParent_9zdz4w_k$();
    }
    return stack;
  };
  Parser.$metadata$ = {
    simpleName: 'Parser',
    kind: 'class',
    interfaces: []
  };
  function ParserRuleContext_init_$Init$($this) {
    RuleContext_init_$Init$($this);
    ParserRuleContext.call($this);
    return $this;
  }
  function ParserRuleContext_init_$Create$() {
    return ParserRuleContext_init_$Init$(Object.create(ParserRuleContext.prototype));
  }
  function ParserRuleContext_init_$Init$_0(parent, invokingStateNumber, $this) {
    RuleContext_init_$Init$_0(parent, invokingStateNumber, $this);
    ParserRuleContext.call($this);
    return $this;
  }
  function ParserRuleContext_init_$Create$_0(parent, invokingStateNumber) {
    return ParserRuleContext_init_$Init$_0(parent, invokingStateNumber, Object.create(ParserRuleContext.prototype));
  }
  ParserRuleContext.prototype._set_children__2161684408_me33n2_k$ = function (_set____804775014) {
    this.children_1 = _set____804775014;
  };
  ParserRuleContext.prototype._get_children__1387553196_my42wc_k$ = function () {
    return this.children_1;
  };
  ParserRuleContext.prototype._get_position__3188952002_iahqv2_k$ = function () {
    return (!(this.start_1 == null) ? !(ensureNotNull(this.stop_1).endPoint_sb0gad_k$() == null) : false) ? new Position(ensureNotNull(this.start_1).startPoint_q8y2lu_k$(), ensureNotNull(ensureNotNull(this.stop_1).endPoint_sb0gad_k$())) : null;
  };
  ParserRuleContext.prototype._set_start__1256589603_j393jf_k$ = function (_set____804775014) {
    this.start_1 = _set____804775014;
  };
  ParserRuleContext.prototype._get_start__3614751663_b8zdqp_k$ = function () {
    return this.start_1;
  };
  ParserRuleContext.prototype._set_stop__594737813_7umtdl_k$ = function (_set____804775014) {
    this.stop_1 = _set____804775014;
  };
  ParserRuleContext.prototype._get_stop__809354889_ddva89_k$ = function () {
    return this.stop_1;
  };
  ParserRuleContext.prototype._set_exception__4196179798_uncphf_k$ = function (_set____804775014) {
    this.exception_1 = _set____804775014;
  };
  ParserRuleContext.prototype._get_exception__1672948706_ro13he_k$ = function () {
    return this.exception_1;
  };
  ParserRuleContext.prototype.assignParent_4sf3io_k$ = function (value) {
    this._set_parent__1403382957_g94l8b_k$(value);
  };
  ParserRuleContext.prototype.assignParent_bbznx3_k$ = function (value) {
    this.assignParent_4sf3io_k$((value == null ? true : value instanceof ParserRuleContext) ? value : THROW_CCE());
  };
  ParserRuleContext.prototype._get_childCount__662683032_ayjli0_k$ = function () {
    return !(this.children_1 == null) ? ensureNotNull(this.children_1)._get_size__809037418_ddoh9m_k$() : 0;
  };
  ParserRuleContext.prototype._get_sourceInterval__288930827_4s0sgb_k$ = function () {
    if (this.start_1 == null) {
      return Companion_getInstance_31()._get_INVALID__3532429338_clzu1y_k$();
    }
    var tmp;
    if (this.stop_1 == null ? true : ensureNotNull(this.stop_1)._get_tokenIndex__624413010_abrc5u_k$() < ensureNotNull(this.start_1)._get_tokenIndex__624413010_abrc5u_k$()) {
      tmp = Companion_getInstance_31().of_9v4utl_k$(ensureNotNull(this.start_1)._get_tokenIndex__624413010_abrc5u_k$(), ensureNotNull(this.start_1)._get_tokenIndex__624413010_abrc5u_k$() - 1 | 0);
    } else {
      tmp = Companion_getInstance_31().of_9v4utl_k$(ensureNotNull(this.start_1)._get_tokenIndex__624413010_abrc5u_k$(), ensureNotNull(this.stop_1)._get_tokenIndex__624413010_abrc5u_k$());
    }
    return tmp;
  };
  ParserRuleContext.prototype.copyFrom_qn07yf_k$ = function (ctx) {
    this._set_parent__1403382957_g94l8b_k$(ctx._get_parent__1491962785_oo9xup_k$());
    this._set_invokingState__4224723817_ng3dt3_k$(ctx._get_invokingState__3304690165_gdl2q3_k$());
    this.start_1 = ctx.start_1;
    this.stop_1 = ctx.stop_1;
    if (!(ctx.children_1 == null)) {
      this.children_1 = ArrayList_init_$Create$_0();
      var tmp0_iterator = ensureNotNull(ctx.children_1).iterator_jk1svi_k$();
      while (tmp0_iterator.hasNext_bitz1p_k$()) {
        var child = tmp0_iterator.next_20eer_k$();
        if (isInterface(child, ErrorNode)) {
          this.addChild_tzbc7q_k$(isInterface(child, ErrorNode) ? child : THROW_CCE());
          Unit_getInstance();
        } else {
        }
      }
    }
  };
  ParserRuleContext.prototype.enterRule_nsg4az_k$ = function (listener) {
  };
  ParserRuleContext.prototype.exitRule_ixwge3_k$ = function (listener) {
  };
  ParserRuleContext.prototype.addAnyChild_uc33l4_k$ = function (t) {
    if (this.children_1 == null)
      this.children_1 = ArrayList_init_$Create$_0();
    ensureNotNull(this.children_1).add_1j60pz_k$(t);
    Unit_getInstance();
    return t;
  };
  ParserRuleContext.prototype.addChild_2bw2gr_k$ = function (ruleInvocation) {
    return this.addAnyChild_uc33l4_k$(ruleInvocation);
  };
  ParserRuleContext.prototype.addChild_tzbc7q_k$ = function (t) {
    t.assignParent_bbznx3_k$(this);
    return this.addAnyChild_uc33l4_k$(t);
  };
  ParserRuleContext.prototype.addErrorNode_6gzfpc_k$ = function (errorNode) {
    errorNode.assignParent_bbznx3_k$(this);
    return this.addAnyChild_uc33l4_k$(errorNode);
  };
  ParserRuleContext.prototype.addChild_o9iufz_k$ = function (matchedToken) {
    var t = new TerminalNodeImpl(matchedToken);
    this.addAnyChild_uc33l4_k$(t);
    Unit_getInstance();
    t.assignParent_bbznx3_k$(this);
    return t;
  };
  ParserRuleContext.prototype.addErrorNode_l2bno3_k$ = function (badToken) {
    var t = new ErrorNodeImpl(badToken);
    this.addAnyChild_uc33l4_k$(t);
    Unit_getInstance();
    t.assignParent_bbznx3_k$(this);
    return t;
  };
  ParserRuleContext.prototype.removeLastChild_xbytzj_k$ = function () {
    if (!(this.children_1 == null)) {
      ensureNotNull(this.children_1).removeAt_qvpkxi_k$(ensureNotNull(this.children_1)._get_size__809037418_ddoh9m_k$() - 1 | 0);
      Unit_getInstance();
    }
  };
  ParserRuleContext.prototype.getChild_tm8i57_k$ = function (i) {
    return ((!(this.children_1 == null) ? i >= 0 : false) ? i < ensureNotNull(this.children_1)._get_size__809037418_ddoh9m_k$() : false) ? ensureNotNull(this.children_1).get_fkrdnv_k$(i) : null;
  };
  ParserRuleContext.prototype.getChild_4ohi07_k$ = function (ctxType, i) {
    if ((this.children_1 == null ? true : i < 0) ? true : i >= ensureNotNull(this.children_1)._get_size__809037418_ddoh9m_k$()) {
      return null;
    }
    var j = -1;
    var tmp0_iterator = ensureNotNull(this.children_1).iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var o = tmp0_iterator.next_20eer_k$();
      if (isInstance(ctxType, o)) {
        var tmp1 = j;
        j = tmp1 + 1 | 0;
        Unit_getInstance();
        if (j === i) {
          return isInterface(o, ParseTree) ? o : THROW_CCE();
        }
      }
    }
    return null;
  };
  ParserRuleContext.prototype.getToken_851db1_k$ = function (ttype, i) {
    if ((this.children_1 == null ? true : i < 0) ? true : i >= ensureNotNull(this.children_1)._get_size__809037418_ddoh9m_k$()) {
      return null;
    }
    var j = -1;
    var tmp0_iterator = ensureNotNull(this.children_1).iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var o = tmp0_iterator.next_20eer_k$();
      if (isInterface(o, TerminalNode)) {
        var tnode = isInterface(o, TerminalNode) ? o : THROW_CCE();
        var symbol = tnode._get_symbol__541899891_8ymsmr_k$();
        if (ensureNotNull(symbol)._get_type__810427985_deia8h_k$() === ttype) {
          var tmp1 = j;
          j = tmp1 + 1 | 0;
          Unit_getInstance();
          if (j === i) {
            return tnode;
          }
        }
      } else {
      }
    }
    return null;
  };
  ParserRuleContext.prototype.getTokens_3gd9bl_k$ = function (ttype) {
    if (this.children_1 == null) {
      return emptyList();
    }
    var tokens = null;
    var tmp0_iterator = ensureNotNull(this.children_1).iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var o = tmp0_iterator.next_20eer_k$();
      if (isInterface(o, TerminalNode)) {
        var tnode = isInterface(o, TerminalNode) ? o : THROW_CCE();
        var symbol = tnode._get_symbol__541899891_8ymsmr_k$();
        if (ensureNotNull(symbol)._get_type__810427985_deia8h_k$() === ttype) {
          if (tokens == null) {
            tokens = ArrayList_init_$Create$_0();
          }
          tokens.add_1j60pz_k$(tnode);
          Unit_getInstance();
        }
      } else {
      }
    }
    var tmp;
    if (tokens == null) {
      tmp = emptyList();
    } else {
      tmp = tokens;
    }
    return tmp;
  };
  ParserRuleContext.prototype.getRuleContext_ytpucw_k$ = function (ctxType, i) {
    var tmp = this.getChild_4ohi07_k$(ctxType, i);
    return (tmp == null ? true : tmp instanceof ParserRuleContext) ? tmp : THROW_CCE();
  };
  ParserRuleContext.prototype.getRuleContexts_tryqxi_k$ = function (ctxType) {
    if (this.children_1 == null) {
      return emptyList();
    }
    var contexts = null;
    var tmp0_iterator = ensureNotNull(this.children_1).iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var o = tmp0_iterator.next_20eer_k$();
      if (isInstance(ctxType, o)) {
        if (contexts == null) {
          contexts = ArrayList_init_$Create$_0();
        }
        var tmp = contexts;
        tmp.add_1j60pz_k$(o instanceof ParserRuleContext ? o : THROW_CCE());
        Unit_getInstance();
      }
    }
    var tmp_0;
    if (contexts == null) {
      tmp_0 = emptyList();
    } else {
      tmp_0 = contexts;
    }
    return tmp_0;
  };
  function ParserRuleContext() {
    this.children_1 = null;
    this.start_1 = null;
    this.stop_1 = null;
    this.exception_1 = null;
  }
  ParserRuleContext.$metadata$ = {
    simpleName: 'ParserRuleContext',
    kind: 'class',
    interfaces: []
  };
  function _get_delegates__81891459($this) {
    return $this.delegates_1;
  }
  function ProxyErrorListener(delegates) {
    this.delegates_1 = delegates;
    if (this.delegates_1 == null) {
      throw NullPointerException_init_$Create$('delegates');
    }
  }
  ProxyErrorListener.prototype.syntaxError_xqoc25_k$ = function (recognizer, offendingSymbol, line, charPositionInLine, msg, e) {
    var tmp0_iterator = ensureNotNull(this.delegates_1).iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var listener = tmp0_iterator.next_20eer_k$();
      listener.syntaxError_xqoc25_k$(recognizer, offendingSymbol, line, charPositionInLine, msg, e);
    }
  };
  ProxyErrorListener.prototype.reportAmbiguity_ql6tmj_k$ = function (recognizer, dfa, startIndex, stopIndex, exact, ambigAlts, configs) {
    var tmp0_iterator = ensureNotNull(this.delegates_1).iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var listener = tmp0_iterator.next_20eer_k$();
      listener.reportAmbiguity_ql6tmj_k$(recognizer, dfa, startIndex, stopIndex, exact, ambigAlts, configs);
    }
  };
  ProxyErrorListener.prototype.reportAttemptingFullContext_pfnryh_k$ = function (recognizer, dfa, startIndex, stopIndex, conflictingAlts, configs) {
    var tmp0_iterator = ensureNotNull(this.delegates_1).iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var listener = tmp0_iterator.next_20eer_k$();
      listener.reportAttemptingFullContext_pfnryh_k$(recognizer, dfa, startIndex, stopIndex, conflictingAlts, configs);
    }
  };
  ProxyErrorListener.prototype.reportContextSensitivity_o5w5aq_k$ = function (recognizer, dfa, startIndex, stopIndex, prediction, configs) {
    var tmp0_iterator = ensureNotNull(this.delegates_1).iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var listener = tmp0_iterator.next_20eer_k$();
      listener.reportContextSensitivity_o5w5aq_k$(recognizer, dfa, startIndex, stopIndex, prediction, configs);
    }
  };
  ProxyErrorListener.$metadata$ = {
    simpleName: 'ProxyErrorListener',
    kind: 'class',
    interfaces: [ANTLRErrorListener]
  };
  function RecognitionException_init_$Init$(recognizer, inputStream, ctx, message, $mask0, $marker, $this) {
    if (!(($mask0 & 8) === 0))
      message = null;
    RecognitionException.call($this, recognizer, inputStream, ctx, message);
    return $this;
  }
  function RecognitionException_init_$Create$(recognizer, inputStream, ctx, message, $mask0, $marker) {
    var tmp = RecognitionException_init_$Init$(recognizer, inputStream, ctx, message, $mask0, $marker, Object.create(RecognitionException.prototype));
    captureStack(tmp, RecognitionException_init_$Create$);
    return tmp;
  }
  function RecognitionException(recognizer, inputStream, ctx, message) {
    RuntimeException_init_$Init$(this);
    this.recognizer_1 = recognizer;
    this.inputStream_1 = inputStream;
    this.ctx_1 = ctx;
    this.message_1 = message;
    this.offendingToken_1 = null;
    this.offendingState_1 = -1;
    if (!(this.recognizer_1 == null))
      this.offendingState_1 = ensureNotNull(this.recognizer_1)._get_state__3614753120_b8zcm8_k$();
    captureStack(this, RecognitionException);
  }
  RecognitionException.prototype._get_recognizer__2849209191_nwrm3d_k$ = function () {
    return this.recognizer_1;
  };
  RecognitionException.prototype._get_inputStream__758653671_cjokx3_k$ = function () {
    return this.inputStream_1;
  };
  RecognitionException.prototype._get_ctx__856915786_e66oga_k$ = function () {
    return this.ctx_1;
  };
  RecognitionException.prototype._get_message__1663917034_rinilm_k$ = function () {
    return this.message_1;
  };
  RecognitionException.prototype._set_offendingToken__746474292_qtwqee_k$ = function (_set____804775014) {
    this.offendingToken_1 = _set____804775014;
  };
  RecognitionException.prototype._get_offendingToken__2290202152_x5l2oo_k$ = function () {
    return this.offendingToken_1;
  };
  RecognitionException.prototype._set_offendingState__722178972_ptb990_k$ = function (_set____804775014) {
    this.offendingState_1 = _set____804775014;
  };
  RecognitionException.prototype._get_offendingState__2265906832_xk1t2o_k$ = function () {
    return this.offendingState_1;
  };
  RecognitionException.prototype._get_expectedTokens__4165820889_24w207_k$ = function () {
    var tmp;
    if (!(this.recognizer_1 == null)) {
      tmp = ensureNotNull(this.recognizer_1)._get_atn__856855894_e65e8m_k$().getExpectedTokens_orplj2_k$(this.offendingState_1, this.ctx_1);
    } else {
      tmp = null;
    }
    return tmp;
  };
  RecognitionException.$metadata$ = {
    simpleName: 'RecognitionException',
    kind: 'class',
    interfaces: []
  };
  Object.defineProperty(RecognitionException.prototype, 'message', {
    configurable: true,
    get: function () {
      return this._get_message__1663917034_rinilm_k$();
    }
  });
  function _get_tokenTypeMapCache__1763627256($this) {
    return $this.tokenTypeMapCache_1;
  }
  function _get_ruleIndexMapCache__1406519797($this) {
    return $this.ruleIndexMapCache_1;
  }
  function _get__listeners__76422091($this) {
    return $this._listeners_1;
  }
  function Companion_4() {
    Companion_instance_4 = this;
    this.EOF_1 = -1;
    this.tokenTypeMapCache_1 = WeakHashMap_init_$Create$_0();
    this.ruleIndexMapCache_1 = WeakHashMap_init_$Create$_0();
  }
  Companion_4.prototype._get_EOF__855984949_e5mq7p_k$ = function () {
    return this.EOF_1;
  };
  Companion_4.$metadata$ = {
    simpleName: 'Companion',
    kind: 'object',
    interfaces: []
  };
  var Companion_instance_4;
  function Companion_getInstance_5() {
    if (Companion_instance_4 == null)
      new Companion_4();
    return Companion_instance_4;
  }
  function Recognizer() {
    Companion_getInstance_5();
    var tmp = this;
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = ArrayList_init_$Create$_0();
      break $l$block;
    }
    tmp._listeners_1 = tmp$ret$0;
    this.interpreter_1 = null;
    this.state_1 = -1;
    this.inputStream_1 = null;
  }
  Recognizer.prototype._set_interpreter__1998960843_4oqlp7_k$ = function (_set____804775014) {
    this.interpreter_1 = _set____804775014;
  };
  Recognizer.prototype._get_interpreter__3830403671_7ol7l5_k$ = function () {
    return this.interpreter_1;
  };
  Recognizer.prototype._set_state__1256591060_i39zdo_k$ = function (_set____804775014) {
    this.state_1 = _set____804775014;
  };
  Recognizer.prototype._get_state__3614753120_b8zcm8_k$ = function () {
    return this.state_1;
  };
  Recognizer.prototype._get_tokenTypeMap__2271437538_xgr9jy_k$ = function () {
    var vocabulary = this._get_vocabulary__3716553829_9kdeor_k$();
    var tmp$ret$0;
    {
      var tmp0_synchronized_0 = Companion_getInstance_5().tokenTypeMapCache_1;
      var result_2 = Companion_getInstance_5().tokenTypeMapCache_1.get_1mhr4y_k$(vocabulary);
      if (result_2 == null) {
        var tmp_3 = HashMap_init_$Create$();
        var inductionVariable = 0;
        var last = this._get_atn__856855894_e65e8m_k$()._get_maxTokenType__2953938780_m6ew84_k$();
        if (inductionVariable <= last)
          do {
            var i_5 = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var literalName_6 = vocabulary.getLiteralName_1erz7_k$(i_5);
            if (!(literalName_6 == null)) {
              {
                tmp_3.put_3mhbri_k$(literalName_6, i_5);
                Unit_getInstance();
              }
            }
            var symbolicName_7 = vocabulary.getSymbolicName_yk4gge_k$(i_5);
            if (!(symbolicName_7 == null)) {
              {
                tmp_3.put_3mhbri_k$(symbolicName_7, i_5);
                Unit_getInstance();
              }
            }
          }
           while (!(i_5 === last));
        {
          var tmp0_set_0_8 = Companion_getInstance_6()._get_EOF__855984949_e5mq7p_k$();
          tmp_3.put_3mhbri_k$('EOF', tmp0_set_0_8);
          Unit_getInstance();
        }
        result_2 = toMap(tmp_3);
        {
          var tmp1_set_0_9 = Companion_getInstance_5().tokenTypeMapCache_1;
          var tmp2_set_0_10 = result_2;
          tmp1_set_0_9.put_3mhbri_k$(vocabulary, tmp2_set_0_10);
          Unit_getInstance();
        }
      }
      return result_2;
    }
  };
  Recognizer.prototype._get_ruleIndexMap__600440773_9xhj2d_k$ = function () {
    var tmp0_elvis_lhs = this._get_ruleNames__2055232037_xzmr6t_k$();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw UnsupportedOperationException_init_$Create$('The current recognizer does not provide a list of rule names.');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var ruleNames = tmp;
    var tmp$ret$3;
    {
      var tmp0_synchronized_0 = Companion_getInstance_5().ruleIndexMapCache_1;
      var result_2 = Companion_getInstance_5().ruleIndexMapCache_1.get_1mhr4y_k$(ruleNames);
      if (result_2 == null) {
        var tmp$ret$2;
        $l$block_1: {
          var tmp$ret$1;
          $l$block_0: {
            var tmp0_mapIndexedTo_0_1_3 = ArrayList_init_$Create$(ruleNames.length);
            var index_1_2_4 = 0;
            var indexedObject = ruleNames;
            var inductionVariable = 0;
            var last = indexedObject.length;
            while (inductionVariable < last) {
              var item_3_4_6 = indexedObject[inductionVariable];
              inductionVariable = inductionVariable + 1 | 0;
              var tmp$ret$0;
              $l$block: {
                var tmp1_4_5_8 = index_1_2_4;
                index_1_2_4 = tmp1_4_5_8 + 1 | 0;
                var tmp0__anonymous__6_7_1682279318 = tmp1_4_5_8;
                tmp$ret$0 = to(item_3_4_6, tmp0__anonymous__6_7_1682279318);
                break $l$block;
              }
              tmp0_mapIndexedTo_0_1_3.add_1j60pz_k$(tmp$ret$0);
              Unit_getInstance();
            }
            tmp$ret$1 = tmp0_mapIndexedTo_0_1_3;
            break $l$block_0;
          }
          tmp$ret$2 = tmp$ret$1;
          break $l$block_1;
        }
        result_2 = toMap_0(tmp$ret$2);
        {
          var tmp1_set_0_9 = Companion_getInstance_5().ruleIndexMapCache_1;
          var tmp2_set_0_10 = result_2;
          tmp1_set_0_9.put_3mhbri_k$(ruleNames, tmp2_set_0_10);
          Unit_getInstance();
        }
      }
      return ensureNotNull(result_2);
    }
  };
  Recognizer.prototype._get_serializedATN__3461059898_dshj2e_k$ = function () {
    throw UnsupportedOperationException_init_$Create$('there is no serialized ATN');
  };
  Recognizer.prototype._get_parseInfo__1986056304_wug2uo_k$ = function () {
    return null;
  };
  Recognizer.prototype._get_errorListeners__1478663124_ogcvro_k$ = function () {
    return this._listeners_1;
  };
  Recognizer.prototype._get_errorListenerDispatch__3164396827_ip41r9_k$ = function () {
    return new ProxyErrorListener(this._get_errorListeners__1478663124_ogcvro_k$());
  };
  Recognizer.prototype._set_inputStream__3222178139_33dwuh_k$ = function (_set____804775014) {
    this.inputStream_1 = _set____804775014;
  };
  Recognizer.prototype._get_inputStream__758653671_cjokx3_k$ = function () {
    return this.inputStream_1;
  };
  Recognizer.prototype.getTokenType_vxwk64_k$ = function (tokenName) {
    var ttype = this._get_tokenTypeMap__2271437538_xgr9jy_k$().get_1mhr4y_k$(tokenName);
    var tmp0_elvis_lhs = ttype;
    return tmp0_elvis_lhs == null ? Companion_getInstance_6()._get_INVALID_TYPE__2936648937_mgph5j_k$() : tmp0_elvis_lhs;
  };
  Recognizer.prototype.getErrorHeader_m6l30s_k$ = function (e) {
    var line = ensureNotNull(e._get_offendingToken__2290202152_x5l2oo_k$())._get_line__802561239_d9to7r_k$();
    var charPositionInLine = ensureNotNull(e._get_offendingToken__2290202152_x5l2oo_k$())._get_charPositionInLine__2377044051_vpvr1p_k$();
    return 'line ' + line + ':' + charPositionInLine;
  };
  Recognizer.prototype.getTokenErrorDisplay_yxu4n4_k$ = function (t) {
    if (t == null)
      return '<no token>';
    var s = t._get_text__809840318_de5ose_k$();
    if (s == null) {
      var tmp;
      if (t._get_type__810427985_deia8h_k$() === Companion_getInstance_6()._get_EOF__855984949_e5mq7p_k$()) {
        tmp = '<EOF>';
      } else {
        tmp = '<' + t._get_type__810427985_deia8h_k$() + '>';
      }
      s = tmp;
    }
    var tmp_0 = s;
    s = replace$default(tmp_0, '\n', '\\n', false, 4, null);
    var tmp_1 = s;
    s = replace$default(tmp_1, '\r', '\\r', false, 4, null);
    var tmp_2 = s;
    s = replace$default(tmp_2, '\t', '\\t', false, 4, null);
    return "'" + s + "'";
  };
  Recognizer.prototype.addErrorListener_vdlry1_k$ = function (listener) {
    if (listener == null) {
      throw NullPointerException_init_$Create$('listener cannot be null.');
    }
    this._listeners_1.add_1j60pz_k$(listener);
    Unit_getInstance();
  };
  Recognizer.prototype.removeErrorListener_cjl4lp_k$ = function (listener) {
    this._listeners_1.remove_8hbkc6_k$(listener);
    Unit_getInstance();
  };
  Recognizer.prototype.removeErrorListeners_ogbxbe_k$ = function () {
    this._listeners_1.clear_j9y8zo_k$();
  };
  Recognizer.prototype.sempred_b5qocl_k$ = function (_localctx, ruleIndex, actionIndex) {
    return true;
  };
  Recognizer.prototype.precpred_ctb818_k$ = function (localctx, precedence) {
    return true;
  };
  Recognizer.prototype.action_syfub2_k$ = function (_localctx, ruleIndex, actionIndex) {
  };
  Recognizer.$metadata$ = {
    simpleName: 'Recognizer',
    kind: 'class',
    interfaces: []
  };
  function _get_EMPTY_RULECTX__1328169848() {
    init_properties_RuleContext_kt_1179093441();
    return EMPTY_RULECTX;
  }
  var EMPTY_RULECTX;
  function RuleContext_init_$Init$($this) {
    RuleContext.call($this);
    $this.parent_1 = null;
    return $this;
  }
  function RuleContext_init_$Create$() {
    return RuleContext_init_$Init$(Object.create(RuleContext.prototype));
  }
  function RuleContext_init_$Init$_0(parent, invokingState, $this) {
    RuleContext.call($this);
    $this.parent_1 = parent;
    $this.invokingState_1 = invokingState;
    return $this;
  }
  function RuleContext_init_$Create$_0(parent, invokingState) {
    return RuleContext_init_$Init$_0(parent, invokingState, Object.create(RuleContext.prototype));
  }
  RuleContext.prototype.assignParent_bbznx3_k$ = function (value) {
    var tmp = this;
    tmp.parent_1 = (value == null ? true : value instanceof RuleContext) ? value : THROW_CCE();
  };
  RuleContext.prototype._set_parent__1403382957_g94l8b_k$ = function (_set____804775014) {
    this.parent_1 = _set____804775014;
  };
  RuleContext.prototype._get_parent__1491962785_oo9xup_k$ = function () {
    return this.parent_1;
  };
  RuleContext.prototype.assignParent_lwhnzj_k$ = function (value) {
    this.parent_1 = value;
  };
  RuleContext.prototype.readParent_9zdz4w_k$ = function () {
    return this.parent_1;
  };
  RuleContext.prototype._set_invokingState__4224723817_ng3dt3_k$ = function (_set____804775014) {
    this.invokingState_1 = _set____804775014;
  };
  RuleContext.prototype._get_invokingState__3304690165_gdl2q3_k$ = function () {
    return this.invokingState_1;
  };
  RuleContext.prototype._get_isEmpty__1500737838_oti0q6_k$ = function () {
    return this.invokingState_1 === -1;
  };
  RuleContext.prototype._get_sourceInterval__288930827_4s0sgb_k$ = function () {
    return Companion_getInstance_31()._get_INVALID__3532429338_clzu1y_k$();
  };
  RuleContext.prototype._get_ruleContext__1279228126_l5maqm_k$ = function () {
    return this;
  };
  RuleContext.prototype._get_payload__3508054851_d0i9j1_k$ = function () {
    return this;
  };
  RuleContext.prototype._get_text__809840318_de5ose_k$ = function () {
    if (this._get_childCount__662683032_ayjli0_k$() === 0) {
      return '';
    }
    var builder = StringBuilder_init_$Create$();
    var inductionVariable = 0;
    var last = this._get_childCount__662683032_ayjli0_k$();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        builder.append_ssq29y_k$(ensureNotNull(this.getChild_tm8i57_k$(i))._get_text__809840318_de5ose_k$());
        Unit_getInstance();
      }
       while (inductionVariable < last);
    return builder.toString();
  };
  RuleContext.prototype._set_ruleIndex__152087887_m9etbz_k$ = function (_set____804775014) {
    this.ruleIndex_1 = _set____804775014;
  };
  RuleContext.prototype._get_ruleIndex__1923824091_vte863_k$ = function () {
    return this.ruleIndex_1;
  };
  RuleContext.prototype._set_altNumber__1663603123_18qvvn_k$ = function (altNumber) {
  };
  RuleContext.prototype._get_altNumber__3435339327_e7st6p_k$ = function () {
    return Companion_getInstance_8()._get_INVALID_ALT_NUMBER__3632704068_ayalks_k$();
  };
  RuleContext.prototype._get_childCount__662683032_ayjli0_k$ = function () {
    return 0;
  };
  RuleContext.prototype.depth_1kuawz_k$ = function () {
    var n = 0;
    var p = this;
    while (!(p == null)) {
      p = p.parent_1;
      var tmp0 = n;
      n = tmp0 + 1 | 0;
      Unit_getInstance();
    }
    return n;
  };
  RuleContext.prototype.getChild_tm8i57_k$ = function (i) {
    return null;
  };
  RuleContext.prototype.accept_4ufyhw_k$ = function (visitor) {
    return ensureNotNull(visitor.visitChildren_mqo9kp_k$(this));
  };
  RuleContext.prototype.toStringTree_gu0i56_k$ = function (recog) {
    return Trees_getInstance().toStringTree_jfanmk_k$(this, recog);
  };
  RuleContext.prototype.toStringTree_j0auic_k$ = function (ruleNames) {
    return Trees_getInstance().toStringTree_2id1zr_k$(this, ruleNames);
  };
  RuleContext.prototype.toStringTree_a6qmui_k$ = function () {
    return this.toStringTree_j0auic_k$((null == null ? true : isInterface(null, List)) ? null : THROW_CCE());
  };
  RuleContext.prototype.toString = function () {
    var tmp = (null == null ? true : isInterface(null, List)) ? null : THROW_CCE();
    return this.toString_wck7lj_k$(tmp, (null == null ? true : null instanceof RuleContext) ? null : THROW_CCE());
  };
  RuleContext.prototype.toString_72mo5m_k$ = function (recog, stop) {
    var tmp0_safe_receiver = recog;
    var ruleNames = tmp0_safe_receiver == null ? null : tmp0_safe_receiver._get_ruleNames__2055232037_xzmr6t_k$();
    var ruleNamesList = !(ruleNames == null) ? listOf(ruleNames.slice()) : null;
    return this.toString_wck7lj_k$(ruleNamesList, stop);
  };
  RuleContext.prototype.toString$default_tsakt8_k$ = function (recog, stop, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      stop = _get_EMPTY_RULECTX__1328169848();
    return this.toString_72mo5m_k$(recog, stop);
  };
  RuleContext.prototype.toString_wck7lj_k$ = function (ruleNames, stop) {
    var buf = StringBuilder_init_$Create$();
    var p = this;
    buf.append_ssq29y_k$('[');
    Unit_getInstance();
    while (!(p == null) ? !(p === stop) : false) {
      if (ruleNames == null) {
        if (!p._get_isEmpty__1500737838_oti0q6_k$()) {
          buf.append_t8pm91_k$(p.invokingState_1);
          Unit_getInstance();
        }
      } else {
        var ruleIndex = p._get_ruleIndex__1923824091_vte863_k$();
        var ruleName = (ruleIndex >= 0 ? ruleIndex < ruleNames._get_size__809037418_ddoh9m_k$() : false) ? ruleNames.get_fkrdnv_k$(ruleIndex) : ruleIndex.toString();
        buf.append_ssq29y_k$(ruleName);
        Unit_getInstance();
      }
      if (!(p.parent_1 == null) ? !(ruleNames == null) ? true : !ensureNotNull(p.parent_1)._get_isEmpty__1500737838_oti0q6_k$() : false) {
        buf.append_ssq29y_k$(' ');
        Unit_getInstance();
      }
      p = p.parent_1;
    }
    buf.append_ssq29y_k$(']');
    Unit_getInstance();
    return buf.toString();
  };
  RuleContext.prototype.toString$default_dditim_k$ = function (ruleNames, stop, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      stop = null;
    return this.toString_wck7lj_k$(ruleNames, stop);
  };
  function RuleContext() {
    this.invokingState_1 = -1;
    this.ruleIndex_1 = -1;
  }
  RuleContext.$metadata$ = {
    simpleName: 'RuleContext',
    kind: 'class',
    interfaces: [RuleNode]
  };
  var properties_initialized_RuleContext_kt_2886674461;
  function init_properties_RuleContext_kt_1179093441() {
    if (!properties_initialized_RuleContext_kt_2886674461) {
      properties_initialized_RuleContext_kt_2886674461 = true;
      EMPTY_RULECTX = ParserRuleContext_init_$Create$();
    }
  }
  function _get_source__263461456($this) {
    return $this.source_1;
  }
  function _get_codePointIndices__315637959($this) {
    return $this.codePointIndices_1;
  }
  function _get_size__809037418($this) {
    return $this.size_1;
  }
  function _set_position__3963083214($this, _set____804775014) {
    $this.position_1 = _set____804775014;
  }
  function _get_position__3188952002($this) {
    return $this.position_1;
  }
  function codePoint($this, index) {
    var tmp;
    if (0 <= index ? index < $this.size_1 : false) {
      var char = charSequenceGet($this.source_1, $this.codePointIndices_1[index]);
      var tmp_0;
      if (isHighSurrogate(char)) {
        var tmp_1;
        var containsUpper = $this.size_1;
        var containsArg = index + 1 | 0;
        if (0 <= containsArg ? containsArg < containsUpper : false) {
          var low = charSequenceGet($this.source_1, $this.codePointIndices_1[index] + 1 | 0);
          tmp_1 = toCodePoint(char, low);
        } else {
          {
            tmp_1 = Companion_getInstance_3()._get_EOF__855984949_e5mq7p_k$();
          }
        }
        tmp_0 = tmp_1;
      } else {
        tmp_0 = Char__toInt_impl_2402388783(char);
      }
      tmp = tmp_0;
    } else {
      tmp = Companion_getInstance_3()._get_EOF__855984949_e5mq7p_k$();
    }
    return tmp;
  }
  function StringCharStream(source, sourceName) {
    this.source_1 = source;
    this.sourceName_1 = sourceName;
    this.codePointIndices_1 = codePointIndices(this.source_1);
    this.size_1 = this.codePointIndices_1.length;
    this.position_1 = 0;
  }
  StringCharStream.prototype._get_sourceName__2307762181_wv4pa3_k$ = function () {
    return this.sourceName_1;
  };
  StringCharStream.prototype.consume_spbz2t_k$ = function () {
    if ((this.size_1 - this.position_1 | 0) === 0) {
      assert(this.LA_y7f82c_k$(1) === Companion_getInstance_3()._get_EOF__855984949_e5mq7p_k$());
      throw IllegalStateException_init_$Create$('cannot consume EOF');
    }
    var tmp0_this = this;
    tmp0_this.position_1 = tmp0_this.position_1 + 1 | 0;
  };
  StringCharStream.prototype.index_1nqriq_k$ = function () {
    return this.position_1;
  };
  StringCharStream.prototype.size_23och_k$ = function () {
    return this.size_1;
  };
  StringCharStream.prototype.mark_1zob1_k$ = function () {
    return -1;
  };
  StringCharStream.prototype.release_knbvef_k$ = function (marker) {
  };
  StringCharStream.prototype.seek_5aisp4_k$ = function (index) {
    this.position_1 = index;
  };
  StringCharStream.prototype.toString = function () {
    return this.getText_egqjjt_k$(Companion_getInstance_31().of_9v4utl_k$(0, this.size_1 - 1 | 0));
  };
  StringCharStream.prototype.getText_egqjjt_k$ = function (interval) {
    var startIndex = Math_getInstance().min_vhgrta_k$(interval._get_a__461226256_7mlogg_k$(), this.size_1);
    var endIndex = Math_getInstance().min_vhgrta_k$(interval._get_b__461226287_7mlohb_k$(), this.size_1);
    var tmp$ret$1;
    $l$block_0: {
      var tmp0_substring_0 = this.source_1;
      var tmp1_substring_0 = this.codePointIndices_1[startIndex];
      var tmp2_substring_0 = this.codePointIndices_1[endIndex] + 1 | 0;
      var tmp$ret$0;
      $l$block: {
        tmp$ret$0 = tmp0_substring_0;
        break $l$block;
      }
      tmp$ret$1 = tmp$ret$0.substring(tmp1_substring_0, tmp2_substring_0);
      break $l$block_0;
    }
    return tmp$ret$1;
  };
  StringCharStream.prototype.LA_y7f82c_k$ = function (i) {
    var tmp;
    if (i < 0) {
      tmp = codePoint(this, this.position_1 + i | 0);
    } else if (i > 0) {
      tmp = codePoint(this, (this.position_1 + i | 0) - 1 | 0);
    } else {
      return 0;
    }
    return tmp;
  };
  StringCharStream.$metadata$ = {
    simpleName: 'StringCharStream',
    kind: 'class',
    interfaces: [CharStream]
  };
  function codePointIndices(_this__1828080292) {
    var tmp$ret$3;
    $l$block_2: {
      var tmp0_mapNotNull_0 = until(0, _this__1828080292.length);
      var tmp$ret$2;
      $l$block_1: {
        var tmp0_mapNotNullTo_0_1 = ArrayList_init_$Create$_0();
        {
          var inductionVariable = tmp0_mapNotNull_0._get_first__3232921377_hkbbvj_k$();
          var last = tmp0_mapNotNull_0._get_last__802328181_d9oodx_k$();
          if (inductionVariable <= last)
            do {
              var element_2_3 = inductionVariable;
              inductionVariable = inductionVariable + 1 | 0;
              {
                var tmp$ret$0;
                $l$block: {
                  var tmp;
                  if (hasSurrogatePairAt(_this__1828080292, element_2_3 - 1 | 0)) {
                    tmp = null;
                  } else {
                    tmp = element_2_3;
                  }
                  tmp$ret$0 = tmp;
                  break $l$block;
                }
                var tmp0_safe_receiver_2_4_4 = tmp$ret$0;
                if (tmp0_safe_receiver_2_4_4 == null)
                  null;
                else {
                  var tmp$ret$1;
                  $l$block_0: {
                    {
                    }
                    tmp0_mapNotNullTo_0_1.add_1j60pz_k$(tmp0_safe_receiver_2_4_4);
                    tmp$ret$1 = Unit_getInstance();
                    break $l$block_0;
                  }
                  Unit_getInstance();
                }
                Unit_getInstance();
              }
            }
             while (!(element_2_3 === last));
        }
        tmp$ret$2 = tmp0_mapNotNullTo_0_1;
        break $l$block_1;
      }
      tmp$ret$3 = tmp$ret$2;
      break $l$block_2;
    }
    return toIntArray(tmp$ret$3);
  }
  function toCodePoint(high, low) {
    return ((Char__toInt_impl_2402388783(high) << 10) + Char__toInt_impl_2402388783(low) | 0) + -56613888 | 0;
  }
  function Companion_5() {
    Companion_instance_5 = this;
    this.INVALID_TYPE_1 = 0;
    this.EPSILON_1 = -2;
    this.MIN_USER_TOKEN_TYPE_1 = 1;
    this.EOF_1 = Companion_getInstance_3()._get_EOF__855984949_e5mq7p_k$();
    this.DEFAULT_CHANNEL_1 = 0;
    this.HIDDEN_CHANNEL_1 = 1;
    this.MIN_USER_CHANNEL_VALUE_1 = 2;
  }
  Companion_5.prototype._get_INVALID_TYPE__2936648937_mgph5j_k$ = function () {
    return this.INVALID_TYPE_1;
  };
  Companion_5.prototype._get_EPSILON__2552669447_stbhmh_k$ = function () {
    return this.EPSILON_1;
  };
  Companion_5.prototype._get_MIN_USER_TOKEN_TYPE__2440773802_unxsuu_k$ = function () {
    return this.MIN_USER_TOKEN_TYPE_1;
  };
  Companion_5.prototype._get_EOF__855984949_e5mq7p_k$ = function () {
    return this.EOF_1;
  };
  Companion_5.prototype._get_DEFAULT_CHANNEL__1918603244_vqabqk_k$ = function () {
    return this.DEFAULT_CHANNEL_1;
  };
  Companion_5.prototype._get_HIDDEN_CHANNEL__4161557629_27ffk3_k$ = function () {
    return this.HIDDEN_CHANNEL_1;
  };
  Companion_5.prototype._get_MIN_USER_CHANNEL_VALUE__961108509_fw7w2l_k$ = function () {
    return this.MIN_USER_CHANNEL_VALUE_1;
  };
  Companion_5.$metadata$ = {
    simpleName: 'Companion',
    kind: 'object',
    interfaces: []
  };
  var Companion_instance_5;
  function Companion_getInstance_6() {
    if (Companion_instance_5 == null)
      new Companion_5();
    return Companion_instance_5;
  }
  function Token() {
    Companion_getInstance_6();
  }
  Token.$metadata$ = {
    simpleName: 'Token',
    kind: 'interface',
    interfaces: []
  };
  function TokenFactory() {
  }
  TokenFactory.$metadata$ = {
    simpleName: 'TokenFactory',
    kind: 'interface',
    interfaces: []
  };
  function TokenSource() {
  }
  TokenSource.$metadata$ = {
    simpleName: 'TokenSource',
    kind: 'interface',
    interfaces: []
  };
  function TokenStream() {
  }
  TokenStream.$metadata$ = {
    simpleName: 'TokenStream',
    kind: 'interface',
    interfaces: [IntStream]
  };
  function Vocabulary() {
  }
  Vocabulary.$metadata$ = {
    simpleName: 'Vocabulary',
    kind: 'interface',
    interfaces: []
  };
  function _get_EMPTY_NAMES__2201383611($this) {
    return $this.EMPTY_NAMES_1;
  }
  function VocabularyImpl_init_$Init$(literalNames, symbolicNames, displayNames, $mask0, $marker, $this) {
    if (!(($mask0 & 4) === 0))
      displayNames = null;
    VocabularyImpl.call($this, literalNames, symbolicNames, displayNames);
    return $this;
  }
  function VocabularyImpl_init_$Create$(literalNames, symbolicNames, displayNames, $mask0, $marker) {
    return VocabularyImpl_init_$Init$(literalNames, symbolicNames, displayNames, $mask0, $marker, Object.create(VocabularyImpl.prototype));
  }
  function _get_literalNames__3469545618($this) {
    return $this.literalNames_1;
  }
  function _get_symbolicNames__2882428379($this) {
    return $this.symbolicNames_1;
  }
  function _get_displayNames__2064543333($this) {
    return $this.displayNames_1;
  }
  function Companion_6() {
    Companion_instance_6 = this;
    var tmp = this;
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = fillArrayVal(Array(0), null);
      break $l$block;
    }
    tmp.EMPTY_NAMES_1 = tmp$ret$0;
    this.EMPTY_VOCABULARY_1 = new VocabularyImpl(this.EMPTY_NAMES_1, this.EMPTY_NAMES_1, this.EMPTY_NAMES_1);
  }
  Companion_6.prototype._get_EMPTY_VOCABULARY__391582355_6h4yvn_k$ = function () {
    return this.EMPTY_VOCABULARY_1;
  };
  Companion_6.prototype.fromTokenNames_5d7him_k$ = function (tokenNames) {
    var tmp;
    if (tokenNames == null) {
      tmp = true;
    } else {
      var tmp$ret$0;
      $l$block: {
        tmp$ret$0 = tokenNames.length === 0;
        break $l$block;
      }
      tmp = tmp$ret$0;
    }
    if (tmp) {
      return this.EMPTY_VOCABULARY_1;
    } else {
    }
    var literalNames = copyOf(tokenNames, tokenNames.length);
    var symbolicNames = copyOf(tokenNames, tokenNames.length);
    var inductionVariable = 0;
    var last = tokenNames.length - 1 | 0;
    if (inductionVariable <= last)
      $l$loop_1: do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp1_elvis_lhs = tokenNames[i];
        var tmp_0;
        if (tmp1_elvis_lhs == null) {
          continue $l$loop_1;
        } else {
          tmp_0 = tmp1_elvis_lhs;
        }
        var tokenName = tmp_0;
        var tmp$ret$1;
        $l$block_0: {
          tmp$ret$1 = charSequenceLength(tokenName) === 0;
          break $l$block_0;
        }
        if (!tmp$ret$1) {
          var firstChar = charSequenceGet(tokenName, 0);
          if (equals(new Char(firstChar), new Char(_Char___init__impl__380027157(39)))) {
            symbolicNames[i] = null;
            continue $l$loop_1;
          } else if (isCharUppercase(firstChar)) {
            literalNames[i] = null;
            continue $l$loop_1;
          }
        } else {
        }
        literalNames[i] = null;
        symbolicNames[i] = null;
      }
       while (inductionVariable <= last);
    return new VocabularyImpl(literalNames, symbolicNames, tokenNames);
  };
  Companion_6.$metadata$ = {
    simpleName: 'Companion',
    kind: 'object',
    interfaces: []
  };
  var Companion_instance_6;
  function Companion_getInstance_7() {
    if (Companion_instance_6 == null)
      new Companion_6();
    return Companion_instance_6;
  }
  function VocabularyImpl(literalNames, symbolicNames, displayNames) {
    Companion_getInstance_7();
    var tmp = this;
    var tmp0_elvis_lhs = literalNames;
    tmp.literalNames_1 = tmp0_elvis_lhs == null ? Companion_getInstance_7().EMPTY_NAMES_1 : tmp0_elvis_lhs;
    var tmp_0 = this;
    var tmp1_elvis_lhs = symbolicNames;
    tmp_0.symbolicNames_1 = tmp1_elvis_lhs == null ? Companion_getInstance_7().EMPTY_NAMES_1 : tmp1_elvis_lhs;
    var tmp_1 = this;
    var tmp2_elvis_lhs = displayNames;
    tmp_1.displayNames_1 = tmp2_elvis_lhs == null ? Companion_getInstance_7().EMPTY_NAMES_1 : tmp2_elvis_lhs;
    this.maxTokenType_1 = Math_getInstance().max_tun7lo_k$(this.displayNames_1.length, Math_getInstance().max_tun7lo_k$(this.literalNames_1.length, this.symbolicNames_1.length)) - 1 | 0;
  }
  VocabularyImpl.prototype._get_maxTokenType__2953938780_m6ew84_k$ = function () {
    return this.maxTokenType_1;
  };
  VocabularyImpl.prototype.getLiteralName_1erz7_k$ = function (tokenType) {
    var tmp;
    if (tokenType >= 0 ? tokenType < this.literalNames_1.length : false) {
      tmp = this.literalNames_1[tokenType];
    } else {
      tmp = null;
    }
    return tmp;
  };
  VocabularyImpl.prototype.getSymbolicName_yk4gge_k$ = function (tokenType) {
    if (tokenType >= 0 ? tokenType < this.symbolicNames_1.length : false) {
      return this.symbolicNames_1[tokenType];
    }
    var tmp;
    if (tokenType === Companion_getInstance_6()._get_EOF__855984949_e5mq7p_k$()) {
      tmp = 'EOF';
    } else {
      tmp = null;
    }
    return tmp;
  };
  VocabularyImpl.prototype.getDisplayName_u57fdi_k$ = function (tokenType) {
    if (tokenType >= 0 ? tokenType < this.displayNames_1.length : false) {
      var displayName = this.displayNames_1[tokenType];
      if (!(displayName == null)) {
        return displayName;
      }
    }
    var literalName = this.getLiteralName_1erz7_k$(tokenType);
    if (!(literalName == null)) {
      return literalName;
    }
    var symbolicName = this.getSymbolicName_yk4gge_k$(tokenType);
    var tmp0_elvis_lhs = symbolicName;
    return tmp0_elvis_lhs == null ? tokenType.toString() : tmp0_elvis_lhs;
  };
  VocabularyImpl.$metadata$ = {
    simpleName: 'VocabularyImpl',
    kind: 'class',
    interfaces: [Vocabulary]
  };
  function WritableToken() {
  }
  WritableToken.$metadata$ = {
    simpleName: 'WritableToken',
    kind: 'interface',
    interfaces: [Token]
  };
  function _get_START_POINT__2233420990() {
    init_properties_position_kt_2522364401();
    return START_POINT;
  }
  var START_POINT;
  function Point(line, column) {
    this.line_1 = line;
    this.column_1 = column;
    {
      var tmp0_require_0 = this.line_1 >= 1;
      {
      }
      if (!tmp0_require_0) {
        var tmp$ret$0;
        $l$block: {
          tmp$ret$0 = 'Line should be equal or greater than 1, was ' + this.line_1;
          break $l$block;
        }
        var message_1 = tmp$ret$0;
        throw IllegalArgumentException_init_$Create$(toString(message_1));
      }
    }
    {
      var tmp1_require_0 = this.column_1 >= 0;
      {
      }
      if (!tmp1_require_0) {
        var tmp$ret$1;
        $l$block_0: {
          tmp$ret$1 = 'Column should be equal or greater than 0, was ' + this.column_1;
          break $l$block_0;
        }
        var message_1_0 = tmp$ret$1;
        throw IllegalArgumentException_init_$Create$(toString(message_1_0));
      }
    }
  }
  Point.prototype._get_line__802561239_d9to7r_k$ = function () {
    return this.line_1;
  };
  Point.prototype._get_column__3235059317_hj1i8b_k$ = function () {
    return this.column_1;
  };
  Point.prototype.toString = function () {
    return 'Line ' + this.line_1 + ', Column ' + this.column_1;
  };
  Point.prototype.offset_w0smi6_k$ = function (code) {
    var lines = split$default(code, ['\n'], false, 0, 6, null);
    {
      var tmp0_require_0 = lines._get_size__809037418_ddoh9m_k$() >= this.line_1;
      {
      }
      if (!tmp0_require_0) {
        var tmp$ret$0;
        $l$block: {
          tmp$ret$0 = 'The point does not exist in the given text. It indicates line ' + this.line_1 + ' but there are only ' + lines._get_size__809037418_ddoh9m_k$() + ' lines';
          break $l$block;
        }
        var message_1 = tmp$ret$0;
        throw IllegalArgumentException_init_$Create$(toString(message_1));
      }
    }
    {
      var tmp1_require_0 = lines.get_fkrdnv_k$(this.line_1 - 1 | 0).length >= this.column_1;
      {
      }
      if (!tmp1_require_0) {
        var tmp$ret$1;
        $l$block_0: {
          tmp$ret$1 = 'The column does not exist in the given text. Line ' + this.line_1 + ' has ' + lines.get_fkrdnv_k$(this.line_1 - 1 | 0).length + ' columns, the point indicates column ' + this.column_1;
          break $l$block_0;
        }
        var message_1_0 = tmp$ret$1;
        throw IllegalArgumentException_init_$Create$(toString(message_1_0));
      }
    }
    var newLines = this.line_1 - 1 | 0;
    var tmp$ret$3;
    $l$block_2: {
      var tmp2_foldRight_0 = lines.subList_d153ha_k$(0, this.line_1 - 1 | 0);
      var accumulator_1 = 0;
      if (!tmp2_foldRight_0.isEmpty_y1axqb_k$()) {
        var iterator_2 = tmp2_foldRight_0.listIterator_5hanv9_k$(tmp2_foldRight_0._get_size__809037418_ddoh9m_k$());
        while (iterator_2.hasPrevious_qh0629_k$()) {
          var tmp$ret$2;
          $l$block_1: {
            var tmp3__anonymous__3_2723290654 = iterator_2.previous_l2dfd5_k$();
            var tmp4__anonymous__3_4230842463 = accumulator_1;
            tmp$ret$2 = tmp3__anonymous__3_2723290654.length + tmp4__anonymous__3_4230842463 | 0;
            break $l$block_1;
          }
          accumulator_1 = tmp$ret$2;
        }
      }
      tmp$ret$3 = accumulator_1;
      break $l$block_2;
    }
    return (tmp$ret$3 + newLines | 0) + this.column_1 | 0;
  };
  Point.prototype.isBefore_ldn2ma_k$ = function (other) {
    return this.line_1 < other.line_1 ? true : this.line_1 === other.line_1 ? this.column_1 < other.column_1 : false;
  };
  Point.prototype.advance_fikpbz_k$ = function (text) {
    var tmp = Regex_init_$Create$('\r\n|\r|\n');
    var matches = tmp.findAll$default_qbzddh_k$(text, 0, 2, null);
    var line = this.line_1 + count(matches) | 0;
    var col = none(matches) ? this.column_1 + text.length | 0 : (text.length - last(matches)._get_range__3568951860_c0913g_k$()._get_endInclusive__731268122_c3dm3e_k$() | 0) - 1 | 0;
    return new Point(line, col);
  };
  Point.prototype.component1_7eebsc_k$ = function () {
    return this.line_1;
  };
  Point.prototype.component2_7eebsb_k$ = function () {
    return this.column_1;
  };
  Point.prototype.copy_r83ead_k$ = function (line, column) {
    return new Point(line, column);
  };
  Point.prototype.copy$default_4541c_k$ = function (line, column, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      line = this.line_1;
    if (!(($mask0 & 2) === 0))
      column = this.column_1;
    return this.copy_r83ead_k$(line, column);
  };
  Point.prototype.hashCode = function () {
    var result = this.line_1;
    result = imul(result, 31) + this.column_1 | 0;
    return result;
  };
  Point.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Point))
      return false;
    else {
    }
    var tmp0_other_with_cast = other instanceof Point ? other : THROW_CCE();
    if (!(this.line_1 === tmp0_other_with_cast.line_1))
      return false;
    if (!(this.column_1 === tmp0_other_with_cast.column_1))
      return false;
    return true;
  };
  Point.$metadata$ = {
    simpleName: 'Point',
    kind: 'class',
    interfaces: []
  };
  function Position(start, end) {
    this.start_1 = start;
    this.end_1 = end;
    {
      var tmp0_require_0 = this.start_1.isBefore_ldn2ma_k$(this.end_1) ? true : this.start_1.equals(this.end_1);
      {
      }
      if (!tmp0_require_0) {
        var tmp$ret$0;
        $l$block: {
          tmp$ret$0 = 'End should follows start or be the same as start (start: ' + this.start_1 + ', end: ' + this.end_1 + ')';
          break $l$block;
        }
        var message_1 = tmp$ret$0;
        throw IllegalArgumentException_init_$Create$(toString(message_1));
      }
    }
  }
  Position.prototype._get_start__3614751663_b8zdqp_k$ = function () {
    return this.start_1;
  };
  Position.prototype._get_end__856968982_e67thy_k$ = function () {
    return this.end_1;
  };
  Position.prototype.text_hrqqzw_k$ = function (wholeText) {
    var tmp$ret$1;
    $l$block_0: {
      var tmp0_substring_0 = this.start_1.offset_w0smi6_k$(wholeText);
      var tmp1_substring_0 = this.end_1.offset_w0smi6_k$(wholeText);
      var tmp$ret$0;
      $l$block: {
        tmp$ret$0 = wholeText;
        break $l$block;
      }
      tmp$ret$1 = tmp$ret$0.substring(tmp0_substring_0, tmp1_substring_0);
      break $l$block_0;
    }
    return tmp$ret$1;
  };
  Position.prototype.length_s9pput_k$ = function (code) {
    return this.end_1.offset_w0smi6_k$(code) - this.start_1.offset_w0smi6_k$(code) | 0;
  };
  Position.prototype.contains_iem5ew_k$ = function (point) {
    return (point.equals(this.start_1) ? true : this.start_1.isBefore_ldn2ma_k$(point)) ? point.equals(this.end_1) ? true : point.isBefore_ldn2ma_k$(this.end_1) : false;
  };
  Position.prototype.component1_7eebsc_k$ = function () {
    return this.start_1;
  };
  Position.prototype.component2_7eebsb_k$ = function () {
    return this.end_1;
  };
  Position.prototype.copy_8d9sid_k$ = function (start, end) {
    return new Position(start, end);
  };
  Position.prototype.copy$default_jkzq9s_k$ = function (start, end, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      start = this.start_1;
    if (!(($mask0 & 2) === 0))
      end = this.end_1;
    return this.copy_8d9sid_k$(start, end);
  };
  Position.prototype.toString = function () {
    return 'Position(start=' + this.start_1 + ', end=' + this.end_1 + ')';
  };
  Position.prototype.hashCode = function () {
    var result = this.start_1.hashCode();
    result = imul(result, 31) + this.end_1.hashCode() | 0;
    return result;
  };
  Position.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Position))
      return false;
    else {
    }
    var tmp0_other_with_cast = other instanceof Position ? other : THROW_CCE();
    if (!this.start_1.equals(tmp0_other_with_cast.start_1))
      return false;
    if (!this.end_1.equals(tmp0_other_with_cast.end_1))
      return false;
    return true;
  };
  Position.$metadata$ = {
    simpleName: 'Position',
    kind: 'class',
    interfaces: []
  };
  var properties_initialized_position_kt_2832242965;
  function init_properties_position_kt_2522364401() {
    if (!properties_initialized_position_kt_2832242965) {
      properties_initialized_position_kt_2832242965 = true;
      START_POINT = new Point(1, 0);
    }
  }
  function Companion_7() {
    Companion_instance_7 = this;
    this.INVALID_ALT_NUMBER_1 = 0;
  }
  Companion_7.prototype._get_INVALID_ALT_NUMBER__3632704068_ayalks_k$ = function () {
    return this.INVALID_ALT_NUMBER_1;
  };
  Companion_7.$metadata$ = {
    simpleName: 'Companion',
    kind: 'object',
    interfaces: []
  };
  var Companion_instance_7;
  function Companion_getInstance_8() {
    if (Companion_instance_7 == null)
      new Companion_7();
    return Companion_instance_7;
  }
  function ATN(grammarType, maxTokenType) {
    Companion_getInstance_8();
    this.grammarType_1 = grammarType;
    this.maxTokenType_1 = maxTokenType;
    this.states_1 = ArrayList_init_$Create$_0();
    this.decisionToState_1 = ArrayList_init_$Create$_0();
    this.ruleToStartState_1 = null;
    this.ruleToStopState_1 = null;
    this.modeNameToStartState_1 = LinkedHashMap_init_$Create$();
    this.ruleToTokenType_1 = null;
    this.lexerActions_1 = null;
    this.modeToStartState_1 = ArrayList_init_$Create$_0();
  }
  ATN.prototype._get_grammarType__2271111728_xgy8y8_k$ = function () {
    return this.grammarType_1;
  };
  ATN.prototype._get_maxTokenType__2953938780_m6ew84_k$ = function () {
    return this.maxTokenType_1;
  };
  ATN.prototype._get_states__388198729_6f4g21_k$ = function () {
    return this.states_1;
  };
  ATN.prototype._get_decisionToState__150441975_2hkhrr_k$ = function () {
    return this.decisionToState_1;
  };
  ATN.prototype._set_ruleToStartState__3880579665_a5rwj3_k$ = function (_set____804775014) {
    this.ruleToStartState_1 = _set____804775014;
  };
  ATN.prototype._get_ruleToStartState__1344368709_m8ehj9_k$ = function () {
    return this.ruleToStartState_1;
  };
  ATN.prototype._set_ruleToStopState__2299509421_gin8od_k$ = function (_set____804775014) {
    this.ruleToStopState_1 = _set____804775014;
  };
  ATN.prototype._get_ruleToStopState__2910432825_mwbdmv_k$ = function () {
    return this.ruleToStopState_1;
  };
  ATN.prototype._get_modeNameToStartState__4152303411_2cxs5p_k$ = function () {
    return this.modeNameToStartState_1;
  };
  ATN.prototype._set_ruleToTokenType__3740566537_khje3x_k$ = function (_set____804775014) {
    this.ruleToTokenType_1 = _set____804775014;
  };
  ATN.prototype._get_ruleToTokenType__56522645_xnh5h_k$ = function () {
    return this.ruleToTokenType_1;
  };
  ATN.prototype._set_lexerActions__882633510_3gs3z7_k$ = function (_set____804775014) {
    this.lexerActions_1 = _set____804775014;
  };
  ATN.prototype._get_lexerActions__1822786330_u58mxm_k$ = function () {
    return this.lexerActions_1;
  };
  ATN.prototype._get_modeToStartState__2760479998_pdldz6_k$ = function () {
    return this.modeToStartState_1;
  };
  ATN.prototype._get_numberOfDecisions__1854093626_unvnsq_k$ = function () {
    return this.decisionToState_1._get_size__809037418_ddoh9m_k$();
  };
  ATN.prototype.nextTokens_1ht9us_k$ = function (s, ctx) {
    var anal = new LL1Analyzer(this);
    return anal.LOOK_r42kge_k$(s, ctx);
  };
  ATN.prototype.nextTokens_z4h83x_k$ = function (s) {
    if (!(s._get_nextTokenWithinRule__2567513796_skhbng_k$() == null))
      return s._get_nextTokenWithinRule__2567513796_skhbng_k$();
    s._set_nextTokenWithinRule__1763432760_ffdj0e_k$(this.nextTokens_1ht9us_k$(s, null));
    ensureNotNull(s._get_nextTokenWithinRule__2567513796_skhbng_k$())._set_isReadonly__3398997899_73ysxu_k$(true);
    return s._get_nextTokenWithinRule__2567513796_skhbng_k$();
  };
  ATN.prototype.addState_u9plhk_k$ = function (state) {
    if (!(state == null)) {
      ensureNotNull(state)._set_atn__295743434_cpcqnn_k$(this);
      ensureNotNull(state)._set_stateNumber__2290445323_a7hzut_k$(this.states_1._get_size__809037418_ddoh9m_k$());
    }
    this.states_1.add_1j60pz_k$(state);
    Unit_getInstance();
  };
  ATN.prototype.removeState_k6imji_k$ = function (state) {
    this.states_1.set_meu351_k$(state._get_stateNumber__4121888151_2v1oq1_k$(), null);
    Unit_getInstance();
  };
  ATN.prototype.defineDecisionState_9bunjf_k$ = function (s) {
    this.decisionToState_1.add_1j60pz_k$(s);
    Unit_getInstance();
    s._set_decision__2613385595_qqw8ff_k$(this.decisionToState_1._get_size__809037418_ddoh9m_k$() - 1 | 0);
    return s._get_decision__1839254383_uf1lrj_k$();
  };
  ATN.prototype.getDecisionState_m2smv2_k$ = function (decision) {
    var tmp;
    if (!this.decisionToState_1.isEmpty_y1axqb_k$()) {
      tmp = this.decisionToState_1.get_fkrdnv_k$(decision);
    } else {
      tmp = null;
    }
    return tmp;
  };
  ATN.prototype.getExpectedTokens_orplj2_k$ = function (stateNumber, context) {
    if (stateNumber < 0 ? true : stateNumber >= this.states_1._get_size__809037418_ddoh9m_k$()) {
      throw IllegalArgumentException_init_$Create$('Invalid state number.');
    }
    var ctx = context;
    var s = this.states_1.get_fkrdnv_k$(stateNumber);
    var following = this.nextTokens_z4h83x_k$(ensureNotNull(s));
    if (!ensureNotNull(following).contains_1pg60y_k$(Companion_getInstance_6()._get_EPSILON__2552669447_stbhmh_k$())) {
      return following;
    }
    var expected = IntervalSet_init_$Create$_1(new Int32Array([]));
    expected.addAll_z9dmpz_k$(following);
    Unit_getInstance();
    expected.remove_nib8oc_k$(Companion_getInstance_6()._get_EPSILON__2552669447_stbhmh_k$());
    while ((!(ctx == null) ? ensureNotNull(ctx)._get_invokingState__3304690165_gdl2q3_k$() >= 0 : false) ? ensureNotNull(following).contains_1pg60y_k$(Companion_getInstance_6()._get_EPSILON__2552669447_stbhmh_k$()) : false) {
      var invokingState = this.states_1.get_fkrdnv_k$(ensureNotNull(ctx)._get_invokingState__3304690165_gdl2q3_k$());
      var tmp = ensureNotNull(invokingState).transition_bdhd2s_k$(0);
      var rt = tmp instanceof RuleTransition ? tmp : THROW_CCE();
      following = this.nextTokens_z4h83x_k$(rt._get_followState__3560924721_c512vj_k$());
      expected.addAll_z9dmpz_k$(following);
      Unit_getInstance();
      expected.remove_nib8oc_k$(Companion_getInstance_6()._get_EPSILON__2552669447_stbhmh_k$());
      ctx = ensureNotNull(ctx).readParent_9zdz4w_k$();
    }
    if (ensureNotNull(following).contains_1pg60y_k$(Companion_getInstance_6()._get_EPSILON__2552669447_stbhmh_k$())) {
      expected.add_fx1qxd_k$(Companion_getInstance_6()._get_EOF__855984949_e5mq7p_k$());
    }
    return expected;
  };
  ATN.$metadata$ = {
    simpleName: 'ATN',
    kind: 'class',
    interfaces: []
  };
  function _get_SUPPRESS_PRECEDENCE_FILTER__440431272($this) {
    return $this.SUPPRESS_PRECEDENCE_FILTER_1;
  }
  function ATNConfig_init_$Init$(old, $this) {
    ATNConfig.call($this);
    $this.state_1 = old.state_1;
    $this.alt_1 = old.alt_1;
    $this.context_1 = old.context_1;
    $this.semanticContext_1 = old.semanticContext_1;
    $this.reachesIntoOuterContext_1 = old.reachesIntoOuterContext_1;
    return $this;
  }
  function ATNConfig_init_$Create$(old) {
    return ATNConfig_init_$Init$(old, Object.create(ATNConfig.prototype));
  }
  function ATNConfig_init_$Init$_0(state, alt, context, semanticContext, $this) {
    ATNConfig.call($this);
    $this.state_1 = state;
    $this.alt_1 = alt;
    $this.context_1 = context;
    $this.semanticContext_1 = semanticContext;
    return $this;
  }
  function ATNConfig_init_$Create$_0(state, alt, context, semanticContext) {
    return ATNConfig_init_$Init$_0(state, alt, context, semanticContext, Object.create(ATNConfig.prototype));
  }
  function ATNConfig_init_$Init$_1(state, alt, context, semanticContext, $mask0, $marker, $this) {
    if (!(($mask0 & 8) === 0))
      semanticContext = Companion_getInstance_25()._get_NONE__774049299_csuk9f_k$();
    ATNConfig_init_$Init$_0(state, alt, context, semanticContext, $this);
    return $this;
  }
  function ATNConfig_init_$Create$_1(state, alt, context, semanticContext, $mask0, $marker) {
    return ATNConfig_init_$Init$_1(state, alt, context, semanticContext, $mask0, $marker, Object.create(ATNConfig.prototype));
  }
  function ATNConfig_init_$Init$_2(c, state, semanticContext, $this) {
    ATNConfig_init_$Init$_4(c, state, c.context_1, semanticContext, $this);
    return $this;
  }
  function ATNConfig_init_$Create$_2(c, state, semanticContext) {
    return ATNConfig_init_$Init$_2(c, state, semanticContext, Object.create(ATNConfig.prototype));
  }
  function ATNConfig_init_$Init$_3(c, semanticContext, $this) {
    ATNConfig_init_$Init$_4(c, c.state_1, c.context_1, semanticContext, $this);
    return $this;
  }
  function ATNConfig_init_$Create$_3(c, semanticContext) {
    return ATNConfig_init_$Init$_3(c, semanticContext, Object.create(ATNConfig.prototype));
  }
  function ATNConfig_init_$Init$_4(c, state, context, semanticContext, $this) {
    ATNConfig.call($this);
    $this.state_1 = state;
    $this.alt_1 = c.alt_1;
    $this.context_1 = context;
    $this.semanticContext_1 = semanticContext;
    $this.reachesIntoOuterContext_1 = c.reachesIntoOuterContext_1;
    return $this;
  }
  function ATNConfig_init_$Create$_4(c, state, context, semanticContext) {
    return ATNConfig_init_$Init$_4(c, state, context, semanticContext, Object.create(ATNConfig.prototype));
  }
  function ATNConfig_init_$Init$_5(c, state, context, semanticContext, $mask0, $marker, $this) {
    if (!(($mask0 & 4) === 0))
      context = c.context_1;
    if (!(($mask0 & 8) === 0))
      semanticContext = c.semanticContext_1;
    ATNConfig_init_$Init$_4(c, state, context, semanticContext, $this);
    return $this;
  }
  function ATNConfig_init_$Create$_5(c, state, context, semanticContext, $mask0, $marker) {
    return ATNConfig_init_$Init$_5(c, state, context, semanticContext, $mask0, $marker, Object.create(ATNConfig.prototype));
  }
  function Companion_8() {
    Companion_instance_8 = this;
    this.SUPPRESS_PRECEDENCE_FILTER_1 = 1073741824;
  }
  Companion_8.$metadata$ = {
    simpleName: 'Companion',
    kind: 'object',
    interfaces: []
  };
  var Companion_instance_8;
  function Companion_getInstance_9() {
    if (Companion_instance_8 == null)
      new Companion_8();
    return Companion_instance_8;
  }
  ATNConfig.prototype._get_state__3614753120_b8zcm8_k$ = function () {
    return this.state_1;
  };
  ATNConfig.prototype._get_alt__856848392_e658g8_k$ = function () {
    return this.alt_1;
  };
  ATNConfig.prototype._set_context__3107691446_i5o4us_k$ = function (_set____804775014) {
    this.context_1 = _set____804775014;
  };
  ATNConfig.prototype._get_context__1558698818_ps0bpe_k$ = function () {
    return this.context_1;
  };
  ATNConfig.prototype._set_reachesIntoOuterContext__3784992112_4yb7sw_k$ = function (_set____804775014) {
    this.reachesIntoOuterContext_1 = _set____804775014;
  };
  ATNConfig.prototype._get_reachesIntoOuterContext__2546863356_swrxms_k$ = function () {
    return this.reachesIntoOuterContext_1;
  };
  ATNConfig.prototype._get_semanticContext__233309224_3uwmjs_k$ = function () {
    return this.semanticContext_1;
  };
  ATNConfig.prototype._get_outerContextDepth__4293562050_u4am_k$ = function () {
    return this.reachesIntoOuterContext_1 & ~Companion_getInstance_9().SUPPRESS_PRECEDENCE_FILTER_1;
  };
  ATNConfig.prototype._set_isPrecedenceFilterSuppressed__3867538615_yhslzm_k$ = function (value) {
    var tmp;
    if (value) {
      this.reachesIntoOuterContext_1 = this.reachesIntoOuterContext_1 | 1073741824;
      tmp = Unit_getInstance();
    } else {
      this.reachesIntoOuterContext_1 = this.reachesIntoOuterContext_1 & ~Companion_getInstance_9().SUPPRESS_PRECEDENCE_FILTER_1;
      tmp = Unit_getInstance();
    }
    return tmp;
  };
  ATNConfig.prototype._get_isPrecedenceFilterSuppressed__6890667_43ovf_k$ = function () {
    return !((this.reachesIntoOuterContext_1 & Companion_getInstance_9().SUPPRESS_PRECEDENCE_FILTER_1) === 0);
  };
  ATNConfig.prototype.equals = function (o) {
    var tmp;
    if (!(o instanceof ATNConfig)) {
      tmp = false;
    } else {
      {
        tmp = this.equals_6yebht_k$((o == null ? true : o instanceof ATNConfig) ? o : THROW_CCE());
      }
    }
    return tmp;
  };
  ATNConfig.prototype.equals_6yebht_k$ = function (other) {
    if (this === other) {
      return true;
    } else if (other == null) {
      return false;
    }
    return (((this.state_1._get_stateNumber__4121888151_2v1oq1_k$() === other.state_1._get_stateNumber__4121888151_2v1oq1_k$() ? this.alt_1 === other.alt_1 : false) ? this.context_1 === other.context_1 ? true : !(this.context_1 == null) ? equals(this.context_1, other.context_1) : false : false) ? equals(this.semanticContext_1, other.semanticContext_1) : false) ? this._get_isPrecedenceFilterSuppressed__6890667_43ovf_k$() === other._get_isPrecedenceFilterSuppressed__6890667_43ovf_k$() : false;
  };
  ATNConfig.prototype.hashCode = function () {
    var hashCode = MurmurHash_getInstance().initialize_mh9k0f_k$(7);
    hashCode = MurmurHash_getInstance().update_v7hmy1_k$(hashCode, this.state_1._get_stateNumber__4121888151_2v1oq1_k$());
    hashCode = MurmurHash_getInstance().update_v7hmy1_k$(hashCode, this.alt_1);
    hashCode = MurmurHash_getInstance().update_qzj42v_k$(hashCode, this.context_1);
    hashCode = MurmurHash_getInstance().update_qzj42v_k$(hashCode, this.semanticContext_1);
    hashCode = MurmurHash_getInstance().finish_anppvx_k$(hashCode, 4);
    return hashCode;
  };
  ATNConfig.prototype.toString = function () {
    return this.toString_n1cmzq_k$(null, true);
  };
  ATNConfig.prototype.toString_n1cmzq_k$ = function (recog, showAlt) {
    var buf = StringBuilder_init_$Create$();
    buf.append_t8oh9e_k$(_Char___init__impl__380027157(40));
    Unit_getInstance();
    buf.append_t8pm91_k$(this.state_1);
    Unit_getInstance();
    if (showAlt) {
      buf.append_ssq29y_k$(',');
      Unit_getInstance();
      buf.append_t8pm91_k$(this.alt_1);
      Unit_getInstance();
    }
    if (!(this.context_1 == null)) {
      buf.append_ssq29y_k$(',[');
      Unit_getInstance();
      buf.append_ssq29y_k$(toString(ensureNotNull(this.context_1)));
      Unit_getInstance();
      buf.append_ssq29y_k$(']');
      Unit_getInstance();
    }
    if (!(this.semanticContext_1 == null) ? !(this.semanticContext_1 === Companion_getInstance_25()._get_NONE__774049299_csuk9f_k$()) : false) {
      buf.append_ssq29y_k$(',');
      Unit_getInstance();
      buf.append_t8pm91_k$(this.semanticContext_1);
      Unit_getInstance();
    }
    if (this._get_outerContextDepth__4293562050_u4am_k$() > 0) {
      buf.append_ssq29y_k$(',up=').append_t8pm91_k$(this._get_outerContextDepth__4293562050_u4am_k$());
      Unit_getInstance();
    }
    buf.append_t8oh9e_k$(_Char___init__impl__380027157(41));
    Unit_getInstance();
    return buf.toString();
  };
  function ATNConfig() {
    Companion_getInstance_9();
    this.context_1 = null;
    this.reachesIntoOuterContext_1 = 0;
  }
  ATNConfig.$metadata$ = {
    simpleName: 'ATNConfig',
    kind: 'class',
    interfaces: []
  };
  function Companion_9() {
    Companion_instance_9 = this;
    this.INSTANCE_1 = new ConfigEqualityComparator();
  }
  Companion_9.prototype._get_INSTANCE__2559446_1iuvq_k$ = function () {
    return this.INSTANCE_1;
  };
  Companion_9.$metadata$ = {
    simpleName: 'Companion',
    kind: 'object',
    interfaces: []
  };
  var Companion_instance_9;
  function Companion_getInstance_10() {
    if (Companion_instance_9 == null)
      new Companion_9();
    return Companion_instance_9;
  }
  function AbstractConfigHashSet_init_$Init$(comparator, initialCapacity, initialBucketCapacity, $mask0, $marker, $this) {
    if (!(($mask0 & 2) === 0))
      initialCapacity = 16;
    if (!(($mask0 & 4) === 0))
      initialBucketCapacity = 2;
    AbstractConfigHashSet.call($this, comparator, initialCapacity, initialBucketCapacity);
    return $this;
  }
  function AbstractConfigHashSet_init_$Create$(comparator, initialCapacity, initialBucketCapacity, $mask0, $marker) {
    return AbstractConfigHashSet_init_$Init$(comparator, initialCapacity, initialBucketCapacity, $mask0, $marker, Object.create(AbstractConfigHashSet.prototype));
  }
  function ATNConfigSet_init_$Init$(fullCtx, $mask0, $marker, $this) {
    if (!(($mask0 & 1) === 0))
      fullCtx = true;
    ATNConfigSet.call($this, fullCtx);
    return $this;
  }
  function ATNConfigSet_init_$Create$(fullCtx, $mask0, $marker) {
    return ATNConfigSet_init_$Init$(fullCtx, $mask0, $marker, Object.create(ATNConfigSet.prototype));
  }
  function _set_cachedHashCode__3550597978($this, _set____804775014) {
    $this.cachedHashCode_1 = _set____804775014;
  }
  function _get_cachedHashCode__799358542($this) {
    return $this.cachedHashCode_1;
  }
  function ConfigHashSet() {
    var tmp = Companion_getInstance_10().INSTANCE_1;
    AbstractConfigHashSet_init_$Init$(tmp, 0, 0, 6, null, this);
  }
  ConfigHashSet.prototype.containsAll_8sw0hn_k$ = function (elements) {
    {
      throw new NotImplementedError('An operation is not implemented: not implemented');
    }
  };
  ConfigHashSet.prototype.containsAll_jr3fla_k$ = function (elements) {
    return this.containsAll_8sw0hn_k$(elements);
  };
  ConfigHashSet.prototype.containsAll_jr3fy7_k$ = function (elements) {
    return this.containsAll_8sw0hn_k$(elements);
  };
  ConfigHashSet.prototype.retainAll_3wak0l_k$ = function (elements) {
    {
      throw new NotImplementedError('An operation is not implemented: not implemented');
    }
  };
  ConfigHashSet.prototype.retainAll_j44sd0_k$ = function (elements) {
    return this.retainAll_3wak0l_k$(elements);
  };
  ConfigHashSet.prototype.retainAll_j44spx_k$ = function (elements) {
    return this.retainAll_3wak0l_k$(elements);
  };
  ConfigHashSet.prototype.remove_nikoix_k$ = function (element) {
    {
      throw new NotImplementedError('An operation is not implemented: not implemented');
    }
  };
  ConfigHashSet.prototype.remove_8hbkc6_k$ = function (element) {
    if (!(element instanceof ATNConfig))
      return false;
    else {
    }
    return this.remove_nikoix_k$(element instanceof ATNConfig ? element : THROW_CCE());
  };
  ConfigHashSet.prototype.remove_8hbkbr_k$ = function (element) {
    return this.remove_nikoix_k$(element instanceof ATNConfig ? element : THROW_CCE());
  };
  ConfigHashSet.$metadata$ = {
    simpleName: 'ConfigHashSet',
    kind: 'class',
    interfaces: []
  };
  function ConfigEqualityComparator() {
    Companion_getInstance_10();
    AbstractEqualityComparator.call(this);
  }
  ConfigEqualityComparator.prototype.hashCode_d4tf1u_k$ = function (o) {
    var hashCode_0 = 7;
    hashCode_0 = imul(31, hashCode_0) + o._get_state__3614753120_b8zcm8_k$()._get_stateNumber__4121888151_2v1oq1_k$() | 0;
    hashCode_0 = imul(31, hashCode_0) + o._get_alt__856848392_e658g8_k$() | 0;
    hashCode_0 = imul(31, hashCode_0) + hashCode(ensureNotNull(o._get_semanticContext__233309224_3uwmjs_k$())) | 0;
    return hashCode_0;
  };
  ConfigEqualityComparator.prototype.hashCode_3clz5c_k$ = function (obj) {
    return this.hashCode_d4tf1u_k$(obj instanceof ATNConfig ? obj : THROW_CCE());
  };
  ConfigEqualityComparator.prototype.equals_512n6l_k$ = function (a, b) {
    if (a === b)
      return true;
    return (a == null ? true : b == null) ? false : (ensureNotNull(a)._get_state__3614753120_b8zcm8_k$()._get_stateNumber__4121888151_2v1oq1_k$() === ensureNotNull(b)._get_state__3614753120_b8zcm8_k$()._get_stateNumber__4121888151_2v1oq1_k$() ? ensureNotNull(a)._get_alt__856848392_e658g8_k$() === ensureNotNull(b)._get_alt__856848392_e658g8_k$() : false) ? equals(ensureNotNull(a)._get_semanticContext__233309224_3uwmjs_k$(), ensureNotNull(b)._get_semanticContext__233309224_3uwmjs_k$()) : false;
  };
  ConfigEqualityComparator.prototype.equals_cjghj5_k$ = function (a, b) {
    var tmp = (a == null ? true : a instanceof ATNConfig) ? a : THROW_CCE();
    return this.equals_512n6l_k$(tmp, (b == null ? true : b instanceof ATNConfig) ? b : THROW_CCE());
  };
  ConfigEqualityComparator.$metadata$ = {
    simpleName: 'ConfigEqualityComparator',
    kind: 'class',
    interfaces: []
  };
  function ATNConfigSet_init_$Init$_0(old, $this) {
    ATNConfigSet.call($this, old.fullCtx_1);
    $this.addAll_a3yf4p_k$(old);
    Unit_getInstance();
    $this.uniqueAlt_1 = old.uniqueAlt_1;
    $this.conflictingAlts_1 = old.conflictingAlts_1;
    $this.hasSemanticContext_1 = old.hasSemanticContext_1;
    $this.dipsIntoOuterContext_1 = old.dipsIntoOuterContext_1;
    return $this;
  }
  function ATNConfigSet_init_$Create$_0(old) {
    return ATNConfigSet_init_$Init$_0(old, Object.create(ATNConfigSet.prototype));
  }
  function AbstractConfigHashSet(comparator, initialCapacity, initialBucketCapacity) {
    Array2DHashSet.call(this, comparator, initialCapacity, initialBucketCapacity);
  }
  AbstractConfigHashSet.prototype.asElementType_anvmbe_k$ = function (o) {
    var tmp;
    if (!(o instanceof ATNConfig)) {
      tmp = null;
    } else {
      {
        tmp = o instanceof ATNConfig ? o : THROW_CCE();
      }
    }
    return tmp;
  };
  AbstractConfigHashSet.prototype.createBuckets_cemppw_k$ = function (capacity) {
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = fillArrayVal(Array(capacity), null);
      break $l$block;
    }
    return tmp$ret$0;
  };
  AbstractConfigHashSet.prototype.createBucket_x1f3nf_k$ = function (capacity) {
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = fillArrayVal(Array(capacity), null);
      break $l$block;
    }
    return tmp$ret$0;
  };
  AbstractConfigHashSet.$metadata$ = {
    simpleName: 'AbstractConfigHashSet',
    kind: 'class',
    interfaces: []
  };
  function ATNConfigSet(fullCtx) {
    this.fullCtx_1 = fullCtx;
    this.configLookup_1 = null;
    this.configs_1 = ArrayList_init_$Create$(7);
    this.uniqueAlt_1 = 0;
    this.conflictingAlts_1 = null;
    this.hasSemanticContext_1 = false;
    this.dipsIntoOuterContext_1 = false;
    this.cachedHashCode_1 = -1;
    this.isReadonly_1 = false;
    this.configLookup_1 = new ConfigHashSet();
  }
  ATNConfigSet.prototype._get_fullCtx__3456554233_dv63nr_k$ = function () {
    return this.fullCtx_1;
  };
  ATNConfigSet.prototype._set_configLookup__2926290299_931q09_k$ = function (_set____804775014) {
    this.configLookup_1 = _set____804775014;
  };
  ATNConfigSet.prototype._get_configLookup__3866443119_734rdd_k$ = function () {
    return this.configLookup_1;
  };
  ATNConfigSet.prototype._get_configs__1545872320_pkdeps_k$ = function () {
    return this.configs_1;
  };
  ATNConfigSet.prototype._set_uniqueAlt__1706807469_hhfhgd_k$ = function (_set____804775014) {
    this.uniqueAlt_1 = _set____804775014;
  };
  ATNConfigSet.prototype._get_uniqueAlt__3478543673_di2shz_k$ = function () {
    return this.uniqueAlt_1;
  };
  ATNConfigSet.prototype._set_conflictingAlts__2932077803_cz8iee_k$ = function (_set____804775014) {
    this.conflictingAlts_1 = _set____804775014;
  };
  ATNConfigSet.prototype._get_conflictingAlts__3543001207_cfp8qx_k$ = function () {
    return this.conflictingAlts_1;
  };
  ATNConfigSet.prototype._set_hasSemanticContext__2055041384_lpcdbz_k$ = function (_set____804775014) {
    this.hasSemanticContext_1 = _set____804775014;
  };
  ATNConfigSet.prototype._get_hasSemanticContext__2769500_1ncyk_k$ = function () {
    return this.hasSemanticContext_1;
  };
  ATNConfigSet.prototype._set_dipsIntoOuterContext__702585659_dbbrn6_k$ = function (_set____804775014) {
    this.dipsIntoOuterContext_1 = _set____804775014;
  };
  ATNConfigSet.prototype._get_dipsIntoOuterContext__4154261295_2brtg1_k$ = function () {
    return this.dipsIntoOuterContext_1;
  };
  ATNConfigSet.prototype._get_states__388198729_6f4g21_k$ = function () {
    var states = HashSet_init_$Create$_0();
    var tmp0_iterator = this.configs_1.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var c = tmp0_iterator.next_20eer_k$();
      states.add_1j60pz_k$(c._get_state__3614753120_b8zcm8_k$());
      Unit_getInstance();
    }
    return states;
  };
  ATNConfigSet.prototype._get_alts__792498081_d3tzfl_k$ = function () {
    var alts = BitSet_init_$Create$();
    var tmp0_iterator = this.configs_1.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var config = tmp0_iterator.next_20eer_k$();
      alts.set_2jdgjy_k$(config._get_alt__856848392_e658g8_k$());
    }
    return alts;
  };
  ATNConfigSet.prototype._get_predicates__4029970031_4drt75_k$ = function () {
    var preds = ArrayList_init_$Create$_0();
    var tmp0_iterator = this.configs_1.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var c = tmp0_iterator.next_20eer_k$();
      if (!(c._get_semanticContext__233309224_3uwmjs_k$() === Companion_getInstance_25()._get_NONE__774049299_csuk9f_k$())) {
        preds.add_1j60pz_k$(ensureNotNull(c._get_semanticContext__233309224_3uwmjs_k$()));
        Unit_getInstance();
      }
    }
    return preds;
  };
  ATNConfigSet.prototype._set_isReadonly__3398997899_73ysxu_k$ = function (value) {
    this.isReadonly_1 = value;
    this.configLookup_1 = null;
  };
  ATNConfigSet.prototype._get_isReadonly__2488245375_tvobk1_k$ = function () {
    return this.isReadonly_1;
  };
  ATNConfigSet.prototype.add_e3lorw_k$ = function (config) {
    return this.add_atdc5z_k$(config, null);
  };
  ATNConfigSet.prototype.add_atdc5z_k$ = function (config, mergeCache) {
    if (this.isReadonly_1)
      throw IllegalStateException_init_$Create$('This set is readonly');
    if (!(config._get_semanticContext__233309224_3uwmjs_k$() === Companion_getInstance_25()._get_NONE__774049299_csuk9f_k$())) {
      this.hasSemanticContext_1 = true;
    }
    if (config._get_outerContextDepth__4293562050_u4am_k$() > 0) {
      this.dipsIntoOuterContext_1 = true;
    }
    var existing = ensureNotNull(this.configLookup_1).getOrAdd_3cmrdv_k$(config);
    if (existing === config) {
      this.cachedHashCode_1 = -1;
      this.configs_1.add_1j60pz_k$(config);
      Unit_getInstance();
      return true;
    }
    var rootIsWildcard = !this.fullCtx_1;
    var merged = Companion_getInstance_22().merge_atnk0x_k$(existing._get_context__1558698818_ps0bpe_k$(), config._get_context__1558698818_ps0bpe_k$(), rootIsWildcard, mergeCache);
    existing._set_reachesIntoOuterContext__3784992112_4yb7sw_k$(Math_getInstance().max_tun7lo_k$(existing._get_reachesIntoOuterContext__2546863356_swrxms_k$(), config._get_reachesIntoOuterContext__2546863356_swrxms_k$()));
    if (config._get_isPrecedenceFilterSuppressed__6890667_43ovf_k$()) {
      existing._set_isPrecedenceFilterSuppressed__3867538615_yhslzm_k$(true);
    }
    existing._set_context__3107691446_i5o4us_k$(merged);
    return true;
  };
  ATNConfigSet.prototype.elements_4yqkp_k$ = function () {
    return this.configs_1;
  };
  ATNConfigSet.prototype.get_fkrdnv_k$ = function (i) {
    return this.configs_1.get_fkrdnv_k$(i);
  };
  ATNConfigSet.prototype.optimizeConfigs_dauzek_k$ = function (interpreter) {
    if (this.isReadonly_1)
      throw IllegalStateException_init_$Create$('This set is readonly');
    if (ensureNotNull(this.configLookup_1).isEmpty_y1axqb_k$())
      return Unit_getInstance();
    var tmp0_iterator = this.configs_1.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var config = tmp0_iterator.next_20eer_k$();
      config._set_context__3107691446_i5o4us_k$(interpreter.getCachedContext_c4lptz_k$(ensureNotNull(config._get_context__1558698818_ps0bpe_k$())));
    }
  };
  ATNConfigSet.prototype.addAll_a3yf4p_k$ = function (coll) {
    var tmp0_iterator = coll.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var c = tmp0_iterator.next_20eer_k$();
      this.add_e3lorw_k$(c);
      Unit_getInstance();
    }
    return false;
  };
  ATNConfigSet.prototype.equals = function (o) {
    if (o === this) {
      return true;
    } else {
      if (!(o instanceof ATNConfigSet)) {
        return false;
      } else {
      }
    }
    var other = (o == null ? true : o instanceof ATNConfigSet) ? o : THROW_CCE();
    return (((((!(this.configs_1 == null) ? this.configs_1.equals(ensureNotNull(other).configs_1) : false) ? this.fullCtx_1 === other.fullCtx_1 : false) ? this.uniqueAlt_1 === other.uniqueAlt_1 : false) ? this.conflictingAlts_1 === other.conflictingAlts_1 : false) ? this.hasSemanticContext_1 === other.hasSemanticContext_1 : false) ? this.dipsIntoOuterContext_1 === other.dipsIntoOuterContext_1 : false;
  };
  ATNConfigSet.prototype.hashCode = function () {
    if (this.isReadonly_1) {
      if (this.cachedHashCode_1 === -1) {
        this.cachedHashCode_1 = this.configs_1.hashCode();
      }
      return this.cachedHashCode_1;
    }
    return this.configs_1.hashCode();
  };
  ATNConfigSet.prototype._get_size__809037418_ddoh9m_k$ = function () {
    return this.configs_1._get_size__809037418_ddoh9m_k$();
  };
  ATNConfigSet.prototype.isEmpty_y1axqb_k$ = function () {
    return this.configs_1.isEmpty_y1axqb_k$();
  };
  ATNConfigSet.prototype.contains_nro64y_k$ = function (o) {
    if (this.configLookup_1 == null) {
      throw UnsupportedOperationException_init_$Create$('This method is not implemented for readonly sets.');
    }
    return ensureNotNull(this.configLookup_1).contains_2ehdtg_k$(o);
  };
  ATNConfigSet.prototype.contains_2ehdt1_k$ = function (element) {
    if (!(element instanceof ATNConfig))
      return false;
    else {
    }
    return this.contains_nro64y_k$(element instanceof ATNConfig ? element : THROW_CCE());
  };
  ATNConfigSet.prototype.containsFast_k2sdji_k$ = function (obj) {
    if (this.configLookup_1 == null) {
      throw UnsupportedOperationException_init_$Create$('This method is not implemented for readonly sets.');
    }
    return ensureNotNull(this.configLookup_1).containsFast_fro4xd_k$(obj);
  };
  ATNConfigSet.prototype.iterator_jk1svi_k$ = function () {
    return this.configs_1.iterator_jk1svi_k$();
  };
  ATNConfigSet.prototype.clear_j9y8zo_k$ = function () {
    if (this.isReadonly_1)
      throw IllegalStateException_init_$Create$('This set is readonly');
    this.configs_1.clear_j9y8zo_k$();
    this.cachedHashCode_1 = -1;
    ensureNotNull(this.configLookup_1).clear_j9y8zo_k$();
  };
  ATNConfigSet.prototype.toString = function () {
    var buf = StringBuilder_init_$Create$();
    buf.append_ssq29y_k$(toString(this.elements_4yqkp_k$()));
    Unit_getInstance();
    if (this.hasSemanticContext_1) {
      buf.append_ssq29y_k$(',hasSemanticContext=').append_a1id5s_k$(this.hasSemanticContext_1);
      Unit_getInstance();
    }
    if (!(this.uniqueAlt_1 === Companion_getInstance_8()._get_INVALID_ALT_NUMBER__3632704068_ayalks_k$())) {
      buf.append_ssq29y_k$(',uniqueAlt=').append_t8pm91_k$(this.uniqueAlt_1);
      Unit_getInstance();
    }
    if (!(this.conflictingAlts_1 == null)) {
      buf.append_ssq29y_k$(',conflictingAlts=').append_t8pm91_k$(this.conflictingAlts_1);
      Unit_getInstance();
    }
    if (this.dipsIntoOuterContext_1) {
      buf.append_ssq29y_k$(',dipsIntoOuterContext');
      Unit_getInstance();
    }
    return buf.toString();
  };
  ATNConfigSet.prototype.toArray_jjyjqa_k$ = function () {
    return ensureNotNull(this.configLookup_1).toArray_jjyjqa_k$();
  };
  ATNConfigSet.prototype.toArray_nu7pb_k$ = function (a) {
    return ensureNotNull(this.configLookup_1).toArray_lpvwrl_k$(a);
  };
  ATNConfigSet.prototype.containsAll_8sw0hn_k$ = function (elements) {
    throw UnsupportedOperationException_init_$Create$_0();
  };
  ATNConfigSet.prototype.containsAll_jr3fla_k$ = function (elements) {
    return this.containsAll_8sw0hn_k$(elements);
  };
  ATNConfigSet.$metadata$ = {
    simpleName: 'ATNConfigSet',
    kind: 'class',
    interfaces: [Set]
  };
  function _set_isReadOnly__3369445227($this, _set____804775014) {
    $this.isReadOnly_1 = _set____804775014;
  }
  function _set_verifyATN__181852835($this, _set____804775014) {
    $this.verifyATN_1 = _set____804775014;
  }
  function _get_verifyATN__1953589039($this) {
    return $this.verifyATN_1;
  }
  function _set_generateRuleBypassTransitions__3180499776($this, _set____804775014) {
    $this.generateRuleBypassTransitions_1 = _set____804775014;
  }
  function _get_generateRuleBypassTransitions__3759497676($this) {
    return $this.generateRuleBypassTransitions_1;
  }
  function ATNDeserializationOptions_init_$Init$($this) {
    ATNDeserializationOptions.call($this);
    $this.verifyATN_1 = true;
    $this.generateRuleBypassTransitions_1 = false;
    return $this;
  }
  function ATNDeserializationOptions_init_$Create$() {
    return ATNDeserializationOptions_init_$Init$(Object.create(ATNDeserializationOptions.prototype));
  }
  function ATNDeserializationOptions_init_$Init$_0(options, $this) {
    ATNDeserializationOptions.call($this);
    $this.verifyATN_1 = options.verifyATN_1;
    $this.generateRuleBypassTransitions_1 = options.generateRuleBypassTransitions_1;
    return $this;
  }
  function ATNDeserializationOptions_init_$Create$_0(options) {
    return ATNDeserializationOptions_init_$Init$_0(options, Object.create(ATNDeserializationOptions.prototype));
  }
  function Companion_10() {
    Companion_instance_10 = this;
    this.defaultOptions_1 = ATNDeserializationOptions_init_$Create$();
    this.defaultOptions_1.makeReadOnly_v2c5i9_k$();
  }
  Companion_10.prototype._get_defaultOptions__1024006286_gxo0b2_k$ = function () {
    return this.defaultOptions_1;
  };
  Companion_10.$metadata$ = {
    simpleName: 'Companion',
    kind: 'object',
    interfaces: []
  };
  var Companion_instance_10;
  function Companion_getInstance_11() {
    if (Companion_instance_10 == null)
      new Companion_10();
    return Companion_instance_10;
  }
  ATNDeserializationOptions.prototype._get_isReadOnly__2458692703_ud9qjl_k$ = function () {
    return this.isReadOnly_1;
  };
  ATNDeserializationOptions.prototype._set_isVerifyATN__960401837_6mlo64_k$ = function (verifyATN) {
    this.throwIfReadOnly_f7oz70_k$();
    this.verifyATN_1 = verifyATN;
  };
  ATNDeserializationOptions.prototype._get_isVerifyATN__2791844665_oux4uf_k$ = function () {
    return this.verifyATN_1;
  };
  ATNDeserializationOptions.prototype._set_isGenerateRuleBypassTransitions__2280808778_gntbvj_k$ = function (generateRuleBypassTransitions) {
    this.throwIfReadOnly_f7oz70_k$();
    this.generateRuleBypassTransitions_1 = generateRuleBypassTransitions;
  };
  ATNDeserializationOptions.prototype._get_isGenerateRuleBypassTransitions__352042198_5tlhhy_k$ = function () {
    return this.generateRuleBypassTransitions_1;
  };
  ATNDeserializationOptions.prototype.makeReadOnly_v2c5i9_k$ = function () {
    this.isReadOnly_1 = true;
  };
  ATNDeserializationOptions.prototype.throwIfReadOnly_f7oz70_k$ = function () {
    if (this.isReadOnly_1) {
      throw IllegalStateException_init_$Create$('The object is read only.');
    }
  };
  function ATNDeserializationOptions() {
    Companion_getInstance_11();
    this.isReadOnly_1 = false;
    this.verifyATN_1 = false;
    this.generateRuleBypassTransitions_1 = false;
  }
  ATNDeserializationOptions.$metadata$ = {
    simpleName: 'ATNDeserializationOptions',
    kind: 'class',
    interfaces: []
  };
  var UnicodeDeserializingMode_UNICODE_BMP_instance;
  var UnicodeDeserializingMode_UNICODE_SMP_instance;
  function values() {
    return [UnicodeDeserializingMode_UNICODE_BMP_getInstance(), UnicodeDeserializingMode_UNICODE_SMP_getInstance()];
  }
  function valueOf(value) {
    switch (value) {
      case 'UNICODE_BMP':
        return UnicodeDeserializingMode_UNICODE_BMP_getInstance();
      case 'UNICODE_SMP':
        return UnicodeDeserializingMode_UNICODE_SMP_getInstance();
      default:
        UnicodeDeserializingMode_initEntries();
        THROW_ISE();
        break;
    }
  }
  var UnicodeDeserializingMode_entriesInitialized;
  function UnicodeDeserializingMode_initEntries() {
    if (UnicodeDeserializingMode_entriesInitialized)
      return Unit_getInstance();
    UnicodeDeserializingMode_entriesInitialized = true;
    UnicodeDeserializingMode_UNICODE_BMP_instance = new UnicodeDeserializingMode('UNICODE_BMP', 0);
    UnicodeDeserializingMode_UNICODE_SMP_instance = new UnicodeDeserializingMode('UNICODE_SMP', 1);
  }
  function _get_BASE_SERIALIZED_UUID__1387786531($this) {
    return $this.BASE_SERIALIZED_UUID_1;
  }
  function _get_ADDED_PRECEDENCE_TRANSITIONS__709477155($this) {
    return $this.ADDED_PRECEDENCE_TRANSITIONS_1;
  }
  function _get_ADDED_LEXER_ACTIONS__2831496838($this) {
    return $this.ADDED_LEXER_ACTIONS_1;
  }
  function _get_ADDED_UNICODE_SMP__2347590172($this) {
    return $this.ADDED_UNICODE_SMP_1;
  }
  function _get_SUPPORTED_UUIDS__2672183274($this) {
    return $this.SUPPORTED_UUIDS_1;
  }
  function ATNDeserializer$Companion$getUnicodeDeserializer$1() {
  }
  ATNDeserializer$Companion$getUnicodeDeserializer$1.prototype.readUnicode_9dsr6b_k$ = function (data, p) {
    return Char__toInt_impl_2402388783(data[p]);
  };
  ATNDeserializer$Companion$getUnicodeDeserializer$1.prototype.size_23och_k$ = function () {
    return 1;
  };
  ATNDeserializer$Companion$getUnicodeDeserializer$1.$metadata$ = {
    kind: 'class',
    interfaces: [UnicodeDeserializer]
  };
  function ATNDeserializer$Companion$getUnicodeDeserializer$2() {
  }
  ATNDeserializer$Companion$getUnicodeDeserializer$2.prototype.readUnicode_9dsr6b_k$ = function (data, p) {
    return Companion_getInstance_12().toInt32_gizw8v_k$(data, p);
  };
  ATNDeserializer$Companion$getUnicodeDeserializer$2.prototype.size_23och_k$ = function () {
    return 2;
  };
  ATNDeserializer$Companion$getUnicodeDeserializer$2.$metadata$ = {
    kind: 'class',
    interfaces: [UnicodeDeserializer]
  };
  function ATNDeserializer_init_$Init$(deserializationOptions, $mask0, $marker, $this) {
    if (!(($mask0 & 1) === 0))
      deserializationOptions = Companion_getInstance_11()._get_defaultOptions__1024006286_gxo0b2_k$();
    ATNDeserializer.call($this, deserializationOptions);
    return $this;
  }
  function ATNDeserializer_init_$Create$(deserializationOptions, $mask0, $marker) {
    return ATNDeserializer_init_$Init$(deserializationOptions, $mask0, $marker, Object.create(ATNDeserializer.prototype));
  }
  function _get_deserializationOptions__2211934300($this) {
    return $this.deserializationOptions_1;
  }
  function UnicodeDeserializer() {
  }
  UnicodeDeserializer.$metadata$ = {
    simpleName: 'UnicodeDeserializer',
    kind: 'interface',
    interfaces: []
  };
  function UnicodeDeserializingMode(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  UnicodeDeserializingMode.$metadata$ = {
    simpleName: 'UnicodeDeserializingMode',
    kind: 'class',
    interfaces: []
  };
  function deserializeSets($this, data, p, sets, unicodeDeserializer) {
    var p_0 = p;
    var tmp = Companion_getInstance_12();
    var tmp0 = p_0;
    p_0 = tmp0 + 1 | 0;
    var nsets = tmp.toInt_uwmgaw_k$(data[tmp0]);
    var inductionVariable = 0;
    if (inductionVariable < nsets)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var nintervals = Companion_getInstance_12().toInt_uwmgaw_k$(data[p_0]);
        var tmp2 = p_0;
        p_0 = tmp2 + 1 | 0;
        Unit_getInstance();
        var set = IntervalSet_init_$Create$_1(new Int32Array([]));
        sets.add_1j60pz_k$(set);
        Unit_getInstance();
        var tmp_0 = Companion_getInstance_12();
        var tmp3 = p_0;
        p_0 = tmp3 + 1 | 0;
        var containsEof = !(tmp_0.toInt_uwmgaw_k$(data[tmp3]) === 0);
        if (containsEof) {
          set.add_fx1qxd_k$(-1);
        }
        var inductionVariable_0 = 0;
        if (inductionVariable_0 < nintervals)
          do {
            var j = inductionVariable_0;
            inductionVariable_0 = inductionVariable_0 + 1 | 0;
            var a = unicodeDeserializer.readUnicode_9dsr6b_k$(data, p_0);
            p_0 = p_0 + unicodeDeserializer.size_23och_k$() | 0;
            var b = unicodeDeserializer.readUnicode_9dsr6b_k$(data, p_0);
            p_0 = p_0 + unicodeDeserializer.size_23och_k$() | 0;
            set.add_fw02r4_k$(a, b);
          }
           while (inductionVariable_0 < nintervals);
      }
       while (inductionVariable < nsets);
    return p_0;
  }
  function Companion_11() {
    Companion_instance_11 = this;
    this.SERIALIZED_VERSION_1 = 3;
    this.BASE_SERIALIZED_UUID_1 = Companion_getInstance_35().fromString_2a1yvu_k$('33761B2D-78BB-4A43-8B0B-4F5BEE8AACF3');
    this.ADDED_PRECEDENCE_TRANSITIONS_1 = Companion_getInstance_35().fromString_2a1yvu_k$('1DA0C57D-6C06-438A-9B27-10BCB3CE0F61');
    this.ADDED_LEXER_ACTIONS_1 = Companion_getInstance_35().fromString_2a1yvu_k$('AADB8D7E-AEEF-4415-AD2B-8204D6CF042E');
    this.ADDED_UNICODE_SMP_1 = Companion_getInstance_35().fromString_2a1yvu_k$('59627784-3BE5-417A-B9EB-8131A7286089');
    this.SUPPORTED_UUIDS_1 = ArrayList_init_$Create$_0();
    this.SUPPORTED_UUIDS_1.add_1j60pz_k$(this.BASE_SERIALIZED_UUID_1);
    Unit_getInstance();
    this.SUPPORTED_UUIDS_1.add_1j60pz_k$(this.ADDED_PRECEDENCE_TRANSITIONS_1);
    Unit_getInstance();
    this.SUPPORTED_UUIDS_1.add_1j60pz_k$(this.ADDED_LEXER_ACTIONS_1);
    Unit_getInstance();
    this.SUPPORTED_UUIDS_1.add_1j60pz_k$(this.ADDED_UNICODE_SMP_1);
    Unit_getInstance();
    this.SERIALIZED_UUID_1 = this.ADDED_UNICODE_SMP_1;
  }
  Companion_11.prototype._get_SERIALIZED_VERSION__2510710318_tiathu_k$ = function () {
    return this.SERIALIZED_VERSION_1;
  };
  Companion_11.prototype._get_SERIALIZED_UUID__3855021371_79xkg5_k$ = function () {
    return this.SERIALIZED_UUID_1;
  };
  Companion_11.prototype.getUnicodeDeserializer_1uqnw4_k$ = function (mode) {
    var tmp;
    if (mode.equals(UnicodeDeserializingMode_UNICODE_BMP_getInstance())) {
      tmp = new ATNDeserializer$Companion$getUnicodeDeserializer$1();
    } else {
      tmp = new ATNDeserializer$Companion$getUnicodeDeserializer$2();
    }
    return tmp;
  };
  Companion_11.prototype.isFeatureSupported_hgjfni_k$ = function (feature, actualUuid) {
    var featureIndex = this.SUPPORTED_UUIDS_1.indexOf_dcv8dt_k$(feature);
    var tmp;
    if (featureIndex < 0) {
      tmp = false;
    } else {
      tmp = this.SUPPORTED_UUIDS_1.indexOf_dcv8dt_k$(actualUuid) >= featureIndex;
    }
    return tmp;
  };
  Companion_11.prototype.toInt_uwmgaw_k$ = function (c) {
    return Char__toInt_impl_2402388783(c);
  };
  Companion_11.prototype.toInt32_gizw8v_k$ = function (data, offset) {
    return Char__toInt_impl_2402388783(data[offset]) | Char__toInt_impl_2402388783(data[offset + 1 | 0]) << 16;
  };
  Companion_11.prototype.toLong_k5ew59_k$ = function (data, offset) {
    var lowOrder = toLong(this.toInt32_gizw8v_k$(data, offset)).and_jhajnj_k$(new Long(-1, 0));
    return lowOrder.or_s401rn_k$(toLong(this.toInt32_gizw8v_k$(data, offset + 2 | 0)).shl_po5ip6_k$(32));
  };
  Companion_11.prototype.toUUID_pxfcm6_k$ = function (data, offset) {
    var leastSigBits = this.toLong_k5ew59_k$(data, offset);
    var mostSigBits = this.toLong_k5ew59_k$(data, offset + 4 | 0);
    return UUID_init_$Create$(mostSigBits, leastSigBits);
  };
  Companion_11.$metadata$ = {
    simpleName: 'Companion',
    kind: 'object',
    interfaces: []
  };
  var Companion_instance_11;
  function Companion_getInstance_12() {
    if (Companion_instance_11 == null)
      new Companion_11();
    return Companion_instance_11;
  }
  function UnicodeDeserializingMode_UNICODE_BMP_getInstance() {
    UnicodeDeserializingMode_initEntries();
    return UnicodeDeserializingMode_UNICODE_BMP_instance;
  }
  function UnicodeDeserializingMode_UNICODE_SMP_getInstance() {
    UnicodeDeserializingMode_initEntries();
    return UnicodeDeserializingMode_UNICODE_SMP_instance;
  }
  function ATNDeserializer(deserializationOptions) {
    Companion_getInstance_12();
    var deserializationOptions_0 = deserializationOptions;
    if (deserializationOptions_0 == null) {
      deserializationOptions_0 = Companion_getInstance_11()._get_defaultOptions__1024006286_gxo0b2_k$();
    }
    this.deserializationOptions_1 = deserializationOptions_0;
  }
  ATNDeserializer.prototype.deserialize_c68pee_k$ = function (data) {
    var data_0 = data;
    data_0 = copyOf_0(data_0);
    var inductionVariable = 1;
    var last = data_0.length;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        data_0[i] = numberToChar(Char__toInt_impl_2402388783(data_0[i]) - 2 | 0);
      }
       while (inductionVariable < last);
    var p = 0;
    var tmp = Companion_getInstance_12();
    var tmp_0 = data_0;
    var tmp1 = p;
    p = tmp1 + 1 | 0;
    var version = tmp.toInt_uwmgaw_k$(tmp_0[tmp1]);
    if (!(version === Companion_getInstance_12().SERIALIZED_VERSION_1)) {
      var reason = 'Could not deserialize ATN with version ' + version + ' (expected ' + Companion_getInstance_12().SERIALIZED_VERSION_1 + ').';
      throw UnsupportedOperationException_init_$Create$(reason);
    }
    var uuid = Companion_getInstance_12().toUUID_pxfcm6_k$(data_0, p);
    p = p + 8 | 0;
    if (!Companion_getInstance_12().SUPPORTED_UUIDS_1.contains_2ehdt1_k$(uuid)) {
      var reason_0 = 'Could not deserialize ATN with UUID ' + uuid + ' (expected ' + Companion_getInstance_12().SERIALIZED_UUID_1 + ' or a legacy UUID).';
      throw UnsupportedOperationException_init_$Create$(reason_0);
    }
    var supportsPrecedencePredicates = Companion_getInstance_12().isFeatureSupported_hgjfni_k$(Companion_getInstance_12().ADDED_PRECEDENCE_TRANSITIONS_1, uuid);
    var supportsLexerActions = Companion_getInstance_12().isFeatureSupported_hgjfni_k$(Companion_getInstance_12().ADDED_LEXER_ACTIONS_1, uuid);
    var tmp_1 = values_0();
    var tmp_2 = Companion_getInstance_12();
    var tmp_3 = data_0;
    var tmp2 = p;
    p = tmp2 + 1 | 0;
    var grammarType = tmp_1[tmp_2.toInt_uwmgaw_k$(tmp_3[tmp2])];
    var tmp_4 = Companion_getInstance_12();
    var tmp_5 = data_0;
    var tmp3 = p;
    p = tmp3 + 1 | 0;
    var maxTokenType = tmp_4.toInt_uwmgaw_k$(tmp_5[tmp3]);
    var atn = new ATN(grammarType, maxTokenType);
    var loopBackStateNumbers = ArrayList_init_$Create$_0();
    var endStateNumbers = ArrayList_init_$Create$_0();
    var tmp_6 = Companion_getInstance_12();
    var tmp_7 = data_0;
    var tmp4 = p;
    p = tmp4 + 1 | 0;
    var nstates = tmp_6.toInt_uwmgaw_k$(tmp_7[tmp4]);
    var inductionVariable_0 = 0;
    if (inductionVariable_0 < nstates)
      $l$loop: do {
        var i_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        var tmp_8 = Companion_getInstance_12();
        var tmp_9 = data_0;
        var tmp6 = p;
        p = tmp6 + 1 | 0;
        var stype = tmp_8.toInt_uwmgaw_k$(tmp_9[tmp6]);
        if (stype === Companion_getInstance_14()._get_INVALID_TYPE__2936648937_mgph5j_k$()) {
          atn.addState_u9plhk_k$(null);
          continue $l$loop;
        }
        var tmp_10 = Companion_getInstance_12();
        var tmp_11 = data_0;
        var tmp7 = p;
        p = tmp7 + 1 | 0;
        var ruleIndex = tmp_10.toInt_uwmgaw_k$(tmp_11[tmp7]);
        if (ruleIndex === Char__toInt_impl_2402388783(maxValue(Companion_getInstance()))) {
          ruleIndex = -1;
        }
        var s = this.stateFactory_ioxy1_k$(stype, ruleIndex);
        if (stype === Companion_getInstance_14()._get_LOOP_END__1275857707_l3m23v_k$()) {
          var tmp_12 = Companion_getInstance_12();
          var tmp_13 = data_0;
          var tmp8 = p;
          p = tmp8 + 1 | 0;
          var loopBackStateNumber = tmp_12.toInt_uwmgaw_k$(tmp_13[tmp8]);
          loopBackStateNumbers.add_1j60pz_k$(new Pair(s instanceof LoopEndState ? s : THROW_CCE(), loopBackStateNumber));
          Unit_getInstance();
        } else {
          if (s instanceof BlockStartState) {
            var tmp_14 = Companion_getInstance_12();
            var tmp_15 = data_0;
            var tmp9 = p;
            p = tmp9 + 1 | 0;
            var endStateNumber = tmp_14.toInt_uwmgaw_k$(tmp_15[tmp9]);
            endStateNumbers.add_1j60pz_k$(new Pair(s, endStateNumber));
            Unit_getInstance();
          } else {
          }
        }
        atn.addState_u9plhk_k$(s);
      }
       while (inductionVariable_0 < nstates);
    var tmp10_iterator = loopBackStateNumbers.iterator_jk1svi_k$();
    while (tmp10_iterator.hasNext_bitz1p_k$()) {
      var pair = tmp10_iterator.next_20eer_k$();
      pair._get_first__3232921377_hkbbvj_k$()._set_loopBackState__2314937695_uaz0mh_k$(atn._get_states__388198729_6f4g21_k$().get_fkrdnv_k$(pair._get_second__4255435031_njbah_k$()));
    }
    var tmp11_iterator = endStateNumbers.iterator_jk1svi_k$();
    while (tmp11_iterator.hasNext_bitz1p_k$()) {
      var pair_0 = tmp11_iterator.next_20eer_k$();
      var tmp_16 = pair_0._get_first__3232921377_hkbbvj_k$();
      var tmp_17 = atn._get_states__388198729_6f4g21_k$().get_fkrdnv_k$(pair_0._get_second__4255435031_njbah_k$());
      tmp_16._set_endState__3864674337_phlkv8_k$(tmp_17 instanceof BlockEndState ? tmp_17 : THROW_CCE());
    }
    var tmp_18 = Companion_getInstance_12();
    var tmp_19 = data_0;
    var tmp12 = p;
    p = tmp12 + 1 | 0;
    var numNonGreedyStates = tmp_18.toInt_uwmgaw_k$(tmp_19[tmp12]);
    var inductionVariable_1 = 0;
    if (inductionVariable_1 < numNonGreedyStates)
      do {
        var i_1 = inductionVariable_1;
        inductionVariable_1 = inductionVariable_1 + 1 | 0;
        var tmp_20 = Companion_getInstance_12();
        var tmp_21 = data_0;
        var tmp14 = p;
        p = tmp14 + 1 | 0;
        var stateNumber = tmp_20.toInt_uwmgaw_k$(tmp_21[tmp14]);
        var tmp_22 = atn._get_states__388198729_6f4g21_k$().get_fkrdnv_k$(stateNumber);
        (tmp_22 instanceof DecisionState ? tmp_22 : THROW_CCE())._set_nonGreedy__2693793176_k4vyr3_k$(true);
      }
       while (inductionVariable_1 < numNonGreedyStates);
    if (supportsPrecedencePredicates) {
      var tmp_23 = Companion_getInstance_12();
      var tmp_24 = data_0;
      var tmp15 = p;
      p = tmp15 + 1 | 0;
      var numPrecedenceStates = tmp_23.toInt_uwmgaw_k$(tmp_24[tmp15]);
      var inductionVariable_2 = 0;
      if (inductionVariable_2 < numPrecedenceStates)
        do {
          var i_2 = inductionVariable_2;
          inductionVariable_2 = inductionVariable_2 + 1 | 0;
          var tmp_25 = Companion_getInstance_12();
          var tmp_26 = data_0;
          var tmp17 = p;
          p = tmp17 + 1 | 0;
          var stateNumber_0 = tmp_25.toInt_uwmgaw_k$(tmp_26[tmp17]);
          var tmp_27 = atn._get_states__388198729_6f4g21_k$().get_fkrdnv_k$(stateNumber_0);
          (tmp_27 instanceof RuleStartState ? tmp_27 : THROW_CCE())._set_isLeftRecursiveRule__1456542504_xgaptr_k$(true);
        }
         while (inductionVariable_2 < numPrecedenceStates);
    }
    var tmp_28 = Companion_getInstance_12();
    var tmp_29 = data_0;
    var tmp18 = p;
    p = tmp18 + 1 | 0;
    var nrules = tmp_28.toInt_uwmgaw_k$(tmp_29[tmp18]);
    if (atn._get_grammarType__2271111728_xgy8y8_k$().equals(ATNType_LEXER_getInstance())) {
      atn._set_ruleToTokenType__3740566537_khje3x_k$(new Int32Array(nrules));
    }
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = fillArrayVal(Array(nrules), null);
      break $l$block;
    }
    atn._set_ruleToStartState__3880579665_a5rwj3_k$(tmp$ret$0);
    var inductionVariable_3 = 0;
    if (inductionVariable_3 < nrules)
      do {
        var i_3 = inductionVariable_3;
        inductionVariable_3 = inductionVariable_3 + 1 | 0;
        var tmp_30 = Companion_getInstance_12();
        var tmp_31 = data_0;
        var tmp20 = p;
        p = tmp20 + 1 | 0;
        var s_0 = tmp_30.toInt_uwmgaw_k$(tmp_31[tmp20]);
        var tmp_32 = atn._get_states__388198729_6f4g21_k$().get_fkrdnv_k$(s_0);
        var startState = tmp_32 instanceof RuleStartState ? tmp_32 : THROW_CCE();
        ensureNotNull(atn._get_ruleToStartState__1344368709_m8ehj9_k$())[i_3] = startState;
        if (atn._get_grammarType__2271111728_xgy8y8_k$().equals(ATNType_LEXER_getInstance())) {
          var tmp_33 = Companion_getInstance_12();
          var tmp_34 = data_0;
          var tmp21 = p;
          p = tmp21 + 1 | 0;
          var tokenType = tmp_33.toInt_uwmgaw_k$(tmp_34[tmp21]);
          if (tokenType === 65535) {
            tokenType = Companion_getInstance_6()._get_EOF__855984949_e5mq7p_k$();
          }
          ensureNotNull(atn._get_ruleToTokenType__56522645_xnh5h_k$())[i_3] = tokenType;
          if (!Companion_getInstance_12().isFeatureSupported_hgjfni_k$(Companion_getInstance_12().ADDED_LEXER_ACTIONS_1, uuid)) {
            var tmp_35 = Companion_getInstance_12();
            var tmp_36 = data_0;
            var tmp22 = p;
            p = tmp22 + 1 | 0;
            var actionIndexIgnored = tmp_35.toInt_uwmgaw_k$(tmp_36[tmp22]);
          }
        }
      }
       while (inductionVariable_3 < nrules);
    var tmp$ret$1;
    $l$block_0: {
      tmp$ret$1 = fillArrayVal(Array(nrules), null);
      break $l$block_0;
    }
    atn._set_ruleToStopState__2299509421_gin8od_k$(tmp$ret$1);
    var tmp23_iterator = atn._get_states__388198729_6f4g21_k$().iterator_jk1svi_k$();
    $l$loop_0: while (tmp23_iterator.hasNext_bitz1p_k$()) {
      var state = tmp23_iterator.next_20eer_k$();
      if (!(state instanceof RuleStopState)) {
        continue $l$loop_0;
      } else {
      }
      var stopState = state;
      ensureNotNull(atn._get_ruleToStopState__2910432825_mwbdmv_k$())[state._get_ruleIndex__1923824091_vte863_k$()] = stopState;
      ensureNotNull(ensureNotNull(atn._get_ruleToStartState__1344368709_m8ehj9_k$())[state._get_ruleIndex__1923824091_vte863_k$()])._set_stopState__4160855542_lh3cfz_k$(stopState);
    }
    var tmp_37 = Companion_getInstance_12();
    var tmp_38 = data_0;
    var tmp24 = p;
    p = tmp24 + 1 | 0;
    var nmodes = tmp_37.toInt_uwmgaw_k$(tmp_38[tmp24]);
    var inductionVariable_4 = 0;
    if (inductionVariable_4 < nmodes)
      do {
        var i_4 = inductionVariable_4;
        inductionVariable_4 = inductionVariable_4 + 1 | 0;
        var tmp_39 = Companion_getInstance_12();
        var tmp_40 = data_0;
        var tmp26 = p;
        p = tmp26 + 1 | 0;
        var s_1 = tmp_39.toInt_uwmgaw_k$(tmp_40[tmp26]);
        var tmp_41 = atn._get_modeToStartState__2760479998_pdldz6_k$();
        var tmp_42 = atn._get_states__388198729_6f4g21_k$().get_fkrdnv_k$(s_1);
        tmp_41.add_1j60pz_k$(tmp_42 instanceof TokensStartState ? tmp_42 : THROW_CCE());
        Unit_getInstance();
      }
       while (inductionVariable_4 < nmodes);
    var sets = ArrayList_init_$Create$_0();
    p = deserializeSets(this, data_0, p, sets, Companion_getInstance_12().getUnicodeDeserializer_1uqnw4_k$(UnicodeDeserializingMode_UNICODE_BMP_getInstance()));
    if (Companion_getInstance_12().isFeatureSupported_hgjfni_k$(Companion_getInstance_12().ADDED_UNICODE_SMP_1, uuid)) {
      p = deserializeSets(this, data_0, p, sets, Companion_getInstance_12().getUnicodeDeserializer_1uqnw4_k$(UnicodeDeserializingMode_UNICODE_SMP_getInstance()));
    }
    var tmp_43 = Companion_getInstance_12();
    var tmp_44 = data_0;
    var tmp27 = p;
    p = tmp27 + 1 | 0;
    var nedges = tmp_43.toInt_uwmgaw_k$(tmp_44[tmp27]);
    var inductionVariable_5 = 0;
    if (inductionVariable_5 < nedges)
      do {
        var i_5 = inductionVariable_5;
        inductionVariable_5 = inductionVariable_5 + 1 | 0;
        var src = Companion_getInstance_12().toInt_uwmgaw_k$(data_0[p]);
        var trg = Companion_getInstance_12().toInt_uwmgaw_k$(data_0[p + 1 | 0]);
        var ttype = Companion_getInstance_12().toInt_uwmgaw_k$(data_0[p + 2 | 0]);
        var arg1 = Companion_getInstance_12().toInt_uwmgaw_k$(data_0[p + 3 | 0]);
        var arg2 = Companion_getInstance_12().toInt_uwmgaw_k$(data_0[p + 4 | 0]);
        var arg3 = Companion_getInstance_12().toInt_uwmgaw_k$(data_0[p + 5 | 0]);
        var trans = this.edgeFactory_oubfi8_k$(atn, ttype, src, trg, arg1, arg2, arg3, sets);
        var srcState = atn._get_states__388198729_6f4g21_k$().get_fkrdnv_k$(src);
        ensureNotNull(srcState).addTransition_ayyciy_k$(trans);
        p = p + 6 | 0;
      }
       while (inductionVariable_5 < nedges);
    var tmp29_iterator = atn._get_states__388198729_6f4g21_k$().iterator_jk1svi_k$();
    while (tmp29_iterator.hasNext_bitz1p_k$()) {
      var state_0 = tmp29_iterator.next_20eer_k$();
      var inductionVariable_6 = 0;
      var last_0 = ensureNotNull(state_0)._get_numberOfTransitions__3931454387_60fcct_k$();
      if (inductionVariable_6 < last_0)
        $l$loop_1: do {
          var i_6 = inductionVariable_6;
          inductionVariable_6 = inductionVariable_6 + 1 | 0;
          var tmp_45 = ensureNotNull(state_0).transition_bdhd2s_k$(i_6);
          var tmp31_elvis_lhs = tmp_45 instanceof RuleTransition ? tmp_45 : null;
          var tmp_46;
          if (tmp31_elvis_lhs == null) {
            continue $l$loop_1;
          } else {
            tmp_46 = tmp31_elvis_lhs;
          }
          var t = tmp_46;
          var ruleTransition = t instanceof RuleTransition ? t : THROW_CCE();
          var outermostPrecedenceReturn = -1;
          if (ensureNotNull(ensureNotNull(atn._get_ruleToStartState__1344368709_m8ehj9_k$())[ensureNotNull(ruleTransition._get_target__747061146_ccs42i_k$())._get_ruleIndex__1923824091_vte863_k$()])._get_isLeftRecursiveRule__2260623540_xn71os_k$()) {
            if (ruleTransition._get_precedence__3064254401_kcqg5b_k$() === 0) {
              outermostPrecedenceReturn = ensureNotNull(ruleTransition._get_target__747061146_ccs42i_k$())._get_ruleIndex__1923824091_vte863_k$();
            }
          }
          var returnTransition = new EpsilonTransition(ruleTransition._get_followState__3560924721_c512vj_k$(), outermostPrecedenceReturn);
          ensureNotNull(ensureNotNull(atn._get_ruleToStopState__2910432825_mwbdmv_k$())[ensureNotNull(ensureNotNull(ruleTransition)._get_target__747061146_ccs42i_k$())._get_ruleIndex__1923824091_vte863_k$()]).addTransition_ayyciy_k$(returnTransition);
        }
         while (inductionVariable_6 < last_0);
    }
    var tmp32_iterator = atn._get_states__388198729_6f4g21_k$().iterator_jk1svi_k$();
    while (tmp32_iterator.hasNext_bitz1p_k$()) {
      var state_1 = tmp32_iterator.next_20eer_k$();
      if (state_1 instanceof BlockStartState) {
        if ((state_1 instanceof BlockStartState ? state_1 : THROW_CCE())._get_endState__3090543125_jx2zmz_k$() == null) {
          throw IllegalStateException_init_$Create$_0();
        } else {
        }
        if (!(ensureNotNull((state_1 instanceof BlockStartState ? state_1 : THROW_CCE())._get_endState__3090543125_jx2zmz_k$())._get_startState__542014748_8yp998_k$() == null)) {
          throw IllegalStateException_init_$Create$_0();
        } else {
        }
        var tmp_47 = ensureNotNull((state_1 instanceof BlockStartState ? state_1 : THROW_CCE())._get_endState__3090543125_jx2zmz_k$());
        tmp_47._set_startState__1452767272_z9ejdi_k$(state_1 instanceof BlockStartState ? state_1 : THROW_CCE());
      } else {
      }
      if (state_1 instanceof PlusLoopbackState) {
        var loopbackState = state_1 instanceof PlusLoopbackState ? state_1 : THROW_CCE();
        var inductionVariable_7 = 0;
        var last_1 = loopbackState._get_numberOfTransitions__3931454387_60fcct_k$();
        if (inductionVariable_7 < last_1)
          do {
            var i_7 = inductionVariable_7;
            inductionVariable_7 = inductionVariable_7 + 1 | 0;
            var target = loopbackState.transition_bdhd2s_k$(i_7)._get_target__747061146_ccs42i_k$();
            if (target instanceof PlusBlockStartState) {
              (target instanceof PlusBlockStartState ? target : THROW_CCE())._set_loopBackState__2314937695_xqmt9r_k$(loopbackState);
            } else {
            }
          }
           while (inductionVariable_7 < last_1);
      } else {
        if (state_1 instanceof StarLoopbackState) {
          var loopbackState_0 = state_1 instanceof StarLoopbackState ? state_1 : THROW_CCE();
          var inductionVariable_8 = 0;
          var last_2 = loopbackState_0._get_numberOfTransitions__3931454387_60fcct_k$();
          if (inductionVariable_8 < last_2)
            do {
              var i_8 = inductionVariable_8;
              inductionVariable_8 = inductionVariable_8 + 1 | 0;
              var target_0 = loopbackState_0.transition_bdhd2s_k$(i_8)._get_target__747061146_ccs42i_k$();
              if (target_0 instanceof StarLoopEntryState) {
                (target_0 instanceof StarLoopEntryState ? target_0 : THROW_CCE())._set_loopBackState__2314937695_w51frd_k$(loopbackState_0);
              } else {
              }
            }
             while (inductionVariable_8 < last_2);
        } else {
        }
      }
    }
    var tmp_48 = Companion_getInstance_12();
    var tmp_49 = data_0;
    var tmp35 = p;
    p = tmp35 + 1 | 0;
    var ndecisions = tmp_48.toInt_uwmgaw_k$(tmp_49[tmp35]);
    var inductionVariable_9 = 1;
    if (inductionVariable_9 <= ndecisions)
      do {
        var i_9 = inductionVariable_9;
        inductionVariable_9 = inductionVariable_9 + 1 | 0;
        var tmp_50 = Companion_getInstance_12();
        var tmp_51 = data_0;
        var tmp37 = p;
        p = tmp37 + 1 | 0;
        var s_2 = tmp_50.toInt_uwmgaw_k$(tmp_51[tmp37]);
        var tmp_52 = atn._get_states__388198729_6f4g21_k$().get_fkrdnv_k$(s_2);
        var decState = tmp_52 instanceof DecisionState ? tmp_52 : THROW_CCE();
        atn._get_decisionToState__150441975_2hkhrr_k$().add_1j60pz_k$(decState);
        Unit_getInstance();
        decState._set_decision__2613385595_qqw8ff_k$(i_9 - 1 | 0);
      }
       while (!(i_9 === ndecisions));
    if (atn._get_grammarType__2271111728_xgy8y8_k$().equals(ATNType_LEXER_getInstance())) {
      if (supportsLexerActions) {
        var tmp$ret$2;
        $l$block_1: {
          var tmp_53 = Companion_getInstance_12();
          var tmp_54 = data_0;
          var tmp38 = p;
          p = tmp38 + 1 | 0;
          var tmp0_arrayOfNulls_0 = tmp_53.toInt_uwmgaw_k$(tmp_54[tmp38]);
          tmp$ret$2 = fillArrayVal(Array(tmp0_arrayOfNulls_0), null);
          break $l$block_1;
        }
        atn._set_lexerActions__882633510_3gs3z7_k$(tmp$ret$2);
        var inductionVariable_10 = 0;
        var last_3 = ensureNotNull(atn._get_lexerActions__1822786330_u58mxm_k$()).length - 1 | 0;
        if (inductionVariable_10 <= last_3)
          do {
            var i_10 = inductionVariable_10;
            inductionVariable_10 = inductionVariable_10 + 1 | 0;
            var tmp_55 = values_1();
            var tmp_56 = Companion_getInstance_12();
            var tmp_57 = data_0;
            var tmp40 = p;
            p = tmp40 + 1 | 0;
            var actionType = tmp_55[tmp_56.toInt_uwmgaw_k$(tmp_57[tmp40])];
            var tmp_58 = Companion_getInstance_12();
            var tmp_59 = data_0;
            var tmp41 = p;
            p = tmp41 + 1 | 0;
            var data1 = tmp_58.toInt_uwmgaw_k$(tmp_59[tmp41]);
            if (data1 === 65535) {
              data1 = -1;
            }
            var tmp_60 = Companion_getInstance_12();
            var tmp_61 = data_0;
            var tmp42 = p;
            p = tmp42 + 1 | 0;
            var data2 = tmp_60.toInt_uwmgaw_k$(tmp_61[tmp42]);
            if (data2 === 65535) {
              data2 = -1;
            }
            var lexerAction = this.lexerActionFactory_i868jg_k$(actionType, data1, data2);
            ensureNotNull(atn._get_lexerActions__1822786330_u58mxm_k$())[i_10] = lexerAction;
          }
           while (inductionVariable_10 <= last_3);
      } else {
        var legacyLexerActions = ArrayList_init_$Create$_0();
        var tmp43_iterator = atn._get_states__388198729_6f4g21_k$().iterator_jk1svi_k$();
        while (tmp43_iterator.hasNext_bitz1p_k$()) {
          var state_2 = tmp43_iterator.next_20eer_k$();
          var inductionVariable_11 = 0;
          var last_4 = ensureNotNull(state_2)._get_numberOfTransitions__3931454387_60fcct_k$();
          if (inductionVariable_11 < last_4)
            $l$loop_2: do {
              var i_11 = inductionVariable_11;
              inductionVariable_11 = inductionVariable_11 + 1 | 0;
              var tmp_62 = ensureNotNull(state_2).transition_bdhd2s_k$(i_11);
              var tmp45_elvis_lhs = tmp_62 instanceof ActionTransition ? tmp_62 : null;
              var tmp_63;
              if (tmp45_elvis_lhs == null) {
                continue $l$loop_2;
              } else {
                tmp_63 = tmp45_elvis_lhs;
              }
              var transition = tmp_63;
              var ruleIndex_0 = (transition instanceof ActionTransition ? transition : THROW_CCE())._get_ruleIndex__1923824091_vte863_k$();
              var actionIndex = (transition instanceof ActionTransition ? transition : THROW_CCE())._get_actionIndex__2870023381_nkdhrf_k$();
              var lexerAction_0 = new LexerCustomAction(ruleIndex_0, actionIndex);
              state_2.setTransition_cgj04e_k$(i_11, new ActionTransition(ensureNotNull(transition._get_target__747061146_ccs42i_k$()), ruleIndex_0, legacyLexerActions._get_size__809037418_ddoh9m_k$(), false));
              legacyLexerActions.add_1j60pz_k$(lexerAction_0);
              Unit_getInstance();
            }
             while (inductionVariable_11 < last_4);
        }
        var tmp$ret$3;
        $l$block_2: {
          tmp$ret$3 = copyToArray(legacyLexerActions);
          break $l$block_2;
        }
        atn._set_lexerActions__882633510_3gs3z7_k$(tmp$ret$3);
      }
    }
    this.markPrecedenceDecisions_rxq2xy_k$(atn);
    if (this.deserializationOptions_1._get_isVerifyATN__2791844665_oux4uf_k$()) {
      this.verifyATN_peuhuw_k$(atn);
    }
    if (this.deserializationOptions_1._get_isGenerateRuleBypassTransitions__352042198_5tlhhy_k$() ? atn._get_grammarType__2271111728_xgy8y8_k$().equals(ATNType_PARSER_getInstance()) : false) {
      atn._set_ruleToTokenType__3740566537_khje3x_k$(new Int32Array(ensureNotNull(atn._get_ruleToStartState__1344368709_m8ehj9_k$()).length));
      var inductionVariable_12 = 0;
      var last_5 = ensureNotNull(atn._get_ruleToStartState__1344368709_m8ehj9_k$()).length - 1 | 0;
      if (inductionVariable_12 <= last_5)
        do {
          var i_12 = inductionVariable_12;
          inductionVariable_12 = inductionVariable_12 + 1 | 0;
          ensureNotNull(atn._get_ruleToTokenType__56522645_xnh5h_k$())[i_12] = (atn._get_maxTokenType__2953938780_m6ew84_k$() + i_12 | 0) + 1 | 0;
        }
         while (inductionVariable_12 <= last_5);
      var inductionVariable_13 = 0;
      var last_6 = ensureNotNull(atn._get_ruleToStartState__1344368709_m8ehj9_k$()).length - 1 | 0;
      if (inductionVariable_13 <= last_6)
        do {
          var i_13 = inductionVariable_13;
          inductionVariable_13 = inductionVariable_13 + 1 | 0;
          var bypassStart = new BasicBlockStartState();
          bypassStart._set_ruleIndex__152087887_m9etbz_k$(i_13);
          atn.addState_u9plhk_k$(bypassStart);
          var bypassStop = new BlockEndState();
          bypassStop._set_ruleIndex__152087887_m9etbz_k$(i_13);
          atn.addState_u9plhk_k$(bypassStop);
          bypassStart._set_endState__3864674337_phlkv8_k$(bypassStop);
          atn.defineDecisionState_9bunjf_k$(bypassStart);
          Unit_getInstance();
          bypassStop._set_startState__1452767272_z9ejdi_k$(bypassStart);
          var endState;
          var excludeTransition = null;
          if (ensureNotNull(ensureNotNull(atn._get_ruleToStartState__1344368709_m8ehj9_k$())[i_13])._get_isLeftRecursiveRule__2260623540_xn71os_k$()) {
            endState = null;
            var tmp48_iterator = atn._get_states__388198729_6f4g21_k$().iterator_jk1svi_k$();
            $l$loop_6: while (tmp48_iterator.hasNext_bitz1p_k$()) {
              var state_3 = tmp48_iterator.next_20eer_k$();
              if (!(ensureNotNull(state_3)._get_ruleIndex__1923824091_vte863_k$() === i_13)) {
                continue $l$loop_6;
              }
              if (!(state_3 instanceof StarLoopEntryState)) {
                continue $l$loop_6;
              } else {
              }
              var tmp_64 = state_3.transition_bdhd2s_k$(state_3._get_numberOfTransitions__3931454387_60fcct_k$() - 1 | 0)._get_target__747061146_ccs42i_k$();
              var tmp49_elvis_lhs = tmp_64 instanceof LoopEndState ? tmp_64 : null;
              var tmp_65;
              if (tmp49_elvis_lhs == null) {
                continue $l$loop_6;
              } else {
                tmp_65 = tmp49_elvis_lhs;
              }
              var maybeLoopEndState = tmp_65;
              var tmp_66;
              if (maybeLoopEndState._get_epsilonOnlyTransitions__1601655907_qhl1lv_k$()) {
                var tmp_67 = maybeLoopEndState.transition_bdhd2s_k$(0)._get_target__747061146_ccs42i_k$();
                tmp_66 = tmp_67 instanceof RuleStopState;
              } else {
                tmp_66 = false;
              }
              if (tmp_66) {
                endState = state_3;
                break $l$loop_6;
              } else {
              }
            }
            if (endState == null) {
              throw UnsupportedOperationException_init_$Create$("Couldn't identify final state of the precedence rule prefix section.");
            }
            excludeTransition = ensureNotNull((endState instanceof StarLoopEntryState ? endState : THROW_CCE())._get_loopBackState__1394904043_n2hmuj_k$()).transition_bdhd2s_k$(0);
          } else {
            endState = ensureNotNull(atn._get_ruleToStopState__2910432825_mwbdmv_k$())[i_13];
          }
          var tmp50_iterator = atn._get_states__388198729_6f4g21_k$().iterator_jk1svi_k$();
          while (tmp50_iterator.hasNext_bitz1p_k$()) {
            var state_4 = tmp50_iterator.next_20eer_k$();
            var tmp51_iterator = ensureNotNull(state_4)._get_transitions__2595107731_s41w19_k$().iterator_jk1svi_k$();
            $l$loop_7: while (tmp51_iterator.hasNext_bitz1p_k$()) {
              var transition_0 = tmp51_iterator.next_20eer_k$();
              if (transition_0 === excludeTransition) {
                continue $l$loop_7;
              }
              if (transition_0._get_target__747061146_ccs42i_k$() === endState) {
                transition_0._set_target__658481318_tvlbpa_k$(bypassStop);
              }
            }
          }
          while (ensureNotNull(ensureNotNull(atn._get_ruleToStartState__1344368709_m8ehj9_k$())[i_13])._get_numberOfTransitions__3931454387_60fcct_k$() > 0) {
            var transition_1 = ensureNotNull(ensureNotNull(atn._get_ruleToStartState__1344368709_m8ehj9_k$())[i_13]).removeTransition_oawrc8_k$(ensureNotNull(ensureNotNull(atn._get_ruleToStartState__1344368709_m8ehj9_k$())[i_13])._get_numberOfTransitions__3931454387_60fcct_k$() - 1 | 0);
            bypassStart.addTransition_ayyciy_k$(transition_1);
          }
          var tmp_68 = ensureNotNull(ensureNotNull(atn._get_ruleToStartState__1344368709_m8ehj9_k$())[i_13]);
          tmp_68.addTransition_ayyciy_k$(EpsilonTransition_init_$Create$(bypassStart, 0, 2, null));
          var tmp_69 = ensureNotNull(endState);
          bypassStop.addTransition_ayyciy_k$(EpsilonTransition_init_$Create$(tmp_69, 0, 2, null));
          var matchState = new BasicState();
          atn.addState_u9plhk_k$(matchState);
          matchState.addTransition_ayyciy_k$(new AtomTransition(bypassStop, ensureNotNull(atn._get_ruleToTokenType__56522645_xnh5h_k$())[i_13]));
          bypassStart.addTransition_ayyciy_k$(EpsilonTransition_init_$Create$(matchState, 0, 2, null));
        }
         while (inductionVariable_13 <= last_6);
      if (this.deserializationOptions_1._get_isVerifyATN__2791844665_oux4uf_k$()) {
        this.verifyATN_peuhuw_k$(atn);
      }
    }
    return atn;
  };
  ATNDeserializer.prototype.markPrecedenceDecisions_rxq2xy_k$ = function (atn) {
    var tmp0_iterator = atn._get_states__388198729_6f4g21_k$().iterator_jk1svi_k$();
    $l$loop: while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var state = tmp0_iterator.next_20eer_k$();
      if (!(state instanceof StarLoopEntryState)) {
        continue $l$loop;
      } else {
      }
      if (ensureNotNull(ensureNotNull(atn._get_ruleToStartState__1344368709_m8ehj9_k$())[state._get_ruleIndex__1923824091_vte863_k$()])._get_isLeftRecursiveRule__2260623540_xn71os_k$()) {
        var maybeLoopEndState = state.transition_bdhd2s_k$(state._get_numberOfTransitions__3931454387_60fcct_k$() - 1 | 0)._get_target__747061146_ccs42i_k$();
        if (maybeLoopEndState instanceof LoopEndState) {
          var tmp;
          if (maybeLoopEndState._get_epsilonOnlyTransitions__1601655907_qhl1lv_k$()) {
            var tmp_0 = maybeLoopEndState.transition_bdhd2s_k$(0)._get_target__747061146_ccs42i_k$();
            tmp = tmp_0 instanceof RuleStopState;
          } else {
            tmp = false;
          }
          if (tmp) {
            (state instanceof StarLoopEntryState ? state : THROW_CCE())._set_isPrecedenceDecision__783436679_34y0ea_k$(true);
          } else {
          }
        } else {
        }
      }
    }
  };
  ATNDeserializer.prototype.verifyATN_peuhuw_k$ = function (atn) {
    var tmp0_iterator = atn._get_states__388198729_6f4g21_k$().iterator_jk1svi_k$();
    $l$loop: while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var state = tmp0_iterator.next_20eer_k$();
      if (state == null) {
        continue $l$loop;
      }
      var tmp = ensureNotNull(state).onlyHasEpsilonTransitions_stt9um_k$() ? true : ensureNotNull(state)._get_numberOfTransitions__3931454387_60fcct_k$() <= 1;
      this.checkCondition$default_n4ct1h_k$(tmp, null, 2, null);
      if (state instanceof PlusBlockStartState) {
        var tmp_0 = !((state instanceof PlusBlockStartState ? state : THROW_CCE())._get_loopBackState__1394904043_n2hmuj_k$() == null);
        this.checkCondition$default_n4ct1h_k$(tmp_0, null, 2, null);
      } else {
      }
      if (state instanceof StarLoopEntryState) {
        var starLoopEntryState = state instanceof StarLoopEntryState ? state : THROW_CCE();
        var tmp_1 = !(ensureNotNull(starLoopEntryState)._get_loopBackState__1394904043_n2hmuj_k$() == null);
        this.checkCondition$default_n4ct1h_k$(tmp_1, null, 2, null);
        var tmp_2 = ensureNotNull(starLoopEntryState)._get_numberOfTransitions__3931454387_60fcct_k$() === 2;
        this.checkCondition$default_n4ct1h_k$(tmp_2, null, 2, null);
        var tmp_3 = ensureNotNull(starLoopEntryState).transition_bdhd2s_k$(0)._get_target__747061146_ccs42i_k$();
        if (tmp_3 instanceof StarBlockStartState) {
          var tmp_4 = ensureNotNull(starLoopEntryState).transition_bdhd2s_k$(1)._get_target__747061146_ccs42i_k$();
          var tmp_5 = tmp_4 instanceof LoopEndState;
          this.checkCondition$default_n4ct1h_k$(tmp_5, null, 2, null);
          var tmp_6 = !ensureNotNull(starLoopEntryState)._get_nonGreedy__170562084_2tjqjo_k$();
          this.checkCondition$default_n4ct1h_k$(tmp_6, null, 2, null);
        } else {
          var tmp_7 = ensureNotNull(starLoopEntryState).transition_bdhd2s_k$(0)._get_target__747061146_ccs42i_k$();
          if (tmp_7 instanceof LoopEndState) {
            var tmp_8 = ensureNotNull(starLoopEntryState).transition_bdhd2s_k$(1)._get_target__747061146_ccs42i_k$();
            var tmp_9 = tmp_8 instanceof StarBlockStartState;
            this.checkCondition$default_n4ct1h_k$(tmp_9, null, 2, null);
            var tmp_10 = ensureNotNull(starLoopEntryState)._get_nonGreedy__170562084_2tjqjo_k$();
            this.checkCondition$default_n4ct1h_k$(tmp_10, null, 2, null);
          } else {
            {
              throw IllegalStateException_init_$Create$_0();
            }
          }
        }
      } else {
      }
      if (state instanceof StarLoopbackState) {
        var tmp_11 = ensureNotNull(state)._get_numberOfTransitions__3931454387_60fcct_k$() === 1;
        this.checkCondition$default_n4ct1h_k$(tmp_11, null, 2, null);
        var tmp_12 = ensureNotNull(state).transition_bdhd2s_k$(0)._get_target__747061146_ccs42i_k$();
        var tmp_13 = tmp_12 instanceof StarLoopEntryState;
        this.checkCondition$default_n4ct1h_k$(tmp_13, null, 2, null);
      } else {
      }
      if (state instanceof LoopEndState) {
        var tmp_14 = !((state instanceof LoopEndState ? state : THROW_CCE())._get_loopBackState__1394904043_n2hmuj_k$() == null);
        this.checkCondition$default_n4ct1h_k$(tmp_14, null, 2, null);
      } else {
      }
      if (state instanceof RuleStartState) {
        var tmp_15 = !((state instanceof RuleStartState ? state : THROW_CCE())._get_stopState__1637624450_r2zz42_k$() == null);
        this.checkCondition$default_n4ct1h_k$(tmp_15, null, 2, null);
      } else {
      }
      if (state instanceof BlockStartState) {
        var tmp_16 = !((state instanceof BlockStartState ? state : THROW_CCE())._get_endState__3090543125_jx2zmz_k$() == null);
        this.checkCondition$default_n4ct1h_k$(tmp_16, null, 2, null);
      } else {
      }
      if (state instanceof BlockEndState) {
        var tmp_17 = !((state instanceof BlockEndState ? state : THROW_CCE())._get_startState__542014748_8yp998_k$() == null);
        this.checkCondition$default_n4ct1h_k$(tmp_17, null, 2, null);
      } else {
      }
      if (state instanceof DecisionState) {
        var decisionState = state instanceof DecisionState ? state : THROW_CCE();
        var tmp_18 = ensureNotNull(decisionState)._get_numberOfTransitions__3931454387_60fcct_k$() <= 1 ? true : ensureNotNull(decisionState)._get_decision__1839254383_uf1lrj_k$() >= 0;
        this.checkCondition$default_n4ct1h_k$(tmp_18, null, 2, null);
      } else {
        {
          var tmp_19;
          if (ensureNotNull(state)._get_numberOfTransitions__3931454387_60fcct_k$() <= 1) {
            tmp_19 = true;
          } else {
            tmp_19 = state instanceof RuleStopState;
          }
          var tmp_20 = tmp_19;
          this.checkCondition$default_n4ct1h_k$(tmp_20, null, 2, null);
        }
      }
    }
  };
  ATNDeserializer.prototype.checkCondition_t9c5o8_k$ = function (condition, message) {
    if (!condition) {
      throw IllegalStateException_init_$Create$(ensureNotNull(message));
    }
  };
  ATNDeserializer.prototype.checkCondition$default_n4ct1h_k$ = function (condition, message, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      message = null;
    return this.checkCondition_t9c5o8_k$(condition, message);
  };
  ATNDeserializer.prototype.edgeFactory_oubfi8_k$ = function (atn, type, src, trg, arg1, arg2, arg3, sets) {
    var target = ensureNotNull(atn._get_states__388198729_6f4g21_k$().get_fkrdnv_k$(trg));
    var tmp0_subject = type;
    if (tmp0_subject === Companion_getInstance_27()._get_EPSILON__2552669447_stbhmh_k$()) {
      return EpsilonTransition_init_$Create$(target, 0, 2, null);
    } else if (tmp0_subject === Companion_getInstance_27()._get_RANGE__2622281300_rnvgrw_k$()) {
      var tmp;
      if (!(arg3 === 0)) {
        tmp = new RangeTransition(target, Companion_getInstance_6()._get_EOF__855984949_e5mq7p_k$(), arg2);
      } else {
        tmp = new RangeTransition(target, arg1, arg2);
      }
      return tmp;
    } else if (tmp0_subject === Companion_getInstance_27()._get_RULE__777920207_cv5j2n_k$()) {
      var tmp_0 = atn._get_states__388198729_6f4g21_k$().get_fkrdnv_k$(arg1);
      return new RuleTransition(tmp_0 instanceof RuleStartState ? tmp_0 : THROW_CCE(), arg2, arg3, target);
    } else if (tmp0_subject === Companion_getInstance_27()._get_PREDICATE__337996698_5l8fx6_k$()) {
      return new PredicateTransition(target, arg1, arg2, !(arg3 === 0));
    } else if (tmp0_subject === Companion_getInstance_27()._get_PRECEDENCE__922248129_f92z7l_k$())
      return new PrecedencePredicateTransition(target, arg1);
    else if (tmp0_subject === Companion_getInstance_27()._get_ATOM__762193690_clsgey_k$()) {
      var tmp_1;
      if (!(arg3 === 0)) {
        tmp_1 = new AtomTransition(target, Companion_getInstance_6()._get_EOF__855984949_e5mq7p_k$());
      } else {
        tmp_1 = new AtomTransition(target, arg1);
      }
      return tmp_1;
    } else if (tmp0_subject === Companion_getInstance_27()._get_ACTION__1841517461_uge3yt_k$()) {
      return new ActionTransition(target, arg1, arg2, !(arg3 === 0));
    } else if (tmp0_subject === Companion_getInstance_27()._get_SET__856392847_e5vgy7_k$())
      return new SetTransition(target, sets.get_fkrdnv_k$(arg1));
    else if (tmp0_subject === Companion_getInstance_27()._get_NOT_SET__219735323_3mtouz_k$())
      return new NotSetTransition(target, sets.get_fkrdnv_k$(arg1));
    else if (tmp0_subject === Companion_getInstance_27()._get_WILDCARD__2264700209_xkro3z_k$())
      return new WildcardTransition(target);
    throw IllegalArgumentException_init_$Create$('The specified transition type is not valid.');
  };
  ATNDeserializer.prototype.stateFactory_ioxy1_k$ = function (type, ruleIndex) {
    var s;
    var tmp0_subject = type;
    if (tmp0_subject === Companion_getInstance_14()._get_INVALID_TYPE__2936648937_mgph5j_k$())
      return null;
    else if (tmp0_subject === Companion_getInstance_14()._get_BASIC__2164365699_z8i6pp_k$())
      s = new BasicState();
    else if (tmp0_subject === Companion_getInstance_14()._get_RULE_START__2500323116_tohgb8_k$())
      s = new RuleStartState();
    else if (tmp0_subject === Companion_getInstance_14()._get_BLOCK_START__1705394593_s7ciw1_k$())
      s = new BasicBlockStartState();
    else if (tmp0_subject === Companion_getInstance_14()._get_PLUS_BLOCK_START__2103966048_ysnalc_k$())
      s = new PlusBlockStartState();
    else if (tmp0_subject === Companion_getInstance_14()._get_STAR_BLOCK_START__2498915240_tpbmmw_k$())
      s = new StarBlockStartState();
    else if (tmp0_subject === Companion_getInstance_14()._get_TOKEN_START__1037605557_h5rhkl_k$())
      s = new TokensStartState();
    else if (tmp0_subject === Companion_getInstance_14()._get_RULE_STOP__3959994252_5jfmus_k$())
      s = new RuleStopState();
    else if (tmp0_subject === Companion_getInstance_14()._get_BLOCK_END__492971400_85i360_k$())
      s = new BlockEndState();
    else if (tmp0_subject === Companion_getInstance_14()._get_STAR_LOOP_BACK__3553765558_c9aix6_k$())
      s = new StarLoopbackState();
    else if (tmp0_subject === Companion_getInstance_14()._get_STAR_LOOP_ENTRY__2890957197_n7wt4j_k$())
      s = new StarLoopEntryState();
    else if (tmp0_subject === Companion_getInstance_14()._get_PLUS_LOOP_BACK__1631569006_qze6pa_k$())
      s = new PlusLoopbackState();
    else if (tmp0_subject === Companion_getInstance_14()._get_LOOP_END__1275857707_l3m23v_k$())
      s = new LoopEndState();
    else {
      var message = 'The specified state type ' + type + ' is not valid.';
      throw IllegalArgumentException_init_$Create$(message);
    }
    s._set_ruleIndex__152087887_m9etbz_k$(ruleIndex);
    return s;
  };
  ATNDeserializer.prototype.lexerActionFactory_i868jg_k$ = function (type, data1, data2) {
    var tmp0_subject = type;
    var tmp0 = tmp0_subject._get_ordinal__3363892928_fec5kw_k$();
    switch (tmp0) {
      case 0:
        return new LexerChannelAction(data1);
      case 1:
        return new LexerCustomAction(data1, data2);
      case 2:
        return new LexerModeAction(data1);
      case 3:
        return Companion_getInstance_18()._get_INSTANCE__2559446_1iuvq_k$();
      case 4:
        return Companion_getInstance_19()._get_INSTANCE__2559446_1iuvq_k$();
      case 5:
        return new LexerPushModeAction(data1);
      case 6:
        return Companion_getInstance_20()._get_INSTANCE__2559446_1iuvq_k$();
      case 7:
        return new LexerTypeAction(data1);
      default:
        var message = 'The specified lexer action type ' + type + ' is not valid.';
        throw IllegalArgumentException_init_$Create$(message);
    }
  };
  ATNDeserializer.prototype.deserializeIntegers_579lc9_k$ = function (serializedIntegersATN) {
    var tmp$ret$2;
    $l$block_1: {
      var tmp$ret$1;
      $l$block_0: {
        var tmp0_mapTo_0_1 = ArrayList_init_$Create$(serializedIntegersATN.length);
        var indexedObject = serializedIntegersATN;
        var inductionVariable = 0;
        var last = indexedObject.length;
        while (inductionVariable < last) {
          var item_2_3 = indexedObject[inductionVariable];
          inductionVariable = inductionVariable + 1 | 0;
          var tmp$ret$0;
          $l$block: {
            tmp$ret$0 = numberToChar(item_2_3);
            break $l$block;
          }
          tmp0_mapTo_0_1.add_1j60pz_k$(new Char(tmp$ret$0));
          Unit_getInstance();
        }
        tmp$ret$1 = tmp0_mapTo_0_1;
        break $l$block_0;
      }
      tmp$ret$2 = tmp$ret$1;
      break $l$block_1;
    }
    var chars = toCharArray(tmp$ret$2);
    return this.deserialize_c68pee_k$(chars);
  };
  ATNDeserializer.$metadata$ = {
    simpleName: 'ATNDeserializer',
    kind: 'class',
    interfaces: []
  };
  function Companion_12() {
    Companion_instance_12 = this;
    this.SERIALIZED_VERSION_1 = Companion_getInstance_12()._get_SERIALIZED_VERSION__2510710318_tiathu_k$();
    this.SERIALIZED_UUID_1 = Companion_getInstance_12()._get_SERIALIZED_UUID__3855021371_79xkg5_k$();
    var tmp = this;
    tmp.ERROR_1 = DFAState_init_$Create$_1(ATNConfigSet_init_$Create$(false, 1, null));
    this.ERROR_1._set_stateNumber__2290445323_a7hzut_k$(IntCompanionObject_getInstance()._get_MAX_VALUE__3201573499_i2z81x_k$());
  }
  Companion_12.prototype._get_SERIALIZED_VERSION__2510710318_tiathu_k$ = function () {
    return this.SERIALIZED_VERSION_1;
  };
  Companion_12.prototype._get_SERIALIZED_UUID__3855021371_79xkg5_k$ = function () {
    return this.SERIALIZED_UUID_1;
  };
  Companion_12.prototype._get_ERROR__2265929449_xk1bmf_k$ = function () {
    return this.ERROR_1;
  };
  Companion_12.prototype.deserialize_c68pee_k$ = function (data) {
    {
      throw NotImplementedError_init_$Create$(null, 1, null);
    }
  };
  Companion_12.prototype.checkCondition_ut4cbu_k$ = function (condition) {
    {
      throw NotImplementedError_init_$Create$(null, 1, null);
    }
  };
  Companion_12.prototype.checkCondition_aew9at_k$ = function (condition, message) {
    {
      throw NotImplementedError_init_$Create$(null, 1, null);
    }
  };
  Companion_12.prototype.toInt_uwmgaw_k$ = function (c) {
    {
      throw NotImplementedError_init_$Create$(null, 1, null);
    }
  };
  Companion_12.prototype.toInt32_gizw8v_k$ = function (data, offset) {
    {
      throw NotImplementedError_init_$Create$(null, 1, null);
    }
  };
  Companion_12.prototype.toLong_k5ew59_k$ = function (data, offset) {
    {
      throw NotImplementedError_init_$Create$(null, 1, null);
    }
  };
  Companion_12.prototype.toUUID_pxfcm6_k$ = function (data, offset) {
    {
      throw NotImplementedError_init_$Create$(null, 1, null);
    }
  };
  Companion_12.prototype.edgeFactory_oubfi8_k$ = function (atn, type, src, trg, arg1, arg2, arg3, sets) {
    {
      throw NotImplementedError_init_$Create$(null, 1, null);
    }
  };
  Companion_12.prototype.stateFactory_ioxy1_k$ = function (type, ruleIndex) {
    {
      throw NotImplementedError_init_$Create$(null, 1, null);
    }
  };
  Companion_12.$metadata$ = {
    simpleName: 'Companion',
    kind: 'object',
    interfaces: []
  };
  var Companion_instance_12;
  function Companion_getInstance_13() {
    if (Companion_instance_12 == null)
      new Companion_12();
    return Companion_instance_12;
  }
  function ATNSimulator(atn, sharedContextCache) {
    Companion_getInstance_13();
    this.atn_1 = atn;
    this.sharedContextCache_1 = sharedContextCache;
  }
  ATNSimulator.prototype._get_atn__856855894_e65e8m_k$ = function () {
    return this.atn_1;
  };
  ATNSimulator.prototype._get_sharedContextCache__1757505139_t2dfn7_k$ = function () {
    return this.sharedContextCache_1;
  };
  ATNSimulator.prototype.clearDFA_ekw7r5_k$ = function () {
    throw UnsupportedOperationException_init_$Create$('This ATN simulator does not support clearing the DFA.');
  };
  ATNSimulator.prototype.getCachedContext_c4lptz_k$ = function (context) {
    if (this.sharedContextCache_1 == null)
      return context;
    var tmp$ret$0;
    {
      var tmp0_synchronized_0 = this.sharedContextCache_1;
      var visited_2 = new IdentityHashMap();
      return Companion_getInstance_22().getCachedContext_ymk6pd_k$(context, this.sharedContextCache_1, visited_2);
    }
  };
  ATNSimulator.$metadata$ = {
    simpleName: 'ATNSimulator',
    kind: 'class',
    interfaces: []
  };
  function Companion_13() {
    Companion_instance_13 = this;
    this.INITIAL_NUM_TRANSITIONS_1 = 4;
    this.INVALID_TYPE_1 = 0;
    this.BASIC_1 = 1;
    this.RULE_START_1 = 2;
    this.BLOCK_START_1 = 3;
    this.PLUS_BLOCK_START_1 = 4;
    this.STAR_BLOCK_START_1 = 5;
    this.TOKEN_START_1 = 6;
    this.RULE_STOP_1 = 7;
    this.BLOCK_END_1 = 8;
    this.STAR_LOOP_BACK_1 = 9;
    this.STAR_LOOP_ENTRY_1 = 10;
    this.PLUS_LOOP_BACK_1 = 11;
    this.LOOP_END_1 = 12;
    this.serializationNames_1 = listOf(['INVALID', 'BASIC', 'RULE_START', 'BLOCK_START', 'PLUS_BLOCK_START', 'STAR_BLOCK_START', 'TOKEN_START', 'RULE_STOP', 'BLOCK_END', 'STAR_LOOP_BACK', 'STAR_LOOP_ENTRY', 'PLUS_LOOP_BACK', 'LOOP_END']);
    this.INVALID_STATE_NUMBER_1 = -1;
  }
  Companion_13.prototype._get_INITIAL_NUM_TRANSITIONS__2369671975_vu9rdl_k$ = function () {
    return this.INITIAL_NUM_TRANSITIONS_1;
  };
  Companion_13.prototype._get_INVALID_TYPE__2936648937_mgph5j_k$ = function () {
    return this.INVALID_TYPE_1;
  };
  Companion_13.prototype._get_BASIC__2164365699_z8i6pp_k$ = function () {
    return this.BASIC_1;
  };
  Companion_13.prototype._get_RULE_START__2500323116_tohgb8_k$ = function () {
    return this.RULE_START_1;
  };
  Companion_13.prototype._get_BLOCK_START__1705394593_s7ciw1_k$ = function () {
    return this.BLOCK_START_1;
  };
  Companion_13.prototype._get_PLUS_BLOCK_START__2103966048_ysnalc_k$ = function () {
    return this.PLUS_BLOCK_START_1;
  };
  Companion_13.prototype._get_STAR_BLOCK_START__2498915240_tpbmmw_k$ = function () {
    return this.STAR_BLOCK_START_1;
  };
  Companion_13.prototype._get_TOKEN_START__1037605557_h5rhkl_k$ = function () {
    return this.TOKEN_START_1;
  };
  Companion_13.prototype._get_RULE_STOP__3959994252_5jfmus_k$ = function () {
    return this.RULE_STOP_1;
  };
  Companion_13.prototype._get_BLOCK_END__492971400_85i360_k$ = function () {
    return this.BLOCK_END_1;
  };
  Companion_13.prototype._get_STAR_LOOP_BACK__3553765558_c9aix6_k$ = function () {
    return this.STAR_LOOP_BACK_1;
  };
  Companion_13.prototype._get_STAR_LOOP_ENTRY__2890957197_n7wt4j_k$ = function () {
    return this.STAR_LOOP_ENTRY_1;
  };
  Companion_13.prototype._get_PLUS_LOOP_BACK__1631569006_qze6pa_k$ = function () {
    return this.PLUS_LOOP_BACK_1;
  };
  Companion_13.prototype._get_LOOP_END__1275857707_l3m23v_k$ = function () {
    return this.LOOP_END_1;
  };
  Companion_13.prototype._get_serializationNames__3686197587_a2g1pp_k$ = function () {
    return this.serializationNames_1;
  };
  Companion_13.prototype._get_INVALID_STATE_NUMBER__1984392172_wtgess_k$ = function () {
    return this.INVALID_STATE_NUMBER_1;
  };
  Companion_13.$metadata$ = {
    simpleName: 'Companion',
    kind: 'object',
    interfaces: []
  };
  var Companion_instance_13;
  function Companion_getInstance_14() {
    if (Companion_instance_13 == null)
      new Companion_13();
    return Companion_instance_13;
  }
  function ATNState() {
    Companion_getInstance_14();
    this.atn_1 = null;
    var tmp = this;
    Companion_getInstance_14();
    tmp.stateNumber_1 = -1;
    this.ruleIndex_1 = 0;
    this.epsilonOnlyTransitions_1 = false;
    this.transitions_1 = ArrayList_init_$Create$(Companion_getInstance_14().INITIAL_NUM_TRANSITIONS_1);
    this.nextTokenWithinRule_1 = null;
  }
  ATNState.prototype._set_atn__295743434_cpcqnn_k$ = function (_set____804775014) {
    this.atn_1 = _set____804775014;
  };
  ATNState.prototype._get_atn__856855894_e65e8m_k$ = function () {
    return this.atn_1;
  };
  ATNState.prototype._set_stateNumber__2290445323_a7hzut_k$ = function (_set____804775014) {
    this.stateNumber_1 = _set____804775014;
  };
  ATNState.prototype._get_stateNumber__4121888151_2v1oq1_k$ = function () {
    return this.stateNumber_1;
  };
  ATNState.prototype._set_ruleIndex__152087887_m9etbz_k$ = function (_set____804775014) {
    this.ruleIndex_1 = _set____804775014;
  };
  ATNState.prototype._get_ruleIndex__1923824091_vte863_k$ = function () {
    return this.ruleIndex_1;
  };
  ATNState.prototype._set_epsilonOnlyTransitions__256122223_b8eroa_k$ = function (_set____804775014) {
    this.epsilonOnlyTransitions_1 = _set____804775014;
  };
  ATNState.prototype._get_epsilonOnlyTransitions__1601655907_qhl1lv_k$ = function () {
    return this.epsilonOnlyTransitions_1;
  };
  ATNState.prototype._get_transitions__2595107731_s41w19_k$ = function () {
    return this.transitions_1;
  };
  ATNState.prototype._set_nextTokenWithinRule__1763432760_ffdj0e_k$ = function (_set____804775014) {
    this.nextTokenWithinRule_1 = _set____804775014;
  };
  ATNState.prototype._get_nextTokenWithinRule__2567513796_skhbng_k$ = function () {
    return this.nextTokenWithinRule_1;
  };
  ATNState.prototype._get_isNonGreedyExitState__3223902395_hpomyt_k$ = function () {
    return false;
  };
  ATNState.prototype._get_numberOfTransitions__3931454387_60fcct_k$ = function () {
    return this.transitions_1._get_size__809037418_ddoh9m_k$();
  };
  ATNState.prototype.hashCode = function () {
    return this.stateNumber_1;
  };
  ATNState.prototype.equals = function (other) {
    var tmp;
    if (other instanceof ATNState) {
      tmp = this.stateNumber_1 === other.stateNumber_1;
    } else {
      {
        tmp = false;
      }
    }
    return tmp;
  };
  ATNState.prototype.toString = function () {
    return this.stateNumber_1.toString();
  };
  ATNState.prototype.getTransitions_sv5qiw_k$ = function () {
    var tmp$ret$0;
    $l$block: {
      var tmp0_toTypedArray_0 = this.transitions_1;
      tmp$ret$0 = copyToArray(tmp0_toTypedArray_0);
      break $l$block;
    }
    return tmp$ret$0;
  };
  ATNState.prototype.addTransition_ayyciy_k$ = function (e) {
    this.addTransition_a70fgf_k$(this.transitions_1._get_size__809037418_ddoh9m_k$(), e);
  };
  ATNState.prototype.addTransition_a70fgf_k$ = function (index, e) {
    if (this.transitions_1.isEmpty_y1axqb_k$()) {
      this.epsilonOnlyTransitions_1 = e._get_isEpsilon__1837953905_ue9qb5_k$();
    } else if (!(this.epsilonOnlyTransitions_1 === e._get_isEpsilon__1837953905_ue9qb5_k$())) {
      errMessage('ATN state ' + this.stateNumber_1 + ' has both epsilon and non-epsilon transitions.\n');
      this.epsilonOnlyTransitions_1 = false;
    }
    var alreadyPresent = false;
    var tmp0_iterator = this.transitions_1.iterator_jk1svi_k$();
    $l$loop_0: while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var t = tmp0_iterator.next_20eer_k$();
      if (ensureNotNull(t._get_target__747061146_ccs42i_k$()).stateNumber_1 === ensureNotNull(e._get_target__747061146_ccs42i_k$()).stateNumber_1) {
        if ((!(t.accessLabel_hdfxg0_k$() == null) ? !(e.accessLabel_hdfxg0_k$() == null) : false) ? ensureNotNull(t.accessLabel_hdfxg0_k$()).equals(e.accessLabel_hdfxg0_k$()) : false) {
          alreadyPresent = true;
          break $l$loop_0;
        } else if (t._get_isEpsilon__1837953905_ue9qb5_k$() ? e._get_isEpsilon__1837953905_ue9qb5_k$() : false) {
          alreadyPresent = true;
          break $l$loop_0;
        }
      }
    }
    if (!alreadyPresent) {
      this.transitions_1.add_ydlf05_k$(index, e);
    }
  };
  ATNState.prototype.transition_bdhd2s_k$ = function (i) {
    return this.transitions_1.get_fkrdnv_k$(i);
  };
  ATNState.prototype.setTransition_cgj04e_k$ = function (i, e) {
    this.transitions_1.set_meu351_k$(i, e);
    Unit_getInstance();
  };
  ATNState.prototype.removeTransition_oawrc8_k$ = function (index) {
    return this.transitions_1.removeAt_qvpkxi_k$(index);
  };
  ATNState.prototype.onlyHasEpsilonTransitions_stt9um_k$ = function () {
    return this.epsilonOnlyTransitions_1;
  };
  ATNState.$metadata$ = {
    simpleName: 'ATNState',
    kind: 'class',
    interfaces: []
  };
  var ATNType_LEXER_instance;
  var ATNType_PARSER_instance;
  function values_0() {
    return [ATNType_LEXER_getInstance(), ATNType_PARSER_getInstance()];
  }
  function valueOf_0(value) {
    switch (value) {
      case 'LEXER':
        return ATNType_LEXER_getInstance();
      case 'PARSER':
        return ATNType_PARSER_getInstance();
      default:
        ATNType_initEntries();
        THROW_ISE();
        break;
    }
  }
  var ATNType_entriesInitialized;
  function ATNType_initEntries() {
    if (ATNType_entriesInitialized)
      return Unit_getInstance();
    ATNType_entriesInitialized = true;
    ATNType_LEXER_instance = new ATNType('LEXER', 0);
    ATNType_PARSER_instance = new ATNType('PARSER', 1);
  }
  function ATNType(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  ATNType.$metadata$ = {
    simpleName: 'ATNType',
    kind: 'class',
    interfaces: []
  };
  function ATNType_LEXER_getInstance() {
    ATNType_initEntries();
    return ATNType_LEXER_instance;
  }
  function ATNType_PARSER_getInstance() {
    ATNType_initEntries();
    return ATNType_PARSER_instance;
  }
  function AbstractPredicateTransition(target) {
    Transition.call(this, target);
  }
  AbstractPredicateTransition.$metadata$ = {
    simpleName: 'AbstractPredicateTransition',
    kind: 'class',
    interfaces: []
  };
  function ActionTransition_init_$Init$(target, ruleIndex, actionIndex, isCtxDependent, $mask0, $marker, $this) {
    if (!(($mask0 & 4) === 0))
      actionIndex = -1;
    if (!(($mask0 & 8) === 0))
      isCtxDependent = false;
    ActionTransition.call($this, target, ruleIndex, actionIndex, isCtxDependent);
    return $this;
  }
  function ActionTransition_init_$Create$(target, ruleIndex, actionIndex, isCtxDependent, $mask0, $marker) {
    return ActionTransition_init_$Init$(target, ruleIndex, actionIndex, isCtxDependent, $mask0, $marker, Object.create(ActionTransition.prototype));
  }
  function ActionTransition(target, ruleIndex, actionIndex, isCtxDependent) {
    Transition.call(this, target);
    this.ruleIndex_1 = ruleIndex;
    this.actionIndex_1 = actionIndex;
    this.isCtxDependent_1 = isCtxDependent;
  }
  ActionTransition.prototype._get_ruleIndex__1923824091_vte863_k$ = function () {
    return this.ruleIndex_1;
  };
  ActionTransition.prototype._get_actionIndex__2870023381_nkdhrf_k$ = function () {
    return this.actionIndex_1;
  };
  ActionTransition.prototype._get_isCtxDependent__1166321513_jaebft_k$ = function () {
    return this.isCtxDependent_1;
  };
  ActionTransition.prototype._get_serializationType__1649189191_r9vuiv_k$ = function () {
    return Companion_getInstance_27()._get_ACTION__1841517461_uge3yt_k$();
  };
  ActionTransition.prototype._get_isEpsilon__1837953905_ue9qb5_k$ = function () {
    return true;
  };
  ActionTransition.prototype.matches_4cugi_k$ = function (symbol, minVocabSymbol, maxVocabSymbol) {
    return false;
  };
  ActionTransition.prototype.toString = function () {
    return 'action_' + this.ruleIndex_1 + ':' + this.actionIndex_1;
  };
  ActionTransition.$metadata$ = {
    simpleName: 'ActionTransition',
    kind: 'class',
    interfaces: []
  };
  function AmbiguityInfo(decision, configs, ambigAlts, input, startIndex, stopIndex, fullCtx) {
    DecisionEventInfo.call(this, decision, configs, input, startIndex, stopIndex, fullCtx);
    this.ambigAlts_1 = ambigAlts;
  }
  AmbiguityInfo.prototype._set_ambigAlts__596965927_e999dn_k$ = function (_set____804775014) {
    this.ambigAlts_1 = _set____804775014;
  };
  AmbiguityInfo.prototype._get_ambigAlts__2368702131_vuujpp_k$ = function () {
    return this.ambigAlts_1;
  };
  AmbiguityInfo.$metadata$ = {
    simpleName: 'AmbiguityInfo',
    kind: 'class',
    interfaces: []
  };
  function ArrayPredictionContext_init_$Init$(a, $this) {
    var tmp$ret$2;
    $l$block_1: {
      var tmp0_arrayOf_0 = [a._get_parent__1491962785_oo9xup_k$()];
      var tmp$ret$1;
      $l$block_0: {
        var tmp$ret$0;
        $l$block: {
          tmp$ret$0 = tmp0_arrayOf_0;
          break $l$block;
        }
        tmp$ret$1 = tmp$ret$0;
        break $l$block_0;
      }
      tmp$ret$2 = tmp$ret$1;
      break $l$block_1;
    }
    var tmp = tmp$ret$2;
    var tmp$ret$3;
    $l$block_2: {
      var tmp1_intArrayOf_0 = new Int32Array([a._get_returnState__2481130608_tzwtcg_k$()]);
      tmp$ret$3 = tmp1_intArrayOf_0;
      break $l$block_2;
    }
    ArrayPredictionContext.call($this, tmp, tmp$ret$3);
    return $this;
  }
  function ArrayPredictionContext_init_$Create$(a) {
    return ArrayPredictionContext_init_$Init$(a, Object.create(ArrayPredictionContext.prototype));
  }
  function ArrayPredictionContext(parents, returnStates) {
    PredictionContext.call(this, Companion_getInstance_22().calculateHashCode_65iawq_k$(ensureNotNull(parents), ensureNotNull(returnStates)));
    this.parents_1 = parents;
    this.returnStates_1 = returnStates;
  }
  ArrayPredictionContext.prototype._get_parents__3301175080_gfoezc_k$ = function () {
    return this.parents_1;
  };
  ArrayPredictionContext.prototype._get_returnStates__3900606521_6isipz_k$ = function () {
    return this.returnStates_1;
  };
  ArrayPredictionContext.prototype.size_23och_k$ = function () {
    return ensureNotNull(this.returnStates_1).length;
  };
  ArrayPredictionContext.prototype.getParent_4aoyvz_k$ = function (index) {
    return ensureNotNull(ensureNotNull(this.parents_1)[index]);
  };
  ArrayPredictionContext.prototype.getReturnState_indz3e_k$ = function (index) {
    return ensureNotNull(this.returnStates_1)[index];
  };
  ArrayPredictionContext.prototype.equals = function (other) {
    if (this === other) {
      return true;
    } else {
      if (!(other instanceof ArrayPredictionContext)) {
        return false;
      } else {
      }
    }
    if (!(this.hashCode() === hashCode(other))) {
      return false;
    }
    return Arrays_getInstance().equals_dets0x_k$(this.returnStates_1, other.returnStates_1) ? Arrays_getInstance().equals_qcb8fz_k$(this.parents_1, other.parents_1) : false;
  };
  ArrayPredictionContext.$metadata$ = {
    simpleName: 'ArrayPredictionContext',
    kind: 'class',
    interfaces: []
  };
  function AtomTransition(target, label) {
    Transition.call(this, target);
    this.label_1 = label;
  }
  AtomTransition.prototype._get_label__3396817757_euqgmb_k$ = function () {
    return this.label_1;
  };
  AtomTransition.prototype._get_serializationType__1649189191_r9vuiv_k$ = function () {
    return Companion_getInstance_27()._get_ATOM__762193690_clsgey_k$();
  };
  AtomTransition.prototype.accessLabel_hdfxg0_k$ = function () {
    return Companion_getInstance_32().of_h0dvii_k$(this.label_1);
  };
  AtomTransition.prototype.matches_4cugi_k$ = function (symbol, minVocabSymbol, maxVocabSymbol) {
    return this.label_1 === symbol;
  };
  AtomTransition.prototype.toString = function () {
    return this.label_1.toString();
  };
  AtomTransition.$metadata$ = {
    simpleName: 'AtomTransition',
    kind: 'class',
    interfaces: []
  };
  function BasicBlockStartState() {
    BlockStartState.call(this);
  }
  BasicBlockStartState.prototype._get_stateType__2749614150_pk2a4a_k$ = function () {
    return Companion_getInstance_14()._get_BLOCK_START__1705394593_s7ciw1_k$();
  };
  BasicBlockStartState.$metadata$ = {
    simpleName: 'BasicBlockStartState',
    kind: 'class',
    interfaces: []
  };
  function BasicState() {
    ATNState.call(this);
  }
  BasicState.prototype._get_stateType__2749614150_pk2a4a_k$ = function () {
    return Companion_getInstance_14()._get_BASIC__2164365699_z8i6pp_k$();
  };
  BasicState.$metadata$ = {
    simpleName: 'BasicState',
    kind: 'class',
    interfaces: []
  };
  function BlockEndState() {
    ATNState.call(this);
    this.startState_1 = null;
  }
  BlockEndState.prototype._set_startState__1452767272_z9ejdi_k$ = function (_set____804775014) {
    this.startState_1 = _set____804775014;
  };
  BlockEndState.prototype._get_startState__542014748_8yp998_k$ = function () {
    return this.startState_1;
  };
  BlockEndState.prototype._get_stateType__2749614150_pk2a4a_k$ = function () {
    return Companion_getInstance_14()._get_BLOCK_END__492971400_85i360_k$();
  };
  BlockEndState.$metadata$ = {
    simpleName: 'BlockEndState',
    kind: 'class',
    interfaces: []
  };
  function BlockStartState() {
    DecisionState.call(this);
    this.endState_1 = null;
  }
  BlockStartState.prototype._set_endState__3864674337_phlkv8_k$ = function (_set____804775014) {
    this.endState_1 = _set____804775014;
  };
  BlockStartState.prototype._get_endState__3090543125_jx2zmz_k$ = function () {
    return this.endState_1;
  };
  BlockStartState.$metadata$ = {
    simpleName: 'BlockStartState',
    kind: 'class',
    interfaces: []
  };
  function ContextSensitivityInfo(decision, configs, input, startIndex, stopIndex) {
    DecisionEventInfo.call(this, decision, configs, input, startIndex, stopIndex, true);
  }
  ContextSensitivityInfo.$metadata$ = {
    simpleName: 'ContextSensitivityInfo',
    kind: 'class',
    interfaces: []
  };
  function DecisionEventInfo(decision, configs, input, startIndex, stopIndex, fullCtx) {
    this.decision_1 = decision;
    this.configs_1 = configs;
    this.input_1 = input;
    this.startIndex_1 = startIndex;
    this.stopIndex_1 = stopIndex;
    this.fullCtx_1 = fullCtx;
  }
  DecisionEventInfo.prototype._get_decision__1839254383_uf1lrj_k$ = function () {
    return this.decision_1;
  };
  DecisionEventInfo.prototype._get_configs__1545872320_pkdeps_k$ = function () {
    return this.configs_1;
  };
  DecisionEventInfo.prototype._get_input__3323368775_g2gq7t_k$ = function () {
    return this.input_1;
  };
  DecisionEventInfo.prototype._get_startIndex__250257659_44zw1n_k$ = function () {
    return this.startIndex_1;
  };
  DecisionEventInfo.prototype._get_stopIndex__1345867361_m9alwh_k$ = function () {
    return this.stopIndex_1;
  };
  DecisionEventInfo.prototype._get_fullCtx__3456554233_dv63nr_k$ = function () {
    return this.fullCtx_1;
  };
  DecisionEventInfo.$metadata$ = {
    simpleName: 'DecisionEventInfo',
    kind: 'class',
    interfaces: []
  };
  function DecisionInfo(decision) {
    this.decision_1 = decision;
    this.invocations_1 = new Long(0, 0);
    this.timeInPrediction_1 = new Long(0, 0);
    this.SLL_TotalLook_1 = new Long(0, 0);
    this.SLL_MinLook_1 = new Long(0, 0);
    this.SLL_MaxLook_1 = new Long(0, 0);
    this.SLL_MaxLookEvent_1 = null;
    this.LL_TotalLook_1 = new Long(0, 0);
    this.LL_MinLook_1 = new Long(0, 0);
    this.LL_MaxLook_1 = new Long(0, 0);
    this.LL_MaxLookEvent_1 = null;
    this.contextSensitivities_1 = ArrayList_init_$Create$_0();
    this.errors_1 = ArrayList_init_$Create$_0();
    this.ambiguities_1 = ArrayList_init_$Create$_0();
    this.predicateEvals_1 = ArrayList_init_$Create$_0();
    this.SLL_ATNTransitions_1 = new Long(0, 0);
    this.SLL_DFATransitions_1 = new Long(0, 0);
    this.LL_Fallback_1 = new Long(0, 0);
    this.LL_ATNTransitions_1 = new Long(0, 0);
    this.LL_DFATransitions_1 = new Long(0, 0);
  }
  DecisionInfo.prototype._get_decision__1839254383_uf1lrj_k$ = function () {
    return this.decision_1;
  };
  DecisionInfo.prototype._set_invocations__4267033218_nb53xh_k$ = function (_set____804775014) {
    this.invocations_1 = _set____804775014;
  };
  DecisionInfo.prototype._get_invocations__1803508750_ttrg9a_k$ = function () {
    return this.invocations_1;
  };
  DecisionInfo.prototype._set_timeInPrediction__3644826102_dey20h_k$ = function (_set____804775014) {
    this.timeInPrediction_1 = _set____804775014;
  };
  DecisionInfo.prototype._get_timeInPrediction__1108615146_ic1gx6_k$ = function () {
    return this.timeInPrediction_1;
  };
  DecisionInfo.prototype._set_SLL_TotalLook__893947246_12v9af_k$ = function (_set____804775014) {
    this.SLL_TotalLook_1 = _set____804775014;
  };
  DecisionInfo.prototype._get_SLL_TotalLook__4268880890_fj4ee_k$ = function () {
    return this.SLL_TotalLook_1;
  };
  DecisionInfo.prototype._set_SLL_MinLook__3831534560_7si85j_k$ = function (_set____804775014) {
    this.SLL_MinLook_1 = _set____804775014;
  };
  DecisionInfo.prototype._get_SLL_MinLook__1368010092_mmh7cc_k$ = function () {
    return this.SLL_MinLook_1;
  };
  DecisionInfo.prototype._set_SLL_MaxLook__1312763918_4jo02v_k$ = function (_set____804775014) {
    this.SLL_MaxLook_1 = _set____804775014;
  };
  DecisionInfo.prototype._get_SLL_MaxLook__3144206746_j14siu_k$ = function () {
    return this.SLL_MaxLook_1;
  };
  DecisionInfo.prototype._set_SLL_MaxLookEvent__3561160500_47mjj8_k$ = function (_set____804775014) {
    this.SLL_MaxLookEvent_1 = _set____804775014;
  };
  DecisionInfo.prototype._get_SLL_MaxLookEvent__1024949544_gy884o_k$ = function () {
    return this.SLL_MaxLookEvent_1;
  };
  DecisionInfo.prototype._set_LL_TotalLook__1554955763_azylsc_k$ = function (_set____804775014) {
    this.LL_TotalLook_1 = _set____804775014;
  };
  DecisionInfo.prototype._get_LL_TotalLook__2495108583_trl7vd_k$ = function () {
    return this.LL_TotalLook_1;
  };
  DecisionInfo.prototype._set_LL_MinLook__909320613_3v3vk2_k$ = function (_set____804775014) {
    this.LL_MinLook_1 = _set____804775014;
  };
  DecisionInfo.prototype._get_LL_MinLook__4293535385_uovb_k$ = function () {
    return this.LL_MinLook_1;
  };
  DecisionInfo.prototype._set_LL_MaxLook__2685517267_8h2coc_k$ = function (_set____804775014) {
    this.LL_MaxLook_1 = _set____804775014;
  };
  DecisionInfo.prototype._get_LL_MaxLook__1774764743_tcnd8n_k$ = function () {
    return this.LL_MaxLook_1;
  };
  DecisionInfo.prototype._set_LL_MaxLookEvent__3240838287_sgx907_k$ = function (_set____804775014) {
    this.LL_MaxLookEvent_1 = _set____804775014;
  };
  DecisionInfo.prototype._get_LL_MaxLookEvent__3851761691_7bvfmt_k$ = function () {
    return this.LL_MaxLookEvent_1;
  };
  DecisionInfo.prototype._get_contextSensitivities__4084442109_3hca9v_k$ = function () {
    return this.contextSensitivities_1;
  };
  DecisionInfo.prototype._get_errors__806354176_dc2yv4_k$ = function () {
    return this.errors_1;
  };
  DecisionInfo.prototype._get_ambiguities__3104455206_jost0a_k$ = function () {
    return this.ambiguities_1;
  };
  DecisionInfo.prototype._get_predicateEvals__4025063979_4goyqd_k$ = function () {
    return this.predicateEvals_1;
  };
  DecisionInfo.prototype._set_SLL_ATNTransitions__1888411528_yoan5_k$ = function (_set____804775014) {
    this.SLL_ATNTransitions_1 = _set____804775014;
  };
  DecisionInfo.prototype._get_SLL_ATNTransitions__4131106940_2pk3gk_k$ = function () {
    return this.SLL_ATNTransitions_1;
  };
  DecisionInfo.prototype._set_SLL_DFATransitions__123257612_az936t_k$ = function (_set____804775014) {
    this.SLL_DFATransitions_1 = _set____804775014;
  };
  DecisionInfo.prototype._get_SLL_DFATransitions__2365953024_vwhgxs_k$ = function () {
    return this.SLL_DFATransitions_1;
  };
  DecisionInfo.prototype._set_LL_Fallback__257530180_kl95p_k$ = function (_set____804775014) {
    this.LL_Fallback_1 = _set____804775014;
  };
  DecisionInfo.prototype._get_LL_Fallback__2088973008_yjpxw0_k$ = function () {
    return this.LL_Fallback_1;
  };
  DecisionInfo.prototype._set_LL_ATNTransitions__3296410147_t3tpms_k$ = function (_set____804775014) {
    this.LL_ATNTransitions_1 = _set____804775014;
  };
  DecisionInfo.prototype._get_LL_ATNTransitions__1983281839_wssm27_k$ = function () {
    return this.LL_ATNTransitions_1;
  };
  DecisionInfo.prototype._set_LL_DFATransitions__1531256231_j38x34_k$ = function (_set____804775014) {
    this.LL_DFATransitions_1 = _set____804775014;
  };
  DecisionInfo.prototype._get_LL_DFATransitions__218127923_3lv8kz_k$ = function () {
    return this.LL_DFATransitions_1;
  };
  DecisionInfo.prototype.toString = function () {
    return '{decision=' + this.decision_1 + ', contextSensitivities=' + this.contextSensitivities_1._get_size__809037418_ddoh9m_k$() + ', errors=' + this.errors_1._get_size__809037418_ddoh9m_k$() + ', ambiguities=' + this.ambiguities_1._get_size__809037418_ddoh9m_k$() + ', SLL_lookahead=' + this.SLL_TotalLook_1 + ', SLL_ATNTransitions=' + this.SLL_ATNTransitions_1 + ', SLL_DFATransitions=' + this.SLL_DFATransitions_1 + ', LL_Fallback=' + this.LL_Fallback_1 + ', LL_lookahead=' + this.LL_TotalLook_1 + ', LL_ATNTransitions=' + toString(this.LL_ATNTransitions_1) + new Char(_Char___init__impl__380027157(125));
  };
  DecisionInfo.$metadata$ = {
    simpleName: 'DecisionInfo',
    kind: 'class',
    interfaces: []
  };
  function DecisionState() {
    ATNState.call(this);
    this.decision_1 = -1;
    this.nonGreedy_1 = false;
  }
  DecisionState.prototype._set_decision__2613385595_qqw8ff_k$ = function (_set____804775014) {
    this.decision_1 = _set____804775014;
  };
  DecisionState.prototype._get_decision__1839254383_uf1lrj_k$ = function () {
    return this.decision_1;
  };
  DecisionState.prototype._set_nonGreedy__2693793176_k4vyr3_k$ = function (_set____804775014) {
    this.nonGreedy_1 = _set____804775014;
  };
  DecisionState.prototype._get_nonGreedy__170562084_2tjqjo_k$ = function () {
    return this.nonGreedy_1;
  };
  DecisionState.$metadata$ = {
    simpleName: 'DecisionState',
    kind: 'class',
    interfaces: []
  };
  function EmptyPredictionContext() {
    SingletonPredictionContext.call(this, null, Companion_getInstance_22()._get_EMPTY_RETURN_STATE__147511191_2ftod3_k$());
  }
  EmptyPredictionContext.prototype._get_isEmpty__1500737838_oti0q6_k$ = function () {
    return true;
  };
  EmptyPredictionContext.prototype.size_23och_k$ = function () {
    return 1;
  };
  EmptyPredictionContext.prototype.getParent_4aoyvz_k$ = function (index) {
    return null;
  };
  EmptyPredictionContext.prototype.getReturnState_indz3e_k$ = function (index) {
    return Companion_getInstance_22()._get_EMPTY_RETURN_STATE__147511191_2ftod3_k$();
  };
  EmptyPredictionContext.prototype.equals = function (o) {
    return this === o;
  };
  EmptyPredictionContext.prototype.toString = function () {
    return '$';
  };
  EmptyPredictionContext.$metadata$ = {
    simpleName: 'EmptyPredictionContext',
    kind: 'class',
    interfaces: []
  };
  function EpsilonTransition_init_$Init$(target, outermostPrecedenceReturn, $mask0, $marker, $this) {
    if (!(($mask0 & 2) === 0))
      outermostPrecedenceReturn = -1;
    EpsilonTransition.call($this, target, outermostPrecedenceReturn);
    return $this;
  }
  function EpsilonTransition_init_$Create$(target, outermostPrecedenceReturn, $mask0, $marker) {
    return EpsilonTransition_init_$Init$(target, outermostPrecedenceReturn, $mask0, $marker, Object.create(EpsilonTransition.prototype));
  }
  function _get_outermostPrecedenceReturn__3184906457($this) {
    return $this.outermostPrecedenceReturn_1;
  }
  function EpsilonTransition(target, outermostPrecedenceReturn) {
    Transition.call(this, target);
    this.outermostPrecedenceReturn_1 = outermostPrecedenceReturn;
  }
  EpsilonTransition.prototype._get_serializationType__1649189191_r9vuiv_k$ = function () {
    return Companion_getInstance_27()._get_EPSILON__2552669447_stbhmh_k$();
  };
  EpsilonTransition.prototype._get_isEpsilon__1837953905_ue9qb5_k$ = function () {
    return true;
  };
  EpsilonTransition.prototype.outermostPrecedenceReturn_dx5dvc_k$ = function () {
    return this.outermostPrecedenceReturn_1;
  };
  EpsilonTransition.prototype.matches_4cugi_k$ = function (symbol, minVocabSymbol, maxVocabSymbol) {
    return false;
  };
  EpsilonTransition.prototype.toString = function () {
    return 'epsilon';
  };
  EpsilonTransition.$metadata$ = {
    simpleName: 'EpsilonTransition',
    kind: 'class',
    interfaces: []
  };
  function ErrorInfo(decision, configs, input, startIndex, stopIndex, fullCtx) {
    DecisionEventInfo.call(this, decision, configs, input, startIndex, stopIndex, fullCtx);
  }
  ErrorInfo.$metadata$ = {
    simpleName: 'ErrorInfo',
    kind: 'class',
    interfaces: []
  };
  function Companion_14() {
    Companion_instance_14 = this;
    this.HIT_PRED_1 = Companion_getInstance_6()._get_INVALID_TYPE__2936648937_mgph5j_k$();
  }
  Companion_14.prototype._get_HIT_PRED__2902295038_n15ssi_k$ = function () {
    return this.HIT_PRED_1;
  };
  Companion_14.$metadata$ = {
    simpleName: 'Companion',
    kind: 'object',
    interfaces: []
  };
  var Companion_instance_14;
  function Companion_getInstance_15() {
    if (Companion_instance_14 == null)
      new Companion_14();
    return Companion_instance_14;
  }
  function LL1Analyzer(atn) {
    Companion_getInstance_15();
    this.atn_1 = atn;
  }
  LL1Analyzer.prototype._get_atn__856855894_e65e8m_k$ = function () {
    return this.atn_1;
  };
  LL1Analyzer.prototype.getDecisionLookahead_o3ih07_k$ = function (s) {
    if (s == null) {
      return null;
    }
    var tmp$ret$0;
    $l$block: {
      var tmp0_arrayOfNulls_0 = ensureNotNull(s)._get_numberOfTransitions__3931454387_60fcct_k$();
      tmp$ret$0 = fillArrayVal(Array(tmp0_arrayOfNulls_0), null);
      break $l$block;
    }
    var look = tmp$ret$0;
    var inductionVariable = 0;
    var last = ensureNotNull(s)._get_numberOfTransitions__3931454387_60fcct_k$();
    if (inductionVariable < last)
      do {
        var alt = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        look[alt] = IntervalSet_init_$Create$_1(new Int32Array([]));
        var lookBusy = HashSet_init_$Create$_0();
        var seeThruPreds = false;
        this._LOOK_942jzl_k$(ensureNotNull(ensureNotNull(s).transition_bdhd2s_k$(alt)._get_target__747061146_ccs42i_k$()), null, Companion_getInstance_22()._get_EMPTY__2261257284_xmtgos_k$(), ensureNotNull(look[alt]), lookBusy, BitSet_init_$Create$(), seeThruPreds, false);
        if (ensureNotNull(look[alt]).size_23och_k$() === 0 ? true : ensureNotNull(look[alt]).contains_1pg60y_k$(Companion_getInstance_15().HIT_PRED_1)) {
          look[alt] = null;
        }
      }
       while (inductionVariable < last);
    return look;
  };
  LL1Analyzer.prototype.LOOK_r42kge_k$ = function (s, ctx) {
    return this.LOOK_jj5nrx_k$(s, null, ctx);
  };
  LL1Analyzer.prototype.LOOK_jj5nrx_k$ = function (s, stopState, ctx) {
    var r = IntervalSet_init_$Create$_1(new Int32Array([]));
    var seeThruPreds = true;
    var lookContext = !(ctx == null) ? Companion_getInstance_22().fromRuleContext_vm7fqt_k$(ensureNotNull(s._get_atn__856855894_e65e8m_k$()), ctx) : null;
    this._LOOK_942jzl_k$(s, stopState, lookContext, r, HashSet_init_$Create$_0(), BitSet_init_$Create$(), seeThruPreds, true);
    return r;
  };
  LL1Analyzer.prototype._LOOK_942jzl_k$ = function (s, stopState, ctx, look, lookBusy, calledRuleStack, seeThruPreds, addEOF) {
    var c = ATNConfig_init_$Create$_1(s, 0, ctx, null, 8, null);
    if (!lookBusy.add_1j60pz_k$(c))
      return Unit_getInstance();
    if (s === stopState) {
      if (ctx == null) {
        look.add_fx1qxd_k$(Companion_getInstance_6()._get_EPSILON__2552669447_stbhmh_k$());
        return Unit_getInstance();
      } else if (ensureNotNull(ctx)._get_isEmpty__1500737838_oti0q6_k$() ? addEOF : false) {
        look.add_fx1qxd_k$(Companion_getInstance_6()._get_EOF__855984949_e5mq7p_k$());
        return Unit_getInstance();
      }
    }
    if (s instanceof RuleStopState) {
      if (ctx == null) {
        look.add_fx1qxd_k$(Companion_getInstance_6()._get_EPSILON__2552669447_stbhmh_k$());
        return Unit_getInstance();
      } else if (ensureNotNull(ctx)._get_isEmpty__1500737838_oti0q6_k$() ? addEOF : false) {
        look.add_fx1qxd_k$(Companion_getInstance_6()._get_EOF__855984949_e5mq7p_k$());
        return Unit_getInstance();
      }
      if (!(ctx === Companion_getInstance_22()._get_EMPTY__2261257284_xmtgos_k$())) {
        var removed = calledRuleStack.get_fkrdnv_k$(s._get_ruleIndex__1923824091_vte863_k$());
        try {
          calledRuleStack.clear_2v0c71_k$(s._get_ruleIndex__1923824091_vte863_k$());
          var inductionVariable = 0;
          var last = ensureNotNull(ctx).size_23och_k$();
          if (inductionVariable < last)
            do {
              var i = inductionVariable;
              inductionVariable = inductionVariable + 1 | 0;
              var returnState = this.atn_1._get_states__388198729_6f4g21_k$().get_fkrdnv_k$(ensureNotNull(ctx).getReturnState_indz3e_k$(i));
              this._LOOK_942jzl_k$(ensureNotNull(returnState), stopState, ensureNotNull(ctx).getParent_4aoyvz_k$(i), look, lookBusy, calledRuleStack, seeThruPreds, addEOF);
            }
             while (inductionVariable < last);
        }finally {
          if (removed) {
            calledRuleStack.set_2jdgjy_k$(s._get_ruleIndex__1923824091_vte863_k$());
          }
        }
        return Unit_getInstance();
      }
    } else {
    }
    var n = s._get_numberOfTransitions__3931454387_60fcct_k$();
    var inductionVariable_0 = 0;
    if (inductionVariable_0 < n)
      $l$loop: do {
        var i_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        var t = s.transition_bdhd2s_k$(i_0);
        if (t instanceof RuleTransition) {
          if (calledRuleStack.get_fkrdnv_k$(ensureNotNull((t instanceof RuleTransition ? t : THROW_CCE())._get_target__747061146_ccs42i_k$())._get_ruleIndex__1923824091_vte863_k$())) {
            continue $l$loop;
          } else {
          }
          var tmp = Companion_getInstance_26();
          var newContext = tmp.create_kfwgi2_k$(ctx, (t instanceof RuleTransition ? t : THROW_CCE())._get_followState__3560924721_c512vj_k$()._get_stateNumber__4121888151_2v1oq1_k$());
          try {
            calledRuleStack.set_2jdgjy_k$(ensureNotNull((t instanceof RuleTransition ? t : THROW_CCE())._get_target__747061146_ccs42i_k$())._get_ruleIndex__1923824091_vte863_k$());
            this._LOOK_942jzl_k$(ensureNotNull(t._get_target__747061146_ccs42i_k$()), stopState, newContext, look, lookBusy, calledRuleStack, seeThruPreds, addEOF);
          }finally {
            calledRuleStack.clear_2v0c71_k$(ensureNotNull((t instanceof RuleTransition ? t : THROW_CCE())._get_target__747061146_ccs42i_k$())._get_ruleIndex__1923824091_vte863_k$());
          }
        } else {
          if (t instanceof AbstractPredicateTransition) {
            if (seeThruPreds) {
              this._LOOK_942jzl_k$(ensureNotNull(t._get_target__747061146_ccs42i_k$()), stopState, ctx, look, lookBusy, calledRuleStack, seeThruPreds, addEOF);
            } else {
              look.add_fx1qxd_k$(Companion_getInstance_15().HIT_PRED_1);
            }
          } else {
            if (t._get_isEpsilon__1837953905_ue9qb5_k$()) {
              this._LOOK_942jzl_k$(ensureNotNull(t._get_target__747061146_ccs42i_k$()), stopState, ctx, look, lookBusy, calledRuleStack, seeThruPreds, addEOF);
            } else {
              if (t instanceof WildcardTransition) {
                look.addAll_z9dmpz_k$(Companion_getInstance_32().of_9v4utl_k$(Companion_getInstance_6()._get_MIN_USER_TOKEN_TYPE__2440773802_unxsuu_k$(), this.atn_1._get_maxTokenType__2953938780_m6ew84_k$()));
                Unit_getInstance();
              } else {
                {
                  var set = t.accessLabel_hdfxg0_k$();
                  if (!(set == null)) {
                    if (t instanceof NotSetTransition) {
                      set = ensureNotNull(set).complement_947jrn_k$(Companion_getInstance_32().of_9v4utl_k$(Companion_getInstance_6()._get_MIN_USER_TOKEN_TYPE__2440773802_unxsuu_k$(), this.atn_1._get_maxTokenType__2953938780_m6ew84_k$()));
                    } else {
                    }
                    look.addAll_z9dmpz_k$(set);
                    Unit_getInstance();
                  }
                }
              }
            }
          }
        }
      }
       while (inductionVariable_0 < n);
  };
  LL1Analyzer.$metadata$ = {
    simpleName: 'LL1Analyzer',
    kind: 'class',
    interfaces: []
  };
  function _get_passedThroughNonGreedyDecision__1753103735($this) {
    return $this.passedThroughNonGreedyDecision_1;
  }
  function LexerATNConfig_init_$Init$(state, alt, context, $this) {
    ATNConfig_init_$Init$_0(state, alt, context, Companion_getInstance_25()._get_NONE__774049299_csuk9f_k$(), $this);
    LexerATNConfig.call($this);
    $this.passedThroughNonGreedyDecision_1 = false;
    $this.lexerActionExecutor_1 = null;
    return $this;
  }
  function LexerATNConfig_init_$Create$(state, alt, context) {
    return LexerATNConfig_init_$Init$(state, alt, context, Object.create(LexerATNConfig.prototype));
  }
  function LexerATNConfig_init_$Init$_0(state, alt, context, lexerActionExecutor, $this) {
    ATNConfig_init_$Init$_0(state, alt, context, Companion_getInstance_25()._get_NONE__774049299_csuk9f_k$(), $this);
    LexerATNConfig.call($this);
    $this.lexerActionExecutor_1 = lexerActionExecutor;
    $this.passedThroughNonGreedyDecision_1 = false;
    return $this;
  }
  function LexerATNConfig_init_$Create$_0(state, alt, context, lexerActionExecutor) {
    return LexerATNConfig_init_$Init$_0(state, alt, context, lexerActionExecutor, Object.create(LexerATNConfig.prototype));
  }
  function LexerATNConfig_init_$Init$_1(c, state, $this) {
    ATNConfig_init_$Init$_4(c, state, c._get_context__1558698818_ps0bpe_k$(), c._get_semanticContext__233309224_3uwmjs_k$(), $this);
    LexerATNConfig.call($this);
    $this.lexerActionExecutor_1 = c.lexerActionExecutor_1;
    $this.passedThroughNonGreedyDecision_1 = checkNonGreedyDecision($this, c, state);
    return $this;
  }
  function LexerATNConfig_init_$Create$_1(c, state) {
    return LexerATNConfig_init_$Init$_1(c, state, Object.create(LexerATNConfig.prototype));
  }
  function LexerATNConfig_init_$Init$_2(c, state, lexerActionExecutor, $this) {
    ATNConfig_init_$Init$_4(c, state, c._get_context__1558698818_ps0bpe_k$(), c._get_semanticContext__233309224_3uwmjs_k$(), $this);
    LexerATNConfig.call($this);
    $this.lexerActionExecutor_1 = lexerActionExecutor;
    $this.passedThroughNonGreedyDecision_1 = checkNonGreedyDecision($this, c, state);
    return $this;
  }
  function LexerATNConfig_init_$Create$_2(c, state, lexerActionExecutor) {
    return LexerATNConfig_init_$Init$_2(c, state, lexerActionExecutor, Object.create(LexerATNConfig.prototype));
  }
  function LexerATNConfig_init_$Init$_3(c, state, context, $this) {
    ATNConfig_init_$Init$_4(c, state, context, c._get_semanticContext__233309224_3uwmjs_k$(), $this);
    LexerATNConfig.call($this);
    $this.lexerActionExecutor_1 = c.lexerActionExecutor_1;
    $this.passedThroughNonGreedyDecision_1 = checkNonGreedyDecision($this, c, state);
    return $this;
  }
  function LexerATNConfig_init_$Create$_3(c, state, context) {
    return LexerATNConfig_init_$Init$_3(c, state, context, Object.create(LexerATNConfig.prototype));
  }
  function checkNonGreedyDecision($this, source, target) {
    var tmp;
    if (source.passedThroughNonGreedyDecision_1) {
      tmp = true;
    } else {
      var tmp_0;
      if (target instanceof DecisionState) {
        tmp_0 = (target instanceof DecisionState ? target : THROW_CCE())._get_nonGreedy__170562084_2tjqjo_k$();
      } else {
        {
          tmp_0 = false;
        }
      }
      tmp = tmp_0;
    }
    return tmp;
  }
  LexerATNConfig.prototype._get_lexerActionExecutor__968110556_g0dyvw_k$ = function () {
    return this.lexerActionExecutor_1;
  };
  LexerATNConfig.prototype.hasPassedThroughNonGreedyDecision_fjnzgu_k$ = function () {
    return this.passedThroughNonGreedyDecision_1;
  };
  LexerATNConfig.prototype.hashCode = function () {
    var hashCode = MurmurHash_getInstance().initialize_mh9k0f_k$(7);
    hashCode = MurmurHash_getInstance().update_v7hmy1_k$(hashCode, this._get_state__3614753120_b8zcm8_k$()._get_stateNumber__4121888151_2v1oq1_k$());
    hashCode = MurmurHash_getInstance().update_v7hmy1_k$(hashCode, this._get_alt__856848392_e658g8_k$());
    hashCode = MurmurHash_getInstance().update_qzj42v_k$(hashCode, this._get_context__1558698818_ps0bpe_k$());
    hashCode = MurmurHash_getInstance().update_qzj42v_k$(hashCode, this._get_semanticContext__233309224_3uwmjs_k$());
    hashCode = MurmurHash_getInstance().update_v7hmy1_k$(hashCode, this.passedThroughNonGreedyDecision_1 ? 1 : 0);
    hashCode = MurmurHash_getInstance().update_qzj42v_k$(hashCode, this.lexerActionExecutor_1);
    hashCode = MurmurHash_getInstance().finish_anppvx_k$(hashCode, 6);
    return hashCode;
  };
  LexerATNConfig.prototype.equals_6yebht_k$ = function (other) {
    if (this === other) {
      return true;
    } else {
      if (!(other instanceof LexerATNConfig)) {
        return false;
      } else {
      }
    }
    var lexerOther = (other == null ? true : other instanceof LexerATNConfig) ? other : THROW_CCE();
    if (!(this.passedThroughNonGreedyDecision_1 === ensureNotNull(lexerOther).passedThroughNonGreedyDecision_1)) {
      return false;
    }
    var tmp;
    if (!Companion_getInstance_33()._get_INSTANCE__2559446_1iuvq_k$().equals_cjghj5_k$(this.lexerActionExecutor_1, lexerOther.lexerActionExecutor_1)) {
      tmp = false;
    } else {
      tmp = ATNConfig.prototype.equals_6yebht_k$.call(this, other);
    }
    return tmp;
  };
  function LexerATNConfig() {
  }
  LexerATNConfig.$metadata$ = {
    simpleName: 'LexerATNConfig',
    kind: 'class',
    interfaces: []
  };
  function SimState() {
    this.index_1 = -1;
    this.line_1 = 0;
    this.charPos_1 = -1;
    this.dfaState_1 = null;
  }
  SimState.prototype._set_index__964833971_tqmhb1_k$ = function (_set____804775014) {
    this.index_1 = _set____804775014;
  };
  SimState.prototype._get_index__3322996031_g2optt_k$ = function () {
    return this.index_1;
  };
  SimState.prototype._set_line__587944163_xvf6r1_k$ = function (_set____804775014) {
    this.line_1 = _set____804775014;
  };
  SimState.prototype._get_line__802561239_d9to7r_k$ = function () {
    return this.line_1;
  };
  SimState.prototype._set_charPos__815472679_sr4n55_k$ = function (_set____804775014) {
    this.charPos_1 = _set____804775014;
  };
  SimState.prototype._get_charPos__3561447347_c4pvm5_k$ = function () {
    return this.charPos_1;
  };
  SimState.prototype._set_dfaState__1952036965_75kwiz_k$ = function (_set____804775014) {
    this.dfaState_1 = _set____804775014;
  };
  SimState.prototype._get_dfaState__1177905753_jhalw9_k$ = function () {
    return this.dfaState_1;
  };
  SimState.prototype.reset_5tn5dq_k$ = function () {
    this.index_1 = -1;
    this.line_1 = 0;
    this.charPos_1 = -1;
    this.dfaState_1 = null;
  };
  SimState.$metadata$ = {
    simpleName: 'SimState',
    kind: 'class',
    interfaces: []
  };
  function LexerATNSimulator_init_$Init$(atn, decisionToDFA, sharedContextCache, $this) {
    LexerATNSimulator.call($this, null, atn, decisionToDFA, sharedContextCache);
    return $this;
  }
  function LexerATNSimulator_init_$Create$(atn, decisionToDFA, sharedContextCache) {
    return LexerATNSimulator_init_$Init$(atn, decisionToDFA, sharedContextCache, Object.create(LexerATNSimulator.prototype));
  }
  function Companion_15() {
    Companion_instance_15 = this;
    this.debug_1 = false;
    this.dfa_debug_1 = false;
    this.MIN_DFA_EDGE_1 = 0;
    this.MAX_DFA_EDGE_1 = 127;
  }
  Companion_15.prototype._get_debug__3171493854_ikvxnm_k$ = function () {
    return this.debug_1;
  };
  Companion_15.prototype._get_dfa_debug__3760557694_8u6936_k$ = function () {
    return this.dfa_debug_1;
  };
  Companion_15.prototype._get_MIN_DFA_EDGE__3267133729_gzy1gf_k$ = function () {
    return this.MIN_DFA_EDGE_1;
  };
  Companion_15.prototype._get_MAX_DFA_EDGE__1444827571_nw7o37_k$ = function () {
    return this.MAX_DFA_EDGE_1;
  };
  Companion_15.$metadata$ = {
    simpleName: 'Companion',
    kind: 'object',
    interfaces: []
  };
  var Companion_instance_15;
  function Companion_getInstance_16() {
    if (Companion_instance_15 == null)
      new Companion_15();
    return Companion_instance_15;
  }
  function LexerATNSimulator(recog, atn, decisionToDFA, sharedContextCache) {
    Companion_getInstance_16();
    ATNSimulator.call(this, atn, sharedContextCache);
    this.recog_1 = recog;
    this.decisionToDFA_1 = decisionToDFA;
    this.startIndex_1 = -1;
    this.line_1 = 1;
    this.charPositionInLine_1 = 0;
    this.mode_1 = Companion_getInstance_4()._get_DEFAULT_MODE__788028522_d166p6_k$();
    this.prevAccept_1 = new SimState();
  }
  LexerATNSimulator.prototype._get_recog__3572325993_by8plj_k$ = function () {
    return this.recog_1;
  };
  LexerATNSimulator.prototype._get_decisionToDFA__1733740713_so82w9_k$ = function () {
    return this.decisionToDFA_1;
  };
  LexerATNSimulator.prototype._set_startIndex__1161010183_otroeh_k$ = function (_set____804775014) {
    this.startIndex_1 = _set____804775014;
  };
  LexerATNSimulator.prototype._get_startIndex__250257659_44zw1n_k$ = function () {
    return this.startIndex_1;
  };
  LexerATNSimulator.prototype._set_line__587944163_xvf6r1_k$ = function (_set____804775014) {
    this.line_1 = _set____804775014;
  };
  LexerATNSimulator.prototype._get_line__802561239_d9to7r_k$ = function () {
    return this.line_1;
  };
  LexerATNSimulator.prototype._set_charPositionInLine__134348639_7venf3_k$ = function (_set____804775014) {
    this.charPositionInLine_1 = _set____804775014;
  };
  LexerATNSimulator.prototype._get_charPositionInLine__2377044051_vpvr1p_k$ = function () {
    return this.charPositionInLine_1;
  };
  LexerATNSimulator.prototype._set_mode__589036820_xkfeos_k$ = function (_set____804775014) {
    this.mode_1 = _set____804775014;
  };
  LexerATNSimulator.prototype._get_mode__803653896_dah3bc_k$ = function () {
    return this.mode_1;
  };
  LexerATNSimulator.prototype._get_prevAccept__4196786896_1mgchc_k$ = function () {
    return this.prevAccept_1;
  };
  LexerATNSimulator.prototype.copyState_7fv8vc_k$ = function (simulator) {
    this.charPositionInLine_1 = simulator.charPositionInLine_1;
    this.line_1 = simulator.line_1;
    this.mode_1 = simulator.mode_1;
    this.startIndex_1 = simulator.startIndex_1;
  };
  LexerATNSimulator.prototype.match_xqlx9l_k$ = function (input, mode) {
    this.mode_1 = mode;
    var mark = input.mark_1zob1_k$();
    try {
      this.startIndex_1 = input.index_1nqriq_k$();
      this.prevAccept_1.reset_5tn5dq_k$();
      var dfa = this.decisionToDFA_1[mode];
      var tmp;
      if (ensureNotNull(dfa)._get_s0__1413128974_ndc9am_k$() == null) {
        tmp = this.matchATN_9vx5lj_k$(input);
      } else {
        var tmp_0 = ensureNotNull(dfa)._get_s0__1413128974_ndc9am_k$();
        tmp = this.execATN_ydm3bv_k$(input, tmp_0 instanceof DFAState ? tmp_0 : THROW_CCE());
      }
      return tmp;
    }finally {
      input.release_knbvef_k$(mark);
    }
  };
  LexerATNSimulator.prototype.reset_5tn5dq_k$ = function () {
    this.prevAccept_1.reset_5tn5dq_k$();
    this.startIndex_1 = -1;
    this.line_1 = 1;
    this.charPositionInLine_1 = 0;
    this.mode_1 = Companion_getInstance_4()._get_DEFAULT_MODE__788028522_d166p6_k$();
  };
  LexerATNSimulator.prototype.clearDFA_ekw7r5_k$ = function () {
    var inductionVariable = 0;
    var last = this.decisionToDFA_1.length - 1 | 0;
    if (inductionVariable <= last)
      do {
        var d = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp = this._get_atn__856855894_e65e8m_k$().getDecisionState_m2smv2_k$(d);
        this.decisionToDFA_1[d] = new DFA(tmp instanceof DecisionState ? tmp : THROW_CCE(), d);
      }
       while (inductionVariable <= last);
  };
  LexerATNSimulator.prototype.matchATN_9vx5lj_k$ = function (input) {
    var startState = this._get_atn__856855894_e65e8m_k$()._get_modeToStartState__2760479998_pdldz6_k$().get_fkrdnv_k$(this.mode_1);
    if (Companion_getInstance_16().debug_1) {
      outMessage('matchATN mode ' + this.mode_1 + ' start: ' + startState + '\n');
    }
    var old_mode = this.mode_1;
    var s0_closure = this.computeStartState_24a6td_k$(input, startState);
    var suppressEdge = s0_closure._get_hasSemanticContext__2769500_1ncyk_k$();
    s0_closure._set_hasSemanticContext__2055041384_lpcdbz_k$(false);
    var next = this.addDFAState_2u8s9k_k$(s0_closure);
    if (!suppressEdge) {
      ensureNotNull(this.decisionToDFA_1[this.mode_1])._set_s0__3473238554_l2xee_k$(next);
    }
    var predict = this.execATN_ydm3bv_k$(input, next);
    if (Companion_getInstance_16().debug_1) {
      outMessage('DFA after matchATN: ' + ensureNotNull(this.decisionToDFA_1[old_mode]).toLexerString_rhiloe_k$() + '\n');
    }
    return predict;
  };
  LexerATNSimulator.prototype.execATN_ydm3bv_k$ = function (input, ds0) {
    if (Companion_getInstance_16().debug_1) {
      outMessage('start state closure=' + ds0._get_configs__1545872320_pkdeps_k$() + '\n');
    }
    if (ds0._get_isAcceptState__1730096082_sm1yoi_k$()) {
      this.captureSimState_fs0ok6_k$(this.prevAccept_1, input, ds0);
    }
    var t = input.LA_y7f82c_k$(1);
    var s = ds0;
    $l$loop_0: while (true) {
      if (Companion_getInstance_16().debug_1) {
        outMessage('execATN loop starting closure: ' + ensureNotNull(s)._get_configs__1545872320_pkdeps_k$() + '\n');
      }
      var target = this.getExistingTargetState_28nbhb_k$(s, t);
      if (target == null) {
        target = this.computeTargetState_rmxwcc_k$(input, s, t);
      }
      if (target === Companion_getInstance_13()._get_ERROR__2265929449_xk1bmf_k$()) {
        break $l$loop_0;
      }
      if (!(t === Companion_getInstance_3()._get_EOF__855984949_e5mq7p_k$())) {
        this.consume_56q6m6_k$(input);
      }
      if (ensureNotNull(target)._get_isAcceptState__1730096082_sm1yoi_k$()) {
        this.captureSimState_fs0ok6_k$(this.prevAccept_1, input, target);
        if (t === Companion_getInstance_3()._get_EOF__855984949_e5mq7p_k$()) {
          break $l$loop_0;
        }
      }
      t = input.LA_y7f82c_k$(1);
      s = target;
    }
    return this.failOrAccept_o5a9a2_k$(this.prevAccept_1, input, ensureNotNull(ensureNotNull(s)._get_configs__1545872320_pkdeps_k$()), t);
  };
  LexerATNSimulator.prototype.getExistingTargetState_28nbhb_k$ = function (s, t) {
    if ((ensureNotNull(s)._get_edges__3199333435_i4b8hx_k$() == null ? true : t < Companion_getInstance_16().MIN_DFA_EDGE_1) ? true : t > Companion_getInstance_16().MAX_DFA_EDGE_1) {
      return null;
    }
    var target = ensureNotNull(ensureNotNull(s)._get_edges__3199333435_i4b8hx_k$())[t - Companion_getInstance_16().MIN_DFA_EDGE_1 | 0];
    if (Companion_getInstance_16().debug_1 ? !(target == null) : false) {
      outMessage('reuse state ' + ensureNotNull(s)._get_stateNumber__4121888151_2v1oq1_k$() + ' edge to ' + ensureNotNull(target)._get_stateNumber__4121888151_2v1oq1_k$());
    }
    return target;
  };
  LexerATNSimulator.prototype.computeTargetState_rmxwcc_k$ = function (input, s, t) {
    var reach = new OrderedATNConfigSet();
    this.getReachableConfigSet_qtm8dy_k$(input, ensureNotNull(ensureNotNull(s)._get_configs__1545872320_pkdeps_k$()), reach, t);
    if (reach.isEmpty_y1axqb_k$()) {
      if (!reach._get_hasSemanticContext__2769500_1ncyk_k$()) {
        this.addDFAEdge_pxdl7s_k$(s, t, Companion_getInstance_13()._get_ERROR__2265929449_xk1bmf_k$());
      }
      return Companion_getInstance_13()._get_ERROR__2265929449_xk1bmf_k$();
    }
    return this.addDFAEdge_v14svk_k$(s, t, reach);
  };
  LexerATNSimulator.prototype.failOrAccept_o5a9a2_k$ = function (prevAccept, input, reach, t) {
    if (!(prevAccept.dfaState_1 == null)) {
      var lexerActionExecutor = ensureNotNull(prevAccept.dfaState_1)._get_lexerActionExecutor__968110556_g0dyvw_k$();
      this.accept_yv7p44_k$(input, lexerActionExecutor, this.startIndex_1, prevAccept.index_1, prevAccept.line_1, prevAccept.charPos_1);
      return ensureNotNull(prevAccept.dfaState_1)._get_prediction__4047198684_43ijhg_k$();
    } else {
      if (t === Companion_getInstance_3()._get_EOF__855984949_e5mq7p_k$() ? input.index_1nqriq_k$() === this.startIndex_1 : false) {
        return Companion_getInstance_6()._get_EOF__855984949_e5mq7p_k$();
      }
      var tmp = this.recog_1;
      throw new LexerNoViableAltException(tmp instanceof Lexer ? tmp : THROW_CCE(), input, this.startIndex_1, reach);
    }
  };
  LexerATNSimulator.prototype.getReachableConfigSet_qtm8dy_k$ = function (input, closure, reach, t) {
    var skipAlt = Companion_getInstance_8()._get_INVALID_ALT_NUMBER__3632704068_ayalks_k$();
    var tmp0_iterator = closure.iterator_jk1svi_k$();
    $l$loop: while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var c = tmp0_iterator.next_20eer_k$();
      var currentAltReachedAcceptState = c._get_alt__856848392_e658g8_k$() === skipAlt;
      var tmp;
      if (currentAltReachedAcceptState) {
        tmp = (c instanceof LexerATNConfig ? c : THROW_CCE()).hasPassedThroughNonGreedyDecision_fjnzgu_k$();
      } else {
        tmp = false;
      }
      if (tmp) {
        continue $l$loop;
      } else {
      }
      if (Companion_getInstance_16().debug_1) {
        outMessage('testing ' + this.getTokenName_1zgour_k$(t) + ' at ' + c.toString_n1cmzq_k$(this.recog_1, true) + '\n');
      }
      var n = c._get_state__3614753120_b8zcm8_k$()._get_numberOfTransitions__3931454387_60fcct_k$();
      var inductionVariable = 0;
      if (inductionVariable < n)
        $l$loop_0: do {
          var ti = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var trans = c._get_state__3614753120_b8zcm8_k$().transition_bdhd2s_k$(ti);
          var target = this.getReachableTarget_4quf4c_k$(trans, t);
          if (!(target == null)) {
            var lexerActionExecutor = (c instanceof LexerATNConfig ? c : THROW_CCE())._get_lexerActionExecutor__968110556_g0dyvw_k$();
            if (!(lexerActionExecutor == null)) {
              lexerActionExecutor = ensureNotNull(lexerActionExecutor).fixOffsetBeforeMatch_8pxtk3_k$(input.index_1nqriq_k$() - this.startIndex_1 | 0);
            }
            var treatEofAsEpsilon = t === Companion_getInstance_0()._get_EOF__855984949_e5mq7p_k$();
            if (this.closure_6iz8x6_k$(input, LexerATNConfig_init_$Create$_2(c instanceof LexerATNConfig ? c : THROW_CCE(), target, lexerActionExecutor), reach, currentAltReachedAcceptState, true, treatEofAsEpsilon)) {
              skipAlt = c._get_alt__856848392_e658g8_k$();
              break $l$loop_0;
            } else {
            }
          }
        }
         while (inductionVariable < n);
    }
  };
  LexerATNSimulator.prototype.accept_yv7p44_k$ = function (input, lexerActionExecutor, startIndex, index, line, charPos) {
    if (Companion_getInstance_16().debug_1) {
      outMessage('ACTION ' + lexerActionExecutor + '\n');
    }
    input.seek_5aisp4_k$(index);
    this.line_1 = line;
    this.charPositionInLine_1 = charPos;
    if (!(lexerActionExecutor == null) ? !(this.recog_1 == null) : false) {
      ensureNotNull(lexerActionExecutor).execute_g6nvr7_k$(this.recog_1, input, startIndex);
    }
  };
  LexerATNSimulator.prototype.getReachableTarget_4quf4c_k$ = function (trans, t) {
    var tmp;
    if (trans.matches_4cugi_k$(t, Companion_getInstance_4()._get_MIN_CHAR_VALUE__2426922326_uw6oq2_k$(), Companion_getInstance_4()._get_MAX_CHAR_VALUE__3537361256_cj24k8_k$())) {
      tmp = trans._get_target__747061146_ccs42i_k$();
    } else {
      tmp = null;
    }
    return tmp;
  };
  LexerATNSimulator.prototype.computeStartState_24a6td_k$ = function (input, p) {
    var initialContext = Companion_getInstance_22()._get_EMPTY__2261257284_xmtgos_k$();
    var configs = new OrderedATNConfigSet();
    var inductionVariable = 0;
    var last = p._get_numberOfTransitions__3931454387_60fcct_k$();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var target = p.transition_bdhd2s_k$(i)._get_target__747061146_ccs42i_k$();
        var c = LexerATNConfig_init_$Create$(ensureNotNull(target), i + 1 | 0, initialContext);
        this.closure_6iz8x6_k$(input, c, configs, false, false, false);
        Unit_getInstance();
      }
       while (inductionVariable < last);
    return configs;
  };
  LexerATNSimulator.prototype.closure_6iz8x6_k$ = function (input, config, configs, currentAltReachedAcceptState, speculative, treatEofAsEpsilon) {
    var currentAltReachedAcceptState_0 = currentAltReachedAcceptState;
    if (Companion_getInstance_16().debug_1) {
      println('closure(' + config.toString_n1cmzq_k$(this.recog_1, true) + ')');
    }
    var tmp = config._get_state__3614753120_b8zcm8_k$();
    if (tmp instanceof RuleStopState) {
      if (Companion_getInstance_16().debug_1) {
        if (!(this.recog_1 == null)) {
          outMessage('closure at ' + ensureNotNull(ensureNotNull(this.recog_1)._get_ruleNames__2055232037_xzmr6t_k$())[config._get_state__3614753120_b8zcm8_k$()._get_ruleIndex__1923824091_vte863_k$()] + ' rule stop ' + config + '\n');
        } else {
          outMessage('closure at rule stop ' + config + '\n');
        }
      }
      if (config._get_context__1558698818_ps0bpe_k$() == null ? true : ensureNotNull(config._get_context__1558698818_ps0bpe_k$()).hasEmptyPath_tkyljs_k$()) {
        if (config._get_context__1558698818_ps0bpe_k$() == null ? true : ensureNotNull(config._get_context__1558698818_ps0bpe_k$())._get_isEmpty__1500737838_oti0q6_k$()) {
          configs.add_e3lorw_k$(config);
          Unit_getInstance();
          return true;
        } else {
          configs.add_e3lorw_k$(LexerATNConfig_init_$Create$_3(config, config._get_state__3614753120_b8zcm8_k$(), Companion_getInstance_22()._get_EMPTY__2261257284_xmtgos_k$()));
          Unit_getInstance();
          currentAltReachedAcceptState_0 = true;
        }
      }
      if (!(config._get_context__1558698818_ps0bpe_k$() == null) ? !ensureNotNull(config._get_context__1558698818_ps0bpe_k$())._get_isEmpty__1500737838_oti0q6_k$() : false) {
        var inductionVariable = 0;
        var last = ensureNotNull(config._get_context__1558698818_ps0bpe_k$()).size_23och_k$();
        if (inductionVariable < last)
          do {
            var i = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            if (!(ensureNotNull(config._get_context__1558698818_ps0bpe_k$()).getReturnState_indz3e_k$(i) === Companion_getInstance_22()._get_EMPTY_RETURN_STATE__147511191_2ftod3_k$())) {
              var newContext = ensureNotNull(config._get_context__1558698818_ps0bpe_k$()).getParent_4aoyvz_k$(i);
              var returnState = this._get_atn__856855894_e65e8m_k$()._get_states__388198729_6f4g21_k$().get_fkrdnv_k$(ensureNotNull(config._get_context__1558698818_ps0bpe_k$()).getReturnState_indz3e_k$(i));
              var c = LexerATNConfig_init_$Create$_3(config, ensureNotNull(returnState), ensureNotNull(newContext));
              currentAltReachedAcceptState_0 = this.closure_6iz8x6_k$(input, c, configs, currentAltReachedAcceptState_0, speculative, treatEofAsEpsilon);
            }
          }
           while (inductionVariable < last);
      }
      return currentAltReachedAcceptState_0;
    } else {
    }
    if (!config._get_state__3614753120_b8zcm8_k$().onlyHasEpsilonTransitions_stt9um_k$()) {
      if (!currentAltReachedAcceptState_0 ? true : !config.hasPassedThroughNonGreedyDecision_fjnzgu_k$()) {
        configs.add_e3lorw_k$(config);
        Unit_getInstance();
      }
    }
    var p = config._get_state__3614753120_b8zcm8_k$();
    var inductionVariable_0 = 0;
    var last_0 = p._get_numberOfTransitions__3931454387_60fcct_k$();
    if (inductionVariable_0 < last_0)
      do {
        var i_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        var t = p.transition_bdhd2s_k$(i_0);
        var c_0 = this.getEpsilonTarget_8c4cst_k$(input, config, t, configs, speculative, treatEofAsEpsilon);
        if (!(c_0 == null)) {
          currentAltReachedAcceptState_0 = this.closure_6iz8x6_k$(input, c_0, configs, currentAltReachedAcceptState_0, speculative, treatEofAsEpsilon);
        }
      }
       while (inductionVariable_0 < last_0);
    return currentAltReachedAcceptState_0;
  };
  LexerATNSimulator.prototype.getEpsilonTarget_8c4cst_k$ = function (input, config, t, configs, speculative, treatEofAsEpsilon) {
    var c = null;
    var tmp0_subject = t._get_serializationType__1649189191_r9vuiv_k$();
    if (tmp0_subject === Companion_getInstance_27()._get_RULE__777920207_cv5j2n_k$()) {
      var ruleTransition = t instanceof RuleTransition ? t : THROW_CCE();
      var newContext = Companion_getInstance_26().create_kfwgi2_k$(config._get_context__1558698818_ps0bpe_k$(), ruleTransition._get_followState__3560924721_c512vj_k$()._get_stateNumber__4121888151_2v1oq1_k$());
      c = LexerATNConfig_init_$Create$_3(config, ensureNotNull(t._get_target__747061146_ccs42i_k$()), newContext);
    } else if (tmp0_subject === Companion_getInstance_27()._get_PRECEDENCE__922248129_f92z7l_k$())
      throw UnsupportedOperationException_init_$Create$('Precedence predicates are not supported in lexers.');
    else if (tmp0_subject === Companion_getInstance_27()._get_PREDICATE__337996698_5l8fx6_k$()) {
      var pt = t instanceof PredicateTransition ? t : THROW_CCE();
      if (Companion_getInstance_16().debug_1) {
        println('EVAL rule ' + pt._get_ruleIndex__1923824091_vte863_k$() + ':' + pt._get_predIndex__3241973056_hexbk0_k$());
      }
      configs._set_hasSemanticContext__2055041384_lpcdbz_k$(true);
      if (this.evaluatePredicate_h94ps9_k$(input, pt._get_ruleIndex__1923824091_vte863_k$(), pt._get_predIndex__3241973056_hexbk0_k$(), speculative)) {
        c = LexerATNConfig_init_$Create$_1(config, ensureNotNull(t._get_target__747061146_ccs42i_k$()));
      }
    } else if (tmp0_subject === Companion_getInstance_27()._get_ACTION__1841517461_uge3yt_k$())
      if (config._get_context__1558698818_ps0bpe_k$() == null ? true : ensureNotNull(config._get_context__1558698818_ps0bpe_k$()).hasEmptyPath_tkyljs_k$()) {
        var tmp = Companion_getInstance_17();
        var tmp_0 = config._get_lexerActionExecutor__968110556_g0dyvw_k$();
        var tmp_1 = ensureNotNull(this._get_atn__856855894_e65e8m_k$()._get_lexerActions__1822786330_u58mxm_k$());
        var lexerActionExecutor = tmp.append_db5mn6_k$(tmp_0, ensureNotNull(tmp_1[(t instanceof ActionTransition ? t : THROW_CCE())._get_actionIndex__2870023381_nkdhrf_k$()]));
        c = LexerATNConfig_init_$Create$_2(config, ensureNotNull(t._get_target__747061146_ccs42i_k$()), lexerActionExecutor);
      } else {
        c = LexerATNConfig_init_$Create$_1(config, ensureNotNull(t._get_target__747061146_ccs42i_k$()));
      }
     else if (tmp0_subject === Companion_getInstance_27()._get_EPSILON__2552669447_stbhmh_k$())
      c = LexerATNConfig_init_$Create$_1(config, ensureNotNull(t._get_target__747061146_ccs42i_k$()));
    else if ((tmp0_subject === Companion_getInstance_27()._get_ATOM__762193690_clsgey_k$() ? true : tmp0_subject === Companion_getInstance_27()._get_RANGE__2622281300_rnvgrw_k$()) ? true : tmp0_subject === Companion_getInstance_27()._get_SET__856392847_e5vgy7_k$())
      if (treatEofAsEpsilon) {
        if (t.matches_4cugi_k$(Companion_getInstance_0()._get_EOF__855984949_e5mq7p_k$(), Companion_getInstance_4()._get_MIN_CHAR_VALUE__2426922326_uw6oq2_k$(), Companion_getInstance_4()._get_MAX_CHAR_VALUE__3537361256_cj24k8_k$())) {
          c = LexerATNConfig_init_$Create$_1(config, ensureNotNull(t._get_target__747061146_ccs42i_k$()));
        }
      }
    return c;
  };
  LexerATNSimulator.prototype.evaluatePredicate_h94ps9_k$ = function (input, ruleIndex, predIndex, speculative) {
    if (this.recog_1 == null) {
      return true;
    }
    if (!speculative) {
      return ensureNotNull(this.recog_1).sempred_b5qocl_k$(null, ruleIndex, predIndex);
    }
    var savedCharPositionInLine = this.charPositionInLine_1;
    var savedLine = this.line_1;
    var index = input.index_1nqriq_k$();
    var marker = input.mark_1zob1_k$();
    try {
      this.consume_56q6m6_k$(input);
      return ensureNotNull(this.recog_1).sempred_b5qocl_k$(null, ruleIndex, predIndex);
    }finally {
      this.charPositionInLine_1 = savedCharPositionInLine;
      this.line_1 = savedLine;
      input.seek_5aisp4_k$(index);
      input.release_knbvef_k$(marker);
    }
  };
  LexerATNSimulator.prototype.captureSimState_fs0ok6_k$ = function (settings, input, dfaState) {
    settings.index_1 = input.index_1nqriq_k$();
    settings.line_1 = this.line_1;
    settings.charPos_1 = this.charPositionInLine_1;
    settings.dfaState_1 = dfaState;
  };
  LexerATNSimulator.prototype.addDFAEdge_v14svk_k$ = function (from, t, q) {
    var suppressEdge = q._get_hasSemanticContext__2769500_1ncyk_k$();
    q._set_hasSemanticContext__2055041384_lpcdbz_k$(false);
    var to = this.addDFAState_2u8s9k_k$(q);
    if (suppressEdge) {
      return to;
    }
    this.addDFAEdge_pxdl7s_k$(from, t, to);
    return to;
  };
  LexerATNSimulator.prototype.addDFAEdge_pxdl7s_k$ = function (p, t, q) {
    if (t < Companion_getInstance_16().MIN_DFA_EDGE_1 ? true : t > Companion_getInstance_16().MAX_DFA_EDGE_1) {
      return Unit_getInstance();
    }
    if (Companion_getInstance_16().debug_1) {
      println('EDGE ' + p + ' -> ' + q + ' upon ' + new Char(numberToChar(t)));
    }
    var tmp$ret$1;
    $l$block_0: {
      var tmp0_synchronized_0 = ensureNotNull(p);
      if (ensureNotNull(p)._get_edges__3199333435_i4b8hx_k$() == null) {
        var tmp = ensureNotNull(p);
        var tmp$ret$0;
        $l$block: {
          var tmp0_arrayOfNulls_0_2 = (Companion_getInstance_16().MAX_DFA_EDGE_1 - Companion_getInstance_16().MIN_DFA_EDGE_1 | 0) + 1 | 0;
          tmp$ret$0 = fillArrayVal(Array(tmp0_arrayOfNulls_0_2), null);
          break $l$block;
        }
        tmp._set_edges__841171375_hbfclq_k$(tmp$ret$0);
      }
      tmp$ret$1 = ensureNotNull(ensureNotNull(p)._get_edges__3199333435_i4b8hx_k$())[t - Companion_getInstance_16().MIN_DFA_EDGE_1 | 0] = q;
      break $l$block_0;
    }
  };
  LexerATNSimulator.prototype.addDFAState_2u8s9k_k$ = function (configs) {
    assert(!configs._get_hasSemanticContext__2769500_1ncyk_k$());
    var proposed = DFAState_init_$Create$_1(configs);
    var firstConfigWithRuleStopState = null;
    var tmp0_iterator = configs.iterator_jk1svi_k$();
    $l$loop: while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var c = tmp0_iterator.next_20eer_k$();
      var tmp = c._get_state__3614753120_b8zcm8_k$();
      if (tmp instanceof RuleStopState) {
        firstConfigWithRuleStopState = c;
        break $l$loop;
      } else {
      }
    }
    if (!(firstConfigWithRuleStopState == null)) {
      proposed._set_isAcceptState__2650129734_9h16al_k$(true);
      proposed._set_lexerActionExecutor__164029520_nncnix_k$((firstConfigWithRuleStopState instanceof LexerATNConfig ? firstConfigWithRuleStopState : THROW_CCE())._get_lexerActionExecutor__968110556_g0dyvw_k$());
      proposed._set_prediction__662983912_tglolk_k$(ensureNotNull(this._get_atn__856855894_e65e8m_k$()._get_ruleToTokenType__56522645_xnh5h_k$())[ensureNotNull(firstConfigWithRuleStopState)._get_state__3614753120_b8zcm8_k$()._get_ruleIndex__1923824091_vte863_k$()]);
    }
    var dfa = this.decisionToDFA_1[this.mode_1];
    var tmp$ret$0;
    {
      var tmp0_synchronized_0 = ensureNotNull(dfa)._get_states__388198729_6f4g21_k$();
      var existing_2 = dfa._get_states__388198729_6f4g21_k$().get_1mhr4y_k$(proposed);
      if (!(existing_2 == null))
        return existing_2;
      proposed._set_stateNumber__2290445323_a7hzut_k$(ensureNotNull(ensureNotNull(dfa)._get_states__388198729_6f4g21_k$())._get_size__809037418_ddoh9m_k$());
      configs._set_isReadonly__3398997899_73ysxu_k$(true);
      proposed._set_configs__3094864948_rn93q3_k$(configs);
      dfa._get_states__388198729_6f4g21_k$().put_3mhbri_k$(proposed, proposed);
      Unit_getInstance();
      return proposed;
    }
  };
  LexerATNSimulator.prototype.getDFA_6ci92w_k$ = function (mode) {
    return ensureNotNull(this.decisionToDFA_1[mode]);
  };
  LexerATNSimulator.prototype.getText_s3whmy_k$ = function (input) {
    return input.getText_egqjjt_k$(Companion_getInstance_31().of_9v4utl_k$(this.startIndex_1, input.index_1nqriq_k$() - 1 | 0));
  };
  LexerATNSimulator.prototype.consume_56q6m6_k$ = function (input) {
    var curChar = input.LA_y7f82c_k$(1);
    if (equals(new Char(numberToChar(curChar)), new Char(_Char___init__impl__380027157(10)))) {
      var tmp0_this = this;
      var tmp1 = tmp0_this.line_1;
      tmp0_this.line_1 = tmp1 + 1 | 0;
      Unit_getInstance();
      this.charPositionInLine_1 = 0;
    } else {
      var tmp2_this = this;
      var tmp3 = tmp2_this.charPositionInLine_1;
      tmp2_this.charPositionInLine_1 = tmp3 + 1 | 0;
      Unit_getInstance();
    }
    input.consume_spbz2t_k$();
  };
  LexerATNSimulator.prototype.getTokenName_1zgour_k$ = function (t) {
    return t === -1 ? 'EOF' : "'" + new Char(numberToChar(t)) + "'";
  };
  LexerATNSimulator.$metadata$ = {
    simpleName: 'LexerATNSimulator',
    kind: 'class',
    interfaces: []
  };
  function LexerAction() {
  }
  LexerAction.$metadata$ = {
    simpleName: 'LexerAction',
    kind: 'interface',
    interfaces: []
  };
  function _get_hashCode__1765463824($this) {
    return $this.hashCode_2;
  }
  function Companion_16() {
    Companion_instance_16 = this;
  }
  Companion_16.prototype.append_db5mn6_k$ = function (lexerActionExecutor, lexerAction) {
    if (lexerActionExecutor == null) {
      var tmp$ret$2;
      $l$block_1: {
        var tmp$ret$1;
        $l$block_0: {
          var tmp$ret$0;
          $l$block: {
            tmp$ret$0 = [lexerAction];
            break $l$block;
          }
          tmp$ret$1 = tmp$ret$0;
          break $l$block_0;
        }
        tmp$ret$2 = tmp$ret$1;
        break $l$block_1;
      }
      return new LexerActionExecutor(tmp$ret$2);
    }
    var lexerActions = copyOf(lexerActionExecutor.lexerActions_1, lexerActionExecutor.lexerActions_1.length + 1 | 0);
    lexerActions[_get_lastIndex__339712501(lexerActions)] = lexerAction;
    var tmp$ret$3;
    $l$block_2: {
      var tmp0_toTypedArray_0 = filterNotNull(lexerActions);
      tmp$ret$3 = copyToArray(tmp0_toTypedArray_0);
      break $l$block_2;
    }
    return new LexerActionExecutor(tmp$ret$3);
  };
  Companion_16.$metadata$ = {
    simpleName: 'Companion',
    kind: 'object',
    interfaces: []
  };
  var Companion_instance_16;
  function Companion_getInstance_17() {
    if (Companion_instance_16 == null)
      new Companion_16();
    return Companion_instance_16;
  }
  function LexerActionExecutor(lexerActions) {
    Companion_getInstance_17();
    this.lexerActions_1 = lexerActions;
    var tmp = MurmurHash_getInstance();
    var hash = tmp.initialize$default_diri32_k$(0, 1, null);
    var indexedObject = this.lexerActions_1;
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var lexerAction = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      hash = MurmurHash_getInstance().update_qzj42v_k$(hash, lexerAction);
    }
    this.hashCode_2 = MurmurHash_getInstance().finish_anppvx_k$(hash, this.lexerActions_1.length);
  }
  LexerActionExecutor.prototype._get_lexerActions__1822786330_u58mxm_k$ = function () {
    return this.lexerActions_1;
  };
  LexerActionExecutor.prototype.fixOffsetBeforeMatch_8pxtk3_k$ = function (offset) {
    var updatedLexerActions = null;
    var inductionVariable = 0;
    var last = this.lexerActions_1.length - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp;
        if (this.lexerActions_1[i]._get_isPositionDependent__3195466821_i6m3zv_k$()) {
          var tmp_0 = this.lexerActions_1[i];
          tmp = !(tmp_0 instanceof LexerIndexedCustomAction);
        } else {
          tmp = false;
        }
        if (tmp) {
          if (updatedLexerActions == null) {
            var tmp$ret$1;
            $l$block_0: {
              var tmp0_copyOf_0 = this.lexerActions_1;
              var tmp$ret$0;
              $l$block: {
                tmp$ret$0 = tmp0_copyOf_0;
                break $l$block;
              }
              tmp$ret$1 = tmp$ret$0.slice();
              break $l$block_0;
            }
            updatedLexerActions = tmp$ret$1;
          }
          updatedLexerActions[i] = new LexerIndexedCustomAction(offset, this.lexerActions_1[i]);
        } else {
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
  };
  LexerActionExecutor.prototype.execute_g6nvr7_k$ = function (lexer, input, startIndex) {
    var requiresSeek = false;
    var stopIndex = input.index_1nqriq_k$();
    try {
      var indexedObject = this.lexerActions_1;
      var inductionVariable = 0;
      var last = indexedObject.length;
      while (inductionVariable < last) {
        var lexerAction = indexedObject[inductionVariable];
        inductionVariable = inductionVariable + 1 | 0;
        var mutableLexerAction = lexerAction;
        if (mutableLexerAction instanceof LexerIndexedCustomAction) {
          var offset = mutableLexerAction._get_offset__736931032_c6qzmg_k$();
          input.seek_5aisp4_k$(startIndex + offset | 0);
          mutableLexerAction = mutableLexerAction._get_action__1123534741_ikx8yd_k$();
          requiresSeek = !((startIndex + offset | 0) === stopIndex);
        } else {
          if (mutableLexerAction._get_isPositionDependent__3195466821_i6m3zv_k$()) {
            input.seek_5aisp4_k$(stopIndex);
            requiresSeek = false;
          } else {
          }
        }
        mutableLexerAction.execute_khrieh_k$(lexer);
      }
    }finally {
      if (requiresSeek) {
        input.seek_5aisp4_k$(stopIndex);
      }
    }
  };
  LexerActionExecutor.prototype.hashCode = function () {
    return this.hashCode_2;
  };
  LexerActionExecutor.prototype.equals = function (other) {
    if (other === this) {
      return true;
    } else {
      if (!(other instanceof LexerActionExecutor)) {
        return false;
      } else {
      }
    }
    var other1 = (other == null ? true : other instanceof LexerActionExecutor) ? other : THROW_CCE();
    return this.hashCode_2 === ensureNotNull(other1).hashCode_2 ? contentEquals(this.lexerActions_1, other1.lexerActions_1) : false;
  };
  LexerActionExecutor.$metadata$ = {
    simpleName: 'LexerActionExecutor',
    kind: 'class',
    interfaces: []
  };
  var LexerActionType_CHANNEL_instance;
  var LexerActionType_CUSTOM_instance;
  var LexerActionType_MODE_instance;
  var LexerActionType_MORE_instance;
  var LexerActionType_POP_MODE_instance;
  var LexerActionType_PUSH_MODE_instance;
  var LexerActionType_SKIP_instance;
  var LexerActionType_TYPE_instance;
  function values_1() {
    return [LexerActionType_CHANNEL_getInstance(), LexerActionType_CUSTOM_getInstance(), LexerActionType_MODE_getInstance(), LexerActionType_MORE_getInstance(), LexerActionType_POP_MODE_getInstance(), LexerActionType_PUSH_MODE_getInstance(), LexerActionType_SKIP_getInstance(), LexerActionType_TYPE_getInstance()];
  }
  function valueOf_1(value) {
    switch (value) {
      case 'CHANNEL':
        return LexerActionType_CHANNEL_getInstance();
      case 'CUSTOM':
        return LexerActionType_CUSTOM_getInstance();
      case 'MODE':
        return LexerActionType_MODE_getInstance();
      case 'MORE':
        return LexerActionType_MORE_getInstance();
      case 'POP_MODE':
        return LexerActionType_POP_MODE_getInstance();
      case 'PUSH_MODE':
        return LexerActionType_PUSH_MODE_getInstance();
      case 'SKIP':
        return LexerActionType_SKIP_getInstance();
      case 'TYPE':
        return LexerActionType_TYPE_getInstance();
      default:
        LexerActionType_initEntries();
        THROW_ISE();
        break;
    }
  }
  var LexerActionType_entriesInitialized;
  function LexerActionType_initEntries() {
    if (LexerActionType_entriesInitialized)
      return Unit_getInstance();
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
  function LexerActionType(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  LexerActionType.$metadata$ = {
    simpleName: 'LexerActionType',
    kind: 'class',
    interfaces: []
  };
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
  function LexerChannelAction(channel) {
    this.channel_1 = channel;
  }
  LexerChannelAction.prototype._get_channel__3558637166_c6e3yq_k$ = function () {
    return this.channel_1;
  };
  LexerChannelAction.prototype._get_actionType__3982404603_563ax1_k$ = function () {
    return LexerActionType_CHANNEL_getInstance();
  };
  LexerChannelAction.prototype._get_isPositionDependent__3195466821_i6m3zv_k$ = function () {
    return false;
  };
  LexerChannelAction.prototype.execute_khrieh_k$ = function (lexer) {
    lexer._set_channel__812662498_ugi8aa_k$(this.channel_1);
  };
  LexerChannelAction.prototype.hashCode = function () {
    var tmp = MurmurHash_getInstance();
    var hash = tmp.initialize$default_diri32_k$(0, 1, null);
    hash = MurmurHash_getInstance().update_v7hmy1_k$(hash, this._get_actionType__3982404603_563ax1_k$()._get_ordinal__3363892928_fec5kw_k$());
    hash = MurmurHash_getInstance().update_v7hmy1_k$(hash, this.channel_1);
    return MurmurHash_getInstance().finish_anppvx_k$(hash, 2);
  };
  LexerChannelAction.prototype.equals = function (obj) {
    if (obj === this) {
      return true;
    } else {
      if (!(obj instanceof LexerChannelAction)) {
        return false;
      } else {
      }
    }
    return this.channel_1 === obj.channel_1;
  };
  LexerChannelAction.prototype.toString = function () {
    return 'channel(' + this.channel_1 + ')';
  };
  LexerChannelAction.$metadata$ = {
    simpleName: 'LexerChannelAction',
    kind: 'class',
    interfaces: [LexerAction]
  };
  function LexerCustomAction(ruleIndex, actionIndex) {
    this.ruleIndex_1 = ruleIndex;
    this.actionIndex_1 = actionIndex;
  }
  LexerCustomAction.prototype._get_ruleIndex__1923824091_vte863_k$ = function () {
    return this.ruleIndex_1;
  };
  LexerCustomAction.prototype._get_actionIndex__2870023381_nkdhrf_k$ = function () {
    return this.actionIndex_1;
  };
  LexerCustomAction.prototype._get_actionType__3982404603_563ax1_k$ = function () {
    return LexerActionType_CUSTOM_getInstance();
  };
  LexerCustomAction.prototype._get_isPositionDependent__3195466821_i6m3zv_k$ = function () {
    return true;
  };
  LexerCustomAction.prototype.execute_khrieh_k$ = function (lexer) {
    lexer.action_syfub2_k$(null, this.ruleIndex_1, this.actionIndex_1);
  };
  LexerCustomAction.prototype.hashCode = function () {
    var tmp = MurmurHash_getInstance();
    var hash = tmp.initialize$default_diri32_k$(0, 1, null);
    hash = MurmurHash_getInstance().update_v7hmy1_k$(hash, this._get_actionType__3982404603_563ax1_k$()._get_ordinal__3363892928_fec5kw_k$());
    hash = MurmurHash_getInstance().update_v7hmy1_k$(hash, this.ruleIndex_1);
    hash = MurmurHash_getInstance().update_v7hmy1_k$(hash, this.actionIndex_1);
    return MurmurHash_getInstance().finish_anppvx_k$(hash, 3);
  };
  LexerCustomAction.prototype.equals = function (obj) {
    if (obj === this) {
      return true;
    } else {
      if (!(obj instanceof LexerCustomAction)) {
        return false;
      } else {
      }
    }
    var other = (obj == null ? true : obj instanceof LexerCustomAction) ? obj : THROW_CCE();
    return this.ruleIndex_1 === ensureNotNull(other).ruleIndex_1 ? this.actionIndex_1 === other.actionIndex_1 : false;
  };
  LexerCustomAction.$metadata$ = {
    simpleName: 'LexerCustomAction',
    kind: 'class',
    interfaces: [LexerAction]
  };
  function LexerIndexedCustomAction(offset, action) {
    this.offset_1 = offset;
    this.action_1 = action;
  }
  LexerIndexedCustomAction.prototype._get_offset__736931032_c6qzmg_k$ = function () {
    return this.offset_1;
  };
  LexerIndexedCustomAction.prototype._get_action__1123534741_ikx8yd_k$ = function () {
    return this.action_1;
  };
  LexerIndexedCustomAction.prototype._get_actionType__3982404603_563ax1_k$ = function () {
    return this.action_1._get_actionType__3982404603_563ax1_k$();
  };
  LexerIndexedCustomAction.prototype._get_isPositionDependent__3195466821_i6m3zv_k$ = function () {
    return true;
  };
  LexerIndexedCustomAction.prototype.execute_khrieh_k$ = function (lexer) {
    this.action_1.execute_khrieh_k$(lexer);
  };
  LexerIndexedCustomAction.prototype.hashCode = function () {
    var tmp = MurmurHash_getInstance();
    var hash = tmp.initialize$default_diri32_k$(0, 1, null);
    hash = MurmurHash_getInstance().update_v7hmy1_k$(hash, this.offset_1);
    hash = MurmurHash_getInstance().update_qzj42v_k$(hash, this.action_1);
    return MurmurHash_getInstance().finish_anppvx_k$(hash, 2);
  };
  LexerIndexedCustomAction.prototype.equals = function (obj) {
    if (obj === this) {
      return true;
    } else {
      if (!(obj instanceof LexerIndexedCustomAction)) {
        return false;
      } else {
      }
    }
    var other = (obj == null ? true : obj instanceof LexerIndexedCustomAction) ? obj : THROW_CCE();
    return this.offset_1 === ensureNotNull(other).offset_1 ? equals(this.action_1, other.action_1) : false;
  };
  LexerIndexedCustomAction.$metadata$ = {
    simpleName: 'LexerIndexedCustomAction',
    kind: 'class',
    interfaces: [LexerAction]
  };
  function LexerModeAction(mode) {
    this.mode_1 = mode;
  }
  LexerModeAction.prototype._get_mode__803653896_dah3bc_k$ = function () {
    return this.mode_1;
  };
  LexerModeAction.prototype._get_actionType__3982404603_563ax1_k$ = function () {
    return LexerActionType_MODE_getInstance();
  };
  LexerModeAction.prototype._get_isPositionDependent__3195466821_i6m3zv_k$ = function () {
    return false;
  };
  LexerModeAction.prototype.execute_khrieh_k$ = function (lexer) {
    lexer.mode_oeyrir_k$(this.mode_1);
  };
  LexerModeAction.prototype.hashCode = function () {
    var tmp = MurmurHash_getInstance();
    var hash = tmp.initialize$default_diri32_k$(0, 1, null);
    hash = MurmurHash_getInstance().update_v7hmy1_k$(hash, this._get_actionType__3982404603_563ax1_k$()._get_ordinal__3363892928_fec5kw_k$());
    hash = MurmurHash_getInstance().update_v7hmy1_k$(hash, this.mode_1);
    return MurmurHash_getInstance().finish_anppvx_k$(hash, 2);
  };
  LexerModeAction.prototype.equals = function (obj) {
    if (obj === this) {
      return true;
    } else {
      if (!(obj instanceof LexerModeAction)) {
        return false;
      } else {
      }
    }
    return this.mode_1 === obj.mode_1;
  };
  LexerModeAction.prototype.toString = function () {
    return 'mode(' + this.mode_1 + ')';
  };
  LexerModeAction.$metadata$ = {
    simpleName: 'LexerModeAction',
    kind: 'class',
    interfaces: [LexerAction]
  };
  function Companion_17() {
    Companion_instance_17 = this;
    this.INSTANCE_1 = new LexerMoreAction();
  }
  Companion_17.prototype._get_INSTANCE__2559446_1iuvq_k$ = function () {
    return this.INSTANCE_1;
  };
  Companion_17.$metadata$ = {
    simpleName: 'Companion',
    kind: 'object',
    interfaces: []
  };
  var Companion_instance_17;
  function Companion_getInstance_18() {
    if (Companion_instance_17 == null)
      new Companion_17();
    return Companion_instance_17;
  }
  function LexerMoreAction() {
    Companion_getInstance_18();
  }
  LexerMoreAction.prototype._get_actionType__3982404603_563ax1_k$ = function () {
    return LexerActionType_MORE_getInstance();
  };
  LexerMoreAction.prototype._get_isPositionDependent__3195466821_i6m3zv_k$ = function () {
    return false;
  };
  LexerMoreAction.prototype.execute_khrieh_k$ = function (lexer) {
    lexer.more_hk1t6k_k$();
  };
  LexerMoreAction.prototype.hashCode = function () {
    var tmp = MurmurHash_getInstance();
    var hash = tmp.initialize$default_diri32_k$(0, 1, null);
    hash = MurmurHash_getInstance().update_v7hmy1_k$(hash, this._get_actionType__3982404603_563ax1_k$()._get_ordinal__3363892928_fec5kw_k$());
    return MurmurHash_getInstance().finish_anppvx_k$(hash, 1);
  };
  LexerMoreAction.prototype.equals = function (obj) {
    return obj === this;
  };
  LexerMoreAction.prototype.toString = function () {
    return 'more';
  };
  LexerMoreAction.$metadata$ = {
    simpleName: 'LexerMoreAction',
    kind: 'class',
    interfaces: [LexerAction]
  };
  function Companion_18() {
    Companion_instance_18 = this;
    this.INSTANCE_1 = new LexerPopModeAction();
  }
  Companion_18.prototype._get_INSTANCE__2559446_1iuvq_k$ = function () {
    return this.INSTANCE_1;
  };
  Companion_18.$metadata$ = {
    simpleName: 'Companion',
    kind: 'object',
    interfaces: []
  };
  var Companion_instance_18;
  function Companion_getInstance_19() {
    if (Companion_instance_18 == null)
      new Companion_18();
    return Companion_instance_18;
  }
  function LexerPopModeAction() {
    Companion_getInstance_19();
  }
  LexerPopModeAction.prototype._get_actionType__3982404603_563ax1_k$ = function () {
    return LexerActionType_POP_MODE_getInstance();
  };
  LexerPopModeAction.prototype._get_isPositionDependent__3195466821_i6m3zv_k$ = function () {
    return false;
  };
  LexerPopModeAction.prototype.execute_khrieh_k$ = function (lexer) {
    lexer.popMode_6j8zfw_k$();
    Unit_getInstance();
  };
  LexerPopModeAction.prototype.hashCode = function () {
    var tmp = MurmurHash_getInstance();
    var hash = tmp.initialize$default_diri32_k$(0, 1, null);
    hash = MurmurHash_getInstance().update_v7hmy1_k$(hash, this._get_actionType__3982404603_563ax1_k$()._get_ordinal__3363892928_fec5kw_k$());
    return MurmurHash_getInstance().finish_anppvx_k$(hash, 1);
  };
  LexerPopModeAction.prototype.equals = function (obj) {
    return obj === this;
  };
  LexerPopModeAction.prototype.toString = function () {
    return 'popMode';
  };
  LexerPopModeAction.$metadata$ = {
    simpleName: 'LexerPopModeAction',
    kind: 'class',
    interfaces: [LexerAction]
  };
  function LexerPushModeAction(mode) {
    this.mode_1 = mode;
  }
  LexerPushModeAction.prototype._get_mode__803653896_dah3bc_k$ = function () {
    return this.mode_1;
  };
  LexerPushModeAction.prototype._get_actionType__3982404603_563ax1_k$ = function () {
    return LexerActionType_PUSH_MODE_getInstance();
  };
  LexerPushModeAction.prototype._get_isPositionDependent__3195466821_i6m3zv_k$ = function () {
    return false;
  };
  LexerPushModeAction.prototype.execute_khrieh_k$ = function (lexer) {
    lexer.pushMode_bzuv65_k$(this.mode_1);
  };
  LexerPushModeAction.prototype.hashCode = function () {
    var tmp = MurmurHash_getInstance();
    var hash = tmp.initialize$default_diri32_k$(0, 1, null);
    hash = MurmurHash_getInstance().update_v7hmy1_k$(hash, this._get_actionType__3982404603_563ax1_k$()._get_ordinal__3363892928_fec5kw_k$());
    hash = MurmurHash_getInstance().update_v7hmy1_k$(hash, this.mode_1);
    return MurmurHash_getInstance().finish_anppvx_k$(hash, 2);
  };
  LexerPushModeAction.prototype.equals = function (obj) {
    if (obj === this) {
      return true;
    } else {
      if (!(obj instanceof LexerPushModeAction)) {
        return false;
      } else {
      }
    }
    return this.mode_1 === obj.mode_1;
  };
  LexerPushModeAction.prototype.toString = function () {
    return 'pushMode(' + this.mode_1 + ')';
  };
  LexerPushModeAction.$metadata$ = {
    simpleName: 'LexerPushModeAction',
    kind: 'class',
    interfaces: [LexerAction]
  };
  function Companion_19() {
    Companion_instance_19 = this;
    this.INSTANCE_1 = new LexerSkipAction();
  }
  Companion_19.prototype._get_INSTANCE__2559446_1iuvq_k$ = function () {
    return this.INSTANCE_1;
  };
  Companion_19.$metadata$ = {
    simpleName: 'Companion',
    kind: 'object',
    interfaces: []
  };
  var Companion_instance_19;
  function Companion_getInstance_20() {
    if (Companion_instance_19 == null)
      new Companion_19();
    return Companion_instance_19;
  }
  function LexerSkipAction() {
    Companion_getInstance_20();
  }
  LexerSkipAction.prototype._get_actionType__3982404603_563ax1_k$ = function () {
    return LexerActionType_SKIP_getInstance();
  };
  LexerSkipAction.prototype._get_isPositionDependent__3195466821_i6m3zv_k$ = function () {
    return false;
  };
  LexerSkipAction.prototype.execute_khrieh_k$ = function (lexer) {
    lexer.skip_xudknm_k$();
  };
  LexerSkipAction.prototype.hashCode = function () {
    var tmp = MurmurHash_getInstance();
    var hash = tmp.initialize$default_diri32_k$(0, 1, null);
    hash = MurmurHash_getInstance().update_v7hmy1_k$(hash, this._get_actionType__3982404603_563ax1_k$()._get_ordinal__3363892928_fec5kw_k$());
    return MurmurHash_getInstance().finish_anppvx_k$(hash, 1);
  };
  LexerSkipAction.prototype.equals = function (obj) {
    return obj === this;
  };
  LexerSkipAction.prototype.toString = function () {
    return 'skip';
  };
  LexerSkipAction.$metadata$ = {
    simpleName: 'LexerSkipAction',
    kind: 'class',
    interfaces: [LexerAction]
  };
  function LexerTypeAction(type) {
    this.type_1 = type;
  }
  LexerTypeAction.prototype._get_type__810427985_deia8h_k$ = function () {
    return this.type_1;
  };
  LexerTypeAction.prototype._get_actionType__3982404603_563ax1_k$ = function () {
    return LexerActionType_TYPE_getInstance();
  };
  LexerTypeAction.prototype._get_isPositionDependent__3195466821_i6m3zv_k$ = function () {
    return false;
  };
  LexerTypeAction.prototype.execute_khrieh_k$ = function (lexer) {
    lexer._set_type__595810909_36q4vn_k$(this.type_1);
  };
  LexerTypeAction.prototype.hashCode = function () {
    var tmp = MurmurHash_getInstance();
    var hash = tmp.initialize$default_diri32_k$(0, 1, null);
    hash = MurmurHash_getInstance().update_v7hmy1_k$(hash, this._get_actionType__3982404603_563ax1_k$()._get_ordinal__3363892928_fec5kw_k$());
    hash = MurmurHash_getInstance().update_v7hmy1_k$(hash, this.type_1);
    return MurmurHash_getInstance().finish_anppvx_k$(hash, 2);
  };
  LexerTypeAction.prototype.equals = function (obj) {
    if (obj === this) {
      return true;
    } else {
      if (!(obj instanceof LexerTypeAction)) {
        return false;
      } else {
      }
    }
    return this.type_1 === obj.type_1;
  };
  LexerTypeAction.prototype.toString = function () {
    return 'type(' + this.type_1 + ')';
  };
  LexerTypeAction.$metadata$ = {
    simpleName: 'LexerTypeAction',
    kind: 'class',
    interfaces: [LexerAction]
  };
  function LookaheadEventInfo(decision, configs, predictedAlt, input, startIndex, stopIndex, fullCtx) {
    DecisionEventInfo.call(this, decision, configs, input, startIndex, stopIndex, fullCtx);
    this.predictedAlt_1 = predictedAlt;
  }
  LookaheadEventInfo.prototype._set_predictedAlt__1346411558_2brinq_k$ = function (_set____804775014) {
    this.predictedAlt_1 = _set____804775014;
  };
  LookaheadEventInfo.prototype._get_predictedAlt__2286564378_x7r1ly_k$ = function () {
    return this.predictedAlt_1;
  };
  LookaheadEventInfo.$metadata$ = {
    simpleName: 'LookaheadEventInfo',
    kind: 'class',
    interfaces: []
  };
  function LoopEndState() {
    ATNState.call(this);
    this.loopBackState_1 = null;
  }
  LoopEndState.prototype._set_loopBackState__2314937695_uaz0mh_k$ = function (_set____804775014) {
    this.loopBackState_1 = _set____804775014;
  };
  LoopEndState.prototype._get_loopBackState__1394904043_n2hmuj_k$ = function () {
    return this.loopBackState_1;
  };
  LoopEndState.prototype._get_stateType__2749614150_pk2a4a_k$ = function () {
    return Companion_getInstance_14()._get_LOOP_END__1275857707_l3m23v_k$();
  };
  LoopEndState.$metadata$ = {
    simpleName: 'LoopEndState',
    kind: 'class',
    interfaces: []
  };
  function NotSetTransition(target, set) {
    SetTransition.call(this, target, set);
  }
  NotSetTransition.prototype._get_serializationType__1649189191_r9vuiv_k$ = function () {
    return Companion_getInstance_27()._get_NOT_SET__219735323_3mtouz_k$();
  };
  NotSetTransition.prototype.matches_4cugi_k$ = function (symbol, minVocabSymbol, maxVocabSymbol) {
    return (minVocabSymbol <= symbol ? symbol <= maxVocabSymbol : false) ? !SetTransition.prototype.matches_4cugi_k$.call(this, symbol, minVocabSymbol, maxVocabSymbol) : false;
  };
  NotSetTransition.prototype.toString = function () {
    var tmp$ret$0;
    $l$block: {
      var tmp0_plus_0 = SetTransition.prototype.toString.call(this);
      tmp$ret$0 = '~' + tmp0_plus_0;
      break $l$block;
    }
    return tmp$ret$0;
  };
  NotSetTransition.$metadata$ = {
    simpleName: 'NotSetTransition',
    kind: 'class',
    interfaces: []
  };
  function LexerConfigHashSet() {
    var tmp = Companion_getInstance_33()._get_INSTANCE__2559446_1iuvq_k$();
    AbstractConfigHashSet_init_$Init$(tmp, 0, 0, 6, null, this);
  }
  LexerConfigHashSet.prototype.remove_nikoix_k$ = function (element) {
    {
      throw new NotImplementedError('An operation is not implemented: not implemented');
    }
  };
  LexerConfigHashSet.prototype.remove_8hbkc6_k$ = function (element) {
    if (!(element instanceof ATNConfig))
      return false;
    else {
    }
    return this.remove_nikoix_k$(element instanceof ATNConfig ? element : THROW_CCE());
  };
  LexerConfigHashSet.prototype.remove_8hbkbr_k$ = function (element) {
    return this.remove_nikoix_k$(element instanceof ATNConfig ? element : THROW_CCE());
  };
  LexerConfigHashSet.prototype.containsAll_8sw0hn_k$ = function (elements) {
    {
      throw new NotImplementedError('An operation is not implemented: not implemented');
    }
  };
  LexerConfigHashSet.prototype.containsAll_jr3fla_k$ = function (elements) {
    return this.containsAll_8sw0hn_k$(elements);
  };
  LexerConfigHashSet.prototype.containsAll_jr3fy7_k$ = function (elements) {
    return this.containsAll_8sw0hn_k$(elements);
  };
  LexerConfigHashSet.prototype.retainAll_3wak0l_k$ = function (elements) {
    {
      throw new NotImplementedError('An operation is not implemented: not implemented');
    }
  };
  LexerConfigHashSet.prototype.retainAll_j44sd0_k$ = function (elements) {
    return this.retainAll_3wak0l_k$(elements);
  };
  LexerConfigHashSet.prototype.retainAll_j44spx_k$ = function (elements) {
    return this.retainAll_3wak0l_k$(elements);
  };
  LexerConfigHashSet.$metadata$ = {
    simpleName: 'LexerConfigHashSet',
    kind: 'class',
    interfaces: []
  };
  function OrderedATNConfigSet() {
    ATNConfigSet_init_$Init$(false, 1, null, this);
    this._set_configLookup__2926290299_931q09_k$(new LexerConfigHashSet());
  }
  OrderedATNConfigSet.$metadata$ = {
    simpleName: 'OrderedATNConfigSet',
    kind: 'class',
    interfaces: []
  };
  function ParseInfo(atnSimulator) {
    this.atnSimulator_1 = atnSimulator;
  }
  ParseInfo.prototype._get_atnSimulator__4038770370_48j6ta_k$ = function () {
    return this.atnSimulator_1;
  };
  ParseInfo.prototype._get_decisionInfo__3509455841_czo8in_k$ = function () {
    return ensureNotNull(this.atnSimulator_1._get_decisionInfo__3509455841_czo8in_k$());
  };
  ParseInfo.prototype._get_llDecisions__2101574138_yr80ze_k$ = function () {
    var decisions = this.atnSimulator_1._get_decisionInfo__3509455841_czo8in_k$();
    var LL = ArrayList_init_$Create$_0();
    var inductionVariable = 0;
    var last = ensureNotNull(decisions).length - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var fallBack = ensureNotNull(decisions[i])._get_LL_Fallback__2088973008_yjpxw0_k$();
        if (fallBack.compareTo_n4fqi2_k$(new Long(0, 0)) > 0) {
          LL.add_1j60pz_k$(i);
          Unit_getInstance();
        }
      }
       while (inductionVariable <= last);
    return LL;
  };
  ParseInfo.prototype._get_totalTimeInPrediction__1032405004_h2o0ss_k$ = function () {
    var decisions = this.atnSimulator_1._get_decisionInfo__3509455841_czo8in_k$();
    var t = new Long(0, 0);
    var inductionVariable = 0;
    var last = ensureNotNull(decisions).length - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        t = t.plus_u6jwas_k$(ensureNotNull(decisions[i])._get_timeInPrediction__1108615146_ic1gx6_k$());
      }
       while (inductionVariable <= last);
    return t;
  };
  ParseInfo.prototype._get_totalSLLLookaheadOps__3205509740_i0mutw_k$ = function () {
    var decisions = this.atnSimulator_1._get_decisionInfo__3509455841_czo8in_k$();
    var k = new Long(0, 0);
    var inductionVariable = 0;
    var last = ensureNotNull(decisions).length - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        k = k.plus_u6jwas_k$(ensureNotNull(decisions[i])._get_SLL_TotalLook__4268880890_fj4ee_k$());
      }
       while (inductionVariable <= last);
    return k;
  };
  ParseInfo.prototype._get_totalLLLookaheadOps__879019613_ejcfvh_k$ = function () {
    var decisions = this.atnSimulator_1._get_decisionInfo__3509455841_czo8in_k$();
    var k = new Long(0, 0);
    var inductionVariable = 0;
    var last = ensureNotNull(decisions).length - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        k = k.plus_u6jwas_k$(ensureNotNull(decisions[i])._get_LL_TotalLook__2495108583_trl7vd_k$());
      }
       while (inductionVariable <= last);
    return k;
  };
  ParseInfo.prototype._get_totalSLLATNLookaheadOps__1536810197_pez6c5_k$ = function () {
    var decisions = this.atnSimulator_1._get_decisionInfo__3509455841_czo8in_k$();
    var k = new Long(0, 0);
    var inductionVariable = 0;
    var last = ensureNotNull(decisions).length - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        k = k.plus_u6jwas_k$(ensureNotNull(decisions[i])._get_SLL_ATNTransitions__4131106940_2pk3gk_k$());
      }
       while (inductionVariable <= last);
    return k;
  };
  ParseInfo.prototype._get_totalLLATNLookaheadOps__956692292_ftl8hw_k$ = function () {
    var decisions = this.atnSimulator_1._get_decisionInfo__3509455841_czo8in_k$();
    var k = new Long(0, 0);
    var inductionVariable = 0;
    var last = ensureNotNull(decisions).length - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        k = k.plus_u6jwas_k$(ensureNotNull(decisions[i])._get_LL_ATNTransitions__1983281839_wssm27_k$());
      }
       while (inductionVariable <= last);
    return k;
  };
  ParseInfo.prototype._get_totalATNLookaheadOps__1969585668_wkn210_k$ = function () {
    var decisions = this.atnSimulator_1._get_decisionInfo__3509455841_czo8in_k$();
    var k = new Long(0, 0);
    var inductionVariable = 0;
    var last = ensureNotNull(decisions).length - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        k = k.plus_u6jwas_k$(ensureNotNull(decisions[i])._get_SLL_ATNTransitions__4131106940_2pk3gk_k$());
        k = k.plus_u6jwas_k$(ensureNotNull(decisions[i])._get_LL_ATNTransitions__1983281839_wssm27_k$());
      }
       while (inductionVariable <= last);
    return k;
  };
  ParseInfo.$metadata$ = {
    simpleName: 'ParseInfo',
    kind: 'class',
    interfaces: []
  };
  function ParserATNSimulator_init_$Init$(atn, decisionToDFA, sharedContextCache, $this) {
    ParserATNSimulator.call($this, null, atn, decisionToDFA, sharedContextCache);
    return $this;
  }
  function ParserATNSimulator_init_$Create$(atn, decisionToDFA, sharedContextCache) {
    return ParserATNSimulator_init_$Init$(atn, decisionToDFA, sharedContextCache, Object.create(ParserATNSimulator.prototype));
  }
  function Companion_20() {
    Companion_instance_20 = this;
    this.debug_1 = false;
    this.debug_list_atn_decisions_1 = false;
    this.dfa_debug_1 = false;
    this.retry_debug_1 = false;
  }
  Companion_20.prototype._get_debug__3171493854_ikvxnm_k$ = function () {
    return this.debug_1;
  };
  Companion_20.prototype._get_debug_list_atn_decisions__147202701_2fn2bx_k$ = function () {
    return this.debug_list_atn_decisions_1;
  };
  Companion_20.prototype._get_dfa_debug__3760557694_8u6936_k$ = function () {
    return this.dfa_debug_1;
  };
  Companion_20.prototype._get_retry_debug__2968517397_lxqfaj_k$ = function () {
    return this.retry_debug_1;
  };
  Companion_20.prototype.getUniqueAlt_ouzhyh_k$ = function (configs) {
    var alt = Companion_getInstance_8()._get_INVALID_ALT_NUMBER__3632704068_ayalks_k$();
    var tmp0_iterator = configs.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var c = tmp0_iterator.next_20eer_k$();
      if (alt === Companion_getInstance_8()._get_INVALID_ALT_NUMBER__3632704068_ayalks_k$()) {
        alt = c._get_alt__856848392_e658g8_k$();
      } else if (!(c._get_alt__856848392_e658g8_k$() === alt)) {
        return Companion_getInstance_8()._get_INVALID_ALT_NUMBER__3632704068_ayalks_k$();
      }
    }
    return alt;
  };
  Companion_20.$metadata$ = {
    simpleName: 'Companion',
    kind: 'object',
    interfaces: []
  };
  var Companion_instance_20;
  function Companion_getInstance_21() {
    if (Companion_instance_20 == null)
      new Companion_20();
    return Companion_instance_20;
  }
  function ParserATNSimulator(parser, atn, decisionToDFA, sharedContextCache) {
    Companion_getInstance_21();
    ATNSimulator.call(this, atn, sharedContextCache);
    this.parser_1 = parser;
    this.decisionToDFA_1 = decisionToDFA;
    this.predictionMode_1 = PredictionMode_LL_getInstance();
    this.mergeCache_1 = null;
    this._input_1 = null;
    this._startIndex_1 = 0;
    this._outerContext_1 = null;
    this._dfa_1 = null;
  }
  ParserATNSimulator.prototype._get_parser__1492371148_ooioy4_k$ = function () {
    return this.parser_1;
  };
  ParserATNSimulator.prototype._get_decisionToDFA__1733740713_so82w9_k$ = function () {
    return this.decisionToDFA_1;
  };
  ParserATNSimulator.prototype.reset_5tn5dq_k$ = function () {
    {
      throw new NotImplementedError('An operation is not implemented: not implemented');
    }
  };
  ParserATNSimulator.prototype._set_predictionMode__1929837189_qltiju_k$ = function (_set____804775014) {
    this.predictionMode_1 = _set____804775014;
  };
  ParserATNSimulator.prototype._get_predictionMode__3473565049_dl1i13_k$ = function () {
    return this.predictionMode_1;
  };
  ParserATNSimulator.prototype._set_mergeCache__3036025517_83lppj_k$ = function (_set____804775014) {
    this.mergeCache_1 = _set____804775014;
  };
  ParserATNSimulator.prototype._get_mergeCache__2125272993_z5bz4x_k$ = function () {
    return this.mergeCache_1;
  };
  ParserATNSimulator.prototype._set__input__3721363116_1ix66a_k$ = function (_set____804775014) {
    this._input_1 = _set____804775014;
  };
  ParserATNSimulator.prototype._get__input__3809942944_80rr6o_k$ = function () {
    return this._input_1;
  };
  ParserATNSimulator.prototype._set__startIndex__1337249462_fq5jqy_k$ = function (_set____804775014) {
    this._startIndex_1 = _set____804775014;
  };
  ParserATNSimulator.prototype._get__startIndex__3168692290_imjzcu_k$ = function () {
    return this._startIndex_1;
  };
  ParserATNSimulator.prototype._set__outerContext__3616699922_9cfuzb_k$ = function (_set____804775014) {
    this._outerContext_1 = _set____804775014;
  };
  ParserATNSimulator.prototype._get__outerContext__2696666270_qfl4yq_k$ = function () {
    return this._outerContext_1;
  };
  ParserATNSimulator.prototype._set__dfa__575781623_yy8j0u_k$ = function (_set____804775014) {
    this._dfa_1 = _set____804775014;
  };
  ParserATNSimulator.prototype._get__dfa__790398699_d2kzjf_k$ = function () {
    return this._dfa_1;
  };
  ParserATNSimulator.prototype.clearDFA_ekw7r5_k$ = function () {
    var inductionVariable = 0;
    var last = this.decisionToDFA_1.length - 1 | 0;
    if (inductionVariable <= last)
      do {
        var d = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        this.decisionToDFA_1[d] = new DFA(ensureNotNull(this._get_atn__856855894_e65e8m_k$().getDecisionState_m2smv2_k$(d)), d);
      }
       while (inductionVariable <= last);
  };
  ParserATNSimulator.prototype.adaptivePredict_qwnokw_k$ = function (input, decision, outerContext) {
    var outerContext_0 = outerContext;
    if (Companion_getInstance_21().debug_1 ? true : Companion_getInstance_21().debug_list_atn_decisions_1) {
      println('adaptivePredict decision ' + decision + ' exec LA(1)==' + this.getLookaheadName_xoo9tn_k$(input) + ' line ' + ensureNotNull(input.LT_6crwc9_k$(1))._get_line__802561239_d9to7r_k$() + ':' + ensureNotNull(input.LT_6crwc9_k$(1))._get_charPositionInLine__2377044051_vpvr1p_k$());
    }
    this._input_1 = input;
    this._startIndex_1 = input.index_1nqriq_k$();
    this._outerContext_1 = outerContext_0;
    var dfa = this.decisionToDFA_1[decision];
    this._dfa_1 = dfa;
    var m = input.mark_1zob1_k$();
    var index = this._startIndex_1;
    try {
      var s0;
      if (dfa._get_isPrecedenceDfa__2261942470_xmerzu_k$()) {
        s0 = dfa.getPrecedenceStartState_7o1dte_k$(ensureNotNull(this.parser_1)._get_precedence__3064254401_kcqg5b_k$());
      } else {
        s0 = dfa._get_s0__1413128974_ndc9am_k$();
      }
      if (s0 == null) {
        if (outerContext_0 == null)
          outerContext_0 = _get_EMPTY_RULECTX__1328169848();
        if (Companion_getInstance_21().debug_1 ? true : Companion_getInstance_21().debug_list_atn_decisions_1) {
          var tmp = 'predictATN decision ' + dfa._get_decision__1839254383_uf1lrj_k$() + ' exec LA(1)==' + this.getLookaheadName_xoo9tn_k$(input) + ', outerContext=';
          var tmp_0 = ensureNotNull(outerContext_0);
          outMessage(tmp + tmp_0.toString$default_tsakt8_k$(this.parser_1, null, 2, null));
        }
        var fullCtx = false;
        var s0_closure = this.computeStartState_78tw6o_k$(dfa._get_atnStartState__171174855_2twvd3_k$(), _get_EMPTY_RULECTX__1328169848(), fullCtx);
        if (dfa._get_isPrecedenceDfa__2261942470_xmerzu_k$()) {
          ensureNotNull(dfa._get_s0__1413128974_ndc9am_k$())._set_configs__3094864948_rn93q3_k$(s0_closure);
          s0_closure = this.applyPrecedenceFilter_k2l7l1_k$(s0_closure);
          s0 = this.addDFAState_32ru9u_k$(dfa, DFAState_init_$Create$_1(s0_closure));
          dfa.setPrecedenceStartState_dngz1p_k$(ensureNotNull(this.parser_1)._get_precedence__3064254401_kcqg5b_k$(), s0);
        } else {
          s0 = this.addDFAState_32ru9u_k$(dfa, DFAState_init_$Create$_1(s0_closure));
          dfa._set_s0__3473238554_l2xee_k$(s0);
        }
      }
      var alt = this.execATN_xhfvyj_k$(dfa, s0, input, index, ensureNotNull(outerContext_0));
      if (Companion_getInstance_21().debug_1)
        outMessage('DFA after predictATN: ' + dfa.toString_dmzcgh_k$(ensureNotNull(this.parser_1)._get_vocabulary__3716553829_9kdeor_k$()));
      return alt;
    }finally {
      this.mergeCache_1 = null;
      this._dfa_1 = null;
      input.seek_5aisp4_k$(index);
      input.release_knbvef_k$(m);
    }
  };
  ParserATNSimulator.prototype.execATN_xhfvyj_k$ = function (dfa, s0, input, startIndex, outerContext) {
    if (Companion_getInstance_21().debug_1 ? true : Companion_getInstance_21().debug_list_atn_decisions_1) {
      outMessage('execATN decision ' + dfa._get_decision__1839254383_uf1lrj_k$() + ' exec LA(1)==' + this.getLookaheadName_xoo9tn_k$(input) + ' line ' + ensureNotNull(input.LT_6crwc9_k$(1))._get_line__802561239_d9to7r_k$() + ':' + ensureNotNull(input.LT_6crwc9_k$(1))._get_charPositionInLine__2377044051_vpvr1p_k$());
    }
    var previousD = s0;
    if (Companion_getInstance_21().debug_1)
      println('s0 = ' + s0);
    var t = input.LA_y7f82c_k$(1);
    while (true) {
      var D = this.getExistingTargetState_geonx8_k$(previousD, t);
      if (D == null) {
        D = this.computeTargetState_m0jg9l_k$(dfa, previousD, t);
      }
      if (D === Companion_getInstance_13()._get_ERROR__2265929449_xk1bmf_k$()) {
        var e = this.noViableAlt_rmfre_k$(input, outerContext, ensureNotNull(previousD._get_configs__1545872320_pkdeps_k$()), startIndex);
        input.seek_5aisp4_k$(startIndex);
        var alt = this.getSynValidOrSemInvalidAltThatFinishedDecisionEntryRule_txytz_k$(ensureNotNull(previousD._get_configs__1545872320_pkdeps_k$()), outerContext);
        if (!(alt === Companion_getInstance_8()._get_INVALID_ALT_NUMBER__3632704068_ayalks_k$())) {
          return alt;
        }
        throw e;
      }
      if (ensureNotNull(D)._get_requiresFullContext__741615935_c9jein_k$() ? !this.predictionMode_1.equals(PredictionMode_SLL_getInstance()) : false) {
        var conflictingAlts = ensureNotNull(ensureNotNull(D)._get_configs__1545872320_pkdeps_k$())._get_conflictingAlts__3543001207_cfp8qx_k$();
        if (!(ensureNotNull(D)._get_predicates__4029970031_4drt75_k$() == null)) {
          if (Companion_getInstance_21().debug_1)
            println('DFA state has preds in DFA sim LL failover');
          var conflictIndex = input.index_1nqriq_k$();
          if (!(conflictIndex === startIndex)) {
            input.seek_5aisp4_k$(startIndex);
          }
          conflictingAlts = this.evalSemanticContext_fx2e3l_k$(ensureNotNull(ensureNotNull(D)._get_predicates__4029970031_4drt75_k$()), outerContext, true);
          if (conflictingAlts.cardinality_dz7uku_k$() === 1) {
            if (Companion_getInstance_21().debug_1)
              println('Full LL avoided');
            return conflictingAlts.nextSetBit_v9xw6b_k$(0);
          }
          if (!(conflictIndex === startIndex)) {
            input.seek_5aisp4_k$(conflictIndex);
          }
        }
        if (Companion_getInstance_21().dfa_debug_1)
          println('ctx sensitive state ' + outerContext + ' in ' + D);
        var fullCtx = true;
        var s0_closure = this.computeStartState_78tw6o_k$(dfa._get_atnStartState__171174855_2twvd3_k$(), outerContext, fullCtx);
        this.reportAttemptingFullContext_jlqo5_k$(dfa, ensureNotNull(conflictingAlts), ensureNotNull(ensureNotNull(D)._get_configs__1545872320_pkdeps_k$()), startIndex, input.index_1nqriq_k$());
        return this.execATNWithFullContext_hl27i4_k$(dfa, D, s0_closure, input, startIndex, outerContext);
      }
      if (ensureNotNull(D)._get_isAcceptState__1730096082_sm1yoi_k$()) {
        if (ensureNotNull(D)._get_predicates__4029970031_4drt75_k$() == null) {
          return ensureNotNull(D)._get_prediction__4047198684_43ijhg_k$();
        }
        var stopIndex = input.index_1nqriq_k$();
        input.seek_5aisp4_k$(startIndex);
        var alts = this.evalSemanticContext_fx2e3l_k$(ensureNotNull(ensureNotNull(D)._get_predicates__4029970031_4drt75_k$()), outerContext, true);
        var tmp0_subject = alts.cardinality_dz7uku_k$();
        switch (tmp0_subject) {
          case 0:
            throw this.noViableAlt_rmfre_k$(input, outerContext, ensureNotNull(ensureNotNull(D)._get_configs__1545872320_pkdeps_k$()), startIndex);
          case 1:
            return alts.nextSetBit_v9xw6b_k$(0);
          default:
            this.reportAmbiguity_jkxs6t_k$(dfa, D, startIndex, stopIndex, false, alts, ensureNotNull(ensureNotNull(D)._get_configs__1545872320_pkdeps_k$()));
            return alts.nextSetBit_v9xw6b_k$(0);
        }
      }
      previousD = D;
      if (!(t === Companion_getInstance_3()._get_EOF__855984949_e5mq7p_k$())) {
        input.consume_spbz2t_k$();
        t = input.LA_y7f82c_k$(1);
      }
    }
  };
  ParserATNSimulator.prototype.getExistingTargetState_geonx8_k$ = function (previousD, t) {
    var edges = previousD._get_edges__3199333435_i4b8hx_k$();
    var tmp;
    if ((edges == null ? true : (t + 1 | 0) < 0) ? true : (t + 1 | 0) >= ensureNotNull(edges).length) {
      tmp = null;
    } else {
      tmp = ensureNotNull(edges)[t + 1 | 0];
    }
    return tmp;
  };
  ParserATNSimulator.prototype.computeTargetState_m0jg9l_k$ = function (dfa, previousD, t) {
    var reach = this.computeReachSet_bvy55g_k$(ensureNotNull(previousD._get_configs__1545872320_pkdeps_k$()), t, false);
    if (reach == null) {
      this.addDFAEdge_k0l8p_k$(dfa, previousD, t, Companion_getInstance_13()._get_ERROR__2265929449_xk1bmf_k$());
      Unit_getInstance();
      return Companion_getInstance_13()._get_ERROR__2265929449_xk1bmf_k$();
    }
    var D = DFAState_init_$Create$_1(reach);
    var predictedAlt = Companion_getInstance_21().getUniqueAlt_ouzhyh_k$(ensureNotNull(reach));
    if (Companion_getInstance_21().debug_1) {
      var altSubSets = Companion_getInstance_24().getConflictingAltSubsets_52bqy1_k$(ensureNotNull(reach));
      println('SLL altSubSets=' + altSubSets + ', configs=' + reach + ', predict=' + predictedAlt + ', allSubsetsConflict=' + Companion_getInstance_24().allSubsetsConflict_7rq851_k$(altSubSets) + ', conflictingAlts=' + this.getConflictingAlts_3wk4au_k$(reach));
    }
    if (!(predictedAlt === Companion_getInstance_8()._get_INVALID_ALT_NUMBER__3632704068_ayalks_k$())) {
      ensureNotNull(D)._set_isAcceptState__2650129734_9h16al_k$(true);
      ensureNotNull(ensureNotNull(D)._get_configs__1545872320_pkdeps_k$())._set_uniqueAlt__1706807469_hhfhgd_k$(predictedAlt);
      ensureNotNull(D)._set_prediction__662983912_tglolk_k$(predictedAlt);
    } else if (Companion_getInstance_24().hasSLLConflictTerminatingPrediction_srhtvr_k$(this.predictionMode_1, reach)) {
      ensureNotNull(ensureNotNull(D)._get_configs__1545872320_pkdeps_k$())._set_conflictingAlts__2932077803_cz8iee_k$(this.getConflictingAlts_3wk4au_k$(reach));
      ensureNotNull(D)._set_requiresFullContext__4232502195_6i8afq_k$(true);
      ensureNotNull(D)._set_isAcceptState__2650129734_9h16al_k$(true);
      ensureNotNull(D)._set_prediction__662983912_tglolk_k$(ensureNotNull(ensureNotNull(ensureNotNull(D)._get_configs__1545872320_pkdeps_k$())._get_conflictingAlts__3543001207_cfp8qx_k$()).nextSetBit_v9xw6b_k$(0));
    }
    if (ensureNotNull(D)._get_isAcceptState__1730096082_sm1yoi_k$() ? ensureNotNull(ensureNotNull(D)._get_configs__1545872320_pkdeps_k$())._get_hasSemanticContext__2769500_1ncyk_k$() : false) {
      this.predicateDFAState_z4xs40_k$(D, this._get_atn__856855894_e65e8m_k$().getDecisionState_m2smv2_k$(dfa._get_decision__1839254383_uf1lrj_k$()));
      if (!(ensureNotNull(D)._get_predicates__4029970031_4drt75_k$() == null)) {
        ensureNotNull(D)._set_prediction__662983912_tglolk_k$(Companion_getInstance_8()._get_INVALID_ALT_NUMBER__3632704068_ayalks_k$());
      }
    }
    D = this.addDFAEdge_k0l8p_k$(dfa, previousD, t, D);
    return D;
  };
  ParserATNSimulator.prototype.predicateDFAState_z4xs40_k$ = function (dfaState, decisionState) {
    var nalts = ensureNotNull(decisionState)._get_numberOfTransitions__3931454387_60fcct_k$();
    var altsToCollectPredsFrom = this.getConflictingAltsOrUniqueAlt_o4f68q_k$(ensureNotNull(dfaState._get_configs__1545872320_pkdeps_k$()));
    var altToPred = this.getPredsForAmbigAlts_pm0kh6_k$(altsToCollectPredsFrom, ensureNotNull(dfaState._get_configs__1545872320_pkdeps_k$()), nalts);
    if (!(altToPred == null)) {
      dfaState._set_predicates__645755259_mgrtp8_k$(this.getPredicatePredictions_eqxoav_k$(altsToCollectPredsFrom, altToPred));
      dfaState._set_prediction__662983912_tglolk_k$(Companion_getInstance_8()._get_INVALID_ALT_NUMBER__3632704068_ayalks_k$());
    } else {
      dfaState._set_prediction__662983912_tglolk_k$(altsToCollectPredsFrom.nextSetBit_v9xw6b_k$(0));
    }
  };
  ParserATNSimulator.prototype.execATNWithFullContext_hl27i4_k$ = function (dfa, D, s0, input, startIndex, outerContext) {
    if (Companion_getInstance_21().debug_1 ? true : Companion_getInstance_21().debug_list_atn_decisions_1) {
      println('execATNWithFullContext ' + s0);
    }
    var fullCtx = true;
    var foundExactAmbig = false;
    var reach = null;
    var previous = s0;
    input.seek_5aisp4_k$(startIndex);
    var t = input.LA_y7f82c_k$(1);
    var predictedAlt;
    $l$loop_1: while (true) {
      reach = this.computeReachSet_bvy55g_k$(previous, t, fullCtx);
      if (reach == null) {
        var e = this.noViableAlt_rmfre_k$(input, outerContext, previous, startIndex);
        input.seek_5aisp4_k$(startIndex);
        var alt = this.getSynValidOrSemInvalidAltThatFinishedDecisionEntryRule_txytz_k$(previous, outerContext);
        if (!(alt === Companion_getInstance_8()._get_INVALID_ALT_NUMBER__3632704068_ayalks_k$())) {
          return alt;
        }
        throw e;
      }
      var altSubSets = Companion_getInstance_24().getConflictingAltSubsets_52bqy1_k$(ensureNotNull(reach));
      if (Companion_getInstance_21().debug_1) {
        println('LL altSubSets=' + altSubSets + ', predict=' + Companion_getInstance_24().getUniqueAlt_9phpqj_k$(altSubSets) + ', resolvesToJustOneViableAlt=' + Companion_getInstance_24().resolvesToJustOneViableAlt_60ddtj_k$(altSubSets));
      }
      ensureNotNull(reach)._set_uniqueAlt__1706807469_hhfhgd_k$(Companion_getInstance_21().getUniqueAlt_ouzhyh_k$(ensureNotNull(reach)));
      if (!(ensureNotNull(reach)._get_uniqueAlt__3478543673_di2shz_k$() === Companion_getInstance_8()._get_INVALID_ALT_NUMBER__3632704068_ayalks_k$())) {
        predictedAlt = ensureNotNull(reach)._get_uniqueAlt__3478543673_di2shz_k$();
        break $l$loop_1;
      }
      if (!this.predictionMode_1.equals(PredictionMode_LL_EXACT_AMBIG_DETECTION_getInstance())) {
        predictedAlt = Companion_getInstance_24().resolvesToJustOneViableAlt_60ddtj_k$(altSubSets);
        if (!(predictedAlt === Companion_getInstance_8()._get_INVALID_ALT_NUMBER__3632704068_ayalks_k$())) {
          break $l$loop_1;
        }
      } else {
        if (Companion_getInstance_24().allSubsetsConflict_7rq851_k$(altSubSets) ? Companion_getInstance_24().allSubsetsEqual_pv8gvr_k$(altSubSets) : false) {
          foundExactAmbig = true;
          predictedAlt = Companion_getInstance_24().getSingleViableAlt_294fjj_k$(altSubSets);
          break $l$loop_1;
        }
      }
      previous = reach;
      if (!(t === Companion_getInstance_3()._get_EOF__855984949_e5mq7p_k$())) {
        input.consume_spbz2t_k$();
        t = input.LA_y7f82c_k$(1);
      }
    }
    if (!(ensureNotNull(reach)._get_uniqueAlt__3478543673_di2shz_k$() === Companion_getInstance_8()._get_INVALID_ALT_NUMBER__3632704068_ayalks_k$())) {
      this.reportContextSensitivity_riba8m_k$(dfa, predictedAlt, reach, startIndex, input.index_1nqriq_k$());
      return predictedAlt;
    }
    this.reportAmbiguity_jkxs6t_k$(dfa, D, startIndex, input.index_1nqriq_k$(), foundExactAmbig, ensureNotNull(reach)._get_alts__792498081_d3tzfl_k$(), reach);
    return predictedAlt;
  };
  ParserATNSimulator.prototype.computeReachSet_bvy55g_k$ = function (closure, t, fullCtx) {
    if (Companion_getInstance_21().debug_1)
      println('in computeReachSet, starting closure: ' + closure);
    if (this.mergeCache_1 == null) {
      this.mergeCache_1 = new DoubleKeyMap();
    }
    var intermediate = new ATNConfigSet(fullCtx);
    var skippedStopStates = null;
    var tmp0_iterator = closure.iterator_jk1svi_k$();
    $l$loop: while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var c = tmp0_iterator.next_20eer_k$();
      if (Companion_getInstance_21().debug_1)
        println('testing ' + this.getTokenName_1zgour_k$(t) + ' at ' + c.toString());
      var tmp = c._get_state__3614753120_b8zcm8_k$();
      if (tmp instanceof RuleStopState) {
        assert(ensureNotNull(c._get_context__1558698818_ps0bpe_k$())._get_isEmpty__1500737838_oti0q6_k$());
        if (fullCtx ? true : t === Companion_getInstance_3()._get_EOF__855984949_e5mq7p_k$()) {
          if (skippedStopStates == null) {
            skippedStopStates = ArrayList_init_$Create$_0();
          }
          skippedStopStates.add_1j60pz_k$(c);
          Unit_getInstance();
        }
        continue $l$loop;
      } else {
      }
      var n = c._get_state__3614753120_b8zcm8_k$()._get_numberOfTransitions__3931454387_60fcct_k$();
      var inductionVariable = 0;
      if (inductionVariable < n)
        do {
          var ti = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var trans = c._get_state__3614753120_b8zcm8_k$().transition_bdhd2s_k$(ti);
          var target = this.getReachableTarget_4quf4c_k$(trans, t);
          if (!(target == null)) {
            intermediate.add_atdc5z_k$(ATNConfig_init_$Create$_5(c, target, null, null, 12, null), this.mergeCache_1);
            Unit_getInstance();
          }
        }
         while (inductionVariable < n);
    }
    var reach = null;
    if (skippedStopStates == null ? !(t === Companion_getInstance_6()._get_EOF__855984949_e5mq7p_k$()) : false) {
      if (intermediate._get_size__809037418_ddoh9m_k$() === 1) {
        reach = intermediate;
      } else if (!(Companion_getInstance_21().getUniqueAlt_ouzhyh_k$(intermediate) === Companion_getInstance_8()._get_INVALID_ALT_NUMBER__3632704068_ayalks_k$())) {
        reach = intermediate;
      }
    }
    if (reach == null) {
      reach = new ATNConfigSet(fullCtx);
      var closureBusy = HashSet_init_$Create$_0();
      var treatEofAsEpsilon = t === Companion_getInstance_6()._get_EOF__855984949_e5mq7p_k$();
      var tmp2_iterator = intermediate.iterator_jk1svi_k$();
      while (tmp2_iterator.hasNext_bitz1p_k$()) {
        var c_0 = tmp2_iterator.next_20eer_k$();
        this.closure_1p03jf_k$(c_0, reach, closureBusy, false, fullCtx, treatEofAsEpsilon);
      }
    }
    if (t === Companion_getInstance_3()._get_EOF__855984949_e5mq7p_k$()) {
      reach = this.removeAllConfigsNotInRuleStopState_i3je52_k$(reach, reach === intermediate);
    }
    if (!(skippedStopStates == null) ? !fullCtx ? true : !Companion_getInstance_24().hasConfigInRuleStopState_un4gxz_k$(ensureNotNull(reach)) : false) {
      assert(!skippedStopStates.isEmpty_y1axqb_k$());
      var tmp3_iterator = skippedStopStates.iterator_jk1svi_k$();
      while (tmp3_iterator.hasNext_bitz1p_k$()) {
        var c_1 = tmp3_iterator.next_20eer_k$();
        ensureNotNull(reach).add_atdc5z_k$(c_1, this.mergeCache_1);
        Unit_getInstance();
      }
    }
    return ensureNotNull(reach).isEmpty_y1axqb_k$() ? null : reach;
  };
  ParserATNSimulator.prototype.removeAllConfigsNotInRuleStopState_i3je52_k$ = function (configs, lookToEndOfRule) {
    if (Companion_getInstance_24().allConfigsInRuleStopStates_8x5qwa_k$(configs)) {
      return configs;
    }
    var result = new ATNConfigSet(configs._get_fullCtx__3456554233_dv63nr_k$());
    var tmp0_iterator = configs.iterator_jk1svi_k$();
    $l$loop: while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var config = tmp0_iterator.next_20eer_k$();
      var tmp = config._get_state__3614753120_b8zcm8_k$();
      if (tmp instanceof RuleStopState) {
        result.add_atdc5z_k$(config, this.mergeCache_1);
        Unit_getInstance();
        continue $l$loop;
      } else {
      }
      if (lookToEndOfRule ? config._get_state__3614753120_b8zcm8_k$().onlyHasEpsilonTransitions_stt9um_k$() : false) {
        var nextTokens = this._get_atn__856855894_e65e8m_k$().nextTokens_z4h83x_k$(config._get_state__3614753120_b8zcm8_k$());
        if (ensureNotNull(nextTokens).contains_1pg60y_k$(Companion_getInstance_6()._get_EPSILON__2552669447_stbhmh_k$())) {
          var endOfRuleState = ensureNotNull(this._get_atn__856855894_e65e8m_k$()._get_ruleToStopState__2910432825_mwbdmv_k$())[config._get_state__3614753120_b8zcm8_k$()._get_ruleIndex__1923824091_vte863_k$()];
          var tmp_0 = ensureNotNull(endOfRuleState);
          result.add_atdc5z_k$(ATNConfig_init_$Create$_5(config, tmp_0, null, null, 12, null), this.mergeCache_1);
          Unit_getInstance();
        }
      }
    }
    return result;
  };
  ParserATNSimulator.prototype.computeStartState_78tw6o_k$ = function (p, ctx, fullCtx) {
    var initialContext = Companion_getInstance_22().fromRuleContext_vm7fqt_k$(this._get_atn__856855894_e65e8m_k$(), ctx);
    var configs = new ATNConfigSet(fullCtx);
    var inductionVariable = 0;
    var last = p._get_numberOfTransitions__3931454387_60fcct_k$();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var target = p.transition_bdhd2s_k$(i)._get_target__747061146_ccs42i_k$();
        var tmp = ensureNotNull(target);
        var tmp_0 = i + 1 | 0;
        var c = ATNConfig_init_$Create$_1(tmp, tmp_0, initialContext, null, 8, null);
        var closureBusy = HashSet_init_$Create$_0();
        this.closure_1p03jf_k$(c, configs, closureBusy, true, fullCtx, false);
      }
       while (inductionVariable < last);
    return configs;
  };
  ParserATNSimulator.prototype.applyPrecedenceFilter_k2l7l1_k$ = function (configs) {
    var statesFromAlt1 = HashMap_init_$Create$();
    var configSet = new ATNConfigSet(configs._get_fullCtx__3456554233_dv63nr_k$());
    var tmp0_iterator = configs.iterator_jk1svi_k$();
    $l$loop_0: while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var config = tmp0_iterator.next_20eer_k$();
      if (!(config._get_alt__856848392_e658g8_k$() === 1)) {
        continue $l$loop_0;
      }
      var tmp1_elvis_lhs = ensureNotNull(config._get_semanticContext__233309224_3uwmjs_k$()).evalPrecedence_1usdcb_k$(ensureNotNull(this.parser_1), ensureNotNull(this._outerContext_1));
      var tmp;
      if (tmp1_elvis_lhs == null) {
        continue $l$loop_0;
      } else {
        tmp = tmp1_elvis_lhs;
      }
      var updatedContext = tmp;
      statesFromAlt1.put_3mhbri_k$(config._get_state__3614753120_b8zcm8_k$()._get_stateNumber__4121888151_2v1oq1_k$(), ensureNotNull(config._get_context__1558698818_ps0bpe_k$()));
      Unit_getInstance();
      if (!(updatedContext === config._get_semanticContext__233309224_3uwmjs_k$())) {
        configSet.add_atdc5z_k$(ATNConfig_init_$Create$_3(config, updatedContext), this.mergeCache_1);
        Unit_getInstance();
      } else {
        configSet.add_atdc5z_k$(config, this.mergeCache_1);
        Unit_getInstance();
      }
    }
    var tmp2_iterator = configs.iterator_jk1svi_k$();
    $l$loop_2: while (tmp2_iterator.hasNext_bitz1p_k$()) {
      var config_0 = tmp2_iterator.next_20eer_k$();
      if (config_0._get_alt__856848392_e658g8_k$() === 1) {
        continue $l$loop_2;
      }
      if (!config_0._get_isPrecedenceFilterSuppressed__6890667_43ovf_k$()) {
        var context = statesFromAlt1.get_1mhr4y_k$(config_0._get_state__3614753120_b8zcm8_k$()._get_stateNumber__4121888151_2v1oq1_k$());
        if (!(context == null) ? equals(context, config_0._get_context__1558698818_ps0bpe_k$()) : false) {
          continue $l$loop_2;
        }
      }
      configSet.add_atdc5z_k$(config_0, this.mergeCache_1);
      Unit_getInstance();
    }
    return configSet;
  };
  ParserATNSimulator.prototype.getReachableTarget_4quf4c_k$ = function (trans, ttype) {
    var tmp;
    if (trans.matches_4cugi_k$(ttype, 0, this._get_atn__856855894_e65e8m_k$()._get_maxTokenType__2953938780_m6ew84_k$())) {
      tmp = trans._get_target__747061146_ccs42i_k$();
    } else {
      tmp = null;
    }
    return tmp;
  };
  ParserATNSimulator.prototype.getPredsForAmbigAlts_pm0kh6_k$ = function (ambigAlts, configs, nalts) {
    var tmp$ret$0;
    $l$block: {
      var tmp0_arrayOfNulls_0 = nalts + 1 | 0;
      tmp$ret$0 = fillArrayVal(Array(tmp0_arrayOfNulls_0), null);
      break $l$block;
    }
    var altToPred = tmp$ret$0;
    var tmp0_iterator = configs.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var c = tmp0_iterator.next_20eer_k$();
      if (ambigAlts.get_fkrdnv_k$(c._get_alt__856848392_e658g8_k$())) {
        ensureNotNull(altToPred)[c._get_alt__856848392_e658g8_k$()] = Companion_getInstance_25().or_g8i9g1_k$(ensureNotNull(altToPred)[c._get_alt__856848392_e658g8_k$()], c._get_semanticContext__233309224_3uwmjs_k$());
      }
    }
    var nPredAlts = 0;
    var inductionVariable = 1;
    if (inductionVariable <= nalts)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (ensureNotNull(altToPred)[i] == null) {
          altToPred[i] = Companion_getInstance_25()._get_NONE__774049299_csuk9f_k$();
        } else if (!(altToPred[i] === Companion_getInstance_25()._get_NONE__774049299_csuk9f_k$())) {
          var tmp2 = nPredAlts;
          nPredAlts = tmp2 + 1 | 0;
          Unit_getInstance();
        }
      }
       while (!(i === nalts));
    if (nPredAlts === 0)
      altToPred = null;
    if (Companion_getInstance_21().debug_1) {
      var tmp = ensureNotNull(altToPred);
      println('getPredsForAmbigAlts result ' + joinToString$default(tmp, null, null, null, 0, null, null, 63, null));
    }
    return altToPred;
  };
  ParserATNSimulator.prototype.getPredicatePredictions_eqxoav_k$ = function (ambigAlts, altToPred) {
    var pairs = ArrayList_init_$Create$_0();
    var containsPredicate = false;
    var inductionVariable = 1;
    var last = altToPred.length;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var pred = altToPred[i];
        assert(!(pred == null));
        if (!(ambigAlts == null) ? ambigAlts.get_fkrdnv_k$(i) : false) {
          pairs.add_1j60pz_k$(new PredPrediction(ensureNotNull(pred), i));
          Unit_getInstance();
        }
        if (!(pred === Companion_getInstance_25()._get_NONE__774049299_csuk9f_k$()))
          containsPredicate = true;
      }
       while (inductionVariable < last);
    var tmp;
    if (!containsPredicate) {
      tmp = null;
    } else {
      var tmp$ret$0;
      $l$block: {
        tmp$ret$0 = copyToArray(pairs);
        break $l$block;
      }
      tmp = tmp$ret$0;
    }
    return tmp;
  };
  ParserATNSimulator.prototype.getSynValidOrSemInvalidAltThatFinishedDecisionEntryRule_txytz_k$ = function (configs, outerContext) {
    var sets = this.splitAccordingToSemanticValidity_t7hzzt_k$(configs, outerContext);
    var semValidConfigs = sets._get_first__3232921377_hkbbvj_k$();
    var semInvalidConfigs = sets._get_second__4255435031_njbah_k$();
    var alt = this.getAltThatFinishedDecisionEntryRule_rythcr_k$(ensureNotNull(semValidConfigs));
    if (!(alt === Companion_getInstance_8()._get_INVALID_ALT_NUMBER__3632704068_ayalks_k$())) {
      return alt;
    }
    if (ensureNotNull(semInvalidConfigs)._get_size__809037418_ddoh9m_k$() > 0) {
      alt = this.getAltThatFinishedDecisionEntryRule_rythcr_k$(ensureNotNull(semInvalidConfigs));
      if (!(alt === Companion_getInstance_8()._get_INVALID_ALT_NUMBER__3632704068_ayalks_k$())) {
        return alt;
      }
    }
    return Companion_getInstance_8()._get_INVALID_ALT_NUMBER__3632704068_ayalks_k$();
  };
  ParserATNSimulator.prototype.getAltThatFinishedDecisionEntryRule_rythcr_k$ = function (configs) {
    var alts = IntervalSet_init_$Create$_1(new Int32Array([]));
    var tmp0_iterator = configs.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var c = tmp0_iterator.next_20eer_k$();
      var tmp;
      if (c._get_outerContextDepth__4293562050_u4am_k$() > 0) {
        tmp = true;
      } else {
        var tmp_0;
        var tmp_1 = c._get_state__3614753120_b8zcm8_k$();
        if (tmp_1 instanceof RuleStopState) {
          tmp_0 = ensureNotNull(c._get_context__1558698818_ps0bpe_k$()).hasEmptyPath_tkyljs_k$();
        } else {
          {
            tmp_0 = false;
          }
        }
        tmp = tmp_0;
      }
      if (tmp) {
        alts.add_fx1qxd_k$(c._get_alt__856848392_e658g8_k$());
      } else {
      }
    }
    return alts.size_23och_k$() === 0 ? Companion_getInstance_8()._get_INVALID_ALT_NUMBER__3632704068_ayalks_k$() : alts._get_minElement__3755190657_8xdabj_k$();
  };
  ParserATNSimulator.prototype.splitAccordingToSemanticValidity_t7hzzt_k$ = function (configs, outerContext) {
    var succeeded = new ATNConfigSet(configs._get_fullCtx__3456554233_dv63nr_k$());
    var failed = new ATNConfigSet(configs._get_fullCtx__3456554233_dv63nr_k$());
    var tmp0_iterator = configs.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var c = tmp0_iterator.next_20eer_k$();
      if (!(c._get_semanticContext__233309224_3uwmjs_k$() === Companion_getInstance_25()._get_NONE__774049299_csuk9f_k$())) {
        var predicateEvaluationResult = this.evalSemanticContext_w6rit0_k$(c._get_semanticContext__233309224_3uwmjs_k$(), outerContext, c._get_alt__856848392_e658g8_k$(), configs._get_fullCtx__3456554233_dv63nr_k$());
        if (predicateEvaluationResult) {
          succeeded.add_e3lorw_k$(c);
          Unit_getInstance();
        } else {
          failed.add_e3lorw_k$(c);
          Unit_getInstance();
        }
      } else {
        succeeded.add_e3lorw_k$(c);
        Unit_getInstance();
      }
    }
    return new Pair(succeeded, failed);
  };
  ParserATNSimulator.prototype.evalSemanticContext_fx2e3l_k$ = function (predPredictions, outerContext, complete) {
    var predictions = BitSet_init_$Create$();
    var indexedObject = predPredictions;
    var inductionVariable = 0;
    var last = indexedObject.length;
    $l$loop_1: while (inductionVariable < last) {
      var pair = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      if (ensureNotNull(pair)._get_pred__806514762_dc6eru_k$() === Companion_getInstance_25()._get_NONE__774049299_csuk9f_k$()) {
        predictions.set_2jdgjy_k$(ensureNotNull(ensureNotNull(pair)._get_alt__856848392_e658g8_k$()));
        if (!complete) {
          break $l$loop_1;
        }
        continue $l$loop_1;
      }
      var fullCtx = false;
      var predicateEvaluationResult = this.evalSemanticContext_w6rit0_k$(ensureNotNull(pair)._get_pred__806514762_dc6eru_k$(), outerContext, pair._get_alt__856848392_e658g8_k$(), fullCtx);
      if (Companion_getInstance_21().debug_1 ? true : Companion_getInstance_21().dfa_debug_1) {
        println('eval pred ' + pair + '=' + predicateEvaluationResult);
      }
      if (predicateEvaluationResult) {
        if (Companion_getInstance_21().debug_1 ? true : Companion_getInstance_21().dfa_debug_1)
          outMessage('PREDICT ' + pair._get_alt__856848392_e658g8_k$());
        predictions.set_2jdgjy_k$(pair._get_alt__856848392_e658g8_k$());
        if (!complete) {
          break $l$loop_1;
        }
      }
    }
    return predictions;
  };
  ParserATNSimulator.prototype.evalSemanticContext_w6rit0_k$ = function (pred, parserCallStack, alt, fullCtx) {
    return ensureNotNull(pred).eval_7h9bmn_k$(ensureNotNull(this.parser_1), ensureNotNull(parserCallStack));
  };
  ParserATNSimulator.prototype.closure_1p03jf_k$ = function (config, configs, closureBusy, collectPredicates, fullCtx, treatEofAsEpsilon) {
    var initialDepth = 0;
    this.closureCheckingStopState_qf0hlz_k$(config, configs, closureBusy, collectPredicates, fullCtx, initialDepth, treatEofAsEpsilon);
    assert(!fullCtx ? true : !configs._get_dipsIntoOuterContext__4154261295_2brtg1_k$());
  };
  ParserATNSimulator.prototype.closureCheckingStopState_qf0hlz_k$ = function (config, configs, closureBusy, collectPredicates, fullCtx, depth, treatEofAsEpsilon) {
    if (Companion_getInstance_21().debug_1)
      println('closure(' + config.toString_n1cmzq_k$(this.parser_1, true) + ')');
    var tmp = config._get_state__3614753120_b8zcm8_k$();
    if (tmp instanceof RuleStopState) {
      if (!ensureNotNull(config._get_context__1558698818_ps0bpe_k$())._get_isEmpty__1500737838_oti0q6_k$()) {
        var inductionVariable = 0;
        var last = ensureNotNull(config._get_context__1558698818_ps0bpe_k$()).size_23och_k$();
        if (inductionVariable < last)
          $l$loop_0: do {
            var i = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            if (ensureNotNull(config._get_context__1558698818_ps0bpe_k$()).getReturnState_indz3e_k$(i) === Companion_getInstance_22()._get_EMPTY_RETURN_STATE__147511191_2ftod3_k$()) {
              if (fullCtx) {
                var tmp_0 = config._get_state__3614753120_b8zcm8_k$();
                var tmp_1 = Companion_getInstance_22()._get_EMPTY__2261257284_xmtgos_k$();
                configs.add_atdc5z_k$(ATNConfig_init_$Create$_5(config, tmp_0, tmp_1, null, 8, null), this.mergeCache_1);
                Unit_getInstance();
                continue $l$loop_0;
              } else {
                if (Companion_getInstance_21().debug_1)
                  println('FALLING off rule ' + this.getRuleName_71ymys_k$(config._get_state__3614753120_b8zcm8_k$()._get_ruleIndex__1923824091_vte863_k$()));
                this.closure__r215b7_k$(config, configs, closureBusy, collectPredicates, fullCtx, depth, treatEofAsEpsilon);
              }
              continue $l$loop_0;
            }
            var returnState = this._get_atn__856855894_e65e8m_k$()._get_states__388198729_6f4g21_k$().get_fkrdnv_k$(ensureNotNull(config._get_context__1558698818_ps0bpe_k$()).getReturnState_indz3e_k$(i));
            var newContext = ensureNotNull(config._get_context__1558698818_ps0bpe_k$()).getParent_4aoyvz_k$(i);
            var c = ATNConfig_init_$Create$_0(ensureNotNull(returnState), config._get_alt__856848392_e658g8_k$(), ensureNotNull(newContext), ensureNotNull(config._get_semanticContext__233309224_3uwmjs_k$()));
            c._set_reachesIntoOuterContext__3784992112_4yb7sw_k$(config._get_reachesIntoOuterContext__2546863356_swrxms_k$());
            assert(depth > IntCompanionObject_getInstance()._get_MIN_VALUE__1378605517_mssatp_k$());
            this.closureCheckingStopState_qf0hlz_k$(c, configs, closureBusy, collectPredicates, fullCtx, depth - 1 | 0, treatEofAsEpsilon);
          }
           while (inductionVariable < last);
        return Unit_getInstance();
      } else if (fullCtx) {
        configs.add_atdc5z_k$(config, this.mergeCache_1);
        Unit_getInstance();
        return Unit_getInstance();
      } else {
        if (Companion_getInstance_21().debug_1)
          println('FALLING off rule ' + this.getRuleName_71ymys_k$(config._get_state__3614753120_b8zcm8_k$()._get_ruleIndex__1923824091_vte863_k$()));
      }
    } else {
    }
    this.closure__r215b7_k$(config, configs, closureBusy, collectPredicates, fullCtx, depth, treatEofAsEpsilon);
  };
  ParserATNSimulator.prototype.closure__r215b7_k$ = function (config, configs, closureBusy, collectPredicates, fullCtx, depth, treatEofAsEpsilon) {
    var p = config._get_state__3614753120_b8zcm8_k$();
    if (!p.onlyHasEpsilonTransitions_stt9um_k$()) {
      configs.add_atdc5z_k$(config, this.mergeCache_1);
      Unit_getInstance();
    }
    var inductionVariable = 0;
    var last = p._get_numberOfTransitions__3931454387_60fcct_k$();
    if (inductionVariable < last)
      $l$loop_1: do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (i === 0 ? this.canDropLoopEntryEdgeInLeftRecursiveRule_dv6jh3_k$(config) : false)
          continue $l$loop_1;
        var t = p.transition_bdhd2s_k$(i);
        var tmp;
        if (!(t instanceof ActionTransition)) {
          tmp = collectPredicates;
        } else {
          {
            tmp = false;
          }
        }
        var continueCollecting = tmp;
        var c = this.getEpsilonTarget_gdchmb_k$(config, t, continueCollecting, depth === 0, fullCtx, treatEofAsEpsilon);
        if (!(c == null)) {
          var newDepth = depth;
          var tmp_0 = config._get_state__3614753120_b8zcm8_k$();
          if (tmp_0 instanceof RuleStopState) {
            assert(!fullCtx);
            if (!(this._dfa_1 == null) ? ensureNotNull(this._dfa_1)._get_isPrecedenceDfa__2261942470_xmerzu_k$() : false) {
              var outermostPrecedenceReturn = (t instanceof EpsilonTransition ? t : THROW_CCE()).outermostPrecedenceReturn_dx5dvc_k$();
              if (outermostPrecedenceReturn === ensureNotNull(this._dfa_1)._get_atnStartState__171174855_2twvd3_k$()._get_ruleIndex__1923824091_vte863_k$()) {
                ensureNotNull(c)._set_isPrecedenceFilterSuppressed__3867538615_yhslzm_k$(true);
              }
            }
            var tmp1_this = ensureNotNull(c);
            var tmp2 = tmp1_this._get_reachesIntoOuterContext__2546863356_swrxms_k$();
            tmp1_this._set_reachesIntoOuterContext__3784992112_4yb7sw_k$(tmp2 + 1 | 0);
            Unit_getInstance();
            if (!closureBusy.add_1j60pz_k$(c)) {
              continue $l$loop_1;
            }
            configs._set_dipsIntoOuterContext__702585659_dbbrn6_k$(true);
            assert(newDepth > IntCompanionObject_getInstance()._get_MIN_VALUE__1378605517_mssatp_k$());
            var tmp3 = newDepth;
            newDepth = tmp3 - 1 | 0;
            Unit_getInstance();
            if (Companion_getInstance_21().debug_1)
              println('dips into outer ctx: ' + ensureNotNull(c));
          } else {
            {
              if (!t._get_isEpsilon__1837953905_ue9qb5_k$() ? !closureBusy.add_1j60pz_k$(c) : false) {
                continue $l$loop_1;
              }
              if (t instanceof RuleTransition) {
                if (newDepth >= 0) {
                  var tmp4 = newDepth;
                  newDepth = tmp4 + 1 | 0;
                  Unit_getInstance();
                }
              } else {
              }
            }
          }
          this.closureCheckingStopState_qf0hlz_k$(c, configs, closureBusy, continueCollecting, fullCtx, newDepth, treatEofAsEpsilon);
        }
      }
       while (inductionVariable < last);
  };
  ParserATNSimulator.prototype.canDropLoopEntryEdgeInLeftRecursiveRule_dv6jh3_k$ = function (config) {
    var p = config._get_state__3614753120_b8zcm8_k$();
    var tmp;
    var tmp_0;
    var tmp_1;
    if (!(p._get_stateType__2749614150_pk2a4a_k$() === Companion_getInstance_14()._get_STAR_LOOP_ENTRY__2890957197_n7wt4j_k$())) {
      tmp_1 = true;
    } else {
      tmp_1 = !(p instanceof StarLoopEntryState ? p : THROW_CCE())._get_isPrecedenceDecision__4235112315_zmwed_k$();
    }
    if (tmp_1) {
      tmp_0 = true;
    } else {
      {
        tmp_0 = ensureNotNull(config._get_context__1558698818_ps0bpe_k$())._get_isEmpty__1500737838_oti0q6_k$();
      }
    }
    if (tmp_0) {
      tmp = true;
    } else {
      {
        tmp = ensureNotNull(config._get_context__1558698818_ps0bpe_k$()).hasEmptyPath_tkyljs_k$();
      }
    }
    if (tmp) {
      return false;
    } else {
    }
    var numCtxs = ensureNotNull(config._get_context__1558698818_ps0bpe_k$()).size_23och_k$();
    var inductionVariable = 0;
    if (inductionVariable < numCtxs)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var returnState = this._get_atn__856855894_e65e8m_k$()._get_states__388198729_6f4g21_k$().get_fkrdnv_k$(ensureNotNull(config._get_context__1558698818_ps0bpe_k$()).getReturnState_indz3e_k$(i));
        if (!(ensureNotNull(returnState)._get_ruleIndex__1923824091_vte863_k$() === p._get_ruleIndex__1923824091_vte863_k$()))
          return false;
      }
       while (inductionVariable < numCtxs);
    var tmp_2 = p.transition_bdhd2s_k$(0)._get_target__747061146_ccs42i_k$();
    var decisionStartState = tmp_2 instanceof BlockStartState ? tmp_2 : THROW_CCE();
    var blockEndStateNum = ensureNotNull(decisionStartState._get_endState__3090543125_jx2zmz_k$())._get_stateNumber__4121888151_2v1oq1_k$();
    var tmp_3 = this._get_atn__856855894_e65e8m_k$()._get_states__388198729_6f4g21_k$().get_fkrdnv_k$(blockEndStateNum);
    var blockEndState = tmp_3 instanceof BlockEndState ? tmp_3 : THROW_CCE();
    var inductionVariable_0 = 0;
    if (inductionVariable_0 < numCtxs)
      $l$loop_2: do {
        var i_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        var returnStateNumber = ensureNotNull(config._get_context__1558698818_ps0bpe_k$()).getReturnState_indz3e_k$(i_0);
        var returnState_0 = this._get_atn__856855894_e65e8m_k$()._get_states__388198729_6f4g21_k$().get_fkrdnv_k$(returnStateNumber);
        if (!(ensureNotNull(returnState_0)._get_numberOfTransitions__3931454387_60fcct_k$() === 1) ? true : !returnState_0.transition_bdhd2s_k$(0)._get_isEpsilon__1837953905_ue9qb5_k$()) {
          return false;
        }
        var returnStateTarget = ensureNotNull(returnState_0).transition_bdhd2s_k$(0)._get_target__747061146_ccs42i_k$();
        if (returnState_0._get_stateType__2749614150_pk2a4a_k$() === Companion_getInstance_14()._get_BLOCK_END__492971400_85i360_k$() ? returnStateTarget === p : false) {
          continue $l$loop_2;
        }
        if (returnState_0 === blockEndState) {
          continue $l$loop_2;
        }
        if (returnStateTarget === blockEndState) {
          continue $l$loop_2;
        }
        if (((ensureNotNull(returnStateTarget)._get_stateType__2749614150_pk2a4a_k$() === Companion_getInstance_14()._get_BLOCK_END__492971400_85i360_k$() ? returnStateTarget._get_numberOfTransitions__3931454387_60fcct_k$() === 1 : false) ? returnStateTarget.transition_bdhd2s_k$(0)._get_isEpsilon__1837953905_ue9qb5_k$() : false) ? returnStateTarget.transition_bdhd2s_k$(0)._get_target__747061146_ccs42i_k$() === p : false) {
          continue $l$loop_2;
        }
        return false;
      }
       while (inductionVariable_0 < numCtxs);
    return true;
  };
  ParserATNSimulator.prototype.getRuleName_71ymys_k$ = function (index) {
    return (!(this.parser_1 == null) ? index >= 0 : false) ? ensureNotNull(ensureNotNull(this.parser_1)._get_ruleNames__2055232037_xzmr6t_k$())[index] : '<rule ' + index + '>';
  };
  ParserATNSimulator.prototype.getEpsilonTarget_gdchmb_k$ = function (config, t, collectPredicates, inContext, fullCtx, treatEofAsEpsilon) {
    var tmp0_subject = t._get_serializationType__1649189191_r9vuiv_k$();
    if (tmp0_subject === Companion_getInstance_27()._get_RULE__777920207_cv5j2n_k$()) {
      return this.ruleTransition_s0scf1_k$(config, t instanceof RuleTransition ? t : THROW_CCE());
    } else if (tmp0_subject === Companion_getInstance_27()._get_PRECEDENCE__922248129_f92z7l_k$()) {
      return this.precedenceTransition_vhhaza_k$(config, t instanceof PrecedencePredicateTransition ? t : THROW_CCE(), collectPredicates, inContext, fullCtx);
    } else if (tmp0_subject === Companion_getInstance_27()._get_PREDICATE__337996698_5l8fx6_k$()) {
      return this.predTransition_fknu7p_k$(config, t instanceof PredicateTransition ? t : THROW_CCE(), collectPredicates, inContext, fullCtx);
    } else if (tmp0_subject === Companion_getInstance_27()._get_ACTION__1841517461_uge3yt_k$()) {
      return this.actionTransition_ijupk3_k$(config, t instanceof ActionTransition ? t : THROW_CCE());
    } else if (tmp0_subject === Companion_getInstance_27()._get_EPSILON__2552669447_stbhmh_k$()) {
      var tmp = ensureNotNull(t._get_target__747061146_ccs42i_k$());
      return ATNConfig_init_$Create$_5(config, tmp, null, null, 12, null);
    } else if ((tmp0_subject === Companion_getInstance_27()._get_ATOM__762193690_clsgey_k$() ? true : tmp0_subject === Companion_getInstance_27()._get_RANGE__2622281300_rnvgrw_k$()) ? true : tmp0_subject === Companion_getInstance_27()._get_SET__856392847_e5vgy7_k$()) {
      if (treatEofAsEpsilon) {
        if (t.matches_4cugi_k$(Companion_getInstance_6()._get_EOF__855984949_e5mq7p_k$(), 0, 1)) {
          var tmp_0 = ensureNotNull(t._get_target__747061146_ccs42i_k$());
          return ATNConfig_init_$Create$_5(config, tmp_0, null, null, 12, null);
        }
      }
      return null;
    } else
      return null;
  };
  ParserATNSimulator.prototype.actionTransition_ijupk3_k$ = function (config, t) {
    if (Companion_getInstance_21().debug_1)
      println('ACTION edge ' + t._get_ruleIndex__1923824091_vte863_k$() + ':' + t._get_actionIndex__2870023381_nkdhrf_k$());
    var tmp = ensureNotNull(t._get_target__747061146_ccs42i_k$());
    return ATNConfig_init_$Create$_5(config, tmp, null, null, 12, null);
  };
  ParserATNSimulator.prototype.precedenceTransition_vhhaza_k$ = function (config, pt, collectPredicates, inContext, fullCtx) {
    if (Companion_getInstance_21().debug_1) {
      println('PRED (collectPredicates=' + collectPredicates + ') ' + pt._get_precedence__3064254401_kcqg5b_k$() + '>=_p' + ', ctx dependent=true');
      if (!(this.parser_1 == null)) {
        outMessage('context surrounding pred is ' + ensureNotNull(this.parser_1)._get_ruleInvocationStack__1809866965_txjqad_k$());
      }
    }
    var c = null;
    if (collectPredicates ? inContext : false) {
      if (fullCtx) {
        var currentPosition = ensureNotNull(this._input_1).index_1nqriq_k$();
        ensureNotNull(this._input_1).seek_5aisp4_k$(this._startIndex_1);
        var predSucceeds = this.evalSemanticContext_w6rit0_k$(pt._get_predicate__4147871610_2fkrra_k$(), this._outerContext_1, config._get_alt__856848392_e658g8_k$(), fullCtx);
        ensureNotNull(this._input_1).seek_5aisp4_k$(currentPosition);
        if (predSucceeds) {
          var tmp = ensureNotNull(pt._get_target__747061146_ccs42i_k$());
          c = ATNConfig_init_$Create$_5(config, tmp, null, null, 12, null);
        }
      } else {
        var newSemCtx = Companion_getInstance_25().and_1wb5b7_k$(config._get_semanticContext__233309224_3uwmjs_k$(), pt._get_predicate__4147871610_2fkrra_k$());
        c = ATNConfig_init_$Create$_2(config, ensureNotNull(pt._get_target__747061146_ccs42i_k$()), ensureNotNull(newSemCtx));
      }
    } else {
      var tmp_0 = ensureNotNull(pt._get_target__747061146_ccs42i_k$());
      c = ATNConfig_init_$Create$_5(config, tmp_0, null, null, 12, null);
    }
    if (Companion_getInstance_21().debug_1)
      println('config from pred transition=' + ensureNotNull(c));
    return c;
  };
  ParserATNSimulator.prototype.predTransition_fknu7p_k$ = function (config, pt, collectPredicates, inContext, fullCtx) {
    if (Companion_getInstance_21().debug_1) {
      println('PRED (collectPredicates=' + collectPredicates + ') ' + pt._get_ruleIndex__1923824091_vte863_k$() + ':' + pt._get_predIndex__3241973056_hexbk0_k$() + ', ctx dependent=' + pt._get_isCtxDependent__1166321513_jaebft_k$());
      if (!(this.parser_1 == null)) {
        outMessage('context surrounding pred is ' + ensureNotNull(this.parser_1)._get_ruleInvocationStack__1809866965_txjqad_k$());
      }
    }
    var c = null;
    if (collectPredicates ? !pt._get_isCtxDependent__1166321513_jaebft_k$() ? true : pt._get_isCtxDependent__1166321513_jaebft_k$() ? inContext : false : false) {
      if (fullCtx) {
        var currentPosition = ensureNotNull(this._input_1).index_1nqriq_k$();
        ensureNotNull(this._input_1).seek_5aisp4_k$(this._startIndex_1);
        var predSucceeds = this.evalSemanticContext_w6rit0_k$(pt._get_predicate__4147871610_2fkrra_k$(), this._outerContext_1, config._get_alt__856848392_e658g8_k$(), fullCtx);
        ensureNotNull(this._input_1).seek_5aisp4_k$(currentPosition);
        if (predSucceeds) {
          var tmp = ensureNotNull(pt._get_target__747061146_ccs42i_k$());
          c = ATNConfig_init_$Create$_5(config, tmp, null, null, 12, null);
        }
      } else {
        var newSemCtx = Companion_getInstance_25().and_1wb5b7_k$(config._get_semanticContext__233309224_3uwmjs_k$(), pt._get_predicate__4147871610_2fkrra_k$());
        c = ATNConfig_init_$Create$_2(config, ensureNotNull(pt._get_target__747061146_ccs42i_k$()), ensureNotNull(newSemCtx));
      }
    } else {
      var tmp_0 = ensureNotNull(pt._get_target__747061146_ccs42i_k$());
      c = ATNConfig_init_$Create$_5(config, tmp_0, null, null, 12, null);
    }
    if (Companion_getInstance_21().debug_1)
      println('config from pred transition=' + ensureNotNull(c));
    return c;
  };
  ParserATNSimulator.prototype.ruleTransition_s0scf1_k$ = function (config, t) {
    if (Companion_getInstance_21().debug_1) {
      println('CALL rule ' + this.getRuleName_71ymys_k$(ensureNotNull(t._get_target__747061146_ccs42i_k$())._get_ruleIndex__1923824091_vte863_k$()) + ', ctx=' + config._get_context__1558698818_ps0bpe_k$());
    }
    var returnState = t._get_followState__3560924721_c512vj_k$();
    var newContext = Companion_getInstance_26().create_kfwgi2_k$(config._get_context__1558698818_ps0bpe_k$(), returnState._get_stateNumber__4121888151_2v1oq1_k$());
    var tmp = ensureNotNull(t._get_target__747061146_ccs42i_k$());
    return ATNConfig_init_$Create$_5(config, tmp, newContext, null, 8, null);
  };
  ParserATNSimulator.prototype.getConflictingAlts_3wk4au_k$ = function (configs) {
    var altsets = Companion_getInstance_24().getConflictingAltSubsets_52bqy1_k$(ensureNotNull(configs));
    return Companion_getInstance_24().getAlts_2nl571_k$(altsets);
  };
  ParserATNSimulator.prototype.getConflictingAltsOrUniqueAlt_o4f68q_k$ = function (configs) {
    var conflictingAlts;
    if (!(configs._get_uniqueAlt__3478543673_di2shz_k$() === Companion_getInstance_8()._get_INVALID_ALT_NUMBER__3632704068_ayalks_k$())) {
      conflictingAlts = BitSet_init_$Create$();
      conflictingAlts.set_2jdgjy_k$(configs._get_uniqueAlt__3478543673_di2shz_k$());
    } else {
      conflictingAlts = configs._get_conflictingAlts__3543001207_cfp8qx_k$();
    }
    return ensureNotNull(conflictingAlts);
  };
  ParserATNSimulator.prototype.getTokenName_1zgour_k$ = function (t) {
    if (t === Companion_getInstance_6()._get_EOF__855984949_e5mq7p_k$()) {
      return 'EOF';
    }
    var vocabulary = !(this.parser_1 == null) ? ensureNotNull(this.parser_1)._get_vocabulary__3716553829_9kdeor_k$() : Companion_getInstance_7()._get_EMPTY_VOCABULARY__391582355_6h4yvn_k$();
    var displayName = vocabulary.getDisplayName_u57fdi_k$(t);
    var tmp;
    if (displayName === t.toString()) {
      tmp = displayName;
    } else {
      tmp = displayName + '<' + t + '>';
    }
    return tmp;
  };
  ParserATNSimulator.prototype.getLookaheadName_xoo9tn_k$ = function (input) {
    return this.getTokenName_1zgour_k$(input.LA_y7f82c_k$(1));
  };
  ParserATNSimulator.prototype.dumpDeadEndConfigs_3ofixe_k$ = function (nvae) {
    errMessage('dead end configs: ');
    var tmp0_iterator = ensureNotNull(nvae._get_deadEndConfigs__1192939953_jq8ucx_k$()).iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var c = tmp0_iterator.next_20eer_k$();
      var trans = 'no edges';
      if (c._get_state__3614753120_b8zcm8_k$()._get_numberOfTransitions__3931454387_60fcct_k$() > 0) {
        var t = c._get_state__3614753120_b8zcm8_k$().transition_bdhd2s_k$(0);
        if (t instanceof AtomTransition) {
          var at = t instanceof AtomTransition ? t : THROW_CCE();
          trans = 'Atom ' + this.getTokenName_1zgour_k$(at._get_label__3396817757_euqgmb_k$());
        } else {
          if (t instanceof SetTransition) {
            var st = t instanceof SetTransition ? t : THROW_CCE();
            var not = st instanceof NotSetTransition;
            trans = (not ? '~' : '') + 'Set ' + st._get_set__857377903_e6gl0v_k$().toString();
          } else {
          }
        }
      }
      errMessage(c.toString_n1cmzq_k$(this.parser_1, true) + ':' + trans);
    }
  };
  ParserATNSimulator.prototype.noViableAlt_rmfre_k$ = function (input, outerContext, configs, startIndex) {
    return new NoViableAltException(ensureNotNull(this.parser_1), input, input.get_fkrdnv_k$(startIndex), input.LT_6crwc9_k$(1), configs, outerContext);
  };
  ParserATNSimulator.prototype.addDFAEdge_k0l8p_k$ = function (dfa, from, t, to) {
    var to_0 = to;
    if (Companion_getInstance_21().debug_1) {
      println('EDGE ' + from + ' -> ' + to_0 + ' upon ' + this.getTokenName_1zgour_k$(t));
    }
    if (to_0 == null) {
      return null;
    }
    to_0 = this.addDFAState_32ru9u_k$(dfa, to_0);
    if ((from == null ? true : t < -1) ? true : t > this._get_atn__856855894_e65e8m_k$()._get_maxTokenType__2953938780_m6ew84_k$()) {
      return to_0;
    }
    var tmp$ret$1;
    $l$block_0: {
      if (ensureNotNull(from)._get_edges__3199333435_i4b8hx_k$() == null) {
        var tmp = ensureNotNull(from);
        var tmp$ret$0;
        $l$block: {
          var tmp0_arrayOfNulls_0_2 = (this._get_atn__856855894_e65e8m_k$()._get_maxTokenType__2953938780_m6ew84_k$() + 1 | 0) + 1 | 0;
          tmp$ret$0 = fillArrayVal(Array(tmp0_arrayOfNulls_0_2), null);
          break $l$block;
        }
        tmp._set_edges__841171375_hbfclq_k$(tmp$ret$0);
      }
      tmp$ret$1 = ensureNotNull(ensureNotNull(from)._get_edges__3199333435_i4b8hx_k$())[t + 1 | 0] = to_0;
      break $l$block_0;
    }
    if (Companion_getInstance_21().debug_1) {
      outMessage('DFA=\n' + dfa.toString_dmzcgh_k$(!(this.parser_1 == null) ? ensureNotNull(this.parser_1)._get_vocabulary__3716553829_9kdeor_k$() : Companion_getInstance_7()._get_EMPTY_VOCABULARY__391582355_6h4yvn_k$()));
    }
    return to_0;
  };
  ParserATNSimulator.prototype.addDFAState_32ru9u_k$ = function (dfa, D) {
    if (D === Companion_getInstance_13()._get_ERROR__2265929449_xk1bmf_k$()) {
      return D;
    }
    var tmp$ret$0;
    {
      var tmp0_synchronized_0 = dfa._get_states__388198729_6f4g21_k$();
      var existing_2 = dfa._get_states__388198729_6f4g21_k$().get_1mhr4y_k$(D);
      if (!(existing_2 == null))
        return existing_2;
      D._set_stateNumber__2290445323_a7hzut_k$(dfa._get_states__388198729_6f4g21_k$()._get_size__809037418_ddoh9m_k$());
      if (!ensureNotNull(D._get_configs__1545872320_pkdeps_k$())._get_isReadonly__2488245375_tvobk1_k$()) {
        ensureNotNull(D._get_configs__1545872320_pkdeps_k$()).optimizeConfigs_dauzek_k$(this);
        ensureNotNull(D._get_configs__1545872320_pkdeps_k$())._set_isReadonly__3398997899_73ysxu_k$(true);
      }
      dfa._get_states__388198729_6f4g21_k$().put_3mhbri_k$(D, D);
      Unit_getInstance();
      if (Companion_getInstance_21().debug_1)
        println('adding new DFA state: ' + D);
      return D;
    }
  };
  ParserATNSimulator.prototype.reportAttemptingFullContext_jlqo5_k$ = function (dfa, conflictingAlts, configs, startIndex, stopIndex) {
    if (Companion_getInstance_21().debug_1 ? true : Companion_getInstance_21().retry_debug_1) {
      var interval = Companion_getInstance_31().of_9v4utl_k$(startIndex, stopIndex);
      outMessage('reportAttemptingFullContext decision=' + dfa._get_decision__1839254383_uf1lrj_k$() + ':' + configs + ', input=' + ensureNotNull(ensureNotNull(this.parser_1)._get_tokenStream__2646719960_r9bns8_k$()).getText_egqjjt_k$(interval));
    }
    if (!(this.parser_1 == null))
      ensureNotNull(this.parser_1)._get_errorListenerDispatch__3164396827_ip41r9_k$().reportAttemptingFullContext_pfnryh_k$(this.parser_1, dfa, startIndex, stopIndex, conflictingAlts, configs);
  };
  ParserATNSimulator.prototype.reportContextSensitivity_riba8m_k$ = function (dfa, prediction, configs, startIndex, stopIndex) {
    if (Companion_getInstance_21().debug_1 ? true : Companion_getInstance_21().retry_debug_1) {
      var interval = Companion_getInstance_31().of_9v4utl_k$(startIndex, stopIndex);
      outMessage('reportContextSensitivity decision=' + dfa._get_decision__1839254383_uf1lrj_k$() + ':' + configs + ', input=' + ensureNotNull(ensureNotNull(this.parser_1)._get_tokenStream__2646719960_r9bns8_k$()).getText_egqjjt_k$(interval));
    }
    if (!(this.parser_1 == null))
      ensureNotNull(this.parser_1)._get_errorListenerDispatch__3164396827_ip41r9_k$().reportContextSensitivity_o5w5aq_k$(this.parser_1, dfa, startIndex, stopIndex, prediction, configs);
  };
  ParserATNSimulator.prototype.reportAmbiguity_jkxs6t_k$ = function (dfa, D, startIndex, stopIndex, exact, ambigAlts, configs) {
    if (Companion_getInstance_21().debug_1 ? true : Companion_getInstance_21().retry_debug_1) {
      var interval = Companion_getInstance_31().of_9v4utl_k$(startIndex, stopIndex);
      println('reportAmbiguity ' + ambigAlts + ':' + configs + ', input=' + ensureNotNull(ensureNotNull(this.parser_1)._get_tokenStream__2646719960_r9bns8_k$()).getText_egqjjt_k$(interval));
    }
    if (!(this.parser_1 == null))
      ensureNotNull(this.parser_1)._get_errorListenerDispatch__3164396827_ip41r9_k$().reportAmbiguity_ql6tmj_k$(this.parser_1, dfa, startIndex, stopIndex, exact, ambigAlts, configs);
  };
  ParserATNSimulator.$metadata$ = {
    simpleName: 'ParserATNSimulator',
    kind: 'class',
    interfaces: []
  };
  function PlusBlockStartState() {
    BlockStartState.call(this);
    this.loopBackState_1 = null;
  }
  PlusBlockStartState.prototype._set_loopBackState__2314937695_xqmt9r_k$ = function (_set____804775014) {
    this.loopBackState_1 = _set____804775014;
  };
  PlusBlockStartState.prototype._get_loopBackState__1394904043_n2hmuj_k$ = function () {
    return this.loopBackState_1;
  };
  PlusBlockStartState.prototype._get_stateType__2749614150_pk2a4a_k$ = function () {
    return Companion_getInstance_14()._get_PLUS_BLOCK_START__2103966048_ysnalc_k$();
  };
  PlusBlockStartState.$metadata$ = {
    simpleName: 'PlusBlockStartState',
    kind: 'class',
    interfaces: []
  };
  function PlusLoopbackState() {
    DecisionState.call(this);
  }
  PlusLoopbackState.prototype._get_stateType__2749614150_pk2a4a_k$ = function () {
    return Companion_getInstance_14()._get_PLUS_LOOP_BACK__1631569006_qze6pa_k$();
  };
  PlusLoopbackState.$metadata$ = {
    simpleName: 'PlusLoopbackState',
    kind: 'class',
    interfaces: []
  };
  function PrecedencePredicateTransition(target, precedence) {
    AbstractPredicateTransition.call(this, target);
    this.precedence_1 = precedence;
  }
  PrecedencePredicateTransition.prototype._get_precedence__3064254401_kcqg5b_k$ = function () {
    return this.precedence_1;
  };
  PrecedencePredicateTransition.prototype._get_serializationType__1649189191_r9vuiv_k$ = function () {
    return Companion_getInstance_27()._get_PRECEDENCE__922248129_f92z7l_k$();
  };
  PrecedencePredicateTransition.prototype._get_isEpsilon__1837953905_ue9qb5_k$ = function () {
    return true;
  };
  PrecedencePredicateTransition.prototype._get_predicate__4147871610_2fkrra_k$ = function () {
    return new PrecedencePredicate(this.precedence_1);
  };
  PrecedencePredicateTransition.prototype.matches_4cugi_k$ = function (symbol, minVocabSymbol, maxVocabSymbol) {
    return false;
  };
  PrecedencePredicateTransition.prototype.toString = function () {
    return '' + this.precedence_1 + ' >= _p';
  };
  PrecedencePredicateTransition.$metadata$ = {
    simpleName: 'PrecedencePredicateTransition',
    kind: 'class',
    interfaces: []
  };
  function PredicateEvalInfo(decision, input, startIndex, stopIndex, semctx, evalResult, predictedAlt, fullCtx) {
    DecisionEventInfo.call(this, decision, ATNConfigSet_init_$Create$(false, 1, null), input, startIndex, stopIndex, fullCtx);
    this.semctx_1 = semctx;
    this.evalResult_1 = evalResult;
    this.predictedAlt_1 = predictedAlt;
  }
  PredicateEvalInfo.prototype._get_semctx__4264319135_i8w9t_k$ = function () {
    return this.semctx_1;
  };
  PredicateEvalInfo.prototype._get_evalResult__2369178578_vukc32_k$ = function () {
    return this.evalResult_1;
  };
  PredicateEvalInfo.prototype._get_predictedAlt__2286564378_x7r1ly_k$ = function () {
    return this.predictedAlt_1;
  };
  PredicateEvalInfo.$metadata$ = {
    simpleName: 'PredicateEvalInfo',
    kind: 'class',
    interfaces: []
  };
  function PredicateTransition(target, ruleIndex, predIndex, isCtxDependent) {
    AbstractPredicateTransition.call(this, target);
    this.ruleIndex_1 = ruleIndex;
    this.predIndex_1 = predIndex;
    this.isCtxDependent_1 = isCtxDependent;
  }
  PredicateTransition.prototype._get_ruleIndex__1923824091_vte863_k$ = function () {
    return this.ruleIndex_1;
  };
  PredicateTransition.prototype._get_predIndex__3241973056_hexbk0_k$ = function () {
    return this.predIndex_1;
  };
  PredicateTransition.prototype._get_isCtxDependent__1166321513_jaebft_k$ = function () {
    return this.isCtxDependent_1;
  };
  PredicateTransition.prototype._get_serializationType__1649189191_r9vuiv_k$ = function () {
    return Companion_getInstance_27()._get_PREDICATE__337996698_5l8fx6_k$();
  };
  PredicateTransition.prototype._get_isEpsilon__1837953905_ue9qb5_k$ = function () {
    return true;
  };
  PredicateTransition.prototype._get_predicate__4147871610_2fkrra_k$ = function () {
    return Predicate_init_$Create$_0(this.ruleIndex_1, this.predIndex_1, this.isCtxDependent_1);
  };
  PredicateTransition.prototype.matches_4cugi_k$ = function (symbol, minVocabSymbol, maxVocabSymbol) {
    return false;
  };
  PredicateTransition.prototype.toString = function () {
    return 'pred_' + this.ruleIndex_1 + ':' + this.predIndex_1;
  };
  PredicateTransition.$metadata$ = {
    simpleName: 'PredicateTransition',
    kind: 'class',
    interfaces: []
  };
  function _get_INITIAL_HASH__3951506722($this) {
    return $this.INITIAL_HASH_1;
  }
  function Companion_21() {
    Companion_instance_21 = this;
    this.EMPTY_1 = new EmptyPredictionContext();
    this.EMPTY_RETURN_STATE_1 = 2147483647;
    this.INITIAL_HASH_1 = 1;
  }
  Companion_21.prototype._get_EMPTY__2261257284_xmtgos_k$ = function () {
    return this.EMPTY_1;
  };
  Companion_21.prototype._get_EMPTY_RETURN_STATE__147511191_2ftod3_k$ = function () {
    return this.EMPTY_RETURN_STATE_1;
  };
  Companion_21.prototype.fromRuleContext_vm7fqt_k$ = function (atn, outerContext) {
    var tmp0_elvis_lhs = outerContext;
    var outerContext1 = tmp0_elvis_lhs == null ? _get_EMPTY_RULECTX__1328169848() : tmp0_elvis_lhs;
    if (outerContext1.readParent_9zdz4w_k$() == null ? true : outerContext1 === _get_EMPTY_RULECTX__1328169848()) {
      return this.EMPTY_1;
    }
    var parent = this.fromRuleContext_vm7fqt_k$(atn, outerContext1.readParent_9zdz4w_k$());
    var state = atn._get_states__388198729_6f4g21_k$().get_fkrdnv_k$(outerContext1._get_invokingState__3304690165_gdl2q3_k$());
    var tmp = ensureNotNull(state).transition_bdhd2s_k$(0);
    var transition = tmp instanceof RuleTransition ? tmp : THROW_CCE();
    return Companion_getInstance_26().create_kfwgi2_k$(parent, transition._get_followState__3560924721_c512vj_k$()._get_stateNumber__4121888151_2v1oq1_k$());
  };
  Companion_21.prototype.calculateEmptyHashCode_ieobb2_k$ = function () {
    var hash = MurmurHash_getInstance().initialize_mh9k0f_k$(this.INITIAL_HASH_1);
    hash = MurmurHash_getInstance().finish_anppvx_k$(hash, 0);
    return hash;
  };
  Companion_21.prototype.calculateHashCode_fg5f8u_k$ = function (parent, returnState) {
    var hash = MurmurHash_getInstance().initialize_mh9k0f_k$(this.INITIAL_HASH_1);
    hash = MurmurHash_getInstance().update_qzj42v_k$(hash, parent);
    hash = MurmurHash_getInstance().update_v7hmy1_k$(hash, returnState);
    hash = MurmurHash_getInstance().finish_anppvx_k$(hash, 2);
    return hash;
  };
  Companion_21.prototype.calculateHashCode_65iawq_k$ = function (parents, returnStates) {
    var hash = MurmurHash_getInstance().initialize_mh9k0f_k$(this.INITIAL_HASH_1);
    var indexedObject = parents;
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var parent = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      hash = MurmurHash_getInstance().update_qzj42v_k$(hash, parent);
    }
    var indexedObject_0 = returnStates;
    var inductionVariable_0 = 0;
    var last_0 = indexedObject_0.length;
    while (inductionVariable_0 < last_0) {
      var returnState = indexedObject_0[inductionVariable_0];
      inductionVariable_0 = inductionVariable_0 + 1 | 0;
      hash = MurmurHash_getInstance().update_v7hmy1_k$(hash, returnState);
    }
    hash = MurmurHash_getInstance().finish_anppvx_k$(hash, imul(2, parents.length));
    return hash;
  };
  Companion_21.prototype.merge_atnk0x_k$ = function (a, b, rootIsWildcard, mergeCache) {
    var a1 = a;
    var b1 = b;
    assert(!(a1 == null) ? !(b1 == null) : false);
    if (a1 === b1 ? true : equals(a1, b1))
      return ensureNotNull(a1);
    var tmp;
    if (a1 instanceof SingletonPredictionContext) {
      tmp = b1 instanceof SingletonPredictionContext;
    } else {
      {
        tmp = false;
      }
    }
    if (tmp) {
      var tmp_0 = a1 instanceof SingletonPredictionContext ? a1 : THROW_CCE();
      return this.mergeSingletons_mmfjyl_k$(tmp_0, b1 instanceof SingletonPredictionContext ? b1 : THROW_CCE(), rootIsWildcard, mergeCache);
    } else {
    }
    if (rootIsWildcard) {
      if (a1 instanceof EmptyPredictionContext)
        return a1;
      else {
      }
      if (b1 instanceof EmptyPredictionContext)
        return b1;
      else {
      }
    }
    if (a1 instanceof SingletonPredictionContext) {
      a1 = ArrayPredictionContext_init_$Create$(a1);
    } else {
    }
    if (b1 instanceof SingletonPredictionContext) {
      b1 = ArrayPredictionContext_init_$Create$(ensureNotNull((b1 == null ? true : b1 instanceof SingletonPredictionContext) ? b1 : THROW_CCE()));
    } else {
    }
    var tmp_1 = a1 instanceof ArrayPredictionContext ? a1 : THROW_CCE();
    return this.mergeArrays_lfnwhj_k$(tmp_1, b1 instanceof ArrayPredictionContext ? b1 : THROW_CCE(), rootIsWildcard, mergeCache);
  };
  Companion_21.prototype.mergeSingletons_mmfjyl_k$ = function (a, b, rootIsWildcard, mergeCache) {
    if (!(mergeCache == null)) {
      var previous = mergeCache.get_7nwjgp_k$(a, b);
      if (!(previous == null))
        return previous;
      previous = mergeCache.get_7nwjgp_k$(b, a);
      if (!(previous == null))
        return previous;
    }
    var rootMerge = this.mergeRoot_jgp4ay_k$(a, b, rootIsWildcard);
    if (!(rootMerge == null)) {
      var tmp0_safe_receiver = mergeCache;
      if (tmp0_safe_receiver == null)
        null;
      else
        tmp0_safe_receiver.put_8k14xu_k$(a, b, rootMerge);
      Unit_getInstance();
      return rootMerge;
    }
    if (a._get_returnState__2481130608_tzwtcg_k$() === b._get_returnState__2481130608_tzwtcg_k$()) {
      var parent = this.merge_atnk0x_k$(a._get_parent__1491962785_oo9xup_k$(), b._get_parent__1491962785_oo9xup_k$(), rootIsWildcard, mergeCache);
      if (parent === a._get_parent__1491962785_oo9xup_k$())
        return a;
      if (parent === b._get_parent__1491962785_oo9xup_k$())
        return b;
      var c = Companion_getInstance_26().create_kfwgi2_k$(parent, a._get_returnState__2481130608_tzwtcg_k$());
      var tmp1_safe_receiver = mergeCache;
      if (tmp1_safe_receiver == null)
        null;
      else
        tmp1_safe_receiver.put_8k14xu_k$(a, b, c);
      Unit_getInstance();
      return c;
    } else {
      var singleParent = null;
      if (a === b ? true : !(a._get_parent__1491962785_oo9xup_k$() == null) ? equals(a._get_parent__1491962785_oo9xup_k$(), b._get_parent__1491962785_oo9xup_k$()) : false) {
        singleParent = a._get_parent__1491962785_oo9xup_k$();
      }
      if (!(singleParent == null)) {
        var tmp$ret$0;
        $l$block: {
          var tmp0_intArrayOf_0 = new Int32Array([a._get_returnState__2481130608_tzwtcg_k$(), b._get_returnState__2481130608_tzwtcg_k$()]);
          tmp$ret$0 = tmp0_intArrayOf_0;
          break $l$block;
        }
        var payloads = tmp$ret$0;
        if (a._get_returnState__2481130608_tzwtcg_k$() > b._get_returnState__2481130608_tzwtcg_k$()) {
          payloads[0] = b._get_returnState__2481130608_tzwtcg_k$();
          payloads[1] = a._get_returnState__2481130608_tzwtcg_k$();
        }
        var tmp$ret$3;
        $l$block_2: {
          var tmp1_arrayOf_0 = [singleParent, singleParent];
          var tmp$ret$2;
          $l$block_1: {
            var tmp$ret$1;
            $l$block_0: {
              tmp$ret$1 = tmp1_arrayOf_0;
              break $l$block_0;
            }
            tmp$ret$2 = tmp$ret$1;
            break $l$block_1;
          }
          tmp$ret$3 = tmp$ret$2;
          break $l$block_2;
        }
        var parents = tmp$ret$3;
        var a_ = new ArrayPredictionContext(ensureNotNull(parents), payloads);
        if (!(mergeCache == null)) {
          ensureNotNull(mergeCache).put_8k14xu_k$(a, b, a_);
          Unit_getInstance();
        }
        return a_;
      }
      var tmp$ret$4;
      $l$block_3: {
        var tmp2_intArrayOf_0 = new Int32Array([a._get_returnState__2481130608_tzwtcg_k$(), b._get_returnState__2481130608_tzwtcg_k$()]);
        tmp$ret$4 = tmp2_intArrayOf_0;
        break $l$block_3;
      }
      var payloads_0 = tmp$ret$4;
      var tmp$ret$7;
      $l$block_6: {
        var tmp3_arrayOf_0 = [a._get_parent__1491962785_oo9xup_k$(), b._get_parent__1491962785_oo9xup_k$()];
        var tmp$ret$6;
        $l$block_5: {
          var tmp$ret$5;
          $l$block_4: {
            tmp$ret$5 = tmp3_arrayOf_0;
            break $l$block_4;
          }
          tmp$ret$6 = tmp$ret$5;
          break $l$block_5;
        }
        tmp$ret$7 = tmp$ret$6;
        break $l$block_6;
      }
      var parents_0 = tmp$ret$7;
      if (a._get_returnState__2481130608_tzwtcg_k$() > b._get_returnState__2481130608_tzwtcg_k$()) {
        payloads_0[0] = b._get_returnState__2481130608_tzwtcg_k$();
        payloads_0[1] = a._get_returnState__2481130608_tzwtcg_k$();
        var tmp$ret$10;
        $l$block_9: {
          var tmp4_arrayOf_0 = [b._get_parent__1491962785_oo9xup_k$(), a._get_parent__1491962785_oo9xup_k$()];
          var tmp$ret$9;
          $l$block_8: {
            var tmp$ret$8;
            $l$block_7: {
              tmp$ret$8 = tmp4_arrayOf_0;
              break $l$block_7;
            }
            tmp$ret$9 = tmp$ret$8;
            break $l$block_8;
          }
          tmp$ret$10 = tmp$ret$9;
          break $l$block_9;
        }
        parents_0 = tmp$ret$10;
      }
      var a__0 = new ArrayPredictionContext(parents_0, payloads_0);
      if (!(mergeCache == null)) {
        ensureNotNull(mergeCache).put_8k14xu_k$(a, b, a__0);
        Unit_getInstance();
      }
      return a__0;
    }
  };
  Companion_21.prototype.mergeRoot_jgp4ay_k$ = function (a, b, rootIsWildcard) {
    if (rootIsWildcard) {
      if (a === this.EMPTY_1)
        return this.EMPTY_1;
      if (b === this.EMPTY_1)
        return this.EMPTY_1;
    } else {
      if (a === this.EMPTY_1 ? b === this.EMPTY_1 : false)
        return this.EMPTY_1;
      if (a === this.EMPTY_1) {
        var tmp$ret$0;
        $l$block: {
          var tmp0_intArrayOf_0 = new Int32Array([b._get_returnState__2481130608_tzwtcg_k$(), this.EMPTY_RETURN_STATE_1]);
          tmp$ret$0 = tmp0_intArrayOf_0;
          break $l$block;
        }
        var payloads = tmp$ret$0;
        var tmp$ret$3;
        $l$block_2: {
          var tmp1_arrayOf_0 = [b._get_parent__1491962785_oo9xup_k$(), null];
          var tmp$ret$2;
          $l$block_1: {
            var tmp$ret$1;
            $l$block_0: {
              tmp$ret$1 = tmp1_arrayOf_0;
              break $l$block_0;
            }
            tmp$ret$2 = tmp$ret$1;
            break $l$block_1;
          }
          tmp$ret$3 = tmp$ret$2;
          break $l$block_2;
        }
        var parents = tmp$ret$3;
        return new ArrayPredictionContext(parents, payloads);
      }
      if (b === this.EMPTY_1) {
        var tmp$ret$4;
        $l$block_3: {
          var tmp2_intArrayOf_0 = new Int32Array([a._get_returnState__2481130608_tzwtcg_k$(), this.EMPTY_RETURN_STATE_1]);
          tmp$ret$4 = tmp2_intArrayOf_0;
          break $l$block_3;
        }
        var payloads_0 = tmp$ret$4;
        var tmp$ret$7;
        $l$block_6: {
          var tmp3_arrayOf_0 = [a._get_parent__1491962785_oo9xup_k$(), null];
          var tmp$ret$6;
          $l$block_5: {
            var tmp$ret$5;
            $l$block_4: {
              tmp$ret$5 = tmp3_arrayOf_0;
              break $l$block_4;
            }
            tmp$ret$6 = tmp$ret$5;
            break $l$block_5;
          }
          tmp$ret$7 = tmp$ret$6;
          break $l$block_6;
        }
        var parents_0 = tmp$ret$7;
        return new ArrayPredictionContext(parents_0, payloads_0);
      }
    }
    return null;
  };
  Companion_21.prototype.mergeArrays_lfnwhj_k$ = function (a, b, rootIsWildcard, mergeCache) {
    if (!(mergeCache == null)) {
      var previous = ensureNotNull(mergeCache).get_7nwjgp_k$(a, b);
      if (!(previous == null))
        return previous;
      previous = ensureNotNull(mergeCache).get_7nwjgp_k$(b, a);
      if (!(previous == null))
        return previous;
    }
    var i = 0;
    var j = 0;
    var k = 0;
    var mergedReturnStates = new Int32Array(ensureNotNull(a._get_returnStates__3900606521_6isipz_k$()).length + ensureNotNull(b._get_returnStates__3900606521_6isipz_k$()).length | 0);
    var tmp$ret$0;
    $l$block: {
      var tmp0_arrayOfNulls_0 = ensureNotNull(a._get_returnStates__3900606521_6isipz_k$()).length + b._get_returnStates__3900606521_6isipz_k$().length | 0;
      tmp$ret$0 = fillArrayVal(Array(tmp0_arrayOfNulls_0), null);
      break $l$block;
    }
    var mergedParents = tmp$ret$0;
    while (i < ensureNotNull(a._get_returnStates__3900606521_6isipz_k$()).length ? j < ensureNotNull(b._get_returnStates__3900606521_6isipz_k$()).length : false) {
      var a_parent = ensureNotNull(a._get_parents__3301175080_gfoezc_k$())[i];
      var b_parent = ensureNotNull(b._get_parents__3301175080_gfoezc_k$())[j];
      if (a._get_returnStates__3900606521_6isipz_k$()[i] === ensureNotNull(b._get_returnStates__3900606521_6isipz_k$())[j]) {
        var payload = a._get_returnStates__3900606521_6isipz_k$()[i];
        var both$ = (payload === this.EMPTY_RETURN_STATE_1 ? a_parent == null : false) ? b_parent == null : false;
        var ax_ax = (!(a_parent == null) ? !(b_parent == null) : false) ? equals(a_parent, b_parent) : false;
        if (both$ ? true : ax_ax) {
          mergedParents[k] = a_parent;
          mergedReturnStates[k] = payload;
        } else {
          var mergedParent = this.merge_atnk0x_k$(a_parent, b_parent, rootIsWildcard, mergeCache);
          mergedParents[k] = mergedParent;
          mergedReturnStates[k] = payload;
        }
        var tmp0 = i;
        i = tmp0 + 1 | 0;
        Unit_getInstance();
        var tmp1 = j;
        j = tmp1 + 1 | 0;
        Unit_getInstance();
      } else if (a._get_returnStates__3900606521_6isipz_k$()[i] < b._get_returnStates__3900606521_6isipz_k$()[j]) {
        mergedParents[k] = a_parent;
        mergedReturnStates[k] = a._get_returnStates__3900606521_6isipz_k$()[i];
        var tmp2 = i;
        i = tmp2 + 1 | 0;
        Unit_getInstance();
      } else {
        mergedParents[k] = b_parent;
        mergedReturnStates[k] = b._get_returnStates__3900606521_6isipz_k$()[j];
        var tmp3 = j;
        j = tmp3 + 1 | 0;
        Unit_getInstance();
      }
      var tmp4 = k;
      k = tmp4 + 1 | 0;
      Unit_getInstance();
    }
    if (i < a._get_returnStates__3900606521_6isipz_k$().length) {
      var inductionVariable = i;
      var last = a._get_returnStates__3900606521_6isipz_k$().length;
      if (inductionVariable < last)
        do {
          var p = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          mergedParents[k] = ensureNotNull(a._get_parents__3301175080_gfoezc_k$())[p];
          mergedReturnStates[k] = a._get_returnStates__3900606521_6isipz_k$()[p];
          var tmp6 = k;
          k = tmp6 + 1 | 0;
          Unit_getInstance();
        }
         while (inductionVariable < last);
    } else {
      var inductionVariable_0 = j;
      var last_0 = b._get_returnStates__3900606521_6isipz_k$().length;
      if (inductionVariable_0 < last_0)
        do {
          var p_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          mergedParents[k] = ensureNotNull(b._get_parents__3301175080_gfoezc_k$())[p_0];
          mergedReturnStates[k] = b._get_returnStates__3900606521_6isipz_k$()[p_0];
          var tmp8 = k;
          k = tmp8 + 1 | 0;
          Unit_getInstance();
        }
         while (inductionVariable_0 < last_0);
    }
    if (k < mergedParents.length) {
      if (k === 1) {
        var a_ = Companion_getInstance_26().create_kfwgi2_k$(mergedParents[0], mergedReturnStates[0]);
        var tmp9_safe_receiver = mergeCache;
        if (tmp9_safe_receiver == null)
          null;
        else
          tmp9_safe_receiver.put_8k14xu_k$(a, b, a_);
        Unit_getInstance();
        return a_;
      }
      mergedParents = copyOf(mergedParents, k);
      mergedReturnStates = copyOf_1(mergedReturnStates, k);
    }
    var M = new ArrayPredictionContext(mergedParents, mergedReturnStates);
    if (M.equals(a)) {
      var tmp10_safe_receiver = mergeCache;
      if (tmp10_safe_receiver == null)
        null;
      else
        tmp10_safe_receiver.put_8k14xu_k$(a, b, a);
      Unit_getInstance();
      return a;
    }
    if (M.equals(b)) {
      var tmp11_safe_receiver = mergeCache;
      if (tmp11_safe_receiver == null)
        null;
      else
        tmp11_safe_receiver.put_8k14xu_k$(a, b, b);
      Unit_getInstance();
      return b;
    }
    var tmp$ret$1;
    $l$block_0: {
      var tmp1_toTypedArray_0 = filterNotNull(mergedParents);
      tmp$ret$1 = copyToArray(tmp1_toTypedArray_0);
      break $l$block_0;
    }
    this.combineCommonParents_yx6nn8_k$(tmp$ret$1);
    var tmp12_safe_receiver = mergeCache;
    if (tmp12_safe_receiver == null)
      null;
    else
      tmp12_safe_receiver.put_8k14xu_k$(a, b, M);
    Unit_getInstance();
    return M;
  };
  Companion_21.prototype.combineCommonParents_yx6nn8_k$ = function (parents) {
    var uniqueParents = HashMap_init_$Create$();
    var inductionVariable = 0;
    var last = parents.length - 1 | 0;
    if (inductionVariable <= last)
      do {
        var p = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var parent = parents[p];
        if (!uniqueParents.containsKey_wgk31w_k$(parent)) {
          {
            uniqueParents.put_3mhbri_k$(parent, parent);
            Unit_getInstance();
          }
        }
      }
       while (inductionVariable <= last);
    var inductionVariable_0 = 0;
    var last_0 = parents.length - 1 | 0;
    if (inductionVariable_0 <= last_0)
      do {
        var p_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        parents[p_0] = ensureNotNull(uniqueParents.get_1mhr4y_k$(parents[p_0]));
      }
       while (inductionVariable_0 <= last_0);
  };
  Companion_21.prototype.getCachedContext_ymk6pd_k$ = function (context, contextCache, visited) {
    if (context._get_isEmpty__1500737838_oti0q6_k$()) {
      return context;
    }
    var existing = visited.get_1mhr4y_k$(context);
    if (!(existing == null)) {
      return existing;
    }
    existing = contextCache.get_qs4ovu_k$(context);
    if (!(existing == null)) {
      visited.put_3mhbri_k$(context, existing);
      Unit_getInstance();
      return existing;
    }
    var changed = false;
    var tmp$ret$0;
    $l$block: {
      var tmp0_arrayOfNulls_0 = context.size_23och_k$();
      tmp$ret$0 = fillArrayVal(Array(tmp0_arrayOfNulls_0), null);
      break $l$block;
    }
    var parents = tmp$ret$0;
    var inductionVariable = 0;
    var last = parents.length - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var parent = this.getCachedContext_ymk6pd_k$(ensureNotNull(context.getParent_4aoyvz_k$(i)), contextCache, visited);
        if (changed ? true : !(parent === context.getParent_4aoyvz_k$(i))) {
          if (!changed) {
            var tmp$ret$1;
            $l$block_0: {
              var tmp1_arrayOfNulls_0 = context.size_23och_k$();
              tmp$ret$1 = fillArrayVal(Array(tmp1_arrayOfNulls_0), null);
              break $l$block_0;
            }
            parents = tmp$ret$1;
            var inductionVariable_0 = 0;
            var last_0 = context.size_23och_k$();
            if (inductionVariable_0 < last_0)
              do {
                var j = inductionVariable_0;
                inductionVariable_0 = inductionVariable_0 + 1 | 0;
                parents[j] = context.getParent_4aoyvz_k$(j);
              }
               while (inductionVariable_0 < last_0);
            changed = true;
          }
          parents[i] = parent;
        }
      }
       while (inductionVariable <= last);
    if (!changed) {
      contextCache.add_4mtnn5_k$(context);
      Unit_getInstance();
      visited.put_3mhbri_k$(context, context);
      Unit_getInstance();
      return context;
    }
    var updated;
    if (parents.length === 0) {
      updated = this.EMPTY_1;
    } else if (parents.length === 1) {
      updated = Companion_getInstance_26().create_kfwgi2_k$(parents[0], context.getReturnState_indz3e_k$(0));
    } else {
      var arrayPredictionContext = context instanceof ArrayPredictionContext ? context : THROW_CCE();
      updated = new ArrayPredictionContext(parents, arrayPredictionContext._get_returnStates__3900606521_6isipz_k$());
    }
    contextCache.add_4mtnn5_k$(updated);
    Unit_getInstance();
    visited.put_3mhbri_k$(updated, updated);
    Unit_getInstance();
    visited.put_3mhbri_k$(context, updated);
    Unit_getInstance();
    return updated;
  };
  Companion_21.prototype.getAllContextNodes_u7wowt_k$ = function (context) {
    var nodes = ArrayList_init_$Create$_0();
    var visited = new IdentityHashMap();
    this.getAllContextNodes__1ilmlp_k$(context, nodes, visited);
    return nodes;
  };
  Companion_21.prototype.getAllContextNodes__1ilmlp_k$ = function (context, nodes, visited) {
    if (context == null ? true : visited.containsKey_wgk31w_k$(context))
      return Unit_getInstance();
    visited.put_3mhbri_k$(context, context);
    Unit_getInstance();
    nodes.add_1j60pz_k$(context);
    Unit_getInstance();
    var inductionVariable = 0;
    var last = context.size_23och_k$();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        this.getAllContextNodes__1ilmlp_k$(context.getParent_4aoyvz_k$(i), nodes, visited);
      }
       while (inductionVariable < last);
  };
  Companion_21.$metadata$ = {
    simpleName: 'Companion',
    kind: 'object',
    interfaces: []
  };
  var Companion_instance_21;
  function Companion_getInstance_22() {
    if (Companion_instance_21 == null)
      new Companion_21();
    return Companion_instance_21;
  }
  function PredictionContext(cachedHashCode) {
    Companion_getInstance_22();
    this.cachedHashCode_1 = cachedHashCode;
  }
  PredictionContext.prototype._get_cachedHashCode__799358542_d7x0zy_k$ = function () {
    return this.cachedHashCode_1;
  };
  PredictionContext.prototype._get_isEmpty__1500737838_oti0q6_k$ = function () {
    return this === Companion_getInstance_22().EMPTY_1;
  };
  PredictionContext.prototype.hasEmptyPath_tkyljs_k$ = function () {
    return this.getReturnState_indz3e_k$(this.size_23och_k$() - 1 | 0) === Companion_getInstance_22().EMPTY_RETURN_STATE_1;
  };
  PredictionContext.prototype.hashCode = function () {
    return this.cachedHashCode_1;
  };
  PredictionContext.prototype.toString_ozugzf_k$ = function (recog) {
    return toString(this);
  };
  PredictionContext.prototype.toStrings_1ur9hl_k$ = function (recognizer, currentState) {
    return this.toStrings_foev9w_k$(recognizer, Companion_getInstance_22().EMPTY_1, currentState);
  };
  PredictionContext.prototype.toStrings_foev9w_k$ = function (recognizer, stop, currentState) {
    var result = ArrayList_init_$Create$_0();
    var perm = 0;
    outer: while (true) {
      var offset = 0;
      var last = true;
      var p = this;
      var stateNumber = currentState;
      var localBuffer = StringBuilder_init_$Create$();
      localBuffer.append_ssq29y_k$('[');
      Unit_getInstance();
      while (!ensureNotNull(p)._get_isEmpty__1500737838_oti0q6_k$() ? !(p === stop) : false) {
        var index = 0;
        if (p.size_23och_k$() > 0) {
          var bits = 1;
          while (1 << bits < p.size_23och_k$()) {
            var tmp0 = bits;
            bits = tmp0 + 1 | 0;
            Unit_getInstance();
          }
          var mask = (1 << bits) - 1 | 0;
          index = perm >> offset & mask;
          last = !!(last & index >= (p.size_23och_k$() - 1 | 0));
          if (index >= p.size_23och_k$()) {
            var tmp1 = perm;
            perm = tmp1 + 1 | 0;
            Unit_getInstance();
            continue outer;
          }
          offset = offset + bits | 0;
        }
        if (!(recognizer == null)) {
          if (localBuffer._get_length__2347802853_w7ahp7_k$() > 1) {
            localBuffer.append_t8oh9e_k$(_Char___init__impl__380027157(32));
            Unit_getInstance();
          }
          var atn = recognizer._get_atn__856855894_e65e8m_k$();
          var s = atn._get_states__388198729_6f4g21_k$().get_fkrdnv_k$(stateNumber);
          var ruleName = ensureNotNull(recognizer._get_ruleNames__2055232037_xzmr6t_k$())[ensureNotNull(s)._get_ruleIndex__1923824091_vte863_k$()];
          localBuffer.append_ssq29y_k$(ruleName);
          Unit_getInstance();
        } else if (!(p.getReturnState_indz3e_k$(index) === Companion_getInstance_22().EMPTY_RETURN_STATE_1)) {
          if (!p._get_isEmpty__1500737838_oti0q6_k$()) {
            if (localBuffer._get_length__2347802853_w7ahp7_k$() > 1) {
              localBuffer.append_t8oh9e_k$(_Char___init__impl__380027157(32));
              Unit_getInstance();
            }
            localBuffer.append_t8pm91_k$(p.getReturnState_indz3e_k$(index));
            Unit_getInstance();
          }
        }
        stateNumber = p.getReturnState_indz3e_k$(index);
        p = p.getParent_4aoyvz_k$(index);
      }
      localBuffer.append_ssq29y_k$(']');
      Unit_getInstance();
      result.add_1j60pz_k$(localBuffer.toString());
      Unit_getInstance();
      if (last) {
        break outer;
      }
      var tmp2 = perm;
      perm = tmp2 + 1 | 0;
      Unit_getInstance();
    }
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = copyToArray(result);
      break $l$block;
    }
    return tmp$ret$0;
  };
  PredictionContext.$metadata$ = {
    simpleName: 'PredictionContext',
    kind: 'class',
    interfaces: []
  };
  function PredictionContextCache() {
    this.cache_1 = HashMap_init_$Create$();
  }
  PredictionContextCache.prototype._get_cache__3139187855_j44d4h_k$ = function () {
    return this.cache_1;
  };
  PredictionContextCache.prototype.add_4mtnn5_k$ = function (ctx) {
    if (ctx === Companion_getInstance_22()._get_EMPTY__2261257284_xmtgos_k$())
      return Companion_getInstance_22()._get_EMPTY__2261257284_xmtgos_k$();
    var existing = this.cache_1.get_1mhr4y_k$(ctx);
    if (!(existing == null)) {
      return existing;
    }
    this.cache_1.put_3mhbri_k$(ctx, ctx);
    Unit_getInstance();
    return ctx;
  };
  PredictionContextCache.prototype.get_qs4ovu_k$ = function (ctx) {
    return this.cache_1.get_1mhr4y_k$(ctx);
  };
  PredictionContextCache.prototype.size_23och_k$ = function () {
    return this.cache_1._get_size__809037418_ddoh9m_k$();
  };
  PredictionContextCache.$metadata$ = {
    simpleName: 'PredictionContextCache',
    kind: 'class',
    interfaces: []
  };
  function Companion_22() {
    Companion_instance_22 = this;
    this.INSTANCE_1 = new AltAndContextConfigEqualityComparator();
  }
  Companion_22.prototype._get_INSTANCE__2559446_1iuvq_k$ = function () {
    return this.INSTANCE_1;
  };
  Companion_22.$metadata$ = {
    simpleName: 'Companion',
    kind: 'object',
    interfaces: []
  };
  var Companion_instance_22;
  function Companion_getInstance_23() {
    if (Companion_instance_22 == null)
      new Companion_22();
    return Companion_instance_22;
  }
  var PredictionMode_SLL_instance;
  var PredictionMode_LL_instance;
  var PredictionMode_LL_EXACT_AMBIG_DETECTION_instance;
  function AltAndContextMap() {
    var tmp = Companion_getInstance_23().INSTANCE_1;
    FlexibleHashMap_init_$Init$(tmp, 0, 0, 6, null, this);
  }
  AltAndContextMap.$metadata$ = {
    simpleName: 'AltAndContextMap',
    kind: 'class',
    interfaces: []
  };
  function AltAndContextConfigEqualityComparator() {
    Companion_getInstance_23();
    AbstractEqualityComparator.call(this);
  }
  AltAndContextConfigEqualityComparator.prototype.hashCode_d4tf1u_k$ = function (o) {
    var hashCode = MurmurHash_getInstance().initialize_mh9k0f_k$(7);
    hashCode = MurmurHash_getInstance().update_v7hmy1_k$(hashCode, o._get_state__3614753120_b8zcm8_k$()._get_stateNumber__4121888151_2v1oq1_k$());
    hashCode = MurmurHash_getInstance().update_qzj42v_k$(hashCode, o._get_context__1558698818_ps0bpe_k$());
    hashCode = MurmurHash_getInstance().finish_anppvx_k$(hashCode, 2);
    return hashCode;
  };
  AltAndContextConfigEqualityComparator.prototype.hashCode_3clz5c_k$ = function (obj) {
    return this.hashCode_d4tf1u_k$(obj instanceof ATNConfig ? obj : THROW_CCE());
  };
  AltAndContextConfigEqualityComparator.prototype.equals_512n6l_k$ = function (a, b) {
    if (a === b)
      return true;
    return (a == null ? true : b == null) ? false : ensureNotNull(a)._get_state__3614753120_b8zcm8_k$()._get_stateNumber__4121888151_2v1oq1_k$() === ensureNotNull(b)._get_state__3614753120_b8zcm8_k$()._get_stateNumber__4121888151_2v1oq1_k$() ? equals(ensureNotNull(a)._get_context__1558698818_ps0bpe_k$(), ensureNotNull(b)._get_context__1558698818_ps0bpe_k$()) : false;
  };
  AltAndContextConfigEqualityComparator.prototype.equals_cjghj5_k$ = function (a, b) {
    var tmp = (a == null ? true : a instanceof ATNConfig) ? a : THROW_CCE();
    return this.equals_512n6l_k$(tmp, (b == null ? true : b instanceof ATNConfig) ? b : THROW_CCE());
  };
  AltAndContextConfigEqualityComparator.$metadata$ = {
    simpleName: 'AltAndContextConfigEqualityComparator',
    kind: 'class',
    interfaces: []
  };
  function Companion_23() {
    Companion_instance_23 = this;
  }
  Companion_23.prototype.hasSLLConflictTerminatingPrediction_srhtvr_k$ = function (mode, configs) {
    var configs_0 = configs;
    if (this.allConfigsInRuleStopStates_8x5qwa_k$(configs_0)) {
      return true;
    }
    if (mode.equals(PredictionMode_SLL_getInstance())) {
      if (configs_0._get_hasSemanticContext__2769500_1ncyk_k$()) {
        var dup = ATNConfigSet_init_$Create$(false, 1, null);
        var tmp0_iterator = configs_0.iterator_jk1svi_k$();
        while (tmp0_iterator.hasNext_bitz1p_k$()) {
          var c = tmp0_iterator.next_20eer_k$();
          var mutableC = c;
          mutableC = ATNConfig_init_$Create$_3(mutableC, Companion_getInstance_25()._get_NONE__774049299_csuk9f_k$());
          dup.add_e3lorw_k$(mutableC);
          Unit_getInstance();
        }
        configs_0 = dup;
      }
    }
    var altsets = this.getConflictingAltSubsets_52bqy1_k$(configs_0);
    return this.hasConflictingAltSet_2j532_k$(altsets) ? !this.hasStateAssociatedWithOneAlt_uug3c5_k$(configs_0) : false;
  };
  Companion_23.prototype.hasConfigInRuleStopState_un4gxz_k$ = function (configs) {
    var tmp0_iterator = configs.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var c = tmp0_iterator.next_20eer_k$();
      var tmp = c._get_state__3614753120_b8zcm8_k$();
      if (tmp instanceof RuleStopState) {
        return true;
      } else {
      }
    }
    return false;
  };
  Companion_23.prototype.allConfigsInRuleStopStates_8x5qwa_k$ = function (configs) {
    var tmp0_iterator = configs.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var config = tmp0_iterator.next_20eer_k$();
      var tmp = config._get_state__3614753120_b8zcm8_k$();
      if (!(tmp instanceof RuleStopState)) {
        return false;
      } else {
      }
    }
    return true;
  };
  Companion_23.prototype.resolvesToJustOneViableAlt_60ddtj_k$ = function (altsets) {
    return this.getSingleViableAlt_294fjj_k$(altsets);
  };
  Companion_23.prototype.allSubsetsConflict_7rq851_k$ = function (altsets) {
    return !this.hasNonConflictingAltSet_5rqe09_k$(altsets);
  };
  Companion_23.prototype.hasNonConflictingAltSet_5rqe09_k$ = function (altsets) {
    var tmp0_iterator = altsets.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var alts = tmp0_iterator.next_20eer_k$();
      if (alts.cardinality_dz7uku_k$() === 1) {
        return true;
      }
    }
    return false;
  };
  Companion_23.prototype.hasConflictingAltSet_2j532_k$ = function (altsets) {
    var tmp0_iterator = altsets.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var alts = tmp0_iterator.next_20eer_k$();
      if (alts.cardinality_dz7uku_k$() > 1) {
        return true;
      }
    }
    return false;
  };
  Companion_23.prototype.allSubsetsEqual_pv8gvr_k$ = function (altsets) {
    var it = altsets.iterator_jk1svi_k$();
    var first = it.next_20eer_k$();
    while (it.hasNext_bitz1p_k$()) {
      var next = it.next_20eer_k$();
      if (!equals(next, first))
        return false;
    }
    return true;
  };
  Companion_23.prototype.getUniqueAlt_9phpqj_k$ = function (altsets) {
    var all = this.getAlts_2nl571_k$(altsets);
    return all.cardinality_dz7uku_k$() === 1 ? all.nextSetBit_v9xw6b_k$(0) : Companion_getInstance_8()._get_INVALID_ALT_NUMBER__3632704068_ayalks_k$();
  };
  Companion_23.prototype.getAlts_2nl571_k$ = function (altsets) {
    var all = BitSet_init_$Create$();
    var tmp0_iterator = altsets.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var alts = tmp0_iterator.next_20eer_k$();
      all.or_st4o01_k$(alts);
    }
    return all;
  };
  Companion_23.prototype.getAlts_quz6mt_k$ = function (configs) {
    var alts = BitSet_init_$Create$();
    var tmp0_iterator = configs.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var config = tmp0_iterator.next_20eer_k$();
      alts.set_2jdgjy_k$(config._get_alt__856848392_e658g8_k$());
    }
    return alts;
  };
  Companion_23.prototype.getConflictingAltSubsets_52bqy1_k$ = function (configs) {
    var configToAlts = new AltAndContextMap();
    var tmp0_iterator = configs.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var c = tmp0_iterator.next_20eer_k$();
      var alts = configToAlts.get_1mhr4y_k$(c);
      if (alts == null) {
        alts = BitSet_init_$Create$();
        configToAlts.put_3mhbri_k$(c, alts);
        Unit_getInstance();
      }
      ensureNotNull(alts).set_2jdgjy_k$(c._get_alt__856848392_e658g8_k$());
    }
    return configToAlts._get_values__2516944425_tel787_k$();
  };
  Companion_23.prototype.getStateToAltMap_61ao5a_k$ = function (configs) {
    var m = HashMap_init_$Create$();
    var tmp0_iterator = configs.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var c = tmp0_iterator.next_20eer_k$();
      var alts = m.get_1mhr4y_k$(c._get_state__3614753120_b8zcm8_k$());
      if (alts == null) {
        alts = BitSet_init_$Create$();
        m.put_3mhbri_k$(c._get_state__3614753120_b8zcm8_k$(), alts);
        Unit_getInstance();
      }
      alts.set_2jdgjy_k$(c._get_alt__856848392_e658g8_k$());
    }
    return m;
  };
  Companion_23.prototype.hasStateAssociatedWithOneAlt_uug3c5_k$ = function (configs) {
    var x = this.getStateToAltMap_61ao5a_k$(configs);
    var tmp0_iterator = x._get_values__2516944425_tel787_k$().iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var alts = tmp0_iterator.next_20eer_k$();
      if (alts.cardinality_dz7uku_k$() === 1)
        return true;
    }
    return false;
  };
  Companion_23.prototype.getSingleViableAlt_294fjj_k$ = function (altsets) {
    var viableAlts = BitSet_init_$Create$();
    var tmp0_iterator = altsets.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var alts = tmp0_iterator.next_20eer_k$();
      var minAlt = alts.nextSetBit_v9xw6b_k$(0);
      viableAlts.set_2jdgjy_k$(minAlt);
      if (viableAlts.cardinality_dz7uku_k$() > 1) {
        return Companion_getInstance_8()._get_INVALID_ALT_NUMBER__3632704068_ayalks_k$();
      }
    }
    return viableAlts.nextSetBit_v9xw6b_k$(0);
  };
  Companion_23.$metadata$ = {
    simpleName: 'Companion',
    kind: 'object',
    interfaces: []
  };
  var Companion_instance_23;
  function Companion_getInstance_24() {
    PredictionMode_initEntries();
    if (Companion_instance_23 == null)
      new Companion_23();
    return Companion_instance_23;
  }
  function values_2() {
    return [PredictionMode_SLL_getInstance(), PredictionMode_LL_getInstance(), PredictionMode_LL_EXACT_AMBIG_DETECTION_getInstance()];
  }
  function valueOf_2(value) {
    switch (value) {
      case 'SLL':
        return PredictionMode_SLL_getInstance();
      case 'LL':
        return PredictionMode_LL_getInstance();
      case 'LL_EXACT_AMBIG_DETECTION':
        return PredictionMode_LL_EXACT_AMBIG_DETECTION_getInstance();
      default:
        PredictionMode_initEntries();
        THROW_ISE();
        break;
    }
  }
  var PredictionMode_entriesInitialized;
  function PredictionMode_initEntries() {
    if (PredictionMode_entriesInitialized)
      return Unit_getInstance();
    PredictionMode_entriesInitialized = true;
    PredictionMode_SLL_instance = new PredictionMode('SLL', 0);
    PredictionMode_LL_instance = new PredictionMode('LL', 1);
    PredictionMode_LL_EXACT_AMBIG_DETECTION_instance = new PredictionMode('LL_EXACT_AMBIG_DETECTION', 2);
    Companion_getInstance_24();
  }
  function PredictionMode(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  PredictionMode.$metadata$ = {
    simpleName: 'PredictionMode',
    kind: 'class',
    interfaces: []
  };
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
  function ProfilingATNSimulator(parser) {
    ParserATNSimulator.call(this, parser, ensureNotNull(parser._get_interpreter__3830403671_7ol7l5_k$())._get_atn__856855894_e65e8m_k$(), ensureNotNull(parser._get_interpreter__3830403671_7ol7l5_k$())._get_decisionToDFA__1733740713_so82w9_k$(), ensureNotNull(ensureNotNull(parser._get_interpreter__3830403671_7ol7l5_k$())._get_sharedContextCache__1757505139_t2dfn7_k$()));
    this.decisionInfo_1 = null;
  }
  ProfilingATNSimulator.prototype._set_decisionInfo__2569303021_avupsf_k$ = function (_set____804775014) {
    this.decisionInfo_1 = _set____804775014;
  };
  ProfilingATNSimulator.prototype._get_decisionInfo__3509455841_czo8in_k$ = function () {
    return this.decisionInfo_1;
  };
  ProfilingATNSimulator.$metadata$ = {
    simpleName: 'ProfilingATNSimulator',
    kind: 'class',
    interfaces: []
  };
  function RangeTransition(target, from, to) {
    Transition.call(this, target);
    this.from_1 = from;
    this.to_1 = to;
  }
  RangeTransition.prototype._get_from__797289441_d6oogx_k$ = function () {
    return this.from_1;
  };
  RangeTransition.prototype._get_to__1413131888_ndcbjk_k$ = function () {
    return this.to_1;
  };
  RangeTransition.prototype._get_serializationType__1649189191_r9vuiv_k$ = function () {
    return Companion_getInstance_27()._get_RANGE__2622281300_rnvgrw_k$();
  };
  RangeTransition.prototype.accessLabel_hdfxg0_k$ = function () {
    return Companion_getInstance_32().of_9v4utl_k$(this.from_1, this.to_1);
  };
  RangeTransition.prototype.matches_4cugi_k$ = function (symbol, minVocabSymbol, maxVocabSymbol) {
    return symbol >= this.from_1 ? symbol <= this.to_1 : false;
  };
  RangeTransition.prototype.toString = function () {
    {
      throw NotImplementedError_init_$Create$(null, 1, null);
    }
  };
  RangeTransition.$metadata$ = {
    simpleName: 'RangeTransition',
    kind: 'class',
    interfaces: []
  };
  function RuleStartState() {
    ATNState.call(this);
    this.stopState_1 = null;
    this.isLeftRecursiveRule_1 = false;
  }
  RuleStartState.prototype._set_stopState__4160855542_lh3cfz_k$ = function (_set____804775014) {
    this.stopState_1 = _set____804775014;
  };
  RuleStartState.prototype._get_stopState__1637624450_r2zz42_k$ = function () {
    return this.stopState_1;
  };
  RuleStartState.prototype._set_isLeftRecursiveRule__1456542504_xgaptr_k$ = function (_set____804775014) {
    this.isLeftRecursiveRule_1 = _set____804775014;
  };
  RuleStartState.prototype._get_isLeftRecursiveRule__2260623540_xn71os_k$ = function () {
    return this.isLeftRecursiveRule_1;
  };
  RuleStartState.prototype._get_stateType__2749614150_pk2a4a_k$ = function () {
    return Companion_getInstance_14()._get_RULE_START__2500323116_tohgb8_k$();
  };
  RuleStartState.$metadata$ = {
    simpleName: 'RuleStartState',
    kind: 'class',
    interfaces: []
  };
  function RuleStopState() {
    ATNState.call(this);
  }
  RuleStopState.prototype._get_stateType__2749614150_pk2a4a_k$ = function () {
    return Companion_getInstance_14()._get_RULE_STOP__3959994252_5jfmus_k$();
  };
  RuleStopState.$metadata$ = {
    simpleName: 'RuleStopState',
    kind: 'class',
    interfaces: []
  };
  function RuleTransition_init_$Init$(ruleStart, ruleIndex, followState, $this) {
    RuleTransition.call($this, ruleStart, ruleIndex, 0, followState);
    return $this;
  }
  function RuleTransition_init_$Create$(ruleStart, ruleIndex, followState) {
    return RuleTransition_init_$Init$(ruleStart, ruleIndex, followState, Object.create(RuleTransition.prototype));
  }
  function RuleTransition(ruleStart, ruleIndex, precedence, followState) {
    Transition.call(this, ruleStart);
    this.ruleIndex_1 = ruleIndex;
    this.precedence_1 = precedence;
    this.followState_1 = followState;
  }
  RuleTransition.prototype._get_ruleIndex__1923824091_vte863_k$ = function () {
    return this.ruleIndex_1;
  };
  RuleTransition.prototype._get_precedence__3064254401_kcqg5b_k$ = function () {
    return this.precedence_1;
  };
  RuleTransition.prototype._set_followState__1729481893_vdfwyi_k$ = function (_set____804775014) {
    this.followState_1 = _set____804775014;
  };
  RuleTransition.prototype._get_followState__3560924721_c512vj_k$ = function () {
    return this.followState_1;
  };
  RuleTransition.prototype._get_serializationType__1649189191_r9vuiv_k$ = function () {
    return Companion_getInstance_27()._get_RULE__777920207_cv5j2n_k$();
  };
  RuleTransition.prototype._get_isEpsilon__1837953905_ue9qb5_k$ = function () {
    return true;
  };
  RuleTransition.prototype.matches_4cugi_k$ = function (symbol, minVocabSymbol, maxVocabSymbol) {
    return false;
  };
  RuleTransition.$metadata$ = {
    simpleName: 'RuleTransition',
    kind: 'class',
    interfaces: []
  };
  function Predicate_init_$Init$($this) {
    SemanticContext.call($this);
    Predicate.call($this);
    $this.ruleIndex_1 = -1;
    $this.predIndex_1 = -1;
    $this.isCtxDependent_1 = false;
    return $this;
  }
  function Predicate_init_$Create$() {
    return Predicate_init_$Init$(Object.create(Predicate.prototype));
  }
  function Predicate_init_$Init$_0(ruleIndex, predIndex, isCtxDependent, $this) {
    SemanticContext.call($this);
    Predicate.call($this);
    $this.ruleIndex_1 = ruleIndex;
    $this.predIndex_1 = predIndex;
    $this.isCtxDependent_1 = isCtxDependent;
    return $this;
  }
  function Predicate_init_$Create$_0(ruleIndex, predIndex, isCtxDependent) {
    return Predicate_init_$Init$_0(ruleIndex, predIndex, isCtxDependent, Object.create(Predicate.prototype));
  }
  function PrecedencePredicate_init_$Init$(precedence, $mask0, $marker, $this) {
    if (!(($mask0 & 1) === 0))
      precedence = 0;
    PrecedencePredicate.call($this, precedence);
    return $this;
  }
  function PrecedencePredicate_init_$Create$(precedence, $mask0, $marker) {
    return PrecedencePredicate_init_$Init$(precedence, $mask0, $marker, Object.create(PrecedencePredicate.prototype));
  }
  function filterPrecedencePredicates($this, collection) {
    var result = null;
    var iterator = collection.iterator_jk1svi_k$();
    while (iterator.hasNext_bitz1p_k$()) {
      var context = iterator.next_20eer_k$();
      if (context instanceof PrecedencePredicate) {
        if (result == null) {
          result = ArrayList_init_$Create$_0();
        }
        result.add_1j60pz_k$(context);
        Unit_getInstance();
        iterator.remove_le47v1_k$();
      } else {
      }
    }
    var tmp0_elvis_lhs = result;
    return tmp0_elvis_lhs == null ? emptyList() : tmp0_elvis_lhs;
  }
  Predicate.prototype._get_ruleIndex__1923824091_vte863_k$ = function () {
    return this.ruleIndex_1;
  };
  Predicate.prototype._get_predIndex__3241973056_hexbk0_k$ = function () {
    return this.predIndex_1;
  };
  Predicate.prototype._get_isCtxDependent__1166321513_jaebft_k$ = function () {
    return this.isCtxDependent_1;
  };
  Predicate.prototype.eval_7h9bmn_k$ = function (parser, parserCallStack) {
    var localctx = this.isCtxDependent_1 ? parserCallStack : null;
    return parser.sempred_b5qocl_k$(ensureNotNull(localctx), this.ruleIndex_1, this.predIndex_1);
  };
  Predicate.prototype.hashCode = function () {
    var tmp = MurmurHash_getInstance();
    var hashCode = tmp.initialize$default_diri32_k$(0, 1, null);
    hashCode = MurmurHash_getInstance().update_v7hmy1_k$(hashCode, this.ruleIndex_1);
    hashCode = MurmurHash_getInstance().update_v7hmy1_k$(hashCode, this.predIndex_1);
    hashCode = MurmurHash_getInstance().update_v7hmy1_k$(hashCode, this.isCtxDependent_1 ? 1 : 0);
    hashCode = MurmurHash_getInstance().finish_anppvx_k$(hashCode, 3);
    return hashCode;
  };
  Predicate.prototype.equals = function (other) {
    if (!(other instanceof Predicate))
      return false;
    else {
    }
    if (this === other)
      return true;
    return (this.ruleIndex_1 === other.ruleIndex_1 ? this.predIndex_1 === other.predIndex_1 : false) ? this.isCtxDependent_1 === other.isCtxDependent_1 : false;
  };
  Predicate.prototype.toString = function () {
    return '{' + this.ruleIndex_1 + ':' + this.predIndex_1 + '}?';
  };
  function Predicate() {
  }
  Predicate.$metadata$ = {
    simpleName: 'Predicate',
    kind: 'class',
    interfaces: []
  };
  function PrecedencePredicate(precedence) {
    SemanticContext.call(this);
    this.precedence_1 = precedence;
  }
  PrecedencePredicate.prototype._get_precedence__3064254401_kcqg5b_k$ = function () {
    return this.precedence_1;
  };
  PrecedencePredicate.prototype.eval_7h9bmn_k$ = function (parser, parserCallStack) {
    return parser.precpred_ctb818_k$(parserCallStack, this.precedence_1);
  };
  PrecedencePredicate.prototype.evalPrecedence_1usdcb_k$ = function (parser, parserCallStack) {
    var tmp;
    if (parser.precpred_ctb818_k$(parserCallStack, this.precedence_1)) {
      tmp = Companion_getInstance_25().NONE_1;
    } else {
      tmp = null;
    }
    return tmp;
  };
  PrecedencePredicate.prototype.compareTo_jt5tkz_k$ = function (other) {
    return this.precedence_1 - other.precedence_1 | 0;
  };
  PrecedencePredicate.prototype.compareTo_6thzaj_k$ = function (other) {
    return this.compareTo_jt5tkz_k$(other instanceof PrecedencePredicate ? other : THROW_CCE());
  };
  PrecedencePredicate.prototype.hashCode = function () {
    var hashCode = 1;
    hashCode = imul(31, hashCode) + this.precedence_1 | 0;
    return hashCode;
  };
  PrecedencePredicate.prototype.equals = function (other) {
    if (!(other instanceof PrecedencePredicate)) {
      return false;
    } else {
    }
    if (this === other) {
      return true;
    }
    return this.precedence_1 === other.precedence_1;
  };
  PrecedencePredicate.prototype.toString = function () {
    return '{' + this.precedence_1 + '>=prec}?';
  };
  PrecedencePredicate.$metadata$ = {
    simpleName: 'PrecedencePredicate',
    kind: 'class',
    interfaces: [Comparable]
  };
  function Operator() {
    SemanticContext.call(this);
  }
  Operator.$metadata$ = {
    simpleName: 'Operator',
    kind: 'class',
    interfaces: []
  };
  function AND(a, b) {
    Operator.call(this);
    var operands = HashSet_init_$Create$_0();
    if (a instanceof AND) {
      operands.addAll_oxxjjk_k$(toList(a.opnds_1));
      Unit_getInstance();
    } else {
      {
        operands.add_1j60pz_k$(a);
        Unit_getInstance();
      }
    }
    if (b instanceof AND) {
      operands.addAll_oxxjjk_k$(toList(b.opnds_1));
      Unit_getInstance();
    } else {
      {
        operands.add_1j60pz_k$(b);
        Unit_getInstance();
      }
    }
    var precedencePredicates = filterPrecedencePredicates(Companion_getInstance_25(), operands);
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = !precedencePredicates.isEmpty_y1axqb_k$();
      break $l$block;
    }
    if (tmp$ret$0) {
      var reduced = Collections_getInstance().min_o6sjm7_k$(precedencePredicates);
      operands.add_1j60pz_k$(reduced);
      Unit_getInstance();
    } else {
    }
    var tmp = this;
    var tmp$ret$1;
    $l$block_0: {
      tmp$ret$1 = copyToArray(operands);
      break $l$block_0;
    }
    tmp.opnds_1 = tmp$ret$1;
  }
  AND.prototype._get_opnds__3496914773_d7519n_k$ = function () {
    return this.opnds_1;
  };
  AND.prototype._get_operands__3144353857_j11n0f_k$ = function () {
    return toList(this.opnds_1);
  };
  AND.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof AND))
      return false;
    else {
    }
    return Arrays_getInstance().equals_qcb8fz_k$(this.opnds_1, other.opnds_1);
  };
  AND.prototype.hashCode = function () {
    {
      throw NotImplementedError_init_$Create$(null, 1, null);
    }
  };
  AND.prototype.eval_7h9bmn_k$ = function (parser, parserCallStack) {
    var indexedObject = this.opnds_1;
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var opnd = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      if (!opnd.eval_7h9bmn_k$(parser, parserCallStack))
        return false;
    }
    return true;
  };
  AND.prototype.evalPrecedence_1usdcb_k$ = function (parser, parserCallStack) {
    var differs = false;
    var operands = ArrayList_init_$Create$_0();
    var indexedObject = this.opnds_1;
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var context = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      var evaluated = context.evalPrecedence_1usdcb_k$(parser, parserCallStack);
      differs = !!(differs | !(evaluated === context));
      if (evaluated == null) {
        return null;
      } else if (!(evaluated === Companion_getInstance_25().NONE_1)) {
        operands.add_1j60pz_k$(evaluated);
        Unit_getInstance();
      }
    }
    if (!differs) {
      return this;
    }
    if (operands.isEmpty_y1axqb_k$()) {
      return Companion_getInstance_25().NONE_1;
    }
    var result = operands.get_fkrdnv_k$(0);
    var inductionVariable_0 = 1;
    var last_0 = operands._get_size__809037418_ddoh9m_k$();
    if (inductionVariable_0 < last_0)
      do {
        var i = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        result = Companion_getInstance_25().and_1wb5b7_k$(result, operands.get_fkrdnv_k$(i));
      }
       while (inductionVariable_0 < last_0);
    return result;
  };
  AND.prototype.toString = function () {
    var tmp = toList(this.opnds_1);
    return joinToString$default_0(tmp, '&&', null, null, 0, null, null, 62, null);
  };
  AND.$metadata$ = {
    simpleName: 'AND',
    kind: 'class',
    interfaces: []
  };
  function OR(a, b) {
    Operator.call(this);
    var operands = HashSet_init_$Create$_0();
    if (a instanceof OR) {
      operands.addAll_oxxjjk_k$(toList(a.opnds_1));
      Unit_getInstance();
    } else {
      {
        operands.add_1j60pz_k$(a);
        Unit_getInstance();
      }
    }
    if (b instanceof OR) {
      operands.addAll_oxxjjk_k$(toList(b.opnds_1));
      Unit_getInstance();
    } else {
      {
        operands.add_1j60pz_k$(b);
        Unit_getInstance();
      }
    }
    var precedencePredicates = filterPrecedencePredicates(Companion_getInstance_25(), operands);
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = !precedencePredicates.isEmpty_y1axqb_k$();
      break $l$block;
    }
    if (tmp$ret$0) {
      var reduced = Collections_getInstance().max_ol4cwx_k$(precedencePredicates);
      operands.add_1j60pz_k$(reduced);
      Unit_getInstance();
    } else {
    }
    var tmp = this;
    var tmp$ret$1;
    $l$block_0: {
      tmp$ret$1 = copyToArray(operands);
      break $l$block_0;
    }
    tmp.opnds_1 = tmp$ret$1;
  }
  OR.prototype._get_opnds__3496914773_d7519n_k$ = function () {
    return this.opnds_1;
  };
  OR.prototype._get_operands__3144353857_j11n0f_k$ = function () {
    return toList(this.opnds_1);
  };
  OR.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof OR))
      return false;
    else {
    }
    return Arrays_getInstance().equals_qcb8fz_k$(this.opnds_1, other.opnds_1);
  };
  OR.prototype.hashCode = function () {
    {
      throw NotImplementedError_init_$Create$(null, 1, null);
    }
  };
  OR.prototype.eval_7h9bmn_k$ = function (parser, parserCallStack) {
    var indexedObject = this.opnds_1;
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var opnd = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      if (opnd.eval_7h9bmn_k$(parser, parserCallStack))
        return true;
    }
    return false;
  };
  OR.prototype.evalPrecedence_1usdcb_k$ = function (parser, parserCallStack) {
    var differs = false;
    var operands = ArrayList_init_$Create$_0();
    var indexedObject = this.opnds_1;
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var context = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      var evaluated = context.evalPrecedence_1usdcb_k$(parser, parserCallStack);
      differs = !!(differs | !(evaluated === context));
      if (evaluated === Companion_getInstance_25().NONE_1) {
        return Companion_getInstance_25().NONE_1;
      } else if (!(evaluated == null)) {
        operands.add_1j60pz_k$(evaluated);
        Unit_getInstance();
      }
    }
    if (!differs) {
      return this;
    }
    if (operands.isEmpty_y1axqb_k$()) {
      return null;
    }
    var result = operands.get_fkrdnv_k$(0);
    var inductionVariable_0 = 1;
    var last_0 = operands._get_size__809037418_ddoh9m_k$();
    if (inductionVariable_0 < last_0)
      do {
        var i = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        result = Companion_getInstance_25().or_g8i9g1_k$(result, operands.get_fkrdnv_k$(i));
      }
       while (inductionVariable_0 < last_0);
    return result;
  };
  OR.prototype.toString = function () {
    var tmp = toList(this.opnds_1);
    return joinToString$default_0(tmp, '||', null, null, 0, null, null, 62, null);
  };
  OR.$metadata$ = {
    simpleName: 'OR',
    kind: 'class',
    interfaces: []
  };
  function Companion_24() {
    Companion_instance_24 = this;
    this.NONE_1 = Predicate_init_$Create$();
  }
  Companion_24.prototype._get_NONE__774049299_csuk9f_k$ = function () {
    return this.NONE_1;
  };
  Companion_24.prototype.and_1wb5b7_k$ = function (a, b) {
    if (a == null ? true : a === this.NONE_1)
      return b;
    if (b == null ? true : b === this.NONE_1)
      return a;
    var result = new AND(a, b);
    var tmp;
    if (result.opnds_1.length === 1) {
      tmp = result.opnds_1[0];
    } else {
      tmp = result;
    }
    return tmp;
  };
  Companion_24.prototype.or_g8i9g1_k$ = function (a, b) {
    if (a == null)
      return b;
    if (b == null)
      return a;
    if (a === this.NONE_1 ? true : b === this.NONE_1)
      return this.NONE_1;
    var result = new OR(a, b);
    var tmp;
    if (result.opnds_1.length === 1) {
      tmp = result.opnds_1[0];
    } else {
      tmp = result;
    }
    return tmp;
  };
  Companion_24.$metadata$ = {
    simpleName: 'Companion',
    kind: 'object',
    interfaces: []
  };
  var Companion_instance_24;
  function Companion_getInstance_25() {
    if (Companion_instance_24 == null)
      new Companion_24();
    return Companion_instance_24;
  }
  function SemanticContext() {
    Companion_getInstance_25();
  }
  SemanticContext.prototype.evalPrecedence_1usdcb_k$ = function (parser, parserCallStack) {
    return this;
  };
  SemanticContext.$metadata$ = {
    simpleName: 'SemanticContext',
    kind: 'class',
    interfaces: []
  };
  function SetTransition(target, set) {
    Transition.call(this, target);
    var set_0 = set;
    if (set_0 == null)
      set_0 = Companion_getInstance_32().of_h0dvii_k$(Companion_getInstance_6()._get_INVALID_TYPE__2936648937_mgph5j_k$());
    this.set_1 = set_0;
  }
  SetTransition.prototype._get_set__857377903_e6gl0v_k$ = function () {
    return this.set_1;
  };
  SetTransition.prototype._get_serializationType__1649189191_r9vuiv_k$ = function () {
    return Companion_getInstance_27()._get_SET__856392847_e5vgy7_k$();
  };
  SetTransition.prototype.accessLabel_hdfxg0_k$ = function () {
    return this.set_1;
  };
  SetTransition.prototype.matches_4cugi_k$ = function (symbol, minVocabSymbol, maxVocabSymbol) {
    return this.set_1.contains_1pg60y_k$(symbol);
  };
  SetTransition.prototype.toString = function () {
    return this.set_1.toString();
  };
  SetTransition.$metadata$ = {
    simpleName: 'SetTransition',
    kind: 'class',
    interfaces: []
  };
  function Companion_25() {
    Companion_instance_25 = this;
  }
  Companion_25.prototype.create_kfwgi2_k$ = function (parent, returnState) {
    var tmp;
    if (returnState === Companion_getInstance_22()._get_EMPTY_RETURN_STATE__147511191_2ftod3_k$() ? parent == null : false) {
      tmp = Companion_getInstance_22()._get_EMPTY__2261257284_xmtgos_k$();
    } else {
      tmp = new SingletonPredictionContext(parent, returnState);
    }
    return tmp;
  };
  Companion_25.$metadata$ = {
    simpleName: 'Companion',
    kind: 'object',
    interfaces: []
  };
  var Companion_instance_25;
  function Companion_getInstance_26() {
    if (Companion_instance_25 == null)
      new Companion_25();
    return Companion_instance_25;
  }
  function SingletonPredictionContext(parent, returnState) {
    Companion_getInstance_26();
    PredictionContext.call(this, !(parent == null) ? Companion_getInstance_22().calculateHashCode_fg5f8u_k$(parent, returnState) : Companion_getInstance_22().calculateEmptyHashCode_ieobb2_k$());
    this.parent_1 = parent;
    this.returnState_1 = returnState;
    assert(!(this.returnState_1 === Companion_getInstance_14()._get_INVALID_STATE_NUMBER__1984392172_wtgess_k$()));
  }
  SingletonPredictionContext.prototype._get_parent__1491962785_oo9xup_k$ = function () {
    return this.parent_1;
  };
  SingletonPredictionContext.prototype._get_returnState__2481130608_tzwtcg_k$ = function () {
    return this.returnState_1;
  };
  SingletonPredictionContext.prototype.size_23och_k$ = function () {
    return 1;
  };
  SingletonPredictionContext.prototype.getParent_4aoyvz_k$ = function (index) {
    assert(index === 0);
    return this.parent_1;
  };
  SingletonPredictionContext.prototype.getReturnState_indz3e_k$ = function (index) {
    assert(index === 0);
    return this.returnState_1;
  };
  SingletonPredictionContext.prototype.equals = function (o) {
    if (this === o) {
      return true;
    } else {
      if (!(o instanceof SingletonPredictionContext)) {
        return false;
      } else {
      }
    }
    if (!(this.hashCode() === hashCode(o))) {
      return false;
    }
    var s = (o == null ? true : o instanceof SingletonPredictionContext) ? o : THROW_CCE();
    return (this.returnState_1 === ensureNotNull(s).returnState_1 ? !(this.parent_1 == null) : false) ? equals(this.parent_1, s.parent_1) : false;
  };
  SingletonPredictionContext.prototype.toString = function () {
    var up = !(this.parent_1 == null) ? toString(ensureNotNull(this.parent_1)) : '';
    var tmp;
    if (up.length === 0) {
      var tmp_0;
      if (this.returnState_1 === Companion_getInstance_22()._get_EMPTY_RETURN_STATE__147511191_2ftod3_k$()) {
        tmp_0 = '$';
      } else {
        tmp_0 = this.returnState_1.toString();
      }
      tmp = tmp_0;
    } else {
      tmp = this.returnState_1.toString() + ' ' + up;
    }
    return tmp;
  };
  SingletonPredictionContext.$metadata$ = {
    simpleName: 'SingletonPredictionContext',
    kind: 'class',
    interfaces: []
  };
  function StarBlockStartState() {
    BlockStartState.call(this);
  }
  StarBlockStartState.prototype._get_stateType__2749614150_pk2a4a_k$ = function () {
    return Companion_getInstance_14()._get_STAR_BLOCK_START__2498915240_tpbmmw_k$();
  };
  StarBlockStartState.$metadata$ = {
    simpleName: 'StarBlockStartState',
    kind: 'class',
    interfaces: []
  };
  function StarLoopEntryState() {
    DecisionState.call(this);
    this.loopBackState_1 = null;
    this.isPrecedenceDecision_1 = false;
  }
  StarLoopEntryState.prototype._set_loopBackState__2314937695_w51frd_k$ = function (_set____804775014) {
    this.loopBackState_1 = _set____804775014;
  };
  StarLoopEntryState.prototype._get_loopBackState__1394904043_n2hmuj_k$ = function () {
    return this.loopBackState_1;
  };
  StarLoopEntryState.prototype._set_isPrecedenceDecision__783436679_34y0ea_k$ = function (_set____804775014) {
    this.isPrecedenceDecision_1 = _set____804775014;
  };
  StarLoopEntryState.prototype._get_isPrecedenceDecision__4235112315_zmwed_k$ = function () {
    return this.isPrecedenceDecision_1;
  };
  StarLoopEntryState.prototype._get_stateType__2749614150_pk2a4a_k$ = function () {
    return Companion_getInstance_14()._get_STAR_LOOP_ENTRY__2890957197_n7wt4j_k$();
  };
  StarLoopEntryState.$metadata$ = {
    simpleName: 'StarLoopEntryState',
    kind: 'class',
    interfaces: []
  };
  function StarLoopbackState() {
    ATNState.call(this);
  }
  StarLoopbackState.prototype._get_loopEntryState__2322176360_wmjr88_k$ = function () {
    var tmp = this.transition_bdhd2s_k$(0)._get_target__747061146_ccs42i_k$();
    return tmp instanceof StarLoopEntryState ? tmp : THROW_CCE();
  };
  StarLoopbackState.prototype._get_stateType__2749614150_pk2a4a_k$ = function () {
    return Companion_getInstance_14()._get_STAR_LOOP_BACK__3553765558_c9aix6_k$();
  };
  StarLoopbackState.$metadata$ = {
    simpleName: 'StarLoopbackState',
    kind: 'class',
    interfaces: []
  };
  function TokensStartState() {
    DecisionState.call(this);
  }
  TokensStartState.prototype._get_stateType__2749614150_pk2a4a_k$ = function () {
    return Companion_getInstance_14()._get_TOKEN_START__1037605557_h5rhkl_k$();
  };
  TokensStartState.$metadata$ = {
    simpleName: 'TokensStartState',
    kind: 'class',
    interfaces: []
  };
  function Companion_26() {
    Companion_instance_26 = this;
    this.EPSILON_1 = 1;
    this.RANGE_1 = 2;
    this.RULE_1 = 3;
    this.PREDICATE_1 = 4;
    this.ATOM_1 = 5;
    this.ACTION_1 = 6;
    this.SET_1 = 7;
    this.NOT_SET_1 = 8;
    this.WILDCARD_1 = 9;
    this.PRECEDENCE_1 = 10;
    this.serializationNames_1 = listOf(['INVALID', 'EPSILON', 'RANGE', 'RULE', 'PREDICATE', 'ATOM', 'ACTION', 'SET', 'NOT_SET', 'WILDCARD', 'PRECEDENCE']);
  }
  Companion_26.prototype._get_EPSILON__2552669447_stbhmh_k$ = function () {
    return this.EPSILON_1;
  };
  Companion_26.prototype._get_RANGE__2622281300_rnvgrw_k$ = function () {
    return this.RANGE_1;
  };
  Companion_26.prototype._get_RULE__777920207_cv5j2n_k$ = function () {
    return this.RULE_1;
  };
  Companion_26.prototype._get_PREDICATE__337996698_5l8fx6_k$ = function () {
    return this.PREDICATE_1;
  };
  Companion_26.prototype._get_ATOM__762193690_clsgey_k$ = function () {
    return this.ATOM_1;
  };
  Companion_26.prototype._get_ACTION__1841517461_uge3yt_k$ = function () {
    return this.ACTION_1;
  };
  Companion_26.prototype._get_SET__856392847_e5vgy7_k$ = function () {
    return this.SET_1;
  };
  Companion_26.prototype._get_NOT_SET__219735323_3mtouz_k$ = function () {
    return this.NOT_SET_1;
  };
  Companion_26.prototype._get_WILDCARD__2264700209_xkro3z_k$ = function () {
    return this.WILDCARD_1;
  };
  Companion_26.prototype._get_PRECEDENCE__922248129_f92z7l_k$ = function () {
    return this.PRECEDENCE_1;
  };
  Companion_26.prototype._get_serializationNames__3686197587_a2g1pp_k$ = function () {
    return this.serializationNames_1;
  };
  Companion_26.$metadata$ = {
    simpleName: 'Companion',
    kind: 'object',
    interfaces: []
  };
  var Companion_instance_26;
  function Companion_getInstance_27() {
    if (Companion_instance_26 == null)
      new Companion_26();
    return Companion_instance_26;
  }
  function Transition(target) {
    Companion_getInstance_27();
    this.target_1 = target;
    if (this.target_1 == null) {
      throw NullPointerException_init_$Create$('target cannot be null.');
    }
  }
  Transition.prototype._set_target__658481318_tvlbpa_k$ = function (_set____804775014) {
    this.target_1 = _set____804775014;
  };
  Transition.prototype._get_target__747061146_ccs42i_k$ = function () {
    return this.target_1;
  };
  Transition.prototype._get_isEpsilon__1837953905_ue9qb5_k$ = function () {
    return false;
  };
  Transition.prototype.accessLabel_hdfxg0_k$ = function () {
    return null;
  };
  Transition.$metadata$ = {
    simpleName: 'Transition',
    kind: 'class',
    interfaces: []
  };
  function WildcardTransition(target) {
    Transition.call(this, target);
  }
  WildcardTransition.prototype._get_serializationType__1649189191_r9vuiv_k$ = function () {
    return Companion_getInstance_27()._get_WILDCARD__2264700209_xkro3z_k$();
  };
  WildcardTransition.prototype.matches_4cugi_k$ = function (symbol, minVocabSymbol, maxVocabSymbol) {
    return symbol >= minVocabSymbol ? symbol <= maxVocabSymbol : false;
  };
  WildcardTransition.prototype.toString = function () {
    return '.';
  };
  WildcardTransition.$metadata$ = {
    simpleName: 'WildcardTransition',
    kind: 'class',
    interfaces: []
  };
  function DFA_init_$Init$(atnStartState, decision, $mask0, $marker, $this) {
    if (!(($mask0 & 2) === 0))
      decision = 0;
    DFA.call($this, atnStartState, decision);
    return $this;
  }
  function DFA_init_$Create$(atnStartState, decision, $mask0, $marker) {
    return DFA_init_$Init$(atnStartState, decision, $mask0, $marker, Object.create(DFA.prototype));
  }
  function _get_precedenceDfa__1968230844($this) {
    return $this.precedenceDfa_1;
  }
  function sam$kotlin_Comparator$0(function_0) {
    this.function_1 = function_0;
  }
  sam$kotlin_Comparator$0.prototype.compare_6tbigh_k$ = function (a, b) {
    return this.function_1(a, b);
  };
  sam$kotlin_Comparator$0.prototype.compare = function (a, b) {
    return this.compare_6tbigh_k$(a, b);
  };
  sam$kotlin_Comparator$0.$metadata$ = {
    simpleName: 'sam$kotlin_Comparator$0',
    kind: 'class',
    interfaces: [Comparator]
  };
  function DFA$getStates$lambda() {
    return function (a, b) {
      var tmp$ret$2;
      $l$block_1: {
        var tmp$ret$0;
        $l$block: {
          tmp$ret$0 = a._get_stateNumber__4121888151_2v1oq1_k$();
          break $l$block;
        }
        var tmp = tmp$ret$0;
        var tmp$ret$1;
        $l$block_0: {
          tmp$ret$1 = b._get_stateNumber__4121888151_2v1oq1_k$();
          break $l$block_0;
        }
        tmp$ret$2 = compareValues(tmp, tmp$ret$1);
        break $l$block_1;
      }
      return tmp$ret$2;
    };
  }
  function DFA(atnStartState, decision) {
    this.atnStartState_1 = atnStartState;
    this.decision_1 = decision;
    this.states_1 = HashMap_init_$Create$();
    this.s0__1 = null;
    var precedenceDfa = false;
    var tmp = this.atnStartState_1;
    if (tmp instanceof StarLoopEntryState) {
      if (this.atnStartState_1._get_isPrecedenceDecision__4235112315_zmwed_k$()) {
        precedenceDfa = true;
        var precedenceState = DFAState_init_$Create$_1(ATNConfigSet_init_$Create$(false, 1, null));
        var tmp$ret$0;
        $l$block: {
          tmp$ret$0 = fillArrayVal(Array(0), null);
          break $l$block;
        }
        precedenceState._set_edges__841171375_hbfclq_k$(tmp$ret$0);
        precedenceState._set_isAcceptState__2650129734_9h16al_k$(false);
        precedenceState._set_requiresFullContext__4232502195_6i8afq_k$(false);
        this.s0__1 = precedenceState;
      }
    } else {
    }
    this.precedenceDfa_1 = precedenceDfa;
  }
  DFA.prototype._get_atnStartState__171174855_2twvd3_k$ = function () {
    return this.atnStartState_1;
  };
  DFA.prototype._get_decision__1839254383_uf1lrj_k$ = function () {
    return this.decision_1;
  };
  DFA.prototype._get_states__388198729_6f4g21_k$ = function () {
    return this.states_1;
  };
  DFA.prototype._set_s0__3473238554_l2xee_k$ = function (_set____804775014) {
    this.s0__1 = _set____804775014;
  };
  DFA.prototype._get_s0__1413128974_ndc9am_k$ = function () {
    return this.s0__1;
  };
  DFA.prototype._set_isPrecedenceDfa__1651019066_p6zbe7_k$ = function (precedenceDfa) {
    if (!(precedenceDfa === this._get_isPrecedenceDfa__2261942470_xmerzu_k$())) {
      throw UnsupportedOperationException_init_$Create$('The precedenceDfa field cannot change after a DFA is constructed.');
    }
  };
  DFA.prototype._get_isPrecedenceDfa__2261942470_xmerzu_k$ = function () {
    return this.precedenceDfa_1;
  };
  DFA.prototype.getPrecedenceStartState_7o1dte_k$ = function (precedence) {
    {
      var tmp0_check_0 = this._get_isPrecedenceDfa__2261942470_xmerzu_k$();
      {
      }
      if (!tmp0_check_0) {
        var tmp$ret$0;
        $l$block: {
          tmp$ret$0 = 'Only precedence DFAs may contain a precedence start state.';
          break $l$block;
        }
        var message_1 = tmp$ret$0;
        throw IllegalStateException_init_$Create$(toString(message_1));
      }
    }
    var tmp;
    if (precedence < 0 ? true : precedence >= ensureNotNull(ensureNotNull(this.s0__1)._get_edges__3199333435_i4b8hx_k$()).length) {
      tmp = null;
    } else {
      tmp = ensureNotNull(ensureNotNull(this.s0__1)._get_edges__3199333435_i4b8hx_k$())[precedence];
    }
    return tmp;
  };
  DFA.prototype.setPrecedenceStartState_dngz1p_k$ = function (precedence, startState) {
    {
      var tmp0_check_0 = this._get_isPrecedenceDfa__2261942470_xmerzu_k$();
      {
      }
      if (!tmp0_check_0) {
        var tmp$ret$0;
        $l$block: {
          tmp$ret$0 = 'Only precedence DFAs may contain a precedence start state.';
          break $l$block;
        }
        var message_1 = tmp$ret$0;
        throw IllegalStateException_init_$Create$(toString(message_1));
      }
    }
    if (precedence < 0) {
      return Unit_getInstance();
    }
    if (precedence >= ensureNotNull(ensureNotNull(this.s0__1)._get_edges__3199333435_i4b8hx_k$()).length) {
      ensureNotNull(this.s0__1)._set_edges__841171375_hbfclq_k$(copyOf(ensureNotNull(ensureNotNull(this.s0__1)._get_edges__3199333435_i4b8hx_k$()), precedence + 1 | 0));
    }
    ensureNotNull(ensureNotNull(this.s0__1)._get_edges__3199333435_i4b8hx_k$())[precedence] = startState;
  };
  DFA.prototype.getStates_daei2g_k$ = function () {
    var result = ArrayList_init_$Create$_1(this.states_1._get_keys__801529559_d97k5z_k$());
    {
      if (result._get_size__809037418_ddoh9m_k$() > 1) {
        var tmp$ret$0;
        $l$block: {
          var tmp = DFA$getStates$lambda();
          tmp$ret$0 = new sam$kotlin_Comparator$0(tmp);
          break $l$block;
        }
        sortWith(result, tmp$ret$0);
      }
    }
    return result;
  };
  DFA.prototype.toString = function () {
    var tmp0_elvis_lhs = this.toString_dmzcgh_k$(Companion_getInstance_7()._get_EMPTY_VOCABULARY__391582355_6h4yvn_k$());
    return tmp0_elvis_lhs == null ? 'null' : tmp0_elvis_lhs;
  };
  DFA.prototype.toString_dmzcgh_k$ = function (vocabulary) {
    if (this.s0__1 == null) {
      return '';
    }
    var serializer = DFASerializer_init_$Create$_0(this, vocabulary);
    return serializer.toString();
  };
  DFA.prototype.toLexerString_rhiloe_k$ = function () {
    if (this.s0__1 == null)
      return '';
    var serializer = new LexerDFASerializer(this);
    return serializer.toString();
  };
  DFA.$metadata$ = {
    simpleName: 'DFA',
    kind: 'class',
    interfaces: []
  };
  function _get_dfa__856931410($this) {
    return $this.dfa_1;
  }
  function _get_vocabulary__3716553829($this) {
    return $this.vocabulary_1;
  }
  function DFASerializer_init_$Init$(dfa, tokenNames, $this) {
    var tmp = Companion_getInstance_7();
    DFASerializer_init_$Init$_0(dfa, tmp.fromTokenNames_5d7him_k$(isArray(tokenNames) ? tokenNames : THROW_CCE()), $this);
    return $this;
  }
  function DFASerializer_init_$Create$(dfa, tokenNames) {
    return DFASerializer_init_$Init$(dfa, tokenNames, Object.create(DFASerializer.prototype));
  }
  function DFASerializer_init_$Init$_0(dfa, vocabulary, $this) {
    DFASerializer.call($this);
    $this.dfa_1 = dfa;
    $this.vocabulary_1 = vocabulary;
    return $this;
  }
  function DFASerializer_init_$Create$_0(dfa, vocabulary) {
    return DFASerializer_init_$Init$_0(dfa, vocabulary, Object.create(DFASerializer.prototype));
  }
  DFASerializer.prototype.toString = function () {
    if (this.dfa_1._get_s0__1413128974_ndc9am_k$() == null)
      return 'null';
    var buf = StringBuilder_init_$Create$();
    var states = this.dfa_1.getStates_daei2g_k$();
    var tmp0_iterator = states.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var s = tmp0_iterator.next_20eer_k$();
      var n = 0;
      if (!(s._get_edges__3199333435_i4b8hx_k$() == null))
        n = ensureNotNull(s._get_edges__3199333435_i4b8hx_k$()).length;
      var inductionVariable = 0;
      var last = n;
      if (inductionVariable < last)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var t = ensureNotNull(s._get_edges__3199333435_i4b8hx_k$())[i];
          if (!(t == null) ? !(t._get_stateNumber__4121888151_2v1oq1_k$() === IntCompanionObject_getInstance()._get_MAX_VALUE__3201573499_i2z81x_k$()) : false) {
            buf.append_ssq29y_k$(this.getStateString_mjmxh2_k$(s));
            Unit_getInstance();
            var label = this.getEdgeLabel_7bku1s_k$(i);
            buf.append_ssq29y_k$('-').append_ssq29y_k$(label).append_ssq29y_k$('->').append_ssq29y_k$(this.getStateString_mjmxh2_k$(t)).append_t8oh9e_k$(_Char___init__impl__380027157(10));
            Unit_getInstance();
          }
        }
         while (inductionVariable < last);
    }
    var output = buf.toString();
    return output.length === 0 ? 'null' : output;
  };
  DFASerializer.prototype.getEdgeLabel_7bku1s_k$ = function (i) {
    return this.vocabulary_1.getDisplayName_u57fdi_k$(i - 1 | 0);
  };
  DFASerializer.prototype.getStateString_mjmxh2_k$ = function (s) {
    var n = s._get_stateNumber__4121888151_2v1oq1_k$();
    var baseStateStr = (s._get_isAcceptState__1730096082_sm1yoi_k$() ? ':' : '') + 's' + n + (s._get_requiresFullContext__741615935_c9jein_k$() ? '^' : '');
    var tmp;
    if (s._get_isAcceptState__1730096082_sm1yoi_k$()) {
      var tmp_0;
      if (!(s._get_predicates__4029970031_4drt75_k$() == null)) {
        var tmp_1 = baseStateStr + '=>';
        var tmp_2 = ensureNotNull(s._get_predicates__4029970031_4drt75_k$());
        tmp_0 = tmp_1 + joinToString$default(tmp_2, null, null, null, 0, null, null, 63, null);
      } else {
        tmp_0 = baseStateStr + '=>' + s._get_prediction__4047198684_43ijhg_k$();
      }
      tmp = tmp_0;
    } else {
      tmp = baseStateStr;
    }
    return tmp;
  };
  function DFASerializer() {
  }
  DFASerializer.$metadata$ = {
    simpleName: 'DFASerializer',
    kind: 'class',
    interfaces: []
  };
  function PredPrediction(pred, alt) {
    this.pred_1 = pred;
    this.alt_1 = alt;
  }
  PredPrediction.prototype._set_pred__591897686_k3d7gy_k$ = function (_set____804775014) {
    this.pred_1 = _set____804775014;
  };
  PredPrediction.prototype._get_pred__806514762_dc6eru_k$ = function () {
    return this.pred_1;
  };
  PredPrediction.prototype._set_alt__295735932_65gu5w_k$ = function (_set____804775014) {
    this.alt_1 = _set____804775014;
  };
  PredPrediction.prototype._get_alt__856848392_e658g8_k$ = function () {
    return this.alt_1;
  };
  PredPrediction.prototype.toString = function () {
    return '(' + this.pred_1 + ', ' + this.alt_1 + ')';
  };
  PredPrediction.$metadata$ = {
    simpleName: 'PredPrediction',
    kind: 'class',
    interfaces: []
  };
  function DFAState_init_$Init$($this) {
    DFAState.call($this);
    return $this;
  }
  function DFAState_init_$Create$() {
    return DFAState_init_$Init$(Object.create(DFAState.prototype));
  }
  function DFAState_init_$Init$_0(stateNumber, $this) {
    DFAState.call($this);
    $this.stateNumber_1 = stateNumber;
    return $this;
  }
  function DFAState_init_$Create$_0(stateNumber) {
    return DFAState_init_$Init$_0(stateNumber, Object.create(DFAState.prototype));
  }
  function DFAState_init_$Init$_1(configs, $this) {
    DFAState.call($this);
    $this.configs_1 = configs;
    return $this;
  }
  function DFAState_init_$Create$_1(configs) {
    return DFAState_init_$Init$_1(configs, Object.create(DFAState.prototype));
  }
  DFAState.prototype._set_stateNumber__2290445323_a7hzut_k$ = function (_set____804775014) {
    this.stateNumber_1 = _set____804775014;
  };
  DFAState.prototype._get_stateNumber__4121888151_2v1oq1_k$ = function () {
    return this.stateNumber_1;
  };
  DFAState.prototype._set_configs__3094864948_rn93q3_k$ = function (_set____804775014) {
    this.configs_1 = _set____804775014;
  };
  DFAState.prototype._get_configs__1545872320_pkdeps_k$ = function () {
    return this.configs_1;
  };
  DFAState.prototype._set_edges__841171375_hbfclq_k$ = function (_set____804775014) {
    this.edges_1 = _set____804775014;
  };
  DFAState.prototype._get_edges__3199333435_i4b8hx_k$ = function () {
    return this.edges_1;
  };
  DFAState.prototype._set_isAcceptState__2650129734_9h16al_k$ = function (_set____804775014) {
    this.isAcceptState_1 = _set____804775014;
  };
  DFAState.prototype._get_isAcceptState__1730096082_sm1yoi_k$ = function () {
    return this.isAcceptState_1;
  };
  DFAState.prototype._set_prediction__662983912_tglolk_k$ = function (_set____804775014) {
    this.prediction_1 = _set____804775014;
  };
  DFAState.prototype._get_prediction__4047198684_43ijhg_k$ = function () {
    return this.prediction_1;
  };
  DFAState.prototype._set_lexerActionExecutor__164029520_nncnix_k$ = function (_set____804775014) {
    this.lexerActionExecutor_1 = _set____804775014;
  };
  DFAState.prototype._get_lexerActionExecutor__968110556_g0dyvw_k$ = function () {
    return this.lexerActionExecutor_1;
  };
  DFAState.prototype._set_requiresFullContext__4232502195_6i8afq_k$ = function (_set____804775014) {
    this.requiresFullContext_1 = _set____804775014;
  };
  DFAState.prototype._get_requiresFullContext__741615935_c9jein_k$ = function () {
    return this.requiresFullContext_1;
  };
  DFAState.prototype._set_predicates__645755259_mgrtp8_k$ = function (_set____804775014) {
    this.predicates_1 = _set____804775014;
  };
  DFAState.prototype._get_predicates__4029970031_4drt75_k$ = function () {
    return this.predicates_1;
  };
  DFAState.prototype._get_altSet__1380532274_mtxliq_k$ = function () {
    var alts = HashSet_init_$Create$_0();
    if (!(this.configs_1 == null)) {
      var tmp0_iterator = ensureNotNull(this.configs_1).iterator_jk1svi_k$();
      while (tmp0_iterator.hasNext_bitz1p_k$()) {
        var c = tmp0_iterator.next_20eer_k$();
        alts.add_1j60pz_k$(c._get_alt__856848392_e658g8_k$());
        Unit_getInstance();
      }
    }
    return alts.isEmpty_y1axqb_k$() ? null : alts;
  };
  DFAState.prototype.hashCode = function () {
    var hash = MurmurHash_getInstance().initialize_mh9k0f_k$(7);
    hash = MurmurHash_getInstance().update_v7hmy1_k$(hash, ensureNotNull(this.configs_1).hashCode());
    hash = MurmurHash_getInstance().finish_anppvx_k$(hash, 1);
    return hash;
  };
  DFAState.prototype.equals = function (o) {
    if (this === o)
      return true;
    if (!(o instanceof DFAState)) {
      return false;
    } else {
    }
    var other = (o == null ? true : o instanceof DFAState) ? o : THROW_CCE();
    return ensureNotNull(this.configs_1).equals(ensureNotNull(other).configs_1);
  };
  DFAState.prototype.toString = function () {
    var buf = StringBuilder_init_$Create$();
    buf.append_t8pm91_k$(this.stateNumber_1).append_ssq29y_k$(':').append_t8pm91_k$(this.configs_1);
    Unit_getInstance();
    if (this.isAcceptState_1) {
      buf.append_ssq29y_k$('=>');
      Unit_getInstance();
      if (!(this.predicates_1 == null)) {
        var tmp = ensureNotNull(this.predicates_1);
        buf.append_ssq29y_k$(joinToString$default(tmp, null, null, null, 0, null, null, 63, null));
        Unit_getInstance();
      } else {
        buf.append_t8pm91_k$(this.prediction_1);
        Unit_getInstance();
      }
    }
    return buf.toString();
  };
  function DFAState() {
    this.stateNumber_1 = -1;
    var tmp = this;
    tmp.configs_1 = ATNConfigSet_init_$Create$(false, 1, null);
    this.edges_1 = null;
    this.isAcceptState_1 = false;
    this.prediction_1 = 0;
    this.lexerActionExecutor_1 = null;
    this.requiresFullContext_1 = false;
    this.predicates_1 = null;
  }
  DFAState.$metadata$ = {
    simpleName: 'DFAState',
    kind: 'class',
    interfaces: []
  };
  function LexerDFASerializer(dfa) {
    DFASerializer_init_$Init$_0(dfa, Companion_getInstance_7()._get_EMPTY_VOCABULARY__391582355_6h4yvn_k$(), this);
  }
  LexerDFASerializer.prototype.getEdgeLabel_7bku1s_k$ = function (i) {
    return (new StringBuilder("'")).append_t8oh9e_k$(numberToChar(i)).append_ssq29y_k$("'").toString();
  };
  LexerDFASerializer.$metadata$ = {
    simpleName: 'LexerDFASerializer',
    kind: 'class',
    interfaces: []
  };
  function AbstractEqualityComparator() {
  }
  AbstractEqualityComparator.$metadata$ = {
    simpleName: 'AbstractEqualityComparator',
    kind: 'class',
    interfaces: [EqualityComparator]
  };
  function Array2DHashSet_init_$Init$(comparator, initialCapacity, initialBucketCapacity, $mask0, $marker, $this) {
    if (!(($mask0 & 1) === 0))
      comparator = null;
    if (!(($mask0 & 2) === 0))
      initialCapacity = Companion_getInstance_28().INITAL_CAPACITY_1;
    if (!(($mask0 & 4) === 0))
      initialBucketCapacity = Companion_getInstance_28().INITAL_BUCKET_CAPACITY_1;
    Array2DHashSet.call($this, comparator, initialCapacity, initialBucketCapacity);
    return $this;
  }
  function Array2DHashSet_init_$Create$(comparator, initialCapacity, initialBucketCapacity, $mask0, $marker) {
    return Array2DHashSet_init_$Init$(comparator, initialCapacity, initialBucketCapacity, $mask0, $marker, Object.create(Array2DHashSet.prototype));
  }
  function SetIterator($outer, data) {
    this.$this_1 = $outer;
    this.data_1 = data;
    this.nextIndex_1 = 0;
    this.removed_1 = true;
  }
  SetIterator.prototype._get_data__794940385_d5abxd_k$ = function () {
    return this.data_1;
  };
  SetIterator.prototype._set_nextIndex__3954150406_ycfwgm_k$ = function (_set____804775014) {
    this.nextIndex_1 = _set____804775014;
  };
  SetIterator.prototype._get_nextIndex__1430919314_nnxkeq_k$ = function () {
    return this.nextIndex_1;
  };
  SetIterator.prototype._set_removed__3162181413_u97aak_k$ = function (_set____804775014) {
    this.removed_1 = _set____804775014;
  };
  SetIterator.prototype._get_removed__1613188785_qog8fl_k$ = function () {
    return this.removed_1;
  };
  SetIterator.prototype.hasNext_bitz1p_k$ = function () {
    return this.nextIndex_1 < this.data_1.length;
  };
  SetIterator.prototype.next_20eer_k$ = function () {
    if (!this.hasNext_bitz1p_k$()) {
      throw NoSuchElementException_init_$Create$();
    }
    this.removed_1 = false;
    var tmp0_this = this;
    var tmp1 = tmp0_this.nextIndex_1;
    tmp0_this.nextIndex_1 = tmp1 + 1 | 0;
    return this.data_1[tmp1];
  };
  SetIterator.prototype.remove_le47v1_k$ = function () {
    if (this.removed_1) {
      throw IllegalStateException_init_$Create$_0();
    }
    this.$this_1.remove_8hbkbr_k$(this.data_1[this.nextIndex_1 - 1 | 0]);
    Unit_getInstance();
    this.removed_1 = true;
  };
  SetIterator.$metadata$ = {
    simpleName: 'SetIterator',
    kind: 'class',
    interfaces: [MutableIterator]
  };
  function Companion_27() {
    Companion_instance_27 = this;
    this.INITAL_CAPACITY_1 = 16;
    this.INITAL_BUCKET_CAPACITY_1 = 8;
    this.LOAD_FACTOR_1 = 0.75;
  }
  Companion_27.prototype._get_INITAL_CAPACITY__3772496019_8n2df1_k$ = function () {
    return this.INITAL_CAPACITY_1;
  };
  Companion_27.prototype._get_INITAL_BUCKET_CAPACITY__1720742400_sghhc0_k$ = function () {
    return this.INITAL_BUCKET_CAPACITY_1;
  };
  Companion_27.prototype._get_LOAD_FACTOR__2097320905_yoov61_k$ = function () {
    return this.LOAD_FACTOR_1;
  };
  Companion_27.$metadata$ = {
    simpleName: 'Companion',
    kind: 'object',
    interfaces: []
  };
  var Companion_instance_27;
  function Companion_getInstance_28() {
    if (Companion_instance_27 == null)
      new Companion_27();
    return Companion_instance_27;
  }
  function Array2DHashSet(comparator, initialCapacity, initialBucketCapacity) {
    Companion_getInstance_28();
    this.n_1 = 0;
    this.threshold_1 = numberToInt(Math_getInstance().floor_xdnczv_k$(Companion_getInstance_28().INITAL_CAPACITY_1 * Companion_getInstance_28().LOAD_FACTOR_1));
    this.currentPrime_1 = 1;
    this.initialBucketCapacity_1 = Companion_getInstance_28().INITAL_BUCKET_CAPACITY_1;
    var comparator_0 = comparator;
    if (comparator_0 == null) {
      comparator_0 = Companion_getInstance_33()._get_INSTANCE__2559446_1iuvq_k$();
    }
    this.comparator_1 = comparator_0;
    var tmp = this;
    var tmp_0 = this.createBuckets_cemppw_k$(initialCapacity);
    tmp.buckets_1 = isArray(tmp_0) ? tmp_0 : THROW_CCE();
    this.initialBucketCapacity_1 = initialBucketCapacity;
  }
  Array2DHashSet.prototype.remove_8hbkbr_k$ = function (element) {
    {
      throw new NotImplementedError('An operation is not implemented: not implemented');
    }
  };
  Array2DHashSet.prototype.remove_8hbkc6_k$ = function (element) {
    if (!(element == null ? true : isObject(element)))
      return false;
    else {
    }
    return this.remove_8hbkbr_k$((element == null ? true : isObject(element)) ? element : THROW_CCE());
  };
  Array2DHashSet.prototype.containsAll_jr3fy7_k$ = function (elements) {
    {
      throw new NotImplementedError('An operation is not implemented: not implemented');
    }
  };
  Array2DHashSet.prototype.containsAll_jr3fla_k$ = function (elements) {
    return this.containsAll_jr3fy7_k$(elements);
  };
  Array2DHashSet.prototype.retainAll_j44spx_k$ = function (elements) {
    {
      throw new NotImplementedError('An operation is not implemented: not implemented');
    }
  };
  Array2DHashSet.prototype.retainAll_j44sd0_k$ = function (elements) {
    return this.retainAll_j44spx_k$(elements);
  };
  Array2DHashSet.prototype._get_comparator__1993580149_wyxcad_k$ = function () {
    return this.comparator_1;
  };
  Array2DHashSet.prototype._set_buckets__2071699676_tcggio_k$ = function (_set____804775014) {
    this.buckets_1 = _set____804775014;
  };
  Array2DHashSet.prototype._get_buckets__522707048_8n7fc8_k$ = function () {
    return this.buckets_1;
  };
  Array2DHashSet.prototype._set_n__804776471_unj3d3_k$ = function (_set____804775014) {
    this.n_1 = _set____804775014;
  };
  Array2DHashSet.prototype._get_n__461226659_7mlorn_k$ = function () {
    return this.n_1;
  };
  Array2DHashSet.prototype._set_threshold__550309562_yviyly_k$ = function (_set____804775014) {
    this.threshold_1 = _set____804775014;
  };
  Array2DHashSet.prototype._get_threshold__2322045766_wmmjzu_k$ = function () {
    return this.threshold_1;
  };
  Array2DHashSet.prototype._set_currentPrime__955015569_yzoq67_k$ = function (_set____804775014) {
    this.currentPrime_1 = _set____804775014;
  };
  Array2DHashSet.prototype._get_currentPrime__1895168389_vcc1ad_k$ = function () {
    return this.currentPrime_1;
  };
  Array2DHashSet.prototype._set_initialBucketCapacity__192652061_m0px83_k$ = function (_set____804775014) {
    this.initialBucketCapacity_1 = _set____804775014;
  };
  Array2DHashSet.prototype._get_initialBucketCapacity__4115381673_2yx55j_k$ = function () {
    return this.initialBucketCapacity_1;
  };
  Array2DHashSet.prototype.getOrAdd_3cmrdv_k$ = function (o) {
    if (this.n_1 > this.threshold_1)
      this.expand_dd9iuv_k$();
    return this.getOrAddImpl_sxclpf_k$(o);
  };
  Array2DHashSet.prototype.getOrAddImpl_sxclpf_k$ = function (o) {
    var b = this.getBucket_7uk88l_k$(o);
    var bucket = this.buckets_1[b];
    if (bucket == null) {
      var tmp = this.createBucket_x1f3nf_k$(this.initialBucketCapacity_1);
      bucket = isArray(tmp) ? tmp : THROW_CCE();
      bucket[0] = o;
      this.buckets_1[b] = bucket;
      var tmp0_this = this;
      var tmp1 = tmp0_this.n_1;
      tmp0_this.n_1 = tmp1 + 1 | 0;
      Unit_getInstance();
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
          var tmp3_this = this;
          var tmp4 = tmp3_this.n_1;
          tmp3_this.n_1 = tmp4 + 1 | 0;
          Unit_getInstance();
          return o;
        }
        if (this.comparator_1.equals_cjghj5_k$(existing, o))
          return existing;
      }
       while (inductionVariable <= last);
    var oldLength = bucket.length;
    var tmp_0 = copyOf(bucket, imul(bucket.length, 2));
    bucket = isArray(tmp_0) ? tmp_0 : THROW_CCE();
    this.buckets_1[b] = bucket;
    bucket[oldLength] = o;
    var tmp5_this = this;
    var tmp6 = tmp5_this.n_1;
    tmp5_this.n_1 = tmp6 + 1 | 0;
    Unit_getInstance();
    return o;
  };
  Array2DHashSet.prototype.get_kntogc_k$ = function (o) {
    if (o == null)
      return o;
    var b = this.getBucket_7uk88l_k$(o);
    var tmp0_elvis_lhs = this.buckets_1[b];
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return null;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var bucket = tmp;
    var indexedObject = bucket;
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var e = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      if (e == null)
        return null;
      if (this.comparator_1.equals_cjghj5_k$(e, o))
        return e;
    }
    return null;
  };
  Array2DHashSet.prototype.getBucket_7uk88l_k$ = function (o) {
    var hash = this.comparator_1.hashCode_3clz5c_k$(o);
    return hash & (this.buckets_1.length - 1 | 0);
  };
  Array2DHashSet.prototype.hashCode = function () {
    var tmp = MurmurHash_getInstance();
    var hash = tmp.initialize$default_diri32_k$(0, 1, null);
    var indexedObject = this.buckets_1;
    var inductionVariable = 0;
    var last = indexedObject.length;
    $l$loop: while (inductionVariable < last) {
      var bucket = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      if (bucket == null)
        continue $l$loop;
      var indexedObject_0 = bucket;
      var inductionVariable_0 = 0;
      var last_0 = indexedObject_0.length;
      $l$loop_0: while (inductionVariable_0 < last_0) {
        var o = indexedObject_0[inductionVariable_0];
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        if (o == null)
          break $l$loop_0;
        hash = MurmurHash_getInstance().update_v7hmy1_k$(hash, this.comparator_1.hashCode_3clz5c_k$(o));
      }
    }
    hash = MurmurHash_getInstance().finish_anppvx_k$(hash, this._get_size__809037418_ddoh9m_k$());
    return hash;
  };
  Array2DHashSet.prototype.equals = function (o) {
    if (o === this)
      return true;
    if (!(o instanceof Array2DHashSet))
      return false;
    else {
    }
    var other = (o == null ? true : o instanceof Array2DHashSet) ? o : THROW_CCE();
    var tmp;
    if (!(ensureNotNull(other)._get_size__809037418_ddoh9m_k$() === this._get_size__809037418_ddoh9m_k$())) {
      tmp = false;
    } else {
      var tmp$ret$0;
      $l$block: {
        tmp$ret$0 = this.containsAll_jr3fla_k$(other);
        break $l$block;
      }
      tmp = tmp$ret$0;
    }
    return tmp;
  };
  Array2DHashSet.prototype.expand_dd9iuv_k$ = function () {
    var old = this.buckets_1;
    var tmp0_this = this;
    tmp0_this.currentPrime_1 = tmp0_this.currentPrime_1 + 4 | 0;
    var newCapacity = imul(this.buckets_1.length, 2);
    var newTable = this.createBuckets_cemppw_k$(newCapacity);
    var newBucketLengths = new Int32Array(newTable.length);
    var tmp = this;
    tmp.buckets_1 = isArray(newTable) ? newTable : THROW_CCE();
    this.threshold_1 = numberToInt(newCapacity * Companion_getInstance_28().LOAD_FACTOR_1);
    var oldSize = this._get_size__809037418_ddoh9m_k$();
    var indexedObject = old;
    var inductionVariable = 0;
    var last = indexedObject.length;
    $l$loop: while (inductionVariable < last) {
      var bucket = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      if (bucket == null) {
        continue $l$loop;
      }
      var indexedObject_0 = bucket;
      var inductionVariable_0 = 0;
      var last_0 = indexedObject_0.length;
      $l$loop_0: while (inductionVariable_0 < last_0) {
        var o = indexedObject_0[inductionVariable_0];
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        if (o == null) {
          break $l$loop_0;
        }
        var b = this.getBucket_7uk88l_k$(o);
        var bucketLength = newBucketLengths[b];
        var newBucket;
        if (bucketLength === 0) {
          var tmp_0 = this.createBucket_x1f3nf_k$(this.initialBucketCapacity_1);
          newBucket = isArray(tmp_0) ? tmp_0 : THROW_CCE();
          newTable[b] = newBucket;
        } else {
          newBucket = newTable[b];
          if (bucketLength === newBucket.length) {
            var tmp_1 = copyOf(newBucket, imul(newBucket.length, 2));
            newBucket = isArray(tmp_1) ? tmp_1 : THROW_CCE();
            newTable[b] = newBucket;
          }
        }
        newBucket[bucketLength] = o;
        var tmp3_array = newBucketLengths;
        var tmp4_index0 = b;
        var tmp5 = tmp3_array[tmp4_index0];
        tmp3_array[tmp4_index0] = tmp5 + 1 | 0;
        Unit_getInstance();
      }
    }
    assert(this.n_1 === oldSize);
  };
  Array2DHashSet.prototype._get_size__809037418_ddoh9m_k$ = function () {
    return this.n_1;
  };
  Array2DHashSet.prototype.add_1j60qe_k$ = function (t) {
    var existing = this.getOrAdd_3cmrdv_k$(t);
    return existing === t;
  };
  Array2DHashSet.prototype.add_1j60pz_k$ = function (element) {
    return this.add_1j60qe_k$((element == null ? true : isObject(element)) ? element : THROW_CCE());
  };
  Array2DHashSet.prototype.isEmpty_y1axqb_k$ = function () {
    return this.n_1 === 0;
  };
  Array2DHashSet.prototype.contains_2ehdtg_k$ = function (element) {
    return this.containsFast_fro4xd_k$(element);
  };
  Array2DHashSet.prototype.contains_2ehdt1_k$ = function (element) {
    if (!(element == null ? true : isObject(element)))
      return false;
    else {
    }
    return this.contains_2ehdtg_k$((element == null ? true : isObject(element)) ? element : THROW_CCE());
  };
  Array2DHashSet.prototype.containsFast_fro4xd_k$ = function (obj) {
    var tmp;
    if (obj == null) {
      tmp = false;
    } else {
      tmp = !(this.get_kntogc_k$(obj) == null);
    }
    return tmp;
  };
  Array2DHashSet.prototype.iterator_jk1svi_k$ = function () {
    {
      throw NotImplementedError_init_$Create$(null, 1, null);
    }
  };
  Array2DHashSet.prototype.toArray_jjyjqa_k$ = function () {
    var a = this.createBucket_x1f3nf_k$(this._get_size__809037418_ddoh9m_k$());
    var i = 0;
    var indexedObject = this.buckets_1;
    var inductionVariable = 0;
    var last = indexedObject.length;
    $l$loop: while (inductionVariable < last) {
      var bucket = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      if (bucket == null) {
        continue $l$loop;
      }
      var indexedObject_0 = bucket;
      var inductionVariable_0 = 0;
      var last_0 = indexedObject_0.length;
      $l$loop_0: while (inductionVariable_0 < last_0) {
        var o = indexedObject_0[inductionVariable_0];
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        if (o == null) {
          break $l$loop_0;
        }
        var tmp2 = i;
        i = tmp2 + 1 | 0;
        a[tmp2] = o;
      }
    }
    return isArray(a) ? a : THROW_CCE();
  };
  Array2DHashSet.prototype.toArray_lpvwrl_k$ = function (a) {
    var a_0 = a;
    if (a_0.length < this._get_size__809037418_ddoh9m_k$()) {
      var tmp = copyOf(a_0, this._get_size__809037418_ddoh9m_k$());
      a_0 = isArray(tmp) ? tmp : THROW_CCE();
    }
    var i = 0;
    var indexedObject = this.buckets_1;
    var inductionVariable = 0;
    var last = indexedObject.length;
    $l$loop: while (inductionVariable < last) {
      var bucket = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      if (bucket == null) {
        continue $l$loop;
      }
      var indexedObject_0 = bucket;
      var inductionVariable_0 = 0;
      var last_0 = indexedObject_0.length;
      $l$loop_0: while (inductionVariable_0 < last_0) {
        var o = indexedObject_0[inductionVariable_0];
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        if (o == null) {
          break $l$loop_0;
        }
        var targetElement = (o == null ? true : isObject(o)) ? o : THROW_CCE();
        var tmp_0 = a_0;
        var tmp2 = i;
        i = tmp2 + 1 | 0;
        tmp_0[tmp2] = targetElement;
      }
    }
    return a_0;
  };
  Array2DHashSet.prototype.removeFast_1yh2bu_k$ = function (obj) {
    if (obj == null) {
      return false;
    }
    var b = this.getBucket_7uk88l_k$(obj);
    var tmp0_elvis_lhs = this.buckets_1[b];
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
        var tmp2_elvis_lhs = bucket[i];
        var tmp_0;
        if (tmp2_elvis_lhs == null) {
          return false;
        } else {
          tmp_0 = tmp2_elvis_lhs;
        }
        var e = tmp_0;
        if (this.comparator_1.equals_cjghj5_k$(e, obj)) {
          {
            throw NotImplementedError_init_$Create$(null, 1, null);
          }
        }
      }
       while (inductionVariable <= last);
    return false;
  };
  Array2DHashSet.prototype.addAll_oxxjwh_k$ = function (elements) {
    var changed = false;
    var tmp0_iterator = elements.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var o = tmp0_iterator.next_20eer_k$();
      var existing = this.getOrAdd_3cmrdv_k$(o);
      if (!(existing === o))
        changed = true;
    }
    return changed;
  };
  Array2DHashSet.prototype.addAll_oxxjjk_k$ = function (elements) {
    return this.addAll_oxxjwh_k$(elements);
  };
  Array2DHashSet.prototype.removeAll_99tois_k$ = function (elements) {
    {
      throw NotImplementedError_init_$Create$(null, 1, null);
    }
  };
  Array2DHashSet.prototype.removeAll_99to5v_k$ = function (elements) {
    return this.removeAll_99tois_k$(elements);
  };
  Array2DHashSet.prototype.clear_j9y8zo_k$ = function () {
    var tmp = this;
    var tmp_0 = this.createBuckets_cemppw_k$(Companion_getInstance_28().INITAL_CAPACITY_1);
    tmp.buckets_1 = isArray(tmp_0) ? tmp_0 : THROW_CCE();
    this.n_1 = 0;
    this.threshold_1 = numberToInt(Math_getInstance().floor_xdnczv_k$(Companion_getInstance_28().INITAL_CAPACITY_1 * Companion_getInstance_28().LOAD_FACTOR_1));
  };
  Array2DHashSet.prototype.toString = function () {
    if (this._get_size__809037418_ddoh9m_k$() === 0)
      return '{}';
    var buf = StringBuilder_init_$Create$();
    buf.append_t8oh9e_k$(_Char___init__impl__380027157(123));
    Unit_getInstance();
    var first = true;
    var indexedObject = this.buckets_1;
    var inductionVariable = 0;
    var last = indexedObject.length;
    $l$loop: while (inductionVariable < last) {
      var bucket = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      if (bucket == null)
        continue $l$loop;
      var indexedObject_0 = bucket;
      var inductionVariable_0 = 0;
      var last_0 = indexedObject_0.length;
      $l$loop_0: while (inductionVariable_0 < last_0) {
        var o = indexedObject_0[inductionVariable_0];
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        if (o == null)
          break $l$loop_0;
        if (first)
          first = false;
        else {
          buf.append_ssq29y_k$(', ');
          Unit_getInstance();
        }
        buf.append_ssq29y_k$(toString(o));
        Unit_getInstance();
      }
    }
    buf.append_t8oh9e_k$(_Char___init__impl__380027157(125));
    Unit_getInstance();
    return buf.toString();
  };
  Array2DHashSet.prototype.toTableString_9ue6t8_k$ = function () {
    var buf = StringBuilder_init_$Create$();
    var indexedObject = this.buckets_1;
    var inductionVariable = 0;
    var last = indexedObject.length;
    $l$loop: while (inductionVariable < last) {
      var bucket = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      if (bucket == null) {
        buf.append_ssq29y_k$('null\n');
        Unit_getInstance();
        continue $l$loop;
      }
      buf.append_t8oh9e_k$(_Char___init__impl__380027157(91));
      Unit_getInstance();
      var first = true;
      var indexedObject_0 = bucket;
      var inductionVariable_0 = 0;
      var last_0 = indexedObject_0.length;
      while (inductionVariable_0 < last_0) {
        var o = indexedObject_0[inductionVariable_0];
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        if (first)
          first = false;
        else {
          buf.append_ssq29y_k$(' ');
          Unit_getInstance();
        }
        if (o == null) {
          buf.append_ssq29y_k$('_');
          Unit_getInstance();
        } else {
          buf.append_ssq29y_k$(toString(o));
          Unit_getInstance();
        }
      }
      buf.append_ssq29y_k$(']\n');
      Unit_getInstance();
    }
    return buf.toString();
  };
  Array2DHashSet.prototype.asElementType_anvmbe_k$ = function (o) {
    return isObject(o) ? o : THROW_CCE();
  };
  Array2DHashSet.prototype.createBuckets_cemppw_k$ = function (capacity) {
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = fillArrayVal(Array(capacity), null);
      break $l$block;
    }
    var tmp = tmp$ret$0;
    return isArray(tmp) ? tmp : THROW_CCE();
  };
  Array2DHashSet.prototype.createBucket_x1f3nf_k$ = function (capacity) {
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = fillArrayVal(Array(capacity), null);
      break $l$block;
    }
    var tmp = tmp$ret$0;
    return isArray(tmp) ? tmp : THROW_CCE();
  };
  Array2DHashSet.$metadata$ = {
    simpleName: 'Array2DHashSet',
    kind: 'class',
    interfaces: [MutableSet]
  };
  function DoubleKeyMap() {
    this.data_1 = LinkedHashMap_init_$Create$();
  }
  DoubleKeyMap.prototype._set_data__580323309_wm0qvl_k$ = function (_set____804775014) {
    this.data_1 = _set____804775014;
  };
  DoubleKeyMap.prototype._get_data__794940385_d5abxd_k$ = function () {
    return this.data_1;
  };
  DoubleKeyMap.prototype.put_8k14xu_k$ = function (k1, k2, v) {
    var data2 = this.data_1.get_1mhr4y_k$(k1);
    var prev = null;
    if (data2 == null) {
      data2 = LinkedHashMap_init_$Create$();
      {
        var tmp0_set_0 = this.data_1;
        var tmp1_set_0 = data2;
        tmp0_set_0.put_3mhbri_k$(k1, tmp1_set_0);
        Unit_getInstance();
      }
    } else {
      prev = data2.get_1mhr4y_k$(k2);
    }
    {
      var tmp2_set_0 = data2;
      tmp2_set_0.put_3mhbri_k$(k2, v);
      Unit_getInstance();
    }
    return prev;
  };
  DoubleKeyMap.prototype.get_7nwjgp_k$ = function (k1, k2) {
    var tmp0_elvis_lhs = this.data_1.get_1mhr4y_k$(k1);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return null;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var data2 = tmp;
    return data2.get_1mhr4y_k$(k2);
  };
  DoubleKeyMap.prototype.get_wo4paz_k$ = function (k1) {
    return ensureNotNull(this.data_1.get_1mhr4y_k$(k1));
  };
  DoubleKeyMap.prototype.values_8qyyi9_k$ = function (k1) {
    var tmp0_elvis_lhs = this.data_1.get_1mhr4y_k$(k1);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return null;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var data2 = tmp;
    return data2._get_values__2516944425_tel787_k$();
  };
  DoubleKeyMap.prototype.keySet_irk8e5_k$ = function () {
    return this.data_1._get_keys__801529559_d97k5z_k$();
  };
  DoubleKeyMap.prototype.keySet_2ij5zi_k$ = function (k1) {
    var tmp0_elvis_lhs = this.data_1.get_1mhr4y_k$(k1);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return null;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var data2 = tmp;
    return data2._get_keys__801529559_d97k5z_k$();
  };
  DoubleKeyMap.$metadata$ = {
    simpleName: 'DoubleKeyMap',
    kind: 'class',
    interfaces: []
  };
  function EqualityComparator() {
  }
  EqualityComparator.$metadata$ = {
    simpleName: 'EqualityComparator',
    kind: 'interface',
    interfaces: []
  };
  function createEntryListArray($this, length) {
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = fillArrayVal(Array(length), null);
      break $l$block;
    }
    var tmp = tmp$ret$0;
    return isArray(tmp) ? tmp : THROW_CCE();
  }
  function FlexibleHashMap_init_$Init$(comparator, initialCapacity, initialBucketCapacity, $mask0, $marker, $this) {
    if (!(($mask0 & 1) === 0))
      comparator = null;
    if (!(($mask0 & 2) === 0))
      initialCapacity = Companion_getInstance_29().INITAL_CAPACITY_1;
    if (!(($mask0 & 4) === 0))
      initialBucketCapacity = Companion_getInstance_29().INITAL_BUCKET_CAPACITY_1;
    FlexibleHashMap.call($this, comparator, initialCapacity, initialBucketCapacity);
    return $this;
  }
  function FlexibleHashMap_init_$Create$(comparator, initialCapacity, initialBucketCapacity, $mask0, $marker) {
    return FlexibleHashMap_init_$Init$(comparator, initialCapacity, initialBucketCapacity, $mask0, $marker, Object.create(FlexibleHashMap.prototype));
  }
  function Entry(key, value) {
    this.key_1 = key;
    this.value_1 = value;
  }
  Entry.prototype._get_key__857139730_e6bh8y_k$ = function () {
    return this.key_1;
  };
  Entry.prototype._set_value__1325260276_bkckmy_k$ = function (_set____804775014) {
    this.value_1 = _set____804775014;
  };
  Entry.prototype._get_value__3683422336_a43j40_k$ = function () {
    return this.value_1;
  };
  Entry.prototype.toString = function () {
    return toString_1(this.key_1) + ':' + toString_1(this.value_1);
  };
  Entry.$metadata$ = {
    simpleName: 'Entry',
    kind: 'class',
    interfaces: []
  };
  function Companion_28() {
    Companion_instance_28 = this;
    this.INITAL_CAPACITY_1 = 16;
    this.INITAL_BUCKET_CAPACITY_1 = 8;
    this.LOAD_FACTOR_1 = 0.75;
  }
  Companion_28.prototype._get_INITAL_CAPACITY__3772496019_8n2df1_k$ = function () {
    return this.INITAL_CAPACITY_1;
  };
  Companion_28.prototype._get_INITAL_BUCKET_CAPACITY__1720742400_sghhc0_k$ = function () {
    return this.INITAL_BUCKET_CAPACITY_1;
  };
  Companion_28.prototype._get_LOAD_FACTOR__2097320905_yoov61_k$ = function () {
    return this.LOAD_FACTOR_1;
  };
  Companion_28.$metadata$ = {
    simpleName: 'Companion',
    kind: 'object',
    interfaces: []
  };
  var Companion_instance_28;
  function Companion_getInstance_29() {
    if (Companion_instance_28 == null)
      new Companion_28();
    return Companion_instance_28;
  }
  function FlexibleHashMap(comparator, initialCapacity, initialBucketCapacity) {
    Companion_getInstance_29();
    this.n_1 = 0;
    this.size_1 = this.n_1;
    this.threshold_1 = numberToInt(Companion_getInstance_29().INITAL_CAPACITY_1 * Companion_getInstance_29().LOAD_FACTOR_1);
    this.currentPrime_1 = 1;
    this.initialBucketCapacity_1 = Companion_getInstance_29().INITAL_BUCKET_CAPACITY_1;
    var comparator_0 = comparator;
    if (comparator_0 == null) {
      comparator_0 = Companion_getInstance_33()._get_INSTANCE__2559446_1iuvq_k$();
    }
    this.comparator_1 = comparator_0;
    this.buckets_1 = createEntryListArray(Companion_getInstance_29(), initialBucketCapacity);
    this.initialBucketCapacity_1 = initialBucketCapacity;
  }
  FlexibleHashMap.prototype._get_keys__801529559_d97k5z_k$ = function () {
    var tmp$ret$5;
    $l$block_4: {
      var tmp0_flatMap_0 = filterNotNull(this.buckets_1);
      var tmp$ret$4;
      $l$block_3: {
        var tmp0_flatMapTo_0_1 = ArrayList_init_$Create$_0();
        var tmp0_iterator_1_2 = tmp0_flatMap_0.iterator_jk1svi_k$();
        while (tmp0_iterator_1_2.hasNext_bitz1p_k$()) {
          var element_2_3 = tmp0_iterator_1_2.next_20eer_k$();
          var tmp$ret$3;
          $l$block_2: {
            var tmp$ret$2;
            $l$block_1: {
              var tmp0_map_0_6 = filterNotNull_0(element_2_3);
              var tmp$ret$1;
              $l$block_0: {
                var tmp0_mapTo_0_1_7 = ArrayList_init_$Create$(collectionSizeOrDefault(tmp0_map_0_6, 10));
                var tmp0_iterator_1_2_8 = tmp0_map_0_6.iterator_jk1svi_k$();
                while (tmp0_iterator_1_2_8.hasNext_bitz1p_k$()) {
                  var item_2_3_9 = tmp0_iterator_1_2_8.next_20eer_k$();
                  var tmp$ret$0;
                  $l$block: {
                    tmp$ret$0 = item_2_3_9.key_1;
                    break $l$block;
                  }
                  tmp0_mapTo_0_1_7.add_1j60pz_k$(tmp$ret$0);
                  Unit_getInstance();
                }
                tmp$ret$1 = tmp0_mapTo_0_1_7;
                break $l$block_0;
              }
              tmp$ret$2 = tmp$ret$1;
              break $l$block_1;
            }
            tmp$ret$3 = tmp$ret$2;
            break $l$block_2;
          }
          var list_3_4 = tmp$ret$3;
          addAll(tmp0_flatMapTo_0_1, list_3_4);
          Unit_getInstance();
        }
        tmp$ret$4 = tmp0_flatMapTo_0_1;
        break $l$block_3;
      }
      tmp$ret$5 = tmp$ret$4;
      break $l$block_4;
    }
    return toMutableSet(tmp$ret$5);
  };
  FlexibleHashMap.prototype._get_values__2516944425_tel787_k$ = function () {
    var tmp$ret$5;
    $l$block_4: {
      var tmp0_flatMap_0 = filterNotNull(this.buckets_1);
      var tmp$ret$4;
      $l$block_3: {
        var tmp0_flatMapTo_0_1 = ArrayList_init_$Create$_0();
        var tmp0_iterator_1_2 = tmp0_flatMap_0.iterator_jk1svi_k$();
        while (tmp0_iterator_1_2.hasNext_bitz1p_k$()) {
          var element_2_3 = tmp0_iterator_1_2.next_20eer_k$();
          var tmp$ret$3;
          $l$block_2: {
            var tmp$ret$2;
            $l$block_1: {
              var tmp0_map_0_6 = filterNotNull_0(element_2_3);
              var tmp$ret$1;
              $l$block_0: {
                var tmp0_mapTo_0_1_7 = ArrayList_init_$Create$(collectionSizeOrDefault(tmp0_map_0_6, 10));
                var tmp0_iterator_1_2_8 = tmp0_map_0_6.iterator_jk1svi_k$();
                while (tmp0_iterator_1_2_8.hasNext_bitz1p_k$()) {
                  var item_2_3_9 = tmp0_iterator_1_2_8.next_20eer_k$();
                  var tmp$ret$0;
                  $l$block: {
                    tmp$ret$0 = item_2_3_9.value_1;
                    break $l$block;
                  }
                  tmp0_mapTo_0_1_7.add_1j60pz_k$(tmp$ret$0);
                  Unit_getInstance();
                }
                tmp$ret$1 = tmp0_mapTo_0_1_7;
                break $l$block_0;
              }
              tmp$ret$2 = tmp$ret$1;
              break $l$block_1;
            }
            tmp$ret$3 = tmp$ret$2;
            break $l$block_2;
          }
          var list_3_4 = tmp$ret$3;
          addAll(tmp0_flatMapTo_0_1, list_3_4);
          Unit_getInstance();
        }
        tmp$ret$4 = tmp0_flatMapTo_0_1;
        break $l$block_3;
      }
      tmp$ret$5 = tmp$ret$4;
      break $l$block_4;
    }
    return toMutableList(tmp$ret$5);
  };
  FlexibleHashMap.prototype._get_entries__31877249_iz8n5_k$ = function () {
    throw new NotImplementedError('An operation is not implemented: not implemented');
  };
  FlexibleHashMap.prototype._get_comparator__1993580149_wyxcad_k$ = function () {
    return this.comparator_1;
  };
  FlexibleHashMap.prototype._set_buckets__2071699676_cbn7a1_k$ = function (_set____804775014) {
    this.buckets_1 = _set____804775014;
  };
  FlexibleHashMap.prototype._get_buckets__522707048_8n7fc8_k$ = function () {
    return this.buckets_1;
  };
  FlexibleHashMap.prototype._set_n__804776471_unj3d3_k$ = function (_set____804775014) {
    this.n_1 = _set____804775014;
  };
  FlexibleHashMap.prototype._get_n__461226659_7mlorn_k$ = function () {
    return this.n_1;
  };
  FlexibleHashMap.prototype._get_size__809037418_ddoh9m_k$ = function () {
    return this.size_1;
  };
  FlexibleHashMap.prototype._set_threshold__550309562_yviyly_k$ = function (_set____804775014) {
    this.threshold_1 = _set____804775014;
  };
  FlexibleHashMap.prototype._get_threshold__2322045766_wmmjzu_k$ = function () {
    return this.threshold_1;
  };
  FlexibleHashMap.prototype._set_currentPrime__955015569_yzoq67_k$ = function (_set____804775014) {
    this.currentPrime_1 = _set____804775014;
  };
  FlexibleHashMap.prototype._get_currentPrime__1895168389_vcc1ad_k$ = function () {
    return this.currentPrime_1;
  };
  FlexibleHashMap.prototype._set_initialBucketCapacity__192652061_m0px83_k$ = function (_set____804775014) {
    this.initialBucketCapacity_1 = _set____804775014;
  };
  FlexibleHashMap.prototype._get_initialBucketCapacity__4115381673_2yx55j_k$ = function () {
    return this.initialBucketCapacity_1;
  };
  FlexibleHashMap.prototype.getBucket_7uk88c_k$ = function (key) {
    var hash = this.comparator_1.hashCode_3clz5c_k$(key);
    return hash & (this.buckets_1.length - 1 | 0);
  };
  FlexibleHashMap.prototype.get_1mhr4y_k$ = function (key) {
    if (key == null)
      return null;
    var b = this.getBucket_7uk88c_k$(key);
    var tmp0_elvis_lhs = this.buckets_1[b];
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return null;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var bucket = tmp;
    var tmp1_iterator = bucket.iterator_jk1svi_k$();
    while (tmp1_iterator.hasNext_bitz1p_k$()) {
      var e = tmp1_iterator.next_20eer_k$();
      var tmp2_safe_receiver = e;
      if (this.comparator_1.equals_cjghj5_k$(tmp2_safe_receiver == null ? null : tmp2_safe_receiver.key_1, key)) {
        var tmp3_safe_receiver = e;
        return tmp3_safe_receiver == null ? null : tmp3_safe_receiver.value_1;
      } else {
      }
    }
    return null;
  };
  FlexibleHashMap.prototype.put_3mhbri_k$ = function (key, value) {
    if (key == null)
      return null;
    if (this.n_1 > this.threshold_1)
      this.expand_dd9iuv_k$();
    var b = this.getBucket_7uk88c_k$(key);
    var existingBucket = this.buckets_1[b];
    var tmp;
    if (!(existingBucket == null)) {
      tmp = existingBucket;
    } else {
      var tmp_0 = this.buckets_1;
      var tmp$ret$0;
      $l$block: {
        tmp$ret$0 = ArrayList_init_$Create$_0();
        break $l$block;
      }
      tmp_0[b] = tmp$ret$0;
      tmp = ensureNotNull(this.buckets_1[b]);
    }
    var bucket = tmp;
    var tmp0_iterator = bucket.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var e = tmp0_iterator.next_20eer_k$();
      var tmp1_safe_receiver = e;
      if (this.comparator_1.equals_cjghj5_k$(tmp1_safe_receiver == null ? null : tmp1_safe_receiver.key_1, key)) {
        var tmp2_safe_receiver = e;
        var prev = tmp2_safe_receiver == null ? null : tmp2_safe_receiver.value_1;
        var tmp3_safe_receiver = e;
        if (tmp3_safe_receiver == null) {
          Unit_getInstance();
        } else
          tmp3_safe_receiver.value_1 = value;
        var tmp4_this = this;
        var tmp5 = tmp4_this.n_1;
        tmp4_this.n_1 = tmp5 + 1 | 0;
        Unit_getInstance();
        return prev;
      } else {
      }
    }
    bucket.add_1j60pz_k$(new Entry(key, value));
    Unit_getInstance();
    var tmp6_this = this;
    var tmp7 = tmp6_this.n_1;
    tmp6_this.n_1 = tmp7 + 1 | 0;
    Unit_getInstance();
    return null;
  };
  FlexibleHashMap.prototype.remove_8hbkc0_k$ = function (key) {
    throw UnsupportedOperationException_init_$Create$_0();
  };
  FlexibleHashMap.prototype.putAll_mee1c3_k$ = function (from) {
    throw UnsupportedOperationException_init_$Create$_0();
  };
  FlexibleHashMap.prototype.containsKey_wgk31w_k$ = function (key) {
    return !(this.get_1mhr4y_k$(key) == null);
  };
  FlexibleHashMap.prototype.containsValue_5viga1_k$ = function (value) {
    throw UnsupportedOperationException_init_$Create$_0();
  };
  FlexibleHashMap.prototype.hashCode = function () {
    var tmp = MurmurHash_getInstance();
    var hash = tmp.initialize$default_diri32_k$(0, 1, null);
    var indexedObject = this.buckets_1;
    var inductionVariable = 0;
    var last = indexedObject.length;
    $l$loop: while (inductionVariable < last) {
      var bucket = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      if (bucket == null)
        continue $l$loop;
      var tmp1_iterator = bucket.iterator_jk1svi_k$();
      $l$loop_0: while (tmp1_iterator.hasNext_bitz1p_k$()) {
        var e = tmp1_iterator.next_20eer_k$();
        if (e == null)
          break $l$loop_0;
        hash = MurmurHash_getInstance().update_v7hmy1_k$(hash, this.comparator_1.hashCode_3clz5c_k$(e.key_1));
      }
    }
    hash = MurmurHash_getInstance().finish_anppvx_k$(hash, this._get_size__809037418_ddoh9m_k$());
    return hash;
  };
  FlexibleHashMap.prototype.equals = function (o) {
    throw UnsupportedOperationException_init_$Create$_0();
  };
  FlexibleHashMap.prototype.expand_dd9iuv_k$ = function () {
    var old = this.buckets_1;
    var newCapacity = imul(this.buckets_1.length, 2);
    var newTable = createEntryListArray(Companion_getInstance_29(), newCapacity);
    this.buckets_1 = newTable;
    this.threshold_1 = numberToInt(newCapacity * Companion_getInstance_29().LOAD_FACTOR_1);
    var oldSize = this._get_size__809037418_ddoh9m_k$();
    var indexedObject = old;
    var inductionVariable = 0;
    var last = indexedObject.length;
    $l$loop: while (inductionVariable < last) {
      var bucket = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      if (bucket == null)
        continue $l$loop;
      var tmp1_iterator = bucket.iterator_jk1svi_k$();
      $l$loop_0: while (tmp1_iterator.hasNext_bitz1p_k$()) {
        var e = tmp1_iterator.next_20eer_k$();
        if (e == null)
          break $l$loop_0;
        this.put_3mhbri_k$(e.key_1, e.value_1);
        Unit_getInstance();
      }
    }
    this.n_1 = oldSize;
  };
  FlexibleHashMap.prototype.isEmpty_y1axqb_k$ = function () {
    return this.n_1 === 0;
  };
  FlexibleHashMap.prototype.clear_j9y8zo_k$ = function () {
    this.buckets_1 = createEntryListArray(Companion_getInstance_29(), Companion_getInstance_29().INITAL_CAPACITY_1);
    this.n_1 = 0;
  };
  FlexibleHashMap.prototype.toString = function () {
    if (this._get_size__809037418_ddoh9m_k$() === 0)
      return '{}';
    var buf = StringBuilder_init_$Create$();
    buf.append_t8oh9e_k$(_Char___init__impl__380027157(123));
    Unit_getInstance();
    var first = true;
    var indexedObject = this.buckets_1;
    var inductionVariable = 0;
    var last = indexedObject.length;
    $l$loop: while (inductionVariable < last) {
      var bucket = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      if (bucket == null)
        continue $l$loop;
      var tmp1_iterator = bucket.iterator_jk1svi_k$();
      $l$loop_0: while (tmp1_iterator.hasNext_bitz1p_k$()) {
        var e = tmp1_iterator.next_20eer_k$();
        if (e == null)
          break $l$loop_0;
        if (first)
          first = false;
        else {
          buf.append_ssq29y_k$(', ');
          Unit_getInstance();
        }
        buf.append_ssq29y_k$(e.toString());
        Unit_getInstance();
      }
    }
    buf.append_t8oh9e_k$(_Char___init__impl__380027157(125));
    Unit_getInstance();
    return buf.toString();
  };
  FlexibleHashMap.prototype.toTableString_9ue6t8_k$ = function () {
    var buf = StringBuilder_init_$Create$();
    var indexedObject = this.buckets_1;
    var inductionVariable = 0;
    var last = indexedObject.length;
    $l$loop: while (inductionVariable < last) {
      var bucket = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      if (bucket == null) {
        buf.append_ssq29y_k$('null\n');
        Unit_getInstance();
        continue $l$loop;
      }
      buf.append_t8oh9e_k$(_Char___init__impl__380027157(91));
      Unit_getInstance();
      var first = true;
      var tmp1_iterator = bucket.iterator_jk1svi_k$();
      while (tmp1_iterator.hasNext_bitz1p_k$()) {
        var e = tmp1_iterator.next_20eer_k$();
        if (first)
          first = false;
        else {
          buf.append_ssq29y_k$(' ');
          Unit_getInstance();
        }
        if (e == null) {
          buf.append_ssq29y_k$('_');
          Unit_getInstance();
        } else {
          buf.append_ssq29y_k$(e.toString());
          Unit_getInstance();
        }
      }
      buf.append_ssq29y_k$(']\n');
      Unit_getInstance();
    }
    return buf.toString();
  };
  FlexibleHashMap.$metadata$ = {
    simpleName: 'FlexibleHashMap',
    kind: 'class',
    interfaces: [MutableMap]
  };
  function IntSet() {
  }
  IntSet.$metadata$ = {
    simpleName: 'IntSet',
    kind: 'interface',
    interfaces: []
  };
  function _get_EMPTY_DATA__2694183055($this) {
    return $this.EMPTY_DATA_1;
  }
  function _get_INITIAL_SIZE__3961910415($this) {
    return $this.INITIAL_SIZE_1;
  }
  function _get_MAX_ARRAY_SIZE__4185315881($this) {
    return $this.MAX_ARRAY_SIZE_1;
  }
  function _set__data__669231580($this, _set____804775014) {
    $this._data_1 = _set____804775014;
  }
  function _get__data__3027393640($this) {
    return $this._data_1;
  }
  function _set__size__683328613($this, _set____804775014) {
    $this._size_1 = _set____804775014;
  }
  function _get__size__3041490673($this) {
    return $this._size_1;
  }
  function IntegerList_init_$Init$($this) {
    IntegerList.call($this);
    $this._data_1 = Companion_getInstance_30().EMPTY_DATA_1;
    return $this;
  }
  function IntegerList_init_$Create$() {
    return IntegerList_init_$Init$(Object.create(IntegerList.prototype));
  }
  function IntegerList_init_$Init$_0(capacity, $this) {
    IntegerList.call($this);
    if (capacity < 0) {
      throw IllegalArgumentException_init_$Create$_0();
    }
    var tmp = $this;
    var tmp_0;
    if (capacity === 0) {
      tmp_0 = Companion_getInstance_30().EMPTY_DATA_1;
    } else {
      tmp_0 = new Int32Array(capacity);
    }
    tmp._data_1 = tmp_0;
    return $this;
  }
  function IntegerList_init_$Create$_0(capacity) {
    return IntegerList_init_$Init$_0(capacity, Object.create(IntegerList.prototype));
  }
  function IntegerList_init_$Init$_1(list, $this) {
    IntegerList.call($this);
    var tmp = $this;
    var tmp$ret$1;
    $l$block_0: {
      var tmp0_copyOf_0 = ensureNotNull(list._data_1);
      var tmp$ret$0;
      $l$block: {
        tmp$ret$0 = tmp0_copyOf_0;
        break $l$block;
      }
      tmp$ret$1 = tmp$ret$0.slice();
      break $l$block_0;
    }
    tmp._data_1 = tmp$ret$1;
    $this._size_1 = list._size_1;
    return $this;
  }
  function IntegerList_init_$Create$_1(list) {
    return IntegerList_init_$Init$_1(list, Object.create(IntegerList.prototype));
  }
  function IntegerList_init_$Init$_2(list, $this) {
    IntegerList_init_$Init$_0(list._get_size__809037418_ddoh9m_k$(), $this);
    var tmp0_iterator = list.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var value = tmp0_iterator.next_20eer_k$();
      $this.add_fx1qxd_k$(value);
    }
    return $this;
  }
  function IntegerList_init_$Create$_2(list) {
    return IntegerList_init_$Init$_2(list, Object.create(IntegerList.prototype));
  }
  function ensureCapacity($this, capacity) {
    if (capacity < 0 ? true : capacity > Companion_getInstance_30().MAX_ARRAY_SIZE_1) {
      throw RuntimeException_init_$Create$();
    }
    var newLength;
    var tmp;
    var tmp$ret$0;
    $l$block: {
      var tmp0_isEmpty_0 = ensureNotNull($this._data_1);
      tmp$ret$0 = tmp0_isEmpty_0.length === 0;
      break $l$block;
    }
    if (tmp$ret$0) {
      tmp = Companion_getInstance_30().INITIAL_SIZE_1;
    } else {
      {
        tmp = ensureNotNull($this._data_1).length;
      }
    }
    newLength = tmp;
    while (newLength < capacity) {
      newLength = imul(newLength, 2);
      if (newLength < 0 ? true : newLength > Companion_getInstance_30().MAX_ARRAY_SIZE_1) {
        newLength = Companion_getInstance_30().MAX_ARRAY_SIZE_1;
      }
    }
    var originalArray = toTypedArray(ensureNotNull($this._data_1));
    var copiedArray = copyOf(originalArray, newLength);
    var inductionVariable = originalArray.length;
    var last = copiedArray.length;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        copiedArray[i] = 0;
      }
       while (inductionVariable < last);
    $this._data_1 = toIntArray(filterNotNull(copiedArray));
  }
  function charArraySize($this) {
    var result = 0;
    var inductionVariable = 0;
    var last = $this._size_1;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        result = result + charCount(Companion_getInstance(), ensureNotNull($this._data_1)[i]) | 0;
      }
       while (inductionVariable < last);
    return result;
  }
  function Companion_29() {
    Companion_instance_29 = this;
    this.EMPTY_DATA_1 = new Int32Array(0);
    this.INITIAL_SIZE_1 = 4;
    this.MAX_ARRAY_SIZE_1 = 2147483639;
  }
  Companion_29.$metadata$ = {
    simpleName: 'Companion',
    kind: 'object',
    interfaces: []
  };
  var Companion_instance_29;
  function Companion_getInstance_30() {
    if (Companion_instance_29 == null)
      new Companion_29();
    return Companion_instance_29;
  }
  IntegerList.prototype._get_isEmpty__1500737838_oti0q6_k$ = function () {
    return this._size_1 === 0;
  };
  IntegerList.prototype.add_fx1qxd_k$ = function (value) {
    if (ensureNotNull(this._data_1).length === this._size_1) {
      ensureCapacity(this, this._size_1 + 1 | 0);
    }
    ensureNotNull(this._data_1)[this._size_1] = value;
    var tmp0_this = this;
    var tmp1 = tmp0_this._size_1;
    tmp0_this._size_1 = tmp1 + 1 | 0;
    Unit_getInstance();
  };
  IntegerList.prototype.addAll_jkzghl_k$ = function (array) {
    ensureCapacity(this, this._size_1 + array.length | 0);
    Arrays_getInstance();
    Unit_getInstance();
    arraycopy(array, 0, ensureNotNull(this._data_1), this._size_1, array.length);
    var tmp0_this = this;
    tmp0_this._size_1 = tmp0_this._size_1 + array.length | 0;
  };
  IntegerList.prototype.addAll_ij39ae_k$ = function (list) {
    ensureCapacity(this, this._size_1 + list._size_1 | 0);
    arraycopy(ensureNotNull(list._data_1), 0, ensureNotNull(this._data_1), this._size_1, list._size_1);
    var tmp0_this = this;
    tmp0_this._size_1 = tmp0_this._size_1 + list._size_1 | 0;
  };
  IntegerList.prototype.addAll_qegi6s_k$ = function (list) {
    ensureCapacity(this, this._size_1 + list._get_size__809037418_ddoh9m_k$() | 0);
    {
      var index_1 = 0;
      var tmp0_iterator_2 = list.iterator_jk1svi_k$();
      while (tmp0_iterator_2.hasNext_bitz1p_k$()) {
        var item_3 = tmp0_iterator_2.next_20eer_k$();
        {
          var tmp1_4 = index_1;
          index_1 = tmp1_4 + 1 | 0;
          var tmp0__anonymous__5_2495602525 = checkIndexOverflow(tmp1_4);
          ensureNotNull(this._data_1)[this._size_1 + tmp0__anonymous__5_2495602525 | 0] = item_3;
        }
      }
    }
    var tmp0_this = this;
    tmp0_this._size_1 = tmp0_this._size_1 + list._get_size__809037418_ddoh9m_k$() | 0;
  };
  IntegerList.prototype.get_fkrdnv_k$ = function (index) {
    if (index < 0 ? true : index >= this._size_1) {
      throw IndexOutOfBoundsException_init_$Create$_0();
    }
    return ensureNotNull(this._data_1)[index];
  };
  IntegerList.prototype.contains_1pg60y_k$ = function (value) {
    var inductionVariable = 0;
    var last = this._size_1;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (ensureNotNull(this._data_1)[i] === value) {
          return true;
        }
      }
       while (inductionVariable < last);
    return false;
  };
  IntegerList.prototype.set_wemzpe_k$ = function (index, value) {
    if (index < 0 ? true : index >= this._size_1) {
      throw IndexOutOfBoundsException_init_$Create$_0();
    }
    var previous = ensureNotNull(this._data_1)[index];
    ensureNotNull(this._data_1)[index] = value;
    return previous;
  };
  IntegerList.prototype.removeAt_qvpkxi_k$ = function (index) {
    var value = this.get_fkrdnv_k$(index);
    var inductionVariable = 0;
    var last = (this._size_1 - index | 0) - 1 | 0;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        ensureNotNull(this._data_1)[index + i | 0] = ensureNotNull(this._data_1)[(index + i | 0) + 1 | 0];
      }
       while (inductionVariable < last);
    ensureNotNull(this._data_1)[this._size_1 - 1 | 0] = 0;
    var tmp1_this = this;
    var tmp2 = tmp1_this._size_1;
    tmp1_this._size_1 = tmp2 - 1 | 0;
    Unit_getInstance();
    return value;
  };
  IntegerList.prototype.removeRange_rbwdy0_k$ = function (fromIndex, toIndex) {
    if (((fromIndex < 0 ? true : toIndex < 0) ? true : fromIndex > this._size_1) ? true : toIndex > this._size_1) {
      throw IndexOutOfBoundsException_init_$Create$_0();
    }
    if (fromIndex > toIndex) {
      throw IllegalArgumentException_init_$Create$_0();
    }
    arraycopy(ensureNotNull(this._data_1), toIndex, ensureNotNull(this._data_1), fromIndex, this._size_1 - toIndex | 0);
    var tmp0_this = this;
    tmp0_this._size_1 = tmp0_this._size_1 - (toIndex - fromIndex | 0) | 0;
  };
  IntegerList.prototype.size_23och_k$ = function () {
    return this._size_1;
  };
  IntegerList.prototype.trimToSize_dnhilv_k$ = function () {
    if (ensureNotNull(this._data_1).length === this._size_1) {
      return Unit_getInstance();
    }
    this._data_1 = copyOf_1(ensureNotNull(this._data_1), this._size_1);
  };
  IntegerList.prototype.clear_j9y8zo_k$ = function () {
    this._size_1 = 0;
  };
  IntegerList.prototype.toArray_jjyjqa_k$ = function () {
    var tmp;
    if (this._size_1 === 0) {
      tmp = Companion_getInstance_30().EMPTY_DATA_1;
    } else {
      var tmp$ret$1;
      $l$block_0: {
        var tmp0_copyOf_0 = ensureNotNull(this._data_1);
        var tmp$ret$0;
        $l$block: {
          tmp$ret$0 = tmp0_copyOf_0;
          break $l$block;
        }
        tmp$ret$1 = tmp$ret$0.slice();
        break $l$block_0;
      }
      tmp = tmp$ret$1;
    }
    return tmp;
  };
  IntegerList.prototype.sort_6j1b5f_k$ = function () {
    sort(ensureNotNull(this._data_1));
  };
  IntegerList.prototype.equals = function (o) {
    if (o === this) {
      return true;
    }
    if (!(o instanceof IntegerList)) {
      return false;
    } else {
    }
    var other = (o == null ? true : o instanceof IntegerList) ? o : THROW_CCE();
    if (!(this._size_1 === ensureNotNull(other)._size_1)) {
      return false;
    }
    var inductionVariable = 0;
    var last = this._size_1;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (!(ensureNotNull(this._data_1)[i] === ensureNotNull(other._data_1)[i])) {
          return false;
        }
      }
       while (inductionVariable < last);
    return true;
  };
  IntegerList.prototype.hashCode = function () {
    var hashCode = 1;
    var inductionVariable = 0;
    var last = this._size_1;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        hashCode = imul(31, hashCode) + ensureNotNull(this._data_1)[i] | 0;
      }
       while (inductionVariable < last);
    return hashCode;
  };
  IntegerList.prototype.toString = function () {
    var tmp = this.toArray_jjyjqa_k$();
    return joinToString$default_1(tmp, null, null, null, 0, null, null, 63, null);
  };
  IntegerList.prototype.binarySearch_ahg860_k$ = function (key) {
    return indexOf(ensureNotNull(this._data_1), key);
  };
  IntegerList.prototype.binarySearch_tth96g_k$ = function (fromIndex, toIndex, key) {
    if (((fromIndex < 0 ? true : toIndex < 0) ? true : fromIndex > this._size_1) ? true : toIndex > this._size_1) {
      throw IndexOutOfBoundsException_init_$Create$_0();
    }
    if (fromIndex > toIndex) {
      throw IllegalArgumentException_init_$Create$_0();
    }
    var i = indexOf(sliceArray(ensureNotNull(this._data_1), numberRangeToNumber(fromIndex, toIndex - 1 | 0)), key);
    var tmp;
    if (i === -1) {
      tmp = -1;
    } else {
      tmp = i + fromIndex | 0;
    }
    return tmp;
  };
  IntegerList.prototype.toCharArray_f3k0vc_k$ = function () {
    var resultArray = charArray(this._size_1);
    var resultIdx = 0;
    var calculatedPreciseResultSize = false;
    var inductionVariable = 0;
    var last = this._size_1;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var codePoint = ensureNotNull(this._data_1)[i];
        if (!calculatedPreciseResultSize ? isSupplementaryCodePoint(Companion_getInstance(), codePoint) : false) {
          resultArray = toCharArray(filterNotNull(copyOf(toTypedArray_0(resultArray), charArraySize(this))));
          calculatedPreciseResultSize = true;
        }
        var charsWritten = toChars(Companion_getInstance(), codePoint, resultArray, resultIdx);
        resultIdx = resultIdx + charsWritten | 0;
      }
       while (inductionVariable < last);
    return resultArray;
  };
  function IntegerList() {
    Companion_getInstance_30();
    this._data_1 = null;
    this._size_1 = 0;
  }
  IntegerList.$metadata$ = {
    simpleName: 'IntegerList',
    kind: 'class',
    interfaces: []
  };
  function IntegerStack_init_$Init$($this) {
    IntegerList_init_$Init$($this);
    IntegerStack.call($this);
    return $this;
  }
  function IntegerStack_init_$Create$() {
    return IntegerStack_init_$Init$(Object.create(IntegerStack.prototype));
  }
  function IntegerStack_init_$Init$_0(capacity, $this) {
    IntegerList_init_$Init$_0(capacity, $this);
    IntegerStack.call($this);
    return $this;
  }
  function IntegerStack_init_$Create$_0(capacity) {
    return IntegerStack_init_$Init$_0(capacity, Object.create(IntegerStack.prototype));
  }
  function IntegerStack_init_$Init$_1(list, $this) {
    IntegerList_init_$Init$_1(list, $this);
    IntegerStack.call($this);
    return $this;
  }
  function IntegerStack_init_$Create$_1(list) {
    return IntegerStack_init_$Init$_1(list, Object.create(IntegerStack.prototype));
  }
  IntegerStack.prototype.push_bcmxcm_k$ = function (value) {
    this.add_fx1qxd_k$(value);
  };
  IntegerStack.prototype.pop_2dsh_k$ = function () {
    return this.removeAt_qvpkxi_k$(this.size_23och_k$() - 1 | 0);
  };
  IntegerStack.prototype.peek_21nx7_k$ = function () {
    return this.get_fkrdnv_k$(this.size_23och_k$() - 1 | 0);
  };
  function IntegerStack() {
  }
  IntegerStack.$metadata$ = {
    simpleName: 'IntegerStack',
    kind: 'class',
    interfaces: []
  };
  function Companion_30() {
    Companion_instance_30 = this;
    this.INTERVAL_POOL_MAX_VALUE_1 = 1000;
    this.INVALID_1 = new Interval(-1, -2);
    var tmp = this;
    var tmp$ret$0;
    $l$block: {
      var tmp0_arrayOfNulls_0 = this.INTERVAL_POOL_MAX_VALUE_1 + 1 | 0;
      tmp$ret$0 = fillArrayVal(Array(tmp0_arrayOfNulls_0), null);
      break $l$block;
    }
    tmp.cache_1 = tmp$ret$0;
    this.creates_1 = 0;
    this.misses_1 = 0;
    this.hits_1 = 0;
    this.outOfRange_1 = 0;
  }
  Companion_30.prototype._get_INTERVAL_POOL_MAX_VALUE__368140740_636j7o_k$ = function () {
    return this.INTERVAL_POOL_MAX_VALUE_1;
  };
  Companion_30.prototype._get_INVALID__3532429338_clzu1y_k$ = function () {
    return this.INVALID_1;
  };
  Companion_30.prototype._set_cache__781025795_az3t7x_k$ = function (_set____804775014) {
    this.cache_1 = _set____804775014;
  };
  Companion_30.prototype._get_cache__3139187855_j44d4h_k$ = function () {
    return this.cache_1;
  };
  Companion_30.prototype._set_creates__1200454510_qcnji6_k$ = function (_set____804775014) {
    this.creates_1 = _set____804775014;
  };
  Companion_30.prototype._get_creates__3946429178_5ridqe_k$ = function () {
    return this.creates_1;
  };
  Companion_30.prototype._set_misses__3266204333_pb46b_k$ = function (_set____804775014) {
    this.misses_1 = _set____804775014;
  };
  Companion_30.prototype._get_misses__3354784161_fjrdy7_k$ = function () {
    return this.misses_1;
  };
  Companion_30.prototype._set_hits__584256279_qphrrb_k$ = function (_set____804775014) {
    this.hits_1 = _set____804775014;
  };
  Companion_30.prototype._get_hits__798873355_d7mmmj_k$ = function () {
    return this.hits_1;
  };
  Companion_30.prototype._set_outOfRange__3712424991_ryyvjl_k$ = function (_set____804775014) {
    this.outOfRange_1 = _set____804775014;
  };
  Companion_30.prototype._get_outOfRange__2801672467_op2hnx_k$ = function () {
    return this.outOfRange_1;
  };
  Companion_30.prototype.of_9v4utl_k$ = function (a, b) {
    if ((!(a === b) ? true : a < 0) ? true : a > this.INTERVAL_POOL_MAX_VALUE_1) {
      return new Interval(a, b);
    }
    if (this.cache_1[a] == null) {
      this.cache_1[a] = new Interval(a, a);
    }
    return ensureNotNull(this.cache_1[a]);
  };
  Companion_30.$metadata$ = {
    simpleName: 'Companion',
    kind: 'object',
    interfaces: []
  };
  var Companion_instance_30;
  function Companion_getInstance_31() {
    if (Companion_instance_30 == null)
      new Companion_30();
    return Companion_instance_30;
  }
  function Interval(a, b) {
    Companion_getInstance_31();
    this.a_1 = a;
    this.b_1 = b;
  }
  Interval.prototype._set_a__804776068_xfalkc_k$ = function (_set____804775014) {
    this.a_1 = _set____804775014;
  };
  Interval.prototype._get_a__461226256_7mlogg_k$ = function () {
    return this.a_1;
  };
  Interval.prototype._set_b__804776099_q55vpv_k$ = function (_set____804775014) {
    this.b_1 = _set____804775014;
  };
  Interval.prototype._get_b__461226287_7mlohb_k$ = function () {
    return this.b_1;
  };
  Interval.prototype.length_iap7oa_k$ = function () {
    return this.b_1 < this.a_1 ? 0 : (this.b_1 - this.a_1 | 0) + 1 | 0;
  };
  Interval.prototype.equals = function (o) {
    var tmp;
    if (o == null) {
      tmp = true;
    } else {
      tmp = !(o instanceof Interval);
    }
    if (tmp) {
      return false;
    } else {
    }
    var other = (o == null ? true : o instanceof Interval) ? o : THROW_CCE();
    return this.a_1 === ensureNotNull(other).a_1 ? this.b_1 === other.b_1 : false;
  };
  Interval.prototype.hashCode = function () {
    var hash = 23;
    hash = imul(hash, 31) + this.a_1 | 0;
    hash = imul(hash, 31) + this.b_1 | 0;
    return hash;
  };
  Interval.prototype.startsBeforeDisjoint_qqrbr2_k$ = function (other) {
    return this.a_1 < other.a_1 ? this.b_1 < other.a_1 : false;
  };
  Interval.prototype.startsBeforeNonDisjoint_jk56dt_k$ = function (other) {
    return this.a_1 <= other.a_1 ? this.b_1 >= other.a_1 : false;
  };
  Interval.prototype.startsAfter_pq1gh_k$ = function (other) {
    return this.a_1 > other.a_1;
  };
  Interval.prototype.startsAfterDisjoint_bhfq2r_k$ = function (other) {
    return this.a_1 > other.b_1;
  };
  Interval.prototype.startsAfterNonDisjoint_x45i50_k$ = function (other) {
    return this.a_1 > other.a_1 ? this.a_1 <= other.b_1 : false;
  };
  Interval.prototype.disjoint_p5xn5e_k$ = function (other) {
    return this.startsBeforeDisjoint_qqrbr2_k$(other) ? true : this.startsAfterDisjoint_bhfq2r_k$(other);
  };
  Interval.prototype.adjacent_typkjc_k$ = function (other) {
    return this.a_1 === (other.b_1 + 1 | 0) ? true : this.b_1 === (other.a_1 - 1 | 0);
  };
  Interval.prototype.properlyContains_l8m1n6_k$ = function (other) {
    return other.a_1 >= this.a_1 ? other.b_1 <= this.b_1 : false;
  };
  Interval.prototype.union_v2dexn_k$ = function (other) {
    return Companion_getInstance_31().of_9v4utl_k$(Math_getInstance().min_vhgrta_k$(this.a_1, other.a_1), Math_getInstance().max_tun7lo_k$(this.b_1, other.b_1));
  };
  Interval.prototype.intersection_ldsvj3_k$ = function (other) {
    return Companion_getInstance_31().of_9v4utl_k$(Math_getInstance().max_tun7lo_k$(this.a_1, other.a_1), Math_getInstance().min_vhgrta_k$(this.b_1, other.b_1));
  };
  Interval.prototype.differenceNotProperlyContained_r8x28m_k$ = function (other) {
    var diff = null;
    if (other.startsBeforeNonDisjoint_jk56dt_k$(this)) {
      diff = Companion_getInstance_31().of_9v4utl_k$(Math_getInstance().max_tun7lo_k$(this.a_1, other.b_1 + 1 | 0), this.b_1);
    } else if (other.startsAfterNonDisjoint_x45i50_k$(this)) {
      diff = Companion_getInstance_31().of_9v4utl_k$(this.a_1, other.a_1 - 1 | 0);
    }
    return diff;
  };
  Interval.prototype.toString = function () {
    return this.a_1.toString() + '..' + this.b_1;
  };
  Interval.$metadata$ = {
    simpleName: 'Interval',
    kind: 'class',
    interfaces: []
  };
  function IntervalSet_init_$Init$(intervals, $this) {
    IntervalSet.call($this);
    $this.intervals_1 = intervals;
    return $this;
  }
  function IntervalSet_init_$Create$(intervals) {
    return IntervalSet_init_$Init$(intervals, Object.create(IntervalSet.prototype));
  }
  function IntervalSet_init_$Init$_0(set, $this) {
    IntervalSet_init_$Init$_1(new Int32Array([]), $this);
    $this.addAll_z9dmpz_k$(set);
    Unit_getInstance();
    return $this;
  }
  function IntervalSet_init_$Create$_0(set) {
    return IntervalSet_init_$Init$_0(set, Object.create(IntervalSet.prototype));
  }
  function IntervalSet_init_$Init$_1(els, $this) {
    IntervalSet.call($this);
    if (els == null) {
      $this.intervals_1 = ArrayList_init_$Create$(2);
    } else {
      $this.intervals_1 = ArrayList_init_$Create$(els.length);
      var indexedObject = els;
      var inductionVariable = 0;
      var last = indexedObject.length;
      while (inductionVariable < last) {
        var e = indexedObject[inductionVariable];
        inductionVariable = inductionVariable + 1 | 0;
        $this.add_fx1qxd_k$(e);
      }
    }
    return $this;
  }
  function IntervalSet_init_$Create$_1(els) {
    return IntervalSet_init_$Init$_1(els, Object.create(IntervalSet.prototype));
  }
  function Companion_31() {
    Companion_instance_31 = this;
    this.COMPLETE_CHAR_SET_1 = Companion_getInstance_32().of_9v4utl_k$(Companion_getInstance_4()._get_MIN_CHAR_VALUE__2426922326_uw6oq2_k$(), Companion_getInstance_4()._get_MAX_CHAR_VALUE__3537361256_cj24k8_k$());
    this.COMPLETE_CHAR_SET_1._set_isReadonly__3398997899_73ysxu_k$(true);
    this.EMPTY_SET_1 = IntervalSet_init_$Create$_1(new Int32Array([]));
    this.EMPTY_SET_1._set_isReadonly__3398997899_73ysxu_k$(true);
  }
  Companion_31.prototype._get_COMPLETE_CHAR_SET__2272490258_xg4p9q_k$ = function () {
    return this.COMPLETE_CHAR_SET_1;
  };
  Companion_31.prototype._get_EMPTY_SET__2442664481_umt9zz_k$ = function () {
    return this.EMPTY_SET_1;
  };
  Companion_31.prototype.of_h0dvii_k$ = function (a) {
    var s = IntervalSet_init_$Create$_1(new Int32Array([]));
    s.add_fx1qxd_k$(a);
    return s;
  };
  Companion_31.prototype.of_9v4utl_k$ = function (a, b) {
    var s = IntervalSet_init_$Create$_1(new Int32Array([]));
    s.add_fw02r4_k$(a, b);
    return s;
  };
  Companion_31.prototype.or_opdunv_k$ = function (sets) {
    var r = IntervalSet_init_$Create$_1(new Int32Array([]));
    var indexedObject = sets;
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var s = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      r.addAll_z9dmpz_k$(s);
      Unit_getInstance();
    }
    return r;
  };
  Companion_31.prototype.subtract_b83a0k_k$ = function (left, right) {
    if (left == null ? true : left._get_isNil__3326961706_g0bpw6_k$()) {
      return IntervalSet_init_$Create$_1(new Int32Array([]));
    }
    var result = IntervalSet_init_$Create$_0(left);
    if (right == null ? true : right._get_isNil__3326961706_g0bpw6_k$()) {
      return result;
    }
    var resultI = 0;
    var rightI = 0;
    $l$loop_4: while (resultI < ensureNotNull(result.intervals_1)._get_size__809037418_ddoh9m_k$() ? rightI < ensureNotNull(right.intervals_1)._get_size__809037418_ddoh9m_k$() : false) {
      var resultInterval = ensureNotNull(result.intervals_1).get_fkrdnv_k$(resultI);
      var rightInterval = ensureNotNull(right.intervals_1).get_fkrdnv_k$(rightI);
      if (rightInterval._get_b__461226287_7mlohb_k$() < resultInterval._get_a__461226256_7mlogg_k$()) {
        var tmp0 = rightI;
        rightI = tmp0 + 1 | 0;
        Unit_getInstance();
        continue $l$loop_4;
      }
      if (rightInterval._get_a__461226256_7mlogg_k$() > resultInterval._get_b__461226287_7mlohb_k$()) {
        var tmp1 = resultI;
        resultI = tmp1 + 1 | 0;
        Unit_getInstance();
        continue $l$loop_4;
      }
      var beforeCurrent = null;
      var afterCurrent = null;
      if (rightInterval._get_a__461226256_7mlogg_k$() > resultInterval._get_a__461226256_7mlogg_k$()) {
        beforeCurrent = new Interval(resultInterval._get_a__461226256_7mlogg_k$(), rightInterval._get_a__461226256_7mlogg_k$() - 1 | 0);
      }
      if (rightInterval._get_b__461226287_7mlohb_k$() < resultInterval._get_b__461226287_7mlohb_k$()) {
        afterCurrent = new Interval(rightInterval._get_b__461226287_7mlohb_k$() + 1 | 0, resultInterval._get_b__461226287_7mlohb_k$());
      }
      if (!(beforeCurrent == null)) {
        if (!(afterCurrent == null)) {
          ensureNotNull(result.intervals_1).set_meu351_k$(resultI, beforeCurrent);
          Unit_getInstance();
          ensureNotNull(result.intervals_1).add_ydlf05_k$(resultI + 1 | 0, afterCurrent);
          var tmp2 = resultI;
          resultI = tmp2 + 1 | 0;
          Unit_getInstance();
          var tmp3 = rightI;
          rightI = tmp3 + 1 | 0;
          Unit_getInstance();
          continue $l$loop_4;
        } else {
          ensureNotNull(result.intervals_1).set_meu351_k$(resultI, beforeCurrent);
          Unit_getInstance();
          var tmp4 = resultI;
          resultI = tmp4 + 1 | 0;
          Unit_getInstance();
          continue $l$loop_4;
        }
      } else {
        if (!(afterCurrent == null)) {
          ensureNotNull(result.intervals_1).set_meu351_k$(resultI, afterCurrent);
          Unit_getInstance();
          var tmp5 = rightI;
          rightI = tmp5 + 1 | 0;
          Unit_getInstance();
          continue $l$loop_4;
        } else {
          ensureNotNull(result.intervals_1).removeAt_qvpkxi_k$(resultI);
          Unit_getInstance();
          continue $l$loop_4;
        }
      }
    }
    return result;
  };
  Companion_31.$metadata$ = {
    simpleName: 'Companion',
    kind: 'object',
    interfaces: []
  };
  var Companion_instance_31;
  function Companion_getInstance_32() {
    if (Companion_instance_31 == null)
      new Companion_31();
    return Companion_instance_31;
  }
  IntervalSet.prototype._set_intervals__3926670135_vq11y9_k$ = function (_set____804775014) {
    this.intervals_1 = _set____804775014;
  };
  IntervalSet.prototype._get_intervals__1403439043_n7kkhv_k$ = function () {
    return this.intervals_1;
  };
  IntervalSet.prototype._get_isNil__3326961706_g0bpw6_k$ = function () {
    return this.intervals_1 == null ? true : ensureNotNull(this.intervals_1).isEmpty_y1axqb_k$();
  };
  IntervalSet.prototype._get_maxElement__137655955_29yg0j_k$ = function () {
    if (this._get_isNil__3326961706_g0bpw6_k$()) {
      throw RuntimeException_init_$Create$_0('set is empty');
    }
    var last = ensureNotNull(this.intervals_1).get_fkrdnv_k$(ensureNotNull(this.intervals_1)._get_size__809037418_ddoh9m_k$() - 1 | 0);
    return last._get_b__461226287_7mlohb_k$();
  };
  IntervalSet.prototype._get_minElement__3755190657_8xdabj_k$ = function () {
    if (this._get_isNil__3326961706_g0bpw6_k$()) {
      throw RuntimeException_init_$Create$_0('set is empty');
    }
    return ensureNotNull(this.intervals_1).get_fkrdnv_k$(0)._get_a__461226256_7mlogg_k$();
  };
  IntervalSet.prototype._set_isReadonly__3398997899_73ysxu_k$ = function (readonly) {
    if (this.isReadonly_1 ? !readonly : false)
      throw IllegalStateException_init_$Create$("can't alter readonly IntervalSet");
    this.isReadonly_1 = readonly;
  };
  IntervalSet.prototype._get_isReadonly__2488245375_tvobk1_k$ = function () {
    return this.isReadonly_1;
  };
  IntervalSet.prototype.clear_j9y8zo_k$ = function () {
    if (this.isReadonly_1)
      throw IllegalStateException_init_$Create$("can't alter readonly IntervalSet");
    ensureNotNull(this.intervals_1).clear_j9y8zo_k$();
  };
  IntervalSet.prototype.add_fx1qxd_k$ = function (el) {
    if (this.isReadonly_1)
      throw IllegalStateException_init_$Create$("can't alter readonly IntervalSet");
    this.add_fw02r4_k$(el, el);
  };
  IntervalSet.prototype.add_fw02r4_k$ = function (a, b) {
    this.add_87rklk_k$(Companion_getInstance_31().of_9v4utl_k$(a, b));
  };
  IntervalSet.prototype.add_87rklk_k$ = function (addition) {
    if (this.isReadonly_1)
      throw IllegalStateException_init_$Create$("can't alter readonly IntervalSet");
    if (addition._get_b__461226287_7mlohb_k$() < addition._get_a__461226256_7mlogg_k$()) {
      return Unit_getInstance();
    }
    var iter = ensureNotNull(this.intervals_1).listIterator_xjshxw_k$();
    while (iter.hasNext_bitz1p_k$()) {
      var r = iter.next_20eer_k$();
      if (addition.equals(r)) {
        return Unit_getInstance();
      }
      if (addition.adjacent_typkjc_k$(r) ? true : !addition.disjoint_p5xn5e_k$(r)) {
        var bigger = addition.union_v2dexn_k$(r);
        iter.set_hda1d2_k$(bigger);
        $l$loop: while (iter.hasNext_bitz1p_k$()) {
          var next = iter.next_20eer_k$();
          if (!bigger.adjacent_typkjc_k$(next) ? bigger.disjoint_p5xn5e_k$(next) : false) {
            break $l$loop;
          }
          iter.remove_le47v1_k$();
          iter.previous_l2dfd5_k$();
          Unit_getInstance();
          iter.set_hda1d2_k$(bigger.union_v2dexn_k$(next));
          iter.next_20eer_k$();
          Unit_getInstance();
        }
        return Unit_getInstance();
      }
      if (addition.startsBeforeDisjoint_qqrbr2_k$(r)) {
        iter.previous_l2dfd5_k$();
        Unit_getInstance();
        iter.add_sf7wgr_k$(addition);
        return Unit_getInstance();
      }
    }
    ensureNotNull(this.intervals_1).add_1j60pz_k$(addition);
    Unit_getInstance();
  };
  IntervalSet.prototype.addAll_z9dmpz_k$ = function (set) {
    if (set == null) {
      return this;
    }
    if (set instanceof IntervalSet) {
      var other = (set == null ? true : set instanceof IntervalSet) ? set : THROW_CCE();
      var n = ensureNotNull(ensureNotNull(other).intervals_1)._get_size__809037418_ddoh9m_k$();
      var inductionVariable = 0;
      if (inductionVariable < n)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var I = ensureNotNull(other.intervals_1).get_fkrdnv_k$(i);
          this.add_fw02r4_k$(I._get_a__461226256_7mlogg_k$(), I._get_b__461226287_7mlohb_k$());
        }
         while (inductionVariable < n);
    } else {
      {
        var tmp1_iterator = ensureNotNull(set).toList_edfyo7_k$().iterator_jk1svi_k$();
        while (tmp1_iterator.hasNext_bitz1p_k$()) {
          var value = tmp1_iterator.next_20eer_k$();
          this.add_fx1qxd_k$(value);
        }
      }
    }
    return this;
  };
  IntervalSet.prototype.complement_ch84qu_k$ = function (minElement, maxElement) {
    return this.complement_947jrn_k$(Companion_getInstance_32().of_9v4utl_k$(minElement, maxElement));
  };
  IntervalSet.prototype.complement_947jrn_k$ = function (vocabulary) {
    if (vocabulary == null ? true : ensureNotNull(vocabulary)._get_isNil__3326961706_g0bpw6_k$()) {
      return null;
    }
    var vocabularyIS;
    if (vocabulary instanceof IntervalSet) {
      vocabularyIS = vocabulary;
    } else {
      {
        vocabularyIS = IntervalSet_init_$Create$_1(new Int32Array([]));
        vocabularyIS.addAll_z9dmpz_k$(vocabulary);
        Unit_getInstance();
      }
    }
    return vocabularyIS.subtract_txoth_k$(this);
  };
  IntervalSet.prototype.subtract_txoth_k$ = function (a) {
    if (a == null ? true : ensureNotNull(a)._get_isNil__3326961706_g0bpw6_k$()) {
      return IntervalSet_init_$Create$_0(this);
    }
    if (a instanceof IntervalSet) {
      var tmp = Companion_getInstance_32();
      return tmp.subtract_b83a0k_k$(this, (a == null ? true : a instanceof IntervalSet) ? a : THROW_CCE());
    } else {
    }
    var other = IntervalSet_init_$Create$_1(new Int32Array([]));
    other.addAll_z9dmpz_k$(a);
    Unit_getInstance();
    return Companion_getInstance_32().subtract_b83a0k_k$(this, other);
  };
  IntervalSet.prototype.or_ajxx5i_k$ = function (a) {
    var o = IntervalSet_init_$Create$_1(new Int32Array([]));
    o.addAll_z9dmpz_k$(this);
    Unit_getInstance();
    o.addAll_z9dmpz_k$(a);
    Unit_getInstance();
    return o;
  };
  IntervalSet.prototype.and_3zew2_k$ = function (other) {
    if (other == null) {
      return null;
    }
    var myIntervals = this.intervals_1;
    var theirIntervals = (other instanceof IntervalSet ? other : THROW_CCE()).intervals_1;
    var intersection = null;
    var mySize = ensureNotNull(myIntervals)._get_size__809037418_ddoh9m_k$();
    var theirSize = ensureNotNull(theirIntervals)._get_size__809037418_ddoh9m_k$();
    var i = 0;
    var j = 0;
    while (i < mySize ? j < theirSize : false) {
      var mine = myIntervals.get_fkrdnv_k$(i);
      var theirs = theirIntervals.get_fkrdnv_k$(j);
      if (mine.startsBeforeDisjoint_qqrbr2_k$(theirs)) {
        var tmp0 = i;
        i = tmp0 + 1 | 0;
        Unit_getInstance();
      } else if (theirs.startsBeforeDisjoint_qqrbr2_k$(mine)) {
        var tmp1 = j;
        j = tmp1 + 1 | 0;
        Unit_getInstance();
      } else if (mine.properlyContains_l8m1n6_k$(theirs)) {
        if (intersection == null) {
          intersection = IntervalSet_init_$Create$_1(new Int32Array([]));
        }
        intersection.add_87rklk_k$(mine.intersection_ldsvj3_k$(theirs));
        var tmp2 = j;
        j = tmp2 + 1 | 0;
        Unit_getInstance();
      } else if (theirs.properlyContains_l8m1n6_k$(mine)) {
        if (intersection == null) {
          intersection = IntervalSet_init_$Create$_1(new Int32Array([]));
        }
        intersection.add_87rklk_k$(mine.intersection_ldsvj3_k$(theirs));
        var tmp3 = i;
        i = tmp3 + 1 | 0;
        Unit_getInstance();
      } else if (!mine.disjoint_p5xn5e_k$(theirs)) {
        if (intersection == null) {
          intersection = IntervalSet_init_$Create$_1(new Int32Array([]));
        }
        intersection.add_87rklk_k$(mine.intersection_ldsvj3_k$(theirs));
        if (mine.startsAfterNonDisjoint_x45i50_k$(theirs)) {
          var tmp4 = j;
          j = tmp4 + 1 | 0;
          Unit_getInstance();
        } else if (theirs.startsAfterNonDisjoint_x45i50_k$(mine)) {
          var tmp5 = i;
          i = tmp5 + 1 | 0;
          Unit_getInstance();
        }
      }
    }
    var tmp;
    if (intersection == null) {
      tmp = IntervalSet_init_$Create$_1(new Int32Array([]));
    } else {
      tmp = intersection;
    }
    return tmp;
  };
  IntervalSet.prototype.contains_1pg60y_k$ = function (el) {
    var n = ensureNotNull(this.intervals_1)._get_size__809037418_ddoh9m_k$();
    var l = 0;
    var r = n - 1 | 0;
    while (l <= r) {
      var m = (l + r | 0) / 2 | 0;
      var I = ensureNotNull(this.intervals_1).get_fkrdnv_k$(m);
      var a = I._get_a__461226256_7mlogg_k$();
      var b = I._get_b__461226287_7mlohb_k$();
      if (b < el) {
        l = m + 1 | 0;
      } else if (a > el) {
        r = m - 1 | 0;
      } else {
        return true;
      }
    }
    return false;
  };
  IntervalSet.prototype.hashCode = function () {
    var tmp = MurmurHash_getInstance();
    var hash = tmp.initialize$default_diri32_k$(0, 1, null);
    var tmp0_iterator = ensureNotNull(this.intervals_1).iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var I = tmp0_iterator.next_20eer_k$();
      hash = MurmurHash_getInstance().update_v7hmy1_k$(hash, I._get_a__461226256_7mlogg_k$());
      hash = MurmurHash_getInstance().update_v7hmy1_k$(hash, I._get_b__461226287_7mlohb_k$());
    }
    hash = MurmurHash_getInstance().finish_anppvx_k$(hash, imul(ensureNotNull(this.intervals_1)._get_size__809037418_ddoh9m_k$(), 2));
    return hash;
  };
  IntervalSet.prototype.equals = function (obj) {
    var tmp;
    if (obj == null) {
      tmp = true;
    } else {
      tmp = !(obj instanceof IntervalSet);
    }
    if (tmp) {
      return false;
    } else {
    }
    var other = (obj == null ? true : obj instanceof IntervalSet) ? obj : THROW_CCE();
    return equals(this.intervals_1, ensureNotNull(other).intervals_1);
  };
  IntervalSet.prototype.toString = function () {
    return this.toString_43c40e_k$(false);
  };
  IntervalSet.prototype.toString_43c40e_k$ = function (elemAreChar) {
    var buf = StringBuilder_init_$Create$();
    if (this.intervals_1 == null ? true : ensureNotNull(this.intervals_1).isEmpty_y1axqb_k$()) {
      return '{}';
    }
    if (this.size_23och_k$() > 1) {
      buf.append_ssq29y_k$('{');
      Unit_getInstance();
    }
    var iter = ensureNotNull(this.intervals_1).iterator_jk1svi_k$();
    while (iter.hasNext_bitz1p_k$()) {
      var I = iter.next_20eer_k$();
      var a = I._get_a__461226256_7mlogg_k$();
      var b = I._get_b__461226287_7mlohb_k$();
      if (a === b) {
        if (a === Companion_getInstance_6()._get_EOF__855984949_e5mq7p_k$()) {
          buf.append_ssq29y_k$('<EOF>');
          Unit_getInstance();
        } else if (elemAreChar) {
          throw NotImplementedError_init_$Create$(null, 1, null);
        } else {
          buf.append_t8pm91_k$(a);
          Unit_getInstance();
        }
      } else {
        if (elemAreChar) {
          throw NotImplementedError_init_$Create$(null, 1, null);
        } else {
          buf.append_t8pm91_k$(a).append_ssq29y_k$('..').append_t8pm91_k$(b);
          Unit_getInstance();
        }
      }
      if (iter.hasNext_bitz1p_k$()) {
        buf.append_ssq29y_k$(', ');
        Unit_getInstance();
      }
    }
    if (this.size_23och_k$() > 1) {
      buf.append_ssq29y_k$('}');
      Unit_getInstance();
    }
    return buf.toString();
  };
  IntervalSet.prototype.toString_7kox9f_k$ = function (tokenNames) {
    var tmp = Companion_getInstance_7();
    return this.toString_dmzcgh_k$(tmp.fromTokenNames_5d7him_k$(isArray(tokenNames) ? tokenNames : THROW_CCE()));
  };
  IntervalSet.prototype.toString_dmzcgh_k$ = function (vocabulary) {
    var buf = StringBuilder_init_$Create$();
    if (this.intervals_1 == null ? true : ensureNotNull(this.intervals_1).isEmpty_y1axqb_k$()) {
      return '{}';
    }
    if (this.size_23och_k$() > 1) {
      buf.append_ssq29y_k$('{');
      Unit_getInstance();
    }
    var iter = ensureNotNull(this.intervals_1).iterator_jk1svi_k$();
    while (iter.hasNext_bitz1p_k$()) {
      var I = iter.next_20eer_k$();
      var a = I._get_a__461226256_7mlogg_k$();
      var b = I._get_b__461226287_7mlohb_k$();
      if (a === b) {
        buf.append_ssq29y_k$(this.elementName_puk8t3_k$(vocabulary, a));
        Unit_getInstance();
      } else {
        var inductionVariable = a;
        if (inductionVariable <= b)
          do {
            var i = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            if (i > a) {
              buf.append_ssq29y_k$(', ');
              Unit_getInstance();
            }
            buf.append_ssq29y_k$(this.elementName_puk8t3_k$(vocabulary, i));
            Unit_getInstance();
          }
           while (!(i === b));
      }
      if (iter.hasNext_bitz1p_k$()) {
        buf.append_ssq29y_k$(', ');
        Unit_getInstance();
      }
    }
    if (this.size_23och_k$() > 1) {
      buf.append_ssq29y_k$('}');
      Unit_getInstance();
    }
    return buf.toString();
  };
  IntervalSet.prototype.elementName_cxkw2f_k$ = function (tokenNames, a) {
    var tmp = Companion_getInstance_7();
    return this.elementName_puk8t3_k$(tmp.fromTokenNames_5d7him_k$(isArray(tokenNames) ? tokenNames : THROW_CCE()), a);
  };
  IntervalSet.prototype.elementName_puk8t3_k$ = function (vocabulary, a) {
    var tmp;
    if (a === Companion_getInstance_6()._get_EOF__855984949_e5mq7p_k$()) {
      tmp = '<EOF>';
    } else if (a === Companion_getInstance_6()._get_EPSILON__2552669447_stbhmh_k$()) {
      tmp = '<EPSILON>';
    } else {
      tmp = vocabulary.getDisplayName_u57fdi_k$(a);
    }
    return tmp;
  };
  IntervalSet.prototype.size_23och_k$ = function () {
    var n = 0;
    var numIntervals = ensureNotNull(this.intervals_1)._get_size__809037418_ddoh9m_k$();
    if (numIntervals === 1) {
      var firstInterval = ensureNotNull(this.intervals_1).get_fkrdnv_k$(0);
      return (firstInterval._get_b__461226287_7mlohb_k$() - firstInterval._get_a__461226256_7mlogg_k$() | 0) + 1 | 0;
    }
    var inductionVariable = 0;
    if (inductionVariable < numIntervals)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var I = ensureNotNull(this.intervals_1).get_fkrdnv_k$(i);
        n = n + ((I._get_b__461226287_7mlohb_k$() - I._get_a__461226256_7mlogg_k$() | 0) + 1 | 0) | 0;
      }
       while (inductionVariable < numIntervals);
    return n;
  };
  IntervalSet.prototype.toIntegerList_zt9xb_k$ = function () {
    var values = IntegerList_init_$Create$_0(this.size_23och_k$());
    var n = ensureNotNull(this.intervals_1)._get_size__809037418_ddoh9m_k$();
    var inductionVariable = 0;
    if (inductionVariable < n)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var I = ensureNotNull(this.intervals_1).get_fkrdnv_k$(i);
        var a = I._get_a__461226256_7mlogg_k$();
        var b = I._get_b__461226287_7mlohb_k$();
        var inductionVariable_0 = a;
        if (inductionVariable_0 <= b)
          do {
            var v = inductionVariable_0;
            inductionVariable_0 = inductionVariable_0 + 1 | 0;
            values.add_fx1qxd_k$(v);
          }
           while (!(v === b));
      }
       while (inductionVariable < n);
    return values;
  };
  IntervalSet.prototype.toList_edfyo7_k$ = function () {
    var values = ArrayList_init_$Create$_0();
    var n = ensureNotNull(this.intervals_1)._get_size__809037418_ddoh9m_k$();
    var inductionVariable = 0;
    if (inductionVariable < n)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var I = ensureNotNull(this.intervals_1).get_fkrdnv_k$(i);
        var a = I._get_a__461226256_7mlogg_k$();
        var b = I._get_b__461226287_7mlohb_k$();
        var inductionVariable_0 = a;
        if (inductionVariable_0 <= b)
          do {
            var v = inductionVariable_0;
            inductionVariable_0 = inductionVariable_0 + 1 | 0;
            values.add_1j60pz_k$(v);
            Unit_getInstance();
          }
           while (!(v === b));
      }
       while (inductionVariable < n);
    return values;
  };
  IntervalSet.prototype.toSet_1tssfb_k$ = function () {
    var s = HashSet_init_$Create$_0();
    var tmp0_iterator = ensureNotNull(this.intervals_1).iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var I = tmp0_iterator.next_20eer_k$();
      var a = I._get_a__461226256_7mlogg_k$();
      var b = I._get_b__461226287_7mlohb_k$();
      var inductionVariable = a;
      if (inductionVariable <= b)
        do {
          var v = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          s.add_1j60pz_k$(v);
          Unit_getInstance();
        }
         while (!(v === b));
    }
    return s;
  };
  IntervalSet.prototype.get_fkrdnv_k$ = function (i) {
    var n = ensureNotNull(this.intervals_1)._get_size__809037418_ddoh9m_k$();
    var index = 0;
    var inductionVariable = 0;
    if (inductionVariable < n)
      do {
        var j = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var I = ensureNotNull(this.intervals_1).get_fkrdnv_k$(j);
        var a = I._get_a__461226256_7mlogg_k$();
        var b = I._get_b__461226287_7mlohb_k$();
        var inductionVariable_0 = a;
        if (inductionVariable_0 <= b)
          do {
            var v = inductionVariable_0;
            inductionVariable_0 = inductionVariable_0 + 1 | 0;
            if (index === i) {
              return v;
            }
            var tmp2 = index;
            index = tmp2 + 1 | 0;
            Unit_getInstance();
          }
           while (!(v === b));
      }
       while (inductionVariable < n);
    return -1;
  };
  IntervalSet.prototype.toArray_jjyjqa_k$ = function () {
    return this.toIntegerList_zt9xb_k$().toArray_jjyjqa_k$();
  };
  IntervalSet.prototype.remove_nib8oc_k$ = function (el) {
    if (this.isReadonly_1)
      throw IllegalStateException_init_$Create$("can't alter readonly IntervalSet");
    var n = ensureNotNull(this.intervals_1)._get_size__809037418_ddoh9m_k$();
    var inductionVariable = 0;
    if (inductionVariable < n)
      $l$loop_2: do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var I = ensureNotNull(this.intervals_1).get_fkrdnv_k$(i);
        var a = I._get_a__461226256_7mlogg_k$();
        var b = I._get_b__461226287_7mlohb_k$();
        if (el < a) {
          break $l$loop_2;
        }
        if (el === a ? el === b : false) {
          ensureNotNull(this.intervals_1).removeAt_qvpkxi_k$(i);
          Unit_getInstance();
          break $l$loop_2;
        }
        if (el === a) {
          var tmp1_this = I;
          var tmp2 = tmp1_this._get_a__461226256_7mlogg_k$();
          tmp1_this._set_a__804776068_xfalkc_k$(tmp2 + 1 | 0);
          Unit_getInstance();
          break $l$loop_2;
        }
        if (el === b) {
          var tmp3_this = I;
          var tmp4 = tmp3_this._get_b__461226287_7mlohb_k$();
          tmp3_this._set_b__804776099_q55vpv_k$(tmp4 - 1 | 0);
          Unit_getInstance();
          break $l$loop_2;
        }
        if (el > a ? el < b : false) {
          var oldb = I._get_b__461226287_7mlohb_k$();
          I._set_b__804776099_q55vpv_k$(el - 1 | 0);
          this.add_fw02r4_k$(el + 1 | 0, oldb);
        }
      }
       while (inductionVariable < n);
  };
  function IntervalSet() {
    Companion_getInstance_32();
    this.intervals_1 = null;
    this.isReadonly_1 = false;
  }
  IntervalSet.$metadata$ = {
    simpleName: 'IntervalSet',
    kind: 'class',
    interfaces: [IntSet]
  };
  function _get_DEFAULT_SEED__793272668($this) {
    return $this.DEFAULT_SEED_1;
  }
  function MurmurHash() {
    MurmurHash_instance = this;
    this.DEFAULT_SEED_1 = 0;
  }
  MurmurHash.prototype.initialize_mh9k0f_k$ = function (seed) {
    return seed;
  };
  MurmurHash.prototype.initialize$default_diri32_k$ = function (seed, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      seed = this.DEFAULT_SEED_1;
    return this.initialize_mh9k0f_k$(seed);
  };
  MurmurHash.prototype.update_v7hmy1_k$ = function (hash, value) {
    var hash_0 = hash;
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
    hash_0 = hash_0 ^ k;
    hash_0 = hash_0 << r2 | (hash_0 >>> (32 - r2 | 0) | 0);
    hash_0 = imul(hash_0, m) + n | 0;
    return hash_0;
  };
  MurmurHash.prototype.update_qzj42v_k$ = function (hash, value) {
    var tmp0_safe_receiver = value;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    return this.update_v7hmy1_k$(hash, tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs);
  };
  MurmurHash.prototype.finish_anppvx_k$ = function (hash, numberOfWords) {
    var hash_0 = hash;
    hash_0 = hash_0 ^ imul(numberOfWords, 4);
    hash_0 = hash_0 ^ (hash_0 >>> 16 | 0);
    hash_0 = imul(hash_0, -2048144789);
    hash_0 = hash_0 ^ (hash_0 >>> 13 | 0);
    hash_0 = imul(hash_0, -1028477387);
    hash_0 = hash_0 ^ (hash_0 >>> 16 | 0);
    return hash_0;
  };
  MurmurHash.prototype.hashCode_ufo38d_k$ = function (data, seed) {
    var hash = this.initialize_mh9k0f_k$(seed);
    var indexedObject = data;
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var value = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      hash = this.update_qzj42v_k$(hash, value);
    }
    hash = this.finish_anppvx_k$(hash, data.length);
    return hash;
  };
  MurmurHash.$metadata$ = {
    simpleName: 'MurmurHash',
    kind: 'object',
    interfaces: []
  };
  var MurmurHash_instance;
  function MurmurHash_getInstance() {
    if (MurmurHash_instance == null)
      new MurmurHash();
    return MurmurHash_instance;
  }
  function Companion_32() {
    Companion_instance_32 = this;
    this.INSTANCE_1 = new ObjectEqualityComparator();
  }
  Companion_32.prototype._get_INSTANCE__2559446_1iuvq_k$ = function () {
    return this.INSTANCE_1;
  };
  Companion_32.$metadata$ = {
    simpleName: 'Companion',
    kind: 'object',
    interfaces: []
  };
  var Companion_instance_32;
  function Companion_getInstance_33() {
    if (Companion_instance_32 == null)
      new Companion_32();
    return Companion_instance_32;
  }
  function ObjectEqualityComparator() {
    Companion_getInstance_33();
    AbstractEqualityComparator.call(this);
  }
  ObjectEqualityComparator.prototype.hashCode_3clz5c_k$ = function (obj) {
    var tmp0_safe_receiver = obj;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    return tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
  };
  ObjectEqualityComparator.prototype.equals_cjghj5_k$ = function (a, b) {
    var tmp;
    if (a == null) {
      tmp = b == null;
    } else {
      tmp = equals(a, b);
    }
    return tmp;
  };
  ObjectEqualityComparator.$metadata$ = {
    simpleName: 'ObjectEqualityComparator',
    kind: 'class',
    interfaces: []
  };
  function Predicate_0() {
  }
  Predicate_0.$metadata$ = {
    simpleName: 'Predicate',
    kind: 'interface',
    interfaces: []
  };
  function $readFileCOROUTINE$0(_this__1828080292, fileName, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__1828080292__1 = _this__1828080292;
    this.fileName_1 = fileName;
  }
  $readFileCOROUTINE$0.prototype.doResume_5yljmg_k$ = function () {
    var suspendResult = this._get_result__3382885006_f31376_k$();
    $sm: do
      try {
        var tmp = this._get_state__3614753120_b8zcm8_k$();
        switch (tmp) {
          case 0:
            this._set_exceptionState__118868437_8fc1n_k$(2);
            this._set_state__1256591060_i39zdo_k$(1);
            suspendResult = Platform_getInstance().readFile_ygqa8f_k$(this.fileName_1, this);
            if (suspendResult === _get_COROUTINE_SUSPENDED__2870145053()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var ARGUMENT = suspendResult;
            return asCharArray(ARGUMENT);
          case 2:
            throw this._get_exception__1672948706_ro13he_k$();
        }
      } catch ($p) {
        if (this._get_exceptionState__1662596297_rhv7ih_k$() === 2) {
          throw $p;
        } else {
          this._set_state__1256591060_i39zdo_k$(this._get_exceptionState__1662596297_rhv7ih_k$());
          this._set_exception__4196179798_3fu58l_k$($p);
        }
      }
     while (true);
  };
  $readFileCOROUTINE$0.$metadata$ = {
    simpleName: '$readFileCOROUTINE$0',
    kind: 'class',
    interfaces: []
  };
  function Utils() {
    Utils_instance = this;
  }
  Utils.prototype.numNonnull_fy4rbs_k$ = function (data) {
    var n = 0;
    if (data == null)
      return n;
    var tmp0_iterator = arrayIterator(data);
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var o = tmp0_iterator.next_20eer_k$();
      if (!(o == null)) {
        var tmp1 = n;
        n = tmp1 + 1 | 0;
        Unit_getInstance();
      }
    }
    return n;
  };
  Utils.prototype.removeAllElements_6ojv60_k$ = function (data, value) {
    if (data == null)
      return Unit_getInstance();
    while (data.contains_2ehdt1_k$(value)) {
      data.remove_8hbkc6_k$(value);
      Unit_getInstance();
    }
  };
  Utils.prototype.escapeWhitespace_yaf43n_k$ = function (s, escapeSpaces) {
    var buf = StringBuilder_init_$Create$();
    var indexedObject = asCharArray(s);
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var c = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      if (equals(new Char(c), new Char(_Char___init__impl__380027157(32))) ? escapeSpaces : false) {
        buf.append_t8oh9e_k$(_Char___init__impl__380027157(183));
        Unit_getInstance();
      } else if (equals(new Char(c), new Char(_Char___init__impl__380027157(9)))) {
        buf.append_ssq29y_k$('\\t');
        Unit_getInstance();
      } else if (equals(new Char(c), new Char(_Char___init__impl__380027157(10)))) {
        buf.append_ssq29y_k$('\\n');
        Unit_getInstance();
      } else if (equals(new Char(c), new Char(_Char___init__impl__380027157(13)))) {
        buf.append_ssq29y_k$('\\r');
        Unit_getInstance();
      } else {
        buf.append_t8oh9e_k$(c);
        Unit_getInstance();
      }
    }
    return buf.toString();
  };
  Utils.prototype.readFile_q7neuh_k$ = function (fileName, $cont) {
    var tmp = new $readFileCOROUTINE$0(this, fileName, $cont);
    tmp._set_result__3294305178_cat9z_k$(Unit_getInstance());
    tmp._set_exception__4196179798_3fu58l_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  Utils.prototype.toMap_ocvu6q_k$ = function (keys) {
    var m = HashMap_init_$Create$();
    var inductionVariable = 0;
    var last = keys.length - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        {
          var tmp0_set_0 = keys[i];
          m.put_3mhbri_k$(tmp0_set_0, i);
          Unit_getInstance();
        }
      }
       while (inductionVariable <= last);
    return m;
  };
  Utils.prototype.toCharArray_nyv6lc_k$ = function (data) {
    var tmp0_safe_receiver = data;
    return tmp0_safe_receiver == null ? null : tmp0_safe_receiver.toCharArray_f3k0vc_k$();
  };
  Utils.prototype.toSet_a9ddfw_k$ = function (bits) {
    var s = IntervalSet_init_$Create$_1(new Int32Array([]));
    var i = bits.nextSetBit_v9xw6b_k$(0);
    while (i >= 0) {
      s.add_fx1qxd_k$(i);
      i = bits.nextSetBit_v9xw6b_k$(i + 1 | 0);
    }
    return s;
  };
  Utils.prototype.expandTabs_xmdxp5_k$ = function (s, tabSize) {
    if (s == null)
      return null;
    var buf = StringBuilder_init_$Create$();
    var col = 0;
    var indexedObject = s;
    var inductionVariable = 0;
    while (inductionVariable < charSequenceLength(indexedObject)) {
      var element = charSequenceGet(indexedObject, inductionVariable);
      inductionVariable = inductionVariable + 1 | 0;
      var tmp1_subject = element;
      if (equals(new Char(tmp1_subject), new Char(_Char___init__impl__380027157(10)))) {
        col = 0;
        buf.append_t8oh9e_k$(element);
        Unit_getInstance();
      } else if (equals(new Char(tmp1_subject), new Char(_Char___init__impl__380027157(9)))) {
        var n = tabSize - col % tabSize | 0;
        col = col + n | 0;
        buf.append_ssq29y_k$(this.spaces_qaif64_k$(n));
        Unit_getInstance();
      } else {
        var tmp2 = col;
        col = tmp2 + 1 | 0;
        Unit_getInstance();
        buf.append_t8oh9e_k$(element);
        Unit_getInstance();
      }
    }
    return buf.toString();
  };
  Utils.prototype.spaces_qaif64_k$ = function (n) {
    return this.sequence_wth76p_k$(n, ' ');
  };
  Utils.prototype.newlines_dxqdha_k$ = function (n) {
    return this.sequence_wth76p_k$(n, '\n');
  };
  Utils.prototype.sequence_wth76p_k$ = function (n, s) {
    var buf = StringBuilder_init_$Create$();
    var inductionVariable = 1;
    if (inductionVariable <= n)
      do {
        var sp = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        buf.append_ssq29y_k$(s);
        Unit_getInstance();
      }
       while (!(sp === n));
    return buf.toString();
  };
  Utils.prototype.count_dko32_k$ = function (s, x) {
    var n = 0;
    var indexedObject = s;
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var element = charSequenceGet(indexedObject, inductionVariable);
      inductionVariable = inductionVariable + 1 | 0;
      if (equals(new Char(element), new Char(x))) {
        var tmp1 = n;
        n = tmp1 + 1 | 0;
        Unit_getInstance();
      }
    }
    return n;
  };
  Utils.$metadata$ = {
    simpleName: 'Utils',
    kind: 'object',
    interfaces: []
  };
  var Utils_instance;
  function Utils_getInstance() {
    if (Utils_instance == null)
      new Utils();
    return Utils_instance;
  }
  function ErrorNode() {
  }
  ErrorNode.$metadata$ = {
    simpleName: 'ErrorNode',
    kind: 'interface',
    interfaces: [TerminalNode]
  };
  function ErrorNodeImpl(token) {
    TerminalNodeImpl.call(this, token);
  }
  ErrorNodeImpl.prototype.accept_4ufyhw_k$ = function (visitor) {
    return visitor.visitErrorNode_4bjfpy_k$(this);
  };
  ErrorNodeImpl.$metadata$ = {
    simpleName: 'ErrorNodeImpl',
    kind: 'class',
    interfaces: [ErrorNode]
  };
  function ParseTree() {
  }
  ParseTree.$metadata$ = {
    simpleName: 'ParseTree',
    kind: 'interface',
    interfaces: [SyntaxTree]
  };
  function ParseTreeListener() {
  }
  ParseTreeListener.$metadata$ = {
    simpleName: 'ParseTreeListener',
    kind: 'interface',
    interfaces: []
  };
  function ParseTreeVisitor() {
  }
  ParseTreeVisitor.$metadata$ = {
    simpleName: 'ParseTreeVisitor',
    kind: 'interface',
    interfaces: []
  };
  function Companion_33() {
    Companion_instance_33 = this;
    this.DEFAULT_1 = new ParseTreeWalker();
  }
  Companion_33.prototype._get_DEFAULT__3552918800_c9soa8_k$ = function () {
    return this.DEFAULT_1;
  };
  Companion_33.$metadata$ = {
    simpleName: 'Companion',
    kind: 'object',
    interfaces: []
  };
  var Companion_instance_33;
  function Companion_getInstance_34() {
    if (Companion_instance_33 == null)
      new Companion_33();
    return Companion_instance_33;
  }
  function ParseTreeWalker() {
    Companion_getInstance_34();
  }
  ParseTreeWalker.prototype.walk_g0y9jc_k$ = function (listener, t) {
    if (isInterface(t, ErrorNode)) {
      listener.visitErrorNode_7q1wqt_k$(isInterface(t, ErrorNode) ? t : THROW_CCE());
      return Unit_getInstance();
    } else {
      if (isInterface(t, TerminalNode)) {
        listener.visitTerminal_j27dif_k$(isInterface(t, TerminalNode) ? t : THROW_CCE());
        return Unit_getInstance();
      } else {
      }
    }
    var r = isInterface(t, RuleNode) ? t : THROW_CCE();
    this.enterRule_9qx9ba_k$(listener, r);
    var n = r._get_childCount__662683032_ayjli0_k$();
    var inductionVariable = 0;
    if (inductionVariable < n)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        this.walk_g0y9jc_k$(listener, ensureNotNull(r.getChild_tm8i57_k$(i)));
      }
       while (inductionVariable < n);
    this.exitRule_sgziwc_k$(listener, r);
  };
  ParseTreeWalker.prototype.enterRule_9qx9ba_k$ = function (listener, r) {
    var tmp = r._get_ruleContext__1279228126_l5maqm_k$();
    var ctx = tmp instanceof ParserRuleContext ? tmp : THROW_CCE();
    listener.enterEveryRule_qb430n_k$(ctx);
    ctx.enterRule_nsg4az_k$(listener);
  };
  ParseTreeWalker.prototype.exitRule_sgziwc_k$ = function (listener, r) {
    var tmp = r._get_ruleContext__1279228126_l5maqm_k$();
    var ctx = tmp instanceof ParserRuleContext ? tmp : THROW_CCE();
    ctx.exitRule_ixwge3_k$(listener);
    listener.exitEveryRule_1zne9f_k$(ctx);
  };
  ParseTreeWalker.$metadata$ = {
    simpleName: 'ParseTreeWalker',
    kind: 'class',
    interfaces: []
  };
  function RuleNode() {
  }
  RuleNode.$metadata$ = {
    simpleName: 'RuleNode',
    kind: 'interface',
    interfaces: [ParseTree]
  };
  function SyntaxTree() {
  }
  SyntaxTree.$metadata$ = {
    simpleName: 'SyntaxTree',
    kind: 'interface',
    interfaces: [Tree]
  };
  function TerminalNode() {
  }
  TerminalNode.$metadata$ = {
    simpleName: 'TerminalNode',
    kind: 'interface',
    interfaces: [ParseTree]
  };
  function _set_parent__1403382957($this, _set____804775014) {
    $this.parent_1 = _set____804775014;
  }
  function _get_parent__1491962785($this) {
    return $this.parent_1;
  }
  function TerminalNodeImpl(symbol) {
    this.symbol_1 = symbol;
    this.parent_1 = null;
  }
  TerminalNodeImpl.prototype._set_symbol__453320063_ki1jqp_k$ = function (_set____804775014) {
    this.symbol_1 = _set____804775014;
  };
  TerminalNodeImpl.prototype._get_symbol__541899891_8ymsmr_k$ = function () {
    return this.symbol_1;
  };
  TerminalNodeImpl.prototype.assignParent_bbznx3_k$ = function (value) {
    this.parent_1 = value;
  };
  TerminalNodeImpl.prototype.readParent_9zdz4w_k$ = function () {
    return this.parent_1;
  };
  TerminalNodeImpl.prototype._get_sourceInterval__288930827_4s0sgb_k$ = function () {
    if (this._get_symbol__541899891_8ymsmr_k$() == null)
      return Companion_getInstance_31()._get_INVALID__3532429338_clzu1y_k$();
    var tokenIndex = ensureNotNull(this._get_symbol__541899891_8ymsmr_k$())._get_tokenIndex__624413010_abrc5u_k$();
    return new Interval(tokenIndex, tokenIndex);
  };
  TerminalNodeImpl.prototype._get_childCount__662683032_ayjli0_k$ = function () {
    return 0;
  };
  TerminalNodeImpl.prototype._get_text__809840318_de5ose_k$ = function () {
    return ensureNotNull(ensureNotNull(this._get_symbol__541899891_8ymsmr_k$())._get_text__809840318_de5ose_k$());
  };
  TerminalNodeImpl.prototype.getChild_tm8i57_k$ = function (i) {
    return null;
  };
  TerminalNodeImpl.prototype._get_payload__3508054851_d0i9j1_k$ = function () {
    return this._get_symbol__541899891_8ymsmr_k$();
  };
  TerminalNodeImpl.prototype.accept_4ufyhw_k$ = function (visitor) {
    return visitor.visitTerminal_ocynu2_k$(this);
  };
  TerminalNodeImpl.prototype.toStringTree_gu0i56_k$ = function (parser) {
    return this.toString();
  };
  TerminalNodeImpl.prototype.toString = function () {
    return ensureNotNull(this._get_symbol__541899891_8ymsmr_k$())._get_type__810427985_deia8h_k$() === Companion_getInstance_6()._get_EOF__855984949_e5mq7p_k$() ? '<EOF>' : ensureNotNull(ensureNotNull(this._get_symbol__541899891_8ymsmr_k$())._get_text__809840318_de5ose_k$());
  };
  TerminalNodeImpl.prototype.toStringTree_a6qmui_k$ = function () {
    return this.toString();
  };
  TerminalNodeImpl.$metadata$ = {
    simpleName: 'TerminalNodeImpl',
    kind: 'class',
    interfaces: [TerminalNode]
  };
  function Tree() {
  }
  Tree.$metadata$ = {
    simpleName: 'Tree',
    kind: 'interface',
    interfaces: []
  };
  function Trees() {
    Trees_instance = this;
  }
  Trees.prototype.toStringTree_jfanmk_k$ = function (t, recog) {
    var tmp0_safe_receiver = recog;
    var ruleNames = tmp0_safe_receiver == null ? null : tmp0_safe_receiver._get_ruleNames__2055232037_xzmr6t_k$();
    var ruleNamesList = !(ruleNames == null) ? listOf(ruleNames.slice()) : null;
    return this.toStringTree_2id1zr_k$(t, ruleNamesList);
  };
  Trees.prototype.toStringTree_2id1zr_k$ = function (t, ruleNames) {
    var s = Utils_getInstance().escapeWhitespace_yaf43n_k$(this.getNodeText_kfomxe_k$(t, ruleNames), false);
    if (t._get_childCount__662683032_ayjli0_k$() === 0)
      return s;
    var buf = StringBuilder_init_$Create$();
    buf.append_ssq29y_k$('(');
    Unit_getInstance();
    s = Utils_getInstance().escapeWhitespace_yaf43n_k$(this.getNodeText_kfomxe_k$(t, ruleNames), false);
    buf.append_ssq29y_k$(s);
    Unit_getInstance();
    buf.append_t8oh9e_k$(_Char___init__impl__380027157(32));
    Unit_getInstance();
    var inductionVariable = 0;
    var last = t._get_childCount__662683032_ayjli0_k$();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (i > 0) {
          buf.append_t8oh9e_k$(_Char___init__impl__380027157(32));
          Unit_getInstance();
        }
        buf.append_ssq29y_k$(this.toStringTree_2id1zr_k$(ensureNotNull(t.getChild_tm8i57_k$(i)), ruleNames));
        Unit_getInstance();
      }
       while (inductionVariable < last);
    buf.append_ssq29y_k$(')');
    Unit_getInstance();
    return buf.toString();
  };
  Trees.prototype.toStringTree$default_n2azu_k$ = function (t, ruleNames, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      ruleNames = null;
    return this.toStringTree_2id1zr_k$(t, ruleNames);
  };
  Trees.prototype.getNodeText_n917pl_k$ = function (t, recog) {
    var tmp0_safe_receiver = recog;
    var ruleNames = tmp0_safe_receiver == null ? null : tmp0_safe_receiver._get_ruleNames__2055232037_xzmr6t_k$();
    var ruleNamesList = !(ruleNames == null) ? listOf(ruleNames.slice()) : null;
    return this.getNodeText_kfomxe_k$(t, ruleNamesList);
  };
  Trees.prototype.getNodeText_kfomxe_k$ = function (t, ruleNames) {
    if (!(ruleNames == null)) {
      if (t instanceof RuleContext) {
        var ruleIndex = t._get_ruleContext__1279228126_l5maqm_k$()._get_ruleIndex__1923824091_vte863_k$();
        var ruleName = ruleNames.get_fkrdnv_k$(ruleIndex);
        var altNumber = t._get_altNumber__3435339327_e7st6p_k$();
        var tmp;
        if (!(altNumber === Companion_getInstance_8()._get_INVALID_ALT_NUMBER__3632704068_ayalks_k$())) {
          tmp = ruleName + ':' + altNumber;
        } else {
          tmp = ruleName;
        }
        return tmp;
      } else {
        if (isInterface(t, ErrorNode)) {
          return toString(t);
        } else {
          if (isInterface(t, TerminalNode)) {
            var symbol = t._get_symbol__541899891_8ymsmr_k$();
            if (!(symbol == null)) {
              return ensureNotNull(symbol._get_text__809840318_de5ose_k$());
            }
          } else {
          }
        }
      }
    }
    var payload = t._get_payload__3508054851_d0i9j1_k$();
    var tmp_0;
    if (!(payload == null) ? isInterface(payload, Token) : false) {
      tmp_0 = ensureNotNull(payload._get_text__809840318_de5ose_k$());
    } else {
      {
        tmp_0 = toString_1(t._get_payload__3508054851_d0i9j1_k$());
      }
    }
    return tmp_0;
  };
  Trees.prototype.getChildren_9h5roc_k$ = function (t) {
    var kids = ArrayList_init_$Create$_0();
    var inductionVariable = 0;
    var last = t._get_childCount__662683032_ayjli0_k$();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        kids.add_1j60pz_k$(ensureNotNull(t.getChild_tm8i57_k$(i)));
        Unit_getInstance();
      }
       while (inductionVariable < last);
    return kids;
  };
  Trees.prototype.getAncestors_6l02p3_k$ = function (t) {
    if (t.readParent_9zdz4w_k$() == null)
      return emptyList();
    var ancestors = ArrayList_init_$Create$_0();
    var t1 = t.readParent_9zdz4w_k$();
    while (!(t1 == null)) {
      ancestors.add_ydlf05_k$(0, t1);
      t1 = t1.readParent_9zdz4w_k$();
    }
    return ancestors;
  };
  Trees.prototype.isAncestorOf_sbvia8_k$ = function (t, u) {
    if ((t == null ? true : u == null) ? true : t.readParent_9zdz4w_k$() == null)
      return false;
    var p = u.readParent_9zdz4w_k$();
    while (!(p == null)) {
      if (t === p)
        return true;
      p = p.readParent_9zdz4w_k$();
    }
    return false;
  };
  Trees.prototype.findAllTokenNodes_p3fhtv_k$ = function (t, ttype) {
    return this.findAllNodes_byyu68_k$(t, ttype, true);
  };
  Trees.prototype.findAllRuleNodes_hm1356_k$ = function (t, ruleIndex) {
    return this.findAllNodes_byyu68_k$(t, ruleIndex, false);
  };
  Trees.prototype.findAllNodes_byyu68_k$ = function (t, index, findTokens) {
    var nodes = ArrayList_init_$Create$_0();
    this._findAllNodes_cvdcb1_k$(t, index, findTokens, nodes);
    return nodes;
  };
  Trees.prototype._findAllNodes_cvdcb1_k$ = function (t, index, findTokens, nodes) {
    var tmp;
    if (findTokens) {
      tmp = isInterface(t, TerminalNode);
    } else {
      tmp = false;
    }
    if (tmp) {
      var tnode = isInterface(t, TerminalNode) ? t : THROW_CCE();
      if (ensureNotNull(tnode._get_symbol__541899891_8ymsmr_k$())._get_type__810427985_deia8h_k$() === index) {
        nodes.add_1j60pz_k$(t);
        Unit_getInstance();
      }
    } else {
      var tmp_0;
      if (!findTokens) {
        tmp_0 = t instanceof ParserRuleContext;
      } else {
        tmp_0 = false;
      }
      if (tmp_0) {
        var ctx = t instanceof ParserRuleContext ? t : THROW_CCE();
        if (ctx._get_ruleIndex__1923824091_vte863_k$() === index) {
          nodes.add_1j60pz_k$(t);
          Unit_getInstance();
        }
      } else {
      }
    }
    var inductionVariable = 0;
    var last = t._get_childCount__662683032_ayjli0_k$();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        this._findAllNodes_cvdcb1_k$(ensureNotNull(t.getChild_tm8i57_k$(i)), index, findTokens, nodes);
      }
       while (inductionVariable < last);
  };
  Trees.prototype.getDescendants_5cvg66_k$ = function (t) {
    var nodes = ArrayList_init_$Create$_0();
    nodes.add_1j60pz_k$(t);
    Unit_getInstance();
    var n = t._get_childCount__662683032_ayjli0_k$();
    var inductionVariable = 0;
    if (inductionVariable < n)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        nodes.addAll_oxxjjk_k$(this.getDescendants_5cvg66_k$(ensureNotNull(t.getChild_tm8i57_k$(i))));
        Unit_getInstance();
      }
       while (inductionVariable < n);
    return nodes;
  };
  Trees.prototype.descendants_7ia2j8_k$ = function (t) {
    return this.getDescendants_5cvg66_k$(t);
  };
  Trees.prototype.getRootOfSubtreeEnclosingRegion_qjs44x_k$ = function (t, startTokenIndex, stopTokenIndex) {
    var n = t._get_childCount__662683032_ayjli0_k$();
    var inductionVariable = 0;
    if (inductionVariable < n)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var child = t.getChild_tm8i57_k$(i);
        var r = this.getRootOfSubtreeEnclosingRegion_qjs44x_k$(ensureNotNull(child), startTokenIndex, stopTokenIndex);
        if (!(r == null))
          return r;
      }
       while (inductionVariable < n);
    if (t instanceof ParserRuleContext) {
      var r_0 = t instanceof ParserRuleContext ? t : THROW_CCE();
      if (startTokenIndex >= ensureNotNull(r_0._get_start__3614751663_b8zdqp_k$())._get_tokenIndex__624413010_abrc5u_k$() ? r_0._get_stop__809354889_ddva89_k$() == null ? true : stopTokenIndex <= ensureNotNull(r_0._get_stop__809354889_ddva89_k$())._get_tokenIndex__624413010_abrc5u_k$() : false) {
        return r_0;
      }
    } else {
    }
    return null;
  };
  Trees.prototype.stripChildrenOutOfRange_leyir3_k$ = function (t, root, startIndex, stopIndex) {
    if (t == null)
      return Unit_getInstance();
    var inductionVariable = 0;
    var last = t._get_childCount__662683032_ayjli0_k$();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var child = t.getChild_tm8i57_k$(i);
        var range = ensureNotNull(child)._get_sourceInterval__288930827_4s0sgb_k$();
        var tmp;
        if (child instanceof ParserRuleContext) {
          tmp = range._get_b__461226287_7mlohb_k$() < startIndex ? true : range._get_a__461226256_7mlogg_k$() > stopIndex;
        } else {
          {
            tmp = false;
          }
        }
        if (tmp) {
          if (this.isAncestorOf_sbvia8_k$(child, root)) {
            var abbrev = CommonToken_init_$Create$_1(Companion_getInstance_6()._get_INVALID_TYPE__2936648937_mgph5j_k$(), '...');
            ensureNotNull(t._get_children__1387553196_my42wc_k$()).set_meu351_k$(i, new TerminalNodeImpl(abbrev));
            Unit_getInstance();
          }
        } else {
        }
      }
       while (inductionVariable < last);
  };
  Trees.prototype.findNodeSuchThat_7qd0sc_k$ = function (t, pred) {
    if (pred.test_ei8sgp_k$(t))
      return t;
    if (t == null)
      return null;
    var n = t._get_childCount__662683032_ayjli0_k$();
    var inductionVariable = 0;
    if (inductionVariable < n)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var u = this.findNodeSuchThat_7qd0sc_k$(t.getChild_tm8i57_k$(i), pred);
        if (!(u == null))
          return u;
      }
       while (inductionVariable < n);
    return null;
  };
  Trees.$metadata$ = {
    simpleName: 'Trees',
    kind: 'object',
    interfaces: []
  };
  var Trees_instance;
  function Trees_getInstance() {
    if (Trees_instance == null)
      new Trees();
    return Trees_instance;
  }
  function _get_DEFAULT_CHANNEL__1918603244() {
    return DEFAULT_CHANNEL;
  }
  var DEFAULT_CHANNEL;
  function _get_setBits__3514472329($this) {
    return $this.setBits_1;
  }
  function BitSet_init_$Init$($this) {
    BitSet.call($this);
    return $this;
  }
  function BitSet_init_$Create$() {
    return BitSet_init_$Init$(Object.create(BitSet.prototype));
  }
  BitSet.prototype.set_2jdgjy_k$ = function (bitIndex) {
    if (bitIndex < 0)
      throw IllegalArgumentException_init_$Create$_0();
    this.setBits_1.add_1j60pz_k$(bitIndex);
    Unit_getInstance();
  };
  BitSet.prototype.clear_2v0c71_k$ = function (bitIndex) {
    if (bitIndex < 0)
      throw IllegalArgumentException_init_$Create$_0();
    this.setBits_1.remove_8hbkc6_k$(bitIndex);
    Unit_getInstance();
  };
  BitSet.prototype.get_fkrdnv_k$ = function (bitIndex) {
    if (bitIndex < 0)
      throw IllegalArgumentException_init_$Create$_0();
    return this.setBits_1.contains_2ehdt1_k$(bitIndex);
  };
  BitSet.prototype.cardinality_dz7uku_k$ = function () {
    return this.setBits_1._get_size__809037418_ddoh9m_k$();
  };
  BitSet.prototype.nextSetBit_v9xw6b_k$ = function (i) {
    var tmp$ret$2;
    $l$block_1: {
      var tmp0_filter_0 = this.setBits_1;
      var tmp$ret$1;
      $l$block_0: {
        var tmp0_filterTo_0_1 = ArrayList_init_$Create$_0();
        var tmp0_iterator_1_2 = tmp0_filter_0.iterator_jk1svi_k$();
        while (tmp0_iterator_1_2.hasNext_bitz1p_k$()) {
          var element_2_3 = tmp0_iterator_1_2.next_20eer_k$();
          var tmp$ret$0;
          $l$block: {
            tmp$ret$0 = element_2_3 >= i;
            break $l$block;
          }
          if (tmp$ret$0) {
            tmp0_filterTo_0_1.add_1j60pz_k$(element_2_3);
            Unit_getInstance();
          } else {
          }
        }
        tmp$ret$1 = tmp0_filterTo_0_1;
        break $l$block_0;
      }
      tmp$ret$2 = tmp$ret$1;
      break $l$block_1;
    }
    var nextSetBits = tmp$ret$2;
    var tmp0_elvis_lhs = minOrNull(nextSetBits);
    return tmp0_elvis_lhs == null ? -1 : tmp0_elvis_lhs;
  };
  BitSet.prototype.or_st4o01_k$ = function (alts) {
    this.setBits_1.addAll_oxxjjk_k$(alts.setBits_1);
    Unit_getInstance();
  };
  function BitSet() {
    this.setBits_1 = HashSet_init_$Create$_0();
  }
  BitSet.$metadata$ = {
    simpleName: 'BitSet',
    kind: 'class',
    interfaces: []
  };
  function Collections() {
    Collections_instance = this;
  }
  Collections.prototype.min_o6sjm7_k$ = function (precedencePredicates) {
    var tmp0_elvis_lhs = minOrNull(precedencePredicates);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw NoSuchElementException_init_$Create$();
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  Collections.prototype.max_ol4cwx_k$ = function (precedencePredicates) {
    var tmp0_elvis_lhs = maxOrNull(precedencePredicates);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw NoSuchElementException_init_$Create$();
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  Collections.$metadata$ = {
    simpleName: 'Collections',
    kind: 'object',
    interfaces: []
  };
  var Collections_instance;
  function Collections_getInstance() {
    if (Collections_instance == null)
      new Collections();
    return Collections_instance;
  }
  function IdentityHashMap() {
    var tmp = this;
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = LinkedHashMap_init_$Create$();
      break $l$block;
    }
    tmp.$$delegate_0__1 = tmp$ret$0;
  }
  IdentityHashMap.prototype._get_entries__31877249_iz8n5_k$ = function () {
    return this.$$delegate_0__1._get_entries__31877249_iz8n5_k$();
  };
  IdentityHashMap.prototype._get_keys__801529559_d97k5z_k$ = function () {
    return this.$$delegate_0__1._get_keys__801529559_d97k5z_k$();
  };
  IdentityHashMap.prototype._get_size__809037418_ddoh9m_k$ = function () {
    return this.$$delegate_0__1._get_size__809037418_ddoh9m_k$();
  };
  IdentityHashMap.prototype._get_values__2516944425_tel787_k$ = function () {
    return this.$$delegate_0__1._get_values__2516944425_tel787_k$();
  };
  IdentityHashMap.prototype.clear_j9y8zo_k$ = function () {
    this.$$delegate_0__1.clear_j9y8zo_k$();
  };
  IdentityHashMap.prototype.containsKey_wgk31w_k$ = function (key) {
    return this.$$delegate_0__1.containsKey_wgk31w_k$(key);
  };
  IdentityHashMap.prototype.containsValue_5viga1_k$ = function (value) {
    return this.$$delegate_0__1.containsValue_5viga1_k$(value);
  };
  IdentityHashMap.prototype.get_1mhr4y_k$ = function (key) {
    return this.$$delegate_0__1.get_1mhr4y_k$(key);
  };
  IdentityHashMap.prototype.isEmpty_y1axqb_k$ = function () {
    return this.$$delegate_0__1.isEmpty_y1axqb_k$();
  };
  IdentityHashMap.prototype.put_3mhbri_k$ = function (key, value) {
    return this.$$delegate_0__1.put_3mhbri_k$(key, value);
  };
  IdentityHashMap.prototype.putAll_mee1c3_k$ = function (from) {
    this.$$delegate_0__1.putAll_mee1c3_k$(from);
  };
  IdentityHashMap.prototype.remove_8hbkc0_k$ = function (key) {
    return this.$$delegate_0__1.remove_8hbkc0_k$(key);
  };
  IdentityHashMap.$metadata$ = {
    simpleName: 'IdentityHashMap',
    kind: 'class',
    interfaces: [MutableMap]
  };
  var Variant_VARIANT_0_instance;
  var Variant_VARIANT_1_instance;
  var Variant_VARIANT_2_instance;
  var Variant_VARIANT_FUTURE_instance;
  function values_3() {
    return [Variant_VARIANT_0_getInstance(), Variant_VARIANT_1_getInstance(), Variant_VARIANT_2_getInstance(), Variant_VARIANT_FUTURE_getInstance()];
  }
  function valueOf_3(value) {
    switch (value) {
      case 'VARIANT_0':
        return Variant_VARIANT_0_getInstance();
      case 'VARIANT_1':
        return Variant_VARIANT_1_getInstance();
      case 'VARIANT_2':
        return Variant_VARIANT_2_getInstance();
      case 'VARIANT_FUTURE':
        return Variant_VARIANT_FUTURE_getInstance();
      default:
        Variant_initEntries();
        THROW_ISE();
        break;
    }
  }
  var Variant_entriesInitialized;
  function Variant_initEntries() {
    if (Variant_entriesInitialized)
      return Unit_getInstance();
    Variant_entriesInitialized = true;
    Variant_VARIANT_0_instance = new Variant('VARIANT_0', 0, 0, 3);
    Variant_VARIANT_1_instance = new Variant('VARIANT_1', 1, 1, 2);
    Variant_VARIANT_2_instance = new Variant('VARIANT_2', 2, 2, 3);
    Variant_VARIANT_FUTURE_instance = new Variant('VARIANT_FUTURE', 3, 3, 3);
  }
  function _get_timeLow__48413354($this) {
    return $this.timeLow_1;
  }
  function _get_timeMid__48436790($this) {
    return $this.timeMid_1;
  }
  function _get_version__140958009($this) {
    return $this.version_1;
  }
  function _get_timeHi__971388957($this) {
    return $this.timeHi_1;
  }
  function _get_variant__876436268($this) {
    return $this.variant_1;
  }
  function _get_clock_seq__4077188963($this) {
    return $this.clock_seq_1;
  }
  function _get_node__804577417($this) {
    return $this.node_1;
  }
  function Variant(name, ordinal, value, bitsLength) {
    Enum.call(this, name, ordinal);
    this.value_1 = value;
    this.bitsLength_1 = bitsLength;
  }
  Variant.prototype._get_value__3683422336_a43j40_k$ = function () {
    return this.value_1;
  };
  Variant.prototype._get_bitsLength__22565503_dfnnj_k$ = function () {
    return this.bitsLength_1;
  };
  Variant.$metadata$ = {
    simpleName: 'Variant',
    kind: 'class',
    interfaces: []
  };
  function Companion_34() {
    Companion_instance_34 = this;
  }
  Companion_34.prototype.fromString_2a1yvu_k$ = function (encoded) {
    var parts = split$default(encoded, ['-'], false, 0, 6, null);
    {
      var tmp0_require_0 = parts._get_size__809037418_ddoh9m_k$() === 5;
      {
      }
      {
        {
        }
        if (!tmp0_require_0) {
          var tmp$ret$0;
          $l$block: {
            tmp$ret$0 = 'Failed requirement.';
            break $l$block;
          }
          var message_1_1 = tmp$ret$0;
          throw IllegalArgumentException_init_$Create$(toString(message_1_1));
        }
      }
    }
    {
      var tmp1_require_0 = parts.get_fkrdnv_k$(0).length === 8;
      {
      }
      {
        {
        }
        if (!tmp1_require_0) {
          var tmp$ret$1;
          $l$block_0: {
            tmp$ret$1 = 'Failed requirement.';
            break $l$block_0;
          }
          var message_1_1_0 = tmp$ret$1;
          throw IllegalArgumentException_init_$Create$(toString(message_1_1_0));
        }
      }
    }
    {
      var tmp2_require_0 = parts.get_fkrdnv_k$(1).length === 4;
      {
      }
      {
        {
        }
        if (!tmp2_require_0) {
          var tmp$ret$2;
          $l$block_1: {
            tmp$ret$2 = 'Failed requirement.';
            break $l$block_1;
          }
          var message_1_1_1 = tmp$ret$2;
          throw IllegalArgumentException_init_$Create$(toString(message_1_1_1));
        }
      }
    }
    {
      var tmp3_require_0 = parts.get_fkrdnv_k$(2).length === 4;
      {
      }
      {
        {
        }
        if (!tmp3_require_0) {
          var tmp$ret$3;
          $l$block_2: {
            tmp$ret$3 = 'Failed requirement.';
            break $l$block_2;
          }
          var message_1_1_2 = tmp$ret$3;
          throw IllegalArgumentException_init_$Create$(toString(message_1_1_2));
        }
      }
    }
    {
      var tmp4_require_0 = parts.get_fkrdnv_k$(3).length === 4;
      {
      }
      {
        {
        }
        if (!tmp4_require_0) {
          var tmp$ret$4;
          $l$block_3: {
            tmp$ret$4 = 'Failed requirement.';
            break $l$block_3;
          }
          var message_1_1_3 = tmp$ret$4;
          throw IllegalArgumentException_init_$Create$(toString(message_1_1_3));
        }
      }
    }
    {
      var tmp5_require_0 = parts.get_fkrdnv_k$(4).length === 12;
      {
      }
      {
        {
        }
        if (!tmp5_require_0) {
          var tmp$ret$5;
          $l$block_4: {
            tmp$ret$5 = 'Failed requirement.';
            break $l$block_4;
          }
          var message_1_1_4 = tmp$ret$5;
          throw IllegalArgumentException_init_$Create$(toString(message_1_1_4));
        }
      }
    }
    var time_hi_and_version = toLong_0(parts.get_fkrdnv_k$(2), 16);
    var clock_seq_hi_and_res = toLong_0(parts.get_fkrdnv_k$(3), 16);
    var topBit1st = clock_seq_hi_and_res.shr_wjue3g_k$(15);
    var topBit2nd = clock_seq_hi_and_res.shr_wjue3g_k$(14).and_jhajnj_k$(new Long(1, 0));
    var topBit3nd = clock_seq_hi_and_res.shr_wjue3g_k$(13).and_jhajnj_k$(new Long(1, 0));
    var tmp;
    if (topBit1st.equals(new Long(0, 0))) {
      throw UnsupportedOperationException_init_$Create$_0();
    } else if ((topBit1st.equals(new Long(1, 0)) ? topBit2nd.equals(new Long(1, 0)) : false) ? topBit3nd.equals(new Long(1, 0)) : false) {
      throw UnsupportedOperationException_init_$Create$_0();
    } else if (topBit1st.equals(new Long(1, 0)) ? topBit2nd.equals(new Long(0, 0)) : false) {
      tmp = Variant_VARIANT_1_getInstance();
    } else if ((topBit1st.equals(new Long(1, 0)) ? topBit2nd.equals(new Long(1, 0)) : false) ? topBit3nd.equals(new Long(0, 0)) : false) {
      tmp = Variant_VARIANT_2_getInstance();
    } else {
      throw UnsupportedOperationException_init_$Create$_0();
    }
    var variantEnum = tmp;
    var version = time_hi_and_version.shr_wjue3g_k$(12);
    var timeLow = toLong_0(parts.get_fkrdnv_k$(0), 16);
    var timeMid = toLong_0(parts.get_fkrdnv_k$(1), 16);
    var timeHi = time_hi_and_version.and_jhajnj_k$(new Long(4095, 0));
    var variant = new Long(2, 0);
    var tmp0_subject = variantEnum.bitsLength_1;
    var tmp_0;
    switch (tmp0_subject) {
      case 2:
        tmp_0 = clock_seq_hi_and_res.and_jhajnj_k$(new Long(16383, 0));
        break;
      case 3:
        tmp_0 = clock_seq_hi_and_res.and_jhajnj_k$(new Long(8191, 0));
        break;
      default:
        throw UnsupportedOperationException_init_$Create$_0();
    }
    var clockSeq = tmp_0;
    var node = toLong_0(parts.get_fkrdnv_k$(4), 16);
    return UUID_init_$Create$_0(version, timeLow, timeMid, timeHi, variant, clockSeq, node);
  };
  Companion_34.$metadata$ = {
    simpleName: 'Companion',
    kind: 'object',
    interfaces: []
  };
  var Companion_instance_34;
  function Companion_getInstance_35() {
    if (Companion_instance_34 == null)
      new Companion_34();
    return Companion_instance_34;
  }
  function UUID_init_$Init$(most, least, $this) {
    UUID.call($this);
    $this.timeLow_1 = most.shr_wjue3g_k$(32);
    $this.timeMid_1 = most.and_jhajnj_k$(new Long(-65536, 0)).shr_wjue3g_k$(16);
    $this.version_1 = most.and_jhajnj_k$(new Long(61440, 0)).shr_wjue3g_k$(12);
    $this.timeHi_1 = most.and_jhajnj_k$(new Long(4095, 0));
    var variantLayout = least.shr_wjue3g_k$(62);
    $this.variant_1 = new Long(2, 0);
    $this.clock_seq_1 = least.shr_wjue3g_k$(48).and_jhajnj_k$(new Long(16383, 0));
    $this.node_1 = least.and_jhajnj_k$(new Long(-1, 65535));
    return $this;
  }
  function UUID_init_$Create$(most, least) {
    return UUID_init_$Init$(most, least, Object.create(UUID.prototype));
  }
  function UUID_init_$Init$_0(version, timeLow, timeMid, timeHi, variant, clock_seq, node, $this) {
    UUID.call($this);
    $this.version_1 = version;
    $this.timeLow_1 = timeLow;
    $this.timeMid_1 = timeMid;
    $this.timeHi_1 = timeHi;
    $this.variant_1 = variant;
    $this.clock_seq_1 = clock_seq;
    $this.node_1 = node;
    return $this;
  }
  function UUID_init_$Create$_0(version, timeLow, timeMid, timeHi, variant, clock_seq, node) {
    return UUID_init_$Init$_0(version, timeLow, timeMid, timeHi, variant, clock_seq, node, Object.create(UUID.prototype));
  }
  function Variant_VARIANT_0_getInstance() {
    Variant_initEntries();
    return Variant_VARIANT_0_instance;
  }
  function Variant_VARIANT_1_getInstance() {
    Variant_initEntries();
    return Variant_VARIANT_1_instance;
  }
  function Variant_VARIANT_2_getInstance() {
    Variant_initEntries();
    return Variant_VARIANT_2_instance;
  }
  function Variant_VARIANT_FUTURE_getInstance() {
    Variant_initEntries();
    return Variant_VARIANT_FUTURE_instance;
  }
  UUID.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (other == null ? true : !equals(_get_js__1413122402(getKClassFromExpression(this)), _get_js__1413122402(getKClassFromExpression(other))))
      return false;
    if (other instanceof UUID)
      other;
    else
      THROW_CCE();
    Unit_getInstance();
    if (!this.timeLow_1.equals(other.timeLow_1))
      return false;
    if (!this.timeMid_1.equals(other.timeMid_1))
      return false;
    if (!this.version_1.equals(other.version_1))
      return false;
    if (!this.timeHi_1.equals(other.timeHi_1))
      return false;
    if (!this.variant_1.equals(other.variant_1))
      return false;
    if (!this.clock_seq_1.equals(other.clock_seq_1))
      return false;
    if (!this.node_1.equals(other.node_1))
      return false;
    return true;
  };
  UUID.prototype.hashCode = function () {
    var result = this.timeLow_1.hashCode();
    result = imul(31, result) + this.timeMid_1.hashCode() | 0;
    result = imul(31, result) + this.version_1.hashCode() | 0;
    result = imul(31, result) + this.timeHi_1.hashCode() | 0;
    result = imul(31, result) + this.variant_1.hashCode() | 0;
    result = imul(31, result) + this.clock_seq_1.hashCode() | 0;
    result = imul(31, result) + this.node_1.hashCode() | 0;
    return result;
  };
  UUID.prototype.toString = function () {
    return 'UUID(timeLow=' + toString(this.timeLow_1) + ', timeMid=' + toString(this.timeMid_1) + ', version=' + toString(this.version_1) + ', timeHi=' + toString(this.timeHi_1) + ', variant=' + toString(this.variant_1) + ', clock_seq=' + toString(this.clock_seq_1) + ', node=' + toString(this.node_1) + ')';
  };
  function UUID() {
    Companion_getInstance_35();
  }
  UUID.$metadata$ = {
    simpleName: 'UUID',
    kind: 'class',
    interfaces: []
  };
  function WeakHashMap_init_$Init$(_wrapped, $mask0, $marker, $this) {
    if (!(($mask0 & 1) === 0))
      _wrapped = LinkedHashMap_init_$Create$();
    WeakHashMap.call($this, _wrapped);
    return $this;
  }
  function WeakHashMap_init_$Create$(_wrapped, $mask0, $marker) {
    return WeakHashMap_init_$Init$(_wrapped, $mask0, $marker, Object.create(WeakHashMap.prototype));
  }
  function WeakHashMap_init_$Init$_0($this) {
    WeakHashMap.call($this, LinkedHashMap_init_$Create$());
    return $this;
  }
  function WeakHashMap_init_$Create$_0() {
    return WeakHashMap_init_$Init$_0(Object.create(WeakHashMap.prototype));
  }
  function WeakHashMap(_wrapped) {
    this._wrapped_1 = _wrapped;
  }
  WeakHashMap.prototype._get__wrapped__3788455237_8dkb7f_k$ = function () {
    return this._wrapped_1;
  };
  WeakHashMap.prototype._get_entries__31877249_iz8n5_k$ = function () {
    return this._wrapped_1._get_entries__31877249_iz8n5_k$();
  };
  WeakHashMap.prototype._get_keys__801529559_d97k5z_k$ = function () {
    return this._wrapped_1._get_keys__801529559_d97k5z_k$();
  };
  WeakHashMap.prototype._get_size__809037418_ddoh9m_k$ = function () {
    return this._wrapped_1._get_size__809037418_ddoh9m_k$();
  };
  WeakHashMap.prototype._get_values__2516944425_tel787_k$ = function () {
    return this._wrapped_1._get_values__2516944425_tel787_k$();
  };
  WeakHashMap.prototype.clear_j9y8zo_k$ = function () {
    this._wrapped_1.clear_j9y8zo_k$();
  };
  WeakHashMap.prototype.containsKey_wgk31w_k$ = function (key) {
    return this._wrapped_1.containsKey_wgk31w_k$(key);
  };
  WeakHashMap.prototype.containsValue_5viga1_k$ = function (value) {
    return this._wrapped_1.containsValue_5viga1_k$(value);
  };
  WeakHashMap.prototype.get_1mhr4y_k$ = function (key) {
    return this._wrapped_1.get_1mhr4y_k$(key);
  };
  WeakHashMap.prototype.isEmpty_y1axqb_k$ = function () {
    return this._wrapped_1.isEmpty_y1axqb_k$();
  };
  WeakHashMap.prototype.put_3mhbri_k$ = function (key, value) {
    return this._wrapped_1.put_3mhbri_k$(key, value);
  };
  WeakHashMap.prototype.putAll_mee1c3_k$ = function (from) {
    this._wrapped_1.putAll_mee1c3_k$(from);
  };
  WeakHashMap.prototype.remove_8hbkc0_k$ = function (key) {
    return this._wrapped_1.remove_8hbkc0_k$(key);
  };
  WeakHashMap.$metadata$ = {
    simpleName: 'WeakHashMap',
    kind: 'class',
    interfaces: [MutableMap]
  };
  function arraycopy(src, srcPos, dest, destPos, length) {
    {
      var tmp0_forEach_0 = until(0, length);
      var inductionVariable = tmp0_forEach_0._get_first__3232921377_hkbbvj_k$();
      var last = tmp0_forEach_0._get_last__802328181_d9oodx_k$();
      if (inductionVariable <= last)
        do {
          var element_2 = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          {
            dest[destPos + element_2 | 0] = src[srcPos + element_2 | 0];
          }
        }
         while (!(element_2 === last));
    }
  }
  function isCharUppercase(firstChar) {
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = uppercaseChar(firstChar);
      break $l$block;
    }
    var tmp = new Char(tmp$ret$0);
    var tmp$ret$5;
    $l$block_4: {
      var tmp$ret$4;
      $l$block_3: {
        var tmp$ret$3;
        $l$block_2: {
          var tmp$ret$2;
          $l$block_1: {
            var tmp$ret$1;
            $l$block_0: {
              var tmp0_asDynamic_0_2_2 = toString_0(firstChar);
              tmp$ret$1 = tmp0_asDynamic_0_2_2;
              break $l$block_0;
            }
            var tmp1_unsafeCast_0_1_1 = tmp$ret$1.toLowerCase();
            tmp$ret$2 = tmp1_unsafeCast_0_1_1;
            break $l$block_1;
          }
          tmp$ret$3 = tmp$ret$2;
          break $l$block_2;
        }
        tmp$ret$4 = charSequenceGet(tmp$ret$3, 0);
        break $l$block_3;
      }
      tmp$ret$5 = tmp$ret$4;
      break $l$block_4;
    }
    if (equals(tmp, new Char(tmp$ret$5))) {
      return false;
    } else {
    }
    var tmp_0 = new Char(firstChar);
    var tmp$ret$6;
    $l$block_5: {
      tmp$ret$6 = uppercaseChar(firstChar);
      break $l$block_5;
    }
    return equals(tmp_0, new Char(tmp$ret$6));
  }
  function isSupplementaryCodePoint(_this__1828080292, codePoint) {
    {
      throw new NotImplementedError('An operation is not implemented: Char.Companion.isSupplementaryCodePoint not implemented');
    }
  }
  function toChars(_this__1828080292, codePoint, resultArray, resultIdx) {
    {
      throw new NotImplementedError('An operation is not implemented: Char.Companion.toChars not implemented');
    }
  }
  function charCount(_this__1828080292, i) {
    {
      throw new NotImplementedError('An operation is not implemented: Char.Companion.charCount not implemented');
    }
  }
  function maxValue(_this__1828080292) {
    return _Char___init__impl__380027157(65535);
  }
  function errMessage(message) {
    console.error(message);
  }
  function synchronized(lock, block) {
    return block();
  }
  function Type(javaClass) {
    this.javaClass_1 = javaClass;
  }
  Type.prototype._get_javaClass__1809804443_txie1n_k$ = function () {
    return this.javaClass_1;
  };
  Type.$metadata$ = {
    simpleName: 'Type',
    kind: 'class',
    interfaces: []
  };
  function isInstance(_this__1828080292, any) {
    return _get_kotlin__1752270378(_this__1828080292.javaClass_1).isInstance_6tn68w_k$(any);
  }
  function getType(_this__1828080292, name) {
    var tmp$ret$2;
    $l$block_2: {
      var tmp0_find_0 = _this__1828080292._get_classesByName__1088074377_hzt7k9_k$();
      var tmp$ret$1;
      $l$block_1: {
        var tmp0_iterator_1_1 = tmp0_find_0.iterator_jk1svi_k$();
        while (tmp0_iterator_1_1.hasNext_bitz1p_k$()) {
          var element_2_2 = tmp0_iterator_1_1.next_20eer_k$();
          var tmp$ret$0;
          $l$block: {
            tmp$ret$0 = element_2_2._get_simpleName__973554894_g3mnri_k$() === name;
            break $l$block;
          }
          if (tmp$ret$0) {
            tmp$ret$1 = element_2_2;
            break $l$block_1;
          } else {
          }
        }
        tmp$ret$1 = null;
        break $l$block_1;
      }
      tmp$ret$2 = tmp$ret$1;
      break $l$block_2;
    }
    return new Type(_get_js__1413122402(ensureNotNull(tmp$ret$2)));
  }
  function CharStreams() {
    CharStreams_instance = this;
    AbstractCharStreams.call(this);
  }
  CharStreams.$metadata$ = {
    simpleName: 'CharStreams',
    kind: 'object',
    interfaces: []
  };
  var CharStreams_instance;
  function CharStreams_getInstance() {
    if (CharStreams_instance == null)
      new CharStreams();
    return CharStreams_instance;
  }
  function ThreadLocal() {
  }
  ThreadLocal.prototype.equals = function (other) {
    if (!(other instanceof ThreadLocal))
      return false;
    else {
    }
    var tmp0_other_with_cast = other instanceof ThreadLocal ? other : THROW_CCE();
    return true;
  };
  ThreadLocal.prototype.hashCode = function () {
    return 0;
  };
  ThreadLocal.prototype.toString = function () {
    return '@org.antlr.v4.kotlinruntime.ThreadLocal()';
  };
  ThreadLocal.$metadata$ = {
    simpleName: 'ThreadLocal',
    kind: 'class',
    interfaces: [Annotation]
  };
  function Platform() {
    Platform_instance = this;
  }
  Platform.prototype.readFile_ygqa8f_k$ = function (fileName, $cont) {
    {
      throw new NotImplementedError('An operation is not implemented: not implemented');
    }
  };
  Platform.$metadata$ = {
    simpleName: 'Platform',
    kind: 'object',
    interfaces: []
  };
  var Platform_instance;
  function Platform_getInstance() {
    if (Platform_instance == null)
      new Platform();
    return Platform_instance;
  }
  //region block: post-declaration
  CommonToken.prototype.startPoint_q8y2lu_k$ = startPoint;
  CommonToken.prototype.endPoint_sb0gad_k$ = endPoint;
  //endregion
  //region block: init
  DEFAULT_CHANNEL = 0;
  //endregion
  //region block: exports
  _.$crossModule$ = _.$crossModule$ || {};
  _.$crossModule$.TypeDeclarator = TypeDeclarator;
  _.$crossModule$.asCharArray = asCharArray;
  _.$crossModule$.getType = getType;
  _.$crossModule$.ATNDeserializer_init_$Create$ = ATNDeserializer_init_$Create$;
  _.$crossModule$.NoViableAltException_init_$Create$ = NoViableAltException_init_$Create$;
  _.$crossModule$.VocabularyImpl_init_$Create$ = VocabularyImpl_init_$Create$;
  _.$crossModule$.Lexer_init_$Init$ = Lexer_init_$Init$_0;
  _.$crossModule$.ParserRuleContext_init_$Init$ = ParserRuleContext_init_$Init$_0;
  _.$crossModule$.Companion_getInstance = Companion_getInstance_34;
  _.$crossModule$.CharStreams_getInstance = CharStreams_getInstance;
  _.$crossModule$.Companion_getInstance_1 = Companion_getInstance_5;
  _.$crossModule$.LexerATNSimulator = LexerATNSimulator;
  _.$crossModule$.ParserATNSimulator = ParserATNSimulator;
  _.$crossModule$.PredictionContextCache = PredictionContextCache;
  _.$crossModule$.DFA = DFA;
  _.$crossModule$.Interval = Interval;
  _.$crossModule$.ParseTreeListener = ParseTreeListener;
  _.$crossModule$.TerminalNode = TerminalNode;
  _.$crossModule$.ANTLRErrorListener = ANTLRErrorListener;
  _.$crossModule$.CommonTokenStream = CommonTokenStream;
  _.$crossModule$.CommonToken = CommonToken;
  _.$crossModule$.Lexer = Lexer;
  _.$crossModule$.ParserRuleContext = ParserRuleContext;
  _.$crossModule$.Parser = Parser;
  _.$crossModule$.RecognitionException = RecognitionException;
  _.$crossModule$.Token = Token;
  //endregion
  return _;
}));
