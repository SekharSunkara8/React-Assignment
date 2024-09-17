import React from 'react';
import '../styles/NoCustomerSelected.css'


const NoCustomerSelected: React.FC = () => {
  return (
    <div className='no-customer-selected'>
      <h3>You haven't picked a customer yet!</h3>
      <p>You haven't chosen a customer yet. Please select one to view their details.</p>
    </div>
  );
};

export default NoCustomerSelected;
