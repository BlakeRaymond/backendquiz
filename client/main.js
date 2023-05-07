const complimentBtn = document.getElementById("complimentButton")
const fortuneBtn = document.getElementById("fortuneButton")
const nameBtn = document.getElementById("nameButton")
const cliqueBtn = document.getElementById("cliqueButton")
const homelandBtn = document.getElementById("homelandButton")
const createCharBtn = document.getElementById("createCharButton")

const charDiv = document.getElementById("char-cont")
const keepDiv = document.getElementById("keep-char")

// let keepArr = []

const getCompliment = () => {

    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data)
        });
};

const getFortune = () => {
    axios.get("http://localhost:4000/api/fortune/")
        .then((res) => {
            const data = res.data;
            alert(data)
        })
}

const getName = () => {
    axios.get("http://localhost:4000/api/name/")
        .then((res) => {
            const data = res.data;
            alert(data)
        })
}

const getClique = () => {
    axios.get("http://localhost:4000/api/clique/")
        .then((res) => {
            const data = res.data;
            alert(data)
        })
}

const getHomeland = () => {
    axios.get("http://localhost:4000/api/homeland/")
        .then((res) => {
            const data = res.data;
            alert(data)
        })
}


const createCharacter = () => {

    let urls = ["http://localhost:4000/api/name/", "http://localhost:4000/api/clique/", "http://localhost:4000/api/homeland/", "http://localhost:4000/api/fortune/", "http://localhost:4000/api/compliment/"]

    const requests = urls.map((url) => axios.get(url))

    charDiv.innerHTML =""

    axios.all(requests)
        .then((responses) => {

            let character = {
                Name: responses[0].data,
                Clique: responses[1].data,
                Hometown: responses[2].data,
                Fortune: responses[3].data,
                Compliment: responses[4].data
            }

            let nameP = document.createElement('p')
            let cliqueP = document.createElement('p')
            let hometownP = document.createElement('p')
            let fortuneP = document.createElement('p')
            let complimentP = document.createElement('p')
            let keepBtn = document.createElement('button')
            let delBtn = document.createElement('button')

            nameP.textContent = character.Name
            cliqueP.textContent = character.Clique
            hometownP.textContent = character.Hometown
            fortuneP.textContent = character.Fortune
            complimentP.textContent = character.Compliment
            keepBtn.textContent = "Keep?"
            delBtn.textContent = "Try again!"

            charDiv.appendChild(nameP)
            charDiv.appendChild(cliqueP)
            charDiv.appendChild(hometownP)
            charDiv.appendChild(fortuneP)
            charDiv.appendChild(complimentP)
            charDiv.appendChild(keepBtn)
            charDiv.appendChild(delBtn)

            keepBtn.addEventListener('click', () => {
                axios.post('http://localhost:4000/api/character', character)
            })

            console.log(character)

           

            delBtn.addEventListener('click', createCharacter)

        })
}

complimentBtn.addEventListener('click', getCompliment)
fortuneBtn.addEventListener('click', getFortune)
nameBtn.addEventListener('click', getName)
cliqueBtn.addEventListener('click', getClique)
homelandBtn.addEventListener('click', getHomeland)
createCharBtn.addEventListener('click', createCharacter)