var page = 0;
var title = document.querySelector(".title");
var subtitle = document.querySelector(".subtitle");
var img = document.querySelector(".image");
var continueBtn = document.querySelector(".continue");
var skipBtn = document.querySelector('.skip');

const data = [
    {
        title: "Plant lover Community",
        subtitle: "Find gardening enthusiasts from<br>all over the world",
        buttonTxt: "Continue"
    },

    {
        title: "Get fast & safe delivery",
        subtitle: "Get good quality products for<br> your plants",
        buttonTxt: "Continue"
    },

    {
        title: "Buy & Sell Tools",
        subtitle: "Buy & sell good quality products<br>for your beautiful plants",
        buttonTxt: "Get started"
    },
]

function setScreenData() {
    document.querySelector(`.circle:nth-child(${page + 1})`).classList.add('selected'); //Find the first element that matches the css selector & add selected class
    img.classList.add(`illustration${page}`);
    title.innerHTML = data[page].title;
    subtitle.innerHTML = data[page].subtitle;
    continueBtn.innerHTML = data[page].buttonTxt;
    //skipBtn.innerHTML = 'SKIP';
    
    if (page ===2) {
        skipBtn.classList.add('hide') //Adding class hide
    } else {
        skipBtn.classList.remove('hide')//Removing class hide
    }
}


function nextScreen (pagenum) { 
    document.querySelector(`.circle:nth-child(${page + 1})`).classList.remove('selected');
    img.classList.remove(`illustration${page}`);

    page = !isNaN(pagenum) ? pagenum  : ( page === 2 ?  0  : page += 1 )
    
    setScreenData();
}

setScreenData();