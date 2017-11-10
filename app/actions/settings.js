// @flow

import type { SettingsType } from '../reducers/settings';
import type { Action } from './types';

export function saveSettings(settings: SettingsType): Action {
  return {
    type: 'SAVE_SETTINGS',
    settings
  };
}
