/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _index = __webpack_require__(1);

	var _index2 = __webpack_require__(2);

	var _index3 = __webpack_require__(3);

	var _main = __webpack_require__(4);

	var _auth = __webpack_require__(5);

	var _map = __webpack_require__(6);

	var _activity = __webpack_require__(7);

	var _ngcartCtrl = __webpack_require__(8);

	var _navbar = __webpack_require__(9);

	var _footer = __webpack_require__(10);

	var _topContent = __webpack_require__(11);

	var _centerContent = __webpack_require__(12);

	var _videoSection = __webpack_require__(13);

	var _customizedSection = __webpack_require__(14);

	var _moreSection = __webpack_require__(15);

	var _popup = __webpack_require__(16);

	var _slider = __webpack_require__(17);

	var _compareTo = __webpack_require__(18);

	var _githubContributor = __webpack_require__(19);

	var _webDevTec = __webpack_require__(20);

	var _navbar2 = __webpack_require__(21);

	var _footer2 = __webpack_require__(22);

	var _topContent2 = __webpack_require__(23);

	var _centerContent2 = __webpack_require__(24);

	var _videoSection2 = __webpack_require__(25);

	var _customizedSection2 = __webpack_require__(26);

	var _moreSection2 = __webpack_require__(27);

	var _slider2 = __webpack_require__(28);

	var _malarkey = __webpack_require__(29);

	angular.module('westirelandFront', ['ui.router', 'ui.bootstrap', 'toastr', 'satellizer', 'ngCart', 'pascalprecht.translate']).constant('API_URL', 'http://localhost:5000/').constant('malarkey', malarkey).constant('moment', moment).config(_index.config).config(_index2.routerConfig).run(_index3.runBlock).service('githubContributor', _githubContributor.GithubContributorService).service('webDevTec', _webDevTec.WebDevTecService).controller('MainController', _main.MainController).controller('AuthController', _auth.AuthController).controller('MapController', _map.MapController).controller('ActivityController', _activity.ActivityController).controller('ShopCartController', _ngcartCtrl.ShopCartController).controller('NavbarController', _navbar.NavbarController).controller('FooterController', _footer.FooterController).controller('TopContentController', _topContent.TopContentController).controller('CenterContentController', _centerContent.CenterContentController).controller('VideoSectionController', _videoSection.VideoSectionController).controller('CustomizedSectionController', _customizedSection.CustomizedSectionController).controller('MoreSectionController', _moreSection.MoreSectionController).controller('PopupController', _popup.PopupController).controller('SliderController', _slider.SliderController).directive('acmeNavbar', _navbar2.NavbarDirective).directive('acmeFooter', _footer2.FooterDirective).directive('acmeTopContent', _topContent2.TopContentDirective).directive('acmeCenterContent', _centerContent2.CenterContentDirective).directive('acmeVideoSection', _videoSection2.VideoSectionDirective).directive('acmeCustomizedSection', _customizedSection2.CustomizedSectionDirective).directive('acmeMoreSection', _moreSection2.MoreSectionDirective).directive('acmeSlider', _slider2.SliderDirective).directive('acmeMalarkey', _malarkey.MalarkeyDirective).directive('compareTo', _compareTo.CompareToDirective); /* global malarkey:false, moment:false */

