import React, {Component} from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Build from "./pages/Build";
import About from "./pages/About";
import Login from "./pages/Login";
import Register from './pages/Register';
import Checkout from './pages/Checkout';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";
import API from './utils/API';
import "antd/dist/antd.css"

class App extends Component {
  state = {
    isLoggedIn: false,
    successfulLogout: false,
    username: ''
  };

    componentDidMount() {
    API.loginCheck()
      .then(res => {
        console.log(res)
        if (res.data.username) {
          this.setState({
            isLoggedIn: true,
            username: res.data.username
            
          })
          console.log(res.data)
        } else {
          this.setState({
            isLoggedIn: false
          })
        }
      })
      .catch(err => console.log(err))

    
  };


  userLogout = () => {
    console.log('logout')
    API.logout()
      .then(res => {
        if (res.data === false) {
          this.setState({
            successfulLogout: true,
            isLoggedIn: false,
            username: ''
          });
          console.log(res.data)
        }
      })
      .catch(err => {
        console.log(err);
      });
  }

  updateUserName = (username) => {
    this.setState({
      username: username,
      isLoggedIn: true
    })
  }

 render() {
  console.log('hi')
  return (

     <Router>
     <div>
      <Navbar username={this.state.username} isLoggedIn={this.state.isLoggedIn} logout={this.userLogout} />

      <Wrapper>
        <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/build" component={Build} />
        <Route exact path="/login" render={() => <Login updateUserName={this.updateUserName}/>} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/checkout" render={() => <Checkout isLoggedIn={this.state.isLoggedIn}/>} />
        </Switch>
      </Wrapper>
      <Footer />
      </div>
  </Router>

  )
 }
}

export default App;

