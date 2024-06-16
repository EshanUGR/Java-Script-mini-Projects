const reviews = [
  {
    id: 1,
    name: "susan smith",
    job: "web developer",
    img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.freepik.com%2Fphotos%2Fpeople&psig=AOvVaw22qi7AP8IXoMrUkpWdNKjj&ust=1718417229567000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCPjn7qOB2oYDFQAAAAAdAAAAABAE",
    text: "I'm dfjfkjfk fjkgjk f  f",
  },
  {
    id: 2,
    name: "anna jognson",
    job: "web development",
    img: "https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?size=626&ext=jpg",
    text: "I'm dfjfkjfk fjkgjk f  f",
  },
  {
    id: 3,
    name: "Dileesha",
    job: "se",
    img: "https://img.freepik.com/free-photo/cheerful-woman-with-dark-wavy-hairstyle-black-striped-outfit-hat-laughing-looking-into-camera-pink-background_197531-29197.jpg?size=626&ext=jpg",
    text: "paragjgkj 3"
  },
];

const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const preBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const randomBtn = document.querySelector(".random-btn");

// Set starting item
let currentItem = 2;

window.addEventListener('DOMContentLoaded', function() {
  showPerson(currentItem);
});

// Show person based on item
function showPerson(person) {
  const item = reviews[person];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
}

// Show next person
nextBtn.addEventListener('click', function() {
  currentItem++;
  if (currentItem >= reviews.length) {
    currentItem = 0; // Wrap around to the start
  }
  showPerson(currentItem);
});

// Show previous person
preBtn.addEventListener('click', function() {
  currentItem--;
  if (currentItem < 0) {
    currentItem = reviews.length - 1; // Wrap around to the end
  }
  showPerson(currentItem);
});

// Show random person
randomBtn.addEventListener('click', function() {
  currentItem = Math.floor(Math.random() * reviews.length);
  showPerson(currentItem);
});
