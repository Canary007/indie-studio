document.addEventListener("DOMContentLoaded", function () {

  window.onload = function () {
    document.getElementById("loading-spinner").style.display = "none";
    document.getElementById("content").classList.remove("hidden");
    document.getElementById("shop").classList.remove("hidden");
    document.getElementById("about").classList.remove("hidden");
  };

var scrollToSection = function(id) {
    document.getElementById(id).scrollIntoView({
        behavior: 'smooth'
      });
}

// Main Carousel in landing page
const images = [
  {src:'./assets/products/bed_covers/JKSBC01/DSC_3883.jpg', title: 'Luxury Silk Organza Double Bedcover Set in Pistachio Green'},
  {src:'./assets/products/matts/JKSM05/DSC_3804.jpg', title: 'Heritage Woollen Floor Mat — Crimson Majesty'},
  {src:'./assets/products/wall_hangings/DSC_3235.JPG', title: 'Woollen Wall Hanging – Enchanted Aviary'},
];

const carouselContainer = document.getElementById('carouselContainer');
        const carouselIndicators = document.getElementById('carouselIndicators');
        
        images.forEach((image, index) => {
            const isActive = index === 0 ? 'opacity-100' : 'opacity-0';

            // Create slide
            const slide = document.createElement('div');
            slide.className = `carousel-item absolute w-full transition-opacity duration-500 ${isActive}`;
            slide.style.height = '50vh';
            slide.innerHTML = `
                <div class="block h-full w-full flex items-center justify-center bg-cover bg-center" style="background-image: url('${image.src}');">
                    <div class="container mx-auto">
                        <div class="flex flex-col w-full md:w-1/2 p-6 bg-gray-600 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-50 border border-gray-100">
                            <p class="text-white text-2xl font-bold my-4">${image.title}</p>
                            <a class="text-xl text-white border-b border-white hover:font-extrabold" href="${image.link}">View Product</a>
                        </div>
                    </div>
                </div>
            `;
            carouselContainer.appendChild(slide);

            // Create indicator
            const indicator = document.createElement('li');
            indicator.className = 'inline-block mr-3';
            indicator.innerHTML = `<span class="carousel-bullet cursor-pointer block text-4xl text-gray-400 hover:text-gray-900" data-index="${index}">•</span>`;
            indicator.addEventListener('click', () => setActiveSlide(index));
            carouselIndicators.appendChild(indicator);
        });

        let currentIndex = 0;
        function setActiveSlide(index) {
            const slides = document.querySelectorAll('.carousel-item');
            slides.forEach((slide, i) => {
                slide.classList.toggle('opacity-100', i === index);
                slide.classList.toggle('opacity-0', i !== index);
            });
            currentIndex = index;
        }

        function showNextImage() {
            currentIndex = (currentIndex + 1) % images.length;
            setActiveSlide(currentIndex);
        }
        setInterval(showNextImage, 3000);


// Mini Store Items
const products = [
  {src:'./assets/products/bed_covers/JKSBC02/DSC_3906.jpg', title: 'A', link: '#', price: '2,700 INR'},
  {src:'./assets/products/matts/JKSM02/DSC_3226.JPG', title: 'B', link: '#', price: '2,700 INR'},
  {src:'./assets/products/pillow_covers/DSC_3_bggg802.jpg', title: 'C', link: '#', price: '2,700 INR'},
  {src:'./assets/products/table_runners/JKSTR01/DSC_3870.JPG', title: 'D', link: '#', price: '2,700 INR'},
  {src:'./assets/products/wall_hangings/JKSWH02/JKSWH02~2(1).jpg', title: 'E', link: '#', price: '2,700 INR'},
  {src:'./assets/products/matts/JKSM11/DSC_3229.JPG', title: 'F', link: '#', price: '2,700 INR'},
  {src:'./assets/products/wall_hangings/DSC_3236.JPG', title: 'G', link: '#', price: '2,700 INR'},
  {src:'./assets/products/bed_covers/JKSBC03/DSC_3893.jpg', title: 'H', link: '#', price: '2,700 INR'},
];

const storeContainer = document.getElementById('storeContainer');

products.forEach(product => {
  const productElement = document.createElement('a');
            productElement.href = product.link;
            productElement.style.width = ''
            productElement.innerHTML = `
            <img id=""
              class="w-full hover:grow hover:shadow-lg px-3 md:px-0"
              style="height: 300px"
              src="${product.src}"
            />
            <div class="pt-3 flex items-center justify-between">
              <p class="">${product.title}</p>
              <svg
                class="h-6 w-6 fill-current text-gray-500 hover:text-black"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path
                  d="M12,4.595c-1.104-1.006-2.512-1.558-3.996-1.558c-1.578,0-3.072,0.623-4.213,1.758c-2.353,2.363-2.352,6.059,0.002,8.412 l7.332,7.332c0.17,0.299,0.498,0.492,0.875,0.492c0.322,0,0.609-0.163,0.792-0.409l7.415-7.415 c2.354-2.354,2.354-6.049-0.002-8.416c-1.137-1.131-2.631-1.754-4.209-1.754C14.513,3.037,13.104,3.589,12,4.595z M18.791,6.205 c1.563,1.571,1.564,4.025,0.002,5.588L12,18.586l-6.793-6.793C3.645,10.23,3.646,7.776,5.205,6.209 c0.76-0.756,1.754-1.172,2.799-1.172s2.035,0.416,2.789,1.17l0.5,0.5c0.391,0.391,1.023,0.391,1.414,0l0.5-0.5 C14.719,4.698,17.281,4.702,18.791,6.205z"
                />
              </svg>
            </div>
            <p class="pt-1 text-gray-900">${product.price}</p>
  `
  storeContainer.appendChild(productElement);
});
});
