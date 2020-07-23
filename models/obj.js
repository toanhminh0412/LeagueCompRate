class Champion {
    constructor(name, attr, teamcomp, tags) {
        this.name = name;
        this.attr = attr;
        this.teamcomp = teamcomp;
        this.tags = tags;
    }
}

class TeamComp {
    constructor(champions) {
        this.champions = champions;
    }

    teamcompScore() {
        this.teamFightScore();
        this.pickScore();
        this.hyperScore();
        this.pokeScore();
        this.splitScore();
    }

    teamFightScore() {
        let teamfightScore = 0;
        let vanFound = false;
        let divFound = false;
        let artFound = false;
        let burFound = false;
        let batFound = false;
        let marFound = false;
        this.champions.forEach(champion => {
            // console.log(champion.teamcomp.Teamfight);
            teamfightScore += champion.teamcomp.Teamfight;
            if (champion.tags[0] === 'van' && vanFound === false) {
                teamfightScore += 20;
                vanFound = true;
            }
            if (champion.tags[0] === 'bur' && burFound === false) {
                teamfightScore += 20;
                burFound = true;
            }
            if (champion.tags[1] === 'van' && vanFound === false) {
                teamfightScore += 10;
                vanFound = true;
            }
            if (champion.tags[1] === 'bur' && burFound === false) {
                teamfightScore += 10;
                burFound = true;
            }
            if (champion.tags[0] === 'div' && divFound === false) {
                teamfightScore += 10;
                divFound = true;
            }
            if (champion.tags[0] === 'art' && artFound === false) {
                teamfightScore += 10;
                artFound = true;
            }
            if (champion.tags[0] === 'bat' && batFound === false) {
                teamfightScore += 10;
                batFound = true;
            }
            if (champion.tags[1] === 'div' && divFound === false) {
                teamfightScore += 5;
                divFound = true;
            }
            if (champion.tags[1] === 'art' && artFound === false) {
                teamfightScore += 5;
                artFound = true;
            }
            if (champion.tags[1] === 'bat' && batFound === false) {
                teamfightScore += 5;
                batFound = true;
            }
            if (champion.tags[0] === 'mar' && marFound === false) {
                teamfightScore += 20;
                marFound = true;
            }
        });
        this.teamfight = teamfightScore;
    }

    pickScore() {
        let score = 0;
        let assFound = false;
        let divFound = false;
        let vanFound = false;
        let catFound = false;
        let burFound = false;
        let marFound = false;
        this.champions.forEach(champion => {
            score += champion.teamcomp.Pick;
            if (champion.tags[0] === 'ass' && assFound === false) {
                score += 20;
                assFound = true;
            }
            if (champion.tags[1] === 'ass' && assFound === false) {
                score += 10;
                assFound = true;
            }
            if (champion.tags[0] === 'div' && divFound === false) {
                score += 20;
                divFound = true;
            }
            if (champion.tags[1] === 'div' && divFound === false) {
                score += 10;
                divFound = true;
            }
            if (champion.tags[0] === 'van' && vanFound === false) {
                score += 10;
                vanFound = true;
            }
            if (champion.tags[1] === 'van' && vanFound === false) {
                score += 5;
                vanFound = true;
            }
            if (champion.tags[0] === 'cat' && catFound === false) {
                score += 20;
                catFound = true;
            }
            if (champion.tags[1] === 'cat' && catFound === false) {
                score += 10;
                catFound = true;
            }
            if (champion.tags[0] === 'bur' && burFound === false) {
                score += 20;
                burFound = true;
            }
            if (champion.tags[1] === 'bur' && burFound === false) {
                score += 10;
                burFound = true;
            }
            if (champion.tags[0] === 'mar' && marFound === false) {
                score += 10;
                marFound = true;
            }
        });
        this.pick = score;
    }

