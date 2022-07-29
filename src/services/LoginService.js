import http from '../http-common';
const create = ({data}) => {
    return http.post("/adminLogin", data);
  };
  const createUser = ({data}) => {
    return http.post("/userLogin", data);
  };

  const LoginService = {
    createUser,
    create,


  };

  export default LoginService;