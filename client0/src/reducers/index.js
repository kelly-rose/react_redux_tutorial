import { combineReducers } from 'redux';
import {reducer as form} from 'redux-form';
import auth from './auth_reducer';

const rootReducer = combineReducers({
  form :form,    //form 만 써도됨! ES6의 마법ㅋㅋㅋㅋ
  auth
});

export default rootReducer;
