<<<<<<< HEAD
fetch("https://reqres.in/api/users/23", {
  method: "POST",
})
  .then((res) => res.json())
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
=======
function reveal() {
    var reveals = document.querySelectorAll(".reveal")
    function reveal() {
        var reveals = document.querySelectorAll(".reveal");
        for (var i = 0; i < reveals.length; i++) {
          var windowHeight = window.innerHeight;
          var elementTop = reveals[i].getBoundingClientRect().top;
          var elementVisible = 150;
          if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
          } else {
            reveals[i].classList.remove("active");
          }
        }
      }
      window.addEventListener("scroll", reveal);

    }

// To check the scroll position on page load
reveal();
>>>>>>> 59ab6c07c4c93d818dc21a241336c2b38891cc88
