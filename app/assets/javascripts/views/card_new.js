TrelloClone.Views.CardNew = Backbone.View.extend({ 
  template: JST["card_new"],
  
  events: {
    "click .submit-form-button": "createCard"
  },
  
  render: function () {
    var renderedContent = this.template({ list: this.model });
    this.$el.html(renderedContent);
    return this;
  },
  
  createCard: function (event) {
    // alert('submitted youur form!')
    event.preventDefault();
    // debugger
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