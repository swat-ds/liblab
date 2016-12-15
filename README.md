# Digital Scholarship @ Swarthmore

---
based on the excellent [pixyll.com](http://www.pixyll.com) by [John Otander](http://johnotander.com)
see theme repo for full documentation
---

## Thanks to the following

* [BASSCSS](http://basscss.com)
* [Jekyll](http://jekyllrb.com)
* [Refills](http://refills.bourbon.io/)
* [Solarized](http://ethanschoonover.com/solarized)
* [Animate.css](http://daneden.github.io/animate.css/)

## Post-receive hook

- added post-receive hook to aws remote repository (`.git/hooks/`)
- added deploy remote `ds-aws`
- must make the post-receive script executable `chmod +x post-receive`
- (still necessary?) needed to manually install gem `io-console` in order for `bundler` to work correctly

:clap: :clap: :clap: :clap:
