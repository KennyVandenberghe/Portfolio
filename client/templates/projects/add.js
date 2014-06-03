var insert_project = function() {
	PW.Projects.insert({
		title: $('.projectTitle').val(),
		summary: $('.projectSummary').val(),
		createdAt: new Date().getTime()
	});
	$('.projectTitle').val('');
	$('.projectSummary').val('');
};

Template.projectAdd.events({
        'click .insertProject': function() {
            if ($('.projectTitle').val() && $('.projectSummary').val())
                insert_project();
        }
    });