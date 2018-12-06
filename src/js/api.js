import { create } from '../js/create';
// - Инициализия вк
window.vkAsyncInit = function() {
    VK.init({
        apiId: 6766571
    });
  
    function auth() {
        return new Promise((resolve, reject) => {
    
            VK.Auth.login(data => {
                if (data.session) {
                    resolve();
                } else {
                    reject(new Error('Не удалось авторизоватся'));
                }
            }, 2);
        }); 
    }
  
    function callApi (method, params) {
        params.v = '5.76';
        
        return new Promise((resolve, reject) => {
            VK.api(method, params, (data) => {
                if (data.error) {
                    reject(data.error);
                } else {
            
                    resolve(data.response);
                }
            });
        });
    }

    // Вызываем аунтификацию, затем берем друзей, затем отправляем их в функцию
    // create
    auth()
        .then(() => {  
            return callApi('friends.get', { fields: 'city, country, photo_100' });
        })
        .then(friends => {         
            create(friends);      
        });
};
 
setTimeout(function() {
    var el = document.createElement('script');

    el.type = 'text/javascript';
    el.src = 'https://vk.com/js/api/openapi.js?160';
    el.async = true;
    document.getElementById('vk_api_transport').appendChild(el);
}, 0);
