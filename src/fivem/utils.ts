import settings from './settings';

export const getServerIP = settings.ipMask;
export const getLaunchUrl = `fivem://connect/${settings.ip}:${settings.port}`;