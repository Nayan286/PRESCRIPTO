var mytext = document.querySelector("#mytext");

var myanchor = document.querySelector("#myanchor");

var check = 0;

var myh3 = document.querySelector("#myh3");

myanchor.addEventListener("click", function () {
    if (check == 0) {
        mytext.innerHTML = "Doctor Login"
        myh3.innerHTML = "Admin Login?"
        check = 1;
    }
    else {
        mytext.innerHTML = "Admin Login"
        myh3.innerHTML = "Doctor Login?"
        check = 0;
    }

})


