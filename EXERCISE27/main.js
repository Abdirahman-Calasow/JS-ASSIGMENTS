function fetchWithPromise(){
     return new Promise((resolve , reject)=>{
        setTimeout(()=>{
            const succ =true;
            if (succ){
                resolve("data fetch succ")
            }else{
                reject("feild to fetch data")
            }
        },2000)

    });
}
 
    fetchWithPromise()
     .then (mess=> console.log(mess))


// function fetchDataWithPromise() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const success = true; // You can change this to false to simulate a failure
//             if (success) {
//                 resolve("Data fetched successfully!");
//             } else {
//                 reject("Failed to fetch data.");
//             }
//         }, 2000);
//     });
// }

// fetchDataWithPromise();
//     .then(message => console.log(message))
