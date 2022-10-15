
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
    
    const starCountRef = ref(database, 'buses_pending/' );
    
    onValue(starCountRef, (snapshot) => {
    const data = snapshot.val();
    
    
    $('#dataTb2 td').remove();
        var rowNum = 0; 
        const dbRef = ref(database, 'buses_pending/');

    onValue(dbRef, (snapshot) => {
        snapshot.forEach((childSnapshot) => {
        const childKey = childSnapshot.key;
        const childData = childSnapshot.val();
    // ...
        
    var bstatus = childData.bstatus;
    var busid = childData.busid;
    
    var status = null;
    if(bstatus == ""){
        status = "Pending";
    
        
        rowNum += 1; 
        var row = "<tr><td>" + rowNum + "</td><td>" +
        childData.busid + "</td><td>" + 
        childData.bus_name + "</td><td>" +
        childData.bus_number + "</td><td>" +
        childData.contact_number + "</td><td>" +
        childData.ownerid + "</td><td>" +  
        childData.bus_price + "</td><td>" +
        childData.sleeper_price + "</td><td>" +  
        childData.bus_route + "</td><td>" + 
        childData.bus_timing + "</td><td>" + 
        childData.bus_type + "</td><td>" + 
        childData.seat_available + "</td><td>" +
        childData.sleeper_seats_available + "</td><td>" +
        childData.time_stamp + "</td><td>" +
        "<a href=\"buses_approval.html?id="+childData.busid+"\">Pending</a></td><tr>"
                
    
        $(row).appendTo('#dataTb2');
    
    }

    
    
        });
    }, {
            onlyOnce: true
        });

});
        