Template.projects.helpers({
	'projects': function(){
		return PW.Projects.find({}, {sort: {createdAt: -1}});
	}
});

Template.projects.events({
  'click .delete-project': function() {
        PW.Projects.remove(this._id);
    }
});