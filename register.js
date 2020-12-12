// This handler performs an extra redirect that can eventually be
// removed. See https://github.com/ipfs/go-ipfs/issues/7686
const handler_url = "https://bafkreihnpo5zt7qt3lvmk4zk2opran7ybbe3gfp5ruqf5iirdyxaxqvwtu.ipfs.dweb.link/#%s";

window.addEventListener("DOMContentLoaded", function() {
    document.querySelector("button").addEventListener("click", function() {
        navigator.registerProtocolHandler("ipfs", handler_url,
                                          "dummy_title_for_backward_compat");
    });
});
