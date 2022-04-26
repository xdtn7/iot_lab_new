radio.onReceivedValue(function (name, value) {
    if (name == "LED") {
        if (value == 0) {
            basic.showIcon(IconNames.Heart)
            pins.digitalWritePin(DigitalPin.P0, 1)
        } else {
            basic.showIcon(IconNames.StickFigure)
            pins.digitalWritePin(DigitalPin.P0, 0)
        }
    } else if (name == "FAN") {
        if (value == 0) {
            basic.showIcon(IconNames.LeftTriangle)
            pins.digitalWritePin(DigitalPin.P2, 1)
        } else {
            basic.showIcon(IconNames.Sad)
            pins.digitalWritePin(DigitalPin.P2, 0)
        }
    }
})
radio.setGroup(57)
basic.forever(function () {
    radio.sendValue("TEMP", input.temperature())
    basic.pause(2000)
    radio.sendValue("LIGHT", input.lightLevel())
    basic.pause(2000)
})
