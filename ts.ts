game.onUpdateInterval(10000, function () {
    if (Menu == false) {
       let Randomizer = randint(5, 5)
        if (Randomizer == 1) {
            myEnemy2 = sprites.createProjectileFromSide(assets.image`myImage36`, 0, ESpeed + 12.5)
            myEnemy2.x = randint(20, 140)
            myEnemy2.setKind(SpriteKind.Enemy)
            myEnemy2.setScale(1.25, ScaleAnchor.Middle)
        } else if (Randomizer == 2) {
            color.setColor(1, color.parseColorString("#251F33"))
            color.setColor(11, color.parseColorString("#372D4E"))
            color.setColor(14, color.parseColorString("#C2BFCA"))
            color.setColor(13, color.parseColorString("#C2BFCA"))
            color.setColor(15, color.parseColorString("#DDD9E8"))
            color.setColor(5, color.parseColorString("#4474EE"))
        } else if (Randomizer == 3) {
            myEnemy2 = sprites.createProjectileFromSide(assets.image`myImage43`, 0, ESpeed + 12.5)
            myEnemy2.x = randint(20, 140)
            myEnemy2.setKind(SpriteKind.RepairBox)
        } else if (Randomizer == 4) {
            myEnemy2 = sprites.createProjectileFromSide(assets.image`myImage13`, 0, ESpeed + 12.5)
            myEnemy2.x = randint(20, 140)
            myEnemy2.setKind(SpriteKind.TP)
        } else if (Randomizer == 5) {
            myEnemy2 = sprites.createProjectileFromSide(assets.image`myImage3`, 0, ESpeed + 12.5)
            myEnemy2.x = randint(20, 140)
            myEnemy2.setKind(SpriteKind.Shield)
        } else if (Randomizer == 6) {
            myEnemy2 = sprites.createProjectileFromSide(assets.image`myImage51`, 0, ESpeed + 12.5)
            myEnemy2.x = randint(20, 140)
            myEnemy2.setKind(SpriteKind.Enemy)
            myEnemy2.setScale(1.25, ScaleAnchor.Middle)
        } else if (Randomizer == 7) {
            AchevementGet += 1
            achievements.create("Killed first enemy.", 3, "Monster Hunter (1/3)", assets.image`myImage1`)
        } else if (Randomizer == 8) {
            AchevementGet += 1
            achievements.create("Killed tenth enemy.", 3, "Monster Hunter (2/3)", assets.image`myImage0`)
        } else if (Randomizer == 9) {
            AchevementGet += 1
            achievements.create("Killed fiftieth enemy.", 3, "Monster Hunter (3/3)", assets.image`myImage30`)
        } else if (Randomizer == 10) {
            AchevementGet += 1
            achievements.create("Killed one hundreth enemy.", 3, "Monster Hunter (4/3)", assets.image`myImage20`)
        } else if (Randomizer == 11) {
            achievements.create("Die 5 times", 3, "Dumb ways to dieeeEEee", assets.image`myImage2`)
            Deaths += 1
        } else if (Randomizer == 12) {
            mySprite2 = sprites.create(assets.image`myImage39`, SpriteKind.boss1)
            Boss_Health = 10
        } else if (Randomizer == 13) {
            mySprite2 = sprites.create(assets.image`myImage47`, SpriteKind.boss1)
            Boss_Health = 25
        } else if (Randomizer == 13) {
            CoolMode = true
            Shield2 = true
            mySprite.setImage(assets.image`myImage42`)
            ProjectileImage = assets.image`myImage44`
        }
    }
})
