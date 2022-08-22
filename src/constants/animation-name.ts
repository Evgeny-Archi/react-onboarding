import Directions from '../enums/directions';

export const SLIDEIN = 'slidein';
export const SLIDEOUT = 'slideout';
export const SLIDEIN_FW = `${SLIDEIN}-${Directions.Forward}`;
export const SLIDEOUT_FW = `${SLIDEOUT}-${Directions.Forward}`;
export const SLIDEIN_BW = `${SLIDEIN}-${Directions.Backward}`;
export const SLIDEOUT_BW = `${SLIDEOUT}-${Directions.Backward}`;
export const FADEIN = 'fadein';
export const FADEOUT = 'fadeout';
