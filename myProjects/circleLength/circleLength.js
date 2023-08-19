function circleLength(diam) {
    let radius;
    radius = diam / 2;
    return Math.PI * (radius ** 2);
}
window.document.write('<p>10 ', circleLength(10),' </p>');
window.document.write('<p>20 ', circleLength(20), ' </p>')
window.document.write('<p>35 ', circleLength(35), ' </p>')
