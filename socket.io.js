let locationUrl = "://143.178.215.190:3001/socket.io/socket.io.js"
const script = document.createElement('script');

if (location.href.startsWith("https")) {
    location.replace(location.href.replace("https", "http"));
    script.src = "https" + locationUrl;
} else {
    script.src = "http" + locationUrl.replace("3001", "3000");
}
// Append to the `head` element
document.head.appendChild(script);

script.addEventListener('load', ()=> {
    const script = document.createElement('script');
    script.src = "sockety.js";
    document.head.appendChild(script);

    const script1 = document.createElement('script');
    script1.src = "size.js";
    document.head.appendChild(script1);
});