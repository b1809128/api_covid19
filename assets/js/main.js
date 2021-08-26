// https://documenter.getpostman.com/view/10808728/SzS8rjbc#27454960-ea1c-4b91-a0b6-0468bb4e6712
// https://corona.lmao.ninja/v2/countries/vn
const url = "https://corona.lmao.ninja/v2/countries/vn";

fetch(url)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log(data);
        // *Data Total
        var num_format_infected = new Intl.NumberFormat().format(data.cases)
        var num_format_recovered = new Intl.NumberFormat().format(data.recovered)
        var num_format_death = new Intl.NumberFormat().format(data.deaths)
        var num_format_treat = new Intl.NumberFormat().format(data.active)

        // *Data New
        var numNewInfected = new Intl.NumberFormat().format(data.todayCases)
        var numNewRecovered = new Intl.NumberFormat().format(data.todayRecovered)
        var numNewDeath = new Intl.NumberFormat().format(data.todayDeaths)
        var numNewTreat = new Intl.NumberFormat().format(data.todayCases)

        if (numNewInfected == 0) {
            numNewInfected = "Loading..."
        } else {
            numNewInfected = new Intl.NumberFormat().format(data.todayCases)
        }

        arr_update = [num_format_infected, num_format_recovered, num_format_death, num_format_treat];
        // *Infected, Recovered, Death
        for (let i = 0; i < document.querySelectorAll('.card__number').length; i++) {
            document.querySelectorAll('.card__number')[i].innerHTML = arr_update[i];
        }

        // *Date Last Update
        var get_Date = new Date(data.updated);
        var string_date = get_Date.getDate() + "/" + (get_Date.getMonth() + 1) + "/" + get_Date.getFullYear();
        var get_Time = new Date();
        var string_time = get_Time.getHours() + ":" + get_Time.getMinutes() + ":" + get_Time.getSeconds();

        for (let i = 0; i < document.querySelectorAll('.card__date').length; i++) {
            document.querySelectorAll('.card__date')[i].innerHTML = "Last Update: " + string_date + "-" + string_time + " GMT+7:00";
        }

        var arr_new = [numNewInfected, numNewRecovered, numNewDeath, numNewTreat];

        //* Number Active
        for (let i = 0; i < document.querySelectorAll('.card__number-active').length; i++) {
            document.querySelectorAll('.card__number-active')[i].innerHTML = "+ " + arr_new[i];
        }


        var xValues = ["Infected", "Recovered", "Death", "Treatment"];
        var yValues = [data.cases, data.recovered, data.deaths, data.active];
        var barColors = ["rgba( 255, 57, 43, 0.6)", "#28a745", "#1877f2", "rgba( 225, 132, 37, 1)"];

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