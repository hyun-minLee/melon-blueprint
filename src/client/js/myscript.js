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
import "/src/assets/images/중지.png";
import "/src/assets/images/재생.png";
import "/src/assets/images/뒤로가기.png";
import "/src/assets/images/(클릭)장바구니.jpg";
import "/src/assets/images/오른쪽화살표.png";
import "/src/assets/images/왼쪽화살표.png";
import "/src/assets/images/왼쪽화살표2.png";
import "/src/assets/images/교차.png";
import "/src/assets/images/재생2.png";
import "/src/assets/images/오른쪽화살표2.png";
import "/src/assets/images/반복.png";
import "/src/assets/css/mycss.css";
import 'bootstrap/dist/css/bootstrap.min.css';



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
        let submitdata=[];
        // DOM 요소가 생성된 후에 실행되어야 하는 코드
        let myModal = document.getElementById('myModal');
        myModal.style.display = 'none';
        let modalclose = document.querySelector('.modal-close');
        let imgitem = document.querySelectorAll('.imgitem');
        let btn = document.querySelector('.btn.btn-primary');
        let btn2 = document.querySelector('.btn.btn-secondary');
        let basket = document.querySelectorAll('.basket');
        let addbasket = document.querySelectorAll('.addbasket');
        let item2 = document.querySelectorAll('.item2');
        let container = document.querySelector('.container');
        for(let i=0; i<imgitem.length; i++) {
            imgitem[i].addEventListener('click', function() {
            myModal.style.display = 'block';
            document.querySelector('.frame').src=imgitem[i].alt
            });
        }

        for(let i=0; i<basket.length; i++) {    
            basket[i].addEventListener('click', function() {
                btn.style.display='block';
                basket[i].style.display='none';
                addbasket[i].style.display='block';
                let object = [];
                let image= item2[i].children[3].children[0].src;
                let title = item2[i].children[4].children[0].innerHTML;
                let singer = item2[i].children[4].children[1].innerHTML;
                let like = item2[i].children[6].children[1].innerHTML;
                object.push({'image': image});
                object.push({'title': title});
                object.push({'singer': singer});
                object.push({'like': like});
                submitdata.push(object);


                basket[i].style.display='none'; 
                // basket[i].style.display.filter;

                if(submitdata.length>0) {
                    console.log(submitdata);
                }
            });
        }

        btn.addEventListener('click', function() {
            console.log("버튼");
            window.location.href=`/playlist?submitdata=${JSON.stringify(submitdata)}`;
        });

        btn2.addEventListener('click', function() {
            console.log("장바구니 버튼");
            window.location.href='/mylist';
            // const data = {
            //     name: 'John',
            //     age: 30,
            //     email: 'john@example.com'
            //     };

            // fetch('/mylist', {
                
            //     method: 'POST',
            //     headers: {
            //     'Content-Type': 'application/json'
            //     },
            //     body: JSON.stringify(submitdata)
            // }).then(response => {
            //     if (!response.ok) {
            //         throw new Error(`HTTP error! status: ${response.status}`);
            //     }
            //     return response.text();
            // })
        });

        modalclose.addEventListener('click', function() {
            myModal.style.display='none';
        }); 
    });




    // btn2.addEventListener('click', function() {
        //     console.log("장바구니 버튼");
        //     // window.location.href='/playlist';
        //     // const data = {
        //     //     name: 'John',
        //     //     age: 30,
        //     //     email: 'john@example.com'
        //     //     };

        //     fetch('/mylist', {
                
        //         method: 'POST',
        //         headers: {
        //         'Content-Type': 'application/json'
        //         },
        //         body: JSON.stringify(submitdata)
        //     }).then(response => response.text()).then(submitdata => console.log(submitdata)).catch(error => console.error(error));
        // });