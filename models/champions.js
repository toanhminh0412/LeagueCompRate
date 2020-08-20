import { Champion } from './obj';
const aatrox = new Champion('Aatrox', {
    'Damage': ['Both', 'S'],
    'Toughness': ['Sustain', 'A'],
    'CC': ['Both', 'B'],
    'Mobility': ['Both', 'B'],
    'Utility': ['Off', 'C'],
    'Range': ['Abilities', 'B']
}, {
    'Teamfight': 30,
    'Pick': 20,
    'Hyper': 5,
    'Poke': 10,
    'Split': 35
}, ['jug', 'ski'], 'Aatrox_0.jpg', 'top');

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
}, ['bur', 'ass'], 'Ahri_0.jpg', 'mid');

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
}, ['ass', 'div'], 'Akali_0.jpg', 'mid');

const alistar = new Champion('Alistar', {
    'Damage': ['Burst', 'C'],
    'Toughness': ['Both', 'S'],
    'CC': ['Hard', 'S'],
    'Mobility': ['Engage', 'C'],
    'Utility': ['Both', 'B'],
    'Range': ['Abilities', 'C']
}, {
    'Teamfight': 25,
    'Pick': 15,
    'Hyper': 30,
    'Poke': 15,
    'Split': 15
}, ['van', 'war'], 'Alistar_0.jpg', 'sup');

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
    'Hyper': 14,
    'Poke': 14,
    'Split': 17
}, ['van', 'div'], 'Amumu_0.jpg', 'jg');

const anivia = new Champion('Anivia', {
    'Damage': ['Both', 'S'],
    'Toughness': ['Sustain', 'C'],
    'CC': ['Both', 'B'],
    'Mobility': ['Repos', 'D'],
    'Utility': ['Both', 'C'],
    'Range': ['Both', 'A']
}, {
    'Teamfight': 30,
    'Pick': 10,
    'Hyper': 30,
    'Poke': 25,
    'Split': 15
}, ['bat', 'art'], 'Anivia_0.jpg', 'mid');

const annie = new Champion('Annie', {
    'Damage': ['Burst', 'S'],
    'Toughness': ['Mitigate', 'C'],
    'CC': ['Hard', 'A'],
    'Mobility': ['Repos', 'D'],
    'Utility': ['Both', 'C'],
    'Range': ['Both', 'B']
}, {
    'Teamfight': 30,
    'Pick': 20,
    'Hyper': 15,
    'Poke': 15,
    'Split': 20
}, ['bur', 'ass'], 'Annie_0.jpg', 'mid');

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
    'Poke': 15,
    'Split': 10
}, ['mar', 'bur'], 'Aphelios_0.jpg', 'adc');

const ashe = new Champion('Ashe', {
    'Damage': ['DPS', 'S'],
    'Toughness': ['Sustain', 'D'],
    'CC': ['Both', 'A'],
    'Mobility': ['Repos', 'D'],
    'Utility': ['Both', 'A'],
    'Range': ['Both', 'S']
}, {
    'Teamfight': 25,
    'Pick': 20,
    'Hyper': 30,
    'Poke': 15,
    'Split': 10
}, ['mar', 'cat'], 'Ashe_0.jpg', 'adc');

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
}, ['bat', 'cat'], 'AurelionSol_0.jpg', 'mid');

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
    'Hyper': 30,
    'Poke': 20,
    'Split': 10
}, ['spec', ''], 'Azir_0.jpg', 'mid');

const bard = new Champion('Bard', {
    'Damage': ['Burst', 'B'],
    'Toughness': ['Sustain', 'D'],
    'CC': ['Both', 'S'],
    'Mobility': ['Both', 'S'],
    'Utility': ['Both', 'S'],
    'Range': ['Both', 'B']
}, {
    'Teamfight': 10,
    'Pick': 35,
    'Hyper': 25,
    'Poke': 15,
    'Split': 15
}, ['cat', 'war'], 'Bard_0.jpg', 'sup');

const blitzcrank = new Champion('Blitzcrank', {
    'Damage': ['Burst', 'C'],
    'Toughness': ['Mitigate', 'A'],
    'CC': ['Both', 'S'],
    'Mobility': ['Engage', 'C'],
    'Utility': ['Both', 'C'],
    'Range': ['Abilities', 'C']
}, {
    'Teamfight': 15,
    'Pick': 30,
    'Hyper': 20,
    'Poke': 15,
    'Split': 10
}, ['cat', 'war'], 'Blitzcrank_0.jpg', 'sup');

const brand = new Champion('Brand', {
    'Damage': ['Burst', 'S'],
    'Toughness': ['Mitigate', 'D'],
    'CC': ['Both', 'S'],
    'Mobility': ['Repos', 'D'],
    'Utility': ['Def', 'C'],
    'Range': ['Both', 'A']
}, {
    'Teamfight': 35,
    'Pick': 10,
    'Hyper': 22,
    'Poke': 23,
    'Split': 10
}, ['bur', 'art'], 'Brand_0.jpg', 'sup');

const braum = new Champion('Braum', {
    'Damage': ['Burst', 'D'],
    'Toughness': ['Mitigate', 'S'],
    'CC': ['Both', 'A'],
    'Mobility': ['Both', 'C'],
    'Utility': ['Both', 'S'],
    'Range': ['Abilities', 'C']
}, {
    'Teamfight': 16,
    'Pick': 16,
    'Hyper': 36,
    'Poke': 16,
    'Split': 16
}, ['war', 'van'], 'Braum_0.jpg', 'sup');

const caitlyn = new Champion('Caitlyn', {
    'Damage': ['Both', 'S'],
    'Toughness': ['Sustain', 'D'],
    'CC': ['Both', 'B'],
    'Mobility': ['Repos', 'B'],
    'Utility': ['Both', 'C'],
    'Range': ['Both', 'S']
}, {
    'Teamfight': 23,
    'Pick': 15,
    'Hyper': 23,
    'Poke': 24,
    'Split': 15
}, ['cat', 'war'], 'Caitlyn_0.jpg', 'adc');

const camille = new Champion('Camille', {
    'Damage': ['Burst', 'S'],
    'Toughness': ['Mitigate', 'B'],
    'CC': ['Both', 'A'],
    'Mobility': ['Both', 'S'],
    'Utility': ['Off', 'B'],
    'Range': ['Abilities', 'B']
}, {
    'Teamfight': 15,
    'Pick': 30,
    'Hyper': 10,
    'Poke': 10,
    'Split': 35
}, ['div', 'cat'], 'Camille_0.jpg', 'top');

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
}, ['bat', 'art'], 'Cassiopeia_0.jpg', 'mid');

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
    'Hyper': 20,
    'Poke': 15,
    'Split': 30
}, ['spec', ''], 'Chogath_0.jpg', 'top');

const corki = new Champion('Corki', {
    'Damage': ['DPS', 'S'],
    'Toughness': ['Sustain', 'D'],
    'CC': ['Soft', 'C'],
    'Mobility': ['Both', 'A'],
    'Utility': ['Def', 'D'],
    'Range': ['Both', 'S']
}, {
    'Teamfight': 25,
    'Pick': 15,
    'Hyper': 25,
    'Poke': 25,
    'Split': 10
}, ['mar', 'bat'], 'Corki_0.jpg', 'mid');

const darius = new Champion('Darius', {
    'Damage': ['DPS', 'A'],
    'Toughness': ['Both', 'A'],
    'CC': ['Both', 'B'],
    'Mobility': ['Engage', 'C'],
    'Utility': ['Off', 'C'],
    'Range': ['Abilities', 'C']
}, {
    'Teamfight': 20,
    'Pick': 10,
    'Hyper': 15,
    'Poke': 10,
    'Split': 40
}, ['jug', 'ski'], 'Darius_0.jpg', 'top');

