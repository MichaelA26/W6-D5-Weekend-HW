document.addEventListener('DOMContentLoaded', () => {
  const newItemform = document.querySelector('#new-item-form');
  newItemform.addEventListener('submit', handleNewItemFormSubmit);

  const deleteAllButton = document.querySelector('#delete-all');
  deleteAllButton.addEventListener('click', handleDeleteAllClick);
})

const handleNewItemFormSubmit = function (event) {
  event.preventDefault();

  const readingListItem = createReadingListItem(event.target);
  const readingList = document.querySelector('#team-checklist');
  readingList.appendChild(readingListItem);

  event.target.reset();
}

const createReadingListItem = function (form) {
  const readingListItem = document.createElement('li');
  readingListItem.classList.add('team-checklist-item');

  const teamName = document.createElement('h2');
  teamName.textContent = form.teamName;
  readingListItem.appendChild(teamName);

  const homeCity = document.createElement('h3');
  homeCity.textContent = form.homeCity;
  readingListItem.appendChild(homeCity);

  const league = document.createElement('p');
  league.textContent = form.league.value;
  readingListItem.appendChild(league);

  return readingListItem;
}

const handleDeleteAllClick = function (event) {
  const readingList = document.querySelector('#team-checklist');
  readingList.innerHTML = '';
}
