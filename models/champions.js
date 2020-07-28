import { Champion } from './obj';
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

const anivia = new Champion('Anivia', {
    'Damage': ['Both', 'S'],
    'Toughness': ['Sustain', 'C'],
    'CC': ['Both', 'B'],
    'Mobility': ['Repos', 'D'],
    'Utility': ['Both', 'C'],
    'Range': ['Both', 'A']
}, {
    'Teamfight': 30,
    'Pick': 5,
    'Hyper': 25,
    'Poke': 20,
    'Split': 20
}, ['bat', 'art']);

const annie = new Champion('Annie', {
    'Damage': ['Burst', 'S'],
    'Toughness': ['Mitigate', 'C'],
    'CC': ['Hard', 'A'],
    'Mobility': ['Repos', 'D'],
    'Utility': ['Both', 'C'],
    'Range': ['Both', 'B']
}, {
    'Teamfight': 30,
    'Pick': 30,
    'Hyper': 10,
    'Poke': 10,
    'Split': 20
}, ['bur', 'ass']);

const aphelios = new Champion('Aphelios', {
    'Damage': ['Both', 'S'],
    'Toughness': ['Both', 'C'],
    'CC': ['Hard', 'B'],
    'Mobility': ['Repos', 'D'],
    'Utility': ['Both', 'D'],
    'Range': ['Both', 'S']
}, {
    'Teamfight': 30,
    'Pick': 10,
    'Hyper': 25,
    'Poke': 20,
    'Split': 15
}, ['mar', 'bur']);

const ashe = new Champion('Ashe', {
    'Damage': ['DPS', 'S'],
    'Toughness': ['Sustain', 'D'],
    'CC': ['Both', 'A'],
    'Mobility': ['Repos', 'D'],
    'Utility': ['Both', 'A'],
    'Range': ['Both', 'S']
}, {
    'Teamfight': 30,
    'Pick': 30,
    'Hyper': 20,
    'Poke': 15,
    'Split': 5
}, ['mar', '']);

const aurelionSol = new Champion('Aurelion Sol', {
    'Damage': ['Both', 'S'],
    'Toughness': ['Sustain', 'D'],
    'CC': ['Both', 'A'],
    'Mobility': ['Engage', 'B'],
    'Utility': ['Both', 'A'],
    'Range': ['Both', 'A']
}, {
    'Teamfight': 30,
    'Pick': 30,
    'Hyper': 15,
    'Poke': 15,
    'Split': 10
}, ['bat', 'cat']);

const azir = new Champion('Azir', {
    'Damage': ['DPS', 'S'],
    'Toughness': ['Mitigate', 'D'],
    'CC': ['Both', 'A'],
    'Mobility': ['Both', 'A'],
    'Utility': ['Both', 'A'],
    'Range': ['Both', 'S']
}, {
    'Teamfight': 30,
    'Pick': 20,
    'Hyper': 20,
    'Poke': 20,
    'Split': 10
}, ['spec', '']);

const bard = new Champion('Bard', {
    'Damage': ['Burst', 'B'],
    'Toughness': ['Sustain', 'D'],
    'CC': ['Both', 'S'],
    'Mobility': ['Both', 'S'],
    'Utility': ['Both', 'S'],
    'Range': ['Both', 'B']
}, {
    'Teamfight': 20,
    'Pick': 35,
    'Hyper': 20,
    'Poke': 15,
    'Split': 10
}, ['cat', 'war']);

const blitzcrank = new Champion('Blitzcrank', {
    'Damage': ['Burst', 'C'],
    'Toughness': ['Mitigate', 'A'],
    'CC': ['Both', 'S'],
    'Mobility': ['Engage', 'C'],
    'Utility': ['Both', 'C'],
    'Range': ['Abilities', 'C']
}, {
    'Teamfight': 20,
    'Pick': 30,
    'Hyper': 15,
    'Poke': 15,
    'Split': 20
}, ['cat', 'war']);

const brand = new Champion('Brand', {
    'Damage': ['Burst', 'S'],
    'Toughness': ['Mitigate', 'D'],
    'CC': ['Both', 'S'],
    'Mobility': ['Repos', 'D'],
    'Utility': ['Def', 'C'],
    'Range': ['Both', 'A']
}, {
    'Teamfight': 35,
    'Pick': 15,
    'Hyper': 15,
    'Poke': 25,
    'Split': 15
}, ['bur', 'art']);

const braum = new Champion('Braum', {
    'Damage': ['Burst', 'D'],
    'Toughness': ['Mitigate', 'S'],
    'CC': ['Both', 'A'],
    'Mobility': ['Both', 'C'],
    'Utility': ['Both', 'S'],
    'Range': ['Abilities', 'C']
}, {
    'Teamfight': 20,
    'Pick': 20,
    'Hyper': 30,
    'Poke': 15,
    'Split': 15
}, ['war', 'van']);

const caitlyn = new Champion('Caitlyn', {
    'Damage': ['Both', 'S'],
    'Toughness': ['Sustain', 'D'],
    'CC': ['Both', 'B'],
    'Mobility': ['Repos', 'B'],
    'Utility': ['Both', 'C'],
    'Range': ['Both', 'S']
}, {
    'Teamfight': 25,
    'Pick': 20,
    'Hyper': 20,
    'Poke': 25,
    'Split': 10
}, ['cat', 'war']);

const camille = new Champion('Camille', {
    'Damage': ['Burst', 'S'],
    'Toughness': ['Mitigate', 'B'],
    'CC': ['Both', 'A'],
    'Mobility': ['Both', 'S'],
    'Utility': ['Off', 'B'],
    'Range': ['Abilities', 'B']
}, {
    'Teamfight': 20,
    'Pick': 30,
    'Hyper': 5,
    'Poke': 10,
    'Split': 35
}, ['div', 'cat']);

const cassiopeia = new Champion('Cassiopeia', {
    'Damage': ['DPS', 'S'],
    'Toughness': ['Sustain', 'D'],
    'CC': ['Both', 'A'],
    'Mobility': ['Both', 'C'],
    'Utility': ['Both', 'C'],
    'Range': ['Both', 'A']
}, {
    'Teamfight': 30,
    'Pick': 10,
    'Hyper': 25,
    'Poke': 20,
    'Split': 15
}, ['bat', 'art']);

const chogath = new Champion('Chogath', {
    'Damage': ['Burst', 'B'],
    'Toughness': ['Both', 'A'],
    'CC': ['Both', 'A'],
    'Mobility': ['Engage', 'D'],
    'Utility': ['both', 'C'],
    'Range': ['Abilities', 'B']
}, {
    'Teamfight': 20,
    'Pick': 15,
    'Hyper': 15,
    'Poke': 20,
    'Split': 30
}, ['spec', '']);

const corki = new Champion('Corki', {
    'Damage': ['DPS', 'S'],
    'Toughness': ['Sustain', 'D'],
    'CC': ['Soft', 'C'],
    'Mobility': ['Both', 'A'],
    'Utility': ['Def', 'D'],
    'Range': ['Both', 'S']
}, {
    'Teamfight': 30,
    'Pick': 25,
    'Hyper': 10,
    'Poke': 25,
    'Split': 10
}, ['mar', 'bat']);

const darius = new Champion('Darius', {
    'Damage': ['DPS', 'A'],
    'Toughness': ['Both', 'A'],
    'CC': ['Both', 'B'],
    'Mobility': ['Engage', 'C'],
    'Utility': ['Off', 'C'],
    'Range': ['Abilities', 'C']
}, {
    'Teamfight': 25,
    'Pick': 15,
    'Hyper': 10,
    'Poke': 10,
    'Split': 40
}, ['jug', 'ski']);

const diana = new Champion('Diana', {
    'Damage': ['Burst', 'S'],
    'Toughness': ['Mitigate', 'C'],
    'CC': ['Hard', 'C'],
    'Mobility': ['Engage', 'B'],
    'Utility': ['Off', 'C'],
    'Range': ['Abilities', 'B']
}, {
    'Teamfight': 30,
    'Pick': 25,
    'Hyper': 5,
    'Poke': 10,
    'Split': 30
}, ['ass', 'div']);

const draven = new Champion('Draven', {
    'Damage': ['DPS', 'S'],
    'Toughness': ['Sustain', 'D'],
    'CC': ['Both', 'C'],
    'Mobility': ['Both', 'B'],
    'Utility': ['Both', 'C'],
    'Range': ['Both', 'A']
}, {
    'Teamfight': 30,
    'Pick': 15,
    'Hyper': 25,
    'Poke': 10,
    'Split': 20
}, ['mar', 'ski']);

const drMundo = new Champion('Dr Mundo', {
    'Damage': ['DPS', 'B'],
    'Toughness': ['Both', 'S'],
    'CC': ['Soft', 'C'],
    'Mobility': ['Both', 'C'],
    'Utility': ['Both', 'C'],
    'Range': ['Abilities', 'C']
}, {
    'Teamfight': 20,
    'Pick': 15,
    'Hyper': 15,
    'Poke': 20,
    'Split': 30
}, ['jug', 'van']);

