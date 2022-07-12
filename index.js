// Add event listeners to each tab
const tabs = Array.from(document.querySelectorAll('.tab'))
const tabContainer = document.querySelector('.container')
const tabContents = Array.from(tabContainer.querySelectorAll('.tab-content'))


tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
        // Find the tab they clicked
        const target = tab.dataset.theme

        //Find the correct tab content
        const tabContent = tabContainer.querySelector('#' + target)

        //Select a tab and emphasizing the selected one
        tabs.forEach(t => t.classList.remove('is-selected'))
        tab.classList.add('is-selected')

        tabContents.forEach(c => c.classList.remove('is-selected'))
        tabContent.classList.add('is-selected')
    })

})
