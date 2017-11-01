let myFirstPromise = new Promise((resolve, reject) => {
    setTimeout(function(){
      resolve("Success!"); 
    }, 250);
  });
  
  myFirstPromise.then((successMessage) => {
    console.log("Yay! " + successMessage);
  });


  function myAsyncFunction(url) {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open("GET", url);
      xhr.onload = () => resolve(xhr.responseText);
      xhr.onerror = () => reject(xhr.statusText);
      xhr.send();
    });
  }