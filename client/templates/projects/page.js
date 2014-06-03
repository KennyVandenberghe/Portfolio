var insert_project_post = function() {
	PW.ProjectPosts.insert({
        project: $('.projectTitle').val(),
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
         if ($('.postTitle').val() && $('.postContent').val() && $('.projectTitle').val())
             insert_project_post();
         Session.set('adding_project', false);
    },
    'click .delete-project-post': function(){
        if(confirm("Are u sure you want to delete this post?"))
           PW.ProjectPosts.remove(this._id);
    }
});

Template.projectPage.helpers({
    'posts': function(){
        doc = PW.Projects.findOne(this._id);
        title = doc.title;
        console.log(title);
        return PW.ProjectPosts.find({project: title}, {sort: {createdAt: 1}});
    },
    'new_project': function(){
        return Session.equals('adding_project', true);
    },
    'project': function(){
        return PW.Projects.findOne(this._id);
    }
});

function focusText(i) {
        i.focus();

        i.select();
    }