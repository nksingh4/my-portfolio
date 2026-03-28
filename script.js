const resumeBtns = document.querySelectorAll('.resume-btn');

resumeBtns.forEach((btn, idx) =>{
    btn.addEventListener('click',() =>{
const resumeDetails = document.querySelectorAll('.resume-detail');
        resumeBtns.forEach(btn=> {
            btn.classList.remove('active');
        });
        btn.classList.add('active');

        resumeDetails.forEach(detail=> {
            detail.classList.remove('active');
        });
        resumeDetails[idx].classList.add('active');
    } );
});

/*
const section = document.querySelectorAll('.section');
const navLinks = document.querySelectorAll('.header nav a');

/*
window.onscroll = () => {
    section.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop;
        let height = sec. offsetHeight;
        let id = sec.getAttribte('id');

        if(TOP >= offset && top < offset + height){
            navLinks.forEach(link => {
                link.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });

        };

    });
};
*/

const navLinks = document.querySelectorAll('header nav a');
const sections = document.querySelectorAll('section');

navLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault(); // page jump ko roka

    // sabhi links se active class hatao
    navLinks.forEach(l => l.classList.remove('active'));
    this.classList.add('active');

    // sabhi sections ko hide karo
    sections.forEach(sec => sec.classList.remove('active'));

    // jis section par click kiya use show karo
    let target = this.getAttribute('href').substring(1);
    document.getElementById(target).classList.add('active');
  });
});


