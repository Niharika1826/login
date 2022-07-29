import http from '../api/http-common';
const getAll = () => {
  return http.get("/getAllRoutes");
};
const get = routeId => {
  return http.get(`/getRouteById/${routeId}`);
};
const create = data => {
  return http.post("/addRoute", data);
};
const update = (routeId, data) => {
  return http.put(`/updateRoute/${routeId}`, data);
};
const remove = routeId => {
  return http.delete(`/deleteRoute/${routeId}`);
};
/* any other service or queries or sorting or features which you want to add
const removeAll = () => {
  return http.delete(`/tutorials`);
};
const findByTitle = title => {
  return http.get(`/tutorials?title=${title}`);
};*/
const RouteService = {
  getAll,
  get,
  create,
  update,
  remove,
  //removeAll,
  //findByTitle
  //you can add more actions here
};
export default RouteService;