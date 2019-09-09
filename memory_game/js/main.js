
 console.log('Up and running!');
 var cards=['King','King','Queen','Queen'];
 var cardsInPlay=[];

 function checkForMatch()
 {
 	if(cardsInPlay[0]===cardsInPlay[1])
 	{
 		console.log('You found a match!');
 	}
 		else
 		{
 			console.log('Sorry, try again.');
 	}
 }
 function flipcard(cardId)
 {
 	console.log('User flipped ' + cards[cardId]);
 	cardsInPlay.push(cards[cardId]);
 	checkForMatch();
 if (cardsInPlay.length===1)
 {
 	
 }
}
flipcard(0);
flipcard(2);