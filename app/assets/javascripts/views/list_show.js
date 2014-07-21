TrelloClone.Views.ListShow = Backbone.CompositeView.extend({
  template: JST["list_show"],
  
  events: {
    "click .delete-list": "deleteList",
    "click .new-card-button": "showForm",
    "mouseenter": "handleMouseOver",
    "mouseleave": "handleMouseOver"
  },
  
  initialize: function () {
    this.$el.addClass("list");
    this.$el.addClass("list-group-item");
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
  
  deleteList: function (event) {
    event.preventDefault();
    this.model.destroy();
    this.remove();
  },
  
  render: function () {
    var renderedContent = this.template({ list: this.model })
    this.$el.html(renderedContent);
    this.attachSubviews();
    $(".cards").sortable();
    
    return this;
  },
  
  handleMouseOver: function (event) {
    $(event.currentTarget).find(".delete-list").toggleClass("hidden");
  },
  
  showForm: function (event) {
    $(event.currentTarget).addClass("hidden");
    $(event.currentTarget).prev().removeClass("hidden");
  }
});