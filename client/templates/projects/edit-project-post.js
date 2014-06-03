Template.projectEditProjectPost.helpers({
'projectPost': function(){
  return PW.ProjectPosts.findOne(this._id);
 },
 'project': function(){
 	return PW.Projects.findOne(this._id);
 }
});

var edit_project_post = function(projectPostId, title, content, updatedAt) {
	var update = _.extend({}, {
  	projectPostId: this._id,
  	title: title,
  	content: content,
   	updatedAt: updatedAt
  });
  PW.ProjectPosts.update({_id: projectPostId}, {$set: update});
};

Template.projectEditProjectPost.events({
 'click .editProjectPost': function() {
    var projectPost = this;
    if ($('.projectTitle').val() && $('.projectContent').val()){
	  	var title = $('.projectTitle').val();
			var content = $('.projectContent').val();
			var updatedAt = new Date().getTime();
			edit_project_post(projectPost._id, title, content, updatedAt);
    }
  } 
});