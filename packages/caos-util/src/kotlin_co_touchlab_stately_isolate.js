(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin_kotlin.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin_kotlin.js'));
  else {
    if (typeof kotlin_kotlin === 'undefined') {
      throw new Error("Error loading module 'kotlin_co_touchlab_stately_isolate'. Its dependency 'kotlin_kotlin' was not found. Please, check whether 'kotlin_kotlin' is loaded prior to 'kotlin_co_touchlab_stately_isolate'.");
    }
    root.kotlin_co_touchlab_stately_isolate = factory(typeof kotlin_co_touchlab_stately_isolate === 'undefined' ? {} : kotlin_co_touchlab_stately_isolate, kotlin_kotlin);
  }
}(this, function (_, kotlin_kotlin) {
  //region block: imports
  var Unit_getInstance = kotlin_kotlin.$crossModule$.Unit_getInstance;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$crossModule$.IllegalStateException_init_$Create$_1;
  //endregion
  'use strict';
  //region block: pre-declaration
  //endregion
  function _get_defaultStateRunner__3366734187() {
    init_properties_IsoState_kt_1826014478();
    return defaultStateRunner;
  }
  var defaultStateRunner;
  function _get_stateHolder__2919194516($this) {
    return $this.stateHolder_1;
  }
  function IsolateState_init_$Init$(stateRunner, producer, $this) {
    IsolateState.call($this, createState(stateRunner, producer));
    return $this;
  }
  function IsolateState_init_$Create$(stateRunner, producer) {
    return IsolateState_init_$Init$(stateRunner, producer, Object.create(IsolateState.prototype));
  }
  function IsolateState_init_$Init$_0(stateRunner, producer, $mask0, $marker, $this) {
    if (!(($mask0 & 1) === 0))
      stateRunner = null;
    IsolateState_init_$Init$(stateRunner, producer, $this);
    return $this;
  }
  function IsolateState_init_$Create$_0(stateRunner, producer, $mask0, $marker) {
    return IsolateState_init_$Init$_0(stateRunner, producer, $mask0, $marker, Object.create(IsolateState.prototype));
  }
  function IsolateState$access$lambda($block, this$0) {
    return function () {
      return $block(this$0.stateHolder_1._get_myState__1318924652_lt94rw_k$());
    };
  }
  function IsolateState$dispose$lambda(this$0) {
    return function () {
      this$0.stateHolder_1.dispose_3n44we_k$();
      return Unit_getInstance();
    };
  }
  function IsolateState(stateHolder) {
    this.stateHolder_1 = stateHolder;
  }
  IsolateState.prototype._get_isDisposed__3837966588_7k3404_k$ = function () {
    return this.stateHolder_1._get_isDisposed__3837966588_7k3404_k$();
  };
  IsolateState.prototype.fork_teyl9p_k$ = function (r) {
    var tmp;
    if (this.stateHolder_1._get_myThread__2791162805_ovbqyz_k$()) {
      tmp = new StateHolder(r, this.stateHolder_1._get_stateRunner__3378216592_f5t5dc_k$());
    } else {
      throw IllegalStateException_init_$Create$('Must fork state from the state thread');
    }
    return tmp;
  };
  IsolateState.prototype.access_mfr1eb_k$ = function (block) {
    var tmp;
    if (this.stateHolder_1._get_myThread__2791162805_ovbqyz_k$()) {
      tmp = block(this.stateHolder_1._get_myState__1318924652_lt94rw_k$());
    } else {
      var tmp_0 = this.stateHolder_1._get_stateRunner__3378216592_f5t5dc_k$();
      tmp = tmp_0.stateRun_tv1kca_k$(IsolateState$access$lambda(block, this));
    }
    return tmp;
  };
  IsolateState.prototype.dispose_3n44we_k$ = function () {
    var tmp;
    if (this.stateHolder_1._get_myThread__2791162805_ovbqyz_k$()) {
      tmp = this.stateHolder_1.dispose_3n44we_k$();
    } else {
      var tmp_0 = this.stateHolder_1._get_stateRunner__3378216592_f5t5dc_k$();
      tmp = tmp_0.stateRun_tv1kca_k$(IsolateState$dispose$lambda(this));
    }
    return tmp;
  };
  IsolateState.$metadata$ = {
    simpleName: 'IsolateState',
    kind: 'class',
    interfaces: []
  };
  function createState(stateRunner, producer) {
    init_properties_IsoState_kt_1826014478();
    var tmp0_elvis_lhs = stateRunner;
    var runner = tmp0_elvis_lhs == null ? _get_defaultStateRunner__3366734187() : tmp0_elvis_lhs;
    return runner.stateRun_tv1kca_k$(createState$lambda(producer, runner));
  }
  function createState$lambda($producer, $runner) {
    return function () {
      return new StateHolder($producer(), $runner);
    };
  }
  var properties_initialized_IsoState_kt_2135893042;
  function init_properties_IsoState_kt_1826014478() {
    if (!properties_initialized_IsoState_kt_2135893042) {
      properties_initialized_IsoState_kt_2135893042 = true;
      defaultStateRunner = new BackgroundStateRunner();
    }
  }
  function StateRunner() {
  }
  StateRunner.$metadata$ = {
    simpleName: 'StateRunner',
    kind: 'interface',
    interfaces: []
  };
  function BackgroundStateRunner() {
  }
  BackgroundStateRunner.prototype.stateRun_tv1kca_k$ = function (block) {
    return block();
  };
  BackgroundStateRunner.prototype.stop_pnanjl_k$ = function () {
  };
  BackgroundStateRunner.$metadata$ = {
    simpleName: 'BackgroundStateRunner',
    kind: 'class',
    interfaces: [StateRunner]
  };
  function _set__isDisposed__629991095($this, _set____804775014) {
    $this._isDisposed_1 = _set____804775014;
  }
  function _get__isDisposed__2461433923($this) {
    return $this._isDisposed_1;
  }
  function StateHolder(t, stateRunner) {
    this.stateRunner_1 = stateRunner;
    this.myState_1 = t;
    this._isDisposed_1 = false;
    this.myThread_1 = true;
  }
  StateHolder.prototype._get_stateRunner__3378216592_f5t5dc_k$ = function () {
    return this.stateRunner_1;
  };
  StateHolder.prototype._get_myState__1318924652_lt94rw_k$ = function () {
    return this.myState_1;
  };
  StateHolder.prototype._get_isDisposed__3837966588_7k3404_k$ = function () {
    return this._isDisposed_1;
  };
  StateHolder.prototype.dispose_3n44we_k$ = function () {
    if (!this._get_isDisposed__3837966588_7k3404_k$())
      this._isDisposed_1 = true;
  };
  StateHolder.prototype._get_myThread__2791162805_ovbqyz_k$ = function () {
    return this.myThread_1;
  };
  StateHolder.$metadata$ = {
    simpleName: 'StateHolder',
    kind: 'class',
    interfaces: []
  };
  //region block: exports
  _.$crossModule$ = _.$crossModule$ || {};
  _.$crossModule$.IsolateState_init_$Create$ = IsolateState_init_$Create$_0;
  //endregion
  return _;
}));

//# sourceMappingURL=kotlin_co_touchlab_stately_isolate.js.map