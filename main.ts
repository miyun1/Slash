function LevelSetup () {
    tiles.setCurrentTilemap(tilemap`level2`)
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Ruyol.isHittingTile(CollisionDirection.Bottom)) {
        Ruyol.vy = -150
    }
})
function PlayerSetup () {
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
    tiles.placeOnTile(Ruyol, tiles.getTileLocation(2, 2))
    info.setLife(5)
    controller.combos.setTimeout(500)
    RuyolSB = statusbars.create(90, 6, StatusBarKind.Energy)
    RuyolSB.setColor(9, 15)
    RuyolSB.setStatusBarFlag(StatusBarFlag.LabelAtEnd, true)
    RuyolSB.setLabel("Power")
    RuyolSB.setBarBorder(1, 15)
    RuyolSB.positionDirection(CollisionDirection.Top)
    RuyolSB.setOffsetPadding(10, 5)
    RuyolSB.value = 0
}
function MusicSetup () {
    music.play(music.createSong(assets.song`fightsong`), music.PlaybackMode.LoopingInBackground)
}
let RuyolSB: StatusBarSprite = null
let Ruyol: Sprite = null
LevelSetup()
PlayerSetup()
