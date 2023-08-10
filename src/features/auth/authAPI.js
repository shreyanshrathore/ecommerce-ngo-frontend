import { isRejected } from "@reduxjs/toolkit";

export function createUser(userdata) {
  return new Promise(async (resolve) =>{
    const response = await fetch('http://localhost:8080/users', {
      method: "POST",
      body: JSON.stringify(userdata),
      headers: {"content-type":"application/json"}
    }) 
    const data = await response.json()
    resolve({data})
  }
  );
}


export function checkUser(loginInfo) {
  return new Promise(async (resolve, reject) =>{
    const email = loginInfo.email;
    const password = loginInfo.password;
    const response = await fetch('http://localhost:8080/users?email='+email)
    const data = await response.json()
    console.log(data);
    if(data.length){
      if(password == data[0].password){
        console.log("hit1")
        resolve({data:data[0]})
      }
      else{
        console.log("hit2")
        reject('Wrong credentials')
      }
    }else{
      console.log("hit3")
      reject({message: 'User not found!'})
    }
  }
  );
}



export function updateUser(user) {
  return new Promise(async (resolve) =>{
    const response = await fetch('http://localhost:8080/users/' + user.id, {
      method: "PUT",
      body: JSON.stringify(user),
      headers: {"content-type":"application/json"}
    }) 
    const data = await response.json()
    resolve({data})
  }
  );
}