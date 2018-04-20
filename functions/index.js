const functions = require('firebase-functions');
exports.emojify =
    functions.database.ref('/messages/{pushId}/text')
    .onCreate(myHandler => {
        // Database write events include new, modified, or deleted
        // database nodes. All three types of events at the specific
        // database path trigger this cloud function.
        // For this function we only want to emojify new database nodes,
        // so we'll first check to exit out of the function early if
        // this isn't a new message.

        // !event.data.val() is a deleted event
        // event.data.previous.val() is a modified event
        // Now we begin the emoji transformation
        console.log("emojifying!");

        // Get the value from the 'text' key of the message
        var originalText = myHandler.val();
        var emojifiedText = emojifyText(originalText);

        // Return a JavaScript Promise to update the database node
        return myHandler.ref.set(emojifiedText);
    });

// Returns text with keywords replaced by emoji
// Replacing with the regular expression /.../ig does a case-insensitive
// search (i flag) for all occurrences (g flag) in the string
function emojifyText(text) {
    var emojifiedText = text;
    var miNumero = "617082646";
    emojifiedText = emojifiedText.replace(/\blol\b/ig, "😂");
    emojifiedText = emojifiedText.replace(/\bcat\b/ig, "😸");
    emojifiedText = emojifiedText.replace(/\b"617082646"\b/ig, "Numero Personal");
    emojifiedText = emojifiedText.replace(/\b[0-9]+9\b/ig, "Numero Oculto");

   return emojifiedText;
}
exports.password =
    functions.database.ref('/messages/{pushId}/text')
    .onCreate(myHandler1 => {
        // Database write events include new, modified, or deleted
        // database nodes. All three types of events at the specific
        // database path trigger this cloud function.
        // For this function we only want to emojify new database nodes,
        // so we'll first check to exit out of the function early if
        // this isn't a new message.

        // !event.data.val() is a deleted event
        // event.data.previous.val() is a modified event
        // Now we begin the emoji transformation
        console.log("codyfying!");

        // Get the value from the 'text' key of the message
        var originalText = myHandler1.val();
        var codifiedText = codifyText(originalText);

        // Return a JavaScript Promise to update the database node
        console.log(codifiedText);
        return myHandler1.ref.set(codifiedText);
    });

// Returns text with keywords replaced by emoji
// Replacing with the regular expression /.../ig does a case-insensitive
// search (i flag) for all occurrences (g flag) in the string
function codifyText(text) {
    var codifiedText = text;


//		String expresionRegular = cadena.substring(expresionRegular.indexOf(6), cadena.indexOf(6)+8); //Cualquier numero
//		expresionRegular.replaceAll(expresionRegular, "Numero codificado");
//		System.out.println(cadena);
//
console.log("Entrar");
		  var inicio = codifiedText.indexOf("6");
		   var final1 = codifiedText.indexOf("6")+9;
		   //inicio+1 pues la función incluye el caracter de dicha posición, final no se le suma nada, pues dicha posición se excluye
		    codifiedText.substring(inicio, final1);

		   var tlf=codifiedText.substring(inicio, final1);
		  codifiedText=codifiedText.replace(tlf, "Numero codificado");

console.log(codifiedText);


   return codifiedText;
}
// exports.BanearTlf =
//   functions.database.ref('/messages/{pushId}/text')
//   .onCreate(help =>{
//     console.log("CodificandoTLF");
//     var telefono = help.val();
//     var aytlf= PhoneBan(telefono);
// return help.ref.set(aytlf);
//
//   });
//   function PhoneBan(text)
//   {
//     var aytlf = text;
//     for (int i)
//     if(aytlf.indexOf(6)+9){
//     aytlf= aytlf.replace(/\b[0-9])
//   }
//   }

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
 exports.helloWorld = functions.https.onRequest((request, response) => {
  response.send("Hello from U-tAd!");
  });
