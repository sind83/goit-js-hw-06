const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const gallery = document.querySelector("ul.gallery");
gallery.classList.add("gallery");

let pictures = images.map(element =>{
  const li = document.createElement("li");
  const img = document.createElement("img");
  img.setAttribute("src", element.url);
  img.setAttribute("alt", element.alt);
  img.setAttribute("width", "400px");
  li.append(img);
  li.classList.add("gallery-style");
  return li;
});

gallery.append(...pictures);