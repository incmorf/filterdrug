const leftFriendsList = document.getElementsByClassName('left-friends-list')[0];
const rightFriendsList = document.getElementsByClassName('right-friends-list')[0];

const saveBtn = document.getElementById('saveBtn');

saveBtn.addEventListener('click', () => {
  
    localStorage.setItem('dataLeft', leftFriendsList.innerHTML);
    localStorage.setItem('dataRight', rightFriendsList.innerHTML);
    
});

const cleanLS = document.getElementById('cleanLS');

cleanLS.addEventListener('click', () => {
    localStorage.clear();
});
