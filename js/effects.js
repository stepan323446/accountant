const procent = 60;
const delayManyBlocks = 200;

let animationSections = document.querySelectorAll(".anim");
let animationBlocks = document.querySelectorAll(".anim-block__items");

window.addEventListener("scroll", function(e){
    for(let i = 0; i < animationSections.length; i++)
    {
        let rect = animationSections[i].getBoundingClientRect();

        // If outside the window
        if(rect.top > window.innerHeight || rect.top < 0 )
            continue;
        
        // If we already have animation's class
        if(animationSections[i].classList.contains("anim-active"))
            continue;
        
        let toSectProcent = rect.top * 100 / window.innerHeight;
        
        if(toSectProcent <= procent){
            animationSections[i].classList.add("anim-active");
        }
        
    }
});

for(let i = 0; i < animationBlocks.length; i++){
    let delayPlus = delayManyBlocks;

    for(let childIndex = 0; childIndex < animationBlocks[i].children.length; childIndex++)
    {
        let elem = animationBlocks[i].children[childIndex];
        elem.style.animationDelay = delayPlus + "ms";
        
        delayPlus += delayManyBlocks;
    }
}

// Parallax text
/* let textScroll = document.getElementById("text-scroll-item");

window.addEventListener("scroll", function(e){
    let rect = textScroll.getBoundingClientRect();

    let procentFromDocument = rect.top * 100 / window.innerHeight;
    if(procentFromDocument > 100 || procentFromDocument < 0)
        return;
    

    procentFromDocument = 100 - procentFromDocument;
    if(procentFromDocument > 85)
        return;

    let startText = 600;
    let endText = 4500;

    textScroll.style.transform = `translateX(-${(endText - startText) * procentFromDocument / 100}px)`

}); */