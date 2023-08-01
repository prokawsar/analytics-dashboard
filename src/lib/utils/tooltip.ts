import tippy, { delegate } from 'tippy.js';
import 'tippy.js/dist/tippy.css';
import 'tippy.js/animations/scale.css';

tippy('[data-tippy]', {
	content: (reference) => reference.getAttribute('data-tippy') || '',
	allowHTML: true,
	placement: 'bottom',
	arrow: true,
	delay: 200,
	animation: 'scale'
});
