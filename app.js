function triggerMode(){
    const num1 = parseFloat(document.getElementById('num1').value)
    const num2 = parseFloat(document.getElementById('num2').value)
    const result = num1 + num2
    document.getElementById('res').textContent = result
}