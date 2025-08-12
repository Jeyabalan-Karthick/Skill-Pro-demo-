function openApplicationForm() {
    document.getElementById('enrollmentModal').style.display = 'block';
  }
  
  document.querySelector('.close').onclick = function() {
    document.getElementById('enrollmentModal').style.display = 'none';
  }
  
  window.onclick = function(event) {
    var modal = document.getElementById('enrollmentModal');
    if (event.target == modal) {
      modal.style.display = 'none';
    }
  }
  
  function handleSubmit(event) {
    event.preventDefault();
    alert('Form submitted successfully!');
    document.getElementById('enrollmentModal').style.display = 'none';
    document.getElementById('applicationForm').reset();
  }