import {
    tags as t,
    HighlightStyle,
    EditorView,
    syntaxHighlighting,
} from "/home/kdog3682/2023/cm.esm.js"

function createBasicDark() {
    const base00 = '#2E3235',
      base01 = '#DDDDDD',
      base02 = '#B9D2FF',
      base03 = '#b0b0b0',
      base04 = '#d0d0d0',
      base05 = '#e0e0e0',
      base06 = '#808080',
      base07 = '#000000',
      base08 = '#A54543',
      base09 = '#fc6d24',
      base0A = '#fda331',
      base0B = '#8abeb7',
      base0C = '#b5bd68',
      base0D = '#6fb3d2',
      base0E = '#cc99cc',
      base0F = '#6987AF'
    
    const invalid = base09,
      darkBackground = '#292d30',
      highlightBackground = base02 + '30',
      background = base00,
      tooltipBackground = base01,
      selection = '#202325',
      cursor = base01
    
    const themeObject = {
        '&': {
          color: base01,
          backgroundColor: background
        },
    
        '.cm-content': {
          caretColor: cursor
        },
    
        '.cm-cursor, .cm-dropCursor': { borderLeftColor: cursor },
        '&.cm-focused .cm-selectionBackground, .cm-selectionBackground, .cm-content ::selection':
          { backgroundColor: selection },
    
        '.cm-panels': { backgroundColor: darkBackground, color: base03 },
        '.cm-panels.cm-panels-top': { borderBottom: '2px solid black' },
        '.cm-panels.cm-panels-bottom': { borderTop: '2px solid black' },
    
        '.cm-searchMatch': {
          backgroundColor: base02,
          outline: `1px solid ${base03}`,
          color: base07
        },
        '.cm-searchMatch.cm-searchMatch-selected': {
          backgroundColor: base05,
          color: base07
        },
    
        '.cm-activeLine': { backgroundColor: highlightBackground },
        '.cm-selectionMatch': { backgroundColor: highlightBackground },
    
        '&.cm-focused .cm-matchingBracket, &.cm-focused .cm-nonmatchingBracket': {
          outline: `1px solid ${base03}`
        },
    
        '&.cm-focused .cm-matchingBracket': {
          backgroundColor: base02,
          color: base07
        },
    
        '.cm-gutters': {
          borderRight: `1px solid #ffffff10`,
          color: base06,
          backgroundColor: darkBackground
        },
    
        '.cm-activeLineGutter': {
          backgroundColor: highlightBackground
        },
    
        '.cm-foldPlaceholder': {
          backgroundColor: 'transparent',
          border: 'none',
          color: base02
        },
    
        '.cm-tooltip': {
          border: 'none',
          backgroundColor: tooltipBackground
        },
        '.cm-tooltip .cm-tooltip-arrow:before': {
          borderTopColor: 'transparent',
          borderBottomColor: 'transparent'
        },
        '.cm-tooltip .cm-tooltip-arrow:after': {
          borderTopColor: tooltipBackground,
          borderBottomColor: tooltipBackground
        },
        '.cm-tooltip-autocomplete': {
          '& > ul > li[aria-selected]': {
            backgroundColor: highlightBackground,
            color: base03
          }
        }
      }
    
    const highlightStyle = [
      { tag: t.keyword, color: base0A },
      {
        tag: [t.name, t.deleted, t.character, t.propertyName, t.macroName],
        color: base0C
      },
      { tag: [t.variableName], color: base0D },
      { tag: [t.function(t.variableName)], color: base0A },
      { tag: [t.labelName], color: base09 },
      {
        tag: [t.color, t.constant(t.name), t.standard(t.name)],
        color: base0A
      },
      { tag: [t.definition(t.name), t.separator], color: base0E },
      { tag: [t.brace], color: base0E },
      {
        tag: [t.annotation],
        color: invalid
      },
      {
        tag: [t.number, t.changed, t.annotation, t.modifier, t.self, t.namespace],
        color: base0A
      },
      {
        tag: [t.typeName, t.className],
        color: base0D
      },
      {
        tag: [t.operator, t.operatorKeyword],
        color: base0E
      },
      {
        tag: [t.tagName],
        color: base0A
      },
      {
        tag: [t.squareBracket],
        color: base0E
      },
      {
        tag: [t.angleBracket],
        color: base0E
      },
      {
        tag: [t.attributeName],
        color: base0D
      },
      {
        tag: [t.regexp],
        color: base0A
      },
      {
        tag: [t.quote],
        color: base01
      },
      { tag: [t.string], color: base0C },
      {
        tag: t.link,
        color: base0F,
        textDecoration: 'underline',
        textUnderlinePosition: 'under'
      },
      {
        tag: [t.url, t.escape, t.special(t.string)],
        color: base0B
      },
      { tag: [t.meta], color: base08 },
      { tag: [t.comment], color: base06, fontStyle: 'italic' },
      { tag: t.monospace, color: base01 },
      { tag: t.strong, fontWeight: 'bold', color: base0A },
      { tag: t.emphasis, fontStyle: 'italic', color: base0D },
      { tag: t.strikethrough, textDecoration: 'line-through' },
      { tag: t.heading, fontWeight: 'bold', color: base01 },
      { tag: t.special(t.heading1), fontWeight: 'bold', color: base01 },
      { tag: t.heading1, fontWeight: 'bold', color: base01 },
      {
        tag: [t.heading2, t.heading3, t.heading4],
        fontWeight: 'bold',
        color: base01
      },
      {
        tag: [t.heading5, t.heading6],
        color: base01
      },
      { tag: [t.atom, t.bool, t.special(t.variableName)], color: base0B },
      {
        tag: [t.processingInstruction, t.inserted],
        color: base0B
      },
      {
        tag: [t.contentSeparator],
        color: base0D
      },
      { tag: t.invalid, color: base02, borderBottom: `1px dotted ${invalid}` }
    ]
    
    return [
        EditorView.theme(themeObject),
        syntaxHighlighting(HighlightStyle.define(highlightStyle)),
    ]
}

