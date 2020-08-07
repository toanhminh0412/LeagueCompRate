// update interface whenever a champ is banned
export const banInterfaceUpdate = (champion, team, order) => {
    document.querySelector(`#${team}-${order}-ban`).src = `img/champions/${champion.img}`;
}

// update interface whenever a champ is picked
export const pickInterfaceUpdate = (champion, team, order) => {
    // update pick image
    document.querySelector(`.${team}-team-picks .${order}-pick`).style.backgroundImage = `url(img/champions/${champion.img})`;

    // update analysis
    document.querySelector('.champ-pic img').src = `img/splash/${champion.img}`;
    document.querySelector('.teamfight-stat').innerText = `${champion.teamcomp.Teamfight}`;
    document.querySelector('.pick-stat').innerText = `${champion.teamcomp.Pick}`;
    document.querySelector('.hypercarry-stat').innerText = `${champion.teamcomp.Hyper}`;
    document.querySelector('.poke-stat').innerText = `${champion.teamcomp.Poke}`;
    document.querySelector('.split-stat').innerText = `${champion.teamcomp.Split}`;
}

// update teamcomp score when a champ is picked
export const updateTeamcompScore = (team, teamfight, pick, hyper, poke, split) => {

    document.querySelector(`.${team}-stats .teamfight span`).innerText = teamfight;
    document.querySelector(`.${team}-stats .pick span`).innerText = pick;
    document.querySelector(`.${team}-stats .hypercarry span`).innerText = hyper;
    document.querySelector(`.${team}-stats .poke span`).innerText = poke;
    document.querySelector(`.${team}-stats .split span`).innerText = split;

}

export const updateTeamWinRate = (blueWinRate, redWinRate) => {

    const recText = document.querySelectorAll('.rec-text');
    for (let cur of recText) {
        cur.innerText = 'WinRate'
    }
    const champImg = document.querySelectorAll('.champs-img');
    const champImgArr = Array.from(champImg);
    champImgArr.forEach(cur => {
        cur.classList.add('hidden');
    })
    document.querySelector('.blue-win-rate').classList.remove('hidden');
    document.querySelector('.red-win-rate').classList.remove('hidden');
    document.querySelector('.blue-win-rate').innerText = `${blueWinRate}%`;
    document.querySelector('.red-win-rate').innerText = `${redWinRate}%`;
}