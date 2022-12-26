//YOUR FIREBASE LINKS
const firebaseConfig = {
      apiKey: "AIzaSyD--zYGGRB8anPQAX7TB0ZfXIq7zmTp4UE",
      authDomain: "kwitterapp-22b63.firebaseapp.com",
      databaseURL: "https://kwitterapp-22b63-default-rtdb.firebaseio.com",
      projectId: "kwitterapp-22b63",
      storageBucket: "kwitterapp-22b63.appspot.com",
      messagingSenderId: "797721453583",
      appId: "1:797721453583:web:43c9e5dcb13a3afe34af7a"
    };

    const app = initializeApp(firebaseConfig);


function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
name = message_data['name'];
message = message_data['message'];
like = message_data['like'];
name_with_tag = "<h4>" + name + "<img class='user_tick' src='tick,png'></h4>";
message_with_tag = "<h4 class='message_h4'>" + message + "</h4>";
like_button="<button class='btn btn-warning' id="+firebase_message_id+" value="+like+"onclick='updateLike(this.id)'>";
span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like"
row = name_with_tag + message_with_tag +like_button + span_with_tag; 

document.getElementById("output").innerHTML += row;


function updateLike(message_id) 
{ 
      console.log("clicked on like button - " + message_id); 
      button_id = message_id; 
      likes = document.getElementById(button_id).value; 
      updated_likes = Number(likes) + 1; 
      console.log(updated_likes);

firebase.database().ref(room_name).child(message_id).update({ like : updated_likes })
     
function logout() 
{ 
      localStorage.removeItem("user_name"); 
      localStorage.removeItem("room_name"); 
      window.location.replace("kwitter.html"); }


//End code
      } });  }); }
getData();
