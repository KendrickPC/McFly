
// biography section
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
    "welcomeMessage": "Just trying to go home.",
    "skills": [
        " skateboarding", " electric guitar", " sleep ", " saving the universe"
    ],
    "bioPic": "images/fry.jpg"
};


// bio variable
var name = bio.name;
var role = bio.role;
var bioPic = bio.bioPic;
var welcomeMessage = bio.welcomeMessage;

// special skills variable
var skills = bio.skills;

// top contacts variable
var mobile = bio.contacts.mobile;
var email = bio.contacts.email;
var github = bio.contacts.github;
var twitter = bio.contacts.twitter;
var _location = bio.contacts.location;




// bio variable
var formattedName = HTMLheaderName.replace("%data%", name);
var formattedRole = HTMLheaderRole.replace("%data%", role);
var formattedBioPic = HTMLbioPic.replace("%data%", bioPic);
var formattedWelcomeMessage = HTMLWelcomeMsg.replace("%data%", welcomeMessage);

// special skills variable
var formattedSkills = HTMLskills.replace("%data%", skills);

// top contacts variable
var formattedMobile = HTMLmobile.replace("%data%", mobile);
var formattedEmail = HTMLemail.replace("%data%", email);
var formattedGithub = HTMLgithub.replace("%data%", github);
var formattedTwitter = HTMLtwitter.replace("%data%", twitter);
var formattedLocation = HTMLlocation.replace("%data%", _location);




// bio variable
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#header").append(formattedBioPic);
$("#header").append(formattedWelcomeMessage);

// special skills variable
$("#header").append(HTMLskillsStart);
$("#skills").append(formattedSkills);

// top contacts variable
$("#topContacts").append(formattedMobile);
$("#topContacts").append(formattedEmail);
$("#topContacts").append(formattedGithub);
$("#topContacts").append(formattedTwitter);
$("#topContacts").append(formattedLocation);

// Fifty lines of code rewritten

bio.display = function () {
// rewrite code here
    var formattedFName = HTMLheaderFName.replace("%data%", bio["first name"].toUpperCase());
    var formattedLName = HTMLheaderLName.replace("%data%", bio["last name"].toUpperCase());
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role.toUpperCase());
    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts["mobile number"]);
    var formattedEmail = HTMLemail.replace("%data%", bio.contacts["email"]);
    var formattedGithub = HTMLgithub.replace("%data%", bio.contacts["github username"]);
    var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts["twitter handle"]);
    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts["location"]);
    var formattedBioPic = HTMLbioPic.replace("%data%", bio["bio pic"]);
    var formattedWelcomeMsg = HTMLWelcomeMsg.replace("%data%", bio["welcome message"]);

    
    $("#header").prepend(formattedRole);
    $("#header").prepend(formattedLName);
    $("#header").prepend(formattedFName);   
    $("#header").append(formattedWelcomeMsg);
    $("#topContacts ul").append(formattedMobile);
    $("#topContacts ul").append(formattedEmail);
    $("#topContacts ul").append(formattedGithub);
    $("#topContacts ul").append(formattedTwitter);  
    $("#topContacts ul").append(formattedLocation);

}



