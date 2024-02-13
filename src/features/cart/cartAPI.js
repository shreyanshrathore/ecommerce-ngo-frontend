export function addToCart(item) {
  return new Promise(async (resolve) => {
    const response = await fetch('http://localhost:8000/cart', {
      method: 'POST',
      body: JSON.stringify(item),
      headers: { 'content-type': 'application/json' },
    });
    const data = await response.json();
    // TODO: on server it will only return some info of user (not password)
    resolve({ data });
  });
}


export function fetchItemsByUserId() {
  return new Promise(async (resolve) =>{
    //TODO: we will not hard-code server URL here
    const response = await fetch('http://localhost:8000/cart')
    const data = await response.json()
    resolve({data})
  }
  );
}



export function updateCart(update) {
  return new Promise(async (resolve) => {
    const response = await fetch('http://localhost:8000/cart/' + update.id, {
      method: 'PATCH',
      body: JSON.stringify(update),
      headers: { 'content-type': 'application/json' },
    });
    const data = await response.json();
    // TODO: on server it will only return some info of user (not password)
    resolve({ data });
  });
}

export function deleteItem(id ) {
  return new Promise(async (resolve) =>{
    const response = await fetch('http://localhost:8000/cart/'+id , {
      method: "DELETE",
      headers: {"content-type":"application/json"}
    }) 
    const data = await response.json()
    resolve({data: {id: id}})
  }
  );
}


export async function resetCart( ) {
  return new Promise(async (resolve) =>{
    const response = await fetchItemsByUserId()
    const items = response.data
    
    for (let i of items){
      deleteItem(i.id)
    }
    resolve({status: "Success!"})
  })

}