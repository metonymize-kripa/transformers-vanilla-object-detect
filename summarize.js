import { pipeline} from 'https://cdn.jsdelivr.net/npm/@xenova/transformers@2.6.0';

document.getElementById('summarize-btn').addEventListener('click', async () => {
    const inputText = document.getElementById('input-text').value;
    if (!inputText) {
        alert('Please enter some text to summarize.');
        return;
    }

    document.getElementById('summary-output').textContent = 'Summarizing...';

    try {
        const generator = await pipeline('summarization', 'Xenova/distilbart-cnn-6-6');
        const output = await generator(inputText, { max_new_tokens: 100 });
        document.getElementById('summary-output').textContent = output[0].summary_text;
    } catch (error) {
        document.getElementById('summary-output').textContent = 'An error occurred during summarization.';
        console.error(error);
    }
});
