# JAYSON-RPC Vue.js integration

## Install

```bash
$ npm install jayson-rpc-vue
```

Open you `main.js` file and add the following

```javascript
import JaysonRPC from 'jayson-rpc-vue'

Vue.use(JaysonRPC, 'URL', https = false);
```

In your .vue file, to make a call just do it using

```javascript
this.$JaysonRPC.request('method_name', ['params'], function(err, response) {
      if (err) throw err;
      console.log(response.result); // 2
});
```
