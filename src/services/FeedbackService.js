import http from "../api/http-common";
const getAll = () => {
  return http.get("/viewAllFeedBacks");
};
const get = feedBackId => {
  return http.get(`/viewFeedBack/${feedBackId}`);
};
const create = data => {
  return http.post("/addFeedBack", data);
};
const update = (feedBackId, data) => {
  return http.put(`/updateFeedBack/${feedBackId}`, data);
};
/*const remove = id => {
  return http.delete(`/feedback/${id}`);
};*/
/* any other service or queries or sorting or features which you want to add
const removeAll = () => {
  return http.delete(`/tutorials`);
};
const findByTitle = title => {
  return http.get(`/tutorials?title=${title}`);
};*/
const FeedbackService = {
  getAll,
  get,
  create,
  update,
  //remove,
  //removeAll,
  //findByTitle
  //you can add more actions here
};
export default FeedbackService;