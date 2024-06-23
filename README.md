# NaukaPythona.com

Simple static website hosted on GitHub pages.

## Continuous Integration

- Dependabot watches dependencies and submodules.
  It then submits bulk PRs with updates and change summaries when necessary.


## Continuous Delivery

```
production
└── build/production
preview
└── build/preview
```

**Rules**

- Every push to the `production` branch produces a build in the `build/production`
  branch, which is immediately available at https://naukapythona.com

- Every push to the `preview` branch produces a build in the `build/preview`
  branch, which is immediately available at https://preview.naukapythona.com

## Development

> [!tip]
> More to come here soon.

## Legal

© 2024 Bartosz Sławecki<br>
© 2024 NaukaPythona.com

All rights reserved.
