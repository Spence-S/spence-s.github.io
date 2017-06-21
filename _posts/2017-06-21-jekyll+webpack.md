---
layout: post
title: "Using Jekyll with Webpack"
date: 2017-06-21
---

When I took the task of actually building a out a personal website and blog, I was surprisingly
dumbfounded on what to do. I had built websites in the past and gone through the whole
nine yards, but those I didn't have to make **all** the decisions. This was now going
to be **my** site and I wanted something that was more developer focused that wordpress,
but also easy and elegant. Quickly, my old github pages site came to mind.

Without going into the nitty gritty, Github provides a lot of quality in their ability
to publish a personal website with github pages, and I liked what I saw a lot. I also
really enjoyed laying out the project in jekyll format. It was nice. But Jekyll felt
like it was missing a lot for me.

When I started introducing my own build tooling in javascript, things got really fun.

I haven't seen a lot of other well written and thorough write ups on this, so I
thought I would give it a shot.

## The Webpack config

First, let's just take a look at the webpack config code, then we can take get on a deep
dive about what's going on in the code and why its cool.

```javascript
var ExtractTextPlugin = require('extract-text-webpack-plugin');

const extractSass = new ExtractTextPlugin({
    filename: "[name].css",
    disable: process.env.NODE_ENV === "development"
});

module.exports = {
    entry: [
        `${__dirname}/css/main.scss`,
    ],
    output: {
        path: `${__dirname}/css/`,
        publicPath: '/',
        filename: 'main.css',
    },
    module: {
        rules: [{
            test: /\.scss$/,
            use: extractSass.extract({
                use: [{
                    loader: "css-loader"
                }, {
                    loader: "sass-loader"
                }],
                // use style-loader in development
                fallback: "style-loader"
            })
        }]
    },
    plugins: [
        extractSass
    ]
};
```
