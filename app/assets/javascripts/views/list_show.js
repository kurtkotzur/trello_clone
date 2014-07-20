TrelloClone.Views.ListShow = Backbone.CompositeView.extend({
  template: JST["list_show"],
  
  initialize: function () {
    this.listenTo(this.model, "sync", this.render);
    this.listenTo(this.model.cards(), "add", this.addCard);
    
    var cardNewView = new TrelloClone.Views.CardNew({ model: this.model });
    this.addSubview(".card-new", cardNewView);
    
    this.model.cards().each(this.addCard.bind(this));
  },
  
  addCard: function (card) {
    var cardShow = new TrelloClone.Views.CardShow({ model: card });
    this.addSubview(".cards", cardShow);
  },
  
  render: function () {
    var renderedContent = this.template({ list: this.model })
    this.$el.html(renderedContent);
    this.attachSubviews();
    
    return this;
  }
});