const diana = new Champion('Diana', {
    'Damage': ['Burst', 'S'],
    'Toughness': ['Mitigate', 'C'],
    'CC': ['Hard', 'C'],
    'Mobility': ['Engage', 'B'],
    'Utility': ['Off', 'C'],
    'Range': ['Abilities', 'B']
}, {
    'Teamfight': 30,
    'Pick': 20,
    'Hyper': 10,
    'Poke': 10,
    'Split': 30
}, ['ass', 'div'], 'Diana_0.jpg', 'mid');

const draven = new Champion('Draven', {
    'Damage': ['DPS', 'S'],
    'Toughness': ['Sustain', 'D'],
    'CC': ['Both', 'C'],
    'Mobility': ['Both', 'B'],
    'Utility': ['Both', 'C'],
    'Range': ['Both', 'A']
}, {
    'Teamfight': 28,
    'Pick': 15,
    'Hyper': 30,
    'Poke': 12,
    'Split': 15
}, ['mar', 'ski'], 'Draven_0.jpg', 'adc');

const drMundo = new Champion('Dr Mundo', {
    'Damage': ['DPS', 'B'],
    'Toughness': ['Both', 'S'],
    'CC': ['Soft', 'C'],
    'Mobility': ['Both', 'C'],
    'Utility': ['Both', 'C'],
    'Range': ['Abilities', 'C']
}, {
    'Teamfight': 15,
    'Pick': 15,
    'Hyper': 15,
    'Poke': 20,
    'Split': 35
}, ['jug', 'van'], 'DrMundo_0.jpg', 'top');

const ekko = new Champion('Ekko', {
    'Damage': ['Burst', 'S'],
    'Toughness': ['Both', 'C'],
    'CC': ['Both', 'C'],
    'Mobility': ['Both', 'S'],
    'Utility': ['Off', 'C'],
    'Range': ['Abilities', 'C']
}, {
    'Teamfight': 22,
    'Pick': 28,
    'Hyper': 20,
    'Poke': 10,
    'Split': 20
}, ['ass', 'div'], 'Ekko_0.jpg', 'mid');

const elise = new Champion('Elise', {
    'Damage': ['Burst', 'S'],
    'Toughness': ['Mitigate', 'D'],
    'CC': ['Hard', 'B'],
    'Mobility': ['Both', 'A'],
    'Utility': ['Both', 'C'],
    'Range': ['Both', 'B']
}, {
    'Teamfight': 10,
    'Pick': 30,
    'Hyper': 15,
    'Poke': 20,
    'Split': 15
}, ['ski', 'bur'], 'Elise_0.jpg', 'jg');

const evelynn = new Champion('Evelynn', {
    'Damage': ['Burst', 'S'],
    'Toughness': ['Sustain', 'D'],
    'CC': ['Hard', 'C'],
    'Mobility': ['Both', 'A'],
    'Utility': ['Off', 'C'],
    'Range': ['Abilities', 'C']
}, {
    'Teamfight': 15,
    'Pick': 40,
    'Hyper': 15,
    'Poke': 15,
    'Split': 15
}, ['ass', 'bur'], 'Evelynn_0.jpg', 'jg');

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
    'Hyper': 30,
    'Poke': 30,
    'Split': 5
}, ['mar', 'art'], 'Ezreal_0.jpg', 'adc');

const fiddlesticks = new Champion('Fiddlesticks', {
    'Damage': ['Burst', 'S'],
    'Toughness': ['Sustain', 'B'],
    'CC': ['Both', 'A'],
    'Mobility': ['Engage', 'B'],
    'Utility': ['Both', 'C'],
    'Range': ['Both', 'B']
}, {
    'Teamfight': 35,
    'Pick': 25,
    'Hyper': 10,
    'Poke': 15,
    'Split': 15
}, ['spec', ''], 'FiddleSticks_0.jpg', 'jg');

const fiora = new Champion('Fiora', {
    'Damage': ['Both', 'S'],
    'Toughness': ['Both', 'B'],
    'CC': ['Both', 'C'],
    'Mobility': ['Both', 'S'],
    'Utility': ['Both', 'C'],
    'Range': ['Abilities', 'D']
}, {
    'Teamfight': 15,
    'Pick': 25,
    'Hyper': 20,
    'Poke': 5,
    'Split': 35
}, ['ski', 'jug'], 'Fiora_0.jpg', 'top');

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
}, ['ass', 'bur'], 'Fizz_0.jpg', 'mid');

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
}, ['war', 'van'], 'Galio_0.jpg', 'mid');

const gangplank = new Champion('Gangplank', {
    'Damage': ['Burst', 'S'],
    'Toughness': ['Sustain', 'C'],
    'CC': ['Soft', 'C'],
    'Mobility': ['Both', 'C'],
    'Utility': ['Both', 'B'],
    'Range': ['Abilities', 'A']
}, {
    'Teamfight': 30,
    'Pick': 10,
    'Hyper': 20,
    'Poke': 25,
    'Split': 15
}, ['spec', ''], 'Gangplank_0.jpg', 'top');

const garen = new Champion('Garen', {
    'Damage': ['Both', 'B'],
    'Toughness': ['Both', 'S'],
    'CC': ['Soft', 'C'],
    'Mobility': ['Both', 'C'],
    'Utility': ['Off', 'C'],
    'Range': ['Abilities', 'D']
}, {
    'Teamfight': 20,
    'Pick': 20,
    'Hyper': 20,
    'Poke': 5,
    'Split': 35
}, ['jug', 'van'], 'Garen_0.jpg', 'top');

const gnar = new Champion('Gnar', {
    'Damage': ['Both', 'A'],
    'Toughness': ['Mitigate', 'B'],
    'CC': ['Both', 'S'],
    'Mobility': ['Both', 'A'],
    'Utility': ['Both', 'B'],
    'Range': ['Both', 'B']
}, {
    'Teamfight': 30,
    'Pick': 20,
    'Hyper': 10,
    'Poke': 20,
    'Split': 20
}, ['war', 'van'], 'Gnar_0.jpg', 'top');

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
}, ['van', 'bur'], 'Gragas_0.jpg', 'jg');

const graves = new Champion('Graves', {
    'Damage': ['Both', 'A'],
    'Toughness': ['Mitigate', 'B'],
    'CC': ['Soft', 'C'],
    'Mobility': ['Both', 'A'],
    'Utility': ['Both', 'C'],
    'Range': ['Abilities', 'B']
}, {
    'Teamfight': 20,
    'Pick': 30,
    'Hyper': 15,
    'Poke': 15,
    'Split': 20
}, ['spec', ''], 'Graves_0.jpg', 'jg');

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
}, ['div', 'van'], 'Hecarim_0.jpg', 'jg');

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
    'Split': 30
}, ['wpec', ''], 'Heimerdinger_0.jpg', 'mid');

const illaoi = new Champion('Illaoi', {
    'Damage': ['Burst', 'S'],
    'Toughness': ['Sustain', 'A'],
    'CC': ['Soft', 'C'],
    'Mobility': ['Engage', 'C'],
    'Utility': ['Off', 'D'],
    'Range': ['Abilities', 'C']
}, {
    'Teamfight': 20,
    'Pick': 10,
    'Hyper': 10,
    'Poke': 20,
    'Split': 40
}, ['jug', 'ski'], 'Illaoi_0.jpg', 'top');

const irelia = new Champion('Irelia', {
    'Damage': ['Both', 'S'],
    'Toughness': ['Both', 'A'],
    'CC': ['Both', 'B'],
    'Mobility': ['Engage', 'A'],
    'Utility': ['Both', 'B'],
    'Range': ['Abilities', 'C']
}, {
    'Teamfight': 25,
    'Pick': 20,
    'Hyper': 20,
    'Poke': 5,
    'Split': 30
}, ['div', 'jug'], 'Irelia_0.jpg', 'top');