const ekko = new Champion('Ekko', {
    'Damage': ['Burst', 'S'],
    'Toughness': ['Both', 'C'],
    'CC': ['Both', 'C'],
    'Mobility': ['Both', 'S'],
    'Utility': ['Off', 'C'],
    'Range': ['Abilities', 'C']
}, {
    'Teamfight': 25,
    'Pick': 30,
    'Hyper': 5,
    'Poke': 10,
    'Split': 30
}, ['ass', 'div']);

const elise = new Champion('Elise', {
    'Damage': ['Burst', 'S'],
    'Toughness': ['Mitigate', 'D'],
    'CC': ['Hard', 'B'],
    'Mobility': ['Both', 'A'],
    'Utility': ['Both', 'C'],
    'Range': ['Both', 'B']
}, {
    'Teamfight': 20,
    'Pick': 35,
    'Hyper': 10,
    'Poke': 20,
    'Split': 15
}, ['ski', 'bur']);

const evelyn = new Champion('Evelyn', {
    'Damage': ['Burst', 'S'],
    'Toughness': ['Sustain', 'D'],
    'CC': ['Hard', 'C'],
    'Mobility': ['Both', 'A'],
    'Utility': ['Off', 'C'],
    'Range': ['Abilities', 'C']
}, {
    'Teamfight': 20,
    'Pick': 40,
    'Hyper': 5,
    'Poke': 20,
    'Split': 15
}, ['ass', 'bur']);

const ezreal = new Champion('Ezreal', {
    'Damage': ['DPS', 'S'],
    'Toughness': ['Mitigate', 'D'],
    'CC': ['None', 'D'],
    'Mobility': ['Both', 'A'],
    'Utility': ['Off', 'D'],
    'Range': ['Both', 'S']
}, {
    'Teamfight': 20,
    'Pick': 15,
    'Hyper': 20,
    'Poke': 35,
    'Split': 10
}, ['mar', 'art']);

const fiddlesticks = new Champion('Fiddlesticks', {
    'Damage': ['Burst', 'S'],
    'Toughness': ['Sustain', 'B'],
    'CC': ['Both', 'A'],
    'Mobility': ['Engage', 'B'],
    'Utility': ['Both', 'C'],
    'Range': ['Both', 'B']
}, {
    'Teamfight': 35,
    'Pick': 35,
    'Hyper': 10,
    'Poke': 10,
    'Split': 10
}, ['spec', '']);

const fiora = new Champion('Fiora', {
    'Damage': ['Both', 'S'],
    'Toughness': ['Both', 'B'],
    'CC': ['Both', 'C'],
    'Mobility': ['Both', 'S'],
    'Utility': ['Both', 'C'],
    'Range': ['Abilities', 'D']
}, {
    'Teamfight': 15,
    'Pick': 35,
    'Hyper': 10,
    'Poke': 5,
    'Split': 35
}, ['ski', 'jug']);

const fizz = new Champion('Fizz', {
    'Damage': ['Burst', 'S'],
    'Toughness': ['Mitigate', 'D'],
    'CC': ['Both', 'B'],
    'Mobility': ['Both', 'S'],
    'Utility': ['Off', 'C'],
    'Range': ['Abilities', 'C']
}, {
    'Teamfight': 15,
    'Pick': 35,
    'Hyper': 10,
    'Poke': 10,
    'Split': 30
}, ['ass', 'bur']);

const galio = new Champion('Galio', {
    'Damage': ['Burst', 'B'],
    'Toughness': ['Mitigate', 'A'],
    'CC': ['Hard', 'S'],
    'Mobility': ['Both', 'A'],
    'Utility': ['Both', 'A'],
    'Range': ['Abilities', 'C']
}, {
    'Teamfight': 30,
    'Pick': 25,
    'Hyper': 20,
    'Poke': 10,
    'Split': 15
}, ['war', 'van']);

const gangplank = new Champion('Gangplank', {
    'Damage': ['Burst', 'S'],
    'Toughness': ['Sustain', 'C'],
    'CC': ['Soft', 'C'],
    'Mobility': ['Both', 'C'],
    'Utility': ['Both', 'B'],
    'Range': ['Abilities', 'A']
}, {
    'Teamfight': 35,
    'Pick': 15,
    'Hyper': 10,
    'Poke': 20,
    'Split': 20
}, ['spec', '']);

const garen = new Champion('Garen', {
    'Damage': ['Both', 'B'],
    'Toughness': ['Both', 'S'],
    'CC': ['Soft', 'C'],
    'Mobility': ['Both', 'C'],
    'Utility': ['Off', 'C'],
    'Range': ['Abilities', 'D']
}, {
    'Teamfight': 25,
    'Pick': 25,
    'Hyper': 10,
    'Poke': 5,
    'Split': 25
}, ['jug', 'van']);

const gnar = new Champion('Gnar', {
    'Damage': ['Both', 'A'],
    'Toughness': ['Mitigate', 'B'],
    'CC': ['Both', 'S'],
    'Mobility': ['Both', 'A'],
    'Utility': ['Both', 'B'],
    'Range': ['Both', 'B']
}, {
    'Teamfight': 30,
    'Pick': 25,
    'Hyper': 10,
    'Poke': 15,
    'Split': 20
}, ['war', 'van']);

const gragas = new Champion('Gragas', {
    'Damage': ['Burst', 'A'],
    'Toughness': ['Both', 'B'],
    'CC': ['Both', 'S'],
    'Mobility': ['Both', 'B'],
    'Utility': ['Both', 'A'],
    'Range': ['Abilities', 'C']
}, {
    'Teamfight': 30,
    'Pick': 30,
    'Hyper': 10,
    'Poke': 20,
    'Split': 10
}, ['van', 'bur']);

const graves = new Champion('Graves', {
    'Damage': ['Both', 'A'],
    'Toughness': ['Mitigate', 'B'],
    'CC': ['Soft', 'C'],
    'Mobility': ['Both', 'A'],
    'Utility': ['Both', 'C'],
    'Range': ['Abilities', 'B']
}, {
    'Teamfight': 25,
    'Pick': 30,
    'Hyper': 10,
    'Poke': 15,
    'Split': 20
}, ['spec', '']);

const hecarim = new Champion('Hecarim', {
    'Damage': ['Both', 'A'],
    'Toughness': ['Sustain', 'A'],
    'CC': ['Hard', 'S'],
    'Mobility': ['Both', 'A'],
    'Utility': ['Both', 'C'],
    'Range': ['Abilities', 'D']
}, {
    'Teamfight': 30,
    'Pick': 35,
    'Hyper': 10,
    'Poke': 5,
    'Split': 20
}, ['div', 'van']);

const heimerdinger = new Champion('Heimerdinger', {
    'Damage': ['Both', 'S'],
    'Toughness': ['Mitigate', 'S'],
    'CC': ['Both', 'B'],
    'Mobility': ['Repos', 'D'],
    'Utility': ['Both', 'C'],
    'Range': ['Both', 'A']
}, {
    'Teamfight': 20,
    'Pick': 10,
    'Hyper': 15,
    'Poke': 25,
    'Split': 23
}, ['wpec', '']);

const illaoi = new Champion('Illaoi', {
    'Damage': ['Burst', 'S'],
    'Toughness': ['Sustain', 'A'],
    'CC': ['Soft', 'C'],
    'Mobility': ['Engage', 'C'],
    'Utility': ['Off', 'D'],
    'Range': ['Abilities', 'C']
}, {
    'Teamfight': 30,
    'Pick': 5,
    'Hyper': 5,
    'Poke': 20,
    'Split': 40
}, ['jug', 'ski']);

const irelia = new Champion('Irelia', {
    'Damage': ['Both', 'S'],
    'Toughness': ['Both', 'A'],
    'CC': ['Both', 'B'],
    'Mobility': ['Engage', 'A'],
    'Utility': ['Both', 'B'],
    'Range': ['Abilities', 'C']
}, {
    'Teamfight': 30,
    'Pick': 25,
    'Hyper': 5,
    'Poke': 5,
    'Split': 35
}, ['div', 'jug']);

const ivern = new Champion('Ivern', {
    'Damage': ['Burst', 'D'],
    'Toughness': ['Mitigate', 'C'],
    'CC': ['Both', 'B'],
    'Mobility': ['Engage', 'C'],
    'Utility': ['Both', 'A'],
    'Range': ['Both', 'B']
}, {
    'Teamfight': 20,
    'Pick': 20,
    'Hyper': 35,
    'Poke': 20,
    'Split': 5
}, ['cat', 'enc']);

const janna = new Champion('Janna', {
    'Damage': ['Burst', 'B'],
    'Toughness': ['Mitigate', 'C'],
    'CC': ['Both', 'B'],
    'Mobility': ['Engage', 'B'],
    'Utility': ['Both', 'S'],
    'Range': ['Both', 'A']
}, {
    'Teamfight': 15,
    'Pick': 15,
    'Hyper': 40,
    'Poke': 20,
    'Split': 10
}, ['enc', 'art']);

