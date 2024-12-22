// get request in ajax

let getData = document.getElementById("getData");
// console.log(getData);

getData.addEventListener("click", () => {
    // alert("Working successfully");
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "ajaxData.txt", true);
    // console.log("Ajax GET request");
    
    // xhr.onprogress = function(){
    //     console.log("Request Progressing");
    // }

    xhr.onreadystatechange = function(){
        console.log("Current ready state " + xhr.readyState);
        
    }
    xhr.onload = function(){
        if(this.status === 200){
            console.log(this.responseText);
        }else{
            console.log("Page not found");
             }}
    xhr.send()
    console.log("All done");
    
})

// post request in ajax

let postData = document.getElementById("postData");

postData.addEventListener("click", () => {
    // console.log("Fathima Nezrin");
    let xhr = new XMLHttpRequest();
    xhr.open("POST", "https://fakestoreapi.com/products", true);

    xhr.onreadystatechange = function(){
        console.log("Post request ready state is " + xhr.readyState); 
    }
    xhr.onload = function(){
        console.log(this.responseText);
    }
    let data = {title: "AJAX Learning", role: "MERN Stack Developer"}
        
    xhr.send(data);
    console.log("Post request successful");
    
})
