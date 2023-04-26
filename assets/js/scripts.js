let x = document.querySelector('.x');
let o = document.querySelector('.o');
let boxes = document.querySelectorAll('.box');
let buttons = document.querySelectorAll('#buttons-container button');
let messageContainer = document.querySelector('#message');
let messageText = document.querySelector('#message p');
let secondPlayer;

// contador de jogadas
let player1 = 0;
let player2 = 0;

// Vê quem vai jogar
function checkEl(player1, player2) {
   let el;
      
   if(player1 == player2) {
      // x
      el = x;
   } else {
      // o
      el = o;
   }

   return el;
}

// adicionando o evento de click nos boxes
for(let i = 0; i < boxes.length;i++) {

   // Quando alguém clica na caixa
   boxes[i].addEventListener('click', function() {

      let el = checkEl(player1, player2);

      // Verifica se já tem x ou o
      if(this.childNodes.length == 0) {

         let cloneEl = el.cloneNode(true);

         this.appendChild(cloneEl);

         // Computar jogada
         if(player1 == player2) {
            player1++;
         } else {
            player2++;
         }
      }
   });
}