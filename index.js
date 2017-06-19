/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-expand-multiline',
  included: function(app, parentAddon) {
    var target = (parentAddon || app);

    // necessary for nested usage
    // parent addon should call `this._super.included.apply(this, arguments);`
    if (target.app) {
      target = target.app;
    }

    this.app = target;

    // Use configuration to decide which theme css files
    // to import, thus not populating the user's app
    this.importThemes(target);
    this._super.included.apply(this, arguments);
  },

  importThemes: function(app) {
    app.import('vendor/ember-expand-multiline/base.css');
  }
};