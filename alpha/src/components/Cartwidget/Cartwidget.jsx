import React from 'react';
import { Avatar, Badge } from 'antd';
import './Cartwidget.css'

const Cartwidget = () => {
  return (
    <Badge count={5}>
      <Avatar className='bg' shape="square" size="large">
        <img className='icon bolsa' src="./src/img/iconos/Bolsa.png" alt="Carrito de compra" />
      </Avatar>
    </Badge>
  )
}

export default Cartwidget