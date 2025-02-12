namespace SpriteKind {
    export const Peow = SpriteKind.create()
    export const BigProjectile = SpriteKind.create()
    export const ThePlayer = SpriteKind.create()
    export const Slash = SpriteKind.create()
    export const Map = SpriteKind.create()
}
namespace StatusBarKind {
    export const catHealth = StatusBarKind.create()
}
function LevelSetup () {
    scene.setBackgroundImage(img`
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeecccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeecccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeecccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeecccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        eeeeeeeeeeeeeeeeeeceeeeeeeeeeeeeeeeecccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        eeeeeeeeeeeeeeeeeecccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        eeeeeeeeeeeeeeeeeecccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        eeeeeeeeeeeeeeeeeecccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        eeeeeeeeeeeeeeeecccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        eeeeeeeeeeeeeecccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        eeeeeeeeeeeeeecccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        eeeeeeeeeeeeeeeecccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        eeeeeeeeeeeeeeeecccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        eeeeeeeeeeeeeeeecccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        eeeeeeeeeeeeeecccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        eeeeeeeeeeeecccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        eeeeeeeeeeeccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        eeeeeeeecccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        eeeeeecccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        eecccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccfccbfbfccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccffffffffccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccffffbffffcffccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccfbfffbfbffbcfccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccfffbfbbbbbbbbcfccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccffffffbbbbbbbbbbbccfcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccfffbffbbbbbbbbbbbbbcfcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccccccccccccccccccccccccccfffffbbbbbbbbbbbbbbbbbbbcfcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccccccccccccccccccccccccffffbbbbbbbbbbbbbbbbbbbbbbbcfccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccccccccccccccccccccccffffbbbbbbbbbbbbbbbbbbbbbbbbbcfccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccfffbbbbbbbbbbbbbbbbbbbbbbbbbbbcfccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccfffbbbbbbbbbbbbbbbbbbbbbbbbbbbbfcccccccccccccccccccccccccccccccccccccccccccccfffccccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccccccccccccccccccccfcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcfccccccccccccccccccccccccccccccccccccccccccccfffbffffcccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccfffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfcccccccccccccccccccccccccccccccccccccccccccfffffbbbbfccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccfffbfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfcccccccccccccccccccccccccccccccccccccccccccfbfbbbbbbfccccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccccccccccccccfffcfbfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfccccccccccccccccccccccccccccccccccccccffffbfbbbbbbbbffcccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccccccccccccfffccffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfbcccccccccccccccccccccccccccccccccccffccbffbbbbbbbbbbffccccccccccccccbffffffbbbccccccccccccccc
        cccccccccccccccccccccccffffffccbbbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfbccccccccccccccccccccccccccccccccccffccffffbbbbbbbbbbbffccccccccccbbfffbbbbffffbcccccccccccccc
        ccccccccccccccccccccccffcffffcbbbccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfbbccccccccccccccccccccccccccccccccfffcfbbbbbbbbbbbbbbbbfbcccccccbfffbbbbbbbbbbfffffccccccccccc
        cccccccccccccccccccccfcffffffcbcccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfbbcccccccccccccccccccccccccccccccfccffbbbbbbbbbbbbbbbcbffbccccbbffbbbbbbbbbbbbbbbbffcccccccccc
        ccccccccccccccccccccfffffffbcbbccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfbffcccccccccccccccccccccccccccccfcffffbbbbbbbbbbbbbbbccbffcccbbffbbbbbbbbbbbbbbbbbbfcccccccccc
        ccccccccccccccccccccffffffbbcbbccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbffffcccccccccccccccccccccccccccccfffffbbbbbbbbbbbbbbbbbbccffffbffbbbbbbbbbbbbbbbbbbbfcccccccccc
        ccccccccccccccccccffbfbffbbcbbccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfbbbfccccccccccccccccccccccccccccfffffbbbbbbbbbbbbbbbbbbbcbbbfffbbbbbbbbbbbbbbbbbbbbfcccccccccc
        cccccccccccccccccffffbbfbbcbbcccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfcccccccccccccccccccccccccccfffffbbbbbbbbbbbbbbbbbbbbbcbbbbbbbbbbbbbbbbbbbbbbbbbfcccccccccc
        ccccccccccccccccfffbbbffbbcbcbccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbffcccccccccccccccccccccccccffffbbbbbbbbbbbbbbbbbbbbbbbbcbbbbbbbbbbbbbbbbbbbbbbbbfbccccccccc
        cccccccccccccccffffbbbbbbbccbcbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccffcccccccccccccccccccccffbbbbbbbbbbbbbbbbbbbbbbbbbbbbcbbbbbbbbbbbbbbbbbbbbbbbffccccccccc
        cccccccccccccccffbbbbbbbbcbcbccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccbfcffcccccccccccccccccccccfbbbbbbccbbbbbbbbbbbbbbbbbbbbbbcbbbbbbbbbbbbbbbbbbbbbbbfccccccccc
        ccccccccccccccfffbbbbbbbbcbccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcbcccfccccccccfffffcccccccfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcbbbbbbbbbbbbbbbbbbbbbbfbcccccccc
        ccccccccfffcfffbbbbbbbbbcbbccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcbbccffffbffffbbbbbffffffffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccbbbbbbbbbbbbbbbbbbbbbfbcccccccc
        cccccccffcffffbbbbbbbbbbcbcbcccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccbfcbbbffbbbbbbbbcccccccccccccccccccccccccccbbbbbbbbbbbbbbccbbbbbbbbbbbbbbbbbbbbbffbccccccc
        cccccccfcfffffbbbbbbbbbbccbcccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcbfcbbbbbbbbbbbbbbbbbfbbbbbbbbbbbbcccccbbbbbccbbbbbbbbbbcbcccbbbbbbbbbbbbbbbbbbbbbfbccccccc
        cccccccffffffbbbbbbbbbbbccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcbbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcbbbbbbbbbbbbbbbbbbcbcccbbbbbbbbbbbbbbbbbbbbffbcccccc
        ccccccccfffbbbbbbbbbbbbcbcccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcbcbbbbbbbbbbbbbbbbbbbccbccbbbbbbbbbbbbbbbbbbbbffcccccc
        cccccccffbbbbbbbbbbbbbbcbcbcccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcbcbbbbbbbbbbbbbbbbbbccbbcbbbbbbbbbbbbbbbbbbbbbfcccccc
        cccccccffbbbbbbbbbbbbbbcbcccbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccbbbbbbbbbbbbbbbbbbbcbbccbbbbbbbbbbbbbbbbbbbbfcccccc
        ccccfffffbbbbbbbbbbbbbbcccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccbbbbbbbbbbbbbbbbbbbccbbccbbbbbbbbbbbbbbbbbbbfcccccc
        cccfcfbbbbbbbbbbbbbbbbbbcccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccbbbbbbbbbbbbbbbbbbbbcbbccbbbbbbbbbbbbbbbbbbbbfccccc
        ccffffbbbbbbbbbbbbbbbbbbbbcccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccbbbbbbbbbbbbbbbbbbbcbbcbbbbbbbbbbbbbbbbbbbbbfccccc
        ffffbbbbbbbbbbbbbbbbbbbbbbbccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcbcbbbbbbbbbbbbbbbbbbcbbbcbbbbbbbbbbbbbbbbbbbbffcccc
        ffffbbbbbbbbbbbbbbbbbbbbbbbccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcbcbbbbbbbbbbbbbbbbbbcbbcbbbbbbbbbbbbbbbbbbbbbffccc
        fffbbbbbbbbbbbbbbbbbbbbbbbbccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcbbcbbbbbbbbbbbbbbbbbcbbcbbbbbbbbbbbbbbbbbbbbbbfbcc
        fbbbbbbbbbbbbbbbbbbbbbbbbbbccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcbcbbbbbbbbbbbbbbbbbbcbcbbbbbbbbbbbbbbbbbbbbbbfbbc
        bbbbbbbbbbbbbbbbbbbbbbbbbbbccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccbbbbbbbbbbbbbbbbbbcbbcbbbbbbbbbbbbbbbbbbbbbbfff
        bbbbbbbbbbbbbbbbbbbbbbbbbbbccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcbcbbbbbbbbbbbbbbbbbcbbcbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcbcbbbbbbbbbbbbbbbbbcbbcbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbcbbbbbbbbbbbbbbbbbbbbbbbcccccbbbbbbbbbbbbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcbcbbbbbbbbbbbbbbbbbcbbcbbbbbbbbbbbbbbbbbbbbccccb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbcbbbbbbbbbbbbbbbcccccccccccccccccbbbbbbbccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcbbbbbbbbbbbbbbbbbbccbcbbbbbbbbbbbbbbbbbbbcccccb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbcbbbbbbbbbbbbbbccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcbcbbbbbbbbbbbcccccbbbccccccb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcbbbbbbbbbbbbccccccbbbccccccc
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccbbbbbbbbbbbccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcbbbbbbbbbbbbccccccbbbccccccc
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccbbbbbbbbbbbbbbcccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccc
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccbbbbbbbbbbbbbbbbbcccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccc
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccbbbbbbbbbbbbbbbbbbbbccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccbbbbbccccbbbbbbbbbbbbbcccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccbbbbbcccccbbbbbbbbbbbbbcccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccbbbbccccccbbbbbbbbbbbbbbccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccbbbbccccccbbbbbbbbbbbbbbccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccbbbbcccccbbbbccccccbbbbbbcccbbbbbbbbbbbbbbbbbbbbbbbbbbbbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccbbbbccccbbbbccccccbbbbbbcccbbbbbbbbbbbbbbbbbbbbbbbbbbbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccbbbbbbbbbbbbccccccbbbbbccccbbbbbbbbbbbbbbbbbbbbbbbbbbbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcbbbbbbccccbbbbbbbbbbbbcccccbbbbbbccccbbbbbbbbbbbbbbbbbbbbbbbbbbbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccbbbbbbbcccbbbbbbbbbbbbbbbbbbbbbbccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbccbbbccbbbbbbbbcccbbbbbbbbbbbbbbbbbbbbbbccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccb
        bbbbbbbbbbbbbbbbbbbbbbbbbcbbbbccbbbbbbbbbcccbbbbbbcbbbbbbbbbbbbbbcccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccb
        bbbbbbbbbbbbbbbbbbbbbbbbcbbbbcbbbbbbbbbbbcccbbbbbcbbbbbbbbbbbbbccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccb
        bbbbbbbbbbbbbbbbbbbbbbbcbccccbbbbbbbbbbbbccccccccbbbbcbbbbbbcccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccb
        bbbbbbbbbbbbbbbbbbbbbbcccccbbbbbbbbbbbbbccccbbcccccbccbbbbccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccb
        bbbbbbbbbbbbbbbbbbbcccbccbbbbbbbbbbbbbbbccccbbcbbbcccbbbbcccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccb
        bbbbbbbbbbbbbbbbbcccbcccbbbbbbbbbbbbbbbcccccbccbbbbccbbbcccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccb
        bbbbbbbbbbbbbbbccccccccbbbbbbbbbbbbbbbbccccbbcbbbbccbccbcccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccbb
        bbbbbbbbbbbbbccccbbbcbbbbbbbbbbbbbbbbbbccccbbbbbbbcbbbccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccbb
        bbbbbbbbbbbccccbbbbbbbbbbccccbbbbbbbbbbcccccbbbbbbbbbbcccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccbb
        bbbbbbbbbccccbbbbbbbbbbccccccbbbbbbbbbbbcccccccbbbbbbccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccc
        bbbbbbbbcccbbbbbbbbbbbcccccccbbbbbbbbbbbccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccc
        bbbbbbbccbbbbbbbbbbbbbcccccccbbbbbbbbbbbbccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccc
        bbbbbccbbbbbbbbbbbbbbbcccccccbbbbbbbbbbbbbbbccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccc
        bbbccbbbbbbbbbbbbbbbbbcccccccbcccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccc
        bbcbbbbbbbbbbbbbbbbbbbbccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccc
        bcbbbbbbbbbbbbbbbbbbbbbbcccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccc
        cbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccc
        bbbbbbbbbbbbbbbbbbbbbbbbccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcbbbbbcbbbbbbbbbbbbbbbbbbbbbbbbbcbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccc
        bbbbbbbbbbbbbbbbbbbbbbbbccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcbbcccccbbbbbbbbbbbbbbbbbbbbbbccccbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccc
        bbbbbbbbbbbbbbbbbbbbbbbbccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccbbbbbbbbbbbbbbbbbbbbbbbcccccbbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccbb
        bbbbbbbbbbbbbbbbbbbbbbbccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccbcccccbbbbbbbbbbbbbbbbbbbbbccccccccbbbccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccbbb
        bbbbbbbbbbbbbbbbbbbbbbcccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccbcccccbbbbbbbbbbbbbbbbbcccccccccbbbbcccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccbbb
        bbbbbbbbbbbbbbbbbbbbbcccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcbbccccccccbbbbbbbbbbbbbbbbbbbbbbccccccccbbbbbbcbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccbbbb
        bbbbbbbbbbbbbbbbbbbbccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccbbbbbbbcbccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccbbbbbbbbccbcccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbcccccccbcccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccbbbbbbbcbbbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbcccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccbbbbbbbbcccbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccbbbbbbbbbbcbbccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbcccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccbbbbbbbbbbbbbbbbbbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        `)
    tiles.setCurrentTilemap(tilemap`level2`)
}
statusbars.onStatusReached(StatusBarKind.catHealth, statusbars.StatusComparison.LTE, statusbars.ComparisonType.Percentage, 25, function (status) {
    CatBoss.startEffect(effects.spray)
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Ruyol.isHittingTile(CollisionDirection.Bottom)) {
        Ruyol.vy = -150
        music.play(music.createSoundEffect(WaveShape.Sawtooth, 400, 600, 255, 0, 100, SoundExpressionEffect.None, InterpolationCurve.Curve), music.PlaybackMode.InBackground)
    }
})
function PlayerSetup () {
    stance = 1
    Ruyol = sprites.create(img`
        . . . . . . f f f f . . . . . . 
        . . . . f f f 2 2 f f f . . . . 
        . . . f f f 2 2 2 2 f f f . . . 
        . . f f f e e e e e e f f f . . 
        . . f f e 2 2 2 2 2 2 e e f . . 
        . . f e 2 f f f f f f 2 e f . . 
        . . f f f f e e e e f f f f . . 
        . f f e f b f 4 4 f b f e f f . 
        . f e e 4 1 f d d f 1 4 e e f . 
        . . f e e d d d d d d e e f . . 
        . . . f e e 4 4 4 4 e e f . . . 
        . . e 4 f 2 2 2 2 2 2 f 4 e . . 
        . . 4 d f 2 2 2 2 2 2 f d 4 . . 
        . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `, SpriteKind.Player)
    controller.moveSprite(Ruyol, 80, 0)
    Ruyol.ay = 400
    tiles.placeOnTile(Ruyol, tiles.getTileLocation(2, 6))
    info.setLife(10)
    controller.combos.setTimeout(500)
    RuyolSB = statusbars.create(90, 6, StatusBarKind.Energy)
    RuyolSB.setColor(5, 15)
    RuyolSB.setStatusBarFlag(StatusBarFlag.LabelAtEnd, true)
    RuyolSB.setLabel("Power")
    RuyolSB.setBarBorder(1, 15)
    RuyolSB.positionDirection(CollisionDirection.Top)
    RuyolSB.setOffsetPadding(10, 5)
    RuyolSB.value = 0
    RuyolSB.max = 100
    PlayerAnim()
}
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (stance == 2) {
        stance = 1
    } else if (stance == 1) {
        stance = 2
    }
    music.play(music.createSoundEffect(WaveShape.Square, 401, 2076, 148, 209, 100, SoundExpressionEffect.Vibrato, InterpolationCurve.Curve), music.PlaybackMode.InBackground)
    console.log(stance)
})
statusbars.onZero(StatusBarKind.catHealth, function (status) {
    animation.runImageAnimation(
    CatBoss,
    [img`
        e e e . . . . e e e . . . . 
        c d d c . . c d d c . . . . 
        c b d d f f d d b c . . . . 
        c 3 b d d b d b 3 c . . . . 
        f b 3 d d d d 3 b f . . . . 
        e d d d d d d d d e . . . . 
        e d f d d d d f d e . b f b 
        f d d f d d f d d f . f d f 
        f b d d b b d d 2 f . f d f 
        . f 2 2 2 2 2 2 b b f f d f 
        . f b d d d d d d b b d b f 
        . f d d d d d b d d f f f . 
        . f d f f f d f f d f . . . 
        . f f . . f f . . f f . . . 
        `,img`
        . . . . . . . . . . . . . . 
        1 1 1 . . . . 1 1 1 . . . . 
        1 1 1 1 . . 1 1 1 1 . . . . 
        1 1 1 1 1 1 1 1 1 1 . . . . 
        1 1 1 1 1 1 1 1 1 1 . . . . 
        1 1 1 1 1 1 1 1 1 1 . . . . 
        1 1 1 1 1 1 1 1 1 1 . . . . 
        1 1 1 1 1 1 1 1 1 1 1 1 1 . 
        1 1 1 1 1 1 1 1 1 1 1 1 1 . 
        1 1 1 1 1 1 1 1 1 1 1 1 1 . 
        . 1 1 1 1 1 1 1 1 1 1 1 1 . 
        . 1 1 1 1 1 1 1 1 1 1 1 . . 
        . 1 1 1 1 1 1 1 1 1 . . . . 
        . . 1 1 1 1 . . 1 1 . . . . 
        `,img`
        . . . . . . . . . . . . . . 
        e e e . . . . e e e . . . . 
        c d d c . . c d d c . . . . 
        c b d d f f d d b c . . . . 
        c 3 b d d b d b 3 c . . . . 
        f b 3 d d d d 3 b f . . . . 
        e d d d d d d d d e . . . . 
        e d f d d d d f d e . b f b 
        f d d f d d f d d f . f d f 
        f b d d b b d d 2 b f f d f 
        . f 2 2 2 2 2 2 d b b d b f 
        . f d d d d d d d f f f f . 
        . . f d b d f d f . . . . . 
        . . . f f f f f f . . . . . 
        `,img`
        . . . . . . . . . . . . . . 
        1 1 1 . . . . 1 1 1 . . . . 
        1 1 1 1 . . 1 1 1 1 . . . . 
        1 1 1 1 1 1 1 1 1 1 . . . . 
        1 1 1 1 1 1 1 1 1 1 . . . . 
        1 1 1 1 1 1 1 1 1 1 . . . . 
        1 1 1 1 1 1 1 1 1 1 . . . . 
        1 1 1 1 1 1 1 1 1 1 1 1 1 . 
        1 1 1 1 1 1 1 1 1 1 1 1 1 . 
        1 1 1 1 1 1 1 1 1 1 1 1 1 . 
        . 1 1 1 1 1 1 1 1 1 1 1 1 . 
        . 1 1 1 1 1 1 1 1 1 1 1 . . 
        . 1 1 1 1 1 1 1 1 1 . . . . 
        . . 1 1 1 1 . . 1 1 . . . . 
        `,img`
        . . . . . . . . . . . . . . 
        e e e . . . . e e e . . . . 
        c d d c . . c d d c . . . . 
        c b d d f f d d b c . . . . 
        c 3 b d d b d b 3 c . . . . 
        f b 3 d d d d 3 b f . . . . 
        e d d d d d d d d e . . . . 
        e d f d d d d f d e . b f b 
        f d d f d d f d d f . f d f 
        f b d d b b d d 2 b f f d f 
        . f 2 2 2 2 2 2 d b b d b f 
        . f d d d d d d d f f f f . 
        . . f d b d f d f . . . . . 
        . . . f f f f f f . . . . . 
        `,img`
        . . . . . . . . . . . . . . 
        1 1 1 . . . . 1 1 1 . . . . 
        1 1 1 1 . . 1 1 1 1 . . . . 
        1 1 1 1 1 1 1 1 1 1 . . . . 
        1 1 1 1 1 1 1 1 1 1 . . . . 
        1 1 1 1 1 1 1 1 1 1 . . . . 
        1 1 1 1 1 1 1 1 1 1 . . . . 
        1 1 1 1 1 1 1 1 1 1 1 1 1 . 
        1 1 1 1 1 1 1 1 1 1 1 1 1 . 
        1 1 1 1 1 1 1 1 1 1 1 1 1 . 
        . 1 1 1 1 1 1 1 1 1 1 1 1 . 
        . 1 1 1 1 1 1 1 1 1 1 1 . . 
        . 1 1 1 1 1 1 1 1 1 . . . . 
        . . 1 1 1 1 . . 1 1 . . . . 
        `],
    100,
    false
    )
    catSpeed = 0
    CatBoss.vx = 0
    CatBoss.vy = 0
    CatBoss.ay = 0
    music.stopAllSounds()
    music.play(music.createSoundEffect(WaveShape.Noise, 2492, 129, 177, 0, 1000, SoundExpressionEffect.Vibrato, InterpolationCurve.Curve), music.PlaybackMode.InBackground)
    timer.after(500, function () {
        sprites.destroy(CatBoss, effects.bubbles, 1500)
        timer.after(1500, function () {
            game.gameOver(true)
        })
    })
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (stance == 1) {
        timer.throttle("smallshot", 250, function () {
            music.play(music.createSoundEffect(WaveShape.Square, 200, 600, 213, 0, 150, SoundExpressionEffect.Warble, InterpolationCurve.Curve), music.PlaybackMode.InBackground)
            if (characterAnimations.matchesRule(Ruyol, characterAnimations.rule(Predicate.FacingRight))) {
                smallProj = sprites.createProjectileFromSprite(img`
                    . . b b b b . . 
                    . b 5 5 5 5 b . 
                    b 5 d 3 3 d 5 b 
                    b 5 3 5 5 1 5 b 
                    c 5 3 5 5 1 d c 
                    c d d 1 1 d d c 
                    . f d d d d f . 
                    . . f f f f . . 
                    `, Ruyol, 130, 0)
                animation.runImageAnimation(
                Ruyol,
                [img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . f f f f f f . . . . . 
                    . . . f f e e e e f 2 f . . . . 
                    . . f f e e e e f 2 2 2 f . . . 
                    . . f e e e f f e e e e f . . . 
                    . . f f f f e e 2 2 2 2 e f . . 
                    . . f e 2 2 2 f f f f e 2 f . . 
                    . f f f f f f f e e e f f f . . 
                    . f f e 4 4 e b f 4 4 e e f . . 
                    . f e e 4 d 4 1 f d d e f . . . 
                    . . f e e e e e d d d f . . . . 
                    . . . . f 4 d d e 4 e f . . . . 
                    . . . . f e d d e 2 2 f . . . . 
                    . . . f f f e e f 5 5 f f . . . 
                    . . . f f f f f f f f f f . . . 
                    . . . . f f . . . f f f . . . . 
                    `,img`
                    . . . . . f f f f f f . . . . . 
                    . . . f f e e e e f 2 f . . . . 
                    . . f f e e e e f 2 2 2 f . . . 
                    . . f e e e f f e e e e f . . . 
                    . . f f f f e e 2 2 2 2 e f . . 
                    . . f e 2 2 2 f f f f e 2 f . . 
                    . f f f f f f f e e e f f f . . 
                    . f f e 4 4 e b f 4 4 e e f . . 
                    . f e e 4 d 4 1 f d d e f f . . 
                    . . f e e e 4 d d d d f d d f . 
                    . . . f f e e 4 e e e f b b f . 
                    . . . . f 2 2 2 4 d d e b b f . 
                    . . . . e 2 2 2 e d d e b f . . 
                    . . . . f 4 4 4 f e e f f . . . 
                    . . . . . f f f f f f . . . . . 
                    . . . . . . f f f . . . . . . . 
                    `,img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . f f f f f f . . . . . 
                    . . . f f e e e e f 2 f . . . . 
                    . . f f e e e e f 2 2 2 f . . . 
                    . . f e e e f f e e e e f . . . 
                    . . f f f f e e 2 2 2 2 e f . . 
                    . . f e 2 2 2 f f f f e 2 f . . 
                    . f f f f f f f e e e f f f . . 
                    . f f e 4 4 e b f 4 4 e e f . . 
                    . f e e 4 d 4 1 f d d e f . . . 
                    . . f e e e e e d d d f . . . . 
                    . . . . f 4 d d e 4 e f . . . . 
                    . . . . f e d d e 2 2 f . . . . 
                    . . . f f f e e f 5 5 f f . . . 
                    . . . f f f f f f f f f f . . . 
                    . . . . f f . . . f f f . . . . 
                    `,img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . f f f f f f . . . . . 
                    . . . f f e e e e f 2 f . . . . 
                    . . f f e e e e f 2 2 2 f . . . 
                    . . f e e e f f e e e e f . . . 
                    . . f f f f e e 2 2 2 2 e f . . 
                    . . f e 2 2 2 f f f f e 2 f . . 
                    . f f f f f f f e e e f f f . . 
                    . f f e 4 4 e b f 4 4 e e f . . 
                    . f e e 4 d 4 1 f d d e f f . . 
                    . . f e e e 4 d d d d f d d f . 
                    . . . . f e e 4 e e e f b b f . 
                    . . . . f 2 2 2 4 d d e b b f . 
                    . . . f f 4 4 4 e d d e b f . . 
                    . . . f f f f f f e e f f . . . 
                    . . . . f f . . . f f f . . . . 
                    `],
                100,
                false
                )
            } else if (characterAnimations.matchesRule(Ruyol, characterAnimations.rule(Predicate.FacingLeft))) {
                smallProj = sprites.createProjectileFromSprite(img`
                    . . b b b b . . 
                    . b 5 5 5 5 b . 
                    b 5 d 3 3 d 5 b 
                    b 5 3 5 5 1 5 b 
                    c 5 3 5 5 1 d c 
                    c d d 1 1 d d c 
                    . f d d d d f . 
                    . . f f f f . . 
                    `, Ruyol, -130, 0)
                animation.runImageAnimation(
                Ruyol,
                [img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . f f f f f f . . . . . 
                    . . . . f 2 f e e e e f f . . . 
                    . . . f 2 2 2 f e e e e f f . . 
                    . . . f e e e e f f e e e f . . 
                    . . f e 2 2 2 2 e e f f f f . . 
                    . . f 2 e f f f f 2 2 2 e f . . 
                    . . f f f e e e f f f f f f f . 
                    . . f e e 4 4 f b e 4 4 e f f . 
                    . . f f e d d f 1 4 d 4 e e f . 
                    . f d d f d d d d 4 e e e f . . 
                    . f b b f e e e 4 e e f . . . . 
                    . f b b e d d 4 2 2 2 f . . . . 
                    . . f b e d d e 4 4 4 f f . . . 
                    . . . f f e e f f f f f f . . . 
                    . . . . f f f . . . f f . . . . 
                    `,img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . f f f f f f . . . . . 
                    . . . . f 2 f e e e e f f . . . 
                    . . . f 2 2 2 f e e e e f f . . 
                    . . . f e e e e f f e e e f . . 
                    . . f e 2 2 2 2 e e f f f f . . 
                    . . f 2 e f f f f 2 2 2 e f . . 
                    . . f f f e e e f f f f f f f . 
                    . . f e e 4 4 f b e 4 4 e f f . 
                    . . . f e d d f 1 4 d 4 e e f . 
                    . . . . f d d d e e e e e f . . 
                    . . . . f e 4 e d d 4 f . . . . 
                    . . . . f 2 2 e d d e f . . . . 
                    . . . f f 5 5 f e e f f f . . . 
                    . . . f f f f f f f f f f . . . 
                    . . . . f f f . . . f f . . . . 
                    `,img`
                    . . . . . f f f f f f . . . . . 
                    . . . . f 2 f e e e e f f . . . 
                    . . . f 2 2 2 f e e e e f f . . 
                    . . . f e e e e f f e e e f . . 
                    . . f e 2 2 2 2 e e f f f f . . 
                    . . f 2 e f f f f 2 2 2 e f . . 
                    . . f f f e e e f f f f f f f . 
                    . . f e e 4 4 f b e 4 4 e f f . 
                    . . f f e d d f 1 4 d 4 e e f . 
                    . f d d f d d d d 4 e e e f . . 
                    . f b b f e e e 4 e e f f . . . 
                    . f b b e d d 4 2 2 2 f . . . . 
                    . . f b e d d e 2 2 2 e . . . . 
                    . . . f f e e f 4 4 4 f . . . . 
                    . . . . . f f f f f f . . . . . 
                    . . . . . . . f f f . . . . . . 
                    `,img`
                    . . . . . . . . . . . . . . . . 
                    . . . . f f f f f f . . . . . . 
                    . . . f 2 f e e e e f f . . . . 
                    . . f 2 2 2 f e e e e f f . . . 
                    . . f e e e e f f e e e f . . . 
                    . f e 2 2 2 2 e e f f f f . . . 
                    . f 2 e f f f f 2 2 2 e f . . . 
                    . f f f e e e f f f f f f f . . 
                    . f e e 4 4 f b e 4 4 e f f . . 
                    . . f e d d f 1 4 d 4 e e f . . 
                    . . . f d d d e e e e e f . . . 
                    . . . f e 4 e d d 4 f . . . . . 
                    . . . f 2 2 e d d e f . . . . . 
                    . . f f 5 5 f e e f f f . . . . 
                    . . f f f f f f f f f f . . . . 
                    . . . f f f . . . f f . . . . . 
                    `],
                100,
                false
                )
            }
            smallProj.setScale(0.7, ScaleAnchor.Middle)
        })
    } else if (stance == 2) {
        timer.throttle("ringPulse", 500, function () {
            music.play(music.createSoundEffect(WaveShape.Square, 200, 600, 213, 0, 150, SoundExpressionEffect.Warble, InterpolationCurve.Curve), music.PlaybackMode.InBackground)
            if (characterAnimations.matchesRule(Ruyol, characterAnimations.rule(Predicate.FacingRight))) {
                slashAttack = sprites.create(img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `, SpriteKind.Slash)
                slashAttack.setPosition(Ruyol.x, Ruyol.y)
                slashAttack.follow(Ruyol, 300)
                slashAttack.z = -1
                slashAttack.setFlag(SpriteFlag.GhostThroughWalls, true)
                animation.runImageAnimation(
                slashAttack,
                [img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . 1 . . . . . . . . . . . 
                    . . . . 5 4 . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `,img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . 1 1 1 1 . . . . . . 
                    . . . . . 1 5 5 5 5 1 . . . . . 
                    . . . . 1 5 4 4 4 4 5 . . . . . 
                    . . . . 5 4 . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `,img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . 1 1 1 1 . . . . . . 
                    . . . . . 1 5 5 5 5 1 . . . . . 
                    . . . . 1 5 4 4 4 4 5 1 . . . . 
                    . . . . 5 4 . . . . 4 5 1 . . . 
                    . . . . . . . . . . 4 5 1 . . . 
                    . . . . . . . . . . 4 5 1 . . . 
                    . . . . . . . . . . 4 5 1 . . . 
                    . . . . . . . . . . 5 1 . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `,img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . 1 1 1 1 . . . . . . 
                    . . . . . 1 5 5 5 5 1 . . . . . 
                    . . . . 1 5 4 4 4 4 5 1 . . . . 
                    . . . . 5 4 . . . . 4 5 1 . . . 
                    . . . . . . . . . . 4 5 1 . . . 
                    . . . . . . . . . . 4 5 1 . . . 
                    . . . . . . . . . . 4 5 1 . . . 
                    . . . . . . 4 4 4 4 5 1 . . . . 
                    . . . . . 1 5 5 5 5 1 . . . . . 
                    . . . . . . 1 1 1 1 . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `,img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . 1 1 1 1 . . . . . . 
                    . . . . . . 5 5 5 5 1 . . . . . 
                    . . . . . . . 4 4 4 5 1 . . . . 
                    . . . . . . . . . . 4 5 1 . . . 
                    . . . . . . . . . . 4 5 1 . . . 
                    . . . . . . . . . . 4 5 1 . . . 
                    . . . . . . . . . . 4 5 1 . . . 
                    . . . . . . 4 4 4 4 5 1 . . . . 
                    . . . . . 1 5 5 5 5 1 . . . . . 
                    . . . . . . 1 1 1 1 . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `,img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . 4 5 1 . . . . 
                    . . . . . . . . . . 4 5 1 . . . 
                    . . . . . . . . . . 4 5 1 . . . 
                    . . . . . . . . . . 4 5 1 . . . 
                    . . . . . . . . . . 4 5 1 . . . 
                    . . . . . . 4 4 4 4 5 1 . . . . 
                    . . . . . 1 5 5 5 5 1 . . . . . 
                    . . . . . . 1 1 1 1 . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `,img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . 4 4 4 4 5 1 . . . . 
                    . . . . . 1 5 5 5 5 1 . . . . . 
                    . . . . . . 1 1 1 1 . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `,img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `],
                40,
                false
                )
                animation.runImageAnimation(
                Ruyol,
                [img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . f f f f f f . . . . . 
                    . . . f f e e e e f 2 f . . . . 
                    . . f f e e e e f 2 2 2 f . . . 
                    . . f e e e f f e e e e f . . . 
                    . . f f f f e e 2 2 2 2 e f . . 
                    . . f e 2 2 2 f f f f e 2 f . . 
                    . f f f f f f f e e e f f f . . 
                    . f f e 4 4 e b f 4 4 e e f . . 
                    . f e e 4 d 4 1 f d d e f . . . 
                    . . f e e e e e d d d f . . . . 
                    . . . . f 4 d d e 4 e f . . . . 
                    . . . . f e d d e 2 2 f . . . . 
                    . . . f f f e e f 5 5 f f . . . 
                    . . . f f f f f f f f f f . . . 
                    . . . . f f . . . f f f . . . . 
                    `,img`
                    . . . . . f f f f f f . . . . . 
                    . . . f f e e e e f 2 f . . . . 
                    . . f f e e e e f 2 2 2 f . . . 
                    . . f e e e f f e e e e f . . . 
                    . . f f f f e e 2 2 2 2 e f . . 
                    . . f e 2 2 2 f f f f e 2 f . . 
                    . f f f f f f f e e e f f f . . 
                    . f f e 4 4 e b f 4 4 e e f . . 
                    . f e e 4 d 4 1 f d d e f f . . 
                    . . f e e e 4 d d d d f d d f . 
                    . . . f f e e 4 e e e f b b f . 
                    . . . . f 2 2 2 4 d d e b b f . 
                    . . . . e 2 2 2 e d d e b f . . 
                    . . . . f 4 4 4 f e e f f . . . 
                    . . . . . f f f f f f . . . . . 
                    . . . . . . f f f . . . . . . . 
                    `,img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . f f f f f f . . . . . 
                    . . . f f e e e e f 2 f . . . . 
                    . . f f e e e e f 2 2 2 f . . . 
                    . . f e e e f f e e e e f . . . 
                    . . f f f f e e 2 2 2 2 e f . . 
                    . . f e 2 2 2 f f f f e 2 f . . 
                    . f f f f f f f e e e f f f . . 
                    . f f e 4 4 e b f 4 4 e e f . . 
                    . f e e 4 d 4 1 f d d e f . . . 
                    . . f e e e e e d d d f . . . . 
                    . . . . f 4 d d e 4 e f . . . . 
                    . . . . f e d d e 2 2 f . . . . 
                    . . . f f f e e f 5 5 f f . . . 
                    . . . f f f f f f f f f f . . . 
                    . . . . f f . . . f f f . . . . 
                    `,img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . f f f f f f . . . . . 
                    . . . f f e e e e f 2 f . . . . 
                    . . f f e e e e f 2 2 2 f . . . 
                    . . f e e e f f e e e e f . . . 
                    . . f f f f e e 2 2 2 2 e f . . 
                    . . f e 2 2 2 f f f f e 2 f . . 
                    . f f f f f f f e e e f f f . . 
                    . f f e 4 4 e b f 4 4 e e f . . 
                    . f e e 4 d 4 1 f d d e f f . . 
                    . . f e e e 4 d d d d f d d f . 
                    . . . . f e e 4 e e e f b b f . 
                    . . . . f 2 2 2 4 d d e b b f . 
                    . . . f f 4 4 4 e d d e b f . . 
                    . . . f f f f f f e e f f . . . 
                    . . . . f f . . . f f f . . . . 
                    `],
                100,
                false
                )
            } else if (characterAnimations.matchesRule(Ruyol, characterAnimations.rule(Predicate.FacingLeft))) {
                slashAttack = sprites.create(img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `, SpriteKind.Slash)
                slashAttack.setPosition(Ruyol.x, Ruyol.y)
                slashAttack.follow(Ruyol, 300)
                slashAttack.z = -1
                slashAttack.setFlag(SpriteFlag.GhostThroughWalls, true)
                animation.runImageAnimation(
                slashAttack,
                [img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . 1 . . . . 
                    . . . . . . . . . . 4 5 . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `,img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . 1 1 1 1 . . . . . . 
                    . . . . . 1 5 5 5 5 1 . . . . . 
                    . . . . . 5 4 4 4 4 5 1 . . . . 
                    . . . . . . . . . . 4 5 . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `,img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . 1 1 1 1 . . . . . . 
                    . . . . . 1 5 5 5 5 1 . . . . . 
                    . . . . 1 5 4 4 4 4 5 1 . . . . 
                    . . . 1 5 4 . . . . 4 5 . . . . 
                    . . . 1 5 4 . . . . . . . . . . 
                    . . . 1 5 4 . . . . . . . . . . 
                    . . . 1 5 4 . . . . . . . . . . 
                    . . . . 1 5 . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `,img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . 1 1 1 1 . . . . . . 
                    . . . . . 1 5 5 5 5 1 . . . . . 
                    . . . . 1 5 4 4 4 4 5 1 . . . . 
                    . . . 1 5 4 . . . . 4 5 . . . . 
                    . . . 1 5 4 . . . . . . . . . . 
                    . . . 1 5 4 . . . . . . . . . . 
                    . . . 1 5 4 . . . . . . . . . . 
                    . . . . 1 5 4 4 4 4 . . . . . . 
                    . . . . . 1 5 5 5 5 1 . . . . . 
                    . . . . . . 1 1 1 1 . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `,img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . 1 1 1 1 . . . . . . 
                    . . . . . 1 5 5 5 5 . . . . . . 
                    . . . . 1 5 4 4 4 . . . . . . . 
                    . . . 1 5 4 . . . . . . . . . . 
                    . . . 1 5 4 . . . . . . . . . . 
                    . . . 1 5 4 . . . . . . . . . . 
                    . . . 1 5 4 . . . . . . . . . . 
                    . . . . 1 5 4 4 4 4 . . . . . . 
                    . . . . . 1 5 5 5 5 1 . . . . . 
                    . . . . . . 1 1 1 1 . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `,img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . 1 5 4 . . . . . . . . . 
                    . . . 1 5 4 . . . . . . . . . . 
                    . . . 1 5 4 . . . . . . . . . . 
                    . . . 1 5 4 . . . . . . . . . . 
                    . . . 1 5 4 . . . . . . . . . . 
                    . . . . 1 5 4 4 4 4 . . . . . . 
                    . . . . . 1 5 5 5 5 1 . . . . . 
                    . . . . . . 1 1 1 1 . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `,img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . 1 5 4 4 4 4 . . . . . . 
                    . . . . . 1 5 5 5 5 1 . . . . . 
                    . . . . . . 1 1 1 1 . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `,img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `],
                50,
                false
                )
                animation.runImageAnimation(
                Ruyol,
                [img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . f f f f f f . . . . . 
                    . . . . f 2 f e e e e f f . . . 
                    . . . f 2 2 2 f e e e e f f . . 
                    . . . f e e e e f f e e e f . . 
                    . . f e 2 2 2 2 e e f f f f . . 
                    . . f 2 e f f f f 2 2 2 e f . . 
                    . . f f f e e e f f f f f f f . 
                    . . f e e 4 4 f b e 4 4 e f f . 
                    . . f f e d d f 1 4 d 4 e e f . 
                    . f d d f d d d d 4 e e e f . . 
                    . f b b f e e e 4 e e f . . . . 
                    . f b b e d d 4 2 2 2 f . . . . 
                    . . f b e d d e 4 4 4 f f . . . 
                    . . . f f e e f f f f f f . . . 
                    . . . . f f f . . . f f . . . . 
                    `,img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . f f f f f f . . . . . 
                    . . . . f 2 f e e e e f f . . . 
                    . . . f 2 2 2 f e e e e f f . . 
                    . . . f e e e e f f e e e f . . 
                    . . f e 2 2 2 2 e e f f f f . . 
                    . . f 2 e f f f f 2 2 2 e f . . 
                    . . f f f e e e f f f f f f f . 
                    . . f e e 4 4 f b e 4 4 e f f . 
                    . . . f e d d f 1 4 d 4 e e f . 
                    . . . . f d d d e e e e e f . . 
                    . . . . f e 4 e d d 4 f . . . . 
                    . . . . f 2 2 e d d e f . . . . 
                    . . . f f 5 5 f e e f f f . . . 
                    . . . f f f f f f f f f f . . . 
                    . . . . f f f . . . f f . . . . 
                    `,img`
                    . . . . . f f f f f f . . . . . 
                    . . . . f 2 f e e e e f f . . . 
                    . . . f 2 2 2 f e e e e f f . . 
                    . . . f e e e e f f e e e f . . 
                    . . f e 2 2 2 2 e e f f f f . . 
                    . . f 2 e f f f f 2 2 2 e f . . 
                    . . f f f e e e f f f f f f f . 
                    . . f e e 4 4 f b e 4 4 e f f . 
                    . . f f e d d f 1 4 d 4 e e f . 
                    . f d d f d d d d 4 e e e f . . 
                    . f b b f e e e 4 e e f f . . . 
                    . f b b e d d 4 2 2 2 f . . . . 
                    . . f b e d d e 2 2 2 e . . . . 
                    . . . f f e e f 4 4 4 f . . . . 
                    . . . . . f f f f f f . . . . . 
                    . . . . . . . f f f . . . . . . 
                    `,img`
                    . . . . . . . . . . . . . . . . 
                    . . . . f f f f f f . . . . . . 
                    . . . f 2 f e e e e f f . . . . 
                    . . f 2 2 2 f e e e e f f . . . 
                    . . f e e e e f f e e e f . . . 
                    . f e 2 2 2 2 e e f f f f . . . 
                    . f 2 e f f f f 2 2 2 e f . . . 
                    . f f f e e e f f f f f f f . . 
                    . f e e 4 4 f b e 4 4 e f f . . 
                    . . f e d d f 1 4 d 4 e e f . . 
                    . . . f d d d e e e e e f . . . 
                    . . . f e 4 e d d 4 f . . . . . 
                    . . . f 2 2 e d d e f . . . . . 
                    . . f f 5 5 f e e f f f . . . . 
                    . . f f f f f f f f f f . . . . 
                    . . . f f f . . . f f . . . . . 
                    `],
                100,
                false
                )
            }
            slashAttack.setScale(4, ScaleAnchor.Middle)
        })
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Peow, function (sprite, otherSprite) {
    music.play(music.createSoundEffect(WaveShape.Sawtooth, 1110, 1066, 255, 0, 150, SoundExpressionEffect.Vibrato, InterpolationCurve.Curve), music.PlaybackMode.InBackground)
    info.changeLifeBy(-1)
    sprite.setFlag(SpriteFlag.GhostThroughSprites, true)
    animation.runImageAnimation(
    sprite,
    [img`
        . . . . . . f f f f . . . . . . 
        . . . . f f f 2 2 f f f . . . . 
        . . . f f f 2 2 2 2 f f f . . . 
        . . f f f e e e e e e f f f . . 
        . . f f e 2 2 2 2 2 2 e e f . . 
        . . f e 2 f f f f f f 2 e f . . 
        . . f f f f e e e e f f f f . . 
        . f f e f b f 4 4 f b f e f f . 
        . f e e 4 1 d d d d 1 4 e e f . 
        . . f e e d d d d d d e e f . . 
        . . . f e e 4 4 4 4 e e f . . . 
        . . e 4 f 2 2 2 2 2 2 f 4 e . . 
        . . 4 d f 2 2 2 2 2 2 f d 4 . . 
        . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . 1 1 1 1 . . . . . . 
        . . . . 1 1 1 1 1 1 1 1 . . . . 
        . . . 1 1 1 1 1 1 1 1 1 1 . . . 
        . . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
        . . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
        . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . 
        . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . 
        . . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
        . . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
        . . . 1 1 1 1 1 1 1 1 1 1 1 . . 
        . . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
        . . 1 1 1 1 1 1 1 1 1 1 1 . . . 
        . . . . 1 1 1 1 1 1 1 1 . . . . 
        . . . . 1 1 1 1 1 1 1 . . . . . 
        . . . . 1 1 1 . . . . . . . . . 
        `,img`
        . . . . . . f f f f . . . . . . 
        . . . . f f f 2 2 f f f . . . . 
        . . . f f f 2 2 2 2 f f f . . . 
        . . f f f e e e e e e f f f . . 
        . . f f e 2 2 2 2 2 2 e e f . . 
        . . f e 2 f f f f f f 2 e f . . 
        . . f f f f e e e e f f f f . . 
        . f f e f b f 4 4 f b f e f f . 
        . f e e 4 1 d d d d 1 4 e e f . 
        . . f e e d d d d d d e e f . . 
        . . . f e e 4 4 4 4 e e f . . . 
        . . e 4 f 2 2 2 2 2 2 f 4 e . . 
        . . 4 d f 2 2 2 2 2 2 f d 4 . . 
        . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . 1 1 1 1 . . . . . . 
        . . . . 1 1 1 1 1 1 1 1 . . . . 
        . . . 1 1 1 1 1 1 1 1 1 1 . . . 
        . . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
        . . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
        . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . 
        . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . 
        . . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
        . . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
        . . 1 1 1 1 1 1 1 1 1 1 1 . . . 
        . . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
        . . . 1 1 1 1 1 1 1 1 1 1 1 . . 
        . . . . 1 1 1 1 1 1 1 1 . . . . 
        . . . . . 1 1 1 1 1 1 1 . . . . 
        . . . . . . . . . 1 1 1 . . . . 
        `,img`
        . . . . . . f f f f . . . . . . 
        . . . . f f f 2 2 f f f . . . . 
        . . . f f f 2 2 2 2 f f f . . . 
        . . f f f e e e e e e f f f . . 
        . . f f e 2 2 2 2 2 2 e e f . . 
        . . f e 2 f f f f f f 2 e f . . 
        . . f f f f e e e e f f f f . . 
        . f f e f b f 4 4 f b f e f f . 
        . f e e 4 1 d d d d 1 4 e e f . 
        . . f e e d d d d d d e e f . . 
        . . . f e e 4 4 4 4 e e f . . . 
        . . e 4 f 2 2 2 2 2 2 f 4 e . . 
        . . 4 d f 2 2 2 2 2 2 f d 4 . . 
        . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `],
    100,
    false
    )
    RuyolSB.value += 5
    timer.after(800, function () {
        sprite.setFlag(SpriteFlag.GhostThroughSprites, false)
    })
})
statusbars.onStatusReached(StatusBarKind.catHealth, statusbars.StatusComparison.LTE, statusbars.ComparisonType.Percentage, 50, function (status) {
    music.stopAllSounds()
    music.play(music.createSong(hex`00a0000408040300001c00010a006400f401640000040000000000000000000000000005000004d20000000400010a04000600010d06000800010a08000a00010d0a001000010f10001400010a14001600011116001800010f18002000010d20002400010a24002600010d26002800010a28002a00010d2a003000010f30003800010638004000010840004400010a44004600010d46004800010a48004a00010d4a005000010f50005400010a54005600011156005800010f58006000010d60006400010a64006600010d66006800010a68006a00010f6a007000010d70007400010f74007600011176007800010f78007c0001087c008000010d06001c00010a006400f401640000040000000000000000000000000000000002180000002000010a20004000010d40006000010a60008000010d09010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c800e000000001000100040005000105080009000200060c000d000105100011000100140015000105160017000105180019000200071c001d000105200021000100240025000105280029000200062c002d000105300031000100340035000105360037000105380039000200073c003d000105400041000100440045000105480049000200064c004d000105500051000100540055000105560057000105580059000200075c005d000105600061000100640065000105680069000200066c006d000105700071000100740075000105760077000105780079000200077c007d000105`), music.PlaybackMode.LoopingInBackground)
})
sprites.onOverlap(SpriteKind.Peow, SpriteKind.Projectile, function (sprite, otherSprite) {
    sprites.destroy(otherSprite, effects.ashes, 50)
    catSB.value += -2
    if (Math.percentChance(40)) {
        RuyolSB.value += 10
    }
    if (catSB.value <= 50) {
        catSpeed = randint(90, 110)
        catTransform = true
    }
    if (catSB.value <= 25) {
        catSpeed = randint(90, 110)
        catLast = true
    }
})
function CatMech () {
    if (CatBoss.isHittingTile(CollisionDirection.Bottom)) {
        if (!(catTransform)) {
            if (CatBoss.isHittingTile(CollisionDirection.Right)) {
                characterAnimations.setCharacterState(CatBoss, characterAnimations.rule(Predicate.FacingRight, Predicate.Moving))
                CatBoss.setVelocity(catSpeed * -1, 0)
            } else if (CatBoss.isHittingTile(CollisionDirection.Left)) {
                characterAnimations.setCharacterState(CatBoss, characterAnimations.rule(Predicate.FacingLeft, Predicate.Moving))
                CatBoss.setVelocity(catSpeed, 0)
            }
        } else {
            if (CatBoss.isHittingTile(CollisionDirection.Right)) {
                characterAnimations.setCharacterState(CatBoss, characterAnimations.rule(Predicate.FacingRight, Predicate.Moving))
                CatBoss.setVelocity(catSpeed * -1, randint(-120, -180))
            } else if (CatBoss.isHittingTile(CollisionDirection.Left)) {
                characterAnimations.setCharacterState(CatBoss, characterAnimations.rule(Predicate.FacingLeft, Predicate.Moving))
                CatBoss.setVelocity(catSpeed, randint(-120, -180))
            }
        }
    }
}
sprites.onOverlap(SpriteKind.Peow, SpriteKind.BigProjectile, function (sprite, otherSprite) {
    catSB.value += -50
    sprites.destroy(otherSprite, effects.fire, 100)
    if (catSB.value <= 50) {
        catSpeed = randint(90, 110)
        catTransform = true
    }
    if (catSB.value <= 50) {
        catSpeed = randint(90, 110)
        catLast = true
    }
})
sprites.onOverlap(SpriteKind.Peow, SpriteKind.Slash, function (sprite, otherSprite) {
    sprites.destroy(otherSprite, effects.ashes, 50)
    catSB.value += -7
    if (Math.percentChance(40)) {
        RuyolSB.value += 10
    }
    if (catSB.value <= 50) {
        catSpeed = randint(90, 110)
        catTransform = true
    }
    if (catSB.value <= 25) {
        catSpeed = randint(90, 110)
        catLast = true
    }
})
function MusicSetup () {
    music.play(music.createSong(assets.song`fightsong`), music.PlaybackMode.LoopingInBackground)
}
info.onLifeZero(function () {
    music.stopAllSounds()
    music.play(music.createSoundEffect(WaveShape.Sawtooth, 2492, 129, 177, 0, 1000, SoundExpressionEffect.Vibrato, InterpolationCurve.Curve), music.PlaybackMode.InBackground)
    game.gameOver(false)
})
controller.combos.attachCombo("lrdda", function () {
    if (RuyolSB.value >= 100) {
        ulti()
    }
})
statusbars.onStatusReached(StatusBarKind.Energy, statusbars.StatusComparison.GTE, statusbars.ComparisonType.Percentage, 100, function (status) {
    music.play(music.createSoundEffect(WaveShape.Sawtooth, 1333, 2314, 213, 0, 1000, SoundExpressionEffect.Vibrato, InterpolationCurve.Curve), music.PlaybackMode.InBackground)
})
function bossSetup () {
    catSpeed = 50
    CatBoss = sprites.create(img`
        e e e . . . . e e e . . . . 
        c d d c . . c d d c . . . . 
        c b d d f f d d b c . . . . 
        c 3 b d d b d b 3 c . . . . 
        f b 3 d d d d 3 b f . . . . 
        e d d d d d d d d e . . . . 
        e d f d d d d f d e . b f b 
        f d d f d d f d d f . f d f 
        f b d d b b d d 2 f . f d f 
        . f 2 2 2 2 2 2 b b f f d f 
        . f b d d d d d d b b d b f 
        . f d d d d d b d d f f f . 
        . f d f f f d f f d f . . . 
        . f f . . f f . . f f . . . 
        `, SpriteKind.Peow)
    CatBoss.ay = 400
    CatBoss.setVelocity(50, 0)
    tiles.placeOnTile(CatBoss, tiles.getTileLocation(7, 5))
    catSB = statusbars.create(6, 40, StatusBarKind.catHealth)
    catSB.setColor(2, 15, 4)
    catSB.positionDirection(CollisionDirection.Right)
    catSB.setBarBorder(2, 15)
    catSB.setOffsetPadding(-20, 6)
    catSB.setLabel("HP")
    catSB.setStatusBarFlag(StatusBarFlag.SmoothTransition, true)
    catSB.value = 100
    catAnim()
}
function catAnim () {
    characterAnimations.loopFrames(
    CatBoss,
    [img`
        . . . . e e e . . . . e e e 
        . . . . c d d c . . c d d c 
        . . . . c b d d f f d d b c 
        . . . . c 3 b d b d d b 3 c 
        . . . . f b 3 d d d d 3 b f 
        . . . . e d d d d d d d d e 
        b f b . e d f d d d d f d e 
        f d f . f d d f d d f d d f 
        f d f . f 2 d d b b d d b f 
        f d f f b b 2 2 2 2 2 2 f . 
        f b d b b d d d d d d b f . 
        . f f f d d b d d d d d f . 
        . . . f d f f d f f f d f . 
        . . . f f . . f f . . f f . 
        `,img`
        . . . . . . . . . . . . . . 
        . . . . e e e . . . . e e e 
        . . . . c d d c . . c d d c 
        . . . . c b d d f f d d b c 
        . . . . c 3 b d b d d b 3 c 
        . . . . f b 3 d d d d 3 b f 
        . . . . e d d d d d d d d e 
        . b f b e d f d d d d f d e 
        . f d f f d d f d d f d d f 
        . f d f b 2 d d b b d d b f 
        . f b d b d 2 2 2 2 2 2 f . 
        . . f f f d d d d d d d f . 
        . . . . f d f f f d b d f . 
        . . . . f f . . f f f f . . 
        `,img`
        . . . . . . . . . . . . . . 
        . . . . e e e . . . . e e e 
        . . . . c d d c . . c d d c 
        . . . . c b d d f f d d b c 
        . . . . c 3 b d b d d b 3 c 
        . . . . f b 3 d d d d 3 b f 
        . . . . e d d d d d d d d e 
        b f b . e d f d d d d f d e 
        f d f . f d d f d d f d d f 
        f d f f b 2 d d b b d d b f 
        f b d b b d 2 2 2 2 2 2 f . 
        . f f f f d d d d d d d f . 
        . . . . . f d f d b d f . . 
        . . . . . f f f f f f . . . 
        `],
    100,
    characterAnimations.rule(Predicate.Moving, Predicate.FacingLeft)
    )
    characterAnimations.loopFrames(
    CatBoss,
    [img`
        e e e . . . . e e e . . . . 
        c d d c . . c d d c . . . . 
        c b d d f f d d b c . . . . 
        c 3 b d d b d b 3 c . . . . 
        f b 3 d d d d 3 b f . . . . 
        e d d d d d d d d e . . . . 
        e d f d d d d f d e . b f b 
        f d d f d d f d d f . f d f 
        f b d d b b d d 2 f . f d f 
        . f 2 2 2 2 2 2 b b f f d f 
        . f b d d d d d d b b d b f 
        . f d d d d d b d d f f f . 
        . f d f f f d f f d f . . . 
        . f f . . f f . . f f . . . 
        `,img`
        . . . . . . . . . . . . . . 
        e e e . . . . e e e . . . . 
        c d d c . . c d d c . . . . 
        c b d d f f d d b c . . . . 
        c 3 b d d b d b 3 c . . . . 
        f b 3 d d d d 3 b f . . . . 
        e d d d d d d d d e . . . . 
        e d f d d d d f d e b f b . 
        f d d f d d f d d f f d f . 
        f b d d b b d d 2 b f d f . 
        . f 2 2 2 2 2 2 d b d b f . 
        . f d d d d d d d f f f . . 
        . f d b d f f f d f . . . . 
        . . f f f f . . f f . . . . 
        `,img`
        . . . . . . . . . . . . . . 
        e e e . . . . e e e . . . . 
        c d d c . . c d d c . . . . 
        c b d d f f d d b c . . . . 
        c 3 b d d b d b 3 c . . . . 
        f b 3 d d d d 3 b f . . . . 
        e d d d d d d d d e . . . . 
        e d f d d d d f d e . b f b 
        f d d f d d f d d f . f d f 
        f b d d b b d d 2 b f f d f 
        . f 2 2 2 2 2 2 d b b d b f 
        . f d d d d d d d f f f f . 
        . . f d b d f d f . . . . . 
        . . . f f f f f f . . . . . 
        `],
    100,
    characterAnimations.rule(Predicate.Moving, Predicate.FacingRight)
    )
}
function ulti () {
    scene.setBackgroundImage(img`
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        `)
    game.splash("HENSHIN!")
    scene.setBackgroundImage(img`
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeecccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeecccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeecccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeecccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        eeeeeeeeeeeeeeeeeeceeeeeeeeeeeeeeeeecccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        eeeeeeeeeeeeeeeeeecccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        eeeeeeeeeeeeeeeeeecccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        eeeeeeeeeeeeeeeeeecccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        eeeeeeeeeeeeeeeecccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        eeeeeeeeeeeeeecccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        eeeeeeeeeeeeeecccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        eeeeeeeeeeeeeeeecccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        eeeeeeeeeeeeeeeecccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        eeeeeeeeeeeeeeeecccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        eeeeeeeeeeeeeecccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        eeeeeeeeeeeecccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        eeeeeeeeeeeccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        eeeeeeeecccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        eeeeeecccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        eecccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccfccbfbfccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccffffffffccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccffffbffffcffccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccfbfffbfbffbcfccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccfffbfbbbbbbbbcfccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccffffffbbbbbbbbbbbccfcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccfffbffbbbbbbbbbbbbbcfcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccccccccccccccccccccccccccfffffbbbbbbbbbbbbbbbbbbbcfcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccccccccccccccccccccccccffffbbbbbbbbbbbbbbbbbbbbbbbcfccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccccccccccccccccccccccffffbbbbbbbbbbbbbbbbbbbbbbbbbcfccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccfffbbbbbbbbbbbbbbbbbbbbbbbbbbbcfccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccfffbbbbbbbbbbbbbbbbbbbbbbbbbbbbfcccccccccccccccccccccccccccccccccccccccccccccfffccccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccccccccccccccccccccfcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcfccccccccccccccccccccccccccccccccccccccccccccfffbffffcccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccfffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfcccccccccccccccccccccccccccccccccccccccccccfffffbbbbfccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccfffbfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfcccccccccccccccccccccccccccccccccccccccccccfbfbbbbbbfccccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccccccccccccccfffcfbfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfccccccccccccccccccccccccccccccccccccccffffbfbbbbbbbbffcccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccccccccccccfffccffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfbcccccccccccccccccccccccccccccccccccffccbffbbbbbbbbbbffccccccccccccccbffffffbbbccccccccccccccc
        cccccccccccccccccccccccffffffccbbbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfbccccccccccccccccccccccccccccccccccffccffffbbbbbbbbbbbffccccccccccbbfffbbbbffffbcccccccccccccc
        ccccccccccccccccccccccffcffffcbbbccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfbbccccccccccccccccccccccccccccccccfffcfbbbbbbbbbbbbbbbbfbcccccccbfffbbbbbbbbbbfffffccccccccccc
        cccccccccccccccccccccfcffffffcbcccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfbbcccccccccccccccccccccccccccccccfccffbbbbbbbbbbbbbbbcbffbccccbbffbbbbbbbbbbbbbbbbffcccccccccc
        ccccccccccccccccccccfffffffbcbbccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfbffcccccccccccccccccccccccccccccfcffffbbbbbbbbbbbbbbbccbffcccbbffbbbbbbbbbbbbbbbbbbfcccccccccc
        ccccccccccccccccccccffffffbbcbbccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbffffcccccccccccccccccccccccccccccfffffbbbbbbbbbbbbbbbbbbccffffbffbbbbbbbbbbbbbbbbbbbfcccccccccc
        ccccccccccccccccccffbfbffbbcbbccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfbbbfccccccccccccccccccccccccccccfffffbbbbbbbbbbbbbbbbbbbcbbbfffbbbbbbbbbbbbbbbbbbbbfcccccccccc
        cccccccccccccccccffffbbfbbcbbcccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfcccccccccccccccccccccccccccfffffbbbbbbbbbbbbbbbbbbbbbcbbbbbbbbbbbbbbbbbbbbbbbbbfcccccccccc
        ccccccccccccccccfffbbbffbbcbcbccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbffcccccccccccccccccccccccccffffbbbbbbbbbbbbbbbbbbbbbbbbcbbbbbbbbbbbbbbbbbbbbbbbbfbccccccccc
        cccccccccccccccffffbbbbbbbccbcbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccffcccccccccccccccccccccffbbbbbbbbbbbbbbbbbbbbbbbbbbbbcbbbbbbbbbbbbbbbbbbbbbbbffccccccccc
        cccccccccccccccffbbbbbbbbcbcbccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccbfcffcccccccccccccccccccccfbbbbbbccbbbbbbbbbbbbbbbbbbbbbbcbbbbbbbbbbbbbbbbbbbbbbbfccccccccc
        ccccccccccccccfffbbbbbbbbcbccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcbcccfccccccccfffffcccccccfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcbbbbbbbbbbbbbbbbbbbbbbfbcccccccc
        ccccccccfffcfffbbbbbbbbbcbbccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcbbccffffbffffbbbbbffffffffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccbbbbbbbbbbbbbbbbbbbbbfbcccccccc
        cccccccffcffffbbbbbbbbbbcbcbcccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccbfcbbbffbbbbbbbbcccccccccccccccccccccccccccbbbbbbbbbbbbbbccbbbbbbbbbbbbbbbbbbbbbffbccccccc
        cccccccfcfffffbbbbbbbbbbccbcccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcbfcbbbbbbbbbbbbbbbbbfbbbbbbbbbbbbcccccbbbbbccbbbbbbbbbbcbcccbbbbbbbbbbbbbbbbbbbbbfbccccccc
        cccccccffffffbbbbbbbbbbbccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcbbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcbbbbbbbbbbbbbbbbbbcbcccbbbbbbbbbbbbbbbbbbbbffbcccccc
        ccccccccfffbbbbbbbbbbbbcbcccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcbcbbbbbbbbbbbbbbbbbbbccbccbbbbbbbbbbbbbbbbbbbbffcccccc
        cccccccffbbbbbbbbbbbbbbcbcbcccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcbcbbbbbbbbbbbbbbbbbbccbbcbbbbbbbbbbbbbbbbbbbbbfcccccc
        cccccccffbbbbbbbbbbbbbbcbcccbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccbbbbbbbbbbbbbbbbbbbcbbccbbbbbbbbbbbbbbbbbbbbfcccccc
        ccccfffffbbbbbbbbbbbbbbcccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccbbbbbbbbbbbbbbbbbbbccbbccbbbbbbbbbbbbbbbbbbbfcccccc
        cccfcfbbbbbbbbbbbbbbbbbbcccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccbbbbbbbbbbbbbbbbbbbbcbbccbbbbbbbbbbbbbbbbbbbbfccccc
        ccffffbbbbbbbbbbbbbbbbbbbbcccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccbbbbbbbbbbbbbbbbbbbcbbcbbbbbbbbbbbbbbbbbbbbbfccccc
        ffffbbbbbbbbbbbbbbbbbbbbbbbccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcbcbbbbbbbbbbbbbbbbbbcbbbcbbbbbbbbbbbbbbbbbbbbffcccc
        ffffbbbbbbbbbbbbbbbbbbbbbbbccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcbcbbbbbbbbbbbbbbbbbbcbbcbbbbbbbbbbbbbbbbbbbbbffccc
        fffbbbbbbbbbbbbbbbbbbbbbbbbccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcbbcbbbbbbbbbbbbbbbbbcbbcbbbbbbbbbbbbbbbbbbbbbbfbcc
        fbbbbbbbbbbbbbbbbbbbbbbbbbbccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcbcbbbbbbbbbbbbbbbbbbcbcbbbbbbbbbbbbbbbbbbbbbbfbbc
        bbbbbbbbbbbbbbbbbbbbbbbbbbbccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccbbbbbbbbbbbbbbbbbbcbbcbbbbbbbbbbbbbbbbbbbbbbfff
        bbbbbbbbbbbbbbbbbbbbbbbbbbbccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcbcbbbbbbbbbbbbbbbbbcbbcbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcbcbbbbbbbbbbbbbbbbbcbbcbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbcbbbbbbbbbbbbbbbbbbbbbbbcccccbbbbbbbbbbbbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcbcbbbbbbbbbbbbbbbbbcbbcbbbbbbbbbbbbbbbbbbbbccccb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbcbbbbbbbbbbbbbbbcccccccccccccccccbbbbbbbccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcbbbbbbbbbbbbbbbbbbccbcbbbbbbbbbbbbbbbbbbbcccccb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbcbbbbbbbbbbbbbbccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcbcbbbbbbbbbbbcccccbbbccccccb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcbbbbbbbbbbbbccccccbbbccccccc
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccbbbbbbbbbbbccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcbbbbbbbbbbbbccccccbbbccccccc
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccbbbbbbbbbbbbbbcccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccc
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccbbbbbbbbbbbbbbbbbcccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccc
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccbbbbbbbbbbbbbbbbbbbbccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccbbbbbccccbbbbbbbbbbbbbcccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccbbbbbcccccbbbbbbbbbbbbbcccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccbbbbccccccbbbbbbbbbbbbbbccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccbbbbccccccbbbbbbbbbbbbbbccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccbbbbcccccbbbbccccccbbbbbbcccbbbbbbbbbbbbbbbbbbbbbbbbbbbbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccbbbbccccbbbbccccccbbbbbbcccbbbbbbbbbbbbbbbbbbbbbbbbbbbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccbbbbbbbbbbbbccccccbbbbbccccbbbbbbbbbbbbbbbbbbbbbbbbbbbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcbbbbbbccccbbbbbbbbbbbbcccccbbbbbbccccbbbbbbbbbbbbbbbbbbbbbbbbbbbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccbbbbbbbcccbbbbbbbbbbbbbbbbbbbbbbccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbccbbbccbbbbbbbbcccbbbbbbbbbbbbbbbbbbbbbbccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccb
        bbbbbbbbbbbbbbbbbbbbbbbbbcbbbbccbbbbbbbbbcccbbbbbbcbbbbbbbbbbbbbbcccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccb
        bbbbbbbbbbbbbbbbbbbbbbbbcbbbbcbbbbbbbbbbbcccbbbbbcbbbbbbbbbbbbbccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccb
        bbbbbbbbbbbbbbbbbbbbbbbcbccccbbbbbbbbbbbbccccccccbbbbcbbbbbbcccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccb
        bbbbbbbbbbbbbbbbbbbbbbcccccbbbbbbbbbbbbbccccbbcccccbccbbbbccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccb
        bbbbbbbbbbbbbbbbbbbcccbccbbbbbbbbbbbbbbbccccbbcbbbcccbbbbcccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccb
        bbbbbbbbbbbbbbbbbcccbcccbbbbbbbbbbbbbbbcccccbccbbbbccbbbcccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccb
        bbbbbbbbbbbbbbbccccccccbbbbbbbbbbbbbbbbccccbbcbbbbccbccbcccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccbb
        bbbbbbbbbbbbbccccbbbcbbbbbbbbbbbbbbbbbbccccbbbbbbbcbbbccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccbb
        bbbbbbbbbbbccccbbbbbbbbbbccccbbbbbbbbbbcccccbbbbbbbbbbcccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccbb
        bbbbbbbbbccccbbbbbbbbbbccccccbbbbbbbbbbbcccccccbbbbbbccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccc
        bbbbbbbbcccbbbbbbbbbbbcccccccbbbbbbbbbbbccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccc
        bbbbbbbccbbbbbbbbbbbbbcccccccbbbbbbbbbbbbccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccc
        bbbbbccbbbbbbbbbbbbbbbcccccccbbbbbbbbbbbbbbbccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccc
        bbbccbbbbbbbbbbbbbbbbbcccccccbcccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccc
        bbcbbbbbbbbbbbbbbbbbbbbccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccc
        bcbbbbbbbbbbbbbbbbbbbbbbcccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccc
        cbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccc
        bbbbbbbbbbbbbbbbbbbbbbbbccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcbbbbbcbbbbbbbbbbbbbbbbbbbbbbbbbcbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccc
        bbbbbbbbbbbbbbbbbbbbbbbbccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcbbcccccbbbbbbbbbbbbbbbbbbbbbbccccbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccc
        bbbbbbbbbbbbbbbbbbbbbbbbccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccbbbbbbbbbbbbbbbbbbbbbbbcccccbbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccbb
        bbbbbbbbbbbbbbbbbbbbbbbccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccbcccccbbbbbbbbbbbbbbbbbbbbbccccccccbbbccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccbbb
        bbbbbbbbbbbbbbbbbbbbbbcccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccbcccccbbbbbbbbbbbbbbbbbcccccccccbbbbcccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccbbb
        bbbbbbbbbbbbbbbbbbbbbcccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcbbccccccccbbbbbbbbbbbbbbbbbbbbbbccccccccbbbbbbcbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccbbbb
        bbbbbbbbbbbbbbbbbbbbccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccbbbbbbbcbccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccbbbbbbbbccbcccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbcccccccbcccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccbbbbbbbcbbbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbcccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccbbbbbbbbcccbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccbbbbbbbbbbcbbccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbcccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccbbbbbbbbbbbbbbbbbbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        `)
    sprites.destroyAllSpritesOfKind(SpriteKind.Player)
    TPlayer = sprites.create(img`
        . . . . . . f f f f . . . . . . 
        . . . . f f f 9 9 f f f . . . . 
        . . . f f f 9 9 9 9 f f f . . . 
        . . f f f 9 9 9 9 9 9 f f f . . 
        . . f f 9 9 9 9 9 9 9 9 9 f . . 
        . . f 9 9 f f f f f f 9 9 f . . 
        . . f f f f 9 9 9 9 f f f f . . 
        . f f 9 f 2 2 6 6 2 2 f 9 f f . 
        . f 9 9 6 2 f f f f 2 6 9 9 f . 
        . . f 9 9 f f 1 1 f f 9 9 f . . 
        . . . f 9 9 6 6 6 6 9 9 f . . . 
        . . e 6 f 9 9 9 9 9 9 f 6 e . . 
        . . 6 d f 9 9 9 9 9 9 f d 6 . . 
        . . 6 6 f 6 6 4 4 6 6 f 6 6 . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `, SpriteKind.ThePlayer)
    animation.runImageAnimation(
    TPlayer,
    [img`
        . . . . . . f f f f . . . . . . 
        . . . . f f f 9 9 f f f . . . . 
        . . . f f f 9 9 9 9 f f f . . . 
        . . f f f 9 9 9 9 9 9 f f f . . 
        . . f f 9 9 9 9 9 9 9 9 9 f . . 
        . . f 9 9 f f f f f f 9 9 f . . 
        . . f f f f 9 9 9 9 f f f f . . 
        . f f 9 f 2 2 6 6 2 2 f 9 f f . 
        . f 9 9 6 2 f f f f 2 6 9 9 f . 
        . . f 9 9 f f 1 1 f f 9 9 f . . 
        . . . f 9 9 6 6 6 6 9 9 f . . . 
        . . e 6 f 9 9 9 9 9 9 f 6 e . . 
        . . 6 d f 9 9 9 9 9 9 f d 6 . . 
        . . 6 6 f 6 6 4 4 6 6 f 6 6 . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `,img`
        . . . . . . f f f f . . . . . . 
        . . . . f f f 9 9 f f f . . . . 
        . . . f f f 9 9 9 9 f f f . . . 
        . . f f f 9 9 9 9 9 9 f f f . . 
        . . f f 9 9 9 9 9 9 9 9 9 f . . 
        . . f 9 9 f f f f f f 9 9 f . . 
        . . f f f f 9 9 9 9 f f f f . . 
        . f f 9 f 2 2 6 6 2 2 f 9 f f . 
        . f 9 9 6 2 f f f f 2 6 9 9 f . 
        . . f 9 9 f f 1 1 f f 9 9 f . . 
        . . . f 9 9 6 6 6 6 9 9 f . . . 
        . 6 e 6 f 9 9 9 9 9 9 f 6 e 6 . 
        . 6 6 d f 9 9 9 9 9 9 f d 6 6 . 
        . . . . f 6 6 4 4 6 6 f . . . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `,img`
        . . . . . . f f f f . . . . . . 
        . . . . f f f 9 9 f f f . . . . 
        . . . f f f 9 9 9 9 f f f . . . 
        . . f f f 9 9 9 9 9 9 f f f . . 
        . . f f 9 9 9 9 9 9 9 9 9 f . . 
        . . f 9 9 f f f f f f 9 9 f . . 
        . . f f f f 9 9 9 9 f f f f . . 
        . f f 9 f 2 2 6 6 2 2 f 9 f f . 
        . f 9 9 6 2 f f f f 2 6 9 9 f . 
        . . f 9 9 f f 1 1 f f 9 9 f . . 
        6 6 . f 9 9 6 6 6 6 9 9 f . 6 6 
        6 6 e 6 f 9 9 9 9 9 9 f 6 e 6 6 
        6 6 6 d f 9 9 9 9 9 9 f d 6 6 6 
        . . 6 6 f 6 6 4 4 6 6 f 6 6 . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `],
    100,
    false
    )
    TPlayer.setFlag(SpriteFlag.GhostThroughSprites, true)
    TPlayer.setPosition(80, 60)
    TPlayer.setScale(4, ScaleAnchor.Middle)
    timer.after(1500, function () {
        animation.runImageAnimation(
        TPlayer,
        [img`
            . . . . . . f f f f . . . . . . 
            . . . . f f f 9 9 f f f . . . . 
            . . . f f f 9 9 9 9 f f f . . . 
            . . f f f 9 9 9 9 9 9 f f f . . 
            . . f f 9 9 9 9 9 9 9 9 9 f . . 
            . . f 9 9 f f f f f f 9 9 f . . 
            . . f f f f 9 9 9 9 f f f f . . 
            . f f 9 f 2 2 6 6 2 2 f 9 f f . 
            . f 9 9 6 2 f f f f 2 6 9 9 f . 
            . . f 9 9 f f 1 1 f f 9 9 f . . 
            . . . f 9 9 6 6 6 6 9 9 f . . . 
            . . e 6 f 9 9 9 9 9 9 f 6 e . . 
            . . 6 d f 9 9 9 9 9 9 f d 6 . . 
            . . 6 6 f 6 6 4 4 6 6 f 6 6 . . 
            . . . . . f f f f f f . . . . . 
            . . . . . f f . . f f . . . . . 
            `,img`
            . . . . . . f f f f . . . . . . 
            . . . . f f f 9 9 f f f . . . . 
            . . . f f f 9 9 9 9 f f f . . . 
            . . f f f 9 9 9 9 9 9 f f f . . 
            . . f f 9 9 9 9 9 9 9 9 9 f . . 
            . . f 9 9 f f f f f f 9 9 f . . 
            . . f f f f 9 9 9 9 f f f f . . 
            . f f 9 f 1 1 6 6 1 1 f 9 f f . 
            . f 9 9 1 1 f f f f 1 1 9 9 f . 
            . . f 9 9 f f 2 2 f f 9 9 f . . 
            6 . . f 9 9 6 6 6 6 9 9 f . . . 
            6 6 e 6 f 9 9 9 9 9 9 f 6 e 6 . 
            . 6 6 d f 9 9 9 9 9 9 f d 6 6 6 
            . . 6 6 f 6 6 4 4 6 6 f 6 6 . 6 
            . . . . . f f f f f f . . . . 6 
            . . . . . f f . . f f . . . . . 
            `,img`
            . . . . . . f f f f . . . . . . 
            . . . . f f f 9 9 f f f . . . . 
            . . . f f f 9 9 9 9 f f f . . . 
            . . f f f 9 9 9 9 9 9 f f f . . 
            . . f f 9 9 9 9 9 9 9 9 9 f . . 
            . . f 9 9 f f f f f f 9 9 f . . 
            . . f f f f 9 9 9 9 f f f f . . 
            . f f 9 f 2 2 6 6 2 2 f 9 f f . 
            . f 9 9 6 2 f f f f 2 6 9 9 f . 
            . . f 9 9 f f 1 1 f f 9 9 f . . 
            . . . f 9 9 6 6 6 6 9 9 f . . . 
            . . e 6 f 9 9 9 9 9 9 f 6 e . . 
            . . 6 d f 9 9 9 9 9 9 f d 6 . . 
            . . 6 6 f 6 6 4 4 6 6 f 6 6 . . 
            . . . . . f f f f f f . . . . . 
            . . . . . f f . . f f . . . . . 
            `,img`
            . . . . . . f f f f . . . . . . 
            . . . . f f f 9 9 f f f . . . . 
            . . . f f f 9 9 9 9 f f f . . . 
            . . f f f 9 9 9 9 9 9 f f f . . 
            . . f f 9 9 9 9 9 9 9 9 9 f . . 
            . . f 9 9 f f f f f f 9 9 f . . 
            . . f f f f 9 9 9 9 f f f f . . 
            . f f 9 f 1 1 6 6 1 1 f 9 f f . 
            . f 9 9 1 1 f f f f 1 1 9 9 f . 
            . . f 9 9 f f 2 2 f f 9 9 f . 6 
            . . . f 9 9 6 6 6 6 9 9 f . . 6 
            . 6 e 6 f 9 9 9 9 9 9 f 6 e 6 6 
            6 6 6 d f 9 9 9 9 9 9 f d 6 6 6 
            6 . 6 6 f 6 6 4 4 6 6 f 6 6 . . 
            6 . . . . f f f f f f . . . . . 
            . . . . . f f . . f f . . . . . 
            `],
        200,
        true
        )
        music.stopAllSounds()
        music.play(music.createSoundEffect(WaveShape.Noise, 887, 843, 132, 65, 1600, SoundExpressionEffect.Warble, InterpolationCurve.Curve), music.PlaybackMode.InBackground)
        for (let index = 0; index < 15; index++) {
            ultiProject = sprites.createProjectileFromSide(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . 6 6 6 6 . . . . . . 
                . . . . 6 6 6 5 5 6 6 6 . . . . 
                . . . 7 7 7 7 6 6 6 6 6 6 . . . 
                . . 6 7 7 7 7 8 8 8 1 1 6 6 . . 
                . . 7 7 7 7 7 8 8 8 1 1 5 6 . . 
                . 6 7 7 7 7 8 8 8 8 8 5 5 6 6 . 
                . 6 7 7 7 8 8 8 6 6 6 6 5 6 6 . 
                . 6 6 7 7 8 8 6 6 6 6 6 6 6 6 . 
                . 6 8 7 7 8 8 6 6 6 6 6 6 6 6 . 
                . . 6 8 7 7 8 6 6 6 6 6 8 6 . . 
                . . 6 8 8 7 8 8 6 6 6 8 6 6 . . 
                . . . 6 8 8 8 8 8 8 8 8 6 . . . 
                . . . . 6 6 8 8 8 8 6 6 . . . . 
                . . . . . . 6 6 6 6 . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, 100, 180)
            ultiProject.setPosition(randint(0, 90), 0)
            ultiProject.setKind(SpriteKind.BigProjectile)
            ultiProject.setFlag(SpriteFlag.GhostThroughWalls, true)
            ultiProject.setFlag(SpriteFlag.AutoDestroy, true)
            pause(200)
        }
        PlayerSetup()
    })
}
function PlayerAnim () {
    characterAnimations.loopFrames(
    Ruyol,
    [img`
        . . . . . . f f f f f f . . . . 
        . . . . f f e e e e f 2 f . . . 
        . . . f f e e e e f 2 2 2 f . . 
        . . . f e e e f f e e e e f . . 
        . . . f f f f e e 2 2 2 2 e f . 
        . . . f e 2 2 2 f f f f e 2 f . 
        . . f f f f f f f e e e f f f . 
        . . f f e 4 4 e b f 4 4 e e f . 
        . . f e e 4 d 4 1 f d d e f . . 
        . . . f e e e 4 d d d d f . . . 
        . . . . f f e e 4 4 4 e f . . . 
        . . . . . 4 d d e 2 2 2 f . . . 
        . . . . . e d d e 2 2 2 f . . . 
        . . . . . f e e f 4 5 5 f . . . 
        . . . . . . f f f f f f . . . . 
        . . . . . . . f f f . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f f f . . . . 
        . . . . f f e e e e f 2 f . . . 
        . . . f f e e e e f 2 2 2 f . . 
        . . . f e e e f f e e e e f . . 
        . . . f f f f e e 2 2 2 2 e f . 
        . . . f e 2 2 2 f f f f e 2 f . 
        . . f f f f f f f e e e f f f . 
        . . f f e 4 4 e b f 4 4 e e f . 
        . . f e e 4 d 4 1 f d d e f . . 
        . . . f e e e e e d d d f . . . 
        . . . . . f 4 d d e 4 e f . . . 
        . . . . . f e d d e 2 2 f . . . 
        . . . . f f f e e f 5 5 f f . . 
        . . . . f f f f f f f f f f . . 
        . . . . . f f . . . f f f . . . 
        `,img`
        . . . . . . f f f f f f . . . . 
        . . . . f f e e e e f 2 f . . . 
        . . . f f e e e e f 2 2 2 f . . 
        . . . f e e e f f e e e e f . . 
        . . . f f f f e e 2 2 2 2 e f . 
        . . . f e 2 2 2 f f f f e 2 f . 
        . . f f f f f f f e e e f f f . 
        . . f f e 4 4 e b f 4 4 e e f . 
        . . f e e 4 d 4 1 f d d e f . . 
        . . . f e e e 4 d d d d f . . . 
        . . . . f f e e 4 4 4 e f . . . 
        . . . . . 4 d d e 2 2 2 f . . . 
        . . . . . e d d e 2 2 2 f . . . 
        . . . . . f e e f 4 5 5 f . . . 
        . . . . . . f f f f f f . . . . 
        . . . . . . . f f f . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f f f . . . . 
        . . . . f f e e e e f 2 f . . . 
        . . . f f e e e e f 2 2 2 f . . 
        . . . f e e e f f e e e e f . . 
        . . . f f f f e e 2 2 2 2 e f . 
        . . . f e 2 2 2 f f f f e 2 f . 
        . . f f f f f f f e e e f f f . 
        . . f f e 4 4 e b f 4 4 e e f . 
        . . f e e 4 d 4 1 f d d e f . . 
        . . . f e e e 4 d d d d f . . . 
        . . . . 4 d d e 4 4 4 e f . . . 
        . . . . e d d e 2 2 2 2 f . . . 
        . . . . f e e f 4 4 5 5 f f . . 
        . . . . f f f f f f f f f f . . 
        . . . . . f f . . . f f f . . . 
        `],
    100,
    characterAnimations.rule(Predicate.Moving, Predicate.FacingRight)
    )
    characterAnimations.loopFrames(
    Ruyol,
    [img`
        . . . . f f f f f f . . . . . . 
        . . . f 2 f e e e e f f . . . . 
        . . f 2 2 2 f e e e e f f . . . 
        . . f e e e e f f e e e f . . . 
        . f e 2 2 2 2 e e f f f f . . . 
        . f 2 e f f f f 2 2 2 e f . . . 
        . f f f e e e f f f f f f f . . 
        . f e e 4 4 f b e 4 4 e f f . . 
        . . f e d d f 1 4 d 4 e e f . . 
        . . . f d d d d 4 e e e f . . . 
        . . . f e 4 4 4 e e f f . . . . 
        . . . f 2 2 2 e d d 4 . . . . . 
        . . . f 2 2 2 e d d e . . . . . 
        . . . f 5 5 4 f e e f . . . . . 
        . . . . f f f f f f . . . . . . 
        . . . . . . f f f . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . f f f f f f . . . . . . 
        . . . f 2 f e e e e f f . . . . 
        . . f 2 2 2 f e e e e f f . . . 
        . . f e e e e f f e e e f . . . 
        . f e 2 2 2 2 e e f f f f . . . 
        . f 2 e f f f f 2 2 2 e f . . . 
        . f f f e e e f f f f f f f . . 
        . f e e 4 4 f b e 4 4 e f f . . 
        . . f e d d f 1 4 d 4 e e f . . 
        . . . f d d d e e e e e f . . . 
        . . . f e 4 e d d 4 f . . . . . 
        . . . f 2 2 e d d e f . . . . . 
        . . f f 5 5 f e e f f f . . . . 
        . . f f f f f f f f f f . . . . 
        . . . f f f . . . f f . . . . . 
        `,img`
        . . . . f f f f f f . . . . . . 
        . . . f 2 f e e e e f f . . . . 
        . . f 2 2 2 f e e e e f f . . . 
        . . f e e e e f f e e e f . . . 
        . f e 2 2 2 2 e e f f f f . . . 
        . f 2 e f f f f 2 2 2 e f . . . 
        . f f f e e e f f f f f f f . . 
        . f e e 4 4 f b e 4 4 e f f . . 
        . . f e d d f 1 4 d 4 e e f . . 
        . . . f d d d d 4 e e e f . . . 
        . . . f e 4 4 4 e e f f . . . . 
        . . . f 2 2 2 e d d 4 . . . . . 
        . . . f 2 2 2 e d d e . . . . . 
        . . . f 5 5 4 f e e f . . . . . 
        . . . . f f f f f f . . . . . . 
        . . . . . . f f f . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . f f f f f f . . . . . . 
        . . . f 2 f e e e e f f . . . . 
        . . f 2 2 2 f e e e e f f . . . 
        . . f e e e e f f e e e f . . . 
        . f e 2 2 2 2 e e f f f f . . . 
        . f 2 e f f f f 2 2 2 e f . . . 
        . f f f e e e f f f f f f f . . 
        . f e e 4 4 f b e 4 4 e f f . . 
        . . f e d d f 1 4 d 4 e e f . . 
        . . . f d d d d 4 e e e f . . . 
        . . . f e 4 4 4 e d d 4 . . . . 
        . . . f 2 2 2 2 e d d e . . . . 
        . . f f 5 5 4 4 f e e f . . . . 
        . . f f f f f f f f f f . . . . 
        . . . f f f . . . f f . . . . . 
        `],
    100,
    characterAnimations.rule(Predicate.Moving, Predicate.FacingLeft)
    )
}
let ultiProject: Sprite = null
let TPlayer: Sprite = null
let catLast = false
let catTransform = false
let catSB: StatusBarSprite = null
let slashAttack: Sprite = null
let smallProj: Sprite = null
let catSpeed = 0
let RuyolSB: StatusBarSprite = null
let stance = 0
let Ruyol: Sprite = null
let CatBoss: Sprite = null
game.splash("SPLASH", "the game")
LevelSetup()
MusicSetup()
PlayerSetup()
bossSetup()
game.onUpdate(function () {
    CatMech()
})
