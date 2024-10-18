
// A callback function is a function that is passed as an argument to another function and is executed after
//  the completion of that function



// Higher-order functions: The function that takes a callback as an argument is called a higher-order function
// frtchdata function is high order function
function fetchData(callback) {
    setTimeout(() => {
      console.log("Data fetched");
      callback();
    }, 1000);
  }
  
  function processData() {
    console.log("Processing data...");
  }
  
  fetchData(processData);
  