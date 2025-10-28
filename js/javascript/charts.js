////////////////////////charts////////////////////////////////
// Cars_Chart
var Cars_Chart = null;

function createHorizontalBarChart() {
    var chartContainer = document.getElementById("Cars_Chart").parentElement;
    var canvas = document.getElementById("Cars_Chart");
    
    if (Cars_Chart) {
        Cars_Chart.destroy();
    }
    
    Cars_Chart = new Chart(canvas, {
        type: "bar",
        data: {
            labels: ['متاحة', 'مؤجرة', 'غير متاحة','المحجوزات'],
            datasets: [
                {
                    data: ["100", "125", "300","5"],
                    backgroundColor: [
                        "rgba(255, 150, 38, 1)",
                        "rgba(151, 71, 255, 1)",
                        "rgba(255, 38, 38, 1)",
                        "rgba(54, 162, 235, 1)",
                    ],
                }
            ]
        },
        options: {
            indexAxis: 'y',
            responsive: true,
            maintainAspectRatio: false,
            animation: {
                onComplete: function() {
                    setTimeout(() => {
                        chartContainer.style.opacity = '1';
                    }, 100);
                }
            },
            plugins: {
                legend: {
                    display: false
                },
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
            barPercentage: 0.6, 
            categoryPercentage: 0.8,
         
        }
    });
}

// Contracts_Chart 
var Contracts_Chart = null;

function createContracts_Chart() {
    var chartContainer = document.getElementById('Contracts_Chart').parentElement;
    var canvas = document.getElementById('Contracts_Chart');
    
    if (Contracts_Chart) {
        Contracts_Chart.destroy();
    }
    
    const Contracts_ChartData = {
        labels: ['منتهيه','اليوم',  'غدا', 'لاحقا'],
        datasets: [{
            data: [50, 300, 200, 350],
            backgroundColor: [ 'rgba(242, 36, 36, 1)','rgba(242, 143, 36, 1)', '#9966FF','rgba(54, 162, 235, 1)'],
        }]
    };

    Contracts_Chart = new Chart(canvas, {
        type: 'doughnut',
        data: Contracts_ChartData,
        options: {
            responsive: true,
            maintainAspectRatio: false,
            animation: {
                onComplete: function() {
                    setTimeout(() => {
                        chartContainer.style.opacity = '1';
                    }, 100);
                }
            },
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
            },
            
        }
    });
}

// Branch_Balance_Chart 
var Branch_Balance_Chart = null;

function createBarChart() {
    var chartContainer = document.getElementById("Branch_Balance_Chart").parentElement;
    var canvas = document.getElementById("Branch_Balance_Chart");
    
    if (Branch_Balance_Chart) {
        Branch_Balance_Chart.destroy();
    }
    
    Branch_Balance_Chart = new Chart(canvas, {
        type: "bar",
        data: {
            labels: ['نقدًا', 'مدى', 'فيزا', 'امريكن اكسبريس', 'ماستر كارد'],
            datasets: [{
                data: [250000, 20000, 5000, 4500, 4000],
                backgroundColor: [
                    "rgba(255, 99, 132, 1)",
                    "rgba(54, 162, 235, 1)",
                    "rgba(255, 206, 86, 1)",
                    "rgba(75, 192, 192, 1)",
                    "rgba(153, 102, 255, 1)",
                ],
                barThickness: 40,
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            animation: {
                onComplete: function() {
                    setTimeout(() => {
                        chartContainer.style.opacity = '1';
                    }, 100);
                }
            },
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    backgroundColor: "#7A7A7A",
                    bodyFontColor: "#060A10",
                    borderColor: '#ffffff',
                    borderWidth: 1,
                    xPadding: 15,
                    yPadding: 15,
                    displayColors: false,
                    caretPadding: 10,
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
                            size: 9
                        },
                    }
                },
                y: {
                    grid: {
                        display: false
                    },
                    beginAtZero: false,
                    ticks: {
                        font: {
                            family: "'Cairo', sans-serif",
                            size: 11
                        }
                    }
                },
            },
          
        }
    });
}

// Employee_Balance_Chart
var Employee_Balance_Chart = null;

function createEmployee_Balance_Chart() {
    var chartContainer = document.getElementById("Employee_Balance_Chart").parentElement;
    var canvas = document.getElementById("Employee_Balance_Chart");
    
    if (Employee_Balance_Chart) {
        Employee_Balance_Chart.destroy();
    }
    
    Employee_Balance_Chart = new Chart(canvas, {
        type: "bar",
        data: {
            labels: ['نقدًا', 'مدى', 'فيزا', 'اميركن اكسبرس', 'ماستر كارد ',],
            datasets: [
                {
                    data: [200, 1000, 45, 1800, 1600, 1200],
                    backgroundColor: [
                        "rgba(255, 99, 132, 1)",
                        "rgba(54, 162, 235, 1)",
                        "rgba(255, 206, 86, 1)",
                        "rgba(75, 192, 192, 1)",
                        "rgba(153, 102, 255, 1)",
                    ],
                    barThickness: 40,
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            animation: {
                onComplete: function() {
                    setTimeout(() => {
                        chartContainer.style.opacity = '1';
                    }, 100);
                }
            },
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    backgroundColor: "#7A7A7A",
                    bodyFontColor: "#060A10",
                    borderColor: '#ffffff',
                    borderWidth: 1,
                    xPadding: 15,
                    yPadding: 15,
                    displayColors: false,
                    caretPadding: 10,
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
                            size: 9
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
            }
        }
    });
}

function debounce(func, timeout = 100) {
    let timer;
    return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(() => { func.apply(this, args); }, timeout);
    };
}

const handleResize = debounce(() => {
    if (Cars_Chart) {
        Cars_Chart.resize();
    }
    if (Branch_Balance_Chart) {
        Branch_Balance_Chart.resize();
    }
    if (Contracts_Chart) {
        Contracts_Chart.resize();
    }
    if (Employee_Balance_Chart) {
        Employee_Balance_Chart.resize();
    }
});

document.addEventListener('DOMContentLoaded', function() {
    createHorizontalBarChart();
    createBarChart();
    createContracts_Chart();
    createEmployee_Balance_Chart();
    
    window.addEventListener('resize', handleResize);
    window.addEventListener('orientationchange', handleResize);
});

/////////////////////////////////////////////////////////////

