
var modules = [];


if (!String.prototype.trim) {
    String.prototype.trim = function () {
        return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
    };
}


function share() {
    if (navigator.share) {
        navigator.share({

        }).then(() => {
            alert("Thanks for sharing!");
        }).catch(() => {
            alert("Something went wrong! Maybe your browser doesn't support share...");
        });
    } else {
        document.getElementById("twitter-feedback").click();
    }
}


function loadModules() {
    var x = new XMLHttpRequest();

    x.onreadystatechange = function () {
        const out = document.getElementById("output");

        if (x.readyState == x.DONE) {
            if (x.status > 199 && x.status < 300) {
                x.responseText.split("\n").forEach(module => {
                    modules.push(module.trim());
                });
            } else {
                out.innerHTML = "An error occurred!";
                out.setAttribute("error", "");
                check = () => { };
            }
        }
    }

    x.open("GET", "modules");
    x.send();
}

loadModules();

function check(input) {
    const module = input.value.trim().toLowerCase();
    const out = document.getElementById("output");

    if (modules.includes(module)) {
        out.innerHTML = "'" + module + "' is a built-in module!";
        out.setAttribute("success", "");
        out.removeAttribute("error");
    } else {
        out.innerHTML = "'" + module + "' is not a built-in module!";
        out.setAttribute("error", "");
        out.removeAttribute("success");
    }
}
