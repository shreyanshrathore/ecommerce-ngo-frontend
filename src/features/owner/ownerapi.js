export function createNgoRequest(userdata) {
    return new Promise(async (resolve) =>{
      const response = await fetch('http://localhost:8000/admin/req', {
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
      const response = await fetch('http://localhost:8000/admin/req') 
      const data = await response.json()
      resolve({data})
    }
    );
  }
  
  export function deleteNgoRequest(id) {
    return new Promise(async (resolve) =>{
      const response = await fetch('http://localhost:8000/admin/reject'+ id, {
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
      const response = await fetch('http://localhost:8000/admin/new'+ userdata.id, {
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
      const response = await fetch('http://localhost:8000/admin', {
        method: "GET",
      }) 
      const data = await response.json()
      resolve({data})
    }
    );
  }
  
  
  
  
  export function createUser(userData) {
    return new Promise(async (resolve) => {
      console.log(userData)
      const response = await fetch('http://localhost:8000/user/register', {
        method: 'POST',
        body: JSON.stringify(userData),
        headers: { 'content-type': 'application/json' },
      });
      const data = await response.json();
      resolve({ data });
    });
  }
  
  export function checkUser(loginInfo) {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await fetch('http://localhost:8000/user/login', {
          method: 'POST',
          body: JSON.stringify(loginInfo),
          headers: { 'content-type': 'application/json' },
        });
        if (response.ok) {
          const data = await response.json();
          resolve({ data });
        } else {
          const error = await response.text();
          reject(error);
        }
      } catch (error) {
        reject( error );
      }
  
    });
  }
  
  export function checkAuth() {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await fetch('/user/check');
        if (response.ok) {
          const data = await response.json();
          resolve({ data });
        } else {
          const error = await response.text();
          reject(error);
        }
      } catch (error) {
        reject( error );
      }
  
    });
  }
  
  
  export function signOut(userId) {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await fetch('/auth/logout');
        if (response.ok) {
          resolve({ data:'success' });
        } else {
          const error = await response.text();
          reject(error);
        }
      } catch (error) {
        console.log(error)
        reject( error );
      }
    });
  }
  
  
  export function resetPasswordRequest(email) {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await fetch('/auth/reset-password-request', {
          method: 'POST',
          body: JSON.stringify({email}),
          headers: { 'content-type': 'application/json' },
        });
        if (response.ok) {
          const data = await response.json();
          resolve({ data });
        } else {
          const error = await response.text();
          reject(error);
        }
      } catch (error) {
        reject( error );
      }
  
    });
  }
  
  export function resetPassword(data) {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await fetch('/auth/reset-password', {
          method: 'POST',
          body: JSON.stringify(data),
          headers: { 'content-type': 'application/json' },
        });
        if (response.ok) {
          const data = await response.json();
          resolve({ data });
        } else {
          const error = await response.text();
          reject(error);
        }
      } catch (error) {
        reject( error );
      }
  
    });
  }
  
  
  
  
  
  
  
  
  
  
  
  // export function signOut(userdata) {
  //   return new Promise(async (resolve) =>{
  
  //     resolve({data: "Success"})
  //   }
  //   );
  // }
  