TrelloClone.Views.CardNew = Backbone.View.extend({ 
  template: JST["card_new"],
  
  events: {
    "submit form": "createCard"
  },
  
  render: function () {
    var renderedContent = this.template({ list: this.model });
    this.$el.html(renderedContent);
    return this;
  },
  
  createCard: function (event) {
    event.preventDefault();
    var params = $(event.currentTarget).serializeJSON();
    var card = new TrelloClone.Models.Card(params["card"]);
    var that = this;
    card.save({}, {
      success: function () {
        that.model.cards().add(card)
        that.render();
      }
    });
  }
});