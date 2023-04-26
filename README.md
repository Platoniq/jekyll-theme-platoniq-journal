# jekyll-theme-platoniq-journal

Welcome to your new Jekyll theme! In this directory, you'll find the files you need to be able to package up your theme into a gem. Put your layouts in `_layouts`, your includes in `_includes`, your sass files in `_sass` and any other assets in `assets`.

To experiment with this code, add some sample content and run `bundle exec jekyll serve` – this directory is setup just like a Jekyll site!

TODO: Delete this and the text above, and describe your gem


## Installation

Add this line to your Jekyll site's `Gemfile`:

```ruby
gem "jekyll-theme-platoniq-journal"
```

And add this line to your Jekyll site's `_config.yml`:

```yaml
theme: jekyll-theme-platoniq-journal
```

And then execute:

    $ bundle

Or install it yourself as:

    $ gem install jekyll-theme-platoniq-journal

## Usage

TODO: Write usage instructions here. Describe your available layouts, includes, sass and/or assets.

This plugin is intended to be used with different volumes. In order to create different volume styles, you can create a new file in `_sass` folder, with the same id as the volume created in the [journal](https://github.com/platoniq/wilder-journal) repository. The new volume will have the new styles as it will be added to the header of the different pages of the volume.

The new styles variable should be defined in the `_sass/_variables.scss` file, and the new styles should be imported in the `_sass/wilder-journal-id_.scss` file.

## Contributing

Bug reports and pull requests are welcome on GitHub at https://github.com/[USERNAME]/hello. This project is intended to be a safe, welcoming space for collaboration, and contributors are expected to adhere to the [Contributor Covenant](http://contributor-covenant.org) code of conduct.

## Development

To set up your environment to develop this theme, run `bundle install`.

Your theme is setup just like a normal Jekyll site! To test your theme, run `bundle exec jekyll serve` and open your browser at `http://localhost:4000`. This starts a Jekyll server using your theme. Add pages, documents, data, etc. like normal to test your theme's contents. As you make modifications to your theme and to your content, your site will regenerate and you should see the changes in the browser after a refresh, just like normal.

When your theme is released, only the files in `_layouts`, `_includes`, `_sass` and `assets` tracked with Git will be bundled.
To add a custom directory to your theme-gem, please edit the regexp in `jekyll-theme-platoniq-journal.gemspec` accordingly.

## License

The theme is available as open source under the terms of the [GNU AFFERO GENERAL PUBLIC LICENSE](https://opensource.org/licenses/AGPL-3.0).

## Credits

This theme has been developed by ![Platoniq](https://avatars.githubusercontent.com/u/31537393?s=200&v=4)
