TrelloClone.Views.CardNew = Backbone.View.extend({ 
  template: JST["card_new"],
  
  events: {
    "keydown textarea.description-input": "createCard",
    "blur textarea.description-input": "toggleForm"
  },
  
  render: function () {
    var renderedContent = this.template({ list: this.model });
    this.$el.html(renderedContent);
    return this;
  },
  
  toggleForm: function () {
    $(".card-new").addClass("hidden");
    $(".new-card-button").removeClass("hidden");
  },
  
  createCard: function (event) {
    var $titleInput = this.$('#card-description-input');
    if (event.keyCode === 13) {
      event.preventDefault();
      if ($titleInput.val().length === 0) {
        $titleInput.val("");
        $titleInput.effect("highlight", {}, 3000);
      } else {
        var card = new TrelloClone.Models.Card();
        card.set('list_id', this.model.id);
        card.set('title', $titleInput.val());
        var that = this;
        card.save({}, {
          success: function () {
            that.model.cards().add(card)
            that.render();
          }
        });
        this.toggleForm();
      }
    }
  }
});