function createBasicLight() {
    const base00 = '#2e3440', // black
      base01 = '#3b4252', // dark grey
      base02 = '#434c5e',
      base03 = '#4c566a'
    
    const base04 = '#d8dee9', // grey
      base05 = '#e5e9f0', // off white
      base06 = '#eceff4'
    
    const base07 = '#8fbcbb', // moss green
      base08 = '#88c0d0', // ice blue
      base09 = '#81a1c1', // water blue
      base0A = '#5e81ac'
    
    const base0b = '#bf616a', // red
      base0C = '#d08770', // orange
      base0D = '#ebcb8b', // yellow
      base0E = '#a3be8c', // green
      base0F = '#b48ead'
    
    const invalid = '#d30102',
      darkBackground = base06,
      highlightBackground = darkBackground,
      background = '#ffffff',
      tooltipBackground = base05,
      selection = darkBackground,
      cursor = base01
    
    const themeObject = {
        '&': {
          color: base00,
          backgroundColor: background
        },
    
        '.cm-content': {
          caretColor: cursor
        },
    
        '.cm-cursor, .cm-dropCursor': { borderLeftColor: cursor },
        '&.cm-focused .cm-selectionBackground, .cm-selectionBackground, .cm-content ::selection':
          { backgroundColor: selection },
    
        '.cm-panels': { backgroundColor: darkBackground, color: base03 },
        '.cm-panels.cm-panels-top': { borderBottom: '2px solid black' },
        '.cm-panels.cm-panels-bottom': { borderTop: '2px solid black' },
    
        '.cm-searchMatch': {
          backgroundColor: '#72a1ff59',
          outline: `1px solid ${base03}`
        },
        '.cm-searchMatch.cm-searchMatch-selected': {
          backgroundColor: base05
        },
    
        '.cm-activeLine': { backgroundColor: highlightBackground },
        '.cm-selectionMatch': { backgroundColor: base05 },
    
        '&.cm-focused .cm-matchingBracket, &.cm-focused .cm-nonmatchingBracket': {
          outline: `1px solid ${base03}`
        },
    
        '&.cm-focused .cm-matchingBracket': {
          backgroundColor: base06
        },
    
        '.cm-gutters': {
          backgroundColor: base06,
          color: base00,
          border: 'none'
        },
    
        '.cm-activeLineGutter': {
          backgroundColor: highlightBackground
        },
    
        '.cm-foldPlaceholder': {
          backgroundColor: 'transparent',
          border: 'none',
          color: '#ddd'
        },
    
        '.cm-tooltip': {
          border: 'none',
          backgroundColor: tooltipBackground
        },
        '.cm-tooltip .cm-tooltip-arrow:before': {
          borderTopColor: 'transparent',
          borderBottomColor: 'transparent'
        },
        '.cm-tooltip .cm-tooltip-arrow:after': {
          borderTopColor: tooltipBackground,
          borderBottomColor: tooltipBackground
        },
        '.cm-tooltip-autocomplete': {
          '& > ul > li[aria-selected]': {
            backgroundColor: highlightBackground,
            color: base03
          }
        }
      }
    
    const highlightStyle = [
      { tag: t.keyword, color: base0A },
      {
        tag: [t.name, t.deleted, t.character, t.propertyName, t.macroName],
        color: base0C
      },
      { tag: [t.variableName], color: base0C },
      { tag: [t.function(t.variableName)], color: base0A },
      { tag: [t.labelName], color: base09 },
      {
        tag: [t.color, t.constant(t.name), t.standard(t.name)],
        color: base0A
      },
      { tag: [t.definition(t.name), t.separator], color: base0E },
      { tag: [t.brace], color: base07 },
      {
        tag: [t.annotation],
        color: invalid
      },
      {
        tag: [t.number, t.changed, t.annotation, t.modifier, t.self, t.namespace],
        color: base08
      },
      {
        tag: [t.typeName, t.className],
        color: base0D
      },
      {
        tag: [t.operator, t.operatorKeyword],
        color: base0E
      },
      {
        tag: [t.tagName],
        color: base0F
      },
      {
        tag: [t.squareBracket],
        color: base0b
      },
      {
        tag: [t.angleBracket],
        color: base0C
      },
      {
        tag: [t.attributeName],
        color: base0D
      },
      {
        tag: [t.regexp],
        color: base0A
      },
      {
        tag: [t.quote],
        color: base01
      },
      { tag: [t.string], color: base0C },
      {
        tag: t.link,
        color: base07,
        textDecoration: 'underline',
        textUnderlinePosition: 'under'
      },
      {
        tag: [t.url, t.escape, t.special(t.string)],
        color: base0C
      },
      { tag: [t.meta], color: base08 },
      { tag: [t.comment], color: base02, fontStyle: 'italic' },
      { tag: t.strong, fontWeight: 'bold', color: base0A },
      { tag: t.emphasis, fontStyle: 'italic', color: base0A },
      { tag: t.strikethrough, textDecoration: 'line-through' },
      { tag: t.heading, fontWeight: 'bold', color: base0A },
      { tag: t.special(t.heading1), fontWeight: 'bold', color: base0A },
      { tag: t.heading1, fontWeight: 'bold', color: base0A },
      {
        tag: [t.heading2, t.heading3, t.heading4],
        fontWeight: 'bold',
        color: base0A
      },
      {
        tag: [t.heading5, t.heading6],
        color: base0A
      },
      { tag: [t.atom, t.bool, t.special(t.variableName)], color: base0C },
      {
        tag: [t.processingInstruction, t.inserted],
        color: base07
      },
      {
        tag: [t.contentSeparator],
        color: base0D
      },
      { tag: t.invalid, color: base02, borderBottom: `1px dotted ${invalid}` }
    ]
    
    return [
        EditorView.theme(themeObject),
        syntaxHighlighting(HighlightStyle.define(highlightStyle)),
    ]
}

