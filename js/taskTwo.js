(function() {
    "use strict";
    var page = {
        'div': {
            '@class': 'red',
            'h3': 'welcome',
            'b': 'bold text'
        },
        'b': 'one more bold text',
        'b': {
            '@class': 'red',
            '@value': 'one more bold text'
        },
        'h3': 'hello, this is a title',
        'section': {
            '@class': 'red',
            'i': 'text',
            'div': {
                '@class': 'blue',
                'i': 'test'
            }
        }
    };
    var button = document.getElementsByTagName('button')[0];
    var rule = new RegExp('^@');
    var id = 'page';

    function build(obj) {
        var div = document.getElementById(id);
        for (var i in obj)
            if (typeof(obj[i]) == 'string') {
                if (rule.test(i)) {
                    div.setAttribute(i.substr(1), obj[i]);
                } else {
                    div.appendChild(document.createElement(i)).textContent = obj[i];
                }
            } else {
                var wrap = document.createElement(i);
                wrap.id = i;
                div.appendChild(wrap);
                id = i;
                build(obj[i]);
            }
    }
    button.onclick = function() {
        build(page);
    };
})();