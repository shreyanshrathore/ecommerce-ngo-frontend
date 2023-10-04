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



export function createNgoRequest(userdata) {
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

export function fetchNgoRequest() {
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

export function createNgoAdmin(userdata) {
  userdata.role = "admin";
  return new Promise(async (resolve) =>{
    console.log(userdata);
    const response = await fetch('http://localhost:8080/admin', {
      method: "POST",
      body: JSON.stringify(userdata),
      headers: {"content-type":"application/json"}
    }) 
    const data = await response.json()
    resolve({data})
  }
  );
}


export function fetchNgoAdmin() {
  return new Promise(async (resolve) =>{
    const response = await fetch('http://localhost:8080/admin', {
      method: "GET",
    }) 
    const data = await response.json()
    resolve({data})
  }
  );
}






export async function checkUser(loginInfo) {
  const email = loginInfo.email;
  const password = loginInfo.password;

  // Check the "users" endpoint
  const usersResponse = await fetch('http://localhost:8080/users?email=' + email);
  const usersData = await usersResponse.json();

  // Check the "admin" endpoint
  const adminResponse = await fetch('http://localhost:8080/admin?email=' + email);
  const adminData = await adminResponse.json();

  if (usersData.length > 0) {
    // User with the provided email exists in the "users" endpoint
    if (password === usersData[0].password) {
      return { data: usersData[0], userType: 'user' };
    } else {
      throw new Error('Wrong credentials');
    }
  } else if (adminData.length > 0) {
    // User with the provided email exists in the "admin" endpoint
    if (password === adminData[0].password) {
      return { data: adminData[0], userType: 'admin' };
    } else {
      throw new Error('Wrong credentials');
    }
  } else {
    throw new Error('User not found!');
  }
}



export function signOut(userdata) {
  return new Promise(async (resolve) =>{

    resolve({data: "Success"})
  }
  );
}
