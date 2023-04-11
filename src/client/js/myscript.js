// import "../scss/styles.scss";
import "/src/assets/images/google.png";
import "/src/assets/images/Melon로고.jpg";
import "/src/assets/images/My Love.jpg";
import "/src/assets/images/play.jpg";
import "/src/assets/images/가시.jpg";
import "/src/assets/images/겁쟁이.jpg";
import "/src/assets/images/나에게로 떠나는 여행.jpg";
import "/src/assets/images/남자를 몰라.jpg";
import "/src/assets/images/다운로드.jpg";
import "/src/assets/images/뮤비.jpg";
import "/src/assets/images/비망록.jpg";
import "/src/assets/images/어쩌면.jpg";
import "/src/assets/images/장바구니.jpg";
import "/src/assets/images/하트.jpg";
import "/src/assets/css/mycss.css";

// let imgs= document.querySelectorAll('.item2-8 img');
let img =document.querySelector('.imgitme');
console.log("Fadsffa");

    img.addEventListener('click', function() {
        var modal = document.querySelector(".modal");
        var modalImg = document.querySelector(".modalImage");
        var captionText = document.querySelector("..modal-caption");
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
    });
// for(let i=0; i<imgs.length; i++) {
//     imgs[i].addEventListener("click", function() {
//         var modal = document.querySelector(".modal");
//         var modalImg = document.querySelector(".modalImage");
//         var captionText = document.querySelector("..modal-caption");
//         modal.style.display = "block";
//         modalImg.src = this.src;
//         captionText.innerHTML = this.alt;
//     });
// }

function myclick() {
    window.alert("Fasfa");
            // var modal = document.querySelector(".modal");
            // var modalImg = document.querySelector(".modalImage");
            // var captionText = document.querySelector("..modal-caption");
            // modal.style.display = "block";
            // modalImg.src = this.src;
            // captionText.innerHTML = this.alt;
        }


function openModal() {
    // var modal = document.querySelector(".modal");
    // // var modalImage = document.querySelector(".modalImage");
    // modal.style.display = "block";
    console.log("테스트");
    // modalImage.style.display="block";
    
  }
  
//   var modal = document.querySelector(".modal");
//   window.onclick = function(event) {
//     if (event.target == modal) {
//       modal.style.display = "none";
//       console.log("나와라");
//     }
//   }
