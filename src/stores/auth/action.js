import { auth, googleProvider } from '@/src/config/firebase';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut as signOutAuth,
} from 'firebase/auth';
import Cookies from 'js-cookie';

const ActionTypes = {
  LOGIN: 'LOGIN',
  LOGOUT: 'LOGOUT',
  REGISTER: 'REGISTER',
};

const login = (payload) => ({
  type: ActionTypes.LOGIN,
  payload,
});

const logout = () => ({
  type: ActionTypes.LOGOUT,
});

const register = (payload) => ({
  type: ActionTypes.REGISTER,
  payload,
});

const signInWithGoogle = () => {
  return async (dispatch) => {
    try {
      signInWithPopup(auth, googleProvider);

      const user = auth.currentUser;
      const token = await user.getIdToken();
      const payload = { user, token };

      console.log(payload);

      Cookies.set('authUser', JSON.stringify(payload), { expires: 7 });

      dispatch(login(payload));
    } catch (err) {
      console.error(err);
    }
  };
};

const signInWithEmail = (email, password) => {
  return async (dispatch) => {
    try {
      const { user } = await signInWithEmailAndPassword(email, password);
      const token = await user.getIdToken();
      const payload = { user, token };

      Cookies.set('authUser', JSON.stringify(payload), { expires: 7 });

      dispatch(login(payload));
    } catch (err) {
      console.error(err);
    }
  };
};

const registerWithEmail = async (dispatch, email, password) => {
  try {
    const { user } = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const token = await user.getIdToken();
    const payload = { user, token };

    Cookies.set('authUser', JSON.stringify(payload), { expires: 7 });

    dispatch(register(payload));
  } catch (err) {
    console.error(err);
  }
};

const getUserCookie = () => {
  return (dispatch) => {
    const authUser = Cookies.get('authUser');

    if (authUser) {
      const payload = JSON.parse(authUser);

      dispatch(login(payload));
    }
  };
};

const signOut = async (dispatch) => {
  try {
    await signOutAuth(auth);

    dispatch(logout());
  } catch (err) {
    console.error(err);
  }
};

export {
  ActionTypes,
  getUserCookie,
  registerWithEmail,
  signInWithEmail,
  signInWithGoogle,
  signOut
};

