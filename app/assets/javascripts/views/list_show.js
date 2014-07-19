TrelloClone.Views.ListShow = Backbone.View.extend({
  template: JST["list_show"],
  
  initialize: function () {
    this.model.cards().each(this.addCard.bind(this));
  },
  
  addCard: function (card) {
    var cardShow = new TrelloClone.Views.CardShow({ card: card });
    this.addSubview(".cards", cardShow);
  },
  
  render: function () {
    var renderedContent = this.template({ list: this.model })
    this.$el.html(renderedContent);
    
    return this;
  }
});