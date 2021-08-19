import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyDQp7KZpo4t5u4tyn__S5Bpji4nml5yq9w',
  authDomain: 'loginplate.firebaseapp.com',
  projectId: 'loginplate',
  storageBucket: 'loginplate.appspot.com',
  messagingSenderId: '924037806083',
  appId: '1:924037806083:web:533488454bb0c896867636',
  measurementId: 'G-2DMQ1NPGXR',
};

const fire = firebase.initializeApp(firebaseConfig);

export default fire;
