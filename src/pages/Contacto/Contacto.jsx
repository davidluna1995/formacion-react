import React from 'react'
import Header from '../../components/Header/Header'
import Main from '../../components/Main/Main'
import Navbar from '../../components/Navbar/Navbar'

const Contacto = () => {
  return (
    <div>
        <Header title='Contacto' color='green'/>
        <Navbar />
        <Main text='Main en contacto'/>
    </div>
  )
}

export default Contacto