class Ability{

}

class Player{
    // name = 'john'
    // health = 100
    // speed = 10
    // ability = new Ability()

    constructor(name,health,speed,ability){
        this.name = name
        this.health = health
        this.speed = speed
        this.ability = ability
    }

    attack(){
        console.log("woosh")
    }

    move(direction){
        console.log('You moved ',direction,this.name,this.health,this.speed)
    }

}

const player1 = new Player('ali',120,10,new Ability())
const player2 = new Player('john',200,15,new Ability())
player1.attack()
player1.move('left')