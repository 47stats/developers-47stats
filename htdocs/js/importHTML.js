async function importHTML(url, elm) {
	if (elm && (typeof elm === 'string' || elm instanceof String)) {
		elm = document.getElementById(elm);
	}
	fetch(url)
		.then(response => response.text())
		.then(text => {
			innerHTML(elm, text);
		});

	function innerHTML(elm, html) {
		elm.innerHTML = html;
		const nodeList = elm.querySelectorAll("script");
		if (nodeList) {
			Array.from(nodeList).forEach(oldScript => {
				const newScript = document.createElement("script");
				Array.from(oldScript.attributes)
					.forEach(attr => newScript.setAttribute(attr.name, attr.value));
				newScript.appendChild(document.createTextNode(oldScript.innerHTML));
				oldScript.parentNode.replaceChild(newScript, oldScript);
			});
		}
	}
}
