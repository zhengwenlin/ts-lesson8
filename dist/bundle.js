(function () {
  'use strict';

  // 类型保护
  // instanceof
  var Cat = /** @class */ (function () {
      function Cat() {
      }
      return Cat;
  }());
  function getInstance(clzz) {
      return new clzz();
  }
  var instance = getInstance(Cat);

}());
//# sourceMappingURL=bundle.js.map
