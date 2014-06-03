Template.projectEdit.helpers({
'project': function(){
  return PW.Projects.findOne(this._id);
 }
});
 var edit_project = function(projectId, title, summary, updatedAt) {
	var update = _.extend({}, {
  	projectId: this._id,
  	title: title,
  	summary: summary,
   	updatedAt: updatedAt
  });
  PW.Projects.update({_id: projectId}, {$set: update});
};

Template.projectEdit.events({
 'click .editProject': function() {
    var project = this;
    if ($('.projectTitle').val() && $('.projectSummary').val()){
	  	var title = $('.projectTitle').val();
			var summary = $('.projectSummary').val();
			var updatedAt = new Date().getTime();
			edit_project(project._id, title, summary, updatedAt);
    }
  } 
});
