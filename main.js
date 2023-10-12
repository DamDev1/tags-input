const tags = document.querySelector(".tags ul");
const tag_input = document.querySelector(".tag-input")

tag_input.addEventListener('keydown', (e) =>{
    let getUserInput = tag_input.value;
    if(e.key === "Enter"){
        const tag = document.createElement('li')
        tag.textContent = getUserInput;
        tags.appendChild(tag)

        const remove = document.createElement('span');
        remove.textContent = "X"
        tag.appendChild(remove)
        remove.classList.add("remove")

        remove.addEventListener('click', () =>{
            tag.style.display = "none"
        })

        tag_input.value = ""
    }else{
        return false
    }
})