TrelloClone.Views.BoardNew = Backbone.View.extend({
  template: JST["board_new"],
  
  events: {
    "submit form": "submit"
  },
  
  render: function () {
    var renderedContent = this.template({ board: this.model });
    this.$el.html(renderedContent);
    
    return this;
  },
  
  submit: function (event) {
    event.preventDefault();
    var params = $(event.currentTarget).serializeJSON();
    var model = this.model;
    model.set(params["board"]);
    this.collection.create(this.model, {
      success: function () {
        Backbone.history.navigate("#/boards/" + model.get("id"));
      },
      error: function () {
        console.log("board creation unsuccessful");
      }
    });
  }
});