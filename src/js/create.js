import render from '../templates/friends.hbs'; 

const leftFriendsList = document.getElementsByClassName('left-friends-list')[0];
const rightFriendsList = document.getElementsByClassName('right-friends-list')[0];

function create(data) {

    if (localStorage.getItem('dataLeft') !== null) {

        let leftList = localStorage.getItem('dataLeft');
        let rightList = localStorage.getItem('dataRight');

        leftFriendsList.innerHTML = leftList;
        rightFriendsList.innerHTML = rightList;
        
    } else {
     
        const html = render(data);

        leftFriendsList.innerHTML = html;

        const elementsDrag = document.getElementsByClassName('item-friend');

        for (var elem of elementsDrag) {
            elem.setAttribute('draggable', true);
        }

    }

}
export {
    create
}