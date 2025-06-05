
const indianNames = [
  "Aanya Sharma", 
  "Diya Mehta", 
  "Isha Kapoor", 
  "Riya Verma", 
  "Tanvi Nair", 
  "Sneha Reddy"
];

const imageFiles = [
  "download%20(1).jpeg",
  "download%20(2).jpeg",
  "download%20(3).jpeg",
  "download%20(4).jpeg",
  "download%20(5).jpeg",
  "download%20(6).jpeg"
];

// Replace fake API addresses with custom Indian ones
const indianAddresses = [
  "D-23, Lajpat Nagar, Delhi",
  "401, Shivaji Park, Mumbai",
  "11-B, Indiranagar, Bengaluru",
  "27, Park Street, Kolkata",
  "7A, Anna Nagar, Chennai",
  "103, Kukatpally, Hyderabad"
];

async function fetchUsers() {
  const usersDiv = document.getElementById('users');
  const errorDiv = document.getElementById('error');
  usersDiv.innerHTML = '';
  errorDiv.textContent = '';

  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    if (!res.ok) throw new Error('Network response was not ok');

    const data = await res.json();

    for (let i = 0; i < 6; i++) {
      const user = data[i];
      const name = indianNames[i];
      const imgSrc = imageFiles[i];
      const address = indianAddresses[i];

      const div = document.createElement('div');
      div.className = 'user';
      div.innerHTML = `
        <img src="${imgSrc}" alt="Profile Picture">
        <h3>${name}</h3>
        <p>📧 ${user.email}</p>
        <p>🏠 ${address}</p>
      `;
      usersDiv.appendChild(div);
    }

  } catch (error) {
    errorDiv.textContent = '❌ Error fetching users. Please check your internet connection.';
  }
}

document.getElementById('reloadBtn').addEventListener('click', fetchUsers);

fetchUsers(); // Initial load
