let header = document.getElementById("header");

window.addEventListener("scroll", function (e) {
    headerScroll();
});
function headerScroll() {
    if (window.scrollY > 0) {
        header.classList.add("scrolled")
    }
    else {
        header.classList.remove("scrolled");
    }
}

let whySwiper = Swiper;
let init = false;

function SwiperMode() {
    let mobile = window.matchMedia('(min-width: 0px) and (max-width: 1024px)');
    let desktop = window.matchMedia('(min-width: 1025px)');

    // Disable for screen 0px-1024px
    if (desktop.matches) {
        if (!init) {
            whySwiper = new Swiper('.why-swiper', {
                navigation: {
                    nextEl: "#why-swiper-right",
                    prevEl: "#why-swiper-left"
                },
                slidesPerView: 4,

                slidesPerGroup: 1,

                spaceBetween: 45,

                breakpoints:
                {
                    1500:
                    {
                        slidesPerView: 3,
                    },
                    1000:
                    {
                        slidesPerView: 2,
                    }
                },

                loop: true,
            });

            init = true;
        }

    }
    try {
        if (mobile.matches) {
            console.log("Working")
            whySwiper.destroy();
            init = false;
        }
    }
    catch { }

}


let teamSwiper = Swiper;
let isDesktop = true;
teamSwiper = new Swiper('.team-swiper', {
    navigation: {
        nextEl: "#team-swiper-right",
        prevEl: "#team-swiper-left"
    },
    slidesPerView: 4,

    pagination:
    {
        el: ".team-pagination",
    },
    slidesPerGroup: 1,

    spaceBetween: 50,

    loop: true,

    breakpoints:
    {
        1500:
        {
            slidesPerView: 3,
        },
        1150:
        {
            slidesPerView: 2,
        }
    }
});

function SwiperTeamMode() {
    let mobile = window.matchMedia('(min-width: 0px) and (max-width: 600px)');
    let desktop = window.matchMedia('(min-width: 601px)');

    if (desktop.matches) {
        if (isDesktop == false) {
            teamSwiper.destroy();
            teamSwiper = new Swiper('.team-swiper', {
                navigation: {
                    nextEl: "#team-swiper-right",
                    prevEl: "#team-swiper-left"
                },
                slidesPerView: 4,

                pagination:
                {
                    el: ".team-pagination",
                },
                slidesPerGroup: 1,

                spaceBetween: 50,

                loop: true,

                breakpoints:
                {
                    1500:
                    {
                        slidesPerView: 3,
                    },
                    1150:
                    {
                        slidesPerView: 2,
                    }
                }
            });
            isDesktop = true;

        }
    }
    if (mobile.matches) {
        if (isDesktop == true) {
            teamSwiper.destroy();
            teamSwiper = new Swiper('.team-swiper', {
                navigation: {
                    nextEl: "#team-swiper-right",
                    prevEl: "#team-swiper-left"
                },
                slidesPerView: 1,
                slidesPerColumn: 2,
                slidesPerGroup: 1,

                pagination:
                {
                    el: ".team-pagination",
                },
            });
            isDesktop = false;
        }
    }
}

/* new Swiper('.team-swiper', {
    navigation: {
        nextEl: "#team-swiper-right",
        prevEl: "#team-swiper-left"
    },
    slidesPerView: 4,

    pagination:
    {
        el: ".team-pagination",
    },
    slidesPerGroup: 1,

    spaceBetween: 50,

    loop: true,

    breakpoints:
    {
        1500:
        {
            slidesPerView: 4,
        },
        1150:
        {
            slidesPerView: 3,
        },
        600:
        {
            slidesPerView: 2
        },
        0:
        {
            slidesPerView: 1
        }
    }
});
 */
window.addEventListener('load', function () {
    SwiperMode();
    SwiperTeamMode();
});

/* On Resize
**************************************************************/
window.addEventListener('resize', function () {
    SwiperMode();
    SwiperTeamMode();
});



new Swiper('.company-swiper', {
    navigation: {
        nextEl: "#company-swiper-right",
        prevEl: "#company-swiper-left"
    },
    pagination:
    {
        el: ".trust-pagination",
    },

    slidesPerView: 5.5,

    slidesPerGroup: 1,

    spaceBetween: 50,

    breakpoints:
    {
        // Ширина viewport

        // Нельзя менять свойства, которые меняют весь swiper (положение горизонтальное или верт. )
        1500:
        {
            slidesPerView: 3,
        },
        1000:
        {
            slidesPerView: 2,
        }
    },

    loop: true,
});

// Compare list
let compareItems = document.querySelectorAll(".compare-items .item");

for (let i = 0; i < compareItems.length; i++) {

    compareItems[i].addEventListener("click", function (e) {

        for (let o = 0; o < compareItems.length; o++) {
            compareItems[o].classList.remove("active");
        }
        e.currentTarget.classList.add("active");

    });
}


/* Toggle content with button 'Показать ещё' */

let whyMeSect = document.getElementById("why-me-section");
let whyMeMore = document.getElementById("why-show");

let whatDoSect = document.getElementById("what-can-do");
let whatDoMore = document.getElementById("what-do-show");

function ShowMore(section, button) {
    button.addEventListener("click", function (e) {
        section.classList.toggle("active");

        if (section.classList.contains("active"))
            button.textContent = "Скрыть"
        else
            button.textContent = "Показать ещё"
    });
}
ShowMore(whyMeSect, whyMeMore);
ShowMore(whatDoSect, whatDoMore);


/* Sub Menu in burger menu */
let subMenus = document.getElementsByClassName("burger-submenu");
for (let i = 0; i < subMenus.length; i++) {
    subMenus[i].addEventListener("click", function (e) {
        e.currentTarget.classList.toggle("active");
    });
}

let burgerBtn = document.querySelector(".burger-menu");
let burgerBlock = document.querySelector(".burger-menu__block");
burgerBtn.addEventListener("click", function (e) {
    burgerBtn.classList.toggle("active");
    burgerBlock.classList.toggle("active");
    document.body.classList.toggle("lock");
})