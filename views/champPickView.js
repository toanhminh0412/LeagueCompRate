export const openChampsBoard = () => {
    document.querySelector('.champ-pick-interface').style.display = 'block';
    document.querySelector('html').style.overflowY = 'hidden';
}

export const closeChampBoard = () => {
    document.querySelector('.champ-pick-interface').style.display = 'none';
    document.querySelector('html').style.overflowY = 'visible';
}

export const recommendInterface = (champions, team) => {
    document.querySelector(`#${team}-first-rec-pick img`).src = `./img/tiles/${champions[0].img}`;
    document.querySelector(`#${team}-second-rec-pick img`).src = `./img/tiles/${champions[1].img}`;
    document.querySelector(`#${team}-third-rec-pick img`).src = `./img/tiles/${champions[2].img}`;
}