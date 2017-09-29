export class NavbarController {
		constructor($scope,$auth) {
				'ngInject';

				this.$auth = $auth;
				this.isAuthenticated = $auth.isAuthenticated;

				this.pagelayer = angular.element(document.querySelector('.mdl-layout__obfuscator'));

		}

		logout() {
				this.$auth.logout();
		}

		openNav() {
				var navButton = angular.element(document.querySelector('.mdl-layout__drawer-button'));
				var navBar = angular.element(document.querySelector('.mdl-layout__drawer'));

				navButton.attr("aria-expanded",true);
				navBar.attr("aria-hidden",false);
				navBar.addClass("is-visible");
				this.pagelayer.addClass("is-visible");
		}

		navMouseLeave() {
				var navButton = angular.element(document.querySelector('.mdl-layout__drawer-button'));
				var navBar = angular.element(document.querySelector('.mdl-layout__drawer'));

				navButton.attr("aria-expanded",false);
				navBar.attr("aria-hidden",true);
				navBar.removeClass("is-visible");
				this.pagelayer.removeClass("is-visible");
		}
}