/***/ }),
/* 1 */
/***/ (function(module, exports) {

	'use strict';

	config.$inject = ["$logProvider", "toastrConfig", "$authProvider", "API_URL", "$translateProvider"];
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.config = config;
	function config($logProvider, toastrConfig, $authProvider, API_URL, $translateProvider) {
	  'ngInject';
	  // Enable log

	  $logProvider.debugEnabled(true);

	  // Set options third-party lib
	  toastrConfig.allowHtml = true;
	  toastrConfig.timeOut = 3000;
	  toastrConfig.positionClass = 'toast-top-right';
	  toastrConfig.preventDuplicates = true;
	  toastrConfig.closeButton = true;

	  $authProvider.signupUrl = API_URL + 'auth/register';
	  $authProvider.loginUrl = API_URL + 'auth/login';

	  $translateProvider.useStaticFilesLoader({
	    prefix: '/assets/i18n/',
	    suffix: '.json'
	  });
	  $translateProvider.preferredLanguage('zh-CN');
	}

/***/ }),
/* 2 */
/***/ (function(module, exports) {

	'use strict';

	routerConfig.$inject = ["$stateProvider", "$urlRouterProvider"];
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.routerConfig = routerConfig;
	function routerConfig($stateProvider, $urlRouterProvider) {
	    'ngInject';

	    $stateProvider.state('home', {
	        url: '/',
	        templateUrl: 'app/main/main.html',
	        controller: 'MainController',
	        controllerAs: 'main'
	    }).state('auth', {
	        url: '/auth',
	        templateUrl: 'app/auth/auth.html',
	        controller: 'AuthController',
	        controllerAs: 'auth'
	    }).state('map', {
	        url: '/map',
	        templateUrl: 'app/map/map.html',
	        controller: 'MapController',
	        controllerAs: 'map'
	    }).state('activity', {
	        url: '/activity',
	        templateUrl: 'app/activity/activity.html',
	        controller: 'ActivityController',
	        controllerAs: 'activity'
	    });

	    $urlRouterProvider.otherwise('/');
	}

/***/ }),
/* 3 */
/***/ (function(module, exports) {

	'use strict';

	runBlock.$inject = ["$log"];
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.runBlock = runBlock;
	function runBlock($log) {
	  'ngInject';

	  $log.debug('runBlock end');
	}

/***/ }),
/* 4 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var MainController = exports.MainController = function MainController() {
	  'ngInject';

	  _classCallCheck(this, MainController);
	};

/***/ }),
/* 5 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var AuthController = exports.AuthController = function () {
	    AuthController.$inject = ["$auth", "toastr", "$window"];
	    function AuthController($auth, toastr, $window) {
	        'ngInject';

	        _classCallCheck(this, AuthController);

	        this.$auth = $auth;
	        this.toastr = toastr;
	        this.$window = $window;
	    }

	    _createClass(AuthController, [{
	        key: 'register',
	        value: function register() {
	            var vm = this;
	            this.$auth.signup(this.user).success(function (response) {
	                vm.$auth.setToken(response);
	                vm.toastr.success('Register Successfully !!!');
	                vm.$window.location.href = '/#';
	            }).error(function (response) {
	                vm.toastr.error("Register Failed ！" + response.message);
	            });
	        }
	    }, {
	        key: 'login',
	        value: function login() {
	            var vm = this;
	            this.$auth.login(this.login.user).then(function (token) {
	                vm.$auth.setToken(token);
	            });
	        }
	    }]);

	    return AuthController;
	}();

/***/ }),
/* 6 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var MapController = exports.MapController = ["$http", function MapController($http) {
	  'ngInject';

	  _classCallCheck(this, MapController);

	  this.$http = $http;
	}];

/***/ }),
/* 7 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var ActivityController = exports.ActivityController = function () {
	    ActivityController.$inject = ["$http"];
	    function ActivityController($http) {
	        'ngInject';

	        _classCallCheck(this, ActivityController);

	        this.$http = $http;
	        this.getActivities();
	    }

	    _createClass(ActivityController, [{
	        key: "getActivities",
	        value: function getActivities() {
	            var vm = this;
	            // this.$http.get('http://localhost:5000/api/activity').then(function(result){
	            //     vm.items = result.data;
	            // });
	            vm.items = [{
	                "_id": "59b09cc726c4b53d00668bf0",
	                "name": "Surfing",
	                "description": "WEnim labore aliqua consequat ut quis ad occaecat aliquip incididunt. Sunt nulla eu enim irure enim nostrud aliqua consectetur ad consectetur sunt.. ",
	                "imagepath": "images/portfolio1.jpg",
	                "price": 200
	            }, {
	                "_id": "59b0b28b26c4b53d00669487",
	                "name": "Rocky Peak",
	                "description": "Enim labore aliqua consequat ut quis ad occaecat aliquip incididunt. Sunt nulla eu enim irure enim nostrud aliqua consectetur ad consectetur sunt.. ",
	                "imagepath": "images/portfolio2.jpg",
	                "price": 100.23
	            }, {
	                "_id": "59b0ce2b26c4b53d00669549",
	                "name": "BBQ Party",
	                "description": "Enim labore aliqua consequat ut quis ad occaecat aliquip incididunt. Sunt nulla eu enim irure enim nostrud aliqua consectetur ad consectetur sunt.. ",
	                "imagepath": "images/portfolio3.jpg",
	                "price": 300.56
	            }];
	        }
	    }]);

	    return ActivityController;
	}();

/***/ }),
/* 8 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var ShopCartController = exports.ShopCartController = ["$scope", "ngCart", function ShopCartController($scope, ngCart) {
	    'ngInject';

	    _classCallCheck(this, ShopCartController);

	    ngCart.setTaxRate(7.5);
	    ngCart.setShipping(2.99);
	}];

/***/ }),
/* 9 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var NavbarController = exports.NavbarController = function () {
	    NavbarController.$inject = ["$auth"];
	    function NavbarController($auth) {
	        'ngInject';

	        _classCallCheck(this, NavbarController);

	        this.$auth = $auth;
	        this.isAuthenticated = $auth.isAuthenticated;
	    }

	    _createClass(NavbarController, [{
	        key: 'logout',
	        value: function logout() {
	            this.$auth.logout();
	        }
	    }]);

	    return NavbarController;
	}();

/***/ }),
/* 10 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var FooterController = exports.FooterController = function FooterController() {
	    'ngInject';

	    _classCallCheck(this, FooterController);
	};

/***/ }),
/* 11 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var TopContentController = exports.TopContentController = function TopContentController() {
	    'ngInject';

	    _classCallCheck(this, TopContentController);
	};

/***/ }),
/* 12 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var CenterContentController = exports.CenterContentController = function CenterContentController() {
	    'ngInject';

	    _classCallCheck(this, CenterContentController);
	};

/***/ }),
/* 13 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var VideoSectionController = exports.VideoSectionController = function VideoSectionController() {
	    'ngInject';

	    _classCallCheck(this, VideoSectionController);
	};

/***/ }),
/* 14 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var CustomizedSectionController = exports.CustomizedSectionController = function CustomizedSectionController() {
	    'ngInject';

	    _classCallCheck(this, CustomizedSectionController);
	};

/***/ }),
/* 15 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var MoreSectionController = exports.MoreSectionController = function MoreSectionController() {
	    'ngInject';

	    _classCallCheck(this, MoreSectionController);
	};

/***/ }),
/* 16 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var PopupController = exports.PopupController = ["$scope", "$uibModal", function PopupController($scope, $uibModal) {
	    'ngInject';

	    _classCallCheck(this, PopupController);

	    $scope.user = {
	        user: 'name',
	        password: null,
	        notes: null
	    };

	    $scope.open = function () {
	        $uibModal.open({
	            templateUrl: 'app/components/popup/popup_checkout.html', // loads the template
	            backdrop: true, // setting backdrop allows us to close the modal window on clicking outside the modal window
	            windowClass: 'modal', // windowClass - additional CSS class(es) to be added to a modal window template
	            controller: ["$scope", "$uibModalInstance", "$log", "user", function controller($scope, $uibModalInstance, $log, user) {
	                $scope.user = user;
	                $scope.submit = function () {
	                    $log.log('Submiting user info.'); // kinda console logs this statement
	                    $log.log(user);
	                    $uibModalInstance.dismiss('cancel'); // dismiss(reason) - a method that can be used to dismiss a modal, passing a reason
	                };
	                $scope.cancel = function () {
	                    $uibModalInstance.dismiss('cancel');
	                };

	                $uibModalInstance.rendered.then(function () {
	                    initCard();
	                });
	            }],
	            resolve: {
	                user: function user() {
	                    return $scope.user;
	                }
	            }
	        }); //end of modal.open
	    }; // end of scope.open function

	    function initCard() {}
	    //  var stripe = Stripe('pk_test_zPqSHrAg3NSb1rXNsGErDlPT');
	    //  var elements = stripe.elements();
	    //
	    //  var card = elements.create('card', {
	    //    hidePostalCode: true,
	    //    style: {
	    //      base: {
	    //        iconColor: '#F99A52',
	    //        color: '#32315E',
	    //        lineHeight: '48px',
	    //        fontWeight: 400,
	    //        fontFamily: '"Helvetica Neue", "Helvetica", sans-serif',
	    //        fontSize: '15px',
	    //
	    //        '::placeholder': {
	    //          color: '#CFD7DF',
	    //        }
	    //      },
	    //    }
	    //  });
	    //  card.mount('#card-element');
	    //
	    //  card.on('change', function(event) {
	    //    setOutcome(event);
	    //  });
	    //
	    //  document.querySelector('form').addEventListener('submit', function(e) {
	    //    e.preventDefault();
	    //    var form = document.querySelector('form');
	    //    var extraDetails = {
	    //      name: form.querySelector('input[name=cardholder-name]').value,
	    //      address_zip: form.querySelector('input[name=address-zip]').value
	    //    };
	    //    stripe.createToken(card, extraDetails).then(setOutcome);
	    //  });


	    //  function setOutcome(result) {
	    //    var successElement = document.querySelector('.success');
	    //    var errorElement = document.querySelector('.error');
	    //    successElement.classList.remove('visible');
	    //    errorElement.classList.remove('visible');
	    //
	    //    if (result.token) {
	    //      // Use the token to create a charge or a customer
	    //      // https://stripe.com/docs/charges
	    //      successElement.querySelector('.token').textContent = result.token.id;
	    //      successElement.classList.add('visible');
	    //    } else if (result.error) {
	    //      errorElement.textContent = result.error.message;
	    //      errorElement.classList.add('visible');
	    //    }
	    //  }

	}];

/***/ }),
/* 17 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var SliderController = exports.SliderController = ["$scope", function SliderController($scope) {
	    'ngInject';

	    _classCallCheck(this, SliderController);

	    $scope.myInterval = 2000;
	    $scope.noWrapSlides = false;
	    $scope.active = 0;
	    var slides = $scope.slides = [];
	    var addSlide = function addSlide() {
	        slides.push({
	            image: 'assets/images/slider-surfing.jpg',
	            title: 'Surfing',
	            text: 'Grab your board and dive into a world of watery wonder along Ireland’s coasts',
	            id: 0
	        });
	        slides.push({
	            image: 'assets/images/slider-cycling.png',
	            title: 'Cycling',
	            text: 'Cycling, also called bicycling or biking, is the use of bicycles for transport, recreation, exercise or sport. ',
	            id: 1
	        });
	        slides.push({
	            image: 'assets/images/slider-sup.png',
	            title: 'SUP',
	            text: 'SUP DUDE is the leading Stand Up Paddle School in Ireland. It is owned and run by Emmet O’Doherty, Irish SUP Champion, fully qualified and super experienced coach.',
	            id: 2
	        });
	        slides.push({
	            image: 'assets/images/slider-horseriding.jpg',
	            title: 'Horse Riding',
	            text: 'We have a selection of packages available for horse riding holidays in Ireland, including horse riding weekend breaks',
	            id: 3
	        });
	    };
	    addSlide();
	}];

/***/ }),
/* 18 */
/***/ (function(module, exports) {

	'use strict';

	CompareToDirective.$inject = ["$parse"];
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.CompareToDirective = CompareToDirective;
	function CompareToDirective($parse) {
	    'ngInject';

	    return {
	        require: 'ngModel',
	        link: function link(scope, elm, attrs, ngModel) {
	            var mainModel = $parse(attrs.compareTo);
	            var secondModel = $parse(attrs.ngModel);

	            scope.$watch(attrs.ngModel, function (newValue) {
	                ngModel.$setValidity(attrs.name, newValue === mainModel(scope));
	            });

	            scope.$watch(attrs.compareTo, function (newValue) {
	                ngModel.$setValidity(attrs.name, newValue === secondModel(scope));
	            });
	        }
	    };
	}

/***/ }),
/* 19 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var GithubContributorService = exports.GithubContributorService = function () {
	  GithubContributorService.$inject = ["$log", "$http"];
	  function GithubContributorService($log, $http) {
	    'ngInject';

	    _classCallCheck(this, GithubContributorService);

	    this.$log = $log;
	    this.$http = $http;
	    this.apiHost = 'https://api.github.com/repos/Swiip/generator-gulp-angular';
	  }

	  _createClass(GithubContributorService, [{
	    key: 'getContributors',
	    value: function getContributors() {
	      var _this = this;

	      var limit = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 30;

	      return this.$http.get(this.apiHost + '/contributors?per_page=' + limit).then(function (response) {
	        return response.data;
	      }).catch(function (error) {
	        _this.$log.error('XHR Failed for getContributors.\n' + angular.toJson(error.data, true));
	      });
	    }
	  }]);

	  return GithubContributorService;
	}();

/***/ }),
/* 20 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var WebDevTecService = exports.WebDevTecService = function () {
	  function WebDevTecService() {
	    'ngInject';

	    _classCallCheck(this, WebDevTecService);

	    this.data = [{
	      'title': 'AngularJS',
	      'url': 'https://angularjs.org/',
	      'description': 'HTML enhanced for web apps!',
	      'logo': 'angular.png'
	    }, {
	      'title': 'BrowserSync',
	      'url': 'http://browsersync.io/',
	      'description': 'Time-saving synchronised browser testing.',
	      'logo': 'browsersync.png'
	    }, {
	      'title': 'GulpJS',
	      'url': 'http://gulpjs.com/',
	      'description': 'The streaming build system.',
	      'logo': 'gulp.png'
	    }, {
	      'title': 'Jasmine',
	      'url': 'http://jasmine.github.io/',
	      'description': 'Behavior-Driven JavaScript.',
	      'logo': 'jasmine.png'
	    }, {
	      'title': 'Karma',
	      'url': 'http://karma-runner.github.io/',
	      'description': 'Spectacular Test Runner for JavaScript.',
	      'logo': 'karma.png'
	    }, {
	      'title': 'Protractor',
	      'url': 'https://github.com/angular/protractor',
	      'description': 'End to end test framework for AngularJS applications built on top of WebDriverJS.',
	      'logo': 'protractor.png'
	    }, {
	      'title': 'Bootstrap',
	      'url': 'http://getbootstrap.com/',
	      'description': 'Bootstrap is the most popular HTML, CSS, and JS framework for developing responsive, mobile first projects on the web.',
	      'logo': 'bootstrap.png'
	    }, {
	      'title': 'Angular UI Bootstrap',
	      'url': 'http://angular-ui.github.io/bootstrap/',
	      'description': 'Bootstrap components written in pure AngularJS by the AngularUI Team.',
	      'logo': 'ui-bootstrap.png'
	    }, {
	      'title': 'Sass (Node)',
	      'url': 'https://github.com/sass/node-sass',
	      'description': 'Node.js binding to libsass, the C version of the popular stylesheet preprocessor, Sass.',
	      'logo': 'node-sass.png'
	    }, {
	      'title': 'ES6 (Babel formerly 6to5)',
	      'url': 'https://babeljs.io/',
	      'description': 'Turns ES6+ code into vanilla ES5, so you can use next generation features today.',
	      'logo': 'babel.png'
	    }];
	  }

	  _createClass(WebDevTecService, [{
	    key: 'getTec',
	    value: function getTec() {
	      return this.data;
	    }
	  }]);

	  return WebDevTecService;
	}();

/***/ }),
/* 21 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.NavbarDirective = NavbarDirective;

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function NavbarDirective() {
	  'ngInject';

	  var directive = {
	    restrict: 'E',
	    templateUrl: 'app/components/navbar/navbar.html',
	    scope: {
	      creationDate: '='
	    },
	    controller: NavbarController,
	    controllerAs: 'vm',
	    bindToController: true
	  };

	  return directive;
	}

	var NavbarController = function NavbarController(moment) {
	  'ngInject';

	  // "this.creationDate" is available by directive option "bindToController: true"

	  _classCallCheck(this, NavbarController);

	  this.relativeDate = moment(this.creationDate).fromNow();
	};
	NavbarController.$inject = ["moment"];

/***/ }),
/* 22 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.FooterDirective = FooterDirective;

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function FooterDirective() {
	  'ngInject';

	  var directive = {
	    restrict: 'E',
	    templateUrl: 'app/components/footer/footer.html',
	    scope: {},
	    controller: FooterController,
	    controllerAs: 'vm',
	    bindToController: true
	  };

	  return directive;
	}

	var FooterController = function FooterController() {
	  'ngInject';

	  _classCallCheck(this, FooterController);
	};

/***/ }),
/* 23 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.TopContentDirective = TopContentDirective;

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function TopContentDirective() {
	  'ngInject';

	  var directive = {
	    restrict: 'E',
	    templateUrl: 'app/components/topContent/topContent.html',
	    scope: {},
	    controller: TopContentController,
	    controllerAs: 'vm',
	    bindToController: true
	  };

	  return directive;
	}

	var TopContentController = function TopContentController() {
	  'ngInject';

	  _classCallCheck(this, TopContentController);
	};

/***/ }),
/* 24 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.CenterContentDirective = CenterContentDirective;

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function CenterContentDirective() {
	  'ngInject';

	  var directive = {
	    restrict: 'E',
	    templateUrl: 'app/components/centerContent/centerContent.html',
	    scope: {},
	    controller: CenterContentController,
	    controllerAs: 'vm',
	    bindToController: true
	  };

	  return directive;
	}

	var CenterContentController = function CenterContentController() {
	  'ngInject';

	  _classCallCheck(this, CenterContentController);
	};

/***/ }),
/* 25 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.VideoSectionDirective = VideoSectionDirective;

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function VideoSectionDirective() {
	  'ngInject';

	  var directive = {
	    restrict: 'E',
	    templateUrl: 'app/components/videoSection/videoSection.html',
	    scope: {},
	    controller: VideoSectionController,
	    controllerAs: 'vm',
	    bindToController: true
	  };

	  return directive;
	}

	var VideoSectionController = function VideoSectionController() {
	  'ngInject';

	  _classCallCheck(this, VideoSectionController);
	};

/***/ }),
/* 26 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.CustomizedSectionDirective = CustomizedSectionDirective;

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function CustomizedSectionDirective() {
	  'ngInject';

	  var directive = {
	    restrict: 'E',
	    templateUrl: 'app/components/customizedSection/customizedSection.html',
	    scope: {},
	    controller: CustomizedSectionController,
	    controllerAs: 'vm',
	    bindToController: true
	  };

	  return directive;
	}

	var CustomizedSectionController = function CustomizedSectionController() {
	  'ngInject';

	  _classCallCheck(this, CustomizedSectionController);
	};

/***/ }),
/* 27 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.MoreSectionDirective = MoreSectionDirective;

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function MoreSectionDirective() {
	  'ngInject';

	  var directive = {
	    restrict: 'E',
	    templateUrl: 'app/components/moreSection/moreSection.html',
	    scope: {},
	    controller: MoreSectionController,
	    controllerAs: 'vm',
	    bindToController: true
	  };

	  return directive;
	}

	var MoreSectionController = function MoreSectionController() {
	  'ngInject';

	  _classCallCheck(this, MoreSectionController);
	};

/***/ }),
/* 28 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.SliderDirective = SliderDirective;

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function SliderDirective() {
	  'ngInject';

	  var directive = {
	    restrict: 'E',
	    templateUrl: 'app/components/slider/slider.html',
	    scope: {},
	    controller: SliderController,
	    controllerAs: 'vm',
	    bindToController: true
	  };

	  return directive;
	}

	var SliderController = function SliderController() {
	  'ngInject';

	  _classCallCheck(this, SliderController);
	};

/***/ }),
/* 29 */
/***/ (function(module, exports) {

	'use strict';

	MalarkeyDirective.$inject = ["malarkey"];
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	exports.MalarkeyDirective = MalarkeyDirective;

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function MalarkeyDirective(malarkey) {
	  'ngInject';

	  var directive = {
	    restrict: 'E',
	    scope: {
	      extraValues: '='
	    },
	    template: '&nbsp;',
	    link: linkFunc,
	    controller: MalarkeyController,
	    controllerAs: 'vm'
	  };

	  return directive;

	  function linkFunc(scope, el, attr, vm) {
	    var watcher = void 0;
	    var typist = malarkey(el[0], {
	      typeSpeed: 40,
	      deleteSpeed: 40,
	      pauseDelay: 800,
	      loop: true,
	      postfix: ' '
	    });

	    el.addClass('acme-malarkey');

	    angular.forEach(scope.extraValues, function (value) {
	      typist.type(value).pause().delete();
	    });

	    watcher = scope.$watch('vm.contributors', function () {
	      angular.forEach(vm.contributors, function (contributor) {
	        typist.type(contributor.login).pause().delete();
	      });
	    });

	    scope.$on('$destroy', function () {
	      watcher();
	    });
	  }
	}

	var MalarkeyController = function () {
	  MalarkeyController.$inject = ["$log", "githubContributor"];
	  function MalarkeyController($log, githubContributor) {
	    'ngInject';

	    _classCallCheck(this, MalarkeyController);

	    this.$log = $log;
	    this.contributors = [];

	    this.activate(githubContributor);
	  }

	  _createClass(MalarkeyController, [{
	    key: 'activate',
	    value: function activate(githubContributor) {
	      var _this = this;

	      return this.getContributors(githubContributor).then(function () {
	        _this.$log.info('Activated Contributors View');
	      });
	    }
	  }, {
	    key: 'getContributors',
	    value: function getContributors(githubContributor) {
	      var _this2 = this;

	      return githubContributor.getContributors(10).then(function (data) {
	        _this2.contributors = data;

	        return _this2.contributors;
	      });
	    }
	  }]);

	  return MalarkeyController;
	}();

/***/ })
/******/ ]);