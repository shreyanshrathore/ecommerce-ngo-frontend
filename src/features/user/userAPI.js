export function fetchLoggedInUser(userId) {
  return new Promise(async (resolve) =>{
    const response = await fetch('http://localhost:8080/users/' + userId) 
    const data = await response.json()
    resolve({data})
  }
  );
}



export function fetchLoggedInUserOrders(userId) {
  return new Promise(async (resolve) =>{
    const response = await fetch('http://localhost:8080/orders/?user.id=' + userId) 
    const data = await response.json()
    resolve({data})
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