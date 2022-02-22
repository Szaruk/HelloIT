//Animation Loader
const logoLoader = document.querySelector("#logo-loader");
const logoImage = document.querySelector("#logo-img");
const logoText = document.querySelector(".logo-text");
const container = document.querySelector("#container-loader");
const categoryMain = document.querySelector(".category-container");
const post = document.querySelector("#post-main");
const body = document.querySelector("body");
body.scrollIntoView();

const animationLoader = anime.timeline({
  autoplay: true,
});
if (window.innerWidth > 600) {
  animationLoader
    .add({
      targets: logoLoader,
      translateY: ["-500", "0"],
      opacity: [0, 1],
      duration: 800,
      easing: "easeOutBounce",
    })
    .add({
      delay: 100,
      targets: logoImage,
      rotate: {
        value: 360,
        duration: 1000,
        easing: "easeInSine",
      },
      scale: [1, 3],
    })
    .add({
      targets: logoImage,
      translateX: -50,
      duration: 500,
      delay: 100,
    })
    .add({
      targets: logoText,
      translateX: ["-100", "40"],
      opacity: [0, 1],
      scale: [1, 2],
      easing: "easeInSine",
      duration: 300,
    })
    .add({
      targets: container,
      translateY: ["0", "-100%"],
      delay: 500,
      duration: 1000,
      easing: "easeInSine",
      update(anim) {
        let final = Math.round(anim.progress);
        if (final === 86) {
          MainAnimation();
        }
      },
    });
} else {
  animationLoader
    .add({
      targets: logoLoader,
      translateY: ["-500", "0"],
      opacity: [0, 1],
      duration: 800,
      easing: "easeOutBounce",
    })
    .add({
      delay: 100,
      targets: logoImage,
      rotate: {
        value: 360,
        duration: 1000,
        easing: "easeInSine",
      },
      scale: [1, 3],
    })
    .add({
      targets: logoImage,
      translateX: -20,
      duration: 500,
      delay: 100,
    })
    .add({
      targets: logoText,
      translateX: ["-100", "15"],
      opacity: [0, 1],
      scale: [1, 2],
      easing: "easeInSine",
      duration: 300,
    })
    .add({
      targets: container,
      translateY: ["0", "-100%"],
      delay: 500,
      duration: 1000,
      easing: "easeInSine",
      update(anim) {
        let final = Math.round(anim.progress);
        if (final === 86) {
          MainAnimation();
        }
      },
    });
}

//Animation Elements
const MainAnimation = () => {
  const animationElements = anime.timeline({
    autoplay: true,
  });

  animationElements.add({
    targets: categoryMain,
    translateX: ["-100", "0"],
    opacity: [0, 1],
    duration: 1000,
    easing: "easeOutQuad",
    update(anim) {
      let finalMain = Math.round(anim.progress);
      if (finalMain === 32) {
        anime({
          targets: post,
          translateY: ["20", "0"],
          opacity: [0, 1],
          duration: 800,
          easing: "easeInSine",
        });
      }
    },
  });
};

//Animation Hamburger
const hamburger = document.querySelector("#hamburger");
const hamburgerExit = document.querySelector("#hamburger-exit");
const hamburgerNav = document.querySelector("#hamburger-nav");
const hamburgerMenu = document.querySelector("#hamburger-menu");

hamburger.addEventListener("click", () => {
  hamburgerExit.classList.remove("exitHide");
  hamburger.classList.remove("hamburger-show");
  hamburger.classList.add("hamburger-hide");
  hamburgerExit.classList.add("exitShow");
  hamburgerMenu.classList.add("showHamburgerMenu");
  hamburgerMenu.classList.remove("hideHamburgerMenu");
});

hamburgerExit.addEventListener("click", () => {
  hamburgerMenu.classList.remove("showHamburgerMenu");
  hamburgerMenu.classList.add("hideHamburgerMenu");
  hamburgerExit.classList.remove("exitShow");
  hamburgerExit.classList.add("exitHide");
  hamburger.classList.remove("hamburger-hide");
  hamburger.classList.add("hamburger-show");
});

//Animation Category
if (window.innerWidth < 888) {
  const categorySlider = document.querySelector(".category-main");
  const innerCategorySlider = document.querySelector(".category-container");
  let pressed = false;
  let startx;
  let x;

  categorySlider.addEventListener("mousedown", (e) => {
    pressed = true;
    startx = e.offsetX - innerCategorySlider.offsetLeft;
    categorySlider.style.cursor = "grabbing";
  });

  categorySlider.addEventListener("mouseenter", () => {
    categorySlider.style.cursor = "grab";
  });

  categorySlider.addEventListener("mouseup", () => {
    categorySlider.style.cursor = "grab";
  });

  window.addEventListener("mouseup", () => {
    pressed = false;
  });

  categorySlider.addEventListener("mousemove", (e) => {
    if (!pressed) return;
    e.preventDefault();

    x = e.offsetX;

    innerCategorySlider.style.left = `${x - startx}px`;
    checkboundary();
  });

  function checkboundary() {
    let outer = categorySlider.getBoundingClientRect();
    let inner = innerCategorySlider.getBoundingClientRect();
    if (parseInt(innerCategorySlider.style.left) > 0) {
      innerCategorySlider.style.left = "0px";
    } else if (inner.right < outer.right) {
      innerCategorySlider.style.left = `-${inner.width - outer.width}px`;
    }
  }
}
//Scroll Up
const scrollUp = document.querySelector(".scrollUp");

window.addEventListener("scroll", () => {
  if (window.scrollY >= 400) {
    scrollUp.style.display = "block";
    scrollUp.addEventListener("click", () => {
      body.scrollIntoView();
    });
  } else {
    scrollUp.style.display = "none";
  }
});
