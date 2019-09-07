document.addEventListener('DOMContentLoaded', () => {
  const newItemform = document.querySelector('#new-item-form');
  newItemform.addEventListener('submit', handleNewItemFormSubmit);

  const deleteAllButton = document.querySelector('#delete-all');
  deleteAllButton.addEventListener('click', handleDeleteAllClick);
})

const handleNewItemFormSubmit = function (event) {
  event.preventDefault();

  const teamChecklisttItem = createTeamChecklisttItem(event.target);
  const teamChecklist = document.querySelector('#team-checklist');
  teamChecklist.appendChild(teamChecklisttItem);

  event.target.reset();
}

const createTeamChecklisttItem = function (form) {
  const teamChecklisttItem = document.createElement('li');
  teamChecklisttItem.classList.add('team-checklist-item');

  const teamName = document.createElement('h2');
  teamName.textContent = form.teamName.value;
  teamChecklisttItem.appendChild(teamName);

  const homeCity = document.createElement('h3');
  homeCity.textContent = form.homeCity.value;
  teamChecklisttItem.appendChild(homeCity);

  const league = document.createElement('p');
  league.textContent = form.league.value;
  teamChecklisttItem.appendChild(league);

  return teamChecklisttItem;
}

const handleDeleteAllClick = function (event) {
  const teamChecklist = document.querySelector('#team-checklist');
  teamChecklist.innerHTML = '';
}
