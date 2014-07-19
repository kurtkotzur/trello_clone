TrelloClone.Routers.BoardRouter = Backbone.Router.extend({
  initialize: function (options) {
    this.$rootEl = options.$rootEl;
  },
  
  routes: {
    "": "boardsIndex",
    "boards/new": "boardNew",
    "boards/:id": "boardShow"
  },
  
  boardsIndex: function () {
    TrelloClone.Collections.boards.fetch();
    var boardsIndexView = new TrelloClone.Views.BoardsIndex({ collection: TrelloClone.Collections.boards });
    this._swapView(boardsIndexView);
  },
  
  boardNew: function () {
    var board = new TrelloClone.Models.Board();
    var boards = TrelloClone.Collections.boards;
    var boardNewView = new TrelloClone.Views.BoardNew({ model: board, collection: boards });
    this._swapView(boardNewView);
  },
  
  boardShow: function (id) {
    var board = TrelloClone.Collections.boards.getOrFetch(id);
    board.fetch();
    var boardShowView = new TrelloClone.Views.BoardShow({ model: board });
    this._swapView(boardShowView);
  },
  
  _swapView: function (newView) {
    this.currentView && this.currentView.remove();
    this.$rootEl.html(newView.render().$el);
    this.currentView = newView;
  }
});