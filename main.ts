input.onButtonPressed(Button.B, function () {
    einsWeiter()
    led.plot(x, y)
})
function einsWeiter () {
    led.unplot(x, y)
    if (x == 4) {
        y = (y + 1) % 5
        x = 0
    } else {
        x = (x + 1) % 5
    }
}
let y = 0
let x = 0
x = 0
y = 0
led.plot(x, y)
