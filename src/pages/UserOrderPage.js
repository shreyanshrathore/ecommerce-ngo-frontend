import React from 'react';
import Navbar from '../features/navbar/Navbar.js';
import UserOrder from '../features/user/components/UserOrders.js';

const UserOrderPage = () => {
  return (
    <div>
      <Navbar>
        <h1 className='text-xl mx-auto '>My Orders</h1>
        <UserOrder />
      </Navbar>
    </div>
  );
};

export default UserOrderPage;
