/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunctionIngredients() {
    document.getElementById("myDropdownIngredients").classList.toggle("show");
  }
  
  function filterFunctionIngredients() {
    var input, filter, ul, li, a, i;
    input = document.getElementById("myInputIngredients");
    filter = input.value.toUpperCase();
    div = document.getElementById("myDropdownIngredients");
    a = div.getElementsByTagName("a");
    for (i = 0; i < a.length; i++) {
      txtValue = a[i].textContent || a[i].innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        a[i].style.display = "";
      } else {
        a[i].style.display = "none";
      }
    }
  }

