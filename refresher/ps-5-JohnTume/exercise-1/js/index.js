'use strict';

//Below is an object containing different color palettes that you will show
//Palettes from ColorBrewer (http://colorbrewer2.org/)
const COLORS_9 = {
    Spectral: ['#d53e4f', '#f46d43', '#fdae61', '#fee08b', '#ffffbf', '#e6f598', '#abdda4', '#66c2a5', '#3288bd'],
    Reds: ['#fff5f0', '#fee0d2', '#fcbba1', '#fc9272', '#fb6a4a', '#ef3b2c', '#cb181d', '#a50f15', '#67000d'],
    Blues: ['#f7fbff', '#deebf7', '#c6dbef', '#9ecae1', '#6baed6', '#4292c6', '#2171b5', '#08519c', '#08306b'],
    Greens: ['#f7fcf5', '#e5f5e0', '#c7e9c0', '#a1d99b', '#74c476', '#41ab5d', '#238b45', '#006d2c', '#00441b'],
    Purples: ['#fcfbfd', '#efedf5', '#dadaeb', '#bcbddc', '#9e9ac8', '#807dba', '#6a51a3', '#54278f', '#3f007d'],
};

/* Your code goes here! */

// Create a variable `h1` that refers to the `<h1>` element in the DOM.



// Change the `textContent` of the `<h1>` element to be "Which Swatch?"



// Somehow the rainbow icon image was included without an alt tag! Set it's `alt`
// attribute to be "A beautiful rainbow".



// Give the image the Bootstrap-provided `float-right` CSS class to make it float
// to the right of the screen



// The icon requires attribution, which is included in the footer. Wrap this
// attribution (the entire contents of the footer) inside a `<small>` element,
// So that the footer should contain a `<small>` which contains the current content.
// Hint: use the `innerHTML` property!


// Define a function `createColorBox()` that takes in two parameters: a color string
// and a numeric size. The function should return a _new_ `<div>` element that is
// a colored box with the following details:
// - a CSS class of `d-inline-block`
// - a CSS `background-color` that is the given color
// - CSS `width` and `height` properties that are the given size (in `px`)
// You will use this function to create `div` elements in the functions below.
// You can test this function by logging out the returned value.




// Define a function `renderPalette()` that takes in an array of color strings
// and a "parent" (dom) element (make sure you pass in the *actual* dom element).
// The function should append a "row" to the parent (a new div)
// with a set of of colored boxes to the parent element, one for each color in the array.
// The boxes should be each take up an equal portion of their containing element
// (e.g., a palette with 3 colors will have each box take up 1/3); use the 
// `getBoundingClientRect()` method to determine the container's size.
// The color box itself can be added to the "row" using the `createColorBox` function. 
//
// You can test the function by calling it and passing it one of the `COLORS_9`
// palettes, and the `<main>` element
// (just make sure to comment out this test after you run it)




// Define a function `renderPaletteTable()` that will render a color palette row
// for each of the palettes in the `COLORS_9` object into the <main> element.
// (i.e., this function acutally *draws* all of the rows of colors)
// This function should _call_ your `renderPalette()` function as a helper.
// Hint: remeber that you're trying to iterate through the _keys_ of an object,
// passing the *values* of that object to your function.


// Call your `renderPaletteTable()` method to render all the color palettes.



// Finally, remove the paragraph that explains how to complete the problem
// (using JavaScript)




// Make functions and variables available to tester. DO NOT MODIFY THIS.
if (typeof module !== 'undefined' && module.exports) {
    /* eslint-disable */
    if (typeof createColorBox !== 'undefined')
        module.exports.createColorBox = createColorBox;
    if (typeof renderPalette !== 'undefined')
        module.exports.renderPalette = renderPalette;
}