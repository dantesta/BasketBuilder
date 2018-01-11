import axios from "axios";

// Export an object containing methods we'll use for accessing the Dog.Ceo API

export default {
 login: function(creds) {
    return axios.post('../api/users/login', creds)
  },
  loginCheck: function() {
    return axios.get('../api/users/login')
  },
  logout: function() {
    return axios.get('../api/users/logout')
  }
}
