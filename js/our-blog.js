// document.addEventListener("DOMContentLoaded", function () {
//   const contentDiv = document.getElementById("pagination-content");
//   const buttonsDiv = document.getElementById("pagination-buttons");

// const repeatContent = `
// <div class = "publications">
//   <h4>Recent Publications</h4>
//   <div class="row">
//       <div class="col-md-4">
//           <div class="card-blog">
//               <a href="offer.html">
//                   <img
//                   src="images/null.png"
//                   class="card-img"
//                   alt="rectangle"
//                   />
//                   <div class="card-blog-body">
//                       <span class="card-title-blog">Face-To-Face Courses</span>
//                       <p class="card-blog-text">
//                           Lorem ipsum dolor sit amet consectetur. Elit dui viverra
//                           Lorem ipsum dolor sit amet consectetur. Elit dui viverra
//                       </p>
//                       <button>Read More
//                           <i class="fa-solid fa-angles-right" style="color: #0b3954"></i>
//                       </button>
//                   </div>
//               </a>
//           </div>
//       </div>
//       <div class="col-md-4">
//           <div class="card-blog">
//               <a href="offer.html">
//               <img
//                   src="images/null.png"
//                   class="card-img"
//                   alt="rectangle"
//               />
//               <div class="card-blog-body">
//                   <span class="card-title-blog">Face-To-Face Courses</span>

//                   <p class="card-blog-text">
//                   Lorem ipsum dolor sit amet consectetur. Elit dui viverra
//                   Lorem ipsum dolor sit amet consectetur. Elit dui viverra
//                   </p>
//                   <button>
//                   Read More
//                   <i
//                       class="fa-solid fa-angles-right"
//                       style="color: #0b3954"
//                   ></i>
//                   </button>
//               </div>
//               </a>
//           </div>
//       </div>
//       <div class="col-md-4">
//           <div class="card-blog">
//               <a href="offer.html">
//               <img
//                   src="images/null.png"
//                   class="card-img"
//                   alt="rectangle"
//               />
//               <div class="card-blog-body">
//                   <span class="card-title-blog">Face-To-Face Courses</span>

