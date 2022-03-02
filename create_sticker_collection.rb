#!/usr/bin/env/ruby

#
# This ruby script is to create the front matter files which contain
# the data for each sticker, given a sticker folder with .png images.
#
# Example source directory: `jekyll-theme-platoniq-journal/assets/media/stickers/volume-1/`
# Example target directory: `journal-content/_stickers/`
#
# Example output:
# ```
#
# ---
# journal-num: journal-0
# uid: journal-0-thumbs_up
# path: /assets/media/stickers/journal-0/thumbs_up.png
# emoji: 🏳️
# name: Fill in with sticker description
# ---
#
# ```
#
volume_number = ARGV[0]
source_directory = ARGV[1]
target_directory = ARGV[2]

puts "JOURNAL VOLUME: " + volume_number
puts "SOURCE: " + source_directory
puts "TARGET: " + target_directory

Dir.foreach(source_directory) do |filename|
  next if (filename == ".") || (filename == "..")

  basename = File.basename(filename, ".png")
  journal_uid = "journal-#{volume_number}"
  uid = "#{journal_uid}-#{basename}"

  content = <<~CONTENT
    ---
    journal-num: #{journal_uid}
    uid: #{uid}
    path: /assets/media/stickers/#{journal_uid}/#{filename}
    emoji: 🏳️
    name: Fill in with sticker description
    ---
  CONTENT

  File.write(File.join(target_directory, uid + ".md"), content)
end
