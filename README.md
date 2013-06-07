# Modern Blink

jQuery plugin utilizing CSS Animations. Because we all loved the &lt;blink&gt; tag!

Modern Blink will use CSS Animations in browsers supporting them and fallback to jQuery Animations in older browsers.

## Installation

Include Modern Blink after the jQuery library:

```html
<script src="/path/to/jquery.modern-blink.js"></script>
```

## Usage

Use Modern Blink like this on the desired elements:

```js
$('.js-blink').modernBlink();
```

### Options

The following options can be passed to Modern Blink (defaults are shown):

```js
.modernBlink({
	// Duration specified in milliseconds (integer)
	duration: 1000,

	// Number of times the element should blink ("infinite" or integer)
	iterationCount: "infinite",

	// Whether to start automatically or not (boolean)
	start: true
});
```
### Events

Modern Blink will attach the following event listeners to the element:

- **modernBlink.start**: will start the animation
- **modernBlink.stop**: will stop the animation

## Browser Support

Tested in:
* Chrome
* Safari
* Firefox
* Internet Explorer 8+

## License

MIT License