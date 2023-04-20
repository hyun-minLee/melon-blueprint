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
        let singer2 = document.querySelector('.container2-item3-1');
        let title2 = document.querySelector('.container2-item3-2');
        let progressBar = document.querySelector('.progress-bar');
        // videoItem.innerHTML = '<iframe src="https://www.youtube.com/embed/1-Lm2LUR8Ss" frameborder="0" allowfullscreen></iframe>';

        let player='';
        let videoId='';
        let intervalId;
        function onYouTubeIframeAPIReady() {
        
            player = new YT.Player(videoItem, {
                height: '150',
                width: '150',
                videoId: videoId, // Replace with your video ID
                events: {
                    'onReady': onPlayerReady,
                    'onStateChange': onPlayerStateChange
                }
            });
        }
        
        // let player = YouTubePlayer(videoItem, {
        //     videoId: videoId,
        //     width: 150,
        //     height: 150,
        //     playerVars: {  
        //     },
            
        // });

        function onPlayerReady(event) {
            console.log(event);
            console.log("onPlayerReady");
            player.loadVideoById(videoId);
          }
        
        function onPlayerStateChange(event) {
            
            if (event.data === YT.PlayerState.PLAYING) {
                console.log('Video is now playing');
                // 노래가 재생 중인 경우, 진행 바를 애니메이션으로 업데이트
                
                setInterval(function() {
                const currentTime = player.getCurrentTime(); // 현재 재생 중인 시간
                const duration = player.getDuration(); // 전체 노래의 길이
                const progress = (currentTime / duration) * 100; // 현재 시간에 따른 진행 바의 비율
                progressBar.style.width = progress + '%'; // 진행 바 업데이트
                console.log("1");
              }, 1000); // 1초마다 업데이트
               
            } else if (event.data === YT.PlayerState.PAUSED) {
                console.log('Video is now paused');
              
            } else if (event.data === YT.PlayerState.ENDED) {
                console.log('Video has ended');
        
            }
        }
        playbutton.addEventListener('click', function() {
            // player.loadVideoById(videoId);
            // player.playVideo();
            playbutton.style.display='none';
            stopbutton.style.display='block';
            if(player === '') { 
                onYouTubeIframeAPIReady()
                console.log("처음 초기세팅");
            } else {
                player.playVideo();
                console.log("일시정지했다가 시작");
            }

        });

        stopbutton.addEventListener('click', function() {
            playbutton.style.display='block';
            stopbutton.style.display='none';
            player.pauseVideo();
        });

        for(let i=0; i<item3.length; i++) {
            item3[i].addEventListener('mousedown', function() {

                item1.src = item3[i].childNodes[0].src;
                let songurl = item3[i].childNodes[0].alt;
                let url = songurl.split('/').pop();
                console.log(url);
                singer.innerHTML = item3[i].childNodes[1].childNodes[0].innerHTML;
                singer2.innerHTML = item3[i].childNodes[1].childNodes[0].innerHTML;
                singer_bar.innerHTML = item3[i].childNodes[1].childNodes[0].innerHTML;
                title.innerHTML = item3[i].childNodes[1].childNodes[1].innerHTML;
                title2.innerHTML = item3[i].childNodes[1].childNodes[1].innerHTML;
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


     // function PlayerStateChange(event) {
        //     if (event.data === PlayerState.PLAYING) {
        //       // 노래가 재생 중인 경우, 진행 바를 애니메이션으로 업데이트
        //         console.log("재생중입니다.");
        //         clearInterval(intervalId);
        //         intervalId = setInterval(function() {
        //         const currentTime = player.getCurrentTime(); // 현재 재생 중인 시간
        //         const duration = player.getDuration(); // 전체 노래의 길이
        //         const progress = (currentTime / duration) * 100; // 현재 시간에 따른 진행 바의 비율
        //         progressBar.style.width = progress + '%'; // 진행 바 업데이트
        //       }, 1000); // 1초마다 업데이트
        //     }
        // }

       

