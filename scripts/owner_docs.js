
    // catch owner id
    var queryString = decodeURIComponent(window.location.search);
    queryString = queryString.substring(4);
    queryString=String(queryString);

   // Import The Functions
   import {
       initializeApp
   } from 'https://www.gstatic.com/firebasejs/9.9.3/firebase-app.js';
   import {
       getAnalytics
   } from 'https://www.gstatic.com/firebasejs/9.9.3/firebase-analytics.js';
   import {
       getDatabase,
       ref,
       set,
       onValue
  
   } from 'https://www.gstatic.com/firebasejs/9.9.3/firebase-database.js';

   // Config Database Connection
   const firebaseConfig = {
   apiKey: "AIzaSyCvD33IM4CmwD33e0RwJoVAJt0JeSiBaEc",
   authDomain: "busbookingapp-ecb53.firebaseapp.com",
   databaseURL: "https://busbookingapp-ecb53-default-rtdb.firebaseio.com",
   projectId: "busbookingapp-ecb53",
   storageBucket: "busbookingapp-ecb53.appspot.com",
   messagingSenderId: "559452439504",
   appId: "1:559452439504:web:379828be835ad2d2a6afd5",
   measurementId: "G-2RK15KDHP8"
   };

   const app = initializeApp(firebaseConfig);
   const database = getDatabase(app);
   
   const starCountRef = ref(database, 'bus_owner_details/'+ queryString + '/owner_docs');

   onValue(starCountRef, (snapshot) => {
   const data = snapshot.val();

   document.getElementById('id_proof').innerHTML = "<a href=data.id_proof>View</a>";
   document.getElementById('pan_card').innerHTML = data.pan_card;
   document.getElementById('gstin_cert').innerHTML = data.gstin_cert;
   document.getElementById('partnership').innerHTML = data.partnership_deed;
   document.getElementById('cancelled_cheque').innerHTML = data.cancelled_cheque;
   document.getElementById('pvt_lit_doc').innerHTML = data.pvt_ltd_doc;
});
       
