angular.module('mobile-angular-ui', [
  'mobile-angular-ui.core.activeLinks',       /* adds .active class to current links */
  'mobile-angular-ui.core.fastclick',         /* polyfills overflow: auto */
  'mobile-angular-ui.core.sharedState',       /* SharedState service and directives */
  'mobile-angular-ui.core.outerClick',        /* outerClick directives */
  'mobile-angular-ui.components.modals',            /* modals and overlays */
  'mobile-angular-ui.components.switch',            /* switch form input */
  'mobile-angular-ui.components.sidebars',          /* sidebars */
  'mobile-angular-ui.components.scrollable',        /* uiScrollable directives */
  'mobile-angular-ui.components.capture',           /* uiYieldTo and uiContentFor directives */
  'mobile-angular-ui.components.navbars'            /* navbars */
]);
