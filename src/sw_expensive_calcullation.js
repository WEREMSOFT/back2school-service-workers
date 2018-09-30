let x = 0;
for (var i = 0; i < 20000000; i++){
    x = x + i;
}

postMessage(x);