const { Champion, TeamComp } = require('./obj');

const attrox = new Champion('Attrox', {
    'Damage': ['Both', 'S'],
    'Toughness': ['Sustain', 'A'],
    'CC': ['Both', 'B'],
    'Mobility': ['Both', 'B'],
    'Utility': ['Off', 'C'],
    'Range': ['Abilities', 'B']
}, {
    'Teamfight': 30,
    'Pick': 25,
    'Hyper': 10,
    'Poke': 10,
    'Split': 25
}, ['jug', 'ski']);

const ahri = new Champion('Ahri', {
    'Damage': ['Burst', 'A'],
    'Toughness': ['Sustain', 'D'],
    'CC': ['Hard', 'B'],
    'Mobility': ['Both', 'S'],
    'Utility': ['Off', 'C'],
    'Range': ['Both', 'A']
}, {
    'Teamfight': 25,
    'Pick': 30,
    'Hyper': 15,
    'Poke': 20,
    'Split': 10
}, ['bur', 'ass']);

const akali = new Champion('Akali', {
    'Damage': ['Both', 'S'],
    'Toughness': ['Sustain', 'D'],
    'CC': ['Soft', 'D'],
    'Mobility': ['Both', 's'],
    'Utility': ['Off', 'D'],
    'Range': ['Abilities', 'C']
}, {
    'Teamfight': 20,
    'Pick': 35,
    'Hyper': 5,
    'Poke': 5,
    'Split': 35
}, ['ass', 'div']);

const alistar = new Champion('Alistar', {
    'Damage': ['Burst', 'C'],
    'Toughness': ['Both', 'S'],
    'CC': ['Hard', 'S'],
    'Mobility': ['Engage', 'C'],
    'Utility': ['Both', 'B'],
    'Range': ['Abilities', 'C']
}, {
    'Teamfight': 30,
    'Pick': 25,
    'Hyper': 20,
    'Poke': 10,
    'Split': 15
}, ['van', 'war']);

const amumu = new Champion('Amumu', {
    'Damage': ['Both', 'B'],
    'Toughness': ['Mitigate', 'S'],
    'CC': ['Hard', 's'],
    'Mobility': ['Engage', 'B'],
    'Utility': ['Off', 'C'],
    'Range': ['Abilities', 'C']
}, {
    'Teamfight': 30,
    'Pick': 25,
    'Hyper': 20,
    'Poke': 10,
    'Split': 15
}, ['van', 'div']);


const blueTeamComp = new TeamComp([attrox, ahri, alistar, amumu, akali]);
blueTeamComp.teamcompScore();
console.log(blueTeamComp);