const ivern = new Champion('Ivern', {
    'Damage': ['Burst', 'D'],
    'Toughness': ['Mitigate', 'C'],
    'CC': ['Both', 'B'],
    'Mobility': ['Engage', 'C'],
    'Utility': ['Both', 'A'],
    'Range': ['Both', 'B']
}, {
    'Teamfight': 15,
    'Pick': 15,
    'Hyper': 40,
    'Poke': 20,
    'Split': 10
}, ['cat', 'enc'], 'Ivern_0.jpg', 'jg');

const janna = new Champion('Janna', {
    'Damage': ['Burst', 'B'],
    'Toughness': ['Mitigate', 'C'],
    'CC': ['Both', 'B'],
    'Mobility': ['Engage', 'B'],
    'Utility': ['Both', 'S'],
    'Range': ['Both', 'A']
}, {
    'Teamfight': 10,
    'Pick': 7,
    'Hyper': 40,
    'Poke': 27,
    'Split': 16
}, ['enc', 'art'], 'Janna_0.jpg', 'sup');

const jarvan = new Champion('Jarvan IV', {
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
    'Poke': 15,
    'Split': 15
}, ['div', 'van'], 'JarvanIV_0.jpg', 'jg');

const jax = new Champion('Jax', {
    'Damage': ['Both', 'A'],
    'Toughness': ['Mitigate', 'A'],
    'CC': ['Hard', 'B'],
    'Mobility': ['Both', 'B'],
    'Utility': ['Both', 'C'],
    'Range': ['Abilties', 'D']
}, {
    'Teamfight': 10,
    'Pick': 20,
    'Hyper': 30,
    'Poke': 5,
    'Split': 35
}, ['ski', 'jug'], 'Jax_0.jpg', 'top');

const jayce = new Champion('Jayce', {
    'Damage': ['Burst', 'S'],
    'Toughness': ['Mitigate', 'C'],
    'CC': ['Both', 'C'],
    'Mobility': ['Both', 'B'],
    'Utility': ['Both', 'C'],
    'Range': ['Both', 'S']
}, {
    'Teamfight': 20,
    'Pick': 20,
    'Hyper': 5,
    'Poke': 35,
    'Split': 20
}, ['art', 'bur'], 'Jayce_0.jpg', 'top');

const jhin = new Champion('Jhin', {
    'Damage': ['Both', 'S'],
    'Toughness': ['Mitigate', 'D'],
    'CC': ['Both', 'B'],
    'Mobility': ['Both', 'C'],
    'Utility': ['Both', 'B'],
    'Range': ['Both', 'S']
}, {
    'Teamfight': 35,
    'Pick': 25,
    'Hyper': 20,
    'Poke': 20,
    'Split': 10
}, ['mar', 'cat'], 'Jhin_0.jpg', 'adc');

const jinx = new Champion('Jinx', {
    'Damage': ['DPS', 'S'],
    'Toughness': ['Sustain', 'D'],
    'CC': ['Both', 'B'],
    'Mobility': ['Both', 'C'],
    'Utility': ['Both', 'C'],
    'Range': ['Both', 'S']
}, {
    'Teamfight': 33,
    'Pick': 10,
    'Hyper': 35,
    'Poke': 12,
    'Split': 10
}, ['mar', ''], 'Jinx_0.jpg', 'adc');

const kaisa = new Champion('Kaisa', {
    'Damage': ['Both', 'S'],
    'Toughness': ['Sustain', 'D'],
    'CC': ['None', 'D'],
    'Mobility': ['Both', 'S'],
    'Utility': ['Both', 'C'],
    'Range': ['Both', 'A']
}, {
    'Teamfight': 30,
    'Pick': 10,
    'Hyper': 35,
    'Poke': 20,
    'Split': 5
}, ['mar', 'div'], 'Kaisa_0.jpg', 'adc');

const kalista = new Champion('Kalista', {
    'Damage': ['DPS', 'S'],
    'Toughness': ['Sustain', 'D'],
    'CC': ['Both', 'B'],
    'Mobility': ['Both', 'S'],
    'Utility': ['Both', 'B'],
    'Range': ['Both', 'A']
}, {
    'Teamfight': 35,
    'Pick': 20,
    'Hyper': 30,
    'Poke': 10,
    'Split': 5
}, ['mar', 'ski'], 'Kalista_0.jpg', 'adc');

const karma = new Champion('Karma', {
    'Damage': ['Burst', 'B'],
    'Toughness': ['Both', 'B'],
    'CC': ['Both', 'B'],
    'Mobility': ['Both', 'C'],
    'Utility': ['Both', 'B'],
    'Range': ['Both', 'A']
}, {
    'Teamfight': 20,
    'Pick': 15,
    'Hyper': 30,
    'Poke': 25,
    'Split': 10
}, ['enc', 'bur'], 'Karma_0.jpg', 'sup');

const karthus = new Champion('Karthus', {
    'Damage': ['DPS', 'S'],
    'Toughness': ['Sustain', 'D'],
    'CC': ['Soft', 'C'],
    'Mobility': ['Repos', 'D'],
    'Utility': ['Both', 'C'],
    'Range': ['Both', 'A']
}, {
    'Teamfight': 30,
    'Pick': 10,
    'Hyper': 30,
    'Poke': 20,
    'Split': 10
}, ['bat', 'cat'], 'Karthus_0.jpg', 'jg');

const kassadin = new Champion('Kassadin', {
    'Damage': ['Burst', 'S'],
    'Toughness': ['Mitigate', 'C'],
    'CC': ['Soft', 'C'],
    'Mobility': ['Both', 'S'],
    'Utility': ['Off', 'C'],
    'Range': ['Abilities', 'C']
}, {
    'Teamfight': 20,
    'Pick': 30,
    'Hyper': 25,
    'Poke': 5,
    'Split': 20
}, ['ass', 'bur'], 'Kassadin_0.jpg', 'mid');

const katarina = new Champion('Katarina', {
    'Damage': ['Burst', 'S'],
    'Toughness': ['Sustain', 'D'],
    'CC': ['None', 'D'],
    'Mobility': ['Both', 'S'],
    'Utility': ['Off', 'D'],
    'Range': ['Abilities', 'C']
}, {
    'Teamfight': 30,
    'Pick': 30,
    'Hyper': 25,
    'Poke': 5,
    'Split': 10
}, ['ass', 'div'], 'Katarina_0.jpg', 'mid');

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
    'Poke': 12,
    'Split': 18
}, ['spec', ''], 'Kayle_0.jpg', 'top');

const kayn = new Champion('Kayn', {
    'Damage': ['Burst', 'A'],
    'Toughness': ['Sustain', 'B'],
    'CC': ['Both', 'C'],
    'Mobility': ['Both', 'S'],
    'Utility': ['Both', 'C'],
    'Range': ['Both', 'C']
}, {
    'Teamfight': 25,
    'Pick': 35,
    'Hyper': 12,
    'Poke': 15,
    'Split': 13
}, ['ski', 'ass'], 'Kayn_0.jpg', 'jg');

const kennen = new Champion('Kennen', {
    'Damage': ['Burst', 'S'],
    'Toughness': ['Sustain', 'D'],
    'CC': ['Hard', 'A'],
    'Mobility': ['Both', 'B'],
    'Utility': ['Off', 'C'],
    'Range': ['Both', 'B']
}, {
    'Teamfight': 35,
    'Pick': 20,
    'Hyper': 10,
    'Poke': 15,
    'Split': 20
}, ['spec', ''], 'Kennen_0.jpg', 'top');

