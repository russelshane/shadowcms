/**
 * Firebase Configuration
 *
 * @author ShadowCMS
 */

import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';
import { FIREBASE_CONFIG } from '../constants';

firebase.initializeApp(FIREBASE_CONFIG);

export const firestore = firebase.firestore();
export const storage = firebase.storage();
