'use strict';

import jayson from 'jayson/lib/client';

export default {
  install: function(Vue, url = url, ssl = false) {
    let client = jayson.http({
      host: url
    });
    if (ssl) {
      client = jayson.https({
        host: url
      });
    }

    Object.defineProperty(Vue.prototype, '$JaysonRPC', { value: client });
  }
};
