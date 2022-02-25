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

module.exports = {
  render,
  template,
};
