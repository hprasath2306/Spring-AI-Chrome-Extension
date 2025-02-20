document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('summarizeBtn').addEventListener('click', summarizeText);
});

function showLoader() {
    const results = document.getElementById('results');
    results.innerHTML = `
        <div class="loader-container active">
            <div class="loader"></div>
            <div class="loader-text">Summarizing your text...</div>
        </div>
    `;
}

function hideLoader() {
    const loaderContainer = document.querySelector('.loader-container');
    if (loaderContainer) {
        loaderContainer.remove();
    }
}

async function summarizeText() {
    try {
        const [tab] = await chrome.tabs.query({ active:true, currentWindow: true});
        const [{ result }] = await chrome.scripting.executeScript({
            target: {tabId: tab.id},
            function: () => window.getSelection().toString()
        });

        if (!result) {
            showResult('Please select some text first');
            return;
        }

        showLoader();

        const response = await fetch('http://localhost:8080/api/extension/process', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ content: result, operation: 'summarize'})
        });

        if (!response.ok) {
            throw new Error(`API Error: ${response.status}`);
        }

        const text = await response.text();
        
        hideLoader();
        showResult(text.replace(/\n/g,'<br>'));

    } catch (error) {
        hideLoader();
        showResult('Error: ' + error.message);
    }
}


function showResult(content) {
    document.getElementById('results').innerHTML = `<div class="result-item"><div class="result-content">${content}</div></div>`;
}