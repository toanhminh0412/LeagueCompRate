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
        // Calculate teamfight score of the comp 
        this.teamFightScore();
        // Calculate pick score of the comp 
        this.pickScore();
        // Calculate hyper score of the comp 
        this.hyperScore();
        // Calculate poke score of the comp 
        this.pokeScore();
        // Calculate split score of the comp 
        this.splitScore();
    }

    teamFightScore() {
        // Variables declaration
        let teamfightScore = 0;
        let vanFound = false;
        let divFound = false;
        let artFound = false;
        let burFound = false;
        let batFound = false;
        let marFound = false;
        // Loop through the champions of the comp
        this.champions.forEach(champion => {
            // console.log(champion.teamcomp.Teamfight);
            // Add teamfight score of a single champion to the total score
            teamfightScore += champion.teamcomp.Teamfight;

            // Check if the comp has a vanguard (S tier)
            if (champion.tags[0] === 'van' && vanFound === false) {
                teamfightScore += 20;
                vanFound = true;
            }

            // Check if the comp has a burst (S tier) 
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

            // Check if the comp has a diver (A tier)
            if (champion.tags[0] === 'div' && divFound === false) {
                teamfightScore += 10;
                divFound = true;
            }

            // Check if the comp has a artillery (A tier) 
            if (champion.tags[0] === 'art' && artFound === false) {
                teamfightScore += 10;
                artFound = true;
            }

            // Check if the comp has a battle mage (A tier)
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

            // Check if the comp has a marksman (S tier)
            if (champion.tags[0] === 'mar' && marFound === false) {
                teamfightScore += 20;
                marFound = true;
            }
        });
        this.teamfight = teamfightScore;
    }

    pickScore() {

        // Variable Declarations
        let score = 0;
        let assFound = false;
        let divFound = false;
        let vanFound = false;
        let catFound = false;
        let burFound = false;
        let marFound = false;

        // Loop through every champion in the comp
        this.champions.forEach(champion => {

            // Add pick score of each champion to the total pick score
            score += champion.teamcomp.Pick;

            // Check for assasin (S tier)
            if (champion.tags[0] === 'ass' && assFound === false) {
                score += 20;
                assFound = true;
            }
            if (champion.tags[1] === 'ass' && assFound === false) {
                score += 10;
                assFound = true;
            }

            // Check for diver (S tier)
            if (champion.tags[0] === 'div' && divFound === false) {
                score += 20;
                divFound = true;
            }
            if (champion.tags[1] === 'div' && divFound === false) {
                score += 10;
                divFound = true;
            }

            // Check for vanguard (A tier)
            if (champion.tags[0] === 'van' && vanFound === false) {
                score += 10;
                vanFound = true;
            }
            if (champion.tags[1] === 'van' && vanFound === false) {
                score += 5;
                vanFound = true;
            }

            // Check for catcher (S tier)
            if (champion.tags[0] === 'cat' && catFound === false) {
                score += 20;
                catFound = true;
            }
            if (champion.tags[1] === 'cat' && catFound === false) {
                score += 10;
                catFound = true;
            }

            // Check for burst (S tier)
            if (champion.tags[0] === 'bur' && burFound === false) {
                score += 20;
                burFound = true;
            }
            if (champion.tags[1] === 'bur' && burFound === false) {
                score += 10;
                burFound = true;
            }

            // Check for marksman (S tier)
            if (champion.tags[0] === 'mar' && marFound === false) {
                score += 10;
                marFound = true;
            }
        });
        this.pick = score;
    }

    hyperScore() {

        // Variables Declaration
        let hScore = 0;
        let jugFound = false;
        let warFound = false;
        let encFound = false;
        let batFound = false;
        let marFound = false;

        // Loop through every champion in the comp
        this.champions.forEach(champion => {

            // Add hyper carry score of each champion to the total hyper carry score
            hScore += champion.teamcomp.Hyper;

            // Check for juggernaut (A tier)
            if (champion.tags[0] === 'jug' && jugFound === false) {
                hScore += 10;
                jugFound = true;
            }
            if (champion.tags[1] === 'jug' && jugFound === false) {
                hScore += 5;
                jugFound = true;
            }

            // Check for warden (S tier)
            if (champion.tags[0] === 'war' && warFound === false) {
                hScore += 20;
                warFound = true;
            }
            if (champion.tags[1] === 'war' && warFound === false) {
                hScore += 10;
                warFound = true;
            }

            // Check for enchanter (S tier)
            if (champion.tags[0] === 'enc' && encFound === false) {
                hScore += 20;
                encFound = true;
            }
            if (champion.tags[1] === 'enc' && encFound === false) {
                hScore += 10;
                encFound = true;
            }

            // Check for battle mage (A tier)
            if (champion.tags[0] === 'bat' && batFound === false) {
                hScore += 10;
                batFound = true;
            }
            if (champion.tags[1] === 'bat' && batFound === false) {
                hScore += 5;
                batFound = true;
            }

            // Check for marksman (S tier)
            if (champion.tags[0] === 'mar' && marFound === false) {
                hScore += 20;
                marFound = true;
            }
        });
        this.hyperCarry = hScore;

    }

    pokeScore() {

        // Variables declaration
        let pScore = 0;
        let warFound = false;
        let catFound = false;
        let encFound = false;
        let artFound = false;
        let burFound = false;
        let batFound = false;
        let marFound = false;

        // Loop through every champion in the comp
        this.champions.forEach(champion => {

            // Add poke score of each championg to the total poke score
            pScore += champion.teamcomp.Poke;

            // Check for warden (S tier)
            if (champion.tags[0] === 'war' && warFound === false) {
                pScore += 20;
                warFound = true;
            }
            if (champion.tags[1] === 'war' && warFound === false) {
                pScore += 10;
                warFound = true;
            }
            // Check for catcher (A tier)
            if (champion.tags[0] === 'cat' && catFound === false) {
                pScore += 10;
                catFound = true;
            }
            if (champion.tags[1] === 'cat' && catFound === false) {
                pScore += 5;
                catFound = true;
            }

            // Check for enchanter (S tier)
            if (champion.tags[0] === 'enc' && encFound === false) {
                pScore += 20;
                encFound = true;
            }
            if (champion.tags[1] === 'enc' && encFound === false) {
                pScore += 10;
                encFound = true;
            }

            // Check for artillery (S tier)
            if (champion.tags[0] === 'art' && artFound === false) {
                pScore += 20;
                artFound = true;
            }
            if (champion.tags[1] === 'art' && artFound === false) {
                pScore += 10;
                artFound = true;
            }

            // Check for burst (A tier)
            if (champion.tags[0] === 'bur' && burFound === false) {
                pScore += 10;
                burFound = true;
            }
            if (champion.tags[1] === 'bur' && burFound === false) {
                pScore += 5;
                burFound = true;
            }

            // Check for battle mage (A tier)
            if (champion.tags[0] === 'bat' && batFound === false) {
                pScore += 10;
                burFound = true;
            }
            if (champion.tags[1] === 'bat' && batFound === false) {
                pScore += 5;
                burFound = true;
            }

            // Check for marksman (A tier)
            if (champion.tags[0] === 'mar' && marFound === false) {
                pScore += 10;
                marFound = true;
            }
        });
        this.poke = pScore;
    }

    splitScore() {

        // Variables Declaration 
        let sScore = 0;
        let assFound = false;
        let skiFound = false;
        let jugFound = false;
        let warFound = false;
        let encFound = false;
        let marFound = false;

        // Loop through every champions in the comp
        this.champions.forEach(champion => {

            // Add the split score of each champion to the total split score
            sScore += champion.teamcomp.Split;

            // check for assasin (A tier)
            if (champion.tags[0] === 'ass' && assFound === false) {
                sScore += 10;
                assFound = true;
            }
            if (champion.tags[1] === 'ass' && assFound === false) {
                sScore += 5;
                assFound = true;
            }

            // check for skimisher (S tier)
            if (champion.tags[0] === 'ski' && skiFound === false) {
                sScore += 20;
                skiFound = true;
            }
            if (champion.tags[1] === 'ski' && skiFound === false) {
                sScore += 10;
                skiFound = true;
            }

            // check for juggernaut (S tier)
            if (champion.tags[0] === 'jug' && jugFound === false) {
                sScore += 20;
                jugFound = true;
            }
            if (champion.tags[1] === 'jug' && jugFound === false) {
                sScore += 10;
                jugFound = true;
            }

            // check for warden (A tier)
            if (champion.tags[0] === 'war' && warFound === false) {
                sScore += 10;
                warFound = true;
            }
            if (champion.tags[1] === 'war' && warFound === false) {
                sScore += 5;
                warFound = true;
            }

            // check for enchanter (A tier)
            if (champion.tags[0] === 'enc' && encFound === false) {
                sScore += 10;
                encFound = true;
            }
            if (champion.tags[1] === 'enc' && encFound === false) {
                sScore += 5;
                encFound = true;
            }

            // check for marksman (A tier)
            if (champion.tags[0] === 'mar' && marFound === false) {
                sScore += 10;
                marFound = true;
            }
        });
        this.split = sScore;
    }

}

module.exports = { Champion, TeamComp };