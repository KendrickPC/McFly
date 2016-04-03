
// biography section
var bio = {
    "name" : "Marty McFly",
    "role": "Time Traveler",
    "contacts": {
        "mobile": "555-555-5555",
        "email": "McFly@netscape.com",
        "github": "McFly",
        "twitter": "@McFly",
        "location": "Hollywood, California"
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


// jediMasterTrainer training specialties

var work = {
    "jobs": [
        {
            "employer": "One of James' Random Company",
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
    var jediMasterTrainer;
    for (jediMasterTrainer in work.jobs) {
        $("#workExperience").append(HTMLworkStart);
        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[jediMasterTrainer].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[jediMasterTrainer].title);
        var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[jediMasterTrainer].location);
        var formattedDates = HTMLworkDates.replace("%data%", work.jobs[jediMasterTrainer].dates);
        var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[jediMasterTrainer].description);
        $(".work-entry:last").append(formattedEmployer + formattedTitle);
        $(".work-entry:last").append(formattedLocation);
        $(".work-entry:last").append(formattedDates);
        $(".work-entry:last").append(formattedDescription);
    }
};

// displays work information
work.display();




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

        var formattedName = HTMLschoolName.replace("%data%", education.schools[expensiveUniversity].name);
        var finalName = formattedName.replace("#", education.schools[expensiveUniversity].url);
        var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[expensiveUniversity].degree);
        var formattedDates = HTMLschoolDates.replace("%data%", education.schools[expensiveUniversity].dates);
        var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[expensiveUniversity].location);
        var majors = education.schools[expensiveUniversity].major;
        
        $(".education-entry:last").append(finalName + formattedDegree);
        $(".education-entry:last").append(formattedDates);
        $(".education-entry:last").append(formattedLocation);

        for (concentration in majors) {
            var formattedMajor = HTMLschoolMajor.replace("%data%", majors[concentration]);
            $(".education-entry:last").append(formattedMajor);
        }
    }

    // begin online courses
    $("#education").append(HTMLonlineClasses);

    for (bestValueLearning in education.onlineCourses) {
        $("#education").append(HTMLschoolStart);

        var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[bestValueLearning].title);
        var finalTitle = formattedTitle.replace("#", education.onlineCourses[bestValueLearning].url);
        var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[bestValueLearning].school);
        var formattedDates = HTMLonlineDates.replace("%data%", education.onlineCourses[bestValueLearning].dates);
        var formattedUrl = HTMLonlineURL.replace("%data%", education.onlineCourses[bestValueLearning].url);
        var finalURL = formattedUrl.replace("#", education.onlineCourses[bestValueLearning].url);

        $(".education-entry:last").append(finalTitle + formattedSchool);
        $(".education-entry:last").append(formattedDates);
        $(".education-entry:last").append(finalURL);
    }
};

education.display();






// projects section

var projects = {
    "project": [
        {
            "title": "Neighborhood Map",
            "dates": "February 2016 - present",
            "description": "Neighborhood map project",
            "images": ["images/ACC-Alvin.jpg"]
        },
        {
            "title": "Arcade Game",
            "dates": "January 2016 - present",
            "description": "Arcade game project",
            // "images": ["images/ACC-Alvin.jpg"]
        },
        {
            "title": "FIFA Matches",
            "dates": "January 2016 - present",
            "description": "Analyzes FIFA Matches",
            "images": ["images/ACC-Alvin.jpg"]
        },
        {
            "title": "Health Tracker",
            "dates": "March 2016 - present", 
            "description": "A Fitness Tracker",
            "images": ["images/ACC-Alvin.jpg"]
        }
    ]
};



// // encapsulation of projects object
// $("#projects").append(HTMLprojectStart);
// var test = "Test!";
// $(".project-entry:last").append(test);
// console.log(test);



// appending projects information
projects.display = function () {
// creating projects variable called projectsForSneakers
    var projectsForSneakers;
// for in loop for projectsForSneakers iterating through projects.project
    for (projectsForSneakers in projects.project) {
// replace data with projects object and store the variable in formattedAbc
        var formattedTitle = HTMLprojectTitle.replace("%data%", projects.project[projectsForSneakers].title);
        var formattedDates = HTMLprojectDates.replace("%data%", projects.project[projectsForSneakers].dates);
        var formattedDescription = HTMLprojectDescription.replace("%data%", projects.project[projectsForSneakers].description);        
// take the HTML DIV id name and append it to helper.js variable name for the div class
        $("#projects").append(HTMLprojectStart);
        $(".project-entry:last").append(formattedTitle);
        $(".project-entry:last").append(formattedDates);
        $(".project-entry:last").append(formattedDescription);
        // append project images
        for (Chicago in projects.project[projectsForSneakers].images) {
            var image1 = HTMLprojectImage.replace("%data%", projects.project[projectsForSneakers].images[Chicago]);
            $(".project-entry:last").append(image1);
        }
    }
};

// encapsulation: Holding the display function inside the property's object. 
projects.display();





// internationalize name buttion/function located at the bottom of the page. 

function inName (name)  {
    name = name.trim().split(" ");
    console.log(name);
    name[1] = name[1].toUpperCase();
    name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();

    return name[0] +" "+name[1];
}

$('#main').append(internationalizeButton);



// Add mapdiv JS function

$("#mapDiv").append(googleMap);






