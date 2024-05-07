(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'antlr-kotlin-antlr-kotlin-runtime'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'antlr-kotlin-antlr-kotlin-runtime'.");
    }
    root['antlr-kotlin-antlr-kotlin-runtime'] = factory(typeof this['antlr-kotlin-antlr-kotlin-runtime'] === 'undefined' ? {} : this['antlr-kotlin-antlr-kotlin-runtime'], this['kotlin-kotlin-stdlib']);
  }
}(this, function (_, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var protoOf = kotlin_kotlin.$_$.kc;
  var objectMeta = kotlin_kotlin.$_$.jc;
  var setMetadataFor = kotlin_kotlin.$_$.lc;
  var println = kotlin_kotlin.$_$.ta;
  var toString = kotlin_kotlin.$_$.pc;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.r1;
  var charSequenceLength = kotlin_kotlin.$_$.bb;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.m;
  var charSequenceGet = kotlin_kotlin.$_$.ab;
  var Char = kotlin_kotlin.$_$.tf;
  var toCharArray = kotlin_kotlin.$_$.k9;
  var contentEquals = kotlin_kotlin.$_$.z5;
  var contentEquals_0 = kotlin_kotlin.$_$.a6;
  var interfaceMeta = kotlin_kotlin.$_$.nb;
  var VOID = kotlin_kotlin.$_$.h;
  var classMeta = kotlin_kotlin.$_$.db;
  var NullPointerException_init_$Create$ = kotlin_kotlin.$_$.c2;
  var ensureNotNull = kotlin_kotlin.$_$.ah;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.v1;
  var THROW_CCE = kotlin_kotlin.$_$.jg;
  var isInterface = kotlin_kotlin.$_$.wb;
  var IndexOutOfBoundsException_init_$Create$ = kotlin_kotlin.$_$.y1;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.n;
  var HashSet_init_$Create$ = kotlin_kotlin.$_$.s;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.g1;
  var Unit_getInstance = kotlin_kotlin.$_$.x4;
  var objectCreate = kotlin_kotlin.$_$.ic;
  var Pair = kotlin_kotlin.$_$.gg;
  var replace = kotlin_kotlin.$_$.je;
  var captureStack = kotlin_kotlin.$_$.xa;
  var NotImplementedError = kotlin_kotlin.$_$.fg;
  var RuntimeException_init_$Create$ = kotlin_kotlin.$_$.e2;
  var Char__toInt_impl_vasixd = kotlin_kotlin.$_$.p2;
  var numberToChar = kotlin_kotlin.$_$.fc;
  var toString_0 = kotlin_kotlin.$_$.q2;
  var emptyList = kotlin_kotlin.$_$.w6;
  var RuntimeException = kotlin_kotlin.$_$.ig;
  var RuntimeException_init_$Init$ = kotlin_kotlin.$_$.d2;
  var defineProp = kotlin_kotlin.$_$.fb;
  var HashMap_init_$Create$ = kotlin_kotlin.$_$.q;
  var toMap = kotlin_kotlin.$_$.p9;
  var UnsupportedOperationException_init_$Create$ = kotlin_kotlin.$_$.k2;
  var to = kotlin_kotlin.$_$.mh;
  var toMap_0 = kotlin_kotlin.$_$.q9;
  var List = kotlin_kotlin.$_$.h5;
  var listOf = kotlin_kotlin.$_$.f8;
  var isHighSurrogate = kotlin_kotlin.$_$.xd;
  var until = kotlin_kotlin.$_$.xc;
  var hasSurrogatePairAt = kotlin_kotlin.$_$.sd;
  var toIntArray = kotlin_kotlin.$_$.m9;
  var fillArrayVal = kotlin_kotlin.$_$.hb;
  var copyOf = kotlin_kotlin.$_$.n6;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.m2;
  var split = kotlin_kotlin.$_$.oe;
  var Regex_init_$Create$ = kotlin_kotlin.$_$.d1;
  var count = kotlin_kotlin.$_$.dd;
  var last = kotlin_kotlin.$_$.ed;
  var none = kotlin_kotlin.$_$.fd;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.w;
  var equals = kotlin_kotlin.$_$.gb;
  var hashCode = kotlin_kotlin.$_$.mb;
  var HashSet_init_$Create$_0 = kotlin_kotlin.$_$.t;
  var UnsupportedOperationException_init_$Create$_0 = kotlin_kotlin.$_$.j2;
  var Set = kotlin_kotlin.$_$.o5;
  var THROW_IAE = kotlin_kotlin.$_$.kg;
  var Enum = kotlin_kotlin.$_$.yf;
  var toLong = kotlin_kotlin.$_$.nc;
  var Long = kotlin_kotlin.$_$.dg;
  var copyOf_0 = kotlin_kotlin.$_$.f6;
  var Companion_getInstance = kotlin_kotlin.$_$.q4;
  var IllegalStateException_init_$Create$_0 = kotlin_kotlin.$_$.t1;
  var copyToArray = kotlin_kotlin.$_$.p6;
  var IntCompanionObject_getInstance = kotlin_kotlin.$_$.l4;
  var get_lastIndex = kotlin_kotlin.$_$.x7;
  var filterNotNull = kotlin_kotlin.$_$.z6;
  var joinToString = kotlin_kotlin.$_$.t7;
  var copyOf_1 = kotlin_kotlin.$_$.o6;
  var Comparable = kotlin_kotlin.$_$.uf;
  var toList = kotlin_kotlin.$_$.o9;
  var joinToString_0 = kotlin_kotlin.$_$.s7;
  var Comparator = kotlin_kotlin.$_$.vf;
  var compareValues = kotlin_kotlin.$_$.z9;
  var ArrayList_init_$Create$_1 = kotlin_kotlin.$_$.o;
  var sortWith = kotlin_kotlin.$_$.f9;
  var isArray = kotlin_kotlin.$_$.ob;
  var StringBuilder = kotlin_kotlin.$_$.id;
  var NoSuchElementException_init_$Create$ = kotlin_kotlin.$_$.z1;
  var MutableIterator = kotlin_kotlin.$_$.k5;
  var numberToInt = kotlin_kotlin.$_$.gc;
  var MutableSet = kotlin_kotlin.$_$.n5;
  var toString_1 = kotlin_kotlin.$_$.lh;
  var filterNotNull_0 = kotlin_kotlin.$_$.a7;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.u5;
  var addAll = kotlin_kotlin.$_$.q5;
  var toMutableSet = kotlin_kotlin.$_$.s9;
  var toMutableList = kotlin_kotlin.$_$.r9;
  var MutableMap = kotlin_kotlin.$_$.m5;
  var IllegalArgumentException_init_$Create$_0 = kotlin_kotlin.$_$.p1;
  var toTypedArray = kotlin_kotlin.$_$.v9;
  var checkIndexOverflow = kotlin_kotlin.$_$.t5;
  var IndexOutOfBoundsException_init_$Create$_0 = kotlin_kotlin.$_$.x1;
  var sort = kotlin_kotlin.$_$.i9;
  var joinToString_1 = kotlin_kotlin.$_$.r7;
  var indexOf = kotlin_kotlin.$_$.l7;
  var numberRangeToNumber = kotlin_kotlin.$_$.ec;
  var sliceArray = kotlin_kotlin.$_$.c9;
  var charArray = kotlin_kotlin.$_$.za;
  var toTypedArray_0 = kotlin_kotlin.$_$.w9;
  var RuntimeException_init_$Create$_0 = kotlin_kotlin.$_$.g2;
  var CoroutineImpl = kotlin_kotlin.$_$.pa;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.ba;
  var arrayIterator = kotlin_kotlin.$_$.va;
  var minOrNull = kotlin_kotlin.$_$.j8;
  var maxOrNull = kotlin_kotlin.$_$.i8;
  var toLong_0 = kotlin_kotlin.$_$.ef;
  var uppercaseChar = kotlin_kotlin.$_$.qf;
  var get_kotlin = kotlin_kotlin.$_$.cc;
  var get_js = kotlin_kotlin.$_$.bc;
  var Annotation = kotlin_kotlin.$_$.sf;
  //endregion
  //region block: pre-declaration
  setMetadataFor(Math_0, 'Math', objectMeta);
  setMetadataFor(Arrays, 'Arrays', objectMeta);
  setMetadataFor(TypeDeclarator, 'TypeDeclarator', interfaceMeta);
  setMetadataFor(ANTLRErrorListener, 'ANTLRErrorListener', interfaceMeta);
  setMetadataFor(ANTLRErrorStrategy, 'ANTLRErrorStrategy', interfaceMeta);
  setMetadataFor(AbstractCharStreams, 'AbstractCharStreams', classMeta);
  setMetadataFor(IntStream, 'IntStream', interfaceMeta);
  setMetadataFor(TokenStream, 'TokenStream', interfaceMeta, VOID, [IntStream]);
  setMetadataFor(BufferedTokenStream, 'BufferedTokenStream', classMeta, VOID, [TokenStream]);
  setMetadataFor(Companion, 'Companion', objectMeta);
  setMetadataFor(CharStream, 'CharStream', interfaceMeta, VOID, [IntStream]);
  setMetadataFor(Companion_0, 'Companion', objectMeta);
  function startPoint() {
    return new Point(this.get_line_wopum5_k$(), this.get_charPositionInLine_2wqse7_k$());
  }
  function endPoint() {
    return this.get_text_wouvsm_k$() == null ? null : (new Point(this.get_line_wopum5_k$(), this.get_charPositionInLine_2wqse7_k$())).advance_zbimd4_k$(ensureNotNull(this.get_text_wouvsm_k$()));
  }
  setMetadataFor(Token, 'Token', interfaceMeta);
  setMetadataFor(WritableToken, 'WritableToken', interfaceMeta, VOID, [Token]);
  setMetadataFor(CommonToken, 'CommonToken', classMeta, VOID, [WritableToken]);
  setMetadataFor(Companion_1, 'Companion', objectMeta);
  setMetadataFor(TokenFactory, 'TokenFactory', interfaceMeta);
  setMetadataFor(CommonTokenFactory, 'CommonTokenFactory', classMeta, VOID, [TokenFactory], CommonTokenFactory);
  setMetadataFor(CommonTokenStream, 'CommonTokenStream', classMeta, BufferedTokenStream);
  setMetadataFor(DefaultErrorStrategy, 'DefaultErrorStrategy', classMeta, VOID, [ANTLRErrorStrategy], DefaultErrorStrategy);
  setMetadataFor(RecognitionException, 'RecognitionException', classMeta, RuntimeException);
  setMetadataFor(FailedPredicateException, 'FailedPredicateException', classMeta, RecognitionException);
  setMetadataFor(InputMismatchException, 'InputMismatchException', classMeta, RecognitionException);
  setMetadataFor(Companion_2, 'Companion', objectMeta);
  setMetadataFor(Companion_3, 'Companion', objectMeta);
  setMetadataFor(Recognizer, 'Recognizer', classMeta);
  setMetadataFor(TokenSource, 'TokenSource', interfaceMeta);
  setMetadataFor(Lexer, 'Lexer', classMeta, Recognizer, [Recognizer, TokenSource]);
  setMetadataFor(LexerNoViableAltException, 'LexerNoViableAltException', classMeta, RecognitionException);
  setMetadataFor(NoViableAltException, 'NoViableAltException', classMeta, RecognitionException);
  setMetadataFor(Parser, 'Parser', classMeta, Recognizer);
  setMetadataFor(Tree, 'Tree', interfaceMeta);
  setMetadataFor(SyntaxTree, 'SyntaxTree', interfaceMeta, VOID, [Tree]);
  setMetadataFor(ParseTree, 'ParseTree', interfaceMeta, VOID, [SyntaxTree]);
  setMetadataFor(RuleNode, 'RuleNode', interfaceMeta, VOID, [ParseTree]);
  setMetadataFor(RuleContext, 'RuleContext', classMeta, VOID, [RuleNode], RuleContext_init_$Create$);
  setMetadataFor(ParserRuleContext, 'ParserRuleContext', classMeta, RuleContext, VOID, ParserRuleContext_init_$Create$);
  setMetadataFor(ProxyErrorListener, 'ProxyErrorListener', classMeta, VOID, [ANTLRErrorListener]);
  setMetadataFor(Companion_4, 'Companion', objectMeta);
  setMetadataFor(StringCharStream, 'StringCharStream', classMeta, VOID, [CharStream]);
  setMetadataFor(Companion_5, 'Companion', objectMeta);
  setMetadataFor(Vocabulary, 'Vocabulary', interfaceMeta);
  setMetadataFor(Companion_6, 'Companion', objectMeta);
  setMetadataFor(VocabularyImpl, 'VocabularyImpl', classMeta, VOID, [Vocabulary]);
  setMetadataFor(Point, 'Point', classMeta);
  setMetadataFor(Position, 'Position', classMeta);
  setMetadataFor(Companion_7, 'Companion', objectMeta);
  setMetadataFor(ATN, 'ATN', classMeta);
  setMetadataFor(Companion_8, 'Companion', objectMeta);
  setMetadataFor(ATNConfig, 'ATNConfig', classMeta);
  setMetadataFor(Companion_9, 'Companion', objectMeta);
  setMetadataFor(Array2DHashSet, 'Array2DHashSet', classMeta, VOID, [MutableSet], Array2DHashSet);
  setMetadataFor(AbstractConfigHashSet, 'AbstractConfigHashSet', classMeta, Array2DHashSet);
  setMetadataFor(ConfigHashSet, 'ConfigHashSet', classMeta, AbstractConfigHashSet, VOID, ConfigHashSet);
  setMetadataFor(EqualityComparator, 'EqualityComparator', interfaceMeta);
  setMetadataFor(AbstractEqualityComparator, 'AbstractEqualityComparator', classMeta, VOID, [EqualityComparator]);
  setMetadataFor(ConfigEqualityComparator, 'ConfigEqualityComparator', classMeta, AbstractEqualityComparator);
  setMetadataFor(ATNConfigSet, 'ATNConfigSet', classMeta, VOID, [Set], ATNConfigSet);
  setMetadataFor(Companion_10, 'Companion', objectMeta);
  setMetadataFor(ATNDeserializationOptions, 'ATNDeserializationOptions', classMeta, VOID, VOID, ATNDeserializationOptions_init_$Create$);
  setMetadataFor(UnicodeDeserializer, 'UnicodeDeserializer', interfaceMeta);
  setMetadataFor(ATNDeserializer$Companion$getUnicodeDeserializer$1, VOID, classMeta, VOID, [UnicodeDeserializer]);
  setMetadataFor(ATNDeserializer$Companion$getUnicodeDeserializer$2, VOID, classMeta, VOID, [UnicodeDeserializer]);
  setMetadataFor(UnicodeDeserializingMode, 'UnicodeDeserializingMode', classMeta, Enum);
  setMetadataFor(Companion_11, 'Companion', objectMeta);
  setMetadataFor(ATNDeserializer, 'ATNDeserializer', classMeta, VOID, VOID, ATNDeserializer);
  setMetadataFor(Companion_12, 'Companion', objectMeta);
  setMetadataFor(ATNSimulator, 'ATNSimulator', classMeta);
  setMetadataFor(Companion_13, 'Companion', objectMeta);
  setMetadataFor(ATNState, 'ATNState', classMeta);
  setMetadataFor(ATNType, 'ATNType', classMeta, Enum);
  setMetadataFor(Transition, 'Transition', classMeta);
  setMetadataFor(AbstractPredicateTransition, 'AbstractPredicateTransition', classMeta, Transition);
  setMetadataFor(ActionTransition, 'ActionTransition', classMeta, Transition);
  setMetadataFor(DecisionEventInfo, 'DecisionEventInfo', classMeta);
  setMetadataFor(AmbiguityInfo, 'AmbiguityInfo', classMeta, DecisionEventInfo);
  setMetadataFor(PredictionContext, 'PredictionContext', classMeta);
  setMetadataFor(ArrayPredictionContext, 'ArrayPredictionContext', classMeta, PredictionContext);
  setMetadataFor(AtomTransition, 'AtomTransition', classMeta, Transition);
  setMetadataFor(DecisionState, 'DecisionState', classMeta, ATNState);
  setMetadataFor(BlockStartState, 'BlockStartState', classMeta, DecisionState);
  setMetadataFor(BasicBlockStartState, 'BasicBlockStartState', classMeta, BlockStartState, VOID, BasicBlockStartState);
  setMetadataFor(BasicState, 'BasicState', classMeta, ATNState, VOID, BasicState);
  setMetadataFor(BlockEndState, 'BlockEndState', classMeta, ATNState, VOID, BlockEndState);
  setMetadataFor(ContextSensitivityInfo, 'ContextSensitivityInfo', classMeta, DecisionEventInfo);
  setMetadataFor(DecisionInfo, 'DecisionInfo', classMeta);
  setMetadataFor(SingletonPredictionContext, 'SingletonPredictionContext', classMeta, PredictionContext);
  setMetadataFor(EmptyPredictionContext, 'EmptyPredictionContext', classMeta, SingletonPredictionContext, VOID, EmptyPredictionContext);
  setMetadataFor(EpsilonTransition, 'EpsilonTransition', classMeta, Transition);
  setMetadataFor(ErrorInfo, 'ErrorInfo', classMeta, DecisionEventInfo);
  setMetadataFor(Companion_14, 'Companion', objectMeta);
  setMetadataFor(LL1Analyzer, 'LL1Analyzer', classMeta);
  setMetadataFor(LexerATNConfig, 'LexerATNConfig', classMeta, ATNConfig);
  setMetadataFor(SimState, 'SimState', classMeta, VOID, VOID, SimState);
  setMetadataFor(Companion_15, 'Companion', objectMeta);
  setMetadataFor(LexerATNSimulator, 'LexerATNSimulator', classMeta, ATNSimulator);
  setMetadataFor(LexerAction, 'LexerAction', interfaceMeta);
  setMetadataFor(Companion_16, 'Companion', objectMeta);
  setMetadataFor(LexerActionExecutor, 'LexerActionExecutor', classMeta);
  setMetadataFor(LexerActionType, 'LexerActionType', classMeta, Enum);
  setMetadataFor(LexerChannelAction, 'LexerChannelAction', classMeta, VOID, [LexerAction]);
  setMetadataFor(LexerCustomAction, 'LexerCustomAction', classMeta, VOID, [LexerAction]);
  setMetadataFor(LexerIndexedCustomAction, 'LexerIndexedCustomAction', classMeta, VOID, [LexerAction]);
  setMetadataFor(LexerModeAction, 'LexerModeAction', classMeta, VOID, [LexerAction]);
  setMetadataFor(Companion_17, 'Companion', objectMeta);
  setMetadataFor(LexerMoreAction, 'LexerMoreAction', classMeta, VOID, [LexerAction]);
  setMetadataFor(Companion_18, 'Companion', objectMeta);
  setMetadataFor(LexerPopModeAction, 'LexerPopModeAction', classMeta, VOID, [LexerAction]);
  setMetadataFor(LexerPushModeAction, 'LexerPushModeAction', classMeta, VOID, [LexerAction]);
  setMetadataFor(Companion_19, 'Companion', objectMeta);
  setMetadataFor(LexerSkipAction, 'LexerSkipAction', classMeta, VOID, [LexerAction]);
  setMetadataFor(LexerTypeAction, 'LexerTypeAction', classMeta, VOID, [LexerAction]);
  setMetadataFor(LookaheadEventInfo, 'LookaheadEventInfo', classMeta, DecisionEventInfo);
  setMetadataFor(LoopEndState, 'LoopEndState', classMeta, ATNState, VOID, LoopEndState);
  setMetadataFor(SetTransition, 'SetTransition', classMeta, Transition);
  setMetadataFor(NotSetTransition, 'NotSetTransition', classMeta, SetTransition);
  setMetadataFor(LexerConfigHashSet, 'LexerConfigHashSet', classMeta, AbstractConfigHashSet, VOID, LexerConfigHashSet);
  setMetadataFor(OrderedATNConfigSet, 'OrderedATNConfigSet', classMeta, ATNConfigSet, VOID, OrderedATNConfigSet);
  setMetadataFor(ParseInfo, 'ParseInfo', classMeta);
  setMetadataFor(Companion_20, 'Companion', objectMeta);
  setMetadataFor(ParserATNSimulator, 'ParserATNSimulator', classMeta, ATNSimulator);
  setMetadataFor(PlusBlockStartState, 'PlusBlockStartState', classMeta, BlockStartState, VOID, PlusBlockStartState);
  setMetadataFor(PlusLoopbackState, 'PlusLoopbackState', classMeta, DecisionState, VOID, PlusLoopbackState);
  setMetadataFor(PrecedencePredicateTransition, 'PrecedencePredicateTransition', classMeta, AbstractPredicateTransition);
  setMetadataFor(PredicateEvalInfo, 'PredicateEvalInfo', classMeta, DecisionEventInfo);
  setMetadataFor(PredicateTransition, 'PredicateTransition', classMeta, AbstractPredicateTransition);
  setMetadataFor(Companion_21, 'Companion', objectMeta);
  setMetadataFor(PredictionContextCache, 'PredictionContextCache', classMeta, VOID, VOID, PredictionContextCache);
  setMetadataFor(Companion_22, 'Companion', objectMeta);
  setMetadataFor(FlexibleHashMap, 'FlexibleHashMap', classMeta, VOID, [MutableMap], FlexibleHashMap);
  setMetadataFor(AltAndContextMap, 'AltAndContextMap', classMeta, FlexibleHashMap, VOID, AltAndContextMap);
  setMetadataFor(AltAndContextConfigEqualityComparator, 'AltAndContextConfigEqualityComparator', classMeta, AbstractEqualityComparator);
  setMetadataFor(Companion_23, 'Companion', objectMeta);
  setMetadataFor(PredictionMode, 'PredictionMode', classMeta, Enum);
  setMetadataFor(ProfilingATNSimulator, 'ProfilingATNSimulator', classMeta, ParserATNSimulator);
  setMetadataFor(RangeTransition, 'RangeTransition', classMeta, Transition);
  setMetadataFor(RuleStartState, 'RuleStartState', classMeta, ATNState, VOID, RuleStartState);
  setMetadataFor(RuleStopState, 'RuleStopState', classMeta, ATNState, VOID, RuleStopState);
  setMetadataFor(RuleTransition, 'RuleTransition', classMeta, Transition);
  setMetadataFor(SemanticContext, 'SemanticContext', classMeta);
  setMetadataFor(Predicate, 'Predicate', classMeta, SemanticContext, VOID, Predicate_init_$Create$);
  setMetadataFor(PrecedencePredicate, 'PrecedencePredicate', classMeta, SemanticContext, [SemanticContext, Comparable], PrecedencePredicate);
  setMetadataFor(Operator, 'Operator', classMeta, SemanticContext);
  setMetadataFor(AND, 'AND', classMeta, Operator);
  setMetadataFor(OR, 'OR', classMeta, Operator);
  setMetadataFor(Companion_24, 'Companion', objectMeta);
  setMetadataFor(Companion_25, 'Companion', objectMeta);
  setMetadataFor(StarBlockStartState, 'StarBlockStartState', classMeta, BlockStartState, VOID, StarBlockStartState);
  setMetadataFor(StarLoopEntryState, 'StarLoopEntryState', classMeta, DecisionState, VOID, StarLoopEntryState);
  setMetadataFor(StarLoopbackState, 'StarLoopbackState', classMeta, ATNState, VOID, StarLoopbackState);
  setMetadataFor(TokensStartState, 'TokensStartState', classMeta, DecisionState, VOID, TokensStartState);
  setMetadataFor(Companion_26, 'Companion', objectMeta);
  setMetadataFor(WildcardTransition, 'WildcardTransition', classMeta, Transition);
  setMetadataFor(sam$kotlin_Comparator$0, 'sam$kotlin_Comparator$0', classMeta, VOID, [Comparator]);
  setMetadataFor(DFA, 'DFA', classMeta);
  setMetadataFor(DFASerializer, 'DFASerializer', classMeta);
  setMetadataFor(PredPrediction, 'PredPrediction', classMeta);
  setMetadataFor(DFAState, 'DFAState', classMeta, VOID, VOID, DFAState_init_$Create$);
  setMetadataFor(LexerDFASerializer, 'LexerDFASerializer', classMeta, DFASerializer);
  setMetadataFor(SetIterator, 'SetIterator', classMeta, VOID, [MutableIterator]);
  setMetadataFor(Companion_27, 'Companion', objectMeta);
  setMetadataFor(DoubleKeyMap, 'DoubleKeyMap', classMeta, VOID, VOID, DoubleKeyMap);
  setMetadataFor(Entry, 'Entry', classMeta);
  setMetadataFor(Companion_28, 'Companion', objectMeta);
  setMetadataFor(IntSet, 'IntSet', interfaceMeta);
  setMetadataFor(Companion_29, 'Companion', objectMeta);
  setMetadataFor(IntegerList, 'IntegerList', classMeta, VOID, VOID, IntegerList_init_$Create$);
  setMetadataFor(IntegerStack, 'IntegerStack', classMeta, IntegerList, VOID, IntegerStack_init_$Create$);
  setMetadataFor(Companion_30, 'Companion', objectMeta);
  setMetadataFor(Interval, 'Interval', classMeta);
  setMetadataFor(Companion_31, 'Companion', objectMeta);
  setMetadataFor(IntervalSet, 'IntervalSet', classMeta, VOID, [IntSet]);
  setMetadataFor(MurmurHash, 'MurmurHash', objectMeta);
  setMetadataFor(Companion_32, 'Companion', objectMeta);
  setMetadataFor(ObjectEqualityComparator, 'ObjectEqualityComparator', classMeta, AbstractEqualityComparator, VOID, ObjectEqualityComparator);
  setMetadataFor(Predicate_0, 'Predicate', interfaceMeta);
  setMetadataFor($readFileCOROUTINE$0, '$readFileCOROUTINE$0', classMeta, CoroutineImpl);
  setMetadataFor(Utils, 'Utils', objectMeta, VOID, VOID, VOID, VOID, VOID, [1]);
  setMetadataFor(TerminalNode, 'TerminalNode', interfaceMeta, VOID, [ParseTree]);
  setMetadataFor(ErrorNode, 'ErrorNode', interfaceMeta, VOID, [TerminalNode]);
  setMetadataFor(TerminalNodeImpl, 'TerminalNodeImpl', classMeta, VOID, [TerminalNode]);
  setMetadataFor(ErrorNodeImpl, 'ErrorNodeImpl', classMeta, TerminalNodeImpl, [TerminalNodeImpl, ErrorNode]);
  setMetadataFor(ParseTreeListener, 'ParseTreeListener', interfaceMeta);
  setMetadataFor(ParseTreeVisitor, 'ParseTreeVisitor', interfaceMeta);
  setMetadataFor(Companion_33, 'Companion', objectMeta);
  setMetadataFor(ParseTreeWalker, 'ParseTreeWalker', classMeta, VOID, VOID, ParseTreeWalker);
  setMetadataFor(Trees, 'Trees', objectMeta);
  setMetadataFor(BitSet, 'BitSet', classMeta, VOID, VOID, BitSet_init_$Create$);
  setMetadataFor(Collections, 'Collections', objectMeta);
  setMetadataFor(IdentityHashMap, 'IdentityHashMap', classMeta, VOID, [MutableMap], IdentityHashMap);
  setMetadataFor(Variant, 'Variant', classMeta, Enum);
  setMetadataFor(Companion_34, 'Companion', objectMeta);
  setMetadataFor(UUID, 'UUID', classMeta);
  setMetadataFor(WeakHashMap, 'WeakHashMap', classMeta, VOID, [MutableMap]);
  setMetadataFor(Type, 'Type', classMeta);
  setMetadataFor(CharStreams, 'CharStreams', objectMeta, AbstractCharStreams);
  setMetadataFor(ThreadLocal, 'ThreadLocal', classMeta, VOID, [Annotation]);
  setMetadataFor(Platform, 'Platform', objectMeta, VOID, VOID, VOID, VOID, VOID, [1]);
  //endregion
  function Math_0() {
    Math_instance = this;
  }
  protoOf(Math_0).min_i3c4dq_k$ = function (a, b) {
    // Inline function 'kotlin.math.min' call
    return Math.min(a, b);
  };
  protoOf(Math_0).max_rlhb38_k$ = function (a, b) {
    // Inline function 'kotlin.math.max' call
    return Math.max(a, b);
  };
  protoOf(Math_0).floor_p3gvt2_k$ = function (d) {
    // Inline function 'kotlin.math.floor' call
    return Math.floor(d);
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
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.contracts.contract' call
    var tmp;
    if (!condition) {
      // Inline function 'kotlin.require.<anonymous>' call
      var message = 'Failed requirement.';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return tmp;
  }
  function asCharArray(_this__u8e3s4) {
    // Inline function 'kotlin.text.map' call
    // Inline function 'kotlin.text.mapTo' call
    var destination = ArrayList_init_$Create$(charSequenceLength(_this__u8e3s4));
    var inductionVariable = 0;
    while (inductionVariable < charSequenceLength(_this__u8e3s4)) {
      var item = charSequenceGet(_this__u8e3s4, inductionVariable);
      inductionVariable = inductionVariable + 1 | 0;
      // Inline function 'com.strumenta.kotlinmultiplatform.asCharArray.<anonymous>' call
      destination.add_utx5q5_k$(new Char(item));
    }
    return toCharArray(destination);
  }
  function Arrays() {
    Arrays_instance = this;
  }
  protoOf(Arrays).equals_qczyj1_k$ = function (a, b) {
    return (a == null ? b == null : false) ? true : (!(a == null) ? !(b == null) : false) ? contentEquals(a, b) : false;
  };
  protoOf(Arrays).equals_6zwt2v_k$ = function (a, b) {
    return (a == null ? b == null : false) ? true : (!(a == null) ? !(b == null) : false) ? contentEquals_0(a, b) : false;
  };
  var Arrays_instance;
  function Arrays_getInstance() {
    if (Arrays_instance == null)
      new Arrays();
    return Arrays_instance;
  }
  function TypeDeclarator() {
  }
  function ANTLRErrorListener() {
  }
  function ANTLRErrorStrategy() {
  }
  function AbstractCharStreams() {
  }
  protoOf(AbstractCharStreams).fromString_syj12d_k$ = function (s, sourceName) {
    return new StringCharStream(s, sourceName);
  };
  protoOf(AbstractCharStreams).fromString$default_oo6j45_k$ = function (s, sourceName, $super) {
    sourceName = sourceName === VOID ? Companion_getInstance_3().get_UNKNOWN_SOURCE_NAME_q07nin_k$() : sourceName;
    return $super === VOID ? this.fromString_syj12d_k$(s, sourceName) : $super.fromString_syj12d_k$.call(this, s, sourceName);
  };
  function BufferedTokenStream(tokenSource) {
    this.tokenSource_1 = tokenSource;
    this.tokens_1 = ArrayList_init_$Create$(100);
    this.p_1 = -1;
    this.fetchedEOF_1 = false;
    if (this.get_tokenSource_auscfp_k$() == null) {
      throw NullPointerException_init_$Create$('tokenSource cannot be null');
    }
  }
  protoOf(BufferedTokenStream).set_tokenSource_9z4fgt_k$ = function (_set____db54di) {
    this.tokenSource_1 = _set____db54di;
  };
  protoOf(BufferedTokenStream).get_tokenSource_auscfp_k$ = function () {
    return this.tokenSource_1;
  };
  protoOf(BufferedTokenStream).set_tokens_sid2gh_k$ = function (_set____db54di) {
    this.tokens_1 = _set____db54di;
  };
  protoOf(BufferedTokenStream).get_tokens_k1vwdf_k$ = function () {
    return this.tokens_1;
  };
  protoOf(BufferedTokenStream).set_p_usf0id_k$ = function (_set____db54di) {
    this.p_1 = _set____db54di;
  };
  protoOf(BufferedTokenStream).get_p_1mhr5z_k$ = function () {
    return this.p_1;
  };
  protoOf(BufferedTokenStream).set_fetchedEOF_354z9n_k$ = function (_set____db54di) {
    this.fetchedEOF_1 = _set____db54di;
  };
  protoOf(BufferedTokenStream).get_fetchedEOF_f12olw_k$ = function () {
    return this.fetchedEOF_1;
  };
  protoOf(BufferedTokenStream).get_sourceName_wh0te7_k$ = function () {
    return ensureNotNull(this.get_tokenSource_auscfp_k$().get_sourceName_wh0te7_k$());
  };
  protoOf(BufferedTokenStream).get_text_wouvsm_k$ = function () {
    return this.getText_dijk8r_k$(Companion_getInstance_31().of_doci3b_k$(0, this.size_23och_k$() - 1 | 0));
  };
  protoOf(BufferedTokenStream).index_1nqriq_k$ = function () {
    return this.p_1;
  };
  protoOf(BufferedTokenStream).mark_1zob1_k$ = function () {
    return 0;
  };
  protoOf(BufferedTokenStream).release_4x1eox_k$ = function (marker) {
  };
  protoOf(BufferedTokenStream).reset_5u6xz3_k$ = function () {
    this.seek_a2e6fk_k$(0);
  };
  protoOf(BufferedTokenStream).seek_a2e6fk_k$ = function (index) {
    this.lazyInit_mkigq4_k$();
    this.p_1 = this.adjustSeekIndex_x3utf7_k$(index);
  };
  protoOf(BufferedTokenStream).size_23och_k$ = function () {
    return this.tokens_1.get_size_woubt6_k$();
  };
  protoOf(BufferedTokenStream).consume_sos6hg_k$ = function () {
    var skipEofCheck;
    if (this.p_1 >= 0) {
      if (this.fetchedEOF_1) {
        skipEofCheck = this.p_1 < (this.tokens_1.get_size_woubt6_k$() - 1 | 0);
      } else {
        skipEofCheck = this.p_1 < this.tokens_1.get_size_woubt6_k$();
      }
    } else {
      skipEofCheck = false;
    }
    if (!skipEofCheck ? this.LA_figb43_k$(1) === Companion_getInstance_3().get_EOF_18juz1_k$() : false) {
      throw IllegalStateException_init_$Create$('cannot consume EOF');
    }
    if (this.sync_yjqkpp_k$(this.p_1 + 1 | 0)) {
      this.p_1 = this.adjustSeekIndex_x3utf7_k$(this.p_1 + 1 | 0);
    }
  };
  protoOf(BufferedTokenStream).sync_yjqkpp_k$ = function (i) {
    assert(i >= 0);
    var n = (i - this.tokens_1.get_size_woubt6_k$() | 0) + 1 | 0;
    if (n > 0) {
      var fetched = this.fetch_qldvaa_k$(n);
      return fetched >= n;
    }
    return true;
  };
  protoOf(BufferedTokenStream).fetch_qldvaa_k$ = function (n) {
    if (this.fetchedEOF_1) {
      return 0;
    }
    var inductionVariable = 0;
    if (inductionVariable < n)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var t = this.get_tokenSource_auscfp_k$().nextToken_jykgjq_k$();
        if (isInterface(t, WritableToken)) {
          (isInterface(t, WritableToken) ? t : THROW_CCE()).set_tokenIndex_7llrim_k$(this.tokens_1.get_size_woubt6_k$());
        }
        this.tokens_1.add_utx5q5_k$(t);
        if (t.get_type_wovaf7_k$() === Companion_getInstance_6().get_EOF_18juz1_k$()) {
          this.fetchedEOF_1 = true;
          return i + 1 | 0;
        }
      }
       while (inductionVariable < n);
    return n;
  };
  protoOf(BufferedTokenStream).get_c1px32_k$ = function (i) {
    if (i < 0 ? true : i >= this.tokens_1.get_size_woubt6_k$()) {
      throw IndexOutOfBoundsException_init_$Create$('token index ' + i + ' out of range 0..' + (this.tokens_1.get_size_woubt6_k$() - 1 | 0));
    }
    return this.tokens_1.get_c1px32_k$(i);
  };
  protoOf(BufferedTokenStream).get_bzg6vq_k$ = function (start, stop) {
    var stop_0 = stop;
    if (start < 0 ? true : stop_0 < 0)
      return null;
    this.lazyInit_mkigq4_k$();
    var subset = ArrayList_init_$Create$_0();
    if (stop_0 >= this.tokens_1.get_size_woubt6_k$())
      stop_0 = this.tokens_1.get_size_woubt6_k$() - 1 | 0;
    var inductionVariable = start;
    var last = stop_0;
    if (inductionVariable <= last)
      $l$loop: do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var t = this.tokens_1.get_c1px32_k$(i);
        if (t.get_type_wovaf7_k$() === Companion_getInstance_6().get_EOF_18juz1_k$())
          break $l$loop;
        subset.add_utx5q5_k$(t);
      }
       while (!(i === last));
    return subset;
  };
  protoOf(BufferedTokenStream).LA_figb43_k$ = function (i) {
    return ensureNotNull(this.LT_lwif2o_k$(i)).get_type_wovaf7_k$();
  };
  protoOf(BufferedTokenStream).LB_fuk7j6_k$ = function (k) {
    return (this.p_1 - k | 0) < 0 ? null : this.tokens_1.get_c1px32_k$(this.p_1 - k | 0);
  };
  protoOf(BufferedTokenStream).LT_lwif2o_k$ = function (k) {
    this.lazyInit_mkigq4_k$();
    if (k === 0)
      return null;
    if (k < 0)
      return this.LB_fuk7j6_k$(-k | 0);
    var i = (this.p_1 + k | 0) - 1 | 0;
    this.sync_yjqkpp_k$(i);
    var tmp;
    if (i >= this.tokens_1.get_size_woubt6_k$()) {
      tmp = this.tokens_1.get_c1px32_k$(this.tokens_1.get_size_woubt6_k$() - 1 | 0);
    } else {
      tmp = this.tokens_1.get_c1px32_k$(i);
    }
    return tmp;
  };
  protoOf(BufferedTokenStream).adjustSeekIndex_x3utf7_k$ = function (i) {
    return i;
  };
  protoOf(BufferedTokenStream).lazyInit_mkigq4_k$ = function () {
    if (this.p_1 === -1) {
      this.setup_2u6ser_k$();
    }
  };
  protoOf(BufferedTokenStream).setup_2u6ser_k$ = function () {
    this.sync_yjqkpp_k$(0);
    this.p_1 = this.adjustSeekIndex_x3utf7_k$(0);
  };
  protoOf(BufferedTokenStream).getTokens_9vfcg3_k$ = function (start, stop, types) {
    this.lazyInit_mkigq4_k$();
    if (((start < 0 ? true : stop >= this.tokens_1.get_size_woubt6_k$()) ? true : stop < 0) ? true : start >= this.tokens_1.get_size_woubt6_k$()) {
      throw IndexOutOfBoundsException_init_$Create$('start ' + start + ' or stop ' + stop + ' not in 0..' + (this.tokens_1.get_size_woubt6_k$() - 1 | 0));
    }
    if (start > stop)
      return null;
    var filteredTokens = ArrayList_init_$Create$_0();
    var inductionVariable = start;
    if (inductionVariable <= stop)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var t = this.tokens_1.get_c1px32_k$(i);
        if (types == null ? true : types.contains_aljjnj_k$(t.get_type_wovaf7_k$())) {
          ensureNotNull(filteredTokens).add_utx5q5_k$(t);
        }
      }
       while (!(i === stop));
    if (ensureNotNull(filteredTokens).isEmpty_y1axqb_k$()) {
      filteredTokens = null;
    }
    return filteredTokens;
  };
  protoOf(BufferedTokenStream).getTokens$default_rbaesg_k$ = function (start, stop, types, $super) {
    types = types === VOID ? null : types;
    return $super === VOID ? this.getTokens_9vfcg3_k$(start, stop, types) : $super.getTokens_9vfcg3_k$.call(this, start, stop, types);
  };
  protoOf(BufferedTokenStream).getTokens_q0un20_k$ = function (start, stop, ttype) {
    var s = HashSet_init_$Create$(ttype);
    s.add_utx5q5_k$(ttype);
    return this.getTokens_9vfcg3_k$(start, stop, s);
  };
  protoOf(BufferedTokenStream).nextTokenOnChannel_aawwhq_k$ = function (i, channel) {
    var i_0 = i;
    this.sync_yjqkpp_k$(i_0);
    if (i_0 >= this.size_23och_k$()) {
      return this.size_23och_k$() - 1 | 0;
    }
    var token = this.tokens_1.get_c1px32_k$(i_0);
    while (!(token.get_channel_dhi7tm_k$() === channel)) {
      if (token.get_type_wovaf7_k$() === Companion_getInstance_6().get_EOF_18juz1_k$()) {
        return i_0;
      }
      i_0 = i_0 + 1 | 0;
      this.sync_yjqkpp_k$(i_0);
      token = this.tokens_1.get_c1px32_k$(i_0);
    }
    return i_0;
  };
  protoOf(BufferedTokenStream).previousTokenOnChannel_o1bo1q_k$ = function (i, channel) {
    var i_0 = i;
    this.sync_yjqkpp_k$(i_0);
    if (i_0 >= this.size_23och_k$()) {
      return this.size_23och_k$() - 1 | 0;
    }
    while (i_0 >= 0) {
      var token = this.tokens_1.get_c1px32_k$(i_0);
      if (token.get_type_wovaf7_k$() === Companion_getInstance_6().get_EOF_18juz1_k$() ? true : token.get_channel_dhi7tm_k$() === channel) {
        return i_0;
      }
      i_0 = i_0 - 1 | 0;
    }
    return i_0;
  };
  protoOf(BufferedTokenStream).getHiddenTokensToRight_zas9k7_k$ = function (tokenIndex, channel) {
    this.lazyInit_mkigq4_k$();
    if (tokenIndex < 0 ? true : tokenIndex >= this.tokens_1.get_size_woubt6_k$()) {
      throw IndexOutOfBoundsException_init_$Create$(tokenIndex.toString() + ' not in 0..' + (this.tokens_1.get_size_woubt6_k$() - 1 | 0));
    }
    var nextOnChannel = this.nextTokenOnChannel_aawwhq_k$(tokenIndex + 1 | 0, Companion_getInstance_4().get_DEFAULT_TOKEN_CHANNEL_ki3zxy_k$());
    var to;
    var from = tokenIndex + 1 | 0;
    if (nextOnChannel === -1)
      to = this.size_23och_k$() - 1 | 0;
    else
      to = nextOnChannel;
    return this.filterForChannel_98dwxy_k$(from, to, channel);
  };
  protoOf(BufferedTokenStream).getHiddenTokensToRight$default_xm1lo_k$ = function (tokenIndex, channel, $super) {
    channel = channel === VOID ? -1 : channel;
    return $super === VOID ? this.getHiddenTokensToRight_zas9k7_k$(tokenIndex, channel) : $super.getHiddenTokensToRight_zas9k7_k$.call(this, tokenIndex, channel);
  };
  protoOf(BufferedTokenStream).getHiddenTokensToLeft_wsikgs_k$ = function (tokenIndex, channel) {
    this.lazyInit_mkigq4_k$();
    if (tokenIndex < 0 ? true : tokenIndex >= this.tokens_1.get_size_woubt6_k$()) {
      throw IndexOutOfBoundsException_init_$Create$(tokenIndex.toString() + ' not in 0..' + (this.tokens_1.get_size_woubt6_k$() - 1 | 0));
    }
    if (tokenIndex === 0) {
      return null;
    }
    var prevOnChannel = this.previousTokenOnChannel_o1bo1q_k$(tokenIndex - 1 | 0, Companion_getInstance_4().get_DEFAULT_TOKEN_CHANNEL_ki3zxy_k$());
    if (prevOnChannel === (tokenIndex - 1 | 0))
      return null;
    var from = prevOnChannel + 1 | 0;
    var to = tokenIndex - 1 | 0;
    return this.filterForChannel_98dwxy_k$(from, to, channel);
  };
  protoOf(BufferedTokenStream).getHiddenTokensToLeft$default_caa4mf_k$ = function (tokenIndex, channel, $super) {
    channel = channel === VOID ? -1 : channel;
    return $super === VOID ? this.getHiddenTokensToLeft_wsikgs_k$(tokenIndex, channel) : $super.getHiddenTokensToLeft_wsikgs_k$.call(this, tokenIndex, channel);
  };
  protoOf(BufferedTokenStream).filterForChannel_98dwxy_k$ = function (from, to, channel) {
    var hidden = ArrayList_init_$Create$_0();
    var inductionVariable = from;
    if (inductionVariable <= to)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var t = this.tokens_1.get_c1px32_k$(i);
        if (channel === -1) {
          if (!(t.get_channel_dhi7tm_k$() === Companion_getInstance_4().get_DEFAULT_TOKEN_CHANNEL_ki3zxy_k$())) {
            hidden.add_utx5q5_k$(t);
          }
        } else {
          if (t.get_channel_dhi7tm_k$() === channel) {
            hidden.add_utx5q5_k$(t);
          }
        }
      }
       while (!(i === to));
    return hidden.get_size_woubt6_k$() === 0 ? null : hidden;
  };
  protoOf(BufferedTokenStream).getText_dijk8r_k$ = function (interval) {
    var start = interval.get_a_1mhr5k_k$();
    var stop = interval.get_b_1mhr5l_k$();
    if (start < 0 ? true : stop < 0)
      return '';
    this.fill_e1abw3_k$();
    if (stop >= this.tokens_1.get_size_woubt6_k$())
      stop = this.tokens_1.get_size_woubt6_k$() - 1 | 0;
    var buf = StringBuilder_init_$Create$();
    var inductionVariable = start;
    var last = stop;
    if (inductionVariable <= last)
      $l$loop: do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var t = this.tokens_1.get_c1px32_k$(i);
        if (t.get_type_wovaf7_k$() === Companion_getInstance_6().get_EOF_18juz1_k$())
          break $l$loop;
        buf.append_22ad7x_k$(t.get_text_wouvsm_k$());
      }
       while (!(i === last));
    return buf.toString();
  };
  protoOf(BufferedTokenStream).getText_jwu4g4_k$ = function (ctx) {
    return this.getText_dijk8r_k$(ctx.get_sourceInterval_k8s7pl_k$());
  };
  protoOf(BufferedTokenStream).getText_eusiqr_k$ = function (start, stop) {
    var tmp;
    if (!(start == null) ? !(stop == null) : false) {
      tmp = this.getText_dijk8r_k$(Companion_getInstance_31().of_doci3b_k$(ensureNotNull(start).get_tokenIndex_iu15pa_k$(), ensureNotNull(stop).get_tokenIndex_iu15pa_k$()));
    } else {
      tmp = '';
    }
    return tmp;
  };
  protoOf(BufferedTokenStream).fill_e1abw3_k$ = function () {
    this.lazyInit_mkigq4_k$();
    var blockSize = 1000;
    while (true) {
      var fetched = this.fetch_qldvaa_k$(blockSize);
      if (fetched < blockSize) {
        return Unit_getInstance();
      }
    }
  };
  function Companion() {
    Companion_instance = this;
    this.EOF_1 = Companion_getInstance_3().get_EOF_18juz1_k$();
  }
  protoOf(Companion).get_EOF_18juz1_k$ = function () {
    return this.EOF_1;
  };
  var Companion_instance;
  function Companion_getInstance_0() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function CharStream() {
  }
  function CommonToken_init_$Init$(type, $this) {
    CommonToken.call($this);
    $this.set_type_8fmzpr_k$(type);
    $this.source_1 = Companion_getInstance_1().EMPTY_SOURCE_1;
    return $this;
  }
  function CommonToken_init_$Create$(type) {
    return CommonToken_init_$Init$(type, objectCreate(protoOf(CommonToken)));
  }
  function CommonToken_init_$Init$_0(source, type, channel, start, stop, $this) {
    CommonToken.call($this);
    $this.source_1 = source;
    $this.set_type_8fmzpr_k$(type);
    $this.set_channel_qqft0i_k$(channel);
    $this.set_startIndex_pkxx0b_k$(start);
    $this.set_stopIndex_yig5kb_k$(stop);
    if (!(source.get_first_irdx8n_k$() == null)) {
      $this.set_line_45vtmf_k$(ensureNotNull(source.get_first_irdx8n_k$()).get_line_wopum5_k$());
      $this.set_charPositionInLine_k90ur7_k$(ensureNotNull(source.get_first_irdx8n_k$()).get_charPositionInLine_2wqse7_k$());
    }
    return $this;
  }
  function CommonToken_init_$Create$_0(source, type, channel, start, stop) {
    return CommonToken_init_$Init$_0(source, type, channel, start, stop, objectCreate(protoOf(CommonToken)));
  }
  function CommonToken_init_$Init$_1(type, text, $this) {
    CommonToken.call($this);
    $this.set_type_8fmzpr_k$(type);
    $this.set_channel_qqft0i_k$(Companion_getInstance_6().get_DEFAULT_CHANNEL_1pytd0_k$());
    $this.set_text_ifhbbn_k$(text);
    $this.source_1 = Companion_getInstance_1().EMPTY_SOURCE_1;
    return $this;
  }
  function CommonToken_init_$Create$_1(type, text) {
    return CommonToken_init_$Init$_1(type, text, objectCreate(protoOf(CommonToken)));
  }
  function CommonToken_init_$Init$_2(oldToken, $this) {
    CommonToken.call($this);
    $this.set_type_8fmzpr_k$(oldToken.get_type_wovaf7_k$());
    $this.set_line_45vtmf_k$(oldToken.get_line_wopum5_k$());
    $this.set_tokenIndex_7llrim_k$(oldToken.get_tokenIndex_iu15pa_k$());
    $this.set_charPositionInLine_k90ur7_k$(oldToken.get_charPositionInLine_2wqse7_k$());
    $this.set_channel_qqft0i_k$(oldToken.get_channel_dhi7tm_k$());
    $this.set_startIndex_pkxx0b_k$(oldToken.get_startIndex_oi1lp5_k$());
    $this.set_stopIndex_yig5kb_k$(oldToken.get_stopIndex_z4ulhj_k$());
    if (oldToken instanceof CommonToken) {
      $this.set_text_ifhbbn_k$((oldToken instanceof CommonToken ? oldToken : THROW_CCE()).get_text_wouvsm_k$());
      var tmp = $this;
      tmp.source_1 = (oldToken instanceof CommonToken ? oldToken : THROW_CCE()).source_1;
    } else {
      $this.set_text_ifhbbn_k$(oldToken.get_text_wouvsm_k$());
      $this.source_1 = new Pair(ensureNotNull(oldToken.get_tokenSource_auscfp_k$()), ensureNotNull(oldToken.get_inputStream_8u0z9d_k$()));
    }
    return $this;
  }
  function CommonToken_init_$Create$_2(oldToken) {
    return CommonToken_init_$Init$_2(oldToken, objectCreate(protoOf(CommonToken)));
  }
  function Companion_0() {
    Companion_instance_0 = this;
    this.EMPTY_SOURCE_1 = new Pair(null, null);
  }
  protoOf(Companion_0).get_EMPTY_SOURCE_g6fg6u_k$ = function () {
    return this.EMPTY_SOURCE_1;
  };
  var Companion_instance_0;
  function Companion_getInstance_1() {
    if (Companion_instance_0 == null)
      new Companion_0();
    return Companion_instance_0;
  }
  protoOf(CommonToken).set_type_8fmzpr_k$ = function (_set____db54di) {
    this.type_1 = _set____db54di;
  };
  protoOf(CommonToken).get_type_wovaf7_k$ = function () {
    return this.type_1;
  };
  protoOf(CommonToken).set_line_45vtmf_k$ = function (_set____db54di) {
    this.line_1 = _set____db54di;
  };
  protoOf(CommonToken).get_line_wopum5_k$ = function () {
    return this.line_1;
  };
  protoOf(CommonToken).set_charPositionInLine_k90ur7_k$ = function (_set____db54di) {
    this.charPositionInLine_1 = _set____db54di;
  };
  protoOf(CommonToken).get_charPositionInLine_2wqse7_k$ = function () {
    return this.charPositionInLine_1;
  };
  protoOf(CommonToken).set_channel_qqft0i_k$ = function (_set____db54di) {
    this.channel_1 = _set____db54di;
  };
  protoOf(CommonToken).get_channel_dhi7tm_k$ = function () {
    return this.channel_1;
  };
  protoOf(CommonToken).set_source_tx470j_k$ = function (_set____db54di) {
    this.source_1 = _set____db54di;
  };
  protoOf(CommonToken).get_source_jl0x7o_k$ = function () {
    return this.source_1;
  };
  protoOf(CommonToken).set_tokenIndex_7llrim_k$ = function (_set____db54di) {
    this.tokenIndex_1 = _set____db54di;
  };
  protoOf(CommonToken).get_tokenIndex_iu15pa_k$ = function () {
    return this.tokenIndex_1;
  };
  protoOf(CommonToken).set_startIndex_pkxx0b_k$ = function (_set____db54di) {
    this.startIndex_1 = _set____db54di;
  };
  protoOf(CommonToken).get_startIndex_oi1lp5_k$ = function () {
    return this.startIndex_1;
  };
  protoOf(CommonToken).set_stopIndex_yig5kb_k$ = function (_set____db54di) {
    this.stopIndex_1 = _set____db54di;
  };
  protoOf(CommonToken).get_stopIndex_z4ulhj_k$ = function () {
    return this.stopIndex_1;
  };
  protoOf(CommonToken).get_tokenSource_auscfp_k$ = function () {
    return this.source_1.get_first_irdx8n_k$();
  };
  protoOf(CommonToken).get_inputStream_8u0z9d_k$ = function () {
    return this.source_1.get_second_jf7fjx_k$();
  };
  protoOf(CommonToken).set_text_ifhbbn_k$ = function (_set____db54di) {
    this.text_1 = _set____db54di;
  };
  protoOf(CommonToken).get_text_wouvsm_k$ = function () {
    if (!(this.text_1 == null)) {
      return this.text_1;
    }
    var tmp0_elvis_lhs = this.get_inputStream_8u0z9d_k$();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return null;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var input = tmp;
    var n = input.size_23och_k$();
    var tmp_0;
    if (this.get_startIndex_oi1lp5_k$() < n ? this.get_stopIndex_z4ulhj_k$() < n : false) {
      tmp_0 = input.getText_dijk8r_k$(Companion_getInstance_31().of_doci3b_k$(this.get_startIndex_oi1lp5_k$(), this.get_stopIndex_z4ulhj_k$()));
    } else {
      tmp_0 = '<EOF>';
    }
    return tmp_0;
  };
  protoOf(CommonToken).toString = function () {
    return this.toString_q3zk2l_k$(null);
  };
  protoOf(CommonToken).toString_q3zk2l_k$ = function (r) {
    var channelStr = '';
    if (this.get_channel_dhi7tm_k$() > 0) {
      channelStr = ',channel=' + this.get_channel_dhi7tm_k$();
    }
    var txt = this.get_text_wouvsm_k$();
    if (!(txt == null)) {
      txt = replace(txt, '\n', '\\n');
      txt = replace(txt, '\r', '\\r');
      txt = replace(txt, '\t', '\\t');
    } else {
      txt = '<no text>';
    }
    var typeString = this.get_type_wovaf7_k$().toString();
    if (!(r == null)) {
      typeString = ensureNotNull(r).get_vocabulary_zijn9t_k$().getDisplayName_ut2bi7_k$(this.get_type_wovaf7_k$());
    }
    return '[@' + this.get_tokenIndex_iu15pa_k$() + ',' + this.get_startIndex_oi1lp5_k$() + ':' + this.get_stopIndex_z4ulhj_k$() + "='" + txt + "',<" + typeString + '>' + channelStr + ',' + this.get_line_wopum5_k$() + ':' + this.get_charPositionInLine_2wqse7_k$() + ']';
  };
  function CommonToken() {
    Companion_getInstance_1();
    this.type_1 = 0;
    this.line_1 = 0;
    this.charPositionInLine_1 = -1;
    this.channel_1 = Companion_getInstance_6().get_DEFAULT_CHANNEL_1pytd0_k$();
    this.tokenIndex_1 = -1;
    this.startIndex_1 = 0;
    this.stopIndex_1 = 0;
    this.text_1 = null;
  }
  function Companion_1() {
    Companion_instance_1 = this;
    this.DEFAULT_1 = new CommonTokenFactory();
  }
  protoOf(Companion_1).get_DEFAULT_wccqmg_k$ = function () {
    return this.DEFAULT_1;
  };
  var Companion_instance_1;
  function Companion_getInstance_2() {
    if (Companion_instance_1 == null)
      new Companion_1();
    return Companion_instance_1;
  }
  function CommonTokenFactory(copyText) {
    Companion_getInstance_2();
    copyText = copyText === VOID ? false : copyText;
    this.copyText_1 = copyText;
  }
  protoOf(CommonTokenFactory).get_copyText_uuxte3_k$ = function () {
    return this.copyText_1;
  };
  protoOf(CommonTokenFactory).create_gzkfps_k$ = function (source, type, text, channel, start, stop, line, charPositionInLine) {
    var t = CommonToken_init_$Create$_0(source, type, channel, start, stop);
    t.set_line_45vtmf_k$(line);
    t.set_charPositionInLine_k90ur7_k$(charPositionInLine);
    if (!(text == null)) {
      t.set_text_ifhbbn_k$(text);
    } else if (this.copyText_1 ? !(source.get_second_jf7fjx_k$() == null) : false) {
      t.set_text_ifhbbn_k$(ensureNotNull(source.get_second_jf7fjx_k$()).getText_dijk8r_k$(Companion_getInstance_31().of_doci3b_k$(start, stop)));
    }
    return t;
  };
  protoOf(CommonTokenFactory).create_w26lge_k$ = function (type, text) {
    return CommonToken_init_$Create$_1(type, text);
  };
  function CommonTokenStream_init_$Init$(tokenSource, channel, $this) {
    CommonTokenStream.call($this, tokenSource);
    $this.channel_1 = channel;
    return $this;
  }
  function CommonTokenStream_init_$Create$(tokenSource, channel) {
    return CommonTokenStream_init_$Init$(tokenSource, channel, objectCreate(protoOf(CommonTokenStream)));
  }
  function CommonTokenStream(tokenSource) {
    BufferedTokenStream.call(this, tokenSource);
    this.channel_1 = Companion_getInstance_6().get_DEFAULT_CHANNEL_1pytd0_k$();
  }
  protoOf(CommonTokenStream).set_channel_qqft0i_k$ = function (_set____db54di) {
    this.channel_1 = _set____db54di;
  };
  protoOf(CommonTokenStream).get_channel_dhi7tm_k$ = function () {
    return this.channel_1;
  };
  protoOf(CommonTokenStream).get_numberOfOnChannelTokens_p6jqol_k$ = function () {
    var n = 0;
    this.fill_e1abw3_k$();
    var inductionVariable = 0;
    var last = this.get_tokens_k1vwdf_k$().get_size_woubt6_k$() - 1 | 0;
    if (inductionVariable <= last)
      $l$loop: do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var t = this.get_tokens_k1vwdf_k$().get_c1px32_k$(i);
        if (t.get_channel_dhi7tm_k$() === this.channel_1) {
          n = n + 1 | 0;
        }
        if (t.get_type_wovaf7_k$() === Companion_getInstance_6().get_EOF_18juz1_k$())
          break $l$loop;
      }
       while (inductionVariable <= last);
    return n;
  };
  protoOf(CommonTokenStream).adjustSeekIndex_x3utf7_k$ = function (i) {
    return this.nextTokenOnChannel_aawwhq_k$(i, this.channel_1);
  };
  protoOf(CommonTokenStream).LB_fuk7j6_k$ = function (k) {
    if (k === 0 ? true : (this.get_p_1mhr5z_k$() - k | 0) < 0)
      return null;
    var i = this.get_p_1mhr5z_k$();
    var n = 1;
    while (n <= k ? i > 0 : false) {
      i = this.previousTokenOnChannel_o1bo1q_k$(i - 1 | 0, this.channel_1);
      n = n + 1 | 0;
    }
    return i < 0 ? null : this.get_tokens_k1vwdf_k$().get_c1px32_k$(i);
  };
  protoOf(CommonTokenStream).LT_lwif2o_k$ = function (k) {
    this.lazyInit_mkigq4_k$();
    if (k === 0)
      return null;
    if (k < 0)
      return this.LB_fuk7j6_k$(-k | 0);
    var i = this.get_p_1mhr5z_k$();
    var n = 1;
    while (n < k) {
      if (this.sync_yjqkpp_k$(i + 1 | 0)) {
        i = this.nextTokenOnChannel_aawwhq_k$(i + 1 | 0, this.channel_1);
      }
      n = n + 1 | 0;
    }
    return this.get_tokens_k1vwdf_k$().get_c1px32_k$(i);
  };
  function DefaultErrorStrategy() {
    this.errorRecoveryMode_1 = false;
    this.lastErrorIndex_1 = -1;
    this.lastErrorStates_1 = null;
    this.nextTokensContext_1 = null;
    this.nextTokensState_1 = 0;
  }
  protoOf(DefaultErrorStrategy).set_errorRecoveryMode_ts79ri_k$ = function (_set____db54di) {
    this.errorRecoveryMode_1 = _set____db54di;
  };
  protoOf(DefaultErrorStrategy).get_errorRecoveryMode_x9p6sp_k$ = function () {
    return this.errorRecoveryMode_1;
  };
  protoOf(DefaultErrorStrategy).set_lastErrorIndex_7b0tbp_k$ = function (_set____db54di) {
    this.lastErrorIndex_1 = _set____db54di;
  };
  protoOf(DefaultErrorStrategy).get_lastErrorIndex_7hpkif_k$ = function () {
    return this.lastErrorIndex_1;
  };
  protoOf(DefaultErrorStrategy).set_lastErrorStates_9f7dkt_k$ = function (_set____db54di) {
    this.lastErrorStates_1 = _set____db54di;
  };
  protoOf(DefaultErrorStrategy).get_lastErrorStates_ebz4mt_k$ = function () {
    return this.lastErrorStates_1;
  };
  protoOf(DefaultErrorStrategy).set_nextTokensContext_o9xr4u_k$ = function (_set____db54di) {
    this.nextTokensContext_1 = _set____db54di;
  };
  protoOf(DefaultErrorStrategy).get_nextTokensContext_6qr4mf_k$ = function () {
    return this.nextTokensContext_1;
  };
  protoOf(DefaultErrorStrategy).set_nextTokensState_6kzash_k$ = function (_set____db54di) {
    this.nextTokensState_1 = _set____db54di;
  };
  protoOf(DefaultErrorStrategy).get_nextTokensState_czo7ut_k$ = function () {
    return this.nextTokensState_1;
  };
  protoOf(DefaultErrorStrategy).reset_irlocw_k$ = function (recognizer) {
    this.endErrorCondition_aee0lt_k$(recognizer);
  };
  protoOf(DefaultErrorStrategy).beginErrorCondition_eqamd9_k$ = function (recognizer) {
    this.errorRecoveryMode_1 = true;
  };
  protoOf(DefaultErrorStrategy).inErrorRecoveryMode_g7wlm4_k$ = function (recognizer) {
    return this.errorRecoveryMode_1;
  };
  protoOf(DefaultErrorStrategy).endErrorCondition_aee0lt_k$ = function (recognizer) {
    this.errorRecoveryMode_1 = false;
    this.lastErrorStates_1 = null;
    this.lastErrorIndex_1 = -1;
  };
  protoOf(DefaultErrorStrategy).reportMatch_ky9kge_k$ = function (recognizer) {
    this.endErrorCondition_aee0lt_k$(recognizer);
  };
  protoOf(DefaultErrorStrategy).reportError_rspx9x_k$ = function (recognizer, e) {
    if (this.inErrorRecoveryMode_g7wlm4_k$(recognizer)) {
      return Unit_getInstance();
    }
    this.beginErrorCondition_eqamd9_k$(recognizer);
    if (e instanceof NoViableAltException) {
      this.reportNoViableAlternative_leygr7_k$(recognizer, e instanceof NoViableAltException ? e : THROW_CCE());
    } else {
      if (e instanceof InputMismatchException) {
        this.reportInputMismatch_4i0qix_k$(recognizer, e instanceof InputMismatchException ? e : THROW_CCE());
      } else {
        if (e instanceof FailedPredicateException) {
          this.reportFailedPredicate_mcs0sp_k$(recognizer, e instanceof FailedPredicateException ? e : THROW_CCE());
        } else {
          errMessage('unknown recognition error type: ' + e);
          recognizer.notifyErrorListeners_nwrtmg_k$(ensureNotNull(e.get_offendingToken_c59p3g_k$()), ensureNotNull(e.get_message_h23axq_k$()), e);
        }
      }
    }
  };
  protoOf(DefaultErrorStrategy).recover_1fqgzf_k$ = function (recognizer, e) {
    if ((this.lastErrorIndex_1 === ensureNotNull(recognizer.readInputStream_cn8ozw_k$()).index_1nqriq_k$() ? !(this.lastErrorStates_1 == null) : false) ? ensureNotNull(this.lastErrorStates_1).contains_7q95ev_k$(recognizer.get_state_iypx7s_k$()) : false) {
      recognizer.consume_fqiakc_k$();
    }
    this.lastErrorIndex_1 = ensureNotNull(recognizer.readInputStream_cn8ozw_k$()).index_1nqriq_k$();
    if (this.lastErrorStates_1 == null)
      this.lastErrorStates_1 = IntervalSet_init_$Create$_1(new Int32Array([]));
    ensureNotNull(this.lastErrorStates_1).add_c9dakn_k$(recognizer.get_state_iypx7s_k$());
    var followSet = this.getErrorRecoverySet_xhmyuk_k$(recognizer);
    this.consumeUntil_ty8xok_k$(recognizer, followSet);
  };
  protoOf(DefaultErrorStrategy).sync_93xe58_k$ = function (recognizer) {
    var s = ensureNotNull(recognizer.get_interpreter_jbbcvj_k$()).get_atn_18j9am_k$().get_states_jnf5zf_k$().get_c1px32_k$(recognizer.get_state_iypx7s_k$());
    if (this.inErrorRecoveryMode_g7wlm4_k$(recognizer)) {
      return Unit_getInstance();
    }
    var tokens = recognizer.readInputStream_cn8ozw_k$();
    var la = ensureNotNull(tokens).LA_figb43_k$(1);
    var nextTokens = recognizer.get_atn_18j9am_k$().nextTokens_kclek1_k$(ensureNotNull(s));
    if (ensureNotNull(nextTokens).contains_7q95ev_k$(la)) {
      this.nextTokensContext_1 = null;
      this.nextTokensState_1 = Companion_getInstance_14().get_INVALID_STATE_NUMBER_d1yr20_k$();
      return Unit_getInstance();
    }
    if (nextTokens.contains_7q95ev_k$(Companion_getInstance_6().get_EPSILON_c96d27_k$())) {
      if (this.nextTokensContext_1 == null) {
        this.nextTokensContext_1 = recognizer.get_context_h02k06_k$();
        this.nextTokensState_1 = recognizer.get_state_iypx7s_k$();
      }
      return Unit_getInstance();
    }
    var tmp0_subject = s.get_stateType_pzcpby_k$();
    if (((tmp0_subject === Companion_getInstance_14().get_BLOCK_START_dx6npj_k$() ? true : tmp0_subject === Companion_getInstance_14().get_STAR_BLOCK_START_v2275g_k$()) ? true : tmp0_subject === Companion_getInstance_14().get_PLUS_BLOCK_START_m3p2ek_k$()) ? true : tmp0_subject === Companion_getInstance_14().get_STAR_LOOP_ENTRY_sp54o5_k$()) {
      if (!(this.singleTokenDeletion_so9mds_k$(recognizer) == null)) {
        return Unit_getInstance();
      }
      throw InputMismatchException_init_$Create$(recognizer);
    } else if (tmp0_subject === Companion_getInstance_14().get_PLUS_LOOP_BACK_kykime_k$() ? true : tmp0_subject === Companion_getInstance_14().get_STAR_LOOP_BACK_f40vlq_k$()) {
      this.reportUnwantedToken_n8p3ni_k$(recognizer);
      var expecting = recognizer.get_expectedTokens_qw7szf_k$();
      var whatFollowsLoopIterationOrRule = expecting.or_xsyq06_k$(this.getErrorRecoverySet_xhmyuk_k$(recognizer));
      this.consumeUntil_ty8xok_k$(recognizer, whatFollowsLoopIterationOrRule);
    }
  };
  protoOf(DefaultErrorStrategy).reportNoViableAlternative_leygr7_k$ = function (recognizer, e) {
    var tokens = recognizer.readInputStream_cn8ozw_k$();
    var input;
    if (!(tokens == null)) {
      if (ensureNotNull(e.get_startToken_oo44e8_k$()).get_type_wovaf7_k$() === Companion_getInstance_6().get_EOF_18juz1_k$())
        input = '<EOF>';
      else
        input = ensureNotNull(e.get_startToken_oo44e8_k$().get_text_wouvsm_k$());
    } else {
      input = '<unknown input>';
    }
    var msg = 'no viable alternative at input ' + this.escapeWSAndQuote_f9omaw_k$(input);
    recognizer.notifyErrorListeners_nwrtmg_k$(ensureNotNull(e.get_offendingToken_c59p3g_k$()), msg, e);
  };
  protoOf(DefaultErrorStrategy).reportInputMismatch_4i0qix_k$ = function (recognizer, e) {
    var msg = 'mismatched input ' + this.getTokenErrorDisplay_158c71_k$(e.get_offendingToken_c59p3g_k$()) + ' expecting ' + ensureNotNull(e.get_expectedTokens_qw7szf_k$()).toString_vjubf0_k$(recognizer.get_vocabulary_zijn9t_k$());
    recognizer.notifyErrorListeners_nwrtmg_k$(ensureNotNull(e.get_offendingToken_c59p3g_k$()), msg, e);
  };
  protoOf(DefaultErrorStrategy).reportFailedPredicate_mcs0sp_k$ = function (recognizer, e) {
    var ruleName = ensureNotNull(recognizer.get_ruleNames_qcosu5_k$())[ensureNotNull(recognizer.get_context_h02k06_k$()).get_ruleIndex_qf7nn7_k$()];
    var msg = 'rule ' + ruleName + ' ' + e.get_message_h23axq_k$();
    recognizer.notifyErrorListeners_nwrtmg_k$(ensureNotNull(e.get_offendingToken_c59p3g_k$()), msg, e);
  };
  protoOf(DefaultErrorStrategy).reportUnwantedToken_n8p3ni_k$ = function (recognizer) {
    if (this.inErrorRecoveryMode_g7wlm4_k$(recognizer)) {
      return Unit_getInstance();
    }
    this.beginErrorCondition_eqamd9_k$(recognizer);
    var t = recognizer.get_currentToken_snzadl_k$();
    var tokenName = this.getTokenErrorDisplay_158c71_k$(t);
    var expecting = this.getExpectedTokens_2crp4p_k$(recognizer);
    var msg = 'extraneous input ' + tokenName + ' expecting ' + expecting.toString_vjubf0_k$(recognizer.get_vocabulary_zijn9t_k$());
    recognizer.notifyErrorListeners_nwrtmg_k$(ensureNotNull(t), msg, null);
  };
  protoOf(DefaultErrorStrategy).reportMissingToken_4w6ng8_k$ = function (recognizer) {
    if (this.inErrorRecoveryMode_g7wlm4_k$(recognizer)) {
      return Unit_getInstance();
    }
    this.beginErrorCondition_eqamd9_k$(recognizer);
    var t = recognizer.get_currentToken_snzadl_k$();
    var expecting = this.getExpectedTokens_2crp4p_k$(recognizer);
    var msg = 'missing ' + expecting.toString_vjubf0_k$(recognizer.get_vocabulary_zijn9t_k$()) + ' at ' + this.getTokenErrorDisplay_158c71_k$(t);
    recognizer.notifyErrorListeners_nwrtmg_k$(ensureNotNull(t), msg, null);
  };
  protoOf(DefaultErrorStrategy).recoverInline_78y4oe_k$ = function (recognizer) {
    var matchedSymbol = this.singleTokenDeletion_so9mds_k$(recognizer);
    if (!(matchedSymbol == null)) {
      recognizer.consume_fqiakc_k$();
      return matchedSymbol;
    }
    if (this.singleTokenInsertion_nae34h_k$(recognizer)) {
      return this.getMissingSymbol_hbhd2x_k$(recognizer);
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
  protoOf(DefaultErrorStrategy).singleTokenInsertion_nae34h_k$ = function (recognizer) {
    var currentSymbolType = ensureNotNull(recognizer.readInputStream_cn8ozw_k$()).LA_figb43_k$(1);
    var currentState = ensureNotNull(recognizer.get_interpreter_jbbcvj_k$()).get_atn_18j9am_k$().get_states_jnf5zf_k$().get_c1px32_k$(recognizer.get_state_iypx7s_k$());
    var next = ensureNotNull(currentState).transition_nw6t99_k$(0).get_target_juba8q_k$();
    var atn = ensureNotNull(recognizer.get_interpreter_jbbcvj_k$()).get_atn_18j9am_k$();
    var expectingAtLL2 = atn.nextTokens_ygjxa9_k$(ensureNotNull(next), recognizer.get_context_h02k06_k$());
    if (expectingAtLL2.contains_7q95ev_k$(currentSymbolType)) {
      this.reportMissingToken_4w6ng8_k$(recognizer);
      return true;
    }
    return false;
  };
  protoOf(DefaultErrorStrategy).singleTokenDeletion_so9mds_k$ = function (recognizer) {
    var nextTokenType = ensureNotNull(recognizer.readInputStream_cn8ozw_k$()).LA_figb43_k$(2);
    var expecting = this.getExpectedTokens_2crp4p_k$(recognizer);
    if (expecting.contains_7q95ev_k$(nextTokenType)) {
      this.reportUnwantedToken_n8p3ni_k$(recognizer);
      recognizer.consume_fqiakc_k$();
      var matchedSymbol = recognizer.get_currentToken_snzadl_k$();
      this.reportMatch_ky9kge_k$(recognizer);
      return matchedSymbol;
    }
    return null;
  };
  protoOf(DefaultErrorStrategy).getMissingSymbol_hbhd2x_k$ = function (recognizer) {
    var currentSymbol = recognizer.get_currentToken_snzadl_k$();
    var expecting = this.getExpectedTokens_2crp4p_k$(recognizer);
    var expectedTokenType = Companion_getInstance_6().get_INVALID_TYPE_iyehat_k$();
    if (!expecting.get_isNil_it6xy6_k$()) {
      expectedTokenType = expecting.get_minElement_cmfmc3_k$();
    }
    var tokenText;
    if (expectedTokenType === Companion_getInstance_6().get_EOF_18juz1_k$())
      tokenText = '<missing EOF>';
    else
      tokenText = '<missing ' + recognizer.get_vocabulary_zijn9t_k$().getDisplayName_ut2bi7_k$(expectedTokenType) + '>';
    var current = currentSymbol;
    var tmp = recognizer.readInputStream_cn8ozw_k$();
    var lookback = ((!(tmp == null) ? isInterface(tmp, TokenStream) : false) ? tmp : THROW_CCE()).LT_lwif2o_k$(-1);
    if (ensureNotNull(current).get_type_wovaf7_k$() === Companion_getInstance_6().get_EOF_18juz1_k$() ? !(lookback == null) : false) {
      current = lookback;
    }
    return recognizer.get_tokenFactory_y0ukgq_k$().create_gzkfps_k$(new Pair(current.get_tokenSource_auscfp_k$(), ensureNotNull(current.get_tokenSource_auscfp_k$()).readInputStream_cn8ozw_k$()), expectedTokenType, tokenText, Companion_getInstance_6().get_DEFAULT_CHANNEL_1pytd0_k$(), -1, -1, current.get_line_wopum5_k$(), current.get_charPositionInLine_2wqse7_k$());
  };
  protoOf(DefaultErrorStrategy).getExpectedTokens_2crp4p_k$ = function (recognizer) {
    return recognizer.get_expectedTokens_qw7szf_k$();
  };
  protoOf(DefaultErrorStrategy).getTokenErrorDisplay_158c71_k$ = function (t) {
    if (t == null)
      return '<no token>';
    var s = this.getSymbolText_i4cm72_k$(t);
    if (s == null) {
      if (this.getSymbolType_4qldtb_k$(t) === Companion_getInstance_6().get_EOF_18juz1_k$()) {
        s = '<EOF>';
      } else {
        s = '<' + this.getSymbolType_4qldtb_k$(t) + '>';
      }
    }
    return this.escapeWSAndQuote_f9omaw_k$(s);
  };
  protoOf(DefaultErrorStrategy).getSymbolText_i4cm72_k$ = function (symbol) {
    return ensureNotNull(symbol.get_text_wouvsm_k$());
  };
  protoOf(DefaultErrorStrategy).getSymbolType_4qldtb_k$ = function (symbol) {
    return symbol.get_type_wovaf7_k$();
  };
  protoOf(DefaultErrorStrategy).escapeWSAndQuote_f9omaw_k$ = function (s) {
    var s_0 = s;
    s_0 = replace(s_0, '\n', '\\n');
    s_0 = replace(s_0, '\r', '\\r');
    s_0 = replace(s_0, '\t', '\\t');
    return "'" + s_0 + "'";
  };
  protoOf(DefaultErrorStrategy).getErrorRecoverySet_xhmyuk_k$ = function (recognizer) {
    var atn = ensureNotNull(recognizer.get_interpreter_jbbcvj_k$()).get_atn_18j9am_k$();
    var ctx = recognizer.get_context_h02k06_k$();
    var recoverSet = IntervalSet_init_$Create$_1(new Int32Array([]));
    while (!(ctx == null) ? ensureNotNull(ctx).get_invokingState_mn8pn1_k$() >= 0 : false) {
      var invokingState = atn.get_states_jnf5zf_k$().get_c1px32_k$(ensureNotNull(ctx).get_invokingState_mn8pn1_k$());
      var tmp = ensureNotNull(invokingState).transition_nw6t99_k$(0);
      var rt = tmp instanceof RuleTransition ? tmp : THROW_CCE();
      var follow = atn.nextTokens_kclek1_k$(rt.get_followState_uwxfd5_k$());
      recoverSet.addAll_jvk865_k$(follow);
      ctx = ensureNotNull(ctx).readParent_9zdz4w_k$();
    }
    recoverSet.remove_v58o70_k$(Companion_getInstance_6().get_EPSILON_c96d27_k$());
    return recoverSet;
  };
  protoOf(DefaultErrorStrategy).consumeUntil_ty8xok_k$ = function (recognizer, set) {
    var ttype = ensureNotNull(recognizer.readInputStream_cn8ozw_k$()).LA_figb43_k$(1);
    while (!(ttype === Companion_getInstance_6().get_EOF_18juz1_k$()) ? !set.contains_7q95ev_k$(ttype) : false) {
      recognizer.consume_fqiakc_k$();
      ttype = ensureNotNull(recognizer.readInputStream_cn8ozw_k$()).LA_figb43_k$(1);
    }
  };
  function FailedPredicateException(recognizer, predicate, message) {
    predicate = predicate === VOID ? null : predicate;
    message = message === VOID ? null : message;
    RecognitionException.call(this, recognizer, ensureNotNull(recognizer.readInputStream_cn8ozw_k$()), ensureNotNull(recognizer.get_context_h02k06_k$()), formatMessage(predicate, message));
    captureStack(this, FailedPredicateException);
    this.predicate_1 = predicate;
    this.ruleIndex_1 = -1;
    this.predIndex_1 = -1;
    var s = ensureNotNull(recognizer.get_interpreter_jbbcvj_k$()).get_atn_18j9am_k$().get_states_jnf5zf_k$().get_c1px32_k$(recognizer.get_state_iypx7s_k$());
    var tmp = ensureNotNull(s).transition_nw6t99_k$(0);
    var trans = tmp instanceof AbstractPredicateTransition ? tmp : THROW_CCE();
    if (trans instanceof PredicateTransition) {
      var tmp_0 = this;
      tmp_0.ruleIndex_1 = (trans instanceof PredicateTransition ? trans : THROW_CCE()).get_ruleIndex_qf7nn7_k$();
      var tmp_1 = this;
      tmp_1.predIndex_1 = (trans instanceof PredicateTransition ? trans : THROW_CCE()).get_predIndex_e9gj94_k$();
    } else {
      this.ruleIndex_1 = 0;
      this.predIndex_1 = 0;
    }
    // Inline function 'kotlin.TODO' call
    throw new NotImplementedError();
  }
  protoOf(FailedPredicateException).get_predicate_ds2702_k$ = function () {
    return this.predicate_1;
  };
  protoOf(FailedPredicateException).set_ruleIndex_ooco9b_k$ = function (_set____db54di) {
    this.ruleIndex_1 = _set____db54di;
  };
  protoOf(FailedPredicateException).get_ruleIndex_qf7nn7_k$ = function () {
    return this.ruleIndex_1;
  };
  protoOf(FailedPredicateException).set_predIndex_b6f98s_k$ = function (_set____db54di) {
    this.predIndex_1 = _set____db54di;
  };
  protoOf(FailedPredicateException).get_predIndex_e9gj94_k$ = function () {
    return this.predIndex_1;
  };
  function formatMessage(predicate, message) {
    return message == null ? 'failed predicate: {' + predicate + '}?' : message;
  }
  function InputMismatchException_init_$Init$(recognizer, $this) {
    RecognitionException.call($this, recognizer, ensureNotNull(recognizer.readInputStream_cn8ozw_k$()), ensureNotNull(recognizer.get_context_h02k06_k$()));
    InputMismatchException.call($this);
    $this.set_offendingToken_nurcwg_k$(recognizer.get_currentToken_snzadl_k$());
    return $this;
  }
  function InputMismatchException_init_$Create$(recognizer) {
    var tmp = InputMismatchException_init_$Init$(recognizer, objectCreate(protoOf(InputMismatchException)));
    captureStack(tmp, InputMismatchException_init_$Create$);
    return tmp;
  }
  function InputMismatchException_init_$Init$_0(recognizer, state, ctx, $this) {
    RecognitionException.call($this, recognizer, ensureNotNull(recognizer.readInputStream_cn8ozw_k$()), ctx);
    InputMismatchException.call($this);
    $this.set_offendingState_8paib4_k$(state);
    $this.set_offendingToken_nurcwg_k$(recognizer.get_currentToken_snzadl_k$());
    return $this;
  }
  function InputMismatchException_init_$Create$_0(recognizer, state, ctx) {
    var tmp = InputMismatchException_init_$Init$_0(recognizer, state, ctx, objectCreate(protoOf(InputMismatchException)));
    captureStack(tmp, InputMismatchException_init_$Create$_0);
    return tmp;
  }
  function InputMismatchException() {
    captureStack(this, InputMismatchException);
  }
  function Companion_2() {
    Companion_instance_2 = this;
    this.EOF_1 = -1;
    this.UNKNOWN_SOURCE_NAME_1 = '<unknown>';
  }
  protoOf(Companion_2).get_EOF_18juz1_k$ = function () {
    return this.EOF_1;
  };
  protoOf(Companion_2).get_UNKNOWN_SOURCE_NAME_q07nin_k$ = function () {
    return this.UNKNOWN_SOURCE_NAME_1;
  };
  var Companion_instance_2;
  function Companion_getInstance_3() {
    if (Companion_instance_2 == null)
      new Companion_2();
    return Companion_instance_2;
  }
  function IntStream() {
  }
  function Lexer_init_$Init$($this) {
    Recognizer.call($this);
    Lexer.call($this);
    return $this;
  }
  function Lexer_init_$Create$() {
    return Lexer_init_$Init$(objectCreate(protoOf(Lexer)));
  }
  function Lexer_init_$Init$_0(input, $this) {
    Recognizer.call($this);
    Lexer.call($this);
    $this.set_inputStream_r7w9qf_k$(input);
    $this._tokenFactorySourcePair_1 = new Pair($this, input);
    return $this;
  }
  function Lexer_init_$Create$_0(input) {
    return Lexer_init_$Init$_0(input, objectCreate(protoOf(Lexer)));
  }
  function Companion_3() {
    Companion_instance_3 = this;
    this.DEFAULT_MODE_1 = 0;
    this.MORE_1 = -2;
    this.SKIP_1 = -3;
    this.DEFAULT_TOKEN_CHANNEL_1 = Companion_getInstance_6().get_DEFAULT_CHANNEL_1pytd0_k$();
    this.HIDDEN_1 = Companion_getInstance_6().get_HIDDEN_CHANNEL_yz0zvt_k$();
    this.MIN_CHAR_VALUE_1 = 0;
    this.MAX_CHAR_VALUE_1 = 1114111;
  }
  protoOf(Companion_3).get_DEFAULT_MODE_wljm16_k$ = function () {
    return this.DEFAULT_MODE_1;
  };
  protoOf(Companion_3).get_MORE_wo5i1q_k$ = function () {
    return this.MORE_1;
  };
  protoOf(Companion_3).get_SKIP_wo98so_k$ = function () {
    return this.SKIP_1;
  };
  protoOf(Companion_3).get_DEFAULT_TOKEN_CHANNEL_ki3zxy_k$ = function () {
    return this.DEFAULT_TOKEN_CHANNEL_1;
  };
  protoOf(Companion_3).get_HIDDEN_1dp9hp_k$ = function () {
    return this.HIDDEN_1;
  };
  protoOf(Companion_3).get_MIN_CHAR_VALUE_qqe4ki_k$ = function () {
    return this.MIN_CHAR_VALUE_1;
  };
  protoOf(Companion_3).get_MAX_CHAR_VALUE_xflxqk_k$ = function () {
    return this.MAX_CHAR_VALUE_1;
  };
  var Companion_instance_3;
  function Companion_getInstance_4() {
    if (Companion_instance_3 == null)
      new Companion_3();
    return Companion_instance_3;
  }
  protoOf(Lexer).assignInputStream_fzbcdx_k$ = function (newValue) {
    this.assignInputStream_iy2j62_k$((newValue == null ? true : isInterface(newValue, CharStream)) ? newValue : THROW_CCE());
  };
  protoOf(Lexer).assignInputStream_iy2j62_k$ = function (input) {
    this.set_inputStream_r7w9qf_k$(null);
    this._tokenFactorySourcePair_1 = new Pair(this, null);
    this.reset_5u6xz3_k$();
    this.set_inputStream_r7w9qf_k$((!(input == null) ? isInterface(input, CharStream) : false) ? input : THROW_CCE());
    this._tokenFactorySourcePair_1 = new Pair(this, this.readInputStream_cn8ozw_k$());
  };
  protoOf(Lexer).readInputStream_cn8ozw_k$ = function () {
    var tmp = this.get_inputStream_8u0z9d_k$();
    return (tmp == null ? true : isInterface(tmp, CharStream)) ? tmp : THROW_CCE();
  };
  protoOf(Lexer).set__tokenFactorySourcePair_p9vx19_k$ = function (_set____db54di) {
    this._tokenFactorySourcePair_1 = _set____db54di;
  };
  protoOf(Lexer).get__tokenFactorySourcePair_qthtok_k$ = function () {
    return this._tokenFactorySourcePair_1;
  };
  protoOf(Lexer).set_tokenFactory_1gw38c_k$ = function (_set____db54di) {
    this.tokenFactory_1 = _set____db54di;
  };
  protoOf(Lexer).set_tokenFactory_cwhgf3_k$ = function (_set____db54di) {
    return this.set_tokenFactory_1gw38c_k$(_set____db54di);
  };
  protoOf(Lexer).get_tokenFactory_y0ukgq_k$ = function () {
    return this.tokenFactory_1;
  };
  protoOf(Lexer).set_token_j7tm6k_k$ = function (_set____db54di) {
    this.token_1 = _set____db54di;
  };
  protoOf(Lexer).get_token_iz6pxs_k$ = function () {
    return this.token_1;
  };
  protoOf(Lexer).set__tokenStartCharIndex_5s0o21_k$ = function (_set____db54di) {
    this._tokenStartCharIndex_1 = _set____db54di;
  };
  protoOf(Lexer).get__tokenStartCharIndex_2rpygt_k$ = function () {
    return this._tokenStartCharIndex_1;
  };
  protoOf(Lexer).set__tokenStartLine_wsbwuv_k$ = function (_set____db54di) {
    this._tokenStartLine_1 = _set____db54di;
  };
  protoOf(Lexer).get__tokenStartLine_uxt0zx_k$ = function () {
    return this._tokenStartLine_1;
  };
  protoOf(Lexer).set__tokenStartCharPositionInLine_6a82n9_k$ = function (_set____db54di) {
    this._tokenStartCharPositionInLine_1 = _set____db54di;
  };
  protoOf(Lexer).get__tokenStartCharPositionInLine_ilv421_k$ = function () {
    return this._tokenStartCharPositionInLine_1;
  };
  protoOf(Lexer).set__hitEOF_qimn3q_k$ = function (_set____db54di) {
    this._hitEOF_1 = _set____db54di;
  };
  protoOf(Lexer).get__hitEOF_pxigm7_k$ = function () {
    return this._hitEOF_1;
  };
  protoOf(Lexer).set_channel_qqft0i_k$ = function (_set____db54di) {
    this.channel_1 = _set____db54di;
  };
  protoOf(Lexer).get_channel_dhi7tm_k$ = function () {
    return this.channel_1;
  };
  protoOf(Lexer).set_type_8fmzpr_k$ = function (_set____db54di) {
    this.type_1 = _set____db54di;
  };
  protoOf(Lexer).get_type_wovaf7_k$ = function () {
    return this.type_1;
  };
  protoOf(Lexer).get__modeStack_7dv9e9_k$ = function () {
    return this._modeStack_1;
  };
  protoOf(Lexer).set__mode_d0de2l_k$ = function (_set____db54di) {
    this._mode_1 = _set____db54di;
  };
  protoOf(Lexer).get__mode_inluft_k$ = function () {
    return this._mode_1;
  };
  protoOf(Lexer).set__text_zia4tk_k$ = function (_set____db54di) {
    this._text_1 = _set____db54di;
  };
  protoOf(Lexer).get__text_inq4f7_k$ = function () {
    return this._text_1;
  };
  protoOf(Lexer).get_sourceName_wh0te7_k$ = function () {
    return ensureNotNull(ensureNotNull(this.get_inputStream_8u0z9d_k$()).get_sourceName_wh0te7_k$());
  };
  protoOf(Lexer).set_line_45vtmf_k$ = function (line) {
    ensureNotNull(this.get_interpreter_jbbcvj_k$()).set_line_45vtmf_k$(line);
  };
  protoOf(Lexer).get_line_wopum5_k$ = function () {
    return ensureNotNull(this.get_interpreter_jbbcvj_k$()).get_line_wopum5_k$();
  };
  protoOf(Lexer).set_charPositionInLine_k90ur7_k$ = function (charPositionInLine) {
    ensureNotNull(this.get_interpreter_jbbcvj_k$()).set_charPositionInLine_k90ur7_k$(charPositionInLine);
  };
  protoOf(Lexer).get_charPositionInLine_2wqse7_k$ = function () {
    return ensureNotNull(this.get_interpreter_jbbcvj_k$()).get_charPositionInLine_2wqse7_k$();
  };
  protoOf(Lexer).get_charIndex_y0sl0z_k$ = function () {
    return ensureNotNull(this.get_inputStream_8u0z9d_k$()).index_1nqriq_k$();
  };
  protoOf(Lexer).set_text_oy06f4_k$ = function (text) {
    this._text_1 = text;
  };
  protoOf(Lexer).get_text_wouvsm_k$ = function () {
    var tmp;
    if (!(this._text_1 == null)) {
      tmp = ensureNotNull(this._text_1);
    } else {
      tmp = ensureNotNull(this.get_interpreter_jbbcvj_k$()).getText_k6pxlr_k$(ensureNotNull(this.readInputStream_cn8ozw_k$()));
    }
    return tmp;
  };
  protoOf(Lexer).get_channelNames_2xl2ry_k$ = function () {
    return null;
  };
  protoOf(Lexer).get_modeNames_p6tp38_k$ = function () {
    return null;
  };
  protoOf(Lexer).get_tokenNames_iriaw8_k$ = function () {
    return null;
  };
  protoOf(Lexer).get_allTokens_1rt04y_k$ = function () {
    var tokens = ArrayList_init_$Create$_0();
    var t = this.nextToken_jykgjq_k$();
    while (!(ensureNotNull(t).get_type_wovaf7_k$() === Companion_getInstance_6().get_EOF_18juz1_k$())) {
      tokens.add_utx5q5_k$(t);
      t = this.nextToken_jykgjq_k$();
    }
    return tokens;
  };
  protoOf(Lexer).reset_5u6xz3_k$ = function () {
    if (!(this.get_inputStream_8u0z9d_k$() == null)) {
      ensureNotNull(this.get_inputStream_8u0z9d_k$()).seek_a2e6fk_k$(0);
    }
    this.token_1 = null;
    this.type_1 = Companion_getInstance_6().get_INVALID_TYPE_iyehat_k$();
    this.channel_1 = Companion_getInstance_6().get_DEFAULT_CHANNEL_1pytd0_k$();
    this._tokenStartCharIndex_1 = -1;
    this._tokenStartCharPositionInLine_1 = -1;
    this._tokenStartLine_1 = -1;
    this._text_1 = null;
    this._hitEOF_1 = false;
    this._mode_1 = Companion_getInstance_4().DEFAULT_MODE_1;
    this._modeStack_1.clear_j9egeb_k$();
    ensureNotNull(this.get_interpreter_jbbcvj_k$()).reset_5u6xz3_k$();
  };
  protoOf(Lexer).nextToken_jykgjq_k$ = function () {
    if (this.get_inputStream_8u0z9d_k$() == null) {
      throw IllegalStateException_init_$Create$('nextToken requires a non-null input stream.');
    }
    var tokenStartMarker = ensureNotNull(this.get_inputStream_8u0z9d_k$()).mark_1zob1_k$();
    try {
      outer: while (true) {
        if (this._hitEOF_1) {
          this.emitEOF_qyns2f_k$();
          return ensureNotNull(this.token_1);
        }
        this.token_1 = null;
        this.channel_1 = Companion_getInstance_6().get_DEFAULT_CHANNEL_1pytd0_k$();
        this._tokenStartCharIndex_1 = ensureNotNull(this.get_inputStream_8u0z9d_k$()).index_1nqriq_k$();
        this._tokenStartCharPositionInLine_1 = ensureNotNull(this.get_interpreter_jbbcvj_k$()).get_charPositionInLine_2wqse7_k$();
        this._tokenStartLine_1 = ensureNotNull(this.get_interpreter_jbbcvj_k$()).get_line_wopum5_k$();
        this._text_1 = null;
        do {
          this.type_1 = Companion_getInstance_6().get_INVALID_TYPE_iyehat_k$();
          var ttype;
          try {
            ttype = ensureNotNull(this.get_interpreter_jbbcvj_k$()).match_tj9bnd_k$(ensureNotNull(this.readInputStream_cn8ozw_k$()), this._mode_1);
          } catch ($p) {
            if ($p instanceof LexerNoViableAltException) {
              var e = $p;
              this.notifyListeners_ijjd0t_k$(e);
              this.recover_s1czl_k$(e);
              ttype = Companion_getInstance_4().SKIP_1;
            } else {
              throw $p;
            }
          }
          if (ensureNotNull(this.get_inputStream_8u0z9d_k$()).LA_figb43_k$(1) === Companion_getInstance_3().get_EOF_18juz1_k$()) {
            this._hitEOF_1 = true;
          }
          if (this.type_1 === Companion_getInstance_6().get_INVALID_TYPE_iyehat_k$())
            this.type_1 = ttype;
          if (this.type_1 === Companion_getInstance_4().SKIP_1) {
            continue outer;
          }
        }
         while (this.type_1 === Companion_getInstance_4().MORE_1);
        if (this.token_1 == null) {
          this.emit_1ut3n_k$();
        }
        return ensureNotNull(this.token_1);
      }
    }finally {
      ensureNotNull(this.get_inputStream_8u0z9d_k$()).release_4x1eox_k$(tokenStartMarker);
    }
  };
  protoOf(Lexer).skip_xtts29_k$ = function () {
    this.type_1 = Companion_getInstance_4().SKIP_1;
  };
  protoOf(Lexer).more_hji0l7_k$ = function () {
    this.type_1 = Companion_getInstance_4().MORE_1;
  };
  protoOf(Lexer).mode_9dr98l_k$ = function (m) {
    this._mode_1 = m;
  };
  protoOf(Lexer).pushMode_vjt4wb_k$ = function (m) {
    if (Companion_getInstance_16().get_debug_iq7ga2_k$()) {
      println('pushMode ' + m);
    }
    this._modeStack_1.push_w5xqdu_k$(this._mode_1);
    this.mode_9dr98l_k$(m);
  };
  protoOf(Lexer).popMode_6j8zfw_k$ = function () {
    if (this._modeStack_1.get_isEmpty_zauvru_k$())
      throw RuntimeException_init_$Create$();
    if (Companion_getInstance_16().get_debug_iq7ga2_k$()) {
      outMessage('popMode back to ' + this._modeStack_1.peek_21nx7_k$());
    }
    this.mode_9dr98l_k$(this._modeStack_1.pop_2dsh_k$());
    return this._mode_1;
  };
  protoOf(Lexer).emit_rfqf2i_k$ = function (token) {
    this.token_1 = token;
  };
  protoOf(Lexer).emit_1ut3n_k$ = function () {
    var t = this.get_tokenFactory_y0ukgq_k$().create_gzkfps_k$(ensureNotNull(this._tokenFactorySourcePair_1), this.type_1, this._text_1, this.channel_1, this._tokenStartCharIndex_1, this.get_charIndex_y0sl0z_k$() - 1 | 0, this._tokenStartLine_1, this._tokenStartCharPositionInLine_1);
    this.emit_rfqf2i_k$(t);
    return t;
  };
  protoOf(Lexer).emitEOF_qyns2f_k$ = function () {
    var cpos = this.get_charPositionInLine_2wqse7_k$();
    var line = this.get_line_wopum5_k$();
    var eof = this.get_tokenFactory_y0ukgq_k$().create_gzkfps_k$(ensureNotNull(this._tokenFactorySourcePair_1), Companion_getInstance_6().get_EOF_18juz1_k$(), null, Companion_getInstance_6().get_DEFAULT_CHANNEL_1pytd0_k$(), ensureNotNull(this.get_inputStream_8u0z9d_k$()).index_1nqriq_k$(), ensureNotNull(this.get_inputStream_8u0z9d_k$()).index_1nqriq_k$() - 1 | 0, line, cpos);
    this.emit_rfqf2i_k$(eof);
    return eof;
  };
  protoOf(Lexer).recover_s1czl_k$ = function (e) {
    if (!(ensureNotNull(this.get_inputStream_8u0z9d_k$()).LA_figb43_k$(1) === Companion_getInstance_3().get_EOF_18juz1_k$())) {
      ensureNotNull(this.get_interpreter_jbbcvj_k$()).consume_txw6y0_k$(ensureNotNull(this.readInputStream_cn8ozw_k$()));
    }
  };
  protoOf(Lexer).notifyListeners_ijjd0t_k$ = function (e) {
    var text = ensureNotNull(this.readInputStream_cn8ozw_k$()).getText_dijk8r_k$(Companion_getInstance_31().of_doci3b_k$(this._tokenStartCharIndex_1, ensureNotNull(this.get_inputStream_8u0z9d_k$()).index_1nqriq_k$()));
    var msg = "token recognition error at: '" + this.getErrorDisplay_5n299m_k$(text) + "'";
    var listener = this.get_errorListenerDispatch_9mxi9f_k$();
    listener.syntaxError_ryz3s7_k$(this, null, this._tokenStartLine_1, this._tokenStartCharPositionInLine_1, msg, e);
  };
  protoOf(Lexer).getErrorDisplay_5n299m_k$ = function (s) {
    var buf = StringBuilder_init_$Create$();
    var indexedObject = asCharArray(s);
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var c = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      buf.append_22ad7x_k$(this.getErrorDisplay_ia0tvs_k$(Char__toInt_impl_vasixd(c)));
    }
    return buf.toString();
  };
  protoOf(Lexer).getErrorDisplay_ia0tvs_k$ = function (c) {
    var s = toString_0(numberToChar(c));
    if (c === Companion_getInstance_6().get_EOF_18juz1_k$())
      s = '<EOF>';
    else if (c === 10)
      s = '\\n';
    else if (c === 9)
      s = '\\t';
    else if (c === 13)
      s = '\\r';
    return s;
  };
  protoOf(Lexer).getCharErrorDisplay_ak5dsi_k$ = function (c) {
    var s = this.getErrorDisplay_ia0tvs_k$(c);
    return "'" + s + "'";
  };
  protoOf(Lexer).recover_9ghhqu_k$ = function (re) {
    ensureNotNull(this.get_inputStream_8u0z9d_k$()).consume_sos6hg_k$();
  };
  function Lexer() {
    Companion_getInstance_4();
    this._tokenFactorySourcePair_1 = null;
    this.tokenFactory_1 = Companion_getInstance_2().get_DEFAULT_wccqmg_k$();
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
  function LexerNoViableAltException(lexer, input, startIndex, deadEndConfigs) {
    RecognitionException.call(this, lexer, input, null);
    captureStack(this, LexerNoViableAltException);
    this.startIndex_1 = startIndex;
    this.deadEndConfigs_1 = deadEndConfigs;
  }
  protoOf(LexerNoViableAltException).get_startIndex_oi1lp5_k$ = function () {
    return this.startIndex_1;
  };
  protoOf(LexerNoViableAltException).get_deadEndConfigs_re3azh_k$ = function () {
    return this.deadEndConfigs_1;
  };
  protoOf(LexerNoViableAltException).get_inputStream_8u0z9d_k$ = function () {
    var tmp = protoOf(RecognitionException).get_inputStream_8u0z9d_k$.call(this);
    return isInterface(tmp, CharStream) ? tmp : THROW_CCE();
  };
  protoOf(LexerNoViableAltException).toString = function () {
    var symbol = '';
    if (this.startIndex_1 >= 0 ? this.startIndex_1 < this.get_inputStream_8u0z9d_k$().size_23och_k$() : false) {
      symbol = this.get_inputStream_8u0z9d_k$().getText_dijk8r_k$(Companion_getInstance_31().of_doci3b_k$(this.startIndex_1, this.startIndex_1));
      symbol = Utils_getInstance().escapeWhitespace_j1avd_k$(symbol, false);
    }
    return "LexerNoViableAltException('" + symbol + "')";
  };
  function NoViableAltException(recognizer, input, startToken, offendingToken, deadEndConfigs, ctx) {
    var tmp;
    if (input === VOID) {
      var tmp_0 = recognizer.readInputStream_cn8ozw_k$();
      tmp = (tmp_0 == null ? true : isInterface(tmp_0, TokenStream)) ? tmp_0 : THROW_CCE();
    } else {
      tmp = input;
    }
    input = tmp;
    startToken = startToken === VOID ? recognizer.get_currentToken_snzadl_k$() : startToken;
    offendingToken = offendingToken === VOID ? recognizer.get_currentToken_snzadl_k$() : offendingToken;
    deadEndConfigs = deadEndConfigs === VOID ? null : deadEndConfigs;
    ctx = ctx === VOID ? recognizer.get_context_h02k06_k$() : ctx;
    RecognitionException.call(this, recognizer, ensureNotNull(input), ensureNotNull(ctx));
    captureStack(this, NoViableAltException);
    this.startToken_1 = startToken;
    this.deadEndConfigs_1 = deadEndConfigs;
    this.set_offendingToken_nurcwg_k$(offendingToken);
  }
  protoOf(NoViableAltException).get_startToken_oo44e8_k$ = function () {
    return this.startToken_1;
  };
  protoOf(NoViableAltException).get_deadEndConfigs_re3azh_k$ = function () {
    return this.deadEndConfigs_1;
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
    this.assignInputStream_fzbcdx_k$(input);
  }
  protoOf(Parser).assignInputStream_fzbcdx_k$ = function (newValue) {
    this.set_inputStream_r7w9qf_k$(newValue);
  };
  protoOf(Parser).readInputStream_cn8ozw_k$ = function () {
    return this.get_inputStream_8u0z9d_k$();
  };
  protoOf(Parser).set_errorHandler_x9ni9j_k$ = function (_set____db54di) {
    this.errorHandler_1 = _set____db54di;
  };
  protoOf(Parser).get_errorHandler_k3vn8r_k$ = function () {
    return this.errorHandler_1;
  };
  protoOf(Parser).set__input_ym8gjo_k$ = function (_set____db54di) {
    this._input_1 = _set____db54di;
  };
  protoOf(Parser).get__input_a0p7tg_k$ = function () {
    return this._input_1;
  };
  protoOf(Parser).get__precedenceStack_x6kvfs_k$ = function () {
    return this._precedenceStack_1;
  };
  protoOf(Parser).set_context_vtsh0v_k$ = function (_set____db54di) {
    this.context_1 = _set____db54di;
  };
  protoOf(Parser).get_context_h02k06_k$ = function () {
    return this.context_1;
  };
  protoOf(Parser).set_buildParseTree_m3j9dh_k$ = function (_set____db54di) {
    this.buildParseTree_1 = _set____db54di;
  };
  protoOf(Parser).get_buildParseTree_qpa97w_k$ = function () {
    return this.buildParseTree_1;
  };
  protoOf(Parser).set__parseListeners_83bafv_k$ = function (_set____db54di) {
    this._parseListeners_1 = _set____db54di;
  };
  protoOf(Parser).get__parseListeners_28khz2_k$ = function () {
    return this._parseListeners_1;
  };
  protoOf(Parser).set_numberOfSyntaxErrors_65djj1_k$ = function (_set____db54di) {
    this.numberOfSyntaxErrors_1 = _set____db54di;
  };
  protoOf(Parser).get_numberOfSyntaxErrors_e82549_k$ = function () {
    return this.numberOfSyntaxErrors_1;
  };
  protoOf(Parser).set_isMatchedEOF_xfne2e_k$ = function (_set____db54di) {
    this.isMatchedEOF_1 = _set____db54di;
  };
  protoOf(Parser).get_isMatchedEOF_coswb_k$ = function () {
    return this.isMatchedEOF_1;
  };
  protoOf(Parser).get_parseListeners_x5b86j_k$ = function () {
    return this._parseListeners_1;
  };
  protoOf(Parser).set_tokenFactory_cwhgf3_k$ = function (factory) {
    ensureNotNull(ensureNotNull(this._input_1).get_tokenSource_auscfp_k$()).set_tokenFactory_cwhgf3_k$(factory);
  };
  protoOf(Parser).get_tokenFactory_y0ukgq_k$ = function () {
    return ensureNotNull(ensureNotNull(this._input_1).get_tokenSource_auscfp_k$()).get_tokenFactory_y0ukgq_k$();
  };
  protoOf(Parser).set_tokenStream_llv3i0_k$ = function (input) {
    this._input_1 = null;
    this.reset_5u6xz3_k$();
    this._input_1 = input;
  };
  protoOf(Parser).get_tokenStream_as3k40_k$ = function () {
    return this._input_1;
  };
  protoOf(Parser).get_currentToken_snzadl_k$ = function () {
    return ensureNotNull(this._input_1).LT_lwif2o_k$(1);
  };
  protoOf(Parser).get_precedence_hj68vh_k$ = function () {
    var tmp;
    if (this._precedenceStack_1.get_isEmpty_zauvru_k$()) {
      tmp = -1;
    } else {
      tmp = this._precedenceStack_1.peek_21nx7_k$();
    }
    return tmp;
  };
  protoOf(Parser).get_expectedTokens_qw7szf_k$ = function () {
    return this.get_atn_18j9am_k$().getExpectedTokens_ot41du_k$(this.get_state_iypx7s_k$(), this.context_1);
  };
  protoOf(Parser).get_ruleInvocationStack_rq3771_k$ = function () {
    return this.getRuleInvocationStack_fo0nfs_k$(this.context_1);
  };
  protoOf(Parser).get_dfaStrings_xocvf8_k$ = function () {
    // Inline function 'com.strumenta.kotlinmultiplatform.synchronized' call
    ensureNotNull(this.get_interpreter_jbbcvj_k$()).get_decisionToDFA_9qhkht_k$();
    var s = ArrayList_init_$Create$_0();
    var inductionVariable = 0;
    var last = ensureNotNull(this.get_interpreter_jbbcvj_k$()).get_decisionToDFA_9qhkht_k$().length;
    if (inductionVariable < last)
      do {
        var d = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var dfa = ensureNotNull(this.get_interpreter_jbbcvj_k$()).get_decisionToDFA_9qhkht_k$()[d];
        s.add_utx5q5_k$(ensureNotNull(dfa.toString_vjubf0_k$(this.get_vocabulary_zijn9t_k$())));
      }
       while (inductionVariable < last);
    return s;
  };
  protoOf(Parser).get_sourceName_wh0te7_k$ = function () {
    return ensureNotNull(ensureNotNull(this._input_1).get_sourceName_wh0te7_k$());
  };
  protoOf(Parser).get_parseInfo_lt1j1k_k$ = function () {
    var interp = this.get_interpreter_jbbcvj_k$();
    var tmp;
    if (interp instanceof ProfilingATNSimulator) {
      tmp = new ParseInfo(interp instanceof ProfilingATNSimulator ? interp : THROW_CCE());
    } else {
      tmp = null;
    }
    return tmp;
  };
  protoOf(Parser).reset_5u6xz3_k$ = function () {
    // Inline function 'kotlin.TODO' call
    throw new NotImplementedError();
  };
  protoOf(Parser).match_xgh3il_k$ = function (ttype) {
    var t = this.get_currentToken_snzadl_k$();
    if (ensureNotNull(t).get_type_wovaf7_k$() === ttype) {
      if (ttype === Companion_getInstance_6().get_EOF_18juz1_k$()) {
        this.isMatchedEOF_1 = true;
      }
      this.errorHandler_1.reportMatch_ky9kge_k$(this);
      this.consume_fqiakc_k$();
    } else {
      t = this.errorHandler_1.recoverInline_78y4oe_k$(this);
      if (this.buildParseTree_1 ? t.get_tokenIndex_iu15pa_k$() === -1 : false) {
        ensureNotNull(this.context_1).addErrorNode_fh198o_k$(this.createErrorNode_sc9rn0_k$(this.context_1, t));
      }
    }
    return t;
  };
  protoOf(Parser).matchWildcard_r5k9mn_k$ = function () {
    var t = this.get_currentToken_snzadl_k$();
    if (ensureNotNull(t).get_type_wovaf7_k$() > 0) {
      this.errorHandler_1.reportMatch_ky9kge_k$(this);
      this.consume_fqiakc_k$();
    } else {
      t = this.errorHandler_1.recoverInline_78y4oe_k$(this);
      if (this.buildParseTree_1 ? t.get_tokenIndex_iu15pa_k$() === -1 : false) {
        ensureNotNull(this.context_1).addErrorNode_fh198o_k$(this.createErrorNode_sc9rn0_k$(this.context_1, t));
      }
    }
    return t;
  };
  protoOf(Parser).addParseListener_9r0lfo_k$ = function (listener) {
    this._parseListeners_1.add_utx5q5_k$(listener);
  };
  protoOf(Parser).removeParseListener_wl77hb_k$ = function (listener) {
    this._parseListeners_1.remove_cedx0m_k$(listener);
  };
  protoOf(Parser).removeParseListeners_uo2qhs_k$ = function () {
    this._parseListeners_1.clear_j9egeb_k$();
  };
  protoOf(Parser).triggerEnterRuleEvent_thubym_k$ = function () {
    var tmp0_iterator = this._parseListeners_1.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var listener = tmp0_iterator.next_20eer_k$();
      listener.enterEveryRule_b6dz77_k$(ensureNotNull(this.context_1));
      ensureNotNull(this.context_1).enterRule_9ifvwy_k$(listener);
    }
  };
  protoOf(Parser).triggerExitRuleEvent_m7gmjs_k$ = function () {
    var inductionVariable = this._parseListeners_1.get_size_woubt6_k$() - 1 | 0;
    if (0 <= inductionVariable)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + -1 | 0;
        var listener = this._parseListeners_1.get_c1px32_k$(i);
        ensureNotNull(this.context_1).exitRule_2iuazs_k$(listener);
        listener.exitEveryRule_gmt1jn_k$(ensureNotNull(this.context_1));
      }
       while (0 <= inductionVariable);
  };
  protoOf(Parser).notifyErrorListeners_glk162_k$ = function (msg) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!(this.get_currentToken_snzadl_k$() == null)) {
      // Inline function 'kotlin.require.<anonymous>' call
      var message = 'Failed requirement.';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    this.notifyErrorListeners_nwrtmg_k$(ensureNotNull(this.get_currentToken_snzadl_k$()), msg, null);
  };
  protoOf(Parser).notifyErrorListeners_nwrtmg_k$ = function (offendingToken, msg, e) {
    this.numberOfSyntaxErrors_1 = this.numberOfSyntaxErrors_1 + 1 | 0;
    var line = -1;
    var charPositionInLine = -1;
    line = offendingToken.get_line_wopum5_k$();
    charPositionInLine = offendingToken.get_charPositionInLine_2wqse7_k$();
    var listener = this.get_errorListenerDispatch_9mxi9f_k$();
    listener.syntaxError_ryz3s7_k$(this, offendingToken, line, charPositionInLine, msg, e);
  };
  protoOf(Parser).consume_fqiakc_k$ = function () {
    var o = this.get_currentToken_snzadl_k$();
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!(o == null)) {
      // Inline function 'org.antlr.v4.kotlinruntime.Parser.consume.<anonymous>' call
      var message = 'current token must not be null when consuming';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    if (!(ensureNotNull(o).get_type_wovaf7_k$() === Companion_getInstance_5().get_EOF_18juz1_k$())) {
      ensureNotNull(this.get_inputStream_8u0z9d_k$()).consume_sos6hg_k$();
    }
    // Inline function 'kotlin.collections.isNotEmpty' call
    var hasListener = !this._parseListeners_1.isEmpty_y1axqb_k$();
    if (this.buildParseTree_1 ? true : hasListener) {
      if (this.errorHandler_1.inErrorRecoveryMode_g7wlm4_k$(this)) {
        var node = ensureNotNull(this.context_1).addErrorNode_fh198o_k$(this.createErrorNode_sc9rn0_k$(this.context_1, o));
        var tmp0_iterator = this._parseListeners_1.iterator_jk1svi_k$();
        while (tmp0_iterator.hasNext_bitz1p_k$()) {
          var listener = tmp0_iterator.next_20eer_k$();
          listener.visitErrorNode_tah3o2_k$(node);
        }
      } else {
        var node_0 = ensureNotNull(this.context_1).addChild_mv8nht_k$(this.createTerminalNode_q9b1q8_k$(this.context_1, o));
        var tmp1_iterator = this._parseListeners_1.iterator_jk1svi_k$();
        while (tmp1_iterator.hasNext_bitz1p_k$()) {
          var listener_0 = tmp1_iterator.next_20eer_k$();
          listener_0.visitTerminal_s8ttxv_k$(node_0);
        }
      }
    }
    return o;
  };
  protoOf(Parser).createTerminalNode_q9b1q8_k$ = function (parent, t) {
    return new TerminalNodeImpl(t);
  };
  protoOf(Parser).createErrorNode_sc9rn0_k$ = function (parent, t) {
    return new ErrorNodeImpl(t);
  };
  protoOf(Parser).addContextToParseTree_icb4y0_k$ = function () {
    var tmp = ensureNotNull(this.context_1).readParent_9zdz4w_k$();
    var parent = (tmp == null ? true : tmp instanceof ParserRuleContext) ? tmp : THROW_CCE();
    if (!(parent == null)) {
      parent.addChild_e7fr8k_k$(ensureNotNull(this.context_1));
    }
  };
  protoOf(Parser).enterRule_j61rfs_k$ = function (localctx, state, ruleIndex) {
    this.set_state_rjd8d0_k$(state);
    this.context_1 = localctx;
    ensureNotNull(this.context_1).set_start_iip0t1_k$(ensureNotNull(this._input_1).LT_lwif2o_k$(1));
    if (this.buildParseTree_1) {
      this.addContextToParseTree_icb4y0_k$();
    }
    this.triggerEnterRuleEvent_thubym_k$();
  };
  protoOf(Parser).exitRule_qtu1zq_k$ = function () {
    if (this.isMatchedEOF_1) {
      ensureNotNull(this.context_1).set_stop_a5af0v_k$(ensureNotNull(this._input_1).LT_lwif2o_k$(1));
    } else {
      ensureNotNull(this.context_1).set_stop_a5af0v_k$(ensureNotNull(this._input_1).LT_lwif2o_k$(-1));
    }
    this.triggerExitRuleEvent_m7gmjs_k$();
    this.set_state_rjd8d0_k$(ensureNotNull(this.context_1).get_invokingState_mn8pn1_k$());
    var tmp = this;
    var tmp_0 = ensureNotNull(this.context_1).readParent_9zdz4w_k$();
    tmp.context_1 = (tmp_0 == null ? true : tmp_0 instanceof ParserRuleContext) ? tmp_0 : THROW_CCE();
  };
  protoOf(Parser).enterOuterAlt_2k6dcu_k$ = function (localctx, altNum) {
    localctx.set_altNumber_2mydvx_k$(altNum);
    if (this.buildParseTree_1 ? !(this.context_1 === localctx) : false) {
      var tmp = ensureNotNull(this.context_1).readParent_9zdz4w_k$();
      var parent = (tmp == null ? true : tmp instanceof ParserRuleContext) ? tmp : THROW_CCE();
      if (!(parent == null)) {
        parent.removeLastChild_xbf1e6_k$();
        parent.addChild_e7fr8k_k$(localctx);
      }
    }
    this.context_1 = localctx;
  };
  protoOf(Parser).enterRecursionRule_4wjoam_k$ = function (localctx, ruleIndex) {
    this.enterRecursionRule_krxrum_k$(localctx, ensureNotNull(ensureNotNull(this.get_atn_18j9am_k$().get_ruleToStartState_u6xedr_k$())[ruleIndex]).get_stateNumber_v90a1d_k$(), ruleIndex, 0);
  };
  protoOf(Parser).enterRecursionRule_krxrum_k$ = function (localctx, state, ruleIndex, precedence) {
    this.set_state_rjd8d0_k$(state);
    this._precedenceStack_1.push_w5xqdu_k$(precedence);
    this.context_1 = localctx;
    ensureNotNull(this.context_1).set_start_iip0t1_k$(ensureNotNull(this._input_1).LT_lwif2o_k$(1));
    this.triggerEnterRuleEvent_thubym_k$();
  };
  protoOf(Parser).pushNewRecursionContext_19rg6f_k$ = function (localctx, state, ruleIndex) {
    var previous = this.context_1;
    ensureNotNull(previous).assignParent_r3yk52_k$(localctx);
    ensureNotNull(previous).set_invokingState_mff15j_k$(state);
    ensureNotNull(previous).set_stop_a5af0v_k$(ensureNotNull(this._input_1).LT_lwif2o_k$(-1));
    this.context_1 = localctx;
    ensureNotNull(this.context_1).set_start_iip0t1_k$(ensureNotNull(previous).get_start_iypx6h_k$());
    if (this.buildParseTree_1) {
      ensureNotNull(this.context_1).addChild_e7fr8k_k$(previous);
    }
    this.triggerEnterRuleEvent_thubym_k$();
  };
  protoOf(Parser).unrollRecursionContexts_yiwc0d_k$ = function (_parentctx) {
    this._precedenceStack_1.pop_2dsh_k$();
    ensureNotNull(this.context_1).set_stop_a5af0v_k$(ensureNotNull(this._input_1).LT_lwif2o_k$(-1));
    var retctx = this.context_1;
    while (!(this.context_1 === _parentctx)) {
      this.triggerExitRuleEvent_m7gmjs_k$();
      var tmp = this;
      var tmp_0 = ensureNotNull(this.context_1).readParent_9zdz4w_k$();
      tmp.context_1 = (tmp_0 == null ? true : tmp_0 instanceof ParserRuleContext) ? tmp_0 : THROW_CCE();
    }
    ensureNotNull(retctx).assignParent_r3yk52_k$(_parentctx);
    if (this.buildParseTree_1 ? !(_parentctx == null) : false) {
      _parentctx.addChild_e7fr8k_k$(retctx);
    }
  };
  protoOf(Parser).getRuleIndex_fi60vu_k$ = function (ruleName) {
    var ruleIndex = this.get_ruleIndexMap_9l2etr_k$().get_wei43m_k$(ruleName);
    return !(ruleIndex == null) ? ensureNotNull(ruleIndex) : -1;
  };
  protoOf(Parser).getRuleContext_3wxrmr_k$ = function () {
    return this.context_1;
  };
  protoOf(Parser).getRuleInvocationStack_fo0nfs_k$ = function (p) {
    var p_0 = p;
    var ruleNames = this.get_ruleNames_qcosu5_k$();
    var stack = ArrayList_init_$Create$_0();
    while (!(p_0 == null)) {
      var ruleIndex = ensureNotNull(p_0).get_ruleIndex_qf7nn7_k$();
      if (ruleIndex < 0) {
        stack.add_utx5q5_k$('n/a');
      } else {
        stack.add_utx5q5_k$(ensureNotNull(ruleNames)[ruleIndex]);
      }
      p_0 = ensureNotNull(p_0).readParent_9zdz4w_k$();
    }
    return stack;
  };
  function ParserRuleContext_init_$Init$($this) {
    RuleContext_init_$Init$($this);
    ParserRuleContext.call($this);
    return $this;
  }
  function ParserRuleContext_init_$Create$() {
    return ParserRuleContext_init_$Init$(objectCreate(protoOf(ParserRuleContext)));
  }
  function ParserRuleContext_init_$Init$_0(parent, invokingStateNumber, $this) {
    RuleContext_init_$Init$_0(parent, invokingStateNumber, $this);
    ParserRuleContext.call($this);
    return $this;
  }
  function ParserRuleContext_init_$Create$_0(parent, invokingStateNumber) {
    return ParserRuleContext_init_$Init$_0(parent, invokingStateNumber, objectCreate(protoOf(ParserRuleContext)));
  }
  protoOf(ParserRuleContext).set_children_k7wxm_k$ = function (_set____db54di) {
    this.children_1 = _set____db54di;
  };
  protoOf(ParserRuleContext).get_children_4cwbp4_k$ = function () {
    return this.children_1;
  };
  protoOf(ParserRuleContext).get_position_jfponi_k$ = function () {
    return (!(this.start_1 == null) ? !(ensureNotNull(this.stop_1).endPoint_sb0gad_k$() == null) : false) ? new Position(ensureNotNull(this.start_1).startPoint_q8y2lu_k$(), ensureNotNull(ensureNotNull(this.stop_1).endPoint_sb0gad_k$())) : null;
  };
  protoOf(ParserRuleContext).set_start_iip0t1_k$ = function (_set____db54di) {
    this.start_1 = _set____db54di;
  };
  protoOf(ParserRuleContext).get_start_iypx6h_k$ = function () {
    return this.start_1;
  };
  protoOf(ParserRuleContext).set_stop_a5af0v_k$ = function (_set____db54di) {
    this.stop_1 = _set____db54di;
  };
  protoOf(ParserRuleContext).get_stop_woujpn_k$ = function () {
    return this.stop_1;
  };
  protoOf(ParserRuleContext).set_exception_kcssc7_k$ = function (_set____db54di) {
    this.exception_1 = _set____db54di;
  };
  protoOf(ParserRuleContext).get_exception_x0n6w6_k$ = function () {
    return this.exception_1;
  };
  protoOf(ParserRuleContext).assignParent_r3yk52_k$ = function (value) {
    this.set_parent_fndc5z_k$(value);
  };
  protoOf(ParserRuleContext).assignParent_d6hrfj_k$ = function (value) {
    this.assignParent_r3yk52_k$((value == null ? true : value instanceof ParserRuleContext) ? value : THROW_CCE());
  };
  protoOf(ParserRuleContext).get_childCount_1t393w_k$ = function () {
    return !(this.children_1 == null) ? ensureNotNull(this.children_1).get_size_woubt6_k$() : 0;
  };
  protoOf(ParserRuleContext).get_sourceInterval_k8s7pl_k$ = function () {
    if (this.start_1 == null) {
      return Companion_getInstance_31().get_INVALID_pha976_k$();
    }
    var tmp;
    if (this.stop_1 == null ? true : ensureNotNull(this.stop_1).get_tokenIndex_iu15pa_k$() < ensureNotNull(this.start_1).get_tokenIndex_iu15pa_k$()) {
      tmp = Companion_getInstance_31().of_doci3b_k$(ensureNotNull(this.start_1).get_tokenIndex_iu15pa_k$(), ensureNotNull(this.start_1).get_tokenIndex_iu15pa_k$() - 1 | 0);
    } else {
      tmp = Companion_getInstance_31().of_doci3b_k$(ensureNotNull(this.start_1).get_tokenIndex_iu15pa_k$(), ensureNotNull(this.stop_1).get_tokenIndex_iu15pa_k$());
    }
    return tmp;
  };
  protoOf(ParserRuleContext).copyFrom_3m9fn7_k$ = function (ctx) {
    this.set_parent_fndc5z_k$(ctx.get_parent_hy4reb_k$());
    this.set_invokingState_mff15j_k$(ctx.get_invokingState_mn8pn1_k$());
    this.start_1 = ctx.start_1;
    this.stop_1 = ctx.stop_1;
    if (!(ctx.children_1 == null)) {
      this.children_1 = ArrayList_init_$Create$_0();
      var tmp0_iterator = ensureNotNull(ctx.children_1).iterator_jk1svi_k$();
      while (tmp0_iterator.hasNext_bitz1p_k$()) {
        var child = tmp0_iterator.next_20eer_k$();
        if (isInterface(child, ErrorNode)) {
          this.addChild_mv8nht_k$(isInterface(child, ErrorNode) ? child : THROW_CCE());
        }
      }
    }
  };
  protoOf(ParserRuleContext).enterRule_9ifvwy_k$ = function (listener) {
  };
  protoOf(ParserRuleContext).exitRule_2iuazs_k$ = function (listener) {
  };
  protoOf(ParserRuleContext).addAnyChild_44006g_k$ = function (t) {
    if (this.children_1 == null)
      this.children_1 = ArrayList_init_$Create$_0();
    ensureNotNull(this.children_1).add_utx5q5_k$(t);
    return t;
  };
  protoOf(ParserRuleContext).addChild_e7fr8k_k$ = function (ruleInvocation) {
    return this.addAnyChild_44006g_k$(ruleInvocation);
  };
  protoOf(ParserRuleContext).addChild_mv8nht_k$ = function (t) {
    t.assignParent_d6hrfj_k$(this);
    return this.addAnyChild_44006g_k$(t);
  };
  protoOf(ParserRuleContext).addErrorNode_fh198o_k$ = function (errorNode) {
    errorNode.assignParent_d6hrfj_k$(this);
    return this.addAnyChild_44006g_k$(errorNode);
  };
  protoOf(ParserRuleContext).addChild_iqgm9u_k$ = function (matchedToken) {
    var t = new TerminalNodeImpl(matchedToken);
    this.addAnyChild_44006g_k$(t);
    t.assignParent_d6hrfj_k$(this);
    return t;
  };
  protoOf(ParserRuleContext).addErrorNode_9wbo34_k$ = function (badToken) {
    var t = new ErrorNodeImpl(badToken);
    this.addAnyChild_44006g_k$(t);
    t.assignParent_d6hrfj_k$(this);
    return t;
  };
  protoOf(ParserRuleContext).removeLastChild_xbf1e6_k$ = function () {
    if (!(this.children_1 == null)) {
      ensureNotNull(this.children_1).removeAt_6niowx_k$(ensureNotNull(this.children_1).get_size_woubt6_k$() - 1 | 0);
    }
  };
  protoOf(ParserRuleContext).getChild_ffglrm_k$ = function (i) {
    return ((!(this.children_1 == null) ? i >= 0 : false) ? i < ensureNotNull(this.children_1).get_size_woubt6_k$() : false) ? ensureNotNull(this.children_1).get_c1px32_k$(i) : null;
  };
  protoOf(ParserRuleContext).getChild_u9vvq_k$ = function (ctxType, i) {
    if ((this.children_1 == null ? true : i < 0) ? true : i >= ensureNotNull(this.children_1).get_size_woubt6_k$()) {
      return null;
    }
    var j = -1;
    var tmp0_iterator = ensureNotNull(this.children_1).iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var o = tmp0_iterator.next_20eer_k$();
      if (isInstance(ctxType, o)) {
        j = j + 1 | 0;
        if (j === i) {
          return isInterface(o, ParseTree) ? o : THROW_CCE();
        }
      }
    }
    return null;
  };
  protoOf(ParserRuleContext).getToken_xvn471_k$ = function (ttype, i) {
    if ((this.children_1 == null ? true : i < 0) ? true : i >= ensureNotNull(this.children_1).get_size_woubt6_k$()) {
      return null;
    }
    var j = -1;
    var tmp0_iterator = ensureNotNull(this.children_1).iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var o = tmp0_iterator.next_20eer_k$();
      if (isInterface(o, TerminalNode)) {
        var tnode = isInterface(o, TerminalNode) ? o : THROW_CCE();
        var symbol = tnode.get_symbol_jqdfoh_k$();
        if (ensureNotNull(symbol).get_type_wovaf7_k$() === ttype) {
          j = j + 1 | 0;
          if (j === i) {
            return tnode;
          }
        }
      }
    }
    return null;
  };
  protoOf(ParserRuleContext).getTokens_4qvbqw_k$ = function (ttype) {
    if (this.children_1 == null) {
      return emptyList();
    }
    var tokens = null;
    var tmp0_iterator = ensureNotNull(this.children_1).iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var o = tmp0_iterator.next_20eer_k$();
      if (isInterface(o, TerminalNode)) {
        var tnode = isInterface(o, TerminalNode) ? o : THROW_CCE();
        var symbol = tnode.get_symbol_jqdfoh_k$();
        if (ensureNotNull(symbol).get_type_wovaf7_k$() === ttype) {
          if (tokens == null) {
            tokens = ArrayList_init_$Create$_0();
          }
          tokens.add_utx5q5_k$(tnode);
        }
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
  protoOf(ParserRuleContext).getRuleContext_z0o6px_k$ = function (ctxType, i) {
    var tmp = this.getChild_u9vvq_k$(ctxType, i);
    return (tmp == null ? true : tmp instanceof ParserRuleContext) ? tmp : THROW_CCE();
  };
  protoOf(ParserRuleContext).getRuleContexts_tma17a_k$ = function (ctxType) {
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
        tmp.add_utx5q5_k$(o instanceof ParserRuleContext ? o : THROW_CCE());
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
  function _get_delegates__1cr7ur($this) {
    return $this.delegates_1;
  }
  function ProxyErrorListener(delegates) {
    this.delegates_1 = delegates;
    if (this.delegates_1 == null) {
      throw NullPointerException_init_$Create$('delegates');
    }
  }
  protoOf(ProxyErrorListener).syntaxError_ryz3s7_k$ = function (recognizer, offendingSymbol, line, charPositionInLine, msg, e) {
    var tmp0_iterator = ensureNotNull(this.delegates_1).iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var listener = tmp0_iterator.next_20eer_k$();
      listener.syntaxError_ryz3s7_k$(recognizer, offendingSymbol, line, charPositionInLine, msg, e);
    }
  };
  protoOf(ProxyErrorListener).reportAmbiguity_1h0sqe_k$ = function (recognizer, dfa, startIndex, stopIndex, exact, ambigAlts, configs) {
    var tmp0_iterator = ensureNotNull(this.delegates_1).iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var listener = tmp0_iterator.next_20eer_k$();
      listener.reportAmbiguity_1h0sqe_k$(recognizer, dfa, startIndex, stopIndex, exact, ambigAlts, configs);
    }
  };
  protoOf(ProxyErrorListener).reportAttemptingFullContext_bulgyh_k$ = function (recognizer, dfa, startIndex, stopIndex, conflictingAlts, configs) {
    var tmp0_iterator = ensureNotNull(this.delegates_1).iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var listener = tmp0_iterator.next_20eer_k$();
      listener.reportAttemptingFullContext_bulgyh_k$(recognizer, dfa, startIndex, stopIndex, conflictingAlts, configs);
    }
  };
  protoOf(ProxyErrorListener).reportContextSensitivity_r1nc2j_k$ = function (recognizer, dfa, startIndex, stopIndex, prediction, configs) {
    var tmp0_iterator = ensureNotNull(this.delegates_1).iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var listener = tmp0_iterator.next_20eer_k$();
      listener.reportContextSensitivity_r1nc2j_k$(recognizer, dfa, startIndex, stopIndex, prediction, configs);
    }
  };
  function RecognitionException(recognizer, inputStream, ctx, message) {
    message = message === VOID ? null : message;
    RuntimeException_init_$Init$(this);
    captureStack(this, RecognitionException);
    this.recognizer_1 = recognizer;
    this.inputStream_1 = inputStream;
    this.ctx_1 = ctx;
    this.message_1 = message;
    this.offendingToken_1 = null;
    this.offendingState_1 = -1;
    if (!(this.recognizer_1 == null))
      this.offendingState_1 = ensureNotNull(this.recognizer_1).get_state_iypx7s_k$();
  }
  protoOf(RecognitionException).get_recognizer_d2btub_k$ = function () {
    return this.recognizer_1;
  };
  protoOf(RecognitionException).get_inputStream_8u0z9d_k$ = function () {
    return this.inputStream_1;
  };
  protoOf(RecognitionException).get_ctx_18j7sy_k$ = function () {
    return this.ctx_1;
  };
  protoOf(RecognitionException).get_message_h23axq_k$ = function () {
    return this.message_1;
  };
  protoOf(RecognitionException).set_offendingToken_nurcwg_k$ = function (_set____db54di) {
    this.offendingToken_1 = _set____db54di;
  };
  protoOf(RecognitionException).get_offendingToken_c59p3g_k$ = function () {
    return this.offendingToken_1;
  };
  protoOf(RecognitionException).set_offendingState_8paib4_k$ = function (_set____db54di) {
    this.offendingState_1 = _set____db54di;
  };
  protoOf(RecognitionException).get_offendingState_c4swdg_k$ = function () {
    return this.offendingState_1;
  };
  protoOf(RecognitionException).get_expectedTokens_qw7szf_k$ = function () {
    var tmp;
    if (!(this.recognizer_1 == null)) {
      tmp = ensureNotNull(this.recognizer_1).get_atn_18j9am_k$().getExpectedTokens_ot41du_k$(this.offendingState_1, this.ctx_1);
    } else {
      tmp = null;
    }
    return tmp;
  };
  function _get_tokenTypeMapCache__t60ni0($this) {
    return $this.tokenTypeMapCache_1;
  }
  function _get_ruleIndexMapCache__n9elmd($this) {
    return $this.ruleIndexMapCache_1;
  }
  function _get__listeners__19hznv($this) {
    return $this._listeners_1;
  }
  function Companion_4() {
    Companion_instance_4 = this;
    this.EOF_1 = -1;
    this.tokenTypeMapCache_1 = WeakHashMap_init_$Create$();
    this.ruleIndexMapCache_1 = WeakHashMap_init_$Create$();
  }
  protoOf(Companion_4).get_EOF_18juz1_k$ = function () {
    return this.EOF_1;
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
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp._listeners_1 = ArrayList_init_$Create$_0();
    this.interpreter_1 = null;
    this.state_1 = -1;
    this.inputStream_1 = null;
  }
  protoOf(Recognizer).set_interpreter_fc3s1p_k$ = function (_set____db54di) {
    this.interpreter_1 = _set____db54di;
  };
  protoOf(Recognizer).get_interpreter_jbbcvj_k$ = function () {
    return this.interpreter_1;
  };
  protoOf(Recognizer).set_state_rjd8d0_k$ = function (_set____db54di) {
    this.state_1 = _set____db54di;
  };
  protoOf(Recognizer).get_state_iypx7s_k$ = function () {
    return this.state_1;
  };
  protoOf(Recognizer).get_tokenTypeMap_x23pke_k$ = function () {
    var vocabulary = this.get_vocabulary_zijn9t_k$();
    // Inline function 'com.strumenta.kotlinmultiplatform.synchronized' call
    Companion_getInstance_5().tokenTypeMapCache_1;
    var result = Companion_getInstance_5().tokenTypeMapCache_1.get_wei43m_k$(vocabulary);
    if (result == null) {
      var tmp = HashMap_init_$Create$();
      var inductionVariable = 0;
      var last = this.get_atn_18j9am_k$().get_maxTokenType_gnkz54_k$();
      if (inductionVariable <= last)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var literalName = vocabulary.getLiteralName_5t4o50_k$(i);
          if (!(literalName == null)) {
            // Inline function 'kotlin.collections.set' call
            var value = i;
            tmp.put_4fpzoq_k$(literalName, value);
          }
          var symbolicName = vocabulary.getSymbolicName_upuk7v_k$(i);
          if (!(symbolicName == null)) {
            // Inline function 'kotlin.collections.set' call
            var value_0 = i;
            tmp.put_4fpzoq_k$(symbolicName, value_0);
          }
        }
         while (!(i === last));
      // Inline function 'kotlin.collections.set' call
      var value_1 = Companion_getInstance_6().get_EOF_18juz1_k$();
      tmp.put_4fpzoq_k$('EOF', value_1);
      result = toMap(tmp);
      // Inline function 'kotlin.collections.set' call
      var this_0 = Companion_getInstance_5().tokenTypeMapCache_1;
      var value_2 = result;
      this_0.put_4fpzoq_k$(vocabulary, value_2);
    }
    return result;
  };
  protoOf(Recognizer).get_ruleIndexMap_9l2etr_k$ = function () {
    var tmp0_elvis_lhs = this.get_ruleNames_qcosu5_k$();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw UnsupportedOperationException_init_$Create$('The current recognizer does not provide a list of rule names.');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var ruleNames = tmp;
    // Inline function 'com.strumenta.kotlinmultiplatform.synchronized' call
    Companion_getInstance_5().ruleIndexMapCache_1;
    var result = Companion_getInstance_5().ruleIndexMapCache_1.get_wei43m_k$(ruleNames);
    if (result == null) {
      // Inline function 'kotlin.collections.mapIndexed' call
      // Inline function 'kotlin.collections.mapIndexedTo' call
      var destination = ArrayList_init_$Create$(ruleNames.length);
      var index = 0;
      var inductionVariable = 0;
      var last = ruleNames.length;
      while (inductionVariable < last) {
        var item = ruleNames[inductionVariable];
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'org.antlr.v4.kotlinruntime.Recognizer.<get-ruleIndexMap>.<anonymous>.<anonymous>' call
        var tmp1 = index;
        index = tmp1 + 1 | 0;
        var tmp$ret$0 = to(item, tmp1);
        destination.add_utx5q5_k$(tmp$ret$0);
      }
      result = toMap_0(destination);
      // Inline function 'kotlin.collections.set' call
      var this_0 = Companion_getInstance_5().ruleIndexMapCache_1;
      var value = result;
      this_0.put_4fpzoq_k$(ruleNames, value);
    }
    return ensureNotNull(result);
  };
  protoOf(Recognizer).get_serializedATN_e3k7da_k$ = function () {
    throw UnsupportedOperationException_init_$Create$('there is no serialized ATN');
  };
  protoOf(Recognizer).get_parseInfo_lt1j1k_k$ = function () {
    return null;
  };
  protoOf(Recognizer).get_errorListeners_i2njz4_k$ = function () {
    return this._listeners_1;
  };
  protoOf(Recognizer).get_errorListenerDispatch_9mxi9f_k$ = function () {
    return new ProxyErrorListener(this.get_errorListeners_i2njz4_k$());
  };
  protoOf(Recognizer).set_inputStream_r7w9qf_k$ = function (_set____db54di) {
    this.inputStream_1 = _set____db54di;
  };
  protoOf(Recognizer).get_inputStream_8u0z9d_k$ = function () {
    return this.inputStream_1;
  };
  protoOf(Recognizer).getTokenType_s4eymb_k$ = function (tokenName) {
    var ttype = this.get_tokenTypeMap_x23pke_k$().get_wei43m_k$(tokenName);
    return ttype == null ? Companion_getInstance_6().get_INVALID_TYPE_iyehat_k$() : ttype;
  };
  protoOf(Recognizer).getErrorHeader_g58jbp_k$ = function (e) {
    var line = ensureNotNull(e.get_offendingToken_c59p3g_k$()).get_line_wopum5_k$();
    var charPositionInLine = ensureNotNull(e.get_offendingToken_c59p3g_k$()).get_charPositionInLine_2wqse7_k$();
    return 'line ' + line + ':' + charPositionInLine;
  };
  protoOf(Recognizer).getTokenErrorDisplay_158c71_k$ = function (t) {
    if (t == null)
      return '<no token>';
    var s = t.get_text_wouvsm_k$();
    if (s == null) {
      var tmp;
      if (t.get_type_wovaf7_k$() === Companion_getInstance_6().get_EOF_18juz1_k$()) {
        tmp = '<EOF>';
      } else {
        tmp = '<' + t.get_type_wovaf7_k$() + '>';
      }
      s = tmp;
    }
    s = replace(s, '\n', '\\n');
    s = replace(s, '\r', '\\r');
    s = replace(s, '\t', '\\t');
    return "'" + s + "'";
  };
  protoOf(Recognizer).addErrorListener_5xvecb_k$ = function (listener) {
    if (listener == null) {
      throw NullPointerException_init_$Create$('listener cannot be null.');
    }
    this._listeners_1.add_utx5q5_k$(listener);
  };
  protoOf(Recognizer).removeErrorListener_qggqb3_k$ = function (listener) {
    this._listeners_1.remove_cedx0m_k$(listener);
  };
  protoOf(Recognizer).removeErrorListeners_ogvpwr_k$ = function () {
    this._listeners_1.clear_j9egeb_k$();
  };
  protoOf(Recognizer).sempred_qltucy_k$ = function (_localctx, ruleIndex, actionIndex) {
    return true;
  };
  protoOf(Recognizer).precpred_qehpxm_k$ = function (localctx, precedence) {
    return true;
  };
  protoOf(Recognizer).action_jhu5i0_k$ = function (_localctx, ruleIndex, actionIndex) {
  };
  function get_EMPTY_RULECTX() {
    _init_properties_RuleContext_kt__uih0ip();
    return EMPTY_RULECTX;
  }
  var EMPTY_RULECTX;
  function RuleContext_init_$Init$($this) {
    RuleContext.call($this);
    $this.parent_1 = null;
    return $this;
  }
  function RuleContext_init_$Create$() {
    return RuleContext_init_$Init$(objectCreate(protoOf(RuleContext)));
  }
  function RuleContext_init_$Init$_0(parent, invokingState, $this) {
    RuleContext.call($this);
    $this.parent_1 = parent;
    $this.invokingState_1 = invokingState;
    return $this;
  }
  function RuleContext_init_$Create$_0(parent, invokingState) {
    return RuleContext_init_$Init$_0(parent, invokingState, objectCreate(protoOf(RuleContext)));
  }
  protoOf(RuleContext).assignParent_d6hrfj_k$ = function (value) {
    var tmp = this;
    tmp.parent_1 = (value == null ? true : value instanceof RuleContext) ? value : THROW_CCE();
  };
  protoOf(RuleContext).set_parent_fndc5z_k$ = function (_set____db54di) {
    this.parent_1 = _set____db54di;
  };
  protoOf(RuleContext).get_parent_hy4reb_k$ = function () {
    return this.parent_1;
  };
  protoOf(RuleContext).assignParent_rvh4cb_k$ = function (value) {
    this.parent_1 = value;
  };
  protoOf(RuleContext).readParent_9zdz4w_k$ = function () {
    return this.parent_1;
  };
  protoOf(RuleContext).set_invokingState_mff15j_k$ = function (_set____db54di) {
    this.invokingState_1 = _set____db54di;
  };
  protoOf(RuleContext).get_invokingState_mn8pn1_k$ = function () {
    return this.invokingState_1;
  };
  protoOf(RuleContext).get_isEmpty_zauvru_k$ = function () {
    return this.invokingState_1 === -1;
  };
  protoOf(RuleContext).get_sourceInterval_k8s7pl_k$ = function () {
    return Companion_getInstance_31().get_INVALID_pha976_k$();
  };
  protoOf(RuleContext).get_ruleContext_kkgnmy_k$ = function () {
    return this;
  };
  protoOf(RuleContext).get_payload_bqtt23_k$ = function () {
    return this;
  };
  protoOf(RuleContext).get_text_wouvsm_k$ = function () {
    if (this.get_childCount_1t393w_k$() === 0) {
      return '';
    }
    var builder = StringBuilder_init_$Create$();
    var inductionVariable = 0;
    var last = this.get_childCount_1t393w_k$();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        builder.append_22ad7x_k$(ensureNotNull(this.getChild_ffglrm_k$(i)).get_text_wouvsm_k$());
      }
       while (inductionVariable < last);
    return builder.toString();
  };
  protoOf(RuleContext).set_ruleIndex_ooco9b_k$ = function (_set____db54di) {
    this.ruleIndex_1 = _set____db54di;
  };
  protoOf(RuleContext).get_ruleIndex_qf7nn7_k$ = function () {
    return this.ruleIndex_1;
  };
  protoOf(RuleContext).set_altNumber_2mydvx_k$ = function (altNumber) {
  };
  protoOf(RuleContext).get_altNumber_pm6lav_k$ = function () {
    return Companion_getInstance_8().get_INVALID_ALT_NUMBER_idrbu8_k$();
  };
  protoOf(RuleContext).get_childCount_1t393w_k$ = function () {
    return 0;
  };
  protoOf(RuleContext).depth_1kuawz_k$ = function () {
    var n = 0;
    var p = this;
    while (!(p == null)) {
      p = p.parent_1;
      n = n + 1 | 0;
    }
    return n;
  };
  protoOf(RuleContext).getChild_ffglrm_k$ = function (i) {
    return null;
  };
  protoOf(RuleContext).accept_v5118_k$ = function (visitor) {
    return ensureNotNull(visitor.visitChildren_ihv0g_k$(this));
  };
  protoOf(RuleContext).toStringTree_72xwsl_k$ = function (recog) {
    return Trees_getInstance().toStringTree_4p81vn_k$(this, recog);
  };
  protoOf(RuleContext).toStringTree_spkct7_k$ = function (ruleNames) {
    return Trees_getInstance().toStringTree_l5rm4_k$(this, ruleNames);
  };
  protoOf(RuleContext).toStringTree_a6qmui_k$ = function () {
    return this.toStringTree_spkct7_k$((null == null ? true : isInterface(null, List)) ? null : THROW_CCE());
  };
  protoOf(RuleContext).toString = function () {
    var tmp = (null == null ? true : isInterface(null, List)) ? null : THROW_CCE();
    return this.toString_72wzpx_k$(tmp, (null == null ? true : null instanceof RuleContext) ? null : THROW_CCE());
  };
  protoOf(RuleContext).toString_hifg1w_k$ = function (recog, stop) {
    var ruleNames = recog == null ? null : recog.get_ruleNames_qcosu5_k$();
    var ruleNamesList = !(ruleNames == null) ? listOf(ruleNames.slice()) : null;
    return this.toString_72wzpx_k$(ruleNamesList, stop);
  };
  protoOf(RuleContext).toString$default_x5ru6u_k$ = function (recog, stop, $super) {
    stop = stop === VOID ? get_EMPTY_RULECTX() : stop;
    return $super === VOID ? this.toString_hifg1w_k$(recog, stop) : $super.toString_hifg1w_k$.call(this, recog, stop);
  };
  protoOf(RuleContext).toString_72wzpx_k$ = function (ruleNames, stop) {
    var buf = StringBuilder_init_$Create$();
    var p = this;
    buf.append_22ad7x_k$('[');
    while (!(p == null) ? !(p === stop) : false) {
      if (ruleNames == null) {
        if (!p.get_isEmpty_zauvru_k$()) {
          buf.append_t8pm91_k$(p.invokingState_1);
        }
      } else {
        var ruleIndex = p.get_ruleIndex_qf7nn7_k$();
        var ruleName = (ruleIndex >= 0 ? ruleIndex < ruleNames.get_size_woubt6_k$() : false) ? ruleNames.get_c1px32_k$(ruleIndex) : ruleIndex.toString();
        buf.append_22ad7x_k$(ruleName);
      }
      if (!(p.parent_1 == null) ? !(ruleNames == null) ? true : !ensureNotNull(p.parent_1).get_isEmpty_zauvru_k$() : false) {
        buf.append_22ad7x_k$(' ');
      }
      p = p.parent_1;
    }
    buf.append_22ad7x_k$(']');
    return buf.toString();
  };
  protoOf(RuleContext).toString$default_bx0bo7_k$ = function (ruleNames, stop, $super) {
    stop = stop === VOID ? null : stop;
    return $super === VOID ? this.toString_72wzpx_k$(ruleNames, stop) : $super.toString_72wzpx_k$.call(this, ruleNames, stop);
  };
  function RuleContext() {
    this.invokingState_1 = -1;
    this.ruleIndex_1 = -1;
  }
  var properties_initialized_RuleContext_kt_naglpf;
  function _init_properties_RuleContext_kt__uih0ip() {
    if (!properties_initialized_RuleContext_kt_naglpf) {
      properties_initialized_RuleContext_kt_naglpf = true;
      EMPTY_RULECTX = ParserRuleContext_init_$Create$();
    }
  }
  function _get_source__4cuw5s($this) {
    return $this.source_1;
  }
  function _get_codePointIndices__57x7t3($this) {
    return $this.codePointIndices_1;
  }
  function _get_size__ddoh9m($this) {
    return $this.size_1;
  }
  function _set_position__5hlfea($this, _set____db54di) {
    $this.position_1 = _set____db54di;
  }
  function _get_position__iahqv2($this) {
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
          tmp_1 = Companion_getInstance_3().get_EOF_18juz1_k$();
        }
        tmp_0 = tmp_1;
      } else {
        tmp_0 = Char__toInt_impl_vasixd(char);
      }
      tmp = tmp_0;
    } else {
      tmp = Companion_getInstance_3().get_EOF_18juz1_k$();
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
  protoOf(StringCharStream).get_sourceName_wh0te7_k$ = function () {
    return this.sourceName_1;
  };
  protoOf(StringCharStream).consume_sos6hg_k$ = function () {
    if ((this.size_1 - this.position_1 | 0) === 0) {
      assert(this.LA_figb43_k$(1) === Companion_getInstance_3().get_EOF_18juz1_k$());
      throw IllegalStateException_init_$Create$('cannot consume EOF');
    }
    this.position_1 = this.position_1 + 1 | 0;
  };
  protoOf(StringCharStream).index_1nqriq_k$ = function () {
    return this.position_1;
  };
  protoOf(StringCharStream).size_23och_k$ = function () {
    return this.size_1;
  };
  protoOf(StringCharStream).mark_1zob1_k$ = function () {
    return -1;
  };
  protoOf(StringCharStream).release_4x1eox_k$ = function (marker) {
  };
  protoOf(StringCharStream).seek_a2e6fk_k$ = function (index) {
    this.position_1 = index;
  };
  protoOf(StringCharStream).toString = function () {
    return this.getText_dijk8r_k$(Companion_getInstance_31().of_doci3b_k$(0, this.size_1 - 1 | 0));
  };
  protoOf(StringCharStream).getText_dijk8r_k$ = function (interval) {
    var startIndex = Math_getInstance().min_i3c4dq_k$(interval.get_a_1mhr5k_k$(), this.size_1);
    var endIndex = Math_getInstance().min_i3c4dq_k$(interval.get_b_1mhr5l_k$(), this.size_1);
    // Inline function 'kotlin.text.substring' call
    var this_0 = this.source_1;
    var startIndex_0 = this.codePointIndices_1[startIndex];
    var endIndex_0 = this.codePointIndices_1[endIndex] + 1 | 0;
    // Inline function 'kotlin.js.asDynamic' call
    return this_0.substring(startIndex_0, endIndex_0);
  };
  protoOf(StringCharStream).LA_figb43_k$ = function (i) {
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
  function codePointIndices(_this__u8e3s4) {
    // Inline function 'kotlin.collections.mapNotNull' call
    // Inline function 'kotlin.collections.mapNotNullTo' call
    var this_0 = until(0, _this__u8e3s4.length);
    var destination = ArrayList_init_$Create$_0();
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator = this_0.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var element = tmp0_iterator.next_20eer_k$();
      // Inline function 'kotlin.collections.mapNotNullTo.<anonymous>' call
      // Inline function 'org.antlr.v4.kotlinruntime.codePointIndices.<anonymous>' call
      var tmp;
      if (hasSurrogatePairAt(_this__u8e3s4, element - 1 | 0)) {
        tmp = null;
      } else {
        tmp = element;
      }
      var tmp0_safe_receiver = tmp;
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        destination.add_utx5q5_k$(tmp0_safe_receiver);
      }
    }
    return toIntArray(destination);
  }
  function toCodePoint(high, low) {
    return ((Char__toInt_impl_vasixd(high) << 10) + Char__toInt_impl_vasixd(low) | 0) + -56613888 | 0;
  }
  function Companion_5() {
    Companion_instance_5 = this;
    this.INVALID_TYPE_1 = 0;
    this.EPSILON_1 = -2;
    this.MIN_USER_TOKEN_TYPE_1 = 1;
    this.EOF_1 = Companion_getInstance_3().get_EOF_18juz1_k$();
    this.DEFAULT_CHANNEL_1 = 0;
    this.HIDDEN_CHANNEL_1 = 1;
    this.MIN_USER_CHANNEL_VALUE_1 = 2;
  }
  protoOf(Companion_5).get_INVALID_TYPE_iyehat_k$ = function () {
    return this.INVALID_TYPE_1;
  };
  protoOf(Companion_5).get_EPSILON_c96d27_k$ = function () {
    return this.EPSILON_1;
  };
  protoOf(Companion_5).get_MIN_USER_TOKEN_TYPE_3vm1q_k$ = function () {
    return this.MIN_USER_TOKEN_TYPE_1;
  };
  protoOf(Companion_5).get_EOF_18juz1_k$ = function () {
    return this.EOF_1;
  };
  protoOf(Companion_5).get_DEFAULT_CHANNEL_1pytd0_k$ = function () {
    return this.DEFAULT_CHANNEL_1;
  };
  protoOf(Companion_5).get_HIDDEN_CHANNEL_yz0zvt_k$ = function () {
    return this.HIDDEN_CHANNEL_1;
  };
  protoOf(Companion_5).get_MIN_USER_CHANNEL_VALUE_ibpg09_k$ = function () {
    return this.MIN_USER_CHANNEL_VALUE_1;
  };
  var Companion_instance_5;
  function Companion_getInstance_6() {
    if (Companion_instance_5 == null)
      new Companion_5();
    return Companion_instance_5;
  }
  function Token() {
  }
  function TokenFactory() {
  }
  function TokenSource() {
  }
  function TokenStream() {
  }
  function Vocabulary() {
  }
  function _get_EMPTY_NAMES__ymgrid($this) {
    return $this.EMPTY_NAMES_1;
  }
  function _get_literalNames__dnfnfy($this) {
    return $this.literalNames_1;
  }
  function _get_symbolicNames__nczm05($this) {
    return $this.symbolicNames_1;
  }
  function _get_displayNames__y56btx($this) {
    return $this.displayNames_1;
  }
  function Companion_6() {
    Companion_instance_6 = this;
    var tmp = this;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp.EMPTY_NAMES_1 = fillArrayVal(Array(0), null);
    this.EMPTY_VOCABULARY_1 = new VocabularyImpl(this.EMPTY_NAMES_1, this.EMPTY_NAMES_1, this.EMPTY_NAMES_1);
  }
  protoOf(Companion_6).get_EMPTY_VOCABULARY_bk59fj_k$ = function () {
    return this.EMPTY_VOCABULARY_1;
  };
  protoOf(Companion_6).fromTokenNames_sfdkff_k$ = function (tokenNames) {
    var tmp;
    if (tokenNames == null) {
      tmp = true;
    } else {
      // Inline function 'kotlin.collections.isEmpty' call
      tmp = tokenNames.length === 0;
    }
    if (tmp) {
      return this.EMPTY_VOCABULARY_1;
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
        // Inline function 'kotlin.text.isEmpty' call
        if (!(charSequenceLength(tokenName) === 0)) {
          var firstChar = charSequenceGet(tokenName, 0);
          if (firstChar === _Char___init__impl__6a9atx(39)) {
            symbolicNames[i] = null;
            continue $l$loop_1;
          } else if (isCharUppercase(firstChar)) {
            literalNames[i] = null;
            continue $l$loop_1;
          }
        }
        literalNames[i] = null;
        symbolicNames[i] = null;
      }
       while (inductionVariable <= last);
    return new VocabularyImpl(literalNames, symbolicNames, tokenNames);
  };
  var Companion_instance_6;
  function Companion_getInstance_7() {
    if (Companion_instance_6 == null)
      new Companion_6();
    return Companion_instance_6;
  }
  function VocabularyImpl(literalNames, symbolicNames, displayNames) {
    Companion_getInstance_7();
    displayNames = displayNames === VOID ? null : displayNames;
    var tmp = this;
    tmp.literalNames_1 = literalNames == null ? Companion_getInstance_7().EMPTY_NAMES_1 : literalNames;
    var tmp_0 = this;
    tmp_0.symbolicNames_1 = symbolicNames == null ? Companion_getInstance_7().EMPTY_NAMES_1 : symbolicNames;
    var tmp_1 = this;
    tmp_1.displayNames_1 = displayNames == null ? Companion_getInstance_7().EMPTY_NAMES_1 : displayNames;
    this.maxTokenType_1 = Math_getInstance().max_rlhb38_k$(this.displayNames_1.length, Math_getInstance().max_rlhb38_k$(this.literalNames_1.length, this.symbolicNames_1.length)) - 1 | 0;
  }
  protoOf(VocabularyImpl).get_maxTokenType_gnkz54_k$ = function () {
    return this.maxTokenType_1;
  };
  protoOf(VocabularyImpl).getLiteralName_5t4o50_k$ = function (tokenType) {
    var tmp;
    if (tokenType >= 0 ? tokenType < this.literalNames_1.length : false) {
      tmp = this.literalNames_1[tokenType];
    } else {
      tmp = null;
    }
    return tmp;
  };
  protoOf(VocabularyImpl).getSymbolicName_upuk7v_k$ = function (tokenType) {
    if (tokenType >= 0 ? tokenType < this.symbolicNames_1.length : false) {
      return this.symbolicNames_1[tokenType];
    }
    var tmp;
    if (tokenType === Companion_getInstance_6().get_EOF_18juz1_k$()) {
      tmp = 'EOF';
    } else {
      tmp = null;
    }
    return tmp;
  };
  protoOf(VocabularyImpl).getDisplayName_ut2bi7_k$ = function (tokenType) {
    if (tokenType >= 0 ? tokenType < this.displayNames_1.length : false) {
      var displayName = this.displayNames_1[tokenType];
      if (!(displayName == null)) {
        return displayName;
      }
    }
    var literalName = this.getLiteralName_5t4o50_k$(tokenType);
    if (!(literalName == null)) {
      return literalName;
    }
    var symbolicName = this.getSymbolicName_upuk7v_k$(tokenType);
    return symbolicName == null ? tokenType.toString() : symbolicName;
  };
  function WritableToken() {
  }
  function get_START_POINT() {
    _init_properties_position_kt__7xlc2f();
    return START_POINT;
  }
  var START_POINT;
  function Point(line, column) {
    this.line_1 = line;
    this.column_1 = column;
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this.line_1 >= 1)) {
      // Inline function 'org.antlr.v4.kotlinruntime.ast.Point.<anonymous>' call
      var message = 'Line should be equal or greater than 1, was ' + this.line_1;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this.column_1 >= 0)) {
      // Inline function 'org.antlr.v4.kotlinruntime.ast.Point.<anonymous>' call
      var message_0 = 'Column should be equal or greater than 0, was ' + this.column_1;
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
  }
  protoOf(Point).get_line_wopum5_k$ = function () {
    return this.line_1;
  };
  protoOf(Point).get_column_c05ahr_k$ = function () {
    return this.column_1;
  };
  protoOf(Point).toString = function () {
    return 'Line ' + this.line_1 + ', Column ' + this.column_1;
  };
  protoOf(Point).offset_yl2zuv_k$ = function (code) {
    var lines = split(code, ['\n']);
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(lines.get_size_woubt6_k$() >= this.line_1)) {
      // Inline function 'org.antlr.v4.kotlinruntime.ast.Point.offset.<anonymous>' call
      var message = 'The point does not exist in the given text. It indicates line ' + this.line_1 + ' but there are only ' + lines.get_size_woubt6_k$() + ' lines';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(lines.get_c1px32_k$(this.line_1 - 1 | 0).length >= this.column_1)) {
      // Inline function 'org.antlr.v4.kotlinruntime.ast.Point.offset.<anonymous>' call
      var message_0 = 'The column does not exist in the given text. Line ' + this.line_1 + ' has ' + lines.get_c1px32_k$(this.line_1 - 1 | 0).length + ' columns, the point indicates column ' + this.column_1;
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
    var newLines = this.line_1 - 1 | 0;
    // Inline function 'kotlin.collections.foldRight' call
    var this_0 = lines.subList_xle3r2_k$(0, this.line_1 - 1 | 0);
    var accumulator = 0;
    if (!this_0.isEmpty_y1axqb_k$()) {
      var iterator = this_0.listIterator_70e65o_k$(this_0.get_size_woubt6_k$());
      while (iterator.hasPrevious_qh0629_k$()) {
        // Inline function 'org.antlr.v4.kotlinruntime.ast.Point.offset.<anonymous>' call
        var it = iterator.previous_l2dfd5_k$();
        var acc = accumulator;
        accumulator = it.length + acc | 0;
      }
    }
    return (accumulator + newLines | 0) + this.column_1 | 0;
  };
  protoOf(Point).isBefore_s9sv0a_k$ = function (other) {
    return this.line_1 < other.line_1 ? true : this.line_1 === other.line_1 ? this.column_1 < other.column_1 : false;
  };
  protoOf(Point).advance_zbimd4_k$ = function (text) {
    var matches = Regex_init_$Create$('\r\n|\r|\n').findAll$default_xha0o9_k$(text);
    var line = this.line_1 + count(matches) | 0;
    var col = none(matches) ? this.column_1 + text.length | 0 : (text.length - last(matches).get_range_ixu978_k$().get_endInclusive_r07xpi_k$() | 0) - 1 | 0;
    return new Point(line, col);
  };
  protoOf(Point).component1_7eebsc_k$ = function () {
    return this.line_1;
  };
  protoOf(Point).component2_7eebsb_k$ = function () {
    return this.column_1;
  };
  protoOf(Point).copy_fhtu3_k$ = function (line, column) {
    return new Point(line, column);
  };
  protoOf(Point).copy$default_w07mye_k$ = function (line, column, $super) {
    line = line === VOID ? this.line_1 : line;
    column = column === VOID ? this.column_1 : column;
    return $super === VOID ? this.copy_fhtu3_k$(line, column) : $super.copy_fhtu3_k$.call(this, line, column);
  };
  protoOf(Point).hashCode = function () {
    var result = this.line_1;
    result = imul(result, 31) + this.column_1 | 0;
    return result;
  };
  protoOf(Point).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Point))
      return false;
    var tmp0_other_with_cast = other instanceof Point ? other : THROW_CCE();
    if (!(this.line_1 === tmp0_other_with_cast.line_1))
      return false;
    if (!(this.column_1 === tmp0_other_with_cast.column_1))
      return false;
    return true;
  };
  function Position(start, end) {
    this.start_1 = start;
    this.end_1 = end;
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this.start_1.isBefore_s9sv0a_k$(this.end_1) ? true : this.start_1.equals(this.end_1))) {
      // Inline function 'org.antlr.v4.kotlinruntime.ast.Position.<anonymous>' call
      var message = 'End should follows start or be the same as start (start: ' + this.start_1 + ', end: ' + this.end_1 + ')';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
  }
  protoOf(Position).get_start_iypx6h_k$ = function () {
    return this.start_1;
  };
  protoOf(Position).get_end_18j6ha_k$ = function () {
    return this.end_1;
  };
  protoOf(Position).text_yxj031_k$ = function (wholeText) {
    // Inline function 'kotlin.text.substring' call
    var startIndex = this.start_1.offset_yl2zuv_k$(wholeText);
    var endIndex = this.end_1.offset_yl2zuv_k$(wholeText);
    // Inline function 'kotlin.js.asDynamic' call
    return wholeText.substring(startIndex, endIndex);
  };
  protoOf(Position).length_84s3e4_k$ = function (code) {
    return this.end_1.offset_yl2zuv_k$(code) - this.start_1.offset_yl2zuv_k$(code) | 0;
  };
  protoOf(Position).contains_t5fn4s_k$ = function (point) {
    return (point.equals(this.start_1) ? true : this.start_1.isBefore_s9sv0a_k$(point)) ? point.equals(this.end_1) ? true : point.isBefore_s9sv0a_k$(this.end_1) : false;
  };
  protoOf(Position).component1_7eebsc_k$ = function () {
    return this.start_1;
  };
  protoOf(Position).component2_7eebsb_k$ = function () {
    return this.end_1;
  };
  protoOf(Position).copy_o6e3z_k$ = function (start, end) {
    return new Position(start, end);
  };
  protoOf(Position).copy$default_t8nbqh_k$ = function (start, end, $super) {
    start = start === VOID ? this.start_1 : start;
    end = end === VOID ? this.end_1 : end;
    return $super === VOID ? this.copy_o6e3z_k$(start, end) : $super.copy_o6e3z_k$.call(this, start, end);
  };
  protoOf(Position).toString = function () {
    return 'Position(start=' + this.start_1 + ', end=' + this.end_1 + ')';
  };
  protoOf(Position).hashCode = function () {
    var result = this.start_1.hashCode();
    result = imul(result, 31) + this.end_1.hashCode() | 0;
    return result;
  };
  protoOf(Position).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Position))
      return false;
    var tmp0_other_with_cast = other instanceof Position ? other : THROW_CCE();
    if (!this.start_1.equals(tmp0_other_with_cast.start_1))
      return false;
    if (!this.end_1.equals(tmp0_other_with_cast.end_1))
      return false;
    return true;
  };
  var properties_initialized_position_kt_o6v9bf;
  function _init_properties_position_kt__7xlc2f() {
    if (!properties_initialized_position_kt_o6v9bf) {
      properties_initialized_position_kt_o6v9bf = true;
      START_POINT = new Point(1, 0);
    }
  }
  function Companion_7() {
    Companion_instance_7 = this;
    this.INVALID_ALT_NUMBER_1 = 0;
  }
  protoOf(Companion_7).get_INVALID_ALT_NUMBER_idrbu8_k$ = function () {
    return this.INVALID_ALT_NUMBER_1;
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
  protoOf(ATN).get_grammarType_yufqxk_k$ = function () {
    return this.grammarType_1;
  };
  protoOf(ATN).get_maxTokenType_gnkz54_k$ = function () {
    return this.maxTokenType_1;
  };
  protoOf(ATN).get_states_jnf5zf_k$ = function () {
    return this.states_1;
  };
  protoOf(ATN).get_decisionToState_k8y6b5_k$ = function () {
    return this.decisionToState_1;
  };
  protoOf(ATN).set_ruleToStartState_jep67y_k$ = function (_set____db54di) {
    this.ruleToStartState_1 = _set____db54di;
  };
  protoOf(ATN).get_ruleToStartState_u6xedr_k$ = function () {
    return this.ruleToStartState_1;
  };
  protoOf(ATN).set_ruleToStopState_1z8zo_k$ = function (_set____db54di) {
    this.ruleToStopState_1 = _set____db54di;
  };
  protoOf(ATN).get_ruleToStopState_5ojl67_k$ = function () {
    return this.ruleToStopState_1;
  };
  protoOf(ATN).get_modeNameToStartState_50v7a7_k$ = function () {
    return this.modeNameToStartState_1;
  };
  protoOf(ATN).set_ruleToTokenType_ezn791_k$ = function (_set____db54di) {
    this.ruleToTokenType_1 = _set____db54di;
  };
  protoOf(ATN).get_ruleToTokenType_ir5431_k$ = function () {
    return this.ruleToTokenType_1;
  };
  protoOf(ATN).set_lexerActions_9idons_k$ = function (_set____db54di) {
    this.lexerActions_1 = _set____db54di;
  };
  protoOf(ATN).get_lexerActions_uuxhui_k$ = function () {
    return this.lexerActions_1;
  };
  protoOf(ATN).get_modeToStartState_aanefe_k$ = function () {
    return this.modeToStartState_1;
  };
  protoOf(ATN).get_numberOfDecisions_u9sgni_k$ = function () {
    return this.decisionToState_1.get_size_woubt6_k$();
  };
  protoOf(ATN).nextTokens_ygjxa9_k$ = function (s, ctx) {
    var anal = new LL1Analyzer(this);
    return anal.LOOK_k39ma7_k$(s, ctx);
  };
  protoOf(ATN).nextTokens_kclek1_k$ = function (s) {
    if (!(s.get_nextTokenWithinRule_fv3lz0_k$() == null))
      return s.get_nextTokenWithinRule_fv3lz0_k$();
    s.set_nextTokenWithinRule_mtswy2_k$(this.nextTokens_ygjxa9_k$(s, null));
    ensureNotNull(s.get_nextTokenWithinRule_fv3lz0_k$()).set_isReadonly_qjm26s_k$(true);
    return s.get_nextTokenWithinRule_fv3lz0_k$();
  };
  protoOf(ATN).addState_vxh94l_k$ = function (state) {
    if (!(state == null)) {
      ensureNotNull(state).set_atn_m9fetc_k$(this);
      ensureNotNull(state).set_stateNumber_ar8wln_k$(this.states_1.get_size_woubt6_k$());
    }
    this.states_1.add_utx5q5_k$(state);
  };
  protoOf(ATN).removeState_emdnlt_k$ = function (state) {
    this.states_1.set_82063s_k$(state.get_stateNumber_v90a1d_k$(), null);
  };
  protoOf(ATN).defineDecisionState_dj4sh8_k$ = function (s) {
    this.decisionToState_1.add_utx5q5_k$(s);
    s.set_decision_mzbz5d_k$(this.decisionToState_1.get_size_woubt6_k$() - 1 | 0);
    return s.get_decision_mg4f2z_k$();
  };
  protoOf(ATN).getDecisionState_plveuf_k$ = function (decision) {
    var tmp;
    if (!this.decisionToState_1.isEmpty_y1axqb_k$()) {
      tmp = this.decisionToState_1.get_c1px32_k$(decision);
    } else {
      tmp = null;
    }
    return tmp;
  };
  protoOf(ATN).getExpectedTokens_ot41du_k$ = function (stateNumber, context) {
    if (stateNumber < 0 ? true : stateNumber >= this.states_1.get_size_woubt6_k$()) {
      throw IllegalArgumentException_init_$Create$('Invalid state number.');
    }
    var ctx = context;
    var s = this.states_1.get_c1px32_k$(stateNumber);
    var following = this.nextTokens_kclek1_k$(ensureNotNull(s));
    if (!ensureNotNull(following).contains_7q95ev_k$(Companion_getInstance_6().get_EPSILON_c96d27_k$())) {
      return following;
    }
    var expected = IntervalSet_init_$Create$_1(new Int32Array([]));
    expected.addAll_jvk865_k$(following);
    expected.remove_v58o70_k$(Companion_getInstance_6().get_EPSILON_c96d27_k$());
    while ((!(ctx == null) ? ensureNotNull(ctx).get_invokingState_mn8pn1_k$() >= 0 : false) ? ensureNotNull(following).contains_7q95ev_k$(Companion_getInstance_6().get_EPSILON_c96d27_k$()) : false) {
      var invokingState = this.states_1.get_c1px32_k$(ensureNotNull(ctx).get_invokingState_mn8pn1_k$());
      var tmp = ensureNotNull(invokingState).transition_nw6t99_k$(0);
      var rt = tmp instanceof RuleTransition ? tmp : THROW_CCE();
      following = this.nextTokens_kclek1_k$(rt.get_followState_uwxfd5_k$());
      expected.addAll_jvk865_k$(following);
      expected.remove_v58o70_k$(Companion_getInstance_6().get_EPSILON_c96d27_k$());
      ctx = ensureNotNull(ctx).readParent_9zdz4w_k$();
    }
    if (ensureNotNull(following).contains_7q95ev_k$(Companion_getInstance_6().get_EPSILON_c96d27_k$())) {
      expected.add_c9dakn_k$(Companion_getInstance_6().get_EOF_18juz1_k$());
    }
    return expected;
  };
  function _get_SUPPRESS_PRECEDENCE_FILTER__7a7yy0($this) {
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
    return ATNConfig_init_$Init$(old, objectCreate(protoOf(ATNConfig)));
  }
  function ATNConfig_init_$Init$_0(state, alt, context, semanticContext, $this) {
    semanticContext = semanticContext === VOID ? Companion_getInstance_25().get_NONE_wo64xt_k$() : semanticContext;
    ATNConfig.call($this);
    $this.state_1 = state;
    $this.alt_1 = alt;
    $this.context_1 = context;
    $this.semanticContext_1 = semanticContext;
    return $this;
  }
  function ATNConfig_init_$Create$_0(state, alt, context, semanticContext) {
    return ATNConfig_init_$Init$_0(state, alt, context, semanticContext, objectCreate(protoOf(ATNConfig)));
  }
  function ATNConfig_init_$Init$_1(c, state, semanticContext, $this) {
    ATNConfig_init_$Init$_3(c, state, c.context_1, semanticContext, $this);
    return $this;
  }
  function ATNConfig_init_$Create$_1(c, state, semanticContext) {
    return ATNConfig_init_$Init$_1(c, state, semanticContext, objectCreate(protoOf(ATNConfig)));
  }
  function ATNConfig_init_$Init$_2(c, semanticContext, $this) {
    ATNConfig_init_$Init$_3(c, c.state_1, c.context_1, semanticContext, $this);
    return $this;
  }
  function ATNConfig_init_$Create$_2(c, semanticContext) {
    return ATNConfig_init_$Init$_2(c, semanticContext, objectCreate(protoOf(ATNConfig)));
  }
  function ATNConfig_init_$Init$_3(c, state, context, semanticContext, $this) {
    context = context === VOID ? c.context_1 : context;
    semanticContext = semanticContext === VOID ? c.semanticContext_1 : semanticContext;
    ATNConfig.call($this);
    $this.state_1 = state;
    $this.alt_1 = c.alt_1;
    $this.context_1 = context;
    $this.semanticContext_1 = semanticContext;
    $this.reachesIntoOuterContext_1 = c.reachesIntoOuterContext_1;
    return $this;
  }
  function ATNConfig_init_$Create$_3(c, state, context, semanticContext) {
    return ATNConfig_init_$Init$_3(c, state, context, semanticContext, objectCreate(protoOf(ATNConfig)));
  }
  function Companion_8() {
    Companion_instance_8 = this;
    this.SUPPRESS_PRECEDENCE_FILTER_1 = 1073741824;
  }
  var Companion_instance_8;
  function Companion_getInstance_9() {
    if (Companion_instance_8 == null)
      new Companion_8();
    return Companion_instance_8;
  }
  protoOf(ATNConfig).get_state_iypx7s_k$ = function () {
    return this.state_1;
  };
  protoOf(ATNConfig).get_alt_18j9hc_k$ = function () {
    return this.alt_1;
  };
  protoOf(ATNConfig).set_context_vaigdt_k$ = function (_set____db54di) {
    this.context_1 = _set____db54di;
  };
  protoOf(ATNConfig).get_context_h02k06_k$ = function () {
    return this.context_1;
  };
  protoOf(ATNConfig).set_reachesIntoOuterContext_ibfads_k$ = function (_set____db54di) {
    this.reachesIntoOuterContext_1 = _set____db54di;
  };
  protoOf(ATNConfig).get_reachesIntoOuterContext_d4j9vw_k$ = function () {
    return this.reachesIntoOuterContext_1;
  };
  protoOf(ATNConfig).get_semanticContext_gd9bz4_k$ = function () {
    return this.semanticContext_1;
  };
  protoOf(ATNConfig).get_outerContextDepth_i6l2y_k$ = function () {
    return this.reachesIntoOuterContext_1 & ~Companion_getInstance_9().SUPPRESS_PRECEDENCE_FILTER_1;
  };
  protoOf(ATNConfig).set_isPrecedenceFilterSuppressed_hjy12g_k$ = function (value) {
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
  protoOf(ATNConfig).get_isPrecedenceFilterSuppressed_50v313_k$ = function () {
    return !((this.reachesIntoOuterContext_1 & Companion_getInstance_9().SUPPRESS_PRECEDENCE_FILTER_1) === 0);
  };
  protoOf(ATNConfig).equals = function (o) {
    var tmp;
    if (!(o instanceof ATNConfig)) {
      tmp = false;
    } else {
      tmp = this.equals_2nbc7l_k$((o == null ? true : o instanceof ATNConfig) ? o : THROW_CCE());
    }
    return tmp;
  };
  protoOf(ATNConfig).equals_2nbc7l_k$ = function (other) {
    if (this === other) {
      return true;
    } else if (other == null) {
      return false;
    }
    return (((this.state_1.get_stateNumber_v90a1d_k$() === other.state_1.get_stateNumber_v90a1d_k$() ? this.alt_1 === other.alt_1 : false) ? this.context_1 === other.context_1 ? true : !(this.context_1 == null) ? equals(this.context_1, other.context_1) : false : false) ? equals(this.semanticContext_1, other.semanticContext_1) : false) ? this.get_isPrecedenceFilterSuppressed_50v313_k$() === other.get_isPrecedenceFilterSuppressed_50v313_k$() : false;
  };
  protoOf(ATNConfig).hashCode = function () {
    var hashCode = MurmurHash_getInstance().initialize_vf4y0_k$(7);
    hashCode = MurmurHash_getInstance().update_65sxl5_k$(hashCode, this.state_1.get_stateNumber_v90a1d_k$());
    hashCode = MurmurHash_getInstance().update_65sxl5_k$(hashCode, this.alt_1);
    hashCode = MurmurHash_getInstance().update_66jqwg_k$(hashCode, this.context_1);
    hashCode = MurmurHash_getInstance().update_66jqwg_k$(hashCode, this.semanticContext_1);
    hashCode = MurmurHash_getInstance().finish_sqfsk3_k$(hashCode, 4);
    return hashCode;
  };
  protoOf(ATNConfig).toString = function () {
    return this.toString_fhllcy_k$(null, true);
  };
  protoOf(ATNConfig).toString_fhllcy_k$ = function (recog, showAlt) {
    var buf = StringBuilder_init_$Create$();
    buf.append_am5a4z_k$(_Char___init__impl__6a9atx(40));
    buf.append_t8pm91_k$(this.state_1);
    if (showAlt) {
      buf.append_22ad7x_k$(',');
      buf.append_t8pm91_k$(this.alt_1);
    }
    if (!(this.context_1 == null)) {
      buf.append_22ad7x_k$(',[');
      buf.append_22ad7x_k$(toString(ensureNotNull(this.context_1)));
      buf.append_22ad7x_k$(']');
    }
    if (!(this.semanticContext_1 == null) ? !(this.semanticContext_1 === Companion_getInstance_25().get_NONE_wo64xt_k$()) : false) {
      buf.append_22ad7x_k$(',');
      buf.append_t8pm91_k$(this.semanticContext_1);
    }
    if (this.get_outerContextDepth_i6l2y_k$() > 0) {
      buf.append_22ad7x_k$(',up=').append_t8pm91_k$(this.get_outerContextDepth_i6l2y_k$());
    }
    buf.append_am5a4z_k$(_Char___init__impl__6a9atx(41));
    return buf.toString();
  };
  function ATNConfig() {
    Companion_getInstance_9();
    this.context_1 = null;
    this.reachesIntoOuterContext_1 = 0;
  }
  function Companion_9() {
    Companion_instance_9 = this;
    this.INSTANCE_1 = new ConfigEqualityComparator();
  }
  protoOf(Companion_9).get_INSTANCE_9oh0gy_k$ = function () {
    return this.INSTANCE_1;
  };
  var Companion_instance_9;
  function Companion_getInstance_10() {
    if (Companion_instance_9 == null)
      new Companion_9();
    return Companion_instance_9;
  }
  function _set_cachedHashCode__cb6f1i($this, _set____db54di) {
    $this.cachedHashCode_1 = _set____db54di;
  }
  function _get_cachedHashCode__d7x0zy($this) {
    return $this.cachedHashCode_1;
  }
  function ConfigHashSet() {
    AbstractConfigHashSet.call(this, Companion_getInstance_10().INSTANCE_1);
  }
  protoOf(ConfigHashSet).containsAll_ts80yp_k$ = function (elements) {
    // Inline function 'kotlin.TODO' call
    var reason = 'not implemented';
    throw new NotImplementedError('An operation is not implemented: ' + reason);
  };
  protoOf(ConfigHashSet).containsAll_xk45sd_k$ = function (elements) {
    return this.containsAll_ts80yp_k$(elements);
  };
  protoOf(ConfigHashSet).containsAll_70schq_k$ = function (elements) {
    return this.containsAll_ts80yp_k$(elements);
  };
  protoOf(ConfigHashSet).retainAll_g3j73t_k$ = function (elements) {
    // Inline function 'kotlin.TODO' call
    var reason = 'not implemented';
    throw new NotImplementedError('An operation is not implemented: ' + reason);
  };
  protoOf(ConfigHashSet).retainAll_9fhiib_k$ = function (elements) {
    return this.retainAll_g3j73t_k$(elements);
  };
  protoOf(ConfigHashSet).retainAll_h3uasc_k$ = function (elements) {
    return this.retainAll_g3j73t_k$(elements);
  };
  protoOf(ConfigHashSet).remove_ugeuth_k$ = function (element) {
    // Inline function 'kotlin.TODO' call
    var reason = 'not implemented';
    throw new NotImplementedError('An operation is not implemented: ' + reason);
  };
  protoOf(ConfigHashSet).remove_cedx0m_k$ = function (element) {
    if (!(element instanceof ATNConfig))
      return false;
    return this.remove_ugeuth_k$(element instanceof ATNConfig ? element : THROW_CCE());
  };
  protoOf(ConfigHashSet).remove_an8aut_k$ = function (element) {
    return this.remove_ugeuth_k$(element instanceof ATNConfig ? element : THROW_CCE());
  };
  function ConfigEqualityComparator() {
    Companion_getInstance_10();
    AbstractEqualityComparator.call(this);
  }
  protoOf(ConfigEqualityComparator).hashCode_lhw5ua_k$ = function (o) {
    var hashCode_0 = 7;
    hashCode_0 = imul(31, hashCode_0) + o.get_state_iypx7s_k$().get_stateNumber_v90a1d_k$() | 0;
    hashCode_0 = imul(31, hashCode_0) + o.get_alt_18j9hc_k$() | 0;
    hashCode_0 = imul(31, hashCode_0) + hashCode(ensureNotNull(o.get_semanticContext_gd9bz4_k$())) | 0;
    return hashCode_0;
  };
  protoOf(ConfigEqualityComparator).hashCode_fsgoms_k$ = function (obj) {
    return this.hashCode_lhw5ua_k$(obj instanceof ATNConfig ? obj : THROW_CCE());
  };
  protoOf(ConfigEqualityComparator).equals_xy3hfl_k$ = function (a, b) {
    if (a === b)
      return true;
    return (a == null ? true : b == null) ? false : (ensureNotNull(a).get_state_iypx7s_k$().get_stateNumber_v90a1d_k$() === ensureNotNull(b).get_state_iypx7s_k$().get_stateNumber_v90a1d_k$() ? ensureNotNull(a).get_alt_18j9hc_k$() === ensureNotNull(b).get_alt_18j9hc_k$() : false) ? equals(ensureNotNull(a).get_semanticContext_gd9bz4_k$(), ensureNotNull(b).get_semanticContext_gd9bz4_k$()) : false;
  };
  protoOf(ConfigEqualityComparator).equals_dxlvsx_k$ = function (a, b) {
    var tmp = (a == null ? true : a instanceof ATNConfig) ? a : THROW_CCE();
    return this.equals_xy3hfl_k$(tmp, (b == null ? true : b instanceof ATNConfig) ? b : THROW_CCE());
  };
  function ATNConfigSet_init_$Init$(old, $this) {
    ATNConfigSet.call($this, old.fullCtx_1);
    $this.addAll_kcem17_k$(old);
    $this.uniqueAlt_1 = old.uniqueAlt_1;
    $this.conflictingAlts_1 = old.conflictingAlts_1;
    $this.hasSemanticContext_1 = old.hasSemanticContext_1;
    $this.dipsIntoOuterContext_1 = old.dipsIntoOuterContext_1;
    return $this;
  }
  function ATNConfigSet_init_$Create$(old) {
    return ATNConfigSet_init_$Init$(old, objectCreate(protoOf(ATNConfigSet)));
  }
  function AbstractConfigHashSet(comparator, initialCapacity, initialBucketCapacity) {
    initialCapacity = initialCapacity === VOID ? 16 : initialCapacity;
    initialBucketCapacity = initialBucketCapacity === VOID ? 2 : initialBucketCapacity;
    Array2DHashSet.call(this, comparator, initialCapacity, initialBucketCapacity);
  }
  protoOf(AbstractConfigHashSet).asElementType_anvmbe_k$ = function (o) {
    var tmp;
    if (!(o instanceof ATNConfig)) {
      tmp = null;
    } else {
      tmp = o instanceof ATNConfig ? o : THROW_CCE();
    }
    return tmp;
  };
  protoOf(AbstractConfigHashSet).createBuckets_ikhi7p_k$ = function (capacity) {
    // Inline function 'kotlin.arrayOfNulls' call
    return fillArrayVal(Array(capacity), null);
  };
  protoOf(AbstractConfigHashSet).createBucket_dydf2_k$ = function (capacity) {
    // Inline function 'kotlin.arrayOfNulls' call
    return fillArrayVal(Array(capacity), null);
  };
  function ATNConfigSet(fullCtx) {
    fullCtx = fullCtx === VOID ? true : fullCtx;
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
  protoOf(ATNConfigSet).get_fullCtx_76ubbl_k$ = function () {
    return this.fullCtx_1;
  };
  protoOf(ATNConfigSet).set_configLookup_gpyt63_k$ = function (_set____db54di) {
    this.configLookup_1 = _set____db54di;
  };
  protoOf(ATNConfigSet).get_configLookup_4gbvs5_k$ = function () {
    return this.configLookup_1;
  };
  protoOf(ATNConfigSet).get_configs_gztoqw_k$ = function () {
    return this.configs_1;
  };
  protoOf(ATNConfigSet).set_uniqueAlt_byfz2r_k$ = function (_set____db54di) {
    this.uniqueAlt_1 = _set____db54di;
  };
  protoOf(ATNConfigSet).get_uniqueAlt_dzo29_k$ = function () {
    return this.uniqueAlt_1;
  };
  protoOf(ATNConfigSet).set_conflictingAlts_4sy777_k$ = function (_set____db54di) {
    this.conflictingAlts_1 = _set____db54di;
  };
  protoOf(ATNConfigSet).get_conflictingAlts_nrn7db_k$ = function () {
    return this.conflictingAlts_1;
  };
  protoOf(ATNConfigSet).set_hasSemanticContext_jce4s7_k$ = function (_set____db54di) {
    this.hasSemanticContext_1 = _set____db54di;
  };
  protoOf(ATNConfigSet).get_hasSemanticContext_7a3dso_k$ = function () {
    return this.hasSemanticContext_1;
  };
  protoOf(ATNConfigSet).set_dipsIntoOuterContext_3420m4_k$ = function (_set____db54di) {
    this.dipsIntoOuterContext_1 = _set____db54di;
  };
  protoOf(ATNConfigSet).get_dipsIntoOuterContext_wiog7v_k$ = function () {
    return this.dipsIntoOuterContext_1;
  };
  protoOf(ATNConfigSet).get_states_jnf5zf_k$ = function () {
    var states = HashSet_init_$Create$_0();
    var tmp0_iterator = this.configs_1.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var c = tmp0_iterator.next_20eer_k$();
      states.add_utx5q5_k$(c.get_state_iypx7s_k$());
    }
    return states;
  };
  protoOf(ATNConfigSet).get_alts_woiw4z_k$ = function () {
    var alts = BitSet_init_$Create$();
    var tmp0_iterator = this.configs_1.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var config = tmp0_iterator.next_20eer_k$();
      alts.set_3dek9m_k$(config.get_alt_18j9hc_k$());
    }
    return alts;
  };
  protoOf(ATNConfigSet).get_predicates_z7p3v_k$ = function () {
    var preds = ArrayList_init_$Create$_0();
    var tmp0_iterator = this.configs_1.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var c = tmp0_iterator.next_20eer_k$();
      if (!(c.get_semanticContext_gd9bz4_k$() === Companion_getInstance_25().get_NONE_wo64xt_k$())) {
        preds.add_utx5q5_k$(ensureNotNull(c.get_semanticContext_gd9bz4_k$()));
      }
    }
    return preds;
  };
  protoOf(ATNConfigSet).set_isReadonly_qjm26s_k$ = function (value) {
    this.isReadonly_1 = value;
    this.configLookup_1 = null;
  };
  protoOf(ATNConfigSet).get_isReadonly_nejehh_k$ = function () {
    return this.isReadonly_1;
  };
  protoOf(ATNConfigSet).add_ce12aw_k$ = function (config) {
    return this.add_l5m7bi_k$(config, null);
  };
  protoOf(ATNConfigSet).add_l5m7bi_k$ = function (config, mergeCache) {
    if (this.isReadonly_1)
      throw IllegalStateException_init_$Create$('This set is readonly');
    if (!(config.get_semanticContext_gd9bz4_k$() === Companion_getInstance_25().get_NONE_wo64xt_k$())) {
      this.hasSemanticContext_1 = true;
    }
    if (config.get_outerContextDepth_i6l2y_k$() > 0) {
      this.dipsIntoOuterContext_1 = true;
    }
    var existing = ensureNotNull(this.configLookup_1).getOrAdd_yl23yf_k$(config);
    if (existing === config) {
      this.cachedHashCode_1 = -1;
      this.configs_1.add_utx5q5_k$(config);
      return true;
    }
    var rootIsWildcard = !this.fullCtx_1;
    var merged = Companion_getInstance_22().merge_fkuyv_k$(existing.get_context_h02k06_k$(), config.get_context_h02k06_k$(), rootIsWildcard, mergeCache);
    existing.set_reachesIntoOuterContext_ibfads_k$(Math_getInstance().max_rlhb38_k$(existing.get_reachesIntoOuterContext_d4j9vw_k$(), config.get_reachesIntoOuterContext_d4j9vw_k$()));
    if (config.get_isPrecedenceFilterSuppressed_50v313_k$()) {
      existing.set_isPrecedenceFilterSuppressed_hjy12g_k$(true);
    }
    existing.set_context_vaigdt_k$(merged);
    return true;
  };
  protoOf(ATNConfigSet).elements_4yqkp_k$ = function () {
    return this.configs_1;
  };
  protoOf(ATNConfigSet).get_c1px32_k$ = function (i) {
    return this.configs_1.get_c1px32_k$(i);
  };
  protoOf(ATNConfigSet).optimizeConfigs_n0ckpn_k$ = function (interpreter) {
    if (this.isReadonly_1)
      throw IllegalStateException_init_$Create$('This set is readonly');
    if (ensureNotNull(this.configLookup_1).isEmpty_y1axqb_k$())
      return Unit_getInstance();
    var tmp0_iterator = this.configs_1.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var config = tmp0_iterator.next_20eer_k$();
      config.set_context_vaigdt_k$(interpreter.getCachedContext_vjfk4r_k$(ensureNotNull(config.get_context_h02k06_k$())));
    }
  };
  protoOf(ATNConfigSet).addAll_kcem17_k$ = function (coll) {
    var tmp0_iterator = coll.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var c = tmp0_iterator.next_20eer_k$();
      this.add_ce12aw_k$(c);
    }
    return false;
  };
  protoOf(ATNConfigSet).equals = function (o) {
    if (o === this) {
      return true;
    } else {
      if (!(o instanceof ATNConfigSet)) {
        return false;
      }
    }
    var other = (o == null ? true : o instanceof ATNConfigSet) ? o : THROW_CCE();
    return (((((!(this.configs_1 == null) ? this.configs_1.equals(ensureNotNull(other).configs_1) : false) ? this.fullCtx_1 === other.fullCtx_1 : false) ? this.uniqueAlt_1 === other.uniqueAlt_1 : false) ? this.conflictingAlts_1 === other.conflictingAlts_1 : false) ? this.hasSemanticContext_1 === other.hasSemanticContext_1 : false) ? this.dipsIntoOuterContext_1 === other.dipsIntoOuterContext_1 : false;
  };
  protoOf(ATNConfigSet).hashCode = function () {
    if (this.isReadonly_1) {
      if (this.cachedHashCode_1 === -1) {
        this.cachedHashCode_1 = this.configs_1.hashCode();
      }
      return this.cachedHashCode_1;
    }
    return this.configs_1.hashCode();
  };
  protoOf(ATNConfigSet).get_size_woubt6_k$ = function () {
    return this.configs_1.get_size_woubt6_k$();
  };
  protoOf(ATNConfigSet).isEmpty_y1axqb_k$ = function () {
    return this.configs_1.isEmpty_y1axqb_k$();
  };
  protoOf(ATNConfigSet).contains_1r6zyu_k$ = function (o) {
    if (this.configLookup_1 == null) {
      throw UnsupportedOperationException_init_$Create$('This method is not implemented for readonly sets.');
    }
    return ensureNotNull(this.configLookup_1).contains_ccp5tc_k$(o);
  };
  protoOf(ATNConfigSet).contains_aljjnj_k$ = function (element) {
    if (!(element instanceof ATNConfig))
      return false;
    return this.contains_1r6zyu_k$(element instanceof ATNConfig ? element : THROW_CCE());
  };
  protoOf(ATNConfigSet).containsFast_hty9ny_k$ = function (obj) {
    if (this.configLookup_1 == null) {
      throw UnsupportedOperationException_init_$Create$('This method is not implemented for readonly sets.');
    }
    return ensureNotNull(this.configLookup_1).containsFast_k8vknp_k$(obj);
  };
  protoOf(ATNConfigSet).iterator_jk1svi_k$ = function () {
    return this.configs_1.iterator_jk1svi_k$();
  };
  protoOf(ATNConfigSet).clear_j9egeb_k$ = function () {
    if (this.isReadonly_1)
      throw IllegalStateException_init_$Create$('This set is readonly');
    this.configs_1.clear_j9egeb_k$();
    this.cachedHashCode_1 = -1;
    ensureNotNull(this.configLookup_1).clear_j9egeb_k$();
  };
  protoOf(ATNConfigSet).toString = function () {
    var buf = StringBuilder_init_$Create$();
    buf.append_22ad7x_k$(toString(this.elements_4yqkp_k$()));
    if (this.hasSemanticContext_1) {
      buf.append_22ad7x_k$(',hasSemanticContext=').append_g4kq45_k$(this.hasSemanticContext_1);
    }
    if (!(this.uniqueAlt_1 === Companion_getInstance_8().get_INVALID_ALT_NUMBER_idrbu8_k$())) {
      buf.append_22ad7x_k$(',uniqueAlt=').append_t8pm91_k$(this.uniqueAlt_1);
    }
    if (!(this.conflictingAlts_1 == null)) {
      buf.append_22ad7x_k$(',conflictingAlts=').append_t8pm91_k$(this.conflictingAlts_1);
    }
    if (this.dipsIntoOuterContext_1) {
      buf.append_22ad7x_k$(',dipsIntoOuterContext');
    }
    return buf.toString();
  };
  protoOf(ATNConfigSet).toArray_jjyjqa_k$ = function () {
    return ensureNotNull(this.configLookup_1).toArray_jjyjqa_k$();
  };
  protoOf(ATNConfigSet).toArray_6cwqme_k$ = function (a) {
    return ensureNotNull(this.configLookup_1).toArray_poetra_k$(a);
  };
  protoOf(ATNConfigSet).containsAll_ts80yp_k$ = function (elements) {
    throw UnsupportedOperationException_init_$Create$_0();
  };
  protoOf(ATNConfigSet).containsAll_xk45sd_k$ = function (elements) {
    return this.containsAll_ts80yp_k$(elements);
  };
  function _set_isReadOnly__fb15ed($this, _set____db54di) {
    $this.isReadOnly_1 = _set____db54di;
  }
  function _set_verifyATN__309qjn($this, _set____db54di) {
    $this.verifyATN_1 = _set____db54di;
  }
  function _get_verifyATN__wb46y7($this) {
    return $this.verifyATN_1;
  }
  function _set_generateRuleBypassTransitions__ifiwn4($this, _set____db54di) {
    $this.generateRuleBypassTransitions_1 = _set____db54di;
  }
  function _get_generateRuleBypassTransitions__8usz04($this) {
    return $this.generateRuleBypassTransitions_1;
  }
  function ATNDeserializationOptions_init_$Init$($this) {
    ATNDeserializationOptions.call($this);
    $this.verifyATN_1 = true;
    $this.generateRuleBypassTransitions_1 = false;
    return $this;
  }
  function ATNDeserializationOptions_init_$Create$() {
    return ATNDeserializationOptions_init_$Init$(objectCreate(protoOf(ATNDeserializationOptions)));
  }
  function ATNDeserializationOptions_init_$Init$_0(options, $this) {
    ATNDeserializationOptions.call($this);
    $this.verifyATN_1 = options.verifyATN_1;
    $this.generateRuleBypassTransitions_1 = options.generateRuleBypassTransitions_1;
    return $this;
  }
  function ATNDeserializationOptions_init_$Create$_0(options) {
    return ATNDeserializationOptions_init_$Init$_0(options, objectCreate(protoOf(ATNDeserializationOptions)));
  }
  function Companion_10() {
    Companion_instance_10 = this;
    this.defaultOptions_1 = ATNDeserializationOptions_init_$Create$();
    this.defaultOptions_1.makeReadOnly_v1scww_k$();
  }
  protoOf(Companion_10).get_defaultOptions_p6uk0q_k$ = function () {
    return this.defaultOptions_1;
  };
  var Companion_instance_10;
  function Companion_getInstance_11() {
    if (Companion_instance_10 == null)
      new Companion_10();
    return Companion_instance_10;
  }
  protoOf(ATNDeserializationOptions).get_isReadOnly_ndyywl_k$ = function () {
    return this.isReadOnly_1;
  };
  protoOf(ATNDeserializationOptions).set_isVerifyATN_q30vne_k$ = function (verifyATN) {
    this.throwIfReadOnly_f756ln_k$();
    this.verifyATN_1 = verifyATN;
  };
  protoOf(ATNDeserializationOptions).get_isVerifyATN_5c3mr3_k$ = function () {
    return this.verifyATN_1;
  };
  protoOf(ATNDeserializationOptions).set_isGenerateRuleBypassTransitions_zvm09_k$ = function (generateRuleBypassTransitions) {
    this.throwIfReadOnly_f756ln_k$();
    this.generateRuleBypassTransitions_1 = generateRuleBypassTransitions;
  };
  protoOf(ATNDeserializationOptions).get_isGenerateRuleBypassTransitions_91iatq_k$ = function () {
    return this.generateRuleBypassTransitions_1;
  };
  protoOf(ATNDeserializationOptions).makeReadOnly_v1scww_k$ = function () {
    this.isReadOnly_1 = true;
  };
  protoOf(ATNDeserializationOptions).throwIfReadOnly_f756ln_k$ = function () {
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
        THROW_IAE('No enum constant value.');
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
  function _get_BASE_SERIALIZED_UUID__my92xv($this) {
    return $this.BASE_SERIALIZED_UUID_1;
  }
  function _get_ADDED_PRECEDENCE_TRANSITIONS__bqek2r($this) {
    return $this.ADDED_PRECEDENCE_TRANSITIONS_1;
  }
  function _get_ADDED_LEXER_ACTIONS__o7b916($this) {
    return $this.ADDED_LEXER_ACTIONS_1;
  }
  function _get_ADDED_UNICODE_SMP__w7f1t0($this) {
    return $this.ADDED_UNICODE_SMP_1;
  }
  function _get_SUPPORTED_UUIDS__qu5w5y($this) {
    return $this.SUPPORTED_UUIDS_1;
  }
  function ATNDeserializer$Companion$getUnicodeDeserializer$1() {
  }
  protoOf(ATNDeserializer$Companion$getUnicodeDeserializer$1).readUnicode_k0995v_k$ = function (data, p) {
    return Char__toInt_impl_vasixd(data[p]);
  };
  protoOf(ATNDeserializer$Companion$getUnicodeDeserializer$1).size_23och_k$ = function () {
    return 1;
  };
  function ATNDeserializer$Companion$getUnicodeDeserializer$2() {
  }
  protoOf(ATNDeserializer$Companion$getUnicodeDeserializer$2).readUnicode_k0995v_k$ = function (data, p) {
    return Companion_getInstance_12().toInt32_1h50hj_k$(data, p);
  };
  protoOf(ATNDeserializer$Companion$getUnicodeDeserializer$2).size_23och_k$ = function () {
    return 2;
  };
  function _get_deserializationOptions__yg6mjo($this) {
    return $this.deserializationOptions_1;
  }
  function UnicodeDeserializer() {
  }
  function UnicodeDeserializingMode(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function deserializeSets($this, data, p, sets, unicodeDeserializer) {
    var p_0 = p;
    var tmp = Companion_getInstance_12();
    var tmp0 = p_0;
    p_0 = tmp0 + 1 | 0;
    var nsets = tmp.toInt_npyarr_k$(data[tmp0]);
    var inductionVariable = 0;
    if (inductionVariable < nsets)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var nintervals = Companion_getInstance_12().toInt_npyarr_k$(data[p_0]);
        p_0 = p_0 + 1 | 0;
        var set = IntervalSet_init_$Create$_1(new Int32Array([]));
        sets.add_utx5q5_k$(set);
        var tmp_0 = Companion_getInstance_12();
        var tmp3 = p_0;
        p_0 = tmp3 + 1 | 0;
        var containsEof = !(tmp_0.toInt_npyarr_k$(data[tmp3]) === 0);
        if (containsEof) {
          set.add_c9dakn_k$(-1);
        }
        var inductionVariable_0 = 0;
        if (inductionVariable_0 < nintervals)
          do {
            var j = inductionVariable_0;
            inductionVariable_0 = inductionVariable_0 + 1 | 0;
            var a = unicodeDeserializer.readUnicode_k0995v_k$(data, p_0);
            p_0 = p_0 + unicodeDeserializer.size_23och_k$() | 0;
            var b = unicodeDeserializer.readUnicode_k0995v_k$(data, p_0);
            p_0 = p_0 + unicodeDeserializer.size_23och_k$() | 0;
            set.add_6jazo1_k$(a, b);
          }
           while (inductionVariable_0 < nintervals);
      }
       while (inductionVariable < nsets);
    return p_0;
  }
  function Companion_11() {
    Companion_instance_11 = this;
    this.SERIALIZED_VERSION_1 = 3;
    this.BASE_SERIALIZED_UUID_1 = Companion_getInstance_35().fromString_g5hge7_k$('33761B2D-78BB-4A43-8B0B-4F5BEE8AACF3');
    this.ADDED_PRECEDENCE_TRANSITIONS_1 = Companion_getInstance_35().fromString_g5hge7_k$('1DA0C57D-6C06-438A-9B27-10BCB3CE0F61');
    this.ADDED_LEXER_ACTIONS_1 = Companion_getInstance_35().fromString_g5hge7_k$('AADB8D7E-AEEF-4415-AD2B-8204D6CF042E');
    this.ADDED_UNICODE_SMP_1 = Companion_getInstance_35().fromString_g5hge7_k$('59627784-3BE5-417A-B9EB-8131A7286089');
    this.SUPPORTED_UUIDS_1 = ArrayList_init_$Create$_0();
    this.SUPPORTED_UUIDS_1.add_utx5q5_k$(this.BASE_SERIALIZED_UUID_1);
    this.SUPPORTED_UUIDS_1.add_utx5q5_k$(this.ADDED_PRECEDENCE_TRANSITIONS_1);
    this.SUPPORTED_UUIDS_1.add_utx5q5_k$(this.ADDED_LEXER_ACTIONS_1);
    this.SUPPORTED_UUIDS_1.add_utx5q5_k$(this.ADDED_UNICODE_SMP_1);
    this.SERIALIZED_UUID_1 = this.ADDED_UNICODE_SMP_1;
  }
  protoOf(Companion_11).get_SERIALIZED_VERSION_vj4vpi_k$ = function () {
    return this.SERIALIZED_VERSION_1;
  };
  protoOf(Companion_11).get_SERIALIZED_UUID_1lpktp_k$ = function () {
    return this.SERIALIZED_UUID_1;
  };
  protoOf(Companion_11).getUnicodeDeserializer_shxhe8_k$ = function (mode) {
    var tmp;
    if (mode.equals(UnicodeDeserializingMode_UNICODE_BMP_getInstance())) {
      tmp = new ATNDeserializer$Companion$getUnicodeDeserializer$1();
    } else {
      tmp = new ATNDeserializer$Companion$getUnicodeDeserializer$2();
    }
    return tmp;
  };
  protoOf(Companion_11).isFeatureSupported_f689c_k$ = function (feature, actualUuid) {
    var featureIndex = this.SUPPORTED_UUIDS_1.indexOf_si1fv9_k$(feature);
    var tmp;
    if (featureIndex < 0) {
      tmp = false;
    } else {
      tmp = this.SUPPORTED_UUIDS_1.indexOf_si1fv9_k$(actualUuid) >= featureIndex;
    }
    return tmp;
  };
  protoOf(Companion_11).toInt_npyarr_k$ = function (c) {
    return Char__toInt_impl_vasixd(c);
  };
  protoOf(Companion_11).toInt32_1h50hj_k$ = function (data, offset) {
    return Char__toInt_impl_vasixd(data[offset]) | Char__toInt_impl_vasixd(data[offset + 1 | 0]) << 16;
  };
  protoOf(Companion_11).toLong_5l0voz_k$ = function (data, offset) {
    var lowOrder = toLong(this.toInt32_1h50hj_k$(data, offset)).and_4spn93_k$(new Long(-1, 0));
    return lowOrder.or_v7fvkl_k$(toLong(this.toInt32_1h50hj_k$(data, offset + 2 | 0)).shl_bg8if3_k$(32));
  };
  protoOf(Companion_11).toUUID_x4rdo4_k$ = function (data, offset) {
    var leastSigBits = this.toLong_5l0voz_k$(data, offset);
    var mostSigBits = this.toLong_5l0voz_k$(data, offset + 4 | 0);
    return UUID_init_$Create$(mostSigBits, leastSigBits);
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
    deserializationOptions = deserializationOptions === VOID ? Companion_getInstance_11().get_defaultOptions_p6uk0q_k$() : deserializationOptions;
    var deserializationOptions_0 = deserializationOptions;
    if (deserializationOptions_0 == null) {
      deserializationOptions_0 = Companion_getInstance_11().get_defaultOptions_p6uk0q_k$();
    }
    this.deserializationOptions_1 = deserializationOptions_0;
  }
  protoOf(ATNDeserializer).deserialize_wmx9eb_k$ = function (data) {
    var data_0 = data;
    data_0 = copyOf_0(data_0);
    var inductionVariable = 1;
    var last = data_0.length;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        data_0[i] = numberToChar(Char__toInt_impl_vasixd(data_0[i]) - 2 | 0);
      }
       while (inductionVariable < last);
    var p = 0;
    var tmp = Companion_getInstance_12();
    var tmp_0 = data_0;
    var tmp1 = p;
    p = tmp1 + 1 | 0;
    var version = tmp.toInt_npyarr_k$(tmp_0[tmp1]);
    if (!(version === Companion_getInstance_12().SERIALIZED_VERSION_1)) {
      var reason = 'Could not deserialize ATN with version ' + version + ' (expected ' + Companion_getInstance_12().SERIALIZED_VERSION_1 + ').';
      throw UnsupportedOperationException_init_$Create$(reason);
    }
    var uuid = Companion_getInstance_12().toUUID_x4rdo4_k$(data_0, p);
    p = p + 8 | 0;
    if (!Companion_getInstance_12().SUPPORTED_UUIDS_1.contains_aljjnj_k$(uuid)) {
      var reason_0 = 'Could not deserialize ATN with UUID ' + uuid + ' (expected ' + Companion_getInstance_12().SERIALIZED_UUID_1 + ' or a legacy UUID).';
      throw UnsupportedOperationException_init_$Create$(reason_0);
    }
    var supportsPrecedencePredicates = Companion_getInstance_12().isFeatureSupported_f689c_k$(Companion_getInstance_12().ADDED_PRECEDENCE_TRANSITIONS_1, uuid);
    var supportsLexerActions = Companion_getInstance_12().isFeatureSupported_f689c_k$(Companion_getInstance_12().ADDED_LEXER_ACTIONS_1, uuid);
    var tmp_1 = values_0();
    var tmp_2 = Companion_getInstance_12();
    var tmp_3 = data_0;
    var tmp2 = p;
    p = tmp2 + 1 | 0;
    var grammarType = tmp_1[tmp_2.toInt_npyarr_k$(tmp_3[tmp2])];
    var tmp_4 = Companion_getInstance_12();
    var tmp_5 = data_0;
    var tmp3 = p;
    p = tmp3 + 1 | 0;
    var maxTokenType = tmp_4.toInt_npyarr_k$(tmp_5[tmp3]);
    var atn = new ATN(grammarType, maxTokenType);
    var loopBackStateNumbers = ArrayList_init_$Create$_0();
    var endStateNumbers = ArrayList_init_$Create$_0();
    var tmp_6 = Companion_getInstance_12();
    var tmp_7 = data_0;
    var tmp4 = p;
    p = tmp4 + 1 | 0;
    var nstates = tmp_6.toInt_npyarr_k$(tmp_7[tmp4]);
    var inductionVariable_0 = 0;
    if (inductionVariable_0 < nstates)
      $l$loop: do {
        var i_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        var tmp_8 = Companion_getInstance_12();
        var tmp_9 = data_0;
        var tmp6 = p;
        p = tmp6 + 1 | 0;
        var stype = tmp_8.toInt_npyarr_k$(tmp_9[tmp6]);
        if (stype === Companion_getInstance_14().get_INVALID_TYPE_iyehat_k$()) {
          atn.addState_vxh94l_k$(null);
          continue $l$loop;
        }
        var tmp_10 = Companion_getInstance_12();
        var tmp_11 = data_0;
        var tmp7 = p;
        p = tmp7 + 1 | 0;
        var ruleIndex = tmp_10.toInt_npyarr_k$(tmp_11[tmp7]);
        if (ruleIndex === Char__toInt_impl_vasixd(maxValue(Companion_getInstance()))) {
          ruleIndex = -1;
        }
        var s = this.stateFactory_nixojd_k$(stype, ruleIndex);
        if (stype === Companion_getInstance_14().get_LOOP_END_ihty7d_k$()) {
          var tmp_12 = Companion_getInstance_12();
          var tmp_13 = data_0;
          var tmp8 = p;
          p = tmp8 + 1 | 0;
          var loopBackStateNumber = tmp_12.toInt_npyarr_k$(tmp_13[tmp8]);
          loopBackStateNumbers.add_utx5q5_k$(new Pair(s instanceof LoopEndState ? s : THROW_CCE(), loopBackStateNumber));
        } else {
          if (s instanceof BlockStartState) {
            var tmp_14 = Companion_getInstance_12();
            var tmp_15 = data_0;
            var tmp9 = p;
            p = tmp9 + 1 | 0;
            var endStateNumber = tmp_14.toInt_npyarr_k$(tmp_15[tmp9]);
            endStateNumbers.add_utx5q5_k$(new Pair(s, endStateNumber));
          }
        }
        atn.addState_vxh94l_k$(s);
      }
       while (inductionVariable_0 < nstates);
    var tmp10_iterator = loopBackStateNumbers.iterator_jk1svi_k$();
    while (tmp10_iterator.hasNext_bitz1p_k$()) {
      var pair = tmp10_iterator.next_20eer_k$();
      pair.get_first_irdx8n_k$().set_loopBackState_z3ga1o_k$(atn.get_states_jnf5zf_k$().get_c1px32_k$(pair.get_second_jf7fjx_k$()));
    }
    var tmp11_iterator = endStateNumbers.iterator_jk1svi_k$();
    while (tmp11_iterator.hasNext_bitz1p_k$()) {
      var pair_0 = tmp11_iterator.next_20eer_k$();
      var tmp_16 = pair_0.get_first_irdx8n_k$();
      var tmp_17 = atn.get_states_jnf5zf_k$().get_c1px32_k$(pair_0.get_second_jf7fjx_k$());
      tmp_16.set_endState_hzu7i_k$(tmp_17 instanceof BlockEndState ? tmp_17 : THROW_CCE());
    }
    var tmp_18 = Companion_getInstance_12();
    var tmp_19 = data_0;
    var tmp12 = p;
    p = tmp12 + 1 | 0;
    var numNonGreedyStates = tmp_18.toInt_npyarr_k$(tmp_19[tmp12]);
    var inductionVariable_1 = 0;
    if (inductionVariable_1 < numNonGreedyStates)
      do {
        var i_1 = inductionVariable_1;
        inductionVariable_1 = inductionVariable_1 + 1 | 0;
        var tmp_20 = Companion_getInstance_12();
        var tmp_21 = data_0;
        var tmp14 = p;
        p = tmp14 + 1 | 0;
        var stateNumber = tmp_20.toInt_npyarr_k$(tmp_21[tmp14]);
        var tmp_22 = atn.get_states_jnf5zf_k$().get_c1px32_k$(stateNumber);
        (tmp_22 instanceof DecisionState ? tmp_22 : THROW_CCE()).set_nonGreedy_olkkb_k$(true);
      }
       while (inductionVariable_1 < numNonGreedyStates);
    if (supportsPrecedencePredicates) {
      var tmp_23 = Companion_getInstance_12();
      var tmp_24 = data_0;
      var tmp15 = p;
      p = tmp15 + 1 | 0;
      var numPrecedenceStates = tmp_23.toInt_npyarr_k$(tmp_24[tmp15]);
      var inductionVariable_2 = 0;
      if (inductionVariable_2 < numPrecedenceStates)
        do {
          var i_2 = inductionVariable_2;
          inductionVariable_2 = inductionVariable_2 + 1 | 0;
          var tmp_25 = Companion_getInstance_12();
          var tmp_26 = data_0;
          var tmp17 = p;
          p = tmp17 + 1 | 0;
          var stateNumber_0 = tmp_25.toInt_npyarr_k$(tmp_26[tmp17]);
          var tmp_27 = atn.get_states_jnf5zf_k$().get_c1px32_k$(stateNumber_0);
          (tmp_27 instanceof RuleStartState ? tmp_27 : THROW_CCE()).set_isLeftRecursiveRule_y9j1vv_k$(true);
        }
         while (inductionVariable_2 < numPrecedenceStates);
    }
    var tmp_28 = Companion_getInstance_12();
    var tmp_29 = data_0;
    var tmp18 = p;
    p = tmp18 + 1 | 0;
    var nrules = tmp_28.toInt_npyarr_k$(tmp_29[tmp18]);
    if (atn.get_grammarType_yufqxk_k$().equals(ATNType_LEXER_getInstance())) {
      atn.set_ruleToTokenType_ezn791_k$(new Int32Array(nrules));
    }
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp$ret$0 = fillArrayVal(Array(nrules), null);
    atn.set_ruleToStartState_jep67y_k$(tmp$ret$0);
    var inductionVariable_3 = 0;
    if (inductionVariable_3 < nrules)
      do {
        var i_3 = inductionVariable_3;
        inductionVariable_3 = inductionVariable_3 + 1 | 0;
        var tmp_30 = Companion_getInstance_12();
        var tmp_31 = data_0;
        var tmp20 = p;
        p = tmp20 + 1 | 0;
        var s_0 = tmp_30.toInt_npyarr_k$(tmp_31[tmp20]);
        var tmp_32 = atn.get_states_jnf5zf_k$().get_c1px32_k$(s_0);
        var startState = tmp_32 instanceof RuleStartState ? tmp_32 : THROW_CCE();
        ensureNotNull(atn.get_ruleToStartState_u6xedr_k$())[i_3] = startState;
        if (atn.get_grammarType_yufqxk_k$().equals(ATNType_LEXER_getInstance())) {
          var tmp_33 = Companion_getInstance_12();
          var tmp_34 = data_0;
          var tmp21 = p;
          p = tmp21 + 1 | 0;
          var tokenType = tmp_33.toInt_npyarr_k$(tmp_34[tmp21]);
          if (tokenType === 65535) {
            tokenType = Companion_getInstance_6().get_EOF_18juz1_k$();
          }
          ensureNotNull(atn.get_ruleToTokenType_ir5431_k$())[i_3] = tokenType;
          if (!Companion_getInstance_12().isFeatureSupported_f689c_k$(Companion_getInstance_12().ADDED_LEXER_ACTIONS_1, uuid)) {
            var tmp_35 = Companion_getInstance_12();
            var tmp_36 = data_0;
            var tmp22 = p;
            p = tmp22 + 1 | 0;
            var actionIndexIgnored = tmp_35.toInt_npyarr_k$(tmp_36[tmp22]);
          }
        }
      }
       while (inductionVariable_3 < nrules);
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp$ret$1 = fillArrayVal(Array(nrules), null);
    atn.set_ruleToStopState_1z8zo_k$(tmp$ret$1);
    var tmp23_iterator = atn.get_states_jnf5zf_k$().iterator_jk1svi_k$();
    $l$loop_0: while (tmp23_iterator.hasNext_bitz1p_k$()) {
      var state = tmp23_iterator.next_20eer_k$();
      if (!(state instanceof RuleStopState)) {
        continue $l$loop_0;
      }
      var stopState = state;
      ensureNotNull(atn.get_ruleToStopState_5ojl67_k$())[state.get_ruleIndex_qf7nn7_k$()] = stopState;
      ensureNotNull(ensureNotNull(atn.get_ruleToStartState_u6xedr_k$())[state.get_ruleIndex_qf7nn7_k$()]).set_stopState_pwqlxb_k$(stopState);
    }
    var tmp_37 = Companion_getInstance_12();
    var tmp_38 = data_0;
    var tmp24 = p;
    p = tmp24 + 1 | 0;
    var nmodes = tmp_37.toInt_npyarr_k$(tmp_38[tmp24]);
    var inductionVariable_4 = 0;
    if (inductionVariable_4 < nmodes)
      do {
        var i_4 = inductionVariable_4;
        inductionVariable_4 = inductionVariable_4 + 1 | 0;
        var tmp_39 = Companion_getInstance_12();
        var tmp_40 = data_0;
        var tmp26 = p;
        p = tmp26 + 1 | 0;
        var s_1 = tmp_39.toInt_npyarr_k$(tmp_40[tmp26]);
        var tmp_41 = atn.get_modeToStartState_aanefe_k$();
        var tmp_42 = atn.get_states_jnf5zf_k$().get_c1px32_k$(s_1);
        tmp_41.add_utx5q5_k$(tmp_42 instanceof TokensStartState ? tmp_42 : THROW_CCE());
      }
       while (inductionVariable_4 < nmodes);
    var sets = ArrayList_init_$Create$_0();
    p = deserializeSets(this, data_0, p, sets, Companion_getInstance_12().getUnicodeDeserializer_shxhe8_k$(UnicodeDeserializingMode_UNICODE_BMP_getInstance()));
    if (Companion_getInstance_12().isFeatureSupported_f689c_k$(Companion_getInstance_12().ADDED_UNICODE_SMP_1, uuid)) {
      p = deserializeSets(this, data_0, p, sets, Companion_getInstance_12().getUnicodeDeserializer_shxhe8_k$(UnicodeDeserializingMode_UNICODE_SMP_getInstance()));
    }
    var tmp_43 = Companion_getInstance_12();
    var tmp_44 = data_0;
    var tmp27 = p;
    p = tmp27 + 1 | 0;
    var nedges = tmp_43.toInt_npyarr_k$(tmp_44[tmp27]);
    var inductionVariable_5 = 0;
    if (inductionVariable_5 < nedges)
      do {
        var i_5 = inductionVariable_5;
        inductionVariable_5 = inductionVariable_5 + 1 | 0;
        var src = Companion_getInstance_12().toInt_npyarr_k$(data_0[p]);
        var trg = Companion_getInstance_12().toInt_npyarr_k$(data_0[p + 1 | 0]);
        var ttype = Companion_getInstance_12().toInt_npyarr_k$(data_0[p + 2 | 0]);
        var arg1 = Companion_getInstance_12().toInt_npyarr_k$(data_0[p + 3 | 0]);
        var arg2 = Companion_getInstance_12().toInt_npyarr_k$(data_0[p + 4 | 0]);
        var arg3 = Companion_getInstance_12().toInt_npyarr_k$(data_0[p + 5 | 0]);
        var trans = this.edgeFactory_p7xmyk_k$(atn, ttype, src, trg, arg1, arg2, arg3, sets);
        var srcState = atn.get_states_jnf5zf_k$().get_c1px32_k$(src);
        ensureNotNull(srcState).addTransition_k2r0nd_k$(trans);
        p = p + 6 | 0;
      }
       while (inductionVariable_5 < nedges);
    var tmp29_iterator = atn.get_states_jnf5zf_k$().iterator_jk1svi_k$();
    while (tmp29_iterator.hasNext_bitz1p_k$()) {
      var state_0 = tmp29_iterator.next_20eer_k$();
      var inductionVariable_6 = 0;
      var last_0 = ensureNotNull(state_0).get_numberOfTransitions_a2gh11_k$();
      if (inductionVariable_6 < last_0)
        $l$loop_1: do {
          var i_6 = inductionVariable_6;
          inductionVariable_6 = inductionVariable_6 + 1 | 0;
          var tmp_45 = ensureNotNull(state_0).transition_nw6t99_k$(i_6);
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
          if (ensureNotNull(ensureNotNull(atn.get_ruleToStartState_u6xedr_k$())[ensureNotNull(ruleTransition.get_target_juba8q_k$()).get_ruleIndex_qf7nn7_k$()]).get_isLeftRecursiveRule_drccus_k$()) {
            if (ruleTransition.get_precedence_hj68vh_k$() === 0) {
              outermostPrecedenceReturn = ensureNotNull(ruleTransition.get_target_juba8q_k$()).get_ruleIndex_qf7nn7_k$();
            }
          }
          var returnTransition = new EpsilonTransition(ruleTransition.get_followState_uwxfd5_k$(), outermostPrecedenceReturn);
          ensureNotNull(ensureNotNull(atn.get_ruleToStopState_5ojl67_k$())[ensureNotNull(ensureNotNull(ruleTransition).get_target_juba8q_k$()).get_ruleIndex_qf7nn7_k$()]).addTransition_k2r0nd_k$(returnTransition);
        }
         while (inductionVariable_6 < last_0);
    }
    var tmp32_iterator = atn.get_states_jnf5zf_k$().iterator_jk1svi_k$();
    while (tmp32_iterator.hasNext_bitz1p_k$()) {
      var state_1 = tmp32_iterator.next_20eer_k$();
      if (state_1 instanceof BlockStartState) {
        if ((state_1 instanceof BlockStartState ? state_1 : THROW_CCE()).get_endState_3g6vgh_k$() == null) {
          throw IllegalStateException_init_$Create$_0();
        }
        if (!(ensureNotNull((state_1 instanceof BlockStartState ? state_1 : THROW_CCE()).get_endState_3g6vgh_k$()).get_startState_onnbo8_k$() == null)) {
          throw IllegalStateException_init_$Create$_0();
        }
        var tmp_47 = ensureNotNull((state_1 instanceof BlockStartState ? state_1 : THROW_CCE()).get_endState_3g6vgh_k$());
        tmp_47.set_startState_ucwxc7_k$(state_1 instanceof BlockStartState ? state_1 : THROW_CCE());
      }
      if (state_1 instanceof PlusLoopbackState) {
        var loopbackState = state_1 instanceof PlusLoopbackState ? state_1 : THROW_CCE();
        var inductionVariable_7 = 0;
        var last_1 = loopbackState.get_numberOfTransitions_a2gh11_k$();
        if (inductionVariable_7 < last_1)
          do {
            var i_7 = inductionVariable_7;
            inductionVariable_7 = inductionVariable_7 + 1 | 0;
            var target = loopbackState.transition_nw6t99_k$(i_7).get_target_juba8q_k$();
            if (target instanceof PlusBlockStartState) {
              (target instanceof PlusBlockStartState ? target : THROW_CCE()).set_loopBackState_p9qxpo_k$(loopbackState);
            }
          }
           while (inductionVariable_7 < last_1);
      } else {
        if (state_1 instanceof StarLoopbackState) {
          var loopbackState_0 = state_1 instanceof StarLoopbackState ? state_1 : THROW_CCE();
          var inductionVariable_8 = 0;
          var last_2 = loopbackState_0.get_numberOfTransitions_a2gh11_k$();
          if (inductionVariable_8 < last_2)
            do {
              var i_8 = inductionVariable_8;
              inductionVariable_8 = inductionVariable_8 + 1 | 0;
              var target_0 = loopbackState_0.transition_nw6t99_k$(i_8).get_target_juba8q_k$();
              if (target_0 instanceof StarLoopEntryState) {
                (target_0 instanceof StarLoopEntryState ? target_0 : THROW_CCE()).set_loopBackState_atr1w7_k$(loopbackState_0);
              }
            }
             while (inductionVariable_8 < last_2);
        }
      }
    }
    var tmp_48 = Companion_getInstance_12();
    var tmp_49 = data_0;
    var tmp35 = p;
    p = tmp35 + 1 | 0;
    var ndecisions = tmp_48.toInt_npyarr_k$(tmp_49[tmp35]);
    var inductionVariable_9 = 1;
    if (inductionVariable_9 <= ndecisions)
      do {
        var i_9 = inductionVariable_9;
        inductionVariable_9 = inductionVariable_9 + 1 | 0;
        var tmp_50 = Companion_getInstance_12();
        var tmp_51 = data_0;
        var tmp37 = p;
        p = tmp37 + 1 | 0;
        var s_2 = tmp_50.toInt_npyarr_k$(tmp_51[tmp37]);
        var tmp_52 = atn.get_states_jnf5zf_k$().get_c1px32_k$(s_2);
        var decState = tmp_52 instanceof DecisionState ? tmp_52 : THROW_CCE();
        atn.get_decisionToState_k8y6b5_k$().add_utx5q5_k$(decState);
        decState.set_decision_mzbz5d_k$(i_9 - 1 | 0);
      }
       while (!(i_9 === ndecisions));
    if (atn.get_grammarType_yufqxk_k$().equals(ATNType_LEXER_getInstance())) {
      if (supportsLexerActions) {
        // Inline function 'kotlin.arrayOfNulls' call
        var tmp_53 = Companion_getInstance_12();
        var tmp_54 = data_0;
        var tmp38 = p;
        p = tmp38 + 1 | 0;
        var size = tmp_53.toInt_npyarr_k$(tmp_54[tmp38]);
        var tmp$ret$2 = fillArrayVal(Array(size), null);
        atn.set_lexerActions_9idons_k$(tmp$ret$2);
        var inductionVariable_10 = 0;
        var last_3 = ensureNotNull(atn.get_lexerActions_uuxhui_k$()).length - 1 | 0;
        if (inductionVariable_10 <= last_3)
          do {
            var i_10 = inductionVariable_10;
            inductionVariable_10 = inductionVariable_10 + 1 | 0;
            var tmp_55 = values_1();
            var tmp_56 = Companion_getInstance_12();
            var tmp_57 = data_0;
            var tmp40 = p;
            p = tmp40 + 1 | 0;
            var actionType = tmp_55[tmp_56.toInt_npyarr_k$(tmp_57[tmp40])];
            var tmp_58 = Companion_getInstance_12();
            var tmp_59 = data_0;
            var tmp41 = p;
            p = tmp41 + 1 | 0;
            var data1 = tmp_58.toInt_npyarr_k$(tmp_59[tmp41]);
            if (data1 === 65535) {
              data1 = -1;
            }
            var tmp_60 = Companion_getInstance_12();
            var tmp_61 = data_0;
            var tmp42 = p;
            p = tmp42 + 1 | 0;
            var data2 = tmp_60.toInt_npyarr_k$(tmp_61[tmp42]);
            if (data2 === 65535) {
              data2 = -1;
            }
            var lexerAction = this.lexerActionFactory_c7kau4_k$(actionType, data1, data2);
            ensureNotNull(atn.get_lexerActions_uuxhui_k$())[i_10] = lexerAction;
          }
           while (inductionVariable_10 <= last_3);
      } else {
        var legacyLexerActions = ArrayList_init_$Create$_0();
        var tmp43_iterator = atn.get_states_jnf5zf_k$().iterator_jk1svi_k$();
        while (tmp43_iterator.hasNext_bitz1p_k$()) {
          var state_2 = tmp43_iterator.next_20eer_k$();
          var inductionVariable_11 = 0;
          var last_4 = ensureNotNull(state_2).get_numberOfTransitions_a2gh11_k$();
          if (inductionVariable_11 < last_4)
            $l$loop_2: do {
              var i_11 = inductionVariable_11;
              inductionVariable_11 = inductionVariable_11 + 1 | 0;
              var tmp_62 = ensureNotNull(state_2).transition_nw6t99_k$(i_11);
              var tmp45_elvis_lhs = tmp_62 instanceof ActionTransition ? tmp_62 : null;
              var tmp_63;
              if (tmp45_elvis_lhs == null) {
                continue $l$loop_2;
              } else {
                tmp_63 = tmp45_elvis_lhs;
              }
              var transition = tmp_63;
              var ruleIndex_0 = (transition instanceof ActionTransition ? transition : THROW_CCE()).get_ruleIndex_qf7nn7_k$();
              var actionIndex = (transition instanceof ActionTransition ? transition : THROW_CCE()).get_actionIndex_va748d_k$();
              var lexerAction_0 = new LexerCustomAction(ruleIndex_0, actionIndex);
              state_2.setTransition_e7cbd8_k$(i_11, new ActionTransition(ensureNotNull(transition.get_target_juba8q_k$()), ruleIndex_0, legacyLexerActions.get_size_woubt6_k$(), false));
              legacyLexerActions.add_utx5q5_k$(lexerAction_0);
            }
             while (inductionVariable_11 < last_4);
        }
        // Inline function 'kotlin.collections.toTypedArray' call
        var tmp$ret$3 = copyToArray(legacyLexerActions);
        atn.set_lexerActions_9idons_k$(tmp$ret$3);
      }
    }
    this.markPrecedenceDecisions_liia95_k$(atn);
    if (this.deserializationOptions_1.get_isVerifyATN_5c3mr3_k$()) {
      this.verifyATN_ayxiol_k$(atn);
    }
    if (this.deserializationOptions_1.get_isGenerateRuleBypassTransitions_91iatq_k$() ? atn.get_grammarType_yufqxk_k$().equals(ATNType_PARSER_getInstance()) : false) {
      atn.set_ruleToTokenType_ezn791_k$(new Int32Array(ensureNotNull(atn.get_ruleToStartState_u6xedr_k$()).length));
      var inductionVariable_12 = 0;
      var last_5 = ensureNotNull(atn.get_ruleToStartState_u6xedr_k$()).length - 1 | 0;
      if (inductionVariable_12 <= last_5)
        do {
          var i_12 = inductionVariable_12;
          inductionVariable_12 = inductionVariable_12 + 1 | 0;
          ensureNotNull(atn.get_ruleToTokenType_ir5431_k$())[i_12] = (atn.get_maxTokenType_gnkz54_k$() + i_12 | 0) + 1 | 0;
        }
         while (inductionVariable_12 <= last_5);
      var inductionVariable_13 = 0;
      var last_6 = ensureNotNull(atn.get_ruleToStartState_u6xedr_k$()).length - 1 | 0;
      if (inductionVariable_13 <= last_6)
        do {
          var i_13 = inductionVariable_13;
          inductionVariable_13 = inductionVariable_13 + 1 | 0;
          var bypassStart = new BasicBlockStartState();
          bypassStart.set_ruleIndex_ooco9b_k$(i_13);
          atn.addState_vxh94l_k$(bypassStart);
          var bypassStop = new BlockEndState();
          bypassStop.set_ruleIndex_ooco9b_k$(i_13);
          atn.addState_vxh94l_k$(bypassStop);
          bypassStart.set_endState_hzu7i_k$(bypassStop);
          atn.defineDecisionState_dj4sh8_k$(bypassStart);
          bypassStop.set_startState_ucwxc7_k$(bypassStart);
          var endState;
          var excludeTransition = null;
          if (ensureNotNull(ensureNotNull(atn.get_ruleToStartState_u6xedr_k$())[i_13]).get_isLeftRecursiveRule_drccus_k$()) {
            endState = null;
            var tmp48_iterator = atn.get_states_jnf5zf_k$().iterator_jk1svi_k$();
            $l$loop_6: while (tmp48_iterator.hasNext_bitz1p_k$()) {
              var state_3 = tmp48_iterator.next_20eer_k$();
              if (!(ensureNotNull(state_3).get_ruleIndex_qf7nn7_k$() === i_13)) {
                continue $l$loop_6;
              }
              if (!(state_3 instanceof StarLoopEntryState)) {
                continue $l$loop_6;
              }
              var tmp_64 = state_3.transition_nw6t99_k$(state_3.get_numberOfTransitions_a2gh11_k$() - 1 | 0).get_target_juba8q_k$();
              var tmp49_elvis_lhs = tmp_64 instanceof LoopEndState ? tmp_64 : null;
              var tmp_65;
              if (tmp49_elvis_lhs == null) {
                continue $l$loop_6;
              } else {
                tmp_65 = tmp49_elvis_lhs;
              }
              var maybeLoopEndState = tmp_65;
              var tmp_66;
              if (maybeLoopEndState.get_epsilonOnlyTransitions_u4tzg1_k$()) {
                var tmp_67 = maybeLoopEndState.transition_nw6t99_k$(0).get_target_juba8q_k$();
                tmp_66 = tmp_67 instanceof RuleStopState;
              } else {
                tmp_66 = false;
              }
              if (tmp_66) {
                endState = state_3;
                break $l$loop_6;
              }
            }
            if (endState == null) {
              throw UnsupportedOperationException_init_$Create$("Couldn't identify final state of the precedence rule prefix section.");
            }
            excludeTransition = ensureNotNull((endState instanceof StarLoopEntryState ? endState : THROW_CCE()).get_loopBackState_ape3y5_k$()).transition_nw6t99_k$(0);
          } else {
            endState = ensureNotNull(atn.get_ruleToStopState_5ojl67_k$())[i_13];
          }
          var tmp50_iterator = atn.get_states_jnf5zf_k$().iterator_jk1svi_k$();
          while (tmp50_iterator.hasNext_bitz1p_k$()) {
            var state_4 = tmp50_iterator.next_20eer_k$();
            var tmp51_iterator = ensureNotNull(state_4).get_transitions_hojw6j_k$().iterator_jk1svi_k$();
            $l$loop_7: while (tmp51_iterator.hasNext_bitz1p_k$()) {
              var transition_0 = tmp51_iterator.next_20eer_k$();
              if (transition_0 === excludeTransition) {
                continue $l$loop_7;
              }
              if (transition_0.get_target_juba8q_k$() === endState) {
                transition_0.set_target_oy4mhj_k$(bypassStop);
              }
            }
          }
          while (ensureNotNull(ensureNotNull(atn.get_ruleToStartState_u6xedr_k$())[i_13]).get_numberOfTransitions_a2gh11_k$() > 0) {
            var transition_1 = ensureNotNull(ensureNotNull(atn.get_ruleToStartState_u6xedr_k$())[i_13]).removeTransition_lzz6f3_k$(ensureNotNull(ensureNotNull(atn.get_ruleToStartState_u6xedr_k$())[i_13]).get_numberOfTransitions_a2gh11_k$() - 1 | 0);
            bypassStart.addTransition_k2r0nd_k$(transition_1);
          }
          ensureNotNull(ensureNotNull(atn.get_ruleToStartState_u6xedr_k$())[i_13]).addTransition_k2r0nd_k$(new EpsilonTransition(bypassStart));
          bypassStop.addTransition_k2r0nd_k$(new EpsilonTransition(ensureNotNull(endState)));
          var matchState = new BasicState();
          atn.addState_vxh94l_k$(matchState);
          matchState.addTransition_k2r0nd_k$(new AtomTransition(bypassStop, ensureNotNull(atn.get_ruleToTokenType_ir5431_k$())[i_13]));
          bypassStart.addTransition_k2r0nd_k$(new EpsilonTransition(matchState));
        }
         while (inductionVariable_13 <= last_6);
      if (this.deserializationOptions_1.get_isVerifyATN_5c3mr3_k$()) {
        this.verifyATN_ayxiol_k$(atn);
      }
    }
    return atn;
  };
  protoOf(ATNDeserializer).markPrecedenceDecisions_liia95_k$ = function (atn) {
    var tmp0_iterator = atn.get_states_jnf5zf_k$().iterator_jk1svi_k$();
    $l$loop: while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var state = tmp0_iterator.next_20eer_k$();
      if (!(state instanceof StarLoopEntryState)) {
        continue $l$loop;
      }
      if (ensureNotNull(ensureNotNull(atn.get_ruleToStartState_u6xedr_k$())[state.get_ruleIndex_qf7nn7_k$()]).get_isLeftRecursiveRule_drccus_k$()) {
        var maybeLoopEndState = state.transition_nw6t99_k$(state.get_numberOfTransitions_a2gh11_k$() - 1 | 0).get_target_juba8q_k$();
        if (maybeLoopEndState instanceof LoopEndState) {
          var tmp;
          if (maybeLoopEndState.get_epsilonOnlyTransitions_u4tzg1_k$()) {
            var tmp_0 = maybeLoopEndState.transition_nw6t99_k$(0).get_target_juba8q_k$();
            tmp = tmp_0 instanceof RuleStopState;
          } else {
            tmp = false;
          }
          if (tmp) {
            (state instanceof StarLoopEntryState ? state : THROW_CCE()).set_isPrecedenceDecision_hxh3bs_k$(true);
          }
        }
      }
    }
  };
  protoOf(ATNDeserializer).verifyATN_ayxiol_k$ = function (atn) {
    var tmp0_iterator = atn.get_states_jnf5zf_k$().iterator_jk1svi_k$();
    $l$loop: while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var state = tmp0_iterator.next_20eer_k$();
      if (state == null) {
        continue $l$loop;
      }
      this.checkCondition$default_o2s5wg_k$(ensureNotNull(state).onlyHasEpsilonTransitions_stt9um_k$() ? true : ensureNotNull(state).get_numberOfTransitions_a2gh11_k$() <= 1);
      if (state instanceof PlusBlockStartState) {
        this.checkCondition$default_o2s5wg_k$(!((state instanceof PlusBlockStartState ? state : THROW_CCE()).get_loopBackState_ape3y5_k$() == null));
      }
      if (state instanceof StarLoopEntryState) {
        var starLoopEntryState = state instanceof StarLoopEntryState ? state : THROW_CCE();
        this.checkCondition$default_o2s5wg_k$(!(ensureNotNull(starLoopEntryState).get_loopBackState_ape3y5_k$() == null));
        this.checkCondition$default_o2s5wg_k$(ensureNotNull(starLoopEntryState).get_numberOfTransitions_a2gh11_k$() === 2);
        var tmp = ensureNotNull(starLoopEntryState).transition_nw6t99_k$(0).get_target_juba8q_k$();
        if (tmp instanceof StarBlockStartState) {
          var tmp_0 = ensureNotNull(starLoopEntryState).transition_nw6t99_k$(1).get_target_juba8q_k$();
          this.checkCondition$default_o2s5wg_k$(tmp_0 instanceof LoopEndState);
          this.checkCondition$default_o2s5wg_k$(!ensureNotNull(starLoopEntryState).get_nonGreedy_70fdwk_k$());
        } else {
          var tmp_1 = ensureNotNull(starLoopEntryState).transition_nw6t99_k$(0).get_target_juba8q_k$();
          if (tmp_1 instanceof LoopEndState) {
            var tmp_2 = ensureNotNull(starLoopEntryState).transition_nw6t99_k$(1).get_target_juba8q_k$();
            this.checkCondition$default_o2s5wg_k$(tmp_2 instanceof StarBlockStartState);
            this.checkCondition$default_o2s5wg_k$(ensureNotNull(starLoopEntryState).get_nonGreedy_70fdwk_k$());
          } else {
            throw IllegalStateException_init_$Create$_0();
          }
        }
      }
      if (state instanceof StarLoopbackState) {
        this.checkCondition$default_o2s5wg_k$(ensureNotNull(state).get_numberOfTransitions_a2gh11_k$() === 1);
        var tmp_3 = ensureNotNull(state).transition_nw6t99_k$(0).get_target_juba8q_k$();
        this.checkCondition$default_o2s5wg_k$(tmp_3 instanceof StarLoopEntryState);
      }
      if (state instanceof LoopEndState) {
        this.checkCondition$default_o2s5wg_k$(!((state instanceof LoopEndState ? state : THROW_CCE()).get_loopBackState_ape3y5_k$() == null));
      }
      if (state instanceof RuleStartState) {
        this.checkCondition$default_o2s5wg_k$(!((state instanceof RuleStartState ? state : THROW_CCE()).get_stopState_zagbgm_k$() == null));
      }
      if (state instanceof BlockStartState) {
        this.checkCondition$default_o2s5wg_k$(!((state instanceof BlockStartState ? state : THROW_CCE()).get_endState_3g6vgh_k$() == null));
      }
      if (state instanceof BlockEndState) {
        this.checkCondition$default_o2s5wg_k$(!((state instanceof BlockEndState ? state : THROW_CCE()).get_startState_onnbo8_k$() == null));
      }
      if (state instanceof DecisionState) {
        var decisionState = state instanceof DecisionState ? state : THROW_CCE();
        this.checkCondition$default_o2s5wg_k$(ensureNotNull(decisionState).get_numberOfTransitions_a2gh11_k$() <= 1 ? true : ensureNotNull(decisionState).get_decision_mg4f2z_k$() >= 0);
      } else {
        var tmp_4;
        if (ensureNotNull(state).get_numberOfTransitions_a2gh11_k$() <= 1) {
          tmp_4 = true;
        } else {
          tmp_4 = state instanceof RuleStopState;
        }
        this.checkCondition$default_o2s5wg_k$(tmp_4);
      }
    }
  };
  protoOf(ATNDeserializer).checkCondition_ynadh7_k$ = function (condition, message) {
    if (!condition) {
      throw IllegalStateException_init_$Create$(ensureNotNull(message));
    }
  };
  protoOf(ATNDeserializer).checkCondition$default_o2s5wg_k$ = function (condition, message, $super) {
    message = message === VOID ? null : message;
    var tmp;
    if ($super === VOID) {
      this.checkCondition_ynadh7_k$(condition, message);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.checkCondition_ynadh7_k$.call(this, condition, message);
    }
    return tmp;
  };
  protoOf(ATNDeserializer).edgeFactory_p7xmyk_k$ = function (atn, type, src, trg, arg1, arg2, arg3, sets) {
    var target = ensureNotNull(atn.get_states_jnf5zf_k$().get_c1px32_k$(trg));
    if (type === Companion_getInstance_27().get_EPSILON_c96d27_k$())
      return new EpsilonTransition(target);
    else if (type === Companion_getInstance_27().get_RANGE_ifnq44_k$()) {
      var tmp;
      if (!(arg3 === 0)) {
        tmp = new RangeTransition(target, Companion_getInstance_6().get_EOF_18juz1_k$(), arg2);
      } else {
        tmp = new RangeTransition(target, arg1, arg2);
      }
      return tmp;
    } else if (type === Companion_getInstance_27().get_RULE_wo8tad_k$()) {
      var tmp_0 = atn.get_states_jnf5zf_k$().get_c1px32_k$(arg1);
      return new RuleTransition(tmp_0 instanceof RuleStartState ? tmp_0 : THROW_CCE(), arg2, arg3, target);
    } else if (type === Companion_getInstance_27().get_PREDICATE_wb07am_k$()) {
      return new PredicateTransition(target, arg1, arg2, !(arg3 === 0));
    } else if (type === Companion_getInstance_27().get_PRECEDENCE_9id17x_k$())
      return new PrecedencePredicateTransition(target, arg1);
    else if (type === Companion_getInstance_27().get_ATOM_wnxxui_k$()) {
      var tmp_1;
      if (!(arg3 === 0)) {
        tmp_1 = new AtomTransition(target, Companion_getInstance_6().get_EOF_18juz1_k$());
      } else {
        tmp_1 = new AtomTransition(target, arg1);
      }
      return tmp_1;
    } else if (type === Companion_getInstance_27().get_ACTION_4s122p_k$()) {
      return new ActionTransition(target, arg1, arg2, !(arg3 === 0));
    } else if (type === Companion_getInstance_27().get_SET_18jktj_k$())
      return new SetTransition(target, sets.get_c1px32_k$(arg1));
    else if (type === Companion_getInstance_27().get_NOT_SET_mnxk4z_k$())
      return new NotSetTransition(target, sets.get_c1px32_k$(arg1));
    else if (type === Companion_getInstance_27().get_WILDCARD_wrqxsz_k$())
      return new WildcardTransition(target);
    throw IllegalArgumentException_init_$Create$('The specified transition type is not valid.');
  };
  protoOf(ATNDeserializer).stateFactory_nixojd_k$ = function (type, ruleIndex) {
    var s;
    if (type === Companion_getInstance_14().get_INVALID_TYPE_iyehat_k$())
      return null;
    else if (type === Companion_getInstance_14().get_BASIC_i6v4dh_k$())
      s = new BasicState();
    else if (type === Companion_getInstance_14().get_RULE_START_432uk8_k$())
      s = new RuleStartState();
    else if (type === Companion_getInstance_14().get_BLOCK_START_dx6npj_k$())
      s = new BasicBlockStartState();
    else if (type === Companion_getInstance_14().get_PLUS_BLOCK_START_m3p2ek_k$())
      s = new PlusBlockStartState();
    else if (type === Companion_getInstance_14().get_STAR_BLOCK_START_v2275g_k$())
      s = new StarBlockStartState();
    else if (type === Companion_getInstance_14().get_TOKEN_START_pdxekt_k$())
      s = new TokensStartState();
    else if (type === Companion_getInstance_14().get_RULE_STOP_khn5q4_k$())
      s = new RuleStopState();
    else if (type === Companion_getInstance_14().get_BLOCK_END_1zbwe8_k$())
      s = new BlockEndState();
    else if (type === Companion_getInstance_14().get_STAR_LOOP_BACK_f40vlq_k$())
      s = new StarLoopbackState();
    else if (type === Companion_getInstance_14().get_STAR_LOOP_ENTRY_sp54o5_k$())
      s = new StarLoopEntryState();
    else if (type === Companion_getInstance_14().get_PLUS_LOOP_BACK_kykime_k$())
      s = new PlusLoopbackState();
    else if (type === Companion_getInstance_14().get_LOOP_END_ihty7d_k$())
      s = new LoopEndState();
    else {
      var message = 'The specified state type ' + type + ' is not valid.';
      throw IllegalArgumentException_init_$Create$(message);
    }
    s.set_ruleIndex_ooco9b_k$(ruleIndex);
    return s;
  };
  protoOf(ATNDeserializer).lexerActionFactory_c7kau4_k$ = function (type, data1, data2) {
    switch (type.get_ordinal_ip24qg_k$()) {
      case 0:
        return new LexerChannelAction(data1);
      case 1:
        return new LexerCustomAction(data1, data2);
      case 2:
        return new LexerModeAction(data1);
      case 3:
        return Companion_getInstance_18().get_INSTANCE_9oh0gy_k$();
      case 4:
        return Companion_getInstance_19().get_INSTANCE_9oh0gy_k$();
      case 5:
        return new LexerPushModeAction(data1);
      case 6:
        return Companion_getInstance_20().get_INSTANCE_9oh0gy_k$();
      case 7:
        return new LexerTypeAction(data1);
      default:
        var message = 'The specified lexer action type ' + type + ' is not valid.';
        throw IllegalArgumentException_init_$Create$(message);
    }
  };
  protoOf(ATNDeserializer).deserializeIntegers_bb7mng_k$ = function (serializedIntegersATN) {
    // Inline function 'kotlin.collections.map' call
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(serializedIntegersATN.length);
    var inductionVariable = 0;
    var last = serializedIntegersATN.length;
    while (inductionVariable < last) {
      var item = serializedIntegersATN[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      // Inline function 'org.antlr.v4.kotlinruntime.atn.ATNDeserializer.deserializeIntegers.<anonymous>' call
      var tmp$ret$0 = numberToChar(item);
      destination.add_utx5q5_k$(new Char(tmp$ret$0));
    }
    var chars = toCharArray(destination);
    return this.deserialize_wmx9eb_k$(chars);
  };
  function Companion_12() {
    Companion_instance_12 = this;
    this.SERIALIZED_VERSION_1 = Companion_getInstance_12().get_SERIALIZED_VERSION_vj4vpi_k$();
    this.SERIALIZED_UUID_1 = Companion_getInstance_12().get_SERIALIZED_UUID_1lpktp_k$();
    this.ERROR_1 = DFAState_init_$Create$_1(new ATNConfigSet());
    this.ERROR_1.set_stateNumber_ar8wln_k$(IntCompanionObject_getInstance().get_MAX_VALUE_54a9lf_k$());
  }
  protoOf(Companion_12).get_SERIALIZED_VERSION_vj4vpi_k$ = function () {
    return this.SERIALIZED_VERSION_1;
  };
  protoOf(Companion_12).get_SERIALIZED_UUID_1lpktp_k$ = function () {
    return this.SERIALIZED_UUID_1;
  };
  protoOf(Companion_12).get_ERROR_i8tccf_k$ = function () {
    return this.ERROR_1;
  };
  protoOf(Companion_12).deserialize_wmx9eb_k$ = function (data) {
    // Inline function 'kotlin.TODO' call
    throw new NotImplementedError();
  };
  protoOf(Companion_12).checkCondition_xsc66a_k$ = function (condition) {
    // Inline function 'kotlin.TODO' call
    throw new NotImplementedError();
  };
  protoOf(Companion_12).checkCondition_sa1g0o_k$ = function (condition, message) {
    // Inline function 'kotlin.TODO' call
    throw new NotImplementedError();
  };
  protoOf(Companion_12).toInt_npyarr_k$ = function (c) {
    // Inline function 'kotlin.TODO' call
    throw new NotImplementedError();
  };
  protoOf(Companion_12).toInt32_1h50hj_k$ = function (data, offset) {
    // Inline function 'kotlin.TODO' call
    throw new NotImplementedError();
  };
  protoOf(Companion_12).toLong_5l0voz_k$ = function (data, offset) {
    // Inline function 'kotlin.TODO' call
    throw new NotImplementedError();
  };
  protoOf(Companion_12).toUUID_x4rdo4_k$ = function (data, offset) {
    // Inline function 'kotlin.TODO' call
    throw new NotImplementedError();
  };
  protoOf(Companion_12).edgeFactory_p7xmyk_k$ = function (atn, type, src, trg, arg1, arg2, arg3, sets) {
    // Inline function 'kotlin.TODO' call
    throw new NotImplementedError();
  };
  protoOf(Companion_12).stateFactory_nixojd_k$ = function (type, ruleIndex) {
    // Inline function 'kotlin.TODO' call
    throw new NotImplementedError();
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
  protoOf(ATNSimulator).get_atn_18j9am_k$ = function () {
    return this.atn_1;
  };
  protoOf(ATNSimulator).get_sharedContextCache_zbguan_k$ = function () {
    return this.sharedContextCache_1;
  };
  protoOf(ATNSimulator).clearDFA_elg0ci_k$ = function () {
    throw UnsupportedOperationException_init_$Create$('This ATN simulator does not support clearing the DFA.');
  };
  protoOf(ATNSimulator).getCachedContext_vjfk4r_k$ = function (context) {
    if (this.sharedContextCache_1 == null)
      return context;
    // Inline function 'com.strumenta.kotlinmultiplatform.synchronized' call
    this.sharedContextCache_1;
    var visited = new IdentityHashMap();
    return Companion_getInstance_22().getCachedContext_gp1kj5_k$(context, this.sharedContextCache_1, visited);
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
  protoOf(Companion_13).get_INITIAL_NUM_TRANSITIONS_d14ri9_k$ = function () {
    return this.INITIAL_NUM_TRANSITIONS_1;
  };
  protoOf(Companion_13).get_INVALID_TYPE_iyehat_k$ = function () {
    return this.INVALID_TYPE_1;
  };
  protoOf(Companion_13).get_BASIC_i6v4dh_k$ = function () {
    return this.BASIC_1;
  };
  protoOf(Companion_13).get_RULE_START_432uk8_k$ = function () {
    return this.RULE_START_1;
  };
  protoOf(Companion_13).get_BLOCK_START_dx6npj_k$ = function () {
    return this.BLOCK_START_1;
  };
  protoOf(Companion_13).get_PLUS_BLOCK_START_m3p2ek_k$ = function () {
    return this.PLUS_BLOCK_START_1;
  };
  protoOf(Companion_13).get_STAR_BLOCK_START_v2275g_k$ = function () {
    return this.STAR_BLOCK_START_1;
  };
  protoOf(Companion_13).get_TOKEN_START_pdxekt_k$ = function () {
    return this.TOKEN_START_1;
  };
  protoOf(Companion_13).get_RULE_STOP_khn5q4_k$ = function () {
    return this.RULE_STOP_1;
  };
  protoOf(Companion_13).get_BLOCK_END_1zbwe8_k$ = function () {
    return this.BLOCK_END_1;
  };
  protoOf(Companion_13).get_STAR_LOOP_BACK_f40vlq_k$ = function () {
    return this.STAR_LOOP_BACK_1;
  };
  protoOf(Companion_13).get_STAR_LOOP_ENTRY_sp54o5_k$ = function () {
    return this.STAR_LOOP_ENTRY_1;
  };
  protoOf(Companion_13).get_PLUS_LOOP_BACK_kykime_k$ = function () {
    return this.PLUS_LOOP_BACK_1;
  };
  protoOf(Companion_13).get_LOOP_END_ihty7d_k$ = function () {
    return this.LOOP_END_1;
  };
  protoOf(Companion_13).get_serializationNames_bjbnwh_k$ = function () {
    return this.serializationNames_1;
  };
  protoOf(Companion_13).get_INVALID_STATE_NUMBER_d1yr20_k$ = function () {
    return this.INVALID_STATE_NUMBER_1;
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
    this.stateNumber_1 = -1;
    this.ruleIndex_1 = 0;
    this.epsilonOnlyTransitions_1 = false;
    this.transitions_1 = ArrayList_init_$Create$(Companion_getInstance_14().INITIAL_NUM_TRANSITIONS_1);
    this.nextTokenWithinRule_1 = null;
  }
  protoOf(ATNState).set_atn_m9fetc_k$ = function (_set____db54di) {
    this.atn_1 = _set____db54di;
  };
  protoOf(ATNState).get_atn_18j9am_k$ = function () {
    return this.atn_1;
  };
  protoOf(ATNState).set_stateNumber_ar8wln_k$ = function (_set____db54di) {
    this.stateNumber_1 = _set____db54di;
  };
  protoOf(ATNState).get_stateNumber_v90a1d_k$ = function () {
    return this.stateNumber_1;
  };
  protoOf(ATNState).set_ruleIndex_ooco9b_k$ = function (_set____db54di) {
    this.ruleIndex_1 = _set____db54di;
  };
  protoOf(ATNState).get_ruleIndex_qf7nn7_k$ = function () {
    return this.ruleIndex_1;
  };
  protoOf(ATNState).set_epsilonOnlyTransitions_kklvm8_k$ = function (_set____db54di) {
    this.epsilonOnlyTransitions_1 = _set____db54di;
  };
  protoOf(ATNState).get_epsilonOnlyTransitions_u4tzg1_k$ = function () {
    return this.epsilonOnlyTransitions_1;
  };
  protoOf(ATNState).get_transitions_hojw6j_k$ = function () {
    return this.transitions_1;
  };
  protoOf(ATNState).set_nextTokenWithinRule_mtswy2_k$ = function (_set____db54di) {
    this.nextTokenWithinRule_1 = _set____db54di;
  };
  protoOf(ATNState).get_nextTokenWithinRule_fv3lz0_k$ = function () {
    return this.nextTokenWithinRule_1;
  };
  protoOf(ATNState).get_isNonGreedyExitState_7t6nfr_k$ = function () {
    return false;
  };
  protoOf(ATNState).get_numberOfTransitions_a2gh11_k$ = function () {
    return this.transitions_1.get_size_woubt6_k$();
  };
  protoOf(ATNState).hashCode = function () {
    return this.stateNumber_1;
  };
  protoOf(ATNState).equals = function (other) {
    var tmp;
    if (other instanceof ATNState) {
      tmp = this.stateNumber_1 === other.stateNumber_1;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(ATNState).toString = function () {
    return this.stateNumber_1.toString();
  };
  protoOf(ATNState).getTransitions_sv5qiw_k$ = function () {
    // Inline function 'kotlin.collections.toTypedArray' call
    var this_0 = this.transitions_1;
    return copyToArray(this_0);
  };
  protoOf(ATNState).addTransition_k2r0nd_k$ = function (e) {
    this.addTransition_74ok1h_k$(this.transitions_1.get_size_woubt6_k$(), e);
  };
  protoOf(ATNState).addTransition_74ok1h_k$ = function (index, e) {
    if (this.transitions_1.isEmpty_y1axqb_k$()) {
      this.epsilonOnlyTransitions_1 = e.get_isEpsilon_qgv0zt_k$();
    } else if (!(this.epsilonOnlyTransitions_1 === e.get_isEpsilon_qgv0zt_k$())) {
      errMessage('ATN state ' + this.stateNumber_1 + ' has both epsilon and non-epsilon transitions.\n');
      this.epsilonOnlyTransitions_1 = false;
    }
    var alreadyPresent = false;
    var tmp0_iterator = this.transitions_1.iterator_jk1svi_k$();
    $l$loop_0: while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var t = tmp0_iterator.next_20eer_k$();
      if (ensureNotNull(t.get_target_juba8q_k$()).stateNumber_1 === ensureNotNull(e.get_target_juba8q_k$()).stateNumber_1) {
        if ((!(t.accessLabel_hdfxg0_k$() == null) ? !(e.accessLabel_hdfxg0_k$() == null) : false) ? ensureNotNull(t.accessLabel_hdfxg0_k$()).equals(e.accessLabel_hdfxg0_k$()) : false) {
          alreadyPresent = true;
          break $l$loop_0;
        } else if (t.get_isEpsilon_qgv0zt_k$() ? e.get_isEpsilon_qgv0zt_k$() : false) {
          alreadyPresent = true;
          break $l$loop_0;
        }
      }
    }
    if (!alreadyPresent) {
      this.transitions_1.add_dl6gt3_k$(index, e);
    }
  };
  protoOf(ATNState).transition_nw6t99_k$ = function (i) {
    return this.transitions_1.get_c1px32_k$(i);
  };
  protoOf(ATNState).setTransition_e7cbd8_k$ = function (i, e) {
    this.transitions_1.set_82063s_k$(i, e);
  };
  protoOf(ATNState).removeTransition_lzz6f3_k$ = function (index) {
    return this.transitions_1.removeAt_6niowx_k$(index);
  };
  protoOf(ATNState).onlyHasEpsilonTransitions_stt9um_k$ = function () {
    return this.epsilonOnlyTransitions_1;
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
        THROW_IAE('No enum constant value.');
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
  function ActionTransition(target, ruleIndex, actionIndex, isCtxDependent) {
    actionIndex = actionIndex === VOID ? -1 : actionIndex;
    isCtxDependent = isCtxDependent === VOID ? false : isCtxDependent;
    Transition.call(this, target);
    this.ruleIndex_1 = ruleIndex;
    this.actionIndex_1 = actionIndex;
    this.isCtxDependent_1 = isCtxDependent;
  }
  protoOf(ActionTransition).get_ruleIndex_qf7nn7_k$ = function () {
    return this.ruleIndex_1;
  };
  protoOf(ActionTransition).get_actionIndex_va748d_k$ = function () {
    return this.actionIndex_1;
  };
  protoOf(ActionTransition).get_isCtxDependent_w62lez_k$ = function () {
    return this.isCtxDependent_1;
  };
  protoOf(ActionTransition).get_serializationType_kzwl9d_k$ = function () {
    return Companion_getInstance_27().get_ACTION_4s122p_k$();
  };
  protoOf(ActionTransition).get_isEpsilon_qgv0zt_k$ = function () {
    return true;
  };
  protoOf(ActionTransition).matches_isvi11_k$ = function (symbol, minVocabSymbol, maxVocabSymbol) {
    return false;
  };
  protoOf(ActionTransition).toString = function () {
    return 'action_' + this.ruleIndex_1 + ':' + this.actionIndex_1;
  };
  function AmbiguityInfo(decision, configs, ambigAlts, input, startIndex, stopIndex, fullCtx) {
    DecisionEventInfo.call(this, decision, configs, input, startIndex, stopIndex, fullCtx);
    this.ambigAlts_1 = ambigAlts;
  }
  protoOf(AmbiguityInfo).set_ambigAlts_n8zwki_k$ = function (_set____db54di) {
    this.ambigAlts_1 = _set____db54di;
  };
  protoOf(AmbiguityInfo).get_ambigAlts_zcm9mz_k$ = function () {
    return this.ambigAlts_1;
  };
  function ArrayPredictionContext_init_$Init$(a, $this) {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp = [a.get_parent_hy4reb_k$()];
    // Inline function 'kotlin.intArrayOf' call
    var tmp$ret$3 = new Int32Array([a.get_returnState_ava1pk_k$()]);
    ArrayPredictionContext.call($this, tmp, tmp$ret$3);
    return $this;
  }
  function ArrayPredictionContext_init_$Create$(a) {
    return ArrayPredictionContext_init_$Init$(a, objectCreate(protoOf(ArrayPredictionContext)));
  }
  function ArrayPredictionContext(parents, returnStates) {
    PredictionContext.call(this, Companion_getInstance_22().calculateHashCode_bixnxz_k$(ensureNotNull(parents), ensureNotNull(returnStates)));
    this.parents_1 = parents;
    this.returnStates_1 = returnStates;
  }
  protoOf(ArrayPredictionContext).get_parents_busue8_k$ = function () {
    return this.parents_1;
  };
  protoOf(ArrayPredictionContext).get_returnStates_i7wsyj_k$ = function () {
    return this.returnStates_1;
  };
  protoOf(ArrayPredictionContext).size_23och_k$ = function () {
    return ensureNotNull(this.returnStates_1).length;
  };
  protoOf(ArrayPredictionContext).getParent_atvid4_k$ = function (index) {
    return ensureNotNull(ensureNotNull(this.parents_1)[index]);
  };
  protoOf(ArrayPredictionContext).getReturnState_2b95w3_k$ = function (index) {
    return ensureNotNull(this.returnStates_1)[index];
  };
  protoOf(ArrayPredictionContext).equals = function (other) {
    if (this === other) {
      return true;
    } else {
      if (!(other instanceof ArrayPredictionContext)) {
        return false;
      }
    }
    if (!(this.hashCode() === hashCode(other))) {
      return false;
    }
    return Arrays_getInstance().equals_6zwt2v_k$(this.returnStates_1, other.returnStates_1) ? Arrays_getInstance().equals_qczyj1_k$(this.parents_1, other.parents_1) : false;
  };
  function AtomTransition(target, label) {
    Transition.call(this, target);
    this.label_1 = label;
  }
  protoOf(AtomTransition).get_label_iuj8p7_k$ = function () {
    return this.label_1;
  };
  protoOf(AtomTransition).get_serializationType_kzwl9d_k$ = function () {
    return Companion_getInstance_27().get_ATOM_wnxxui_k$();
  };
  protoOf(AtomTransition).accessLabel_hdfxg0_k$ = function () {
    return Companion_getInstance_32().of_xanmn3_k$(this.label_1);
  };
  protoOf(AtomTransition).matches_isvi11_k$ = function (symbol, minVocabSymbol, maxVocabSymbol) {
    return this.label_1 === symbol;
  };
  protoOf(AtomTransition).toString = function () {
    return this.label_1.toString();
  };
  function BasicBlockStartState() {
    BlockStartState.call(this);
  }
  protoOf(BasicBlockStartState).get_stateType_pzcpby_k$ = function () {
    return Companion_getInstance_14().get_BLOCK_START_dx6npj_k$();
  };
  function BasicState() {
    ATNState.call(this);
  }
  protoOf(BasicState).get_stateType_pzcpby_k$ = function () {
    return Companion_getInstance_14().get_BASIC_i6v4dh_k$();
  };
  function BlockEndState() {
    ATNState.call(this);
    this.startState_1 = null;
  }
  protoOf(BlockEndState).set_startState_ucwxc7_k$ = function (_set____db54di) {
    this.startState_1 = _set____db54di;
  };
  protoOf(BlockEndState).get_startState_onnbo8_k$ = function () {
    return this.startState_1;
  };
  protoOf(BlockEndState).get_stateType_pzcpby_k$ = function () {
    return Companion_getInstance_14().get_BLOCK_END_1zbwe8_k$();
  };
  function BlockStartState() {
    DecisionState.call(this);
    this.endState_1 = null;
  }
  protoOf(BlockStartState).set_endState_hzu7i_k$ = function (_set____db54di) {
    this.endState_1 = _set____db54di;
  };
  protoOf(BlockStartState).get_endState_3g6vgh_k$ = function () {
    return this.endState_1;
  };
  function ContextSensitivityInfo(decision, configs, input, startIndex, stopIndex) {
    DecisionEventInfo.call(this, decision, configs, input, startIndex, stopIndex, true);
  }
  function DecisionEventInfo(decision, configs, input, startIndex, stopIndex, fullCtx) {
    this.decision_1 = decision;
    this.configs_1 = configs;
    this.input_1 = input;
    this.startIndex_1 = startIndex;
    this.stopIndex_1 = stopIndex;
    this.fullCtx_1 = fullCtx;
  }
  protoOf(DecisionEventInfo).get_decision_mg4f2z_k$ = function () {
    return this.decision_1;
  };
  protoOf(DecisionEventInfo).get_configs_gztoqw_k$ = function () {
    return this.configs_1;
  };
  protoOf(DecisionEventInfo).get_input_it4gip_k$ = function () {
    return this.input_1;
  };
  protoOf(DecisionEventInfo).get_startIndex_oi1lp5_k$ = function () {
    return this.startIndex_1;
  };
  protoOf(DecisionEventInfo).get_stopIndex_z4ulhj_k$ = function () {
    return this.stopIndex_1;
  };
  protoOf(DecisionEventInfo).get_fullCtx_76ubbl_k$ = function () {
    return this.fullCtx_1;
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
  protoOf(DecisionInfo).get_decision_mg4f2z_k$ = function () {
    return this.decision_1;
  };
  protoOf(DecisionInfo).set_invocations_lbxuu0_k$ = function (_set____db54di) {
    this.invocations_1 = _set____db54di;
  };
  protoOf(DecisionInfo).get_invocations_i3r7gm_k$ = function () {
    return this.invocations_1;
  };
  protoOf(DecisionInfo).set_timeInPrediction_7r72hs_k$ = function (_set____db54di) {
    this.timeInPrediction_1 = _set____db54di;
  };
  protoOf(DecisionInfo).get_timeInPrediction_ti9wl2_k$ = function () {
    return this.timeInPrediction_1;
  };
  protoOf(DecisionInfo).set_SLL_TotalLook_rzk6kc_k$ = function (_set____db54di) {
    this.SLL_TotalLook_1 = _set____db54di;
  };
  protoOf(DecisionInfo).get_SLL_TotalLook_f99f1u_k$ = function () {
    return this.SLL_TotalLook_1;
  };
  protoOf(DecisionInfo).set_SLL_MinLook_1wr6ba_k$ = function (_set____db54di) {
    this.SLL_MinLook_1 = _set____db54di;
  };
  protoOf(DecisionInfo).get_SLL_MinLook_dqpe1o_k$ = function () {
    return this.SLL_MinLook_1;
  };
  protoOf(DecisionInfo).set_SLL_MaxLook_fmsjrw_k$ = function (_set____db54di) {
    this.SLL_MaxLook_1 = _set____db54di;
  };
  protoOf(DecisionInfo).get_SLL_MaxLook_a3uctq_k$ = function () {
    return this.SLL_MaxLook_1;
  };
  protoOf(DecisionInfo).set_SLL_MaxLookEvent_bmnu3c_k$ = function (_set____db54di) {
    this.SLL_MaxLookEvent_1 = _set____db54di;
  };
  protoOf(DecisionInfo).get_SLL_MaxLookEvent_mof3n8_k$ = function () {
    return this.SLL_MaxLookEvent_1;
  };
  protoOf(DecisionInfo).set_LL_TotalLook_f2sh2b_k$ = function (_set____db54di) {
    this.LL_TotalLook_1 = _set____db54di;
  };
  protoOf(DecisionInfo).get_LL_TotalLook_wxt2ab_k$ = function () {
    return this.LL_TotalLook_1;
  };
  protoOf(DecisionInfo).set_LL_MinLook_j7vwen_k$ = function (_set____db54di) {
    this.LL_MinLook_1 = _set____db54di;
  };
  protoOf(DecisionInfo).get_LL_MinLook_v8o8fv_k$ = function () {
    return this.LL_MinLook_1;
  };
  protoOf(DecisionInfo).set_LL_MaxLook_1oc6bh_k$ = function (_set____db54di) {
    this.LL_MaxLook_1 = _set____db54di;
  };
  protoOf(DecisionInfo).get_LL_MaxLook_rlt77x_k$ = function () {
    return this.LL_MaxLook_1;
  };
  protoOf(DecisionInfo).set_LL_MaxLookEvent_pp6vwf_k$ = function (_set____db54di) {
    this.LL_MaxLookEvent_1 = _set____db54di;
  };
  protoOf(DecisionInfo).get_LL_MaxLookEvent_gq92r7_k$ = function () {
    return this.LL_MaxLookEvent_1;
  };
  protoOf(DecisionInfo).get_contextSensitivities_h70rt_k$ = function () {
    return this.contextSensitivities_1;
  };
  protoOf(DecisionInfo).get_errors_czzmno_k$ = function () {
    return this.errors_1;
  };
  protoOf(DecisionInfo).get_ambiguities_5i3rs2_k$ = function () {
    return this.ambiguities_1;
  };
  protoOf(DecisionInfo).get_predicateEvals_hnka95_k$ = function () {
    return this.predicateEvals_1;
  };
  protoOf(DecisionInfo).set_SLL_ATNTransitions_7asbzm_k$ = function (_set____db54di) {
    this.SLL_ATNTransitions_1 = _set____db54di;
  };
  protoOf(DecisionInfo).get_SLL_ATNTransitions_inbxbs_k$ = function () {
    return this.SLL_ATNTransitions_1;
  };
  protoOf(DecisionInfo).set_SLL_DFATransitions_hrxt86_k$ = function (_set____db54di) {
    this.SLL_DFATransitions_1 = _set____db54di;
  };
  protoOf(DecisionInfo).get_SLL_DFATransitions_xqucfo_k$ = function () {
    return this.SLL_DFATransitions_1;
  };
  protoOf(DecisionInfo).set_LL_Fallback_9pfnja_k$ = function (_set____db54di) {
    this.LL_Fallback_1 = _set____db54di;
  };
  protoOf(DecisionInfo).get_LL_Fallback_9jkrjs_k$ = function () {
    return this.LL_Fallback_1;
  };
  protoOf(DecisionInfo).set_LL_ATNTransitions_9jdym1_k$ = function (_set____db54di) {
    this.LL_ATNTransitions_1 = _set____db54di;
  };
  protoOf(DecisionInfo).get_LL_ATNTransitions_hryrpj_k$ = function () {
    return this.LL_ATNTransitions_1;
  };
  protoOf(DecisionInfo).set_LL_DFATransitions_k0jful_k$ = function (_set____db54di) {
    this.LL_DFATransitions_1 = _set____db54di;
  };
  protoOf(DecisionInfo).get_LL_DFATransitions_2ogcln_k$ = function () {
    return this.LL_DFATransitions_1;
  };
  protoOf(DecisionInfo).toString = function () {
    return '{decision=' + this.decision_1 + ', contextSensitivities=' + this.contextSensitivities_1.get_size_woubt6_k$() + ', errors=' + this.errors_1.get_size_woubt6_k$() + ', ambiguities=' + this.ambiguities_1.get_size_woubt6_k$() + ', SLL_lookahead=' + this.SLL_TotalLook_1 + ', SLL_ATNTransitions=' + this.SLL_ATNTransitions_1 + ', SLL_DFATransitions=' + this.SLL_DFATransitions_1 + ', LL_Fallback=' + this.LL_Fallback_1 + ', LL_lookahead=' + this.LL_TotalLook_1 + ', LL_ATNTransitions=' + this.LL_ATNTransitions_1 + toString_0(_Char___init__impl__6a9atx(125));
  };
  function DecisionState() {
    ATNState.call(this);
    this.decision_1 = -1;
    this.nonGreedy_1 = false;
  }
  protoOf(DecisionState).set_decision_mzbz5d_k$ = function (_set____db54di) {
    this.decision_1 = _set____db54di;
  };
  protoOf(DecisionState).get_decision_mg4f2z_k$ = function () {
    return this.decision_1;
  };
  protoOf(DecisionState).set_nonGreedy_olkkb_k$ = function (_set____db54di) {
    this.nonGreedy_1 = _set____db54di;
  };
  protoOf(DecisionState).get_nonGreedy_70fdwk_k$ = function () {
    return this.nonGreedy_1;
  };
  function EmptyPredictionContext() {
    SingletonPredictionContext.call(this, null, Companion_getInstance_22().get_EMPTY_RETURN_STATE_opy8sj_k$());
  }
  protoOf(EmptyPredictionContext).get_isEmpty_zauvru_k$ = function () {
    return true;
  };
  protoOf(EmptyPredictionContext).size_23och_k$ = function () {
    return 1;
  };
  protoOf(EmptyPredictionContext).getParent_atvid4_k$ = function (index) {
    return null;
  };
  protoOf(EmptyPredictionContext).getReturnState_2b95w3_k$ = function (index) {
    return Companion_getInstance_22().get_EMPTY_RETURN_STATE_opy8sj_k$();
  };
  protoOf(EmptyPredictionContext).equals = function (o) {
    return this === o;
  };
  protoOf(EmptyPredictionContext).toString = function () {
    return '$';
  };
  function _get_outermostPrecedenceReturn__icwgfb($this) {
    return $this.outermostPrecedenceReturn_1;
  }
  function EpsilonTransition(target, outermostPrecedenceReturn) {
    outermostPrecedenceReturn = outermostPrecedenceReturn === VOID ? -1 : outermostPrecedenceReturn;
    Transition.call(this, target);
    this.outermostPrecedenceReturn_1 = outermostPrecedenceReturn;
  }
  protoOf(EpsilonTransition).get_serializationType_kzwl9d_k$ = function () {
    return Companion_getInstance_27().get_EPSILON_c96d27_k$();
  };
  protoOf(EpsilonTransition).get_isEpsilon_qgv0zt_k$ = function () {
    return true;
  };
  protoOf(EpsilonTransition).outermostPrecedenceReturn_dx5dvc_k$ = function () {
    return this.outermostPrecedenceReturn_1;
  };
  protoOf(EpsilonTransition).matches_isvi11_k$ = function (symbol, minVocabSymbol, maxVocabSymbol) {
    return false;
  };
  protoOf(EpsilonTransition).toString = function () {
    return 'epsilon';
  };
  function ErrorInfo(decision, configs, input, startIndex, stopIndex, fullCtx) {
    DecisionEventInfo.call(this, decision, configs, input, startIndex, stopIndex, fullCtx);
  }
  function Companion_14() {
    Companion_instance_14 = this;
    this.HIT_PRED_1 = Companion_getInstance_6().get_INVALID_TYPE_iyehat_k$();
  }
  protoOf(Companion_14).get_HIT_PRED_uti81i_k$ = function () {
    return this.HIT_PRED_1;
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
  protoOf(LL1Analyzer).get_atn_18j9am_k$ = function () {
    return this.atn_1;
  };
  protoOf(LL1Analyzer).getDecisionLookahead_vo9h39_k$ = function (s) {
    if (s == null) {
      return null;
    }
    // Inline function 'kotlin.arrayOfNulls' call
    var size = ensureNotNull(s).get_numberOfTransitions_a2gh11_k$();
    var look = fillArrayVal(Array(size), null);
    var inductionVariable = 0;
    var last = ensureNotNull(s).get_numberOfTransitions_a2gh11_k$();
    if (inductionVariable < last)
      do {
        var alt = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        look[alt] = IntervalSet_init_$Create$_1(new Int32Array([]));
        var lookBusy = HashSet_init_$Create$_0();
        var seeThruPreds = false;
        this._LOOK_wyvtog_k$(ensureNotNull(ensureNotNull(s).transition_nw6t99_k$(alt).get_target_juba8q_k$()), null, Companion_getInstance_22().get_EMPTY_i8q41w_k$(), ensureNotNull(look[alt]), lookBusy, BitSet_init_$Create$(), seeThruPreds, false);
        if (ensureNotNull(look[alt]).size_23och_k$() === 0 ? true : ensureNotNull(look[alt]).contains_7q95ev_k$(Companion_getInstance_15().HIT_PRED_1)) {
          look[alt] = null;
        }
      }
       while (inductionVariable < last);
    return look;
  };
  protoOf(LL1Analyzer).LOOK_k39ma7_k$ = function (s, ctx) {
    return this.LOOK_cerpju_k$(s, null, ctx);
  };
  protoOf(LL1Analyzer).LOOK_cerpju_k$ = function (s, stopState, ctx) {
    var r = IntervalSet_init_$Create$_1(new Int32Array([]));
    var seeThruPreds = true;
    var lookContext = !(ctx == null) ? Companion_getInstance_22().fromRuleContext_nzvmt0_k$(ensureNotNull(s.get_atn_18j9am_k$()), ctx) : null;
    this._LOOK_wyvtog_k$(s, stopState, lookContext, r, HashSet_init_$Create$_0(), BitSet_init_$Create$(), seeThruPreds, true);
    return r;
  };
  protoOf(LL1Analyzer)._LOOK_wyvtog_k$ = function (s, stopState, ctx, look, lookBusy, calledRuleStack, seeThruPreds, addEOF) {
    var c = ATNConfig_init_$Create$_0(s, 0, ctx);
    if (!lookBusy.add_utx5q5_k$(c))
      return Unit_getInstance();
    if (s === stopState) {
      if (ctx == null) {
        look.add_c9dakn_k$(Companion_getInstance_6().get_EPSILON_c96d27_k$());
        return Unit_getInstance();
      } else if (ensureNotNull(ctx).get_isEmpty_zauvru_k$() ? addEOF : false) {
        look.add_c9dakn_k$(Companion_getInstance_6().get_EOF_18juz1_k$());
        return Unit_getInstance();
      }
    }
    if (s instanceof RuleStopState) {
      if (ctx == null) {
        look.add_c9dakn_k$(Companion_getInstance_6().get_EPSILON_c96d27_k$());
        return Unit_getInstance();
      } else if (ensureNotNull(ctx).get_isEmpty_zauvru_k$() ? addEOF : false) {
        look.add_c9dakn_k$(Companion_getInstance_6().get_EOF_18juz1_k$());
        return Unit_getInstance();
      }
      if (!(ctx === Companion_getInstance_22().get_EMPTY_i8q41w_k$())) {
        var removed = calledRuleStack.get_c1px32_k$(s.get_ruleIndex_qf7nn7_k$());
        try {
          calledRuleStack.clear_ihvbz9_k$(s.get_ruleIndex_qf7nn7_k$());
          var inductionVariable = 0;
          var last = ensureNotNull(ctx).size_23och_k$();
          if (inductionVariable < last)
            do {
              var i = inductionVariable;
              inductionVariable = inductionVariable + 1 | 0;
              var returnState = this.atn_1.get_states_jnf5zf_k$().get_c1px32_k$(ensureNotNull(ctx).getReturnState_2b95w3_k$(i));
              this._LOOK_wyvtog_k$(ensureNotNull(returnState), stopState, ensureNotNull(ctx).getParent_atvid4_k$(i), look, lookBusy, calledRuleStack, seeThruPreds, addEOF);
            }
             while (inductionVariable < last);
        }finally {
          if (removed) {
            calledRuleStack.set_3dek9m_k$(s.get_ruleIndex_qf7nn7_k$());
          }
        }
        return Unit_getInstance();
      }
    }
    var n = s.get_numberOfTransitions_a2gh11_k$();
    var inductionVariable_0 = 0;
    if (inductionVariable_0 < n)
      $l$loop: do {
        var i_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        var t = s.transition_nw6t99_k$(i_0);
        if (t instanceof RuleTransition) {
          if (calledRuleStack.get_c1px32_k$(ensureNotNull((t instanceof RuleTransition ? t : THROW_CCE()).get_target_juba8q_k$()).get_ruleIndex_qf7nn7_k$())) {
            continue $l$loop;
          }
          var tmp = Companion_getInstance_26();
          var newContext = tmp.create_i5ph5t_k$(ctx, (t instanceof RuleTransition ? t : THROW_CCE()).get_followState_uwxfd5_k$().get_stateNumber_v90a1d_k$());
          try {
            calledRuleStack.set_3dek9m_k$(ensureNotNull((t instanceof RuleTransition ? t : THROW_CCE()).get_target_juba8q_k$()).get_ruleIndex_qf7nn7_k$());
            this._LOOK_wyvtog_k$(ensureNotNull(t.get_target_juba8q_k$()), stopState, newContext, look, lookBusy, calledRuleStack, seeThruPreds, addEOF);
          }finally {
            calledRuleStack.clear_ihvbz9_k$(ensureNotNull((t instanceof RuleTransition ? t : THROW_CCE()).get_target_juba8q_k$()).get_ruleIndex_qf7nn7_k$());
          }
        } else {
          if (t instanceof AbstractPredicateTransition) {
            if (seeThruPreds) {
              this._LOOK_wyvtog_k$(ensureNotNull(t.get_target_juba8q_k$()), stopState, ctx, look, lookBusy, calledRuleStack, seeThruPreds, addEOF);
            } else {
              look.add_c9dakn_k$(Companion_getInstance_15().HIT_PRED_1);
            }
          } else {
            if (t.get_isEpsilon_qgv0zt_k$()) {
              this._LOOK_wyvtog_k$(ensureNotNull(t.get_target_juba8q_k$()), stopState, ctx, look, lookBusy, calledRuleStack, seeThruPreds, addEOF);
            } else {
              if (t instanceof WildcardTransition) {
                look.addAll_jvk865_k$(Companion_getInstance_32().of_doci3b_k$(Companion_getInstance_6().get_MIN_USER_TOKEN_TYPE_3vm1q_k$(), this.atn_1.get_maxTokenType_gnkz54_k$()));
              } else {
                var set = t.accessLabel_hdfxg0_k$();
                if (!(set == null)) {
                  if (t instanceof NotSetTransition) {
                    set = ensureNotNull(set).complement_378g53_k$(Companion_getInstance_32().of_doci3b_k$(Companion_getInstance_6().get_MIN_USER_TOKEN_TYPE_3vm1q_k$(), this.atn_1.get_maxTokenType_gnkz54_k$()));
                  }
                  look.addAll_jvk865_k$(set);
                }
              }
            }
          }
        }
      }
       while (inductionVariable_0 < n);
  };
  function _get_passedThroughNonGreedyDecision__szr3hz($this) {
    return $this.passedThroughNonGreedyDecision_1;
  }
  function LexerATNConfig_init_$Init$(state, alt, context, $this) {
    ATNConfig_init_$Init$_0(state, alt, context, Companion_getInstance_25().get_NONE_wo64xt_k$(), $this);
    LexerATNConfig.call($this);
    $this.passedThroughNonGreedyDecision_1 = false;
    $this.lexerActionExecutor_1 = null;
    return $this;
  }
  function LexerATNConfig_init_$Create$(state, alt, context) {
    return LexerATNConfig_init_$Init$(state, alt, context, objectCreate(protoOf(LexerATNConfig)));
  }
  function LexerATNConfig_init_$Init$_0(state, alt, context, lexerActionExecutor, $this) {
    ATNConfig_init_$Init$_0(state, alt, context, Companion_getInstance_25().get_NONE_wo64xt_k$(), $this);
    LexerATNConfig.call($this);
    $this.lexerActionExecutor_1 = lexerActionExecutor;
    $this.passedThroughNonGreedyDecision_1 = false;
    return $this;
  }
  function LexerATNConfig_init_$Create$_0(state, alt, context, lexerActionExecutor) {
    return LexerATNConfig_init_$Init$_0(state, alt, context, lexerActionExecutor, objectCreate(protoOf(LexerATNConfig)));
  }
  function LexerATNConfig_init_$Init$_1(c, state, $this) {
    ATNConfig_init_$Init$_3(c, state, c.get_context_h02k06_k$(), c.get_semanticContext_gd9bz4_k$(), $this);
    LexerATNConfig.call($this);
    $this.lexerActionExecutor_1 = c.lexerActionExecutor_1;
    $this.passedThroughNonGreedyDecision_1 = checkNonGreedyDecision($this, c, state);
    return $this;
  }
  function LexerATNConfig_init_$Create$_1(c, state) {
    return LexerATNConfig_init_$Init$_1(c, state, objectCreate(protoOf(LexerATNConfig)));
  }
  function LexerATNConfig_init_$Init$_2(c, state, lexerActionExecutor, $this) {
    ATNConfig_init_$Init$_3(c, state, c.get_context_h02k06_k$(), c.get_semanticContext_gd9bz4_k$(), $this);
    LexerATNConfig.call($this);
    $this.lexerActionExecutor_1 = lexerActionExecutor;
    $this.passedThroughNonGreedyDecision_1 = checkNonGreedyDecision($this, c, state);
    return $this;
  }
  function LexerATNConfig_init_$Create$_2(c, state, lexerActionExecutor) {
    return LexerATNConfig_init_$Init$_2(c, state, lexerActionExecutor, objectCreate(protoOf(LexerATNConfig)));
  }
  function LexerATNConfig_init_$Init$_3(c, state, context, $this) {
    ATNConfig_init_$Init$_3(c, state, context, c.get_semanticContext_gd9bz4_k$(), $this);
    LexerATNConfig.call($this);
    $this.lexerActionExecutor_1 = c.lexerActionExecutor_1;
    $this.passedThroughNonGreedyDecision_1 = checkNonGreedyDecision($this, c, state);
    return $this;
  }
  function LexerATNConfig_init_$Create$_3(c, state, context) {
    return LexerATNConfig_init_$Init$_3(c, state, context, objectCreate(protoOf(LexerATNConfig)));
  }
  function checkNonGreedyDecision($this, source, target) {
    var tmp;
    if (source.passedThroughNonGreedyDecision_1) {
      tmp = true;
    } else {
      var tmp_0;
      if (target instanceof DecisionState) {
        tmp_0 = (target instanceof DecisionState ? target : THROW_CCE()).get_nonGreedy_70fdwk_k$();
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    }
    return tmp;
  }
  protoOf(LexerATNConfig).get_lexerActionExecutor_oel90_k$ = function () {
    return this.lexerActionExecutor_1;
  };
  protoOf(LexerATNConfig).hasPassedThroughNonGreedyDecision_fjnzgu_k$ = function () {
    return this.passedThroughNonGreedyDecision_1;
  };
  protoOf(LexerATNConfig).hashCode = function () {
    var hashCode = MurmurHash_getInstance().initialize_vf4y0_k$(7);
    hashCode = MurmurHash_getInstance().update_65sxl5_k$(hashCode, this.get_state_iypx7s_k$().get_stateNumber_v90a1d_k$());
    hashCode = MurmurHash_getInstance().update_65sxl5_k$(hashCode, this.get_alt_18j9hc_k$());
    hashCode = MurmurHash_getInstance().update_66jqwg_k$(hashCode, this.get_context_h02k06_k$());
    hashCode = MurmurHash_getInstance().update_66jqwg_k$(hashCode, this.get_semanticContext_gd9bz4_k$());
    hashCode = MurmurHash_getInstance().update_65sxl5_k$(hashCode, this.passedThroughNonGreedyDecision_1 ? 1 : 0);
    hashCode = MurmurHash_getInstance().update_66jqwg_k$(hashCode, this.lexerActionExecutor_1);
    hashCode = MurmurHash_getInstance().finish_sqfsk3_k$(hashCode, 6);
    return hashCode;
  };
  protoOf(LexerATNConfig).equals_2nbc7l_k$ = function (other) {
    if (this === other) {
      return true;
    } else {
      if (!(other instanceof LexerATNConfig)) {
        return false;
      }
    }
    var lexerOther = (other == null ? true : other instanceof LexerATNConfig) ? other : THROW_CCE();
    if (!(this.passedThroughNonGreedyDecision_1 === ensureNotNull(lexerOther).passedThroughNonGreedyDecision_1)) {
      return false;
    }
    var tmp;
    if (!Companion_getInstance_33().get_INSTANCE_9oh0gy_k$().equals_dxlvsx_k$(this.lexerActionExecutor_1, lexerOther.lexerActionExecutor_1)) {
      tmp = false;
    } else {
      tmp = protoOf(ATNConfig).equals_2nbc7l_k$.call(this, other);
    }
    return tmp;
  };
  function LexerATNConfig() {
  }
  function SimState() {
    this.index_1 = -1;
    this.line_1 = 0;
    this.charPos_1 = -1;
    this.dfaState_1 = null;
  }
  protoOf(SimState).set_index_69f5xp_k$ = function (_set____db54di) {
    this.index_1 = _set____db54di;
  };
  protoOf(SimState).get_index_it478p_k$ = function () {
    return this.index_1;
  };
  protoOf(SimState).set_line_45vtmf_k$ = function (_set____db54di) {
    this.line_1 = _set____db54di;
  };
  protoOf(SimState).get_line_wopum5_k$ = function () {
    return this.line_1;
  };
  protoOf(SimState).set_charPos_u27cbr_k$ = function (_set____db54di) {
    this.charPos_1 = _set____db54di;
  };
  protoOf(SimState).get_charPos_dhk5rp_k$ = function () {
    return this.charPos_1;
  };
  protoOf(SimState).set_dfaState_l663k2_k$ = function (_set____db54di) {
    this.dfaState_1 = _set____db54di;
  };
  protoOf(SimState).get_dfaState_91wdj9_k$ = function () {
    return this.dfaState_1;
  };
  protoOf(SimState).reset_5u6xz3_k$ = function () {
    this.index_1 = -1;
    this.line_1 = 0;
    this.charPos_1 = -1;
    this.dfaState_1 = null;
  };
  function LexerATNSimulator_init_$Init$(atn, decisionToDFA, sharedContextCache, $this) {
    LexerATNSimulator.call($this, null, atn, decisionToDFA, sharedContextCache);
    return $this;
  }
  function LexerATNSimulator_init_$Create$(atn, decisionToDFA, sharedContextCache) {
    return LexerATNSimulator_init_$Init$(atn, decisionToDFA, sharedContextCache, objectCreate(protoOf(LexerATNSimulator)));
  }
  function Companion_15() {
    Companion_instance_15 = this;
    this.debug_1 = false;
    this.dfa_debug_1 = false;
    this.MIN_DFA_EDGE_1 = 0;
    this.MAX_DFA_EDGE_1 = 127;
  }
  protoOf(Companion_15).get_debug_iq7ga2_k$ = function () {
    return this.debug_1;
  };
  protoOf(Companion_15).get_dfa_debug_8xdimi_k$ = function () {
    return this.dfa_debug_1;
  };
  protoOf(Companion_15).get_MIN_DFA_EDGE_e72vrh_k$ = function () {
    return this.MIN_DFA_EDGE_1;
  };
  protoOf(Companion_15).get_MAX_DFA_EDGE_m1jh9b_k$ = function () {
    return this.MAX_DFA_EDGE_1;
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
    this.mode_1 = Companion_getInstance_4().get_DEFAULT_MODE_wljm16_k$();
    this.prevAccept_1 = new SimState();
  }
  protoOf(LexerATNSimulator).get_recog_ixwl6n_k$ = function () {
    return this.recog_1;
  };
  protoOf(LexerATNSimulator).get_decisionToDFA_9qhkht_k$ = function () {
    return this.decisionToDFA_1;
  };
  protoOf(LexerATNSimulator).set_startIndex_pkxx0b_k$ = function (_set____db54di) {
    this.startIndex_1 = _set____db54di;
  };
  protoOf(LexerATNSimulator).get_startIndex_oi1lp5_k$ = function () {
    return this.startIndex_1;
  };
  protoOf(LexerATNSimulator).set_line_45vtmf_k$ = function (_set____db54di) {
    this.line_1 = _set____db54di;
  };
  protoOf(LexerATNSimulator).get_line_wopum5_k$ = function () {
    return this.line_1;
  };
  protoOf(LexerATNSimulator).set_charPositionInLine_k90ur7_k$ = function (_set____db54di) {
    this.charPositionInLine_1 = _set____db54di;
  };
  protoOf(LexerATNSimulator).get_charPositionInLine_2wqse7_k$ = function () {
    return this.charPositionInLine_1;
  };
  protoOf(LexerATNSimulator).set_mode_7gdrfs_k$ = function (_set____db54di) {
    this.mode_1 = _set____db54di;
  };
  protoOf(LexerATNSimulator).get_mode_woqlt8_k$ = function () {
    return this.mode_1;
  };
  protoOf(LexerATNSimulator).get_prevAccept_v6tcbo_k$ = function () {
    return this.prevAccept_1;
  };
  protoOf(LexerATNSimulator).copyState_q4h5fx_k$ = function (simulator) {
    this.charPositionInLine_1 = simulator.charPositionInLine_1;
    this.line_1 = simulator.line_1;
    this.mode_1 = simulator.mode_1;
    this.startIndex_1 = simulator.startIndex_1;
  };
  protoOf(LexerATNSimulator).match_tj9bnd_k$ = function (input, mode) {
    this.mode_1 = mode;
    var mark = input.mark_1zob1_k$();
    try {
      this.startIndex_1 = input.index_1nqriq_k$();
      this.prevAccept_1.reset_5u6xz3_k$();
      var dfa = this.decisionToDFA_1[mode];
      var tmp;
      if (ensureNotNull(dfa).get_s0_kntnq2_k$() == null) {
        tmp = this.matchATN_x3mm6m_k$(input);
      } else {
        var tmp_0 = ensureNotNull(dfa).get_s0_kntnq2_k$();
        tmp = this.execATN_xwylh2_k$(input, tmp_0 instanceof DFAState ? tmp_0 : THROW_CCE());
      }
      return tmp;
    }finally {
      input.release_4x1eox_k$(mark);
    }
  };
  protoOf(LexerATNSimulator).reset_5u6xz3_k$ = function () {
    this.prevAccept_1.reset_5u6xz3_k$();
    this.startIndex_1 = -1;
    this.line_1 = 1;
    this.charPositionInLine_1 = 0;
    this.mode_1 = Companion_getInstance_4().get_DEFAULT_MODE_wljm16_k$();
  };
  protoOf(LexerATNSimulator).clearDFA_elg0ci_k$ = function () {
    var inductionVariable = 0;
    var last = this.decisionToDFA_1.length - 1 | 0;
    if (inductionVariable <= last)
      do {
        var d = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp = this.get_atn_18j9am_k$().getDecisionState_plveuf_k$(d);
        this.decisionToDFA_1[d] = new DFA(tmp instanceof DecisionState ? tmp : THROW_CCE(), d);
      }
       while (inductionVariable <= last);
  };
  protoOf(LexerATNSimulator).matchATN_x3mm6m_k$ = function (input) {
    var startState = this.get_atn_18j9am_k$().get_modeToStartState_aanefe_k$().get_c1px32_k$(this.mode_1);
    if (Companion_getInstance_16().debug_1) {
      outMessage('matchATN mode ' + this.mode_1 + ' start: ' + startState + '\n');
    }
    var old_mode = this.mode_1;
    var s0_closure = this.computeStartState_l8bk4i_k$(input, startState);
    var suppressEdge = s0_closure.get_hasSemanticContext_7a3dso_k$();
    s0_closure.set_hasSemanticContext_jce4s7_k$(false);
    var next = this.addDFAState_itjy5y_k$(s0_closure);
    if (!suppressEdge) {
      ensureNotNull(this.decisionToDFA_1[this.mode_1]).set_s0_qek8ur_k$(next);
    }
    var predict = this.execATN_xwylh2_k$(input, next);
    if (Companion_getInstance_16().debug_1) {
      outMessage('DFA after matchATN: ' + ensureNotNull(this.decisionToDFA_1[old_mode]).toLexerString_rhiloe_k$() + '\n');
    }
    return predict;
  };
  protoOf(LexerATNSimulator).execATN_xwylh2_k$ = function (input, ds0) {
    if (Companion_getInstance_16().debug_1) {
      outMessage('start state closure=' + ds0.get_configs_gztoqw_k$() + '\n');
    }
    if (ds0.get_isAcceptState_ebj6tm_k$()) {
      this.captureSimState_vg94hb_k$(this.prevAccept_1, input, ds0);
    }
    var t = input.LA_figb43_k$(1);
    var s = ds0;
    $l$loop_0: while (true) {
      if (Companion_getInstance_16().debug_1) {
        outMessage('execATN loop starting closure: ' + ensureNotNull(s).get_configs_gztoqw_k$() + '\n');
      }
      var target = this.getExistingTargetState_tmt156_k$(s, t);
      if (target == null) {
        target = this.computeTargetState_x7miyi_k$(input, s, t);
      }
      if (target === Companion_getInstance_13().get_ERROR_i8tccf_k$()) {
        break $l$loop_0;
      }
      if (!(t === Companion_getInstance_3().get_EOF_18juz1_k$())) {
        this.consume_txw6y0_k$(input);
      }
      if (ensureNotNull(target).get_isAcceptState_ebj6tm_k$()) {
        this.captureSimState_vg94hb_k$(this.prevAccept_1, input, target);
        if (t === Companion_getInstance_3().get_EOF_18juz1_k$()) {
          break $l$loop_0;
        }
      }
      t = input.LA_figb43_k$(1);
      s = target;
    }
    return this.failOrAccept_lxeceh_k$(this.prevAccept_1, input, ensureNotNull(ensureNotNull(s).get_configs_gztoqw_k$()), t);
  };
  protoOf(LexerATNSimulator).getExistingTargetState_tmt156_k$ = function (s, t) {
    if ((ensureNotNull(s).get_edges_iqqp7x_k$() == null ? true : t < Companion_getInstance_16().MIN_DFA_EDGE_1) ? true : t > Companion_getInstance_16().MAX_DFA_EDGE_1) {
      return null;
    }
    var target = ensureNotNull(ensureNotNull(s).get_edges_iqqp7x_k$())[t - Companion_getInstance_16().MIN_DFA_EDGE_1 | 0];
    if (Companion_getInstance_16().debug_1 ? !(target == null) : false) {
      outMessage('reuse state ' + ensureNotNull(s).get_stateNumber_v90a1d_k$() + ' edge to ' + ensureNotNull(target).get_stateNumber_v90a1d_k$());
    }
    return target;
  };
  protoOf(LexerATNSimulator).computeTargetState_x7miyi_k$ = function (input, s, t) {
    var reach = new OrderedATNConfigSet();
    this.getReachableConfigSet_nuv31p_k$(input, ensureNotNull(ensureNotNull(s).get_configs_gztoqw_k$()), reach, t);
    if (reach.isEmpty_y1axqb_k$()) {
      if (!reach.get_hasSemanticContext_7a3dso_k$()) {
        this.addDFAEdge_8pi48q_k$(s, t, Companion_getInstance_13().get_ERROR_i8tccf_k$());
      }
      return Companion_getInstance_13().get_ERROR_i8tccf_k$();
    }
    return this.addDFAEdge_f1xojn_k$(s, t, reach);
  };
  protoOf(LexerATNSimulator).failOrAccept_lxeceh_k$ = function (prevAccept, input, reach, t) {
    if (!(prevAccept.dfaState_1 == null)) {
      var lexerActionExecutor = ensureNotNull(prevAccept.dfaState_1).get_lexerActionExecutor_oel90_k$();
      this.accept_9enhwc_k$(input, lexerActionExecutor, this.startIndex_1, prevAccept.index_1, prevAccept.line_1, prevAccept.charPos_1);
      return ensureNotNull(prevAccept.dfaState_1).get_prediction_yvsa0_k$();
    } else {
      if (t === Companion_getInstance_3().get_EOF_18juz1_k$() ? input.index_1nqriq_k$() === this.startIndex_1 : false) {
        return Companion_getInstance_6().get_EOF_18juz1_k$();
      }
      var tmp = this.recog_1;
      throw new LexerNoViableAltException(tmp instanceof Lexer ? tmp : THROW_CCE(), input, this.startIndex_1, reach);
    }
  };
  protoOf(LexerATNSimulator).getReachableConfigSet_nuv31p_k$ = function (input, closure, reach, t) {
    var skipAlt = Companion_getInstance_8().get_INVALID_ALT_NUMBER_idrbu8_k$();
    var tmp0_iterator = closure.iterator_jk1svi_k$();
    $l$loop: while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var c = tmp0_iterator.next_20eer_k$();
      var currentAltReachedAcceptState = c.get_alt_18j9hc_k$() === skipAlt;
      var tmp;
      if (currentAltReachedAcceptState) {
        tmp = (c instanceof LexerATNConfig ? c : THROW_CCE()).hasPassedThroughNonGreedyDecision_fjnzgu_k$();
      } else {
        tmp = false;
      }
      if (tmp) {
        continue $l$loop;
      }
      if (Companion_getInstance_16().debug_1) {
        outMessage('testing ' + this.getTokenName_vqtp2i_k$(t) + ' at ' + c.toString_fhllcy_k$(this.recog_1, true) + '\n');
      }
      var n = c.get_state_iypx7s_k$().get_numberOfTransitions_a2gh11_k$();
      var inductionVariable = 0;
      if (inductionVariable < n)
        $l$loop_0: do {
          var ti = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var trans = c.get_state_iypx7s_k$().transition_nw6t99_k$(ti);
          var target = this.getReachableTarget_rbdjx9_k$(trans, t);
          if (!(target == null)) {
            var lexerActionExecutor = (c instanceof LexerATNConfig ? c : THROW_CCE()).get_lexerActionExecutor_oel90_k$();
            if (!(lexerActionExecutor == null)) {
              lexerActionExecutor = ensureNotNull(lexerActionExecutor).fixOffsetBeforeMatch_d8kf96_k$(input.index_1nqriq_k$() - this.startIndex_1 | 0);
            }
            var treatEofAsEpsilon = t === Companion_getInstance_0().get_EOF_18juz1_k$();
            if (this.closure_bs4s0e_k$(input, LexerATNConfig_init_$Create$_2(c instanceof LexerATNConfig ? c : THROW_CCE(), target, lexerActionExecutor), reach, currentAltReachedAcceptState, true, treatEofAsEpsilon)) {
              skipAlt = c.get_alt_18j9hc_k$();
              break $l$loop_0;
            }
          }
        }
         while (inductionVariable < n);
    }
  };
  protoOf(LexerATNSimulator).accept_9enhwc_k$ = function (input, lexerActionExecutor, startIndex, index, line, charPos) {
    if (Companion_getInstance_16().debug_1) {
      outMessage('ACTION ' + lexerActionExecutor + '\n');
    }
    input.seek_a2e6fk_k$(index);
    this.line_1 = line;
    this.charPositionInLine_1 = charPos;
    if (!(lexerActionExecutor == null) ? !(this.recog_1 == null) : false) {
      ensureNotNull(lexerActionExecutor).execute_sohdf9_k$(this.recog_1, input, startIndex);
    }
  };
  protoOf(LexerATNSimulator).getReachableTarget_rbdjx9_k$ = function (trans, t) {
    var tmp;
    if (trans.matches_isvi11_k$(t, Companion_getInstance_4().get_MIN_CHAR_VALUE_qqe4ki_k$(), Companion_getInstance_4().get_MAX_CHAR_VALUE_xflxqk_k$())) {
      tmp = trans.get_target_juba8q_k$();
    } else {
      tmp = null;
    }
    return tmp;
  };
  protoOf(LexerATNSimulator).computeStartState_l8bk4i_k$ = function (input, p) {
    var initialContext = Companion_getInstance_22().get_EMPTY_i8q41w_k$();
    var configs = new OrderedATNConfigSet();
    var inductionVariable = 0;
    var last = p.get_numberOfTransitions_a2gh11_k$();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var target = p.transition_nw6t99_k$(i).get_target_juba8q_k$();
        var c = LexerATNConfig_init_$Create$(ensureNotNull(target), i + 1 | 0, initialContext);
        this.closure_bs4s0e_k$(input, c, configs, false, false, false);
      }
       while (inductionVariable < last);
    return configs;
  };
  protoOf(LexerATNSimulator).closure_bs4s0e_k$ = function (input, config, configs, currentAltReachedAcceptState, speculative, treatEofAsEpsilon) {
    var currentAltReachedAcceptState_0 = currentAltReachedAcceptState;
    if (Companion_getInstance_16().debug_1) {
      println('closure(' + config.toString_fhllcy_k$(this.recog_1, true) + ')');
    }
    var tmp = config.get_state_iypx7s_k$();
    if (tmp instanceof RuleStopState) {
      if (Companion_getInstance_16().debug_1) {
        if (!(this.recog_1 == null)) {
          outMessage('closure at ' + ensureNotNull(ensureNotNull(this.recog_1).get_ruleNames_qcosu5_k$())[config.get_state_iypx7s_k$().get_ruleIndex_qf7nn7_k$()] + ' rule stop ' + config + '\n');
        } else {
          outMessage('closure at rule stop ' + config + '\n');
        }
      }
      if (config.get_context_h02k06_k$() == null ? true : ensureNotNull(config.get_context_h02k06_k$()).hasEmptyPath_tkyljs_k$()) {
        if (config.get_context_h02k06_k$() == null ? true : ensureNotNull(config.get_context_h02k06_k$()).get_isEmpty_zauvru_k$()) {
          configs.add_ce12aw_k$(config);
          return true;
        } else {
          configs.add_ce12aw_k$(LexerATNConfig_init_$Create$_3(config, config.get_state_iypx7s_k$(), Companion_getInstance_22().get_EMPTY_i8q41w_k$()));
          currentAltReachedAcceptState_0 = true;
        }
      }
      if (!(config.get_context_h02k06_k$() == null) ? !ensureNotNull(config.get_context_h02k06_k$()).get_isEmpty_zauvru_k$() : false) {
        var inductionVariable = 0;
        var last = ensureNotNull(config.get_context_h02k06_k$()).size_23och_k$();
        if (inductionVariable < last)
          do {
            var i = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            if (!(ensureNotNull(config.get_context_h02k06_k$()).getReturnState_2b95w3_k$(i) === Companion_getInstance_22().get_EMPTY_RETURN_STATE_opy8sj_k$())) {
              var newContext = ensureNotNull(config.get_context_h02k06_k$()).getParent_atvid4_k$(i);
              var returnState = this.get_atn_18j9am_k$().get_states_jnf5zf_k$().get_c1px32_k$(ensureNotNull(config.get_context_h02k06_k$()).getReturnState_2b95w3_k$(i));
              var c = LexerATNConfig_init_$Create$_3(config, ensureNotNull(returnState), ensureNotNull(newContext));
              currentAltReachedAcceptState_0 = this.closure_bs4s0e_k$(input, c, configs, currentAltReachedAcceptState_0, speculative, treatEofAsEpsilon);
            }
          }
           while (inductionVariable < last);
      }
      return currentAltReachedAcceptState_0;
    }
    if (!config.get_state_iypx7s_k$().onlyHasEpsilonTransitions_stt9um_k$()) {
      if (!currentAltReachedAcceptState_0 ? true : !config.hasPassedThroughNonGreedyDecision_fjnzgu_k$()) {
        configs.add_ce12aw_k$(config);
      }
    }
    var p = config.get_state_iypx7s_k$();
    var inductionVariable_0 = 0;
    var last_0 = p.get_numberOfTransitions_a2gh11_k$();
    if (inductionVariable_0 < last_0)
      do {
        var i_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        var t = p.transition_nw6t99_k$(i_0);
        var c_0 = this.getEpsilonTarget_o9fivk_k$(input, config, t, configs, speculative, treatEofAsEpsilon);
        if (!(c_0 == null)) {
          currentAltReachedAcceptState_0 = this.closure_bs4s0e_k$(input, c_0, configs, currentAltReachedAcceptState_0, speculative, treatEofAsEpsilon);
        }
      }
       while (inductionVariable_0 < last_0);
    return currentAltReachedAcceptState_0;
  };
  protoOf(LexerATNSimulator).getEpsilonTarget_o9fivk_k$ = function (input, config, t, configs, speculative, treatEofAsEpsilon) {
    var c = null;
    var tmp0_subject = t.get_serializationType_kzwl9d_k$();
    if (tmp0_subject === Companion_getInstance_27().get_RULE_wo8tad_k$()) {
      var ruleTransition = t instanceof RuleTransition ? t : THROW_CCE();
      var newContext = Companion_getInstance_26().create_i5ph5t_k$(config.get_context_h02k06_k$(), ruleTransition.get_followState_uwxfd5_k$().get_stateNumber_v90a1d_k$());
      c = LexerATNConfig_init_$Create$_3(config, ensureNotNull(t.get_target_juba8q_k$()), newContext);
    } else if (tmp0_subject === Companion_getInstance_27().get_PRECEDENCE_9id17x_k$())
      throw UnsupportedOperationException_init_$Create$('Precedence predicates are not supported in lexers.');
    else if (tmp0_subject === Companion_getInstance_27().get_PREDICATE_wb07am_k$()) {
      var pt = t instanceof PredicateTransition ? t : THROW_CCE();
      if (Companion_getInstance_16().debug_1) {
        println('EVAL rule ' + pt.get_ruleIndex_qf7nn7_k$() + ':' + pt.get_predIndex_e9gj94_k$());
      }
      configs.set_hasSemanticContext_jce4s7_k$(true);
      if (this.evaluatePredicate_t2pfa7_k$(input, pt.get_ruleIndex_qf7nn7_k$(), pt.get_predIndex_e9gj94_k$(), speculative)) {
        c = LexerATNConfig_init_$Create$_1(config, ensureNotNull(t.get_target_juba8q_k$()));
      }
    } else if (tmp0_subject === Companion_getInstance_27().get_ACTION_4s122p_k$())
      if (config.get_context_h02k06_k$() == null ? true : ensureNotNull(config.get_context_h02k06_k$()).hasEmptyPath_tkyljs_k$()) {
        var tmp = Companion_getInstance_17();
        var tmp_0 = config.get_lexerActionExecutor_oel90_k$();
        var tmp_1 = ensureNotNull(this.get_atn_18j9am_k$().get_lexerActions_uuxhui_k$());
        var lexerActionExecutor = tmp.append_uohsrk_k$(tmp_0, ensureNotNull(tmp_1[(t instanceof ActionTransition ? t : THROW_CCE()).get_actionIndex_va748d_k$()]));
        c = LexerATNConfig_init_$Create$_2(config, ensureNotNull(t.get_target_juba8q_k$()), lexerActionExecutor);
      } else {
        c = LexerATNConfig_init_$Create$_1(config, ensureNotNull(t.get_target_juba8q_k$()));
      }
     else if (tmp0_subject === Companion_getInstance_27().get_EPSILON_c96d27_k$())
      c = LexerATNConfig_init_$Create$_1(config, ensureNotNull(t.get_target_juba8q_k$()));
    else if ((tmp0_subject === Companion_getInstance_27().get_ATOM_wnxxui_k$() ? true : tmp0_subject === Companion_getInstance_27().get_RANGE_ifnq44_k$()) ? true : tmp0_subject === Companion_getInstance_27().get_SET_18jktj_k$())
      if (treatEofAsEpsilon) {
        if (t.matches_isvi11_k$(Companion_getInstance_0().get_EOF_18juz1_k$(), Companion_getInstance_4().get_MIN_CHAR_VALUE_qqe4ki_k$(), Companion_getInstance_4().get_MAX_CHAR_VALUE_xflxqk_k$())) {
          c = LexerATNConfig_init_$Create$_1(config, ensureNotNull(t.get_target_juba8q_k$()));
        }
      }
    return c;
  };
  protoOf(LexerATNSimulator).evaluatePredicate_t2pfa7_k$ = function (input, ruleIndex, predIndex, speculative) {
    if (this.recog_1 == null) {
      return true;
    }
    if (!speculative) {
      return ensureNotNull(this.recog_1).sempred_qltucy_k$(null, ruleIndex, predIndex);
    }
    var savedCharPositionInLine = this.charPositionInLine_1;
    var savedLine = this.line_1;
    var index = input.index_1nqriq_k$();
    var marker = input.mark_1zob1_k$();
    try {
      this.consume_txw6y0_k$(input);
      return ensureNotNull(this.recog_1).sempred_qltucy_k$(null, ruleIndex, predIndex);
    }finally {
      this.charPositionInLine_1 = savedCharPositionInLine;
      this.line_1 = savedLine;
      input.seek_a2e6fk_k$(index);
      input.release_4x1eox_k$(marker);
    }
  };
  protoOf(LexerATNSimulator).captureSimState_vg94hb_k$ = function (settings, input, dfaState) {
    settings.index_1 = input.index_1nqriq_k$();
    settings.line_1 = this.line_1;
    settings.charPos_1 = this.charPositionInLine_1;
    settings.dfaState_1 = dfaState;
  };
  protoOf(LexerATNSimulator).addDFAEdge_f1xojn_k$ = function (from, t, q) {
    var suppressEdge = q.get_hasSemanticContext_7a3dso_k$();
    q.set_hasSemanticContext_jce4s7_k$(false);
    var to = this.addDFAState_itjy5y_k$(q);
    if (suppressEdge) {
      return to;
    }
    this.addDFAEdge_8pi48q_k$(from, t, to);
    return to;
  };
  protoOf(LexerATNSimulator).addDFAEdge_8pi48q_k$ = function (p, t, q) {
    if (t < Companion_getInstance_16().MIN_DFA_EDGE_1 ? true : t > Companion_getInstance_16().MAX_DFA_EDGE_1) {
      return Unit_getInstance();
    }
    if (Companion_getInstance_16().debug_1) {
      println('EDGE ' + p + ' -> ' + q + ' upon ' + toString_0(numberToChar(t)));
    }
    // Inline function 'com.strumenta.kotlinmultiplatform.synchronized' call
    ensureNotNull(p);
    if (ensureNotNull(p).get_edges_iqqp7x_k$() == null) {
      var tmp = ensureNotNull(p);
      // Inline function 'kotlin.arrayOfNulls' call
      var size = (Companion_getInstance_16().MAX_DFA_EDGE_1 - Companion_getInstance_16().MIN_DFA_EDGE_1 | 0) + 1 | 0;
      var tmp$ret$0 = fillArrayVal(Array(size), null);
      tmp.set_edges_da9xnp_k$(tmp$ret$0);
    }
    ensureNotNull(ensureNotNull(p).get_edges_iqqp7x_k$())[t - Companion_getInstance_16().MIN_DFA_EDGE_1 | 0] = q;
  };
  protoOf(LexerATNSimulator).addDFAState_itjy5y_k$ = function (configs) {
    assert(!configs.get_hasSemanticContext_7a3dso_k$());
    var proposed = DFAState_init_$Create$_1(configs);
    var firstConfigWithRuleStopState = null;
    var tmp0_iterator = configs.iterator_jk1svi_k$();
    $l$loop: while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var c = tmp0_iterator.next_20eer_k$();
      var tmp = c.get_state_iypx7s_k$();
      if (tmp instanceof RuleStopState) {
        firstConfigWithRuleStopState = c;
        break $l$loop;
      }
    }
    if (!(firstConfigWithRuleStopState == null)) {
      proposed.set_isAcceptState_hq03al_k$(true);
      proposed.set_lexerActionExecutor_is4268_k$((firstConfigWithRuleStopState instanceof LexerATNConfig ? firstConfigWithRuleStopState : THROW_CCE()).get_lexerActionExecutor_oel90_k$());
      proposed.set_prediction_bzxmdg_k$(ensureNotNull(this.get_atn_18j9am_k$().get_ruleToTokenType_ir5431_k$())[ensureNotNull(firstConfigWithRuleStopState).get_state_iypx7s_k$().get_ruleIndex_qf7nn7_k$()]);
    }
    var dfa = this.decisionToDFA_1[this.mode_1];
    // Inline function 'com.strumenta.kotlinmultiplatform.synchronized' call
    ensureNotNull(dfa).get_states_jnf5zf_k$();
    var existing = dfa.get_states_jnf5zf_k$().get_wei43m_k$(proposed);
    if (!(existing == null))
      return existing;
    proposed.set_stateNumber_ar8wln_k$(ensureNotNull(ensureNotNull(dfa).get_states_jnf5zf_k$()).get_size_woubt6_k$());
    configs.set_isReadonly_qjm26s_k$(true);
    proposed.set_configs_vv34pe_k$(configs);
    dfa.get_states_jnf5zf_k$().put_4fpzoq_k$(proposed, proposed);
    return proposed;
  };
  protoOf(LexerATNSimulator).getDFA_ip2d2p_k$ = function (mode) {
    return ensureNotNull(this.decisionToDFA_1[mode]);
  };
  protoOf(LexerATNSimulator).getText_k6pxlr_k$ = function (input) {
    return input.getText_dijk8r_k$(Companion_getInstance_31().of_doci3b_k$(this.startIndex_1, input.index_1nqriq_k$() - 1 | 0));
  };
  protoOf(LexerATNSimulator).consume_txw6y0_k$ = function (input) {
    var curChar = input.LA_figb43_k$(1);
    if (numberToChar(curChar) === _Char___init__impl__6a9atx(10)) {
      this.line_1 = this.line_1 + 1 | 0;
      this.charPositionInLine_1 = 0;
    } else {
      this.charPositionInLine_1 = this.charPositionInLine_1 + 1 | 0;
    }
    input.consume_sos6hg_k$();
  };
  protoOf(LexerATNSimulator).getTokenName_vqtp2i_k$ = function (t) {
    return t === -1 ? 'EOF' : "'" + toString_0(numberToChar(t)) + "'";
  };
  function LexerAction() {
  }
  function _get_hashCode__t740ls($this) {
    return $this.hashCode_2;
  }
  function Companion_16() {
    Companion_instance_16 = this;
  }
  protoOf(Companion_16).append_uohsrk_k$ = function (lexerActionExecutor, lexerAction) {
    if (lexerActionExecutor == null) {
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp$ret$2 = [lexerAction];
      return new LexerActionExecutor(tmp$ret$2);
    }
    var lexerActions = copyOf(lexerActionExecutor.lexerActions_1, lexerActionExecutor.lexerActions_1.length + 1 | 0);
    lexerActions[get_lastIndex(lexerActions)] = lexerAction;
    // Inline function 'kotlin.collections.toTypedArray' call
    var this_0 = filterNotNull(lexerActions);
    var tmp$ret$3 = copyToArray(this_0);
    return new LexerActionExecutor(tmp$ret$3);
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
    var hash = MurmurHash_getInstance().initialize$default_ajr2pw_k$();
    var indexedObject = this.lexerActions_1;
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var lexerAction = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      hash = MurmurHash_getInstance().update_66jqwg_k$(hash, lexerAction);
    }
    this.hashCode_2 = MurmurHash_getInstance().finish_sqfsk3_k$(hash, this.lexerActions_1.length);
  }
  protoOf(LexerActionExecutor).get_lexerActions_uuxhui_k$ = function () {
    return this.lexerActions_1;
  };
  protoOf(LexerActionExecutor).fixOffsetBeforeMatch_d8kf96_k$ = function (offset) {
    var updatedLexerActions = null;
    var inductionVariable = 0;
    var last = this.lexerActions_1.length - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp;
        if (this.lexerActions_1[i].get_isPositionDependent_gjs9cz_k$()) {
          var tmp_0 = this.lexerActions_1[i];
          tmp = !(tmp_0 instanceof LexerIndexedCustomAction);
        } else {
          tmp = false;
        }
        if (tmp) {
          if (updatedLexerActions == null) {
            // Inline function 'kotlin.collections.copyOf' call
            // Inline function 'kotlin.js.asDynamic' call
            updatedLexerActions = this.lexerActions_1.slice();
          }
          updatedLexerActions[i] = new LexerIndexedCustomAction(offset, this.lexerActions_1[i]);
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
  protoOf(LexerActionExecutor).execute_sohdf9_k$ = function (lexer, input, startIndex) {
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
          var offset = mutableLexerAction.get_offset_hjmqak_k$();
          input.seek_a2e6fk_k$(startIndex + offset | 0);
          mutableLexerAction = mutableLexerAction.get_action_avldmn_k$();
          requiresSeek = !((startIndex + offset | 0) === stopIndex);
        } else {
          if (mutableLexerAction.get_isPositionDependent_gjs9cz_k$()) {
            input.seek_a2e6fk_k$(stopIndex);
            requiresSeek = false;
          }
        }
        mutableLexerAction.execute_m41m1j_k$(lexer);
      }
    }finally {
      if (requiresSeek) {
        input.seek_a2e6fk_k$(stopIndex);
      }
    }
  };
  protoOf(LexerActionExecutor).hashCode = function () {
    return this.hashCode_2;
  };
  protoOf(LexerActionExecutor).equals = function (other) {
    if (other === this) {
      return true;
    } else {
      if (!(other instanceof LexerActionExecutor)) {
        return false;
      }
    }
    var other1 = (other == null ? true : other instanceof LexerActionExecutor) ? other : THROW_CCE();
    return this.hashCode_2 === ensureNotNull(other1).hashCode_2 ? contentEquals(this.lexerActions_1, other1.lexerActions_1) : false;
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
        THROW_IAE('No enum constant value.');
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
  protoOf(LexerChannelAction).get_channel_dhi7tm_k$ = function () {
    return this.channel_1;
  };
  protoOf(LexerChannelAction).get_actionType_agb5zt_k$ = function () {
    return LexerActionType_CHANNEL_getInstance();
  };
  protoOf(LexerChannelAction).get_isPositionDependent_gjs9cz_k$ = function () {
    return false;
  };
  protoOf(LexerChannelAction).execute_m41m1j_k$ = function (lexer) {
    lexer.set_channel_qqft0i_k$(this.channel_1);
  };
  protoOf(LexerChannelAction).hashCode = function () {
    var hash = MurmurHash_getInstance().initialize$default_ajr2pw_k$();
    hash = MurmurHash_getInstance().update_65sxl5_k$(hash, this.get_actionType_agb5zt_k$().get_ordinal_ip24qg_k$());
    hash = MurmurHash_getInstance().update_65sxl5_k$(hash, this.channel_1);
    return MurmurHash_getInstance().finish_sqfsk3_k$(hash, 2);
  };
  protoOf(LexerChannelAction).equals = function (obj) {
    if (obj === this) {
      return true;
    } else {
      if (!(obj instanceof LexerChannelAction)) {
        return false;
      }
    }
    return this.channel_1 === obj.channel_1;
  };
  protoOf(LexerChannelAction).toString = function () {
    return 'channel(' + this.channel_1 + ')';
  };
  function LexerCustomAction(ruleIndex, actionIndex) {
    this.ruleIndex_1 = ruleIndex;
    this.actionIndex_1 = actionIndex;
  }
  protoOf(LexerCustomAction).get_ruleIndex_qf7nn7_k$ = function () {
    return this.ruleIndex_1;
  };
  protoOf(LexerCustomAction).get_actionIndex_va748d_k$ = function () {
    return this.actionIndex_1;
  };
  protoOf(LexerCustomAction).get_actionType_agb5zt_k$ = function () {
    return LexerActionType_CUSTOM_getInstance();
  };
  protoOf(LexerCustomAction).get_isPositionDependent_gjs9cz_k$ = function () {
    return true;
  };
  protoOf(LexerCustomAction).execute_m41m1j_k$ = function (lexer) {
    lexer.action_jhu5i0_k$(null, this.ruleIndex_1, this.actionIndex_1);
  };
  protoOf(LexerCustomAction).hashCode = function () {
    var hash = MurmurHash_getInstance().initialize$default_ajr2pw_k$();
    hash = MurmurHash_getInstance().update_65sxl5_k$(hash, this.get_actionType_agb5zt_k$().get_ordinal_ip24qg_k$());
    hash = MurmurHash_getInstance().update_65sxl5_k$(hash, this.ruleIndex_1);
    hash = MurmurHash_getInstance().update_65sxl5_k$(hash, this.actionIndex_1);
    return MurmurHash_getInstance().finish_sqfsk3_k$(hash, 3);
  };
  protoOf(LexerCustomAction).equals = function (obj) {
    if (obj === this) {
      return true;
    } else {
      if (!(obj instanceof LexerCustomAction)) {
        return false;
      }
    }
    var other = (obj == null ? true : obj instanceof LexerCustomAction) ? obj : THROW_CCE();
    return this.ruleIndex_1 === ensureNotNull(other).ruleIndex_1 ? this.actionIndex_1 === other.actionIndex_1 : false;
  };
  function LexerIndexedCustomAction(offset, action) {
    this.offset_1 = offset;
    this.action_1 = action;
  }
  protoOf(LexerIndexedCustomAction).get_offset_hjmqak_k$ = function () {
    return this.offset_1;
  };
  protoOf(LexerIndexedCustomAction).get_action_avldmn_k$ = function () {
    return this.action_1;
  };
  protoOf(LexerIndexedCustomAction).get_actionType_agb5zt_k$ = function () {
    return this.action_1.get_actionType_agb5zt_k$();
  };
  protoOf(LexerIndexedCustomAction).get_isPositionDependent_gjs9cz_k$ = function () {
    return true;
  };
  protoOf(LexerIndexedCustomAction).execute_m41m1j_k$ = function (lexer) {
    this.action_1.execute_m41m1j_k$(lexer);
  };
  protoOf(LexerIndexedCustomAction).hashCode = function () {
    var hash = MurmurHash_getInstance().initialize$default_ajr2pw_k$();
    hash = MurmurHash_getInstance().update_65sxl5_k$(hash, this.offset_1);
    hash = MurmurHash_getInstance().update_66jqwg_k$(hash, this.action_1);
    return MurmurHash_getInstance().finish_sqfsk3_k$(hash, 2);
  };
  protoOf(LexerIndexedCustomAction).equals = function (obj) {
    if (obj === this) {
      return true;
    } else {
      if (!(obj instanceof LexerIndexedCustomAction)) {
        return false;
      }
    }
    var other = (obj == null ? true : obj instanceof LexerIndexedCustomAction) ? obj : THROW_CCE();
    return this.offset_1 === ensureNotNull(other).offset_1 ? equals(this.action_1, other.action_1) : false;
  };
  function LexerModeAction(mode) {
    this.mode_1 = mode;
  }
  protoOf(LexerModeAction).get_mode_woqlt8_k$ = function () {
    return this.mode_1;
  };
  protoOf(LexerModeAction).get_actionType_agb5zt_k$ = function () {
    return LexerActionType_MODE_getInstance();
  };
  protoOf(LexerModeAction).get_isPositionDependent_gjs9cz_k$ = function () {
    return false;
  };
  protoOf(LexerModeAction).execute_m41m1j_k$ = function (lexer) {
    lexer.mode_9dr98l_k$(this.mode_1);
  };
  protoOf(LexerModeAction).hashCode = function () {
    var hash = MurmurHash_getInstance().initialize$default_ajr2pw_k$();
    hash = MurmurHash_getInstance().update_65sxl5_k$(hash, this.get_actionType_agb5zt_k$().get_ordinal_ip24qg_k$());
    hash = MurmurHash_getInstance().update_65sxl5_k$(hash, this.mode_1);
    return MurmurHash_getInstance().finish_sqfsk3_k$(hash, 2);
  };
  protoOf(LexerModeAction).equals = function (obj) {
    if (obj === this) {
      return true;
    } else {
      if (!(obj instanceof LexerModeAction)) {
        return false;
      }
    }
    return this.mode_1 === obj.mode_1;
  };
  protoOf(LexerModeAction).toString = function () {
    return 'mode(' + this.mode_1 + ')';
  };
  function Companion_17() {
    Companion_instance_17 = this;
    this.INSTANCE_1 = new LexerMoreAction();
  }
  protoOf(Companion_17).get_INSTANCE_9oh0gy_k$ = function () {
    return this.INSTANCE_1;
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
  protoOf(LexerMoreAction).get_actionType_agb5zt_k$ = function () {
    return LexerActionType_MORE_getInstance();
  };
  protoOf(LexerMoreAction).get_isPositionDependent_gjs9cz_k$ = function () {
    return false;
  };
  protoOf(LexerMoreAction).execute_m41m1j_k$ = function (lexer) {
    lexer.more_hji0l7_k$();
  };
  protoOf(LexerMoreAction).hashCode = function () {
    var hash = MurmurHash_getInstance().initialize$default_ajr2pw_k$();
    hash = MurmurHash_getInstance().update_65sxl5_k$(hash, this.get_actionType_agb5zt_k$().get_ordinal_ip24qg_k$());
    return MurmurHash_getInstance().finish_sqfsk3_k$(hash, 1);
  };
  protoOf(LexerMoreAction).equals = function (obj) {
    return obj === this;
  };
  protoOf(LexerMoreAction).toString = function () {
    return 'more';
  };
  function Companion_18() {
    Companion_instance_18 = this;
    this.INSTANCE_1 = new LexerPopModeAction();
  }
  protoOf(Companion_18).get_INSTANCE_9oh0gy_k$ = function () {
    return this.INSTANCE_1;
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
  protoOf(LexerPopModeAction).get_actionType_agb5zt_k$ = function () {
    return LexerActionType_POP_MODE_getInstance();
  };
  protoOf(LexerPopModeAction).get_isPositionDependent_gjs9cz_k$ = function () {
    return false;
  };
  protoOf(LexerPopModeAction).execute_m41m1j_k$ = function (lexer) {
    lexer.popMode_6j8zfw_k$();
  };
  protoOf(LexerPopModeAction).hashCode = function () {
    var hash = MurmurHash_getInstance().initialize$default_ajr2pw_k$();
    hash = MurmurHash_getInstance().update_65sxl5_k$(hash, this.get_actionType_agb5zt_k$().get_ordinal_ip24qg_k$());
    return MurmurHash_getInstance().finish_sqfsk3_k$(hash, 1);
  };
  protoOf(LexerPopModeAction).equals = function (obj) {
    return obj === this;
  };
  protoOf(LexerPopModeAction).toString = function () {
    return 'popMode';
  };
  function LexerPushModeAction(mode) {
    this.mode_1 = mode;
  }
  protoOf(LexerPushModeAction).get_mode_woqlt8_k$ = function () {
    return this.mode_1;
  };
  protoOf(LexerPushModeAction).get_actionType_agb5zt_k$ = function () {
    return LexerActionType_PUSH_MODE_getInstance();
  };
  protoOf(LexerPushModeAction).get_isPositionDependent_gjs9cz_k$ = function () {
    return false;
  };
  protoOf(LexerPushModeAction).execute_m41m1j_k$ = function (lexer) {
    lexer.pushMode_vjt4wb_k$(this.mode_1);
  };
  protoOf(LexerPushModeAction).hashCode = function () {
    var hash = MurmurHash_getInstance().initialize$default_ajr2pw_k$();
    hash = MurmurHash_getInstance().update_65sxl5_k$(hash, this.get_actionType_agb5zt_k$().get_ordinal_ip24qg_k$());
    hash = MurmurHash_getInstance().update_65sxl5_k$(hash, this.mode_1);
    return MurmurHash_getInstance().finish_sqfsk3_k$(hash, 2);
  };
  protoOf(LexerPushModeAction).equals = function (obj) {
    if (obj === this) {
      return true;
    } else {
      if (!(obj instanceof LexerPushModeAction)) {
        return false;
      }
    }
    return this.mode_1 === obj.mode_1;
  };
  protoOf(LexerPushModeAction).toString = function () {
    return 'pushMode(' + this.mode_1 + ')';
  };
  function Companion_19() {
    Companion_instance_19 = this;
    this.INSTANCE_1 = new LexerSkipAction();
  }
  protoOf(Companion_19).get_INSTANCE_9oh0gy_k$ = function () {
    return this.INSTANCE_1;
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
  protoOf(LexerSkipAction).get_actionType_agb5zt_k$ = function () {
    return LexerActionType_SKIP_getInstance();
  };
  protoOf(LexerSkipAction).get_isPositionDependent_gjs9cz_k$ = function () {
    return false;
  };
  protoOf(LexerSkipAction).execute_m41m1j_k$ = function (lexer) {
    lexer.skip_xtts29_k$();
  };
  protoOf(LexerSkipAction).hashCode = function () {
    var hash = MurmurHash_getInstance().initialize$default_ajr2pw_k$();
    hash = MurmurHash_getInstance().update_65sxl5_k$(hash, this.get_actionType_agb5zt_k$().get_ordinal_ip24qg_k$());
    return MurmurHash_getInstance().finish_sqfsk3_k$(hash, 1);
  };
  protoOf(LexerSkipAction).equals = function (obj) {
    return obj === this;
  };
  protoOf(LexerSkipAction).toString = function () {
    return 'skip';
  };
  function LexerTypeAction(type) {
    this.type_1 = type;
  }
  protoOf(LexerTypeAction).get_type_wovaf7_k$ = function () {
    return this.type_1;
  };
  protoOf(LexerTypeAction).get_actionType_agb5zt_k$ = function () {
    return LexerActionType_TYPE_getInstance();
  };
  protoOf(LexerTypeAction).get_isPositionDependent_gjs9cz_k$ = function () {
    return false;
  };
  protoOf(LexerTypeAction).execute_m41m1j_k$ = function (lexer) {
    lexer.set_type_8fmzpr_k$(this.type_1);
  };
  protoOf(LexerTypeAction).hashCode = function () {
    var hash = MurmurHash_getInstance().initialize$default_ajr2pw_k$();
    hash = MurmurHash_getInstance().update_65sxl5_k$(hash, this.get_actionType_agb5zt_k$().get_ordinal_ip24qg_k$());
    hash = MurmurHash_getInstance().update_65sxl5_k$(hash, this.type_1);
    return MurmurHash_getInstance().finish_sqfsk3_k$(hash, 2);
  };
  protoOf(LexerTypeAction).equals = function (obj) {
    if (obj === this) {
      return true;
    } else {
      if (!(obj instanceof LexerTypeAction)) {
        return false;
      }
    }
    return this.type_1 === obj.type_1;
  };
  protoOf(LexerTypeAction).toString = function () {
    return 'type(' + this.type_1 + ')';
  };
  function LookaheadEventInfo(decision, configs, predictedAlt, input, startIndex, stopIndex, fullCtx) {
    DecisionEventInfo.call(this, decision, configs, input, startIndex, stopIndex, fullCtx);
    this.predictedAlt_1 = predictedAlt;
  }
  protoOf(LookaheadEventInfo).set_predictedAlt_1tau6e_k$ = function (_set____db54di) {
    this.predictedAlt_1 = _set____db54di;
  };
  protoOf(LookaheadEventInfo).get_predictedAlt_7ug76u_k$ = function () {
    return this.predictedAlt_1;
  };
  function LoopEndState() {
    ATNState.call(this);
    this.loopBackState_1 = null;
  }
  protoOf(LoopEndState).set_loopBackState_z3ga1o_k$ = function (_set____db54di) {
    this.loopBackState_1 = _set____db54di;
  };
  protoOf(LoopEndState).get_loopBackState_ape3y5_k$ = function () {
    return this.loopBackState_1;
  };
  protoOf(LoopEndState).get_stateType_pzcpby_k$ = function () {
    return Companion_getInstance_14().get_LOOP_END_ihty7d_k$();
  };
  function NotSetTransition(target, set) {
    SetTransition.call(this, target, set);
  }
  protoOf(NotSetTransition).get_serializationType_kzwl9d_k$ = function () {
    return Companion_getInstance_27().get_NOT_SET_mnxk4z_k$();
  };
  protoOf(NotSetTransition).matches_isvi11_k$ = function (symbol, minVocabSymbol, maxVocabSymbol) {
    return (minVocabSymbol <= symbol ? symbol <= maxVocabSymbol : false) ? !protoOf(SetTransition).matches_isvi11_k$.call(this, symbol, minVocabSymbol, maxVocabSymbol) : false;
  };
  protoOf(NotSetTransition).toString = function () {
    // Inline function 'kotlin.text.plus' call
    var this_0 = _Char___init__impl__6a9atx(126);
    var other = protoOf(SetTransition).toString.call(this);
    return toString_0(this_0) + other;
  };
  function LexerConfigHashSet() {
    AbstractConfigHashSet.call(this, Companion_getInstance_33().get_INSTANCE_9oh0gy_k$());
  }
  protoOf(LexerConfigHashSet).remove_ugeuth_k$ = function (element) {
    // Inline function 'kotlin.TODO' call
    var reason = 'not implemented';
    throw new NotImplementedError('An operation is not implemented: ' + reason);
  };
  protoOf(LexerConfigHashSet).remove_cedx0m_k$ = function (element) {
    if (!(element instanceof ATNConfig))
      return false;
    return this.remove_ugeuth_k$(element instanceof ATNConfig ? element : THROW_CCE());
  };
  protoOf(LexerConfigHashSet).remove_an8aut_k$ = function (element) {
    return this.remove_ugeuth_k$(element instanceof ATNConfig ? element : THROW_CCE());
  };
  protoOf(LexerConfigHashSet).containsAll_ts80yp_k$ = function (elements) {
    // Inline function 'kotlin.TODO' call
    var reason = 'not implemented';
    throw new NotImplementedError('An operation is not implemented: ' + reason);
  };
  protoOf(LexerConfigHashSet).containsAll_xk45sd_k$ = function (elements) {
    return this.containsAll_ts80yp_k$(elements);
  };
  protoOf(LexerConfigHashSet).containsAll_70schq_k$ = function (elements) {
    return this.containsAll_ts80yp_k$(elements);
  };
  protoOf(LexerConfigHashSet).retainAll_g3j73t_k$ = function (elements) {
    // Inline function 'kotlin.TODO' call
    var reason = 'not implemented';
    throw new NotImplementedError('An operation is not implemented: ' + reason);
  };
  protoOf(LexerConfigHashSet).retainAll_9fhiib_k$ = function (elements) {
    return this.retainAll_g3j73t_k$(elements);
  };
  protoOf(LexerConfigHashSet).retainAll_h3uasc_k$ = function (elements) {
    return this.retainAll_g3j73t_k$(elements);
  };
  function OrderedATNConfigSet() {
    ATNConfigSet.call(this);
    this.set_configLookup_gpyt63_k$(new LexerConfigHashSet());
  }
  function ParseInfo(atnSimulator) {
    this.atnSimulator_1 = atnSimulator;
  }
  protoOf(ParseInfo).get_atnSimulator_tr02ya_k$ = function () {
    return this.atnSimulator_1;
  };
  protoOf(ParseInfo).get_decisionInfo_fpwt83_k$ = function () {
    return ensureNotNull(this.atnSimulator_1.get_decisionInfo_fpwt83_k$());
  };
  protoOf(ParseInfo).get_llDecisions_r3zboy_k$ = function () {
    var decisions = this.atnSimulator_1.get_decisionInfo_fpwt83_k$();
    var LL = ArrayList_init_$Create$_0();
    var inductionVariable = 0;
    var last = ensureNotNull(decisions).length - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var fallBack = ensureNotNull(decisions[i]).get_LL_Fallback_9jkrjs_k$();
        if (fallBack.compareTo_9jj042_k$(new Long(0, 0)) > 0) {
          LL.add_utx5q5_k$(i);
        }
      }
       while (inductionVariable <= last);
    return LL;
  };
  protoOf(ParseInfo).get_totalTimeInPrediction_2z1q9o_k$ = function () {
    var decisions = this.atnSimulator_1.get_decisionInfo_fpwt83_k$();
    var t = new Long(0, 0);
    var inductionVariable = 0;
    var last = ensureNotNull(decisions).length - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        t = t.plus_r93sks_k$(ensureNotNull(decisions[i]).get_timeInPrediction_ti9wl2_k$());
      }
       while (inductionVariable <= last);
    return t;
  };
  protoOf(ParseInfo).get_totalSLLLookaheadOps_zbdywo_k$ = function () {
    var decisions = this.atnSimulator_1.get_decisionInfo_fpwt83_k$();
    var k = new Long(0, 0);
    var inductionVariable = 0;
    var last = ensureNotNull(decisions).length - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        k = k.plus_r93sks_k$(ensureNotNull(decisions[i]).get_SLL_TotalLook_f99f1u_k$());
      }
       while (inductionVariable <= last);
    return k;
  };
  protoOf(ParseInfo).get_totalLLLookaheadOps_65cgnf_k$ = function () {
    var decisions = this.atnSimulator_1.get_decisionInfo_fpwt83_k$();
    var k = new Long(0, 0);
    var inductionVariable = 0;
    var last = ensureNotNull(decisions).length - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        k = k.plus_r93sks_k$(ensureNotNull(decisions[i]).get_LL_TotalLook_wxt2ab_k$());
      }
       while (inductionVariable <= last);
    return k;
  };
  protoOf(ParseInfo).get_totalSLLATNLookaheadOps_5qrh9p_k$ = function () {
    var decisions = this.atnSimulator_1.get_decisionInfo_fpwt83_k$();
    var k = new Long(0, 0);
    var inductionVariable = 0;
    var last = ensureNotNull(decisions).length - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        k = k.plus_r93sks_k$(ensureNotNull(decisions[i]).get_SLL_ATNTransitions_inbxbs_k$());
      }
       while (inductionVariable <= last);
    return k;
  };
  protoOf(ParseInfo).get_totalLLATNLookaheadOps_p795cg_k$ = function () {
    var decisions = this.atnSimulator_1.get_decisionInfo_fpwt83_k$();
    var k = new Long(0, 0);
    var inductionVariable = 0;
    var last = ensureNotNull(decisions).length - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        k = k.plus_r93sks_k$(ensureNotNull(decisions[i]).get_LL_ATNTransitions_hryrpj_k$());
      }
       while (inductionVariable <= last);
    return k;
  };
  protoOf(ParseInfo).get_totalATNLookaheadOps_7k4ynk_k$ = function () {
    var decisions = this.atnSimulator_1.get_decisionInfo_fpwt83_k$();
    var k = new Long(0, 0);
    var inductionVariable = 0;
    var last = ensureNotNull(decisions).length - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        k = k.plus_r93sks_k$(ensureNotNull(decisions[i]).get_SLL_ATNTransitions_inbxbs_k$());
        k = k.plus_r93sks_k$(ensureNotNull(decisions[i]).get_LL_ATNTransitions_hryrpj_k$());
      }
       while (inductionVariable <= last);
    return k;
  };
  function ParserATNSimulator_init_$Init$(atn, decisionToDFA, sharedContextCache, $this) {
    ParserATNSimulator.call($this, null, atn, decisionToDFA, sharedContextCache);
    return $this;
  }
  function ParserATNSimulator_init_$Create$(atn, decisionToDFA, sharedContextCache) {
    return ParserATNSimulator_init_$Init$(atn, decisionToDFA, sharedContextCache, objectCreate(protoOf(ParserATNSimulator)));
  }
  function Companion_20() {
    Companion_instance_20 = this;
    this.debug_1 = false;
    this.debug_list_atn_decisions_1 = false;
    this.dfa_debug_1 = false;
    this.retry_debug_1 = false;
  }
  protoOf(Companion_20).get_debug_iq7ga2_k$ = function () {
    return this.debug_1;
  };
  protoOf(Companion_20).get_debug_list_atn_decisions_ngg72f_k$ = function () {
    return this.debug_list_atn_decisions_1;
  };
  protoOf(Companion_20).get_dfa_debug_8xdimi_k$ = function () {
    return this.dfa_debug_1;
  };
  protoOf(Companion_20).get_retry_debug_1fyv71_k$ = function () {
    return this.retry_debug_1;
  };
  protoOf(Companion_20).getUniqueAlt_qnvhkr_k$ = function (configs) {
    var alt = Companion_getInstance_8().get_INVALID_ALT_NUMBER_idrbu8_k$();
    var tmp0_iterator = configs.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var c = tmp0_iterator.next_20eer_k$();
      if (alt === Companion_getInstance_8().get_INVALID_ALT_NUMBER_idrbu8_k$()) {
        alt = c.get_alt_18j9hc_k$();
      } else if (!(c.get_alt_18j9hc_k$() === alt)) {
        return Companion_getInstance_8().get_INVALID_ALT_NUMBER_idrbu8_k$();
      }
    }
    return alt;
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
  protoOf(ParserATNSimulator).get_parser_hy51k8_k$ = function () {
    return this.parser_1;
  };
  protoOf(ParserATNSimulator).get_decisionToDFA_9qhkht_k$ = function () {
    return this.decisionToDFA_1;
  };
  protoOf(ParserATNSimulator).reset_5u6xz3_k$ = function () {
    // Inline function 'kotlin.TODO' call
    var reason = 'not implemented';
    throw new NotImplementedError('An operation is not implemented: ' + reason);
  };
  protoOf(ParserATNSimulator).set_predictionMode_r45a5n_k$ = function (_set____db54di) {
    this.predictionMode_1 = _set____db54di;
  };
  protoOf(ParserATNSimulator).get_predictionMode_h0c9wl_k$ = function () {
    return this.predictionMode_1;
  };
  protoOf(ParserATNSimulator).set_mergeCache_akjor3_k$ = function (_set____db54di) {
    this.mergeCache_1 = _set____db54di;
  };
  protoOf(ParserATNSimulator).get_mergeCache_wdin5f_k$ = function () {
    return this.mergeCache_1;
  };
  protoOf(ParserATNSimulator).set__input_ym8gjo_k$ = function (_set____db54di) {
    this._input_1 = _set____db54di;
  };
  protoOf(ParserATNSimulator).get__input_a0p7tg_k$ = function () {
    return this._input_1;
  };
  protoOf(ParserATNSimulator).set__startIndex_4ayely_k$ = function (_set____db54di) {
    this._startIndex_1 = _set____db54di;
  };
  protoOf(ParserATNSimulator).get__startIndex_5jc6o6_k$ = function () {
    return this._startIndex_1;
  };
  protoOf(ParserATNSimulator).set__outerContext_3vs4sz_k$ = function (_set____db54di) {
    this._outerContext_1 = _set____db54di;
  };
  protoOf(ParserATNSimulator).get__outerContext_4n0p7a_k$ = function () {
    return this._outerContext_1;
  };
  protoOf(ParserATNSimulator).set__dfa_6exci1_k$ = function (_set____db54di) {
    this._dfa_1 = _set____db54di;
  };
  protoOf(ParserATNSimulator).get__dfa_wohfvt_k$ = function () {
    return this._dfa_1;
  };
  protoOf(ParserATNSimulator).clearDFA_elg0ci_k$ = function () {
    var inductionVariable = 0;
    var last = this.decisionToDFA_1.length - 1 | 0;
    if (inductionVariable <= last)
      do {
        var d = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        this.decisionToDFA_1[d] = new DFA(ensureNotNull(this.get_atn_18j9am_k$().getDecisionState_plveuf_k$(d)), d);
      }
       while (inductionVariable <= last);
  };
  protoOf(ParserATNSimulator).adaptivePredict_wg46xz_k$ = function (input, decision, outerContext) {
    var outerContext_0 = outerContext;
    if (Companion_getInstance_21().debug_1 ? true : Companion_getInstance_21().debug_list_atn_decisions_1) {
      println('adaptivePredict decision ' + decision + ' exec LA(1)==' + this.getLookaheadName_g9gt8u_k$(input) + ' line ' + ensureNotNull(input.LT_lwif2o_k$(1)).get_line_wopum5_k$() + ':' + ensureNotNull(input.LT_lwif2o_k$(1)).get_charPositionInLine_2wqse7_k$());
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
      if (dfa.get_isPrecedenceDfa_hksa4e_k$()) {
        s0 = dfa.getPrecedenceStartState_hdmarb_k$(ensureNotNull(this.parser_1).get_precedence_hj68vh_k$());
      } else {
        s0 = dfa.get_s0_kntnq2_k$();
      }
      if (s0 == null) {
        if (outerContext_0 == null)
          outerContext_0 = get_EMPTY_RULECTX();
        if (Companion_getInstance_21().debug_1 ? true : Companion_getInstance_21().debug_list_atn_decisions_1) {
          outMessage('predictATN decision ' + dfa.get_decision_mg4f2z_k$() + ' exec LA(1)==' + this.getLookaheadName_g9gt8u_k$(input) + ', outerContext=' + ensureNotNull(outerContext_0).toString$default_x5ru6u_k$(this.parser_1));
        }
        var fullCtx = false;
        var s0_closure = this.computeStartState_ycraoi_k$(dfa.get_atnStartState_5zitwf_k$(), get_EMPTY_RULECTX(), fullCtx);
        if (dfa.get_isPrecedenceDfa_hksa4e_k$()) {
          ensureNotNull(dfa.get_s0_kntnq2_k$()).set_configs_vv34pe_k$(s0_closure);
          s0_closure = this.applyPrecedenceFilter_nhysz1_k$(s0_closure);
          s0 = this.addDFAState_jayew0_k$(dfa, DFAState_init_$Create$_1(s0_closure));
          dfa.setPrecedenceStartState_ngcy4p_k$(ensureNotNull(this.parser_1).get_precedence_hj68vh_k$(), s0);
        } else {
          s0 = this.addDFAState_jayew0_k$(dfa, DFAState_init_$Create$_1(s0_closure));
          dfa.set_s0_qek8ur_k$(s0);
        }
      }
      var alt = this.execATN_fp46fc_k$(dfa, s0, input, index, ensureNotNull(outerContext_0));
      if (Companion_getInstance_21().debug_1) {
        outMessage('DFA after predictATN: ' + dfa.toString_vjubf0_k$(ensureNotNull(this.parser_1).get_vocabulary_zijn9t_k$()));
      }
      return alt;
    }finally {
      this.mergeCache_1 = null;
      this._dfa_1 = null;
      input.seek_a2e6fk_k$(index);
      input.release_4x1eox_k$(m);
    }
  };
  protoOf(ParserATNSimulator).execATN_fp46fc_k$ = function (dfa, s0, input, startIndex, outerContext) {
    if (Companion_getInstance_21().debug_1 ? true : Companion_getInstance_21().debug_list_atn_decisions_1) {
      outMessage('execATN decision ' + dfa.get_decision_mg4f2z_k$() + ' exec LA(1)==' + this.getLookaheadName_g9gt8u_k$(input) + ' line ' + ensureNotNull(input.LT_lwif2o_k$(1)).get_line_wopum5_k$() + ':' + ensureNotNull(input.LT_lwif2o_k$(1)).get_charPositionInLine_2wqse7_k$());
    }
    var previousD = s0;
    if (Companion_getInstance_21().debug_1) {
      println('s0 = ' + s0);
    }
    var t = input.LA_figb43_k$(1);
    while (true) {
      var D = this.getExistingTargetState_bevb2l_k$(previousD, t);
      if (D == null) {
        D = this.computeTargetState_szt1de_k$(dfa, previousD, t);
      }
      if (D === Companion_getInstance_13().get_ERROR_i8tccf_k$()) {
        var e = this.noViableAlt_hybjp1_k$(input, outerContext, ensureNotNull(previousD.get_configs_gztoqw_k$()), startIndex);
        input.seek_a2e6fk_k$(startIndex);
        var alt = this.getSynValidOrSemInvalidAltThatFinishedDecisionEntryRule_ibypbc_k$(ensureNotNull(previousD.get_configs_gztoqw_k$()), outerContext);
        if (!(alt === Companion_getInstance_8().get_INVALID_ALT_NUMBER_idrbu8_k$())) {
          return alt;
        }
        throw e;
      }
      if (ensureNotNull(D).get_requiresFullContext_gu61g7_k$() ? !this.predictionMode_1.equals(PredictionMode_SLL_getInstance()) : false) {
        var conflictingAlts = ensureNotNull(ensureNotNull(D).get_configs_gztoqw_k$()).get_conflictingAlts_nrn7db_k$();
        if (!(ensureNotNull(D).get_predicates_z7p3v_k$() == null)) {
          if (Companion_getInstance_21().debug_1) {
            println('DFA state has preds in DFA sim LL failover');
          }
          var conflictIndex = input.index_1nqriq_k$();
          if (!(conflictIndex === startIndex)) {
            input.seek_a2e6fk_k$(startIndex);
          }
          conflictingAlts = this.evalSemanticContext_jo6d4r_k$(ensureNotNull(ensureNotNull(D).get_predicates_z7p3v_k$()), outerContext, true);
          if (conflictingAlts.cardinality_dz7uku_k$() === 1) {
            if (Companion_getInstance_21().debug_1) {
              println('Full LL avoided');
            }
            return conflictingAlts.nextSetBit_43bnne_k$(0);
          }
          if (!(conflictIndex === startIndex)) {
            input.seek_a2e6fk_k$(conflictIndex);
          }
        }
        if (Companion_getInstance_21().dfa_debug_1) {
          println('ctx sensitive state ' + outerContext + ' in ' + D);
        }
        var fullCtx = true;
        var s0_closure = this.computeStartState_ycraoi_k$(dfa.get_atnStartState_5zitwf_k$(), outerContext, fullCtx);
        this.reportAttemptingFullContext_yib5wo_k$(dfa, ensureNotNull(conflictingAlts), ensureNotNull(ensureNotNull(D).get_configs_gztoqw_k$()), startIndex, input.index_1nqriq_k$());
        return this.execATNWithFullContext_quohif_k$(dfa, D, s0_closure, input, startIndex, outerContext);
      }
      if (ensureNotNull(D).get_isAcceptState_ebj6tm_k$()) {
        if (ensureNotNull(D).get_predicates_z7p3v_k$() == null) {
          return ensureNotNull(D).get_prediction_yvsa0_k$();
        }
        var stopIndex = input.index_1nqriq_k$();
        input.seek_a2e6fk_k$(startIndex);
        var alts = this.evalSemanticContext_jo6d4r_k$(ensureNotNull(ensureNotNull(D).get_predicates_z7p3v_k$()), outerContext, true);
        switch (alts.cardinality_dz7uku_k$()) {
          case 0:
            throw this.noViableAlt_hybjp1_k$(input, outerContext, ensureNotNull(ensureNotNull(D).get_configs_gztoqw_k$()), startIndex);
          case 1:
            return alts.nextSetBit_43bnne_k$(0);
          default:
            this.reportAmbiguity_7y1q5x_k$(dfa, D, startIndex, stopIndex, false, alts, ensureNotNull(ensureNotNull(D).get_configs_gztoqw_k$()));
            return alts.nextSetBit_43bnne_k$(0);
        }
      }
      previousD = D;
      if (!(t === Companion_getInstance_3().get_EOF_18juz1_k$())) {
        input.consume_sos6hg_k$();
        t = input.LA_figb43_k$(1);
      }
    }
  };
  protoOf(ParserATNSimulator).getExistingTargetState_bevb2l_k$ = function (previousD, t) {
    var edges = previousD.get_edges_iqqp7x_k$();
    var tmp;
    if ((edges == null ? true : (t + 1 | 0) < 0) ? true : (t + 1 | 0) >= ensureNotNull(edges).length) {
      tmp = null;
    } else {
      tmp = ensureNotNull(edges)[t + 1 | 0];
    }
    return tmp;
  };
  protoOf(ParserATNSimulator).computeTargetState_szt1de_k$ = function (dfa, previousD, t) {
    var reach = this.computeReachSet_sv6084_k$(ensureNotNull(previousD.get_configs_gztoqw_k$()), t, false);
    if (reach == null) {
      this.addDFAEdge_j4ss5o_k$(dfa, previousD, t, Companion_getInstance_13().get_ERROR_i8tccf_k$());
      return Companion_getInstance_13().get_ERROR_i8tccf_k$();
    }
    var D = DFAState_init_$Create$_1(reach);
    var predictedAlt = Companion_getInstance_21().getUniqueAlt_qnvhkr_k$(ensureNotNull(reach));
    if (Companion_getInstance_21().debug_1) {
      var altSubSets = Companion_getInstance_24().getConflictingAltSubsets_wzna9x_k$(ensureNotNull(reach));
      println('SLL altSubSets=' + altSubSets + ', configs=' + reach + ', predict=' + predictedAlt + ', allSubsetsConflict=' + Companion_getInstance_24().allSubsetsConflict_214a2z_k$(altSubSets) + ', conflictingAlts=' + this.getConflictingAlts_ze13ua_k$(reach));
    }
    if (!(predictedAlt === Companion_getInstance_8().get_INVALID_ALT_NUMBER_idrbu8_k$())) {
      ensureNotNull(D).set_isAcceptState_hq03al_k$(true);
      ensureNotNull(ensureNotNull(D).get_configs_gztoqw_k$()).set_uniqueAlt_byfz2r_k$(predictedAlt);
      ensureNotNull(D).set_prediction_bzxmdg_k$(predictedAlt);
    } else if (Companion_getInstance_24().hasSLLConflictTerminatingPrediction_qxsjf9_k$(this.predictionMode_1, reach)) {
      ensureNotNull(ensureNotNull(D).get_configs_gztoqw_k$()).set_conflictingAlts_4sy777_k$(this.getConflictingAlts_ze13ua_k$(reach));
      ensureNotNull(D).set_requiresFullContext_dondmo_k$(true);
      ensureNotNull(D).set_isAcceptState_hq03al_k$(true);
      ensureNotNull(D).set_prediction_bzxmdg_k$(ensureNotNull(ensureNotNull(ensureNotNull(D).get_configs_gztoqw_k$()).get_conflictingAlts_nrn7db_k$()).nextSetBit_43bnne_k$(0));
    }
    if (ensureNotNull(D).get_isAcceptState_ebj6tm_k$() ? ensureNotNull(ensureNotNull(D).get_configs_gztoqw_k$()).get_hasSemanticContext_7a3dso_k$() : false) {
      this.predicateDFAState_ch4pd4_k$(D, this.get_atn_18j9am_k$().getDecisionState_plveuf_k$(dfa.get_decision_mg4f2z_k$()));
      if (!(ensureNotNull(D).get_predicates_z7p3v_k$() == null)) {
        ensureNotNull(D).set_prediction_bzxmdg_k$(Companion_getInstance_8().get_INVALID_ALT_NUMBER_idrbu8_k$());
      }
    }
    D = this.addDFAEdge_j4ss5o_k$(dfa, previousD, t, D);
    return D;
  };
  protoOf(ParserATNSimulator).predicateDFAState_ch4pd4_k$ = function (dfaState, decisionState) {
    var nalts = ensureNotNull(decisionState).get_numberOfTransitions_a2gh11_k$();
    var altsToCollectPredsFrom = this.getConflictingAltsOrUniqueAlt_kvggj8_k$(ensureNotNull(dfaState.get_configs_gztoqw_k$()));
    var altToPred = this.getPredsForAmbigAlts_5d4htz_k$(altsToCollectPredsFrom, ensureNotNull(dfaState.get_configs_gztoqw_k$()), nalts);
    if (!(altToPred == null)) {
      dfaState.set_predicates_wnj8b_k$(this.getPredicatePredictions_hto2l9_k$(altsToCollectPredsFrom, altToPred));
      dfaState.set_prediction_bzxmdg_k$(Companion_getInstance_8().get_INVALID_ALT_NUMBER_idrbu8_k$());
    } else {
      dfaState.set_prediction_bzxmdg_k$(altsToCollectPredsFrom.nextSetBit_43bnne_k$(0));
    }
  };
  protoOf(ParserATNSimulator).execATNWithFullContext_quohif_k$ = function (dfa, D, s0, input, startIndex, outerContext) {
    if (Companion_getInstance_21().debug_1 ? true : Companion_getInstance_21().debug_list_atn_decisions_1) {
      println('execATNWithFullContext ' + s0);
    }
    var fullCtx = true;
    var foundExactAmbig = false;
    var reach = null;
    var previous = s0;
    input.seek_a2e6fk_k$(startIndex);
    var t = input.LA_figb43_k$(1);
    var predictedAlt;
    $l$loop_1: while (true) {
      reach = this.computeReachSet_sv6084_k$(previous, t, fullCtx);
      if (reach == null) {
        var e = this.noViableAlt_hybjp1_k$(input, outerContext, previous, startIndex);
        input.seek_a2e6fk_k$(startIndex);
        var alt = this.getSynValidOrSemInvalidAltThatFinishedDecisionEntryRule_ibypbc_k$(previous, outerContext);
        if (!(alt === Companion_getInstance_8().get_INVALID_ALT_NUMBER_idrbu8_k$())) {
          return alt;
        }
        throw e;
      }
      var altSubSets = Companion_getInstance_24().getConflictingAltSubsets_wzna9x_k$(ensureNotNull(reach));
      if (Companion_getInstance_21().debug_1) {
        println('LL altSubSets=' + altSubSets + ', predict=' + Companion_getInstance_24().getUniqueAlt_ktgea3_k$(altSubSets) + ', resolvesToJustOneViableAlt=' + Companion_getInstance_24().resolvesToJustOneViableAlt_m8g761_k$(altSubSets));
      }
      ensureNotNull(reach).set_uniqueAlt_byfz2r_k$(Companion_getInstance_21().getUniqueAlt_qnvhkr_k$(ensureNotNull(reach)));
      if (!(ensureNotNull(reach).get_uniqueAlt_dzo29_k$() === Companion_getInstance_8().get_INVALID_ALT_NUMBER_idrbu8_k$())) {
        predictedAlt = ensureNotNull(reach).get_uniqueAlt_dzo29_k$();
        break $l$loop_1;
      }
      if (!this.predictionMode_1.equals(PredictionMode_LL_EXACT_AMBIG_DETECTION_getInstance())) {
        predictedAlt = Companion_getInstance_24().resolvesToJustOneViableAlt_m8g761_k$(altSubSets);
        if (!(predictedAlt === Companion_getInstance_8().get_INVALID_ALT_NUMBER_idrbu8_k$())) {
          break $l$loop_1;
        }
      } else {
        if (Companion_getInstance_24().allSubsetsConflict_214a2z_k$(altSubSets) ? Companion_getInstance_24().allSubsetsEqual_yqxn2h_k$(altSubSets) : false) {
          foundExactAmbig = true;
          predictedAlt = Companion_getInstance_24().getSingleViableAlt_q1pqsv_k$(altSubSets);
          break $l$loop_1;
        }
      }
      previous = reach;
      if (!(t === Companion_getInstance_3().get_EOF_18juz1_k$())) {
        input.consume_sos6hg_k$();
        t = input.LA_figb43_k$(1);
      }
    }
    if (!(ensureNotNull(reach).get_uniqueAlt_dzo29_k$() === Companion_getInstance_8().get_INVALID_ALT_NUMBER_idrbu8_k$())) {
      this.reportContextSensitivity_obvclm_k$(dfa, predictedAlt, reach, startIndex, input.index_1nqriq_k$());
      return predictedAlt;
    }
    this.reportAmbiguity_7y1q5x_k$(dfa, D, startIndex, input.index_1nqriq_k$(), foundExactAmbig, ensureNotNull(reach).get_alts_woiw4z_k$(), reach);
    return predictedAlt;
  };
  protoOf(ParserATNSimulator).computeReachSet_sv6084_k$ = function (closure, t, fullCtx) {
    if (Companion_getInstance_21().debug_1) {
      println('in computeReachSet, starting closure: ' + closure);
    }
    if (this.mergeCache_1 == null) {
      this.mergeCache_1 = new DoubleKeyMap();
    }
    var intermediate = new ATNConfigSet(fullCtx);
    var skippedStopStates = null;
    var tmp0_iterator = closure.iterator_jk1svi_k$();
    $l$loop: while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var c = tmp0_iterator.next_20eer_k$();
      if (Companion_getInstance_21().debug_1) {
        println('testing ' + this.getTokenName_vqtp2i_k$(t) + ' at ' + c.toString());
      }
      var tmp = c.get_state_iypx7s_k$();
      if (tmp instanceof RuleStopState) {
        assert(ensureNotNull(c.get_context_h02k06_k$()).get_isEmpty_zauvru_k$());
        if (fullCtx ? true : t === Companion_getInstance_3().get_EOF_18juz1_k$()) {
          if (skippedStopStates == null) {
            skippedStopStates = ArrayList_init_$Create$_0();
          }
          skippedStopStates.add_utx5q5_k$(c);
        }
        continue $l$loop;
      }
      var n = c.get_state_iypx7s_k$().get_numberOfTransitions_a2gh11_k$();
      var inductionVariable = 0;
      if (inductionVariable < n)
        do {
          var ti = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var trans = c.get_state_iypx7s_k$().transition_nw6t99_k$(ti);
          var target = this.getReachableTarget_rbdjx9_k$(trans, t);
          if (!(target == null)) {
            intermediate.add_l5m7bi_k$(ATNConfig_init_$Create$_3(c, target), this.mergeCache_1);
          }
        }
         while (inductionVariable < n);
    }
    var reach = null;
    if (skippedStopStates == null ? !(t === Companion_getInstance_6().get_EOF_18juz1_k$()) : false) {
      if (intermediate.get_size_woubt6_k$() === 1) {
        reach = intermediate;
      } else if (!(Companion_getInstance_21().getUniqueAlt_qnvhkr_k$(intermediate) === Companion_getInstance_8().get_INVALID_ALT_NUMBER_idrbu8_k$())) {
        reach = intermediate;
      }
    }
    if (reach == null) {
      reach = new ATNConfigSet(fullCtx);
      var closureBusy = HashSet_init_$Create$_0();
      var treatEofAsEpsilon = t === Companion_getInstance_6().get_EOF_18juz1_k$();
      var tmp2_iterator = intermediate.iterator_jk1svi_k$();
      while (tmp2_iterator.hasNext_bitz1p_k$()) {
        var c_0 = tmp2_iterator.next_20eer_k$();
        this.closure_npx88s_k$(c_0, reach, closureBusy, false, fullCtx, treatEofAsEpsilon);
      }
    }
    if (t === Companion_getInstance_3().get_EOF_18juz1_k$()) {
      reach = this.removeAllConfigsNotInRuleStopState_isu49j_k$(reach, reach === intermediate);
    }
    if (!(skippedStopStates == null) ? !fullCtx ? true : !Companion_getInstance_24().hasConfigInRuleStopState_axz4c5_k$(ensureNotNull(reach)) : false) {
      assert(!skippedStopStates.isEmpty_y1axqb_k$());
      var tmp3_iterator = skippedStopStates.iterator_jk1svi_k$();
      while (tmp3_iterator.hasNext_bitz1p_k$()) {
        var c_1 = tmp3_iterator.next_20eer_k$();
        ensureNotNull(reach).add_l5m7bi_k$(c_1, this.mergeCache_1);
      }
    }
    return ensureNotNull(reach).isEmpty_y1axqb_k$() ? null : reach;
  };
  protoOf(ParserATNSimulator).removeAllConfigsNotInRuleStopState_isu49j_k$ = function (configs, lookToEndOfRule) {
    if (Companion_getInstance_24().allConfigsInRuleStopStates_1m093c_k$(configs)) {
      return configs;
    }
    var result = new ATNConfigSet(configs.get_fullCtx_76ubbl_k$());
    var tmp0_iterator = configs.iterator_jk1svi_k$();
    $l$loop: while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var config = tmp0_iterator.next_20eer_k$();
      var tmp = config.get_state_iypx7s_k$();
      if (tmp instanceof RuleStopState) {
        result.add_l5m7bi_k$(config, this.mergeCache_1);
        continue $l$loop;
      }
      if (lookToEndOfRule ? config.get_state_iypx7s_k$().onlyHasEpsilonTransitions_stt9um_k$() : false) {
        var nextTokens = this.get_atn_18j9am_k$().nextTokens_kclek1_k$(config.get_state_iypx7s_k$());
        if (ensureNotNull(nextTokens).contains_7q95ev_k$(Companion_getInstance_6().get_EPSILON_c96d27_k$())) {
          var endOfRuleState = ensureNotNull(this.get_atn_18j9am_k$().get_ruleToStopState_5ojl67_k$())[config.get_state_iypx7s_k$().get_ruleIndex_qf7nn7_k$()];
          result.add_l5m7bi_k$(ATNConfig_init_$Create$_3(config, ensureNotNull(endOfRuleState)), this.mergeCache_1);
        }
      }
    }
    return result;
  };
  protoOf(ParserATNSimulator).computeStartState_ycraoi_k$ = function (p, ctx, fullCtx) {
    var initialContext = Companion_getInstance_22().fromRuleContext_nzvmt0_k$(this.get_atn_18j9am_k$(), ctx);
    var configs = new ATNConfigSet(fullCtx);
    var inductionVariable = 0;
    var last = p.get_numberOfTransitions_a2gh11_k$();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var target = p.transition_nw6t99_k$(i).get_target_juba8q_k$();
        var c = ATNConfig_init_$Create$_0(ensureNotNull(target), i + 1 | 0, initialContext);
        var closureBusy = HashSet_init_$Create$_0();
        this.closure_npx88s_k$(c, configs, closureBusy, true, fullCtx, false);
      }
       while (inductionVariable < last);
    return configs;
  };
  protoOf(ParserATNSimulator).applyPrecedenceFilter_nhysz1_k$ = function (configs) {
    var statesFromAlt1 = HashMap_init_$Create$();
    var configSet = new ATNConfigSet(configs.get_fullCtx_76ubbl_k$());
    var tmp0_iterator = configs.iterator_jk1svi_k$();
    $l$loop_0: while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var config = tmp0_iterator.next_20eer_k$();
      if (!(config.get_alt_18j9hc_k$() === 1)) {
        continue $l$loop_0;
      }
      var tmp1_elvis_lhs = ensureNotNull(config.get_semanticContext_gd9bz4_k$()).evalPrecedence_2ceeuf_k$(ensureNotNull(this.parser_1), ensureNotNull(this._outerContext_1));
      var tmp;
      if (tmp1_elvis_lhs == null) {
        continue $l$loop_0;
      } else {
        tmp = tmp1_elvis_lhs;
      }
      var updatedContext = tmp;
      statesFromAlt1.put_4fpzoq_k$(config.get_state_iypx7s_k$().get_stateNumber_v90a1d_k$(), ensureNotNull(config.get_context_h02k06_k$()));
      if (!(updatedContext === config.get_semanticContext_gd9bz4_k$())) {
        configSet.add_l5m7bi_k$(ATNConfig_init_$Create$_2(config, updatedContext), this.mergeCache_1);
      } else {
        configSet.add_l5m7bi_k$(config, this.mergeCache_1);
      }
    }
    var tmp2_iterator = configs.iterator_jk1svi_k$();
    $l$loop_2: while (tmp2_iterator.hasNext_bitz1p_k$()) {
      var config_0 = tmp2_iterator.next_20eer_k$();
      if (config_0.get_alt_18j9hc_k$() === 1) {
        continue $l$loop_2;
      }
      if (!config_0.get_isPrecedenceFilterSuppressed_50v313_k$()) {
        var context = statesFromAlt1.get_wei43m_k$(config_0.get_state_iypx7s_k$().get_stateNumber_v90a1d_k$());
        if (!(context == null) ? equals(context, config_0.get_context_h02k06_k$()) : false) {
          continue $l$loop_2;
        }
      }
      configSet.add_l5m7bi_k$(config_0, this.mergeCache_1);
    }
    return configSet;
  };
  protoOf(ParserATNSimulator).getReachableTarget_rbdjx9_k$ = function (trans, ttype) {
    var tmp;
    if (trans.matches_isvi11_k$(ttype, 0, this.get_atn_18j9am_k$().get_maxTokenType_gnkz54_k$())) {
      tmp = trans.get_target_juba8q_k$();
    } else {
      tmp = null;
    }
    return tmp;
  };
  protoOf(ParserATNSimulator).getPredsForAmbigAlts_5d4htz_k$ = function (ambigAlts, configs, nalts) {
    // Inline function 'kotlin.arrayOfNulls' call
    var size = nalts + 1 | 0;
    var altToPred = fillArrayVal(Array(size), null);
    var tmp0_iterator = configs.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var c = tmp0_iterator.next_20eer_k$();
      if (ambigAlts.get_c1px32_k$(c.get_alt_18j9hc_k$())) {
        ensureNotNull(altToPred)[c.get_alt_18j9hc_k$()] = Companion_getInstance_25().or_m1rlsz_k$(ensureNotNull(altToPred)[c.get_alt_18j9hc_k$()], c.get_semanticContext_gd9bz4_k$());
      }
    }
    var nPredAlts = 0;
    var inductionVariable = 1;
    if (inductionVariable <= nalts)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (ensureNotNull(altToPred)[i] == null) {
          altToPred[i] = Companion_getInstance_25().get_NONE_wo64xt_k$();
        } else if (!(altToPred[i] === Companion_getInstance_25().get_NONE_wo64xt_k$())) {
          nPredAlts = nPredAlts + 1 | 0;
        }
      }
       while (!(i === nalts));
    if (nPredAlts === 0)
      altToPred = null;
    if (Companion_getInstance_21().debug_1) {
      println('getPredsForAmbigAlts result ' + joinToString(ensureNotNull(altToPred)));
    }
    return altToPred;
  };
  protoOf(ParserATNSimulator).getPredicatePredictions_hto2l9_k$ = function (ambigAlts, altToPred) {
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
        if (!(ambigAlts == null) ? ambigAlts.get_c1px32_k$(i) : false) {
          pairs.add_utx5q5_k$(new PredPrediction(ensureNotNull(pred), i));
        }
        if (!(pred === Companion_getInstance_25().get_NONE_wo64xt_k$()))
          containsPredicate = true;
      }
       while (inductionVariable < last);
    var tmp;
    if (!containsPredicate) {
      tmp = null;
    } else {
      // Inline function 'kotlin.collections.toTypedArray' call
      tmp = copyToArray(pairs);
    }
    return tmp;
  };
  protoOf(ParserATNSimulator).getSynValidOrSemInvalidAltThatFinishedDecisionEntryRule_ibypbc_k$ = function (configs, outerContext) {
    var sets = this.splitAccordingToSemanticValidity_xqbs92_k$(configs, outerContext);
    var semValidConfigs = sets.get_first_irdx8n_k$();
    var semInvalidConfigs = sets.get_second_jf7fjx_k$();
    var alt = this.getAltThatFinishedDecisionEntryRule_580m89_k$(ensureNotNull(semValidConfigs));
    if (!(alt === Companion_getInstance_8().get_INVALID_ALT_NUMBER_idrbu8_k$())) {
      return alt;
    }
    if (ensureNotNull(semInvalidConfigs).get_size_woubt6_k$() > 0) {
      alt = this.getAltThatFinishedDecisionEntryRule_580m89_k$(ensureNotNull(semInvalidConfigs));
      if (!(alt === Companion_getInstance_8().get_INVALID_ALT_NUMBER_idrbu8_k$())) {
        return alt;
      }
    }
    return Companion_getInstance_8().get_INVALID_ALT_NUMBER_idrbu8_k$();
  };
  protoOf(ParserATNSimulator).getAltThatFinishedDecisionEntryRule_580m89_k$ = function (configs) {
    var alts = IntervalSet_init_$Create$_1(new Int32Array([]));
    var tmp0_iterator = configs.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var c = tmp0_iterator.next_20eer_k$();
      var tmp;
      if (c.get_outerContextDepth_i6l2y_k$() > 0) {
        tmp = true;
      } else {
        var tmp_0;
        var tmp_1 = c.get_state_iypx7s_k$();
        if (tmp_1 instanceof RuleStopState) {
          tmp_0 = ensureNotNull(c.get_context_h02k06_k$()).hasEmptyPath_tkyljs_k$();
        } else {
          tmp_0 = false;
        }
        tmp = tmp_0;
      }
      if (tmp) {
        alts.add_c9dakn_k$(c.get_alt_18j9hc_k$());
      }
    }
    return alts.size_23och_k$() === 0 ? Companion_getInstance_8().get_INVALID_ALT_NUMBER_idrbu8_k$() : alts.get_minElement_cmfmc3_k$();
  };
  protoOf(ParserATNSimulator).splitAccordingToSemanticValidity_xqbs92_k$ = function (configs, outerContext) {
    var succeeded = new ATNConfigSet(configs.get_fullCtx_76ubbl_k$());
    var failed = new ATNConfigSet(configs.get_fullCtx_76ubbl_k$());
    var tmp0_iterator = configs.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var c = tmp0_iterator.next_20eer_k$();
      if (!(c.get_semanticContext_gd9bz4_k$() === Companion_getInstance_25().get_NONE_wo64xt_k$())) {
        var predicateEvaluationResult = this.evalSemanticContext_c1dhox_k$(c.get_semanticContext_gd9bz4_k$(), outerContext, c.get_alt_18j9hc_k$(), configs.get_fullCtx_76ubbl_k$());
        if (predicateEvaluationResult) {
          succeeded.add_ce12aw_k$(c);
        } else {
          failed.add_ce12aw_k$(c);
        }
      } else {
        succeeded.add_ce12aw_k$(c);
      }
    }
    return new Pair(succeeded, failed);
  };
  protoOf(ParserATNSimulator).evalSemanticContext_jo6d4r_k$ = function (predPredictions, outerContext, complete) {
    var predictions = BitSet_init_$Create$();
    var inductionVariable = 0;
    var last = predPredictions.length;
    $l$loop_1: while (inductionVariable < last) {
      var pair = predPredictions[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      if (ensureNotNull(pair).get_pred_wosl0q_k$() === Companion_getInstance_25().get_NONE_wo64xt_k$()) {
        predictions.set_3dek9m_k$(ensureNotNull(ensureNotNull(pair).get_alt_18j9hc_k$()));
        if (!complete) {
          break $l$loop_1;
        }
        continue $l$loop_1;
      }
      var fullCtx = false;
      var predicateEvaluationResult = this.evalSemanticContext_c1dhox_k$(ensureNotNull(pair).get_pred_wosl0q_k$(), outerContext, pair.get_alt_18j9hc_k$(), fullCtx);
      if (Companion_getInstance_21().debug_1 ? true : Companion_getInstance_21().dfa_debug_1) {
        println('eval pred ' + pair + '=' + predicateEvaluationResult);
      }
      if (predicateEvaluationResult) {
        if (Companion_getInstance_21().debug_1 ? true : Companion_getInstance_21().dfa_debug_1) {
          outMessage('PREDICT ' + pair.get_alt_18j9hc_k$());
        }
        predictions.set_3dek9m_k$(pair.get_alt_18j9hc_k$());
        if (!complete) {
          break $l$loop_1;
        }
      }
    }
    return predictions;
  };
  protoOf(ParserATNSimulator).evalSemanticContext_c1dhox_k$ = function (pred, parserCallStack, alt, fullCtx) {
    return ensureNotNull(pred).eval_u4ox8x_k$(ensureNotNull(this.parser_1), ensureNotNull(parserCallStack));
  };
  protoOf(ParserATNSimulator).closure_npx88s_k$ = function (config, configs, closureBusy, collectPredicates, fullCtx, treatEofAsEpsilon) {
    var initialDepth = 0;
    this.closureCheckingStopState_mhysr3_k$(config, configs, closureBusy, collectPredicates, fullCtx, initialDepth, treatEofAsEpsilon);
    assert(!fullCtx ? true : !configs.get_dipsIntoOuterContext_wiog7v_k$());
  };
  protoOf(ParserATNSimulator).closureCheckingStopState_mhysr3_k$ = function (config, configs, closureBusy, collectPredicates, fullCtx, depth, treatEofAsEpsilon) {
    if (Companion_getInstance_21().debug_1) {
      println('closure(' + config.toString_fhllcy_k$(this.parser_1, true) + ')');
    }
    var tmp = config.get_state_iypx7s_k$();
    if (tmp instanceof RuleStopState) {
      if (!ensureNotNull(config.get_context_h02k06_k$()).get_isEmpty_zauvru_k$()) {
        var inductionVariable = 0;
        var last = ensureNotNull(config.get_context_h02k06_k$()).size_23och_k$();
        if (inductionVariable < last)
          $l$loop_0: do {
            var i = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            if (ensureNotNull(config.get_context_h02k06_k$()).getReturnState_2b95w3_k$(i) === Companion_getInstance_22().get_EMPTY_RETURN_STATE_opy8sj_k$()) {
              if (fullCtx) {
                configs.add_l5m7bi_k$(ATNConfig_init_$Create$_3(config, config.get_state_iypx7s_k$(), Companion_getInstance_22().get_EMPTY_i8q41w_k$()), this.mergeCache_1);
                continue $l$loop_0;
              } else {
                if (Companion_getInstance_21().debug_1) {
                  println('FALLING off rule ' + this.getRuleName_dcjesb_k$(config.get_state_iypx7s_k$().get_ruleIndex_qf7nn7_k$()));
                }
                this.closure__pxqj0l_k$(config, configs, closureBusy, collectPredicates, fullCtx, depth, treatEofAsEpsilon);
              }
              continue $l$loop_0;
            }
            var returnState = this.get_atn_18j9am_k$().get_states_jnf5zf_k$().get_c1px32_k$(ensureNotNull(config.get_context_h02k06_k$()).getReturnState_2b95w3_k$(i));
            var newContext = ensureNotNull(config.get_context_h02k06_k$()).getParent_atvid4_k$(i);
            var c = ATNConfig_init_$Create$_0(ensureNotNull(returnState), config.get_alt_18j9hc_k$(), ensureNotNull(newContext), ensureNotNull(config.get_semanticContext_gd9bz4_k$()));
            c.set_reachesIntoOuterContext_ibfads_k$(config.get_reachesIntoOuterContext_d4j9vw_k$());
            assert(depth > IntCompanionObject_getInstance().get_MIN_VALUE_7nmmor_k$());
            this.closureCheckingStopState_mhysr3_k$(c, configs, closureBusy, collectPredicates, fullCtx, depth - 1 | 0, treatEofAsEpsilon);
          }
           while (inductionVariable < last);
        return Unit_getInstance();
      } else if (fullCtx) {
        configs.add_l5m7bi_k$(config, this.mergeCache_1);
        return Unit_getInstance();
      } else {
        if (Companion_getInstance_21().debug_1) {
          println('FALLING off rule ' + this.getRuleName_dcjesb_k$(config.get_state_iypx7s_k$().get_ruleIndex_qf7nn7_k$()));
        }
      }
    }
    this.closure__pxqj0l_k$(config, configs, closureBusy, collectPredicates, fullCtx, depth, treatEofAsEpsilon);
  };
  protoOf(ParserATNSimulator).closure__pxqj0l_k$ = function (config, configs, closureBusy, collectPredicates, fullCtx, depth, treatEofAsEpsilon) {
    var p = config.get_state_iypx7s_k$();
    if (!p.onlyHasEpsilonTransitions_stt9um_k$()) {
      configs.add_l5m7bi_k$(config, this.mergeCache_1);
    }
    var inductionVariable = 0;
    var last = p.get_numberOfTransitions_a2gh11_k$();
    if (inductionVariable < last)
      $l$loop_1: do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (i === 0 ? this.canDropLoopEntryEdgeInLeftRecursiveRule_8tnt1p_k$(config) : false)
          continue $l$loop_1;
        var t = p.transition_nw6t99_k$(i);
        var tmp;
        if (!(t instanceof ActionTransition)) {
          tmp = collectPredicates;
        } else {
          tmp = false;
        }
        var continueCollecting = tmp;
        var c = this.getEpsilonTarget_d93h33_k$(config, t, continueCollecting, depth === 0, fullCtx, treatEofAsEpsilon);
        if (!(c == null)) {
          var newDepth = depth;
          var tmp_0 = config.get_state_iypx7s_k$();
          if (tmp_0 instanceof RuleStopState) {
            assert(!fullCtx);
            if (!(this._dfa_1 == null) ? ensureNotNull(this._dfa_1).get_isPrecedenceDfa_hksa4e_k$() : false) {
              var outermostPrecedenceReturn = (t instanceof EpsilonTransition ? t : THROW_CCE()).outermostPrecedenceReturn_dx5dvc_k$();
              if (outermostPrecedenceReturn === ensureNotNull(this._dfa_1).get_atnStartState_5zitwf_k$().get_ruleIndex_qf7nn7_k$()) {
                ensureNotNull(c).set_isPrecedenceFilterSuppressed_hjy12g_k$(true);
              }
            }
            var tmp1_this = ensureNotNull(c);
            var tmp2 = tmp1_this.get_reachesIntoOuterContext_d4j9vw_k$();
            tmp1_this.set_reachesIntoOuterContext_ibfads_k$(tmp2 + 1 | 0);
            if (!closureBusy.add_utx5q5_k$(c)) {
              continue $l$loop_1;
            }
            configs.set_dipsIntoOuterContext_3420m4_k$(true);
            assert(newDepth > IntCompanionObject_getInstance().get_MIN_VALUE_7nmmor_k$());
            newDepth = newDepth - 1 | 0;
            if (Companion_getInstance_21().debug_1) {
              println('dips into outer ctx: ' + ensureNotNull(c));
            }
          } else {
            if (!t.get_isEpsilon_qgv0zt_k$() ? !closureBusy.add_utx5q5_k$(c) : false) {
              continue $l$loop_1;
            }
            if (t instanceof RuleTransition) {
              if (newDepth >= 0) {
                newDepth = newDepth + 1 | 0;
              }
            }
          }
          this.closureCheckingStopState_mhysr3_k$(c, configs, closureBusy, continueCollecting, fullCtx, newDepth, treatEofAsEpsilon);
        }
      }
       while (inductionVariable < last);
  };
  protoOf(ParserATNSimulator).canDropLoopEntryEdgeInLeftRecursiveRule_8tnt1p_k$ = function (config) {
    var p = config.get_state_iypx7s_k$();
    var tmp;
    var tmp_0;
    var tmp_1;
    if (!(p.get_stateType_pzcpby_k$() === Companion_getInstance_14().get_STAR_LOOP_ENTRY_sp54o5_k$())) {
      tmp_1 = true;
    } else {
      tmp_1 = !(p instanceof StarLoopEntryState ? p : THROW_CCE()).get_isPrecedenceDecision_dcmgbd_k$();
    }
    if (tmp_1) {
      tmp_0 = true;
    } else {
      tmp_0 = ensureNotNull(config.get_context_h02k06_k$()).get_isEmpty_zauvru_k$();
    }
    if (tmp_0) {
      tmp = true;
    } else {
      tmp = ensureNotNull(config.get_context_h02k06_k$()).hasEmptyPath_tkyljs_k$();
    }
    if (tmp) {
      return false;
    }
    var numCtxs = ensureNotNull(config.get_context_h02k06_k$()).size_23och_k$();
    var inductionVariable = 0;
    if (inductionVariable < numCtxs)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var returnState = this.get_atn_18j9am_k$().get_states_jnf5zf_k$().get_c1px32_k$(ensureNotNull(config.get_context_h02k06_k$()).getReturnState_2b95w3_k$(i));
        if (!(ensureNotNull(returnState).get_ruleIndex_qf7nn7_k$() === p.get_ruleIndex_qf7nn7_k$()))
          return false;
      }
       while (inductionVariable < numCtxs);
    var tmp_2 = p.transition_nw6t99_k$(0).get_target_juba8q_k$();
    var decisionStartState = tmp_2 instanceof BlockStartState ? tmp_2 : THROW_CCE();
    var blockEndStateNum = ensureNotNull(decisionStartState.get_endState_3g6vgh_k$()).get_stateNumber_v90a1d_k$();
    var tmp_3 = this.get_atn_18j9am_k$().get_states_jnf5zf_k$().get_c1px32_k$(blockEndStateNum);
    var blockEndState = tmp_3 instanceof BlockEndState ? tmp_3 : THROW_CCE();
    var inductionVariable_0 = 0;
    if (inductionVariable_0 < numCtxs)
      $l$loop_2: do {
        var i_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        var returnStateNumber = ensureNotNull(config.get_context_h02k06_k$()).getReturnState_2b95w3_k$(i_0);
        var returnState_0 = this.get_atn_18j9am_k$().get_states_jnf5zf_k$().get_c1px32_k$(returnStateNumber);
        if (!(ensureNotNull(returnState_0).get_numberOfTransitions_a2gh11_k$() === 1) ? true : !returnState_0.transition_nw6t99_k$(0).get_isEpsilon_qgv0zt_k$()) {
          return false;
        }
        var returnStateTarget = ensureNotNull(returnState_0).transition_nw6t99_k$(0).get_target_juba8q_k$();
        if (returnState_0.get_stateType_pzcpby_k$() === Companion_getInstance_14().get_BLOCK_END_1zbwe8_k$() ? returnStateTarget === p : false) {
          continue $l$loop_2;
        }
        if (returnState_0 === blockEndState) {
          continue $l$loop_2;
        }
        if (returnStateTarget === blockEndState) {
          continue $l$loop_2;
        }
        if (((ensureNotNull(returnStateTarget).get_stateType_pzcpby_k$() === Companion_getInstance_14().get_BLOCK_END_1zbwe8_k$() ? returnStateTarget.get_numberOfTransitions_a2gh11_k$() === 1 : false) ? returnStateTarget.transition_nw6t99_k$(0).get_isEpsilon_qgv0zt_k$() : false) ? returnStateTarget.transition_nw6t99_k$(0).get_target_juba8q_k$() === p : false) {
          continue $l$loop_2;
        }
        return false;
      }
       while (inductionVariable_0 < numCtxs);
    return true;
  };
  protoOf(ParserATNSimulator).getRuleName_dcjesb_k$ = function (index) {
    return (!(this.parser_1 == null) ? index >= 0 : false) ? ensureNotNull(ensureNotNull(this.parser_1).get_ruleNames_qcosu5_k$())[index] : '<rule ' + index + '>';
  };
  protoOf(ParserATNSimulator).getEpsilonTarget_d93h33_k$ = function (config, t, collectPredicates, inContext, fullCtx, treatEofAsEpsilon) {
    var tmp0_subject = t.get_serializationType_kzwl9d_k$();
    if (tmp0_subject === Companion_getInstance_27().get_RULE_wo8tad_k$()) {
      return this.ruleTransition_xu99rf_k$(config, t instanceof RuleTransition ? t : THROW_CCE());
    } else if (tmp0_subject === Companion_getInstance_27().get_PRECEDENCE_9id17x_k$()) {
      return this.precedenceTransition_ywu61u_k$(config, t instanceof PrecedencePredicateTransition ? t : THROW_CCE(), collectPredicates, inContext, fullCtx);
    } else if (tmp0_subject === Companion_getInstance_27().get_PREDICATE_wb07am_k$()) {
      return this.predTransition_2zv3xn_k$(config, t instanceof PredicateTransition ? t : THROW_CCE(), collectPredicates, inContext, fullCtx);
    } else if (tmp0_subject === Companion_getInstance_27().get_ACTION_4s122p_k$()) {
      return this.actionTransition_9z9bdr_k$(config, t instanceof ActionTransition ? t : THROW_CCE());
    } else if (tmp0_subject === Companion_getInstance_27().get_EPSILON_c96d27_k$())
      return ATNConfig_init_$Create$_3(config, ensureNotNull(t.get_target_juba8q_k$()));
    else if ((tmp0_subject === Companion_getInstance_27().get_ATOM_wnxxui_k$() ? true : tmp0_subject === Companion_getInstance_27().get_RANGE_ifnq44_k$()) ? true : tmp0_subject === Companion_getInstance_27().get_SET_18jktj_k$()) {
      if (treatEofAsEpsilon) {
        if (t.matches_isvi11_k$(Companion_getInstance_6().get_EOF_18juz1_k$(), 0, 1)) {
          return ATNConfig_init_$Create$_3(config, ensureNotNull(t.get_target_juba8q_k$()));
        }
      }
      return null;
    } else
      return null;
  };
  protoOf(ParserATNSimulator).actionTransition_9z9bdr_k$ = function (config, t) {
    if (Companion_getInstance_21().debug_1) {
      println('ACTION edge ' + t.get_ruleIndex_qf7nn7_k$() + ':' + t.get_actionIndex_va748d_k$());
    }
    return ATNConfig_init_$Create$_3(config, ensureNotNull(t.get_target_juba8q_k$()));
  };
  protoOf(ParserATNSimulator).precedenceTransition_ywu61u_k$ = function (config, pt, collectPredicates, inContext, fullCtx) {
    if (Companion_getInstance_21().debug_1) {
      println('PRED (collectPredicates=' + collectPredicates + ') ' + pt.get_precedence_hj68vh_k$() + '>=_p' + ', ctx dependent=true');
      if (!(this.parser_1 == null)) {
        outMessage('context surrounding pred is ' + ensureNotNull(this.parser_1).get_ruleInvocationStack_rq3771_k$());
      }
    }
    var c = null;
    if (collectPredicates ? inContext : false) {
      if (fullCtx) {
        var currentPosition = ensureNotNull(this._input_1).index_1nqriq_k$();
        ensureNotNull(this._input_1).seek_a2e6fk_k$(this._startIndex_1);
        var predSucceeds = this.evalSemanticContext_c1dhox_k$(pt.get_predicate_ds2702_k$(), this._outerContext_1, config.get_alt_18j9hc_k$(), fullCtx);
        ensureNotNull(this._input_1).seek_a2e6fk_k$(currentPosition);
        if (predSucceeds) {
          c = ATNConfig_init_$Create$_3(config, ensureNotNull(pt.get_target_juba8q_k$()));
        }
      } else {
        var newSemCtx = Companion_getInstance_25().and_2qet5j_k$(config.get_semanticContext_gd9bz4_k$(), pt.get_predicate_ds2702_k$());
        c = ATNConfig_init_$Create$_1(config, ensureNotNull(pt.get_target_juba8q_k$()), ensureNotNull(newSemCtx));
      }
    } else {
      c = ATNConfig_init_$Create$_3(config, ensureNotNull(pt.get_target_juba8q_k$()));
    }
    if (Companion_getInstance_21().debug_1) {
      println('config from pred transition=' + ensureNotNull(c));
    }
    return c;
  };
  protoOf(ParserATNSimulator).predTransition_2zv3xn_k$ = function (config, pt, collectPredicates, inContext, fullCtx) {
    if (Companion_getInstance_21().debug_1) {
      println('PRED (collectPredicates=' + collectPredicates + ') ' + pt.get_ruleIndex_qf7nn7_k$() + ':' + pt.get_predIndex_e9gj94_k$() + ', ctx dependent=' + pt.get_isCtxDependent_w62lez_k$());
      if (!(this.parser_1 == null)) {
        outMessage('context surrounding pred is ' + ensureNotNull(this.parser_1).get_ruleInvocationStack_rq3771_k$());
      }
    }
    var c = null;
    if (collectPredicates ? !pt.get_isCtxDependent_w62lez_k$() ? true : pt.get_isCtxDependent_w62lez_k$() ? inContext : false : false) {
      if (fullCtx) {
        var currentPosition = ensureNotNull(this._input_1).index_1nqriq_k$();
        ensureNotNull(this._input_1).seek_a2e6fk_k$(this._startIndex_1);
        var predSucceeds = this.evalSemanticContext_c1dhox_k$(pt.get_predicate_ds2702_k$(), this._outerContext_1, config.get_alt_18j9hc_k$(), fullCtx);
        ensureNotNull(this._input_1).seek_a2e6fk_k$(currentPosition);
        if (predSucceeds) {
          c = ATNConfig_init_$Create$_3(config, ensureNotNull(pt.get_target_juba8q_k$()));
        }
      } else {
        var newSemCtx = Companion_getInstance_25().and_2qet5j_k$(config.get_semanticContext_gd9bz4_k$(), pt.get_predicate_ds2702_k$());
        c = ATNConfig_init_$Create$_1(config, ensureNotNull(pt.get_target_juba8q_k$()), ensureNotNull(newSemCtx));
      }
    } else {
      c = ATNConfig_init_$Create$_3(config, ensureNotNull(pt.get_target_juba8q_k$()));
    }
    if (Companion_getInstance_21().debug_1) {
      println('config from pred transition=' + ensureNotNull(c));
    }
    return c;
  };
  protoOf(ParserATNSimulator).ruleTransition_xu99rf_k$ = function (config, t) {
    if (Companion_getInstance_21().debug_1) {
      println('CALL rule ' + this.getRuleName_dcjesb_k$(ensureNotNull(t.get_target_juba8q_k$()).get_ruleIndex_qf7nn7_k$()) + ', ctx=' + config.get_context_h02k06_k$());
    }
    var returnState = t.get_followState_uwxfd5_k$();
    var newContext = Companion_getInstance_26().create_i5ph5t_k$(config.get_context_h02k06_k$(), returnState.get_stateNumber_v90a1d_k$());
    return ATNConfig_init_$Create$_3(config, ensureNotNull(t.get_target_juba8q_k$()), newContext);
  };
  protoOf(ParserATNSimulator).getConflictingAlts_ze13ua_k$ = function (configs) {
    var altsets = Companion_getInstance_24().getConflictingAltSubsets_wzna9x_k$(ensureNotNull(configs));
    return Companion_getInstance_24().getAlts_fa3de5_k$(altsets);
  };
  protoOf(ParserATNSimulator).getConflictingAltsOrUniqueAlt_kvggj8_k$ = function (configs) {
    var conflictingAlts;
    if (!(configs.get_uniqueAlt_dzo29_k$() === Companion_getInstance_8().get_INVALID_ALT_NUMBER_idrbu8_k$())) {
      conflictingAlts = BitSet_init_$Create$();
      conflictingAlts.set_3dek9m_k$(configs.get_uniqueAlt_dzo29_k$());
    } else {
      conflictingAlts = configs.get_conflictingAlts_nrn7db_k$();
    }
    return ensureNotNull(conflictingAlts);
  };
  protoOf(ParserATNSimulator).getTokenName_vqtp2i_k$ = function (t) {
    if (t === Companion_getInstance_6().get_EOF_18juz1_k$()) {
      return 'EOF';
    }
    var vocabulary = !(this.parser_1 == null) ? ensureNotNull(this.parser_1).get_vocabulary_zijn9t_k$() : Companion_getInstance_7().get_EMPTY_VOCABULARY_bk59fj_k$();
    var displayName = vocabulary.getDisplayName_ut2bi7_k$(t);
    var tmp;
    if (displayName === t.toString()) {
      tmp = displayName;
    } else {
      tmp = displayName + '<' + t + '>';
    }
    return tmp;
  };
  protoOf(ParserATNSimulator).getLookaheadName_g9gt8u_k$ = function (input) {
    return this.getTokenName_vqtp2i_k$(input.LA_figb43_k$(1));
  };
  protoOf(ParserATNSimulator).dumpDeadEndConfigs_7r0n3z_k$ = function (nvae) {
    errMessage('dead end configs: ');
    var tmp0_iterator = ensureNotNull(nvae.get_deadEndConfigs_re3azh_k$()).iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var c = tmp0_iterator.next_20eer_k$();
      var trans = 'no edges';
      if (c.get_state_iypx7s_k$().get_numberOfTransitions_a2gh11_k$() > 0) {
        var t = c.get_state_iypx7s_k$().transition_nw6t99_k$(0);
        if (t instanceof AtomTransition) {
          var at = t instanceof AtomTransition ? t : THROW_CCE();
          trans = 'Atom ' + this.getTokenName_vqtp2i_k$(at.get_label_iuj8p7_k$());
        } else {
          if (t instanceof SetTransition) {
            var st = t instanceof SetTransition ? t : THROW_CCE();
            var not = st instanceof NotSetTransition;
            trans = (not ? '~' : '') + 'Set ' + st.get_set_18iwav_k$().toString();
          }
        }
      }
      errMessage(c.toString_fhllcy_k$(this.parser_1, true) + ':' + trans);
    }
  };
  protoOf(ParserATNSimulator).noViableAlt_hybjp1_k$ = function (input, outerContext, configs, startIndex) {
    return new NoViableAltException(ensureNotNull(this.parser_1), input, input.get_c1px32_k$(startIndex), input.LT_lwif2o_k$(1), configs, outerContext);
  };
  protoOf(ParserATNSimulator).addDFAEdge_j4ss5o_k$ = function (dfa, from, t, to) {
    var to_0 = to;
    if (Companion_getInstance_21().debug_1) {
      println('EDGE ' + from + ' -> ' + to_0 + ' upon ' + this.getTokenName_vqtp2i_k$(t));
    }
    if (to_0 == null) {
      return null;
    }
    to_0 = this.addDFAState_jayew0_k$(dfa, to_0);
    if ((from == null ? true : t < -1) ? true : t > this.get_atn_18j9am_k$().get_maxTokenType_gnkz54_k$()) {
      return to_0;
    }
    // Inline function 'com.strumenta.kotlinmultiplatform.synchronized' call
    if (ensureNotNull(from).get_edges_iqqp7x_k$() == null) {
      var tmp = ensureNotNull(from);
      // Inline function 'kotlin.arrayOfNulls' call
      var size = (this.get_atn_18j9am_k$().get_maxTokenType_gnkz54_k$() + 1 | 0) + 1 | 0;
      var tmp$ret$0 = fillArrayVal(Array(size), null);
      tmp.set_edges_da9xnp_k$(tmp$ret$0);
    }
    ensureNotNull(ensureNotNull(from).get_edges_iqqp7x_k$())[t + 1 | 0] = to_0;
    if (Companion_getInstance_21().debug_1) {
      outMessage('DFA=\n' + dfa.toString_vjubf0_k$(!(this.parser_1 == null) ? ensureNotNull(this.parser_1).get_vocabulary_zijn9t_k$() : Companion_getInstance_7().get_EMPTY_VOCABULARY_bk59fj_k$()));
    }
    return to_0;
  };
  protoOf(ParserATNSimulator).addDFAState_jayew0_k$ = function (dfa, D) {
    if (D === Companion_getInstance_13().get_ERROR_i8tccf_k$()) {
      return D;
    }
    // Inline function 'com.strumenta.kotlinmultiplatform.synchronized' call
    dfa.get_states_jnf5zf_k$();
    var existing = dfa.get_states_jnf5zf_k$().get_wei43m_k$(D);
    if (!(existing == null))
      return existing;
    D.set_stateNumber_ar8wln_k$(dfa.get_states_jnf5zf_k$().get_size_woubt6_k$());
    if (!ensureNotNull(D.get_configs_gztoqw_k$()).get_isReadonly_nejehh_k$()) {
      ensureNotNull(D.get_configs_gztoqw_k$()).optimizeConfigs_n0ckpn_k$(this);
      ensureNotNull(D.get_configs_gztoqw_k$()).set_isReadonly_qjm26s_k$(true);
    }
    dfa.get_states_jnf5zf_k$().put_4fpzoq_k$(D, D);
    if (Companion_getInstance_21().debug_1) {
      println('adding new DFA state: ' + D);
    }
    return D;
  };
  protoOf(ParserATNSimulator).reportAttemptingFullContext_yib5wo_k$ = function (dfa, conflictingAlts, configs, startIndex, stopIndex) {
    if (Companion_getInstance_21().debug_1 ? true : Companion_getInstance_21().retry_debug_1) {
      var interval = Companion_getInstance_31().of_doci3b_k$(startIndex, stopIndex);
      outMessage('reportAttemptingFullContext decision=' + dfa.get_decision_mg4f2z_k$() + ':' + configs + ', input=' + ensureNotNull(ensureNotNull(this.parser_1).get_tokenStream_as3k40_k$()).getText_dijk8r_k$(interval));
    }
    if (!(this.parser_1 == null)) {
      ensureNotNull(this.parser_1).get_errorListenerDispatch_9mxi9f_k$().reportAttemptingFullContext_bulgyh_k$(this.parser_1, dfa, startIndex, stopIndex, conflictingAlts, configs);
    }
  };
  protoOf(ParserATNSimulator).reportContextSensitivity_obvclm_k$ = function (dfa, prediction, configs, startIndex, stopIndex) {
    if (Companion_getInstance_21().debug_1 ? true : Companion_getInstance_21().retry_debug_1) {
      var interval = Companion_getInstance_31().of_doci3b_k$(startIndex, stopIndex);
      outMessage('reportContextSensitivity decision=' + dfa.get_decision_mg4f2z_k$() + ':' + configs + ', input=' + ensureNotNull(ensureNotNull(this.parser_1).get_tokenStream_as3k40_k$()).getText_dijk8r_k$(interval));
    }
    if (!(this.parser_1 == null)) {
      ensureNotNull(this.parser_1).get_errorListenerDispatch_9mxi9f_k$().reportContextSensitivity_r1nc2j_k$(this.parser_1, dfa, startIndex, stopIndex, prediction, configs);
    }
  };
  protoOf(ParserATNSimulator).reportAmbiguity_7y1q5x_k$ = function (dfa, D, startIndex, stopIndex, exact, ambigAlts, configs) {
    if (Companion_getInstance_21().debug_1 ? true : Companion_getInstance_21().retry_debug_1) {
      var interval = Companion_getInstance_31().of_doci3b_k$(startIndex, stopIndex);
      println('reportAmbiguity ' + ambigAlts + ':' + configs + ', input=' + ensureNotNull(ensureNotNull(this.parser_1).get_tokenStream_as3k40_k$()).getText_dijk8r_k$(interval));
    }
    if (!(this.parser_1 == null)) {
      ensureNotNull(this.parser_1).get_errorListenerDispatch_9mxi9f_k$().reportAmbiguity_1h0sqe_k$(this.parser_1, dfa, startIndex, stopIndex, exact, ambigAlts, configs);
    }
  };
  function PlusBlockStartState() {
    BlockStartState.call(this);
    this.loopBackState_1 = null;
  }
  protoOf(PlusBlockStartState).set_loopBackState_p9qxpo_k$ = function (_set____db54di) {
    this.loopBackState_1 = _set____db54di;
  };
  protoOf(PlusBlockStartState).get_loopBackState_ape3y5_k$ = function () {
    return this.loopBackState_1;
  };
  protoOf(PlusBlockStartState).get_stateType_pzcpby_k$ = function () {
    return Companion_getInstance_14().get_PLUS_BLOCK_START_m3p2ek_k$();
  };
  function PlusLoopbackState() {
    DecisionState.call(this);
  }
  protoOf(PlusLoopbackState).get_stateType_pzcpby_k$ = function () {
    return Companion_getInstance_14().get_PLUS_LOOP_BACK_kykime_k$();
  };
  function PrecedencePredicateTransition(target, precedence) {
    AbstractPredicateTransition.call(this, target);
    this.precedence_1 = precedence;
  }
  protoOf(PrecedencePredicateTransition).get_precedence_hj68vh_k$ = function () {
    return this.precedence_1;
  };
  protoOf(PrecedencePredicateTransition).get_serializationType_kzwl9d_k$ = function () {
    return Companion_getInstance_27().get_PRECEDENCE_9id17x_k$();
  };
  protoOf(PrecedencePredicateTransition).get_isEpsilon_qgv0zt_k$ = function () {
    return true;
  };
  protoOf(PrecedencePredicateTransition).get_predicate_ds2702_k$ = function () {
    return new PrecedencePredicate(this.precedence_1);
  };
  protoOf(PrecedencePredicateTransition).matches_isvi11_k$ = function (symbol, minVocabSymbol, maxVocabSymbol) {
    return false;
  };
  protoOf(PrecedencePredicateTransition).toString = function () {
    return '' + this.precedence_1 + ' >= _p';
  };
  function PredicateEvalInfo(decision, input, startIndex, stopIndex, semctx, evalResult, predictedAlt, fullCtx) {
    DecisionEventInfo.call(this, decision, new ATNConfigSet(), input, startIndex, stopIndex, fullCtx);
    this.semctx_1 = semctx;
    this.evalResult_1 = evalResult;
    this.predictedAlt_1 = predictedAlt;
  }
  protoOf(PredicateEvalInfo).get_semctx_jfdkol_k$ = function () {
    return this.semctx_1;
  };
  protoOf(PredicateEvalInfo).get_evalResult_mhhx9a_k$ = function () {
    return this.evalResult_1;
  };
  protoOf(PredicateEvalInfo).get_predictedAlt_7ug76u_k$ = function () {
    return this.predictedAlt_1;
  };
  function PredicateTransition(target, ruleIndex, predIndex, isCtxDependent) {
    AbstractPredicateTransition.call(this, target);
    this.ruleIndex_1 = ruleIndex;
    this.predIndex_1 = predIndex;
    this.isCtxDependent_1 = isCtxDependent;
  }
  protoOf(PredicateTransition).get_ruleIndex_qf7nn7_k$ = function () {
    return this.ruleIndex_1;
  };
  protoOf(PredicateTransition).get_predIndex_e9gj94_k$ = function () {
    return this.predIndex_1;
  };
  protoOf(PredicateTransition).get_isCtxDependent_w62lez_k$ = function () {
    return this.isCtxDependent_1;
  };
  protoOf(PredicateTransition).get_serializationType_kzwl9d_k$ = function () {
    return Companion_getInstance_27().get_PREDICATE_wb07am_k$();
  };
  protoOf(PredicateTransition).get_isEpsilon_qgv0zt_k$ = function () {
    return true;
  };
  protoOf(PredicateTransition).get_predicate_ds2702_k$ = function () {
    return Predicate_init_$Create$_0(this.ruleIndex_1, this.predIndex_1, this.isCtxDependent_1);
  };
  protoOf(PredicateTransition).matches_isvi11_k$ = function (symbol, minVocabSymbol, maxVocabSymbol) {
    return false;
  };
  protoOf(PredicateTransition).toString = function () {
    return 'pred_' + this.ruleIndex_1 + ':' + this.predIndex_1;
  };
  function _get_INITIAL_HASH__5ohjvi($this) {
    return $this.INITIAL_HASH_1;
  }
  function Companion_21() {
    Companion_instance_21 = this;
    this.EMPTY_1 = new EmptyPredictionContext();
    this.EMPTY_RETURN_STATE_1 = 2147483647;
    this.INITIAL_HASH_1 = 1;
  }
  protoOf(Companion_21).get_EMPTY_i8q41w_k$ = function () {
    return this.EMPTY_1;
  };
  protoOf(Companion_21).get_EMPTY_RETURN_STATE_opy8sj_k$ = function () {
    return this.EMPTY_RETURN_STATE_1;
  };
  protoOf(Companion_21).fromRuleContext_nzvmt0_k$ = function (atn, outerContext) {
    var outerContext1 = outerContext == null ? get_EMPTY_RULECTX() : outerContext;
    if (outerContext1.readParent_9zdz4w_k$() == null ? true : outerContext1 === get_EMPTY_RULECTX()) {
      return this.EMPTY_1;
    }
    var parent = this.fromRuleContext_nzvmt0_k$(atn, outerContext1.readParent_9zdz4w_k$());
    var state = atn.get_states_jnf5zf_k$().get_c1px32_k$(outerContext1.get_invokingState_mn8pn1_k$());
    var tmp = ensureNotNull(state).transition_nw6t99_k$(0);
    var transition = tmp instanceof RuleTransition ? tmp : THROW_CCE();
    return Companion_getInstance_26().create_i5ph5t_k$(parent, transition.get_followState_uwxfd5_k$().get_stateNumber_v90a1d_k$());
  };
  protoOf(Companion_21).calculateEmptyHashCode_ieobb2_k$ = function () {
    var hash = MurmurHash_getInstance().initialize_vf4y0_k$(this.INITIAL_HASH_1);
    hash = MurmurHash_getInstance().finish_sqfsk3_k$(hash, 0);
    return hash;
  };
  protoOf(Companion_21).calculateHashCode_8m436l_k$ = function (parent, returnState) {
    var hash = MurmurHash_getInstance().initialize_vf4y0_k$(this.INITIAL_HASH_1);
    hash = MurmurHash_getInstance().update_66jqwg_k$(hash, parent);
    hash = MurmurHash_getInstance().update_65sxl5_k$(hash, returnState);
    hash = MurmurHash_getInstance().finish_sqfsk3_k$(hash, 2);
    return hash;
  };
  protoOf(Companion_21).calculateHashCode_bixnxz_k$ = function (parents, returnStates) {
    var hash = MurmurHash_getInstance().initialize_vf4y0_k$(this.INITIAL_HASH_1);
    var inductionVariable = 0;
    var last = parents.length;
    while (inductionVariable < last) {
      var parent = parents[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      hash = MurmurHash_getInstance().update_66jqwg_k$(hash, parent);
    }
    var inductionVariable_0 = 0;
    var last_0 = returnStates.length;
    while (inductionVariable_0 < last_0) {
      var returnState = returnStates[inductionVariable_0];
      inductionVariable_0 = inductionVariable_0 + 1 | 0;
      hash = MurmurHash_getInstance().update_65sxl5_k$(hash, returnState);
    }
    hash = MurmurHash_getInstance().finish_sqfsk3_k$(hash, imul(2, parents.length));
    return hash;
  };
  protoOf(Companion_21).merge_fkuyv_k$ = function (a, b, rootIsWildcard, mergeCache) {
    var a1 = a;
    var b1 = b;
    assert(!(a1 == null) ? !(b1 == null) : false);
    if (a1 === b1 ? true : equals(a1, b1))
      return ensureNotNull(a1);
    var tmp;
    if (a1 instanceof SingletonPredictionContext) {
      tmp = b1 instanceof SingletonPredictionContext;
    } else {
      tmp = false;
    }
    if (tmp) {
      var tmp_0 = a1 instanceof SingletonPredictionContext ? a1 : THROW_CCE();
      return this.mergeSingletons_nx2oov_k$(tmp_0, b1 instanceof SingletonPredictionContext ? b1 : THROW_CCE(), rootIsWildcard, mergeCache);
    }
    if (rootIsWildcard) {
      if (a1 instanceof EmptyPredictionContext)
        return a1;
      if (b1 instanceof EmptyPredictionContext)
        return b1;
    }
    if (a1 instanceof SingletonPredictionContext) {
      a1 = ArrayPredictionContext_init_$Create$(a1);
    }
    if (b1 instanceof SingletonPredictionContext) {
      b1 = ArrayPredictionContext_init_$Create$(ensureNotNull((b1 == null ? true : b1 instanceof SingletonPredictionContext) ? b1 : THROW_CCE()));
    }
    var tmp_1 = a1 instanceof ArrayPredictionContext ? a1 : THROW_CCE();
    return this.mergeArrays_f83pot_k$(tmp_1, b1 instanceof ArrayPredictionContext ? b1 : THROW_CCE(), rootIsWildcard, mergeCache);
  };
  protoOf(Companion_21).mergeSingletons_nx2oov_k$ = function (a, b, rootIsWildcard, mergeCache) {
    if (!(mergeCache == null)) {
      var previous = mergeCache.get_djz8cp_k$(a, b);
      if (!(previous == null))
        return previous;
      previous = mergeCache.get_djz8cp_k$(b, a);
      if (!(previous == null))
        return previous;
    }
    var rootMerge = this.mergeRoot_1o8jyt_k$(a, b, rootIsWildcard);
    if (!(rootMerge == null)) {
      if (mergeCache == null)
        null;
      else
        mergeCache.put_qhr7du_k$(a, b, rootMerge);
      return rootMerge;
    }
    if (a.get_returnState_ava1pk_k$() === b.get_returnState_ava1pk_k$()) {
      var parent = this.merge_fkuyv_k$(a.get_parent_hy4reb_k$(), b.get_parent_hy4reb_k$(), rootIsWildcard, mergeCache);
      if (parent === a.get_parent_hy4reb_k$())
        return a;
      if (parent === b.get_parent_hy4reb_k$())
        return b;
      var c = Companion_getInstance_26().create_i5ph5t_k$(parent, a.get_returnState_ava1pk_k$());
      if (mergeCache == null)
        null;
      else
        mergeCache.put_qhr7du_k$(a, b, c);
      return c;
    } else {
      var singleParent = null;
      if (a === b ? true : !(a.get_parent_hy4reb_k$() == null) ? equals(a.get_parent_hy4reb_k$(), b.get_parent_hy4reb_k$()) : false) {
        singleParent = a.get_parent_hy4reb_k$();
      }
      if (!(singleParent == null)) {
        // Inline function 'kotlin.intArrayOf' call
        var payloads = new Int32Array([a.get_returnState_ava1pk_k$(), b.get_returnState_ava1pk_k$()]);
        if (a.get_returnState_ava1pk_k$() > b.get_returnState_ava1pk_k$()) {
          payloads[0] = b.get_returnState_ava1pk_k$();
          payloads[1] = a.get_returnState_ava1pk_k$();
        }
        // Inline function 'kotlin.arrayOf' call
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        var parents = [singleParent, singleParent];
        var a_ = new ArrayPredictionContext(ensureNotNull(parents), payloads);
        if (!(mergeCache == null)) {
          ensureNotNull(mergeCache).put_qhr7du_k$(a, b, a_);
        }
        return a_;
      }
      // Inline function 'kotlin.intArrayOf' call
      var payloads_0 = new Int32Array([a.get_returnState_ava1pk_k$(), b.get_returnState_ava1pk_k$()]);
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var parents_0 = [a.get_parent_hy4reb_k$(), b.get_parent_hy4reb_k$()];
      if (a.get_returnState_ava1pk_k$() > b.get_returnState_ava1pk_k$()) {
        payloads_0[0] = b.get_returnState_ava1pk_k$();
        payloads_0[1] = a.get_returnState_ava1pk_k$();
        // Inline function 'kotlin.arrayOf' call
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        parents_0 = [b.get_parent_hy4reb_k$(), a.get_parent_hy4reb_k$()];
      }
      var a__0 = new ArrayPredictionContext(parents_0, payloads_0);
      if (!(mergeCache == null)) {
        ensureNotNull(mergeCache).put_qhr7du_k$(a, b, a__0);
      }
      return a__0;
    }
  };
  protoOf(Companion_21).mergeRoot_1o8jyt_k$ = function (a, b, rootIsWildcard) {
    if (rootIsWildcard) {
      if (a === this.EMPTY_1)
        return this.EMPTY_1;
      if (b === this.EMPTY_1)
        return this.EMPTY_1;
    } else {
      if (a === this.EMPTY_1 ? b === this.EMPTY_1 : false)
        return this.EMPTY_1;
      if (a === this.EMPTY_1) {
        // Inline function 'kotlin.intArrayOf' call
        var payloads = new Int32Array([b.get_returnState_ava1pk_k$(), this.EMPTY_RETURN_STATE_1]);
        // Inline function 'kotlin.arrayOf' call
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        var parents = [b.get_parent_hy4reb_k$(), null];
        return new ArrayPredictionContext(parents, payloads);
      }
      if (b === this.EMPTY_1) {
        // Inline function 'kotlin.intArrayOf' call
        var payloads_0 = new Int32Array([a.get_returnState_ava1pk_k$(), this.EMPTY_RETURN_STATE_1]);
        // Inline function 'kotlin.arrayOf' call
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        var parents_0 = [a.get_parent_hy4reb_k$(), null];
        return new ArrayPredictionContext(parents_0, payloads_0);
      }
    }
    return null;
  };
  protoOf(Companion_21).mergeArrays_f83pot_k$ = function (a, b, rootIsWildcard, mergeCache) {
    if (!(mergeCache == null)) {
      var previous = ensureNotNull(mergeCache).get_djz8cp_k$(a, b);
      if (!(previous == null))
        return previous;
      previous = ensureNotNull(mergeCache).get_djz8cp_k$(b, a);
      if (!(previous == null))
        return previous;
    }
    var i = 0;
    var j = 0;
    var k = 0;
    var mergedReturnStates = new Int32Array(ensureNotNull(a.get_returnStates_i7wsyj_k$()).length + ensureNotNull(b.get_returnStates_i7wsyj_k$()).length | 0);
    // Inline function 'kotlin.arrayOfNulls' call
    var size = ensureNotNull(a.get_returnStates_i7wsyj_k$()).length + b.get_returnStates_i7wsyj_k$().length | 0;
    var mergedParents = fillArrayVal(Array(size), null);
    while (i < ensureNotNull(a.get_returnStates_i7wsyj_k$()).length ? j < ensureNotNull(b.get_returnStates_i7wsyj_k$()).length : false) {
      var a_parent = ensureNotNull(a.get_parents_busue8_k$())[i];
      var b_parent = ensureNotNull(b.get_parents_busue8_k$())[j];
      if (a.get_returnStates_i7wsyj_k$()[i] === ensureNotNull(b.get_returnStates_i7wsyj_k$())[j]) {
        var payload = a.get_returnStates_i7wsyj_k$()[i];
        var both = (payload === this.EMPTY_RETURN_STATE_1 ? a_parent == null : false) ? b_parent == null : false;
        var ax_ax = (!(a_parent == null) ? !(b_parent == null) : false) ? equals(a_parent, b_parent) : false;
        if (both ? true : ax_ax) {
          mergedParents[k] = a_parent;
          mergedReturnStates[k] = payload;
        } else {
          var mergedParent = this.merge_fkuyv_k$(a_parent, b_parent, rootIsWildcard, mergeCache);
          mergedParents[k] = mergedParent;
          mergedReturnStates[k] = payload;
        }
        i = i + 1 | 0;
        j = j + 1 | 0;
      } else if (a.get_returnStates_i7wsyj_k$()[i] < b.get_returnStates_i7wsyj_k$()[j]) {
        mergedParents[k] = a_parent;
        mergedReturnStates[k] = a.get_returnStates_i7wsyj_k$()[i];
        i = i + 1 | 0;
      } else {
        mergedParents[k] = b_parent;
        mergedReturnStates[k] = b.get_returnStates_i7wsyj_k$()[j];
        j = j + 1 | 0;
      }
      k = k + 1 | 0;
    }
    if (i < a.get_returnStates_i7wsyj_k$().length) {
      var inductionVariable = i;
      var last = a.get_returnStates_i7wsyj_k$().length;
      if (inductionVariable < last)
        do {
          var p = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          mergedParents[k] = ensureNotNull(a.get_parents_busue8_k$())[p];
          mergedReturnStates[k] = a.get_returnStates_i7wsyj_k$()[p];
          k = k + 1 | 0;
        }
         while (inductionVariable < last);
    } else {
      var inductionVariable_0 = j;
      var last_0 = b.get_returnStates_i7wsyj_k$().length;
      if (inductionVariable_0 < last_0)
        do {
          var p_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          mergedParents[k] = ensureNotNull(b.get_parents_busue8_k$())[p_0];
          mergedReturnStates[k] = b.get_returnStates_i7wsyj_k$()[p_0];
          k = k + 1 | 0;
        }
         while (inductionVariable_0 < last_0);
    }
    if (k < mergedParents.length) {
      if (k === 1) {
        var a_ = Companion_getInstance_26().create_i5ph5t_k$(mergedParents[0], mergedReturnStates[0]);
        if (mergeCache == null)
          null;
        else
          mergeCache.put_qhr7du_k$(a, b, a_);
        return a_;
      }
      mergedParents = copyOf(mergedParents, k);
      mergedReturnStates = copyOf_1(mergedReturnStates, k);
    }
    var M = new ArrayPredictionContext(mergedParents, mergedReturnStates);
    if (M.equals(a)) {
      if (mergeCache == null)
        null;
      else
        mergeCache.put_qhr7du_k$(a, b, a);
      return a;
    }
    if (M.equals(b)) {
      if (mergeCache == null)
        null;
      else
        mergeCache.put_qhr7du_k$(a, b, b);
      return b;
    }
    // Inline function 'kotlin.collections.toTypedArray' call
    var this_0 = filterNotNull(mergedParents);
    var tmp$ret$1 = copyToArray(this_0);
    this.combineCommonParents_7xy40l_k$(tmp$ret$1);
    if (mergeCache == null)
      null;
    else
      mergeCache.put_qhr7du_k$(a, b, M);
    return M;
  };
  protoOf(Companion_21).combineCommonParents_7xy40l_k$ = function (parents) {
    var uniqueParents = HashMap_init_$Create$();
    var inductionVariable = 0;
    var last = parents.length - 1 | 0;
    if (inductionVariable <= last)
      do {
        var p = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var parent = parents[p];
        if (!uniqueParents.containsKey_aw81wo_k$(parent)) {
          // Inline function 'kotlin.collections.set' call
          uniqueParents.put_4fpzoq_k$(parent, parent);
        }
      }
       while (inductionVariable <= last);
    var inductionVariable_0 = 0;
    var last_0 = parents.length - 1 | 0;
    if (inductionVariable_0 <= last_0)
      do {
        var p_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        parents[p_0] = ensureNotNull(uniqueParents.get_wei43m_k$(parents[p_0]));
      }
       while (inductionVariable_0 <= last_0);
  };
  protoOf(Companion_21).getCachedContext_gp1kj5_k$ = function (context, contextCache, visited) {
    if (context.get_isEmpty_zauvru_k$()) {
      return context;
    }
    var existing = visited.get_wei43m_k$(context);
    if (!(existing == null)) {
      return existing;
    }
    existing = contextCache.get_tx3xu2_k$(context);
    if (!(existing == null)) {
      visited.put_4fpzoq_k$(context, existing);
      return existing;
    }
    var changed = false;
    // Inline function 'kotlin.arrayOfNulls' call
    var size = context.size_23och_k$();
    var parents = fillArrayVal(Array(size), null);
    var inductionVariable = 0;
    var last = parents.length - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var parent = this.getCachedContext_gp1kj5_k$(ensureNotNull(context.getParent_atvid4_k$(i)), contextCache, visited);
        if (changed ? true : !(parent === context.getParent_atvid4_k$(i))) {
          if (!changed) {
            // Inline function 'kotlin.arrayOfNulls' call
            var size_0 = context.size_23och_k$();
            parents = fillArrayVal(Array(size_0), null);
            var inductionVariable_0 = 0;
            var last_0 = context.size_23och_k$();
            if (inductionVariable_0 < last_0)
              do {
                var j = inductionVariable_0;
                inductionVariable_0 = inductionVariable_0 + 1 | 0;
                parents[j] = context.getParent_atvid4_k$(j);
              }
               while (inductionVariable_0 < last_0);
            changed = true;
          }
          parents[i] = parent;
        }
      }
       while (inductionVariable <= last);
    if (!changed) {
      contextCache.add_y3ci51_k$(context);
      visited.put_4fpzoq_k$(context, context);
      return context;
    }
    var updated;
    if (parents.length === 0) {
      updated = this.EMPTY_1;
    } else if (parents.length === 1) {
      updated = Companion_getInstance_26().create_i5ph5t_k$(parents[0], context.getReturnState_2b95w3_k$(0));
    } else {
      var arrayPredictionContext = context instanceof ArrayPredictionContext ? context : THROW_CCE();
      updated = new ArrayPredictionContext(parents, arrayPredictionContext.get_returnStates_i7wsyj_k$());
    }
    contextCache.add_y3ci51_k$(updated);
    visited.put_4fpzoq_k$(updated, updated);
    visited.put_4fpzoq_k$(context, updated);
    return updated;
  };
  protoOf(Companion_21).getAllContextNodes_95kvwh_k$ = function (context) {
    var nodes = ArrayList_init_$Create$_0();
    var visited = new IdentityHashMap();
    this.getAllContextNodes__uwt9tc_k$(context, nodes, visited);
    return nodes;
  };
  protoOf(Companion_21).getAllContextNodes__uwt9tc_k$ = function (context, nodes, visited) {
    if (context == null ? true : visited.containsKey_aw81wo_k$(context))
      return Unit_getInstance();
    visited.put_4fpzoq_k$(context, context);
    nodes.add_utx5q5_k$(context);
    var inductionVariable = 0;
    var last = context.size_23och_k$();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        this.getAllContextNodes__uwt9tc_k$(context.getParent_atvid4_k$(i), nodes, visited);
      }
       while (inductionVariable < last);
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
  protoOf(PredictionContext).get_cachedHashCode_3stqy_k$ = function () {
    return this.cachedHashCode_1;
  };
  protoOf(PredictionContext).get_isEmpty_zauvru_k$ = function () {
    return this === Companion_getInstance_22().EMPTY_1;
  };
  protoOf(PredictionContext).hasEmptyPath_tkyljs_k$ = function () {
    return this.getReturnState_2b95w3_k$(this.size_23och_k$() - 1 | 0) === Companion_getInstance_22().EMPTY_RETURN_STATE_1;
  };
  protoOf(PredictionContext).hashCode = function () {
    return this.cachedHashCode_1;
  };
  protoOf(PredictionContext).toString_iu91pe_k$ = function (recog) {
    return toString(this);
  };
  protoOf(PredictionContext).toStrings_4mbdtt_k$ = function (recognizer, currentState) {
    return this.toStrings_vlhl30_k$(recognizer, Companion_getInstance_22().EMPTY_1, currentState);
  };
  protoOf(PredictionContext).toStrings_vlhl30_k$ = function (recognizer, stop, currentState) {
    var result = ArrayList_init_$Create$_0();
    var perm = 0;
    outer: while (true) {
      var offset = 0;
      var last = true;
      var p = this;
      var stateNumber = currentState;
      var localBuffer = StringBuilder_init_$Create$();
      localBuffer.append_22ad7x_k$('[');
      while (!ensureNotNull(p).get_isEmpty_zauvru_k$() ? !(p === stop) : false) {
        var index = 0;
        if (p.size_23och_k$() > 0) {
          var bits = 1;
          while (1 << bits < p.size_23och_k$()) {
            bits = bits + 1 | 0;
          }
          var mask = (1 << bits) - 1 | 0;
          index = perm >> offset & mask;
          last = !!(last & index >= (p.size_23och_k$() - 1 | 0));
          if (index >= p.size_23och_k$()) {
            perm = perm + 1 | 0;
            continue outer;
          }
          offset = offset + bits | 0;
        }
        if (!(recognizer == null)) {
          if (localBuffer.get_length_g42xv3_k$() > 1) {
            localBuffer.append_am5a4z_k$(_Char___init__impl__6a9atx(32));
          }
          var atn = recognizer.get_atn_18j9am_k$();
          var s = atn.get_states_jnf5zf_k$().get_c1px32_k$(stateNumber);
          var ruleName = ensureNotNull(recognizer.get_ruleNames_qcosu5_k$())[ensureNotNull(s).get_ruleIndex_qf7nn7_k$()];
          localBuffer.append_22ad7x_k$(ruleName);
        } else if (!(p.getReturnState_2b95w3_k$(index) === Companion_getInstance_22().EMPTY_RETURN_STATE_1)) {
          if (!p.get_isEmpty_zauvru_k$()) {
            if (localBuffer.get_length_g42xv3_k$() > 1) {
              localBuffer.append_am5a4z_k$(_Char___init__impl__6a9atx(32));
            }
            localBuffer.append_t8pm91_k$(p.getReturnState_2b95w3_k$(index));
          }
        }
        stateNumber = p.getReturnState_2b95w3_k$(index);
        p = p.getParent_atvid4_k$(index);
      }
      localBuffer.append_22ad7x_k$(']');
      result.add_utx5q5_k$(localBuffer.toString());
      if (last) {
        break outer;
      }
      perm = perm + 1 | 0;
    }
    // Inline function 'kotlin.collections.toTypedArray' call
    return copyToArray(result);
  };
  function PredictionContextCache() {
    this.cache_1 = HashMap_init_$Create$();
  }
  protoOf(PredictionContextCache).get_cache_ipl461_k$ = function () {
    return this.cache_1;
  };
  protoOf(PredictionContextCache).add_y3ci51_k$ = function (ctx) {
    if (ctx === Companion_getInstance_22().get_EMPTY_i8q41w_k$())
      return Companion_getInstance_22().get_EMPTY_i8q41w_k$();
    var existing = this.cache_1.get_wei43m_k$(ctx);
    if (!(existing == null)) {
      return existing;
    }
    this.cache_1.put_4fpzoq_k$(ctx, ctx);
    return ctx;
  };
  protoOf(PredictionContextCache).get_tx3xu2_k$ = function (ctx) {
    return this.cache_1.get_wei43m_k$(ctx);
  };
  protoOf(PredictionContextCache).size_23och_k$ = function () {
    return this.cache_1.get_size_woubt6_k$();
  };
  function Companion_22() {
    Companion_instance_22 = this;
    this.INSTANCE_1 = new AltAndContextConfigEqualityComparator();
  }
  protoOf(Companion_22).get_INSTANCE_9oh0gy_k$ = function () {
    return this.INSTANCE_1;
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
    FlexibleHashMap.call(this, Companion_getInstance_23().INSTANCE_1);
  }
  function AltAndContextConfigEqualityComparator() {
    Companion_getInstance_23();
    AbstractEqualityComparator.call(this);
  }
  protoOf(AltAndContextConfigEqualityComparator).hashCode_lhw5ua_k$ = function (o) {
    var hashCode = MurmurHash_getInstance().initialize_vf4y0_k$(7);
    hashCode = MurmurHash_getInstance().update_65sxl5_k$(hashCode, o.get_state_iypx7s_k$().get_stateNumber_v90a1d_k$());
    hashCode = MurmurHash_getInstance().update_66jqwg_k$(hashCode, o.get_context_h02k06_k$());
    hashCode = MurmurHash_getInstance().finish_sqfsk3_k$(hashCode, 2);
    return hashCode;
  };
  protoOf(AltAndContextConfigEqualityComparator).hashCode_fsgoms_k$ = function (obj) {
    return this.hashCode_lhw5ua_k$(obj instanceof ATNConfig ? obj : THROW_CCE());
  };
  protoOf(AltAndContextConfigEqualityComparator).equals_xy3hfl_k$ = function (a, b) {
    if (a === b)
      return true;
    return (a == null ? true : b == null) ? false : ensureNotNull(a).get_state_iypx7s_k$().get_stateNumber_v90a1d_k$() === ensureNotNull(b).get_state_iypx7s_k$().get_stateNumber_v90a1d_k$() ? equals(ensureNotNull(a).get_context_h02k06_k$(), ensureNotNull(b).get_context_h02k06_k$()) : false;
  };
  protoOf(AltAndContextConfigEqualityComparator).equals_dxlvsx_k$ = function (a, b) {
    var tmp = (a == null ? true : a instanceof ATNConfig) ? a : THROW_CCE();
    return this.equals_xy3hfl_k$(tmp, (b == null ? true : b instanceof ATNConfig) ? b : THROW_CCE());
  };
  function Companion_23() {
    Companion_instance_23 = this;
  }
  protoOf(Companion_23).hasSLLConflictTerminatingPrediction_qxsjf9_k$ = function (mode, configs) {
    var configs_0 = configs;
    if (this.allConfigsInRuleStopStates_1m093c_k$(configs_0)) {
      return true;
    }
    if (mode.equals(PredictionMode_SLL_getInstance())) {
      if (configs_0.get_hasSemanticContext_7a3dso_k$()) {
        var dup = new ATNConfigSet();
        var tmp0_iterator = configs_0.iterator_jk1svi_k$();
        while (tmp0_iterator.hasNext_bitz1p_k$()) {
          var c = tmp0_iterator.next_20eer_k$();
          var mutableC = c;
          mutableC = ATNConfig_init_$Create$_2(mutableC, Companion_getInstance_25().get_NONE_wo64xt_k$());
          dup.add_ce12aw_k$(mutableC);
        }
        configs_0 = dup;
      }
    }
    var altsets = this.getConflictingAltSubsets_wzna9x_k$(configs_0);
    return this.hasConflictingAltSet_6xeftq_k$(altsets) ? !this.hasStateAssociatedWithOneAlt_zhy0n_k$(configs_0) : false;
  };
  protoOf(Companion_23).hasConfigInRuleStopState_axz4c5_k$ = function (configs) {
    var tmp0_iterator = configs.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var c = tmp0_iterator.next_20eer_k$();
      var tmp = c.get_state_iypx7s_k$();
      if (tmp instanceof RuleStopState) {
        return true;
      }
    }
    return false;
  };
  protoOf(Companion_23).allConfigsInRuleStopStates_1m093c_k$ = function (configs) {
    var tmp0_iterator = configs.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var config = tmp0_iterator.next_20eer_k$();
      var tmp = config.get_state_iypx7s_k$();
      if (!(tmp instanceof RuleStopState)) {
        return false;
      }
    }
    return true;
  };
  protoOf(Companion_23).resolvesToJustOneViableAlt_m8g761_k$ = function (altsets) {
    return this.getSingleViableAlt_q1pqsv_k$(altsets);
  };
  protoOf(Companion_23).allSubsetsConflict_214a2z_k$ = function (altsets) {
    return !this.hasNonConflictingAltSet_pmg8gn_k$(altsets);
  };
  protoOf(Companion_23).hasNonConflictingAltSet_pmg8gn_k$ = function (altsets) {
    var tmp0_iterator = altsets.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var alts = tmp0_iterator.next_20eer_k$();
      if (alts.cardinality_dz7uku_k$() === 1) {
        return true;
      }
    }
    return false;
  };
  protoOf(Companion_23).hasConflictingAltSet_6xeftq_k$ = function (altsets) {
    var tmp0_iterator = altsets.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var alts = tmp0_iterator.next_20eer_k$();
      if (alts.cardinality_dz7uku_k$() > 1) {
        return true;
      }
    }
    return false;
  };
  protoOf(Companion_23).allSubsetsEqual_yqxn2h_k$ = function (altsets) {
    var it = altsets.iterator_jk1svi_k$();
    var first = it.next_20eer_k$();
    while (it.hasNext_bitz1p_k$()) {
      var next = it.next_20eer_k$();
      if (!equals(next, first))
        return false;
    }
    return true;
  };
  protoOf(Companion_23).getUniqueAlt_ktgea3_k$ = function (altsets) {
    var all = this.getAlts_fa3de5_k$(altsets);
    return all.cardinality_dz7uku_k$() === 1 ? all.nextSetBit_43bnne_k$(0) : Companion_getInstance_8().get_INVALID_ALT_NUMBER_idrbu8_k$();
  };
  protoOf(Companion_23).getAlts_fa3de5_k$ = function (altsets) {
    var all = BitSet_init_$Create$();
    var tmp0_iterator = altsets.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var alts = tmp0_iterator.next_20eer_k$();
      all.or_rkglts_k$(alts);
    }
    return all;
  };
  protoOf(Companion_23).getAlts_w6upod_k$ = function (configs) {
    var alts = BitSet_init_$Create$();
    var tmp0_iterator = configs.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var config = tmp0_iterator.next_20eer_k$();
      alts.set_3dek9m_k$(config.get_alt_18j9hc_k$());
    }
    return alts;
  };
  protoOf(Companion_23).getConflictingAltSubsets_wzna9x_k$ = function (configs) {
    var configToAlts = new AltAndContextMap();
    var tmp0_iterator = configs.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var c = tmp0_iterator.next_20eer_k$();
      var alts = configToAlts.get_wei43m_k$(c);
      if (alts == null) {
        alts = BitSet_init_$Create$();
        configToAlts.put_4fpzoq_k$(c, alts);
      }
      ensureNotNull(alts).set_3dek9m_k$(c.get_alt_18j9hc_k$());
    }
    return configToAlts.get_values_ksazhn_k$();
  };
  protoOf(Companion_23).getStateToAltMap_49a0c4_k$ = function (configs) {
    var m = HashMap_init_$Create$();
    var tmp0_iterator = configs.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var c = tmp0_iterator.next_20eer_k$();
      var alts = m.get_wei43m_k$(c.get_state_iypx7s_k$());
      if (alts == null) {
        alts = BitSet_init_$Create$();
        m.put_4fpzoq_k$(c.get_state_iypx7s_k$(), alts);
      }
      alts.set_3dek9m_k$(c.get_alt_18j9hc_k$());
    }
    return m;
  };
  protoOf(Companion_23).hasStateAssociatedWithOneAlt_zhy0n_k$ = function (configs) {
    var x = this.getStateToAltMap_49a0c4_k$(configs);
    var tmp0_iterator = x.get_values_ksazhn_k$().iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var alts = tmp0_iterator.next_20eer_k$();
      if (alts.cardinality_dz7uku_k$() === 1)
        return true;
    }
    return false;
  };
  protoOf(Companion_23).getSingleViableAlt_q1pqsv_k$ = function (altsets) {
    var viableAlts = BitSet_init_$Create$();
    var tmp0_iterator = altsets.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var alts = tmp0_iterator.next_20eer_k$();
      var minAlt = alts.nextSetBit_43bnne_k$(0);
      viableAlts.set_3dek9m_k$(minAlt);
      if (viableAlts.cardinality_dz7uku_k$() > 1) {
        return Companion_getInstance_8().get_INVALID_ALT_NUMBER_idrbu8_k$();
      }
    }
    return viableAlts.nextSetBit_43bnne_k$(0);
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
        THROW_IAE('No enum constant value.');
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
    ParserATNSimulator.call(this, parser, ensureNotNull(parser.get_interpreter_jbbcvj_k$()).get_atn_18j9am_k$(), ensureNotNull(parser.get_interpreter_jbbcvj_k$()).get_decisionToDFA_9qhkht_k$(), ensureNotNull(ensureNotNull(parser.get_interpreter_jbbcvj_k$()).get_sharedContextCache_zbguan_k$()));
    this.decisionInfo_1 = null;
  }
  protoOf(ProfilingATNSimulator).set_decisionInfo_ch3mgi_k$ = function (_set____db54di) {
    this.decisionInfo_1 = _set____db54di;
  };
  protoOf(ProfilingATNSimulator).get_decisionInfo_fpwt83_k$ = function () {
    return this.decisionInfo_1;
  };
  function RangeTransition(target, from, to) {
    Transition.call(this, target);
    this.from_1 = from;
    this.to_1 = to;
  }
  protoOf(RangeTransition).get_from_wom7eb_k$ = function () {
    return this.from_1;
  };
  protoOf(RangeTransition).get_to_kntnng_k$ = function () {
    return this.to_1;
  };
  protoOf(RangeTransition).get_serializationType_kzwl9d_k$ = function () {
    return Companion_getInstance_27().get_RANGE_ifnq44_k$();
  };
  protoOf(RangeTransition).accessLabel_hdfxg0_k$ = function () {
    return Companion_getInstance_32().of_doci3b_k$(this.from_1, this.to_1);
  };
  protoOf(RangeTransition).matches_isvi11_k$ = function (symbol, minVocabSymbol, maxVocabSymbol) {
    return symbol >= this.from_1 ? symbol <= this.to_1 : false;
  };
  protoOf(RangeTransition).toString = function () {
    // Inline function 'kotlin.TODO' call
    throw new NotImplementedError();
  };
  function RuleStartState() {
    ATNState.call(this);
    this.stopState_1 = null;
    this.isLeftRecursiveRule_1 = false;
  }
  protoOf(RuleStartState).set_stopState_pwqlxb_k$ = function (_set____db54di) {
    this.stopState_1 = _set____db54di;
  };
  protoOf(RuleStartState).get_stopState_zagbgm_k$ = function () {
    return this.stopState_1;
  };
  protoOf(RuleStartState).set_isLeftRecursiveRule_y9j1vv_k$ = function (_set____db54di) {
    this.isLeftRecursiveRule_1 = _set____db54di;
  };
  protoOf(RuleStartState).get_isLeftRecursiveRule_drccus_k$ = function () {
    return this.isLeftRecursiveRule_1;
  };
  protoOf(RuleStartState).get_stateType_pzcpby_k$ = function () {
    return Companion_getInstance_14().get_RULE_START_432uk8_k$();
  };
  function RuleStopState() {
    ATNState.call(this);
  }
  protoOf(RuleStopState).get_stateType_pzcpby_k$ = function () {
    return Companion_getInstance_14().get_RULE_STOP_khn5q4_k$();
  };
  function RuleTransition_init_$Init$(ruleStart, ruleIndex, followState, $this) {
    RuleTransition.call($this, ruleStart, ruleIndex, 0, followState);
    return $this;
  }
  function RuleTransition_init_$Create$(ruleStart, ruleIndex, followState) {
    return RuleTransition_init_$Init$(ruleStart, ruleIndex, followState, objectCreate(protoOf(RuleTransition)));
  }
  function RuleTransition(ruleStart, ruleIndex, precedence, followState) {
    Transition.call(this, ruleStart);
    this.ruleIndex_1 = ruleIndex;
    this.precedence_1 = precedence;
    this.followState_1 = followState;
  }
  protoOf(RuleTransition).get_ruleIndex_qf7nn7_k$ = function () {
    return this.ruleIndex_1;
  };
  protoOf(RuleTransition).get_precedence_hj68vh_k$ = function () {
    return this.precedence_1;
  };
  protoOf(RuleTransition).set_followState_c7ywbb_k$ = function (_set____db54di) {
    this.followState_1 = _set____db54di;
  };
  protoOf(RuleTransition).get_followState_uwxfd5_k$ = function () {
    return this.followState_1;
  };
  protoOf(RuleTransition).get_serializationType_kzwl9d_k$ = function () {
    return Companion_getInstance_27().get_RULE_wo8tad_k$();
  };
  protoOf(RuleTransition).get_isEpsilon_qgv0zt_k$ = function () {
    return true;
  };
  protoOf(RuleTransition).matches_isvi11_k$ = function (symbol, minVocabSymbol, maxVocabSymbol) {
    return false;
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
    return Predicate_init_$Init$(objectCreate(protoOf(Predicate)));
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
    return Predicate_init_$Init$_0(ruleIndex, predIndex, isCtxDependent, objectCreate(protoOf(Predicate)));
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
        result.add_utx5q5_k$(context);
        iterator.remove_ldkf9o_k$();
      }
    }
    var tmp0_elvis_lhs = result;
    return tmp0_elvis_lhs == null ? emptyList() : tmp0_elvis_lhs;
  }
  protoOf(Predicate).get_ruleIndex_qf7nn7_k$ = function () {
    return this.ruleIndex_1;
  };
  protoOf(Predicate).get_predIndex_e9gj94_k$ = function () {
    return this.predIndex_1;
  };
  protoOf(Predicate).get_isCtxDependent_w62lez_k$ = function () {
    return this.isCtxDependent_1;
  };
  protoOf(Predicate).eval_u4ox8x_k$ = function (parser, parserCallStack) {
    var localctx = this.isCtxDependent_1 ? parserCallStack : null;
    return parser.sempred_qltucy_k$(ensureNotNull(localctx), this.ruleIndex_1, this.predIndex_1);
  };
  protoOf(Predicate).hashCode = function () {
    var hashCode = MurmurHash_getInstance().initialize$default_ajr2pw_k$();
    hashCode = MurmurHash_getInstance().update_65sxl5_k$(hashCode, this.ruleIndex_1);
    hashCode = MurmurHash_getInstance().update_65sxl5_k$(hashCode, this.predIndex_1);
    hashCode = MurmurHash_getInstance().update_65sxl5_k$(hashCode, this.isCtxDependent_1 ? 1 : 0);
    hashCode = MurmurHash_getInstance().finish_sqfsk3_k$(hashCode, 3);
    return hashCode;
  };
  protoOf(Predicate).equals = function (other) {
    if (!(other instanceof Predicate))
      return false;
    if (this === other)
      return true;
    return (this.ruleIndex_1 === other.ruleIndex_1 ? this.predIndex_1 === other.predIndex_1 : false) ? this.isCtxDependent_1 === other.isCtxDependent_1 : false;
  };
  protoOf(Predicate).toString = function () {
    return '{' + this.ruleIndex_1 + ':' + this.predIndex_1 + '}?';
  };
  function Predicate() {
  }
  function PrecedencePredicate(precedence) {
    precedence = precedence === VOID ? 0 : precedence;
    SemanticContext.call(this);
    this.precedence_1 = precedence;
  }
  protoOf(PrecedencePredicate).get_precedence_hj68vh_k$ = function () {
    return this.precedence_1;
  };
  protoOf(PrecedencePredicate).eval_u4ox8x_k$ = function (parser, parserCallStack) {
    return parser.precpred_qehpxm_k$(parserCallStack, this.precedence_1);
  };
  protoOf(PrecedencePredicate).evalPrecedence_2ceeuf_k$ = function (parser, parserCallStack) {
    var tmp;
    if (parser.precpred_qehpxm_k$(parserCallStack, this.precedence_1)) {
      tmp = Companion_getInstance_25().NONE_1;
    } else {
      tmp = null;
    }
    return tmp;
  };
  protoOf(PrecedencePredicate).compareTo_bs7be4_k$ = function (other) {
    return this.precedence_1 - other.precedence_1 | 0;
  };
  protoOf(PrecedencePredicate).compareTo_hpufkf_k$ = function (other) {
    return this.compareTo_bs7be4_k$(other instanceof PrecedencePredicate ? other : THROW_CCE());
  };
  protoOf(PrecedencePredicate).hashCode = function () {
    var hashCode = 1;
    hashCode = imul(31, hashCode) + this.precedence_1 | 0;
    return hashCode;
  };
  protoOf(PrecedencePredicate).equals = function (other) {
    if (!(other instanceof PrecedencePredicate)) {
      return false;
    }
    if (this === other) {
      return true;
    }
    return this.precedence_1 === other.precedence_1;
  };
  protoOf(PrecedencePredicate).toString = function () {
    return '{' + this.precedence_1 + '>=prec}?';
  };
  function Operator() {
    SemanticContext.call(this);
  }
  function AND(a, b) {
    Operator.call(this);
    var operands = HashSet_init_$Create$_0();
    if (a instanceof AND) {
      operands.addAll_4lagoh_k$(toList(a.opnds_1));
    } else {
      operands.add_utx5q5_k$(a);
    }
    if (b instanceof AND) {
      operands.addAll_4lagoh_k$(toList(b.opnds_1));
    } else {
      operands.add_utx5q5_k$(b);
    }
    var precedencePredicates = filterPrecedencePredicates(Companion_getInstance_25(), operands);
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!precedencePredicates.isEmpty_y1axqb_k$()) {
      var reduced = Collections_getInstance().min_7gz730_k$(precedencePredicates);
      operands.add_utx5q5_k$(reduced);
    }
    var tmp = this;
    // Inline function 'kotlin.collections.toTypedArray' call
    tmp.opnds_1 = copyToArray(operands);
  }
  protoOf(AND).get_opnds_iwgg5v_k$ = function () {
    return this.opnds_1;
  };
  protoOf(AND).get_operands_uy5l03_k$ = function () {
    return toList(this.opnds_1);
  };
  protoOf(AND).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof AND))
      return false;
    return Arrays_getInstance().equals_qczyj1_k$(this.opnds_1, other.opnds_1);
  };
  protoOf(AND).hashCode = function () {
    // Inline function 'kotlin.TODO' call
    throw new NotImplementedError();
  };
  protoOf(AND).eval_u4ox8x_k$ = function (parser, parserCallStack) {
    var indexedObject = this.opnds_1;
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var opnd = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      if (!opnd.eval_u4ox8x_k$(parser, parserCallStack))
        return false;
    }
    return true;
  };
  protoOf(AND).evalPrecedence_2ceeuf_k$ = function (parser, parserCallStack) {
    var differs = false;
    var operands = ArrayList_init_$Create$_0();
    var indexedObject = this.opnds_1;
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var context = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      var evaluated = context.evalPrecedence_2ceeuf_k$(parser, parserCallStack);
      differs = !!(differs | !(evaluated === context));
      if (evaluated == null) {
        return null;
      } else if (!(evaluated === Companion_getInstance_25().NONE_1)) {
        operands.add_utx5q5_k$(evaluated);
      }
    }
    if (!differs) {
      return this;
    }
    if (operands.isEmpty_y1axqb_k$()) {
      return Companion_getInstance_25().NONE_1;
    }
    var result = operands.get_c1px32_k$(0);
    var inductionVariable_0 = 1;
    var last_0 = operands.get_size_woubt6_k$();
    if (inductionVariable_0 < last_0)
      do {
        var i = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        result = Companion_getInstance_25().and_2qet5j_k$(result, operands.get_c1px32_k$(i));
      }
       while (inductionVariable_0 < last_0);
    return result;
  };
  protoOf(AND).toString = function () {
    return joinToString_0(toList(this.opnds_1), '&&');
  };
  function OR(a, b) {
    Operator.call(this);
    var operands = HashSet_init_$Create$_0();
    if (a instanceof OR) {
      operands.addAll_4lagoh_k$(toList(a.opnds_1));
    } else {
      operands.add_utx5q5_k$(a);
    }
    if (b instanceof OR) {
      operands.addAll_4lagoh_k$(toList(b.opnds_1));
    } else {
      operands.add_utx5q5_k$(b);
    }
    var precedencePredicates = filterPrecedencePredicates(Companion_getInstance_25(), operands);
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!precedencePredicates.isEmpty_y1axqb_k$()) {
      var reduced = Collections_getInstance().max_9um31y_k$(precedencePredicates);
      operands.add_utx5q5_k$(reduced);
    }
    var tmp = this;
    // Inline function 'kotlin.collections.toTypedArray' call
    tmp.opnds_1 = copyToArray(operands);
  }
  protoOf(OR).get_opnds_iwgg5v_k$ = function () {
    return this.opnds_1;
  };
  protoOf(OR).get_operands_uy5l03_k$ = function () {
    return toList(this.opnds_1);
  };
  protoOf(OR).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof OR))
      return false;
    return Arrays_getInstance().equals_qczyj1_k$(this.opnds_1, other.opnds_1);
  };
  protoOf(OR).hashCode = function () {
    // Inline function 'kotlin.TODO' call
    throw new NotImplementedError();
  };
  protoOf(OR).eval_u4ox8x_k$ = function (parser, parserCallStack) {
    var indexedObject = this.opnds_1;
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var opnd = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      if (opnd.eval_u4ox8x_k$(parser, parserCallStack))
        return true;
    }
    return false;
  };
  protoOf(OR).evalPrecedence_2ceeuf_k$ = function (parser, parserCallStack) {
    var differs = false;
    var operands = ArrayList_init_$Create$_0();
    var indexedObject = this.opnds_1;
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var context = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      var evaluated = context.evalPrecedence_2ceeuf_k$(parser, parserCallStack);
      differs = !!(differs | !(evaluated === context));
      if (evaluated === Companion_getInstance_25().NONE_1) {
        return Companion_getInstance_25().NONE_1;
      } else if (!(evaluated == null)) {
        operands.add_utx5q5_k$(evaluated);
      }
    }
    if (!differs) {
      return this;
    }
    if (operands.isEmpty_y1axqb_k$()) {
      return null;
    }
    var result = operands.get_c1px32_k$(0);
    var inductionVariable_0 = 1;
    var last_0 = operands.get_size_woubt6_k$();
    if (inductionVariable_0 < last_0)
      do {
        var i = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        result = Companion_getInstance_25().or_m1rlsz_k$(result, operands.get_c1px32_k$(i));
      }
       while (inductionVariable_0 < last_0);
    return result;
  };
  protoOf(OR).toString = function () {
    return joinToString_0(toList(this.opnds_1), '||');
  };
  function Companion_24() {
    Companion_instance_24 = this;
    this.NONE_1 = Predicate_init_$Create$();
  }
  protoOf(Companion_24).get_NONE_wo64xt_k$ = function () {
    return this.NONE_1;
  };
  protoOf(Companion_24).and_2qet5j_k$ = function (a, b) {
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
  protoOf(Companion_24).or_m1rlsz_k$ = function (a, b) {
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
  var Companion_instance_24;
  function Companion_getInstance_25() {
    if (Companion_instance_24 == null)
      new Companion_24();
    return Companion_instance_24;
  }
  function SemanticContext() {
    Companion_getInstance_25();
  }
  protoOf(SemanticContext).evalPrecedence_2ceeuf_k$ = function (parser, parserCallStack) {
    return this;
  };
  function SetTransition(target, set) {
    Transition.call(this, target);
    var set_0 = set;
    if (set_0 == null)
      set_0 = Companion_getInstance_32().of_xanmn3_k$(Companion_getInstance_6().get_INVALID_TYPE_iyehat_k$());
    this.set_1 = set_0;
  }
  protoOf(SetTransition).get_set_18iwav_k$ = function () {
    return this.set_1;
  };
  protoOf(SetTransition).get_serializationType_kzwl9d_k$ = function () {
    return Companion_getInstance_27().get_SET_18jktj_k$();
  };
  protoOf(SetTransition).accessLabel_hdfxg0_k$ = function () {
    return this.set_1;
  };
  protoOf(SetTransition).matches_isvi11_k$ = function (symbol, minVocabSymbol, maxVocabSymbol) {
    return this.set_1.contains_7q95ev_k$(symbol);
  };
  protoOf(SetTransition).toString = function () {
    return this.set_1.toString();
  };
  function Companion_25() {
    Companion_instance_25 = this;
  }
  protoOf(Companion_25).create_i5ph5t_k$ = function (parent, returnState) {
    var tmp;
    if (returnState === Companion_getInstance_22().get_EMPTY_RETURN_STATE_opy8sj_k$() ? parent == null : false) {
      tmp = Companion_getInstance_22().get_EMPTY_i8q41w_k$();
    } else {
      tmp = new SingletonPredictionContext(parent, returnState);
    }
    return tmp;
  };
  var Companion_instance_25;
  function Companion_getInstance_26() {
    if (Companion_instance_25 == null)
      new Companion_25();
    return Companion_instance_25;
  }
  function SingletonPredictionContext(parent, returnState) {
    Companion_getInstance_26();
    PredictionContext.call(this, !(parent == null) ? Companion_getInstance_22().calculateHashCode_8m436l_k$(parent, returnState) : Companion_getInstance_22().calculateEmptyHashCode_ieobb2_k$());
    this.parent_1 = parent;
    this.returnState_1 = returnState;
    assert(!(this.returnState_1 === Companion_getInstance_14().get_INVALID_STATE_NUMBER_d1yr20_k$()));
  }
  protoOf(SingletonPredictionContext).get_parent_hy4reb_k$ = function () {
    return this.parent_1;
  };
  protoOf(SingletonPredictionContext).get_returnState_ava1pk_k$ = function () {
    return this.returnState_1;
  };
  protoOf(SingletonPredictionContext).size_23och_k$ = function () {
    return 1;
  };
  protoOf(SingletonPredictionContext).getParent_atvid4_k$ = function (index) {
    assert(index === 0);
    return this.parent_1;
  };
  protoOf(SingletonPredictionContext).getReturnState_2b95w3_k$ = function (index) {
    assert(index === 0);
    return this.returnState_1;
  };
  protoOf(SingletonPredictionContext).equals = function (o) {
    if (this === o) {
      return true;
    } else {
      if (!(o instanceof SingletonPredictionContext)) {
        return false;
      }
    }
    if (!(this.hashCode() === hashCode(o))) {
      return false;
    }
    var s = (o == null ? true : o instanceof SingletonPredictionContext) ? o : THROW_CCE();
    return (this.returnState_1 === ensureNotNull(s).returnState_1 ? !(this.parent_1 == null) : false) ? equals(this.parent_1, s.parent_1) : false;
  };
  protoOf(SingletonPredictionContext).toString = function () {
    var up = !(this.parent_1 == null) ? toString(ensureNotNull(this.parent_1)) : '';
    var tmp;
    if (up.length === 0) {
      var tmp_0;
      if (this.returnState_1 === Companion_getInstance_22().get_EMPTY_RETURN_STATE_opy8sj_k$()) {
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
  function StarBlockStartState() {
    BlockStartState.call(this);
  }
  protoOf(StarBlockStartState).get_stateType_pzcpby_k$ = function () {
    return Companion_getInstance_14().get_STAR_BLOCK_START_v2275g_k$();
  };
  function StarLoopEntryState() {
    DecisionState.call(this);
    this.loopBackState_1 = null;
    this.isPrecedenceDecision_1 = false;
  }
  protoOf(StarLoopEntryState).set_loopBackState_atr1w7_k$ = function (_set____db54di) {
    this.loopBackState_1 = _set____db54di;
  };
  protoOf(StarLoopEntryState).get_loopBackState_ape3y5_k$ = function () {
    return this.loopBackState_1;
  };
  protoOf(StarLoopEntryState).set_isPrecedenceDecision_hxh3bs_k$ = function (_set____db54di) {
    this.isPrecedenceDecision_1 = _set____db54di;
  };
  protoOf(StarLoopEntryState).get_isPrecedenceDecision_dcmgbd_k$ = function () {
    return this.isPrecedenceDecision_1;
  };
  protoOf(StarLoopEntryState).get_stateType_pzcpby_k$ = function () {
    return Companion_getInstance_14().get_STAR_LOOP_ENTRY_sp54o5_k$();
  };
  function StarLoopbackState() {
    ATNState.call(this);
  }
  protoOf(StarLoopbackState).get_loopEntryState_ohwzxw_k$ = function () {
    var tmp = this.transition_nw6t99_k$(0).get_target_juba8q_k$();
    return tmp instanceof StarLoopEntryState ? tmp : THROW_CCE();
  };
  protoOf(StarLoopbackState).get_stateType_pzcpby_k$ = function () {
    return Companion_getInstance_14().get_STAR_LOOP_BACK_f40vlq_k$();
  };
  function TokensStartState() {
    DecisionState.call(this);
  }
  protoOf(TokensStartState).get_stateType_pzcpby_k$ = function () {
    return Companion_getInstance_14().get_TOKEN_START_pdxekt_k$();
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
  protoOf(Companion_26).get_EPSILON_c96d27_k$ = function () {
    return this.EPSILON_1;
  };
  protoOf(Companion_26).get_RANGE_ifnq44_k$ = function () {
    return this.RANGE_1;
  };
  protoOf(Companion_26).get_RULE_wo8tad_k$ = function () {
    return this.RULE_1;
  };
  protoOf(Companion_26).get_PREDICATE_wb07am_k$ = function () {
    return this.PREDICATE_1;
  };
  protoOf(Companion_26).get_ATOM_wnxxui_k$ = function () {
    return this.ATOM_1;
  };
  protoOf(Companion_26).get_ACTION_4s122p_k$ = function () {
    return this.ACTION_1;
  };
  protoOf(Companion_26).get_SET_18jktj_k$ = function () {
    return this.SET_1;
  };
  protoOf(Companion_26).get_NOT_SET_mnxk4z_k$ = function () {
    return this.NOT_SET_1;
  };
  protoOf(Companion_26).get_WILDCARD_wrqxsz_k$ = function () {
    return this.WILDCARD_1;
  };
  protoOf(Companion_26).get_PRECEDENCE_9id17x_k$ = function () {
    return this.PRECEDENCE_1;
  };
  protoOf(Companion_26).get_serializationNames_bjbnwh_k$ = function () {
    return this.serializationNames_1;
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
  protoOf(Transition).set_target_oy4mhj_k$ = function (_set____db54di) {
    this.target_1 = _set____db54di;
  };
  protoOf(Transition).get_target_juba8q_k$ = function () {
    return this.target_1;
  };
  protoOf(Transition).get_isEpsilon_qgv0zt_k$ = function () {
    return false;
  };
  protoOf(Transition).accessLabel_hdfxg0_k$ = function () {
    return null;
  };
  function WildcardTransition(target) {
    Transition.call(this, target);
  }
  protoOf(WildcardTransition).get_serializationType_kzwl9d_k$ = function () {
    return Companion_getInstance_27().get_WILDCARD_wrqxsz_k$();
  };
  protoOf(WildcardTransition).matches_isvi11_k$ = function (symbol, minVocabSymbol, maxVocabSymbol) {
    return symbol >= minVocabSymbol ? symbol <= maxVocabSymbol : false;
  };
  protoOf(WildcardTransition).toString = function () {
    return '.';
  };
  function _get_precedenceDfa__wju0n0($this) {
    return $this.precedenceDfa_1;
  }
  function sam$kotlin_Comparator$0(function_0) {
    this.function_1 = function_0;
  }
  protoOf(sam$kotlin_Comparator$0).compare_bczr_k$ = function (a, b) {
    return this.function_1(a, b);
  };
  protoOf(sam$kotlin_Comparator$0).compare = function (a, b) {
    return this.compare_bczr_k$(a, b);
  };
  function DFA$getStates$lambda(a, b) {
    // Inline function 'kotlin.comparisons.compareValuesBy' call
    // Inline function 'org.antlr.v4.kotlinruntime.dfa.DFA.getStates.<anonymous>' call
    var tmp = a.get_stateNumber_v90a1d_k$();
    // Inline function 'org.antlr.v4.kotlinruntime.dfa.DFA.getStates.<anonymous>' call
    var tmp$ret$1 = b.get_stateNumber_v90a1d_k$();
    return compareValues(tmp, tmp$ret$1);
  }
  function DFA(atnStartState, decision) {
    decision = decision === VOID ? 0 : decision;
    this.atnStartState_1 = atnStartState;
    this.decision_1 = decision;
    this.states_1 = HashMap_init_$Create$();
    this.s0__1 = null;
    var precedenceDfa = false;
    var tmp = this.atnStartState_1;
    if (tmp instanceof StarLoopEntryState) {
      if (this.atnStartState_1.get_isPrecedenceDecision_dcmgbd_k$()) {
        precedenceDfa = true;
        var precedenceState = DFAState_init_$Create$_1(new ATNConfigSet());
        // Inline function 'kotlin.arrayOfNulls' call
        var tmp$ret$0 = fillArrayVal(Array(0), null);
        precedenceState.set_edges_da9xnp_k$(tmp$ret$0);
        precedenceState.set_isAcceptState_hq03al_k$(false);
        precedenceState.set_requiresFullContext_dondmo_k$(false);
        this.s0__1 = precedenceState;
      }
    }
    this.precedenceDfa_1 = precedenceDfa;
  }
  protoOf(DFA).get_atnStartState_5zitwf_k$ = function () {
    return this.atnStartState_1;
  };
  protoOf(DFA).get_decision_mg4f2z_k$ = function () {
    return this.decision_1;
  };
  protoOf(DFA).get_states_jnf5zf_k$ = function () {
    return this.states_1;
  };
  protoOf(DFA).set_s0_qek8ur_k$ = function (_set____db54di) {
    this.s0__1 = _set____db54di;
  };
  protoOf(DFA).get_s0_kntnq2_k$ = function () {
    return this.s0__1;
  };
  protoOf(DFA).set_isPrecedenceDfa_yldtjb_k$ = function (precedenceDfa) {
    if (!(precedenceDfa === this.get_isPrecedenceDfa_hksa4e_k$())) {
      throw UnsupportedOperationException_init_$Create$('The precedenceDfa field cannot change after a DFA is constructed.');
    }
  };
  protoOf(DFA).get_isPrecedenceDfa_hksa4e_k$ = function () {
    return this.precedenceDfa_1;
  };
  protoOf(DFA).getPrecedenceStartState_hdmarb_k$ = function (precedence) {
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!this.get_isPrecedenceDfa_hksa4e_k$()) {
      // Inline function 'org.antlr.v4.kotlinruntime.dfa.DFA.getPrecedenceStartState.<anonymous>' call
      var message = 'Only precedence DFAs may contain a precedence start state.';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    var tmp;
    if (precedence < 0 ? true : precedence >= ensureNotNull(ensureNotNull(this.s0__1).get_edges_iqqp7x_k$()).length) {
      tmp = null;
    } else {
      tmp = ensureNotNull(ensureNotNull(this.s0__1).get_edges_iqqp7x_k$())[precedence];
    }
    return tmp;
  };
  protoOf(DFA).setPrecedenceStartState_ngcy4p_k$ = function (precedence, startState) {
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!this.get_isPrecedenceDfa_hksa4e_k$()) {
      // Inline function 'org.antlr.v4.kotlinruntime.dfa.DFA.setPrecedenceStartState.<anonymous>' call
      var message = 'Only precedence DFAs may contain a precedence start state.';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    if (precedence < 0) {
      return Unit_getInstance();
    }
    if (precedence >= ensureNotNull(ensureNotNull(this.s0__1).get_edges_iqqp7x_k$()).length) {
      ensureNotNull(this.s0__1).set_edges_da9xnp_k$(copyOf(ensureNotNull(ensureNotNull(this.s0__1).get_edges_iqqp7x_k$()), precedence + 1 | 0));
    }
    ensureNotNull(ensureNotNull(this.s0__1).get_edges_iqqp7x_k$())[precedence] = startState;
  };
  protoOf(DFA).getStates_daei2g_k$ = function () {
    var result = ArrayList_init_$Create$_1(this.states_1.get_keys_wop4xp_k$());
    // Inline function 'kotlin.collections.sortBy' call
    if (result.get_size_woubt6_k$() > 1) {
      // Inline function 'kotlin.comparisons.compareBy' call
      var tmp = DFA$getStates$lambda;
      var tmp$ret$0 = new sam$kotlin_Comparator$0(tmp);
      sortWith(result, tmp$ret$0);
    }
    return result;
  };
  protoOf(DFA).toString = function () {
    var tmp0_elvis_lhs = this.toString_vjubf0_k$(Companion_getInstance_7().get_EMPTY_VOCABULARY_bk59fj_k$());
    return tmp0_elvis_lhs == null ? 'null' : tmp0_elvis_lhs;
  };
  protoOf(DFA).toString_vjubf0_k$ = function (vocabulary) {
    if (this.s0__1 == null) {
      return '';
    }
    var serializer = DFASerializer_init_$Create$_0(this, vocabulary);
    return serializer.toString();
  };
  protoOf(DFA).toLexerString_rhiloe_k$ = function () {
    if (this.s0__1 == null)
      return '';
    var serializer = new LexerDFASerializer(this);
    return serializer.toString();
  };
  function _get_dfa__e670ia($this) {
    return $this.dfa_1;
  }
  function _get_vocabulary__9kdeor($this) {
    return $this.vocabulary_1;
  }
  function DFASerializer_init_$Init$(dfa, tokenNames, $this) {
    var tmp = Companion_getInstance_7();
    DFASerializer_init_$Init$_0(dfa, tmp.fromTokenNames_sfdkff_k$(isArray(tokenNames) ? tokenNames : THROW_CCE()), $this);
    return $this;
  }
  function DFASerializer_init_$Create$(dfa, tokenNames) {
    return DFASerializer_init_$Init$(dfa, tokenNames, objectCreate(protoOf(DFASerializer)));
  }
  function DFASerializer_init_$Init$_0(dfa, vocabulary, $this) {
    DFASerializer.call($this);
    $this.dfa_1 = dfa;
    $this.vocabulary_1 = vocabulary;
    return $this;
  }
  function DFASerializer_init_$Create$_0(dfa, vocabulary) {
    return DFASerializer_init_$Init$_0(dfa, vocabulary, objectCreate(protoOf(DFASerializer)));
  }
  protoOf(DFASerializer).toString = function () {
    if (this.dfa_1.get_s0_kntnq2_k$() == null)
      return 'null';
    var buf = StringBuilder_init_$Create$();
    var states = this.dfa_1.getStates_daei2g_k$();
    var tmp0_iterator = states.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var s = tmp0_iterator.next_20eer_k$();
      var n = 0;
      if (!(s.get_edges_iqqp7x_k$() == null))
        n = ensureNotNull(s.get_edges_iqqp7x_k$()).length;
      var inductionVariable = 0;
      var last = n;
      if (inductionVariable < last)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var t = ensureNotNull(s.get_edges_iqqp7x_k$())[i];
          if (!(t == null) ? !(t.get_stateNumber_v90a1d_k$() === IntCompanionObject_getInstance().get_MAX_VALUE_54a9lf_k$()) : false) {
            buf.append_22ad7x_k$(this.getStateString_i9laqw_k$(s));
            var label = this.getEdgeLabel_7v9sxj_k$(i);
            buf.append_22ad7x_k$('-').append_22ad7x_k$(label).append_22ad7x_k$('->').append_22ad7x_k$(this.getStateString_i9laqw_k$(t)).append_am5a4z_k$(_Char___init__impl__6a9atx(10));
          }
        }
         while (inductionVariable < last);
    }
    var output = buf.toString();
    return output.length === 0 ? 'null' : output;
  };
  protoOf(DFASerializer).getEdgeLabel_7v9sxj_k$ = function (i) {
    return this.vocabulary_1.getDisplayName_ut2bi7_k$(i - 1 | 0);
  };
  protoOf(DFASerializer).getStateString_i9laqw_k$ = function (s) {
    var n = s.get_stateNumber_v90a1d_k$();
    var baseStateStr = (s.get_isAcceptState_ebj6tm_k$() ? ':' : '') + 's' + n + (s.get_requiresFullContext_gu61g7_k$() ? '^' : '');
    var tmp;
    if (s.get_isAcceptState_ebj6tm_k$()) {
      var tmp_0;
      if (!(s.get_predicates_z7p3v_k$() == null)) {
        tmp_0 = baseStateStr + '=>' + joinToString(ensureNotNull(s.get_predicates_z7p3v_k$()));
      } else {
        tmp_0 = baseStateStr + '=>' + s.get_prediction_yvsa0_k$();
      }
      tmp = tmp_0;
    } else {
      tmp = baseStateStr;
    }
    return tmp;
  };
  function DFASerializer() {
  }
  function PredPrediction(pred, alt) {
    this.pred_1 = pred;
    this.alt_1 = alt;
  }
  protoOf(PredPrediction).set_pred_mr7y0p_k$ = function (_set____db54di) {
    this.pred_1 = _set____db54di;
  };
  protoOf(PredPrediction).get_pred_wosl0q_k$ = function () {
    return this.pred_1;
  };
  protoOf(PredPrediction).set_alt_f3m8xo_k$ = function (_set____db54di) {
    this.alt_1 = _set____db54di;
  };
  protoOf(PredPrediction).get_alt_18j9hc_k$ = function () {
    return this.alt_1;
  };
  protoOf(PredPrediction).toString = function () {
    return '(' + this.pred_1 + ', ' + this.alt_1 + ')';
  };
  function DFAState_init_$Init$($this) {
    DFAState.call($this);
    return $this;
  }
  function DFAState_init_$Create$() {
    return DFAState_init_$Init$(objectCreate(protoOf(DFAState)));
  }
  function DFAState_init_$Init$_0(stateNumber, $this) {
    DFAState.call($this);
    $this.stateNumber_1 = stateNumber;
    return $this;
  }
  function DFAState_init_$Create$_0(stateNumber) {
    return DFAState_init_$Init$_0(stateNumber, objectCreate(protoOf(DFAState)));
  }
  function DFAState_init_$Init$_1(configs, $this) {
    DFAState.call($this);
    $this.configs_1 = configs;
    return $this;
  }
  function DFAState_init_$Create$_1(configs) {
    return DFAState_init_$Init$_1(configs, objectCreate(protoOf(DFAState)));
  }
  protoOf(DFAState).set_stateNumber_ar8wln_k$ = function (_set____db54di) {
    this.stateNumber_1 = _set____db54di;
  };
  protoOf(DFAState).get_stateNumber_v90a1d_k$ = function () {
    return this.stateNumber_1;
  };
  protoOf(DFAState).set_configs_vv34pe_k$ = function (_set____db54di) {
    this.configs_1 = _set____db54di;
  };
  protoOf(DFAState).get_configs_gztoqw_k$ = function () {
    return this.configs_1;
  };
  protoOf(DFAState).set_edges_da9xnp_k$ = function (_set____db54di) {
    this.edges_1 = _set____db54di;
  };
  protoOf(DFAState).get_edges_iqqp7x_k$ = function () {
    return this.edges_1;
  };
  protoOf(DFAState).set_isAcceptState_hq03al_k$ = function (_set____db54di) {
    this.isAcceptState_1 = _set____db54di;
  };
  protoOf(DFAState).get_isAcceptState_ebj6tm_k$ = function () {
    return this.isAcceptState_1;
  };
  protoOf(DFAState).set_prediction_bzxmdg_k$ = function (_set____db54di) {
    this.prediction_1 = _set____db54di;
  };
  protoOf(DFAState).get_prediction_yvsa0_k$ = function () {
    return this.prediction_1;
  };
  protoOf(DFAState).set_lexerActionExecutor_is4268_k$ = function (_set____db54di) {
    this.lexerActionExecutor_1 = _set____db54di;
  };
  protoOf(DFAState).get_lexerActionExecutor_oel90_k$ = function () {
    return this.lexerActionExecutor_1;
  };
  protoOf(DFAState).set_requiresFullContext_dondmo_k$ = function (_set____db54di) {
    this.requiresFullContext_1 = _set____db54di;
  };
  protoOf(DFAState).get_requiresFullContext_gu61g7_k$ = function () {
    return this.requiresFullContext_1;
  };
  protoOf(DFAState).set_predicates_wnj8b_k$ = function (_set____db54di) {
    this.predicates_1 = _set____db54di;
  };
  protoOf(DFAState).get_predicates_z7p3v_k$ = function () {
    return this.predicates_1;
  };
  protoOf(DFAState).get_altSet_b0j2f6_k$ = function () {
    var alts = HashSet_init_$Create$_0();
    if (!(this.configs_1 == null)) {
      var tmp0_iterator = ensureNotNull(this.configs_1).iterator_jk1svi_k$();
      while (tmp0_iterator.hasNext_bitz1p_k$()) {
        var c = tmp0_iterator.next_20eer_k$();
        alts.add_utx5q5_k$(c.get_alt_18j9hc_k$());
      }
    }
    return alts.isEmpty_y1axqb_k$() ? null : alts;
  };
  protoOf(DFAState).hashCode = function () {
    var hash = MurmurHash_getInstance().initialize_vf4y0_k$(7);
    hash = MurmurHash_getInstance().update_65sxl5_k$(hash, ensureNotNull(this.configs_1).hashCode());
    hash = MurmurHash_getInstance().finish_sqfsk3_k$(hash, 1);
    return hash;
  };
  protoOf(DFAState).equals = function (o) {
    if (this === o)
      return true;
    if (!(o instanceof DFAState)) {
      return false;
    }
    var other = (o == null ? true : o instanceof DFAState) ? o : THROW_CCE();
    return ensureNotNull(this.configs_1).equals(ensureNotNull(other).configs_1);
  };
  protoOf(DFAState).toString = function () {
    var buf = StringBuilder_init_$Create$();
    buf.append_t8pm91_k$(this.stateNumber_1).append_22ad7x_k$(':').append_t8pm91_k$(this.configs_1);
    if (this.isAcceptState_1) {
      buf.append_22ad7x_k$('=>');
      if (!(this.predicates_1 == null)) {
        buf.append_22ad7x_k$(joinToString(ensureNotNull(this.predicates_1)));
      } else {
        buf.append_t8pm91_k$(this.prediction_1);
      }
    }
    return buf.toString();
  };
  function DFAState() {
    this.stateNumber_1 = -1;
    this.configs_1 = new ATNConfigSet();
    this.edges_1 = null;
    this.isAcceptState_1 = false;
    this.prediction_1 = 0;
    this.lexerActionExecutor_1 = null;
    this.requiresFullContext_1 = false;
    this.predicates_1 = null;
  }
  function LexerDFASerializer(dfa) {
    DFASerializer_init_$Init$_0(dfa, Companion_getInstance_7().get_EMPTY_VOCABULARY_bk59fj_k$(), this);
  }
  protoOf(LexerDFASerializer).getEdgeLabel_7v9sxj_k$ = function (i) {
    return (new StringBuilder("'")).append_am5a4z_k$(numberToChar(i)).append_22ad7x_k$("'").toString();
  };
  function AbstractEqualityComparator() {
  }
  function SetIterator($outer, data) {
    this.$this_1 = $outer;
    this.data_1 = data;
    this.nextIndex_1 = 0;
    this.removed_1 = true;
  }
  protoOf(SetIterator).get_data_wokkxf_k$ = function () {
    return this.data_1;
  };
  protoOf(SetIterator).set_nextIndex_orlz96_k$ = function (_set____db54di) {
    this.nextIndex_1 = _set____db54di;
  };
  protoOf(SetIterator).get_nextIndex_sb0r1y_k$ = function () {
    return this.nextIndex_1;
  };
  protoOf(SetIterator).set_removed_5q0drm_k$ = function (_set____db54di) {
    this.removed_1 = _set____db54di;
  };
  protoOf(SetIterator).get_removed_jbls3b_k$ = function () {
    return this.removed_1;
  };
  protoOf(SetIterator).hasNext_bitz1p_k$ = function () {
    return this.nextIndex_1 < this.data_1.length;
  };
  protoOf(SetIterator).next_20eer_k$ = function () {
    if (!this.hasNext_bitz1p_k$()) {
      throw NoSuchElementException_init_$Create$();
    }
    this.removed_1 = false;
    var tmp1 = this.nextIndex_1;
    this.nextIndex_1 = tmp1 + 1 | 0;
    return this.data_1[tmp1];
  };
  protoOf(SetIterator).remove_ldkf9o_k$ = function () {
    if (this.removed_1) {
      throw IllegalStateException_init_$Create$_0();
    }
    this.$this_1.remove_an8aut_k$(this.data_1[this.nextIndex_1 - 1 | 0]);
    this.removed_1 = true;
  };
  function Companion_27() {
    Companion_instance_27 = this;
    this.INITAL_CAPACITY_1 = 16;
    this.INITAL_BUCKET_CAPACITY_1 = 8;
    this.LOAD_FACTOR_1 = 0.75;
  }
  protoOf(Companion_27).get_INITAL_CAPACITY_3um2j9_k$ = function () {
    return this.INITAL_CAPACITY_1;
  };
  protoOf(Companion_27).get_INITAL_BUCKET_CAPACITY_gg70qc_k$ = function () {
    return this.INITAL_BUCKET_CAPACITY_1;
  };
  protoOf(Companion_27).get_LOAD_FACTOR_9jqjbz_k$ = function () {
    return this.LOAD_FACTOR_1;
  };
  var Companion_instance_27;
  function Companion_getInstance_28() {
    if (Companion_instance_27 == null)
      new Companion_27();
    return Companion_instance_27;
  }
  function Array2DHashSet(comparator, initialCapacity, initialBucketCapacity) {
    Companion_getInstance_28();
    comparator = comparator === VOID ? null : comparator;
    initialCapacity = initialCapacity === VOID ? Companion_getInstance_28().INITAL_CAPACITY_1 : initialCapacity;
    initialBucketCapacity = initialBucketCapacity === VOID ? Companion_getInstance_28().INITAL_BUCKET_CAPACITY_1 : initialBucketCapacity;
    this.n_1 = 0;
    this.threshold_1 = numberToInt(Math_getInstance().floor_p3gvt2_k$(Companion_getInstance_28().INITAL_CAPACITY_1 * Companion_getInstance_28().LOAD_FACTOR_1));
    this.currentPrime_1 = 1;
    this.initialBucketCapacity_1 = Companion_getInstance_28().INITAL_BUCKET_CAPACITY_1;
    var comparator_0 = comparator;
    if (comparator_0 == null) {
      comparator_0 = Companion_getInstance_33().get_INSTANCE_9oh0gy_k$();
    }
    this.comparator_1 = comparator_0;
    var tmp = this;
    var tmp_0 = this.createBuckets_ikhi7p_k$(initialCapacity);
    tmp.buckets_1 = isArray(tmp_0) ? tmp_0 : THROW_CCE();
    this.initialBucketCapacity_1 = initialBucketCapacity;
  }
  protoOf(Array2DHashSet).remove_an8aut_k$ = function (element) {
    // Inline function 'kotlin.TODO' call
    var reason = 'not implemented';
    throw new NotImplementedError('An operation is not implemented: ' + reason);
  };
  protoOf(Array2DHashSet).remove_cedx0m_k$ = function (element) {
    if (!(element == null ? true : !(element == null)))
      return false;
    return this.remove_an8aut_k$((element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  protoOf(Array2DHashSet).containsAll_70schq_k$ = function (elements) {
    // Inline function 'kotlin.TODO' call
    var reason = 'not implemented';
    throw new NotImplementedError('An operation is not implemented: ' + reason);
  };
  protoOf(Array2DHashSet).containsAll_xk45sd_k$ = function (elements) {
    return this.containsAll_70schq_k$(elements);
  };
  protoOf(Array2DHashSet).retainAll_h3uasc_k$ = function (elements) {
    // Inline function 'kotlin.TODO' call
    var reason = 'not implemented';
    throw new NotImplementedError('An operation is not implemented: ' + reason);
  };
  protoOf(Array2DHashSet).retainAll_9fhiib_k$ = function (elements) {
    return this.retainAll_h3uasc_k$(elements);
  };
  protoOf(Array2DHashSet).get_comparator_y55d41_k$ = function () {
    return this.comparator_1;
  };
  protoOf(Array2DHashSet).set_buckets_i9ag32_k$ = function (_set____db54di) {
    this.buckets_1 = _set____db54di;
  };
  protoOf(Array2DHashSet).get_buckets_4zqin4_k$ = function () {
    return this.buckets_1;
  };
  protoOf(Array2DHashSet).set_n_timrh3_k$ = function (_set____db54di) {
    this.n_1 = _set____db54di;
  };
  protoOf(Array2DHashSet).get_n_1mhr5x_k$ = function () {
    return this.n_1;
  };
  protoOf(Array2DHashSet).set_threshold_ntl62i_k$ = function (_set____db54di) {
    this.threshold_1 = _set____db54di;
  };
  protoOf(Array2DHashSet).get_threshold_h1m4hq_k$ = function () {
    return this.threshold_1;
  };
  protoOf(Array2DHashSet).set_currentPrime_dwb36t_k$ = function (_set____db54di) {
    this.currentPrime_1 = _set____db54di;
  };
  protoOf(Array2DHashSet).get_currentPrime_sltznz_k$ = function () {
    return this.currentPrime_1;
  };
  protoOf(Array2DHashSet).set_initialBucketCapacity_pkui8z_k$ = function (_set____db54di) {
    this.initialBucketCapacity_1 = _set____db54di;
  };
  protoOf(Array2DHashSet).get_initialBucketCapacity_iam70h_k$ = function () {
    return this.initialBucketCapacity_1;
  };
  protoOf(Array2DHashSet).getOrAdd_yl23yf_k$ = function (o) {
    if (this.n_1 > this.threshold_1) {
      this.expand_dcpq9i_k$();
    }
    return this.getOrAddImpl_o06amf_k$(o);
  };
  protoOf(Array2DHashSet).getOrAddImpl_o06amf_k$ = function (o) {
    var b = this.getBucket_vrkpf3_k$(o);
    var bucket = this.buckets_1[b];
    if (bucket == null) {
      var tmp = this.createBucket_dydf2_k$(this.initialBucketCapacity_1);
      bucket = isArray(tmp) ? tmp : THROW_CCE();
      bucket[0] = o;
      this.buckets_1[b] = bucket;
      this.n_1 = this.n_1 + 1 | 0;
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
          this.n_1 = this.n_1 + 1 | 0;
          return o;
        }
        if (this.comparator_1.equals_dxlvsx_k$(existing, o))
          return existing;
      }
       while (inductionVariable <= last);
    var oldLength = bucket.length;
    var tmp_0 = copyOf(bucket, imul(bucket.length, 2));
    bucket = isArray(tmp_0) ? tmp_0 : THROW_CCE();
    this.buckets_1[b] = bucket;
    bucket[oldLength] = o;
    this.n_1 = this.n_1 + 1 | 0;
    return o;
  };
  protoOf(Array2DHashSet).get_2n9omo_k$ = function (o) {
    if (o == null)
      return o;
    var b = this.getBucket_vrkpf3_k$(o);
    var tmp0_elvis_lhs = this.buckets_1[b];
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
      if (e == null)
        return null;
      if (this.comparator_1.equals_dxlvsx_k$(e, o))
        return e;
    }
    return null;
  };
  protoOf(Array2DHashSet).getBucket_vrkpf3_k$ = function (o) {
    var hash = this.comparator_1.hashCode_fsgoms_k$(o);
    return hash & (this.buckets_1.length - 1 | 0);
  };
  protoOf(Array2DHashSet).hashCode = function () {
    var hash = MurmurHash_getInstance().initialize$default_ajr2pw_k$();
    var indexedObject = this.buckets_1;
    var inductionVariable = 0;
    var last = indexedObject.length;
    $l$loop: while (inductionVariable < last) {
      var bucket = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      if (bucket == null)
        continue $l$loop;
      var inductionVariable_0 = 0;
      var last_0 = bucket.length;
      $l$loop_0: while (inductionVariable_0 < last_0) {
        var o = bucket[inductionVariable_0];
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        if (o == null)
          break $l$loop_0;
        hash = MurmurHash_getInstance().update_65sxl5_k$(hash, this.comparator_1.hashCode_fsgoms_k$(o));
      }
    }
    hash = MurmurHash_getInstance().finish_sqfsk3_k$(hash, this.get_size_woubt6_k$());
    return hash;
  };
  protoOf(Array2DHashSet).equals = function (o) {
    if (o === this)
      return true;
    if (!(o instanceof Array2DHashSet))
      return false;
    var other = (o == null ? true : o instanceof Array2DHashSet) ? o : THROW_CCE();
    var tmp;
    if (!(ensureNotNull(other).get_size_woubt6_k$() === this.get_size_woubt6_k$())) {
      tmp = false;
    } else {
      // Inline function 'kotlin.collections.containsAll' call
      tmp = this.containsAll_xk45sd_k$(other);
    }
    return tmp;
  };
  protoOf(Array2DHashSet).expand_dcpq9i_k$ = function () {
    var old = this.buckets_1;
    this.currentPrime_1 = this.currentPrime_1 + 4 | 0;
    var newCapacity = imul(this.buckets_1.length, 2);
    var newTable = this.createBuckets_ikhi7p_k$(newCapacity);
    var newBucketLengths = new Int32Array(newTable.length);
    var tmp = this;
    tmp.buckets_1 = isArray(newTable) ? newTable : THROW_CCE();
    this.threshold_1 = numberToInt(newCapacity * Companion_getInstance_28().LOAD_FACTOR_1);
    var oldSize = this.get_size_woubt6_k$();
    var inductionVariable = 0;
    var last = old.length;
    $l$loop: while (inductionVariable < last) {
      var bucket = old[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      if (bucket == null) {
        continue $l$loop;
      }
      var inductionVariable_0 = 0;
      var last_0 = bucket.length;
      $l$loop_0: while (inductionVariable_0 < last_0) {
        var o = bucket[inductionVariable_0];
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        if (o == null) {
          break $l$loop_0;
        }
        var b = this.getBucket_vrkpf3_k$(o);
        var bucketLength = newBucketLengths[b];
        var newBucket;
        if (bucketLength === 0) {
          var tmp_0 = this.createBucket_dydf2_k$(this.initialBucketCapacity_1);
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
        newBucketLengths[b] = newBucketLengths[b] + 1 | 0;
      }
    }
    assert(this.n_1 === oldSize);
  };
  protoOf(Array2DHashSet).get_size_woubt6_k$ = function () {
    return this.n_1;
  };
  protoOf(Array2DHashSet).add_wl2rvy_k$ = function (t) {
    var existing = this.getOrAdd_yl23yf_k$(t);
    return existing === t;
  };
  protoOf(Array2DHashSet).add_utx5q5_k$ = function (element) {
    return this.add_wl2rvy_k$((element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  protoOf(Array2DHashSet).isEmpty_y1axqb_k$ = function () {
    return this.n_1 === 0;
  };
  protoOf(Array2DHashSet).contains_ccp5tc_k$ = function (element) {
    return this.containsFast_k8vknp_k$(element);
  };
  protoOf(Array2DHashSet).contains_aljjnj_k$ = function (element) {
    if (!(element == null ? true : !(element == null)))
      return false;
    return this.contains_ccp5tc_k$((element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  protoOf(Array2DHashSet).containsFast_k8vknp_k$ = function (obj) {
    var tmp;
    if (obj == null) {
      tmp = false;
    } else {
      tmp = !(this.get_2n9omo_k$(obj) == null);
    }
    return tmp;
  };
  protoOf(Array2DHashSet).iterator_jk1svi_k$ = function () {
    // Inline function 'kotlin.TODO' call
    throw new NotImplementedError();
  };
  protoOf(Array2DHashSet).toArray_jjyjqa_k$ = function () {
    var a = this.createBucket_dydf2_k$(this.get_size_woubt6_k$());
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
      var inductionVariable_0 = 0;
      var last_0 = bucket.length;
      $l$loop_0: while (inductionVariable_0 < last_0) {
        var o = bucket[inductionVariable_0];
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
  protoOf(Array2DHashSet).toArray_poetra_k$ = function (a) {
    var a_0 = a;
    if (a_0.length < this.get_size_woubt6_k$()) {
      var tmp = copyOf(a_0, this.get_size_woubt6_k$());
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
      var inductionVariable_0 = 0;
      var last_0 = bucket.length;
      $l$loop_0: while (inductionVariable_0 < last_0) {
        var o = bucket[inductionVariable_0];
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        if (o == null) {
          break $l$loop_0;
        }
        var targetElement = (o == null ? true : !(o == null)) ? o : THROW_CCE();
        var tmp_0 = a_0;
        var tmp2 = i;
        i = tmp2 + 1 | 0;
        tmp_0[tmp2] = targetElement;
      }
    }
    return a_0;
  };
  protoOf(Array2DHashSet).removeFast_spuo86_k$ = function (obj) {
    if (obj == null) {
      return false;
    }
    var b = this.getBucket_vrkpf3_k$(obj);
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
        if (this.comparator_1.equals_dxlvsx_k$(e, obj)) {
          // Inline function 'kotlin.TODO' call
          throw new NotImplementedError();
        }
      }
       while (inductionVariable <= last);
    return false;
  };
  protoOf(Array2DHashSet).addAll_v4m9z4_k$ = function (elements) {
    var changed = false;
    var tmp0_iterator = elements.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var o = tmp0_iterator.next_20eer_k$();
      var existing = this.getOrAdd_yl23yf_k$(o);
      if (!(existing === o))
        changed = true;
    }
    return changed;
  };
  protoOf(Array2DHashSet).addAll_4lagoh_k$ = function (elements) {
    return this.addAll_v4m9z4_k$(elements);
  };
  protoOf(Array2DHashSet).removeAll_7hnfer_k$ = function (elements) {
    // Inline function 'kotlin.TODO' call
    throw new NotImplementedError();
  };
  protoOf(Array2DHashSet).removeAll_y0z8pe_k$ = function (elements) {
    return this.removeAll_7hnfer_k$(elements);
  };
  protoOf(Array2DHashSet).clear_j9egeb_k$ = function () {
    var tmp = this;
    var tmp_0 = this.createBuckets_ikhi7p_k$(Companion_getInstance_28().INITAL_CAPACITY_1);
    tmp.buckets_1 = isArray(tmp_0) ? tmp_0 : THROW_CCE();
    this.n_1 = 0;
    this.threshold_1 = numberToInt(Math_getInstance().floor_p3gvt2_k$(Companion_getInstance_28().INITAL_CAPACITY_1 * Companion_getInstance_28().LOAD_FACTOR_1));
  };
  protoOf(Array2DHashSet).toString = function () {
    if (this.get_size_woubt6_k$() === 0)
      return '{}';
    var buf = StringBuilder_init_$Create$();
    buf.append_am5a4z_k$(_Char___init__impl__6a9atx(123));
    var first = true;
    var indexedObject = this.buckets_1;
    var inductionVariable = 0;
    var last = indexedObject.length;
    $l$loop: while (inductionVariable < last) {
      var bucket = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      if (bucket == null)
        continue $l$loop;
      var inductionVariable_0 = 0;
      var last_0 = bucket.length;
      $l$loop_0: while (inductionVariable_0 < last_0) {
        var o = bucket[inductionVariable_0];
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        if (o == null)
          break $l$loop_0;
        if (first)
          first = false;
        else {
          buf.append_22ad7x_k$(', ');
        }
        buf.append_22ad7x_k$(toString(o));
      }
    }
    buf.append_am5a4z_k$(_Char___init__impl__6a9atx(125));
    return buf.toString();
  };
  protoOf(Array2DHashSet).toTableString_9ue6t8_k$ = function () {
    var buf = StringBuilder_init_$Create$();
    var indexedObject = this.buckets_1;
    var inductionVariable = 0;
    var last = indexedObject.length;
    $l$loop: while (inductionVariable < last) {
      var bucket = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      if (bucket == null) {
        buf.append_22ad7x_k$('null\n');
        continue $l$loop;
      }
      buf.append_am5a4z_k$(_Char___init__impl__6a9atx(91));
      var first = true;
      var inductionVariable_0 = 0;
      var last_0 = bucket.length;
      while (inductionVariable_0 < last_0) {
        var o = bucket[inductionVariable_0];
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        if (first)
          first = false;
        else {
          buf.append_22ad7x_k$(' ');
        }
        if (o == null) {
          buf.append_22ad7x_k$('_');
        } else {
          buf.append_22ad7x_k$(toString(o));
        }
      }
      buf.append_22ad7x_k$(']\n');
    }
    return buf.toString();
  };
  protoOf(Array2DHashSet).asElementType_anvmbe_k$ = function (o) {
    return !(o == null) ? o : THROW_CCE();
  };
  protoOf(Array2DHashSet).createBuckets_ikhi7p_k$ = function (capacity) {
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp = fillArrayVal(Array(capacity), null);
    return isArray(tmp) ? tmp : THROW_CCE();
  };
  protoOf(Array2DHashSet).createBucket_dydf2_k$ = function (capacity) {
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp = fillArrayVal(Array(capacity), null);
    return isArray(tmp) ? tmp : THROW_CCE();
  };
  function DoubleKeyMap() {
    this.data_1 = LinkedHashMap_init_$Create$();
  }
  protoOf(DoubleKeyMap).set_data_o3wjp3_k$ = function (_set____db54di) {
    this.data_1 = _set____db54di;
  };
  protoOf(DoubleKeyMap).get_data_wokkxf_k$ = function () {
    return this.data_1;
  };
  protoOf(DoubleKeyMap).put_qhr7du_k$ = function (k1, k2, v) {
    var data2 = this.data_1.get_wei43m_k$(k1);
    var prev = null;
    if (data2 == null) {
      data2 = LinkedHashMap_init_$Create$();
      // Inline function 'kotlin.collections.set' call
      var this_0 = this.data_1;
      var value = data2;
      this_0.put_4fpzoq_k$(k1, value);
    } else {
      prev = data2.get_wei43m_k$(k2);
    }
    // Inline function 'kotlin.collections.set' call
    data2.put_4fpzoq_k$(k2, v);
    return prev;
  };
  protoOf(DoubleKeyMap).get_djz8cp_k$ = function (k1, k2) {
    var tmp0_elvis_lhs = this.data_1.get_wei43m_k$(k1);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return null;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var data2 = tmp;
    return data2.get_wei43m_k$(k2);
  };
  protoOf(DoubleKeyMap).get_1yyszt_k$ = function (k1) {
    return ensureNotNull(this.data_1.get_wei43m_k$(k1));
  };
  protoOf(DoubleKeyMap).values_pbcokr_k$ = function (k1) {
    var tmp0_elvis_lhs = this.data_1.get_wei43m_k$(k1);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return null;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var data2 = tmp;
    return data2.get_values_ksazhn_k$();
  };
  protoOf(DoubleKeyMap).keySet_irk8e5_k$ = function () {
    return this.data_1.get_keys_wop4xp_k$();
  };
  protoOf(DoubleKeyMap).keySet_63cs0m_k$ = function (k1) {
    var tmp0_elvis_lhs = this.data_1.get_wei43m_k$(k1);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return null;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var data2 = tmp;
    return data2.get_keys_wop4xp_k$();
  };
  function EqualityComparator() {
  }
  function createEntryListArray($this, length) {
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp = fillArrayVal(Array(length), null);
    return isArray(tmp) ? tmp : THROW_CCE();
  }
  function Entry(key, value) {
    this.key_1 = key;
    this.value_1 = value;
  }
  protoOf(Entry).get_key_18j28a_k$ = function () {
    return this.key_1;
  };
  protoOf(Entry).set_value_84k4y1_k$ = function (_set____db54di) {
    this.value_1 = _set____db54di;
  };
  protoOf(Entry).get_value_j01efc_k$ = function () {
    return this.value_1;
  };
  protoOf(Entry).toString = function () {
    return toString_1(this.key_1) + ':' + toString_1(this.value_1);
  };
  function Companion_28() {
    Companion_instance_28 = this;
    this.INITAL_CAPACITY_1 = 16;
    this.INITAL_BUCKET_CAPACITY_1 = 8;
    this.LOAD_FACTOR_1 = 0.75;
  }
  protoOf(Companion_28).get_INITAL_CAPACITY_3um2j9_k$ = function () {
    return this.INITAL_CAPACITY_1;
  };
  protoOf(Companion_28).get_INITAL_BUCKET_CAPACITY_gg70qc_k$ = function () {
    return this.INITAL_BUCKET_CAPACITY_1;
  };
  protoOf(Companion_28).get_LOAD_FACTOR_9jqjbz_k$ = function () {
    return this.LOAD_FACTOR_1;
  };
  var Companion_instance_28;
  function Companion_getInstance_29() {
    if (Companion_instance_28 == null)
      new Companion_28();
    return Companion_instance_28;
  }
  function FlexibleHashMap(comparator, initialCapacity, initialBucketCapacity) {
    Companion_getInstance_29();
    comparator = comparator === VOID ? null : comparator;
    initialCapacity = initialCapacity === VOID ? Companion_getInstance_29().INITAL_CAPACITY_1 : initialCapacity;
    initialBucketCapacity = initialBucketCapacity === VOID ? Companion_getInstance_29().INITAL_BUCKET_CAPACITY_1 : initialBucketCapacity;
    this.n_1 = 0;
    this.size_1 = this.n_1;
    this.threshold_1 = numberToInt(Companion_getInstance_29().INITAL_CAPACITY_1 * Companion_getInstance_29().LOAD_FACTOR_1);
    this.currentPrime_1 = 1;
    this.initialBucketCapacity_1 = Companion_getInstance_29().INITAL_BUCKET_CAPACITY_1;
    var comparator_0 = comparator;
    if (comparator_0 == null) {
      comparator_0 = Companion_getInstance_33().get_INSTANCE_9oh0gy_k$();
    }
    this.comparator_1 = comparator_0;
    this.buckets_1 = createEntryListArray(Companion_getInstance_29(), initialBucketCapacity);
    this.initialBucketCapacity_1 = initialBucketCapacity;
  }
  protoOf(FlexibleHashMap).get_keys_wop4xp_k$ = function () {
    // Inline function 'kotlin.collections.flatMap' call
    // Inline function 'kotlin.collections.flatMapTo' call
    var this_0 = filterNotNull(this.buckets_1);
    var destination = ArrayList_init_$Create$_0();
    var tmp0_iterator = this_0.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var element = tmp0_iterator.next_20eer_k$();
      // Inline function 'org.antlr.v4.kotlinruntime.misc.FlexibleHashMap.<get-keys>.<anonymous>' call
      // Inline function 'kotlin.collections.map' call
      var this_1 = filterNotNull_0(element);
      // Inline function 'kotlin.collections.mapTo' call
      var destination_0 = ArrayList_init_$Create$(collectionSizeOrDefault(this_1, 10));
      var tmp0_iterator_0 = this_1.iterator_jk1svi_k$();
      while (tmp0_iterator_0.hasNext_bitz1p_k$()) {
        var item = tmp0_iterator_0.next_20eer_k$();
        // Inline function 'org.antlr.v4.kotlinruntime.misc.FlexibleHashMap.<get-keys>.<anonymous>.<anonymous>' call
        var tmp$ret$0 = item.key_1;
        destination_0.add_utx5q5_k$(tmp$ret$0);
      }
      var list = destination_0;
      addAll(destination, list);
    }
    return toMutableSet(destination);
  };
  protoOf(FlexibleHashMap).get_values_ksazhn_k$ = function () {
    // Inline function 'kotlin.collections.flatMap' call
    // Inline function 'kotlin.collections.flatMapTo' call
    var this_0 = filterNotNull(this.buckets_1);
    var destination = ArrayList_init_$Create$_0();
    var tmp0_iterator = this_0.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var element = tmp0_iterator.next_20eer_k$();
      // Inline function 'org.antlr.v4.kotlinruntime.misc.FlexibleHashMap.<get-values>.<anonymous>' call
      // Inline function 'kotlin.collections.map' call
      var this_1 = filterNotNull_0(element);
      // Inline function 'kotlin.collections.mapTo' call
      var destination_0 = ArrayList_init_$Create$(collectionSizeOrDefault(this_1, 10));
      var tmp0_iterator_0 = this_1.iterator_jk1svi_k$();
      while (tmp0_iterator_0.hasNext_bitz1p_k$()) {
        var item = tmp0_iterator_0.next_20eer_k$();
        // Inline function 'org.antlr.v4.kotlinruntime.misc.FlexibleHashMap.<get-values>.<anonymous>.<anonymous>' call
        var tmp$ret$0 = item.value_1;
        destination_0.add_utx5q5_k$(tmp$ret$0);
      }
      var list = destination_0;
      addAll(destination, list);
    }
    return toMutableList(destination);
  };
  protoOf(FlexibleHashMap).get_entries_p20ztl_k$ = function () {
    var reason = 'not implemented';
    throw new NotImplementedError('An operation is not implemented: ' + reason);
  };
  protoOf(FlexibleHashMap).get_comparator_y55d41_k$ = function () {
    return this.comparator_1;
  };
  protoOf(FlexibleHashMap).set_buckets_cdtnj1_k$ = function (_set____db54di) {
    this.buckets_1 = _set____db54di;
  };
  protoOf(FlexibleHashMap).get_buckets_4zqin4_k$ = function () {
    return this.buckets_1;
  };
  protoOf(FlexibleHashMap).set_n_timrh3_k$ = function (_set____db54di) {
    this.n_1 = _set____db54di;
  };
  protoOf(FlexibleHashMap).get_n_1mhr5x_k$ = function () {
    return this.n_1;
  };
  protoOf(FlexibleHashMap).get_size_woubt6_k$ = function () {
    return this.size_1;
  };
  protoOf(FlexibleHashMap).set_threshold_ntl62i_k$ = function (_set____db54di) {
    this.threshold_1 = _set____db54di;
  };
  protoOf(FlexibleHashMap).get_threshold_h1m4hq_k$ = function () {
    return this.threshold_1;
  };
  protoOf(FlexibleHashMap).set_currentPrime_dwb36t_k$ = function (_set____db54di) {
    this.currentPrime_1 = _set____db54di;
  };
  protoOf(FlexibleHashMap).get_currentPrime_sltznz_k$ = function () {
    return this.currentPrime_1;
  };
  protoOf(FlexibleHashMap).set_initialBucketCapacity_pkui8z_k$ = function (_set____db54di) {
    this.initialBucketCapacity_1 = _set____db54di;
  };
  protoOf(FlexibleHashMap).get_initialBucketCapacity_iam70h_k$ = function () {
    return this.initialBucketCapacity_1;
  };
  protoOf(FlexibleHashMap).getBucket_bwl3go_k$ = function (key) {
    var hash = this.comparator_1.hashCode_fsgoms_k$(key);
    return hash & (this.buckets_1.length - 1 | 0);
  };
  protoOf(FlexibleHashMap).get_wei43m_k$ = function (key) {
    if (key == null)
      return null;
    var b = this.getBucket_bwl3go_k$(key);
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
      if (this.comparator_1.equals_dxlvsx_k$(e == null ? null : e.key_1, key)) {
        return e == null ? null : e.value_1;
      }
    }
    return null;
  };
  protoOf(FlexibleHashMap).put_4fpzoq_k$ = function (key, value) {
    if (key == null)
      return null;
    if (this.n_1 > this.threshold_1) {
      this.expand_dcpq9i_k$();
    }
    var b = this.getBucket_bwl3go_k$(key);
    var existingBucket = this.buckets_1[b];
    var tmp;
    if (!(existingBucket == null)) {
      tmp = existingBucket;
    } else {
      var tmp_0 = this.buckets_1;
      // Inline function 'kotlin.collections.mutableListOf' call
      tmp_0[b] = ArrayList_init_$Create$_0();
      tmp = ensureNotNull(this.buckets_1[b]);
    }
    var bucket = tmp;
    var tmp0_iterator = bucket.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var e = tmp0_iterator.next_20eer_k$();
      if (this.comparator_1.equals_dxlvsx_k$(e == null ? null : e.key_1, key)) {
        var prev = e == null ? null : e.value_1;
        if (e != null)
          e.value_1 = value;
        this.n_1 = this.n_1 + 1 | 0;
        return prev;
      }
    }
    bucket.add_utx5q5_k$(new Entry(key, value));
    this.n_1 = this.n_1 + 1 | 0;
    return null;
  };
  protoOf(FlexibleHashMap).remove_gppy8k_k$ = function (key) {
    throw UnsupportedOperationException_init_$Create$_0();
  };
  protoOf(FlexibleHashMap).putAll_wgg6cj_k$ = function (from) {
    throw UnsupportedOperationException_init_$Create$_0();
  };
  protoOf(FlexibleHashMap).containsKey_aw81wo_k$ = function (key) {
    return !(this.get_wei43m_k$(key) == null);
  };
  protoOf(FlexibleHashMap).containsValue_yf2ykl_k$ = function (value) {
    throw UnsupportedOperationException_init_$Create$_0();
  };
  protoOf(FlexibleHashMap).hashCode = function () {
    var hash = MurmurHash_getInstance().initialize$default_ajr2pw_k$();
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
        hash = MurmurHash_getInstance().update_65sxl5_k$(hash, this.comparator_1.hashCode_fsgoms_k$(e.key_1));
      }
    }
    hash = MurmurHash_getInstance().finish_sqfsk3_k$(hash, this.get_size_woubt6_k$());
    return hash;
  };
  protoOf(FlexibleHashMap).equals = function (o) {
    throw UnsupportedOperationException_init_$Create$_0();
  };
  protoOf(FlexibleHashMap).expand_dcpq9i_k$ = function () {
    var old = this.buckets_1;
    var newCapacity = imul(this.buckets_1.length, 2);
    var newTable = createEntryListArray(Companion_getInstance_29(), newCapacity);
    this.buckets_1 = newTable;
    this.threshold_1 = numberToInt(newCapacity * Companion_getInstance_29().LOAD_FACTOR_1);
    var oldSize = this.get_size_woubt6_k$();
    var inductionVariable = 0;
    var last = old.length;
    $l$loop: while (inductionVariable < last) {
      var bucket = old[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      if (bucket == null)
        continue $l$loop;
      var tmp1_iterator = bucket.iterator_jk1svi_k$();
      $l$loop_0: while (tmp1_iterator.hasNext_bitz1p_k$()) {
        var e = tmp1_iterator.next_20eer_k$();
        if (e == null)
          break $l$loop_0;
        this.put_4fpzoq_k$(e.key_1, e.value_1);
      }
    }
    this.n_1 = oldSize;
  };
  protoOf(FlexibleHashMap).isEmpty_y1axqb_k$ = function () {
    return this.n_1 === 0;
  };
  protoOf(FlexibleHashMap).clear_j9egeb_k$ = function () {
    this.buckets_1 = createEntryListArray(Companion_getInstance_29(), Companion_getInstance_29().INITAL_CAPACITY_1);
    this.n_1 = 0;
  };
  protoOf(FlexibleHashMap).toString = function () {
    if (this.get_size_woubt6_k$() === 0)
      return '{}';
    var buf = StringBuilder_init_$Create$();
    buf.append_am5a4z_k$(_Char___init__impl__6a9atx(123));
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
          buf.append_22ad7x_k$(', ');
        }
        buf.append_22ad7x_k$(e.toString());
      }
    }
    buf.append_am5a4z_k$(_Char___init__impl__6a9atx(125));
    return buf.toString();
  };
  protoOf(FlexibleHashMap).toTableString_9ue6t8_k$ = function () {
    var buf = StringBuilder_init_$Create$();
    var indexedObject = this.buckets_1;
    var inductionVariable = 0;
    var last = indexedObject.length;
    $l$loop: while (inductionVariable < last) {
      var bucket = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      if (bucket == null) {
        buf.append_22ad7x_k$('null\n');
        continue $l$loop;
      }
      buf.append_am5a4z_k$(_Char___init__impl__6a9atx(91));
      var first = true;
      var tmp1_iterator = bucket.iterator_jk1svi_k$();
      while (tmp1_iterator.hasNext_bitz1p_k$()) {
        var e = tmp1_iterator.next_20eer_k$();
        if (first)
          first = false;
        else {
          buf.append_22ad7x_k$(' ');
        }
        if (e == null) {
          buf.append_22ad7x_k$('_');
        } else {
          buf.append_22ad7x_k$(e.toString());
        }
      }
      buf.append_22ad7x_k$(']\n');
    }
    return buf.toString();
  };
  function IntSet() {
  }
  function _get_EMPTY_DATA__qh2d0x($this) {
    return $this.EMPTY_DATA_1;
  }
  function _get_INITIAL_SIZE__5iakc1($this) {
    return $this.INITIAL_SIZE_1;
  }
  function _get_MAX_ARRAY_SIZE__1ta7kn($this) {
    return $this.MAX_ARRAY_SIZE_1;
  }
  function _set__data__b2fye4($this, _set____db54di) {
    $this._data_1 = _set____db54di;
  }
  function _get__data__kyoi3c($this) {
    return $this._data_1;
  }
  function _set__size__bau3qd($this, _set____db54di) {
    $this._size_1 = _set____db54di;
  }
  function _get__size__kqacr3($this) {
    return $this._size_1;
  }
  function IntegerList_init_$Init$($this) {
    IntegerList.call($this);
    $this._data_1 = Companion_getInstance_30().EMPTY_DATA_1;
    return $this;
  }
  function IntegerList_init_$Create$() {
    return IntegerList_init_$Init$(objectCreate(protoOf(IntegerList)));
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
    return IntegerList_init_$Init$_0(capacity, objectCreate(protoOf(IntegerList)));
  }
  function IntegerList_init_$Init$_1(list, $this) {
    IntegerList.call($this);
    var tmp = $this;
    // Inline function 'kotlin.collections.copyOf' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp._data_1 = ensureNotNull(list._data_1).slice();
    $this._size_1 = list._size_1;
    return $this;
  }
  function IntegerList_init_$Create$_1(list) {
    return IntegerList_init_$Init$_1(list, objectCreate(protoOf(IntegerList)));
  }
  function IntegerList_init_$Init$_2(list, $this) {
    IntegerList_init_$Init$_0(list.get_size_woubt6_k$(), $this);
    var tmp0_iterator = list.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var value = tmp0_iterator.next_20eer_k$();
      $this.add_c9dakn_k$(value);
    }
    return $this;
  }
  function IntegerList_init_$Create$_2(list) {
    return IntegerList_init_$Init$_2(list, objectCreate(protoOf(IntegerList)));
  }
  function ensureCapacity($this, capacity) {
    if (capacity < 0 ? true : capacity > Companion_getInstance_30().MAX_ARRAY_SIZE_1) {
      throw RuntimeException_init_$Create$();
    }
    var newLength;
    var tmp;
    // Inline function 'kotlin.collections.isEmpty' call
    if (ensureNotNull($this._data_1).length === 0) {
      tmp = Companion_getInstance_30().INITIAL_SIZE_1;
    } else {
      tmp = ensureNotNull($this._data_1).length;
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
  var Companion_instance_29;
  function Companion_getInstance_30() {
    if (Companion_instance_29 == null)
      new Companion_29();
    return Companion_instance_29;
  }
  protoOf(IntegerList).get_isEmpty_zauvru_k$ = function () {
    return this._size_1 === 0;
  };
  protoOf(IntegerList).add_c9dakn_k$ = function (value) {
    if (ensureNotNull(this._data_1).length === this._size_1) {
      ensureCapacity(this, this._size_1 + 1 | 0);
    }
    ensureNotNull(this._data_1)[this._size_1] = value;
    this._size_1 = this._size_1 + 1 | 0;
  };
  protoOf(IntegerList).addAll_3cme1n_k$ = function (array) {
    ensureCapacity(this, this._size_1 + array.length | 0);
    Arrays_getInstance();
    arraycopy(array, 0, ensureNotNull(this._data_1), this._size_1, array.length);
    this._size_1 = this._size_1 + array.length | 0;
  };
  protoOf(IntegerList).addAll_bga4zn_k$ = function (list) {
    ensureCapacity(this, this._size_1 + list._size_1 | 0);
    arraycopy(ensureNotNull(list._data_1), 0, ensureNotNull(this._data_1), this._size_1, list._size_1);
    this._size_1 = this._size_1 + list._size_1 | 0;
  };
  protoOf(IntegerList).addAll_9c59q0_k$ = function (list) {
    ensureCapacity(this, this._size_1 + list.get_size_woubt6_k$() | 0);
    // Inline function 'kotlin.collections.forEachIndexed' call
    var index = 0;
    var tmp0_iterator = list.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var item = tmp0_iterator.next_20eer_k$();
      // Inline function 'org.antlr.v4.kotlinruntime.misc.IntegerList.addAll.<anonymous>' call
      var tmp1 = index;
      index = tmp1 + 1 | 0;
      var index_0 = checkIndexOverflow(tmp1);
      ensureNotNull(this._data_1)[this._size_1 + index_0 | 0] = item;
    }
    this._size_1 = this._size_1 + list.get_size_woubt6_k$() | 0;
  };
  protoOf(IntegerList).get_c1px32_k$ = function (index) {
    if (index < 0 ? true : index >= this._size_1) {
      throw IndexOutOfBoundsException_init_$Create$_0();
    }
    return ensureNotNull(this._data_1)[index];
  };
  protoOf(IntegerList).contains_7q95ev_k$ = function (value) {
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
  protoOf(IntegerList).set_tq3pjy_k$ = function (index, value) {
    if (index < 0 ? true : index >= this._size_1) {
      throw IndexOutOfBoundsException_init_$Create$_0();
    }
    var previous = ensureNotNull(this._data_1)[index];
    ensureNotNull(this._data_1)[index] = value;
    return previous;
  };
  protoOf(IntegerList).removeAt_6niowx_k$ = function (index) {
    var value = this.get_c1px32_k$(index);
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
    this._size_1 = this._size_1 - 1 | 0;
    return value;
  };
  protoOf(IntegerList).removeRange_sm1kzt_k$ = function (fromIndex, toIndex) {
    if (((fromIndex < 0 ? true : toIndex < 0) ? true : fromIndex > this._size_1) ? true : toIndex > this._size_1) {
      throw IndexOutOfBoundsException_init_$Create$_0();
    }
    if (fromIndex > toIndex) {
      throw IllegalArgumentException_init_$Create$_0();
    }
    arraycopy(ensureNotNull(this._data_1), toIndex, ensureNotNull(this._data_1), fromIndex, this._size_1 - toIndex | 0);
    this._size_1 = this._size_1 - (toIndex - fromIndex | 0) | 0;
  };
  protoOf(IntegerList).size_23och_k$ = function () {
    return this._size_1;
  };
  protoOf(IntegerList).trimToSize_dmxq0i_k$ = function () {
    if (ensureNotNull(this._data_1).length === this._size_1) {
      return Unit_getInstance();
    }
    this._data_1 = copyOf_1(ensureNotNull(this._data_1), this._size_1);
  };
  protoOf(IntegerList).clear_j9egeb_k$ = function () {
    this._size_1 = 0;
  };
  protoOf(IntegerList).toArray_jjyjqa_k$ = function () {
    var tmp;
    if (this._size_1 === 0) {
      tmp = Companion_getInstance_30().EMPTY_DATA_1;
    } else {
      // Inline function 'kotlin.collections.copyOf' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp = ensureNotNull(this._data_1).slice();
    }
    return tmp;
  };
  protoOf(IntegerList).sort_6ihik2_k$ = function () {
    sort(ensureNotNull(this._data_1));
  };
  protoOf(IntegerList).equals = function (o) {
    if (o === this) {
      return true;
    }
    if (!(o instanceof IntegerList)) {
      return false;
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
  protoOf(IntegerList).hashCode = function () {
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
  protoOf(IntegerList).toString = function () {
    return joinToString_1(this.toArray_jjyjqa_k$());
  };
  protoOf(IntegerList).binarySearch_drf1gv_k$ = function (key) {
    return indexOf(ensureNotNull(this._data_1), key);
  };
  protoOf(IntegerList).binarySearch_kowp2n_k$ = function (fromIndex, toIndex, key) {
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
  protoOf(IntegerList).toCharArray_f3k0vc_k$ = function () {
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
  function IntegerStack_init_$Init$($this) {
    IntegerList_init_$Init$($this);
    IntegerStack.call($this);
    return $this;
  }
  function IntegerStack_init_$Create$() {
    return IntegerStack_init_$Init$(objectCreate(protoOf(IntegerStack)));
  }
  function IntegerStack_init_$Init$_0(capacity, $this) {
    IntegerList_init_$Init$_0(capacity, $this);
    IntegerStack.call($this);
    return $this;
  }
  function IntegerStack_init_$Create$_0(capacity) {
    return IntegerStack_init_$Init$_0(capacity, objectCreate(protoOf(IntegerStack)));
  }
  function IntegerStack_init_$Init$_1(list, $this) {
    IntegerList_init_$Init$_1(list, $this);
    IntegerStack.call($this);
    return $this;
  }
  function IntegerStack_init_$Create$_1(list) {
    return IntegerStack_init_$Init$_1(list, objectCreate(protoOf(IntegerStack)));
  }
  protoOf(IntegerStack).push_w5xqdu_k$ = function (value) {
    this.add_c9dakn_k$(value);
  };
  protoOf(IntegerStack).pop_2dsh_k$ = function () {
    return this.removeAt_6niowx_k$(this.size_23och_k$() - 1 | 0);
  };
  protoOf(IntegerStack).peek_21nx7_k$ = function () {
    return this.get_c1px32_k$(this.size_23och_k$() - 1 | 0);
  };
  function IntegerStack() {
  }
  function Companion_30() {
    Companion_instance_30 = this;
    this.INTERVAL_POOL_MAX_VALUE_1 = 1000;
    this.INVALID_1 = new Interval(-1, -2);
    var tmp = this;
    // Inline function 'kotlin.arrayOfNulls' call
    var size = this.INTERVAL_POOL_MAX_VALUE_1 + 1 | 0;
    tmp.cache_1 = fillArrayVal(Array(size), null);
    this.creates_1 = 0;
    this.misses_1 = 0;
    this.hits_1 = 0;
    this.outOfRange_1 = 0;
  }
  protoOf(Companion_30).get_INTERVAL_POOL_MAX_VALUE_ay6lmk_k$ = function () {
    return this.INTERVAL_POOL_MAX_VALUE_1;
  };
  protoOf(Companion_30).get_INVALID_pha976_k$ = function () {
    return this.INVALID_1;
  };
  protoOf(Companion_30).set_cache_9qwdgy_k$ = function (_set____db54di) {
    this.cache_1 = _set____db54di;
  };
  protoOf(Companion_30).get_cache_ipl461_k$ = function () {
    return this.cache_1;
  };
  protoOf(Companion_30).set_creates_3q40i_k$ = function (_set____db54di) {
    this.creates_1 = _set____db54di;
  };
  protoOf(Companion_30).get_creates_i9xfri_k$ = function () {
    return this.creates_1;
  };
  protoOf(Companion_30).set_misses_2pl9j5_k$ = function (_set____db54di) {
    this.misses_1 = _set____db54di;
  };
  protoOf(Companion_30).get_misses_gnf643_k$ = function () {
    return this.misses_1;
  };
  protoOf(Companion_30).set_hits_2yd42z_k$ = function (_set____db54di) {
    this.hits_1 = _set____db54di;
  };
  protoOf(Companion_30).get_hits_wonatl_k$ = function () {
    return this.hits_1;
  };
  protoOf(Companion_30).set_outOfRange_ssaj5f_k$ = function (_set____db54di) {
    this.outOfRange_1 = _set____db54di;
  };
  protoOf(Companion_30).get_outOfRange_z0zuv5_k$ = function () {
    return this.outOfRange_1;
  };
  protoOf(Companion_30).of_doci3b_k$ = function (a, b) {
    if ((!(a === b) ? true : a < 0) ? true : a > this.INTERVAL_POOL_MAX_VALUE_1) {
      return new Interval(a, b);
    }
    if (this.cache_1[a] == null) {
      this.cache_1[a] = new Interval(a, a);
    }
    return ensureNotNull(this.cache_1[a]);
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
  protoOf(Interval).set_a_e9iw8s_k$ = function (_set____db54di) {
    this.a_1 = _set____db54di;
  };
  protoOf(Interval).get_a_1mhr5k_k$ = function () {
    return this.a_1;
  };
  protoOf(Interval).set_b_lvx99f_k$ = function (_set____db54di) {
    this.b_1 = _set____db54di;
  };
  protoOf(Interval).get_b_1mhr5l_k$ = function () {
    return this.b_1;
  };
  protoOf(Interval).length_iap7oa_k$ = function () {
    return this.b_1 < this.a_1 ? 0 : (this.b_1 - this.a_1 | 0) + 1 | 0;
  };
  protoOf(Interval).equals = function (o) {
    var tmp;
    if (o == null) {
      tmp = true;
    } else {
      tmp = !(o instanceof Interval);
    }
    if (tmp) {
      return false;
    }
    var other = (o == null ? true : o instanceof Interval) ? o : THROW_CCE();
    return this.a_1 === ensureNotNull(other).a_1 ? this.b_1 === other.b_1 : false;
  };
  protoOf(Interval).hashCode = function () {
    var hash = 23;
    hash = imul(hash, 31) + this.a_1 | 0;
    hash = imul(hash, 31) + this.b_1 | 0;
    return hash;
  };
  protoOf(Interval).startsBeforeDisjoint_tsfun0_k$ = function (other) {
    return this.a_1 < other.a_1 ? this.b_1 < other.a_1 : false;
  };
  protoOf(Interval).startsBeforeNonDisjoint_oe0du7_k$ = function (other) {
    return this.a_1 <= other.a_1 ? this.b_1 >= other.a_1 : false;
  };
  protoOf(Interval).startsAfter_plz0il_k$ = function (other) {
    return this.a_1 > other.a_1;
  };
  protoOf(Interval).startsAfterDisjoint_61x0fz_k$ = function (other) {
    return this.a_1 > other.b_1;
  };
  protoOf(Interval).startsAfterNonDisjoint_phfk22_k$ = function (other) {
    return this.a_1 > other.a_1 ? this.a_1 <= other.b_1 : false;
  };
  protoOf(Interval).disjoint_nxcfu4_k$ = function (other) {
    return this.startsBeforeDisjoint_tsfun0_k$(other) ? true : this.startsAfterDisjoint_61x0fz_k$(other);
  };
  protoOf(Interval).adjacent_kguz4q_k$ = function (other) {
    return this.a_1 === (other.b_1 + 1 | 0) ? true : this.b_1 === (other.a_1 - 1 | 0);
  };
  protoOf(Interval).properlyContains_jmhs5o_k$ = function (other) {
    return other.a_1 >= this.a_1 ? other.b_1 <= this.b_1 : false;
  };
  protoOf(Interval).union_vlrno9_k$ = function (other) {
    return Companion_getInstance_31().of_doci3b_k$(Math_getInstance().min_i3c4dq_k$(this.a_1, other.a_1), Math_getInstance().max_rlhb38_k$(this.b_1, other.b_1));
  };
  protoOf(Interval).intersection_3bq5sv_k$ = function (other) {
    return Companion_getInstance_31().of_doci3b_k$(Math_getInstance().max_rlhb38_k$(this.a_1, other.a_1), Math_getInstance().min_i3c4dq_k$(this.b_1, other.b_1));
  };
  protoOf(Interval).differenceNotProperlyContained_jmse4o_k$ = function (other) {
    var diff = null;
    if (other.startsBeforeNonDisjoint_oe0du7_k$(this)) {
      diff = Companion_getInstance_31().of_doci3b_k$(Math_getInstance().max_rlhb38_k$(this.a_1, other.b_1 + 1 | 0), this.b_1);
    } else if (other.startsAfterNonDisjoint_phfk22_k$(this)) {
      diff = Companion_getInstance_31().of_doci3b_k$(this.a_1, other.a_1 - 1 | 0);
    }
    return diff;
  };
  protoOf(Interval).toString = function () {
    return this.a_1.toString() + '..' + this.b_1;
  };
  function IntervalSet_init_$Init$(intervals, $this) {
    IntervalSet.call($this);
    $this.intervals_1 = intervals;
    return $this;
  }
  function IntervalSet_init_$Create$(intervals) {
    return IntervalSet_init_$Init$(intervals, objectCreate(protoOf(IntervalSet)));
  }
  function IntervalSet_init_$Init$_0(set, $this) {
    IntervalSet_init_$Init$_1(new Int32Array([]), $this);
    $this.addAll_jvk865_k$(set);
    return $this;
  }
  function IntervalSet_init_$Create$_0(set) {
    return IntervalSet_init_$Init$_0(set, objectCreate(protoOf(IntervalSet)));
  }
  function IntervalSet_init_$Init$_1(els, $this) {
    IntervalSet.call($this);
    if (els == null) {
      $this.intervals_1 = ArrayList_init_$Create$(2);
    } else {
      $this.intervals_1 = ArrayList_init_$Create$(els.length);
      var inductionVariable = 0;
      var last = els.length;
      while (inductionVariable < last) {
        var e = els[inductionVariable];
        inductionVariable = inductionVariable + 1 | 0;
        $this.add_c9dakn_k$(e);
      }
    }
    return $this;
  }
  function IntervalSet_init_$Create$_1(els) {
    return IntervalSet_init_$Init$_1(els, objectCreate(protoOf(IntervalSet)));
  }
  function Companion_31() {
    Companion_instance_31 = this;
    this.COMPLETE_CHAR_SET_1 = Companion_getInstance_32().of_doci3b_k$(Companion_getInstance_4().get_MIN_CHAR_VALUE_qqe4ki_k$(), Companion_getInstance_4().get_MAX_CHAR_VALUE_xflxqk_k$());
    this.COMPLETE_CHAR_SET_1.set_isReadonly_qjm26s_k$(true);
    this.EMPTY_SET_1 = IntervalSet_init_$Create$_1(new Int32Array([]));
    this.EMPTY_SET_1.set_isReadonly_qjm26s_k$(true);
  }
  protoOf(Companion_31).get_COMPLETE_CHAR_SET_2zz52u_k$ = function () {
    return this.COMPLETE_CHAR_SET_1;
  };
  protoOf(Companion_31).get_EMPTY_SET_v4xton_k$ = function () {
    return this.EMPTY_SET_1;
  };
  protoOf(Companion_31).of_xanmn3_k$ = function (a) {
    var s = IntervalSet_init_$Create$_1(new Int32Array([]));
    s.add_c9dakn_k$(a);
    return s;
  };
  protoOf(Companion_31).of_doci3b_k$ = function (a, b) {
    var s = IntervalSet_init_$Create$_1(new Int32Array([]));
    s.add_6jazo1_k$(a, b);
    return s;
  };
  protoOf(Companion_31).or_4hanqx_k$ = function (sets) {
    var r = IntervalSet_init_$Create$_1(new Int32Array([]));
    var inductionVariable = 0;
    var last = sets.length;
    while (inductionVariable < last) {
      var s = sets[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      r.addAll_jvk865_k$(s);
    }
    return r;
  };
  protoOf(Companion_31).subtract_adxatc_k$ = function (left, right) {
    if (left == null ? true : left.get_isNil_it6xy6_k$()) {
      return IntervalSet_init_$Create$_1(new Int32Array([]));
    }
    var result = IntervalSet_init_$Create$_0(left);
    if (right == null ? true : right.get_isNil_it6xy6_k$()) {
      return result;
    }
    var resultI = 0;
    var rightI = 0;
    $l$loop_4: while (resultI < ensureNotNull(result.intervals_1).get_size_woubt6_k$() ? rightI < ensureNotNull(right.intervals_1).get_size_woubt6_k$() : false) {
      var resultInterval = ensureNotNull(result.intervals_1).get_c1px32_k$(resultI);
      var rightInterval = ensureNotNull(right.intervals_1).get_c1px32_k$(rightI);
      if (rightInterval.get_b_1mhr5l_k$() < resultInterval.get_a_1mhr5k_k$()) {
        rightI = rightI + 1 | 0;
        continue $l$loop_4;
      }
      if (rightInterval.get_a_1mhr5k_k$() > resultInterval.get_b_1mhr5l_k$()) {
        resultI = resultI + 1 | 0;
        continue $l$loop_4;
      }
      var beforeCurrent = null;
      var afterCurrent = null;
      if (rightInterval.get_a_1mhr5k_k$() > resultInterval.get_a_1mhr5k_k$()) {
        beforeCurrent = new Interval(resultInterval.get_a_1mhr5k_k$(), rightInterval.get_a_1mhr5k_k$() - 1 | 0);
      }
      if (rightInterval.get_b_1mhr5l_k$() < resultInterval.get_b_1mhr5l_k$()) {
        afterCurrent = new Interval(rightInterval.get_b_1mhr5l_k$() + 1 | 0, resultInterval.get_b_1mhr5l_k$());
      }
      if (!(beforeCurrent == null)) {
        if (!(afterCurrent == null)) {
          ensureNotNull(result.intervals_1).set_82063s_k$(resultI, beforeCurrent);
          ensureNotNull(result.intervals_1).add_dl6gt3_k$(resultI + 1 | 0, afterCurrent);
          resultI = resultI + 1 | 0;
          rightI = rightI + 1 | 0;
          continue $l$loop_4;
        } else {
          ensureNotNull(result.intervals_1).set_82063s_k$(resultI, beforeCurrent);
          resultI = resultI + 1 | 0;
          continue $l$loop_4;
        }
      } else {
        if (!(afterCurrent == null)) {
          ensureNotNull(result.intervals_1).set_82063s_k$(resultI, afterCurrent);
          rightI = rightI + 1 | 0;
          continue $l$loop_4;
        } else {
          ensureNotNull(result.intervals_1).removeAt_6niowx_k$(resultI);
          continue $l$loop_4;
        }
      }
    }
    return result;
  };
  var Companion_instance_31;
  function Companion_getInstance_32() {
    if (Companion_instance_31 == null)
      new Companion_31();
    return Companion_instance_31;
  }
  protoOf(IntervalSet).set_intervals_b0q8gj_k$ = function (_set____db54di) {
    this.intervals_1 = _set____db54di;
  };
  protoOf(IntervalSet).get_intervals_gu2011_k$ = function () {
    return this.intervals_1;
  };
  protoOf(IntervalSet).get_isNil_it6xy6_k$ = function () {
    return this.intervals_1 == null ? true : ensureNotNull(this.intervals_1).isEmpty_y1axqb_k$();
  };
  protoOf(IntervalSet).get_maxElement_s9bwjj_k$ = function () {
    if (this.get_isNil_it6xy6_k$()) {
      throw RuntimeException_init_$Create$_0('set is empty');
    }
    var last = ensureNotNull(this.intervals_1).get_c1px32_k$(ensureNotNull(this.intervals_1).get_size_woubt6_k$() - 1 | 0);
    return last.get_b_1mhr5l_k$();
  };
  protoOf(IntervalSet).get_minElement_cmfmc3_k$ = function () {
    if (this.get_isNil_it6xy6_k$()) {
      throw RuntimeException_init_$Create$_0('set is empty');
    }
    return ensureNotNull(this.intervals_1).get_c1px32_k$(0).get_a_1mhr5k_k$();
  };
  protoOf(IntervalSet).set_isReadonly_qjm26s_k$ = function (readonly) {
    if (this.isReadonly_1 ? !readonly : false)
      throw IllegalStateException_init_$Create$("can't alter readonly IntervalSet");
    this.isReadonly_1 = readonly;
  };
  protoOf(IntervalSet).get_isReadonly_nejehh_k$ = function () {
    return this.isReadonly_1;
  };
  protoOf(IntervalSet).clear_j9egeb_k$ = function () {
    if (this.isReadonly_1)
      throw IllegalStateException_init_$Create$("can't alter readonly IntervalSet");
    ensureNotNull(this.intervals_1).clear_j9egeb_k$();
  };
  protoOf(IntervalSet).add_c9dakn_k$ = function (el) {
    if (this.isReadonly_1)
      throw IllegalStateException_init_$Create$("can't alter readonly IntervalSet");
    this.add_6jazo1_k$(el, el);
  };
  protoOf(IntervalSet).add_6jazo1_k$ = function (a, b) {
    this.add_q82tnb_k$(Companion_getInstance_31().of_doci3b_k$(a, b));
  };
  protoOf(IntervalSet).add_q82tnb_k$ = function (addition) {
    if (this.isReadonly_1)
      throw IllegalStateException_init_$Create$("can't alter readonly IntervalSet");
    if (addition.get_b_1mhr5l_k$() < addition.get_a_1mhr5k_k$()) {
      return Unit_getInstance();
    }
    var iter = ensureNotNull(this.intervals_1).listIterator_xjshxw_k$();
    while (iter.hasNext_bitz1p_k$()) {
      var r = iter.next_20eer_k$();
      if (addition.equals(r)) {
        return Unit_getInstance();
      }
      if (addition.adjacent_kguz4q_k$(r) ? true : !addition.disjoint_nxcfu4_k$(r)) {
        var bigger = addition.union_vlrno9_k$(r);
        iter.set_tg4fwj_k$(bigger);
        $l$loop: while (iter.hasNext_bitz1p_k$()) {
          var next = iter.next_20eer_k$();
          if (!bigger.adjacent_kguz4q_k$(next) ? bigger.disjoint_nxcfu4_k$(next) : false) {
            break $l$loop;
          }
          iter.remove_ldkf9o_k$();
          iter.previous_l2dfd5_k$();
          iter.set_tg4fwj_k$(bigger.union_vlrno9_k$(next));
          iter.next_20eer_k$();
        }
        return Unit_getInstance();
      }
      if (addition.startsBeforeDisjoint_tsfun0_k$(r)) {
        iter.previous_l2dfd5_k$();
        iter.add_jcyd1a_k$(addition);
        return Unit_getInstance();
      }
    }
    ensureNotNull(this.intervals_1).add_utx5q5_k$(addition);
  };
  protoOf(IntervalSet).addAll_jvk865_k$ = function (set) {
    if (set == null) {
      return this;
    }
    if (set instanceof IntervalSet) {
      var other = (set == null ? true : set instanceof IntervalSet) ? set : THROW_CCE();
      var n = ensureNotNull(ensureNotNull(other).intervals_1).get_size_woubt6_k$();
      var inductionVariable = 0;
      if (inductionVariable < n)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var I = ensureNotNull(other.intervals_1).get_c1px32_k$(i);
          this.add_6jazo1_k$(I.get_a_1mhr5k_k$(), I.get_b_1mhr5l_k$());
        }
         while (inductionVariable < n);
    } else {
      var tmp1_iterator = ensureNotNull(set).toList_edfyo7_k$().iterator_jk1svi_k$();
      while (tmp1_iterator.hasNext_bitz1p_k$()) {
        var value = tmp1_iterator.next_20eer_k$();
        this.add_c9dakn_k$(value);
      }
    }
    return this;
  };
  protoOf(IntervalSet).complement_bx2qp2_k$ = function (minElement, maxElement) {
    return this.complement_378g53_k$(Companion_getInstance_32().of_doci3b_k$(minElement, maxElement));
  };
  protoOf(IntervalSet).complement_378g53_k$ = function (vocabulary) {
    if (vocabulary == null ? true : ensureNotNull(vocabulary).get_isNil_it6xy6_k$()) {
      return null;
    }
    var vocabularyIS;
    if (vocabulary instanceof IntervalSet) {
      vocabularyIS = vocabulary;
    } else {
      vocabularyIS = IntervalSet_init_$Create$_1(new Int32Array([]));
      vocabularyIS.addAll_jvk865_k$(vocabulary);
    }
    return vocabularyIS.subtract_syq3nt_k$(this);
  };
  protoOf(IntervalSet).subtract_syq3nt_k$ = function (a) {
    if (a == null ? true : ensureNotNull(a).get_isNil_it6xy6_k$()) {
      return IntervalSet_init_$Create$_0(this);
    }
    if (a instanceof IntervalSet) {
      var tmp = Companion_getInstance_32();
      return tmp.subtract_adxatc_k$(this, (a == null ? true : a instanceof IntervalSet) ? a : THROW_CCE());
    }
    var other = IntervalSet_init_$Create$_1(new Int32Array([]));
    other.addAll_jvk865_k$(a);
    return Companion_getInstance_32().subtract_adxatc_k$(this, other);
  };
  protoOf(IntervalSet).or_xsyq06_k$ = function (a) {
    var o = IntervalSet_init_$Create$_1(new Int32Array([]));
    o.addAll_jvk865_k$(this);
    o.addAll_jvk865_k$(a);
    return o;
  };
  protoOf(IntervalSet).and_pe26hy_k$ = function (other) {
    if (other == null) {
      return null;
    }
    var myIntervals = this.intervals_1;
    var theirIntervals = (other instanceof IntervalSet ? other : THROW_CCE()).intervals_1;
    var intersection = null;
    var mySize = ensureNotNull(myIntervals).get_size_woubt6_k$();
    var theirSize = ensureNotNull(theirIntervals).get_size_woubt6_k$();
    var i = 0;
    var j = 0;
    while (i < mySize ? j < theirSize : false) {
      var mine = myIntervals.get_c1px32_k$(i);
      var theirs = theirIntervals.get_c1px32_k$(j);
      if (mine.startsBeforeDisjoint_tsfun0_k$(theirs)) {
        i = i + 1 | 0;
      } else if (theirs.startsBeforeDisjoint_tsfun0_k$(mine)) {
        j = j + 1 | 0;
      } else if (mine.properlyContains_jmhs5o_k$(theirs)) {
        if (intersection == null) {
          intersection = IntervalSet_init_$Create$_1(new Int32Array([]));
        }
        intersection.add_q82tnb_k$(mine.intersection_3bq5sv_k$(theirs));
        j = j + 1 | 0;
      } else if (theirs.properlyContains_jmhs5o_k$(mine)) {
        if (intersection == null) {
          intersection = IntervalSet_init_$Create$_1(new Int32Array([]));
        }
        intersection.add_q82tnb_k$(mine.intersection_3bq5sv_k$(theirs));
        i = i + 1 | 0;
      } else if (!mine.disjoint_nxcfu4_k$(theirs)) {
        if (intersection == null) {
          intersection = IntervalSet_init_$Create$_1(new Int32Array([]));
        }
        intersection.add_q82tnb_k$(mine.intersection_3bq5sv_k$(theirs));
        if (mine.startsAfterNonDisjoint_phfk22_k$(theirs)) {
          j = j + 1 | 0;
        } else if (theirs.startsAfterNonDisjoint_phfk22_k$(mine)) {
          i = i + 1 | 0;
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
  protoOf(IntervalSet).contains_7q95ev_k$ = function (el) {
    var n = ensureNotNull(this.intervals_1).get_size_woubt6_k$();
    var l = 0;
    var r = n - 1 | 0;
    while (l <= r) {
      var m = (l + r | 0) / 2 | 0;
      var I = ensureNotNull(this.intervals_1).get_c1px32_k$(m);
      var a = I.get_a_1mhr5k_k$();
      var b = I.get_b_1mhr5l_k$();
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
  protoOf(IntervalSet).hashCode = function () {
    var hash = MurmurHash_getInstance().initialize$default_ajr2pw_k$();
    var tmp0_iterator = ensureNotNull(this.intervals_1).iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var I = tmp0_iterator.next_20eer_k$();
      hash = MurmurHash_getInstance().update_65sxl5_k$(hash, I.get_a_1mhr5k_k$());
      hash = MurmurHash_getInstance().update_65sxl5_k$(hash, I.get_b_1mhr5l_k$());
    }
    hash = MurmurHash_getInstance().finish_sqfsk3_k$(hash, imul(ensureNotNull(this.intervals_1).get_size_woubt6_k$(), 2));
    return hash;
  };
  protoOf(IntervalSet).equals = function (obj) {
    var tmp;
    if (obj == null) {
      tmp = true;
    } else {
      tmp = !(obj instanceof IntervalSet);
    }
    if (tmp) {
      return false;
    }
    var other = (obj == null ? true : obj instanceof IntervalSet) ? obj : THROW_CCE();
    return equals(this.intervals_1, ensureNotNull(other).intervals_1);
  };
  protoOf(IntervalSet).toString = function () {
    return this.toString_8x7yyh_k$(false);
  };
  protoOf(IntervalSet).toString_8x7yyh_k$ = function (elemAreChar) {
    var buf = StringBuilder_init_$Create$();
    if (this.intervals_1 == null ? true : ensureNotNull(this.intervals_1).isEmpty_y1axqb_k$()) {
      return '{}';
    }
    if (this.size_23och_k$() > 1) {
      buf.append_22ad7x_k$('{');
    }
    var iter = ensureNotNull(this.intervals_1).iterator_jk1svi_k$();
    while (iter.hasNext_bitz1p_k$()) {
      var I = iter.next_20eer_k$();
      var a = I.get_a_1mhr5k_k$();
      var b = I.get_b_1mhr5l_k$();
      if (a === b) {
        if (a === Companion_getInstance_6().get_EOF_18juz1_k$()) {
          buf.append_22ad7x_k$('<EOF>');
        } else if (elemAreChar) {
          // Inline function 'kotlin.TODO' call
          throw new NotImplementedError();
        } else {
          buf.append_t8pm91_k$(a);
        }
      } else {
        if (elemAreChar) {
          // Inline function 'kotlin.TODO' call
          throw new NotImplementedError();
        } else {
          buf.append_t8pm91_k$(a).append_22ad7x_k$('..').append_t8pm91_k$(b);
        }
      }
      if (iter.hasNext_bitz1p_k$()) {
        buf.append_22ad7x_k$(', ');
      }
    }
    if (this.size_23och_k$() > 1) {
      buf.append_22ad7x_k$('}');
    }
    return buf.toString();
  };
  protoOf(IntervalSet).toString_sl5why_k$ = function (tokenNames) {
    var tmp = Companion_getInstance_7();
    return this.toString_vjubf0_k$(tmp.fromTokenNames_sfdkff_k$(isArray(tokenNames) ? tokenNames : THROW_CCE()));
  };
  protoOf(IntervalSet).toString_vjubf0_k$ = function (vocabulary) {
    var buf = StringBuilder_init_$Create$();
    if (this.intervals_1 == null ? true : ensureNotNull(this.intervals_1).isEmpty_y1axqb_k$()) {
      return '{}';
    }
    if (this.size_23och_k$() > 1) {
      buf.append_22ad7x_k$('{');
    }
    var iter = ensureNotNull(this.intervals_1).iterator_jk1svi_k$();
    while (iter.hasNext_bitz1p_k$()) {
      var I = iter.next_20eer_k$();
      var a = I.get_a_1mhr5k_k$();
      var b = I.get_b_1mhr5l_k$();
      if (a === b) {
        buf.append_22ad7x_k$(this.elementName_8xdkrj_k$(vocabulary, a));
      } else {
        var inductionVariable = a;
        if (inductionVariable <= b)
          do {
            var i = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            if (i > a) {
              buf.append_22ad7x_k$(', ');
            }
            buf.append_22ad7x_k$(this.elementName_8xdkrj_k$(vocabulary, i));
          }
           while (!(i === b));
      }
      if (iter.hasNext_bitz1p_k$()) {
        buf.append_22ad7x_k$(', ');
      }
    }
    if (this.size_23och_k$() > 1) {
      buf.append_22ad7x_k$('}');
    }
    return buf.toString();
  };
  protoOf(IntervalSet).elementName_3zooc3_k$ = function (tokenNames, a) {
    var tmp = Companion_getInstance_7();
    return this.elementName_8xdkrj_k$(tmp.fromTokenNames_sfdkff_k$(isArray(tokenNames) ? tokenNames : THROW_CCE()), a);
  };
  protoOf(IntervalSet).elementName_8xdkrj_k$ = function (vocabulary, a) {
    var tmp;
    if (a === Companion_getInstance_6().get_EOF_18juz1_k$()) {
      tmp = '<EOF>';
    } else if (a === Companion_getInstance_6().get_EPSILON_c96d27_k$()) {
      tmp = '<EPSILON>';
    } else {
      tmp = vocabulary.getDisplayName_ut2bi7_k$(a);
    }
    return tmp;
  };
  protoOf(IntervalSet).size_23och_k$ = function () {
    var n = 0;
    var numIntervals = ensureNotNull(this.intervals_1).get_size_woubt6_k$();
    if (numIntervals === 1) {
      var firstInterval = ensureNotNull(this.intervals_1).get_c1px32_k$(0);
      return (firstInterval.get_b_1mhr5l_k$() - firstInterval.get_a_1mhr5k_k$() | 0) + 1 | 0;
    }
    var inductionVariable = 0;
    if (inductionVariable < numIntervals)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var I = ensureNotNull(this.intervals_1).get_c1px32_k$(i);
        n = n + ((I.get_b_1mhr5l_k$() - I.get_a_1mhr5k_k$() | 0) + 1 | 0) | 0;
      }
       while (inductionVariable < numIntervals);
    return n;
  };
  protoOf(IntervalSet).toIntegerList_zt9xb_k$ = function () {
    var values = IntegerList_init_$Create$_0(this.size_23och_k$());
    var n = ensureNotNull(this.intervals_1).get_size_woubt6_k$();
    var inductionVariable = 0;
    if (inductionVariable < n)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var I = ensureNotNull(this.intervals_1).get_c1px32_k$(i);
        var a = I.get_a_1mhr5k_k$();
        var b = I.get_b_1mhr5l_k$();
        var inductionVariable_0 = a;
        if (inductionVariable_0 <= b)
          do {
            var v = inductionVariable_0;
            inductionVariable_0 = inductionVariable_0 + 1 | 0;
            values.add_c9dakn_k$(v);
          }
           while (!(v === b));
      }
       while (inductionVariable < n);
    return values;
  };
  protoOf(IntervalSet).toList_edfyo7_k$ = function () {
    var values = ArrayList_init_$Create$_0();
    var n = ensureNotNull(this.intervals_1).get_size_woubt6_k$();
    var inductionVariable = 0;
    if (inductionVariable < n)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var I = ensureNotNull(this.intervals_1).get_c1px32_k$(i);
        var a = I.get_a_1mhr5k_k$();
        var b = I.get_b_1mhr5l_k$();
        var inductionVariable_0 = a;
        if (inductionVariable_0 <= b)
          do {
            var v = inductionVariable_0;
            inductionVariable_0 = inductionVariable_0 + 1 | 0;
            values.add_utx5q5_k$(v);
          }
           while (!(v === b));
      }
       while (inductionVariable < n);
    return values;
  };
  protoOf(IntervalSet).toSet_1tssfb_k$ = function () {
    var s = HashSet_init_$Create$_0();
    var tmp0_iterator = ensureNotNull(this.intervals_1).iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var I = tmp0_iterator.next_20eer_k$();
      var a = I.get_a_1mhr5k_k$();
      var b = I.get_b_1mhr5l_k$();
      var inductionVariable = a;
      if (inductionVariable <= b)
        do {
          var v = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          s.add_utx5q5_k$(v);
        }
         while (!(v === b));
    }
    return s;
  };
  protoOf(IntervalSet).get_c1px32_k$ = function (i) {
    var n = ensureNotNull(this.intervals_1).get_size_woubt6_k$();
    var index = 0;
    var inductionVariable = 0;
    if (inductionVariable < n)
      do {
        var j = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var I = ensureNotNull(this.intervals_1).get_c1px32_k$(j);
        var a = I.get_a_1mhr5k_k$();
        var b = I.get_b_1mhr5l_k$();
        var inductionVariable_0 = a;
        if (inductionVariable_0 <= b)
          do {
            var v = inductionVariable_0;
            inductionVariable_0 = inductionVariable_0 + 1 | 0;
            if (index === i) {
              return v;
            }
            index = index + 1 | 0;
          }
           while (!(v === b));
      }
       while (inductionVariable < n);
    return -1;
  };
  protoOf(IntervalSet).toArray_jjyjqa_k$ = function () {
    return this.toIntegerList_zt9xb_k$().toArray_jjyjqa_k$();
  };
  protoOf(IntervalSet).remove_v58o70_k$ = function (el) {
    if (this.isReadonly_1)
      throw IllegalStateException_init_$Create$("can't alter readonly IntervalSet");
    var n = ensureNotNull(this.intervals_1).get_size_woubt6_k$();
    var inductionVariable = 0;
    if (inductionVariable < n)
      $l$loop_2: do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var I = ensureNotNull(this.intervals_1).get_c1px32_k$(i);
        var a = I.get_a_1mhr5k_k$();
        var b = I.get_b_1mhr5l_k$();
        if (el < a) {
          break $l$loop_2;
        }
        if (el === a ? el === b : false) {
          ensureNotNull(this.intervals_1).removeAt_6niowx_k$(i);
          break $l$loop_2;
        }
        if (el === a) {
          var tmp2 = I.get_a_1mhr5k_k$();
          I.set_a_e9iw8s_k$(tmp2 + 1 | 0);
          break $l$loop_2;
        }
        if (el === b) {
          var tmp4 = I.get_b_1mhr5l_k$();
          I.set_b_lvx99f_k$(tmp4 - 1 | 0);
          break $l$loop_2;
        }
        if (el > a ? el < b : false) {
          var oldb = I.get_b_1mhr5l_k$();
          I.set_b_lvx99f_k$(el - 1 | 0);
          this.add_6jazo1_k$(el + 1 | 0, oldb);
        }
      }
       while (inductionVariable < n);
  };
  function IntervalSet() {
    Companion_getInstance_32();
    this.intervals_1 = null;
    this.isReadonly_1 = false;
  }
  function _get_DEFAULT_SEED__d4al3w($this) {
    return $this.DEFAULT_SEED_1;
  }
  function MurmurHash() {
    MurmurHash_instance = this;
    this.DEFAULT_SEED_1 = 0;
  }
  protoOf(MurmurHash).initialize_vf4y0_k$ = function (seed) {
    return seed;
  };
  protoOf(MurmurHash).initialize$default_ajr2pw_k$ = function (seed, $super) {
    seed = seed === VOID ? this.DEFAULT_SEED_1 : seed;
    return $super === VOID ? this.initialize_vf4y0_k$(seed) : $super.initialize_vf4y0_k$.call(this, seed);
  };
  protoOf(MurmurHash).update_65sxl5_k$ = function (hash, value) {
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
  protoOf(MurmurHash).update_66jqwg_k$ = function (hash, value) {
    var tmp1_elvis_lhs = value == null ? null : hashCode(value);
    return this.update_65sxl5_k$(hash, tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs);
  };
  protoOf(MurmurHash).finish_sqfsk3_k$ = function (hash, numberOfWords) {
    var hash_0 = hash;
    hash_0 = hash_0 ^ imul(numberOfWords, 4);
    hash_0 = hash_0 ^ (hash_0 >>> 16 | 0);
    hash_0 = imul(hash_0, -2048144789);
    hash_0 = hash_0 ^ (hash_0 >>> 13 | 0);
    hash_0 = imul(hash_0, -1028477387);
    hash_0 = hash_0 ^ (hash_0 >>> 16 | 0);
    return hash_0;
  };
  protoOf(MurmurHash).hashCode_t3qj7v_k$ = function (data, seed) {
    var hash = this.initialize_vf4y0_k$(seed);
    var inductionVariable = 0;
    var last = data.length;
    while (inductionVariable < last) {
      var value = data[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      hash = this.update_66jqwg_k$(hash, value);
    }
    hash = this.finish_sqfsk3_k$(hash, data.length);
    return hash;
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
  protoOf(Companion_32).get_INSTANCE_9oh0gy_k$ = function () {
    return this.INSTANCE_1;
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
  protoOf(ObjectEqualityComparator).hashCode_fsgoms_k$ = function (obj) {
    var tmp1_elvis_lhs = obj == null ? null : hashCode(obj);
    return tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
  };
  protoOf(ObjectEqualityComparator).equals_dxlvsx_k$ = function (a, b) {
    var tmp;
    if (a == null) {
      tmp = b == null;
    } else {
      tmp = equals(a, b);
    }
    return tmp;
  };
  function Predicate_0() {
  }
  function $readFileCOROUTINE$0(_this__u8e3s4, fileName, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
    this.fileName_1 = fileName;
  }
  protoOf($readFileCOROUTINE$0).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(2);
            this.set_state_rjd8d0_k$(1);
            suspendResult = Platform_getInstance().readFile_xjr12d_k$(this.fileName_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var ARGUMENT = suspendResult;
            return asCharArray(ARGUMENT);
          case 2:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 2) {
          throw e;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e);
        }
      }
     while (true);
  };
  function Utils() {
    Utils_instance = this;
  }
  protoOf(Utils).numNonnull_pj0vfv_k$ = function (data) {
    var n = 0;
    if (data == null)
      return n;
    var tmp0_iterator = arrayIterator(data);
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var o = tmp0_iterator.next_20eer_k$();
      if (!(o == null)) {
        n = n + 1 | 0;
      }
    }
    return n;
  };
  protoOf(Utils).removeAllElements_b3uqch_k$ = function (data, value) {
    if (data == null)
      return Unit_getInstance();
    while (data.contains_aljjnj_k$(value)) {
      data.remove_cedx0m_k$(value);
    }
  };
  protoOf(Utils).escapeWhitespace_j1avd_k$ = function (s, escapeSpaces) {
    var buf = StringBuilder_init_$Create$();
    var indexedObject = asCharArray(s);
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var c = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      if (c === _Char___init__impl__6a9atx(32) ? escapeSpaces : false) {
        buf.append_am5a4z_k$(_Char___init__impl__6a9atx(183));
      } else if (c === _Char___init__impl__6a9atx(9)) {
        buf.append_22ad7x_k$('\\t');
      } else if (c === _Char___init__impl__6a9atx(10)) {
        buf.append_22ad7x_k$('\\n');
      } else if (c === _Char___init__impl__6a9atx(13)) {
        buf.append_22ad7x_k$('\\r');
      } else {
        buf.append_am5a4z_k$(c);
      }
    }
    return buf.toString();
  };
  protoOf(Utils).readFile_ng1oot_k$ = function (fileName, $completion) {
    var tmp = new $readFileCOROUTINE$0(this, fileName, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(Utils).toMap_39xwoh_k$ = function (keys) {
    var m = HashMap_init_$Create$();
    var inductionVariable = 0;
    var last = keys.length - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlin.collections.set' call
        var key = keys[i];
        m.put_4fpzoq_k$(key, i);
      }
       while (inductionVariable <= last);
    return m;
  };
  protoOf(Utils).toCharArray_a0x8e_k$ = function (data) {
    return data == null ? null : data.toCharArray_f3k0vc_k$();
  };
  protoOf(Utils).toSet_32vj9w_k$ = function (bits) {
    var s = IntervalSet_init_$Create$_1(new Int32Array([]));
    var i = bits.nextSetBit_43bnne_k$(0);
    while (i >= 0) {
      s.add_c9dakn_k$(i);
      i = bits.nextSetBit_43bnne_k$(i + 1 | 0);
    }
    return s;
  };
  protoOf(Utils).expandTabs_lwqkxz_k$ = function (s, tabSize) {
    if (s == null)
      return null;
    var buf = StringBuilder_init_$Create$();
    var col = 0;
    var inductionVariable = 0;
    while (inductionVariable < charSequenceLength(s)) {
      var element = charSequenceGet(s, inductionVariable);
      inductionVariable = inductionVariable + 1 | 0;
      if (element === _Char___init__impl__6a9atx(10)) {
        col = 0;
        buf.append_am5a4z_k$(element);
      } else if (element === _Char___init__impl__6a9atx(9)) {
        var n = tabSize - (col % tabSize | 0) | 0;
        col = col + n | 0;
        buf.append_22ad7x_k$(this.spaces_oph097_k$(n));
      } else {
        col = col + 1 | 0;
        buf.append_am5a4z_k$(element);
      }
    }
    return buf.toString();
  };
  protoOf(Utils).spaces_oph097_k$ = function (n) {
    return this.sequence_el1kyl_k$(n, ' ');
  };
  protoOf(Utils).newlines_81px47_k$ = function (n) {
    return this.sequence_el1kyl_k$(n, '\n');
  };
  protoOf(Utils).sequence_el1kyl_k$ = function (n, s) {
    var buf = StringBuilder_init_$Create$();
    var inductionVariable = 1;
    if (inductionVariable <= n)
      do {
        var sp = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        buf.append_22ad7x_k$(s);
      }
       while (!(sp === n));
    return buf.toString();
  };
  protoOf(Utils).count_lsd6gy_k$ = function (s, x) {
    var n = 0;
    var inductionVariable = 0;
    var last = s.length;
    while (inductionVariable < last) {
      var element = charSequenceGet(s, inductionVariable);
      inductionVariable = inductionVariable + 1 | 0;
      if (element === x) {
        n = n + 1 | 0;
      }
    }
    return n;
  };
  var Utils_instance;
  function Utils_getInstance() {
    if (Utils_instance == null)
      new Utils();
    return Utils_instance;
  }
  function ErrorNode() {
  }
  function ErrorNodeImpl(token) {
    TerminalNodeImpl.call(this, token);
  }
  protoOf(ErrorNodeImpl).accept_v5118_k$ = function (visitor) {
    return visitor.visitErrorNode_vqc40u_k$(this);
  };
  function ParseTree() {
  }
  function ParseTreeListener() {
  }
  function ParseTreeVisitor() {
  }
  function Companion_33() {
    Companion_instance_33 = this;
    this.DEFAULT_1 = new ParseTreeWalker();
  }
  protoOf(Companion_33).get_DEFAULT_wccqmg_k$ = function () {
    return this.DEFAULT_1;
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
  protoOf(ParseTreeWalker).walk_v5wxj8_k$ = function (listener, t) {
    if (isInterface(t, ErrorNode)) {
      listener.visitErrorNode_tah3o2_k$(isInterface(t, ErrorNode) ? t : THROW_CCE());
      return Unit_getInstance();
    } else {
      if (isInterface(t, TerminalNode)) {
        listener.visitTerminal_s8ttxv_k$(isInterface(t, TerminalNode) ? t : THROW_CCE());
        return Unit_getInstance();
      }
    }
    var r = isInterface(t, RuleNode) ? t : THROW_CCE();
    this.enterRule_4bkmck_k$(listener, r);
    var n = r.get_childCount_1t393w_k$();
    var inductionVariable = 0;
    if (inductionVariable < n)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        this.walk_v5wxj8_k$(listener, ensureNotNull(r.getChild_ffglrm_k$(i)));
      }
       while (inductionVariable < n);
    this.exitRule_gt0pia_k$(listener, r);
  };
  protoOf(ParseTreeWalker).enterRule_4bkmck_k$ = function (listener, r) {
    var tmp = r.get_ruleContext_kkgnmy_k$();
    var ctx = tmp instanceof ParserRuleContext ? tmp : THROW_CCE();
    listener.enterEveryRule_b6dz77_k$(ctx);
    ctx.enterRule_9ifvwy_k$(listener);
  };
  protoOf(ParseTreeWalker).exitRule_gt0pia_k$ = function (listener, r) {
    var tmp = r.get_ruleContext_kkgnmy_k$();
    var ctx = tmp instanceof ParserRuleContext ? tmp : THROW_CCE();
    ctx.exitRule_2iuazs_k$(listener);
    listener.exitEveryRule_gmt1jn_k$(ctx);
  };
  function RuleNode() {
  }
  function SyntaxTree() {
  }
  function TerminalNode() {
  }
  function _set_parent__n7jd7x($this, _set____db54di) {
    $this.parent_1 = _set____db54di;
  }
  function _get_parent__oo9xup($this) {
    return $this.parent_1;
  }
  function TerminalNodeImpl(symbol) {
    this.symbol_1 = symbol;
    this.parent_1 = null;
  }
  protoOf(TerminalNodeImpl).set_symbol_xthyjp_k$ = function (_set____db54di) {
    this.symbol_1 = _set____db54di;
  };
  protoOf(TerminalNodeImpl).get_symbol_jqdfoh_k$ = function () {
    return this.symbol_1;
  };
  protoOf(TerminalNodeImpl).assignParent_d6hrfj_k$ = function (value) {
    this.parent_1 = value;
  };
  protoOf(TerminalNodeImpl).readParent_9zdz4w_k$ = function () {
    return this.parent_1;
  };
  protoOf(TerminalNodeImpl).get_sourceInterval_k8s7pl_k$ = function () {
    if (this.get_symbol_jqdfoh_k$() == null)
      return Companion_getInstance_31().get_INVALID_pha976_k$();
    var tokenIndex = ensureNotNull(this.get_symbol_jqdfoh_k$()).get_tokenIndex_iu15pa_k$();
    return new Interval(tokenIndex, tokenIndex);
  };
  protoOf(TerminalNodeImpl).get_childCount_1t393w_k$ = function () {
    return 0;
  };
  protoOf(TerminalNodeImpl).get_text_wouvsm_k$ = function () {
    return ensureNotNull(ensureNotNull(this.get_symbol_jqdfoh_k$()).get_text_wouvsm_k$());
  };
  protoOf(TerminalNodeImpl).getChild_ffglrm_k$ = function (i) {
    return null;
  };
  protoOf(TerminalNodeImpl).get_payload_bqtt23_k$ = function () {
    return this.get_symbol_jqdfoh_k$();
  };
  protoOf(TerminalNodeImpl).accept_v5118_k$ = function (visitor) {
    return visitor.visitTerminal_h0amxv_k$(this);
  };
  protoOf(TerminalNodeImpl).toStringTree_72xwsl_k$ = function (parser) {
    return this.toString();
  };
  protoOf(TerminalNodeImpl).toString = function () {
    return ensureNotNull(this.get_symbol_jqdfoh_k$()).get_type_wovaf7_k$() === Companion_getInstance_6().get_EOF_18juz1_k$() ? '<EOF>' : ensureNotNull(ensureNotNull(this.get_symbol_jqdfoh_k$()).get_text_wouvsm_k$());
  };
  protoOf(TerminalNodeImpl).toStringTree_a6qmui_k$ = function () {
    return this.toString();
  };
  function Tree() {
  }
  function Trees() {
    Trees_instance = this;
  }
  protoOf(Trees).toStringTree_4p81vn_k$ = function (t, recog) {
    var ruleNames = recog == null ? null : recog.get_ruleNames_qcosu5_k$();
    var ruleNamesList = !(ruleNames == null) ? listOf(ruleNames.slice()) : null;
    return this.toStringTree_l5rm4_k$(t, ruleNamesList);
  };
  protoOf(Trees).toStringTree_l5rm4_k$ = function (t, ruleNames) {
    var s = Utils_getInstance().escapeWhitespace_j1avd_k$(this.getNodeText_gr4795_k$(t, ruleNames), false);
    if (t.get_childCount_1t393w_k$() === 0)
      return s;
    var buf = StringBuilder_init_$Create$();
    buf.append_22ad7x_k$('(');
    s = Utils_getInstance().escapeWhitespace_j1avd_k$(this.getNodeText_gr4795_k$(t, ruleNames), false);
    buf.append_22ad7x_k$(s);
    buf.append_am5a4z_k$(_Char___init__impl__6a9atx(32));
    var inductionVariable = 0;
    var last = t.get_childCount_1t393w_k$();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (i > 0) {
          buf.append_am5a4z_k$(_Char___init__impl__6a9atx(32));
        }
        buf.append_22ad7x_k$(this.toStringTree_l5rm4_k$(ensureNotNull(t.getChild_ffglrm_k$(i)), ruleNames));
      }
       while (inductionVariable < last);
    buf.append_22ad7x_k$(')');
    return buf.toString();
  };
  protoOf(Trees).toStringTree$default_2riczx_k$ = function (t, ruleNames, $super) {
    ruleNames = ruleNames === VOID ? null : ruleNames;
    return $super === VOID ? this.toStringTree_l5rm4_k$(t, ruleNames) : $super.toStringTree_l5rm4_k$.call(this, t, ruleNames);
  };
  protoOf(Trees).getNodeText_pra5a6_k$ = function (t, recog) {
    var ruleNames = recog == null ? null : recog.get_ruleNames_qcosu5_k$();
    var ruleNamesList = !(ruleNames == null) ? listOf(ruleNames.slice()) : null;
    return this.getNodeText_gr4795_k$(t, ruleNamesList);
  };
  protoOf(Trees).getNodeText_gr4795_k$ = function (t, ruleNames) {
    if (!(ruleNames == null)) {
      if (t instanceof RuleContext) {
        var ruleIndex = t.get_ruleContext_kkgnmy_k$().get_ruleIndex_qf7nn7_k$();
        var ruleName = ruleNames.get_c1px32_k$(ruleIndex);
        var altNumber = t.get_altNumber_pm6lav_k$();
        var tmp;
        if (!(altNumber === Companion_getInstance_8().get_INVALID_ALT_NUMBER_idrbu8_k$())) {
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
            var symbol = t.get_symbol_jqdfoh_k$();
            if (!(symbol == null)) {
              return ensureNotNull(symbol.get_text_wouvsm_k$());
            }
          }
        }
      }
    }
    var payload = t.get_payload_bqtt23_k$();
    var tmp_0;
    if (!(payload == null) ? isInterface(payload, Token) : false) {
      tmp_0 = ensureNotNull(payload.get_text_wouvsm_k$());
    } else {
      tmp_0 = toString_1(t.get_payload_bqtt23_k$());
    }
    return tmp_0;
  };
  protoOf(Trees).getChildren_tktkna_k$ = function (t) {
    var kids = ArrayList_init_$Create$_0();
    var inductionVariable = 0;
    var last = t.get_childCount_1t393w_k$();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        kids.add_utx5q5_k$(ensureNotNull(t.getChild_ffglrm_k$(i)));
      }
       while (inductionVariable < last);
    return kids;
  };
  protoOf(Trees).getAncestors_nvb3hh_k$ = function (t) {
    if (t.readParent_9zdz4w_k$() == null)
      return emptyList();
    var ancestors = ArrayList_init_$Create$_0();
    var t1 = t.readParent_9zdz4w_k$();
    while (!(t1 == null)) {
      ancestors.add_dl6gt3_k$(0, t1);
      t1 = t1.readParent_9zdz4w_k$();
    }
    return ancestors;
  };
  protoOf(Trees).isAncestorOf_gptyss_k$ = function (t, u) {
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
  protoOf(Trees).findAllTokenNodes_lrqfet_k$ = function (t, ttype) {
    return this.findAllNodes_ptizsv_k$(t, ttype, true);
  };
  protoOf(Trees).findAllRuleNodes_ptxarc_k$ = function (t, ruleIndex) {
    return this.findAllNodes_ptizsv_k$(t, ruleIndex, false);
  };
  protoOf(Trees).findAllNodes_ptizsv_k$ = function (t, index, findTokens) {
    var nodes = ArrayList_init_$Create$_0();
    this._findAllNodes_st9j3y_k$(t, index, findTokens, nodes);
    return nodes;
  };
  protoOf(Trees)._findAllNodes_st9j3y_k$ = function (t, index, findTokens, nodes) {
    var tmp;
    if (findTokens) {
      tmp = isInterface(t, TerminalNode);
    } else {
      tmp = false;
    }
    if (tmp) {
      var tnode = isInterface(t, TerminalNode) ? t : THROW_CCE();
      if (ensureNotNull(tnode.get_symbol_jqdfoh_k$()).get_type_wovaf7_k$() === index) {
        nodes.add_utx5q5_k$(t);
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
        if (ctx.get_ruleIndex_qf7nn7_k$() === index) {
          nodes.add_utx5q5_k$(t);
        }
      }
    }
    var inductionVariable = 0;
    var last = t.get_childCount_1t393w_k$();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        this._findAllNodes_st9j3y_k$(ensureNotNull(t.getChild_ffglrm_k$(i)), index, findTokens, nodes);
      }
       while (inductionVariable < last);
  };
  protoOf(Trees).getDescendants_engli5_k$ = function (t) {
    var nodes = ArrayList_init_$Create$_0();
    nodes.add_utx5q5_k$(t);
    var n = t.get_childCount_1t393w_k$();
    var inductionVariable = 0;
    if (inductionVariable < n)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        nodes.addAll_4lagoh_k$(this.getDescendants_engli5_k$(ensureNotNull(t.getChild_ffglrm_k$(i))));
      }
       while (inductionVariable < n);
    return nodes;
  };
  protoOf(Trees).descendants_l8txnd_k$ = function (t) {
    return this.getDescendants_engli5_k$(t);
  };
  protoOf(Trees).getRootOfSubtreeEnclosingRegion_dhwj6c_k$ = function (t, startTokenIndex, stopTokenIndex) {
    var n = t.get_childCount_1t393w_k$();
    var inductionVariable = 0;
    if (inductionVariable < n)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var child = t.getChild_ffglrm_k$(i);
        var r = this.getRootOfSubtreeEnclosingRegion_dhwj6c_k$(ensureNotNull(child), startTokenIndex, stopTokenIndex);
        if (!(r == null))
          return r;
      }
       while (inductionVariable < n);
    if (t instanceof ParserRuleContext) {
      var r_0 = t instanceof ParserRuleContext ? t : THROW_CCE();
      if (startTokenIndex >= ensureNotNull(r_0.get_start_iypx6h_k$()).get_tokenIndex_iu15pa_k$() ? r_0.get_stop_woujpn_k$() == null ? true : stopTokenIndex <= ensureNotNull(r_0.get_stop_woujpn_k$()).get_tokenIndex_iu15pa_k$() : false) {
        return r_0;
      }
    }
    return null;
  };
  protoOf(Trees).stripChildrenOutOfRange_h55nig_k$ = function (t, root, startIndex, stopIndex) {
    if (t == null)
      return Unit_getInstance();
    var inductionVariable = 0;
    var last = t.get_childCount_1t393w_k$();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var child = t.getChild_ffglrm_k$(i);
        var range = ensureNotNull(child).get_sourceInterval_k8s7pl_k$();
        var tmp;
        if (child instanceof ParserRuleContext) {
          tmp = range.get_b_1mhr5l_k$() < startIndex ? true : range.get_a_1mhr5k_k$() > stopIndex;
        } else {
          tmp = false;
        }
        if (tmp) {
          if (this.isAncestorOf_gptyss_k$(child, root)) {
            var abbrev = CommonToken_init_$Create$_1(Companion_getInstance_6().get_INVALID_TYPE_iyehat_k$(), '...');
            ensureNotNull(t.get_children_4cwbp4_k$()).set_82063s_k$(i, new TerminalNodeImpl(abbrev));
          }
        }
      }
       while (inductionVariable < last);
  };
  protoOf(Trees).findNodeSuchThat_cd2evh_k$ = function (t, pred) {
    if (pred.test_kxdenx_k$(t))
      return t;
    if (t == null)
      return null;
    var n = t.get_childCount_1t393w_k$();
    var inductionVariable = 0;
    if (inductionVariable < n)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var u = this.findNodeSuchThat_cd2evh_k$(t.getChild_ffglrm_k$(i), pred);
        if (!(u == null))
          return u;
      }
       while (inductionVariable < n);
    return null;
  };
  var Trees_instance;
  function Trees_getInstance() {
    if (Trees_instance == null)
      new Trees();
    return Trees_instance;
  }
  function get_DEFAULT_CHANNEL() {
    return DEFAULT_CHANNEL;
  }
  var DEFAULT_CHANNEL;
  function _get_setBits__cwoprr($this) {
    return $this.setBits_1;
  }
  function BitSet_init_$Init$($this) {
    BitSet.call($this);
    return $this;
  }
  function BitSet_init_$Create$() {
    return BitSet_init_$Init$(objectCreate(protoOf(BitSet)));
  }
  protoOf(BitSet).set_3dek9m_k$ = function (bitIndex) {
    if (bitIndex < 0)
      throw IllegalArgumentException_init_$Create$_0();
    this.setBits_1.add_utx5q5_k$(bitIndex);
  };
  protoOf(BitSet).clear_ihvbz9_k$ = function (bitIndex) {
    if (bitIndex < 0)
      throw IllegalArgumentException_init_$Create$_0();
    this.setBits_1.remove_cedx0m_k$(bitIndex);
  };
  protoOf(BitSet).get_c1px32_k$ = function (bitIndex) {
    if (bitIndex < 0)
      throw IllegalArgumentException_init_$Create$_0();
    return this.setBits_1.contains_aljjnj_k$(bitIndex);
  };
  protoOf(BitSet).cardinality_dz7uku_k$ = function () {
    return this.setBits_1.get_size_woubt6_k$();
  };
  protoOf(BitSet).nextSetBit_43bnne_k$ = function (i) {
    // Inline function 'kotlin.collections.filter' call
    // Inline function 'kotlin.collections.filterTo' call
    var this_0 = this.setBits_1;
    var destination = ArrayList_init_$Create$_0();
    var tmp0_iterator = this_0.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var element = tmp0_iterator.next_20eer_k$();
      // Inline function 'com.strumenta.kotlinmultiplatform.BitSet.nextSetBit.<anonymous>' call
      if (element >= i) {
        destination.add_utx5q5_k$(element);
      }
    }
    var nextSetBits = destination;
    var tmp0_elvis_lhs = minOrNull(nextSetBits);
    return tmp0_elvis_lhs == null ? -1 : tmp0_elvis_lhs;
  };
  protoOf(BitSet).or_rkglts_k$ = function (alts) {
    this.setBits_1.addAll_4lagoh_k$(alts.setBits_1);
  };
  function BitSet() {
    this.setBits_1 = HashSet_init_$Create$_0();
  }
  function Collections() {
    Collections_instance = this;
  }
  protoOf(Collections).min_7gz730_k$ = function (precedencePredicates) {
    var tmp0_elvis_lhs = minOrNull(precedencePredicates);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw NoSuchElementException_init_$Create$();
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  protoOf(Collections).max_9um31y_k$ = function (precedencePredicates) {
    var tmp0_elvis_lhs = maxOrNull(precedencePredicates);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw NoSuchElementException_init_$Create$();
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  var Collections_instance;
  function Collections_getInstance() {
    if (Collections_instance == null)
      new Collections();
    return Collections_instance;
  }
  function IdentityHashMap() {
    var tmp = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp.$$delegate_0__1 = LinkedHashMap_init_$Create$();
  }
  protoOf(IdentityHashMap).get_entries_p20ztl_k$ = function () {
    return this.$$delegate_0__1.get_entries_p20ztl_k$();
  };
  protoOf(IdentityHashMap).get_keys_wop4xp_k$ = function () {
    return this.$$delegate_0__1.get_keys_wop4xp_k$();
  };
  protoOf(IdentityHashMap).get_size_woubt6_k$ = function () {
    return this.$$delegate_0__1.get_size_woubt6_k$();
  };
  protoOf(IdentityHashMap).get_values_ksazhn_k$ = function () {
    return this.$$delegate_0__1.get_values_ksazhn_k$();
  };
  protoOf(IdentityHashMap).clear_j9egeb_k$ = function () {
    this.$$delegate_0__1.clear_j9egeb_k$();
  };
  protoOf(IdentityHashMap).containsKey_aw81wo_k$ = function (key) {
    return this.$$delegate_0__1.containsKey_aw81wo_k$(key);
  };
  protoOf(IdentityHashMap).containsValue_yf2ykl_k$ = function (value) {
    return this.$$delegate_0__1.containsValue_yf2ykl_k$(value);
  };
  protoOf(IdentityHashMap).get_wei43m_k$ = function (key) {
    return this.$$delegate_0__1.get_wei43m_k$(key);
  };
  protoOf(IdentityHashMap).isEmpty_y1axqb_k$ = function () {
    return this.$$delegate_0__1.isEmpty_y1axqb_k$();
  };
  protoOf(IdentityHashMap).put_4fpzoq_k$ = function (key, value) {
    return this.$$delegate_0__1.put_4fpzoq_k$(key, value);
  };
  protoOf(IdentityHashMap).putAll_wgg6cj_k$ = function (from) {
    this.$$delegate_0__1.putAll_wgg6cj_k$(from);
  };
  protoOf(IdentityHashMap).remove_gppy8k_k$ = function (key) {
    return this.$$delegate_0__1.remove_gppy8k_k$(key);
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
        THROW_IAE('No enum constant value.');
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
  function _get_timeLow__stnze($this) {
    return $this.timeLow_1;
  }
  function _get_timeMid__su62e($this) {
    return $this.timeMid_1;
  }
  function _get_version__2bx7w9($this) {
    return $this.version_1;
  }
  function _get_timeHi__g2c8il($this) {
    return $this.timeHi_1;
  }
  function _get_variant__eht2jw($this) {
    return $this.variant_1;
  }
  function _get_clock_seq__3lnqu5($this) {
    return $this.clock_seq_1;
  }
  function _get_node__db0vwp($this) {
    return $this.node_1;
  }
  function Variant(name, ordinal, value, bitsLength) {
    Enum.call(this, name, ordinal);
    this.value_1 = value;
    this.bitsLength_1 = bitsLength;
  }
  protoOf(Variant).get_value_j01efc_k$ = function () {
    return this.value_1;
  };
  protoOf(Variant).get_bitsLength_syn9xx_k$ = function () {
    return this.bitsLength_1;
  };
  function Companion_34() {
    Companion_instance_34 = this;
  }
  protoOf(Companion_34).fromString_g5hge7_k$ = function (encoded) {
    var parts = split(encoded, ['-']);
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(parts.get_size_woubt6_k$() === 5)) {
      // Inline function 'kotlin.require.<anonymous>' call
      var message = 'Failed requirement.';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(parts.get_c1px32_k$(0).length === 8)) {
      // Inline function 'kotlin.require.<anonymous>' call
      var message_0 = 'Failed requirement.';
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(parts.get_c1px32_k$(1).length === 4)) {
      // Inline function 'kotlin.require.<anonymous>' call
      var message_1 = 'Failed requirement.';
      throw IllegalArgumentException_init_$Create$(toString(message_1));
    }
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(parts.get_c1px32_k$(2).length === 4)) {
      // Inline function 'kotlin.require.<anonymous>' call
      var message_2 = 'Failed requirement.';
      throw IllegalArgumentException_init_$Create$(toString(message_2));
    }
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(parts.get_c1px32_k$(3).length === 4)) {
      // Inline function 'kotlin.require.<anonymous>' call
      var message_3 = 'Failed requirement.';
      throw IllegalArgumentException_init_$Create$(toString(message_3));
    }
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(parts.get_c1px32_k$(4).length === 12)) {
      // Inline function 'kotlin.require.<anonymous>' call
      var message_4 = 'Failed requirement.';
      throw IllegalArgumentException_init_$Create$(toString(message_4));
    }
    var time_hi_and_version = toLong_0(parts.get_c1px32_k$(2), 16);
    var clock_seq_hi_and_res = toLong_0(parts.get_c1px32_k$(3), 16);
    var topBit1st = clock_seq_hi_and_res.shr_9fl3wl_k$(15);
    var topBit2nd = clock_seq_hi_and_res.shr_9fl3wl_k$(14).and_4spn93_k$(new Long(1, 0));
    var topBit3nd = clock_seq_hi_and_res.shr_9fl3wl_k$(13).and_4spn93_k$(new Long(1, 0));
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
    var version = time_hi_and_version.shr_9fl3wl_k$(12);
    var timeLow = toLong_0(parts.get_c1px32_k$(0), 16);
    var timeMid = toLong_0(parts.get_c1px32_k$(1), 16);
    var timeHi = time_hi_and_version.and_4spn93_k$(new Long(4095, 0));
    var variant = new Long(2, 0);
    var tmp_0;
    switch (variantEnum.bitsLength_1) {
      case 2:
        tmp_0 = clock_seq_hi_and_res.and_4spn93_k$(new Long(16383, 0));
        break;
      case 3:
        tmp_0 = clock_seq_hi_and_res.and_4spn93_k$(new Long(8191, 0));
        break;
      default:
        throw UnsupportedOperationException_init_$Create$_0();
    }
    var clockSeq = tmp_0;
    var node = toLong_0(parts.get_c1px32_k$(4), 16);
    return UUID_init_$Create$_0(version, timeLow, timeMid, timeHi, variant, clockSeq, node);
  };
  var Companion_instance_34;
  function Companion_getInstance_35() {
    if (Companion_instance_34 == null)
      new Companion_34();
    return Companion_instance_34;
  }
  function UUID_init_$Init$(most, least, $this) {
    UUID.call($this);
    $this.timeLow_1 = most.shr_9fl3wl_k$(32);
    $this.timeMid_1 = most.and_4spn93_k$(new Long(-65536, 0)).shr_9fl3wl_k$(16);
    $this.version_1 = most.and_4spn93_k$(new Long(61440, 0)).shr_9fl3wl_k$(12);
    $this.timeHi_1 = most.and_4spn93_k$(new Long(4095, 0));
    var variantLayout = least.shr_9fl3wl_k$(62);
    $this.variant_1 = new Long(2, 0);
    $this.clock_seq_1 = least.shr_9fl3wl_k$(48).and_4spn93_k$(new Long(16383, 0));
    $this.node_1 = least.and_4spn93_k$(new Long(-1, 65535));
    return $this;
  }
  function UUID_init_$Create$(most, least) {
    return UUID_init_$Init$(most, least, objectCreate(protoOf(UUID)));
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
    return UUID_init_$Init$_0(version, timeLow, timeMid, timeHi, variant, clock_seq, node, objectCreate(protoOf(UUID)));
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
  protoOf(UUID).equals = function (other) {
    if (this === other)
      return true;
    if (other == null ? true : !(this.constructor == other.constructor))
      return false;
    if (!(other instanceof UUID))
      THROW_CCE();
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
  protoOf(UUID).hashCode = function () {
    var result = this.timeLow_1.hashCode();
    result = imul(31, result) + this.timeMid_1.hashCode() | 0;
    result = imul(31, result) + this.version_1.hashCode() | 0;
    result = imul(31, result) + this.timeHi_1.hashCode() | 0;
    result = imul(31, result) + this.variant_1.hashCode() | 0;
    result = imul(31, result) + this.clock_seq_1.hashCode() | 0;
    result = imul(31, result) + this.node_1.hashCode() | 0;
    return result;
  };
  protoOf(UUID).toString = function () {
    return 'UUID(timeLow=' + this.timeLow_1.toString() + ', timeMid=' + this.timeMid_1.toString() + ', version=' + this.version_1.toString() + ', timeHi=' + this.timeHi_1.toString() + ', variant=' + this.variant_1.toString() + ', clock_seq=' + this.clock_seq_1.toString() + ', node=' + this.node_1.toString() + ')';
  };
  function UUID() {
    Companion_getInstance_35();
  }
  function WeakHashMap_init_$Init$($this) {
    WeakHashMap.call($this, LinkedHashMap_init_$Create$());
    return $this;
  }
  function WeakHashMap_init_$Create$() {
    return WeakHashMap_init_$Init$(objectCreate(protoOf(WeakHashMap)));
  }
  function WeakHashMap(_wrapped) {
    _wrapped = _wrapped === VOID ? LinkedHashMap_init_$Create$() : _wrapped;
    this._wrapped_1 = _wrapped;
  }
  protoOf(WeakHashMap).get__wrapped_xl0gsv_k$ = function () {
    return this._wrapped_1;
  };
  protoOf(WeakHashMap).get_entries_p20ztl_k$ = function () {
    return this._wrapped_1.get_entries_p20ztl_k$();
  };
  protoOf(WeakHashMap).get_keys_wop4xp_k$ = function () {
    return this._wrapped_1.get_keys_wop4xp_k$();
  };
  protoOf(WeakHashMap).get_size_woubt6_k$ = function () {
    return this._wrapped_1.get_size_woubt6_k$();
  };
  protoOf(WeakHashMap).get_values_ksazhn_k$ = function () {
    return this._wrapped_1.get_values_ksazhn_k$();
  };
  protoOf(WeakHashMap).clear_j9egeb_k$ = function () {
    this._wrapped_1.clear_j9egeb_k$();
  };
  protoOf(WeakHashMap).containsKey_aw81wo_k$ = function (key) {
    return this._wrapped_1.containsKey_aw81wo_k$(key);
  };
  protoOf(WeakHashMap).containsValue_yf2ykl_k$ = function (value) {
    return this._wrapped_1.containsValue_yf2ykl_k$(value);
  };
  protoOf(WeakHashMap).get_wei43m_k$ = function (key) {
    return this._wrapped_1.get_wei43m_k$(key);
  };
  protoOf(WeakHashMap).isEmpty_y1axqb_k$ = function () {
    return this._wrapped_1.isEmpty_y1axqb_k$();
  };
  protoOf(WeakHashMap).put_4fpzoq_k$ = function (key, value) {
    return this._wrapped_1.put_4fpzoq_k$(key, value);
  };
  protoOf(WeakHashMap).putAll_wgg6cj_k$ = function (from) {
    this._wrapped_1.putAll_wgg6cj_k$(from);
  };
  protoOf(WeakHashMap).remove_gppy8k_k$ = function (key) {
    return this._wrapped_1.remove_gppy8k_k$(key);
  };
  function arraycopy(src, srcPos, dest, destPos, length) {
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator = until(0, length).iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var element = tmp0_iterator.next_20eer_k$();
      // Inline function 'com.strumenta.kotlinmultiplatform.arraycopy.<anonymous>' call
      dest[destPos + element | 0] = src[srcPos + element | 0];
    }
  }
  function isCharUppercase(firstChar) {
    // Inline function 'kotlin.text.toUpperCase' call
    var tmp = uppercaseChar(firstChar);
    // Inline function 'kotlin.text.toLowerCase' call
    // Inline function 'kotlin.text.lowercaseChar' call
    // Inline function 'kotlin.text.lowercase' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$3 = toString_0(firstChar).toLowerCase();
    if (tmp === charSequenceGet(tmp$ret$3, 0)) {
      return false;
    }
    // Inline function 'kotlin.text.toUpperCase' call
    return firstChar === uppercaseChar(firstChar);
  }
  function isSupplementaryCodePoint(_this__u8e3s4, codePoint) {
    // Inline function 'kotlin.TODO' call
    var reason = 'Char.Companion.isSupplementaryCodePoint not implemented';
    throw new NotImplementedError('An operation is not implemented: ' + reason);
  }
  function toChars(_this__u8e3s4, codePoint, resultArray, resultIdx) {
    // Inline function 'kotlin.TODO' call
    var reason = 'Char.Companion.toChars not implemented';
    throw new NotImplementedError('An operation is not implemented: ' + reason);
  }
  function charCount(_this__u8e3s4, i) {
    // Inline function 'kotlin.TODO' call
    var reason = 'Char.Companion.charCount not implemented';
    throw new NotImplementedError('An operation is not implemented: ' + reason);
  }
  function maxValue(_this__u8e3s4) {
    return _Char___init__impl__6a9atx(65535);
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
  protoOf(Type).get_javaClass_5v0jeb_k$ = function () {
    return this.javaClass_1;
  };
  function isInstance(_this__u8e3s4, any) {
    return get_kotlin(_this__u8e3s4.javaClass_1).isInstance_6tn68w_k$(any);
  }
  function getType(_this__u8e3s4, name) {
    // Inline function 'kotlin.collections.find' call
    var this_0 = _this__u8e3s4.get_classesByName_v5vx27_k$();
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.collections.firstOrNull' call
      var tmp0_iterator = this_0.iterator_jk1svi_k$();
      while (tmp0_iterator.hasNext_bitz1p_k$()) {
        var element = tmp0_iterator.next_20eer_k$();
        // Inline function 'com.strumenta.kotlinmultiplatform.getType.<anonymous>' call
        if (element.get_simpleName_r6f8py_k$() === name) {
          tmp$ret$1 = element;
          break $l$block;
        }
      }
      tmp$ret$1 = null;
    }
    var tmp$ret$2 = tmp$ret$1;
    return new Type(get_js(ensureNotNull(tmp$ret$2)));
  }
  function CharStreams() {
    CharStreams_instance = this;
    AbstractCharStreams.call(this);
  }
  var CharStreams_instance;
  function CharStreams_getInstance() {
    if (CharStreams_instance == null)
      new CharStreams();
    return CharStreams_instance;
  }
  function ThreadLocal() {
  }
  protoOf(ThreadLocal).equals = function (other) {
    if (!(other instanceof ThreadLocal))
      return false;
    other instanceof ThreadLocal || THROW_CCE();
    return true;
  };
  protoOf(ThreadLocal).hashCode = function () {
    return 0;
  };
  protoOf(ThreadLocal).toString = function () {
    return '@org.antlr.v4.kotlinruntime.ThreadLocal()';
  };
  function Platform() {
    Platform_instance = this;
  }
  protoOf(Platform).readFile_xjr12d_k$ = function (fileName, $completion) {
    // Inline function 'kotlin.TODO' call
    var reason = 'not implemented';
    throw new NotImplementedError('An operation is not implemented: ' + reason);
  };
  var Platform_instance;
  function Platform_getInstance() {
    if (Platform_instance == null)
      new Platform();
    return Platform_instance;
  }
  //region block: post-declaration
  protoOf(CommonToken).startPoint_q8y2lu_k$ = startPoint;
  protoOf(CommonToken).endPoint_sb0gad_k$ = endPoint;
  defineProp(protoOf(RecognitionException), 'message', function () {
    return this.get_message_h23axq_k$();
  });
  //endregion
  //region block: init
  DEFAULT_CHANNEL = 0;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = TypeDeclarator;
  _.$_$.b = asCharArray;
  _.$_$.c = getType;
  _.$_$.d = Lexer_init_$Init$_0;
  _.$_$.e = ParserRuleContext_init_$Init$_0;
  _.$_$.f = Companion_getInstance_34;
  _.$_$.g = CharStreams_getInstance;
  _.$_$.h = Companion_getInstance_5;
  _.$_$.i = ATNDeserializer;
  _.$_$.j = LexerATNSimulator;
  _.$_$.k = ParserATNSimulator;
  _.$_$.l = PredictionContextCache;
  _.$_$.m = DFA;
  _.$_$.n = Interval;
  _.$_$.o = ParseTreeListener;
  _.$_$.p = TerminalNode;
  _.$_$.q = ANTLRErrorListener;
  _.$_$.r = CommonTokenStream;
  _.$_$.s = CommonToken;
  _.$_$.t = Lexer;
  _.$_$.u = NoViableAltException;
  _.$_$.v = ParserRuleContext;
  _.$_$.w = Parser;
  _.$_$.x = RecognitionException;
  _.$_$.y = Token;
  _.$_$.z = VocabularyImpl;
  //endregion
  return _;
}));

//# sourceMappingURL=antlr-kotlin-antlr-kotlin-runtime.js.map
