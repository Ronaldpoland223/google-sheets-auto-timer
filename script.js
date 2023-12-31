   "dynamicLink": {
      "baseURL": "https://pylons.page.link",
      "apn": "tech.pylons.wallet",
      "ibi": "xyz.pylons.wallet",
      "isi": "1598732789",
      "oflPlay": "https://play.google.com/store/apps/details?id=tech.pylons.wallet&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1",
      "oflIOS": "https://apps.apple.com/us/app/pylons/id1598732789"
    },

      {
        "denom": "ubedrock",
        "displayName": "UBEDROCK",
        "fraction": 1000000
      },
      {

           transform: {
    /* Use babel-jest to transpile tests with the next/babel preset
        https://jestjs.io/docs/configuration#transform-objectstring-pathtotransformer--pathtotransformer-object */
    '^.+\\.(js|jsx|ts|tsx|svg)$': ['babel-jest', { presets: ['next/babel'] }]
  },
  transformIgnorePatterns: ['/node_modules/', '^.+\\.module\\.(css|sass|scss)$']
}

      "@organisms": ["@next/components/organisms"],
      "@templates": ["./@next/components/templates"],
      "@pages": ["./@next/pages"],
      "@layouts": ["./@next/layouts"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", "types.d.ts"],
  "exclude": ["node_modules"]
