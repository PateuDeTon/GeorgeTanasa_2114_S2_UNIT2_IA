const images = [
    ['screenshot1.png', 'screenshot2.png', 'screenshot3.png'],
    ['screenshot4.png', 'screenshot5.png', 'screenshot6.png'],
    ['screenshot7.png', 'screenshot8.png', 'screenshot9.png'],
];
let currentIndex = 0;
function changeImages(direction) 
{
    if (direction === 'next') 
    {
        currentIndex = (currentIndex + 1) % images.length;
    } else if (direction === 'prev') 
    {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
    }
    const imageContainer = document.querySelector('.images-container');
    imageContainer.innerHTML = '';
    images[currentIndex].forEach(imgSrc => 
{
        const img = document.createElement('img');
        img.src = imgSrc;
        img.alt = imgSrc;
        imageContainer.appendChild(img);
    });
}
