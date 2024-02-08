document.getElementById('startRecord').onclick = startRecording;
document.getElementById('stopRecord').onclick = stopRecording;

let mediaRecorder;
let audioChunks = [];

function startRecording() {
    navigator.mediaDevices.getUserMedia({ audio: true })
        .then(stream => {
            mediaRecorder = new MediaRecorder(stream);
            audioChunks = [];
            mediaRecorder.ondataavailable = event => {
                audioChunks.push(event.data);
            };
            mediaRecorder.start();

            document.getElementById('startRecord').disabled = true;
            document.getElementById('stopRecord').disabled = false;
        });
}

function stopRecording() {
    mediaRecorder.stop();
    document.getElementById('startRecord').disabled = false;
    document.getElementById('stopRecord').disabled = true;
    mediaRecorder.onstop = () => {
        const audioBlob = new Blob(audioChunks, { type: 'audio/wav' });
        const audioUrl = URL.createObjectURL(audioBlob);
        const downloadLink = document.getElementById('downloadLink');
        downloadLink.href = audioUrl;
        downloadLink.download = 'recorded_audio.wav';
        downloadLink.style.display = 'block';
        var fd=new FormData();
        fd.append("file",audioBlob, downloadLink.download);
        var xhr=new XMLHttpRequest();
        xhr.open("POST","https://api.wit.ai/speech",true);
        
xhr.setRequestHeader("Authorization", "Bearer WN27BV76PBRPKC3MLZIWFYRJPEZEFXEJ");

        xhr.setRequestHeader('Access-Control-Allow-Origin', '*');
        xhr.setRequestHeader("Access-Control-Allow-Methods","PUT, GET, POST, DELETE, OPTIONS");
        xhr.setRequestHeader("Access-Control-Allow-Headers","Special-Request-Header, Origin, X-Requested-With, Content-Type, Accept, Authorization");
        xhr.setRequestHeader('Access-Control-Allow-Credentials', 'true');
        xhr.setRequestHeader('Access-Control-Max-Age', '240');
        xhr.send(fd);
    };
}
