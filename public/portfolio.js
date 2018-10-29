//get modal
var modal = document.getElementById('myModal');

//get the image and insert it into modal - use its "alt" text as caption
var img = document.getElementsByClassName('portfolioImages');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function() {
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.addEventListener;
}

//Get the <span> element that closes the modal
var span = document.getElementById("close")[0];

//When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display="none";
}