const navMenu= document.getElementById('nav-menu'),
      navToggle= document.getElementById('nav-toggle'),
      navClose= document.getElementById('nav-close')

if(navToggle){
    navToggle.addEventListener('click',()=>{
        navMenu.classList.add('show-menu')
    })
}

if(navClose){
    navClose.addEventListener('click', ()=>{
        navMenu.classList.remove('show-menu')
    })
}

const navLink = document.querySelectorAll('.nav__link')
const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(e=> e.addEventListener('click', linkAction))

const blurHeader = () =>{
    const header = document.getElementById('header')

    this.scrollY >= 50 ? header.classList.add('blur-header')
                        : header.classList.remove('blur-header')
}
window.addEventListener('scroll', blurHeader)

const contactForm = document.getElementById('contact-form'),
    contactMessage= document.getElementById('contact-message')

const sendEmail = (e) =>{
    e.preventDefault()
    emailjs.sendForm('service_hunbebf','template_m1mk4mq', '#contact-form', 'HcPs1MeekaHisKKK2')
      .then(()=>{
        contactMessage.textContent = 'Message envoyé !'

        setTimeout(()=>{
            contactMessage.textContent=''
        },3000)

        contactForm.reset()
      }, () =>{
        contactMessage.textContent = 'Message non envoyé (service error)'
      })
}

contactForm.addEventListener('submit', sendEmail)

const scrollUp = () =>{
    const scrollUp = document.getElementById('scroll-up')
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                         :scrollUp.classList.remove('show-scroll')   
}

window.addEventListener('scroll', scrollUp)

const sections = document.querySelectorAll('section[id]')

const scrollActive = () =>{
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id'),
              sectionClass = document.querySelector('.nav__menu a[href*=' + sectionId+ ']')
   
        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            sectionClass.classList.add('active-link')
        }else{
            sectionClass.classList.remove('active-link')
        }
            })
}

window.addEventListener('scroll', scrollActive )

const txtAnim = document.querySelector('.home__education');         //Animation du texte

new Typewriter (txtAnim, {
    deleteSpeed: 30,
})
.changeDelay(30)
.typeString('Développeur Web Junior')
.pauseFor(1000)
.deleteChars(22)
.typeString('Dev <span style="color: #6666FF">HTML/CSS3</span>')
.pauseFor(1000)
.deleteChars(9)
.typeString('<span style="color: #6666FF">React</span>')
.pauseFor(1000)
.deleteChars(5)
.typeString('<span style="color: #6666FF">JavaScript</span>')
.pauseFor(1000)
.deleteChars(10)
.typeString('<span style="color: #6666FF">NodeJs</span>')
.pauseFor(1000)
.deleteChars(6)
.typeString('<span style="color: #6666FF">PHP</span>')
.start()