function switchCategory($key) {
    let text = document.getElementsByClassName('nav-link');
    text[3].id = ''
    text[4].id = ''
    text[5].id = ''
    text[6].id = ''
    text[$key].id = 'active'
    console.log(text[3].id);
}