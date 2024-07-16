export default [
    {
        id: 1,
        alias: "barbarian",
        title: "The Barbarian",
        description: "Barbarians have access to various skill trees that focus on different aspects of combat.",
        img: require("@/assets/img/barbarian.png"),
        lvl: 4,
        info: [
            { title: 'training', value: '20s' }, 
            { title: 'speed', value: '16' }, 
            { title: 'cost', value: '150' }
        ]
    },
    {
        id: 2,
        alias: "archer",
        title: "The Archer",
        description: "The Archer should engage enemies first, using Leap to get into the middle of the action and draw aggro.",
        img: require("@/assets/img/archer.png"),
        lvl: 4,
        info: [
            { title: 'training', value: '25s' }, 
            { title: 'speed', value: '24' }, 
            { title: 'cost', value: '300' }
        ]
    },
    {
        id: 3,
        alias: "wizard",
        title: "The Wizard",
        description: "The Mage provides powerful ranged attacks and crowd control abilities.",
        img: require("@/assets/img/wizard.png"),
        lvl: 5,
        info: [
            { title: 'training', value: '15s' }, 
            { title: 'speed', value: '30' }, 
            { title: 'cost', value: '350' }
        ]
    },
    {
        id: 4,
        alias: "goblin",
        title: "The Goblin",
        description: "The Goblin should use Teleport to maintain distance from enemies and avoid getting surrounded.",
        img: require("@/assets/img/goblin.png"),
        lvl: 5,
        info: [
            { title: 'training', value: '40s' }, 
            { title: 'speed', value: '15' }, 
            { title: 'cost', value: '150' }
        ]
    },
]