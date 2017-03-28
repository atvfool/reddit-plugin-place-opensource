!r.placeModule('inspector', function(require) {
  var template = _.template(
    '<div class="place-inspector-user-row">' +
      '<a href="/user/<%- username %>" target="_blank">u/<%- username %></a>' +
    '</div>' +
    '<div class="place-inspector-location-row">(<%- x %>, <%- y %>)</div>' +
    '<div class="place-inspector-timestamp-row"><%- timestamp %></div>' +
    '<div class="place-inspector-link-row">' +
      '<a href="#x=<%- x %>&y=<%- y %>">link to this tile</a>' +
    '</div>'
  );

  return {
    isVisible: false,

    init: function(el) {
      this.$el = $(el);
    },

    show: function(x, y, username, timestamp) {
      this.$el.html(template({
        x: x,
        y: y,
        username: username,
        timestamp: timestamp,
      }));
      this.$el.show();
      this.isVisible = true;
    },

    hide: function() {
      this.$el.hide();
      this.isVisible = false;
    },
  };
});