const wrapper = document.querySelector(".wrapper"),
qrInput = wrapper.querySelector(".form input"),
generateBtn = wrapper.querySelector(".form button"),
downloadBtn = wrapper.querySelector(".form a"),
qrImg = wrapper.querySelector(".qr-code img");
add= document.getElementById('linkd')

let preValue;
downloadBtn.addEventListener("click", () => {
    let qrValue = qrInput.value.trim();
    if(!qrValue || preValue === qrValue) return;
    preValue = qrValue;
    downloadBtn.innerText = "Downloading QR Code...";
    downloadBtn.href = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${qrValue}`;
    add.setAttribute("target","_blank");
   add.setAttribute("Download",'');
    downloadBtn.addEventListener("load", () => {
        wrapper.classList.add("active");
        downloadBtn.innerText = "Download QR Code";
    });
});
generateBtn.addEventListener("click", () => {
    let qrValue = qrInput.value.trim();
    if(!qrValue || preValue === qrValue) return;
    preValue = qrValue;
    generateBtn.innerText = "Generating QR Code...";
    qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${qrValue}`;
    downloadBtn.href = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${qrValue}`;
   add.setAttribute("target","_blank");
   add.setAttribute("Download",'');
    qrImg.addEventListener("load", () => {
        wrapper.classList.add("active");
        generateBtn.innerText = "Generate QR Code";
    });
});

qrInput.addEventListener("keyup", () => {
    if(!qrInput.value.trim()) {
        wrapper.classList.remove("active");
        preValue = "";
    }
});