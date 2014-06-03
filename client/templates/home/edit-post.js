Template.homeEditPost.helpers({
'post': function(){
  return PW.BlogPosts.findOne(this._id);
 }
});
 var edit_post = function(postId, title, content, updatedAt) {
	var update = _.extend({}, {
  	postId: this._id,
  	title: title,
  	content: content,
   	updatedAt: updatedAt
  });
  PW.BlogPosts.update({_id: postId}, {$set: update});
};

Template.homeEditPost.events({
 'click .editPost': function() {
    var post = this;
    if ($('.editTitle').val() && $('.editContent').val()){
	  	var title = $('.editTitle').val();
			var content = $('.editContent').val();
			var updatedAt = new Date().getTime();
			edit_post(post._id, title, content, updatedAt);
    }
  } 
});
