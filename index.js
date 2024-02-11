const form = document.forms.add_task
const container = document.querySelector('.big')
let todos = []



form.onsubmit = (e) => {
    e.preventDefault()
    
    let task = {
        id: Math.random(),
        task: new FormData(form).get('task'),
        status: false,
        time: new Date().toLocaleTimeString('uz-UZ', {hour12: true})
    }
    
    if(task.task.trim() !== "") {
        todos.push(task)        
        reload(todos, container)
    }
   
    
}


function reload(arr, place) {
    place.innerHTML = ""
    
    for(let item of arr) {
        let p = document.createElement('p')
        let div = document.createElement('div')
        let top_box = document.createElement('div')
        let del = document.createElement('img')
        let time = document.createElement('span')
        
        div.classList.add('mini_box')
        top_box.classList.add('pokup')
        time.classList.add('minutes')
        del.classList.add('del')
        
        p.innerHTML = item.task
        time.innerHTML = item.time
        del.src = './xbutton_87873.png'

        div.append(top_box, time)
        top_box.append(p,del)
        place.append(div)

        p.onclick = () => {
            p.classList.toggle('line')
            if(p.classList.contains('line')) {
                item.status = true
            }  else {
                item.status = false
            }
            console.log(item);
        }


        del.onclick = () => {
            todos = todos.filter(el => el.id !== item.id)

            div.classList.add('remove-anim')

            setTimeout(() => {
                div.remove()
            }, 500)
        }
    }
}


