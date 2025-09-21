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

class WikiTableContentSection extends HTMLElement {
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

customElements.define("wiki-container", WikiContainer);
customElements.define("wiki-page", WikiPage);
customElements.define("wiki-section", WikiSection);
customElements.define("wiki-subsection", WikiSubSection);
customElements.define("wiki-tablecontent", WikiTableContent);
customElements.define("wiki-tablecontentsection", WikiTableContentSection);
customElements.define("wiki-header", WikiHeader);
customElements.define("wiki-headersection", WikiHeaderSection);
