
const yesBtn = document.getElementById('yes-btn');
const noBtn = document.getElementById('no-btn');

axios.defaults.headers.common["x-api-key"] = '1f53c734-cd9d-4786-a874-d25fdda1eca1';
axios.defaults.headers.common['Content-Type'] = 'application/json';

const getData = () => {
    axios.get('https://api.thecatapi.com/v1/images/search')
    .then(response => {
        const image = response.data[0].url
        document.getElementById('cat-img').src = image
    })
    .catch(function (error) {
        console.log(error);
    })
};

const sendData = () => {
    axios.post('https://api.thecatapi.com/v1/votes', 
    {
        image_id: '',
        value: 1
    })
    .then(response => {
        console.log(response);
    })
    .catch(error => {
        console.log(error);
    });
};

yesBtn.addEventListener('click', getData);
yesBtn.addEventListener('click', sendData);
noBtn.addEventListener('click', getData);
