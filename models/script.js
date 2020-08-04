// list of all champions
import { champions } from './champions';

// object TeamComp
import { TeamComp } from './obj';

// list of unbanned champions
let championsPickList = champions;

// blue team and red team picks
let blueTeam = new Array();
let redTeam = new Array();

// First 3 bans into the game
const firstBanPhasePro = () => {
    let banCount = 0;

    // ban loops
    while (banCount < 3) {

        // blue team bans
        let blueBan = prompt('Blue ban a champion');
        blueBan = blueBan.replace(/\s/g, '');

        // if fail, redo
        while (!(championsPickList.hasOwnProperty(blueBan.toLowerCase()))) {
            blueBan = prompt('Please select a valid champion. Blue ban champion.');
            blueBan = blueBan.replace(/\s/g, '');
        }

        // remove the banned champion from pick list
        delete championsPickList[blueBan.toLowerCase()];

        // red team bans
        let redBan = prompt('Red ban a champion');
        redBan = redBan.replace(/\s/g, '');

        // if fail, redo
        while (!(championsPickList.hasOwnProperty(redBan.toLowerCase()))) {
            redBan = prompt('Please select a valid champion. Red ban champion.');
            redBan = redBan.replace(/\s/g, '');
        }

        // remove the banned champion from pick list
        delete championsPickList[redBan.toLowerCase()];
        banCount++;
    }
    // console.log(championsPickList);
}

// first 3 picks into the game
const firstPickPhasePro = () => {
    let pickCount = 0;


    // blue team picks
    let bluePick = prompt('Blue pick a champion');
    bluePick = bluePick.replace(/\s/g, '');

    // if fail, redo
    while (!(championsPickList.hasOwnProperty(bluePick.toLowerCase()))) {
        bluePick = prompt('Please select a valid champion. Blue pick a champion.');
        bluePick = bluePick.replace(/\s/g, '');
    }

    // add the picked champion to blue team
    blueTeam.push(championsPickList[bluePick.toLowerCase()]);

    // pick loop
    while (pickCount < 2) {

        // red team picks
        let redPick = prompt('Red pick a champion');
        redPick = redPick.replace(/\s/g, '');

        // if fail, redo
        while (!(championsPickList.hasOwnProperty(redPick.toLowerCase()))) {
            redPick = prompt('Please select a valid champion. Red pick a champion.');
            redPick = redPick.replace(/\s/g, '');
        }

        // add the picked champion to red team
        redTeam.push(championsPickList[redPick.toLowerCase()]);
        pickCount++;

    }

    pickCount = 0;

    while (pickCount < 2) {

        // blue team picks
        let bluePick = prompt('Blue pick a champion');
        bluePick = bluePick.replace(/\s/g, '');

        // if fail, redo
        while (!(championsPickList.hasOwnProperty(bluePick.toLowerCase()))) {
            bluePick = prompt('Please select a valid champion. Blue pick a champion.');
            bluePick = bluePick.replace(/\s/g, '');
        }

        // add the picked champion to blue team
        blueTeam.push(championsPickList[bluePick.toLowerCase()]);
        pickCount++;

    }

    // red team picks
    let redPick = prompt('Red pick a champion');
    redPick = redPick.replace(/\s/g, '');

    // if fail, redo
    while (!(championsPickList.hasOwnProperty(redPick.toLowerCase()))) {
        redPick = prompt('Please select a valid champion. Red pick a champion.');
        redPick = redPick.replace(/\s/g, '');
    }

    // add the picked champion to red team
    redTeam.push(championsPickList[redPick.toLowerCase()]);
    pickCount++;

    console.log(blueTeam);
    console.log(redTeam);
}