const khazix = new Champion("Kha'zix", {
    'Damage': ['Burst', 'S'],
    'Toughness': ['Sustain', 'D'],
    'CC': ['Soft', 'C'],
    'Mobility': ['Both', 'A'],
    'Utility': ['Both', 'C'],
    'Range': ['Abilities', 'D']
}, {
    'Teamfight': 16,
    'Pick': 40,
    'Hyper': 11,
    'Poke': 17,
    'Split': 16
}, ['ass', 'bur'], 'Khazix_0.jpg', 'jg');

const kindred = new Champion('Kindred', {
    'Damage': ['DPS', 'S'],
    'Toughness': ['Both', 'C'],
    'CC': ['Soft', 'C'],
    'Mobility': ['Both', 'B'],
    'Utility': ['Def', 'A'],
    'Range': ['Both', 'A']
}, {
    'Teamfight': 30,
    'Pick': 15,
    'Hyper': 30,
    'Poke': 15,
    'Split': 10
}, ['mar', ''], 'Kindred_0.jpg', 'jg');

const kled = new Champion('Kled', {
    'Damage': ['Both', 'A'],
    'Toughness': ['Sustain', 'A'],
    'CC': ['Both', 'B'],
    'Mobility': ['Engage', 'S'],
    'Utility': ['Off', 'B'],
    'Range': ['Abilities', 'C']
}, {
    'Teamfight': 20,
    'Pick': 30,
    'Hyper': 10,
    'Poke': 5,
    'Split': 35
}, ['div', 'jug'], 'Kled_0.jpg', 'top');

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
}, ['mar', 'art'], 'KogMaw_0.jpg', 'adc');


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
}, ['bur', 'ass'], 'Leblanc_0.jpg', 'mid');

const leesin = new Champion('Leesin', {
    'Damage': ['Both', 'A'],
    'Toughness': ['Both', 'B'],
    'CC': ['Both', 'A'],
    'Mobility': ['Both', 'S'],
    'Utility': ['Both', 'B'],
    'Range': ['Abilities', 'C']
}, {
    'Teamfight': 22,
    'Pick': 32,
    'Hyper': 17,
    'Poke': 12,
    'Split': 17
}, ['div', 'bur'], 'LeeSin_0.jpg', 'jg');

const leona = new Champion('Leona', {
    'Damage': ['Burst', 'C'],
    'Toughness': ['Mitigate', 'S'],
    'CC': ['Both', 'S'],
    'Mobility': ['Engage', 'C'],
    'Utility': ['Both', 'B'],
    'Range': ['Abilities', 'C']
}, {
    'Teamfight': 30,
    'Pick': 20,
    'Hyper': 30,
    'Poke': 10,
    'Split': 10
}, ['van', 'war'], 'Leona_0.jpg', 'sup');

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
}, ['bur', 'div'], 'Lissandra_0.jpg', 'mid');

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
}, ['mar', 'bur'], 'Lucian_0.jpg', 'adc');

const lulu = new Champion('Lulu', {
    'Damage': ['Burst', 'B'],
    'Toughness': ['Mitigate', 'C'],
    'CC': ['Both', 'A'],
    'Mobility': ['Both', 'C'],
    'Utility': ['Both', 'S'],
    'Range': ['Both', 'B']
}, {
    'Teamfight': 15,
    'Pick': 15,
    'Hyper': 40,
    'Poke': 20,
    'Split': 10
}, ['enc', ''], 'Lulu_0.jpg', 'sup');

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
}, ['art', 'bur'], 'Lux_0.jpg', 'sup');

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
}, ['van', 'div'], 'Malphite_0.jpg', 'top');

const malzahar = new Champion('Malzahar', {
    'Damage': ['Both', 'S'],
    'Toughness': ['Mitigate', 'D'],
    'CC': ['Both', 'A'],
    'Mobility': ['Repos', 'D'],
    'Utility': ['Off', 'C'],
    'Range': ['Both', 'A']
}, {
    'Teamfight': 25,
    'Pick': 30,
    'Hyper': 15,
    'Poke': 25,
    'Split': 5
}, ['bat', 'ski'], 'Malzahar_0.jpg', 'mid');

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
}, ['van', 'div'], 'Maokai_0.jpg', 'top');

const masterYi = new Champion('Master Yi', {
    'Damage': ['DPS', 'S'],
    'Toughness': ['Both', 'B'],
    'CC': ['None', 'D'],
    'Mobility': ['Both', 'A'],
    'Utility': ['None', 'D'],
    'Range': ['Abilities', 'D']
}, {
    'Teamfight': 15,
    'Pick': 25,
    'Hyper': 35,
    'Poke': 5,
    'Split': 20
}, ['ski', 'jug'], 'MasterYi_0.jpg', 'jg');

const missFortune = new Champion('Miss Fortune', {
    'Damage': ['Both', 'S'],
    'Toughness': ['Sustain', 'D'],
    'CC': ['Soft', 'C'],
    'Mobility': ['Engage', 'C'],
    'Utility': ['Both', 'C'],
    'Range': ['Both', 'S']
}, {
    'Teamfight': 36,
    'Pick': 15,
    'Hyper': 22,
    'Poke': 15,
    'Split': 11
}, ['mar', ''], 'MissFortune_0.jpg', 'adc');

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
}, ['div', 'van'], 'MonkeyKing_0.jpg', 'top');

const mordekaiser = new Champion('Mordekaiser', {
    'Damage': ['Both', 'A'],
    'Toughness': ['Mitigate', 'A'],
    'CC': ['Both', 'B'],
    'Mobility': ['Engage', 'D'],
    'Utility': ['Off', 'C'],
    'Range': ['Abilities', 'C']
}, {
    'Teamfight': 20,
    'Pick': 25,
    'Hyper': 10,
    'Poke': 10,
    'Split': 35
}, ['jug', 'ski'], 'Mordekaiser_0.jpg', 'top');

const morgana = new Champion('Morgana', {
    'Damage': ['Burst', 'B'],
    'Toughness': ['Mitigate', 'D'],
    'CC': ['Both', 'A'],
    'Mobility': ['Engage', 'D'],
    'Utility': ['Both', 'A'],
    'Range': ['Both', 'A']
}, {
    'Teamfight': 20,
    'Pick': 25,
    'Hyper': 25,
    'Poke': 20,
    'Split': 10
}, ['cat', 'enc'], 'Morgana_0.jpg', 'sup');

const nami = new Champion('Nami', {
    'Damage': ['Burst', 'B'],
    'Toughness': ['Sustain', 'D'],
    'CC': ['Both', 'A'],
    'Mobility': ['Engage', 'D'],
    'Utility': ['Both', 'S'],
    'Range': ['Both', 'A']
}, {
    'Teamfight': 20,
    'Pick': 15,
    'Hyper': 35,
    'Poke': 18,
    'Split': 12
}, ['enc', 'cat'], 'Nami_0.jpg', 'sup');

const nasus = new Champion('Nasus', {
    'Damage': ['DPS', 'A'],
    'Toughness': ['Both', 'A'],
    'CC': ['Soft', 'B'],
    'Mobility': ['Engage', 'D'],
    'Utility': ['Off', 'C'],
    'Range': ['Abilities', 'D']
}, {
    'Teamfight': 10,
    'Pick': 15,
    'Hyper': 30,
    'Poke': 5,
    'Split': 40
}, ['jug', 'ski'], 'Nasus_0.jpg', 'top');

const nautilus = new Champion('Nautilus', {
    'Damage': ['Burst', 'B'],
    'Toughness': ['Mitigate', 'S'],
    'CC': ['Both', 'S'],
    'Mobility': ['Both', 'B'],
    'Utility': ['Off', 'A'],
    'Range': ['Abilities', 'B']
}, {
    'Teamfight': 30,
    'Pick': 30,
    'Hyper': 25,
    'Poke': 5,
    'Split': 10
}, ['van', ''], 'Nautilus_0.jpg', 'sup');

