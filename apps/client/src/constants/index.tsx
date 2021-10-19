/**
 * Global Constants for C.M.S. Client
 *
 * @author ShadowCMS
 */

export const FIREBASE_CONFIG = {
  apiKey: process.env.REACT_APP_FBASE_API_KEY,
  authDomain: process.env.REACT_APP_FBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FBASE_PROJECT_ID,
  storageBucket: `${process.env.REACT_APP_FBASE_BUCKET}`,
  messagingSenderId: process.env.REACT_APP_FBASE_MESSENGER_ID,
  appId: process.env.REACT_APP_FBASE_APP_ID,
  measurementId: process.env.REACT_APP_FBASE_MEASUREMENT_ID,
};
