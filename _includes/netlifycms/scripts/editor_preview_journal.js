var JournalPreview = createClass({
  render: function() {
    var entry = this.props.entry;
    var cmsTitle = entry.getIn(['data', 'title'])
    var cmsJournalNum = entry.getIn(['data', 'journal-num'])
    var cmsCoverImage = entry.getIn(['data', 'cover', 'path']);

    var htmlString =`{% include journal/hero_image.liquid %}`;

    return h('div', {"dangerouslySetInnerHTML": {"__html": htmlString}} );
  }
});

CMS.registerPreviewTemplate("journals", JournalPreview);
