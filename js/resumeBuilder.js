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
	"bioPic":"images/fry.jpg"
}

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
			"dates": "August 2011-Present",
			"description": "Fraud Claims Intake, Dispute Claims Intake, Secured Messaging Bank Claims, Payment Investigations, Payment Research, Payment Refunds, Credit Bureau Disputes, Account Research, Adjustments on Credit Card Accounts, Credit Bureau Disputes, Writting and Sending Customer Letters, Training"
		},
		{
			"employer": "Convergys",
			"title": "Customer Service and Resolutions Representative",
			"dates": "October 2010-August 2011",
			"description": "Customer Service, Manage incoming and outgoing calls, Resolve technical issues with mobile phones, Manage Customer Accounts, Add/Change account features, Equipment and Service Sales"
		}
	]
}

var project = {
	"projects": [
		{
			"title": "P1 Mockup To Website",
			"dates": "2014",
			"description": "You will be provided with a design mockup as a PDF-file and must replicate that design in HTML and CSS. You will develop a responsive website that will display images, descriptions and links to each of the portfolio projects you will complete throughout the course of the Front-End Web Developer Nanodegree.",
			"images": [
			"images/TestMockup.png","images/P1Mockup.png"
			]
		}
	]
}

var name = "Tay Clarke"
var formattedName = HTMLheaderName.replace(
	"%data%", name);
var role = "Web Developer"
var formattedRole = HTMLheaderRole.replace(
	"%data%", role);
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);