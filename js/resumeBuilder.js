var bio = {
	"name" : "Tay Clarke",
	"role" : "Web Developer",
	"contacts" : {
		"mobile" : "804-274-8182",
		"email": "Tay1120@gmail.com",
		"github" : "Tay1120",
		"twitter" : "@Tavia1120",
		"location" : "Richmond, VA"
	},
	"welcomeMessage" : "I am an entry level Web Developer currently in training.",
	"skills" : [
	"HTML", "JavaScript","CSS","GitBash and GitHub"
	],
	"bioPic":"images/Tay.jpg"
};

var education = {
	"schools": [
 		{
 			"name": "Mary Baldwin College",
 			"city": "Staunton, VA",
 			"degree": "N/A",
 			"majors": ["Computer Applications","Scriptwriting","Independent Studies"],
 			"dates": "2002-2003",
 			"url": "http://www.mbc.edu/"
 		},

 	],
 	"onlineCourses": [
 		{
 			"title": "Front-End Web Developer Nanodegree",
 			"School": "Udacity",
 			"dates": "2014-2015",
 			"url": "https://www.udacity.com/course/nd001"
 		}
 	]
}

var work = {
	"jobs": [
		{
			"employer": "Capital One",
			"title": "Senior Operations Coordinator",
			"location": "Glen Allen, VA",
			"dates": "August 2011-Present",
			"description": "Fraud Claims Intake, Dispute Claims Intake, Secured Messaging Bank Claims, Payment Investigations, Payment Research, Payment Refunds, Credit Bureau Disputes, Account Research, Adjustments on Credit Card Accounts, Credit Bureau Disputes, Writting and Sending Customer Letters, Training",
		},
		{
			"employer": "Convergys",
			"title": "Customer Service and Resolutions Representative",
			"location": "Lake Mary, FL",
			"dates": "October 2010-August 2011",
			"description": "Customer Service, Manage incoming and outgoing calls, Resolve technical issues with mobile phones, Manage Customer Accounts, Add/Change account features, Equipment and Service Sales",
		}
	]
}

var projects = {
	"projects": [
		{
			"title": "P1 Mockup To Website",
			"dates": "2014",
			"description": "I was provided with a design mockup as a PDF-file (left image) and had to replicate that design in HTML and CSS (right image).",
			"images": [
			"images/TestMockup2.png","images/P1Mockup2.png"
			]
		}
	]
}

var name = "Tay Clarke"
var formattedName = HTMLheaderName.replace("%data%", name);
var role = "Web Developer"
var formattedRole = HTMLheaderRole.replace("%data%", role);
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
$("#topContacts").append(formattedMobile);
var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
$("#topContacts").append(formattedEmail);
var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
$("#topContacts").append(formattedGithub);
var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
$("#topContacts").append(formattedTwitter);
var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
$("#topContacts").append(formattedLocation);
var formattedPicture = HTMLbioPic.replace("%data%", bio.bioPic);
$("#header").append(formattedPicture);
var formattedwelcomeMessage = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);
$("#header").append(formattedwelcomeMessage);
if (bio.skills) {
            $("#header").append(HTMLskillsStart);
            for(skills in bio.skills) {
                var formattedSkills = HTMLskills.replace("%data%", bio.skills[skills]);
                $("#header").append(formattedSkills);
            }
        }
function displayWork(){
	for (job in work.jobs) {
		// create new div for work experience
		$("#workExperience").append(HTMLworkStart);
		// concat employer and title
		var formattedEmployer = HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%",work.jobs[job].title);
		var formattedEmployerTitle = formattedEmployer + formattedTitle;
		$(".work-entry:last").append(formattedEmployerTitle);

		var formattedDates = HTMLworkDates.replace("%data%",work.jobs[job].dates);
		$(".work-entry:last").append(formattedDates);

		var formattedDescription = HTMLworkDescription.replace("%data%",work.jobs[job].description);
		$(".work-entry:last").append(formattedDescription);
	}
}
displayWork();
projects.display = function(){
	for (project in projects.projects) {
		// create new div for projects
		$("#projects").append(HTMLprojectStart);
		// project details
		var formattedTitle = HTMLprojectTitle.replace("%data%",projects.projects[project].title);
		$(".project-entry:last").append(formattedTitle);
		var formattedDates = HTMLprojectDates.replace("%data%",projects.projects[project].dates);
		$(".project-entry:last").append(formattedDates);
		var formattedDescription = HTMLprojectDescription.replace("%data%",projects.projects[project].description);
		$(".project-entry:last").append(formattedDescription);
		if (projects.projects[project].images.length > 0) {
			for (image in projects.projects[project].images) {
				var formattedImage = HTMLprojectImage.replace("%data%",projects.projects[project].images[image]);
				$(".project-entry:last").append(formattedImage);
			}
		}
	}
}
projects.display();
function locationizer(work_obj) {
	var locationArray = [];
	for (job in work_obj.jobs) {
		var newLocation = work_obj.jobs[job].location;
		locationArray.push(newLocation);
	}
	return locationArray;
}
console.log(locationizer(work));