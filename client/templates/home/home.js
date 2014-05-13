Template.home.helpers({
	'posts': function(){
		return PW.BlogPosts.find({}, {sort:{createdAt: -1}});
	}
});