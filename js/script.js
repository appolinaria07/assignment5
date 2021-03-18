window.addEventListener('load', () => {
    "use strict";
    var empForm = window.document.getElementById("empForm");
    
    empForm.addEventListener('submit', evt => {
        
    var id = window.document.getElementById("id").value;
    var name = window.document.getElementById("name").value;
    var ext = window.document.getElementById("ext").value;
    var email = window.document.getElementById("email").value;
    var department = window.document.getElementById("department").value;
    evt.preventDefault();
    window.console.log("ID: " + id + "\n" + "Name: " + name + "\n" + "Extension: " + ext + "\n" + "Email: " + email + "\n" + "Department: " + department);
    });
}); 

