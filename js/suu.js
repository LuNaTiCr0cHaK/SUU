// Section 1: Countdown Timer
document.addEventListener('DOMContentLoaded', function () {
    const anniversaryDate = new Date(2022, 7, 8, 20, 50);

    function updateCountdown() {
        const currentDate = new Date();
        const timeElapsed = currentDate - anniversaryDate;

        const years = Math.floor(timeElapsed / (1000 * 60 * 60 * 24 * 365));
        const days = Math.floor((timeElapsed % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeElapsed % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeElapsed % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeElapsed % (1000 * 60) / 1000));

        const countdownElement = document.getElementById('countdown-timer');
        countdownElement.innerHTML = `${years} Year ${days}Days ${hours}Hour ${minutes}Minutes ${seconds}Seconds`;
    }

    // Show the countdown initially and update every second
    updateCountdown();
    setInterval(updateCountdown, 1000);
});

// Section 2: Access Confirmation
const content = document.getElementById('content');
const accessCodeInput = document.getElementById('access-code-input');
const accessConfirmButton = document.getElementById('access-confirm');
const countdownContainer = document.getElementById('countdown-container'); 

let isCodeCompleted = false; // Initialize isCodeCompleted to false

accessConfirmButton.addEventListener('click', function () {
    const enteredCode = accessCodeInput.value;

    if (enteredCode === '2003-01-01') {
        // If the code is correct, show the entire content and hide the access section
        content.style.display = 'block';
        document.getElementById('access-section').style.display = 'none';

        // Set ok to 2 to trigger the next block of code
        //ok = 2;

        let i = 0;
        let text1 = "Happy 15 Months babe";
        let text2 = "15 Months of Love and Togetherness!";
        let text3 = "SUU and RORO have been Together for";
        let speed = 100;
        let textIndex = 0; // Initialize textIndex to 0 to start with the first text
        
        function typeWriter(text, para) {
            if (i < text.length) {
                document.getElementById(para).innerHTML += text.charAt(i);
                i++;
                speed = Math.random() * 50 + 100;
            } else {
                i = 0; // Reset i to 0 for the next text
                clearInterval(typeInterval); // Stop the current typing
                if (textIndex < 2) {
                    textIndex++; // Move to the next text
                    typeInterval = setInterval(function () {
                        typeNextText();
                    }, 100);
                }
            }
        }
        
        var typeInterval;
        
        function typeNextText() {
            if (textIndex === 0) {
                typeWriter(text1, "txt1");
            } else if (textIndex === 1) {
                typeWriter(text2, "txt2");
            } else if (textIndex === 2) {
                typeWriter(text3, "txt3");
            }
        }
        
        typeInterval = setInterval(function () {
            typeNextText();
        }, 100);
        
        
    } else {
        // If the code is incorrect, deny access
        alert('Yo maile deko code hora? Ramrari type');
    }
});




// Hide the content and access section initially
//content.style.display = 'none';

// Section 3: Toggle Gift Text
const giftButton = document.getElementById('gift-button');
const giftText = document.getElementById('gift-text');

giftButton.addEventListener('click', function () {
    if (giftText.style.display === 'none') {
        giftText.style.display = 'block';
    } else {
        giftText.style.display = 'none';
    }
});