const neeko = new Champion('Neeko', {
    'Damage': ['Burst', 'S'],
    'Toughness': ['Mitigate', 'C'],
    'CC': ['Hard', 'A'],
    'Mobility': ['Both', 'B'],
    'Utility': ['Both', 'B'],
    'Range': ['Both', 'A']
}, {
    'Teamfight': 30,
    'Pick': 20,
    'Hyper': 10,
    'Poke': 25,
    'Split': 15
}, ['bur', 'cat'], 'Neeko_0.jpg', 'mid');

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
}, ['spec', ''], 'Nidalee_0.jpg', 'jg');

const nocturne = new Champion('Nocturne', {
    'Damage': ['DPS', 'A'],
    'Toughness': ['Both', 'D=C'],
    'CC': ['Both', 'B'],
    'Mobility': ['Both', 'A'],
    'Utility': ['Off', 'B'],
    'Range': ['Abilities', 'B']
}, {
    'Teamfight': 15,
    'Pick': 40,
    'Hyper': 10,
    'Poke': 10,
    'Split': 25
}, ['ass', 'ski'], 'Nocturne_0.jpg', 'jg');

const nunu = new Champion('Nunu', {
    'Damage': ['Burst', 'C'],
    'Toughness': ['Both', 'A'],
    'CC': ['Both', 'S'],
    'Mobility': ['Engage', 'B'],
    'Utility': ['Off', 'A'],
    'Range': ['Abilities', 'C']
}, {
    'Teamfight': 30,
    'Pick': 30,
    'Hyper': 15,
    'Poke': 10,
    'Split': 15
}, ['van', 'cat'], 'Nunu_0.jpg', 'jg');

const olaf = new Champion('Olaf', {
    'Damage': ['DPS', 'A'],
    'Toughness': ['Sustain', 'A'],
    'CC': ['Soft', 'B'],
    'Mobility': ['Both', 'C'],
    'Utility': ['Both', 'C'],
    'Range': ['Abilities', 'D']
}, {
    'Teamfight': 15,
    'Pick': 25,
    'Hyper': 10,
    'Poke': 15,
    'Split': 35
}, ['div', 'jug'], 'Olaf_0.jpg', 'jg');

const orianna = new Champion('Orianna', {
    'Damage': ['Burst', 'S'],
    'Toughness': ['Mitigate', 'C'],
    'CC': ['Both', 'A'],
    'Mobility': ['Both', 'C'],
    'Utility': ['Both', 'A'],
    'Range': ['Both', 'A']
}, {
    'Teamfight': 30,
    'Pick': 15,
    'Hyper': 20,
    'Poke': 25,
    'Split': 10
}, ['bur', 'art'], 'Orianna_0.jpg', 'mid');

const ornn = new Champion('Ornn', {
    'Damage': ['Burst', 'C'],
    'Toughness': ['Mitigate', 'S'],
    'CC': ['Both', 'S'],
    'Mobility': ['Engage', 'C'],
    'Utility': ['Both', 'A'],
    'Range': ['Abilities', 'C']
}, {
    'Teamfight': 30,
    'Pick': 20,
    'Hyper': 15,
    'Poke': 10,
    'Split': 25
}, ['van', 'cat'], 'Ornn_0.jpg', 'top');

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
}, ['div', 'jug'], 'Pantheon_0.jpg', 'mid');

const poppy = new Champion('Poppy', {
    'Damage': ['Burst', 'C'],
    'Toughness': ['Mitigate', 'S'],
    'CC': ['Both', 'S'],
    'Mobility': ['Both', 'B'],
    'Utility': ['Both', 'B'],
    'Range': ['Abilities', 'D']
}, {
    'Teamfight': 20,
    'Pick': 20,
    'Hyper': 25,
    'Poke': 10,
    'Split': 25
}, ['war', 'van'], 'Poppy_0.jpg', 'top');

const pyke = new Champion('Pyke', {
    'Damage': ['Burst', 'A'],
    'Toughness': ['Sustain', 'D'],
    'CC': ['Both', 'A'],
    'Mobility': ['Both', 'S'],
    'Utility': ['Off', 'C'],
    'Range': ['Abilities', 'C']
}, {
    'Teamfight': 20,
    'Pick': 40,
    'Hyper': 12,
    'Poke': 12,
    'Split': 16
}, ['ass', 'bur'], 'Pyke_0.jpg', 'sup');

const qiyana = new Champion('Qiyana', {
    'Damage': ['Burst', 'S'],
    'Toughness': ['Mitigate', 'D'],
    'CC': ['Hard', 'B'],
    'Mobility': ['Both', 'B'],
    'Utility': ['Off', 'C'],
    'Range': ['Abilities', 'C']
}, {
    'Teamfight': 25,
    'Pick': 30,
    'Hyper': 10,
    'Poke': 20,
    'Split': 15
}, ['ass', 'bur'], 'Qiyana_0.jpg', 'mid');

const quinn = new Champion('Quinn', {
    'Damage': ['Both', 'S'],
    'Toughness': ['Sustain', 'D'],
    'CC': ['Both', 'B'],
    'Mobility': ['Both', 'S'],
    'Utility': ['Both', 'B'],
    'Range': ['Both', 'A']
}, {
    'Teamfight': 20,
    'Pick': 30,
    'Hyper': 15,
    'Poke': 15,
    'Split': 20
}, ['spec', ''], 'Quinn_0.jpg', 'top');

const rakan = new Champion('Rakan', {
    'Damage': ['Burst', 'C'],
    'Toughness': ['Both', 'A'],
    'CC': ['Hard', 'S'],
    'Mobility': ['Both', 'S'],
    'Utility': ['Both', 'A'],
    'Range': ['Abilities', 'C']
}, {
    'Teamfight': 30,
    'Pick': 20,
    'Hyper': 30,
    'Poke': 10,
    'Split': 10
}, ['cat', 'war'], 'Rakan_0.jpg', 'sup');

const rammus = new Champion('Rammus', {
    'Damage': ['Both', 'C'],
    'Toughness': ['Mitigate', 'S'],
    'CC': ['Both', 'A'],
    'Mobility': ['Both', 'B'],
    'Utility': ['Off', 'C'],
    'Range': ['Abilities', 'D']
}, {
    'Teamfight': 20,
    'Pick': 30,
    'Hyper': 20,
    'Poke': 13,
    'Split': 17
}, ['van', 'div'], 'Rammus_0.jpg', 'jg');

const reksai = new Champion("Rek'Sai", {
    'Damage': ['Burst', 'A'],
    'Toughness': ['Sustain', 'C'],
    'CC': ['Hard', 'C'],
    'Mobility': ['Both', 'A'],
    'Utility': ['Both', 'B'],
    'Range': ['Abilities', 'C']
}, {
    'Teamfight': 20,
    'Pick': 40,
    'Hyper': 10,
    'Poke': 10,
    'Split': 20
}, ['div', 'ski'], 'RekSai_0.jpg', 'jg');

const renekton = new Champion('Renekton', {
    'Damage': ['Both', 'S'],
    'Toughness': ['Both', 'A'],
    'CC': ['Hard', 'B'],
    'Mobility': ['Both', 'A'],
    'Utility': ['Off', 'C'],
    'Range': ['Abilities', 'D']
}, {
    'Teamfight': 25,
    'Pick': 20,
    'Hyper': 15,
    'Poke': 5,
    'Split': 35
}, ['div', 'jug'], 'Renekton_0.jpg', 'top');

const rengar = new Champion('Rengar', {
    'Damage': ['Burst', 'S'],
    'Toughness': ['Sustain', 'B'],
    'CC': ['Both', 'C'],
    'Mobility': ['Engage', 'A'],
    'Utility': ['Off', 'D'],
    'Range': ['Abilities', 'D']
}, {
    'Teamfight': 15,
    'Pick': 35,
    'Hyper': 10,
    'Poke': 10,
    'Split': 30
}, ['ass', 'div'], 'Rengar_0.jpg', 'jg');

