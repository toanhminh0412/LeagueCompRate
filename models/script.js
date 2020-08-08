// list of all champions
import { champions } from './champions';

// object TeamComp
import { TeamComp } from './obj';

// import functions from progameView
import * as progameView from '../views/progameView';

// import functions from champPickView
import * as champPickView from '../views/champPickView';

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

        // update interface when blue bans
        if (banCount === 0) {
            progameView.banInterfaceUpdate(championsPickList[blueBan.toLowerCase()], 'blue', 'first');
        } else if (banCount === 1) {
            progameView.banInterfaceUpdate(championsPickList[blueBan.toLowerCase()], 'blue', 'second');
        } else if (banCount === 2) {
            progameView.banInterfaceUpdate(championsPickList[blueBan.toLowerCase()], 'blue', 'third');
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

        // update interface when red bans
        if (banCount === 0) {
            progameView.banInterfaceUpdate(championsPickList[redBan.toLowerCase()], 'red', 'first');
        } else if (banCount === 1) {
            progameView.banInterfaceUpdate(championsPickList[redBan.toLowerCase()], 'red', 'second');
        } else if (banCount === 2) {
            progameView.banInterfaceUpdate(championsPickList[redBan.toLowerCase()], 'red', 'third');
        }

        // remove the banned champion from pick list
        delete championsPickList[redBan.toLowerCase()];
        banCount++;
    }

}

// first 3 picks into the game
const firstPickPhasePro = () => {
    let pickCount = 0;
    let blueTeamComp, redTeamComp;

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

    // update teamcomp score when a champ is picked
    blueTeamComp = new TeamComp(blueTeam);
    blueTeamComp.teamcompScore();
    progameView.updateTeamcompScore('blue', blueTeamComp.teamfight, blueTeamComp.pick, blueTeamComp.hyperCarry, blueTeamComp.poke, blueTeamComp.split);

    // update interface when blue picks
    progameView.pickInterfaceUpdate(championsPickList[bluePick.toLowerCase()], 'blue', 'first');

    // delete the picked champion from pick list
    delete championsPickList[bluePick.toLowerCase()];

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

        // update teamcomp score when a champ is picked
        redTeamComp = new TeamComp(redTeam);
        redTeamComp.teamcompScore();
        progameView.updateTeamcompScore('red', redTeamComp.teamfight, redTeamComp.pick, redTeamComp.hyperCarry, redTeamComp.poke, redTeamComp.split);

        // update interface when blue picks
        if (pickCount === 0) {
            progameView.pickInterfaceUpdate(championsPickList[redPick.toLowerCase()], 'red', 'first');
        } else if (pickCount === 1) {
            progameView.pickInterfaceUpdate(championsPickList[redPick.toLowerCase()], 'red', 'second');
        }

        // delete the picked champion from pick list
        delete championsPickList[redPick.toLowerCase()];

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

        // update teamcomp score when a champ is picked
        blueTeamComp = new TeamComp(blueTeam);
        blueTeamComp.teamcompScore();
        progameView.updateTeamcompScore('blue', blueTeamComp.teamfight, blueTeamComp.pick, blueTeamComp.hyperCarry, blueTeamComp.poke, blueTeamComp.split);

        // update interface when blue picks
        if (pickCount === 0) {
            progameView.pickInterfaceUpdate(championsPickList[bluePick.toLowerCase()], 'blue', 'second');
        } else if (pickCount === 1) {
            progameView.pickInterfaceUpdate(championsPickList[bluePick.toLowerCase()], 'blue', 'third');
        }

        // delete the picked champion from pick list
        delete championsPickList[bluePick.toLowerCase()];

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

    // update teamcomp score when a champ is picked
    redTeamComp = new TeamComp(redTeam);
    redTeamComp.teamcompScore();
    progameView.updateTeamcompScore('red', redTeamComp.teamfight, redTeamComp.pick, redTeamComp.hyperCarry, redTeamComp.poke, redTeamComp.split);

    // update interface when blue picks
    progameView.pickInterfaceUpdate(championsPickList[redPick.toLowerCase()], 'red', 'third');

    // delete the picked champion from pick list
    delete championsPickList[redPick.toLowerCase()];

    pickCount++;
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

        // update interface when blue bans
        if (banCount === 0) {
            progameView.banInterfaceUpdate(championsPickList[blueBan.toLowerCase()], 'blue', 'fourth');
        } else if (banCount === 1) {
            progameView.banInterfaceUpdate(championsPickList[blueBan.toLowerCase()], 'blue', 'fifth');
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

        // update interface when red bans
        if (banCount === 0) {
            progameView.banInterfaceUpdate(championsPickList[redBan.toLowerCase()], 'red', 'fourth');
        } else if (banCount === 1) {
            progameView.banInterfaceUpdate(championsPickList[redBan.toLowerCase()], 'red', 'fifth');
        }

        // remove the banned champion from pick list
        delete championsPickList[redBan.toLowerCase()];
        banCount++;
    }
}

