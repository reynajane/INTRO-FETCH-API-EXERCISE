// fetch("https://reqres.in/api/users").then(res=>console.log(res));

/* All users 
fetch("https://reqres.in/api/users")
.then(res=> res.json())
.then(data => console.log(data));
*/

/*Single User error status 404 
//()=>{}; arrow function syntax
//=>{}; arrow function syntax
fetch("https://reqres.in/api/users/25")
.then(res=> res.json())
.then(data => console.log(data));
*/

// add .catch() method to get any errors // This will not work unless there is some sort of a network error
/*
fetch("https://reqres.in/api/users/25")
.then((res)=> res.json())
.then((data) => console.log(data))
.catch(error => console.log("Error"));
*/


/*
fetch("https://reqres.in/api/users")
.then((res)=> {
    if(res.ok){
        console.log('Fetch Successful');
    }else {
        console.log('Fetch Is NOT SUCCESSFUL!!');
    }
    res.json()
})
.then((data)=>console.log(data))
.catch(error => console.log("Error"));
*/

// GET, POST, 

fetch("https://reqres.in/api/users",{
    method: 'POST',
    headers: {
        'Content-type': 'application/json',
    },
    body: JSON.stringify({
        name: 'New User 1'
    })
}).then((res)=> {
    return res.json()})
.then((data)=>console.log(data))
.catch(error => console.log("Error"));