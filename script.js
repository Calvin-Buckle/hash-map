
function stringToNumber(string) {
  let hashCode = 0;

  const primeNumber = 31;
  for (let i = 0; i < string.length; i++) {
    hashCode = primeNumber * hashCode + string.charCodeAt(i);
  }
  hashCode = hashCode % 16;

  return hashCode;
}



class HashMap{

table = new Array(16)






}














  