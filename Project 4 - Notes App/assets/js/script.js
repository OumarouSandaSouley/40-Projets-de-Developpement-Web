const addBtn = document.querySelector('#new_note')
const title = document.querySelector('#note_title')
const category = document.querySelector('#note_categ')
const description = document.querySelector('#desc')
const notesContainer = document.querySelector('#notesContainer')


const deteleNote = (index) =>{
    const notes = JSON.parse(localStorage.getItem('notes')) || [];
    notes.splice(index, 1)
    localStorage.setItem('notes', JSON.stringify(notes));
    displayNotes()
}


const displayNotes = () => {
    const notes = JSON.parse(localStorage.getItem('notes')) || [];
    notesContainer.innerHTML = ''


    notes.forEach((elem, index) => {



        const note = document.createElement('div')
        note.classList.add('note')
        const details = document.createElement('div')
        details.classList.add('details')
        const categ = document.createElement('h4')
        categ.classList.add('categ')
        categ.textContent = elem.categ
        const note_title_result = document.createElement('h5')
        note_title_result.classList.add('note_title_result')
        note_title_result.textContent = elem.ttl
        const note_desc = document.createElement('p')
        note_desc.textContent = elem.desc
        note_desc.classList.add('note_desc')
        const date = document.createElement('span')
        date.classList.add('date')
        date.textContent = elem.date
        const actions = document.createElement('div')
        actions.classList.add('actions')
        // const viewBtn = document.createElement('button')
        // viewBtn.classList.add('view')
        // viewBtn.textContent = "Voir"
        const deleteBtn = document.createElement('button')
        deleteBtn.classList.add('delete')
        deleteBtn.textContent = "Supprimer"
        deleteBtn.addEventListener('click', ()=>{
            deteleNote(index)
        })

        // actions.appendChild(viewBtn)
        actions.appendChild(deleteBtn)
        details.appendChild(categ)
        details.appendChild(note_title_result)
        details.appendChild(note_desc)
        details.appendChild(date)
        note.appendChild(details, actions)
        note.appendChild(actions)
        notesContainer.appendChild(note)
        console.log(note)
    });
}



const addNewNote = () => {
    titleValue = title.value
    categoryValue = category.value
    descriptionValue = description.value
    if (titleValue == "") {
        alert("Les champs marqué par l'étoile sont obligatoires")
    } else {
        console.log(titleValue, categoryValue, descriptionValue)
        const newNote = {
            ttl: titleValue,
            categ: categoryValue,
            desc: descriptionValue,
            date: new Date().toISOString()
        }
        let notes = JSON.parse(localStorage.getItem('notes')) || [];
        notes.push(newNote)
        localStorage.setItem('notes', JSON.stringify(notes));
        console.log('données ajoutées');
        displayNotes()
    }

}



addBtn.addEventListener('click', () => {
    addNewNote()
})
displayNotes()