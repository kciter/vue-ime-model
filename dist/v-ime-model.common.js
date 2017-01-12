/*!
 * v-ime-model v1.0.0 
 * (c) 2017 Lee Sun-Hyoup
 * Released under the MIT License.
 */
'use strict';

function plugin (Vue, options) {
  if ( options === void 0 ) options = {};

  var modelableTagRE = /^input|textarea?$/;

  function assignByPath(obj, key, value) {
    var keys = key.split(".");
    var last = keys.pop();
    keys.forEach(function (key) {
        if(!obj[key])
            { obj[key] = {}; }
        obj = obj[key];
    });

    obj[last] = value;
  }

  function getByPath(obj, key) {
    var keys = key.split(".");
    var last = keys.pop();
    keys.forEach(function (key) {
        if(!obj[key])
            { obj[key] = {}; }
        obj = obj[key];
    });

    return obj[last]
  }

  Vue.directive('ime-model', {
    inserted: function inserted (el, binding, vnode) {
  	  if (!modelableTagRE.test(vnode.tag)) {
        console.log(
          ("v-ime-model is not supported on element type: <" + (vnode.tag) + ">. "),
          vnode.context
        );
      }
  
  	  function watchForExpression() {
        return vnode.context.$watch(binding.expression, function() {
          el.value = getByPath(vnode.context.$data, binding.expression);
        })
      }
  	  var unwatch = watchForExpression();
      el.addEventListener('input', function(e) {
        if (unwatch != null) {
          unwatch();
          unwatch = null;
        }

        assignByPath(vnode.context.$data, binding.expression, el.value);
        if (unwatch == null) {
      	  unwatch = watchForExpression();
        }
      });
      el.value = getByPath(vnode.context.$data, binding.expression);
    }
  });
}

plugin.version = '__VERSION__';

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(plugin);
}

module.exports = plugin;
