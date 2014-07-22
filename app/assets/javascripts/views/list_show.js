TrelloClone.Views.ListShow = Backbone.CompositeView.extend({
  className: "list list-group-item",
  
  template: JST["list_show"],
  
  id: function () {
    return this.model.get("id");
  },
  
  events: {
    "click .delete-list": "deleteList",
    "click .new-card-button": "showForm",
    // "mouseenter": "handleMouseOver",
//     "mouseleave": "handleMouseOver"
  },
  
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
  
  deleteList: function (event) {
    event.preventDefault();
    this.model.destroy();
    this.remove();
  },
  
  render: function () {
    var renderedContent = this.template({ list: this.model })
    this.$el.html(renderedContent);
    this.attachSubviews();
    var fromList;
    var toList;
    var activeCard;
    var that = this;
    $(".cards").sortable({
      
      connectWith: ".cards",
      
      start: function (event, ui) {
        activeCard = ui.item;
        fromList = $(event.target).parent();
      },
      
      over: function (event, ui) {
        toList = $(event.target).parent();
      },
      
      update: function (event, ui) {
        if (fromList !== toList) {
          fromList.cards().remove(activeCard);
          toList.cards().add(activeCard);
        }
        var data = $(this).sortable("toArray");
        //same as in board_show.js
      }
      
    });
    
    return this;
  },
  
  handleMouseOver: function (event) {
    $(event.currentTarget).find(".delete-list").toggleClass("hidden");
  },
  
  showForm: function (event) {
    $(event.currentTarget).addClass("hidden");
    this.$('.card-new').removeClass('hidden');
    this.$('#card-description-input').focus();
  }
});