function createGruvboxDark() {
    const dark0 = '#282828',
      dark1 = '#3c3836',
      dark2 = '#504945',
      dark3 = '#665c54',
      dark4 = '#7c6f64',
      dark4_256 = '#7c6f64',
      gray_245 = '#928374',
      gray_244 = '#928374',
      light0 = '#fbf1c7',
      light1 = '#ebdbb2',
      light2 = '#d5c4a1',
      light3 = '#bdae93',
      light4 = '#a89984',
      light4_256 = '#a89984',
      bright_red = '#fb4934',
      bright_green = '#b8bb26',
      bright_yellow = '#fabd2f',
      bright_blue = '#83a598',
      bright_purple = '#d3869b',
      bright_aqua = '#8ec07c',
      bright_orange = '#fe8019',
      neutral_red = '#cc241d',
      neutral_green = '#98971a',
      neutral_yellow = '#d79921',
      neutral_blue = '#458588',
      neutral_purple = '#b16286',
      neutral_aqua = '#689d6a',
      neutral_orange = '#d65d0e',
      faded_red = '#9d0006',
      faded_green = '#79740e',
      faded_yellow = '#b57614',
      faded_blue = '#076678',
      faded_purple = '#8f3f71',
      faded_aqua = '#427b58',
      faded_orange = '#af3a03'
    
    const bg0 = dark0,
      bg1 = dark1,
      bg2 = dark2,
      bg3 = dark3,
      bg4 = dark4,
      gray = gray_245,
      fg0 = light0,
      fg1 = light1,
      fg2 = light2,
      fg3 = light3,
      fg4 = light4,
      fg4_256 = light4_256,
      red = bright_red,
      green = bright_green,
      yellow = bright_yellow,
      blue = bright_blue,
      purple = bright_purple,
      aqua = bright_aqua,
      orange = bright_orange
    
    const invalid = red,
      darkBackground = bg1,
      highlightBackground = darkBackground,
      background = bg0,
      tooltipBackground = bg1,
      selection = darkBackground,
      cursor = orange
    
    const themeObject = {
        '&': {
          color: fg1,
          backgroundColor: background
        },
    
        '.cm-content': {
          caretColor: cursor
        },
    
        '.cm-cursor, .cm-dropCursor': { borderLeftColor: cursor },
        '&.cm-focused .cm-selectionBackground, .cm-selectionBackground, .cm-content ::selection':
          { backgroundColor: selection },
    
        '.cm-panels': { backgroundColor: darkBackground, color: fg1 },
        '.cm-panels.cm-panels-top': { borderBottom: '2px solid black' },
        '.cm-panels.cm-panels-bottom': { borderTop: '2px solid black' },
    
        '.cm-searchMatch': {
          backgroundColor: bg0,
          color: yellow,
          outline: `1px solid ${bg3}`
        },
        '.cm-searchMatch.cm-searchMatch-selected': {
          backgroundColor: bg3
        },
    
        '.cm-activeLine': { backgroundColor: highlightBackground },
        '.cm-selectionMatch': { backgroundColor: bg3 },
    
        '&.cm-focused .cm-matchingBracket, &.cm-focused .cm-nonmatchingBracket': {
          outline: `1px solid ${bg3}`,
          fontStyle: 'bold'
        },
    
        '&.cm-focused .cm-matchingBracket': {
          backgroundColor: bg3
        },
    
        '.cm-gutters': {
          backgroundColor: bg1,
          color: fg3,
          border: 'none'
        },
    
        '.cm-activeLineGutter': {
          backgroundColor: highlightBackground
        },
    
        '.cm-foldPlaceholder': {
          backgroundColor: 'transparent',
          border: 'none',
          color: '#ddd'
        },
    
        '.cm-tooltip': {
          border: 'none',
          backgroundColor: tooltipBackground
        },
        '.cm-tooltip .cm-tooltip-arrow:before': {
          borderTopColor: 'transparent',
          borderBottomColor: 'transparent'
        },
        '.cm-tooltip .cm-tooltip-arrow:after': {
          borderTopColor: tooltipBackground,
          borderBottomColor: tooltipBackground
        },
        '.cm-tooltip-autocomplete': {
          '& > ul > li[aria-selected]': {
            backgroundColor: highlightBackground,
            color: fg2
          }
        }
      }
    
    const highlightStyle = [
      { tag: t.keyword, color: red },
      {
        tag: [t.name, t.deleted, t.character, t.propertyName, t.macroName],
        color: aqua
      },
      { tag: [t.variableName], color: blue },
      { tag: [t.function(t.variableName)], color: green, fontStyle: 'bold' },
      { tag: [t.labelName], color: fg1 },
      {
        tag: [t.color, t.constant(t.name), t.standard(t.name)],
        color: purple
      },
      { tag: [t.definition(t.name), t.separator], color: fg1 },
      { tag: [t.brace], color: fg1 },
      {
        tag: [t.annotation],
        color: invalid
      },
      {
        tag: [t.number, t.changed, t.annotation, t.modifier, t.self, t.namespace],
        color: purple
      },
      {
        tag: [t.typeName, t.className],
        color: yellow
      },
      {
        tag: [t.operator, t.operatorKeyword],
        color: red
      },
      {
        tag: [t.tagName],
        color: aqua,
        fontStyle: 'bold'
      },
      {
        tag: [t.squareBracket],
        color: orange
      },
      {
        tag: [t.angleBracket],
        color: blue
      },
      {
        tag: [t.attributeName],
        color: aqua
      },
      {
        tag: [t.regexp],
        color: aqua
      },
      {
        tag: [t.quote],
        color: gray
      },
      { tag: [t.string], color: fg1 },
      {
        tag: t.link,
        color: fg4,
        textDecoration: 'underline',
        textUnderlinePosition: 'under'
      },
      {
        tag: [t.url, t.escape, t.special(t.string)],
        color: purple
      },
      { tag: [t.meta], color: yellow },
      { tag: [t.comment], color: gray, fontStyle: 'italic' },
      { tag: t.strong, fontWeight: 'bold', color: orange },
      { tag: t.emphasis, fontStyle: 'italic', color: green },
      { tag: t.strikethrough, textDecoration: 'line-through' },
      { tag: t.heading, fontWeight: 'bold', color: green },
      { tag: [t.heading1, t.heading2], fontWeight: 'bold', color: green },
      {
        tag: [t.heading3, t.heading4],
        fontWeight: 'bold',
        color: yellow
      },
      {
        tag: [t.heading5, t.heading6],
        color: yellow
      },
      { tag: [t.atom, t.bool, t.special(t.variableName)], color: purple },
      {
        tag: [t.processingInstruction, t.inserted],
        color: bright_blue
      },
      {
        tag: [t.contentSeparator],
        color: red
      },
      { tag: t.invalid, color: orange, borderBottom: `1px dotted ${invalid}` }
    ]
    
    return [
        EditorView.theme(themeObject),
        syntaxHighlighting(HighlightStyle.define(highlightStyle)),
    ]
}

