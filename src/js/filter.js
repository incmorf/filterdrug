// Фильтр
const friendName = document.getElementsByClassName('friendName');

document.addEventListener('keyup', (e) => {
    if (e.target.classList.contains('filter')) {
        const filterL = document.getElementsByClassName('filter')[0].value;  
        const filterR = document.getElementsByClassName('filter')[1].value;  

        for (let i=0; i<friendName.length; i++) {
            friendName[i].parentNode.style.display = 'flex';
            let friend = friendName[i];
            let nameFriendLw = friend.textContent.toLowerCase();
            let filterLw = filterL.toLowerCase();
            let filterRw = filterR.toLowerCase();

            if (nameFriendLw.indexOf(filterLw) < 0 && friend.closest('.left-friends-list')) {
                
                friend.parentNode.style.display = 'none';
            } 

            if (nameFriendLw.indexOf(filterRw) < 0 && friend.closest('.right-friends-list')) {
                
                friend.parentNode.style.display = 'none';
            } 
        }

    }
});