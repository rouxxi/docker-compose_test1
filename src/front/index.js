const button = document.getElementById('change');
const URLs = "http://localhost:8050/feelings"
const message = document.getElementById("result");

button.addEventListener('click', (event)=> {
    event.preventDefault();
    let msg = '';
    axios.get(URLs).then(response => msg = response.data).then((res)=>  message.innerHTML = msg);
})