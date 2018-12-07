function dnd(zones) {
    let currentDrag;

    zones.forEach(zone => {
        zone.addEventListener('dragstart', (e) => {
            e.dataTransfer.setData('text/html', 'dragstart'); 
            currentDrag = { source: zone, node: e.target };
        });
        
        zone.addEventListener('dragover', (e) => {
            e.preventDefault();
        });
        
        zone.addEventListener('drop', (e) => {
            if (currentDrag) {
         
                e.preventDefault();

                if (e.target.classList.contains('item-friend')) {
                    var halfHeigt = e.target.getBoundingClientRect().height / 2;
                    var yP = e.offsetY;

                    if (yP > halfHeigt) {
                        zone.insertBefore(currentDrag.node, e.target.nextElementSibling);
                      
                    } else {
                        zone.insertBefore(currentDrag.node, e.target);
                    }
                    
                } else {
                    zone.insertBefore(currentDrag.node, zone.lastElementChild);
                }
              
                currentDrag = null;
            }
        });
    });
}
// - Перемещение с помощью +
document.addEventListener('click', (e) => {

    const rightFriendsList = document.getElementsByClassName('right-friends-list')[0];
    const leftFriendsList = document.getElementsByClassName('left-friends-list')[0];
      
    if (e.target.classList.contains('addFriend')) {
       
        const currentList = e.target.parentNode.parentNode.classList.contains('right-friends-list');

        if (currentList) {
            leftFriendsList.appendChild(e.target.parentNode);
        } else {
            rightFriendsList.appendChild(e.target.parentNode);
        }
    } 
});

export {
    dnd
}