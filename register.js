window.addEventListener("DOMContentLoaded", function() {
    document.querySelector("button").addEventListener("click", function() {
        navigator.registerProtocolHandler("ipfs", "./handler.html?link=%s",
                                          "dummy_title_for_backward_compat");
    });
});
