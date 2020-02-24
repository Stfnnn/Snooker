
			const sliderImages = document.querySelectorAll('.slide');
			const arrowLeft = document.querySelector('#arrow-left');
			const arrowRight = document.querySelector('#arrow-right');
			let current = 0;
            //reset slider
			function resetSlide() {
				for(let i = 0; i < sliderImages.length; i++) {
					sliderImages[i].style.display='none';
				}
			}
			
			//init the slider
			function startSlide() {
				resetSlide();
				sliderImages[0].style.display='block';
			}

			// show previous image
			function slideLeft() {
				resetSlide();
				sliderImages[current - 1].style.display = 'block';
				current--;
			}
			
			// show next image 
			
			function slideRight() {
				resetSlide();
				sliderImages[current + 1].style.display = 'block';
				current++;
			}

			// left arrow click event 
			arrowLeft.addEventListener('click' , function() {
				if(current === 0) {
					current = sliderImages.length;
				}
				slideLeft();
			});
			
			//right arrow click event 
			arrowRight.addEventListener('click' , function() {
				if(current === sliderImages.length - 1) {
					current = -1;
				}
				slideRight();
			});
			startSlide();
