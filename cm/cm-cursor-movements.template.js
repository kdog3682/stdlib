---------------------------------
debug: code
arg: 
function foo() {
            console.log("hi")
            console.log('hi')
    function boo() {
        function goo() {
            function noo() {
                $c
            }
        }
    }
}

code:

lineSprawl(cm)
---------------------------------

erg: 
function foo() {
    if (test(abc)) {
        $c
    }
}

code: cmAppendBelow(cm, null, 'a\\nb\\nc')

------------------------------------------------------------

desc: The cursor will jump to the next line 
and be indented or dedented

it is primarily used for writing 
htmlBuilder or svgBuilder strings

keybinding:qw = indent
keybinding:qe = dedent


arg:

if (foo) {
    const b = "$c"
}
code: inputQW(cm, 1)

---------------------------------

arg: 
function foo() {
    let aaa
    let b = '$c'
}

code: getPrevBinding(node, getText)
---------------------------------

arg:

function hi() {
    console.log('#{abc}')
}

code: highlightCurrentNode
