# MiniModal
A lightweight jQuery lightbox plugin so light it's lighter than light. The CSS and JS file combined is only 1.129kb 🎉🔥🔥🔥🎉.

## Usage
MiniModal requires jQuery version 1.3.0 or higher,

```html
<script src="//code.jquery.com/jquery-latest.js"></script>
<script src="mini-modal.min.js" type="text/javascript" charset="utf-8"></script>
```

There's super minimal CSS as well. You can certainly lump this in as a partial if you're using SASS or LESS, but this CSS is really easy to override.

```html
<link rel="stylesheet" href="src/mini-modal.min.css">
```

It's easy. Just add `data-minimodal` to the wrapper of the content you'd like to modal, and then add `data-minimodal-content` to the actual content you'd like to appear in the modal.

Ex.
```html
<div data-minimodal>
    <div>
        <p>Demo Clicker</p>
        <div class="" data-minimodal-content>
            <img src="http://fillmurray.com/1024/768" alt="">
        </div>
    </div>
</div>
```
