// raccourci pour document.getElementById()
// var maDiv = byId('photoBox');

function byId(elementId){
  if(typeof elementId != "string"){
    console.log('erreur : elementId doit être uen chaîne de caractères');
    return null;
  }
  return document.getElementById(elementId);
}
// raccourci pour document.getElementByClassName(...)
//le 2nd paramètre est facultatif : si il est fourni
function byClass(className, atIndex){
  var elements = document.getElementByClassName(className);
  var tElements = Array.prototype.slice.call(elements);
  return (atIndex != null) ? tElements[atIndex] : tElements;
}
function byTag(){

}
function addClass(){

}
function removeClass(){

}
