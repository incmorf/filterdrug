import './style/index.css';
import './js/api'; // Вызываем апи
import { dnd } from './js/dnd'; // ДрагНдроп
import './js/filter'; // Фильтрация
import './js/localstorage'; // Со

// - Списки друзей
const leftFriendsList = document.getElementsByClassName('left-friends-list')[0];
const rightFriendsList = document.getElementsByClassName('right-friends-list')[0];

// Вызываем днд отправляя дроп зоны

dnd([leftFriendsList, rightFriendsList]);