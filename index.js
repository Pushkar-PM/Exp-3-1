function validateForm() {
    // Validation
    const formComponent = [ 
        document.forms["buyForm"]["tagline"].value, 
        document.forms["buyForm"]["color"].value, 
        document.forms["buyForm"]["size"].value, 
        document.forms["buyForm"]["date"].value,
    ];
    
    const isEmpty = Object.values(formComponent).some( (element) => element === "");
    
    console.log(formComponent) 
    if (isEmpty) {
        alert("Please fill in all fields"); 
        return;
    }
    
    // Bill
    const bill = `RECEIPT \nTagline: ${formComponent[0]}\nColor: ${formComponent[1]}\nSize: ${formComponent[2]} \nDate: ${formComponent[3]}`;
    
    alert(bill);
    }
    
    const form = document.getElementById("buyForm"); 
    console.log(form)

    form.addEventListener("submit", (event) => {
        // stop form submission 
        event.preventDefault();
    });