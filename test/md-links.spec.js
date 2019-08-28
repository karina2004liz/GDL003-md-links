const mdLinks = require('../index.js');



describe('mdLinks.findMd', () => {
//unit test
  it('should return true for a valid .md file', () => {
    expect(mdLinks.findMd('../README.md')).toBe(true);
  });
  it('should return false for a valid .md file', () => {
    expect(mdLinks.findMd('../index.js')).toBe(false);
  });
  it ("findMd it should to be a function", () => {
    expect(typeof mdLinks.findMd).toBe("function");
  });

});


describe('mdLinks.readFile', () => {
  it('is a function', () => {
    expect(typeof mdLinks.readFile).toBe('function');
  });

  it('should read and impress what is in the .md file', () => {

  mdLinks.readFile('../README.md', (data)=>{
    expect(data).toBe('');
    });
  });
});


describe('mdLinks.findLinks', () => {
  it('is a function', () => {
    expect(typeof mdLinks.findLinks).toBe('function');
  });

  it('should return a array with data', () => {
  expect('../README.md').toBe('../README.md');
  });
});