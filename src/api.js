const getPictures = value => fetch(`https://api.unsplash.com/search/photos?client_id=${process.env.ACCESS_KEY}&page=1&query=${value}&orientation=landscape`)
  .then(response => response.json())
  .then(data => data);

module.exports = getPictures;
