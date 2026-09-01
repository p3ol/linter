import type { GlobalConfiguration } from '@dprint/formatter';
import { createContext } from '@dprint/formatter';

import recommended from './recommended.json' with { type: 'json' };

export const context = createContext(recommended as GlobalConfiguration);

export default { context };
