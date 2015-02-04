/** @jsx React.DOM */
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
				    <div className="case-action">
				      <div className="icon-star"></div>
				    </div>
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
