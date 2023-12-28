prompt ('Helo Mi Amigos \n welkom tu may web')

// Array:
data = [
    {
        'img1': './hexa1.png',
        'img2': './hexa2.png',
        'title': 'Web E-Commerse',
        'subtitle': 'Zenit',
        'desc': 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum sequi, quisquam adipisci unde delectus possimus officiis laboriosam blanditiis aliquid porro eius quia perspiciatis nemo nisi, quasi dolore rem illo? Reiciendis?'
    },

    {
        'img1': './hexa1.png',
        'img2': './hexa2.png',
        'title': 'Web E-Commerse',
        'subtitle': 'Zenit',
        'desc': 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum sequi, quisquam adipisci unde delectus possimus officiis laboriosam blanditiis aliquid porro eius quia perspiciatis nemo nisi, quasi dolore rem illo? Reiciendis?'
    }
]


let container = document.querySelector('.container-project')

data.forEach(element =>  {
    container.innerHTML +=

    `<div class="project">
    <div class="img-project">
        <img src="`+element.img1+`" alt="">
        <img src="${element.img2}" alt="">
    </div>

    <div class="desc-project">
        <h1>${element.title}</h1>
        <h2>${element.subtitle}</h2>
        <p>${element.desc}</p>
    </div>

    <button class="read-more">
        Baca Selengkapnya
    </button>
</div>
`

});
