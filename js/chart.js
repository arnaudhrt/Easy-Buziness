const DATA_COUNT = 16
const NUMBER_CFG = { count: DATA_COUNT, min: 0, max: 100 }

const labels = [
  'Mai 2017',
  'Août 2017',
  'Dec. 2017',
  'Mars 2018',
  'Juin 2018',
  'Sept. 2018',
  'Dec. 2018',
  'Mars 2019',
  'Juin 2019',
  'Sept. 2019',
  'Dec. 2019',
  'Mars 2020',
  'Juin 2020',
  'Sept. 2020',
  'Dec. 2020',
  'Mars 2021',
]

const data = {
  labels: labels,
  datasets: [
    {
      label: 'BNP',
      data: Array.from({length: 16}, () => Math.floor(Math.random()* 100 )),
      borderColor: '#B1FFFA',
      backgroundColor: '#B1FFFA',
      tension: 0.4,
    },
    {
      label: 'Carmignac',
      data: Array.from({length: 16}, () => Math.floor(Math.random()* 100 )),
      borderColor: '#A4BCFF',
      backgroundColor: '#A4BCFF',
      tension: 0.5,
    },
    {
      label: 'COMGEST',
      data: Array.from({length: 16}, () => Math.floor(Math.random()* 100 )),
      borderColor: '#F3698B',
      backgroundColor: '#F3698B',
      tension: 0.5,
    },
    {
      label: 'Echiquier',
      data: Array.from({length: 16}, () => Math.floor(Math.random()* 100 )),
      borderColor: '#FECB6A',
      backgroundColor: '#FECB6A',
      tension: 0.5,
    },
    {
      label: 'DNCA',
      data: Array.from({length: 16}, () => Math.floor(Math.random()* 100 )),
      borderColor: '#443D76',
      backgroundColor: '#443D76',
      tension: 0.5,
    },
  ],
}

var ctx = document.getElementById('myChart').getContext('2d')
var myChart = new Chart(ctx, {
  type: 'line',
  data: data,
  options: {
    responsive: true,
    plugins: {
      tooltip: {
        mode: 'index',
        intersect: false,
      },
      legend: {
        labels: {
          
        },
      },
    },
    scales: {
      y: {
        min: 0,
        max: 100,
        ticks: {
          callback: function (index) {
            return index + '%'
          },
          stepSize: 25,
        },
      },
    },
  },
})
