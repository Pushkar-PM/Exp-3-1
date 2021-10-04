function validateForm() {
    // Validation
    const mytshirt = [ 
        document.forms["tshirtForm"]["tagline"].value, 
        document.forms["tshirtForm"]["color"].value, 
        document.forms["tshirtForm"]["size"].value, 
        document.forms["tshirtForm"]["date"].value,
        document.forms["tshirtForm"]['quantity'].value,
        document.forms["tshirtForm"]["mobile"].value,
    ];
    
    const Empty = Object.values(mytshirt).some( (element) => element === "");
    
    if (Empty) {
        alert("Please fill in all fields"); 
        return;
    }

    const q=document.querySelector(".ch");
    const y=document.forms["tshirtForm"]["mobile"].value;
    if(y.length!=10||parseInt(y)==NaN){
        alert("Invalid mobile number");
        return;
    }

    console.log(q.checked);
    if(q.checked==false){
        alert("Please accept our terms");
        return;
    }

    
    // Bill
    const bill = `RECEIPT \nYour Coool Tagline: ${mytshirt[0]}\nColor: ${mytshirt[1]}\nSize: ${mytshirt[2]} \nDate: ${mytshirt[3]} \nQuantity: ${mytshirt[4]}`;
    
    alert(bill);
    }
    
    const form = document.getElementById("tshirtForm"); 

    form.addEventListener("submit", (event) => {
        // stop form submission 
        event.preventDefault();
    });