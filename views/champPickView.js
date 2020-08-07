export const openChampsBoard = () => {
    document.querySelector('.champ-pick-interface').style.display = 'block';
    document.querySelector('html').style.overflowY = 'hidden';
}

export const closeChampBoard = () => {
    document.querySelector('.champ-pick-interface').style.display = 'none';
    document.querySelector('html').style.overflowY = 'visible';
}