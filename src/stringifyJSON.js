// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {

  var result=''

  if(obj === null || obj === undefined){
   obj = null
   return '' + obj + '';
  }
  if(typeof obj === 'number'){
   return '' + obj + '';
  }
  if(typeof obj === 'boolean'){
   return '' + obj + '';
  }
  if(typeof obj === 'string'){
   return ('"' + obj + '"');
  }
  if(Array.isArray(obj) && typeof obj === 'object') {
    result+='['
    for (var i = 0; i < obj.length; i++) {
     if(i !== obj.length-1) {
       result += stringifyJSON(obj[i]) +','
     } else {
       result += stringifyJSON(obj[i])
     }
    }
    result += ']';
  } else {
    result += '{'
    var keys = Object.keys(obj)
    var lastKey = keys[keys.length-1]
    for (var key in obj) {
      if (typeof obj[key] !== 'function' && obj[key] !== undefined) {
        if(key !== lastKey) {
         result += stringifyJSON(key) + ':' + stringifyJSON(obj[key]) +',';
        } else {
          result += stringifyJSON(key) + ':' + stringifyJSON(obj[key]);
        }
      }
    }
    result+='}'
  }
  return result;
};
