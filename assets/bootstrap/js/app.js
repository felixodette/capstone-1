const cardSection = document.querySelector('[data-card-section]');

const app = [{
  cardClass: 'card',
  image: 'assets/img/thumbnails/gallery_01_10_thumb.jpg',
  alt: "Alex's car",
  title: 'Alex',
  subtitle: '2018 WRX',
  text: 'Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus.',
  cardClass1: 'card',
  image1: 'assets/img/thumbnails/gallery_02_02_thumb.jpg',
  alt1: "John's car",
  title1: 'John',
  subtitle1: '2018 WRX',
  text1: 'Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus.'
  },
  {
    cardClass: 'card',
    image: 'assets/img/thumbnails/gallery_01_13_thumb.jpg',
    alt: "Patrick's car",
    title: 'Patrick',
    subtitle: '2017 WRX STI',
    text: 'Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus.',
    cardClass1: 'card',
    image1: 'assets/img/thumbnails/gallery_01_10_thumb.jpg',
    alt1: "Alex's car",
    title1: 'Alex',
    subtitle1: '2018 WRX',
    text1: 'Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus.'
  },
  {
    cardClass: 'card',
    image: 'assets/img/thumbnails/gallery_02_02_thumb.jpg',
    alt: "John's car",
    title: 'John',
    subtitle: '2019 WRX STI',
    text: 'Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus.',
    cardClass1: 'card',
    image1: 'assets/img/thumbnails/gallery_01_13_thumb.jpg',
    alt1: "Patrick's car",
    title1: 'Patrick',
    subtitle1: '2018 WRX',
    text1: 'Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus.'
  }];

function createCard(cardObject) {
  const div = document.createElement('div');
  div.className = 'container';
  div.innerHTML = `<div class="row" id="card-rows">
      <div class="col-md-6">
          <div class="card">
              <div class="card-body">
                  <img id="card-img" src="${cardObject.image}" alt="${cardObject.alt}" />
                  <h4 class="card-title">${cardObject.title}</h4>
                  <h6 class="text-muted card-subtitle mb-2">${cardObject.subtitle}</h6>
                  <p class="card-text">${cardObject.text}</p>
              </div>
          </div>
      </div>
      <div class="col-md-6">
          <div class="card">
              <div class="card-body">
              <img id="card-img" src="${cardObject.image1}" alt="${cardObject.alt1}" />
                  <h4 class="card-title">${cardObject.title1}</h4>
                  <h6 class="text-muted card-subtitle mb-2">${cardObject.subtitle1}</h6>
                  <p class="card-text">${cardObject.text1}</p>
              </div>
          </div>
      </div>
  </div>`
  return div;
}

app.forEach((e) => {
  const card = createCard(e);
  cardSection.appendChild(card);
});