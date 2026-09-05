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
     .catch(err => console.log(err))




