# Slate Configuration File

This is a `.slate.js` file for the [Slate Window Management System](https://github.com/mattr-/slate).

> Slate is a window management application similar to Divvy and SizeUp (except better and free!). Originally written to replace them due to some limitations in how each work, it attempts to overcome them by simply being extremely configurable. As a result, it may be a bit daunting to get configured, but once it is done, the benefit is huge.

The layout is based on a windows only application "WinSplit Revolution".  For a quick overview [watch this youtube video](https://www.youtube.com/watch?v=o1AtHyf4pRQ).

I switch from a desktop full keyboard to a laptop so this includes two sets of keyboard bindings.  One designed for a full keyboard with number pad and one designed for a smaller keyboard without number pad. 

Shortcut will cycle through three sizes except for the top/bottom which will cycle through two sizes.  All numbers on full keyboard shortcuts refer to number pad.

| Full Keyboard Shortcut | Small Keyboard Shortcut | Window Movement |
| ------------- | ----------- | ----------- |
| <kbd>&#8984;</kbd> + <kbd>6</kbd> | <kbd>&#8984;</kbd> + <kbd>alt</kbd> + <kbd>&rarr;</kbd> | Right Side of Screen |
| <kbd>&#8984;</kbd> + <kbd>4</kbd> | <kbd>&#8984;</kbd> + <kbd>alt</kbd> + <kbd>&larr;</kbd> | Left Side of Screen |
| <kbd>&#8984;</kbd> + <kbd>8</kbd> | <kbd>&#8984;</kbd> + <kbd>alt</kbd> + <kbd>&uarr;</kbd> | Top or Top Middle of Screen |
| <kbd>&#8984;</kbd> + <kbd>2</kbd> | <kbd>&#8984;</kbd> + <kbd>alt</kbd> + <kbd>&darr;</kbd> | Bottom or Bottom Middle of Screen|
| <kbd>&#8984;</kbd> + <kbd>9</kbd> | <kbd>&#8984;</kbd> + <kbd>alt</kbd> +  <kbd>shift</kbd> + <kbd>&larr;</kbd> | Top Right Corner of Screen |
| <kbd>&#8984;</kbd> + <kbd>3</kbd> | <kbd>&#8984;</kbd> + <kbd>alt</kbd> + <kbd>shift</kbd> + <kbd>&darr;</kbd> | Bottom Right Corner of Screen |
| <kbd>&#8984;</kbd> + <kbd>7</kbd> | <kbd>&#8984;</kbd> + <kbd>alt</kbd> +  <kbd>shift</kbd> + <kbd>&rarr;</kbd> | Top Left Corner of Screen |
| <kbd>&#8984;</kbd> + <kbd>1</kbd> | <kbd>&#8984;</kbd> + <kbd>alt</kbd> + <kbd>shift</kbd> + <kbd>&uarr;</kbd> | Bottom Left Corner of Screen |
| <kbd>&#8984;</kbd> + <kbd>shift</kbd> + <kbd>6</kbd> | <kbd>&#8984;</kbd> + <kbd>alt</kbd> + <kbd>control</kbd> + <kbd>&rarr;</kbd> | Right Side of Right Monitor |
| <kbd>&#8984;</kbd> + <kbd>shift</kbd> + <kbd>4</kbd> | <kbd>&#8984;</kbd> + <kbd>alt</kbd> + <kbd>control</kbd> + <kbd>&larr;</kbd> | Left Side of Left Monitor |
| <kbd>&#8984;</kbd> + <kbd>5</kbd> | <kbd>&#8984;</kbd> + <kbd>alt</kbd> + <kbd>f</kbd> | Make Window Full Screen Size |

## Install
See [mattr-/slate#installing-slate](https://github.com/mattr-/slate#installing-slate) for Slate install instructions.  Then run this command in your terminal:

~~~bash
cd ~ && curl https://raw.githubusercontent.com/josephlavin/slate-config/master/slate.js -o .slate.js
~~~

This will put [slate.js](slate.js) into your `home` directory as `.slate.js`.
