// Create a Name Space Object
const retrogradeApp = {};

// Getting current date for API url
let today = new Date();
let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
//console.log('this is the date', date);

//creating the function for displayRetrograde
retrogradeApp.displayRetrograde = function(answer) {
    const isRetrograde = answer.is_retrograde;
    //console.log('is mercury in retrograde?', isRetrograde);

    //if isRetrograde is false then change the p and pclass to No
    if(isRetrograde === false) {
        // $('p').removeClass('answerYes').addClass('answerNo');
        $('p.answerYes').replaceWith(`<p class="answerNo">&#10007; Not today! Mercury isn't in retrograde so you'll need a different excuse. </p>`);

    }
};

// Create a getRetrograde function
retrogradeApp.getRetrograde = function() {
    $.ajax({
        url: `https://mercuryretrogradeapi.com?date=${date}`,
        //url: `https://mercuryretrogradeapi.com?date=2019-11-01`, //date to test "true" against to see other result
        method: 'GET',
        dataType: 'json',
        data: {
            date: `${date}`,
            //date: "2019-11-01", //date to test "true" against
        }
    }).then(function(response) {
        retrogradeApp.displayRetrograde(response); 
    });
};

// Init Method
retrogradeApp.init = function() {
    retrogradeApp.getRetrograde();
};

// Document Ready
$(function() {
    retrogradeApp.init();
});
