const button = document.querySelectorAll('.drum');
const allButton = document.querySelector('.set')


// for(let i = 0; i < button.length; i++){
//     button[i].addEventListener('click', () => {
//         if(i == 0){
//             const audio1 = new Audio('sounds/crash.mp3')
//             audio1.play()
            
//         } else if(i == 1){
//             const audio2 = new Audio('sounds/kick-bass.mp3')
//             audio2.play()
//         } else if(i == 2){
//             const audio3 = new Audio('sounds/snare.mp3')
//             audio3.play()
//         } else if(i == 3){
//             const audio4 = new Audio('sounds/tom-1.mp3')
//             audio4.play()
//         } else if(i == 4){
//             const audio5 = new Audio('sounds/tom-2.mp3')
//             audio5.play()
//         } else if(i == 5){
//             const audio6 = new Audio('sounds/tom-3.mp3')
//             audio6.play()
//         } else if(i == 6){
//             const audio7 = new Audio('sounds/tom-4.mp3')
//             audio7.play()
//         } 

        
//     })
// }

for(let i = 0; i < button.length; i++){
    button[i].addEventListener('click', () => {
        switch (i) {
            case 0:
                const audio1 = new Audio('sounds/crash.mp3')
                audio1.play()
              break;
            case 1:
                const audio2 = new Audio('sounds/kick-bass.mp3')
                audio2.play()
              break;
            case 2:
               const audio3 = new Audio('sounds/snare.mp3')
               audio3.play()
              break;
            case 3:
                const audio4 = new Audio('sounds/tom-1.mp3')
                audio4.play()
              break;
            case 4:
                const audio5 = new Audio('sounds/tom-2.mp3')
                audio5.play()
              break;
            case 5:
                const audio6 = new Audio('sounds/tom-3.mp3')
                audio6.play()
              break;
            case 6:
                const audio7 = new Audio('sounds/tom-4.mp3')
                audio7.play()
          }

        
    })
}


document.addEventListener('keypress', (e) => {
    switch (e.key) {
        case 'w':
            const audio1 = new Audio('sounds/crash.mp3')
            audio1.play()
          break;
        case 'a':
            const audio2 = new Audio('sounds/kick-bass.mp3')
            audio2.play()
          break;
        case 's':
           const audio3 = new Audio('sounds/snare.mp3')
           audio3.play()
          break;
        case 'd':
            const audio4 = new Audio('sounds/tom-1.mp3')
            audio4.play()
          break;
        case 'j':
            const audio5 = new Audio('sounds/tom-2.mp3')
            audio5.play()
          break;
        case 'k':
            const audio6 = new Audio('sounds/tom-3.mp3')
            audio6.play()
          break;
        case 'l':
            const audio7 = new Audio('sounds/tom-4.mp3')
            audio7.play()
      }
})



















// button.forEach((btn) => {
//     btn.addEventListener('click', () => {
//         alert('I simply got clicked!')
//     })
// })



// allButton.addEventListener('click', handleClick)

// function handleClick(e){
//     const isButton = e.target.classList.contains('drum')
//     if(isButton){
//         alert('I got clicked!')
//     }
// }
























































// // Higher Order Function

// function add(num1, num2){
//     return num1 + num2
// }

// function subtract(num1, num2){
//     return num1 - num2
// }

// function multiply(num1, num2){
//     return num1 * num2
// }

// function divide(num1, num2){
//     return num1 / num2
// }

// function calculate(num1, num2, operator){
//     return operator(num1, num2)
// }

// console.log(calculate(12,3, add))



// // JavaScript Constructor
// function Houskeeper(yearsOfExperience, name, cleaningRepertoire){
//     this.year = yearsOfExperience;
//       this.fullname = name;
//       this.cleaning = cleaningRepertoire;
//       this.clean = function(){
//          alert('Cleaning in Progress...')
//       }
//   }
  
//   var housekeeper1 = new Houskeeper(20,'Esther', ['bathroom', 'office', 'kitchen']);
//   var housekeeper2 = new Houskeeper(22,'Jane', ['office', 'kitchen']);
//   var housekeeper3 = new Houskeeper(30,'Taiwo', ['bathroom', 'office']);
//   var housekeeper4 = new Houskeeper(29,'Kehinde', ['bathroom', 'kitchen']);

//   housekeeper1.clean();  // Cleaning in progress..