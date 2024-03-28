export {
    Lezer,
}

class Lezer {
    constructor(view) {
        const state = view.state
        this.tree = syntaxTree(state)
        this.text = state.doc.toString()
        this.pos = state.selection.main.head
        this.getText = (node) => this.text.slice(node.from, node.to)
        this.node = this.tree.resolveInner(this.pos, -1)
    }
    query(s) {
        const fn = parseQuery(s)
    }
}
