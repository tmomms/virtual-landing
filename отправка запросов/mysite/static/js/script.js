const form = document.getElementById('my-form');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  const data = new FormData(form);
  fetch('/my-url/', {
    method: 'POST',
    body: data
  })
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));
});
