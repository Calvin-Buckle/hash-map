class hashMap{
    constructor(key,value){
        this.key = key;
        this.value = value
    }

     stringToNumber(string) {
            let hashCode = 0;
          
            const primeNumber = 31;
            for (let i = 0; i < string.length; i++) {
              hashCode = primeNumber * hashCode + string.charCodeAt(i);
            }
          
            return hashCode;
          }


 set(key,value){

 }

get(key){

}

has(key){

}







}