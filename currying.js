function addNumbers(a) {
    return function(b) {
        return function(c) {
            return a + b + c;
        }
    }
}

console.log(addNumbers(2)(3)(10));


// function sendAutoEmail(to) {
//     return function(subject) {
//         return function(body) {
//             console.log(`Send Email to: ${to} with the subject - ${subject}. Here's your message - ${body}`);
//         }
//     }
// }

//Now with mordern javascript code :


const sendAutoEmail = (to) => (subject) => (body) => `Send Email to: ${to} with the subject - ${subject}. Here's your message - ${body}`;
let step1 = sendAutoEmail("nikhilkoshta2@gmail.com");

let step2 = step1("New Order Confirmation");

console.log(step2(`Hello dear Nikhil Your order is confirmed`));


