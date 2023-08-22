import React from 'react'
import NavBar from '../features/navbar/Navbar'
import AdminProductDetail from '../features/admin/components/AdminProductDetails'
import AdminProductForm from '../features/admin/components/AdminProductForm'

const AdminProductFormPage = () => {
  return (
    <div>
        <NavBar>
            <AdminProductForm/>
        </NavBar>
    </div>
  )
}

export default AdminProductFormPage