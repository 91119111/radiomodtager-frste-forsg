radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 0) {
        tinkercademy.LED(DigitalPin.P1, OnOff.On)
    }
    if (receivedNumber == 1) {
        tinkercademy.LED(DigitalPin.P1, OnOff.Off)
    }
    if (receivedNumber == 2) {
        tinkercademy.LED(DigitalPin.P2, OnOff.On)
    }
    if (receivedNumber == 3) {
        tinkercademy.LED(DigitalPin.P2, OnOff.Off)
    }
    if (receivedNumber == 4) {
        OLED.writeStringNewLine("Så er der kage! :)")
    }
    if (receivedNumber == 5) {
        pins.servoWritePin(AnalogPin.P8, 0)
    }
    if (receivedNumber == 6) {
        pins.servoWritePin(AnalogPin.P8, 180)
    }
    if (receivedNumber == 7) {
        pins.servoWritePin(AnalogPin.P8, 90)
    }
})
radio.setGroup(125)
OLED.init(128, 64)
pins.servoWritePin(AnalogPin.P8, 90)
basic.forever(function () {
    if (tinkercademy.ADKeyboard(ADKeys.A, AnalogPin.P0)) {
        tinkercademy.LED(DigitalPin.P2, OnOff.On)
    }
    if (tinkercademy.ADKeyboard(ADKeys.B, AnalogPin.P0)) {
        tinkercademy.LED(DigitalPin.P2, OnOff.Off)
    }
})
