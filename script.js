
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


set(value){
let index = stringToNumber(value);
this.table[index] = value;
}

get(key){
let value = this.table[key];
return value;
}

has(key){
if(this.table[key])
{return true}
else{
  return false;
}
}


remove(key){
  this.table.splice(key)

}

length(table){
let count = 0
this.table.forEach((key) => (count++))
return count;
}


clear(){
  while(this.table.length > 0) {
    this.table.pop();
}
}



keys(){
  let array2 = []
this.table.forEach((key) => array2.push(stringToNumber(key)));
return array2;

}




values(){
  let array2 = []
  this.table.forEach((key) => array2.push(key));
  return array2;

}





}














  