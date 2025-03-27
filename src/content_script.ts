// Function to set translate="no" attribute on code and pre elements
const setTranslateNoAttribute = () => {
	const elements = document.querySelectorAll("code, pre");
	elements.forEach((element) => {
		element.setAttribute("translate", "no");
	});
};

// Initial execution
setTranslateNoAttribute();

// Monitor DOM changes
const observer = new MutationObserver(() => {
	setTranslateNoAttribute();
});

// Start observation
observer.observe(document.body, {
	childList: true,
	subtree: true,
});
