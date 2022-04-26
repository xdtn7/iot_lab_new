input.onButtonPressed(Button.A, function () {
    if (LED == 0) {
        serial.writeString("!1:LED:1#")
        basic.showLeds(`
            . # # # .
            . # . # .
            . # # # .
            . # . # .
            . # . # .
            `)
    } else if (LED == 1) {
        serial.writeString("!0:LED:0#")
        basic.showLeds(`
            . # # # .
            . # . # .
            # # # # .
            . # . # .
            . # . # .
            `)
    }
})
input.onButtonPressed(Button.B, function () {
    if (FAN == 2) {
        serial.writeString("!3:FAN:3#")
        basic.showLeds(`
            . # # . .
            . # . # .
            . # # # .
            . # . # .
            . # # . .
            `)
    } else if (FAN == 3) {
        serial.writeString("!2:FAN:2#")
        basic.showLeds(`
            . # # . .
            . # . # .
            # # # # .
            . # . # .
            . # # . .
            `)
    }
})
serial.onDataReceived(serial.delimiters(Delimiters.Hash), function () {
    cmd = serial.readUntil(serial.delimiters(Delimiters.Hash))
    basic.showString(cmd)
    if (cmd == "0") {
        LED = 0
        basic.showLeds(`
            . # # # .
            # # . # #
            # # . # #
            # # . # #
            . # # # .
            `)
    } else if (cmd == "1") {
        LED = 1
        basic.showLeds(`
            . . # . .
            . # # . .
            . . # . .
            . . # . .
            # # # # #
            `)
    } else if (cmd == "2") {
        FAN = 2
        basic.showLeds(`
            # # # # .
            . . . . #
            # # # # #
            # . . . .
            . # # # #
            `)
    } else if (cmd == "3") {
        FAN = 3
        basic.showLeds(`
            # # # # .
            . . . # .
            . # # # #
            . . . # .
            # # # # .
            `)
    }
})
let counter = 0
let cmd = ""
let FAN = 0
let LED = 0
LED = -1
FAN = -1
basic.forever(function () {
    if (counter == 5) {
    serial.writeString("!1:LIGHT:" + input.lightLevel() + "#")
    } else if (counter == 10) {
    serial.writeString("!1:TEMP:" + input.temperature() + "#")
    counter = 0
    }
    counter += 1
    basic.pause(1000)
})
