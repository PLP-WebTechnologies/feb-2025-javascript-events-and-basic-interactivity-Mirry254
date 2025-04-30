// List of jobs
let jobs = [
    {
        title: "Web Developer",
        company: "Tech Corp",
        location: "New York",
        description: "Looking for a JavaScript developer"
    },
    {
        title: "UX Designer",
        company: "Design Studio",
        location: "Remote",
        description: "Create amazing user experiences"
    },
    {
        title: "Data Analyst",
        company: "Data Inc",
        location: "Chicago",
        description: "Work with big data"
    }
];

// Get elements from HTML
let searchInput = document.getElementById('searchInput');
let searchBtn = document.getElementById('searchBtn');
let jobsList = document.getElementById('jobsList');
let jobForm = document.getElementById('jobForm');

// Show all jobs on the page
function showJobs(jobs) {
    // Clear the jobs list first
    jobsList.innerHTML = '';
    
    // Add each job to the page
    for(let i = 0; i < jobs.length; i++) {
        let job = jobs[i];
        
        // Create a new div for the job
        let jobDiv = document.createElement('div');
        jobDiv.className = 'job-card';
        
        // Add job information
        jobDiv.innerHTML = `
            <h3>${job.title}</h3>
            <p>${job.company} - ${job.location}</p>
            <p>${job.description}</p>
        `;
        
        // Button click effect
        jobDiv.onclick = function() {
            this.style.backgroundColor = '#e8f5e9';
            setTimeout(() => {
                this.style.backgroundColor = '';
            }, 200);
        };

        // Hover effect
        jobDiv.onmouseenter = function() {
            this.style.transform = 'scale(1.02)';
        };
        
        jobDiv.onmouseleave = function() {
            this.style.transform = 'scale(1)';
        };

        // Double click secret effect
        jobDiv.ondblclick = function() {
            this.style.border = '2px solid gold';
            setTimeout(() => {
                this.style.border = 'none';
            }, 500);
        };
        
        // Add the job to the page
        jobsList.appendChild(jobDiv);
    }
}

// Search for jobs (with keypress detection)
searchInput.onkeypress = function(event) {
    // If Enter key is pressed
    if(event.key === 'Enter') {
        searchBtn.click();
    }
};

// Search button click
searchBtn.onclick = function() {
    let searchText = searchInput.value.toLowerCase();
    let foundJobs = [];
    
    // Look through all jobs
    for(let i = 0; i < jobs.length; i++) {
        let job = jobs[i];
        if(job.title.toLowerCase().includes(searchText) || 
           job.company.toLowerCase().includes(searchText) || 
           job.description.toLowerCase().includes(searchText)) {
            foundJobs.push(job);
        }
    }
    
    // Show the jobs we found
    showJobs(foundJobs);

    // Button click effect
    this.style.backgroundColor = '#45a049';
    setTimeout(() => {
        this.style.backgroundColor = '';
    }, 200);
};

// Handle form submission
jobForm.onsubmit = function(event) {
    event.preventDefault();
    
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;
    
    // Check if all fields are filled
    if(name && email && message) {
        alert('Thanks for applying!');
        jobForm.reset();
    }
};

// Show all jobs when the page loads
showJobs(jobs);
