
function plugin (Vue, options = {}) {
  const modelableTagRE = /^input|textarea?$/

  function assignByPath(obj, key, value) {
    let keys = key.split(".");
    let last = keys.pop();
    keys.forEach(key => {
        if(!obj[key])
            obj[key] = {};
        obj = obj[key];
    });

    obj[last] = value;
  }

  function getByPath(obj, key) {
    let keys = key.split(".");
    let last = keys.pop();
    keys.forEach(key => {
        if(!obj[key])
            obj[key] = {};
        obj = obj[key];
    });

    return obj[last]
  }

  Vue.directive('ime-model', {
    inserted (el, binding, vnode) {
  	  if (!modelableTagRE.test(vnode.tag)) {
        console.log(
          `v-ime-model is not supported on element type: <${vnode.tag}>. `,
          vnode.context
        )
      }
  
  	  function watchForExpression() {
        return vnode.context.$watch(binding.expression, function() {
          el.value = getByPath(vnode.context.$data, binding.expression)
        })
      }
  	  var unwatch = watchForExpression()
      el.addEventListener('input', function(e) {
        if (unwatch != null) {
          unwatch()
          unwatch = null
        }

        assignByPath(vnode.context.$data, binding.expression, el.value)
        if (unwatch == null) {
      	  unwatch = watchForExpression()
        }
      })
      el.value = getByPath(vnode.context.$data, binding.expression)
    }
  })
}

plugin.version = '__VERSION__'

export default plugin

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(plugin)
}
