TrelloClone.Collections.Boards = Backbone.Collection.extend({
  model: TrelloClone.Models.Board,
  url: "/api/boards",
  
  getOrFetch: function (id) {
    var boards = this;
    
    var board;
    if (!(board = this.get(id))) {
      board = new TrelloClone.Models.Board({ id: id });
      boards.fetch({
        success: function () { boards.add(board); }
      });
    }
    return board;
  }
});

TrelloClone.Collections.boards = new TrelloClone.Collections.Boards();