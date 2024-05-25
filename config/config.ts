const isProd = process.env.NODE_ENV === 'production';

const serverURL = isProd ? process.env.NEXT_PUBLIC_SERVER : process.env.NEXT_PUBLIC_SERVER_LOC
const domainURL = isProd ? process.env.NEXT_PUBLIC_DOMAIN : process.env.NEXT_PUBLIC_DOMAIN_LOC

const config = {
  serverURL,
  domainURL
};

export default config;