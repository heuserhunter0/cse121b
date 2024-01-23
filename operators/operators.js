// operators.js
let shipHealth = 3;
let shipAmmo = 3;
let targetHealth = 3;

// return if and number between 0 and 5
function isHit() {
  return Math.random(0,1);
}
// return if health and ammo is above 0
function shipCanFire() {
  return shipHealth > 0 && shipAmmo > 0;
}
// return true if health is 0 or lower
function isDestroyed(health) {
  return health <= 0;
}
// 1 less health and 3 more ammo if ammo is 0
function reloadShip() {
  shipHealth--;
  shipAmmo += 3;
}

function fireShip() {
  if (shipCanFire()) {
    shipAmmo--;
    if (isHit()) {
      targetHealth--;
      console.log("hit - targetHealth:", targetHealth);
    } else {
      console.log("miss");
    }
  } else {
    reloadShip();
    console.log("reloading, shipHealth:", shipHealth);
  }
}

function encounter() {
  console.log("You see a target");
  if (!isDestroyed(targetHealth) && !isDestroyed(shipHealth)) {
    fireShip();
    if (isDestroyed(targetHealth)) {
      console.log("Target eliminated");
    }
    if (isDestroyed(shipHealth)) {
      console.log("ship destroyed");
    }
  }
}

encounter();