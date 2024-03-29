export function fetchAllProducts() {
  return new Promise(async (resolve) =>{
    //TODO: we will not hard-code server URL here
    const response = await fetch('http://localhost:8000/products') 
    const data = await response.json()
    resolve({data})
  }
  );
}


export function fetchProductByAdmin() {
  return new Promise(async (resolve) => {
    // TODO: we will not hard-code server URL here
    const response = await fetch('http://localhost:8000/products/get');
    const data = await response.json();
    console.log(data);
    resolve({ data });
  });
}




export function createProduct(product) {
  return new Promise(async (resolve) =>{
    //TODO: we will not hard-code server URL here
    const response = await fetch('http://localhost:8000/products/add',{
      method: 'POST',
      body: JSON.stringify(product),
      headers: {'content-type': 'application/json'}
    }) 
    const data = await response.json()
    resolve({data})
  }
  );
}


export function updateProduct(product, ) {
  return new Promise(async (resolve) =>{
    //TODO: we will not hard-code server URL here
    const response = await fetch('http://localhost:8000/products/add'+product.id,{
      method: 'PUT',
      body: JSON.stringify(product),
      headers: {'content-type': 'application/json'}
    }) 
    const data = await response.json()
    resolve({data})
  }
  );
}


export function deleteProduct(id ) {
  return new Promise(async (resolve) =>{
      const response = await fetch('http://localhost:8000/products/'+id , {
        method: "DELETE",
        headers: {"content-type":"application/json"}
      }) 
    const data = await response.json()
    resolve({data: {id: id}})
  }
  );
}






export function fetchProductById(id) {
  return new Promise(async (resolve) =>{
    //TODO: we will not hard-code server URL here
    const response = await fetch("http://localhost:8000/products/" + id) 
    const data = await response.json()
    resolve({data})
  }
  );
}

export function fetchProductReq() {
  return new Promise(async (resolve) =>{
    //TODO: we will not hard-code server URL here
    const response = await fetch("http://localhost:8000/products/req") 
    const data = await response.json()
    resolve({data})
  }
  );
}

export function fetchProductsByFilters(filter,sort,pagination) {
  // filter = {"category":["smartphone","laptops"]}
  // sort = {_sort:"price",_order="desc"}
  // pagination = {_page:1,_limit=10} 
  // TODO : on server we will support multi values in filter
  let queryString = '';
  for(let key in pagination){
    queryString += `${key}=${pagination[key]}&`
  }
  for(let key in filter){
    const categoryValues = filter[key];
    if(categoryValues.length){
      const lastCategoryValue = categoryValues[categoryValues.length-1]
      queryString += `${key}=${lastCategoryValue}&`
    }
  }
  for(let key in sort){
    queryString += `${key}=${sort[key]}&`
  }
 


  return new Promise(async (resolve) =>{
    //TODO: we will not hard-code server URL here
    const response = await fetch('http://localhost:8000/products?'+queryString) 
    const data = await response.json()
    const totalItems = await response.headers.get('X-Total-Count')
    resolve({data:{products:data,totalItems:+totalItems}})
  }
  );
}


export function fetchCategories() {
  return new Promise(async (resolve) =>{
    const response = await fetch('http://localhost:8000/category') 
    const data = await response.json()
    resolve({data})
  }
  );
}

export function approveProduct(id) {
  return new Promise(async (resolve) =>{
    const response = await fetch('http://localhost:8000/products/approve/'+id , {
      method: "PUT",
      headers: {"content-type":"application/json"}
    }) 
    const data = await response.json()
    resolve({data})
  }
  );
}

export function fetchBrands() {
  return new Promise(async (resolve) =>{
    const response = await fetch('http://localhost:8000/brands') 
    const data = await response.json()
    resolve({data})
  }
  );
}
