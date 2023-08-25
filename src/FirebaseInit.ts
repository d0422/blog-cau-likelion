import { getMessaging, getToken, onMessage } from 'firebase/messaging';
// Import the functions you need from the SDKs you need
export const getFireBaseToken = async () => {
  try {
    const messaging = getMessaging();
    const token = await getToken(messaging, {
      vapidKey: process.env.NEXT_PUBLIC_VAPID_KEY,
    });
    onMessage(messaging, (payload) => {
      console.log('Message recieved. ', payload);
    });
    return token;
  } catch (err: any) {
    throw err;
  }
};
