////////////////////////charts////////////////////////////////
var available_cars = ["2005", "2012", "2001", "2005", "2012"];
var not_available_cars = ["2005", "2001", "2001"];
var rented_cars = ["2012", "2005" ,"2003",'2023'];

var barChart1 = document.getElementById("horizontal_bar").getContext("2d");
var myChart1 = new Chart(barChart1, {
  type: "bar",
  data: {
    labels: ['متاحة', 'مؤجرة', 'غير متاحة'],
    datasets: [
      {
        data: [available_cars.length, rented_cars.length, not_available_cars.length],
        backgroundColor: [
          "rgba(255, 150, 38, 1)",
          "rgba(151, 71, 255, 1)",
          "rgba(255, 38, 38, 1)",
        ],
       
      }
    ]
  },
  options: {
    indexAxis: 'y',
    plugins: {
      legend: {
        display: false
      },
      tooltip: {
        callbacks: {
          label: function(context) {
            var label =[];
            label =getCountByVersion(context.dataIndex);
            
            return label;
          }
        }
      }
    },
    scales: {
      x: {
        grid: {
          display: false
        },
        ticks: {
          font: {
            family: "'Cairo', sans-serif",
            size: 11
          }
        }
      },
      y: {
        grid: {
          display: false
        },
        beginAtZero: true,
        ticks: {
          font: { 
            family: "'Cairo', sans-serif",
            size: 11
          }
        }
      }
    },
    layout: {
      padding: {
        left: 10,
        right: 10,
        top: 10,
        bottom: 10
      }
    },
    responsive: true,
    maintainAspectRatio: false,
    barPercentage: 0.6, 
    categoryPercentage: 0.8 
  }
});
function getCountByVersion(dataIndex) {
  var versions = {};
  var cars;
  
  switch (dataIndex) {
    case 0:
      cars = available_cars;
      break;
    case 1:
      cars = rented_cars;
      break;
    case 2:
      cars = not_available_cars;
      break;
    default:
      cars = [];
  }
  
  cars.forEach(function(version) {
    if (!versions[version]) {
      versions[version] = 1;
    } else {
      versions[version]++;
    }
  });
  
  var countByVersion = [];
  Object.keys(versions).forEach(function(version) {
    countByVersion.push(versions[version] + ':' + version+"\n\r");
  });
  
  return countByVersion;
}
//pieChart
const pieChartEl = document.getElementById('pieChart');
const pieChartData = {
  labels: ['منتهيه','اليوم',  'غدا', 'لاحقا'],
  datasets: [{
    data: [50, 300, 200, 350],
    backgroundColor: [ 'rgba(242, 36, 36, 1)','rgba(242, 143, 36, 1)', '#9966FF','rgba(54, 162, 235, 1)'],

  }]
};

const pieChart = new Chart(pieChartEl, {
  type: 'doughnut',
  data: pieChartData,
  options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      tooltip: {
        backgroundColor: "#7A7A7A",
        bodyFontColor: "#060A10",
        borderColor: '#ffffff',
        borderWidth: 1,
        xPadding: 15,
        yPadding: 15,
        displayColors: false,
        caretPadding: 10,
        
      },
      legend: {
        position: 'bottom',
        rtl: true,
        labels: {
          boxWidth: 20, 
          padding: 20,
          font: {
            family: "'Cairo', sans-serif",
            size: 11
          }
        }
    }
    }
  }
});
// Bar Chart 2
var barChart2 = document.getElementById("barChart2").getContext("2d");
var myChart = new Chart(barChart2, {
  type: "bar",
  data: {
    labels: ['نقدًا', 'مدى', 'فيزا', 'اكسبرس', 'ماستر ', 'تحويل'],
    datasets: [
      {
        data: [100, 60, 50, 45, 40, 30],
        backgroundColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)"
        ],
       
      }
    ]
  },
  options: {
    responsive: true,
    plugins: {
      
      legend: {
        display: false
      }

    },
 scales: {
      x: {
        grid: {
          display: false
        },
        ticks: {
          font: {
            family: "'Cairo', sans-serif",
            size: 11
          }
        }
      },
      y: {
        grid: {
          display: false
        },
        beginAtZero: true,
        ticks: {
          font: { 
            family: "'Cairo', sans-serif",
            size: 11
          }
        }
      }
    },
  }
});

var chrt = document.getElementById("chartId").getContext("2d");
var chartId = new Chart(chrt, {
  type: "bar",
  data: {
    labels: ['نقدًا', 'مدى', 'فيزا', 'اكسبرس', 'ماستر ', 'تحويل'],
    datasets: [
      {
        data: [100, 50, 45, 60, 40, 30],
        backgroundColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)"
        ],
       

      }
    ]
  },
  options: {
     responsive: true,
    plugins: {
      legend: {
        display: false
      }
    },
   scales: {
      x: {
        grid: {
          display: false
        },
        ticks: {
          font: { // <-- Correct placement for X-axis labels
            family: "'Cairo', sans-serif",
            size: 11
          }
        }
      },
      y: {
        grid: {
          display: false
        },
        beginAtZero: true,
        ticks: {
          font: { // <-- Correct placement for Y-axis labels
            family: "'Cairo', sans-serif",
            size: 11
          }
        }
      }
    },
  }
});


/////////////////////////////////////////////////////////////

function setActiveButton(buttonIndex) {
  // Get all the buttons
  var buttons = document.querySelectorAll('.btn-secondary1');

  // Remove the active class from all buttons
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].classList.remove('active1');
  }

  // Set the active class for the clicked button
  buttons[buttonIndex].classList.add('active1');
}
/////////////funcation to sunbmit brunch name without button/////////////
$(document).ready(function () {
  $("#brunch_name").change(function () {
    $("#formID").submit();
  });
});


////////////js function to view the charts///////////

const employeeCustody = document.getElementById('employee-custody');

// Function to start or stop the neonShadow effect
function toggleNeonShadow() {
  const brunchButton = document.getElementById("pulse-button-brunch");
  const brunchButton_img = document.getElementById("brunch_button-img");

  if (employeeCustody.innerText >= 100000) {
    brunchButton.classList.add('neonShadow');
    brunchButton_img.classList.add('anm');
  } else {
    brunchButton.classList.remove('neonShadow');
    brunchButton_img.classList.remove('anm');
  }

  const formattedEmployeeCustody = parseInt(employeeCustody.innerText.replace(/,/g, '')).toLocaleString();
  employeeCustody.innerText = formattedEmployeeCustody;
  
}



