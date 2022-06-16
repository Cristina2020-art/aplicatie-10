(function () {
//The Person Object used to store data in the LocalStorage
var Person = {
Id: 0,
Name: "",
Address: "",
City:"",
Email: "",
Age:0,
Occupation: "",
MobileNo: "",
Gender:""
};

//JavaScript object containing methods for LocalStorage management
var applogic = {
//Clear All Entries, by reading all elements having class as c1
clearuielements: function () {
    var inputs = document.getElementsByClassName("c1");
    for (i = 0; i < inputs.length; i++) {
        inputs[i].value = "";
    }
},
//Save Entry in the Localstorage by eading values entered in the
//UI
saveitem: function () {
    var lscount = localStorage.length; //Get the Length of the LocalStorage
    //Read all elements on UI using class name
    var inputs = document.getElementsByClassName("c1");
            Person.Id = inputs[0].value;
            Person.Name = inputs[1].value;
            Person.Address = inputs[2].value;
            Person.City = inputs[3].value;
            Person.Email = inputs[4].value;
            Person.Age = inputs[5].value;
            Person.Occupation = inputs[6].value;
            Person.MobileNo = inputs[7].value;
            Person.Gender = inputs[8].value;
    //Convert the object into JSON ans store it in LocalStorage
            localStorage.setItem("Person_" + lscount, JSON.stringify(Person));
    //Reload the Page
            location.reload();
},
//Method to Read Data from the local Storage
loaddata: function () {
    var datacount = localStorage.length;
    if (datacount > 0)
    {
        var render = "<table border='1'>";
        render += "<tr><th>Id</th><th>Name</th><th>Address</th><th>City</th>” + “<th>Email</th><th>Age</th><th>Occupation</th><th>MobileNo</th>” +<th>Gender</th></tr>";
        for (i = 0; i < datacount; i++) {
            var key = localStorage.key(i); //Get  the Key
            var person = localStorage.getItem(key); //Get Data from Key
            var data = JSON.parse(person); //Parse the Data back into the object
           
            render += "<tr><td>" + data.Id + "</td><td>" + data.Name + " </td>";
            render += "<td>" + data.Address + "</td>";
            render += "<td>" + data.City + "</td>";
            render += "<td>" + data.Email + "</td>";
            render += "<td>" + data.Age + "</td>";
            render += "<td>" + data.Occupation + "</td>";
            render += "<td>" + data.MobileNo + "</td>";
            render += "<td>" + data.Gender + "</td></tr>";
        }
        render+="</table>";
        dvcontainer.innerHTML = render;
    }
},
//Method to Clear Storage
clearstorage: function () {
    var storagecount = localStorage.length; //Get the Storage Count
    if (storagecount > 0)
    {
        for (i = 0; i < storagecount; i++) {
            localStorage.clear();
        }
    }
    window.location.reload();
}
};
//Save object into the localstorage
var btnsave = document.getElementById('btnsave');
btnsave.addEventListener('click', applogic.saveitem, false);
//Clear all UI Elements
var btnclear = document.getElementById('btnclear');
btnclear.addEventListener('click', applogic.clearuielements, false);
//Clear LocalStorage
var btnclearstorage = document.getElementById('btnclearstorage');
btnclearstorage.addEventListener('click', applogic.clearstorage, false);
//On Load of window load data from local storage
window.onload = function () {
applogic.loaddata();
};
})();