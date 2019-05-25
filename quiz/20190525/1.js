(function() {
  'use strict';
  const func = () => {
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
      sum += arguments[i];
    }
    console.log(sum);
  };
  func(1, 2, 3);
})();
