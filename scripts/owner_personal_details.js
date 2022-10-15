
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
    
    const starCountRef = ref(database, 'bus_owner_details/'+ queryString + '/personal_details');

    onValue(starCountRef, (snapshot) => {
    const data = snapshot.val();


    document.getElementById('id').innerHTML = data.ownerid;
    document.getElementById('name').innerHTML = data.owner_name;
    
    document.getElementById('phone').innerHTML = data.mobile;
    document.getElementById('email').innerHTML = data.email;

    document.getElementById('alt_phone').innerHTML = data.phone;
    document.getElementById('alt_email').innerHTML = data.alt_email;
    document.getElementById('address').innerHTML = data.address;

    document.getElementById('country').innerHTML = data.country;
    document.getElementById('state').innerHTML = data.state;
    document.getElementById('district').innerHTML = data.dist;
    document.getElementById('city').innerHTML = data.city;
    document.getElementById('pin_code').innerHTML = data.area_pin_code;

    document.getElementById('travel_name').innerHTML = data.travels_name;
    document.getElementById('business').innerHTML = data.business_background;
    document.getElementById('pan_number').innerHTML = data.pan_number;

    
    
    
});
        