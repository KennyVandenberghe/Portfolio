function GetCurrentDate() {
        // Today date time which will used to set as default date.
        var todayDate = new Date();
        todayDate = todayDate.getFullYear() + "-" +
                       ("0" + (todayDate.getMonth() + 1)).slice(-2) + "-" +
                       ("0" + todayDate.getDate()).slice(-2) + " " + ("0" + todayDate.getHours()).slice(-2) + ":" +
                       ("0" + todayDate.getMinutes()).slice(-2);
 
        return todayDate;
    }

var insert_post = function() {
	PW.BlogPosts.insert({
			title: $('.postTitle').val(),
			content: $('.postContent').val(),
	    createdAt: GetCurrentDate()
	});
	$('.postTitle').val('');
	$('.postContent').val('');
};

Template.homeAddPost.events({
        'click .insertPost': function() {
            if ($('.postTitle').val() && $('.postContent').val())
                insert_post();
        }
    });