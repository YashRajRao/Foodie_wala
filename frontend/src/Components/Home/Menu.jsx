import React from 'react'
import MenuCart from './MenuCart'
const Menu = () => {

  const addtoCart = (itemNUM)=>{

  }
   
  return (
    <>
       <section id='menu'>
       <h1>MENU</h1>
       <div>
       <MenuCart itemNUM={1} burgerpic={"https://img.freepik.com/free-photo/tasty-burger-isolated-white-background-fresh-hamburger-fastfood-with-beef-cheese_90220-1063.jpg?w=740&t=st=1686208028~exp=1686208628~hmac=a6a88157cbab11f179bdfae0dc9f0f0f1bdeb1844e75326f872f45fb63c78754"} price={200} tittle ="Cheese Buger" handler={addtoCart}/>

<MenuCart itemNUM={1} burgerpic={"https://img.freepik.com/premium-photo/indian-vegetable-pulav-biryani-made-using-basmati-rice-served-terracotta-bowl-selective-focus_466689-55580.jpg?w=1060"} price={200} tittle ="Cheese Buger" handler={addtoCart}/>

<MenuCart itemNUM={1} burgerpic={"https://img.freepik.com/free-photo/traditional-supreme-pizza-isolated-white-background_123827-20129.jpg?w=1060&t=st=1686212607~exp=1686213207~hmac=dded271b777708ca48b1ac658b7a65a16f7cc6e81b86245c1bfa4bf27c52d84b"} price={200} tittle ="Cheese Buger" handler={addtoCart}/>
       </div>

       </section>
    </>
  )
}

export default Menu
