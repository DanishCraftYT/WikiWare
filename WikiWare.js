class WikiContainer extends HTMLElement {
    constructor() {
        super();
    }
}

class WikiPage extends HTMLElement {
    constructor() {
        super();
    }
}

class WikiSection extends HTMLElement {
    constructor() {
        super();
        if (this.getAttribute("nobottomline") == "true") {
            return;
        }
        this.innerHTML += "<hr>";
    }
}

class WikiSubSection extends HTMLElement {
    constructor() {
        super();
    }
}

class WikiTableContent extends HTMLElement {
    constructor() {
        super();
        this.insertAdjacentHTML("afterbegin", "<h2>Table Of Contents</h2><hr>");
    }
}

class WikiInfoContent extends HTMLElement {
    constructor() {
        super();
        this.insertAdjacentHTML("afterbegin", "<h2>Info</h2><hr>");
    }
}

class WikiContentSection extends HTMLElement {
    constructor() {
        super();
        if (this.getAttribute("nobottomline") == "true") {
            return;
        }
        this.insertAdjacentHTML("afterend", "<hr>");
    }
}

class WikiHeader extends HTMLElement {
    constructor() {
        super();
    }
}

class WikiHeaderSection extends HTMLElement {
    constructor() {
        super();
    }
}

class WikiDetails extends HTMLElement {
    constructor() {
        super();
        this.insertAdjacentHTML("afterbegin", `<button><i class=\"arrow right\"></i> ${this.getAttribute("text")}</button>`);
        this.addEventListener("click", this.handleDetailsBox);
    }

    handleDetailsBox() {
        let wikiDetailsBox = this.getElementsByTagName("wiki-detailsbox")[0];
        // determines if the wiki details box should be shown or not. it also determines the rotation of the arrow on the button.
        if (wikiDetailsBox.style.display == "block") {
            wikiDetailsBox.style.display = "none";
            this.getElementsByTagName("button")[0].getElementsByTagName("i")[0].className = "arrow right";
        }
        else {
            wikiDetailsBox.style.display = "block";
            this.getElementsByTagName("button")[0].getElementsByTagName("i")[0].className = "arrow down";
        }
    }
}

class WikiDetailsBox extends HTMLElement {
    constructor() {
        super();
    }
}

customElements.define("wiki-container", WikiContainer);
customElements.define("wiki-page", WikiPage);
customElements.define("wiki-section", WikiSection);
customElements.define("wiki-subsection", WikiSubSection);

customElements.define("wiki-tablecontent", WikiTableContent);
customElements.define("wiki-infocontent", WikiInfoContent);
customElements.define("wiki-contentsection", WikiContentSection);

customElements.define("wiki-header", WikiHeader);
customElements.define("wiki-headersection", WikiHeaderSection);

customElements.define("wiki-details", WikiDetails);
customElements.define("wiki-detailsbox", WikiDetailsBox);
