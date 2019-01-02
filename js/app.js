document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');

  const form = document.querySelector('#new-film-form')

  const deleteButton = document.querySelector('#delete-all-button');

  const handleDeleteButton = function(event){
    const moviesList = document.querySelector('#movies-list');
    moviesList.innerHTML = '';
  }

  deleteButton.addEventListener('click', handleDeleteButton);

  const handleFormSubmit = function(event){
    event.preventDefault();

    const title = event.target.title.value;
    const director = event.target.director.value;
    const year = event.target.year.value;

    const movies = document.querySelector('#movies-list');


    const movieDetails = document.createElement('div');
    const titlePara = document.createElement('p');
    const directorPara = document.createElement('p');
    const yearPara = document.createElement('p');

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
