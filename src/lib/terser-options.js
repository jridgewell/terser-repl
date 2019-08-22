const options = `// edit terser options
{
  compress: {
    arguments: false,
    arrows: true,
    booleans: true,
    booleans_as_integers: false,
    collapse_vars: true,
    comparisons: true,
    computed_props: true,
    conditionals: true,
    dead_code: true,
    defaults: true,
    directives: true,
    drop_console: false,
    drop_debugger: true,
    ecma: 5,
    evaluate: true,
    expression: false,
    global_defs: false,
    hoist_funs: false,
    hoist_props: true,
    hoist_vars: false,
    ie8: false,
    if_return: true,
    inline: 3,
    join_vars: true,
    keep_classnames: false,
    keep_fargs: true,
    keep_fnames: false,
    keep_infinity: false,
    loops: true,
    module: false,
    negate_iife: true,
    passes: 1,
    properties: true,
    pure_getters: 'strict',
    pure_funcs: null,
    reduce_funcs: true,
    reduce_vars: true,
    sequences: true,
    side_effects: true,
    switches: true,
    top_retain: null,
    toplevel: false,
    typeofs: true,
    unsafe: false,
    unsafe_arrows: false,
    unsafe_comps: false,
    unsafe_Function: false,
    unsafe_math: false,
    unsafe_methods: false,
    unsafe_proto: false,
    unsafe_regexp: false,
    unsafe_undefined: false,
    unused: true,
    warnings: false
  },
  enclose: false,
  ie8: false,
  keep_classnames: false,
  keep_fnames: false,
  mangle: {
    cache: null,
    eval: false,
    ie8: false,
    keep_classnames: false,
    keep_fnames: false,
    module: false,
    properties: false,
    reserved: ['arguments'],
    safari10: false,
    toplevel: false
  },
  module: false,
  nameCache: null,
  output: {
    ascii_only: false,
    beautify: false,
    braces: false,
    comments: false,
    ecma: 5,
    ie8: false,
    indent_level: 4,
    indent_start: 0,
    inline_script: true,
    keep_quoted_props: false,
    max_line_len: false,
    preamble: null,
    quote_keys: false,
    quote_style: 0,
    safari10: false,
    semicolons: true,
    shebang: true,
    shorthand: false,
    source_map: null,
    webkit: false,
    width: 80,
    wrap_iife: false
  },
  parse: {
    toplevel: {},
    filename: '0',
    bare_returns: false,
    ecma: 8,
    expression: false,
    html5_comments: true,
    module: false,
    shebang: true,
    strict: false
  },
  rename: {
    cache: null,
    eval: false,
    ie8: false,
    keep_classnames: false,
    keep_fnames: false,
    module: false,
    properties: false,
    reserved: ['arguments'],
    safari10: false,
    toplevel: false
  },
  safari10: false,
  sourceMap: false,
  timings: false,
  toplevel: false,
  warnings: false,
  wrap: false
}`;

/* eslint-disable-next-line no-eval */
export const evalOptions = (opts) => eval(`(${opts||options})`)

export default options;