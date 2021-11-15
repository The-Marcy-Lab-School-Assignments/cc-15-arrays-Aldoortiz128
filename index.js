//write your code here
function findLongestWord(array) {
    let longest = '';
    let length = 0;

for (let i = 0; i <array.length; i++) {
    if (array[i].length > longest.length) {longest = array[i]}

}
return longest;
}
    
console.log(findLongestWord(["The","quick","brown", "fox", "jumped", "over", "the", "lazy", "dog"]))