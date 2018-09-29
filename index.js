'use strict';

import jayson from 'jayson/lib/client';

export default {
  install: function(Vue, options = options, ssl = false) {
    let client = jayson.http(options);
    if (ssl) {
      client = jayson.https(options);
    }

    Object.defineProperty(Vue.prototype, '$JaysonRPC', { value: client });
  }
};
