import {Login} from '@/services/login'

const Model = {
    namespace: 'login',
    state: {},

    effects: {
      
    },

    reducers: {
      saveData(state, {payload}) {
          return {
              ...state,
              ...payload
          };
      }
  }
};

export default Model;
