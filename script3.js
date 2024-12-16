//----------for maps
function initMap() {
    // Coordinates for Delhi
    const delhiLocation = { lat: 28.6139, lng: 77.2090 };

    // Initialize the map
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 14, // Zoom level
        center: delhiLocation, // Center the map on Delhi
    });

    // Add a marker at the center
    new google.maps.Marker({
        position: delhiLocation,
        map: map,
        title: "Delhi, India",
    });
}


//----------for read more button
// JavaScript to toggle the visibility of the additional content
document.getElementById("read-more-btn").addEventListener("click", function() {
    var moreContent = document.getElementById("more-content");
    var readMoreBtn = document.getElementById("read-more-btn");
    
    // Show more content and change the "Read More" button to "Read Less"
    moreContent.style.display = "block";
    readMoreBtn.style.display = "none";  // Hide the "Read More" button
});

document.getElementById("read-less-btn").addEventListener("click", function() {
    var moreContent = document.getElementById("more-content");
    var readMoreBtn = document.getElementById("read-more-btn");
    
    // Hide the additional content and show the "Read More" button again
    moreContent.style.display = "none";
    readMoreBtn.style.display = "block";  // Show the "Read More" button
});


//----------------for how to get there section
function showContent(tab) {
    // Hide all tab content
    document.querySelectorAll('.tab-content').forEach(content => {
      content.classList.add('hidden');
    });
  
    // Remove active class from all tabs
    document.querySelectorAll('.tab').forEach(button => {
      button.classList.remove('active');
    });
  
    // Show the selected tab content and set active tab
    document.getElementById(tab).classList.remove('hidden');
    event.target.classList.add('active');
  
    // Change the image based on the tab
    const image = document.getElementById('tab-image');
    if (tab === 'air') {
      image.src = 'images/airplane.jpeg';
      image.alt = 'Airplane Wing View';
    } else if (tab === 'rail') {
      image.src = 'images/train.webp'; // Replace with rail image path
      image.alt = 'Train Journey View';
    } else if (tab === 'road') {
      image.src = 'images/road.webp'; // Replace with road image path
      image.alt = 'Scenic Road View';
    }
  }
  