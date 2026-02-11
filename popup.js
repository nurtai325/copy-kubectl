document.getElementById('extractBtn').addEventListener('click', async () => {
  const statusDiv = document.getElementById('status');
  
  try {
    // Get the active tab
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    
    // Execute the code extraction script
    const results = await chrome.scripting.executeScript({
      target: { tabId: tab.id },
      function: extractCodeCommands
    });
    
    // Get the extracted commands from the result
    const commands = results[0].result;
    
    if (commands) {
      // Copy to clipboard
      await navigator.clipboard.writeText(commands);
      
      // Show success message
      statusDiv.textContent = 'Commands copied to clipboard!';
      statusDiv.className = 'success';
      statusDiv.style.display = 'block';
      
      // Hide message after 3 seconds
      setTimeout(() => {
        statusDiv.style.display = 'none';
      }, 3000);
    } else {
      throw new Error('No visible code elements found');
    }
    
  } catch (error) {
    // Show error message
    statusDiv.textContent = 'Error: ' + error.message;
    statusDiv.className = 'error';
    statusDiv.style.display = 'block';
    
    setTimeout(() => {
      statusDiv.style.display = 'none';
    }, 5000);
  }
});

// This function will be injected into the page
function extractCodeCommands() {
  var allCode = document.querySelectorAll('code');
  var visibleCode = Array.from(allCode)
    .filter(function(el) {
      var style = window.getComputedStyle(el);
      return style.display !== 'none' && style.visibility !== 'hidden' && el.offsetParent !== null;
    })
    .slice(1); // skip first visible
  
  // Create a string where each command is separated by double newlines for clarity
  var commands = visibleCode.map(function(el) {
    return el.textContent.trim(); // trim spaces to avoid terminal issues
  }).join('\n\n'); // double newline so commands are distinct
  
  console.log(commands);
  return commands;
}
