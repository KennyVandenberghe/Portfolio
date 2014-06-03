Template.home.helpers({
	'posts': function(){
		return PW.BlogPosts.find({}, {sort:{createdAt: -1}});
	}
});

Template.home.events({
  'click .delete-post': function(){
  	if(confirm("Are u sure you want to delete this post?"))
           PW.BlogPosts.remove(this._id);
  }
});