const riven = new Champion('Riven', {
    'Damage': ['Both', 'S'],
    'Toughness': ['Mitigate', 'B'],
    'CC': ['Hard', 'B'],
    'Mobility': ['Both', 'S'],
    'Utility': ['Off', 'C'],
    'Range': ['Abilities', 'C']
}, {
    'Teamfight': 20,
    'Pick': 25,
    'Hyper': 20,
    'Poke': 5,
    'Split': 30
}, ['ski', 'div'], 'Riven_0.jpg', 'top');

const rumble = new Champion('Rumble', {
    'Damage': ['Both', 'A'],
    'Toughness': ['Both', 'A'],
    'CC': ['Soft', 'B'],
    'Mobility': ['Both', 'C'],
    'Utility': ['Both', 'C'],
    'Range': ['Abilities', 'B']
}, {
    'Teamfight': 25,
    'Pick': 15,
    'Hyper': 15,
    'Poke': 20,
    'Split': 25
}, ['bat', 'cat'], 'Rumble_0.jpg', 'mid');

const ryze = new Champion('Ryze', {
    'Damage': ['Both', 'S'],
    'Toughness': ['Mitigate', 'D'],
    'CC': ['Both', 'B'],
    'Mobility': ['Both', 'B'],
    'Utility': ['Both', 'A'],
    'Range': ['Both', 'B']
}, {
    'Teamfight': 30,
    'Pick': 20,
    'Hyper': 20,
    'Poke': 15,
    'Split': 25
}, ['bat', ''], 'Ryze_0.jpg', 'mid');

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
}, ['van', ''], 'Sejuani_0.jpg', 'jg');

const senna = new Champion('Senna', {
    'Damage': ['DPS', 'A'],
    'Toughness': ['Both', 'C'],
    'CC': ['Hard', 'C'],
    'Mobility': ['Both', 'C'],
    'Utility': ['Both', 'S'],
    'Range': ['Both', 'S']
}, {
    'Teamfight': 20,
    'Pick': 15,
    'Hyper': 27,
    'Poke': 28,
    'Split': 10
}, ['mar', 'enc'], 'Senna_0.jpg', 'sup');

const sett = new Champion('Sett', {
    'Damage': ['Both', 'A'],
    'Toughness': ['Both', 'A'],
    'CC': ['Both', 'A'],
    'Mobility': ['Engage', 'C'],
    'Utility': ['Off', 'C'],
    'Range': ['Abilities', 'D']
}, {
    'Teamfight': 25,
    'Pick': 15,
    'Hyper': 15,
    'Poke': 10,
    'Split': 35
}, ['jug', 'ski'], 'Sett_0.jpg', 'top');

const shaco = new Champion('Shaco', {
    'Damage': ['Burst', 'S'],
    'Toughness': ['Mitigate', 'D'],
    'CC': ['Both', 'A'],
    'Mobility': ['Both', 'S'],
    'Utility': ['Both', 'C'],
    'Range': ['Abilities', 'C']
}, {
    'Teamfight': 17,
    'Pick': 35,
    'Hyper': 10,
    'Poke': 18,
    'Split': 20
}, ['ass', 'bur'], 'Shaco_0.jpg', 'jg');

const shen = new Champion('Shen', {
    'Damage': ['DPS', 'B'],
    'Toughness': ['Mitigate', 'S'],
    'CC': ['Both', 'B'],
    'Mobility': ['Both', 'A'],
    'Utility': ['Both', 'A'],
    'Range': ['Abilities', 'C']
}, {
    'Teamfight': 20,
    'Pick': 20,
    'Hyper': 30,
    'Poke': 5,
    'Split': 25
}, ['war', 'van'], 'Shen_0.jpg', 'top');

const shyvana = new Champion('Shyvana', {
    'Damage': ['Both', 'A'],
    'Toughness': ['Mitigate', 'A'],
    'CC': ['Hard', 'C'],
    'Mobility': ['Both', 'C'],
    'Utility': ['Off', 'D'],
    'Range': ['Abilities', 'C']
}, {
    'Teamfight': 25,
    'Pick': 15,
    'Hyper': 20,
    'Poke': 25,
    'Split': 15
}, ['jug', 'div'], 'Shyvana_0.jpg', 'jg');

const singed = new Champion('Singed', {
    'Damage': ['DPS', 'B'],
    'Toughness': ['Both', 'S'],
    'CC': ['Both', 'A'],
    'Mobility': ['Both', 'A'],
    'Utility': ['Both', 'C'],
    'Range': ['Abilities', 'C']
}, {
    'Teamfight': 25,
    'Pick': 15,
    'Hyper': 25,
    'Poke': 10,
    'Split': 25
}, ['spec', 'ski'], 'Singed_0.jpg', 'top');

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
}, ['van', 'jug'], 'Sion_0.jpg', 'top');

const sivir = new Champion('Sivir', {
    'Damage': ['DPS', 'S'],
    'Toughness': ['Mitigate', 'D'],
    'CC': ['None', 'D'],
    'Mobility': ['Both', 'C'],
    'Utility': ['Both', 'B'],
    'Range': ['Both', 'A']
}, {
    'Teamfight': 30,
    'Pick': 15,
    'Hyper': 30,
    'Poke': 15,
    'Split': 10
}, ['mar', 'enc'], 'Sivir_0.jpg', 'adc');

const skarner = new Champion('Skaner', {
    'Damage': ['Burst', 'C'],
    'Toughness': ['Mitigate', 'S'],
    'CC': ['Both', 'S'],
    'Mobility': ['Both', 'C'],
    'Utility': ['Off', 'C'],
    'Range': ['Abilities', 'D']
}, {
    'Teamfight': 15,
    'Pick': 35,
    'Hyper': 15,
    'Poke': 5,
    'Split': 25
}, ['div', 'van'], 'Skarner_0.jpg', 'jg');

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
}, ['enc', 'bur'], 'Sona_0.jpg', 'sup');

const soraka = new Champion('Soraka', {
    'Damage': ['Burst', 'C'],
    'Toughness': ['Sustain', 'C'],
    'CC': ['Both', 'B'],
    'Mobility': ['Both', 'C'],
    'Utility': ['Def', 'S'],
    'Range': ['Both', 'A']
}, {
    'Teamfight': 25,
    'Pick': 5,
    'Hyper': 35,
    'Poke': 20,
    'Split': 15
}, ['enc', ''], 'Soraka_0.jpg', 'sup');

const swain = new Champion('Swain', {
    'Damage': ['Both', 'S'],
    'Toughness': ['Sustain', 'B'],
    'CC': ['Both', 'B'],
    'Mobility': ['Engage', 'C'],
    'Utility': ['Both', 'B'],
    'Range': ['Both', 'A']
}, {
    'Teamfight': 30,
    'Pick': 10,
    'Hyper': 15,
    'Poke': 20,
    'Split': 25
}, ['bat', 'div'], 'Swain_0.jpg', 'mid');

const sylas = new Champion('Sylas', {
    'Damage': ['Burst', 'S'],
    'Toughness': ['Sustain', 'C'],
    'CC': ['Both', 'A'],
    'Mobility': ['Both', 'A'],
    'Utility': ['Both', 'B'],
    'Range': ['Abilities', 'C']
}, {
    'Teamfight': 22,
    'Pick': 23,
    'Hyper': 15,
    'Poke': 15,
    'Split': 25
}, ['bur', 'ski'], 'Sylas_0.jpg', 'mid');

