(function() {
  const listElements = document.querySelectorAll(".menu__item--show");
  const list = document.querySelector(".menu__links");
  const menu = document.querySelector(".menu__hamburguer");
  
  const addClick = () => {
    listElements.forEach(element => {
		element.addEventListener("click", () => {
				let submenu = element.children[1];
				let height = 0;
				element.classList.toggle("menu__item--active");

				if(submenu.clientHeight === 0) {
					height = submenu.scrollHeight;
				}
				submenu.style.height = `${height}px`;
			});
		});
	}

	const deleteStyleHeight = () => {
		listElements.forEach(element => {
			if(element.children[1].getAttribute("style")) {
				element.children[1].removeAttribute("style");
				element.classList.remove("menu__item--active");
			}
		});
	}

	window.addEventListener("resize", () => {
		if(window.innerWidth > 800) {
			deleteStyleHeight();
			if(list.classList.contains("menu__links--show")) {
				list.classList.remove("menu__links--show");
			}
		}
		else {
			addClick();
		}
	});

	if(window.innerWidth <= 800) {
		addClick();
	}

	menu.addEventListener("click", () => list.classList.toggle("menu__links--show"));
})();

/* ----------------- */

let tabs = document.querySelectorAll(".tabs h3");
let tabsContents = document.querySelectorAll(".tab-content div");

tabs.forEach((tab, index) => {
  tab.addEventListener("click", () => {
    tabsContents.forEach((content) => {
      content.classList.remove("active");
    });
    tabs.forEach((tab) => {
      tab.classList.remove("active");
    });
    tabsContents[index].classList.add("active");
    tabs[index].classList.add("active");
  });
});