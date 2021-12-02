namespace ledTricks {
    /**
    * Blinks the LED once.
    */
    //% block
    export function blink() {
        pins.digitalWritePin(DigitalPin.P0, 1)
        pause(500)
        pins.digitalWritePin(DigitalPin.P0, 0)
        pause(500)
    }
}
