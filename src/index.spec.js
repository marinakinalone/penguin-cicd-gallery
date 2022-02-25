const fs = require('fs');
const jsdom = require('jsdom');
const update = require('./index');

console.log('hello');

const { JSDOM } = jsdom;

const template = fs.readFileSync('./src/template.html');
const dom = new JSDOM(template);

test('connected to index.js', () => {
  expect(dom.window.document.querySelector('h1').textContent).toBe('Penguin Gallery');
});

test('update function', () => {
  const newState = {
    value: 'test',
    pictures: ['test1', 'test2'],
  };
  update(newState);
  expect(window.history.state.pictures.length).toBe(2);
});
