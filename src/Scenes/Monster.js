class Monster extends Phaser.Scene {
    constructor() {
        super("monsterScene");
        this.my = {sprite: {}};  // Create an object to hold sprite bindings

        //Create constants for the monster location
        this.bodyX = 300;
        this.bodyY = 350;
        this.right_armX = 210;
        this.right_armY = 400;
        this.left_armX = 390;
        this.left_armY = 410;
        this.right_eyeX = 340;
        this.right_eyeY = 320;
        this.left_eyeX = 260;
        this.left_eyeY = 320;
        this.right_legX = 350;
        this.right_legY = 450;
        this.left_legX = 250;
        this.left_legY = 450;
        this.smileX = 300;
        this.smileY = 370;
        this.mouthX = 300;
        this.mouthY = 370;
        this.fangsX = 300;
        this.fangsY = 370;
        this.right_hornX = 345;
        this.right_hornY = 270;
        this.left_hornX = 255;
        this.left_hornY = 270;
    }

    // Use preload to load art and sound assets before the scene starts running.
    preload() {
        // Assets from Kenny Assets pack "Monster Builder Pack"
        // https://kenney.nl/assets/monster-builder-pack
        this.load.setPath("./assets/");

        // Load sprite atlas
        this.load.atlasXML("monsterParts", "spritesheet_default.png", "spritesheet_default.xml");
        
        // update instruction text
        document.getElementById('description').innerHTML = '<h2>Monster.js<br>S - smile // F - show fangs<br>A - move left // D - move right</h2>'
    }

    create() {
        let my = this.my;   // create an alias to this.my for readability

        // Create the main body sprite
        //
        // this.add.sprite(x,y, "{atlas key name}", "{name of sprite within atlas}")
        //
        // look in spritesheet_default.xml for the individual sprite names
        // You can also download the asset pack and look in the PNG/default folder.
        my.sprite.right_leg = this.add.sprite(this.left_legX, this.left_legY, "monsterParts", "leg_redD.png");
        my.sprite.right_leg.flipX = true;
        my.sprite.left_leg = this.add.sprite(this.right_legX, this.right_legY, "monsterParts", "leg_yellowD.png");
        my.sprite.body = this.add.sprite(this.bodyX, this.bodyY, "monsterParts", "body_blueB.png");
        my.sprite.right_arm = this.add.sprite(this.right_armX, this.right_armY, "monsterParts", "arm_whiteE.png");
        my.sprite.right_arm.flipX = true;
        my.sprite.left_arm = this.add.sprite(this.left_armX, this.left_armY, "monsterParts", "arm_greenE.png");
        my.sprite.left_eye = this.add.sprite(this.left_eyeX, this.left_eyeY, "monsterParts", "eye_cute_light.png");
        my.sprite.left_eye.flipX = true;
        my.sprite.right_eye = this.add.sprite(this.right_eyeX, this.right_eyeY, "monsterParts", "eye_closed_feminine.png");
        my.sprite.smile = this.add.sprite(this.smileX, this.smileY, "monsterParts", "mouth_closed_happy.png");
        my.sprite.horn = this.add.sprite(this.left_hornX, this.left_hornY, "monsterParts", "detail_dark_horn_small.png");
        my.sprite.horn.flipX = true;
        my.sprite.fangs = this.add.sprite(this.mouthX, this.mouthY, "monsterParts", "mouthB.png");
        my.sprite.mouth = this.add.sprite(this.mouthX, this.mouthY, "monsterParts", "mouthH.png");


        my.sprite.smile.visible = false;
        my.sprite.fangs.visible = false;
        my.sprite.mouth.visible = true;

        

        my.keys = this.input.keyboard.addKeys('S, F, A, D');
        this.move = 1;

        
    }

    update() {
        let my = this.my;    // create an alias to this.my for readability
        if (Phaser.Input.Keyboard.JustDown(my.keys.S)) {
            my.sprite.smile.visible = true;
            my.sprite.fangs.visible = false;
            my.sprite.mouth.visible = false;

        }

        if (Phaser.Input.Keyboard.JustDown(my.keys.F)) {
            my.sprite.smile.visible = false;
            my.sprite.fangs.visible = true;
            my.sprite.mouth.visible = false;

        }

        if (my.keys.A.isDown) {
            this.movement(-this.move);
        }

        if (my.keys.D.isDown) {
            this.movement(this.move);
        }

        
       
    }

    movement(direction) {
        for (let key in this.my.sprite) {
            if (this.my.sprite.hasOwnProperty(key)) {
                let sprite = this.my.sprite[key];
                sprite.x += direction;
            }
        }
    }
}