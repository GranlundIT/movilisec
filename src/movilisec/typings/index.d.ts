/// <reference path="globals/angular/index.d.ts" />
/// <reference path="globals/chai/index.d.ts" />
/// <reference path="globals/es6-shim/index.d.ts" />
/// <reference path="globals/meteor/index.d.ts" />
/// <reference path="globals/mocha/index.d.ts" />
/// <reference path="globals/sinon/index.d.ts" />
/// <reference path="modules/chai-spies/index.d.ts" />

declare module "*.html" {
  const template: string;
  export default template;
}
