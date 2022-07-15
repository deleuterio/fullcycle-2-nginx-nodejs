## Setup

1. First install [open gpg](https://www.openpgp.org)
2. Try list any gpg configured `gpg --list-secret-key --keyid-form LONG`
3. Generate new key `gpg --full-generate-key`
4. Get your gpg id `gpg --list-secret-key --keyid-form LONG`
5. Export your gpg key and setting up her on github `gpg --armor --export {{GPG_ID}}`
6. Configure git to use your gpg: `git config --global user.signingkey {{GPG_ID}}`
7. Add this export to your .bash_profile to enable gpg every time you login: `export GPG_TTY=$(tty)`
8. Configure git to sign any commit or tag:
    - `git config --global commit.gpgsign true`
    - `git config --global tag.gpgsign true`
9. Start the agent: `gpgconf --launch gpg-agent`