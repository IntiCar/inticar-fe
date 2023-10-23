 
const devApiUrl = 'https://api.example.apps.devs.infosys.id/api';
const sitURL = 'https://api.example.apps.devs.infosys.id/api';
const uatURL = 'https://api.example.apps.devs.infosys.id/api';
const prodApiUrl = 'https://api.example.apps.devs.infosys.id/api';

const apiUrl =
  process.env.NODE_ENV === 'production' ? process.env.VITE_APP_API : devApiUrl;

export default apiUrl;
