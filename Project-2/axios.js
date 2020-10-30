
const yesBtn = document.getElementById('yes-btn');
const noBtn = document.getElementById('no-btn');

axios.defaults.headers.common["x-api-key"] = '1f53c734-cd9d-4786-a874-d25fdda1eca1';
axios.defaults.headers.common['Content-Type'] = 'application/json';

let image
let imageID
let likedHtml = ''
let dislikedHtml = ''

const getData = () => {
    axios.get('https://serene-woodland-18996.herokuapp.com/')
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

const displayVotes = () => {
    axios.get('https://serene-woodland-18996.herokuapp.com/votes')
    .then(response => {
        response.data.forEach(cat => {
            if (cat.value === 0) {
                dislikedHtml += `
                    <div class="disliked-cats">
                        <img class="disliked-img" src="${cat.url}"></img>
                    </div>
                `;
                document.getElementById('disliked-result').innerHTML = dislikedHtml;
            } else {
                likedHtml += `
                    <div class="liked-cats">
                        <img class="liked-img" src="${cat.url}"></img>
                    </div>
                `;
                document.getElementById('liked-result').innerHTML = likedHtml;
            }
        });
        console.log(response.data)
    })
}

const sendLikedData = () => {
    axios.post('https://serene-woodland-18996.herokuapp.com/votes', 
    {
        image_id: imageID,
        value: 1,
        url: image
    })
    .then(response => {
    console.log(response)
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
    axios.post('https://serene-woodland-18996.herokuapp.com/votes', 
    {
        image_id: imageID,
        value: 0,
        url: image
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
