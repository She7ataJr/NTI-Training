// // var month = prompt("enter any number")
// // switch (month){
// //     case "1":
// //         console.log("jan")
// //     break;
// //     case "2":
// //         console.log("feb")
// //     break;
// //     case "3":
// //     console.log("Mar")
// //     break;
// //     case "4":
// //     console.log("Apr")
// //     break;
// //     case "5":
// //     console.log("may")
// //     break;
// //     case "6":
// //     console.log("June")
// //     break;
// //     case "7":
// //     console.log("Jul")
// //     break;
// //     case "8":
// //     console.log("Aug")
// //     break;
// //     case "9":
// //     console.log("Sep")
// //     break;
// //     case "10":
// //     console.log("Oct")
// //     break;
// //     case "11":
// //         console.log("Nov")
// //         break;
// //      case "12":
// //         console.log("Dec")
// //         break;

// // }
// // var startNum=prompt('start number')
// // var endNum =prompt('enter end num')
// // var contNum=prompt('cont num')
// // var breakNum=prompt('break num')

// function looping(startNum, endNum, contNum, breakNum) {
//   if (
//     startNum == undefined ||
//     endNum == undefined ||
//     contNum == undefined ||
//     breakNum == undefined
//   ) {
//     console.log("enter a valid number")
//   }else {
//     for (var i = startNum; i < endNum; i++) {
//         if (i == contNum) continue;
//         else if (i == breakNum) break;
//         else console.log(i);
//       }
//   }
  
// }
// looping(0,8,8,5);



let users=[]

function numberOfUsers(){
  let usersNumber = prompt("enter a number of users ")
  for (let i =0; i < usersNumber ; i++) {
   addUser()
  }
}


function addUser(){
  let user={
    id : prompt("id"),
    name : prompt("name"),
    balance : prompt('Balance')
  }
  
  users.push(user)
 
}
numberOfUsers()

let editUserBalanceById = function(){
  let id =prompt('search by id')
  let newBalance = prompt("enter new balance")
 let index =  users.findIndex(item=>item.id == id)
users[index].balance = newBalance
}
// editUserBalanceById()


var deleteUser = function(){
 deletedID=prompt("The ID you wnat to delet")
let index =  users.findIndex(item=>item.id == deletedID)
users.splice(index ,1)
}
deleteUser()

console.table(users)
 

function element (item , index , arr){
  console.table(item)
return item.id== deletedID
}

// let info = (num)=>{
//     return num * num
// }

// info(3)

// let info = num => num * num