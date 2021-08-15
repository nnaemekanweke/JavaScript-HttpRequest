// USING XMLHttpRequest

const request = new XMLHttpRequest();

request.open("GET", "https://jsonplaceholder.typicode.com/users");
request.send();
request.onload = ()=>{
      console.log(request);
    if(request.status === 200){
      console.log(JSON.parse(request.response));
    }else{
      console.log(request)
      console.log(`error ${request.status}`)
    }
}

 // =======END to XMLHttpRequest
 

//USING FETCH API

// first approach
fetch('https://jsonplaceholder.typicode.com/users')
    .then(response=>{
        return response.json();
    }).then(json=>{
        console.log(json)
 })

 // Second approach
 async function getUsers(){
     let response = await fetch('https://jsonplaceholder.typicode.com/users');
     let data = await response.json();
     return data;
 }
 getUsers().then(response=>{
     console.log(response)
 })

 // ===========END to FETCH API


// USING AXIOS - Third  Party library

axios.get("https://jsonplaceholder.typicode.com/users")
    .then(response => {
        console.log(response.data);
    }, err => {
        console.log(err)
})

 // ===========END to FETCH AXIOS



// USING JQUERY

$(document).ready(function(){
    $.ajax({
        url:'https://jsonplaceholder.typicode.com/users',
        type:"GET",
        success:function(result){
           console.log(result)
        },
        error:function(err){
            console.log(err);
        }
    })
})
