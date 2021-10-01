function proceed() {
    const oye = document.getElementsByTagName('input')[0].value;
    const hoye = document.getElementsByTagName('input')[1].value;

    window.alert(oye + "  " + hoye);

}

window.onload = () => {
    window.alert("welcome")
    console.log(window.location.href );
    console.log(window.location.hostname );
    console.log(window.location.pathname );
    console.log(window.location.protocol); 
}
