
Template.projects.helpers({
	'projects': function(){
		return PW.Projects.find({}, {sort: {createdAt: -1}});
	}
});

Template.projects.events({
    'click .delete-project': function() {
    	if(confirm("Are u sure you want to delete this project?"))
           PW.Projects.remove(this._id);
    },
    'click .edit_project': function(){
        PW.Projects.findOne(this._id);
    },
    'mouseenter .appear': function(e){
		var target = "#" + e.currentTarget.id + "target";
        var targ = "#" + e.currentTarget.id + "targ";
		var label = "#" + e.currentTarget.id +"label";
    $(e.currentTarget).addClass('hover-buttons');
    $(label).addClass('hover-label');
    $(target).addClass('button alert tiny delete-project');
    $(targ).addClass('button success tiny edit_project');
    $(target).removeClass('button-invisible');
    $(targ).removeClass('button-invisible');
    
    },
    'mouseleave .appear': function(e){
    var target = "#" + e.currentTarget.id + "target";
    var targ = "#" + e.currentTarget.id + "targ";
    var label = "#" + e.currentTarget.id +"label";	
    $(target).removeClass('button alert tiny delete-project');
    $(targ).removeClass('button success tiny edit_project');
    $(target).addClass('button-invisible');
    $(targ).addClass('button-invisible');
    $(label).removeClass('hover-label');
    }
});