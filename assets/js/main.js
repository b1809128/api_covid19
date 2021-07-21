// https://documenter.getpostman.com/view/10808728/SzS8rjbc#27454960-ea1c-4b91-a0b6-0468bb4e6712
const url = "https://api.covid19api.com/summary";

fetch(url)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log(data);
        var num_format_infected = new Intl.NumberFormat().format(data.Global.TotalConfirmed)
        var num_format_recovered = new Intl.NumberFormat().format(data.Global.TotalRecovered)
        var num_format_death = new Intl.NumberFormat().format(data.Global.TotalDeaths)

        // var num_format_infected = data.Global.TotalConfirmed
        // var num_format_recovered = data.Global.TotalRecovered
        // var num_format_death = data.Global.TotalDeaths


        var numNewInfected = new Intl.NumberFormat().format(data.Global.NewConfirmed)
        var numNewRecovered = new Intl.NumberFormat().format(data.Global.NewRecovered)
        var numNewDeath = new Intl.NumberFormat().format(data.Global.NewDeaths)

        // *Infected, Recovered, Death
        document.querySelectorAll('.card__number')[0].innerHTML = num_format_infected;
        document.querySelectorAll('.card__number')[1].innerHTML = num_format_recovered;
        document.querySelectorAll('.card__number')[2].innerHTML = num_format_death;

        // *Date Last Update
        var get_Date = new Date(data.Date);
        var string_date = get_Date.getDate() + " / " + (get_Date.getMonth() + 1) + " / " + get_Date.getFullYear();
        document.querySelectorAll('.card__date')[0].innerHTML = "Last Update: " + string_date;
        document.querySelectorAll('.card__date')[1].innerHTML = "Last Update: " + string_date;
        document.querySelectorAll('.card__date')[2].innerHTML = "Last Update: " + string_date;

        //* Number Active
        document.querySelectorAll('.card__number-active')[0].innerHTML = "+ " + numNewInfected;
        document.querySelectorAll('.card__number-active')[1].innerHTML = "+ " + numNewRecovered;
        document.querySelectorAll('.card__number-active')[2].innerHTML = "+ " + numNewDeath;


        var xValues = [100000000, 200000000, 300000000];
        var yValues = [data.Global.TotalConfirmed, data.Global.TotalRecovered, data.Global.TotalDeaths];
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