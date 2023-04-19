let level1 = initLevel();

function initLevel() {
    return new Level(
        createEnemies(),
        createClouds(),
        createBackgroundObjects(),
        createBottles(),
        createCoins()
    );
}

function createEnemies() {
    return [
        new Chicken(0.25),
        new Chicken(0.25),
        new Chicken(0.3),
        new Chicken(0.3),
        new Chicken(0.4),
        new Chicken(0.4),
        new SmallChicken(0.3),
        new SmallChicken(0.3),
        new SmallChicken(0.4),
        new SmallChicken(0.4),
        new SmallChicken(0.5),
        new SmallChicken(0.5)
    ];
}

function createClouds() {
    return [
        new Cloud(300),
        new Cloud(800), 
        new Cloud(1500),
        new Cloud(2000),
        new Cloud(2700),
        new Cloud(3200),
        new Cloud(3800)
    ];
}

function createBackgroundObjects() {
    return [
        new BackgroundObject('./src/img/5_background/layers/air.png', -719),
        new BackgroundObject('./src/img/5_background/layers/3_third_layer/2.png', -719),
        new BackgroundObject('./src/img/5_background/layers/2_second_layer/2.png', -719),
        new BackgroundObject('./src/img/5_background/layers/1_first_layer/2.png', -719),

        new BackgroundObject('./src/img/5_background/layers/air.png', 0),
        new BackgroundObject('./src/img/5_background/layers/3_third_layer/1.png', 0),
        new BackgroundObject('./src/img/5_background/layers/2_second_layer/1.png', 0),
        new BackgroundObject('./src/img/5_background/layers/1_first_layer/1.png', 0),

        new BackgroundObject('./src/img/5_background/layers/air.png', 719),
        new BackgroundObject('./src/img/5_background/layers/3_third_layer/2.png', 719),
        new BackgroundObject('./src/img/5_background/layers/2_second_layer/2.png', 719),
        new BackgroundObject('./src/img/5_background/layers/1_first_layer/2.png', 719),

        new BackgroundObject('./src/img/5_background/layers/air.png', 1438),
        new BackgroundObject('./src/img/5_background/layers/3_third_layer/1.png', 1438),
        new BackgroundObject('./src/img/5_background/layers/2_second_layer/1.png', 1438),
        new BackgroundObject('./src/img/5_background/layers/1_first_layer/1.png', 1438),

        new BackgroundObject('./src/img/5_background/layers/air.png', 2157),
        new BackgroundObject('./src/img/5_background/layers/3_third_layer/2.png', 2157),
        new BackgroundObject('./src/img/5_background/layers/2_second_layer/2.png', 2157),
        new BackgroundObject('./src/img/5_background/layers/1_first_layer/2.png', 2157),

        new BackgroundObject('./src/img/5_background/layers/air.png', 2876),
        new BackgroundObject('./src/img/5_background/layers/3_third_layer/1.png', 2876),
        new BackgroundObject('./src/img/5_background/layers/2_second_layer/1.png', 2876),
        new BackgroundObject('./src/img/5_background/layers/1_first_layer/1.png', 2876),

        new BackgroundObject('./src/img/5_background/layers/air.png', 3595),
        new BackgroundObject('./src/img/5_background/layers/3_third_layer/2.png', 3595),
        new BackgroundObject('./src/img/5_background/layers/2_second_layer/2.png', 3595),
        new BackgroundObject('./src/img/5_background/layers/1_first_layer/2.png', 3595),
    ];
}


function createBottles() {
    return [
        new Collectbottle(
            './src/img/6_salsa_bottle/2_salsa_bottle_on_ground.png',
            1300,
            375
        ),
        new Collectbottle(
            './src/img/6_salsa_bottle/2_salsa_bottle_on_ground.png',
            1600,
            375
        ),
        new Collectbottle(
            './src/img/6_salsa_bottle/2_salsa_bottle_on_ground.png',
            1900,
            375
        ),
        new Collectbottle(
            './src/img/6_salsa_bottle/2_salsa_bottle_on_ground.png',
            2100,
            375
        ),
        new Collectbottle(
            './src/img/6_salsa_bottle/2_salsa_bottle_on_ground.png',
            2300,
            375
        ),
        new Collectbottle(
            './src/img/6_salsa_bottle/2_salsa_bottle_on_ground.png',
            2500,
            375
        ),
        new Collectbottle(
            './src/img/6_salsa_bottle/2_salsa_bottle_on_ground.png',
            2800,
            375
        ),
        new Collectbottle(
            './src/img/6_salsa_bottle/2_salsa_bottle_on_ground.png',
            3100,
            375
        ),
        new Collectbottle(
            './src/img/6_salsa_bottle/2_salsa_bottle_on_ground.png',
            3400,
            375
        )

    ];
}

function createCoins() {
    return [
        new CollectCoin(550, 180),
        new CollectCoin(700, 180),
        new CollectCoin(850, 180),
        new CollectCoin(1000, 180),
        new CollectCoin(1150, 180),
    ];
}
