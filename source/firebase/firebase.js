import * as firebase from "firebase";
import expenses from "../reducers/expenses";

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
  measurementId: process.env.FIREBASE_MEASUREMENT_ID,
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();
const db = firebase.database();

export { firebase, db as default };

// db.ref("expenses").on("value", (snapshot) => {
//   console.log(snapshot.val());
//   var expenses = [];
//   snapshot.forEach((childSnapshot) => {
//     expenses.push({
//       id: childSnapshot.key,
//       ...childSnapshot.val(),
//     });
//   });
//   console.log(expenses);
// });

// db.ref("expenses").push({
//   description: "description",
//   note: "notes",
//   amount: 0,
//   date: "24AUG2020",
// });
// db.ref("expenses").push({
//   description: "description",
//   note: "notes",
//   amount: 0,
//   date: "24AUG2020",
// });

// db.ref("expenses").push({
//   description: "description",
//   note: "notes",
//   amount: 0,
//   date: "24AUG2020",
// });

// db.ref()
//   .set({
//     name: "savver",
//     employees: {
//       founder: "Sumit Kolpekwar",
//     },
//     est: "2020-Aug",
//     stack: {
//       fronted: "React",
//       backend: null,
//       db: "firebase",
//     },
//   })
//   .then(() => {
//     console.log("savved!");
//   });
