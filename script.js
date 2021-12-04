var cities = ["Одесса", "Киев", "Житомир", "Лондон", "Нью-Йорк", "Львов", "Черновцы", "Берлин", "Москва"];

function getOccurrenceOfArrayByString(strings, currentString) {
	let arrayOfOccurences = [];
	if (currentString === "") {
		return arrayOfOccurences;
	}
	let upperCaseCurrentString = currentString.toUpperCase();
	for (let string of strings) {
		let upperCaseString = string.toUpperCase();
		if (upperCaseString.indexOf(upperCaseCurrentString) > -1) {
			arrayOfOccurences.push(string);
		}
	}
	return arrayOfOccurences;
}

function fillSearchListByArray(array) {
	clearSearchList();
	var list = document.querySelector(".search__list");
	if (array.length === 0) {
		var li = document.createElement("li");
		li.innerHTML = "Not Found";
		list.appendChild(li);
		return;
	}
	for (let element of array) {
		var li = document.createElement("li");
		li.innerHTML = element;
		list.addEventListener("click", function (e) {
			var liElement = e.target;
			if (liElement.tagName === "LI") {
				var input = document.querySelector(".liveSearch input");
				input.value = liElement.innerHTML;
			}
		});
		list.appendChild(li);
	}
	list.classList.add("open");
}

function clearSearchList() {
	var list = document.querySelector(".search__list");
	while (list.firstChild) {
		list.removeChild(list.firstChild);
	}
}

var liveSearchInput = document.querySelector(".liveSearch input");
liveSearchInput.addEventListener("input", function (e) {
	var inputValue = e.target.value;
	let arrayOfOccurences = getOccurrenceOfArrayByString(cities, inputValue);
	fillSearchListByArray(arrayOfOccurences);
});
