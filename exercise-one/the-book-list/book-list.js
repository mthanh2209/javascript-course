// the array of books
const books = [
  {
    title: "Blockchain Technology",
    author: "Many Authors",
    img: "https://nhasachmienphi.com/images/thumbnail/nhasachmienphi-cong-nghe-blockchain.jpg",
    alreadyRead: false,
  },
  {
    title: "Basic Machine Learning",
    author: "Vu Huu Tiep",
    img: "https://nhasachmienphi.com/images/thumbnail/nhasachmienphi-machine-learning-co-ban.jpg",
    alreadyRead: true,
  },
  {
    title: "Programming ASP.NET MVC 4",
    author: "Jess Chadwick - Todd Snyder - Hrusikesh Panda",
    img: "https://nhasachmienphi.com/images/thumbnail/nhasachmienphi-programming-asp-net-mvc-4.jpg",
    alreadyRead: true,
  },
];

const bookList = document.createElement("ul");
//Iterate through the array of books.
books.forEach(({ title, author, img, alreadyRead }) => {
  const bookItem = document.createElement("li");
  const bookImg = document.createElement("img");
  //create a p element with the book title and author and append it to the page.
  const bookDesc = document.createElement("p");

  bookImg.src = img;
  bookImg.width = "200";
  bookItem.appendChild(bookImg);

  bookDesc.textContent = `${title} by ${author}`;
  bookItem.appendChild(bookDesc);

  //Change the style of the book depending on whether you have read it or not.
  if (alreadyRead) {
    bookItem.style.color = "grey";
  }

  bookList.appendChild(bookItem);
});
document.body.appendChild(bookList);
