import React from 'react'

const UserComponent = () => {
    const centerTextStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh', 
      };
  return (
    <div style={centerTextStyle}>
    <h1 style={{ textAlign: 'center' }}>UserComponent</h1>
  </div>
  )
}

export default UserComponent
