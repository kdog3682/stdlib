name: test

v-list :value = buffers
    template v-slot:default = slot
        v-buffer :value = slot
------------------------------------------------------------

name: v-buffer

flex
    v-icon :value = language
    span {value}

computed language() {
    return getFiletype(this.value)
}

------------------------------------------------------------

name: file-explorer

v-search-box
    @result(buffer) {
        
    }

v-list :value = buffers
    template v-slot:default = slot
        v-buffer :value = slot.value

------------------------------------------------------------

name: vcm-editor
    
div ref = codemirror

------------------------------------------------------------

name: sandbox
    
container
    v-iframe :value = value

------------------------------------------------------------

name: main

container
    file-explorer ref = explorer
    vcm-editor ref = editor
    sandbox :value = html

function pub() {
    const ref = this.vcm.buffers.toJSON()
    const {html, css, javascript} = ref
    const a = xmlString({ tag: 'style', value: css })
    const b = xmlString({ tag: 'script', value: javascript, attrs })
    return join(a, html, b)
}

function publish() {
    const ref = this.vcm.buffers.toJSON()
    const {html, css, javascript} = ref

    const lezer = new Lezer(html)
    if (css) {
        const cssNode = lezer.query('head > style | document > style')
        if (cssNode) {
            lezer.replaceNode(cssNode, (node) => {
                return join(lezer.getText(node.firstChild), css)
            })
        } else {
            const head = lezer.query('head')
            if (head) {
                lezer(head)
            } else {
                
            }
        }
    }

    if (javascript) {
        const s = xmlString(javascript)
        const body = lezer.query('Body')
        lezer.insertNodeAfter(body.lastChild, s)
    }
}
