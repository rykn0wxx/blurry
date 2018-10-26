'use strict';

import angular from 'angular';

// const blurryTheme = angular.module('Blurry.theme', [])
// 	.run(() => {
// 		console.log('from blurry theme run');
// 	});

export default angular
	.module('Blurry.theme', [])
	.run(() => {
		console.log('from blurry theme run');
	});
