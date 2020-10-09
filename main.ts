input.onButtonPressed(Button.A, function () {
    Cliente += -1
})
input.onButtonPressed(Button.AB, function () {
    Cliente = 0
})
input.onButtonPressed(Button.B, function () {
    Cliente += 1
})
let Cliente = 0
Cliente = 0
basic.forever(function () {
    if (Cliente >= 10) {
        basic.showString("CERRADO")
        basic.showIcon(IconNames.Sad)
        basic.clearScreen()
        basic.showIcon(IconNames.Sad)
        basic.clearScreen()
        basic.showIcon(IconNames.Sad)
        basic.clearScreen()
    }
})
basic.forever(function () {
    basic.showNumber(Cliente)
})
