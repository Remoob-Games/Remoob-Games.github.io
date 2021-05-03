const [red, green, blue, alpha] = [52, 56, 62 , 1]
const section1 = document.querySelector('.main-title')
window.addEventListener('scroll', () => {
    var element = document.getElementById('main-title-id');
    var element2 = document.getElementById('subtitle-id');
    const y = 1 - (window.scrollY || window.pageYOffset) / 1800
    element2.style.opacity =1 - (window.scrollY || window.pageYOffset) / 1800
    const [r, g, b, a] = [red/y, green/y, blue/y,alpha/y].map(Math.round)
    if(y>=0){
        
        section1.style.color = `rgba(${r}, ${g}, ${b}, ${a})`
        if(1- (window.scrollY || window.pageYOffset)/100>0.05 ){
            element.style.opacity = 1- (window.scrollY || window.pageYOffset)/520;
             
        }

    }
    
    
    
})