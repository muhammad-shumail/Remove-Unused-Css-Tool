const purify = require("purify-css")

let content = ['*.html'];
// Glob pattern to ref all HTML files from root directory.

let css = ['*.css'];
// Glob pattern to ref all CSS files from root directory.

let options = {
  // Will write purified CSS to this file.
  output: 'purified.css',
  // Output file name
  minify: true,
  // Will minify CSS code in addition to purify.
  info: true

};

purify(content, css, options, function (purifiedAndMinifiedResult) {
  console.log(purifiedAndMinifiedResult);
});