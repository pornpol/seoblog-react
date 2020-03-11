import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig();

export const API = publicRuntimeConfig.PRODUCTION
  ? publicRuntimeConfig.API_DEVELOPMENT
  : publicRuntimeConfig.API_PRODUCTION;

export const APP_NAME = publicRuntimeConfig.APP_NAME;
