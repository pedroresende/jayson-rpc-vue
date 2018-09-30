'use strict';

import jayson from 'jayson/lib/client';

export default {
  install: function(Vue, options, ssl) {
    var client = ssl ? jayson.https(options) : jayson.http(options);
    Object.defineProperty(Vue.prototype, '$JaysonRPC', { value: client });
  }
};
