function login(){
    var b = document.getElementById('name').value
    document.getElementById('here').innerHTML = "welcome " + b;
    window.location.href = "Welcome_Page.html";
}