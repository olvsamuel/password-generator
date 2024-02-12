const chars1 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const chars2 = chars1.toLowerCase();
const chars3 = '1234567890';
const chars4 = '!@#$%&*(){}?';
const caracters = chars1 + chars2 + chars3 + chars4;

class Generator {
    static GeneratePWD(length = 8) {
        let pwd = '';
        for (let i = 0; i < length; i++) {
            
            pwd += caracters.charAt(Math.floor(Math.random() * caracters.length));

        };

        return { pwd, Safety: Safety(pwd) };
    }

}

function Safety(pwd) {
    var complx = 0;
    var regexArray = [/[a-z]/, /[A-Z]/, /[0-9]/, /[!@#$%&*(){}?]/];
  
    regexArray.forEach(regex => complx += regex.test(pwd) ? 25 : 0);
    complx += pwd.length >= 8 ? 25 : 0;
  
    return Math.min(complx, 100);
}


module.exports = Generator;