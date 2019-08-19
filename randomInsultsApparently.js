var randomBodyParts = ['foot', 'hand', 'bum', 'head', 'nose', 'face'];
var randomAdjectives = ['witty', 'kind', 'dazzling', 'gorgeous', 'friendly', 'helpful', 'magnanimous'];
var randomWords = ['elderberry', 'wheel', 'sofa', 'radiator', 'doorhandle', 'bike', 'measuring tape'];

var randomBodyPart = randomBodyParts[Math.floor(Math.random() * 3)];
var randomAdjective = randomAdjectives[Math.floor(Math.random() *3)];
var randomWord = randomWords[Math.floor(Math.random() * 3)];

console.log(`your ${randomBodyPart} is like a ${randomAdjective} ${randomWord}`)
