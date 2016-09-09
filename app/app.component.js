(function(app) {
  app.AppComponent =
    ng.core.Component({
      selector: 'dictator-app',
      template: '<h1>The Dictator TV greets you, respected sir!</h1>'
    })
    .Class({
      constructor: function() {}
    });
})(window.app || (window.app = {}));
