let screen = document.querySelector(".screen")
// screen.style.backgroundImage = "url('jaj.jpeg')"
let prev = document.querySelector(".prev")
let next = document.querySelector(".next")

let count = 0

let slider = ['jaj.jpeg','jaj2.jpeg', 'jaj3.jpeg','jaj4.jpeg','jaj5.png']
screen.style.backgroundImage = `url(${slider[count]})`

    next.addEventListener("click",function(){
        
      
        screen.style.backgroundImage =  `url(${slider[count]})`


        console.log(count);

        if(count >=slider.length -1){
            count = 0
            screen.style.backgroundImage =  `url(${slider[count]})`
        }else{
            count++
            screen.style.backgroundImage =  `url(${slider[count]})`
        }
    })

    prev.addEventListener("click",function(){
        
      
        screen.style.backgroundImage =  `url(${slider[count]})`


        console.log(count);

        if(count <= 0){
            count = slider.length -1
            screen.style.backgroundImage =  `url(${slider[count]})`
        }else{
            count--
            screen.style.backgroundImage =  `url(${slider[count]})`
        }
    })


