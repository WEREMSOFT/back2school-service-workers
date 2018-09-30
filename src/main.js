// ################# EVENT LOOP ####################

// setTimeout(() => console.log('timeout done'), 0);
// console.log('1');

// let promise = new Promise((resolve, reject) => {
//     let promise2 = new Promise((resolve, reject) => resolve(2));
//     promise2.then(cadorna => {
//         console.log('CADORNA2', cadorna);
//         resolve(1);
//     });
    
// });
// promise.then(cadorna => console.log('promise ', cadorna));
// console.log('2');

// ################# SERVICE WORKER ####################

// if(navigator.serviceWorker) {
//     document.write('<h1>SERVICE WORKER SUPPORTED!!</h1>');
// } else {
//     document.write('<h1>SERVICE WORKER NOT SUPPORTED!!</h1>');
// }

// window.onRegisterServiceWorkerClick = () => {
//     navigator.serviceWorker
//         .register('sw_cache_pages.js')
//         .then(reg => console.log('service worker registered!!', reg));
// }




// var workerFor = new Worker('sw_expensive_calcullation.js');

// workerFor.addEventListener('message', evt => {
//     debugger;
//     console.log('evento: ', evt.data);
// })