function createGruvboxLight() {
    const dark0 = '#282828',
      dark1 = '#3c3836',
      dark2 = '#504945',
      dark3 = '#665c54',
      dark4 = '#7c6f64',
      dark4_256 = '#7c6f64',
      gray_245 = '#928374',
      gray_244 = '#928374',
      light0 = '#fbf1c7',
      light1 = '#ebdbb2',
      light2 = '#d5c4a1',
      light3 = '#bdae93',
      light4 = '#a89984',
      light4_256 = '#a89984',
      bright_red = '#fb4934',
      bright_green = '#b8bb26',
      bright_yellow = '#fabd2f',
      bright_blue = '#83a598',
      bright_purple = '#d3869b',
      bright_aqua = '#8ec07c',
      bright_orange = '#fe8019',
      neutral_red = '#cc241d',
      neutral_green = '#98971a',
      neutral_yellow = '#d79921',
      neutral_blue = '#458588',
      neutral_purple = '#b16286',
      neutral_aqua = '#689d6a',
      neutral_orange = '#d65d0e',
      faded_red = '#9d0006',
      faded_green = '#79740e',
      faded_yellow = '#b57614',
      faded_blue = '#076678',
      faded_purple = '#8f3f71',
      faded_aqua = '#427b58',
      faded_orange = '#af3a03'
    
    const bg0 = light0,
      bg1 = light1,
      bg2 = light2,
      bg3 = light3,
      bg4 = light4,
      gray = gray_244,
      fg0 = dark0,
      fg1 = dark1,
      fg2 = dark2,
      fg3 = dark3,
      fg4 = dark4,
      fg4_256 = dark4_256,
      red = faded_red,
      green = faded_green,
      yellow = faded_yellow,
      blue = faded_blue,
      purple = faded_purple,
      aqua = faded_aqua,
      orange = faded_orange
    
    const invalid = red,
      darkBackground = bg1,
      highlightBackground = darkBackground,
      background = bg0,
      tooltipBackground = bg1,
      selection = darkBackground,
      cursor = orange
    
    const themeObject = {
        '&': {
          color: fg1,
          backgroundColor: background
        },
    
        '.cm-content': {
          caretColor: cursor
        },
    
        '.cm-cursor, .cm-dropCursor': { borderLeftColor: cursor },
        '&.cm-focused .cm-selectionBackground, .cm-selectionBackground, .cm-content ::selection':
          { backgroundColor: selection },
    
        '.cm-panels': { backgroundColor: darkBackground, color: fg1 },
        '.cm-panels.cm-panels-top': { borderBottom: '2px solid black' },
        '.cm-panels.cm-panels-bottom': { borderTop: '2px solid black' },
    
        '.cm-searchMatch': {
          backgroundColor: bg0,
          color: yellow,
          outline: `1px solid ${bg3}`
        },
        '.cm-searchMatch.cm-searchMatch-selected': {
          backgroundColor: bg3
        },
    
        '.cm-activeLine': { backgroundColor: highlightBackground },
        '.cm-selectionMatch': { backgroundColor: bg3 },
    
        '&.cm-focused .cm-matchingBracket, &.cm-focused .cm-nonmatchingBracket': {
          outline: `1px solid ${bg3}`,
          fontStyle: 'bold'
        },
    
        '&.cm-focused .cm-matchingBracket': {
          backgroundColor: bg3
        },
    
        '.cm-gutters': {
          backgroundColor: bg1,
          color: fg3,
          border: 'none'
        },
    
        '.cm-activeLineGutter': {
          backgroundColor: highlightBackground
        },
    
        '.cm-foldPlaceholder': {
          backgroundColor: 'transparent',
          border: 'none',
          color: '#ddd'
        },
    
        '.cm-tooltip': {
          border: 'none',
          backgroundColor: tooltipBackground
        },
        '.cm-tooltip .cm-tooltip-arrow:before': {
          borderTopColor: 'transparent',
          borderBottomColor: 'transparent'
        },
        '.cm-tooltip .cm-tooltip-arrow:after': {
          borderTopColor: tooltipBackground,
          borderBottomColor: tooltipBackground
        },
        '.cm-tooltip-autocomplete': {
          '& > ul > li[aria-selected]': {
            backgroundColor: highlightBackground,
            color: fg2
          }
        }
      }
    
    const highlightStyle = [
      { tag: t.keyword, color: red },
      {
        tag: [t.name, t.deleted, t.character, t.propertyName, t.macroName],
        color: aqua
      },
      { tag: [t.variableName], color: blue },
      { tag: [t.function(t.variableName)], color: green, fontStyle: 'bold' },
      { tag: [t.labelName], color: fg1 },
      {
        tag: [t.color, t.constant(t.name), t.standard(t.name)],
        color: purple
      },
      { tag: [t.definition(t.name), t.separator], color: fg1 },
      { tag: [t.brace], color: fg1 },
      {
        tag: [t.annotation],
        color: invalid
      },
      {
        tag: [t.number, t.changed, t.annotation, t.modifier, t.self, t.namespace],
        color: purple
      },
      {
        tag: [t.typeName, t.className],
        color: yellow
      },
      {
        tag: [t.operator, t.operatorKeyword],
        color: red
      },
      {
        tag: [t.tagName],
        color: aqua,
        fontStyle: 'bold'
      },
      {
        tag: [t.squareBracket],
        color: orange
      },
      {
        tag: [t.angleBracket],
        color: blue
      },
      {
        tag: [t.attributeName],
        color: aqua
      },
      {
        tag: [t.regexp],
        color: aqua
      },
      {
        tag: [t.quote],
        color: gray
      },
      { tag: [t.string], color: fg1 },
      {
        tag: t.link,
        color: fg4,
        textDecoration: 'underline',
        textUnderlinePosition: 'under'
      },
      {
        tag: [t.url, t.escape, t.special(t.string)],
        color: purple
      },
      { tag: [t.meta], color: yellow },
      { tag: [t.comment], color: gray, fontStyle: 'italic' },
      { tag: t.strong, fontWeight: 'bold', color: orange },
      { tag: t.emphasis, fontStyle: 'italic', color: green },
      { tag: t.strikethrough, textDecoration: 'line-through' },
      { tag: t.heading, fontWeight: 'bold', color: green },
      { tag: [t.heading1, t.heading2], fontWeight: 'bold', color: green },
      {
        tag: [t.heading3, t.heading4],
        fontWeight: 'bold',
        color: yellow
      },
      {
        tag: [t.heading5, t.heading6],
        color: yellow
      },
      { tag: [t.atom, t.bool, t.special(t.variableName)], color: purple },
      {
        tag: [t.processingInstruction, t.inserted],
        color: blue
      },
      {
        tag: [t.contentSeparator],
        color: red
      },
      { tag: t.invalid, color: orange, borderBottom: `1px dotted ${invalid}` }
    ]
    
    return [
        EditorView.theme(themeObject),
        syntaxHighlighting(HighlightStyle.define(highlightStyle)),
    ]
}

