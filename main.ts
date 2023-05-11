// JEGYED50-BBC-MICROBIT-STUDY365-BLOCKS-03-03-B
// Fish Animation with 9 frame
basic.forever(function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . #
        . . . . .
        . . . . .
        `)
    basic.pause(100)
    basic.showLeds(`
        . . . . .
        . . . . #
        . . . # #
        . . . . #
        . . . . .
        `)
    basic.pause(100)
    basic.showLeds(`
        . . . . #
        . . . # #
        . . # # #
        . . . # #
        . . . . #
        `)
    basic.pause(100)
    basic.showLeds(`
        . . . # .
        . . # # .
        . # # # #
        . . # # .
        . . . # .
        `)
    basic.pause(100)
    basic.showLeds(`
        . . # . .
        . # # . #
        # # # # #
        . # # . #
        . . # . .
        `)
    basic.pause(100)
    basic.showLeds(`
        . # . . .
        # # . # .
        # # # # .
        # # . # .
        . # . . .
        `)
    basic.pause(100)
    basic.showLeds(`
        # . . . .
        # . # . .
        # # # . .
        # . # . .
        # . . . .
        `)
    basic.pause(100)
    basic.showLeds(`
        . . . . .
        . # . . .
        # # . . .
        . # . . .
        . . . . .
        `)
    basic.pause(100)
    basic.showLeds(`
        . . . . .
        # . . . .
        # . . . .
        # . . . .
        . . . . .
        `)
    basic.pause(100)
    basic.clearScreen()
    basic.pause(500)
})
