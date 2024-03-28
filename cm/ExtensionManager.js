export {
    ExtensionManager,
}

import CodeMirrorThemes from "./CodeMirrorThemes.js"
import CodeMirrorLanguages from "./CodeMirrorLanguages.js"
import LanguageConfigurations from "./LanguageConfigurations.js"

import {
    Compartment,
} from "/home/kdog3682/2023/cm.esm.js"

function gob(ref, key) {
    if (ref == null) {
        
    }
    else if (typeof ref !== 'object') {
    }
    else if (ref[key] == null) {
        
    }
    else {
        return ref[key]
    }
}

const setters = {
    editable(boolean) {
        return EditorState.editable.of(boolean)
    },
    readOnly(boolean) {
        return EditorState.readOnly.of(boolean)
    },
    tabSize(int) {
        return EditorState.tabSize.of(int)
    },
    theme(str) {
        return CodeMirrorThemes[str]
    },
    lineNumbers(bool) {
        if (bool) {
            return lineNumbers()
        } else {
            return []
        }
    },
    language(str) {
        return CodeMirrorLanguages[str]()
    },
    inputHandler(fn) {
        if (fn == null) {
            return []
        }
        return EditorView.inputHandler.of(fn)
    }
}

class ExtensionManager {
    constructor() {
        this.confs = {}
    }
    get themes() {
        return Object.keys(CodeMirrorThemes)
    }
    get languages() {
        return Object.keys(CodeMirrorLanguages)
    }
    setup(x) {
        const config = typeof x === 'string' ? LanguageConfigurations[x] : x
        const extensions = []
        for (const [k, v] of Object.entries(config)) {
            const setter = gob(setters, k)
            const extensionValue = setter(v)
            const conf = new Compartment
            extensions.push(conf.of(extensionValue))
        }
        this.config = config
        return extensions
    }
    reconfigure(view, k, v) {
        const setter = gob(setters, k)
        const conf = this.confs[k]
        const value = setter(v)
        const effects = conf.reconfigure(value)
        return view.dispatch({effects})
    }
    deconfigure(view, k) {
        const conf = gob(this.confs, k)
        const effects = conf.reconfigure([])
        return view.dispatch({effects})
    }
}

