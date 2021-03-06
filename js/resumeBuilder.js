var bio = {
	"name" : "Tay Clarke",
	"role" : "Web Developer",
	"contacts" : {
		"mobile" : "804-274-8182",
		"email": "Tay1120@gmail.com",
		"github" : "Tay1120",
		"twitter" : "@Tavia1120",
		"location" : "Henrico, VA"
	},
	"welcomeMessage" : "I am an entry level Web Developer currently in training.",
	"skills" : ["HTML", "JavaScript","CSS (Cascading Style Sheets)","GitBash & GitHub","JQuery","JSON (JavaScript Object Notation)","String, Array & Loop Manipulation","Syntax","Developer Tools"
	],
	"bioPic":"images/Tay.jpg"
}
bio.display = function(){
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
    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
	$("#footerContacts").append(formattedMobile);
	var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
	$("#footerContacts").append(formattedEmail);
	var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
	$("#footerContacts").append(formattedGithub);
	var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
	$("#footerContacts").append(formattedTwitter);
	var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
	$("#footerContacts").append(formattedLocation);
}
bio.display();

var education = {
	"schools": [
 		{
 			"name": "Mary Baldwin College",
 			"location": "Staunton, VA",
 			"degree": "No Degree Obtained",
 			"majors": ["Computer Applications"," Scriptwriting"," Independent Studies"],
 			"dates": "2002-2003",
 			"url": "http://www.mbc.edu/"
 		},
 		{
 			"name": "Richmond Bartending Academy",
 			"location": "Richmond, VA",
 			"degree": "Bartending Certification",
 			"majors": ["Bartending"," Mixology"],
 			"dates": "2013",
 			"url": "http://richmondbartending.com/"
 		},
 	],
 	"onlineCourses": [
 		{
 			"title": "Front-End Web Developer Nanodegree",
 			"school": "Udacity",
 			"dates": "2014-2015",
 			"url": "https://www.udacity.com/course/nd001"
 		},
 		{
 			"title": "Intro to HTML and CSS",
 			"school": "Udacity",
 			"dates": "2014",
 			"url": "https://www.udacity.com/course/viewer#!/c-ud304-nd"
 		},
 		{
 			"title": "How to Use Git and GitHub",
 			"school": "Udacity",
 			"dates": "2014-2015",
 			"url": "https://www.udacity.com/course/viewer#!/c-ud775-nd"
 		},
 		{
 			"title": "JavaScript Basics",
 			"school": "Udacity",
 			"dates": "2015",
 			"url": "https://www.udacity.com/course/viewer#!/c-ud804-nd"
 		}
 	]
}
education.display = function(){
	for (school in education.schools) {
		// create new div for education
		$("#education").append(HTMLschoolStart);
		// school details
		var formattedSchoolName = HTMLschoolName.replace("%data%",education.schools[school].name);
		$(".education-entry:last").append(formattedSchoolName);
		var formattedDegree = HTMLschoolDegree.replace("%data%",education.schools[school].degree);
		$(".education-entry:last").append(formattedDegree);
		var formattedSchoolDates = HTMLschoolDates.replace("%data%",education.schools[school].dates);
		$(".education-entry:last").append(formattedSchoolDates);
		var formattedSchoolLocation = HTMLschoolLocation.replace("%data%",education.schools[school].location);
		$(".education-entry:last").append(formattedSchoolLocation);
		var formattedMajor = HTMLschoolMajor.replace("%data%",education.schools[school].majors);
		$(".education-entry:last").append(formattedMajor);
	}
	// begin online course section
	$(".education-entry:last").append(HTMLonlineClasses);
	for (course in education.onlineCourses) {
		// online class details
		var formattedOnlineTitle = HTMLonlineTitle.replace("%data%",education.onlineCourses[course].title);
		$(".education-entry:last").append(formattedOnlineTitle);
		var formattedOnlineSchool = HTMLonlineSchool.replace("%data%",education.onlineCourses[course].school);
		$(".education-entry:last").append(formattedOnlineSchool);
		var formattedOnlineDates = HTMLonlineDates.replace("%data%",education.onlineCourses[course].dates);
		$(".education-entry:last").append(formattedOnlineDates);
		var formattedOnlineURL = HTMLonlineURL.replace("%data%",education.onlineCourses[course].url);
		$(".education-entry:last").append(formattedOnlineURL);
	}
}
education.display();

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
		var formattedWorkLocation = HTMLworkLocation.replace("%data%",work.jobs[job].location);
		$(".work-entry:last").append(formattedWorkLocation);

		var formattedDescription = HTMLworkDescription.replace("%data%",work.jobs[job].description);
		$(".work-entry:last").append(formattedDescription);
	}
}
displayWork();

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

// create a map
	$("#mapDiv").append(googleMap);