// Last 2 bans of the game
const secondBanPhasePro = () => {
    let banCount = 0;

    // ban loop
    while (banCount < 2) {

        // blue team bans
        let blueBan = prompt('Blue ban a champion');
        blueBan = blueBan.replace(/\s/g, '');

        // if fail, redo
        while (!(championsPickList.hasOwnProperty(blueBan.toLowerCase()))) {
            blueBan = prompt('Please select a valid champion. Blue ban champion.');
            blueBan = blueBan.replace(/\s/g, '');
        }

        // remove the banned champion from pick list
        delete championsPickList[blueBan.toLowerCase()];

        // red team bans
        let redBan = prompt('Red ban a champion');
        redBan = redBan.replace(/\s/g, '');

        // if fail, redo
        while (!(championsPickList.hasOwnProperty(redBan.toLowerCase()))) {
            redBan = prompt('Please select a valid champion. Red ban champion.');
            redBan = redBan.replace(/\s/g, '');
        }

        // remove the banned champion from pick list
        delete championsPickList[redBan.toLowerCase()];
        banCount++;
    }
    // console.log(championsPickList);
}

// Last 2 picks of the game
const secondPickPhasePro = () => {
    let pickCount = 0;

    // redteam pick 
    let redPick = prompt('Red pick a champion');
    redPick = redPick.replace(/\s/g, '');

    // if fail, redo
    while (!(championsPickList.hasOwnProperty(redPick.toLowerCase()))) {
        redPick = prompt('Please select a valid champion. Red pick a champion.');
        redPick = redPick.replace(/\s/g, '');
    }

    // add the picked champion into red team
    redTeam.push(championsPickList[redPick.toLowerCase()]);


    // pick loop 
    while (pickCount < 2) {

        // blue team pick
        let bluePick = prompt('Blue pick a champion');
        bluePick = bluePick.replace(/\s/g, '');

        // if fail, redo
        while (!(championsPickList.hasOwnProperty(bluePick.toLowerCase()))) {
            bluePick = prompt('Please select a valid champion. Blue pick a champion.');
            bluePick = bluePick.replace(/\s/g, '');
        }

        // add the picked champion into blue team
        blueTeam.push(championsPickList[bluePick.toLowerCase()]);
        pickCount++;
    }

    // redteam pick 
    redPick = prompt('Red pick a champion');
    redPick = redPick.replace(/\s/g, '');

    // if fail, redo
    while (!(championsPickList.hasOwnProperty(redPick.toLowerCase()))) {
        redPick = prompt('Please select a valid champion. Red pick a champion.');
        redPick = redPick.replace(/\s/g, '');
    }

    // add the picked champion into red team
    redTeam.push(championsPickList[redPick.toLowerCase()]);

    console.log(blueTeam);
    console.log(redTeam);
}

