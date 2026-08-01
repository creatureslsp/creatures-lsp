import {
  Exceptiondt2hlxn7j7vw as Exception,
  VOID3gxj6tk5isa35 as VOID,
  captureStack1fzi4aczwc4hg as captureStack,
  initMetadataForClassbxx6q50dy2s7 as initMetadataForClass,
  CancellationException3b36o9qz53rgr as CancellationException,
} from './kotlin-kotlin-stdlib.mjs';
//region block: imports
//endregion
//region block: pre-declaration
class AlreadyDisposedException extends Exception {
  static g1g(message) {
    message = message === VOID ? 'Cache already disposed' : message;
    var $this = this.gc(message);
    captureStack($this, $this.f1g_1);
    return $this;
  }
}
//endregion
function rethrowCancellationException(_this__u8e3s4) {
  if (_this__u8e3s4 instanceof CancellationException) {
    throw _this__u8e3s4;
  }
}
//region block: post-declaration
initMetadataForClass(AlreadyDisposedException, 'AlreadyDisposedException', AlreadyDisposedException.g1g);
//endregion
//region block: exports
export {
  AlreadyDisposedException as AlreadyDisposedException2z2bkqn8etn47,
  rethrowCancellationException as rethrowCancellationExceptionp5tilkoqmu0b,
};
//endregion

//# sourceMappingURL=bedalton-common-exceptions.mjs.map
