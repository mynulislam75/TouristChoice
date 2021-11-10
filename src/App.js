import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Addservice from './components/Addservices/Addservice';
import Login from './components/Login/Login';
import MyOrders from './components/MyOrders/MyOrders';
import Services from './components/Services/Services';
import Shipping from './components/Shipping/Shipping';
import Dashboard from './components/AdminDashBoard/Dashboard';
import AuthProvider from './Context/AuthProvider';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">


      <AuthProvider>
      <BrowserRouter>
      <h2 className="text-center m-3 p-3 text-success">TOUR TO DUBAI</h2>
      <Navbar></Navbar>
        <Switch>
          <Route exact path="/">
          <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/login">
          <Login></Login>
          </Route>
          <Route path="/myOrder">
            <MyOrders></MyOrders>
          </Route>
          <PrivateRoute path="/shippping/:servicesId">
          <Shipping></Shipping>
          </PrivateRoute>
          <Route path="/addServices">
            <Addservice></Addservice>
          </Route>
          <Route path="/admindashboard">
            <Dashboard></Dashboard>
          </Route>
        </Switch>
        <Footer></Footer>
      </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
