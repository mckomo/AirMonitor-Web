const env = process.env;

const Settings = {
  host: env.API_HOST || 'https://air-monitor.pl',
  secrets: {
    googleApiKey: env.GOOGLE_API_KEY || '',
  }
};

export default Settings;