const jarvan = new Champion('Jarvan', {
    'Damage': ['Both', 'B'],
    'Toughness': ['Mitigate', 'A'],
    'CC': ['Both', 'A'],
    'Mobility': ['Both', 'A'],
    'Utility': ['Off', 'C'],
    'Range': ['Abilities', 'B']
}, {
    'Teamfight': 30,
    'Pick': 30,
    'Hyper': 10,
    'Poke': 10,
    'Split': 10
}, ['div', 'van']);

const jax = new Champion('Jax', {
    'Damage': ['Both', 'A'],
    'Toughness': ['Mitigate', 'A'],
    'CC': ['Hard', 'B'],
    'Mobility': ['Both', 'B'],
    'Utility': ['Both', 'C'],
    'Range': ['Abilties', 'D']
}, {
    'Teamfight': 10,
    'Pick': 30,
    'Hyper': 20,
    'Poke': 5,
    'Split': 35
}, ['ski', 'jug']);

const jayce = new Champion('Jayce', {
    'Damage': ['Burst', 'S'],
    'Toughness': ['Mitigate', 'C'],
    'CC': ['Both', 'C'],
    'Mobility': ['Both', 'B'],
    'Utility': ['Both', 'C'],
    'Range': ['Both', 'S']
}, {
    'Teamfight': 25,
    'Pick': 20,
    'Hyper': 5,
    'Poke': 30,
    'Split': 20
}, ['art', 'bur']);

const jhin = new Champion('Jhin', {
    'Damage': ['Both', 'S'],
    'Toughness': ['Mitigate', 'D'],
    'CC': ['Both', 'B'],
    'Mobility': ['Both', 'C'],
    'Utility': ['Both', 'B'],
    'Range': ['Both', 'S']
}, {
    'Teamfight': 30,
    'Pick': 25,
    'Hyper': 20,
    'Poke': 20,
    'Split': 5
}, ['mar', 'cat']);

const jinx = new Champion('Jinx', {
    'Damage': ['DPS', 'S'],
    'Toughness': ['Sustain', 'D'],
    'CC': ['Both', 'B'],
    'Mobility': ['Both', 'C'],
    'Utility': ['Both', 'C'],
    'Range': ['Both', 'S']
}, {
    'Teamfight': 35,
    'Pick': 15,
    'Hyper': 30,
    'Poke': 15,
    'Split': 5
}, ['mar', '']);

const kaisa = new Champion('Kaisa', {
    'Damage': ['Both', 'S'],
    'Toughness': ['Sustain', 'D'],
    'CC': ['None', 'D'],
    'Mobility': ['Both', 'S'],
    'Utility': ['Both', 'C'],
    'Range': ['Both', 'A']
}, {
    'Teamfight': 30,
    'Pick': 15,
    'Hyper': 30,
    'Poke': 20,
    'Split': 5
}, ['mar', 'div']);

const kalista = new Champion('Kalista', {
    'Damage': ['DPS', 'S'],
    'Toughness': ['Sustain', 'D'],
    'CC': ['Both', 'B'],
    'Mobility': ['Both', 'S'],
    'Utility': ['Both', 'B'],
    'Range': ['Both', 'A']
}, {
    'Teamfight': 35,
    'Pick': 25,
    'Hyper': 30,
    'Poke': 5,
    'Split': 5
}, ['mar', 'ski']);

const karma = new Champion('Karma', {
    'Damage': ['Burst', 'B'],
    'Toughness': ['Both', 'B'],
    'CC': ['Both', 'B'],
    'Mobility': ['Both', 'C'],
    'Utility': ['Both', 'B'],
    'Range': ['Both', 'A']
}, {
    'Teamfight': 25,
    'Pick': 20,
    'Hyper': 25,
    'Poke': 25,
    'Split': 5
}, ['enc', 'bur']);

const karthus = new Champion('Karthus', {
    'Damage': ['DPS', 'S'],
    'Toughness': ['Sustain', 'D'],
    'CC': ['Soft', 'C'],
    'Mobility': ['Repos', 'D'],
    'Utility': ['Both', 'C'],
    'Range': ['Both', 'A']
}, {
    'Teamfight': 30,
    'Pick': 20,
    'Hyper': 20,
    'Poke': 25,
    'Split': 5
}, ['bat', 'cat']);

const kassadin = new Champion('Kassadin', {
    'Damage': ['Burst', 'S'],
    'Toughness': ['Mitigate', 'C'],
    'CC': ['Soft', 'C'],
    'Mobility': ['Both', 'S'],
    'Utility': ['Off', 'C'],
    'Range': ['Abilities', 'C']
}, {
    'Teamfight': 25,
    'Pick': 30,
    'Hyper': 15,
    'Poke': 5,
    'Split': 25
}, ['ass', 'bur']);

const katarina = new Champion('Katarina', {
    'Damage': ['Burst', 'S'],
    'Toughness': ['Sustain', 'D'],
    'CC': ['None', 'D'],
    'Mobility': ['Both', 'S'],
    'Utility': ['Off', 'D'],
    'Range': ['Abilities', 'C']
}, {
    'Teamfight': 35,
    'Pick': 30,
    'Hyper': 20,
    'Poke': 5,
    'Split': 10
}, ['ass', 'div']);

const kayle = new Champion('Kayle', {
    'Damage': ['DPS', 'S'],
    'Toughness': ['Both', 'B'],
    'CC': ['Soft', 'C'],
    'Mobility': ['Both', 'C'],
    'Utility': ['Both', 'A'],
    'Range': ['Both', 'B']
}, {
    'Teamfight': 35,
    'Pick': 5,
    'Hyper': 30,
    'Poke': 10,
    'Split': 20
}, ['spec', '']);

const kayn = new Champion('Kayn', {
    'Damage': ['Burst', 'A'],
    'Toughness': ['Sustain', 'B'],
    'CC': ['Both', 'C'],
    'Mobility': ['Both', 'S'],
    'Utility': ['Both', 'C'],
    'Range': ['Both', 'C']
}, {
    'Teamfight': 30,
    'Pick': 35,
    'Hyper': 10,
    'Poke': 15,
    'Split': 10
}, ['ski', 'ass']);

const kennen = new Champion('Kennen', {
    'Damage': ['Burst', 'S'],
    'Toughness': ['Sustain', 'D'],
    'CC': ['Hard', 'A'],
    'Mobility': ['Both', 'B'],
    'Utility': ['Off', 'C'],
    'Range': ['Both', 'B']
}, {
    'Teamfight': 35,
    'Pick': 25,
    'Hyper': 10,
    'Poke': 15,
    'Split': 15
}, ['spec', '']);

const khazix = new Champion("Kha'zix", {
    'Damage': ['Burst', 'S'],
    'Toughness': ['Sustain', 'D'],
    'CC': ['Soft', 'C'],
    'Mobility': ['Both', 'A'],
    'Utility': ['Both', 'C'],
    'Range': ['Abilities', 'D']
}, {
    'Teamfight': 20,
    'Pick': 40,
    'Hyper': 10,
    'Poke': 15,
    'Split': 15
}, ['ass', 'bur']);

const kindred = new Champion('Kindred', {
    'Damage': ['DPS', 'S'],
    'Toughness': ['Both', 'C'],
    'CC': ['Soft', 'C'],
    'Mobility': ['Both', 'B'],
    'Utility': ['Def', 'A'],
    'Range': ['Both', 'A']
}, {
    'Teamfight': 30,
    'Pick': 20,
    'Hyper': 20,
    'Poke': 15,
    'Split': 15
}, ['mar', '']);

const kled = new Champion('Kled', {
    'Damage': ['Both', 'A'],
    'Toughness': ['Sustain', 'A'],
    'CC': ['Both', 'B'],
    'Mobility': ['Engage', 'S'],
    'Utility': ['Off', 'B'],
    'Range': ['Abilities', 'C']
}, {
    'Teamfight': 20,
    'Pick': 35,
    'Hyper': 10,
    'Poke': 5,
    'Split': 30
}, ['div', 'jug']);

const kogmaw = new Champion("Kog'Maw", {
    'Damage': ['DPS', 'S'],
    'Toughness': ['Sustain', 'D'],
    'CC': ['Soft', 'C'],
    'Mobility': ['Repos', 'D'],
    'Utility': ['Both', 'B'],
    'Range': ['Both', 'S']
}, {
    'Teamfight': 30,
    'Pick': 5,
    'Hyper': 40,
    'Poke': 20,
    'Split': 5
}, ['mar', 'art']);


const leblanc = new Champion('Leblanc', {
    'Damage': ['Burst', 'S'],
    'Toughness': ['Sustain', 'D'],
    'CC': ['Hard', 'B'],
    'Mobility': ['Both', 'S'],
    'Utility': ['Off', 'C'],
    'Range': ['Both', 'A']
}, {
    'Teamfight': 25,
    'Pick': 35,
    'Hyper': 10,
    'Poke': 25,
    'Split': 5
}, ['bur', 'ass']);

