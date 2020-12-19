//First class function 

//A function can stored in a variable

function add(a,b){
    
    let li=a+b

    return li
}

let add2=add

console.log(add2(23,45))

//A function can be stored in object

let obj={a:add}

console.log(obj.a(34,56))

//A function can be stored in Array

let arr=[]

arr.push(add)

console.log(arr[0](34,56))

setTimeout(function(){
    console.log("you will appear after 5sec")
},5000)