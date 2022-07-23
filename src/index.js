console.log('%c HI', 'color: firebrick')
document.addEventListener('DOMContentLoaded', () => console.log('DOM loaded'));


function getData(dogs) {
    return fetch(dogs)
      .then(resp => resp.json())
}
  
  getData('https://dog.ceo/api/breeds/image/random/4')
 .then(data => renderImg(data.message));
  
  getData('https://dog.ceo/api/breeds/list/all')
  .then(data => {let breedsArr = Object.keys(data.message)
                  renderDogBreedToDom(breedsArr)
                  console.log(breedsArr)});
  
  
   getData('https://dog.ceo/api/breeds/list/all')
   .then(data => renderDogDropdown(data.message));
  
   function renderImg(dogArr) {
    return dogArr.forEach(dog => {
    
      const imgContainer = document.querySelector('#dog-image-container');
      const img = document.createElement('img');
      img.src= dog;
      imgContainer.append(img);
       
    })
};
  

  
    function renderDogBreedToDom(breedArr) {
      breedArr.map(breed => {
        console.log(breed);
      
      const ul = document.querySelector('#dog-breeds');
      
      const li = document.createElement('li');
      li.textContent = breed;
      
      ul.append(li);
       ul.addEventListener('click', (e) =>{
          e.target.style.color = 'green'
        });
      })
};
 
  
  
  function renderDogDropdown(breeds) {
    //console.log(breeds)
    newBreedArr = Object.keys(breeds)
    console.log(newBreedArr)
    document.addEventListener('change', event => {
  //console.log(event)
  
  if(event.target.matches('#breed-dropdown')){
    const ul = document.querySelector('#dog-breeds');
    ul.innerHTML = ''
    const filterBreeds = newBreedArr.filter(breed => breed[0] === event.target.value)
    console.log(filterBreeds)
    renderDogBreedToDom(filterBreeds)
  
  }
 
})
}