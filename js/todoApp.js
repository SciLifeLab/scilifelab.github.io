/** @jsx React.DOM */
var RepoStars = React.createClass({
  getInitialState: function() {
    return {stars: 0}
  },

  componentWillMount: function() {
    self = this;
    url = "https://api.github.com/repos/" + this.props.repo;

    $.get(url, function(result) {
      this.setState({stars: result.stargazers_count});
    }.bind(this));
  },

  render: function() {
    return (
      <div className="case-action">
        <span className="icon-star"></span> { this.state.stars }
      </div>
    );
  }
});

var ProjectList = React.createClass({
  mixins: [ReactFireMixin],

  getInitialState: function() {
    return {projects: []};
  },

  componentWillMount: function() {
    var firebaseRef = new Firebase('https://scilifelab-eboss.firebaseio.com/projects/');
    this.bindAsArray(firebaseRef.limitToLast(25), 'projects');
  },

  render: function() {
    var createItem = function(item, index) {
      return (
        <div key={ index } className="case-wrapper">
          <a href={ "https://github.com/" + item.repo } className="case-action-wrapper">
            <RepoStars repo={ item.repo } />
          </a>

          <a className="case" href="#">
            <div className="case-logo bg-yellow">
              <div className="case-logo-icon"></div>
            </div>

            <div className="case-intro">
              <span className="case-intro-title">{ item.name }</span>
              <span className="case-intro-text">{ item.intro }</span>
            </div>
          </a>
        </div>
      );
    };

    return <div>{ this.state.projects.map(createItem) }</div>;
  }
});

React.render(<ProjectList />, document.getElementById('todoApp3'));
