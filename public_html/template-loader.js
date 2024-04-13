// Function to load HTML content from external file
function loadHTML(url, id) {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", url, true);
  xhr.onreadystatechange = function() {
    if (xhr.readyState == 4 && xhr.status == 200) {
      document.getElementById(id).innerHTML = xhr.responseText;
    }
  }
  xhr.send();
}

// Load navbar
loadHTML("header.html", "navbar");

// Load footer
loadHTML("footer.html", "footer");
