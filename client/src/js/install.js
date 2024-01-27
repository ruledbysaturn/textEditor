const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
    butInstall.style.display = 'block';
    
    butInstall.addEventListener('click', async () => {
        const promptEvent = event;
        await promptEvent.prompt();
        const choiceResult = await promptEvent.userChoice;

        if (choiceResult.outcome === 'accepted') {
            console.log('User accepted install prompt');
        } else {
            console.log('User dismissed install prompt');
        }

        butInstall.style.display = 'none';
    })
});

// TODO: Implement a click event handler on the `butInstall` element


// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
    console.log('👍', 'appinstalled', event);
});
