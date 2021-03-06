'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

(function (root) {
  'use strict';

  var BQS = root.BQS = root.BQS || {};

  var SEP = '&';
  var EQ = '=';

  BQS.parse = function (qs) {
    if (!isStr(qs)) {
      throw new TypeError('Need a string');
    }

    if (stringIsEmpty(qs)) {
      return {};
    }

    var qsDecoded = decodeURIComponent(qs);
    var qsMapped = qsDecoded.split(SEP).map(mapQsItem).reduce(joinQs, {});

    return qsMapped;
  };

  function mapQsItem(qsItem) {
    var _qsItem$split = qsItem.split(EQ),
        _qsItem$split2 = _slicedToArray(_qsItem$split, 2),
        prop = _qsItem$split2[0],
        value = _qsItem$split2[1];

    var obj = _defineProperty({}, prop, value);

    return obj;
  }

  function joinQs(previous, next) {
    return Object.assign({}, previous, next);
  }

  function stringIsEmpty(str) {
    return str.length === 0;
  }

  function isStr(str) {
    return typeof str === 'string' || str instanceof String;
  }
})(window);