
    // Store 'null' Into temp Variable
    let temp = "Valid";
    sessionStorage.setItem("TEMP", temp);

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
        onValue,  
        remove
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

        
        const starCountRef = ref(database, 'users/' );

        onValue(starCountRef, (snapshot) => {
            const data = snapshot.val();
            
            
            $('#dataTb3 td').remove();
                var rowNum = 0; 
                const dbRef = ref(database, 'users/');

            onValue(dbRef, (snapshot) => {
                snapshot.forEach((childSnapshot) => {
                const childKey = childSnapshot.key;
                const childData = childSnapshot.val();
            // ...
            rowNum += 1; 
            var row = "<tr><td>" + rowNum + "</td><td>" +
                     
                    childData.userid + "</td><td>" + 
                    childData.name + "</td><td>" +
                    childData.mobile_number + "</td><td>" +
                    childData.email + "</td><td>" +
                    childData.gender + "</td><td>" +
                    childData.age + "</td><td>" +
                    childData.dob + "</td><td>" +
                    childData.time_stamp + "</td><tr>" 
                    
                    

            $(row).appendTo('#dataTb3');
            
                });
            }, {
                    onlyOnce: true
                });
        
        });

    