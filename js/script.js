// wait for page to load
document.addEventListener("DOMContentLoaded", function(_event) {

    // add view source button
    document.body.innerHTML += `<div id="viewSource"><a id="viewSourceHyperlink">View Source On GitHub</a></div>`
    const viewSourceButton = document.getElementById('viewSourceHyperlink');
    const ghUser = window.location.host.split('.')[0];
    const ghProject = window.location.pathname.split('/').filter(e => e)[0]
    viewSourceButton.href = `https://github.com/${ghUser}/${ghProject}`

});