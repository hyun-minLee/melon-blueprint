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
import YouTubePlayer from 'youtube-player';

    window.addEventListener('DOMContentLoaded', function() {
        
        // DOM 요소가 생성된 후에 실행되어야 하는 코드
        let item3 = document.querySelectorAll('.item3');
        let item1 = document.querySelector('.item1');
        let singer = document.querySelector('.playing__singer');
        let title = document.querySelector('.playing__title');
        let singer_bar = document.querySelector('.item4-1-1');
        let title_bar = document.querySelector('.item4-1-2');
        let playbutton = document.querySelector('.container2-item5-3-play');
        let stopbutton = document.querySelector('.container2-item5-3-stop');
        // const videoContainer = document.querySelector('video');
        const videoItem = document.querySelector('.video-item');
        // videoItem.innerHTML = '<iframe src="https://www.youtube.com/embed/1-Lm2LUR8Ss" frameborder="0" allowfullscreen></iframe>';
        let videoId='';

        let player = YouTubePlayer(videoItem, {
            videoId: videoId,
            width: 150,
            height: 150,
            playerVars: {  
            },
          });


        playbutton.addEventListener('click', function() {
            player.loadVideoById(videoId);
            player.playVideo();
        })

        for(let i=0; i<item3.length; i++) {
            item3[i].addEventListener('mousedown', function() {

                item1.src = item3[i].childNodes[0].src;
                let songurl = item3[i].childNodes[0].alt;
                let url = songurl.split('/').pop();
                console.log(url);
                singer.innerHTML = item3[i].childNodes[1].childNodes[0].innerHTML;
                singer_bar.innerHTML = item3[i].childNodes[1].childNodes[0].innerHTML;
                title.innerHTML = item3[i].childNodes[1].childNodes[1].innerHTML;
                title_bar.innerHTML = item3[i].childNodes[1].childNodes[1].innerHTML;
                // videoItem.innerHTML = `<iframe class='my-video-frame' src= ${songurl} frameborder="0" allowfullscreen></iframe>`;
                item3[i].classList.add('click');
                videoId=url;
            });

            item3[i].addEventListener('mouseout', function() {
                item3[i].classList.remove('click');
            });
        }

  
    });



