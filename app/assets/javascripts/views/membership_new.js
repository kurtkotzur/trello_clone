TrelloClone.Views.MembershipNew = Backbone.View.extend({
  template: JST["membership_new"],
  
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
    var membership = new TrelloClone.Models.Membership(params["board_membership"]);
    var that = this;
    membership.save({}, {
      success: function () {
        that.model.memberships().add(membership);
        that.render();
      },
      
      error: function () {
        console.log("Membership creation error");
      }
    });
  }
});