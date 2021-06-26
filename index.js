
var modules = [];


if (!String.prototype.trim) {
    String.prototype.trim = function () {
        return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
    };
}


function loadModules() {
    return new Promise(async (resolve, reject) => {
        const response = await fetch("modules");
        
        if (response.status > 199 && response.status < 300) {
            (await response.text()).split("\n").forEach(module => {
                modules.push(module.trim());
            });
        } else {
            out.innerHTML = "An error occurred!";
            out.setAttribute("error", "");
            check = () => { };
        }
    });
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
