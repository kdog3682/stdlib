import { EditorState, syntaxTree, javascript } from "/home/kdog3682/2023/cm.esm.js"
export {
    generate,
}


function generate(text) {
    const fallback = "console.log('hello world')"
    const doc = text || fallback
    const state = EditorState.create({
        doc,
        selection: {
            anchor: 3,
            head: 5,
        },
        extensions: [
            javascript()
        ]
    })

    const tree = syntaxTree(state)
    const pos = state.selection.main.head
    const node = tree.resolveInner(pos)
    const getText = (node) => doc.slice(node.from, node.to)
    return {
        node,
        getText,
        state
    }
}
