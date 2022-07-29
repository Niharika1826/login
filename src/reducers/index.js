import { combineReducers } from "redux";
import Route from './route'
import FeedBacks from'./feedbacks';
import reservations from "./reservations";
export default combineReducers({
  Route,FeedBacks,reservations
});