
function searchSongs() {
    let input = document.getElementById('searchBar').value.toLowerCase();
    let ul = document.querySelector('#songList ul');
    let li = ul.getElementsByTagName('li');

    for (let i = 0; i < li.length; i++) {
        let a = li[i].getElementsByTagName("a")[0];
        let textValue = a.textContent || a.innerText;
        li[i].style.display = textValue.toLowerCase().indexOf(input) > -1 ? "" : "none";
    }
}
