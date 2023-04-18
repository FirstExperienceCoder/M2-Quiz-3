class MainMenu extends Phaser.Scene {

    constructor() {
        super('Menu');
    }

    preload ()
    {
        // Background Image
        this.load.image('forestBG','assets/backgrounds/forest.png');
        this.load.image('titleText','assets/backgrounds/title.png');

        // Buttons Image
        this.load.image('playBtn','assets/buttons/play.png');
        this.load.image('creditsBtn','assets/buttons/credits.png');
        this.load.image('exitBtn','assets/buttons/exit.png');


    }

    create ()
    {
        this.add.image(800, 400, 'forestBG');
        this.add.image(900, 200, 'titleText');

        // Play Button
        const playButton = this.add.image(900,500,'playBtn').setScale(1);
        playButton.setInteractive();
        playButton.on('pointerdown', () => {this.scene.start('World1_1');
        score = 0;
        playerTime = 0;
        primosCollect = 0;
        });

        // Credits Button
        const creditsButton = this.add.image(90,830,'creditsBtn').setScale(0.5);
        creditsButton.setInteractive();
        creditsButton.on('pointerdown', () => {this.scene.start('Credits')});

        // Exit Button
        const exitGame = this.add.image(1650,830,'exitBtn').setScale(0.5);
        exitGame.setInteractive();
        exitGame.on('pointerdown', () => {alert('GAME CLOSE!')})
    }

    update ()
    {

    }

}