// Last 2 picks of the game
const secondPickPhasePro = () => {
    let pickCount = 0;
    let redTeamComp, blueTeamComp;

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

    // update teamcomp score when a champ is picked
    redTeamComp = new TeamComp(redTeam);
    redTeamComp.teamcompScore();
    progameView.updateTeamcompScore('red', redTeamComp.teamfight, redTeamComp.pick, redTeamComp.hyperCarry, redTeamComp.poke, redTeamComp.split);

    // update interface when blue picks
    progameView.pickInterfaceUpdate(championsPickList[redPick.toLowerCase()], 'red', 'fourth');

    // delete the picked champion from pick list
    delete championsPickList[redPick.toLowerCase()];

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

        // update teamcomp score when a champ is picked
        blueTeamComp = new TeamComp(blueTeam);
        blueTeamComp.teamcompScore();
        progameView.updateTeamcompScore('blue', blueTeamComp.teamfight, blueTeamComp.pick, blueTeamComp.hyperCarry, blueTeamComp.poke, blueTeamComp.split);

        // update interface when blue picks
        if (pickCount === 0) {
            progameView.pickInterfaceUpdate(championsPickList[bluePick.toLowerCase()], 'blue', 'fourth');
        } else if (pickCount === 1) {
            progameView.pickInterfaceUpdate(championsPickList[bluePick.toLowerCase()], 'blue', 'fifth');
        }

        // delete the picked champion from pick list
        delete championsPickList[bluePick.toLowerCase()];

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

    // update teamcomp score when a champ is picked
    redTeamComp = new TeamComp(redTeam);
    redTeamComp.teamcompScore();
    progameView.updateTeamcompScore('red', redTeamComp.teamfight, redTeamComp.pick, redTeamComp.hyperCarry, redTeamComp.poke, redTeamComp.split);

    // update interface when blue picks
    progameView.pickInterfaceUpdate(championsPickList[redPick.toLowerCase()], 'red', 'fifth');

    // delete the picked champion from pick list
    delete championsPickList[redPick.toLowerCase()];

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

    // blue team win rate 
    let blueWinRate = (100 / (blueTeamWinRatio + redTeamWinRatio) * blueTeamWinRatio).toFixed(2);

    // red team win rate
    let redWinRate = (100 / (blueTeamWinRatio + redTeamWinRatio) * redTeamWinRatio).toFixed(2);

    progameView.updateTeamWinRate(blueWinRate, redWinRate);

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


const testing = () => {
    let bluePicks = "gangplank,graves,syndra,caitlyn,tahmkench".split(","),
        redPicks = "sion,sett,zoe,jhin,nautilus".split(",");
    let blueArray = [],
        redArray = [];

    for (let b of bluePicks) {
        blueArray.push(championsPickList[b]);
    };
    for (let r of redPicks) {
        redArray.push(championsPickList[r]);
    };

    console.log(bluePicks);
    console.log(redPicks);

    calculateWinratePro(new TeamComp(blueArray), new TeamComp(redArray));
}

// app runs
// proGameStart();
//testing();


const soloQueueStart = () => {

    let team, order, type, redIndex, blueIndex;
    // variables for blue teamcomp and red teamcomp
    let blueTeamComp, redTeamComp;

    document.querySelector('.champs-board').addEventListener('click', e => {

        // info of chosen champ
        let champ = e.target.parentElement.dataset.value;

        if (typeof champ !== 'undefined') {

            // ban type
            if (type === 'ban') {
                if (championsPickList[champ]) {

                    // update ban interface
                    progameView.banInterfaceUpdate(championsPickList[champ], team, order);
                    document.querySelector(`#${champ}`).style.border = '1px solid transparent';
                    document.querySelector(`#${champ} img`).style.filter = 'grayscale(100%)';

                    // delete champion from pick list
                    delete(championsPickList[champ]);

                    // close champ board
                    champPickView.closeChampBoard();

                }

                // pick type    
            } else if (type === 'pick') {

                // blue team picks
                if (team === 'blue') {

                    // allowing champ repicking
                    if (blueTeam[blueIndex]) {
                        blueTeam.splice(blueIndex, 1);
                    }

                    if (championsPickList[champ]) {



                        // add the picked champion to blue team
                        blueTeam[blueIndex] = championsPickList[champ];

                        // update teamcomp score when a champ is picked
                        blueTeamComp = new TeamComp(blueTeam);
                        blueTeamComp.teamcompScore();
                        progameView.updateTeamcompScore('blue', blueTeamComp.teamfight, blueTeamComp.pick, blueTeamComp.hyperCarry, blueTeamComp.poke, blueTeamComp.split);

                        // update interface when blue picks
                        progameView.pickInterfaceUpdate(championsPickList[champ], team, order);

                        // delete the picked champion from pick list
                        delete championsPickList[champ];

                        // visually disable champ img 
                        document.querySelector(`#${champ}`).style.border = '1px solid transparent';
                        document.querySelector(`#${champ} img`).style.filter = 'grayscale(100%)';

                        // close champ board
                        champPickView.closeChampBoard();

                    }
                }

                // red team picks
                else if (team === 'red') {

                    // allowing champ repicking
                    if (redTeam[redIndex]) {
                        redTeam.splice(redIndex, 1);
                    }

                    if (championsPickList[champ]) {

                        // add the picked champion into red team
                        redTeam[redIndex] = championsPickList[champ];

                        // update teamcomp score when a champ is picked
                        redTeamComp = new TeamComp(redTeam);
                        redTeamComp.teamcompScore();
                        progameView.updateTeamcompScore('red', redTeamComp.teamfight, redTeamComp.pick, redTeamComp.hyperCarry, redTeamComp.poke, redTeamComp.split);

                        // update interface when blue picks
                        progameView.pickInterfaceUpdate(championsPickList[champ], team, order);

                        // delete the picked champion from pick list
                        delete championsPickList[champ];

                        // visually disable champ img
                        document.querySelector(`#${champ}`).style.border = '1px solid transparent';
                        document.querySelector(`#${champ} img`).style.filter = 'grayscale(100%)';

                        // close champ board
                        champPickView.closeChampBoard();

                    }
                }

                console.log(blueTeamComp);
                console.log(redTeamComp);

                let checkFull = true;
                if (blueTeam.includes(undefined)) {
                    checkFull = false;
                }

                if (redTeam.includes(undefined)) {
                    checkFull = false;
                }

                if (checkFull && blueTeam.length === 5 && redTeam.length === 5) {
                    calculateWinratePro(blueTeamComp, redTeamComp);
                }

            }

        }
    })

    // close button funciton
    document.querySelector('.close').addEventListener('click', () => {
        champPickView.closeChampBoard();
    });


    // first blue ban
    document.querySelector('#blue-first-ban').addEventListener('click', () => {
        resetChampSearch();
        champPickView.openChampsBoard();
        team = 'blue';
        order = 'first';
        type = 'ban';
    });

    // second blue ban
    document.querySelector('#blue-second-ban').addEventListener('click', () => {
        resetChampSearch();
        champPickView.openChampsBoard();
        team = 'blue';
        order = 'second';
        type = 'ban';
    });

    // third blue ban
    document.querySelector('#blue-third-ban').addEventListener('click', () => {
        resetChampSearch();
        champPickView.openChampsBoard();
        team = 'blue';
        order = 'third';
        type = 'ban';
    });

    // fourth blue ban
    document.querySelector('#blue-fourth-ban').addEventListener('click', () => {
        resetChampSearch();
        champPickView.openChampsBoard();
        team = 'blue';
        order = 'fourth';
        type = 'ban';
    });

    // fifth blue ban
    document.querySelector('#blue-fifth-ban').addEventListener('click', () => {
        resetChampSearch();
        champPickView.openChampsBoard();
        team = 'blue';
        order = 'fifth';
        type = 'ban';
    });

    // first red ban
    document.querySelector('#red-first-ban').addEventListener('click', () => {
        resetChampSearch();
        champPickView.openChampsBoard();
        team = 'red';
        order = 'first';
        type = 'ban';
    });

    // second red ban
    document.querySelector('#red-second-ban').addEventListener('click', () => {
        resetChampSearch();
        champPickView.openChampsBoard();
        team = 'red';
        order = 'second';
        type = 'ban';
    });

    // third red ban
    document.querySelector('#red-third-ban').addEventListener('click', () => {
        resetChampSearch();
        champPickView.openChampsBoard();
        team = 'red';
        order = 'third';
        type = 'ban';
    });

    // fourth red ban
    document.querySelector('#red-fourth-ban').addEventListener('click', () => {
        resetChampSearch();
        champPickView.openChampsBoard();
        team = 'red';
        order = 'fourth';
        type = 'ban';
    });

    // fifth red ban
    document.querySelector('#red-fifth-ban').addEventListener('click', () => {
        resetChampSearch();
        champPickView.openChampsBoard();
        team = 'red';
        order = 'fifth';
        type = 'ban';
    });

    // first blue pick
    document.querySelector('.blue-team-picks .first-pick').addEventListener('click', () => {
        resetChampSearch();
        champPickView.openChampsBoard();
        team = 'blue';
        order = 'first';
        type = 'pick';
        blueIndex = 0;
    });

    // second blue pick
    document.querySelector('.blue-team-picks .second-pick').addEventListener('click', () => {
        resetChampSearch();
        champPickView.openChampsBoard();
        team = 'blue';
        order = 'second';
        type = 'pick';
        blueIndex = 1;
    });

    // third blue pick
    document.querySelector('.blue-team-picks .third-pick').addEventListener('click', () => {
        resetChampSearch();
        champPickView.openChampsBoard();
        team = 'blue';
        order = 'third';
        type = 'pick';
        blueIndex = 2;
    });

    // fourth blue pick
    document.querySelector('.blue-team-picks .fourth-pick').addEventListener('click', () => {
        resetChampSearch();
        champPickView.openChampsBoard();
        team = 'blue';
        order = 'fourth';
        type = 'pick';
        blueIndex = 3;
    });

    // fifth blue pick
    document.querySelector('.blue-team-picks .fifth-pick').addEventListener('click', () => {
        resetChampSearch();
        champPickView.openChampsBoard();
        team = 'blue';
        order = 'fifth';
        type = 'pick';
        blueIndex = 4;
    });

    // first red pick
    document.querySelector('.red-team-picks .first-pick').addEventListener('click', () => {
        resetChampSearch();
        champPickView.openChampsBoard();
        team = 'red';
        order = 'first';
        type = 'pick';
        redIndex = 0;
    });

    // second red pick
    document.querySelector('.red-team-picks .second-pick').addEventListener('click', () => {
        resetChampSearch();
        champPickView.openChampsBoard();
        team = 'red';
        order = 'second';
        type = 'pick';
        redIndex = 1;
    });

    // third red pick
    document.querySelector('.red-team-picks .third-pick').addEventListener('click', () => {
        resetChampSearch();
        champPickView.openChampsBoard();
        team = 'red';
        order = 'third';
        type = 'pick';
        redIndex = 2;
    });

    // fourth red pick
    document.querySelector('.red-team-picks .fourth-pick').addEventListener('click', () => {
        resetChampSearch();
        champPickView.openChampsBoard();
        team = 'red';
        order = 'fourth';
        type = 'pick';
        redIndex = 3;
    });

    // red blue pick
    document.querySelector('.red-team-picks .fifth-pick').addEventListener('click', () => {
        resetChampSearch();
        champPickView.openChampsBoard();
        team = 'red';
        order = 'fifth';
        type = 'pick';
        redIndex = 4;
    });


    // search bar
    document.querySelector('#champ-search').addEventListener('keydown', e => {

        // get input from search bar
        let input = document.querySelector('#champ-search').value;
        input = input.toLowerCase();

        let champNodeList = document.querySelectorAll('.champs-board li');
        for (let cur of champNodeList) {
            if (!cur.dataset.value.includes(input)) {
                cur.style.display = 'none';
            } else {
                cur.style.display = 'inline-block';
            }
        }



    })

    // close instruction
    document.querySelector('.confirm-btn').addEventListener('click', () => {
        document.querySelector('.instruction-window').style.display = 'none';
        document.querySelector('html').style.overflowY = 'visible';
        document.querySelector('body').style.overflowY = 'visible';
    })

    // open instruction
    document.querySelector('.instruction-btn').addEventListener('click', () => {
        document.querySelector('.instruction-window').style.display = 'block';
        document.querySelector('html').style.overflowY = 'hidden';
        document.querySelector('body').style.overflowY = 'hidden';
    })

}

const resetChampSearch = () => {
    document.querySelector('#champ-search').value = '';
    let champNodeList = document.querySelectorAll('.champs-board li');
    for (let cur of champNodeList) {
        cur.style.display = 'inline-block';
    }
}

soloQueueStart();