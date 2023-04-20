function transformString(inputString) {
  const transformedString = inputString
    .split("")
    .map((symbol, index) => {
      const repeatedSymbol = symbol.repeat(index + 1);
      return repeatedSymbol.charAt(0).toUpperCase() + repeatedSymbol.slice(1);
    })
    .join("-");

  return transformedString;
}


console.log(transformString("ab")); 
console.log(transformString("abc")); 
console.log(transformString("dkjb")); 