const leesin = new Champion('Leesin', {
    'Damage': ['Both', 'A'],
    'Toughness': ['Both', 'B'],
    'CC': ['Both', 'A'],
    'Mobility': ['Both', 'S'],
    'Utility': ['Both', 'B'],
    'Range': ['Abilities', 'C']
}, {
    'Teamfight': 30,
    'Pick': 30,
    'Hyper': 15,
    'Poke': 10,
    'Split': 15
}, ['div', 'bur']);

const leona = new Champion('Leona', {
    'Damage': ['Burst', 'C'],
    'Toughness': ['Mitigate', 'S'],
    'CC': ['Both', 'S'],
    'Mobility': ['Engage', 'C'],
    'Utility': ['Both', 'B'],
    'Range': ['Abilities', 'C']
}, {
    'Teamfight': 30,
    'Pick': 25,
    'Hyper': 25,
    'Poke': 10,
    'Split': 10
}, ['van', 'war']);

const lissandra = new Champion('Lissandra', {
    'Damage': ['Burst', 'A'],
    'Toughness': ['Both', 'C'],
    'CC': ['Both', 'S'],
    'Mobility': ['Both', 'B'],
    'Utility': ['Off', 'C'],
    'Range': ['Both', 'B']
}, {
    'Teamfight': 35,
    'Pick': 30,
    'Hyper': 15,
    'Poke': 15,
    'Split': 5
}, ['bur', 'div']);

const lucian = new Champion('Lucian', {
    'Damage': ['Both', 'S'],
    'Toughness': ['Mitigate', 'D'],
    'CC': ['None', 'D'],
    'Mobility': ['Both', 'A'],
    'Utility': ['None', 'D'],
    'Range': ['Both', 'A']
}, {
    'Teamfight': 30,
    'Pick': 25,
    'Hyper': 20,
    'Poke': 15,
    'Split': 10
}, ['mar', 'bur']);

const lulu = new Champion('Lulu', {
    'Damage': ['Burst', 'B'],
    'Toughness': ['Mitigate', 'C'],
    'CC': ['Both', 'A'],
    'Mobility': ['Both', 'C'],
    'Utility': ['Both', 'S'],
    'Range': ['Both', 'B']
}, {
    'Teamfight': 20,
    'Pick': 15,
    'Hyper': 40,
    'Poke': 20,
    'Split': 5
}, ['enc', '']);

const lux = new Champion('Lux', {
    'Damage': ['Burst', 'S'],
    'Toughness': ['Mitigate', 'C'],
    'CC': ['Both', 'A'],
    'Mobility': ['Repos', 'D'],
    'Utility': ['Def', 'B'],
    'Range': ['Both', 'S']
}, {
    'Teamfight': 35,
    'Pick': 15,
    'Hyper': 10,
    'Poke': 30,
    'Split': 10
}, ['art', 'bur']);

const malphite = new Champion('Malphite', {
    'Damage': ['Burst', 'B'],
    'Toughness': ['Mitigate', 'S'],
    'CC': ['Both', 'A'],
    'Mobility': ['Both', 'B'],
    'Utility': ['Off', 'C'],
    'Range': ['Abilities', 'C']
}, {
    'Teamfight': 35,
    'Pick': 25,
    'Hyper': 5,
    'Poke': 10,
    'Split': 25
}, ['van', 'div']);

const malzahar = new Champion('Malzahar', {
    'Damage': ['Both', 'S'],
    'Toughness': ['Mitigate', 'D'],
    'CC': ['Both', 'A'],
    'Mobility': ['Repos', 'D'],
    'Utility': ['Off', 'C'],
    'Range': ['Both', 'A']
}, {
    'Teamfight': 25,
    'Pick': 35,
    'Hyper': 10,
    'Poke': 25,
    'Split': 10
}, ['bat', 'ski']);

const maokai = new Champion('Maokai', {
    'Damage': ['Burst', 'C'],
    'Toughness': ['Both', 'S'],
    'CC': ['Both', 'S'],
    'Mobility': ['Engage', 'C'],
    'Utility': ['Off', 'B'],
    'Range': ['Abilities', 'C']
}, {
    'Teamfight': 30,
    'Pick': 25,
    'Hyper': 15,
    'Poke': 10,
    'Split': 20
}, ['van', 'div']);

const masterYi = new Champion('Master Yi', {
    'Damage': ['DPS', 'S'],
    'Toughness': ['Both', 'B'],
    'CC': ['None', 'D'],
    'Mobility': ['Both', 'A'],
    'Utility': ['None', 'D'],
    'Range': ['Abilities', 'D']
}, {
    'Teamfight': 20,
    'Pick': 35,
    'Hyper': 5,
    'Poke': 5,
    'Split': 35
}, ['ski', 'jug']);

const missFortune = new Champion('Miss Fortune', {
    'Damage': ['Both', 'S'],
    'Toughness': ['Sustain', 'D'],
    'CC': ['Soft', 'C'],
    'Mobility': ['Engage', 'C'],
    'Utility': ['Both', 'C'],
    'Range': ['Both', 'S']
}, {
    'Teamfight': 35,
    'Pick': 25,
    'Hyper': 20,
    'Poke': 10,
    'Split': 10
}, ['mar', '']);

const wukong = new Champion('Wukong', {
    'Damage': ['Burst', 'A'],
    'Toughness': ['Mitigate', 'A'],
    'CC': ['Hard', 'A'],
    'Mobility': ['Both', 'A'],
    'Utility': ['Off', 'B'],
    'Range': ['Abilities', 'C']
}, {
    'Teamfight': 35,
    'Pick': 25,
    'Hyper': 5,
    'Poke': 5,
    'Split': 30
}, ['div', 'van']);

const morderkaiser = new Champion('Morderkaiser', {
    'Damage': ['Both', 'A'],
    'Toughness': ['Mitigate', 'A'],
    'CC': ['Both', 'B'],
    'Mobility': ['Engage', 'D'],
    'Utility': ['Off', 'C'],
    'Range': ['Abilities', 'C']
}, {
    'Teamfight': 20,
    'Pick': 30,
    'Hyper': 10,
    'Poke': 5,
    'Split': 35
}, ['jug', 'ski']);

const morgana = new Champion('Morgana', {
    'Damage': ['Burst', 'B'],
    'Toughness': ['Mitigate', 'D'],
    'CC': ['Both', 'A'],
    'Mobility': ['Engage', 'D'],
    'Utility': ['Both', 'A'],
    'Range': ['Both', 'A']
}, {
    'Teamfight': 25,
    'Pick': 20,
    'Hyper': 20,
    'Poke': 20,
    'Split': 15
}, ['cat', 'enc']);

const nami = new Champion('Nami', {
    'Damage': ['Burst', 'B'],
    'Toughness': ['Sustain', 'D'],
    'CC': ['Both', 'A'],
    'Mobility': ['Engage', 'D'],
    'Utility': ['Both', 'S'],
    'Range': ['Both', 'A']
}, {
    'Teamfight': 30,
    'Pick': 15,
    'Hyper': 35,
    'Poke': 15,
    'Split': 5
}, ['enc', 'cat']);

const nasus = new Champion('Nasus', {
    'Damage': ['DPS', 'A'],
    'Toughness': ['Both', 'A'],
    'CC': ['Soft', 'B'],
    'Mobility': ['Engage', 'D'],
    'Utility': ['Off', 'C'],
    'Range': ['Abilities', 'D']
}, {
    'Teamfight': 15,
    'Pick': 25,
    'Hyper': 5,
    'Poke': 15,
    'Split': 40
}, ['jug', 'ski']);

const nautilus = new Champion('Nautilus', {
    'Damage': ['Burst', 'B'],
    'Toughness': ['Mitigate', 'S'],
    'CC': ['Both', 'S'],
    'Mobility': ['Both', 'B'],
    'Utility': ['Off', 'A'],
    'Range': ['Abilities', 'B']
}, {
    'Teamfight': 30,
    'Pick': 35,
    'Hyper': 20,
    'Poke': 5,
    'Split': 10
}, ['van', '']);

const neeko = new Champion('Neeko', {
    'Damage': ['Burst', 'S'],
    'Toughness': ['Mitigate', 'C'],
    'CC': ['Hard', 'A'],
    'Mobility': ['Both', 'B'],
    'Utility': ['Both', 'B'],
    'Range': ['Both', 'A']
}, {
    'Teamfight': 35,
    'Pick': 20,
    'Hyper': 5,
    'Poke': 25,
    'Split': 15
}, ['bur', 'cat']);

const nidalee = new Champion('Nidalee', {
    'Damage': ['Burst', 'S'],
    'Toughness': ['Sustain', 'D'],
    'CC': ['None', 'D'],
    'Mobility': ['Both', 'S'],
    'Utility': ['Def', 'C'],
    'Range': ['Both', 'S']
}, {
    'Teamfight': 15,
    'Pick': 35,
    'Hyper': 10,
    'Poke': 30,
    'Split': 10
}, ['spec', '']);

