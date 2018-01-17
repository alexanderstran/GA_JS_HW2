(function() { // protect the lemmings!

console.log("yo");
	// the goal of this pset is to select different HTML elements with JQuery
	// it is meant to show you a little bit about the paradigm jQuery is built around
	// and demonstrate the power of the jQuery selector engine ( called sizzle )

	// please select the item with ID : page-header
	// save it to a variable and console.log it
const $pageHeaderEl = $('#page-header');
console.log($pageHeaderEl);

	// please select the item or items with CLASS : card
	// save it to a variable and console.log it
const $cardEl = $('.card');
console.log($cardEl);


	// what kind of javascript variable is cardEl?
	//const $cardElType = jQuery.type(cardEl);
	console.log(typeof $cardEl);
	// (interesting article that describes what the jQuery object actually returns:
	// http://www.learningjquery.com/2008/12/peeling-away-the-jquery-wrapper/ )

	// please select all the unorder lists in the document
	// save it as var and console log it
const $ulEls = $('ul');
console.log($ulEls);

	// I want to know how many anchor tags are present in the ENTIRE document
	// please construct a selector that will grab them all and console.log out
	// the number of anchor tags in this document
const $numAnchorTags = $('a').length;
console.log($numAnchorTags);

	// I would like to know how many ULs can be found inside the CLASS: card
	// please construct a selector that chooses them all and console.log out the number
	// of ULs that are children of the CLASS: card
const $numberOfUlsChildrenOfLIs = $('.card ul');
console.log($numberOfUlsChildrenOfLIs.length);

	// please console.log out the text inside the FIRST list item in ID: page-header
const $textInsideFirstPageHeaderItem = $('#page-header ul li');
console.log($textInsideFirstPageHeaderItem);

// oR

/*
const textInsideFirstPageHeaderItem = document.querySelector('#page-header ul li').innerText;
console.log(textInsideFirstPageHeaderItem);
*/

	// please construct a selector that returns ALL the ODD list items in
	// the HTML element with CLASS: cards
	// console.log out these results
const $oddChildrenOfCards = $('.cards li.card:nth-of-type(odd)');
console.log($oddChildrenOfCards);

/*
// modulo 
const results = [];
const oddChildrenOfCards = document.querySelectorAll('.cards li.card');
for (let 1=0; 1 < oddChildrenOfCards.length; 1++) {
	if (1 % 2 === 0) {
		results.push(oddChildrenOfCards(i))
	}

}
console.log(oddChildrenOfCards);
*/

	// REFERENCE: here's a list of jQuery selectors:
	// http://api.jquery.com/category/selectors/

})();

