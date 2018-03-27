//current energy consumption update picture
// function update_member_profit(status) {
//     $("#member_profit").text(String(status));
// }

function update_value(node,status) {
    $("#"+String(node)).text(String(status));
}

$( document ).ready(function() {
    console.log("starting document!!!!");

    // Initialize Firebase
    console.log("Initialize Firebase");
    var config = {
      apiKey: "AIzaSyCGbVI5kNIHCJrAsRDfJE3QVIZXPfOQAnc",
      authDomain: "pich-company.firebaseapp.com",
      databaseURL: "https://pich-company.firebaseio.com",
      projectId: "pich-company",
      storageBucket: "pich-company.appspot.com",
      messagingSenderId: "501813066048"
    };
    firebase.initializeApp(config);

    // var ref = firebase.database().ref();
    //
    // ref.on("value", function(snapshot) {
    //     console.log(snapshot.val().test);
    //     x = snapshot.val().test;
    // }, function (error) {
    //     console.log("Error: " + error.code);
    // });

    total_load_activePower = 0;

    var homeRef = firebase.database().ref("member");

    homeRef.on("child_changed", function(data) {
        console.log(data.key);
        console.log(data.val());
        update_value(data.key,data.val());
        //
        // if (data.key == 'member_profit') {
        //     update_value(parseInt(data.val()),"member_profit");
        //   } else if (data.key == 'Orders') {
        //       update_value(parseInt(data.val()),"Orders");
        //   } else if (data.key == 'reports') {
        //     update_value(parseInt(data.val()),"reports");
        //   } else if (data.key == 'reports') {
        //     update_value(parseInt(data.val()),"reports");
        //
        //
        //   else {
        //     // console.log("need to parse this key " + data.key)
        // }

        // update_value(parseInt(data.val(), node_name));
    });

});
