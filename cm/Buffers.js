export {
    Buffers,
}
class Buffers {
    constructor(view, bufferStates) {
        this.view = view
        this.cache = new Cache()

        for (const {name, state} of bufferStates) {
            this.cache.set(name, state)
        }
    }
    toJSON() {
        this.save(this.buffer)
        const entries = this.cache.entries
        const reducer = ([name, state]) => {
            const info = getFileInfo(name)   /* name | language */
            const stateInfo = state.toJSON() /* doc | selection */
            return {
                ...info,
                ...stateInfo,
            }
        }
        const data = reduce(entries, reducer)
        return data
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
