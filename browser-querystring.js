(function (root) {
  'use strict';

  const BQS = (root.BQS = root.BQS || {});

  const SEP = '&';
  const EQ = '=';

  BQS.parse = function (qs) {
    if (!isStr(qs)) {
      throw new TypeError('Need a string');
    }

    if (stringIsEmpty(qs)) {
      return {};
    }

    const qsDecoded = decodeURIComponent(qs);
    const qsMapped = qsDecoded
      .split(SEP)
      .map(mapQsItem)
      .reduce(joinQs, {});

    return qsMapped;
  };

  function mapQsItem (qsItem) {
    const [ prop, value ] = qsItem.split(EQ);
    const obj = {
      [prop]: value
    };

    return obj;
  }

  function joinQs (previous, next) {
    return Object.assign({}, previous, next);
  }

  function stringIsEmpty (str) {
    return str.length === 0;
  }

  function isStr (str) {
    return typeof str === 'string' || str instanceof String;
  }
})(window);
