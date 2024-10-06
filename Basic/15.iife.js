 

//  Immediately invoked function expression (IIFE)


(function chai(){

    // named IIFE
    console.log("DB Connected")
}) ();  
//  it is nedd that function is wraped under () bracket and also call with( ) end with;semi-colomn

((name)=>{
    console.log("DB Connected Two" ,name)
}) ( "sagar");
