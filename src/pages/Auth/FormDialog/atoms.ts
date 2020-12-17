import { 
  atom,
  selector
} from 'recoil';

import Validation from '../Validation/validation';

export const loginForm = atom({
  key: 'loginForm',
  default: {
    username: '',
    password: '',
    isAsyncRequesting: false
  } 
});

export const loginSelector = selector({
  key: 'loginSelector',
  get: ({get} : any) => {
    const data = get(loginForm);

    return {
      isDisabled: !(Validation.isValidPassword(data.password) === true && 
                    Validation.isValidUsernameOrEmail(data.username) === true) ||
                    data.isAsyncRequesting === true,
      isAsyncRequesting: data.isAsyncRequesting
    };
  },
}); 