    hyperScore() {
        let hScore = 0;
        let jugFound = false;
        let warFound = false;
        let encFound = false;
        let batFound = false;
        let marFound = false;
        this.champions.forEach(champion => {
            hScore += champion.teamcomp.Hyper;
            if (champion.tags[0] === 'jug' && jugFound === false) {
                hScore += 10;
                jugFound = true;
            }
            if (champion.tags[1] === 'jug' && jugFound === false) {
                hScore += 5;
                jugFound = true;
            }
            if (champion.tags[0] === 'war' && warFound === false) {
                hScore += 20;
                warFound = true;
            }
            if (champion.tags[1] === 'war' && warFound === false) {
                hScore += 10;
                warFound = true;
            }
            if (champion.tags[0] === 'enc' && encFound === false) {
                hScore += 20;
                encFound = true;
            }
            if (champion.tags[1] === 'enc' && encFound === false) {
                hScore += 10;
                encFound = true;
            }
            if (champion.tags[0] === 'bat' && batFound === false) {
                hScore += 10;
                batFound = true;
            }
            if (champion.tags[1] === 'bat' && batFound === false) {
                hScore += 5;
                batFound = true;
            }
            if (champion.tags[0] === 'mar' && marFound === false) {
                hScore += 20;
                marFound = true;
            }
        });
        this.hyperCarry = hScore;

    }

    pokeScore() {
        let pScore = 0;
        let warFound = false;
        let catFound = false;
        let encFound = false;
        let artFound = false;
        let burFound = false;
        let batFound = false;
        let marFound = false;
        this.champions.forEach(champion => {
            pScore += champion.teamcomp.Poke;
            if (champion.tags[0] === 'war' && warFound === false) {
                pScore += 20;
                warFound = true;
            }
            if (champion.tags[1] === 'war' && warFound === false) {
                pScore += 10;
                warFound = true;
            }
            if (champion.tags[0] === 'cat' && catFound === false) {
                pScore += 10;
                catFound = true;
            }
            if (champion.tags[1] === 'cat' && catFound === false) {
                pScore += 5;
                catFound = true;
            }
            if (champion.tags[0] === 'enc' && encFound === false) {
                pScore += 20;
                encFound = true;
            }
            if (champion.tags[1] === 'enc' && encFound === false) {
                pScore += 10;
                encFound = true;
            }
            if (champion.tags[0] === 'art' && artFound === false) {
                pScore += 20;
                artFound = true;
            }
            if (champion.tags[1] === 'art' && artFound === false) {
                pScore += 10;
                artFound = true;
            }
            if (champion.tags[0] === 'bur' && burFound === false) {
                pScore += 10;
                burFound = true;
            }
            if (champion.tags[1] === 'bur' && burFound === false) {
                pScore += 5;
                burFound = true;
            }
            if (champion.tags[0] === 'bat' && batFound === false) {
                pScore += 10;
                burFound = true;
            }
            if (champion.tags[1] === 'bat' && batFound === false) {
                pScore += 5;
                burFound = true;
            }
            if (champion.tags[0] === 'mar' && marFound === false) {
                pScore += 10;
                marFound = true;
            }
        });
        this.poke = pScore;
    }

    splitScore() {
        let sScore = 0;
        let assFound = false;
        let skiFound = false;
        let jugFound = false;
        let warFound = false;
        let encFound = false;
        let marFound = false;
        this.champions.forEach(champion => {
            sScore += champion.teamcomp.Split;
            if (champion.tags[0] === 'ass' && assFound === false) {
                sScore += 10;
                assFound = true;
            }
            if (champion.tags[1] === 'ass' && assFound === false) {
                sScore += 5;
                assFound = true;
            }
            if (champion.tags[0] === 'ski' && skiFound === false) {
                sScore += 20;
                skiFound = true;
            }
            if (champion.tags[1] === 'ski' && skiFound === false) {
                sScore += 10;
                skiFound = true;
            }
            if (champion.tags[0] === 'jug' && jugFound === false) {
                sScore += 20;
                jugFound = true;
            }
            if (champion.tags[1] === 'jug' && jugFound === false) {
                sScore += 10;
                jugFound = true;
            }
            if (champion.tags[0] === 'war' && warFound === false) {
                sScore += 10;
                warFound = true;
            }
            if (champion.tags[1] === 'war' && warFound === false) {
                sScore += 5;
                warFound = true;
            }
            if (champion.tags[0] === 'enc' && encFound === false) {
                sScore += 10;
                encFound = true;
            }
            if (champion.tags[1] === 'enc' && encFound === false) {
                sScore += 5;
                encFound = true;
            }
            if (champion.tags[0] === 'mar' && marFound === false) {
                sScore += 10;
                marFound = true;
            }
        });
        this.split = sScore;
    }

}

module.exports = { Champion, TeamComp };