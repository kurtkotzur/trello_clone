TrelloClone.Collections.Cards = Backbone.Collection.extend({
  model: TrelloClone.Models.Card,
  
  url: "/api/cards",
  
  initialize: function (model, options) {
    this.list = options.list;
  }
  
});