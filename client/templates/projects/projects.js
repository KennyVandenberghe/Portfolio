Template.projects.helpers({
	'projects': function(){
		return PW.Projects.find({}, {sort: {createdAt: -1}});
	}
});