# logging-api

This contains an API for logging things remotelly using a simple Heroku istance

## Automatic Setup Process (recommended)

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy)

## Manual Setup Process

1. Fork this repository. Make sure your branch is up-to-date with master.
2. Now, go to https://heroku.com and create an account (or log in, if you already have an account).
3. On your dashboard, click on "New" -> "Create new app"
4. Give your app a name (referred to as __{YOUR_APP_NAME}__) and select a region for deployment.
5. Go to the __Deploy__ section on your new app's dashboard.
    1. Under `Deployment Method`, select the GitHub option. You should be prompted to authorize Heroku's usage of your GitHub account information.
    2. Under `Connect to GitHub`, make sure your account is selected and type in "youtube-proxy" for the repository to search for.
    3. If you correctly forked this repository and typed in the repository name correctly, this should show up as an option to connect to. Click on "Connect".
6. Now, you're ready to deploy! Go back to the __Deploy__ section.
    1. Under `Manual Deploy`, click on "Deploy Branch".
7. If you get a "Your app was successfully deployed", congratulations, you are done, and your app should be running!
8. To verify, open up https://__{YOUR_APP_NAME}__.herokuapp.com in a new tab and see if it returns a correctly formed landing page.
