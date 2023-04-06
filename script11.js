function calculatePerimeter() {
    let length = document.getElementById("length").value;
    let width = document.getElementById("width").value;
    let perimeter = 2 * (Number(length) + Number(width));
    document.getElementById("result").innerHTML = "Perimeter: " + perimeter;
}
