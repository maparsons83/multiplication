// var result = 'x ';
// for (var i = 0; i < 11; i++) {

//     for (var j = 0; j < 11; j++) {

//         if(i == 0 && j > 0){
//           result += '[' + j + ']';
//         } 
//         else if(j == 0 && i>0){
//           result += '[' + i + '] ';
//         } 
//         else if(i>0 && j>0){
//         result += (i*j) + ' ';
//         }
//     }
//     result += '\n'
// }


// document.write (result);
// document.getElementById ("loop").innerHTML = new result
var color_td;
document.write("<table border>");

for(var a = 1; a < 10; a++) {

	document.write("<tr>");

	for(var b = 1; b < 10; b++) {

		if(b == 1 || a == 1) {
			
		}
		else {
			
		}

		document.write("<td " + color_td + "'>" + a*b + "</td>");
	}
	document.write("</tr>");
}

document.write("</table>");