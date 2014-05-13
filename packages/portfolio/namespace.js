PW = {};

if(Meteor.isClient){
  Handlebars.registerHelper("PW", function() {
    return PW;
  });
}