function home_section_call(){
    document.getElementById('header_section_id').scrollIntoView({
        behavior: 'smooth' 
    });
}

function education_section_call(){
    document.getElementById('education_section_id').scrollIntoView({
        behavior: 'smooth' 
    });
}

function skills_section_call(){
    document.getElementById('skills_section_id').scrollIntoView({
        behavior: 'smooth' 
    });
}

function project_section_call(){
    document.getElementById('project_section_id').scrollIntoView({
        behavior: 'smooth' 
    });
}

function service_section_call(){
    document.getElementById('service_section_id').scrollIntoView({
        behavior: 'smooth' 
    });
}

function contact_us_section_call(){
    document.getElementById('contact_us_section_id').scrollIntoView({
        behavior: 'smooth' 
    });
}

document.querySelector('.menu-toggle').addEventListener('click', function() {
    document.querySelector('.nav-links').classList.toggle('active');
    document.querySelector('.menu-toggle').style.display = 'none';
    document.querySelector('.close-btn').style.display = 'block';
});

document.querySelector('.close-btn').addEventListener('click', function() {
    document.querySelector('.nav-links').classList.remove('active');
    document.querySelector('.close-btn').style.display = 'none';
    document.querySelector('.menu-toggle').style.display = 'block';
});


function closeAlert() {
    document.getElementById('alertContainer').style.display = 'none';
}