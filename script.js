document.getElementById('wasteForm').addEventListener('submit', function(event) { event.preventDefault();

    let name = document.getElementById('name').value;
    let address = document.getElementById('address').value; let category = document.getElementById('category').value; let quantity = document.getElementById('quantity').value;
    
    console.log(`Name: ${name}, Address: ${address}, Category: ${category}, Quantity:
    ${quantity}`);
     
    
    // Send the data to the server here.
    });