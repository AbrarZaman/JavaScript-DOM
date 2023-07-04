// First way of accessing an element if you have class or ID or everthing and is used the most

// Chaange HTML
//console.log(document.querySelector('.title')).innerHTML += 'Frontend Simplified'

// Second way of accessing an element if you have an ID

//console.log(document.getElementById('title'))


// Chaange CSS
//console.log(document.querySelector('.title')).style.color = 'red'
//console.log(document.querySelector('.title')).style.fontSize = '10px'


//function changeTitleToRed(){
 //   document.querySelector(".title").style.color ='red'
//    console.log('clicked');
// }

function toggleDarkMode(){
    document.querySelector("body").classList.toggle("dark-theme")
}