const nocturne = new Champion('Nocturne', {
    'Damage': ['DPS', 'A'],
    'Toughness': ['Both', 'D=C'],
    'CC': ['Both', 'B'],
    'Mobility': ['Both', 'A'],
    'Utility': ['Off', 'B'],
    'Range': ['Abilities', 'B']
}, {
    'Teamfight': 20,
    'Pick': 40,
    'Hyper': 5,
    'Poke': 10,
    'Split': 25
}, ['ass', 'ski']);

const nunu = new Champion('Nunu', {
    'Damage': ['Burst', 'C'],
    'Toughness': ['Both', 'A'],
    'CC': ['Both', 'S'],
    'Mobility': ['Engage', 'B'],
    'Utility': ['Off', 'A'],
    'Range': ['Abilities', 'C']
}, {
    'Teamfight': 30,
    'Pick': 35,
    'Hyper': 15,
    'Poke': 5,
    'Split': 15
}, ['van', 'cat']);

const olaf = new Champion('Olaf', {
    'Damage': ['DPS', 'A'],
    'Toughness': ['Sustain', 'A'],
    'CC': ['Soft', 'B'],
    'Mobility': ['Both', 'C'],
    'Utility': ['Both', 'C'],
    'Range': ['Abilities', 'D']
}, {
    'Teamfight': 20,
    'Pick': 30,
    'Hyper': 5,
    'Poke': 15,
    'Split': 30
}, ['div', 'jug']);

const orianna = new Champion('Orianna', {
    'Damage': ['Burst', 'S'],
    'Toughness': ['Mitigate', 'C'],
    'CC': ['Both', 'A'],
    'Mobility': ['Both', 'C'],
    'Utility': ['Both', 'A'],
    'Range': ['Both', 'A']
}, {
    'Teamfight': 35,
    'Pick': 20,
    'Hyper': 15,
    'Poke': 25,
    'Split': 5
}, ['bur', 'art']);

const ornn = new Champion('Ornn', {
    'Damage': ['Burst', 'C'],
    'Toughness': ['Mitigate', 'S'],
    'CC': ['Both', 'S'],
    'Mobility': ['Engage', 'C'],
    'Utility': ['Both', 'A'],
    'Range': ['Abilities', 'C']
}, {
    'Teamfight': 35,
    'Pick': 30,
    'Hyper': 10,
    'Poke': 5,
    'Split': 20
}, ['van', 'cat']);

const pantheon = new Champion('Pantheon', {
    'Damage': ['Burst', 'S'],
    'Toughness': ['Mitigate', 'B'],
    'CC': ['Both', 'A'],
    'Mobility': ['Engage', 'B'],
    'Utility': ['Both', 'C'],
    'Range': ['Abilities', 'C']
}, {
    'Teamfight': 20,
    'Pick': 35,
    'Hyper': 5,
    'Poke': 10,
    'Split': 30
}, ['div', 'jug']);

const poppy = new Champion('Poppy', {
    'Damage': ['Burst', 'C'],
    'Toughness': ['Mitigate', 'S'],
    'CC': ['Both', 'S'],
    'Mobility': ['Both', 'B'],
    'Utility': ['Both', 'B'],
    'Range': ['Abilities', 'D']
}, {
    'Teamfight': 25,
    'Pick': 20,
    'Hyper': 20,
    'Poke': 10,
    'Split': 25
}, ['war', 'van']);

const pyke = new Champion('Pyke', {
    'Damage': ['Burst', 'A'],
    'Toughness': ['Sustain', 'D'],
    'CC': ['Both', 'A'],
    'Mobility': ['Both', 'S'],
    'Utility': ['Off', 'C'],
    'Range': ['Abilities', 'C']
}, {
    'Teamfight': 30,
    'Pick': 40,
    'Hyper': 5,
    'Poke': 10,
    'Split': 15
}, ['ass', 'bur']);

const qiyana = new Champion('Qiyana', {
    'Damage': ['Burst', 'S'],
    'Toughness': ['Mitigate', 'D'],
    'CC': ['Hard', 'B'],
    'Mobility': ['Both', 'B'],
    'Utility': ['Off', 'C'],
    'Range': ['Abilities', 'C']
}, {
    'Teamfight': 30,
    'Pick': 35,
    'Hyper': 5,
    'Poke': 15,
    'Split': 15
}, ['ass', 'bur']);

const quinn = new Champion('Quinn', {
    'Damage': ['Both', 'S'],
    'Toughness': ['Sustain', 'D'],
    'CC': ['Both', 'B'],
    'Mobility': ['Both', 'S'],
    'Utility': ['Both', 'B'],
    'Range': ['Both', 'A']
}, {
    'Teamfight': 20,
    'Pick': 40,
    'Hyper': 5,
    'Poke': 15,
    'Split': 20
}, ['spec', '']);

const rakan = new Champion('Rakan', {
    'Damage': ['Burst', 'C'],
    'Toughness': ['Both', 'A'],
    'CC': ['Hard', 'S'],
    'Mobility': ['Both', 'S'],
    'Utility': ['Both', 'A'],
    'Range': ['Abilities', 'C']
}, {
    'Teamfight': 35,
    'Pick': 30,
    'Hyper': 25,
    'Poke': 5,
    'Split': 5
}, ['cat', 'war']);

const rammus = new Champion('Rammus', {
    'Damage': ['Both', 'C'],
    'Toughness': ['Mitigate', 'S'],
    'CC': ['Both', 'A'],
    'Mobility': ['Both', 'B'],
    'Utility': ['Off', 'C'],
    'Range': ['Abilities', 'D']
}, {
    'Teamfight': 30,
    'Pick': 35,
    'Hyper': 15,
    'Poke': 5,
    'Split': 15
}, ['van', 'div']);

const reksai = new Champion("Rek'Sai", {
    'Damage': ['Burst', 'A'],
    'Toughness': ['Sustain', 'C'],
    'CC': ['Hard', 'C'],
    'Mobility': ['Both', 'A'],
    'Utility': ['Both', 'B'],
    'Range': ['Abilities', 'C']
}, {
    'Teamfight': 25,
    'Pick': 40,
    'Hyper': 5,
    'Poke': 10,
    'Split': 20
}, ['div', 'ski']);

const renekton = new Champion('Renekton', {
    'Damage': ['Both', 'S'],
    'Toughness': ['Both', 'A'],
    'CC': ['Hard', 'B'],
    'Mobility': ['Both', 'A'],
    'Utility': ['Off', 'C'],
    'Range': ['Abilities', 'D']
}, {
    'Teamfight': 25,
    'Pick': 25,
    'Hyper': 10,
    'Poke': 5,
    'Split': 35
}, ['div', 'jug']);

const rengar = new Champion('Rengar', {
    'Damage': ['Burst', 'S'],
    'Toughness': ['Sustain', 'B'],
    'CC': ['Both', 'C'],
    'Mobility': ['Engage', 'A'],
    'Utility': ['Off', 'D'],
    'Range': ['Abilities', 'D']
}, {
    'Teamfight': 20,
    'Pick': 35,
    'Hyper': 5,
    'Poke': 10,
    'Split': 30
}, ['ass', 'div']);

const riven = new Champion('Riven', {
    'Damage': ['Both', 'S'],
    'Toughness': ['Mitigate', 'B'],
    'CC': ['Hard', 'B'],
    'Mobility': ['Both', 'S'],
    'Utility': ['Off', 'C'],
    'Range': ['Abilities', 'C']
}, {
    'Teamfight': 30,
    'Pick': 30,
    'Hyper': 5,
    'Poke': 5,
    'Split': 30
}, ['ski', 'div']);

const rumble = new Champion('Rumble', {
    'Damage': ['Both', 'A'],
    'Toughness': ['Both', 'A'],
    'CC': ['Soft', 'B'],
    'Mobility': ['Both', 'C'],
    'Utility': ['Both', 'C'],
    'Range': ['Abilities', 'B']
}, {
    'Teamfight': 30,
    'Pick': 25,
    'Hyper': 5,
    'Poke': 15,
    'Split': 25
}, ['bat', 'cat']);

const ryze = new Champion('Ryze', {
    'Damage': ['Both', 'S'],
    'Toughness': ['Mitigate', 'D'],
    'CC': ['Both', 'B'],
    'Mobility': ['Both', 'B'],
    'Utility': ['Both', 'A'],
    'Range': ['Both', 'B']
}, {
    'Teamfight': 30,
    'Pick': 25,
    'Hyper': 5,
    'Poke': 15,
    'Split': 25
}, ['bat', '']);

const sejuani = new Champion('Sejuani', {
    'Damage': ['Burst', 'C'],
    'Toughness': ['Mitigate', 'S'],
    'CC': ['Both', 'S'],
    'Mobility': ['Both', 'B'],
    'Utility': ['Off', 'B'],
    'Range': ['Abilities', 'C']
}, {
    'Teamfight': 35,
    'Pick': 35,
    'Hyper': 15,
    'Poke': 5,
    'Split': 10
}, ['van', '']);

