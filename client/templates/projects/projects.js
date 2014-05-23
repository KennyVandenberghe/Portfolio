
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
    'mouseenter .appear': function(e){
		var targ = "#" + e.currentTarget.id + "target";
		var label = "#" + e.currentTarget.id +"label";
    $(e.currentTarget).addClass('hover-buttons');
    $(label).addClass('hover-label').toggle("animate");
    $(targ).addClass('button alert tiny delete-project');
    $(targ).removeClass('button-invisible');
    
    },
    'mouseleave .appear': function(e){
    var targ = "#" + e.currentTarget.id + "target";
    var label = "#" + e.currentTarget.id +"label";	
    $(targ).removeClass('button alert tiny delete-project');
    $(targ).addClass('button-invisible');
    $(label).removeClass('hover-label');
    }
});