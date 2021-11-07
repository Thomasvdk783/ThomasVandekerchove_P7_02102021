//// BTN ustensiles /////
function myFunctionUstensiles() {
  document.getElementById("myDropdownUstensiles").classList.toggle("show");
}

function filterFunctionUstensiles() {
  var input, filter, ul, li, a, i;
  input = document.getElementById("myInputUstensiles");
  filter = input.value.toUpperCase();
  div = document.getElementById("myDropdownUstensiles");
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