const senna = new Champion('Senna', {
    'Damage': ['DPS', 'A'],
    'Toughness': ['Both', 'C'],
    'CC': ['Hard', 'C'],
    'Mobility': ['Both', 'C'],
    'Utility': ['Both', 'S'],
    'Range': ['Both', 'S']
}, {
    'Teamfight': 25,
    'Pick': 25,
    'Hyper': 25,
    'Poke': 20,
    'Split': 5
}, ['mar', 'enc']);

const sett = new Champion('Sett', {
    'Damage': ['Both', 'A'],
    'Toughness': ['Both', 'A'],
    'CC': ['Both', 'A'],
    'Mobility': ['Engage', 'C'],
    'Utility': ['Off', 'C'],
    'Range': ['Abilities', 'D']
}, {
    'Teamfight': 25,
    'Pick': 25,
    'Hyper': 10,
    'Poke': 5,
    'Split': 35
}, ['jug', 'ski']);

const shaco = new Champion('Shaco', {
    'Damage': ['Burst', 'S'],
    'Toughness': ['Mitigate', 'D'],
    'CC': ['Both', 'A'],
    'Mobility': ['Both', 'S'],
    'Utility': ['Both', 'C'],
    'Range': ['Abilities', 'C']
}, {
    'Teamfight': 20,
    'Pick': 40,
    'Hyper': 10,
    'Poke': 20,
    'Split': 10
}, ['ass', 'bur']);

const shen = new Champion('Shen', {
    'Damage': ['DPS', 'B'],
    'Toughness': ['Mitigate', 'S'],
    'CC': ['Both', 'B'],
    'Mobility': ['Both', 'A'],
    'Utility': ['Both', 'A'],
    'Range': ['Abilities', 'C']
}, {
    'Teamfight': 25,
    'Pick': 30,
    'Hyper': 20,
    'Poke': 5,
    'Split': 20
}, ['war', 'van']);

const shyvana = new Champion('Shyvana', {
    'Damage': ['Both', 'A'],
    'Toughness': ['Mitigate', 'A'],
    'CC': ['Hard', 'C'],
    'Mobility': ['Both', 'C'],
    'Utility': ['Off', 'D'],
    'Range': ['Abilities', 'C']
}, {
    'Teamfight': 30,
    'Pick': 20,
    'Hyper': 5,
    'Poke': 25,
    'Split': 20
}, ['jug', 'div']);

const singed = new Champion('Singed', {
    'Damage': ['DPS', 'B'],
    'Toughness': ['Both', 'S'],
    'CC': ['Both', 'A'],
    'Mobility': ['Both', 'A'],
    'Utility': ['Both', 'C'],
    'Range': ['Abilities', 'C']
}, {
    'Teamfight': 30,
    'Pick': 25,
    'Hyper': 5,
    'Poke': 5,
    'Split': 35
}, ['spec', 'ski']);

const sion = new Champion('Sion', {
    'Damage': ['Burst', 'C'],
    'Toughness': ['Mitigate', 'S'],
    'CC': ['Both', 'S'],
    'Mobility': ['Engage', 'C'],
    'Utility': ['Off', 'C'],
    'Range': ['Abilities', 'C']
}, {
    'Teamfight': 30,
    'Pick': 20,
    'Hyper': 10,
    'Poke': 15,
    'Split': 25
}, ['van', 'jug']);

const sivir = new Champion('Sivir', {
    'Damage': ['DPS', 'S'],
    'Toughness': ['Mitigate', 'D'],
    'CC': ['None', 'D'],
    'Mobility': ['Both', 'C'],
    'Utility': ['Both', 'B'],
    'Range': ['Both', 'A']
}, {
    'Teamfight': 35,
    'Pick': 15,
    'Hyper': 25,
    'Poke': 15,
    'Split': 10
}, ['mar', 'enc']);

const skarner = new Champion('Skaner', {
    'Damage': ['Burst', 'C'],
    'Toughness': ['Mitigate', 'S'],
    'CC': ['Both', 'S'],
    'Mobility': ['Both', 'C'],
    'Utility': ['Off', 'C'],
    'Range': ['Abilities', 'D']
}, {
    'Teamfight': 20,
    'Pick': 40,
    'Hyper': 15,
    'Poke': 5,
    'Split': 20
}, ['div', 'van']);

const sona = new Champion('Sona', {
    'Damage': ['Burst', 'A'],
    'Toughness': ['Sustain', 'D'],
    'CC': ['Hard', 'B'],
    'Mobility': ['Both', 'C'],
    'Utility': ['Both', 'S'],
    'Range': ['Both', 'B']
}, {
    'Teamfight': 25,
    'Pick': 15,
    'Hyper': 30,
    'Poke': 25,
    'Split': 5
}, ['enc', 'bur']);

const soraka = new Champion('Soraka', {
    'Damage': ['Burst', 'C'],
    'Toughness': ['Sustain', 'C'],
    'CC': ['Both', 'B'],
    'Mobility': ['Both', 'C'],
    'Utility': ['Def', 'S'],
    'Range': ['Both', 'A']
}, {
    'Teamfight': 30,
    'Pick': 10,
    'Hyper': 35,
    'Poke': 15,
    'Split': 10
}, ['enc', '']);

const swain = new Champion('Swain', {
    'Damage': ['Both', 'S'],
    'Toughness': ['Sustain', 'B'],
    'CC': ['Both', 'B'],
    'Mobility': ['Engage', 'C'],
    'Utility': ['Both', 'B'],
    'Range': ['Both', 'A']
}, {
    'Teamfight': 35,
    'Pick': 15,
    'Hyper': 5,
    'Poke': 20,
    'Split': 25
}, ['bat', 'div']);

const sylas = new Champion('Sylas', {
    'Damage': ['Burst', 'S'],
    'Toughness': ['Sustain', 'C'],
    'CC': ['Both', 'A'],
    'Mobility': ['Both', 'A'],
    'Utility': ['Both', 'B'],
    'Range': ['Abilities', 'C']
}, {
    'Teamfight': 30,
    'Pick': 30,
    'Hyper': 10,
    'Poke': 5,
    'Split': 25
}, ['bur', 'ski']);

const syndra = new Champion('Syndra', {
    'Damage': ['Burst', 'S'],
    'Toughness': ['Sustain', 'D'],
    'CC': ['Both', 'B'],
    'Mobility': ['Repos', 'D'],
    'Utility': ['Both', 'C'],
    'Range': ['Both', 'S']
}, {
    'Teamfight': 25,
    'Pick': 25,
    'Hyper': 5,
    'Poke': 35,
    'Split': 10
}, ['bur', 'art']);

const tahmKench = new Champion('Tahm Kench', {
    'Damage': ['DPS', 'C'],
    'Toughness': ['Mitigate', 'S'],
    'CC': ['Both', 'B'],
    'Mobility': ['Both', 'B'],
    'Utility': ['Both', 'A'],
    'Range': ['Abilities', 'C']
}, {
    'Teamfight': 15,
    'Pick': 30,
    'Hyper': 30,
    'Poke': 5,
    'Split': 20
}, ['war', 'jug']);

const taliyah = new Champion('Taliyah', {
    'Damage': ['Both', 'S'],
    'Toughness': ['Mitigate', 'D'],
    'CC': ['Both', 'B'],
    'Mobility': ['Engage', 'A'],
    'Utility': ['Off', 'B'],
    'Range': ['Both', 'S']
}, {
    'Teamfight': 35,
    'Pick': 20,
    'Hyper': 5,
    'Poke': 30,
    'Split': 10
}, ['bat', 'cat']);

const talon = new Champion('Talon', {
    'Damage': ['Burst', 'S'],
    'Toughness': ['Sustain', 'D'],
    'CC': ['Soft', 'C'],
    'Mobility': ['Both', 'S'],
    'Utility': ['Both', 'D'],
    'Range': ['Abilities', 'C']
}, {
    'Teamfight': 20,
    'Pick': 40,
    'Hyper': 5,
    'Poke': 10,
    'Split': 25
}, ['ass', 'div']);

const taric = new Champion('Taric', {
    'Damage': ['DPS', 'D'],
    'Toughness': ['Both', 'S'],
    'CC': ['Hard', 'C'],
    'Mobility': ['Engage', 'D'],
    'Utility': ['Both', 'S'],
    'Range': ['Abilities', 'C']
}, {
    'Teamfight': 30,
    'Pick': 5,
    'Hyper': 40,
    'Poke': 10,
    'Split': 15
}, ['enc', 'war']);

const teemo = new Champion('Teemo', {
    'Damage': ['DPS', 'S'],
    'Toughness': ['Sustain', 'D'],
    'CC': ['Soft', 'B'],
    'Mobility': ['Both', 'B'],
    'Utility': ['Both', 'C'],
    'Range': ['Both', 'B']
}, {
    'Teamfight': 25,
    'Pick': 20,
    'Hyper': 10,
    'Poke': 15,
    'Split': 30
}, ['spec', '']);

