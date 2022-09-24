export function renderVillian(villian) {
    const li = document.createElement('li');
    li.classList.add('villian', 'card');

    const hp = document.createElement('span');
    hp.classList.add('stat');
    hp.textContent = villian.hp;

    const image = document.createElement('img');
    image.alt = villian.type;
    if (villian.hp < 1) {
        image.src = `assets/other/dead.png`;
    } else {
        image.src = `assets/villians/${villian.type}.png`;
    }

    const name = document.createElement('span');
    name.classList.add('name');
    name.textContent = villian.name;

    li.append(hp, image, name);

    return li;
}
