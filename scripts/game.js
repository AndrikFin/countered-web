function createGame() {
	var config = {
		type: Phaser.CANVAS,
		width: 1280,
		height: 736,
		parrent: "conteiner",
		physics: {
			default: 'arcade',
			arcade: {
				gravity: { y: 600 },
				debug: false
			}
		},
		scene: {
			preload: preload,
			update: update
		},
		crisp: true,
		antialias: false,
		pixelArt: true,
		roundPixels: true,
		alignH:      true,
		alignV:      true,
		backgroundColor: '#252525'
	};

	game = new Phaser.Game(config);
}

var score = 0;
var scoreText;
var bestScoreText;

let game 
let scene

let cursors
let spaceButton
let leftButton
let rightButton
let jumpButton

let oneWayColliders
let box
let clouds
let gearsGroup
let platformsGroup
let aqualangeeGroup
let lastShootDate = new Date()

let player

let shooting = false

//Загружаем арты и элементы упралвения 
function preload() {
	scene = game.scene.scenes[0]

	this.load.image('background', 'assets/background.png');
	this.load.image('foreground', 'assets/foreground.png');
	this.load.image('city', 'assets/city.png');
	this.load.image('ground', 'assets/ground.png');
	this.load.image('jump-up', 'assets/jump-up.png');
	this.load.image('jump-down', 'assets/jump-down.png');
	this.load.image('box', 'assets/box.png');
	this.load.image('cloud', 'assets/cloud.png');
	this.load.image('bullet', 'assets/bullet.png');
	this.load.image('harpoon', 'assets/harpoon.png');
	this.load.spritesheet('char-idle', 'assets/idle.png', { frameWidth: 15, frameHeight: 41 });
	this.load.spritesheet('char-walking', 'assets/walking.png', { frameWidth: 26, frameHeight: 41 });
	this.load.spritesheet('char-shoot', 'assets/shoot.png', { frameWidth: 88, frameHeight: 54 });
	this.load.spritesheet('platform', 'assets/platform.png', { frameWidth: 55, frameHeight: 44 });
	this.load.spritesheet('baloon', 'assets/baloon.png', { frameWidth: 53, frameHeight: 106 });
	this.load.spritesheet('house', 'assets/house.png', { frameWidth: 74, frameHeight: 194 });
	this.load.spritesheet('gear', 'assets/gear.png', { frameWidth: 20, frameHeight: 20 });
	this.load.spritesheet('aqualangee-idle', 'assets/aqualangee-idle.png', { frameWidth: 48, frameHeight: 56 });
	this.load.spritesheet('aqualangee-shoot', 'assets/aqualangee-shoot.png', { frameWidth: 48, frameHeight: 56 });
	this.load.spritesheet('aqualangee-appears', 'assets/aqualangee-appears.png', { frameWidth: 48, frameHeight: 56 });

	cursors = this.input.keyboard.createCursorKeys()
	spaceButton = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE)
	leftButton = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A)
	rightButton = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D)
	jumpButton = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W)

	//Ставим на паузу анимацяию появления инструкции по управлению до тех пор пока не загрузтся сцена
	let elements = document.getElementsByClassName("button")
	for (var i = 0; i < elements.length; i++) {
		elements[i].style.webkitAnimationPlayState = 'paused'
	}
}

//Подготавливаем анимации
function prepareAnimations() {
	scene.anims.create({
		key: 'idle',
		frames: scene.anims.generateFrameNumbers('char-idle'),
		frameRate: 13,
		repeat: -1
	});

	scene.anims.create({
		key: 'walk',
		frames: scene.anims.generateFrameNumbers('char-walking'),
		frameRate: 10,
		repeat: -1
	});

	scene.anims.create({
		key: 'shoot',
		frames: scene.anims.generateFrameNumbers('char-shoot'),
		frameRate: 12,
		repeat: -1
	});

	scene.anims.create({
		key: 'platform',
		frames: scene.anims.generateFrameNumbers('platform'),
		frameRate: 10,
		repeat: -1
	})

	scene.anims.create({
		key: 'baloon',
		frames: scene.anims.generateFrameNumbers('baloon'),
		frameRate: 10,
		repeat: -1
	})

	scene.anims.create({
		key: 'house',
		frames: scene.anims.generateFrameNumbers('house'),
		frameRate: 10,
		repeat: -1
	})

	scene.anims.create({
		key: 'gear',
		frames: scene.anims.generateFrameNumbers('gear'),
		frameRate: 12,
		repeat: -1
	})

	scene.anims.create({
		key: 'aqualangee-idle',
		frames: scene.anims.generateFrameNumbers('aqualangee-idle'),
		frameRate: 12,
		repeat: -1
	})

	scene.anims.create({
		key: 'aqualangee-shoot',
		frames: scene.anims.generateFrameNumbers('aqualangee-shoot'),
		frameRate: 10,
	})

	scene.anims.create({
		key: 'aqualangee-appears',
		frames: scene.anims.generateFrameNumbers('aqualangee-appears'),
		frameRate: 10,
	})
}