const syndra = new Champion('Syndra', {
    'Damage': ['Burst', 'S'],
    'Toughness': ['Sustain', 'D'],
    'CC': ['Both', 'B'],
    'Mobility': ['Repos', 'D'],
    'Utility': ['Both', 'C'],
    'Range': ['Both', 'S']
}, {
    'Teamfight': 25,
    'Pick': 20,
    'Hyper': 15,
    'Poke': 30,
    'Split': 10
}, ['bur', 'art'], 'Syndra_0.jpg', 'mid');

const tahmKench = new Champion('Tahm Kench', {
    'Damage': ['DPS', 'C'],
    'Toughness': ['Mitigate', 'S'],
    'CC': ['Both', 'B'],
    'Mobility': ['Both', 'B'],
    'Utility': ['Both', 'A'],
    'Range': ['Abilities', 'C']
}, {
    'Teamfight': 15,
    'Pick': 20,
    'Hyper': 25,
    'Poke': 15,
    'Split': 25
}, ['war', 'jug'], 'TahmKench_0.jpg', 'sup');

const taliyah = new Champion('Taliyah', {
    'Damage': ['Both', 'S'],
    'Toughness': ['Mitigate', 'D'],
    'CC': ['Both', 'B'],
    'Mobility': ['Engage', 'A'],
    'Utility': ['Off', 'B'],
    'Range': ['Both', 'S']
}, {
    'Teamfight': 25,
    'Pick': 25,
    'Hyper': 20,
    'Poke': 30,
    'Split': 10
}, ['bat', 'cat'], 'Taliyah_0.jpg', 'mid');

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
}, ['ass', 'div'], 'Talon_0.jpg', 'mid');

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
}, ['enc', 'war'], 'Taric_0.jpg', 'sup');

const teemo = new Champion('Teemo', {
    'Damage': ['DPS', 'S'],
    'Toughness': ['Sustain', 'D'],
    'CC': ['Soft', 'B'],
    'Mobility': ['Both', 'B'],
    'Utility': ['Both', 'C'],
    'Range': ['Both', 'B']
}, {
    'Teamfight': 20,
    'Pick': 10,
    'Hyper': 18,
    'Poke': 23,
    'Split': 29
}, ['spec', ''], 'Teemo_0.jpg', 'top');

const thresh = new Champion('Thresh', {
    'Damage': ['Burst', 'C'],
    'Toughness': ['Mitigate', 'B'],
    'CC': ['Both', 'S'],
    'Mobility': ['Engage', 'C'],
    'Utility': ['Both', 'S'],
    'Range': ['Both', 'B']
}, {
    'Teamfight': 20,
    'Pick': 20,
    'Hyper': 30,
    'Poke': 20,
    'Split': 10
}, ['cat', 'war'], 'Thresh_0.jpg', 'sup');

const tristana = new Champion('Tristana', {
    'Damage': ['DPS', 'S'],
    'Toughness': ['Sustain', 'D'],
    'CC': ['Both', 'B'],
    'Mobility': ['Both', 'A'],
    'Utility': ['Def', 'C'],
    'Range': ['Both', 'S']
}, {
    'Teamfight': 25,
    'Pick': 20,
    'Hyper': 25,
    'Poke': 20,
    'Split': 10
}, ['mar', ''], 'Tristana_0.jpg', 'adc');

const trundle = new Champion('Trundle', {
    'Damage': ['DPS', 'C'],
    'Toughness': ['Both', 'S'],
    'CC': ['Both', 'B'],
    'Mobility': ['Both', 'C'],
    'Utility': ['Both', 'B'],
    'Range': ['Abilities', 'D']
}, {
    'Teamfight': 21,
    'Pick': 22,
    'Hyper': 17,
    'Poke': 10,
    'Split': 30
}, ['jug', 'ski'], 'Trundle_0.jpg', 'jg');

const tryndamere = new Champion('Tryndamere', {
    'Damage': ['DPS', 'S'],
    'Toughness': ['Both', 'A'],
    'CC': ['Soft', 'C'],
    'Mobility': ['Both', 'A'],
    'Utility': ['Both', 'C'],
    'Range': ['Abilities', 'D']
}, {
    'Teamfight': 10,
    'Pick': 20,
    'Hyper': 25,
    'Poke': 10,
    'Split': 35
}, ['ski', 'jug'], 'Tryndamere_0.jpg', 'top');

const twistedFate = new Champion('Twisted Fate', {
    'Damage': ['Burst', 'A'],
    'Toughness': ['Sustain', 'D'],
    'CC': ['Both', 'B'],
    'Mobility': ['Both', 'B'],
    'Utility': ['Both', 'B'],
    'Range': ['Both', 'A']
}, {
    'Teamfight': 20,
    'Pick': 30,
    'Hyper': 15,
    'Poke': 25,
    'Split': 10
}, ['bur', 'bat'], 'TwistedFate_0.jpg', 'mid');

const twitch = new Champion('Twitch', {
    'Damage': ['DPS', 'S'],
    'Toughness': ['Sustain', 'D'],
    'CC': ['Soft', 'C'],
    'Mobility': ['Both', 'B'],
    'Utility': ['Both', 'D'],
    'Range': ['Both', 'S']
}, {
    'Teamfight': 35,
    'Pick': 15,
    'Hyper': 35,
    'Poke': 8,
    'Split': 7
}, ['mar', ''], 'Twitch_0.jpg', 'adc');

const udyr = new Champion('Udyr', {
    'Damage': ['DPS', 'A'],
    'Toughness': ['Both', 'A'],
    'CC': ['Hard', 'C'],
    'Mobility': ['Both', 'C'],
    'Utility': ['Off', 'D'],
    'Range': ['Abilities', 'D']
}, {
    'Teamfight': 10,
    'Pick': 25,
    'Hyper': 25,
    'Poke': 5,
    'Split': 35
}, ['jug', 'ski'], 'Udyr_0.jpg', 'jg');

const urgot = new Champion('Urgot', {
    'Damage': ['DPS', 'A'],
    'Toughness': ['Mitigate', 'A'],
    'CC': ['Both', 'A'],
    'Mobility': ['Both', 'C'],
    'Utility': ['Both', 'C'],
    'Range': ['Both', 'B']
}, {
    'Teamfight': 25,
    'Pick': 15,
    'Hyper': 10,
    'Poke': 15,
    'Split': 35
}, ['jug', 'ski'], 'Urgot_0.jpg', 'top');

const varus = new Champion('Varus', {
    'Damage': ['Both', 'S'],
    'Toughness': ['Sustain', 'D'],
    'CC': ['Both', 'A'],
    'Mobility': ['Repos', 'D'],
    'Utility': ['Both', 'C'],
    'Range': ['Both', 'S']
}, {
    'Teamfight': 30,
    'Pick': 10,
    'Hyper': 30,
    'Poke': 25,
    'Split': 5
}, ['mar', 'art'], 'Varus_0.jpg', 'adc');

const vayne = new Champion('Vayne', {
    'Damage': ['DPS', 'S'],
    'Toughness': ['Sustain', 'D'],
    'CC': ['Hard', 'C'],
    'Mobility': ['Both', 'S'],
    'Utility': ['Def', 'D'],
    'Range': ['Both', 'B']
}, {
    'Teamfight': 30,
    'Pick': 10,
    'Hyper': 40,
    'Poke': 5,
    'Split': 15
}, ['mar', ''], 'Vayne_0.jpg', 'adc');

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
    'Hyper': 25,
    'Poke': 20,
    'Split': 5
}, ['bur', 'art'], 'Veigar_0.jpg', 'mid');

const velkoz = new Champion('Velkoz', {
    'Damage': ['Burst', 'S'],
    'Toughness': ['Sustain', 'D'],
    'CC': ['Both', 'B'],
    'Mobility': ['Repos', 'D'],
    'Utility': ['Both', 'C'],
    'Range': ['Both', 'S']
}, {
    'Teamfight': 35,
    'Pick': 5,
    'Hyper': 20,
    'Poke': 35,
    'Split': 5
}, ['art', 'bur'], 'Velkoz_0.jpg', 'mid');

