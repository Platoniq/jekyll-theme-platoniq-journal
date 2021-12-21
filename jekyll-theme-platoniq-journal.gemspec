# frozen_string_literal: true

Gem::Specification.new do |spec|
  spec.name          = "jekyll-theme-platoniq-journal"
  spec.version       = "0.0.1"
  spec.authors       = [""]
  spec.email         = [""]

  spec.summary       = "Write a short summary, because Rubygems requires one."
  spec.homepage      = "https://github.com/Platoniq/jekyll-theme-platoniq-journal"
  spec.license       = "MIT"

  spec.files         = `git ls-files -z`.split("\x0").select { |f| f.match(%r!^(assets|_layouts|_includes|_sass|LICENSE|README|_config\.yml)!i) }

  spec.add_runtime_dependency "jekyll", "~> 4.2"
  # spec.add_runtime_dependency "jekyll-seo-tag", "~>2.6"
  # spec.add_runtime_dependency "jekyll-menus"
  # spec.add_runtime_dependency 'jekyll-spark'
end
