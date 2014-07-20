TrelloClone.Views.CardShow = Backbone.View.extend({
  template: JST["card_show"],
  
  render: function () {
    var renderedContent = this.template({ card: this.model });
    this.$el.html(renderedContent);
    
    return this;
  }
})