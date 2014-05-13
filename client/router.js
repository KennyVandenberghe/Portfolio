Router.configure({
	layoutTemplate: 'layout',
	loadingTemplate: 'loading'
});

IndexController = RouteController.extend({
	rootPane: 'home'
});
HomeAddPostController = RouteController.extend({
	rootPane: 'homeaddpost'
});
ProjectController = RouteController.extend({
	rootPane: 'projects'
});
ProjectPageController = RouteController.extend({
	rootPane: 'projectpage'
});
ProjectAddController = RouteController.extend({
	rootPane: 'projectadd'
});
SchoolDetailsController = RouteController.extend({
	rootPane: 'schooldetails'
});
StageDetailsController = RouteController.extend({
	rootPane: 'stagedetails'
});
OverMijController = RouteController.extend({
	rootPane: 'overmij'
});
Router.map(function(){
	this.route('home', {
		path: '/',
		controller: 'IndexController'
	});
	this.route('homeAddPost', {
		path: '/post',
		controller: 'HomeAddPostController'
	});
	this.route('projects', {
		path: '/projects',
		controller: 'ProjectController'
	});
	this.route('projectAdd', {
		path: '/projects/add',
		controller: 'ProjectAddController'
	});
	this.route('projectPage', {
		path: '/projects/:_id',
		data: function() { return PW.Projects.findOne(this.params._id); },
		controller: 'ProjectPageController'
	});
	this.route('schoolDetails', {
		path: '/schoolDetails',
		controller: 'SchoolDetailsController'
	});
	this.route('stageDetails', {
		path: '/stageDetails',
		controller: 'StageDetailsController'
	});
	this.route('overMij', {
		path: '/overMij',
		controller: 'OverMijController'
	});
});

