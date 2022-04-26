serial.onDataReceived(serial.delimiters(Delimiters.Hash), function () {
    cmd = serial.readUntil(serial.delimiters(Delimiters.Hash))
    if (cmd == "0") {
        radio.sendValue("LED", 0)
    } else if (cmd == "1") {
        radio.sendValue("LED", 1)
    } else if (cmd == "2") {
        radio.sendValue("FAN", 0)
    } else if (cmd == "3") {
        radio.sendValue("FAN", 1)
    }
})
// basic.showString(name)
// basic.showNumber(value)
radio.onReceivedValue(function (name, value) {
    serial.writeString("!1:" + name + ":" + value + "#")
})
let cmd = ""
radio.setGroup(57)
