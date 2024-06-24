# NaukaPythona.com

A simple static website hosted on GitHub pages that does the job promoting our services.

## Continuous Integration

- Dependabot watches dependencies and submodules.
  It then submits bulk PRs with updates and change summaries when necessary.


## Continuous Delivery

Supply chain security: before any build, the packages are audited for CVEs.

On successful audits, pushes to particular branches trigger new builds:

```
preview
└── build/preview

preview → production (merge)
           └── build/production
```

- Every push to the `preview` branch produces a build in the `build/preview`
  branch, which is immediately available at https://preview.naukapythona.com

- Every push to the `production` branch produces a build in the `build/production`
  branch, which is available after deployment approval at https://naukapythona.com

## Development

> [!tip]
> More to come here soon.

## Legal

© 2024 Bartosz Sławecki<br>
© 2024 NaukaPythona.com

All rights reserved.
