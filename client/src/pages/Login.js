import React, { Component } from 'react';
import {Redirect} from 'react-router-dom'
import { Layout, Form, Icon, Input, Button } from 'antd';
import API from '../utils/API';
const {Content} = Layout;
const FormItem = Form.Item;

class Login extends Component {
  constructor(props) {
    super()
  }
  state = {
    username: '',
    password: '',
    loggedIn: false
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleFormSubmit = event => {
    event.preventDefault();

    API.login({ username: this.state.username, password: this.state.password })
      .then(res => {
        console.log(res);
        this.props.updateUserName(this.state.username)
        this.setState({
          username: '',
          password: '',
          loggedIn: true
        })
      
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {

    if (this.state.loggedIn) {
      return (
          <Redirect push to="/"/>
        )
    }

    return (
      <Content style={{ margin: '0 16px' }}>
      <div className="container">
          <h3>
            Login
          </h3>

        <Form className="login-form col-md-6">
          <FormItem>
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Username"
              name="username"
              onChange={this.handleInputChange}
              value={this.state.username}
            />
          </FormItem>
          <FormItem>
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              name="password"
              value={this.state.password}
              placeholder="Password"
              onChange={this.handleInputChange}
            />
          </FormItem>
          <FormItem>
            <Button type="primary" htmlType="submit" className="login-form-button" onClick={this.handleFormSubmit}>
              Log in
            </Button>
          </FormItem>
          
            
          
        </Form>
              </div>
      </Content>
    );
  }
}

export default Login;
