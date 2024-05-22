document.addEventListener('DOMContentLoaded', () => {
    const dogList = document.getElementById('dog-list');
    const modal = document.getElementById('modal');
    const modalContent = document.getElementById('modal-content');
    const closeModal = document.getElementById('close-modal');

    closeModal.onclick = function() {
        modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    fetch('https://usersdogs.dmytrominochkin.cloud/dogs')
        .then(response => response.json())
        .then(data => {
            data.forEach(dog => {
                const dogItem = document.createElement('div');
                dogItem.classList.add('dog-item');
                dogItem.innerHTML = `
                    <img src="https://usersdogs.dmytrominochkin.cloud${dog.dogImage}" alt="${dog.title}" width="50" height="50">
                    <div>
                        <strong>${dog.title}</strong>
                        <span>${dog.sex.toLowerCase()}</span>
                    </div>
                `;
                dogItem.onclick = () => showDogDetails(dog);
                dogList.appendChild(dogItem);
            });
        })
        .catch(error => console.error('Error fetching dogs:', error));

    function showDogDetails(dog) {
        modalContent.innerHTML = `
            <span class="close" id="close-modal">&times;</span>
            <img src="https://usersdogs.dmytrominochkin.cloud${dog.dogImage}" alt="${dog.title}" width="100%">
            <h2>${dog.title}</h2>
            <p><strong>Sex:</strong> ${dog.sex}</p><br>
            <p><strong>Age:</strong> ${dog.age}</p><br>
            <p>${dog.description}</p><br>
            <button class="adopt-button" onclick="adoptDog(${dog.id})">Adopt Me</button>
        `;
        modal.style.display = "block";

        document.getElementById('close-modal').onclick = function() {
            modal.style.display = "none";
        }
    }
});

function adoptDog(dogId) {
    alert('Thank you for wanting to adopt dog ID: ' + dogId);
}
