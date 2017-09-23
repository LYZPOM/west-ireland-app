export function config ($logProvider, toastrConfig, $authProvider,API_URL,$translateProvider) {
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