// education information
var education = {
    "schools": [
        {
            "name": "University of California Berkeley Extension",
            "location": "San Francisco, CA",
            "degree": "Certification",
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
    var expensiveUniversity, bestValueLearning;

    // iterate the schools
    for (expensiveUniversity in education.schools) {
        $("#education").append(HTMLschoolStart);

        var name1 = HTMLschoolName.replace("%data%", education.schools[expensiveUniversity].name);
        var nameFinal = name1.replace("#", education.schools[expensiveUniversity].url);
        var degree1 = HTMLschoolDegree.replace("%data%", education.schools[expensiveUniversity].degree);
        var dates1 = HTMLschoolDates.replace("%data%", education.schools[expensiveUniversity].dates);
        var location1 = HTMLschoolLocation.replace("%data%", education.schools[expensiveUniversity].location);

        $(".education-entry:last").append(nameFinal + degree1);
        $(".education-entry:last").append(dates1);

        var majors = education.schools[expensiveUniversity].major;
        for (ix in majors) {
            var major1 = HTMLschoolMajor.replace("%data%", majors[ix]);
            $(".education-entry:last").append(major1);
        }
        $(".education-entry:last").append(location1);
    }

    // begin online courses
    $("#education").append(HTMLonlineClasses);

    for (bestValueLearning in education.onlineCourses) {
        $("#education").append(HTMLschoolStart);

        var title1 = HTMLonlineTitle.replace("%data%", education.onlineCourses[bestValueLearning].title);
        var titleFinal = title1.replace("#", education.onlineCourses[bestValueLearning].url);
        var school1 = HTMLonlineSchool.replace("%data%", education.onlineCourses[bestValueLearning].school);
        var dates1 = HTMLonlineDates.replace("%data%", education.onlineCourses[bestValueLearning].dates);
        var url1 = HTMLonlineURL.replace("%data%", education.onlineCourses[bestValueLearning].url);
        var urlFinal = url1.replace("#", education.onlineCourses[bestValueLearning].url);

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
            "employer": "James' Company",
            "title": "Full Stack Web Developer",
            "location": "Taipei, Taiwan",
            "dates": "April 2014 - present",
            "description": "Keep calm and code."
        },
        {
            "employer": "Private Financial Consulting Firm",
            "title": "Junior Analyst",
            "location": "Menlo Park, CA",
            "dates": "June 2010 - April 2013",
            "description": "Keep calm, read, analyze, and summarize."
        },
        {
            "employer": "MSGR",
            "title": "Legal Researcher",
            "location": "Palo Alto, CA",
            "dates": "June 2008 - April 2010",
            "description": "Keep calm, read, analyze, and summarize."
        }
    ]
};

// appending work information
work.display = function() {
    var jediMaster;
    for (jediMaster in work.jobs) {
        $("#workExperience").append(HTMLworkStart);
        var employer1 = HTMLworkEmployer.replace("%data%", work.jobs[jediMaster].employer);
        var title1 = HTMLworkTitle.replace("%data%", work.jobs[jediMaster].title);
        var location1 = HTMLworkLocation.replace("%data%", work.jobs[jediMaster].location);
        var dates1 = HTMLworkDates.replace("%data%", work.jobs[jediMaster].dates);
        var description1 = HTMLworkDescription.replace("%data%", work.jobs[jediMaster].description);
        $(".work-entry:last").append(employer1 + title1);
        $(".work-entry:last").append(location1);
        $(".work-entry:last").append(dates1);
        $(".work-entry:last").append(description1);
    }
};

work.display();

var projects = {
    "project": [
        {
            "title": "Neighborhood Map",
            "dates": "February 2016 - present",
            "description": "Neighborhood map project"
        },
        {
            "title": "Arcade Game",
            "dates": "January 2016 - present",
            "description": "Arcade game project"
        },
        {
            "title": "FIFA Matches",
            "dates": "January 2016 - present",
            "description": "Analyzes FIFA Matches"
        },
        {
            "title": "Health Tracker",
            "dates": "March 2016 - present", 
            "description": "A Fitness Tracker"
        }
    ]
};

// appending projects information
projects.display = function () {
    var projectsForJordans;
    for (projectsForJordans in projects.project) {
        $("#projects").append(HTMLprojectStart);

        var title1 = HTMLprojectTitle.replace("%data%", projects.project[projectsForJordans].title);
        var dates1 = HTMLprojectDates.replace("%data%", projects.project[projectsForJordans].dates);
        var description1 = HTMLprojectDescription.replace("%data%", projects.project[projectsForJordans].description);
        $(".project-entry:last").append(title1);
        $(".project-entry:last").append(dates1);
        $(".project-entry:last").append(description1);

        // append project images
        for (Chicago in projects.project[projectsForJordans].images) {
            var image1 = HTMLprojectImage.replace("%data%", projects.project[projectsForJordans].images[Chicago]);
            $(".project-entry:last").append(image1);
        }

    }
};

projects.display();

