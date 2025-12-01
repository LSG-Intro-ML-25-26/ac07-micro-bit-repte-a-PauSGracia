let player_hand = 0
let cpu_hand = 0
input.onButtonPressed(Button.A, function () {
    player_hand += 1
    if (player_hand > 3) {
        player_hand = 1
    }
    if (player_hand == 1) {
        basic.showIcon(IconNames.SmallSquare)
    } else if (player_hand == 2) {
        basic.showIcon(IconNames.Square)
    } else {
        basic.showIcon(IconNames.Scissors)
    }
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showString("CPU")
    cpu_hand = randint(1, 3)
    if (cpu_hand == 1) {
        basic.showIcon(IconNames.SmallSquare)
        music.play(music.builtinPlayableSoundEffect(soundExpression.giggle), music.PlaybackMode.UntilDone)
    } else if (cpu_hand == 2) {
        basic.showIcon(IconNames.Square)
        music.play(music.tonePlayable(262, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    } else {
        basic.showIcon(IconNames.Scissors)
        music.play(music.createSoundExpression(WaveShape.Square, 1522, 0, 255, 0, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
    }
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    if (player_hand == cpu_hand) {
        basic.showString("DRAW")
    } else {
        if (player_hand == 1) {
            if (cpu_hand == 2) {
                basic.showString("LOSE")
            } else {
                basic.showString("WIN")
            }
        } else if (player_hand == 2) {
            if (cpu_hand == 3) {
                basic.showString("LOSE")
            } else {
                basic.showString("WIN")
            }
        } else {
            if (cpu_hand == 1) {
                basic.showString("LOSE")
            } else {
                basic.showString("WIN")
            }
        }
    }
    player_hand = 0
})