const calculateWinratePro = (blueTeamComp, redTeamComp) => {

    // calculate blue team teamcomp scores
    blueTeamComp.teamcompScore();

    // calculate red team teamcomp scores
    redTeamComp.teamcompScore();


    let blueTeamWinRatio = 1;
    let redTeamWinRatio = 1;

    // if blue team first main teamcomp is teamfight
    if (blueTeamComp.firstMainAttr[0] === 'teamfight') {

        // red team first main teamcomp is split (blue soft counters)
        if (redTeamComp.firstMainAttr[0] === 'split') {
            let winRatio = (blueTeamComp.firstMainAttr[1] / redTeamComp.firstMainAttr[1]) / 2;
            blueTeamWinRatio += winRatio;
        }

        // red first main teamcomp is poke (blue hard counters)
        if (redTeamComp.firstMainAttr[0] === 'poke') {
            let winRatio = blueTeamComp.firstMainAttr[1] / redTeamComp.firstMainAttr[1];
            blueTeamWinRatio += winRatio;
        }

        // red first main teamcomp is hypercarry (red hard counters)
        if (redTeamComp.firstMainAttr[0] === 'hypercarry') {
            let winRatio = redTeamComp.firstMainAttr[1] / blueTeamComp.firstMainAttr[1];
            redTeamWinRatio += winRatio;
        }

        // red first main teamcomp is pick (red soft counters)
        if (redTeamComp.firstMainAttr[0] === 'pick') {
            let winRatio = (redTeamComp.firstMainAttr[1] / blueTeamComp.firstMainAttr[1]) / 2;
            redTeamWinRatio += winRatio;
        }

        // red team second main teamcomp is split (blue soft counters)
        if (redTeamComp.secondMainAttr[0] === 'split') {
            let winRatio = (blueTeamComp.firstMainAttr[1] / redTeamComp.secondMainAttr[1]) / 3;
            blueTeamWinRatio += winRatio;
        }

        // red second main teamcomp is poke (blue hard counters)
        if (redTeamComp.secondMainAttr[0] === 'poke') {
            let winRatio = (blueTeamComp.firstMainAttr[1] / redTeamComp.secondMainAttr[1]) / 1.5;
            blueTeamWinRatio += winRatio;
        }

        // red second main teamcomp is hypercarry (red hard counters)
        if (redTeamComp.secondMainAttr[0] === 'hypercarry') {
            let winRatio = (redTeamComp.secondMainAttr[1] / blueTeamComp.firstMainAttr[1]) / 1.5;
            redTeamWinRatio += winRatio;
        }

        // red second main teamcomp is pick (red soft counters)
        if (redTeamComp.secondMainAttr[0] === 'pick') {
            let winRatio = (redTeamComp.secondMainAttr[1] / blueTeamComp.firstMainAttr[1]) / 3;
            redTeamWinRatio += winRatio;
        }

    }

    // blue team first teamcomp is pick
    if (blueTeamComp.firstMainAttr[0] === 'pick') {

        // red team first main teamcomp is split (blue soft counters)
        if (redTeamComp.firstMainAttr[0] === 'teamfight') {
            let winRatio = (blueTeamComp.firstMainAttr[1] / redTeamComp.firstMainAttr[1]) / 2;
            blueTeamWinRatio += winRatio;
        }

        // red first main teamcomp is split (blue hard counters)
        if (redTeamComp.firstMainAttr[0] === 'split') {
            let winRatio = blueTeamComp.firstMainAttr[1] / redTeamComp.firstMainAttr[1];
            blueTeamWinRatio += winRatio;
        }

        // red first main teamcomp is poke (red hard counters)
        if (redTeamComp.firstMainAttr[0] === 'poke') {
            let winRatio = redTeamComp.firstMainAttr[1] / blueTeamComp.firstMainAttr[1];
            redTeamWinRatio += winRatio;
        }

        // red first main teamcomp is hypercarry (red soft counters)
        if (redTeamComp.firstMainAttr[0] === 'hypercarry') {
            let winRatio = (redTeamComp.firstMainAttr[1] / blueTeamComp.firstMainAttr[1]) / 2;
            redTeamWinRatio += winRatio;
        }

        // red team second main teamcomp is split (blue soft counters)
        if (redTeamComp.secondMainAttr[0] === 'teamfight') {
            let winRatio = (blueTeamComp.firstMainAttr[1] / redTeamComp.secondMainAttr[1]) / 3;
            blueTeamWinRatio += winRatio;
        }

        // red second main teamcomp is split (blue hard counters)
        if (redTeamComp.secondMainAttr[0] === 'split') {
            let winRatio = (blueTeamComp.firstMainAttr[1] / redTeamComp.secondMainAttr[1]) / 1.5;
            blueTeamWinRatio += winRatio;
        }

        // red second main teamcomp is poke (red hard counters)
        if (redTeamComp.secondMainAttr[0] === 'poke') {
            let winRatio = (redTeamComp.secondMainAttr[1] / blueTeamComp.firstMainAttr[1]) / 1.5;
            redTeamWinRatio += winRatio;
        }

        // red second main teamcomp is hypercarry (red soft counters)
        if (redTeamComp.secondMainAttr[0] === 'hypercarry') {
            let winRatio = (redTeamComp.secondMainAttr[1] / blueTeamComp.firstMainAttr[1]) / 3;
            redTeamWinRatio += winRatio;
        }

    }

    // blue team first teamcomp is hypercarry
    if (blueTeamComp.firstMainAttr[0] === 'hypercarry') {

        // red team first main teamcomp is pick (blue soft counters)
        if (redTeamComp.firstMainAttr[0] === 'pick') {
            let winRatio = (blueTeamComp.firstMainAttr[1] / redTeamComp.firstMainAttr[1]) / 2;
            blueTeamWinRatio += winRatio;
        }

        // red first main teamcomp is teamfight (blue hard counters)
        if (redTeamComp.firstMainAttr[0] === 'teamfight') {
            let winRatio = blueTeamComp.firstMainAttr[1] / redTeamComp.firstMainAttr[1];
            blueTeamWinRatio += winRatio;
        }

        // red first main teamcomp is split (red hard counters)
        if (redTeamComp.firstMainAttr[0] === 'split') {
            let winRatio = redTeamComp.firstMainAttr[1] / blueTeamComp.firstMainAttr[1];
            redTeamWinRatio += winRatio;
        }

        // red first main teamcomp is poke (red soft counters)
        if (redTeamComp.firstMainAttr[0] === 'poke') {
            let winRatio = (redTeamComp.firstMainAttr[1] / blueTeamComp.firstMainAttr[1]) / 2;
            redTeamWinRatio += winRatio;
        }

        // red second main teamcopm is pick (blue soft counters)
        if (redTeamComp.secondMainAttr[0] === 'pick') {
            let winRatio = (blueTeamComp.firstMainAttr[1] / redTeamComp.secondMainAttr[1]) / 3;
            blueTeamWinRatio += winRatio;
        }

        // red second main teamcomp is teamfight (blue hard counters)
        if (redTeamComp.secondMainAttr[0] === 'teamfight') {
            let winRatio = (blueTeamComp.firstMainAttr[1] / redTeamComp.secondMainAttr[1]) / 1.5;
            blueTeamWinRatio += winRatio;
        }

        // red second main teamcomp is split (red hard counters)
        if (redTeamComp.secondMainAttr[0] === 'split') {
            let winRatio = (redTeamComp.secondMainAttr[1] / blueTeamComp.firstMainAttr[1]) / 1.5;
            redTeamWinRatio += winRatio;
        }

        // red second main teamcomp is poke (red soft counters)
        if (redTeamComp.secondMainAttr[0] === 'poke') {
            let winRatio = (redTeamComp.secondMainAttr[1] / blueTeamComp.firstMainAttr[1]) / 3;
            redTeamWinRatio += winRatio;
        }

    }

    // blue team first teamcomp is poke
    if (blueTeamComp.firstMainAttr[0] === 'poke') {

        // red team first main teamcomp is hypercarry (blue soft counters)
        if (redTeamComp.firstMainAttr[0] === 'hypercarry') {
            let winRatio = (blueTeamComp.firstMainAttr[1] / redTeamComp.firstMainAttr[1]) / 2;
            blueTeamWinRatio += winRatio;
        }

        // red first main teamcomp is pick (blue hard counters)
        if (redTeamComp.firstMainAttr[0] === 'pick') {
            let winRatio = blueTeamComp.firstMainAttr[1] / redTeamComp.firstMainAttr[1];
            blueTeamWinRatio += winRatio;
        }

        // red first main teamcomp is teamfight (red hard counters)
        if (redTeamComp.firstMainAttr[0] === 'teamfight') {
            let winRatio = redTeamComp.firstMainAttr[1] / blueTeamComp.firstMainAttr[1];
            redTeamWinRatio += winRatio;
        }

        // red first main teamcomp is split (red soft counters)
        if (redTeamComp.firstMainAttr[0] === 'split') {
            let winRatio = (redTeamComp.firstMainAttr[1] / blueTeamComp.firstMainAttr[1]) / 2;
            redTeamWinRatio += winRatio;
        }

        // red team second main teamcomp is hypercarry (blue soft counters)
        if (redTeamComp.secondMainAttr[0] === 'hypercarry') {
            let winRatio = (blueTeamComp.firstMainAttr[1] / redTeamComp.secondMainAttr[1]) / 3;
            blueTeamWinRatio += winRatio;
        }

        // red second main teamcomp is pick (blue hard counters)
        if (redTeamComp.secondMainAttr[0] === 'pick') {
            let winRatio = (blueTeamComp.firstMainAttr[1] / redTeamComp.secondMainAttr[1]) / 1.5;
            blueTeamWinRatio += winRatio;
        }

        // red second main teamcomp is teamfight (red hard counters)
        if (redTeamComp.secondMainAttr[0] === 'teamfight') {
            let winRatio = (redTeamComp.secondMainAttr[1] / blueTeamComp.firstMainAttr[1]) / 1.5;
            redTeamWinRatio += winRatio;
        }

        // red second main teamcomp is split (red soft counters)
        if (redTeamComp.secondMainAttr[0] === 'split') {
            let winRatio = (redTeamComp.secondMainAttr[1] / blueTeamComp.firstMainAttr[1]) / 3;
            redTeamWinRatio += winRatio;
        }

    }

    // blue team first teamcomp is split
    if (blueTeamComp.firstMainAttr[0] === 'split') {

        // red team first main teamcomp is poke (blue soft counters)
        if (redTeamComp.firstMainAttr[0] === 'poke') {
            let winRatio = (blueTeamComp.firstMainAttr[1] / redTeamComp.firstMainAttr[1]) / 2;
            blueTeamWinRatio += winRatio;
        }

        // red first main teamcomp is hypercarry (blue hard counters)
        if (redTeamComp.firstMainAttr[0] === 'hypercarry') {
            let winRatio = blueTeamComp.firstMainAttr[1] / redTeamComp.firstMainAttr[1];
            blueTeamWinRatio += winRatio;
        }

        // red first main teamcomp is pick (red hard counters)
        if (redTeamComp.firstMainAttr[0] === 'pick') {
            let winRatio = redTeamComp.firstMainAttr[1] / blueTeamComp.firstMainAttr[1];
            redTeamWinRatio += winRatio;
        }

        // red first main teamcomp is teamfight (red soft counters)
        if (redTeamComp.firstMainAttr[0] === 'teamfight') {
            let winRatio = (redTeamComp.firstMainAttr[1] / blueTeamComp.firstMainAttr[1]) / 2;
            redTeamWinRatio += winRatio;
        }

        // red team second main teamcomp is poke (blue soft counters)
        if (redTeamComp.secondMainAttr[0] === 'poke') {
            let winRatio = (blueTeamComp.firstMainAttr[1] / redTeamComp.secondMainAttr[1]) / 3;
            blueTeamWinRatio += winRatio;
        }

        // red second main teamcomp is hypercarry (blue hard counters)
        if (redTeamComp.secondMainAttr[0] === 'hypercarry') {
            let winRatio = (blueTeamComp.firstMainAttr[1] / redTeamComp.secondMainAttr[1]) / 1.5;
            blueTeamWinRatio += winRatio;
        }

        // red second main teamcomp is pick (red hard counters)
        if (redTeamComp.secondMainAttr[0] === 'pick') {
            let winRatio = (redTeamComp.secondMainAttr[1] / blueTeamComp.firstMainAttr[1]) / 1.5;
            redTeamWinRatio += winRatio;
        }

        // red second main teamcomp is teamfight (red soft counters)
        if (redTeamComp.secondMainAttr[0] === 'teamfight') {
            let winRatio = (redTeamComp.secondMainAttr[1] / blueTeamComp.firstMainAttr[1]) / 3;
            redTeamWinRatio += winRatio;
        }

    }

    // blue team second teamcomp is teamfight
    if (blueTeamComp.secondMainAttr[0] === 'teamfight') {

        // red team second main teamcomp is split (blue soft counters)
        if (redTeamComp.secondMainAttr[0] === 'split') {
            let winRatio = (blueTeamComp.secondMainAttr[1] / redTeamComp.secondMainAttr[1]) / 4;
            blueTeamWinRatio += winRatio;
        }

        // red second main teamcomp is poke (blue hard counters)
        if (redTeamComp.secondMainAttr[0] === 'poke') {
            let winRatio = (blueTeamComp.secondMainAttr[1] / redTeamComp.secondMainAttr[1]) / 2;
            blueTeamWinRatio += winRatio;
        }

        // red second main teamcomp is hypercarry (red hard counters)
        if (redTeamComp.secondMainAttr[0] === 'hypercarry') {
            let winRatio = (redTeamComp.secondMainAttr[1] / blueTeamComp.secondMainAttr[1]) / 2;
            redTeamWinRatio += winRatio;
        }

        // red second main teamcomp is pick (red soft counters)
        if (redTeamComp.secondMainAttr[0] === 'pick') {
            let winRatio = (redTeamComp.secondMainAttr[1] / blueTeamComp.secondMainAttr[1]) / 4;
            redTeamWinRatio += winRatio;
        }

        // red team first main teamcomp is split (blue soft counters)
        if (redTeamComp.firstMainAttr[0] === 'split') {
            let winRatio = (blueTeamComp.secondMainAttr[1] / redTeamComp.firstMainAttr[1]) / 3;
            blueTeamWinRatio += winRatio;
        }

        // red first main teamcomp is poke (blue hard counters)
        if (redTeamComp.firstMainAttr[0] === 'poke') {
            let winRatio = (blueTeamComp.secondMainAttr[1] / redTeamComp.firstMainAttr[1]) / 1.5;
            blueTeamWinRatio += winRatio;
        }

        // red first main teamcomp is hypercarry (red hard counters)
        if (redTeamComp.firstMainAttr[0] === 'hypercarry') {
            let winRatio = (redTeamComp.firstMainAttr[1] / blueTeamComp.secondMainAttr[1]) / 1.5;
            redTeamWinRatio += winRatio;
        }

        // red first main teamcomp is pick (red soft counters)
        if (redTeamComp.firstMainAttr[0] === 'pick') {
            let winRatio = (redTeamComp.firstMainAttr[1] / blueTeamComp.secondMainAttr[1]) / 3;
            redTeamWinRatio += winRatio;
        }

    }

    // blue team second teamcomp is pick
    if (blueTeamComp.secondMainAttr[0] === 'pick') {

        // red team second main teamcomp is teamfight (blue soft counters)
        if (redTeamComp.secondMainAttr[0] === 'teamfight') {
            let winRatio = (blueTeamComp.secondMainAttr[1] / redTeamComp.secondMainAttr[1]) / 4;
            blueTeamWinRatio += winRatio;
        }

        // red second main teamcomp is split (blue hard counters)
        if (redTeamComp.secondMainAttr[0] === 'split') {
            let winRatio = (blueTeamComp.secondMainAttr[1] / redTeamComp.secondMainAttr[1]) / 2;
            blueTeamWinRatio += winRatio;
        }

        // red second main teamcomp is poke (red hard counters)
        if (redTeamComp.secondMainAttr[0] === 'poke') {
            let winRatio = (redTeamComp.secondMainAttr[1] / blueTeamComp.secondMainAttr[1]) / 2;
            redTeamWinRatio += winRatio;
        }

        // red second main teamcomp is hypercarry (red soft counters)
        if (redTeamComp.secondMainAttr[0] === 'hypercarry') {
            let winRatio = (redTeamComp.secondMainAttr[1] / blueTeamComp.secondMainAttr[1]) / 4;
            redTeamWinRatio += winRatio;
        }

        // red team first main teamcomp is teamfight (blue soft counters)
        if (redTeamComp.firstMainAttr[0] === 'teamfight') {
            let winRatio = (blueTeamComp.secondMainAttr[1] / redTeamComp.firstMainAttr[1]) / 3;
            blueTeamWinRatio += winRatio;
        }

        // red first main teamcomp is split (blue hard counters)
        if (redTeamComp.firstMainAttr[0] === 'split') {
            let winRatio = (blueTeamComp.secondMainAttr[1] / redTeamComp.firstMainAttr[1]) / 1.5;
            blueTeamWinRatio += winRatio;
        }

        // red first main teamcomp is poke (red hard counters)
        if (redTeamComp.firstMainAttr[0] === 'poke') {
            let winRatio = (redTeamComp.firstMainAttr[1] / blueTeamComp.secondMainAttr[1]) / 1.5;
            redTeamWinRatio += winRatio;
        }

        // red first main teamcomp is hypercarry (red soft counters)
        if (redTeamComp.firstMainAttr[0] === 'hypercarry') {
            let winRatio = (redTeamComp.firstMainAttr[1] / blueTeamComp.secondMainAttr[1]) / 3;
            redTeamWinRatio += winRatio;
        }

    }

    // blue team second teamcomp is hypercarry
    if (blueTeamComp.secondMainAttr[0] === 'hypercarry') {

        // red team second main teamcomp is pick (blue soft counters)
        if (redTeamComp.secondMainAttr[0] === 'pick') {
            let winRatio = (blueTeamComp.secondMainAttr[1] / redTeamComp.secondMainAttr[1]) / 4;
            blueTeamWinRatio += winRatio;
        }

        // red second main teamcomp is teamfight (blue hard counters)
        if (redTeamComp.secondMainAttr[0] === 'teamfight') {
            let winRatio = (blueTeamComp.secondMainAttr[1] / redTeamComp.secondMainAttr[1]) / 2;
            blueTeamWinRatio += winRatio;
        }

        // red second main teamcomp is split (red hard counters)
        if (redTeamComp.secondMainAttr[0] === 'split') {
            let winRatio = (redTeamComp.secondMainAttr[1] / blueTeamComp.secondMainAttr[1]) / 2;
            redTeamWinRatio += winRatio;
        }

        // red second main teamcomp is poke (red soft counters)
        if (redTeamComp.secondMainAttr[0] === 'poke') {
            let winRatio = (redTeamComp.secondMainAttr[1] / blueTeamComp.secondMainAttr[1]) / 4;
            redTeamWinRatio += winRatio;
        }

        // red team first main teamcomp is pick (blue soft counters)
        if (redTeamComp.firstMainAttr[0] === 'pick') {
            let winRatio = (blueTeamComp.secondMainAttr[1] / redTeamComp.firstMainAttr[1]) / 3;
            blueTeamWinRatio += winRatio;
        }

        // red first main teamcomp is teamfight (blue hard counters)
        if (redTeamComp.firstMainAttr[0] === 'teamfight') {
            let winRatio = (blueTeamComp.secondMainAttr[1] / redTeamComp.firstMainAttr[1]) / 1.5;
            blueTeamWinRatio += winRatio;
        }

        // red first main teamcomp is split (red hard counters)
        if (redTeamComp.firstMainAttr[0] === 'split') {
            let winRatio = (redTeamComp.firstMainAttr[1] / blueTeamComp.secondMainAttr[1]) / 1.5;
            redTeamWinRatio += winRatio;
        }

        // red first main teamcomp is poke (red soft counters)
        if (redTeamComp.firstMainAttr[0] === 'poke') {
            let winRatio = (redTeamComp.firstMainAttr[1] / blueTeamComp.secondMainAttr[1]) / 3;
            redTeamWinRatio += winRatio;
        }

    }

    // blue team second teamcomp is poke
    if (blueTeamComp.secondMainAttr[0] === 'poke') {

        // red team second main teamcomp is hypercarry (blue soft counters)
        if (redTeamComp.secondMainAttr[0] === 'hypercarry') {
            let winRatio = (blueTeamComp.secondMainAttr[1] / redTeamComp.secondMainAttr[1]) / 4;
            blueTeamWinRatio += winRatio;
        }

        // red second main teamcomp is pick (blue hard counters)
        if (redTeamComp.secondMainAttr[0] === 'pick') {
            let winRatio = (blueTeamComp.secondMainAttr[1] / redTeamComp.secondMainAttr[1]) / 2;
            blueTeamWinRatio += winRatio;
        }

        // red second main teamcomp is teamfight (red hard counters)
        if (redTeamComp.secondMainAttr[0] === 'teamfight') {
            let winRatio = (redTeamComp.secondMainAttr[1] / blueTeamComp.secondMainAttr[1]) / 2;
            redTeamWinRatio += winRatio;
        }

        // red second main teamcomp is split (red soft counters)
        if (redTeamComp.secondMainAttr[0] === 'split') {
            let winRatio = (redTeamComp.secondMainAttr[1] / blueTeamComp.secondMainAttr[1]) / 4;
            redTeamWinRatio += winRatio;
        }

        // red team first main teamcomp is hypercarry (blue soft counters)
        if (redTeamComp.firstMainAttr[0] === 'hypercarry') {
            let winRatio = (blueTeamComp.secondMainAttr[1] / redTeamComp.firstMainAttr[1]) / 3;
            blueTeamWinRatio += winRatio;
        }

        // red first main teamcomp is pick (blue hard counters)
        if (redTeamComp.firstMainAttr[0] === 'pick') {
            let winRatio = (blueTeamComp.secondMainAttr[1] / redTeamComp.firstMainAttr[1]) / 1.5;
            blueTeamWinRatio += winRatio;
        }

        // red first main teamcomp is teamfight (red hard counters)
        if (redTeamComp.firstMainAttr[0] === 'teamfight') {
            let winRatio = (redTeamComp.firstMainAttr[1] / blueTeamComp.secondMainAttr[1]) / 1.5;
            redTeamWinRatio += winRatio;
        }

        // red first main teamcomp is split (red soft counters)
        if (redTeamComp.firstMainAttr[0] === 'split') {
            let winRatio = (redTeamComp.firstMainAttr[1] / blueTeamComp.secondMainAttr[1]) / 3;
            redTeamWinRatio += winRatio;
        }

    }

    // blue team second teamcomp is split
    if (blueTeamComp.secondMainAttr[0] === 'split') {

        // red team second main teamcomp is poke (blue soft counters)
        if (redTeamComp.secondMainAttr[0] === 'poke') {
            let winRatio = (blueTeamComp.secondMainAttr[1] / redTeamComp.secondMainAttr[1]) / 4;
            blueTeamWinRatio += winRatio;
        }

        // red second main teamcomp is hypercarry (blue hard counters)
        if (redTeamComp.secondMainAttr[0] === 'hypercarry') {
            let winRatio = (blueTeamComp.secondMainAttr[1] / redTeamComp.secondMainAttr[1]) / 2;
            blueTeamWinRatio += winRatio;
        }

        // red second main teamcomp is pick (red hard counters)
        if (redTeamComp.secondMainAttr[0] === 'pick') {
            let winRatio = (redTeamComp.secondMainAttr[1] / blueTeamComp.secondMainAttr[1]) / 2;
            redTeamWinRatio += winRatio;
        }

        // red second main teamcomp is teamfight (red soft counters)
        if (redTeamComp.secondMainAttr[0] === 'teamfight') {
            let winRatio = (redTeamComp.secondMainAttr[1] / blueTeamComp.secondMainAttr[1]) / 4;
            redTeamWinRatio += winRatio;
        }

        // red team first main teamcomp is poke (blue soft counters)
        if (redTeamComp.firstMainAttr[0] === 'poke') {
            let winRatio = (blueTeamComp.secondMainAttr[1] / redTeamComp.firstMainAttr[1]) / 3;
            blueTeamWinRatio += winRatio;
        }

        // red first main teamcomp is hypercarry (blue hard counters)
        if (redTeamComp.firstMainAttr[0] === 'hypercarry') {
            let winRatio = (blueTeamComp.secondMainAttr[1] / redTeamComp.firstMainAttr[1]) / 1.5;
            blueTeamWinRatio += winRatio;
        }

        // red first main teamcomp is pick (red hard counters)
        if (redTeamComp.firstMainAttr[0] === 'pick') {
            let winRatio = (redTeamComp.firstMainAttr[1] / blueTeamComp.secondMainAttr[1]) / 1.5;
            redTeamWinRatio += winRatio;
        }

        // red first main teamcomp is teamfight (red soft counters)
        if (redTeamComp.firstMainAttr[0] === 'teamfight') {
            let winRatio = (redTeamComp.firstMainAttr[1] / blueTeamComp.secondMainAttr[1]) / 3;
            redTeamWinRatio += winRatio;
        }

    }

    console.log(blueTeamComp);
    console.log(redTeamComp);

    // blue team win rate 
    let blueWinRate = (100 / (blueTeamWinRatio + redTeamWinRatio) * blueTeamWinRatio).toFixed(2);

    // red team win rate
    let redWinRate = (100 / (blueTeamWinRatio + redTeamWinRatio) * redTeamWinRatio).toFixed(2);

    console.log(`Blue team has a ${blueWinRate}% win rate`);
    console.log(`Red team has a ${redWinRate}% win rate`);

}

const proGameStart = () => {

    // first 3 bans
    firstBanPhasePro();

    // first 3 picks
    firstPickPhasePro();

    // last 2 bans
    secondBanPhasePro();

    //last 2 picks
    secondPickPhasePro();


    const blueTeamComp = new TeamComp(blueTeam);
    const redTeamComp = new TeamComp(redTeam);

    // calculate winrate of both team
    calculateWinratePro(blueTeamComp, redTeamComp);
}

// app runs
proGameStart();