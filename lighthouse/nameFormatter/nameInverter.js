const nameInverter = function(name) {
if (name === undefined) {
  return 'Error';
}
  if(name.trim() === "") {
  return "";
} else {
  const names = name.trim().split(/\s+/);
  const honNames = ["Dr.", "Ms.", "Mrs.", "Mr."];
    for(hon of honNames)
    if(names.length === 1 && hon === names[0]) {
      return "";
    } else if (names.length === 1 && hon !== names[0]) {
      return names[0];
    } else if (names[0] === hon && names.length === 2) {
      return `${names[0]} ${names[1]}`
    } else if (names.length === 2 && names[0] !== hon) {
      return `${names[1]}, ${names[0]}`
    } else {
      return `${names[0]} ${names[2]}, ${names[1]}`
    }
  }
}
console.log(nameInverter(""))
console.log(nameInverter("Shawn He"))
console.log(nameInverter(" Dr. Shawn He"))
console.log(nameInverter(" Dr. Shawn"))
console.log(nameInverter("undefined"));

module.exports = nameInverter;