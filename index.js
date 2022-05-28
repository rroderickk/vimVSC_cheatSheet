const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = 1024
canvas.height = 576

c.fillRect(0, 0, canvas.width, canvas.height)

const gravity = 0.9

const background = new Sprite({
  position: { x: 0, y: 0 },
  imageSrc: './img/background.png'
});

const shop = new Sprite({
  position: { x: 600, y: 128 },
  imageSrc: './img/shop.png',
  scale: 2.75,
  framesMax: 6
});

const player = new Fighter({
  position: { x: 0, y: 0 },
  velocity: { x: 0, y: 0 },
  offset: { x: 0, y: 0 },
  imageSrc: './img/samuraiMack/Idle.png',
  framesMax: 8,
  scale: 2.5,
  offset: { x: 215, y: 157 },
  sprites: {
    idle: { imageSrc: './img/samuraiMack/Idle.png', framesMax: 8 },
    run:  { imageSrc: './img/samuraiMack/Run.png',  framesMax: 8 },
    jump: { imageSrc: './img/samuraiMack/Jump.png', framesMax: 2 },
    fall: { imageSrc: './img/samuraiMack/Fall.png', framesMax: 2 },
    attack1: { imageSrc: './img/samuraiMack/Attack1.png', framesMax: 6 },
    takeHit: { imageSrc: './img/samuraiMack/Take Hit - white silhouette.png', framesMax: 4 },
    death: { imageSrc: './img/samuraiMack/Death.png', framesMax: 6 }
  },
  attackBox: {
    offset: { x: 100, y: 50 },
    width: 160,
    height: 50
  }
});

const enemy = new Fighter({
  position: { x: 400, y: 100 },
  velocity: { x: 0, y: 0 },
  color: 'blue',
  offset: { x: -50, y: 0 },
  imageSrc: './img/kenji/Idle.png',
  framesMax: 4,
  scale: 2.5,
  offset: { x: 215, y: 167 },
  sprites: {
    idle:    { imageSrc: './img/kenji/Idle.png',    framesMax: 4 },
    run:     { imageSrc: './img/kenji/Run.png',     framesMax: 8 },
    jump:    { imageSrc: './img/kenji/Jump.png',    framesMax: 2 },
    fall:    { imageSrc: './img/kenji/Fall.png',    framesMax: 2 },
    attack1: { imageSrc: './img/kenji/Attack1.png', framesMax: 4 },
    takeHit: { imageSrc: './img/kenji/Take hit.png',framesMax: 3 },
    death:   { imageSrc: './img/kenji/Death.png',   framesMax: 7 }
  },
  attackBox: {
    offset: { x: -170, y: 50 },
    width: 170,
    height: 50
  }
});

console.log(player);

const keys = {
  h: { pressed: false  },
  l: { pressed: false  },
  j: { pressed: false  },
  w: { pressed: false  },
  b: { pressed: false, },
  W: { pressed: false  },
  B: { pressed: false, },
  I: { pressed: false, }, A: { pressed: false, },
  ArrowRight: { pressed: false },
  ArrowLeft:  { pressed: false }
};

decreaseTimer();

