TrelloClone.Models.Board = Backbone.Model.extend({
  urlRoot: "api/boards",
  
  lists: function () {
    this._lists = this._lists || new TrelloClone.Collections.BoardLists([], { board: this });
    return this._lists;
  },
  
  memberships: function () {
    this._memberships = this._memberships || new TrelloClone.Collections.BoardMemberships(
      [], { board: this }
    );
    return this._memberships;
  },
  
  parse: function (payload) {
    if (payload.lists) {
      this.lists().set(payload.lists, { parse: true });
      delete payload.lists;
    }
    return payload;
  }

});