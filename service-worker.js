self.addEventListener('install', (event) => {
  console.log('🛠️ Service Worker instalado');
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  console.log('🚀 Service Worker activado');
});

self.addEventListener('fetch', (event) => {
  // Puedes agregar lógica de cache aquí si deseas
});
