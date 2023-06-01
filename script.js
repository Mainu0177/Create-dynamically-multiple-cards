// const slideshowElements = document.querySelectorAll(".slideshow-element");

//  let countElements = 1;

// setInterval(() => {
//     countElements ++;
//     const currentElement = document.querySelector(".current");
    
//     currentElement.classList.remove("current");

//     if(countElements > slideshowElements.length){
//         slideshowElements[0].classList.add("current");
//         countElements = 1;

//     }
//     else{
//         currentElement.nextElementSibling.classList.add("current");
//     }

// }, 2000);


// dummy data

// const posts = [
//     {
//         title : "this is title 1",
//         body : "this is body 1"
//     },

//     {
//         title : "this is title 2",
//         body : "this is body 2"
//     },
//     {
//         title : "this is title 3",
//         body : "this is body 3"
//     },
//     {
//         title : "this is title 4",
//         body : "this is body 4"
//     },
//     {
//         title : "this is title 5",
//         body : "this is body 5"
//     },
//     {
//         title : "this is title 6",
//         body : "this is body 6"
//     },
//     {
//         title : "this is title 7",
//         body : "this is body 7"
//     },
//     {
//         title : "this is title 8",
//         body : "this is body 8"
//     },
//     {
//         title : "this is title 9",
//         body : "this is body 9"
//     },
//     {
//         title : "this is title 10",
//         body : "this is body 10"
//     },
//     {
//         title : "this is title 11",
//         body : "this is body 11"
//     },
//     {
//         title : "this is title 12",
//         body : "this is body 12"
//     }

// ]


// <div class = "post">
// <h4 class = "post-title">post title 1</h4>
// <p class = "post-body">post description 1</p>
// </div>



// fetch data 

// const fetchData = async (config) => {
//     try{
//     const res = await axios(config);
//     return res.data;
//     }   
//     catch(error) {
//         throw Error("Data is not fetched")
//     } 
// };



// // selection 

// const postsElement = document.querySelector(".posts");

// const loadAllData = async () => {
//     const posts = await fetchData("https://jsonplaceholder.typicode.com/posts");
//     posts.map((post) => {
//         const postElement = document.createElement("div");
//         postElement.classList.add("post")
//         postElement.innerHTML = `
//           <h4 class = "post-title">${post.title}</h4>
//         <p class = "post-body">${post.body}</p>
//         `;
//         postsElement.appendChild(postElement);
//     });
    
// };

// loadAllData();


//dummy Data 

// const posts = [
//     {
//         title: "this is title 1",
//         body: "this is body 1"
//     },
//     {
//         title: "this is title 2",
//         body: "this is body 2"
//     },
//     {
//         title: "this is title 3",
//         body: "this is body 3"
//     },
//     {
//         title: "this is title 4",
//         body: "this is body 4"
//     },
//     {
//         title: "this is title 5",
//         body: "this is body 5"
//     },
//     {
//         title: "this is title 6",
//         body: "this is body 6"
//     },
//     {
//         title: "this is title 7",
//         body: "this is body 7"
//     },
//     {
//         title: "this is title 8",
//         body: "this is body 8"
//     },
//     {
//         title: "this is title 9",
//         body: "this is body 9"
//     },
//     {
//         title: "this is title 10",
//         body: "this is body 10"
//     },
//     {
//         title: "this is title 11",
//         body: "this is body 11"
//     },
//     {
//         title: "this is title 12",
//         body: "this is body 12"
//     } 
// ]

// fetch Data

const fetchData = async (config) => {
    try{
    const res = await axios (config);
    return res.data;
    }
    catch(error){
        throw Error("Data is not fetched");
    }
};
//selection

const postsElement = document.querySelector(".posts")

const loadAllData = async () =>{
              const posts = await fetchData("https://jsonplaceholder.typicode.com/posts");
    posts.map((post) =>{
        const postElement = document.createElement("div");
        postElement.classList.add("post");
        postElement.innerHTML = `
            <h4 class = "post-title">${post.title}</h4>
            <p class = "post-body">${post.body}</p>
        `;
        postsElement.appendChild(postElement);

        
    });

}
loadAllData();