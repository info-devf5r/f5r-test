# IPTV

[![auto-update](https://github.com/iptv-org/iptv/actions/workflows/auto-update.yml/badge.svg)](https://github.com/iptv-org/iptv/actions/workflows/auto-update.yml)

Collection of publicly available IPTV (Internet Protocol television) channels from all over the world.

## Table of contents

- 🚀 [How to use?](#how-to-use)
- 📺 [Playlists](#playlists)
- 🗓 [EPG](#epg)
- 🗄 [Database](#database)
- 👨‍💻 [API](#api)
- 📚 [Resources](#resources)
- 💬 [Discussions](#discussions)
- ❓ [FAQ](#faq)
- 🛠 [Contribution](#contribution)
- ⚖ [Legal](#legal)
- © [License](#license)

## How to use?

Simply insert one of the links below into [any video player](https://github.com/iptv-org/awesome-iptv#apps) that supports live streaming and press _Open_.

![VLC Network Panel](https://github.com/iptv-org/iptv/raw/master/.readme/preview.png)

## Playlists

There are several versions of playlists that differ in the way they are grouped.

### Main playlist

Playlist includes all known channels except adult channels.

```
https://iptv-org.github.io/iptv/index.m3u
```

And here is the full version:

```
https://iptv-org.github.io/iptv/index.nsfw.m3u
```

### Grouped by category

<details>
<summary>Expand</summary>
<br>

Playlist in which each channel has its _category_ as a group title:

```
https://iptv-org.github.io/iptv/index.category.m3u
```

Same thing, but split up into separate files:

<!-- prettier-ignore -->
<table>
  <thead>
    <tr><th align="left">Category</th><th align="left">Channels</th><th align="left">Playlist</th></tr>
  </thead>
  <tbody>
    <tr><td>Auto</td><td align="right">13</td><td nowrap><code>https://info-devf5r.github.io/iptv/categories/auto.m3u</code></td></tr>
    <tr><td>Animation</td><td align="right">31</td><td nowrap><code>https://info-devf5r.github.io/iptv/categories/animation.m3u</code></td></tr>
    <tr><td>Business</td><td align="right">43</td><td nowrap><code>https://info-devf5r.github.io/iptv/categories/business.m3u</code></td></tr>
    <tr><td>Classic</td><td align="right">45</td><td nowrap><code>https://info-devf5r.github.io/iptv/categories/classic.m3u</code></td></tr>
    <tr><td>Comedy</td><td align="right">41</td><td nowrap><code>https://info-devf5r.github.io/iptv/categories/comedy.m3u</code></td></tr>
    <tr><td>Cooking</td><td align="right">19</td><td nowrap><code>https://info-devf5r.github.io/iptv/categories/cooking.m3u</code></td></tr>
    <tr><td>Culture</td><td align="right">21</td><td nowrap><code>https://info-devf5r.github.io/iptv/categories/culture.m3u</code></td></tr>
    <tr><td>Documentary</td><td align="right">41</td><td nowrap><code>https://info-devf5r.github.io/iptv/categories/documentary.m3u</code></td></tr>
    <tr><td>Education</td><td align="right">94</td><td nowrap><code>https://info-devf5r.github.io/iptv/categories/education.m3u</code></td></tr>
  </tbody>
</table>

</details>

### Grouped by language

<details>
<summary>Expand</summary>
<br>

Playlist in which each channel has its _language_ as a group title:

```
https://iptv-org.github.io/iptv/index.language.m3u
```

Same thing, but split up into separate files:

<!-- prettier-ignore -->
<table>
  <thead>
    <tr><th align="left">Language</th><th align="left">Channels</th><th align="left">Playlist</th></tr>
  </thead>
  <tbody>
    <tr><td align="left">Albanian</td><td align="right">21</td><td align="left" nowrap><code>https://info-devf5r.github.io/iptv/categories/sqi.m3u</code></td></tr>
    <tr><td align="left">Amharic</td><td align="right">1</td><td align="left" nowrap><code>https://info-devf5r.github.io/iptv/categories/amh.m3u</code></td></tr>
    <tr><td align="left">Arabic</td><td align="right">327</td><td align="left" nowrap><code>https://info-devf5r.github.io/iptv/categories/ara.m3u</code></td></tr>
    <tr><td align="left">Armenian</td><td align="right">26</td><td align="left" nowrap><code>https://info-devf5r.github.io/iptv/categories/hye.m3u</code></td></tr>
    <tr><td align="left">Assamese</td><td align="right">2</td><td align="left" nowrap><code>https://info-devf5r.github.io/iptv/categories/asm.m3u</code></td></tr>
    <tr><td align="left">Assyrian Neo-Aramaic</td><td align="right">1</td><td align="left" nowrap><code>https://info-devf5r.github.io/iptv/categories/aii.m3u</code></td></tr>
    <tr><td align="left">Azerbaijani</td><td align="right">12</td><td align="left" nowrap><code>https://info-devf5r.github.io/iptv/categories/aze.m3u</code></td></tr>
    <tr><td align="left">Bashkir</td><td align="right">1</td><td align="left" nowrap><code>https://info-devf5r.github.io/iptv/categories/bak.m3u</code></td></tr>
    <tr><td align="left">Basque</td><td align="right">1</td><td align="left" nowrap><code>https://info-devf5r.github.io/iptv/categories/eus.m3u</code></td></tr>
   </tbody>
</table>

</details>

### Grouped by country

<details>
<summary>Expand</summary>
<br>

Playlist in which each channel has its _country_ as a group title:

```
https://iptv-org.github.io/iptv/index.country.m3u
```

Same thing, but split up into separate files:

<!-- prettier-ignore -->
<table>
  <thead>
    <tr><th align="left">Country</th><th align="left">Channels</th><th align="left">Playlist</th></tr>
  </thead>
  <tbody>
    <tr><td>🇦🇫 Afghanistan</td><td align="right">65</td><td nowrap><code>https://info-devf5r.github.io/iptv/categories/af.m3u</code></td></tr>
    <tr><td>🇦🇱 Albania</td><td align="right">88</td><td nowrap><code>https://info-devf5r.github.io/iptv/categories/al.m3u</code></td></tr>
    <tr><td>🇩🇿 Algeria</td><td align="right">94</td><td nowrap><code>https://info-devf5r.github.io/iptv/categories/dz.m3u</code></td></tr>
    <tr><td>🇦🇸 American Samoa</td><td align="right">52</td><td nowrap><code>https://info-devf5r.github.io/iptv/categories/as.m3u</code></td></tr>
    <tr><td>🇦🇩 Andorra</td><td align="right">70</td><td nowrap><code>https://info-devf5r.github.io/iptv/categories/ad.m3u</code></td></tr>
    <tr><td>🇦🇴 Angola</td><td align="right">53</td><td nowrap><code>https://info-devf5r.github.io/iptv/categories/ao.m3u</code></td></tr>
    <tr><td>🇦🇮 Anguilla</td><td align="right">51</td><td nowrap><code>https://info-devf5r.github.io/iptv/categories/ai.m3u</code></td></tr>
    <tr><td>🇦🇶 Antarctica</td><td align="right">47</td><td nowrap><code>https://info-devf5r.github.io/iptv/categories/aq.m3u</code></td></tr>
    <tr><td>🇦🇬 Antigua and Barbuda</td><td align="right">52</td><td nowrap><code>https://info-devf5r.github.io/iptv/categories/ag.m3u</code></td></tr>
   </tbody>
</table>

</details>

### Grouped by region

<details>
<summary>Expand</summary>
<br>

Playlist in which each channel has its _region_ as a group title:

```
https://iptv-org.github.io/iptv/index.region.m3u
```

Same thing, but split up into separate files:

<!-- prettier-ignore -->
<table>
  <thead>
    <tr><th align="left">Region</th><th align="left">Channels</th><th align="left">Playlist</th></tr>
  </thead>
  <tbody>
    <tr><td align="left">Africa</td><td align="right">133</td><td align="left" nowrap><code>https://info-devf5r.github.io/iptv/categories/afr.m3u</code></td></tr>
    <tr><td align="left">Americas</td><td align="right">2910</td><td align="left" nowrap><code>https://info-devf5r.github.io/iptv/categories/amer.m3u</code></td></tr>
    <tr><td align="left">Asia-Pacific</td><td align="right">1562</td><td align="left" nowrap><code>https://info-devf5r.github.io/iptv/categories/apac.m3u</code></td></tr>
    <tr><td align="left">Arab world</td><td align="right">309</td><td align="left" nowrap><code>https://info-devf5r.github.io/iptv/categories/arab.m3u</code></td></tr>
    <tr><td align="left">Association of Southeast Asian Nations</td><td align="right">297</td><td align="left" nowrap><code>https://info-devf5r.github.io/iptv/categories/asean.m3u</code></td></tr>
    <tr><td align="left">Asia</td><td align="right">2274</td><td align="left" nowrap><code>https://info-devf5r.github.io/iptv/categories/asia.m3u</code></td></tr>
    <tr><td align="left">Benelux</td><td align="right">154</td><td align="left" nowrap><code>https://info-devf5r.github.io/iptv/categories/benelux.m3u</code></td></tr>
    <tr><td align="left">Caribbean</td><td align="right">106</td><td align="left" nowrap><code>https://info-devf5r.github.io/iptv/categories/carib.m3u</code></td></tr>
    <tr><td align="left">Central Asia</td><td align="right">29</td><td align="left" nowrap><code>https://info-devf5r.github.io/iptv/categories/cas.m3u</code></td></tr>
  </tbody>
</table>

</details>

## EPG

The playlists already contain links to all guides, so players with support the `x-tvg-url` tag should load it automatically. Otherwise, you can choose one of the guides featured in the [iptv-org/epg](https://github.com/iptv-org/epg) repository.

## Database

All channel data is taken from the [iptv-org/database](https://github.com/iptv-org/database) repository. If you find any errors please open a new [issue](https://github.com/iptv-org/database/issues) there.

## API

The API documentation can be found in the [iptv-org/api](https://github.com/iptv-org/api) repository.

## Resources

Links to other useful IPTV-related resources can be found in the [iptv-org/awesome-iptv](https://github.com/iptv-org/awesome-iptv) repository.

## Discussions

If you have a question or an idea, you can post it in the [Discussions](https://github.com/iptv-org/iptv/discussions) tab.

## FAQ

The answers to the most popular questions can be found in the [FAQ.md](FAQ.md) file.

## Contribution

Please make sure to read the [Contributing Guide](CONTRIBUTING.md) before sending an issue or making a pull request.

And thank you to everyone who has already contributed!

### Backers

<a href="https://opencollective.com/iptv-org"><img src="https://opencollective.com/iptv-org/backers.svg?width=890" /></a>

### Contributors

<a href="https://github.com/iptv-org/iptv/graphs/contributors"><img src="https://opencollective.com/iptv-org/contributors.svg?width=890" /></a>

## Legal

No video files are stored in this repository. The repository simply contains user-submitted links to publicly available video stream URLs, which to the best of our knowledge have been intentionally made publicly by the copyright holders. If any links in these playlists infringe on your rights as a copyright holder, they may be removed by sending a [pull request](https://github.com/iptv-org/iptv/pulls) or opening an [issue](https://github.com/iptv-org/iptv/issues/new?assignees=freearhey&labels=removal+request&template=--removal-request.yml&title=Remove%3A+). However, note that we have **no control** over the destination of the link, and just removing the link from the playlist will not remove its contents from the web. Note that linking does not directly infringe copyright because no copy is made on the site providing the link, and thus this is **not** a valid reason to send a DMCA notice to GitHub. To remove this content from the web, you should contact the web host that's actually hosting the content (**not** GitHub, nor the maintainers of this repository).

## License

[![CC0](http://mirrors.creativecommons.org/presskit/buttons/88x31/svg/cc-zero.svg)](LICENSE)