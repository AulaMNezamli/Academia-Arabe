var overlay = document.getElementById("overlay");
var drop = document.getElementById("drop");
var dropOne = document.getElementById("drop-one");
var dropTwo = document.getElementById("drop-two");

function toggleModalOpen() {
  document.body.classList.toggle("modal-open");
}

drop.onclick = (e) => {
  overlay.style.display = "block";
  toggleModalOpen();
};

dropOne.onclick = (e) => {
  overlay.style.display = "block";
  toggleModalOpen();
};

dropTwo.onclick = (e) => {
  overlay.style.display = "block";
  toggleModalOpen();
};

overlay.onclick = (_) => {
  overlay.style.display = "none";
  toggleModalOpen();
};
// ========================================================

// SideBar
function openNav() {
  let open = document.getElementById("mySidenav");

  if (open.style.display === "none") {
    open.style.display = "block";
    open.style.width = "100%";
    open.style.transition = ".4s";
  } else {
    open.style.display = "none";
  }
}
// ========================================================

// Close
function closeNav() {
  let open = document.getElementById("mySidenav");
  open.style.display = "none";
}

// ========================================================
const rangevalue = document.querySelector(".slider-container .price-slider");
const rangeInputvalue = document.querySelectorAll(".range-input input");
let priceGap = 500;
// Adding event listners to price input elements
const priceInputvalue = document.querySelectorAll(".price-input input");
for (let i = 0; i < priceInputvalue.length; i++) {
  priceInputvalue[i].addEventListener("input", (e) => {
    // Parse min and max values of the range input
    let minp = parseInt(priceInputvalue[0].value);
    let maxp = parseInt(priceInputvalue[1].value);
    let diff = maxp - minp;

    if (minp < 0) {
      alert("minimum price cannot be less than 0");
      priceInputvalue[0].value = 0;
      minp = 0;
    }

    // Validate the input values
    if (maxp > 10000) {
      alert("maximum price cannot be greater than 10000");
      priceInputvalue[1].value = 10000;
      maxp = 10000;
    }

    if (minp > maxp - priceGap) {
      priceInputvalue[0].value = maxp - priceGap;
      minp = maxp - priceGap;

      if (minp < 0) {
        priceInputvalue[0].value = 0;
        minp = 0;
      }
    }

    // Check if the price gap is met
    // and max price is within the range
    if (diff >= priceGap && maxp <= rangeInputvalue[1].max) {
      if (e.target.className === "min-input") {
        rangeInputvalue[0].value = minp;
        let value1 = rangeInputvalue[0].max;
        rangevalue.style.left = `${(minp / value1) * 100}%`;
      } else {
        rangeInputvalue[1].value = maxp;
        let value2 = rangeInputvalue[1].max;
        rangevalue.style.right = `${100 - (maxp / value2) * 100}%`;
      }
    }
  });

  // Add event listeners to range input elements
  for (let i = 0; i < rangeInputvalue.length; i++) {
    rangeInputvalue[i].addEventListener("input", (e) => {
      let minVal = parseInt(rangeInputvalue[0].value);
      let maxVal = parseInt(rangeInputvalue[1].value);

      let diff = maxVal - minVal;

      // Check if the price gap is exceeded
      if (diff < priceGap) {
        // Check if the input is the min range input
        if (e.target.className === "min-range") {
          rangeInputvalue[0].value = maxVal - priceGap;
        } else {
          rangeInputvalue[1].value = minVal + priceGap;
        }
      } else {
        // Update price inputs and range progress
        priceInputvalue[0].value = minVal;
        priceInputvalue[1].value = maxVal;
        rangevalue.style.left = `${(minVal / rangeInputvalue[0].max) * 100}%`;
        rangevalue.style.right = `${
          100 - (maxVal / rangeInputvalue[1].max) * 100
        }%`;
      }
    });
  }
}

// ========================================================
document
  .querySelectorAll(".course-one-page, .online-course, .hybrid-one, .companies")
  .forEach(function (element) {
    element.addEventListener("click", function () {
      if (this.classList.contains("active")) {
        this.classList.remove("active");
      } else {
        this.classList.add("active");
      }
    });
  });
// ========================================================

document.addEventListener("DOMContentLoaded", function () {
  const filterButton = document.getElementById("filterButton");
  const filterModal = document.getElementById("filterModal");
  const closeButton = document.getElementById("close");

  filterButton.addEventListener("click", function () {
    filterModal.style.display = "block";
  });

  closeButton.addEventListener("click", function () {
    filterModal.style.display = "none";
  });
});
// ========================================================

