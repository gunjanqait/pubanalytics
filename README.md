# 🏂 Portal App Template

> Use this template to quickly scafflod a new Portal app

## Getting Started

Click the `Use this template` button at the top right of this page to create your new project. Once you've filled out the information and cloned your new project locally, run:

```
./configure.sh
```

from within your project and answer the questions at the prompts to finalize your project setup.

**Note**: When creating a new application or service, make sure to visit the [new application checklist](https://www.notion.so/Creating-a-new-software-project-032f1cdf2674427188bbc715e1d58689) to ensure your new service will be set up with everything it needs for deployment.

## What's Included

This template includes a React v17 app with ready-made configuration to run the app inside the LiveIntent Portal.

### Included

- Features
  - includes the [LUI]() library
  - includes a `PortalContext` to retrieve shared info from the Portal
  - inclues a `useAuth` hook to access the currently logged in user
  - inclues Tailwind CSS
- Development
  - watch script to continously build for portal, if desired
- Deployment
  - Pre configured deploy script to generate appropriate single js file for portal
  - Pre configured entry to mount itself to the portal
