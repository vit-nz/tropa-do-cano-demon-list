function showLevel(title, creator, verifier, points, levelId, password, videoId, players) {
    // Atualiza os elementos da seção central com os novos dados
    document.getElementById('level-title').textContent = title;
    document.getElementById('level-creator').textContent = creator;
    document.getElementById('level-verifier').textContent = verifier;
    document.getElementById('level-points').textContent = points;
    document.getElementById('level-id').textContent = levelId;
    document.getElementById('level-password').textContent = password;
    document.getElementById('level-video').src = `https://www.youtube.com/embed/${videoId}`;

    // Atualiza a lista de jogadores que completaram o nível
    const recordsList = document.getElementById('level-records');
    recordsList.innerHTML = ''; // Limpa a lista atual
    if (players.length === 0) {
        const li = document.createElement('li');
        li.textContent = 'Nenhum jogador completou este nível ainda.';
        recordsList.appendChild(li);
    } else {
        players.forEach(player => {
            const li = document.createElement('li');
            li.textContent = player;
            recordsList.appendChild(li);
        });
    }

    // Remove a classe 'selected' de todos os níveis
    const levels = document.querySelectorAll('.level');
    levels.forEach(level => level.classList.remove('selected'));

    // Adiciona a classe 'selected' ao nível clicado
    const clickedLevel = event.currentTarget;
    clickedLevel.classList.add('selected');
}