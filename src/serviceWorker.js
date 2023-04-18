

const isLocalhost = Boolean(
  window.location.hostname === 'localhost' ||
    // [::1] is the IPv6 localhost address.
    window.location.hostname === '[::1]' ||
    // 127.0.0.1/8 is considered localhost for IPv4.
    window.location.hostname.match(
      /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
    )
);

export function register(config) {
  if (process.env.NODE_ENV === 'production' && 'serviceWorker' in navigator) {
    
    const publicUrl = new URL(process.env.PUBLIC_URL, window.location.href);
    if (publicUrl.origin !== window.location.origin) {

      return;
    }

    window.addEventListener('load', () => {
      const swUrl = `${process.env.PUBLIC_URL}/service-worker.js`;

      if (isLocalhost) {
  
        checkValidServiceWorker(swUrl, config);

        navigator.serviceWorker.ready.then(() => {
          console.log(
            "Это веб-приложение обслуживается службой сначала в кэше " + '- рабочий. Чтобы узнать больше, посетите http://bit.ly/CRA-PWA '
          );
        });
      } else {
     
        registerValidSW(swUrl, config);
      }
    });
  }
}

function registerValidSW(swUrl, config) {
  navigator.serviceWorker
    .register(swUrl)
    .then(registration => {
      registration.onupdatefound = () => {
        const installingWorker = registration.installing;
        if (installingWorker == null) {
          return;
        }
        installingWorker.onstatechange = () => {
          if (installingWorker.state === 'installed') {
            if (navigator.serviceWorker.controller) {

              console.log(
                'Новый контент доступен и будет использоваться, когда все ' +
                  'вкладки для этой страницы закрыты. Видишь http://bit.ly/CRA-PWA.'
              );

             
              if (config && config.onUpdate) {
                config.onUpdate(registration);
              }
            } else {
          
              console.log('Содержимое кэшируется для использования в автономном режиме.');

              
              if (config && config.onSuccess) {
                config.onSuccess(registration);
              }
            }
          }
        };
      };
    })
    .catch(error => {
      console.error('Ошибка при регистрации сервисного работника:', error);
    });
}

function checkValidServiceWorker(swUrl, config) {

  fetch(swUrl)
    .then(response => {
    
      const contentType = response.headers.get('content-type');
      if (
        response.status === 404 ||
        (contentType != null && contentType.indexOf('javascript') === -1)
      ) {
 
        navigator.serviceWorker.ready.then(registration => {
          registration.unregister().then(() => {
            window.location.reload();
          });
        });
      } else {
        
        registerValidSW(swUrl, config);
      }
    })
    .catch(() => {
      console.log(
        'Подключение к Интернету не найдено. Приложение работает в автономном режиме.'
      );
    });
}

export function unregister() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready.then(registration => {
      registration.unregister();
    });
  }
}
