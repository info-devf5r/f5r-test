/****  var를 사용할 경우 클로저로 인한 일반적인 실수 1 ****/

// function showHelp(help) {
//     console.log('click help: ', help);
//     document.getElementById('help').innerHTML = help;
// }
//
// function setupHelp() {
//     var helpText = [
//         {'id': 'email', 'help': 'Your e-mail address'},
//         {'id': 'name', 'help': 'Your full name'},
//         {'id': 'age', 'help': 'Your age (you must be over 16)'}
//     ];
//
//     for (var i = 0; i < helpText.length; i++) {
//         var item = helpText[i];
//         console.log('before i', i);
//
//         document.getElementById(item.id).onfocus = function() {
//             console.log('after i: ', i);
//             console.log(item);
//             console.log('event create help: ', item.help);
//             showHelp(item.help);
//         }
//     }
// }

/****
 * 첫 번째 대안
 * 함수 팩토리 사용
 * ****/

// function showHelp(help) {
//     document.getElementById('help').innerHTML = help;
// }
//
// function makeHelpCallback(help) {
//     return function() {
//         showHelp(help);
//     };
// }
//
// function setupHelp() {
//     var helpText = [
//         {'id': 'email', 'help': 'Your e-mail address'},
//         {'id': 'name', 'help': 'Your full name'},
//         {'id': 'age', 'help': 'Your age (you must be over 16)'}
//     ];
//
//     for (var i = 0; i < helpText.length; i++) {
//         var item = helpText[i];
//         document.getElementById(item.id).onfocus = makeHelpCallback(item.help);
//     }
// }


/****
 * 두 번째 대안
 * 익명 클로저 사용
 * ****/

// function showHelp(help) {
//     document.getElementById('help').innerHTML = help;
// }
//
// function setupHelp() {
//     var helpText = [
//         {'id': 'email', 'help': 'Your e-mail address'},
//         {'id': 'name', 'help': 'Your full name'},
//         {'id': 'age', 'help': 'Your age (you must be over 16)'}
//     ];
//
//     for (var i = 0; i < helpText.length; i++) {
//         (function() {
//             var item = helpText[i];
//             document.getElementById(item.id).onfocus = function() {
//                 showHelp(item.help);
//             }
//         })();
//     }
// }

/****
 * 세 번째 대안
 * var 대신 let 사용 (추천)
 * let을 사용하면 모든 클로저가 블록 범위 변수를 바인딩하기 때문에 추가적인 클로저를 사용하지 않아도 된다.
 * ****/

// function showHelp(help) {
//     document.getElementById('help').innerHTML = help;
// }
//
// function setupHelp() {
//     var helpText = [
//         {'id': 'email', 'help': 'Your e-mail address'},
//         {'id': 'name', 'help': 'Your full name'},
//         {'id': 'age', 'help': 'Your age (you must be over 16)'}
//     ];
//
//     for (var i = 0; i < helpText.length; i++) {
//         let item = helpText[i];
//         document.getElementById(item.id).onfocus = function() {
//             showHelp(item.help);
//         }
//     }
// }

/****
 * 네 번째 대안
 * Array 내장 함수 forEach() 사용
 * ****/

function showHelp(help) {
    document.getElementById('help').textContent = help;
}

function setupHelp() {
    var helpText = [
        {'id': 'email', 'help': 'Your e-mail address'},
        {'id': 'name', 'help': 'Your full name'},
        {'id': 'age', 'help': 'Your age (you must be over 16)'}
    ];

    helpText.forEach(function(text) {
        document.getElementById(text.id).onfocus = function() {
            showHelp(text.help);
        }
    });
}


setupHelp();