const vi = new Champion('Vi', {
    'Damage': ['Burst', 'A'],
    'Toughness': ['Mitigate', 'B'],
    'CC': ['Hard', 'A'],
    'Mobility': ['Both', 'A'],
    'Utility': ['Off', 'C'],
    'Range': ['Abilities', 'B']
}, {
    'Teamfight': 21,
    'Pick': 36,
    'Hyper': 11,
    'Poke': 6,
    'Split': 26
}, ['div', 'bur'], 'Vi_0.jpg', 'jg');

const viktor = new Champion('Viktor', {
    'Damage': ['Both', 'S'],
    'Toughness': ['mitigate', 'D'],
    'CC': ['Both', 'B'],
    'Mobility': ['Both', 'C'],
    'Utility': ['Both', 'C'],
    'Range': ['Both', 'A']
}, {
    'Teamfight': 30,
    'Pick': 5,
    'Hyper': 30,
    'Poke': 25,
    'Split': 10
}, ['bat', 'bur'], 'Viktor_0.jpg', 'mid');

const vladimir = new Champion('Vladimir', {
    'Damage': ['Burst', 'S'],
    'Toughness': ['Both', 'B'],
    'CC': ['Soft', 'C'],
    'Mobility': ['Engage', 'D'],
    'Utility': ['Off', 'D'],
    'Range': ['Both', 'B']
}, {
    'Teamfight': 35,
    'Pick': 15,
    'Hyper': 20,
    'Poke': 10,
    'Split': 20
}, ['bat', 'bur'], 'Vladimir_0.jpg', 'mid');

const volibear = new Champion('Volibear', {
    'Damage': ['Both', 'A'],
    'Toughness': ['Both', 'A'],
    'CC': ['Both', 'A'],
    'Mobility': ['Both', 'C'],
    'Utility': ['Off', 'B'],
    'Range': ['Abilities', 'C']
}, {
    'Teamfight': 25,
    'Pick': 20,
    'Hyper': 10,
    'Poke': 15,
    'Split': 30
}, ['jug', 'van'], 'Volibear_0.jpg', 'jg');

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
}, ['div', 'jug'], 'Warwick_0.jpg', 'jg');

const xayah = new Champion('Xayah', {
    'Damage': ['DPS', 'S'],
    'Toughness': ['Mitigate', 'D'],
    'CC': ['Hard', 'C'],
    'Mobility': ['Both', 'C'],
    'Utility': ['Both', 'C'],
    'Range': ['Both', 'A']
}, {
    'Teamfight': 30,
    'Pick': 10,
    'Hyper': 25,
    'Poke': 15,
    'Split': 10
}, ['mar', ''], 'Xayah_0.jpg', 'adc');

const xerath = new Champion('Xerath', {
    'Damage': ['Burst', 'S'],
    'Toughness': ['Mitigate', 'D'],
    'CC': ['Both', 'B'],
    'Mobility': ['Repos', 'D'],
    'Utility': ['Both', 'C'],
    'Range': ['Both', 'S']
}, {
    'Teamfight': 30,
    'Pick': 10,
    'Hyper': 15,
    'Poke': 35,
    'Split': 10
}, ['art', 'bur'], 'Xerath_0.jpg', 'mid');

const xinZhao = new Champion('Xin Zhao', {
    'Damage': ['DPS', 'A'],
    'Toughness': ['Both', 'A'],
    'CC': ['Both', 'B'],
    'Mobility': ['Engage', 'C'],
    'Utility': ['Both', 'D'],
    'Range': ['Abilities', 'D']
}, {
    'Teamfight': 10,
    'Pick': 25,
    'Hyper': 20,
    'Poke': 10,
    'Split': 30
}, ['div', 'jug'], 'XinZhao_0.jpg', 'jg');

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
}, ['ski', 'ass'], 'Yasuo_0.jpg', 'mid');

const yorick = new Champion('Yorick', {
    'Damage': ['DPS', 'A'],
    'Toughness': ['Sustain', 'A'],
    'CC': ['Soft', 'C'],
    'Mobility': ['Engage', 'C'],
    'Utility': ['Both', 'C'],
    'Range': ['Abilities', 'C']
}, {
    'Teamfight': 17,
    'Pick': 12,
    'Hyper': 11,
    'Poke': 20,
    'Split': 40
}, ['jug', ''], 'Yorick_0.jpg', 'top');

const yuumi = new Champion('Yuumi', {
    'Damage': ['Burst', 'B'],
    'Toughness': ['Both', 'D'],
    'CC': ['Both', 'A'],
    'Mobility': ['Both', 'C'],
    'Utility': ['Both', 'S'],
    'Range': ['Both', 'A']
}, {
    'Teamfight': 25,
    'Pick': 10,
    'Hyper': 40,
    'Poke': 20,
    'Split': 5
}, ['enc', ''], 'Yuumi_0.jpg', 'sup');

const zac = new Champion('Zac', {
    'Damage': ['Burst', 'C'],
    'Toughness': ['Sustain', 'S'],
    'CC': ['Both', 'S'],
    'Mobility': ['Both', 'A'],
    'Utility': ['Off', 'C'],
    'Range': ['Abilities', 'C']
}, {
    'Teamfight': 30,
    'Pick': 25,
    'Hyper': 18,
    'Poke': 11,
    'Split': 16
}, ['van', 'div'], 'Zac_0.jpg', 'jg');

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
    'Poke': 20,
    'Split': 20
}, ['ass', 'bur'], 'Zed_0.jpg', 'mid');

const ziggs = new Champion('Ziggs', {
    'Damage': ['Burst', 'S'],
    'Toughness': ['Mitigate', 'D'],
    'CC': ['Both', 'B'],
    'Mobility': ['Both', 'C'],
    'Utility': ['Both', 'C'],
    'Range': ['Both', 'S']
}, {
    'Teamfight': 35,
    'Pick': 10,
    'Hyper': 10,
    'Poke': 35,
    'Split': 10
}, ['art', 'cat'], 'Ziggs_0.jpg', 'mid');

const zilean = new Champion('Zilean', {
    'Damage': ['Burst', 'B'],
    'Toughness': ['Sustain', 'D'],
    'CC': ['Both', 'A'],
    'Mobility': ['Both', 'B'],
    'Utility': ['Both', 'S'],
    'Range': ['Both', 'A']
}, {
    'Teamfight': 25,
    'Pick': 10,
    'Hyper': 30,
    'Poke': 25,
    'Split': 10
}, ['spec', ''], 'Zilean_0.jpg', 'sup');

const zoe = new Champion('Zoe', {
    'Damage': ['Burst', 'S'],
    'Toughness': ['Sustain', 'D'],
    'CC': ['Both', 'B'],
    'Mobility': ['Both', 'C'],
    'Utility': ['Both', 'C'],
    'Range': ['Both', 'S']
}, {
    'Teamfight': 20,
    'Pick': 25,
    'Hyper': 10,
    'Poke': 35,
    'Split': 10
}, ['bur', 'art'], 'Zoe_0.jpg', 'mid');

const zyra = new Champion('Zyra', {
    'Damage': ['Both', 'S'],
    'Toughness': ['Sustain', 'D'],
    'CC': ['Hard', 'A'],
    'Mobility': ['Repos', 'D'],
    'Utility': ['Both', 'B'],
    'Range': ['Both', 'A']
}, {
    'Teamfight': 30,
    'Pick': 10,
    'Hyper': 20,
    'Poke': 30,
    'Split': 10
}, ['cat', 'bat'], 'Zyra_0.jpg', 'sup');


export const champions = {
    'aatrox': aatrox,
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
    'blitzcrank': blitzcrank,
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
    'evelynn': evelynn,
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
    'mordekaiser': mordekaiser,
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