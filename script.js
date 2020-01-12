// Initial Ratings
let ratings = {
    piotr: 0,
    bartosz: 0,
    jakub: 0,
    maciek: 0,
}

// Total Stars
const starsTotal = 5;

// Run getRatings when DOM loads
document.addEventListener('DOMContentLoaded', getRatings);
let ratingsUser = Object.values(ratings);
console.log(localStorage.ratingsUser);
ratingsUser = localStorage.ratingsUser;
console.log(ratingsUser);


$(".access").click(function () {
    console.log(localStorage);

    // Retrieve data
    ratingControll = document.getElementsByClassName('number-rating');
    console.log(ratings);

});

// Form Elements
const userSelect = document.getElementById('user-select');
const ratingControl = document.getElementById('rating-control');

// Init User
let user;

// User select change
userSelect.addEventListener('change', (e) => {
    user = e.target.value;
    console.log(e.target.value);
    
    // Enable rating control
    ratingControl.disabled = false;
    ratingControl.value = ratings[user];
});

// Rating control change
ratingControl.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        // code for enter
        const rating = e.target.value;

        if (rating > 5 || rating < 1) {
            alert('Please rate 1 - 5');
            return;
        }

        // Change rating
        ratings[user] = rating;

        $(document).ready(function () {
            $(".save").click(function () {
                // Get input name

                let ratingsUser = Object.values(ratings);
                console.log(ratings);

                // Store data
                localStorage.setItem("ratingsUser", ratingsUser);
            });
            
        });



        getRatings();
    }

});


// Get ratings
function getRatings() {
    for (let rating in ratings) {
        // Get percentage
        const starPercentage = (ratings[rating] / starsTotal) * 100;

        // Round to nearest 10
        const starPercentageRounded = `${Math.round(starPercentage / 10) * 10}%`;

        // Set width of stars-inner to percentage
        document.querySelector(`.${rating} .stars-inner`).style.width = starPercentageRounded;

        // Add number rating
        document.querySelector(`.${rating} .number-rating`).innerHTML = ratings[rating];

    }
}