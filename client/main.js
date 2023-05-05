const complimentBtn = document.getElementById("complimentButton")
const fortuneBtn = document.getElementById("fortuneButton")
const nameBtn = document.getElementById("nameButton")
const classBtn = document.getElementById("classButton")
const homelandBtn = document.getElementById("homelandButton")
const createCharBtn = document.getElementById("createCharButton")

const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

const getFortune = () => {
    axios.get("http://localhost:4000/api/fortune/")
    .then((res) => {
        const data = res.data;
        alert(data);
    })
}

const getName = () => {
    axios.get("http://localhost:4000/api/name/")
    .then((res) => {
        const data = res.data;
        alert(data);
    })
}

const getClass = () => {
    axios.get("http://localhost:4000/api/class/")
    .then((res) => {
        const data = res.data;
        alert(data);
    })
}

const getHomeland = () => {
    axios.get("http://localhost:4000/api/homeland/")
    .then((res) => {
        const data = res.data;
        console.log(res.data)
        alert(data);
    })
}

// const createCharacter = () => {
//     axios.post("http://localhost:4000/api/fortune/")
//     .then((res) => {
//         const data = res.data;


//         alert(data);
//     })
// }

complimentBtn.addEventListener('click', getCompliment)
fortuneBtn.addEventListener('click', getFortune)
nameBtn.addEventListener('click', getName)
classBtn.addEventListener('click', getClass)
homelandBtn.addEventListener('click', getHomeland)
// createCharBtn.addEventListener('click', createChar)