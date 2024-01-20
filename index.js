document.addEventListener('DOMContentLoaded', function() {
    // Function to show toast message
    function showToast(message) {
      var toastContainer = document.getElementById('toast-container');
      toastContainer.innerHTML = message;
      toastContainer.style.display = 'block';
  
      // Hide the toast after 5 seconds
      setTimeout(function() {
        toastContainer.style.display = 'none';
      }, 5000);
    }
  
    // Example: Show welcome toast
    showToast('WELCOME TO MY WEBSITE');
  });
  