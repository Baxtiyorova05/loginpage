// LocalStorage orqali foydalanuvchilarni yuklash yoki JSONdan boshlang'ich foydalanuvchilarni olish
let users = JSON.parse(localStorage.getItem('users')) || [
    { username: 'user1', password: 'password1' },
    { username: 'user2', password: 'password2' },
  ];
  
  // Mevalar ma'lumotlari JSON massivida saqlanadi
const fruits = [
    { name: 'Apple', email: 'apple@example.com', price: 1.2 },
    { name: 'Banana', email: 'banana@example.com', price: 0.5 },
    { name: 'Orange', email: 'orange@example.com', price: 0.8 },
    { name: 'Strawberry', email: 'strawberry@example.com', price: 2.5 },
    { name: 'Mango', email: 'mango@example.com', price: 1.5 }
  ];
  
  // Mevalar ro'yxatini jadval ko'rinishida ko'rsatish funksiyasi
  function displayFruits() {
    const fruitTableBody = document.getElementById('fruitTableBody');
    fruitTableBody.innerHTML = '';  // Jadvalni tozalash
  
    fruits.forEach(fruit => {
      const tr = document.createElement('tr');  // Jadval satrini yaratish
      
      // Meva nomi
      const tdName = document.createElement('td');
      tdName.classList.add('border', 'px-4', 'py-2');
      tdName.textContent = fruit.name;
      tr.appendChild(tdName);
  
      // Email
      const tdEmail = document.createElement('td');
      tdEmail.classList.add('border', 'px-4', 'py-2');
      tdEmail.textContent = fruit.email;
      tr.appendChild(tdEmail);
  
      // Narx
      const tdPrice = document.createElement('td');
      tdPrice.classList.add('border', 'px-4', 'py-2');
      tdPrice.textContent = fruit.price.toFixed(2);  // Narxni ikki kasrli ko'rinishda chiqarish
      tr.appendChild(tdPrice);
  
      // Jadvalga yangi satrni qo'shish
      fruitTableBody.appendChild(tr);
    });
  
    console.log('Fruits Table:', fruits);  // Konsolda fruits jadvalini ko'rsatish
  }
  
  
  // Sahifa o'rtasida o'tish funksiyasi
  function showPage(pageId) {
    document.querySelectorAll('.bg-white').forEach(page => {
      page.classList.add('hidden');
    });
    document.getElementById(pageId).classList.remove('hidden');
  }
  
  // Login sahifasidan Register sahifasiga o'tish
  document.getElementById('goToRegister').addEventListener('click', () => {
    showPage('registerPage');
  });
  
  // Register sahifasidan Login sahifasiga o'tish
  document.getElementById('goToLogin').addEventListener('click', () => {
    showPage('loginPage');
  });
  
  // Login form submit event
  document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
  
    const isValidUser = users.some(user => user.username === username && user.password === password);
  
    if (isValidUser) {
      document.getElementById('loginErrorMessage').classList.add('hidden');
      console.log(`User logged in: ${username}`);
      showPage('fruitPage');
      displayFruits();
    } else {
      document.getElementById('loginErrorMessage').classList.remove('hidden');
    }
  });
  
  // Register form submit event
  document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const newUsername = document.getElementById('newUsername').value;
    const newPassword = document.getElementById('newPassword').value;
  
    const isUserExists = users.some(user => user.username === newUsername);
  
    if (!isUserExists && newUsername && newPassword) {
      users.push({ username: newUsername, password: newPassword });
      console.log(`New user registered: ${newUsername}`);
  
      // LocalStorage-ga yangi foydalanuvchini saqlash
      localStorage.setItem('users', JSON.stringify(users));
  
      document.getElementById('registerErrorMessage').classList.add('hidden');
      showPage('loginPage');
    } else {
      document.getElementById('registerErrorMessage').classList.remove('hidden');
    }
  });
  
//   // Mevalar ro'yxatini ko'rsatish funksiyasi
//   function displayFruits() {
//     const fruitList = document.getElementById('fruitList');
//     fruitList.innerHTML = '';
//     fruits.forEach(fruit => {
//       const li = document.createElement('li');
//       li.textContent = fruit;
//       fruitList.appendChild(li);
//     });
//     console.log('Fruits List:', fruits);
//   }
  
  
