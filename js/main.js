const dropDown          = Array.from(document.querySelectorAll('.dropdown'));
const dropbtn           = Array.from(document.querySelectorAll('.dropbtn'));
// loop throught Navigation Buttons
dropbtn.forEach((element) => {
    // add ClickEventListener on every button
    element.addEventListener('click', () => {
        // Loop through every dropdown[container] element
        for(let i = 0; i < dropDown.length; i++){
            // Select All Button Except The Clicked one
            if(element.parentElement != dropDown[i]){
                // Make Sure That only the clicked dropdown is active and the rest Is NOT
                if(dropDown[i].classList.contains('dropdown--active')){dropDown[i].classList.remove('dropdown--active');}
            }
        }
        // Add Active Class On Clicked Element
        element.parentElement.classList.toggle('dropdown--active');
    });
});
document.addEventListener('click', (event) => {
    if(!event.target.matches('.dropbtn')){
        dropDown.forEach((element) => {
            element.classList.remove('dropdown--active');
        });
    }
});
// Show Mobile Menu
let menuIcon = document.querySelector('.menu-icon');
menuIcon.addEventListener('click', (event) => {
    menuIcon.classList.toggle('menu-icon--open');
    document.querySelector('.nav').classList.toggle('nav--active');
});