document.addEventListener("DOMContentLoaded", function () {
  const itemsPerPage = 3;
  const totalItems = 30;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  let currentPage = 1;

  const paginationContainer = document.getElementById("pagination");
  const cardContainer = document.getElementById("card-container");

  function displayData() {
    cardContainer.innerHTML = "";
    // Create a div element to contain the title
    const titleContainer = document.createElement("div");
    titleContainer.className = "title-element";
    // Create a title element
    const titleElement = document.createElement("h4");
    titleElement.textContent = "Recent Publications";
    // Append the title to the div container
    titleContainer.appendChild(titleElement);
    // Append the title to the card container
    cardContainer.appendChild(titleContainer);
    // Create row for card-blog
    let rowCardBlog = document.createElement("div");
    rowCardBlog.className = "row";
    // Number of card-blog elements to generate
    const numCardBlogs = 3;
    for (let i = 1; i <= numCardBlogs; i++) {
      // Create col-md-4 card-blog element
      const colCardBlog = document.createElement("div");
      colCardBlog.className = "col-md-4 card-blog";
      colCardBlog.innerHTML = `
        <a href="offer.html">
          <img src="images/null.png" class="card-img" alt="rectangle">
          <div class="card-blog-body">
            <span class="card-title-blog">Face-To-Face Courses</span>
            <p class="card-blog-text">
              Lorem ipsum dolor sit amet consectetur. Elit dui viverra
              Lorem ipsum dolor sit amet consectetur. Elit dui viverra
            </p>
            <button>
              Read More
              <i class="fa-solid fa-angles-right" style="color: #0b3954"></i>
            </button>
          </div>
        </a>
      `;
      // Append col-md-4 card-blog to the row
      rowCardBlog.appendChild(colCardBlog);
      // Append the row to the card container
      cardContainer.appendChild(rowCardBlog);
    }
    // Number of content-our-blog elements to generate
    const numContentOurBlog = 5;
    for (let i = 0; i < numContentOurBlog; i++) {
      // Create content-our-blog element
      const contentOurBlog = document.createElement("div");
      contentOurBlog.className = "content-our-blog";
      contentOurBlog.innerHTML = `
      <div class="img-blog">
        <img src="images/content blog.png" alt="" />
      </div>
      <div class="title-our-blog">
        <a href="blog-details.html"><h5>What We Offer</h5></a>
      </div>
      <div class="offer-blog">
        <span>By Lorem Ipsum</span>
        <small>12/12/2024</small>
      </div>
      <div class="text-content-blog">
        <p>
          Lorem ipsum dolor sit amet consectetur. Ut felis sit volutpat eu
          felis. Eu tortor neque netus potenti aliquam convallis venenatis
          enim. Ac elit odio venenatis eros sit. Laoreet donec dictum
          viverra nec donec eget egestas cras. Iaculis orci risus
          phasellus justo malesuada varius non. Nisl pellentesque ut
          elementum id sit metus commodo. Felis ipsum eget arcu ultrices
          sed lacus eget ac volutpat.
        </p>
      </div>
    `;

      // Append content-our-blog to the card container for each page
      cardContainer.appendChild(contentOurBlog);
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
