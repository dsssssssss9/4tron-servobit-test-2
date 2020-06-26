input.onButtonPressed(Button.A, function () {
    ServoBit.setServo(0, -90)
    ServoBit.ledClear()
    basic.pause(100)
    for (let index = -90; index <= 90; index++) {
        ServoBit.moveServo(0, index, 1)
        
    }
})
ServoBit.ledClear()
ServoBit.ledBrightness(12)
ServoBit.startFlash(0x18E600, 100)
ServoBit.centreServos()
