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
                        'rgb(255, 255, 255)',
                        'rgb(255, 255, 255)',
                        'rgb(255, 255, 255)',
                        'rgb(255, 255, 255)',
                        'rgb(255, 255, 255)'
                    ],
                    borderColor: [
                        'rgb(0, 0, 0)',
                        'rgba(0, 0, 0, 1)',
                        'rgba(0, 0, 0, 1)',
                        'rgba(0, 0, 0, 1)',
                        'rgba(0, 0, 0, 1)'
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