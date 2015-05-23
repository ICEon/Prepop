// JavaScript Document
$(document).ready(function(e) {
document.addEventListener("deviceready", onDeviceReady, false);
      function onDeviceReady() {
alert ("ready");

		var db = window.sqlitePlugin.openDatabase({name: "prepop.db", createFromLocation: 1});


            db.transaction(function(tx) {
              tx.executeSql("SELECT Folio from alumnos;", [], function(tx, res) {
                alert("res.rows.length: " + res.rows.length +" -- should be 1");
                alert("res.rows.item(0).data_num: " + res.rows.item(0).data_num + " -- should be 100");
              });

          }, function(e) {
            alert ("ERROR: " + e.message);
          });

}

});