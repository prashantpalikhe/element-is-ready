# element-is-ready

Do something when an element of a given selector is created and added to the DOM.

## Install

$ npm install --save element-is-ready

## Usage

```JavaScript
const elementIsReady = require('element-is-ready');

elementIsReady('#myElement').then((element) => {
    // .. do something with element 
});
```




