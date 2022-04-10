let randMovie = ''

function getMovie(){
    fetch('https://ghibliapi.herokuapp.com/films')
    .then(res => {
        return res.json()
    })
    .then(data =>{
        console.log(data)
        randMovie = data[Math.floor(Math.random() * data.length)]
        console.log(randMovie)
        document.querySelector('img').src = randMovie.image
    })   
}


document.querySelector('#movie-getter').addEventListener('click', getMovie)