function createMaterialDark() {
    const base00 = '#2e3235',
      base01 = '#505d64',
      base02 = '#606f7a',
      base03 = '#707d8b',
      base04 = '#a0a4ae',
      base05 = '#bdbdbd',
      base06 = '#e0e0e0',
      base07 = '#fdf6e3',
      base_red = '#ff5f52',
      base_deeporange = '#ff6e40',
      base_pink = '#fa5788',
      base_yellow = '#facf4e',
      base_orange = '#ffad42',
      base_cyan = '#56c8d8',
      base_indigo = '#7186f0',
      base_purple = '#cf6edf',
      base_green = '#6abf69',
      base_lightgreen = '#99d066',
      base_teal = '#4ebaaa'
    
    const invalid = base_red,
      darkBackground = '#202325',
      highlightBackground = '#545b61',
      background = base00,
      tooltipBackground = base01,
      selection = base01,
      cursor = base04
    
    const themeObject = {
        '&': {
          color: base05,
          backgroundColor: background
        },
    
        '.cm-content': {
          caretColor: cursor
        },
    
        '.cm-cursor, .cm-dropCursor': { borderLeftColor: cursor },
        '&.cm-focused .cm-selectionBackground, .cm-selectionBackground, .cm-content ::selection':
          { backgroundColor: selection },
    
        '.cm-panels': { backgroundColor: darkBackground, color: base03 },
        '.cm-panels.cm-panels-top': { borderBottom: '2px solid black' },
        '.cm-panels.cm-panels-bottom': { borderTop: '2px solid black' },
    
        '.cm-searchMatch': {
          outline: `1px solid ${base_yellow}`,
          backgroundColor: 'transparent'
        },
        '.cm-searchMatch.cm-searchMatch-selected': {
          backgroundColor: highlightBackground
        },
    
        '.cm-activeLine': { backgroundColor: highlightBackground },
        '.cm-selectionMatch': {
          backgroundColor: darkBackground,
          outline: `1px solid ${base_teal}`
        },
    
        '&.cm-focused .cm-matchingBracket': {
          color: base06,
          outline: `1px solid ${base_teal}`
        },
    
        '&.cm-focused .cm-nonmatchingBracket': {
          color: base_red
        },
    
        '.cm-gutters': {
          backgroundColor: base00,
          borderRight: '1px solid #4f5b66',
          color: base02
        },
    
        '.cm-activeLineGutter': {
          backgroundColor: highlightBackground,
          color: base07
        },
    
        '.cm-foldPlaceholder': {
          backgroundColor: 'transparent',
          border: 'none',
          color: '#ddd'
        },
    
        '.cm-tooltip': {
          border: 'none',
          backgroundColor: tooltipBackground
        },
        '.cm-tooltip .cm-tooltip-arrow:before': {
          borderTopColor: 'transparent',
          borderBottomColor: 'transparent'
        },
        '.cm-tooltip .cm-tooltip-arrow:after': {
          borderTopColor: tooltipBackground,
          borderBottomColor: tooltipBackground
        },
        '.cm-tooltip-autocomplete': {
          '& > ul > li[aria-selected]': {
            backgroundColor: highlightBackground,
            color: base03
          }
        }
      }
    
    const highlightStyle = [
      { tag: t.keyword, color: base_purple },
      {
        tag: [t.name, t.deleted, t.character, t.macroName],
        color: base_cyan
      },
      { tag: [t.propertyName], color: base_yellow },
      { tag: [t.variableName], color: base05 },
      { tag: [t.function(t.variableName)], color: base_cyan },
      { tag: [t.labelName], color: base_purple },
      {
        tag: [t.color, t.constant(t.name), t.standard(t.name)],
        color: base_yellow
      },
      { tag: [t.definition(t.name), t.separator], color: base_pink },
      { tag: [t.brace], color: base_purple },
      {
        tag: [t.annotation],
        color: invalid
      },
      {
        tag: [t.number, t.changed, t.annotation, t.modifier, t.self, t.namespace],
        color: base_orange
      },
      {
        tag: [t.typeName, t.className],
        color: base_orange
      },
      {
        tag: [t.operator, t.operatorKeyword],
        color: base_indigo
      },
      {
        tag: [t.tagName],
        color: base_deeporange
      },
      {
        tag: [t.squareBracket],
        color: base_red
      },
      {
        tag: [t.angleBracket],
        color: base02
      },
      {
        tag: [t.attributeName],
        color: base05
      },
      {
        tag: [t.regexp],
        color: invalid
      },
      {
        tag: [t.quote],
        color: base_green
      },
      { tag: [t.string], color: base_lightgreen },
      {
        tag: t.link,
        color: base_cyan,
        textDecoration: 'underline',
        textUnderlinePosition: 'under'
      },
      {
        tag: [t.url, t.escape, t.special(t.string)],
        color: base_yellow
      },
      { tag: [t.meta], color: base03 },
      { tag: [t.comment], color: base03, fontStyle: 'italic' },
      { tag: t.monospace, color: base05 },
      { tag: t.strong, fontWeight: 'bold', color: base_red },
      { tag: t.emphasis, fontStyle: 'italic', color: base_lightgreen },
      { tag: t.strikethrough, textDecoration: 'line-through' },
      { tag: t.heading, fontWeight: 'bold', color: base_yellow },
      { tag: t.heading1, fontWeight: 'bold', color: base_yellow },
      {
        tag: [t.heading2, t.heading3, t.heading4],
        fontWeight: 'bold',
        color: base_yellow
      },
      {
        tag: [t.heading5, t.heading6],
        color: base_yellow
      },
      { tag: [t.atom, t.bool, t.special(t.variableName)], color: base_cyan },
      {
        tag: [t.processingInstruction, t.inserted],
        color: base_red
      },
      {
        tag: [t.contentSeparator],
        color: base_cyan
      },
      { tag: t.invalid, color: base02, borderBottom: `1px dotted ${base_red}` }
    ]
    
    return [
        EditorView.theme(themeObject),
        syntaxHighlighting(HighlightStyle.define(highlightStyle)),
    ]
}

