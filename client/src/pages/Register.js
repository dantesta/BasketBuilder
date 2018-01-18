import React, { Component } from 'react';
import {Redirect} from 'react-router-dom'
import { Layout, Form, Icon, Input, Button } from 'antd';
import API from '../utils/API';
const {Content} = Layout;
const FormItem = Form.Item;

class Register extends Component {
  constructor(props) {
    super()
  }
  state = {
    username: '',
    password: '',
    registered: false,
    
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    console.log(this.state.username,this.state.password)
    API.register({ username: this.state.username, password: this.state.password })
      .then(res => {
        console.log(res);
        this.setState({
          username: '',
          password: '',
          registered: true
        })
      
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {

    if (this.state.registered) {
      return (
          <Redirect to="/login"/>
        )
    }

    return (
      <Content style={{ margin: '0 16px' }}>
      <div className="container">
          <h3>
            Register
          </h3>

        <Form className="login-form  col-md-6">
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


              Register
            </Button>
          </FormItem>
        </Form>
              </div>
      </Content>
    );
  }
}

export default Register;