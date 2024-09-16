const readBtn = document.querySelector('#read');
const form = document.querySelector('form');
const inputFile = form.querySelector('input');
const results = document.querySelector('#result')
const resultsbox = document.querySelector('#resultsbox')
const readcontainer = document.querySelector('#readcontainer')
const formcontainer = document.querySelector('#formcontainer')
const resetBtn = document.querySelector('#reset')
const errorbox = document.querySelector('#errorbox')
const gobackbtn = document.querySelector('#goback')
const copyBtn = document.querySelector('#copyBtn')




const fetchRequest = (formData) => {
    fetch("http://api.qrserver.com/v1/read-qr-code/", {
        method: "POST",
        body: formData
    })
    .then(res => res.json())
    .then(result => {
        result = result[0].symbol[0].data
        console.log(result)
        if (!result) {
            return
        }
        results.value = result
        resultsbox.style.display = "block"
        formcontainer.style.display = "none"
        readcontainer.style.display = "none"
    })
    .catch(()=>{
        errorbox.style.display = "flex"
    })
};

let file;

inputFile.addEventListener('change', e => {
    file = e.target.files[0];
    console.log(file);
});

readBtn.addEventListener('click', () => {
    if (file) {
        let formData = new FormData();
        formData.append('file', file);
        fetchRequest(formData);
    } else {
        console.log('No file selected');
    }
});

resetBtn.addEventListener('click', ()=>{
    resultsbox.style.display = "none"
    formcontainer.style.display = "flex"
    readcontainer.style.display = "flex"
})
gobackbtn.addEventListener('click', ()=>{
    errorbox.style.display = "none"
})
copyBtn.addEventListener("click", () => {
    let text = results.value
    navigator.clipboard.writeText(text);
});