//Тут мы создаем все объекты: платформ, персонажа, врагов, монет и выстрелов, а также анимируем их появление
function loadScene() {

	let button = document.getElementsByClassName('animated-button')[0]
	button.style.border = "none"
	button.style.pointerEvents = "none"
	button.style.cursor = "default"

	let duration = 2000
	let delay = 1000
	scene.add.tween({targets: [scene.add.image(640, 420, 'background').setScale(2)], duration: duration, delay: delay, y: 368, ease: 'Cubic.easeInOut'})
	scene.add.tween({targets: [scene.add.image(640, 500, 'city').setScale(2)], duration: duration, delay: delay, y: 368, ease: 'Cubic.easeInOut'})
	scene.add.tween({targets: [scene.add.image(640, 800, 'foreground').setScale(2)], duration: duration, delay: delay, y: 368, ease: 'Cubic.easeInOut'})
	let ground = scene.add.image(640, 368, 'ground').setScale(2);
	ground.depth = 98
	prepareAnimations()

	player = scene.physics.add.sprite(300, -260, 'char-idle').setScale(2)
	player.body.offset.x = 7
	player.depth = 100
	player.disableBody()
	scene.add.tween({targets: [player], duration: duration, delay: delay + duration, y: 270, ease: 'Cubic.easeInOut', onComplete: () => {player.enableBody()
		spawnEnemy()
		setInterval(function() {
			if (Phaser.Math.Between(0, 100) < Math.max(90 - score, 10) && aqualangeeGroup.children.entries.length != 0) {
				return
			}
			if (aqualangeeGroup.children.entries.length < 8) {
				spawnEnemy()
			}

		}, 1000)
	}})

	box = scene.physics.add.sprite(520, -100, 'box').setScale(2)
	box.body.offset.x = 10
	box.depth = 97
	box.disableBody()
	setTimeout(function() { box.enableBody()}, 2000)

	let cloud1 = scene.physics.add.sprite(1200, 200, 'cloud').setScale(2)
	cloud1.body.allowGravity = false
	cloud1.body.velocity.x = -30
	let cloud2 = scene.physics.add.sprite(100, 300, 'cloud').setScale(2)
	cloud2.body.allowGravity = false
	cloud2.body.velocity.x = -10

	clouds = [cloud1, cloud2]

	platformsGroup = scene.physics.add.staticGroup()
	let bottom = createStaticSprite(0, 736 - 42, 1280, 64)
	scene.physics.add.collider(player, bottom)
	scene.physics.add.collider(player, box)
	scene.physics.add.collider(bottom, box)
	scene.physics.add.collider(player, createStaticSprite(40, 0, 64, 736))
	scene.physics.add.collider(player, createStaticSprite(1280 - 40, 0, 64, 736))
	scene.physics.add.collider(player, createStaticSprite(0, 0, 1280, 64))

	let platform = scene.add.sprite(-100, 550, 'platform').setScale(2)
	scene.add.tween({targets: [platform], x: 200, duration: duration, delay: duration, ease: 'Cubic.easeInOut'})
	platform.anims.play('platform', true)

	let house = scene.add.sprite(1060, 900, 'house').setScale(2)
	scene.add.tween({targets: [house], y: 400, duration: duration, delay: delay + duration, ease: 'Cubic.easeInOut'})
	house.anims.play('house', true)

	let baloon = scene.add.sprite(300, -300, 'baloon').setScale(2)
	scene.add.tween({targets: [baloon], y: 230, duration: 2000, delay: delay + duration, ease: 'Cubic.easeInOut'})
	baloon.anims.play('baloon', true)

	oneWayColliders = [scene.physics.add.collider(player, createStaticSprite(200, 577, 80, 10))]
	oneWayColliders.push(scene.physics.add.collider(player, createStaticSprite(310, 324, 55, 10)))
	oneWayColliders.push(scene.physics.add.collider(player, createStaticSprite(1040, 550, 100, 10)))
	oneWayColliders.push(scene.physics.add.collider(player, createStaticSprite(1040, 450, 100, 10)))
	oneWayColliders.push(scene.physics.add.collider(player, createStaticSprite(460, 228, 670, 70)))
	oneWayColliders.push(scene.physics.add.collider(player, createStaticSprite(330, 450, 540, 30)))

	gearsGroup = scene.physics.add.group();
	gearsGroup.playAnimation('gear')
	scene.physics.add.collider(gearsGroup, platformsGroup)
	scene.physics.add.overlap(player, gearsGroup, collectCoin)

	aqualangeeGroup = scene.physics.add.group()

	scoreText = scene.add.text(100, 80, 'score: 0', { fontSize: '28px', fill: '#fff' })
	scoreText.setFontFamily('Verdana')

	var bestScore = localStorage.bestScore
	if (bestScore == undefined) {
		bestScore = '0'
		localStorage.bestScore = bestScore
	}

	bestScoreText = scene.add.text(100, 110, 'best: ' + bestScore, { fontSize: '20px', fill: '#ccc' })
	bestScoreText.setFontFamily('Verdana')

	showScene()

	let elements = document.getElementsByClassName("button")
	for (var i = 0; i < elements.length; i++) {
		elements[i].style.webkitAnimationPlayState = 'running'
	}
}

