TrelloClone.Views.CardShow = Backbone.View.extend({
  template: JST["card_show"],
  
  initialize: function () {
    this.$el.addClass("card");
    this.$el.addClass("list-group-item");
  },
  
  events: {
    "click .delete-card": "deleteCard",
    "mouseenter": "handleMouseOver",
    "mouseleave": "handleMouseOver"
  },
  
  deleteCard: function (event) {
    event.preventDefault();
    this.model.destroy();
    this.remove();
  },
  
  render: function () {
    var renderedContent = this.template({ card: this.model });
    this.$el.html(renderedContent);
    return this;
  },
  
  handleMouseOver: function (event) {
    $(event.currentTarget).find(".delete-card").toggleClass("hidden"); 
  }
  
})