var NavigationHeader = React.createClass({displayName: "NavigationHeader",
  render: function() {
    return (
      React.createElement("div", {className: "navbar-header"}, 
        React.createElement("button", {type: "button", className: "navbar-toggle collapsed", "data-toggle": "collapse", "data-target": "#navigation-collapse"}, 
          React.createElement("span", {className: "sr-only"}, "Toggle navigation"), 
          React.createElement("span", {className: "icon-bar"}), 
          React.createElement("span", {className: "icon-bar"}), 
          React.createElement("span", {className: "icon-bar"})
        ), 
        React.createElement("a", {className: "navbar-brand", href: "#"}, 
          "ReactBootstrapNav"
        )
      )
    );
  }
});

var NavigationItem = React.createClass({displayName: "NavigationItem",
  render: function() {
    if(this.props.currentPage == this.props.name) {
      return (React.createElement("li", {className: "active"}, React.createElement("a", {href: this.props.link}, this.props.name, " ", React.createElement("span", {className: "sr-only"}, "(current)"))))
    } else {
      return (React.createElement("li", null, React.createElement("a", {href: this.props.link}, this.props.name)));
    }
  }
});

var NavigationItems = React.createClass({displayName: "NavigationItems",
  render: function() {
    return (
      React.createElement("div", {className: "collapse navbar-collapse", id: "navigation-collapse"}, 
        React.createElement("ul", {className: "nav navbar-nav"}, 
          React.createElement(NavigationItem, {name: "Home", currentPage: this.props.currentPage, link: "index.html"}), 
          React.createElement(NavigationItem, {name: "About", currentPage: this.props.currentPage, link: "about.html"}), 
          React.createElement(NavigationItem, {name: "Something Else", currentPage: this.props.currentPage, link: "something.html"}), 
          React.createElement(NavigationItem, {name: "Epic Link", currentPage: this.props.currentPage, link: "epic.html"}), 
          React.createElement(NavigationItem, {name: "Contact", currentPage: this.props.currentPage, link: "contact.html"})
        )
      )
    );
  }
});


var Navigation = React.createClass({displayName: "Navigation",
  render: function() {
    return (
        React.createElement("div", {className: "container"}, 
          React.createElement(NavigationHeader, null), 
          React.createElement(NavigationItems, {currentPage: this.props.currentPage})
        )
    );
  }
});

React.render(
  React.createElement(Navigation, {currentPage: "Home"}),
  document.getElementById('navigation')
);
