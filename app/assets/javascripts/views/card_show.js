TrelloClone.Views.CardShow = Backbone.View.extend({
  template: JST["card_show"],
  
  events: {
    "click button.delete-card": "deleteCard",
    "mouseenter": "handleMouseEnter",
    "mouseleave": "handleMouseLeave"
  },
  
  deleteCard: function (event) {
    debugger
    this.model.destroy();
  },
  
  render: function () {
    debugger
    var renderedContent = this.template({ card: this.model });
    this.$el.html(renderedContent);
    return this;
  },
  
  handleMouseEnter: function (event) {
    $(event.currentTarget).find(".delete-card").toggleClass("hidden"); 
  },
  
  handleMouseLeave: function (event) {
    $(event.currentTarget).find(".delete-card").toggleClass("hidden"); 
  }
  
})