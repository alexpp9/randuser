function fetchUser() {
  showSpinner();
  fetch(`https://randomuser.me/api`)
    .then((response) => response.json())
    .then((data) => {
      // Once data comes back from API
      hideSpinner();
      displayUser(data.results[0]);
    });
}
// Display user
function displayUser(user) {
  const userDisplay = document.querySelector('#user');
  userDisplay.innerHTML = `
           <div class="flex justify-between">
          <div class="flex">
            <img
              class="w-48 h-48 rounded-full mr-8"
              src="${user.picture.large}"
            />
            <div class="space-y-3">
              <p class="text-xl">
                <span class="font-bold">Name: </span>${user.name.first} ${user.name.last}
              </p>
              <p class="text-xl">
                <span class="font-bold">Email: </span> ${user.email}
              </p>
              <p class="text-xl">
                <span class="font-bold">Phone: </span> ${user.phone}
              </p>
              <p class="text-xl">
                <span class="font-bold">Location: </span> ${user.location.city} ${user.location.country}
              </p>
              <p class="text-xl"><span class="font-bold">Age: </span> ${user.dob.age}</p>
            </div>
          </div>
        </div>
    `;
  if (user.gender === 'female') {
    document.body.style.backgroundColor = 'rebeccapurple';
  } else {
    document.body.style.backgroundColor = 'steelblue';
  }
}

// Spinner show/hide
function showSpinner() {
  document.querySelector('.spinner').style.display = 'block';
}
function hideSpinner() {
  document.querySelector('.spinner').style.display = 'none';
}

// Event
document.querySelector('#generate').addEventListener('click', fetchUser);

// Call function
fetchUser();
