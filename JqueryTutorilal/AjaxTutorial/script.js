// 1. Ajax = Stands fr Asynchronous Javascript and XML , it is used to send and receive data from the server without reloading the entire webpage.It enables us to dynamically handle and update the part of the code without altering the complete code.

// Methods present in the ajax:

// 1. $.get(endPoint,callbackWithResponseData);

// 2. $.post(endPoint,dataToBeSend,callbackWithResponse);

/*

3. $.ajax({
    url:"specific",
    type:"GET/POST",
    data:dataToBeSend, // Only for post method
    success:(response)=>{},
    error:(error)=>{}
})


*/

// e.g. 1. Fake form submit:

// $("#submitBtn").click((event) => {
//   event.preventDefault();

//   let formData = {
//     name: $("#name").val(),
//     body: $("#desc").val(),
//     postId: 1,
//   };

//   // Async Call:
//   $.ajax({
//     url:"https://jsonplaceholder.typicode.com/comments",
//     type:"POST",
//     data:formData,
//     success:(res)=>{
//         console.log(res);
//         $("#name").val(" ");
//         $("#desc").val(" ");
//         alert("Data Send Successfully.");
//     },
//     error:(err)=>{
//         console.log(err);
//         alert("Error While Sending Data.");
//     }
//   })

// });

// 2. Get data from the server:

// $.ajax({
//     url:"https://jsonplaceholder.typicode.com/users",
//     type:"GET",
//     success:(res)=>{
//         console.log(res);
//         alert("Data Fetched Successfully.");
//     },
//     error:(err)=>{
//         console.log(err);
//         alert("Error While Fetching Data.");
//     }
// });
