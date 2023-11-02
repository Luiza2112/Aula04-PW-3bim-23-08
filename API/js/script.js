fetch('https://images.dog.ceo/breeds/segugio-italian/n02090722_002.jpg')
    .then(function(data) {
        return data.blob()
    }).then(function(blob){
        const imgURL = URL.createObjectURL(blob)
        const img = '<img src="' + imgURL + '" />'

       document.querySelector('#cachorro').innerHTML = img
   })

//const cachorro = document.getElementById("cachorro")
//cachorro.src = "https://images.dog.ceo/breeds/segugio-italian/n02090722_002.jpg"

//const gato = "https://api.thecatapi.com/v1/"
//const imgGato = document.getElementById('imgGato');
//const getGato = document.getElementById('getGato');
//const btnGetApiData = document.getElementById('btnGetApiData')

//function getImg(){
//    fetch(gato + "images/search").then( response => response.json()).then( data => imgGato.src = data.message)
//}

//function getApiData(){
//    fetch(gato + "images/search").then(response => {console.log(response)})
//}