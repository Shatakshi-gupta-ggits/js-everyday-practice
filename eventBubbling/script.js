
    const output = document.getElementById('output');
        
        // Add event listeners to all elements
        document.getElementById('grandparent').addEventListener('click', function() {
            output.innerHTML += 'Grandparent clicked!<br>';
        });
        
        document.getElementById('parent').addEventListener('click', function() {
            output.innerHTML += 'Parent clicked!<br>';
        });
        
        document.getElementById('child').addEventListener('click', function() {
            output.innerHTML += 'Child clicked!<br>';
        });
        
        // Also add to document to show the full bubble
        document.addEventListener('click', function() {
            output.innerHTML += 'Document clicked!<br><hr>';
        });