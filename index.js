//Make the tabbing functional

// Add event listeners to each tab
const tabs = Array.from(document.querySelectorAll('.tab'))

tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
        // Find the tab they clicked
        console.log(tab)
        if (tab.getAttribute('data-theme') = 'fitness') {
            tab.style.backgroundColor = 'red'
        }
    })

})






// Find the corresponding tab content

// Remove is-selected from other tabs to de-emphasize them

// Remove is-selected from other tab content to hide them

// Add is-selected to the tab they clicked to emphasize it

// Add is-selected to the tab content to show it