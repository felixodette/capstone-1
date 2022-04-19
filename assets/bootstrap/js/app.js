const cardSection = document.querySelector('[data-card-section]');

const app = [{
  cardClass: 'card',
  image: 'assets/img/thumbnails/gallery_01_10_thumb.jpg',
  alt: "Alex's car",
  title: 'Alex',
  text: 'Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus.'
},
  {
    cardClass: 'card',
    image: 'assets/img/thumbnails/gallery_02_02_thumb.jpg',
    alt: "John's car",
    title: 'John',
    text: 'Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus.'
  },
  {
    cardClass: 'card',
    image: 'assets/img/thumbnails/gallery_01_13_thumb.jpg',
    alt: "Patrick's car",
    title: 'Patrick',
    text: 'Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus.'
  },
  {
    cardClass: 'card',
    image: 'assets/img/thumbnails/gallery_01_10_thumb.jpg',
    alt: "Alex's car",
    title: 'Alex',
    text: 'Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus.'
  },
  {
    cardClass: 'card',
    image: 'assets/img/thumbnails/gallery_02_02_thumb.jpg',
    alt: "John's car",
    title: 'John',
    text: 'Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus.'
  },
  {
    cardClass: 'card',
    image: 'assets/img/thumbnails/gallery_01_13_thumb.jpg',
    alt: "Patrick's car",
    title: 'Patrick',
    text: 'Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus.'
  }];

function createCard(cardObject) {
  const div = document.createElement('div');
  div.className = 'card';
  div.innerHTML = `<img src="${cardObject.image}" alt="${cardObject.alt}" class="card-img-top w-100 d-block">
    <div class="card-body">
      <h4 class="card-title">${cardObject.title}</h4>
      <p class="card-text">${cardObject.text}</p>
    </div>
  </div>`;
  return div;
}

app.forEach((e) => {
  const card = createCard(e);
  cardSection.appendChild(card);
});