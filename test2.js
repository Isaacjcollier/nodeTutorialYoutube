function User() {
  this.name = ''
  this.life = 100
  this.giveLife = function heal(targetPlayer) {
    targetPlayer.life += 1
    console.log(this.name + ' performed heal, and gave 1 life to' + targetPlayer.name)
  }
}

var Isaac = new User ()
var Wesley = new User ()

Isaac.name = 'Isaac'
Wesley.name = 'Wesley'

console.log('Isaac:' + Isaac.life)
console.log('Wesley' + Wesley.life)

User.prototype.uppercut = function uppercut(targetPlayer) {
  targetPlayer.life -= 17
  console.log(this.name + ' just uppercutted ' + targetPlayer.name)
}

Isaac.uppercut(Wesley)
console.log('Isaac:' + Isaac.life)
console.log('Wesley' + Wesley.life)
