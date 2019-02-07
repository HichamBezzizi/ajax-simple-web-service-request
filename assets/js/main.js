


 //fetching data using a button

  let knop = document.getElementById('btn');
  knop.addEventListener('click', function(){
      fetch('https://thatsthespir.it/api')
      .then((response) => response.json())
      .then((data)=>{
          document.getElementById('quote').innerHTML = data.quote;
      })
      .catch((error) => {
          console.log(error);
      });
  })


// fetching data through console.log

  /*fetch('https://thatsthespir.it/api')
  .then((response) => response.json())
  .then((myJSON => printQuote(myJSON)))
  .catch((error) =>{
      console.log(error);
  })
  const printQuote = (myJSON) => {
      var quote = myJSON.quote
      var author = myJSON.author
      console.log(quote)
      console.log(author)
  };*/

