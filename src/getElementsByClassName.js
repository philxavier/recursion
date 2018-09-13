// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {

  var results = [];
  function recur(x) {
    if(x.classList && x.classList.contains(className)) {
      results.push(x)
    }
    if(x.childNodes.length > 0) {
      for (var i = 0; i <x.childNodes.length; i++) {
        recur(x.childNodes[i])
      }
    }
  }
  recur(document.body)
  return results;
};
