TrelloClone.Views.CardNew = Backbone.View.extend({ 
  template: JST["card_new"],
  
  events: {
    "keydown textarea.description-input": "createCard"
  },
  
  render: function () {
    var renderedContent = this.template({ list: this.model });
    this.$el.html(renderedContent);
    return this;
  },
  
  createCard: function (event) {
    if (event.keyCode === 13) {
      event.preventDefault();
      var params = $(".new-card-form").serializeJSON();
      var card = new TrelloClone.Models.Card(params["card"]);
      var that = this;
      card.save({}, {
        success: function () {
          that.model.cards().add(card)
          that.render();
        }
      });
      $(".card-new").addClass("hidden");
      $(".new-card-button").removeClass("hidden");
    }
  }
});