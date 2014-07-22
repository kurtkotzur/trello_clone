TrelloClone.Views.BoardShow = Backbone.CompositeView.extend({
  //TODO: add a list of board members to the template
  template: JST["board_show"],
  
  initialize: function () {
    this.listenTo(this.model, "sync", this.render);
    this.listenTo(this.model.lists(), "add", this.addList);
    
    var listNewView = new TrelloClone.Views.ListNew({ model: this.model });
    this.addSubview(".list-new", listNewView);
    
    var membershipNewView = new TrelloClone.Views.MembershipNew({ model: this.model });
    this.addSubview(".member-new", membershipNewView);
    
    this.model.lists().each(this.addList.bind(this));
  },
  
  events: {
    "click .delete-board": "deleteBoard"
  },
  
  deleteBoard: function (event) {
    this.model.destroy();
    Backbone.history.navigate("#/");
  },
  
  addList: function (list) {
    var listShow = new TrelloClone.Views.ListShow({ model: list });
    this.addSubview(".lists", listShow);
  },
  
  render: function () {
    var renderedContent = this.template({ board: this.model });
    this.$el.html(renderedContent);
    this.attachSubviews();
    
    var that = this;
    $(".lists").sortable({
      update: function (event, ui) {
        var data = $(this).sortable("toArray");
        _(data).each( function (id, index) {
          var currentList = that.model.lists().get(id);
          currentList.set("ord", index);
          currentList.save();
          console.log(index);
        });
      }
    });
    
    return this;
  }
});