
const yesBtn = document.getElementById('yes-btn');
const noBtn = document.getElementById('no-btn');

axios.defaults.headers.common["x-api-key"] = '1f53c734-cd9d-4786-a874-d25fdda1eca1';
axios.defaults.headers.common['Content-Type'] = 'application/json';

let image
let imageID
let likedHtml = ''
let dislikedHtml = ''

const getData = () => {
    axios.get('https://young-hollows-19286.herokuapp.com/')
    .then(response => {
        image = response.data.url
        imageID = response.data.id
        console.log(image)
        document.getElementById('cat-img').src = image
    })
    .catch(error => {
        console.log(error);
    })
};


const sendLikedData = () => {
    axios.post('https://api.thecatapi.com/v1/votes', 
    {
        image_id: imageID,
        value: 1
    })
    .then(response => {
    likedHtml += `
        <div class="liked-cats">
            <img class="liked-img" src="${image}"></img>
        </div>
    `;
    document.getElementById('liked-result').innerHTML = likedHtml;
    getData();
    })
    .catch(error => {
        console.log(error);
    });
};

const sendDislikedData = () => {
    axios.post('https://api.thecatapi.com/v1/votes', 
    {
        image_id: imageID,
        value: 0
    })
    .then(response => {
    dislikedHtml += `
        <div class="disliked-cats">
            <img class="disliked-img" src="${image}"></img>
        </div>
    `;
    document.getElementById('disliked-result').innerHTML = dislikedHtml;
    getData();
    })
    .catch(error => {
        console.log(error);
    });
};

yesBtn.addEventListener('click', sendLikedData);
noBtn.addEventListener('click', sendDislikedData);
