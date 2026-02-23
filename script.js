document.addEventListener('DOMContentLoaded', () => {
    const bibleContainer = document.getElementById('bible-container');

    fetch('bibles/telugu/OT/01-genesis/01.json')
        .then(response => response.json())
        .then(data => {
            data.verses.forEach(verse => {
                const verseDiv = document.createElement('div');
                verseDiv.classList.add('verse');

                const verseNumber = document.createElement('h3');
                verseNumber.textContent = `Verse ${verse.verse_number}`;
                verseDiv.appendChild(verseNumber);

                const teluguText = document.createElement('p');
                // Combine the 'te' properties of each word in the 'words' array
                teluguText.textContent = verse.words.map(word => word.te).join(' ');
                verseDiv.appendChild(teluguText);

                bibleContainer.appendChild(verseDiv);
            });
        });
});
