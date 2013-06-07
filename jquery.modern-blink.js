/*!
 * jQuery Modern Blink plugin
 * https://github.com/leonderijke/Modern-Blink
 *
 * Version: 0.1.0
 * Author: @leonderijke
 * Licensed under the MIT license
 */

;(function ( $, window, document, undefined ) {
	"use strict";

	var domPrefixes = 'Webkit Moz O ms'.split(' '),
		prefix = '',
		supportsAnimations = false,
		keyframeprefix = '',
		keyframes = '',
		defaults = {
			// Duration specified in milliseconds (integer)
			duration:       1000,

			// Number of times the element should blink ("infinite" or integer)
			iterationCount: "infinite",

			// Whether to start automatically or not (boolean)
			start:          true
		},
		animationCss;

	if( document.documentElement.style.animationName ) {
		supportsAnimations = true;
	}

	if ( !supportsAnimations ) {
		for( var i = 0; i < domPrefixes.length; i++ ) {
			if( document.documentElement.style[ domPrefixes[i] + 'AnimationName' ] !== undefined ) {
				prefix = domPrefixes[ i ];
				keyframeprefix = '-' + prefix.toLowerCase() + '-';
				supportsAnimations = true;
				break;
			}
		}
	}

	if ( supportsAnimations ) {
		keyframes = '@' + keyframeprefix + 'keyframes modernBlink { '+
						'50% { opacity: 0; }'+
					'}';

		if( document.styleSheets && document.styleSheets.length ) {
			document.styleSheets[0].insertRule( keyframes, 0 );
		} else {
			var s = document.createElement( 'style' );
			s.innerHTML = keyframes;
			document.getElementsByTagName( 'head' )[ 0 ].appendChild( s );
		}
	}

	function ModernBlink( element, options ) {
		this.el = $(element);

		this.options = $.extend( {}, defaults, options );

		this.init();
	}

	/*
	 * @function init
	 * Wraps the element, starts the animation
	 */
	ModernBlink.prototype.init = function init() {
		if ( this.options.start ) {
			this.start();
		}
	};

	/*
	 * @function _start
	 * Starts the animation
	 */
	ModernBlink.prototype.start = function start( event ) {
		if ( supportsAnimations ) {
			this.el.css({
				'animation-name':            'modernBlink',
				'animation-duration':        '' + this.options.duration + 'ms',
				'animation-iteration-count': '' + this.options.iterationCount
			});
		} else {
			this._fallbackAnimation();
		}
	};

	/*
	 * @function _stop
	 * Stops the animation
	 */
	ModernBlink.prototype.stop = function stop() {
		if ( supportsAnimations ) {
			return this.el.css({
				'animation-name'            : '',
				'animation-duration'        : '',
				'animation-iteration-count' : ''
			});
		}
		return this.el.stop( true, true );
	};

	ModernBlink.prototype._fallbackAnimation = function _fallbackAnimation() {
		console.log('Will implement this later :)');
	};

	/*
	 * @function modernBlink
	 * jQuery plugin wrapper around ModernBlink
	 *
	 * @param options object
	 */
	$.fn.modernBlink = function ( options ) {
		return this.each( function () {
			if (!$.data( this, "plugin_modernBlink" ) ) {
				$.data( this, "plugin_modernBlink", new ModernBlink( this, options ) );
			}
		});
	};

})( jQuery, window, document );