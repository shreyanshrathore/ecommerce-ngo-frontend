export function addToCart(items) {
  return new Promise(async (resolve) =>{
    const response = await fetch('http://localhost:8080/cart', {
      method: "POST",
      body: JSON.stringify(items),
      headers: {"content-type":"application/json"}
    }) 
    const data = await response.json()
    resolve({data})
  }
  );
}



export function fetchItemsByUserId(user) {
  return new Promise(async (resolve) =>{
    //TODO: we will not hard-code server URL here
    console.log('http://localhost:8080/cart?user='+user) 
    const response = await fetch('http://localhost:8080/cart?user='+user) 
    const data = await response.json()
    resolve({data})
  }
  );
}



export function updateItem(cart ) {
  return new Promise(async (resolve) =>{
    const response = await fetch('http://localhost:8080/cart/'+cart.id , {
      method: "PUT",
      body: JSON.stringify(cart),
      headers: {"content-type":"application/json"}
    }) 
    const data = await response.json()
    resolve({data})
  }
  );
}


export function deleteItem(id ) {
  return new Promise(async (resolve) =>{
    const response = await fetch('http://localhost:8080/cart/'+id , {
      method: "DELETE",
      headers: {"content-type":"application/json"}
    }) 
    const data = await response.json()
    resolve({data: {id: id}})
  }
  );
}


export async function resetCart(userId ) {
  return new Promise(async (resolve) =>{
    const response = await fetchItemsByUserId(userId)
    const items = response.data
    
    for (let i of items){
      deleteItem(i.id)
    }
    resolve({status: "Success!"})
  })

}