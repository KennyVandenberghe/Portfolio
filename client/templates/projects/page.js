var insert_project_post = function() {
	PW.ProjectPosts.insert({
		title: $('.postTitle').val(),
		content: $('.postContent').val(),
		createdAt: new Date().getTime()
	});
	$('.postTitle').val('');
	$('.postContent').val('');
};

Template.projectPage.events({
    'click .newPost': function(t) {
        Session.set('adding_project', true);
        focusText(t.find('.postTitle'));
        
    },
    'click .insertPost': function(){
         if ($('.postTitle').val() && $('.postContent').val())
             insert_project_post();
         Session.set('adding_project', false);
    }
});

Template.projectPage.helpers({
    'posts': function(){
        return PW.ProjectPosts.find({}, {sort: {createdAt: 1}});
    },
    'new_project': function(){
        return Session.equals('adding_project', true);
    }
});

function focusText(i) {
        i.focus();

        i.select();
    }