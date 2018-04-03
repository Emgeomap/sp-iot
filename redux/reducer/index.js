import { combineReducers } from 'redux';
import reducer from './tempurature.reducer';
const RootReducer = combineReducers({ TempuratureReducer: reducer });
export default RootReducer;