const jsonfinder = {
  All: function (obj, keyname) {
    let result = []
    const mergeArray = (s1, s2) => result = [...s1, ...s2];
    if (Array.isArray(obj)) {
      obj.forEach(o => {
        mergeArray(result, jsonfinder.All(o, keyname))
      })
    } else {
      if (typeof obj === 'object') {
        Object.keys(obj).forEach(k => {
          if (k === keyname) {
            result.push(obj[k])
          }
          if (obj[k] !== undefined && obj[k] !== null)
            mergeArray(result, jsonfinder.All(obj[k], keyname))
        })
      }
    }
    return result
  }
};

module.exports = jsonfinder;