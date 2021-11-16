const firebaseConfig = {
      apiKey: "AIzaSyBrqQn8bKqRmS3d-PJAyJa5eiAXdYFsmac",
      authDomain: "fir-kwitter-b0392.firebaseapp.com",
      databaseURL: "https://fir-kwitter-b0392-default-rtdb.firebaseio.com",
      projectId: "fir-kwitter-b0392",
      storageBucket: "fir-kwitter-b0392.appspot.com",
      messagingSenderId: "575910989941",
      appId: "1:575910989941:web:40a74c053512a88fdc283c"
    };
firebase.initializeApp(firebaseConfig);
    
getData();   user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="Welcome "+user_name+"!";

function addRoom(){
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({});
      localStorage.setItem("room_name",room_name);
      window.location="kwitter_page.html";
}
      


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
   Room_names = childKey;
  console.log("room_name-"+Room_names);
  row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
  document.getElementById("output").innerHTML+=row;
  });});}
getData();

function redirectToRoomName(name){
console.log(name);
localStorage.setItem("room_name",name);
window.location="kwitter_page.html";
}
