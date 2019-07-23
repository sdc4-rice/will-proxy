# tf3-proxy

Proxy for the following services:
- https://github.com/fec4-gandolf/bid-buy
- https://github.com/fec4-gandolf/images-modal
- https://github.com/fec4-gandolf/Napoleon-Service
- https://github.com/fec4-gandolf/PeopleAlsoViewed

## Setup (local)

1. Clone all of the above modules. Follow the setup instructors for each of them.
2. Clone this repo.
3. Install npm modules: `npm install`
4. Create .env file. Specify a PORT value. I suggest `3000`:
    ```
    PORT=3000
    ```
5. Start each module that you cloned at step 1.
5. Confirm that the URL of each required bundle in `index.html` matches the URL that it is actually running at. Note that the `bid-buy` bundle URL in `index.html` currently points to its deployed URL, but the URLs of the three other bundles point to `localhost`. You will likely want to change this.
6. Start the proxy server: `npm start`

## Usage (local)

After the setup is complete, you can view a specific product at `http://localhost:<PORT>/?id=<ID>`.

For example, if your server is running on port `3000`, you can view the product with id `103` at the following URL: `http://localhost:3000/?id=103`.

## Known issues

The style of `images-modal` may conflict with the style of `PeopleAlsoViewed`.

This can be partially (but not fully) mitigated by requiring the bundle of `images-modal` after the bundle of `PeopleAlsoViewed` in `index.html`, which I have done.