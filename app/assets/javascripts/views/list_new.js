TrelloClone.Views.ListNew = Backbone.View.extend({
  template: JST["list_new"],
  
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
    var list = new TrelloClone.Models.List(params["list"]);
    var that = this;
    list.save({}, {
      success: function () {
        that.model.lists().add(list);
        that.render();
      }
    });
  }
});