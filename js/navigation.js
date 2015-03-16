var NavigationHeader = React.createClass({
  render: function() {
    return (
      <div className="navbar-header">
        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navigation-collapse">
          <span className="sr-only">Toggle navigation</span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
        </button>
        <a className="navbar-brand" href="#">
          ReactBootstrapNav
        </a>
      </div>
    );
  }
});

var NavigationItem = React.createClass({
  render: function() {
    if(this.props.currentPage == this.props.name) {
      return (<li className="active"><a href={this.props.link}>{this.props.name} <span className="sr-only">(current)</span></a></li>)
    } else {
      return (<li><a href={this.props.link}>{this.props.name}</a></li>);
    }
  }
});

var NavigationItems = React.createClass({
  render: function() {
    return (
      <div className="collapse navbar-collapse" id="navigation-collapse">
        <ul className="nav navbar-nav">
          <NavigationItem name="Home" currentPage={this.props.currentPage} link="index.html"/>
          <NavigationItem name="About" currentPage={this.props.currentPage} link="about.html"/>
          <NavigationItem name="Something Else" currentPage={this.props.currentPage} link="something.html"/>
          <NavigationItem name="Epic Link" currentPage={this.props.currentPage} link="epic.html"/>
          <NavigationItem name="Contact" currentPage={this.props.currentPage} link="contact.html"/>
        </ul>
      </div>
    );
  }
});


var Navigation = React.createClass({
  render: function() {
    return (
        <div className="container">
          <NavigationHeader/>
          <NavigationItems currentPage={this.props.currentPage}/>
        </div>
    );
  }
});

React.render(
  <Navigation currentPage="Home"/>,
  document.getElementById('navigation')
);
