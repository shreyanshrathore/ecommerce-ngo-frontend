export function fetchLoggedInUserOrders() {
  return new Promise(async (resolve) =>{
    const response = await fetch('http://localhost:8000/orders/') 
    const data = await response.json()
    resolve({data})
  }
  );
}


export function fetchLoggedInUser() {
  return new Promise(async (resolve) =>{
    const response = await fetch('http://localhost:8000/user/check', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
    }
    ) 
    const data = await response.json()
    resolve({data})
  }
  );
}

export function fetchLoggedInAdmin() {
  return new Promise(async (resolve) =>{
    const response = await fetch('http://localhost:8000/admin/check', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
    }
    ) 
    const data = await response.json()
    resolve({data})
  }
  );
}

export function updateUser(update) {
  return new Promise(async (resolve) => {
    const response = await fetch('http://localhost:8000/user/', {
      method: 'PUT',
      body: JSON.stringify(update),
      headers: { 'content-type': 'application/json' },
    });
    const data = await response.json();
    // TODO: on server it will only return some info of user (not password)
    resolve({ data });
  });
}


