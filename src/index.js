import './style/index.css';
import './js/api';
import { dnd } from './js/dnd';
import './js/filter';
import './js/localstorage';

// - Списки друзей
const leftFriendsList = document.getElementsByClassName('left-friends-list')[0];
const rightFriendsList = document.getElementsByClassName('right-friends-list')[0];


// Вызываем днд отправляя дроп зоны

dnd([leftFriendsList, rightFriendsList]);



