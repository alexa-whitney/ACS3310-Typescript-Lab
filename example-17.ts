// Giant Robot class

// Goal creat an interface with a methods 

// All Robots have name, power and type. 
// Robots should have a describe method that 
// prints: name:<name> type:<type> power:<power>

interface RobotInterface {
    name: string
    power: number
    type: string
    describe: () => void
}

class Robot implements RobotInterface {
    name: string
    power: number
    type: string
    constructor(name: string, power: number, type: string) {
        this.name = name
        this.power = power
        this.type = type
    }
    describe() {
        console.log(`name: ${this.name} type: ${this.type} power: ${this.power}`)
    }
}

// Test Robot class
const robot1 = new Robot('Bender', 100, 'Bending Robot')
robot1.describe()

// Export Robot class
export { Robot, RobotInterface };
