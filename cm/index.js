import {ExtensionManager} from "/home/kdog3682/2024-javascript/stdlib/cm/ExtensionManager.js"
const extensions = manager.setup(extensionConfig)
const view = LoremView()
const buffers = new Buffers(view, bufferStates)

class VueCodeMirror {
    constructor(vue) {
        this.localStorage = new LocalStorage({name: 'VueCodeMirror'})
        this.history = this.LocalStorage.get('buffers') || {}

        const parent = vue.$refs.codemirror
        const bufferStates = vue.buffers.map((x) => this.create(x))
        const state = bufferStates[0].state
        const view = new EditorView({parent, state})
        this.buffers = new Buffers(view, bufferStates)
        this.vue = vue
    }
    create(buffer, template) {
        const docJson = this.history[buffer] || docFromTemplate(template)
        const bufferInfo = getBufferInfo(buffer)
        const extensions = 
        const state = EditorState.fromJSON(json, {extensions})

    }
}

class Buffers {
    constructor(view, bufferStates) {
        this.view = view
        this.cache = new Cache()

        for (const {name, state} of bufferStates) {
            this.cache.set(name, state)
        }
        this.buffer = this.cache[this.cache.keys[0]]
    }

    create(buffer, state) {
        if (buffer == this.buffer) {
            return
        }
        this.save(this.buffer)
        this.buffer = buffer
        this.view.setState(state)
    }
    save(buffer) {
        this.cache.set(buffer, this.view.state)
    }
    open(buffer) {
        if (buffer == this.buffer) {
            return
        }

        this.save(this.buffer)
        const prevState = this.cache.get(buffer)
        this.view.setState(prevState)
        this.view.focus()
        this.buffer = buffer
        return this
    }

    prev() {
        const buffer = modularIncrement(this.cache.keys, this.buffer, -1)
        return this.open(buffer)
    }
    next() {
        const buffer = modularIncrement(this.cache.keys, this.buffer, 1)
        return this.open(buffer)
    }
}
