import {
  KProperty02ce7r476m8633 as KProperty0,
  getPropertyCallableRef3hckxc0xueiaj as getPropertyCallableRef,
  Unit_instancev9v8hjid95df as Unit_instance,
  VOID3gxj6tk5isa35 as VOID,
  lazy2hsh8ze7j6ikd as lazy,
} from './kotlin-kotlin-stdlib.mjs';
import { CaosException1mc5so6t8y4cw as CaosException } from './caos-core.mjs';
import { ProtoBuf1o4kfvnhqrnyf as ProtoBuf } from './kotlinx-serialization-kotlinx-serialization-protobuf.mjs';
import { Companion_getInstance34l4x8oszj3u as Companion_getInstance } from './caos-lib-structs.mjs';
//region block: imports
//endregion
//region block: pre-declaration
//endregion
function set_lib(_set____db54di) {
  _init_properties_universalLib_kt__7v7mii();
  lib = _set____db54di;
}
function get_lib() {
  _init_properties_universalLib_kt__7v7mii();
  return lib;
}
var lib;
function set_libProvider(_set____db54di) {
  _init_properties_universalLib_kt__7v7mii();
  libProvider = _set____db54di;
}
function get_libProvider() {
  _init_properties_universalLib_kt__7v7mii();
  return libProvider;
}
var libProvider;
function get_caosLibsProtoSerializer() {
  _init_properties_universalLib_kt__7v7mii();
  var tmp0 = caosLibsProtoSerializer$delegate;
  var tmp = KProperty0;
  // Inline function 'kotlin.getValue' call
  getPropertyCallableRef('caosLibsProtoSerializer', 0, tmp, _get_caosLibsProtoSerializer_$ref_a8v4qe(), null);
  return tmp0.r3();
}
var caosLibsProtoSerializer$delegate;
function get_universalLib() {
  _init_properties_universalLib_kt__7v7mii();
  var tmp0_safe_receiver = get_lib();
  if (tmp0_safe_receiver == null)
    null;
  else {
    // Inline function 'kotlin.let' call
    return tmp0_safe_receiver;
  }
  // Inline function 'kotlin.also' call
  var this_0 = get_libProvider()();
  set_lib(this_0);
  return this_0;
}
function setProtoBufProvider(get) {
  _init_properties_universalLib_kt__7v7mii();
  setCaosLibProvider(setProtoBufProvider$lambda(get));
}
function setCaosLibProvider(provider) {
  _init_properties_universalLib_kt__7v7mii();
  set_libProvider(provider);
  if (!(get_lib() == null)) {
    set_lib(provider());
  }
}
function libProvider$lambda() {
  _init_properties_universalLib_kt__7v7mii();
  throw CaosException.j1t('CAOS lib not yet provided. Use setCaosLibProvider() before trying to access the CAOS library.');
}
function caosLibsProtoSerializer$delegate$lambda() {
  _init_properties_universalLib_kt__7v7mii();
  return ProtoBuf(VOID, caosLibsProtoSerializer$delegate$lambda$lambda);
}
function caosLibsProtoSerializer$delegate$lambda$lambda($this$ProtoBuf) {
  _init_properties_universalLib_kt__7v7mii();
  return Unit_instance;
}
function _get_caosLibsProtoSerializer_$ref_a8v4qe() {
  return () => get_caosLibsProtoSerializer();
}
function setProtoBufProvider$lambda($get) {
  return () => get_caosLibsProtoSerializer().q1v(Companion_getInstance().n1e(), $get());
}
var properties_initialized_universalLib_kt_px3evw;
function _init_properties_universalLib_kt__7v7mii() {
  if (!properties_initialized_universalLib_kt_px3evw) {
    properties_initialized_universalLib_kt_px3evw = true;
    lib = null;
    libProvider = libProvider$lambda;
    caosLibsProtoSerializer$delegate = lazy(caosLibsProtoSerializer$delegate$lambda);
  }
}
//region block: exports
export {
  setProtoBufProvider as setProtoBufProvider3cz8r4ud8aflv,
  get_universalLib as get_universalLib38e6v52ntart6,
};
//endregion

//# sourceMappingURL=caos-libs-definitions-provider.mjs.map
