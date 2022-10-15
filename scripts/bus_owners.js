
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
    
    var status;
    const app = initializeApp(firebaseConfig);
    const database = getDatabase(app);
    
    const starCountRef = ref(database, 'bus_owners/' );
    
    onValue(starCountRef, (snapshot) => {
    const data = snapshot.val();
    
    
    $('#dataTb4 td').remove();
        var rowNum = 0; 
        const dbRef = ref(database, 'bus_owners/');

    onValue(dbRef, (snapshot) => {
        snapshot.forEach((childSnapshot) => {
        const childKey = childSnapshot.key;
        const childData = childSnapshot.val();
    
    if(childData.acc_status == "a"){
        // ...
        rowNum += 1; 
        status = "Approved";
        var row = "<tr><td>" + rowNum + "</td><td>" +
            childData.uid + "</td><td>" + 
            childData.ownerid + "</td><td>" +
            childData.username + "</td><td>" +
            childData.email + "</td><td>" +
            childData.busesid + "</td><td>" +
            status + "</td><td>" +
            "<a href=\"owner_details.html?id="+childData.ownerid+"\">View More</a></td><tr>"
            
            

        $(row).appendTo('#dataTb4');

    }   
    
        });
    }, {
            onlyOnce: true
        });

});
        