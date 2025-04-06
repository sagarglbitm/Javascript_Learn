
// Currying is an advanced technique to transform a function of n arguments , to n functions of one or fewer arguments
function add (a) {
    return function(b){
      return a + b;
    }
  }
  
   console.log(add(3)(4) )


  //  by arrow function
   const sum = (a) => (b) => (c) => a + b + c;
console.log(sum(2)(3)(4)); // 9