document.addEventListener("DOMContentLoaded", function () {
  const itemsPerPage = 3;
  const totalItems = 30;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  let currentPage = 1;

  const paginationContainer = document.getElementById("pagination");
  const cardContainer = document.getElementById("card-container");

  function displayData() {
    cardContainer.innerHTML = "";

    // Create row for card-blog
    let rowCardBlog = document.createElement("div");
    rowCardBlog.className = "row";

    // Number of card-blog elements to generate
    const numCardBlogs = 3;

    for (let i = 1; i <= numCardBlogs; i++) {
      // Create col-md-4 card-blog element
      const colCardBlog = document.createElement("div");
      colCardBlog.className = "col-lg-4 col-md-6 card-blog";
      colCardBlog.innerHTML = `
      <div class="card" onclick="window.location.href = 'group-courses.html'">
      <img
        src="images/Rectangle 7.png"
        class="card-img-top"
        alt="rectangle"
      />
      <div class="card-body">
        <span class="card-title">Face-To-Face</span>
        <div class="cost">
          <span>€7900</span>
        </div>
        <p class="card-text">
          Lorem ipsum dolor sit amet consectetur. Tortor mi massa
        </p>
        <button class="btn btn-primary" id="view-course">View Course</button>
      </div>
    </div>
      `;

      // Append col-md-4 card-blog to the row
      rowCardBlog.appendChild(colCardBlog);

      // Append the row to the card container
      cardContainer.appendChild(rowCardBlog);
    }

    // Number of card-blog elements to generate
    const numContentOne = 3;

    for (let i = 1; i <= numContentOne; i++) {
      // Create col-md-4 card-blog element
      const colCardBlog = document.createElement("div");
      colCardBlog.className = "col-lg-4 col-md-6  card-blog";
      colCardBlog.innerHTML = `
          <div class="card" onclick="window.location.href = 'group-courses.html'">
          <img
            src="images/Rectangle 8.png"
            class="card-img-top"
            alt="rectangle"
          />
          <div class="card-body">
            <span class="card-title online">Online</span>
            <div class="cost">
              <span>€7900</span>
            </div>
            <p class="card-text">
              Lorem ipsum dolor sit amet consectetur. Tortor mi massa
            </p>
            <button class="btn btn-primary"  id="view-course">View Course</button>
          </div>
        </div>
          `;

      // Append col-md-4 card-blog to the row
      rowCardBlog.appendChild(colCardBlog);

      // Append the row to the card container
      cardContainer.appendChild(rowCardBlog);
    }

    // Number of card-blog elements to generate
    const numContentTwo = 3;

    for (let i = 1; i <= numContentTwo; i++) {
      // Create col-md-4 card-blog element
      const colCardBlog = document.createElement("div");
      colCardBlog.className = "col-lg-4 col-md-6  card-blog";
      colCardBlog.innerHTML = `
          <div class="card" onclick="window.location.href = 'group-courses.html'">
          <img
            src="images/Rectangle 9.png"
            class="card-img-top"
            alt="rectangle"
          />
          <div class="card-body">
            <span class="card-title hybrid">Hybrid</span>
            <div class="cost">
              <span>€7900</span>
            </div>
            <p class="card-text">
              Lorem ipsum dolor sit amet consectetur. Tortor mi massa
            </p>
            <button class="btn btn-primary"  id="view-course">View Course</button>
          </div>
        </div>
              `;

      // Append col-md-4 card-blog to the row
      rowCardBlog.appendChild(colCardBlog);

      // Append the row to the card container
      cardContainer.appendChild(rowCardBlog);
    }

    // Number of card-blog elements to generate
    const numContentThree = 3;

    for (let i = 1; i <= numContentThree; i++) {
      // Create col-md-4 card-blog element
      const colCardBlog = document.createElement("div");
      colCardBlog.className = "col-lg-4 col-md-6  card-blog";
      colCardBlog.innerHTML = `
      <div class="card" onclick="window.location.href = 'group-courses.html'">
        <div class="card-four" style="position: relative">
          <img
            src="images/Rectangle1.png"
            class="card-img-top"
            alt="rectangle"
          />
          <span class="descuento">100% Descuento</span>
        </div>
        <div class="card-body">
          <span class="card-title companies">Companies</span>
          <div class="cost" id="cost">
            <span>€7900</span>
            <span class="discount">€200</span>
          </div>
          <p class="card-text">
            Lorem ipsum dolor sit amet consectetur. Tortor mi massa
          </p>
          <button class="btn btn-primary"  id="view-course">View Course</button>
        </div>
      </div>
              `;

      // Append col-md-4 card-blog to the row
      rowCardBlog.appendChild(colCardBlog);

      // Append the row to the card container
      cardContainer.appendChild(rowCardBlog);
    }
  }

  function updatePagination() {
    paginationContainer.innerHTML = "";

    const prevButton = document.createElement("li");
    prevButton.innerHTML = '<i class="fa-solid fa-chevron-left"></i>';
    prevButton.addEventListener("click", function () {
      if (currentPage > 1) {
        currentPage--;
        updatePagination();
        displayData();
      }
    });
    paginationContainer.appendChild(prevButton);

    for (let i = 1; i <= totalPages; i++) {
      const li = document.createElement("li");
      li.textContent = i;

      li.addEventListener("click", function () {
        currentPage = i;
        updatePagination();
        displayData();
      });

      if (i === currentPage) {
        li.classList.add("active");
      }

      if (i <= 6) {
        paginationContainer.appendChild(li);
      } else if (i === totalPages) {
        const li = document.createElement("li");
        li.textContent = totalPages;
        li.addEventListener("click", function () {
          currentPage = totalPages;
          updatePagination();
          displayData();
        });

        if (totalPages === currentPage) {
          li.classList.add("active");
        }

        paginationContainer.appendChild(li);
      } else if (i === 7 && totalPages > 7) {
        const dots = document.createElement("li");
        dots.textContent = "...";
        dots.classList.add("dots");
        paginationContainer.appendChild(dots);
      }
    }

    const nextButton = document.createElement("li");
    nextButton.innerHTML = '<i class="fa-solid fa-chevron-right"></i>';
    nextButton.addEventListener("click", function () {
      if (currentPage < totalPages) {
        currentPage++;
        updatePagination();
        displayData();
      }
    });
    paginationContainer.appendChild(nextButton);
  }
  const tagsButtons = document.querySelectorAll(".button-tags button");

  tagsButtons.forEach((button, index) => {
    button.addEventListener("click", function () {
      currentPage = index + 1;
      updatePagination();
      displayData();
    });
  });

  displayData();
  updatePagination();
});