function createNord() {
    const base00 = '#2e3440', // black
      base01 = '#3b4252', // dark grey
      base02 = '#434c5e',
      base03 = '#4c566a'
    
    const base04 = '#d8dee9', // grey
      base05 = '#e5e9f0', // off white
      base06 = '#eceff4'
    
    const base07 = '#8fbcbb', // moss green
      base08 = '#88c0d0', // ice blue
      base09 = '#81a1c1', // water blue
      base0A = '#5e81ac'
    
    const base0b = '#bf616a', // red
      base0C = '#d08770', // orange
      base0D = '#ebcb8b', // yellow
      base0E = '#a3be8c', // green
      base0F = '#b48ead'
    
    const invalid = '#d30102',
      darkBackground = '#252a33',
      highlightBackground = base03,
      background = base00,
      tooltipBackground = base01,
      selection = base03,
      cursor = base04
    
    const themeObject = {
        '&': {
          color: base04,
          backgroundColor: background
        },
    
        '.cm-content': {
          caretColor: cursor
        },
    
        '.cm-cursor, .cm-dropCursor': { borderLeftColor: cursor },
        '&.cm-focused .cm-selectionBackground, .cm-selectionBackground, .cm-content ::selection':
          { backgroundColor: selection },
    
        '.cm-panels': { backgroundColor: darkBackground, color: base03 },
        '.cm-panels.cm-panels-top': { borderBottom: '2px solid black' },
        '.cm-panels.cm-panels-bottom': { borderTop: '2px solid black' },
    
        '.cm-searchMatch': {
          backgroundColor: 'transparent',
          outline: `1px solid ${base07}`
        },
        '.cm-searchMatch.cm-searchMatch-selected': {
          backgroundColor: base04,
          color: base00
        },
    
        '.cm-activeLine': { backgroundColor: highlightBackground },
        '.cm-selectionMatch': {
          backgroundColor: base05,
          color: base01
        },
    
        '&.cm-focused .cm-matchingBracket, &.cm-focused .cm-nonmatchingBracket': {
          outline: `1px solid ${base07}`
        },
    
        '&.cm-focused .cm-matchingBracket': {
          backgroundColor: base06,
          color: base02
        },
    
        '.cm-gutters': {
          backgroundColor: base00,
          color: base03,
          border: 'none'
        },
    
        '.cm-activeLineGutter': {
          backgroundColor: highlightBackground,
          color: base04
        },
    
        '.cm-foldPlaceholder': {
          backgroundColor: 'transparent',
          border: 'none',
          color: '#ddd'
        },
    
        '.cm-tooltip': {
          border: 'none',
          backgroundColor: tooltipBackground
        },
        '.cm-tooltip .cm-tooltip-arrow:before': {
          borderTopColor: 'transparent',
          borderBottomColor: 'transparent'
        },
        '.cm-tooltip .cm-tooltip-arrow:after': {
          borderTopColor: tooltipBackground,
          borderBottomColor: tooltipBackground
        },
        '.cm-tooltip-autocomplete': {
          '& > ul > li[aria-selected]': {
            backgroundColor: highlightBackground,
            color: base03
          }
        }
      }
    
    const highlightStyle = [
      { tag: t.keyword, color: base0A },
      {
        tag: [t.name, t.deleted, t.character, t.propertyName, t.macroName],
        color: base08
      },
      { tag: [t.variableName], color: base07 },
      { tag: [t.function(t.variableName)], color: base07 },
      { tag: [t.labelName], color: base09 },
      {
        tag: [t.color, t.constant(t.name), t.standard(t.name)],
        color: base0A
      },
      { tag: [t.definition(t.name), t.separator], color: base0E },
      { tag: [t.brace], color: base07 },
      {
        tag: [t.annotation],
        color: invalid
      },
      {
        tag: [t.number, t.changed, t.annotation, t.modifier, t.self, t.namespace],
        color: base0F
      },
      {
        tag: [t.typeName, t.className],
        color: base0D
      },
      {
        tag: [t.operator, t.operatorKeyword],
        color: base0E
      },
      {
        tag: [t.tagName],
        color: base0F
      },
      {
        tag: [t.squareBracket],
        color: base0b
      },
      {
        tag: [t.angleBracket],
        color: base0C
      },
      {
        tag: [t.attributeName],
        color: base0D
      },
      {
        tag: [t.regexp],
        color: base0A
      },
      {
        tag: [t.quote],
        color: base0F
      },
      { tag: [t.string], color: base0E },
      {
        tag: t.link,
        color: base0E,
        textDecoration: 'underline',
        textUnderlinePosition: 'under'
      },
      {
        tag: [t.url, t.escape, t.special(t.string)],
        color: base07
      },
      { tag: [t.meta], color: base08 },
      { tag: [t.monospace], color: base04, fontStyle: 'italic' },
      { tag: [t.comment], color: base03, fontStyle: 'italic' },
      { tag: t.strong, fontWeight: 'bold', color: base0A },
      { tag: t.emphasis, fontStyle: 'italic', color: base0A },
      { tag: t.strikethrough, textDecoration: 'line-through' },
      { tag: t.heading, fontWeight: 'bold', color: base0A },
      { tag: t.special(t.heading1), fontWeight: 'bold', color: base0A },
      { tag: t.heading1, fontWeight: 'bold', color: base0A },
      {
        tag: [t.heading2, t.heading3, t.heading4],
        fontWeight: 'bold',
        color: base0A
      },
      {
        tag: [t.heading5, t.heading6],
        color: base0A
      },
      { tag: [t.atom, t.bool, t.special(t.variableName)], color: base0C },
      {
        tag: [t.processingInstruction, t.inserted],
        color: base07
      },
      {
        tag: [t.contentSeparator],
        color: base0D
      },
      { tag: t.invalid, color: base02, borderBottom: `1px dotted ${invalid}` }
    ]
    
    return [
        EditorView.theme(themeObject),
        syntaxHighlighting(HighlightStyle.define(highlightStyle)),
    ]
}

