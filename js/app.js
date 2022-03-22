//Animation Loader
const logoLoader = document.querySelector("#logo-loader");
const logoImage = document.querySelector("#logo-img");
const logoText = document.querySelector(".logo-text");
const container = document.querySelector("#container-loader");
const categoryMain = document.querySelector(".category-container");
const post = document.querySelector("#post-main");
const body = document.querySelector("body");

const AnimationMain = () => {
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
};
const AnimationHamburger = () => {
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
};

const CategorySlider = () => {
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
};
//Scroll Up
const scrollUp = document.querySelector(".scrollUp");

window.addEventListener("scroll", () => {
  if (window.scrollY >= 400 && location.pathname != "/projects.html") {
    scrollUp.style.display = "block";
    scrollUp.addEventListener("click", () => {
      body.scrollIntoView();
    });
  } else {
    scrollUp.style.display = "none";
  }
});

//Post-details
const PostDetailsAnimation = () => {
  const postDetail = document.querySelector("#postDetail");
  const PostMore = () => {
    const postDetailsMore = document.querySelector("#postDetailsMore");
    const postMoreAnimation = anime.timeline({
      autoplay: true,
    });
    postMoreAnimation.add({
      targets: postDetailsMore,
      translateY: ["-100", "0"],
      opacity: [0, 1],
      duration: 900,
      easing: "easeOutSine",
    });
  };
  const postDetails = anime.timeline({
    autoplay: true,
  });
  postDetails.add({
    targets: postDetail,
    translateX: ["-100", "0"],
    opacity: [0, 1],
    duration: 600,
    easing: "easeOutSine",
    update(anim) {
      console.log(Math.round(anim.progress));
      if (Math.round(anim.progress) === 61) {
        PostMore();
      }
    },
  });
};

//Animation statute
const statuteTitlesAnimation = () => {
  const statuteTitles = document.querySelectorAll(".statute-title");
  const titleAnimation = anime.timeline({
    autoplay: true,
  });
  titleAnimation.add({
    targets: statuteTitles,
    translateX: ["-100", "0"],
    opacity: [0, 1],
    duration: 700,
    easing: "easeOutSine",
    update(anim) {
      if (Math.round(anim.progress) === 50) {
        const statutePoint = document.querySelectorAll(".statute-point ul li");
        anime({
          targets: statutePoint,
          translateX: ["-100", "0"],
          opacity: [0, 1],
          duration: 2000,
          delay: anime.stagger(100),
        });
      }
    },
  });
};

//Our projects scroll
const scrollProject = () => {
  const projectsBox = document.querySelectorAll(".our-projects");
  const innerProjects = document.querySelectorAll(".inner-project");
  const projectButton = innerProjects[0].children;
  const projectButton2 = innerProjects[1].children;
  let firstProject = projectsBox[0].firstElementChild;
  let lastProject = projectsBox[0].lastElementChild;
  let firstProject2 = projectsBox[1].firstElementChild;
  let lastProject2 = projectsBox[1].lastElementChild;
  const imgWidth = firstProject.getBoundingClientRect().width;
  const firstProjectLeft = firstProject.getBoundingClientRect().left;
  //OUR PROJECTS
  //Button right our projects
  projectButton[0].addEventListener("click", () => {
    projectsBox[0].scrollLeft += imgWidth;
    projectsBox[0].addEventListener("scroll", () => {
      /*
      console.log(lastProject.getBoundingClientRect().left);
      console.log(projectButton[0].getBoundingClientRect().right);
      */
      if (firstProject.getBoundingClientRect().left < firstProjectLeft) {
        projectButton[1].classList.replace("d-none", "d-flex");
      }
      if (
        lastProject.getBoundingClientRect().right <
        projectsBox[0].getBoundingClientRect().right
      ) {
        projectButton[0].classList.replace("d-flex", "d-none");
      }
    });
  });
  projectButton[1].addEventListener("click", () => {
    projectsBox[0].scrollLeft -= imgWidth;
    projectsBox[0].addEventListener("scroll", () => {
      if (lastProject.getBoundingClientRect().right > 0) {
        projectButton[0].classList.replace("d-none", "d-flex");
      }
      if (firstProject.getBoundingClientRect().left === firstProjectLeft) {
        projectButton[1].classList.replace("d-flex", "d-none");
      }
    });
  });

  projectButton2[0].addEventListener("click", () => {
    projectsBox[1].scrollLeft += imgWidth;
    projectsBox[1].addEventListener("scroll", () => {
      if (firstProject2.getBoundingClientRect().left < firstProjectLeft) {
        projectButton2[1].classList.replace("d-none", "d-flex");
      }
      if (
        lastProject2.getBoundingClientRect().right <
        projectsBox[1].getBoundingClientRect().right
      ) {
        projectButton2[0].classList.replace("d-flex", "d-none");
      }
    });
  });
  projectButton2[1].addEventListener("click", () => {
    projectsBox[1].scrollLeft -= imgWidth;
    projectsBox[1].addEventListener("scroll", () => {
      if (
        lastProject2.getBoundingClientRect().right >
        projectsBox[1].getBoundingClientRect().right
      ) {
        projectButton2[0].classList.replace("d-none", "d-flex");
      }
      if (firstProject2.getBoundingClientRect().left > 0) {
        projectButton2[1].classList.replace("d-flex", "d-none");
      }
    });
  });
};

//About Us side
const innerGroup = document.querySelectorAll(".inner-group");
const personImg = document.querySelector(".member img");

//About Us slider
innerGroup.forEach((currentGroup) => {
  //Button Box
  const parent = currentGroup.parentElement;
  //Team's Photos Box
  const outerGroup = parent.lastElementChild.firstElementChild;
  if (outerGroup.getBoundingClientRect().width < window.innerWidth) {
    currentGroup.classList.remove("d-md-flex");
  }
  currentGroup.addEventListener("click", () => {
    if (currentGroup === parent.children[0]) {
      //Swip right images
      parent.lastElementChild.scrollLeft += personImg.clientWidth;
      parent.lastElementChild.addEventListener("scroll", () => {
        //Show left button
        parent.children[1].firstElementChild.classList.replace(
          "d-none",
          "d-flex"
        );
        if (
          currentGroup.getBoundingClientRect().right >
          outerGroup.lastElementChild.getBoundingClientRect().right
        ) {
          //Hide right button
          parent.children[0].firstElementChild.classList.add("d-none");
        }
      });
    } else {
      //Swipe left images
      parent.lastElementChild.scrollLeft -= personImg.clientWidth;
      parent.lastElementChild.addEventListener("scroll", () => {
        //Show right button
        parent.children[0].firstElementChild.classList.replace(
          "d-none",
          "d-flex"
        );
        if (outerGroup.firstElementChild.getBoundingClientRect().left > 0) {
          //Hide left button
          parent.children[1].firstElementChild.classList.replace(
            "d-flex",
            "d-none"
          );
        }
      });
    }
  });
});

//Main animation for current pathname
if (location.pathname === "/index.html" || location.pathname === "/") {
  body.scrollIntoView();
  AnimationMain();
  CategorySlider();
} else if (location.pathname === "/post_detail.html") {
  PostDetailsAnimation();
} else if (location.pathname === "/statute.html") {
  statuteTitlesAnimation();
} else if (location.pathname === "/projects.html") {
  scrollProject();
}
//Mobile animation navbar
AnimationHamburger();
