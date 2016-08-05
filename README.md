Tasks

Write a getCents function.
Function expects string and returns remainder after dot or null if none found.
Note: usage of RegExp is mandatory.
Invocation example:

getCents('$1.53'); // 53
Write a debounce function.
Creates and returns a new debounced version of the passed function which will postpone its execution until after wait milliseconds have elapsed since the last time it was invoked. Useful for implementing behavior that should only happen after the input has stopped arriving. For example: handling input only after user stopped typing, recalculating a layout after the window has stopped being resized, and so on.
Invocation example:

var debLog = debounce(function(){
    console.log('i am debounced');
}, 500);
debLog();
debLog();
debLog(); // 'i am debounced' 



Write getSelfClosingTags function.
Function expects string representing DOM and returns array of self-closing tags or null if none found. 
Note: string may have multiple lines.
Note: usage of RegExp is mandatory.
Invocation example:

getSelfClosingTags('<p>hello <br /> world</p>'); // ["<br />"]
getSelfClosingTags('<p>h <br /><hr />w</p>'); // ["<br />", "<hr />"]


Write banBadWords function.
Function expects array of “bad” words and string of text and returns string with all bad words being replaced with “****”.
Note: string may have multiple lines.
Note: usage of RegExp is mandatory.
Tip: regexps can be used not only in // form but also via new RegExp
Invocation example:

banBadWords(['my', 'pony'], 'my little pony'); // "**** little ****"
