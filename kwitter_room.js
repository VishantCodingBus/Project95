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

function addRoom()// add room function
{
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose :"adding room name"
      })

      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_page.html";
}    

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      // start code
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name  id="+Room_names+ " onclick='redirectToRoomName(this.id)' >#"+Room_names+"</div><hr>"; 
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

function logout() 
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location ="index.html";

}