# Barely-sha256

SHA 256 implementation from scratch for Nodejs and **Nodejs like** runtime environments.

This implementation is done with the help of chatGPT, I do not understand how it works, I do not know if it efficient but **IT WORKS!!**.

![enter image description here](https://media1.tenor.com/m/sH_KNNF07EoAAAAC/honest-word-its-honest-work.gif)

Usage: 

    const { sha256 } = require('barely-sha256');

    const hash = sha256("helloworld");
    console.log(hash);
Output: 936a185caaa266bb9cbe981e9e05cb78cd732b0b3280eb944412bb6f8f8f07af

License: GPL-v3.0