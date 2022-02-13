// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// generator.js
// written and released to the public domain by drow <drow@bin.sh>
// http://creativecommons.org/publicdomain/zero/1.0/

let gen_data = {};

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// generator function

  function generate_text (type) {
    let list; if (list = gen_data[type]) {
      let string; if (string = select_from(list)) {
        return expand_tokens(string);
      }
    }
    return '';
  }

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// generate multiple

  function generate_list (type, n_of) {
    let list = [];

    let i; for (i = 0; i < n_of; i++) {
      list.push(generate_text(type));
    }
    return list;
  }

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// select from list

  function select_from (list) {
    if (list.constructor == Array) {
      return select_from_array(list);
    } else {
      return select_from_table(list);
    }
  }
  function select_from_array (list) {
    return list[Math.floor(Math.random() * list.length)];
  }
  function select_from_table (list) {
    let len; if (len = scale_table(list)) {
      let idx = Math.floor(Math.random() * len) + 1;

      let key; for (key in list) {
        let r = key_range(key);
        if (idx >= r[0] && idx <= r[1]) { return list[key]; }
      }
    }
    return '';
  }
  function scale_table (list) {
    let len = 0;

    let key; for (key in list) {
      let r = key_range(key);
      if (r[1] > len) { len = r[1]; }
    }
    return len;
  }
  function key_range (key) {
    let match; if (match = /(\d+)-00/.exec(key)) {
      return [ parseInt(match[1]), 100 ];
    } else if (match = /(\d+)-(\d+)/.exec(key)) {
      return [ parseInt(match[1]), parseInt(match[2]) ];
    } else if (key == '00') {
      return [ 100, 100 ];
    } else {
      return [ parseInt(key), parseInt(key) ];
    }
  }

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// expand {token} in string

  function expand_tokens (string) {
    let match; while (match = /{(\w+)}/.exec(string)) {
      let token = match[1];

      let repl; if (repl = generate_text(token)) {
        string = string.replace('{'+token+'}',repl);
      } else {
        string = string.replace('{'+token+'}',token);
      }
    }
    return string;
  }

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -