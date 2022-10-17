// question 1
// first question give method in object
// let user={
//         name:"jhon",
//         age:30,
//         sayHello:function(){
//             return  `hello ${this.name}`
//         },
//     };
// console.log(user.sayHello());


// second way
// let user={
//     name:"jhon",
//     age:30,
//     sayHello:"",
// }
// let call=user.sayHello.concat("hello jhon");
// // document.write(call);
// console.log(call)


// --------------------
// question 2

// first part




// var Obj = {
//     count: 0,
    
//     increase: function() {  
//      return this.count +=1;   
//     }
// }
// console.log(Obj.increase());
// console.log(Obj.increase());console.log(Obj.increase());





// second part
// var Obj = {
//     count: 10,
    
//     decrease: function() {  
//      return this.count -=1;   
//     }
// }
// console.log(Obj.decrease());
// console.log(Obj.decrease());console.log(Obj.decrease());






// third part
// var Obj = {
//         count: 0,
//         number: 10,
    // increase: function() {  
    //      return this.count +=1;   
    //     }
//     decrease: function() {  
//      return this.number -=1;   
//     },
//         reset: function() {  
//         //  return this.count; 
//         return this.number;
//         }
//     }
//     console.log(Obj.decrease());
//     console.log(Obj.decrease());
//     console.log(Obj.reset());
//     console.log(Obj.increase());
//     console.log(Obj.increase());





//part four
var Obj = {
        count: 0,
        number: 10,
        result:0,
        decrease: function() {  
        return this.number -=1;   
        },
        read:function(){
            for(let i=0;i<this.number.length;i++){
                result+=i;
                return this.result;
            }
        }
    };
    console.log(Obj.decrease());
    console.log(Obj.decrease());
    console.log(Obj.decrease());
    console.log(Obj.decrease());
    console.log(Obj.decrease().read());







// question 3
// create function to givarray of object

// const object=[{
//     name:"negin",
//     age:"22",
// },
// {
//     name:"rahil",
//     age:"52",
// },
// {
//     name:"atena",
//     age:"48",
// },
// {
//     name:"maede",
//     age:"32",
// },
// {
//     name:"narges",
//     age:"44",
// },
// {
//     name:"nadia",
//     age:"62",
// },
// {
//     name:"mohi",
//     age:"20",
// },
// {
//     name:"sara",
//     age:"42",
// },
// {
//     name:"nilia",
//     age:"15",
// }]
// let sort=()=>{
//     let people=object.sort((a,b)=>a.age-b.age);
//     return people;
// }
// console.log(sort());

// second way to solve ex 3

// let input;
// let array=[];
// do{input=prompt("enter user information");
// // console.log(input);
// if(input==""||input==null){
//    break; 
// }
// const index=input.split(",");
// array.push({
//     name:index[0],
//     age:index[1],

// })
// console.log(index);
// }while(input!=null &&input!="");

// let sort=()=>{
//     let people=array.sort((a,b)=>a.age-b.age);
//     return people;
// }
// console.log(sort());



// -------------------

// question 5
// let ask=(question,yes,no)=>{
//     if(confirm(question)) yes();
//     else no();}
//    ask("do you agree",
//      function(){alert("you agreed");},
//     function(){alert("not agreed");}
//    );

// function ask(question,yes,no){
//     if(confirm(question)) yes();
//     else no();
// }
// ask("do you agree",
// function(){alert("you agreed");},
//     function(){alert("not agreed");}
// );

// ----------------------
// question 6 is login



// question7