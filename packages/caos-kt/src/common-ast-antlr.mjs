import {
  VOID3gxj6tk5isa35 as VOID,
  split2bvyvnrlcifjv as split,
  last1vo29oleiqj36 as last,
  ensureNotNull1e947j3ixpazm as ensureNotNull,
  NullPointerException3mu0rhxjjitqq as NullPointerException,
  filterNotNullhujglslymx1l as filterNotNull,
  maxOrNull2e5ok5wkly1cp as maxOrNull,
  minOrNull1g8m0136x75mg as minOrNull,
  Unit_instancev9v8hjid95df as Unit_instance,
  first58ocm7j58k3q as first,
  drop3na99dw9feawf as drop,
  Exceptiondt2hlxn7j7vw as Exception,
} from './kotlin-kotlin-stdlib.mjs';
import {
  PositionImpl2ytjbl3oqczz6 as PositionImpl,
  RangeWithIndexImpl3hv9fvnni0g7w as RangeWithIndexImpl,
} from './common-ast-structs.mjs';
import {
  Interval1m1c4nnvh1zfp as Interval,
  Position1t7ilfw35y6a7 as Position,
} from './antlr-kotlin-antlr-kotlin-runtime.mjs';
//region block: imports
//endregion
//region block: pre-declaration
//endregion
function toRange(_this__u8e3s4, offsetIndex, offsetLine, offsetColumn) {
  offsetIndex = offsetIndex === VOID ? null : offsetIndex;
  offsetLine = offsetLine === VOID ? null : offsetLine;
  offsetColumn = offsetColumn === VOID ? null : offsetColumn;
  var startIndex = _this__u8e3s4.g1e();
  var startLine = _this__u8e3s4.e1e();
  var startColumn = _this__u8e3s4.l29();
  var stopIndex = _this__u8e3s4.p29();
  // Inline function 'kotlin.text.orEmpty' call
  var tmp0_elvis_lhs = _this__u8e3s4.j1f();
  var tmp$ret$0 = tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs;
  var lines = split(tmp$ret$0, ['\n']);
  var endLine = (startLine + lines.b2() | 0) - 1 | 0;
  var tmp;
  if (lines.b2() > 1) {
    tmp = last(lines).length;
  } else {
    // Inline function 'kotlin.text.orEmpty' call
    var tmp0_elvis_lhs_0 = _this__u8e3s4.j1f();
    tmp = startColumn + (tmp0_elvis_lhs_0 == null ? '' : tmp0_elvis_lhs_0).length | 0;
  }
  var stopColumn = tmp;
  var tmp6_startIndex = startIndex + (offsetIndex == null ? 0 : offsetIndex) | 0;
  var tmp7_endIndex = stopIndex + (offsetIndex == null ? 0 : offsetIndex) | 0;
  var tmp_0 = startLine + (offsetLine == null ? 0 : offsetLine) | 0;
  var tmp8_start = new PositionImpl(tmp_0, startColumn + (offsetColumn == null ? 0 : offsetColumn) | 0);
  var tmp_1 = endLine + (offsetLine == null ? 0 : offsetLine) | 0;
  var tmp_2;
  if (startLine === endLine) {
    tmp_2 = offsetColumn == null ? 0 : offsetColumn;
  } else {
    tmp_2 = 0;
  }
  var tmp9_end = new PositionImpl(tmp_1, stopColumn + tmp_2 | 0);
  return new RangeWithIndexImpl(tmp8_start, tmp9_end, tmp6_startIndex, tmp7_endIndex);
}
function textRangeWithoutParserIndex(_this__u8e3s4) {
  return createRangeWithIndex_1(_this__u8e3s4, null);
}
function textRangeWithoutParserIndex_0(_this__u8e3s4) {
  return createRangeWithIndex_2(_this__u8e3s4.y29(), _this__u8e3s4.z29(), _this__u8e3s4.g1e(), _this__u8e3s4.p29(), null);
}
function get_trueText(_this__u8e3s4) {
  var a = ensureNotNull(_this__u8e3s4.m2j_1).g1e();
  var b = ensureNotNull(_this__u8e3s4.n2j_1).p29();
  var interval = new Interval(a, b);
  return ensureNotNull(ensureNotNull(_this__u8e3s4.m2j_1).q29()).p28(interval);
}
function textRangeWithParserIndex(_this__u8e3s4, parserIndex) {
  return createRangeWithIndex_1(_this__u8e3s4, parserIndex);
}
function textRangeWithParserIndex_0(_this__u8e3s4, parserIndex) {
  return createRangeWithIndex_2(_this__u8e3s4.y29(), _this__u8e3s4.z29(), _this__u8e3s4.g1e(), _this__u8e3s4.p29(), parserIndex);
}
function createRangeWithIndex(start, end, parserIndex) {
  parserIndex = parserIndex === VOID ? null : parserIndex;
  return createRangeWithIndex_0(start, end, parserIndex, 0, 0, 0);
}
function createRangeWithIndex_0(start, end, parserIndex, offsetIndex, offsetLine, offsetColumn) {
  offsetColumn = offsetColumn === VOID ? 0 : offsetColumn;
  var tmp;
  if (start.e1e() === end.e1e()) {
    var tmp_0 = end.l29();
    var tmp0_safe_receiver = start.j1f();
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.length;
    tmp = tmp_0 + (tmp1_elvis_lhs == null ? end.l29() - start.l29() | 0 : tmp1_elvis_lhs) | 0;
  } else {
    tmp = end.l29();
  }
  var endColumn = tmp;
  if (end.e1e() === start.e1e() && endColumn === start.l29() || (endColumn - 1 | 0) === start.l29()) {
    var tmp_1 = start.l29() + (end.p29() - start.g1e() | 0) | 0;
    var tmp_2 = endColumn;
    var tmp2_safe_receiver = start.z29();
    var tmp3_elvis_lhs = maxByWithNulls([tmp_1, tmp_2, tmp2_safe_receiver == null ? null : tmp2_safe_receiver.p2l_1]);
    endColumn = tmp3_elvis_lhs == null ? end.l29() : tmp3_elvis_lhs;
  }
  if (end.e1e() === 1) {
    endColumn = endColumn + offsetColumn | 0;
  }
  var offsetStartIndex = start.g1e() + offsetIndex | 0;
  var offsetEndIndex = end.p29() + offsetIndex | 0;
  var startColumn = start.l29() + (start.e1e() === 1 ? offsetColumn : 0) | 0;
  if (start.e1e() === end.e1e()) {
    // Inline function 'kotlin.comparisons.maxOf' call
    var a = endColumn;
    endColumn = Math.max(a, startColumn, 0);
  }
  // Inline function 'kotlin.comparisons.maxOf' call
  var tmp4_endIndex = Math.max(offsetEndIndex, offsetStartIndex);
  var tmp5_start = new PositionImpl((start.e1e() - 1 | 0) + offsetLine | 0, startColumn);
  var tmp6_end = new PositionImpl((end.e1e() - 1 | 0) + offsetLine | 0, sub1OrZero(endColumn));
  return new RangeWithIndexImpl(tmp5_start, tmp6_end, offsetStartIndex, tmp4_endIndex, parserIndex);
}
function createRangeWithIndex_1(ctx, parserIndex) {
  parserIndex = parserIndex === VOID ? null : parserIndex;
  var start = ctx.m2j_1;
  var tmp0_elvis_lhs = ctx.n2j_1;
  var stop = tmp0_elvis_lhs == null ? start : tmp0_elvis_lhs;
  if (!(start == null) && !(stop == null)) {
    if (stop.e1e() < start.e1e()) {
      return createRangeWithIndex(start, start);
    } else if (stop.e1e() === start.e1e() && stop.l29() <= start.l29()) {
      return createRangeWithIndex(start, start);
    }
  }
  var position = getPositionSafe(ctx);
  var startPosition = position == null ? null : position.z2l_1;
  if (start == null && startPosition == null) {
    throw NullPointerException.rc('Start position cannot be null');
  }
  if (stop == null) {
    throw NullPointerException.rc('Stop position cannot be null');
  }
  var stopPosition = furthestPoint(start, stop);
  var tmp3_elvis_lhs = start == null ? null : start.g1e();
  var startIndex = tmp3_elvis_lhs == null ? 0 : tmp3_elvis_lhs;
  // Inline function 'kotlin.comparisons.maxOf' call
  var a = stop.p29() - 1 | 0;
  var endIndex = Math.max(a, startIndex);
  var tmp5_elvis_lhs = start == null ? null : start.e1e();
  var tmp;
  if (tmp5_elvis_lhs == null) {
    tmp = startPosition == null ? null : startPosition.o2l_1;
  } else {
    tmp = tmp5_elvis_lhs;
  }
  var tmp7_elvis_lhs = tmp;
  var tmp_0;
  if (tmp7_elvis_lhs == null) {
    throw NullPointerException.rc('Line cannot be null');
  } else {
    tmp_0 = tmp7_elvis_lhs;
  }
  var startLine = tmp_0;
  var tmp_1 = start == null ? null : start.l29();
  var tmp10_elvis_lhs = minByWithNulls([tmp_1, startPosition == null ? null : startPosition.p2l_1]);
  var tmp_2;
  if (tmp10_elvis_lhs == null) {
    throw NullPointerException.rc('Start column cannot be null');
  } else {
    tmp_2 = tmp10_elvis_lhs;
  }
  var startColumn = tmp_2;
  var stopLine = stop.e1e();
  var tmp11_elvis_lhs = maxByWithNulls([stop.l29(), stopPosition.p2l_1, furthestChar(start, stop)]);
  var tmp_3;
  if (tmp11_elvis_lhs == null) {
    throw NullPointerException.rc('stop column cannot be null');
  } else {
    tmp_3 = tmp11_elvis_lhs;
  }
  var stopColumn = tmp_3;
  var tmp12_start = new PositionImpl(startLine - 1 | 0, startColumn);
  var tmp13_end = new PositionImpl(stopLine - 1 | 0, sub1OrZero(stopColumn));
  return new RangeWithIndexImpl(tmp12_start, tmp13_end, startIndex, endIndex, parserIndex);
}
function createRangeWithIndex_2(start, stop, startIndex, stopIndex, parserIndex) {
  var stopNotNull = ensureNotNull(furthestPoint_0([stop, start]));
  // Inline function 'kotlin.comparisons.maxOf' call
  var tmp0_endIndex = Math.max(stopIndex, startIndex);
  var tmp1_start = new PositionImpl(start.o2l_1 - 1 | 0, start.p2l_1);
  var tmp = stopNotNull.o2l_1 - 1 | 0;
  var tmp_0;
  if (stopNotNull.o2l_1 === start.o2l_1) {
    var tmp2 = start.p2l_1;
    // Inline function 'kotlin.comparisons.maxOf' call
    var c = stopNotNull.p2l_1;
    tmp_0 = Math.max(0, tmp2, c);
  } else {
    tmp_0 = stopNotNull.p2l_1;
  }
  var tmp2_end = new PositionImpl(tmp, sub1OrZero(tmp_0));
  return new RangeWithIndexImpl(tmp1_start, tmp2_end, startIndex, tmp0_endIndex, parserIndex);
}
function toPosition(_this__u8e3s4) {
  return new PositionImpl(_this__u8e3s4.e1e() - 1 | 0, _this__u8e3s4.l29());
}
function maxByWithNulls(values) {
  return maxOrNull(filterNotNull(values));
}
function sub1OrZero(_this__u8e3s4) {
  var tmp;
  if (_this__u8e3s4 > 0) {
    tmp = _this__u8e3s4 - 1 | 0;
  } else {
    tmp = 0;
  }
  return tmp;
}
function furthestPoint(start, end) {
  var tmp = start == null ? null : start.y29();
  var tmp_0 = start == null ? null : start.z29();
  var tmp_1 = end == null ? null : end.z29();
  var tmp4_elvis_lhs = furthestPoint_0([tmp, tmp_0, tmp_1, end == null ? null : end.y29()]);
  var tmp_2;
  if (tmp4_elvis_lhs == null) {
    throw NullPointerException.rc('No valid point data found in tokens');
  } else {
    tmp_2 = tmp4_elvis_lhs;
  }
  return tmp_2;
}
function minByWithNulls(values) {
  return minOrNull(filterNotNull(values));
}
function furthestChar(start, end) {
  var tmp;
  if (!(start == null)) {
    var tmp_0 = start.e1e();
    tmp = tmp_0 === (end == null ? null : end.e1e());
  } else {
    tmp = false;
  }
  if (tmp) {
    var tmp0_safe_receiver = start.j1f();
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.length;
    if (tmp1_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      return start.l29() + tmp1_safe_receiver | 0;
    }
  }
  return furthestPoint(start, end).p2l_1;
}
function furthestPoint_0(points) {
  var pointsNotNull = filterNotNull(points);
  if (pointsNotNull.u()) {
    return null;
  }
  if (pointsNotNull.b2() === 1) {
    return points[0];
  }
  var currentPoint = first(pointsNotNull);
  var _iterator__ex2g4s = drop(pointsNotNull, 1).w();
  $l$loop_0: while (_iterator__ex2g4s.x()) {
    var point = _iterator__ex2g4s.y();
    if (point.o2l_1 < currentPoint.o2l_1) {
      continue $l$loop_0;
    }
    if (point.o2l_1 > currentPoint.o2l_1) {
      currentPoint = point;
      continue $l$loop_0;
    }
    if (point.p2l_1 > point.p2l_1) {
      currentPoint = point;
    }
  }
  return currentPoint;
}
function getPositionSafe(_this__u8e3s4) {
  var tmp0_elvis_lhs = _this__u8e3s4.m2j_1;
  var tmp;
  if (tmp0_elvis_lhs == null) {
    return null;
  } else {
    tmp = tmp0_elvis_lhs;
  }
  var start = tmp;
  var tmp_0;
  try {
    tmp_0 = _this__u8e3s4.l2k();
  } catch ($p) {
    var tmp_1;
    if ($p instanceof Error) {
      var _unused_var__etf5q3 = $p;
      var tmp_2;
      try {
        tmp_2 = new Position(start.y29(), start.y29());
      } catch ($p) {
        var tmp_3;
        if ($p instanceof Exception) {
          var _unused_var__etf5q3_0 = $p;
          tmp_3 = null;
        } else {
          throw $p;
        }
        tmp_2 = tmp_3;
      }
      tmp_1 = tmp_2;
    } else {
      throw $p;
    }
    tmp_0 = tmp_1;
  }
  return tmp_0;
}
//region block: exports
export {
  createRangeWithIndex as createRangeWithIndex2umy9z6lmr4x5,
  createRangeWithIndex_0 as createRangeWithIndex2mpmkqep4py0,
  textRangeWithParserIndex_0 as textRangeWithParserIndex2sxew2szt3dph,
  textRangeWithParserIndex as textRangeWithParserIndexq8m48uz68v6b,
  textRangeWithoutParserIndex_0 as textRangeWithoutParserIndex1h0kvk8z7p0gw,
  textRangeWithoutParserIndex as textRangeWithoutParserIndex27xhvtbzym3hy,
  toPosition as toPosition1alpxtfrc25ux,
  toRange as toRange2n8yjdn6de8h1,
  get_trueText as get_trueTextdqjovul8om4s,
};
//endregion

//# sourceMappingURL=common-ast-antlr.mjs.map
