import firebase from ' firebase/app'
import 'firebase/firestore';

const firestore = firebase.firestore();

firestore.collection('users').doc('0fdKK9HtuV7fTRQ9DerU').collection('cartItems').doc('AOEdnvBkypmxm1qfS24l');
firestore.doc('/users/0fdKK9HtuV7fTRQ9DerU/cartItems/AOEdnvBkypmxm1qfS24l');
firestore.collection('/users/0fdKK9HtuV7fTRQ9DerU/cartItems');