const thresh = new Champion('Thresh', {
    'Damage': ['Burst', 'C'],
    'Toughness': ['Mitigate', 'B'],
    'CC': ['Both', 'S'],
    'Mobility': ['Engage', 'C'],
    'Utility': ['Both', 'S'],
    'Range': ['Both', 'B']
}, {
    'Teamfight': 15,
    'Pick': 25,
    'Hyper': 30,
    'Poke': 20,
    'Split': 10
}, ['cat', 'war']);

const tristana = new Champion('Tristana', {
    'Damage': ['DPS', 'S'],
    'Toughness': ['Sustain', 'D'],
    'CC': ['Both', 'B'],
    'Mobility': ['Both', 'A'],
    'Utility': ['Def', 'C'],
    'Range': ['Both', 'S']
}, {
    'Teamfight': 30,
    'Pick': 20,
    'Hyper': 25,
    'Poke': 15,
    'Split': 10
}, ['mar', '']);

const trundle = new Champion('Trundle', {
    'Damage': ['DPS', 'C'],
    'Toughness': ['Both', 'S'],
    'CC': ['Both', 'B'],
    'Mobility': ['Both', 'C'],
    'Utility': ['Both', 'B'],
    'Range': ['Abilities', 'D']
}, {
    'Teamfight': 30,
    'Pick': 25,
    'Hyper': 10,
    'Poke': 10,
    'Split': 25
}, ['jug', 'ski']);

const tryndamere = new Champion('Tryndamere', {
    'Damage': ['DPS', 'S'],
    'Toughness': ['Both', 'A'],
    'CC': ['Soft', 'C'],
    'Mobility': ['Both', 'A'],
    'Utility': ['Both', 'C'],
    'Range': ['Abilities', 'D']
}, {
    'Teamfight': 15,
    'Pick': 25,
    'Hyper': 15,
    'Poke': 5,
    'Split': 40
}, ['ski', 'jug']);

const twistedFate = new Champion('Twisted Fate', {
    'Damage': ['Burst', 'A'],
    'Toughness': ['Sustain', 'D'],
    'CC': ['Both', 'B'],
    'Mobility': ['Both', 'B'],
    'Utility': ['Both', 'B'],
    'Range': ['Both', 'A']
}, {
    'Teamfight': 20,
    'Pick': 40,
    'Hyper': 5,
    'Poke': 20,
    'Split': 15
}, ['bur', 'bat']);

const twitch = new Champion('Twitch', {
    'Damage': ['DPS', 'S'],
    'Toughness': ['Sustain', 'D'],
    'CC': ['Soft', 'C'],
    'Mobility': ['Both', 'B'],
    'Utility': ['Both', 'D'],
    'Range': ['Both', 'S']
}, {
    'Teamfight': 35,
    'Pick': 20,
    'Hyper': 35,
    'Poke': 5,
    'Split': 5
}, ['mar', '']);

const udyr = new Champion('Udyr', {
    'Damage': ['DPS', 'A'],
    'Toughness': ['Both', 'A'],
    'CC': ['Hard', 'C'],
    'Mobility': ['Both', 'C'],
    'Utility': ['Off', 'D'],
    'Range': ['Abilities', 'D']
}, {
    'Teamfight': 15,
    'Pick': 30,
    'Hyper': 10,
    'Poke': 5,
    'Split': 40
}, ['jug', 'ski']);

const urgot = new Champion('Urgot', {
    'Damage': ['DPS', 'A'],
    'Toughness': ['Mitigate', 'A'],
    'CC': ['Both', 'A'],
    'Mobility': ['Both', 'C'],
    'Utility': ['Both', 'C'],
    'Range': ['Both', 'B']
}, {
    'Teamfight': 30,
    'Pick': 15,
    'Hyper': 10,
    'Poke': 10,
    'Split': 35
}, ['jug', 'ski']);

const varus = new Champion('Varus', {
    'Damage': ['Both', 'S'],
    'Toughness': ['Sustain', 'D'],
    'CC': ['Both', 'A'],
    'Mobility': ['Repos', 'D'],
    'Utility': ['Both', 'C'],
    'Range': ['Both', 'S']
}, {
    'Teamfight': 35,
    'Pick': 10,
    'Hyper': 30,
    'Poke': 20,
    'Split': 5
}, ['mar', 'art']);

const vayne = new Champion('Vayne', {
    'Damage': ['DPS', 'S'],
    'Toughness': ['Sustain', 'D'],
    'CC': ['Hard', 'C'],
    'Mobility': ['Both', 'S'],
    'Utility': ['Def', 'D'],
    'Range': ['Both', 'B']
}, {
    'Teamfight': 35,
    'Pick': 20,
    'Hyper': 35,
    'Poke': 5,
    'Split': 5
}, ['mar', '']);

const veigar = new Champion('Veigar', {
    'Damage': ['Burst', 'S'],
    'Toughness': ['Sustain', 'D'],
    'CC': ['Hard', 'C'],
    'Mobility': ['Repos', 'D'],
    'Utility': ['Both', 'B'],
    'Range': ['Both', 'A']
}, {
    'Teamfight': 30,
    'Pick': 20,
    'Hyper': 20,
    'Poke': 20,
    'Split': 10
}, ['bur', 'art']);

const velkoz = new Champion('Velkoz', {
    'Damage': ['Burst', 'S'],
    'Toughness': ['Sustain', 'D'],
    'CC': ['Both', 'B'],
    'Mobility': ['Repos', 'D'],
    'Utility': ['Both', 'C'],
    'Range': ['Both', 'S']
}, {
    'Teamfight': 35,
    'Pick': 10,
    'Hyper': 10,
    'Poke': 35,
    'Split': 10
}, ['art', 'bur']);

const vi = new Champion('Vi', {
    'Damage': ['Burst', 'A'],
    'Toughness': ['Mitigate', 'B'],
    'CC': ['Hard', 'A'],
    'Mobility': ['Both', 'A'],
    'Utility': ['Off', 'C'],
    'Range': ['Abilities', 'B']
}, {
    'Teamfight': 25,
    'Pick': 35,
    'Hyper': 10,
    'Poke': 5,
    'Split': 25
}, ['div', 'bur']);

const viktor = new Champion('Viktor', {
    'Damage': ['Both', 'S'],
    'Toughness': ['mitigate', 'D'],
    'CC': ['Both', 'B'],
    'Mobility': ['Both', 'C'],
    'Utility': ['Both', 'C'],
    'Range': ['Both', 'A']
}, {
    'Teamfight': 35,
    'Pick': 10,
    'Hyper': 20,
    'Poke': 25,
    'Split': 10
}, ['bat', 'bur']);

const vladimir = new Champion('Vladimir', {
    'Damage': ['Burst', 'S'],
    'Toughness': ['Both', 'B'],
    'CC': ['Soft', 'C'],
    'Mobility': ['Engage', 'D'],
    'Utility': ['Off', 'D'],
    'Range': ['Both', 'B']
}, {
    'Teamfight': 35,
    'Pick': 20,
    'Hyper': 5,
    'Poke': 10,
    'Split': 30
}, ['bat', 'bur']);

const volibear = new Champion('Volibear', {
    'Damage': ['Both', 'A'],
    'Toughness': ['Both', 'A'],
    'CC': ['Both', 'A'],
    'Mobility': ['Both', 'C'],
    'Utility': ['Off', 'B'],
    'Range': ['Abilities', 'C']
}, {
    'Teamfight': 30,
    'Pick': 25,
    'Hyper': 10,
    'Poke': 10,
    'Split': 25
}, ['jug', 'van']);

const warwick = new Champion('Warwick', {
    'Damage': ['DPS', 'A'],
    'Toughness': ['Both', 'S'],
    'CC': ['Hard', 'A'],
    'Mobility': ['Both', 'A'],
    'Utility': ['Off', 'C'],
    'Range': ['Abilities', 'D']
}, {
    'Teamfight': 20,
    'Pick': 35,
    'Hyper': 10,
    'Poke': 5,
    'Split': 30
}, ['div', 'jug']);

const xayah = new Champion('Xayah', {
    'Damage': ['DPS', 'S'],
    'Toughness': ['Mitigate', 'D'],
    'CC': ['Hard', 'C'],
    'Mobility': ['Both', 'C'],
    'Utility': ['Both', 'C'],
    'Range': ['Both', 'A']
}, {
    'Teamfight': 35,
    'Pick': 10,
    'Hyper': 25,
    'Poke': 10,
    'Split': 10
}, ['mar', '']);

const xerath = new Champion('Xerath', {
    'Damage': ['Burst', 'S'],
    'Toughness': ['Mitigate', 'D'],
    'CC': ['Both', 'B'],
    'Mobility': ['Repos', 'D'],
    'Utility': ['Both', 'C'],
    'Range': ['Both', 'S']
}, {
    'Teamfight': 35,
    'Pick': 15,
    'Hyper': 5,
    'Poke': 35,
    'Split': 10
}, ['art', 'bur']);

