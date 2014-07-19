TrelloClone.Views.BoardsIndex = Backbone.View.extend({
  template: JST["boards_index"],
  
  initialize: function () {
    this.listenTo(this.collection, "sync add reset remove", this.render);
  },
  
  render: function () {
    var renderedContent = this.template({ boards: this.collection });
    this.$el.html(renderedContent);
    return this;
  }
});