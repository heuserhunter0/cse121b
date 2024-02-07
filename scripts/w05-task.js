/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.getElementById("temples");
let templeList = [];

/* Function: displayTemples */
const displayTemples = (temples) => {
  temples.forEach((temple) => {
    const article = document.createElement("article");
    
    const h3 = document.createElement("h3");
    h3.textContent = temple.templeName;
    
    const img = document.createElement("img");
    img.src = temple.imageUrl;
    img.alt = temple.location;
    
    article.appendChild(h3);
    article.appendChild(img);
    
    templesElement.appendChild(article);
  });
};

/* Function: getTemples */
const getTemples = async () => {
  const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");
  templeList = await response.json();
  displayTemples(templeList);
};

/* Function: reset */
const reset = () => {
  templesElement.innerHTML = ""; // Clear the content inside the div
};

/* Function: filterTemples */
const filterTemples = (temples) => {
  reset(); // Clear the displayed list of temples
  
  const filter = document.getElementById("filtered").value;
  
  switch (filter) {
    case "utah":
      displayTemples(temples.filter((temple) => temple.location.includes("Utah")));
      break;
    case "notutah":
      displayTemples(temples.filter((temple) => !temple.location.includes("Utah")));
      break;
    case "older":
      displayTemples(temples.filter((temple) => new Date(temple.dedicated) < new Date(1950, 0, 1)));
      break;
    case "all":
      displayTemples(temples);
      break;
    default:
      break;
  }
};

/* Event Listener: filterTemples Element change */
document.getElementById("filtered").addEventListener("change", () => {
  filterTemples(templeList);
});

// Test your code by calling getTemples at the end of the file
getTemples();
