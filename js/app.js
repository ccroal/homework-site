document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');

  const selector = function(id){
    return document.querySelector(id);
  }

  const form = selector('#new-film-form')

  const deleteButton = selector('#delete-all-button');

  const handleDeleteButton = function(event){
    const moviesList = selector('#movies-list');
    moviesList.innerHTML = '';
  }

  deleteButton.addEventListener('click', handleDeleteButton);

  const addElement = function(type){
    return document.createElement(type);
  }

  const handleFormSubmit = function(event){
    event.preventDefault();

    const title = event.target.title.value;
    const director = event.target.director.value;
    const year = event.target.year.value;

    const movies = selector('#movies-list');


    const movieDetails = addElement('div');
    const titlePara = addElement('p');
    const directorPara = addElement('p');
    const yearPara = addElement('p');

    titlePara.textContent = title;
    directorPara.textContent = director;
    yearPara.textContent = year;

    movieDetails.appendChild(titlePara);
    movieDetails.appendChild(directorPara);
    movieDetails.appendChild(yearPara);

    movies.appendChild(movieDetails);

  }

  form.addEventListener('submit', handleFormSubmit);


})
