// DOM elements
const loginBtn = document.getElementById("loginBtn");
const signupBtn = document.getElementById("signupBtn");
const loginModal = document.getElementById("loginModal");
const signupModal = document.getElementById("signupModal");
const closeBtns = document.querySelectorAll(".close-modal");
const switchToSignup = document.getElementById("switchToSignup");
const joinNowBtn = document.getElementById("joinNowBtn");

// Show login modal
loginBtn.addEventListener("click", () => {
  loginModal.style.display = "flex";
});

// Show signup modal
signupBtn.addEventListener("click", () => {
  signupModal.style.display = "flex";
});

// Close modals
closeBtns.forEach(btn =>
  btn.addEventListener("click", () => {
    loginModal.style.display = "none";
    signupModal.style.display = "none";
  })
);

// Switch login → signup
switchToSignup.addEventListener("click", e => {
  e.preventDefault();
  loginModal.style.display = "none";
  signupModal.style.display = "flex";
});

// Join Now button
joinNowBtn.addEventListener("click", () => {
  signupModal.style.display = "flex";
});

// Close modal on outside click
window.addEventListener("click", e => {
  if (e.target === loginModal) loginModal.style.display = "none";
  if (e.target === signupModal) signupModal.style.display = "none";
});

// Form submission (demo only)
document.getElementById("loginForm").addEventListener("submit", e => {
  e.preventDefault();
  alert("Login Successful ✅");
  loginModal.style.display = "none";
});

document.getElementById("signupForm").addEventListener("submit", e => {
  e.preventDefault();
  alert("Account Created Successfully 🎉");
  signupModal.style.display = "none";
});
