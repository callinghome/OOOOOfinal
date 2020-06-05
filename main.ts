namespace SpriteKind {
    export const 怪物攻擊 = SpriteKind.create()
    export const 攻擊 = SpriteKind.create()
    export const 公主 = SpriteKind.create()
    export const Enemy2 = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Enemy2, SpriteKind.公主, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    monster2.destroy()
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    if (position != 90) {
        position += 30
        mySprite.setPosition(20, position)
    }
})
sprites.onOverlap(SpriteKind.怪物攻擊, SpriteKind.Player, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    mySprite3.destroy()
    music.pewPew.play()
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    mySprite2.destroy()
    projectile.destroy()
    info.changeScoreBy(1)
    score += 1
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.公主, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    mySprite2.destroy()
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.setImage(img`
. . . . . . . f f . . . . . . . . . . . . . . . 
. . . . f f f f 2 f f . . . . . . . . . . . . . 
. . f f e e e e f 2 f f . . . . . . . . . . . . 
. f f e e e e e f 2 2 f f . . . . . . . . . . . 
. f e e e e f f e e e e f . . . . . . . . . . . 
. f f f f f e e 2 2 2 2 e f . . . . . . . . . . 
f f f e 2 2 2 f f f f e 2 f . . . . . . . . . . 
f f f f f f f f e e e f f f . . . . . . . . . . 
f e f e 4 4 e b f 4 4 e e f . . . . . . . . . . 
. f e e 4 d 4 b f d d e f . . . . . . . . . . . 
. . f e e e 4 d d d e e . c . . . . . . . . . . 
. . . f 2 2 2 2 e e d d e c c c c c c c . . . . 
. . . f 4 4 4 e 4 4 d d e c d d d d d . . . . . 
. . . f f f f f e e e e . c c c c c . . . . . . 
. . f f f f f f f f . . . c . . . . . . . . . . 
. . f f f . . f f . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
`)
    projectile = sprites.createProjectileFromSprite(img`
. . . . . . . . . . . . . . . . 
. . . . . . 4 4 4 4 . . . . . . 
. . . . 4 4 4 5 5 4 4 4 . . . . 
. . . 3 3 3 3 4 4 4 4 4 4 . . . 
. . 4 3 3 3 3 2 2 2 1 1 4 4 . . 
. . 3 3 3 3 3 2 2 2 1 1 5 4 . . 
. 4 3 3 3 3 2 2 2 2 2 5 5 4 4 . 
. 4 3 3 3 2 2 2 4 4 4 4 5 4 4 . 
. 4 4 3 3 2 2 4 4 4 4 4 4 4 4 . 
. 4 2 3 3 2 2 4 4 4 4 4 4 4 4 . 
. . 4 2 3 3 2 4 4 4 4 4 2 4 . . 
. . 4 2 2 3 2 2 4 4 4 2 4 4 . . 
. . . 4 2 2 2 2 2 2 2 2 4 . . . 
. . . . 4 4 2 2 2 2 4 4 . . . . 
. . . . . . 4 4 4 4 . . . . . . 
. . . . . . . . . . . . . . . . 
`, mySprite, 100, 0)
    music.pewPew.play()
    pause(1000)
    mySprite.setImage(img`
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . f f f f . . . . . . . . . . . . . . . 
. . . f f f 2 2 f f f . . . . . . . . . . . . . 
. . f f f 2 2 2 2 f f f . . . . . . . . . . . . 
. f f f e e e e e e f f f . . . . . . . . . . . 
. f f e 2 2 2 2 2 2 e e f . . . . . . . . . . . 
. f e 2 f f f f f f 2 e f . . . . . . . . . . . 
. f f f f e e e e f f f f . . . . . . . . . . . 
f f e f b f 4 4 f b f e f f . . . . . . . . . . 
f e e 4 1 f d d f 1 4 e e f . . . . . . . . . . 
. f f f f d d d d d e e f . . . . . . . . . . . 
f d d d d f 4 4 4 e e f . . . . . . . . . . . . 
f b b b b f 2 2 2 2 f 4 e . . . . . . . . . . . 
f b b b b f 2 2 2 2 f d 4 . . . . . . . . . . . 
. f c c f 4 5 5 4 4 f 4 4 . . . . . . . . . . . 
. . f f f f f f f f . . . . . . . . . . . . . . 
. . . . f f . . f f . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
`)
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (position != 30) {
        position += -30
        mySprite.setPosition(20, position)
    }
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy2, function (sprite, otherSprite) {
    monster2.destroy()
    projectile.destroy()
    info.changeScoreBy(1)
    score += 1
})
let a = 0
let speed = 0
let random = 0
let projectile: Sprite = null
let mySprite2: Sprite = null
let mySprite3: Sprite = null
let monster2: Sprite = null
let mySprite: Sprite = null
let position = 0
game.splash("怪物到樹林-1 被餅乾打到-1 打到怪物得分+1", "按下A遊戲開始")
scene.setBackgroundColor(9)
let mySprite4 = sprites.create(img`
. . . . . . . . . . . . . . . c c . . . . . . . . . . . . . . . 
. . . . . . . . . . . . c c c 6 5 c 6 6 . . . . . . . . . . . . 
. . . . . . . . . . . . c 6 c 5 5 c 7 6 . . . . . . . . . . . . 
. . . . . . . . . . . 6 c c 7 5 5 7 c 6 6 . . . . . . . . . . . 
. . . . . . . . . . c c 7 7 7 7 7 5 7 7 c 6 . . . . . . . . . . 
. . . . . . . . . 6 6 6 c 6 7 7 7 7 6 c c 6 6 . . . . . . . . . 
. . . . . . . . c 7 7 7 6 c 7 c 6 7 6 5 7 5 7 6 . . . . . . . . 
. . . . . . . . c c c 6 6 6 c 6 6 6 6 5 5 6 6 6 . . . . . . . . 
. . . . . . c 6 6 c c 7 6 6 6 6 6 7 7 7 7 c 6 7 6 6 . . . . . . 
. . . . . c 7 7 7 c 7 7 6 6 7 6 6 7 7 6 7 7 6 7 7 7 6 . . . . . 
. . . . . c c 6 6 c c c c 7 7 c 6 7 7 c c 6 6 6 6 6 6 . . . . . 
. . . . c 6 7 6 6 6 6 6 c 7 c 6 7 6 7 6 7 7 7 7 7 7 6 6 . . . . 
. . . c c 7 7 7 6 6 6 6 6 6 6 7 7 7 6 7 7 7 7 6 6 7 c 6 6 . . . 
. 6 6 6 c c 6 6 7 7 6 6 6 6 6 7 7 7 7 7 7 7 7 7 6 6 7 7 6 6 6 . 
. 6 7 7 7 6 6 7 7 c 6 7 6 6 7 7 7 7 7 7 7 6 6 7 7 6 7 7 7 7 6 . 
c c 6 6 6 6 c c c 6 7 7 6 7 7 7 6 7 7 7 7 7 6 c c 7 7 6 7 6 6 6 
c 6 6 6 7 7 7 6 6 7 7 6 6 7 7 6 c 7 7 6 7 7 7 c 6 7 7 7 6 c 6 6 
. c 6 7 7 7 6 6 6 c c c 6 6 7 c 6 7 6 c c 6 6 6 6 6 7 7 7 6 c . 
. c c 6 6 6 6 7 6 6 6 6 6 c c 6 6 6 6 6 6 6 6 7 7 6 c c 6 6 6 . 
. . . 6 6 7 7 6 c 6 6 6 6 6 6 6 6 6 6 7 7 6 6 7 7 6 6 c c c c . 
. . . c c 7 6 c 6 6 7 6 6 6 6 6 6 6 7 6 7 7 6 6 7 7 7 6 c . . . 
. . . 6 c c c c 6 7 7 6 6 6 6 6 6 7 7 6 7 7 7 c 7 7 6 6 6 . . . 
. . . . . . 6 c c c 7 c 6 7 7 6 7 7 7 6 c 7 7 6 c c . . . . . . 
. . . . . . . . c c c 6 7 7 7 c 6 7 7 7 6 c c 6 . . . . . . . . 
. . . . . . . . . . . c c 7 7 c 6 7 7 6 6 . . . . . . . . . . . 
. . . . . . . . . . . . . 6 c 6 6 6 6 . . . . . . . . . . . . . 
. . . . . . . . . . . . f f e e e e f . . . . . . . . . . . . . 
. . . . . . . . . . f f e e e e e e e e f . . . . . . . . . . . 
. . . . . . . . . . . . . f e e e f f e . . . . . . . . . . . . 
. . . . . . . . . . . . . . f e f . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . f e f . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . f . . . . . . . . . . . . . . . . 
`, SpriteKind.公主)
mySprite4.setPosition(5, 30)
let _5 = sprites.create(img`
. . . . . . . . . . . . . . . c c . . . . . . . . . . . . . . . 
. . . . . . . . . . . . c c c 6 5 c 6 6 . . . . . . . . . . . . 
. . . . . . . . . . . . c 6 c 5 5 c 7 6 . . . . . . . . . . . . 
. . . . . . . . . . . 6 c c 7 5 5 7 c 6 6 . . . . . . . . . . . 
. . . . . . . . . . c c 7 7 7 7 7 5 7 7 c 6 . . . . . . . . . . 
. . . . . . . . . 6 6 6 c 6 7 7 7 7 6 c c 6 6 . . . . . . . . . 
. . . . . . . . c 7 7 7 6 c 7 c 6 7 6 5 7 5 7 6 . . . . . . . . 
. . . . . . . . c c c 6 6 6 c 6 6 6 6 5 5 6 6 6 . . . . . . . . 
. . . . . . c 6 6 c c 7 6 6 6 6 6 7 7 7 7 c 6 7 6 6 . . . . . . 
. . . . . c 7 7 7 c 7 7 6 6 7 6 6 7 7 6 7 7 6 7 7 7 6 . . . . . 
. . . . . c c 6 6 c c c c 7 7 c 6 7 7 c c 6 6 6 6 6 6 . . . . . 
. . . . c 6 7 6 6 6 6 6 c 7 c 6 7 6 7 6 7 7 7 7 7 7 6 6 . . . . 
. . . c c 7 7 7 6 6 6 6 6 6 6 7 7 7 6 7 7 7 7 6 6 7 c 6 6 . . . 
. 6 6 6 c c 6 6 7 7 6 6 6 6 6 7 7 7 7 7 7 7 7 7 6 6 7 7 6 6 6 . 
. 6 7 7 7 6 6 7 7 c 6 7 6 6 7 7 7 7 7 7 7 6 6 7 7 6 7 7 7 7 6 . 
c c 6 6 6 6 c c c 6 7 7 6 7 7 7 6 7 7 7 7 7 6 c c 7 7 6 7 6 6 6 
c 6 6 6 7 7 7 6 6 7 7 6 6 7 7 6 c 7 7 6 7 7 7 c 6 7 7 7 6 c 6 6 
. c 6 7 7 7 6 6 6 c c c 6 6 7 c 6 7 6 c c 6 6 6 6 6 7 7 7 6 c . 
. c c 6 6 6 6 7 6 6 6 6 6 c c 6 6 6 6 6 6 6 6 7 7 6 c c 6 6 6 . 
. . . 6 6 7 7 6 c 6 6 6 6 6 6 6 6 6 6 7 7 6 6 7 7 6 6 c c c c . 
. . . c c 7 6 c 6 6 7 6 6 6 6 6 6 6 7 6 7 7 6 6 7 7 7 6 c . . . 
. . . 6 c c c c 6 7 7 6 6 6 6 6 6 7 7 6 7 7 7 c 7 7 6 6 6 . . . 
. . . . . . 6 c c c 7 c 6 7 7 6 7 7 7 6 c 7 7 6 c c . . . . . . 
. . . . . . . . c c c 6 7 7 7 c 6 7 7 7 6 c c 6 . . . . . . . . 
. . . . . . . . . . . c c 7 7 c 6 7 7 6 6 . . . . . . . . . . . 
. . . . . . . . . . . . . 6 c 6 6 6 6 . . . . . . . . . . . . . 
. . . . . . . . . . . . f f e e e e f . . . . . . . . . . . . . 
. . . . . . . . . . f f e e e e e e e e f . . . . . . . . . . . 
. . . . . . . . . . . . . f e e e f f e . . . . . . . . . . . . 
. . . . . . . . . . . . . . f e f . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . f e f . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . f . . . . . . . . . . . . . . . . 
`, SpriteKind.公主)
_5.setPosition(5, 60)
let _6 = sprites.create(img`
. . . . . . . . . . . . . . . c c . . . . . . . . . . . . . . . 
. . . . . . . . . . . . c c c 6 5 c 6 6 . . . . . . . . . . . . 
. . . . . . . . . . . . c 6 c 5 5 c 7 6 . . . . . . . . . . . . 
. . . . . . . . . . . 6 c c 7 5 5 7 c 6 6 . . . . . . . . . . . 
. . . . . . . . . . c c 7 7 7 7 7 5 7 7 c 6 . . . . . . . . . . 
. . . . . . . . . 6 6 6 c 6 7 7 7 7 6 c c 6 6 . . . . . . . . . 
. . . . . . . . c 7 7 7 6 c 7 c 6 7 6 5 7 5 7 6 . . . . . . . . 
. . . . . . . . c c c 6 6 6 c 6 6 6 6 5 5 6 6 6 . . . . . . . . 
. . . . . . c 6 6 c c 7 6 6 6 6 6 7 7 7 7 c 6 7 6 6 . . . . . . 
. . . . . c 7 7 7 c 7 7 6 6 7 6 6 7 7 6 7 7 6 7 7 7 6 . . . . . 
. . . . . c c 6 6 c c c c 7 7 c 6 7 7 c c 6 6 6 6 6 6 . . . . . 
. . . . c 6 7 6 6 6 6 6 c 7 c 6 7 6 7 6 7 7 7 7 7 7 6 6 . . . . 
. . . c c 7 7 7 6 6 6 6 6 6 6 7 7 7 6 7 7 7 7 6 6 7 c 6 6 . . . 
. 6 6 6 c c 6 6 7 7 6 6 6 6 6 7 7 7 7 7 7 7 7 7 6 6 7 7 6 6 6 . 
. 6 7 7 7 6 6 7 7 c 6 7 6 6 7 7 7 7 7 7 7 6 6 7 7 6 7 7 7 7 6 . 
c c 6 6 6 6 c c c 6 7 7 6 7 7 7 6 7 7 7 7 7 6 c c 7 7 6 7 6 6 6 
c 6 6 6 7 7 7 6 6 7 7 6 6 7 7 6 c 7 7 6 7 7 7 c 6 7 7 7 6 c 6 6 
. c 6 7 7 7 6 6 6 c c c 6 6 7 c 6 7 6 c c 6 6 6 6 6 7 7 7 6 c . 
. c c 6 6 6 6 7 6 6 6 6 6 c c 6 6 6 6 6 6 6 6 7 7 6 c c 6 6 6 . 
. . . 6 6 7 7 6 c 6 6 6 6 6 6 6 6 6 6 7 7 6 6 7 7 6 6 c c c c . 
. . . c c 7 6 c 6 6 7 6 6 6 6 6 6 6 7 6 7 7 6 6 7 7 7 6 c . . . 
. . . 6 c c c c 6 7 7 6 6 6 6 6 6 7 7 6 7 7 7 c 7 7 6 6 6 . . . 
. . . . . . 6 c c c 7 c 6 7 7 6 7 7 7 6 c 7 7 6 c c . . . . . . 
. . . . . . . . c c c 6 7 7 7 c 6 7 7 7 6 c c 6 . . . . . . . . 
. . . . . . . . . . . c c 7 7 c 6 7 7 6 6 . . . . . . . . . . . 
. . . . . . . . . . . . . 6 c 6 6 6 6 . . . . . . . . . . . . . 
. . . . . . . . . . . . f f e e e e f . . . . . . . . . . . . . 
. . . . . . . . . . f f e e e e e e e e f . . . . . . . . . . . 
. . . . . . . . . . . . . f e e e f f e . . . . . . . . . . . . 
. . . . . . . . . . . . . . f e f . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . f e f . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . f . . . . . . . . . . . . . . . . 
`, SpriteKind.公主)
_6.setPosition(5, 90)
info.setLife(3)
position = 0
mySprite = sprites.create(img`
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . f f f f . . . . . . . . . . . . . . . 
. . . f f f 2 2 f f f . . . . . . . . . . . . . 
. . f f f 2 2 2 2 f f f . . . . . . . . . . . . 
. f f f e e e e e e f f f . . . . . . . . . . . 
. f f e 2 2 2 2 2 2 e e f . . . . . . . . . . . 
. f e 2 f f f f f f 2 e f . . . . . . . . . . . 
. f f f f e e e e f f f f . . . . . . . . . . . 
f f e f b f 4 4 f b f e f f . . . . . . . . . . 
f e e 4 1 f d d f 1 4 e e f . . . . . . . . . . 
. f f f f d d d d d e e f . . . . . . . . . . . 
f d d d d f 4 4 4 e e f . . . . . . . . . . . . 
f b b b b f 2 2 2 2 f 4 e . . . . . . . . . . . 
f b b b b f 2 2 2 2 f d 4 . . . . . . . . . . . 
. f c c f 4 5 5 4 4 f 4 4 . . . . . . . . . . . 
. . f f f f f f f f . . . . . . . . . . . . . . 
. . . . f f . . f f . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
position = 60
mySprite.setPosition(20, position)
info.setScore(0)
let score = 1
forever(function () {
    music.playMelody("G B A G C5 B A B ", 120)
})
forever(function () {
    mySprite2 = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . c c c c c c . . . 
. . . . . . c 5 5 5 5 5 c c . . 
. . . . . c 5 5 5 5 5 5 5 5 c . 
. . . . c b b b b b b 5 5 5 c . 
. . . . c b b b b 1 b b c c . . 
. . . . c 1 1 b b 1 1 1 c . . . 
. . . c 1 1 1 1 b 1 1 1 c . . . 
. . . c 1 1 1 1 b 1 1 1 b b c c 
. . c c d 1 1 1 b 1 b 1 5 5 5 c 
. . c c d 1 c 1 1 1 b 1 b b 5 c 
. c c d d 1 1 1 1 1 b 1 f b 5 c 
f d d d 1 1 1 1 1 b b b f . c c 
f f f f f 1 1 1 b b 5 5 5 f . . 
. . . . . f f f 5 5 5 5 5 f . . 
. . . . . . . . f f f f f f . . 
`, SpriteKind.Enemy)
    random = 30
    speed = -30
    a = info.score()
    mySprite2.setPosition(160, random * Math.randomRange(1, 3))
    mySprite2.setVelocity(speed - a, 0)
    if (info.score() % 3 == Math.randomRange(0, 2)) {
        monster2 = sprites.create(img`
. . . . . . 5 . 5 . . . . . . . 
. . . . . f 5 5 5 f . . . . . . 
. . . . f 6 2 5 5 6 f . . . . . 
. . . f 6 6 6 6 1 6 6 f . . . . 
. . . f 6 6 6 6 6 1 6 f . . . . 
. . . f d f d 6 6 6 1 f . . . . 
. . . f d f d 6 6 6 6 f f . . . 
. . . f d 3 d d 6 6 6 f 6 f . . 
. . . . f d d d f f 6 f f . . . 
. . . . . f f 5 3 f 6 6 6 f . . 
. . . . f 5 3 3 f f f f f . . . 
. . . . f 3 3 f d f . . . . . . 
. . . . . f 3 f d f . . . . . . 
. . . . f 3 5 3 f d f . . . . . 
. . . . f f 3 3 f f . . . . . . 
. . . . . . f f f . . . . . . . 
`, SpriteKind.Enemy2)
        random = 30
        speed = -30
        a = info.score() * 3
        monster2.setPosition(160, random * Math.randomRange(1, 3))
        monster2.setVelocity(speed - a, 0)
    }
    pause(5000)
})
forever(function () {
    mySprite3 = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . c c c . . . . . . 
. . . . . . a b a a . . . . . . 
. . . . . c b a f c a c . . . . 
. . . . c b b b f f a c c . . . 
. . . . b b f a b b a a c . . . 
. . . . c b f f b a f c a . . . 
. . . . . c a a c b b a . . . . 
. . . . . . c c c c . . . . . . 
. . . . . . . c . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.怪物攻擊)
    mySprite3.setPosition(mySprite2.x - 20, mySprite2.y)
    mySprite3.setVelocity(-50, 0)
    pause(5000)
})
