angular
	.module('app')

	.config(function ($stateProvider, $urlRouterProvider) {

		$stateProvider
			.state('login', {
				url: '/',
				controller: 'LoginController as ctrl',
				templateUrl: ''
			})
	})