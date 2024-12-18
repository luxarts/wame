const numberElem = document.getElementById('number');
const generateElem = document.getElementById('generate');
const linkElem = document.getElementById('link');

generateElem.addEventListener('click', async () => {
    const number = numberElem.value;
    const message = document.getElementById('message').value;

    let link = "https://wa.me/"+number

    if(message !== ""){
        link += "?text="+message
    }

    setLink(link);
    showResult();
});

numberElem.addEventListener('input', () => {
    if(numberElem.checkValidity() && numberElem.value !== ""){
        generateElem.disabled = false;
    } else {
        generateElem.disabled = true;
    }
});
const setLink = (link) => {
    linkElem.href = link;
    linkElem.innerHTML = link;
};

const showResult = () => {
    result.classList.remove('hide');
};

document.getElementById('share').addEventListener('click', async () => {
    const shareData = {
        title: "WhatsApp link",
        text: "Mensaje",
        url: linkElem.href
    };

    try {
        await navigator.share(shareData);
    } catch(err){
        console.error(err);
    }
});

document.getElementById('copy').addEventListener('click', async () => {
    try {
        await navigator.clipboard.writeText(linkElem.href);
        M.toast({html: 'Link copied to clipboard'});
    } catch(err){
        console.error(err);
    }
});