function animate() {
  window.requestAnimationFrame(animate)
  c.fillStyle = 'black'
  c.fillRect(0, 0, canvas.width, canvas.height)
  background.update()
  shop.update()
  c.fillStyle = 'rgba(255, 255, 255, 0.15)'
  c.fillRect(0, 0, canvas.width, canvas.height)
  player.update()
  enemy.update()

  player.velocity.x = 0
  enemy.velocity.x = 0

  //! player movement
  if (keys.h.pressed && player.lastKey === 'h') {
    player.velocity.x = -5
    player.switchSprite('run')
  }
  else if (keys.l.pressed && player.lastKey === 'l') {
    player.velocity.x = 5
    player.switchSprite('run')
  } 
  else if (keys.w.pressed && player.lastKey === 'w') {
    player.velocity.x = 5
    player.switchSprite('run')
  }
  else if (keys.W.pressed && player.lastKey === 'W') {
    player.velocity.x = 9
    player.switchSprite('run')
  }
  else if (keys.b.pressed && player.lastKey === 'b') {
    player.velocity.x = -5
    player.switchSprite('run')
  }
  else if (keys.B.pressed && player.lastKey === 'B') {
    player.velocity.x = -9
    player.switchSprite('run')
  }
  
  else { player.switchSprite('idle') }

  /** 
   * Player teletransport like
   * @VIM keys A, I
   * */
  if (keys.A.pressed && player.lastKey === 'A') {
    player.position.x = 920;
  }
  if (keys.I.pressed && player.lastKey === 'I') {
    player.position.x = 8;
  }


  //! jumping
  if (player.velocity.y < 0) {
    player.switchSprite('jump')
  } else if (player.velocity.y > 0) {
    player.switchSprite('fall')
  }

  //* Enemy movement
  if (keys.ArrowLeft.pressed && enemy.lastKey === 'ArrowLeft') {
    enemy.velocity.x = -5
    enemy.switchSprite('run')
  } else if (keys.ArrowRight.pressed && enemy.lastKey === 'ArrowRight') {
    enemy.velocity.x = 5
    enemy.switchSprite('run')
  } else {
    enemy.switchSprite('idle')
  }

  //! jumping
  if (enemy.velocity.y < 0) {
    enemy.switchSprite('jump')
  } else if (enemy.velocity.y > 0) {
    enemy.switchSprite('fall')
  }

  //! detect for collision & enemy gets hit
  if (
    rectangularCollision({
      rectangle1: player,
      rectangle2: enemy
    }) &&
    player.isAttacking &&
    player.framesCurrent === 4
  ) {
    enemy.takeHit(4)
    player.isAttacking = false

    gsap.to('#enemyHealth', {
      width: enemy.health + '%'
    })
  }

  // if player misses
  if (player.isAttacking && player.framesCurrent === 4) {
    player.isAttacking = false
  }

  // this is where our player gets hit
  if (
    rectangularCollision({
      rectangle1: enemy,
      rectangle2: player
    }) &&
    enemy.isAttacking &&
    enemy.framesCurrent === 2
  ) {
    player.takeHit(9) //*<--   ;) damage
    enemy.isAttacking = false

    gsap.to('#playerHealth', {
      width: player.health + '%'
    })
  }

  // if player misses
  if (enemy.isAttacking && enemy.framesCurrent === 2) {
    enemy.isAttacking = false
  }

  // end game based on health
  if (enemy.health <= 0 || player.health <= 0) {
    determineWinner({ player, enemy, timerId })
  }
};

animate();

window.addEventListener('keydown', (event)=> {
  if (!player.dead) {
    switch (event.key) {
      case 'l': keys.l.pressed = true; player.lastKey = 'l'; break;
      case 'h': keys.h.pressed = true; player.lastKey = 'h'; break;

      case 'k': player.velocity.y = -16; break;
      case 'j': player.velocity.y = 10; break;

      case 'w': keys.w.pressed = true; player.lastKey = 'w'; break;
      case 'b': keys.b.pressed = true; player.lastKey = 'b'; break;

      case 'W': keys.W.pressed = true; player.lastKey = 'W'; break;
      case 'B': keys.B.pressed = true; player.lastKey = 'B'; break;


      case 'Escape': player.attack(); break;
      case 'i': player.attack(); break;
      case 'a': player.attack(); break;
      case 'v': player.attack(); break;

      case 'A': keys.A.pressed = true; player.lastKey ='A'; break;
      case 'I': keys.I.pressed = true; player.lastKey ='I'; break;
    }
  }

  if (!enemy.dead) {
    switch (event.key) {
      case 'ArrowRight':
        keys.ArrowRight.pressed = true
        enemy.lastKey = 'ArrowRight'
        break
      case 'ArrowLeft':
        keys.ArrowLeft.pressed = true
        enemy.lastKey = 'ArrowLeft'
        break
      case 'ArrowUp':
        enemy.velocity.y = -20
        break
      case 'ArrowDown':
        enemy.attack()
        break
    }
  }
});

window.addEventListener('keyup', (event)=> {
  switch (event.key) {
    case 'l': keys.l.pressed = false; break;
    case 'h': keys.h.pressed = false; break;
    case 'w': keys.w.pressed = false; break;
    case 'b': keys.b.pressed = false; break;
    case 'W': keys.W.pressed = false; break;
    case 'B': keys.B.pressed = false; break;

    case 'A': keys.A.pressed = false; break;
    case 'I': keys.I.pressed = false; break;
  }

  //* enemy keys
  switch (event.key) {
    case 'ArrowRight':
      keys.ArrowRight.pressed = false
      break
    case 'ArrowLeft':
      keys.ArrowLeft.pressed = false
      break
  }
});


/**
 * @like
 **/
const enemyRoutine =()=> {
  enemy.velocity.y = -10
  enemy.velocity.x = -5
  enemy.position.x = player.position.x + 100
  enemy.switchSprite('run')
  attack = setInterval(()=>enemy.attack(),800);
}

var intervalo = setInterval(()=> {
  enemyRoutine()
  if (player.dead) {
    clearInterval(intervalo)
    clearInterval(attack)
  }
}, 2800);

