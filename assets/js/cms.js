---
layout: none
dir_path: netlifycms/scripts/
scripts:
  - editor_preview_journal.js
  - editor_component_collapsible_note.js
  - editor_component_videos.liquid
---

{% for script in page.scripts %}
  {% assign path = page.dir_path | append: script %}

  {% include {{ path }} %}
{% endfor %}