function createSolarizedDark() {
    const base00 = '#002b36',
      base01 = '#073642',
      base02 = '#586e75',
      base03 = '#657b83',
      base04 = '#839496',
      base05 = '#93a1a1',
      base06 = '#eee8d5',
      base07 = '#fdf6e3',
      base_red = '#dc322f',
      base_orange = '#cb4b16',
      base_yellow = '#b58900',
      base_green = '#859900',
      base_cyan = '#2aa198',
      base_blue = '#268bd2',
      base_violet = '#6c71c4',
      base_magenta = '#d33682'
    
    const invalid = '#d30102',
      stone = base04,
      darkBackground = '#00252f',
      highlightBackground = '#173541',
      background = base00,
      tooltipBackground = base01,
      selection = '#173541',
      cursor = base04
    
    const themeObject = {
        '&': {
          color: base05,
          backgroundColor: background
        },
    
        '.cm-content': {
          caretColor: cursor
        },
    
        '.cm-cursor, .cm-dropCursor': { borderLeftColor: cursor },
        '&.cm-focused .cm-selectionBackground, .cm-selectionBackground, .cm-content ::selection':
          { backgroundColor: selection },
    
        '.cm-panels': { backgroundColor: darkBackground, color: base03 },
        '.cm-panels.cm-panels-top': { borderBottom: '2px solid black' },
        '.cm-panels.cm-panels-bottom': { borderTop: '2px solid black' },
    
        '.cm-searchMatch': {
          backgroundColor: '#72a1ff59',
          outline: '1px solid #457dff'
        },
        '.cm-searchMatch.cm-searchMatch-selected': {
          backgroundColor: '#6199ff2f'
        },
    
        '.cm-activeLine': { backgroundColor: highlightBackground },
        '.cm-selectionMatch': { backgroundColor: '#aafe661a' },
    
        '&.cm-focused .cm-matchingBracket, &.cm-focused .cm-nonmatchingBracket': {
          outline: `1px solid ${base06}`
        },
    
        '.cm-gutters': {
          backgroundColor: darkBackground,
          color: stone,
          border: 'none'
        },
    
        '.cm-activeLineGutter': {
          backgroundColor: highlightBackground
        },
    
        '.cm-foldPlaceholder': {
          backgroundColor: 'transparent',
          border: 'none',
          color: '#ddd'
        },
    
        '.cm-tooltip': {
          border: 'none',
          backgroundColor: tooltipBackground
        },
        '.cm-tooltip .cm-tooltip-arrow:before': {
          borderTopColor: 'transparent',
          borderBottomColor: 'transparent'
        },
        '.cm-tooltip .cm-tooltip-arrow:after': {
          borderTopColor: tooltipBackground,
          borderBottomColor: tooltipBackground
        },
        '.cm-tooltip-autocomplete': {
          '& > ul > li[aria-selected]': {
            backgroundColor: highlightBackground,
            color: base03
          }
        }
      }
    
    const highlightStyle = [
      { tag: t.keyword, color: base_green },
      {
        tag: [t.name, t.deleted, t.character, t.propertyName, t.macroName],
        color: base_cyan
      },
      { tag: [t.variableName], color: base05 },
      { tag: [t.function(t.variableName)], color: base_blue },
      { tag: [t.labelName], color: base_magenta },
      {
        tag: [t.color, t.constant(t.name), t.standard(t.name)],
        color: base_yellow
      },
      { tag: [t.definition(t.name), t.separator], color: base_cyan },
      { tag: [t.brace], color: base_magenta },
      {
        tag: [t.annotation],
        color: invalid
      },
      {
        tag: [t.number, t.changed, t.annotation, t.modifier, t.self, t.namespace],
        color: base_magenta
      },
      {
        tag: [t.typeName, t.className],
        color: base_orange
      },
      {
        tag: [t.operator, t.operatorKeyword],
        color: base_violet
      },
      {
        tag: [t.tagName],
        color: base_blue
      },
      {
        tag: [t.squareBracket],
        color: base_red
      },
      {
        tag: [t.angleBracket],
        color: base02
      },
      {
        tag: [t.attributeName],
        color: base05
      },
      {
        tag: [t.regexp],
        color: invalid
      },
      {
        tag: [t.quote],
        color: base_green
      },
      { tag: [t.string], color: base_yellow },
      {
        tag: t.link,
        color: base_cyan,
        textDecoration: 'underline',
        textUnderlinePosition: 'under'
      },
      {
        tag: [t.url, t.escape, t.special(t.string)],
        color: base_yellow
      },
      { tag: [t.meta], color: base_red },
      { tag: [t.comment], color: base02, fontStyle: 'italic' },
      { tag: t.strong, fontWeight: 'bold', color: base06 },
      { tag: t.emphasis, fontStyle: 'italic', color: base_green },
      { tag: t.strikethrough, textDecoration: 'line-through' },
      { tag: t.heading, fontWeight: 'bold', color: base_yellow },
      { tag: t.heading1, fontWeight: 'bold', color: base07 },
      {
        tag: [t.heading2, t.heading3, t.heading4],
        fontWeight: 'bold',
        color: base06
      },
      {
        tag: [t.heading5, t.heading6],
        color: base06
      },
      { tag: [t.atom, t.bool, t.special(t.variableName)], color: base_magenta },
      {
        tag: [t.processingInstruction, t.inserted, t.contentSeparator],
        color: base_red
      },
      {
        tag: [t.contentSeparator],
        color: base_yellow
      },
      { tag: t.invalid, color: base02, borderBottom: `1px dotted ${base_red}` }
    ]
    
    return [
        EditorView.theme(themeObject),
        syntaxHighlighting(HighlightStyle.define(highlightStyle)),
    ]
}

