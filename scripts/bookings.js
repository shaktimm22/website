
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
    
    const starCountRef = ref(database, 'bookings/' );

    onValue(starCountRef, (snapshot) => {
    const data = snapshot.val();
    
    
    
    
    $('#dataTbl td').remove();
        var rowNum = 0; 
        const dbRef = ref(database, 'bookings/');

    onValue(dbRef, (snapshot) => {
        snapshot.forEach((childSnapshot) => {
        const childKey = childSnapshot.key;
        const childData = childSnapshot.val();
    // ...
    rowNum += 1;

    // Name 
    var temp_name = null;
    var new_name = null;
    if(childData.p_name){
        temp_name = childData.p_name.replace(/ /g,'_');
        new_name = temp_name.replace('&','\n');
    }
    
    
    // Age
    var new_age = null;
    if(childData.p_ages){
        new_age = childData.p_ages.replace('&','\n');
    }

    // Gender
    var new_gender =null;
    if(childData.p_genders){
        new_gender = childData.p_genders.replace('&',' | ');
    }

    // Seat Number
    var seat_numbers = null;
    if(childData.seat_numbers){
        seat_numbers = childData.seat_numbers.replace('&','\n');
    }
    
    
    var row = "<tr><td>" + rowNum + "</td><td>" +
            
            childData.p_userid + "</td><td>" + 
            new_name + "</td><td>" +
            childData.p_contact_number + "</td><td>" + 
            childData.p_email + "</td><td>" + 
            new_age + "</td><td>" + 
            new_gender + "</td><td>" +

            childData.booking_status + "</td><td>" +
            childData.bookingid +"</td><td>" +

            childData.bus_name + "</td><td>" +  
            childData.busid + "</td><td>" +  
            childData.route + "</td><td>" + 
            childData.total_passengers + "</td><td>" + 


            seat_numbers + "</td><td>" + 
            childData.sleeper_seat_numbers + "</td><td>" + 


            childData.dobk + "</td><td>" + 
            childData.doj + "</td><tr>" 


    $(row).appendTo('#dataTbl');
    
        });
    }, {
            onlyOnce: true
        });

});
      