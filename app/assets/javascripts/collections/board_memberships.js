TrelloClone.Collections.BoardMemberships = Backbone.Collection.extend({
  model: TrelloClone.Models.Membership,
  
  url: function () {
    return this.board.url() + "/lists";
  },
  
  initialize: function (models, options) {
    this.board = options.board;
  }
});