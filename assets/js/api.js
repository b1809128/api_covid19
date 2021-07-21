// https://documenter.getpostman.com/view/10808728/SzS8rjbc#27454960-ea1c-4b91-a0b6-0468bb4e6712
// https://corona.lmao.ninja/v2/countries/vn
const url = "https://corona.lmao.ninja/v2/countries/vn";

fetch(url)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log(data);
        var num_format_infected = new Intl.NumberFormat().format(data.cases)
        var num_format_recovered = new Intl.NumberFormat().format(data.recovered)
        var num_format_death = new Intl.NumberFormat().format(data.deaths)
        var num_format_treat = new Intl.NumberFormat().format(data.active)


        var numNewInfected = new Intl.NumberFormat().format(data.todayCases)
        var numNewRecovered = new Intl.NumberFormat().format(data.todayRecovered)
        var numNewDeath = new Intl.NumberFormat().format(data.todayDeaths)
        var numNewTreat = new Intl.NumberFormat().format(data.critical)

        // *Infected, Recovered, Death
        document.querySelectorAll('.card__number')[0].innerHTML = num_format_infected;
        document.querySelectorAll('.card__number')[1].innerHTML = num_format_recovered;
        document.querySelectorAll('.card__number')[2].innerHTML = num_format_death;
        document.querySelectorAll('.card__number')[3].innerHTML = num_format_treat;

        // *Date Last Update
        var get_Date = new Date(data.updated);
        var string_date = get_Date.getDate() + " / " + (get_Date.getMonth() + 1) + " / " + get_Date.getFullYear();

        for (let i = 0; i < document.querySelectorAll('.card__date').length; i++) {
            document.querySelectorAll('.card__date')[i].innerHTML = "Last Update: " + string_date;
        }

        var arr = [numNewInfected, numNewRecovered, numNewDeath, numNewTreat];

        //* Number Active
        for (let i = 0; i < document.querySelectorAll('.card__number-active').length; i++) {
            document.querySelectorAll('.card__number-active')[i].innerHTML = "+ " + arr[i];
        }


        var xValues = ["Infected", "Recovered", "Death"];
        var yValues = [data.cases, data.recovered, data.deaths];
        var barColors = ["rgba( 255, 0, 0, 0.5)", "rgba( 0, 255, 0, 0.5)", "rgba( 0, 0, 255, 0.5)"];

        new Chart("myChart", {
            type: "bar",
            data: {
                labels: xValues,
                datasets: [{
                    backgroundColor: barColors,
                    data: yValues
                }]
            },
            options: {
                legend: { display: false },
                title: {
                    display: true,
                    text: "Quoc Huy Developer 2021"
                }
            }
        });
    })

// jQuery(document).ready(function($) {
//     $('.card__number').counterUp({
//         delay: 10,
//         time: 5000
//     })
// })