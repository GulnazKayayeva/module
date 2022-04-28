export{fun}

let a = document.querySelectorAll('.acardion')
let b = document.querySelectorAll('.text')
let svg = document.querySelectorAll('svg')


let fun = () => { a.forEach((el) => {
    console.log(el.lastChild.previousSibling.firstChild);
    el.onclick = () => {
        let item = el.nextElementSibling;
        console.log(item);
        if(item.style.maxHeight){
                b.forEach(alltext => alltext.style.maxHeight = null)
                el.lastChild.previousSibling.firstChild.style.transform = "rotate(0)" 

        } else {
            b.forEach(alltext => alltext.style.maxHeight = null)
            item.style.maxHeight = item.scrollHeight + 'px'
            svg.forEach(ss => ss.style.transform = "rotate(0)"  )

            el.lastChild.previousSibling.firstChild.style.transform = "rotate(90deg)"
        }
    }
})}