//Функция для создания врага в случайной месте
function spawnEnemy() {
	let apear = scene.physics.add.staticSprite(Phaser.Math.Between(200, 1100), Phaser.Math.Between(100, 500), 'aqualangee-appears').setScale(2)
	apear.scaleX *= apear.x > player.x ? 1 : -1
	apear.anims.play('aqualangee-appears')
	setTimeout(function() {
		let enemy = aqualangeeGroup.create(apear.x, apear.y, 'aqualangee-idle').setScale(2)
		enemy.anims.play('aqualangee-idle')
		enemy.depth = 100
		enemy.health = 2
		enemy.body.offset.x = 20
		scene.physics.add.collider(enemy, platformsGroup)
		enemy.shootIterval = setInterval(function(){
			if (Phaser.Math.Between(0, 100) > Math.max(50 - score, 10)) {
				enemy.anims.play('aqualangee-shoot')
				setTimeout(function(){enemy.anims.play('aqualangee-idle')}, 320);
				enemyShoot(enemy)
			}
		}, 2000)
		apear.destroy()
	}, 800)
}

function createCoin(x, y) {
	let gear = gearsGroup.create(x, y, 'gear').setScale(2);
	gear.depth = 100
	gear.setBounce(0.3)
	gear.anims.play('gear')
	setTimeout(function() { scene.add.tween({targets: [gear], alpha: 0, duration: 2000})}, 5000)
	setTimeout(function() { gear.destroy() }, 7000)
	return gear
}

function collectCoin(player, coin) {
	coin.disableBody(true, true);
	coin.destroy()
	score += 1
	scoreText.setText('score: ' + score);
	if (score > parseInt(localStorage.bestScore)) {
		localStorage.bestScore = score
		bestScoreText.setText('best: ' + score)
	}
}

function playerShoot() {
	lastShootDate = new Date()
	let sprite = scene.physics.add.sprite(player.x + 60 * player.scaleX, player.y - 15, 'bullet').setScale(2)
	sprite.body.setAllowGravity(false)
	sprite.setOriginFromFrame(0.5, 0.5)
	sprite.body.velocity.x = 800 * player.scaleX
	scene.physics.add.overlap(sprite, aqualangeeGroup, didHitEnemy)
	scene.physics.add.collider(sprite, aqualangeeGroup, didHitEnemy)
	scene.add.tween({
		targets: [sprite],
		scaleX: 0.1,
		duration: 300
	})
}

function enemyShoot(enemy) {
	let sprite = scene.physics.add.sprite(enemy.x - 40 * enemy.scaleX, enemy.y + 9, 'harpoon').setScale(2)
	sprite.scaleX = enemy.scaleX
	sprite.body.setAllowGravity(false)
	sprite.setOriginFromFrame(1, 0.5)
	sprite.body.velocity.x = 150 * -enemy.scaleX
	scene.physics.add.collider(player, sprite, didHit)
	scene.physics.add.overlap(sprite, aqualangeeGroup, didHitEnemy)
}

