TrelloClone.Views.CardNew = Backbone.View.extend({ 
  template: JST["card_new"],
  
  events: {
    "submit form": "submit"
  },
  
  render: function () {
    var renderedContent = this.template({ list: this.model });
    this.$el.html(renderedContent);
    
    return this;
  },
  
  submit: function (event) {
    event.preventDefault();
    debugger
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