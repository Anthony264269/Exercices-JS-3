const image = document.getElementById('image1');
console.log(image);
image.addEventListener('mouseover', function () {
 image.style.border= "solid 3px red";
})

image.addEventListener('mouseout', function () {

        image.style.border="none";
    })

