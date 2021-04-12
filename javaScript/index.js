    var btn = document.querySelector('button');

    btn.addEventListener("click", (
        function calcul() {
            var first = document.querySelector('#val1').value;
            console.log(first);
            var last = document.querySelector('#val2').value;
            console.log(last);
            var operateur = parseInt(document.querySelector('#oper').value);
            var operateurParsed = '';
            let somme = 0;

           switch (operateur) {
               case 0:
                    somme = Number(first) + Number(last);
                    operateurParsed = '+';
                   break;
                case 1:
                    somme = Number(first) - Number(last);
                    operateurParsed = '-';
                    break;
                case 2:
                    somme = Number(first) * Number(last);
                    operateurParsed = '*';
                    break;
                case 3:
                  somme = Number(first) / Number(last);
                  operateurParsed = '/';
                    break;
                case 4:
               somme = Number(first) % Number(last);
               operateurParsed = '%';
                break;
               default:
                    somme = "Non défini";
                   break;
           }
           console.log("somme : "+somme)
            let result = document.querySelector('#result');
        
            document.getElementById('result1').value = somme;
            AddRow(first,operateurParsed,last,somme)
            //document.getElementById('result1').value = ''
            
        }
    ))

//add row
    function AddRow(val1, operateur, val2,result) {
        var table = document.getElementById("tableId");
        var rowCount = parseInt(table.getElementsByTagName("tr").length );
        console.log("row : ",rowCount)
        //create a row
        var row = table.insertRow(rowCount);
        //create column for row
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);

        cell1.innerHTML =  rowCount ;
        cell2.innerHTML = val1.toString() + '' + operateur.toString()+ '' + val2.toString();

        cell3.innerHTML = result;
        var d =  new Date();
        cell4.innerHTML = d.getHours().toString()+ ':' + d.getMinutes().toString() + ':'+ d.getSeconds().toString();
        document.getElementById('result1').value = ''
      }

    var clear = document.getElementById("clear");

    clear.addEventListener("click", (

    function clear(){
        var table = document.getElementById("tableId");
        var rowCount = parseInt(table.getElementsByTagName("tr").length ) ;
        for (let i = 2; i < rowCount; i++) {
            table.deleteRow(i);
        }     
    } 
    ))