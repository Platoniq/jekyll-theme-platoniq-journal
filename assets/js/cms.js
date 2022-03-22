---
layout: none
dir_path: netlifycms/scripts/
scripts:
  - editor_preview_volume.js
  - editor_preview_sticker.js
  - editor_component_gallery.liquid
  - editor_component_quote_tag.liquid
  - editor_component_file_tag.liquid
  - editor_component_documents_tag.liquid
  - editor_component_links_tag.liquid
  - editor_component_numbers_tag.liquid
  - editor_component_questions_tag.liquid
  - editor_component_videos.liquid
---

{% for script in page.scripts %}
  {% assign path = page.dir_path | append: script %}

  {% include {{ path }} %}
{% endfor %}
