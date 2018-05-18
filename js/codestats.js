const xhttp = new XMLHttpRequest;
const urlCodeStats = 'https://codestats.net/api/users/fajfara';
let HTML;
let xpsCSS;
let JS;
let SCSS;
let Python;
const ctx = document.getElementById("myChart");

function loadData() {

    xhttp.open('GET', urlCodeStats);
    xhttp.onload = function() {
        var data = JSON.parse(xhttp.responseText);
        HTML = data.languages.HTML.xps;
        xpsCSS = data.languages.CSS.xps;
        JS = data.languages.JavaScript.xps;
        SCSS = data.languages.SCSS.xps;
        Python = data.languages.Python.xps;
        Chart.defaults.global.defaultFontColor = '#fff';
        var myChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['HTML', 'CSS', 'SCSS', 'Javascript', 'Python'],
                datasets: [{
                    label: 'Total XP by programming language',
                    data: [HTML, xpsCSS, SCSS, JS, Python],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.5)',
                        'rgba(54, 162, 235, 0.5)',
                        'rgba(55, 235, 229, 1)',
                        'rgba(255, 206, 86, 0.5)',
                        'rgba(75, 192, 192, 0.5)'
                    ],
                    borderColor: [
                        'rgba(255,99,132,1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(55, 235, 229, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)'
                    ],
                    borderWidth: 1
                }] 
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                },
                responsive: true
            }
        })

        
    }
    xhttp.send();
}

loadData();