//                   <p class="card-blog-text">
//                   Lorem ipsum dolor sit amet consectetur. Elit dui viverra
//                   Lorem ipsum dolor sit amet consectetur. Elit dui viverra
//                   </p>
//                   <button>
//                   Read More
//                   <i
//                       class="fa-solid fa-angles-right"
//                       style="color: #0b3954"
//                   ></i>
//                   </button>
//               </div>
//               </a>
//           </div>
//       </div>
//   </div>
//   <div class="content-our-blog">
//       <div class="img-blog">
//       <img src="images/content blog.png" alt="" />
//       </div>
//       <div class="title-our-blog">
//       <h5>What We Offer</h5>
//       </div>
//       <div class="offer-blog">
//       <span>By Lorem Ipsum</span>
//       <small>12/12/2024</small>
//       </div>
//       <div class="text-content-blog">
//       Lorem ipsum dolor sit amet consectetur. Ut felis sit volutpat eu
//       felis. Eu tortor neque netus potenti aliquam convallis venenatis
//       enim. Ac elit odio venenatis eros sit. Laoreet donec dictum
//       viverra nec donec eget egestas cras. Iaculis orci risus
//       phasellus justo malesuada varius non. Nisl pellentesque ut
//       elementum id sit metus commodo. Felis ipsum eget arcu ultrices
//       sed lacus eget ac volutpat.
//       </div>
//   </div>
//   <div class="content-our-blog">
//     <div class="img-blog">
//     <img src="images/content blog.png" alt="" />
//     </div>
//     <div class="title-our-blog">
//     <h5>What We Offer</h5>
//     </div>
//     <div class="offer-blog">
//     <span>By Lorem Ipsum</span>
//     <small>12/12/2024</small>
//     </div>
//     <div class="text-content-blog">
//     Lorem ipsum dolor sit amet consectetur. Ut felis sit volutpat eu
//     felis. Eu tortor neque netus potenti aliquam convallis venenatis
//     enim. Ac elit odio venenatis eros sit. Laoreet donec dictum
//     viverra nec donec eget egestas cras. Iaculis orci risus
//     phasellus justo malesuada varius non. Nisl pellentesque ut
//     elementum id sit metus commodo. Felis ipsum eget arcu ultrices
//     sed lacus eget ac volutpat.
//     </div>
//   </div>
//   <div class="content-our-blog">
//     <div class="img-blog">
//     <img src="images/content blog.png" alt="" />
//     </div>
//     <div class="title-our-blog">
//     <h5>What We Offer</h5>
//     </div>
//     <div class="offer-blog">
//     <span>By Lorem Ipsum</span>
//     <small>12/12/2024</small>
//     </div>
//     <div class="text-content-blog">
//     Lorem ipsum dolor sit amet consectetur. Ut felis sit volutpat eu
//     felis. Eu tortor neque netus potenti aliquam convallis venenatis
//     enim. Ac elit odio venenatis eros sit. Laoreet donec dictum
//     viverra nec donec eget egestas cras. Iaculis orci risus
//     phasellus justo malesuada varius non. Nisl pellentesque ut
//     elementum id sit metus commodo. Felis ipsum eget arcu ultrices
//     sed lacus eget ac volutpat.
//     </div>
//   </div>
//   <div class="content-our-blog">
//       <div class="img-blog">
//       <img src="images/content blog.png" alt="" />
//       </div>
//       <div class="title-our-blog">
//       <h5>What We Offer</h5>
//       </div>
//       <div class="offer-blog">
//       <span>By Lorem Ipsum</span>
//       <small>12/12/2024</small>
//       </div>
//       <div class="text-content-blog">
//       Lorem ipsum dolor sit amet consectetur. Ut felis sit volutpat eu
//       felis. Eu tortor neque netus potenti aliquam convallis venenatis
//       enim. Ac elit odio venenatis eros sit. Laoreet donec dictum
//       viverra nec donec eget egestas cras. Iaculis orci risus
//       phasellus justo malesuada varius non. Nisl pellentesque ut
//       elementum id sit metus commodo. Felis ipsum eget arcu ultrices
//       sed lacus eget ac volutpat.
//       </div>
//   </div>
//   <div class="content-our-blog">
//     <div class="img-blog">
//     <img src="images/content blog.png" alt="" />
//     </div>
//     <div class="title-our-blog">
//     <h5>What We Offer</h5>
//     </div>
//     <div class="offer-blog">
//     <span>By Lorem Ipsum</span>
//     <small>12/12/2024</small>
//     </div>
//     <div class="text-content-blog">
//     Lorem ipsum dolor sit amet consectetur. Ut felis sit volutpat eu
//     felis. Eu tortor neque netus potenti aliquam convallis venenatis
//     enim. Ac elit odio venenatis eros sit. Laoreet donec dictum
//     viverra nec donec eget egestas cras. Iaculis orci risus
//     phasellus justo malesuada varius non. Nisl pellentesque ut
//     elementum id sit metus commodo. Felis ipsum eget arcu ultrices
//     sed lacus eget ac volutpat.
//     </div>
//   </div>
// `;

//   function showPage(pageIndex) {
//     contentDiv.innerHTML = "";
//     contentDiv.innerHTML = repeatContent;
//   }

//   for (let i = 0; i < 10; i++) {
//     let button = document.createElement("button");
//     button.innerText = i + 1;
//     button.addEventListener("click", function () {
//       showPage(i);
//     });
//     buttonsDiv.appendChild(button);
//   }
//   showPage(0);
//   // إضافة زر للتنقل لليمين
//   let nextButton = document.createElement("button");
//   nextButton.innerText = ">";
//   nextButton.addEventListener("click", function () {
//     if (currentPage < 9) {
//       showPage(currentPage + 1);
//     }
//   });
//   buttonsDiv.appendChild(nextButton);

//   // إضافة زر للتنقل لليسار
//   let prevButton = document.createElement("button");
//   prevButton.innerText = "<";
//   prevButton.addEventListener("click", function () {
//     if (currentPage > 0) {
//       showPage(currentPage - 1);
//     }
//   });
//   buttonsDiv.appendChild(prevButton);

//   // إعادة تحديث أزرار الترقيم عند كل تغيير
//   updatePagination();
// });

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
        <h5>What We Offer</h5>
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
