// Get game title from active page
const gameTitleElement = document.querySelector('.apphub_AppName');

if (gameTitleElement) { 
    const gameTitle = gameTitleElement.innerText;

    const buttonBox = document.createElement ('div');
    buttonBox.className = 'buttonBox';
    
    // Websites list
    const SearchSites = [
    { name: "Fitgirl",    url: `https://fitgirl-repacks.site/?s=${gameTitle}`, icon:'icons/fitgirl.jpg'},
    { name: "Dodi",       url: `https://dodi-repacks.site/?s=${gameTitle}`, icon:'icons/dodi.png' },
    { name: "Online-fix", url: `https://online-fix.me/index.php?do=search&subaction=search&story=${gameTitle}`, icon:'icons/oflogo.gif'},
    { name: "Steamrip",   url: `https://steamrip.com/?s=${gameTitle}`, icon:'icons/steamrip.png'}
    ];


    //Create Buttons
    SearchSites.forEach(site => {
        const button = document.createElement('a');
        button.href = site.url;
        button.target = "_blank";
        button.className = 'button';

        const icon = document.createElement('img');
        icon.src = chrome.runtime.getURL(site.icon);

        button.prepend(icon);
        buttonBox.appendChild(button);
    });

    // Puts the buttons below the game title
    gameTitleElement.parentElement.appendChild(buttonBox);
}
