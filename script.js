// get filter element
// get cards elements

// add input event for the filter element

// filter function
// if the filter is not empty
// for each card of cards
// get card heading (title)
// transform to lower case
// transform filter text to lower case
// if card title does not include the filter text
// hide the card element
// else
// unhide the card element
// else
// for each card of cards
// unhide the card element

let filter = document.querySelector('#filter');
let cards = document.querySelectorAll('.cards li');

addEventListener('keyup', () => {
  let value = filter.value;

  cards.forEach((element) => {
    let titleCards = element.children[0].textContent.trim().toLowerCase();
    if (value === '') {
      element.style.display = 'block';
    } else if (titleCards.includes(value)) {
      element.style.display = 'block';
    } else {
      element.style.display = 'none';
    }
  });
});
