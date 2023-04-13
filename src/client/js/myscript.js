import "../scss/styles.scss";
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
import "/src/assets/images/뒤로가기.jpg";
import "/src/assets/images/앞으로가기.jpg";
import "/src/assets/images/멈춤.jpg";
import "/src/assets/images/재생.jpg";
import "/src/assets/css/mycss.css";


    // img.addEventListener('click', function() {
    //     var modal = document.querySelector(".modal");
    //     var modalImg = document.querySelector(".modalImage");
    //     var captionText = document.querySelector("..modal-caption");
    //     modal.style.display = "block";
    //     modalImg.src = this.src;
    //     captionText.innerHTML = this.alt;
    // });
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


    window.addEventListener('DOMContentLoaded', function() {
        // DOM 요소가 생성된 후에 실행되어야 하는 코드
        let myModal = document.getElementById('myModal');
        myModal.style.display = 'none';
        let modalclose = document.querySelector('.modal-close');
        let imgitem = document.querySelectorAll('.imgitem');
        for(let i=0; i<imgitem.length; i++) {
            imgitem[i].addEventListener('click', function() {
            myModal.style.display = 'block';
            document.querySelector('.frame').src=imgitem[i].alt
            });
        }

        modalclose.addEventListener('click', function() {
            myModal.style.display='none';
        }); 
    });
