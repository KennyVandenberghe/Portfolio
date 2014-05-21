Template.projects.helpers({
	'projects': function(){
		return PW.Projects.find({}, {sort: {createdAt: -1}});
	}
});

Template.projects.events({
  'click .delete-project': function() {
  	if(confirm("Are u sure you want to delete this project?"))
        PW.Projects.remove(this._id);
    }
});