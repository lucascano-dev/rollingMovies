const btnPanelExpandido_ControlPanel = document.querySelector('#btn-manipular-panel-izquierdo-expandido');
const btnPanelOculto_ControlPanel = document.querySelector('#btn-manipular-panel-izquierdo-oculto');
const panelExpandido = document.querySelector('.container-panel-lateral-expandido');
const panelOculto = document.querySelector('.container-panel-lateral-oculto');

if (JSON.parse(localStorage.getItem('estadoPanel')) === 'show') {
  panelExpandido.style.display = 'block';
} else {
  panelExpandido.style.display = 'none';
  localStorage.setItem('estadoPanel', JSON.stringify('hide'));
}

btnPanelExpandido_ControlPanel.addEventListener('click', () => {
  if (JSON.parse(localStorage.getItem('estadoPanel')) === 'show') {
    localStorage.setItem('estadoPanel', JSON.stringify('hide'));
    panelExpandido.style.display = 'none';
  }
});

btnPanelOculto_ControlPanel.addEventListener('click', () => {
  if (JSON.parse(localStorage.getItem('estadoPanel')) === 'hide') {
    localStorage.setItem('estadoPanel', JSON.stringify('show'));
    panelExpandido.style.display = 'block';
  }
});
