import api from '../../services/api';

export default async function loadImages() {
  const USER_ID = 17841401907109662;
  const TOKEN = 'IGQVJWaDFrZAVpQa2lHbGZA3ZAEUyOHM2X3ZARa1JQT0huYkg2MTVfcy0xNHZAZAd2ZAnSlUwVkVQTUpqb20xTFc5RGFqWXF0OEExM0tTMEpoTThPZA0tPWUM3MjJOUXhXaDIyZAHN2bGNpTHdvVmFzUkk5bXdFMWowSEVzbl82N19ZA';

  const { data } = await api.get(
    `https://graph.instagram.com/${USER_ID}?fields=id,media_type,media_url,username&access_token=${TOKEN}`,
  );

  return data;
}
