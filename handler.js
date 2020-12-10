let url = new URL(window.location);
let searchParams = new URLSearchParams(url.search);
let redirection = "register.html";
if (searchParams.has("link")) {
    // Redirect to default local gateway provided by IPFS Desktop.
    let link = new URL(searchParams.get("link"));
    let matches = link.pathname.match(/([a-zA-Z0-9]*)(.*)/);
    if (matches)
        redirection = `http://${matches[1]}.ipfs.localhost:8080${matches[2]}${link.search}${link.hash}`;
}
location.href = redirection;
