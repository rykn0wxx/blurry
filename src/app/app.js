'use strict';

import '../style/app.scss';

import angular from 'angular';
import blurryTheme from './theme/theme.module';

angular.module('BlurryAdmin', [
	blurryTheme.name
]);
