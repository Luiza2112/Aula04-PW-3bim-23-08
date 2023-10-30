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
