import {BrowserRouter as Router,Routes , Route, } from "react-router-dom"
import Home from "./Components/Home/Home";
import MHeader from "./Components/Layout/MHeader";
import Footer from "./Components/Layout/Footer";
import Contact from "./Components/Contact/Contact";
import Cart from "./Components/Cart/Cart";
import Shiping from "./Components/Cart/Shiping";
import ConfirmOrder from "./Components/Cart/ConfirmOrder";
import PaymentSucess from "./Components/Cart/PaymentSucess";
import Login from "./Components/Login/Login";
import Profile from "./Components/Profile/Profile";
import MyOrders from "./Components/MyOrders/MyOrders";
import OrdersDetails from "./Components/MyOrders/OrdersDetails";
import Dashboard from "./Components/Admin/Dashboard";
import Users from "./Components/Admin/Users";
import Orders from "./Components/Admin/Orders";
import About from "./Components/About/About";
import  "./Styles/App.scss"
import  "./Styles/Header.scss"
import  "./Styles/Home.scss"
import  "./Styles/Founder.scss"
import  "./Styles/Menu.scss"
import  "./Styles/Footer.scss"
import  "./Styles/Contact.scss"
import  "./Styles/Cart.scss"
import  "./Styles/Shiping.scss"
import  "./Styles/ConfirmOrder.scss"
import  "./Styles/Payment.scss"
import  "./Styles/Login.scss"
import  "./Styles/Profile.scss"
import  "./Styles/Table.scss"
import  "./Styles/OrdersDetails.scss"
import  "./Styles/Dashboard.scss"
import  "./Styles/About.scss"
import  "./Styles/NotFound.scss"
import  "./Styles/Loader.scss"
import NotFound from "./Components/Layout/NotFound";



function App() {
  return (
    <>
    <Router>
    <MHeader  isauthenticated={true}/>
      <Routes>
        <Route  path="/" element={<Home/>}/>
        <Route  path="/Contact" element={<Contact/>}/>
        <Route  path="/Cart" element={ <Cart/>}/>
        <Route  path="/Shiping" element={ <Shiping/>}/>
        <Route  path="/ConfirmOrder" element={<ConfirmOrder/>}/>
        <Route  path="/PaymentSucess" element={<PaymentSucess/>}/>
        <Route  path="/Login" element={<Login/>}/>
        <Route  path="/MyOrders" element={<MyOrders/>}/>
        <Route  path="/order/:id" element={<OrdersDetails/>}/>
        <Route  path="/Profile" element={<Profile/>}/>
        <Route  path="/Dashboard" element={<Dashboard/>}/>
        <Route  path="/Admin/Users" element={<Users/>}/>
        <Route  path="/Admin/Orders" element={<Orders/>}/>
        <Route  path="/About" element={<About/>}/>


        <Route  path="*" element={<NotFound/>}/>

  
      </Routes>
      <Footer/>
    </Router>
    </>
  );
}

export default App;
