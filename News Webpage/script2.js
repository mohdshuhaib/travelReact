document.addEventListener("DOMContentLoaded", function() {
    const gridItems = document.querySelectorAll(".grid-item");
    const lightbox = document.querySelector(".lightbox");
    const lightboxImg = document.querySelector(".lightbox-img");
    const closeBtn = document.querySelector(".close-btn");
    const downloadBtn = document.querySelector(".download-btn");
  
    gridItems.forEach(item => {
      item.addEventListener("click", function() {
        const imgSrc = this.querySelector("img").getAttribute("src");
        lightboxImg.setAttribute("src", imgSrc);
        lightbox.style.display = "block";
      });
    });
  
    closeBtn.addEventListener("click", function() {
      lightbox.style.display = "none";
    });
  
    downloadBtn.addEventListener("click", function() {
      const imgSrc = lightboxImg.getAttribute("src");
      const imgName = imgSrc.split("/").pop(); // Extracting image name from the URL
      fetch(imgSrc)
        .then(response => response.blob())
        .then(blob => {
          const url = window.URL.createObjectURL(blob);
          const a = document.createElement("a");
          a.href = url;
          a.download = imgName;
          document.body.appendChild(a);
          a.click();
          window.URL.revokeObjectURL(url);
        })
        .catch(error => console.error("Download failed:", error));
    });
  });
  