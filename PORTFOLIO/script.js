
function openNewTab() {
  var selectElement = document.getElementById('redirect-dropdown');
  var selectedValue = selectElement.value;
  
  if (selectedValue) {
    window.open(selectedValue, '_blank');
  }
}
