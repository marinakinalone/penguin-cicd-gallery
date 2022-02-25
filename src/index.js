import './style.scss';

const getPictures = require('./api');

const state = {
  value: '',
  pictures: [],
};

const template = s => {
  if (s) {
    return s.pictures.map(pic => ` 
        <section class="card flip-card">
          <figure class="card__figure flip-card-inner"> 
            <div class="flip-card-front">
              <img class="card__img"  src="${pic.urls.regular}" alt="${pic.alt_description}">
              </div>
            <figcaption class="card__description flip-card-back">${pic.alt_description}</figcaption>
          </figure>
        </section>
        `).join('');
  }
  return '<span></span>';
};

const render = (htmlString, el) => {
  const element = el;
  element.innerHTML = htmlString;
};

const update = newState => {
  window.history.pushState(
    { ...state, ...newState }, '',
  );
  window.dispatchEvent(new Event('statechange'));
};

const input = document.querySelector('#search');

input.addEventListener('search', async () => {
  const response = await getPictures(input.value);
  const newState = {
    value: input.value,
    pictures: [...response.results],
  };
  update(newState);
});

window.addEventListener('statechange', () => {
  render(template(window.history.state), document.querySelector('#gallery'));
});

render(template(window.history.state), document.querySelector('#gallery'));

module.exports.update = update;
