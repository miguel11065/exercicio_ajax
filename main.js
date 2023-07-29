function btnConfirm() {
    const nomePerfil = document.querySelector('#nome-perfil');
    perfilGithub = nomePerfil.value;
    nomePerfil.value = '';

    atualizarPerfil()
}

function atualizarPerfil() {
    const avatarElement = document.querySelector('#avatar');
    const nomeElement = document.querySelector('#name');
    const usernameElement = document.querySelector('#username');
    const reposElement = document.querySelector('#repository');
    const followersElement = document.querySelector('#fallowers');
    const followingElement = document.querySelector('#fallowing');
    const linkElement = document.querySelector('#link');


fetch(`https://api.github.com/users/${perfilGithub}`)
    .then(function(resposta) {
        return resposta.json();
    })
    .then(function(json) {
        nomeElement.innerHTML = json.name;
        usernameElement.innerHTML = json.login;
        avatarElement.src = json.avatar_url;
        followersElement.innerHTML = json.followers;
        followingElement.innerHTML = json.following;
        linkElement.href = json.html_url;
        reposElement.innerHTML = json.public_repos;
    })
}

    document.addEventListener('DOMContentLoaded', function() {
    atualizarPerfil()
})