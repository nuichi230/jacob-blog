const canvas = document.querySelector('#drawingCanvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const jacob = document.createElement('img');
const cats2 = document.createElement('img');

let paintbrush = cats2;

cats2.src = 'cats2.png';
jacob.src = 'jacob.png';

const context = canvas.getContext('2d');

const handleMouseMove = (event) => {
	const left = event.clientX;
	const top = event.clientY;

	context.drawImage(paintbrush, left, top); 
}

const handleClick = () => {
	
	if (paintbrush === cats2) {
		paintbrush = jacob;
	} else {
		paintbrush = cats2;
	}
}


canvas.addEventListener('click', handleClick);
canvas.addEventListener('mousemove', handleMouseMove);

        const text = document.querySelector(".sec-text");
        const textLoad = () => {
            setTimeout(() => {
                text.textContent = "AN IT STUDENT";
            }, 0);
            setTimeout(() => {
                text.textContent = "A CHRISTIAN";
            }, 4000);
            setTimeout(() => {
                text.textContent = "A FILIPINO";
            }, 8000);
             //1s = 1000 milliseconds
        }
        textLoad();
        setInterval(textLoad, 12000);

        const message = document.querySelector(".p-message");
		const messageLoad = () => {
		    setTimeout(() => {
		        message.textContent = "DO NETWORKING";
		    }, 0);
		    setTimeout(() => {
		        message.textContent = "DO WEB DEV";
		    }, 4000);
		    setTimeout(() => {
		        message.textContent = "DO PROGRAMMING";
		    }, 8000);
		    setTimeout(() => {
		        message.textContent = "DO GRAPHIC DESIGN";
		    }, 12000);
		    setTimeout(() => {
		        message.textContent = "SERVE GOD MOST";
		    }, 12000);
		    setTimeout(() => {
		        message.textContent = "EXPLORE";
		    }, 12000);    // Adjust timing as per your preference
		}
		messageLoad();
		setInterval(messageLoad, 16000); // Adjust interval timing
  
