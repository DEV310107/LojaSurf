function previewBoard() {
  const shape = document.getElementById('shape').value;
  const size = document.getElementById('size').value;
  const color = document.getElementById('color').value;
  const name = document.getElementById('customName').value;
  const fins = document.getElementById('fins').checked;

  const preview = document.getElementById('previewArea');
  preview.innerHTML = `
    <h3>Prévia da Prancha:</h3>
    <p><strong>Formato:</strong> ${shape}</p>
    <p><strong>Tamanho:</strong> ${size}</p>
    <p><strong>Cor:</strong> <span style="display:inline-block;width:20px;height:20px;background:${color}"></span></p>
    <p><strong>Nome:</strong> ${name}</p>
    <p><strong>Quilhas:</strong> ${fins ? 'Sim' : 'Não'}</p>
  `;
}
