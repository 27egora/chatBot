const livenessIndicator = document.getElementById("liveness")

fetch('http://127.0.0.1:8000/api/liveness')
  .then((response) => {
    if (response.status == 200){
      liveness.style.backgroundColor = '#90EE90'
    } else {
      liveness.style.backgroundColor = '#ff6161'
    }
  })

setInterval(() => {
  if(livenessIndicator.style.display == 'block') {
    livenessIndicator.style.display = 'none'
  } else {
    livenessIndicator.style.display = 'block'
  }
}, 100);
