document.addEventListener("DOMContentLoaded", () => {
  // Header menu toggle
  const hamButton = document.querySelector("#menu");
  const navigation = document.querySelector(".navigation");
  const nameHeader = document.querySelector(".nameHeader");

  hamButton.addEventListener("click", () => {
    [navigation, hamButton, nameHeader].forEach((el) =>
      el.classList.toggle("open")
    );
  });

  const temples = [
    {
      templeName: "Quito, Ecuador",
      location: "Quito, Ecuador",
      dedicated: "2022, November, 20",
      area: 27830.5,
      imageUrl:
        "https://churchofjesuschrist.org/imgs/490df500d14611ec90efeeeeac1ee7e67e80c168/full/500%2C/0/default",
      width: "400px",
      height: "250px",
    },
    {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg",
      width: "400px",
      height: "250px",
    },
    {
      templeName: "Peru Trujillo",
      location: "Trujillo, Peru",
      dedicated: "2015, June, 21",
      area: 9600,
      imageUrl:
        "https://www.churchofjesuschrist.org/imgs/9943a99ff243f011c0533e3633cf9ecee0829628/full/500%2C/0/default",
      width: "400px",
      height: "225px",
    },
    {
      templeName: "Peru Arequipa",
      location: "Arequipa, Peru",
      dedicated: "2019, Dec, 15",
      area: 9600,
      imageUrl:
        "https://churchofjesuschrist.org/imgs/55f6c59ce8f9c093a9c689067f8674335de544e2/full/500%2C/0/default",
      width: "400px",
      height: "225px",
    },
    {
      templeName: "Washington D.C.",
      location: "Kensington, Maryland, United States",
      dedicated: "1974, November, 19",
      area: 156558,
      imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg",
      width: "400px",
      height: "250px",
    },
    {
      templeName: "Lima Perú",
      location: "Lima, Perú",
      dedicated: "1986, January, 10",
      area: 9600,
      imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg",
      width: "400px",
      height: "250px",
    },
  ];

  const container = document.querySelector(".container.home");
  const titleName = document.querySelector(".title");
  const navLinks = document.querySelectorAll(".navigation a");

  const displayTemples = (filteredTemples) => {
    container.innerHTML = filteredTemples
      .map(
        (temple) => `
            <div class="temple-card">
                <img src="${temple.imageUrl}" loading="lazy" width="${
          temple.width
        }" height="${temple.height}" alt="${temple.templeName} Temple">
                <div class="temple-info">
                    <h2>${temple.templeName}</h2>
                    <p><strong>Location:</strong> ${temple.location}</p>
                    <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
                    <p><strong>Area:</strong> ${temple.area.toLocaleString()} sq ft</p>
                </div>
            </div>
        `
      )
      .join("");
  };

  const filterTemples = (criteria) => {
    const filters = {
      old: (temple) => new Date(temple.dedicated).getFullYear() < 1900,
      new: (temple) => new Date(temple.dedicated).getFullYear() > 2000,
      large: (temple) => temple.area > 90000,
      small: (temple) => temple.area < 10000,
    };
    titleName.textContent = criteria
      ? `${criteria.charAt(0).toUpperCase() + criteria.slice(1)} Temples`
      : "All Temples";
    displayTemples(criteria ? temples.filter(filters[criteria]) : temples);
  };

  navLinks.forEach((link) =>
    link.addEventListener("click", (e) => {
      e.preventDefault();
      navLinks.forEach((nav) => nav.classList.remove("active"));
      e.target.classList.add("active");
      filterTemples(e.target.id);
    })
  );

  filterTemples();

  // Footer information
  document.getElementById("currentyear").textContent = new Date().getFullYear();
  document.getElementById(
    "lastModified"
  ).textContent = `Last update: ${document.lastModified}`;
});
