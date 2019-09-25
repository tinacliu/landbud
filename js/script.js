
// scroll menu item to anchor on click

let menu = document.querySelectorAll(".navbar-nav li a");

menu.forEach((menuItem)=>{
  if(menuItem){menuItem.addEventListener('click', (event) => {
    const chosenItem = event.currentTarget.innerText;
    // console.log(chosenItem);

    let chosenSection = document.querySelector('#about');

    switch(chosenItem){
      case 'About':
        chosenSection = document.querySelector('#about');
        break;
        console.log("about section");
      case 'How it works':
        chosenSection = document.querySelector('#howitworks');
        break;
    }


    chosenSection.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  })};
});

