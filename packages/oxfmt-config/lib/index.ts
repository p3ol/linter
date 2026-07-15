import type { OxfmtConfig } from 'oxfmt';

import recommended from './recommended.json' with { type: 'json' };

export const configs = {
  recommended: recommended as OxfmtConfig,
};

export default { configs };
