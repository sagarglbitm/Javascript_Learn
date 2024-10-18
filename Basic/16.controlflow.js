const month = "march";

switch (month) {
    case "jan":
        console.log("january")
        break;
    case "feb":
        console.log("feb")
        break;
    case "march":
        console.log("march")
        break;
    case "april":
        console.log("april")
        break;
    default:
        console.log("No match month")
        break;

}
// ---------------------Truthy and  falsy value-----------------------------------------
 
// falsy value= false,0,-0,0n,null,undefined,NaN,""

// truthy value="0","false"," ",[],{},function(){}


// const userEmail=""
const userEmail=[]
if(userEmail){
    console.log("user email get")
}
else{
    console.log("not found email")
}

// --------------------------nullish coalescing operator(??):null,undefined---------------------

let val;
//  val=4??10
//  console.log(val) //20

//  val =null??20
//  console.log(val) //10
 
val =undefined??21
 console.log(val) //210

 

