  
   let num1 =[ 1 , 2 , 3];
    let num2 = [...num1 , 4 , 5 ,6]
    console.log(num2)

    //  exercise 25.2
 console.log("-----------------exercise 25.2-------------------")

    function multply(...numbbers){
      return numbbers.reduce((total,num)=> total*num, 1)

    }
    console.log(multply(24,40,90));