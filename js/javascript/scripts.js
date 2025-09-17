////////////////////////////show main carouse items by bottons ( etc ,مؤجرة , احصائيات)////////////////////////////
function showCarouselItem(itemNumber) {
  const carouselItems = document.getElementsByClassName('main-carousel-item');
  for (let i = 0; i < carouselItems.length; i++) {
    carouselItems[i].classList.remove('active');
  }

  const carouselItem = document.getElementById(`carouselItem${itemNumber}`);
  carouselItem.classList.add('active');
  if (itemNumber === 3 || itemNumber === 4) {
    if ($('#carouselItem3').hasClass('active') || $('#carouselItem4').hasClass('active')) {
      var dropdownContent;
      var currentExtraDetails;
      var allExtraDetails = $('.extra-details');

      $('.table-hover').on('click', '.extra-details', function() {
        $('.dropdown-content').hide();

        dropdownContent = $(this).find('.dropdown-content');
        currentExtraDetails = $(this);
        allExtraDetails.not(currentExtraDetails).css("box-shadow", "0px 2px 4px 0px #39629C3D");
        dropdownContent.css("display", "block");
        currentExtraDetails.css("box-shadow", "none");
      });

      $(document).on('click', function(event) {
        if (dropdownContent && dropdownContent.css('display') === 'block') {
          if (!$(event.target).closest('.dropdown-content').length && !$(event.target).closest('.extra-details').length) {
            dropdownContent.css("display", "none");
            currentExtraDetails.css("box-shadow", "0px 2px 4px 0px #39629C3D");
            currentExtraDetails = null;
          }
        }
      });
    }
  }
  if (itemNumber === 2 || itemNumber === 3 || itemNumber === 4) {
    scrollCategories()
  }
}
///////////////////car category scroll without visiable scroll script ////////////////////////////////////////////
function scrollCategories (){
  let isScrolling = false;
let startX, startY, scrollLeft, scrollTop;

const scrollContainers = document.querySelectorAll(".buttons-car-categories");

scrollContainers.forEach((scrollContainer) => {
  // Mouse events
  scrollContainer.addEventListener("mousedown", (e) => {
    isScrolling = true;
    startX = e.pageX - scrollContainer.offsetLeft;
    startY = e.pageY - scrollContainer.offsetTop;
    scrollLeft = scrollContainer.scrollLeft;
    scrollTop = scrollContainer.scrollTop;
  });

  scrollContainer.addEventListener("mouseleave", () => {
    isScrolling = false;
  });

  scrollContainer.addEventListener("mouseup", () => {
    isScrolling = false;
  });

  scrollContainer.addEventListener("mousemove", (e) => {
    if (!isScrolling) return;
    e.preventDefault();
    const x = e.pageX - scrollContainer.offsetLeft;
    const y = e.pageY - scrollContainer.offsetTop;
    const walkX = (x - startX) * 2;
    const walkY = (y - startY) * 2;
    scrollContainer.scrollLeft = scrollLeft - walkX;
    scrollContainer.scrollTop = scrollTop - walkY;
  });

  // Touch events
  scrollContainer.addEventListener("touchstart", (e) => {
    isScrolling = true;
    startX = e.touches[0].pageX - scrollContainer.offsetLeft;
    startY = e.touches[0].pageY - scrollContainer.offsetTop;
    scrollLeft = scrollContainer.scrollLeft;
    scrollTop = scrollContainer.scrollTop;
  });

  scrollContainer.addEventListener("touchmove", (e) => {
    if (!isScrolling) return;
    if (e.cancelable) {
      e.preventDefault();
    }
    const x = e.touches[0].pageX - scrollContainer.offsetLeft;
    const y = e.touches[0].pageY - scrollContainer.offsetTop;
    const walkX = (x - startX) * 2;
    const walkY = (y - startY) * 2;
    scrollContainer.scrollLeft = scrollLeft - walkX;
    scrollContainer.scrollTop = scrollTop - walkY;
  });

  scrollContainer.addEventListener("touchend", () => {
    isScrolling = false;
  });
});

}
 
