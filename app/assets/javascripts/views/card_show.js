TrelloClone.Views.CardShow = Backbone.View.extend({
  template: JST["card_show"],
  
  events: {
    "click button.delete-card": "deleteCard",
    "click": "handleMouseEnter",
    "mouseleave": "handleMouseLeave"
  },
  
  deleteCard: function (event) {
    debugger
    this.model.destroy();
  },
  
  render: function () {
    var renderedContent = this.template({ card: this.model });
    this.$el.html(renderedContent);
    return this;
  },
  
  handleMouseEnter: function (event) {
    alert("hello");
    $(event.currentTarget).find(".delete-card").toggleClass("hidden"); 
  },
  
  handleMouseLeave: function (event) {
    alert("hello")
    $(event.currentTarget).find(".delete-card").toggleClass("hidden"); 
  }
  
})