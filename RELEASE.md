# Release process

> !! This process requires [access to our AWS production account](https://liveintent.atlassian.net/wiki/spaces/EL/pages/3077668865/How+To+Configure+AWS+Access), as all built applications reside there, regardless of environment.

## Deploying

#### 1. Checkout the branch and make sure you have the latest revision.

```sh
# For QA use integration
git checkout integration

# For STAGE use main
git checkout main

git pull
```

#### 2. Ensure project dependencies are installed.

```sh
npm install
```

#### 3. Build the application bundle.

```sh
npm run build
```

#### 3. Log in to AWS and assume a role.

```sh
aws-sso-util login
export AWS_PROFILE=ua-developer
```

#### 4. Tag and push the bundle to S3.

```sh
# For QA
npm run deploy:qa

# For STAGE/PROD
npm run deploy:prod
```

#### 5. Update the Portal application manifest to use the new version.

Go into the bifrost database's `applications` table and update the record for this application.
