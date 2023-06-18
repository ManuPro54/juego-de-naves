input.onButtonPressed(Button.A, function () {
    Nave.move(-1)
})
input.onButtonPressed(Button.AB, function () {
    disparo = game.createSprite(Nave.get(LedSpriteProperty.X), Nave.get(LedSpriteProperty.Y))
    for (let index = 0; index < 5; index++) {
        disparo.change(LedSpriteProperty.Y, -1)
        basic.pause(100)
    }
})
input.onButtonPressed(Button.B, function () {
    Nave.move(1)
})
let disparo: game.LedSprite = null
let Nave: game.LedSprite = null
Nave = game.createSprite(2, 4)
let enemigo1 = game.createSprite(2, 0)
disparo = game.createSprite(2, 0)
enemigo1.delete()
disparo.delete()
game.setScore(0)
basic.forever(function () {
    if (disparo.isTouching(enemigo1)) {
        enemigo1.delete()
        disparo.delete()
        game.addScore(1)
    } else if (enemigo1.isTouching(Nave)) {
        game.gameOver()
    } else if (enemigo1.get(LedSpriteProperty.Y) == 4) {
        game.gameOver()
    }
})
basic.forever(function () {
    if (disparo.get(LedSpriteProperty.Y) == 0) {
        disparo.delete()
    }
})
basic.forever(function () {
    basic.pause(randint(1000, 3000))
    if (enemigo1.isDeleted()) {
        enemigo1 = game.createSprite(randint(0, 4), 0)
    }
})
basic.forever(function () {
    basic.pause(1000)
    if (!(enemigo1.isDeleted())) {
        enemigo1.change(LedSpriteProperty.Y, 1)
    }
})
