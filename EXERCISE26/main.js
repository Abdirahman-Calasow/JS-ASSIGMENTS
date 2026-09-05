//  function getData(){
//     setTimeout(()=>{
//         alert("waa blocking ee fasax")
// console.log( "shaqadi malin nimada wa dhmatay" )
//     },2000)
//  }


//  console.log("soo daabac")

//  console.log( getData());
//  console.log("fariintan waa ku daba socon doonta ilaa aad daily routine ka sameyso")


function delayNonBlocking(callback) {
    setTimeout(() => {
        callback("Non-blocking delay completed!");
    }, 2000);
}

console.log("Start non-blocking delay...");
delayNonBlocking((message) => {
    console.log(message);
});
console.log("This message is not blocked and runs immediately.");
