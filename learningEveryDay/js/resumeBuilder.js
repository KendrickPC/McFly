var bio = {
    "name" : "Marty McFly",
    "role": "Time Traveler",
    "contacts": {
        "mobile": "555-555-5555",
        "email": "McFly@netscape.com",
        "github": "McFly",
        "twitter": "@McFly",
        "location": "Hill Valley, California"
    },
    "welcomeMessage": "Just tryin' to go home.",
    "skills": [
        " skateboarding", " electric guitar", " sleep ", " saving the universe"
    ],
    "bioPic": "images/fry.jpg"
};

var name = bio.name;
var formattedName = HTMLheaderName.replace("%data%", name);

var role = bio.role;
var formattedRole = HTMLheaderRole.replace("%data%", role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

var mobile = bio.contacts.mobile;
var formattedMobile = HTMLmobile.replace("%data%", mobile);
$("#topContacts").append(formattedMobile);

var email = bio.contacts.email;
var formattedEmail = HTMLemail.replace("%data%", email);
$("#topContacts").append(formattedEmail);

var github = bio.contacts.github;
var formattedGithub = HTMLgithub.replace("%data%", github);
$("#topContacts").append(formattedGithub);

var twitter = bio.contacts.twitter;
var formattedTwitter = HTMLtwitter.replace("%data%", twitter);
$("#topContacts").append(formattedTwitter);

var _location = bio.contacts.location;
var formattedLocation = HTMLlocation.replace("%data%", _location);
$("#topContacts").append(formattedLocation);

var bioPic = bio.bioPic;
var formattedBioPic = HTMLbioPic.replace("%data%", bioPic);
$("#header").append(formattedBioPic);

var welcomeMessage = bio.welcomeMessage;
var formattedWelcomeMessage = HTMLWelcomeMsg.replace("%data%", welcomeMessage);
$("#header").append(formattedWelcomeMessage);

var skills = bio.skills;
var formattedSkills = HTMLskills.replace("%data%", skills);
$("#header").append(HTMLskillsStart);
$("#skills").append(formattedSkills);


// education information
var education = {
    "schools": [
        {
            "name": "University of California Berkeley Extension",
            "location": "San Francisco, CA",
            "degree": " ",
            "dates": "2007-2008",
            "major": ["Copyediting"],
            "url": "http://www.http://extension.berkeley.edu/"
        },
        {
            "name": "University of California Santa Barbara",
            "location": "Santa Barbara, California",
            "degree": "BA",
            "dates": "2004-2007",
            "major": ["Political Science"],
            "url": "http://www.ucsb.edu"
        }
    ],
    "onlineCourses": [
        {
            "title": "Front-End Web Developer Nanodegree",
            "school": "Udacity",
            "dates": "January 2016",
            "url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
        },
        {
            "title": "Senior Web Developer",
            "school": "Udacity",
            "dates": "August 1985",
            "url": "https://www.udacity.com/course/senior-web-developer-nanodegree--nd802"
        }
    ]
};



// appending education information
education.display = function () {
    var e1, o1;

    // iterate the schools
    for (e1 in education.schools) {
        $("#education").append(HTMLschoolStart);

        var name1 = HTMLschoolName.replace("%data%", education.schools[e1].name);
        var nameFinal = name1.replace("#", education.schools[e1].url);
        var degree1 = HTMLschoolDegree.replace("%data%", education.schools[e1].degree);
        var dates1 = HTMLschoolDates.replace("%data%", education.schools[e1].dates);
        var location1 = HTMLschoolLocation.replace("%data%", education.schools[e1].location);

        $(".education-entry:last").append(nameFinal + degree1);
        $(".education-entry:last").append(dates1);

        var majors = education.schools[e1].major;
        for (ix in majors) {
            var major1 = HTMLschoolMajor.replace("%data%", majors[ix]);
            $(".education-entry:last").append(major1);
        }
        $(".education-entry:last").append(location1);
    }

    // begin online courses
    $("#education").append(HTMLonlineClasses);

    for (o1 in education.onlineCourses) {
        $("#education").append(HTMLschoolStart);

        var title1 = HTMLonlineTitle.replace("%data%", education.onlineCourses[o1].title);
        var titleFinal = title1.replace("#", education.onlineCourses[o1].url);
        var school1 = HTMLonlineSchool.replace("%data%", education.onlineCourses[o1].school);
        var dates1 = HTMLonlineDates.replace("%data%", education.onlineCourses[o1].dates);
        var url1 = HTMLonlineURL.replace("%data%", education.onlineCourses[o1].url);
        var urlFinal = url1.replace("#", education.onlineCourses[o1].url);

        $(".education-entry:last").append(titleFinal + school1);
        $(".education-entry:last").append(dates1);
        $(".education-entry:last").append(urlFinal);
    }
};

education.display();

// work 

var work = {
    "jobs": [
        {
            "employer": "Freelance",
            "title": "Front-End Web Developer",
            "location": "Taipei, Taiwan",
            "dates": "April 2014 - present",
            "description": "Keep calm and code."
        },
        {
            "employer": "Private Financial Consulting Firm",
            "title": "Junior Analyst",
            "location": "Menlo Park, CA",
            "dates": "June 2010 - April 2013",
            "description": "Keep calm, read, and analyze."
        }
    ]
};

// appending work information
work.display = function() {
    var x1;
    for (x1 in work.jobs) {
        $("#workExperience").append(HTMLworkStart);
        var employer1 = HTMLworkEmployer.replace("%data%", work.jobs[x1].employer);
        var title1 = HTMLworkTitle.replace("%data%", work.jobs[x1].title);
        var location1 = HTMLworkLocation.replace("%data%", work.jobs[x1].location);
        var dates1 = HTMLworkDates.replace("%data%", work.jobs[x1].dates);
        var description1 = HTMLworkDescription.replace("%data%", work.jobs[x1].description);
        $(".work-entry:last").append(employer1 + title1);
        $(".work-entry:last").append(location1);
        $(".work-entry:last").append(dates1);
        $(".work-entry:last").append(description1);
    }
};

work.display();

