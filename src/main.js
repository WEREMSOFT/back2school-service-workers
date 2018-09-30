if(navigator.serviceWorker) {
    document.write('<h1>SERVICE WORKER SUPPORTED!!</h1>');
} else {
    document.write('<h1>SERVICE WORKER NOT SUPPORTED!!</h1>');
}

window.onRegisterServiceWorkerClick = () => {
    navigator.serviceWorker
        .register('sw_cache_pages.js')
        .then(reg => console.log('service worker registered!!', reg));
}


// var workerFor = new Worker('sw_expensive_calcullation.js');

// workerFor.addEventListener('message', evt => {
//     debugger;
//     console.log('evento: ', evt.data);
// })