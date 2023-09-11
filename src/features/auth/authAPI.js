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



export function createNGO(userdata) {
  return new Promise(async (resolve) =>{
    const response = await fetch('http://localhost:8080/ngo', {
      method: "POST",
      body: JSON.stringify(userdata),
      headers: {"content-type":"application/json"}
    }) 
    const data = await response.json()
    console.log("DONE!!!")
    resolve({data})
  }
  );
}

export function fetchNGO() {
  return new Promise(async (resolve) =>{
    const response = await fetch('http://localhost:8080/ngo') 
    const data = await response.json()
    resolve({data})
  }
  );
}

export function deleteNgoRequest(id) {
  return new Promise(async (resolve) =>{
    const response = await fetch('http://localhost:8080/ngo/'+ id, {
      method: "DELETE",
      headers: {"content-type":"application/json"}
    }) 
    const data = await response.json()
    console.log("DONE!!!")
  }
  );
}





export function checkUser(loginInfo) {
  return new Promise(async (resolve, reject) =>{
    const email = loginInfo.email;
    const password = loginInfo.password;
    const response = await fetch('http://localhost:8080/users?email='+email)
    const data = await response.json()
    if(data.length){
      if(password == data[0].password){
        resolve({data:data[0]})
      }
      else{
        reject('Wrong credentials')
      }
    }else{
      reject({message: 'User not found!'})
    }
  }
  );
}



export function signOut(userdata) {
  return new Promise(async (resolve) =>{

    resolve({data: "Success"})
  }
  );
}
