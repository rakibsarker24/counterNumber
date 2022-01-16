// let type = document.querySelectorAll(".text")
// let arr = Array.from(type)


// arr.map(function(item){
//     let count = -1
//     console.log(item.dataset.text)

//     function typejs(){
//         count++
//         item.innerHTML += item.dataset.text.charAt(count)
//         if(count == item.dataset.text.length){
//             item.innerHTML = ""
//             count = -1
//         }
//     }

//     setInterval(function(){
//         typejs()
//     },500)
// })

let count = document.querySelector(".count")

let counter = 0



function plus() {
    counter++
    count.innerHTML = "Start Counting: " + counter 
    if(counter == count.dataset.number){
        clearInterval(stop)
    }
}

let stop = setInterval(function() {
    plus()
}, 100)