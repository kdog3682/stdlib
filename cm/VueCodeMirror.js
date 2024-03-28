export { VueCodeMirror }

import {LocalStorage} from "/home/kdog3682/2024-javascript/js-toolkit/LocalStorage.js"
import {Buffers} from "/home/kdog3682/2024-javascript/stdlib/cm/Buffers.js"
import {ExtensionManager} from "/home/kdog3682/2024-javascript/stdlib/cm/ExtensionManager.js"

import {
    EditorView,
    EditorState,
} from "/home/kdog3682/2023/cm.esm.js"

class VueCodeMirror {
    constructor(vue) {
        this.extensionManager = new ExtensionManager()
        this.localStorage = new LocalStorage({name: 'VueCodeMirror'})
        this.history = this.LocalStorage.get('buffers') || {}

        const parent = vue.$refs.codemirror
        const bufferStates = vue.buffers.map((x) => this.create(x))
        const primary = bufferStates[0]
        const view = new EditorView({parent, state: primary.state})
        view.focus()

        this.buffers = new Buffers(view, bufferStates)
        this.buffers.buffer = primary.name
        this.vue = vue
    }
    create(buffer, template) {
        const docJson = this.history[buffer] || docFromTemplate(template)
        const {language, name} = getFileInfo(buffer)
        const extensions = this.extensionManager.setup(language)
        const state = EditorState.create({...docJson, extensions})
        return {
            name,
            state,
        }
    }
}

const methods = {
    toggleTheme() {
        if (!this.theme) {
            this.theme = this.vcm.extensionManager.config.theme
        }
        const themes = this.vcm.extensionManager.themes
        this.theme = modularIncrement(themes, this.theme)
        const view = this.vcm.buffers.view
        this.vcm.extensionManager.reconfigure(view, 'theme', this.theme)
    }
}
async function mounted() {
    const buffers = [
        "script.js",
        "style.css",
        "index.html",
        "snippets.json",
    ]

    this.buffers = buffers
    this.vcm = new VueCodeMirror(this)

    const callback = (buffer) => {
        this.vcm.buffers.open(buffer)
    }

    await waterfall3(buffers, { callback, delay: 1500 })
}
