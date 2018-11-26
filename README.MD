based on https://codeburst.io/create-a-heartbeat-c44aa346bc2d

uses:
- https://buildkite.com
- https://www.cypress.io/

If we get following error:
The authenticity of host 'github.com (192.30.253.112)' can't be established.
RSA key fingerprint is SHA256:nThbg6kXUpJWGl7E1IGOCspRomTxdCARLviKw6E5SY8.
Are you sure you want to continue connecting (yes/no)?

Add host to server known hosts like this:
sudo ssh-keyscan -H 192.30.253.112 >> ~/.ssh/known_hosts

Then try:
ssh -T git@github.com

should get:
Hi pablogiralt! You've successfully authenticated, but GitHub does not provide shell access.