let cpu_hand = 0
input.onGesture(Gesture.Shake, function () {
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
})
