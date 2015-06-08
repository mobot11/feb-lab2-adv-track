var myArray = ['cat', 'dog', 'mouse', 'hamster']
function lastLetterSort(stringArray) {
  function byLastLetter(a, b) {
    firstLetter = a.charAt(a.length-1);
    secondLetter = b.charAt(b.length-1);
    if (firstLetter < secondLetter)
      return -1;
    if (firstLetter > secondLetter)
      return 1;
    return 0;
  }
 return stringArray.sort(byLastLetter);
}


console.log(lastLetterSort(myArray));
//TODO: implement me. sort the strings in alphabetical
    // order using their last letter
    // Read this about how the sort function works:
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
    // this byLastLetter function is a "compare function"
    // And check out the "comparing strings" section  here:
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
