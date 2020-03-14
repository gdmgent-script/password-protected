
const secretPassWord = "awesomeShit";
let givenPassword;
let counter = 0;
let promptText = 'Give password';

do{
    givenPassword = prompt(promptText);
    promptText = 'Wrong, give password again.'
    counter++;
}while(givenPassword != secretPassWord)

document.write(`Welkom, jij weet het wachtwoord! Je hebt ${counter}x proberen raden`);

//MEERDERE OPLOSSINGEN MOGELIJKE