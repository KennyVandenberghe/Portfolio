Router.configure({
	layoutTemplate: 'layout',
	loadingTemplate: 'loading',
});
Router.onBeforeAction('loading');

IndexController = RouteController.extend({
	rootPane: 'home'
});
HomeAddPostController = RouteController.extend({
	rootPane: 'homeaddpost'
});
HomeEditPostController = RouteController.extend({
	rootPane: 'homeeditpost'
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
ProjectEditController = RouteController.extend({
	rootPane: 'projectedit'
});
ProjectEditProjectPostController = RouteController.extend({
	rootPane: 'projecteditprojectpost'
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
	this.route('homeEditPost', {
		path: '/post/:_id',
		data: function() {return PW.BlogPosts.findOne(this.params._id);},
		controller: 'HomeEditPostController'
	});
	this.route('projects', {
		path: '/projects',
		controller: 'ProjectController'
	});
	this.route('projectAdd', {
		path: '/projects/add',
		controller: 'ProjectAddController'
	});
	this.route('projectEdit', {
		path: '/projects/:_id/edit',
		data: function() {return PW.Projects.findOne(this.params._id);},
		controller: 'ProjectEditController'
	});
	this.route('projectEditProjectPost', {
		path: '/projects/:projectId/:_id',
		data: function(){return PW.ProjectPosts.findOne(this.params._id);},
		controller: 'ProjectEditProjectPostController'
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

