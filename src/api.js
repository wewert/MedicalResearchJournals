import axios from 'axios';


export default {
user: {
  login: credentials =>
    axios.post("/api/auth", { credentials }).then(res => res.data.user),
  signup: user =>
    axios.post("/api/users", { user }).then(res => res.data.user)
  }
};

export function fetchUsers() {
  const request = axios.get('http://jsonplaceholder.typicode.com/users');

  return (dispatch) => {
    request.then(({data}) => {
      dispatch({ payload: data})
    });
  };
}
