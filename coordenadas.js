    function convertirAPolares() {
        const r = parseFloat(document.getElementById('r').value);
        const theta = parseFloat(document.getElementById('theta').value) * (Math.PI / 180); // Convertir a radianes
        const x = r * Math.cos(theta);
        const y = r * Math.sin(theta);
        document.getElementById('resultadoPolares').innerText = `X: ${x.toFixed(2)}, Y: ${y.toFixed(2)}`;
        }

    function convertirARectangulares() {
        const x = parseFloat(document.getElementById('x').value);
        const y = parseFloat(document.getElementById('y').value);
        const r = Math.sqrt(x * x + y * y);
        const theta = Math.atan2(y, x) * (180 / Math.PI); // Convertir a grados
        document.getElementById('resultadoRectangulares').innerText = `R: ${r.toFixed(2)}, θ: ${theta.toFixed(2)} grados`;
        }
