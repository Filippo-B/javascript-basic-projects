// local reviews data
const reviews = [
  {
    id: 1,
    name: "susan smith",
    job: "web developer",
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
    text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: "anna johnson",
    job: "web designer",
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
    text: "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
  },
  {
    id: 3,
    name: "peter jones",
    job: "intern",
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
    text: "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
  },
  {
    id: 4,
    name: "bill anderson",
    job: "the boss",
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
    text: "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
  },
];

const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");
const personImg = document.getElementById("person-img");
const buttons = document.getElementsByTagName("button");
let currentReviewIndex = 0;

// function updateCurrentReviewIndex(how) {
//   if (how === "add") {
//     reviews[currentReviewIndex + 1] === undefined ? (currentReviewIndex = 0) : (currentReviewIndex += 1);
//   } else if (how === "subtract") {
//     reviews[currentReviewIndex - 1] === undefined ? (currentReviewIndex = reviews.length - 1) : (currentReviewIndex -= 1);
//   } else if (how === "random") {
//     currentReviewIndex = Math.floor(Math.random() * reviews.length);
//   }
//   return currentReviewIndex;
// }

function updateCurrentReviewIndex(how) {
  switch (how) {
    case "add":
      reviews[currentReviewIndex + 1] === undefined ? (currentReviewIndex = 0) : (currentReviewIndex += 1);
      break;
    case "subtract":
      reviews[currentReviewIndex - 1] === undefined ? (currentReviewIndex = reviews.length - 1) : (currentReviewIndex -= 1);
    case "random":
      currentReviewIndex = Math.floor(Math.random() * reviews.length);
      break;
    default:
      currentReviewIndex = how;
  }
  return currentReviewIndex;
}

function updateDom(index = 1) {
  author.innerText = reviews[index].name;
  job.innerText = reviews[index].job;
  personImg.setAttribute("src", reviews[index].img);
  info.innerText = reviews[index].text;
}

window.addEventListener("DOMContentLoaded", updateDom());

Array.from(buttons).forEach((button) => {
  button.addEventListener("click", function () {
    if (button.classList.contains("prev-btn")) {
      updateDom(updateCurrentReviewIndex("subtract"));
    } else if (button.classList.contains("next-btn")) {
      updateDom(updateCurrentReviewIndex("add"));
    } else if (button.classList.contains("random-btn")) {
      updateDom(updateCurrentReviewIndex("random"));
    }
  });
});
