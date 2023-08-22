// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here. Other Firebase libraries
// are not available in the service worker.
importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js');
importScripts(
  'https://www.gstatic.com/firebasejs/8.10.1/firebase-messaging.js'
);

// Initialize the Firebase app in the service worker by passing in
// your app's Firebase config object.
// https://firebase.google.com/docs/web/setup#config-object
firebase.initializeApp({
  apiKey: 'AIzaSyCPZojB-MYCEJ-Q8fFzaAGNxz-ZS0erg1I',
  authDomain: 'blog-cau-likelion.firebaseapp.com',
  projectId: 'blog-cau-likelion',
  storageBucket: 'blog-cau-likelion.appspot.com',
  messagingSenderId: '93033443629',
  appId: '1:93033443629:web:d4ef31afbc2825bc7963a4',
  measurementId: 'G-801E6Y0Z1D',
});

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log(
    '[firebase-messaging-sw.js] Received background message ',
    payload
  );
  const options = {
    body: payload.notification.body,
    icon: payload.notification.icon,
  };
  self.registration.showNotification('새로운 글이 작성되었어요!', options);
});
