//Change the body style so it has a font-family of "Arial, sans-serif".
document.body.style.fontFamily = "Arial, sans-serif";

//Replace each of the spans (nickname, favorites, hometown) with your own information.
document.getElementById("nickname").innerHTML = "Mong Thanh";
document.getElementById("favorites").innerHTML = "Fish";
document.getElementById("hometown").innerHTML = "Da Nang";

//Iterate through each li and change the class to "listitem".
const listItems = document.querySelectorAll("li");
listItems.forEach((listItem) => {
  listItem.classList.add("list-item");
});

//Create a new img element and set its src attribute to a picture of you.
//Append that element to the page.
const img = document.createElement("img");
img.src =
  "https://scontent.fdad3-1.fna.fbcdn.net/v/t39.30808-6/341888223_239229195346544_6411272759682302030_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=jqgwftyogmcAX-4q769&_nc_ht=scontent.fdad3-1.fna&oh=00_AfCvH7sWZNh1CHOOaG8A2Yqv_LYG5KK4xdghNEG_rXaMKA&oe=64EC62DC";
img.alt = "an image of me";
img.width = "500";
document.body.appendChild(img);