function createSolarizedLight() {
    const base00 = '#657b83',
      base01 = '#586e75',
      base02 = '#073642',
      base03 = '#002b36',
      base0 = '#839496',
      base1 = '#93a1a1',
      base2 = '#eee8d5',
      base3 = '#fdf6e3',
      base_red = '#dc322f',
      base_orange = '#cb4b16',
      base_yellow = '#b58900',
      base_green = '#859900',
      base_cyan = '#2aa198',
      base_blue = '#268bd2',
      base_violet = '#6c71c4',
      base_magenta = '#d33682'
    
    const invalid = '#d30102',
      darkBackground = '#dfd9c8',
      highlightBackground = darkBackground,
      background = base3,
      tooltipBackground = base01,
      selection = darkBackground,
      cursor = base01
    
    const themeObject = {
        '&': {
          color: base00,
          backgroundColor: background
        },
    
        '.cm-content': {
          caretColor: cursor
        },
    
        '.cm-cursor, .cm-dropCursor': { borderLeftColor: cursor },
        '&.cm-focused .cm-selectionBackground, .cm-selectionBackground, .cm-content ::selection':
          { backgroundColor: selection },
    
        '.cm-panels': { backgroundColor: darkBackground, color: base03 },
        '.cm-panels.cm-panels-top': { borderBottom: '2px solid black' },
        '.cm-panels.cm-panels-bottom': { borderTop: '2px solid black' },
    
        '.cm-searchMatch': {
          backgroundColor: '#72a1ff59',
          outline: '1px solid #457dff'
        },
        '.cm-searchMatch.cm-searchMatch-selected': {
          backgroundColor: '#6199ff2f'
        },
    
        '.cm-activeLine': { backgroundColor: highlightBackground },
        '.cm-selectionMatch': { backgroundColor: '#aafe661a' },
    
        '&.cm-focused .cm-matchingBracket, &.cm-focused .cm-nonmatchingBracket': {
          outline: `1px solid ${base1}`
        },
    
        '.cm-gutters': {
          backgroundColor: '#00000010',
          color: base00,
          border: 'none'
        },
    
        '.cm-activeLineGutter': {
          backgroundColor: highlightBackground
        },
    
        '.cm-foldPlaceholder': {
          backgroundColor: 'transparent',
          border: 'none',
          color: '#ddd'
        },
    
        '.cm-tooltip': {
          border: 'none',
          backgroundColor: tooltipBackground
        },
        '.cm-tooltip .cm-tooltip-arrow:before': {
          borderTopColor: 'transparent',
          borderBottomColor: 'transparent'
        },
        '.cm-tooltip .cm-tooltip-arrow:after': {
          borderTopColor: tooltipBackground,
          borderBottomColor: tooltipBackground
        },
        '.cm-tooltip-autocomplete': {
          '& > ul > li[aria-selected]': {
            backgroundColor: highlightBackground,
            color: base03
          }
        }
      }
    
    const highlightStyle = [
      { tag: t.keyword, color: base_green },
      {
        tag: [t.name, t.deleted, t.character, t.propertyName, t.macroName],
        color: base_cyan
      },
      { tag: [t.variableName], color: base_blue },
      { tag: [t.function(t.variableName)], color: base_blue },
      { tag: [t.labelName], color: base_magenta },
      {
        tag: [t.color, t.constant(t.name), t.standard(t.name)],
        color: base_yellow
      },
      { tag: [t.definition(t.name), t.separator], color: base_cyan },
      { tag: [t.brace], color: base_magenta },
      {
        tag: [t.annotation],
        color: invalid
      },
      {
        tag: [t.number, t.changed, t.annotation, t.modifier, t.self, t.namespace],
        color: base_magenta
      },
      {
        tag: [t.typeName, t.className],
        color: base_orange
      },
      {
        tag: [t.operator, t.operatorKeyword],
        color: base_violet
      },
      {
        tag: [t.tagName],
        color: base_blue
      },
      {
        tag: [t.squareBracket],
        color: base_red
      },
      {
        tag: [t.angleBracket],
        color: base02
      },
      {
        tag: [t.attributeName],
        color: base1
      },
      {
        tag: [t.regexp],
        color: invalid
      },
      {
        tag: [t.quote],
        color: base_green
      },
      { tag: [t.string], color: base_yellow },
      {
        tag: t.link,
        color: base_cyan,
        textDecoration: 'underline',
        textUnderlinePosition: 'under'
      },
      {
        tag: [t.url, t.escape, t.special(t.string)],
        color: base_yellow
      },
      { tag: [t.meta], color: base_red },
      { tag: [t.comment], color: base02, fontStyle: 'italic' },
      { tag: t.strong, fontWeight: 'bold', color: base01 },
      { tag: t.emphasis, fontStyle: 'italic', color: base_green },
      { tag: t.strikethrough, textDecoration: 'line-through' },
      { tag: t.heading, fontWeight: 'bold', color: base_yellow },
      { tag: t.heading1, fontWeight: 'bold', color: base03 },
      {
        tag: [t.heading2, t.heading3, t.heading4],
        fontWeight: 'bold',
        color: base03
      },
      {
        tag: [t.heading5, t.heading6],
        color: base03
      },
      { tag: [t.atom, t.bool, t.special(t.variableName)], color: base_magenta },
      {
        tag: [t.processingInstruction, t.inserted, t.contentSeparator],
        color: base_red
      },
      {
        tag: [t.contentSeparator],
        color: base_yellow
      },
      { tag: t.invalid, color: base02, borderBottom: `1px dotted ${base_red}` }
    ]
    
    return [
        EditorView.theme(themeObject),
        syntaxHighlighting(HighlightStyle.define(highlightStyle)),
    ]
}


const basicDark = createBasicDark()
const basicLight = createBasicLight()
const gruvboxDark = createGruvboxDark()
const gruvboxLight = createGruvboxLight()
const materialDark = createMaterialDark()
const nord = createNord()
const solarizedDark = createSolarizedDark()
const solarizedLight = createSolarizedLight()

const themes = {
    basicDark,
    basicLight,
    gruvboxDark,
    gruvboxLight,
    materialDark,
    nord,
    solarizedDark,
    solarizedLight,
}

export default themes