function didHitEnemy(bullet, enemy) {
	bullet.destroy()
	enemy.alpha = 0
	setTimeout(function() { enemy.alpha = 1 }, 100)
	enemy.health -= 1
	if (enemy.health <= 0) {
		clearInterval(enemy.shootIterval)
		enemy.destroy()

		let count = Math.random() * 3 + 1
		for (i = 0; i < count; i++) {
			let coin = createCoin(enemy.x, enemy.y)
			coin.setVelocity(Phaser.Math.Between(300, -300), Phaser.Math.Between(0, -500))
		}
	}
}

function didHit(player, sprite) {
	sprite.destroy()
	for (i = 0; i < parseInt(score); i++) {
		let coin = scene.physics.add.sprite(player.x, player.y, 'gear').setScale(2).anims.play('gear')
		coin.setVelocity(Phaser.Math.Between(300, -300), Phaser.Math.Between(0, -500))
	}
	player.setVelocity(player.scaleX == 2 ? - 600 : 600, -300)
	score = 0
	scoreText.setText('score: 0')
}

function createStaticSprite(x, y, w, h) {
	var plat = platformsGroup.create(x, y, "")
	plat.frame.width = w
	plat.frame.height = h
	plat.body.width = w
	plat.body.height = h
	plat.setTint('#000000')
	plat.alpha = 0
	return plat
}

//Линейная интерполяция для плавности анимации
function lerp(a, b, n) {
	return (1 - n) * a + n * b;
}	

//это функция дёргается 60раз в секунду (ну или сколько позволят ресурсы) и тут происходит основная логика управления состояний
function update () {
	if (player == undefined) { return }

		if (!spaceButton.isDown) {
			shooting = false
		}

		platformsGroup.children.iterate(function(plat) {
			plat.alpha = 0
		})

		if ((cursors.left.isDown || leftButton.isDown) && !shooting) {
			player.body.velocity.x = lerp(player.body.velocity.x, -160, 0.15)
			player.scaleX = -2;
			player.anims.play('walk', true);
		} else if ((cursors.right.isDown || rightButton.isDown) && !shooting) {
			player.body.velocity.x = lerp(player.body.velocity.x, 160, 0.15)
			player.scaleX = 2;
			player.anims.play('walk', true);
		} else if (!shooting) {
			player.body.velocity.x = lerp(player.body.velocity.x, 0, 0.2)
			player.anims.play('idle', true);
		}

		if ((spaceButton.isDown) && player.body.velocity.y == 0) {
			shooting = true
			player.body.velocity.x = lerp(player.body.velocity.x, 0, 0.2)
			player.anims.play('shoot', true)
		}

		if (shooting) {
			if (new Date() - lastShootDate > 400 && (player.anims.currentFrame.index == 2 || player.anims.currentFrame.index == 9)) {
				playerShoot()
			}
		}

		if ((cursors.up.isDown || jumpButton.isDown) && player.body.touching.down) {
			player.setVelocityY(-430);
		} else if (player.body.velocity.y < 0 && !player.body.touching.down && !(cursors.up.isDown || jumpButton.isDown)) {
			player.body.velocity.y += 20
		}

		if (player.body.velocity.y < 0) {
			player.setTexture('jump-up')
		} else if (player.body.velocity.y > 0) {
			player.setTexture('jump-down')
		}

		for (i in oneWayColliders) {
			if (player.body.velocity.y < 0) {
				oneWayColliders[parseInt(i)].active = false
			} else {
				oneWayColliders[parseInt(i)].active = true
			}
		}

		if (box.body.touching.down) {
			box.body.immovable = true
			box.body.allowGravity = false
			box.body.offset.y = 3
		}
		if (box.body.position.y > 200) {
			box.depth = 99
		}

		gearsGroup.children.iterate(function(gear) {
			gear.body.velocity.x = lerp(gear.body.velocity.x, 0, 0.04)
		})

		for (i in clouds) {
			let cloud = clouds[parseInt(i)]
			if (cloud.body.position.x < -600) {
				cloud.body.position.x = 1280 + 300
				cloud.body.position.y = 100 + 300 * Math.random()
				cloud.body.reset(cloud.body.position.x, cloud.body.position.y)
				cloud.body.velocity.x = -10 - 30 * Math.random()
			}
		} 

		aqualangeeGroup.children.iterate(function(enemy){
			enemy.scaleX = 2 * (player.x > enemy.x ? - 1 : 1)
		})
	}

	function showScene() {
		scene.add.tween({
			targets: scene.children.list,
			ease: 'Sine.easeInOut',
			duration: 2000,
			delay: 0,
			alpha: {
				getStart: () => 0,
				getEnd: () => 1
			}
		});
	}