const xinZhao = new Champion('Xin Zhao', {
    'Damage': ['DPS', 'A'],
    'Toughness': ['Both', 'A'],
    'CC': ['Both', 'B'],
    'Mobility': ['Engage', 'C'],
    'Utility': ['Both', 'D'],
    'Range': ['Abilities', 'D']
}, {
    'Teamfight': 20,
    'Pick': 35,
    'Hyper': 10,
    'Poke': 5,
    'Split': 30
}, ['div', 'jug']);

const yasuo = new Champion('Yasuo', {
    'Damage': ['DPS', 'S'],
    'Toughness': ['Mitigate', 'B'],
    'CC': ['Hard', 'B'],
    'Mobility': ['Both', 'A'],
    'Utility': ['Both', 'B'],
    'Range': ['Abilities', 'C']
}, {
    'Teamfight': 20,
    'Pick': 20,
    'Hyper': 20,
    'Poke': 10,
    'Split': 30
}, ['ski', 'ass']);

const yorick = new Champion('Yorick', {
    'Damage': ['DPS', 'A'],
    'Toughness': ['Sustain', 'A'],
    'CC': ['Soft', 'C'],
    'Mobility': ['Engage', 'C'],
    'Utility': ['Both', 'C'],
    'Range': ['Abilities', 'C']
}, {
    'Teamfight': 20,
    'Pick': 20,
    'Hyper': 10,
    'Poke': 10,
    'Split': 40
}, ['jug', '']);

const yuumi = new Champion('Yuumi', {
    'Damage': ['Burst', 'B'],
    'Toughness': ['Both', 'D'],
    'CC': ['Both', 'A'],
    'Mobility': ['Both', 'C'],
    'Utility': ['Both', 'S'],
    'Range': ['Both', 'A']
}, {
    'Teamfight': 30,
    'Pick': 10,
    'Hyper': 40,
    'Poke': 15,
    'Split': 5
}, ['enc', '']);

const zac = new Champion('Zac', {
    'Damage': ['Burst', 'C'],
    'Toughness': ['Sustain', 'S'],
    'CC': ['Both', 'S'],
    'Mobility': ['Both', 'A'],
    'Utility': ['Off', 'C'],
    'Range': ['Abilities', 'C']
}, {
    'Teamfight': 35,
    'Pick': 35,
    'Hyper': 15,
    'Poke': 5,
    'Split': 10
}, ['van', 'div']);

const zed = new Champion('Zed', {
    'Damage': ['Burst', 'S'],
    'Toughness': ['Mitigate', 'D'],
    'CC': ['Soft', 'C'],
    'Mobility': ['Both', 'S'],
    'Utility': ['Both', 'D'],
    'Range': ['Abilities', 'B']
}, {
    'Teamfight': 20,
    'Pick': 35,
    'Hyper': 5,
    'Poke': 15,
    'Split': 25
}, ['ass', 'bur']);

const ziggs = new Champion('Ziggs', {
    'Damage': ['Burst', 'S'],
    'Toughness': ['Mitigate', 'D'],
    'CC': ['Both', 'B'],
    'Mobility': ['Both', 'C'],
    'Utility': ['Both', 'C'],
    'Range': ['Both', 'S']
}, {
    'Teamfight': 35,
    'Pick': 20,
    'Hyper': 5,
    'Poke': 30,
    'Split': 10
}, ['art', 'cat']);

const zilean = new Champion('Zilean', {
    'Damage': ['Burst', 'B'],
    'Toughness': ['Sustain', 'D'],
    'CC': ['Both', 'A'],
    'Mobility': ['Both', 'B'],
    'Utility': ['Both', 'S'],
    'Range': ['Both', 'A']
}, {
    'Teamfight': 30,
    'Pick': 10,
    'Hyper': 30,
    'Poke': 20,
    'Split': 10
}, ['spec', '']);

const zoe = new Champion('Zoe', {
    'Damage': ['Burst', 'S'],
    'Toughness': ['Sustain', 'D'],
    'CC': ['Both', 'B'],
    'Mobility': ['Both', 'C'],
    'Utility': ['Both', 'C'],
    'Range': ['Both', 'S']
}, {
    'Teamfight': 25,
    'Pick': 20,
    'Hyper': 10,
    'Poke': 35,
    'Split': 10
}, ['bur', 'art']);

const zyra = new Champion('Zyra', {
    'Damage': ['Both', 'S'],
    'Toughness': ['Sustain', 'D'],
    'CC': ['Hard', 'A'],
    'Mobility': ['Repos', 'D'],
    'Utility': ['Both', 'B'],
    'Range': ['Both', 'A']
}, {
    'Teamfight': 35,
    'Pick': 10,
    'Hyper': 15,
    'Poke': 30,
    'Split': 10
}, ['cat', 'bat']);


export const champions = {
    'attrox': attrox,
    'ahri': ahri,
    'akali': akali,
    'alistar': alistar,
    'amumu': amumu,
    'anivia': anivia,
    'annie': annie,
    'aphelios': aphelios,
    'ashe': ashe,
    'aurelionsol': aurelionSol,
    'azir': azir,
    'bard': bard,
    'bliztcrank': blitzcrank,
    'brand': brand,
    'braum': braum,
    'caitlyn': caitlyn,
    'camille': camille,
    'cassiopeia': cassiopeia,
    'chogath': chogath,
    'corki': corki,
    'darius': darius,
    'diana': diana,
    'draven': draven,
    'drmundo': drMundo,
    'ekko': ekko,
    'elise': elise,
    'evelyn': evelyn,
    'ezreal': ezreal,
    'fiddlesticks': fiddlesticks,
    'fiora': fiora,
    'fizz': fizz,
    'galio': galio,
    'gangplank': gangplank,
    'garen': garen,
    'gnar': gnar,
    'gragas': gragas,
    'graves': graves,
    'hecarim': hecarim,
    'heimerdinger': heimerdinger,
    'illaoi': illaoi,
    'irelia': irelia,
    'ivern': ivern,
    'janna': janna,
    'jarvan': jarvan,
    'jax': jax,
    'jayce': jayce,
    'jhin': jhin,
    'jinx': jinx,
    'kaisa': kaisa,
    'kalista': kalista,
    'karma': karma,
    'karthus': karthus,
    'kassadin': kassadin,
    'katarina': katarina,
    'kayle': kayle,
    'kayn': kayn,
    'kennen': kennen,
    'khazix': khazix,
    'kindred': kindred,
    'kled': kled,
    'kogmaw': kogmaw,
    'leblanc': leblanc,
    'leesin': leesin,
    'leona': leona,
    'lissandra': lissandra,
    'lucian': lucian,
    'lulu': lulu,
    'lux': lux,
    'malphite': malphite,
    'malzahar': malzahar,
    'maokai': maokai,
    'masteryi': masterYi,
    'missfortune': missFortune,
    'wukong': wukong,
    'morderkaiser': morderkaiser,
    'morgana': morgana,
    'nami': nami,
    'nasus': nasus,
    'nautilus': nautilus,
    'neeko': neeko,
    'nidalee': nidalee,
    'nocturne': nocturne,
    'nunu': nunu,
    'olaf': olaf,
    'orianna': orianna,
    'ornn': ornn,
    'pantheon': pantheon,
    'poppy': poppy,
    'pyke': pyke,
    'qiyana': qiyana,
    'quinn': quinn,
    'rakan': rakan,
    'rammus': rammus,
    'reksai': reksai,
    'renekton': renekton,
    'rengar': rengar,
    'riven': riven,
    'rumble': rumble,
    'ryze': ryze,
    'sejuani': sejuani,
    'senna': senna,
    'sett': sett,
    'shaco': shaco,
    'shen': shen,
    'shyvana': shyvana,
    'singed': singed,
    'sion': sion,
    'sivir': sivir,
    'skarner': skarner,
    'sona': sona,
    'soraka': soraka,
    'swain': swain,
    'sylas': sylas,
    'syndra': syndra,
    'tahmkench': tahmKench,
    'taliyah': taliyah,
    'talon': talon,
    'taric': taric,
    'teemo': teemo,
    'thresh': thresh,
    'tristana': tristana,
    'trundle': trundle,
    'tryndamere': tryndamere,
    'twistedfate': twistedFate,
    'twitch': twitch,
    'udyr': udyr,
    'urgot': urgot,
    'varus': varus,
    'vayne': vayne,
    'veigar': veigar,
    'velkoz': velkoz,
    'vi': vi,
    'viktor': viktor,
    'vladimir': vladimir,
    'volibear': volibear,
    'warwick': warwick,
    'xayah': xayah,
    'xerath': xerath,
    'xinzhao': xinZhao,
    'yasuo': yasuo,
    'yorick': yorick,
    'yuumi': yuumi,
    'zac': zac,
    'zed': zed,
    'ziggs': ziggs,
    'zilean': zilean,
    'zoe': zoe,
    'zyra': zyra
}