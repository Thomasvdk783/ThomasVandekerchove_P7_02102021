import dataRecipes from './dataApi.js';

export default function myFunctionIngredients() {
  const btnAfficheInfos = document.querySelector('.dropbtn');
  // console.log(btnAfficheInfos);
  const dropContent = document.getElementById('myDropdownIngredients')
  // console.log(dropContent);
  
  btnAfficheInfos.addEventListener('click', function(){
      dropContent.style.display = 'flex';
  })
  }
  myFunctionIngredients()