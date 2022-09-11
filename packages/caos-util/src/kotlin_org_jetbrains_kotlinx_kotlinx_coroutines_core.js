(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin_kotlin.js', './kotlin_org_jetbrains_kotlinx_atomicfu.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin_kotlin.js'), require('./kotlin_org_jetbrains_kotlinx_atomicfu.js'));
  else {
    if (typeof kotlin_kotlin === 'undefined') {
      throw new Error("Error loading module 'kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core'. Its dependency 'kotlin_kotlin' was not found. Please, check whether 'kotlin_kotlin' is loaded prior to 'kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core'.");
    }
    if (typeof kotlin_org_jetbrains_kotlinx_atomicfu === 'undefined') {
      throw new Error("Error loading module 'kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core'. Its dependency 'kotlin_org_jetbrains_kotlinx_atomicfu' was not found. Please, check whether 'kotlin_org_jetbrains_kotlinx_atomicfu' is loaded prior to 'kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core'.");
    }
    root.kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core = factory(typeof kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core === 'undefined' ? {} : kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core, kotlin_kotlin, kotlin_org_jetbrains_kotlinx_atomicfu);
  }
}(this, function (_, kotlin_kotlin, kotlin_org_jetbrains_kotlinx_atomicfu) {
  //region block: imports
  var imul = Math.imul;
  var THROW_CCE = kotlin_kotlin.$crossModule$.THROW_CCE;
  var Annotation = kotlin_kotlin.$crossModule$.Annotation;
  var intercepted = kotlin_kotlin.$crossModule$.intercepted;
  var Unit_getInstance = kotlin_kotlin.$crossModule$.Unit_getInstance;
  var Continuation = kotlin_kotlin.$crossModule$.Continuation;
  var isInterface = kotlin_kotlin.$crossModule$.isInterface;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$crossModule$.IllegalStateException_init_$Create$_1;
  var toString = kotlin_kotlin.$crossModule$.toString_3;
  var toString_0 = kotlin_kotlin.$crossModule$.toString_1;
  var atomic$int$1 = kotlin_org_jetbrains_kotlinx_atomicfu.$crossModule$.atomic$int$1;
  var atomic$ref$1 = kotlin_org_jetbrains_kotlinx_atomicfu.$crossModule$.atomic$ref$1;
  var _get_COROUTINE_SUSPENDED__2870145053 = kotlin_kotlin.$crossModule$._get_COROUTINE_SUSPENDED__2870145053;
  var isObject = kotlin_kotlin.$crossModule$.isObject;
  var hashCode = kotlin_kotlin.$crossModule$.hashCode;
  var equals = kotlin_kotlin.$crossModule$.equals;
  var atomic$boolean$1 = kotlin_org_jetbrains_kotlinx_atomicfu.$crossModule$.atomic$boolean$1;
  var CancellationException_init_$Create$ = kotlin_kotlin.$crossModule$.CancellationException_init_$Create$;
  var Result__exceptionOrNull_impl_1523290257 = kotlin_kotlin.$crossModule$.Result__exceptionOrNull_impl_1523290257;
  var _Result___get_value__impl__3597185688 = kotlin_kotlin.$crossModule$._Result___get_value__impl__3597185688;
  var AbstractCoroutineContextKey = kotlin_kotlin.$crossModule$.AbstractCoroutineContextKey;
  var Key_getInstance = kotlin_kotlin.$crossModule$.Key_getInstance;
  var AbstractCoroutineContextElement = kotlin_kotlin.$crossModule$.AbstractCoroutineContextElement;
  var get = kotlin_kotlin.$crossModule$.get;
  var fold = kotlin_kotlin.$crossModule$.fold;
  var minusKey = kotlin_kotlin.$crossModule$.minusKey;
  var plus = kotlin_kotlin.$crossModule$.plus_6;
  var ContinuationInterceptor = kotlin_kotlin.$crossModule$.ContinuationInterceptor;
  var Key = kotlin_kotlin.$crossModule$.Key;
  var Element = kotlin_kotlin.$crossModule$.Element;
  var RuntimeException_init_$Create$ = kotlin_kotlin.$crossModule$.RuntimeException_init_$Create$_2;
  var Long = kotlin_kotlin.$crossModule$.Long;
  var Companion_getInstance = kotlin_kotlin.$crossModule$.Companion_getInstance_1;
  var RuntimeException = kotlin_kotlin.$crossModule$.RuntimeException;
  var RuntimeException_init_$Init$ = kotlin_kotlin.$crossModule$.RuntimeException_init_$Init$_1;
  var captureStack = kotlin_kotlin.$crossModule$.captureStack;
  var Error_0 = kotlin_kotlin.$crossModule$.Error;
  var Error_init_$Init$ = kotlin_kotlin.$crossModule$.Error_init_$Init$;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$crossModule$.StringBuilder_init_$Create$_1;
  var anyToString = kotlin_kotlin.$crossModule$.anyToString;
  var throwUninitializedPropertyAccessException = kotlin_kotlin.$crossModule$.throwUninitializedPropertyAccessException;
  var ArrayList_init_$Create$ = kotlin_kotlin.$crossModule$.ArrayList_init_$Create$;
  var CancellationException = kotlin_kotlin.$crossModule$.CancellationException;
  var ArrayList = kotlin_kotlin.$crossModule$.ArrayList;
  var CoroutineImpl = kotlin_kotlin.$crossModule$.CoroutineImpl;
  var SequenceScope = kotlin_kotlin.$crossModule$.SequenceScope;
  var IllegalStateException_init_$Create$_0 = kotlin_kotlin.$crossModule$.IllegalStateException_init_$Create$_2;
  var sequence = kotlin_kotlin.$crossModule$.sequence;
  var get_0 = kotlin_kotlin.$crossModule$.get_1;
  var minusKey_0 = kotlin_kotlin.$crossModule$.minusKey_1;
  var Companion_getInstance_0 = kotlin_kotlin.$crossModule$.Companion_getInstance_2;
  var _Result___init__impl__2241242780 = kotlin_kotlin.$crossModule$._Result___init__impl__2241242780;
  var createFailure = kotlin_kotlin.$crossModule$.createFailure;
  var SuspendFunction1 = kotlin_kotlin.$crossModule$.SuspendFunction1;
  var UnsupportedOperationException = kotlin_kotlin.$crossModule$.UnsupportedOperationException;
  var CancellationException_init_$Init$ = kotlin_kotlin.$crossModule$.CancellationException_init_$Init$;
  var UnsupportedOperationException_init_$Create$ = kotlin_kotlin.$crossModule$.UnsupportedOperationException_init_$Create$_1;
  var fillArrayVal = kotlin_kotlin.$crossModule$.fillArrayVal;
  var IntCompanionObject_getInstance = kotlin_kotlin.$crossModule$.IntCompanionObject_getInstance;
  var arrayCopy = kotlin_kotlin.$crossModule$.arrayCopy;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$crossModule$.IllegalArgumentException_init_$Create$_1;
  var ensureNotNull = kotlin_kotlin.$crossModule$.ensureNotNull;
  var EmptyCoroutineContext_getInstance = kotlin_kotlin.$crossModule$.EmptyCoroutineContext_getInstance;
  var toLong = kotlin_kotlin.$crossModule$.toLong;
  var atomic$long$1 = kotlin_org_jetbrains_kotlinx_atomicfu.$crossModule$.atomic$long$1;
  var atomicfu$AtomicRefArray$ofNulls = kotlin_org_jetbrains_kotlinx_atomicfu.$crossModule$.atomicfu$AtomicRefArray$ofNulls;
  var toLongOrNull = kotlin_kotlin.$crossModule$.toLongOrNull;
  var createCoroutineUnintercepted = kotlin_kotlin.$crossModule$.createCoroutineUnintercepted_1;
  var createCoroutineUnintercepted_0 = kotlin_kotlin.$crossModule$.createCoroutineUnintercepted;
  var getKClassFromExpression = kotlin_kotlin.$crossModule$.getKClassFromExpression;
  var CancellationException_init_$Init$_0 = kotlin_kotlin.$crossModule$.CancellationException_init_$Init$_1;
  var getStringHashCode = kotlin_kotlin.$crossModule$.getStringHashCode;
  var coerceIn = kotlin_kotlin.$crossModule$.coerceIn;
  var HashSet_init_$Create$ = kotlin_kotlin.$crossModule$.HashSet_init_$Create$;
  var UnsupportedOperationException_init_$Create$_0 = kotlin_kotlin.$crossModule$.UnsupportedOperationException_init_$Create$;
  //endregion
  'use strict';
  //region block: pre-declaration
  function tryResume$default(value, idempotent, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      idempotent = null;
    return $handler == null ? this.tryResume_10oxem_k$(value, idempotent) : $handler(value, idempotent);
  }
  function cancel$default(cause, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      cause = null;
    return $handler == null ? this.cancel_as6ug7_k$(cause) : $handler(cause);
  }
  CancelHandler.prototype = Object.create(CancelHandlerBase.prototype);
  CancelHandler.prototype.constructor = CancelHandler;
  DisposeOnCancel.prototype = Object.create(CancelHandler.prototype);
  DisposeOnCancel.prototype.constructor = DisposeOnCancel;
  DispatchedTask.prototype = Object.create(SchedulerTask.prototype);
  DispatchedTask.prototype.constructor = DispatchedTask;
  CancellableContinuationImpl.prototype = Object.create(DispatchedTask.prototype);
  CancellableContinuationImpl.prototype.constructor = CancellableContinuationImpl;
  BeforeResumeCancelHandler.prototype = Object.create(CancelHandler.prototype);
  BeforeResumeCancelHandler.prototype.constructor = BeforeResumeCancelHandler;
  InvokeOnCancel.prototype = Object.create(CancelHandler.prototype);
  InvokeOnCancel.prototype.constructor = InvokeOnCancel;
  CancelledContinuation.prototype = Object.create(CompletedExceptionally.prototype);
  CancelledContinuation.prototype.constructor = CancelledContinuation;
  Key_0.prototype = Object.create(AbstractCoroutineContextKey.prototype);
  Key_0.prototype.constructor = Key_0;
  CoroutineDispatcher.prototype = Object.create(AbstractCoroutineContextElement.prototype);
  CoroutineDispatcher.prototype.constructor = CoroutineDispatcher;
  function delay(time, $cont) {
    if (time.compareTo_n4fqi2_k$(new Long(0, 0)) <= 0)
      return Unit_getInstance();
    var tmp$ret$0;
    $l$block: {
      var tmp0__anonymous__1_1_1682274507 = $cont;
      var cancellable_2_2 = new CancellableContinuationImpl(intercepted(tmp0__anonymous__1_1_1682274507), _get_MODE_CANCELLABLE__581347323());
      cancellable_2_2.initCancellability_sh6jkn_k$();
      {
        this.scheduleResumeAfterDelay_5x4w1l_k$(time, cancellable_2_2);
      }
      tmp$ret$0 = cancellable_2_2.getResult_clfhg3_k$();
      break $l$block;
    }
    return tmp$ret$0;
  }
  function invokeOnTimeout(timeMillis, block, context) {
    return _get_DefaultDelay__1069114793().invokeOnTimeout_sx2bqq_k$(timeMillis, block, context);
  }
  EventLoop.prototype = Object.create(CoroutineDispatcher.prototype);
  EventLoop.prototype.constructor = EventLoop;
  CompletionHandlerException.prototype = Object.create(RuntimeException.prototype);
  CompletionHandlerException.prototype.constructor = CompletionHandlerException;
  CoroutinesInternalError.prototype = Object.create(Error_0.prototype);
  CoroutinesInternalError.prototype.constructor = CoroutinesInternalError;
  function cancel$default_0(cause, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      cause = null;
    return $handler == null ? this.cancel_4b7aim_k$(cause) : $handler(cause);
  }
  function cancel() {
    return this.cancel_4b7aim_k$(null);
  }
  function cancel$default_1(cause, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      cause = null;
    return $handler == null ? this.cancel_as6ug7_k$(cause) : $handler(cause);
  }
  function invokeOnCompletion$default(onCancelling, invokeImmediately, handler, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      onCancelling = false;
    if (!(($mask0 & 2) === 0))
      invokeImmediately = true;
    return $handler == null ? this.invokeOnCompletion_npwpyn_k$(onCancelling, invokeImmediately, handler) : $handler(onCancelling, invokeImmediately, handler);
  }
  function plus_0(other) {
    return other;
  }
  LinkedListHead.prototype = Object.create(LinkedListNode.prototype);
  LinkedListHead.prototype.constructor = LinkedListHead;
  NodeList.prototype = Object.create(LinkedListHead.prototype);
  NodeList.prototype.constructor = NodeList;
  CompletionHandlerBase.prototype = Object.create(LinkedListNode.prototype);
  CompletionHandlerBase.prototype.constructor = CompletionHandlerBase;
  JobNode.prototype = Object.create(CompletionHandlerBase.prototype);
  JobNode.prototype.constructor = JobNode;
  ChildCompletion.prototype = Object.create(JobNode.prototype);
  ChildCompletion.prototype.constructor = ChildCompletion;
  AwaitContinuation.prototype = Object.create(CancellableContinuationImpl.prototype);
  AwaitContinuation.prototype.constructor = AwaitContinuation;
  JobSupport$_get_children_$slambda_1222912628.prototype = Object.create(CoroutineImpl.prototype);
  JobSupport$_get_children_$slambda_1222912628.prototype.constructor = JobSupport$_get_children_$slambda_1222912628;
  JobCancellingNode.prototype = Object.create(JobNode.prototype);
  JobCancellingNode.prototype.constructor = JobCancellingNode;
  ChildHandleNode.prototype = Object.create(JobCancellingNode.prototype);
  ChildHandleNode.prototype.constructor = ChildHandleNode;
  InvokeOnCancelling.prototype = Object.create(JobCancellingNode.prototype);
  InvokeOnCancelling.prototype.constructor = InvokeOnCancelling;
  InvokeOnCompletion.prototype = Object.create(JobNode.prototype);
  InvokeOnCompletion.prototype.constructor = InvokeOnCompletion;
  ResumeOnCompletion.prototype = Object.create(JobNode.prototype);
  ResumeOnCompletion.prototype.constructor = ResumeOnCompletion;
  SelectJoinOnCompletion.prototype = Object.create(JobNode.prototype);
  SelectJoinOnCompletion.prototype.constructor = SelectJoinOnCompletion;
  ResumeAwaitOnCompletion.prototype = Object.create(JobNode.prototype);
  ResumeAwaitOnCompletion.prototype.constructor = ResumeAwaitOnCompletion;
  SelectAwaitOnCompletion.prototype = Object.create(JobNode.prototype);
  SelectAwaitOnCompletion.prototype.constructor = SelectAwaitOnCompletion;
  ChildContinuation.prototype = Object.create(JobCancellingNode.prototype);
  ChildContinuation.prototype.constructor = ChildContinuation;
  MainCoroutineDispatcher.prototype = Object.create(CoroutineDispatcher.prototype);
  MainCoroutineDispatcher.prototype.constructor = MainCoroutineDispatcher;
  TimeoutCancellationException.prototype = Object.create(CancellationException.prototype);
  TimeoutCancellationException.prototype.constructor = TimeoutCancellationException;
  Unconfined.prototype = Object.create(CoroutineDispatcher.prototype);
  Unconfined.prototype.constructor = Unconfined;
  YieldContext.prototype = Object.create(AbstractCoroutineContextElement.prototype);
  YieldContext.prototype.constructor = YieldContext;
  AtomicOp.prototype = Object.create(OpDescriptor.prototype);
  AtomicOp.prototype.constructor = AtomicOp;
  DispatchedContinuation.prototype = Object.create(DispatchedTask.prototype);
  DispatchedContinuation.prototype.constructor = DispatchedContinuation;
  LimitedDispatcher.prototype = Object.create(CoroutineDispatcher.prototype);
  LimitedDispatcher.prototype.constructor = LimitedDispatcher;
  JsMainDispatcher.prototype = Object.create(MainCoroutineDispatcher.prototype);
  JsMainDispatcher.prototype.constructor = JsMainDispatcher;
  UnconfinedEventLoop.prototype = Object.create(EventLoop.prototype);
  UnconfinedEventLoop.prototype.constructor = UnconfinedEventLoop;
  JobCancellationException.prototype = Object.create(CancellationException.prototype);
  JobCancellationException.prototype.constructor = JobCancellationException;
  SetTimeoutBasedDispatcher.prototype = Object.create(CoroutineDispatcher.prototype);
  SetTimeoutBasedDispatcher.prototype.constructor = SetTimeoutBasedDispatcher;
  NodeDispatcher.prototype = Object.create(SetTimeoutBasedDispatcher.prototype);
  NodeDispatcher.prototype.constructor = NodeDispatcher;
  SetTimeoutDispatcher.prototype = Object.create(SetTimeoutBasedDispatcher.prototype);
  SetTimeoutDispatcher.prototype.constructor = SetTimeoutDispatcher;
  MessageQueue.prototype = Object.create(ArrayQueue.prototype);
  MessageQueue.prototype.constructor = MessageQueue;
  ScheduledMessageQueue.prototype = Object.create(MessageQueue.prototype);
  ScheduledMessageQueue.prototype.constructor = ScheduledMessageQueue;
  ClearTimeout.prototype = Object.create(CancelHandler.prototype);
  ClearTimeout.prototype.constructor = ClearTimeout;
  WindowDispatcher.prototype = Object.create(CoroutineDispatcher.prototype);
  WindowDispatcher.prototype.constructor = WindowDispatcher;
  WindowMessageQueue.prototype = Object.create(MessageQueue.prototype);
  WindowMessageQueue.prototype.constructor = WindowMessageQueue;
  PrepareOp.prototype = Object.create(OpDescriptor.prototype);
  PrepareOp.prototype.constructor = PrepareOp;
  AbstractAtomicDesc.prototype = Object.create(AtomicDesc.prototype);
  AbstractAtomicDesc.prototype.constructor = AbstractAtomicDesc;
  //endregion
  function InternalCoroutinesApi() {
  }
  InternalCoroutinesApi.prototype.equals = function (other) {
    if (!(other instanceof InternalCoroutinesApi))
      return false;
    else {
    }
    var tmp0_other_with_cast = other instanceof InternalCoroutinesApi ? other : THROW_CCE();
    return true;
  };
  InternalCoroutinesApi.prototype.hashCode = function () {
    return 0;
  };
  InternalCoroutinesApi.prototype.toString = function () {
    return '@kotlinx.coroutines.InternalCoroutinesApi()';
  };
  InternalCoroutinesApi.$metadata$ = {
    simpleName: 'InternalCoroutinesApi',
    kind: 'class',
    interfaces: [Annotation]
  };
  function FlowPreview() {
  }
  FlowPreview.prototype.equals = function (other) {
    if (!(other instanceof FlowPreview))
      return false;
    else {
    }
    var tmp0_other_with_cast = other instanceof FlowPreview ? other : THROW_CCE();
    return true;
  };
  FlowPreview.prototype.hashCode = function () {
    return 0;
  };
  FlowPreview.prototype.toString = function () {
    return '@kotlinx.coroutines.FlowPreview()';
  };
  FlowPreview.$metadata$ = {
    simpleName: 'FlowPreview',
    kind: 'class',
    interfaces: [Annotation]
  };
  function ExperimentalCoroutinesApi() {
  }
  ExperimentalCoroutinesApi.prototype.equals = function (other) {
    if (!(other instanceof ExperimentalCoroutinesApi))
      return false;
    else {
    }
    var tmp0_other_with_cast = other instanceof ExperimentalCoroutinesApi ? other : THROW_CCE();
    return true;
  };
  ExperimentalCoroutinesApi.prototype.hashCode = function () {
    return 0;
  };
  ExperimentalCoroutinesApi.prototype.toString = function () {
    return '@kotlinx.coroutines.ExperimentalCoroutinesApi()';
  };
  ExperimentalCoroutinesApi.$metadata$ = {
    simpleName: 'ExperimentalCoroutinesApi',
    kind: 'class',
    interfaces: [Annotation]
  };
  function suspendCancellableCoroutine(block, $cont) {
    var tmp$ret$0;
    $l$block: {
      var tmp0__anonymous__1_2495602521 = $cont;
      var cancellable_2 = new CancellableContinuationImpl(intercepted(tmp0__anonymous__1_2495602521), _get_MODE_CANCELLABLE__581347323());
      cancellable_2.initCancellability_sh6jkn_k$();
      block(cancellable_2);
      tmp$ret$0 = cancellable_2.getResult_clfhg3_k$();
      break $l$block;
    }
    return tmp$ret$0;
  }
  function CancellableContinuation() {
  }
  CancellableContinuation.$metadata$ = {
    simpleName: 'CancellableContinuation',
    kind: 'interface',
    interfaces: [Continuation]
  };
  function disposeOnCancellation(_this__1828080292, handle) {
    var tmp$ret$1;
    $l$block_0: {
      var tmp0__get_asHandler__0_1201048388 = new DisposeOnCancel(handle);
      var tmp$ret$0;
      $l$block: {
        tmp$ret$0 = tmp0__get_asHandler__0_1201048388;
        break $l$block;
      }
      tmp$ret$1 = tmp$ret$0;
      break $l$block_0;
    }
    return _this__1828080292.invokeOnCancellation_yygv6h_k$(tmp$ret$1);
  }
  function _get_handle__2978141667($this) {
    return $this.handle_1;
  }
  function DisposeOnCancel(handle) {
    CancelHandler.call(this);
    this.handle_1 = handle;
  }
  DisposeOnCancel.prototype.invoke_7fb7sc_k$ = function (cause) {
    return this.handle_1.dispose_3n44we_k$();
  };
  DisposeOnCancel.prototype.invoke = function (cause) {
    return this.invoke_7fb7sc_k$(cause);
  };
  DisposeOnCancel.prototype.toString = function () {
    return 'DisposeOnCancel[' + this.handle_1 + ']';
  };
  DisposeOnCancel.$metadata$ = {
    simpleName: 'DisposeOnCancel',
    kind: 'class',
    interfaces: []
  };
  function _get_RESUME_TOKEN__2573897444() {
    init_properties_CancellableContinuationImpl_kt_3124303409();
    return RESUME_TOKEN;
  }
  var RESUME_TOKEN;
  function _get__decision__1855699062($this) {
    return $this._decision_1;
  }
  function _get__state__4101327289($this) {
    return $this._state_1;
  }
  function _set_parentHandle__4275866661($this, _set____804775014) {
    $this.parentHandle_1 = _set____804775014;
  }
  function _get_parentHandle__921052185($this) {
    return $this.parentHandle_1;
  }
  function _get_stateDebugRepresentation__690380284($this) {
    var tmp0_subject = $this._get_state__3614753120_b8zcm8_k$();
    var tmp;
    if (!(tmp0_subject == null) ? isInterface(tmp0_subject, NotCompleted) : false) {
      tmp = 'Active';
    } else {
      if (tmp0_subject instanceof CancelledContinuation) {
        tmp = 'Cancelled';
      } else {
        {
          tmp = 'Completed';
        }
      }
    }
    return tmp;
  }
  function isReusable($this) {
    var tmp;
    if (_get_isReusableMode__1222974867($this._get_resumeMode__2312873755_ws355x_k$())) {
      var tmp_0 = $this.delegate_1;
      tmp = (tmp_0 instanceof DispatchedContinuation ? tmp_0 : THROW_CCE()).isReusable_hrfetn_k$();
    } else {
      tmp = false;
    }
    return tmp;
  }
  function cancelLater($this, cause) {
    if (!isReusable($this))
      return false;
    var tmp = $this.delegate_1;
    var dispatched = tmp instanceof DispatchedContinuation ? tmp : THROW_CCE();
    return dispatched.postponeCancellation_723ard_k$(cause);
  }
  function callCancelHandlerSafely($this, block) {
    try {
      block();
    } catch ($p) {
      if ($p instanceof Error) {
        handleCoroutineException($this._get_context__1558698818_ps0bpe_k$(), new CompletionHandlerException('Exception in invokeOnCancellation handler for ' + $this, $p));
      } else {
        {
          throw $p;
        }
      }
    }
  }
  function callCancelHandler($this, handler, cause) {
    var tmp;
    try {
      tmp = invokeIt(handler, cause);
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Error) {
        tmp_0 = handleCoroutineException($this._get_context__1558698818_ps0bpe_k$(), new CompletionHandlerException('Exception in invokeOnCancellation handler for ' + $this, $p));
      } else {
        {
          throw $p;
        }
      }
      tmp = tmp_0;
    }
    return tmp;
  }
  function trySuspend($this) {
    {
      var tmp0_loop_0 = $this._decision_1;
      while (true) {
        {
          var tmp1__anonymous__1_4003154330 = tmp0_loop_0._get_value__3683422336_a43j40_k$();
          var tmp0_subject_2 = tmp1__anonymous__1_4003154330;
          switch (tmp0_subject_2) {
            case 0:
              if ($this._decision_1.atomicfu$compareAndSet(0, 1))
                return true;
              break;
            case 2:
              return false;
            default:
              throw IllegalStateException_init_$Create$('Already suspended');
          }
        }
      }
      Unit_getInstance();
    }
  }
  function tryResume($this) {
    {
      var tmp0_loop_0 = $this._decision_1;
      while (true) {
        {
          var tmp1__anonymous__1_4003154330 = tmp0_loop_0._get_value__3683422336_a43j40_k$();
          var tmp0_subject_2 = tmp1__anonymous__1_4003154330;
          switch (tmp0_subject_2) {
            case 0:
              if ($this._decision_1.atomicfu$compareAndSet(0, 2))
                return true;
              break;
            case 1:
              return false;
            default:
              throw IllegalStateException_init_$Create$('Already resumed');
          }
        }
      }
      Unit_getInstance();
    }
  }
  function installParentHandle($this) {
    var tmp0_elvis_lhs = $this._get_context__1558698818_ps0bpe_k$().get_1pi7hg_k$(Key_getInstance_2());
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return null;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var parent = tmp;
    var tmp$ret$1;
    $l$block_0: {
      var tmp0__get_asHandler__0_1201048388 = new ChildContinuation($this);
      var tmp$ret$0;
      $l$block: {
        tmp$ret$0 = tmp0__get_asHandler__0_1201048388;
        break $l$block;
      }
      tmp$ret$1 = tmp$ret$0;
      break $l$block_0;
    }
    var handle = parent.invokeOnCompletion$default_7q548c_k$(true, false, tmp$ret$1, 2, null);
    $this.parentHandle_1 = handle;
    return handle;
  }
  function releaseClaimedReusableContinuation($this) {
    var tmp = $this.delegate_1;
    var tmp0_safe_receiver = tmp instanceof DispatchedContinuation ? tmp : null;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.tryReleaseClaimedContinuation_5s4a1c_k$($this);
    var tmp_0;
    if (tmp1_elvis_lhs == null) {
      return Unit_getInstance();
    } else {
      tmp_0 = tmp1_elvis_lhs;
    }
    var cancellationCause = tmp_0;
    $this.detachChild_qdtbew_k$();
    $this.cancel_as6ug7_k$(cancellationCause);
    Unit_getInstance();
  }
  function multipleHandlersError($this, handler, state) {
    {
      var tmp0_error_0 = "It's prohibited to register multiple handlers, tried to register " + handler + ', already has ' + toString(state);
      throw IllegalStateException_init_$Create$(toString_0(tmp0_error_0));
    }
  }
  function makeCancelHandler($this, handler) {
    var tmp;
    if (handler instanceof CancelHandler) {
      tmp = handler;
    } else {
      {
        tmp = new InvokeOnCancel(handler);
      }
    }
    return tmp;
  }
  function dispatchResume($this, mode) {
    if (tryResume($this))
      return Unit_getInstance();
    dispatch($this, mode);
  }
  function resumedState($this, state, proposedUpdate, resumeMode, onCancellation, idempotent) {
    var tmp;
    if (proposedUpdate instanceof CompletedExceptionally) {
      {
      }
      {
      }
      tmp = proposedUpdate;
    } else {
      if (!_get_isCancellableMode__2954248492(resumeMode) ? idempotent == null : false) {
        tmp = proposedUpdate;
      } else {
        var tmp_0;
        var tmp_1;
        if (!(onCancellation == null)) {
          tmp_1 = true;
        } else {
          var tmp_2;
          if (state instanceof CancelHandler) {
            tmp_2 = !(state instanceof BeforeResumeCancelHandler);
          } else {
            {
              tmp_2 = false;
            }
          }
          tmp_1 = tmp_2;
        }
        if (tmp_1) {
          tmp_0 = true;
        } else {
          {
            tmp_0 = !(idempotent == null);
          }
        }
        if (tmp_0) {
          var tmp_3 = state instanceof CancelHandler ? state : null;
          tmp = CompletedContinuation_init_$Create$(proposedUpdate, tmp_3, onCancellation, idempotent, null, 16, null);
        } else {
          {
            tmp = proposedUpdate;
          }
        }
      }
    }
    return tmp;
  }
  function resumeImpl($this, proposedUpdate, resumeMode, onCancellation) {
    {
      var tmp0_loop_0 = $this._state_1;
      while (true) {
        var tmp$ret$0;
        $l$block: {
          var tmp1__anonymous__1_4003154330 = tmp0_loop_0._get_value__3683422336_a43j40_k$();
          var tmp0_subject_2 = tmp1__anonymous__1_4003154330;
          if (!(tmp0_subject_2 == null) ? isInterface(tmp0_subject_2, NotCompleted) : false) {
            var update_3 = resumedState($this, tmp1__anonymous__1_4003154330, proposedUpdate, resumeMode, onCancellation, null);
            if (!$this._state_1.atomicfu$compareAndSet(tmp1__anonymous__1_4003154330, update_3)) {
              tmp$ret$0 = Unit_getInstance();
              break $l$block;
            }
            detachChildIfNonResuable($this);
            dispatchResume($this, resumeMode);
            return Unit_getInstance();
          } else {
            if (tmp0_subject_2 instanceof CancelledContinuation) {
              if (tmp1__anonymous__1_4003154330.makeResumed_vjvawn_k$()) {
                var tmp1_safe_receiver_4 = onCancellation;
                if (tmp1_safe_receiver_4 == null)
                  null;
                else {
                  var tmp$ret$1;
                  $l$block_0: {
                    {
                    }
                    tmp$ret$1 = $this.callOnCancellation_adp92k_k$(tmp1_safe_receiver_4, tmp1__anonymous__1_4003154330._get_cause__3139734664_j3sn7c_k$());
                    break $l$block_0;
                  }
                  Unit_getInstance();
                }
                Unit_getInstance();
                return Unit_getInstance();
              }
            } else {
            }
          }
          alreadyResumedError($this, proposedUpdate);
        }
      }
      Unit_getInstance();
    }
  }
  function resumeImpl$default($this, proposedUpdate, resumeMode, onCancellation, $mask0, $handler) {
    if (!(($mask0 & 8) === 0))
      onCancellation = null;
    return resumeImpl($this, proposedUpdate, resumeMode, onCancellation);
  }
  function tryResumeImpl($this, proposedUpdate, idempotent, onCancellation) {
    {
      var tmp0_loop_0 = $this._state_1;
      while (true) {
        var tmp$ret$0;
        $l$block: {
          var tmp1__anonymous__1_4003154330 = tmp0_loop_0._get_value__3683422336_a43j40_k$();
          var tmp0_subject_2 = tmp1__anonymous__1_4003154330;
          if (!(tmp0_subject_2 == null) ? isInterface(tmp0_subject_2, NotCompleted) : false) {
            var update_3 = resumedState($this, tmp1__anonymous__1_4003154330, proposedUpdate, $this._get_resumeMode__2312873755_ws355x_k$(), onCancellation, idempotent);
            if (!$this._state_1.atomicfu$compareAndSet(tmp1__anonymous__1_4003154330, update_3)) {
              tmp$ret$0 = Unit_getInstance();
              break $l$block;
            }
            detachChildIfNonResuable($this);
            return _get_RESUME_TOKEN__2573897444();
          } else {
            if (tmp0_subject_2 instanceof CompletedContinuation) {
              var tmp;
              if (!(idempotent == null) ? tmp1__anonymous__1_4003154330.idempotentResume_1 === idempotent : false) {
                {
                }
                tmp = _get_RESUME_TOKEN__2573897444();
              } else {
                tmp = null;
              }
              return tmp;
            } else {
              return null;
            }
          }
        }
      }
      Unit_getInstance();
    }
  }
  function alreadyResumedError($this, proposedUpdate) {
    {
      var tmp0_error_0 = 'Already resumed, but proposed with update ' + toString(proposedUpdate);
      throw IllegalStateException_init_$Create$(toString_0(tmp0_error_0));
    }
  }
  function detachChildIfNonResuable($this) {
    if (!isReusable($this))
      $this.detachChild_qdtbew_k$();
  }
  function CancellableContinuationImpl(delegate, resumeMode) {
    DispatchedTask.call(this, resumeMode);
    this.delegate_1 = delegate;
    {
    }
    this.context_1 = this.delegate_1._get_context__1558698818_ps0bpe_k$();
    this._decision_1 = atomic$int$1(0);
    this._state_1 = atomic$ref$1(Active_getInstance());
    this.parentHandle_1 = null;
  }
  CancellableContinuationImpl.prototype._get_delegate__1111020262_idh0py_k$ = function () {
    return this.delegate_1;
  };
  CancellableContinuationImpl.prototype._get_context__1558698818_ps0bpe_k$ = function () {
    return this.context_1;
  };
  CancellableContinuationImpl.prototype._get_state__3614753120_b8zcm8_k$ = function () {
    return this._state_1._get_value__3683422336_a43j40_k$();
  };
  CancellableContinuationImpl.prototype._get_isActive__4035225851_4an5s5_k$ = function () {
    var tmp = this._get_state__3614753120_b8zcm8_k$();
    return !(tmp == null) ? isInterface(tmp, NotCompleted) : false;
  };
  CancellableContinuationImpl.prototype._get_isCompleted__3284240752_gprdlc_k$ = function () {
    var tmp = this._get_state__3614753120_b8zcm8_k$();
    return !(!(tmp == null) ? isInterface(tmp, NotCompleted) : false);
  };
  CancellableContinuationImpl.prototype._get_isCancelled__1419818794_nhbn6y_k$ = function () {
    var tmp = this._get_state__3614753120_b8zcm8_k$();
    return tmp instanceof CancelledContinuation;
  };
  CancellableContinuationImpl.prototype.initCancellability_sh6jkn_k$ = function () {
    var tmp0_elvis_lhs = installParentHandle(this);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return Unit_getInstance();
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var handle = tmp;
    if (this._get_isCompleted__3284240752_gprdlc_k$()) {
      handle.dispose_3n44we_k$();
      this.parentHandle_1 = NonDisposableHandle_getInstance();
    }
  };
  CancellableContinuationImpl.prototype.resetStateReusable_a3kq5v_k$ = function () {
    {
    }
    {
    }
    var state = this._state_1._get_value__3683422336_a43j40_k$();
    {
    }
    var tmp;
    if (state instanceof CompletedContinuation) {
      tmp = !(state.idempotentResume_1 == null);
    } else {
      {
        tmp = false;
      }
    }
    if (tmp) {
      this.detachChild_qdtbew_k$();
      return false;
    } else {
    }
    this._decision_1._set_value__1325260276_xwdays_k$(0);
    this._state_1._set_value__1325260276_x73o94_k$(Active_getInstance());
    return true;
  };
  CancellableContinuationImpl.prototype._get_callerFrame__1796373807_tpiiwf_k$ = function () {
    var tmp = this.delegate_1;
    return isInterface(tmp, CoroutineStackFrame) ? tmp : null;
  };
  CancellableContinuationImpl.prototype.getStackTraceElement_um8m53_k$ = function () {
    return null;
  };
  CancellableContinuationImpl.prototype.takeState_olvzuy_k$ = function () {
    return this._get_state__3614753120_b8zcm8_k$();
  };
  CancellableContinuationImpl.prototype.cancelCompletedResult_tweln2_k$ = function (takenState, cause) {
    var tmp0_loop_0 = this._state_1;
    while (true) {
      {
        var tmp1__anonymous__1_4003154330 = tmp0_loop_0._get_value__3683422336_a43j40_k$();
        var tmp0_subject_2 = tmp1__anonymous__1_4003154330;
        if (!(tmp0_subject_2 == null) ? isInterface(tmp0_subject_2, NotCompleted) : false) {
          throw IllegalStateException_init_$Create$('Not completed');
        } else {
          if (tmp0_subject_2 instanceof CompletedExceptionally)
            return Unit_getInstance();
          else {
            if (tmp0_subject_2 instanceof CompletedContinuation) {
              {
                var tmp0_check_0_3 = !tmp1__anonymous__1_4003154330._get_cancelled__581563168_9m8x0g_k$();
                {
                }
                if (!tmp0_check_0_3) {
                  var tmp$ret$0;
                  $l$block: {
                    tmp$ret$0 = 'Must be called at most once';
                    break $l$block;
                  }
                  var message_1_4 = tmp$ret$0;
                  throw IllegalStateException_init_$Create$(toString_0(message_1_4));
                }
              }
              var update_5 = tmp1__anonymous__1_4003154330.copy$default_x1yew9_k$(null, null, null, null, cause, 15, null);
              if (this._state_1.atomicfu$compareAndSet(tmp1__anonymous__1_4003154330, update_5)) {
                tmp1__anonymous__1_4003154330.invokeHandlers_2wd6qe_k$(this, cause);
                return Unit_getInstance();
              }
            } else {
              {
                if (this._state_1.atomicfu$compareAndSet(tmp1__anonymous__1_4003154330, CompletedContinuation_init_$Create$(tmp1__anonymous__1_4003154330, null, null, null, cause, 14, null))) {
                  return Unit_getInstance();
                } else {
                }
              }
            }
          }
        }
      }
    }
    return Unit_getInstance();
  };
  CancellableContinuationImpl.prototype.cancel_as6ug7_k$ = function (cause) {
    {
      var tmp0_loop_0 = this._state_1;
      while (true) {
        var tmp$ret$0;
        $l$block: {
          var tmp1__anonymous__1_4003154330 = tmp0_loop_0._get_value__3683422336_a43j40_k$();
          if (!(!(tmp1__anonymous__1_4003154330 == null) ? isInterface(tmp1__anonymous__1_4003154330, NotCompleted) : false))
            return false;
          else {
          }
          var update_2 = new CancelledContinuation(this, cause, tmp1__anonymous__1_4003154330 instanceof CancelHandler);
          if (!this._state_1.atomicfu$compareAndSet(tmp1__anonymous__1_4003154330, update_2)) {
            tmp$ret$0 = Unit_getInstance();
            break $l$block;
          }
          var tmp0_safe_receiver_3 = tmp1__anonymous__1_4003154330 instanceof CancelHandler ? tmp1__anonymous__1_4003154330 : null;
          if (tmp0_safe_receiver_3 == null)
            null;
          else {
            var tmp$ret$1;
            $l$block_0: {
              {
              }
              tmp$ret$1 = this.callCancelHandler_qcjvzx_k$(tmp0_safe_receiver_3, cause);
              break $l$block_0;
            }
            Unit_getInstance();
          }
          Unit_getInstance();
          detachChildIfNonResuable(this);
          dispatchResume(this, this._get_resumeMode__2312873755_ws355x_k$());
          return true;
        }
      }
      Unit_getInstance();
    }
  };
  CancellableContinuationImpl.prototype.parentCancelled_uc06zq_k$ = function (cause) {
    if (cancelLater(this, cause))
      return Unit_getInstance();
    this.cancel_as6ug7_k$(cause);
    Unit_getInstance();
    detachChildIfNonResuable(this);
  };
  CancellableContinuationImpl.prototype.callCancelHandler_qcjvzx_k$ = function (handler, cause) {
    var tmp;
    try {
      tmp = handler.invoke(cause);
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Error) {
        tmp_0 = handleCoroutineException(this._get_context__1558698818_ps0bpe_k$(), new CompletionHandlerException('Exception in invokeOnCancellation handler for ' + this, $p));
      } else {
        {
          throw $p;
        }
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  CancellableContinuationImpl.prototype.callOnCancellation_adp92k_k$ = function (onCancellation, cause) {
    try {
      onCancellation(cause);
    } catch ($p) {
      if ($p instanceof Error) {
        handleCoroutineException(this._get_context__1558698818_ps0bpe_k$(), new CompletionHandlerException('Exception in resume onCancellation handler for ' + this, $p));
      } else {
        {
          throw $p;
        }
      }
    }
  };
  CancellableContinuationImpl.prototype.getContinuationCancellationCause_62o4c9_k$ = function (parent) {
    return parent.getCancellationException_8i1q6u_k$();
  };
  CancellableContinuationImpl.prototype.getResult_clfhg3_k$ = function () {
    var isReusable_0 = isReusable(this);
    if (trySuspend(this)) {
      if (this.parentHandle_1 == null) {
        installParentHandle(this);
        Unit_getInstance();
      }
      if (isReusable_0) {
        releaseClaimedReusableContinuation(this);
      }
      return _get_COROUTINE_SUSPENDED__2870145053();
    }
    if (isReusable_0) {
      releaseClaimedReusableContinuation(this);
    }
    var state = this._get_state__3614753120_b8zcm8_k$();
    if (state instanceof CompletedExceptionally)
      throw recoverStackTrace(state._get_cause__3139734664_j3sn7c_k$(), this);
    else {
    }
    if (_get_isCancellableMode__2954248492(this._get_resumeMode__2312873755_ws355x_k$())) {
      var job = this._get_context__1558698818_ps0bpe_k$().get_1pi7hg_k$(Key_getInstance_2());
      if (!(job == null) ? !job._get_isActive__4035225851_4an5s5_k$() : false) {
        var cause = job.getCancellationException_8i1q6u_k$();
        this.cancelCompletedResult_tweln2_k$(state, cause);
        throw recoverStackTrace(cause, this);
      }
    }
    return this.getSuccessfulResult_gdkv2w_k$(state);
  };
  CancellableContinuationImpl.prototype.resumeWith_s3a3yh_k$ = function (result) {
    var tmp = toState(result, this);
    var tmp_0 = this._get_resumeMode__2312873755_ws355x_k$();
    return resumeImpl$default(this, tmp, tmp_0, null, 8, null);
  };
  CancellableContinuationImpl.prototype.resume_l1w5in_k$ = function (value, onCancellation) {
    return resumeImpl(this, value, this._get_resumeMode__2312873755_ws355x_k$(), onCancellation);
  };
  CancellableContinuationImpl.prototype.invokeOnCancellation_yygv6h_k$ = function (handler) {
    var cancelHandler = makeCancelHandler(this, handler);
    {
      var tmp0_loop_0 = this._state_1;
      while (true) {
        {
          var tmp1__anonymous__1_4003154330 = tmp0_loop_0._get_value__3683422336_a43j40_k$();
          var tmp0_subject_2 = tmp1__anonymous__1_4003154330;
          if (tmp0_subject_2 instanceof Active) {
            if (this._state_1.atomicfu$compareAndSet(tmp1__anonymous__1_4003154330, cancelHandler))
              return Unit_getInstance();
          } else {
            if (tmp0_subject_2 instanceof CancelHandler)
              multipleHandlersError(this, handler, tmp1__anonymous__1_4003154330);
            else {
              if (tmp0_subject_2 instanceof CompletedExceptionally) {
                if (!tmp1__anonymous__1_4003154330.makeHandled_ws9oq6_k$())
                  multipleHandlersError(this, handler, tmp1__anonymous__1_4003154330);
                if (tmp1__anonymous__1_4003154330 instanceof CancelledContinuation) {
                  var tmp1_safe_receiver_3 = tmp1__anonymous__1_4003154330 instanceof CompletedExceptionally ? tmp1__anonymous__1_4003154330 : null;
                  callCancelHandler(this, handler, tmp1_safe_receiver_3 == null ? null : tmp1_safe_receiver_3._get_cause__3139734664_j3sn7c_k$());
                } else {
                }
                return Unit_getInstance();
              } else {
                if (tmp0_subject_2 instanceof CompletedContinuation) {
                  if (!(tmp1__anonymous__1_4003154330.cancelHandler_1 == null))
                    multipleHandlersError(this, handler, tmp1__anonymous__1_4003154330);
                  if (cancelHandler instanceof BeforeResumeCancelHandler)
                    return Unit_getInstance();
                  else {
                  }
                  if (tmp1__anonymous__1_4003154330._get_cancelled__581563168_9m8x0g_k$()) {
                    callCancelHandler(this, handler, tmp1__anonymous__1_4003154330.cancelCause_1);
                    return Unit_getInstance();
                  }
                  var update_4 = tmp1__anonymous__1_4003154330.copy$default_x1yew9_k$(null, cancelHandler, null, null, null, 29, null);
                  if (this._state_1.atomicfu$compareAndSet(tmp1__anonymous__1_4003154330, update_4))
                    return Unit_getInstance();
                } else {
                  {
                    if (cancelHandler instanceof BeforeResumeCancelHandler)
                      return Unit_getInstance();
                    else {
                    }
                    var update_5 = CompletedContinuation_init_$Create$(tmp1__anonymous__1_4003154330, cancelHandler, null, null, null, 28, null);
                    if (this._state_1.atomicfu$compareAndSet(tmp1__anonymous__1_4003154330, update_5))
                      return Unit_getInstance();
                  }
                }
              }
            }
          }
        }
      }
      Unit_getInstance();
    }
  };
  CancellableContinuationImpl.prototype.detachChild_qdtbew_k$ = function () {
    var tmp0_elvis_lhs = this.parentHandle_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return Unit_getInstance();
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var handle = tmp;
    handle.dispose_3n44we_k$();
    this.parentHandle_1 = NonDisposableHandle_getInstance();
  };
  CancellableContinuationImpl.prototype.tryResume_10oxem_k$ = function (value, idempotent) {
    return tryResumeImpl(this, value, idempotent, null);
  };
  CancellableContinuationImpl.prototype.tryResume_93jc0s_k$ = function (value, idempotent, onCancellation) {
    return tryResumeImpl(this, value, idempotent, onCancellation);
  };
  CancellableContinuationImpl.prototype.tryResumeWithException_3icka9_k$ = function (exception) {
    return tryResumeImpl(this, CompletedExceptionally_init_$Create$(exception, false, 2, null), null, null);
  };
  CancellableContinuationImpl.prototype.completeResume_fu4ex_k$ = function (token) {
    {
    }
    dispatchResume(this, this._get_resumeMode__2312873755_ws355x_k$());
  };
  CancellableContinuationImpl.prototype.resumeUndispatched_re4yxz_k$ = function (_this__1828080292, value) {
    var tmp = this.delegate_1;
    var dc = tmp instanceof DispatchedContinuation ? tmp : null;
    var tmp_0;
    var tmp0_safe_receiver = dc;
    if ((tmp0_safe_receiver == null ? null : tmp0_safe_receiver._get_dispatcher__3474623172_dketks_k$()) === _this__1828080292) {
      tmp_0 = _get_MODE_UNDISPATCHED__3658117635();
    } else {
      {
        tmp_0 = this._get_resumeMode__2312873755_ws355x_k$();
      }
    }
    var tmp_1 = tmp_0;
    resumeImpl$default(this, value, tmp_1, null, 8, null);
  };
  CancellableContinuationImpl.prototype.resumeUndispatchedWithException_xuy3rd_k$ = function (_this__1828080292, exception) {
    var tmp = this.delegate_1;
    var dc = tmp instanceof DispatchedContinuation ? tmp : null;
    var tmp_0 = CompletedExceptionally_init_$Create$(exception, false, 2, null);
    var tmp_1;
    var tmp0_safe_receiver = dc;
    if ((tmp0_safe_receiver == null ? null : tmp0_safe_receiver._get_dispatcher__3474623172_dketks_k$()) === _this__1828080292) {
      tmp_1 = _get_MODE_UNDISPATCHED__3658117635();
    } else {
      {
        tmp_1 = this._get_resumeMode__2312873755_ws355x_k$();
      }
    }
    var tmp_2 = tmp_1;
    resumeImpl$default(this, tmp_0, tmp_2, null, 8, null);
  };
  CancellableContinuationImpl.prototype.getSuccessfulResult_gdkv2w_k$ = function (state) {
    var tmp0_subject = state;
    var tmp;
    if (tmp0_subject instanceof CompletedContinuation) {
      var tmp_0 = state.result_1;
      tmp = (tmp_0 == null ? true : isObject(tmp_0)) ? tmp_0 : THROW_CCE();
    } else {
      {
        tmp = (state == null ? true : isObject(state)) ? state : THROW_CCE();
      }
    }
    return tmp;
  };
  CancellableContinuationImpl.prototype.getExceptionalResult_bnge6_k$ = function (state) {
    var tmp0_safe_receiver = DispatchedTask.prototype.getExceptionalResult_bnge6_k$.call(this, state);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      var tmp$ret$1;
      $l$block_0: {
        {
        }
        var tmp$ret$0;
        $l$block: {
          tmp$ret$0 = recoverStackTrace(tmp0_safe_receiver, this.delegate_1);
          break $l$block;
        }
        tmp$ret$1 = tmp$ret$0;
        break $l$block_0;
      }
      tmp = tmp$ret$1;
    }
    return tmp;
  };
  CancellableContinuationImpl.prototype.toString = function () {
    return this.nameString_cd9e9w_k$() + '(' + toDebugString(this.delegate_1) + '){' + _get_stateDebugRepresentation__690380284(this) + '}@' + _get_hexAddress__2831015762(this);
  };
  CancellableContinuationImpl.prototype.nameString_cd9e9w_k$ = function () {
    return 'CancellableContinuation';
  };
  CancellableContinuationImpl.$metadata$ = {
    simpleName: 'CancellableContinuationImpl',
    kind: 'class',
    interfaces: [CancellableContinuation, CoroutineStackFrame]
  };
  function CancelHandler() {
    CancelHandlerBase.call(this);
  }
  CancelHandler.$metadata$ = {
    simpleName: 'CancelHandler',
    kind: 'class',
    interfaces: [NotCompleted]
  };
  function _get_UNDECIDED__1268814222() {
    return UNDECIDED;
  }
  var UNDECIDED;
  function Active() {
    Active_instance = this;
  }
  Active.prototype.toString = function () {
    return 'Active';
  };
  Active.$metadata$ = {
    simpleName: 'Active',
    kind: 'object',
    interfaces: [NotCompleted]
  };
  var Active_instance;
  function Active_getInstance() {
    if (Active_instance == null)
      new Active();
    return Active_instance;
  }
  function NotCompleted() {
  }
  NotCompleted.$metadata$ = {
    simpleName: 'NotCompleted',
    kind: 'interface',
    interfaces: []
  };
  function CompletedContinuation_init_$Init$(result, cancelHandler, onCancellation, idempotentResume, cancelCause, $mask0, $marker, $this) {
    if (!(($mask0 & 2) === 0))
      cancelHandler = null;
    if (!(($mask0 & 4) === 0))
      onCancellation = null;
    if (!(($mask0 & 8) === 0))
      idempotentResume = null;
    if (!(($mask0 & 16) === 0))
      cancelCause = null;
    CompletedContinuation.call($this, result, cancelHandler, onCancellation, idempotentResume, cancelCause);
    return $this;
  }
  function CompletedContinuation_init_$Create$(result, cancelHandler, onCancellation, idempotentResume, cancelCause, $mask0, $marker) {
    return CompletedContinuation_init_$Init$(result, cancelHandler, onCancellation, idempotentResume, cancelCause, $mask0, $marker, Object.create(CompletedContinuation.prototype));
  }
  function CompletedContinuation(result, cancelHandler, onCancellation, idempotentResume, cancelCause) {
    this.result_1 = result;
    this.cancelHandler_1 = cancelHandler;
    this.onCancellation_1 = onCancellation;
    this.idempotentResume_1 = idempotentResume;
    this.cancelCause_1 = cancelCause;
  }
  CompletedContinuation.prototype._get_result__3382885006_f31376_k$ = function () {
    return this.result_1;
  };
  CompletedContinuation.prototype._get_cancelHandler__2891103073_n7tokf_k$ = function () {
    return this.cancelHandler_1;
  };
  CompletedContinuation.prototype._get_onCancellation__3868581321_71uxiv_k$ = function () {
    return this.onCancellation_1;
  };
  CompletedContinuation.prototype._get_idempotentResume__2151918277_zfwz7f_k$ = function () {
    return this.idempotentResume_1;
  };
  CompletedContinuation.prototype._get_cancelCause__3654494562_albjxa_k$ = function () {
    return this.cancelCause_1;
  };
  CompletedContinuation.prototype._get_cancelled__581563168_9m8x0g_k$ = function () {
    return !(this.cancelCause_1 == null);
  };
  CompletedContinuation.prototype.invokeHandlers_2wd6qe_k$ = function (cont, cause) {
    var tmp0_safe_receiver = this.cancelHandler_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp$ret$0;
      $l$block: {
        {
        }
        tmp$ret$0 = cont.callCancelHandler_qcjvzx_k$(tmp0_safe_receiver, cause);
        break $l$block;
      }
      Unit_getInstance();
    }
    Unit_getInstance();
    var tmp1_safe_receiver = this.onCancellation_1;
    if (tmp1_safe_receiver == null)
      null;
    else {
      var tmp$ret$1;
      $l$block_0: {
        {
        }
        tmp$ret$1 = cont.callOnCancellation_adp92k_k$(tmp1_safe_receiver, cause);
        break $l$block_0;
      }
      Unit_getInstance();
    }
    Unit_getInstance();
  };
  CompletedContinuation.prototype.component1_7eebsc_k$ = function () {
    return this.result_1;
  };
  CompletedContinuation.prototype.component2_7eebsb_k$ = function () {
    return this.cancelHandler_1;
  };
  CompletedContinuation.prototype.component3_7eebsa_k$ = function () {
    return this.onCancellation_1;
  };
  CompletedContinuation.prototype.component4_7eebs9_k$ = function () {
    return this.idempotentResume_1;
  };
  CompletedContinuation.prototype.component5_7eebs8_k$ = function () {
    return this.cancelCause_1;
  };
  CompletedContinuation.prototype.copy_q5vocy_k$ = function (result, cancelHandler, onCancellation, idempotentResume, cancelCause) {
    return new CompletedContinuation(result, cancelHandler, onCancellation, idempotentResume, cancelCause);
  };
  CompletedContinuation.prototype.copy$default_x1yew9_k$ = function (result, cancelHandler, onCancellation, idempotentResume, cancelCause, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      result = this.result_1;
    if (!(($mask0 & 2) === 0))
      cancelHandler = this.cancelHandler_1;
    if (!(($mask0 & 4) === 0))
      onCancellation = this.onCancellation_1;
    if (!(($mask0 & 8) === 0))
      idempotentResume = this.idempotentResume_1;
    if (!(($mask0 & 16) === 0))
      cancelCause = this.cancelCause_1;
    return this.copy_q5vocy_k$(result, cancelHandler, onCancellation, idempotentResume, cancelCause);
  };
  CompletedContinuation.prototype.toString = function () {
    return 'CompletedContinuation(result=' + toString(this.result_1) + ', cancelHandler=' + this.cancelHandler_1 + ', onCancellation=' + this.onCancellation_1 + ', idempotentResume=' + toString(this.idempotentResume_1) + ', cancelCause=' + this.cancelCause_1 + ')';
  };
  CompletedContinuation.prototype.hashCode = function () {
    var result = this.result_1 == null ? 0 : hashCode(this.result_1);
    result = imul(result, 31) + (this.cancelHandler_1 == null ? 0 : hashCode(this.cancelHandler_1)) | 0;
    result = imul(result, 31) + (this.onCancellation_1 == null ? 0 : hashCode(this.onCancellation_1)) | 0;
    result = imul(result, 31) + (this.idempotentResume_1 == null ? 0 : hashCode(this.idempotentResume_1)) | 0;
    result = imul(result, 31) + (this.cancelCause_1 == null ? 0 : hashCode(this.cancelCause_1)) | 0;
    return result;
  };
  CompletedContinuation.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CompletedContinuation))
      return false;
    else {
    }
    var tmp0_other_with_cast = other instanceof CompletedContinuation ? other : THROW_CCE();
    if (!equals(this.result_1, tmp0_other_with_cast.result_1))
      return false;
    if (!equals(this.cancelHandler_1, tmp0_other_with_cast.cancelHandler_1))
      return false;
    if (!equals(this.onCancellation_1, tmp0_other_with_cast.onCancellation_1))
      return false;
    if (!equals(this.idempotentResume_1, tmp0_other_with_cast.idempotentResume_1))
      return false;
    if (!equals(this.cancelCause_1, tmp0_other_with_cast.cancelCause_1))
      return false;
    return true;
  };
  CompletedContinuation.$metadata$ = {
    simpleName: 'CompletedContinuation',
    kind: 'class',
    interfaces: []
  };
  function _get_SUSPENDED__3501394934() {
    return SUSPENDED;
  }
  var SUSPENDED;
  function _get_RESUMED__2572863546() {
    return RESUMED;
  }
  var RESUMED;
  function BeforeResumeCancelHandler() {
    CancelHandler.call(this);
  }
  BeforeResumeCancelHandler.$metadata$ = {
    simpleName: 'BeforeResumeCancelHandler',
    kind: 'class',
    interfaces: []
  };
  function _get_handler__2128080135($this) {
    return $this.handler_1;
  }
  function InvokeOnCancel(handler) {
    CancelHandler.call(this);
    this.handler_1 = handler;
  }
  InvokeOnCancel.prototype.invoke_7fb7sc_k$ = function (cause) {
    this.handler_1(cause);
  };
  InvokeOnCancel.prototype.invoke = function (cause) {
    return this.invoke_7fb7sc_k$(cause);
  };
  InvokeOnCancel.prototype.toString = function () {
    return 'InvokeOnCancel[' + _get_classSimpleName__3937513404(this.handler_1) + '@' + _get_hexAddress__2831015762(this) + ']';
  };
  InvokeOnCancel.$metadata$ = {
    simpleName: 'InvokeOnCancel',
    kind: 'class',
    interfaces: []
  };
  var properties_initialized_CancellableContinuationImpl_kt_2249227405;
  function init_properties_CancellableContinuationImpl_kt_3124303409() {
    if (!properties_initialized_CancellableContinuationImpl_kt_2249227405) {
      properties_initialized_CancellableContinuationImpl_kt_2249227405 = true;
      RESUME_TOKEN = new Symbol('RESUME_TOKEN');
    }
  }
  function CompletedExceptionally_init_$Init$(cause, handled, $mask0, $marker, $this) {
    if (!(($mask0 & 2) === 0))
      handled = false;
    CompletedExceptionally.call($this, cause, handled);
    return $this;
  }
  function CompletedExceptionally_init_$Create$(cause, handled, $mask0, $marker) {
    return CompletedExceptionally_init_$Init$(cause, handled, $mask0, $marker, Object.create(CompletedExceptionally.prototype));
  }
  function _get__handled__1574420846($this) {
    return $this._handled_1;
  }
  function CompletedExceptionally(cause, handled) {
    this.cause_1 = cause;
    this._handled_1 = atomic$boolean$1(handled);
  }
  CompletedExceptionally.prototype._get_cause__3139734664_j3sn7c_k$ = function () {
    return this.cause_1;
  };
  CompletedExceptionally.prototype._get_handled__2128079701_z704t1_k$ = function () {
    return this._handled_1._get_value__3683422336_a43j40_k$();
  };
  CompletedExceptionally.prototype.makeHandled_ws9oq6_k$ = function () {
    return this._handled_1.atomicfu$compareAndSet(false, true);
  };
  CompletedExceptionally.prototype.toString = function () {
    return _get_classSimpleName__3937513404(this) + '[' + this.cause_1 + ']';
  };
  CompletedExceptionally.$metadata$ = {
    simpleName: 'CompletedExceptionally',
    kind: 'class',
    interfaces: []
  };
  function _get__resumed__1236577843($this) {
    return $this._resumed_1;
  }
  function CancelledContinuation(continuation, cause, handled) {
    var tmp0_elvis_lhs = cause;
    CompletedExceptionally.call(this, tmp0_elvis_lhs == null ? CancellationException_init_$Create$('Continuation ' + continuation + ' was cancelled normally') : tmp0_elvis_lhs, handled);
    this._resumed_1 = atomic$boolean$1(false);
  }
  CancelledContinuation.prototype.makeResumed_vjvawn_k$ = function () {
    return this._resumed_1.atomicfu$compareAndSet(false, true);
  };
  CancelledContinuation.$metadata$ = {
    simpleName: 'CancelledContinuation',
    kind: 'class',
    interfaces: []
  };
  function toState(_this__1828080292, caller) {
    var tmp$ret$2;
    $l$block_1: {
      {
      }
      var exception_1 = Result__exceptionOrNull_impl_1523290257(_this__1828080292);
      var tmp;
      if (exception_1 == null) {
        var tmp$ret$0;
        $l$block: {
          var tmp_0 = _Result___get_value__impl__3597185688(_this__1828080292);
          var tmp0__anonymous__2_2495602522 = (tmp_0 == null ? true : isObject(tmp_0)) ? tmp_0 : THROW_CCE();
          tmp$ret$0 = tmp0__anonymous__2_2495602522;
          break $l$block;
        }
        tmp = tmp$ret$0;
      } else {
        var tmp$ret$1;
        $l$block_0: {
          var tmp_1 = recoverStackTrace(exception_1, caller);
          tmp$ret$1 = CompletedExceptionally_init_$Create$(tmp_1, false, 2, null);
          break $l$block_0;
        }
        tmp = tmp$ret$1;
      }
      tmp$ret$2 = tmp;
      break $l$block_1;
    }
    return tmp$ret$2;
  }
  function toState_0(_this__1828080292, onCancellation) {
    var tmp$ret$2;
    $l$block_1: {
      {
      }
      var exception_1 = Result__exceptionOrNull_impl_1523290257(_this__1828080292);
      var tmp;
      if (exception_1 == null) {
        var tmp$ret$0;
        $l$block: {
          var tmp_0 = _Result___get_value__impl__3597185688(_this__1828080292);
          var tmp0__anonymous__2_2495602522 = (tmp_0 == null ? true : isObject(tmp_0)) ? tmp_0 : THROW_CCE();
          tmp$ret$0 = !(onCancellation == null) ? new CompletedWithCancellation(tmp0__anonymous__2_2495602522, onCancellation) : tmp0__anonymous__2_2495602522;
          break $l$block;
        }
        tmp = tmp$ret$0;
      } else {
        var tmp$ret$1;
        $l$block_0: {
          tmp$ret$1 = CompletedExceptionally_init_$Create$(exception_1, false, 2, null);
          break $l$block_0;
        }
        tmp = tmp$ret$1;
      }
      tmp$ret$2 = tmp;
      break $l$block_1;
    }
    return tmp$ret$2;
  }
  function toState$default(_this__1828080292, onCancellation, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      onCancellation = null;
    return toState_0(_this__1828080292, onCancellation);
  }
  function CompletedWithCancellation(result, onCancellation) {
    this.result_1 = result;
    this.onCancellation_1 = onCancellation;
  }
  CompletedWithCancellation.prototype._get_result__3382885006_f31376_k$ = function () {
    return this.result_1;
  };
  CompletedWithCancellation.prototype._get_onCancellation__3868581321_71uxiv_k$ = function () {
    return this.onCancellation_1;
  };
  CompletedWithCancellation.prototype.component1_7eebsc_k$ = function () {
    return this.result_1;
  };
  CompletedWithCancellation.prototype.component2_7eebsb_k$ = function () {
    return this.onCancellation_1;
  };
  CompletedWithCancellation.prototype.copy_eadg01_k$ = function (result, onCancellation) {
    return new CompletedWithCancellation(result, onCancellation);
  };
  CompletedWithCancellation.prototype.copy$default_lzs7jj_k$ = function (result, onCancellation, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      result = this.result_1;
    if (!(($mask0 & 2) === 0))
      onCancellation = this.onCancellation_1;
    return this.copy_eadg01_k$(result, onCancellation);
  };
  CompletedWithCancellation.prototype.toString = function () {
    return 'CompletedWithCancellation(result=' + toString(this.result_1) + ', onCancellation=' + this.onCancellation_1 + ')';
  };
  CompletedWithCancellation.prototype.hashCode = function () {
    var result = this.result_1 == null ? 0 : hashCode(this.result_1);
    result = imul(result, 31) + hashCode(this.onCancellation_1) | 0;
    return result;
  };
  CompletedWithCancellation.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CompletedWithCancellation))
      return false;
    else {
    }
    var tmp0_other_with_cast = other instanceof CompletedWithCancellation ? other : THROW_CCE();
    if (!equals(this.result_1, tmp0_other_with_cast.result_1))
      return false;
    if (!equals(this.onCancellation_1, tmp0_other_with_cast.onCancellation_1))
      return false;
    return true;
  };
  CompletedWithCancellation.$metadata$ = {
    simpleName: 'CompletedWithCancellation',
    kind: 'class',
    interfaces: []
  };
  function CoroutineDispatcher$Key$_init_$lambda_3655722671() {
    return function (it) {
      return it instanceof CoroutineDispatcher ? it : null;
    };
  }
  function Key_0() {
    Key_instance = this;
    var tmp = Key_getInstance();
    AbstractCoroutineContextKey.call(this, tmp, CoroutineDispatcher$Key$_init_$lambda_3655722671());
  }
  Key_0.$metadata$ = {
    simpleName: 'Key',
    kind: 'object',
    interfaces: []
  };
  var Key_instance;
  function Key_getInstance_0() {
    if (Key_instance == null)
      new Key_0();
    return Key_instance;
  }
  function CoroutineDispatcher() {
    Key_getInstance_0();
    AbstractCoroutineContextElement.call(this, Key_getInstance());
  }
  CoroutineDispatcher.prototype.isDispatchNeeded_fmz9vn_k$ = function (context) {
    return true;
  };
  CoroutineDispatcher.prototype.limitedParallelism_glrman_k$ = function (parallelism) {
    checkParallelism(parallelism);
    return new LimitedDispatcher(this, parallelism);
  };
  CoroutineDispatcher.prototype.dispatchYield_ww21f6_k$ = function (context, block) {
    return this.dispatch_o98ux7_k$(context, block);
  };
  CoroutineDispatcher.prototype.interceptContinuation_pbrjat_k$ = function (continuation) {
    return new DispatchedContinuation(this, continuation);
  };
  CoroutineDispatcher.prototype.releaseInterceptedContinuation_4i98ok_k$ = function (continuation) {
    var dispatched = continuation instanceof DispatchedContinuation ? continuation : THROW_CCE();
    dispatched.release_wtm6d2_k$();
  };
  CoroutineDispatcher.prototype.plus_jld99k_k$ = function (other) {
    return other;
  };
  CoroutineDispatcher.prototype.toString = function () {
    return _get_classSimpleName__3937513404(this) + '@' + _get_hexAddress__2831015762(this);
  };
  CoroutineDispatcher.$metadata$ = {
    simpleName: 'CoroutineDispatcher',
    kind: 'class',
    interfaces: [ContinuationInterceptor]
  };
  function handleCoroutineException(context, exception) {
    try {
      var tmp0_safe_receiver = context.get_1pi7hg_k$(Key_getInstance_1());
      if (tmp0_safe_receiver == null)
        null;
      else {
        var tmp$ret$0;
        {
          {
          }
          tmp0_safe_receiver.handleException_w1h9is_k$(context, exception);
          return Unit_getInstance();
        }
      }
      Unit_getInstance();
    } catch ($p) {
      if ($p instanceof Error) {
        handleCoroutineExceptionImpl(context, handlerException(exception, $p));
        return Unit_getInstance();
      } else {
        {
          throw $p;
        }
      }
    }
    handleCoroutineExceptionImpl(context, exception);
  }
  function Key_1() {
    Key_instance_0 = this;
  }
  Key_1.$metadata$ = {
    simpleName: 'Key',
    kind: 'object',
    interfaces: [Key]
  };
  var Key_instance_0;
  function Key_getInstance_1() {
    if (Key_instance_0 == null)
      new Key_1();
    return Key_instance_0;
  }
  function CoroutineExceptionHandler() {
    Key_getInstance_1();
  }
  CoroutineExceptionHandler.$metadata$ = {
    simpleName: 'CoroutineExceptionHandler',
    kind: 'interface',
    interfaces: [Element]
  };
  function handlerException(originalException, thrownException) {
    if (originalException === thrownException)
      return originalException;
    var tmp$ret$0;
    $l$block: {
      var tmp0_apply_0 = RuntimeException_init_$Create$('Exception while trying to handle coroutine exception', thrownException);
      {
      }
      {
        {
        }
      }
      tmp$ret$0 = tmp0_apply_0;
      break $l$block;
    }
    return tmp$ret$0;
  }
  function CopyableThrowable() {
  }
  CopyableThrowable.$metadata$ = {
    simpleName: 'CopyableThrowable',
    kind: 'interface',
    interfaces: []
  };
  function Delay() {
  }
  Delay.$metadata$ = {
    simpleName: 'Delay',
    kind: 'interface',
    interfaces: []
  };
  function _get_DISPOSED_TASK__1345598802() {
    init_properties_EventLoop_common_kt_2044663103();
    return DISPOSED_TASK;
  }
  var DISPOSED_TASK;
  function _get_CLOSED_EMPTY__1975255025() {
    init_properties_EventLoop_common_kt_2044663103();
    return CLOSED_EMPTY;
  }
  var CLOSED_EMPTY;
  function _set_useCount__1264733967($this, _set____804775014) {
    $this.useCount_1 = _set____804775014;
  }
  function _get_useCount__490602755($this) {
    return $this.useCount_1;
  }
  function _set_shared__4250976338($this, _set____804775014) {
    $this.shared_1 = _set____804775014;
  }
  function _get_shared__44588870($this) {
    return $this.shared_1;
  }
  function _set_unconfinedQueue__2631724085($this, _set____804775014) {
    $this.unconfinedQueue_1 = _set____804775014;
  }
  function _get_unconfinedQueue__3242647489($this) {
    return $this.unconfinedQueue_1;
  }
  function delta($this, unconfined) {
    return unconfined ? new Long(0, 1) : new Long(1, 0);
  }
  function EventLoop() {
    CoroutineDispatcher.call(this);
    this.useCount_1 = new Long(0, 0);
    this.shared_1 = false;
    this.unconfinedQueue_1 = null;
  }
  EventLoop.prototype.processNextEvent_jmndfc_k$ = function () {
    if (!this.processUnconfinedEvent_mypjl6_k$())
      return Companion_getInstance()._get_MAX_VALUE__3201573499_i2z81x_k$();
    return new Long(0, 0);
  };
  EventLoop.prototype._get_isEmpty__1500737838_oti0q6_k$ = function () {
    return this._get_isUnconfinedQueueEmpty__1719770308_sfwn9g_k$();
  };
  EventLoop.prototype._get_nextTime__2688576363_qkej6d_k$ = function () {
    var tmp0_elvis_lhs = this.unconfinedQueue_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return Companion_getInstance()._get_MAX_VALUE__3201573499_i2z81x_k$();
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var queue = tmp;
    return queue._get_isEmpty__1500737838_oti0q6_k$() ? Companion_getInstance()._get_MAX_VALUE__3201573499_i2z81x_k$() : new Long(0, 0);
  };
  EventLoop.prototype.processUnconfinedEvent_mypjl6_k$ = function () {
    var tmp0_elvis_lhs = this.unconfinedQueue_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var queue = tmp;
    var tmp1_elvis_lhs = queue.removeFirstOrNull_eges3a_k$();
    var tmp_0;
    if (tmp1_elvis_lhs == null) {
      return false;
    } else {
      tmp_0 = tmp1_elvis_lhs;
    }
    var task = tmp_0;
    task.run_mw4iiu_k$();
    return true;
  };
  EventLoop.prototype.shouldBeProcessedFromContext_tzcyz7_k$ = function () {
    return false;
  };
  EventLoop.prototype.dispatchUnconfined_do6j6f_k$ = function (task) {
    var tmp0_elvis_lhs = this.unconfinedQueue_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var tmp$ret$0;
      $l$block: {
        var tmp0_also_0 = new ArrayQueue();
        {
        }
        {
          this.unconfinedQueue_1 = tmp0_also_0;
        }
        tmp$ret$0 = tmp0_also_0;
        break $l$block;
      }
      tmp = tmp$ret$0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var queue = tmp;
    queue.addLast_xhfl3v_k$(task);
  };
  EventLoop.prototype._get_isActive__4035225851_4an5s5_k$ = function () {
    return this.useCount_1.compareTo_n4fqi2_k$(new Long(0, 0)) > 0;
  };
  EventLoop.prototype._get_isUnconfinedLoopActive__1254651510_kqzjau_k$ = function () {
    return this.useCount_1.compareTo_n4fqi2_k$(delta(this, true)) >= 0;
  };
  EventLoop.prototype._get_isUnconfinedQueueEmpty__1719770308_sfwn9g_k$ = function () {
    var tmp0_safe_receiver = this.unconfinedQueue_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver._get_isEmpty__1500737838_oti0q6_k$();
    return tmp1_elvis_lhs == null ? true : tmp1_elvis_lhs;
  };
  EventLoop.prototype.incrementUseCount_ocukpa_k$ = function (unconfined) {
    var tmp0_this = this;
    tmp0_this.useCount_1 = tmp0_this.useCount_1.plus_u6jwas_k$(delta(this, unconfined));
    if (!unconfined)
      this.shared_1 = true;
  };
  EventLoop.prototype.incrementUseCount$default_ig8muj_k$ = function (unconfined, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      unconfined = false;
    return this.incrementUseCount_ocukpa_k$(unconfined);
  };
  EventLoop.prototype.decrementUseCount_saho26_k$ = function (unconfined) {
    var tmp0_this = this;
    tmp0_this.useCount_1 = tmp0_this.useCount_1.minus_llf5ei_k$(delta(this, unconfined));
    if (this.useCount_1.compareTo_n4fqi2_k$(new Long(0, 0)) > 0)
      return Unit_getInstance();
    {
    }
    if (this.shared_1) {
      this.shutdown_cq5p8b_k$();
    }
  };
  EventLoop.prototype.decrementUseCount$default_h3ug27_k$ = function (unconfined, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      unconfined = false;
    return this.decrementUseCount_saho26_k$(unconfined);
  };
  EventLoop.prototype.limitedParallelism_glrman_k$ = function (parallelism) {
    checkParallelism(parallelism);
    return this;
  };
  EventLoop.prototype.shutdown_cq5p8b_k$ = function () {
  };
  EventLoop.$metadata$ = {
    simpleName: 'EventLoop',
    kind: 'class',
    interfaces: []
  };
  function _get_ref__857347678($this) {
    return $this.ref_1;
  }
  function ThreadLocalEventLoop() {
    ThreadLocalEventLoop_instance = this;
    this.ref_1 = new CommonThreadLocal();
  }
  ThreadLocalEventLoop.prototype._get_eventLoop__3953864115_5n30wd_k$ = function () {
    var tmp0_elvis_lhs = this.ref_1.get_26vq_k$();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var tmp$ret$0;
      $l$block: {
        var tmp0_also_0 = createEventLoop();
        {
        }
        {
          ThreadLocalEventLoop_getInstance().ref_1.set_hda1d2_k$(tmp0_also_0);
        }
        tmp$ret$0 = tmp0_also_0;
        break $l$block;
      }
      tmp = tmp$ret$0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  ThreadLocalEventLoop.prototype.currentOrNull_z5p8mb_k$ = function () {
    return this.ref_1.get_26vq_k$();
  };
  ThreadLocalEventLoop.prototype.resetEventLoop_a6lzlu_k$ = function () {
    this.ref_1.set_hda1d2_k$(null);
  };
  ThreadLocalEventLoop.prototype.setEventLoop_d3g3n0_k$ = function (eventLoop) {
    this.ref_1.set_hda1d2_k$(eventLoop);
  };
  ThreadLocalEventLoop.$metadata$ = {
    simpleName: 'ThreadLocalEventLoop',
    kind: 'object',
    interfaces: []
  };
  var ThreadLocalEventLoop_instance;
  function ThreadLocalEventLoop_getInstance() {
    if (ThreadLocalEventLoop_instance == null)
      new ThreadLocalEventLoop();
    return ThreadLocalEventLoop_instance;
  }
  var properties_initialized_EventLoop_common_kt_3542618211;
  function init_properties_EventLoop_common_kt_2044663103() {
    if (!properties_initialized_EventLoop_common_kt_3542618211) {
      properties_initialized_EventLoop_common_kt_3542618211 = true;
      DISPOSED_TASK = new Symbol('REMOVED_TASK');
      CLOSED_EMPTY = new Symbol('CLOSED_EMPTY');
    }
  }
  function CompletionHandlerException(message, cause) {
    RuntimeException_init_$Init$(message, cause, this);
    captureStack(this, CompletionHandlerException);
  }
  CompletionHandlerException.$metadata$ = {
    simpleName: 'CompletionHandlerException',
    kind: 'class',
    interfaces: []
  };
  function CoroutinesInternalError(message, cause) {
    Error_init_$Init$(message, cause, this);
    captureStack(this, CoroutinesInternalError);
  }
  CoroutinesInternalError.$metadata$ = {
    simpleName: 'CoroutinesInternalError',
    kind: 'class',
    interfaces: []
  };
  function DisposableHandle() {
  }
  DisposableHandle.$metadata$ = {
    simpleName: 'DisposableHandle',
    kind: 'interface',
    interfaces: []
  };
  function Key_2() {
    Key_instance_1 = this;
  }
  Key_2.$metadata$ = {
    simpleName: 'Key',
    kind: 'object',
    interfaces: [Key]
  };
  var Key_instance_1;
  function Key_getInstance_2() {
    if (Key_instance_1 == null)
      new Key_2();
    return Key_instance_1;
  }
  function Job() {
    Key_getInstance_2();
  }
  Job.$metadata$ = {
    simpleName: 'Job',
    kind: 'interface',
    interfaces: [Element]
  };
  function ChildJob() {
  }
  ChildJob.$metadata$ = {
    simpleName: 'ChildJob',
    kind: 'interface',
    interfaces: [Job]
  };
  function ParentJob() {
  }
  ParentJob.$metadata$ = {
    simpleName: 'ParentJob',
    kind: 'interface',
    interfaces: [Job]
  };
  function ChildHandle() {
  }
  ChildHandle.$metadata$ = {
    simpleName: 'ChildHandle',
    kind: 'interface',
    interfaces: [DisposableHandle]
  };
  function NonDisposableHandle() {
    NonDisposableHandle_instance = this;
  }
  NonDisposableHandle.prototype._get_parent__1491962785_oo9xup_k$ = function () {
    return null;
  };
  NonDisposableHandle.prototype.dispose_3n44we_k$ = function () {
  };
  NonDisposableHandle.prototype.childCancelled_fdoq8t_k$ = function (cause) {
    return false;
  };
  NonDisposableHandle.prototype.toString = function () {
    return 'NonDisposableHandle';
  };
  NonDisposableHandle.$metadata$ = {
    simpleName: 'NonDisposableHandle',
    kind: 'object',
    interfaces: [DisposableHandle, ChildHandle]
  };
  var NonDisposableHandle_instance;
  function NonDisposableHandle_getInstance() {
    if (NonDisposableHandle_instance == null)
      new NonDisposableHandle();
    return NonDisposableHandle_instance;
  }
  function ensureActive(_this__1828080292) {
    var tmp0_safe_receiver = _this__1828080292.get_1pi7hg_k$(Key_getInstance_2());
    if (tmp0_safe_receiver == null)
      null;
    else {
      ensureActive_0(tmp0_safe_receiver);
      Unit_getInstance();
    }
    Unit_getInstance();
  }
  function ensureActive_0(_this__1828080292) {
    if (!_this__1828080292._get_isActive__4035225851_4an5s5_k$())
      throw _this__1828080292.getCancellationException_8i1q6u_k$();
  }
  function _get_COMPLETING_ALREADY__1904323772() {
    init_properties_JobSupport_kt_3188198472();
    return COMPLETING_ALREADY;
  }
  var COMPLETING_ALREADY;
  function _get_COMPLETING_WAITING_CHILDREN__621847959() {
    init_properties_JobSupport_kt_3188198472();
    return COMPLETING_WAITING_CHILDREN;
  }
  var COMPLETING_WAITING_CHILDREN;
  function _get_COMPLETING_RETRY__2730327532() {
    init_properties_JobSupport_kt_3188198472();
    return COMPLETING_RETRY;
  }
  var COMPLETING_RETRY;
  function _get_TOO_LATE_TO_CANCEL__2262851771() {
    init_properties_JobSupport_kt_3188198472();
    return TOO_LATE_TO_CANCEL;
  }
  var TOO_LATE_TO_CANCEL;
  function _get_SEALED__676505391() {
    init_properties_JobSupport_kt_3188198472();
    return SEALED;
  }
  var SEALED;
  function _get_EMPTY_NEW__2442515619() {
    init_properties_JobSupport_kt_3188198472();
    return EMPTY_NEW;
  }
  var EMPTY_NEW;
  function _get_EMPTY_ACTIVE__934614515() {
    init_properties_JobSupport_kt_3188198472();
    return EMPTY_ACTIVE;
  }
  var EMPTY_ACTIVE;
  function Empty(isActive) {
    this.isActive_1 = isActive;
  }
  Empty.prototype._get_isActive__4035225851_4an5s5_k$ = function () {
    return this.isActive_1;
  };
  Empty.prototype._get_list__802566509_d9tsa5_k$ = function () {
    return null;
  };
  Empty.prototype.toString = function () {
    return 'Empty{' + (this.isActive_1 ? 'Active' : 'New') + '}';
  };
  Empty.$metadata$ = {
    simpleName: 'Empty',
    kind: 'class',
    interfaces: [Incomplete]
  };
  function Incomplete() {
  }
  Incomplete.$metadata$ = {
    simpleName: 'Incomplete',
    kind: 'interface',
    interfaces: []
  };
  function NodeList() {
    LinkedListHead.call(this);
  }
  NodeList.prototype._get_isActive__4035225851_4an5s5_k$ = function () {
    return true;
  };
  NodeList.prototype._get_list__802566509_d9tsa5_k$ = function () {
    return this;
  };
  NodeList.prototype.getString_xqex6i_k$ = function (state) {
    var tmp$ret$1;
    $l$block_0: {
      {
      }
      var tmp$ret$0;
      $l$block: {
        var tmp0_apply_0_1 = StringBuilder_init_$Create$();
        {
        }
        {
          tmp0_apply_0_1.append_ssq29y_k$('List{');
          Unit_getInstance();
          tmp0_apply_0_1.append_ssq29y_k$(state);
          Unit_getInstance();
          tmp0_apply_0_1.append_ssq29y_k$('}[');
          Unit_getInstance();
          var first_3 = true;
          {
            var cur_1_4 = this._get__next__3036752447_kt3wsh_k$();
            while (!equals(cur_1_4, this)) {
              if (cur_1_4 instanceof JobNode) {
                var tmp0__anonymous__2_5_1682275472 = cur_1_4;
                if (first_3)
                  first_3 = false;
                else {
                  tmp0_apply_0_1.append_ssq29y_k$(', ');
                  Unit_getInstance();
                }
                tmp0_apply_0_1.append_t8pm91_k$(tmp0__anonymous__2_5_1682275472);
                Unit_getInstance();
              } else {
              }
              cur_1_4 = cur_1_4._get__next__3036752447_kt3wsh_k$();
            }
          }
          tmp0_apply_0_1.append_ssq29y_k$(']');
          Unit_getInstance();
        }
        tmp$ret$0 = tmp0_apply_0_1;
        break $l$block;
      }
      tmp$ret$1 = tmp$ret$0.toString();
      break $l$block_0;
    }
    return tmp$ret$1;
  };
  NodeList.prototype.toString = function () {
    return _get_DEBUG__2224823294() ? this.getString_xqex6i_k$('Active') : anyToString(this);
  };
  NodeList.$metadata$ = {
    simpleName: 'NodeList',
    kind: 'class',
    interfaces: [Incomplete]
  };
  function JobNode() {
    CompletionHandlerBase.call(this);
  }
  JobNode.prototype._set_job__296006376_hrglay_k$ = function (_set____804775014) {
    this.job_1 = _set____804775014;
  };
  JobNode.prototype._get_job__857118836_e6b14k_k$ = function () {
    var tmp = this.job_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('job');
    }
  };
  JobNode.prototype._get_isActive__4035225851_4an5s5_k$ = function () {
    return true;
  };
  JobNode.prototype._get_list__802566509_d9tsa5_k$ = function () {
    return null;
  };
  JobNode.prototype.dispose_3n44we_k$ = function () {
    return this._get_job__857118836_e6b14k_k$().removeNode_o3o6t1_k$(this);
  };
  JobNode.prototype.toString = function () {
    return _get_classSimpleName__3937513404(this) + '@' + _get_hexAddress__2831015762(this) + '[job@' + _get_hexAddress__2831015762(this._get_job__857118836_e6b14k_k$()) + ']';
  };
  JobNode.$metadata$ = {
    simpleName: 'JobNode',
    kind: 'class',
    interfaces: [DisposableHandle, Incomplete]
  };
  function _get__isCompleting__3029381714($this) {
    return $this._isCompleting_1;
  }
  function _get__rootCause__1571289699($this) {
    return $this._rootCause_1;
  }
  function _get__exceptionsHolder__3443708418($this) {
    return $this._exceptionsHolder_1;
  }
  function _set_exceptionsHolder__2496749063($this, value) {
    $this._exceptionsHolder_1._set_value__1325260276_x73o94_k$(value);
  }
  function _get_exceptionsHolder__4255505403($this) {
    return $this._exceptionsHolder_1._get_value__3683422336_a43j40_k$();
  }
  function allocateList($this) {
    return ArrayList_init_$Create$(4);
  }
  function _get_parent__1491962785($this) {
    return $this.parent_1;
  }
  function _get_state__3614753120($this) {
    return $this.state_1;
  }
  function _get_child__3145835061($this) {
    return $this.child_1;
  }
  function _get_proposedUpdate__743239708($this) {
    return $this.proposedUpdate_1;
  }
  function _get_job__857118836($this) {
    return $this.job_1;
  }
  function _get__state__4101327289_0($this) {
    return $this._state_1;
  }
  function _get__parentHandle__923088288($this) {
    return $this._parentHandle_1;
  }
  function loopOnState($this, block) {
    while (true) {
      block($this._get_state__3614753120_b8zcm8_k$());
    }
  }
  function finalizeFinishingState($this, state, proposedUpdate) {
    {
    }
    {
    }
    {
    }
    var tmp0_safe_receiver = proposedUpdate instanceof CompletedExceptionally ? proposedUpdate : null;
    var proposedException = tmp0_safe_receiver == null ? null : tmp0_safe_receiver._get_cause__3139734664_j3sn7c_k$();
    var wasCancelling = false;
    var tmp$ret$1;
    $l$block_0: {
      var tmp$ret$0;
      $l$block: {
        wasCancelling = state._get_isCancelling__1064839761_hlz7m9_k$();
        var exceptions_2 = state.sealLocked_11gdw4_k$(proposedException);
        var finalCause_3 = getFinalRootCause($this, state, exceptions_2);
        if (!(finalCause_3 == null))
          addSuppressedExceptions($this, finalCause_3, exceptions_2);
        tmp$ret$0 = finalCause_3;
        break $l$block;
      }
      tmp$ret$1 = tmp$ret$0;
      break $l$block_0;
    }
    var finalException = tmp$ret$1;
    var tmp;
    if (finalException == null) {
      tmp = proposedUpdate;
    } else if (finalException === proposedException) {
      tmp = proposedUpdate;
    } else {
      tmp = CompletedExceptionally_init_$Create$(finalException, false, 2, null);
    }
    var finalState = tmp;
    if (!(finalException == null)) {
      var handled = cancelParent($this, finalException) ? true : $this.handleJobException_oc4gxk_k$(finalException);
      if (handled) {
        (finalState instanceof CompletedExceptionally ? finalState : THROW_CCE()).makeHandled_ws9oq6_k$();
        Unit_getInstance();
      }
    }
    if (!wasCancelling)
      $this.onCancelling_bxyn9n_k$(finalException);
    $this.onCompletionInternal_39c1g8_k$(finalState);
    var casSuccess = $this._state_1.atomicfu$compareAndSet(state, boxIncomplete(finalState));
    {
    }
    completeStateFinalization($this, state, finalState);
    return finalState;
  }
  function getFinalRootCause($this, state, exceptions) {
    if (exceptions.isEmpty_y1axqb_k$()) {
      if (state._get_isCancelling__1064839761_hlz7m9_k$()) {
        var tmp$ret$0;
        $l$block: {
          var tmp0_elvis_lhs_1 = null;
          tmp$ret$0 = new JobCancellationException(tmp0_elvis_lhs_1 == null ? $this.cancellationExceptionMessage_a64063_k$() : tmp0_elvis_lhs_1, null, $this);
          break $l$block;
        }
        return tmp$ret$0;
      }
      return null;
    }
    var tmp$ret$2;
    $l$block_2: {
      var tmp0_iterator_1 = exceptions.iterator_jk1svi_k$();
      while (tmp0_iterator_1.hasNext_bitz1p_k$()) {
        var element_2 = tmp0_iterator_1.next_20eer_k$();
        var tmp$ret$1;
        $l$block_0: {
          tmp$ret$1 = !(element_2 instanceof CancellationException);
          break $l$block_0;
        }
        if (tmp$ret$1) {
          tmp$ret$2 = element_2;
          break $l$block_2;
        } else {
        }
      }
      tmp$ret$2 = null;
      break $l$block_2;
    }
    var firstNonCancellation = tmp$ret$2;
    if (!(firstNonCancellation == null))
      return firstNonCancellation;
    var first = exceptions.get_fkrdnv_k$(0);
    if (first instanceof TimeoutCancellationException) {
      var tmp$ret$4;
      $l$block_5: {
        var tmp0_iterator_1_0 = exceptions.iterator_jk1svi_k$();
        while (tmp0_iterator_1_0.hasNext_bitz1p_k$()) {
          var element_2_0 = tmp0_iterator_1_0.next_20eer_k$();
          var tmp$ret$3;
          $l$block_3: {
            var tmp;
            if (!(element_2_0 === first)) {
              tmp = element_2_0 instanceof TimeoutCancellationException;
            } else {
              tmp = false;
            }
            tmp$ret$3 = tmp;
            break $l$block_3;
          }
          if (tmp$ret$3) {
            tmp$ret$4 = element_2_0;
            break $l$block_5;
          } else {
          }
        }
        tmp$ret$4 = null;
        break $l$block_5;
      }
      var detailedTimeoutException = tmp$ret$4;
      if (!(detailedTimeoutException == null))
        return detailedTimeoutException;
    } else {
    }
    return first;
  }
  function addSuppressedExceptions($this, rootCause, exceptions) {
    if (exceptions._get_size__809037418_ddoh9m_k$() <= 1)
      return Unit_getInstance();
    var seenExceptions = identitySet(exceptions._get_size__809037418_ddoh9m_k$());
    var unwrappedCause = unwrap(rootCause);
    var tmp0_iterator = exceptions.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var exception = tmp0_iterator.next_20eer_k$();
      var unwrapped = unwrap(exception);
      var tmp;
      var tmp_0;
      if (!(unwrapped === rootCause) ? !(unwrapped === unwrappedCause) : false) {
        tmp_0 = !(unwrapped instanceof CancellationException);
      } else {
        tmp_0 = false;
      }
      if (tmp_0) {
        tmp = seenExceptions.add_1j60pz_k$(unwrapped);
      } else {
        {
          tmp = false;
        }
      }
      if (tmp) {
        {
        }
      } else {
      }
    }
  }
  function tryFinalizeSimpleState($this, state, update) {
    {
    }
    {
    }
    if (!$this._state_1.atomicfu$compareAndSet(state, boxIncomplete(update)))
      return false;
    $this.onCancelling_bxyn9n_k$(null);
    $this.onCompletionInternal_39c1g8_k$(update);
    completeStateFinalization($this, state, update);
    return true;
  }
  function completeStateFinalization($this, state, update) {
    var tmp0_safe_receiver = $this._get_parentHandle__921052185_f8dcex_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp$ret$0;
      $l$block: {
        {
        }
        tmp0_safe_receiver.dispose_3n44we_k$();
        tmp$ret$0 = $this._set_parentHandle__4275866661_guhd0s_k$(NonDisposableHandle_getInstance());
        break $l$block;
      }
      Unit_getInstance();
    }
    Unit_getInstance();
    var tmp1_safe_receiver = update instanceof CompletedExceptionally ? update : null;
    var cause = tmp1_safe_receiver == null ? null : tmp1_safe_receiver._get_cause__3139734664_j3sn7c_k$();
    if (state instanceof JobNode) {
      try {
        state.invoke(cause);
      } catch ($p) {
        if ($p instanceof Error) {
          $this.handleOnCompletionException_o179kb_k$(new CompletionHandlerException('Exception in completion handler ' + state + ' for ' + $this, $p));
        } else {
          {
            throw $p;
          }
        }
      }
    } else {
      {
        var tmp2_safe_receiver = state._get_list__802566509_d9tsa5_k$();
        if (tmp2_safe_receiver == null)
          null;
        else {
          notifyCompletion(tmp2_safe_receiver, $this, cause);
          Unit_getInstance();
        }
        Unit_getInstance();
      }
    }
  }
  function notifyCancelling($this, list, cause) {
    $this.onCancelling_bxyn9n_k$(cause);
    {
      var exception_1 = null;
      {
        var cur_1 = list._get__next__3036752447_kt3wsh_k$();
        while (!equals(cur_1, list)) {
          if (cur_1 instanceof JobCancellingNode) {
            var tmp0__anonymous__2_2_1682275469 = cur_1;
            try {
              tmp0__anonymous__2_2_1682275469.invoke(cause);
            } catch ($p) {
              if ($p instanceof Error) {
                var tmp0_safe_receiver_5_5 = exception_1;
                var tmp;
                if (tmp0_safe_receiver_5_5 == null) {
                  tmp = null;
                } else {
                  var tmp$ret$0;
                  $l$block: {
                    {
                    }
                    {
                      {
                      }
                    }
                    tmp$ret$0 = tmp0_safe_receiver_5_5;
                    break $l$block;
                  }
                  tmp = tmp$ret$0;
                }
                var tmp1_elvis_lhs_4_4 = tmp;
                if (tmp1_elvis_lhs_4_4 == null) {
                  var tmp$ret$1;
                  $l$block_0: {
                    {
                    }
                    exception_1 = new CompletionHandlerException('Exception in completion handler ' + tmp0__anonymous__2_2_1682275469 + ' for ' + $this, $p);
                    tmp$ret$1 = Unit_getInstance();
                    break $l$block_0;
                  }
                  Unit_getInstance();
                } else
                  tmp1_elvis_lhs_4_4;
                Unit_getInstance();
              } else {
                {
                  throw $p;
                }
              }
            }
          } else {
          }
          cur_1 = cur_1._get__next__3036752447_kt3wsh_k$();
        }
      }
      var tmp0_safe_receiver_8 = exception_1;
      if (tmp0_safe_receiver_8 == null)
        null;
      else {
        var tmp$ret$2;
        $l$block_1: {
          {
          }
          tmp$ret$2 = $this.handleOnCompletionException_o179kb_k$(tmp0_safe_receiver_8);
          break $l$block_1;
        }
        Unit_getInstance();
      }
      Unit_getInstance();
    }
    cancelParent($this, cause);
    Unit_getInstance();
  }
  function cancelParent($this, cause) {
    if ($this._get_isScopedCoroutine__175864179_2wpdo3_k$())
      return true;
    var isCancellation = cause instanceof CancellationException;
    var parent = $this._get_parentHandle__921052185_f8dcex_k$();
    if (parent === null ? true : parent === NonDisposableHandle_getInstance()) {
      return isCancellation;
    }
    return parent.childCancelled_fdoq8t_k$(cause) ? true : isCancellation;
  }
  function notifyCompletion(_this__1828080292, $this, cause) {
    var exception_1 = null;
    {
      var cur_1 = _this__1828080292._get__next__3036752447_kt3wsh_k$();
      while (!equals(cur_1, _this__1828080292)) {
        if (cur_1 instanceof JobNode) {
          var tmp0__anonymous__2_2_1682275469 = cur_1;
          try {
            tmp0__anonymous__2_2_1682275469.invoke(cause);
          } catch ($p) {
            if ($p instanceof Error) {
              var tmp0_safe_receiver_5_5 = exception_1;
              var tmp;
              if (tmp0_safe_receiver_5_5 == null) {
                tmp = null;
              } else {
                var tmp$ret$0;
                $l$block: {
                  {
                  }
                  {
                    {
                    }
                  }
                  tmp$ret$0 = tmp0_safe_receiver_5_5;
                  break $l$block;
                }
                tmp = tmp$ret$0;
              }
              var tmp1_elvis_lhs_4_4 = tmp;
              if (tmp1_elvis_lhs_4_4 == null) {
                var tmp$ret$1;
                $l$block_0: {
                  {
                  }
                  exception_1 = new CompletionHandlerException('Exception in completion handler ' + tmp0__anonymous__2_2_1682275469 + ' for ' + $this, $p);
                  tmp$ret$1 = Unit_getInstance();
                  break $l$block_0;
                }
                Unit_getInstance();
              } else
                tmp1_elvis_lhs_4_4;
              Unit_getInstance();
            } else {
              {
                throw $p;
              }
            }
          }
        } else {
        }
        cur_1 = cur_1._get__next__3036752447_kt3wsh_k$();
      }
    }
    var tmp0_safe_receiver_8 = exception_1;
    if (tmp0_safe_receiver_8 == null)
      null;
    else {
      var tmp$ret$2;
      $l$block_1: {
        {
        }
        tmp$ret$2 = $this.handleOnCompletionException_o179kb_k$(tmp0_safe_receiver_8);
        break $l$block_1;
      }
      Unit_getInstance();
    }
    return Unit_getInstance();
  }
  function startInternal($this, state) {
    var tmp0_subject = state;
    if (tmp0_subject instanceof Empty) {
      if (state.isActive_1)
        return 0;
      if (!$this._state_1.atomicfu$compareAndSet(state, _get_EMPTY_ACTIVE__934614515()))
        return -1;
      $this.onStart_qth026_k$();
      return 1;
    } else {
      if (tmp0_subject instanceof InactiveNodeList) {
        if (!$this._state_1.atomicfu$compareAndSet(state, state.list_1))
          return -1;
        $this.onStart_qth026_k$();
        return 1;
      } else {
        return 0;
      }
    }
  }
  function makeNode($this, handler, onCancelling) {
    var tmp;
    if (onCancelling) {
      var tmp0_elvis_lhs = handler instanceof JobCancellingNode ? handler : null;
      tmp = tmp0_elvis_lhs == null ? new InvokeOnCancelling(handler) : tmp0_elvis_lhs;
    } else {
      var tmp1_safe_receiver = handler instanceof JobNode ? handler : null;
      var tmp_0;
      if (tmp1_safe_receiver == null) {
        tmp_0 = null;
      } else {
        var tmp$ret$0;
        $l$block: {
          {
          }
          {
            {
            }
          }
          tmp$ret$0 = tmp1_safe_receiver;
          break $l$block;
        }
        tmp_0 = tmp$ret$0;
      }
      var tmp2_elvis_lhs = tmp_0;
      tmp = tmp2_elvis_lhs == null ? new InvokeOnCompletion(handler) : tmp2_elvis_lhs;
    }
    var node = tmp;
    node.job_1 = $this;
    return node;
  }
  function addLastAtomic($this, expect, list, node) {
    var tmp$ret$1;
    $l$block_1: {
      var tmp$ret$0;
      $l$block: {
        tmp$ret$0 = $this._get_state__3614753120_b8zcm8_k$() === expect;
        break $l$block;
      }
      if (!tmp$ret$0) {
        tmp$ret$1 = false;
        break $l$block_1;
      } else {
      }
      list.addLast_uyctnf_k$(node);
      tmp$ret$1 = true;
      break $l$block_1;
    }
    return tmp$ret$1;
  }
  function promoteEmptyToNodeList($this, state) {
    var list = new NodeList();
    var update = state.isActive_1 ? list : new InactiveNodeList(list);
    $this._state_1.atomicfu$compareAndSet(state, update);
    Unit_getInstance();
  }
  function promoteSingleToNodeList($this, state) {
    state.addOneIfEmpty_cbgboi_k$(new NodeList());
    Unit_getInstance();
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = state._get__next__3036752447_kt3wsh_k$();
      break $l$block;
    }
    var list = tmp$ret$0;
    $this._state_1.atomicfu$compareAndSet(state, list);
    Unit_getInstance();
  }
  function joinInternal($this) {
    {
      while (true) {
        {
          var tmp0__anonymous__1_2495602521 = $this._get_state__3614753120_b8zcm8_k$();
          if (!(!(tmp0__anonymous__1_2495602521 == null) ? isInterface(tmp0__anonymous__1_2495602521, Incomplete) : false))
            return false;
          else {
          }
          if (startInternal($this, tmp0__anonymous__1_2495602521) >= 0)
            return true;
        }
      }
      Unit_getInstance();
    }
  }
  function joinSuspend($this, $cont) {
    var tmp$ret$2;
    $l$block_1: {
      var tmp0__anonymous__1_1_1682274507 = $cont;
      var cancellable_2_2 = new CancellableContinuationImpl(intercepted(tmp0__anonymous__1_1_1682274507), _get_MODE_CANCELLABLE__581347323());
      cancellable_2_2.initCancellability_sh6jkn_k$();
      {
        var tmp$ret$1;
        $l$block_0: {
          var tmp0__get_asHandler__0_4_3156268537 = new ResumeOnCompletion(cancellable_2_2);
          var tmp$ret$0;
          $l$block: {
            tmp$ret$0 = tmp0__get_asHandler__0_4_3156268537;
            break $l$block;
          }
          tmp$ret$1 = tmp$ret$0;
          break $l$block_0;
        }
        disposeOnCancellation(cancellable_2_2, $this.invokeOnCompletion_t2apld_k$(tmp$ret$1));
      }
      tmp$ret$2 = cancellable_2_2.getResult_clfhg3_k$();
      break $l$block_1;
    }
    return tmp$ret$2;
  }
  function cancelMakeCompleting($this, cause) {
    {
      while (true) {
        {
          var tmp0__anonymous__1_2495602521 = $this._get_state__3614753120_b8zcm8_k$();
          var tmp;
          if (!(!(tmp0__anonymous__1_2495602521 == null) ? isInterface(tmp0__anonymous__1_2495602521, Incomplete) : false)) {
            tmp = true;
          } else {
            {
              var tmp_0;
              if (tmp0__anonymous__1_2495602521 instanceof Finishing) {
                tmp_0 = tmp0__anonymous__1_2495602521._get_isCompleting__3027345611_kypj5h_k$();
              } else {
                {
                  tmp_0 = false;
                }
              }
              tmp = tmp_0;
            }
          }
          if (tmp) {
            return _get_COMPLETING_ALREADY__1904323772();
          } else {
          }
          var tmp_1 = createCauseException($this, cause);
          var proposedUpdate_2 = CompletedExceptionally_init_$Create$(tmp_1, false, 2, null);
          var finalState_3 = tryMakeCompleting($this, tmp0__anonymous__1_2495602521, proposedUpdate_2);
          if (!(finalState_3 === _get_COMPLETING_RETRY__2730327532()))
            return finalState_3;
        }
      }
      Unit_getInstance();
    }
  }
  function createCauseException($this, cause) {
    var tmp0_subject = cause;
    var tmp;
    if (tmp0_subject == null ? true : tmp0_subject instanceof Error) {
      var tmp1_elvis_lhs = cause;
      var tmp_0;
      if (tmp1_elvis_lhs == null) {
        var tmp$ret$0;
        $l$block: {
          var tmp0_elvis_lhs_1 = null;
          tmp$ret$0 = new JobCancellationException(tmp0_elvis_lhs_1 == null ? $this.cancellationExceptionMessage_a64063_k$() : tmp0_elvis_lhs_1, null, $this);
          break $l$block;
        }
        tmp_0 = tmp$ret$0;
      } else {
        tmp_0 = tmp1_elvis_lhs;
      }
      tmp = tmp_0;
    } else {
      {
        tmp = ((!(cause == null) ? isInterface(cause, ParentJob) : false) ? cause : THROW_CCE()).getChildJobCancellationCause_wx9uoh_k$();
      }
    }
    return tmp;
  }
  function makeCancelling($this, cause) {
    var causeExceptionCache = null;
    {
      while (true) {
        var tmp$ret$7;
        $l$block_6: {
          var tmp0__anonymous__1_2495602521 = $this._get_state__3614753120_b8zcm8_k$();
          var tmp0_subject_2 = tmp0__anonymous__1_2495602521;
          if (tmp0_subject_2 instanceof Finishing) {
            var tmp$ret$4;
            $l$block_3: {
              var tmp$ret$3;
              $l$block_2: {
                if (tmp0__anonymous__1_2495602521._get_isSealed__2870207333_nk9jtn_k$())
                  return _get_TOO_LATE_TO_CANCEL__2262851771();
                var wasCancelling_2_4 = tmp0__anonymous__1_2495602521._get_isCancelling__1064839761_hlz7m9_k$();
                if (!(cause == null) ? true : !wasCancelling_2_4) {
                  var tmp0_elvis_lhs_4_6 = causeExceptionCache;
                  var tmp;
                  if (tmp0_elvis_lhs_4_6 == null) {
                    var tmp$ret$0;
                    $l$block: {
                      var tmp0_also_0_5_7 = createCauseException($this, cause);
                      {
                      }
                      {
                        causeExceptionCache = tmp0_also_0_5_7;
                      }
                      tmp$ret$0 = tmp0_also_0_5_7;
                      break $l$block;
                    }
                    tmp = tmp$ret$0;
                  } else {
                    tmp = tmp0_elvis_lhs_4_6;
                  }
                  var causeException_3_5 = tmp;
                  tmp0__anonymous__1_2495602521.addExceptionLocked_jeuhbd_k$(causeException_3_5);
                }
                var tmp$ret$2;
                $l$block_1: {
                  var tmp1_takeIf_0_6_8 = tmp0__anonymous__1_2495602521._get_rootCause__1061504650_hjzq8a_k$();
                  {
                  }
                  var tmp_0;
                  var tmp$ret$1;
                  $l$block_0: {
                    tmp$ret$1 = !wasCancelling_2_4;
                    break $l$block_0;
                  }
                  if (tmp$ret$1) {
                    tmp_0 = tmp1_takeIf_0_6_8;
                  } else {
                    {
                      tmp_0 = null;
                    }
                  }
                  tmp$ret$2 = tmp_0;
                  break $l$block_1;
                }
                tmp$ret$3 = tmp$ret$2;
                break $l$block_2;
              }
              tmp$ret$4 = tmp$ret$3;
              break $l$block_3;
            }
            var notifyRootCause_3 = tmp$ret$4;
            var tmp1_safe_receiver_9 = notifyRootCause_3;
            if (tmp1_safe_receiver_9 == null)
              null;
            else {
              var tmp$ret$5;
              $l$block_4: {
                {
                }
                tmp$ret$5 = notifyCancelling($this, tmp0__anonymous__1_2495602521.list_1, tmp1_safe_receiver_9);
                break $l$block_4;
              }
              Unit_getInstance();
            }
            Unit_getInstance();
            return _get_COMPLETING_ALREADY__1904323772();
          } else {
            if (!(tmp0_subject_2 == null) ? isInterface(tmp0_subject_2, Incomplete) : false) {
              var tmp2_elvis_lhs_11 = causeExceptionCache;
              var tmp_1;
              if (tmp2_elvis_lhs_11 == null) {
                var tmp$ret$6;
                $l$block_5: {
                  var tmp0_also_0_12 = createCauseException($this, cause);
                  {
                  }
                  {
                    causeExceptionCache = tmp0_also_0_12;
                  }
                  tmp$ret$6 = tmp0_also_0_12;
                  break $l$block_5;
                }
                tmp_1 = tmp$ret$6;
              } else {
                tmp_1 = tmp2_elvis_lhs_11;
              }
              var causeException_10 = tmp_1;
              if (tmp0__anonymous__1_2495602521._get_isActive__4035225851_4an5s5_k$()) {
                if (tryMakeCancelling($this, tmp0__anonymous__1_2495602521, causeException_10))
                  return _get_COMPLETING_ALREADY__1904323772();
              } else {
                var finalState_13 = tryMakeCompleting($this, tmp0__anonymous__1_2495602521, CompletedExceptionally_init_$Create$(causeException_10, false, 2, null));
                if (finalState_13 === _get_COMPLETING_ALREADY__1904323772()) {
                  var tmp1_error_0_14 = 'Cannot happen in ' + toString(tmp0__anonymous__1_2495602521);
                  throw IllegalStateException_init_$Create$(toString_0(tmp1_error_0_14));
                } else if (finalState_13 === _get_COMPLETING_RETRY__2730327532()) {
                  tmp$ret$7 = Unit_getInstance();
                  break $l$block_6;
                } else
                  return finalState_13;
              }
            } else {
              return _get_TOO_LATE_TO_CANCEL__2262851771();
            }
          }
        }
      }
      Unit_getInstance();
    }
  }
  function getOrPromoteCancellingList($this, state) {
    var tmp1_elvis_lhs = state._get_list__802566509_d9tsa5_k$();
    var tmp;
    if (tmp1_elvis_lhs == null) {
      var tmp0_subject = state;
      var tmp_0;
      if (tmp0_subject instanceof Empty) {
        tmp_0 = new NodeList();
      } else {
        if (tmp0_subject instanceof JobNode) {
          promoteSingleToNodeList($this, state);
          tmp_0 = null;
        } else {
          {
            var tmp0_error_0 = 'State should have list: ' + state;
            throw IllegalStateException_init_$Create$(toString_0(tmp0_error_0));
          }
        }
      }
      tmp = tmp_0;
    } else {
      tmp = tmp1_elvis_lhs;
    }
    return tmp;
  }
  function tryMakeCancelling($this, state, rootCause) {
    {
    }
    {
    }
    var tmp0_elvis_lhs = getOrPromoteCancellingList($this, state);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var list = tmp;
    var cancelling = new Finishing(list, false, rootCause);
    if (!$this._state_1.atomicfu$compareAndSet(state, cancelling))
      return false;
    notifyCancelling($this, list, rootCause);
    return true;
  }
  function tryMakeCompleting($this, state, proposedUpdate) {
    if (!(!(state == null) ? isInterface(state, Incomplete) : false))
      return _get_COMPLETING_ALREADY__1904323772();
    else {
    }
    var tmp;
    var tmp_0;
    var tmp_1;
    if (state instanceof Empty) {
      tmp_1 = true;
    } else {
      {
        tmp_1 = state instanceof JobNode;
      }
    }
    if (tmp_1) {
      tmp_0 = !(state instanceof ChildHandleNode);
    } else {
      {
        tmp_0 = false;
      }
    }
    if (tmp_0) {
      tmp = !(proposedUpdate instanceof CompletedExceptionally);
    } else {
      {
        tmp = false;
      }
    }
    if (tmp) {
      if (tryFinalizeSimpleState($this, state, proposedUpdate)) {
        return proposedUpdate;
      }
      return _get_COMPLETING_RETRY__2730327532();
    } else {
    }
    return tryMakeCompletingSlowPath($this, state, proposedUpdate);
  }
  function tryMakeCompletingSlowPath($this, state, proposedUpdate) {
    var tmp0_elvis_lhs = getOrPromoteCancellingList($this, state);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return _get_COMPLETING_RETRY__2730327532();
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var list = tmp;
    var tmp1_elvis_lhs = state instanceof Finishing ? state : null;
    var finishing = tmp1_elvis_lhs == null ? new Finishing(list, false, null) : tmp1_elvis_lhs;
    var notifyRootCause = null;
    var tmp$ret$3;
    $l$block_2: {
      if (finishing._get_isCompleting__3027345611_kypj5h_k$())
        return _get_COMPLETING_ALREADY__1904323772();
      finishing._set_isCompleting__2087192791_wiracy_k$(true);
      if (!(finishing === state)) {
        if (!$this._state_1.atomicfu$compareAndSet(state, finishing))
          return _get_COMPLETING_RETRY__2730327532();
      }
      {
      }
      var wasCancelling_2 = finishing._get_isCancelling__1064839761_hlz7m9_k$();
      var tmp0_safe_receiver_3 = proposedUpdate instanceof CompletedExceptionally ? proposedUpdate : null;
      if (tmp0_safe_receiver_3 == null)
        null;
      else {
        var tmp$ret$0;
        $l$block: {
          {
          }
          tmp$ret$0 = finishing.addExceptionLocked_jeuhbd_k$(tmp0_safe_receiver_3._get_cause__3139734664_j3sn7c_k$());
          break $l$block;
        }
        Unit_getInstance();
      }
      Unit_getInstance();
      var tmp$ret$2;
      $l$block_1: {
        var tmp0_takeIf_0_4 = finishing._get_rootCause__1061504650_hjzq8a_k$();
        {
        }
        var tmp_0;
        var tmp$ret$1;
        $l$block_0: {
          tmp$ret$1 = !wasCancelling_2;
          break $l$block_0;
        }
        if (tmp$ret$1) {
          tmp_0 = tmp0_takeIf_0_4;
        } else {
          {
            tmp_0 = null;
          }
        }
        tmp$ret$2 = tmp_0;
        break $l$block_1;
      }
      notifyRootCause = tmp$ret$2;
      tmp$ret$3 = Unit_getInstance();
      break $l$block_2;
    }
    var tmp2_safe_receiver = notifyRootCause;
    if (tmp2_safe_receiver == null)
      null;
    else {
      var tmp$ret$4;
      $l$block_3: {
        {
        }
        tmp$ret$4 = notifyCancelling($this, list, tmp2_safe_receiver);
        break $l$block_3;
      }
      Unit_getInstance();
    }
    Unit_getInstance();
    var child = firstChild($this, state);
    if (!(child == null) ? tryWaitForChild($this, finishing, child, proposedUpdate) : false)
      return _get_COMPLETING_WAITING_CHILDREN__621847959();
    return finalizeFinishingState($this, finishing, proposedUpdate);
  }
  function _get_exceptionOrNull__671063032(_this__1828080292, $this) {
    var tmp0_safe_receiver = _this__1828080292 instanceof CompletedExceptionally ? _this__1828080292 : null;
    return tmp0_safe_receiver == null ? null : tmp0_safe_receiver._get_cause__3139734664_j3sn7c_k$();
  }
  function firstChild($this, state) {
    var tmp1_elvis_lhs = state instanceof ChildHandleNode ? state : null;
    var tmp;
    if (tmp1_elvis_lhs == null) {
      var tmp0_safe_receiver = state._get_list__802566509_d9tsa5_k$();
      tmp = tmp0_safe_receiver == null ? null : nextChild(tmp0_safe_receiver, $this);
    } else {
      tmp = tmp1_elvis_lhs;
    }
    return tmp;
  }
  function tryWaitForChild($this, state, child, proposedUpdate) {
    var $this_0 = $this;
    var state_0 = state;
    var child_0 = child;
    var proposedUpdate_0 = proposedUpdate;
    while (true) {
      var $this_1 = $this_0;
      var state_1 = state_0;
      var child_1 = child_0;
      var proposedUpdate_1 = proposedUpdate_0;
      var tmp$ret$1;
      $l$block_0: {
        var tmp0__get_asHandler__0_1201048388 = new ChildCompletion($this_1, state_1, child_1, proposedUpdate_1);
        var tmp$ret$0;
        $l$block: {
          tmp$ret$0 = tmp0__get_asHandler__0_1201048388;
          break $l$block;
        }
        tmp$ret$1 = tmp$ret$0;
        break $l$block_0;
      }
      var handle = child_1.childJob_1.invokeOnCompletion$default_7q548c_k$(false, false, tmp$ret$1, 1, null);
      if (!(handle === NonDisposableHandle_getInstance()))
        return true;
      var tmp0_elvis_lhs = nextChild(child_1, $this_1);
      var tmp;
      if (tmp0_elvis_lhs == null) {
        return false;
      } else {
        tmp = tmp0_elvis_lhs;
      }
      var nextChild_0 = tmp;
      var tmp0 = $this_1;
      var tmp1 = state_1;
      var tmp2 = nextChild_0;
      var tmp3 = proposedUpdate_1;
      $this_0 = tmp0;
      state_0 = tmp1;
      child_0 = tmp2;
      proposedUpdate_0 = tmp3;
      continue;
    }
  }
  function continueCompleting($this, state, lastChild, proposedUpdate) {
    {
    }
    var waitChild = nextChild(lastChild, $this);
    if (!(waitChild == null) ? tryWaitForChild($this, state, waitChild, proposedUpdate) : false)
      return Unit_getInstance();
    var finalState = finalizeFinishingState($this, state, proposedUpdate);
    $this.afterCompletion_2ogq6g_k$(finalState);
  }
  function nextChild(_this__1828080292, $this) {
    var cur = _this__1828080292;
    $l$loop: while (true) {
      var tmp$ret$0;
      $l$block: {
        var tmp0__get_isRemoved__0_1344361830 = cur;
        tmp$ret$0 = tmp0__get_isRemoved__0_1344361830._get__removed__1059529930_hiteiy_k$();
        break $l$block;
      }
      if (!tmp$ret$0) {
        break $l$loop;
      }
      var tmp$ret$1;
      $l$block_0: {
        var tmp1__get_prevNode__0_2635487596 = cur;
        tmp$ret$1 = tmp1__get_prevNode__0_2635487596._get__prev__3038968575_krsetd_k$();
        break $l$block_0;
      }
      cur = tmp$ret$1;
    }
    $l$loop_0: while (true) {
      var tmp$ret$2;
      $l$block_1: {
        var tmp2__get_nextNode__0_24509131 = cur;
        tmp$ret$2 = tmp2__get_nextNode__0_24509131._get__next__3036752447_kt3wsh_k$();
        break $l$block_1;
      }
      cur = tmp$ret$2;
      var tmp$ret$3;
      $l$block_2: {
        var tmp3__get_isRemoved__0_3105913513 = cur;
        tmp$ret$3 = tmp3__get_isRemoved__0_3105913513._get__removed__1059529930_hiteiy_k$();
        break $l$block_2;
      }
      if (tmp$ret$3)
        continue $l$loop_0;
      else {
      }
      if (cur instanceof ChildHandleNode)
        return cur;
      else {
      }
      if (cur instanceof NodeList)
        return null;
      else {
      }
    }
  }
  function stateString($this, state) {
    var tmp0_subject = state;
    var tmp;
    if (tmp0_subject instanceof Finishing) {
      tmp = state._get_isCancelling__1064839761_hlz7m9_k$() ? 'Cancelling' : state._get_isCompleting__3027345611_kypj5h_k$() ? 'Completing' : 'Active';
    } else {
      if (!(tmp0_subject == null) ? isInterface(tmp0_subject, Incomplete) : false) {
        tmp = state._get_isActive__4035225851_4an5s5_k$() ? 'Active' : 'New';
      } else {
        if (tmp0_subject instanceof CompletedExceptionally) {
          tmp = 'Cancelled';
        } else {
          {
            tmp = 'Completed';
          }
        }
      }
    }
    return tmp;
  }
  function Finishing(list, isCompleting, rootCause) {
    this.list_1 = list;
    this._isCompleting_1 = atomic$boolean$1(isCompleting);
    this._rootCause_1 = atomic$ref$1(rootCause);
    this._exceptionsHolder_1 = atomic$ref$1(null);
  }
  Finishing.prototype._get_list__802566509_d9tsa5_k$ = function () {
    return this.list_1;
  };
  Finishing.prototype._set_isCompleting__2087192791_wiracy_k$ = function (value) {
    this._isCompleting_1._set_value__1325260276_9lpcvp_k$(value);
  };
  Finishing.prototype._get_isCompleting__3027345611_kypj5h_k$ = function () {
    return this._isCompleting_1._get_value__3683422336_a43j40_k$();
  };
  Finishing.prototype._set_rootCause__3584735742_ay25nq_k$ = function (value) {
    this._rootCause_1._set_value__1325260276_x73o94_k$(value);
  };
  Finishing.prototype._get_rootCause__1061504650_hjzq8a_k$ = function () {
    return this._rootCause_1._get_value__3683422336_a43j40_k$();
  };
  Finishing.prototype._get_isSealed__2870207333_nk9jtn_k$ = function () {
    return _get_exceptionsHolder__4255505403(this) === _get_SEALED__676505391();
  };
  Finishing.prototype._get_isCancelling__1064839761_hlz7m9_k$ = function () {
    return !(this._get_rootCause__1061504650_hjzq8a_k$() == null);
  };
  Finishing.prototype._get_isActive__4035225851_4an5s5_k$ = function () {
    return this._get_rootCause__1061504650_hjzq8a_k$() == null;
  };
  Finishing.prototype.sealLocked_11gdw4_k$ = function (proposedException) {
    var eh = _get_exceptionsHolder__4255505403(this);
    var tmp;
    if (eh == null) {
      tmp = allocateList(this);
    } else {
      if (eh instanceof Error) {
        var tmp$ret$0;
        $l$block: {
          var tmp0_also_0 = allocateList(this);
          {
          }
          {
            tmp0_also_0.add_1j60pz_k$(eh);
            Unit_getInstance();
          }
          tmp$ret$0 = tmp0_also_0;
          break $l$block;
        }
        tmp = tmp$ret$0;
      } else {
        if (eh instanceof ArrayList) {
          tmp = eh instanceof ArrayList ? eh : THROW_CCE();
        } else {
          {
            var tmp1_error_0 = 'State is ' + toString(eh);
            throw IllegalStateException_init_$Create$(toString_0(tmp1_error_0));
          }
        }
      }
    }
    var list = tmp;
    var rootCause = this._get_rootCause__1061504650_hjzq8a_k$();
    var tmp0_safe_receiver = rootCause;
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp$ret$1;
      $l$block_0: {
        {
        }
        tmp$ret$1 = list.add_ydlf05_k$(0, tmp0_safe_receiver);
        break $l$block_0;
      }
      Unit_getInstance();
    }
    Unit_getInstance();
    if (!(proposedException == null) ? !equals(proposedException, rootCause) : false) {
      list.add_1j60pz_k$(proposedException);
      Unit_getInstance();
    }
    _set_exceptionsHolder__2496749063(this, _get_SEALED__676505391());
    return list;
  };
  Finishing.prototype.addExceptionLocked_jeuhbd_k$ = function (exception) {
    var rootCause = this._get_rootCause__1061504650_hjzq8a_k$();
    if (rootCause == null) {
      this._set_rootCause__3584735742_ay25nq_k$(exception);
      return Unit_getInstance();
    }
    if (exception === rootCause)
      return Unit_getInstance();
    var eh = _get_exceptionsHolder__4255505403(this);
    if (eh == null)
      _set_exceptionsHolder__2496749063(this, exception);
    else {
      if (eh instanceof Error) {
        if (exception === eh)
          return Unit_getInstance();
        var tmp$ret$0;
        $l$block: {
          var tmp0_apply_0 = allocateList(this);
          {
          }
          {
            tmp0_apply_0.add_1j60pz_k$(eh);
            Unit_getInstance();
            tmp0_apply_0.add_1j60pz_k$(exception);
            Unit_getInstance();
          }
          tmp$ret$0 = tmp0_apply_0;
          break $l$block;
        }
        _set_exceptionsHolder__2496749063(this, tmp$ret$0);
      } else {
        if (eh instanceof ArrayList) {
          (eh instanceof ArrayList ? eh : THROW_CCE()).add_1j60pz_k$(exception);
          Unit_getInstance();
        } else {
          {
            var tmp1_error_0 = 'State is ' + toString(eh);
            throw IllegalStateException_init_$Create$(toString_0(tmp1_error_0));
          }
        }
      }
    }
  };
  Finishing.prototype.toString = function () {
    return 'Finishing[cancelling=' + this._get_isCancelling__1064839761_hlz7m9_k$() + ', completing=' + this._get_isCompleting__3027345611_kypj5h_k$() + ', rootCause=' + this._get_rootCause__1061504650_hjzq8a_k$() + ', exceptions=' + toString(_get_exceptionsHolder__4255505403(this)) + ', list=' + this.list_1 + ']';
  };
  Finishing.$metadata$ = {
    simpleName: 'Finishing',
    kind: 'class',
    interfaces: [Incomplete]
  };
  function _get_isCancelling__1064839761(_this__1828080292, $this) {
    var tmp;
    if (_this__1828080292 instanceof Finishing) {
      tmp = _this__1828080292._get_isCancelling__1064839761_hlz7m9_k$();
    } else {
      {
        tmp = false;
      }
    }
    return tmp;
  }
  function ChildCompletion(parent, state, child, proposedUpdate) {
    JobNode.call(this);
    this.parent_1 = parent;
    this.state_1 = state;
    this.child_1 = child;
    this.proposedUpdate_1 = proposedUpdate;
  }
  ChildCompletion.prototype.invoke_7fb7sc_k$ = function (cause) {
    continueCompleting(this.parent_1, this.state_1, this.child_1, this.proposedUpdate_1);
  };
  ChildCompletion.prototype.invoke = function (cause) {
    return this.invoke_7fb7sc_k$(cause);
  };
  ChildCompletion.$metadata$ = {
    simpleName: 'ChildCompletion',
    kind: 'class',
    interfaces: []
  };
  function AwaitContinuation(delegate, job) {
    CancellableContinuationImpl.call(this, delegate, _get_MODE_CANCELLABLE__581347323());
    this.job_1 = job;
  }
  AwaitContinuation.prototype.getContinuationCancellationCause_62o4c9_k$ = function (parent) {
    var state = this.job_1._get_state__3614753120_b8zcm8_k$();
    if (state instanceof Finishing) {
      var tmp0_safe_receiver = state._get_rootCause__1061504650_hjzq8a_k$();
      if (tmp0_safe_receiver == null)
        null;
      else {
        var tmp$ret$0;
        {
          {
          }
          return tmp0_safe_receiver;
        }
      }
      Unit_getInstance();
    } else {
    }
    if (state instanceof CompletedExceptionally)
      return state._get_cause__3139734664_j3sn7c_k$();
    else {
    }
    return parent.getCancellationException_8i1q6u_k$();
  };
  AwaitContinuation.prototype.nameString_cd9e9w_k$ = function () {
    return 'AwaitContinuation';
  };
  AwaitContinuation.$metadata$ = {
    simpleName: 'AwaitContinuation',
    kind: 'class',
    interfaces: []
  };
  function awaitSuspend($this, $cont) {
    var tmp$ret$2;
    $l$block_1: {
      var tmp0__anonymous__1_2495602521 = $cont;
      var cont_2 = new AwaitContinuation(intercepted(tmp0__anonymous__1_2495602521), $this);
      cont_2.initCancellability_sh6jkn_k$();
      var tmp$ret$1;
      $l$block_0: {
        var tmp0__get_asHandler__0_3_3156268536 = new ResumeAwaitOnCompletion(cont_2);
        var tmp$ret$0;
        $l$block: {
          tmp$ret$0 = tmp0__get_asHandler__0_3_3156268536;
          break $l$block;
        }
        tmp$ret$1 = tmp$ret$0;
        break $l$block_0;
      }
      disposeOnCancellation(cont_2, $this.invokeOnCompletion_t2apld_k$(tmp$ret$1));
      tmp$ret$2 = cont_2.getResult_clfhg3_k$();
      break $l$block_1;
    }
    return tmp$ret$2;
  }
  function JobSupport$_get_children_$slambda_1222912628(this$0, resultContinuation) {
    this.this$0__1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  JobSupport$_get_children_$slambda_1222912628.prototype.invoke_6hwafz_k$ = function ($this$sequence, $cont) {
    var tmp = this.create_d86qwy_k$($this$sequence, $cont);
    tmp._set_result__3294305178_cat9z_k$(Unit_getInstance());
    tmp._set_exception__4196179798_3fu58l_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  JobSupport$_get_children_$slambda_1222912628.prototype.invoke_5zdxxo_k$ = function (p1, $cont) {
    return this.invoke_6hwafz_k$(p1 instanceof SequenceScope ? p1 : THROW_CCE(), $cont);
  };
  JobSupport$_get_children_$slambda_1222912628.prototype.doResume_5yljmg_k$ = function () {
    var suspendResult = this._get_result__3382885006_f31376_k$();
    $sm: do
      try {
        var tmp = this._get_state__3614753120_b8zcm8_k$();
        switch (tmp) {
          case 0:
            this._set_exceptionState__118868437_8fc1n_k$(8);
            this.state0__1 = this.this$0__1._get_state__3614753120_b8zcm8_k$();
            var tmp_0 = this.state0__1;
            if (tmp_0 instanceof ChildHandleNode) {
              this._set_state__1256591060_i39zdo_k$(6);
              suspendResult = this.$this$sequence_1.yield_24z9an_k$(this.state0__1.childJob_1, this);
              if (suspendResult === _get_COROUTINE_SUSPENDED__2870145053()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              {
                var tmp_1 = this.state0__1;
                if (!(tmp_1 == null) ? isInterface(tmp_1, Incomplete) : false) {
                  this.tmp0_safe_receiver1__1 = this.state0__1._get_list__802566509_d9tsa5_k$();
                  if (this.tmp0_safe_receiver1__1 == null) {
                    this.WHEN_RESULT2__1 = null;
                    this._set_state__1256591060_i39zdo_k$(5);
                    continue $sm;
                  } else {
                    this.cur_1_23__1 = this.tmp0_safe_receiver1__1._get__next__3036752447_kt3wsh_k$();
                    this._set_state__1256591060_i39zdo_k$(1);
                    continue $sm;
                  }
                } else {
                  {
                    this._set_state__1256591060_i39zdo_k$(7);
                    continue $sm;
                  }
                }
              }
            }

            break;
          case 1:
            if (!!equals(this.cur_1_23__1, this.tmp0_safe_receiver1__1)) {
              this._set_state__1256591060_i39zdo_k$(4);
              continue $sm;
            }

            var tmp_2 = this.cur_1_23__1;
            if (tmp_2 instanceof ChildHandleNode) {
              var tmp_3 = this;
              tmp_3.tmp0__anonymous__2_34_610932070__1 = this.cur_1_23__1;
              this._set_state__1256591060_i39zdo_k$(2);
              suspendResult = this.$this$sequence_1.yield_24z9an_k$(this.tmp0__anonymous__2_34_610932070__1.childJob_1, this);
              if (suspendResult === _get_COROUTINE_SUSPENDED__2870145053()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              {
                this._set_state__1256591060_i39zdo_k$(3);
                continue $sm;
              }
            }

            break;
          case 2:
            this._set_state__1256591060_i39zdo_k$(3);
            continue $sm;
          case 3:
            this.cur_1_23__1 = this.cur_1_23__1._get__next__3036752447_kt3wsh_k$();
            this._set_state__1256591060_i39zdo_k$(1);
            continue $sm;
          case 4:
            this.WHEN_RESULT2__1 = Unit_getInstance();
            this._set_state__1256591060_i39zdo_k$(5);
            continue $sm;
          case 5:
            Unit_getInstance();
            this._set_state__1256591060_i39zdo_k$(7);
            continue $sm;
          case 6:
            this._set_state__1256591060_i39zdo_k$(7);
            continue $sm;
          case 7:
            return Unit_getInstance();
          case 8:
            throw this._get_exception__1672948706_ro13he_k$();
        }
      } catch ($p) {
        if (this._get_exceptionState__1662596297_rhv7ih_k$() === 8) {
          throw $p;
        } else {
          this._set_state__1256591060_i39zdo_k$(this._get_exceptionState__1662596297_rhv7ih_k$());
          this._set_exception__4196179798_3fu58l_k$($p);
        }
      }
     while (true);
  };
  JobSupport$_get_children_$slambda_1222912628.prototype.create_d86qwy_k$ = function ($this$sequence, completion) {
    var i = new JobSupport$_get_children_$slambda_1222912628(this.this$0__1, completion);
    i.$this$sequence_1 = $this$sequence;
    return i;
  };
  JobSupport$_get_children_$slambda_1222912628.prototype.create_xubfvz_k$ = function (value, completion) {
    return this.create_d86qwy_k$(value instanceof SequenceScope ? value : THROW_CCE(), completion);
  };
  JobSupport$_get_children_$slambda_1222912628.$metadata$ = {
    simpleName: 'JobSupport$<get-children>$slambda',
    kind: 'class',
    interfaces: [],
    suspendArity: [1]
  };
  function JobSupport$_get_children_$slambda_1222912628_0(this$0, resultContinuation) {
    var i = new JobSupport$_get_children_$slambda_1222912628(this$0, resultContinuation);
    var l = function ($this$sequence, $cont) {
      return i.invoke_6hwafz_k$($this$sequence, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function JobSupport(active) {
    this._state_1 = atomic$ref$1(active ? _get_EMPTY_ACTIVE__934614515() : _get_EMPTY_NEW__2442515619());
    this._parentHandle_1 = atomic$ref$1(null);
  }
  JobSupport.prototype._get_key__857139730_e6bh8y_k$ = function () {
    return Key_getInstance_2();
  };
  JobSupport.prototype._set_parentHandle__4275866661_guhd0s_k$ = function (value) {
    this._parentHandle_1._set_value__1325260276_x73o94_k$(value);
  };
  JobSupport.prototype._get_parentHandle__921052185_f8dcex_k$ = function () {
    return this._parentHandle_1._get_value__3683422336_a43j40_k$();
  };
  JobSupport.prototype.initParentJob_4c2lht_k$ = function (parent) {
    {
    }
    if (parent == null) {
      this._set_parentHandle__4275866661_guhd0s_k$(NonDisposableHandle_getInstance());
      return Unit_getInstance();
    }
    parent.start_1tchgi_k$();
    Unit_getInstance();
    var handle = parent.attachChild_ik9c8b_k$(this);
    this._set_parentHandle__4275866661_guhd0s_k$(handle);
    if (this._get_isCompleted__3284240752_gprdlc_k$()) {
      handle.dispose_3n44we_k$();
      this._set_parentHandle__4275866661_guhd0s_k$(NonDisposableHandle_getInstance());
    }
  };
  JobSupport.prototype._get_state__3614753120_b8zcm8_k$ = function () {
    {
      var tmp0_loop_0 = this._state_1;
      while (true) {
        {
          var tmp1__anonymous__1_4003154330 = tmp0_loop_0._get_value__3683422336_a43j40_k$();
          if (!(tmp1__anonymous__1_4003154330 instanceof OpDescriptor))
            return tmp1__anonymous__1_4003154330;
          else {
          }
          tmp1__anonymous__1_4003154330.perform_8emi3i_k$(this);
          Unit_getInstance();
        }
      }
      Unit_getInstance();
    }
  };
  JobSupport.prototype._get_isActive__4035225851_4an5s5_k$ = function () {
    var state = this._get_state__3614753120_b8zcm8_k$();
    var tmp;
    if (!(state == null) ? isInterface(state, Incomplete) : false) {
      tmp = state._get_isActive__4035225851_4an5s5_k$();
    } else {
      {
        tmp = false;
      }
    }
    return tmp;
  };
  JobSupport.prototype._get_isCompleted__3284240752_gprdlc_k$ = function () {
    var tmp = this._get_state__3614753120_b8zcm8_k$();
    return !(!(tmp == null) ? isInterface(tmp, Incomplete) : false);
  };
  JobSupport.prototype._get_isCancelled__1419818794_nhbn6y_k$ = function () {
    var state = this._get_state__3614753120_b8zcm8_k$();
    var tmp;
    if (state instanceof CompletedExceptionally) {
      tmp = true;
    } else {
      {
        var tmp_0;
        if (state instanceof Finishing) {
          tmp_0 = state._get_isCancelling__1064839761_hlz7m9_k$();
        } else {
          {
            tmp_0 = false;
          }
        }
        tmp = tmp_0;
      }
    }
    return tmp;
  };
  JobSupport.prototype.start_1tchgi_k$ = function () {
    {
      while (true) {
        {
          var tmp0__anonymous__1_2495602521 = this._get_state__3614753120_b8zcm8_k$();
          var tmp0_subject_2 = startInternal(this, tmp0__anonymous__1_2495602521);
          if (tmp0_subject_2 === 0)
            return false;
          else if (tmp0_subject_2 === 1)
            return true;
        }
      }
      Unit_getInstance();
    }
  };
  JobSupport.prototype.onStart_qth026_k$ = function () {
  };
  JobSupport.prototype.getCancellationException_8i1q6u_k$ = function () {
    var state = this._get_state__3614753120_b8zcm8_k$();
    var tmp;
    if (state instanceof Finishing) {
      var tmp0_safe_receiver = state._get_rootCause__1061504650_hjzq8a_k$();
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : this.toCancellationException_8ve25p_k$(tmp0_safe_receiver, _get_classSimpleName__3937513404(this) + ' is cancelling');
      var tmp_0;
      if (tmp1_elvis_lhs == null) {
        var tmp0_error_0 = 'Job is still new or active: ' + this;
        throw IllegalStateException_init_$Create$(toString_0(tmp0_error_0));
      } else {
        tmp_0 = tmp1_elvis_lhs;
      }
      tmp = tmp_0;
    } else {
      if (!(state == null) ? isInterface(state, Incomplete) : false) {
        var tmp1_error_0 = 'Job is still new or active: ' + this;
        throw IllegalStateException_init_$Create$(toString_0(tmp1_error_0));
      } else {
        if (state instanceof CompletedExceptionally) {
          var tmp_1 = state._get_cause__3139734664_j3sn7c_k$();
          tmp = this.toCancellationException$default_c99ojs_k$(tmp_1, null, 1, null);
        } else {
          {
            tmp = new JobCancellationException(_get_classSimpleName__3937513404(this) + ' has completed normally', null, this);
          }
        }
      }
    }
    return tmp;
  };
  JobSupport.prototype.toCancellationException_8ve25p_k$ = function (_this__1828080292, message) {
    var tmp0_elvis_lhs = _this__1828080292 instanceof CancellationException ? _this__1828080292 : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var tmp$ret$0;
      $l$block: {
        var tmp0_elvis_lhs_1 = message;
        tmp$ret$0 = new JobCancellationException(tmp0_elvis_lhs_1 == null ? this.cancellationExceptionMessage_a64063_k$() : tmp0_elvis_lhs_1, _this__1828080292, this);
        break $l$block;
      }
      tmp = tmp$ret$0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  JobSupport.prototype.toCancellationException$default_c99ojs_k$ = function (_this__1828080292, message, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      message = null;
    return this.toCancellationException_8ve25p_k$(_this__1828080292, message);
  };
  JobSupport.prototype._get_completionCause__4234865604_zs6rg_k$ = function () {
    var state = this._get_state__3614753120_b8zcm8_k$();
    var tmp;
    if (state instanceof Finishing) {
      var tmp0_elvis_lhs = state._get_rootCause__1061504650_hjzq8a_k$();
      var tmp_0;
      if (tmp0_elvis_lhs == null) {
        var tmp0_error_0 = 'Job is still new or active: ' + this;
        throw IllegalStateException_init_$Create$(toString_0(tmp0_error_0));
      } else {
        tmp_0 = tmp0_elvis_lhs;
      }
      tmp = tmp_0;
    } else {
      if (!(state == null) ? isInterface(state, Incomplete) : false) {
        var tmp1_error_0 = 'Job is still new or active: ' + this;
        throw IllegalStateException_init_$Create$(toString_0(tmp1_error_0));
      } else {
        if (state instanceof CompletedExceptionally) {
          tmp = state._get_cause__3139734664_j3sn7c_k$();
        } else {
          {
            tmp = null;
          }
        }
      }
    }
    return tmp;
  };
  JobSupport.prototype._get_completionCauseHandled__811476572_df4rbw_k$ = function () {
    var tmp$ret$1;
    $l$block_0: {
      var tmp0_let_0 = this._get_state__3614753120_b8zcm8_k$();
      {
      }
      var tmp$ret$0;
      $l$block: {
        var tmp;
        if (tmp0_let_0 instanceof CompletedExceptionally) {
          tmp = tmp0_let_0._get_handled__2128079701_z704t1_k$();
        } else {
          {
            tmp = false;
          }
        }
        tmp$ret$0 = tmp;
        break $l$block;
      }
      tmp$ret$1 = tmp$ret$0;
      break $l$block_0;
    }
    return tmp$ret$1;
  };
  JobSupport.prototype.invokeOnCompletion_t2apld_k$ = function (handler) {
    return this.invokeOnCompletion_npwpyn_k$(false, true, handler);
  };
  JobSupport.prototype.invokeOnCompletion_npwpyn_k$ = function (onCancelling, invokeImmediately, handler) {
    var node = makeNode(this, handler, onCancelling);
    {
      while (true) {
        var tmp$ret$1;
        $l$block_0: {
          var tmp0__anonymous__1_2495602521 = this._get_state__3614753120_b8zcm8_k$();
          var tmp0_subject_2 = tmp0__anonymous__1_2495602521;
          if (tmp0_subject_2 instanceof Empty) {
            if (tmp0__anonymous__1_2495602521.isActive_1) {
              if (this._state_1.atomicfu$compareAndSet(tmp0__anonymous__1_2495602521, node))
                return node;
            } else
              promoteEmptyToNodeList(this, tmp0__anonymous__1_2495602521);
          } else {
            if (!(tmp0_subject_2 == null) ? isInterface(tmp0_subject_2, Incomplete) : false) {
              var list_3 = tmp0__anonymous__1_2495602521._get_list__802566509_d9tsa5_k$();
              if (list_3 == null) {
                promoteSingleToNodeList(this, tmp0__anonymous__1_2495602521 instanceof JobNode ? tmp0__anonymous__1_2495602521 : THROW_CCE());
              } else {
                var rootCause_4 = null;
                var handle_5 = NonDisposableHandle_getInstance();
                var tmp;
                if (onCancelling) {
                  tmp = tmp0__anonymous__1_2495602521 instanceof Finishing;
                } else {
                  tmp = false;
                }
                if (tmp) {
                  var tmp$ret$2;
                  $l$block_1: {
                    rootCause_4 = tmp0__anonymous__1_2495602521._get_rootCause__1061504650_hjzq8a_k$();
                    var tmp_0;
                    var tmp_1;
                    if (rootCause_4 == null) {
                      tmp_1 = true;
                    } else {
                      var tmp_2;
                      var tmp$ret$0;
                      $l$block: {
                        tmp$ret$0 = handler instanceof ChildHandleNode;
                        break $l$block;
                      }
                      if (tmp$ret$0) {
                        tmp_2 = !tmp0__anonymous__1_2495602521._get_isCompleting__3027345611_kypj5h_k$();
                      } else {
                        {
                          tmp_2 = false;
                        }
                      }
                      tmp_1 = tmp_2;
                    }
                    if (tmp_1) {
                      if (!addLastAtomic(this, tmp0__anonymous__1_2495602521, list_3, node)) {
                        tmp$ret$1 = Unit_getInstance();
                        break $l$block_0;
                      }
                      if (rootCause_4 == null)
                        return node;
                      handle_5 = node;
                      tmp_0 = Unit_getInstance();
                    } else {
                    }
                    tmp$ret$2 = tmp_0;
                    break $l$block_1;
                  }
                } else {
                }
                if (!(rootCause_4 == null)) {
                  if (invokeImmediately)
                    invokeIt(handler, rootCause_4);
                  return handle_5;
                } else {
                  if (addLastAtomic(this, tmp0__anonymous__1_2495602521, list_3, node))
                    return node;
                }
              }
            } else {
              {
                if (invokeImmediately) {
                  var tmp1_safe_receiver_6 = tmp0__anonymous__1_2495602521 instanceof CompletedExceptionally ? tmp0__anonymous__1_2495602521 : null;
                  invokeIt(handler, tmp1_safe_receiver_6 == null ? null : tmp1_safe_receiver_6._get_cause__3139734664_j3sn7c_k$());
                }
                return NonDisposableHandle_getInstance();
              }
            }
          }
        }
      }
      Unit_getInstance();
    }
  };
  JobSupport.prototype.join_kbq7u1_k$ = function ($cont) {
    if (!joinInternal(this)) {
      var tmp$ret$0;
      $l$block: {
        tmp$ret$0 = $cont._get_context__1558698818_ps0bpe_k$();
        break $l$block;
      }
      ensureActive(tmp$ret$0);
      return Unit_getInstance();
    }
    return joinSuspend(this, $cont);
  };
  JobSupport.prototype._get_onJoin__939990146_fjn91e_k$ = function () {
    return this;
  };
  JobSupport.prototype.registerSelectClause0_h2wst5_k$ = function (select, block) {
    {
      while (true) {
        {
          var tmp0__anonymous__1_2495602521 = this._get_state__3614753120_b8zcm8_k$();
          if (select._get_isSelected__1871115078_uy0hmu_k$())
            return Unit_getInstance();
          if (!(!(tmp0__anonymous__1_2495602521 == null) ? isInterface(tmp0__anonymous__1_2495602521, Incomplete) : false)) {
            if (select.trySelect_1ivjiv_k$()) {
              startCoroutineUnintercepted(block, select._get_completion__2811226159_ojdpzl_k$());
            }
            return Unit_getInstance();
          } else {
          }
          if (startInternal(this, tmp0__anonymous__1_2495602521) === 0) {
            var tmp$ret$1;
            $l$block_0: {
              var tmp0__get_asHandler__0_2_3156268535 = new SelectJoinOnCompletion(select, block);
              var tmp$ret$0;
              $l$block: {
                tmp$ret$0 = tmp0__get_asHandler__0_2_3156268535;
                break $l$block;
              }
              tmp$ret$1 = tmp$ret$0;
              break $l$block_0;
            }
            select.disposeOnSelect_lrl426_k$(this.invokeOnCompletion_t2apld_k$(tmp$ret$1));
            return Unit_getInstance();
          }
        }
      }
      Unit_getInstance();
    }
  };
  JobSupport.prototype.removeNode_o3o6t1_k$ = function (node) {
    {
      while (true) {
        {
          var tmp0__anonymous__1_2495602521 = this._get_state__3614753120_b8zcm8_k$();
          var tmp0_subject_2 = tmp0__anonymous__1_2495602521;
          if (tmp0_subject_2 instanceof JobNode) {
            if (!(tmp0__anonymous__1_2495602521 === node))
              return Unit_getInstance();
            if (this._state_1.atomicfu$compareAndSet(tmp0__anonymous__1_2495602521, _get_EMPTY_ACTIVE__934614515()))
              return Unit_getInstance();
          } else {
            if (!(tmp0_subject_2 == null) ? isInterface(tmp0_subject_2, Incomplete) : false) {
              if (!(tmp0__anonymous__1_2495602521._get_list__802566509_d9tsa5_k$() == null)) {
                node.remove_fgfybg_k$();
                Unit_getInstance();
              }
              return Unit_getInstance();
            } else {
              return Unit_getInstance();
            }
          }
        }
      }
      Unit_getInstance();
    }
  };
  JobSupport.prototype._get_onCancelComplete__560530297_99q3y1_k$ = function () {
    return false;
  };
  JobSupport.prototype.cancel_4b7aim_k$ = function (cause) {
    var tmp0_elvis_lhs = cause;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var tmp$ret$0;
      $l$block: {
        var tmp0_elvis_lhs_1 = null;
        tmp$ret$0 = new JobCancellationException(tmp0_elvis_lhs_1 == null ? this.cancellationExceptionMessage_a64063_k$() : tmp0_elvis_lhs_1, null, this);
        break $l$block;
      }
      tmp = tmp$ret$0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    this.cancelInternal_wqrppy_k$(tmp);
  };
  JobSupport.prototype.cancellationExceptionMessage_a64063_k$ = function () {
    return 'Job was cancelled';
  };
  JobSupport.prototype.cancel_as6ug7_k$ = function (cause) {
    var tmp0_safe_receiver = cause;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      tmp = this.toCancellationException$default_c99ojs_k$(tmp0_safe_receiver, null, 1, null);
    }
    var tmp1_elvis_lhs = tmp;
    var tmp_0;
    if (tmp1_elvis_lhs == null) {
      var tmp$ret$0;
      $l$block: {
        var tmp0_elvis_lhs_1 = null;
        tmp$ret$0 = new JobCancellationException(tmp0_elvis_lhs_1 == null ? this.cancellationExceptionMessage_a64063_k$() : tmp0_elvis_lhs_1, null, this);
        break $l$block;
      }
      tmp_0 = tmp$ret$0;
    } else {
      tmp_0 = tmp1_elvis_lhs;
    }
    this.cancelInternal_wqrppy_k$(tmp_0);
    return true;
  };
  JobSupport.prototype.cancelInternal_wqrppy_k$ = function (cause) {
    this.cancelImpl_5ls1mt_k$(cause);
    Unit_getInstance();
  };
  JobSupport.prototype.parentCancelled_53w4ri_k$ = function (parentJob) {
    this.cancelImpl_5ls1mt_k$(parentJob);
    Unit_getInstance();
  };
  JobSupport.prototype.childCancelled_fdoq8t_k$ = function (cause) {
    if (cause instanceof CancellationException)
      return true;
    else {
    }
    return this.cancelImpl_5ls1mt_k$(cause) ? this._get_handlesException__2187079175_yuzcvt_k$() : false;
  };
  JobSupport.prototype.cancelCoroutine_dy4tw5_k$ = function (cause) {
    return this.cancelImpl_5ls1mt_k$(cause);
  };
  JobSupport.prototype.cancelImpl_5ls1mt_k$ = function (cause) {
    var finalState = _get_COMPLETING_ALREADY__1904323772();
    if (this._get_onCancelComplete__560530297_99q3y1_k$()) {
      finalState = cancelMakeCompleting(this, cause);
      if (finalState === _get_COMPLETING_WAITING_CHILDREN__621847959())
        return true;
    }
    if (finalState === _get_COMPLETING_ALREADY__1904323772()) {
      finalState = makeCancelling(this, cause);
    }
    var tmp;
    if (finalState === _get_COMPLETING_ALREADY__1904323772()) {
      tmp = true;
    } else if (finalState === _get_COMPLETING_WAITING_CHILDREN__621847959()) {
      tmp = true;
    } else if (finalState === _get_TOO_LATE_TO_CANCEL__2262851771()) {
      tmp = false;
    } else {
      this.afterCompletion_2ogq6g_k$(finalState);
      tmp = true;
    }
    return tmp;
  };
  JobSupport.prototype.defaultCancellationException_lkdizi_k$ = function (message, cause) {
    var tmp0_elvis_lhs = message;
    return new JobCancellationException(tmp0_elvis_lhs == null ? this.cancellationExceptionMessage_a64063_k$() : tmp0_elvis_lhs, cause, this);
  };
  JobSupport.prototype.getChildJobCancellationCause_wx9uoh_k$ = function () {
    var state = this._get_state__3614753120_b8zcm8_k$();
    var tmp0_subject = state;
    var tmp;
    if (tmp0_subject instanceof Finishing) {
      tmp = state._get_rootCause__1061504650_hjzq8a_k$();
    } else {
      if (tmp0_subject instanceof CompletedExceptionally) {
        tmp = state._get_cause__3139734664_j3sn7c_k$();
      } else {
        if (!(tmp0_subject == null) ? isInterface(tmp0_subject, Incomplete) : false) {
          var tmp0_error_0 = 'Cannot be cancelling child in this state: ' + toString(state);
          throw IllegalStateException_init_$Create$(toString_0(tmp0_error_0));
        } else {
          {
            tmp = null;
          }
        }
      }
    }
    var rootCause = tmp;
    var tmp1_elvis_lhs = rootCause instanceof CancellationException ? rootCause : null;
    return tmp1_elvis_lhs == null ? new JobCancellationException('Parent job is ' + stateString(this, state), rootCause, this) : tmp1_elvis_lhs;
  };
  JobSupport.prototype.makeCompleting_2ycklh_k$ = function (proposedUpdate) {
    {
      while (true) {
        var tmp$ret$0;
        $l$block: {
          var tmp0__anonymous__1_2495602521 = this._get_state__3614753120_b8zcm8_k$();
          var finalState_2 = tryMakeCompleting(this, tmp0__anonymous__1_2495602521, proposedUpdate);
          if (finalState_2 === _get_COMPLETING_ALREADY__1904323772())
            return false;
          else if (finalState_2 === _get_COMPLETING_WAITING_CHILDREN__621847959())
            return true;
          else if (finalState_2 === _get_COMPLETING_RETRY__2730327532()) {
            tmp$ret$0 = Unit_getInstance();
            break $l$block;
          } else {
            this.afterCompletion_2ogq6g_k$(finalState_2);
            return true;
          }
        }
      }
      Unit_getInstance();
    }
  };
  JobSupport.prototype.makeCompletingOnce_b13xy2_k$ = function (proposedUpdate) {
    {
      while (true) {
        var tmp$ret$0;
        $l$block: {
          var tmp0__anonymous__1_2495602521 = this._get_state__3614753120_b8zcm8_k$();
          var finalState_2 = tryMakeCompleting(this, tmp0__anonymous__1_2495602521, proposedUpdate);
          if (finalState_2 === _get_COMPLETING_ALREADY__1904323772())
            throw IllegalStateException_init_$Create$_0('Job ' + this + ' is already complete or completing, ' + ('but is being completed with ' + toString(proposedUpdate)), _get_exceptionOrNull__671063032(proposedUpdate, this));
          else if (finalState_2 === _get_COMPLETING_RETRY__2730327532()) {
            tmp$ret$0 = Unit_getInstance();
            break $l$block;
          } else
            return finalState_2;
        }
      }
      Unit_getInstance();
    }
  };
  JobSupport.prototype._get_children__1387553196_my42wc_k$ = function () {
    return sequence(JobSupport$_get_children_$slambda_1222912628_0(this, null));
  };
  JobSupport.prototype.attachChild_ik9c8b_k$ = function (child) {
    var tmp$ret$1;
    $l$block_0: {
      var tmp0__get_asHandler__0_1201048388 = new ChildHandleNode(child);
      var tmp$ret$0;
      $l$block: {
        tmp$ret$0 = tmp0__get_asHandler__0_1201048388;
        break $l$block;
      }
      tmp$ret$1 = tmp$ret$0;
      break $l$block_0;
    }
    var tmp = this.invokeOnCompletion$default_7q548c_k$(true, false, tmp$ret$1, 2, null);
    return isInterface(tmp, ChildHandle) ? tmp : THROW_CCE();
  };
  JobSupport.prototype.handleOnCompletionException_o179kb_k$ = function (exception) {
    throw exception;
  };
  JobSupport.prototype.onCancelling_bxyn9n_k$ = function (cause) {
  };
  JobSupport.prototype._get_isScopedCoroutine__175864179_2wpdo3_k$ = function () {
    return false;
  };
  JobSupport.prototype._get_handlesException__2187079175_yuzcvt_k$ = function () {
    return true;
  };
  JobSupport.prototype.handleJobException_oc4gxk_k$ = function (exception) {
    return false;
  };
  JobSupport.prototype.onCompletionInternal_39c1g8_k$ = function (state) {
  };
  JobSupport.prototype.afterCompletion_2ogq6g_k$ = function (state) {
  };
  JobSupport.prototype.toString = function () {
    return this.toDebugString_v3moy1_k$() + '@' + _get_hexAddress__2831015762(this);
  };
  JobSupport.prototype.toDebugString_v3moy1_k$ = function () {
    return this.nameString_cd9e9w_k$() + '{' + stateString(this, this._get_state__3614753120_b8zcm8_k$()) + '}';
  };
  JobSupport.prototype.nameString_cd9e9w_k$ = function () {
    return _get_classSimpleName__3937513404(this);
  };
  JobSupport.prototype._get_isCompletedExceptionally__2915561861_mt9g1n_k$ = function () {
    var tmp = this._get_state__3614753120_b8zcm8_k$();
    return tmp instanceof CompletedExceptionally;
  };
  JobSupport.prototype.getCompletionExceptionOrNull_snuvbb_k$ = function () {
    var state = this._get_state__3614753120_b8zcm8_k$();
    {
      {
      }
      if (!!(!(state == null) ? isInterface(state, Incomplete) : false)) {
        var tmp$ret$0;
        $l$block: {
          tmp$ret$0 = 'This job has not completed yet';
          break $l$block;
        }
        var message_1 = tmp$ret$0;
        throw IllegalStateException_init_$Create$(toString_0(message_1));
      } else {
      }
    }
    return _get_exceptionOrNull__671063032(state, this);
  };
  JobSupport.prototype.getCompletedInternal_26f4i6_k$ = function () {
    var state = this._get_state__3614753120_b8zcm8_k$();
    {
      {
      }
      if (!!(!(state == null) ? isInterface(state, Incomplete) : false)) {
        var tmp$ret$0;
        $l$block: {
          tmp$ret$0 = 'This job has not completed yet';
          break $l$block;
        }
        var message_1 = tmp$ret$0;
        throw IllegalStateException_init_$Create$(toString_0(message_1));
      } else {
      }
    }
    if (state instanceof CompletedExceptionally)
      throw state._get_cause__3139734664_j3sn7c_k$();
    else {
    }
    return unboxState(state);
  };
  JobSupport.prototype.awaitInternal_pz51jj_k$ = function ($cont) {
    $l$loop: while (true) {
      var state = this._get_state__3614753120_b8zcm8_k$();
      if (!(!(state == null) ? isInterface(state, Incomplete) : false)) {
        if (state instanceof CompletedExceptionally) {
          {
            var tmp0_recoverAndThrow_0 = state._get_cause__3139734664_j3sn7c_k$();
            throw tmp0_recoverAndThrow_0;
          }
        } else {
        }
        return unboxState(state);
      } else {
      }
      if (startInternal(this, state) >= 0)
        break $l$loop;
    }
    return awaitSuspend(this, $cont);
  };
  JobSupport.prototype.registerSelectClause1Internal_amjpx5_k$ = function (select, block) {
    {
      while (true) {
        {
          var tmp0__anonymous__1_2495602521 = this._get_state__3614753120_b8zcm8_k$();
          if (select._get_isSelected__1871115078_uy0hmu_k$())
            return Unit_getInstance();
          if (!(!(tmp0__anonymous__1_2495602521 == null) ? isInterface(tmp0__anonymous__1_2495602521, Incomplete) : false)) {
            if (select.trySelect_1ivjiv_k$()) {
              if (tmp0__anonymous__1_2495602521 instanceof CompletedExceptionally) {
                select.resumeSelectWithException_xs2ljz_k$(tmp0__anonymous__1_2495602521._get_cause__3139734664_j3sn7c_k$());
              } else {
                {
                  var tmp = unboxState(tmp0__anonymous__1_2495602521);
                  startCoroutineUnintercepted_0(block, (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE(), select._get_completion__2811226159_ojdpzl_k$());
                }
              }
            }
            return Unit_getInstance();
          } else {
          }
          if (startInternal(this, tmp0__anonymous__1_2495602521) === 0) {
            var tmp$ret$1;
            $l$block_0: {
              var tmp0__get_asHandler__0_2_3156268535 = new SelectAwaitOnCompletion(select, block);
              var tmp$ret$0;
              $l$block: {
                tmp$ret$0 = tmp0__get_asHandler__0_2_3156268535;
                break $l$block;
              }
              tmp$ret$1 = tmp$ret$0;
              break $l$block_0;
            }
            select.disposeOnSelect_lrl426_k$(this.invokeOnCompletion_t2apld_k$(tmp$ret$1));
            return Unit_getInstance();
          }
        }
      }
      Unit_getInstance();
    }
  };
  JobSupport.prototype.selectAwaitCompletion_tgh7vz_k$ = function (select, block) {
    var state = this._get_state__3614753120_b8zcm8_k$();
    if (state instanceof CompletedExceptionally)
      select.resumeSelectWithException_xs2ljz_k$(state._get_cause__3139734664_j3sn7c_k$());
    else {
      {
        var tmp = unboxState(state);
        var tmp_0 = (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE();
        var tmp_1 = select._get_completion__2811226159_ojdpzl_k$();
        startCoroutineCancellable$default(block, tmp_0, tmp_1, null, 4, null);
      }
    }
  };
  JobSupport.$metadata$ = {
    simpleName: 'JobSupport',
    kind: 'class',
    interfaces: [Job, ChildJob, ParentJob, SelectClause0]
  };
  function boxIncomplete(_this__1828080292) {
    init_properties_JobSupport_kt_3188198472();
    var tmp;
    if (!(_this__1828080292 == null) ? isInterface(_this__1828080292, Incomplete) : false) {
      tmp = new IncompleteStateBox(_this__1828080292);
    } else {
      {
        tmp = _this__1828080292;
      }
    }
    return tmp;
  }
  function JobCancellingNode() {
    JobNode.call(this);
  }
  JobCancellingNode.$metadata$ = {
    simpleName: 'JobCancellingNode',
    kind: 'class',
    interfaces: []
  };
  function _get_FALSE__2278683438() {
    return FALSE;
  }
  var FALSE;
  function _get_TRUE__779686525() {
    return TRUE;
  }
  var TRUE;
  function _get_RETRY__2626165321() {
    return RETRY;
  }
  var RETRY;
  function InactiveNodeList(list) {
    this.list_1 = list;
  }
  InactiveNodeList.prototype._get_list__802566509_d9tsa5_k$ = function () {
    return this.list_1;
  };
  InactiveNodeList.prototype._get_isActive__4035225851_4an5s5_k$ = function () {
    return false;
  };
  InactiveNodeList.prototype.toString = function () {
    return _get_DEBUG__2224823294() ? this.list_1.getString_xqex6i_k$('New') : anyToString(this);
  };
  InactiveNodeList.$metadata$ = {
    simpleName: 'InactiveNodeList',
    kind: 'class',
    interfaces: [Incomplete]
  };
  function ChildHandleNode(childJob) {
    JobCancellingNode.call(this);
    this.childJob_1 = childJob;
  }
  ChildHandleNode.prototype._get_childJob__1386370794_mxeqju_k$ = function () {
    return this.childJob_1;
  };
  ChildHandleNode.prototype._get_parent__1491962785_oo9xup_k$ = function () {
    return this._get_job__857118836_e6b14k_k$();
  };
  ChildHandleNode.prototype.invoke_7fb7sc_k$ = function (cause) {
    return this.childJob_1.parentCancelled_53w4ri_k$(this._get_job__857118836_e6b14k_k$());
  };
  ChildHandleNode.prototype.invoke = function (cause) {
    return this.invoke_7fb7sc_k$(cause);
  };
  ChildHandleNode.prototype.childCancelled_fdoq8t_k$ = function (cause) {
    return this._get_job__857118836_e6b14k_k$().childCancelled_fdoq8t_k$(cause);
  };
  ChildHandleNode.$metadata$ = {
    simpleName: 'ChildHandleNode',
    kind: 'class',
    interfaces: [ChildHandle]
  };
  function _get_handler__2128080135_0($this) {
    return $this.handler_1;
  }
  function _get__invoked__2209039294($this) {
    return $this._invoked_1;
  }
  function InvokeOnCancelling(handler) {
    JobCancellingNode.call(this);
    this.handler_1 = handler;
    this._invoked_1 = atomic$int$1(0);
  }
  InvokeOnCancelling.prototype.invoke_7fb7sc_k$ = function (cause) {
    if (this._invoked_1.atomicfu$compareAndSet(0, 1))
      this.handler_1(cause);
  };
  InvokeOnCancelling.prototype.invoke = function (cause) {
    return this.invoke_7fb7sc_k$(cause);
  };
  InvokeOnCancelling.$metadata$ = {
    simpleName: 'InvokeOnCancelling',
    kind: 'class',
    interfaces: []
  };
  function _get_handler__2128080135_1($this) {
    return $this.handler_1;
  }
  function InvokeOnCompletion(handler) {
    JobNode.call(this);
    this.handler_1 = handler;
  }
  InvokeOnCompletion.prototype.invoke_7fb7sc_k$ = function (cause) {
    return this.handler_1(cause);
  };
  InvokeOnCompletion.prototype.invoke = function (cause) {
    return this.invoke_7fb7sc_k$(cause);
  };
  InvokeOnCompletion.$metadata$ = {
    simpleName: 'InvokeOnCompletion',
    kind: 'class',
    interfaces: []
  };
  function _get_continuation__2061681140($this) {
    return $this.continuation_1;
  }
  function ResumeOnCompletion(continuation) {
    JobNode.call(this);
    this.continuation_1 = continuation;
  }
  ResumeOnCompletion.prototype.invoke_7fb7sc_k$ = function (cause) {
    var tmp$ret$1;
    $l$block_0: {
      var tmp0_resume_0 = this.continuation_1;
      var tmp$ret$0;
      $l$block: {
        var tmp0_success_0_1 = Companion_getInstance_0();
        tmp$ret$0 = _Result___init__impl__2241242780(Unit_getInstance());
        break $l$block;
      }
      tmp$ret$1 = tmp0_resume_0.resumeWith_s3a3yh_k$(tmp$ret$0);
      break $l$block_0;
    }
    return tmp$ret$1;
  };
  ResumeOnCompletion.prototype.invoke = function (cause) {
    return this.invoke_7fb7sc_k$(cause);
  };
  ResumeOnCompletion.$metadata$ = {
    simpleName: 'ResumeOnCompletion',
    kind: 'class',
    interfaces: []
  };
  function _get_select__4263438735($this) {
    return $this.select_1;
  }
  function _get_block__3121070308($this) {
    return $this.block_1;
  }
  function SelectJoinOnCompletion(select, block) {
    JobNode.call(this);
    this.select_1 = select;
    this.block_1 = block;
  }
  SelectJoinOnCompletion.prototype.invoke_7fb7sc_k$ = function (cause) {
    if (this.select_1.trySelect_1ivjiv_k$())
      startCoroutineCancellable_0(this.block_1, this.select_1._get_completion__2811226159_ojdpzl_k$());
  };
  SelectJoinOnCompletion.prototype.invoke = function (cause) {
    return this.invoke_7fb7sc_k$(cause);
  };
  SelectJoinOnCompletion.$metadata$ = {
    simpleName: 'SelectJoinOnCompletion',
    kind: 'class',
    interfaces: []
  };
  function unboxState(_this__1828080292) {
    init_properties_JobSupport_kt_3188198472();
    var tmp0_safe_receiver = _this__1828080292 instanceof IncompleteStateBox ? _this__1828080292 : null;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.state_1;
    return tmp1_elvis_lhs == null ? _this__1828080292 : tmp1_elvis_lhs;
  }
  function _get_continuation__2061681140_0($this) {
    return $this.continuation_1;
  }
  function ResumeAwaitOnCompletion(continuation) {
    JobNode.call(this);
    this.continuation_1 = continuation;
  }
  ResumeAwaitOnCompletion.prototype.invoke_7fb7sc_k$ = function (cause) {
    var state = this._get_job__857118836_e6b14k_k$()._get_state__3614753120_b8zcm8_k$();
    {
    }
    if (state instanceof CompletedExceptionally) {
      var tmp$ret$1;
      $l$block_0: {
        var tmp0_resumeWithException_0 = this.continuation_1;
        var tmp1_resumeWithException_0 = state._get_cause__3139734664_j3sn7c_k$();
        var tmp$ret$0;
        $l$block: {
          var tmp0_failure_0_1 = Companion_getInstance_0();
          tmp$ret$0 = _Result___init__impl__2241242780(createFailure(tmp1_resumeWithException_0));
          break $l$block;
        }
        tmp$ret$1 = tmp0_resumeWithException_0.resumeWith_s3a3yh_k$(tmp$ret$0);
        break $l$block_0;
      }
    } else {
      {
        var tmp$ret$3;
        $l$block_2: {
          var tmp2_resume_0 = this.continuation_1;
          var tmp = unboxState(state);
          var tmp3_resume_0 = (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE();
          var tmp$ret$2;
          $l$block_1: {
            var tmp0_success_0_1 = Companion_getInstance_0();
            tmp$ret$2 = _Result___init__impl__2241242780(tmp3_resume_0);
            break $l$block_1;
          }
          tmp$ret$3 = tmp2_resume_0.resumeWith_s3a3yh_k$(tmp$ret$2);
          break $l$block_2;
        }
      }
    }
  };
  ResumeAwaitOnCompletion.prototype.invoke = function (cause) {
    return this.invoke_7fb7sc_k$(cause);
  };
  ResumeAwaitOnCompletion.$metadata$ = {
    simpleName: 'ResumeAwaitOnCompletion',
    kind: 'class',
    interfaces: []
  };
  function _get_select__4263438735_0($this) {
    return $this.select_1;
  }
  function _get_block__3121070308_0($this) {
    return $this.block_1;
  }
  function SelectAwaitOnCompletion(select, block) {
    JobNode.call(this);
    this.select_1 = select;
    this.block_1 = block;
  }
  SelectAwaitOnCompletion.prototype.invoke_7fb7sc_k$ = function (cause) {
    if (this.select_1.trySelect_1ivjiv_k$())
      this._get_job__857118836_e6b14k_k$().selectAwaitCompletion_tgh7vz_k$(this.select_1, this.block_1);
  };
  SelectAwaitOnCompletion.prototype.invoke = function (cause) {
    return this.invoke_7fb7sc_k$(cause);
  };
  SelectAwaitOnCompletion.$metadata$ = {
    simpleName: 'SelectAwaitOnCompletion',
    kind: 'class',
    interfaces: []
  };
  function IncompleteStateBox(state) {
    this.state_1 = state;
  }
  IncompleteStateBox.prototype._get_state__3614753120_b8zcm8_k$ = function () {
    return this.state_1;
  };
  IncompleteStateBox.$metadata$ = {
    simpleName: 'IncompleteStateBox',
    kind: 'class',
    interfaces: []
  };
  function ChildContinuation(child) {
    JobCancellingNode.call(this);
    this.child_1 = child;
  }
  ChildContinuation.prototype._get_child__3145835061_j05w3v_k$ = function () {
    return this.child_1;
  };
  ChildContinuation.prototype.invoke_7fb7sc_k$ = function (cause) {
    this.child_1.parentCancelled_uc06zq_k$(this.child_1.getContinuationCancellationCause_62o4c9_k$(this._get_job__857118836_e6b14k_k$()));
  };
  ChildContinuation.prototype.invoke = function (cause) {
    return this.invoke_7fb7sc_k$(cause);
  };
  ChildContinuation.$metadata$ = {
    simpleName: 'ChildContinuation',
    kind: 'class',
    interfaces: []
  };
  var properties_initialized_JobSupport_kt_333787756;
  function init_properties_JobSupport_kt_3188198472() {
    if (!properties_initialized_JobSupport_kt_333787756) {
      properties_initialized_JobSupport_kt_333787756 = true;
      COMPLETING_ALREADY = new Symbol('COMPLETING_ALREADY');
      COMPLETING_WAITING_CHILDREN = new Symbol('COMPLETING_WAITING_CHILDREN');
      COMPLETING_RETRY = new Symbol('COMPLETING_RETRY');
      TOO_LATE_TO_CANCEL = new Symbol('TOO_LATE_TO_CANCEL');
      SEALED = new Symbol('SEALED');
      EMPTY_NEW = new Empty(false);
      EMPTY_ACTIVE = new Empty(true);
    }
  }
  function MainCoroutineDispatcher() {
    CoroutineDispatcher.call(this);
  }
  MainCoroutineDispatcher.prototype.toString = function () {
    var tmp0_elvis_lhs = this.toStringInternalImpl_hcqz93_k$();
    return tmp0_elvis_lhs == null ? _get_classSimpleName__3937513404(this) + '@' + _get_hexAddress__2831015762(this) : tmp0_elvis_lhs;
  };
  MainCoroutineDispatcher.prototype.limitedParallelism_glrman_k$ = function (parallelism) {
    checkParallelism(parallelism);
    return this;
  };
  MainCoroutineDispatcher.prototype.toStringInternalImpl_hcqz93_k$ = function () {
    var main = Dispatchers_getInstance()._get_Main__773689234_csmufm_k$();
    if (this === main)
      return 'Dispatchers.Main';
    var tmp;
    try {
      tmp = main._get_immediate__3483316416_df8hts_k$();
    } catch ($p) {
      var tmp_0;
      if ($p instanceof UnsupportedOperationException) {
        tmp_0 = null;
      } else {
        {
          throw $p;
        }
      }
      tmp = tmp_0;
    }
    var immediate = tmp;
    if (this === immediate)
      return 'Dispatchers.Main.immediate';
    return null;
  };
  MainCoroutineDispatcher.$metadata$ = {
    simpleName: 'MainCoroutineDispatcher',
    kind: 'class',
    interfaces: []
  };
  function TimeoutCancellationException_init_$Init$(message, $this) {
    TimeoutCancellationException.call($this, message, null);
    return $this;
  }
  function TimeoutCancellationException_init_$Create$(message) {
    var tmp = TimeoutCancellationException_init_$Init$(message, Object.create(TimeoutCancellationException.prototype));
    captureStack(tmp, TimeoutCancellationException_init_$Create$);
    return tmp;
  }
  function TimeoutCancellationException(message, coroutine) {
    CancellationException_init_$Init$(message, this);
    this.coroutine_1 = coroutine;
    captureStack(this, TimeoutCancellationException);
  }
  TimeoutCancellationException.prototype._get_coroutine__1953794681_wb8lmh_k$ = function () {
    return this.coroutine_1;
  };
  TimeoutCancellationException.prototype.createCopy_mmw9ld_k$ = function () {
    var tmp$ret$0;
    $l$block: {
      var tmp0_elvis_lhs = this.message;
      var tmp0_also_0 = new TimeoutCancellationException(tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs, this.coroutine_1);
      {
      }
      {
        initCause(tmp0_also_0, this);
      }
      tmp$ret$0 = tmp0_also_0;
      break $l$block;
    }
    return tmp$ret$0;
  };
  TimeoutCancellationException.$metadata$ = {
    simpleName: 'TimeoutCancellationException',
    kind: 'class',
    interfaces: [CopyableThrowable]
  };
  function Unconfined() {
    Unconfined_instance = this;
    CoroutineDispatcher.call(this);
  }
  Unconfined.prototype.limitedParallelism_glrman_k$ = function (parallelism) {
    throw UnsupportedOperationException_init_$Create$('limitedParallelism is not supported for Dispatchers.Unconfined');
  };
  Unconfined.prototype.isDispatchNeeded_fmz9vn_k$ = function (context) {
    return false;
  };
  Unconfined.prototype.dispatch_o98ux7_k$ = function (context, block) {
    var yieldContext = context.get_1pi7hg_k$(Key_getInstance_3());
    if (!(yieldContext == null)) {
      yieldContext.dispatcherWasUnconfined_1 = true;
      return Unit_getInstance();
    }
    throw UnsupportedOperationException_init_$Create$('Dispatchers.Unconfined.dispatch function can only be used by the yield function. If you wrap Unconfined dispatcher in your code, make sure you properly delegate isDispatchNeeded and dispatch calls.');
  };
  Unconfined.prototype.toString = function () {
    return 'Dispatchers.Unconfined';
  };
  Unconfined.$metadata$ = {
    simpleName: 'Unconfined',
    kind: 'object',
    interfaces: []
  };
  var Unconfined_instance;
  function Unconfined_getInstance() {
    if (Unconfined_instance == null)
      new Unconfined();
    return Unconfined_instance;
  }
  function Key_3() {
    Key_instance_2 = this;
  }
  Key_3.$metadata$ = {
    simpleName: 'Key',
    kind: 'object',
    interfaces: [Key]
  };
  var Key_instance_2;
  function Key_getInstance_3() {
    if (Key_instance_2 == null)
      new Key_3();
    return Key_instance_2;
  }
  function YieldContext() {
    Key_getInstance_3();
    AbstractCoroutineContextElement.call(this, Key_getInstance_3());
    this.dispatcherWasUnconfined_1 = false;
  }
  YieldContext.prototype._set_dispatcherWasUnconfined__3961136706_3p78gp_k$ = function (_set____804775014) {
    this.dispatcherWasUnconfined_1 = _set____804775014;
  };
  YieldContext.prototype._get_dispatcherWasUnconfined__2723007950_pzwjle_k$ = function () {
    return this.dispatcherWasUnconfined_1;
  };
  YieldContext.$metadata$ = {
    simpleName: 'YieldContext',
    kind: 'class',
    interfaces: []
  };
  function _get_EMPTY__2261257284() {
    init_properties_AbstractChannel_kt_2931858707();
    return EMPTY;
  }
  var EMPTY;
  function _get_OFFER_SUCCESS__1078998001() {
    init_properties_AbstractChannel_kt_2931858707();
    return OFFER_SUCCESS;
  }
  var OFFER_SUCCESS;
  function _get_OFFER_FAILED__676838827() {
    init_properties_AbstractChannel_kt_2931858707();
    return OFFER_FAILED;
  }
  var OFFER_FAILED;
  function _get_POLL_FAILED__3177529460() {
    init_properties_AbstractChannel_kt_2931858707();
    return POLL_FAILED;
  }
  var POLL_FAILED;
  function _get_ENQUEUE_FAILED__2229156375() {
    init_properties_AbstractChannel_kt_2931858707();
    return ENQUEUE_FAILED;
  }
  var ENQUEUE_FAILED;
  function _get_HANDLER_INVOKED__4230551610() {
    init_properties_AbstractChannel_kt_2931858707();
    return HANDLER_INVOKED;
  }
  var HANDLER_INVOKED;
  var properties_initialized_AbstractChannel_kt_2425990511;
  function init_properties_AbstractChannel_kt_2931858707() {
    if (!properties_initialized_AbstractChannel_kt_2425990511) {
      properties_initialized_AbstractChannel_kt_2425990511 = true;
      EMPTY = new Symbol('EMPTY');
      OFFER_SUCCESS = new Symbol('OFFER_SUCCESS');
      OFFER_FAILED = new Symbol('OFFER_FAILED');
      POLL_FAILED = new Symbol('POLL_FAILED');
      ENQUEUE_FAILED = new Symbol('ENQUEUE_FAILED');
      HANDLER_INVOKED = new Symbol('ON_CLOSE_HANDLER_INVOKED');
    }
  }
  function _get_NO_VALUE__3415357656() {
    init_properties_SharedFlow_kt_350587591();
    return NO_VALUE;
  }
  var NO_VALUE;
  var properties_initialized_SharedFlow_kt_1791144171;
  function init_properties_SharedFlow_kt_350587591() {
    if (!properties_initialized_SharedFlow_kt_1791144171) {
      properties_initialized_SharedFlow_kt_1791144171 = true;
      NO_VALUE = new Symbol('NO_VALUE');
    }
  }
  function _get_NONE__774049299() {
    init_properties_StateFlow_kt_422687541();
    return NONE;
  }
  var NONE;
  function _get_PENDING__3223254138() {
    init_properties_StateFlow_kt_422687541();
    return PENDING;
  }
  var PENDING;
  var properties_initialized_StateFlow_kt_1438988433;
  function init_properties_StateFlow_kt_422687541() {
    if (!properties_initialized_StateFlow_kt_1438988433) {
      properties_initialized_StateFlow_kt_1438988433 = true;
      NONE = new Symbol('NONE');
      PENDING = new Symbol('PENDING');
    }
  }
  function _get_EMPTY_RESUMES__228476573() {
    init_properties_AbstractSharedFlow_kt_3415088837();
    return EMPTY_RESUMES;
  }
  var EMPTY_RESUMES;
  var properties_initialized_AbstractSharedFlow_kt_4135903465;
  function init_properties_AbstractSharedFlow_kt_3415088837() {
    if (!properties_initialized_AbstractSharedFlow_kt_4135903465) {
      properties_initialized_AbstractSharedFlow_kt_4135903465 = true;
      var tmp$ret$0;
      $l$block: {
        tmp$ret$0 = fillArrayVal(Array(0), null);
        break $l$block;
      }
      EMPTY_RESUMES = tmp$ret$0;
    }
  }
  function _get_NULL__774226340() {
    init_properties_NullSurrogate_kt_3789141955();
    return NULL;
  }
  var NULL;
  function _get_UNINITIALIZED__1009105334() {
    init_properties_NullSurrogate_kt_3789141955();
    return UNINITIALIZED;
  }
  var UNINITIALIZED;
  function _get_DONE__764814089() {
    init_properties_NullSurrogate_kt_3789141955();
    return DONE;
  }
  var DONE;
  var properties_initialized_NullSurrogate_kt_4096995103;
  function init_properties_NullSurrogate_kt_3789141955() {
    if (!properties_initialized_NullSurrogate_kt_4096995103) {
      properties_initialized_NullSurrogate_kt_4096995103 = true;
      NULL = new Symbol('NULL');
      UNINITIALIZED = new Symbol('UNINITIALIZED');
      DONE = new Symbol('DONE');
    }
  }
  function _get_defaultKeySelector__3745859790() {
    init_properties_Distinct_kt_2113607454();
    return defaultKeySelector;
  }
  var defaultKeySelector;
  function _get_defaultAreEquivalent__3297369294() {
    init_properties_Distinct_kt_2113607454();
    return defaultAreEquivalent;
  }
  var defaultAreEquivalent;
  function defaultKeySelector$lambda() {
    return function (it) {
      return it;
    };
  }
  function defaultAreEquivalent$lambda() {
    return function (old, new_0) {
      return equals(old, new_0);
    };
  }
  var properties_initialized_Distinct_kt_2423486018;
  function init_properties_Distinct_kt_2113607454() {
    if (!properties_initialized_Distinct_kt_2423486018) {
      properties_initialized_Distinct_kt_2423486018 = true;
      defaultKeySelector = defaultKeySelector$lambda();
      defaultAreEquivalent = defaultAreEquivalent$lambda();
    }
  }
  function _get_DEFAULT_CONCURRENCY__1705117404() {
    init_properties_Merge_kt_1855583292();
    return DEFAULT_CONCURRENCY;
  }
  var DEFAULT_CONCURRENCY;
  function _get_DEFAULT_CONCURRENCY_PROPERTY_NAME__758326374() {
    return DEFAULT_CONCURRENCY_PROPERTY_NAME;
  }
  var DEFAULT_CONCURRENCY_PROPERTY_NAME;
  var properties_initialized_Merge_kt_815695768;
  function init_properties_Merge_kt_1855583292() {
    if (!properties_initialized_Merge_kt_815695768) {
      properties_initialized_Merge_kt_815695768 = true;
      DEFAULT_CONCURRENCY = systemProp('kotlinx.coroutines.flow.defaultConcurrency', 16, 1, IntCompanionObject_getInstance()._get_MAX_VALUE__3201573499_i2z81x_k$());
    }
  }
  function _set_elements__1997450176($this, _set____804775014) {
    $this.elements_1 = _set____804775014;
  }
  function _get_elements__1223318964($this) {
    return $this.elements_1;
  }
  function _set_head__584118391($this, _set____804775014) {
    $this.head_1 = _set____804775014;
  }
  function _get_head__798735467($this) {
    return $this.head_1;
  }
  function _set_tail__595089415($this, _set____804775014) {
    $this.tail_1 = _set____804775014;
  }
  function _get_tail__809706491($this) {
    return $this.tail_1;
  }
  function ensureCapacity($this) {
    var currentSize = $this.elements_1.length;
    var newCapacity = currentSize << 1;
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = fillArrayVal(Array(newCapacity), null);
      break $l$block;
    }
    var newElements = tmp$ret$0;
    var tmp$ret$1;
    $l$block_0: {
      var tmp0_copyInto_0 = $this.elements_1;
      var tmp1_copyInto_0 = $this.head_1;
      var tmp2_copyInto_0 = tmp0_copyInto_0.length;
      arrayCopy(tmp0_copyInto_0, newElements, 0, tmp1_copyInto_0, tmp2_copyInto_0);
      tmp$ret$1 = newElements;
      break $l$block_0;
    }
    Unit_getInstance();
    var tmp$ret$2;
    $l$block_1: {
      var tmp3_copyInto_0 = $this.elements_1;
      var tmp4_copyInto_0 = $this.elements_1.length - $this.head_1 | 0;
      var tmp5_copyInto_0 = $this.head_1;
      arrayCopy(tmp3_copyInto_0, newElements, tmp4_copyInto_0, 0, tmp5_copyInto_0);
      tmp$ret$2 = newElements;
      break $l$block_1;
    }
    Unit_getInstance();
    $this.elements_1 = newElements;
    $this.head_1 = 0;
    $this.tail_1 = currentSize;
  }
  function ArrayQueue() {
    var tmp = this;
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = fillArrayVal(Array(16), null);
      break $l$block;
    }
    tmp.elements_1 = tmp$ret$0;
    this.head_1 = 0;
    this.tail_1 = 0;
  }
  ArrayQueue.prototype._get_isEmpty__1500737838_oti0q6_k$ = function () {
    return this.head_1 === this.tail_1;
  };
  ArrayQueue.prototype.addLast_xhfl3v_k$ = function (element) {
    this.elements_1[this.tail_1] = element;
    this.tail_1 = (this.tail_1 + 1 | 0) & (this.elements_1.length - 1 | 0);
    if (this.tail_1 === this.head_1)
      ensureCapacity(this);
  };
  ArrayQueue.prototype.removeFirstOrNull_eges3a_k$ = function () {
    if (this.head_1 === this.tail_1)
      return null;
    var element = this.elements_1[this.head_1];
    this.elements_1[this.head_1] = null;
    this.head_1 = (this.head_1 + 1 | 0) & (this.elements_1.length - 1 | 0);
    return isObject(element) ? element : THROW_CCE();
  };
  ArrayQueue.prototype.clear_j9y8zo_k$ = function () {
    this.head_1 = 0;
    this.tail_1 = 0;
    var tmp = this;
    var tmp$ret$0;
    $l$block: {
      var tmp0_arrayOfNulls_0 = this.elements_1.length;
      tmp$ret$0 = fillArrayVal(Array(tmp0_arrayOfNulls_0), null);
      break $l$block;
    }
    tmp.elements_1 = tmp$ret$0;
  };
  ArrayQueue.$metadata$ = {
    simpleName: 'ArrayQueue',
    kind: 'class',
    interfaces: []
  };
  function _get_NO_DECISION__267590711() {
    init_properties_Atomic_kt_4084920911();
    return NO_DECISION;
  }
  var NO_DECISION;
  function _get_RETRY_ATOMIC__2660021705() {
    init_properties_Atomic_kt_4084920911();
    return RETRY_ATOMIC;
  }
  var RETRY_ATOMIC;
  function OpDescriptor() {
  }
  OpDescriptor.prototype.toString = function () {
    return _get_classSimpleName__3937513404(this) + '@' + _get_hexAddress__2831015762(this);
  };
  OpDescriptor.prototype.isEarlierThan_b5adjh_k$ = function (that) {
    var tmp0_elvis_lhs = this._get_atomicOp__1209215967_jzxp0f_k$();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var thisOp = tmp;
    var tmp1_elvis_lhs = that._get_atomicOp__1209215967_jzxp0f_k$();
    var tmp_0;
    if (tmp1_elvis_lhs == null) {
      return false;
    } else {
      tmp_0 = tmp1_elvis_lhs;
    }
    var thatOp = tmp_0;
    return thisOp._get_opSequence__871165961_eeo3yh_k$().compareTo_n4fqi2_k$(thatOp._get_opSequence__871165961_eeo3yh_k$()) < 0;
  };
  OpDescriptor.$metadata$ = {
    simpleName: 'OpDescriptor',
    kind: 'class',
    interfaces: []
  };
  function _get__consensus__2874017939($this) {
    return $this._consensus_1;
  }
  function AtomicOp() {
    OpDescriptor.call(this);
    this._consensus_1 = atomic$ref$1(_get_NO_DECISION__267590711());
  }
  AtomicOp.prototype._get_consensus__2364232890_vxic7a_k$ = function () {
    return this._consensus_1._get_value__3683422336_a43j40_k$();
  };
  AtomicOp.prototype._get_isDecided__2759190303_ped141_k$ = function () {
    return !(this._consensus_1._get_value__3683422336_a43j40_k$() === _get_NO_DECISION__267590711());
  };
  AtomicOp.prototype._get_opSequence__871165961_eeo3yh_k$ = function () {
    return new Long(0, 0);
  };
  AtomicOp.prototype._get_atomicOp__1209215967_jzxp0f_k$ = function () {
    return this;
  };
  AtomicOp.prototype.decide_ydi1rd_k$ = function (decision) {
    {
    }
    var current = this._consensus_1._get_value__3683422336_a43j40_k$();
    if (!(current === _get_NO_DECISION__267590711()))
      return current;
    if (this._consensus_1.atomicfu$compareAndSet(_get_NO_DECISION__267590711(), decision))
      return decision;
    return this._consensus_1._get_value__3683422336_a43j40_k$();
  };
  AtomicOp.prototype.perform_8emi3i_k$ = function (affected) {
    var decision = this._consensus_1._get_value__3683422336_a43j40_k$();
    if (decision === _get_NO_DECISION__267590711()) {
      decision = this.decide_ydi1rd_k$(this.prepare_gq68ys_k$((affected == null ? true : isObject(affected)) ? affected : THROW_CCE()));
    }
    this.complete_fye4ce_k$((affected == null ? true : isObject(affected)) ? affected : THROW_CCE(), decision);
    return decision;
  };
  AtomicOp.$metadata$ = {
    simpleName: 'AtomicOp',
    kind: 'class',
    interfaces: []
  };
  function AtomicDesc() {
  }
  AtomicDesc.prototype._set_atomicOp__1983347179_2tavyi_k$ = function (_set____804775014) {
    this.atomicOp_1 = _set____804775014;
  };
  AtomicDesc.prototype._get_atomicOp__1209215967_jzxp0f_k$ = function () {
    var tmp = this.atomicOp_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('atomicOp');
    }
  };
  AtomicDesc.$metadata$ = {
    simpleName: 'AtomicDesc',
    kind: 'class',
    interfaces: []
  };
  var properties_initialized_Atomic_kt_1913178739;
  function init_properties_Atomic_kt_4084920911() {
    if (!properties_initialized_Atomic_kt_1913178739) {
      properties_initialized_Atomic_kt_1913178739 = true;
      NO_DECISION = new Symbol('NO_DECISION');
      RETRY_ATOMIC = new Symbol('RETRY_ATOMIC');
    }
  }
  function _get_CLOSED__3869857567() {
    init_properties_ConcurrentLinkedList_kt_1817414892();
    return CLOSED;
  }
  var CLOSED;
  var properties_initialized_ConcurrentLinkedList_kt_3030537744;
  function init_properties_ConcurrentLinkedList_kt_1817414892() {
    if (!properties_initialized_ConcurrentLinkedList_kt_3030537744) {
      properties_initialized_ConcurrentLinkedList_kt_3030537744 = true;
      CLOSED = new Symbol('CLOSED');
    }
  }
  function _get_UNDEFINED__1354999585() {
    init_properties_DispatchedContinuation_kt_2588858602();
    return UNDEFINED;
  }
  var UNDEFINED;
  function _get_REUSABLE_CLAIMED__1637142852() {
    init_properties_DispatchedContinuation_kt_2588858602();
    return REUSABLE_CLAIMED;
  }
  var REUSABLE_CLAIMED;
  function resumeCancellableWith(_this__1828080292, result, onCancellation) {
    init_properties_DispatchedContinuation_kt_2588858602();
    var tmp0_subject = _this__1828080292;
    var tmp;
    if (tmp0_subject instanceof DispatchedContinuation) {
      var tmp1_resumeCancellableWith_0 = _this__1828080292;
      var state_1 = toState_0(result, onCancellation);
      var tmp_0;
      if (tmp1_resumeCancellableWith_0.dispatcher_1.isDispatchNeeded_fmz9vn_k$(tmp1_resumeCancellableWith_0._get_context__1558698818_ps0bpe_k$())) {
        tmp1_resumeCancellableWith_0._state_1 = state_1;
        tmp1_resumeCancellableWith_0._set_resumeMode__3223626279_v0m0nr_k$(_get_MODE_CANCELLABLE__581347323());
        tmp_0 = tmp1_resumeCancellableWith_0.dispatcher_1.dispatch_o98ux7_k$(tmp1_resumeCancellableWith_0._get_context__1558698818_ps0bpe_k$(), tmp1_resumeCancellableWith_0);
      } else {
        var tmp$ret$0;
        $l$block_5: {
          var tmp0_executeUnconfined_0 = _get_MODE_CANCELLABLE__581347323();
          {
          }
          var eventLoop_2 = ThreadLocalEventLoop_getInstance()._get_eventLoop__3953864115_5n30wd_k$();
          if (false ? eventLoop_2._get_isUnconfinedQueueEmpty__1719770308_sfwn9g_k$() : false) {
            tmp$ret$0 = false;
            break $l$block_5;
          }
          var tmp_1;
          if (eventLoop_2._get_isUnconfinedLoopActive__1254651510_kqzjau_k$()) {
            tmp1_resumeCancellableWith_0._state_1 = state_1;
            tmp1_resumeCancellableWith_0._set_resumeMode__3223626279_v0m0nr_k$(tmp0_executeUnconfined_0);
            eventLoop_2.dispatchUnconfined_do6j6f_k$(tmp1_resumeCancellableWith_0);
            tmp_1 = true;
          } else {
            {
              eventLoop_2.incrementUseCount_ocukpa_k$(true);
              try {
                {
                  var tmp$ret$3;
                  $l$block_3: {
                    var job_1_4 = tmp1_resumeCancellableWith_0._get_context__1558698818_ps0bpe_k$().get_1pi7hg_k$(Key_getInstance_2());
                    if (!(job_1_4 == null) ? !job_1_4._get_isActive__4035225851_4an5s5_k$() : false) {
                      var cause_2_5 = job_1_4.getCancellationException_8i1q6u_k$();
                      tmp1_resumeCancellableWith_0.cancelCompletedResult_tweln2_k$(state_1, cause_2_5);
                      var tmp$ret$2;
                      $l$block_1: {
                        var tmp$ret$1;
                        $l$block_0: {
                          var tmp0_failure_0_1_6 = Companion_getInstance_0();
                          tmp$ret$1 = _Result___init__impl__2241242780(createFailure(cause_2_5));
                          break $l$block_0;
                        }
                        tmp$ret$2 = tmp1_resumeCancellableWith_0.resumeWith_s3a3yh_k$(tmp$ret$1);
                        break $l$block_1;
                      }
                      tmp$ret$3 = true;
                      break $l$block_3;
                    }
                    tmp$ret$3 = false;
                    break $l$block_3;
                  }
                  if (!tmp$ret$3) {
                    {
                      var tmp$ret$4;
                      $l$block_4: {
                        var tmp0_withContinuationContext_0_7 = tmp1_resumeCancellableWith_0.continuation_1;
                        var tmp1_withContinuationContext_0_8 = tmp1_resumeCancellableWith_0.countOrElement_1;
                        tmp$ret$4 = tmp1_resumeCancellableWith_0.continuation_1.resumeWith_s3a3yh_k$(result);
                        break $l$block_4;
                      }
                    }
                  } else {
                  }
                }
                $l$loop: while (true) {
                  if (!eventLoop_2.processUnconfinedEvent_mypjl6_k$())
                    break $l$loop;
                }
              } catch ($p) {
                if ($p instanceof Error) {
                  tmp1_resumeCancellableWith_0.handleFatalException_56zdfo_k$($p, null);
                } else {
                  {
                    throw $p;
                  }
                }
              }
              finally {
                eventLoop_2.decrementUseCount_saho26_k$(true);
              }
            }
            tmp_1 = false;
          }
          tmp$ret$0 = tmp_1;
          break $l$block_5;
        }
        tmp_0 = Unit_getInstance();
      }
      tmp = tmp_0;
    } else {
      {
        tmp = _this__1828080292.resumeWith_s3a3yh_k$(result);
      }
    }
    return tmp;
  }
  function resumeCancellableWith$default(_this__1828080292, result, onCancellation, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      onCancellation = null;
    return resumeCancellableWith(_this__1828080292, result, onCancellation);
  }
  function _get__reusableCancellableContinuation__4264171442($this) {
    return $this._reusableCancellableContinuation_1;
  }
  function _get_reusableCancellableContinuation__588561561($this) {
    var tmp = $this._reusableCancellableContinuation_1._get_value__3683422336_a43j40_k$();
    return tmp instanceof CancellableContinuationImpl ? tmp : null;
  }
  function DispatchedContinuation(dispatcher, continuation) {
    DispatchedTask.call(this, _get_MODE_UNINITIALIZED__2647465612());
    this.dispatcher_1 = dispatcher;
    this.continuation_1 = continuation;
    this._state_1 = _get_UNDEFINED__1354999585();
    this.countOrElement_1 = threadContextElements(this._get_context__1558698818_ps0bpe_k$());
    this._reusableCancellableContinuation_1 = atomic$ref$1(null);
  }
  DispatchedContinuation.prototype._get_dispatcher__3474623172_dketks_k$ = function () {
    return this.dispatcher_1;
  };
  DispatchedContinuation.prototype._get_continuation__2061681140_y3gzck_k$ = function () {
    return this.continuation_1;
  };
  DispatchedContinuation.prototype._get_context__1558698818_ps0bpe_k$ = function () {
    return this.continuation_1._get_context__1558698818_ps0bpe_k$();
  };
  DispatchedContinuation.prototype._set__state__4012747461_cx6lu3_k$ = function (_set____804775014) {
    this._state_1 = _set____804775014;
  };
  DispatchedContinuation.prototype._get__state__4101327289_37adl3_k$ = function () {
    return this._state_1;
  };
  DispatchedContinuation.prototype._get_callerFrame__1796373807_tpiiwf_k$ = function () {
    var tmp = this.continuation_1;
    return isInterface(tmp, CoroutineStackFrame) ? tmp : null;
  };
  DispatchedContinuation.prototype.getStackTraceElement_um8m53_k$ = function () {
    return null;
  };
  DispatchedContinuation.prototype._get_countOrElement__2919327745_mr0q9r_k$ = function () {
    return this.countOrElement_1;
  };
  DispatchedContinuation.prototype.isReusable_hrfetn_k$ = function () {
    return !(this._reusableCancellableContinuation_1._get_value__3683422336_a43j40_k$() == null);
  };
  DispatchedContinuation.prototype.awaitReusability_itz0u_k$ = function () {
    {
      var tmp0_loop_0 = this._reusableCancellableContinuation_1;
      while (true) {
        {
          var tmp1__anonymous__1_4003154330 = tmp0_loop_0._get_value__3683422336_a43j40_k$();
          if (!(tmp1__anonymous__1_4003154330 === _get_REUSABLE_CLAIMED__1637142852()))
            return Unit_getInstance();
        }
      }
      Unit_getInstance();
    }
  };
  DispatchedContinuation.prototype.release_wtm6d2_k$ = function () {
    this.awaitReusability_itz0u_k$();
    var tmp0_safe_receiver = _get_reusableCancellableContinuation__588561561(this);
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.detachChild_qdtbew_k$();
      Unit_getInstance();
    }
    Unit_getInstance();
  };
  DispatchedContinuation.prototype.claimReusableCancellableContinuation_oatv30_k$ = function () {
    {
      var tmp0_loop_0 = this._reusableCancellableContinuation_1;
      while (true) {
        {
          var tmp1__anonymous__1_4003154330 = tmp0_loop_0._get_value__3683422336_a43j40_k$();
          if (tmp1__anonymous__1_4003154330 === null) {
            this._reusableCancellableContinuation_1._set_value__1325260276_x73o94_k$(_get_REUSABLE_CLAIMED__1637142852());
            return null;
          } else {
            if (tmp1__anonymous__1_4003154330 instanceof CancellableContinuationImpl) {
              if (this._reusableCancellableContinuation_1.atomicfu$compareAndSet(tmp1__anonymous__1_4003154330, _get_REUSABLE_CLAIMED__1637142852())) {
                return tmp1__anonymous__1_4003154330 instanceof CancellableContinuationImpl ? tmp1__anonymous__1_4003154330 : THROW_CCE();
              }
            } else {
              if (tmp1__anonymous__1_4003154330 === _get_REUSABLE_CLAIMED__1637142852()) {
              } else {
                if (tmp1__anonymous__1_4003154330 instanceof Error) {
                } else {
                  {
                    var tmp0_error_0_2 = 'Inconsistent state ' + toString(tmp1__anonymous__1_4003154330);
                    throw IllegalStateException_init_$Create$(toString_0(tmp0_error_0_2));
                  }
                }
              }
            }
          }
        }
      }
      Unit_getInstance();
    }
  };
  DispatchedContinuation.prototype.tryReleaseClaimedContinuation_5s4a1c_k$ = function (continuation) {
    {
      var tmp0_loop_0 = this._reusableCancellableContinuation_1;
      while (true) {
        {
          var tmp1__anonymous__1_4003154330 = tmp0_loop_0._get_value__3683422336_a43j40_k$();
          if (tmp1__anonymous__1_4003154330 === _get_REUSABLE_CLAIMED__1637142852()) {
            if (this._reusableCancellableContinuation_1.atomicfu$compareAndSet(_get_REUSABLE_CLAIMED__1637142852(), continuation))
              return null;
          } else {
            if (tmp1__anonymous__1_4003154330 instanceof Error) {
              {
                var tmp0_require_0_2 = this._reusableCancellableContinuation_1.atomicfu$compareAndSet(tmp1__anonymous__1_4003154330, null);
                {
                }
                {
                  {
                  }
                  if (!tmp0_require_0_2) {
                    var tmp$ret$0;
                    $l$block: {
                      tmp$ret$0 = 'Failed requirement.';
                      break $l$block;
                    }
                    var message_2_1_3 = tmp$ret$0;
                    throw IllegalArgumentException_init_$Create$(toString_0(message_2_1_3));
                  }
                }
              }
              return tmp1__anonymous__1_4003154330;
            } else {
              {
                var tmp1_error_0_4 = 'Inconsistent state ' + toString(tmp1__anonymous__1_4003154330);
                throw IllegalStateException_init_$Create$(toString_0(tmp1_error_0_4));
              }
            }
          }
        }
      }
      Unit_getInstance();
    }
  };
  DispatchedContinuation.prototype.postponeCancellation_723ard_k$ = function (cause) {
    {
      var tmp0_loop_0 = this._reusableCancellableContinuation_1;
      while (true) {
        {
          var tmp1__anonymous__1_4003154330 = tmp0_loop_0._get_value__3683422336_a43j40_k$();
          var tmp0_subject_2 = tmp1__anonymous__1_4003154330;
          if (equals(tmp0_subject_2, _get_REUSABLE_CLAIMED__1637142852())) {
            if (this._reusableCancellableContinuation_1.atomicfu$compareAndSet(_get_REUSABLE_CLAIMED__1637142852(), cause))
              return true;
          } else {
            if (tmp0_subject_2 instanceof Error)
              return true;
            else {
              {
                if (this._reusableCancellableContinuation_1.atomicfu$compareAndSet(tmp1__anonymous__1_4003154330, null))
                  return false;
              }
            }
          }
        }
      }
      Unit_getInstance();
    }
  };
  DispatchedContinuation.prototype.takeState_olvzuy_k$ = function () {
    var state = this._state_1;
    {
    }
    this._state_1 = _get_UNDEFINED__1354999585();
    return state;
  };
  DispatchedContinuation.prototype._get_delegate__1111020262_idh0py_k$ = function () {
    return this;
  };
  DispatchedContinuation.prototype.resumeWith_s3a3yh_k$ = function (result) {
    var context = this.continuation_1._get_context__1558698818_ps0bpe_k$();
    var state = toState$default(result, null, 1, null);
    if (this.dispatcher_1.isDispatchNeeded_fmz9vn_k$(context)) {
      this._state_1 = state;
      this._set_resumeMode__3223626279_v0m0nr_k$(_get_MODE_ATOMIC__241678890());
      this.dispatcher_1.dispatch_o98ux7_k$(context, this);
    } else {
      var tmp$ret$0;
      $l$block_1: {
        var tmp0_executeUnconfined_0 = _get_MODE_ATOMIC__241678890();
        {
        }
        var eventLoop_2 = ThreadLocalEventLoop_getInstance()._get_eventLoop__3953864115_5n30wd_k$();
        if (false ? eventLoop_2._get_isUnconfinedQueueEmpty__1719770308_sfwn9g_k$() : false) {
          tmp$ret$0 = false;
          break $l$block_1;
        }
        var tmp;
        if (eventLoop_2._get_isUnconfinedLoopActive__1254651510_kqzjau_k$()) {
          this._state_1 = state;
          this._set_resumeMode__3223626279_v0m0nr_k$(tmp0_executeUnconfined_0);
          eventLoop_2.dispatchUnconfined_do6j6f_k$(this);
          tmp = true;
        } else {
          {
            eventLoop_2.incrementUseCount_ocukpa_k$(true);
            try {
              {
                var tmp$ret$1;
                $l$block_0: {
                  var tmp0_withCoroutineContext_0_4 = this._get_context__1558698818_ps0bpe_k$();
                  var tmp1_withCoroutineContext_0_5 = this.countOrElement_1;
                  tmp$ret$1 = this.continuation_1.resumeWith_s3a3yh_k$(result);
                  break $l$block_0;
                }
              }
              $l$loop: while (true) {
                if (!eventLoop_2.processUnconfinedEvent_mypjl6_k$())
                  break $l$loop;
              }
            } catch ($p) {
              if ($p instanceof Error) {
                this.handleFatalException_56zdfo_k$($p, null);
              } else {
                {
                  throw $p;
                }
              }
            }
            finally {
              eventLoop_2.decrementUseCount_saho26_k$(true);
            }
          }
          tmp = false;
        }
        tmp$ret$0 = tmp;
        break $l$block_1;
      }
      Unit_getInstance();
    }
  };
  DispatchedContinuation.prototype.resumeCancellableWith_tuk66b_k$ = function (result, onCancellation) {
    var state = toState_0(result, onCancellation);
    if (this.dispatcher_1.isDispatchNeeded_fmz9vn_k$(this._get_context__1558698818_ps0bpe_k$())) {
      this._state_1 = state;
      this._set_resumeMode__3223626279_v0m0nr_k$(_get_MODE_CANCELLABLE__581347323());
      this.dispatcher_1.dispatch_o98ux7_k$(this._get_context__1558698818_ps0bpe_k$(), this);
    } else {
      var tmp$ret$0;
      $l$block_5: {
        var tmp0_executeUnconfined_0 = _get_MODE_CANCELLABLE__581347323();
        {
        }
        var eventLoop_2 = ThreadLocalEventLoop_getInstance()._get_eventLoop__3953864115_5n30wd_k$();
        if (false ? eventLoop_2._get_isUnconfinedQueueEmpty__1719770308_sfwn9g_k$() : false) {
          tmp$ret$0 = false;
          break $l$block_5;
        }
        var tmp;
        if (eventLoop_2._get_isUnconfinedLoopActive__1254651510_kqzjau_k$()) {
          this._state_1 = state;
          this._set_resumeMode__3223626279_v0m0nr_k$(tmp0_executeUnconfined_0);
          eventLoop_2.dispatchUnconfined_do6j6f_k$(this);
          tmp = true;
        } else {
          {
            eventLoop_2.incrementUseCount_ocukpa_k$(true);
            try {
              {
                var tmp$ret$3;
                $l$block_3: {
                  var job_1_4 = this._get_context__1558698818_ps0bpe_k$().get_1pi7hg_k$(Key_getInstance_2());
                  if (!(job_1_4 == null) ? !job_1_4._get_isActive__4035225851_4an5s5_k$() : false) {
                    var cause_2_5 = job_1_4.getCancellationException_8i1q6u_k$();
                    this.cancelCompletedResult_tweln2_k$(state, cause_2_5);
                    var tmp$ret$2;
                    $l$block_1: {
                      var tmp$ret$1;
                      $l$block_0: {
                        var tmp0_failure_0_1_6 = Companion_getInstance_0();
                        tmp$ret$1 = _Result___init__impl__2241242780(createFailure(cause_2_5));
                        break $l$block_0;
                      }
                      tmp$ret$2 = this.resumeWith_s3a3yh_k$(tmp$ret$1);
                      break $l$block_1;
                    }
                    tmp$ret$3 = true;
                    break $l$block_3;
                  }
                  tmp$ret$3 = false;
                  break $l$block_3;
                }
                if (!tmp$ret$3) {
                  {
                    var tmp$ret$4;
                    $l$block_4: {
                      var tmp0_withContinuationContext_0_7 = this.continuation_1;
                      var tmp1_withContinuationContext_0_8 = this.countOrElement_1;
                      tmp$ret$4 = this.continuation_1.resumeWith_s3a3yh_k$(result);
                      break $l$block_4;
                    }
                  }
                } else {
                }
              }
              $l$loop: while (true) {
                if (!eventLoop_2.processUnconfinedEvent_mypjl6_k$())
                  break $l$loop;
              }
            } catch ($p) {
              if ($p instanceof Error) {
                this.handleFatalException_56zdfo_k$($p, null);
              } else {
                {
                  throw $p;
                }
              }
            }
            finally {
              eventLoop_2.decrementUseCount_saho26_k$(true);
            }
          }
          tmp = false;
        }
        tmp$ret$0 = tmp;
        break $l$block_5;
      }
      Unit_getInstance();
    }
  };
  DispatchedContinuation.prototype.cancelCompletedResult_tweln2_k$ = function (takenState, cause) {
    if (takenState instanceof CompletedWithCancellation) {
      takenState._get_onCancellation__3868581321_71uxiv_k$()(cause);
    } else {
    }
  };
  DispatchedContinuation.prototype.resumeCancelled_vc1wm3_k$ = function (state) {
    var job = this._get_context__1558698818_ps0bpe_k$().get_1pi7hg_k$(Key_getInstance_2());
    if (!(job == null) ? !job._get_isActive__4035225851_4an5s5_k$() : false) {
      var cause = job.getCancellationException_8i1q6u_k$();
      this.cancelCompletedResult_tweln2_k$(state, cause);
      var tmp$ret$1;
      $l$block_0: {
        var tmp$ret$0;
        $l$block: {
          var tmp0_failure_0_1 = Companion_getInstance_0();
          tmp$ret$0 = _Result___init__impl__2241242780(createFailure(cause));
          break $l$block;
        }
        tmp$ret$1 = this.resumeWith_s3a3yh_k$(tmp$ret$0);
        break $l$block_0;
      }
      return true;
    }
    return false;
  };
  DispatchedContinuation.prototype.resumeUndispatchedWith_xz834r_k$ = function (result) {
    var tmp$ret$0;
    $l$block: {
      var tmp0_withContinuationContext_0 = this.continuation_1;
      var tmp1_withContinuationContext_0 = this.countOrElement_1;
      tmp$ret$0 = this.continuation_1.resumeWith_s3a3yh_k$(result);
      break $l$block;
    }
  };
  DispatchedContinuation.prototype.dispatchYield_r38es3_k$ = function (context, value) {
    this._state_1 = value;
    this._set_resumeMode__3223626279_v0m0nr_k$(_get_MODE_CANCELLABLE__581347323());
    this.dispatcher_1.dispatchYield_ww21f6_k$(context, this);
  };
  DispatchedContinuation.prototype.toString = function () {
    return 'DispatchedContinuation[' + this.dispatcher_1 + ', ' + toDebugString(this.continuation_1) + ']';
  };
  DispatchedContinuation.$metadata$ = {
    simpleName: 'DispatchedContinuation',
    kind: 'class',
    interfaces: [CoroutineStackFrame, Continuation]
  };
  function executeUnconfined(_this__1828080292, contState, mode, doYield, block) {
    init_properties_DispatchedContinuation_kt_2588858602();
    {
    }
    var eventLoop = ThreadLocalEventLoop_getInstance()._get_eventLoop__3953864115_5n30wd_k$();
    if (doYield ? eventLoop._get_isUnconfinedQueueEmpty__1719770308_sfwn9g_k$() : false)
      return false;
    var tmp;
    if (eventLoop._get_isUnconfinedLoopActive__1254651510_kqzjau_k$()) {
      _this__1828080292._state_1 = contState;
      _this__1828080292._set_resumeMode__3223626279_v0m0nr_k$(mode);
      eventLoop.dispatchUnconfined_do6j6f_k$(_this__1828080292);
      tmp = true;
    } else {
      {
        eventLoop.incrementUseCount_ocukpa_k$(true);
        try {
          block();
          $l$loop: while (true) {
            if (!eventLoop.processUnconfinedEvent_mypjl6_k$())
              break $l$loop;
          }
        } catch ($p) {
          if ($p instanceof Error) {
            _this__1828080292.handleFatalException_56zdfo_k$($p, null);
          } else {
            {
              throw $p;
            }
          }
        }
        finally {
          eventLoop.decrementUseCount_saho26_k$(true);
        }
      }
      tmp = false;
    }
    return tmp;
  }
  var properties_initialized_DispatchedContinuation_kt_168814862;
  function init_properties_DispatchedContinuation_kt_2588858602() {
    if (!properties_initialized_DispatchedContinuation_kt_168814862) {
      properties_initialized_DispatchedContinuation_kt_168814862 = true;
      UNDEFINED = new Symbol('UNDEFINED');
      REUSABLE_CLAIMED = new Symbol('REUSABLE_CLAIMED');
    }
  }
  function _get_MODE_CANCELLABLE__581347323() {
    return MODE_CANCELLABLE;
  }
  var MODE_CANCELLABLE;
  function DispatchedTask(resumeMode) {
    SchedulerTask.call(this);
    this.resumeMode_1 = resumeMode;
  }
  DispatchedTask.prototype._set_resumeMode__3223626279_v0m0nr_k$ = function (_set____804775014) {
    this.resumeMode_1 = _set____804775014;
  };
  DispatchedTask.prototype._get_resumeMode__2312873755_ws355x_k$ = function () {
    return this.resumeMode_1;
  };
  DispatchedTask.prototype.cancelCompletedResult_tweln2_k$ = function (takenState, cause) {
  };
  DispatchedTask.prototype.getSuccessfulResult_gdkv2w_k$ = function (state) {
    return (state == null ? true : isObject(state)) ? state : THROW_CCE();
  };
  DispatchedTask.prototype.getExceptionalResult_bnge6_k$ = function (state) {
    var tmp0_safe_receiver = state instanceof CompletedExceptionally ? state : null;
    return tmp0_safe_receiver == null ? null : tmp0_safe_receiver._get_cause__3139734664_j3sn7c_k$();
  };
  DispatchedTask.prototype.run_mw4iiu_k$ = function () {
    {
    }
    var taskContext = _get_taskContext__3781262951(this);
    var fatalException = null;
    try {
      var tmp = this._get_delegate__1111020262_idh0py_k$();
      var delegate = tmp instanceof DispatchedContinuation ? tmp : THROW_CCE();
      var continuation = delegate._get_continuation__2061681140_y3gzck_k$();
      var tmp$ret$5;
      $l$block_4: {
        var tmp0_withContinuationContext_0 = delegate._get_countOrElement__2919327745_mr0q9r_k$();
        var context_2 = continuation._get_context__1558698818_ps0bpe_k$();
        var state_3 = this.takeState_olvzuy_k$();
        var exception_4 = this.getExceptionalResult_bnge6_k$(state_3);
        var job_5 = (exception_4 == null ? _get_isCancellableMode__2954248492(this.resumeMode_1) : false) ? context_2.get_1pi7hg_k$(Key_getInstance_2()) : null;
        var tmp_0;
        if (!(job_5 == null) ? !job_5._get_isActive__4035225851_4an5s5_k$() : false) {
          var cause_6 = job_5.getCancellationException_8i1q6u_k$();
          this.cancelCompletedResult_tweln2_k$(state_3, cause_6);
          var tmp$ret$0;
          $l$block: {
            var tmp0_failure_0_7 = Companion_getInstance_0();
            var tmp1_failure_0_8 = recoverStackTrace(cause_6, continuation);
            tmp$ret$0 = _Result___init__impl__2241242780(createFailure(tmp1_failure_0_8));
            break $l$block;
          }
          tmp_0 = continuation.resumeWith_s3a3yh_k$(tmp$ret$0);
        } else {
          var tmp_1;
          if (!(exception_4 == null)) {
            var tmp$ret$2;
            $l$block_1: {
              var tmp$ret$1;
              $l$block_0: {
                var tmp0_failure_0_1_9 = Companion_getInstance_0();
                tmp$ret$1 = _Result___init__impl__2241242780(createFailure(exception_4));
                break $l$block_0;
              }
              tmp$ret$2 = continuation.resumeWith_s3a3yh_k$(tmp$ret$1);
              break $l$block_1;
            }
            tmp_1 = tmp$ret$2;
          } else {
            var tmp$ret$4;
            $l$block_3: {
              var tmp2_resume_0_10 = this.getSuccessfulResult_gdkv2w_k$(state_3);
              var tmp$ret$3;
              $l$block_2: {
                var tmp0_success_0_1_11 = Companion_getInstance_0();
                tmp$ret$3 = _Result___init__impl__2241242780(tmp2_resume_0_10);
                break $l$block_2;
              }
              tmp$ret$4 = continuation.resumeWith_s3a3yh_k$(tmp$ret$3);
              break $l$block_3;
            }
            tmp_1 = tmp$ret$4;
          }
          tmp_0 = tmp_1;
        }
        tmp$ret$5 = tmp_0;
        break $l$block_4;
      }
    } catch ($p) {
      if ($p instanceof Error) {
        fatalException = $p;
      } else {
        {
          throw $p;
        }
      }
    }
    finally {
      var tmp$ret$8;
      $l$block_7: {
        var tmp_2;
        try {
          var tmp$ret$6;
          $l$block_5: {
            var tmp0_success_0_1 = Companion_getInstance_0();
            var tmp1_success_0_2 = Unit_getInstance();
            tmp$ret$6 = _Result___init__impl__2241242780(Unit_getInstance());
            break $l$block_5;
          }
          tmp_2 = tmp$ret$6;
        } catch ($p) {
          var tmp_3;
          if ($p instanceof Error) {
            var tmp$ret$7;
            $l$block_6: {
              var tmp2_failure_0_4 = Companion_getInstance_0();
              tmp$ret$7 = _Result___init__impl__2241242780(createFailure($p));
              break $l$block_6;
            }
            tmp_3 = tmp$ret$7;
          } else {
            {
              throw $p;
            }
          }
          tmp_2 = tmp_3;
        }
        tmp$ret$8 = tmp_2;
        break $l$block_7;
      }
      var result = tmp$ret$8;
      this.handleFatalException_56zdfo_k$(fatalException, Result__exceptionOrNull_impl_1523290257(result));
    }
  };
  DispatchedTask.prototype.handleFatalException_56zdfo_k$ = function (exception, finallyException) {
    if (exception === null ? finallyException === null : false)
      return Unit_getInstance();
    if (!(exception === null) ? !(finallyException === null) : false) {
      {
      }
    }
    var tmp0_elvis_lhs = exception;
    var cause = tmp0_elvis_lhs == null ? finallyException : tmp0_elvis_lhs;
    var reason = new CoroutinesInternalError('Fatal exception in coroutines machinery for ' + this + '. ' + "Please read KDoc to 'handleFatalException' method and report this incident to maintainers", ensureNotNull(cause));
    handleCoroutineException(this._get_delegate__1111020262_idh0py_k$()._get_context__1558698818_ps0bpe_k$(), reason);
  };
  DispatchedTask.$metadata$ = {
    simpleName: 'DispatchedTask',
    kind: 'class',
    interfaces: []
  };
  function _get_MODE_UNINITIALIZED__2647465612() {
    return MODE_UNINITIALIZED;
  }
  var MODE_UNINITIALIZED;
  function _get_isReusableMode__1222974867(_this__1828080292) {
    return _this__1828080292 === 2;
  }
  function _get_MODE_CANCELLABLE_REUSABLE__29516823() {
    return MODE_CANCELLABLE_REUSABLE;
  }
  var MODE_CANCELLABLE_REUSABLE;
  function _get_isCancellableMode__2954248492(_this__1828080292) {
    return _this__1828080292 === 1 ? true : _this__1828080292 === 2;
  }
  function dispatch(_this__1828080292, mode) {
    {
    }
    var delegate = _this__1828080292._get_delegate__1111020262_idh0py_k$();
    var undispatched = mode === 4;
    var tmp;
    var tmp_0;
    if (!undispatched) {
      tmp_0 = delegate instanceof DispatchedContinuation;
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = _get_isCancellableMode__2954248492(mode) === _get_isCancellableMode__2954248492(_this__1828080292.resumeMode_1);
    } else {
      {
        tmp = false;
      }
    }
    if (tmp) {
      var dispatcher = delegate._get_dispatcher__3474623172_dketks_k$();
      var context = delegate._get_context__1558698818_ps0bpe_k$();
      if (dispatcher.isDispatchNeeded_fmz9vn_k$(context)) {
        dispatcher.dispatch_o98ux7_k$(context, _this__1828080292);
      } else {
        resumeUnconfined(_this__1828080292);
      }
    } else {
      {
        resume(_this__1828080292, delegate, undispatched);
      }
    }
  }
  function _get_MODE_UNDISPATCHED__3658117635() {
    return MODE_UNDISPATCHED;
  }
  var MODE_UNDISPATCHED;
  function _get_MODE_ATOMIC__241678890() {
    return MODE_ATOMIC;
  }
  var MODE_ATOMIC;
  function runUnconfinedEventLoop(_this__1828080292, eventLoop, block) {
    eventLoop.incrementUseCount_ocukpa_k$(true);
    try {
      block();
      $l$loop: while (true) {
        if (!eventLoop.processUnconfinedEvent_mypjl6_k$())
          break $l$loop;
      }
    } catch ($p) {
      if ($p instanceof Error) {
        _this__1828080292.handleFatalException_56zdfo_k$($p, null);
      } else {
        {
          throw $p;
        }
      }
    }
    finally {
      eventLoop.decrementUseCount_saho26_k$(true);
    }
  }
  function resumeWithStackTrace(_this__1828080292, exception) {
    var tmp$ret$0;
    $l$block: {
      var tmp0_failure_0 = Companion_getInstance_0();
      var tmp1_failure_0 = recoverStackTrace(exception, _this__1828080292);
      tmp$ret$0 = _Result___init__impl__2241242780(createFailure(tmp1_failure_0));
      break $l$block;
    }
    _this__1828080292.resumeWith_s3a3yh_k$(tmp$ret$0);
  }
  function resumeUnconfined(_this__1828080292) {
    var eventLoop = ThreadLocalEventLoop_getInstance()._get_eventLoop__3953864115_5n30wd_k$();
    if (eventLoop._get_isUnconfinedLoopActive__1254651510_kqzjau_k$()) {
      eventLoop.dispatchUnconfined_do6j6f_k$(_this__1828080292);
    } else {
      {
        eventLoop.incrementUseCount_ocukpa_k$(true);
        try {
          {
            resume(_this__1828080292, _this__1828080292._get_delegate__1111020262_idh0py_k$(), true);
          }
          $l$loop: while (true) {
            if (!eventLoop.processUnconfinedEvent_mypjl6_k$())
              break $l$loop;
          }
        } catch ($p) {
          if ($p instanceof Error) {
            _this__1828080292.handleFatalException_56zdfo_k$($p, null);
          } else {
            {
              throw $p;
            }
          }
        }
        finally {
          eventLoop.decrementUseCount_saho26_k$(true);
        }
      }
    }
  }
  function resume(_this__1828080292, delegate, undispatched) {
    var state = _this__1828080292.takeState_olvzuy_k$();
    var exception = _this__1828080292.getExceptionalResult_bnge6_k$(state);
    var tmp;
    if (!(exception == null)) {
      var tmp$ret$0;
      $l$block: {
        var tmp0_failure_0 = Companion_getInstance_0();
        tmp$ret$0 = _Result___init__impl__2241242780(createFailure(exception));
        break $l$block;
      }
      tmp = tmp$ret$0;
    } else {
      var tmp$ret$1;
      $l$block_0: {
        var tmp1_success_0 = Companion_getInstance_0();
        var tmp2_success_0 = _this__1828080292.getSuccessfulResult_gdkv2w_k$(state);
        tmp$ret$1 = _Result___init__impl__2241242780(tmp2_success_0);
        break $l$block_0;
      }
      tmp = tmp$ret$1;
    }
    var result = tmp;
    if (undispatched) {
      var tmp3_resumeUndispatchedWith_0 = delegate instanceof DispatchedContinuation ? delegate : THROW_CCE();
      var tmp$ret$2;
      $l$block_1: {
        var tmp0_withContinuationContext_0_1 = tmp3_resumeUndispatchedWith_0._get_continuation__2061681140_y3gzck_k$();
        var tmp1_withContinuationContext_0_2 = tmp3_resumeUndispatchedWith_0._get_countOrElement__2919327745_mr0q9r_k$();
        tmp$ret$2 = tmp3_resumeUndispatchedWith_0._get_continuation__2061681140_y3gzck_k$().resumeWith_s3a3yh_k$(result);
        break $l$block_1;
      }
    } else
      delegate.resumeWith_s3a3yh_k$(result);
  }
  function checkParallelism(_this__1828080292) {
    var tmp0_require_0 = _this__1828080292 >= 1;
    {
    }
    var tmp;
    if (!tmp0_require_0) {
      var tmp$ret$0;
      $l$block: {
        tmp$ret$0 = 'Expected positive parallelism level, but got ' + _this__1828080292;
        break $l$block;
      }
      var message_1 = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString_0(message_1));
    }
    return tmp;
  }
  function _get_dispatcher__3474623172($this) {
    return $this.dispatcher_1;
  }
  function _get_parallelism__4164420597($this) {
    return $this.parallelism_1;
  }
  function _set_runningWorkers__775011297($this, _set____804775014) {
    $this.runningWorkers_1 = _set____804775014;
  }
  function _get_runningWorkers__2318739157($this) {
    return $this.runningWorkers_1;
  }
  function _get_queue__3558538464($this) {
    return $this.queue_1;
  }
  function _get_workerAllocationLock__1278375970($this) {
    return $this.workerAllocationLock_1;
  }
  function dispatchInternal($this, block, dispatch) {
    if (addAndTryDispatching($this, block))
      return Unit_getInstance();
    if (!tryAllocateWorker($this))
      return Unit_getInstance();
    dispatch();
  }
  function tryAllocateWorker($this) {
    var tmp$ret$0;
    {
      var tmp0_synchronized_0 = $this.workerAllocationLock_1;
      if ($this.runningWorkers_1 >= $this.parallelism_1)
        return false;
      var tmp0_this_2 = $this;
      tmp0_this_2.runningWorkers_1 = tmp0_this_2.runningWorkers_1 + 1 | 0;
      Unit_getInstance();
      return true;
    }
  }
  function addAndTryDispatching($this, block) {
    $this.queue_1.addLast_3l8aar_k$(block);
    Unit_getInstance();
    return $this.runningWorkers_1 >= $this.parallelism_1;
  }
  function LimitedDispatcher(dispatcher, parallelism) {
    CoroutineDispatcher.call(this);
    this.dispatcher_1 = dispatcher;
    this.parallelism_1 = parallelism;
    var tmp = this;
    var tmp0_elvis_lhs = isInterface(dispatcher, Delay) ? dispatcher : null;
    tmp.$$delegate_0__1 = tmp0_elvis_lhs == null ? _get_DefaultDelay__1069114793() : tmp0_elvis_lhs;
    this.runningWorkers_1 = 0;
    this.queue_1 = new LockFreeTaskQueue(false);
    this.workerAllocationLock_1 = new Object();
  }
  LimitedDispatcher.prototype.delay_sw4t2e_k$ = function (time, $cont) {
    return this.$$delegate_0__1.delay_sw4t2e_k$(time, $cont);
  };
  LimitedDispatcher.prototype.invokeOnTimeout_sx2bqq_k$ = function (timeMillis, block, context) {
    return this.$$delegate_0__1.invokeOnTimeout_sx2bqq_k$(timeMillis, block, context);
  };
  LimitedDispatcher.prototype.scheduleResumeAfterDelay_5x4w1l_k$ = function (timeMillis, continuation) {
    this.$$delegate_0__1.scheduleResumeAfterDelay_5x4w1l_k$(timeMillis, continuation);
  };
  LimitedDispatcher.prototype.limitedParallelism_glrman_k$ = function (parallelism) {
    checkParallelism(parallelism);
    if (parallelism >= this.parallelism_1)
      return this;
    return CoroutineDispatcher.prototype.limitedParallelism_glrman_k$.call(this, parallelism);
  };
  LimitedDispatcher.prototype.run_mw4iiu_k$ = function () {
    var fairnessCounter = 0;
    $l$loop: while (true) {
      var task = this.queue_1.removeFirstOrNull_eges3a_k$();
      if (!(task == null)) {
        try {
          task.run_mw4iiu_k$();
        } catch ($p) {
          if ($p instanceof Error) {
            handleCoroutineException(EmptyCoroutineContext_getInstance(), $p);
          } else {
            {
              throw $p;
            }
          }
        }
        var tmp;
        fairnessCounter = fairnessCounter + 1 | 0;
        if (fairnessCounter >= 16) {
          tmp = this.dispatcher_1.isDispatchNeeded_fmz9vn_k$(this);
        } else {
          {
            tmp = false;
          }
        }
        if (tmp) {
          this.dispatcher_1.dispatch_o98ux7_k$(this, this);
          return Unit_getInstance();
        } else {
        }
        continue $l$loop;
      }
      var tmp$ret$0;
      $l$block: {
        var tmp0_synchronized_0 = this.workerAllocationLock_1;
        var tmp0_this_2 = this;
        tmp0_this_2.runningWorkers_1 = tmp0_this_2.runningWorkers_1 - 1 | 0;
        Unit_getInstance();
        if (this.queue_1._get_size__809037418_ddoh9m_k$() === 0)
          return Unit_getInstance();
        var tmp1_this_3 = this;
        tmp1_this_3.runningWorkers_1 = tmp1_this_3.runningWorkers_1 + 1 | 0;
        Unit_getInstance();
        fairnessCounter = 0;
        tmp$ret$0 = Unit_getInstance();
        break $l$block;
      }
    }
  };
  LimitedDispatcher.prototype.dispatch_o98ux7_k$ = function (context, block) {
    var tmp$ret$0;
    $l$block_0: {
      if (addAndTryDispatching(this, block)) {
        tmp$ret$0 = Unit_getInstance();
        break $l$block_0;
      }
      if (!tryAllocateWorker(this)) {
        tmp$ret$0 = Unit_getInstance();
        break $l$block_0;
      }
      {
        this.dispatcher_1.dispatch_o98ux7_k$(this, this);
      }
    }
  };
  LimitedDispatcher.prototype.dispatchYield_ww21f6_k$ = function (context, block) {
    var tmp$ret$0;
    $l$block_0: {
      if (addAndTryDispatching(this, block)) {
        tmp$ret$0 = Unit_getInstance();
        break $l$block_0;
      }
      if (!tryAllocateWorker(this)) {
        tmp$ret$0 = Unit_getInstance();
        break $l$block_0;
      }
      {
        this.dispatcher_1.dispatchYield_ww21f6_k$(this, this);
      }
    }
  };
  LimitedDispatcher.$metadata$ = {
    simpleName: 'LimitedDispatcher',
    kind: 'class',
    interfaces: [Runnable, Delay]
  };
  function _get_REMOVE_PREPARED__1435037049() {
    init_properties_LockFreeLinkedList_common_kt_867744553();
    return REMOVE_PREPARED;
  }
  var REMOVE_PREPARED;
  var properties_initialized_LockFreeLinkedList_common_kt_665716869;
  function init_properties_LockFreeLinkedList_common_kt_867744553() {
    if (!properties_initialized_LockFreeLinkedList_common_kt_665716869) {
      properties_initialized_LockFreeLinkedList_common_kt_665716869 = true;
      REMOVE_PREPARED = new Symbol('REMOVE_PREPARED');
    }
  }
  function _get__cur__790383850($this) {
    return $this._cur_1;
  }
  function LockFreeTaskQueue(singleConsumer) {
    var tmp = this;
    Companion_getInstance_1();
    tmp._cur_1 = atomic$ref$1(new LockFreeTaskQueueCore(8, singleConsumer));
  }
  LockFreeTaskQueue.prototype._get_isEmpty__1500737838_oti0q6_k$ = function () {
    return this._cur_1._get_value__3683422336_a43j40_k$()._get_isEmpty__1500737838_oti0q6_k$();
  };
  LockFreeTaskQueue.prototype._get_size__809037418_ddoh9m_k$ = function () {
    return this._cur_1._get_value__3683422336_a43j40_k$()._get_size__809037418_ddoh9m_k$();
  };
  LockFreeTaskQueue.prototype.close_ymq55z_k$ = function () {
    {
      var tmp0_loop_0 = this._cur_1;
      while (true) {
        {
          var tmp1__anonymous__1_4003154330 = tmp0_loop_0._get_value__3683422336_a43j40_k$();
          if (tmp1__anonymous__1_4003154330.close_1keygo_k$())
            return Unit_getInstance();
          this._cur_1.atomicfu$compareAndSet(tmp1__anonymous__1_4003154330, tmp1__anonymous__1_4003154330.next_20eer_k$());
          Unit_getInstance();
        }
      }
      Unit_getInstance();
    }
  };
  LockFreeTaskQueue.prototype.addLast_3l8aar_k$ = function (element) {
    {
      var tmp0_loop_0 = this._cur_1;
      while (true) {
        {
          var tmp1__anonymous__1_4003154330 = tmp0_loop_0._get_value__3683422336_a43j40_k$();
          var tmp0_subject_2 = tmp1__anonymous__1_4003154330.addLast_3l8aar_k$(element);
          Companion_getInstance_1();
          if (tmp0_subject_2 === 0)
            return true;
          else {
            Companion_getInstance_1();
            if (tmp0_subject_2 === 2)
              return false;
            else {
              Companion_getInstance_1();
              if (tmp0_subject_2 === 1) {
                this._cur_1.atomicfu$compareAndSet(tmp1__anonymous__1_4003154330, tmp1__anonymous__1_4003154330.next_20eer_k$());
                Unit_getInstance();
              } else {
              }
            }
          }
        }
      }
      Unit_getInstance();
    }
  };
  LockFreeTaskQueue.prototype.removeFirstOrNull_eges3a_k$ = function () {
    {
      var tmp0_loop_0 = this._cur_1;
      while (true) {
        {
          var tmp1__anonymous__1_4003154330 = tmp0_loop_0._get_value__3683422336_a43j40_k$();
          var result_2 = tmp1__anonymous__1_4003154330.removeFirstOrNull_eges3a_k$();
          if (!(result_2 === Companion_getInstance_1().REMOVE_FROZEN_1)) {
            return (result_2 == null ? true : isObject(result_2)) ? result_2 : THROW_CCE();
          }
          this._cur_1.atomicfu$compareAndSet(tmp1__anonymous__1_4003154330, tmp1__anonymous__1_4003154330.next_20eer_k$());
          Unit_getInstance();
        }
      }
      Unit_getInstance();
    }
  };
  LockFreeTaskQueue.prototype.map_cey4p6_k$ = function (transform) {
    return this._cur_1._get_value__3683422336_a43j40_k$().map_cey4p6_k$(transform);
  };
  LockFreeTaskQueue.prototype.isClosed_baxhhm_k$ = function () {
    return this._cur_1._get_value__3683422336_a43j40_k$().isClosed_baxhhm_k$();
  };
  LockFreeTaskQueue.$metadata$ = {
    simpleName: 'LockFreeTaskQueue',
    kind: 'class',
    interfaces: []
  };
  function _get_capacity__3674243665($this) {
    return $this.capacity_1;
  }
  function _get_singleConsumer__4039395693($this) {
    return $this.singleConsumer_1;
  }
  function _get_mask__803251423($this) {
    return $this.mask_1;
  }
  function _get__next__3036752447($this) {
    return $this._next_1;
  }
  function _get__state__4101327289_1($this) {
    return $this._state_1;
  }
  function _get_array__3098070168($this) {
    return $this.array_1;
  }
  function fillPlaceholder($this, index, element) {
    var old = $this.array_1.atomicfu$get(index & $this.mask_1)._get_value__3683422336_a43j40_k$();
    var tmp;
    if (old instanceof Placeholder) {
      tmp = old.index_1 === index;
    } else {
      {
        tmp = false;
      }
    }
    if (tmp) {
      $this.array_1.atomicfu$get(index & $this.mask_1)._set_value__1325260276_x73o94_k$(element);
      return $this;
    } else {
    }
    return null;
  }
  function removeSlowPath($this, oldHead, newHead) {
    {
      var tmp0_loop_0 = $this._state_1;
      while (true) {
        {
          var tmp1__anonymous__1_4003154330 = tmp0_loop_0._get_value__3683422336_a43j40_k$();
          var tmp$ret$0;
          $l$block: {
            var tmp0_withState_0_2 = Companion_getInstance_1();
            var head_1_3 = tmp1__anonymous__1_4003154330.and_jhajnj_k$(new Long(1073741823, 0)).shr_wjue3g_k$(0).toInt_1tsl84_k$();
            var tail_2_4 = tmp1__anonymous__1_4003154330.and_jhajnj_k$(new Long(-1073741824, 268435455)).shr_wjue3g_k$(30).toInt_1tsl84_k$();
            {
            }
            Companion_getInstance_1();
            if (!tmp1__anonymous__1_4003154330.and_jhajnj_k$(new Long(0, 268435456)).equals(new Long(0, 0))) {
              return $this.next_20eer_k$();
            } else {
            }
            var tmp;
            if ($this._state_1.atomicfu$compareAndSet(tmp1__anonymous__1_4003154330, Companion_getInstance_1().updateHead_eajy5c_k$(tmp1__anonymous__1_4003154330, newHead))) {
              $this.array_1.atomicfu$get(head_1_3 & $this.mask_1)._set_value__1325260276_x73o94_k$(null);
              return null;
            }
            tmp$ret$0 = tmp;
            break $l$block;
          }
        }
      }
      Unit_getInstance();
    }
  }
  function markFrozen($this) {
    var tmp$ret$1;
    $l$block_0: {
      var tmp0_updateAndGet_0 = $this._state_1;
      while (true) {
        var cur_1 = tmp0_updateAndGet_0._get_value__3683422336_a43j40_k$();
        var tmp$ret$0;
        $l$block: {
          Companion_getInstance_1();
          if (!cur_1.and_jhajnj_k$(new Long(0, 268435456)).equals(new Long(0, 0)))
            return cur_1;
          else {
          }
          Companion_getInstance_1();
          tmp$ret$0 = cur_1.or_s401rn_k$(new Long(0, 268435456));
          break $l$block;
        }
        var upd_2 = tmp$ret$0;
        if (tmp0_updateAndGet_0.atomicfu$compareAndSet(cur_1, upd_2)) {
          tmp$ret$1 = upd_2;
          break $l$block_0;
        }
      }
    }
    return tmp$ret$1;
  }
  function allocateOrGetNextCopy($this, state) {
    {
      var tmp0_loop_0 = $this._next_1;
      while (true) {
        {
          var tmp1__anonymous__1_4003154330 = tmp0_loop_0._get_value__3683422336_a43j40_k$();
          if (!(tmp1__anonymous__1_4003154330 == null))
            return tmp1__anonymous__1_4003154330;
          $this._next_1.atomicfu$compareAndSet(null, allocateNextCopy($this, state));
          Unit_getInstance();
        }
      }
      Unit_getInstance();
    }
  }
  function allocateNextCopy($this, state) {
    var next = new LockFreeTaskQueueCore(imul($this.capacity_1, 2), $this.singleConsumer_1);
    var tmp$ret$0;
    $l$block: {
      var tmp0_withState_0 = Companion_getInstance_1();
      var head_1 = state.and_jhajnj_k$(new Long(1073741823, 0)).shr_wjue3g_k$(0).toInt_1tsl84_k$();
      var tail_2 = state.and_jhajnj_k$(new Long(-1073741824, 268435455)).shr_wjue3g_k$(30).toInt_1tsl84_k$();
      var index_4 = head_1;
      while (!((index_4 & $this.mask_1) === (tail_2 & $this.mask_1))) {
        var tmp0_elvis_lhs_6 = $this.array_1.atomicfu$get(index_4 & $this.mask_1)._get_value__3683422336_a43j40_k$();
        var value_5 = tmp0_elvis_lhs_6 == null ? new Placeholder(index_4) : tmp0_elvis_lhs_6;
        next.array_1.atomicfu$get(index_4 & next.mask_1)._set_value__1325260276_x73o94_k$(value_5);
        var tmp1_7 = index_4;
        index_4 = tmp1_7 + 1 | 0;
        Unit_getInstance();
      }
      var tmp = Companion_getInstance_1();
      Companion_getInstance_1();
      tmp$ret$0 = next._state_1._set_value__1325260276_gu2jlf_k$(tmp.wo_iscla2_k$(state, new Long(0, 268435456)));
      break $l$block;
    }
    return next;
  }
  function Placeholder(index) {
    this.index_1 = index;
  }
  Placeholder.prototype._get_index__3322996031_g2optt_k$ = function () {
    return this.index_1;
  };
  Placeholder.$metadata$ = {
    simpleName: 'Placeholder',
    kind: 'class',
    interfaces: []
  };
  function Companion() {
    Companion_instance = this;
    this.INITIAL_CAPACITY_1 = 8;
    this.CAPACITY_BITS_1 = 30;
    this.MAX_CAPACITY_MASK_1 = 1073741823;
    this.HEAD_SHIFT_1 = 0;
    this.HEAD_MASK_1 = new Long(1073741823, 0);
    this.TAIL_SHIFT_1 = 30;
    this.TAIL_MASK_1 = new Long(-1073741824, 268435455);
    this.FROZEN_SHIFT_1 = 60;
    this.FROZEN_MASK_1 = new Long(0, 268435456);
    this.CLOSED_SHIFT_1 = 61;
    this.CLOSED_MASK_1 = new Long(0, 536870912);
    this.MIN_ADD_SPIN_CAPACITY_1 = 1024;
    this.REMOVE_FROZEN_1 = new Symbol('REMOVE_FROZEN');
    this.ADD_SUCCESS_1 = 0;
    this.ADD_FROZEN_1 = 1;
    this.ADD_CLOSED_1 = 2;
  }
  Companion.prototype._get_INITIAL_CAPACITY__758248950_cjfwmu_k$ = function () {
    return this.INITIAL_CAPACITY_1;
  };
  Companion.prototype._get_CAPACITY_BITS__1472178374_ochw3q_k$ = function () {
    return this.CAPACITY_BITS_1;
  };
  Companion.prototype._get_MAX_CAPACITY_MASK__1319736955_ltqjjv_k$ = function () {
    return this.MAX_CAPACITY_MASK_1;
  };
  Companion.prototype._get_HEAD_SHIFT__3087680424_jyscig_k$ = function () {
    return this.HEAD_SHIFT_1;
  };
  Companion.prototype._get_HEAD_MASK__1894977990_vc7ydi_k$ = function () {
    return this.HEAD_MASK_1;
  };
  Companion.prototype._get_TAIL_SHIFT__3268001592_gzfft4_k$ = function () {
    return this.TAIL_SHIFT_1;
  };
  Companion.prototype._get_TAIL_MASK__2039342134_xq66gm_k$ = function () {
    return this.TAIL_MASK_1;
  };
  Companion.prototype._get_FROZEN_SHIFT__1138150312_itmieg_k$ = function () {
    return this.FROZEN_SHIFT_1;
  };
  Companion.prototype._get_FROZEN_MASK__1970637254_wl9lfq_k$ = function () {
    return this.FROZEN_MASK_1;
  };
  Companion.prototype._get_CLOSED_SHIFT__2371223388_vtcias_k$ = function () {
    return this.CLOSED_SHIFT_1;
  };
  Companion.prototype._get_CLOSED_MASK__3257339794_h5ryi6_k$ = function () {
    return this.CLOSED_MASK_1;
  };
  Companion.prototype._get_MIN_ADD_SPIN_CAPACITY__1071151941_hpqi4l_k$ = function () {
    return this.MIN_ADD_SPIN_CAPACITY_1;
  };
  Companion.prototype._get_REMOVE_FROZEN__2680114550_qpfwcq_k$ = function () {
    return this.REMOVE_FROZEN_1;
  };
  Companion.prototype._get_ADD_SUCCESS__2163417100_z92ino_k$ = function () {
    return this.ADD_SUCCESS_1;
  };
  Companion.prototype._get_ADD_FROZEN__927379501_fc4ylp_k$ = function () {
    return this.ADD_FROZEN_1;
  };
  Companion.prototype._get_ADD_CLOSED__2387852001_vjg3kv_k$ = function () {
    return this.ADD_CLOSED_1;
  };
  Companion.prototype.wo_iscla2_k$ = function (_this__1828080292, other) {
    return _this__1828080292.and_jhajnj_k$(other.inv_28kx_k$());
  };
  Companion.prototype.updateHead_eajy5c_k$ = function (_this__1828080292, newHead) {
    return this.wo_iscla2_k$(_this__1828080292, new Long(1073741823, 0)).or_s401rn_k$(toLong(newHead).shl_po5ip6_k$(0));
  };
  Companion.prototype.updateTail_fwivqo_k$ = function (_this__1828080292, newTail) {
    return this.wo_iscla2_k$(_this__1828080292, new Long(-1073741824, 268435455)).or_s401rn_k$(toLong(newTail).shl_po5ip6_k$(30));
  };
  Companion.prototype.withState_s3n57v_k$ = function (_this__1828080292, block) {
    var head = _this__1828080292.and_jhajnj_k$(new Long(1073741823, 0)).shr_wjue3g_k$(0).toInt_1tsl84_k$();
    var tail = _this__1828080292.and_jhajnj_k$(new Long(-1073741824, 268435455)).shr_wjue3g_k$(30).toInt_1tsl84_k$();
    return block(head, tail);
  };
  Companion.prototype.addFailReason_gc2gzp_k$ = function (_this__1828080292) {
    return !_this__1828080292.and_jhajnj_k$(new Long(0, 536870912)).equals(new Long(0, 0)) ? 2 : 1;
  };
  Companion.$metadata$ = {
    simpleName: 'Companion',
    kind: 'object',
    interfaces: []
  };
  var Companion_instance;
  function Companion_getInstance_1() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function LockFreeTaskQueueCore(capacity, singleConsumer) {
    Companion_getInstance_1();
    this.capacity_1 = capacity;
    this.singleConsumer_1 = singleConsumer;
    this.mask_1 = this.capacity_1 - 1 | 0;
    this._next_1 = atomic$ref$1(null);
    this._state_1 = atomic$long$1(new Long(0, 0));
    this.array_1 = atomicfu$AtomicRefArray$ofNulls(this.capacity_1);
    {
      Companion_getInstance_1();
      var tmp0_check_0 = this.mask_1 <= 1073741823;
      {
      }
      {
        {
        }
        if (!tmp0_check_0) {
          var tmp$ret$0;
          $l$block: {
            tmp$ret$0 = 'Check failed.';
            break $l$block;
          }
          var message_2_1 = tmp$ret$0;
          throw IllegalStateException_init_$Create$(toString_0(message_2_1));
        }
      }
    }
    {
      var tmp1_check_0 = (this.capacity_1 & this.mask_1) === 0;
      {
      }
      {
        {
        }
        if (!tmp1_check_0) {
          var tmp$ret$1;
          $l$block_0: {
            tmp$ret$1 = 'Check failed.';
            break $l$block_0;
          }
          var message_2_1_0 = tmp$ret$1;
          throw IllegalStateException_init_$Create$(toString_0(message_2_1_0));
        }
      }
    }
  }
  LockFreeTaskQueueCore.prototype._get_isEmpty__1500737838_oti0q6_k$ = function () {
    var tmp$ret$1;
    $l$block_0: {
      var tmp0_withState_0 = Companion_getInstance_1();
      var tmp1_withState_0 = this._state_1._get_value__3683422336_a43j40_k$();
      var head_1 = tmp1_withState_0.and_jhajnj_k$(new Long(1073741823, 0)).shr_wjue3g_k$(0).toInt_1tsl84_k$();
      var tail_2 = tmp1_withState_0.and_jhajnj_k$(new Long(-1073741824, 268435455)).shr_wjue3g_k$(30).toInt_1tsl84_k$();
      var tmp$ret$0;
      $l$block: {
        tmp$ret$0 = head_1 === tail_2;
        break $l$block;
      }
      tmp$ret$1 = tmp$ret$0;
      break $l$block_0;
    }
    return tmp$ret$1;
  };
  LockFreeTaskQueueCore.prototype._get_size__809037418_ddoh9m_k$ = function () {
    var tmp$ret$1;
    $l$block_0: {
      var tmp0_withState_0 = Companion_getInstance_1();
      var tmp1_withState_0 = this._state_1._get_value__3683422336_a43j40_k$();
      var head_1 = tmp1_withState_0.and_jhajnj_k$(new Long(1073741823, 0)).shr_wjue3g_k$(0).toInt_1tsl84_k$();
      var tail_2 = tmp1_withState_0.and_jhajnj_k$(new Long(-1073741824, 268435455)).shr_wjue3g_k$(30).toInt_1tsl84_k$();
      var tmp$ret$0;
      $l$block: {
        var tmp = tail_2 - head_1 | 0;
        Companion_getInstance_1();
        tmp$ret$0 = tmp & 1073741823;
        break $l$block;
      }
      tmp$ret$1 = tmp$ret$0;
      break $l$block_0;
    }
    return tmp$ret$1;
  };
  LockFreeTaskQueueCore.prototype.close_1keygo_k$ = function () {
    var tmp$ret$1;
    $l$block_0: {
      var tmp0_update_0 = this._state_1;
      while (true) {
        var cur_1 = tmp0_update_0._get_value__3683422336_a43j40_k$();
        var tmp$ret$0;
        $l$block: {
          Companion_getInstance_1();
          if (!cur_1.and_jhajnj_k$(new Long(0, 536870912)).equals(new Long(0, 0)))
            return true;
          else {
          }
          Companion_getInstance_1();
          if (!cur_1.and_jhajnj_k$(new Long(0, 268435456)).equals(new Long(0, 0)))
            return false;
          else {
          }
          Companion_getInstance_1();
          tmp$ret$0 = cur_1.or_s401rn_k$(new Long(0, 536870912));
          break $l$block;
        }
        var upd_2 = tmp$ret$0;
        if (tmp0_update_0.atomicfu$compareAndSet(cur_1, upd_2)) {
          tmp$ret$1 = Unit_getInstance();
          break $l$block_0;
        }
      }
    }
    return true;
  };
  LockFreeTaskQueueCore.prototype.addLast_3l8aar_k$ = function (element) {
    {
      var tmp0_loop_0 = this._state_1;
      while (true) {
        var tmp$ret$0;
        $l$block: {
          var tmp1__anonymous__1_4003154330 = tmp0_loop_0._get_value__3683422336_a43j40_k$();
          Companion_getInstance_1();
          var tmp = new Long(0, 268435456);
          Companion_getInstance_1();
          if (!tmp1__anonymous__1_4003154330.and_jhajnj_k$(tmp.or_s401rn_k$(new Long(0, 536870912))).equals(new Long(0, 0)))
            return Companion_getInstance_1().addFailReason_gc2gzp_k$(tmp1__anonymous__1_4003154330);
          else {
          }
          var tmp$ret$1;
          $l$block_0: {
            var tmp0_withState_0_2 = Companion_getInstance_1();
            var head_1_3 = tmp1__anonymous__1_4003154330.and_jhajnj_k$(new Long(1073741823, 0)).shr_wjue3g_k$(0).toInt_1tsl84_k$();
            var tail_2_4 = tmp1__anonymous__1_4003154330.and_jhajnj_k$(new Long(-1073741824, 268435455)).shr_wjue3g_k$(30).toInt_1tsl84_k$();
            var mask_4_5 = this.mask_1;
            if (((tail_2_4 + 2 | 0) & mask_4_5) === (head_1_3 & mask_4_5)) {
              Companion_getInstance_1();
              return 1;
            }
            if (!this.singleConsumer_1 ? !(this.array_1.atomicfu$get(tail_2_4 & mask_4_5)._get_value__3683422336_a43j40_k$() == null) : false) {
              var tmp_0;
              Companion_getInstance_1();
              if (this.capacity_1 < 1024) {
                tmp_0 = true;
              } else {
                {
                  var tmp_1 = tail_2_4 - head_1_3 | 0;
                  Companion_getInstance_1();
                  tmp_0 = (tmp_1 & 1073741823) > this.capacity_1 >> 1;
                }
              }
              if (tmp_0) {
                Companion_getInstance_1();
                return 1;
              } else {
              }
              tmp$ret$0 = Unit_getInstance();
              break $l$block;
            }
            var tmp_2 = tail_2_4 + 1 | 0;
            Companion_getInstance_1();
            var newTail_5_6 = tmp_2 & 1073741823;
            var tmp_3;
            if (this._state_1.atomicfu$compareAndSet(tmp1__anonymous__1_4003154330, Companion_getInstance_1().updateTail_fwivqo_k$(tmp1__anonymous__1_4003154330, newTail_5_6))) {
              this.array_1.atomicfu$get(tail_2_4 & mask_4_5)._set_value__1325260276_x73o94_k$(element);
              var cur_6_7 = this;
              $l$loop_0: while (true) {
                var tmp_4 = cur_6_7._state_1._get_value__3683422336_a43j40_k$();
                Companion_getInstance_1();
                if (tmp_4.and_jhajnj_k$(new Long(0, 268435456)).equals(new Long(0, 0)))
                  break $l$loop_0;
                else {
                }
                var tmp0_elvis_lhs_7_8 = fillPlaceholder(cur_6_7.next_20eer_k$(), tail_2_4, element);
                var tmp_5;
                if (tmp0_elvis_lhs_7_8 == null) {
                  break $l$loop_0;
                } else {
                  tmp_5 = tmp0_elvis_lhs_7_8;
                }
                cur_6_7 = tmp_5;
              }
              Companion_getInstance_1();
              return 0;
            }
            tmp$ret$1 = tmp_3;
            break $l$block_0;
          }
        }
      }
      Unit_getInstance();
    }
  };
  LockFreeTaskQueueCore.prototype.removeFirstOrNull_eges3a_k$ = function () {
    {
      var tmp0_loop_0 = this._state_1;
      while (true) {
        var tmp$ret$0;
        $l$block_0: {
          var tmp1__anonymous__1_4003154330 = tmp0_loop_0._get_value__3683422336_a43j40_k$();
          Companion_getInstance_1();
          if (!tmp1__anonymous__1_4003154330.and_jhajnj_k$(new Long(0, 268435456)).equals(new Long(0, 0)))
            return Companion_getInstance_1().REMOVE_FROZEN_1;
          else {
          }
          var tmp$ret$1;
          $l$block_1: {
            var tmp0_withState_0_2 = Companion_getInstance_1();
            var head_1_3 = tmp1__anonymous__1_4003154330.and_jhajnj_k$(new Long(1073741823, 0)).shr_wjue3g_k$(0).toInt_1tsl84_k$();
            var tail_2_4 = tmp1__anonymous__1_4003154330.and_jhajnj_k$(new Long(-1073741824, 268435455)).shr_wjue3g_k$(30).toInt_1tsl84_k$();
            if ((tail_2_4 & this.mask_1) === (head_1_3 & this.mask_1))
              return null;
            var element_4_5 = this.array_1.atomicfu$get(head_1_3 & this.mask_1)._get_value__3683422336_a43j40_k$();
            if (element_4_5 == null) {
              if (this.singleConsumer_1)
                return null;
              tmp$ret$0 = Unit_getInstance();
              break $l$block_0;
            }
            if (element_4_5 instanceof Placeholder)
              return null;
            else {
            }
            var tmp = head_1_3 + 1 | 0;
            Companion_getInstance_1();
            var newHead_5_6 = tmp & 1073741823;
            if (this._state_1.atomicfu$compareAndSet(tmp1__anonymous__1_4003154330, Companion_getInstance_1().updateHead_eajy5c_k$(tmp1__anonymous__1_4003154330, newHead_5_6))) {
              this.array_1.atomicfu$get(head_1_3 & this.mask_1)._set_value__1325260276_x73o94_k$(null);
              return element_4_5;
            }
            if (!this.singleConsumer_1) {
              tmp$ret$0 = Unit_getInstance();
              break $l$block_0;
            }
            var cur_6_7 = this;
            while (true) {
              var tmp0_elvis_lhs_7_8 = removeSlowPath(cur_6_7, head_1_3, newHead_5_6);
              var tmp_0;
              if (tmp0_elvis_lhs_7_8 == null) {
                return element_4_5;
              } else {
                tmp_0 = tmp0_elvis_lhs_7_8;
              }
              cur_6_7 = tmp_0;
            }
            tmp$ret$1 = Unit_getInstance();
            break $l$block_1;
          }
        }
      }
      Unit_getInstance();
    }
  };
  LockFreeTaskQueueCore.prototype.next_20eer_k$ = function () {
    return allocateOrGetNextCopy(this, markFrozen(this));
  };
  LockFreeTaskQueueCore.prototype.map_cey4p6_k$ = function (transform) {
    var res = ArrayList_init_$Create$(this.capacity_1);
    var tmp$ret$0;
    $l$block: {
      var tmp0_withState_0 = Companion_getInstance_1();
      var tmp1_withState_0 = this._state_1._get_value__3683422336_a43j40_k$();
      var head_1 = tmp1_withState_0.and_jhajnj_k$(new Long(1073741823, 0)).shr_wjue3g_k$(0).toInt_1tsl84_k$();
      var tail_2 = tmp1_withState_0.and_jhajnj_k$(new Long(-1073741824, 268435455)).shr_wjue3g_k$(30).toInt_1tsl84_k$();
      var index_4 = head_1;
      while (!((index_4 & this.mask_1) === (tail_2 & this.mask_1))) {
        var element_5 = this.array_1.atomicfu$get(index_4 & this.mask_1)._get_value__3683422336_a43j40_k$();
        var tmp;
        if (!(element_5 == null)) {
          tmp = !(element_5 instanceof Placeholder);
        } else {
          tmp = false;
        }
        if (tmp) {
          res.add_1j60pz_k$(transform(isObject(element_5) ? element_5 : THROW_CCE()));
          Unit_getInstance();
        } else {
        }
        var tmp0_6 = index_4;
        index_4 = tmp0_6 + 1 | 0;
        Unit_getInstance();
      }
      tmp$ret$0 = Unit_getInstance();
      break $l$block;
    }
    return res;
  };
  LockFreeTaskQueueCore.prototype.isClosed_baxhhm_k$ = function () {
    var tmp = this._state_1._get_value__3683422336_a43j40_k$();
    Companion_getInstance_1();
    return !tmp.and_jhajnj_k$(new Long(0, 536870912)).equals(new Long(0, 0));
  };
  LockFreeTaskQueueCore.$metadata$ = {
    simpleName: 'LockFreeTaskQueueCore',
    kind: 'class',
    interfaces: []
  };
  function Symbol(symbol) {
    this.symbol_1 = symbol;
  }
  Symbol.prototype._get_symbol__541899891_8ymsmr_k$ = function () {
    return this.symbol_1;
  };
  Symbol.prototype.toString = function () {
    return '<' + this.symbol_1 + '>';
  };
  Symbol.prototype.unbox_eumklp_k$ = function (value) {
    var tmp;
    if (value === this) {
      tmp = (null == null ? true : isObject(null)) ? null : THROW_CCE();
    } else {
      tmp = (value == null ? true : isObject(value)) ? value : THROW_CCE();
    }
    return tmp;
  };
  Symbol.$metadata$ = {
    simpleName: 'Symbol',
    kind: 'class',
    interfaces: []
  };
  function systemProp(propertyName, defaultValue, minValue, maxValue) {
    return systemProp_0(propertyName, toLong(defaultValue), toLong(minValue), toLong(maxValue)).toInt_1tsl84_k$();
  }
  function systemProp$default(propertyName, defaultValue, minValue, maxValue, $mask0, $handler) {
    if (!(($mask0 & 4) === 0))
      minValue = 1;
    if (!(($mask0 & 8) === 0))
      maxValue = IntCompanionObject_getInstance()._get_MAX_VALUE__3201573499_i2z81x_k$();
    return systemProp(propertyName, defaultValue, minValue, maxValue);
  }
  function systemProp_0(propertyName, defaultValue, minValue, maxValue) {
    var tmp0_elvis_lhs = systemProp_1(propertyName);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return defaultValue;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var value = tmp;
    var tmp1_elvis_lhs = toLongOrNull(value);
    var tmp_0;
    if (tmp1_elvis_lhs == null) {
      var tmp0_error_0 = "System property '" + propertyName + "' has unrecognized value '" + value + "'";
      throw IllegalStateException_init_$Create$(toString_0(tmp0_error_0));
    } else {
      tmp_0 = tmp1_elvis_lhs;
    }
    var parsed = tmp_0;
    if (!(minValue.compareTo_n4fqi2_k$(parsed) <= 0 ? parsed.compareTo_n4fqi2_k$(maxValue) <= 0 : false)) {
      {
        var tmp1_error_0 = "System property '" + propertyName + "' should be in range " + toString_0(minValue) + '..' + toString_0(maxValue) + ", but is '" + toString_0(parsed) + "'";
        throw IllegalStateException_init_$Create$(toString_0(tmp1_error_0));
      }
    }
    return parsed;
  }
  function systemProp$default_0(propertyName, defaultValue, minValue, maxValue, $mask0, $handler) {
    if (!(($mask0 & 4) === 0))
      minValue = new Long(1, 0);
    if (!(($mask0 & 8) === 0))
      maxValue = Companion_getInstance()._get_MAX_VALUE__3201573499_i2z81x_k$();
    return systemProp_0(propertyName, defaultValue, minValue, maxValue);
  }
  function startCoroutineCancellable(_this__1828080292, receiver, completion, onCancellation) {
    var tmp;
    try {
      var tmp_0 = intercepted(createCoroutineUnintercepted(_this__1828080292, receiver, completion));
      var tmp$ret$0;
      $l$block: {
        var tmp0_success_0_3 = Companion_getInstance_0();
        tmp$ret$0 = _Result___init__impl__2241242780(Unit_getInstance());
        break $l$block;
      }
      tmp = resumeCancellableWith(tmp_0, tmp$ret$0, onCancellation);
    } catch ($p) {
      var tmp_1;
      if ($p instanceof Error) {
        tmp_1 = dispatcherFailure$accessor$glj1hg(completion, $p);
      } else {
        {
          throw $p;
        }
      }
      tmp = tmp_1;
    }
    return tmp;
  }
  function startCoroutineCancellable$default(_this__1828080292, receiver, completion, onCancellation, $mask0, $handler) {
    if (!(($mask0 & 4) === 0))
      onCancellation = null;
    return startCoroutineCancellable(_this__1828080292, receiver, completion, onCancellation);
  }
  function startCoroutineCancellable_0(_this__1828080292, completion) {
    var tmp;
    try {
      var tmp_0 = intercepted(createCoroutineUnintercepted_0(_this__1828080292, completion));
      var tmp$ret$0;
      $l$block: {
        var tmp0_success_0_3 = Companion_getInstance_0();
        tmp$ret$0 = _Result___init__impl__2241242780(Unit_getInstance());
        break $l$block;
      }
      var tmp_1 = tmp$ret$0;
      tmp = resumeCancellableWith$default(tmp_0, tmp_1, null, 2, null);
    } catch ($p) {
      var tmp_2;
      if ($p instanceof Error) {
        tmp_2 = dispatcherFailure$accessor$glj1hg(completion, $p);
      } else {
        {
          throw $p;
        }
      }
      tmp = tmp_2;
    }
    return tmp;
  }
  function runSafely(completion, block) {
    try {
      block();
    } catch ($p) {
      if ($p instanceof Error) {
        dispatcherFailure$accessor$glj1hg(completion, $p);
      } else {
        {
          throw $p;
        }
      }
    }
  }
  function dispatcherFailure(completion, e) {
    var tmp$ret$0;
    $l$block: {
      var tmp0_failure_0 = Companion_getInstance_0();
      tmp$ret$0 = _Result___init__impl__2241242780(createFailure(e));
      break $l$block;
    }
    completion.resumeWith_s3a3yh_k$(tmp$ret$0);
    throw e;
  }
  function dispatcherFailure$accessor$glj1hg(completion, e) {
    return dispatcherFailure(completion, e);
  }
  function startCoroutineUnintercepted(_this__1828080292, completion) {
    var tmp$ret$6;
    $l$block_5: {
      var tmp$ret$0;
      $l$block: {
        tmp$ret$0 = completion;
        break $l$block;
      }
      var actualCompletion_1 = tmp$ret$0;
      var tmp;
      try {
        var tmp$ret$3;
        $l$block_2: {
          var tmp$ret$2;
          $l$block_1: {
            var tmp$ret$1;
            $l$block_0: {
              tmp$ret$1 = _this__1828080292;
              break $l$block_0;
            }
            var a_1_5 = tmp$ret$1;
            tmp$ret$2 = typeof a_1_5 === 'function' ? a_1_5(actualCompletion_1) : _this__1828080292.invoke_34if6s_k$(actualCompletion_1);
            break $l$block_1;
          }
          tmp$ret$3 = tmp$ret$2;
          break $l$block_2;
        }
        tmp = tmp$ret$3;
      } catch ($p) {
        var tmp_0;
        if ($p instanceof Error) {
          var tmp$ret$5;
          $l$block_4: {
            var tmp$ret$4;
            $l$block_3: {
              var tmp0_failure_0_1 = Companion_getInstance_0();
              tmp$ret$4 = _Result___init__impl__2241242780(createFailure($p));
              break $l$block_3;
            }
            tmp$ret$5 = actualCompletion_1.resumeWith_s3a3yh_k$(tmp$ret$4);
            break $l$block_4;
          }
          tmp$ret$6 = Unit_getInstance();
          break $l$block_5;
        } else {
          {
            throw $p;
          }
        }
        tmp = tmp_0;
      }
      var value_2 = tmp;
      if (!(value_2 === _get_COROUTINE_SUSPENDED__2870145053())) {
        var tmp$ret$8;
        $l$block_7: {
          var tmp0_resume_0 = (value_2 == null ? true : isObject(value_2)) ? value_2 : THROW_CCE();
          var tmp$ret$7;
          $l$block_6: {
            var tmp0_success_0_1 = Companion_getInstance_0();
            tmp$ret$7 = _Result___init__impl__2241242780(tmp0_resume_0);
            break $l$block_6;
          }
          tmp$ret$8 = actualCompletion_1.resumeWith_s3a3yh_k$(tmp$ret$7);
          break $l$block_7;
        }
      }
    }
  }
  function startCoroutineUnintercepted_0(_this__1828080292, receiver, completion) {
    var tmp$ret$6;
    $l$block_5: {
      var tmp$ret$0;
      $l$block: {
        tmp$ret$0 = completion;
        break $l$block;
      }
      var actualCompletion_1 = tmp$ret$0;
      var tmp;
      try {
        var tmp$ret$3;
        $l$block_2: {
          var tmp$ret$2;
          $l$block_1: {
            var tmp$ret$1;
            $l$block_0: {
              tmp$ret$1 = _this__1828080292;
              break $l$block_0;
            }
            var a_1_5 = tmp$ret$1;
            tmp$ret$2 = typeof a_1_5 === 'function' ? a_1_5(receiver, actualCompletion_1) : _this__1828080292.invoke_5zdxxo_k$(receiver, actualCompletion_1);
            break $l$block_1;
          }
          tmp$ret$3 = tmp$ret$2;
          break $l$block_2;
        }
        tmp = tmp$ret$3;
      } catch ($p) {
        var tmp_0;
        if ($p instanceof Error) {
          var tmp$ret$5;
          $l$block_4: {
            var tmp$ret$4;
            $l$block_3: {
              var tmp0_failure_0_1 = Companion_getInstance_0();
              tmp$ret$4 = _Result___init__impl__2241242780(createFailure($p));
              break $l$block_3;
            }
            tmp$ret$5 = actualCompletion_1.resumeWith_s3a3yh_k$(tmp$ret$4);
            break $l$block_4;
          }
          tmp$ret$6 = Unit_getInstance();
          break $l$block_5;
        } else {
          {
            throw $p;
          }
        }
        tmp = tmp_0;
      }
      var value_2 = tmp;
      if (!(value_2 === _get_COROUTINE_SUSPENDED__2870145053())) {
        var tmp$ret$8;
        $l$block_7: {
          var tmp0_resume_0 = (value_2 == null ? true : isObject(value_2)) ? value_2 : THROW_CCE();
          var tmp$ret$7;
          $l$block_6: {
            var tmp0_success_0_1 = Companion_getInstance_0();
            tmp$ret$7 = _Result___init__impl__2241242780(tmp0_resume_0);
            break $l$block_6;
          }
          tmp$ret$8 = actualCompletion_1.resumeWith_s3a3yh_k$(tmp$ret$7);
          break $l$block_7;
        }
      }
    }
  }
  function startDirect(completion, block) {
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = completion;
      break $l$block;
    }
    var actualCompletion = tmp$ret$0;
    var tmp;
    try {
      tmp = block(actualCompletion);
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Error) {
        var tmp$ret$2;
        $l$block_1: {
          var tmp$ret$1;
          $l$block_0: {
            var tmp0_failure_0_1 = Companion_getInstance_0();
            tmp$ret$1 = _Result___init__impl__2241242780(createFailure($p));
            break $l$block_0;
          }
          tmp$ret$2 = actualCompletion.resumeWith_s3a3yh_k$(tmp$ret$1);
          break $l$block_1;
        }
        return Unit_getInstance();
      } else {
        {
          throw $p;
        }
      }
      tmp = tmp_0;
    }
    var value = tmp;
    if (!(value === _get_COROUTINE_SUSPENDED__2870145053())) {
      var tmp$ret$4;
      $l$block_3: {
        var tmp0_resume_0 = (value == null ? true : isObject(value)) ? value : THROW_CCE();
        var tmp$ret$3;
        $l$block_2: {
          var tmp0_success_0_1 = Companion_getInstance_0();
          tmp$ret$3 = _Result___init__impl__2241242780(tmp0_resume_0);
          break $l$block_2;
        }
        tmp$ret$4 = actualCompletion.resumeWith_s3a3yh_k$(tmp$ret$3);
        break $l$block_3;
      }
    }
  }
  function _get_NOT_SELECTED__3193472900() {
    init_properties_Select_kt_2641548766();
    return NOT_SELECTED;
  }
  var NOT_SELECTED;
  function _get_ALREADY_SELECTED__454812745() {
    init_properties_Select_kt_2641548766();
    return ALREADY_SELECTED;
  }
  var ALREADY_SELECTED;
  function _get_UNDECIDED__1268814222_0() {
    init_properties_Select_kt_2641548766();
    return UNDECIDED_0;
  }
  var UNDECIDED_0;
  function _get_RESUMED__2572863546_0() {
    init_properties_Select_kt_2641548766();
    return RESUMED_0;
  }
  var RESUMED_0;
  function _get_selectOpSequenceNumber__3051689508() {
    init_properties_Select_kt_2641548766();
    return selectOpSequenceNumber;
  }
  var selectOpSequenceNumber;
  function SelectClause0() {
  }
  SelectClause0.$metadata$ = {
    simpleName: 'SelectClause0',
    kind: 'interface',
    interfaces: []
  };
  function SelectInstance() {
  }
  SelectInstance.$metadata$ = {
    simpleName: 'SelectInstance',
    kind: 'interface',
    interfaces: []
  };
  function _get_number__284822754($this) {
    return $this.number_1;
  }
  function SeqNumber() {
    this.number_1 = atomic$long$1(new Long(1, 0));
  }
  SeqNumber.prototype.next_20eer_k$ = function () {
    return this.number_1.atomicfu$incrementAndGet$long();
  };
  SeqNumber.$metadata$ = {
    simpleName: 'SeqNumber',
    kind: 'class',
    interfaces: []
  };
  var properties_initialized_Select_kt_469806594;
  function init_properties_Select_kt_2641548766() {
    if (!properties_initialized_Select_kt_469806594) {
      properties_initialized_Select_kt_469806594 = true;
      NOT_SELECTED = new Symbol('NOT_SELECTED');
      ALREADY_SELECTED = new Symbol('ALREADY_SELECTED');
      UNDECIDED_0 = new Symbol('UNDECIDED');
      RESUMED_0 = new Symbol('RESUMED');
      selectOpSequenceNumber = new SeqNumber();
    }
  }
  function _get_LOCK_FAIL__1315986143() {
    init_properties_Mutex_kt_3226717589();
    return LOCK_FAIL;
  }
  var LOCK_FAIL;
  function _get_UNLOCK_FAIL__3936780664() {
    init_properties_Mutex_kt_3226717589();
    return UNLOCK_FAIL;
  }
  var UNLOCK_FAIL;
  function _get_LOCKED__3342022977() {
    init_properties_Mutex_kt_3226717589();
    return LOCKED;
  }
  var LOCKED;
  function _get_UNLOCKED__2023965000() {
    init_properties_Mutex_kt_3226717589();
    return UNLOCKED;
  }
  var UNLOCKED;
  function _get_EMPTY_LOCKED__2435113583() {
    init_properties_Mutex_kt_3226717589();
    return EMPTY_LOCKED;
  }
  var EMPTY_LOCKED;
  function _get_EMPTY_UNLOCKED__2362398454() {
    init_properties_Mutex_kt_3226717589();
    return EMPTY_UNLOCKED;
  }
  var EMPTY_UNLOCKED;
  function Empty_0(locked) {
    this.locked_1 = locked;
  }
  Empty_0.prototype._get_locked__2624040257_rmtrjz_k$ = function () {
    return this.locked_1;
  };
  Empty_0.prototype.toString = function () {
    return 'Empty[' + toString_0(this.locked_1) + ']';
  };
  Empty_0.$metadata$ = {
    simpleName: 'Empty',
    kind: 'class',
    interfaces: []
  };
  var properties_initialized_Mutex_kt_2186830065;
  function init_properties_Mutex_kt_3226717589() {
    if (!properties_initialized_Mutex_kt_2186830065) {
      properties_initialized_Mutex_kt_2186830065 = true;
      LOCK_FAIL = new Symbol('LOCK_FAIL');
      UNLOCK_FAIL = new Symbol('UNLOCK_FAIL');
      LOCKED = new Symbol('LOCKED');
      UNLOCKED = new Symbol('UNLOCKED');
      EMPTY_LOCKED = new Empty_0(_get_LOCKED__3342022977());
      EMPTY_UNLOCKED = new Empty_0(_get_UNLOCKED__2023965000());
    }
  }
  function _get_MAX_SPIN_CYCLES__922226050() {
    init_properties_Semaphore_kt_1420408880();
    return MAX_SPIN_CYCLES;
  }
  var MAX_SPIN_CYCLES;
  function _get_PERMIT__2324695632() {
    init_properties_Semaphore_kt_1420408880();
    return PERMIT;
  }
  var PERMIT;
  function _get_TAKEN__2679448586() {
    init_properties_Semaphore_kt_1420408880();
    return TAKEN;
  }
  var TAKEN;
  function _get_BROKEN__3153890774() {
    init_properties_Semaphore_kt_1420408880();
    return BROKEN;
  }
  var BROKEN;
  function _get_CANCELLED__1066655552() {
    init_properties_Semaphore_kt_1420408880();
    return CANCELLED;
  }
  var CANCELLED;
  function _get_SEGMENT_SIZE__3167309118() {
    init_properties_Semaphore_kt_1420408880();
    return SEGMENT_SIZE;
  }
  var SEGMENT_SIZE;
  var properties_initialized_Semaphore_kt_2436709772;
  function init_properties_Semaphore_kt_1420408880() {
    if (!properties_initialized_Semaphore_kt_2436709772) {
      properties_initialized_Semaphore_kt_2436709772 = true;
      MAX_SPIN_CYCLES = systemProp$default('kotlinx.coroutines.semaphore.maxSpinCycles', 100, 0, 0, 12, null);
      PERMIT = new Symbol('PERMIT');
      TAKEN = new Symbol('TAKEN');
      BROKEN = new Symbol('BROKEN');
      CANCELLED = new Symbol('CANCELLED');
      SEGMENT_SIZE = systemProp$default('kotlinx.coroutines.semaphore.segmentSize', 16, 0, 0, 12, null);
    }
  }
  function CompletionHandlerBase() {
    LinkedListNode.call(this);
  }
  CompletionHandlerBase.$metadata$ = {
    simpleName: 'CompletionHandlerBase',
    kind: 'class',
    interfaces: []
  };
  function invokeIt(_this__1828080292, cause) {
    var tmp0_subject = typeof _this__1828080292;
    if (tmp0_subject === 'function')
      _this__1828080292(cause);
    else {
      var tmp$ret$0;
      $l$block: {
        tmp$ret$0 = _this__1828080292;
        break $l$block;
      }
      tmp$ret$0.invoke(cause);
    }
  }
  function _get_asHandler__3768099481(_this__1828080292) {
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = _this__1828080292;
      break $l$block;
    }
    return tmp$ret$0;
  }
  function _get_asHandler__3768099481_0(_this__1828080292) {
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = _this__1828080292;
      break $l$block;
    }
    return tmp$ret$0;
  }
  function CancelHandlerBase() {
  }
  CancelHandlerBase.$metadata$ = {
    simpleName: 'CancelHandlerBase',
    kind: 'class',
    interfaces: []
  };
  function toDebugString(_this__1828080292) {
    return toString_0(_this__1828080292);
  }
  function withCoroutineContext(context, countOrElement, block) {
    return block();
  }
  function withContinuationContext(continuation, countOrElement, block) {
    return block();
  }
  function _get_DefaultDelay__1069114793() {
    var tmp = Dispatchers_getInstance()._get_Default__2834936080_o59jao_k$();
    return isInterface(tmp, Delay) ? tmp : THROW_CCE();
  }
  function createDefaultDispatcher() {
    var tmp;
    if (isJsdom()) {
      tmp = NodeDispatcher_getInstance();
    } else {
      var tmp_0;
      var tmp_1;
      if (!(typeof window === 'undefined')) {
        var tmp$ret$0;
        $l$block: {
          var tmp0_asDynamic_0 = window;
          tmp$ret$0 = tmp0_asDynamic_0;
          break $l$block;
        }
        tmp_1 = tmp$ret$0 != null;
      } else {
        tmp_1 = false;
      }
      if (tmp_1) {
        var tmp$ret$1;
        $l$block_0: {
          var tmp1_asDynamic_0 = window;
          tmp$ret$1 = tmp1_asDynamic_0;
          break $l$block_0;
        }
        tmp_0 = !(typeof tmp$ret$1.addEventListener === 'undefined');
      } else {
        {
          tmp_0 = false;
        }
      }
      if (tmp_0) {
        tmp = asCoroutineDispatcher(window);
      } else {
        if (typeof process === 'undefined' ? true : typeof process.nextTick === 'undefined') {
          tmp = SetTimeoutDispatcher_getInstance();
        } else {
          {
            tmp = NodeDispatcher_getInstance();
          }
        }
      }
    }
    return tmp;
  }
  function isJsdom() {
    return ((((!(typeof navigator === 'undefined') ? navigator != null : false) ? navigator.userAgent != null : false) ? !(typeof navigator.userAgent === 'undefined') : false) ? !(typeof navigator.userAgent.match === 'undefined') : false) ? navigator.userAgent.match('\\bjsdom\\b') : false;
  }
  function _get_UNDEFINED__1354999585_0() {
    return UNDEFINED_0;
  }
  var UNDEFINED_0;
  function handleCoroutineExceptionImpl(context, exception) {
    console.error(exception);
  }
  function _set_counter__3302982921(_set____804775014) {
    counter = _set____804775014;
  }
  function _get_counter__1753990293() {
    return counter;
  }
  var counter;
  function _get_DEBUG__2224823294() {
    return DEBUG;
  }
  var DEBUG;
  function _get_classSimpleName__3937513404(_this__1828080292) {
    var tmp0_elvis_lhs = getKClassFromExpression(_this__1828080292)._get_simpleName__973554894_g3mnri_k$();
    return tmp0_elvis_lhs == null ? 'Unknown' : tmp0_elvis_lhs;
  }
  function _get_hexAddress__2831015762(_this__1828080292) {
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = _this__1828080292;
      break $l$block;
    }
    var result = tmp$ret$0.__debug_counter;
    if (!(typeof result === 'number')) {
      counter = counter + 1 | 0;
      result = counter;
      var tmp$ret$1;
      $l$block_0: {
        tmp$ret$1 = _this__1828080292;
        break $l$block_0;
      }
      tmp$ret$1.__debug_counter = result;
    }
    return ((!(result == null) ? typeof result === 'number' : false) ? result : THROW_CCE()).toString();
  }
  function assert(value) {
  }
  function _get_mainDispatcher__1730257099($this) {
    return $this.mainDispatcher_1;
  }
  function _set_injectedMainDispatcher__3747074247($this, _set____804775014) {
    $this.injectedMainDispatcher_1 = _set____804775014;
  }
  function _get_injectedMainDispatcher__797640635($this) {
    return $this.injectedMainDispatcher_1;
  }
  function Dispatchers() {
    Dispatchers_instance = this;
    this.Default_1 = createDefaultDispatcher();
    this.Unconfined_1 = Unconfined_getInstance();
    this.mainDispatcher_1 = new JsMainDispatcher(this.Default_1, false);
    this.injectedMainDispatcher_1 = null;
  }
  Dispatchers.prototype._get_Default__2834936080_o59jao_k$ = function () {
    return this.Default_1;
  };
  Dispatchers.prototype._get_Main__773689234_csmufm_k$ = function () {
    var tmp0_elvis_lhs = this.injectedMainDispatcher_1;
    return tmp0_elvis_lhs == null ? this.mainDispatcher_1 : tmp0_elvis_lhs;
  };
  Dispatchers.prototype._get_Unconfined__3340736842_fs4gxi_k$ = function () {
    return this.Unconfined_1;
  };
  Dispatchers.prototype.injectMain_isae1a_k$ = function (dispatcher) {
    this.injectedMainDispatcher_1 = dispatcher;
  };
  Dispatchers.prototype.resetInjectedMain_6cv6vt_k$ = function () {
    this.injectedMainDispatcher_1 = null;
  };
  Dispatchers.$metadata$ = {
    simpleName: 'Dispatchers',
    kind: 'object',
    interfaces: []
  };
  var Dispatchers_instance;
  function Dispatchers_getInstance() {
    if (Dispatchers_instance == null)
      new Dispatchers();
    return Dispatchers_instance;
  }
  function _get_invokeImmediately__1567610539($this) {
    return $this.invokeImmediately_1;
  }
  function JsMainDispatcher(delegate, invokeImmediately) {
    MainCoroutineDispatcher.call(this);
    this.delegate_1 = delegate;
    this.invokeImmediately_1 = invokeImmediately;
    this.immediate_1 = this.invokeImmediately_1 ? this : new JsMainDispatcher(this.delegate_1, true);
  }
  JsMainDispatcher.prototype._get_delegate__1111020262_idh0py_k$ = function () {
    return this.delegate_1;
  };
  JsMainDispatcher.prototype._get_immediate__3483316416_df8hts_k$ = function () {
    return this.immediate_1;
  };
  JsMainDispatcher.prototype.isDispatchNeeded_fmz9vn_k$ = function (context) {
    return !this.invokeImmediately_1;
  };
  JsMainDispatcher.prototype.dispatch_o98ux7_k$ = function (context, block) {
    return this.delegate_1.dispatch_o98ux7_k$(context, block);
  };
  JsMainDispatcher.prototype.dispatchYield_ww21f6_k$ = function (context, block) {
    return this.delegate_1.dispatchYield_ww21f6_k$(context, block);
  };
  JsMainDispatcher.prototype.toString = function () {
    var tmp0_elvis_lhs = this.toStringInternalImpl_hcqz93_k$();
    return tmp0_elvis_lhs == null ? this.delegate_1.toString() : tmp0_elvis_lhs;
  };
  JsMainDispatcher.$metadata$ = {
    simpleName: 'JsMainDispatcher',
    kind: 'class',
    interfaces: []
  };
  function createEventLoop() {
    return new UnconfinedEventLoop();
  }
  function UnconfinedEventLoop() {
    EventLoop.call(this);
  }
  UnconfinedEventLoop.prototype.dispatch_o98ux7_k$ = function (context, block) {
    unsupported();
  };
  UnconfinedEventLoop.$metadata$ = {
    simpleName: 'UnconfinedEventLoop',
    kind: 'class',
    interfaces: []
  };
  function unsupported() {
    throw UnsupportedOperationException_init_$Create$('runBlocking event loop is not supported');
  }
  function _get_RECOVER_STACK_TRACES__1107292075() {
    return RECOVER_STACK_TRACES;
  }
  var RECOVER_STACK_TRACES;
  function JobCancellationException(message, cause, job) {
    CancellationException_init_$Init$_0(message, cause, this);
    this.job_1 = job;
    captureStack(this, JobCancellationException);
  }
  JobCancellationException.prototype._get_job__857118836_e6b14k_k$ = function () {
    return this.job_1;
  };
  JobCancellationException.prototype.toString = function () {
    return CancellationException.prototype.toString.call(this) + '; job=' + this.job_1;
  };
  JobCancellationException.prototype.equals = function (other) {
    var tmp;
    if (other === this) {
      tmp = true;
    } else {
      var tmp_0;
      var tmp_1;
      var tmp_2;
      if (other instanceof JobCancellationException) {
        tmp_2 = other.message == this.message;
      } else {
        {
          tmp_2 = false;
        }
      }
      if (tmp_2) {
        tmp_1 = equals(other.job_1, this.job_1);
      } else {
        {
          tmp_1 = false;
        }
      }
      if (tmp_1) {
        tmp_0 = equals(other.cause, this.cause);
      } else {
        {
          tmp_0 = false;
        }
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  JobCancellationException.prototype.hashCode = function () {
    var tmp = imul(imul(getStringHashCode(ensureNotNull(this.message)), 31) + hashCode(this.job_1) | 0, 31);
    var tmp0_safe_receiver = this.cause;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    return tmp + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
  };
  JobCancellationException.$metadata$ = {
    simpleName: 'JobCancellationException',
    kind: 'class',
    interfaces: []
  };
  function addSuppressedThrowable(_this__1828080292, other) {
  }
  function NodeDispatcher() {
    NodeDispatcher_instance = this;
    SetTimeoutBasedDispatcher.call(this);
  }
  NodeDispatcher.prototype.scheduleQueueProcessing_nyddyc_k$ = function () {
    process.nextTick(this._get_messageQueue__2421032257_uzoxj3_k$().processQueue_1);
  };
  NodeDispatcher.$metadata$ = {
    simpleName: 'NodeDispatcher',
    kind: 'object',
    interfaces: []
  };
  var NodeDispatcher_instance;
  function NodeDispatcher_getInstance() {
    if (NodeDispatcher_instance == null)
      new NodeDispatcher();
    return NodeDispatcher_instance;
  }
  function SetTimeoutDispatcher() {
    SetTimeoutDispatcher_instance = this;
    SetTimeoutBasedDispatcher.call(this);
  }
  SetTimeoutDispatcher.prototype.scheduleQueueProcessing_nyddyc_k$ = function () {
    setTimeout(this._get_messageQueue__2421032257_uzoxj3_k$().processQueue_1, 0);
    Unit_getInstance();
  };
  SetTimeoutDispatcher.$metadata$ = {
    simpleName: 'SetTimeoutDispatcher',
    kind: 'object',
    interfaces: []
  };
  var SetTimeoutDispatcher_instance;
  function SetTimeoutDispatcher_getInstance() {
    if (SetTimeoutDispatcher_instance == null)
      new SetTimeoutDispatcher();
    return SetTimeoutDispatcher_instance;
  }
  function SetTimeoutBasedDispatcher$ScheduledMessageQueue$processQueue$lambda(this$0) {
    return function () {
      this$0.process_mza50i_k$();
      return Unit_getInstance();
    };
  }
  function ScheduledMessageQueue($outer) {
    this.$this_1 = $outer;
    MessageQueue.call(this);
    var tmp = this;
    tmp.processQueue_1 = SetTimeoutBasedDispatcher$ScheduledMessageQueue$processQueue$lambda(this);
  }
  ScheduledMessageQueue.prototype._get_processQueue__1005172137_gmgbs9_k$ = function () {
    return this.processQueue_1;
  };
  ScheduledMessageQueue.prototype.schedule_o6nex2_k$ = function () {
    this.$this_1.scheduleQueueProcessing_nyddyc_k$();
  };
  ScheduledMessageQueue.prototype.reschedule_mh206x_k$ = function () {
    setTimeout(this.processQueue_1, 0);
    Unit_getInstance();
  };
  ScheduledMessageQueue.$metadata$ = {
    simpleName: 'ScheduledMessageQueue',
    kind: 'class',
    interfaces: []
  };
  function SetTimeoutBasedDispatcher$invokeOnTimeout$lambda($block) {
    return function () {
      $block.run_mw4iiu_k$();
      return Unit_getInstance();
    };
  }
  function SetTimeoutBasedDispatcher$scheduleResumeAfterDelay$lambda($continuation, this$0) {
    return function () {
      var tmp$ret$0;
      $l$block: {
        {
        }
        tmp$ret$0 = $continuation.resumeUndispatched_re4yxz_k$(this$0, Unit_getInstance());
        break $l$block;
      }
      return Unit_getInstance();
    };
  }
  function SetTimeoutBasedDispatcher() {
    CoroutineDispatcher.call(this);
    this.messageQueue_1 = new ScheduledMessageQueue(this);
  }
  SetTimeoutBasedDispatcher.prototype._get_messageQueue__2421032257_uzoxj3_k$ = function () {
    return this.messageQueue_1;
  };
  SetTimeoutBasedDispatcher.prototype.limitedParallelism_glrman_k$ = function (parallelism) {
    checkParallelism(parallelism);
    return this;
  };
  SetTimeoutBasedDispatcher.prototype.dispatch_o98ux7_k$ = function (context, block) {
    this.messageQueue_1.enqueue_w6uc33_k$(block);
  };
  SetTimeoutBasedDispatcher.prototype.invokeOnTimeout_sx2bqq_k$ = function (timeMillis, block, context) {
    var handle = setTimeout(SetTimeoutBasedDispatcher$invokeOnTimeout$lambda(block), delayToInt(timeMillis));
    return new ClearTimeout(handle);
  };
  SetTimeoutBasedDispatcher.prototype.scheduleResumeAfterDelay_5x4w1l_k$ = function (timeMillis, continuation) {
    var handle = setTimeout(SetTimeoutBasedDispatcher$scheduleResumeAfterDelay$lambda(continuation, this), delayToInt(timeMillis));
    var tmp$ret$1;
    $l$block_0: {
      var tmp0__get_asHandler__0_1201048388 = new ClearTimeout(handle);
      var tmp$ret$0;
      $l$block: {
        tmp$ret$0 = tmp0__get_asHandler__0_1201048388;
        break $l$block;
      }
      tmp$ret$1 = tmp$ret$0;
      break $l$block_0;
    }
    continuation.invokeOnCancellation_yygv6h_k$(tmp$ret$1);
  };
  SetTimeoutBasedDispatcher.$metadata$ = {
    simpleName: 'SetTimeoutBasedDispatcher',
    kind: 'class',
    interfaces: [Delay]
  };
  function _set_scheduled__528399032($this, _set____804775014) {
    $this.scheduled_1 = _set____804775014;
  }
  function _get_scheduled__2300135236($this) {
    return $this.scheduled_1;
  }
  function MessageQueue() {
    ArrayQueue.call(this);
    this.yieldEvery_1 = 16;
    this.scheduled_1 = false;
  }
  MessageQueue.prototype._get_yieldEvery__2586046141_s9g403_k$ = function () {
    return this.yieldEvery_1;
  };
  MessageQueue.prototype.enqueue_w6uc33_k$ = function (element) {
    this.addLast_xhfl3v_k$(element);
    if (!this.scheduled_1) {
      this.scheduled_1 = true;
      this.schedule_o6nex2_k$();
    }
  };
  MessageQueue.prototype.process_mza50i_k$ = function () {
    try {
      {
        var tmp0_repeat_0 = this.yieldEvery_1;
        {
        }
        var inductionVariable = 0;
        if (inductionVariable < tmp0_repeat_0)
          do {
            var index_2 = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            {
              var tmp0_elvis_lhs_5 = this.removeFirstOrNull_eges3a_k$();
              var tmp;
              if (tmp0_elvis_lhs_5 == null) {
                return Unit_getInstance();
              } else {
                tmp = tmp0_elvis_lhs_5;
              }
              var element_4 = tmp;
              element_4.run_mw4iiu_k$();
            }
          }
           while (inductionVariable < tmp0_repeat_0);
      }
    }finally {
      if (this._get_isEmpty__1500737838_oti0q6_k$()) {
        this.scheduled_1 = false;
      } else {
        this.reschedule_mh206x_k$();
      }
    }
  };
  MessageQueue.$metadata$ = {
    simpleName: 'MessageQueue',
    kind: 'class',
    interfaces: []
  };
  function delayToInt(timeMillis) {
    return coerceIn(timeMillis, new Long(0, 0), new Long(2147483647, 0)).toInt_1tsl84_k$();
  }
  function _get_handle__2978141667_0($this) {
    return $this.handle_1;
  }
  function ClearTimeout(handle) {
    CancelHandler.call(this);
    this.handle_1 = handle;
  }
  ClearTimeout.prototype.dispose_3n44we_k$ = function () {
    clearTimeout(this.handle_1);
  };
  ClearTimeout.prototype.invoke_7fb7sc_k$ = function (cause) {
    this.dispose_3n44we_k$();
  };
  ClearTimeout.prototype.invoke = function (cause) {
    return this.invoke_7fb7sc_k$(cause);
  };
  ClearTimeout.prototype.toString = function () {
    return 'ClearTimeout[' + this.handle_1 + ']';
  };
  ClearTimeout.$metadata$ = {
    simpleName: 'ClearTimeout',
    kind: 'class',
    interfaces: [DisposableHandle]
  };
  function _get_MAX_DELAY__2689924265() {
    return MAX_DELAY;
  }
  var MAX_DELAY;
  function _get_window__3634831643($this) {
    return $this.window_1;
  }
  function _get_queue__3558538464_0($this) {
    return $this.queue_1;
  }
  function WindowDispatcher$scheduleResumeAfterDelay$lambda($continuation, this$0) {
    return function () {
      var tmp$ret$0;
      $l$block: {
        {
        }
        tmp$ret$0 = $continuation.resumeUndispatched_re4yxz_k$(this$0, Unit_getInstance());
        break $l$block;
      }
      return Unit_getInstance();
    };
  }
  function WindowDispatcher$invokeOnTimeout$lambda($block) {
    return function () {
      $block.run_mw4iiu_k$();
      return Unit_getInstance();
    };
  }
  function WindowDispatcher$invokeOnTimeout$1(this$0, $handle) {
    this.this$0__1 = this$0;
    this.$handle_1 = $handle;
  }
  WindowDispatcher$invokeOnTimeout$1.prototype.dispose_3n44we_k$ = function () {
    this.this$0__1.window_1.clearTimeout(this.$handle_1);
  };
  WindowDispatcher$invokeOnTimeout$1.$metadata$ = {
    kind: 'class',
    interfaces: [DisposableHandle]
  };
  function WindowDispatcher(window_0) {
    CoroutineDispatcher.call(this);
    this.window_1 = window_0;
    this.queue_1 = new WindowMessageQueue(this.window_1);
  }
  WindowDispatcher.prototype.dispatch_o98ux7_k$ = function (context, block) {
    return this.queue_1.enqueue_w6uc33_k$(block);
  };
  WindowDispatcher.prototype.scheduleResumeAfterDelay_5x4w1l_k$ = function (timeMillis, continuation) {
    this.window_1.setTimeout(WindowDispatcher$scheduleResumeAfterDelay$lambda(continuation, this), delayToInt(timeMillis));
    Unit_getInstance();
  };
  WindowDispatcher.prototype.invokeOnTimeout_sx2bqq_k$ = function (timeMillis, block, context) {
    var handle = this.window_1.setTimeout(WindowDispatcher$invokeOnTimeout$lambda(block), delayToInt(timeMillis));
    return new WindowDispatcher$invokeOnTimeout$1(this, handle);
  };
  WindowDispatcher.$metadata$ = {
    simpleName: 'WindowDispatcher',
    kind: 'class',
    interfaces: [Delay]
  };
  function _get_window__3634831643_0($this) {
    return $this.window_1;
  }
  function _get_messageName__351833247($this) {
    return $this.messageName_1;
  }
  function WindowMessageQueue$lambda(this$0) {
    return function (event) {
      var tmp;
      if (event.source == this$0.window_1 ? event.data == this$0.messageName_1 : false) {
        event.stopPropagation();
        tmp = this$0.process_mza50i_k$();
      }
      return Unit_getInstance();
    };
  }
  function WindowMessageQueue$schedule$lambda(this$0) {
    return function (it) {
      this$0.process_mza50i_k$();
      return Unit_getInstance();
    };
  }
  function WindowMessageQueue(window_0) {
    MessageQueue.call(this);
    this.window_1 = window_0;
    this.messageName_1 = 'dispatchCoroutine';
    this.window_1.addEventListener('message', WindowMessageQueue$lambda(this), true);
  }
  WindowMessageQueue.prototype.schedule_o6nex2_k$ = function () {
    var tmp = Promise.resolve(Unit_getInstance());
    tmp.then(WindowMessageQueue$schedule$lambda(this));
    Unit_getInstance();
  };
  WindowMessageQueue.prototype.reschedule_mh206x_k$ = function () {
    this.window_1.postMessage(this.messageName_1, '*');
  };
  WindowMessageQueue.$metadata$ = {
    simpleName: 'WindowMessageQueue',
    kind: 'class',
    interfaces: []
  };
  function await_0(_this__1828080292, $cont) {
    var tmp$ret$0;
    $l$block: {
      var tmp0__anonymous__1_1_1682274507 = $cont;
      var cancellable_2_2 = new CancellableContinuationImpl(intercepted(tmp0__anonymous__1_1_1682274507), _get_MODE_CANCELLABLE__581347323());
      cancellable_2_2.initCancellability_sh6jkn_k$();
      {
        var tmp = await$lambda(cancellable_2_2);
        _this__1828080292.then(tmp, await$lambda_0(cancellable_2_2));
        Unit_getInstance();
      }
      tmp$ret$0 = cancellable_2_2.getResult_clfhg3_k$();
      break $l$block;
    }
    return tmp$ret$0;
  }
  function await$lambda($cancellable_2_2) {
    return function (it) {
      var tmp$ret$1;
      $l$block_0: {
        var tmp$ret$0;
        $l$block: {
          var tmp0_success_0_1_5 = Companion_getInstance_0();
          tmp$ret$0 = _Result___init__impl__2241242780(it);
          break $l$block;
        }
        tmp$ret$1 = $cancellable_2_2.resumeWith_s3a3yh_k$(tmp$ret$0);
        break $l$block_0;
      }
      return Unit_getInstance();
    };
  }
  function await$lambda_0($cancellable_2_2) {
    return function (it) {
      var tmp$ret$1;
      $l$block_0: {
        var tmp$ret$0;
        $l$block: {
          var tmp0_failure_0_1_7 = Companion_getInstance_0();
          tmp$ret$0 = _Result___init__impl__2241242780(createFailure(it));
          break $l$block;
        }
        tmp$ret$1 = $cancellable_2_2.resumeWith_s3a3yh_k$(tmp$ret$0);
        break $l$block_0;
      }
      return Unit_getInstance();
    };
  }
  function Runnable() {
  }
  Runnable.$metadata$ = {
    simpleName: 'Runnable',
    kind: 'interface',
    interfaces: []
  };
  function SchedulerTask() {
  }
  SchedulerTask.$metadata$ = {
    simpleName: 'SchedulerTask',
    kind: 'class',
    interfaces: [Runnable]
  };
  function _get_taskContext__3781262951(_this__1828080292) {
    return Unit_getInstance();
  }
  function afterTask(_this__1828080292) {
  }
  function asCoroutineDispatcher(_this__1828080292) {
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = _this__1828080292;
      break $l$block;
    }
    var tmp0_elvis_lhs = tmp$ret$0.coroutineDispatcher;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var tmp$ret$2;
      $l$block_1: {
        var tmp0_also_0 = new WindowDispatcher(_this__1828080292);
        {
        }
        {
          var tmp$ret$1;
          $l$block_0: {
            tmp$ret$1 = _this__1828080292;
            break $l$block_0;
          }
          tmp$ret$1.coroutineDispatcher = tmp0_also_0;
        }
        tmp$ret$2 = tmp0_also_0;
        break $l$block_1;
      }
      tmp = tmp$ret$2;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function identitySet(expectedSize) {
    return HashSet_init_$Create$(expectedSize);
  }
  function LinkedListHead() {
    LinkedListNode.call(this);
  }
  LinkedListHead.prototype._get_isEmpty__1500737838_oti0q6_k$ = function () {
    return this._get__next__3036752447_kt3wsh_k$() === this;
  };
  LinkedListHead.prototype.remove_fgfybg_k$ = function () {
    throw UnsupportedOperationException_init_$Create$_0();
  };
  LinkedListHead.$metadata$ = {
    simpleName: 'LinkedListHead',
    kind: 'class',
    interfaces: []
  };
  function LinkedListNode() {
    this._next_1 = this;
    this._prev_1 = this;
    this._removed_1 = false;
  }
  LinkedListNode.prototype._set__next__678590387_e2vm1_k$ = function (_set____804775014) {
    this._next_1 = _set____804775014;
  };
  LinkedListNode.prototype._get__next__3036752447_kt3wsh_k$ = function () {
    return this._next_1;
  };
  LinkedListNode.prototype._set__prev__680806515_d4288n_k$ = function (_set____804775014) {
    this._prev_1 = _set____804775014;
  };
  LinkedListNode.prototype._get__prev__3038968575_krsetd_k$ = function () {
    return this._prev_1;
  };
  LinkedListNode.prototype._set__removed__1833661142_s8t2nh_k$ = function (_set____804775014) {
    this._removed_1 = _set____804775014;
  };
  LinkedListNode.prototype._get__removed__1059529930_hiteiy_k$ = function () {
    return this._removed_1;
  };
  LinkedListNode.prototype._get_nextNode__2683205334_qnlnhm_k$ = function () {
    return this._next_1;
  };
  LinkedListNode.prototype._get_prevNode__624551830_abub9y_k$ = function () {
    return this._prev_1;
  };
  LinkedListNode.prototype._get_isRemoved__1681100091_rsvt4r_k$ = function () {
    return this._removed_1;
  };
  LinkedListNode.prototype.addLast_uyctnf_k$ = function (node) {
    var prev = this._prev_1;
    node._next_1 = this;
    node._prev_1 = prev;
    prev._next_1 = node;
    this._prev_1 = node;
  };
  LinkedListNode.prototype.remove_fgfybg_k$ = function () {
    return this.removeImpl_i5v938_k$();
  };
  LinkedListNode.prototype.removeImpl_i5v938_k$ = function () {
    if (this._removed_1)
      return false;
    var prev = this._prev_1;
    var next = this._next_1;
    prev._next_1 = next;
    next._prev_1 = prev;
    this._removed_1 = true;
    return true;
  };
  LinkedListNode.prototype.addOneIfEmpty_cbgboi_k$ = function (node) {
    if (!(this._next_1 === this))
      return false;
    this.addLast_uyctnf_k$(node);
    return true;
  };
  LinkedListNode.prototype.addLastIf_h8xph4_k$ = function (node, condition) {
    if (!condition())
      return false;
    this.addLast_uyctnf_k$(node);
    return true;
  };
  LinkedListNode.prototype.addLastIfPrev_bzlxtw_k$ = function (node, predicate) {
    if (!predicate(this._prev_1))
      return false;
    this.addLast_uyctnf_k$(node);
    return true;
  };
  LinkedListNode.prototype.addLastIfPrevAndIf_gphed7_k$ = function (node, predicate, condition) {
    if (!predicate(this._prev_1))
      return false;
    if (!condition())
      return false;
    this.addLast_uyctnf_k$(node);
    return true;
  };
  LinkedListNode.prototype.helpRemove_v3vfak_k$ = function () {
  };
  LinkedListNode.prototype.removeFirstOrNull_eges3a_k$ = function () {
    var next = this._next_1;
    if (next === this)
      return null;
    {
      var tmp0_check_0 = next.removeImpl_i5v938_k$();
      {
      }
      if (!tmp0_check_0) {
        var tmp$ret$0;
        $l$block: {
          tmp$ret$0 = 'Should remove';
          break $l$block;
        }
        var message_1 = tmp$ret$0;
        throw IllegalStateException_init_$Create$(toString_0(message_1));
      }
    }
    return next;
  };
  LinkedListNode.$metadata$ = {
    simpleName: 'LinkedListNode',
    kind: 'class',
    interfaces: []
  };
  function PrepareOp(affected, desc, atomicOp) {
    OpDescriptor.call(this);
    this.affected_1 = affected;
    this.desc_1 = desc;
    this.atomicOp_1 = atomicOp;
  }
  PrepareOp.prototype._get_affected__2948029399_m9xjxl_k$ = function () {
    return this.affected_1;
  };
  PrepareOp.prototype._get_desc__795058650_d5cv6i_k$ = function () {
    return this.desc_1;
  };
  PrepareOp.prototype._get_atomicOp__1209215967_jzxp0f_k$ = function () {
    return this.atomicOp_1;
  };
  PrepareOp.prototype.perform_8emi3i_k$ = function (affected) {
    return null;
  };
  PrepareOp.prototype.finishPrepare_o9c8d9_k$ = function () {
  };
  PrepareOp.$metadata$ = {
    simpleName: 'PrepareOp',
    kind: 'class',
    interfaces: []
  };
  function AbstractAtomicDesc() {
    AtomicDesc.call(this);
  }
  AbstractAtomicDesc.prototype.onPrepare_soaf0c_k$ = function (prepareOp) {
    this.finishPrepare_kkga2x_k$(prepareOp);
    return null;
  };
  AbstractAtomicDesc.prototype.onRemoved_gagg6z_k$ = function (affected) {
  };
  AbstractAtomicDesc.prototype.prepare_lz7jjr_k$ = function (op) {
    var affected = this._get_affectedNode__192743797_36r62d_k$();
    var failure = this.failure_mowj19_k$(affected);
    if (!(failure == null))
      return failure;
    return this.onPrepare_soaf0c_k$(new PrepareOp(affected, this, op));
  };
  AbstractAtomicDesc.prototype.complete_b09hpj_k$ = function (op, failure) {
    return this.onComplete_9ma4gp_k$();
  };
  AbstractAtomicDesc.prototype.failure_mowj19_k$ = function (affected) {
    return null;
  };
  AbstractAtomicDesc.prototype.retry_84e02v_k$ = function (affected, next) {
    return false;
  };
  AbstractAtomicDesc.$metadata$ = {
    simpleName: 'AbstractAtomicDesc',
    kind: 'class',
    interfaces: []
  };
  function probeCoroutineCreated(completion) {
    return completion;
  }
  function unwrap(exception) {
    return exception;
  }
  function recoverAndThrow(exception, $cont) {
    throw exception;
  }
  function initCause(_this__1828080292, cause) {
  }
  function CoroutineStackFrame() {
  }
  CoroutineStackFrame.$metadata$ = {
    simpleName: 'CoroutineStackFrame',
    kind: 'interface',
    interfaces: []
  };
  function recoverStackTrace(exception, continuation) {
    return exception;
  }
  function synchronized(lock, block) {
    return block();
  }
  function systemProp_1(propertyName) {
    return null;
  }
  function threadContextElements(context) {
    return 0;
  }
  function _set_value__1325260276($this, _set____804775014) {
    $this.value_1 = _set____804775014;
  }
  function _get_value__3683422336($this) {
    return $this.value_1;
  }
  function CommonThreadLocal() {
    this.value_1 = null;
  }
  CommonThreadLocal.prototype.get_26vq_k$ = function () {
    var tmp = this.value_1;
    return (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE();
  };
  CommonThreadLocal.prototype.set_hda1d2_k$ = function (value) {
    this.value_1 = value;
  };
  CommonThreadLocal.$metadata$ = {
    simpleName: 'CommonThreadLocal',
    kind: 'class',
    interfaces: []
  };
  //region block: post-declaration
  CancellableContinuationImpl.prototype.cancel$default_5qyvia_k$ = cancel$default;
  CancellableContinuationImpl.prototype.tryResume$default_sti3on_k$ = tryResume$default;
  CoroutineDispatcher.prototype.get_1pi7hg_k$ = get;
  CoroutineDispatcher.prototype.fold_6dbyow_k$ = fold;
  CoroutineDispatcher.prototype.minusKey_y21q55_k$ = minusKey;
  CoroutineDispatcher.prototype.plus_rgw9wi_k$ = plus;
  EventLoop.prototype.plus_rgw9wi_k$ = plus;
  EventLoop.prototype.get_1pi7hg_k$ = get;
  EventLoop.prototype.fold_6dbyow_k$ = fold;
  EventLoop.prototype.minusKey_y21q55_k$ = minusKey;
  AwaitContinuation.prototype.cancel$default_5qyvia_k$ = cancel$default;
  AwaitContinuation.prototype.tryResume$default_sti3on_k$ = tryResume$default;
  JobSupport.prototype.invokeOnCompletion$default_7q548c_k$ = invokeOnCompletion$default;
  JobSupport.prototype.cancel$default_bm1z3z_k$ = cancel$default_0;
  JobSupport.prototype.cancel$default_5qyvia_k$ = cancel$default_1;
  JobSupport.prototype.cancel_2kogtl_k$ = cancel;
  JobSupport.prototype.plus_ee14jq_k$ = plus_0;
  JobSupport.prototype.plus_rgw9wi_k$ = plus;
  JobSupport.prototype.get_1pi7hg_k$ = get_0;
  JobSupport.prototype.fold_6dbyow_k$ = fold;
  JobSupport.prototype.minusKey_y21q55_k$ = minusKey_0;
  MainCoroutineDispatcher.prototype.plus_rgw9wi_k$ = plus;
  MainCoroutineDispatcher.prototype.get_1pi7hg_k$ = get;
  MainCoroutineDispatcher.prototype.fold_6dbyow_k$ = fold;
  MainCoroutineDispatcher.prototype.minusKey_y21q55_k$ = minusKey;
  Unconfined.prototype.plus_rgw9wi_k$ = plus;
  Unconfined.prototype.get_1pi7hg_k$ = get;
  Unconfined.prototype.fold_6dbyow_k$ = fold;
  Unconfined.prototype.minusKey_y21q55_k$ = minusKey;
  YieldContext.prototype.get_1pi7hg_k$ = get_0;
  YieldContext.prototype.fold_6dbyow_k$ = fold;
  YieldContext.prototype.minusKey_y21q55_k$ = minusKey_0;
  YieldContext.prototype.plus_rgw9wi_k$ = plus;
  LimitedDispatcher.prototype.plus_rgw9wi_k$ = plus;
  LimitedDispatcher.prototype.get_1pi7hg_k$ = get;
  LimitedDispatcher.prototype.fold_6dbyow_k$ = fold;
  LimitedDispatcher.prototype.minusKey_y21q55_k$ = minusKey;
  JsMainDispatcher.prototype.plus_rgw9wi_k$ = plus;
  JsMainDispatcher.prototype.get_1pi7hg_k$ = get;
  JsMainDispatcher.prototype.fold_6dbyow_k$ = fold;
  JsMainDispatcher.prototype.minusKey_y21q55_k$ = minusKey;
  UnconfinedEventLoop.prototype.plus_rgw9wi_k$ = plus;
  UnconfinedEventLoop.prototype.get_1pi7hg_k$ = get;
  UnconfinedEventLoop.prototype.fold_6dbyow_k$ = fold;
  UnconfinedEventLoop.prototype.minusKey_y21q55_k$ = minusKey;
  SetTimeoutBasedDispatcher.prototype.plus_rgw9wi_k$ = plus;
  SetTimeoutBasedDispatcher.prototype.get_1pi7hg_k$ = get;
  SetTimeoutBasedDispatcher.prototype.fold_6dbyow_k$ = fold;
  SetTimeoutBasedDispatcher.prototype.minusKey_y21q55_k$ = minusKey;
  SetTimeoutBasedDispatcher.prototype.delay_sw4t2e_k$ = delay;
  NodeDispatcher.prototype.plus_rgw9wi_k$ = plus;
  NodeDispatcher.prototype.get_1pi7hg_k$ = get;
  NodeDispatcher.prototype.fold_6dbyow_k$ = fold;
  NodeDispatcher.prototype.minusKey_y21q55_k$ = minusKey;
  NodeDispatcher.prototype.delay_sw4t2e_k$ = delay;
  SetTimeoutDispatcher.prototype.plus_rgw9wi_k$ = plus;
  SetTimeoutDispatcher.prototype.get_1pi7hg_k$ = get;
  SetTimeoutDispatcher.prototype.fold_6dbyow_k$ = fold;
  SetTimeoutDispatcher.prototype.minusKey_y21q55_k$ = minusKey;
  SetTimeoutDispatcher.prototype.delay_sw4t2e_k$ = delay;
  WindowDispatcher.prototype.plus_rgw9wi_k$ = plus;
  WindowDispatcher.prototype.get_1pi7hg_k$ = get;
  WindowDispatcher.prototype.fold_6dbyow_k$ = fold;
  WindowDispatcher.prototype.minusKey_y21q55_k$ = minusKey;
  WindowDispatcher.prototype.delay_sw4t2e_k$ = delay;
  //endregion
  //region block: init
  UNDECIDED = 0;
  SUSPENDED = 1;
  RESUMED = 2;
  FALSE = 0;
  TRUE = 1;
  RETRY = -1;
  DEFAULT_CONCURRENCY_PROPERTY_NAME = 'kotlinx.coroutines.flow.defaultConcurrency';
  MODE_CANCELLABLE = 1;
  MODE_UNINITIALIZED = -1;
  MODE_CANCELLABLE_REUSABLE = 2;
  MODE_UNDISPATCHED = 4;
  MODE_ATOMIC = 0;
  UNDEFINED_0 = 'undefined';
  counter = 0;
  DEBUG = false;
  RECOVER_STACK_TRACES = false;
  MAX_DELAY = new Long(2147483647, 0);
  //endregion
  //region block: exports
  _.$crossModule$ = _.$crossModule$ || {};
  _.$crossModule$.await = await_0;
  //endregion
  return _;
}));

//# sourceMappingURL=kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.js.map