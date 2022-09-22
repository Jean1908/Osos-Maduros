var nombreUsuario = prompt("Ingresa tu nombre, por favor");
document.getElementById("nombre").innerHTML = nombreUsuario + " ";

const si = document.querySelector('#si')
si.addEventListener('click', () => {
  alert('Tenes problemas serios con el alcohol ' + nombreUsuario + ', para eso estamos tus amigos para apoyarte.')
})

const no = document.querySelector('#no')
no.addEventListener('mouseover', () => {
  const randomX = Math.random() * 100
  const randomy = Math.random() * 100
  no.style.position = 'absolute'
  no.style.top = randomy + '%'
  no.style.left = randomX + '%'
  no.style.transform = 'traslate(-${randomy}%)'
})