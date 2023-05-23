import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'br.com.covida',
  appName: 'covida-web',
  webDir: 'dist/covida-web',
  server: {
    androidScheme: 'https'
  }
};

export default config;
